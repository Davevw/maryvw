
import { ChefHat, Heart, Utensils, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Food = () => {
  const recipeCategories = [
    {
      title: "Healthy Breakfast",
      description: "Start your day with nutritious and energizing meals",
      icon: Utensils,
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Quick & Easy",
      description: "Simple recipes for busy lifestyles",
      icon: Clock,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Family Favorites",
      description: "Crowd-pleasing meals everyone will love",
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Heart Healthy",
      description: "Delicious recipes that support cardiovascular health",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    }
  ];

  const featuredRecipes = [
    {
      title: "Mediterranean Quinoa Bowl",
      description: "A protein-packed bowl with fresh vegetables, quinoa, and olive oil dressing",
      prepTime: "15 mins",
      category: "Healthy Lunch"
    },
    {
      title: "Morning Energy Smoothie",
      description: "Blend of fruits, spinach, and protein powder to fuel your workouts",
      prepTime: "5 mins",
      category: "Breakfast"
    },
    {
      title: "Herb-Crusted Salmon",
      description: "Omega-3 rich salmon with fresh herbs and lemon",
      prepTime: "25 mins",
      category: "Dinner"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <Navbar />
        
        {/* Hero Section */}
        <section 
          className="pt-32 pb-16 px-6 md:px-12 relative"
          style={{
            backgroundImage: "url('/lovable-uploads/df4d7ada-910a-4fe9-ac91-7befc3525cac.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white">
              Food & Healthy Recipes
            </h1>
            <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">
              Discover nutritious and delicious recipes that complement your fitness journey. 
              From quick breakfast ideas to hearty family dinners, find meals that nourish your body and soul.
            </p>
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3"
            >
              Explore Recipes
            </Button>
          </div>
        </section>

        {/* About Food Philosophy Section */}
        <section className="py-16 px-6 md:px-12 bg-accent/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  Nourishing Body & Mind
                </h2>
                <p className="text-lg mb-6 text-foreground/80">
                  Food is more than fuel—it's a way to care for yourself and your loved ones. 
                  My approach to cooking focuses on fresh, whole ingredients that support your active lifestyle.
                </p>
                <p className="text-lg mb-6 text-foreground/80">
                  Whether you're prepping meals after a morning workout or cooking dinner for the family, 
                  these recipes are designed to be both nutritious and satisfying. I believe healthy eating 
                  should be enjoyable, not restrictive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Heart Healthy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Quick & Easy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Family Friendly</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-2 soft-shadow">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/7e96451d-627d-412e-8ecb-aa7e2b3360e2.png" 
                    alt="Mary's hearty soup recipes"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </AspectRatio>
                <div className="text-center p-4">
                  <p className="text-sm text-muted-foreground italic">
                    Mary's hearty soup recipes are perfect for warming up after a workout or sharing with family on chilly evenings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Categories */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Recipe Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recipeCategories.map((category, index) => (
                <Card key={index} className="text-center p-6 card-hover border-accent/20">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                      <category.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-serif mb-3">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 px-6 md:px-12 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Featured Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.map((recipe, index) => (
                <Card key={index} className="overflow-hidden card-hover border-accent/20">
                  <div className="bg-accent/20 h-48 flex items-center justify-center">
                    <ChefHat className="w-16 h-16 text-primary/60" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs uppercase tracking-wide text-primary font-medium">
                        {recipe.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {recipe.prepTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif mb-3">{recipe.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{recipe.description}</p>
                    <Button variant="outline" className="w-full rounded-full">
                      View Recipe
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-6 md:px-12 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Get Weekly Recipe Ideas
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Join our community for healthy recipe inspiration, meal prep tips, and nutrition guidance 
              delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-full border border-accent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Food;
