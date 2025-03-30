import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section id="home" className="h-screen flex items-center relative px-6 md:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
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
            <p className="text-base md:text-lg max-w-md font-light mb-12 text-foreground/80">
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
        
        <div className="md:block relative h-full w-full animate-fade-in opacity-0" style={{
        animationDelay: "0.4s",
        animationFillMode: "forwards"
      }}>
          <div className="rounded-md overflow-hidden h-[70vh] max-h-[600px] w-full">
            <img src="/lovable-uploads/4472a68c-ab53-48e5-8ce9-ca9a7181d8b9.png" alt="Person sitting on beach looking at ocean" className="w-full h-full object-scale-down" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-6 md:left-12 hidden md:block">
        <div className="flex flex-col space-y-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider link-underline">
            Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider link-underline">
            YouTube
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-wider link-underline">
            Facebook
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;