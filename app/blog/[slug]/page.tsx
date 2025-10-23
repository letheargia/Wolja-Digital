"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Tag from "../../components/Tag";
import FloatingSocialButtons from "../../components/FloatingSocialButtons";
import ContentRenderer from "../../components/ContentRenderer";
import { useI18n } from "../../lib/i18n";
import blogData from "../../data/blog.json";

export default function BlogPostPage() {
  const { t } = useI18n();
  const params = useParams();
  const slug = params.slug as string;

  // Find the current post from JSON data
  const currentPost = blogData.posts.find((post) => post.slug === slug);

  const breadcrumbItems = [
    { label: t("breadcrumb.home"), href: "/" },
    { label: t("breadcrumb.blog"), href: "/blog" },
    { label: currentPost?.title || "Post" },
  ];

  // Helper function to generate content from excerpt
  const generateContentFromExcerpt = (excerpt: string, title: string) => {
    const baseContent = excerpt.replace("... read more", "").trim();

    return `${baseContent}

This comprehensive guide provides detailed insights into the legal and regulatory aspects of ${title.toLowerCase()}. Our experienced legal team has compiled essential information to help you navigate complex requirements and ensure full compliance.

Key considerations include regulatory frameworks, compliance requirements, and best practices for implementation. Understanding these elements is crucial for success in today's evolving legal landscape.

Our approach combines deep industry knowledge with practical experience to deliver solutions that meet your specific needs. We work closely with clients to develop strategies that align with their business objectives while maintaining full regulatory compliance.`;
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Blog post not found
            </h1>
            <p className="text-gray-600">
              The requested blog post could not be found.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const content = generateContentFromExcerpt(
    currentPost.excerpt,
    currentPost.title
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb at the very top */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
              {currentPost.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[#4a5568] font-inter text-sm">
              <span>{currentPost.date}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {currentPost.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-16">
          {/* Check if post has rich content, otherwise use fallback */}
          {(currentPost as any).content ? (
            <ContentRenderer content={(currentPost as any).content} />
          ) : (
            <div className="text-[#4a5568] font-inter text-lg leading-relaxed space-y-6">
              {/* Fallback content from JSON */}
              <p className="text-xl leading-relaxed text-[#2d3748] font-medium">
                {currentPost.excerpt.replace("... read more", "")}
              </p>

              <div className="space-y-6">
                {content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>

      <FloatingSocialButtons />

      <Footer />
    </div>
  );
}
