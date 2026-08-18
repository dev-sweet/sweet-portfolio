"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Code, FileText, Mail, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    { label: "Projects", href: "/projects", icon: <Code className="w-4 h-4" /> },
    { label: "Blogs", href: "/blogs", icon: <FileText className="w-4 h-4" /> },
    { label: "Contact", href: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* ── Top Floating Navigation Bar (Desktop) ── */}
      <header className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#070a14]/85 backdrop-blur-xl border border-[#141b2e] rounded-full px-6 py-2.5 items-center gap-4 sm:gap-6 shadow-2xl shadow-cyan-500/10 select-none">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-hover ${
                isActive
                  ? "text-[#00f2fe] bg-[#00f2fe]/10 border border-[#00f2fe]/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="topNavPill"
                  className="absolute inset-0 rounded-full border border-[#00f2fe]/40 -z-10 shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </header>

      {/* ── Mobile PWA Bottom Fixed Navigation Bar (Mobile) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-[#070a14]/95 backdrop-blur-2xl border-t border-[#141b2e] z-50 flex items-center justify-around px-2 select-none">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200 ${
                isActive ? "text-[#00f2fe]" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-all ${
                  isActive ? "bg-[#00f2fe]/15 border border-[#00f2fe]/30 shadow-[0_0_10px_rgba(0,242,254,0.25)]" : ""
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] font-mono font-medium tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
