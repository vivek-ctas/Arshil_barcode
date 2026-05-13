// Developer-facing changelog / momentum section
const entries = [
  { v: "4.2.117", d: "May 2026", t: "Crumple-recovery v3", b: "New diffusion-based reconstructor recovers labels with up to 38% surface damage. +4.1pp first-scan accuracy on courier traffic.", tag: "Engine" },
  { v: "4.2.090", d: "Apr 2026", t: "Edge runtime · Cloudflare Workers", b: "Decode at the edge with a 240KB WASM core. 11ms p50 from any of 320+ POPs.", tag: "Platform" },
  { v: "4.2.061", d: "Mar 2026", t: "GS1 Digital Link", b: "Native parser for the new web-resolvable GS1 syntax (gs1.org/voc) — including AI 8200 promo URIs.", tag: "Standards" },
  { v: "4.2.044", d: "Feb 2026", t: "Multi-frame fusion", b: "Combine consecutive video frames into a single decode pass — cuts re-tries by 71% on handheld guns.", tag: "SDK" },
];

export function Changelog() {
  return (
    <section id="changelog" className="border-b border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 10 — Built in the open</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">Shipping every two weeks. Public changelog, no surprises.</h2>
          </div>
          <a href="#" className="hidden rounded-md border border-foreground bg-background px-4 py-2 text-sm font-bold md:inline-flex">Full changelog →</a>
        </div>

        <ol className="mt-10 grid gap-4 lg:grid-cols-2">
          {entries.map((e, i) => (
            <li key={e.v} className="ink-shadow-sm relative rounded-2xl border border-foreground bg-card p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <span>v{e.v} · {e.d}</span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-foreground">{e.tag}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.b}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>shipped to all tenants · zero downtime</span>
              </div>
              {i === 0 && (
                <span className="absolute -top-2 right-5 rounded-full border border-foreground bg-foreground px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">latest</span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { k: "GitHub", v: "github.com/ctas/scanpro", sub: "MIT-licensed reference SDKs" },
            { k: "Discord", v: "8,400 developers", sub: "Avg first response: 11 minutes" },
            { k: "Status", v: "All systems green", sub: "99.99% — 90 day rolling" },
          ].map((c) => (
            <a key={c.k} href="#" className="group flex items-center justify-between rounded-xl border border-foreground bg-card p-5 hover:bg-foreground hover:text-background">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-accent">{c.k}</div>
                <div className="mt-1 font-display text-base font-bold">{c.v}</div>
                <div className="text-xs text-muted-foreground group-hover:text-background/60">{c.sub}</div>
              </div>
              <span className="font-mono text-xl">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
