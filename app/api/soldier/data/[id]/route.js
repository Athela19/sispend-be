/**
 * @swagger
 * /api/soldier/data/{id}:
 *   get:
 *     summary: Ambil detail data personil
 *     description: Mengambil data lengkap personil berdasarkan ID
 *     tags:
 *       - Soldier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID personil
 *         example: 1
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Data personil ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Personil'
 *       404:
 *         description: Data tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan server
 *   post:
 *     summary: Edit data personil
 *     description: |
 *       Mengedit data personil berdasarkan ID. Hanya field yang dikirim yang akan diupdate, field lain tetap tidak berubah.
 *       **Catatan:**
 *       - Hanya field yang dikirim yang akan diupdate, field lain tetap tidak berubah.
 *       - Jika akan mengupdate NRP, harus dipastikan NRP tersebut belum terdata di database
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
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Personil'
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
 *   delete:
 *     summary: Hapus data personil
 *     description: |
 *       Menghapus data personil berdasarkan ID.
 *       **Catatan**
 *       - Tidak ada konfirmasi sebelum menghapus data, lakukan konfirmasi di Frontend sebelum melakukan query ini
 *     tags:
 *       - Soldier
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID personil yang akan dihapus
 *         example: 1
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Personil berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Personil deleted successfully"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Invalid personil ID"
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

import prisma from "@/lib/prisma";
import { authUser } from "@/middleware/verifyToken";
import { calculateRetirementDate } from "@/lib/bupHelper";
import { calculateUsiaTahunLabel } from "@/lib/usiaHelper";
import { checkBupStatus } from "@/lib/bupHelper";

export async function GET(request, { params }) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return Response.json(authCheck.body, { status: authCheck.status });
    }

    const { id } = await params;
    const personilId = parseInt(id);

    if (isNaN(personilId)) {
      return Response.json({ error: "Invalid personil ID" }, { status: 400 });
    }

    const personil = await prisma.personil.findUnique({
      where: { id: personilId },
    });

    if (!personil) {
      return Response.json({ error: "Personil not found" }, { status: 404 });
    }

    const status_bup = await checkBupStatus(personil);
    const usia = calculateUsiaTahunLabel(personil.TTL);

    return Response.json(
      {
      data: {
        ...personil,
        usia,
        status_bup,
      },
    }, 
    { status: 200 });
  } catch (error) {
    console.error("GET Personil Error:", error);
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return Response.json(authCheck.body, { status: authCheck.status });
    }

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

    const body = await request.json();

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

    // Recompute PENSIUN when TTL or PANGKAT changes
    if (body.TTL !== undefined || body.PANGKAT !== undefined) {
      const effectiveTTL =
        body.TTL !== undefined ? new Date(body.TTL) : existingPersonil.TTL;
      const effectivePangkat =
        body.PANGKAT !== undefined ? body.PANGKAT : existingPersonil.PANGKAT;
      updateData.PENSIUN = await calculateRetirementDate(
        effectiveTTL,
        effectivePangkat
      );
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

export async function DELETE(request, { params }) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return Response.json(authCheck.body, { status: authCheck.status });
    }

    const { id } = await params;
    const personilId = parseInt(id);

    if (isNaN(personilId)) {
      return Response.json({ error: "Invalid personil ID" }, { status: 400 });
    }

    const existingPersonil = await prisma.personil.findUnique({
      where: { id: personilId },
    });

    if (!existingPersonil) {
      return Response.json({ error: "Personil not found" }, { status: 404 });
    }

    await prisma.personil.delete({ where: { id: personilId } });

    return Response.json(
      { message: "Personil deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Personil Error:", error);
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
