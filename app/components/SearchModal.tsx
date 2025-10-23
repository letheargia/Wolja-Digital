"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useI18n } from "../lib/i18n";
import casesData from "../data/cases.json";

interface SearchResult {
  title: string;
  titleRu?: string;
  excerpt: string;
  excerptRu?: string;
  slug: string;
  tags: string[];
  matchedContent?: string;
  matchedContentRu?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { t, language } = useI18n();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key and click outside
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Search function
  const searchCases = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const lowercaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    casesData.cases.forEach((caseItem: any) => {
      let isMatch = false;
      let matchedContent = "";
      let matchedContentRu = "";

      // Search in title
      if (
        caseItem.title.toLowerCase().includes(lowercaseQuery) ||
        (caseItem.titleRu &&
          caseItem.titleRu.toLowerCase().includes(lowercaseQuery))
      ) {
        isMatch = true;
      }

      // Search in excerpt
      if (
        caseItem.excerpt.toLowerCase().includes(lowercaseQuery) ||
        (caseItem.excerptRu &&
          caseItem.excerptRu.toLowerCase().includes(lowercaseQuery))
      ) {
        isMatch = true;
      }

      // Search in description
      if (
        caseItem.description.toLowerCase().includes(lowercaseQuery) ||
        (caseItem.descriptionRu &&
          caseItem.descriptionRu.toLowerCase().includes(lowercaseQuery))
      ) {
        isMatch = true;
      }

      // Search in tags
      if (
        caseItem.tags.some((tag: string) =>
          tag.toLowerCase().includes(lowercaseQuery)
        )
      ) {
        isMatch = true;
      }

      // Search in content
      if (caseItem.content) {
        caseItem.content.forEach((contentItem: any) => {
          // Search in text content
          if (
            contentItem.text &&
            contentItem.text.toLowerCase().includes(lowercaseQuery)
          ) {
            isMatch = true;
            if (!matchedContent) {
              matchedContent = contentItem.text;
            }
          }
          if (
            contentItem.textRu &&
            contentItem.textRu.toLowerCase().includes(lowercaseQuery)
          ) {
            isMatch = true;
            if (!matchedContentRu) {
              matchedContentRu = contentItem.textRu;
            }
          }

          // Search in list items
          if (contentItem.items) {
            contentItem.items.forEach((item: string) => {
              if (item.toLowerCase().includes(lowercaseQuery)) {
                isMatch = true;
                if (!matchedContent) {
                  matchedContent = item;
                }
              }
            });
          }
          if (contentItem.itemsRu) {
            contentItem.itemsRu.forEach((item: string) => {
              if (item.toLowerCase().includes(lowercaseQuery)) {
                isMatch = true;
                if (!matchedContentRu) {
                  matchedContentRu = item;
                }
              }
            });
          }
        });
      }

      if (isMatch) {
        results.push({
          ...caseItem,
          matchedContent,
          matchedContentRu,
        });
      }
    });

    setSearchResults(results);
    setIsSearching(false);
  };

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchCases(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Highlight matched text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-gray-900">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Truncate text for preview
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-start justify-center pt-20">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
      >
        {/* Search Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("header.search.placeholder")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:border-transparent text-lg"
              />
              {isSearching && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#84cc16]"></div>
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close search"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto max-h-[60vh]">
          {searchQuery.trim() === "" ? (
            <div className="p-8 text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-lg font-medium mb-2">
                {t("header.search.searchTitle")}
              </p>
              <p className="text-sm">{t("header.search.searchDescription")}</p>
            </div>
          ) : searchResults.length === 0 && !isSearching ? (
            <div className="p-8 text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146.832-5.657 2.343"
                />
              </svg>
              <p className="text-lg font-medium mb-2">
                {t("header.search.noResults")}
              </p>
              <p className="text-sm">
                {t("header.search.noResultsDescription")}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {searchResults.map((result) => (
                <Link
                  key={result.slug}
                  href={`/cases/${result.slug}`}
                  onClick={onClose}
                  className="block p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="space-y-3">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[#2d3748] hover:text-[#84cc16] transition-colors">
                      {highlightText(
                        language === "ru" && result.titleRu
                          ? result.titleRu
                          : result.title,
                        searchQuery
                      )}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlightText(
                        truncateText(
                          language === "ru" && result.excerptRu
                            ? result.excerptRu
                            : result.excerpt
                        ),
                        searchQuery
                      )}
                    </p>

                    {/* Matched Content Preview */}
                    {((language === "ru" && result.matchedContentRu) ||
                      (language !== "ru" && result.matchedContent)) && (
                      <div className="bg-gray-50 p-3 rounded-md">
                        <p className="text-xs text-gray-500 mb-1">
                          {t("header.search.foundInContent")}
                        </p>
                        <p className="text-sm text-gray-700">
                          {highlightText(
                            truncateText(
                              language === "ru" && result.matchedContentRu
                                ? result.matchedContentRu
                                : result.matchedContent || ""
                            ),
                            searchQuery
                          )}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {result.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {highlightText(tag, searchQuery)}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {searchResults.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              {language === "ru"
                ? `Найдено ${searchResults.length} ${
                    searchResults.length === 1
                      ? "кейс"
                      : searchResults.length < 5
                      ? "кейса"
                      : "кейсов"
                  }`
                : `Found ${searchResults.length} ${
                    searchResults.length === 1 ? "case" : "cases"
                  }`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
