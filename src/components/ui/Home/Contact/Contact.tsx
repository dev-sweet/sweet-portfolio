"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import GlassInput from "./GlassInput";

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
    up:    { x: 0,   y: 28 },
    left:  { x: -28, y: 0  },
    right: { x: 28,  y: 0  },
    none:  { x: 0,   y: 0  },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors]     = useState({ name: "", email: "", message: "" });
  const [sent, setSent]         = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev)   => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = {
      name:    formData.name.trim()    ? "" : "Name is required",
      email:   formData.email.trim()   ? "" : "Email is required",
      message: formData.message.trim() ? "" : "Message is required",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    console.log("Contact form data:", formData);
    setFormData({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="min-h-screen md:py-[80px] py-[40px] lg:px-32 md:px-16 sm:px-8 px-6 bg-[#080810] text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#534AB7]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1D9E75]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal direction="up" delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f0f20] border border-[#2a2a4a] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1d9e75] animate-pulse" />
            <span className="text-[11px] font-mono text-[#afa9ec] uppercase tracking-widest">
               contact
            </span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.08}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Get in{" "}
            <span className="text-[#7f77dd]">touch</span>
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.14}>
          <p className="text-[#9a9a9a] text-base sm:text-lg mb-14 max-w-md">
            Have questions or ready to transform your business with AI automation?
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          <div className="flex flex-col justify-center gap-4">
            {[
              { icon: <Mail size={18} />,   title: "Email us",      value: "hello@youragency.com",  delay: 0.18 },
              { icon: <Phone size={18} />,  title: "Call us",       value: "+1 (555) 000-0000",     delay: 0.26 },
              { icon: <MapPin size={18} />, title: "Our location",  value: "Crosby Street, NY, US", delay: 0.34 },
            ].map((card) => (
              <Reveal key={card.title} direction="left" delay={card.delay}>
                <ContactInfoCard
                  icon={card.icon}
                  title={card.title}
                  value={card.value}
                />
              </Reveal>
            ))}
            <Reveal direction="up" delay={0.42}>
              <p className="font-mono text-[11px] text-[#5f5e5a] mt-4 tracking-widest">
                 response_time: &lt; 24hrs
              </p>
            </Reveal>
          </div>
          <Reveal direction="right" delay={0.2} className="h-full">
            <div className="bg-[#0f0f20] border border-[#2a2a4a] rounded-3xl p-8 md:p-10 h-full">

              <Reveal direction="up" delay={0.28}>
                <p className="font-mono text-[11px] text-[#5dcaa5] tracking-widest mb-6">
                   send_message()
                </p>
              </Reveal>

              <form className="space-y-5" onSubmit={handleSubmit}>

                <Reveal direction="up" delay={0.32}>
                  <GlassInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </Reveal>

                <Reveal direction="up" delay={0.38}>
                  <GlassInput
                    label="Email"
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
                    <label className="text-[11px] font-mono text-[#5f5e5a] ml-1 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-[#080810] border rounded-xl p-4 text-white text-sm placeholder:text-[#3a3a4a] font-mono focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? "border-red-500/50 focus:ring-red-500/30"
                          : "border-[#2a2a4a] focus:ring-[#534ab7]/40 focus:border-[#534ab7]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 font-mono">{errors.message}</p>
                    )}
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.5}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className={`w-full font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 mt-2 text-sm ${
                      sent
                        ? "bg-[#1D9E75] text-white border border-[#1D9E75]"
                        : "bg-[#534ab7] hover:bg-[#7f77dd] text-white border border-[#534ab7]"
                    }`}
                  >
                    {sent ? (
                      <>
                        <span className="font-mono text-xs">message_sent ✓</span>
                      </>
                    ) : (
                      <>
                        Submit
                        <ArrowUpRight size={15} />
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

const ContactInfoCard = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => (
  <div className="group flex items-center justify-between p-5 rounded-2xl bg-[#0f0f20] border border-[#2a2a4a] hover:border-[#534ab7] transition-all duration-200 cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="p-2.5 rounded-xl bg-[#080810] border border-[#2a2a4a] text-[#7f77dd] group-hover:border-[#534ab7] transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-mono text-[#5f5e5a] uppercase tracking-widest">{title}</p>
        <p className="text-sm text-[#e0e0e0] mt-0.5">{value}</p>
      </div>
    </div>
    <ArrowUpRight
      size={16}
      className="text-[#3a3a4a] group-hover:text-[#7f77dd] transition-colors"
    />
  </div>
);

export default ContactForm;
