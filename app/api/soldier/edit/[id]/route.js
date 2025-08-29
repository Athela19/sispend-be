import prisma from "@/lib/prisma";

/**
 * @swagger
 * /api/soldier/edit/{id}:
 *   post:
 *     summary: Edit data personil
 *     description: Mengedit data personil berdasarkan ID. Hanya field yang dikirim yang akan diupdate, field lain tetap tidak berubah.
 *     tags:
 *       - Soldier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID personil yang akan diedit
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               NAMA:
 *                 type: string
 *                 description: Nama lengkap personil
 *                 example: "John Doe"
 *               PANGKAT:
 *                 type: string
 *                 description: Pangkat personil
 *                 example: "Kapten"
 *               NRP:
 *                 type: string
 *                 description: Nomor Registrasi Personil (harus unik)
 *                 example: "123456789"
 *               KESATUAN:
 *                 type: string
 *                 description: Kesatuan/unit personil
 *                 example: "Infanteri"
 *               TTL:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir
 *                 example: "1990-01-01"
 *               TMT_TNI:
 *                 type: string
 *                 description: Terhitung Mulai Tanggal TNI
 *                 example: "2010-01-01"
 *               NKTPA:
 *                 type: string
 *                 description: Nomor Kartu Tanda Penduduk Anggota
 *                 example: "1234567890123456"
 *               NPWP:
 *                 type: string
 *                 description: Nomor Pokok Wajib Pajak
 *                 example: "12.345.678.9-123.000"
 *               AUTENTIK:
 *                 type: string
 *                 description: Kode autentik
 *                 example: "AUTH001"
 *               MDK:
 *                 type: integer
 *                 description: Masa Dinas Kepangkatan
 *                 example: 5
 *               MKG:
 *                 type: integer
 *                 description: Masa Kerja Golongan
 *                 example: 3
 *               GPT:
 *                 type: integer
 *                 description: Golongan Pangkat Terakhir
 *                 example: 4
 *               NO_SKEP:
 *                 type: string
 *                 description: Nomor SKEP
 *                 example: "SKEP-001/2024"
 *               TGL_SKEP:
 *                 type: string
 *                 format: date
 *                 description: Tanggal SKEP
 *                 example: "2024-01-01"
 *               TMT_SKEP:
 *                 type: string
 *                 format: date
 *                 description: Terhitung Mulai Tanggal SKEP
 *                 example: "2024-01-01"
 *               TMT_MULAI:
 *                 type: string
 *                 description: Terhitung Mulai Tanggal Mulai
 *                 example: "2024-01-01"
 *               PENSPOK:
 *                 type: integer
 *                 description: Pensiun Pokok
 *                 example: 5000000
 *               SELAMA:
 *                 type: string
 *                 description: Selama
 *                 example: "Selama"
 *               PASANGAN:
 *                 type: string
 *                 description: Nama pasangan
 *                 example: "Jane Doe"
 *               TTL_PASANGAN:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir pasangan
 *                 example: "1992-01-01"
 *               ANAK_1:
 *                 type: string
 *                 description: Nama anak pertama
 *                 example: "Child 1"
 *               TTL_ANAK_1:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir anak pertama
 *                 example: "2015-01-01"
 *               STS_ANAK_1:
 *                 type: string
 *                 description: Status anak pertama
 *                 example: "Active"
 *               ANAK_2:
 *                 type: string
 *                 description: Nama anak kedua
 *                 example: "Child 2"
 *               TTL_ANAK_2:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir anak kedua
 *                 example: "2017-01-01"
 *               STS_ANAK_2:
 *                 type: string
 *                 description: Status anak kedua
 *                 example: "Active"
 *               ANAK_3:
 *                 type: string
 *                 description: Nama anak ketiga
 *                 example: "Child 3"
 *               TTL_ANAK_3:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir anak ketiga
 *                 example: "2019-01-01"
 *               STS_ANAK_3:
 *                 type: string
 *                 description: Status anak ketiga
 *                 example: "Active"
 *               ANAK_4:
 *                 type: string
 *                 description: Nama anak keempat
 *                 example: "Child 4"
 *               TTL_ANAK_4:
 *                 type: string
 *                 format: date
 *                 description: Tanggal, tempat lahir anak keempat
 *                 example: "2021-01-01"
 *               STS_ANAK_4:
 *                 type: string
 *                 description: Status anak keempat
 *                 example: "Active"
 *               PENSPOK_WARI:
 *                 type: integer
 *                 description: Pensiun Pokok Wari
 *                 example: 6000000
 *               RP1:
 *                 type: integer
 *                 description: RP1
 *                 example: 1000000
 *               BRP1:
 *                 type: integer
 *                 description: BRP1
 *                 example: 2000000
 *               RP2:
 *                 type: integer
 *                 description: RP2
 *                 example: 3000000
 *               BRP2:
 *                 type: integer
 *                 description: BRP2
 *                 example: 4000000
 *               TMB_PN:
 *                 type: string
 *                 description: TMB PN
 *                 example: "TMB001"
 *               ALAMAT:
 *                 type: string
 *                 description: Alamat utama
 *                 example: "Jl. Contoh No. 123, Jakarta"
 *               ALAMAT_ASABRI:
 *                 type: string
 *                 description: Alamat ASABRI
 *                 example: "Jl. ASABRI No. 456, Jakarta"
 *               UTAMA:
 *                 type: string
 *                 description: Utama
 *                 example: "Utama"
 *               NO_SERI:
 *                 type: string
 *                 description: Nomor seri
 *                 example: "SERI001"
 *               NO_SKEP2:
 *                 type: string
 *                 description: Nomor SKEP kedua
 *                 example: "SKEP-002/2024"
 *               TGL_SKEP2:
 *                 type: string
 *                 description: Tanggal SKEP kedua
 *                 example: "2024-02-01"
 *     responses:
 *       200:
 *         description: Data personil berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Personil updated successfully"
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
 *               invalidId:
 *                 summary: Invalid personil ID
 *                 value:
 *                   error: "Invalid personil ID"
 *               duplicateNRP:
 *                 summary: NRP already exists
 *                 value:
 *                   error: "NRP already exists"
 *       404:
 *         description: Personil tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Personil not found"
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

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const personilId = parseInt(id);

    if (isNaN(personilId)) {
      return Response.json(
        {
          error: "Invalid personil ID",
        },
        {
          status: 400,
        }
      );
    }

    // Check if personil exists
    const existingPersonil = await prisma.personil.findUnique({
      where: { id: personilId },
    });

    if (!existingPersonil) {
      return Response.json(
        {
          error: "Personil not found",
        },
        {
          status: 404,
        }
      );
    }

    // Parse request body
    const body = await request.json();

    // Extract fields from request body (only include fields that are present)
    const updateData = {};

    // Personal Information
    if (body.NAMA !== undefined) updateData.NAMA = body.NAMA;
    if (body.PANGKAT !== undefined) updateData.PANGKAT = body.PANGKAT;
    if (body.NRP !== undefined) updateData.NRP = body.NRP;
    if (body.KESATUAN !== undefined) updateData.KESATUAN = body.KESATUAN;
    if (body.TTL !== undefined) updateData.TTL = new Date(body.TTL);
    if (body.TMT_TNI !== undefined) updateData.TMT_TNI = body.TMT_TNI;
    if (body.NKTPA !== undefined) updateData.NKTPA = body.NKTPA;
    if (body.NPWP !== undefined) updateData.NPWP = body.NPWP;
    if (body.AUTENTIK !== undefined) updateData.AUTENTIK = body.AUTENTIK;

    // Service Information
    if (body.MDK !== undefined) updateData.MDK = parseInt(body.MDK) || null;
    if (body.MKG !== undefined) updateData.MKG = parseInt(body.MKG) || null;
    if (body.GPT !== undefined) updateData.GPT = parseInt(body.GPT) || null;
    if (body.NO_SKEP !== undefined) updateData.NO_SKEP = body.NO_SKEP;
    if (body.TGL_SKEP !== undefined)
      updateData.TGL_SKEP = body.TGL_SKEP ? new Date(body.TGL_SKEP) : null;
    if (body.TMT_SKEP !== undefined)
      updateData.TMT_SKEP = body.TMT_SKEP ? new Date(body.TMT_SKEP) : null;
    if (body.TMT_MULAI !== undefined) updateData.TMT_MULAI = body.TMT_MULAI;
    if (body.PENSPOK !== undefined)
      updateData.PENSPOK = parseInt(body.PENSPOK) || null;
    if (body.SELAMA !== undefined) updateData.SELAMA = body.SELAMA;

    // Family Information
    if (body.PASANGAN !== undefined) updateData.PASANGAN = body.PASANGAN;
    if (body.TTL_PASANGAN !== undefined)
      updateData.TTL_PASANGAN = body.TTL_PASANGAN
        ? new Date(body.TTL_PASANGAN)
        : null;
    if (body.ANAK_1 !== undefined) updateData.ANAK_1 = body.ANAK_1;
    if (body.TTL_ANAK_1 !== undefined)
      updateData.TTL_ANAK_1 = body.TTL_ANAK_1
        ? new Date(body.TTL_ANAK_1)
        : null;
    if (body.STS_ANAK_1 !== undefined) updateData.STS_ANAK_1 = body.STS_ANAK_1;
    if (body.ANAK_2 !== undefined) updateData.ANAK_2 = body.ANAK_2;
    if (body.TTL_ANAK_2 !== undefined)
      updateData.TTL_ANAK_2 = body.TTL_ANAK_2
        ? new Date(body.TTL_ANAK_2)
        : null;
    if (body.STS_ANAK_2 !== undefined) updateData.STS_ANAK_2 = body.STS_ANAK_2;
    if (body.ANAK_3 !== undefined) updateData.ANAK_3 = body.ANAK_3;
    if (body.TTL_ANAK_3 !== undefined)
      updateData.TTL_ANAK_3 = body.TTL_ANAK_3
        ? new Date(body.TTL_ANAK_3)
        : null;
    if (body.STS_ANAK_3 !== undefined) updateData.STS_ANAK_3 = body.STS_ANAK_3;
    if (body.ANAK_4 !== undefined) updateData.ANAK_4 = body.ANAK_4;
    if (body.TTL_ANAK_4 !== undefined)
      updateData.TTL_ANAK_4 = body.TTL_ANAK_4
        ? new Date(body.TTL_ANAK_4)
        : null;
    if (body.STS_ANAK_4 !== undefined) updateData.STS_ANAK_4 = body.STS_ANAK_4;

    // Additional Information
    if (body.PENSPOK_WARI !== undefined)
      updateData.PENSPOK_WARI = parseInt(body.PENSPOK_WARI) || null;
    if (body.RP1 !== undefined) updateData.RP1 = parseInt(body.RP1) || null;
    if (body.BRP1 !== undefined) updateData.BRP1 = parseInt(body.BRP1) || null;
    if (body.RP2 !== undefined) updateData.RP2 = parseInt(body.RP2) || null;
    if (body.BRP2 !== undefined) updateData.BRP2 = parseInt(body.BRP2) || null;
    if (body.TMB_PN !== undefined) updateData.TMB_PN = body.TMB_PN;
    if (body.ALAMAT !== undefined) updateData.ALAMAT = body.ALAMAT;
    if (body.ALAMAT_ASABRI !== undefined)
      updateData.ALAMAT_ASABRI = body.ALAMAT_ASABRI;
    if (body.UTAMA !== undefined) updateData.UTAMA = body.UTAMA;
    if (body.NO_SERI !== undefined) updateData.NO_SERI = body.NO_SERI;
    if (body.NO_SKEP2 !== undefined) updateData.NO_SKEP2 = body.NO_SKEP2;
    if (body.TGL_SKEP2 !== undefined) updateData.TGL_SKEP2 = body.TGL_SKEP2;

    // Check if NRP is being updated and ensure uniqueness
    if (body.NRP && body.NRP !== existingPersonil.NRP) {
      const existingNRP = await prisma.personil.findUnique({
        where: { NRP: body.NRP },
      });

      if (existingNRP) {
        return Response.json(
          {
            error: "NRP already exists",
          },
          {
            status: 400,
          }
        );
      }
    }

    // Update personil data
    const updatedPersonil = await prisma.personil.update({
      where: { id: personilId },
      data: updateData,
    });

    return Response.json(
      {
        message: "Personil updated successfully",
        data: updatedPersonil,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("POST Personil Error:", error);
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
