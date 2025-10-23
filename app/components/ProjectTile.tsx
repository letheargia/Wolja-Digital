"use client";

import Link from "next/link";
import Image from "next/image";

interface ProjectTileProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  category: string;
  variant?: "featured" | "related";
}

export default function ProjectTile({
  title,
  description,
  image,
  slug,
  category,
  variant = "featured",
}: ProjectTileProps) {
  if (variant === "related") {
    return (
      <Link href={`/projects/${slug}`}>
        <div className="group cursor-pointer bg-white rounded-lg border border-gray-200 hover:border-[#84cc16] transition-colors duration-300">
          <div className="relative h-[180px] w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <span className="text-[#84cc16] font-inter text-xs font-medium uppercase tracking-wide">
              {category}
            </span>
            <h4 className="text-[#2d3748] font-inter text-base font-semibold leading-5 mt-1 mb-2">
              {title}
            </h4>
            <p className="text-[#4a5568] font-inter text-sm leading-4 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/projects/${slug}`}>
      <div className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-[300px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#84cc16] text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
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
