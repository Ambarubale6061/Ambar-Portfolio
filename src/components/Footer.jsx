"use client";
import React from "react";
import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  MessageSquare,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // किंचित वेगळा ऑफ-व्हाइट टोन (bg-neutral-50/70) दिला आहे ज्यामुळे हा एक वेगळा सेक्शन आहे हे स्पष्ट समजेल
    <footer className="w-full mt-32 bg-neutral-50/75 backdrop-blur-sm border-t border-neutral-200/40 py-16 px-6 sm:px-12 md:px-20 lg:px-32 relative z-10">
      {/* Container Pipeline aligned with main content */}
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* Brand Name Title */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">
          Ambar <span className="text-blue-600">Ubale</span>
        </h2>

        {/* Subtitle Definition */}
        <p className="text-neutral-400 text-xs md:text-sm font-normal max-w-md leading-relaxed mb-8">
          Full Stack Developer crafting scalable software and AI-driven
          solutions for real-world problems.
        </p>

        {/* --- Section Links Navigation Line --- */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-xs md:text-sm font-medium text-neutral-600">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Home className="w-3.5 h-3.5 text-neutral-400" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <User className="w-3.5 h-3.5 text-neutral-400" /> About
          </a>
          <a
            href="#skills"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Code2 className="w-3.5 h-3.5 text-neutral-400" /> Skills
          </a>
          <a
            href="#services"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Briefcase className="w-3.5 h-3.5 text-neutral-400" /> Services
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-neutral-400" /> Projects
          </a>
          <a
            href="#testimonials"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-neutral-400" /> Reviews
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400" /> Contact
          </a>
        </div>

        {/* --- Circular Social Icons Pipeline (100% Consistent & Ultra Smooth) --- */}
        <div className="flex items-center justify-center gap-4">
          {/* GitHub */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-neutral-950 hover:border-neutral-400 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)]"
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
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(59,130,246,0.08)]"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-neutral-900 hover:border-neutral-400 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
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
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-pink-600 hover:border-pink-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(236,72,153,0.08)]"
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* WhatsApp (बाकी आयकॉन्स सारखाच सेम टू सेम मिनिमल लुक) */}
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-emerald-600 hover:border-emerald-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(16,185,129,0.08)]"
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>

          {/* Email (बाकी आयकॉन्स सारखाच सेम टू सेम मिनिमल लुक) */}
          <a
            href="mailto:your.email@example.com"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 transition-all duration-300 hover:text-red-500 hover:border-red-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(239,68,68,0.08)]"
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
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* --- Universal Copyright Bottom Center Line --- */}
      <div className="w-full text-center mt-12 pt-6 border-t border-neutral-200/30">
        <p className="text-[10px] md:text-xs text-neutral-400 font-medium tracking-widest uppercase">
          &copy; {currentYear} Ambar Ubale &nbsp;|&nbsp; All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
