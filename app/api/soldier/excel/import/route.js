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

    // === Enhanced CSV parsing ===
    if (fileType.includes("csv") || fileName.endsWith(".csv")) {
      const text = await file.text();

      const detectDelimiter = (sample) => {
        const first =
          sample.split(/\r?\n/, 2)[1] || sample.split(/\r?\n/, 1)[0] || ""; // Skip header row for detection
        const semicolons = (first.match(/;/g) || []).length;
        const commas = (first.match(/,/g) || []).length;
        const tabs = (first.match(/\t/g) || []).length;

        if (tabs > Math.max(semicolons, commas)) return "\t";
        if (semicolons > commas) return ";";
        return ",";
      };

      const { data } = Papa.parse(text, {
        header: true,
        skipEmptyLines: true,
        delimiter: detectDelimiter(text),
        transformHeader: normalizeHeader,
        dynamicTyping: false,
        transform: (value) => {
          if (
            !value ||
            value === "Nihil" ||
            value === "-" ||
            value.trim() === ""
          )
            return null;
          return value.toString().trim();
        },
      });
      // Validate that we have data
      if (data.length === 0) {
        throw new Error("No data found in CSV file");
      }

      rawData = data;
    }
    // === Enhanced XLSX parsing ===
    else if (fileType.includes("spreadsheetml") || fileName.endsWith(".xlsx")) {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, {
        cellDates: true,
        cellText: false,
        raw: false,
      });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      const rows = XLSX.utils.sheet_to_json(worksheet, {
        raw: false,
        defval: null,
        blankrows: false, // Skip blank rows
      });

      rawData = rows
        .map((row) => {
          const out = {};
          Object.keys(row).forEach((k) => {
            const normalizedKey = normalizeKey(k);
            let value = row[k];

            if (
              value === null ||
              value === undefined ||
              value === "Nihil" ||
              value === "-"
            ) {
              value = null;
            } else if (typeof value === "string") {
              value = value.trim();
              if (value === "" || value === "Nihil" || value === "-") {
                value = null;
              }
            }

            out[normalizedKey] = value;
          });
          return out;
        })
        .filter((row) => {
          return Object.values(row).some((val) => val !== null && val !== "");
        });
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

    // ===== Enhanced Helper Functions =====
    const normalizeString = (val) => {
      if (val === undefined || val === null) return null;
      const str = String(val).trim();
      if (str === "" || str.toLowerCase() === "nihil" || str === "-")
        return null;
      return str;
    };

    const normalizeInt = (val) => {
      if (val === undefined || val === null) return null;
      let str = String(val).trim();
      if (str === "" || str.toLowerCase() === "nihil" || str === "-")
        return null;

      // Remove common formatting (dots, commas, spaces for thousands separator)
      str = str.replace(/[.,\s]/g, "");

      const match = str.match(/^-?\d+$/);
      if (!match) return null;

      const num = parseInt(match[0], 10);
      return Number.isFinite(num) ? num : null;
    };

    const normalizeDate = (val) => {
      if (!val) return null;

      if (typeof val === "number" && val > 1 && val < 100000) {
        try {
          const epoch = new Date(1900, 0, 1);
          const days = val - 1; // Excel counts from 1, not 0
          const date = new Date(epoch.getTime() + days * 24 * 60 * 60 * 1000);
          return isNaN(date.getTime()) ? null : date;
        } catch {
          return null;
        }
      }

      const str = String(val).trim();
      if (!str || str.toLowerCase() === "nihil" || str === "-") return null;

      // Try various date formats
      const formats = [
        /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{2,4})$/, // DD-MM-YYYY or DD/MM/YYYY
        /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/, // YYYY-MM-DD or YYYY/MM/DD
        /^(\d{1,2})[-\/](\d{1,2})$/, // DD-MM or DD/MM
      ];

      for (const format of formats) {
        const match = str.match(format);
        if (match) {
          let day, month, year;

          if (format === formats[1]) {
            [, year, month, day] = match;
          } else if (format === formats[2]) {
            [, day, month] = match;
            year = new Date().getFullYear();
          } else {
            [, day, month, year] = match;
          }

          day = parseInt(day, 10);
          month = parseInt(month, 10) - 1;
          year = parseInt(year, 10);

          // Handle 2-digit years
          if (year < 100) {
            year = year < 50 ? 2000 + year : 1900 + year;
          }

          const date = new Date(year, month, day);
          if (
            !isNaN(date.getTime()) &&
            date.getFullYear() === year &&
            date.getMonth() === month &&
            date.getDate() === day
          ) {
            return date;
          }
        }
      }

      try {
        const date = new Date(str);
        return isNaN(date.getTime()) ? null : date;
      } catch {
        return null;
      }
    };

    // ===== Get existing NRPs =====
    const existingNRPs = await prisma.personil.findMany({
      select: { NRP: true },
    });
    const existingNRPSet = new Set(
      existingNRPs
        .map((item) => normalizeString(item.NRP))
        .filter((nrp) => Boolean(nrp))
    );

    // ===== Enhanced Data Mapping =====
    const mappedData = rawData
      .map((row, index) => {
        try {
          let nrpValue = row.NRP || row.nrp;

          const nrp = normalizeString(nrpValue);
          if (!nrp) {
            console.warn(
              `Row ${index + 1}: Invalid or missing NRP: ${nrpValue}`
            );
            return null; // Skip this row
          }

          return {
            // Core identifiers
            NRP: nrp,
            NAMA: normalizeString(row.NAMA || row.Nama || row.nama),
            PANGKAT: normalizeString(row.PANGKAT || row.Pangkat || row.pangkat),
            KESATUAN: normalizeString(
              row.KESATUAN || row.Kesatuan || row.kesatuan
            ),

            // TTL
            TTL: normalizeDate(row.TTL || row.ttl || row.KELAHIRAN),
            TMT_TNI: normalizeString(
              row.TMT_TNI || row["TMT TNI"] || row.TMTTNI
            ),

            // Data Pajak dan NKTPA
            NKTPA: normalizeString(row.NKTPA || row.nktpa),
            NPWP: normalizeString(row.NPWP || row.npwp),
            AUTENTIK: normalizeString(
              row.AUTENTIK || row.Autentik || row.autentik
            ),

            // Masa Dinas dan Gaji
            MDK: normalizeInt(row.MDK || row.mdk),
            MKG: normalizeInt(row.MKG || row.mkg),
            GPT: normalizeInt(row.GPT || row.gpt),

            // SKEP
            NO_SKEP: normalizeString(
              row.NO_SKEP || row["No SKEP"] || row.NOSKEP
            ),
            TGL_SKEP: normalizeDate(row.TGL_SKEP || row["TGL Skep"]),
            TMT_SKEP: normalizeDate(row.TMT_SKEP || row["TMT Skep"]),
            TMT_MULAI: normalizeString(row.TMT_MULAI || row["TMT Mulai"]),

            // Data Keluarga dan Penspok
            PENSPOK: normalizeInt(row.PENSPOK || row.Penspok || row.penspok),
            SELAMA: normalizeString(row.SELAMA || row.Selama || row.selama),
            PASANGAN: normalizeString(
              row.PASANGAN || row.ISTRI || row.Istri || row.istri
            ),
            TTL_PASANGAN: normalizeDate(
              row.TTL_PASANGAN || row["ttl Istri"] || row["TTL ISTRI"]
            ),

            // Data Anak
            ANAK_1: normalizeString(row.ANAK_1 || row["Anak 1"]),
            TTL_ANAK_1: normalizeDate(row.TTL_ANAK_1 || row.TTL1 || row.TTl1),
            STS_ANAK_1: normalizeString(row.STS_ANAK_1 || row.STS1 || row.Sts1),
            ANAK_2: normalizeString(row.ANAK_2 || row["Anak 2"]),
            TTL_ANAK_2: normalizeDate(row.TTL_ANAK_2 || row.TTL2 || row.TTl2),
            STS_ANAK_2: normalizeString(row.STS_ANAK_2 || row.STS2 || row.Sts2),
            ANAK_3: normalizeString(row.ANAK_3 || row["Anak 3"]),
            TTL_ANAK_3: normalizeDate(row.TTL_ANAK_3 || row.TTL3 || row.TTl3),
            STS_ANAK_3: normalizeString(row.STS_ANAK_3 || row.STS3 || row.Sts3),
            ANAK_4: normalizeString(row.ANAK_4 || row["Anak 4"]),
            TTL_ANAK_4: normalizeDate(row.TTL_ANAK_4 || row.TTL4 || row.TTl4),
            STS_ANAK_4: normalizeString(row.STS_ANAK_4 || row.STS4 || row.Sts4),

            // Data Tunjangan
            PENSPOK_WARI: normalizeInt(row.PENSPOK_WARI || row["Penspok Wari"]),
            RP1: normalizeInt(row.RP1 || row.Rp1),
            BRP1: normalizeInt(row.BRP1 || row.Brp1),
            RP2: normalizeInt(row.RP2 || row.Rp2),
            BRP2: normalizeInt(row.BRP2 || row.Brp2),
            TMB_PN: normalizeString(row.TMB_PN || row["TMB/PN"]),

            // Data Alamat dan lainnya
            ALAMAT: normalizeString(row.ALAMAT || row.Alamat || row.alamat),
            ALAMAT_ASABRI: normalizeString(
              row.ALAMAT_ASABRI || row["Alamat asabri"] || row["ALAMAT ASABRI"]
            ),
            UTAMA: normalizeString(row.UTAMA || row.Utama || row.utama),
            NO_SERI: normalizeString(
              row.NO_SERI || row["No Seri"] || row.NO_SERI
            ),
            NO_SKEP2: normalizeString(row.NO_SKEP2 || row["No Skep2"]),
            TGL_SKEP2: normalizeString(row.TGL_SKEP2 || row["Tgl. Skep"]),
          };
        } catch (error) {
          console.warn(`Error processing row ${index + 1}:`, error);
          return null;
        }
      })
      .filter((row) => row !== null); // Remove null rows

    const filteredData = mappedData.filter(
      (row) => !existingNRPSet.has(row.NRP)
    );

    if (filteredData.length === 0) {
      return NextResponse.json({
        success: true,
        message: "Tidak ada data baru untuk diimpor (semua NRP sudah ada)",
        importedCount: 0,
        skippedCount: mappedData.length,
      });
    }

    // ===== Insert with chunking and error handling =====
    const chunkSize = 100;
    let insertedCount = 0;
    const errors = [];

    for (let i = 0; i < filteredData.length; i += chunkSize) {
      const chunk = filteredData.slice(i, i + chunkSize);
      try {
        const result = await prisma.personil.createMany({
          data: chunk,
          skipDuplicates: true,
        });
        insertedCount += result.count;
      } catch (error) {
        console.error(`Error inserting chunk ${i / chunkSize + 1}:`, error);
        errors.push(`Chunk ${i / chunkSize + 1}: ${error.message}`);

        // Fallback to individual inserts
        for (const record of chunk) {
          try {
            await prisma.personil.create({ data: record });
            insertedCount++;
          } catch (individualError) {
            console.error(
              `Error inserting NRP ${record.NRP}:`,
              individualError
            );
            errors.push(`NRP ${record.NRP}: ${individualError.message}`);
          }
        }
      }
    }

    // Add to history
    await prisma.history.create({
      data: {
        userId,
        personilId: null,
        action: `Import ${insertedCount} data personil baru`,
        detail:
          errors.length > 0 ? `Errors: ${errors.slice(0, 5).join("; ")}` : null,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Data berhasil diimpor. ${insertedCount} record berhasil, ${
        rawData.length - insertedCount
      } dilewati.`,
      importedCount: insertedCount,
      skippedCount: rawData.length - insertedCount,
      errors: errors.length > 0 ? errors.slice(0, 5) : undefined,
    });
  } catch (error) {
    console.error("Import Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Terjadi kesalahan saat mengimpor data",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// ===== Helper Functions =====
function normalizeHeader(header) {
  if (!header) return header;

  const originalHeader = String(header).trim();
  const cleaned = originalHeader
    .toUpperCase()
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();

  const headerMap = {
    "No.": "NO",
    Nama: "NAMA",
    Pangkat: "PANGKAT",
    NRP: "NRP",
    TTL: "TTL",
    KESATUAN: "KESATUAN",
    "TMT TNI": "TMT_TNI",
    NKTPA: "NKTPA",
    NPWP: "NPWP",
    Autentik: "AUTENTIK",
    MDK: "MDK",
    MKG: "MKG",
    GPT: "GPT",
    "No SKEP": "NO_SKEP",
    "TGL Skep": "TGL_SKEP",
    "TMT Skep": "TMT_SKEP",
    "TMT Mulai": "TMT_MULAI",
    Penspok: "PENSPOK",
    Selama: "SELAMA",
    Istri: "PASANGAN",
    "ttl Istri": "TTL_PASANGAN",
    "Anak 1": "ANAK_1",
    TTl1: "TTL_ANAK_1",
    Sts1: "STS_ANAK_1",
    "Anak 2": "ANAK_2",
    TTl2: "TTL_ANAK_2",
    Sts2: "STS_ANAK_2",
    "Anak 3": "ANAK_3",
    TTl3: "TTL_ANAK_3",
    Sts3: "STS_ANAK_3",
    "Anak 4": "ANAK_4",
    TTl4: "TTL_ANAK_4",
    Sts4: "STS_ANAK_4",
    "Penspok Wari": "PENSPOK_WARI",
    Rp1: "RP1",
    Brp1: "BRP1",
    Rp2: "RP2",
    Brp2: "BRP2",
    "TMB/PN": "TMB_PN",
    Alamat: "ALAMAT",
    "Alamat asabri": "ALAMAT_ASABRI",
    Utama: "UTAMA",
    "No Seri": "NO_SERI",
    "No Skep2": "NO_SKEP2",
    "Tgl. Skep": "TGL_SKEP2",
  };

  if (headerMap[originalHeader]) return headerMap[originalHeader];
  if (headerMap[cleaned]) return headerMap[cleaned];

  return cleaned.replace(/[^A-Z0-9_]/g, "_");
}

function normalizeKey(key) {
  return normalizeHeader(key);
}
