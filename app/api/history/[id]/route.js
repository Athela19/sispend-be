import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { authAdmin } from "@/middleware/verifyToken";

/**
 * @swagger
 * /api/history/{id}:
 *   delete:
 *     tags:
 *       - History
 *     summary: Hapus history berdasarkan ID (Admin)
 *     description: Menghapus satu data history berdasarkan ID. Operasi ini hanya bisa dilakukan oleh admin.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID dari history yang akan dihapus
 *     responses:
 *       200:
 *         description: History berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "History dengan ID 1 berhasil dihapus"
 *       401:
 *         description: Unauthorized - Token tidak valid atau hilang
 *       403:
 *         description: Forbidden - Akses hanya untuk admin
 *       404:
 *         description: Not Found - History dengan ID yang diberikan tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan pada server
 */
export async function DELETE(request, { params }) {
  const adminCheck = await authAdmin(request);
  if (adminCheck.status !== 200) {
    return NextResponse.json(adminCheck.body, { status: adminCheck.status });
  }

  const { id } = params;
  const historyId = parseInt(id, 10);

  if (isNaN(historyId)) {
    return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
  }

  try {
    const history = await prisma.history.findUnique({
      where: { id: historyId },
    });

    if (!history) {
      return NextResponse.json(
        { error: `History dengan ID ${historyId} tidak ditemukan` },
        { status: 404 }
      );
    }

    await prisma.history.delete({ where: { id: historyId } });

    return NextResponse.json(
      { message: `History dengan ID ${historyId} berhasil dihapus` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`DELETE History Error (ID: ${historyId}):`, error);
    return NextResponse.json(
      { error: "Gagal menghapus history" },
      { status: 500 }
    );
  }
}
