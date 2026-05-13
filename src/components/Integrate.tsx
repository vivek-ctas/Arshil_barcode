const steps = [
  {n:"01", t:"Capture or upload", d:"Camera frame, image upload, PDF page or live MQTT feed — same input shape."},
  {n:"02", t:"Detect", d:"Multi-model locate finds every code in the frame, even tilted or partial."},
  {n:"03", t:"Decode", d:"Symbol-aware engine resolves the bits, with confidence + region returned."},
  {n:"04", t:"Deliver", d:"Webhook, SDK callback, MQTT topic, or direct push to your warehouse system."},
];

export function Integrate() {
  return (
    <section id="integrate" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between border-b border-foreground pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 05 — Integrate in minutes</div>
            <h2 className="mt-2 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-5xl">From npm install to first decode in under three minutes.</h2>
          </div>
        </div>

        <ol className="mt-12 grid gap-0">
          {steps.map((s,i)=>(
            <li key={s.n} className="grid grid-cols-12 items-start gap-6 border-t border-border py-8 first:border-t-0">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">step</div>
                <div className="font-display text-5xl font-bold tracking-tight">{s.n}</div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-display text-2xl font-bold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="rounded-xl border border-foreground bg-foreground p-4 font-mono text-[12px] text-background">
                  {i===0 && <><span className="text-background/50">$</span> npm i <span className="text-accent">@ctas/scanpro</span></>}
                  {i===1 && <><span className="text-cyan">const</span> regions = <span className="text-cyan">await</span> sp.locate(frame)</>}
                  {i===2 && <><span className="text-cyan">const</span> codes = regions.map(sp.decode)</>}
                  {i===3 && <>sp.on(<span className="text-accent">"scan"</span>, e {`=>`} webhook(e))</>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
