
import { ChefHat, Heart, Utensils, Clock, Users } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Footer from "@/components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Food = () => {
  const [showFullRecipe, setShowFullRecipe] = useState(false);
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
      title: "Strawberry Cheesecake Bars",
      description: "Decadent cheesecake bars with fresh strawberry syrup and crumble topping",
      prepTime: "2 hours",
      category: "Dessert",
      image: "/lovable-uploads/5b54baa7-9e53-4b9e-9d30-b2e8455bc14a.png",
      featured: true
    },
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

        {/* Featured Recipe Spotlight */}
        <section className="py-16 px-6 md:px-12 bg-accent/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Recipe Spotlight
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-2xl p-2 soft-shadow scale-90">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="/lovable-uploads/5b54baa7-9e53-4b9e-9d30-b2e8455bc14a.png" 
                    alt="Mary's Strawberry Cheesecake Bars"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </AspectRatio>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs uppercase tracking-wide text-primary font-medium">
                    Dessert Recipe
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    2 hours
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  Strawberry Cheesecake Bars
                </h3>
                <p className="text-lg mb-6 text-foreground/80">
                  These decadent cheesecake bars feature a unique croissant crust, creamy cheesecake filling, 
                  fresh strawberry syrup, and a delightful crumble topping. Perfect for special occasions 
                  or when you want to treat yourself and your loved ones.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      <li>• Unique croissant crust for extra richness</li>
                      <li>• Greek yogurt for added protein</li>
                      <li>• Fresh strawberry syrup with real fruit</li>
                      <li>• Buttery crumble topping</li>
                    </ul>
                  </div>
                </div>
                <Button 
                  className="bg-primary hover:bg-primary/90 rounded-full px-8"
                  onClick={() => setShowFullRecipe(!showFullRecipe)}
                >
                  {showFullRecipe ? "Hide Recipe" : "View Full Recipe"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Recipe */}
        {showFullRecipe && (
          <section className="py-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 soft-shadow">
                <h3 className="text-2xl font-serif mb-6">Strawberry Cheesecake Bars - Full Recipe</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold mb-4">For the Crust:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 5 to 6 small croissants</li>
                      <li>• 2 tablespoons melted butter</li>
                      <li>• 2 tablespoons monk sugar (or preferred sugar substitute)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-4 mt-6">For the Cheesecake Filling:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 2 blocks (16 ounces) cream cheese, softened</li>
                      <li>• 1 cup Greek yogurt</li>
                      <li>• 3/4 cup monk sugar (or preferred sugar substitute)</li>
                      <li>• 3 eggs</li>
                      <li>• 2 tablespoons flour</li>
                      <li>• 1 teaspoon vanilla extract</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">For the Strawberry Syrup:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 1 1/2 cups strawberries, divided (fresh or frozen)</li>
                      <li>• 1/4 cup monk sugar (or preferred sugar substitute)</li>
                    </ul>
                    
                    <h4 className="font-semibold mb-4 mt-6">For the Crumble Topping:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 1/2 cup + 2 tablespoons flour</li>
                      <li>• 1/4 cup brown sugar (or coconut sugar, brown sugar substitute, or Splenda)</li>
                      <li>• 1/4 cup cold butter, cubed</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Instructions:</h4>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">1. Prepare the Strawberry Syrup:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>Chop all the strawberries. Set aside half (about 3/4 cup) for later.</li>
                          <li>In a medium saucepan over medium heat, combine half of the strawberries (about 3/4 cup) with 1/4 cup monk sugar.</li>
                          <li>Cook, stirring occasionally, until the strawberries break down and the mixture thickens slightly (about 5-7 minutes).</li>
                          <li>Remove from heat and let the mixture cool completely.</li>
                          <li>Once cooled, gently fold in the remaining chopped strawberries. Set aside.</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">2. Make the Crust:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>Preheat your oven to 350°F (175°C). Line a 9x9-inch square baking pan with parchment paper.</li>
                          <li>Slice the croissants into small pieces and press them firmly into the bottom of the prepared pan to form an even layer.</li>
                          <li>Brush the croissant crust with melted butter and sprinkle evenly with 2 tablespoons monk sugar.</li>
                          <li>Cover with another piece of parchment paper and place a weight (such as another oven-safe dish) on top.</li>
                          <li>Bake for 15 minutes. Remove the parchment and weight, then bake an additional 5 to 7 minutes until golden brown.</li>
                          <li>Allow the crust to cool while you prepare the filling.</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">3. Prepare the Cheesecake Filling:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>In a large mixing bowl, beat the softened cream cheese until smooth.</li>
                          <li>Add 3/4 cup monk sugar and continue beating until well combined.</li>
                          <li>Add eggs one at a time, mixing well after each addition.</li>
                          <li>Mix in the Greek yogurt, flour, and vanilla extract until the batter is smooth and creamy (about 2 minutes).</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">4. Assemble and Bake:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>Pour the cheesecake filling evenly over the cooled croissant crust.</li>
                          <li>Bake for 40 minutes at 350°F (175°C).</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">5. Prepare the Crumble Topping:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>While the cheesecake is baking, combine the flour and brown sugar in a bowl.</li>
                          <li>Add the cold, cubed butter and mix with your fingers or a pastry cutter until the mixture becomes crumbly.</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">6. Add Strawberry Syrup and Crumble Topping:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>After the initial 40 minutes of baking, remove the cheesecake from the oven.</li>
                          <li>Spread the prepared strawberry syrup evenly over the cheesecake layer.</li>
                          <li>Sprinkle the crumble topping evenly over the strawberry layer.</li>
                          <li>Return to the oven and bake for an additional 20 to 25 minutes, or until the topping is golden brown.</li>
                        </ol>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">7. Cool and Serve:</h5>
                        <ol className="list-decimal list-inside space-y-1 ml-4">
                          <li>Remove the cheesecake bars from the oven and let them cool completely in the pan.</li>
                          <li>Refrigerate for several hours or overnight before slicing into bars and serving.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

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

        {/* More Featured Recipes */}
        <section className="py-16 px-6 md:px-12 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              More Featured Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.slice(1).map((recipe, index) => (
                <Card key={index} className="overflow-hidden card-hover border-accent/20">
                  <div className={`bg-accent/20 h-48 flex items-center justify-center ${recipe.title === "Mediterranean Quinoa Bowl" ? "opacity-60" : ""}`}>
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
