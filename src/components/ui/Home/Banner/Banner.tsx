"use client";
import ParticlesBg from "@/components/ui/Home/Banner/ParticlesBg";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#000000]">
      <ParticlesBg />
      <div className="absolute top-0 left-0 right-0 flex md:flex-row flex-col md:gap-16 gap-8 h-full w-[90%] items-center justify-between p-4 mx-auto  z-0">
        <div className="text-white md:w-[60%] w-full">
          <h1 className="md:text-4xl text-2xl font-bold">
            Hey, I&apos;m <span className="text-[#018673]">Sweet </span>
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
          <h2 className="md:text-5xl text-2xl font-bold mt-5">
            <span className="text-[#018673]">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Scalable App Architect",
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
          <p className="text-gray-400 mt-5 md:text-lg text-sm">
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
          <div className="rounded  py-8 w-[80%] ml-auto  shadow-lg shadow-[#018673] border border-lg border-[#018673] bg-[#03191d]">
            <Image
              className="mx-auto"
              width={350}
              height={350}
              src="/bg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
