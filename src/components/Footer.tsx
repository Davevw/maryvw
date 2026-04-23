import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-deep text-background pt-20 pb-10 px-6 md:px-12 mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Top: 3-column editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-14 border-b border-background/15">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-5">
              <span className="font-serif font-semibold text-2xl tracking-tight text-background">
                Mary's Fitness Channel
              </span>
            </Link>
            <p className="text-background/75 leading-relaxed font-light max-w-sm">
              Live classes, personal training, and wellness inspiration —
              rooted in two decades of spa-side experience, designed for real
              everyday life.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="block h-px w-12 bg-gold/70" />
              <span className="eyebrow text-background/60">Strong · Grounded · Energized</span>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="eyebrow text-background/60 mb-5">Explore</div>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about" },
                { name: "Programs", href: "/#work" },
                { name: "Food & Recipes", href: "/food" },
                { name: "Product Store", href: "/products" },
                { name: "Contact", href: "/#contact" },
              ].map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-sm text-background/85 hover:text-gold transition-colors duration-300"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice */}
          <div className="md:col-span-4">
            <div className="eyebrow text-background/60 mb-5">Practice</div>
            <ul className="space-y-3 text-sm text-background/85 font-light">
              <li>Live Zoom · Mon–Fri mornings</li>
              <li>Personal training · by appointment</li>
              <li>Stretch & Breath · Tuesdays 9 AM</li>
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center mt-6 text-xs uppercase tracking-[0.25em] text-gold hover:text-background transition-colors duration-300"
            >
              Begin a conversation →
            </a>
          </div>
        </div>

        {/* Liability notice — calm, soft */}
        <div id="liability" className="py-10 border-b border-background/15">
          <div className="eyebrow text-background/60 mb-3">Liability Notice</div>
          <p className="text-xs text-background/65 leading-relaxed font-light max-w-3xl">
            By participating in any fitness program or using any fitness-related
            information provided by Mary's Fitness Channel, you acknowledge that
            there are risks associated with all physical activity. Please
            consult your physician before beginning any exercise program.
            Mary's Fitness Channel is not responsible for any injuries or
            health problems you may experience while participating.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-background/55">
            © {currentYear} Mary's Fitness Channel. All rights reserved.
          </p>
          <p className="eyebrow text-background/45">Crafted with care</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
