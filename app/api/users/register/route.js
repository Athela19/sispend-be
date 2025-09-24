import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { authAdmin } from "@/middleware/verifyToken";
import { logHistory, ACTION_TYPES } from "@/lib/historyLogger";

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Mendaftar user baru
 *     description: Mendaftar user baru dengan nama, email, dan password
 *     tags:
 *       - Users
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: false
 *         schema:
 *           type: string
 *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *         description: JWT token required only when registering an admin user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Dimas Faiz"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "dimasfaiz@gmail.com"
 *               password:
 *                 type: string
 *                 example: "passwordrahasia"
 *               role:
 *                 type: string
 *                 enum: [ADMIN, USER]
 *                 example: "USER"
 *             required: [name, email, password]
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: User registered successfully
 *       403:
 *         description: Forbidden, hanya admin yang bisa mendaftarkan user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Only existing admins can register a new admin
 *       400:
 *         description: Bad Request, tidak sesuai dengah format
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 status:
 *                   type: number
 *             examples:
 *               missingFields:
 *                 summary: Name, email, and password are required
 *                 value:
 *                   error: Name, email, and password are required
 *               invalidEmail:
 *                 summary: Invalid email address
 *                 value:
 *                   error: Please provide a valid email address
 *       409:
 *         description: Conflict, email sudah terdaftar
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Email already registered
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *                   nullable: true
 *             example:
 *               error: Internal Server Error
 *               details: Something went wrong
 */

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({
          error: "Name, email, and password are required",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: "Please provide a valid email address",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          error: "Email already registered",
        }),
        {
          status: 409,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Register admin check, cuma admin yang bisa register admin
    if (role === "ADMIN") {
      const authCheck = await authAdmin(request);
      if (authCheck.status !== 200) {
        return new Response(
          JSON.stringify({
            error: "Only existing admins can register a new admin",
          }),
          { status: 403, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "USER",
      },
    });

    let createdByUserId = null;

    // Kalo user yang dibuat admin, check auth sama log admin yang buat akun
    if (role === "ADMIN") {
      const authCheck = await authAdmin(request);
      if (authCheck.status === 200) {
        createdByUserId = authCheck.user.id;
      }
    }

    // Log pembuatan akun oleh admin
    if (createdByUserId) {
      await logHistory({
        userId: createdByUserId,
        action: ACTION_TYPES.USER_CREATED,
        detail: `Membuat akun baru oleh admin: ${name} (${email}) dengan role: ${
          role || "USER"
        }`,
        requestData: { name, email, role: role || "USER" },
        responseData: {
          userId: newUser.id,
          email: newUser.email,
          role: newUser.role,
        },
      });
    } else {
      // Log pembuatan akun oleh user (self-registered)
      await logHistory({
        userId: newUser.id,
        action: ACTION_TYPES.USER_CREATED,
        detail: `Mendaftar akun baru: ${name} (${email}) dengan role: ${
          role || "USER"
        }`,
        requestData: { name, email, role: role || "USER" },
        responseData: {
          userId: newUser.id,
          email: newUser.email,
          role: newUser.role,
        },
      });
    }

    return new Response(
      JSON.stringify({
        message: "User registered successfully",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
