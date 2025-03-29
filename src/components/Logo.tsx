
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
        variant === "default" ? "h-[6.6rem] w-[6.6rem]" : "h-[4.4rem] w-[4.4rem]"
      )}>
        <img 
          src="/lovable-uploads/2afddb83-3441-45ed-ab7f-f3ba7e5234a8.png" 
          alt="Mary's Fitness Channel Logo" 
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default Logo;
