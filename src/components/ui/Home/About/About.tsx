"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AutoCodeEditor from "./AutoCode";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { AuroraText } from "../../aurora-text";
import Image from "next/image";

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const offsets = {
    up: { x: 0, y: 32 },
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const AboutMe = () => {
  const codeRef = useRef<HTMLDivElement>(null);
  const codeInView = useInView(codeRef, { once: true, margin: "-60px" });

  // const info = [
  //   {
  //     title: "Experience",
  //     organization: "Maple Service Solutions Ltd.",
  //     value: "Full-Stack Developer",
  //     duration: "May 2025 - Present",
  //     icon: <Briefcase className="w-5 h-5" />,
  //   },
  //   {
  //     title: "Education",
  //     organization: "Islamic University, Bangladesh",
  //     value: "BSS in Folklore Studies",
  //     duration: "2020 - 2024",
  //     icon: <GraduationCap className="w-5 h-5" />,
  //   },
  //   {
  //     title: "Courses",
  //     organization: "Programming Hero",
  //     value: "Complete Web Development Course with Jhankar Mahbub",
  //     duration: "2021",
  //     icon: <Award className="w-5 h-5" />,
  //   },
  //   {
  //     title: "Co-curricular",
  //     organization: "Islamic University",
  //     value: "President, Folklore Club (ICT Wing)",
  //     duration: "2024",
  //     icon: <Award className="w-5 h-5" />,
  //   },
  // ];

  const backendSkills = [
    { name: "Node.js", image: "/about/node.png" },
    { name: "Express", image: "/about/express.png" },
    { name: "JWT", image: "/about/jwt.png" },
    { name: "MongoDB", image: "/about/mongodb.png" },
    { name: "Git", image: "/about/git.png" },
    { name: "GitHub", image: "/about/github.png" },
    { name: "Vercel", image: "/about/vercel.png" },
    { name: "VS Code", image: "/about/vscode.png" },
  ];

  const frontendSkills = [
    { name: "Next.js", image: "/about/next.png" },
    { name: "React", image: "/about/react.png" },
    { name: "TypeScript", image: "/about/ts.png" },
    { name: "JavaScript", image: "/about/js.png" },
    { name: "Redux", image: "/about/Redux.png" },
    { name: "Tailwind", image: "/about/tw.png" },
    { name: "Firebase", image: "/about/firebase.png" },
  ];

  return (
    <section className="py-0 text-white overflow-hidden w-full">
      <div className="w-full relative z-10">
        {/* ── Heading ── */}
        <Reveal direction="up" delay={0}>
          <h1 className="text-4xl font-bold text-[#F1F5F9] text-center pb-3">
            About <AuroraText>Me</AuroraText>
          </h1>
        </Reveal>

        {/* ── Subtitle ── */}
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto text-[#A1ACBA] leading-relaxed text-lg pb-6">
            I&apos;m a Full-Stack Developer building scalable web applications
            with modern JavaScript. I specialize in clean frontend architectures
            and robust backend systems that deliver reliable, type-safe
            solutions.
          </p>
        </Reveal>

        <div className="pt-5">
          <Reveal direction="left" delay={0.15} className="w-full">
            {/* Code card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg blur opacity-15 group-hover:opacity-30 transition duration-1000" />
              <div
                ref={codeRef}
                className="h-[214px] relative bg-[#080B10] border border-[#1C2633] p-6 rounded-lg shadow-2xl"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#F43F5E]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <pre className="font-mono text-sm text-[#A1ACBA]">
                  <code>
                    <AutoCodeEditor start={codeInView} />
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>
          {/* skills */}
          <Reveal
            direction="right"
            delay={0.2}
            className="w-full space-y-6"
          >
            <div className="p-5 rounded-xl bg-[#0D1118] border border-[#1C2633] hover:border-[#29384A] transition-all duration-300 hover:-translate-y-1">
              <Reveal direction="up" delay={0.25}>
                <h2 className="text-center text-xl font-bold text-[#F1F5F9] pb-4">
                  Technical Abilites
                </h2>
              </Reveal>

              {/* Frontend label */}
              <Reveal direction="up" delay={0.3}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs uppercase tracking-widest text-[#8B5CF6] font-bold">
                    Frontend
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#8B5CF6]/50 to-transparent" />
                </div>
              </Reveal>

              {/* Frontend skill icons — staggered */}
              <div className="w-full flex flex-wrap gap-3 mt-3">
                {frontendSkills.map((item, i) => (
                  <Reveal key={i} direction="up" delay={0.32 + i * 0.05}>
                    <div className="group w-18 h-18 relative p-2 rounded-lg bg-[#111722] border border-[#1C2633] hover:border-[#3B82F6] hover:bg-[#111722] transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 group-hover:opacity-20 blur rounded-xl transition" />
                      <div className="relative flex flex-col gap-y-2 items-center">
                        <Image
                          className="object-fill"
                          src={item.image}
                          alt={item.name}
                          width={30}
                          height={30}
                        />
                        <p className="text-xs text-[#A1ACBA] group-hover:text-[#F1F5F9] font-semibold transition-colors">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Backend label */}
              <Reveal direction="up" delay={0.4}>
                <div className="flex items-center gap-4 my-5">
                  <span className="text-xs uppercase tracking-widest text-[#3B82F6] font-bold">
                    Backends & Tools
                  </span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#3B82F6]/50 to-transparent" />
                </div>
              </Reveal>

              {/* Backend skill icons — staggered */}
              <div className="w-full flex flex-wrap gap-3 mt-3">
                {backendSkills.map((item, i) => (
                  <Reveal key={i} direction="up" delay={0.42 + i * 0.05}>
                    <div className="group w-18 h-18 relative p-2 rounded-lg bg-[#111722] border border-[#1C2633] hover:border-[#3B82F6] hover:bg-[#111722] transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] opacity-0 group-hover:opacity-20 blur rounded-xl transition" />
                      <div className="relative flex flex-col gap-y-2 items-center">
                        <Image
                          className="grayscale group-hover:grayscale-0 transition-all duration-500"
                          src={item.image}
                          alt={item.name}
                          width={35}
                          height={35}
                        />
                        <p className="relative text-[10px] md:text-xs text-[#A1ACBA] group-hover:text-[#F1F5F9] font-medium transition-colors">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
