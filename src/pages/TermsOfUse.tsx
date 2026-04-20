import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the NTS International Group of Companies website ("Website"), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please refrain from using our Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">You agree to use this Website only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the Website in any way that violates applicable local, national, or international laws or regulations</li>
              <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
              <li>Attempt to gain unauthorised access to any part of the Website or its related systems</li>
              <li>Reproduce, duplicate, copy, or resell any part of the Website without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Website — including text, graphics, logos, images, project photographs, and software — is the property of NTS International Group of Companies and is protected by applicable intellectual property laws. Unauthorised use of any content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Website is provided on an "as is" and "as available" basis. NTS makes no warranties, expressed or implied, regarding the accuracy, completeness, or suitability of the information and materials on this Website. We do not warrant that the Website will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              NTS International Group of Companies shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this Website or its content. This includes, but is not limited to, loss of data, profit, or business opportunity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Website may contain links to third-party websites for your convenience. NTS does not endorse or assume responsibility for the content, privacy practices, or availability of those sites. Accessing third-party links is done at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              NTS reserves the right to amend these Terms of Use at any time. Updated terms will be posted on this page with a revised date. Continued use of the Website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which NTS International Group of Companies is registered, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions regarding these Terms of Use, contact us at:{" "}
              <a href="mailto:info@ntsintgroup.com" className="text-primary hover:underline">info@ntsintgroup.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
