"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Tag from "../components/Tag";
import { useI18n } from "../lib/i18n";
import casesData from "../data/cases.json";

interface CaseItem {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
}

export default function CasesPage() {
  const { t, language } = useI18n();

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.cases") },
  ];

  const cases: CaseItem[] = casesData.cases;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        {/* Breadcrumb - Hidden on mobile */}
        <div className="w-full bg-white hidden lg:block">
          <div className="flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-[120px] py-4 sm:py-6">
            <div className="w-full max-w-[1200px]">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>

        {/* Hero Section - Hidden on mobile */}
        <div className="w-full bg-white hidden lg:block">
          <div className="flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[60px]">
            <div className="w-full max-w-[1200px]">
              <h1 className="text-[#2d3748] font-poppins text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight sm:leading-[48px] md:leading-[58px] mb-4 sm:mb-6">
                {t("cases.hero.title")}
              </h1>
            </div>
          </div>
        </div>

        {/* Cases Grid */}
        <div className="w-full bg-white">
          <div className="flex flex-col items-center justify-start px-4 sm:px-8 md:px-16 lg:px-[120px] pb-12 sm:pb-16 md:pb-20 lg:pb-[80px]">
            <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.slug}
                  href={`/cases/${caseItem.slug}`}
                  className="group block"
                >
                  <div className="border border-[#e2e8f0] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#84cc16] h-full">
                    <div className="p-6 h-full flex flex-col">
                      {/* Date */}
                      <div className="text-[#4a5568] font-inter text-sm mb-3">
                        {caseItem.date}
                      </div>

                      {/* Title */}
                      <h3 className="text-[#2d3748] font-poppins text-lg font-semibold leading-6 mb-3 group-hover:text-[#84cc16] transition-colors">
                        {language === "ru" && (caseItem as any)?.titleRu
                          ? (caseItem as any).titleRu
                          : language === "pl" && (caseItem as any)?.titlePl
                          ? (caseItem as any).titlePl
                          : caseItem.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#4a5568] font-inter text-sm leading-6 mb-4 flex-grow">
                        {language === "ru" && (caseItem as any)?.descriptionRu
                          ? (caseItem as any).descriptionRu
                          : language === "pl" &&
                            (caseItem as any)?.descriptionPl
                          ? (caseItem as any).descriptionPl
                          : caseItem.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {caseItem.tags.map((tag, index) => (
                          <Tag key={index} size="sm">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
