
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  // Placeholder for gallery images
  const galleryItems = [
    { 
      id: 1, 
      title: "Stretch and Release",
      image: "/lovable-uploads/c08a3fb7-ce6e-46bf-9d3e-622ebd5dd1db.png" 
    },
    { id: 2, title: "Strength Training" },
    { id: 3, title: "Outdoor Fitness" },
    { id: 4, title: "Wellness Workshop" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">A Photographic Fitness Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="aspect-square bg-muted relative overflow-hidden group"
            >
              {item.image ? (
                <AspectRatio ratio={1 / 1} className="h-full w-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="object-cover h-full w-full"
                  />
                </AspectRatio>
              ) : (
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5",
                  "flex items-center justify-center text-muted-foreground"
                )}>
                  <span className="text-sm">{item.title}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
