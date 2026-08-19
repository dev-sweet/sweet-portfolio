"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, } from "react-icons/fa";
import { Code } from "lucide-react";
import ProfileCard from "@/components/shared/ProfileCard";
import { AuroraText } from "../../aurora-text";

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
      className={`flex flex-col items-center justify-center text-center py-4 ${hasBorderRight ? "border-r border-[#1C2633]" : ""
        }`}
    >
      <span className="text-3xl sm:text-4xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent leading-none tabular-nums tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-xs text-[#667386] font-mono mt-2 uppercase tracking-widest">
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
      className="relative w-full flex flex-col justify-between py-18 bg-transparent overflow-hidden"
    >
      {/* ── Top grid ── */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-12 items-center justify-center py-4 relative z-10">

        {/* ── Mobile-only Profile Card ── */}
        <div className="lg:hidden w-full flex justify-center mb-6">
          <ProfileCard />
        </div>

        {/* ── Left / Main intro column ── */}
        <div className="flex flex-col w-full text-left">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-[#0D1118] border border-[#1C2633] rounded-full px-3 py-1.5 mb-6 shadow-md shadow-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0 shadow-lg shadow-[#22C55E]/20" />
            <span className="text-[10px] sm:text-[11px] text-[#A1ACBA] uppercase font-mono tracking-widest font-bold">
              OPEN TO FULL-TIME ROLES
            </span>
          </div>
          {/* Main Heading */}
          <h1
            className="font-extrabold text-[#F1F5F9] leading-[1.1] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
          >
            Building <AuroraText>Real-World</AuroraText>
            <br />
            <AuroraText>Digital</AuroraText> Products
          </h1>

          {/* Intro Paragraph */}
          <p className="text-sm sm:text-base text-[#A1ACBA] leading-relaxed mb-4 font-light">
            Full-Stack Engineer with 1+ year of professional experience turning business requirements into reliable software. I've worked on ERP, healthcare, e-commerce, and business management systems, covering everything from user interfaces and APIs to databases.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            <Link
              href="/resume-sweet.pdf"
              target="_blank"
              download
              className="cursor-hover inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#3B82F6]/10 transition-all duration-300"
            >
              Download Resume
              <FaDownload size={12} />
            </Link>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "projects")}
              className="cursor-hover inline-flex items-center gap-2 bg-[#0D1118]/50 border border-[#29384A] hover:border-[#3B82F6] text-[#A1ACBA] hover:text-[#F1F5F9] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#0D1118] transition-all duration-300 backdrop-blur-sm"
            >
              GitHub Portfolio
              <Code size={14} className="text-[#667386]" />
            </a>
          </div>
        </div>

      </div>

      {/* ── Statistics Bar ── */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 border-t border-[#1C2633] mt-6 sm:mt-8 relative z-10">
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
