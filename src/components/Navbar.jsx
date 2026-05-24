"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  BrainCircuit,
  LayoutGrid,
  Briefcase,
  Award,
  MessageSquare,
  Mail,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: BrainCircuit },
  { name: "Services", href: "#services", icon: LayoutGrid },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Experience", href: "#experience", icon: Award },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ambar_Resume.pdf";
    link.download = "Ambar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 w-full px-12 py-4 items-center justify-center gap-6 bg-white/60 backdrop-blur-xl border-b border-white/40 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        {/* Wrapper — gap slightly increased from gap-6 → gap-8 */}
        <div className="flex items-center gap-8">
          {/* Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-extrabold tracking-tighter select-none"
          >
            <span className="text-cyan-500">Am</span>bar
          </a>

          {/* Capsule — off-white background + magic underline on links */}
          <div className="flex items-center gap-1 px-6 py-2.5 rounded-full border border-gray-200/80 bg-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative px-3 py-1.5 text-[11px] font-black uppercase tracking-widest
                  text-gray-600 hover:text-cyan-600 transition-colors duration-200
                  after:absolute after:left-3 after:right-3 after:bottom-0
                  after:h-[1.5px] after:rounded-full after:bg-cyan-500
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.25,1,0.5,1)]
                  hover:after:scale-x-100
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-300 text-gray-700 bg-white/50 hover:border-cyan-400 hover:text-cyan-600 transition-all duration-300"
            >
              Resume
            </button>

            <a
              href="#contact"
              className="px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-full bg-gray-900 text-white hover:bg-cyan-500 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FLOATING NAV --- */}
      <nav
        className={`md:hidden fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
      >
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
          {navLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`p-3 rounded-full transition-all duration-300 ${activeTab === link.name ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]" : "text-gray-600"}`}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
          <button
            onClick={() => setIsOpen(true)}
            className="p-3 rounded-full bg-gray-900 text-white shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* --- PREMIUM MOBILE BOTTOM SHEET --- */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute bottom-0 w-full bg-white/90 backdrop-blur-3xl rounded-t-[32px] p-6 border-t border-white/50 transition-transform duration-500 ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="flex justify-between items-center mb-6 px-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Navigation
            </span>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 text-sm font-semibold hover:bg-cyan-50 transition-colors"
              >
                <link.icon className="w-4 h-4 text-cyan-600" /> {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-xs font-bold uppercase"
            >
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-3 rounded-xl bg-gray-900 text-white text-center text-xs font-bold uppercase"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
