"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, ArrowRight, ShieldCheck } from "lucide-react";
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
      className="md:py-24 py-16 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent text-white relative overflow-hidden z-10"
    >
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* Left Column info */}
          <div className="flex flex-col gap-6 text-left">
            {/* Pulsing Badge */}
            <Reveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 self-start">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-md shadow-purple-500/20" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  CONNECT
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.08}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Start a <br />
                <span className="bg-gradient-to-r from-cyan-400 to-[#3b82f6] bg-clip-text text-transparent">
                  Dialogue
                </span>
              </h2>
            </Reveal>

            {/* Bio text */}
            <Reveal direction="up" delay={0.14}>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-sm">
                Currently inviting new high-impact projects and senior full-stack opportunities. Let&apos;s discuss your roadmap.
              </p>
            </Reveal>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 mt-4">
              {/* Primary Email */}
              <Reveal direction="left" delay={0.2}>
                <a
                  href="sweetali0520@gmail.com"
                  className="cursor-hover flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/45 border border-zinc-850 hover:border-cyan-400 transition-colors duration-300"
                >
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-bold block">
                      EMAIL_PRIMARY
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 mt-1 block">
                      sweetali0520@gmail.com
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Secure Phone */}
              <Reveal direction="left" delay={0.28}>
                <a
                  href="tel:+8801727724844"
                  className="cursor-hover flex items-center gap-4 p-4 rounded-2xl bg-zinc-950/45 border border-zinc-850 hover:border-cyan-400 transition-colors duration-300"
                >
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider font-bold block">
                      SECURE_CONNECT
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 mt-1 block">
                      +8801727724844
                    </span>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right Column Form */}
          <Reveal direction="right" delay={0.2} className="h-full">
            <div className="bg-zinc-950/45 border border-zinc-850 rounded-[28px] p-6 md:p-8 backdrop-blur-md shadow-2xl">

              {/* Endpoint signature */}
              <Reveal direction="up" delay={0.28}>
                <p className="font-mono text-[10px] text-cyan-400 tracking-wider mb-6 select-none font-bold">
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
                    <label className="text-[10px] font-mono text-zinc-500 ml-1 uppercase tracking-widest font-bold">
                      How can I assist?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How can I assist?"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-zinc-950/45 border rounded-xl p-4 text-white text-sm placeholder:text-zinc-600 font-mono focus:outline-none focus:ring-1 transition-all resize-none ${errors.message
                          ? "border-red-500/50 focus:ring-red-500/30 focus:border-red-500"
                          : "border-zinc-800/80 focus:ring-cyan-500/30 focus:border-cyan-400"
                        }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-red-400 font-mono mt-0.5 ml-1">{errors.message}</p>
                    )}
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.01, y: -0.5 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className={`cursor-hover w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 text-xs font-mono uppercase tracking-widest text-[#05050a] ${sent
                        ? "bg-emerald-400 shadow-lg shadow-emerald-400/20"
                        : "bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/10"
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
