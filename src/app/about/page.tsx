"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import { AuroraText } from "@/components/ui/aurora-text";
import { 
  Briefcase, 
  GraduationCap, 
  Lock, 
  ArrowRight, 
  Terminal, 
  Award,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiMongodb, 
  SiVercel 
} from "react-icons/si";
import Link from "next/link";

// ── Typing Code Window Component ──
function AutoTypingCode() {
  const [visibleCount, setVisibleCount] = useState(0);
  const codeText = `const developer = {
  name: 'Sweet Ali',
  role: 'Full Stack Engineer',
  focus: 'Scalable Web Apps',
  mission: 'Clear & Maintainable Code'
};`;

  useEffect(() => {
    if (visibleCount >= codeText.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 20);
    return () => clearTimeout(timer);
  }, [visibleCount, codeText.length]);

  const visibleText = codeText.slice(0, visibleCount);
  
  const tokenize = (text: string) => {
    const parts = [];
    const regex = /(const)|('[^']*')|(\b[a-zA-Z_]+\b)(\s*:\s*)|([\s\S])/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match[1]) {
        parts.push(<span key={match.index} className="text-[#a855f7] font-semibold">const</span>);
      } else if (match[2]) {
        parts.push(<span key={match.index} className="text-[#22c55e]">{match[2]}</span>);
      } else if (match[3] && match[4]) {
        parts.push(<span key={match.index} className="text-[#22d3ee]">{match[3]}</span>);
        parts.push(<span key={match.index + "_col"} className="text-zinc-500">{match[4]}</span>);
      } else {
        parts.push(<span key={match.index} className="text-zinc-405">{match[0]}</span>);
      }
    }
    return parts;
  };

  return (
    <pre className="font-mono text-xs sm:text-sm leading-relaxed whitespace-pre text-left select-none overflow-x-auto">
      <code>
        {tokenize(visibleText)}
        {visibleCount < codeText.length && (
          <span className="text-[#a855f7] animate-pulse font-bold">▌</span>
        )}
      </code>
    </pre>
  );
}

// ── Fade-in Entrance Animations Wrapper ──
function FadeInScroll({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "none" }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  
  const offsets = {
    up: { y: 24, x: 0 },
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const frontendSkills = [
    { name: "React", icon: <FaReact className="w-6 h-6 text-[#61dafb]" />, hoverColor: "hover:border-[#61dafb]/40" },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-white" />, hoverColor: "hover:border-white/40" },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-[#3178c6]" />, hoverColor: "hover:border-[#3178c6]/40" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6 text-[#38bdf8]" />, hoverColor: "hover:border-[#38bdf8]/40" },
    { name: "Redux", icon: <SiRedux className="w-6 h-6 text-[#764abc]" />, hoverColor: "hover:border-[#764abc]/40" }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-[#339933]" />, hoverColor: "hover:border-[#339933]/40" },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47a248]" />, hoverColor: "hover:border-[#47a248]/40" },
    { name: "Auth/JWT", icon: <Lock className="w-6 h-6 text-[#eab308]" />, hoverColor: "hover:border-[#eab308]/40" },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-white" />, hoverColor: "hover:border-white/40" },
    { name: "Git/GH", icon: <FaGithub className="w-6 h-6 text-[#f05032]" />, hoverColor: "hover:border-[#f05032]/40" }
  ];

  return (
    <div className="relative min-h-screen text-white bg-transparent py-16 lg:px-24 md:px-12 sm:px-8 px-6 overflow-hidden select-none">
      <AnimatedBackground />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16 pt-6">
        
        {/* ── Heading & Subtitle ── */}
        <section className="flex flex-col items-center text-center gap-4">
          <FadeInScroll direction="up" delay={0}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              About <AuroraText className="font-extrabold">Me</AuroraText>
            </h1>
          </FadeInScroll>
          <FadeInScroll direction="up" delay={0.1}>
            <p className="max-w-2xl text-zinc-450 leading-relaxed text-sm sm:text-base font-light text-center">
              I'm a Full-Stack Developer building scalable web applications with modern JavaScript. 
              I specialize in clean frontend architectures and robust backend systems that deliver reliable, 
              type-safe solutions.
            </p>
          </FadeInScroll>
        </section>

        {/* ── Two Columns (Code Editor & Tech Abilities) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Code Window & Quick Stats */}
          <div className="flex flex-col gap-6 h-full justify-between">
            <FadeInScroll direction="left" delay={0.15}>
              <div className="relative group w-full h-full flex flex-col">
                {/* Glowing Outer Card Gradient border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
                
                {/* Editor Container */}
                <div className="relative flex-grow bg-zinc-950/45 border border-zinc-850 rounded-2xl p-6 backdrop-blur-md flex flex-col gap-4">
                  {/* Top Window Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-900/60 select-none">
                    <div className="flex gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/80" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-semibold tracking-wider">
                      developer_profile.js
                    </span>
                    <div className="w-8" />
                  </div>

                  {/* Typing Code */}
                  <div className="bg-[#020205] border border-zinc-900 rounded-xl p-5 min-h-[140px] flex items-center">
                    <AutoTypingCode />
                  </div>
                </div>
              </div>
            </FadeInScroll>

            {/* Stats cells directly below */}
            <div className="grid grid-cols-2 gap-4">
              <FadeInScroll direction="up" delay={0.2}>
                <div className="group relative p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 hover:border-cyan-500/30 transition-all duration-300 flex items-center gap-4">
                  <div className="p-3 bg-zinc-900/60 rounded-lg text-cyan-400 font-extrabold text-2xl sm:text-3xl font-mono">
                    3+
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Years Exp</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 font-light">Industry experience</p>
                  </div>
                </div>
              </FadeInScroll>

              <FadeInScroll direction="up" delay={0.25}>
                <div className="group relative p-4 rounded-xl bg-zinc-950/40 border border-zinc-850 hover:border-purple-500/30 transition-all duration-300 flex items-center gap-4">
                  <div className="p-3 bg-zinc-900/60 rounded-lg text-purple-400 font-extrabold text-2xl sm:text-3xl font-mono">
                    15+
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Projects</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 font-light">Shipped globally</p>
                  </div>
                </div>
              </FadeInScroll>
            </div>
          </div>

          {/* Right Column: Technical Abilities */}
          <FadeInScroll direction="right" delay={0.15}>
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <div className="relative h-full bg-zinc-950/45 border border-zinc-850 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between gap-6">
                
                {/* Section Header */}
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Technical Abilities
                  </h3>
                </div>

                {/* Frontend List */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">Frontend</span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {frontendSkills.map((s, i) => (
                      <div 
                        key={s.name}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/30 border border-zinc-850 hover:bg-zinc-900/50 hover:scale-102 hover:-translate-y-0.5 transition-all duration-300 cursor-default ${s.hoverColor}`}
                      >
                        {s.icon}
                        <span className="text-xs text-zinc-300 font-medium">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend List */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-[10px] font-mono text-purple-500 uppercase tracking-widest font-bold">Backends & Tools</span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-zinc-800 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {backendSkills.map((s, i) => (
                      <div 
                        key={s.name}
                        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/30 border border-zinc-850 hover:bg-zinc-900/50 hover:scale-102 hover:-translate-y-0.5 transition-all duration-300 cursor-default ${s.hoverColor}`}
                      >
                        {s.icon}
                        <span className="text-xs text-zinc-300 font-medium">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </FadeInScroll>

        </div>

        {/* ── Two Columns Timelines (Professional Journey & Education) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-4">
          
          {/* Professional Journey Column */}
          <div className="flex flex-col gap-6">
            <FadeInScroll direction="up" delay={0.2}>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Professional Journey
                </h3>
              </div>
            </FadeInScroll>

            {/* Timeline content */}
            <div className="relative pl-6 border-l border-zinc-850/80 flex flex-col gap-8">
              
              {/* Item 1 */}
              <FadeInScroll direction="up" delay={0.25}>
                <div className="relative group">
                  {/* Glowing Node Point */}
                  <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border border-cyan-500 bg-[#030308] group-hover:scale-120 group-hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-[#030308] transition-all" />
                  </span>
                  
                  <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-mono text-cyan-400 uppercase tracking-widest font-bold">
                    May 2023 - Present
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                    Full-Stack Developer
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Maple Service Solutions Ltd.
                  </p>
                  
                  <ul className="mt-3 flex flex-col gap-1.5 list-none">
                    <li className="flex items-start gap-2 text-xs text-zinc-450 leading-relaxed font-light">
                      <span className="text-cyan-400 font-mono mt-1 text-[10px] select-none">&gt;</span>
                      Developing high-performance CRM systems.
                    </li>
                    <li className="flex items-start gap-2 text-xs text-zinc-450 leading-relaxed font-light">
                      <span className="text-cyan-400 font-mono mt-1 text-[10px] select-none">&gt;</span>
                      Optimized backend API latency by 40%.
                    </li>
                  </ul>
                </div>
              </FadeInScroll>

              {/* Item 2 */}
              <FadeInScroll direction="up" delay={0.3}>
                <div className="relative group">
                  {/* Glowing Node Point */}
                  <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border border-zinc-800 bg-[#030308] group-hover:border-cyan-500 group-hover:scale-120 group-hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#030308] transition-all" />
                  </span>
                  
                  <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                    Jan 2021 - Dec 2022
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                    Junior Engineer
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    TechInnovate Corp.
                  </p>
                  
                  <ul className="mt-3 flex flex-col gap-1.5 list-none">
                    <li className="flex items-start gap-2 text-xs text-zinc-450 leading-relaxed font-light">
                      <span className="text-zinc-500 font-mono mt-1 text-[10px] select-none">&gt;</span>
                      Lead frontend migration to React 18.
                    </li>
                  </ul>
                </div>
              </FadeInScroll>

            </div>
          </div>

          {/* Education & Certs Column */}
          <div className="flex flex-col gap-6">
            <FadeInScroll direction="up" delay={0.2}>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Education & Certs
                </h3>
              </div>
            </FadeInScroll>

            {/* Timeline content */}
            <div className="relative pl-6 border-l border-zinc-850/80 flex flex-col gap-8">
              
              {/* Item 1 */}
              <FadeInScroll direction="up" delay={0.25}>
                <div className="relative group">
                  {/* Glowing Node Point */}
                  <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border border-purple-500 bg-[#030308] group-hover:scale-120 group-hover:bg-purple-500 transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-[#030308] transition-all" />
                  </span>
                  
                  <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[9px] font-mono text-purple-400 uppercase tracking-widest font-bold">
                    2020 - 2024
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                    BSS in Folklore Studies
                  </h4>
                  <p className="text-xs text-purple-400 font-mono mt-0.5">
                    Islamic University, Bangladesh
                  </p>
                  
                  <p className="mt-3 text-xs text-zinc-400 font-light italic pl-4 border-l border-zinc-850">
                    Minor in Digital Humanities & Data Analysis
                  </p>
                </div>
              </FadeInScroll>

              {/* Item 2 */}
              <FadeInScroll direction="up" delay={0.3}>
                <div className="relative group">
                  {/* Glowing Node Point */}
                  <span className="absolute -left-[30px] top-1.5 w-3.5 h-3.5 rounded-full border border-zinc-800 bg-[#030308] group-hover:border-purple-500 group-hover:scale-120 group-hover:bg-purple-500 transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#030308] transition-all" />
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold">
                      2022
                    </div>
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-[8px] font-mono text-purple-300 uppercase font-bold tracking-widest">
                      <Award className="w-2.5 h-2.5" />
                      Certified
                    </div>
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                    Complete Web Development
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Programming Hero (Jhankar Mahbub)
                  </p>
                </div>
              </FadeInScroll>

            </div>
          </div>

        </div>

        {/* ── Call To Action Section ── */}
        <FadeInScroll direction="up" delay={0.35}>
          <div className="relative rounded-2xl overflow-hidden border border-zinc-850/80 bg-zinc-950/45 p-8 sm:p-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 mt-4 select-none">
            {/* Top right subtle glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none -z-10" />

            <div className="flex flex-col gap-2.5 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Ready to build something <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">extraordinary?</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md">
                Let's team up to build high-performance backend pipelines or high-fidelity frontend systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link 
                id="cta-start-project"
                href="/contact"
                className="cursor-hover inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/20 hover:scale-102 transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link 
                id="cta-view-portfolio"
                href="/projects"
                className="cursor-hover inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 hover:text-white font-semibold text-xs sm:text-sm hover:scale-102 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </FadeInScroll>

      </div>
    </div>
  );
}
