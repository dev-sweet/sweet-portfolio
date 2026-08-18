"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className={`flex flex-col min-h-screen pb-16 md:pb-0 ${isHomePage ? "pt-0" : "pt-20 md:pt-24"}`}>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
