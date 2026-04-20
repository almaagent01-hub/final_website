import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import NewsSection from "@/components/NewsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const WA_NUMBERS = [
  { label: "+996 223 571 108", href: "https://wa.me/996223571108" },
  { label: "+996 555 302 287", href: "https://wa.me/996555302287" },
];

const Index = () => {
  const [waOpen, setWaOpen] = useState(false);

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

      {/* Fixed floating action buttons — right side, vertically centred */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">

        {/* WhatsApp number popup */}
        {waOpen && (
          <div className="mb-1 bg-white dark:bg-zinc-900 border border-border rounded-2xl shadow-xl p-4 w-56 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-foreground">Chat on WhatsApp</span>
              <button onClick={() => setWaOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={15} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {WA_NUMBERS.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setWaOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                  <span className="text-sm font-medium text-foreground">{n.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp button */}
        <button
          onClick={() => setWaOpen((v) => !v)}
          className="w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </button>

        {/* Email button */}
        <a
          href="mailto:info@ntsintgroup.com"
          className="w-[52px] h-[52px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Email us"
        >
          <Mail size={22} />
        </a>

        {/* Call button */}
        <a
          href="tel:+996223571108"
          className="w-[52px] h-[52px] rounded-full bg-zinc-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone size={22} />
        </a>
      </div>
    </div>
  );
};

export default Index;
