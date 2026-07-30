"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import Link from "next/link";
import { 
  Briefcase, 
  GraduationCap, 
  Lock, 
  ArrowRight, 
  Terminal, 
  Award,
  Code2,
  Palette,
  Compass,
  Server,
  Database,
  Cloud,
  GitBranch,
  Sparkles
} from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiMongodb, 
  SiVercel 
} from "react-icons/si";

// ── Auto Typing Code Window Component ──
function TypingCodeEditor() {
  const [visibleCount, setVisibleCount] = useState(0);
  const codeText = `const developer = {
  name: 'Sweet Ali',
  role: 'Full Stack Engineer',
  focus: 'Scalable Web Apps',
  mission: 'Clear & Maintainable Code'
};

// EXPERIENCE_SUMMARY`;

  useEffect(() => {
    if (visibleCount >= codeText.length) return;
    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, 22);
    return () => clearTimeout(timer);
  }, [visibleCount, codeText.length]);

  const currentText = codeText.slice(0, visibleCount);

  // High fidelity syntax tokenizer
  const renderHighlightedCode = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      if (line.trim().startsWith("//")) {
        return (
          <div key={lineIdx} className="text-[#64748b] font-mono text-xs sm:text-sm italic">
            {line}
          </div>
        );
      }

      // Tokenize normal js code line
      const parts = [];
      const regex = /(const)|(developer)|(=|\{|\}|;|,)|('(?:[^'\\]|\\.)*')|(\b[a-zA-Z_]+\b)(?=\s*:)|([\s\S])/g;
      let match;
      let lastIndex = 0;

      while ((match = regex.exec(line)) !== null) {
        const [full, kwConst, varDev, punctuation, stringVal, keyProp, rest] = match;

        if (kwConst) {
          parts.push(<span key={match.index} className="text-[#ec4899] font-bold">const</span>);
        } else if (varDev) {
          parts.push(<span key={match.index} className="text-slate-100 font-semibold">developer</span>);
        } else if (keyProp) {
          parts.push(<span key={match.index} className="text-[#38bdf8] font-medium">{keyProp}</span>);
        } else if (stringVal) {
          parts.push(<span key={match.index} className="text-[#2dd4bf] font-medium">{stringVal}</span>);
        } else if (punctuation) {
          parts.push(<span key={match.index} className="text-slate-300">{punctuation}</span>);
        } else {
          parts.push(<span key={match.index} className="text-slate-300">{match[0]}</span>);
        }
      }

      return (
        <div key={lineIdx} className="leading-relaxed">
          {parts}
        </div>
      );
    });
  };

  return (
    <pre className="font-mono text-xs sm:text-sm select-none overflow-x-auto">
      <code>
        {renderHighlightedCode(currentText)}
        {visibleCount < codeText.length && (
          <span className="text-[#00f2fe] animate-pulse font-bold ml-0.5">▌</span>
        )}
      </code>
    </pre>
  );
}

// ── Smooth Scroll Entrance Animation Wrapper ──
function AnimatedSection({ 
  children, 
  delay = 0, 
  yOffset = 30 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  yOffset?: number; 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const frontendSkills = [
    { name: "React", icon: <FaReact className="w-5 h-5 sm:w-6 sm:h-6 text-[#61dafb]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 sm:w-6 sm:h-6 text-[#3178c6]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-[#38bdf8]" /> },
    { name: "Redux", icon: <SiRedux className="w-5 h-5 sm:w-6 sm:h-6 text-[#764abc]" /> }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="w-5 h-5 sm:w-6 sm:h-6 text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 sm:w-6 sm:h-6 text-[#47a248]" /> },
    { name: "Auth/JWT", icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" /> },
    { name: "Vercel", icon: <SiVercel className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
    { name: "Git/GH", icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-[#f05032]" /> }
  ];

  return (
    <div className="relative min-h-screen text-white bg-[#070a14] pt-6 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden select-none">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-10 sm:gap-12 pt-0">
        
        {/* ── Page Header: About Me ── */}
        <section className="flex flex-col items-center text-center gap-3">
          <AnimatedSection delay={0} yOffset={25}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              About{" "}
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#818cf8] to-[#a855f7] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,242,254,0.35)]">
                Me
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1} yOffset={20}>
            <p className="max-w-2xl mx-auto text-slate-300 leading-relaxed text-sm sm:text-base font-light text-center">
              I'm a Full-Stack Developer building scalable web applications with modern JavaScript. 
              I specialize in clean frontend architectures and robust backend systems that deliver reliable, 
              type-safe solutions.
            </p>
          </AnimatedSection>
        </section>

        {/* ── First Grid (Row 1): Code Window + Technical Abilities ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Code Window & Quick Stats */}
          <AnimatedSection delay={0.15}>
            <div className="h-full bg-[#0b0f1d] border border-[#182036] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00f2fe]/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] transition-all duration-500 group relative">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#161d33]">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  developer.ts
                </span>
                <div className="w-10" />
              </div>

              {/* Code Typing Box */}
              <div className="bg-[#060913] border border-[#141b2e] rounded-xl p-5 min-h-[160px] flex items-center shadow-inner">
                <TypingCodeEditor />
              </div>

              {/* Stats Cards inside Code Container */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#070a14] border border-[#161d33] rounded-xl p-4 sm:p-5 flex flex-col justify-center hover:border-[#00f2fe]/40 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#00f2fe] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(0,242,254,0.3)]">
                    3+
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-1">
                    Yrs Exp
                  </span>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#070a14] border border-[#161d33] rounded-xl p-4 sm:p-5 flex flex-col justify-center hover:border-purple-500/40 transition-all duration-300"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono tracking-tight drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    15+
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-1">
                    Projects
                  </span>
                </motion.div>
              </div>

            </div>
          </AnimatedSection>

          {/* Right Column: Technical Abilities */}
          <AnimatedSection delay={0.2}>
            <div className="h-full bg-[#0b0f1d] border border-[#182036] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#00f2fe]/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] transition-all duration-500 group">
              
              {/* Header Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] shadow-md shadow-cyan-500/10">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Technical Abilities
                </h3>
              </div>

              {/* Frontend Skills Section */}
              <div className="flex flex-col gap-3 my-2">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-[#00f2fe]" />
                  <span className="text-[11px] font-mono text-[#00f2fe] font-bold uppercase tracking-widest">
                    FRONTEND
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00f2fe]/20 to-transparent" />
                </div>

                <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                  {frontendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-[#0f1426] border border-[#1a233d] hover:border-[#00f2fe]/50 hover:bg-[#141b34] rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-cyan-500/10"
                    >
                      {skill.icon}
                      <span className="text-[11px] font-mono font-medium text-slate-200 truncate w-full">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Backends & Tools Section */}
              <div className="flex flex-col gap-3 my-2">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-[#00f2fe]" />
                  <span className="text-[11px] font-mono text-[#00f2fe] font-bold uppercase tracking-widest">
                    BACKENDS & TOOLS
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00f2fe]/20 to-transparent" />
                </div>

                <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
                  {backendSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-[#0f1426] border border-[#1a233d] hover:border-[#00f2fe]/50 hover:bg-[#141b34] rounded-xl p-3 flex flex-col items-center justify-center gap-2 text-center transition-all duration-300 cursor-pointer shadow-sm hover:shadow-cyan-500/10"
                    >
                      {skill.icon}
                      <span className="text-[11px] font-mono font-medium text-slate-200 truncate w-full">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>

        </div>

        {/* ── Second Grid (Row 2): Professional Journey + Education & Certs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Professional Journey */}
          <AnimatedSection delay={0.25}>
            <div className="h-full bg-[#0b0f1d] border border-[#182036] rounded-2xl p-6 sm:p-7 hover:border-[#00f2fe]/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] transition-all duration-500 flex flex-col justify-between">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] shadow-md shadow-cyan-500/10">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Professional Journey
                </h3>
              </div>

              <div className="flex flex-col gap-6 relative pl-2">
                
                {/* Job Item 1 */}
                <div className="flex flex-col gap-1.5 relative">
                  <span className="text-xs font-mono font-bold text-[#00f2fe] tracking-wider uppercase">
                    MAY 2023 – PRESENT
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Full-Stack Developer
                  </h4>
                  <span className="text-xs text-slate-400 font-medium mb-1">
                    Maple Service Solutions Ltd.
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-300 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2fe] font-mono select-none">&gt;</span>
                      Developing high-performance CRM systems.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00f2fe] font-mono select-none">&gt;</span>
                      Optimized backend API latency by 40%.
                    </li>
                  </ul>
                </div>

                <div className="h-[1px] w-full bg-[#161d33]" />

                {/* Job Item 2 */}
                <div className="flex flex-col gap-1.5 relative">
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                    JAN 2021 – DEC 2022
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Junior Engineer
                  </h4>
                  <span className="text-xs text-slate-400 font-medium mb-1">
                    TechInnovate Corp.
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-slate-300 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono select-none">&gt;</span>
                      Lead frontend migration to React 18.
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </AnimatedSection>

          {/* Right Column: Education & Certs */}
          <AnimatedSection delay={0.3}>
            <div className="h-full bg-[#0b0f1d] border border-[#182036] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all duration-500 gap-6">
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md shadow-purple-500/10">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Education & Certs
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                
                {/* Degree Card */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="bg-[#070a14] border border-[#161d33] rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300"
                >
                  <span className="text-xs font-mono font-bold text-purple-400 tracking-wider">
                    2020 – 2024
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                    BSS in Folklore Studies
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Islamic University, Bangladesh
                  </p>
                  <p className="text-xs italic text-slate-400 mt-2 font-light">
                    Minor In Digital Humanities & Data Analysis
                  </p>
                </motion.div>

                {/* Certificate Card */}
                <motion.div 
                  whileHover={{ x: 3 }}
                  className="bg-[#070a14] border border-[#161d33] rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300"
                >
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                    2022
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                    Complete Web Development
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Programming Hero (Jhankar Mahbub)
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-widest">
                      <Award className="w-3 h-3 text-purple-400" />
                      CERTIFIED
                    </span>
                  </div>
                </motion.div>

              </div>

            </div>
          </AnimatedSection>

        </div>

        {/* ── Third Section (Row 3): Call To Action Box ── */}
        <AnimatedSection delay={0.35}>
          <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-[#0a0e1c] via-[#0d1326] to-[#130f28] p-8 sm:p-10 backdrop-blur-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl hover:border-[#00f2fe]/50 transition-all duration-500 group">
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-[#00f2fe]/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-2 text-center md:text-left z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready to build something{" "}
                <span className="bg-gradient-to-r from-[#00f2fe] via-[#818cf8] to-[#a855f7] bg-clip-text text-transparent">
                  extraordinary?
                </span>
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 z-10">
              <Link
                href="/contact"
                className="cursor-hover group/btn px-6 py-3 rounded-xl bg-[#00f2fe] hover:bg-cyan-300 text-zinc-950 font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="cursor-hover px-6 py-3 rounded-xl bg-[#0c1122] hover:bg-[#151c35] border border-[#212b48] text-slate-200 hover:text-white font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                View Portfolio
              </Link>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
