"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pushkraj Musmade",
    role: "Software Engineer",
    company: "BharatGo",
    image: "/pushkraj.jpeg",
    text: "Ambar combines technical knowledge with a strong understanding of modern web design. He is dependable, hardworking, and always ready to learn new technologies.",
  },
  {
    name: "Amol Kshirsagar",
    role: "Digital Engineering Staff Engineer",
    company: "NTT DATA",
    image: "/amol.jpg",
    text: "Ambar is a focused frontend developer with a good understanding of modern UI practices. He builds clean and responsive interfaces and is always eager to learn and improve.",
  },
  {
    name: "Durgesh Gadekar",
    role: "AEM Producer",
    company: "Accenture",
    image: "/durgesh.jpg",
    text: "Ambar is passionate about development and consistently delivers high-quality work. His dedication, creativity, and teamwork skills make him stand out as a developer.",
  },
  {
    name: "Amrut Kshirsagar",
    role: "Staff Engineer",
    company: "Altimetrik",
    image: "/amrut.jpg",
    text: "Ambar is a driven and talented full-stack developer with a great problem-solving mindset. He consistently delivers high-quality work and has a strong grip on technologies like React, Node.js, and modern web tools.",
  },
  {
    name: "Suresh Kandelkar",
    role: "Android Developer",
    company: "Freelance",
    image: "/suresh.jpg",
    text: "Ambar is reliable, skilled, and always eager to learn new technologies. He's the kind of developer who makes teamwork smooth and results outstanding.",
  },
];

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="w-full py-20 overflow-hidden bg-white"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
          Testimonials
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Kind Words From Satisfied Clients
        </h3>
      </div>

      {/* Marquee Container with Fade Mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          animate={{ x: isPaused ? 0 : ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 border border-gray-100 rounded-2xl italic text-gray-600 flex flex-col justify-between shrink-0 
              w-[280px] sm:w-[350px] md:w-[400px] min-h-[280px] transition-all hover:bg-gray-100/50"
            >
              <span className="text-5xl text-gray-200 font-serif select-none">
                “
              </span>

              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-4">
                {t.company}
              </p>

              <p className="text-sm leading-relaxed mb-8 flex-grow">{t.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-200">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-xs font-bold">
                      {t.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
