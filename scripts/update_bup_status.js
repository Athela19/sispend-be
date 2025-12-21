const { PrismaClient } = require("../lib/generated/prisma");
const prisma = new PrismaClient();

// We need to replicate the logic here because we can't easily import ES modules (lib/bupHelper.js)
// into a CommonJS script without some setup, and we want this script to be standalone and simple.
// Or we can try to use dynamic import() if we really want to reuse the code.
// However, for a one-off script, duplicating the small logic is often safer and easier to run.

const BUP_KEYS = {
  BRIGJEN: "BUP_BRIGJEN",
  MAYJEN: "BUP_MAYJEN",
  LETJEN: "BUP_LETJEN",
};

const DEFAULT_BUP_AGE = 58;

async function getBupConfig(key) {
  const config = await prisma.config.findUnique({
    where: { key },
  });
  return config ? parseInt(config.value, 10) : DEFAULT_BUP_AGE;
}

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

function normalizeRank(pangkat) {
  if (!pangkat) return null;
  return pangkat
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+tni.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getRankFromPangkat(pangkat) {
  if (!pangkat) return null;
  const lowerRank = normalizeRank(pangkat);

  if (lowerRank.includes("brigjen")) return "brigjen";
  if (lowerRank.includes("mayjen")) return "mayjen";
  if (lowerRank.includes("letjen")) return "letjen";
  if (lowerRank.includes("jenderal")) return "jenderal";

  return null;
}

async function getBupForRank(rank) {
  const configMap = {
    brigjen: BUP_KEYS.BRIGJEN,
    mayjen: BUP_KEYS.MAYJEN,
    letjen: BUP_KEYS.LETJEN,
  };

  const configKey = configMap[rank];
  if (!configKey) return null;

  return await getBupConfig(configKey);
}

async function checkBupStatus(personil) {
  if (!personil.TTL) return "Unknown";

  const rank = getRankFromPangkat(personil.PANGKAT);
  if (!rank) return "Unknown";

  const bupAge = await getBupForRank(rank);
  if (!bupAge) return "Unknown";

  const age = calculateAge(personil.TTL);

  if (age >= bupAge) {
    return "mencapai bup";
  } else if (age === bupAge - 1) {
    return "akan bup";
  } else {
    return "belum bup";
  }
}

async function main() {
  console.log("Starting BUP status update...");

  const personils = await prisma.personil.findMany();
  console.log(`Found ${personils.length} personnel records.`);

  let updatedCount = 0;
  let errorCount = 0;

  for (const personil of personils) {
    try {
      const newStatus = await checkBupStatus(personil);

      if (personil.status_bup !== newStatus) {
        await prisma.personil.update({
          where: { id: personil.id },
          data: { status_bup: newStatus },
        });
        updatedCount++;
        if (updatedCount % 100 === 0) {
          console.log(`Updated ${updatedCount} records...`);
        }
      }
    } catch (error) {
      console.error(`Error updating personil ID ${personil.id}:`, error);
      errorCount++;
    }
  }

  console.log("Update complete.");
  console.log(`Updated: ${updatedCount}`);
  console.log(`Errors: ${errorCount}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
