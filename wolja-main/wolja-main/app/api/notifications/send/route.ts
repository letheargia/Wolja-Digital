import { NextRequest, NextResponse } from "next/server";
import notificationapi from "notificationapi-node-server-sdk";

// Helper function to generate default HTML content for notifications
function generateDefaultHtml(notificationId: string, data: any): string {
  const timestamp = new Date(data.timestamp || Date.now()).toLocaleString();

  if (notificationId === "callback_request") {
    return `
      <h2 style="color: #2d3748; font-family: Arial, sans-serif;">New Callback Request</h2>
      <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 16px 0;">
        <p><strong>Name:</strong> ${data.name || "Not provided"}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Request Time:</strong> ${timestamp}</p>
        <p><strong>Source:</strong> ${data.source || "Unknown"}</p>
      </div>
      <p style="color: #4a5568;">Please call back within working hours.</p>
    `;
  } else if (notificationId === "contact_message") {
    return `
      <h2 style="color: #2d3748; font-family: Arial, sans-serif;">New Contact Form Submission</h2>
      <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 16px 0;">
        <p><strong>Name:</strong> ${data.name || "Not provided"}</p>
        <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Submission Time:</strong> ${timestamp}</p>
        <p><strong>Source:</strong> ${data.source || "Unknown"}</p>
        <div style="margin-top: 16px;">
          <strong>Message:</strong>
          <div style="background-color: white; padding: 12px; border-left: 4px solid #84cc16; margin-top: 8px;">
            ${data.message || "No message provided"}
          </div>
        </div>
      </div>
    `;
  }

  // Generic template for other notification types
  return `
    <h2 style="color: #2d3748; font-family: Arial, sans-serif;">New ${notificationId.replace(
      "_",
      " "
    )} Notification</h2>
    <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 16px 0;">
      <p><strong>Time:</strong> ${timestamp}</p>
      ${Object.entries(data)
        .map(([key, value]) =>
          key !== "timestamp" && key !== "source"
            ? `<p><strong>${
                key.charAt(0).toUpperCase() + key.slice(1)
              }:</strong> ${value}</p>`
            : ""
        )
        .join("")}
    </div>
  `;
}

// Input validation interface
interface NotificationRequest {
  userId: string;
  notificationId: string;
  data?: Record<string, any>;
}

// Validation function for request body
function validateRequest(body: any): body is NotificationRequest {
  return (
    body &&
    typeof body === "object" &&
    typeof body.userId === "string" &&
    body.userId.trim() !== "" &&
    typeof body.notificationId === "string" &&
    body.notificationId.trim() !== "" &&
    (body.data === undefined ||
      (typeof body.data === "object" && body.data !== null))
  );
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Validate request body
    if (!validateRequest(body)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid request body. Required fields: userId (string), notificationId (string). Optional: data (object)",
        },
        { status: 400 }
      );
    }

    // Validate environment variables
    const clientId = process.env.NOTIFICATIONAPI_CLIENT_ID;
    const clientSecret = process.env.NOTIFICATIONAPI_CLIENT_SECRET;
    const businessEmail = process.env.NOTIFICATIONAPI_BUSINESS_EMAIL; // Fixed email address for notifications

    if (!clientId || !clientSecret) {
      console.error("NotificationAPI credentials are not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Initialize NotificationAPI SDK
    notificationapi.init(clientId, clientSecret);

    // Send notification to fixed business email
    const notificationResult = await notificationapi.send({
      type: body.notificationId.trim(),
      to: {
        id: `business_${body.notificationId}`,
        email: businessEmail,
      },
      email: {
        subject:
          body.data?.subject ||
          `New ${body.notificationId.replace("_", " ")} - ${
            body.data?.name || "Unknown"
          }`,
        html:
          body.data?.html ||
          generateDefaultHtml(body.notificationId, body.data || {}),
      },
    });

    console.log("Notification sent successfully:", {
      userId: body.userId,
      notificationId: body.notificationId,
      timestamp: new Date().toISOString(),
      result: notificationResult.data,
    });

    return NextResponse.json({
      success: true,
      data: notificationResult.data,
    });
  } catch (error) {
    // Handle NotificationAPI SDK errors
    console.error("Error sending notification:", error);

    // Check if it's a NotificationAPI SDK error
    if (error && typeof error === "object" && "response" in error) {
      const apiError = error as any;
      const status = apiError.response?.status || 500;
      const message =
        apiError.response?.data?.message ||
        apiError.message ||
        "Failed to send notification";

      console.error(`NotificationAPI SDK error (${status}):`, message);

      return NextResponse.json(
        { success: false, error: message },
        { status: status >= 400 && status < 600 ? status : 500 }
      );
    }

    // Handle other unexpected errors
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, error: "Method not allowed. Use POST." },
    { status: 405 }
  );
}
