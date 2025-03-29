
import { cn } from "@/lib/utils";

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
                For 18 years, Mary was a cornerstone at the world-renowned Cal-a-Vie Health Spa and the Golden Door. Nestled among rolling hills, these prestigious wellness destinations provided the perfect backdrop for Mary to develop her holistic approach to fitness and wellness.
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
            <div className="relative w-full max-w-md aspect-[3/4] bg-muted overflow-hidden">
              <div className={cn(
                "absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5",
                "flex items-center justify-center text-muted-foreground"
              )}>
                <span className="text-sm">Mary's Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
