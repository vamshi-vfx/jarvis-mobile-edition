const CHANNEL_HANDLE_URL = 'https://www.youtube.com/@growthos_telugu';
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
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].map(match => {
    const block = match[1];
    const published = xmlValue(block, 'published') || xmlValue(block, 'updated');
    const videoId = xmlValue(block, 'yt:videoId') || xmlValue(block, 'videoId');
    return { videoId, title: xmlValue(block, 'title') || 'Untitled video', published, url: videoId ? `https://www.youtube.com/watch?v=${videoId}` : null };
  }).filter(video => video.videoId && video.published && Date.parse(video.published) >= since);
}
function findChannelId(html) {
  for (const pattern of [
    /"channelId":"(UC[a-zA-Z0-9_-]{20,})"/,
    /<meta[^>]+itemprop=["']channelId["'][^>]+content=["'](UC[a-zA-Z0-9_-]{20,})/i,
    /<link[^>]+href=["']https:\/\/www\.youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{20,})/i
  ]) { const match = html.match(pattern); if (match) return match[1]; }
  return null;
}
function metric(html, key) {
  for (const pattern of [new RegExp(`\\"${key}\\":\\"(\\d+)\\"`), new RegExp(`\\"${key}\\":(\\d+)`)]) {
    const match = html.match(pattern); if (match) return Number(match[1]);
  }
  return null;
}
async function enrichVideo(video) {
  try {
    const html = await getText(video.url);
    return { ...video, views: metric(html, 'viewCount'), likes: metric(html, 'likeCount'), comments: metric(html, 'commentCount'), metricsSource: video.url };
  } catch { return { ...video, views: null, likes: null, comments: null, metricsSource: video.url }; }
}

async function buildDailyYouTubeAnalytics() {
  const generatedAt = new Date().toISOString();
  try {
    const channelHtml = await getText(CHANNEL_HANDLE_URL);
    const channelId = findChannelId(channelHtml);
    if (!channelId) return unavailable('The public channel page did not expose a verifiable channel ID.');
    const since = Date.now() - DAY_MS;
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
  } catch { return unavailable('Could not verify the public channel or RSS feed.'); }
}
module.exports = { buildDailyYouTubeAnalytics };
