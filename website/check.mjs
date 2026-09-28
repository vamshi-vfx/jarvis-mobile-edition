import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const product = await readFile(new URL('./src/main.jsx', import.meta.url), 'utf8');
const lab = await readFile(new URL('./src/assistant-effects-lab.jsx', import.meta.url), 'utf8');
const standalone = await readFile(new URL('./src/assistant-effects-standalone.jsx', import.meta.url), 'utf8');
const frameCss = await readFile(new URL('./src/assistant-effects-frame.css', import.meta.url), 'utf8');
const assistantCss = await readFile(new URL('./../frontend/kalki-effects.css', import.meta.url), 'utf8');
const appHtml = await readFile(new URL('./../frontend/index.html', import.meta.url), 'utf8');
const appScript = await readFile(new URL('./../frontend/script.js', import.meta.url), 'utf8');
const frameHtml = await readFile(new URL('./assistant-effects.html', import.meta.url), 'utf8');
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const packageJson = JSON.parse(await readFile(new URL('./package.json', import.meta.url), 'utf8'));
const effectsBuild = await readFile(new URL('./vite.effects.config.js', import.meta.url), 'utf8');
const publish = await readFile(new URL('./publish.mjs', import.meta.url), 'utf8');

assert.match(product, /import logoAsset from '\.\/assets\/kalki-logo\.jpg'/, 'the product site must bundle its KALKI logo');
assert.ok(packageJson.dependencies['framer-motion'], 'Framer Motion must be installed');
assert.ok(packageJson.devDependencies.tailwindcss, 'Tailwind CSS must be installed');
for (const name of ['bot-avatars', 'border-beam', 'thinking-orbs', 'voice-glow', 'liquid-gooey', 'metal-fx', 'img-fx', 'three']) {
  assert.ok(packageJson.dependencies[name], `${name} must be installed for the assistant effects app`);
}
for (const marker of ["import { BotAvatar } from 'bot-avatars'", "import { BorderBeam } from 'border-beam'", "import { ThinkingOrb } from 'thinking-orbs'", "import { VoiceBeam } from 'voice-glow'", "import AssistantEffectsLab from './assistant-effects-lab.jsx'"]) {
  assert.ok(standalone.includes(marker), `standalone assistant app must import ${marker}`);
}
assert.match(standalone, /createRoot\(root\)\.render\(/, 'the iframe app must mount a real React root');
assert.match(standalone, /kalki-effects-ready/, 'the iframe must signal when the preview UI has mounted');
assert.match(standalone, /kalki-effects-resize/, 'the iframe must report its rendered height');
assert.match(standalone, /event\.source !== window\.parent \|\| event\.origin !== window\.location\.origin/, 'the iframe must validate parent messages');
assert.match(standalone, /<EffectsErrorBoundary>/, 'the standalone app must show a visible fallback for React render errors');
for (const marker of ['ThinkingOrb', 'BorderBeam', 'VoiceBeam', 'BotAvatar', '<Liquid', 'kalki-gooey-item', '<MetalFx', '<ImageGeneration', 'pixels-organic', 'pixels-mechanic', 'sweep-gradient', 'local image', 'never uploaded', 'without another mic']) {
  assert.ok(lab.toLowerCase().includes(marker.toLowerCase()), `assistant effects lab must include ${marker}`);
}
assert.match(lab, /new URL\('\.\.\/1789578396977-559ec457\.jpg', window\.location\.href\)/, 'the image reveal must load the KALKI logo from the assistant path');
assert.match(lab, /URL\.createObjectURL\(file\)/, 'selected images must remain local browser object URLs');
assert.match(lab, /theme="dark" cardBg="#0b1018" images=\{\[image\]\} revealInitialDelay=\{0\}[\s\S]*revealHoldMs=\{5000\}/, 'the reveal should start promptly and keep the actual image visible between cycles');
assert.match(lab, /<img className="kalki-image-canvas" src=\{image\} alt="Local image reveal preview" \/>/, 'the reveal renderer must retain a local-image fallback beneath the effect');
assert.match(frameHtml, /src="\/src\/assistant-effects-standalone\.jsx"/, 'the effects page must boot the standalone React app');
assert.match(effectsBuild, /assistant-effects\.html/, 'the effects build must produce a standalone HTML page');
assert.match(effectsBuild, /process\.env\.NODE_ENV.*production/, 'browser libraries must use production mode without a Node process global');
assert.match(publish, /assistant-effects-dist/,'the publisher must use the standalone effects build');
assert.match(publish, /copyFile\(effectsEntry, path\.join\(effectsOut, 'index\.html'\)\)/, 'the standalone app must be copied to the assistant effects route');
assert.match(appHtml, /id="kalki-effects-panel"/, 'the real assistant needs an Effects panel');
assert.match(appHtml, /<iframe id="kalki-effects-frame"[\s\S]*scrolling="no"[\s\S]*data-src="effects\/index\.html\?v=standalone-1"/, 'the real assistant must embed the standalone effects app without nested frame scrolling');
assert.match(appHtml, /kalki-effects-ready[\s\S]*sendKalkiEffectsState/, 'the real assistant must bridge app state to the iframe');
assert.match(appHtml, /kalki:assistant-state[\s\S]*kalki:voice-state/, 'assistant and voice status changes must reach the effects frame');
assert.match(appScript, /publishKalkiAssistantState\("solving"\)[\s\S]*publishKalkiAssistantState\("idle"\)/, 'Gemini work must publish solving and idle states');
assert.match(appScript, /kalki:voice-state[\s\S]*ensureKalkiEffects/, 'voice status must synchronize without opening another microphone');
assert.match(assistantCss, /prefers-reduced-motion:\s*reduce/, 'assistant effects CSS must respect reduced motion');
assert.match(assistantCss, /\.kalki-effects-frame[\s\S]*width:100%[\s\S]*min-height:1900px;height:1900px/, 'the embedded standalone app must fill its panel and expand for natural page scrolling');
assert.match(assistantCss, /\.kalki-gooey-item\{position:absolute!important/, 'gooey action items must share a center point so the open-state layout stays inside its stage');
assert.match(assistantCss, /\.kalki-image-canvas\{display:block;[\s\S]*object-fit:cover\}/, 'the image effect should keep its selected image visible beneath the reveal shader');
assert.match(frameCss, /prefers-reduced-motion:reduce/, 'the effects page frame must respect reduced-motion preferences');
assert.ok(!/ImageEffectSection|BotAvatarsSection|ImageGeneration|BotAvatar|image-effect|bot-avatars/.test(product), 'Libraries.dev demos belong in the assistant, not the product website');
assert.ok(!/image-effect|bot-avatar/.test(assistantCss), 'marketing-site demo styles should be removed');
assert.match(html, /<html lang="en">/, 'public site must be English-only');
assert.match(html, /jarvis-mobile-edition\/frontend\//, 'KALKI app backlink must point to the existing app');
assert.match(product, /useReducedMotion/, 'product site motion must respect reduced-motion preferences');
assert.match(product, /SIMULATOR ONLY/, 'social integration status must remain honest');
assert.match(product, /NOT RELEASED/, 'Android release status must remain honest');
assert.match(product, /NOT CONFIGURED/, 'billing status must remain honest');
assert.ok(!/https?:\/\/(?:www\.)?irisxai\.in/i.test(product), 'reference website must not be linked as copied content');
console.log('Static checks passed: the seven Libraries.dev effects run in a standalone iframe in the actual assistant, state is bridged without opening a microphone, local image previews stay on-device, and marketing-site boundaries remain intact.');
