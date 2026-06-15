"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AuroraText } from "@/components/ui/aurora-text";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 h-[80px] lg:px-32 md:px-16 sm:px-8 px-6 bg-[#080810]/80 backdrop-blur-md border-b border-[#2a2a4a]/40 left-0 right-0 flex items-center justify-between mx-auto z-40">
      <div className="flex md:flex-1 justify-start">
        <Link href="/" className="text-2xl text-gray-200 font-bold">
          &lt;/<AuroraText>Sweet</AuroraText>&gt;
        </Link>
      </div>

      <NavigationMenu className="hidden md:flex items-center justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className={`cursor-hover px-2 transition-colors duration-200 font-medium ${isActive("/") ? "text-[#5dcaa5]" : "text-gray-300 hover:text-white"}`} href="/">
              Home
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={`cursor-hover px-2 transition-colors duration-200 font-medium ${isActive("/projects") ? "text-[#5dcaa5]" : "text-gray-300 hover:text-white"}`} href="/projects">
              Projects
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={`cursor-hover px-2 transition-colors duration-200 font-medium ${isActive("/blogs") ? "text-[#5dcaa5]" : "text-gray-300 hover:text-white"}`} href="/blogs">
              Blogs
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-hover">
            <Link className={`cursor-hover px-2 transition-colors duration-200 font-medium ${isActive("/contact") ? "text-[#5dcaa5]" : "text-gray-300 hover:text-white"}`} href="/contact">
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex md:flex-1 justify-end items-center gap-4">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          open to work
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="cursor-pointer md:hidden text-zinc-300 hover:text-white hover:bg-[#2a2a4a]/40">
              <AlignJustify className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#080810]/95 border-l border-[#2a2a4a]/60 text-white p-8">
            <SheetHeader className="text-left">
              <SheetTitle className="text-gray-200 font-bold text-xl font-mono">
                &lt;/<AuroraText>Sweet</AuroraText>&gt;
              </SheetTitle>
              <SheetDescription className="text-zinc-500 text-xs font-mono">
                // navigation menu
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-12 pl-2">
              <Link
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors font-mono font-semibold ${
                  isActive("/") ? "text-[#5dcaa5]" : "text-zinc-300 hover:text-[#5dcaa5]"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors font-mono font-semibold ${
                  isActive("/projects") ? "text-[#5dcaa5]" : "text-zinc-300 hover:text-[#5dcaa5]"
                }`}
                href="/projects"
              >
                Projects
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors font-mono font-semibold ${
                  isActive("/blogs") ? "text-[#5dcaa5]" : "text-zinc-300 hover:text-[#5dcaa5]"
                }`}
                href="/blogs"
              >
                Blogs
              </Link>
              <Link
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors font-mono font-semibold ${
                  isActive("/contact") ? "text-[#5dcaa5]" : "text-zinc-300 hover:text-[#5dcaa5]"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
