
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Hero from "@/components/Hero";
import LiabilityWaiverCTA from "@/components/LiabilityWaiverCTA";
import About from "@/components/About";
import ClassSchedule from "@/components/ClassSchedule";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <Navbar />
        <Hero />
        <LiabilityWaiverCTA />
        <About />
        <ClassSchedule />
        <Work />
        <Gallery />
        <Contact />
        <Footer />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Index;
