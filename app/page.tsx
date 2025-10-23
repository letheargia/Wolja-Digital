"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";
import ProjectTile from "./components/ProjectTile";
import BlogCard from "./components/BlogCard";
import ContactForm from "./components/ContactForm";
import InsightCard from "./components/InsightCard";
import ProjectCard from "./components/ProjectCard";
import ProjectSlider from "./components/ProjectSlider";
import LearnMoreButton from "./components/LearnMoreButton";
import ContactSection from "./components/ContactSection";
import { useI18n } from "./lib/i18n";
import blogData from "./data/blog.json";
import servicesData from "./data/services.json";

export default function HomePage() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      console.log("Video element dimensions:", {
        width: video.offsetWidth,
        height: video.offsetHeight,
        readyState: video.readyState,
      });

      const playVideo = async () => {
        try {
          console.log("Playing video...");
          await video.play();
          console.log("Video is playing, current time:", video.currentTime);
        } catch (error) {
          console.error("Video play failed:", error);
        }
      };

      // Simple approach - just try to play when loaded
      video.addEventListener("loadeddata", playVideo);
      video.load();
    }
  }, []);

  // Get services data from JSON
  const services = servicesData.services;

  const featuredProjects = [
    {
      title: t("homepage.featuredProjects.project1.title"),
      description: t("homepage.featuredProjects.project1.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-1.jpg?width=400",
      slug: "georgia-uzbekistan-structuring",
      category: t("homepage.featuredProjects.project1.category"),
      tags: [
        t("homepage.featuredProjects.tags.companyStructuring"),
        t("homepage.featuredProjects.tags.crypto"),
        t("homepage.featuredProjects.tags.cyber"),
        t("homepage.featuredProjects.tags.igaming"),
        t("homepage.featuredProjects.tags.gamedev"),
      ],
    },
    {
      title: t("homepage.featuredProjects.project2.title"),
      description: t("homepage.featuredProjects.project2.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-2.jpg?width=400",
      slug: "stockholm-arbitration-gamedev",
      category: t("homepage.featuredProjects.project2.category"),
      tags: [],
    },
    {
      title: t("homepage.featuredProjects.project3.title"),
      description: t("homepage.featuredProjects.project3.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-3.jpg?width=400",
      slug: "georgia-virtual-zone-fintech",
      category: t("homepage.featuredProjects.project3.category"),
    },
    {
      title: t("homepage.featuredProjects.project4.title"),
      description: t("homepage.featuredProjects.project4.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-4.jpg?width=400",
      slug: "vilnius-arbitration-fintech",
      category: t("homepage.featuredProjects.project4.category"),
    },
    {
      title: t("homepage.featuredProjects.project5.title"),
      description: t("homepage.featuredProjects.project5.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-5.jpg?width=400",
      slug: "hungarian-entrepreneur-residency",
      category: t("homepage.featuredProjects.project5.category"),
    },
    {
      title: t("homepage.featuredProjects.project6.title"),
      description: t("homepage.featuredProjects.project6.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-6.jpg?width=400",
      slug: "gamedev-studio-relocation",
      category: t("homepage.featuredProjects.project6.category"),
      tags: [
        t("homepage.featuredProjects.tags.companyStructuring"),
        t("homepage.featuredProjects.tags.crypto"),
        t("homepage.featuredProjects.tags.cyber"),
        t("homepage.featuredProjects.tags.igaming"),
        t("homepage.featuredProjects.tags.gamedev"),
      ],
    },
    {
      title: t("homepage.featuredProjects.project7.title"),
      description: t("homepage.featuredProjects.project7.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-7.jpg?width=400",
      slug: "french-residency-digital",
      category: t("homepage.featuredProjects.project7.category"),
    },
    {
      title: t("homepage.featuredProjects.project8.title"),
      description: t("homepage.featuredProjects.project8.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/project-8.jpg?width=400",
      slug: "igaming-ip-portfolio",
      category: t("homepage.featuredProjects.project8.category"),
    },
  ];

  // Get latest insights from blog data (first 3 posts)
  const latestInsights = blogData.posts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          className="absolute inset-0 object-cover"
          style={{
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/WoljaDigital.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div
          className="relative text-center text-white px-4 md:px-6"
          style={{ zIndex: 3 }}
        >
          <h1 className="font-poppins text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-4 md:px-16 leading-tight">
            {t("homepage.hero.title")} <br />
            {t("homepage.hero.subtitle")}
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="">
        <div className="w-full">
          {/* First Row - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.slice(0, 4).map((service, index) => {
              const isLeftCard = index % 2 === 0;

              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[154px] md:h-[400px] service-card-overlay">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-8 left-4 md:${
                        isLeftCard ? "left-4" : "right-4"
                      } text-white w-[calc(100%-2rem)] md:w-[280px] z-10`}
                    >
                      <h3 className="font-poppins text-2xl md:text-[54px] md:leading-[56px] font-bold mb-4">
                        {t(service.titleKey)}
                      </h3>
                      <LearnMoreButton />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Second Row - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.slice(4, 6).map((service, index) => {
              const isLeftCard = index % 2 === 0;
              return (
                <Link
                  key={index + 4}
                  href={`/services/${service.slug}`}
                  className="relative bg-white overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-[154px] md:h-[400px] service-card-overlay">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-8 left-8 md:${
                        isLeftCard ? "left-8" : "right-8"
                      } text-white w-[calc(100%-4rem)] md:w-[35%] z-10`}
                    >
                      <h3 className="font-poppins text-2xl md:text-[54px] md:leading-[56px] font-bold mb-4">
                        {t(service.titleKey)}
                      </h3>
                      <LearnMoreButton />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Third Row - 1 Big Image */}
          {services[6] && (
            <Link
              href={`/services/${services[6].slug}`}
              className="relative bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-[154px] md:h-[400px] service-card-overlay">
                <img
                  src={services[6].image}
                  alt={t(services[6].titleKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-8 left-8 text-white w-[calc(100%-4rem)] md:w-[400px] z-10">
                  <h3 className="font-poppins text-2xl md:text-[54px] md:leading-[56px] font-bold mb-4">
                    {t(services[6].titleKey)}
                  </h3>
                  <LearnMoreButton />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-[#2d3748]">
              {t("homepage.sections.insights.title")}
            </h2>
            <a
              href="/blog"
              className="text-[#84cc16] font-inter font-medium hover:underline"
            >
              {t("homepage.sections.insights.viewAll")}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestInsights.map((post, index) => (
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
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-2">
        <div>
          <div className="flex justify-between items-center mb-16 max-w-7xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-[#2d3748]">
              {t("homepage.sections.projects.title")}
            </h2>
            <a
              href="/cases"
              className="text-[#84cc16] font-inter font-medium hover:underline"
            >
              {t("homepage.sections.projects.viewAll")}
            </a>
          </div>

          <ProjectSlider projects={featuredProjects} />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
