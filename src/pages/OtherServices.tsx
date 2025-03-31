
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";

const OtherServices = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-24 md:py-32 px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-12">Other Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">Mom's Best Friend</h2>
              <h3 className="text-xl md:text-2xl font-serif mb-4">Dog Walking and Sitting Services</h3>
              <p className="text-base md:text-lg mb-6 text-muted-foreground">
                While Mary helps you stay fit, let her take care of your furry friends too! Our dog sitting services 
                ensure your pets receive the love, care, and exercise they need when you're busy or away. Every dog 
                is treated like family with personalized attention, regular walks, and lots of playtime.
              </p>
              
              <p className="text-base md:text-lg mb-6 italic text-primary font-medium">
                "A treat for every visit."
              </p>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Service Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Day Walking (30 min)</span>
                      <span className="font-bold">$25</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Overnight Stay</span>
                      <span className="font-bold">$100</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Stretch and Release (30 mins)</span>
                      <span className="font-bold">$50</span>
                    </li>
                    <li className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">Wash and Fluff</span>
                      <span className="font-bold">$75</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Multiple Service Discount</span>
                      <span className="text-primary font-medium">Available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Button className="mt-4">
                Contact for Booking
              </Button>
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/adf1fc98-f00a-43a4-b9e2-238a21ee40ff.png" alt="Mom's Best Friend Dog Walking and Sitting" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-serif mb-4">Why Choose Our Dog Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Experienced Care</h4>
                <p className="text-muted-foreground">Trained professionals who love animals and understand their needs.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Reliable Service</h4>
                <p className="text-muted-foreground">Consistent schedules and updates about your pet's activities.</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Peace of Mind</h4>
                <p className="text-muted-foreground">Rest easy knowing your furry family members are in good hands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BottomNavbar />
    </div>;
};
export default OtherServices;
