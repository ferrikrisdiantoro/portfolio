// Isi tiap ilustrasi. Data contoh saja: nama orang, nomor, dan merek adalah fiktif.
import { barChart, browser, donut, flow, kpis, lineChart, page, phoneChat, sidebar, table } from './templates.mjs';

export const scenes = [];
const add = (slug, file, html) => scenes.push({ slug, file, html });

// ============ Platform koperasi (anonim) ============

add('cooperative-automation-platform', 'cover', page(`
  <div style="display:flex;align-items:center;gap:48px">
    ${phoneChat('Asisten Koperasi', [
      { from: 'me', text: 'Assalamualaikum, mau daftar jadi anggota bisa?', time: '08:12' },
      { from: 'bot', text: 'Waalaikumsalam Kak 🙏 Bisa sekali. Simpanan pokok Rp100.000 dan wajib Rp50.000/bulan. Mau saya kirimkan link pendaftaran?', time: '08:12' },
      { from: 'me', text: 'Boleh kak', time: '08:13' },
      { from: 'bot', html: 'Ini link pribadi Kakak (berlaku 24 jam):<br><span style="color:#027EB5;text-decoration:underline">daftar.koperasi.id/r/7Kx2…</span>', time: '08:13' },
      { from: 'me', text: 'Sudah transfer via QRIS ya', time: '08:21' },
      { from: 'bot', html: '✅ Pembayaran <b>Rp150.000</b> diterima.<br>Selamat bergabung, nomor anggota Kakak <b>KS-0482</b>.', time: '08:21' },
    ], { subtitle: 'AI agent · online' })}
    ${browser('crm.koperasi.id / dashboard', `<div style="display:flex;height:100%">
      ${sidebar('Koperasi CRM', ['Dashboard', 'Inbox WhatsApp', 'Anggota', 'Simpanan', 'Tagihan', 'Referral', 'PPOB', 'Laporan'], 0)}
      <div style="flex:1;padding:24px;display:flex;flex-direction:column;gap:16px;background:#FFFCFA">
        <div class="j" style="font-weight:800;font-size:22px">Ringkasan Oktober</div>
        ${kpis([{ label: 'Anggota aktif', value: '1.284', delta: '+6,2%' }, { label: 'Simpanan masuk', value: 'Rp482 jt', delta: '+11%' }, { label: 'Percakapan AI', value: '9.317', delta: '+18%' }])}
        <div style="display:grid;grid-template-columns:1.6fr 1fr;gap:14px">
          <div class="card"><div style="font:600 14px Inter;margin-bottom:8px">Simpanan harian</div>${lineChart([[12, 18, 15, 22, 19, 27, 24, 31, 28, 35, 33, 41], [8, 10, 12, 11, 15, 14, 18, 17, 20, 22, 21, 25]], { w: 440, h: 190 })}</div>
          <div class="card"><div style="font:600 14px Inter;margin-bottom:10px">Tagihan</div>
            ${[['Lunas', 'ok', '842'], ['Jatuh tempo', 'warn', '96'], ['Terlambat', 'bad', '23']].map(([l, c, n]) => `<div style="display:flex;justify-content:space-between;align-items:center;margin:10px 0"><span class="pill ${c}">${l}</span><b class="j">${n}</b></div>`).join('')}</div>
        </div>
        <div class="card" style="padding:0;overflow:hidden">${table(['Anggota', 'Transaksi', 'Nominal', 'Kanal', 'Status'], [
          ['Rina A.', 'Simpanan wajib', 'Rp50.000', 'QRIS', '<span class="pill ok">Lunas</span>'],
          ['Budi S.', 'Pendaftaran', 'Rp150.000', 'VA', '<span class="pill ok">Lunas</span>'],
          ['Sari M.', 'Cicilan program', 'Rp1.250.000', 'Invoice', '<span class="pill warn">Menunggu</span>'],
        ])}</div>
      </div></div>`, { w: 900, h: 640 })}
  </div>`));

// ============ Mokapos ke WhatsApp ============

add('mokapos-whatsapp-automation', 'cover', page(`
  <div style="display:flex;align-items:center;gap:40px">
    ${flow([
      { col: 0, row: 1, title: 'Jadwal 23:00', sub: 'Cron harian', color: '#64748B', icon: '⏰' },
      { col: 1, row: 1, title: 'Mokapos API', sub: 'Penjualan per outlet', color: '#E11D48', icon: 'M' },
      { col: 2, row: 0, title: 'Rekap outlet', sub: 'Hitung omzet', color: '#F97316', icon: 'Σ' },
      { col: 2, row: 2, title: 'Google Sheets', sub: 'Backup harian', color: '#16A34A', icon: 'S' },
      { col: 3, row: 1, title: 'WhatsApp', sub: 'Kirim ke owner', color: '#22C55E', icon: 'W' },
    ], [[0, 1], [1, 2], [1, 3], [2, 4]], { w: 1080, h: 560, title: 'Laporan Harian' })}
    ${phoneChat('Bot Laporan', [
      { from: 'bot', html: '<b>📊 Laporan 20 Okt</b><br>Outlet Pusat: Rp4.820.000<br>Outlet Timur: Rp3.115.000<br>Outlet Selatan: Rp2.970.000<br><b>Total: Rp10.905.000</b><br>vs kemarin ▲ 8%', time: '23:00' },
    ], { subtitle: 'otomatis', w: 330, h: 640 })}
  </div>`));
