import sharp from 'sharp';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, '../public/images/logos/logo-black-no-bg.png');
const outBlack = path.join(__dirname, '../public/images/logos/logo-black-no-bg.png');
const outWhite = path.join(__dirname, '../public/images/logos/logo-white-no-bg.png');

// Trim transparent padding, save black version
const trimmed = await sharp(src)
  .trim({ lineArt: true, threshold: 10 })
  .toBuffer({ resolveWithObject: true });

console.log(`Trimmed: ${trimmed.info.width}x${trimmed.info.height} (from 5292x5362)`);

await sharp(trimmed.data)
  .png()
  .toFile(outBlack);

console.log('Saved:', outBlack);

// White version: negate RGB, keep alpha (black → white on transparent)
await sharp(trimmed.data)
  .negate({ alpha: false })
  .png()
  .toFile(outWhite);

console.log('Saved:', outWhite);
