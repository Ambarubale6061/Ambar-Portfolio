"use client";
import React, { useRef, useEffect, memo } from "react";
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
    { name: "Next.js", Icon: Layers, color: "#a0aec0" },
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
    { name: "Express", Icon: Server, color: "#a0aec0" },
  ],
  data: [
    { name: "PostgreSQL", Icon: DbIcon, color: "#6366f1" },
    { name: "Supabase", Icon: Zap, color: "#3ecf8e" },
    { name: "MongoDB", Icon: HardDrive, color: "#16a34a" },
    { name: "Redis", Icon: Zap, color: "#ef4444" },
    { name: "Prisma", Icon: Braces, color: "#a0aec0" },
    { name: "Firebase", Icon: Cloud, color: "#f59e0b" },
    { name: "Elastic", Icon: SearchCode, color: "#f97316" },
    { name: "Vector DB", Icon: Hash, color: "#8b5cf6" },
    { name: "Neo4j", Icon: GitBranch, color: "#0284c7" },
    { name: "Vault", Icon: Key, color: "#d97706" },
  ],
  workflow: [
    { name: "Docker", Icon: Boxes, color: "#2496ed" },
    { name: "AWS", Icon: Cloud, color: "#f97316" },
    { name: "Git", Icon: GitCommit, color: "#a0aec0" },
    { name: "Vercel", Icon: Zap, color: "#a0aec0" },
    { name: "Actions", Icon: Workflow, color: "#2088ff" },
    { name: "Linux", Icon: Terminal, color: "#ca8a04" },
    { name: "Postman", Icon: MessageSquare, color: "#ef6c37" },
    { name: "K8s", Icon: Package, color: "#326ce5" },
    { name: "Security", Icon: ShieldCheck, color: "#10b981" },
    { name: "Nginx", Icon: Server, color: "#009639" },
  ],
};

// ─── Shared RAF + IO system ───────────────────────────────────────────────────
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

// ─── Card metadata ────────────────────────────────────────────────────────────
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

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );
    if (cardRef.current) io.observe(cardRef.current);

    const tick = () => {
      if (!inViewRef.current) return;

      rotRef.current += 0.25;
      const rotation = rotRef.current;

      for (let i = 0; i < count; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const angle = (i / count) * 360 + rotation;
        const rad = (angle * Math.PI) / 180;

        // ── Increased horizontal radius to fill the wider 2-column card
        const x = 200 * Math.cos(rad);
        const y = 44 * Math.sin(rad);
        const scale = 0.62 + ((y + 44) / 88) * 0.46;

        // Normalised angle 0–360
        const norm = ((angle % 360) + 360) % 360;

        // ── Narrowed visibility windows (18° → 10°) so only one item per slot
        // Centre item: within ±10° of the front (270°)
        const distFromFront = Math.min(
          Math.abs(norm - 270),
          360 - Math.abs(norm - 270),
        );
        const isCenter = distFromFront < 10;

        // Side items: within ±10° of 210° or 330°
        const distFrom210 = Math.min(
          Math.abs(norm - 210),
          360 - Math.abs(norm - 210),
        );
        const distFrom330 = Math.min(
          Math.abs(norm - 330),
          360 - Math.abs(norm - 330),
        );
        const isSide = distFrom210 < 10 || distFrom330 < 10;

        // Only show center + two side items; hide everything else
        const isItemVisible = isCenter || isSide;
        const alpha = isItemVisible ? 1 : 0;
        const blur = isCenter ? 0 : isSide ? 3 : 0;
        const sideScale = isSide ? scale * 0.82 : scale;

        el.style.transform = `translate(${x}px,${y + 18}px) scale(${isCenter ? scale : sideScale})`;
        el.style.zIndex = String(isCenter ? 200 : isSide ? 100 : 0);
        el.style.opacity = String(alpha);
        el.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
        el.style.pointerEvents = isItemVisible ? "auto" : "none";

        // Box style per state
        const boxEl = el.querySelector(".sk-box");
        if (boxEl) {
          if (isCenter) {
            // ── Lightened: #1c1c1e → #2d2d31
            boxEl.style.backgroundColor = "#2d2d31";
            boxEl.style.border = `1px solid rgba(255,255,255,0.12)`;
            boxEl.style.boxShadow = `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)`;
            boxEl.style.transform = "scale(1.08)";
          } else {
            // ── Lightened: #2a2a2e → #38383c
            boxEl.style.backgroundColor = "#38383c";
            boxEl.style.border = `1px solid rgba(255,255,255,0.07)`;
            boxEl.style.boxShadow = `0 2px 10px rgba(0,0,0,0.22)`;
            boxEl.style.transform = "scale(1)";
          }
        }

        // Label colour per state
        const labelEl = el.querySelector(".sk-label");
        if (labelEl) {
          labelEl.style.color = isCenter ? "#ffffff" : "#9ca3af";
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
      className="relative h-[340px] w-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(145deg, #e8e7e5 0%, ${blob}18 100%)`,
        border: `1px solid ${blob}45`,
        boxShadow: `0 2px 8px rgba(0,0,0,0.10), 0 0 0 1px ${blob}18`,
      }}
    >
      {/* Decorative accent glow */}
      <div
        className="absolute -top-16 -left-16 w-56 h-56 rounded-full blur-[90px] opacity-[0.22] pointer-events-none"
        style={{ backgroundColor: blob }}
      />
      <div
        className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-[70px] opacity-[0.10] pointer-events-none"
        style={{ backgroundColor: blob }}
      />

      {/* Card title */}
      <div className="relative z-20 pt-6 text-center">
        <h3
          className="text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{ color: blob }}
        >
          {title}
        </h3>
      </div>

      {/* Orbit stage */}
      <div className="relative w-full h-full flex justify-center items-center -mt-10">
        {skills.map((skill, index) => (
          <div
            key={`${title}-${skill.name}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="absolute flex flex-col items-center"
            style={{
              willChange: "transform, opacity, filter",
              // ── Reduced transition time (120ms → 50ms) to minimise ghost overlap
              transition: "filter 50ms ease, opacity 50ms ease",
            }}
          >
            {/* Icon + name box */}
            <div
              className="sk-box flex flex-col items-center gap-2 px-3 py-3 rounded-2xl flex-shrink-0"
              style={{
                // ── Lightened default: #2a2a2e → #38383c
                backgroundColor: "#38383c",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.22)",
                minWidth: "76px",
                transition:
                  "background-color 140ms ease, box-shadow 140ms ease, transform 140ms ease",
              }}
            >
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                <skill.Icon
                  size={24}
                  style={{ color: skill.color }}
                  strokeWidth={1.6}
                />
              </div>
              <span
                className="sk-label text-[9px] font-semibold tracking-wide text-center leading-tight"
                style={{ color: "#9ca3af", transition: "color 140ms ease" }}
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
        {/* Section header */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
            <span className="text-gray-900">Skills &amp;</span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              }}
            >
              Expertise
            </span>
          </h3>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-lg">
            Tools and technologies used to build modern web applications.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
