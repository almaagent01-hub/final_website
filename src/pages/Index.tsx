import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import NewsSection from "@/components/NewsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <CapabilitiesSection />
      <SustainabilitySection />
      <NewsSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
