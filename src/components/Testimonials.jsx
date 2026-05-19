"use client";
import React from "react";

const testimonials = [
  {
    quote:
      "Ambar possesses a rare blend of exceptional frontend clean layout skills coupled with structured, production-ready backend workflows.",
    author: "Pranav",
    role: "Project Collaborator",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6"
    >
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        Testimonials
      </h2>

      {/* Container Grid */}
      <div className="grid grid-cols-1 gap-6 w-full">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border border-gray-100 rounded-2xl italic text-gray-600 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <span className="text-5xl text-gray-200 absolute top-0 left-2 font-serif select-none">
              “
            </span>

            {/* Quote Text */}
            <p className="relative z-10 pl-6 text-sm leading-relaxed mb-4 text-center sm:text-left">
              {t.quote}
            </p>

            {/* Author Attribution */}
            <div className="pl-6 not-italic text-center sm:text-left">
              <h4 className="text-sm font-semibold text-gray-900">
                {t.author}
              </h4>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
