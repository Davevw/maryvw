
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto"> {/* Increased max-width */}
        <div className="flex flex-col items-center">
          <iframe
            title="Contact Form"
            src="https://form.jotform.com/251115428179154"
            className="w-full h-[1200px] rounded-xl border border-border bg-background shadow-lg" // Increased height
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p className="text-xs text-muted-foreground mt-6 text-center">
            This contact form is powered by Jotform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
