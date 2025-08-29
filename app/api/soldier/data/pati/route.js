/**
 * @swagger
 * /api/soldier/data/pati:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Dapatkan seluruh data personil PATI
 *     description: Mengambil seluruh data personil PATI dari database personil
 *     parameters:
 *       - in: query
 *         name: pangkat
 *         description: Pangkat personil
 *         schema:
 *           type: string
 *         required: false
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
 *         description: Seluruh data personil PATI
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
 *   post:
 *     tags:
 *       - Soldier
 *     summary: Cari data personil PATI
 *     description: Mencari data personil PATI berdasarkan NAMA atau NRP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NAMA:
 *                 type: string
 *                 description: Nama personil untuk pencarian (opsional jika NRP tersedia)
 *                 example: "Ferdi"
 *               NRP:
 *                 type: string
 *                 description: NRP personil untuk pencarian (opsional jika NAMA tersedia)
 *                 example: "123456"
 *             required:
 *               - NAMA
 *             anyOf:
 *               - required: [NAMA]
 *               - required: [NRP]
 *     responses:
 *       200:
 *         description: Hasil pencarian data personil PATI
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 success:
 *                   type: boolean
 *                   example: true
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
 *                 count:
 *                   type: integer
 *                   description: Jumlah data yang ditemukan
 *                   example: 1
 *       400:
 *         description: Bad Request - Field NAMA atau NRP dibutuhkan untuk pencarian
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Field NAMA atau NRP dibutuhkan untuk pencarian."
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */

import prisma from "@/lib/prisma";

const PATI_RANKS = ["brigjen", "mayjen", "letjen", "jenderal"];

function isPatiRank(rank) {
  if (!rank) return false;
  return PATI_RANKS.includes(String(rank).toLowerCase());
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const pangkat = searchParams.get("pangkat");
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 50;
    const skip = (page - 1) * limit;

    const where = {
      AND: [
        {
          PANGKAT: { not: null },
        },
      ],
    };

    if (pangkat) {
      where.AND.push({ PANGKAT: { contains: pangkat, mode: "insensitive" } });
    }

    // Filter by PATI ranks
    where.AND.push({
      OR: PATI_RANKS.map((r) => ({
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
    });
  } catch (error) {
    console.error("PATI GET error:", error);
    return Response.json({
      status: 500,
      success: false,
      error: "Internal Server Error",
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body?.NAMA && !body?.NRP) {
      return new Response(
        JSON.stringify({
          error: "Field NAMA atau NRP dibutuhkan untuk pencarian.",
        }),
        { status: 400 }
      );
    }

    const where = {
      AND: [
        {
          PANGKAT: { not: null },
        },
        // Filter by PATI ranks
        {
          OR: PATI_RANKS.map((r) => ({
            PANGKAT: { contains: r, mode: "insensitive" },
          })),
        },
      ],
    };

    // Add search conditions for NAMA or NRP
    if (body.NAMA && body.NRP) {
      where.AND.push({
        OR: [
          { NAMA: { contains: body.NAMA, mode: "insensitive" } },
          { NRP: { contains: body.NRP, mode: "insensitive" } },
        ],
      });
    } else if (body.NAMA) {
      where.AND.push({ NAMA: { contains: body.NAMA, mode: "insensitive" } });
    } else if (body.NRP) {
      where.AND.push({ NRP: { contains: body.NRP, mode: "insensitive" } });
    }

    const searchResults = await prisma.personil.findMany({
      where,
      orderBy: { id: "desc" },
    });

    return Response.json({
      status: 200,
      success: true,
      data: searchResults,
      count: searchResults.length,
    });
  } catch (error) {
    console.error("PATI POST search error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
