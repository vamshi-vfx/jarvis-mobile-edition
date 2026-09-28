import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { createPortal, createRoot } from 'react-dom/client';
import { BotAvatar } from 'bot-avatars';
import { BorderBeam } from 'border-beam';
import { ThinkingOrb } from 'thinking-orbs';
import { VoiceBeam } from 'voice-glow';

// The heavier Gooey, Metal and Image effects load only when the user opens
// KALKI's Visual Effects screen.
const VisualEffectsLab = React.lazy(() => import('./assistant-effects-lab.jsx'));

function ComposerEffects({ assistantState, voiceState, reduced }) {
  const [focused, setFocused] = useState(false);
  const target = document.getElementById('kalki-composer-effects-root');

  useEffect(() => {
    const composer = document.querySelector('.composer');
    if (!composer) return undefined;
    const onFocus = () => setFocused(true);
    const onBlur = () => window.setTimeout(() => {
      setFocused(composer.contains(document.activeElement));
    }, 0);
    composer.addEventListener('focusin', onFocus);
    composer.addEventListener('focusout', onBlur);
    return () => {
      composer.removeEventListener('focusin', onFocus);
      composer.removeEventListener('focusout', onBlur);
    };
  }, []);

  if (!target) return null;
  const busy = assistantState === 'solving';
  const active = (focused || busy || voiceState.active) && !reduced;
  const level = voiceState.active ? (voiceState.listening ? 0.72 : 0.34) : (busy ? 0.2 : 0);

  return createPortal(<>
    <BorderBeam
      className="kalki-composer-border-beam"
      size="md"
      colorVariant="ocean"
      theme="dark"
      strength={active ? 0.86 : 0.3}
      active={active}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <span className="kalki-composer-beam-proxy" />
    </BorderBeam>
    <VoiceBeam
      className="kalki-composer-voice-beam"
      type="default"
      theme="dark"
      level={level}
      processing={busy}
      paused={!active}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <span className="kalki-composer-voice-proxy" />
    </VoiceBeam>
  </>, target);
}

function AssistantPortals({ assistantState, voiceState, reduced }) {
  const avatarTarget = document.getElementById('kalki-avatar-root');
  const thinkingTarget = document.getElementById('kalki-thinking-root');
  const busy = assistantState === 'solving';
  const orbState = busy ? 'solving' : voiceState.listening ? 'listening' : 'working';
  const avatarState = busy || voiceState.active ? 'working' : 'default';
  return <>
    {avatarTarget && createPortal(
      <BotAvatar type="ghost" face="eyes" state={avatarState} size={36} seed={0.37} theme="dark" aria-label={`KALKI assistant avatar, ${avatarState}`} />,
      avatarTarget
    )}
    {thinkingTarget && createPortal(
      busy || voiceState.active ? <div className="kalki-thinking-indicator" role="status" aria-live="polite">
        <ThinkingOrb state={orbState} size={20} theme="dark" speed={0.95} />
        <span>{busy ? 'KALKI is thinking…' : voiceState.listening ? 'KALKI is listening…' : 'KALKI voice mode is active'}</span>
      </div> : null,
      thinkingTarget
    )}
    <ComposerEffects assistantState={assistantState} voiceState={voiceState} reduced={reduced} />
  </>;
}

function KalkiEffectsRuntime() {
  const reduced = useReducedMotion();
  const [assistantState, setAssistantState] = useState(() => window.kalkiAssistantState || 'idle');
  const [voiceState, setVoiceState] = useState(() => window.kalkiVoiceState || { active: false, listening: false, message: '' });
  const [panelOpen, setPanelOpen] = useState(() => {
    const panel = document.getElementById('kalki-effects-panel');
    return Boolean(panel && !panel.hidden);
  });

  useEffect(() => {
    const onAssistant = event => setAssistantState(event.detail?.state || 'idle');
    const onVoice = event => setVoiceState(event.detail || { active: false, listening: false, message: '' });
    const onSurface = () => {
      const panel = document.getElementById('kalki-effects-panel');
      setPanelOpen(Boolean(panel && !panel.hidden));
    };
    window.addEventListener('kalki:assistant-state', onAssistant);
    window.addEventListener('kalki:voice-state', onVoice);
    window.addEventListener('kalki:surface-change', onSurface);
    return () => {
      window.removeEventListener('kalki:assistant-state', onAssistant);
      window.removeEventListener('kalki:voice-state', onVoice);
      window.removeEventListener('kalki:surface-change', onSurface);
    };
  }, []);

  return <>
    <AssistantPortals assistantState={assistantState} voiceState={voiceState} reduced={reduced} />
    {panelOpen && <React.Suspense fallback={<div className="kalki-effects-loading" role="status">Loading KALKI visual effects…</div>}>
      <VisualEffectsLab assistantState={assistantState} voiceState={voiceState} ThinkingOrb={ThinkingOrb} BorderBeam={BorderBeam} VoiceBeam={VoiceBeam} BotAvatar={BotAvatar} />
    </React.Suspense>}
  </>;
}

let effectsRoot = null;
export function mountKalkiEffects() {
  const target = document.getElementById('kalki-effects-react-root');
  if (!target) return null;
  if (!effectsRoot) effectsRoot = createRoot(target);
  effectsRoot.render(<React.StrictMode><KalkiEffectsRuntime /></React.StrictMode>);
  document.body.classList.add('kalki-effects-ready');
  return effectsRoot;
}
