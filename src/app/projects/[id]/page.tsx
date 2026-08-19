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
    role: "Lead Full-Stack & AI Engineer",
    timeline: "8 Weeks (May - Jun 2026)",
    overview:
      "HelloKhata is an AI-powered business management platform designed to automate and streamline accounting, sales invoices, inventory levels, dynamic purchases, customer relationship management (CRM), and financial reports. It delivers real-time business insights and AI recommendations.",
    challenges: [
      "Integrating AI recommendation pipelines for business inventory prediction without affecting main runtime response speeds.",
      "Formulating a secure ledger validation schema for multi-tenant bookkeeping transactions.",
      "Synchronizing multi-currency sales calculations across real-time user dashboard sessions.",
    ],
    features: [
      "AI-driven financial insights and predictive sales/purchase modeling.",
      "Interactive accounting ledger sheets with automated balance calculations.",
      "Real-time inventory stock alerts and automatic supplier invoice generator.",
      "Comprehensive client CRM database with dynamic purchase histories.",
    ],
    lessons: [
      "Structured database indexing of ledger logs reduces query response time by up to 55%.",
      "Separating heavy AI prediction computations into asynchronous background tasks prevents front-end thread blocking.",
    ],
  },
  2: {
    role: "Full-Stack Developer",
    timeline: "6 Weeks (Mar - Apr 2026)",
    overview:
      "LavEnterprise is a fully responsive modern eCommerce storefront engineered to deliver high-performance browsing and shopping. The platform includes search filters, category-based catalog management, order state tracking, and integration with dynamic shopping carts.",
    challenges: [
      "Implementing efficient client-side category and product search caching to ensure page load times remain under 1.5 seconds.",
      "Designing a scalable inventory state database schema capable of handling concurrent cart modifications.",
      "Setting up secure cookie-based session handling for guest and registered customer checkout flows.",
    ],
    features: [
      "Dynamic product catalog with filtering, search queries, and instant cart updates.",
      "Interactive and mobile-responsive checkout flow with secure step-by-step validations.",
      "Comprehensive admin dashboard for categories, product uploads, and shipping status logs.",
      "Robust customer registration, session auth, and visual order history tracking.",
    ],
    lessons: [
      "Utilizing server-side rendering for catalog listing routes maximizes SEO crawlers and boosts initial load speed.",
      "Dynamic state management tools keep cart counters synchronous across multiple browser tabs.",
    ],
  },
  3: {
    role: "Backend & Database Engineer",
    timeline: "4 Weeks (Jan - Feb 2026)",
    overview:
      "Tech Gear is a modern gadget e-commerce platform featuring an extensive backend database and comprehensive analytics dashboard. It manages user logins, order lists, and live transaction analytics metrics.",
    challenges: [
      "Formulating complex database aggregates to report daily revenue and products sold trends in real time.",
      "Setting up secure JWT authentication with refresh token rotations to prevent API session spoofing.",
      "Designing high-fidelity dark cyber-themed dashboard charts that render smoothly on mobile and desktop.",
    ],
    features: [
      "Secure JWT session authentication with multi-level route guards (user vs admin).",
      "Interactive transaction charts rendering real-time product sale logs.",
      "Dynamic inventory management system allowing rapid stock level adjustments.",
      "Integrated database storage tracking detailed user profiling and transaction histories.",
    ],
    lessons: [
      "Prisma model mappings and database indexing keep nested query results extremely fast and well-structured.",
      "Responsive styling with Tailwind utility classes ensures admin dashboards remain fully functional on phone displays.",
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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0,
      );
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
          if (text.includes("next.js") || text.includes("nextjs"))
            tags.push("Next.js");
          if (text.includes("react")) tags.push("React");
          if (text.includes("node") || text.includes("express"))
            tags.push("Node.js");
          if (text.includes("typescript") || text.includes("ts"))
            tags.push("TypeScript");
          if (text.includes("mongodb") || text.includes("mongo"))
            tags.push("MongoDB");
          if (
            text.includes("ai") ||
            text.includes("openai") ||
            text.includes("chatbot")
          )
            tags.push("AI");
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
      <div className="min-h-screen bg-[#050609] text-[#F1F5F9] font-sans antialiased mt-20">
        <section className="relative container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 pt-16 pb-12 overflow-hidden animate-pulse">
          <div className="h-6 w-32 bg-[#0D1118] rounded mb-4"></div>
          <div className="h-10 w-96 bg-[#0D1118] rounded mb-4"></div>
          <div className="h-4 w-5/6 bg-[#0D1118] rounded"></div>
        </section>
        <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-12">
          <div className="aspect-[2/1] w-full bg-[#0D1118] rounded-xl animate-pulse"></div>
        </section>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050609] text-[#F1F5F9] font-sans antialiased mt-20 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4 font-mono text-[#F1F5F9]">
          404 — Project Not Found
        </h1>
        <p className="text-[#667386] mb-8 font-mono">
          The project code database could not locate this index.
        </p>
        <Link
          href="/projects"
          className="px-5 py-2.5 rounded-md bg-[#3B82F6] text-white font-bold hover:bg-[#60A5FA] transition-colors"
        >
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
    lessons: [
      "Incremental validation reduces form exceptions and maintains database state integrity.",
    ],
  };

  return (
    <div className="min-h-screen text-[#F1F5F9] font-sans antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .accent-text { color: #3B82F6; }
        .accent-bg-soft { background-color: rgba(59, 130, 246, 0.1); }
        .accent-border-soft { border-color: rgba(59, 130, 246, 0.3); }
        .hover-border-accent:hover { border-color: #29384A; }
        .group:hover .group-accent-text { color: #3B82F6; }
        .cover-img { filter: grayscale(0.5); transition: filter 0.5s ease, transform 0.5s ease; }
        .group:hover .cover-img { filter: grayscale(0); transform: scale(1.03); }
      `}</style>

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#0D1118] z-50">
        <div
          className="h-full transition-[width] duration-150"
          style={{ width: `${progress}%`, backgroundColor: "#3B82F6" }}
        />
      </div>

      {/* Header & Back Link */}
      <header className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 pt-16 pb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#667386] hover:text-[#F1F5F9] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          back to projects.list()
        </Link>

        <p className="font-mono text-sm accent-text mb-3">{`// project.inspect("${project.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}")`}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block font-mono text-xs px-2.5 py-0.5 rounded-md border border-[#1C2633] text-[#A1ACBA]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#F1F5F9]">
          {project.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-[#667386]">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[#F1F5F9]">{study.role}</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span className="text-[#A1ACBA]">{study.timeline}</span>
          </div>
        </div>
      </header>

      {/* Project Image banner */}
      <div className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-12">
        <div className="rounded-xl overflow-hidden border border-[#1C2633] relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[2/1] object-cover cover-img"
          />
        </div>
      </div>

      {/* Main content grid */}
      <div className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
        {/* Left Column: Case Study */}
        <article className="max-w-2xl text-[#A1ACBA] leading-relaxed space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Overview
            </h2>
            <p className="text-lg leading-relaxed text-[#A1ACBA] bg-[#080B10] border border-[#1C2633] rounded-xl p-5">
              {study.overview}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Technical
              Challenges
            </h2>
            <ul className="space-y-4">
              {study.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-[#F43F5E] shrink-0 mt-0.5" />
                  <span className="text-[#A1ACBA]">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span> Key
              Features
            </h2>
            <ul className="space-y-4">
              {study.features.map((feature, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="text-[#A1ACBA]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] mb-4 flex items-center gap-2">
              <span className="accent-text font-mono text-lg">#</span>{" "}
              Engineering Lessons
            </h2>
            <ul className="space-y-4">
              {study.lessons.map((lesson, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Code className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-[#A1ACBA]">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Right Column: Quick Facts & CTAs */}
        <aside className="space-y-6">
          <div className="sticky top-24 space-y-6">
            {/* Quick Actions */}
            <div className="p-6 rounded-xl border border-[#1C2633] bg-[#0D1118] space-y-4">
              <p className="font-mono text-xs text-[#667386]">
                // deploy.actions()
              </p>
              <a
                href={project.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#3B82F6] text-white font-bold hover:bg-[#60A5FA] transition-colors text-sm font-mono shadow-md shadow-[#3B82F6]/20"
              >
                <ExternalLink className="w-4 h-4" />
                live demo
              </a>
              <a
                href={project.github || "https://github.com/dev-sweet" }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#111722] border border-[#29384A] text-[#A1ACBA] hover:text-[#F1F5F9] hover:border-[#3B82F6] transition-colors text-sm font-mono"
              >
                <Github className="w-4 h-4" />
                source code
              </a>
            </div>

            {/* Quick Details */}
            <div className="p-6 rounded-xl border border-[#1C2633] bg-[#0D1118] space-y-4">
              <p className="font-mono text-xs text-[#667386]">
                // build.details()
              </p>
              <div className="text-xs font-mono space-y-3">
                <div className="flex justify-between py-1 border-b border-[#1C2633]">
                  <span className="text-[#667386]">Year</span>
                  <span className="text-[#F1F5F9]">{project.year}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1C2633]">
                  <span className="text-[#667386]">Platform</span>
                  <span className="text-[#F1F5F9]">Web App</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#1C2633]">
                  <span className="text-[#667386]">Scope</span>
                  <span className="text-[#F1F5F9]">Full Stack</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#667386]">Status</span>
                  <span className="text-[#22C55E] flex items-center gap-1 font-semibold">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]"></span>
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
        <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mt-20 mb-20">
          <p className="font-mono text-xs text-[#667386] mb-5">
            // explore other builds
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group flex flex-col rounded-xl border border-[#1C2633] bg-[#0D1118] hover-border-accent hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="cover-img w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono text-xs text-[#667386] mb-3">
                    {`[${p.tags[0].toLowerCase()}]`}
                  </span>
                  <h3 className="text-sm font-semibold mb-3 leading-snug group-accent-text transition-colors text-[#F1F5F9]">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-[#667386]">
                    <span>{p.year}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#667386] group-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
