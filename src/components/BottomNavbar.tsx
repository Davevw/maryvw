
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Home, Phone, Info, Briefcase, ShoppingCart, ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const handleHashNavigation = (href: string) => {
    const hash = href.substring(2); // Remove /#
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/#about" },
    { name: "Programs", icon: Briefcase, href: "/#work" },
    { name: "Food", icon: ChefHat, href: "/food" },
    { name: "Products", icon: ShoppingCart, href: "/products" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4 z-50 md:hidden">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = 
            item.href === "/" 
              ? pathname === "/" 
              : item.href.startsWith("/#") 
                ? false 
                : pathname === item.href;
            
          return (
            <div key={item.name}>
              {item.href.startsWith("/#") ? (
                <button 
                  onClick={() => handleHashNavigation(item.href)}
                  className={cn(
                    "flex flex-col items-center text-xs p-2 bg-transparent border-none cursor-pointer", 
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span className="mt-1">{item.name}</span>
                </button>
              ) : (
                <Link 
                  to={item.href} 
                  className={cn(
                    "flex flex-col items-center text-xs p-2", 
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span className="mt-1">{item.name}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavbar;
