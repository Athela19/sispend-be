import prisma from "./prisma";

export const BUP_KEYS = {
  BRIGJEN: "BUP_BRIGJEN",
  MAYJEN: "BUP_MAYJEN",
  LETJEN: "BUP_LETJEN",
};

// Default BUP ages for non-Pati ranks
const DEFAULT_BUP_AGE = 58;

/**
 * Get BUP configuration value from database
 * @param {string} key - Config key
 * @returns {Promise<number>} BUP age
 */
export async function getBupConfig(key) {
  const config = await prisma.config.findUnique({
    where: { key },
  });
  return config ? parseInt(config.value, 10) : DEFAULT_BUP_AGE;
}

/**
 * Calculate current age from birth date
 * @param {Date|string} birthDate - Birth date
 * @returns {number} Current age
 */
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

/**
 * Normalize rank string for comparison
 * @param {string} pangkat - Rank string
 * @returns {string|null} Normalized rank
 */
export function normalizeRank(pangkat) {
  if (!pangkat) return null;
  return pangkat
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+tni.*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Extract specific rank from pangkat string
 * @param {string} pangkat - Rank string
 * @returns {string|null} Specific rank (brigjen, mayjen, letjen, jenderal) or null
 */
export function getRankFromPangkat(pangkat) {
  if (!pangkat) return null;
  const lowerRank = normalizeRank(pangkat);

  if (lowerRank.includes("brigjen")) return "brigjen";
  if (lowerRank.includes("mayjen")) return "mayjen";
  if (lowerRank.includes("letjen")) return "letjen";
  if (lowerRank.includes("jenderal")) return "jenderal";

  return null;
}

/**
 * Check if rank is Pati (general officer)
 * @param {string} rank - Rank string
 * @returns {boolean} True if Pati rank
 */
export function isPati(rank) {
  if (!rank) return false;
  const lowerRank = normalizeRank(rank);
  return ["brigjen", "mayjen", "letjen", "jenderal"].some((r) =>
    lowerRank.includes(r)
  );
}

/**
 * Get BUP age for a specific rank
 * @param {string} rank - Rank string (brigjen, mayjen, letjen)
 * @returns {Promise<number|null>} BUP age or null if not applicable
 */
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

/**
 * Calculate retirement date based on birth date and rank
 * @param {Date|string} ttl - Birth date
 * @param {string} pangkat - Rank string
 * @returns {Promise<Date|null>} Retirement date or null
 */
export async function calculateRetirementDate(ttl, pangkat) {
  if (!ttl || !pangkat) return null;

  const birthDate = new Date(ttl);
  if (isNaN(birthDate.getTime())) return null;

  const rank = getRankFromPangkat(pangkat);
  let retirementAge;

  if (rank && ["brigjen", "mayjen", "letjen"].includes(rank)) {
    // Use rank-specific BUP for Pati
    retirementAge = await getBupForRank(rank);
  } else {
    // Use default for non-Pati ranks
    retirementAge = DEFAULT_BUP_AGE;
  }

  if (!retirementAge) return null;

  const retirementDate = new Date(
    birthDate.getFullYear() + retirementAge,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  return isNaN(retirementDate.getTime()) ? null : retirementDate;
}

/**
 * Check BUP status for a personnel record
 * @param {Object} personil - Personnel object with TTL and PANGKAT
 * @returns {Promise<string>} Status: "Aktif", "Pensiun", or "Unknown"
 */
export async function checkBupStatus(personil) {
  if (!personil.TTL) return "Unknown";

  const rank = getRankFromPangkat(personil.PANGKAT);
  if (!rank) return "Unknown";

  const bupAge = await getBupForRank(rank);
  if (!bupAge) return "Unknown";

  const age = calculateAge(personil.TTL);
  return age >= bupAge ? "Pensiun" : "Aktif";
}
