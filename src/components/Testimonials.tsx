// Operator quotes — load-bearing social proof
const quotes = [
  {
    q: "We replaced four scanning vendors with ScanPro in a single sprint. First-scan rate went from 91% to 99.4% the next morning.",
    a: "Marisa Chen", r: "VP Operations · Northwind Logistics", logo: "⬢",
  },
  {
    q: "Damaged-label recovery alone saved us ~2,300 manual exceptions a week. The dock supervisor asked if it was a trick.",
    a: "Daniel Okafor", r: "Director of Fulfillment · KaiserMart", logo: "◆",
  },
  {
    q: "Drop-in SDK, eight lines of code, audit-grade GS1 out of the box. Our DSCSA project closed three months early.",
    a: "Priya Raman", r: "Sr. Eng Manager · MediTrace Health", logo: "✚",
  },
  {
    q: "Throughput on the sortation belt jumped 38% without touching the cameras. We just swapped the decode engine.",
    a: "Lukas Berg", r: "Automation Lead · PortPilot EU", logo: "▲",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 07 — In the field</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Operators choose ScanPro <span className="bg-foreground px-3 text-background">and stop switching.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Quotes from teams running ScanPro across warehouses, retail floors, hospitals and sortation lines — at real volume, with real consequences when a scan fails.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {quotes.map((t, i) => (
            <figure key={t.a} className={`ink-shadow-sm relative rounded-2xl border border-foreground p-7 ${i % 3 === 0 ? "bg-foreground text-background" : "bg-card"}`}>
              <div className={`font-mono text-[11px] uppercase tracking-wider ${i % 3 === 0 ? "text-accent" : "text-muted-foreground"}`}>★★★★★ · case study 0{i + 1}</div>
              <blockquote className="mt-4 font-display text-xl font-bold leading-snug md:text-2xl">"{t.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-current/15 pt-4">
                <div className={`grid h-10 w-10 place-items-center rounded-full font-display text-lg font-bold ${i % 3 === 0 ? "bg-accent text-foreground" : "bg-foreground text-background"}`}>{t.logo}</div>
                <div>
                  <div className="font-bold">{t.a}</div>
                  <div className={`text-xs ${i % 3 === 0 ? "text-background/60" : "text-muted-foreground"}`}>{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-foreground bg-foreground md:grid-cols-4">
          {[
            ["NPS 71", "from production operators"],
            ["3.4 yrs", "average customer tenure"],
            ["94%", "renew without negotiation"],
            ["18", "Fortune 500 deployments"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-5">
              <div className="font-display text-3xl font-bold tracking-tight">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
