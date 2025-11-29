// Script to populate status_bup field for all existing personnel
const { PrismaClient } = require("../lib/generated/prisma");

const prisma = new PrismaClient();

// Helper functions (copied from bupHelper.js for standalone use)
function calculateAge(birthDate) {
  if (!birthDate) return 0;
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function getRankFromPangkat(pangkat) {
  if (!pangkat) return null;
  const lowerRank = pangkat.toLowerCase();

  if (lowerRank.includes("brigjen")) return "brigjen";
  if (lowerRank.includes("mayjen")) return "mayjen";
  if (lowerRank.includes("letjen")) return "letjen";
  if (lowerRank.includes("jenderal")) return "jenderal";

  return null;
}

async function getBupForRank(rank) {
  const configMap = {
    brigjen: "BUP_BRIGJEN",
    mayjen: "BUP_MAYJEN",
    letjen: "BUP_LETJEN",
  };

  const configKey = configMap[rank];
  if (!configKey) return null;

  const config = await prisma.config.findUnique({
    where: { key: configKey },
  });

  return config ? parseInt(config.value, 10) : null;
}

async function main() {
  console.log("Starting to populate status_bup field...");

  // Get all personnel
  const allPersonnel = await prisma.personil.findMany();
  console.log(`Found ${allPersonnel.length} personnel records`);

  let updated = 0;
  let skipped = 0;

  for (const person of allPersonnel) {
    const rank = getRankFromPangkat(person.PANGKAT);

    if (!rank) {
      // Not a PATI rank, skip
      skipped++;
      continue;
    }

    const bupAge = await getBupForRank(rank);
    if (!bupAge) {
      console.log(`No BUP config found for rank: ${rank}`);
      skipped++;
      continue;
    }

    const age = calculateAge(person.TTL);
    const status_bup = age >= bupAge ? "Pensiun" : "Aktif";

    await prisma.personil.update({
      where: { id: person.id },
      data: { status_bup },
    });

    updated++;

    if (updated % 50 === 0) {
      console.log(`Updated ${updated} records...`);
    }
  }

  console.log(`\n✅ Population complete!`);
  console.log(`   Updated: ${updated}`);
  console.log(`   Skipped: ${skipped}`);
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
