"use client";

import Image from "next/image";
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
    borderClass: "border-[#00d8ff]/30 hover:border-[#00d8ff]",
    bgGlass: "bg-[#00d8ff]/10",
    shadowColor: "shadow-[0_0_10px_rgba(0,216,255,0.2)]",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white shrink-0" size={12} />,
    borderClass: "border-white/20 hover:border-white/80",
    bgGlass: "bg-white/10",
    shadowColor: "shadow-[0_0_10px_rgba(255,255,255,0.15)]",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178c6] shrink-0" size={12} />,
    borderClass: "border-[#3178c6]/30 hover:border-[#3178c6]",
    bgGlass: "bg-[#3178c6]/10",
    shadowColor: "shadow-[0_0_10px_rgba(49,120,198,0.2)]",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#38bdf8] shrink-0" size={12} />,
    borderClass: "border-[#38bdf8]/30 hover:border-[#38bdf8]",
    bgGlass: "bg-[#38bdf8]/10",
    shadowColor: "shadow-[0_0_10px_rgba(56,189,248,0.2)]",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-[#336791] shrink-0" size={12} />,
    borderClass: "border-[#336791]/30 hover:border-[#336791]",
    bgGlass: "bg-[#336791]/15",
    shadowColor: "shadow-[0_0_10px_rgba(51,103,145,0.2)]",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-[#f29111] shrink-0" size={13} />,
    borderClass: "border-[#f29111]/30 hover:border-[#f29111]",
    bgGlass: "bg-[#f29111]/10",
    shadowColor: "shadow-[0_0_10px_rgba(242,145,17,0.2)]",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#00ed64] shrink-0" size={12} />,
    borderClass: "border-[#00ed64]/30 hover:border-[#00ed64]",
    bgGlass: "bg-[#00ed64]/10",
    shadowColor: "shadow-[0_0_10px_rgba(0,237,100,0.2)]",
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-[#5a67d8] shrink-0" size={12} />,
    borderClass: "border-[#5a67d8]/30 hover:border-[#5a67d8]",
    bgGlass: "bg-[#5a67d8]/15",
    shadowColor: "shadow-[0_0_10px_rgba(90,103,216,0.2)]",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-[#5fa04e] shrink-0" size={12} />,
    borderClass: "border-[#5fa04e]/30 hover:border-[#5fa04e]",
    bgGlass: "bg-[#5fa04e]/10",
    shadowColor: "shadow-[0_0_10px_rgba(95,160,78,0.2)]",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-zinc-200 shrink-0" size={12} />,
    borderClass: "border-zinc-500/30 hover:border-zinc-300",
    bgGlass: "bg-zinc-500/10",
    shadowColor: "shadow-[0_0_10px_rgba(212,212,216,0.15)]",
  },
  {
    name: "NestJS",
    icon: <SiNestjs className="text-[#ea2845] shrink-0" size={12} />,
    borderClass: "border-[#ea2845]/30 hover:border-[#ea2845]",
    bgGlass: "bg-[#ea2845]/10",
    shadowColor: "shadow-[0_0_10px_rgba(234,40,69,0.2)]",
  },
  {
    name: "REST APIs",
    icon: <FaServer className="text-[#a855f7] shrink-0" size={11} />,
    borderClass: "border-[#a855f7]/30 hover:border-[#a855f7]",
    bgGlass: "bg-[#a855f7]/10",
    shadowColor: "shadow-[0_0_10px_rgba(168,85,247,0.2)]",
  },
];

export default function ProfileCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-full bg-zinc-950/60 border border-zinc-800/80 rounded-[24px] shadow-2xl backdrop-blur-xl p-6 flex flex-col items-center hover:border-cyan-500/30 transition-all duration-300 ${className}`}
    >
      {/* Circle profile picture with glowing border */}
      <div className="w-40 h-50 rounded border-1 border-cyan-400/50 p-1 flex-shrink-0 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <div className="w-full h-full rounded bg-zinc-900 overflow-hidden relative">
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
        <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-[3px] border-[#080812] flex items-center justify-center shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        </span>
      </div>

      {/* Profile Info */}
      <h2 className="text-3xl font-extrabold text-zinc-250 mt-4 tracking-tight leading-none">
        Sweet Ali
      </h2>
      <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mt-2 font-bold">
        Full-Stack Engineer
      </p>
      <p className="text-[10px] py- font-mono text-zinc-400 uppercase tracking-widest mt-1 font-light text-center">
        Full-Stack Engineer focused on building practical, production-ready web
        applications and business systems.
      </p>


      {/* Tech Stack Badges */}
      <div className="w-full mt-4 border-t border-zinc-900/80 pt-3 flex flex-col gap-2.5 select-none text-left">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {TECHSTACK.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-zinc-300 text-[10px] font-mono font-medium hover:text-white transition-all duration-200 cursor-default ${tech.bgGlass} ${tech.shadowColor} ${tech.borderClass}`}
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
