"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Settings, Sliders } from "lucide-react";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="about"
      className="py-16 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent relative z-10"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-stretch">
          {/* ── Left Card: Developer Profile ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#0D1118] border border-[#1C2633] rounded-[24px] p-6 backdrop-blur-md flex flex-col justify-between gap-6"
          >
            {/* JSON Code Window */}
            <div className="w-full">
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1C2633] mb-4 select-none">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
                </div>
                <span className="text-[10px] font-mono text-[#667386] font-semibold tracking-wider">
                  developer_profile.json
                </span>
                <div className="w-8" />
              </div>

              {/* Code */}
              <pre className="font-mono text-xs sm:text-sm text-[#A1ACBA] leading-relaxed bg-[#080B10] border border-[#1C2633] rounded-xl p-5 text-left select-none overflow-x-auto">
                <span className="text-[#8B5CF6] font-bold">const</span>{" "}
                <span className="text-[#F1F5F9] font-semibold">profile</span> =
                &#123;
                <br />
                &nbsp;&nbsp;<span className="text-[#3B82F6]">mission</span>:{" "}
                <span className="text-[#38BDF8]">
                  &quot;Engineering high availability cloud solutions&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;<span className="text-[#3B82F6]">
                  philosophy
                </span>:{" "}
                <span className="text-[#38BDF8]">
                  &quot;Clean code is just the starting point&quot;
                </span>
                ,
                <br />
                &nbsp;&nbsp;<span className="text-[#3B82F6]">expertise</span>: [
                <span className="text-[#38BDF8]">&quot;Full-Stack&quot;</span>,{" "}
                <span className="text-[#38BDF8]">&quot;DevOps&quot;</span>,{" "}
                <span className="text-[#38BDF8]">
                  &quot;AI Integration&quot;
                </span>
                ],
                <br />
                &#125;;
              </pre>
            </div>

            {/* Profile Milestones Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Milestone 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#111722] border border-[#1C2633] hover:border-[#29384A] transition-all duration-300">
                <div className="p-2.5 bg-[#0D1118] rounded-lg border border-[#1C2633] text-[#3B82F6] flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F1F5F9] tracking-tight">
                    Full-Stack Developer
                  </h4>
                  <p className="text-[11px] text-[#667386] mt-1 leading-normal font-light">
                    Maple Service Solutions Ltd. — 2025 - Present
                  </p>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#111722] border border-[#1C2633] hover:border-[#29384A] transition-all duration-300">
                <div className="p-2.5 bg-[#0D1118] rounded-lg border border-[#1C2633] text-[#8B5CF6] flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F1F5F9] tracking-tight">
                    Islamic University, BD
                  </h4>
                  <p className="text-[11px] text-[#667386] mt-1 leading-normal font-light">
                    BSS in Folklore Studies — 2020 - 2024
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Card: Tech Stack Showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#0D1118] border border-[#1C2633] rounded-[24px] p-6 backdrop-blur-md flex flex-col justify-between items-center text-center gap-6 min-h-[320px]"
          >
            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-[#F1F5F9] tracking-tight mt-2">
              Tech Stack
            </h3>

            {/* Circular Stack Icons - exactly 5 rounded buttons */}
            <div className="flex flex-col gap-4 items-center justify-center my-auto">
              {/* Row 1 (3 icons) */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full border border-[#1C2633] bg-[#111722] flex items-center justify-center shadow-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-300">
                  <FaReact className="w-5 h-5 text-[#61dafb]" />
                </div>
                <div className="w-14 h-14 rounded-full border border-[#1C2633] bg-[#111722] flex items-center justify-center shadow-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-300">
                  <FaNodeJs className="w-5 h-5 text-[#339933]" />
                </div>
                <div className="w-14 h-14 rounded-full border border-[#1C2633] bg-[#111722] flex items-center justify-center shadow-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-300">
                  <FaAws className="w-5 h-5 text-[#ff9900]" />
                </div>
              </div>

              {/* Row 2 (2 icons) */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-full border border-[#1C2633] bg-[#111722] flex items-center justify-center shadow-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-300">
                  <Settings className="w-5 h-5 text-[#A1ACBA]" />
                </div>
                <div className="w-14 h-14 rounded-full border border-[#1C2633] bg-[#111722] flex items-center justify-center shadow-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-300">
                  <Sliders className="w-5 h-5 text-[#A1ACBA]" />
                </div>
              </div>
            </div>

            {/* System Status text */}
            <span className="text-[10px] font-mono text-[#22C55E] uppercase tracking-widest font-bold mb-2">
              SYSTEMS READY
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
