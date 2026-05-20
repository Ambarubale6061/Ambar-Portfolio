"use client";
import React from "react";
import { BadgeCheck, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "JaruratCare Foundation",
    dates: "Nov 2025 - Mar 2026",
    location: "Remote",
    thumbnail: "/jaru.png",
    certificateUrl: "/Certi.pdf",
    descBullets: [
      "Built a full-stack Nurse Management System using MERN stack (React, Node.js, Express, MongoDB) and Firebase, enabling efficient staff management, data handling, and real-time updates.",

      "Developed and enhanced a WhatsApp bot system using Java and Spring Boot, implementing new features, optimizing workflows, and improving automated user interactions.",

      "Designed and contributed to multiple solo and team-based projects, collaborating with developers to deliver scalable and production-ready solutions.",

      "Developed and maintained the organization's main website, improving UI/UX, performance, and overall user engagement.",

      "Gained hands-on experience in full-stack development, API integration, and real-world problem solving, delivering high-quality features in a collaborative environment.",
    ],
    techStack: [
      { id: 1, name: "React", img: "/React.png" },
      { id: 2, name: "Node.js", img: "/Node.js.png" },
      { id: 3, name: "MongoDB", img: "/MongoDB.png" },
      { id: 4, name: "Tailwind", img: "/Tailwind CSS.png" },
      { id: 5, name: "Firebase", img: "/Firebase.png" },
      { id: 6, name: "Java", img: "/Java.png" },
      { id: 7, name: "Spring Boot", img: "/Spring.png" },
      { id: 8, name: "Express", img: "/ex.png" },
      { id: 9, name: "JavaScript", img: "/JavaScript.png" },
      { id: 14, name: "Supabase", img: "/icons8-supabase-48.png" },
      { id: 16, name: "Next.js", img: "/next.svg" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 px-6 bg-[#faf9f7]">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono tracking-widest text-cyan-500 uppercase mb-3">
          Career Journey
        </h2>
        {/* Accent Line */}
        <div className="w-16 h-[2px] bg-cyan-500 mx-auto mb-4 rounded-full"></div>

        <h3 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
          <span className="text-black">My</span>{" "}
          <span className="text-cyan-500">Experience</span>
        </h3>
      </div>

      {/* Experience Cards Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="group relative w-full rounded-2xl bg-[#efefed] border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-100"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Header: Logo & Info */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                  <img
                    src={exp.thumbnail}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-blue-600">
                    {exp.company}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mt-1.5">
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.dates}</span>
                  </div>
                </div>
              </div>

              {/* Verify Button */}
              {exp.certificateUrl !== "#" && (
                <button
                  onClick={() => window.open(exp.certificateUrl, "_blank")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-xs font-bold hover:bg-blue-600 transition-all duration-300"
                >
                  <BadgeCheck className="w-3.5 h-3.5" />
                  VERIFY
                  <ExternalLink className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Bullets */}
            <ul className="mt-8 space-y-3">
              {exp.descBullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                >
                  <span className="text-blue-500 mt-1">✦</span>
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Tech Stack Circles */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
              {exp.techStack.map((tech) => (
                <div key={tech.id} className="relative group/tech">
                  <div className="w-10 h-10 rounded-full bg-[#e2e1df] border border-[#cccac7] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
