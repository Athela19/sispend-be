import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

/**
*  @swagger
*  /api/otp/check:
*    post:
*      summary: Check OTP
*      tags: 
*        - OTP
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                email:
*                  type: string
*                otp:
*                  type: string
*      responses:
*        200:
*          description: OTP valid
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  message:
*                    type: string
*                  otpVerifiedToken:
*                    type: string
*        400:
*          description: OTP invalid
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  error:
*                    type: string 
*        500:
*          description: Internal Server Error
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  error:
*                    type: string
                    
*/

const JWT_SECRET = process.env.JWT_SECRET_KEY;

export async function POST(request) {
  try {
    const { email, otp } = await request.json();
    if (!email || !otp)
      return new Response(
        JSON.stringify({ error: "Email dan OTP dibutuhkan" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );

    const user = await prisma.users.findUnique({ where: { email } });

    if (!user || !user.otp || !user.otpExpires) {
      return new Response(JSON.stringify({ error: "OTP tidak ditemukan" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (String(user.otp) !== String(otp)) {
      return new Response(JSON.stringify({ error: "OTP salah" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const otpExpires = new Date(user.otpExpires);
    if (isNaN(otpExpires.getTime())) {
      return new Response(JSON.stringify({ error: "Data OTP tidak valid" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (new Date() > otpExpires) {
      return new Response(JSON.stringify({ error: "OTP sudah kedaluwarsa" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.users.update({
      where: { email },
      data: { otp: null, otpExpires: null },
    });

    // Buat OTP Verified token
    const otpVerifiedToken = jwt.sign(
      { id: user.id, email: user.email, otpVerified: true },
      JWT_SECRET,
      { expiresIn: "5m" }
    );

    return new Response(
      JSON.stringify({
        message: "OTP valid",
        userId: user.id,
        otpVerifiedToken: otpVerifiedToken,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
