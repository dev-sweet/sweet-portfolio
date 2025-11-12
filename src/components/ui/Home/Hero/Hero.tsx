"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import LetterGlitch from "@/components/LetterGlitch";
import GlareHover from "@/components/GlareHover";
import { RainbowButton } from "@/components/magicui/rainbow-button";
const Hero = () => {
  return (
    <div className="relative h-auto w-full">
      <div className="absolute inset-0 h-full -z-10">
        <LetterGlitch outerVignette />
      </div>
      <div className="pt-[80px] z-1000 bg-[#0f001c]/40 backdrop-blur-[4px]">
        <div className="md:py-[80px] py-[40px] lg:px-32 md:px-16 sm:px-8 px-6 flex lg:flex-row flex-col lg:gap-20 md:gap-16 gap-8 justify-between items-center rounded-lg">
          <div className="text-white lg:w-[60%] w-full">
            <h1 className="md:text-2xl font-bold">
              Hey, I&apos;m <span className="text-[#9f55e0]">Sweet</span>
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
            <h2 className="my-4 2xl:text-7xl xl:text-5xl lg:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
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
            <p className="text-gray-300 md:text-xl text-sm">
              I&apos;m a passionate Full-Stack Web Developer with experience
              building modern, responsive, and user-friendly web applications
              using Next/React.js, Node.js, Express.js, MySql and MongoDB. I
              specialize in creating seamless user interfaces and enjoy turning
              complex problems into clean, maintainable code.
            </p>
            <Link href="/resume-sweet.pdf" target="_blank" download>
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
          <div className="lg:w-[40%] w-full flex items-center justify-end">
            {/* <div className="h-[500px] overflow-hidden w-[350px] border-1 border-[#9f55e0] rounded"> */}
            <GlareHover
              className="ml-auto 2xl:w-[420px] xl:w-[400px] w-full bg-gradient-to-r from-[#1b0e26] to-[#200e30] backdrop-blur-md"
              glareColor="#9f55e0"
              borderColor="#9f55e087"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="text-center text-gray-200">
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

              <div className="w-[320px] p-4 rounded-sm border-sm border-gray-300 absolute bottom-2 flex items-center justify-between bg-[#18022b]/60 backdrop-blur-md border border-white/30">
                <div className="flex items-center gap-2">
                  <div className="p-2 overflow-hidden w-12 h-12 flex item-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/30">
                    <Image
                      className="w-10 h-12 mx-auto max-w-full"
                      width={40}
                      height={40}
                      src="/bg.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <span className="text-gray-200">@dev-sweet</span>
                    <span className="p-0 text-gray-200 block">Online</span>
                  </div>
                </div>
                <RainbowButton className="px-2 py-2 text-xsm cursor-pointer">
                  Contact Me
                </RainbowButton>
              </div>
            </GlareHover>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
