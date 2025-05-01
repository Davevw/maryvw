
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 text-center">
            <img 
              src="/lovable-uploads/b5872dbf-c8f7-49e4-ab8d-09c84742a2c2.png" 
              alt="Person meditating on beach" 
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-primary/30"
            />
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Contact Mary</h2>
          </div>
          
          <iframe
            title="Contact Form"
            src="https://form.jotform.com/251115428179154"
            className="w-full h-[1200px] rounded-xl border border-border bg-background shadow-lg"
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
