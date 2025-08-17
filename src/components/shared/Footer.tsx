import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="w-[90%] mx-auto  text-white">
      <div className="flex items-center justify-center py-8 gap-4">
        <Link
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1c1c1c] transition duration-1 hover:bg-[#3c3c3c]"
          href="https://github.com/dev-sweet"
          target="_blank"
        >
          <Github size={24} strokeWidth={2} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sweet-ali/"
          target="_blank"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1c1c1c] transition duration-1 hover:bg-[#3c3c3c]"
        >
          <Linkedin size={24} strokeWidth={2} />
        </Link>
        <Link
          href="https://www.instagram.com/sweet_4420"
          target="_blank"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1c1c1c] transition duration-1 hover:bg-[#3c3c3c]"
        >
          <Instagram size={24} strokeWidth={2} />
        </Link>
        <Link
          href="https://x.com/dev_sweet007"
          target="_blank"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1c1c1c] transition duration-1 hover:bg-[#3c3c3c]"
        >
          <Twitter size={24} strokeWidth={2} />
        </Link>
      </div>
      <Separator className="my-2 bg-gray-500" />
      <div className="flex items-center justify-between py-5">
        <div className="text-sm">
          ©{date}{" "}
          <Link
            className="text-blue-500"
            target="_blank"
            href="https://github.com/dev-sweet"
          >
            dev sweet
          </Link>
          . All rights reserved.
        </div>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-white">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
