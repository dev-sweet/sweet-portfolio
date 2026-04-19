import AboutMe from "@/components/ui/Home/About/About";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import ContactForm from "@/components/ui/Home/Contact/Contact";
import HeroSection from "@/components/ui/Home/Hero/HeroSection";
import Projects from "@/components/ui/Home/Projects/Projects";

export default function HomePage() {
  return (
    <div className="z-0 custom-cursor">
      <HeroSection />
      <AboutMe />
      <Projects />
      <Blogs />
      <ContactForm />
    </div>
  );
}
