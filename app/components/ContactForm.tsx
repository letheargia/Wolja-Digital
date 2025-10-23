"use client";

import { useState } from "react";
import { useI18n } from "../lib/i18n";
import { sendNotification } from "../lib/notifications";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
}

export default function ContactForm({
  title,
  subtitle,
  variant = "default",
}: ContactFormProps) {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send notification via NotificationAPI
      const result = await sendNotification({
        userId: `contact_${Date.now()}`, // Unique user ID for each contact
        notificationId: "contact_message", // Notification template ID
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "contact_form",
          title: "New Contact Form Submission",
          html: `<h2>New Contact Form Submission</h2>
                 <p><strong>Name:</strong> ${formData.name}</p>
                 <p><strong>Email:</strong> ${formData.email}</p>
                 <p><strong>Phone:</strong> ${formData.phone}</p>
                 <p><strong>Message:</strong></p>
                 <p>${formData.message}</p>`,
        },
      });

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setSubmitStatus({
          type: "success",
          message: t("contact.form.success"),
        });

        console.log("Contact form notification sent successfully");
      } else {
        throw new Error(result.error || "Failed to send notification");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);

      setSubmitStatus({
        type: "error",
        message: t("contact.form.error"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (variant === "compact") {
    return (
      <div className="px-6 pb-6">
        {subtitle && (
          <p className="text-[#4a5568] font-inter text-sm mb-6">{subtitle}</p>
        )}

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg mb-4 ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors placeholder:text-gray-500"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors placeholder:text-gray-500"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("contact.form.phone")}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors placeholder:text-gray-500"
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:bg-white transition-colors resize-none placeholder:text-gray-500"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#84cc16] max-w-[300px] text-white py-3 px-6 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                {t("contact.form.sending")}
              </>
            ) : (
              t("contact.form.send")
            )}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-[#2d3748] font-poppins text-3xl font-semibold mb-4">
          {title || t("contact.title")}
        </h2>
        {subtitle && (
          <p className="text-[#4a5568] font-inter text-base">{subtitle}</p>
        )}
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg mb-6 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
              {t("contact.form.name")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
              {t("contact.form.email")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div>
          <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
            {t("contact.form.phone")}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="block text-[#2d3748] font-inter text-sm font-medium mb-2">
            {t("contact.form.message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#84cc16] text-white py-3 px-6 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
              {t("contact.form.sending")}
            </>
          ) : (
            t("contact.form.send")
          )}
        </button>
      </form>
    </div>
  );
}
