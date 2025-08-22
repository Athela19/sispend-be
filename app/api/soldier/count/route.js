/**
 * @swagger
 * /api/soldier/count:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Dapatkan total jumlah personil
 *     description: Menghitung total jumlah personil yang ada di database personil
 *     responses:
 *       200:
 *         description: Total personil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total:
 *                   type: integer
 *               example:
 *                 total: 14000
 *       500:
 *         description: Terjadi kesalahan pada server
 */
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const totalPersonil = await prisma.Personil.count();

    return new Response(JSON.stringify({ total: totalPersonil }), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching total personil:", error);
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
