"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import reactIcon from "/public/skills/react.png";
import nextIcon from "/public/skills/next.png";
import jsIcon from "/public/skills/js.webp";
import tsIcon from "/public/skills/ts.png";
import firebaseIcon from "/public/skills/firebase.png";
import reduxIcon from "/public/skills/redux.png";
import shadcnIcon from "/public/skills/shadcn.png";
import tailwindIcon from "/public/skills/tailwind.png";
import cssIcon from "/public/skills/css.png";
import htmlIcon from "/public/skills/html.png";
import expressIcon from "/public/skills/express.png";
import nodeIcon from "/public/skills/node.png";
import mongodbIcon from "/public/skills/mongodb.png";
import vsIcon from "/public/skills/vscode.png";
import gitIcon from "/public/skills/github.png";
const skillSet = [
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Next",
    icon: nextIcon,
  },
  {
    name: "Redux",
    icon: reduxIcon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "TypeScript",
    icon: tsIcon,
  },
  {
    name: "Node",
    icon: nodeIcon,
  },
  {
    name: "Express",
    icon: expressIcon,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
  },
  {
    name: "Shadcn",
    icon: shadcnIcon,
  },
  {
    name: "Tailwind",
    icon: tailwindIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "HTML",
    icon: htmlIcon,
  },

  {
    name: "VS Code",
    icon: vsIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
];
const SkillsBubbles = () => {
  return (
    <div className="absolute top-20 left-[30%] h-[70vh] w-1/2 flex items-center justify-center flex-wrap gap-2">
      {skillSet.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 1], y: -200 }}
          transition={{
            duration: Math.random() * 8,
            delay: Math.random(),
            ease: "easeInOut",
          }}
          className="w-12 h-12 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-full flex items-center justify-center text-3xl text-white shadow-lg"
        >
          <Image src={skill.icon} alt={skill.name} width={30} height={30} />
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsBubbles;
