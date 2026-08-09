"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard, { Blog } from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

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
    <section id="blogs" className="py-20 lg:px-24 md:px-12 sm:px-8 px-6 bg-transparent relative z-10">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
            >
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Insights
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl leading-relaxed"
            >
              Deep dives into architecture, performance optimization, and the future of web technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards List */}
        <div className="flex flex-col gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
