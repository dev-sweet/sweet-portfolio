import { RainbowButton } from "@/components/magicui/rainbow-button";
import Backend from "./Backend";
import Frontend from "./Frontend";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const Skills = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-hidden h-[1000px]
     "
    >
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(880px_circle_at_center,#050047e6,transparent)]"
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="hover:fill-blue-500"
      />
      <div
        className="absolute z-0 min-h-screen w-full mx-auto py-20 text-white pointer-events-none bg-gradient-to-b from-black/0 via-black/30 to-transparent 
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
