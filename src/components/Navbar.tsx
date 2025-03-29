
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Topics", href: "#work" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <Logo variant={scrolled ? "small" : "default"} />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wide link-underline"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#liability"
            className="text-sm uppercase tracking-wide text-primary"
          >
            Liability Waiver
          </a>
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
            <a
              key={link.name}
              href={link.href}
              className="py-4 text-lg uppercase tracking-wide"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#liability"
            className="py-4 text-lg uppercase tracking-wide text-primary"
            onClick={toggleMenu}
          >
            Liability Waiver
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
