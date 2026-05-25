"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Orbit,
  ShieldCheck,
  Braces,
  Layers,
  Cpu,
  Sparkles,
  Bot,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { memo, useEffect } from "react";

/* --- Entrance animation factory ------------------------------------ */
const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

export const Hero = memo(function Hero() {
  // Use MotionValues to completely bypass React state-driven re-renders on mousemove
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply smooth springs to the raw mouse values natively
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });
  const eyeSpringX = useSpring(mouseX, { stiffness: 80, damping: 15 });
  const eyeSpringY = useSpring(mouseY, { stiffness: 80, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate normalized position from center (-0.5 to 0.5)
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      // Directly update motion values without triggering React render cycles
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Map normalized mouse values to interactive rotations/translations
  const rotateX = useTransform(springY, (y) => 8 + y * -25);
  const rotateY = useTransform(springX, (x) => -8 + x * 25);
  const eyeX = useTransform(eyeSpringX, (x) => x * 12);
  const eyeY = useTransform(eyeSpringY, (y) => y * 8);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden z-10 select-none"
    >
      {/* 1. PREMIUM LIVE BACKGROUND WITH CURVED LAYOUTS & WAVES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Soft Glow Wave — removed */}

        {/* Top Right Animated Connection Network Grid */}
        <svg
          className="absolute top-10 right-10 w-[40%] h-[40%] text-slate-300/40 hidden md:block"
          viewBox="0 0 400 400"
        >
          <line
            x1="100"
            y1="80"
            x2="250"
            y2="50"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="250"
            y1="50"
            x2="350"
            y2="150"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <line
            x1="250"
            y1="50"
            x2="200"
            y2="200"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>

        {/* Bottom Giant Premium Curved Layout Waves — removed */}

        {/* Glowing Energy Light Streaks — removed */}
      </div>

      {/* 2. MAIN CORE CONTENT GRID */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
        {/* LEFT BRANDING TEXT AREA */}
        <div className="w-full md:w-[45%] text-center md:text-left flex flex-col gap-5">
          <motion.div
            {...fadeUp(0.05)}
            className="text-[17px] md:text-[20px] font-medium tracking-wide text-black"
          >
            Hi, I&apos;m{" "}
            <span className="text-cyan-500 font-semibold">Ambar</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-extrabold text-black leading-[1.1] tracking-tight uppercase"
            style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)" }}
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
            <span className="text-cyan-500 animate-pulse ml-1">|</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-[14px] md:text-[16px] text-gray-400 font-normal max-w-xl"
          >
            Crafting fast, scalable web apps and AI experiences that{" "}
            <span className="text-cyan-500 font-semibold">
              solve real-world problems.
            </span>
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
          >
            <a
              data-hover
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-black text-white font-medium text-[11px] tracking-[0.15em] uppercase shadow-sm hover:bg-cyan-500 hover:shadow-md transition-all duration-300"
            >
              Explore My Work
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </a>

            <a
              data-hover
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 bg-white/40 backdrop-blur-sm text-slate-700 font-medium text-[11px] tracking-[0.15em] uppercase hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT COMPOSITION: 3D FLOATING TECH ROBOT AVATAR */}
        <div className="w-full md:w-[55%] flex items-center justify-center relative min-h-[450px] md:min-h-[550px]">
          {/* Background Soft Glow Aura Bases — removed */}

          {/* 3D ROBOT AVATAR CONTAINER */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1200,
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative w-72 h-80 md:w-85 md:h-[380px] flex flex-col items-center justify-center z-20"
          >
            {/* Robot Head */}
            <motion.div
              animate={{ y: [0, -3, 0], rotateZ: [0, 1, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-34 h-28 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-blue-500/70 rounded-[2.5rem] relative flex items-center justify-center shadow-[0_25px_50px_-12px_rgba(30,41,59,0.7),inset_0_2px_4px_rgba(255,255,255,0.15)] p-4"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(30px)",
              }}
            >
              {/* Ears / Antennas Lateral */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3.5 h-9 bg-linear-to-r from-blue-700 to-blue-500 rounded-l-xl border border-slate-950 shadow-[inset_-2px_2px_4px_rgba(255,255,255,0.2)]" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3.5 h-9 bg-linear-to-l from-blue-700 to-blue-500 rounded-r-xl border border-slate-950 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.2)]" />

              {/* Top Main Antenna */}
              <div
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ transform: "translateZ(10px)" }}
              >
                <div className="w-2 h-6 bg-linear-to-b from-slate-600 to-slate-800 rounded-t-xs shadow-md" />
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    boxShadow: [
                      "0 0 10px #22d3ee",
                      "0 0 20px #06b6d4",
                      "0 0 10px #22d3ee",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] border border-white/20"
                />
              </div>

              {/* Glass Visor Screen */}
              <div
                className="w-full h-16 bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-slate-850 rounded-2xl flex items-center justify-around px-4 relative overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.85)]"
                style={{ transform: "translateZ(15px)" }}
              >
                {/* Cyber Scanline effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/10 to-transparent bg-[size:100%_4px] animate-pulse" />

                {/* Neon Cyan Eyes (Optimized Hardware-Accelerated Tracking) */}
                <motion.div
                  animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                  }}
                  style={{
                    x: eyeX,
                    y: eyeY,
                  }}
                  transition={{
                    scaleY: {
                      duration: 3.8,
                      repeat: Infinity,
                      times: [0, 0.92, 0.94, 0.96, 1],
                    },
                  }}
                  className="w-7 h-3.5 bg-cyan-400 rounded-full shadow-[0_0_18px_#22d3ee,inset_0_1px_2px_rgba(255,255,255,0.6)] flex items-center justify-center"
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full shadow-xs" />
                </motion.div>
                <motion.div
                  animate={{
                    scaleY: [1, 1, 0.1, 1, 1],
                  }}
                  style={{
                    x: eyeX,
                    y: eyeY,
                  }}
                  transition={{
                    scaleY: {
                      duration: 3.8,
                      repeat: Infinity,
                      times: [0, 0.92, 0.94, 0.96, 1],
                    },
                  }}
                  className="w-7 h-3.5 bg-cyan-400 rounded-full shadow-[0_0_18px_#22d3ee,inset_0_1px_2px_rgba(255,255,255,0.6)] flex items-center justify-center"
                >
                  <div className="w-2.5 h-2.5 bg-white rounded-full shadow-xs" />
                </motion.div>
              </div>
            </motion.div>

            {/* Neck Connection */}
            <div
              className="w-9 h-4 bg-linear-to-r from-slate-800 via-slate-700 to-slate-800 border-x border-slate-950 z-10 shadow-lg"
              style={{ transform: "translateZ(15px)" }}
            />

            {/* Robot Chest/Body Chassis */}
            <div
              className="w-46 h-46 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-blue-500/50 rounded-[2.2rem] relative flex flex-col items-center justify-top pt-5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.8),inset_0_2px_4px_rgba(255,255,255,0.1)]"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(10px)",
              }}
            >
              {/* Glowing Core - Iron Man / Arc Reactor Style */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px #3b82f6, inset 0 0 10px #06b6d4",
                    "0 0 30px #06b6d4, inset 0 0 15px #22d3ee",
                    "0 0 15px #3b82f6, inset 0 0 10px #06b6d4",
                  ],
                  scale: [0.96, 1.04, 0.96],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-16 h-16 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center p-2 cursor-pointer group shadow-2xl z-20"
                style={{ transform: "translateZ(25px)" }}
              >
                <Cpu className="w-full h-full text-cyan-400 animate-spin [animation-duration:16s]" />
              </motion.div>

              {/* Status Graphic Lines */}
              <div
                className="w-26 mt-5 flex items-center justify-between gap-1.5 px-2.5 py-1.5 bg-slate-950/80 rounded-lg border border-slate-800 shadow-inner"
                style={{ transform: "translateZ(15px)" }}
              >
                <span className="text-[7.5px] font-mono text-emerald-400 font-bold tracking-wide animate-pulse">
                  AI: ONLINE
                </span>
                <div className="flex gap-0.5 items-end h-3">
                  <span
                    className="w-1 h-2 bg-blue-500 rounded-xs animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <span
                    className="w-1 h-3 bg-cyan-400 rounded-xs animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <span
                    className="w-1 h-1.5 bg-indigo-500 rounded-xs animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              {/* Mechanical Shoulder Joints */}
              <div className="absolute -left-4 top-7 w-4.5 h-9 bg-linear-to-b from-slate-700 to-slate-800 rounded-l-md border-y border-l border-slate-950 shadow-md" />
              <div className="absolute -right-4 top-7 w-4.5 h-9 bg-linear-to-b from-slate-700 to-slate-800 rounded-r-md border-y border-r border-slate-950 shadow-md" />
            </div>
          </motion.div>

          {/* FLOATING TARGETS & TECH BADGES */}

          {/* Node 1: Code Hologram Badge (Top Left) */}
          <motion.div
            animate={{
              y: [0, -10, 8, 0],
              x: [0, 6, -4, 0],
              rotate: [0, -6, 4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            }}
            className="absolute top-16 left-6 md:left-14 p-4 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl z-30 flex items-center justify-center border border-slate-750 shadow-2xl scale-110"
          >
            <Code className="w-5.5 h-5.5 text-cyan-400 stroke-[2.5] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          </motion.div>

          {/* Node 2: Isometric Stack Layers (Bottom Left) */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.03, 0.97, 1],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-4 md:left-12 p-4.5 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] border border-slate-200 text-indigo-600 z-30 flex flex-col items-center gap-1.5 scale-110"
          >
            <Layers className="w-6 h-6 stroke-[2.2]" />
            <span className="text-[8px] text-slate-500 font-extrabold tracking-wider uppercase">
              Stack
            </span>
          </motion.div>

          {/* Node 3: Quantum Orbit Shield Node (Bottom Right) */}
          <motion.div
            animate={{
              y: [0, 10, -6, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="absolute bottom-12 right-10 md:right-18 p-4 bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-250 text-emerald-500 z-30 flex items-center gap-2.5 scale-110"
          >
            <div className="p-1 bg-emerald-50 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-emerald-500 stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8.5px] font-black text-slate-800 uppercase tracking-wide leading-none">
                Secure
              </span>
              <span className="text-[7px] font-mono font-bold text-slate-400 leading-none mt-1">
                LLM Guard
              </span>
            </div>
          </motion.div>

          {/* Node 4: Micro Cosmic Satellite Orbit (Far Top Right) */}
          <motion.div
            animate={{
              x: [0, -6, 6, 0],
              y: [0, -10, 8, 0],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute top-8 right-16 md:right-24 p-3 bg-linear-to-tr from-cyan-500 to-blue-600 text-white rounded-full shadow-xl shadow-cyan-500/20 z-10 scale-110"
          >
            <Orbit className="w-4.5 h-4.5 animate-spin [animation-duration:9s]" />
          </motion.div>

          {/* Node 5: Floating Braces Operator Badge (Center-Right Height) */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [12, -8, 12],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-2 p-3.5 bg-linear-to-tr from-blue-600 via-blue-600 to-cyan-500 text-white rounded-xl shadow-xl z-30 hidden lg:flex items-center justify-center scale-110"
          >
            <Braces className="w-4.5 h-4.5 text-white stroke-[2.2]" />
          </motion.div>

          {/* Node 6: Sparkles/AI Prompts Badge (Top Right of Robot) */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-26 right-6 md:right-14 p-3 bg-amber-400 text-slate-950 rounded-xl shadow-xl z-30 flex items-center gap-1.5 border border-amber-300 scale-110"
          >
            <Sparkles className="w-4 h-4 fill-slate-950/10" />
            <span className="text-[8.5px] font-black tracking-wider uppercase font-mono">
              Agentic
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
