
import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Info, Briefcase, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavbar = () => {
  const pathname = window.location.pathname;

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/#about" },
    { name: "Topics", icon: Briefcase, href: "/#work" },
    { name: "Product Store", icon: ShoppingCart, href: "/products" },
    { name: "Contact", icon: Phone, href: "/#contact" }
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
                <a 
                  href={item.href.substring(1)} 
                  className={cn(
                    "flex flex-col items-center text-xs p-2", 
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  <item.icon size={20} />
                  <span className="mt-1">{item.name}</span>
                </a>
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
