"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blog } from "./Blogs";

interface BlogCardProps {
  blog: Blog;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const BlogCard = ({ blog, index, scrollYProgress }: BlogCardProps) => {
  // Each card gets its own scroll segment
  const start = index * 0.15;
  const end = start + 0.2;

  // 🎯 Zoom-out + fade-in
  const scale = useTransform(scrollYProgress, [start, end], [1.08, 1]);

  return (
    <motion.div
      style={{
        scale,
        willChange: "transform, opacity",
        transformOrigin: "center top",
      }}
      className="
        sticky top-28 mx-auto mb-16
        w-[95%] md:w-[85%] lg:w-[75%]
        rounded-3xl
        bg-zinc-900/25 border border-zinc-800/40
        backdrop-blur-md
        p-6 md:p-8
        shadow-2xl shadow-black/30
        hover:border-purple-500/25 hover:bg-zinc-900/35
        transition-all duration-300
        flex flex-col md:flex-row gap-6 md:gap-8
      "
    >
      {/* Image container */}
      <div className="w-full md:w-[35%] h-52 md:h-auto min-h-[220px] md:min-h-0 relative overflow-hidden rounded-2xl border border-zinc-800/40">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority={index === 0}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[65%] text-gray-300 flex flex-col justify-between">
        <div>
          {/* Metadata pill row */}
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 mb-3.5 uppercase tracking-wider">
            <span className="px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-800/60 font-semibold text-zinc-400">
              Full Stack
            </span>
            <span>Jan 2026</span>
            <span>• 6 min read</span>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
            {blog.title}
          </h3>
          <p className="mt-3.5 leading-relaxed text-xs sm:text-sm text-zinc-400 font-light">
            {blog.shortDescription}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 border-t border-zinc-900/60 pt-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            By Sweet Ali
          </span>

          <Link
            href={`/blogs/${blog.id}`}
            className="cursor-hover inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-[#7f77dd] transition-colors"
          >
            Read More <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
