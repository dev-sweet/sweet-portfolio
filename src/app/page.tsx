import AboutMe from "@/components/ui/Home/About/About";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import ContactForm from "@/components/ui/Home/Contact/Contact";
import Hero from "@/components/ui/Home/Hero/Hero";
import Projects from "@/components/ui/Home/Projects/Projects";
import Skills from "@/components/ui/Home/Skills/Skills";

export default function HomePage() {
  return (
    <div className="z-0 custom-cursor">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Blogs />
      <ContactForm />
    </div>
  );
}
