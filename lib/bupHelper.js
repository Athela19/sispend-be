import prisma from "./prisma";

export const BUP_KEYS = {
  BRIGJEN: "BUP_BRIGJEN",
  MAYJEN: "BUP_MAYJEN",
  LETJEN: "BUP_LETJEN",
  PAMEN: "PENSIUN_USIA_PAMEN",
  PAMA: "PENSIUN_USIA_PAMA",
  OTHER: "PENSIUN_USIA_OTHER",
};

export async function getBupConfig(key) {
  const config = await prisma.config.findUnique({
    where: { key },
  });
  return config ? parseInt(config.value, 10) : 58; // Default to 58 if not found
}

export function calculateAge(birthDate) {
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

export function getRankFromPangkat(pangkat) {
  if (!pangkat) return null;
  const lowerRank = pangkat.toLowerCase();

  if (lowerRank.includes("brigjen")) return "brigjen";
  if (lowerRank.includes("mayjen")) return "mayjen";
  if (lowerRank.includes("letjen")) return "letjen";
  if (lowerRank.includes("jenderal")) return "jenderal";

  return null;
}

export function isPati(rank) {
  if (!rank) return false;
  const lowerRank = rank.toLowerCase();
  return ["brigjen", "mayjen", "letjen", "jenderal"].some((r) =>
    lowerRank.includes(r)
  );
}

export async function getBupForRank(rank) {
  const configMap = {
    brigjen: BUP_KEYS.BRIGJEN,
    mayjen: BUP_KEYS.MAYJEN,
    letjen: BUP_KEYS.LETJEN,
  };

  const configKey = configMap[rank];
  if (!configKey) return null;

  return await getBupConfig(configKey);
}

export async function checkBupStatus(personil) {
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
