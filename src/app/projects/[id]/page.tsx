"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  Code,
  Calendar,
  User,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

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

const CASE_STUDIES: Record<
  number,
  {
    role: string;
    timeline: string;
    overview: string;
    challenges: string[];
    features: string[];
    lessons: string[];
  }
> = {
  1: {
    role: "Frontend Engineer",
    timeline: "2 Weeks (May 2026)",
    overview:
      "A developer portfolio website designed to showcase projects and writing with custom aesthetics, typography, and interactive elements. It acts as a primary landing page built on Next.js, featuring optimized images, client-side route caching, and customized MDX loaders for blogging resources.",
    challenges: [
      "Creating a unified design system that feels dark and glowing but maintains high contrast and readability for technical recruitment.",
      "Implementing custom canvas animations and dynamic mouse cursor feedback loops without blocking the main event rendering thread.",
      "Parsing local metadata JSON files dynamically in a Next.js client-side component flow with robust fallbacks.",
    ],
    features: [
      "Fluid glassmorphic layout navigation with dynamic active-state checking via usePathname.",
      "Interactive Project & Blog search engine with instantaneous tag and grep keyword matching.",
      "Custom framer-motion page entry transitions and list hover animations.",
      "Controlled sheet portal mobile layouts with optimized accessibility configurations.",
    ],
    lessons: [
      "Controlled react states are always more predictable than Radix UI defaults when handling Next.js client-side link navigation.",
      "Low z-index scoping on fixed headers keeps DOM dialogues and backdrop overlays clean and click-friendly.",
    ],
  },
  2: {
    role: "Full-Stack Developer",
    timeline: "6 Weeks (Mar - Apr 2026)",
    overview:
      "Tech Gear is a modern full-stack e-commerce marketplace built for gadget sales. It features user authentication, a checkout cart state pipeline, MongoDB storage for transaction logs, and integration with Stripe API for transaction processing.",
    challenges: [
      "Maintaining state synchronization between server inventory tables and client carts during checkout processes.",
      "Managing complex user auth states (JWT) securely on the client with refresh token rotation strategies.",
      "Styling custom layout elements matching dark cyber-themed storefront requirements.",
    ],
    features: [
      "Stripe payment gateway integration featuring webhooks for automatic order confirmation.",
      "Fully loaded dashboard UI displaying order statuses and analytical metrics.",
      "Responsive inventory lists with pagination, search queries, and tag filtering.",
      "Protected auth routing guarding checkout processes and profile management.",
    ],
    lessons: [
      "Using safeParse validation on incoming requests prevents type corruption and simplifies database write statements.",
      "Optimized query indexes on MongoDB collections speed up inventory searches by up to 40%.",
    ],
  },
  3: {
    role: "Full-Stack Developer",
    timeline: "4 Weeks (Jan - Feb 2026)",
    overview:
      "Smile Dental Care is a dynamic scheduling platform designed for dental clinics. The app enables patient registration, real-time appointments booking, slot validations, and administrative dashboards for dental professionals.",
    challenges: [
      "Designing a slot validation logic preventing duplicate appointment overlap across multiple dentists.",
      "Formulating a user experience that keeps scheduling simple for non-technical patient groups.",
      "Setting up secure databases with proper relationships between patients, appointments, and doctors.",
    ],
    features: [
      "Interactive calendar selector displaying real-time booking slots.",
      "Doctor dashboard showing weekly appointment schedules and patient notes.",
      "Automated email notifications confirming slots using secure SMTP handlers.",
      "Reviews and feedback module enabling patients to rate services.",
    ],
    lessons: [
      "Client-side slot caching minimizes server hits and keeps schedule updates snappy.",
      "Responsive layout grids are critical when handling multi-column tables on smaller phone dimensions.",
    ],
  },
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [related, setRelated] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!id) return;
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped = data.map((p, index) => {
          const text = `${p.title} ${p.description}`.toLowerCase();
          const tags: string[] = [];
          if (text.includes("next.js") || text.includes("nextjs")) tags.push("Next.js");
          if (text.includes("react")) tags.push("React");
          if (text.includes("node") || text.includes("express")) tags.push("Node.js");
          if (text.includes("typescript") || text.includes("ts")) tags.push("TypeScript");
          if (text.includes("mongodb") || text.includes("mongo")) tags.push("MongoDB");
          if (text.includes("ai") || text.includes("openai") || text.includes("chatbot")) tags.push("AI");
          if (tags.length === 0) tags.push("React");

          const years = ["2026", "2025", "2025"];

          return {
            id: index + 1,
            title: p.title,
            description: p.description,
            image: p.image,
            liveLink: p.liveLink,
            github: p.github,
            tags,
            year: years[index % years.length],
            featured: index === 0,
          };
        });

        const targetId = Number(id);
        const found = mapped.find((p) => p.id === targetId);
        setProject(found || null);

        const others = mapped.filter((p) => p.id !== targetId);
        setRelated(others.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load project details", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased mt-20">
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-12 overflow-hidden animate-pulse">
          <div className="h-6 w-32 bg-zinc-900 rounded mb-4"></div>
          <div className="h-10 w-96 bg-zinc-900 rounded mb-4"></div>
          <div className="h-4 w-5/6 bg-zinc-900 rounded"></div>
        </section>
        <section className="max-w-5xl mx-auto px-6 mb-12">
          <div className="aspect-[2/1] w-full bg-zinc-900 rounded-xl animate-pulse"></div>
        </section>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased mt-20 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4 font-mono text-zinc-300">404 — Project Not Found</h1>
        <p className="text-zinc-500 mb-8 font-mono">The project code database could not locate this index.</p>
        <Link href="/projects" className="px-5 py-2.5 rounded-md bg-[#5dcaa5] text-zinc-950 font-bold hover:bg-[#4cb291] transition-colors">
          Return to projects.list()
        </Link>
      </div>
    );
  }

  const study = CASE_STUDIES[project.id] || {
    role: "Lead Software Developer",
    timeline: "4 Weeks",
    overview: project.description,
    challenges: [
      "Integrating front-end components with secure backend routers.",
      "Optimizing page response parameters across client viewpoints.",
    ],
    features: [
      "Responsive interfaces styled using utility utility tools.",
      "Custom interaction triggers.",
    ],
    lessons: ["Incremental validation reduces form exceptions and maintains database state integrity."],
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .accent-text { color: #5dcaa5; }
        .accent-bg-soft { background-color: rgba(93, 202, 165, 0.1); }
        .accent-border-soft { border-color: rgba(93, 202, 165, 0.4); }
        .hover-border-accent:hover { border-color: rgba(93, 202, 165, 0.4); }
        .group:hover .group-accent-text { color: #5dcaa5; }
        .cover-img { filter: grayscale(0.5); transition: filter 0.5s ease, transform 0.5s ease; }
        .group:hover .cover-img { filter: grayscale(0); transform: scale(1.03); }
      `}</style>

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 z-50">
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, backgroundColor: "#5dcaa5" }}
        />
      </div>

      {/* Header & Back Link */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          back to projects.list()
        </Link>

        <p className="font-mono text-sm accent-text mb-3">{`// project.inspect("${project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}")`}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block font-mono text-xs px-2.5 py-0.5 rounded-md border border-zinc-800 text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#5dcaa5]" />
            <span className="text-zinc-300">{study.role}</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#5dcaa5]" />
            <span>{study.timeline}</span>
          </div>
        </div>
      </header>

      {/* Project Image banner */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="rounded-xl overflow-hidden border border-zinc-800 relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[2/1] object-cover cover-img"
          />
        </div>
      </div>

      {/* Main content grid */}
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
        {/* Left Column: Case Study */}
        <article className="max-w-2xl text-zinc-300 leading-relaxed space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Overview
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300 bg-zinc-900/30 border border-zinc-900 rounded-xl p-5">
              {study.overview}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Technical Challenges
            </h2>
            <ul className="space-y-4">
              {study.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Key Features
            </h2>
            <ul className="space-y-4">
              {study.features.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Engineering Lessons
            </h2>
            <ul className="space-y-4">
              {study.lessons.map((lesson, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Code className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Right Column: Quick Facts & CTAs */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* Quick Actions */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
              <p className="font-mono text-xs text-zinc-500">// deploy.actions()</p>
              <a
                href={project.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#5dcaa5] text-zinc-950 font-bold hover:bg-[#4cb291] transition-colors text-sm font-mono"
              >
                <ExternalLink className="w-4 h-4" />
                live demo
              </a>
              <a
                href={project.github || "https://github.com/dev-sweet"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors text-sm font-mono"
              >
                <Github className="w-4 h-4" />
                source code
              </a>
            </div>

            {/* Quick Details */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-4">
              <p className="font-mono text-xs text-zinc-500">// build.details()</p>
              <div className="text-xs font-mono space-y-3">
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Year</span>
                  <span className="text-zinc-300">{project.year}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Platform</span>
                  <span className="text-zinc-300">Web App</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Scope</span>
                  <span className="text-zinc-300">Full Stack</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Status</span>
                  <span className="text-[#5dcaa5] flex items-center gap-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                    </span>
                    live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Projects grid */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-20 mb-20">
          <p className="font-mono text-xs text-zinc-500 mb-5">// explore other builds</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="cover-img w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono text-xs text-zinc-500 mb-3">
                    {`[${p.tags[0].toLowerCase()}]`}
                  </span>
                  <h3 className="text-sm font-semibold mb-3 leading-snug group-accent-text transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{p.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
