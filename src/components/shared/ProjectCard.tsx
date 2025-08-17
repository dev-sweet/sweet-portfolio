import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { RainbowButton } from "../magicui/rainbow-button";
import { Code, Link } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className={styles.projectCard}>
      <div className="h-[200px] overflow-hidden">
        <Image
          src={project.image}
          alt="Tech Gear Project"
          className={styles.projectCardImage}
          width={300}
          height={200}
        />
      </div>
      <div className="text-gray-200 p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mt-2 text-gray-400 text-sm">{project.description}</p>

        <div className="mt-4 flex gap-4 items-center justify-center">
          <RainbowButton>
            <Link />
            Live Link
          </RainbowButton>
          <RainbowButton variant="outline">
            <Code />
            Github
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
