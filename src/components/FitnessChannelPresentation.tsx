import { Download, ExternalLink, FileText, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import cover from "@/assets/fitness-channel/slide-1.jpg";

// Drop in a video URL when ready (YouTube embed, Vimeo embed, or direct .mp4)
const VIDEO_URL: string | null = "/marys-fitness-channel.mp4";
const PDF_URL = "/marys-fitness-channel.pdf";

const FitnessChannelPresentation = () => {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="mt-8 max-w-md mx-auto md:mx-0">
      <div className="flex items-center gap-3 mb-3">
        <span className="hairline-gold" />
        <span className="eyebrow-accent">Mary's Fitness Channel</span>
      </div>

      <div className="rounded-sm overflow-hidden border border-gold/40 frame-shadow bg-secondary">
        {/* Cover */}
        <button
          type="button"
          onClick={() => setPdfOpen(true)}
          className="relative block w-full aspect-[4/3] overflow-hidden group"
          aria-label="Open Mary's Fitness Channel presentation"
        >
          <img
            src={cover}
            alt="Mary's Fitness Channel presentation cover"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sage-deep))]/85 via-[hsl(var(--sage-deep))]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-left text-cream">
            <span className="eyebrow-accent text-gold">Presentation · PDF</span>
            <h3 className="font-serif italic text-2xl md:text-3xl leading-tight mt-1">
              Mary's Fitness Channel
            </h3>
            <p className="text-cream/80 text-xs md:text-sm font-light mt-1">
              A world of fitness, health, and wellness
            </p>
          </div>
          <div className="absolute top-3 right-3 bg-cream/95 text-foreground rounded-sm px-2 py-1 text-[10px] tracking-widest uppercase font-light flex items-center gap-1">
            <FileText className="w-3 h-3" /> View
          </div>
        </button>

        {/* Actions */}
        <div className="flex items-center justify-between gap-2 p-3 bg-cream border-t border-gold/30">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPdfOpen(true)}
            className="flex-1 border-gold/50 text-foreground hover:bg-gold/10 font-light tracking-wide"
          >
            <FileText className="w-4 h-4 mr-2" /> View PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 border-gold/50 text-foreground hover:bg-gold/10 font-light tracking-wide"
          >
            <a href={PDF_URL} download="Marys-Fitness-Channel.pdf">
              <Download className="w-4 h-4 mr-2" /> Download
            </a>
          </Button>
        </div>

        {/* Video row */}
        <div className="flex items-center justify-between gap-3 px-3 pb-3 bg-cream">
          {VIDEO_URL ? (
            <Button
              variant="default"
              size="sm"
              onClick={() => setVideoOpen(true)}
              className="w-full bg-[hsl(var(--sage-deep))] text-cream hover:bg-[hsl(var(--sage-deep))]/90 font-light tracking-wide"
            >
              <Play className="w-4 h-4 mr-2 fill-current" /> Watch the video
            </Button>
          ) : (
            <div className="w-full text-center text-[11px] tracking-widest uppercase text-foreground/50 font-light py-1.5 border border-dashed border-gold/40 rounded-sm">
              Video coming soon
            </div>
          )}
        </div>
      </div>

      {/* PDF viewer modal */}
      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-cream">
          <DialogTitle className="sr-only">Mary's Fitness Channel — Presentation</DialogTitle>
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gold/30">
            <div className="flex items-center gap-3 min-w-0">
              <span className="hairline-gold" />
              <span className="eyebrow-accent truncate">Mary's Fitness Channel</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild className="border-gold/50">
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Open in tab
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-gold/50">
                <a href={PDF_URL} download="Marys-Fitness-Channel.pdf">
                  <Download className="w-4 h-4 mr-2" /> Download
                </a>
              </Button>
            </div>
          </div>
          <iframe
            src={`${PDF_URL}#view=FitH`}
            title="Mary's Fitness Channel PDF"
            className="w-full h-full border-0 bg-secondary"
          />
        </DialogContent>
      </Dialog>

      {/* Video modal */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black overflow-hidden">
          <DialogTitle className="sr-only">Mary's Fitness Channel — Video</DialogTitle>
          {VIDEO_URL && (
            <div className="aspect-video w-full">
              {VIDEO_URL.includes("youtube") || VIDEO_URL.includes("vimeo") ? (
                <iframe
                  src={VIDEO_URL}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Mary's Fitness Channel video"
                />
              ) : (
                <video
                  src={VIDEO_URL}
                  controls
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full"
                />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FitnessChannelPresentation;
