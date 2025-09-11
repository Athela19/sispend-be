import prisma from "@/lib/prisma";
import { authUser, verifyOtpToken } from "@/middleware/verifyToken";
import bcrypt from "bcrypt";
import {
  logHistory,
  getUserIdFromRequest,
  ACTION_TYPES,
} from "@/lib/historyLogger";

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Mengambil data user berdasarkan ID
 *     description: Mengambil data user berdasarkan ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID user
 *         schema:
 *           type: integer
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Data user terambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Dimas Faiz"
 *                 email:
 *                   type: string
 *                   example: "dimasfaiz@gmail.com"
 *                 role:
 *                   type: string
 *                   example: "ADMIN"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-06-01T10:00:00.000Z"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Invalid user ID"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "User not found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Internal Server Error"
 *   put:
 *     tags:
 *       - Users
 *     summary: Mengubah data user berdasarkan ID
 *     description: |
 *       Mengubah data user berdasarkan ID.
 *
 *       **Catatan Penting:**
 *       - Admin dapat mengubah user mana saja tanpa OTP
 *       - Non-admin harus menyertakan `otpVerifiedToken` di header untuk mengubah data
 *       - Hanya admin yang dapat mengubah role user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID user
 *         schema:
 *           type: integer
 *       - name: otpVerifiedToken
 *         in: header
 *         required: false
 *         description: |
 *           Token verifikasi OTP (wajib untuk user non-Admin).
 *           Dapatkan token ini dari endpoint /api/otp/check setelah verifikasi OTP.
 *           Format: Bearer <otp-jwt-token>
 *         schema:
 *           type: string
 *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nama user baru
 *                 example: "Dimas Faiz Updated"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email user baru
 *                 example: "dimasfaiz.updated@gmail.com"
 *               password:
 *                 type: string
 *                 description: Password baru user
 *                 minLength: 6
 *                 example: "passwordbaru123"
 *               role:
 *                 type: string
 *                 enum: [ADMIN, USER]
 *                 description: Role user (hanya admin yang dapat mengubah ini)
 *                 example: "USER"
 *             minProperties: 1
 *           examples:
 *             update_basic_info:
 *               summary: Update basic information
 *               value:
 *                 name: "John Doe Updated"
 *                 email: "john.updated@example.com"
 *             update_password:
 *               summary: Update password only
 *               value:
 *                 password: "newpassword123"
 *             admin_update_role:
 *               summary: Admin updating user role
 *               value:
 *                 name: "Jane Admin"
 *                 role: "ADMIN"
 *     responses:
 *       200:
 *         description: Data user berhasil diubah
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Dimas Faiz Updated"
 *                 email:
 *                   type: string
 *                   example: "dimasfaiz.updated@gmail.com"
 *                 role:
 *                   type: string
 *                   example: "USER"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-06-01T10:00:00.000Z"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               invalid_id:
 *                 summary: Invalid user ID
 *                 value:
 *                   error: "Invalid user ID"
 *               no_fields:
 *                 summary: No fields provided
 *                 value:
 *                   error: "At least one field must be provided for update"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               no_token:
 *                 summary: Missing authorization token
 *                 value:
 *                   error: "Unauthorized - Token missing or invalid"
 *               invalid_otp_token:
 *                 summary: Invalid OTP token for non-admin
 *                 value:
 *                   error: "Invalid or expired OTP token"
 *               missing_otp_token:
 *                 summary: Missing OTP token for non-admin
 *                 value:
 *                   error: "OTP verification token missing"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Only admins can change user roles"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "User not found"
 *       409:
 *         description: Conflict
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Email already exists"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Internal Server Error"
 *   delete:
 *     tags:
 *       - Users
 *     summary: Menghapus data user berdasarkan ID
 *     description: |
 *       Menghapus data user berdasarkan ID.
 *
 *       **Catatan Penting:**
 *       - Admin dapat menghapus user mana saja tanpa OTP
 *       - Non-admin harus menyertakan `otpVerifiedToken` di header untuk menghapus data
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID user yang akan dihapus
 *         schema:
 *           type: integer
 *       - name: otpVerifiedToken
 *         in: header
 *         required: false
 *         description: |
 *           Token verifikasi OTP (wajib untuk user non-Admin).
 *           Dapatkan token ini dari endpoint /api/otp/check setelah verifikasi OTP.
 *           Format: Bearer <otp-jwt-token>
 *         schema:
 *           type: string
 *           example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Data user berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User deleted successfully"
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Invalid user ID"
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             examples:
 *               no_token:
 *                 summary: Missing authorization token
 *                 value:
 *                   error: "Unauthorized - Token missing or invalid"
 *               invalid_otp_token:
 *                 summary: Invalid OTP token for non-admin
 *                 value:
 *                   error: "Invalid or expired OTP token"
 *               missing_otp_token:
 *                 summary: Missing OTP token for non-admin
 *                 value:
 *                   error: "OTP verification token missing"
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "User not found"
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Internal Server Error"
 */

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return Response.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json(user, { status: 200 });
  } catch (error) {
    console.error("GET User Error:", error);
    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    let currentUser = null;
    const authCheck = await authUser(request);
    if (authCheck.status === 200) {
      currentUser = authCheck.user;
    } else {
      const otpVerification = await verifyOtpToken(request);
      if (otpVerification.error) {
        return Response.json(
          { error: otpVerification.error },
          { status: otpVerification.status }
        );
      }
      currentUser = otpVerification.user;
    }
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return Response.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const { name, email, password, role } = await request.json();

    if (!name && !email && !password) {
      return Response.json(
        { error: "At least one field must be provided for update" },
        { status: 400 }
      );
    }

    const isAdmin = currentUser?.role === "ADMIN";

    if (role && !isAdmin) {
      return Response.json(
        { error: "Only admins can change user roles" },
        { status: 403 }
      );
    }
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (isAdmin && role) updateData.role = role;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Get the original user data for comparison
    const originalUser = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    // Log the user update to history
    const currentUserId = currentUser.id;
    const changes = [];
    if (name && originalUser.name !== name)
      changes.push(`name: ${originalUser.name} → ${name}`);
    if (email && originalUser.email !== email)
      changes.push(`email: ${originalUser.email} → ${email}`);
    if (role && originalUser.role !== role)
      changes.push(`role: ${originalUser.role} → ${role}`);
    if (password) changes.push("password: [UPDATED]");

    await logHistory({
      userId: currentUserId,
      action: ACTION_TYPES.USER_UPDATED,
      detail: `Mengupdate data user ${
        originalUser.name
      } (ID: ${userId}): ${changes.join(", ")}`,
      requestData: {
        name,
        email,
        role,
        password: password ? "[PROVIDED]" : undefined,
      },
      responseData: {
        userId: updatedUser.id,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });

    return Response.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("PUT User Error:", error);

    if (error.code === "P2002") {
      return Response.json({ error: "Email already exists" }, { status: 409 });
    }

    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const authCheck = await authUser(request);
    if (authCheck.status !== 200) {
      return Response.json(authCheck.body, { status: authCheck.status });
    }

    const currentUser = authCheck.user;
    const { id } = await params;
    const userId = parseInt(id);

    if (isNaN(userId)) {
      return Response.json({ error: "Invalid user ID" }, { status: 400 });
    }

    if (currentUser.role !== "ADMIN") {
      const otpVerification = verifyOtpToken(request);

      if (otpVerification.error) {
        return Response.json(
          { error: otpVerification.error },
          { status: otpVerification.status }
        );
      }
    }

    const userExists = await prisma.users.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!userExists) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.users.delete({
      where: { id: userId },
    });

    // Log the user deletion to history
    const currentUserId = currentUser.id;
    await logHistory({
      userId: currentUserId,
      action: ACTION_TYPES.USER_DELETED,
      detail: `Menghapus data user: ${userExists.name} (${userExists.email}) dengan role: ${userExists.role}`,
      requestData: { deletedUserId: userId },
      responseData: { deletedUser: userExists },
    });

    return Response.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE User Error:", error);

    if (error.code === "P2025") {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
