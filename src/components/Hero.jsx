"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { memo } from "react";

/* --- Entrance animation factory ------------------------------------ */
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

/* --- Main Hero Component (Transparent & Compact Gaps) ----------------- */
export const Hero = memo(function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center bg-transparent z-10"
    >
      {/* max-w-7xl आणि कमी केलेले px मुळे साईडची अनावश्यक स्पेस कमी होईल */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* डाव्या बाजूचा मजकूर (Left Content Area) */}
        <div className="w-full md:w-[60%] text-center md:text-left flex flex-col gap-4">
          <motion.div
            {...fadeUp(0.05)}
            className="text-[15px] md:text-[17px] font-medium tracking-wide text-slate-700"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-600 font-semibold">Ambar</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-extrabold text-slate-900 leading-[1.1] tracking-tight uppercase"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
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
            <span className="text-blue-600 animate-pulse ml-1">|</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-[15px] md:text-[16px] font-medium text-slate-700 max-w-xl mt-2"
          >
            Building scalable digital experiences that{" "}
            <span className="text-blue-600 font-semibold">
              solve real problems.
            </span>
          </motion.p>

          <motion.p
            {...fadeUp(0.32)}
            className="text-[13px] md:text-[14px] text-slate-500 font-normal leading-relaxed max-w-lg"
          >
            Full Stack Developer crafting clean, fast, and user-friendly web &
            AI-powered experiences with modern technology.
          </motion.p>

          {/* बटने आणि त्यामधील योग्य अंतर */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              data-hover
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-[11px] tracking-[0.15em] uppercase shadow-sm hover:bg-blue-600 hover:shadow-md transition-all duration-300"
            >
              Explore My Work
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </a>

            <a
              data-hover
              href="#about"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 bg-white/40 backdrop-blur-sm text-slate-700 font-medium text-[11px] tracking-[0.15em] uppercase hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              More About Me
            </a>
          </motion.div>
        </div>

        {/* उजव्या बाजूचा मोकळा भाग जो बॅलन्स राखतो */}
        <div className="hidden md:block w-full md:w-[35%] relative">
          {/* composition area */}
        </div>
      </div>

      {/* स्क्रोल डाउन इंडिकेटर */}
      <motion.a
        href="#about"
        data-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors duration-200"
      >
        <span className="w-5 h-8 rounded-full border border-slate-300 flex items-start justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 6, 0], opacity: [0.9, 0.2, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-blue-500"
          />
        </span>
        <span className="text-[7.5px] font-bold tracking-[0.35em] uppercase mt-1">
          Scroll Down
        </span>
      </motion.a>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
