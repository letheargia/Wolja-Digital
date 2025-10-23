"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Tag from "../../components/Tag";
import FloatingSocialButtons from "../../components/FloatingSocialButtons";
import ContentRenderer from "../../components/ContentRenderer";
import { useI18n } from "../../lib/i18n";
import casesData from "../../data/cases.json";

export default function CaseDetailPage() {
  const { t, language } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  // Find the current case from JSON data
  const currentCase = casesData.cases.find(
    (caseItem) => caseItem.slug === slug
  );

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.cases"), href: "/cases" },
    {
      label:
        language === "ru" && (currentCase as any)?.titleRu
          ? (currentCase as any).titleRu
          : language === "pl" && (currentCase as any)?.titlePl
          ? (currentCase as any).titlePl
          : currentCase?.title || "Case",
    },
  ];

  // Helper function to generate content from excerpt
  const generateContentFromExcerpt = (excerpt: string, title: string) => {
    const baseContent = excerpt.replace("... read more", "").trim();

    return `${baseContent}

This comprehensive case study provides detailed insights into the legal and business aspects of ${title.toLowerCase()}. Our experienced legal team has compiled essential information to help you understand the complexities and requirements involved.

Key considerations include regulatory frameworks, compliance requirements, and best practices for implementation. Understanding these elements is crucial for success in today's evolving business landscape.

Our approach combines deep industry knowledge with practical experience to deliver solutions that meet your specific needs. We work closely with clients to develop strategies that align with their business objectives while maintaining full regulatory compliance.`;
  };

  if (!currentCase) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Case not found
            </h1>
            <p className="text-gray-600">
              The requested case could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const content = generateContentFromExcerpt(
    currentCase.excerpt,
    currentCase.title
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb at the very top */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              {language === "ru" && (currentCase as any)?.titleRu
                ? (currentCase as any).titleRu
                : language === "pl" && (currentCase as any)?.titlePl
                ? (currentCase as any).titlePl
                : currentCase.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[#4a5568] font-inter text-sm">
              <span>{currentCase.date}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {currentCase.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          {/* Check if case has rich content, otherwise use fallback */}
          {(currentCase as any).content ? (
            <ContentRenderer content={(currentCase as any).content} />
          ) : (
            <div className="text-[#4a5568] font-inter text-lg leading-relaxed space-y-6">
              {/* Fallback content from JSON */}
              <p className="text-xl leading-relaxed text-[#2d3748] font-medium">
                {(language === "ru" && (currentCase as any)?.excerptRu
                  ? (currentCase as any).excerptRu
                  : language === "pl" && (currentCase as any)?.excerptPl
                  ? (currentCase as any).excerptPl
                  : currentCase.excerpt
                ).replace(/\.\.\. (read more|читать далее|czytaj więcej)/, "")}
              </p>

              <div className="space-y-6">
                {content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>

      <FloatingSocialButtons />

      <Footer />
    </div>
  );
}
