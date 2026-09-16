const SOURCES = [
  ['OpenAI', 'https://openai.com/news/rss.xml'],
  ['Google AI', 'https://blog.google/technology/ai/rss/'],
  ['Anthropic', 'https://www.anthropic.com/news/rss.xml'],
  ['Hugging Face', 'https://huggingface.co/blog/feed.xml']
];

function strip(value = '') {
  return String(value).replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]*>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
}
function tag(xml, name) {
  const match = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return match ? strip(match[1]) : '';
}
function entries(xml, source) {
  return [...xml.matchAll(/<(item|entry)(?:\s[^>]*)?>([\s\S]*?)<\/(?:item|entry)>/gi)].map(([, , body]) => {
    const link = (body.match(/<link[^>]+href=["']([^"']+)["']/i) || [])[1] || tag(body, 'link') || tag(body, 'guid');
    const date = tag(body, 'pubDate') || tag(body, 'published') || tag(body, 'updated');
    return { source, title: tag(body, 'title'), link, date };
  }).filter(item => item.title && item.link);
}

async function collectPublicLaunches({ since = new Date(Date.now() - 86400000) } = {}) {
  const all = [];
  for (const [source, url] of SOURCES) {
    try {
      const response = await fetch(url, { headers: { 'user-agent': 'JARVIS-public-launch-collector/1.0' } });
      if (!response.ok) continue;
      for (const item of entries(await response.text(), source)) {
        const timestamp = Date.parse(item.date);
        if (!Number.isNaN(timestamp) && timestamp >= since.getTime()) all.push({ ...item, date: new Date(timestamp).toISOString() });
      }
    } catch (_) { /* one unavailable public feed must not block the others */ }
  }
  const seen = new Set();
  return all.filter(item => { const key = item.link || item.title; if (seen.has(key)) return false; seen.add(key); return true; }).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 12);
}

async function buildDailyAiLaunchUpdate() {
  const items = await collectPublicLaunches();
  return { available: true, executed: false, explicitOnly: true, sent: false, scheduled: false, status: 'collected_public_sources', generatedAt: new Date().toISOString(), items, message: `Collected ${items.length} public AI launch/update item(s) from the previous 24 hours. No message was sent.` };
}

module.exports = { SOURCES, collectPublicLaunches, buildDailyAiLaunchUpdate };
