"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassInput from "./GlassInput";
import toast from "react-hot-toast";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const offsets = {
    up: { x: 0, y: 24 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ContactForm = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      name: formData.name.trim() ? "" : "Full Name is required",
      email: formData.email.trim() ? "" : "Email Address is required",
      message: formData.message.trim() ? "" : "Message content is required",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    const sendEmailPromise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });

    toast.promise(sendEmailPromise, {
      loading: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message.",
    });

    try {
      await sendEmailPromise;
      setFormData({ name: "", email: "", message: "" });
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="py-0 bg-transparent text-white relative overflow-hidden z-10 w-full"
    >
      <div className="w-full relative">
        <div className="space-y-12 lg:space-16 items-start">

          {/* Left Column info */}
          <div className="flex flex-col gap-6 text-left">
            {/* Pulsing Badge */}
            <Reveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 self-start">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse shadow-md shadow-[#8B5CF6]/20" />
                <span className="text-[10px] font-mono text-[#667386] uppercase tracking-widest font-bold">
                  CONNECT
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.08}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F1F5F9] tracking-tight leading-[1.1]">
                Start a
                <span className="ml-3 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Dialogue
                </span>
              </h2>
            </Reveal>

            {/* Bio text */}
            <Reveal direction="up" delay={0.14}>
              <p className="text-[#A1ACBA] text-sm sm:text-base leading-relaxed font-light max-w-sm">
                Currently inviting new high-impact projects and senior full-stack opportunities. Let&apos;s discuss your roadmap.
              </p>
            </Reveal>
          </div>

          {/* Right Column Form */}
          <Reveal direction="right" delay={0.2} className="h-full">
            <div className="bg-[#0D1118] border border-[#1C2633] rounded-[28px] p-6 md:p-8 backdrop-blur-md shadow-2xl">

              {/* Endpoint signature */}
              <Reveal direction="up" delay={0.28}>
                <p className="font-mono text-[10px] text-[#3B82F6] tracking-wider mb-6 select-none font-bold">
                  // POST /api/contact
                </p>
              </Reveal>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <Reveal direction="up" delay={0.32}>
                  <GlassInput
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </Reveal>

                <Reveal direction="up" delay={0.38}>
                  <GlassInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </Reveal>

                <Reveal direction="up" delay={0.44}>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-mono text-[#667386] ml-1 uppercase tracking-widest font-bold">
                      How can I assist?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How can I assist?"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-[#080B10] border rounded-xl p-4 text-[#F1F5F9] text-sm placeholder:text-[#667386] font-mono focus:outline-none focus:ring-1 transition-all resize-none ${errors.message
                        ? "border-[#F43F5E]/50 focus:ring-[#F43F5E]/30 focus:border-[#F43F5E]"
                        : "border-[#1C2633] focus:ring-[#3B82F6]/30 focus:border-[#3B82F6]"
                        }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-[#F43F5E] font-mono mt-0.5 ml-1">{errors.message}</p>
                    )}
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.01, y: -0.5 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className={`cursor-hover w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-xs font-mono uppercase tracking-widest ${sent
                      ? "bg-[#22C55E] text-zinc-950 shadow-lg shadow-[#22C55E]/20"
                      : "bg-[#3B82F6] hover:bg-[#60A5FA] text-white shadow-lg shadow-[#3B82F6]/10"
                      }`}
                  >
                    {sent ? (
                      <span>TRANSMISSION_COMPLETE ✓</span>
                    ) : (
                      <>
                        SEND TRANSMISSION
                        <ArrowRight size={14} />
                      </>
                    )}
                  </motion.button>
                </Reveal>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
