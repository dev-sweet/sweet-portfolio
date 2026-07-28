"use client";

import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { Code, ExternalLink } from "lucide-react";
import NextLink from "next/link";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: { project: any }) => {
  const secondBtnLabel = project.title === "Tech Gear" ? "Codebase" : "Database";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={styles.projectCard}
    >
      {/* Scrollable Image viewport */}
      <NextLink href={`/projects/${project.id}`} className="block h-[200px] overflow-hidden relative rounded-xl border border-zinc-800/40">
        <div className="w-full h-[600px] relative transition-transform duration-[3s] ease-in-out hover:-translate-y-[66%]">
          <Image
            src={project.image}
            alt={project.title || "Project Screenshot"}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover object-top"
            priority
          />
        </div>
        
        {/* Status pill overlay */}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030308]/90 border border-emerald-500/25 font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest">
          <span className="inline-flex rounded-full h-1 w-1 bg-emerald-400 animate-pulse"></span>
          ACTIVE SYSTEM
        </span>
      </NextLink>

      {/* Info Body */}
      <div className="text-gray-200 mt-4 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <NextLink href={`/projects/${project.id}`} className="hover:text-cyan-400 transition-colors block">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight line-clamp-1">
              {project.title}
            </h3>
          </NextLink>
          <p className="mt-2.5 text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3 font-light">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 items-center mt-auto">
          <a
            href={project.liveLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-cyan-500 to-[#3b82f6] hover:from-[#3b82f6] hover:to-cyan-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.github || "https://github.com/dev-sweet"}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-hover flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800 hover:border-cyan-400 text-zinc-350 hover:text-white text-xs font-semibold rounded-xl transition-all duration-300"
          >
            <Code size={12} />
            Codebase
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
