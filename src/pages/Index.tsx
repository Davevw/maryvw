
import Navbar from "@/components/Navbar";
import BottomNavbar from "@/components/BottomNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiabilityButton from "@/components/LiabilityButton";
import ClassSchedule from "@/components/ClassSchedule";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-0">
        <Navbar />
        <Hero />
        <About />
        <LiabilityButton />
        <Work />
        <ClassSchedule />
        <Gallery />
        <Contact />
        <Footer />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default Index;
