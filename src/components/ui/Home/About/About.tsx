"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AutoCodeEditor from "./AutoCode";
import { AuroraText } from "../../aurora-text";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiFirebase,
  SiStripe,
  SiGit,
  SiDocker,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

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
    up: { x: 0, y: 32 },
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
    none: { x: 0, y: 0 },
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

const ZustandIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill="#443E38"
      stroke="#B87D4B"
      strokeWidth="1.2"
    />
    <circle cx="6" cy="6.5" r="2.5" fill="#B87D4B" />
    <circle cx="18" cy="6.5" r="2.5" fill="#B87D4B" />
    <circle cx="9" cy="11.5" r="1.3" fill="#FFFFFF" />
    <circle cx="15" cy="11.5" r="1.3" fill="#FFFFFF" />
    <circle cx="9.3" cy="11.5" r="0.6" fill="#1C2633" />
    <circle cx="14.7" cy="11.5" r="0.6" fill="#1C2633" />
    <ellipse cx="12" cy="15" rx="3.2" ry="2.2" fill="#E8D7C3" />
    <polygon points="12,14.2 10.8,15.4 13.2,15.4" fill="#443E38" />
  </svg>
);

const TAB_GROUPS = ["All", "Frontend", "Backend", "Database & Tools"] as const;
type TabGroup = (typeof TAB_GROUPS)[number];

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  textColor?: string;
}

const SKILLS_DATA: Record<TabGroup, SkillItem[]> = {
  All: [
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
    { name: "React", icon: <SiReact className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#61DAFB]" },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#3178C6]" },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#38BDF8]" },
    { name: "Zustand", icon: <ZustandIcon className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: "TanStack Query", icon: <SiReactquery className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#FF4154]" },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#5FA04E]" },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-zinc-200" },
    { name: "NestJS", icon: <SiNestjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#E0234E]" },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#47A248]" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#4169E1]" },
    { name: "Prisma", icon: <SiPrisma className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
    { name: "Firebase", icon: <SiFirebase className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#FFCA28]" },
    { name: "Stripe", icon: <SiStripe className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#635BFF]" },
    { name: "Git", icon: <SiGit className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#F05032]" },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#2496ED]" },
    { name: "Vercel", icon: <SiVercel className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
  ],
  Frontend: [
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
    { name: "React", icon: <SiReact className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#61DAFB]" },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#3178C6]" },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#38BDF8]" },
    { name: "Zustand", icon: <ZustandIcon className="w-8 h-8 sm:w-9 sm:h-9" /> },
    { name: "TanStack Query", icon: <SiReactquery className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#FF4154]" },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#5FA04E]" },
    { name: "Express.js", icon: <SiExpress className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-zinc-200" },
    { name: "NestJS", icon: <SiNestjs className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#E0234E]" },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#3178C6]" },
    { name: "REST APIs", icon: <TbApi className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#38BDF8]" },
    { name: "Firebase", icon: <SiFirebase className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#FFCA28]" },
  ],
  "Database & Tools": [
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#4169E1]" },
    { name: "MySQL", icon: <SiMysql className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#4479A1]" },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#47A248]" },
    { name: "Prisma", icon: <SiPrisma className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
    { name: "Git", icon: <SiGit className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#F05032]" },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#2496ED]" },
    { name: "Vercel", icon: <SiVercel className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-white" },
    { name: "Netlify", icon: <SiNetlify className="w-8 h-8 sm:w-9 sm:h-9" />, textColor: "text-[#00C7B7]" },
  ],
};

const AboutMe = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const codeInView = useInView(codeRef, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState<TabGroup>("All");

  return (
    <section id="about" className="py-0 -mt-16 text-white overflow-hidden w-full">
      <div className="w-full relative z-10">
        {/* ── Heading ── */}
        <Reveal direction="up" delay={0}>
          <h1 className="text-4xl font-bold text-[#F1F5F9] text-center pb-3">
            About <AuroraText>Me</AuroraText>
          </h1>
        </Reveal>

        {/* ── Subtitle ── */}
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto text-[#A1ACBA] leading-relaxed text-lg pb-6">
            I&apos;m a Full-Stack Developer building scalable web applications
            with modern JavaScript. I specialize in clean frontend architectures
            and robust backend systems that deliver reliable, type-safe
            solutions.
          </p>
        </Reveal>

        <div className="pt-5">
          <Reveal direction="left" delay={0.15} className="w-full">
            {/* Code card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg blur opacity-15 group-hover:opacity-30 transition duration-1000" />
              <div
                ref={codeRef}
                className="h-[214px] relative bg-[#080B10] border border-[#1C2633] p-6 rounded-lg shadow-2xl"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#F43F5E]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <pre className="font-mono text-sm text-[#A1ACBA]">
                  <code>
                    <AutoCodeEditor start={codeInView} />
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Tabbed Skills Section */}
          <Reveal
            direction="up"
            delay={0.2}
            className="w-full pt-10"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-[#1C2633] hover:border-[#29384A] transition-all duration-300">

              {/* Header Label */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#A855F7] animate-pulse shadow-[0_0_8px_#A855F7]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#C084FC] font-bold">
                  TECHNICAL SKILLS
                </span>
              </div>

              {/* Grouped Tab Buttons */}
              <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#1C2633]">
                {TAB_GROUPS.map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`cursor-hover relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive
                        ? "text-white"
                        : "text-[#A1ACBA] hover:text-white"
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBg"
                          className="absolute inset-0 bg-[#111722] border border-[#1C2633] rounded-xl shadow-md shadow-[#38BDF8]/5"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{tab}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabGlowLine"
                          className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full shadow-[0_0_8px_#38BDF8] z-10"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Smooth Animated Skills Grid Container */}
              <div className="pt-6 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                  >
                    {SKILLS_DATA[activeTab].map((skill, i) => (
                      <motion.div
                        key={`${activeTab}-${skill.name}`}
                        initial={{ opacity: 0, scale: 0.92, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.02,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -5, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-hover group relative flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#080B10]/90 border border-[#1C2633] hover:border-[#3B82F6]/60 hover:bg-[#111722] transition-colors duration-300 hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.15)] cursor-pointer select-none"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 group-hover:opacity-20 blur-md rounded-2xl transition duration-300 pointer-events-none" />

                        <div className={`relative mb-3 transition-transform duration-300 group-hover:scale-110 ${skill.textColor || ""}`}>
                          {skill.icon}
                        </div>

                        <p className="relative text-xs sm:text-sm font-medium text-[#A1ACBA] group-hover:text-[#F1F5F9] transition-colors text-center truncate w-full">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

