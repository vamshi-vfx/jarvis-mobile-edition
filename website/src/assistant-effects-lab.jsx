import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const logoAsset = new URL('../1789578396977-559ec457.jpg', window.location.href).href;
const imagePresets = [
  { id: 'pixels-organic', label: 'Organic pixels' },
  { id: 'pixels-mechanic', label: 'Mechanic pixels' },
  { id: 'sweep-gradient', label: 'Gradient sweep' },
];
const avatarTypes = ['ghost', 'clover', 'flower', 'triangle', 'square', 'blob', 'circle', 'drop', 'star', 'droid', 'mech', 'alien', 'hexagon', 'cat', 'cloud', 'pill', 'pebble', 'puddle'];
const orbStates = ['working', 'searching', 'solving', 'listening', 'connecting', 'weaving', 'composing', 'breathing', 'shaping'];

function PanelCard({ id, eyebrow, title, children, className = '' }) {
  return <section className={`kalki-effect-card ${className}`} aria-labelledby={`${id}-title`}>
    <div className="kalki-effect-card-heading"><p className="kalki-effect-eyebrow">{eyebrow}</p><h3 id={`${id}-title`}>{title}</h3></div>
    {children}
  </section>;
}

class ImageRevealErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function GooeyDemo({ reduced, Liquid }) {
  const [open, setOpen] = useState(false);
  return <PanelCard id="gooey" eyebrow="LIQUID GOOEY" title="A menu that melts together">
    <p className="kalki-effect-copy">Open the controls to see the liquid merge-and-move transition. All buttons remain ordinary keyboard-accessible controls.</p>
    <div className={`kalki-gooey-stage ${open ? 'is-open' : ''}`}>
      <Liquid blur={7} contrast={19} fill="#85e0e9" shadow="0 4px 16px rgba(25, 184, 210, .25)">
        <Liquid.Item className="kalki-gooey-item" x={open ? -54 : 0} y={open ? -20 : 0} transition={reduced ? { duration: 0, ease: 'linear' } : 'bouncy'} delay={0}>
          <button className="kalki-gooey-action" type="button" tabIndex={open ? 0 : -1} aria-label="Show settings" onClick={() => setOpen(false)}>⚙</button>
        </Liquid.Item>
        <Liquid.Item className="kalki-gooey-item" x={open ? 0 : 0} y={open ? -64 : 0} transition={reduced ? { duration: 0, ease: 'linear' } : 'bouncy'} delay={36}>
          <button className="kalki-gooey-action" type="button" tabIndex={open ? 0 : -1} aria-label="Show favorites" onClick={() => setOpen(false)}>★</button>
        </Liquid.Item>
        <Liquid.Item className="kalki-gooey-item" x={open ? 54 : 0} y={open ? -20 : 0} transition={reduced ? { duration: 0, ease: 'linear' } : 'bouncy'} delay={72}>
          <button className="kalki-gooey-action" type="button" tabIndex={open ? 0 : -1} aria-label="Show messages" onClick={() => setOpen(false)}>✦</button>
        </Liquid.Item>
        <Liquid.Item className="kalki-gooey-item">
          <button className="kalki-gooey-action kalki-gooey-toggle" type="button" aria-expanded={open} aria-label={open ? 'Close gooey menu' : 'Open gooey menu'} onClick={() => setOpen(value => !value)}>{open ? '×' : '+'}</button>
        </Liquid.Item>
      </Liquid>
    </div>
    <p className="kalki-effect-hint" role="status" aria-live="polite">{open ? 'Three actions are open. Press the center button to close.' : 'Press the center button to open the gooey menu.'}</p>
  </PanelCard>;
}

function ImageRevealDemo({ reduced, ImageGeneration }) {
  const [preset, setPreset] = useState(imagePresets[0].id);
  const [image, setImage] = useState(logoAsset);
  const [fileUrl, setFileUrl] = useState('');
  const [running, setRunning] = useState(false);
  const [run, setRun] = useState(0);
  useEffect(() => () => { if (fileUrl) URL.revokeObjectURL(fileUrl); }, [fileUrl]);
  const play = () => { setRunning(true); setRun(value => value + 1); };
  const chooseFile = event => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    const nextUrl = URL.createObjectURL(file);
    setFileUrl(nextUrl);
    setImage(nextUrl);
    event.target.value = '';
    play();
  };
  return <PanelCard id="image-reveal" eyebrow="IMAGE REVEAL · WEBGL" title="Reveal a local image">
    <p className="kalki-effect-copy"><strong>This is not AI image generation.</strong> It animates an image you already have into view. A selected image stays in this browser tab only; it is never uploaded.</p>
    <div className="kalki-image-actions">
      <label className="kalki-effects-button kalki-file-label">Choose a local image<input type="file" accept="image/*" onChange={chooseFile} aria-label="Choose a local image for the reveal preview" /></label>
      {fileUrl && <button className="kalki-effects-button" type="button" onClick={() => { setFileUrl(''); setImage(logoAsset); setRunning(false); }}>Use KALKI logo</button>}
      <button className="kalki-effects-button is-primary" type="button" onClick={play}>{running ? 'Replay reveal' : 'Play reveal'}</button>
    </div>
    <div className="kalki-image-presets" role="group" aria-label="Choose an image reveal style">
      {imagePresets.map(option => <button key={option.id} className="kalki-effects-button" type="button" aria-pressed={preset === option.id} onClick={() => { setPreset(option.id); if (running) play(); }}>{option.label}</button>)}
    </div>
    <div className="kalki-image-stage">
      {running ? <ImageRevealErrorBoundary key={`${preset}-${run}-${image}`} fallback={<div className="kalki-image-render-fallback" role="status"><img src={image} alt="Current local reveal source" /><p>Image Reveal needs WebGL support in this browser. The image stays local and the other previews remain available.</p></div>}><ImageGeneration key={`${preset}-${run}`} preset={preset} theme="dark" cardBg="#0b1018" images={[image]} revealInitialDelay={0} revealDelayRange={[1, 2]} revealHoldMs={5000} autoReveal={!reduced} paused={Boolean(reduced)} className="kalki-image-renderer">
        <img className="kalki-image-canvas" src={image} alt="Local image reveal preview" />
      </ImageGeneration></ImageRevealErrorBoundary> : <button className="kalki-image-placeholder" type="button" onClick={play} aria-label="Play image reveal using the current local image"><img src={image} alt="Current local reveal source" /><span>Play image reveal</span></button>}
    </div>
    <p className="kalki-effect-hint" role="status" aria-live="polite">Preset: {imagePresets.find(option => option.id === preset)?.label}. {reduced ? 'Reduced motion is enabled; the reveal stays still. ' : ''}Image files never leave this page.</p>
  </PanelCard>;
}

export default function AssistantEffectsLab({ assistantState, voiceState, ThinkingOrb, BorderBeam, VoiceBeam, BotAvatar, Liquid, MetalFx, ImageGeneration }) {
  const reduced = useReducedMotion();
  const [orbState, setOrbState] = useState('solving');
  const [beamActive, setBeamActive] = useState(true);
  const [voiceLevel, setVoiceLevel] = useState(0.48);
  const [avatarType, setAvatarType] = useState('ghost');
  const [avatarState, setAvatarState] = useState('default');
  const [metalPreset, setMetalPreset] = useState('chromatic');
  const liveVoice = Boolean(voiceState?.active);
  const liveListening = Boolean(voiceState?.listening);
  const visualLevel = liveVoice ? (liveListening ? 0.82 : voiceState?.processing ? 0.4 : 0.58) : voiceLevel;
  const activeVoiceBeam = Boolean((liveVoice || voiceLevel > 0) && !reduced);

  return <div className="kalki-effects-lab" aria-label="KALKI visual effects demos">
    <div className="kalki-effects-intro"><p className="kalki-effect-eyebrow">LIBRARIES.DEV · KALKI ASSISTANT</p><h2>Visual effects lab</h2><p>Small, interactive previews for KALKI’s assistant UI. Voice visuals follow KALKI’s existing voice-mode state; opening this panel never asks for microphone access.</p></div>
    <div className="kalki-effects-grid">
      <PanelCard id="thinking-orb" eyebrow="THINKING ORBS · 2D CANVAS" title="Choose a thought state">
        <label className="kalki-effect-control" htmlFor="kalki-orb-state">Orb state<select id="kalki-orb-state" value={orbState} onChange={event => setOrbState(event.target.value)}>{orbStates.map(state => <option key={state} value={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</option>)}</select></label>
        <div className="kalki-effect-preview kalki-orb-preview"><ThinkingOrb state={orbState} size={64} theme="dark" speed={0.9} /><span>{orbState}</span></div>
        <p className="kalki-effect-hint">Preview all nine thought states here; this orb demo never sends a request or starts a background task.</p>
      </PanelCard>

      <PanelCard id="border-beam" eyebrow="BORDER BEAM" title="Animated beam preview">
        <p className="kalki-effect-copy">See the Libraries.dev beam around a separate composer-style card. This demo does not surround the live message composer or alter or send your chat message.</p>
        <div className="kalki-beam-preview-wrap"><BorderBeam size="md" colorVariant="ocean" theme="dark" strength={0.8} active={beamActive && !reduced}><div className="kalki-beam-preview">KALKI · READY FOR YOUR MESSAGE</div></BorderBeam></div>
        <button className="kalki-effects-button" type="button" aria-pressed={beamActive} onClick={() => setBeamActive(value => !value)}>{beamActive ? 'Pause beam' : 'Resume beam'}</button>
      </PanelCard>

      <GooeyDemo reduced={Boolean(reduced)} Liquid={Liquid} />

      <PanelCard id="voice-glow" eyebrow="VOICE GLOW" title="Voice-reactive light, without another mic">
        <p className="kalki-effect-copy">{liveVoice ? (liveListening ? 'KALKI is listening now; the glow follows that live state.' : 'KALKI voice mode is active; the glow follows that live state.') : 'Voice mode is idle. Use the slider for a visual-only demo; it does not access a microphone.'}</p>
        <div className="kalki-voice-preview"><VoiceBeam type="default" theme="dark" colorVariant="ocean" level={visualLevel} processing={Boolean(voiceState?.processing || assistantState === 'solving')} active={activeVoiceBeam} paused={!activeVoiceBeam}><div className="kalki-voice-preview-input"><span>Try saying hello…</span><span aria-hidden="true">🎙</span></div></VoiceBeam></div>
        {!liveVoice && <label className="kalki-effect-control" htmlFor="kalki-voice-level">Visual demo level<input id="kalki-voice-level" type="range" min="0" max="1" step="0.01" value={voiceLevel} onChange={event => setVoiceLevel(Number(event.target.value))} /></label>}
        <p className="kalki-effect-hint" role="status" aria-live="polite">KALKI voice: {liveVoice ? (liveListening ? 'listening' : 'active') : 'idle'} · microphone permission is unchanged.</p>
      </PanelCard>

      <PanelCard id="bot-avatar" eyebrow="BOT AVATARS · 2D CANVAS" title="Choose KALKI’s face">
        <div className="kalki-avatar-preview"><BotAvatar type={avatarType} face="mouth" state={avatarState} size={92} seed={0.37} theme="dark" aria-label={`${avatarType} avatar, ${avatarState} state`} /></div>
        <label className="kalki-effect-control" htmlFor="kalki-avatar-shape">Avatar shape<select id="kalki-avatar-shape" value={avatarType} onChange={event => setAvatarType(event.target.value)}>{avatarTypes.map(shape => <option key={shape} value={shape}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</option>)}</select></label>
        <div className="kalki-avatar-states" role="group" aria-label="Choose bot avatar state">{[['default', 'Idle'], ['working', 'Working'], ['sleeping', 'Sleeping']].map(([value, label]) => <button key={value} className="kalki-effects-button" type="button" aria-pressed={avatarState === value} onClick={() => setAvatarState(value)}>{label}</button>)}</div>
        <div className="kalki-avatar-roster" role="group" aria-label="Assistant avatar roster">
          {[['KALKI guide', 'ghost', 'default'], ['Idea scout', 'star', 'working'], ['Creator', 'flower', 'working'], ['Night monitor', 'droid', 'sleeping']].map(([name, shape, state]) => <div className="kalki-avatar-roster-item" key={name}><BotAvatar type={shape} face="eyes" state={state} size={34} seed={shape.length / 20} theme="dark" interactive={false} aria-label={`${name}, ${state}`} /><span>{name}<small>{shape} · {state}</small></span></div>)}
        </div>
        <p className="kalki-effect-hint">Ghost is KALKI’s featured avatar preview; the roster shows additional 2D agent faces.</p>
      </PanelCard>

      <PanelCard id="metal-fx" eyebrow="METAL FX · WEBGL2" title="A liquid-metal accent">
        <p className="kalki-effect-copy">WebGL2 browsers get the reflective ring; unsupported browsers keep the clear button beneath it.</p>
        <label className="kalki-effect-control" htmlFor="kalki-metal-preset">Metal finish<select id="kalki-metal-preset" value={metalPreset} onChange={event => setMetalPreset(event.target.value)}><option value="chromatic">Chromatic</option><option value="silver">Silver</option><option value="gold">Gold</option></select></label>
        <div className="kalki-metal-stage"><MetalFx preset={metalPreset} strength={0.82} variant="circle" theme="dark" innerShadow paused={Boolean(reduced)}><button type="button" className="kalki-metal-button" aria-label="Example liquid-metal action">✦</button></MetalFx></div>
      </PanelCard>

      <ImageRevealDemo reduced={Boolean(reduced)} ImageGeneration={ImageGeneration} />
    </div>
  </div>;
}
