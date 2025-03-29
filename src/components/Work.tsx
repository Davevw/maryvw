
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
            View project
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
      title: "Brand Identity for Lunar",
      category: "Branding",
      year: "2023",
      description: "A comprehensive brand identity for Lunar, a sustainable fashion brand focused on ethical production and timeless design."
    },
    {
      title: "Editorial Design for Anthology Magazine",
      category: "Editorial",
      year: "2022",
      description: "Art direction and editorial design for Anthology, a biannual print publication exploring the intersection of art, culture, and society."
    },
    {
      title: "Campaign Strategy for Evergreen",
      category: "Strategy",
      year: "2022",
      description: "Developed and executed a multi-channel marketing campaign for Evergreen, increasing brand awareness by 45% and driving a 30% increase in sales."
    },
    {
      title: "Website for Atelier Studios",
      category: "Digital",
      year: "2021",
      description: "Designed and directed the development of a new website for Atelier Studios, a collective of independent artists and designers."
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-16">Selected Work</h2>
        
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
