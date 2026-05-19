"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Connectly",
    description:
      "A high-fidelity social media platform featuring real-time messaging, post interactions, and live stories management.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "FutureCart",
    description:
      "An advanced e-commerce ecosystem with complete payment integration, real-time inventory tracking, and analytics dashboard.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-8 scroll-mt-20"
    >
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        Featured Projects
      </h2>

      {/* Responsive Responsive Grid Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-gray-300 transition-all duration-300 group text-center sm:text-left"
          >
            <div>
              {/* Title Grid */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {project.title}
              </h3>
              {/* Brief Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
            </div>

            <div>
              {/* Badges Stack Grid */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-6">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Anchors Pipeline */}
              <div className="flex items-center justify-center sm:justify-start gap-4 text-sm font-medium text-gray-500">
                <a
                  href={project.github}
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1 hover:text-gray-900 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
