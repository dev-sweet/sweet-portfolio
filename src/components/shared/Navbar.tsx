"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Home, Code, FileText, Mail, Settings, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { label: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { label: "Projects", href: "#projects", icon: <Code className="w-5 h-5" /> },
    { label: "Blogs", href: "#blogs", icon: <FileText className="w-5 h-5" /> },
    { label: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;

      const sections = ["home", "about", "projects", "blogs", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - (window.innerWidth >= 768 ? 0 : 80),
          behavior: "smooth",
        });
        setActiveSection(targetId);
      }
    }
  };

  const getHref = (href: string) => {
    if (pathname === "/") return href;
    if (href === "#home") return "/";
    if (href === "#about") return "/about";
    if (href === "#projects") return "/projects";
    if (href === "#blogs") return "/blogs";
    return "/";
  };

  return (
    <>
      {/* ── Desktop Left Sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[80px] bg-[#05050a] border-r border-[#1a1a2e] flex-col justify-between py-8 items-center z-50">
        {/* Logo */}
        <Link href="/" className="text-xl font-black text-cyan-400 font-mono tracking-wider cursor-hover">
          SA
        </Link>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-6 w-full items-center">
          {navItems.map((item) => {
            const itemHref = getHref(item.href);
            const isActive =
              pathname === "/"
                ? activeSection === item.href.substring(1)
                : item.href === "#about"
                ? pathname.startsWith("/about")
                : item.href === "#projects"
                ? pathname.startsWith("/projects")
                : item.href === "#blogs"
                ? pathname.startsWith("/blogs")
                : false;

            return (
              <Link
                key={item.label}
                href={itemHref}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative w-12 h-12 flex items-center justify-center rounded-xl cursor-hover group"
              >
                {/* Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="sidebarActiveBg"
                    className="absolute inset-0 bg-[#06b6d4] rounded-xl shadow-lg shadow-cyan-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {/* Icon */}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? "text-[#05050a]" : "text-zinc-500 group-hover:text-zinc-200"
                  }`}
                >
                  {item.icon}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Gear/Settings Icon */}
        <div className="text-zinc-600 hover:text-zinc-400 cursor-hover transition-colors">
          <Settings className="w-5 h-5" />
        </div>
      </aside>

      {/* ── Mobile Top Navbar ── */}
      <nav className="flex md:hidden fixed top-0 left-0 right-0 h-[70px] bg-[#05050a]/90 backdrop-blur-md border-b border-[#1a1a2e]/50 items-center justify-between px-6 z-50">
        <Link href="/" className="text-xl font-black text-cyan-400 font-mono tracking-wider">
          SA
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="cursor-pointer text-zinc-300 hover:text-white hover:bg-[#2a2a4a]/40 p-2"
            >
              <AlignJustify className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#05050a]/95 backdrop-blur-lg border-l border-[#1a1a2e]/60 text-white p-8"
          >
            <SheetHeader className="text-left">
              <SheetTitle className="text-cyan-400 font-black text-xl tracking-wider font-mono">
                SA
              </SheetTitle>
              <SheetDescription className="text-zinc-500 text-xs font-mono">
                // navigation menu
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-12 pl-2">
              {navItems.map((item) => {
                const itemHref = getHref(item.href);
                const isActive =
                  pathname === "/"
                    ? activeSection === item.href.substring(1)
                    : item.href === "#about"
                    ? pathname.startsWith("/about")
                    : item.href === "#projects"
                    ? pathname.startsWith("/projects")
                    : item.href === "#blogs"
                    ? pathname.startsWith("/blogs")
                    : false;

                return (
                  <Link
                    key={item.label}
                    onClick={(e) => {
                      setOpen(false);
                      handleNavClick(e, item.href);
                    }}
                    className={`text-lg transition-colors font-semibold ${
                      isActive ? "text-cyan-400" : "text-zinc-300 hover:text-cyan-400"
                    }`}
                    href={itemHref}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
