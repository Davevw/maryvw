
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiabilityBanner from "@/components/LiabilityBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiabilityBanner />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
