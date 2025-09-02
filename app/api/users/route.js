import prisma from "@/lib/prisma";

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Mengambil semua data user
 *     description: Semua data user yang terdapat di database, terkecuali password
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: data user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *                     enum: [ADMIN, USER]
 *             example:
 *               - name: Dimas Faiz
 *                 email: dimasfaiz@gmailcom
 *                 role: ADMIN
 *               - name: Muhammad Syarif
 *                 email: syarif@gmailcom
 *                 role: USER
 *
 */

export async function GET(request) {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
    return new Response(JSON.stringify(users), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
