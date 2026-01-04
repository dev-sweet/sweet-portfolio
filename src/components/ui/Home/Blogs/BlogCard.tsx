"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Blog } from "./Blogs";

export default function BlogCard({
  blog,
  index,
  scrollYProgress,
}: {
  blog: Blog;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(
    scrollYProgress,
    [index * 0.2, (index + 1) * 0.2],
    [1, 0.9]
  );

  return (
    <motion.div
      style={{ scale, backgroundColor: "black" }}
      className="sticky top-24 mx-auto mb-24 h-[70vh] w-[80%] rounded-2xl p-10 shadow-xl flex"
    >
      <div className="w-1/3">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={300}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="w-2/3 text-gray-300 pl-6">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="mt-4">{blog.shortDescription}</p>

        <Link
          href={`/blogs/${blog.id}`}
          className="mt-4 inline-flex items-center gap-2"
        >
          Read More <ArrowUpRight />
        </Link>
      </div>
    </motion.div>
  );
}
