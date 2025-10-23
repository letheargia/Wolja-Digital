"use client";

import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  variant?: "grid" | "featured";
}

export default function ServiceCard({
  title,
  description,
  image,
  slug,
  variant = "grid",
}: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <Link href={`/services/${slug}`}>
        <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-[250px] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-[#2d3748] font-poppins text-xl font-semibold leading-6 mb-3">
              {title}
            </h3>
            <p className="text-[#4a5568] font-inter text-sm leading-5 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/services/${slug}`}>
      <div className="group cursor-pointer bg-white rounded-lg border border-gray-200 hover:border-[#84cc16] transition-colors duration-300 p-6">
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[#2d3748] font-inter text-lg font-semibold leading-6 mb-2 group-hover:text-[#84cc16] transition-colors">
              {title}
            </h3>
            <p className="text-[#4a5568] font-inter text-sm leading-5 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
