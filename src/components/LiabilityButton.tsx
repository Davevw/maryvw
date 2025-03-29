
import { Button } from "@/components/ui/button";

const LiabilityButton = () => {
  return (
    <div className="py-8 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <Button 
          asChild 
          className="text-sm uppercase tracking-wide bg-blue-600 text-white hover:bg-blue-700 border-none font-medium"
        >
          <a href="#liability">Liability Waiver</a>
        </Button>
      </div>
    </div>
  );
};

export default LiabilityButton;
