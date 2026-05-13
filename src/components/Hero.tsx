import { Barcode } from "./Barcode";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-paper opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
        {/* Left */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground bg-background px-3 py-1 text-xs font-mono uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse-dot" />
            v4.2 · 18 ms median decode
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Decode <span className="relative inline-block">any
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M2 8 Q 50 1, 100 6 T 198 5" stroke="oklch(0.88 0.22 130)" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span> barcode.<br/>
            In <span className="bg-foreground px-3 text-background">real-world</span> chaos.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Crumpled labels, blurry phone cams, sun-glare on shrinkwrap, half-torn courier stickers — ScanPro reads what every other SDK gives up on. One drop-in API, 1D + 2D + GS1, on-device or cloud.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="ink-shadow inline-flex items-center gap-2 rounded-md border border-foreground bg-foreground px-5 py-3 text-sm font-bold text-background transition-transform hover:-translate-y-0.5">
              Start scanning free →
            </a>
            <a href="#speed" className="inline-flex items-center gap-2 rounded-md border border-foreground bg-background px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5">
              ▶ Watch 38s demo
            </a>
          </div>

          {/* Stats strip */}
          <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-foreground bg-foreground">
            {[
              { k: "99.02%", v: "Decode accuracy" },
              { k: "18 ms", v: "Median latency" },
              { k: "2,000+", v: "Teams shipping" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-5">
                <dt className="font-display text-3xl font-bold tracking-tight">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — phone scanner mock */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm">
            {/* receipt floating */}
            <div className="ink-shadow absolute -left-6 top-8 w-44 rotate-[-6deg] rounded-md border border-foreground bg-card p-3 text-[10px] font-mono">
              <div className="flex justify-between text-muted-foreground"><span>SKU</span><span>QTY</span></div>
              <div className="mt-1 space-y-0.5">
                <div className="flex justify-between"><span>014-22A</span><span>×3</span></div>
                <div className="flex justify-between"><span>099-X1</span><span>×1</span></div>
                <div className="flex justify-between"><span>770-44</span><span>×7</span></div>
              </div>
              <div className="my-2 h-px border-t border-dashed" />
              <Barcode seed="receipt-001" height={32} className="h-8 w-full text-foreground" />
              <div className="mt-1 text-center text-muted-foreground">#0014-22A</div>
            </div>

            {/* phone */}
            <div className="ink-shadow relative rounded-[2rem] border-2 border-foreground bg-foreground p-2">
              <div className="relative aspect-[9/18] overflow-hidden rounded-[1.6rem] bg-card">
                {/* viewport */}
                <div className="absolute inset-0 grid-paper-fine opacity-40" />
                <div className="absolute inset-x-6 top-1/3 h-44 rounded-lg border-2 border-coral">
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="scan-line h-1 w-full animate-scan" />
                  </div>
                  {/* corner brackets */}
                  {["top-0 left-0","top-0 right-0 rotate-90","bottom-0 right-0 rotate-180","bottom-0 left-0 -rotate-90"].map(p=>(
                    <div key={p} className={`absolute ${p} h-5 w-5`}>
                      <div className="absolute left-0 top-0 h-0.5 w-3 bg-coral"/>
                      <div className="absolute left-0 top-0 h-3 w-0.5 bg-coral"/>
                    </div>
                  ))}
                  {/* tilted barcode being read */}
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 rotate-[-4deg]">
                    <Barcode seed="tilted-blur" height={48} className="h-12 w-full text-foreground/85 blur-[0.4px]" />
                  </div>
                </div>
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  ▸ scanning… <span className="text-coral">live</span>
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-md border border-foreground bg-background/95 p-3 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-muted-foreground">DECODED · 17ms</span>
                    <span className="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold">EAN-13</span>
                  </div>
                  <div className="mt-1 font-mono text-base font-bold">5 901234 123457</div>
                </div>
              </div>
            </div>

            {/* metric tile */}
            <div className="ink-shadow absolute -right-4 bottom-12 w-40 rotate-[5deg] rounded-md border border-foreground bg-card p-3">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">throughput</div>
              <div className="font-display text-2xl font-bold">412<span className="text-sm text-muted-foreground"> /s</span></div>
              <svg viewBox="0 0 100 30" className="mt-1 h-8 w-full">
                <polyline points="0,22 12,18 24,20 36,12 48,14 60,8 72,11 84,4 100,6" fill="none" stroke="oklch(0.78 0.16 215)" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* logo ticker */}
      <div className="relative border-t border-border bg-background/60">
        <div className="overflow-hidden py-5">
          <div className="flex gap-16 whitespace-nowrap animate-ticker font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {Array.from({length: 2}).map((_,i)=>(
              <div key={i} className="flex shrink-0 gap-16">
                {["⬢ Northwind Logistics","◆ KaiserMart","▲ PortPilot","● ZephyrRetail","■ FreshHaul","◇ MetricBox","⬡ TruckCloud","✦ CrateOS"].map(n=>(
                  <span key={n}>{n}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
