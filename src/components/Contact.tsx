const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 md:px-12 bg-secondary/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline-gold" />
            <span className="eyebrow-accent">Get in Touch</span>
            <span className="hairline-gold" />
          </div>

          <img
            src="/lovable-uploads/b5872dbf-c8f7-49e4-ab8d-09c84742a2c2.png"
            alt="Mary — meditating by the ocean"
            className="w-28 h-28 object-cover rounded-full mx-auto mb-6 border border-gold/40 frame-shadow"
          />

          <h2 className="font-serif font-normal text-foreground text-3xl md:text-5xl leading-[1.1] tracking-tight mb-4">
            Let's begin
            <span className="italic text-primary"> your wellness story.</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed font-light max-w-xl mx-auto">
            Whether you're curious about classes, training, or simply want to
            say hello — Mary would love to hear from you.
          </p>
        </div>

        {/* Gold-framed contact form */}
        <div className="relative">
          <div
            className="absolute -inset-3 md:-inset-5 border border-gold/40 rounded-sm pointer-events-none"
            aria-hidden
          />
          <div className="relative bg-background rounded-sm overflow-hidden frame-shadow">
            <iframe
              title="Contact Mary"
              src="https://form.jotform.com/251115428179154"
              className="w-full h-[1200px] border-0 bg-background"
              allowFullScreen
            />
          </div>
        </div>

        <p className="eyebrow text-foreground/40 mt-8 text-center">
          Form powered by Jotform
        </p>
      </div>
    </section>
  );
};

export default Contact;
