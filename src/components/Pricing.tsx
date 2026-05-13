const tiers = [
  {n:"Starter", p:"$0", sub:"forever — fair use", cta:"Get API key",
    feats:["10k scans / month","All symbologies","Web + Mobile SDK","Community support"], dark:false},
  {n:"Pro", p:"$99", sub:"per month · seat unlimited", cta:"Start 14-day trial", featured:true,
    feats:["1M scans / month","On-device + cloud","Webhooks + MQTT","GS1 parser","99.99% SLA","Priority support"], dark:true},
  {n:"Enterprise", p:"Custom", sub:"talk to us", cta:"Book a call",
    feats:["Unlimited volume","Self-host / VPC","Dedicated SE","SOC 2 + HIPAA + DSCSA","Custom symbologies","Named SLAs"], dark:false},
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 06 — Pricing</div>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Simple, scan-based pricing.</h2>
          <p className="mt-3 text-muted-foreground">No per-seat math. No surprise overages.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
          {tiers.map(t=>(
            <div key={t.n} className={`ink-shadow flex flex-col rounded-2xl border border-foreground p-7 ${t.dark?"bg-foreground text-background":"bg-card"} ${t.featured?"lg:-translate-y-3":""}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">{t.n}</h3>
                {t.featured && <span className="rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-foreground">Popular</span>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <div className="font-display text-5xl font-bold tracking-tight">{t.p}</div>
                {t.p.startsWith("$") && t.n!=="Starter" && <span className={t.dark?"text-background/60":"text-muted-foreground"}>/mo</span>}
              </div>
              <div className={`mt-1 text-sm ${t.dark?"text-background/60":"text-muted-foreground"}`}>{t.sub}</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.feats.map(f=>(
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-0.5 inline-block h-4 w-4 shrink-0 rounded-sm border ${t.dark?"border-accent bg-accent":"border-foreground bg-accent"}`}>
                      <svg viewBox="0 0 16 16" className="h-full w-full"><path d="M3 8 L7 12 L13 4" stroke="oklch(0.16 0.025 250)" strokeWidth="2.5" fill="none"/></svg>
                    </span>{f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 rounded-md border px-4 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${t.dark?"border-accent bg-accent text-foreground":"border-foreground bg-background"}`}>{t.cta} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
