"use client";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6 scroll-mt-24"
    >
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        About Me
      </h2>

      {/* Content Container */}
      <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
        <p>
          I am a passionate{" "}
          <strong className="text-gray-900 font-semibold">
            Full Stack Web Developer
          </strong>{" "}
          who loves turning complex problems into elegant, production-ready
          applications. With a solid foundation in computer technology, I
          specialize in building robust digital ecosystems that seamlessly
          bridge immaculate user interfaces with scalable backend logic.
        </p>
        <p>
          My development philosophy is centered around code integrity, semantic
          structures, and performance optimization. I deliberately avoid
          half-baked simulations, preferring to build deep, real-time
          integrations with live databases that stand up to real-world
          production demands.
        </p>
      </div>
    </section>
  );
}
