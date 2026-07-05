"use client"
import { useState, useEffect } from "react";
import { Search, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  year: string;
  featured: boolean;
  liveLink: string;
  github?: string;
}

const TAGS = ["All", "Next.js", "React", "Node.js", "TypeScript", "MongoDB", "AI"];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped = data.map((project, index) => {
          const text = `${project.title} ${project.description}`.toLowerCase();
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

          const years = ["2026", "2025", "2025"];

          return {
            id: index + 1,
            title: project.title,
            description: project.description,
            image: project.image,
            liveLink: project.liveLink,
            github: project.github,
            tags,
            year: years[index % years.length],
            featured: index === 0,
          };
        });
        setProjects(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  const filtered = projects.filter((project) => {
    const matchesTag = activeTag === "All" || project.tags.includes(activeTag);
    const q = query.toLowerCase();
    const matchesQuery =
      project.title.toLowerCase().includes(q) || project.description.toLowerCase().includes(q);
    return matchesTag && matchesQuery;
  });

  const featuredProject = filtered.find((p) => p.featured);
  const regularProjects = filtered.filter((p) => !p.featured);

  const stats = [
    { value: `${projects.length}+`, label: "// projects shipped" },
    { value: "12+", label: "// technologies used" },
    { value: "2024", label: "// building since" },
  ];

  if (loading) {
    return (
      <div className="mt-20 min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-12 overflow-hidden animate-pulse">
          <div className="h-6 w-32 bg-zinc-900 rounded mb-4"></div>
          <div className="h-10 w-80 bg-zinc-900 rounded mb-4"></div>
          <div className="h-4 w-96 bg-zinc-900 rounded"></div>
        </section>
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse rounded-xl border border-zinc-900 bg-zinc-900/50 h-[380px] flex flex-col overflow-hidden">
                <div className="aspect-video bg-zinc-900 w-full"></div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-6 w-full bg-zinc-900 rounded"></div>
                  <div className="h-4 w-5/6 bg-zinc-900 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-4 w-12 bg-zinc-900 rounded"></div>
                    <div className="h-4 w-12 bg-zinc-900 rounded"></div>
                  </div>
                  <div className="mt-auto flex justify-between">
                    <div className="h-4 w-16 bg-zinc-900 rounded"></div>
                    <div className="h-4 w-20 bg-zinc-900 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mt-20 min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      <style>{`
        .accent-text { color: #5dcaa5; }
        .accent-bg-soft { background-color: rgba(93, 202, 165, 0.1); }
        .accent-border-soft { border-color: rgba(93, 202, 165, 0.4); }
        .hover-border-accent:hover { border-color: rgba(93, 202, 165, 0.4); }
        .focus-border-accent:focus-within { border-color: rgba(93, 202, 165, 0.5); }
        .group:hover .group-accent-text { color: #5dcaa5; }
        .group:hover .group-accent-border { border-color: rgba(93, 202, 165, 0.4); }
        .cover-img { filter: grayscale(0.65); transition: filter 0.5s ease, transform 0.5s ease; }
        .group:hover .cover-img { filter: grayscale(0); transform: scale(1.04); }
      `}</style>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-12 overflow-hidden">
        <span className="absolute -top-6 left-0 text-[6rem] md:text-[11rem] font-bold text-zinc-900/90 select-none leading-none tracking-tight font-mono pointer-events-none whitespace-nowrap">
          WORK
        </span>
        <div className="relative">
          <p className="font-mono text-sm accent-text mb-3">
            {`// projects.list() — ${projects.length} builds`}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Things I've built</h1>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            A mix of full-stack apps, APIs, and weekend experiments — mostly Next.js, Node, and
            whatever new library I wanted an excuse to try.
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 font-mono text-sm w-full md:max-w-sm focus-border-accent transition-colors">
            <span className="text-zinc-500">$</span>
            <span className="text-emerald-400">grep</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search projects..."
              className="bg-transparent outline-none flex-1 text-zinc-100 placeholder:text-zinc-500"
            />
            <Search className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${activeTag === tag
                  ? "accent-bg-soft accent-border-soft accent-text"
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
              >
                {`--${tag.toLowerCase().replace(".", "")}`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      {featuredProject && (
        <section className="max-w-6xl mx-auto px-6 md:px-12 mb-8">
          <div className="group rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent transition-all overflow-hidden">
            <div className="grid md:grid-cols-2">
              <Link href={`/projects/${featuredProject.id}`} className="relative min-h-[240px] overflow-hidden block">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="cover-img w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 font-mono text-xs text-zinc-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  live
                </span>
              </Link>
              <div className="p-8 flex flex-col justify-center">
                <span className="font-mono text-xs accent-text mb-3">// featured</span>
                <Link href={`/projects/${featuredProject.id}`} className="hover:underline">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-accent-text transition-colors">
                    {featuredProject.title}
                  </h2>
                </Link>
                <p className="text-zinc-400 mb-5 leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <a
                    href={featuredProject.liveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border accent-border-soft accent-text accent-bg-soft hover:bg-transparent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    live demo
                  </a>
                  <a
                    href={featuredProject.github || "https://github.com/dev-sweet"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    source
                  </a>
                  <span className="ml-auto text-zinc-500">{featuredProject.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project grid */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        {regularProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 group-accent-border hover:-translate-y-1 transition-all overflow-hidden"
              >
                <Link href={`/projects/${project.id}`} className="aspect-video overflow-hidden relative block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="cover-img w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 font-mono text-[11px] text-zinc-300">
                    <span className="inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    live
                  </span>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/projects/${project.id}`} className="hover:underline">
                    <h3 className="text-lg font-semibold mb-2 leading-snug group-accent-text transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono border border-zinc-800 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{project.year}</span>
                    <span className="flex items-center gap-3">
                      <a
                        href={project.github || "https://github.com/dev-sweet"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-100 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-accent-text hover:text-zinc-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 font-mono text-zinc-500">
            <p className="accent-text mb-2">$ grep: no matches found</p>
            <p className="text-sm">Try a different search term or category.</p>
          </div>
        )}
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-3 divide-x divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-6">
              <p className="text-2xl md:text-3xl font-bold accent-text">{stat.value}</p>
              <p className="font-mono text-xs text-zinc-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}