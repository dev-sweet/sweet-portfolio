"use client";

import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AuroraText } from "../../aurora-text";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const TECH_ITEMS = [
  { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "rgba(168, 85, 247, 0.4)", textColor: "text-white" },
  { name: "React", icon: <SiReact size={28} />, color: "rgba(6, 182, 212, 0.4)", textColor: "text-cyan-400" },
  { name: "TypeScript", icon: <SiTypescript size={28} />, color: "rgba(59, 130, 246, 0.4)", textColor: "text-blue-400" },
  { name: "Node.js", icon: <SiNodedotjs size={28} />, color: "rgba(34, 197, 94, 0.4)", textColor: "text-green-500" },
  { name: "Express.js", icon: <SiExpress size={28} />, color: "rgba(243, 244, 246, 0.2)", textColor: "text-zinc-300" },
  { name: "NestJS", icon: <SiNestjs size={28} />, color: "rgba(239, 68, 68, 0.4)", textColor: "text-red-500" },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} />, color: "rgba(51, 103, 145, 0.4)", textColor: "text-[#336791]" },
  { name: "MongoDB", icon: <SiMongodb size={28} />, color: "rgba(16, 185, 129, 0.4)", textColor: "text-emerald-500" },
  { name: "Prisma", icon: <SiPrisma size={28} />, color: "rgba(90, 103, 216, 0.4)", textColor: "text-indigo-400" },
  { name: "Docker", icon: <SiDocker size={28} />, color: "rgba(14, 165, 233, 0.4)", textColor: "text-sky-400" },
  { name: "AWS", icon: <FaAws size={28} />, color: "rgba(249, 115, 22, 0.4)", textColor: "text-orange-500" },
  { name: "OpenAI", icon: <SiOpenai size={28} />, color: "rgba(16, 163, 127, 0.4)", textColor: "text-emerald-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "rgba(6, 182, 212, 0.4)", textColor: "text-cyan-400" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Technologies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technologies" className="py-20 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
              tech_stack
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            ref={ref}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Core <AuroraText>Technologies</AuroraText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed"
          >
            A curated list of state-of-the-art frameworks, languages, databases, and DevOps solutions that I specialize in.
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
        >
          {TECH_ITEMS.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: `0 8px 30px ${tech.color}`,
                borderColor: tech.color,
              }}
              className="flex flex-col items-center justify-center p-5 rounded-2xl bg-zinc-900/25 border border-zinc-800/40 hover:bg-zinc-900/40 transition-all duration-300 backdrop-blur-xs select-none group cursor-pointer"
            >
              {/* Icon Container with dynamic hover hover scale and color transitions */}
              <div className={`mb-3.5 transition-transform duration-300 group-hover:scale-110 ${tech.textColor}`}>
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-zinc-300 font-mono group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
