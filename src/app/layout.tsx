import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "./globals.css";
import CustomCursor from "@/components/CustomCurso";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-white">
        <CustomCursor
          defaultCursorImg="/cursor1.png"
          hoverCursorImg="/pointer.png"
          size={40}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
