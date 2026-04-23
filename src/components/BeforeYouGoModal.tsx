import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const STORAGE_KEY = "mfc_before_you_go_dismissed";

const BeforeYouGoModal = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [optIn, setOptIn] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setOpen(true);
      // next tick → enable fade-in
      requestAnimationFrame(() => setVisible(true));
    };

    // Exit-intent: cursor leaves the top of viewport
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    // Fallback: after 30s of browsing
    const timer = window.setTimeout(trigger, 30000);

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
    setTimeout(() => setOpen(false), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!agree) {
      toast.error("Please agree to the Privacy Policy.");
      return;
    }
    toast.success("Thank you — you're on the list!");
    close();
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="byg-title"
    >
      {/* Backdrop with botanical blur */}
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-sage-deep/70 backdrop-blur-md cursor-default"
      />

      {/* Card */}
      <div
        className={`relative w-full max-w-2xl border border-background/40 bg-transparent p-8 md:p-14 transition-all duration-700 ease-out ${
          visible ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <button
          onClick={close}
          aria-label="Close signup"
          className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2
            id="byg-title"
            className="font-serif font-light text-background text-3xl md:text-5xl tracking-wide mb-6 uppercase"
          >
            Before You Go…
          </h2>
          <p className="font-serif italic text-background/95 text-lg mb-3">
            Stay Inspired on Your Wellness Journey
          </p>
          <p className="text-background/85 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Join Mary's email list for live class updates, recipes, and wellbeing
            tips delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="First Name*"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-transparent border-background/50 text-background placeholder:text-background/70 h-12 rounded-none font-serif italic text-base"
          />
          <Input
            type="text"
            placeholder="Last Name*"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-transparent border-background/50 text-background placeholder:text-background/70 h-12 rounded-none font-serif italic text-base"
          />
          <Input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-background/50 text-background placeholder:text-background/70 h-12 rounded-none font-serif italic text-base"
          />

          <div className="space-y-2 pt-2">
            <label className="flex items-center gap-3 text-background/90 text-sm cursor-pointer">
              <Checkbox
                checked={agree}
                onCheckedChange={(v) => setAgree(!!v)}
                className="border-background/60 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
              />
              <span>I have read and agree to the Privacy Policy.</span>
            </label>
            <label className="flex items-center gap-3 text-background/90 text-sm cursor-pointer">
              <Checkbox
                checked={optIn}
                onCheckedChange={(v) => setOptIn(!!v)}
                className="border-background/60 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
              />
              <span>Yes, I would like to receive emails with updates and offers.</span>
            </label>
          </div>

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-none px-12 py-6 text-sm uppercase tracking-[0.2em] font-serif"
            >
              Submit
            </Button>
          </div>
        </form>

        <button
          onClick={close}
          className="block mx-auto mt-6 text-background/80 hover:text-background text-sm underline underline-offset-4 transition-colors"
        >
          Close Signup
        </button>
      </div>
    </div>
  );
};

export default BeforeYouGoModal;
