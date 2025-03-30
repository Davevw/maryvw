
import { Button } from "@/components/ui/button";

const LiabilityButton = () => {
  return (
    <div className="py-8 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto text-center">
        <Button 
          className="text-sm uppercase tracking-wide bg-blue-600 text-white hover:bg-blue-700 border-none font-medium"
          onClick={() => window.open('https://form.jotform.com/243354759406160', '_blank')}
        >
          Liability Waiver
        </Button>
      </div>
    </div>
  );
};

export default LiabilityButton;
