"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { memo } from "react";

/* --- Entrance animation factory ------------------------------------ */
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

/* --- Main Hero Component (no 3D) --------------------------------- */
export const Hero = memo(function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-dvh overflow-hidden bg-gradient-to-br from-white to-gray-50"
    >
      <div className="flex flex-col md:flex-row w-full min-h-dvh items-center justify-center">
        {/* CENTERED TEXT CONTENT (full width) */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-12 text-center md:text-left">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <motion.div {...fadeUp(0.05)}>
              <span className="text-gray-700">Hi, I&apos;m </span>
              <span className="text-cyan-600 font-semibold">Ambar</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15)}
              className="font-bold text-gray-900 leading-[1.08] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.75rem, 4.2vw, 2.8rem)" }}
            >
              <TypeAnimation
                sequence={[
                  "FULL STACK\nDEVELOPER",
                  2400,
                  "AI BUILDER",
                  2000,
                  "PROBLEM\nSOLVER",
                  2400,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor={false}
                style={{ whiteSpace: "pre-line", display: "inline" }}
              />
              <span className="text-cyan-600 ml-0.5">|</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.25)}
              className="text-sm sm:text-[15px] font-medium text-gray-700 leading-snug max-w-2xl"
            >
              Building scalable digital experiences that{" "}
              <span className="text-cyan-600 font-semibold">
                solve real problems.
              </span>
            </motion.p>

            <motion.p
              {...fadeUp(0.32)}
              className="text-[13px] text-gray-500 leading-relaxed max-w-xl"
            >
              Full Stack Developer crafting scalable apps, real‑time systems,
              and AI‑powered experiences with modern technologies.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1"
            >
              <a
                data-hover
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-5 py-2.75 rounded-full bg-cyan-600 text-white font-semibold text-[11px] tracking-[0.18em] uppercase shadow-md hover:shadow-lg hover:bg-cyan-700 transition-all duration-300"
              >
                Explore My Work
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </a>
              <a
                data-hover
                href="/Resume.pdf"
                download="Ambar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.75 rounded-full border border-gray-300 text-gray-700 font-semibold text-[11px] tracking-[0.18em] uppercase hover:border-cyan-500 hover:text-cyan-700 transition-colors duration-200"
              >
                <Download className="w-3 h-3" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator (centered bottom) */}
      <motion.a
        href="#about"
        data-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-gray-500 hover:text-cyan-600 transition-colors duration-200"
      >
        <span className="w-5 h-8 rounded-full border border-gray-300 flex items-start justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 7, 0], opacity: [0.9, 0.15, 0.9] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.75 h-1.5 rounded-full bg-cyan-500"
          />
        </span>
        <span className="text-[8px] font-semibold tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-3 h-3" />
      </motion.a>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
