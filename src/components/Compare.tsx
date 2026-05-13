// Comparison vs. legacy SDKs — opinionated, scannable table
type V = string | boolean;
const rows: Array<{ feat: string; sp: V; legacy: V; oss: V }> = [
  { feat: "Median latency on a 3-year-old phone", sp: "18 ms", legacy: "62 ms", oss: "240 ms" },
  { feat: "Decodes torn / crumpled labels", sp: true, legacy: "partial", oss: false },
  { feat: "Reads through sun glare & shrinkwrap", sp: true, legacy: false, oss: false },
  { feat: "Sub-millimeter (4-mil) narrow bar", sp: true, legacy: "with tuning", oss: false },
  { feat: "Multi-code per frame (up to 120)", sp: true, legacy: "max 8", oss: false },
  { feat: "On-device WASM core (offline)", sp: true, legacy: false, oss: true },
  { feat: "Built-in GS1 AI parser", sp: true, legacy: "add-on", oss: false },
  { feat: "Webhook + MQTT + SDK delivery", sp: true, legacy: "webhook only", oss: false },
  { feat: "SOC 2 + HIPAA + DSCSA ready", sp: true, legacy: "SOC 2", oss: false },
  { feat: "Time to first decode", sp: "< 3 min", legacy: "1–2 days", oss: "1 week" },
];

function Cell({ v }: { v: V }) {
  if (v === true) return <span className="inline-flex items-center gap-1.5 font-mono text-xs"><span className="grid h-4 w-4 place-items-center rounded-sm bg-accent text-foreground">✓</span> Yes</span>;
  if (v === false) return <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground"><span className="grid h-4 w-4 place-items-center rounded-sm border border-foreground/30">—</span> No</span>;
  return <span className="font-mono text-xs">{v}</span>;
}

export function Compare() {
  return (
    <section className="border-b border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 05 — Side by side</div>
            <h2 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              The honest comparison nobody publishes.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">We benchmarked ScanPro against the two scanners teams typically replace it with. Same hardware, same 14M-frame test set, same warehouse fluorescent flicker. Here's the receipt.</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-foreground bg-card">
          <div className="grid grid-cols-12 border-b border-foreground bg-foreground text-background">
            <div className="col-span-6 px-5 py-4 font-mono text-[11px] uppercase tracking-wider text-background/60">capability</div>
            <div className="col-span-2 border-l border-background/15 px-3 py-4 text-center font-display font-bold text-accent">ScanPro</div>
            <div className="col-span-2 border-l border-background/15 px-3 py-4 text-center font-display font-bold">Legacy SDK</div>
            <div className="col-span-2 border-l border-background/15 px-3 py-4 text-center font-display font-bold">OSS library</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.feat} className={`grid grid-cols-12 items-center border-b border-border last:border-b-0 ${i % 2 ? "bg-secondary/40" : ""}`}>
              <div className="col-span-6 px-5 py-3.5 text-sm font-medium">{r.feat}</div>
              <div className="col-span-2 border-l border-border px-3 py-3.5 text-center"><Cell v={r.sp} /></div>
              <div className="col-span-2 border-l border-border px-3 py-3.5 text-center"><Cell v={r.legacy} /></div>
              <div className="col-span-2 border-l border-border px-3 py-3.5 text-center"><Cell v={r.oss} /></div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">* Legacy SDK = average of the two largest commercial scanners. OSS library = ZXing 3.5 with default config. Methodology + raw data: scanpro.dev/bench-2026.</p>
      </div>
    </section>
  );
}
