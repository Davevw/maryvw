const ClassSchedule = () => {
  const scheduleData = [
    { day: "Monday", time: "8:00 AM", type: "Strength", format: "Zoom", length: "30 min" },
    { day: "Tuesday", time: "9:00 AM", type: "Stretch & Breath", format: "Zoom + Sea Cliff residents", length: "60 min" },
    { day: "Wednesday", time: "8:00 AM", type: "Strength", format: "Zoom", length: "30 min" },
    { day: "Thursday", time: "8:00 AM", type: "Strength", format: "Zoom", length: "30 min" },
    { day: "Friday", time: "8:00 AM", type: "Strength", format: "Zoom", length: "30 min" },
  ];

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="hairline-gold" />
            <span className="eyebrow-accent">Weekly Schedule</span>
            <span className="hairline-gold" />
          </div>
          <h2 className="font-serif font-normal text-foreground text-3xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            A rhythm of
            <span className="italic text-primary"> strength & stillness.</span>
          </h2>
          <p className="text-foreground/70 leading-relaxed font-light max-w-xl mx-auto">
            Live classes designed to fit into real life — short enough to keep,
            long enough to matter.
          </p>
        </div>

        {/* Spa-menu table */}
        <div className="bg-background/60 border border-gold/30 rounded-sm p-8 md:p-12 frame-shadow">
          {/* Column header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 border-b border-border/60">
            <div className="col-span-3 eyebrow text-foreground/50">Day</div>
            <div className="col-span-2 eyebrow text-foreground/50">Time</div>
            <div className="col-span-3 eyebrow text-foreground/50">Class</div>
            <div className="col-span-3 eyebrow text-foreground/50">Format</div>
            <div className="col-span-1 eyebrow text-foreground/50 text-right">Length</div>
          </div>

          <div className="divide-y divide-border/40">
            {scheduleData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 py-5 md:py-6 items-baseline"
              >
                <div className="col-span-2 md:col-span-3 font-serif text-xl md:text-2xl text-foreground">
                  {item.day}
                </div>
                <div className="col-span-1 md:col-span-2 eyebrow text-gold">
                  {item.time}
                </div>
                <div className="col-span-1 md:col-span-3 font-serif italic text-lg text-primary">
                  {item.type}
                </div>
                <div className="col-span-2 md:col-span-3 text-sm text-foreground/70 font-light">
                  {item.format}
                </div>
                <div className="col-span-2 md:col-span-1 md:text-right eyebrow text-foreground/50">
                  {item.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
