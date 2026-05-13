import { Barcode } from "./Barcode";

export function CTAFooter() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border py-24">
        <div className="absolute inset-0 grid-paper opacity-50"/>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">// ready when you are</div>
          <h2 className="mt-3 font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Built for modern<br/>barcode <span className="bg-foreground px-3 text-background">workflows.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Free to try. Free during dev. Pay only when you ship to production.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className="ink-shadow inline-flex items-center gap-2 rounded-md border border-foreground bg-foreground px-6 py-3.5 font-bold text-background hover:-translate-y-0.5">Scan your first label →</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-6 py-3.5 font-bold hover:-translate-y-0.5">Read the docs</a>
          </div>
          <Barcode seed="footer-cta" height={48} className="mx-auto mt-12 h-10 w-3/5 max-w-md text-foreground/85"/>
          <div className="mt-2 font-mono text-xs text-muted-foreground">// CTAS-SCANPRO-2026-READY</div>
        </div>
      </section>

      <footer className="bg-foreground py-14 text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-xl font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-foreground"><Barcode seed="logo" height={20} className="h-4 w-5 text-foreground"/></span>
              ScanPro <span className="text-background/50">/CTAS</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-background/60">The decoding engine modern logistics, retail and healthcare ship on.</p>
            <div className="mt-5 flex gap-2 font-mono text-[10px]">
              {["SOC 2","HIPAA","GDPR","DSCSA"].map(b=><span key={b} className="rounded border border-background/30 px-2 py-1">{b}</span>)}
            </div>
          </div>
          {[
            {h:"Product", l:["Capabilities","Pipeline","Pricing","Changelog","Status"]},
            {h:"Developers", l:["Docs","API reference","SDKs","GitHub","Sandbox"]},
            {h:"Company", l:["About","Customers","Security","Contact","Press"]},
          ].map(c=>(
            <div key={c.h}>
              <div className="font-mono text-[10px] uppercase tracking-wider text-accent">{c.h}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {c.l.map(x=><li key={x}><a href="#" className="text-background/80 hover:text-background">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-background/15 px-6 pt-6 text-xs text-background/60 md:flex-row">
          <div>© 2026 CTAS Labs · All rights reserved.</div>
          <div className="font-mono">build · 4.2.117 · 18ms p50</div>
        </div>
      </footer>
    </>
  );
}
