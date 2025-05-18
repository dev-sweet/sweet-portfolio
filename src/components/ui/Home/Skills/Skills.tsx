import Backend from "./Backend";
import Frontend from "./Frontend";
import SkillsBubbles from "./SkillsBubbles";

const Skills = () => {
  return (
    <div className="relative min-h-screen w-[90%] mx-auto py-10 text-white">
      <h1 className="text-4xl font-semibold text-gray-400 text-center">
        Technical <span className="text-[#018673]">Skills</span>
      </h1>
      <p className="text-gray-300 text-center mt-2 mb-5 text-xl">
        Here are some skills I&apos;ve used in various projects.
      </p>
      <SkillsBubbles />
      <Frontend />
      <Backend />
    </div>
  );
};

export default Skills;
