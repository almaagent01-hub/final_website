import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src={logo} alt="NTS Group of Companies" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              Full-service general contracting and engineering group delivering quality
              projects on time since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li><a href="#story" className="hover:text-primary transition-colors">Who We Are</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Construction & Infrastructure</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Engineering & Electromechanical</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Oil, Gas & Energy</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Trading & Supply</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Logistics & Transportation</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Manpower & HR Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-section-dark-foreground/60">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                <a href="mailto:info@ntsintgroup.com" className="hover:text-primary transition-colors">info@ntsintgroup.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                <a href="tel:+996223571108" className="hover:text-primary transition-colors">+996 223 571 108</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/996223571108" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WA: +996 223 571 108</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#25D366] shrink-0" />
                <a href="https://wa.me/996555302287" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WA: +996 555 302 287</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                123 Business Centre, Chui Avenue, Bishkek, Kyrgyzstan
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-sm text-section-dark-foreground/40">
            © 2026 NTS International Group of Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-section-dark-foreground/40">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
