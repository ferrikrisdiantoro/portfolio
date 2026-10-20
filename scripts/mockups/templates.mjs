// Template ilustrasi UI untuk thumbnail proyek. Semua data adalah contoh, tanpa nama atau merek klien.
// Kanvas 1600x1000, palet dan font sama dengan situs (oranye #F97316, Plus Jakarta Sans + Inter).

export const W = 1600, H = 1000;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const BASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{font-family:Inter,sans-serif;color:#1A1A1A;background:#FFF8F0;position:relative}
.bg{position:absolute;inset:0;background:
  radial-gradient(900px 600px at 85% 10%,rgba(249,115,22,.18),transparent 60%),
  radial-gradient(700px 500px at 0% 100%,rgba(234,88,12,.12),transparent 60%),
  linear-gradient(180deg,#FFF8F0,#FFF1E3)}
.dots{position:absolute;inset:0;background-image:radial-gradient(rgba(234,88,12,.12) 1.2px,transparent 1.2px);background-size:28px 28px;opacity:.6}
.stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.label{position:absolute;right:28px;bottom:22px;font:600 15px 'Plus Jakarta Sans';color:#9A6B4B;background:rgba(255,255,255,.75);border:1px solid #FED7AA;padding:6px 14px;border-radius:999px}
.j{font-family:'Plus Jakarta Sans',sans-serif}
.win{background:#fff;border-radius:18px;box-shadow:0 40px 80px -20px rgba(124,45,18,.28),0 0 0 1px rgba(0,0,0,.06);overflow:hidden}
.bar{height:44px;background:#F8F5F2;border-bottom:1px solid #EEE7E0;display:flex;align-items:center;gap:8px;padding:0 16px}
.bar i{width:12px;height:12px;border-radius:50%;display:inline-block}
.url{margin-left:18px;flex:1;max-width:520px;height:26px;border-radius:8px;background:#fff;border:1px solid #EAE2DA;font:500 13px Inter;color:#8B8178;display:flex;align-items:center;padding:0 12px}
.pill{display:inline-flex;align-items:center;gap:6px;font:600 12px Inter;padding:4px 10px;border-radius:999px}
.ok{background:#DCFCE7;color:#166534}.warn{background:#FEF3C7;color:#92400E}.bad{background:#FEE2E2;color:#991B1B}.info{background:#E0F2FE;color:#075985}.or{background:#FFEDD5;color:#C2410C}
.card{background:#fff;border:1px solid #F0E8E1;border-radius:14px;padding:16px}
.muted{color:#8A8178}
table{border-collapse:collapse;width:100%;font-size:13px}
th{font:600 12px Inter;color:#8A8178;text-align:left;padding:10px 12px;border-bottom:1px solid #F0E8E1;background:#FCFAF8}
td{padding:11px 12px;border-bottom:1px solid #F5EFE9}
`;

export function page(body, { dark = false, label = 'Ilustrasi UI · data contoh' } = {}) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${BASE_CSS}
  ${dark ? 'body{background:#0B1220}.bg{background:radial-gradient(900px 600px at 85% 10%,rgba(249,115,22,.25),transparent 60%),linear-gradient(180deg,#0F172A,#0B1220)}.dots{background-image:radial-gradient(rgba(255,255,255,.07) 1.2px,transparent 1.2px)}.label{background:rgba(15,23,42,.8);border-color:#334155;color:#CBD5E1}' : ''}
  </style></head><body><div class="bg"></div><div class="dots"></div><div class="stage">${body}</div><div class="label">${esc(label)}</div></body></html>`;
}

// ============ Potongan UI ============

export function browser(url, inner, { w = 1360, h = 820 } = {}) {
  return `<div class="win" style="width:${w}px;height:${h}px">
    <div class="bar"><i style="background:#FF5F57"></i><i style="background:#FEBC2E"></i><i style="background:#28C840"></i><div class="url">${esc(url)}</div></div>
    <div style="height:${h - 44}px;overflow:hidden">${inner}</div></div>`;
}

export function sidebar(brand, items, active = 0, { color = '#F97316', dark = false } = {}) {
  const bg = dark ? '#111827' : '#FCFAF8', fg = dark ? '#E5E7EB' : '#3F3A36';
  return `<div style="width:230px;background:${bg};border-right:1px solid ${dark ? '#1F2937' : '#F0E8E1'};padding:20px 14px;height:100%">
    <div class="j" style="display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;color:${fg};margin-bottom:24px">
      <span style="width:30px;height:30px;border-radius:9px;background:${color};display:inline-flex;align-items:center;justify-content:center;color:#fff;font-size:15px">${esc(brand[0])}</span>${esc(brand)}</div>
    ${items.map((it, i) => `<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;margin-bottom:4px;font:${i === active ? 600 : 500} 14px Inter;color:${i === active ? color : (dark ? '#9CA3AF' : '#6B635C')};background:${i === active ? (dark ? 'rgba(249,115,22,.12)' : '#FFF1E6') : 'transparent'}">
      <span style="width:8px;height:8px;border-radius:3px;background:${i === active ? color : (dark ? '#4B5563' : '#D6CCC3')}"></span>${esc(it)}</div>`).join('')}
  </div>`;
}

export function kpis(list, { dark = false } = {}) {
  return `<div style="display:grid;grid-template-columns:repeat(${list.length},1fr);gap:14px">${list.map((k) => `
    <div class="card" style="${dark ? 'background:#111827;border-color:#1F2937;color:#F3F4F6' : ''}">
      <div class="muted" style="font:500 13px Inter">${esc(k.label)}</div>
      <div class="j" style="font-weight:800;font-size:28px;margin-top:6px">${esc(k.value)}</div>
      ${k.delta ? `<div style="font:600 12px Inter;margin-top:4px;color:${k.delta.startsWith('-') ? '#DC2626' : '#16A34A'}">${esc(k.delta)}</div>` : ''}
    </div>`).join('')}</div>`;
}

/** Grafik garis/area SVG sederhana */
export function lineChart(series, { w = 600, h = 220, colors = ['#F97316', '#0EA5E9'], labels = [], area = true, dark = false } = {}) {
  // Sumbu mulai dekat nilai terendah kalau datanya tidak dekat nol, supaya tren tidak terlihat datar
  const hi = Math.max(...series.flat()), lo0 = Math.min(...series.flat()), lo = lo0 / hi > 0.5 ? lo0 - (hi - lo0) * 0.25 : 0;
  const max = hi + (hi - lo) * 0.15, n = series[0].length;
  const x = (i) => 30 + (i * (w - 50)) / (n - 1), y = (v) => h - 28 - ((v - lo) / (max - lo)) * (h - 50);
  const grid = [0.25, 0.5, 0.75, 1].map((f) => `<line x1="30" x2="${w - 20}" y1="${y(lo + (hi - lo) * f)}" y2="${y(lo + (hi - lo) * f)}" stroke="${dark ? '#1F2937' : '#F1EAE3'}" stroke-dasharray="4 4"/>`).join('');
  const paths = series.map((s, si) => {
    const d = s.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const fill = area && si === 0 ? `<path d="${d} L${x(n - 1)},${h - 28} L${x(0)},${h - 28} Z" fill="${colors[si]}" opacity=".12"/>` : '';
    return `${fill}<path d="${d}" fill="none" stroke="${colors[si]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ${si ? 'stroke-dasharray="7 6"' : ''}/>`;
  }).join('');
  const lab = labels.map((l, i) => `<text x="${x(i * (n - 1) / Math.max(labels.length - 1, 1))}" y="${h - 6}" font-size="11" text-anchor="middle" fill="#9A9089" font-family="Inter">${esc(l)}</text>`).join('');
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${grid}${paths}${lab}</svg>`;
}

export function barChart(values, { w = 600, h = 220, color = '#F97316', labels = [], highlight = -1 } = {}) {
  const max = Math.max(...values) * 1.15, n = values.length, bw = Math.min(36, ((w - 40) / n) * 0.6);
  return `<svg width="${w}" height="${h}">${values.map((v, i) => {
    const cx = 30 + ((i + 0.5) * (w - 40)) / n, bh = (v / max) * (h - 40);
    return `<rect x="${cx - bw / 2}" y="${h - 24 - bh}" width="${bw}" height="${bh}" rx="5" fill="${i === highlight ? '#EA580C' : color}" opacity="${i === highlight ? 1 : 0.85}"/>
      ${labels[i] ? `<text x="${cx}" y="${h - 6}" font-size="11" text-anchor="middle" fill="#9A9089" font-family="Inter">${esc(labels[i])}</text>` : ''}`;
  }).join('')}</svg>`;
}

export function donut(parts, { size = 180, colors = ['#F97316', '#0EA5E9', '#22C55E', '#A855F7', '#EAB308'] } = {}) {
  const total = parts.reduce((a, p) => a + p, 0), r = size / 2 - 18, c = 2 * Math.PI * r;
  let off = 0;
  return `<svg width="${size}" height="${size}" style="transform:rotate(-90deg)">${parts.map((p, i) => {
    const len = (p / total) * c, s = `<circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${colors[i % colors.length]}" stroke-width="26" stroke-dasharray="${len - 3} ${c - len + 3}" stroke-dashoffset="${-off}"/>`;
    off += len;
    return s;
  }).join('')}</svg>`;
}

export function table(cols, rows) {
  return `<table><tr>${cols.map((c) => `<th>${esc(c)}</th>`).join('')}</tr>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table>`;
}

/** Ponsel dengan percakapan WhatsApp. msgs: [{from:'me'|'bot', text, time?, html?}] */
export function phoneChat(title, msgs, { subtitle = 'online', w = 380, h = 780, theme = 'wa' } = {}) {
  const head = theme === 'tg' ? '#2AABEE' : '#075E54', bg = theme === 'tg' ? '#DCE8F2' : '#ECE5DD';
  const bubble = (m) => `<div style="display:flex;justify-content:${m.from === 'me' ? 'flex-end' : 'flex-start'};margin:6px 0">
    <div style="max-width:82%;background:${m.from === 'me' ? (theme === 'tg' ? '#EFFDDE' : '#DCF8C6') : '#fff'};border-radius:12px;padding:8px 11px 6px;font:400 13.5px/1.4 Inter;box-shadow:0 1px 1px rgba(0,0,0,.08)">
      ${m.html ?? esc(m.text).replace(/\n/g, '<br>')}
      <div style="font:400 10.5px Inter;color:#8696A0;text-align:right;margin-top:3px">${esc(m.time ?? '09:41')}${m.from === 'me' ? ' ✓✓' : ''}</div></div></div>`;
  return `<div style="width:${w}px;height:${h}px;border-radius:46px;background:#111;padding:12px;box-shadow:0 40px 80px -20px rgba(124,45,18,.35)">
    <div style="width:100%;height:100%;border-radius:36px;overflow:hidden;background:${bg};display:flex;flex-direction:column">
      <div style="background:${head};color:#fff;padding:38px 16px 12px;display:flex;align-items:center;gap:10px">
        <div style="width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font:700 16px 'Plus Jakarta Sans'">${esc(title[0])}</div>
        <div><div style="font:600 15px Inter">${esc(title)}</div><div style="font:400 12px Inter;opacity:.85">${esc(subtitle)}</div></div></div>
      <div style="flex:1;padding:10px 12px;overflow:hidden">${msgs.map(bubble).join('')}</div>
      <div style="background:#F0F2F5;padding:10px 12px;display:flex;gap:8px"><div style="flex:1;height:36px;border-radius:18px;background:#fff"></div><div style="width:36px;height:36px;border-radius:50%;background:${head}"></div></div>
    </div></div>`;
}

/** Kanvas alur ala n8n. nodes: [{col,row,title,sub,color}], edges: [[i,j]] */
export function flow(nodes, edges, { w = 1360, h = 780, title = 'Workflow' } = {}) {
  // Posisikan grafik di tengah kanvas
  const cols = Math.max(...nodes.map((n) => n.col)) + 1, rows = Math.max(...nodes.map((n) => n.row)) + 1;
  const ox = Math.max(40, (w - (cols * 270 - 60)) / 2), oy = Math.max(70, (h - 44 - (rows * 150 - 72)) / 2 + 10);
  const cx = (n) => ox + n.col * 270, cy = (n) => oy + n.row * 150, nw = 215, nh = 78;
  const lines = edges.map(([a, b]) => {
    const A = nodes[a], B = nodes[b], x1 = cx(A) + nw, y1 = cy(A) + nh / 2, x2 = cx(B), y2 = cy(B) + nh / 2, m = (x1 + x2) / 2;
    return `<path d="M${x1},${y1} C${m},${y1} ${m},${y2} ${x2},${y2}" fill="none" stroke="#B9AFA6" stroke-width="2.5"/><circle cx="${x2}" cy="${y2}" r="5" fill="#B9AFA6"/>`;
  }).join('');
  const boxes = nodes.map((n) => `<div style="position:absolute;left:${cx(n)}px;top:${cy(n)}px;width:${nw}px;height:${nh}px;background:#fff;border:1.5px solid #E7DED6;border-radius:14px;display:flex;align-items:center;gap:12px;padding:0 14px;box-shadow:0 6px 16px -8px rgba(0,0,0,.15)">
      <div style="width:40px;height:40px;border-radius:11px;background:${n.color ?? '#F97316'};color:#fff;display:flex;align-items:center;justify-content:center;font:800 15px 'Plus Jakarta Sans';flex-shrink:0">${esc(n.icon ?? n.title[0])}</div>
      <div style="min-width:0"><div style="font:600 14px Inter;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(n.title)}</div><div class="muted" style="font:400 12px Inter;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(n.sub ?? '')}</div></div></div>`).join('');
  return browser(`automation.local / ${title}`, `<div style="position:relative;width:100%;height:100%;background:#FAF8F6;background-image:radial-gradient(#E4DCD4 1px,transparent 1px);background-size:22px 22px">
    <div style="position:absolute;left:24px;top:20px;display:flex;gap:10px;align-items:center"><span class="j" style="font-weight:700;font-size:18px">${esc(title)}</span><span class="pill ok">● Active</span></div>
    <svg width="${w}" height="${h}" style="position:absolute;inset:0">${lines}</svg>${boxes}</div>`, { w, h });
}

/** Grid kamera dengan kotak deteksi (dark). tiles: [{name, scene, boxes:[{x,y,w,h,label,ok}]}] */
export function cameraGrid(tiles, side, { w = 1360, h = 820, title = 'Live monitoring' } = {}) {
  const tile = (t) => `<div style="position:relative;border-radius:12px;overflow:hidden;background:${t.scene};height:100%">
    ${t.extra ?? ''}
    ${t.boxes.map((b) => `<div style="position:absolute;left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%;border:2.5px solid ${b.ok === false ? '#EF4444' : b.ok === 'warn' ? '#F59E0B' : '#22C55E'};border-radius:4px">
      <span style="position:absolute;left:-2px;top:-22px;background:${b.ok === false ? '#EF4444' : b.ok === 'warn' ? '#F59E0B' : '#22C55E'};color:#fff;font:600 11px Inter;padding:2px 6px;border-radius:4px;white-space:nowrap">${esc(b.label)}</span></div>`).join('')}
    <div style="position:absolute;left:10px;bottom:8px;font:600 12px Inter;color:#fff;background:rgba(0,0,0,.45);padding:3px 8px;border-radius:6px">● ${esc(t.name)}</div></div>`;
  return browser(`vision.local / ${title}`, `<div style="display:flex;height:100%;background:#0F172A;color:#E5E7EB">
    <div style="flex:1;padding:18px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:12px">${tiles.map(tile).join('')}</div>
    <div style="width:330px;border-left:1px solid #1F2937;padding:18px">${side}</div></div>`, { w, h });
}

/** Siluet orang sederhana untuk adegan kamera */
export const person = (x, y, s = 1, c = '#64748B') => `<svg style="position:absolute;left:${x}%;top:${y}%" width="${60 * s}" height="${130 * s}" viewBox="0 0 60 130"><circle cx="30" cy="16" r="13" fill="${c}"/><rect x="12" y="32" width="36" height="52" rx="12" fill="${c}"/><rect x="15" y="80" width="12" height="46" rx="6" fill="${c}"/><rect x="33" y="80" width="12" height="46" rx="6" fill="${c}"/></svg>`;
