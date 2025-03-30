
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiabilityButton from "@/components/LiabilityButton";
import LiabilityBanner from "@/components/LiabilityBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LiabilityBanner />
      <div className="pt-0">
        <Navbar />
        <Hero />
        <About />
        <LiabilityButton />
        <Work />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
