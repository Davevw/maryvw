
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col justify-center relative px-6 md:px-12 bg-secondary/20"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/6df31c73-0c61-4174-b7d1-097f2c69ce00.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight text-white">
            Mary's Fitness Channel
          </h1>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <h2 className="text-xl md:text-3xl font-serif font-normal mb-8 text-white/90 max-w-2xl">
            Discover a World of Fitness and Health
          </h2>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <p className="text-base md:text-lg max-w-md font-light mb-12 text-white/80">
            Welcome to Mary's Fitness & Lifestyle Channel. Here, you'll find everything you need to live your best life.
          </p>
        </div>
        
        <a 
          href="#about" 
          className="inline-flex items-center group animate-fade-in opacity-0 text-white"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <span className="text-sm uppercase tracking-widest mr-2">
            Explore
          </span>
          <ArrowDown 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-y-1" 
          />
        </a>
      </div>
      
      <div className="absolute bottom-8 left-6 md:left-12 hidden md:block">
        <div className="flex flex-col space-y-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-wider link-underline text-white"
          >
            Instagram
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-wider link-underline text-white"
          >
            YouTube
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-wider link-underline text-white"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
