
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";

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
      id: 1,
      name: "Gaiam Essentials Thick Yoga Mat",
      description: "Extra-thick yoga mat for comfort during stretching, yoga, and floor exercises.",
      amazonLink: "https://a.co/d/1oIiS46",
      image: "/lovable-uploads/adf1fc98-f00a-43a4-b9e2-238a21ee40ff.png"
    },
    {
      id: 2,
      name: "Hydro Flask Standard Mouth Water Bottle (21 oz)",
      description: "Stainless steel bottle to keep your drinks cold or hot for hours.",
      amazonLink: "https://a.co/d/jiYzfqA",
      image: "/lovable-uploads/4472a68c-ab53-48e5-8ce9-ca9a7181d8b9.png"
    },
    {
      id: 3,
      name: "Fit Simplify Resistance Loop Exercise Bands",
      description: "Set of 5 bands to enhance strength workouts and flexibility training.",
      amazonLink: "https://a.co/d/9A2vgtH",
      image: "/lovable-uploads/6cc29263-f605-43d0-8286-693ebbdac6e4.png"
    },
    {
      id: 4,
      name: "Bala Bangles Wearable Wrist & Ankle Weights",
      description: "Stylish, lightweight ankle/wrist weights to add resistance to everyday activities.",
      amazonLink: "https://a.co/d/8uJSYiC",
      image: "/lovable-uploads/a89307d2-1e20-4f62-a399-3579f51c505f.png"
    },
    {
      id: 5,
      name: "TriggerPoint GRID Foam Roller",
      description: "Premium foam roller to help muscles recover faster and reduce soreness.",
      amazonLink: "https://a.co/d/eVtxKkS",
      image: "/lovable-uploads/dd259007-9b43-49ba-abc0-efaadaa28c38.png"
    },
    {
      id: 6,
      name: "Polar H10 Heart Rate Monitor Chest Strap",
      description: "Highly accurate heart rate monitor, Bluetooth and ANT+ compatible.",
      amazonLink: "https://a.co/d/41qOux2",
      image: "/lovable-uploads/2afddb83-3441-45ed-ab7f-f3ba7e5234a8.png"
    },
    {
      id: 7,
      name: "Amazon Basics Neoprene Dumbbell Hand Weights (Set of 2)",
      description: "Comfortable dumbbells ideal for toning and strength workouts.",
      amazonLink: "https://a.co/d/e9GL7wY",
      image: "/lovable-uploads/699d0632-2601-4e3a-be1c-e09f2daf2bdc.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 md:px-12 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Fitness and Wellness Favorites – Handpicked for You!
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground">
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
                  <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
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
