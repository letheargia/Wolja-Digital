"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  position: string;
  photo: string;
  experience: string;
  education: string[];
  practiceAreas: string[];
  linkedProjects: string[];
}

export default function TeamMember({
  name,
  position,
  photo,
  experience,
  education,
  practiceAreas,
  linkedProjects,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-[300px] w-full">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-[#2d3748] font-poppins text-xl font-semibold mb-1">
          {name}
        </h3>
        <p className="text-[#84cc16] font-inter text-sm font-medium mb-4">
          {position}
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-[#2d3748] font-inter text-sm font-semibold mb-2">
              Experience
            </h4>
            <p className="text-[#4a5568] font-inter text-sm">{experience}</p>
          </div>

          <div>
            <h4 className="text-[#2d3748] font-inter text-sm font-semibold mb-2">
              Education
            </h4>
            <ul className="space-y-1">
              {education.map((item, index) => (
                <li
                  key={index}
                  className="text-[#4a5568] font-inter text-sm flex items-center"
                >
                  <span className="text-[#84cc16] mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#2d3748] font-inter text-sm font-semibold mb-2">
              Practice Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {practiceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-[#2d3748] px-2 py-1 rounded-full text-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {linkedProjects.length > 0 && (
            <div>
              <h4 className="text-[#2d3748] font-inter text-sm font-semibold mb-2">
                Featured Projects
              </h4>
              <div className="space-y-1">
                {linkedProjects.map((project, index) => (
                  <span
                    key={index}
                    className="block text-[#84cc16] font-inter text-sm hover:underline cursor-pointer"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
