"use client";
import React from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "JaruratCare Foundation",
    duration: "2025 - 2026",
    description:
      "Developed and optimized Nurse Management Systems and integrated automated communication structures.",
  },
  {
    role: "Software Engineering Intern",
    company: "Codec Technologies",
    duration: "2025",
    description:
      "Assisted in building scalable backend services and responsive client-side web components.",
  },
];

export default function Experience() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6">
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        Experience
      </h2>

      {/* Timeline Wrapper Grid */}
      <div className="space-y-8 relative border-l border-gray-100 pl-5 ml-2 sm:ml-0">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="space-y-1 relative group text-center sm:text-left"
          >
            {/* Timeline Dot Alignment */}
            <div className="absolute -left-[27px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-400 group-hover:border-blue-600 transition-colors" />

            {/* Header Content Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-1 sm:gap-4 text-sm">
              <h3 className="font-semibold text-gray-900 text-base">
                {exp.role}
              </h3>
              <span className="text-gray-400 font-medium text-xs sm:text-sm">
                {exp.duration}
              </span>
            </div>

            {/* Company Link Sub-title */}
            <h4 className="text-sm font-medium text-blue-600">{exp.company}</h4>

            {/* Technical Brief Text */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto sm:mx-0 pt-1">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
