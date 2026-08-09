"use client";

import ProjectCard from "@/components/shared/ProjectCard";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AuroraText } from "../../aurora-text";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="py-20 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent relative z-10"
      ref={ref}
    >
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            className="text-zinc-500 font-mono text-xs sm:text-sm mt-3 uppercase tracking-wider font-semibold"
          >
            Case studies in Full-stack architecture
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-12">
          {projects.map((project: any, index: number) => (
            <ProjectCard project={{ ...project, id: index + 1 }} key={project.title} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center mt-14"
        >
          <Link
            href="/projects"
            className="cursor-hover inline-flex items-center gap-2 bg-zinc-900/40 border border-zinc-800 hover:border-[#7f77dd] text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm shadow-md"
          >
            View All Projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
