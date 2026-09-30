"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Code, Mail, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", sectionId: "home", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "/#about", sectionId: "about", icon: <User className="w-4 h-4" /> },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: <Code className="w-4 h-4" /> },
  // { label: "Blogs", href: "/#blogs", sectionId: "blogs", icon: <FileText className="w-4 h-4" /> },
  { label: "Contact", href: "/#contact", sectionId: "contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("home");

  // Synchronize active section based on route or scroll position
  useEffect(() => {
    if (!isHomePage) {
      const match = NAV_ITEMS.find(
        (item) => item.sectionId !== "home" && pathname.startsWith(`/${item.sectionId}`)
      );
      if (match) {
        setActiveSection(match.sectionId);
      }
      return;
    }

    const handleScrollSpy = () => {
      // 1. Bottom of page check (activates contact when scrolled to the end)
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 2. Viewport position check
      const threshold = 220;
      let current = "home";

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = item.sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    // On home page, check if loaded with a hash
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        setActiveSection(hash);
        const timer = setTimeout(() => {
          const rect = el.getBoundingClientRect();
          const targetTop = hash === "home" ? 0 : rect.top + window.scrollY - 75;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: "smooth",
          });
        }, 120);
        return () => clearTimeout(timer);
      }
    }

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    window.addEventListener("resize", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("resize", handleScrollSpy);
    };
  }, [isHomePage, pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setActiveSection(sectionId);

    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        const targetTop = sectionId === "home" ? 0 : rect.top + window.scrollY - 75;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth",
        });
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <>
      {/* ── Top Fixed Navigation Bar (Desktop) ── */}
      <header className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#080B10]/90 backdrop-blur-xl border border-[#1C2633] rounded-full px-4 py-2 items-center gap-2 sm:gap-3 shadow-2xl shadow-blue-500/10 select-none">
        {NAV_ITEMS.map((item) => {
          const isActive = isHomePage
            ? activeSection === item.sectionId
            : pathname.startsWith(`/${item.sectionId}`) || (item.sectionId === "home" && pathname === "/");

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={`relative flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 cursor-hover z-10 ${
                isActive ? "text-[#F1F5F9]" : "text-[#A1ACBA] hover:text-[#F1F5F9]"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="topNavPill"
                  className="absolute inset-0 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 shadow-[0_0_14px_rgba(59,130,246,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </Link>
          );
        })}
      </header>

      {/* ── Bottom Fixed Navigation Bar (Mobile) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-[#080B10]/95 backdrop-blur-2xl border-t border-[#1C2633] z-50 flex items-center justify-around px-2 select-none">
        {NAV_ITEMS.map((item) => {
          const isActive = isHomePage
            ? activeSection === item.sectionId
            : pathname.startsWith(`/${item.sectionId}`) || (item.sectionId === "home" && pathname === "/");

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={`relative cursor-hover flex flex-col items-center justify-center gap-0.5 py-1.5 px-3 rounded-xl transition-colors duration-200 z-10 ${
                isActive ? "text-[#F1F5F9]" : "text-[#A1ACBA] hover:text-[#F1F5F9]"
              }`}
            >
              <div className="p-1 rounded-lg">
                {item.icon}
              </div>
              <span className="text-[10px] font-mono font-medium tracking-tight">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="mobileNavPill"
                  className="absolute inset-0 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/30 shadow-[0_0_10px_rgba(59,130,246,0.25)] -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </>
  );
}


