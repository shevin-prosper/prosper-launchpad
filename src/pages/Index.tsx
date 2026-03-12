import Navbar from "@/components/Navbar";
import GlobeHero from "@/components/GlobeHero";
import LogoStrip from "@/components/LogoStrip";
import ScrollMorphSection from "@/components/ScrollMorphSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import DestinationsSection from "@/components/DestinationsSection";
import WhyProsper from "@/components/WhyProsper";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlobeHero />
      <LogoStrip />
      <ScrollMorphSection />
      <TestimonialsSection />
      <HowItWorks />
      <DestinationsSection />
      <WhyProsper />
      <TeamSection />
      <GallerySection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      {/* Floating elements */}
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
