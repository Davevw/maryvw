import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleHashNavigation = (href: string) => {
    const hash = href.substring(2);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isFoodPage = location.pathname === "/food";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Programs", href: "/#work" },
    { name: "Food & Recipes", href: "/food" },
    { name: "Product Store", href: "/products" },
    { name: "Contact", href: "/#contact" },
  ];

  // Food page: white nav over the photo at the top, solid cream once scrolled
  const foodTopMode = isFoodPage && !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b border-border/60 py-3"
          : foodTopMode
            ? "bg-foreground/40 backdrop-blur-sm py-3"
            : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Wordmark */}
        <Link to="/" className="leading-none group">
          <span
            className={cn(
              "font-serif font-semibold text-xl md:text-2xl tracking-tight whitespace-nowrap",
              foodTopMode ? "text-background" : "text-sage-deep"
            )}
          >
            Mary's Fitness Channel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleHashNavigation(link.href)}
                className={cn(
                  "text-[0.7rem] font-sans uppercase tracking-[0.2em] transition-colors px-4 py-2 link-underline",
                  foodTopMode
                    ? "text-background hover:text-background/80"
                    : scrolled
                      ? "text-foreground hover:text-foreground/80"
                      : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[0.7rem] font-sans uppercase tracking-[0.2em] transition-colors px-4 py-2 link-underline",
                  foodTopMode
                    ? "text-background hover:text-background/80"
                    : scrolled
                      ? "text-foreground hover:text-foreground/80"
                      : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile button */}
        <button
          className={cn(
            "md:hidden",
            foodTopMode ? "text-background" : "text-foreground"
          )}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 flex flex-col items-center pt-16 md:hidden animate-fade-in">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleHashNavigation(link.href)}
                className="py-4 text-sm uppercase tracking-[0.25em] text-foreground/85"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="py-4 text-sm uppercase tracking-[0.25em] text-foreground/85"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
