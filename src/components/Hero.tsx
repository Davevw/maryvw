
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center relative px-6 md:px-12"
      style={{
        backgroundImage: "url('/lovable-uploads/9c223bf5-20e7-426a-81bf-6e429806d0b6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Removed the overlay div completely */}
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-xl bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="animate-fade-in opacity-0" style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards"
          }}>
            <h1 className="text-4xl lg:text-7xl font-serif font-medium mb-6 leading-tight md:text-5xl">
              Discover a World of Fitness and Health
            </h1>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{
            animationDelay: "0.6s",
            animationFillMode: "forwards"
          }}>
            <p className="text-base md:text-lg max-w-md font-light mb-12 text-foreground/90">
              Welcome to Mary's Fitness & Lifestyle Channel. Here, you'll find everything you need to live your best life.
            </p>
          </div>
          
          <a href="#about" className="inline-flex items-center group animate-fade-in opacity-0" style={{
            animationDelay: "0.8s",
            animationFillMode: "forwards"
          }}>
            <span className="text-sm uppercase tracking-widest mr-2">
              Explore
            </span>
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
