"use client";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Backend from "./Backend";
import Frontend from "./Frontend";
// import LightRays from "@/components/LightRays";

const Skills = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[1000px]
     "
    >
      {/* <LightRays /> */}
      <div
        className="absolute backdrop-blur-sm z-0 min-h-screen w-full mx-auto py-20 text-white bg-gradient-to-b from-black/0 via-black/30 to-transparent 
            backdrop-blur-[2px]"
      >
        <div className="w-[90%] mx-auto">
          <h1 className="text-4xl font-bold text-gray-200 text-center">
            Technical <span className="text-[#018673]">Skills</span>
          </h1>
          <p className="text-gray-200 text-center mt-2 mb-5 text-xl">
            Here are some skills I&apos;ve used in various projects.
          </p>
          <Frontend />
          <Backend />

          <div className="flex items-center justify-center my-10">
            <RainbowButton className="px-8 py-6 mt-4 cursor-pointer">
              Contact Me
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
