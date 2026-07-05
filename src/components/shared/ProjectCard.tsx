import Image from "next/image";
import styles from "./ProjectCard.module.css";
import { RainbowButton } from "../magicui/rainbow-button";
import { Code, Link } from "lucide-react";
import NextLink from "next/link";

const getTags = (title: string, description: string) => {
  const text = `${title} ${description}`.toLowerCase();
  const tags: string[] = [];
  if (text.includes("next.js") || text.includes("nextjs")) {
    tags.push("Next.js");
  }
  if (text.includes("react")) {
    tags.push("React");
  }
  if (text.includes("node") || text.includes("express")) {
    tags.push("Node.js");
  }
  if (text.includes("typescript") || text.includes("ts")) {
    tags.push("TypeScript");
  }
  if (text.includes("mongodb") || text.includes("mongo")) {
    tags.push("MongoDB");
  }
  if (text.includes("ai") || text.includes("openai") || text.includes("chatbot")) {
    tags.push("AI");
  }
  if (tags.length === 0) {
    tags.push("React");
  }
  return tags;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: { project: any }) => {
  const tags = project.tags || getTags(project.title, project.description);

  return (
    <div className={styles.projectCard}>
      <NextLink href={`/projects/${project.id}`} className="block h-[200px] overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title || "Tech Gear Project"}
          className={styles.projectCardImage}
          width={300}
          height={200}
        />
        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 font-mono text-[11px] text-zinc-300">
          <span className="inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
          live
        </span>
      </NextLink>
      <div className="text-gray-200 p-4">
        <NextLink href={`/projects/${project.id}`} className="hover:text-[#5dcaa5] transition-colors block">
          <h2 className="text-xl font-bold">{project.title}</h2>
        </NextLink>
        <p className="mt-2 text-gray-400 text-sm line-clamp-2">{project.description}</p>

        {/* Technologies tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-mono border border-zinc-800 text-zinc-400 bg-zinc-900/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 items-center justify-center">
          <RainbowButton asChild>
            <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer">
              <Link />
              Live Link
            </a>
          </RainbowButton>
          <RainbowButton variant="outline" asChild>
            <a href={project.github || "https://github.com/dev-sweet"} target="_blank" rel="noopener noreferrer">
              <Code />
              Github
            </a>
          </RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
