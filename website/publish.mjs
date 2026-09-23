import { cp, mkdir, readFile, readdir, rm, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, 'dist');
const repo = path.resolve(here, '..');
const rootIndex = path.join(dist, 'index.html');
const html = await readFile(rootIndex, 'utf8');
if (!html.includes('/jarvis-mobile-edition/assets/kalki-site/')) {
  throw new Error('Built site is missing the expected GitHub Pages asset base path.');
}
await copyFile(rootIndex, path.join(repo, 'index.html'));
const outAssets = path.join(repo, 'assets', 'kalki-site');
await rm(outAssets, { recursive: true, force: true });
await mkdir(path.dirname(outAssets), { recursive: true });
await cp(path.join(dist, 'assets', 'kalki-site'), outAssets, { recursive: true });
console.log(`Published Vite static output to repository root (${(await readdir(outAssets)).length} KALKI assets).`);
