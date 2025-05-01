
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-between relative px-6 md:px-12"
      style={{
        backgroundImage: "url('/lovable-uploads/f7de588b-9a90-4d52-8160-29552d535d5b.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
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
            <p className="text-base md:text-lg max-w-md font-light mb-12 text-foreground/90">
              Welcome to Mary's Fitness & Lifestyle Channel. Here, you'll find everything you need to live your best life, with programs designed specifically for women over 40.
            </p>
          </div>
          
          <a href="#about" className="inline-flex items-center group animate-fade-in opacity-0 px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary" style={{
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
            src="/lovable-uploads/f7de588b-9a90-4d52-8160-29552d535d5b.png" 
            alt="Wooden bridge over a stream surrounded by greenery" 
            className="rounded-2xl soft-shadow max-w-full h-auto max-h-[500px] object-contain bg-white/20 backdrop-blur-sm p-2"
          />
          <p className="mt-3 text-xl font-serif text-white bg-primary/80 px-4 py-1 rounded-md">Bridge to Fitness</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
