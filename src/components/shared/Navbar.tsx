"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Home, Code, FileText, Mail, Terminal, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const topNavItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ];

  const sidebarNavItems = [
    { label: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { label: "About", href: "/about", icon: <User className="w-5 h-5" /> },
    { label: "Projects", href: "/projects", icon: <Code className="w-5 h-5" /> },
    { label: "Blogs", href: "/blogs", icon: <FileText className="w-5 h-5" /> },
    { label: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* ── Top Header Navigation Bar (Hidden on Homepage, Visible on all other pages) ── */}
      {!isHomePage && (
        <header className="fixed top-0 left-0 right-0 h-[70px] bg-[#070a14]/85 backdrop-blur-xl border-b border-[#141b2e] z-50 flex items-center justify-between px-6 md:px-10 select-none">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-hover">
            <div className="w-9 h-9 rounded-xl bg-[#00f2fe]/10 border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] group-hover:bg-[#00f2fe] group-hover:text-zinc-950 transition-all duration-300 shadow-md shadow-cyan-500/10">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tight text-white font-sans">
              Sweet <span className="text-[#00f2fe]">Ali</span>
            </span>
          </Link>

          {/* Center: Main Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {topNavItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 transition-colors cursor-hover ${
                    isActive ? "text-[#00f2fe] font-semibold" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="topNavActive"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#00f2fe] rounded-full shadow-[0_0_8px_#00f2fe]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Buttons (Resume & Hire Me) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume-sweet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover px-4 py-1.5 rounded-xl border border-purple-500/50 text-purple-300 text-xs font-semibold hover:bg-purple-500/15 hover:border-purple-400 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              Resume
            </a>
            <Link
              href="/contact"
              className="cursor-hover px-4 py-1.5 rounded-xl bg-[#00f2fe] text-zinc-950 text-xs font-bold hover:bg-cyan-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden text-slate-200 hover:text-white hover:bg-white/10 p-2 cursor-pointer"
              >
                <AlignJustify className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#070a14]/95 backdrop-blur-2xl border-l border-[#141b2e] text-white p-8"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-white font-black text-xl tracking-tight flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#00f2fe]" />
                  Sweet <span className="text-[#00f2fe]">Ali</span>
                </SheetTitle>
                <SheetDescription className="text-slate-400 text-xs font-mono">
                  // full-stack developer portfolio
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-5 mt-10">
                {sidebarNavItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-base font-semibold transition-colors py-2 border-b border-white/5 ${
                        isActive ? "text-[#00f2fe]" : "text-slate-300 hover:text-[#00f2fe]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-white/10">
                <a
                  href="/resume-sweet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl border border-purple-500/50 text-purple-300 text-sm font-semibold bg-purple-500/10"
                >
                  Resume
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-[#00f2fe] text-zinc-950 text-sm font-bold shadow-lg shadow-cyan-500/20"
                >
                  Hire Me
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </header>
      )}

      {/* ── Desktop Left Vertical Sidebar Floating Bar (Always Visible) ── */}
      <aside className={`hidden md:flex fixed left-0 ${isHomePage ? "top-0" : "top-[70px]"} bottom-0 w-[70px] bg-[#070a14]/90 backdrop-blur-xl border-r border-[#141b2e] flex-col justify-between py-6 items-center z-40 select-none`}>
        {/* Top Floating Navigation Icons */}
        <div className="flex flex-col gap-4 w-full items-center">
          {sidebarNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative group cursor-hover"
                title={item.label}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-[#00f2fe] text-zinc-950 shadow-lg shadow-cyan-500/30 scale-105"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.icon}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Profile Avatar */}
        <Link href="/about" className="relative group cursor-hover" title="Sweet Ali Profile">
          <div className="w-10 h-10 rounded-full border-2 border-[#00f2fe]/60 overflow-hidden group-hover:border-[#00f2fe] transition-all duration-300 shadow-md shadow-cyan-500/20 group-hover:scale-110">
            <Image
              src="/hero.jpg"
              alt="Sweet Ali Avatar"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#070a14]" />
        </Link>
      </aside>

      {/* Mobile Top Bar when on Homepage */}
      {isHomePage && (
        <nav className="flex md:hidden fixed top-0 left-0 right-0 h-[60px] bg-[#070a14]/90 backdrop-blur-md border-b border-[#141b2e]/50 items-center justify-between px-6 z-50">
          <Link href="/" className="text-lg font-black text-[#00f2fe] font-mono tracking-wider">
            SA
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-slate-200 hover:text-white hover:bg-white/10 p-2 cursor-pointer"
              >
                <AlignJustify className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#070a14]/95 backdrop-blur-2xl border-l border-[#141b2e] text-white p-8"
            >
              <SheetHeader className="text-left">
                <SheetTitle className="text-white font-black text-xl tracking-tight flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#00f2fe]" />
                  Sweet <span className="text-[#00f2fe]">Ali</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-5 mt-10">
                {sidebarNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-slate-300 hover:text-[#00f2fe] py-2 border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      )}
    </>
  );
}
