"use client";

import { useI18n } from "../lib/i18n";
import CaseCard from "./CaseCard";
import casesData from "../data/cases.json";

interface ContentItem {
  type: string;
  text?: string;
  textRu?: string;
  textPl?: string;
  items?: string[];
  itemsRu?: string[];
  itemsPl?: string[];
  title?: string;
  subtitle?: string;
  sections?: any;
  regions?: any;
  programmes?: any;
  conclusion?: string;
  tags?: string[];
}

interface ContentRendererProps {
  content: any;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  const { language } = useI18n();
  if (!content) return null;

  // Handle the new content structure
  if (content.hero) {
    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-[#2d3748] font-poppins text-[54px] font-semibold leading-[56px] mb-6">
            {content.hero.title}
          </h1>
          <p className="text-[#4a5568] font-inter text-base leading-[19px]">
            {content.hero.subtitle}
          </p>
        </div>

        {/* Sections */}
        {content.sections &&
          Object.entries(content.sections).map(
            ([key, section]: [string, any]) => (
              <div key={key} className="mb-8">
                <h2 className="text-[#2d3748] font-inter text-2xl font-semibold leading-[26px] mb-4">
                  {section.title}
                </h2>

                {/* Handle different section types */}
                {section.items && (
                  <ul className="space-y-2 ml-4 mb-4">
                    {section.items.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="text-[#4a5568] font-inter text-base leading-[19px] flex items-center"
                      >
                        <span className="text-[#84cc16] mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Handle sections with descriptions */}
                {section.description && (
                  <p className="text-[#4a5568] font-inter text-base leading-[19px] mb-4 whitespace-pre-line">
                    {section.description}
                  </p>
                )}

                {/* Handle regions with countries */}
                {section.regions &&
                  Object.entries(section.regions).map(
                    ([regionKey, region]: [string, any]) => (
                      <div key={regionKey} className="mb-4">
                        <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-[22px] mb-2">
                          {region.title}
                        </h3>
                        <p className="text-[#4a5568] font-inter text-base leading-[19px]">
                          {region.countries}
                        </p>
                      </div>
                    )
                  )}

                {/* Handle programmes */}
                {section.programmes && (
                  <ul className="space-y-2 ml-4 mb-4">
                    {section.programmes.map((programme: any, index: number) => (
                      <li
                        key={index}
                        className="text-[#4a5568] font-inter text-base leading-[19px] flex items-center"
                      >
                        <span className="text-[#84cc16] mr-3">•</span>
                        <span>
                          <strong>{programme.name}</strong>
                          {programme.benefits && `: ${programme.benefits}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}

        {/* Cases Section */}
        {content.cases && content.cases.tags && (
          <div className="my-12">
            {content.cases.title && (
              <h2 className="text-[#2d3748] font-inter text-2xl font-semibold leading-[26px] mb-6">
                {content.cases.title}
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {casesData.cases
                .filter((caseItem) =>
                  content.cases.tags.some((tag: string) =>
                    caseItem.tags.includes(tag)
                  )
                )
                .map((caseItem) => (
                  <CaseCard
                    key={caseItem.slug}
                    title={caseItem.title}
                    titleRu={caseItem.titleRu}
                    titlePl={caseItem.titlePl}
                    description={caseItem.description}
                    descriptionRu={caseItem.descriptionRu}
                    descriptionPl={caseItem.descriptionPl}
                    date={caseItem.date}
                    tags={caseItem.tags}
                    slug={caseItem.slug}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Conclusion */}
        {content.conclusion && (
          <div className="mt-8">
            <p className="text-[#4a5568] font-inter text-base leading-[19px]">
              {content.conclusion}
            </p>
          </div>
        )}
      </div>
    );
  }

  // Fallback to old structure for backward compatibility
  if (Array.isArray(content)) {
    return (
      <div className="space-y-6">
        {content.map((item, index) => {
          switch (item.type) {
            case "title":
              return (
                <h1
                  key={index}
                  className="text-[#2d3748] font-poppins text-[54px] font-semibold leading-[56px]"
                >
                  {item.text}
                </h1>
              );

            case "subtitle":
              return (
                <h2
                  key={index}
                  className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px] mt-8 mb-3"
                >
                  {language === "ru" && item.textRu
                    ? item.textRu
                    : language === "pl" && item.textPl
                    ? item.textPl
                    : item.text}
                </h2>
              );

            case "paragraph":
              return (
                <p
                  key={index}
                  className="text-[#4a5568] font-inter text-base leading-[19px] mb-3"
                >
                  {language === "ru" && item.textRu
                    ? item.textRu
                    : language === "pl" && item.textPl
                    ? item.textPl
                    : item.text}
                </p>
              );

            case "list":
              const listItems =
                language === "ru" && item.itemsRu
                  ? item.itemsRu
                  : language === "pl" && item.itemsPl
                  ? item.itemsPl
                  : item.items;
              return (
                <ul key={index} className="space-y-2 ml-4 mb-4">
                  {listItems?.map((listItem: string, listIndex: number) => (
                    <li
                      key={listIndex}
                      className="text-[#4a5568] font-inter text-base leading-[19px] flex items-center"
                    >
                      <span className="text-[#84cc16] mr-3">•</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              );

            case "cases":
              // Filter cases by tags
              const filteredCases = item.tags
                ? casesData.cases.filter((caseItem) =>
                    item.tags?.some((tag: string) =>
                      caseItem.tags.includes(tag)
                    )
                  )
                : [];

              return (
                <div key={index} className="my-8">
                  {item.title && (
                    <h2 className="text-[#2d3748] font-inter text-2xl font-normal leading-[26px] mb-6">
                      {language === "ru" && item.textRu
                        ? item.textRu
                        : language === "pl" && item.textPl
                        ? item.textPl
                        : item.title}
                    </h2>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredCases.map((caseItem) => (
                      <CaseCard
                        key={caseItem.slug}
                        title={caseItem.title}
                        titleRu={caseItem.titleRu}
                        titlePl={caseItem.titlePl}
                        description={caseItem.description}
                        descriptionRu={caseItem.descriptionRu}
                        descriptionPl={caseItem.descriptionPl}
                        date={caseItem.date}
                        tags={caseItem.tags}
                        slug={caseItem.slug}
                      />
                    ))}
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  }

  return null;
}
