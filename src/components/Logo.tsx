
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
        variant === "default" ? "h-[6.6rem]" : "h-[4.4rem]"
      )}>
        <span className={cn(
          "font-serif font-bold",
          variant === "default" ? "text-2xl" : "text-xl"
        )}>
          Mary's Fitness Channel
        </span>
      </div>
    </div>
  );
};

export default Logo;
