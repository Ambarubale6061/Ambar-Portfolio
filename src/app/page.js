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
    /* मुख्य बदल: 'min-h-dvh' (Dynamic Viewport Height) मुळे रिफ्रेश केल्यानंतरही 
       ब्राउझर एक्स्ट्रा जागा बनवू शकणार नाही, आणि 'justify-between' फुटरला खालीच खिळवून ठेवेल */
    <div className="min-h-dvh w-full relative bg-gradient-to-br from-[#eef3f6] via-[#e3edf2] to-[#d6e6ee] text-slate-800 selection:bg-blue-100 flex flex-col justify-between antialiased overflow-x-hidden">
      {/* --- प्रीमियम ॲनिमेटेड सॉफ्ट बॅकग्राउंड शेप्स (Blobs) --- */}
      <div className="absolute top-[-5%] left-[-15%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#cfe3ea] rounded-full filter blur-[100px] md:blur-[140px] opacity-70 pointer-events-none z-0 animate-float-slow" />
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#bcd6df] rounded-full filter blur-[90px] md:blur-[120px] opacity-60 pointer-events-none z-0 animate-float-delayed" />
      <div className="absolute top-[35%] left-[-20%] w-[600px] h-[600px] bg-[#cfe3ea] rounded-full filter blur-[120px] opacity-50 pointer-events-none z-0 animate-float-slow" />
      <div className="absolute top-[60%] right-[-15%] w-[700px] h-[700px] bg-[#bcd6df] rounded-full filter blur-[130px] opacity-50 pointer-events-none z-0 animate-float-delayed" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#cfe3ea] rounded-full filter blur-[100px] md:blur-[130px] opacity-60 pointer-events-none z-0 animate-float-slow" />

      {/* --- मुख्य लेआउट रचना --- */}
      <Navbar />

      {/* 'w-full' आणि रॅपर व्यवस्थित सेट केला आहे */}
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

      {/* फुटर आता परमनंट तळाशी लॉक झाला आहे */}
      <Footer />
    </div>
  );
}
