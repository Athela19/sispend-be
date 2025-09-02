/**
 * @swagger
 * /api/history/year:
 *   get:
 *     tags:
 *       - History
 *     summary: Dapatkan jumlah personil berdasarkan tahun TMT_MULAI
 *     description: Menghitung jumlah personil berdasarkan tahun dari field TMT_MULAI
 *     responses:
 *       200:
 *         description: Jumlah personil berdasarkan tahun THHT
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
 *                        count:
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
import { extractBulanTahun } from "@/lib/dateParser";

export async function GET() {
  try {
    const allPersonil = await prisma.Personil.findMany({
      select: {
        id: true,
        NAMA: true,
        TMT_MULAI: true,
      },
      where: {
        TMT_MULAI: {
          not: null,
        },
      },
    });

    const yearMonthCounts = {};

    allPersonil.forEach((personil) => {
      const { bulan, tahun } = extractBulanTahun(personil.TMT_MULAI);

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

    const yearData = Object.values(yearMonthCounts).sort((a, b) => a.year - b.year);

    return Response.json({
      success: true,
      data: yearData,
      message: "Data berhasil diambil",
    });
  } catch (error) {
    console.error("Error fetching year-month data:", error);
    return Response.json(
      { success: false, message: "Terjadi kesalahan saat mengambil data", error: error.message },
      { status: 500 }
    );
  }
}

