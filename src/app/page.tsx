import Footer from "@/components/layout/Footer";
import CustomNavBar from "@/components/layout/Navbar";
import { SocialMediaBanner } from "@/components/layout/SocialMediaBanner";
import About from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <CustomNavBar />
      <SocialMediaBanner />
      <Hero />
      <About />
      <section className="h-[300px] w-full bg-red-700" />
      <section className="h-[300px] w-full bg-green-700" />
      <section className="h-[300px] w-full bg-purple-700" />
      <section className="h-[300px] w-full bg-yellow-700" />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
