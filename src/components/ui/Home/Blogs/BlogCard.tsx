"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export interface Blog {
  id: number;
  title: string;
  image: string;
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
  shortDescription: string;
  longDescription?: string;
}

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  const category = blog.category || "FRONTEND";
  const date = blog.date || "Jan 2024";
  const readTime = blog.readTime || "6 min read";
  const author = blog.author || "Sweet Ali";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group w-full rounded-2xl bg-[#0a0c16]/90 border border-zinc-800/80 p-5 md:p-6 shadow-xl shadow-black/40 hover:border-indigo-500/30 hover:bg-[#0c0e1a] transition-all duration-300"
    >
      <Link href={`/blogs/${blog.id}`} className="flex flex-col md:flex-row gap-6 md:gap-7 items-stretch">
        {/* Left Thumbnail Image */}
        <div className="w-full md:w-[300px] lg:w-[340px] h-48 sm:h-52 md:h-auto min-h-[180px] shrink-0 rounded-xl overflow-hidden relative border border-zinc-800/60 bg-zinc-950">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 340px, 340px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={index === 0}
          />
        </div>

        {/* Right Details Content */}
        <div className="flex flex-col justify-between flex-1 min-w-0">
          <div>
            {/* Category Tag + Date + Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 rounded-md">
                {category}
              </span>
              <span className="font-mono text-xs text-zinc-400 font-medium tracking-tight">
                {date} &bull; {readTime}
              </span>
            </div>

            {/* Blog Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2.5">
              {blog.title}
            </h3>

            {/* Short Description */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
              {blog.shortDescription}
            </p>
          </div>

          {/* Author Badge */}
          <div className="flex items-center gap-2.5 mt-5 pt-2">
            <div className="w-7 h-7 rounded-full border border-indigo-500/60 bg-indigo-950/50 flex items-center justify-center text-indigo-400 shrink-0">
              <User size={14} className="text-indigo-300" />
            </div>
            <span className="text-sm font-semibold text-zinc-300">
              {author}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
