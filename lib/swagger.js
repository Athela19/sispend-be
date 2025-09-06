import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = () => {
  // Use forward-slash path for cross-platform globbing
  const apiFolder = "app/api";

  // In serverless (Vercel), scanning source files at runtime can fail.
  // If a prebuilt spec exists at public/swagger.json, serve it.
  try {
    const fs = require("node:fs");
    const path = require("node:path");
    const prebuiltPath = path.join(process.cwd(), "public", "swagger.json");
    if (fs.existsSync(prebuiltPath)) {
      const data = fs.readFileSync(prebuiltPath, "utf-8");
      return JSON.parse(data);
    }
  } catch {}

  return createSwaggerSpec({
    apiFolder,
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Sispend AD API Dokumentasi",
        version: "0.0.1",
      },
      components: {
        schemas: {
          Users: {
            type: "object",
            properties: {
              id: { type: "string" },
              name: { type: "string", example: "Dimas Faiz" },
              email: {
                type: "string",
                format: "email",
                example: "dimasfaiz@gmail.com",
              },
              password: { type: "string", example: "passwordrahasia" },
              role: {
                type: "string",
                enum: ["admin", "user"],
                example: "user",
              },
            },
            required: ["id", "name", "email", "role"],
          },
          Personil: {
            type: "object",
            properties: {
              id: { type: "integer", example: 1 },
              NAMA: { type: "string", example: "Arief Gunawan" },
              PANGKAT: { type: "string", example: "Brigjen" },
              NRP: { type: "string", example: "123456789" },
              KESATUAN: { type: "string", example: "Sesko AD" },
              TTL: { type: "string", format: "date", example: "1970-01-01" },
              TMT_TNI: { type: "string", example: "1988-01-01" },
              NKTPA: { type: "string", example: "1234567890123456" },
              NPWP: { type: "string", example: "12.345.678.9-123.000" },
              AUTENTIK: { type: "string", example: "Januari 2024" },
              MDK: { type: "integer", example: 34 },
              MKG: { type: "integer", example: 32 },
              GPT: { type: "integer", example: 5840100 },
              NO_SKEP: { type: "string", example: "B/1234/XII/2024" },
              TGL_SKEP: {
                type: "string",
                format: "date",
                example: "2024-03-01",
              },
              TMT_SKEP: {
                type: "string",
                format: "date",
                example: "2024-03-01",
              },
              TMT_MULAI: { type: "string", example: "Maret 2025" },
              PENSPOK: { type: "integer", example: 4425600 },
              SELAMA: { type: "string", example: "dua belas" },
              PASANGAN: { type: "string", example: "Ratih Putri" },
              TTL_PASANGAN: {
                type: "string",
                format: "date",
                example: "1972-01-01",
              },
              ANAK_1: { type: "string", example: "Anak Pertama" },
              TTL_ANAK_1: {
                type: "string",
                format: "date",
                example: "1995-01-01",
              },
              STS_ANAK_1: { type: "string", example: "anak kandung" },
              ANAK_2: { type: "string", example: "Anak Kedua" },
              TTL_ANAK_2: {
                type: "string",
                format: "date",
                example: "2001-01-01",
              },
              STS_ANAK_2: { type: "string", example: "Anak Kandung" },
              ANAK_3: { type: "string", example: "anak ketiga" },
              TTL_ANAK_3: {
                type: "string",
                format: "date",
                example: "2004-01-01",
              },
              STS_ANAK_3: { type: "string", example: "Anak kandung" },
              ANAK_4: { type: "string", example: "Anak keempat" },
              TTL_ANAK_4: {
                type: "string",
                format: "date",
                example: "2006-01-01",
              },
              STS_ANAK_4: { type: "string", example: "Anak Kandung" },
              PENSPOK_WARI: { type: "integer", example: 2132800 },
              RP1: { type: "integer", example: 595000 },
              BRP1: { type: "integer", example: 1338700 },
              RP2: { type: "integer", example: 1189900 },
              BRP2: { type: "integer", example: 1784900 },
              TMB_PN: { type: "string", example: "B" },
              ALAMAT: {
                type: "string",
                example: "Jl. Contoh No. 123, Jakarta",
              },
              ALAMAT_ASABRI: {
                type: "string",
                example: "Jakarta",
              },
              UTAMA: { type: "string", example: "Utama" },
              NO_SERI: { type: "string", example: "2711497" },
              NO_SKEP2: { type: "string", example: "149-33/II" },
              TGL_SKEP2: { type: "string", example: "11-02-2025" },
              createdAt: {
                type: "string",
                format: "date-time",
                example: "2024-01-01T00:00:00Z",
              },
            },
          },
        },
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
      security: [],
      tags: [
        {
          name: "Users",
          description: "User management",
        },
        {
          name: "OTP",
          description: "OTP Akun",
        },
        {
          name: "Soldier",
          description: "Manajemen data personil (import, export, count)",
        },
        {
          name: "History",
          description: "Pencatatan aktivitas pengguna dan perubahan data",
        },
      ],
    },
  });
};
