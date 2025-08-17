/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, [blogs]);
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center py-20">
      <div className="w-[90%] mx-auto p">
        <h1 className="text-4xl font-semibold text-gray-200 text-center">
          Featured <span className="text-[#018673]">Blogs</span>
        </h1>
        <p className="text-gray-200 text-center mt-2 mb-5 text-xl">
          Here are some blogs that&apos; written by me.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {blogs.map((blog: any) => (
            <div
              key={blog.id}
              className="flex items-center justify-center gap-3 bg-[#151515] hover:bg-[#292929] transition-all duration-300"
            >
              <div className="w-1/3 pl-5">
                <Image
                  className="w-full object-cover h-full"
                  src={blog.image}
                  alt=""
                  height="200"
                  width="100"
                />
              </div>
              <div className="w-2/3 text-gray-300 p-3">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                <p className="mt-3">{blog.shortDescription}</p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-3 flex items-center gap-2"
                >
                  Read More <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="mt-12 inline-flex items-center justify-center px-6 py-3 bg-[#1e1e1e] text-white rounded-md hover:bg-[#1e1e1e] border border-gray-300 transition-all font-bold hover:border-[#018673]"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
