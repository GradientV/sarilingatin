// makes the icon and share-image files that can't be SVG:
//
//     npm run brand
//
//     public/apple-touch-icon.png   180 x 180, for iPhone home screens
//     public/icon-192.png           for Android / the web app manifest
//     public/icon-512.png
//     public/og-image.jpg           1200 x 630, the picture shown when a link is shared
//
// the icons come from public/favicon.svg. the share image is the pork BBQ photo next
// to a red panel with the name; its text is drawn with fonts installed on this computer
// (Georgia / Arial), so run it on Windows or macOS. the results are committed, so
// Vercel never runs this.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = (file: string) => path.join(root, 'public', file);

// --- icons: the favicon with square corners (iOS and Android round them themselves)
const favicon = (await readFile(pub('favicon.svg'), 'utf8')).replace('rx="14"', 'rx="0"');
for (const [file, size] of [
    ['apple-touch-icon.png', 180],
    ['icon-192.png', 192],
    ['icon-512.png', 512]
] as const) {
    await sharp(Buffer.from(favicon), { density: (72 * size) / 64 })
        .resize(size, size)
        .png()
        .toFile(pub(file));
    console.log(`  public/${file}`);
}

// --- share image
const W = 1200;
const H = 630;
const PANEL = 620;

// banderitas across the top of the red panel
const flags = Array.from({ length: 14 }, (_, i) => {
    const x = 22 + i * 44;
    const colors = ['#fcc419', '#1f4fb4', '#fffcf6', '#3d8a4f', '#fcc419'];
    return `<path d="M${x - 15} 18 L${x + 15} 18 L${x} 46 Z" fill="${colors[i % colors.length]}" stroke="#4a0b0d" stroke-opacity=".35"/>`;
}).join('');

const petals = [0, 72, 144, 216, 288]
    .map((a) => `<ellipse cx="32" cy="14.5" rx="6.6" ry="10.5" transform="rotate(${a} 32 26)" fill="#fffdf7" stroke="#e8d6b0" stroke-width=".9"/>`)
    .join('');
const innerPetals = [36, 108, 180, 252, 324]
    .map((a) => `<ellipse cx="32" cy="19" rx="4.4" ry="7" transform="rotate(${a} 32 26)" fill="#fff" stroke="#efe2c4" stroke-width=".7"/>`)
    .join('');

const panel = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#8e1216"/>
  <rect width="${PANEL}" height="${H}" fill="#b3191c"/>
  <path d="M0 18 Q${PANEL / 2} 30 ${PANEL} 18" stroke="#4a0b0d" stroke-width="2" fill="none"/>
  ${flags}
  <g transform="translate(60 128) scale(1.6)">
    <path d="M31 37c-11-3-21 2-26 17 12 2 22-3 26-17Z" fill="#3d8a4f"/>
    <path d="M33 37c11-3 21 2 26 17-12 2-22-3-26-17Z" fill="#58a86a"/>
    ${petals}${innerPetals}
    <circle cx="32" cy="26" r="3.4" fill="#fcc419"/>
  </g>
  <text x="60" y="296" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="76" fill="#fffcf6">Sariling Atin</text>
  <text x="62" y="350" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-weight="700" font-size="34" fill="#ffd95e">Lutong bahay, sariling atin.</text>
  <rect x="60" y="400" width="500" height="54" rx="10" fill="#fcc419" stroke="#211714" stroke-width="3"/>
  <text x="310" y="436" text-anchor="middle" font-family="'Arial Black', Arial, sans-serif" font-size="22" fill="#8e1216" letter-spacing="1">FILIPINO GRILL &amp; GROCERY</text>
  <text x="60" y="512" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="28" fill="#fff7e8">89-12 Queens Blvd · Elmhurst, Queens</text>
  <text x="60" y="556" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#fadcd7">Turo-turo · Party trays · Padala · Since 2014</text>
  <rect x="${PANEL - 3}" y="0" width="6" height="${H}" fill="#211714"/>
</svg>`;

const photo = await sharp(pub('images/food/pork-bbq-grill.webp'))
    .resize(W - PANEL - 3, H, { fit: 'cover', position: 'attention' })
    .toBuffer();

await sharp(Buffer.from(panel))
    .composite([{ input: photo, left: PANEL + 3, top: 0 }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(pub('og-image.jpg'));
console.log('  public/og-image.jpg');
