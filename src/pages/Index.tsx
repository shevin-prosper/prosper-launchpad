import Navbar from "@/components/Navbar";
import GlobeHero from "@/components/GlobeHero";
import ScrollMorphSection from "@/components/ScrollMorphSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GlobeHero />
      <ScrollMorphSection />
      <TestimonialsSection />
      <ServicesSection />
      <DestinationsSection />
      <HowItWorks />
      <GallerySection />
      <BlogSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
