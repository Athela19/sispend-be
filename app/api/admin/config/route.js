/**
 * @swagger
 * /api/admin/config:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Ambil konfigurasi BUP (Batas Usia Pensiun)
 *     description: Mengembalikan usia pensiun saat ini per pangkat (Brigjen, Mayjen, Letjen). Hanya untuk admin.
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
 *                 bupAges:
 *                   type: object
 *                   properties:
 *                     brigjen:
 *                       type: integer
 *                       example: 60
 *                     mayjen:
 *                       type: integer
 *                       example: 61
 *                     letjen:
 *                       type: integer
 *                       example: 62
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
 *     summary: Perbarui konfigurasi BUP (Batas Usia Pensiun)
 *     description: Menyimpan/menimpa (upsert) usia pensiun per pangkat (Brigjen, Mayjen, Letjen). Hanya untuk admin.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bupAges:
 *                 type: object
 *                 properties:
 *                   brigjen:
 *                     type: integer
 *                     minimum: 1
 *                   mayjen:
 *                     type: integer
 *                     minimum: 1
 *                   letjen:
 *                     type: integer
 *                     minimum: 1
 *           examples:
 *             updateExample:
 *               summary: Update ages
 *               value:
 *                 bupAges:
 *                   brigjen: 60
 *                   mayjen: 61
 *                   letjen: 62
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
 *                   example: BUP ages updated successfully
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
import { BUP_KEYS } from "@/lib/bupHelper";

export async function GET(request) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200)
      return NextResponse.json(authCheck.body, { status: authCheck.status });

    const configs = await prisma.config.findMany({
      where: {
        key: {
          in: [BUP_KEYS.BRIGJEN, BUP_KEYS.MAYJEN, BUP_KEYS.LETJEN],
        },
      },
    });

    const bupAges = {};
    configs.forEach((config) => {
      if (config.key === BUP_KEYS.BRIGJEN)
        bupAges.brigjen = parseInt(config.value);
      if (config.key === BUP_KEYS.MAYJEN)
        bupAges.mayjen = parseInt(config.value);
      if (config.key === BUP_KEYS.LETJEN)
        bupAges.letjen = parseInt(config.value);
    });

    return NextResponse.json({ bupAges });
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

    const { bupAges } = await request.json();

    // Update each BUP age for specific ranks
    for (const [rank, age] of Object.entries(bupAges)) {
      let configKey;
      if (rank === "brigjen") configKey = BUP_KEYS.BRIGJEN;
      else if (rank === "mayjen") configKey = BUP_KEYS.MAYJEN;
      else if (rank === "letjen") configKey = BUP_KEYS.LETJEN;
      else continue; // Skip unknown ranks

      await prisma.config.upsert({
        where: { key: configKey },
        update: { value: age.toString() },
        create: {
          key: configKey,
          value: age.toString(),
        },
      });
    }

    return NextResponse.json({
      message: "BUP ages updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
