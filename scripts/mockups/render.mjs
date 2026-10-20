// Render ilustrasi UI proyek ke PNG lewat Edge headless.
//   node scripts/mockups/render.mjs            semua
//   node scripts/mockups/render.mjs coop odoo  hanya yang namanya mengandung kata itu
// Hasil: public/projects/<slug>/<file>.png
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { H, W } from './templates.mjs';
import { scenes } from './scenes.mjs';
import './scenes2.mjs';
import './scenes3.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const EDGE = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe']
  .find((p) => existsSync(p));
if (!EDGE) throw new Error('Microsoft Edge tidak ditemukan');

const filter = process.argv.slice(2);
const tmp = join(tmpdir(), 'porto-mockups');
mkdirSync(tmp, { recursive: true });

for (const s of scenes) {
  const key = `${s.slug}/${s.file}`;
  if (filter.length && !filter.some((f) => key.includes(f))) continue;
  const html = join(tmp, `${s.slug}-${s.file}.html`);
  writeFileSync(html, s.html);
  const out = join(root, 'public', 'projects', s.slug, `${s.file}.png`);
  mkdirSync(dirname(out), { recursive: true });
  rmSync(out, { force: true });
  execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    `--window-size=${W},${H}`, '--virtual-time-budget=6000', `--screenshot=${out}`, `file:///${html.replace(/\\/g, '/')}`],
    { stdio: 'ignore' });
  console.log(existsSync(out) ? `ok  ${key}` : `GAGAL ${key}`);
}
