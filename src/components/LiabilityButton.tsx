
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LiabilityButton = () => {
  return (
    <div className="py-8 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <Button asChild variant="outline" className="text-sm uppercase tracking-wide border-primary text-primary hover:bg-primary/10">
          <a href="#liability">Liability Waiver</a>
        </Button>
      </div>
    </div>
  );
};

export default LiabilityButton;
