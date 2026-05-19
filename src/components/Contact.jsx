"use client";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 text-center sm:text-left space-y-6 scroll-mt-24"
    >
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
        Get In Touch
      </h2>

      {/* Content Block */}
      <div className="max-w-xl mx-auto sm:mx-0 space-y-4">
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          I&apos;m currently open to new software development opportunities,
          freelance projects, or just chatting about scalable web architecture.
          Drop me a line if you want to collaborate!
        </p>

        {/* Email Connection Link */}
        <div className="pt-2">
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-blue-600 underline underline-offset-4 transition-colors duration-200"
          >
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
