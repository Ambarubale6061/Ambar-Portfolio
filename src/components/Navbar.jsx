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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3" : "bg-transparent py-5"}`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Name Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter">
          <span className="text-blue-600">Am</span>
          <span className="text-gray-950">bar</span>
        </a>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-gray-950 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-950 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={handleDownload}
            className="text-[11px] font-bold uppercase tracking-widest border border-gray-300 px-4 py-2 rounded-full hover:border-gray-950 transition-all"
          >
            Resume
          </button>
          <a
            href="#contact"
            className="px-4 py-2 bg-gray-950 text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-gray-950 hover:bg-white hover:text-gray-950 transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile View: Resume & Let's Talk + Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={handleDownload}
            className="text-[10px] font-bold uppercase border border-gray-300 px-3 py-1.5 rounded-full"
          >
            Resume
          </button>
          <a
            href="#contact"
            className="bg-gray-950 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-full"
          >
            Let&apos;s Talk
          </a>
          <button onClick={() => setIsOpen(true)} className="p-1 text-gray-950">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Only Links) */}
      <div
        className={`fixed inset-0 z-[60] bg-white p-8 flex flex-col gap-6 md:hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end p-2 mb-4">
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-gray-950 border-b border-gray-100 pb-4"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
