// Ikon situs: monogram "F." oranye. Menghasilkan src/app/icon.svg, src/app/favicon.ico (16/32/48), src/app/apple-icon.png.
//   node scripts/make-icons.mjs   (butuh @resvg/resvg-js, dipasang sementara lewat npx)
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';

const svg = (rounded = true) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FB923C"/><stop offset="1" stop-color="#EA580C"/></linearGradient></defs>
  <rect width="64" height="64" rx="${rounded ? 14 : 0}" fill="url(#g)"/>
  <path d="M20 14h22v8H29v6h11v8H29v14h-9z" fill="#fff"/>
  <circle cx="46" cy="45" r="5" fill="#fff"/>
</svg>`;

writeFileSync('src/app/icon.svg', svg());
const png = (size, rounded = true) => new Resvg(svg(rounded), { fitTo: { mode: 'width', value: size } }).render().asPng();
writeFileSync('src/app/apple-icon.png', png(180, false));

// ICO berisi PNG (didukung semua browser modern)
const sizes = [16, 32, 48], images = sizes.map((s) => png(s));
const header = Buffer.alloc(6); header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = sizes.map((s, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(s, 0); e.writeUInt8(s, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
  e.writeUInt32LE(images[i].length, 8); e.writeUInt32LE(offset, 12);
  offset += images[i].length;
  return e;
});
writeFileSync('src/app/favicon.ico', Buffer.concat([header, ...entries, ...images]));
console.log('icon.svg, apple-icon.png, favicon.ico');
