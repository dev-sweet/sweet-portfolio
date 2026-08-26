"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Code } from "lucide-react";
import ProfileCard from "@/components/shared/ProfileCard";
import { AuroraText } from "../../aurora-text";

const STATS = [
  { target: 3, suffix: "+", label: "// YEARS EXP" },
  { target: 15, suffix: "+", label: "// SYSTEMS SHIPPED" },
  { target: 5, suffix: "", label: "// TECH PUBS" },
  { target: 100, suffix: "%", label: "// REMOTE VELOCITY" },
];

// ── Counter-up hook ──
function useCountUp(target: number, duration = 1000, start = false) {
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
  const inView = useInView(ref, { once: true, margin: "-20px" });
  const count = useCountUp(target, 1000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -2 }}
      className={`flex flex-col items-center justify-center text-center py-4 transition-transform duration-200 ${
        hasBorderRight ? "border-r border-[#1C2633]" : ""
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

// ── Motion Variants for coordinated orchestration ──
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18, // Starts right as left profile card arrives
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

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
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col w-full text-left"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 self-start bg-[#0D1118] border border-[#1C2633] rounded-full px-3 py-1.5 mb-6 shadow-md shadow-black/20 hover:border-[#3B82F6]/50 transition-colors duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse flex-shrink-0 shadow-lg shadow-[#22C55E]/20" />
            <span className="text-[10px] sm:text-[11px] text-[#A1ACBA] uppercase font-mono tracking-widest font-bold">
              OPEN TO FULL-TIME ROLES
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-extrabold text-[#F1F5F9] leading-[1.1] mb-6 tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)" }}
          >
            Building <AuroraText>Real-World</AuroraText>
            <br />
            <AuroraText>Digital</AuroraText> Products
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#A1ACBA] leading-relaxed mb-4 font-light"
          >
            Full-Stack Engineer with 1+ year of professional experience turning business requirements into reliable software. I've worked on ERP, healthcare, e-commerce, and business management systems, covering everything from user interfaces and APIs to databases.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-4"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/resume-sweet.pdf"
                target="_blank"
                download
                className="cursor-hover inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#60A5FA] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#3B82F6]/10 transition-colors duration-300 group"
              >
                Download Resume
                <FaDownload size={12} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="cursor-hover inline-flex items-center gap-2 bg-[#0D1118]/50 border border-[#29384A] hover:border-[#3B82F6] text-[#A1ACBA] hover:text-[#F1F5F9] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-[#0D1118] transition-all duration-300 backdrop-blur-sm group"
              >
                GitHub Portfolio
                <Code size={14} className="text-[#667386] group-hover:text-[#3B82F6] transition-colors duration-200" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      {/* ── Statistics Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-2 sm:grid-cols-4 border-t border-[#1C2633] mt-6 sm:mt-8 relative z-10"
      >
        {STATS.map((s, i) => (
          <StatCell
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
            delay={0.48 + 0.06 * i}
            hasBorderRight={i < 3}
          />
        ))}
      </motion.div>
    </section>
  );
}
