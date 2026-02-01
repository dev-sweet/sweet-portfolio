"use client";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Backend from "./Backend";
import Frontend from "./Frontend";
import { AuroraText } from "../../aurora-text";

const Skills = () => {
  return (
    <div className="bg-[#0b0b0b] lg:min-h-screen w-full mx-auto py-16 text-white">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-gray-200 text-center">
          Technical <AuroraText>Skills</AuroraText>
        </h1>
        <p className="text-gray-200 text-center mt-2 mb-5 text-xl">
          Here are some skills I&apos;ve used in various projects.
        </p>
        <Frontend />
        <Backend />

        <div className="flex items-center justify-center my-10">
          <RainbowButton className="px-6 py-4 mt-4 cursor-hover">
            Contact Me
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Skills;
