import AnimatedBackground from "@/components/shared/AnimatedBackground";
import ProfileCard from "@/components/shared/ProfileCard";
import HeroSection from "@/components/ui/Home/Hero/HeroSection";
import Projects from "@/components/ui/Home/Projects/Projects";
import Blogs from "@/components/ui/Home/Blogs/Blogs";
import ContactForm from "@/components/ui/Home/Contact/Contact";
import AboutMe from "@/components/ui/Home/About/About";

export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white overflow-x-clip">
      {/* Background layer */}
      <AnimatedBackground />

      {/* Main Homepage Layout Container (Exact 1140px Max Width & Centered) */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-12 pt-8 lg:pt-12">
          
          {/* ── Left Profile Card (Sticky vertically centered with equal top-bottom gaps) ── */}
          <aside className="hidden lg:block lg:w-[300px] xl:w-[310px] shrink-0 sticky top-1/2 -translate-y-1/2 self-start z-30">
            <ProfileCard />
          </aside>

          {/* ── Right Scrollable Content Column (Fits within 1140px container) ── */}
          <main className="flex-1 min-w-0 w-full flex flex-col gap-10 sm:gap-12 lg:gap-14">
            <HeroSection />
            <AboutMe />
            <Projects />
            <Blogs />
            <ContactForm />
          </main>

        </div>
      </div>
    </div>
  );
}
