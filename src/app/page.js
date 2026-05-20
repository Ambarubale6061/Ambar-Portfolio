"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // 1. इथून डावे-उजवे मोठे पॅडिंग्स (px-32 वगैरे) पूर्ण काढले, जेणेकरून लेआउट पूर्ण स्क्रीन व्यापेल
    <div className="min-h-screen bg-[#faf9f7] text-gray-900 selection:bg-blue-100 flex flex-col justify-between relative transition-colors duration-300 w-full overflow-x-hidden">
      {/* High-End Soft Backdrop */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none" />

      {/* Sticky Top Navbar Element */}
      <Navbar />

      {/* 2. 'max-w-3xl' पूर्णपणे हटवले आणि 'w-full' केले!
        आता याच्या आतले सर्व सेक्शन्स डावीकडून उजवीकडे पूर्ण स्क्रीनवर पसरतील.
      */}
      <main className="w-full pt-28 pb-12 space-y-32 z-10">
        {/* प्रत्येक सेक्शन आता स्वतःची रुंदी स्वतः मॅनेज करेल */}
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Full Width Footer Area */}
      <Footer />
    </div>
  );
}
