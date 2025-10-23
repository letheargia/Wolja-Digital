"use client";

import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  variant?: "featured" | "list";
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  category,
  readTime,
  variant = "list",
}: BlogCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/blog/${slug}`}>
        <article className="group cursor-pointer bg-white rounded-lg border border-gray-200 hover:border-[#84cc16] transition-colors duration-300 p-6">
          <div className="flex items-start justify-between mb-3">
            <span className="text-[#84cc16] font-inter text-xs font-medium uppercase tracking-wide">
              {category}
            </span>
            <time className="text-[#4a5568] font-inter text-xs">{date}</time>
          </div>
          <h3 className="text-[#2d3748] font-poppins text-lg font-semibold leading-6 mb-3 group-hover:text-[#84cc16] transition-colors">
            {title}
          </h3>
          <p className="text-[#4a5568] font-inter text-sm leading-5 line-clamp-3 mb-4">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#4a5568] font-inter text-xs">
              {readTime} read
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group cursor-pointer border-b border-gray-200 py-6 hover:bg-gray-50 transition-colors duration-300">
        <div className="flex items-start justify-between mb-3">
          <span className="text-[#84cc16] font-inter text-xs font-medium uppercase tracking-wide">
            {category}
          </span>
          <time className="text-[#4a5568] font-inter text-xs">{date}</time>
        </div>
        <h2 className="text-[#2d3748] font-poppins text-xl font-semibold leading-6 mb-3 group-hover:text-[#84cc16] transition-colors">
          {title}
        </h2>
        <p className="text-[#4a5568] font-inter text-base leading-6 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#4a5568] font-inter text-sm">
            {readTime} read
          </span>
          <span className="text-[#84cc16] font-inter text-sm font-medium group-hover:underline">
            Read more →
          </span>
        </div>
      </article>
    </Link>
  );
}
