
const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col items-center">
          <iframe
            title="Contact Form"
            src="https://form.jotform.com/251115428179154"
            className="w-full h-[900px] rounded-xl border border-border bg-background shadow-lg"
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
