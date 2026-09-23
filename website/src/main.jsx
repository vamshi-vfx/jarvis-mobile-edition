import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Check, ChevronDown,
  CircleDot, Code2, Eye, Fingerprint, Menu, MessageCircle, Mic,
  ShieldCheck, Sparkles, WandSparkles, X, Zap
} from 'lucide-react';
import './styles.css';
import logoAsset from './assets/kalki-logo.jpg';

const APP = '/jarvis-mobile-edition/frontend/';
const LOGO = logoAsset;

const capabilities = [
  { icon: MessageCircle, number: '01', title: 'A useful place to think', copy: 'Chat in one focused workspace. AI replies require your own Gemini API key in the app; conversations are not presented as a synced or persistent memory service.', status: 'APP PREVIEW', tone: 'blue', href: APP },
  { icon: AudioLines, number: '02', title: 'Voice, when you choose', copy: 'Foreground voice controls and spoken previews are available in the app. Wake-word listening is foreground-only and depends on browser/device support.', status: 'FOREGROUND ONLY', tone: 'gold', href: APP },
  { icon: Zap, number: '03', title: 'Small tools. Quick starts.', copy: 'Explore everyday prompts such as time, dice, a joke, a password draft, and opening Google or YouTube. A tap prepares a command; it never acts by itself.', status: 'IN APP', tone: 'cyan', href: APP },
  { icon: WandSparkles, number: '04', title: 'Creator ideas, shaped', copy: 'The creator workspace prepares a brief, script outline, metadata and asset ideas. It does not render a video or upload / publish content.', status: 'PLANNING PREVIEW', tone: 'violet', href: APP },
  { icon: CircleDot, number: '05', title: 'Automation, safely explored', copy: 'The social-agent workspace is a browser-local simulator. Meta / Instagram connection, live triggers and sending are not configured.', status: 'SIMULATOR ONLY', tone: 'rose', href: APP },
  { icon: ShieldCheck, number: '06', title: 'You stay in the loop', copy: 'KALKI is built around explicit commands. This product site does not start listening, connect accounts, send messages, or run tasks in the background.', status: 'USER CONTROLLED', tone: 'cyan', href: '#control' },
];

const statusItems = [
  ['Product', 'Private beta'], ['AI chat', 'Bring a Gemini API key'], ['Voice', 'Foreground controls'], ['Connectors', 'Not yet connected'], ['Billing', 'Not configured'],
];

function Reveal({ children, className = '', delay = 0, once = true }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once, amount: 0.16 }} transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

// Lightweight Spotlight / CardSpotlight treatments, implemented locally with CSS.
// No third-party artwork or paid Aceternity assets are bundled.
function Spotlight({ className = '' }) {
  return <div aria-hidden="true" className={`spotlight-wash ${className}`} />;
}

function CardSpotlight({ children, className = '', href, icon: Icon, number, title, copy, status, tone }) {
  const Tag = href ? 'a' : 'article';
  return <Tag href={href} className={`capability-card spotlight-card tone-${tone} ${className}`}>
    <span className="card-glow" aria-hidden="true" />
    <div className="cap-top"><span className="cap-icon"><Icon size={20} strokeWidth={1.6} /></span><span className="cap-number">{number}</span></div>
    <h3>{title}</h3><p>{copy}</p>
    <div className="cap-bottom"><span className="status-label"><span />{status}</span><ArrowUpRight size={17} aria-hidden="true" /></div>
  </Tag>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [['Product', '#product'], ['Capabilities', '#capabilities'], ['Status', '#status'], ['FAQ', '#faq']];
  return <header className="site-header">
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="KALKI home"><img src={LOGO} alt="" /><span>KALKI<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      <div className={`nav-links ${open ? 'nav-open' : ''}`} id="site-links">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
      <a className="nav-cta" href={APP}>Enter the app <ArrowUpRight size={15} /></a>
    </nav>
    <AnimatePresence>{open && <motion.div className="mobile-nav-panel" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}><div>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={15} /></a>)}<a href={APP} onClick={() => setOpen(false)}>Open KALKI app<ArrowUpRight size={15} /></a></div></motion.div>}</AnimatePresence>
  </header>;
}

function HeroVisual() {
  const reduced = useReducedMotion();
  return <div className="hero-visual" aria-label="Illustration of the KALKI assistant workspace" role="img">
    <Spotlight />
    <motion.div className="orbit orbit-a" animate={reduced ? undefined : { rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} />
    <motion.div className="orbit orbit-b" animate={reduced ? undefined : { rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }} />
    <motion.div className="hero-core" animate={reduced ? undefined : { y: [0, -8, 0], rotateY: [0, 4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="core-aura" />
      <div className="core-logo-wrap"><img src={LOGO} alt="" /></div>
      <div className="core-word">KALKI<span>PERSONAL AI</span></div>
    </motion.div>
    <motion.div className="float-chip chip-one" animate={reduced ? undefined : { y: [0, -5, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}><span className="chip-icon blue"><MessageCircle size={14} /></span><span><b>Chat</b><small>Your own API key</small></span><span className="live-pip" /></motion.div>
    <motion.div className="float-chip chip-two" animate={reduced ? undefined : { y: [0, 5, 0] }} transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}><span className="chip-icon gold"><Mic size={14} /></span><span><b>Voice mode</b><small>Foreground only</small></span><span className="chip-arrow">↗</span></motion.div>
    <div className="visual-caption"><span className="caption-line" />KALKI / PERSONAL ASSISTANT <span className="caption-coordinate">16° 30′ N</span></div>
  </div>;
}

function Hero() {
  const reduced = useReducedMotion();
  return <section className="hero" id="top">
    <div className="hero-grid-lines" aria-hidden="true" /><div className="hero-stars" aria-hidden="true" />
    <div className="shell hero-inner">
      <Reveal className="hero-copy-wrap">
        <div className="eyebrow"><span className="eyebrow-line" />A PERSONAL ASSISTANT IN PROGRESS</div>
        <h1>Intelligence,<br /><span className="hero-accent">on your terms.</span></h1>
        <p className="hero-copy">Chat, voice and useful tools—brought into one evolving workspace. KALKI helps you think and create while <strong>you stay in control</strong> of every external action.</p>
        <div className="hero-actions"><a className="button primary" href={APP}>Explore the KALKI app <ArrowUpRight size={17} /></a><a className="button quiet" href="#capabilities">Discover what’s here <ArrowDown size={16} /></a></div>
        <div className="hero-notes"><span><span className="tiny-dot" /> PRIVATE BETA</span><span className="note-sep" /><span>NO AUTOMATIC ACTIONS</span></div>
      </Reveal>
      <HeroVisual />
    </div>
    <div className="hero-bottom shell"><span>BUILT AROUND YOUR APPROVAL</span><span className="hero-bottom-center"><span /> ASSISTANT · VOICE · TOOLS</span><a href="#product">SCROLL TO EXPLORE <ChevronDown size={13} /></a></div>
  </section>;
}

function StatusTicker() {
  return <section className="ticker" aria-label="KALKI current status"><div className="shell ticker-inner">{statusItems.map(([label, value], i) => <div className="ticker-item" key={label}><span>{label}</span><strong className={i === 0 ? 'gold-text' : ''}>{value}</strong></div>)}</div></section>;
}

function ProductSection() {
  return <section className="product-section section-pad" id="product">
    <div className="shell product-grid">
      <Reveal className="section-intro">
        <div className="eyebrow"><span className="eyebrow-line" />THE KALKI APPROACH</div>
        <h2>Powerful enough<br />to help. <span>Quiet enough<br />to trust.</span></h2>
        <p>KALKI is still taking shape. Today, the app offers a focused interface for chat, foreground voice and lightweight workflows—without pretending unfinished integrations are ready.</p>
        <a className="text-link" href={APP}>See the current app <ArrowRight size={16} /></a>
      </Reveal>
      <Reveal className="dashboard-wrap" delay={0.12}>
        <div className="dashboard-frame">
          <div className="dashboard-top"><span className="dash-brand"><img src={LOGO} alt="" /> KALKI</span><span className="dash-private"><i /> PRIVATE BETA</span><span className="dash-menu"><span /><span /><span /></span></div>
          <div className="dashboard-body">
            <div className="dash-aside"><div className="dash-side-title">WORKSPACE</div><div className="dash-side-active"><Sparkles size={14} /> Assistant</div><div className="dash-side-item"><AudioLines size={14} /> Voice mode</div><div className="dash-side-item"><Zap size={14} /> Everyday tools</div><div className="dash-divider" /><div className="dash-side-title">YOUR CONTROL</div><div className="dash-approval"><ShieldCheck size={14} /><span>Explicit actions<br /><small>Only when you ask</small></span></div></div>
            <div className="dash-chat"><div className="dash-hello"><span className="dash-kicker">YOUR ASSISTANT</span><h3>How can I help<br /><em>today?</em></h3><p>Choose what you need. Nothing runs automatically.</p></div><div className="suggestion-row"><span>Plan an idea <ArrowUpRight size={12} /></span><span>Find something <ArrowUpRight size={12} /></span></div><div className="dash-composer"><span>Message KALKI...</span><span className="dash-mic"><Mic size={13} /></span><span className="dash-send"><ArrowRight size={13} /></span></div><div className="dash-safe"><ShieldCheck size={11} /> Actions happen only when you explicitly ask</div></div>
          </div>
          <div className="dashboard-foot"><span><i /> WORKSPACE PREVIEW</span><span>NOT A LIVE ACCOUNT CONNECTION</span></div>
        </div>
        <div className="dash-orbit" aria-hidden="true" />
      </Reveal>
    </div>
  </section>;
}

function CapabilitySection() {
  return <section className="capabilities-section section-pad" id="capabilities">
    <div className="shell">
      <Reveal className="cap-head"><div><div className="eyebrow"><span className="eyebrow-line" />WHAT’S TAKING SHAPE</div><h2>Built for the way<br /><span>you actually work.</span></h2></div><p>Every card carries an honest label. Available features, previews and future work are clearly separated.</p></Reveal>
      <div className="cap-grid">{capabilities.map((item, index) => <Reveal key={item.number} delay={(index % 3) * 0.07}><CardSpotlight {...item} /></Reveal>)}</div>
    </div>
  </section>;
}

function ControlSection() {
  return <section className="control-section section-pad" id="control">
    <div className="shell control-panel">
      <Spotlight className="control-light" />
      <Reveal className="control-copy"><div className="eyebrow"><span className="eyebrow-line" />A NON-NEGOTIABLE PRINCIPLE</div><h2>Nothing happens<br />behind your back.</h2><p>KALKI is designed for explicit, user-directed actions. No silent message sending. No surprise account connections. No background listening implied by this website.</p><a className="button primary" href={APP}>Try the app preview <ArrowUpRight size={16} /></a></Reveal>
      <Reveal className="control-list" delay={0.1}>
        <div className="control-row"><span className="control-icon"><Fingerprint size={18} /></span><div><b>Your action, your call</b><small>External actions require an explicit request and are not enabled by this product site.</small></div><Check size={16} /></div>
        <div className="control-row"><span className="control-icon"><Eye size={18} /></span><div><b>Clear capability labels</b><small>Previews and unavailable integrations are called out rather than implied.</small></div><Check size={16} /></div>
        <div className="control-row"><span className="control-icon"><Code2 size={18} /></span><div><b>Still being built</b><small>Connector, Android and commercial availability must be verified before release.</small></div><span className="building-tag">IN PROGRESS</span></div>
      </Reveal>
    </div>
  </section>;
}

function StatusSection() {
  const rows = [
    ['KALKI app', 'Private beta · browser app available', 'AVAILABLE'],
    ['AI chat', 'Bring your own Gemini API key', 'KEY REQUIRED'],
    ['Voice', 'Foreground controls; device/browser support varies', 'FOREGROUND'],
    ['Creator workflow', 'Planning preview only; no media rendering or publishing', 'PREVIEW'],
    ['Social automation', 'Local simulator only; no Meta connection or sending', 'NOT CONNECTED'],
    ['Secure connectors', 'Connection setup and verification are not complete', 'IN DEVELOPMENT'],
    ['Android release', 'Wrapper exists; public APK and physical-device validation are unverified', 'NOT RELEASED'],
    ['Billing', 'No active pricing or payment flow', 'NOT CONFIGURED'],
  ];
  return <section className="status-section section-pad" id="status">
    <div className="shell status-grid-main">
      <Reveal><div className="eyebrow"><span className="eyebrow-line" />NO GUESSWORK</div><h2>What’s real.<br /><span>What’s next.</span></h2><p>Product status at a glance. We’ll update these markers as capabilities are implemented, connected and verified.</p><div className="status-note"><CircleDot size={15} /><span>Last reviewed <strong>September 2026</strong><small>Capability labels reflect the current app files and public release state.</small></span></div></Reveal>
      <Reveal className="status-table-wrap" delay={0.12}><div className="status-table" role="table" aria-label="Current product status">{rows.map(([name, detail, tag]) => <div className="status-row" role="row" key={name}><div className="status-name" role="cell">{name}</div><div className="status-detail" role="cell">{detail}</div><div className={`status-pill ${tag === 'AVAILABLE' ? 'is-ready' : ''}`} role="cell"><span />{tag}</div></div>)}</div></Reveal>
    </div>
  </section>;
}

const faqs = [
  ['Can I use KALKI today?', 'The current browser app is available in private beta. Some features are previews. AI chat requires you to add your own Gemini API key in the app.'],
  ['Does KALKI automatically send messages or publish posts?', 'No. The product site cannot take actions. In the current app, social automation is a local simulator with no Meta sending or publishing capability.'],
  ['Is the Android app publicly released?', 'An Android wrapper exists in the repository, but this site does not claim a published APK or a completed physical-device test.'],
  ['Are connectors or paid plans active?', 'No. Connector setup and verification are still in development; billing is not configured.'],
];

function FAQ() {
  const [active, setActive] = useState(0);
  return <section className="faq-section section-pad" id="faq"><div className="shell faq-grid"><Reveal><div className="eyebrow"><span className="eyebrow-line" />GOOD QUESTIONS</div><h2>Clarity is part<br />of the product.</h2><p>Not sure whether something is live? Start here—or open the app to explore the current private beta.</p><a className="text-link" href={APP}>Open KALKI <ArrowUpRight size={16} /></a></Reveal><Reveal className="faq-list" delay={0.12}>{faqs.map(([q, a], i) => <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={q}><button type="button" aria-expanded={active === i} onClick={() => setActive(active === i ? -1 : i)}><span>{q}</span><span className="faq-plus">{active === i ? '−' : '+'}</span></button><AnimatePresence initial={false}>{active === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}><p>{a}</p></motion.div>}</AnimatePresence></div>)}</Reveal></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="shell footer-top"><a className="brand footer-brand" href="#top"><img src={LOGO} alt="" /><span>KALKI<span className="brand-dot">.</span></span></a><p>Personal AI in progress.<br /><span>Designed around your control.</span></p><a className="footer-app" href={APP}>Open the KALKI app <ArrowUpRight size={15} /></a></div><div className="shell footer-bottom"><span>© 2026 KALKI · PERSONAL AI ASSISTANT</span><span>PRIVATE BETA · CAPABILITIES MAY CHANGE</span><div><a href="/jarvis-mobile-edition/about.html">About</a><a href="/jarvis-mobile-edition/security.html">Security</a><a href="https://github.com/vamshi-vfx/jarvis-mobile-edition" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a></div></div></footer>;
}

function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><div className="top-note"><span className="top-dot" /> PRIVATE BETA <span className="top-divider">/</span> Capabilities are evolving; integrations are not generally available.</div><Nav /><main id="main"><Hero /><StatusTicker /><ProductSection /><CapabilitySection /><ControlSection /><StatusSection /><FAQ /><section className="closing"><Spotlight /><div className="shell closing-inner"><Reveal><div className="closing-emblem"><img src={LOGO} alt="" /></div><div className="eyebrow"><span className="eyebrow-line" />THE NEXT CHAPTER</div><h2>Meet your assistant.<br /><span>Keep the final say.</span></h2><p>Explore the current KALKI private beta—then tell us what a more thoughtful personal AI should feel like.</p><a className="button primary" href={APP}>Enter KALKI <ArrowUpRight size={17} /></a><div className="closing-fine">No billing configured · No account connection required to view the product site</div></Reveal></div></section></main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
