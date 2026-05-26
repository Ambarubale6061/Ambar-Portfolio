"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ambarubale@gmail.com",
    href: "mailto:ambarubale@gmail.com?subject=New%20Message%20from%20Portfolio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9579377966",
    href: "tel:+919579377966",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919579377966?text=Hi%20Ambar%20Ubale,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
  },
];

const INITIAL = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] relative overflow-hidden">
      {/* Modern Stylish Background Matched From about.jsx */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Decorative Blurs */}
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[140px]" />

        {/* Subtle Grid Lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto py-16 px-6 sm:px-12 scroll-mt-24 bg-transparent relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-3xl sm:text-5xl font-bold mb-4 leading-tight text-black">
            Get In{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)",
              }}
            >
              Touch
            </span>
          </p>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 mx-auto mb-5 rounded-full" />
          <p className="text-gray-800 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side: Contact Info Boxes */}
          <div className="space-y-4">
            {contactDetails.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl group hover:border-blue-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0 shadow-xs">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-blue-500 mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-slate-800">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/60 space-y-4"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-slate-800 outline-none transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-slate-800 outline-none transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-slate-800 outline-none transition-all disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={3}
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-400 focus:border-blue-400 text-slate-800 outline-none transition-all resize-none disabled:opacity-60"
              />
            </div>

            {/* Success Banner */}
            {status === "success" && (
              <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm font-medium animate-fadeIn">
                <CheckCircle className="w-4 h-4 shrink-0" />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {/* Error Banner */}
            {status === "error" && (
              <div className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium animate-fadeIn">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-slate-900 text-white text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 border border-transparent transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-xs"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
