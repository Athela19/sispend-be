/**
 * @swagger
 * /api/soldier/count:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Ambil jumlah personil
 *     description: |
 *       Mengembalikan jumlah personil berdasarkan kategori yang dipilih melalui query parameter `category`.
 *       - `?category=all` → Mengembalikan total semua personil.
 *       - `?category=group` → Mengembalikan jumlah personil per golongan (PATI, PAMEN, PAMA).
 *       - `?category=rank` → Mengembalikan jumlah personil per pangkat (brigjen, mayjen, letjen, mayor, letkol, dsb).
 *
 *       **Catatan:**
 *       - Pangkat diasumsikan sudah dinormalisasi saat import (huruf kecil, tanpa titik, tanpa "TNI").
 *       - Jika `category` tidak diberikan, default-nya adalah `all`.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *           enum: [all, group, rank]
 *           default: all
 *         description: Kategori data yang ingin diambil
 *     responses:
 *       200:
 *         description: Berhasil mengambil data personil
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 # Response untuk ?category=all
 *                 - type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                       description: Total seluruh personil
 *                   example:
 *                     total: 14000
 *                 # Response untuk ?category=group
 *                 - type: object
 *                   properties:
 *                     pati:
 *                       type: integer
 *                       description: Jumlah personil golongan PATI
 *                     pamen:
 *                       type: integer
 *                       description: Jumlah personil golongan PAMEN
 *                     pama:
 *                       type: integer
 *                       description: Jumlah personil golongan PAMA
 *                   example:
 *                     pati: 10
 *                     pamen: 40
 *                     pama: 20
 *                 # Response untuk ?category=rank
 *                 - type: object
 *                   additionalProperties:
 *                     type: integer
 *                     description: Jumlah personil per pangkat
 *                   example:
 *                     brigjen: 5
 *                     mayjen: 10
 *                     letjen: 2
 *                     mayor: 20
 *                     letkol: 15
 *       400:
 *         description: Kategori tidak dikenali atau invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Pesan error
 *             example:
 *               error: "Kategori tidak dikenali"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Pesan error umum
 *                 details:
 *                   type: string
 *                   nullable: true
 *                   description: Detail error (hanya ditampilkan di development)
 *             example:
 *               error: "Internal Server Error"
 *               details: "Database connection failed"
 */

import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category") || "all";

    if (category === "all") {
      const totalPersonil = await prisma.personil.count();
      return new Response(JSON.stringify({ total: totalPersonil }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Ambil semua pangkat beserta jumlah
    const counts = await prisma.personil.groupBy({
      by: ["PANGKAT"],
      _count: { PANGKAT: true },
    });

    const normalize = (val) =>
      typeof val === "string" ? val.trim().toLowerCase() : null;

    if (category === "group") {
      const patiRanks = ["brigjen", "mayjen", "letjen", "jenderal"];
      const pamenRanks = ["mayor", "letkol", "kolonel"];
      const pamaRanks = ["kapten", "lettu", "letda"];

      let pati = 0,
        pamen = 0,
        pama = 0;

      counts.forEach((item) => {
        const rank = normalize(item.PANGKAT);
        if (!rank) return;

        if (patiRanks.some((r) => rank.startsWith(r))) {
          pati += item._count.PANGKAT;
        } else if (pamenRanks.some((r) => rank.startsWith(r))) {
          pamen += item._count.PANGKAT;
        } else if (pamaRanks.some((r) => rank.startsWith(r))) {
          pama += item._count.PANGKAT;
        }
      });

      return new Response(JSON.stringify({ pati, pamen, pama }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (category === "rank") {
      const allRanks = [
        "jenderal",
        "letjen",
        "mayjen",
        "brigjen",
        "kolonel",
        "letkol",
        "mayor",
        "kapten",
        "lettu",
        "letda",
      ];

      // Initialize all ranks with 0 count
      const rankCounts = {};
      allRanks.forEach((rank) => {
        rankCounts[rank] = 0;
      });

      // Update counts based on actual data
      counts.forEach((item) => {
        const rank = normalize(item.PANGKAT);
        if (rank && allRanks.includes(rank)) {
          rankCounts[rank] = item._count.PANGKAT;
        }
      });

      return new Response(JSON.stringify(rankCounts), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Kategori tidak dikenali" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching personil counts:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
