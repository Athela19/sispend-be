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
