// Lembar kontak semua cover untuk dicek sekaligus: node scripts/mockups/sheet.mjs <output.png>
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const dir = resolve('public/projects');
const items = readdirSync(dir).filter((d) => existsSync(join(dir, d, 'cover.png')));
const url = (p) => 'file:///' + p.replace(/\\/g, '/');
const html = `<html><body style="margin:0;background:#ccc;display:grid;grid-template-columns:repeat(4,400px);gap:8px;padding:8px">${items.map((d) =>
  `<div style="font:13px sans-serif"><img src="${url(join(dir, d, 'cover.png'))}" width="400" height="250"><div>${d}</div></div>`).join('')}</body></html>`;
const file = join(tmpdir(), 'sheet.html');
writeFileSync(file, html);
const rows = Math.ceil(items.length / 4);
execFileSync('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', ['--headless=new', '--disable-gpu', '--hide-scrollbars',
  `--window-size=1640,${rows * 280 + 20}`, '--virtual-time-budget=4000', '--allow-file-access-from-files', `--screenshot=${resolve(process.argv[2] ?? join(tmpdir(), 'sheet.png'))}`, url(file)], { stdio: 'ignore' });
console.log(items.length, 'cover');
