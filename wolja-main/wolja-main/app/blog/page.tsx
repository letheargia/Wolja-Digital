"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsightCard from "../components/InsightCard";
import Breadcrumb from "../components/Breadcrumb";
import FloatingSocialButtons from "../components/FloatingSocialButtons";
import { useI18n } from "../lib/i18n";
import blogData from "../data/blog.json";

export default function BlogPage() {
  const { t } = useI18n();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.blog") },
  ];

  // Get blog posts from JSON data
  const blogPosts = blogData.posts;

  // Pagination logic
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title - Hidden on mobile */}
        <h1 className="font-poppins text-4xl font-bold text-[#2d3748] mb-12 hidden lg:block">
          Blog
        </h1>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post, index) => (
            <InsightCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              tags={post.tags}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          {/* Left arrow for mobile */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded font-inter text-sm flex items-center space-x-1 ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#4a5568] hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </button>
          </div>

          {/* Centered pagination numbers */}
          <div className="flex items-center justify-center space-x-2">
            {(() => {
              const pages = [];
              const maxVisiblePages = 5;

              if (totalPages <= maxVisiblePages) {
                // Show all pages if total is small
                for (let i = 1; i <= totalPages; i++) {
                  pages.push(
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`px-3 py-1 rounded font-inter text-sm ${
                        currentPage === i
                          ? "bg-[#84cc16] text-white"
                          : "text-[#4a5568] hover:bg-gray-100"
                      }`}
                    >
                      {i}
                    </button>
                  );
                }
              } else {
                // Always show first page
                pages.push(
                  <button
                    key={1}
                    onClick={() => setCurrentPage(1)}
                    className={`px-3 py-1 rounded font-inter text-sm ${
                      currentPage === 1
                        ? "bg-[#84cc16] text-white"
                        : "text-[#4a5568] hover:bg-gray-100"
                    }`}
                  >
                    1
                  </button>
                );

                if (currentPage > 3) {
                  pages.push(
                    <span key="ellipsis1" className="px-2 text-[#4a5568]">
                      ...
                    </span>
                  );
                }

                // Show pages around current page
                const start = Math.max(2, currentPage - 1);
                const end = Math.min(totalPages - 1, currentPage + 1);

                for (let i = start; i <= end; i++) {
                  if (i !== 1 && i !== totalPages) {
                    pages.push(
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`px-3 py-1 rounded font-inter text-sm ${
                          currentPage === i
                            ? "bg-[#84cc16] text-white"
                            : "text-[#4a5568] hover:bg-gray-100"
                        }`}
                      >
                        {i}
                      </button>
                    );
                  }
                }

                if (currentPage < totalPages - 2) {
                  pages.push(
                    <span key="ellipsis2" className="px-2 text-[#4a5568]">
                      ...
                    </span>
                  );
                }

                // Always show last page
                if (totalPages > 1) {
                  pages.push(
                    <button
                      key={totalPages}
                      onClick={() => setCurrentPage(totalPages)}
                      className={`px-3 py-1 rounded font-inter text-sm ${
                        currentPage === totalPages
                          ? "bg-[#84cc16] text-white"
                          : "text-[#4a5568] hover:bg-gray-100"
                      }`}
                    >
                      {totalPages}
                    </button>
                  );
                }
              }

              return pages;
            })()}
          </div>

          {/* Right side with arrow and dropdown */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-4">
              {/* Right arrow for mobile */}
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded font-inter text-sm flex items-center space-x-1 ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-[#4a5568] hover:bg-gray-100"
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dropdown for posts per page */}
              <div className="hidden sm:flex items-center space-x-2">
                <span className="text-[#4a5568] font-inter text-sm">Show:</span>
                <select
                  value={postsPerPage}
                  onChange={(e) => {
                    setPostsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-3 py-1 text-sm font-inter bg-white"
                >
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>12</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingSocialButtons />
      <Footer />
    </div>
  );
}
