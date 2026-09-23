import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const jsx = await readFile(new URL('./src/main.jsx', import.meta.url), 'utf8');
const css = await readFile(new URL('./src/styles.css', import.meta.url), 'utf8');
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const packageJson = JSON.parse(await readFile(new URL('./package.json', import.meta.url), 'utf8'));
assert.match(jsx, /import logoAsset from '\.\/assets\/kalki-logo\.jpg'/, 'the user-provided KALKI logo must be bundled');
assert.ok(packageJson.dependencies['framer-motion'], 'Framer Motion must be installed');
assert.ok(packageJson.devDependencies.tailwindcss, 'Tailwind CSS must be installed');
assert.match(html, /<html lang="en">/, 'public site must be English-only');
assert.match(html, /jarvis-mobile-edition\/frontend\//, 'KALKI app backlink must point to the existing app');
assert.match(jsx, /useReducedMotion/, 'motion must respect reduced-motion preferences');
assert.match(css, /prefers-reduced-motion:\s*reduce/, 'CSS reduced-motion fallback must be present');
assert.match(jsx, /SIMULATOR ONLY/, 'social integration status must remain honest');
assert.match(jsx, /NOT RELEASED/, 'Android release status must remain honest');
assert.match(jsx, /NOT CONFIGURED/, 'billing status must remain honest');
assert.ok(!/https?:\/\/(?:www\.)?irisxai\.in/i.test(jsx), 'reference website must not be linked as copied content');
console.log('Static checks passed: English language, app backlink, reduced motion, honest status labels, reference-site independence.');
