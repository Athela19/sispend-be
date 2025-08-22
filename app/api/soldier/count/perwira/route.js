/**
 * @swagger
 * /api/soldier/count/perwira:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Dapatkan ringkasan jumlah perwira berdasarkan golongan (PATI, PAMEN, PAMA)
 *     responses:
 *       200:
 *         description: Ringkasan jumlah per golongan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pati:
 *                   type: integer
 *                 pamen:
 *                   type: integer
 *                 pama:
 *                   type: integer
 *               example:
 *                 pati: 10
 *                 pamen: 40
 *                 pama: 20
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *               example:
 *                 error: "Terjadi kesalahan pada server"
 */
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const counts = await prisma.Personil.groupBy({
      by: ["PANGKAT"],
      _count: { PANGKAT: true },
    });

    const normalize = (val) => val?.toLowerCase();

    const patiRanks = ["brigjen", "mayjen", "letjen", "jenderal"];
    const pamenRanks = ["mayor", "letkol", "kolonel"];
    const pamaRanks = ["kapten", "lettu", "letda"];

    let pati = 0,
      pamen = 0,
      pama = 0;

    counts.forEach((item) => {
      const rank = normalize(item.PANGKAT);
      if (patiRanks.includes(rank)) pati += item._count.PANGKAT;
      else if (pamenRanks.includes(rank)) pamen += item._count.PANGKAT;
      else if (pamaRanks.includes(rank)) pama += item._count.PANGKAT;
    });

    return new Response(JSON.stringify({ pati, pamen, pama }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching personil counts:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      { status: 500 }
    );
  }
}
