"use client";
import ParticlesBg from "@/components/ui/Home/Banner/ParticlesBg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#000000]">
      <ParticlesBg />
      <div className="absolute top-0 left-10 right-10 flex md:flex-row flex-col h-full w-full items-center justify-between p-4  z-0">
        <div className="text-white md:w-1/2 w-full">
          <h1 className="md:text-4xl text-2xl font-bold">
            Hey, I&apos;m <span className="text-[#018673]">Sweet 👋</span>
          </h1>
          <h2 className="md:text-5xl text-2xl font-bold mt-5">
            <span className="text-[#018673]">
              <Typewriter
                words={[
                  "JavaScript Developer",
                  "Frontend Developer",
                  "React Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-400 mt-5 md:text-lg text-sm">
            I&apos;m a passionate Frontend Web Developer with experience
            building modern, responsive, and user-friendly web applications
            using React.js, Next.js, and Tailwind CSS. I specialize in creating
            seamless user interfaces and enjoy turning complex problems into
            clean, maintainable code.
          </p>
          <motion.div
            whileHover={{
              borderColor: "#6366F1", // Tailwind's indigo-500
              boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.5)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradientY mt-10 cursor-pointer"
          >
            Download Resume
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <ArrowDown />
            </motion.div>
          </motion.div>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            className="mx-auto border border-lg border-[#018673] rounded shadow-lg shadow-[#018673]"
            width={350}
            height={350}
            src="/bg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
