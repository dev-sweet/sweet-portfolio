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
  const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

  // const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

  return (
    <motion.div
      style={{
        scale,
        willChange: "transform, opacity",
        transformOrigin: "center top",
      }}
      className="
        sticky top-24 mx-auto mb-24
        w-[80%]
        rounded-2xl
        bg-[#0b0b0b]
        p-10
        shadow-xl
        flex gap-6
      "
    >
      {/* Image */}
      <div className="w-1/3 relative">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover rounded-xl"
          priority={index === 0}
        />
      </div>

      {/* Content */}
      <div className="w-2/3 text-gray-300 flex flex-col justify-between">
        <div>
          {/* Extra dummy meta */}
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <span className="px-3 py-1 rounded-full bg-white/5">Frontend</span>
            <span>Jan 2026</span>
            <span>• 6 min read</span>
          </div>

          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <p className="mt-4 leading-relaxed">{blog.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-xs text-gray-500">By Sweet Ali</span>

          <Link
            href={`/blogs/${blog.id}`}
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white transition"
          >
            Read More <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
