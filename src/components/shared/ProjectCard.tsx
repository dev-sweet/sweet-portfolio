"use client";

import Image from "next/image";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  github?: string;
  tags?: string[];
}

const DEFAULT_TAGS: Record<string, string[]> = {
  "Personal Portfolio": ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "HelloKhata AI": ["React", "Node.js", "OpenAI API", "MongoDB"],
  "Tech Gear": ["Next.js", "Redux Toolkit", "Stripe", "Express.js"],
};

const ProjectCard = ({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) => {
  const tags =
    project.tags ||
    DEFAULT_TAGS[project.title] || [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ];
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative w-full bg-[#0D1118] border border-[#1C2633] hover:border-[#29384A] rounded-3xl p-5 sm:p-7 backdrop-blur-xl transition-all duration-500 shadow-2xl overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#3B82F6]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#3B82F6]/10 transition-all duration-700" />

      {/* Horizontal Layout Container: 1 Project per Row */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Image Preview Viewport (Scrolls image on hover) */}
        <NextLink
          href={`/projects/${project.id}`}
          className="relative w-full md:w-[44%] h-[220px] sm:h-[250px] rounded-2xl overflow-hidden border border-[#1C2633] bg-[#080B10] group-hover:border-[#3B82F6]/40 transition-all duration-500 flex-shrink-0 block"
        >
          {/* Scrollable Image Container */}
          <div className="w-full h-[650px] relative transition-transform duration-[3.5s] ease-in-out group-hover:-translate-y-[62%]">
            <Image
              src={project.image}
              alt={project.title || "Project Screenshot"}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              priority={index === 0}
            />
          </div>

          {/* Status pill overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B10]/85 border border-[#22C55E]/30 backdrop-blur-md z-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="text-[10px] font-mono text-[#22C55E] font-bold uppercase tracking-wider">
              ACTIVE SYSTEM
            </span>
          </div>

          {/* Index Counter Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-[#080B10]/80 border border-[#1C2633] backdrop-blur-md font-mono text-xs text-[#667386] font-semibold z-10">
            {`// ${formattedIndex}`}
          </div>
        </NextLink>

        {/* Right Column: Project Details & Actions */}
        <div className="flex flex-col justify-between w-full md:w-[56%] gap-4">
          <div>
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[#111722] border border-[#1C2633] font-mono text-[11px] text-[#A1ACBA] tracking-wide font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Title */}
            <NextLink href={`/projects/${project.id}`} className="group/title inline-block">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F1F5F9] tracking-tight group-hover/title:text-[#3B82F6] transition-colors inline-flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-5 h-5 text-[#667386] group-hover/title:text-[#3B82F6] group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all" />
              </h3>
            </NextLink>

            {/* Description */}
            <p className="mt-2.5 text-[#A1ACBA] text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-4 border-t border-[#1C2633] flex flex-wrap gap-3 items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">
              <a
                href={project.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-semibold text-xs transition-all duration-300 shadow-md shadow-[#3B82F6]/20"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
              <a
                href={project.github || "https://github.com/dev-sweet"}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#111722] hover:bg-[#111722] border border-[#29384A] hover:border-[#3B82F6] text-[#A1ACBA] hover:text-[#F1F5F9] font-semibold text-xs transition-all duration-300"
              >
                <Github size={13} />
                Codebase
              </a>
            </div>

            <NextLink
              href={`/projects/${project.id}`}
              className="cursor-hover text-xs font-mono text-[#667386] hover:text-[#3B82F6] font-medium transition-colors inline-flex items-center gap-1"
            >
              Case Study &rarr;
            </NextLink>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
