import { cp, mkdir, readFile, readdir, rm, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(here, 'dist');
const effectsDist = path.join(here, 'assistant-effects-dist');
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
const effectsEntry = path.join(effectsDist, 'assistant-effects.html');
try {
  await readFile(effectsEntry, 'utf8');
} catch {
  throw new Error('The assistant effects page is missing; run the effects Vite build first.');
}
const effectsOut = path.join(repo, 'frontend', 'effects');
await rm(effectsOut, { recursive: true, force: true });
await mkdir(path.dirname(effectsOut), { recursive: true });
await mkdir(effectsOut, { recursive: true });
await cp(path.join(effectsDist, 'assets'), path.join(effectsOut, 'assets'), { recursive: true });
await copyFile(effectsEntry, path.join(effectsOut, 'index.html'));
console.log(`Published product site (${(await readdir(outAssets)).length} assets) and assistant effects page (${(await readdir(path.join(effectsOut, 'assets'))).length} assets).`);
