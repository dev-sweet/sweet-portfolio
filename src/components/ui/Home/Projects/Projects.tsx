"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import Image from "next/image";
import bgColor from "/public/bg-projects-color.jpg";
import bgWhite from "/public/bg-projects-bw.jpg";
import styles from "./Projects.module.css";
import { MouseEvent, useRef } from "react";
const Projects = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--x", `${x}px`);
    containerRef.current.style.setProperty("--y", `${y}px`);
  };
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      <Image
        src={bgColor}
        alt="projects image color"
        className={styles.bgColor}
        fill
        priority
      />
      <Image
        src={bgWhite}
        alt="projects image color"
        className={styles.bgWhite}
        fill
        priority
      />

      <div className={styles.projectsContainer}>
        <h1 className="text-4xl font-bold text-white">
          Featured <span className="text-[#018673]">Projects</span>{" "}
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Here are some of my projects that I have worked on.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-8">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
