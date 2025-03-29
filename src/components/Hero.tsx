
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center relative px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight">
            Hello, I'm Jane Doe.
          </h1>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <h2 className="text-xl md:text-3xl font-serif font-normal mb-8 text-muted-foreground max-w-2xl">
            Writer, designer and creative storyteller based in New York.
          </h2>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <p className="text-base md:text-lg max-w-md font-light mb-12">
            I craft narratives and experiences that connect, inspire, and make a lasting impression.
          </p>
        </div>
        
        <a 
          href="#about" 
          className="inline-flex items-center group animate-fade-in opacity-0"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <span className="text-sm uppercase tracking-widest mr-2">
            Learn more
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
            className="text-xs uppercase tracking-wider link-underline"
          >
            Instagram
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-wider link-underline"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-wider link-underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
