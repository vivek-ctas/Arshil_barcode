// "Numbers that move the warehouse" — proof-of-scale section
export function Stats() {
  const big = [
    { k: "99.02%", v: "First-scan decode rate", d: "Across 14M test frames including damaged, blurred, glare and partial labels." },
    { k: "18 ms", v: "p50 end-to-end latency", d: "Shutter to SKU on a 3-year-old phone with no GPU acceleration." },
    { k: "412 / s", v: "Sustained throughput", d: "Per worker on a single 8-vCPU node — horizontal scale is linear." },
    { k: "37", v: "Symbologies supported", d: "Every 1D, 2D, postal and stacked symbology in active use, auto-detected." },
  ];
  const ticker = [
    "10.4M scans / day",
    "230 production tenants",
    "47 countries",
    "0 data retention by default",
    "12 SDK languages",
    "99.99% uptime · 90 day rolling",
  ];
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 03 — Numbers that move the warehouse</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Built for the volumes <span className="bg-accent px-2">real operators</span> push.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Every metric below is measured on production traffic — not on lab fixtures, not on cherry-picked samples. We publish them quarterly because operators deserve receipts.</p>
          </div>
          <div className="hidden text-right text-xs font-mono text-muted-foreground md:block">Q1 2026 · audited<br/>full report → /trust</div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-4">
          {big.map((s, i) => (
            <div key={s.k} className={`relative overflow-hidden rounded-2xl border border-foreground p-6 ${i === 0 ? "col-span-12 md:col-span-6 lg:col-span-5 bg-foreground text-background" : "col-span-6 lg:col-span-3 bg-card"} ${i === 1 ? "lg:col-span-3" : ""}`}>
              <div className={`font-mono text-[10px] uppercase tracking-wider ${i === 0 ? "text-accent" : "text-muted-foreground"}`}>metric · 0{i + 1}</div>
              <div className="mt-3 font-display text-5xl font-bold tracking-tight md:text-6xl">{s.k}</div>
              <div className={`mt-1 font-display text-base font-bold ${i === 0 ? "text-background" : "text-foreground"}`}>{s.v}</div>
              <p className={`mt-3 text-sm ${i === 0 ? "text-background/70" : "text-muted-foreground"}`}>{s.d}</p>
              {i === 0 && (
                <svg viewBox="0 0 200 60" className="mt-5 h-16 w-full">
                  <polyline points="0,50 20,46 40,42 60,38 80,30 100,32 120,22 140,18 160,12 180,8 200,4" fill="none" stroke="oklch(0.88 0.22 130)" strokeWidth="2" />
                  <polyline points="0,55 200,55" stroke="white" strokeOpacity="0.2" strokeWidth="0.5" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-foreground bg-secondary">
          <div className="flex gap-12 whitespace-nowrap py-3 animate-ticker font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 gap-12 pl-12">
                {ticker.map((t) => (<span key={t}>◆ {t}</span>))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
