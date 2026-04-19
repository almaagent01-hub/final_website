import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="section-label">Story & Heritage</span>
              <h2 className="section-heading mt-4 mb-6">
                Our Journey Since 2020
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Founded in 2020, NTS International Group of Company was built on a simple
                promise — solid foundations and honest work. From our first commercial
                renovation to multi-million dollar infrastructure projects, we design, build
                and maintain the assets that power the world for today and make it
                future-ready for tomorrow. With a rapidly growing portfolio and a team of
                highly skilled professionals, we deliver innovative, turnkey solutions across
                construction, energy, logistics, and manpower services.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn More
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="flex gap-3 h-[280px] md:h-[400px] lg:h-[500px]">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={story1}
                  alt="NTS Group building project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden mt-8 md:mt-12">
                <img
                  src={story2}
                  alt="NTS Group pipeline project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
