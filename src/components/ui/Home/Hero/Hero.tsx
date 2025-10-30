"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import LetterGlitch from "@/components/LetterGlitch";
// import ProfileCard from "@/components/ProfileCard";
import GlareHover from "@/components/GlareHover";
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <LetterGlitch />

      <div className="bg-[#0f001c]/70 backdrop-blur-[0.5px] absolute top-0 left-0 right-0 flex md:flex-row flex-col md:gap-16 gap-8 h-full px-[10%] items-center justify-between p-4 mx-auto z-0 rounded-lg">
        <div className="text-white md:w-[60%] w-full">
          <h1 className="md:text-3xl text-2xl font-bold">
            Hey, I&apos;m{" "}
            <span className="text-4xl text-[#9f55e0]">Sweet </span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                transformOrigin: "bottom center",
              }}
            >
              👋
            </motion.span>
          </h1>
          <h2 className="lg:text-7xl md:text-6xl text-2xl font-bold mt-5">
            <span className="text-[#9f55e0]">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Scalable Web Architect",
                  "React/Next.js Navigator",
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
          <p className="text-gray-200 mt-5 md:text-xl text-sm">
            I&apos;m a passionate Full-Stack Web Developer with experience
            building modern, responsive, and user-friendly web applications
            using Next/React.js, Node.js, Express.js, MySql and MongoDB. I
            specialize in creating seamless user interfaces and enjoy turning
            complex problems into clean, maintainable code.
          </p>
          <Link href="/resume.pdf" target="_blank" download>
            <motion.button
              whileHover={{
                borderColor: "#6366F1",
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
            </motion.button>
          </Link>
        </div>
        <div className="md:w-[40%] w-full">
          <div className="h-[500px] overflow-hidden w-[350px]">
            <GlareHover
              glareColor="#004266ff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={350}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="text-center text-white">
                <h4 className="text-4xl font-bold">Sweet Ali</h4>
                <p>Software Developer</p>
              </div>
              <Image
                className="mx-auto mt-5 max-w-full h-auto"
                width={350}
                height={350}
                src="/bg.png"
                alt=""
              />
            </GlareHover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
