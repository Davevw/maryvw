
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
  
  const equipment: Product[] = [
    {
      id: 1,
      name: "Basics Neoprene Dumbbell Hand Weights",
      description: "",
      amazonLink: "https://amzn.to/4b90krC",
      image: "/lovable-uploads/d349cb88-0a6b-4b87-bf9f-f0c747171285.png"
    },
    {
      id: 2,
      name: "Abiarst Stretching Strap Yoga Straps for Physical Therapy, 10 Loops Non-Elastic Stretch Band for Pilates, Flexibility, Exercise and Gymnastics",
      description: "",
      amazonLink: "https://amzn.to/3LUf9DZ",
      image: "/lovable-uploads/abiarst-yoga-strap.png"
    },
    {
      id: 3,
      name: "CAP Barbell Coated Hex Dumbbells",
      description: "",
      amazonLink: "https://amzn.to/4b6FhG7",
      image: "/lovable-uploads/65b216f3-67c3-4812-9271-dc6939147d7e.png"
    },
    {
      id: 4,
      name: "YOGA TUNE UP® Therapy Balls in Tote by Tune Up Fitness",
      description: "",
      amazonLink: "https://amzn.to/3ZinMv9",
      image: "/lovable-uploads/51b12711-3b8b-4649-81c0-1b052b6b8132.png"
    },
    {
      id: 5,
      name: "Basics High-Density Round Foam Roller",
      description: "",
      amazonLink: "https://amzn.to/4sSIhfG",
      image: "/lovable-uploads/570785a7-809b-42da-974b-e320f3891e13.png"
    },
    {
      id: 6,
      name: "Basics Vinyl Kettlebell",
      description: "",
      amazonLink: "https://amzn.to/4rm8odt",
      image: "/lovable-uploads/29ab1bf7-086a-403d-9ff5-4beaf1ff6d92.png"
    },
    {
      id: 7,
      name: "Fit Simplify Resistance Loop Exercise Bands with Instruction Guide and Carry Bag, Set of 5",
      description: "",
      amazonLink: "https://amzn.to/4jNSNjX",
      image: "/lovable-uploads/57ff4c34-9e9e-4c27-81ca-f374ef264a0c.png"
    },
    {
      id: 8,
      name: "Tune Up Fitness Yoga Set - Various Ball Sizes and Colors, Original, Plus, Alpha Solo, Coregeous in Black Bag",
      description: "",
      amazonLink: "https://amzn.to/4pMQC1K",
      image: "/lovable-uploads/4059073a-82fd-42d4-8e97-c6d3fd1df244.png"
    },
    {
      id: 9,
      name: "Pull Up Bands, Resistance Bands, Pull Up Assistance Band Exercise Bands for Men & Women Working Out, Body Stretching, Physical Therapy, Muscle Training",
      description: "",
      amazonLink: "https://amzn.to/4quFMP1",
      image: "/lovable-uploads/pull-up-bands.png"
    }
  ];

  const supplements: Product[] = [
    {
      id: 10,
      name: "Thorne Men's Multi 50+",
      description: "A comprehensive daily multivitamin formulated specifically for men over 50. Supports energy, immune function, and healthy aging with bioavailable nutrients.",
      amazonLink: "https://amzn.to/45FxQlN",
      image: "/lovable-uploads/thorne-mens-multi-50.png"
    },
    {
      id: 11,
      name: "Thorne Women's Multi 50+",
      description: "A comprehensive daily multivitamin designed for women over 50. Supports bone health, energy levels, and hormonal balance with highly absorbable ingredients.",
      amazonLink: "https://amzn.to/4sLFtAK",
      image: "/lovable-uploads/thorne-womens-multi-50.png"
    },
    {
      id: 12,
      name: "Thorne Magnesium Glycinate",
      description: "Supports restful sleep, muscle relaxation, heart health, and metabolism. Chelated magnesium capsules that are third-party certified and gluten, dairy, and soy-free.",
      amazonLink: "https://amzn.to/4qouBas",
      image: "/lovable-uploads/thorne-magnesium-glycinate.png"
    },
    {
      id: 13,
      name: "Thorne Ultimate-E",
      description: "Contains all natural forms of Vitamin E for antioxidant support, cardiovascular health, and skin protection. Helps neutralize free radicals and supports cellular health.",
      amazonLink: "https://amzn.to/4qZlM6R",
      image: "/lovable-uploads/thorne-ultimate-e.png"
    },
    {
      id: 14,
      name: "Thorne Zinc Picolinate 30mg",
      description: "Well-absorbed zinc supplement for growth and immune function. Promotes healthy skin and eyes. Third-party certified, gluten, dairy, and soy-free.",
      amazonLink: "https://amzn.to/4sOtlz5",
      image: "/lovable-uploads/thorne-zinc-picolinate.png"
    }
  ];

  const ProductGrid = ({ products }: { products: Product[] }) => (
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
            <h3 className="text-xl font-serif mb-2 text-foreground/90">{product.name}</h3>
            {product.description && (
              <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
            )}
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
  );

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
        
        {/* Equipment Section */}
        <section className="py-16 px-6 md:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-foreground">Equipment</h2>
            <ProductGrid products={equipment} />
          </div>
        </section>

        {/* Supplements Section */}
        <section className="py-16 px-6 md:px-12 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif mb-8 text-foreground">Supplements</h2>
            <ProductGrid products={supplements} />
            
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
