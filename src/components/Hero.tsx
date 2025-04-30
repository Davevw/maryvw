
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-between relative px-6 md:px-12"
      style={{
        backgroundImage: "url('/lovable-uploads/a2b1242f-5986-48a7-94fc-11ac93ccc123.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
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
        
        <div className="animate-fade-in opacity-0 md:max-w-md" style={{
          animationDelay: "0.4s",
          animationFillMode: "forwards"
        }}>
          <img 
            src="/lovable-uploads/8681557d-6739-444a-821a-7c69c65f465d.png" 
            alt="Mary in a yoga pose at the beach" 
            className="rounded-lg shadow-xl max-w-full h-auto max-h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
