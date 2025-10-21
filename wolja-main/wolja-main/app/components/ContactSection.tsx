"use client";

import { useI18n } from "../lib/i18n";

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section
      className="py-20 px-6 bg-gray-100 relative"
      style={{
        backgroundImage: "url('/handshake.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-poppins text-4xl font-bold text-[#2d3748] mb-2">
          {t("homepage.contact.title")}
        </h2>
        <p className="font-inter text-lg text-[#4a5568] mb-8 mx-auto">
          {t("homepage.contact.subtitle")}
        </p>
        <a
          href="/contact"
          className="bg-[#84cc16] text-white px-8 py-4 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300"
        >
          {t("homepage.contact.cta")}
        </a>
      </div>
    </section>
  );
}
