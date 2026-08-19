import Navbar from "@/components/shared/Navbar";
import MainContainer from "@/components/shared/MainContainer";
import "./globals.css";
import CustomCursor from "@/components/CustomCurso";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sweet Ali — Portfolio",
  description: "Full-Stack Web Developer Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050609] text-[#F1F5F9]">
        <CustomCursor
          defaultCursorImg="/cursor1.png"
          hoverCursorImg="/pointer.png"
          size={40}
        />
        <Navbar />
        <MainContainer>{children}</MainContainer>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
