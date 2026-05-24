"use client";
import React, { useState, useEffect, memo } from "react";
import {
  Atom,
  Layers,
  FileCode,
  Sparkles,
  Server,
  Cpu,
  Database as DbIcon,
  Zap,
  Braces,
  Boxes,
  Code2,
  Cloud,
  ShieldCheck,
  Workflow,
  Layout,
  Globe,
  Terminal,
  Share2,
  HardDrive,
  Key,
  GitBranch,
  MessageSquare,
  Lightbulb,
  GitCommit,
  Package,
  Hash,
  Laptop,
  SearchCode,
  PenTool,
  Code,
} from "lucide-react";

// ─── Skill data (No changes here, keeping existing data structured) ──────────
const skillData = {
  interface: [
    { name: "React", Icon: Atom, color: "#0ea5e9" },
    { name: "Next.js", Icon: Layers, color: "#000000" },
    { name: "TypeScript", Icon: FileCode, color: "#3b82f6" },
    { name: "Tailwind", Icon: Sparkles, color: "#06b6d4" },
    { name: "Framer", Icon: Layout, color: "#ec4899" },
    { name: "Three.js", Icon: Boxes, color: "#6366f1" },
    { name: "Figma", Icon: PenTool, color: "#f24e1e" },
    { name: "HTML5", Icon: Globe, color: "#f97316" },
    { name: "CSS3", Icon: Laptop, color: "#3b82f6" },
    { name: "Zustand", Icon: Workflow, color: "#d97706" },
  ],
  core: [
    { name: "Node.js", Icon: Server, color: "#10b981" },
    { name: "Python", Icon: Code2, color: "#eab308" },
    { name: "AI Agents", Icon: Code, color: "#a855f7" },
    { name: "OpenAI", Icon: Lightbulb, color: "#10a37f" },
    { name: "Go", Icon: Terminal, color: "#00add8" },
    { name: "FastAPI", Icon: Zap, color: "#059669" },
    { name: "GraphQL", Icon: Share2, color: "#e10098" },
    { name: "Microservices", Icon: Cpu, color: "#f59e0b" },
    { name: "LangChain", Icon: GitBranch, color: "#6366f1" },
    { name: "Express", Icon: Server, color: "#475569" },
  ],
  data: [
    { name: "PostgreSQL", Icon: DbIcon, color: "#6366f1" },
    { name: "Supabase", Icon: Zap, color: "#3ecf8e" },
    { name: "MongoDB", Icon: HardDrive, color: "#16a34a" },
    { name: "Redis", Icon: Zap, color: "#ef4444" },
    { name: "Prisma", Icon: Braces, color: "#000000" },
    { name: "Firebase", Icon: Cloud, color: "#f59e0b" },
    { name: "Elastic", Icon: SearchCode, color: "#f97316" },
    { name: "Vector DB", Icon: Hash, color: "#8b5cf6" },
    { name: "Neo4j", Icon: GitBranch, color: "#0284c7" },
    { name: "Vault", Icon: Key, color: "#d97706" },
  ],
  workflow: [
    { name: "Docker", Icon: Boxes, color: "#2496ed" },
    { name: "AWS", Icon: Cloud, color: "#f97316" },
    { name: "Git", Icon: GitCommit, color: "#f05032" },
    { name: "Vercel", Icon: Zap, color: "#000000" },
    { name: "Actions", Icon: Workflow, color: "#2088ff" },
    { name: "Linux", Icon: Terminal, color: "#ca8a04" },
    { name: "Postman", Icon: MessageSquare, color: "#ef6c37" },
    { name: "K8s", Icon: Package, color: "#326ce5" },
    { name: "Security", Icon: ShieldCheck, color: "#10b981" },
    { name: "Nginx", Icon: Server, color: "#009639" },
  ],
};

// ─── Card metadata ────────────────────────────────────────────────────────────
const CARDS = [
  { key: "interface", title: "Interface & Experience" },
  { key: "core", title: "Core & Intelligence" },
  { key: "data", title: "Data & Persistence" },
  { key: "workflow", title: "DevOps & Workflow" },
];

// ─── Pure Smooth 3D Carousel Card (UPDATED TO WHITE/GLASS THEME) ──────────────
const SkillCard = memo(function SkillCard({ skills, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [skills.length, isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* बदल: डार्क बॅकग्राउंड काढून bg-white/70 ग्लास फिनिश दिला आहे */
      className="relative h-[330px] w-full bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl overflow-hidden flex flex-col justify-between p-5 group hover:shadow-md hover:border-slate-200 transition-all duration-500"
    >
      {/* Dynamic Brand Glow Backdrop (Softened for Light Theme) */}
      <div
        className="absolute inset-0 opacity-[0.08] blur-[60px] pointer-events-none transition-all duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at center, ${skills[activeIndex].color} 0%, transparent 65%)`,
        }}
      />

      {/* Header Container */}
      <div className="relative z-30 w-full text-left">
        <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-400 font-mono">
          {title}
        </h3>
        <div className="h-[1px] w-6 bg-slate-200 mt-1.5 transition-all duration-500 group-hover:w-12 group-hover:bg-slate-400" />
      </div>

      {/* 3D Horizon Stage Layer */}
      <div
        className="relative w-full flex-grow flex items-center justify-center select-none"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {skills.map((skill, index) => {
          let offset = index - activeIndex;
          if (offset < -skills.length / 2) offset += skills.length;
          if (offset > skills.length / 2) offset -= skills.length;

          const isCenter = offset === 0;
          const isLeft = offset === -1 || (offset < -1 && offset >= -2);
          const isRight = offset === 1 || (offset > 1 && offset <= 2);

          let translateX = 0;
          let translateZ = -250;
          let rotateY = 0;
          let opacity = 0;

          if (isCenter) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            opacity = 1;
          } else if (isLeft) {
            translateX = -110;
            translateZ = -120;
            rotateY = 20;
            opacity = 0.35;
          } else if (isRight) {
            translateX = 110;
            translateZ = -120;
            rotateY = -20;
            opacity = 0.35;
          }

          return (
            <div
              key={`${title}-${skill.name}`}
              className="absolute will-change-transform font-sans"
              style={{
                transform: `translate3d(${translateX}px, 0px, ${translateZ}px) rotateY(${rotateY}deg)`,
                opacity: opacity,
                zIndex: isCenter ? 100 : 20,
                filter: isCenter ? "blur(0px)" : "blur(0.5px)",
                transition:
                  "transform 850ms cubic-bezier(0.25, 1, 0.5, 1), opacity 850ms cubic-bezier(0.25, 1, 0.5, 1), filter 850ms cubic-bezier(0.25, 1, 0.5, 1)",
                pointerEvents: isCenter ? "auto" : "none",
                transformStyle: "preserve-3d",
              }}
            >
              {/* बदल: आतील टेक स्टॅक कार्ड्स आता व्हाईट ग्लास (bg-white/90) मध्ये आहेत */}
              <div
                className="w-[110px] h-[150px] rounded-xl border flex flex-col items-center justify-between p-3 relative bg-white/90 transition-all duration-300 shadow-xs"
                style={{
                  borderColor: isCenter
                    ? `${skill.color}55`
                    : "rgba(0, 0, 0, 0.05)",
                  boxShadow: isCenter
                    ? `0 15px 30px -10px ${skill.color}25, 0 0 15px 1px ${skill.color}10, inset 0 1px 0 0 rgba(255,255,255,0.8)`
                    : "0 4px 12px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* Micro Top Rim Line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />

                {/* Center Vector Icon Logo Layer */}
                <div className="flex-grow flex items-center justify-center w-full pt-2">
                  <div
                    className="p-2.5 rounded-xl border transition-colors duration-500 bg-slate-50"
                    style={{
                      borderColor: isCenter
                        ? `${skill.color}15`
                        : "rgba(0, 0, 0, 0.02)",
                    }}
                  >
                    <skill.Icon
                      size={26}
                      style={{ color: skill.color }}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                {/* Name Label */}
                <div className="w-full text-center pb-0.5">
                  <span
                    className="text-[10px] font-bold tracking-wide block truncate transition-colors duration-500"
                    style={{ color: isCenter ? "#0f172a" : "#94a3b8" }}
                  >
                    {skill.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

// ─── Main Section Wrapper ─────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 scroll-mt-24 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header - बदल: हेडिंग आता अगदी Contact फॉर्म सारखीच मॅचिंग केली आहे */}
        <div className="text-center mb-12">
          <p className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-slate-900">
            Skills &amp;{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              }}
            >
              Expertise
            </span>
          </p>
          {/* Accent Line */}
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-lg font-normal">
            Engineered using a high-fidelity 3D structural carousel loop layout
            configured for optimal performance interfaces.
          </p>
        </div>

        {/* 2-Column Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CARDS.map(({ key, title }) => (
            <SkillCard key={key} skills={skillData[key]} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
