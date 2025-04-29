
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
      amazonLink: "https://a.co/d/82aEKyR",
      image: "https://m.media-amazon.com/images/I/71+WRwKFJWL._AC_SL1500_.jpg"
    },
    {
      id: 10,
      name: "Whatafit Resistance Bands Set (11pcs), Exercise Bands with Door Anchor",
      description: "Versatile resistance bands for strength training, home workouts, physical therapy, and yoga.",
      amazonLink: "https://a.co/d/3hlS5Xo",
      image: "https://m.media-amazon.com/images/I/71qMF3q33NL._AC_SL1500_.jpg"
    },
    {
      id: 11,
      name: "AmazonBasics High-Density Round Foam Roller",
      description: "Firm foam roller for deep tissue massage, muscle recovery, and physical therapy exercises.",
      amazonLink: "https://a.co/d/jkB53YX",
      image: "/lovable-uploads/570785a7-809b-42da-974b-e320f3891e13.png"
    },
    {
      id: 12,
      name: "Amazon Basics 1/2-Inch Extra Thick Exercise Yoga Mat",
      description: "Extra thick yoga mat for support and comfort during yoga, pilates, and floor workouts.",
      amazonLink: "https://a.co/d/94fiASc",
      image: "https://m.media-amazon.com/images/I/91EE0JOuUdL._AC_SL1500_.jpg"
    },
    {
      id: 13,
      name: "DEGOL Skipping Rope with Ball Bearings",
      description: "Tangle-free jump rope with adjustable length and comfortable foam handles, perfect for fitness training and weight loss.",
      amazonLink: "https://a.co/d/7y1atic",
      image: "https://m.media-amazon.com/images/I/71FeQwNQPIL._AC_SL1500_.jpg"
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

