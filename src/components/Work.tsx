import { ArrowUpRight } from "lucide-react";

interface WorkItemProps {
  title: string;
  category: string;
  description: string;
  number: string;
}

const WorkItem = ({ title, category, description, number }: WorkItemProps) => {
  return (
    <div className="group relative cursor-pointer border-t border-border/60 py-10 transition-all duration-500">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-2 md:col-span-1">
          <span className="font-serif italic text-2xl text-gold">{number}</span>
        </div>
        <div className="col-span-10 md:col-span-9">
          <div className="eyebrow-accent mb-3">{category}</div>
          <h3 className="font-serif font-normal text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-500 mb-4 tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-foreground/70 leading-relaxed font-light max-w-2xl">
            {description}
          </p>
        </div>
        <div className="col-span-12 md:col-span-2 flex md:justify-end">
          <ArrowUpRight
            size={28}
            className="text-foreground/40 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      number: "01",
      title: "Personal Training Sessions",
      category: "Fitness",
      description:
        "Customized one-on-one training designed around your body, your goals, and your pace — whether that's strength, mobility, or feeling at home in your skin again.",
    },
    {
      number: "02",
      title: "Live Zoom Group Classes",
      category: "Community",
      description:
        "Energetic, supportive group sessions including strength, stretch, and breathwork. Join from anywhere — Mary leads, modifies, and encourages in real time.",
    },
    {
      number: "03",
      title: "Nutrition & Meal Planning",
      category: "Wellness",
      description:
        "Personalized meal guidance to complement your training — balanced nourishment that fuels your workouts, supports recovery, and feels good to live with.",
    },
    {
      number: "04",
      title: "Mindful Wellness Coaching",
      category: "Lifestyle",
      description:
        "Beyond exercise — a holistic look at sleep, stress, and the daily rhythms that quietly shape how you feel. Spa-rooted philosophy, distilled for everyday life.",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline-gold" />
            <span className="eyebrow-accent">Programs</span>
          </div>
          <h2 className="font-serif font-normal text-foreground text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Ways to move
            <span className="italic text-primary"> with Mary.</span>
          </h2>
        </div>

        <div className="border-b border-border/60">
          {projects.map((project, index) => (
            <WorkItem
              key={index}
              number={project.number}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
