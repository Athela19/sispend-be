/**
 * @swagger
 * /api/soldier/data/perwira:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Dapatkan seluruh data personil perwira berdasarkan kategori pangkat
 *     description: Mengambil seluruh data personil perwira (PATI, PAMEN, PAMA) dari database personil dengan filter kategori pangkat
 *     parameters:
 *       - in: query
 *         name: category
 *         description: Kategori pangkat (pati, pamen, pama, all)
 *         schema:
 *           type: string
 *           enum: [pati, pamen, pama, all]
 *         required: false
 *         example: "pati"
 *       - in: query
 *         name: pangkat
 *         description: Pangkat personil spesifik
 *         schema:
 *           type: string
 *         required: false
 *         example: "brigjen"
 *       - in: query
 *         name: page
 *         description: Nomor halaman (default 1)
 *         schema:
 *           type: integer
 *         required: false
 *       - in: query
 *         name: limit
 *         description: Jumlah data per halaman (default 50)
 *         schema:
 *           type: integer
 *         required: false
 *     responses:
 *       200:
 *         description: Seluruh data personil perwira
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       NRP:
 *                         type: string
 *                         example: "123456"
 *                       NAMA:
 *                         type: string
 *                         example: "Ferdi Kurniawan"
 *                       PANGKAT:
 *                         type: string
 *                         example: "Brigjen"
 *                       KESATUAN:
 *                         type: string
 *                         example: "Denmabesad"
 *                 category:
 *                   type: string
 *                   description: Kategori pangkat yang digunakan
 *                   example: "pati"
 *       400:
 *         description: Parameter tidak valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Kategori pangkat tidak valid"
 *       500:
 *         description: Terjadi kesalahan server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */

import prisma from "@/lib/prisma";

const PATI_RANKS = ["brigjen", "mayjen", "letjen", "jenderal"];
const PAMEN_RANKS = ["mayor", "letkol", "kolonel"];
const PAMA_RANKS = ["kapten", "lettu", "letda"];

const RANK_CATEGORIES = {
  pati: PATI_RANKS,
  pamen: PAMEN_RANKS,
  pama: PAMA_RANKS,
  all: [...PATI_RANKS, ...PAMEN_RANKS, ...PAMA_RANKS],
};

function getRanksByCategory(category) {
  return RANK_CATEGORIES[category] || [];
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category")?.toLowerCase() || "all";
    const pangkat = searchParams.get("pangkat");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 50;
    const skip = (page - 1) * limit;

    // Validate category parameter
    if (!RANK_CATEGORIES.hasOwnProperty(category)) {
      return Response.json(
        {
          status: 400,
          success: false,
          error:
            "Kategori pangkat tidak valid. Gunakan: pati, pamen, pama, atau all",
        },
        { status: 400 }
      );
    }

    const where = {
      AND: [
        {
          PANGKAT: { not: null },
        },
      ],
    };

    // Filter by specific rank if provided
    if (pangkat) {
      where.AND.push({ PANGKAT: { contains: pangkat, mode: "insensitive" } });
    }

    // Filter by rank category
    const selectedRanks = getRanksByCategory(category);
    where.AND.push({
      OR: selectedRanks.map((r) => ({
        PANGKAT: { contains: r, mode: "insensitive" },
      })),
    });

    const list = await prisma.personil.findMany({
      where,
      orderBy: { id: "desc" },
      take: limit,
      skip,
    });

    return Response.json({
      status: 200,
      success: true,
      data: list,
      category: category,
      total: list.length,
      page: page,
      limit: limit,
    });
  } catch (error) {
    console.error("Perwira GET error:", error);
    return Response.json(
      {
        status: 500,
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
