"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useI18n } from "./lib/i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6 lg:px-20 py-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="order-2 lg:order-1">
              <h1 className="font-inter text-5xl md:text-6xl font-bold text-[#2d3748] mb-4">
                {t("404.title")}
              </h1>

              <h2 className="font-inter text-2xl md:text-3xl font-normal text-[#2d3748] mb-6">
                {t("404.subtitle")}
              </h2>

              <p className="font-inter text-base text-[#4a5568] mb-2">
                {t("404.description1")}
              </p>

              <p className="font-inter text-base text-[#4a5568] mb-8">
                {t("404.description2")}
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#84cc16] text-white px-6 py-3 rounded-lg font-inter font-medium hover:bg-[#65a30d] transition-colors duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transform rotate-180"
                >
                  <path
                    d="M8.5 3L13.5 8L8.5 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 8H2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t("404.goHome")}
              </Link>
            </div>

            {/* Right side - 404 Illustration */}
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="/404.svg"
                alt="404 Error Illustration"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
