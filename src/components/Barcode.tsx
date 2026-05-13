type Props = { seed?: string; height?: number; className?: string };

// Deterministic pseudo-barcode (variable-width bars)
export function Barcode({ seed = "CTAS-SCAN-PRO", height = 64, className = "" }: Props) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const bars: { x: number; w: number }[] = [];
  let x = 0;
  for (let i = 0; i < 60; i++) {
    h = (h * 1664525 + 1013904223) >>> 0;
    const w = ((h >>> 8) % 4) + 1;
    const gap = ((h >>> 4) % 3) + 1;
    bars.push({ x, w });
    x += w + gap;
  }
  return (
    <svg viewBox={`0 0 ${x} ${height}`} className={className} preserveAspectRatio="none" aria-hidden>
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}
