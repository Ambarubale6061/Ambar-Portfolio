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
    <div className="min-h-dvh w-full relative bg-gradient-to-br from-[#eef3f6] via-[#e3edf2] to-[#d6e6ee] text-slate-800 selection:bg-blue-100 flex flex-col justify-between antialiased overflow-x-hidden overflow-y-auto">
      {/* Blobs — constrained inside a fixed inset wrapper so they cannot cause scrollbar */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-15%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#cfe3ea] rounded-full filter blur-[100px] md:blur-[140px] opacity-70 animate-float-slow" />
        <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#bcd6df] rounded-full filter blur-[90px] md:blur-[120px] opacity-60 animate-float-delayed" />
        <div className="absolute top-[35%] left-[-20%] w-[600px] h-[600px] bg-[#cfe3ea] rounded-full filter blur-[120px] opacity-50 animate-float-slow" />
        <div className="absolute top-[60%] right-[-15%] w-[700px] h-[700px] bg-[#bcd6df] rounded-full filter blur-[130px] opacity-50 animate-float-delayed" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#cfe3ea] rounded-full filter blur-[100px] md:blur-[130px] opacity-60 animate-float-slow" />
      </div>

      <Navbar />

      <main className="w-full relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
