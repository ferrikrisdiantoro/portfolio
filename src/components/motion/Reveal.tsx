"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

/** Benar kalau elemen sudah pernah terlihat di layar (sekali saja) atau pengguna minta kurangi gerakan */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

/** Kartu atau blok yang "memantul" masuk saat di-scroll. `index` memberi jeda berurutan. */
export function Reveal({ children, index = 0, className = "", as: Tag = "div" }: { children: ReactNode; index?: number; className?: string; as?: ElementType }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <Tag ref={ref} className={`${className} ${seen ? "reveal-in" : "reveal-out"}`} style={{ animationDelay: `${index * 80}ms` }}>
      {children}
    </Tag>
  );
}

/** Judul yang muncul kata per kata dengan blur menajam */
export function WordsIn({ text, className = "", accent }: { text: string; className?: string; accent?: string }) {
  const [ref, seen] = useInView<HTMLHeadingElement>();
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className={`inline-block ${seen ? "word-in" : "word-out"} ${accent && w.replace(/[.,]/g, "") === accent ? "text-primary" : ""}`}
          style={{ animationDelay: `${i * 70}ms` }}>
          {w}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h2>
  );
}

/** Angka yang berhitung naik saat terlihat. Akhiran (misalnya "+") ikut ditampilkan. */
export function CountUp({ to, suffix = "", duration = 1.4 }: { to: number; suffix?: string; duration?: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / (duration * 1000));
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{v}{suffix}</span>;
}
