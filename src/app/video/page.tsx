"use client";

// Halaman render video portfolio (sekitar 60 detik, 1920x1080). Tidak ditautkan dari menu.
// Semua keadaan dihitung dari window.__seek(t), sama seperti video gig Fastwork, lalu dirender
// jadi MP4 oleh portfolio-decks/_tools/render-video.mjs. Buka /video untuk pratinjau berjalan,
// atau /video?t=12.5 untuk membekukan satu detik.
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { SCENES } from "@/components/ProjectShowcase";
import { back, clamp, eo, lerp, p, pop } from "@/components/motion/easing";

const W = 1920, H = 1080;
const INTRO = 8, BLOCK = 10, OUTRO = 12;
const VIDEO_DURATION = INTRO + BLOCK * SCENES.length + OUTRO; // 60 detik

function Words({ text, t, at, size, weight = 800, color = "#1A1A1A", accent }: { text: string; t: number; at: number; size: number; weight?: number; color?: string; accent?: string }) {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: size, fontWeight: weight, color, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
      {text.split(" ").map((w, i) => {
        const a = at + i * 0.08, k = back(p(t, a, 0.5), 1.4), b = (1 - eo(p(t, a, 0.35))) * 10;
        return (
          <span key={i} style={{ display: "inline-block", marginRight: "0.25em", opacity: p(t, a, 0.2), transform: `translateY(${(1 - k) * 46}px)`, filter: b > 0.05 ? `blur(${b}px)` : "none", color: accent && w.replace(/[.,]/g, "") === accent ? "#F97316" : undefined }}>{w}</span>
        );
      })}
    </div>
  );
}

function Background() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(1100px 700px at 85% 5%, rgba(249,115,22,.20), transparent 60%), radial-gradient(900px 600px at 0% 100%, rgba(234,88,12,.12), transparent 60%), #FFF8F0" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(234,88,12,.13) 1.4px, transparent 1.4px)", backgroundSize: "34px 34px" }} />
    </div>
  );
}

function Intro({ t }: { t: number }) {
  const stats: [number, string][] = [[100, "deliverables shipped"], [70, "client projects"], [2, "years with clients"]];
  return (
    <div style={{ position: "absolute", left: 160, top: 210 }}>
      <div style={{ ...pop(t, 0.2), display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #FED7AA", borderRadius: 999, padding: "10px 20px", fontSize: 24, fontWeight: 600, color: "#C2410C", marginBottom: 34 }}>
        <span style={{ width: 12, height: 12, borderRadius: 6, background: "#22C55E" }} /> AI &amp; Automation Engineer · Indonesia
      </div>
      <Words text="Ferri Krisdiantoro." t={t} at={0.5} size={124} accent="Krisdiantoro" />
      <div style={{ marginTop: 26 }}><Words text="WhatsApp AI agents, automations, and web apps for real businesses." t={t} at={1.4} size={44} weight={600} color="#4B5563" /></div>
      <div style={{ display: "flex", gap: 28, marginTop: 70 }}>
        {stats.map(([n, l], i) => (
          <div key={l} style={{ background: "#fff", border: "1px solid #F0E8E1", borderRadius: 28, padding: "26px 36px", minWidth: 330, boxShadow: "0 30px 60px -30px rgba(124,45,18,.35)", ...pop(t, 3 + i * 0.25) }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: 76, fontWeight: 800 }}>{Math.round(n * eo(p(t, 3.2 + i * 0.25, 1.6)))}+</div>
            <div style={{ fontSize: 24, fontWeight: 600, color: "#8A8178", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Block({ i, t }: { i: number; t: number }) {
  const s = SCENES[i];
  const st = t - 1.2; // adegan mulai setelah judul muncul
  const scale = 1.42;
  return (
    <>
      <div style={{ position: "absolute", left: 160, top: 70, width: 1600, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ ...pop(t, 0.05), fontSize: 26, fontWeight: 700, letterSpacing: "0.14em", color: "#F97316", textTransform: "uppercase", marginBottom: 8 }}>
            {String(i + 1).padStart(2, "0")} · {s.label}
          </div>
          <Words text={s.project} t={t} at={0.15} size={58} />
        </div>
        <div style={{ ...pop(t, 0.6), maxWidth: 560, fontSize: 26, lineHeight: 1.4, color: "#4B5563", textAlign: "right" }}>{s.caption}</div>
      </div>
      <div style={{ position: "absolute", left: (W - 960 * scale) / 2, top: 245, width: 960 * scale, height: 540 * scale, borderRadius: 36, overflow: "hidden", border: "1px solid #FED7AA", background: "radial-gradient(700px 400px at 85% 0%, rgba(249,115,22,.14), transparent 60%), #FFF8F0", boxShadow: "0 50px 100px -50px rgba(124,45,18,.45)", ...pop(t, 0.5, { dy: 60, s0: 0.92, d: 0.9 }) }}>
        <div style={{ width: 960, height: 540, transform: `scale(${scale})`, transformOrigin: "top left", fontFamily: "Inter, sans-serif", color: "#1A1A1A" }}>
          {s.render(clamp(st, 0, 6.4))}
        </div>
      </div>
    </>
  );
}

function Outro({ t }: { t: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <Words text="Got a process that eats your team's time?" t={t} at={0.3} size={84} accent="time?" />
      <div style={{ marginTop: 28 }}><Words text="I'll show you how I'd automate it." t={t} at={1.4} size={44} weight={600} color="#4B5563" /></div>
      <div style={{ display: "flex", gap: 24, marginTop: 70 }}>
        {[["Portfolio", "portfolio-ferrikrisdiantoro.vercel.app"], ["WhatsApp", "+62 853 5116 8279"]].map(([l, v], i) => (
          <div key={l} style={{ background: i ? "#fff" : "#F97316", color: i ? "#1A1A1A" : "#fff", border: "1px solid #FED7AA", borderRadius: 24, padding: "22px 34px", textAlign: "left", ...pop(t, 2.6 + i * 0.25) }}>
            <div style={{ fontSize: 22, fontWeight: 600, opacity: 0.8 }}>{l}</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: 36, fontWeight: 800 }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ ...pop(t, 3.6), marginTop: 60, fontFamily: "'Plus Jakarta Sans'", fontSize: 40, fontWeight: 800 }}>Ferri<span style={{ color: "#F97316" }}>.</span></div>
    </div>
  );
}

/** Keadaan video pada detik t */
function Frame({ t }: { t: number }) {
  const scenes: { from: number; dur: number; el: (lt: number) => React.ReactNode }[] = [
    { from: 0, dur: INTRO, el: (lt) => <Intro t={lt} /> },
    ...SCENES.map((_, i) => ({ from: INTRO + i * BLOCK, dur: BLOCK, el: (lt: number) => <Block i={i} t={lt} /> })),
    { from: INTRO + SCENES.length * BLOCK, dur: OUTRO, el: (lt) => <Outro t={lt} /> },
  ];
  return (
    <div style={{ position: "relative", width: W, height: H, overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Background />
      {scenes.map((s, i) => {
        const lt = t - s.from;
        if (lt < -0.5 || lt > s.dur + 0.5) return null;
        // keluar: memudar + sedikit naik; masuk: dikerjakan oleh pop di dalam adegan
        const out = i < scenes.length - 1 ? p(lt, s.dur - 0.45, 0.45) : 0;
        if (lt < 0) return null;
        return <div key={i} style={{ position: "absolute", inset: 0, opacity: 1 - out, transform: `translateY(${lerp(0, -30, eo(out))}px)`, filter: out > 0.05 ? `blur(${out * 8}px)` : "none" }}>{s.el(lt)}</div>;
      })}
    </div>
  );
}

// Isyarat efek suara (dibaca render-video.mjs --audio-cues), selaras dengan kejadian di adegan.
// Waktu adegan s dalam blok i = INTRO + i*BLOCK + 1.2 + s.
type Cue = { t: number; sfx: "type" | "pop" | "ding" | "whoosh" | "tick" | "hit"; gain?: number };
const at = (i: number, s: number) => INTRO + i * BLOCK + 1.2 + s;
const CUES: Cue[] = [
  { t: 0.3, sfx: "whoosh", gain: 0.6 }, { t: 0.6, sfx: "pop" }, { t: 3.0, sfx: "pop" }, { t: 3.25, sfx: "pop" }, { t: 3.5, sfx: "pop" },
  ...SCENES.map((_, i) => ({ t: INTRO + i * BLOCK - 0.1, sfx: "whoosh" as const, gain: 0.7 })),
  // koperasi: gelembung chat lalu pembayaran masuk
  ...[0.3, 1.6, 2.7, 4.2].map((s) => ({ t: at(0, s), sfx: "pop" as const, gain: 0.8 })), { t: at(0, 4.3), sfx: "ding", gain: 0.7 },
  // otomasi: simpul menyala satu per satu, laporan terkirim
  ...[0, 1, 2, 3].map((n) => ({ t: at(1, 0.4 + n * 0.9), sfx: "tick" as const })), { t: at(1, 3.6), sfx: "ding", gain: 0.6 },
  // vision: kotak deteksi; pelanggaran memakai "hit"
  ...[0.9, 1.2, 1.4, 1.8].map((s) => ({ t: at(2, s), sfx: "tick" as const, gain: 0.7 })), { t: at(2, 1.6), sfx: "hit", gain: 0.6 }, { t: at(2, 2.0), sfx: "hit", gain: 0.5 },
  // dompet: ketik nominal, pilih kategori, tersimpan
  ...[0.5, 0.9, 1.3, 1.9].map((s) => ({ t: at(3, s), sfx: "type" as const })), { t: at(3, 3.0), sfx: "pop" }, { t: at(3, 3.6), sfx: "type" }, { t: at(3, 4.0), sfx: "ding", gain: 0.6 },
  // penutup
  { t: INTRO + SCENES.length * BLOCK - 0.1, sfx: "whoosh", gain: 0.7 },
  ...[2.6, 2.85, 3.6].map((s) => ({ t: INTRO + SCENES.length * BLOCK + s, sfx: "pop" as const })),
];

declare global { interface Window { __seek?: (t: number) => void; __ready?: Promise<void>; __cues?: Cue[]; __dur?: number } }

export default function VideoPage() {
  const [t, setT] = useState(0);
  const [k, setK] = useState(1);
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const render = q.get("render") === "1";
    const fixed = q.get("t");
    const fit = () => setK(render ? Number(q.get("w") || W) / W : Math.min(innerWidth / W, innerHeight / H));
    fit(); addEventListener("resize", fit);
    window.__seek = (s: number) => flushSync(() => setT(s));
    window.__cues = CUES;
    window.__dur = VIDEO_DURATION;
    window.__ready = document.fonts.ready.then(() => undefined);
    let raf = 0;
    if (fixed !== null) setT(Number(fixed));
    else if (!render) {
      const t0 = performance.now();
      const tick = (now: number) => { setT(((now - t0) / 1000) % VIDEO_DURATION); raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", fit); };
  }, []);
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#111", overflow: "hidden" }}>
      <div style={{ width: W, height: H, transform: `scale(${k})`, transformOrigin: "top left" }}>
        <Frame t={t} />
      </div>
    </div>
  );
}
