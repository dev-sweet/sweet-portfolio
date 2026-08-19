import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050609] border-t border-[#1C2633] py-8 lg:px-24 md:px-12 sm:px-8 px-6 text-[#667386] relative z-10 select-none">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & System Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <Link href="/" className="cursor-hover text-lg font-black text-[#3B82F6] font-mono tracking-wider">
            Sweet Ali
          </Link>
          <span className="font-mono text-[10px] sm:text-xs text-[#667386] tracking-wider">
            © {currentYear} Sweet Ali. Built with Passion & Modern Tech.
          </span>
        </div>

        {/* Center: Social text links */}
        <div className="flex items-center gap-6 font-mono text-[10px] sm:text-xs font-bold tracking-wider">
          <a
            href="https://github.com/dev-sweet"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-[#A1ACBA] hover:text-[#60A5FA] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sweet-ali"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-[#A1ACBA] hover:text-[#60A5FA] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/dev-sweet"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-[#A1ACBA] hover:text-[#60A5FA] transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Far Right: Availability badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1118] border border-[#1C2633] font-mono text-[10px] sm:text-xs text-[#A1ACBA] select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]"></span>
          </span>
          Available for new opportunities
        </div>

      </div>
    </footer>
  );
}
