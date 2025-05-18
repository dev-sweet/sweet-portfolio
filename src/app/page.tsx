import Footer from "@/components/shared/Footer";
import Banner from "@/components/ui/Home/Banner/Banner";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import Projects from "@/components/ui/Home/Projects/Projects";
import Skills from "@/components/ui/Home/Skills/Skills";
export default function HomePage() {
  return (
    <div className="bg-[#080808] z-0 custom-cursor">
      <Banner />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}
