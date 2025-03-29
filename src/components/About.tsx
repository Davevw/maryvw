
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">About Me</h2>
            <div className="space-y-6">
              <p className="text-lg">
                I'm a storyteller at heart with over a decade of experience crafting narratives across different mediums.
              </p>
              <p>
                My journey began in journalism where I learned to find the heart of a story and present it with clarity and impact. Over the years, I've expanded my creative toolkit to include design, brand strategy, and creative direction.
              </p>
              <p>
                I believe that powerful stories create meaningful connections and drive real change. Whether I'm writing content for a new brand, designing a visual identity, or directing a creative project, my goal is always to create work that resonates and leaves a lasting impression.
              </p>
              <p>
                When I'm not working, you can find me exploring new neighborhoods, reading fiction, or perfecting my sourdough recipe.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] bg-muted overflow-hidden">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5",
                "flex items-center justify-center text-muted-foreground"
              )}>
                <span className="text-sm">Portrait Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
