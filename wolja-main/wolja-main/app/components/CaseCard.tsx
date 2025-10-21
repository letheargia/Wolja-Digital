"use client";

import Link from "next/link";
import Tag from "./Tag";
import { useI18n } from "../lib/i18n";

interface CaseCardProps {
  title: string;
  titleRu?: string;
  titlePl?: string;
  description: string;
  descriptionRu?: string;
  descriptionPl?: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function CaseCard({
  title,
  titleRu,
  titlePl,
  description,
  descriptionRu,
  descriptionPl,
  date,
  tags,
  slug,
}: CaseCardProps) {
  const { language } = useI18n();

  const displayTitle =
    language === "ru" && titleRu
      ? titleRu
      : language === "pl" && titlePl
      ? titlePl
      : title;

  const displayDescription =
    language === "ru" && descriptionRu
      ? descriptionRu
      : language === "pl" && descriptionPl
      ? descriptionPl
      : description;

  return (
    <Link href={`/cases/${slug}`} className="group">
      <div className="border border-[#e2e8f0] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#84cc16] h-full">
        <div className="p-6 h-full flex flex-col">
          {/* Date */}
          <div className="text-[#4a5568] font-inter text-sm mb-3">{date}</div>

          {/* Title */}
          <h3 className="text-[#2d3748] font-poppins text-lg font-semibold leading-6 mb-3 group-hover:text-[#84cc16] transition-colors">
            {displayTitle}
          </h3>

          {/* Description */}
          <p className="text-[#4a5568] font-inter text-sm leading-6 mb-4 flex-grow">
            {displayDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <Tag key={index} size="sm">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
