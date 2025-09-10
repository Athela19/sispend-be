import prisma from "@/lib/prisma"; // sesuaikan path prisma client-mu
import { sendOtpEmail } from "@/lib/sendOTP";
import { logHistory, ACTION_TYPES } from "@/lib/historyLogger";

function generateOTP(length = 6) {
  const digits = "0123456789";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
}

/**
 * @swagger
 * /api/otp:
 *   post:
 *     tags:
 *       - OTP
 *     summary: Mengirim OTP ke email
 *     description: Mengirim OTP ke email yang terdaftar di database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email yang sudah terdaftar di database
 *                 example: "dimasfaiz@gmail.com"
 *             required: [email]
 *     responses:
 *       200:
 *         description: OTP berhasil dikirim ke email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "OTP sent to email"
 *       400:
 *         description: Email tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Email is required"
 *       404:
 *         description: User dengan email tersebut tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "User not found"
 *       500:
 *         description: Terjadi kesalahan server
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal Server Error"
 */

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const otp = generateOTP(6);
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.users.update({
      where: { email },
      data: { otp, otpExpires },
    });

    await sendOtpEmail(email, otp);

    // Log the OTP request to history
    await logHistory({
      userId: user.id,
      action: ACTION_TYPES.OTP_REQUESTED,
      detail: `OTP requested for user: ${user.name} (${user.email})`,
      requestData: { email },
      responseData: { otpExpires: otpExpires.toISOString() },
    });

    return new Response(JSON.stringify({ message: "OTP sent to email" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
