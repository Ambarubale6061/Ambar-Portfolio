"use client";
import React, { useEffect, useRef, memo } from "react";
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

// ─── Skill data ───────────────────────────────────────────────────────────────
const skillData = {
  interface: [
    { name: "React", Icon: Atom, color: "#0ea5e9" },
    { name: "Next.js", Icon: Layers, color: "#111827" },
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
    { name: "Express", Icon: Server, color: "#374151" },
  ],
  data: [
    { name: "PostgreSQL", Icon: DbIcon, color: "#6366f1" },
    { name: "Supabase", Icon: Zap, color: "#3ecf8e" },
    { name: "MongoDB", Icon: HardDrive, color: "#16a34a" },
    { name: "Redis", Icon: Zap, color: "#ef4444" },
    { name: "Prisma", Icon: Braces, color: "#0f172a" },
    { name: "Firebase", Icon: Cloud, color: "#f59e0b" },
    { name: "Elastic", Icon: SearchCode, color: "#f97316" },
    { name: "Vector DB", Icon: Hash, color: "#8b5cf6" },
    { name: "Neo4j", Icon: GitBranch, color: "#0284c7" },
    { name: "Vault", Icon: Key, color: "#d97706" },
  ],
  workflow: [
    { name: "Docker", Icon: Boxes, color: "#2496ed" },
    { name: "AWS", Icon: Cloud, color: "#f97316" },
    { name: "Git", Icon: GitCommit, color: "#111827" },
    { name: "Vercel", Icon: Zap, color: "#111827" },
    { name: "Actions", Icon: Workflow, color: "#2088ff" },
    { name: "Linux", Icon: Terminal, color: "#ca8a04" },
    { name: "Postman", Icon: MessageSquare, color: "#ef6c37" },
    { name: "K8s", Icon: Package, color: "#326ce5" },
    { name: "Security", Icon: ShieldCheck, color: "#10b981" },
    { name: "Nginx", Icon: Server, color: "#009639" },
  ],
};

// ─── Shared RAF + IO system ───────────────────────────────────────────────────
// ONE rAF loop + ONE visibilitychange listener for ALL cards combined.
// Cards register their own tick fn; when all are offscreen the loop pauses.

let rafId = 0;
let isVisible = true;
const tickSet = new Set();

function startSharedLoop() {
  if (rafId !== 0) return;
  const loop = () => {
    rafId = requestAnimationFrame(loop);
    if (!isVisible) return;
    for (const tick of tickSet) tick();
  };
  rafId = requestAnimationFrame(loop);
}

function stopSharedLoop() {
  cancelAnimationFrame(rafId);
  rafId = 0;
}

function registerTick(fn) {
  tickSet.add(fn);
  startSharedLoop();
}

function unregisterTick(fn) {
  tickSet.delete(fn);
  if (tickSet.size === 0) stopSharedLoop();
}

if (typeof document !== "undefined") {
  document.addEventListener(
    "visibilitychange",
    () => {
      isVisible = !document.hidden;
    },
    { passive: true },
  );
}

// ─── Card metadata (title + accent colour for the glow blob) ─────────────────
const CARDS = [
  { key: "interface", title: "Interface & Experience", blob: "#0ea5e9" },
  { key: "core", title: "Core & Intelligence", blob: "#a855f7" },
  { key: "data", title: "Data & Persistence", blob: "#10b981" },
  { key: "workflow", title: "DevOps & Workflow", blob: "#f97316" },
];

// ─── SkillCard ────────────────────────────────────────────────────────────────
const SkillCard = memo(function SkillCard({ skills, title, blob }) {
  const itemRefs = useRef([]);
  const cardRef = useRef(null);
  const rotRef = useRef(0);
  const inViewRef = useRef(false);

  useEffect(() => {
    const count = skills.length;

    // One IO per card — shares the module-level rAF loop
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    if (cardRef.current) io.observe(cardRef.current);

    const tick = () => {
      if (!inViewRef.current) return;

      rotRef.current += 0.25; // speed — tweak freely
      const rotation = rotRef.current;

      for (let i = 0; i < count; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const angle = (i / count) * 360 + rotation;
        const rad = (angle * Math.PI) / 180;
        const normalized = ((angle % 360) + 360) % 360;
        // "active" = item crests the front of the ellipse
        const isActive = normalized > 80 && normalized < 100;

        const x = 118 * Math.cos(rad);
        const y = 44 * Math.sin(rad);
        const scale = 0.62 + ((y + 44) / 88) * 0.46;
        const alpha = Math.min(1, (y + 44) / 88 + 0.28);

        // GPU-composited properties only — no layout thrashing
        el.style.transform = `translate(${x}px,${y + 18}px) scale(${scale})`;
        el.style.zIndex = String(Math.round(y + 100));
        el.style.opacity = String(alpha);

        const iconEl = el.querySelector(".sk-icon");
        const labelEl = el.querySelector(".sk-label");

        if (iconEl) {
          iconEl.style.borderColor = isActive
            ? skills[i].color
            : "rgba(0,0,0,0.07)";
          iconEl.style.backgroundColor = isActive
            ? `${skills[i].color}12`
            : "#f9fafb";
          iconEl.style.boxShadow = isActive
            ? `0 0 18px ${skills[i].color}28`
            : "none";
        }
        if (labelEl) {
          labelEl.style.opacity = isActive ? "1" : "0";
        }
      }
    };

    registerTick(tick);
    return () => {
      unregisterTick(tick);
      io.disconnect();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={cardRef}
      className="relative h-[340px] w-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Decorative accent glow — light & subtle on white bg */}
      <div
        className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-[80px] opacity-[0.12] pointer-events-none"
        style={{ backgroundColor: blob }}
      />

      {/* Card title */}
      <div className="relative z-20 pt-6 text-center">
        <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-400">
          {title}
        </h3>
      </div>

      {/* Orbit stage — absolutely positioned items are moved by the rAF tick */}
      <div className="relative w-full h-full flex justify-center items-center -mt-10">
        {skills.map((skill, index) => (
          <div
            key={`${title}-${skill.name}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="absolute flex flex-col items-center"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Icon bubble */}
            <div
              className="sk-icon p-2.5 rounded-full border bg-gray-50"
              style={{
                borderColor: "rgba(0,0,0,0.07)",
                transition:
                  "border-color 140ms, box-shadow 140ms, background-color 140ms",
              }}
            >
              <skill.Icon
                size={22}
                style={{ color: skill.color }}
                strokeWidth={1.6}
              />
            </div>

            {/* Label — appears only when item is at front */}
            <div
              className="sk-label absolute top-full whitespace-nowrap pt-2 pointer-events-none"
              style={{ opacity: 0, transition: "opacity 100ms" }}
            >
              <span
                className="text-[10px] font-bold tracking-widest uppercase"
                style={{ color: skill.color }}
              >
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header — matches Projects section style */}
        <div className="mb-12 text-center">
          <p className="text-xs font-mono tracking-widest text-cyan-500 uppercase mb-3">
            Tech Stack
          </p>

          {/* Accent Line */}
          <div className="w-16 h-[2px] bg-cyan-500 mx-auto mb-4 rounded-full"></div>

          <h3 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
            <span className="text-black">Skills &amp;</span>{" "}
            <span className="text-cyan-500">Expertise</span>
          </h3>
        </div>

        {/* 4-column orbit grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(({ key, title, blob }) => (
            <SkillCard
              key={key}
              skills={skillData[key]}
              title={title}
              blob={blob}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
