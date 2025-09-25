import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
/**
 * @swagger
 * /api/history:
 *   get:
 *     tags:
 *       - History
 *     summary: Ambil daftar history tindakan
 *     description: Mengambil daftar history terbaru beserta informasi user dan personil terkait (jika ada).
 *     responses:
 *       200:
 *         description: Daftar history terbaru
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   personilId:
 *                     type: integer
 *                     nullable: true
 *                   action:
 *                     type: string
 *                   detail:
 *                     type: string
 *                     nullable: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   user:
 *                     type: object
 *                     properties:
 *                       id: { type: integer }
 *                       name: { type: string }
 *                       email: { type: string, format: email }
 *                   personil:
 *                     type: object
 *                     nullable: true
 *                     properties:
 *                       id: { type: integer }
 *                       NAMA: { type: string, nullable: true }
 *                       PANGKAT: { type: string, nullable: true }
 *                       KESATUAN: { type: string, nullable: true }
 *       500:
 *         description: Terjadi kesalahan pada server
 */

export async function GET() {
  try {
    const histories = await prisma.history.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        personil: {
          select: {
            id: true,
            NAMA: true,
            PANGKAT: true,
            KESATUAN: true,
          },
        },
      },
    });

    return NextResponse.json(histories, { status: 200 });
  } catch (error) {
    console.error("GET History Error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil history" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { userId, personilId, action, detail } = await request.json();

    if (!userId || !action) {
      return NextResponse.json(
        { error: "userId dan action wajib diisi" },
        { status: 400 }
      );
    }

    const history = await prisma.history.create({
      data: {
        userId,
        personilId: personilId || null, // bisa null
        action,
        detail: detail || null,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
        personil: {
          select: {
            id: true,
            NAMA: true,
            PANGKAT: true,
            KESATUAN: true,
          },
        },
      },
    });

    return NextResponse.json(history, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Gagal menambahkan history" },
      { status: 500 }
    );
  }
}
