// Plug-and-play system diagram
export function Pipeline() {
  return (
    <section id="pipeline" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 03 — Plug & play</div>
            <h2 className="mt-2 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Drop one SDK in. Wire any source. Pipe to anywhere.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* Big diagram card */}
          <div className="ink-shadow col-span-12 rounded-2xl border border-foreground bg-card p-6 lg:col-span-8">
            <div className="mb-4 flex justify-between font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>arch.diagram · scanpro mesh</span>
              <span>v4 · 2026</span>
            </div>

            <div className="relative grid grid-cols-3 gap-6">
              {/* Sources */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Sources</div>
                {[
                  {n:"iPhone / Android cam", c:"bg-cyan"},
                  {n:"Zebra · Honeywell gun", c:"bg-violet"},
                  {n:"Fixed industrial cam", c:"bg-coral"},
                  {n:"Drone overhead feed", c:"bg-accent"},
                  {n:"PDF · TIFF upload", c:"bg-foreground/80"},
                ].map(s=>(
                  <div key={s.n} className="flex items-center gap-2 rounded border border-foreground bg-background px-2.5 py-2 text-xs font-medium">
                    <span className={`h-2 w-2 rounded-full ${s.c}`}/>{s.n}
                  </div>
                ))}
              </div>

              {/* Core */}
              <div className="flex flex-col items-stretch justify-center gap-3">
                <div className="rounded-lg border-2 border-foreground bg-foreground p-4 text-center text-background">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent">▼ ScanPro Core</div>
                  <div className="mt-1 font-display text-lg font-bold">Decode Engine</div>
                  <div className="mt-2 grid grid-cols-3 gap-1 text-[10px] font-mono">
                    {["normalize","locate","decode","parse","verify","emit"].map(t=>(
                      <span key={t} className="rounded bg-background/10 py-1">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-around font-mono text-[10px] uppercase text-muted-foreground">
                  <span>↑ webhook</span><span>↑ SDK</span><span>↑ MQTT</span>
                </div>
              </div>

              {/* Destinations */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Destinations</div>
                {[
                  {n:"SAP · Oracle WMS"},
                  {n:"Shopify · BigCommerce"},
                  {n:"Snowflake · BigQuery"},
                  {n:"Slack · Teams alert"},
                  {n:"Your REST endpoint"},
                ].map(s=>(
                  <div key={s.n} className="flex items-center justify-between gap-2 rounded border border-foreground bg-background px-2.5 py-2 text-xs font-medium">
                    {s.n}<span className="font-mono text-[10px] text-muted-foreground">→</span>
                  </div>
                ))}
              </div>

              {/* Connecting lines overlay */}
              <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {[15,30,45,60,75].map((y,i)=>(
                  <g key={i}>
                    <path d={`M33 ${y} C 38 ${y}, 38 50, 50 50`} stroke="currentColor" strokeWidth="0.2" fill="none" className="text-foreground/30" strokeDasharray="0.6 0.6"/>
                    <path d={`M50 50 C 62 50, 62 ${y}, 67 ${y}`} stroke="currentColor" strokeWidth="0.2" fill="none" className="text-foreground/30" strokeDasharray="0.6 0.6"/>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3 border-t border-border pt-5 font-mono text-xs">
              {[["10M+","events / day"],["27","integrations"],["99.99%","SLA"],["<3 min","time to first scan"]].map(([k,v])=>(
                <div key={k}>
                  <div className="font-display text-2xl font-bold">{k}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code card */}
          <div className="ink-shadow col-span-12 rounded-2xl border border-foreground bg-foreground p-1 text-background lg:col-span-4">
            <div className="rounded-xl bg-foreground p-5">
              <div className="flex items-center justify-between font-mono text-[11px] text-background/60">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral"/>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent"/>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan"/>
                </div>
                <span>scanner.ts</span>
              </div>
              <pre className="mt-4 overflow-x-auto font-mono text-[12.5px] leading-relaxed">
<span className="text-background/50">// 4 lines. That's it.</span>{"\n"}
<span className="text-cyan">import</span> {`{ ScanPro }`} <span className="text-cyan">from</span> <span className="text-accent">"@ctas/scanpro"</span>{"\n"}{"\n"}
<span className="text-cyan">const</span> scan = <span className="text-cyan">await</span> ScanPro.<span className="text-accent">decode</span>(frame){"\n"}
<span className="text-cyan">if</span> (scan.ok) emit(scan.gtin, scan.lot){"\n"}{"\n"}
<span className="text-background/50">{`// → { gtin: "5901234123457",`}</span>{"\n"}
<span className="text-background/50">{`//     lot: "A88-7", ms: 17 }`}</span>
              </pre>
              <div className="mt-4 flex gap-2 font-mono text-[10px]">
                {["TS","Swift","Kotlin","Python","Go"].map(l=>(
                  <span key={l} className="rounded border border-background/30 px-2 py-1">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
