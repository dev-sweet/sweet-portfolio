"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";

interface TechBadge {
  name: string;
  icon: React.ReactNode;
  borderClass: string;
  bgGlass: string;
  shadowColor: string;
}

const TECHSTACK: TechBadge[] = [
  {
    name: "React.js",
    icon: <SiReact className="text-[#00d8ff] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178c6] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38bdf8] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#f29111] shrink-0" size={13} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#00ed64] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-[#5a67d8] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#5fa04e] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-zinc-200 shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-[#ea2845] shrink-0" size={12} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
  {
    name: "REST APIs",
    icon: <FaServer className="text-[#8B5CF6] shrink-0" size={11} />,
    borderClass: "border-[#1C2633] hover:border-[#3B82F6]",
    bgGlass: "bg-[#111722]",
    shadowColor: "shadow-none",
  },
];

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.18,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 380,
      damping: 24,
    },
  },
};

export default function ProfileCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative group w-full rounded-[24px] p-[1.5px] overflow-hidden transition-shadow duration-700 shadow-xl shadow-[#3B82F6]/5 hover:shadow-2xl hover:shadow-[#3B82F6]/20 ${className}`}
    >
      {/* ── Ultra-Smooth Rotating Colored Gradient Border ── */}
      <div
        className="absolute -inset-[120%] animate-[spin_10s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none will-change-transform"
        style={{
          background:
            "conic-gradient(from 0deg, #38BDF8, #3B82F6, #8B5CF6, #EC4899, #06B6D4, #38BDF8)",
        }}
      />

      {/* ── Ambient Soft Glow Behind Border ── */}
      <div
        className="absolute -inset-[30%] animate-[spin_12s_linear_infinite] opacity-20 blur-2xl group-hover:opacity-50 transition-all duration-700 pointer-events-none will-change-transform"
        style={{
          background:
            "conic-gradient(from 0deg, #38BDF8, #3B82F6, #8B5CF6, #EC4899, #06B6D4, #38BDF8)",
        }}
      />

      {/* ── Inner Profile Card Container ── */}
      <div className="relative w-full h-full bg-[#0D1118]/95 backdrop-blur-2xl rounded-[22.5px] p-6 flex flex-col items-center z-10">
        
        {/* ── Avatar Section with Subtle Rotating Halo & Status ── */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center group/avatar"
        >
          {/* Subtle Rotating Halo behind Avatar */}
          <div
            className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite] p-[1.5px] opacity-70 group-hover/avatar:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "conic-gradient(from 0deg, #38BDF8, #8B5CF6, #3B82F6, #38BDF8)",
            }}
          />
          <div className="absolute inset-0 rounded-full blur-md opacity-25 group-hover/avatar:opacity-50 transition-opacity duration-500 bg-gradient-to-tr from-[#3B82F6] to-[#8B5CF6]" />

          {/* Avatar Image Container */}
          <div className="w-full h-full overflow-hidden relative rounded-full bg-[#080B10] p-[2px] z-10">
            <div className="w-full h-full overflow-hidden relative rounded-full">
              <Image
                src="/bg.png"
                alt="Sweet Ali"
                fill
                sizes="150px"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/avatar:scale-105"
                priority
              />
            </div>
          </div>

          {/* Active Status Pulse Dot */}
          <div className="absolute bottom-1 right-1 z-20 flex items-center justify-center w-5 h-5 rounded-full bg-[#0D1118] border-2 border-[#0D1118]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
            </span>
          </div>
        </motion.div>

        {/* ── Profile Info ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mt-4"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F1F5F9] tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text">
            Sweet Ali
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/25 mt-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            <p className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest font-semibold">
              Full-Stack Engineer
            </p>
          </div>
        </motion.div>

        {/* ── Tech Stack Badges with Spring Hover ── */}
        <div className="w-full mt-5 border-t border-[#1C2633]/80 pt-3.5 flex flex-col gap-2.5 select-none text-left">
          <motion.div
            variants={badgeContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-1.5"
          >
            {TECHSTACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={badgeItemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -2,
                  transition: { type: "spring", stiffness: 450, damping: 17 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-[#A1ACBA] text-[10px] font-mono font-medium hover:text-[#F1F5F9] hover:border-[#3B82F6]/50 hover:bg-[#151D2A] transition-colors duration-200 cursor-default ${tech.bgGlass} ${tech.shadowColor} ${tech.borderClass}`}
              >
                {tech.icon}
                <span className="truncate">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
