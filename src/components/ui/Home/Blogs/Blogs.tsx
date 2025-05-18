import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="h-screen w-[90%] mx-auto py-20 bg-[url('/bg.jpg')] bg-cover bg-center">
      <h1 className="text-4xl font-semibold text-gray-400 text-center">
        Featured <span className="text-[#018673]">Blogs</span>
      </h1>
      <p className="text-gray-300 text-center mt-2 mb-5 text-xl">
        Here are some blogs that&appos;s written by me.
      </p>
      <div className="grid md:grid-cols-2 gap-x-5 mt-10">
        <div className="flex items-center justify-center gap-3 bg-[#292929]">
          <div className="w-1/4">
            <Image
              className="w-full object-cover"
              src="/bg-projects-bw.jpg"
              alt=""
              height="100"
              width="100"
            />
          </div>
          <div className="w-3/4 text-gray-300 p-3">
            <h1 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptatem voluptates a soluta dicta laudantium...
            </p>
            <Link href="/" className="mt-3 flex items-center gap-2">
              Read More <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
