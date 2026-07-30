"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className={`${isHomePage ? "pt-0" : "pt-[70px]"} md:pl-[70px] flex flex-col min-h-screen`}>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
