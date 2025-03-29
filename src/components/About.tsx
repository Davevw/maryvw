
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">About Mary's Journey of Fitness and Wellness</h2>
            <div className="space-y-6">
              <p className="text-lg">
                Mary's professional journey in the fitness industry is as vibrant and impactful. With over two decades of experience, she has dedicated her career to transforming lives through fitness, health, and emotional well-being.
              </p>
              <p>
                For 18 years, Mary was a cornerstone at the world-renowned <a href="https://www.cal-a-vie.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cal-a-Vie Health Spa</a> and the <a href="https://goldendoor.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Golden Door</a>. Nestled among rolling hills, these prestigious wellness destinations provided the perfect backdrop for Mary to develop her holistic approach to fitness and wellness.
              </p>
              <p>
                Mary brings over two decades of experience as a fitness expert and wellness coach, sharing her passion for empowering individuals to embrace healthier, happier lives. With a holistic approach, Mary blends physical activity, emotional well-being, and lifestyle inspiration.
              </p>
              <button className="text-sm uppercase tracking-wider mt-4 link-underline">
                Read More
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-md border border-muted shadow-sm">
              <AspectRatio ratio={3/4}>
                <img 
                  src="/lovable-uploads/a89307d2-1e20-4f62-a399-3579f51c505f.png" 
                  alt="Mary lifting weights" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
