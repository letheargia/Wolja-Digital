"use client";

import Link from "next/link";
import Tag from "./Tag";

interface InsightCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  tags: string[];
}

export default function InsightCard({
  title,
  excerpt,
  slug,
  date,
  tags,
}: InsightCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer h-full flex flex-col">
        {/* Title */}
        <h3 className="font-poppins text-lg font-semibold text-[#2d3748] mb-3 leading-tight">
          {title}
        </h3>

        {/* Date */}
        <p className="text-gray-500 text-sm mb-4 font-inter">{date}</p>

        {/* Excerpt */}
        <p className="text-[#4a5568] text-sm mb-6 leading-relaxed flex-grow font-inter">
          {excerpt.includes("read more") ? (
            <>
              {excerpt.split("... read more")[0]}...{" "}
              <span className="text-[#65a30d] font-medium">read more</span>
            </>
          ) : (
            excerpt
          )}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
