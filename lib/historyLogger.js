import prisma from "@/lib/prisma";

/**
 * Logs an action to the history table
 * @param {Object} params - The logging parameters
 * @param {number} params.userId - ID of the user performing the action
 * @param {number|null} params.personilId - ID of the personil affected (optional)
 * @param {string} params.action - The action being performed
 * @param {string|null} params.detail - Additional details about the action (optional)
 * @param {Object|null} params.requestData - The request data (optional, for logging what was changed)
 * @param {Object|null} params.responseData - The response data (optional, for logging the result)
 * @returns {Promise<Object>} The created history record
 */
export async function logHistory({
  userId,
  personilId = null,
  action,
  detail = null,
  requestData = null,
  responseData = null,
}) {
  try {
    // Build detail string with request/response data if provided
    let fullDetail = detail;

    if (requestData || responseData) {
      const details = [];
      if (detail) details.push(detail);
      if (requestData) details.push(`Request: ${JSON.stringify(requestData)}`);
      if (responseData)
        details.push(`Response: ${JSON.stringify(responseData)}`);
      fullDetail = details.join(" | ");
    }

    const history = await prisma.history.create({
      data: {
        userId,
        personilId,
        action,
        detail: fullDetail,
      },
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

    return history;
  } catch (error) {
    console.error("Error logging history:", error);
    // Don't throw error to avoid breaking the main operation
    return null;
  }
}

/**
 * Helper function to extract user ID from request
 * @param {Request} request - The request object
 * @returns {Promise<number|null>} The user ID or null if not found
 */
export async function getUserIdFromRequest(request) {
  try {
    const authUser = (await import("@/middleware/verifyToken")).authUser;
    const authCheck = await authUser(request);

    if (authCheck.status === 200) {
      return authCheck.user.id;
    }

    // Try OTP verification as fallback
    const verifyOtpToken = (await import("@/middleware/verifyToken"))
      .verifyOtpToken;
    const otpVerification = await verifyOtpToken(request);

    if (!otpVerification.error) {
      return otpVerification.user.id;
    }

    return null;
  } catch (error) {
    console.error("Error getting user ID from request:", error);
    return null;
  }
}

/**
 * Common action types for consistent logging
 */
export const ACTION_TYPES = {
  // User actions
  USER_CREATED: "USER_CREATED",
  USER_UPDATED: "USER_UPDATED",
  USER_DELETED: "USER_DELETED",
  USER_LOGIN: "USER_LOGIN",

  // Personil/Soldier actions
  PERSONIL_IMPORTED: "PERSONIL_IMPORTED",
  PERSONIL_EXPORTED: "PERSONIL_EXPORTED",
  PERSONIL_CREATED: "PERSONIL_CREATED",
  PERSONIL_UPDATED: "PERSONIL_UPDATED",
  PERSONIL_DELETED: "PERSONIL_DELETED",

  // OTP actions
  OTP_REQUESTED: "OTP_REQUESTED",
  OTP_VERIFIED: "OTP_VERIFIED",

  // System actions
  DATA_EXPORTED: "DATA_EXPORTED",
  DATA_IMPORTED: "DATA_IMPORTED",
};
