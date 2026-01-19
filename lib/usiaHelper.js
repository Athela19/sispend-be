import { calculateAge } from "./bupHelper";

/**
 * Usia dalam format "58 Tahun"
 */
export function calculateUsiaTahunLabel(birthDate) {
  if (!birthDate) return null;

  const age = calculateAge(birthDate);
  return `${age} Tahun`;
}
