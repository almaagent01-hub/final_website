import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              NTS International Group of Companies ("NTS", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and company name when you submit our contact form or inquire about our services.</li>
              <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website through standard web analytics.</li>
              <li><strong className="text-foreground">Communication Data:</strong> Messages and correspondence you send to us through the website or email.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To send relevant updates about our projects, services, or company news</li>
              <li>To improve the functionality and content of our website</li>
              <li>To comply with applicable legal obligations</li>
              <li>To process job applications submitted through our Careers section</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Sharing & Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website or conducting our business, provided they agree to keep your information confidential. We may also disclose information when required by law or to protect the rights and safety of NTS and its stakeholders.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with a relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:{" "}
              <a href="mailto:info@ntsintgroup.com" className="text-primary hover:underline">info@ntsintgroup.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
