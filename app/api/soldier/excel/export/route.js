/**
 * @swagger
 * /api/soldier/excel/export:
 *   get:
 *     tags:
 *       - Soldier
 *     summary: Export seluruh data personil ke file XLSX
 *     description: Menghasilkan file Excel berisi data personil.
 *     responses:
 *       200:
 *         description: Berhasil menghasilkan file XLSX
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Tidak ada data untuk diexport
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
 *                 error: "Tidak ada data untuk diexport"
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
import ExcelJS from "exceljs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  logHistory,
  getUserIdFromRequest,
  ACTION_TYPES,
} from "@/lib/historyLogger";

export async function GET(request) {
  try {
    // Get user ID for history logging
    const userId = await getUserIdFromRequest(request);

    // Ambil semua data dari database
    const data = await prisma.personil.findMany();

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "Tidak ada data untuk diexport" },
        { status: 404 }
      );
    }

    // Buat workbook dan sheet
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Personil");

    // Kolom sesuai schema Personil terbaru
    const columns = [
      "NRP",
      "NAMA",
      "PANGKAT",
      "KESATUAN",
      "TTL",
      "TMT_TNI",
      "NKTPA",
      "NPWP",
      "AUTENTIK",
      "MDK",
      "MKG",
      "GPT",
      "NO_SKEP",
      "TGL_SKEP",
      "TMT_SKEP",
      "TMT_MULAI",
      "PENSPOK",
      "SELAMA",
      "PASANGAN",
      "TTL_PASANGAN",
      "ANAK_1",
      "TTL_ANAK_1",
      "STS_ANAK_1",
      "ANAK_2",
      "TTL_ANAK_2",
      "STS_ANAK_2",
      "ANAK_3",
      "TTL_ANAK_3",
      "STS_ANAK_3",
      "ANAK_4",
      "TTL_ANAK_4",
      "STS_ANAK_4",
      "PENSPOK_WARI",
      "RP1",
      "BRP1",
      "RP2",
      "BRP2",
      "TMB_PN",
      "ALAMAT",
      "ALAMAT_ASABRI",
      "UTAMA",
      "NO_SERI",
      "NO_SKEP2",
      "TGL_SKEP2",
    ];

    // Tambahkan header
    sheet.addRow(columns);

    // Styling header: warna kuning & bold
    columns.forEach((col, i) => {
      const cell = sheet.getRow(1).getCell(i + 1);
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFF00" }, // kuning
      };
      cell.font = { bold: true };
      cell.alignment = { horizontal: "center" };
    });

    // Tambahkan data
    data.forEach((row) => {
      sheet.addRow(
        columns.map((col) => {
          const value = row[col];
          if (value === null || value === undefined) return "";
          if (value instanceof Date) return value.toISOString().slice(0, 10);
          return String(value);
        })
      );
    });

    // Set lebar kolom otomatis
    sheet.columns.forEach((column) => {
      let maxLength = 10;
      column.eachCell({ includeEmpty: true }, (cell) => {
        const cellLength = cell.value ? cell.value.toString().length : 0;
        if (cellLength > maxLength) maxLength = cellLength;
      });
      column.width = maxLength + 2;
    });

    // Buat buffer XLSX
    const buffer = await workbook.xlsx.writeBuffer();

    // Log the export to history
    if (userId) {
      await logHistory({
        userId,
        action: ACTION_TYPES.PERSONIL_EXPORTED,
        detail: `Exported ${data.length} personil records to Excel file`,
        requestData: { exportType: "all_personil" },
        responseData: {
          recordCount: data.length,
          fileName: "personil.xlsx",
          fileSize: buffer.length,
        },
      });
    }

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": "attachment; filename=personil.xlsx",
      },
    });
  } catch (error) {
    console.error("Export Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan saat mengekspor data" },
      { status: 500 }
    );
  }
}
