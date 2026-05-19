"use client";
import React from "react";
import { MapPin, Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto py-16 px-6 sm:px-12 scroll-mt-24"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
          Get In Touch
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Let&apos;s Build Something Legendary
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Location", value: "Mumbai, India" },
            {
              icon: Mail,
              label: "Email",
              value: "ambarubale@gmail.com",
              href: "mailto:ambarubale@gmail.com?subject=New%20Message%20from%20Portfolio",
            },
            { icon: Phone, label: "Phone", value: "+91 9579377966" },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat on WhatsApp",
              href: "https://wa.me/919579377966?text=Hi%20Ambar%20Ubale,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-xs text-neutral-500 hover:text-blue-600 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-xs text-neutral-500">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID_HERE"
          method="POST"
          className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={3}
              className="w-full px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none transition-all"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-900 text-white text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white hover:text-neutral-900 hover:border hover:border-neutral-900 transition-all duration-300"
          >
            Send Message <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
