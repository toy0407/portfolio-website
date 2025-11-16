import Footer from "@/components/layout/Footer";
import CustomNavBar from "@/components/layout/Navbar";
import { SocialMediaBanner } from "@/components/layout/SocialMediaBanner";
import About from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillSection from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main>
      <CustomNavBar />
      <SocialMediaBanner />
      <Hero />
      <About />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
