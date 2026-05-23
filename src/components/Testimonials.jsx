"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";

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

const SPEED = 0.045; // px per ms — ~45px/s at 60fps

export default function Testimonials() {
  const x = useMotionValue(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const trackRef = useRef(null);
  const halfWidthRef = useRef(0);

  // Pointer drag state
  const pointerStartXRef = useRef(0);
  const motionStartXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const velocityRef = useRef(0);

  // Measure the true pixel width of one card set; re-measure on resize
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        halfWidthRef.current = trackRef.current.scrollWidth / 2;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Auto-scroll: runs every frame, skipped while paused or dragging
  useAnimationFrame((_, delta) => {
    if (isPausedRef.current || isDraggingRef.current) return;
    const half = halfWidthRef.current;
    if (!half) return;
    let current = x.get();
    current -= delta * SPEED;
    if (current <= -half) current += half;
    x.set(current);
  });

  // Normalise x into the seamless loop range [-half, 0)
  const normalise = (val) => {
    const half = halfWidthRef.current;
    if (!half) return val;
    let n = val % half;
    if (n > 0) n -= half;
    return n;
  };

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    pointerStartXRef.current = e.clientX;
    motionStartXRef.current = x.get();
    lastPointerXRef.current = e.clientX;
    velocityRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - lastPointerXRef.current;
    velocityRef.current = delta;
    lastPointerXRef.current = e.clientX;

    const half = halfWidthRef.current;
    if (!half) return;

    let newX = x.get() + delta;
    if (newX > 0) newX -= half;
    if (newX <= -half) newX += half;
    x.set(newX);
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const v = velocityRef.current;
    const half = halfWidthRef.current;

    if (Math.abs(v) > 1 && half) {
      const momentum = v * 18;
      const target = normalise(x.get() + momentum);
      animate(x, target, {
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        onComplete: () => {
          isPausedRef.current = false;
        },
      });
    } else {
      isPausedRef.current = false;
    }
  };

  return (
    /* बदल: पूर्ण सेक्शन बॅकग्राउंड आता ट्रान्सपरंट (bg-transparent) केला आहे */
    <section
      id="testimonials"
      className="w-full py-20 overflow-hidden bg-transparent relative z-10"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h3 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-slate-900">
          Kind Words From{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
            }}
          >
            Satisfied Clients
          </span>
        </h3>
        <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-lg">
          What the people I&apos;ve worked with have to say.
        </p>
      </div>

      {/* Marquee Container with Fade Mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          ref={trackRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing py-4 px-2"
          style={{ x }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            /* बदल: कार्ड आता प्युअर व्हाईट (bg-white/70) आणि काचेच्या फिनिशिंगमध्ये (backdrop-blur) आहे 
               त्यासोबत मजकूर अगदी क्लिअर दिसण्यासाठी टेक्स्ट कलर्स डार्क केले आहेत */
            <div
              key={index}
              className="flex flex-col justify-between shrink-0
                         w-[280px] sm:w-[350px] md:w-[400px] min-h-[280px]
                         p-7 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm
                         hover:shadow-xl hover:border-blue-100 transition-all duration-300
                         select-none"
            >
              {/* Top row: quote mark + company pill */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-5xl text-blue-500 font-serif leading-none select-none">
                  &ldquo;
                </span>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase text-blue-600
                             bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-full"
                >
                  {t.company}
                </span>
              </div>

              {/* Testimonial text - All Clear Visibility */}
              <p className="text-sm leading-relaxed italic text-slate-600 flex-grow mb-6">
                {t.text}
              </p>

              {/* Divider + Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden shrink-0
                             ring-2 ring-blue-100 bg-slate-100"
                >
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-xs font-bold text-blue-600">
                      {t.name.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
