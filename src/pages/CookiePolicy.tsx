import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <div className="space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function properly, improve performance, and provide information to site owners. Cookies cannot harm your device or access other information stored on it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">The NTS International Group website uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Essential Cookies:</strong> Required for the Website to function correctly. These cannot be disabled as they are necessary for basic features such as navigation and form submissions.</li>
              <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our Website by collecting anonymous data about pages visited, time spent, and traffic sources. This helps us improve the site experience.</li>
              <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences (such as language or region) to provide a more personalised experience on return visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party services such as Google Analytics that place their own cookies on your device. These third parties have their own privacy policies and we have no control over their cookies. We encourage you to review their policies directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific sites</li>
              <li>Block all cookies from being set</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Please note that disabling certain cookies may affect the functionality of our Website and your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Cookie Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until manually deleted. Analytics cookies typically expire after 12–24 months.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology or regulation. Any updates will be posted on this page with a revised date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our use of cookies, please contact us at:{" "}
              <a href="mailto:info@ntsintgroup.com" className="text-primary hover:underline">info@ntsintgroup.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
