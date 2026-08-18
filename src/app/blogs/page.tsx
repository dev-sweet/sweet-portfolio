"use client";
import { useState, useEffect } from "react";
import {
  Search,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

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

const TAGS = [
  "All",
  "Next.js",
  "Node.js",
  "MongoDB",
  "AI",
  "TypeScript",
  "React",
];

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped = data.map((post, index) => {
          let tag = "Next.js";
          if (
            post.title.toLowerCase().includes("chatbot") ||
            post.title.toLowerCase().includes("openai") ||
            post.title.toLowerCase().includes("ai")
          ) {
            tag = "AI";
          } else if (
            post.title.toLowerCase().includes("performance") ||
            post.title.toLowerCase().includes("frontend")
          ) {
            tag = "React";
          } else if (
            post.title.toLowerCase().includes("authentication") ||
            post.title.toLowerCase().includes("jwt") ||
            post.title.toLowerCase().includes("node")
          ) {
            tag = "Node.js";
          } else if (post.title.toLowerCase().includes("mongodb")) {
            tag = "MongoDB";
          }

          const dates = [
            "Jun 12, 2026",
            "Jun 08, 2026",
            "May 28, 2026",
            "May 15, 2026",
          ];
          const readTimes = ["12 min", "8 min", "10 min", "7 min"];

          return {
            ...post,
            excerpt:
              post.shortDescription ||
              post.longDescription?.substring(0, 150) + "...",
            tag,
            date: dates[index % dates.length],
            readTime: readTimes[index % readTimes.length],
            featured: index === 0,
          };
        });
        setPosts(mapped);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter((post) => {
    const matchesTag = activeTag === "All" || post.tag === activeTag;
    const q = query.toLowerCase();
    const matchesQuery =
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q);
    return matchesTag && matchesQuery;
  });

  const featuredPost = filtered.find((p) => p.featured);
  const regularPosts = filtered.filter((p) => !p.featured);

  if (loading) {
    return (
      <div className="mt-20 min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        <section className="relative container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 pt-16 pb-12 overflow-hidden animate-pulse">
          <div className="h-6 w-32 bg-zinc-900 rounded mb-4"></div>
          <div className="h-10 w-80 bg-zinc-900 rounded mb-4"></div>
          <div className="h-4 w-96 bg-zinc-900 rounded"></div>
        </section>
        <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="animate-pulse rounded-xl border border-zinc-905 bg-zinc-900/50 h-[380px] flex flex-col overflow-hidden"
              >
                <div className="aspect-video bg-zinc-900 w-full"></div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="h-3 w-16 bg-zinc-900 rounded"></div>
                  <div className="h-6 w-full bg-zinc-900 rounded"></div>
                  <div className="h-4 w-5/6 bg-zinc-900 rounded"></div>
                  <div className="mt-auto flex justify-between">
                    <div className="h-3 w-20 bg-zinc-900 rounded"></div>
                    <div className="h-3 w-16 bg-zinc-900 rounded"></div>
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
    <div className="min-h-screen text-zinc-100 font-sans antialiased">
      <style>{`
        .accent-text { color: #5dcaa5; }
        .accent-bg-soft { background-color: rgba(93, 202, 165, 0.1); }
        .accent-border-soft { border-color: rgba(93, 202, 165, 0.4); }
        .hover-border-accent:hover { border-color: rgba(93, 202, 165, 0.4); }
        .focus-border-accent:focus-within { border-color: rgba(93, 202, 165, 0.5); }
        .group:hover .group-accent-text { color: #5dcaa5; }
        .cover-img { filter: grayscale(0.65); transition: filter 0.5s ease, transform 0.5s ease; }
        .group:hover .cover-img { filter: grayscale(0); transform: scale(1.04); }
      `}</style>

      {/* Hero */}
      <section className="relative container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 pt-16 pb-12 overflow-hidden">
        <span className="absolute -top-6 left-0 text-[6rem] md:text-[11rem] font-bold text-zinc-900/90 select-none leading-none tracking-tight font-mono pointer-events-none whitespace-nowrap">
          BLOG
        </span>
        <div className="relative">
          <p className="font-mono text-sm accent-text mb-3">
            {`// blog.list() — ${posts.length} posts`}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Notes from the build log
          </h1>
          <p className="text-zinc-400 max-w-xl leading-relaxed">
            Write-ups on the stack I actually ship with — Next.js, TypeScript,
            Node, and the occasional AI feature that took three tries to get
            right.
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-10">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 font-mono text-sm w-full md:max-w-sm focus-border-accent transition-colors">
            <span className="text-zinc-500">$</span>
            <span className="text-emerald-400">grep</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search posts..."
              className="bg-transparent outline-none flex-1 text-zinc-100 placeholder:text-zinc-500"
            />
            <Search className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${
                  activeTag === tag
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

      {/* Featured post */}
      {featuredPost && (
        <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-8">
          <Link
            href={`/blogs/${featuredPost.id}`}
            className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent transition-all overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <span className="font-mono text-xs accent-text mb-3">
                  // featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-accent-text transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-zinc-300 group-accent-text transition-colors">
                    read
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
              <div className="order-1 md:order-2 relative min-h-[220px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="cover-img w-full max-h-[500px] object-cover transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-2 py-1 rounded bg-zinc-950/80 border border-zinc-800 font-mono text-xs text-zinc-300">
                  {featuredPost.tag}
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Post grid */}
      <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-16">
        {regularPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 hover-border-accent hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="cover-img w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-xs text-zinc-500 mb-4">
                    {`[${post.tag.toLowerCase()}]`}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 leading-snug group-accent-text transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </span>
                  </div>
                </div>
              </Link>
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
      <section className="container mx-auto lg:px-24 md:px-12 sm:px-8 px-6 mb-16">
        <div className="grid grid-cols-3 divide-x divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold accent-text">
              {posts.length}
              <span className="text-zinc-600">+</span>
            </p>
            <p className="font-mono text-xs text-zinc-500 mt-1">
              // posts published
            </p>
          </div>
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold accent-text">
              {TAGS.length - 1}
            </p>
            <p className="font-mono text-xs text-zinc-500 mt-1">
              // topics covered
            </p>
          </div>
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold accent-text">2026</p>
            <p className="font-mono text-xs text-zinc-500 mt-1">
              // last updated
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
