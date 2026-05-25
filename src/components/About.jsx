"use client";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ambar_Resume.pdf";
    link.download = "Ambar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 scroll-mt-24 relative z-10 w-full overflow-hidden"
    >
      {/* 1. PREMIUM LAYERED BACKGROUND SYSTEM (Removed image layer) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Right Glowing Aura */}
        <div className="absolute -top-40 right-[-10%] w-160 h-160 bg-linear-to-bl from-blue-200/20 via-cyan-100/30 to-transparent rounded-full blur-3xl" />

        {/* Bottom-Left Ambient Light Layer */}
        <div className="absolute -bottom-20 -left-20 w-140 h-140 bg-linear-to-tr from-indigo-100/20 via-cyan-100/20 to-transparent rounded-full blur-3xl" />

        {/* Structural Tech Layout Grid System */}
        <svg
          className="absolute inset-0 w-full h-full text-slate-300/30 hidden md:block"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <line
            x1="120"
            y1="0"
            x2="120"
            y2="800"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <line
            x1="720"
            y1="0"
            x2="720"
            y2="800"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="8 4"
            opacity="0.5"
          />
          <line
            x1="1320"
            y1="0"
            x2="1320"
            y2="800"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* 2. MAIN CORE LAYOUT CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:pl-24 md:pr-12 lg:pl-32 lg:pr-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[420px] flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/am1.png"
                  alt="Ambar - Software Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">
                About
              </h2>
              <div className="w-16 h-[2px] bg-cyan-500 mb-5 rounded-full"></div>
              <h3 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
                <span className="text-black">Get to</span>{" "}
                <span className="text-cyan-500">Know Me</span>
              </h3>
            </div>

            <div className="space-y-4 text-black text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am Ambar, a Software Developer who enjoys building efficient,
                scalable, and user-friendly web applications. I have hands-on
                experience in both frontend and backend technologies, and I
                focus on writing clean code and creating smooth user
                experiences.
              </p>
              <p>
                My journey started with curiosity about how digital products
                work, which grew into building real-world applications. I also
                explore AI-based features and try to integrate them into
                projects wherever useful. I enjoy solving problems and
                continuously learning new technologies.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleDownload}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-300 bg-white/50 backdrop-blur-xs text-slate-700 font-medium text-[11px] tracking-[0.15em] uppercase hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-xs transition-all duration-300 cursor-pointer"
              >
                Download Resume
                <ArrowDownToLine className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-y-0.5 transition-all duration-200" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">15+</div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">
                  Full Stack
                </div>
                <div className="text-xs text-gray-400">Development Focus</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">
                  Real-Time
                </div>
                <div className="text-xs text-gray-400">System Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
