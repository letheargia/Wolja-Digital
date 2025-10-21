"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LearnMoreButton from "../components/LearnMoreButton";
import { useI18n } from "../lib/i18n";
import servicesData from "../data/services.json";

export default function ServicesPage() {
  const { t } = useI18n();

  // Get services data from JSON
  const services = servicesData.services;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Services Grid - Hero Cards only */}
      <section className="">
        <div className="w-full">
          {/* Mobile: 1 column, Desktop: 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.slice(0, 4).map((service, index) => {
              const isLeftCard = index % 2 === 0;

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[267px] md:h-[400px] service-card-overlay">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 md:top-8 left-4 md:${
                        isLeftCard ? "left-8" : "right-8"
                      } text-white w-[calc(100%-2rem)] md:w-[280px] z-10`}
                    >
                      <h3 className="font-poppins text-2xl md:text-[54px] md:leading-[56px] font-bold mb-4">
                        {t(service.titleKey)}
                      </h3>
                      <LearnMoreButton />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile: 1 column, Desktop: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.slice(4, 6).map((service, index) => {
              const isLeftCard = index % 2 === 0;
              return (
                <Link
                  key={index + 4}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[267px] md:h-[400px] service-card-overlay">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 md:top-8 left-4 md:${
                        isLeftCard ? "left-8" : "right-8"
                      } text-white w-[calc(100%-2rem)] md:w-[35%] z-10`}
                    >
                      <h3 className="font-poppins text-2xl md:text-[54px] md:leading-[56px] font-bold mb-4">
                        {t(service.titleKey)}
                      </h3>
                      <LearnMoreButton />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need legal support? Contact Section */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 md:p-6 border border-gray-300 rounded-lg text-center">
            <h2 className="font-poppins text-2xl md:text-4xl font-bold text-[#2d3748] mb-4 md:mb-6">
              {t("team.contact.title")}
            </h2>
            <p className="font-inter text-base md:text-lg text-[#4a5568] mb-6 md:mb-8 mx-0 md:mx-32">
              {t("team.contact.subtitle")}
            </p>
            <button className="bg-[#84cc16] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
              {t("team.labels.contactUs")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
