
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiabilityBanner = () => {
  return (
    <div className="w-full bg-primary py-3 px-6 flex justify-center items-center text-primary-foreground">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} />
          <span className="text-sm font-medium">
            All participants must complete our liability waiver before attending sessions
          </span>
        </div>
        <Button 
          variant="outline" 
          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 whitespace-nowrap"
          onClick={() => window.open('https://form.jotform.com/243354759406160', '_blank')}
        >
          Complete Waiver Form
        </Button>
      </div>
    </div>
  );
};

export default LiabilityBanner;
