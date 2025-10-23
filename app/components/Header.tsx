"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useI18n } from "../lib/i18n";
import SearchModal from "./SearchModal";

export default function Header() {
  const { t, language, setLanguage } = useI18n();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
    { code: "pl", label: "Polski", flag: "🇵🇱" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const selectLanguage = (langCode: string) => {
    // Only switch to supported languages, fallback to English for unsupported ones
    if (langCode === "en" || langCode === "ru" || langCode === "pl") {
      setLanguage(langCode as "en" | "ru" | "pl");
    } else {
      setLanguage("en"); // Fallback to English for other languages
    }
    setIsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  // Get current page title based on pathname
  const getPageTitle = () => {
    if (pathname === "/") return t("header.nav.home");
    if (pathname.startsWith("/services")) return t("header.nav.services");
    if (pathname === "/about-us") return t("header.nav.about-us");
    if (pathname === "/team") return t("header.nav.team");
    if (pathname.startsWith("/cases")) return t("header.nav.cases");
    if (pathname.startsWith("/blog")) return t("header.nav.blog");
    if (pathname === "/contact") return t("header.nav.contact");
    return t("header.nav.home"); // fallback
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 flex justify-between items-center w-full px-4 md:px-4 lg:px-[60px] py-[18px] bg-white z-50 shadow-sm">
      {/* Left Section: Logo (Desktop) / Mobile Menu Button (Mobile) */}
      <div className="flex items-center">
        {/* Logo - Hidden on mobile */}
        <Link href="/" className="hidden lg:flex items-center gap-[10px]">
          <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
              alt="Wolja Digital Logo"
              width={40}
              height={37}
              className="object-contain"
            />
          </div>
          <span className="text-[#2d3748] font-inter text-base font-normal leading-[19px]">
            {t("header.logo")}
          </span>
        </Link>

        {/* Mobile Menu Button - Positioned on the left */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 mr-4"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#2d3748] transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#2d3748] transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#2d3748] transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Center Section: Mobile Page Title / Desktop Navigation Menu */}
      <div className="flex items-center justify-center flex-1">
        {/* Mobile Page Title - Only visible on mobile, centered on entire page */}
        <h1 className="lg:hidden text-[#2d3748] font-poppins text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          {getPageTitle()}
        </h1>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex justify-center items-center gap-10">
          <Link
            href="/"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname === "/" ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.home")}
            </span>
          </Link>
          <Link
            href="/services"
            className={`flex py-1 items-center gap-1 hover:text-[#84cc16] transition-colors ${
              pathname.startsWith("/services")
                ? "border-b-2 border-[#84CC16]"
                : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.services")}
            </span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M17.1004 7.45837L11.6671 12.8917C11.0254 13.5334 9.97539 13.5334 9.33372 12.8917L3.90039 7.45837"
                stroke="#2D3748"
                strokeWidth="0.833333"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/about-us"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname === "/about-us" ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.about-us")}
            </span>
          </Link>
          <Link
            href="/team"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname === "/team" ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.team")}
            </span>
          </Link>
          <Link
            href="/cases"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname.startsWith("/cases") ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.cases")}
            </span>
          </Link>
          <Link
            href="/blog"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname.startsWith("/blog") ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.blog")}
            </span>
          </Link>
          <Link
            href="/contact"
            className={`flex py-1 items-center gap-3 hover:text-[#84cc16] transition-colors ${
              pathname === "/contact" ? "border-b-2 border-[#84CC16]" : ""
            }`}
          >
            <span className="text-[#2d3748] text-sm font-normal leading-5">
              {t("header.nav.contact")}
            </span>
          </Link>
        </nav>
      </div>

      {/* Right Section: Mobile Search / Desktop Search and Language */}
      <div className="flex items-center gap-6">
        {/* Mobile Search Button - Only visible on mobile */}
        <button
          onClick={openSearchModal}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Search cases"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#2D3748"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22L20 20"
              stroke="#2D3748"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Desktop Search and Language - Only visible on desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={openSearchModal}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Search cases"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#2D3748"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#2D3748"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              onClick={toggleDropdown}
            >
              <span className="text-[#2d3748] text-sm font-normal leading-5">
                {currentLanguage.label}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M16.6004 7.45837L11.1671 12.8917C10.5254 13.5334 9.47539 13.5334 8.83372 12.8917L3.40039 7.45837"
                  stroke="#2D3748"
                  strokeWidth="0.833333"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      language === lang.code
                        ? "bg-lime-50 text-[#84cc16]"
                        : "text-[#2d3748]"
                    }`}
                  >
                    <span className="text-sm font-normal">{lang.label}</span>
                    {language === lang.code && (
                      <svg
                        className="ml-auto w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
        >
          <nav className="flex flex-col py-4">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname === "/"
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.home")}
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname.startsWith("/services")
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.services")}
            </Link>
            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname === "/about-us"
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.about-us")}
            </Link>
            <Link
              href="/team"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname === "/team"
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.team")}
            </Link>
            <Link
              href="/cases"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname.startsWith("/cases")
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.cases")}
            </Link>
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname.startsWith("/blog")
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.blog")}
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`px-4 py-3 text-[#2d3748] hover:bg-gray-50 hover:text-[#84cc16] transition-colors ${
                pathname === "/contact"
                  ? "bg-lime-50 text-[#84cc16] border-r-2 border-[#84cc16]"
                  : ""
              }`}
            >
              {t("header.nav.contact")}
            </Link>

            {/* Mobile Search Button */}
            <div className="border-t border-gray-200 mt-4 pt-4 px-4">
              <button
                onClick={() => {
                  openSearchModal();
                  closeMobileMenu();
                }}
                className="w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-gray-50 transition-colors rounded-md"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="#2D3748"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="#2D3748"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-normal text-[#2d3748]">
                  {t("header.search.searchTitle")}
                </span>
              </button>
            </div>

            {/* Mobile Language Selector */}
            <div className="border-t border-gray-200 mt-4 pt-4 px-4">
              <h3 className="text-sm font-medium text-[#2d3748] mb-2">
                Language
              </h3>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      selectLanguage(lang.code);
                      closeMobileMenu();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-md transition-colors ${
                      language === lang.code
                        ? "bg-lime-50 text-[#84cc16]"
                        : "text-[#2d3748] hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm font-normal">{lang.label}</span>
                    {language === lang.code && (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </header>
  );
}
