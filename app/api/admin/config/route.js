/**
 * @swagger
 * /api/admin/config:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Ambil konfigurasi usia pensiun
 *     description: Mengembalikan usia pensiun saat ini per kelompok pangkat (pati, pamen, pama, other). Hanya untuk admin.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Usia pensiun saat ini
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 retirementAges:
 *                   type: object
 *                   properties:
 *                     pati:
 *                       type: integer
 *                       example: 60
 *                     pamen:
 *                       type: integer
 *                       example: 58
 *                     pama:
 *                       type: integer
 *                       example: 58
 *                     other:
 *                       type: integer
 *                       example: 53
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized - Token missing or invalid"
 *       500:
 *         description: Internal Server Error
 *   put:
 *     tags:
 *       - Admin
 *     summary: Perbarui konfigurasi usia pensiun
 *     description: Menyimpan/menimpa (upsert) usia pensiun per kelompok. Hanya untuk admin.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               retirementAges:
 *                 type: object
 *                 properties:
 *                   pati:
 *                     type: integer
 *                     minimum: 1
 *                   pamen:
 *                     type: integer
 *                     minimum: 1
 *                   pama:
 *                     type: integer
 *                     minimum: 1
 *                   other:
 *                     type: integer
 *                     minimum: 1
 *           examples:
 *             updateExample:
 *               summary: Update ages
 *               value:
 *                 retirementAges:
 *                   pati: 60
 *                   pamen: 58
 *                   pama: 58
 *                   other: 53
 *     responses:
 *       200:
 *         description: Berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Retirement ages updated successfully
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized - Token missing or invalid"
 *       500:
 *         description: Internal Server Error
 */
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { authAdmin, authUser } from "@/middleware/verifyToken";

export async function GET(request) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200)
      return NextResponse.json(authCheck.body, { status: authCheck.status });

    const configs = await prisma.config.findMany({
      where: { key: { startsWith: "PENSIUN_USIA_" } },
    });

    const retirementAges = {};
    configs.forEach((config) => {
      const group = config.key.replace("PENSIUN_USIA_", "").toLowerCase();
      retirementAges[group] = parseInt(config.value);
    });

    return NextResponse.json({ retirementAges });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const authCheck = await authAdmin(request);
    if (authCheck.status !== 200)
      return NextResponse.json(authCheck.body, { status: authCheck.status });

    const { retirementAges } = await request.json();

    // Update each retirement age
    for (const [group, age] of Object.entries(retirementAges)) {
      await prisma.config.upsert({
        where: { key: `PENSIUN_USIA_${group.toUpperCase()}` },
        update: { value: age.toString() },
        create: {
          key: `PENSIUN_USIA_${group.toUpperCase()}`,
          value: age.toString(),
        },
      });
    }

    return NextResponse.json({
      message: "Retirement ages updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
