import { useEffect, useRef } from "react";

import ffxivRaw      from "../imports/ffxivmeteo-svgrepo-com.svg?raw";
import pokeballRaw   from "../imports/pokeball-pokemon-catch-svgrepo-com.svg?raw";
import triforceRaw   from "../imports/triforce-svgrepo-com.svg?raw";
import creeperRaw    from "../imports/emoji-minecraft-simple-464-svgrepo-com.svg?raw";
import mushroomUrl   from "../imports/toppng.com-file-novosel-mushroom-svg-mario-mushroom-ico-1961x1951.png";
import kingdomHearts from "../imports/Kingdom_Hearts_logo.svg?raw";
import halfLifeRaw   from "../imports/Half-Life_Lambda.svg?raw";
import portalRaw     from "../imports/Portal.svg?raw";
import jackFrostRaw  from "../imports/JackFrost.svg?raw";
import twewyRaw      from "../imports/Twewy.svg?raw";
import megamanRaw    from "../imports/Megaman.svg?raw";
import hollowKnightRaw from "../imports/HollowKnight.svg?raw";
import undertaleRaw  from "../imports/UndetaleSVG.svg?raw";

const BLUE = "#135090";
const BLUE_RGBA = "19,80,144";

function recolorSvg(svg: string): string {
  return svg
    .replace(/fill="#000000"/gi,    `fill="${BLUE}"`)
    .replace(/fill="#000"/gi,       `fill="${BLUE}"`)
    .replace(/fill="black"/gi,      `fill="${BLUE}"`)
    .replace(/stroke="#000000"/gi,  `stroke="${BLUE}"`)
    .replace(/stroke="#000"/gi,     `stroke="${BLUE}"`)
    .replace(/fill:#000000/gi,      `fill:${BLUE}`)
    .replace(/fill:#000\b/gi,       `fill:${BLUE}`)
    .replace(/fill:black/gi,        `fill:${BLUE}`)
    .replace(/stroke:#000000/gi,    `stroke:${BLUE}`)
    .replace(/stroke:#000\b/gi,     `stroke:${BLUE}`);
}

async function svgToBitmap(raw: string): Promise<ImageBitmap> {
  const blob = new Blob([recolorSvg(raw)], { type: "image/svg+xml" });
  const url  = URL.createObjectURL(blob);
  const img  = new Image();
  img.src    = url;
  await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); });
  URL.revokeObjectURL(url);
  return createImageBitmap(img);
}

async function pngToTintedBitmap(src: string): Promise<ImageBitmap> {
  const img = new Image();
  img.src   = src;
  await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); });
  return await tintImageToBlue(img);
}

async function svgRasterToTintedBitmap(raw: string): Promise<ImageBitmap> {
  const blob = new Blob([raw], { type: "image/svg+xml" });
  const url  = URL.createObjectURL(blob);
  const img  = new Image();
  img.src    = url;
  await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); });
  URL.revokeObjectURL(url);
  return tintImageToBlue(img);
}

async function tintImageToBlue(img: HTMLImageElement): Promise<ImageBitmap> {
  const c   = document.createElement("canvas");
  c.width   = 256; c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.drawImage(img, 0, 0, 256, 256);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = BLUE;
  ctx.fillRect(0, 0, 256, 256);
  return createImageBitmap(c);
}

// ── Noise ─────────────────────────────────────────────────────────────────────
function noise(x: number, y: number, t: number): number {
  return (
    Math.sin(x * 0.016 + t * 0.38) * Math.cos(y * 0.013 + t * 0.24) * 0.42 +
    Math.sin(x * 0.027 + y * 0.019 + t * 0.61) * 0.28 +
    Math.cos(x * 0.011 - y * 0.023 + t * 0.17) * 0.22 +
    Math.sin(x * 0.046 + y * 0.035 + t * 0.82) * 0.11 +
    Math.cos(x * 0.007 + y * 0.005 - t * 0.09) * 0.07
  );
}

// Edges: 0=top(TL→TR) 1=right(TR→BR) 2=bottom(BL→BR) 3=left(TL→BL)
// Index bits: TL=3 TR=2 BR=1 BL=0
const SEGS: number[][][] = [
  [], [[2,3]], [[1,2]], [[1,3]],
  [[0,1]], [[0,1],[2,3]], [[0,2]], [[0,3]],
  [[0,3]], [[0,2]], [[0,3],[1,2]], [[0,1]],
  [[1,3]], [[1,2]], [[2,3]], [],
];

function edgePt(e: number, cx: number, cy: number, s: number,
  tl: number, tr: number, br: number, bl: number, th: number): [number, number] {
  const f = (a: number, b: number) =>
    Math.abs(b - a) < 1e-9 ? 0.5 : Math.max(0, Math.min(1, (th - a) / (b - a)));
  switch (e) {
    case 0: return [cx + f(tl, tr) * s, cy];
    case 1: return [cx + s,             cy + f(tr, br) * s];
    case 2: return [cx + f(bl, br) * s, cy + s];
    case 3: return [cx,                 cy + f(tl, bl) * s];
    default: return [cx, cy];
  }
}

// ── Icon lifecycle ────────────────────────────────────────────────────────────
interface IconInst {
  bmp: ImageBitmap;
  x: number; y: number; r: number;
  opacity: number;
  phase: "in" | "hold" | "out";
  holdFrames: number;
}

const STEP       = 13;
const LEVELS     = 16;
const SPEED      = 0.00022;
const BG         = "28,28,28";
const FADE_RATE  = 0.007;
const MAX_ICONS  = 3;
const MIN_GUTTER = 60;

function spawnIcon(W: number, H: number, pool: ImageBitmap[], existing: IconInst[]): IconInst | null {
  if (pool.length === 0) return null;
  const contentW = Math.min(W, 1300);
  const gutterW  = (W - contentW) / 2;
  if (gutterW < MIN_GUTTER) return null;

  const r      = Math.min(gutterW * 0.52, 70);
  const side   = Math.random() < 0.5 ? "left" : "right";
  const margin = r + 8;
  const x = side === "left"
    ? margin + Math.random() * Math.max(0, gutterW - margin * 2)
    : W - margin - Math.random() * Math.max(0, gutterW - margin * 2);
  const y = margin + Math.random() * (H - margin * 2);

  for (const ic of existing) {
    const dx = ic.x - x, dy = ic.y - y;
    if (Math.sqrt(dx * dx + dy * dy) < (ic.r + r) * 2.2) return null;
  }

  // Build a pool excluding bitmaps already visible, then fall back to full pool
  const inUse = new Set(existing.map(ic => ic.bmp));
  const available = pool.filter(bmp => !inUse.has(bmp));
  const candidates = available.length > 0 ? available : pool;

  // Shuffle candidates and pick one that wasn't recently used
  const idx = Math.floor(Math.random() * candidates.length);

  return {
    bmp: candidates[idx],
    x, y, r,
    opacity: 0,
    phase: "in",
    holdFrames: 300 + Math.floor(Math.random() * 240),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────
export function TopoBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const rafRef     = useRef<number>(0);
  const iconsRef   = useRef<IconInst[]>([]);
  const poolRef    = useRef<ImageBitmap[]>([]);
  const cooldownRef = useRef(180);

  useEffect(() => {
    Promise.allSettled([
      svgToBitmap(ffxivRaw),
      svgToBitmap(pokeballRaw),
      svgToBitmap(triforceRaw),
      svgToBitmap(creeperRaw),
      svgRasterToTintedBitmap(kingdomHearts),
      pngToTintedBitmap(mushroomUrl),
      svgToBitmap(halfLifeRaw),
      svgRasterToTintedBitmap(portalRaw),
      svgRasterToTintedBitmap(jackFrostRaw),
      svgRasterToTintedBitmap(twewyRaw),
      svgRasterToTintedBitmap(megamanRaw),
      svgRasterToTintedBitmap(hollowKnightRaw),
      svgRasterToTintedBitmap(undertaleRaw),
    ]).then(results => {
      poolRef.current = results
        .filter(r => r.status === "fulfilled")
        .map(r => (r as PromiseFulfilledResult<ImageBitmap>).value);
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const draw = (ts: number) => {
      const t = ts * SPEED;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── Contour lines ──────────────────────────────────────────────────────
      const cols = Math.ceil(W / STEP) + 2;
      const rows = Math.ceil(H / STEP) + 2;
      const grid: Float32Array[] = Array.from({ length: rows }, (_, r) => {
        const row = new Float32Array(cols);
        for (let c = 0; c < cols; c++) row[c] = noise(c * STEP, r * STEP, t);
        return row;
      });

      const lo = -0.72, hi = 0.72;
      const interval = (hi - lo) / (LEVELS + 1);
      ctx.strokeStyle = `rgba(${BLUE_RGBA},0.3)`;
      ctx.lineWidth   = 0.85;
      ctx.lineCap     = "round";
      ctx.beginPath();

      for (let li = 0; li < LEVELS; li++) {
        const th = lo + interval * (li + 1);
        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const vTL = grid[r][c], vTR = grid[r][c+1];
            const vBR = grid[r+1][c+1], vBL = grid[r+1][c];
            const cx2 = c * STEP, cy2 = r * STEP;
            const idx =
              (vTL >= th ? 8 : 0) | (vTR >= th ? 4 : 0) |
              (vBR >= th ? 2 : 0) | (vBL >= th ? 1 : 0);
            for (const [e1, e2] of SEGS[idx]) {
              const [x1, y1] = edgePt(e1, cx2, cy2, STEP, vTL, vTR, vBR, vBL, th);
              const [x2, y2] = edgePt(e2, cx2, cy2, STEP, vTL, vTR, vBR, vBL, th);
              ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
            }
          }
        }
      }
      ctx.stroke();

      // ── Center mask ────────────────────────────────────────────────────────
      const contentW = Math.min(W, 1300);
      const gutterW  = (W - contentW) / 2;
      const fadeZone = Math.max(gutterW * 0.55, 36);
      const g = ctx.createLinearGradient(0, 0, W, 0);
      const p1 = gutterW / W;
      const p2 = Math.min((gutterW + fadeZone) / W, 0.499);
      const p3 = Math.max(1 - p2, 0.501);
      const p4 = 1 - p1;
      g.addColorStop(0,                       `rgba(${BG},0)`);
      g.addColorStop(Math.max(0, p1 - 0.001), `rgba(${BG},0)`);
      g.addColorStop(Math.min(p2, 0.499),     `rgba(${BG},1)`);
      g.addColorStop(Math.max(p3, 0.501),     `rgba(${BG},1)`);
      g.addColorStop(Math.min(p4 + 0.001, 1), `rgba(${BG},0)`);
      g.addColorStop(1,                       `rgba(${BG},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // ── Icons ──────────────────────────────────────────────────────────────
      cooldownRef.current--;
      if (cooldownRef.current <= 0 && iconsRef.current.length < MAX_ICONS) {
        const inst = spawnIcon(W, H, poolRef.current, iconsRef.current);
        if (inst) { iconsRef.current.push(inst); cooldownRef.current = 220 + Math.floor(Math.random() * 260); }
        else cooldownRef.current = 60;
      }

      iconsRef.current = iconsRef.current.filter(ic => !(ic.phase === "out" && ic.opacity <= 0));
      for (const ic of iconsRef.current) {
        if      (ic.phase === "in")   { ic.opacity = Math.min(1, ic.opacity + FADE_RATE); if (ic.opacity >= 1) ic.phase = "hold"; }
        else if (ic.phase === "hold") { if (--ic.holdFrames <= 0) ic.phase = "out"; }
        else                          { ic.opacity = Math.max(0, ic.opacity - FADE_RATE); }

        ctx.save();
        ctx.globalAlpha = ic.opacity * 0.72;
        ctx.drawImage(ic.bmp, ic.x - ic.r, ic.y - ic.r, ic.r * 2, ic.r * 2);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
