"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030308]">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Vignette fade to make grid soft at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#030308_85%)]" />

      {/* Floating Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[10%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#534ab7]/12 blur-[100px] sm:blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 70, 0],
          y: [0, 60, -90, 0],
          scale: [1.15, 0.9, 1.2, 1.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-[#3b82f6]/10 blur-[110px] sm:blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -50, 0],
          y: [0, 90, -70, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#1d9e75]/10 blur-[90px] sm:blur-[130px]"
      />
    </div>
  );
}
