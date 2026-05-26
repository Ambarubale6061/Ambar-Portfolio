"use client";
import React, { useState, useCallback } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AgenticAI Studio",
    tagline: "Autonomous agent orchestration",
    description:
      "Architected a multi-agent AI coding platform (Planner, Coder, Debugger) that automates end-to-end code generation, execution, and debugging. Features real-time streaming (SSE) with <2s latency, agent memory, version control, and a hybrid execution engine within a browser-based IDE.",
    tech: [
      { name: "React", logo: "/React.png" },
      { name: "TypeScript", logo: "/ts.svg" },
      { name: "Node.js", logo: "/Node.js.png" },
      { name: "Express", logo: "/ex.png" },
      { name: "MongoDB", logo: "/MongoDB.png" },
    ],
    image: "/IDE.png",
    link: "https://agentic-ai-studio-chi.vercel.app/",
    github: "https://github.com/Ambarubale6061/AgenticAI-Studio",
    accent: "from-violet-400 to-fuchsia-600",
    placeholderGradient: "from-violet-950 via-slate-900 to-fuchsia-950",
  },
  {
    title: "FutureCart",
    tagline: "AI-powered commerce",
    description:
      "Built a scalable full-stack eCommerce platform supporting 50+ products with filtering, cart, wishlist, and secure checkout. Features a real-time product management system via Supabase Realtime, reducing admin update delays by 60%, with role-based architecture and chatbot integration.",
    tech: [
      { name: "React", logo: "/React.png" },
      { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
      { name: "TypeScript", logo: "/ts.svg" },
      { name: "Supabase", logo: "/icons8-supabase-48.png" },
    ],
    image: "/home.png",
    link: "https://futurecart-e-commerce.vercel.app/",
    github:
      "https://github.com/Ambarubale6061/FutureCart-Modern-eCommerce-Platform",
    accent: "from-emerald-400 to-teal-600",
    placeholderGradient: "from-emerald-950 via-slate-900 to-teal-950",
  },
  {
    title: "Connectly",
    tagline: "Real-time collaboration",
    description:
      "Developed a scalable social media platform supporting posts, reels, stories, and real-time interactions. Delivers low-latency (<1s) messaging, notifications, and presence via Supabase Realtime, with peer-to-peer voice and video calling via WebRTC and secure Postgres/RLS backend.",
    tech: [
      { name: "React", logo: "/React.png" },
      { name: "TypeScript", logo: "/ts.svg" },
      { name: "Supabase", logo: "/icons8-supabase-48.png" },
      { name: "WebRTC", logo: "/webrtc.png" },
    ],
    image: "/hom.png",
    link: "https://connectly-tau.vercel.app/",
    github: "https://github.com/Ambarubale6061/Connectly",
    accent: "from-cyan-400 to-blue-600",
    placeholderGradient: "from-cyan-950 via-slate-900 to-blue-950",
  },
  {
    title: "Task Manager App",
    tagline: "Smart daily task organizer",
    description:
      "Built an efficient task management application to organize, track, and manage daily activities with a clean and responsive user interface for improved productivity.",
    tech: [
      { name: "Next.js", logo: "/next.svg" },
      { name: "React", logo: "/React.png" },
      { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
      { name: "Node.js", logo: "/Node.js.png" },
    ],
    image: "/taskapp.png",
    link: "https://task-app-nine-lovat.vercel.app/",
    github: "https://github.com/yourusername/task-manager-app",
    accent: "from-blue-400 to-cyan-600",
    placeholderGradient: "from-blue-950 via-slate-900 to-cyan-950",
  },
  {
    title: "QuickCart",
    tagline: "Modern e-commerce experience",
    description:
      "Developed a modern e-commerce web application with responsive UI, product listings, cart functionality, and secure backend integration using MongoDB and Next.js.",
    tech: [
      { name: "Next.js", logo: "/next.svg" },
      { name: "Node.js", logo: "/Node.js.png" },
      { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
      { name: "MongoDB", logo: "/MongoDB.png" },
    ],
    image: "/quick.png",
    link: "https://quickcart-ten-opal.vercel.app/",
    github: "https://github.com/yourusername/quickcart",
    accent: "from-emerald-400 to-green-600",
    placeholderGradient: "from-emerald-950 via-slate-900 to-green-950",
  },
  {
    title: "Weather App",
    tagline: "Live weather insights",
    description:
      "Designed a real-time weather dashboard that displays temperature, humidity, and weather forecasts for different cities with a modern and responsive UI.",
    tech: [
      { name: "Next.js", logo: "/next.svg" },
      { name: "Tailwind CSS", logo: "/Tailwind CSS.png" },
      { name: "TypeScript", logo: "/ts.svg" },
      { name: "Vite", logo: "/Vite.png" },
    ],
    image: "/weather.png",
    link: "https://weather-dashboard-six-steel.vercel.app/",
    github: "https://github.com/yourusername/weather-app",
    accent: "from-yellow-400 to-orange-600",
    placeholderGradient: "from-yellow-950 via-slate-900 to-orange-950",
  },
];

function GithubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const handleImgError = useCallback(() => setImgError(true), []);

  return (
    <div
      className="
        group relative flex flex-col h-full
        bg-white border border-slate-100 rounded-2xl overflow-hidden
        shadow-sm hover:shadow-xl
        transform-gpu hover:-translate-y-1
        transition-all duration-300 ease-out
      "
    >
      {/* Image panel */}
      <div className="relative w-full h-48 shrink-0 overflow-hidden bg-slate-100">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onError={handleImgError}
            className="
              w-full h-full
              object-cover object-center
              transform-gpu
              transition-transform duration-500 ease-out
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.placeholderGradient} flex items-center justify-center`}
          >
            <span className="text-white/20 text-5xl font-bold select-none tracking-tight">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Dynamic Glow Accent bar */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.accent} opacity-80`}
        />
      </div>

      {/* Body Section */}
      <div className="flex flex-col flex-1 px-5 pt-5 pb-6 gap-3">
        <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 leading-none">
          {project.tagline}
        </p>

        <h3 className="text-[16px] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-slate-600 text-xs leading-relaxed line-clamp-4 flex-1">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 my-2">
          {project.tech.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700"
            >
              <img
                src={t.logo}
                alt={t.name}
                width={12}
                height={12}
                className="w-3 h-3 object-contain"
              />
              {t.name}
            </span>
          ))}
        </div>

        <div className="h-px bg-slate-100" />

        {/* Actions Links */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            Code
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 bg-[#f8fafc] relative overflow-hidden scroll-mt-20"
    >
      {/* Modern Stylish Background Matched From about.jsx */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Decorative Blurs */}
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[140px]" />

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-black">
            Featured{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
              Projects
            </span>
          </p>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />

          <p className="text-gray-800 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            A selection of my recent work showcasing full-stack capabilities and
            smart architecture.
          </p>
        </div>

        {/* 3-column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
