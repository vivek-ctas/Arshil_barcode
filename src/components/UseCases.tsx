const cases = [
  {tag:"Warehouse", title:"Receiving without the bottleneck",
    body:"Snap a pallet — 80 cartons identified, weighed against PO and routed before the forklift moves.",
    metric:"−43%", metricLabel:"dock dwell time",
    icon:(
      <svg viewBox="0 0 120 80" className="w-full">
        <rect x="2" y="50" width="116" height="2" className="fill-foreground"/>
        {[10,30,50,70,90].map(x=><rect key={x} x={x} y="30" width="20" height="20" fill="none" className="stroke-foreground" strokeWidth="1.5"/>)}
        {[10,30,50,70,90].map(x=><rect key={x} x={x+4} y="34" width="12" height="12" fill="oklch(0.88 0.22 130)"/>)}
        <path d="M0 60 L120 60" strokeDasharray="3 3" className="stroke-foreground/40"/>
      </svg>
    )},
  {tag:"Retail", title:"Self-checkout that doesn't argue",
    body:"Bent labels, water rings, sun-bleached promo stickers — keep the line moving.",
    metric:"99.4%", metricLabel:"first-scan success",
    icon:(
      <svg viewBox="0 0 120 80" className="w-full">
        <rect x="20" y="20" width="60" height="40" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        {[26,32,38,44,50].map(x=><rect key={x} x={x} y="26" width="2" height="28" className="fill-foreground"/>)}
        <rect x="56" y="26" width="4" height="28" className="fill-foreground"/>
        <circle cx="95" cy="40" r="14" fill="oklch(0.78 0.16 215)" opacity="0.3"/>
        <circle cx="95" cy="40" r="6" className="fill-foreground"/>
      </svg>
    )},
  {tag:"Logistics", title:"Sort smarter at line speed",
    body:"OCR + barcode fusion across belt cameras. Misreads route to manual — not customers.",
    metric:"412/s", metricLabel:"sustained throughput",
    icon:(
      <svg viewBox="0 0 120 80" className="w-full">
        <path d="M0 50 L120 50" className="stroke-foreground" strokeWidth="2"/>
        <path d="M0 56 L120 56" className="stroke-foreground/50" strokeWidth="1" strokeDasharray="4 3"/>
        {[15,55,95].map((x,i)=>(
          <g key={x}>
            <rect x={x-12} y="30" width="24" height="18" className="fill-card stroke-foreground" strokeWidth="1.5"/>
            <rect x={x-8} y="34" width="16" height="10" fill={i===1?"oklch(0.72 0.18 30)":"oklch(0.88 0.22 130)"}/>
          </g>
        ))}
        <circle cx="105" cy="20" r="3" className="fill-foreground"/>
        <path d="M105 20 L95 35" className="stroke-foreground" strokeWidth="1"/>
      </svg>
    )},
  {tag:"Healthcare", title:"GS1 with audit-grade trace",
    body:"Lot, expiry, serial captured on first scan — DSCSA & UDI ready out of the box.",
    metric:"FDA", metricLabel:"DSCSA compliant",
    icon:(
      <svg viewBox="0 0 120 80" className="w-full">
        <rect x="20" y="15" width="80" height="50" rx="4" className="fill-card stroke-foreground" strokeWidth="1.5"/>
        <path d="M55 25 L65 25 M55 30 L75 30 M55 35 L70 35" className="stroke-foreground" strokeWidth="1.5"/>
        <g transform="translate(30,40)">
          {Array.from({length:6}).map((_,i)=>(
            <g key={i} transform={`translate(${i*8},0)`}>
              {Array.from({length:6}).map((_,j)=>(
                ((i+j)%2===0) && <rect key={j} x={j*3} y={i*3} width="3" height="3" className="fill-foreground"/>
              ))}
            </g>
          ))}
        </g>
      </svg>
    )},
];

export function UseCases() {
  return (
    <section className="border-b border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 04 — Where it ships</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">Works everywhere a label has to be read.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((c,i)=>(
            <div key={c.tag} className="ink-shadow-sm group flex flex-col rounded-2xl border border-foreground bg-card p-5 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-foreground bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider">{c.tag}</span>
                <span className="font-mono text-[10px] text-muted-foreground">0{i+1}/04</span>
              </div>
              <div className="mt-4 rounded-lg border border-foreground bg-secondary p-3">{c.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <div className="mt-auto pt-4">
                <div className="border-t border-dashed pt-3">
                  <div className="font-display text-2xl font-bold">{c.metric}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
