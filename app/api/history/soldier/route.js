/**
 * @swagger
 * /api/history/soldier:
 *   get:
 *     tags:
 *       - History
 *     summary: Dapatkan distribusi pensiun personil per bulan per tahun (berdasarkan PENSIUN)
 *     description: Menghitung agregasi personil yang akan pensiun per bulan untuk setiap tahun dari field PENSIUN.
 *     responses:
 *       200:
 *         description: Daftar agregasi pensiun bulanan per tahun
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        year:
 *                          type: integer
 *                        label:
 *                          type: string
 *                        januari:
 *                          type: integer
 *                        februari:
 *                          type: integer
 *                        maret:
 *                          type: integer
 *                        april:
 *                          type: integer
 *                        mei:
 *                          type: integer
 *                        juni:
 *                          type: integer
 *                        juli:
 *                          type: integer
 *                        agustus:
 *                          type: integer
 *                        september:
 *                          type: integer
 *                        oktober:
 *                          type: integer
 *                        november:
 *                          type: integer
 *                        desember:
 *                          type: integer
 *                  total:
 *                    type: integer
 *                  message:
 *                    type: string
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                  message:
 *                    type: string
 *                  error:
 *                    type: string
 */

import prisma from "@/lib/prisma";

// Helper function to extract month/year from Date object
function extractMonthYearFromDate(date) {
  if (!date) return { bulan: null, tahun: null };

  const monthNames = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const d = new Date(date);
  const bulan = monthNames[d.getMonth()];
  const tahun = d.getFullYear();

  return { bulan, tahun };
}

export async function GET() {
  try {
    const allPersonil = await prisma.personil.findMany({
      select: {
        id: true,
        NAMA: true,
        PENSIUN: true,
      },
    });

    const yearMonthCounts = {};

    allPersonil.forEach((personil) => {
      const { bulan, tahun } = extractMonthYearFromDate(personil.PENSIUN);

      if (tahun !== null && bulan !== null) {
        if (!yearMonthCounts[tahun]) {
          yearMonthCounts[tahun] = {
            year: tahun,
            label: `Tahun ${tahun}`,
            januari: 0,
            februari: 0,
            maret: 0,
            april: 0,
            mei: 0,
            juni: 0,
            juli: 0,
            agustus: 0,
            september: 0,
            oktober: 0,
            november: 0,
            desember: 0,
          };
        }
        yearMonthCounts[tahun][bulan]++;
      }
    });

    const yearData = Object.values(yearMonthCounts).sort(
      (a, b) => a.year - b.year
    );

    const total = allPersonil.length;

    return Response.json({
      success: true,
      data: yearData,
      total,
      message: "Data distribusi pensiun berhasil diambil",
    });
  } catch (error) {
    console.error("Error fetching retirement distribution data:", error);
    return Response.json(
      {
        success: false,
        message: "Terjadi kesalahan saat mengambil data distribusi pensiun",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
