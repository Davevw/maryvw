
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">About Mary's Journey of Fitness and Wellness</h2>
            <div className="space-y-6">
              <p className="text-lg font-sans">
                Customized one-on-one training sessions designed to meet your specific fitness goals, whether it's weight loss, muscle gain, or improved overall health and wellness.
              </p>
              <p className="font-sans">
                For 18 years, Mary was a cornerstone at the world-renowned <a href="https://www.cal-a-vie.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cal-a-Vie Health Spa</a> and the <a href="https://goldendoor.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Golden Door</a>. Nestled among rolling hills, these prestigious wellness destinations provided the perfect backdrop for Mary to develop her holistic approach to fitness and wellness.
              </p>
              <p className="font-sans">
                Mary brings over two decades of experience as a fitness expert and wellness coach, sharing her passion for empowering individuals to embrace healthier, happier lives. With a holistic approach, Mary blends physical activity, emotional well-being, and lifestyle inspiration.
              </p>
              <button className="text-sm uppercase tracking-wider mt-6 px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary">
                Read More
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-2xl border border-accent/30 shadow-sm animate-gentle-pulse">
              <AspectRatio ratio={3/4}>
                <img 
                  src="/lovable-uploads/6cc29263-f605-43d0-8286-693ebbdac6e4.png" 
                  alt="Trail path through trees and nature" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
