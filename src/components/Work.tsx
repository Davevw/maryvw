
import { ArrowRight } from "lucide-react";

interface WorkItemProps {
  title: string;
  category: string;
  year: string;
  description: string;
  index: number;
}

const WorkItem = ({ title, category, year, description, index }: WorkItemProps) => {
  return (
    <div className="group cursor-pointer mb-20" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="mb-4">
        <div className="uppercase text-xs tracking-widest text-muted-foreground mb-2">
          {category} — {year}
        </div>
        <h3 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-primary/80 transition-colors">
          {title}
        </h3>
        <p className="text-base text-muted-foreground max-w-xl mb-4">
          {description}
        </p>
        <div className="inline-flex items-center">
          <span className="text-sm uppercase tracking-wider mr-2">
            View program
          </span>
          <ArrowRight 
            size={16} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </div>
      </div>
      <div className="h-px w-full bg-border group-hover:bg-primary/30 transition-colors"></div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Personal Training Sessions",
      category: "Fitness",
      year: "2023",
      description: "Customized one-on-one training sessions designed to meet your specific fitness goals, whether it's weight loss, muscle gain, or improved overall health and wellness."
    },
    {
      title: "Group Fitness Classes",
      category: "Wellness",
      year: "2022",
      description: "Energetic and motivating group classes including yoga, HIIT, and strength training that build community while helping participants achieve their fitness goals."
    },
    {
      title: "Meal Planning for Fitness",
      category: "Health",
      year: "2022",
      description: "Personalized meal plans designed to complement your fitness routine, with balanced nutrition to fuel your workouts and support recovery for optimal results."
    },
    {
      title: "Zoom Classes for Remote Workouts",
      category: "Digital",
      year: "2021",
      description: "Live virtual workout sessions you can join from anywhere, with real-time instructor feedback, community interaction, and modifications for all fitness levels."
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-16">Featured Programs</h2>
        
        <div>
          {projects.map((project, index) => (
            <WorkItem 
              key={index}
              title={project.title}
              category={project.category}
              year={project.year}
              description={project.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
