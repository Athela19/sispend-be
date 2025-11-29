import prisma from "@/lib/prisma";
import { authUser } from "@/middleware/verifyToken";

/**
 * @swagger
 * /api/soldier/data:
 *   get:
 *     summary: Ambil daftar personil dengan filter opsional dan pagination
 *     description: Mengambil data personil dengan filter opsional dan pagination. Contoh: "/api/soldier/data?page=1&limit=10&nama=Ferdi&pangkat=Brigjen". Parameter nrp, nama, pangkat, kesatuan bersifat opsional.
 *     tags:
 *       - Soldier
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         required: false
 *         description: Halaman data (default 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         required: false
 *         description: Jumlah data per halaman (default 50, maksimal 100)
 *       - in: query
 *         name: nrp
 *         schema:
 *           type: string
 *         required: false
 *         description: Cari berdasarkan NRP
 *       - in: query
 *         name: nama
 *         schema:
 *           type: string
 *         required: false
 *         description: Cari berdasarkan nama
 *       - in: query
 *         name: pangkat
 *         schema:
 *           type: string
 *         required: false
 *         description: Cari berdasarkan pangkat
 *       - in: query
 *         name: kesatuan
 *         schema:
 *           type: string
 *         required: false
 *         description: Cari berdasarkan kesatuan
 *       - in: query
 *         name: group
 *         schema:
 *           type: string
 *           enum: [pati, all]
 *         required: false
 *         description: Filter berdasarkan kelompok pangkat (pati, all)
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
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 50
 *                 total:
 *                   type: integer
 *                   example: 100
 *                 totalPages:
 *                   type: integer
 *                   example: 2
 *       400:
 *         description: Parameter tidak valid
 *       404:
 *         description: Data tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan server
 *   post:
 *     summary: Tambah data personil baru
 *     description: |
 *       Menambahkan data personil baru ke database. NRP harus unik.
 *       **Catatan:**
 *       - NRP harus unik.
 *       - Nama harus diisi.
 *       - TTL harus diisi.
 *     tags:
 *       - Soldier
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Personil'
 *     responses:
 *       201:
 *         description: Data personil berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Personil created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Personil'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               duplicateNRP:
 *                 summary: NRP already exists
 *                 value:
 *                   error: "NRP already exists"
 *               missingRequired:
 *                 summary: Missing required fields
 *                 value:
 *                   error: "NAMA, NRP, and PANGKAT are required"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Internal Server Error"
 */

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 50;
    const skip = (page - 1) * limit;

    // Ambil query params opsional
    const nrp = searchParams.get("nrp")?.trim();
    const nama = searchParams.get("nama")?.trim();
    const pangkat = searchParams.get("pangkat")?.trim();
    const kesatuan = searchParams.get("kesatuan")?.trim();
    const group = searchParams.get("group")?.trim();

    // Build dynamic filter
    const AND = [];
    if (nrp) AND.push({ NRP: { contains: nrp, mode: "insensitive" } });
    if (nama) AND.push({ NAMA: { contains: nama, mode: "insensitive" } });
    if (pangkat)
      AND.push({ PANGKAT: { contains: pangkat, mode: "insensitive" } });
    if (kesatuan)
      AND.push({ KESATUAN: { contains: kesatuan, mode: "insensitive" } });

    // Filter berdasarkan group (pati)
    if (group && group !== "all") {
      let pangkatFilter = [];

      switch (group.toLowerCase()) {
        case "pati":
          // Perwira Tinggi (Brigjen, Mayjen, Letjen, Jenderal)
          pangkatFilter = [
            { contains: "Brigjen", mode: "insensitive" },
            { contains: "Mayjen", mode: "insensitive" },
            { contains: "Letjen", mode: "insensitive" },
            { contains: "Jenderal", mode: "insensitive" },
          ];
          break;

        default:
          break;
      }

      if (pangkatFilter.length > 0) {
        AND.push({ OR: pangkatFilter.map((filter) => ({ PANGKAT: filter })) });
      }
    }

    // Hanya gunakan AND jika ada parameter, kalau tidak kosong pakai empty object (ambil semua)
    const whereClause = AND.length > 0 ? { AND } : {};

    // Hitung total
    const total = await prisma.personil.count({ where: whereClause });

    // Ambil data
    const personil = await prisma.personil.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: { NAMA: "asc" },
    });

    if (total === 0 || personil.length === 0) {
      return new Response(JSON.stringify({ message: "Data tidak ditemukan" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        data: personil,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching personil:", error);
    return new Response(
      JSON.stringify({ message: "Terjadi kesalahan server" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(request) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return Response.json(authCheck.body, { status: authCheck.status });
    }

    const body = await request.json();

    // Validate required fields
    if (!body.NAMA || !body.NRP || !body.PANGKAT) {
      return Response.json(
        { error: "NAMA, NRP, and PANGKAT are required" },
        { status: 400 }
      );
    }
    if (!body.TTL) {
      return Response.json({ error: "TTL is required" }, { status: 400 });
    }

    // Check if NRP already exists
    const existingNRP = await prisma.personil.findUnique({
      where: { NRP: body.NRP },
    });

    if (existingNRP) {
      return Response.json({ error: "NRP already exists" }, { status: 400 });
    }

    // Load retirement ages from DB config
    const configs = await prisma.config.findMany({
      where: { key: { startsWith: "PENSIUN_USIA_" } },
    });
    const retirementAges = {
      pati: 60,
      other: 53,
    };
    configs.forEach((cfg) => {
      const group = cfg.key.replace("PENSIUN_USIA_", "").toLowerCase();
      const num = parseInt(cfg.value, 10);
      if (Number.isFinite(num)) retirementAges[group] = num;
    });

    // Helpers
    const normalizeRank = (val) =>
      typeof val === "string"
        ? val
            .toLowerCase()
            .replace(/\./g, "")
            .replace(/\s+tni.*$/, "")
            .replace(/\s+/g, " ")
            .trim()
        : null;

    const computeRetirementDate = (ttlDate, rank) => {
      if (!ttlDate) return null;
      const pangkat = normalizeRank(rank);
      const pati = ["brigjen", "mayjen", "letjen", "jenderal"];
      let group = "other";
      if (pangkat) {
        if (pati.some((r) => pangkat.startsWith(r))) group = "pati";
      }
      const umur = retirementAges[group] ?? retirementAges.other;
      const d = new Date(ttlDate);
      const pensiun = new Date(
        d.getFullYear() + umur,
        d.getMonth(),
        d.getDate()
      );
      return isNaN(pensiun.getTime()) ? null : pensiun;
    };

    // Prepare data for creation
    const createData = {
      NAMA: body.NAMA,
      PANGKAT: body.PANGKAT,
      NRP: body.NRP,
      KESATUAN: body.KESATUAN || null,
      TTL: new Date(body.TTL),
      PENSIUN: computeRetirementDate(new Date(body.TTL), body.PANGKAT),
      TMT_TNI: body.TMT_TNI || null,
      NKTPA: body.NKTPA || null,
      NPWP: body.NPWP || null,
      AUTENTIK: body.AUTENTIK || null,
      MDK: body.MDK ? parseInt(body.MDK) : null,
      MKG: body.MKG ? parseInt(body.MKG) : null,
      GPT: body.GPT ? parseInt(body.GPT) : null,
      NO_SKEP: body.NO_SKEP || null,
      TGL_SKEP: body.TGL_SKEP ? new Date(body.TGL_SKEP) : null,
      TMT_SKEP: body.TMT_SKEP ? new Date(body.TMT_SKEP) : null,
      TMT_MULAI: body.TMT_MULAI || null,
      PENSPOK: body.PENSPOK ? parseInt(body.PENSPOK) : null,
      SELAMA: body.SELAMA || null,
      PASANGAN: body.PASANGAN || null,
      TTL_PASANGAN: body.TTL_PASANGAN ? new Date(body.TTL_PASANGAN) : null,
      ANAK_1: body.ANAK_1 || null,
      TTL_ANAK_1: body.TTL_ANAK_1 ? new Date(body.TTL_ANAK_1) : null,
      STS_ANAK_1: body.STS_ANAK_1 || null,
      ANAK_2: body.ANAK_2 || null,
      TTL_ANAK_2: body.TTL_ANAK_2 ? new Date(body.TTL_ANAK_2) : null,
      STS_ANAK_2: body.STS_ANAK_2 || null,
      ANAK_3: body.ANAK_3 || null,
      TTL_ANAK_3: body.TTL_ANAK_3 ? new Date(body.TTL_ANAK_3) : null,
      STS_ANAK_3: body.STS_ANAK_3 || null,
      ANAK_4: body.ANAK_4 || null,
      TTL_ANAK_4: body.TTL_ANAK_4 ? new Date(body.TTL_ANAK_4) : null,
      STS_ANAK_4: body.STS_ANAK_4 || null,
      PENSPOK_WARI: body.PENSPOK_WARI ? parseInt(body.PENSPOK_WARI) : null,
      RP1: body.RP1 ? parseInt(body.RP1) : null,
      BRP1: body.BRP1 ? parseInt(body.BRP1) : null,
      RP2: body.RP2 ? parseInt(body.RP2) : null,
      BRP2: body.BRP2 ? parseInt(body.BRP2) : null,
      TMB_PN: body.TMB_PN || null,
      ALAMAT: body.ALAMAT || null,
      ALAMAT_ASABRI: body.ALAMAT_ASABRI || null,
      UTAMA: body.UTAMA || null,
      NO_SERI: body.NO_SERI || null,
      NO_SKEP2: body.NO_SKEP2 || null,
      TGL_SKEP2: body.TGL_SKEP2 || null,
    };

    // Create new personil
    const newPersonil = await prisma.personil.create({
      data: createData,
    });

    return Response.json(
      {
        message: "Personil created successfully",
        data: newPersonil,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Personil Error:", error);
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
