"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring, motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard";
import { AuroraText } from "../../aurora-text";

export interface Blog {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🧈 Ultra-smooth cinematic motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    mass: 1.6,
  });

  useEffect(() => {
    let mounted = true;

    const loadBlogs = async () => {
      try {
        const res = await fetch("/blogs.json");
        const data = await res.json();
        if (mounted) setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      }
    };

    loadBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="blogs" className="py-20 lg:px-32 md:px-16 sm:px-8 px-6 bg-transparent relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
              latest_articles
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured <AuroraText>Blogs</AuroraText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed"
          >
            Insights on system engineering, full-stack architecture, and AI integrations.
          </motion.p>
        </div>

        {/* Smooth & compact scroll container */}
        <div
          ref={containerRef}
          className="relative mt-12"
          style={{ height: `${blogs.length * 60}vh` }}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              scrollYProgress={smoothProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
