// fungsi bantu untuk parsing "Januari 2024" → { bulan: "januari", tahun: 2024 }
export function extractBulanTahun(tmtMulai) {
  if (!tmtMulai) return { bulan: null, tahun: null };

  const bulanMap = {
    Januari: "januari",
    Februari: "februari",
    Maret: "maret",
    April: "april",
    Mei: "mei",
    Juni: "juni",
    Juli: "juli",
    Agustus: "agustus",
    September: "september",
    Oktober: "oktober",
    November: "november",
    Desember: "desember",
  };

  const [bulanStr, tahunStr] = tmtMulai.split(" ");
  const bulan = bulanMap[bulanStr] || null;
  const tahun = parseInt(tahunStr) || null;

  return { bulan, tahun };
}
