import Image from "next/image";
import techGear from "/public/tech-gear.png";
import styles from "./ProjectCard.module.css";
const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <Image src={techGear} width={400} height={400} alt="project image" />
      <div className="text-gray-200 p-4">
        <h2 className="text-xl font-bold">Tech Gear-Full Stack E-commerce</h2>
        <p className="mt-2 text-gray-400 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
          pariatur eum, repellat ex sed earum iste eius officiis esse ea fugiat
          eveniet accusamus saepe quibusdam aliquam quo temporibus quam maiores?
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
