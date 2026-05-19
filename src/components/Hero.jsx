"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6 text-center sm:text-left pt-20">
      {/* Main Punchy Premium Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
        Hi, I&apos;m Ambar.
      </h1>

      {/* Narrative Intro Brief */}
      <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0 leading-relaxed font-normal">
        I build production-grade, high-fidelity web applications with a focus on
        seamless user experiences, immaculate code structure, and robust
        architectures.
      </p>

      {/* Action Trigger Buttons Stack */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-3">
        <a
          href="#projects"
          className="px-5 py-2.5 bg-gray-950 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm shadow-sm"
        >
          View Work
        </a>
        <a
          href="mailto:your.email@example.com"
          className="px-5 py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 text-sm"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
