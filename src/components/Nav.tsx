import { Barcode } from "./Barcode";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
            <Barcode seed="LOGO-001" height={20} className="h-4 w-5 text-background" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">ScanPro<span className="text-muted-foreground">/CTAS</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <a href="#capabilities" className="hover:text-foreground/70">Capabilities</a>
          <a href="#speed" className="hover:text-foreground/70">Speed</a>
          <a href="#pipeline" className="hover:text-foreground/70">Pipeline</a>
          <a href="#security" className="hover:text-foreground/70">Security</a>
          <a href="#changelog" className="hover:text-foreground/70">Changelog</a>
          <a href="#pricing" className="hover:text-foreground/70">Pricing</a>
          <a href="#faq" className="hover:text-foreground/70">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary md:inline-block">Docs</a>
          <a href="#pricing" className="ink-shadow-sm inline-flex items-center gap-2 rounded-md border border-foreground bg-accent px-4 py-2 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5">
            Get API key →
          </a>
        </div>
      </div>
    </header>
  );
}
