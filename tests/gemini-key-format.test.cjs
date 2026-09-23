const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'script.js'), 'utf8');

// Exercise the exact local-only validator used by Settings (never a real credential).
const match = source.match(/const plausibleGeminiKey = (\/.*\/)\.test\(value\);/);
assert.ok(match, 'Settings must define its local key-shape validator');
const validateShape = new Function(`return ${match[1]}`)();
const candidate = (prefix, payload = 'a'.repeat(24)) => `${prefix}${payload}`;

for (const good of [
  candidate('AIza'),
  candidate('AQ.'),
  candidate('AQ.', 'Ab9_-'.repeat(5)),
]) assert.equal(validateShape.test(good), true, `expected plausible shape: ${good.slice(0, 4)}…`);

for (const bad of [
  '', 'AIza' + 'a'.repeat(19), 'AQ.' + 'a'.repeat(19),
  'AQ..' + 'a'.repeat(24), 'AIza' + 'a'.repeat(23) + '.',
  'AQ.' + 'a'.repeat(23) + '/', ' AQ.' + 'a'.repeat(24),
  'AQ.' + 'a'.repeat(97), 'AIza' + 'a'.repeat(97),
]) assert.equal(validateShape.test(bad), false, `expected invalid shape: ${bad.slice(0, 8)}…`);

assert.match(source, /"x-goog-api-key": apiKey/);
assert.match(source, /does not verify the key with Google/);
assert.match(source, /Google has not verified it/);
console.log('Gemini key format tests passed (shape-only; no credentials or API requests used).');
