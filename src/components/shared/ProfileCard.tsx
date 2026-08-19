"use client";

import Image from "next/image";
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

export default function ProfileCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-[#0D1118]/90 border border-[#1C2633] rounded-[24px] shadow-2xl backdrop-blur-xl p-6 flex flex-col items-center hover:border-[#29384A] transition-all duration-300 ${className}`}
    >
      {/* Circle profile picture with glowing border */}
      <div className="w-40 h-50 rounded border-1 border-[#1C2633] p-1 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
        <div className="w-full h-full rounded bg-[#080B10] overflow-hidden relative">
          <Image
            src="/bg.png"
            alt="Sweet Ali"
            fill
            sizes="100px"
            className="object-cover"
            priority
          />
        </div>
        {/* Online Status Checkmark */}
        <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#22C55E] border-[3px] border-[#080B10] flex items-center justify-center shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>

      {/* Profile Info */}
      <h2 className="text-3xl font-extrabold text-[#F1F5F9] mt-4 tracking-tight leading-none">
        Sweet Ali
      </h2>
      <p className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-widest mt-2 font-bold">
        Full-Stack Engineer
      </p>

      {/* Tech Stack Badges */}
      <div className="w-full mt-4 border-t border-[#1C2633] pt-3 flex flex-col gap-2.5 select-none text-left">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {TECHSTACK.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-[#A1ACBA] text-[10px] font-mono font-medium hover:text-[#F1F5F9] transition-all duration-200 cursor-default ${tech.bgGlass} ${tech.shadowColor} ${tech.borderClass}`}
              >
                {tech.icon}
                <span className="truncate">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
