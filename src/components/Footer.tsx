
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            Copyright © {currentYear} MaryVW - All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by GoDaddy
          </p>
        </div>
        
        <div className="flex space-x-8">
          <a 
            href="#home"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a 
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Topics
          </a>
          <a 
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
      
      <div id="liability" className="mt-12 pt-12 border-t border-border max-w-7xl mx-auto">
        <h3 className="text-xl font-serif mb-4">Liability Notice</h3>
        <p className="text-sm text-muted-foreground mb-6">
          By participating in any fitness program or using any fitness-related information provided by Mary's Fitness Channel, you acknowledge that there are risks associated with all physical activity. You should consult with your physician before beginning any exercise program. Mary's Fitness Channel is not responsible for any injuries or health problems you may experience or develop while participating in any exercise program.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
