"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AuroraText } from "../../aurora-text";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section
      id="projects"
      className="py-0 bg-transparent relative z-10 w-full"
      ref={ref}
    >
      {/* Background ambient glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950/60 border border-zinc-800 text-cyan-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold mb-4 shadow-sm"
          >
            <Code2 size={13} />
            CASE STUDIES & FEATURED WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering <AuroraText>Solutions</AuroraText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 font-light text-xs sm:text-sm mt-3 leading-relaxed"
          >
            Production-ready web applications, microservices, and AI ecosystems built with clean architecture and scalable cloud infrastructure.
          </motion.p>
        </div>

        {/* Projects Column Container: Exactly 1 Card Per Row */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full mt-6">
          {projects.map((project: any, index: number) => (
            <ProjectCard
              project={{ ...project, id: index + 1 }}
              key={project.title || index}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="cursor-hover inline-flex items-center gap-2 bg-zinc-950/60 border border-zinc-800 hover:border-cyan-400 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-zinc-950 transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
