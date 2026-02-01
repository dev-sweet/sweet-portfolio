"use client";

import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-[#050505] text-white py-20 px-20 relative overflow-hidden">
      {/* Background Glow - To make the glass "pop" */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left Side: Content & Info Cards */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Contact
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in touch</h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Have questions or ready to transform your business with AI
            automation?
          </p>

          <div className="space-y-4">
            <ContactInfoCard
              icon={<Mail size={20} />}
              title="Email us"
              value="hello@youragency.com"
            />
            <ContactInfoCard
              icon={<Phone size={20} />}
              title="Call us"
              value="+1 (555) 000-0000"
            />
            <ContactInfoCard
              icon={<MapPin size={20} />}
              title="Our location"
              value="Crosby Street, NY, US"
            />
          </div>
        </div>

        {/* Right Side: The Glass Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
          <form className="space-y-6">
            <GlassInput label="Name" type="text" placeholder="Your Name" />
            <GlassInput
              label="Email"
              type="email"
              placeholder="Email Address"
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
              />
            </div>

            <button className="w-full bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

/* --- Sub-components for cleaner code --- */

const ContactInfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
    <div className="flex items-center gap-5">
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{title}</p>
        <p className="text-sm text-gray-200">{value}</p>
      </div>
    </div>
    <ArrowUpRight
      size={20}
      className="text-gray-600 group-hover:text-white transition-colors"
    />
  </div>
);

const GlassInput = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-400 ml-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
    />
  </div>
);

export default ContactForm;
