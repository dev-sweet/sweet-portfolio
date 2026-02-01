"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
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
    <section className="bg-cover bg-center py-16">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-semibold text-gray-200 text-center">
          Featured <AuroraText>Blogs</AuroraText>
        </h1>

        {/* Smooth & compact scroll container */}
        <div
          ref={containerRef}
          className="relative mt-16"
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
