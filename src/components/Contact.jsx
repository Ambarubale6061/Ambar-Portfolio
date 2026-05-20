"use client";
import React, { useState } from "react";
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
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
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
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto py-16 px-6 sm:px-12 scroll-mt-24"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xs font-mono tracking-widest text-cyan-500 uppercase mb-3">
          Get In Touch
        </h2>

        {/* Accent Line */}
        <div className="w-16 h-[2px] bg-cyan-500 mx-auto mb-4 rounded-full"></div>

        <h3 className="text-2xl sm:text-4xl font-semibold mb-6 leading-tight">
          <span className="text-black">Let&apos;s Build Something</span>{" "}
          <span className="text-cyan-500">Legendary</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info Boxes */}
        <div className="space-y-3">
          {contactDetails.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-[#efefed] border border-gray-200 rounded-2xl group hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-neutral-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm font-semibold text-neutral-800 hover:text-blue-600 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-neutral-800">
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
          className="bg-[#efefed] p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none transition-all disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none transition-all disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none transition-all disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={3}
              disabled={status === "loading"}
              className="w-full px-4 py-2 text-sm bg-white border border-neutral-200 rounded-lg focus:ring-1 focus:ring-blue-400 outline-none transition-all resize-none disabled:opacity-60"
            />
          </div>

          {/* Success Banner */}
          {status === "success" && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm font-medium">
              <CheckCircle className="w-4 h-4 shrink-0" />
              Message sent! I&apos;ll get back to you soon.
            </div>
          )}

          {/* Error Banner */}
          {status === "error" && (
            <div className="flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-neutral-900 text-white text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-neutral-900 hover:border hover:border-neutral-900 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
    </section>
  );
}
