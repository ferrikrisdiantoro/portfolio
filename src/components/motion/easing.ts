// Easing yang sama dengan animasi video gig Fastwork (portfolio-decks/ml/video-ml-v3.js).
export const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a: number, b: number, k: number) => a + (b - a) * k;
/** Progres 0..1 dari detik `a` selama `d` detik */
export const p = (t: number, a: number, d: number) => clamp((t - a) / d);
export const eo = (x: number) => 1 - Math.pow(1 - clamp(x), 3);
export const eio = (x: number) => { x = clamp(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
export const back = (x: number, c = 1.70158) => { x = clamp(x); return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
export const spring = (x: number) => { x = clamp(x); return x >= 1 ? 1 : 1 - Math.exp(-7 * x) * Math.cos(2 * Math.PI * 1.6 * x); };

/** Gaya "muncul memantul" pada detik a (blur menajam + naik + skala) */
export function pop(t: number, a: number, { dy = 24, s0 = 0.85, d = 0.7 } = {}) {
  const k = spring(p(t, a, d));
  const b = (1 - eo(p(t, a, 0.3))) * 6;
  return {
    opacity: p(t, a, 0.15),
    transform: `translateY(${(1 - k) * dy}px) scale(${lerp(s0, 1, k)})`,
    filter: b > 0.05 ? `blur(${b.toFixed(2)}px)` : "none",
  } as const;
}

export const rupiah = (n: number) => "Rp" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
