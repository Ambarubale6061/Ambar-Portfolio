"use client";
import { useEffect, useRef } from "react";
import {
  Code2,
  Server,
  Layout,
  BrainCircuit,
  Search,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    blurb: "Building scalable web applications from frontend to backend.",
    deliverables: ["MERN Stack Apps", "REST APIs", "Deployment"],
    accent: "from-cyan-400 to-blue-600",
    shadow: "rgba(6,182,212,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(6,182,212,0.18)",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    blurb: "Integrating AI features to enhance modern applications.",
    deliverables: ["OpenAI APIs", "Chatbot Features", "Automation"],
    accent: "from-violet-400 to-fuchsia-600",
    shadow: "rgba(139,92,246,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(139,92,246,0.18)",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    blurb: "Creating responsive and visually engaging user interfaces.",
    deliverables: ["React Apps", "Responsive UI", "Animations"],
    accent: "from-pink-400 to-rose-600",
    shadow: "rgba(236,72,153,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(236,72,153,0.18)",
  },
  {
    icon: Server,
    title: "Backend Development",
    blurb: "Developing secure and scalable backend systems.",
    deliverables: ["Node.js APIs", "Authentication", "Database Integration"],
    accent: "from-emerald-400 to-teal-600",
    shadow: "rgba(16,185,129,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(16,185,129,0.18)",
  },
  {
    icon: Search,
    title: "Optimization",
    blurb: "Improving performance, speed, and code quality.",
    deliverables: ["Performance Boost", "Code Refactoring", "Best Practices"],
    accent: "from-sky-400 to-indigo-600",
    shadow: "rgba(56,189,248,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(56,189,248,0.18)",
  },
  {
    icon: Database,
    title: "Database Design",
    blurb: "Designing efficient and scalable data systems.",
    deliverables: ["Schema Design", "CRUD Systems", "Optimization"],
    accent: "from-violet-400 to-fuchsia-600",
    shadow: "rgba(139,92,246,0.22)",
    bg: "from-gray-50 to-slate-100/80",
    border: "rgba(139,92,246,0.18)",
  },
];

export default function Services() {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svc-animate-in");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px 0px" },
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("svc-animate-in");
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-60px 0px" },
    );

    if (headingRef.current) headingObserver.observe(headingRef.current);
    cardRefs.current.forEach((el) => el && cardObserver.observe(el));

    return () => {
      headingObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      className="py-20 sm:py-28 scroll-mt-24 relative w-full overflow-hidden bg-[#f8fafc]"
    >
      <style>{`
        .svc-fade {
          opacity: 0;
          transform: translateY(var(--svc-from-y, 30px));
        }
        .svc-fade.svc-animate-in {
          animation: svcFadeUp var(--svc-duration, 0.55s) ease-out forwards;
          animation-delay: var(--svc-delay, 0s);
        }
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(var(--svc-from-y, 30px)); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .service-card {
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 38px -10px var(--card-shadow), 0 4px 14px rgba(0,0,0,0.06);
        }
        .service-card:active {
          transform: scale(0.985);
          transition-duration: 0.1s;
        }
        .icon-box {
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .icon-box:hover {
          transform: rotate(-6deg);
        }
      `}</style>

      {/* Modern Stylish Background Matched From about.jsx */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Decorative Blurs */}
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[140px]" />

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div
          ref={headingRef}
          className="svc-fade text-center mb-14"
          style={{
            "--svc-from-y": "20px",
            "--svc-duration": "0.7s",
          }}
        >
          <p className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-black">
            My{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              }}
            >
              Services
            </span>
          </p>

          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />

          <p className="text-gray-800 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Solutions focused on performance, scalability, and real-world
            impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className={`svc-fade service-card group relative rounded-2xl bg-gradient-to-br ${s.bg} p-6 overflow-hidden cursor-default`}
                style={{
                  "--svc-from-y": "30px",
                  "--svc-delay": `${i * 0.06}s`,
                  "--card-shadow": s.shadow,
                  border: `1px solid ${s.border}`,
                  willChange: "transform",
                }}
              >
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-[0.12] blur-xl transition-opacity duration-500 -z-10`}
                />

                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${s.accent} opacity-[0.12] blur-2xl pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.28]`}
                />

                <div
                  className={`icon-box relative w-11 h-11 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white mb-5`}
                  style={{ boxShadow: `0 8px 24px -8px ${s.shadow}` }}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.2} />
                  <span
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${s.accent} opacity-50 blur-md -z-10`}
                  />
                </div>

                <h4 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {s.blurb}
                </p>

                <ul className="space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-xs text-gray-500 font-normal"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.accent} flex-shrink-0`}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
