// Proyek baru: Kantor Agent (tangkapan asli), Dompet Ferri, backend agen AI (disamarkan, NDA), galeri koperasi.
import { browser, flow, page, phoneChat, sidebar, table } from './templates.mjs';
import { scenes } from './scenes.mjs';

const add = (slug, file, html) => scenes.push({ slug, file, html });
const img = (p) => 'file:///' + p.replace(/\\/g, '/');
const KANTOR = 'D:/Projek/Income/04-produk/kantor-agent/docs';

// ============ Kantor Agent (produk sendiri, tangkapan asli) ============
add('kantor-agent', 'cover', page(browser('127.0.0.1:4321 · Kantor Agent',
  `<img src="${img(`${KANTOR}/screenshots/fase5-01-kantor-awal.png`)}" style="width:100%;height:100%;object-fit:cover;object-position:top left">`,
  { w: 1380, h: 850 }), { dark: true, label: 'Tangkapan layar asli' }));

// ============ Dompet Ferri ============
const TEAL = '#0F766E';
const appPhone = (inner, { w = 360, h = 760 } = {}) => `<div style="width:${w}px;height:${h}px;border-radius:46px;background:#111;padding:12px;box-shadow:0 40px 80px -20px rgba(124,45,18,.35)">
  <div style="width:100%;height:100%;border-radius:36px;overflow:hidden;background:#F4FAF9;position:relative">${inner}</div></div>`;
const dfHome = appPhone(`<div style="padding:44px 16px 0">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><span class="j" style="font-weight:700;font-size:19px">Dompet</span><span style="font-size:18px">👁 ☁</span></div>
  <div style="background:#A7F3E4;border-radius:22px;padding:18px">
    <div style="font:500 13px Inter;color:#134E4A">Total saldo</div><div class="j" style="font-weight:800;font-size:27px;color:#042F2E">Rp48.750.000</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px">${['Bank 41 jt', 'E-Wallet 1,2 jt', 'Tunai 550 rb', 'Tabungan 6 jt'].map((c) => `<span style="background:#fff;border-radius:10px;padding:5px 9px;font:600 11px Inter;color:#134E4A">${c}</span>`).join('')}</div></div>
  <div style="display:flex;border:1px solid #CBD5E1;border-radius:999px;margin:14px 0;overflow:hidden">${['Hari', 'Minggu', 'Bulan'].map((p, i) => `<span style="flex:1;text-align:center;padding:7px;font:600 12px Inter;background:${i === 2 ? '#CCFBF1' : 'transparent'}">${p}</span>`).join('')}</div>
  <div style="background:#fff;border-radius:18px;padding:14px">
    <div style="font:700 14px 'Plus Jakarta Sans'">Pengeluaran per kategori</div><div class="muted" style="font:500 11px Inter;margin-bottom:8px">Oktober 2026</div>
    <div style="display:flex;align-items:center;gap:12px"><svg width="110" height="110" style="transform:rotate(-90deg)">${[[40, '#0F766E'], [25, '#E69F00'], [18, '#56B4E9'], [17, '#CC79A7']].reduce((acc, [v, c]) => { const r = 40, C = 2 * Math.PI * r, len = (v / 100) * C; acc.s += `<circle cx="55" cy="55" r="${r}" fill="none" stroke="${c}" stroke-width="18" stroke-dasharray="${len - 2} ${C}" stroke-dashoffset="${-acc.o}"/>`; acc.o += len; return acc; }, { s: '', o: 0 }).s}</svg>
      <div style="font:500 11.5px Inter;line-height:1.9">${[['Makan & Minum', '#0F766E'], ['Transportasi', '#E69F00'], ['Langganan AI', '#56B4E9'], ['Keluarga', '#CC79A7']].map(([n, c]) => `<div><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:${c};margin-right:6px"></span>${n}</div>`).join('')}</div></div></div>
  </div><div style="position:absolute;right:18px;bottom:20px;width:54px;height:54px;border-radius:16px;background:#A7F3E4;display:flex;align-items:center;justify-content:center;font:400 30px Inter">+</div>`);
const dfCatat = appPhone(`<div style="padding:44px 16px 0;display:flex;flex-direction:column;height:100%">
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px"><span style="font-size:20px">✕</span><span class="j" style="font-weight:600;font-size:17px">Catat · Nominal</span></div>
  <div style="display:flex;border:1px solid #CBD5E1;border-radius:999px;overflow:hidden">${['Keluar', 'Masuk', 'Transfer'].map((p, i) => `<span style="flex:1;text-align:center;padding:7px;font:600 12px Inter;background:${i === 0 ? '#CCFBF1' : 'transparent'}">${p}</span>`).join('')}</div>
  <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center"><div class="muted" style="font:500 14px Inter">15.000 + 20.000</div><div class="j" style="font-weight:800;font-size:40px">Rp35.000</div></div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px">${['1', '2', '3', '⌫', '4', '5', '6', '−', '7', '8', '9', '+', 'C', '0', '000', '='].map((k) => `<div style="height:46px;border-radius:12px;background:${/\d/.test(k) ? '#E2E8F0' : '#CCFBF1'};display:flex;align-items:center;justify-content:center;font:500 18px Inter">${k}</div>`).join('')}</div>
  <div style="margin:10px 0 18px;background:${TEAL};color:#fff;border-radius:14px;padding:13px;text-align:center;font:600 14px Inter">Lanjut</div></div>`);
add('dompet-ferri', 'cover', page(`<div style="display:flex;gap:36px;align-items:center">
  ${phoneChat('Bot Dompet', [
    { from: 'me', text: 'kopi 15k, bensin 30rb gopay', time: '08:02' },
    { from: 'bot', html: 'Tercatat 2 transaksi<br>#127 Keluar Rp15.000 · Jajan/Kopi · Tunai<br>#128 Keluar Rp30.000 · Transportasi · E-Wallet<br>Keluar Oktober: Rp1.245.000', time: '08:02' },
    { from: 'me', text: 'pengeluaran kemarin berapa?', time: '21:10' },
    { from: 'bot', html: 'Kemarin (20 Okt) kamu keluar <b>Rp52.000</b>:<br>• Makan & Minum Rp30.000<br>• Ojol Rp22.000', time: '21:10' },
  ], { subtitle: 'catat lewat chat', w: 360, h: 760 })}
  ${dfHome}${dfCatat}</div>`));

// ============ Backend agen AI (disamarkan, di bawah NDA) ============
add('ai-messaging-agent-backend', 'cover', page(flow([
  { col: 0, row: 0, title: 'WhatsApp / Meta', sub: 'Pesan masuk', color: '#22C55E', icon: 'W' },
  { col: 0, row: 2, title: 'Jadwal', sub: 'Pengingat & follow-up', color: '#64748B', icon: '⏰' },
  { col: 1, row: 0, title: 'Gateway', sub: 'Webhook + Baileys', color: '#0EA5E9', icon: 'G' },
  { col: 1, row: 1, title: 'API Fastify', sub: 'Validasi Zod', color: '#111827', icon: 'F' },
  { col: 1, row: 2, title: 'Antrean job', sub: 'pg-boss, retry', color: '#7C3AED', icon: 'Q' },
  { col: 2, row: 1, title: 'Agen AI', sub: 'LLM + tool calling', color: '#F97316', icon: 'AI' },
  { col: 3, row: 0, title: 'RAG', sub: 'pgvector + embedding', color: '#EA580C', icon: 'R' },
  { col: 3, row: 1, title: 'PostgreSQL', sub: 'Percakapan & CRM', color: '#336791', icon: 'P' },
  { col: 3, row: 2, title: 'Dashboard', sub: 'Inbox & analitik', color: '#16A34A', icon: 'D' },
], [[0, 2], [2, 3], [1, 4], [3, 4], [4, 5], [5, 6], [5, 7], [7, 8]], { title: 'AI Messaging Agent', w: 1300, h: 760 }),
  { label: 'Diagram arsitektur generik · detail dibatasi NDA' }));

// ============ Koperasi: galeri tambahan ============
add('cooperative-automation-platform', 'inbox', page(browser('crm.koperasi.id / inbox', `<div style="display:flex;height:100%">
  ${sidebar('Koperasi CRM', ['Dashboard', 'Inbox WhatsApp', 'Anggota', 'Simpanan', 'Tagihan', 'Referral', 'PPOB', 'Laporan'], 1)}
  <div style="width:300px;border-right:1px solid #F0E8E1;background:#fff">${[['Rina A.', 'Sudah transfer kak 🙏', '08:21', 'ok', 'Anggota'], ['Budi S.', 'Link daftarnya mana ya?', '08:15', 'or', 'HOT'], ['Sari M.', 'Cicilan bulan ini berapa?', '07:58', 'info', 'Anggota'], ['Dodi P.', 'Program tahun depan ada?', '07:40', 'warn', 'WARM'], ['Lia K.', 'Terima kasih infonya', 'Kemarin', 'info', 'COLD']].map(([n, m, t, c, tag], i) => `
    <div style="padding:14px 16px;border-bottom:1px solid #F5EFE9;background:${i === 1 ? '#FFF7ED' : '#fff'}"><div style="display:flex;justify-content:space-between"><b style="font:600 14px Inter">${n}</b><span class="muted" style="font-size:12px">${t}</span></div>
    <div class="muted" style="font:400 13px Inter;margin:4px 0">${m}</div><span class="pill ${c}">${tag}</span></div>`).join('')}</div>
  <div style="flex:1;display:flex;flex-direction:column;background:#FAF8F6">
    <div style="padding:14px 20px;border-bottom:1px solid #F0E8E1;background:#fff;display:flex;justify-content:space-between;align-items:center"><b class="j">Budi S.</b><span class="pill ok">🤖 Dibalas AI</span></div>
    <div style="flex:1;padding:20px;display:flex;flex-direction:column;gap:10px;font:400 14px Inter">
      <div style="align-self:flex-start;background:#fff;border-radius:12px;padding:10px 14px;max-width:70%">Link daftarnya mana ya?</div>
      <div style="align-self:flex-end;background:#FFEDD5;border-radius:12px;padding:10px 14px;max-width:70%">Ini link pribadi Kakak, berlaku 24 jam: daftar.koperasi.id/r/9Qa1… <div style="font-size:11px;color:#9A6B4B;margin-top:4px">AI agent · sumber: FAQ pendaftaran</div></div></div>
  </div>
  <div style="width:300px;border-left:1px solid #F0E8E1;background:#fff;padding:18px">
    <div class="j" style="font-weight:700;font-size:16px;margin-bottom:12px">Profil 360°</div>
    ${[['Status', 'Calon anggota'], ['Skor lead', 'HOT'], ['Sumber', 'Iklan Meta'], ['Referral', 'Rina A.'], ['Minat', 'Program tabungan']].map(([l, v]) => `<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #F5EFE9;font:500 13px Inter"><span class="muted">${l}</span><span>${v}</span></div>`).join('')}
    <div style="margin-top:16px;background:#F97316;color:#fff;border-radius:12px;padding:12px;text-align:center;font:600 13px Inter">Ambil alih percakapan</div></div>
  </div>`, { w: 1440, h: 860 })));

add('cooperative-automation-platform', 'pembayaran', page(`<div style="display:flex;gap:40px;align-items:center">
  ${['Pilih metode bayar', 'Pembayaran berhasil'].map((title, i) => `<div style="width:370px;height:760px;border-radius:46px;background:#111;padding:12px;box-shadow:0 40px 80px -20px rgba(124,45,18,.35)">
    <div style="width:100%;height:100%;border-radius:36px;overflow:hidden;background:#FFF8F0;padding:48px 20px 20px;display:flex;flex-direction:column;gap:14px">
      <div class="j" style="font-weight:800;font-size:20px">${title}</div>
      ${i === 0 ? `<div class="card"><div class="muted" style="font:500 13px Inter">Tagihan</div><div style="font:600 15px Inter;margin:4px 0">Simpanan wajib Oktober</div><div class="j" style="font-weight:800;font-size:26px">Rp50.000</div></div>
        ${[['QRIS', 'Semua e-wallet & m-banking', true], ['Virtual Account', 'BCA, BNI, BRI, Mandiri', false], ['Invoice', 'Bayar lewat link', false]].map(([m, d, sel]) => `<div class="card" style="display:flex;justify-content:space-between;align-items:center;${sel ? 'border:2px solid #F97316' : ''}"><div><b style="font:600 14px Inter">${m}</b><div class="muted" style="font:400 12px Inter">${d}</div></div><span style="width:20px;height:20px;border-radius:50%;border:2px solid ${sel ? '#F97316' : '#D6CCC3'};background:${sel ? 'radial-gradient(#F97316 45%,#fff 50%)' : '#fff'}"></span></div>`).join('')}
        <div style="margin-top:auto;background:#F97316;color:#fff;border-radius:14px;padding:14px;text-align:center;font:700 15px 'Plus Jakarta Sans'">Bayar Rp50.000</div>`
      : `<div style="margin:30px auto 0;width:110px;height:110px;border-radius:50%;background:#DCFCE7;display:flex;align-items:center;justify-content:center;font-size:54px">✓</div>
        <div class="card" style="text-align:center"><div class="j" style="font-weight:800;font-size:26px">Rp50.000</div><div class="muted" style="font:500 13px Inter">Simpanan wajib Oktober · QRIS</div></div>
        ${[['Nomor anggota', 'KS-0482'], ['Saldo simpanan', 'Rp1.350.000'], ['Waktu', '21 Okt 2026, 08:21']].map(([l, v]) => `<div style="display:flex;justify-content:space-between;font:500 14px Inter;padding:6px 4px"><span class="muted">${l}</span><span>${v}</span></div>`).join('')}
        <div style="margin-top:auto;border:1.5px solid #F97316;color:#F97316;border-radius:14px;padding:13px;text-align:center;font:700 14px 'Plus Jakarta Sans'">Lihat buku tabungan</div>`}
    </div></div>`).join('')}
  <div style="width:420px;display:flex;flex-direction:column;gap:14px">
    <div class="j" style="font-weight:800;font-size:28px;line-height:1.25">Link pribadi, berlaku 24 jam,<br>langsung dari chat</div>
    <div class="muted" style="font:500 16px/1.6 Inter">Pembayaran lewat Xendit (QRIS, VA, invoice). Webhook mencatat ke buku besar double-entry dan mengirim konfirmasi ke WhatsApp anggota.</div>
    ${table(['Akun', 'Debit', 'Kredit'], [['Kas Xendit', 'Rp50.000', ''], ['Simpanan wajib', '', 'Rp50.000']])}
  </div></div>`));
