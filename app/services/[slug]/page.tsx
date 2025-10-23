"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Breadcrumb from "../../components/Breadcrumb";
import ContentRenderer from "../../components/ContentRenderer";
import ContactSection from "../../components/ContactSection";
import { useI18n } from "../../lib/i18n";
import servicesData from "../../data/services.json";
import LearnMoreButton from "@/app/components/LearnMoreButton";

export default function ServicePage() {
  const { t } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  // Get service data from JSON file
  const currentService = servicesData.services.find(
    (service) => service.slug === slug
  );

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.services"), href: "/services" },
    { label: t(currentService?.titleKey || "breadcrumb.services") },
  ];

  if (!currentService) {
    return <div>Service not found</div>;
  }

  // Get content from translations
  const content = currentService.contentKey
    ? t(currentService.contentKey)
    : null;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="w-full h-[250px] relative">
        <img
          src={currentService.image}
          alt={t(currentService.titleKey)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* Dynamic Content */}
        <div className="mb-16">
          <ContentRenderer content={content} />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
