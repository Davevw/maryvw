import { AspectRatio } from "@/components/ui/aspect-ratio";
import FitnessChannelPresentation from "@/components/FitnessChannelPresentation";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Editorial photo frame */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative max-w-[280px] mx-auto md:mx-0">
              <div
                className="absolute -inset-3 md:-inset-5 border border-gold/40 rounded-sm"
                aria-hidden
              />
              <div
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-accent/15 rounded-sm -z-10"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-sm frame-shadow bg-secondary">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src="/lovable-uploads/f7de588b-9a90-4d52-8160-29552d535d5b.png"
                    alt="Serene wooden bridge in nature — Mary's wellness sanctuary"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="hairline-gold" />
                <span className="eyebrow text-foreground/60">
                  Led by Mary · Cal-a-Vie & Golden Door alumna
                </span>
              </div>

              {/* Mary's Fitness Channel — viewable & downloadable presentation */}
              <FitnessChannelPresentation />
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline-gold" />
              <span className="eyebrow-accent">About Mary</span>
            </div>

            <h2 className="font-serif font-normal text-foreground text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-8">
              Two decades of guiding people toward
              <span className="italic text-primary"> stronger, calmer, more grounded </span>
              everyday lives.
            </h2>

            <div className="space-y-5 text-foreground/80 leading-relaxed font-light max-w-2xl">
              <p>
                For 18 years, Mary was a cornerstone at the world-renowned{" "}
                <a
                  href="https://www.cal-a-vie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Cal-a-Vie Health Spa
                </a>{" "}
                and{" "}
                <a
                  href="https://goldendoor.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Golden Door
                </a>
                . Among the rolling California hills, she developed a quiet,
                holistic approach to fitness — one that honors how the body
                actually moves through real life.
              </p>
              <p>
                Today, Mary brings that same attentive, spa-rooted philosophy
                online: live Zoom classes, personal training, nutrition
                guidance, and gentle wellness inspiration designed to help you
                feel stronger, more grounded, and more energized.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-gold/60 italic font-serif text-xl md:text-2xl text-foreground/85 max-w-xl">
              "Wellness isn't a destination — it's the way you show up for
              yourself, every single day."
              <footer className="mt-3 eyebrow text-foreground/50 not-italic font-sans">
                — Mary
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
