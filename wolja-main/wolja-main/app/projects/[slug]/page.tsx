"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import Breadcrumb from "../../components/Breadcrumb";
import TeamMember from "../../components/TeamMember";
import ServiceCard from "../../components/ServiceCard";
import { useI18n } from "../../lib/i18n";

export default function ProjectPage() {
  const { t } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  // Sample data - in a real app, this would come from a CMS or API based on slug
  const projectData = {
    "fintech-startup-structure": {
      title: t("projects.fintech.title"),
      overview: t("projects.fintech.overview"),
      challenge: t("projects.fintech.challenge"),
      solution: t("projects.fintech.solution"),
      results: t("projects.fintech.results"),
      heroImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/fintech-project.jpg?width=3840",
      category: t("projects.categories.fintech"),
      duration: t("projects.fintech.duration"),
      location: t("projects.fintech.location"),
      teamMembers: [
        {
          name: "John Smith",
          position: "Senior Partner",
          photo:
            "https://api.builder.io/api/v1/image/assets/TEMP/team-member-1.jpg",
          experience: "15+ years in corporate law",
          education: ["Harvard Law School", "MBA Finance"],
          practiceAreas: ["Corporate Law", "M&A", "Securities"],
          linkedProjects: ["FinTech Expansion", "SaaS Global Structure"],
        },
        {
          name: "Maria Garcia",
          position: "Tax Advisor",
          photo:
            "https://api.builder.io/api/v1/image/assets/TEMP/team-member-2.jpg",
          experience: "12+ years in international tax",
          education: ["Stanford Law", "CPA"],
          practiceAreas: ["Tax Planning", "International Tax", "Compliance"],
          linkedProjects: ["Tax Optimization", "Corporate Restructuring"],
        },
      ],
    },
    "ecommerce-expansion": {
      title: t("projects.ecommerce.title"),
      overview: t("projects.ecommerce.overview"),
      challenge: t("projects.ecommerce.challenge"),
      solution: t("projects.ecommerce.solution"),
      results: t("projects.ecommerce.results"),
      heroImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/ecommerce-project.jpg?width=3840",
      category: t("projects.categories.ecommerce"),
      duration: t("projects.ecommerce.duration"),
      location: t("projects.ecommerce.location"),
      teamMembers: [
        {
          name: "David Chen",
          position: "Corporate Lawyer",
          photo:
            "https://api.builder.io/api/v1/image/assets/TEMP/team-member-3.jpg",
          experience: "10+ years in commercial law",
          education: ["Yale Law School", "Business Administration"],
          practiceAreas: ["E-commerce Law", "Data Protection", "Commercial"],
          linkedProjects: ["E-commerce Expansion", "Data Compliance"],
        },
      ],
    },
    // Add more projects as needed
  };

  const currentProject = projectData[slug as keyof typeof projectData];

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.projects"), href: "/projects" },
    { label: currentProject?.title || "Project" },
  ];

  // Sample related services
  const relatedServices = [
    {
      title: t("services.corporate.title"),
      description: t("services.corporate.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bfefd954787690e3c77dee02f1a22fea654b8ad7?width=400",
      slug: "corporate-structuring",
    },
    {
      title: t("services.legal.title"),
      description: t("services.legal.description"),
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/legal-consulting.jpg?width=400",
      slug: "legal-consulting",
    },
  ];

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Image */}
      <div className="w-full h-[60vh] relative">
        <Image
          src={currentProject.heroImage}
          alt={currentProject.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 text-white">
            <span className="bg-[#84cc16] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {currentProject.category}
            </span>
            <h1 className="font-poppins text-5xl md:text-6xl font-bold">
              {currentProject.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#2d3748] mb-2 uppercase tracking-wide">
              {t("project.details.duration")}
            </h3>
            <p className="text-[#4a5568] font-inter text-base">
              {currentProject.duration}
            </p>
          </div>
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#2d3748] mb-2 uppercase tracking-wide">
              {t("project.details.location")}
            </h3>
            <p className="text-[#4a5568] font-inter text-base">
              {currentProject.location}
            </p>
          </div>
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#2d3748] mb-2 uppercase tracking-wide">
              {t("project.details.category")}
            </h3>
            <p className="text-[#4a5568] font-inter text-base">
              {currentProject.category}
            </p>
          </div>
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#2d3748] mb-2 uppercase tracking-wide">
              {t("project.details.team")}
            </h3>
            <p className="text-[#4a5568] font-inter text-base">
              {currentProject.teamMembers.length} {t("project.details.members")}
            </p>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
            {t("project.sections.overview")}
          </h2>
          <p className="text-[#4a5568] font-inter text-lg leading-relaxed">
            {currentProject.overview}
          </p>
        </section>

        {/* Challenge */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
            {t("project.sections.challenge")}
          </h2>
          <p className="text-[#4a5568] font-inter text-lg leading-relaxed">
            {currentProject.challenge}
          </p>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
            {t("project.sections.solution")}
          </h2>
          <p className="text-[#4a5568] font-inter text-lg leading-relaxed">
            {currentProject.solution}
          </p>
        </section>

        {/* Results */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-6">
            {t("project.sections.results")}
          </h2>
          <p className="text-[#4a5568] font-inter text-lg leading-relaxed">
            {currentProject.results}
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-8">
            {t("project.sections.team")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProject.teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                photo={member.photo}
                experience={member.experience}
                education={member.education}
                practiceAreas={member.practiceAreas}
                linkedProjects={member.linkedProjects}
              />
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16">
          <h2 className="font-poppins text-3xl font-bold text-[#2d3748] mb-8">
            {t("project.sections.relatedServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
                variant="grid"
              />
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <ContactForm
            title={t("project.contact.title")}
            subtitle={t("project.contact.subtitle")}
          />
        </div>
      </div>

      {/* Floating Social Media Buttons */}
      <div className="fixed right-[90px] top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {/* WhatsApp */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00E510] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path
              d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z"
              fill="#00E510"
            />
            <path
              d="M35.5631 39C28.0856 39 22.002 32.5564 22 24.639C22.002 22.632 23.5455 21 25.4369 21C25.6313 21 25.8237 21.0173 26.0079 21.052C26.4132 21.1235 26.7981 21.2688 27.1522 21.4877C27.2034 21.5202 27.2382 21.5722 27.2464 21.6329L28.0365 26.9061C28.0467 26.9689 28.0283 27.0296 27.9894 27.0751C27.5534 27.5866 26.9966 27.9551 26.3764 28.1393L26.0776 28.2282L26.1901 28.5338C27.2095 31.282 29.2851 33.4775 31.8827 34.5612L32.1713 34.6826L32.2553 34.3662C32.4292 33.7095 32.7772 33.1199 33.2603 32.6583C33.2951 32.6236 33.3422 32.6063 33.3893 32.6063C33.3995 32.6063 33.4098 32.6063 33.422 32.6084L38.4023 33.445C38.4616 33.4559 38.5108 33.4905 38.5415 33.5447C38.7462 33.9197 38.8833 34.3293 38.9529 34.7585C38.9857 34.9492 39 35.1508 39 35.361C39 37.3658 37.4586 38.9978 35.5631 39Z"
              fill="#FDFDFD"
            />
          </svg>
        </div>

        {/* Telegram */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#00B0F2] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
            <path
              d="M30.0683 0H29.9317C13.4009 0 0 13.4009 0 29.9317V30.0683C0 46.5991 13.4009 60 29.9317 60H30.0683C46.5991 60 60 46.5991 60 30.0683V29.9317C60 13.4009 46.5991 0 30.0683 0Z"
              fill="#00B0F2"
            />
            <path
              d="M10.9721 28.6753C11.057 28.6337 11.1421 28.5941 11.2249 28.5567C12.6651 27.9032 14.1245 27.2913 15.5817 26.6794C15.6603 26.6794 15.792 26.5899 15.8663 26.5608C15.9789 26.5129 16.0915 26.4671 16.2041 26.4192L16.852 26.1466C17.2854 25.9655 17.7166 25.7845 18.1499 25.6034C19.0145 25.2413 19.879 24.8791 20.7436 24.5149C22.4727 23.7906 24.204 23.0643 25.9332 22.34C27.6623 21.6157 29.3935 20.8894 31.1227 20.1651C32.8518 19.4408 34.5831 18.7145 36.3122 17.9902C38.0413 17.2659 39.7726 16.5396 41.5018 15.8153C41.8863 15.653 42.3026 15.4116 42.7147 15.3408C43.061 15.2804 43.3987 15.1639 43.7471 15.0994C44.4077 14.9766 45.1363 14.9266 45.7693 15.1951C45.9881 15.2888 46.1899 15.4199 46.3578 15.5843C47.1607 16.3627 47.0481 17.6406 46.8782 18.7353C45.695 26.3651 44.5118 33.9971 43.3265 41.6269C43.165 42.6738 42.9441 43.8226 42.1008 44.4844C41.387 45.0443 40.3716 45.1067 39.4901 44.8695C38.6085 44.6301 37.831 44.1285 37.0684 43.6353C33.9054 41.5832 30.7403 39.5311 27.5773 37.479C26.8253 36.992 25.9884 36.3551 25.9969 35.4706C26.0012 34.9378 26.3261 34.4633 26.6575 34.0408C29.4063 30.5276 33.3723 28.1134 36.3228 24.7626C36.7392 24.2901 37.0663 23.4368 36.4949 23.1642C36.155 23.0018 35.7641 23.2225 35.454 23.4327C31.5539 26.0863 27.6559 28.7419 23.7558 31.3955C22.4834 32.2613 21.1494 33.1521 19.6157 33.3644C18.2434 33.5558 16.8627 33.1812 15.535 32.7983C14.4219 32.4777 13.3109 32.1489 12.2041 31.8097C11.6157 31.6307 11.0082 31.4371 10.5536 31.0313C10.099 30.6254 9.83777 29.9428 10.1118 29.4017C10.2839 29.0624 10.6174 28.8481 10.9679 28.6732L10.9721 28.6753Z"
              fill="#FEFFFC"
            />
          </svg>
        </div>

        {/* Support Button */}
        <div className="w-[60px] h-[60px] rounded-full bg-[#84cc16] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M8.75 8.75L21.25 21.25M8.75 21.25L21.25 8.75"
              stroke="white"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
}
