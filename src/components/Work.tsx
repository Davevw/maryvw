
import React from "react";
import { ArrowRight } from "lucide-react";

interface WorkItemProps {
  title: string;
  category: string;
  description: string;
  index: number;
}

const WorkItem = ({ title, category, description, index }: WorkItemProps) => {
  return (
    <div className="group cursor-pointer mb-20 p-6 rounded-2xl transition-all duration-300 hover:bg-accent/20" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="mb-4">
        <div className="uppercase text-xs tracking-widest text-primary/70 mb-2">
          {category}
        </div>
        <h3 className="text-2xl md:text-3xl font-serif mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-base text-muted-foreground max-w-xl mb-4">
          {description}
        </p>
      </div>
      <div className="flex justify-end">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <ArrowRight size={20} className="text-primary transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Personal Training Sessions",
      category: "Fitness",
      description: "Customized one-on-one training sessions designed to meet your specific fitness goals, whether it's weight loss, muscle gain, or improved overall health and wellness."
    },
    {
      title: "Group Fitness Classes",
      category: "Wellness",
      description: "Energetic and motivating group classes including yoga, HIIT, and strength training that build community while helping participants achieve their fitness goals."
    },
    {
      title: "Meal Planning for Fitness",
      category: "Health",
      description: "Personalized meal plans designed to complement your fitness routine, with balanced nutrition to fuel your workouts and support recovery for optimal results."
    },
    {
      title: "Zoom Classes for Remote Workouts",
      category: "Digital",
      description: "Live virtual workout sessions you can join from anywhere, with real-time instructor feedback, community interaction, and modifications for all fitness levels."
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-16 text-primary">Featured Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <WorkItem 
              key={index}
              title={project.title}
              category={project.category}
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
