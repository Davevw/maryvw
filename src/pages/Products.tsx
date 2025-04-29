
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: number;
  name: string;
  description: string;
  amazonLink: string;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 7,
      name: "Amazon Basics Neoprene Dumbbell Hand Weights (Set of 2)",
      description: "Amazon Basics Neoprene Dumbbell Hand Weights",
      amazonLink: "https://a.co/d/9GLYvNk",
      image: "/lovable-uploads/d349cb88-0a6b-4b87-bf9f-f0c747171285.png"
    },
    {
      id: 8,
      name: "Gaiam Essentials Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat Carrier Strap, 72\"L x 24\"W x 2/5 Inch Thick",
      description: "Premium, high-density cushion for unmatched support and stability during yoga practice.",
      amazonLink: "https://a.co/d/ghLcNH4",
      image: "/lovable-uploads/8c889473-0e89-4767-b071-75383589fe89.png"
    },
    {
      id: 9,
      name: "CAP Barbell Coated Hex Dumbbells",
      description: "Durable hex dumbbells with rubber coating for noise reduction and floor protection.",
      amazonLink: "https://a.co/d/hkzCBVX",
      image: "/lovable-uploads/65b216f3-67c3-4812-9271-dc6939147d7e.png"
    },
    {
      id: 10,
      name: "YOGA TUNE UP® Therapy Balls in Tote by Tune Up Fitness",
      description: "YOGA TUNE UP® Therapy Balls in Tote by Tune Up Fitness - Massage Balls for Trigger Point, Pressure Point & Myofascial Release",
      amazonLink: "https://a.co/d/3hlS5Xo",
      image: "/lovable-uploads/51b12711-3b8b-4649-81c0-1b052b6b8132.png"
    },
    {
      id: 11,
      name: "AmazonBasics High-Density Round Foam Roller",
      description: "Firm foam roller for deep tissue massage, muscle recovery, and physical therapy exercises.",
      amazonLink: "https://a.co/d/jkB53YX",
      image: "/lovable-uploads/570785a7-809b-42da-974b-e320f3891e13.png"
    },
    {
      id: 13,
      name: "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5",
      description: "Premium latex resistance bands for home workouts, physical therapy, strength training with different resistance levels.",
      amazonLink: "https://a.co/d/7y1atic",
      image: "/lovable-uploads/57ff4c34-9e9e-4c27-81ca-f374ef264a0c.png"
    },
    {
      id: 14,
      name: "Tune Up Fitness Yoga Set - Various Ball Sizes and Colors, Original, Plus, Alpha Solo, Coregeous in Black Bag",
      description: "Complete yoga therapy ball set featuring various sizes and textures for targeted myofascial release and deep tissue massage.",
      amazonLink: "https://a.co/d/gAuFGjZ",
      image: "https://m.media-amazon.com/images/I/81Wa-yTH+ML._AC_SL1500_.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <Navbar />
        
        {/* Hero Section with Beach Yoga Background */}
        <section 
          className="pt-32 pb-16 px-6 md:px-12 relative"
          style={{
            backgroundImage: "url('/lovable-uploads/a2b1242f-5986-48a7-94fc-11ac93ccc123.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white">
              Fitness and Wellness Favorites – Handpicked for You!
            </h1>
            <p className="max-w-2xl mx-auto text-white/90">
              Browse our selection of recommended products to complement your fitness journey.
              We personally use and love these items!
            </p>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-muted">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="flex-grow flex flex-col p-6">
                    <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{product.description}</p>
                    <Button 
                      asChild 
                      variant="default" 
                      className="w-full" 
                    >
                      <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="mr-2" size={18} />
                        View on Amazon
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Amazon Associate Disclosure */}
            <div className="mt-16 text-center text-sm text-muted-foreground max-w-2xl mx-auto border-t border-border pt-8">
              <p>
                As an Amazon Associate, we may earn a small commission from qualifying purchases at no extra cost to you. 
                Thank you for supporting Mary's Fitness Channel!
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Products;
