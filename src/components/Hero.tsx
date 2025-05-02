
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-between relative px-6 md:px-12 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl soft-shadow">
          <div className="animate-fade-in opacity-0" style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards"
          }}>
            <h1 className="text-4xl lg:text-6xl font-serif font-medium mb-6 leading-tight md:text-5xl text-primary">
              Discover a World of Fitness and Health
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{
            animationDelay: "0.6s",
            animationFillMode: "forwards"
          }}>
            <p className="text-base md:text-lg max-w-md font-sans mb-12 text-foreground/90">
              Join us on Zoom Monday thru Friday mornings for stretch, strength, and balance, moderate workouts.
            </p>
          </div>
          
          <a href="#about" className="inline-flex items-center group animate-fade-in opacity-0 px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-sans" style={{
            animationDelay: "0.8s",
            animationFillMode: "forwards"
          }}>
            <span className="text-sm uppercase tracking-widest mr-2">
              Read More
            </span>
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
        
        <div className="flex flex-col items-center animate-fade-in opacity-0 md:max-w-md" style={{
          animationDelay: "0.4s",
          animationFillMode: "forwards"
        }}>
          <img 
            src="/lovable-uploads/7a2bf212-dd24-4510-afdb-4dc734631791.png" 
            alt="Beach meditation - Fitness & Wellness" 
            className="rounded-2xl soft-shadow max-w-full h-auto max-h-[500px] object-contain bg-white/20 backdrop-blur-sm p-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
