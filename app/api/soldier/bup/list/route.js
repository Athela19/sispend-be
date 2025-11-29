import prisma from "@/lib/prisma";

/**
 * @swagger
 * /api/soldier/bup/list:
 *   get:
 *     summary: Ambil daftar perwira (PATI) yang mencapai BUP
 *     description: Mengambil daftar perwira tinggi (Brigjen, Mayjen, Letjen, Jenderal) yang sudah mencapai Batas Usia Pensiun berdasarkan konfigurasi BUP di database.
 *     tags:
 *       - Soldier
 *     responses:
 *       200:
 *         description: Daftar perwira pensiun berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   description: Array berisi data perwira PATI yang sudah mencapai BUP
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
 *                         example: "John Doe"
 *                       PANGKAT:
 *                         type: string
 *                         example: "Brigjen"
 *                       KESATUAN:
 *                         type: string
 *                         example: "Kodam III"
 *                       TTL:
 *                         type: string
 *                         format: date-time
 *                         example: "1960-01-15T00:00:00.000Z"
 *                       status_bup:
 *                         type: string
 *                         example: "Pensiun"
 *                         description: Status BUP, selalu "Pensiun" untuk endpoint ini
 *             example:
 *               data:
 *                 - id: 1
 *                   NRP: "123456"
 *                   NAMA: "John Doe"
 *                   PANGKAT: "Brigjen"
 *                   KESATUAN: "Kodam III"
 *                   TTL: "1960-01-15T00:00:00.000Z"
 *                   status_bup: "Pensiun"
 *       500:
 *         description: Terjadi kesalahan server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */
export async function GET(request) {
  try {
    // Query personnel with status_bup = "Pensiun" and PATI ranks
    const retiredSoldiers = await prisma.personil.findMany({
      where: {
        AND: [
          { status_bup: "Pensiun" },
          {
            OR: [
              { PANGKAT: { contains: "jenderal", mode: "insensitive" } },
              { PANGKAT: { contains: "jen", mode: "insensitive" } },
            ],
          },
        ],
      },
    });

    return new Response(
      JSON.stringify({
        data: retiredSoldiers,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching BUP list:", error);
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
