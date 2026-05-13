const faqs = [
  {
    q: "How is ScanPro faster than the SDK we already pay for?",
    a: "Two reasons. First, our locator is a single-pass neural model instead of a cascade of classical filters — that alone removes ~30 ms on commodity hardware. Second, we decode and parse in the same memory buffer, so we skip the costly serialization step legacy SDKs use to hand data between native modules. The result is consistently 2–3× faster on identical phones.",
  },
  {
    q: "Does it really run offline?",
    a: "Yes. The full decode engine ships as a 1.4 MB WASM module that runs entirely in the browser, the React Native bridge, or natively on iOS/Android. Cloud is only used when you opt-in — for batch reconciliation, model retraining, or auditing. Disconnected handhelds in a freezer warehouse are a first-class use case.",
  },
  {
    q: "What symbologies are supported?",
    a: "All 37 in active commercial use: every linear (EAN/UPC, Code 39/93/128, Codabar, ITF, MSI, Pharmacode), every 2D (QR, Data Matrix, PDF417, Aztec, MaxiCode, DotCode), every postal (USPS, Royal Mail, Australia Post, KIX, Japan Post) and the GS1 composite family. Auto-detected — no per-symbol config required.",
  },
  {
    q: "How do you handle damaged or partial labels?",
    a: "Our recovery model was trained on 14M real-world frames from logistics, retail and pharma — including torn corners, water damage, sun glare, fold lines, motion blur and partial occlusion. When confidence drops below threshold, ScanPro returns a confidence score and the bounding region so you can route it to manual review instead of guessing.",
  },
  {
    q: "What does a typical integration look like?",
    a: "npm install, four lines of code, and you're decoding. Most teams ship a working prototype in an afternoon and reach production within a week. We include reference apps for React, React Native, Swift, Kotlin and a backend Go server — and a sandbox environment with 10k free monthly scans.",
  },
  {
    q: "How does pricing work at scale?",
    a: "Scan-based, not seat-based. You pay for successful decodes, billed monthly. Failed scans, retries and dev-environment scans are free. Volume tiers kick in automatically above 1M / month — most enterprise customers land at 30–60% below their previous spend.",
  },
  {
    q: "Can we self-host?",
    a: "Yes. ScanPro ships as a single Helm chart for Kubernetes, runs on AWS / GCP / Azure or bare-metal, and supports air-gapped deployments. Self-host customers get the same release cadence as our cloud and a dedicated solutions engineer.",
  },
  {
    q: "What happens if a decode is wrong?",
    a: "Every decode includes a confidence score and a region polygon. Below 0.92 we recommend routing to a secondary review. Our published false-positive rate is 1 in 1.4 million — but you should never trust a single signal in safety-critical workflows, and our docs are blunt about that.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">§ 11 — Frequently asked</div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Questions buyers actually ask before signing.</h2>
            <p className="mt-4 text-muted-foreground">Straight answers, no marketing varnish. If you want the long version of any of these, the docs page on each topic links from the answer.</p>
            <div className="ink-shadow-sm mt-8 rounded-xl border border-foreground bg-card p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Still weighing it?</div>
              <div className="mt-1 font-display text-lg font-bold">Book a 20-minute architecture review.</div>
              <p className="mt-1 text-sm text-muted-foreground">A solutions engineer will walk through your scan pipeline and benchmark on your worst frames — live.</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-md border border-foreground bg-accent px-4 py-2 text-sm font-bold">Book a call →</a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="grid gap-3">
              {faqs.map((f, i) => (
                <li key={f.q} className="group rounded-2xl border border-foreground bg-card open:bg-secondary/40">
                  <details open={i < 2}>
                    <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 list-none">
                      <div className="flex gap-4">
                        <span className="font-mono text-xs text-muted-foreground">Q.{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-display text-lg font-bold">{f.q}</span>
                      </div>
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-foreground bg-background font-mono text-sm">+</span>
                    </summary>
                    <div className="border-t border-border px-5 pb-5 pt-4 text-sm text-muted-foreground">{f.a}</div>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
