import AnimatedBackground from "@/components/shared/AnimatedBackground";
import HeroSection from "@/components/ui/Home/Hero/HeroSection";
import Experience from "@/components/ui/Home/Experience/Experience";
import Projects from "@/components/ui/Home/Projects/Projects";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import ContactForm from "@/components/ui/Home/Contact/Contact";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background layer */}
      <AnimatedBackground />

      {/* Sections */}
      <div className="relative z-10">
        <HeroSection />
        <Experience />
        <Projects />
        <Blogs />
        <ContactForm />
      </div>
    </div>
  );
}
