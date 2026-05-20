"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ambar_Resume.pdf";
    link.download = "Ambar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-cyan-500">Am</span>
          <span className="text-black">bar</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-bold uppercase tracking-widest text-gray-500 transition-all duration-300 hover:text-cyan-500 group"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Resume Button */}
          <button
            onClick={handleDownload}
            className="text-[10px] font-bold uppercase tracking-widest border border-gray-300 px-3 py-1.5 rounded-full transition-all duration-300 hover:border-cyan-500 hover:text-cyan-500 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          >
            Resume
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-black transition-all duration-300 hover:bg-white hover:text-cyan-500 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleDownload}
            className="text-[10px] font-bold uppercase border border-gray-300 px-3 py-1.5 rounded-full"
          >
            Resume
          </button>

          <a
            href="#contact"
            className="bg-black text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full"
          >
            Let&apos;s Talk
          </a>

          <button onClick={() => setIsOpen(true)} className="p-1 text-black">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[60] bg-white p-8 flex flex-col gap-6 md:hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end p-2 mb-4">
          <X className="w-7 h-7" />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-black border-b border-gray-100 pb-3 hover:text-cyan-500 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
