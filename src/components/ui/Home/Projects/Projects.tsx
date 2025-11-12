/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import Image from "next/image";
import bgColor from "/public/projectsbg1.jpg";
import bgWhite from "/public/projectsbg.jpg";
import styles from "./projects.module.css";
import { MouseEvent, useEffect, useRef, useState } from "react";
// import Link from "next/link";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--x", `${x}px`);
    containerRef.current.style.setProperty("--y", `${y}px`);
  };

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div
      className="relative w-full h-auto"
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
        src={bgWhite}
        alt="projects image color"
        className={styles.bgWhite}
        fill
        priority
      />
      <Image
        src={bgColor}
        alt="projects image black and white"
        className={styles.bgColor}
        fill
        priority
      />

      <div className="h-full">
        <div className={styles.projectsContainer}>
          <h1 className="text-4xl font-bold text-white">
            Featured <span className="text-[#018673]">Projects</span>{" "}
          </h1>
          <p className="mt-4 text-lg text-gray-100">
            Here are some of my projects that I have worked on.
          </p>
          <div className="flex flex-wrap items-center justify-center mt-8 gap-8">
            {projects.map((project: any) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
          {/* <div className="text-center">
            <Link
              href="/projects"
              className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-[#1e1e1e] text-white rounded-md hover:bg-[#1e1e1e] border border-gray-300 transition-all font-bold hover:border-[#018673]"
            >
              View All Projects
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
