import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BotAvatar } from 'bot-avatars';
import { BorderBeam } from 'border-beam';
import { ThinkingOrb } from 'thinking-orbs';
import { VoiceBeam } from 'voice-glow';
import { Liquid } from 'liquid-gooey';
import { MetalFx } from 'metal-fx';
import { ImageGeneration } from 'img-fx';
import AssistantEffectsLab from './assistant-effects-lab.jsx';
import './assistant-effects-frame.css';
import '../../frontend/kalki-effects.css';

class EffectsErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error) { console.error('KALKI visual effects lab failed to render.', error); }
  render() {
    if (this.state.failed) return <div className="kalki-effects-load-error" role="alert">A visual effect could not start. Refresh KALKI and try again.</div>;
    return this.props.children;
  }
}

function EffectsApp() {
  const [assistantState, setAssistantState] = useState('idle');
  const [voiceState, setVoiceState] = useState({ active: false, listening: false, processing: false });

  useEffect(() => {
    let resizeFrame = 0;
    const reportHeight = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const root = document.getElementById('root');
        const height = Math.ceil(Math.max(
          document.documentElement.scrollHeight,
          document.body?.scrollHeight || 0,
          root?.getBoundingClientRect().height || 0
        ));
        window.parent?.postMessage({ type: 'kalki-effects-resize', height }, window.location.origin);
      });
    };
    const onMessage = event => {
      if (event.source !== window.parent || event.origin !== window.location.origin) return;
      if (event.data?.type !== 'kalki-state') return;
      setAssistantState(event.data.assistantState || 'idle');
      setVoiceState(event.data.voiceState || { active: false, listening: false, processing: false });
      requestAnimationFrame(reportHeight);
    };
    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(reportHeight) : null;
    observer?.observe(document.documentElement);
    window.addEventListener('message', onMessage);
    window.addEventListener('load', reportHeight);
    const frame = requestAnimationFrame(() => {
      window.parent?.postMessage({ type: 'kalki-effects-ready' }, window.location.origin);
      reportHeight();
    });
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('message', onMessage);
      window.removeEventListener('load', reportHeight);
    };
  }, []);

  return <EffectsErrorBoundary>
    <AssistantEffectsLab
      assistantState={assistantState}
      voiceState={voiceState}
      ThinkingOrb={ThinkingOrb}
      BorderBeam={BorderBeam}
      VoiceBeam={VoiceBeam}
      BotAvatar={BotAvatar}
      Liquid={Liquid}
      MetalFx={MetalFx}
      ImageGeneration={ImageGeneration}
    />
  </EffectsErrorBoundary>;
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<React.StrictMode><EffectsApp /></React.StrictMode>);
