"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Code } from "lucide-react";

const STATS = [
  { target: 3, suffix: "+", label: "// YEARS EXP" },
  { target: 15, suffix: "+", label: "// SYSTEMS SHIPPED" },
  { target: 5, suffix: "", label: "// TECH PUBS" },
  { target: 100, suffix: "%", label: "// REMOTE VELOCITY" },
];

const PILLS = ["React 18", "TypeScript", "Node.js", "AWS Cloud", "Next.js"];

// ── Counter-up hook ──
function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Single stat cell ──
function StatCell({
  target,
  suffix,
  label,
  delay,
  hasBorderRight,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
  hasBorderRight: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(target, 1200, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`flex flex-col items-center justify-center text-center py-4 ${
        hasBorderRight ? "border-r border-zinc-850" : ""
      }`}
    >
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-450 to-blue-500 bg-clip-text text-transparent leading-none tabular-nums tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-3 uppercase tracking-widest">
        {label}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - (window.innerWidth >= 768 ? 0 : 80),
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-16 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent overflow-hidden"
    >
      {/* Dynamic ambient lights */}
      <div className="absolute top-[-10%] left-[-15%] w-[450px] h-[450px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* ── Top grid ── */}
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center py-8 relative z-10">
        
        {/* ── Left column ── */}
        <div className="flex flex-col w-full text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-zinc-950/65 border border-zinc-850 rounded-full px-3 py-1.5 mb-6 shadow-md shadow-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-lg shadow-emerald-400/20" />
            <span className="text-[10px] sm:text-[11px] text-zinc-400 uppercase font-mono tracking-widest font-bold">
              OPEN FOR SENIOR ROLES
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#7c3aed] font-mono tracking-wider mb-3">
            {"//"} init_profile(&quot;Sweet Ali&quot;)
          </p>

          {/* Main Heading */}
          <h1
            className="font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 4.5rem)" }}
          >
            Architecting <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-sm sm:text-base text-zinc-450 leading-relaxed max-w-xl mb-8 font-light">
            Senior Full Stack Engineer crafting <span className="text-[#7c3aed] font-normal">production-grade ecosystems</span> with React, Node, and Scalable Cloud Architectures. Bridging the gap between complex engineering and human-centric design.
          </p>

          {/* Key Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {PILLS.map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 rounded-lg bg-zinc-950/50 border border-zinc-850 font-mono text-xs text-zinc-400 tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <Link
              href="/resume-sweet.pdf"
              target="_blank"
              download
              className="cursor-hover inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#8b5cf6] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#7c3aed]/10 transition-all duration-300"
            >
              Download Resume
              <FaDownload size={12} />
            </Link>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="cursor-hover inline-flex items-center gap-2 bg-zinc-950/50 border border-zinc-850 hover:border-cyan-400 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-zinc-950 transition-all duration-300 backdrop-blur-sm"
            >
              GitHub Portfolio
              <Code size={14} className="text-zinc-400" />
            </a>
          </div>
        </div>

        {/* ── Right column (Showcase Card) ── */}
        <div className="flex items-center justify-center w-full relative">
          {/* Card Container */}
          <div className="relative w-full max-w-[300px] bg-zinc-950/45 border border-zinc-850 rounded-[24px] shadow-2xl backdrop-blur-md p-6 flex flex-col items-center">
            {/* Circle profile picture with glowing border */}
            <div className="relative w-24 h-24 rounded-full border-2 border-cyan-400/80 p-1 flex-shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden relative">
                <Image
                  src="/bg.png"
                  alt="Sweet Ali"
                  fill
                  sizes="100px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Online Checkmark */}
              <span className="absolute bottom-1 right-1 w-5.5 h-5.5 rounded-full bg-emerald-400 border-[3.5px] border-[#080812] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>

            {/* Profile Info */}
            <h2 className="text-lg font-extrabold text-white mt-4 tracking-tight leading-none">
              Sweet Ali
            </h2>
            <p className="text-[10px] font-mono text-cyan-455 uppercase tracking-widest mt-2 font-bold">
              Senior Full-Stack Engineer
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4 border-t border-zinc-900/60 w-full pt-4 justify-center">
              {[
                { href: "https://github.com/dev-sweet", icon: <FaGithub size={14} />, label: "GitHub" },
                { href: "https://linkedin.com/in/sweet-ali", icon: <FaLinkedin size={14} />, label: "LinkedIn" },
                { href: "mailto:sweetali0520@gmail.com", icon: <FaEnvelope size={14} />, label: "Mail" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="cursor-hover w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900/40 border border-zinc-850 text-zinc-405 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Proficiency section */}
            <div className="w-full mt-6 border-t border-zinc-900/60 pt-4 flex flex-col gap-3 select-none text-left">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                STACK CORE PROFICIENCY
              </span>

              {/* Skill 1 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>System Architecture</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: "95%" }} />
                </div>
              </div>

              {/* Skill 2 */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Backend Orchestration</span>
                  <span className="text-[#7c3aed]">70%</span>
                </div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7c3aed] rounded-full" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Statistics Bar ── */}
      <div className="w-full container mx-auto grid grid-cols-2 sm:grid-cols-4 border-t border-zinc-900/60 mt-12 sm:mt-16 pt-8 sm:pt-10 relative z-10">
        {STATS.map((s, i) => (
          <StatCell
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
            delay={0.08 * i}
            hasBorderRight={i < 3}
          />
        ))}
      </div>
    </section>
  );
}
