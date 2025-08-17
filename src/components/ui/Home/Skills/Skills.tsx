import { RainbowButton } from "@/components/magicui/rainbow-button";
import Backend from "./Backend";
import Frontend from "./Frontend";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const Skills = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[1000px]
     "
    >
      <FlickeringGrid
        className="relative inset-0 z-0 w-full   after:content-[''] after:absolute after:inset-0 
     after:bg-black/30 after:backdrop-blur-[2px]"
        squareSize={10}
        gridGap={6}
        color="#050047e6"
        maxOpacity={0.8}
        flickerChance={0.1}
      />

      <div className="absolute min-h-screen w-full mx-auto py-20 text-white z-0">
        <div className="w-[90%] mx-auto">
          <h1 className="text-4xl font-bold text-gray-200 text-center">
            Technical <span className="text-[#018673]">Skills</span>
          </h1>
          <p className="text-gray-200 text-center mt-2 mb-5 text-xl">
            Here are some skills I&apos;ve used in various projects.
          </p>
          <Frontend />
          <Backend />

          <div className="flex items-center justify-center mt-10">
            <RainbowButton className="px-8 py-6">Contact Me</RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
