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
for (const marker of [
  "import { BotAvatar } from 'bot-avatars'",
  "import { BorderBeam } from 'border-beam'",
  "import { ThinkingOrb } from 'thinking-orbs'",
  "import { VoiceBeam } from 'voice-glow'",
  "import { Liquid } from 'liquid-gooey'",
  "import { MetalFx } from 'metal-fx'",
  "import { ImageGeneration } from 'img-fx'",
  "import AssistantEffectsLab from './assistant-effects-lab.jsx'"
]) assert.ok(standalone.includes(marker), `standalone assistant app must import ${marker}`);
assert.match(standalone, /createRoot\(root\)\.render\(/, 'the iframe app must mount a real React root');
assert.match(standalone, /kalki-effects-ready/, 'the iframe must signal when the preview UI has mounted');
assert.match(standalone, /kalki-effects-resize/, 'the iframe must report its rendered height');
assert.match(standalone, /event\.source !== window\.parent \|\| event\.origin !== window\.location\.origin/, 'the iframe must validate parent messages');
assert.match(standalone, /event\.data\?\.type !== 'kalki-state'/, 'the iframe may accept only parent state messages');
assert.match(standalone, /<EffectsErrorBoundary>/, 'the standalone app must show a visible fallback for React render errors');
assert.match(standalone, /\.\.\/\.\.\/frontend\/kalki-effects\.css/, 'the standalone app must load the existing assistant effects stylesheet');
for (const marker of ['ThinkingOrb', 'BorderBeam', 'VoiceBeam', 'BotAvatar', '<Liquid', 'kalki-gooey-item', '<MetalFx', '<ImageGeneration', 'pixels-organic', 'pixels-mechanic', 'sweep-gradient', 'local image', 'never uploaded', 'without another mic']) {
  assert.ok(lab.toLowerCase().includes(marker.toLowerCase()), `assistant effects lab must include ${marker}`);
}
assert.match(lab, /new URL\('\.\.\/1789578396977-559ec457\.jpg', window\.location\.href\)/, 'the image reveal must load the KALKI logo from /frontend/1789578396977-559ec457.jpg');
assert.match(lab, /This is not AI image generation/, 'image reveal must not be described as image generation');
assert.match(lab, /separate composer-style card[\s\S]*does not surround the live message composer/, 'the beam preview must not claim to wrap the real composer');
assert.match(lab, /URL\.createObjectURL\(file\)/, 'selected images must remain local browser object URLs');
assert.match(lab, /ImageRevealErrorBoundary[\s\S]*needs WebGL support in this browser[\s\S]*other previews remain available/, 'a WebGL failure must stay isolated to the image reveal card rather than blanking the lab');
assert.match(assistantCss, /\.kalki-image-render-fallback/, 'the local image fallback must be styled within the image reveal card');
assert.match(lab, /<img className="kalki-image-canvas" src=\{image\} alt="Local image reveal preview" \/>/, 'the reveal renderer must retain a local-image fallback beneath the effect');
assert.match(frameHtml, /src="\.\/src\/assistant-effects-standalone\.jsx"/, 'the effects page must boot the standalone React app');
assert.match(effectsBuild, /base:\s*'\.\/'/, 'the standalone build must use relative asset URLs');
assert.match(effectsBuild, /input:\s*resolve\(here, 'assistant-effects\.html'\)/, 'the effects build must use an HTML entry');
assert.match(effectsBuild, /assistant-effects-dist/, 'the HTML app must build into an isolated effects directory');
assert.match(effectsBuild, /process\.env\.NODE_ENV.*production/, 'browser libraries must use production mode without a Node process global');
assert.match(publish, /cp\(path\.join\(effectsDist, 'assets'\), path\.join\(effectsOut, 'assets'\)/, 'only the built effects assets may be copied to the app effects route');
assert.match(publish, /copyFile\(effectsEntry, path\.join\(effectsOut, 'index\.html'\)\)/, 'the standalone app must be renamed to index.html under frontend/effects');
assert.match(appHtml, /id="kalki-effects-panel"/, 'the real assistant needs an Effects panel');
assert.match(appHtml, /id="kalki-effects-frame"[^>]*loading="lazy"[^>]*src="about:blank"[^>]*data-src="effects\/index\.html\?v=standalone-3"/, 'the assistant must lazy-load an iframe only on opening the effects panel');
assert.match(appHtml, /kalki-effects-ready[\s\S]*sendKalkiEffectsState/, 'the real assistant must bridge app state to the iframe when ready');
assert.match(appHtml, /kalki:assistant-state[\s\S]*kalki:voice-state/, 'assistant and voice status changes must reach the effects frame');
assert.match(appHtml, /kalki-effects-resize[\s\S]*style\.height/, 'the assistant must resize the iframe from posted height');
assert.match(appHtml, /event\.source !== kalkiEffectsFrame\?\.contentWindow \|\| event\.origin !== window\.location\.origin/, 'the parent must validate iframe-origin messages');
assert.ok(!/import\('\.\/effects\/assistant-effects\.js|createRoot|ReactDOM|mountKalkiEffects/.test(appHtml), 'the former in-page dynamic React loader must be removed');
assert.match(appScript, /publishKalkiAssistantState\("solving"\)[\s\S]*publishKalkiAssistantState\("idle"\)/, 'Gemini work must publish solving and idle states');
assert.match(appScript, /kalki:voice-state[\s\S]*ensureKalkiEffects/, 'voice status must synchronize without opening another microphone');
assert.doesNotMatch(standalone, /getUserMedia|SpeechRecognition|webkitSpeechRecognition/, 'the effects page must not request microphone access');
assert.match(assistantCss, /prefers-reduced-motion:\s*reduce/, 'assistant effects CSS must respect reduced motion');
assert.match(assistantCss, /\.kalki-effects-frame\{display:block;width:100%;min-height:720px;height:720px/, 'the standalone app must fill the assistant panel without nested scrolling');
assert.match(assistantCss, /\.kalki-gooey-item\{position:absolute!important/, 'gooey action items must share a center point so the open-state layout stays inside its stage');
assert.match(assistantCss, /\.kalki-image-canvas\{display:block;[\s\S]*object-fit:cover\}/, 'the image effect should keep its selected image visible beneath the reveal shader');
assert.match(frameCss, /prefers-reduced-motion:reduce/, 'the effects page frame must respect reduced-motion preferences');
assert.match(frameCss, /#root\{width:100%;max-width:1000px/, 'the iframe content must use a mobile-friendly page width');
assert.ok(!/kalki-avatar-root|kalki-thinking-root|kalki-composer-effects-root/.test(assistantCss), 'obsolete React effect roots must be removed from assistant CSS');
assert.ok(!/ImageEffectSection|BotAvatarsSection|ImageGeneration|BotAvatar|image-effect|bot-avatars/.test(product), 'Libraries.dev demos belong in the assistant, not the product website');
assert.ok(!/image-effect|bot-avatar/.test(assistantCss), 'marketing-site demo styles should be removed');
assert.match(html, /<html lang="en">/, 'public site must be English-only');
assert.match(html, /jarvis-mobile-edition\/frontend\//, 'KALKI app backlink must point to the existing app');
assert.match(product, /useReducedMotion/, 'product site motion must respect reduced-motion preferences');
assert.match(product, /SIMULATOR ONLY/, 'social integration status must remain honest');
assert.match(product, /NOT RELEASED/, 'Android release status must remain honest');
assert.match(product, /NOT CONFIGURED/, 'billing status must remain honest');
assert.ok(!/https?:\/\/(?:www\.)?irisxai\.in/i.test(product), 'reference website must not be linked as copied content');
console.log('Static checks passed: all seven Libraries.dev effects build into an HTML app under frontend/effects, load on demand in the actual assistant, keep local images on-device, respect reduced motion, and request no new microphone permission.');
