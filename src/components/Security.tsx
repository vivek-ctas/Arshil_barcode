// Trust, security & compliance section
export function Security() {
  const badges = [
    { k: "SOC 2 · Type II", d: "Annually audited by an independent CPA firm.", c: "bg-accent text-foreground" },
    { k: "HIPAA", d: "BAAs available for all healthcare and pharma deployments.", c: "bg-cyan/30 text-foreground" },
    { k: "GDPR · UK-DPA", d: "EU + UK data residency, DSAR tooling, 0-day retention mode.", c: "bg-violet/25 text-foreground" },
    { k: "DSCSA · UDI", d: "Track-and-trace ready for FDA serialization mandates.", c: "bg-coral/25 text-foreground" },
  ];
  const features = [
    { t: "On-device by default", d: "The decode engine runs in WASM on the client. Frames never leave the device unless you say so." },
    { t: "Zero-retention mode", d: "Toggle and we delete every payload within 60 seconds of acknowledgment. Audit log proves it." },
    { t: "AES-256 + TLS 1.3", d: "All data at rest and in transit. Customer-managed keys via AWS KMS or GCP CMEK." },
    { t: "Fine-grained RBAC", d: "Per-tenant, per-key scope: read / decode / admin. SAML + SCIM included." },
    { t: "Self-host / VPC", d: "Ship the entire stack inside your own AWS, GCP, Azure or on-prem Kubernetes." },
    { t: "Signed audit log", d: "Every decode, key rotation and config change is hash-chained and exportable to your SIEM." },
  ];
  return (
    <section id="security" className="border-b border-border bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent">§ 09 — Trust & compliance</div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Built for the regulators sitting <span className="bg-accent px-2 text-foreground">two desks down.</span>
            </h2>
            <p className="mt-4 text-background/70">Scanning sits between physical inventory and your system of record — which means it sits squarely in scope for audit. ScanPro was designed by a team that's been on the wrong side of that audit before.</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {badges.map((b) => (
                <div key={b.k} className={`rounded-xl border border-background/20 p-4 ${b.c}`}>
                  <div className="font-display text-lg font-bold">{b.k}</div>
                  <div className="mt-1 text-xs">{b.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-background/30 bg-background/30">
              {features.map((f, i) => (
                <div key={f.t} className="grid grid-cols-12 gap-4 bg-foreground p-5">
                  <div className="col-span-1 font-mono text-xs text-accent">0{i + 1}</div>
                  <div className="col-span-11">
                    <h3 className="font-display text-lg font-bold">{f.t}</h3>
                    <p className="mt-1 text-sm text-background/70">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-background/60">
              {["ISO 27001 (in progress)", "PCI L4", "CSA STAR", "FedRAMP-ready", "21 CFR Part 11", "WCAG 2.2 AA"].map((b) => (
                <span key={b} className="rounded border border-background/30 px-2 py-1">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
