"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { useToast } from "../lib/toast";
import { sendNotification } from "../lib/notifications";

export default function CallbackForm() {
  const { t } = useI18n();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name.trim()) {
      showToast("Please enter your name", "error");
      return;
    }

    if (!formData.phone.trim()) {
      showToast("Please enter your phone number", "error");
      return;
    }

    // Basic phone validation (at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      showToast("Please enter a valid phone number", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send notification via NotificationAPI
      const result = await sendNotification({
        userId: `callback_${Date.now()}`, // Unique user ID for each callback
        notificationId: "callback_request", // Notification template ID
        data: {
          name: formData.name,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          source: "contact_page",
          message: `Callback request from ${formData.name}. Phone: ${formData.phone}`,
          title: "New Callback Request",
        },
      });

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          phone: "",
        });

        // Show success toast
        showToast(
          "Thank you! We will call you back within a working day.",
          "success"
        );

        console.log("Callback request notification sent successfully");
      } else {
        throw new Error(result.error || "Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending callback request:", error);

      // Show error toast
      showToast(
        "Sorry, there was an error processing your request. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="border-1 border-[#84cc16] p-8 bg-white h-[368px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/icons/phone.svg"
          alt="Phone"
          width={20}
          height={20}
          className="text-[#84cc16]"
        />
        <h3 className="text-[#2d3748] font-inter text-lg font-semibold">
          {t("contact.methods.phoneCall.title")}
        </h3>
      </div>

      <p className="text-[#4a5568] font-inter text-xl mb-8">
        {t("contact.methods.phoneCall.description")}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder={t("contact.methods.phoneCall.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors placeholder-gray-500"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("contact.methods.phoneCall.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors placeholder-gray-500"
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-[50%] mx-auto bg-[#84cc16] text-white py-3 px-6 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-auto"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            t("contact.methods.phoneCall.submitButton")
          )}
        </button>
      </form>
    </div>
  );
}
