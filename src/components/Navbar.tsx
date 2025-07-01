
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#work" },
    { name: "Food & Recipes", href: "/food" },
    { name: "Product Store", href: "/products" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo variant={scrolled ? "small" : "default"} />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <NavigationMenuItem key={link.name}>
                    <button
                      onClick={() => handleHashNavigation(link.href)}
                      className="text-sm uppercase tracking-wide link-underline px-4 py-2 bg-transparent border-none cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm uppercase tracking-wide link-underline px-4 py-2"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 flex flex-col items-center pt-20 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <button
                key={link.name}
                onClick={() => handleHashNavigation(link.href)}
                className="py-4 text-lg uppercase tracking-wide bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="py-4 text-lg uppercase tracking-wide"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
