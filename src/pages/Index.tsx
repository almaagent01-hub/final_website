import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import NewsSection from "@/components/NewsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MessageCircle, Phone } from "lucide-react";

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

      {/* Fixed mobile WhatsApp + Call buttons — right side */}
      <div className="lg:hidden fixed right-4 bottom-8 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/996223571108"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="tel:+996223571108"
          className="w-[52px] h-[52px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone size={22} />
        </a>
      </div>
    </div>
  );
};

export default Index;
