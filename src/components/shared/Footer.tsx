import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#05050a] border-t border-[#1a1a2e]/60 py-8 lg:px-24 md:px-12 sm:px-8 px-6 text-zinc-500 relative z-10 select-none">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Logo & System Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <Link href="/" className="cursor-hover text-lg font-black text-cyan-400 font-mono tracking-wider">
            Sweet Ali
          </Link>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-600 tracking-wider">
            © {currentYear} Sweet Ali. Built with Passion & Modern Tech.
          </span>
        </div>

        {/* Center: Social text links */}
        <div className="flex items-center gap-6 font-mono text-[10px] sm:text-xs font-bold tracking-wider">
          <a
            href="https://github.com/dev-sweet"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sweet-ali"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/dev-sweet"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover text-zinc-400 hover:text-cyan-400 transition-colors"
          >
            Twitter
          </a>
        </div>

        {/* Far Right: Availability badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-900 font-mono text-[10px] sm:text-xs text-zinc-400 select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Available for new opportunities
        </div>

      </div>
    </footer>
  );
}
