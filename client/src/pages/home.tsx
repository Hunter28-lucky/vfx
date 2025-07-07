import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import JourneySection from "@/components/journey-section";
import GallerySection from "@/components/gallery-section";
import StatsSection from "@/components/stats-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gta-primary text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <GallerySection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
