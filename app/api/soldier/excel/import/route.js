/**
 * @swagger
 * /api/soldier/excel/import:
 *   post:
 *     tags:
 *       - Soldier
 *     summary: Import data personil dari file CSV atau XLSX
 *     description: Menerima file CSV/XLSX via multipart/form-data dan menambahkan data personil yang belum ada berdasarkan NRP.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: File CSV atau XLSX berisi data personil
 *     responses:
 *       200:
 *         description: Hasil import
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 importedCount:
 *                   type: integer
 *                 skippedCount:
 *                   type: integer
 *       400:
 *         description: File tidak ditemukan/format tidak didukung/empty
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               file_not_found:
 *                 summary: File tidak ditemukan
 *                 value:
 *                   error: "File tidak ditemukan"
 *               file_format_not_supported:
 *                 summary: Format file tidak didukung
 *                 value:
 *                   error: "Format file tidak didukung. Gunakan format CSV atau XLSX"
 *               file_empty:
 *                 summary: File kosong
 *                 value:
 *                   error: "File kosong"
 *       500:
 *         description: Terjadi kesalahan pada server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 success:
 *                   type: boolean
 *               example:
 *                 error: "Internal Server Error"
 *                 success: false
 */

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { authUser } from "@/middleware/verifyToken";

export async function POST(request) {
  try {
    // ===== Cek user =====
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return NextResponse.json(authCheck.body, { status: authCheck.status });
    }
    const userId = authCheck.user.id;

    // ===== Ambil file =====
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { error: "File tidak ditemukan" },
        { status: 400 }
      );
    }

    let rawData = [];
    const fileName = file.name?.toLowerCase() || "";
    const fileType = file.type || "";

    // === CSV ===
    if (fileType.includes("csv") || fileName.endsWith(".csv")) {
      const text = await file.text();
      const { data } = Papa.parse(text, { header: true, skipEmptyLines: true });
      rawData = data;
    }
    // === XLSX ===
    else if (fileType.includes("spreadsheetml") || fileName.endsWith(".xlsx")) {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      rawData = XLSX.utils.sheet_to_json(worksheet);
    } else {
      return NextResponse.json(
        { error: "Format file tidak didukung. Gunakan CSV atau XLSX" },
        { status: 400 }
      );
    }

    if (rawData.length === 0) {
      return NextResponse.json(
        { error: "File kosong atau tidak ada data" },
        { status: 400 }
      );
    }

    // ===== Helper =====
    const normalizeValue = (val) =>
      val === undefined || val === null ? null : String(val).trim();

    const normalizeNRP = (val) => {
      if (val === undefined || val === null) return null;
      const str = String(val).trim();
      return str === "" ? null : str;
    };

    // ===== Ambil NRP existing =====
    const existingNRPs = await prisma.personil.findMany({
      select: { NRP: true },
    });
    const existingNRPSet = new Set(
      existingNRPs.map((item) => item.NRP).filter((nrp) => nrp)
    );

    // ===== Mapping & Filter =====
    const mappedData = rawData.map((row) => ({
      NAMA1: normalizeValue(row.NAMA1),
      NAMA2: normalizeValue(row.NAMA2),
      NAMA3: normalizeValue(row.NAMA3),
      KDPKT: normalizeValue(row.KDPKT),
      PANGKAT: normalizeValue(row.PANGKAT),
      KORPS: normalizeValue(row.KORPS),
      HAR: normalizeValue(row.HAR),
      NRP: normalizeNRP(row.NRP),
      KELAHIRAN: normalizeValue(row.KELAHIRAN),
      JAB1: normalizeValue(row.JAB1),
      JAB2: normalizeValue(row.JAB2),
      JAB3: normalizeValue(row.JAB3),
      JAB4: normalizeValue(row.JAB4),
      JAB5: normalizeValue(row.JAB5),
      TMTTNI: normalizeValue(row.TMTTNI),
      TGAB: normalizeValue(row.TGAB),
      BLAB: normalizeValue(row.BLAB),
      THAB: normalizeValue(row.THAB),
      KDSAH: normalizeValue(row.KDSAH),
      TMTMPP: normalizeValue(row.TMTMPP),
      TGMPP: normalizeValue(row.TGMPP),
      BLMPP: normalizeValue(row.BLMPP),
      THMPP: normalizeValue(row.THMPP),
      SDTG: normalizeValue(row.SDTG),
      SDBL: normalizeValue(row.SDBL),
      SDTH: normalizeValue(row.SDTH),
      TMTHENTI: normalizeValue(row.TMTHENTI),
      TGHT: normalizeValue(row.TGHT),
      BLHT: normalizeValue(row.BLHT),
      THHT: normalizeValue(row.THHT),
      KET1: normalizeValue(row.KET1),
      KET2: normalizeValue(row.KET2),
      KET3: normalizeValue(row.KET3),
      KET4: normalizeValue(row.KET4),
      KET5: normalizeValue(row.KET5),
      KET6: normalizeValue(row.KET6),
      USUL: normalizeValue(row.USUL),
      FLR: normalizeValue(row.FLR),
      NOSKEP: normalizeValue(row.NOSKEP),
      TGSKEP: normalizeValue(row.TGSKEP),
      KEPPRES: normalizeValue(row.KEPPRES),
      TGKEPP: normalizeValue(row.TGKEPP),
      A: normalizeValue(row.A),
      BL: normalizeValue(row.BL),
      TH: normalizeValue(row.TH),
      KDM: normalizeValue(row.KDM),
      KEPPANG: normalizeValue(row.KEPPANG),
      TGKEPPANG: normalizeValue(row.TGKEPPANG),
      TGGAL: normalizeValue(row.TGGAL),
      BLGAL: normalizeValue(row.BLGAL),
      BLGAL1: normalizeValue(row.BLGAL1),
      THGAL: normalizeValue(row.THGAL),
    }));

    const filteredData = mappedData.filter(
      (row) => row.NRP && !existingNRPSet.has(row.NRP)
    );

    if (filteredData.length === 0) {
      return NextResponse.json(
        { success: false, message: "Semua data sudah ada di database" },
        { status: 200 }
      );
    }

    // ===== Insert dengan chunk =====
    const chunkSize = 200;
    let insertedCount = 0;

    for (let i = 0; i < filteredData.length; i += chunkSize) {
      const chunk = filteredData.slice(i, i + chunkSize);
      const result = await prisma.personil.createMany({
        data: chunk,
        skipDuplicates: true,
      });
      insertedCount += result.count;
    }

    // ===== Tambah ke history =====
    await prisma.history.create({
      data: {
        userId,
        personilId: null,
        action: `Import ${insertedCount} data personil baru`,
        detail: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Data berhasil diimport",
      importedCount: insertedCount,
      skippedCount: rawData.length - insertedCount,
    });
  } catch (error) {
    console.error("Import Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan saat mengimpor data" },
      { status: 500 }
    );
  }
}
