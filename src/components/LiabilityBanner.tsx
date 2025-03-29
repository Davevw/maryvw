
import { Button } from "@/components/ui/button";

const LiabilityBanner = () => {
  return (
    <div className="w-full bg-blue-600 py-4 px-6 flex justify-center items-center text-white sticky top-0 z-[100] shadow-md">
      <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
        <Button 
          variant="outline" 
          className="bg-white/10 border-white text-white hover:bg-white/20 whitespace-nowrap font-medium"
          onClick={() => window.open('https://form.jotform.com/243354759406160', '_blank')}
        >
          Liability Waiver - Click Here
        </Button>
      </div>
    </div>
  );
};

export default LiabilityBanner;
