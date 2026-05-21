"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 scroll-mt-24 relative z-10 w-full overflow-hidden"
    >
      {/*
        Main Container:
        W-full background cover sathi,
        pan content la center madhe thevnyasathi max-w-[1400px] vaparla aahe.
      */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 md:pl-24 md:pr-12 lg:pl-32 lg:pr-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Right Side: Image (Mobile var hi pahila disel) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[420px] flex justify-center order-1 lg:order-2"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[350px] lg:max-w-none">
              {/* Outer Decorative Glow/Gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-lg">
                <img
                  src="/am1.png"
                  alt="Ambar - Software Developer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Background Frame */}
              <div className="absolute -inset-4 border border-cyan-400/20 rounded-2xl -z-10 hidden sm:block" />

              {/* Bottom Right Blur Effect */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-cyan-400/15 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <h2 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-2">
              About
            </h2>

            {/* Accent Line */}
            <div className="w-16 h-[2px] bg-cyan-500 mb-5 rounded-full"></div>

            <h3 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
              <span className="text-black">Get to</span>{" "}
              <span className="text-cyan-500">Know Me</span>
            </h3>

            <div className="space-y-4 text-black text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am Ambar, a Software Developer who enjoys building efficient,
                scalable, and user-friendly web applications. I have hands-on
                experience in both frontend and backend technologies, and I
                focus on writing clean code and creating smooth user
                experiences.
              </p>
              <p>
                My journey started with curiosity about how digital products
                work, which grew into building real-world applications. I also
                explore AI-based features and try to integrate them into
                projects wherever useful. I enjoy solving problems and
                continuously learning new technologies.
              </p>
            </div>

            {/* Stats Highlights */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200">
              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">15+</div>
                <div className="text-xs text-gray-400">Projects Completed</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">
                  Full Stack
                </div>
                <div className="text-xs text-gray-400">Development Focus</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl font-semibold text-cyan-500">
                  Real-Time
                </div>
                <div className="text-xs text-gray-400">System Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
