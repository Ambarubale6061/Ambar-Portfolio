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
    <section
      id="experience"
      className="w-full py-20 bg-[#000000] relative overflow-hidden scroll-mt-20"
    >
      {/* Modern Stylish Background Matched From about.jsx */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Decorative Blurs */}
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <p className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-white">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              }}
            >
              Experience
            </span>
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Hands-on experience building real-world products in collaborative
            environments.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative w-full rounded-2xl bg-[#090d16]/60 backdrop-blur-md border border-slate-900 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Header: Logo & Info */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-950 flex-shrink-0 border border-slate-800">
                    <img
                      src={exp.thumbnail}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-cyan-400">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mt-1.5">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 shadow-sm cursor-pointer"
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
                    className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed font-normal"
                  >
                    <span className="text-cyan-400 mt-1">✦</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Circles */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap gap-3">
                {exp.techStack.map((tech) => (
                  <div key={tech.id} className="relative group/tech">
                    <div className="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-xs border border-slate-800 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-slate-900 hover:border-cyan-400 hover:shadow-md">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-5 h-5 object-contain filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-950 text-white border border-slate-800 text-[10px] px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
