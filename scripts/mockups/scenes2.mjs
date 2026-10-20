// Ilustrasi proyek lainnya. Data contoh saja, tanpa nama atau merek klien.
import { barChart, browser, cameraGrid, donut, flow, kpis, lineChart, page, person, phoneChat, sidebar, table } from './templates.mjs';
import { scenes } from './scenes.mjs';

const add = (slug, file, html) => scenes.push({ slug, file, html });
const sideStat = (title, rows) => `<div style="font:600 15px Inter;margin-bottom:12px;color:#F3F4F6">${title}</div>${rows.map(([l, v, c]) =>
  `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-radius:10px;background:#111827;margin-bottom:8px;font:500 13px Inter"><span style="color:#9CA3AF">${l}</span><b style="color:${c ?? '#F3F4F6'}">${v}</b></div>`).join('')}`;

// ============ PPE Detection VMS ============
add('ppe-detection-vms', 'cover', page(cameraGrid([
  { name: 'Area Pompa 1', scene: 'linear-gradient(160deg,#334155,#1E293B 60%,#0F172A)', extra: person(18, 30, 1.1) + person(58, 34, 1.0), boxes: [
    { x: 14, y: 22, w: 22, h: 66, label: 'Helm ✓ Rompi ✓ 0.96' }, { x: 54, y: 27, w: 20, h: 62, label: 'Helm ✗ 0.91', ok: false }] },
  { name: 'Gudang', scene: 'linear-gradient(160deg,#3F3F46,#27272A 60%,#18181B)', extra: person(40, 30, 1.05), boxes: [{ x: 36, y: 22, w: 22, h: 66, label: 'Lengkap 0.94' }] },
  { name: 'Gerbang', scene: 'linear-gradient(160deg,#374151,#1F2937 60%,#111827)', extra: person(25, 32, 0.95) + person(62, 30, 1.0), boxes: [
    { x: 21, y: 25, w: 19, h: 60, label: 'Rompi ✗ 0.88', ok: 'warn' }, { x: 58, y: 23, w: 20, h: 64, label: 'Lengkap 0.97' }] },
  { name: 'Loading Dock', scene: 'linear-gradient(160deg,#1E3A5F,#172554 60%,#0F172A)', extra: person(46, 32, 1.0), boxes: [{ x: 42, y: 24, w: 20, h: 63, label: 'Lengkap 0.95' }] },
], sideStat('Kepatuhan APD hari ini', [['Kamera aktif', '12 / 12', '#22C55E'], ['Kepatuhan', '94,2%', '#22C55E'], ['Pelanggaran', '7', '#EF4444'], ['Perlu ditinjau', '3', '#F59E0B'], ['Lisensi', 'Valid · 214 hari']]) +
  `<div style="margin-top:18px;font:600 15px Inter;color:#F3F4F6;margin-bottom:10px">Insiden terbaru</div>` +
  [['14:02', 'Tanpa helm · Area Pompa 1', '#EF4444'], ['13:47', 'Tanpa rompi · Gerbang', '#F59E0B'], ['11:20', 'Tanpa helm · Gudang', '#22C55E']].map(([t, d, c]) =>
    `<div style="display:flex;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid #1F2937;font:500 13px Inter"><span style="width:8px;height:8px;border-radius:50%;background:${c}"></span><span style="color:#9CA3AF">${t}</span><span style="color:#E5E7EB">${d}</span></div>`).join(''),
  { title: 'PPE Monitoring' }), { dark: true }));

// ============ Business Automation Suite ============
add('business-automation-suite', 'cover', page(`<div style="display:flex;align-items:center;gap:40px">
  ${browser('pos.franchise.id / kasir', `<div style="display:flex;height:100%">
    <div style="flex:1;padding:22px;background:#FFFCFA">
      <div style="display:flex;gap:8px;margin-bottom:16px">${['Semua', 'Minuman', 'Makanan', 'Snack'].map((c, i) => `<span class="pill ${i ? '' : 'or'}" style="${i ? 'background:#F5EFE9;color:#6B635C' : ''}">${c}</span>`).join('')}</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">${[['Kopi Susu', '18.000'], ['Teh Lemon', '12.000'], ['Roti Bakar', '22.000'], ['Kentang', '15.000'], ['Matcha', '24.000'], ['Air Mineral', '5.000'], ['Croissant', '19.000'], ['Brownies', '16.000']].map(([n, p], i) => `
        <div class="card" style="padding:12px"><div style="height:74px;border-radius:10px;background:linear-gradient(135deg,${['#FED7AA', '#FDE68A', '#FECACA', '#BBF7D0'][i % 4]},#FFF7ED);margin-bottom:8px"></div><div style="font:600 13px Inter">${n}</div><div class="muted" style="font:500 12px Inter">Rp${p}</div></div>`).join('')}</div></div>
    <div style="width:280px;border-left:1px solid #F0E8E1;padding:20px;display:flex;flex-direction:column;gap:10px">
      <div class="j" style="font-weight:700;font-size:17px">Pesanan #A-2187</div>
      ${[['Kopi Susu ×2', '36.000'], ['Roti Bakar', '22.000'], ['Brownies', '16.000']].map(([n, p]) => `<div style="display:flex;justify-content:space-between;font:500 13px Inter"><span>${n}</span><span>${p}</span></div>`).join('')}
      <div style="border-top:1px dashed #E7DED6;margin-top:6px;padding-top:10px;display:flex;justify-content:space-between" class="j"><b>Total</b><b>Rp74.000</b></div>
      <div style="margin-top:auto;background:#F97316;color:#fff;border-radius:12px;padding:14px;text-align:center;font:700 15px 'Plus Jakarta Sans'">Bayar · Cetak Struk</div></div></div>`, { w: 1000, h: 640 })}
  ${phoneChat('Asisten Bisnis', [
    { from: 'me', text: 'Laba bersih minggu ini berapa?', time: '20:14' },
    { from: 'bot', html: '<b>Laba bersih 14 sampai 20 Okt</b><br>Omzet: Rp86,4 jt<br>HPP: Rp41,2 jt<br>Operasional: Rp18,9 jt<br><b>Laba: Rp26,3 jt</b> (▲ 9%)<br>Outlet terbaik: Cabang Kota', time: '20:14' },
    { from: 'me', text: 'Stok yang hampir habis?', time: '20:15' },
    { from: 'bot', text: '3 item di bawah batas minimum: susu UHT, gula aren, cup 16oz. Mau saya buatkan permintaan ke gudang?', time: '20:15' },
  ], { subtitle: 'AI agent', w: 340, h: 680 })}</div>`));

// ============ Car Subscription Website ============
const carSvg = (c) => `<svg viewBox="0 0 200 80" width="100%" height="100%"><rect x="20" y="34" width="160" height="26" rx="12" fill="${c}"/><path d="M50 36 L72 16 H128 L152 36Z" fill="${c}" opacity=".85"/><path d="M76 20 H124 L142 35 H60Z" fill="#E0F2FE" opacity=".8"/><circle cx="58" cy="62" r="13" fill="#1F2937"/><circle cx="142" cy="62" r="13" fill="#1F2937"/><circle cx="58" cy="62" r="5" fill="#9CA3AF"/><circle cx="142" cy="62" r="5" fill="#9CA3AF"/></svg>`;
add('car-subscription-website', 'cover', page(browser('drive-subscribe.com.au / cars', `<div style="background:#fff;height:100%">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:18px 40px;border-bottom:1px solid #F1F5F9"><span class="j" style="font-weight:800;font-size:20px">Drive<span style="color:#F97316">Sub</span></span><span style="font:500 14px Inter;color:#64748B">Cars · How it works · FAQ · <b style="color:#F97316">Enquire</b></span></div>
  <div style="display:flex;gap:28px;padding:26px 40px">
    <div style="width:230px">${[['Make', 'Toyota, Mazda, Kia…'], ['Body type', 'SUV · Sedan · Ute'], ['Transmission', 'Automatic'], ['Weekly price', '$180 to $420']].map(([l, v]) => `<div style="margin-bottom:16px"><div style="font:600 13px Inter;margin-bottom:6px">${l}</div><div style="border:1px solid #E2E8F0;border-radius:10px;padding:10px 12px;font:500 13px Inter;color:#64748B">${v}</div></div>`).join('')}</div>
    <div style="flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px">${[['Toyota RAV4 Hybrid', 289, '#0EA5E9'], ['Mazda CX-5', 259, '#EF4444'], ['Kia Sportage', 249, '#64748B'], ['Toyota Corolla', 199, '#F97316'], ['Hyundai Tucson', 269, '#10B981'], ['Ford Ranger', 349, '#1E293B']].map(([n, p, c]) => `
      <div style="border:1px solid #E2E8F0;border-radius:16px;overflow:hidden"><div style="height:118px;background:#F8FAFC;padding:14px 20px">${carSvg(c)}</div>
      <div style="padding:12px 14px"><div style="font:600 14px Inter">${n}</div><div style="font:500 12px Inter;color:#64748B;margin:3px 0 8px">Automatic · 5 seats · Insurance incl.</div><div class="j" style="font-weight:800;color:#F97316">$${p}<span style="font:500 12px Inter;color:#64748B">/week</span></div></div></div>`).join('')}</div>
  </div></div>`, { w: 1400, h: 840 })));

// ============ Scaffolding Rental ============
add('scaffolding-rental-system', 'cover', page(browser('rental.app / stok', `<div style="display:flex;height:100%">
  ${sidebar('Scaffold Pro', ['Dashboard', 'Stok Gudang', 'Proyek', 'Pengiriman', 'Pengembalian', 'Invoice', 'Approval', 'Audit Log'], 1)}
  <div style="flex:1;padding:24px;display:flex;flex-direction:column;gap:16px;background:#FFFCFA">
    <div style="display:flex;justify-content:space-between;align-items:center"><div class="j" style="font-weight:800;font-size:22px">Stok per lokasi</div><span class="pill warn">3 transaksi menunggu approval</span></div>
    ${kpis([{ label: 'Total unit', value: '18.420' }, { label: 'Di proyek', value: '12.905' }, { label: 'Di gudang', value: '5.515' }, { label: 'Tagihan bulan ini', value: 'Rp214 jt' }])}
    <div class="card" style="padding:0;overflow:hidden">${table(['Item', 'Gudang', 'Proyek A', 'Proyek B', 'Proyek C', 'Status'], [
      ['Main frame 1,7 m', '1.240', '2.100', '1.480', '960', '<span class="pill ok">Aman</span>'],
      ['Cross brace', '2.310', '3.920', '2.770', '1.640', '<span class="pill ok">Aman</span>'],
      ['Jack base', '180', '1.020', '760', '410', '<span class="pill warn">Menipis</span>'],
      ['U-head', '96', '880', '640', '350', '<span class="pill bad">Kritis</span>'],
      ['Catwalk', '420', '610', '505', '300', '<span class="pill ok">Aman</span>'],
    ])}</div>
    <div class="card"><div style="font:600 14px Inter;margin-bottom:6px">Pendapatan sewa 12 bulan</div>${barChart([142, 156, 149, 171, 168, 183, 190, 178, 201, 214, 209, 226], { w: 1020, h: 150, labels: ['Nov', 'Des', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt'], highlight: 11 })}</div>
  </div></div>`, { w: 1360, h: 840 })));

// ============ Kindergarten Chatbot ============
add('kindergarten-whatsapp-chatbot', 'cover', page(`<div style="display:flex;gap:44px;align-items:center">
  ${phoneChat('TK Ceria', [
    { from: 'me', text: 'Halo, mau tanya pendaftaran', time: '07:58' },
    { from: 'bot', html: 'Halo Ayah/Bunda 👋 Selamat datang di <b>TK Ceria</b>. Silakan pilih menu:<br>1️⃣ Profil sekolah<br>2️⃣ Pendaftaran siswa baru<br>3️⃣ Kurikulum<br>4️⃣ Biaya<br>5️⃣ Kuota kursi<br>6️⃣ Kontak', time: '07:58' },
    { from: 'me', text: '2', time: '07:59' },
    { from: 'bot', html: '<b>Pendaftaran TA 2027/2028</b><br>• Usia 4 sampai 6 tahun<br>• Formulir + akta kelahiran<br>• Observasi anak: tiap Sabtu<br>Ketik <b>5</b> untuk cek kuota kursi.', time: '07:59' },
  ], { subtitle: 'balas otomatis' })}
  ${phoneChat('TK Ceria', [
    { from: 'me', text: '5', time: '08:01' },
    { from: 'bot', html: '<b>Kuota kursi saat ini</b><br>Kelompok A: 6 kursi tersisa<br>Kelompok B: 3 kursi tersisa', time: '08:01' },
    { from: 'me', text: '1', time: '08:02' },
    { from: 'bot', html: '<div style="height:120px;border-radius:8px;background:linear-gradient(135deg,#FDE68A,#FCA5A5);margin-bottom:6px"></div>Galeri fasilitas: ruang kelas, taman bermain, perpustakaan mini.', time: '08:02' },
  ], { subtitle: 'balas otomatis' })}</div>`));

// ============ Car Parts Website ============
add('car-parts-workshop-website', 'cover', page(browser('autoparts.com.au / catalog', `<div style="background:#fff;height:100%">
  <div style="background:#0F172A;color:#fff;padding:30px 44px">
    <div class="j" style="font-weight:800;font-size:30px">Find parts that fit your car</div>
    <div style="display:flex;gap:12px;margin-top:16px">${['Toyota', 'Hilux', '2019', 'Brake pads'].map((v) => `<div style="background:#1E293B;border:1px solid #334155;border-radius:10px;padding:12px 16px;font:500 14px Inter;min-width:150px">${v} ▾</div>`).join('')}<div style="background:#F97316;border-radius:10px;padding:12px 22px;font:700 14px Inter">Search</div></div></div>
  <div style="padding:24px 44px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px">${[['Ceramic Brake Pads', 89], ['Oil Filter', 19], ['LED Headlight Kit', 149], ['Air Filter', 34], ['Wiper Blades', 29], ['Spark Plug Set', 59], ['Shock Absorber', 189], ['Timing Belt Kit', 239]].map(([n, p], i) => `
    <div style="border:1px solid #E2E8F0;border-radius:14px;padding:12px"><div style="height:90px;border-radius:10px;background:linear-gradient(135deg,${['#E2E8F0', '#FED7AA', '#BFDBFE', '#D1FAE5'][i % 4]},#F8FAFC);margin-bottom:10px"></div>
    <div style="font:600 13px Inter">${n}</div><div style="font:500 12px Inter;color:#16A34A;margin:4px 0">✓ Fits Hilux 2019</div>
    <div style="display:flex;justify-content:space-between;align-items:center"><b class="j">$${p}</b><span class="pill" style="background:#FEF3C7;color:#92400E">Buy on eBay</span></div></div>`).join('')}</div></div>`, { w: 1400, h: 840 })));

// ============ Multi-channel CS (tirai) ============
add('multichannel-cs-automation', 'cover', page(`<div style="display:flex;gap:44px;align-items:center">
  ${phoneChat('Toko Tirai', [
    { from: 'me', text: 'Kak, harga roller blind ukuran 120x150 berapa? Mau 3 jendela', time: '10:20' },
    { from: 'bot', html: 'Halo Kak 😊 Untuk <b>roller blind blackout</b> 120x150:<br>Rp385.000 × 3 = Rp1.155.000<br>Diskon 3 jendela 5%: <b>Rp1.097.250</b><br>Sudah termasuk pemasangan.', time: '10:20' },
    { from: 'me', text: 'Oke kak, saya ambil', time: '10:24' },
    { from: 'bot', html: '<div style="display:flex;gap:8px;align-items:center;background:#F1F5F9;border-radius:8px;padding:8px"><div style="width:32px;height:40px;background:#EF4444;border-radius:4px;color:#fff;font:700 10px Inter;display:flex;align-items:center;justify-content:center">PDF</div><div><b>Penawaran-0912.pdf</b><br><span style="color:#64748B;font-size:12px">2 halaman</span></div></div>Invoice DP 50% juga sudah saya kirim ya Kak.', time: '10:24' },
  ], { subtitle: 'AI customer service' })}
  <div style="display:flex;flex-direction:column;gap:16px;width:520px">
    <div class="card" style="padding:20px"><div class="j" style="font-weight:700;font-size:18px;margin-bottom:12px">Lead masuk hari ini</div>
      ${[['WhatsApp', 38, '#22C55E'], ['TikTok Shop', 21, '#111827']].map(([c, n, col]) => `<div style="display:flex;align-items:center;gap:10px;margin:10px 0"><span style="width:90px;font:600 13px Inter">${c}</span><div style="flex:1;height:12px;border-radius:6px;background:#F5EFE9"><div style="width:${n * 2.2}%;height:100%;border-radius:6px;background:${col}"></div></div><b class="j">${n}</b></div>`).join('')}</div>
    <div class="card" style="padding:0;overflow:hidden">${table(['Kontak', 'Minat', 'Estimasi', 'Status'], [
      ['Dewi', 'Roller blind ×3', 'Rp1,10 jt', '<span class="pill ok">DP lunas</span>'],
      ['Andi', 'Gorden smokring', 'Rp2,45 jt', '<span class="pill or">Penawaran</span>'],
      ['Lina', 'Vertical blind', 'Rp860 rb', '<span class="pill info">Tanya</span>'],
      ['Rudi', 'Wooden blind ×2', 'Rp3,20 jt', '<span class="pill warn">Ke admin</span>'],
    ])}</div></div></div>`));

// ============ Odoo × Shopee ============
add('odoo-shopee-integration', 'cover', page(flow([
  { col: 0, row: 0, title: 'Odoo 17', sub: 'Produk & varian', color: '#714B67', icon: 'O' },
  { col: 0, row: 2, title: 'Shopee Webhook', sub: 'Pesanan baru', color: '#EE4D2D', icon: 'S' },
  { col: 1, row: 0, title: 'Mapping varian', sub: 'SKU ↔ model', color: '#F97316', icon: '⇄' },
  { col: 1, row: 1, title: 'Sinkron stok', sub: 'Dua arah, real time', color: '#0EA5E9', icon: '↻' },
  { col: 1, row: 2, title: 'Verifikasi HMAC', sub: 'SHA-256', color: '#64748B', icon: '🔒' },
  { col: 2, row: 0, title: 'Shopee API', sub: 'add_item / update', color: '#EE4D2D', icon: 'S' },
  { col: 2, row: 2, title: 'Sales Order', sub: 'Dibuat di Odoo', color: '#714B67', icon: 'O' },
  { col: 3, row: 1, title: 'Refresh token', sub: 'Cron tiap 3 jam', color: '#16A34A', icon: '⏱' },
], [[0, 2], [2, 5], [0, 3], [3, 5], [1, 4], [4, 6], [5, 7]], { title: 'Odoo ↔ Shopee Sync', w: 1300, h: 760 })));

// ============ Spray Nozzle Inspector ============
add('spray-nozzle-ai-inspector', 'cover', page(browser('Nozzle Inspector · Raspberry Pi 5', `<div style="display:flex;height:100%;background:#0F172A;color:#E5E7EB">
  <div style="flex:1;padding:20px;position:relative">
    <div style="position:relative;height:100%;border-radius:14px;overflow:hidden;background:radial-gradient(circle at 50% 18%,#1E293B,#020617 70%)">
      <svg width="100%" height="100%" viewBox="0 0 800 600" style="position:absolute;inset:0">
        <rect x="372" y="40" width="56" height="70" rx="8" fill="#64748B"/>
        <path d="M400 110 L250 520 Q400 560 550 520 Z" fill="url(#g)" opacity=".85"/>
        <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E0F2FE"/><stop offset="1" stop-color="#38BDF8" stop-opacity=".1"/></linearGradient></defs>
        <line x1="400" y1="110" x2="400" y2="540" stroke="#22C55E" stroke-width="2" stroke-dasharray="6 6"/>
        <line x1="250" y1="520" x2="550" y2="520" stroke="#F97316" stroke-width="3"/>
        <path d="M400 170 L362 180" stroke="#FACC15" stroke-width="2"/><path d="M400 170 L438 180" stroke="#FACC15" stroke-width="2"/>
        <text x="420" y="330" fill="#22C55E" font-family="Inter" font-size="18" font-weight="600">L = 41,8 mm</text>
        <text x="330" y="560" fill="#F97316" font-family="Inter" font-size="18" font-weight="600">W = 23,4 mm</text>
        <text x="445" y="190" fill="#FACC15" font-family="Inter" font-size="18" font-weight="600">θ = 31,6°</text>
      </svg>
      <div style="position:absolute;left:14px;top:14px" class="pill ok">● Live · 24 fps</div></div></div>
  <div style="width:340px;border-left:1px solid #1F2937;padding:22px">
    <div style="font:600 15px Inter;margin-bottom:14px">Hasil inspeksi</div>
    <div style="background:#052E16;border:1px solid #166534;border-radius:14px;padding:18px;margin-bottom:16px"><div style="font:500 13px Inter;color:#86EFAC">Kondisi nozzle</div><div class="j" style="font-weight:800;font-size:32px;color:#22C55E">NORMAL</div><div style="font:500 13px Inter;color:#86EFAC">confidence 0,97</div></div>
    ${[['Panjang semprotan', '41,8 mm'], ['Lebar', '23,4 mm'], ['Sudut', '31,6°'], ['Simetri', '96,1%']].map(([l, v]) => `<div style="display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid #1F2937;font:500 14px Inter"><span style="color:#9CA3AF">${l}</span><b>${v}</b></div>`).join('')}
    <div style="display:flex;gap:8px;margin-top:18px">${[['Normal', '#22C55E'], ['Repair', '#F59E0B'], ['Replace', '#EF4444']].map(([l, c]) => `<span style="flex:1;text-align:center;padding:8px;border-radius:10px;border:1px solid ${c};color:${c};font:600 12px Inter">${l}</span>`).join('')}</div>
  </div></div>`, { w: 1300, h: 800 }), { dark: true }));

// ============ Activity Recognition ============
add('ai-camera-activity-recognition', 'cover', page(cameraGrid([
  { name: 'Ruang tamu', scene: 'linear-gradient(160deg,#3B3B4F,#232336)', extra: person(30, 30, 1.0, '#7C8597'), boxes: [{ x: 26, y: 22, w: 20, h: 66, label: 'Orang #1 · berjalan 0.92' }] },
  { name: 'Dapur', scene: 'linear-gradient(160deg,#3F3A33,#262320)', extra: person(52, 34, 0.95, '#8A8077'), boxes: [{ x: 48, y: 26, w: 19, h: 62, label: 'Orang #2 · memasak 0.88' }] },
  { name: 'Teras', scene: 'linear-gradient(160deg,#2B3A33,#18241F)', extra: person(22, 36, 0.9, '#7A8F84'), boxes: [{ x: 18, y: 28, w: 18, h: 60, label: 'Orang #3 · duduk 0.90' }, { x: 60, y: 60, w: 18, h: 22, label: 'Kucing 0.86', ok: 'warn' }] },
  { name: 'Kamar', scene: 'linear-gradient(160deg,#2E3346,#1A1E2C)', extra: person(44, 46, 0.7, '#7C8597'), boxes: [{ x: 38, y: 44, w: 26, h: 40, label: 'Orang #1 · terjatuh! 0.81', ok: false }] },
], sideStat('Aktivitas terdeteksi', [['Orang terlacak', '3'], ['Hewan', '1'], ['Ekspresi dominan', 'Tersenyum'], ['Peringatan', 'Terjatuh · Kamar', '#EF4444']]) +
  `<div style="margin-top:18px;font:600 15px Inter;color:#F3F4F6;margin-bottom:8px">Durasi aktivitas (jam)</div>` +
  [['Berjalan', 62], ['Duduk', 88], ['Memasak', 35], ['Tidur', 40]].map(([l, v]) => `<div style="display:flex;align-items:center;gap:10px;margin:9px 0;font:500 13px Inter"><span style="width:70px;color:#9CA3AF">${l}</span><div style="flex:1;height:9px;border-radius:5px;background:#1F2937"><div style="width:${v}%;height:100%;border-radius:5px;background:#F97316"></div></div></div>`).join(''),
  { title: 'Activity Recognition' }), { dark: true }));

// ============ AI Sales Agent (PPF) ============
add('ai-sales-automation-agent', 'cover', page(`<div style="display:flex;gap:44px;align-items:center">
  ${phoneChat('Studio Wrap', [
    { from: 'me', text: 'Kak, PPF full body untuk Fortuner berapa?', time: '13:05' },
    { from: 'bot', html: 'Halo Kak! Untuk <b>PPF glossy full body Fortuner</b> mulai <b>Rp18,5 jt</b>, garansi 5 tahun. Mau sekalian booking survei gratis?', time: '13:05' },
    { from: 'bot', html: '<span style="color:#64748B;font-size:12px">⏰ follow-up otomatis · 8 jam kemudian</span><br>Kak, slot pemasangan minggu ini tinggal 2. Mau saya kunci satu untuk Kakak?', time: '21:05' },
    { from: 'me', text: 'Boleh, Sabtu ya', time: '21:30' },
  ], { subtitle: 'AI sales agent' })}
  <div style="display:flex;flex-direction:column;gap:16px;width:560px">
    ${kpis([{ label: 'Lead HOT', value: '14', delta: '+5' }, { label: 'Konversi', value: '23%', delta: '+6%' }, { label: 'Follow-up terkirim', value: '312' }])}
    <div class="card" style="padding:0;overflow:hidden">${table(['Lead', 'Kanal', 'Skor', 'Tahap'], [
      ['Hendra', 'WhatsApp', '<span class="pill bad">HOT</span>', 'Booking Sabtu'],
      ['Maya', 'Instagram', '<span class="pill warn">WARM</span>', 'Follow-up 2/3'],
      ['Yoga', 'WhatsApp', '<span class="pill bad">HOT</span>', 'Invoice terkirim'],
      ['Nita', 'Instagram', '<span class="pill info">COLD</span>', 'Tanya harga'],
    ])}</div></div></div>`));

// ============ WhatsApp + Odoo ERP ============
add('whatsapp-chatbot-odoo-erp', 'cover', page(`<div style="display:flex;gap:44px;align-items:center">
  ${phoneChat('Distributor Alkes', [
    { from: 'me', text: 'Pesan sarung tangan nitril 10 box dan masker 3 ply 5 box', time: '09:10' },
    { from: 'bot', html: 'Siap 🙏 Ringkasan pesanan:<br>• Nitril M ×10 box: Rp1.250.000<br>• Masker 3 ply ×5 box: Rp225.000<br><b>Total Rp1.475.000</b><br>Konfirmasi? (Ya/Ubah)', time: '09:10' },
    { from: 'me', text: 'Ya', time: '09:11' },
    { from: 'bot', html: 'Pesanan <b>SO/2026/0418</b> sudah dibuat. Proforma invoice terlampir 📄', time: '09:11' },
  ], { subtitle: 'AI sales' })}
  ${browser('erp.local / Sales / SO/2026/0418', `<div style="padding:24px;background:#fff;height:100%">
    <div style="display:flex;gap:8px;margin-bottom:18px">${['Quotation', 'Quotation Sent', 'Sales Order'].map((s, i) => `<span class="pill" style="${i === 2 ? 'background:#714B67;color:#fff' : 'background:#F3F4F6;color:#6B7280'}">${s}</span>`).join('')}</div>
    <div class="j" style="font-weight:800;font-size:24px;margin-bottom:14px">SO/2026/0418</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font:500 14px Inter;margin-bottom:18px"><div><span class="muted">Pelanggan</span><br>Apotek Sehat Jaya</div><div><span class="muted">Sumber</span><br>WhatsApp AI</div></div>
    ${table(['Produk', 'Qty', 'Harga', 'Subtotal'], [['Sarung tangan nitril M', '10', '125.000', '1.250.000'], ['Masker 3 ply', '5', '45.000', '225.000']])}
    <div class="j" style="text-align:right;font-weight:800;font-size:20px;margin-top:16px">Rp1.475.000</div></div>`, { w: 760, h: 560 })}</div>`));

// ============ JerseyGen ============
const jersey = (c1, c2, num) => `<svg viewBox="0 0 300 320" width="340" height="360"><path d="M90 20 L60 30 L10 80 L45 125 L70 105 L70 300 L230 300 L230 105 L255 125 L290 80 L240 30 L210 20 Q150 60 90 20Z" fill="${c1}" stroke="#0F172A" stroke-width="3"/>
  <path d="M70 140 L230 120 L230 170 L70 190Z" fill="${c2}"/><path d="M110 22 Q150 52 190 22" fill="none" stroke="${c2}" stroke-width="10"/>
  <text x="150" y="250" font-family="Plus Jakarta Sans" font-weight="800" font-size="70" fill="#fff" text-anchor="middle">${num}</text></svg>`;
add('jerseygen-design-studio', 'cover', page(browser('jerseygen.app / studio', `<div style="display:flex;height:100%;background:#F8FAFC">
  <div style="width:300px;background:#fff;border-right:1px solid #E2E8F0;padding:20px">
    <div class="j" style="font-weight:800;font-size:18px;margin-bottom:16px">Desain jersey</div>
    ${[['Pola', 'Diagonal stripe'], ['Nama', 'FERRI'], ['Nomor', '10'], ['Sponsor', 'Tim Kampung FC']].map(([l, v]) => `<div style="margin-bottom:14px"><div style="font:600 12px Inter;color:#64748B;margin-bottom:5px">${l}</div><div style="border:1px solid #E2E8F0;border-radius:10px;padding:9px 12px;font:500 13px Inter">${v}</div></div>`).join('')}
    <div style="font:600 12px Inter;color:#64748B;margin-bottom:8px">Warna</div><div style="display:flex;gap:8px">${['#F97316', '#0F172A', '#2563EB', '#16A34A', '#DC2626'].map((c, i) => `<span style="width:30px;height:30px;border-radius:50%;background:${c};outline:${i < 2 ? '3px solid #FDBA74' : 'none'};outline-offset:2px"></span>`).join('')}</div>
    <div style="margin-top:22px;background:#F97316;color:#fff;border-radius:12px;padding:13px;text-align:center;font:700 14px 'Plus Jakarta Sans'">✨ Render AI dengan wajahku</div></div>
  <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:40px;position:relative">
    <div style="text-align:center">${jersey('#F97316', '#0F172A', 10)}<div class="muted" style="font:500 13px Inter">Tampilan 3D · putar 360°</div></div>
    <div style="width:300px;height:420px;border-radius:18px;background:linear-gradient(160deg,#CBD5E1,#94A3B8);position:relative;overflow:hidden">
      <svg style="position:absolute;left:50%;top:40px;transform:translateX(-50%)" width="120" height="150" viewBox="0 0 120 150"><ellipse cx="60" cy="58" rx="40" ry="48" fill="#D9B08C"/><path d="M20 50 Q22 8 60 8 Q98 8 100 50 Q92 26 60 24 Q28 26 20 50Z" fill="#3B2A20"/><rect x="46" y="100" width="28" height="40" fill="#C99A75"/></svg>
      <div style="position:absolute;left:50%;top:150px;transform:translateX(-50%)">${jersey('#F97316', '#0F172A', 10).replace('width="340" height="360"', 'width="250" height="270"')}</div>
      <span class="pill ok" style="position:absolute;left:12px;top:12px">Render AI</span></div>
  </div></div>`, { w: 1400, h: 820 })));

// ============ MDCNN ============
add('mdcnn-text-classifier', 'cover', page(browser('colab · MDCNN_AGNews.ipynb', `<div style="padding:26px 34px;background:#fff;height:100%;font-family:Inter">
  <div style="font:600 13px 'Courier New';background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:14px;color:#334155;margin-bottom:18px">
    <span style="color:#7C3AED">loss</span> = α · CE(student, y) + (1 − α) · Σ w<sub>i</sub> · KL(student<sub>τ</sub> ‖ teacher<sub>i,τ</sub>) &nbsp;&nbsp;<span style="color:#94A3B8"># α = 0.3, τ = 5</span></div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px">
    <div class="card"><div style="font:600 14px Inter;margin-bottom:10px">Akurasi uji AG News</div>
      ${[['BERT (teacher)', 94.6, '#7C3AED'], ['BiGRU (teacher)', 91.8, '#0EA5E9'], ['TextCNN biasa', 90.2, '#94A3B8'], ['MDCNN (student)', 93.9, '#F97316']].map(([l, v, c]) => `<div style="display:flex;align-items:center;gap:12px;margin:14px 0"><span style="width:150px;font:600 13px Inter">${l}</span><div style="flex:1;height:22px;border-radius:6px;background:#F1F5F9"><div style="width:${(v - 85) * 10}%;height:100%;border-radius:6px;background:${c}"></div></div><b class="j" style="width:56px">${v}%</b></div>`).join('')}</div>
    <div class="card"><div style="font:600 14px Inter;margin-bottom:10px">Ukuran model (juta parameter)</div>${barChart([110, 8.6, 3.1], { w: 400, h: 200, labels: ['BERT', 'BiGRU', 'MDCNN'], highlight: 2 })}<div class="muted" style="font:500 13px Inter">≈ 35× lebih kecil dari BERT, akurasi selisih 0,7 poin</div></div>
  </div>
  <div class="card" style="margin-top:20px"><div style="font:600 14px Inter;margin-bottom:6px">Kurva validasi per epoch</div>${lineChart([[86, 89.5, 91.2, 92.4, 93.1, 93.5, 93.8, 93.9], [84, 87, 88.6, 89.4, 89.9, 90.1, 90.2, 90.2]], { w: 1240, h: 170, labels: ['1', '2', '3', '4', '5', '6', '7', '8'] })}</div>
</div>`, { w: 1360, h: 840 })));

// ============ Ad Performance Monitor ============
add('ad-performance-ai-advisor', 'cover', page(`<div style="display:flex;gap:44px;align-items:center">
  ${browser('ads.monitor / ringkasan', `<div style="padding:24px;background:#FFFCFA;height:100%;display:flex;flex-direction:column;gap:16px">
    <div class="j" style="font-weight:800;font-size:22px">ROAS 14 hari terakhir</div>
    ${kpis([{ label: 'Belanja iklan', value: 'Rp38,2 jt' }, { label: 'Omzet atribusi', value: 'Rp141 jt', delta: '+12%' }, { label: 'ROAS gabungan', value: '3,69', delta: '-0,4' }])}
    <div class="card"><div style="display:flex;gap:16px;font:600 12px Inter;margin-bottom:6px"><span style="color:#2563EB">● Meta Ads</span><span style="color:#EE4D2D">● Shopee</span><span style="color:#111827">● TikTok Shop</span></div>
      ${lineChart([[4.1, 4.3, 3.9, 4.4, 4.2, 4.6, 4.0, 3.8, 3.6, 3.4, 3.3, 3.1, 3.2, 3.0], [3.2, 3.3, 3.5, 3.4, 3.6, 3.8, 3.7, 3.9, 4.0, 4.1, 4.0, 4.2, 4.3, 4.4], [2.1, 2.4, 2.2, 2.6, 2.9, 2.7, 3.0, 3.1, 2.9, 3.2, 3.4, 3.3, 3.5, 3.6]], { w: 760, h: 230, colors: ['#2563EB', '#EE4D2D', '#111827'], area: false })}</div></div>`, { w: 860, h: 600 })}
  ${phoneChat('Ads Advisor', [
    { from: 'bot', html: '⚠️ <b>ROAS Meta turun ke 3,0</b> (batas 3,5)<br>Penyebab utama: CPM naik 27% di ad set "Retargeting 30D".<br><br><b>Saran:</b><br>1. Turunkan budget ad set itu 30%<br>2. Pindahkan ke "Lookalike Pembeli" (ROAS 4,8)<br>3. Ganti 2 creative dengan CTR di bawah 0,8%', time: '07:00' },
    { from: 'me', text: 'Bandingkan dengan minggu lalu', time: '07:12' },
    { from: 'bot', text: 'Minggu lalu ROAS Meta 4,3. Penurunan terjadi mulai Kamis, bersamaan dengan kenaikan frekuensi ke 3,8.', time: '07:12' },
  ], { subtitle: 'Telegram · AI advisor', theme: 'tg', w: 360, h: 700 })}</div>`));

// ============ Fuel Supply Chain AI ============
add('fuel-supply-chain-ai', 'cover', page(browser('fuel-terminal.streamlit.app', `<div style="display:flex;height:100%">
  <div style="width:250px;background:#F8FAFC;border-right:1px solid #E2E8F0;padding:20px;font:500 13px Inter">
    <div class="j" style="font-weight:800;font-size:17px;margin-bottom:16px">⛽ Supply AI</div>
    ${[['Horizon prediksi', '5 tahun'], ['Model', 'XGBoost + Prophet'], ['Tampilan', 'Volume (KL)'], ['Granularitas', 'Bulanan']].map(([l, v]) => `<div style="margin-bottom:14px"><div style="color:#64748B;margin-bottom:5px">${l}</div><div style="background:#fff;border:1px solid #E2E8F0;border-radius:8px;padding:8px 10px">${v}</div></div>`).join('')}</div>
  <div style="flex:1;padding:22px;display:grid;grid-template-columns:1.1fr 1fr;gap:16px;align-content:start;background:#fff">
    <div class="card" style="grid-row:span 2;position:relative;overflow:hidden;height:610px;background:linear-gradient(135deg,#E0F2FE,#F0FDF4)">
      <div style="font:600 14px Inter;margin-bottom:8px">Peta jaringan SPBU</div>
      <svg width="100%" height="560" viewBox="0 0 500 560"><path d="M40 300 Q120 120 260 140 T470 120 L480 420 Q300 520 60 470Z" fill="#DCFCE7" stroke="#86EFAC" stroke-width="2"/>
        ${Array.from({ length: 70 }, (_, i) => { const x = 70 + ((i * 97) % 390), y = 170 + ((i * 53) % 280), r = 4 + (i % 5); return `<circle cx="${x}" cy="${y}" r="${r}" fill="${i % 7 ? '#F97316' : '#DC2626'}" opacity=".75"/>`; }).join('')}
        <rect x="235" y="290" width="22" height="22" rx="4" fill="#0F172A"/><text x="262" y="306" font-size="13" font-family="Inter" font-weight="600">Terminal</text></svg></div>
    <div class="card"><div style="font:600 14px Inter;margin-bottom:6px">Prediksi permintaan (KL/bulan)</div>${lineChart([[410, 428, 445, 460, 472, 490, 508, 521, 540, 556, 571, 590], [400, 420, 431, 452, 468, 475, 498, 510, 522, 540, 560, 575]], { w: 500, h: 210, labels: ['2026', '2027', '2028', '2029', '2030', '2031'] })}</div>
    <div class="card"><div style="font:600 14px Inter;margin-bottom:8px">Tanya AI</div>
      <div style="background:#F1F5F9;border-radius:10px;padding:10px;font:500 13px Inter;margin-bottom:8px">SPBU mana yang perlu tambahan jadwal kirim tahun depan?</div>
      <div style="background:#FFF7ED;border-radius:10px;padding:10px;font:500 13px Inter">12 SPBU di koridor timur diprediksi naik di atas 18%. Tambahan 2 trip/minggu cukup untuk 9 di antaranya.</div></div>
  </div></div>`, { w: 1400, h: 840 })));
