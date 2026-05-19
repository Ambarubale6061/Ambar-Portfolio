"use client";
import React from "react";
import { Layout, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Architecture",
    description:
      "Crafting ultra-fast, responsive, and pixel-perfect UIs using Next.js, React, and Tailwind v4 with smooth interactive states.",
    icon: <Layout className="w-5 h-5 text-gray-900" />,
  },
  {
    title: "Backend & Database",
    description:
      "Designing structured database schemas, restful APIs, and secure real-time services using Node.js, Supabase, and MongoDB.",
    icon: <Server className="w-5 h-5 text-gray-900" />,
  },
];

export default function Services() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 lg:px-32 space-y-6">
      {/* Section Heading */}
      <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase text-center sm:text-left">
        Services
      </h2>

      {/* Two-Column Service Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50/50 border border-gray-100 rounded-2xl space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            {/* Minimal White Icon Wrapper */}
            <div className="p-2 bg-white border border-gray-200 w-fit rounded-lg shadow-sm">
              {service.icon}
            </div>

            {/* Service Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>

            {/* Service Description Brief */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
