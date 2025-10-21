"use client";

import Link from "next/link";
import { useI18n } from "../lib/i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full border-t border-[rgba(0,0,0,0.15)] pt-8 pb-4">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Mobile Layout - 2 columns for Navigation and Legal, Social below */}
        <div className="block md:hidden">
          {/* Logo Section */}
          <div className="flex flex-col mb-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
                  alt="Wolja Digital Logo"
                  width={40}
                  height={37}
                  className="object-contain"
                />
              </div>
              <span className="text-[#2d3748] font-inter text-base font-medium leading-5">
                {t("footer.logo")}
              </span>
            </Link>
          </div>

          {/* First Row - Navigation and Legal in 2 columns */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Navigation Section */}
            <div className="flex flex-col">
              <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
                {t("footer.sections.navigation.title")}
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.home")}
                </Link>
                <Link
                  href="/services"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.services")}
                </Link>
                <Link
                  href="/about-us"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.about-us")}
                </Link>
                <Link
                  href="/team"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.team")}
                </Link>
                <Link
                  href="/cases"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.cases")}
                </Link>
                <Link
                  href="/blog"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.blog")}
                </Link>
                <Link
                  href="/contact"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.navigation.links.contact")}
                </Link>
              </div>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col">
              <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
                {t("footer.sections.legal.title")}
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/privacy-policy"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.legal.links.privacy")}
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
                >
                  {t("footer.sections.legal.links.terms")}
                </Link>
              </div>
            </div>
          </div>

          {/* Second Row - Social */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
              {t("footer.sections.social.title")}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5777)">
                    <path
                      d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM9.0625 16.9738H6.6325V9.15375H9.0625V16.9738ZM7.8325 8.19375C7.065 8.19375 6.56875 7.65 6.56875 6.9775C6.56875 6.29125 7.08 5.76375 7.86375 5.76375C8.6475 5.76375 9.1275 6.29125 9.1425 6.9775C9.1425 7.65 8.6475 8.19375 7.8325 8.19375ZM17.9375 16.9738H15.5075V12.64C15.5075 11.6313 15.155 10.9462 14.2763 10.9462C13.605 10.9462 13.2063 11.41 13.03 11.8563C12.965 12.015 12.9488 12.24 12.9488 12.4638V16.9725H10.5175V11.6475C10.5175 10.6713 10.4862 9.855 10.4537 9.1525H12.565L12.6763 10.2388H12.725C13.045 9.72875 13.8288 8.97625 15.14 8.97625C16.7388 8.97625 17.9375 10.0475 17.9375 12.35V16.9738Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5777">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.linkedin")}
                </span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5781)">
                    <path
                      d="M11.944 0C8.77112 0.014807 5.73324 1.28562 3.4949 3.53446C1.25656 5.78329 -3.4549e-05 8.82708 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0L11.944 0ZM16.906 7.224C17.006 7.222 17.227 7.247 17.371 7.364C17.4672 7.44672 17.5283 7.5629 17.542 7.689C17.558 7.782 17.578 7.995 17.562 8.161C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.964C14.243 9.902 14.139 9.923 14.064 9.94C13.958 9.96467 12.271 11.0797 9.003 13.285C8.523 13.615 8.089 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.56567 12.32 4.86333 12.099 5.432 11.873C8.93 10.349 11.2627 9.34433 12.43 8.859C15.762 7.473 16.455 7.232 16.906 7.224Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5781">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.telegram")}
                </span>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5785)">
                    <path
                      d="M23.9991 12.0735C23.9991 5.40454 18.6261 -0.00146484 11.9991 -0.00146484C5.36909 3.51563e-05 -0.00390625 5.40454 -0.00390625 12.075C-0.00390625 18.1005 4.38509 23.0955 10.1211 24.0015V15.564H7.07609V12.075H10.1241V9.41253C10.1241 6.38704 11.9166 4.71603 14.6571 4.71603C15.9711 4.71603 17.3436 4.95154 17.3436 4.95154V7.92154H15.8301C14.3406 7.92154 13.8756 8.85303 13.8756 9.80853V12.0735H17.2026L16.6716 15.5625H13.8741V24C19.6101 23.094 23.9991 18.099 23.9991 12.0735Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5785">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.facebook")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original 4 column layout */}
        <div className="hidden md:grid grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex w-10 h-10 flex-col justify-center items-center bg-white">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/23d6c272cb3cb1e77c04201692b480d880054ea2?width=80"
                  alt="Wolja Digital Logo"
                  width={40}
                  height={37}
                  className="object-contain"
                />
              </div>
              <span className="text-[#2d3748] font-inter text-base font-medium leading-5">
                {t("footer.logo")}
              </span>
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
              {t("footer.sections.navigation.title")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.home")}
              </Link>
              <Link
                href="/services"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.services")}
              </Link>
              <Link
                href="/about-us"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.about-us")}
              </Link>
              <Link
                href="/team"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.team")}
              </Link>
              <Link
                href="/cases"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.cases")}
              </Link>
              <Link
                href="/blog"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.blog")}
              </Link>
              <Link
                href="/contact"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.navigation.links.contact")}
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
              {t("footer.sections.legal.title")}
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy-policy"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.legal.links.privacy")}
              </Link>
              <Link
                href="/terms-of-use"
                className="text-[#4a5568] font-inter text-sm leading-5 hover:text-[#84cc16] transition-colors"
              >
                {t("footer.sections.legal.links.terms")}
              </Link>
            </div>
          </div>

          {/* Social Section */}
          <div className="flex flex-col">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-4">
              {t("footer.sections.social.title")}
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/company/wolja-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5777)">
                    <path
                      d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM9.0625 16.9738H6.6325V9.15375H9.0625V16.9738ZM7.8325 8.19375C7.065 8.19375 6.56875 7.65 6.56875 6.9775C6.56875 6.29125 7.08 5.76375 7.86375 5.76375C8.6475 5.76375 9.1275 6.29125 9.1425 6.9775C9.1425 7.65 8.6475 8.19375 7.8325 8.19375ZM17.9375 16.9738H15.5075V12.64C15.5075 11.6313 15.155 10.9462 14.2763 10.9462C13.605 10.9462 13.2063 11.41 13.03 11.8563C12.965 12.015 12.9488 12.24 12.9488 12.4638V16.9725H10.5175V11.6475C10.5175 10.6713 10.4862 9.855 10.4537 9.1525H12.565L12.6763 10.2388H12.725C13.045 9.72875 13.8288 8.97625 15.14 8.97625C16.7388 8.97625 17.9375 10.0475 17.9375 12.35V16.9738Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5777">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.linkedin")}
                </span>
              </a>
              <a
                href="https://t.me/wolja_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <g clipPath="url(#clip0_223_5781)">
                    <path
                      d="M11.944 0C8.77112 0.014807 5.73324 1.28562 3.4949 3.53446C1.25656 5.78329 -3.4549e-05 8.82708 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0L11.944 0ZM16.906 7.224C17.006 7.222 17.227 7.247 17.371 7.364C17.4672 7.44672 17.5283 7.5629 17.542 7.689C17.558 7.782 17.578 7.995 17.562 8.161C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.964C14.243 9.902 14.139 9.923 14.064 9.94C13.958 9.96467 12.271 11.0797 9.003 13.285C8.523 13.615 8.089 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.56567 12.32 4.86333 12.099 5.432 11.873C8.93 10.349 11.2627 9.34433 12.43 8.859C15.762 7.473 16.455 7.232 16.906 7.224Z"
                      fill="#4A5568"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_5781">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  {t("footer.sections.social.links.telegram")}
                </span>
              </a>
              <a
                href="https://wa.me/48662329559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5631 28C17.0856 28 11.002 21.5564 11 13.639C11.002 11.632 12.5455 10 14.4369 10C14.6313 10 14.8237 10.0173 15.0079 10.052C15.4132 10.1235 15.7981 10.2688 16.1522 10.4877C16.2034 10.5202 16.2382 10.5722 16.2464 10.6329L17.0365 15.9061C17.0467 15.9689 17.0283 16.0296 16.9894 16.0751C16.5534 16.5866 15.9966 16.9551 15.3764 17.1393L15.0776 17.2282L15.1901 17.5338C16.2095 20.282 18.2851 22.4775 20.8827 23.5612L21.1713 23.6826L21.2553 23.3662C21.4292 22.7095 21.7772 22.1199 22.2603 21.6583C22.2951 21.6236 22.3422 21.6063 22.3893 21.6063C22.3995 21.6063 22.4098 21.6063 22.422 21.6084L27.4023 22.445C27.4616 22.4559 27.5108 22.4905 27.5415 22.5447C27.7462 22.9197 27.8833 23.3293 27.9529 23.7585C27.9857 23.9492 28 24.1508 28 24.361C28 26.3658 26.4586 27.9978 24.5631 28Z"
                    fill="#4A5568"
                  />
                  <path
                    d="M38.9266 17.3054C38.5134 12.6019 36.3739 8.23855 32.9024 5.02046C29.41 1.78336 24.8792 0 20.1408 0C9.74109 0 1.27953 8.5238 1.27953 19C1.27953 22.516 2.2423 25.9412 4.06508 28.9247L0 37.9894L13.0154 36.5928C15.2787 37.5267 17.6741 38 20.1387 38C20.7869 38 21.4518 37.9662 22.1188 37.8965C22.7061 37.8331 23.2998 37.7401 23.8829 37.6218C32.592 35.849 38.9497 28.0626 39 19.1014V19C39 18.4295 38.9748 17.859 38.9245 17.3054H38.9266ZM13.5167 32.614L6.31578 33.3873L8.46579 28.5887L8.03578 28.0077C8.00431 27.9654 7.97286 27.9232 7.9372 27.8746C6.07037 25.2777 5.08449 22.2096 5.08449 19.0021C5.08449 10.6389 11.8386 3.83508 20.1408 3.83508C27.9186 3.83508 34.5112 9.94795 35.1468 17.7512C35.1803 18.1696 35.1992 18.5901 35.1992 19.0042C35.1992 19.1226 35.1971 19.2388 35.195 19.3634C35.0356 26.3595 30.1839 32.3013 23.3962 33.8142C22.8781 33.9304 22.3474 34.0191 21.8189 34.0762C21.2693 34.1396 20.7051 34.1713 20.145 34.1713C18.1502 34.1713 16.2121 33.7825 14.3809 33.0133C14.1774 32.9309 13.9782 32.8422 13.7915 32.7513L13.5188 32.6182L13.5167 32.614Z"
                    fill="#4A5568"
                  />
                </svg>
                <span className="text-[#4a5568] font-inter text-sm leading-5">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[rgba(0,0,0,0.15)] mt-8 pt-4 text-center">
          <span className="text-[#2d3748] font-inter text-sm leading-5">
            {t("footer.copyright")}
          </span>
        </div>
      </div>
    </footer>
  );
}
