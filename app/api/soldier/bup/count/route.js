import prisma from "@/lib/prisma";

/**
 * @swagger
 * /api/soldier/bup/count:
 *   get:
 *     summary: Hitung jumlah perwira (PATI) berdasarkan status BUP
 *     description: Mengembalikan jumlah perwira tinggi (Brigjen, Mayjen, Letjen, Jenderal) yang sudah mencapai BUP dan yang belum mencapai BUP.
 *     tags:
 *       - Soldier
 *     responses:
 *       200:
 *         description: Data berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sudah_bup:
 *                   type: integer
 *                   description: Jumlah perwira PATI yang sudah mencapai BUP (pensiun)
 *                   example: 5
 *                 belum_bup:
 *                   type: integer
 *                   description: Jumlah perwira PATI yang belum mencapai BUP (masih aktif)
 *                   example: 193
 *             example:
 *               sudah_bup: 5
 *               belum_bup: 193
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
    // Count PATI personnel by status_bup
    const [sudah_bup, belum_bup] = await Promise.all([
      prisma.personil.count({
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
      }),
      prisma.personil.count({
        where: {
          AND: [
            { status_bup: "Aktif" },
            {
              OR: [
                { PANGKAT: { contains: "jenderal", mode: "insensitive" } },
                { PANGKAT: { contains: "jen", mode: "insensitive" } },
              ],
            },
          ],
        },
      }),
    ]);

    return new Response(
      JSON.stringify({
        sudah_bup,
        belum_bup,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error counting BUP:", error);
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
