
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const jotformUrl = "https://form.jotform.com/243354759406160";

const LiabilityWaiverCTA = () => (
  <div className="w-full flex flex-col items-center py-8 bg-secondary/40">
    <Button
      asChild
      size="lg"
      className="text-base px-8 py-4 font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-colors duration-200 flex items-center gap-2"
    >
      <a href={jotformUrl} target="_blank" rel="noopener noreferrer">
        Liability Waiver
        <ExternalLink size={18} className="ml-1" />
      </a>
    </Button>
    <p className="mt-4 text-sm text-muted-foreground italic">
      (If you are new please complete the above Liability Waiver before your first class.)
    </p>
  </div>
);

export default LiabilityWaiverCTA;
