"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import BlogCard from "./BlogCard";

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

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-semibold text-gray-200 text-center">
          Featured <span className="text-[#018673]">Blogs</span>
        </h1>

        <div ref={containerRef} className="relative h-[300vh] mt-16">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
