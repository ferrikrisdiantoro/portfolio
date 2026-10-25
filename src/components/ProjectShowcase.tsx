"use client";

// Panggung animasi proyek di Beranda. Gaya sama dengan video gig Fastwork: setiap adegan adalah
// fungsi murni dari waktu `t` (detik), jadi gerakannya konsisten. Berhenti saat tidak terlihat,
// dan tampil diam untuk pengguna yang memilih "kurangi gerakan".
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { back, clamp, eo, lerp, p, pop, rupiah, spring } from "./motion/easing";

const SCENE = 6.5; // detik per adegan
const CW = 960, CH = 540; // kanvas desain, diskalakan ke lebar kontainer

export interface ShowcaseScene { key: string; label: string; project: string; caption: string; render: (t: number) => ReactNode }

// ─── potongan UI ───
const card: CSSProperties = { background: "#fff", border: "1px solid #F0E8E1", borderRadius: 16, boxShadow: "0 20px 40px -24px rgba(124,45,18,.35)" };
const Phone = ({ x, y, title, sub, children, head = "#075E54", bg = "#ECE5DD" }: { x: number; y: number; title: string; sub: string; children: ReactNode; head?: string; bg?: string }) => (
  <div style={{ position: "absolute", left: x, top: y, width: 270, height: 470, borderRadius: 36, background: "#111", padding: 9, boxShadow: "0 30px 60px -25px rgba(124,45,18,.45)" }}>
    <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden", background: bg, display: "flex", flexDirection: "column" }}>
      <div style={{ background: head, color: "#fff", padding: "26px 12px 9px", display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ width: 28, height: 28, borderRadius: 14, background: "rgba(255,255,255,.25)", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13 }}>{title[0]}</div>
        <div><div style={{ fontWeight: 600, fontSize: 13 }}>{title}</div><div style={{ fontSize: 10.5, opacity: 0.85 }}>{sub}</div></div>
      </div>
      <div style={{ flex: 1, padding: "8px 9px", display: "flex", flexDirection: "column", gap: 6, overflow: "hidden" }}>{children}</div>
    </div>
  </div>
);
const Bubble = ({ me, t, at, children }: { me?: boolean; t: number; at: number; children: ReactNode }) =>
  t < at ? null : (
    <div style={{ alignSelf: me ? "flex-end" : "flex-start", maxWidth: "84%", background: me ? "#DCF8C6" : "#fff", borderRadius: 10, padding: "6px 9px", fontSize: 11.5, lineHeight: 1.4, boxShadow: "0 1px 1px rgba(0,0,0,.08)", transformOrigin: me ? "right bottom" : "left bottom", ...pop(t, at, { dy: 10, s0: 0.7, d: 0.6 }) }}>{children}</div>
  );
const Typing = ({ t, from, to }: { t: number; from: number; to: number }) =>
  t < from || t >= to ? null : (
    <div style={{ alignSelf: "flex-start", background: "#fff", borderRadius: 10, padding: "8px 10px", display: "flex", gap: 3 }}>
      {[0, 1, 2].map((i) => <span key={i} style={{ width: 5, height: 5, borderRadius: 3, background: "#94A3B8", opacity: 0.4 + 0.6 * Math.abs(Math.sin((t - from) * 6 - i * 0.7)) }} />)}
    </div>
  );
const Pill = ({ text, tone }: { text: string; tone: "ok" | "warn" | "bad" }) => {
  const c = { ok: ["#DCFCE7", "#166534"], warn: ["#FEF3C7", "#92400E"], bad: ["#FEE2E2", "#991B1B"] }[tone];
  return <span style={{ background: c[0], color: c[1], fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 999 }}>{text}</span>;
};

// ─── adegan ───
function cooperative(t: number) {
  const paid = t >= 4.3;
  return (
    <>
      <Phone x={90} y={35} title="Asisten Koperasi" sub="AI agent · online">
        <Bubble me t={t} at={0.3}>Mau daftar anggota bisa kak?</Bubble>
        <Typing t={t} from={0.8} to={1.6} />
        <Bubble t={t} at={1.6}>Bisa Kak 🙏 Simpanan pokok Rp100.000 + wajib Rp50.000. Ini link pribadi Kakak (24 jam): <span style={{ color: "#027EB5", textDecoration: "underline" }}>daftar.koperasi.id/r/7Kx2</span></Bubble>
        <Bubble me t={t} at={2.7}>Sudah transfer via QRIS ya</Bubble>
        <Typing t={t} from={3.2} to={4.2} />
        <Bubble t={t} at={4.2}>✅ <b>Rp150.000</b> diterima. Nomor anggota Kakak <b>KS-0482</b>.</Bubble>
      </Phone>
      <div style={{ position: "absolute", left: 420, top: 40, width: 450, ...card, padding: "16px 20px", ...pop(t, 0.5) }}>
        <div style={{ fontSize: 13, color: "#8A8178" }}>Tagihan pendaftaran</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "6px 0 14px" }}>
          <b style={{ fontSize: 26 }}>Rp150.000</b>
          <span style={{ transform: `scale(${paid ? lerp(1.25, 1, spring(p(t, 4.3, 0.6))) : 1})`, display: "inline-block" }}>
            {paid ? <Pill text="Lunas" tone="ok" /> : <Pill text="Menunggu" tone="warn" />}
          </span>
        </div>
        <div style={{ fontSize: 12, color: "#8A8178", marginBottom: 6 }}>Buku besar (double-entry)</div>
        {[["Kas Xendit", "Rp150.000", ""], ["Simpanan pokok", "", "Rp100.000"], ["Simpanan wajib", "", "Rp50.000"]].map((r, i) => (
          <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", fontSize: 13, padding: "8px 0", borderTop: "1px solid #F5EFE9", ...(t >= 4.5 + i * 0.25 ? pop(t, 4.5 + i * 0.25, { dy: 8 }) : { opacity: 0.15 }) }}>
            <span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", left: 420, top: 392, width: 450, display: "flex", gap: 12 }}>
        {[["Anggota aktif", 1284], ["Percakapan AI hari ini", 317]].map(([l, v], i) => (
          <div key={l as string} style={{ ...card, flex: 1, padding: 16, ...pop(t, 0.8 + i * 0.15) }}>
            <div style={{ fontSize: 12, color: "#8A8178" }}>{l}</div>
            <b style={{ fontSize: 24 }}>{Math.round((v as number) * eo(p(t, 0.8, 1.6))).toLocaleString("id-ID")}</b>
          </div>
        ))}
      </div>
    </>
  );
}

function automation(t: number) {
  const nodes = [["⏰", "Jadwal 23:00", "#64748B"], ["M", "Mokapos API", "#E11D48"], ["Σ", "Rekap outlet", "#F97316"], ["W", "WhatsApp", "#22C55E"]];
  const nx = (i: number) => 60 + i * 215, ny = 120;
  const on = (i: number) => t >= 0.4 + i * 0.9;
  return (
    <>
      <svg width={CW} height={CH} style={{ position: "absolute", inset: 0 }}>
        {nodes.slice(0, -1).map((_, i) => {
          const x1 = nx(i) + 170, x2 = nx(i + 1), y = ny + 32, k = p(t, 0.4 + i * 0.9 + 0.35, 0.55);
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="#E4DCD4" strokeWidth={3} />
              <line x1={x1} y1={y} x2={lerp(x1, x2, eo(k))} y2={y} stroke="#F97316" strokeWidth={3} />
              {k > 0 && k < 1 && <circle cx={lerp(x1, x2, k)} cy={y} r={6} fill="#F97316" />}
            </g>
          );
        })}
      </svg>
      {nodes.map(([icon, title, color], i) => (
        <div key={title} style={{ position: "absolute", left: nx(i), top: ny, width: 170, height: 64, ...card, display: "flex", alignItems: "center", gap: 10, padding: "0 12px",
          borderColor: on(i) ? color : "#F0E8E1", boxShadow: on(i) ? `0 0 0 4px ${color}22, 0 20px 40px -24px rgba(124,45,18,.35)` : card.boxShadow, transition: "none",
          transform: `scale(${on(i) ? lerp(1.08, 1, spring(p(t, 0.4 + i * 0.9, 0.6))) : 1})` }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: color, color: "#fff", display: "grid", placeItems: "center", fontWeight: 800, opacity: on(i) ? 1 : 0.45 }}>{icon}</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
        </div>
      ))}
      <div style={{ position: "absolute", left: 60, top: 250, width: 470, ...card, padding: 18, ...pop(t, 2.2) }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Omzet per outlet (diambil dari API)</div>
        {[["Outlet Pusat", 4820000], ["Outlet Timur", 3115000], ["Outlet Selatan", 2970000]].map(([n, v], i) => {
          const k = eo(p(t, 2.4 + i * 0.2, 1));
          return (
            <div key={n as string} style={{ display: "flex", alignItems: "center", gap: 10, margin: "9px 0", fontSize: 12.5 }}>
              <span style={{ width: 100 }}>{n}</span>
              <div style={{ flex: 1, height: 10, borderRadius: 5, background: "#F5EFE9" }}><div style={{ width: `${((v as number) / 5000000) * 100 * k}%`, height: "100%", borderRadius: 5, background: "#F97316" }} /></div>
              <b style={{ width: 92, textAlign: "right" }}>{rupiah((v as number) * k)}</b>
            </div>
          );
        })}
      </div>
      <Phone x={620} y={230} title="Bot Laporan" sub="otomatis">
        <Bubble t={t} at={3.6}><b>📊 Laporan 20 Okt</b><br />Total: <b>{rupiah(10905000 * eo(p(t, 3.6, 1)))}</b><br />vs kemarin ▲ 8%<br />Backup Google Sheets ✓</Bubble>
      </Phone>
    </>
  );
}

function vision(t: number) {
  const tiles = [
    { name: "Area Pompa", people: [[18, true, 0.9], [58, false, 1.6]] },
    { name: "Gudang", people: [[40, true, 1.2]] },
    { name: "Gerbang", people: [[22, "warn", 2.0], [60, true, 1.4]] },
    { name: "Loading Dock", people: [[44, true, 1.8]] },
  ] as const;
  const color = (ok: boolean | string) => (ok === true ? "#22C55E" : ok === "warn" ? "#F59E0B" : "#EF4444");
  return (
    <div style={{ position: "absolute", inset: 0, background: "#0F172A", borderRadius: 24 }}>
      <div style={{ position: "absolute", left: 24, top: 24, width: 600, height: 492, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 10 }}>
        {tiles.map((tile, ti) => (
          <div key={tile.name} style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: `linear-gradient(160deg,${["#334155", "#3F3F46", "#374151", "#1E3A5F"][ti]},#0B1220)` }}>
            {/* garis pindai */}
            <div style={{ position: "absolute", left: 0, right: 0, top: `${((t * 30 + ti * 25) % 100)}%`, height: 2, background: "rgba(56,189,248,.25)" }} />
            {tile.people.map(([x, ok, at], pi) => (
              <div key={pi}>
                <svg style={{ position: "absolute", left: `${x}%`, top: "26%" }} width={44} height={96} viewBox="0 0 60 130"><circle cx="30" cy="16" r="13" fill="#64748B" /><rect x="12" y="32" width="36" height="52" rx="12" fill="#64748B" /><rect x="15" y="80" width="12" height="46" rx="6" fill="#64748B" /><rect x="33" y="80" width="12" height="46" rx="6" fill="#64748B" /></svg>
                {t >= at && (
                  <div style={{ position: "absolute", left: `calc(${x}% - 6px)`, top: "20%", width: 56, height: 116, border: `2.5px solid ${color(ok)}`, borderRadius: 4, transform: `scale(${lerp(1.35, 1, back(p(t, at, 0.4)))})`, opacity: p(t, at, 0.12) }}>
                    <span style={{ position: "absolute", top: -19, left: -2, background: color(ok), color: "#fff", fontSize: 10, fontWeight: 600, padding: "1px 5px", borderRadius: 3, whiteSpace: "nowrap" }}>
                      {ok === true ? "APD lengkap" : ok === "warn" ? "Tanpa rompi" : "Tanpa helm"}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <span style={{ position: "absolute", left: 8, bottom: 6, color: "#fff", fontSize: 11, fontWeight: 600, background: "rgba(0,0,0,.45)", padding: "2px 7px", borderRadius: 5 }}>● {tile.name}</span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", left: 650, top: 24, width: 286, color: "#E5E7EB" }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Kepatuhan APD hari ini</div>
        <div style={{ fontSize: 44, fontWeight: 800, color: "#22C55E" }}>{(94.2 * eo(p(t, 0.6, 2.4))).toFixed(1).replace(".", ",")}%</div>
        {[["Kamera aktif", "4 / 4"], ["Terdeteksi", `${Math.min(6, Math.floor(t / 0.35))} orang`]].map(([l, v]) => (
          <div key={l} style={{ display: "flex", justifyContent: "space-between", background: "#111827", borderRadius: 10, padding: "10px 12px", marginTop: 8, fontSize: 13 }}><span style={{ color: "#9CA3AF" }}>{l}</span><b>{v}</b></div>
        ))}
        <div style={{ fontSize: 13, fontWeight: 600, margin: "18px 0 8px" }}>Insiden</div>
        {[[1.6, "14:02 · Tanpa helm · Area Pompa", "#EF4444"], [2.0, "14:03 · Tanpa rompi · Gerbang", "#F59E0B"]].map(([at, txt, c]) =>
          t >= (at as number) + 0.3 ? (
            <div key={txt as string} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12, padding: "8px 0", borderBottom: "1px solid #1F2937", ...pop(t, (at as number) + 0.3, { dy: 10 }) }}>
              <span style={{ width: 8, height: 8, borderRadius: 4, background: c as string }} />{txt}
            </div>
          ) : null)}
      </div>
    </div>
  );
}

function finance(t: number) {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "000", "0", "⌫"];
  const typed = t < 0.5 ? "" : t < 0.9 ? "3" : t < 1.3 ? "35" : "35000";
  const step2 = t >= 2.3;
  const pressed = (k: string) => (k === "3" && t >= 0.5 && t < 0.7) || (k === "5" && t >= 0.9 && t < 1.1) || (k === "000" && t >= 1.3 && t < 1.5);
  const amount = Number(typed || 0);
  return (
    <>
      <div style={{ position: "absolute", left: 120, top: 35, width: 270, height: 470, borderRadius: 36, background: "#111", padding: 9, boxShadow: "0 30px 60px -25px rgba(124,45,18,.45)" }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden", background: "#F4FAF9", padding: "28px 12px 12px", display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>✕ &nbsp;Catat · {step2 ? "Detail" : "Nominal"}</div>
          {!step2 ? (
            <>
              <div style={{ flex: 1, display: "grid", placeItems: "center" }}><b style={{ fontSize: 30 }}>{rupiah(amount)}</b></div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
                {keys.map((k) => <div key={k} style={{ height: 38, borderRadius: 10, background: pressed(k) ? "#99F6E4" : "#E2E8F0", display: "grid", placeItems: "center", fontSize: 15, transform: `scale(${pressed(k) ? 0.92 : 1})` }}>{k}</div>)}
              </div>
              <div style={{ marginTop: 8, background: t >= 1.9 ? "#115E59" : "#0F766E", color: "#fff", borderRadius: 12, padding: 10, textAlign: "center", fontSize: 13, fontWeight: 600, transform: `scale(${t >= 1.9 && t < 2.15 ? 0.95 : 1})` }}>Lanjut</div>
            </>
          ) : (
            <div style={{ ...pop(t, 2.3, { dy: 16 }) }}>
              <b style={{ fontSize: 20, display: "block", margin: "12px 0" }}>{rupiah(35000)}</b>
              <div style={{ fontSize: 11, color: "#0F766E", fontWeight: 600, marginBottom: 6 }}>Kategori</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }}>
                {["🍜 Makan", "☕ Kopi", "⛽ Bensin", "🛵 Ojol", "📱 Pulsa", "🏠 Kos"].map((c, i) => {
                  const sel = i === 0 && t >= 3.0;
                  return <div key={c} style={{ fontSize: 11, padding: "9px 4px", borderRadius: 10, textAlign: "center", background: sel ? "#CCFBF1" : "#fff", border: `1.5px solid ${sel ? "#0F766E" : "#E2E8F0"}`, transform: `scale(${sel ? lerp(1.12, 1, spring(p(t, 3.0, 0.5))) : 1})` }}>{c}</div>;
                })}
              </div>
              <div style={{ marginTop: 14, background: "#0F766E", color: "#fff", borderRadius: 12, padding: 10, textAlign: "center", fontSize: 13, fontWeight: 600, opacity: t >= 3.0 ? 1 : 0.4, transform: `scale(${t >= 3.6 && t < 3.85 ? 0.95 : 1})` }}>Simpan</div>
            </div>
          )}
          {t >= 4.0 && (
            <div style={{ position: "absolute", left: 10, right: 10, bottom: 12, background: "#1F2937", color: "#fff", borderRadius: 10, padding: "9px 11px", fontSize: 11.5, display: "flex", justifyContent: "space-between", ...pop(t, 4.0, { dy: 20 }) }}>
              <span>Tersimpan Rp35.000 · Makan</span><b style={{ color: "#5EEAD4" }}>Urungkan</b>
            </div>
          )}
        </div>
      </div>
      <div style={{ position: "absolute", left: 450, top: 70, width: 420, ...card, padding: 20, ...pop(t, 0.4) }}>
        <div style={{ fontSize: 13, color: "#8A8178" }}>Keluar bulan ini</div>
        <b style={{ fontSize: 30 }}>{rupiah(1210000 + (t >= 4.0 ? 35000 * eo(p(t, 4.0, 0.8)) : 0))}</b>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, marginTop: 14 }}>
          {[38, 52, 30, 64, 45, 58, 0].map((h, i) => {
            const v = i === 6 ? (t >= 4.0 ? 40 * eo(p(t, 4.0, 0.8)) : 4) : h * eo(p(t, 0.6 + i * 0.08, 0.8));
            return <div key={i} style={{ flex: 1, height: `${v}%`, borderRadius: "5px 5px 0 0", background: i === 6 ? "#0F766E" : "#99F6E4" }} />;
          })}
        </div>
      </div>
      <div style={{ position: "absolute", left: 450, top: 330, width: 420, ...card, padding: 16, background: "#ECFDF5", ...pop(t, 1.0) }}>
        <div style={{ fontSize: 12, color: "#047857", fontWeight: 600 }}>Atau cukup chat ke bot WhatsApp</div>
        <div style={{ fontSize: 14, marginTop: 6 }}>&quot;makan 35rb, bensin 30rb gopay&quot; → tercatat 2 transaksi</div>
      </div>
    </>
  );
}

export const SCENES: ShowcaseScene[] = [
  { key: "coop", label: "WhatsApp AI agent", project: "Cooperative Automation Platform", caption: "Member signs up and pays inside the chat; the ledger updates itself.", render: cooperative },
  { key: "flow", label: "Automation", project: "Mokapos to WhatsApp Automation", caption: "Nightly POS sales pulled by API, summed per outlet, sent to the owner.", render: automation },
  { key: "vision", label: "Machine learning", project: "Enterprise PPE Detection VMS", caption: "Cameras flag missing helmets and vests and log each incident.", render: vision },
  { key: "fin", label: "Mobile app", project: "Dompet", caption: "Log an expense in two steps, or just chat it to the WhatsApp bot.", render: finance },
];

export default function ProjectShowcase({ onOpen }: { onOpen: (projectPrefix: string) => void }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [time, setTime] = useState(0);
  const [visible, setVisible] = useState(false);
  const [still, setStill] = useState(false);
  const base = useRef({ start: 0, offset: 0 });

  const [frozen, setFrozen] = useState<number | null>(null);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    // ?showcase-t=8.2 membekukan waktu (untuk memeriksa frame, seperti __seek di video gig)
    const ft = new URLSearchParams(location.search).get("showcase-t");
    if (ft !== null) setFrozen(Number(ft));
    const el = box.current!;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / CW));
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!visible || still || frozen !== null) return;
    let raf = 0;
    base.current.start = performance.now() - base.current.offset * 1000;
    const tick = (now: number) => {
      const s = (now - base.current.start) / 1000;
      base.current.offset = s;
      setTime(s % (SCENE * SCENES.length));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, still, frozen]);

  const now = frozen ?? time;
  const idx = still ? 0 : Math.floor(now / SCENE) % SCENES.length;
  const local = still ? 5.5 : now - Math.floor(now / SCENE) * SCENE;
  const scene = SCENES[idx];
  const fade = still ? 1 : Math.min(p(local, 0, 0.35), 1 - p(local, SCENE - 0.35, 0.35));
  const jump = (i: number) => { base.current.offset = i * SCENE; base.current.start = performance.now() - i * SCENE * 1000; setTime(i * SCENE); };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Project animations">
        {SCENES.map((s, i) => (
          <button key={s.key} type="button" role="tab" aria-selected={i === idx} onClick={() => jump(i)}
            className={`relative overflow-hidden text-sm font-semibold font-jakarta px-4 py-2 rounded-xl border transition-colors ${i === idx ? "border-primary text-primary bg-white" : "border-gray-200 text-gray-500 bg-white hover:text-gray-800"}`}>
            {s.label}
            {i === idx && !still && <span className="absolute left-0 bottom-0 h-0.5 bg-primary" style={{ width: `${(local / SCENE) * 100}%` }} />}
          </button>
        ))}
      </div>
      <button type="button" onClick={() => onOpen(scene.project)} aria-label={`Open project: ${scene.project}`}
        className="block w-full text-left rounded-3xl border border-warm-border overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{ background: "radial-gradient(700px 400px at 85% 0%,rgba(249,115,22,.14),transparent 60%), #FFF8F0" }}>
        <div ref={box} className="relative w-full" style={{ aspectRatio: `${CW} / ${CH}` }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: CW, height: CH, transform: `scale(${scale})`, transformOrigin: "top left", opacity: clamp(fade), fontFamily: "Inter, sans-serif", color: "#1A1A1A" }}>
            {scene.render(local)}
          </div>
        </div>
      </button>
      <p className="text-sm text-text-muted mt-3"><span className="font-semibold text-gray-800">{scene.project}.</span> {scene.caption} <span className="text-primary font-semibold">Tap to see the project.</span></p>
    </div>
  );
}
