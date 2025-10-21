"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Tag from "../components/Tag";
import { useI18n } from "../lib/i18n";
import Image from "next/image";

export default function TeamPage() {
  const { t, translations } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.team") },
  ];

  // Get team members from translations
  const teamMembers = translations?.team?.members || [];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb - Hidden on mobile */}
        <div className="hidden lg:block">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Team Section */}
        <div className="mb-16">
          {/* Page Title - Hidden on mobile */}
          <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-6 hidden lg:block">
            {t("team.title")}
          </h1>
          <p className="font-inter text-lg text-[#4a5568] max-w-4xl mb-12">
            {t("team.description")}
          </p>

          {/* Team Members */}
          <div className="space-y-16">
            {teamMembers && teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex flex-col lg:flex-row gap-8 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo */}
                  <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-2">
                        {member.name}
                      </h2>
                      <p className="font-inter text-lg text-[#4a5568] mb-1">
                        {member.position} | {member.experience}
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-inter text-sm font-semibold text-[#2d3748] mb-1">
                          {t("team.labels.education")}
                        </p>
                        <p className="font-inter text-sm text-[#4a5568]">
                          {member.education}
                        </p>
                      </div>

                      <div>
                        <p className="font-inter text-sm font-semibold text-[#2d3748] mb-1">
                          {t("team.labels.languages")}
                        </p>
                        <p className="font-inter text-sm text-[#4a5568]">
                          {member.languages}
                        </p>
                      </div>
                    </div>

                    <p className="font-inter text-[#4a5568] mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.services.map((service, serviceIndex) => (
                        <Tag key={serviceIndex}>{service}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No team members found.</p>
              </div>
            )}
          </div>
        </div>

        {/* Need Legal Support Section */}
        <div className="text-center mb-8 border-1 border-gray-300 rounded-md p-4">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-2">
            {t("team.contact.title")}
          </h2>
          <p className="font-inter text-lg text-[#4a5568] max-w-3xl mx-auto mb-4">
            {t("team.contact.subtitle")}
          </p>
          <a href="/contact">
            <button className="bg-[#84cc16] text-white py-3 px-8 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300">
              {t("team.labels.contactUs")}
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
