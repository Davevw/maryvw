
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "small";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "relative",
        variant === "default" ? "h-12 w-12" : "h-8 w-8"
      )}>
        <img 
          src="/lovable-uploads/2afddb83-3441-45ed-ab7f-f3ba7e5234a8.png" 
          alt="Mary's Fitness Channel Logo" 
          className="object-contain w-full h-full"
        />
      </div>
      <span className={cn(
        "font-serif tracking-tight ml-2",
        variant === "default" ? "text-xl md:text-2xl" : "text-lg"
      )}>
        Mary's Fitness Channel
      </span>
    </div>
  );
};

export default Logo;
