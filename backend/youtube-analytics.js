const CHANNEL_HANDLE_URL = 'https://www.youtube.com/@growthos_telugu';
const CHANNEL_VIDEOS_URL = `${CHANNEL_HANDLE_URL}/videos`;
const CHANNEL_NAME = 'GrowthOS Telugu';
const USER_AGENT = 'GrowthOS-Jarvis-Public-Analytics/1.0';
const DAY_MS = 24 * 60 * 60 * 1000;

function unavailable(reason) {
  return { ok: false, provider: 'public-youtube-data', status: 'unavailable', message: 'YouTube public analytics are temporarily unavailable. No metrics were inferred or sent.', reason };
}

async function getText(url) {
  const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'text/html,application/xml,text/xml' }, signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}
function xmlValue(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim() : null;
}
function parseFeed(xml, since) {
  return [...xml.matchAll(/<entry>([\\s\\S]*?)<\/entry>/gi)].map(match => {
    const block = match[1];
    const published = xmlValue(block, 'published') || xmlValue(block, 'updated');
    const videoId = xmlValue(block, 'yt:videoId') || xmlValue(block, 'videoId');
    return { videoId, title: xmlValue(block, 'title') || 'Untitled video', published, url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null };
  }).filter(video => video.videoId && video.published && Date.parse(video.published) >= since);
}
function findChannelId(html) {
  for (const pattern of [
    /"channelId":"(UC[a-zA-Z0-9_-]{20,})"/,
    /"browseId":"(UC[a-zA-Z0-9_-]{20,})"/,
    /<meta[^>]+itemprop=["']channelId["'][^>]+content=["'](UC[a-zA-Z0-9_-]{20,})/i,
    /youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{20,})/i
  ]) { const match = html.match(pattern); if (match) return match[1]; }
  return null;
}
function metric(html, key) {
  const match = html.match(new RegExp(`\"${key}\"\\s*:\\s*\"?(\\d+)`));
  return match ? Number(match[1]) : null;
}
async function enrichVideo(video) {
  try {
    const html = await getText(video.url);
    return { ...video, views: metric(html, 'viewCount'), likes: metric(html, 'likeCount'), comments: metric(html, 'commentCount'), metricsSource: video.url };
  } catch { return { ...video, views: null, likes: null, comments: null, metricsSource: video.url }; }
}

function initialData(html) {
  const marker = 'var ytInitialData = ';
  const start = html.indexOf(marker);
  if (start < 0) return null;
  try { return JSON.parse(html.slice(start + marker.length).match(/^([\s\S]*?);<\/script>/)[1]); } catch { return null; }
}
function displayedCount(text) {
  if (typeof text !== 'string') return null;
  const match = text.trim().match(/^([0-9]+(?:[.,][0-9]+)?)\s*([KMB])?\s+views?$/i);
  if (!match) return null;
  const value = Number(match[1].replace(',', '.'));
  const multiplier = { K: 1e3, M: 1e6, B: 1e9 }[String(match[2] || '').toUpperCase()] || 1;
  return Number.isFinite(value) ? Math.round(value * multiplier) : null;
}
function recentVisibleTime(text, now) {
  if (typeof text !== 'string') return null;
  const value = text.trim().toLowerCase();
  if (/^(today|just now|\d+ minutes? ago|\d+ hours? ago)$/.test(value)) {
    const match = value.match(/(\d+)\s+(minute|hour)/);
    const amount = match ? Number(match[1]) * (match[2] === 'hour' ? 60 * 60 * 1000 : 60 * 1000) : 0;
    return new Date(now - amount).toISOString();
  }
  return null;
}
function walk(value, visit) {
  if (Array.isArray(value)) value.forEach(item => walk(item, visit));
  else if (value && typeof value === 'object') { visit(value); Object.values(value).forEach(item => walk(item, visit)); }
}
function parseVisibleChannelVideos(html, since, now) {
  const data = initialData(html);
  if (!data) return { channelId: findChannelId(html), videos: [] };
  const found = [];
  walk(data, value => {
    const model = value.lockupViewModel;
    if (!model || !model.contentId || model.contentType !== 'LOCKUP_CONTENT_TYPE_VIDEO') return;
    const metadata = model.metadata?.lockupMetadataViewModel;
    const title = metadata?.title?.content;
    const parts = metadata?.metadata?.contentMetadataViewModel?.metadataRows?.[0]?.metadataParts || [];
    const texts = parts.map(part => part.text?.content).filter(Boolean);
    const viewsText = texts.find(text => /views?$/i.test(text));
    const publishedText = texts.find(text => /ago$|today|just now/i.test(text));
    const published = recentVisibleTime(publishedText, now);
    if (!title || !published || Date.parse(published) < since || found.some(video => video.videoId === model.contentId)) return;
    found.push({ videoId: model.contentId, title, published, publishedText: publishedText || null, views: displayedCount(viewsText), viewsText: viewsText || null, likes: null, comments: null, metricsSource: CHANNEL_VIDEOS_URL, url: `https://www.youtube.com/watch?v=${model.contentId}` });
  });
  return { channelId: findChannelId(html), videos: found };
}
async function publicChannelPageFallback(since, generatedAt) {
  const html = await getText(CHANNEL_VIDEOS_URL);
  const parsed = parseVisibleChannelVideos(html, since, Date.parse(generatedAt));
  if (!parsed.channelId) throw new Error('The public channel page did not expose a verifiable channel ID.');
  return { channelId: parsed.channelId, videos: parsed.videos };
}

async function buildDailyYouTubeAnalytics() {
  const generatedAt = new Date().toISOString();
  const since = Date.now() - DAY_MS;
  try {
    const channelHtml = await getText(CHANNEL_HANDLE_URL);
    const channelId = findChannelId(channelHtml);
    if (!channelId) throw new Error('The public channel page did not expose a verifiable channel ID.');
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const videos = await Promise.all(parseFeed(await getText(feedUrl), since).map(enrichVideo));
    return {
      ok: true, provider: 'public-youtube-data', status: 'available', generatedAt,
      channel: { name: CHANNEL_NAME, handleUrl: CHANNEL_HANDLE_URL, channelId, source: CHANNEL_HANDLE_URL },
      window: { label: 'previous 24 hours', since: new Date(since).toISOString(), until: generatedAt }, uploads: videos,
      comparison: { available: false, message: 'Current-vs-previous comparison is unavailable because durable state is not configured for this deployment.' },
      comments: { available: false, message: 'Public comment extraction is not included; no comments were inferred.' },
      note: 'Only values exposed by public channel/video pages are included. Missing metrics are null, never estimated.'
    };
  } catch (rssError) {
    try {
      const fallback = await publicChannelPageFallback(since, generatedAt);
      return {
        ok: true, provider: 'public-youtube-data', status: 'available', generatedAt,
        channel: { name: CHANNEL_NAME, handleUrl: CHANNEL_HANDLE_URL, channelId: fallback.channelId, source: CHANNEL_VIDEOS_URL },
        window: { label: 'previous 24 hours', since: new Date(since).toISOString(), until: generatedAt }, uploads: fallback.videos,
        comparison: { available: false, message: 'Current-vs-previous comparison is unavailable because durable state is not configured for this deployment.' },
        comments: { available: false, message: 'Public comment extraction is not included; likes and comments are null when not visible on the channel page.' },
        note: 'Fallback uses only titles, visible view counts, and visible recent-time labels from the public channel videos page. Missing metrics are null, never estimated.'
      };
    } catch (fallbackError) { return unavailable(`Could not verify the public channel or RSS feed (${rssError.message}; fallback: ${fallbackError.message}).`); }
  }
}
module.exports = { buildDailyYouTubeAnalytics, parseVisibleChannelVideos };
