/**
 * Hitung jumlah anak dari field ANAK_1 sampai ANAK_4
 * @param {Object} personil
 * @returns {number}
 */
export function calculateJumlahAnak(personil) {
  if (!personil) return 0;

  const anakFields = [
    personil.ANAK_1,
    personil.ANAK_2,
    personil.ANAK_3,
    personil.ANAK_4,
  ];

  return anakFields.filter(
    (anak) =>
      anak !== null &&
      anak !== undefined &&
      typeof anak === "string" &&
      anak.trim() !== ""
  ).length;
}
