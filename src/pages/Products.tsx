
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  id: number;
  name: string;
  description: string;
  amazonLink: string;
  image: string;
}

const Products = () => {
  const isMobile = useIsMobile();
  const products: Product[] = [
    // First row - keep smaller items
    {
      id: 7,
      name: "Basics Neoprene Dumbbell Hand Weights",
      description: "",
      amazonLink: "https://amzn.to/4b90krC",
      image: "/lovable-uploads/d349cb88-0a6b-4b87-bf9f-f0c747171285.png"
    },
    {
      id: 8,
      name: "Gaiam Essentials Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat Carrier Strap, 72\"L x 24\"W x 2/5 Inch Thick",
      description: "",
      amazonLink: "https://amzn.to/3LqwzrP",
      image: "/lovable-uploads/8c889473-0e89-4767-b071-75383589fe89.png"
    },
    {
      id: 9,
      name: "CAP Barbell Coated Hex Dumbbells",
      description: "",
      amazonLink: "https://amzn.to/4b6FhG7",
      image: "/lovable-uploads/65b216f3-67c3-4812-9271-dc6939147d7e.png"
    },
    // Second row - mix in Peloton bike (expensive item)
    {
      id: 10,
      name: "YOGA TUNE UP® Therapy Balls in Tote by Tune Up Fitness",
      description: "",
      amazonLink: "https://amzn.to/3ZinMv9",
      image: "/lovable-uploads/51b12711-3b8b-4649-81c0-1b052b6b8132.png"
    },
    {
      id: 11,
      name: "Basics High-Density Round Foam Roller",
      description: "",
      amazonLink: "https://amzn.to/4sSIhfG",
      image: "/lovable-uploads/570785a7-809b-42da-974b-e320f3891e13.png"
    },
    {
      id: 12,
      name: "Basics Vinyl Kettlebell",
      description: "",
      amazonLink: "https://amzn.to/4rm8odt",
      image: "/lovable-uploads/29ab1bf7-086a-403d-9ff5-4beaf1ff6d92.png"
    },
    {
      id: 13,
      name: "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5",
      description: "",
      amazonLink: "https://amzn.to/4jNSNjX",
      image: "/lovable-uploads/57ff4c34-9e9e-4c27-81ca-f374ef264a0c.png"
    },
    // Fourth row with regular items
    {
      id: 14,
      name: "Tune Up Fitness Yoga Set - Various Ball Sizes and Colors, Original, Plus, Alpha Solo, Coregeous in Black Bag",
      description: "",
      amazonLink: "https://amzn.to/4pMQC1K",
      image: "/lovable-uploads/4059073a-82fd-42d4-8e97-c6d3fd1df244.png"
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
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white">
              Fitness and Wellness Favorites
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 text-lg">
              Browse our selection of recommended products to complement your fitness journey.
              We use and love each of these items in our personal workouts!
            </p>
          </div>
        </section>
        
        {/* Shopping Banner with Amazon Link - Modified for better mobile text wrapping */}
        <div className="bg-accent/60 py-6 border-y border-accent">
          <div className="max-w-7xl mx-auto flex justify-center px-4">
            <Button 
              variant="ghost" 
              className="bg-white/50 backdrop-blur-sm text-primary hover:bg-white hover:text-primary/80 text-base md:text-xl font-medium rounded-full px-4 py-3 soft-shadow text-center font-sans w-full max-w-lg flex flex-wrap justify-center"
              onClick={() => window.open("https://www.amazon.com?tag=vwhealthstore-20", "_blank")}
            >
              <ShoppingCart className="mr-2 flex-shrink-0" size={20} />
              <span className="text-center">
                Shop for these or any items on Amazon &amp; Support Mary's Fitness Channel!
              </span>
            </Button>
          </div>
        </div>
        
        {/* Products Grid */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden h-full flex flex-col border-accent/20 rounded-2xl card-hover">
                  <div className="bg-accent/10">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-contain w-full h-full p-4"
                      />
                    </AspectRatio>
                  </div>
                  <CardContent className="flex-grow flex flex-col p-6">
                    <h3 className="text-xl font-serif mb-6 text-foreground/90">{product.name}</h3>
                    <Button 
                      asChild 
                      variant="default" 
                      className="w-full mt-auto bg-primary hover:bg-primary/90 rounded-full" 
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
            <div className="mt-16 text-center text-sm text-muted-foreground max-w-2xl mx-auto border-t border-accent/30 pt-8">
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
