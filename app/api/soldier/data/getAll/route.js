import prisma from "@/lib/prisma";

/**
 * @swagger
 * /api/soldier/data/getAll:
 *   get:
 *     summary: Ambil daftar personil
 *     description: Mengambil data personil dengan pagination,ini endpoinnya "/api/soldier/data/getAll?page=1&limit=50".
 *     tags:
 *       - Soldier
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Nomor halaman (default 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Jumlah data per halaman (default 50, maksimal 100)
 *     responses:
 *       200:
 *         description: Data personil berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: Daftar personil
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
 *                         example: "Ferdi"
 *                       PANGKAT:
 *                         type: string
 *                         example: "Brigjen"
 *                       KESATUAN:
 *                         type: string
 *                         example: "Kodam III"
 *                       status_bup:
 *                         type: string
 *                         description: Status BUP (Batas Usia Prajurit) - "Pensiun" jika sudah mencapai BUP, "Aktif" jika belum
 *                         example: "Aktif"
 *                         enum: [Pensiun, Aktif, Unknown]
 *                 total:
 *                   type: integer
 *                   example: 120
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 totalPages:
 *                   type: integer
 *                   example: 3
 *       500:
 *         description: Terjadi kesalahan server
 */

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 50;

    const skip = (page - 1) * limit;

    const [personil, total] = await Promise.all([
      prisma.personil.findMany({
        skip,
        take: limit,
      }),
      prisma.personil.count(),
    ]);

    return new Response(
      JSON.stringify({
        data: personil,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching personil:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
