import { Barcode } from "./Barcode";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 01 — Capabilities</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              A smarter way to read every label that crosses your dock.
            </h2>
          </div>
          <div className="hidden text-right text-xs font-mono text-muted-foreground md:block">
            8 modules · 1 SDK<br/>iOS · Android · Web · Server
          </div>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid grid-cols-12 gap-4">
          {/* Hero card */}
          <div className="ink-shadow col-span-12 row-span-2 rounded-2xl border border-foreground bg-card p-8 lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">► Multi-symbology</div>
            <h3 className="mt-3 font-display text-3xl font-bold">37 symbologies. One call.</h3>
            <p className="mt-3 text-muted-foreground">EAN/UPC, Code 128, ITF, QR, Data Matrix, PDF417, Aztec, GS1 composites — auto-detected, no config.</p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              {["EAN-13","CODE-128","QR","DATA-MATRIX","PDF417","ITF-14","AZTEC","GS1-128","CODABAR","MAXICODE"].map(t=>(
                <span key={t} className="rounded border border-foreground bg-background px-2 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-foreground bg-secondary p-4">
              <Barcode seed="hero-cap" height={56} className="h-14 w-full text-foreground"/>
              <div className="mt-2 flex justify-between font-mono text-xs text-muted-foreground">
                <span>auto · 0.011s</span><span className="text-foreground">5 901 234 123 457</span>
              </div>
            </div>
          </div>

          {/* Damaged / blurred */}
          <div className="col-span-6 rounded-2xl border border-foreground bg-card p-6 lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-wider text-coral">▲ Damaged labels</div>
            <h3 className="mt-2 font-display text-xl font-bold">Reads through tears, glare and fold lines.</h3>
            <svg viewBox="0 0 200 70" className="mt-4 w-full">
              <defs>
                <pattern id="bars" width="6" height="70" patternUnits="userSpaceOnUse">
                  <rect width="3" height="70" fill="currentColor"/>
                </pattern>
              </defs>
              <rect width="200" height="70" fill="url(#bars)" className="text-foreground"/>
              <path d="M0 30 Q60 -10 120 35 T200 25 L200 70 L0 70 Z" fill="oklch(0.985 0.005 95)" opacity="0.85"/>
              <path d="M40 0 L60 70" stroke="oklch(0.985 0.005 95)" strokeWidth="6"/>
              <circle cx="150" cy="22" r="14" fill="oklch(0.985 0.005 95)" opacity="0.75"/>
            </svg>
          </div>

          {/* Tiny */}
          <div className="col-span-6 rounded-2xl border border-foreground bg-foreground p-6 text-background lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-wider text-accent">◐ Sub-millimeter</div>
            <h3 className="mt-2 font-display text-xl font-bold">Down to 4-mil narrow bar.</h3>
            <div className="mt-4 flex items-end gap-1">
              {[20,30,16,40,12,28,18,34].map((h,i)=>(
                <div key={i} style={{height:h}} className="w-1.5 bg-accent"/>
              ))}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-wider opacity-70">resolved at 1cm distance</div>
          </div>

          {/* Batch */}
          <div className="col-span-12 rounded-2xl border border-foreground bg-card p-6 lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">⬚ Batch capture</div>
            <h3 className="mt-2 font-display text-xl font-bold">120 codes in a single frame.</h3>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {Array.from({length:8}).map((_,i)=>(
                <div key={i} className="rounded border border-foreground bg-secondary p-1.5">
                  <Barcode seed={`b${i}`} height={28} className="h-7 w-full text-foreground"/>
                </div>
              ))}
            </div>
          </div>

          {/* Offline */}
          <div className="col-span-6 rounded-2xl border border-foreground bg-card p-6 lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">⌁ Offline-first</div>
            <h3 className="mt-2 font-display text-xl font-bold">Zero-bar, zero-problem.</h3>
            <p className="mt-2 text-sm text-muted-foreground">On-device WASM core; queues sync when you're back online.</p>
          </div>

          {/* GS1 */}
          <div className="col-span-12 rounded-2xl border border-foreground bg-cyan/15 p-6 lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">⌘ GS1 parser</div>
            <h3 className="mt-2 font-display text-xl font-bold">Application Identifiers, structured.</h3>
            <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-xs">
              {[
                ["(01) GTIN","8 0614 14 12345 6"],
                ["(17) Expiry","2027-04-22"],
                ["(10) Lot","LOT-A88-7"],
                ["(21) Serial","SN-009-1142"],
                ["(310) Net Weight","1.245 kg"],
                ["(400) Order","PO-77821"],
              ].map(([k,v])=>(
                <div key={k} className="rounded border border-foreground bg-background p-2">
                  <div className="text-[10px] uppercase text-muted-foreground">{k}</div>
                  <div className="font-bold">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
