
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiabilityBanner = () => {
  return (
    <div className="w-full bg-blue-600 py-4 px-6 flex justify-center items-center text-white sticky top-0 z-[100] shadow-md">
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle size={20} className="text-yellow-300" />
          <span className="text-sm font-medium">
            All participants must complete our liability waiver before attending sessions
          </span>
        </div>
        <Button 
          variant="outline" 
          className="bg-white/10 border-white text-white hover:bg-white/20 whitespace-nowrap font-medium"
          onClick={() => window.open('https://form.jotform.com/243354759406160', '_blank')}
        >
          Complete Waiver Form
        </Button>
      </div>
    </div>
  );
};

export default LiabilityBanner;
