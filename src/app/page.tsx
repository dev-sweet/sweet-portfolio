import Hero from "@/components/ui/Home/Hero/Hero";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import Projects from "@/components/ui/Home/Projects/Projects";
import Skills from "@/components/ui/Home/Skills/Skills";
export default function HomePage() {
  return (
    <div className="z-0 custom-cursor">
      <Hero />
      <Skills />
      <Projects />
      <Blogs />
    </div>
  );
}
