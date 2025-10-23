"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Tag from "./Tag";

interface Project {
  title: string;
  slug: string;
  category: string;
  tags?: string[];
}

interface ProjectSliderProps {
  projects: Project[];
}

export default function ProjectSlider({ projects }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Dynamic values based on screen size
  const slidesToShow = isMobile ? 1 : 5;
  const centerIndex = isMobile ? 0 : 2;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0
        ? Math.max(0, projects.length - slidesToShow)
        : prevIndex - 1
    );
  };

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === centerIndex) return; // Already centered, no need to move

    const offset = targetIndex - centerIndex; // How many positions to move
    let newCurrentIndex = currentIndex + offset;

    // Handle wrapping and bounds
    if (newCurrentIndex < 0) {
      newCurrentIndex = 0;
    } else if (newCurrentIndex > projects.length - slidesToShow) {
      newCurrentIndex = Math.max(0, projects.length - slidesToShow);
    }

    setCurrentIndex(newCurrentIndex);
  };

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  // Ensure we always have the right number of projects visible by wrapping around if needed
  if (
    visibleProjects.length < slidesToShow &&
    projects.length >= slidesToShow
  ) {
    const needed = slidesToShow - visibleProjects.length;
    const wrapped = projects.slice(0, needed);
    visibleProjects.push(...wrapped);
  }

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      {!isMobile ? (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 bottom-8 z-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="Previous projects"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 hover:-translate-x-0.5"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="#2d3748"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 bottom-8 z-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="Next projects"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 hover:translate-x-0.5"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="#2d3748"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      ) : null}

      {/* Slider Container */}
      <div
        className={`flex items-center justify-center transition-all duration-500 ease-in-out overflow-x-hidden overflow-y-visible ${
          isMobile ? "px-4" : "px-16"
        }`}
      >
        {visibleProjects.map((project, index) => {
          const isCenter = index === centerIndex; // Center card
          const distanceFromCenter = Math.abs(index - centerIndex);

          // Specific heights based on position - responsive
          const getHeight = () => {
            if (isMobile) {
              // Single card on mobile - fit content
              return "fit-content";
            } else {
              switch (distanceFromCenter) {
                case 0:
                  return "280px"; // Center card
                case 1:
                  return "160px"; // Adjacent to center (2nd and 4th slides)
                case 2:
                  return "102px"; // Far from center (1st and 5th slides)
                default:
                  return "160px"; // Furthest
              }
            }
          };

          // Progressive width based on distance from center - responsive
          const getWidth = () => {
            if (isMobile) {
              // Single card takes most of the screen width
              return "85vw";
            } else {
              switch (distanceFromCenter) {
                case 0:
                  return "40vw"; // Center
                case 1:
                case 2:
                  return "30vw"; // Adjacent
                default:
                  return "20vw"; // Furthest
              }
            }
          };

          const height = getHeight();
          const border = isCenter
            ? "border border-[#84cc16]"
            : "border border-gray-200";

          // Calculate overlap positioning and z-index
          const getZIndex = () => {
            if (isCenter) return 30;
            return 30 - distanceFromCenter * 5;
          };

          const getMarginLeft = () => {
            if (index === 0) return "0";
            // Each card overlaps the previous one - no overlap on mobile since only 1 card
            return isMobile ? "0" : "-8vw";
          };

          const cardContent = (
            <div
              className={`bg-white rounded-lg ${
                isMobile
                  ? "p-4" // Consistent padding for mobile single card
                  : isCenter
                  ? "p-6"
                  : distanceFromCenter === 1
                  ? "p-4"
                  : "p-3"
              } hover:shadow-md transition-all duration-500 ease-in-out cursor-pointer ${border} flex flex-col h-full`}
            >
              {/* Card Content with Opacity */}
              <div className={!isCenter ? "opacity-40" : ""}>
                {/* Title and Tags Container */}
                <div>
                  <h3
                    className={`font-poppins ${
                      isMobile
                        ? "text-[18px]" // Smaller font for mobile
                        : isCenter
                        ? "text-[24px]"
                        : distanceFromCenter === 1
                        ? "text-[20px]"
                        : "text-[16px]"
                    } font-medium ${
                      isCenter ? "text-[#2d3748]" : "text-gray-600"
                    } ${
                      isMobile
                        ? "mb-3" // Consistent mobile spacing
                        : isCenter
                        ? "mb-4"
                        : distanceFromCenter === 1
                        ? "mb-3"
                        : "mb-2"
                    } leading-tight transition-all duration-300`}
                  >
                    {project.title}
                  </h3>
                  {/* Tags - Only for center card */}
                  {isCenter && project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 animate-fadeIn">
                      {project.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} variant="outlined" size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Learn More with Icon - Outside opacity wrapper */}
              {isCenter && (
                <div
                  className={`flex items-center gap-3 text-[#4a5568] font-inter font-medium ${
                    isMobile ? "mt-4" : "mt-6"
                  }`}
                >
                  <div
                    className={`${
                      isMobile ? "w-6 h-6" : "w-8 h-8"
                    } rounded-full bg-[#84cc16] flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
                  >
                    <svg
                      width={isMobile ? "18" : "25"}
                      height={isMobile ? "18" : "25"}
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M10.8008 23.5789C10.0833 23.9931 9.83753 24.9105 10.2517 25.6279C10.666 26.3454 11.5833 26.5912 12.3008 26.177L11.5508 24.8779L10.8008 23.5789ZM29.8977 15.5101C30.1121 14.7099 29.6373 13.8874 28.8371 13.6729L15.7971 10.1789C14.9969 9.96447 14.1744 10.4393 13.96 11.2395C13.7455 12.0397 14.2204 12.8623 15.0206 13.0767L26.6117 16.1825L23.5059 27.7736C23.2915 28.5738 23.7664 29.3963 24.5666 29.6107C25.3668 29.8251 26.1893 29.3503 26.4037 28.5501L29.8977 15.5101ZM11.5508 24.8779L12.3008 26.177L29.1988 16.4209L28.4488 15.1218L27.6988 13.8228L10.8008 23.5789L11.5508 24.8779Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <span
                    className={`transition-all duration-300 ${
                      isMobile ? "text-sm" : ""
                    }`}
                  >
                    Learn more
                  </span>
                </div>
              )}
            </div>
          );

          return isCenter ? (
            <Link
              key={`${project.slug}-${currentIndex}-${index}`}
              href={`/projects/${project.slug}`}
              className="transition-all duration-500 ease-in-out flex-shrink-0 transform relative"
              style={{
                width: getWidth(),
                height: height,
                marginLeft: getMarginLeft(),
                zIndex: getZIndex(),
              }}
            >
              {cardContent}
            </Link>
          ) : (
            <div
              key={`${project.slug}-${currentIndex}-${index}`}
              onClick={() => goToSlide(index)}
              className="transition-all duration-500 ease-in-out flex-shrink-0 transform cursor-pointer relative"
              style={{
                width: getWidth(),
                height: height,
                marginLeft: getMarginLeft(),
                zIndex: getZIndex(),
              }}
            >
              {cardContent}
            </div>
          );
        })}
      </div>

      {/* Mobile Navigation Controls - Below the card */}
      {isMobile && (
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#84cc16] hover:scale-105 transition-all duration-300 ease-in-out shadow-md"
            aria-label="Previous projects"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 hover:-translate-x-0.5"
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="#2d3748"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-[#84cc16] hover:scale-105 transition-all duration-300 ease-in-out shadow-md"
            aria-label="Next projects"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 hover:translate-x-0.5"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="#2d3748"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
