// Sequence diagram + Gantt comparing ScanPro vs typical SDK
export function Speed() {
  return (
    <section id="speed" className="relative overflow-hidden border-b border-border bg-foreground py-24 text-background">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize:"48px 48px"}}/>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-background/30 pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">§ 02 — Speed budget</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">From shutter to SKU in 18 milliseconds.</h2>
          </div>
          <div className="hidden text-right text-xs font-mono text-background/60 md:block">measured · iPhone 13 · 720p frame</div>
        </div>

        {/* Sequence diagram */}
        <div className="mt-12 rounded-2xl border border-background/30 bg-background/[0.04] p-8">
          <div className="mb-6 flex justify-between font-mono text-[11px] uppercase tracking-wider text-background/60">
            <span>seq.diagram · single-frame decode</span>
            <span>total · 17.8 ms</span>
          </div>

          <div className="relative grid grid-cols-5 gap-0">
            {["Camera","Frame Buffer","ScanPro Core","GS1 Parser","Your App"].map((a,i)=>(
              <div key={a} className="text-center">
                <div className="mx-auto inline-block rounded border border-accent bg-foreground px-3 py-1.5 font-mono text-xs text-accent">{a}</div>
                <div className="relative mx-auto mt-2 h-72 w-px bg-background/30">
                  <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(180deg, transparent 0 6px, rgba(255,255,255,0.3) 6px 8px)", backgroundSize:"100% 14px"}}/>
                </div>
              </div>
            ))}

            {/* arrows overlayed */}
            <svg className="pointer-events-none absolute inset-x-0 top-12 h-72 w-full" preserveAspectRatio="none" viewBox="0 0 1000 288">
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.88 0.22 130)"/>
                </marker>
              </defs>
              {[
                {y1:30, x1:100, x2:300, label:"raw frame", t:"2.1 ms"},
                {y1:80, x1:300, x2:500, label:"normalize · deskew", t:"3.4 ms"},
                {y1:130, x1:500, x2:500, label:"locate · decode", t:"8.7 ms", self:true},
                {y1:185, x1:500, x2:700, label:"AI parse", t:"2.0 ms"},
                {y1:235, x1:700, x2:900, label:"webhook · sdk callback", t:"1.6 ms"},
              ].map((m,i)=>(
                <g key={i}>
                  {m.self ? (
                    <path d={`M${m.x1} ${m.y1} q 60 -18 0 36`} fill="none" stroke="oklch(0.88 0.22 130)" strokeWidth="1.5" markerEnd="url(#arr)"/>
                  ) : (
                    <line x1={m.x1} y1={m.y1} x2={m.x2-8} y2={m.y1} stroke="oklch(0.88 0.22 130)" strokeWidth="1.5" markerEnd="url(#arr)"/>
                  )}
                  <text x={(m.x1+m.x2)/2} y={m.y1-6} textAnchor="middle" fontSize="11" fill="white" fontFamily="JetBrains Mono">{m.label}</text>
                  <text x={(m.x1+m.x2)/2} y={m.y1+16} textAnchor="middle" fontSize="10" fill="oklch(0.88 0.22 130)" fontFamily="JetBrains Mono">{m.t}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Gantt comparison */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-background/30 bg-background/[0.04] p-8">
            <div className="mb-4 flex justify-between font-mono text-[11px] uppercase tracking-wider text-background/60">
              <span>gantt · single decode pipeline</span>
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5"><span className="h-2 w-3 bg-accent"/>ScanPro</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-3 bg-coral"/>Legacy SDK</span>
              </div>
            </div>
            {[
              {l:"Acquire", a:[0,8], b:[0,12]},
              {l:"Locate", a:[8,18], b:[12,42]},
              {l:"Decode", a:[18,32], b:[42,84]},
              {l:"Parse", a:[32,38], b:[84,98]},
            ].map((r,i)=>(
              <div key={i} className="grid grid-cols-12 items-center gap-3 border-t border-background/15 py-3 first:border-t-0">
                <div className="col-span-2 font-mono text-xs uppercase text-background/70">{r.l}</div>
                <div className="col-span-10 relative h-7">
                  <div className="absolute inset-0 grid grid-cols-10 gap-px opacity-20">
                    {Array.from({length:10}).map((_,j)=><div key={j} className="bg-background"/>)}
                  </div>
                  <div className="absolute top-0 h-3 bg-accent" style={{left:`${r.a[0]}%`, width:`${r.a[1]-r.a[0]}%`}}/>
                  <div className="absolute bottom-0 h-3 bg-coral" style={{left:`${r.b[0]}%`, width:`${r.b[1]-r.b[0]}%`}}/>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between font-mono text-[11px] text-background/60">
              <span>0 ms</span><span>50 ms</span><span>100 ms</span>
            </div>
          </div>

          <div className="rounded-2xl border border-accent bg-accent p-8 text-foreground">
            <div className="font-mono text-[11px] uppercase tracking-wider">net result</div>
            <div className="mt-2 font-display text-7xl font-bold leading-none">2.6×</div>
            <div className="mt-1 font-display text-2xl font-bold">faster end-to-end.</div>
            <p className="mt-4 text-sm">Same phone. Same network. Same warehouse fluorescent flicker. Just less waiting.</p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center font-mono text-xs">
              {[["18ms","p50"],["31ms","p95"],["67ms","p99"]].map(([k,v])=>(
                <div key={k} className="rounded border border-foreground bg-background p-2">
                  <div className="font-display text-base font-bold">{k}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
