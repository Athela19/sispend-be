import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Auth User
export async function authUser(request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      status: 401,
      body: { error: "Unauthorized - Token missing or invalid" },
    };
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prisma.users.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: true,
        createdAt: true,
      },
    });

    if (!user) return { status: 404, body: { error: "User not found" } };

    return { status: 200, user };
  } catch (err) {
    if (err.name === "JsonWebTokenError")
      return { status: 401, body: { error: "Invalid token" } };
    return { status: 500, body: { error: "Internal Server Error" } };
  }
}

// Auth Admin
export async function authAdmin(request) {
  const authCheck = await authUser(request);
  if (authCheck.status !== 200) return authCheck;

  if (authCheck.user.role !== "ADMIN")
    return { status: 403, body: { error: "Forbidden - Admin access only" } };
  return { status: 200, user: authCheck.user };
}

// Verify OTP token
export function verifyOtpToken(request) {
  const otpAuthHeader = request.headers.get("otpVerifiedToken") || "";

  if (!otpAuthHeader.startsWith("Bearer ")) {
    return {
      error: "OTP verification token missing",
      status: 401,
    };
  }

  const otpToken = otpAuthHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(otpToken, JWT_SECRET);
    if (!decoded.otpVerified)
      return {
        error: "OTP not verified",
        status: 401,
      };

    return { valid: true, decoded };
  } catch (err) {
    return {
      error: "Invalid or expired OTP token",
      status: 401,
    };
  }
}
