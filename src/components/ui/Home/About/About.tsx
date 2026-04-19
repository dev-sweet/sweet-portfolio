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
    up:    { x: 0,   y: 32 },
    left:  { x: -32, y: 0  },
    right: { x: 32,  y: 0  },
    none:  { x: 0,   y: 0  },
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

  const info = [
    {
      title: "Experience",
      organization: "Maple Service Solutions Ltd.",
      value: "Full-Stack Developer",
      duration: "May 2025 - Present",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      title: "Education",
      organization: "Islamic University, Bangladesh",
      value: "BSS in Folklore Studies",
      duration: "2020 - 2024",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: "Courses",
      organization: "Programming Hero",
      value: "Complete Web Development Course with Jhankar Mahbub",
      duration: "2021",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Co-curricular",
      organization: "Islamic University",
      value: "President, Folklore Club (ICT Wing)",
      duration: "2024",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const backendSkills = [
    { name: "Node.js",  image: "/about/node.png"    },
    { name: "Express",  image: "/about/express.png" },
    { name: "JWT",      image: "/about/jwt.png"     },
    { name: "MongoDB",  image: "/about/mongodb.png" },
    { name: "Git",      image: "/about/git.png"     },
    { name: "GitHub",   image: "/about/github.png"  },
    { name: "Vercel",   image: "/about/vercel.png"  },
    { name: "VS Code",  image: "/about/vscode.png"  },
  ];

  const frontendSkills = [
    { name: "Next.js",    image: "/about/next.png"     },
    { name: "React",      image: "/about/react.png"    },
    { name: "TypeScript", image: "/about/ts.png"       },
    { name: "JavaScript", image: "/about/js.png"       },
    { name: "Redux",      image: "/about/Redux.png"    },
    { name: "Tailwind",   image: "/about/tw.png"       },
    { name: "Firebase",   image: "/about/firebase.png" },
  ];

  return (
    <section className="md:py-[80px] py-[40px] lg:px-32 md:px-16 sm:px-8 px-6 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto">

        {/* ── Heading ── */}
        <Reveal direction="up" delay={0}>
          <h1 className="text-4xl font-bold text-gray-200 text-center pb-3">
            About <AuroraText>Me</AuroraText>
          </h1>
        </Reveal>

        {/* ── Subtitle ── */}
        <Reveal direction="up" delay={0.1}>
          <p className="mx-auto lg:max-w-7/12 text-gray-400 leading-relaxed text-lg pb-6">
            I&apos;m a Full-Stack Developer building scalable web applications
            with modern JavaScript. I specialize in clean frontend architectures
            and robust backend systems that deliver reliable, type-safe solutions.
          </p>
        </Reveal>

        <div className="pt-5 flex flex-col lg:flex-row items-center gap-12">

          {/* ── Left column ── */}
          <Reveal direction="left" delay={0.15} className="w-full lg:w-1/2">

            {/* Code card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <div
                ref={codeRef}
                className="h-[214px] relative bg-[#111111] border border-white/10 p-6 rounded-lg shadow-2xl"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm text-gray-400">
                  <code>
                    <AutoCodeEditor start={codeInView} />
                  </code>
                </pre>
              </div>
            </div>

            {/* Info cards — staggered */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {info.map((item, i) => (
                <Reveal key={item.title} direction="up" delay={0.2 + i * 0.08}>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition h-full">
                    <div className="flex items-center gap-3">
                      <div className="text-purple-400">{item.icon}</div>
                      <div>
                        <p className="text-xs text-gray-400">{item.title}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                        <p className="text-sm font-medium text-gray-300">{item.organization}</p>
                        <p className="text-xs font-medium text-gray-300">{item.duration}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* ── Right column ── */}
          <Reveal direction="right" delay={0.2} className="w-full lg:w-1/2 space-y-6">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

              <Reveal direction="up" delay={0.25}>
                <h2 className="text-center text-xl font-bold text-white pb-4">
                  Technical Abilites
                </h2>
              </Reveal>

              {/* Frontend label */}
              <Reveal direction="up" delay={0.3}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">Frontend</span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-400/50 to-transparent" />
                </div>
              </Reveal>

              {/* Frontend skill icons — staggered */}
              <div className="w-full flex flex-wrap gap-3 mt-3">
                {frontendSkills.map((item, i) => (
                  <Reveal key={i} direction="up" delay={0.32 + i * 0.05}>
                    <div className="group w-18 h-18 relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-30 blur rounded-xl transition" />
                      <div className="relative flex flex-col gap-y-2 items-center">
                        <Image className="object-fill" src={item.image} alt={item.name} width={30} height={30} />
                        <p className="text-xs text-gray-300 font-semibold">{item.name}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Backend label */}
              <Reveal direction="up" delay={0.4}>
                <div className="flex items-center gap-4 my-5">
                  <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Backends & Tools</span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-400/50 to-transparent" />
                </div>
              </Reveal>

              {/* Backend skill icons — staggered */}
              <div className="w-full flex flex-wrap gap-3 mt-3">
                {backendSkills.map((item, i) => (
                  <Reveal key={i} direction="up" delay={0.42 + i * 0.05}>
                    <div className="group w-18 h-18 relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-30 blur rounded-xl transition" />
                      <div className="relative flex flex-col gap-y-2 items-center">
                        <Image
                          className="grayscale group-hover:grayscale-0 transition-all duration-500"
                          src={item.image}
                          alt={item.name}
                          width={35}
                          height={35}
                        />
                        <p className="relative text-[10px] md:text-xs text-gray-400 group-hover:text-white font-medium transition-colors">
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
