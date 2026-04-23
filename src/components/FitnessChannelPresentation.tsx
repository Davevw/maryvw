import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, Play, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import slide1 from "@/assets/fitness-channel/slide-1.jpg";
import slide2 from "@/assets/fitness-channel/slide-2.jpg";
import slide3 from "@/assets/fitness-channel/slide-3.jpg";
import slide4 from "@/assets/fitness-channel/slide-4.jpg";
import slide6 from "@/assets/fitness-channel/slide-6.jpg";
import slide7 from "@/assets/fitness-channel/slide-7.jpg";
import slide8 from "@/assets/fitness-channel/slide-8.jpg";
import slide10 from "@/assets/fitness-channel/slide-10.jpg";
import slide11 from "@/assets/fitness-channel/slide-11.jpg";
import slide12 from "@/assets/fitness-channel/slide-12.jpg";

// Optional: drop in a video URL when ready (YouTube, Vimeo, or .mp4)
const VIDEO_URL: string | null = null; // e.g. "https://www.youtube.com/embed/XXXXX"

type Slide = {
  eyebrow?: string;
  title: string;
  body?: string;
  image?: string;
  bullets?: { heading: string; text: string }[];
  layout: "hero" | "image-left" | "image-right" | "grid" | "stats" | "cta" | "video";
  bg?: "cream" | "sage" | "deep";
};

const slides: Slide[] = [
  {
    layout: "hero",
    eyebrow: "A World of Fitness, Health, and Wellness",
    title: "Mary's Fitness Channel",
    body: "Live Zoom Classes · Strength · Stretch · Wellness",
    image: slide1,
    bg: "deep",
  },
  {
    layout: "image-right",
    eyebrow: "The Philosophy",
    title: "Fitness That Supports Real Life",
    body: "Live, guided sessions designed to help you move well, build meaningful strength, increase flexibility, and create a positive daily rhythm — week after week, month after month.",
    image: slide2,
    bullets: [
      { heading: "Moderate Workouts", text: "Challenging yet sustainable — never intimidating" },
      { heading: "Live Instruction", text: "Real-time guidance and encouragement" },
      { heading: "Whole-Body Wellness", text: "Strength, mobility, and mindful movement" },
      { heading: "A Positive Start", text: "Begin each day grounded and energized" },
    ],
    bg: "cream",
  },
  {
    layout: "image-left",
    eyebrow: "The Schedule",
    title: "Join Live on Zoom",
    body: "Classes take place live on Zoom, Monday through Friday mornings. No commute, no gym membership — just guided movement, structure, and genuine encouragement.",
    image: slide3,
    bullets: [
      { heading: "Monday – Friday", text: "Consistent morning schedule" },
      { heading: "Train from Anywhere", text: "Your home is your studio" },
      { heading: "Interactive & Guided", text: "Live feedback from Mary" },
      { heading: "Easy to Join", text: "Simple Zoom link, every morning" },
    ],
    bg: "sage",
  },
  {
    layout: "image-right",
    eyebrow: "The Method",
    title: "Strength and Stretch, in Balance",
    body: "Each class blends strength training with stretching and mobility in a moderate, feel-good format. You'll feel genuinely challenged and fully supported — refreshed, never depleted.",
    image: slide4,
    bullets: [
      { heading: "Strength Building", text: "Functional exercises for everyday life" },
      { heading: "Stretch & Mobility", text: "Gentle, intentional movement" },
      { heading: "Moderate Intensity", text: "Accessible to a wide range of fitness levels" },
    ],
    bg: "cream",
  },
  {
    layout: "stats",
    eyebrow: "Why It Works",
    title: "Consistent. Practical. Effective.",
    body: "Live weekday classes create a natural rhythm of consistency and accountability — practical enough to keep, powerful enough to make a real and lasting difference.",
    bullets: [
      { heading: "01 · Consistency", text: "A predictable weekly rhythm you can rely on" },
      { heading: "02 · Accountability", text: "Live instruction keeps you showing up" },
      { heading: "03 · Results", text: "Long-term wellness transformation" },
    ],
    bg: "deep",
  },
  {
    layout: "image-left",
    eyebrow: "Body & Mind",
    title: "A Wellness-Centered Experience",
    body: "These classes are about far more than exercise. They're a wellness-centered practice that nourishes both body and mind — helping you feel grounded, energized, and genuinely cared for.",
    image: slide6,
    bullets: [
      { heading: "Move with Intention", text: "Every exercise is purposeful and mindful" },
      { heading: "Support Body and Mind", text: "Movement that uplifts mood and reduces stress" },
      { heading: "Create Healthy Momentum", text: "Small daily actions, lasting transformation" },
    ],
    bg: "sage",
  },
  {
    layout: "image-right",
    eyebrow: "The Experience Behind It",
    title: "Led by Deep Wellness Expertise",
    body: "More than two decades in fitness and wellness — including eighteen years at Cal-a-Vie Health Spa and eighteen years at the Golden Door, two of the most celebrated names in restoration and personal transformation.",
    image: slide7,
    bullets: [
      { heading: "20+ Years", text: "Of professional fitness and wellness experience" },
      { heading: "Cal-a-Vie Health Spa", text: "18 years at a world-renowned destination" },
      { heading: "The Golden Door", text: "18 years at an iconic American retreat" },
    ],
    bg: "cream",
  },
  {
    layout: "image-left",
    eyebrow: "One-on-One",
    title: "Customized Personal Training",
    body: "For those seeking a deeper level of individualized attention, Mary offers customized one-on-one training tailored entirely to your goals, fitness level, and lifestyle. Every program is designed around you.",
    image: slide8,
    bullets: [
      { heading: "Weight Loss", text: "Support and gentle accountability" },
      { heading: "Strength & Composition", text: "Build muscle and feel powerful" },
      { heading: "Wellness Coaching", text: "Holistic guidance for everyday life" },
      { heading: "Adapted to You", text: "Programs that fit your schedule" },
    ],
    bg: "sage",
  },
  {
    layout: "stats",
    eyebrow: "Accessible to All",
    title: "A Class Format That Welcomes You In",
    body: "Mary's Fitness Classes are designed to be welcoming, accessible, and pressure-free. The donation-based model removes the barriers that often keep people from starting.",
    bullets: [
      { heading: "Donation-Based", text: "Join at a level that works for you" },
      { heading: "$10–$20 Suggested", text: "Flexible suggested donation per class" },
      { heading: "From Home", text: "All you need is a device and willingness" },
      { heading: "Stay Engaged", text: "A welcoming community to return to" },
    ],
    bg: "cream",
  },
  {
    layout: "image-right",
    eyebrow: "Who It's For",
    title: "Designed for People Who Want to Feel Better",
    body: "Ideal for adults seeking a thoughtful, encouraging approach to fitness — one that values consistency and balance over pressure, extremes, or intimidation.",
    image: slide10,
    bullets: [
      { heading: "Adults Seeking Guidance", text: "Live instruction keeps you focused" },
      { heading: "Those Who Value Balance", text: "Sustainable, feel-good movement" },
      { heading: "Strength & Flexibility", text: "Build a body you feel proud of, at any age" },
    ],
    bg: "sage",
  },
  {
    layout: "image-left",
    eyebrow: "The Promise",
    title: "Strong. Grounded. Energized.",
    body: "The goal is not simply to complete a workout. It is to leave each class feeling stronger, more flexible, more grounded, and more confident — in your body and in your entire day.",
    image: slide11,
    bullets: [
      { heading: "More Strength", text: "Capable and powerful in everyday movement" },
      { heading: "More Flexibility", text: "Move freely, ease through each day" },
      { heading: "More Confidence", text: "Trust your body, feel at home in it" },
      { heading: "A Better Day", text: "Momentum, clarity, and calm energy" },
    ],
    bg: "cream",
  },
  {
    layout: "cta",
    eyebrow: "Begin Today",
    title: "Join Mary's Fitness Channel",
    body: "Discover a more supportive, balanced, and sustainable path to strength, movement, and everyday wellness. Your next chapter of health begins right here — from the comfort of your own home.",
    image: slide12,
    bullets: [
      { heading: "Monday – Friday Mornings", text: "Live Zoom classes every weekday" },
      { heading: "$10–$20 Suggested", text: "Flexible, accessible, welcoming" },
    ],
    bg: "deep",
  },
  {
    layout: "video",
    eyebrow: "See It In Action",
    title: "A Glimpse Inside a Class",
    body: "A short walkthrough of what a typical morning with Mary looks and feels like.",
    bg: "deep",
  },
];

const bgClass = (bg?: Slide["bg"]) => {
  switch (bg) {
    case "deep":
      return "bg-[hsl(var(--sage-deep))] text-cream";
    case "sage":
      return "bg-[hsl(var(--sage-light))] text-foreground";
    case "cream":
    default:
      return "bg-cream text-foreground";
  }
};

const SlideView = ({ slide, isFullscreen }: { slide: Slide; isFullscreen?: boolean }) => {
  const padding = isFullscreen ? "p-10 md:p-16" : "p-6 md:p-10";
  const titleSize = isFullscreen
    ? "text-3xl md:text-5xl lg:text-6xl"
    : "text-xl md:text-3xl lg:text-4xl";
  const bodySize = isFullscreen ? "text-base md:text-lg" : "text-sm md:text-base";

  if (slide.layout === "hero") {
    return (
      <div className={`relative w-full h-full overflow-hidden ${bgClass(slide.bg)}`}>
        {slide.image && (
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--sage-deep))]/85 via-[hsl(var(--sage-deep))]/70 to-[hsl(var(--sage-deep))]/90" />
        <div className={`relative h-full flex flex-col items-center justify-center text-center ${padding}`}>
          <span className="hairline-gold mb-6" />
          {slide.eyebrow && (
            <span className="eyebrow-accent text-gold mb-4">{slide.eyebrow}</span>
          )}
          <h2 className={`font-serif italic font-light text-cream ${titleSize} leading-tight max-w-4xl`}>
            {slide.title}
          </h2>
          {slide.body && (
            <p className={`mt-6 text-cream/85 ${bodySize} max-w-2xl font-light tracking-wide`}>
              {slide.body}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (slide.layout === "video") {
    return (
      <div className={`relative w-full h-full ${bgClass(slide.bg)} ${padding} flex flex-col items-center justify-center text-center`}>
        <span className="hairline-gold mb-4" />
        {slide.eyebrow && <span className="eyebrow-accent text-gold mb-3">{slide.eyebrow}</span>}
        <h2 className={`font-serif italic font-light ${titleSize} mb-3`}>{slide.title}</h2>
        {slide.body && <p className={`${bodySize} max-w-xl font-light opacity-85 mb-6`}>{slide.body}</p>}
        <div className="w-full max-w-3xl aspect-video rounded-sm overflow-hidden bg-black/40 border border-gold/40 flex items-center justify-center">
          {VIDEO_URL ? (
            VIDEO_URL.includes("youtube") || VIDEO_URL.includes("vimeo") ? (
              <iframe
                src={VIDEO_URL}
                className="w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Mary's Fitness Channel video"
              />
            ) : (
              <video src={VIDEO_URL} controls className="w-full h-full object-cover" />
            )
          ) : (
            <div className="text-center px-6">
              <Play className="w-12 h-12 mx-auto mb-3 opacity-70" />
              <p className="font-serif italic text-lg">Video coming soon</p>
              <p className="text-xs opacity-60 mt-1 tracking-wide uppercase">
                A link will appear here once provided
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (slide.layout === "stats" || slide.layout === "cta") {
    const isCta = slide.layout === "cta";
    return (
      <div className={`relative w-full h-full overflow-hidden ${bgClass(slide.bg)}`}>
        {isCta && slide.image && (
          <>
            <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-[hsl(var(--sage-deep))]/80" />
          </>
        )}
        <div className={`relative h-full flex flex-col justify-center ${padding}`}>
          <div className="max-w-4xl mx-auto w-full text-center">
            <span className="hairline-gold mx-auto mb-4" />
            {slide.eyebrow && (
              <span className="eyebrow-accent text-gold mb-3 inline-block">{slide.eyebrow}</span>
            )}
            <h2 className={`font-serif font-normal ${titleSize} leading-tight mb-4`}>
              {slide.title}
            </h2>
            {slide.body && (
              <p className={`${bodySize} font-light opacity-85 max-w-2xl mx-auto mb-8`}>
                {slide.body}
              </p>
            )}
            {slide.bullets && (
              <div
                className={`grid gap-4 md:gap-6 ${
                  slide.bullets.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : slide.bullets.length === 3
                    ? "grid-cols-1 md:grid-cols-3"
                    : "grid-cols-2 md:grid-cols-4"
                }`}
              >
                {slide.bullets.map((b, i) => (
                  <div
                    key={i}
                    className="border border-gold/30 rounded-sm p-4 md:p-5 text-left bg-background/5 backdrop-blur-sm"
                  >
                    <div className="font-serif italic text-gold text-sm md:text-base mb-1">
                      {b.heading}
                    </div>
                    <div className="text-xs md:text-sm font-light opacity-80 leading-snug">
                      {b.text}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // image-left or image-right
  const imgFirst = slide.layout === "image-left";
  return (
    <div className={`relative w-full h-full ${bgClass(slide.bg)}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 h-full`}>
        {imgFirst && slide.image && (
          <div className="relative h-48 md:h-full overflow-hidden">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className={`flex flex-col justify-center ${padding}`}>
          <span className="hairline-gold mb-4" />
          {slide.eyebrow && (
            <span className="eyebrow-accent text-gold mb-3">{slide.eyebrow}</span>
          )}
          <h2 className={`font-serif font-normal ${titleSize} leading-tight mb-4`}>
            {slide.title}
          </h2>
          {slide.body && (
            <p className={`${bodySize} font-light opacity-85 leading-relaxed mb-5 max-w-lg`}>
              {slide.body}
            </p>
          )}
          {slide.bullets && (
            <ul className="space-y-3 max-w-lg">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gold font-serif italic mt-0.5">→</span>
                  <div>
                    <div className="font-serif italic text-sm md:text-base">{b.heading}</div>
                    <div className="text-xs md:text-sm opacity-75 font-light leading-snug">
                      {b.text}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {!imgFirst && slide.image && (
          <div className="relative h-48 md:h-full overflow-hidden order-first md:order-last">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
};

const FitnessChannelPresentation = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="mt-8 max-w-md mx-auto md:mx-0">
      <div className="flex items-center gap-3 mb-3">
        <span className="hairline-gold" />
        <span className="eyebrow-accent">Mary's Fitness Channel</span>
      </div>

      {/* Compact deck preview */}
      <div className="relative rounded-sm overflow-hidden border border-gold/40 frame-shadow bg-secondary">
        <div className="aspect-[4/3] relative">
          <SlideView slide={slides[index]} />
        </div>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2 bg-gradient-to-t from-black/60 to-transparent">
          <Button
            size="icon"
            variant="ghost"
            onClick={prev}
            disabled={index === 0}
            className="h-8 w-8 text-cream hover:bg-cream/10 hover:text-cream"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-xs text-cream/90 tracking-widest font-light">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setOpen(true)}
              className="h-8 w-8 text-cream hover:bg-cream/10 hover:text-cream"
              aria-label="Open fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={next}
              disabled={index === slides.length - 1}
              className="h-8 w-8 text-cream hover:bg-cream/10 hover:text-cream"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Action row */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setOpen(true)}
          className="border-gold/50 text-foreground hover:bg-gold/10"
        >
          <Play className="w-3.5 h-3.5" /> View presentation
        </Button>
        <a
          href="/marys-fitness-channel.pdf"
          download="Marys-Fitness-Channel.pdf"
          className="inline-flex items-center gap-2 text-xs eyebrow text-foreground/70 hover:text-primary transition-colors px-3 py-2 border border-foreground/15 rounded-sm"
        >
          <Download className="w-3.5 h-3.5" /> Download PDF
        </a>
      </div>

      {/* Fullscreen dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 border-gold/40 bg-background overflow-hidden">
          <div className="relative aspect-[16/10] w-full">
            <SlideView slide={slides[index]} isFullscreen />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center text-foreground border border-foreground/20"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <Button
                size="sm"
                variant="ghost"
                onClick={prev}
                disabled={index === 0}
                className="text-cream hover:bg-cream/10 hover:text-cream"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </Button>
              <div className="flex items-center gap-3">
                <span className="text-xs text-cream/90 tracking-widest font-light">
                  {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <a
                  href="/marys-fitness-channel.pdf"
                  download="Marys-Fitness-Channel.pdf"
                  className="inline-flex items-center gap-1.5 text-xs text-cream/90 hover:text-gold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={next}
                disabled={index === slides.length - 1}
                className="text-cream hover:bg-cream/10 hover:text-cream"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FitnessChannelPresentation;
