"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaServer } from "react-icons/fa";
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
      staggerChildren: 0.025,
      delayChildren: 0.15,
    },
  },
};

const badgeItemVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
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
      initial={{ opacity: 0, x: -24, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full bg-[#0D1118]/90 border border-[#1C2633] rounded-[24px] shadow-2xl backdrop-blur-xl p-6 flex flex-col items-center hover:border-[#29384A] transition-colors duration-300 ${className}`}
    >
      {/* Circle profile picture with glowing border */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="w-50 h-50 p-1 flex-shrink-0 flex items-center justify-center"
      >
        <div className="w-full h-full overflow-hidden relative">
          <Image
            src="/bg.png"
            alt="Sweet Ali"
            fill
            sizes="200px"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-extrabold text-[#F1F5F9] mt-4 tracking-tight leading-none">
          Sweet Ali
        </h2>
        <p className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest mt-2 font-bold">
          Full-Stack Engineer
        </p>
      </motion.div>

      {/* Tech Stack Badges */}
      <div className="w-full mt-4 border-t border-[#1C2633] pt-3 flex flex-col gap-2.5 select-none text-left">
        <motion.div
          variants={badgeContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-2"
        >
          {TECHSTACK.map((tech) => (
            <motion.div
              key={tech.name}
              variants={badgeItemVariants}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-[#A1ACBA] text-[10px] font-mono font-medium hover:text-[#F1F5F9] transition-colors duration-200 cursor-default ${tech.bgGlass} ${tech.shadowColor} ${tech.borderClass}`}
            >
              {tech.icon}
              <span className="truncate">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
