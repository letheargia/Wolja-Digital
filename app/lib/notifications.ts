// Utility functions for sending notifications via our API

export interface NotificationData {
  userId: string;
  notificationId: string;
  data?: Record<string, any>;
}

export interface NotificationResponse {
  success: boolean;
  error?: string;
  response?: any;
}

/**
 * Send a notification via our server-side API route
 *
 * @param payload - The notification data
 * @returns Promise with success/error response
 */
export async function sendNotification(
  payload: NotificationData
): Promise<NotificationResponse> {
  try {
    const response = await fetch("/api/notifications/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Notification API error:", result);
    }

    return result;
  } catch (error) {
    console.error("Network error sending notification:", error);
    return {
      success: false,
      error: "Network error occurred while sending notification",
    };
  }
}

/**
 * Send a welcome notification to a new user
 */
export async function sendWelcomeNotification(
  userId: string,
  userName: string
) {
  return sendNotification({
    userId,
    notificationId: "welcome_message",
    data: { name: userName },
  });
}

/**
 * Send a generic notification with custom data
 */
export async function sendCustomNotification(
  userId: string,
  notificationId: string,
  customData: Record<string, any> = {}
) {
  return sendNotification({
    userId,
    notificationId,
    data: customData,
  });
}
