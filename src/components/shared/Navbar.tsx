"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Home, Code, FileText, Mail, User } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", sectionId: "home", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "/#about", sectionId: "about", icon: <User className="w-4 h-4" /> },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: <Code className="w-4 h-4" /> },
  { label: "Blogs", href: "/#blogs", sectionId: "blogs", icon: <FileText className="w-4 h-4" /> },
  { label: "Contact", href: "/#contact", sectionId: "contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Detect scroll direction with threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Scroll down past 80px -> hide slowly
    if (diff > 5 && latest > 80) {
      setHidden(true);
    }
    // Scroll up -> show slowly
    else if (diff < -5 || latest <= 50) {
      setHidden(false);
    }
  });

  // Track active section on scroll (homepage only)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScrollSpy = () => {
      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.sectionId,
        el: document.getElementById(item.sectionId),
      })).filter((item) => item.el !== null);

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          return;
        }
      }

      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isHomePage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        const topOffset = sectionId === "home" ? 0 : el.offsetTop - 40;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
        setActiveSection(sectionId);
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <>
      {/* ── Top Floating Navigation Bar (Desktop) ── */}
      <motion.header
        variants={{
          visible: { y: 0, x: "-50%", opacity: 1 },
          hidden: { y: -80, x: "-50%", opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        className="hidden md:flex fixed top-5 left-1/2 z-50 bg-[#080B10]/90 backdrop-blur-xl border border-[#1C2633] rounded-full px-6 py-2.5 items-center gap-4 sm:gap-6 shadow-2xl shadow-blue-500/10 select-none"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = isHomePage
            ? activeSection === item.sectionId
            : pathname.startsWith(`/${item.sectionId}`);

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={`relative flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-hover ${isActive
                ? "text-[#F1F5F9] bg-[#3B82F6]/15 border border-[#3B82F6]/30"
                : "text-[#A1ACBA] hover:text-[#F1F5F9] hover:bg-white/5"
                }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="topNavPill"
                  className="absolute inset-0 rounded-full border border-[#3B82F6]/40 -z-10 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </motion.header>

      {/* ── Mobile PWA Bottom Fixed Navigation Bar (Mobile) ── */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: 80, opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 h-[64px] bg-[#080B10]/95 backdrop-blur-2xl border-t border-[#1C2633] z-50 flex items-center justify-around px-2 select-none"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = isHomePage
            ? activeSection === item.sectionId
            : pathname.startsWith(`/${item.sectionId}`);

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={`cursor-hover flex flex-col items-center justify-center gap-0.5 py-1 px-3 rounded-xl transition-all duration-200 ${isActive ? "text-[#F1F5F9]" : "text-[#A1ACBA] hover:text-[#F1F5F9]"
                }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-all ${isActive ? "bg-[#3B82F6]/15 border border-[#3B82F6]/30 shadow-[0_0_10px_rgba(59,130,246,0.25)]" : ""
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
      </motion.nav>
    </>
  );
}


