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
    /* बदल: इथे bg-neutral काढून पूर्णपणे प्रीमियम मऊ ग्लास-इफेक्ट दिला आहे 
       ज्यामुळे बॅकग्राउंडचे रंग फुटरच्या आरपार हुबेहूब ओरिजिनल इमेजसारखे ट्रान्सपरंट दिसतील */
    <footer className="w-full bg-white/20 backdrop-blur-xl border-t border-white/40 py-16 px-6 sm:px-12 md:px-20 lg:px-32 relative z-10">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* Brand Name Title */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
          Ambar <span className="text-blue-600">Ubale</span>
        </h2>

        {/* Subtitle Definition */}
        <p className="text-slate-500 text-xs md:text-sm font-normal max-w-md leading-relaxed mb-8">
          Full Stack Developer crafting scalable software and AI-driven
          solutions for real-world problems.
        </p>

        {/* --- Section Links Navigation Line --- */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-xs md:text-sm font-medium text-slate-600">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <User className="w-3.5 h-3.5 text-slate-400" /> About
          </a>
          <a
            href="#skills"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Code2 className="w-3.5 h-3.5 text-slate-400" /> Skills
          </a>
          <a
            href="#services"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Services
          </a>
          <a
            href="#projects"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-slate-400" /> Projects
          </a>
          <a
            href="#testimonials"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> Reviews
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" /> Contact
          </a>
        </div>

        {/* --- Circular Social Icons Pipeline (Premium Hover) --- */}
        <div className="flex items-center justify-center gap-4">
          {[
            {
              name: "GitHub",
              href: "https://github.com/Ambarubale6061",
              color: "hover:bg-neutral-900",
              icon: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/ambar-ubale-137214230",
              color: "hover:bg-blue-600",
              icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            },
            {
              name: "Twitter",
              href: "https://x.com/UbaleAmbar",
              color: "hover:bg-sky-500",
              icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
            },
            {
              name: "Instagram",
              href: "https://www.instagram.com/ambar_ubale/",
              color: "hover:bg-pink-600",
              icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            },
            {
              name: "WhatsApp",
              href: "https://wa.me/919579377966?text=Hi%20Ambar%20Ubale,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
              color: "hover:bg-emerald-500",
              icon: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
            },
            {
              name: "Mail",
              href: "mailto:ambarubale@gmail.com",
              color: "hover:bg-red-500",
              icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
            },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full border border-white/50 bg-white/60 backdrop-blur-sm flex items-center justify-center text-slate-600 transition-all duration-300 ${social.color} hover:text-white hover:scale-110 hover:shadow-xl hover:-translate-y-2`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={social.icon}></path>
                {social.name === "LinkedIn" && (
                  <>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </>
                )}
                {social.name === "Instagram" && (
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                )}
                {social.name === "Instagram" && (
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                )}
                {social.name === "Mail" && (
                  <polyline points="22,6 12,13 2,6"></polyline>
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* --- Universal Copyright Bottom Center Line --- */}
      <div className="w-full text-center mt-12 pt-6 border-t border-slate-900/5">
        <p className="text-[10px] md:text-xs text-slate-400 font-medium tracking-widest uppercase">
          &copy; {currentYear} &nbsp; Ambar Ubale &nbsp; | &nbsp; All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
