import { ExternalLink } from "lucide-react";

const jotformUrl = "https://form.jotform.com/243354759406160";

const LiabilityWaiverCTA = () => (
  <section className="py-16 md:py-20 px-6 md:px-12 bg-sage-light/40 border-y border-gold/20">
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="hairline-gold" />
        <span className="eyebrow-accent">For New Members</span>
        <span className="hairline-gold" />
      </div>
      <h3 className="font-serif font-normal text-foreground text-2xl md:text-3xl leading-snug tracking-tight mb-4">
        Please complete a brief
        <span className="italic text-primary"> liability waiver </span>
        before your first class.
      </h3>
      <p className="text-foreground/70 font-light mb-8 max-w-xl mx-auto">
        A simple formality — it helps Mary understand any considerations and
        keeps every session safe and welcoming.
      </p>
      <a
        href={jotformUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-sm text-xs uppercase tracking-[0.2em] font-medium hover:bg-primary/90 transition-all duration-500 elegant-shadow"
      >
        Open Liability Waiver
        <ExternalLink size={14} />
      </a>
    </div>
  </section>
);

export default LiabilityWaiverCTA;
