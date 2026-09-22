/* Provider-neutral server boundary for KALKI Advanced Intelligence.
 * Adapters are deliberately inert until credentials and an explicit request exist.
 */
const CAPABILITIES = Object.freeze({
  realtimeVoice: { state: 'server-adapter-required', consent: 'microphone-foreground' },
  screenUnderstanding: { state: 'native-consent-required', consent: 'MediaProjection-per-request' },
  cameraVision: { state: 'native-consent-required', consent: 'CAMERA-per-request' },
  safeIntents: { state: 'native-allowlist-only', consent: 'explicit-command' },
  multiStepPlanning: { state: 'preview-only', consent: 'approval-per-step' },
  memory: { state: 'interface-only', consent: 'explicit-save' },
  documents: { state: 'preview-only', consent: 'user-selected-file' },
  geminiLive: { state: process.env.GEMINI_API_KEY ? 'configured-boundary' : 'unavailable', secret: 'server-only' },
  openRouter: { state: process.env.OPENROUTER_API_KEY ? 'configured-boundary' : 'unavailable', secret: 'server-only' }
});
function capabilityStatus() { return JSON.parse(JSON.stringify(CAPABILITIES)); }
function preparePlan(text) {
  const clean=String(text||'').trim();
  if(!clean) return {approved:false, state:'needs-input', steps:[]};
  return {approved:false, state:'approval-required', steps:[{id:'step-1', action:'analyze request', state:'preview-only'},{id:'step-2', action:clean, state:'blocked-until-approval'}], warning:'No step is executed by this endpoint.'};
}
module.exports={CAPABILITIES,capabilityStatus,preparePlan};
