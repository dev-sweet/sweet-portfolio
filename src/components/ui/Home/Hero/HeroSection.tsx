"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "Full-Stack Engineer",
  "Next.js Developer",
  "React Specialist",
  "API Architect",
  "AI Integration Dev",
];

const TAGS = [
  { label: "Next.js 14", accent: true },
  { label: "React 19", accent: true },
  { label: "TypeScript", accent: false },
  { label: "Node.js", accent: false },
  { label: "MongoDB", accent: false },
  { label: "Express", accent: false },
  { label: "MySQL", accent: false },
  { label: "OpenAI API", accent: false },
  { label: "JWT · Auth", accent: false },
  { label: "REST APIs", accent: false },
];

const SKILLS = [
  { label: "Next.js", pct: 90, color: "#534AB7" },
  { label: "Node.js", pct: 85, color: "#534AB7" },
  { label: "MongoDB", pct: 80, color: "#1D9E75" },
  { label: "TypeScript", pct: 75, color: "#1D9E75" },
];

// suffix = the non-numeric part e.g. "+", "%", ""
const STATS = [
  { target: 3, suffix: "+", label: "// yrs experience" },
  { target: 15, suffix: "+", label: "// projects shipped" },
  { target: 5, suffix: "", label: "// tech articles" },
  { target: 100, suffix: "%", label: "// remote ready" },
];

// ── Animation variants ──
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

// ── Counter-up hook ──
function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
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
  hasBorderTop,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
  hasBorderRight: boolean;
  hasBorderTop: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCountUp(target, 1400, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={[
        "flex flex-col items-center text-center py-2",
        hasBorderRight ? "border-r border-[#1a1a2e]" : "",
        hasBorderTop
          ? "border-t border-[#1a1a2e] pt-6 sm:pt-2 sm:border-t-0"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-none tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] sm:text-[11px] text-[#5f5e5a] font-mono mt-2">
        {label}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const word = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIdx((c) => c + 1);
        }
      }, 95);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setRoleIdx((r) => (r + 1) % ROLES.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }, 60);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="w-full min-h-screen bg-[#080810] flex flex-col justify-between md:py-[80px] py-[40px] lg:px-32 md:px-16 sm:px-8 px-6 pt-10 md:pt-20 pb-10">
      {/* ── Top grid ── */}
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center py-10">
        {/* ── Left column ── */}
        <div className="flex flex-col w-full">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 self-start bg-[#0f0f20] border border-[#2a2a4a] rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#1d9e75] animate-pulse flex-shrink-0" />
            <span className="text-[10px] sm:text-[11px] text-[#afa9ec] font-mono">
              available for new projects
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="text-[12px] sm:text-[13px] text-[#5dcaa5] font-mono tracking-widest mb-2 sm:mb-3"
          >
            {"//"} sweet_ali.init()
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="font-bold text-white leading-tight mb-3"
            style={{
              fontSize: "clamp(2rem, 7vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              className="font-semibold text-white/70"
              style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.875rem)" }}
            >
              Hey, I&apos;m
            </span>
            <br />
            <span className="text-[#7f77dd]">Sweet Ali</span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1,
              }}
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
              }}
              className="ml-2"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="flex items-center gap-2 mb-5 sm:mb-7"
          >
            <span className="text-[10px] sm:text-[11px] text-[#5f5e5a] font-mono">
              role:
            </span>
            <span
              className="font-mono text-[#5dcaa5]"
              style={{ fontSize: "clamp(0.85rem, 2.5vw, 1.25rem)" }}
            >
              {displayed}
              <span className="inline-block w-[2px] h-[1.1em] bg-[#5dcaa5] align-middle ml-0.5 animate-blink" />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="text-sm sm:text-[15px] text-[#9a9a9a] leading-relaxed w-full max-w-xl mb-6 sm:mb-8"
          >
            I architect and ship{" "}
            <strong className="text-[#e0e0e0] font-medium">
              production-grade web applications
            </strong>{" "}
            using React, Next.js, and Node.js. Specializing in{" "}
            <strong className="text-[#e0e0e0] font-medium">
              scalable backends, type-safe APIs
            </strong>
            , and seamless user experiences — including AI-powered features.
          </motion.p>

          {/* Tags */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
          >
            {TAGS.map((t) => (
              <span
                key={t.label}
                className={[
                  "px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-[11px] font-mono border transition-colors",
                  t.accent
                    ? "bg-[#0f0f20] border-[#534ab7] text-[#7f77dd]"
                    : "bg-[#0f0f20] border-[#2a2a4a] text-[#afa9ec]",
                ].join(" ")}
              >
                {t.label}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/resume-sweet.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-2 bg-[#534ab7] hover:bg-[#7f77dd] text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors duration-200"
            >
              Download Resume
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="flex items-center"
              >
                <ArrowDown size={13} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="flex flex-col items-center gap-4 flex-shrink-0
                     mt-8 lg:mt-0
                     sm:flex-row sm:justify-center sm:items-start sm:gap-6
                     lg:flex-col lg:items-center"
        >
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col items-center gap-3 sm:gap-4 bg-[#0f0f1a] border border-[#2a2a4a] rounded-[20px] p-5 sm:p-6
                       w-full max-w-[280px] sm:max-w-[220px] lg:w-[220px]"
          >
            <div className="rounded-full border-2 border-[#534ab7] p-[3px] overflow-hidden flex-shrink-0 w-20 h-20 sm:w-[110px] sm:h-[110px]">
              <div className="w-full h-full rounded-full bg-[#1a1a3e] overflow-hidden">
                <Image
                  src="/bg.png"
                  alt="Sweet Ali"
                  width={214}
                  height={314}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="text-sm sm:text-[15px] font-semibold text-white text-center">
              Sweet Ali
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#5dcaa5] font-mono text-center -mt-1 sm:-mt-2">
              full-stack engineer
            </div>
            <div className="flex items-center gap-2 bg-[#0a1a14] border border-[#0f6e56] rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d9e75] animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] text-[#1d9e75]">
                Online · Open to work
              </span>
            </div>
            <div className="flex gap-2">
              {[
                {
                  href: "https://github.com/dev-sweet",
                  icon: <FaGithub size={14} />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/sweet-ali",
                  icon: <FaLinkedin size={14} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://twitter.com/your-handle",
                  icon: <FaTwitter size={14} />,
                  label: "Twitter",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-[#0f0f20] border border-[#2a2a4a] text-[#888780] hover:border-[#534ab7] hover:text-[#afa9ec] transition-colors duration-200"
                >
                  {l.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Skill mini-card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            className="bg-[#0f0f20] border border-[#2a2a4a] rounded-xl p-4
                       w-full max-w-[280px] sm:max-w-[220px] lg:w-[220px]"
          >
            <p className="text-[10px] text-[#5f5e5a] font-mono mb-3">
              {"//"} skill_proficiency
            </p>
            {SKILLS.map((s, i) => (
              <div
                key={s.label}
                className="flex items-center gap-2 mb-2 last:mb-0"
              >
                <span className="text-[10px] sm:text-[11px] text-[#9a9a9a] font-mono w-16 sm:w-[72px] flex-shrink-0">
                  {s.label}
                </span>
                <div className="flex-1 h-1 bg-[#1a1a2e] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: s.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${s.pct}%` }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.7 + i * 0.1,
                    }}
                  />
                </div>
                <span className="text-[10px] text-[#5f5e5a] w-7 text-right flex-shrink-0">
                  {s.pct}%
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Full-width stats bar with counter-up ── */}
      <div className="w-full container mx-auto grid grid-cols-2 sm:grid-cols-4 border-t border-[#1a1a2e] mt-10 sm:mt-12 pt-6 sm:pt-8">
        {STATS.map((s, i) => (
          <StatCell
            key={s.label}
            target={s.target}
            suffix={s.suffix}
            label={s.label}
            delay={0.08 * i}
            hasBorderRight={i === 0 || i === 1 || i === 2}
            hasBorderTop={i >= 2}
          />
        ))}
      </div>
    </section>
  );
}
