function penetapanBerdasarkanRentang(penspok) {
  const RENTANG_PENSPOK = [
    { min: 0, max: 1775000, result: 1775000 },
    { min: 1775001, max: 1901300, result: 1901300 },
    { min: 1901301, max: 2027500, result: 2027500 },
    { min: 2027501, max: 2153700, result: 2153700 },
    { min: 2153701, max: 2279900, result: 2279900 },
    { min: 2279901, max: 2406100, result: 2406100 },
    { min: 2406101, max: 2532300, result: 2532300 },
    { min: 2532301, max: 2658600, result: 2658600 },
    { min: 2658601, max: 2784800, result: 2784800 },
    { min: 2784801, max: 2911000, result: 2911000 },
    { min: 2911001, max: 3037200, result: 3037200 },
    { min: 3037201, max: 3163400, result: 3163400 },
    { min: 3163401, max: 3289600, result: 3289600 },
    { min: 3289601, max: 3415900, result: 3415900 },
    { min: 3415901, max: 3542100, result: 3542100 },
    { min: 3542101, max: 3668300, result: 3668300 },
    { min: 3668301, max: 3794500, result: 3794500 },
    { min: 3794501, max: 3920700, result: 3920700 },
    { min: 3920701, max: 4046900, result: 4046900 },
    { min: 4046901, max: 4173200, result: 4173200 },
    { min: 4173201, max: 4299400, result: 4299400 },
    { min: 4299401, max: 4425600, result: 4425600 },
    { min: 4425601, max: 4551800, result: 4551800 },
    { min: 4551801, max: 4678000, result: 4678000 },
    { min: 4678001, max: 4804200, result: 4804200 },
  ];

  for (const r of RENTANG_PENSPOK) {
    if (penspok >= r.min && penspok <= r.max) {
      return r.result;
    }
  }

  return penspok;
}

function hitungUsia(tglmulaikerja, tglPensiun) {
  return tglPensiun.getFullYear() - tglmulaikerja.getFullYear();
}

function hitungPensiun(personil) {
  const {
    GPT,
    MDK,
    TMT_TNI,
    PENSIUN,
    PASANGAN,
    STS_ANAK_1,
    STS_ANAK_2,
    STS_ANAK_3,
    STS_ANAK_4,
  } = personil;

  if (!GPT || !MDK || !TMT_TNI || !PENSIUN) {
    throw new Error("GPT, MDK, TMT_TNI, dan PENSIUN wajib diisi");
  }

  const usia = hitungUsia(new Date(TMT_TNI), new Date(PENSIUN));

  let PENSPOK = 0;
  if (usia >= 30) {
    PENSPOK = Math.floor(0.75 * GPT);
  } else {
    PENSPOK = Math.floor(0.025 * MDK * GPT);
  }

  const PENSPOK_TETAP = penetapanBerdasarkanRentang(PENSPOK);

  let tunjanganIstri = 0;
  if (PASANGAN) {
    tunjanganIstri = Math.floor(0.35 * PENSPOK_TETAP);
  }

  const statusAnak = [STS_ANAK_1, STS_ANAK_2, STS_ANAK_3, STS_ANAK_4];

  const jumlahAnakValid = statusAnak
    .filter((sts) => sts === "AKTIF")
    .slice(0, 2).length;

  const tunjanganAnak = Math.floor(0.1 * PENSPOK_TETAP * jumlahAnakValid);

  return {
    usia,
    PENSPOK: PENSPOK_TETAP,
    TUNJANGAN_ISTRI: tunjanganIstri,
    TUNJANGAN_ANAK: tunjanganAnak,
    TOTAL_PENSIUN: PENSPOK_TETAP + tunjanganIstri + tunjanganAnak,
  };
}

module.exports = {
  hitungPensiun,
};
