"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import { useI18n } from "../lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.contact") },
  ];

  // Helper function to render description with clickable links
  const renderDescriptionWithLink = (
    descriptionKey: string,
    linkTextKey: string,
    linkUrlKey: string
  ) => {
    const description = t(descriptionKey);
    const linkText = t(linkTextKey);
    const linkUrl = t(linkUrlKey);

    const parts = description.split("{link}");

    return (
      <>
        {parts[0]}
        <a
          href={linkUrl}
          target={linkUrl.startsWith("mailto:") ? "_self" : "_blank"}
          rel={linkUrl.startsWith("mailto:") ? "" : "noopener noreferrer"}
          className="text-[#84cc16] hover:text-[#65a30d] transition-colors font-medium"
        >
          {linkText}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Social Media Block */}
              <div className="border-1 border-[#84cc16] p-6 bg-white h-[168px]">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/icons/conversation.svg"
                    alt="Social media"
                    width={20}
                    height={20}
                    className="text-[#84cc16]"
                  />
                  <h3 className="text-[#2d3748] font-inter text-lg font-semibold">
                    {t("contact.methods.socialMedia.title")}
                  </h3>
                </div>
                <p className="text-[#4a5568] font-inter text-xl">
                  {
                    t("contact.methods.socialMedia.description").split(
                      "Telegram"
                    )[0]
                  }
                  <a
                    href={t("contact.methods.socialMedia.telegramUrl")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#84cc16] hover:text-[#65a30d] transition-colors font-medium"
                  >
                    Telegram
                  </a>
                  {t("contact.methods.socialMedia.description").includes(
                    "Linkedin"
                  )
                    ? " and "
                    : " "}
                  <a
                    href={t("contact.methods.socialMedia.linkedinUrl")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#84cc16] hover:text-[#65a30d] transition-colors font-medium"
                  >
                    Linkedin
                  </a>
                </p>
              </div>

              {/* Contact Block */}
              <div className="border-1 border-[#84cc16] p-6 bg-white">
                <p className="text-[#4a5568] font-inter text-xl">
                  {
                    t("contact.methods.contact.description").split(
                      "Telegram"
                    )[0]
                  }
                  <a
                    href={t("contact.methods.contact.telegramUrl")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#84cc16] hover:text-[#65a30d] transition-colors font-medium"
                  >
                    Telegram
                  </a>
                  {" and "}
                  <a
                    href={t("contact.methods.contact.whatsappUrl")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#84cc16] hover:text-[#65a30d] transition-colors font-medium"
                  >
                    WhatsApp
                  </a>
                  {
                    t("contact.methods.contact.description").split(
                      "WhatsApp"
                    )[1]
                  }
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm variant="compact" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
