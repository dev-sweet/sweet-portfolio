"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  ArrowLeft,
  ArrowUpRight,
  Copy,
  Check,
  Github,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  featured: boolean;
}

interface Section {
  type: "paragraph" | "heading" | "code" | "list";
  id?: string;
  title?: string;
  filename?: string;
  code?: string;
  text?: string;
  items?: string[];
}

const BLOG_CONTENTS: Record<
  number,
  {
    toc: { id: string; label: string }[];
    sections: Section[];
  }
> = {
  1: {
    toc: [
      { id: "architecture", label: "Three-tier architecture with Next.js & Node" },
      { id: "database", label: "MongoDB structuring and indexing" },
      { id: "performance", label: "Caching and route handlers optimization" },
      { id: "takeaways", label: "Key takeaways" }
    ],
    sections: [
      {
        type: "paragraph",
        text: "Building scalable full-stack applications is essential for modern web development. When your app needs to handle growing traffic and complex data, a decoupled or structured API layout is crucial. In this guide, we look at how to leverage Next.js, Node.js, and MongoDB to build performant web services."
      },
      {
        type: "heading",
        id: "architecture",
        title: "Three-tier architecture with Next.js & Node"
      },
      {
        type: "paragraph",
        text: "Using Next.js as the front-end router alongside Node.js for backend services creates a clean separation of concerns. Next.js handles server-side rendering (SSR) and static site generation (SSG) seamlessly, while Node handles database querying and long-running services."
      },
      {
        type: "heading",
        id: "database",
        title: "MongoDB structuring and indexing"
      },
      {
        type: "paragraph",
        text: "MongoDB provides a flexible, schema-less store, but defining robust models is critical for data integrity. Here is how we configure database connections and index collections for high-speed searches."
      },
      {
        type: "code",
        filename: "lib/db/mongodb.ts",
        code: `import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  
  return mongoose.connect(MONGODB_URI!, {
    autoIndex: true, // Auto-build database indexes
  });
}`
      },
      {
        type: "heading",
        id: "performance",
        title: "Caching and route handlers optimization"
      },
      {
        type: "paragraph",
        text: "Next.js dynamic fetching features can put heavy load on databases if not cached correctly. We recommend setting up Next.js revalidation intervals on data queries and utilizing Redis for session stores."
      },
      {
        type: "heading",
        id: "takeaways",
        title: "Key takeaways"
      },
      {
        type: "list",
        items: [
          "Decouple front-end display logic from compute-heavy backend processing.",
          "Index your query fields (e.g. email, status) in MongoDB to accelerate queries.",
          "Implement validation middleware to sanitise all input payloads before writing."
        ]
      }
    ]
  },
  2: {
    toc: [
      { id: "code-splitting", label: "Code-splitting and React Suspense" },
      { id: "image-opt", label: "Modern image loading and layouts" },
      { id: "state-opt", label: "Reducing component re-renders" },
      { id: "takeaways", label: "Key takeaways" }
    ],
    sections: [
      {
        type: "paragraph",
        text: "Frontend performance directly affects conversion rates and SEO rankings. If your bundle size is bloated, user interaction feels sluggish. Here are practical strategies to optimize load times and rendering performance."
      },
      {
        type: "heading",
        id: "code-splitting",
        title: "Code-splitting and React Suspense"
      },
      {
        type: "paragraph",
        text: "Large libraries should not load on the initial bundle if they are only used in specific modals or user paths. By using lazy loading, we load resources only when they are needed."
      },
      {
        type: "code",
        filename: "components/ChartSection.tsx",
        code: `import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeavyChart = dynamic(() => import("./HeavyChart"), {
  loading: () => <p>Loading analytical visualizer...</p>,
  ssr: false,
});

export default function AnalyticsDashboard() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <HeavyChart />
    </Suspense>
  );
}`
      },
      {
        type: "heading",
        id: "image-opt",
        title: "Modern image loading and layouts"
      },
      {
        type: "paragraph",
        text: "Unoptimized images are the leading cause of layout shifts and high bandwidth usage. Utilize Next.js Image component with pre-defined aspect ratios and blur placeholders."
      },
      {
        type: "heading",
        id: "state-opt",
        title: "Reducing component re-renders"
      },
      {
        type: "paragraph",
        text: "Avoid hosting global states in high-level components unless absolutely necessary. Keep states localized to context layers or leaf nodes to prevent unnecessary visual tree updates."
      },
      {
        type: "heading",
        id: "takeaways",
        title: "Key takeaways"
      },
      {
        type: "list",
        items: [
          "Lazy load heavy modules using Next.js dynamic imports.",
          "Use AVIF or WebP formats to shrink image weight by up to 70%.",
          "Profile re-renders using React Developer Tools to find bottlenecks."
        ]
      }
    ]
  },
  3: {
    toc: [
      { id: "openai-api", label: "Interfacing with the OpenAI API" },
      { id: "stream-response", label: "Streaming chat responses to the client" },
      { id: "session-persist", label: "Session memory and database sync" },
      { id: "takeaways", label: "Key takeaways" }
    ],
    sections: [
      {
        type: "paragraph",
        text: "AI chatbot integrations have become standard for modern user engagement. In this guide, we walk through constructing a real-time smart assistant using OpenAI API and streaming responses."
      },
      {
        type: "heading",
        id: "openai-api",
        title: "Interfacing with the OpenAI API"
      },
      {
        type: "paragraph",
        text: "Connecting to OpenAI requires configuring api keys securely. Avoid exposing access tokens in front-end client variables; always route requests through back-end proxy routes."
      },
      {
        type: "heading",
        id: "stream-response",
        title: "Streaming chat responses to the client"
      },
      {
        type: "paragraph",
        text: "Waiting for a full chatbot paragraph response takes seconds. Streaming outputs word-by-word makes your chatbot feel instant and responsive."
      },
      {
        type: "code",
        filename: "app/api/chat/route.ts",
        code: `import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    stream: true,
    messages,
  });
  
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}`
      },
      {
        type: "heading",
        id: "session-persist",
        title: "Session memory and database sync"
      },
      {
        type: "paragraph",
        text: "To give your AI context, pass past conversation logs along with new inputs, and persist historical message arrays in database tables."
      },
      {
        type: "heading",
        id: "takeaways",
        title: "Key takeaways"
      },
      {
        type: "list",
        items: [
          "Secure sensitive credentials in server-side environment variables.",
          "Utilize streaming APIs to improve user perceived response speed.",
          "Trim conversation history to avoid context window size inflation."
        ]
      }
    ]
  },
  4: {
    toc: [
      { id: "the-problem", label: "The problem with duplicated validation" },
      { id: "shared-schema", label: "Defining a shared Zod schema" },
      { id: "server-action", label: "Using the schema in a server action" },
      { id: "client-form", label: "Wiring it up to the client form" },
      { id: "takeaways", label: "Key takeaways" }
    ],
    sections: [
      {
        type: "paragraph",
        text: "Every form in an app used to have its validation logic written twice — once on the client for instant feedback, and again on the server because you should never trust the client. Keeping the two in sync was tedious. Here is how we collapse both using Server Actions and Zod."
      },
      {
        type: "heading",
        id: "the-problem",
        title: "The problem with duplicated validation"
      },
      {
        type: "paragraph",
        text: "When validation rules are duplicated, client and server schemas can drift. A constraint updated on the server but missed on the client leads to unexpected submission errors. Defining a shared schema fixes this drift."
      },
      {
        type: "heading",
        id: "shared-schema",
        title: "Defining a shared Zod schema"
      },
      {
        type: "paragraph",
        text: "Write validation rules in a shared folder importable by both layers. This ensures single-source-of-truth types."
      },
      {
        type: "code",
        filename: "lib/validation/post.ts",
        code: `import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and dashes"),
  content: z.string().min(20, "Content is too short"),
});

export type PostInput = z.infer<typeof postSchema>;`
      },
      {
        type: "heading",
        id: "server-action",
        title: "Using the schema in a server action"
      },
      {
        type: "paragraph",
        text: "With Next.js Server Actions, validating input on submit is simple. Use safeParse to capture validation errors instead of throwing try/catch errors."
      },
      {
        type: "heading",
        id: "client-form",
        title: "Wiring it up to the client form"
      },
      {
        type: "paragraph",
        text: "Pass errors directly back from the Server Action to state handlers, letting the UI display field-specific alerts instantly."
      },
      {
        type: "heading",
        id: "takeaways",
        title: "Key takeaways"
      },
      {
        type: "list",
        items: [
          "Zod schemas serve both client and server validation requirements.",
          "Use safeParse to cleanly catch validator errors as return states.",
          "Next.js Server Actions remove the need to write separate endpoint routes."
        ]
      }
    ]
  }
};

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 font-mono text-[0.85em] accent-text">
      {children}
    </code>
  );
}

function CodeBlock({ filename, code }: { filename: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // clipboard unavailable
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden my-6">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="font-mono text-xs text-zinc-500">{filename}</span>
        <button
          onClick={handleCopy}
          className="font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 accent-text" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] font-mono leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
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
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped = data.map((blog, index) => {
          let tag = "Next.js";
          if (
            blog.title.toLowerCase().includes("chatbot") ||
            blog.title.toLowerCase().includes("openai") ||
            blog.title.toLowerCase().includes("ai")
          ) {
            tag = "AI";
          } else if (
            blog.title.toLowerCase().includes("performance") ||
            blog.title.toLowerCase().includes("frontend")
          ) {
            tag = "React";
          } else if (
            blog.title.toLowerCase().includes("authentication") ||
            blog.title.toLowerCase().includes("jwt") ||
            blog.title.toLowerCase().includes("node")
          ) {
            tag = "Node.js";
          } else if (blog.title.toLowerCase().includes("mongodb")) {
            tag = "MongoDB";
          }

          const dates = ["Jun 12, 2026", "Jun 08, 2026", "May 28, 2026", "May 15, 2026"];
          const readTimes = ["12 min", "8 min", "10 min", "7 min"];

          return {
            ...blog,
            excerpt: blog.shortDescription || blog.longDescription?.substring(0, 150) + "...",
            tag,
            date: dates[index % dates.length],
            readTime: readTimes[index % readTimes.length],
            featured: index === 0,
          };
        });

        const targetId = Number(id);
        const found = mapped.find((b) => b.id === targetId);
        setPost(found || null);

        const others = mapped.filter((b) => b.id !== targetId);
        setRelated(others.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog post", err);
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

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased mt-20 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4 font-mono text-zinc-300">404 — Post Not Found</h1>
        <p className="text-zinc-500 mb-8 font-mono">The blog post database could not locate this article index.</p>
        <Link href="/blogs" className="px-5 py-2.5 rounded-md bg-[#5dcaa5] text-zinc-950 font-bold hover:bg-[#4cb291] transition-colors">
          Return to blog.list()
        </Link>
      </div>
    );
  }

  const richContent = BLOG_CONTENTS[post.id] || {
    toc: [{ id: "overview", label: "Overview" }],
    sections: [
      {
        type: "paragraph",
        text: post.longDescription || post.shortDescription,
      },
    ],
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

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-zinc-800/60 max-w-6xl mx-auto">
        <Link href="/" className="font-mono text-lg font-semibold tracking-tight">
          <span className="accent-text">{"</"}</span>Sweet
          <span className="accent-text">{">"}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-zinc-400">
          <Link href="/" className="hover:text-zinc-100 transition-colors">
            home
          </Link>
          <Link href="/projects" className="hover:text-zinc-100 transition-colors">
            projects
          </Link>
          <Link href="/blogs" className="accent-text">
            blogs
          </Link>
          <Link href="/contact" className="hover:text-zinc-100 transition-colors">
            contact
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          open to work
        </div>
      </nav>

      {/* Back link + header */}
      <header className="max-w-3xl mx-auto px-6 pt-10 pb-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-zinc-200 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          back to blog.list()
        </Link>

        <p className="font-mono text-sm accent-text mb-3">{`// post.read("${post.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}")`}</p>
        <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-800 text-zinc-400 mb-4">
          {`[${post.tag.toLowerCase()}]`}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm font-mono text-zinc-500">
          <div className="w-8 h-8 rounded-full accent-bg-soft flex items-center justify-center font-bold accent-text text-xs">
            S
          </div>
          <span className="text-zinc-300">dev sweet</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Cover image */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="rounded-xl overflow-hidden border border-zinc-800">
          <img src={post.image} alt={post.title} className="w-full aspect-[2/1] object-cover" />
        </div>
      </div>

      {/* Content + TOC */}
      <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
        <article className="max-w-2xl text-zinc-300 leading-relaxed space-y-6">
          {richContent.sections.map((section, idx) => {
            if (section.type === "paragraph") {
              return (
                <p key={idx} className="text-lg leading-relaxed text-zinc-300">
                  {section.text}
                </p>
              );
            }
            if (section.type === "heading") {
              return (
                <h2
                  key={idx}
                  id={section.id}
                  className="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4 scroll-mt-24"
                >
                  <span className="accent-text font-mono mr-2">##</span>
                  {section.title}
                </h2>
              );
            }
            if (section.type === "code") {
              return (
                <CodeBlock
                  key={idx}
                  filename={section.filename || "code.txt"}
                  code={section.code || ""}
                />
              );
            }
            if (section.type === "list") {
              return (
                <ul key={idx} className="space-y-4 my-6">
                  {section.items?.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="accent-text font-mono mt-1 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        {/* Table of contents */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="font-mono text-xs text-zinc-500 mb-4">// on this page</p>
            <nav className="space-y-3 text-sm">
              {richContent.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-zinc-500 hover:text-zinc-100 transition-colors leading-snug"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      {/* Author card */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <div className="flex items-start gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
          <div className="w-12 h-12 rounded-full accent-bg-soft flex items-center justify-center font-mono font-bold text-lg accent-text shrink-0">
            S
          </div>
          <div>
            <p className="font-semibold text-zinc-100 mb-1">Written by dev sweet</p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Full-stack developer working mostly in the Next.js / Node / MongoDB stack. Writes
              about the stuff that took longer to figure out than it should have.
            </p>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-16 mb-16">
          <p className="font-mono text-xs text-zinc-500 mb-5">// related posts</p>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/blogs/${p.id}`}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="cover-img w-full h-full object-cover" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="font-mono text-xs text-zinc-500 mb-3">{`[${p.tag.toLowerCase()}]`}</span>
                  <h3 className="text-sm font-semibold mb-3 leading-snug group-accent-text transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {p.readTime}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 mt-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="https://github.com/dev-sweet" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-zinc-200 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-zinc-200 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-zinc-200 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm font-mono text-zinc-400">
            <Link href="/" className="hover:text-zinc-100 transition-colors">
              home
            </Link>
            <Link href="/projects" className="hover:text-zinc-100 transition-colors">
              projects
            </Link>
            <Link href="/blogs" className="accent-text">
              blogs
            </Link>
            <Link href="/contact" className="hover:text-zinc-100 transition-colors">
              contact
            </Link>
          </div>
          <p className="text-xs text-zinc-600 font-mono">© 2026 dev sweet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}