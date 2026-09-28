import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const jsx = await readFile(new URL('./src/main.jsx', import.meta.url), 'utf8');
const lab = await readFile(new URL('./src/assistant-effects-lab.jsx', import.meta.url), 'utf8');
const bundle = await readFile(new URL('./src/assistant-effects.jsx', import.meta.url), 'utf8');
const css = await readFile(new URL('./../frontend/kalki-effects.css', import.meta.url), 'utf8');
const appHtml = await readFile(new URL('./../frontend/index.html', import.meta.url), 'utf8');
const appScript = await readFile(new URL('./../frontend/script.js', import.meta.url), 'utf8');
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const packageJson = JSON.parse(await readFile(new URL('./package.json', import.meta.url), 'utf8'));
const effectsBuild = await readFile(new URL('./vite.effects.config.js', import.meta.url), 'utf8');

assert.match(jsx, /import logoAsset from '\.\/assets\/kalki-logo\.jpg'/, 'the product site must bundle its KALKI logo');
assert.ok(packageJson.dependencies['framer-motion'], 'Framer Motion must be installed');
assert.ok(packageJson.devDependencies.tailwindcss, 'Tailwind CSS must be installed');
for (const name of ['bot-avatars', 'border-beam', 'thinking-orbs', 'voice-glow', 'liquid-gooey', 'metal-fx', 'img-fx', 'three']) {
  assert.ok(packageJson.dependencies[name], `${name} must be installed for the assistant effects bundle`);
}
assert.match(bundle, /React\.lazy\(\(\) => import\('\.\/assistant-effects-lab\.jsx'\)\)/, 'the heavy visual effects lab must load lazily when requested');
for (const marker of ['ThinkingOrb', 'BorderBeam', 'VoiceBeam', 'BotAvatar', 'kalki:assistant-state', 'kalki:voice-state']) {
  assert.ok(bundle.includes(marker), `${marker} must be wired into the assistant effects runtime`);
}
for (const marker of ['<Liquid', '<MetalFx', '<ImageGeneration', 'pixels-organic', 'pixels-mechanic', 'sweep-gradient', 'local image', 'never uploaded', 'without another mic']) {
  assert.ok(lab.toLowerCase().includes(marker.toLowerCase()), `assistant effects lab must include ${marker}`);
}
assert.match(appHtml, /id="kalki-effects-panel"/, 'the real assistant needs an Effects panel');
assert.match(appHtml, /import\('\.\/effects\/assistant-effects\.js\?v=1'\)/, 'the static assistant must dynamically import the generated bundle');
assert.match(appHtml, /id="kalki-avatar-root"[\s\S]*id="kalki-thinking-root"[\s\S]*id="kalki-composer-effects-root"/, 'the assistant needs all three effect mount points');
assert.match(appScript, /publishKalkiAssistantState\("solving"\)[\s\S]*publishKalkiAssistantState\("idle"\)/, 'Gemini work must publish solving and idle states');
assert.match(appScript, /kalki:voice-state[\s\S]*ensureKalkiEffects/, 'voice state must synchronize without another microphone stream');
assert.match(css, /prefers-reduced-motion:\s*reduce/, 'assistant effects CSS must respect reduced motion');
assert.match(css, /pointer-events:none/, 'assistant composer visuals must not block input');
assert.ok(!/ImageEffectSection|BotAvatarsSection|ImageGeneration|BotAvatar|image-effect|bot-avatars/.test(jsx), 'Libraries.dev demos belong in the assistant, not the product website');
assert.ok(!/image-effect|bot-avatar/.test(css), 'marketing-site demo styles should be removed');
assert.match(effectsBuild, /assistant-effects\.js/, 'the assistant bundle must have a stable entry filename');
assert.match(html, /<html lang="en">/, 'public site must be English-only');
assert.match(html, /jarvis-mobile-edition\/frontend\//, 'KALKI app backlink must point to the existing app');
assert.match(jsx, /useReducedMotion/, 'product site motion must respect reduced-motion preferences');
assert.match(jsx, /SIMULATOR ONLY/, 'social integration status must remain honest');
assert.match(jsx, /NOT RELEASED/, 'Android release status must remain honest');
assert.match(jsx, /NOT CONFIGURED/, 'billing status must remain honest');
assert.ok(!/https?:\/\/(?:www\.)?irisxai\.in/i.test(jsx), 'reference website must not be linked as copied content');
console.log('Static checks passed: Libraries.dev effects target the assistant UI, image reveal is labeled honestly, the marketing demos are removed, and reduced-motion / app safety labels remain intact.');
