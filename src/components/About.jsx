"use client";
import { motion } from "framer-motion";
import { ArrowDownToLine, Briefcase, Users, FolderKanban } from "lucide-react";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Ambar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="py-20 sm:py-32 relative w-full overflow-hidden bg-[#f8fafc]"
    >
      {/* Modern Stylish Background */}
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

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Enlarged Image Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[480px] flex-shrink-0"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-2 bg-cyan-500 rounded-3xl opacity-20 rotate-0 group-hover:rotate-2 transition-transform duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/50 rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out">
                <img
                  src="/am1.png"
                  alt="Ambar - Software Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">
                About
              </h2>
              <div className="w-16 h-[2px] bg-cyan-500 mb-5 rounded-full"></div>
              <h3 className="text-3xl sm:text-4xl font-semibold mb-6">
                <span className="text-black">Get to</span>{" "}
                <span className="text-cyan-500">Know Me</span>
              </h3>

              <div className="space-y-4 text-gray-800 text-base leading-relaxed font-medium">
                <p>
                  I am Ambar, a Software Developer who enjoys building
                  efficient, scalable, and user-friendly web applications. I
                  have hands-on experience in both frontend and backend
                  technologies, and I focus on writing clean code and creating
                  smooth user experiences.
                </p>
                <p>
                  My journey started with curiosity about how digital products
                  work, which grew into building real-world applications. I also
                  explore AI-based features and try to integrate them into
                  projects wherever useful.
                </p>
              </div>
            </div>

            {/* Button: Black with Cyan Hover */}
            <button
              onClick={handleDownload}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-900 bg-slate-900 text-white font-medium text-[11px] tracking-[0.15em] uppercase hover:bg-cyan-500 hover:border-cyan-500 shadow-sm transition-all"
            >
              Download Resume
              <ArrowDownToLine className="w-3.5 h-3.5" />
            </button>

            {/* Center-Aligned Stats Cards: Cyan Text */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {[
                { icon: Briefcase, title: "Experience", desc: "2+ Years" },
                { icon: Users, title: "Clients", desc: "10+ Total" },
                {
                  icon: FolderKanban,
                  title: "Projects",
                  desc: "15+ Completed",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center gap-2"
                >
                  <item.icon className="w-6 h-6 text-cyan-500 mb-1" />
                  <div>
                    <div className="text-sm font-bold text-black">
                      {item.title}
                    </div>
                    <div className="text-xs font-medium text-gray-600">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
