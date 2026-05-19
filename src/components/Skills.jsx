"use client";
import React from "react";
import { Code2, Cpu, Globe, Database } from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Node.js / Express",
    icon: <Cpu className="w-6 h-6 text-gray-700" />,
  },
  {
    name: "Supabase / Firebase",
    icon: <Database className="w-6 h-6 text-emerald-600" />,
  },
  {
    name: "MongoDB / SQL",
    icon: <Globe className="w-6 h-6 text-cyan-600" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6"
    >
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        Tech Stack
      </h2>

      {/* Responsive Skill Card Grid */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {skill.icon}

            {/* Tooltip Label */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-gray-800 bg-white border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-sm z-20">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
