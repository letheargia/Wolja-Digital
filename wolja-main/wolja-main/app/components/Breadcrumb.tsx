"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { t } = useI18n();

  return (
    <nav className="flex items-center gap-3 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#4a5568] font-manrope text-base hover:text-[#84cc16] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#4a5568] font-manrope text-base">
              {item.label}
            </span>
          )}
          {index < items.length - 1 && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className=""
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#4A5568"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
}
