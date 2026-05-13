import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Speed } from "@/components/Speed";
import { Stats } from "@/components/Stats";
import { Pipeline } from "@/components/Pipeline";
import { Compare } from "@/components/Compare";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { Integrate } from "@/components/Integrate";
import { Security } from "@/components/Security";
import { Changelog } from "@/components/Changelog";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTAFooter } from "@/components/CTAFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ScanPro — Decode any barcode in real-world conditions" },
      { name: "description", content: "ScanPro reads crumpled, blurry, sun-glared and partial barcodes at 18ms median latency. 37 symbologies, on-device or cloud, drop-in SDK trusted by 230+ operators." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Capabilities />
      <Speed />
      <Stats />
      <Pipeline />
      <Compare />
      <UseCases />
      <Testimonials />
      <Integrate />
      <Security />
      <Changelog />
      <Pricing />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
