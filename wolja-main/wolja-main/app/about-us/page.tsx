"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import FloatingSocialButtons from "../components/FloatingSocialButtons";
import { useI18n } from "../lib/i18n";

export default function AboutUsPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Company Header Section */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title - Hidden on mobile */}
          <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d3748] mb-6 md:mb-8 hidden lg:block">
            {t("about-us.title")}
          </h1>

          {/* Content and Statistics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
            {/* Text Content */}
            <div>
              <p className="font-inter text-md text-[#4a5568] mb-6">
                {t("about-us.description.intro")}
              </p>
              <p className="font-inter text-md text-[#4a5568] mb-6">
                {t("about-us.description.mission")}
              </p>
              <p className="font-inter text-md text-[#4a5568]">
                {t("about-us.description.focus")}
              </p>
            </div>

            {/* Statistics Section - Desktop Overlapping Cards */}
            <div className="relative h-64 w-full hidden lg:block">
              {/* 3 years card - bottom of block */}
              <div className="absolute left-0 bottom-0 bg-white border-1 border-[#84cc16] p-4 w-48 z-10 shadow-sm">
                <div className="text-2xl font-bold text-[#84cc16] mb-1">
                  {t("about-us.statistics.years.value")}
                </div>
                <div className="text-sm text-[#4a5568] font-inter leading-tight">
                  {t("about-us.statistics.years.label")}
                </div>
              </div>

              {/* €13m card - touching top of 3 years card */}
              <div className="absolute left-32 bottom-22 bg-white border-1 border-[#84cc16] p-4 w-48 z-20 shadow-sm">
                <div className="text-2xl font-bold text-[#84cc16] mb-1">
                  {t("about-us.statistics.debt.value")}
                </div>
                <div className="text-sm text-[#4a5568] font-inter leading-tight">
                  {t("about-us.statistics.debt.label")}
                </div>
              </div>

              {/* 130 card - touching bottom of €13m card */}
              <div className="absolute left-68 bottom-0 bg-white border-1 border-[#84cc16] p-4 w-48 z-30 shadow-sm">
                <div className="text-2xl font-bold text-[#84cc16] mb-1">
                  {t("about-us.statistics.projects.value")}
                </div>
                <div className="text-sm text-[#4a5568] font-inter leading-tight">
                  {t("about-us.statistics.projects.label")}
                </div>
              </div>

              {/* 20+ card - touching top of 130 card */}
              <div className="absolute left-100 bottom-22 bg-white border-1 border-[#84cc16] p-4 w-48 z-40 shadow-sm">
                <div className="text-2xl font-bold text-[#84cc16] mb-1">
                  {t("about-us.statistics.arbitration.value")}
                </div>
                <div className="text-sm text-[#4a5568] font-inter leading-tight">
                  {t("about-us.statistics.arbitration.label")}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Statistics Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
            <div className="bg-white border border-[#84cc16] p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">
                {t("about-us.statistics.years.value")}
              </div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                {t("about-us.statistics.years.label")}
              </div>
            </div>
            <div className="bg-white border border-[#84cc16] p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">
                {t("about-us.statistics.projects.value")}
              </div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                {t("about-us.statistics.projects.label")}
              </div>
            </div>
            <div className="bg-white border border-[#84cc16] p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">
                {t("about-us.statistics.debt.value")}
              </div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                {t("about-us.statistics.debt.label")}
              </div>
            </div>
            <div className="bg-white border border-[#84cc16] p-4 shadow-sm">
              <div className="text-2xl font-bold text-[#84cc16] mb-1">
                {t("about-us.statistics.arbitration.value")}
              </div>
              <div className="text-sm text-[#4a5568] font-inter leading-tight">
                {t("about-us.statistics.arbitration.label")}
              </div>
            </div>
          </div>

          {/* Mobile Map Section - showing 60% of image (from 40% to 100%) */}
          <div className="flex justify-center mb-8 lg:hidden overflow-hidden">
            <div
              className="bg-white p-3 flex items-center justify-center overflow-hidden min-w-[650px] min-h-[571px] max-w-full"
              style={{
                backgroundImage: "url(/map.svg)",
                backgroundSize: "166.67% auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "75% center",
              }}
            ></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-1 flex items-start">
              <ContactForm variant="compact" />
            </div>

            {/* Desktop Map - Hidden on mobile */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
              <div
                className="w-full h-[500px] bg-white flex items-center justify-center"
                style={{
                  backgroundImage: "url(/map.svg)",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>

          {/* Office Locations with Maps */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=chmielna+73+Warsaw"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[350px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="/maps/Warsaw.png"
                  alt={t("about-us.offices.warsaw.alt")}
                  className="w-full h-full object-contain"
                />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=29+Nadira+Khosharauli+BLOCK+A+Tbilisi"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[350px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="/maps/Tbilisi.png"
                  alt={t("about-us.offices.tbilisi.alt")}
                  className="w-full h-full object-contain"
                />
              </a>

              <a
                href="https://maps.app.goo.gl/Ejf2AgU41HVJhWpF8"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[350px] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img
                  src="/maps/Limassol.png"
                  alt={t("about-us.offices.limassol.alt")}
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FloatingSocialButtons />

      <Footer />
    </div>
  );
}
