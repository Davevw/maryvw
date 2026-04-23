import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-28 md:pt-32 pb-20"
    >
      {/* Subtle botanical texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(var(--primary)) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 40%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Editorial copy column */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div
              className="animate-fade-in opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline-gold" />
                <span className="eyebrow-accent">Wellness · Strength · Balance</span>
              </div>
            </div>

            <div
              className="animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h1 className="font-serif font-normal text-foreground text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
                A world of fitness,
                <br />
                <span className="italic text-primary">health & everyday</span>
                <br />
                wellness.
              </h1>
            </div>

            <div
              className="animate-fade-in opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <p className="text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed mb-10 font-light">
                Live Zoom classes, personal training, nutrition guidance, and
                wellness inspiration — designed to help you feel stronger, more
                grounded, and more energized in real life.
              </p>
            </div>

            <div
              className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              <button
                onClick={() => scrollTo("work")}
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-all duration-500 elegant-shadow"
              >
                Join Live Classes
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="group inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/30 text-foreground px-7 py-3.5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:border-foreground hover:bg-foreground/5 transition-all duration-500"
              >
                Explore the Channel
              </button>
            </div>

            <div
              className="animate-fade-in opacity-0 mt-12 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <span className="hairline" />
              <button
                onClick={() => scrollTo("about")}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                Discover More
                <ArrowDown size={14} className="transition-transform duration-500 group-hover:translate-y-1" />
              </button>
            </div>
          </div>

          {/* Editorial photo frame */}
          <div
            className="md:col-span-5 order-1 md:order-2 animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 md:-inset-5 border border-gold/40 rounded-sm" aria-hidden />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-accent/15 rounded-sm -z-10" aria-hidden />

              <div className="relative overflow-hidden rounded-sm frame-shadow bg-secondary">
                <img
                  src="/lovable-uploads/7a2bf212-dd24-4510-afdb-4dc734631791.png"
                  alt="Mary — fitness and wellness coach"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Editorial caption */}
              <div className="mt-6 flex items-center gap-3">
                <span className="hairline-gold" />
                <span className="eyebrow text-foreground/60">Led by Mary · 20+ years experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
