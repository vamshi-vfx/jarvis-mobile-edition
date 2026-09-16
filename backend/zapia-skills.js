/* Safe, explicit-only handlers for Zapia-inspired planning skills.
 * These handlers deliberately do not call providers: they describe what is
 * available and return a provider-not-connected response until an integration
 * is explicitly configured and verified.
 */
const SKILL_HANDLERS = {
  dayOrganizer: {
    action: 'plan_day',
    requiredProviders: ['calendar', 'tasks', 'email'],
    handle: () => safeStatus('dayOrganizer', 'Day organizer', ['calendar', 'tasks', 'email'], 'A day plan can be prepared after Calendar, Tasks, and Email are connected. No events, tasks, or emails were changed.'),
  },
  stayInTouch: {
    action: 'plan_follow_ups',
    requiredProviders: ['contacts', 'email', 'whatsapp'],
    handle: () => safeStatus('stayInTouch', 'Stay-in-touch assistant', ['contacts', 'email', 'whatsapp'], 'Follow-up planning is available after Contacts, Email, or WhatsApp is connected. No contacts were edited and no messages were sent.'),
  },
  whatsappAudioTranscription: {
    action: 'transcribe_audio',
    requiredProviders: ['whatsapp'],
    handle: () => safeStatus('whatsappAudioTranscription', 'WhatsApp audio transcription and summarization', ['whatsapp'], 'Audio transcription requires a connected WhatsApp media provider. No audio was downloaded, transcribed, or shared.'),
  },
  unavailableTimeReplyDrafts: {
    action: 'draft_unavailable_reply',
    requiredProviders: ['calendar', 'email'],
    handle: () => safeStatus('unavailableTimeReplyDrafts', 'Unavailable-time reply drafts', ['calendar', 'email'], 'Reply drafts can be prepared after Calendar and Email are connected. No reply was sent or scheduled.'),
  },
};

function safeStatus(skill, name, requiredProviders, message) {
  return {
    executed: false,
    skill,
    action: SKILL_HANDLERS[skill]?.action,
    providerConnected: false,
    status: 'provider-not-connected',
    requiredProviders,
    sendsMessages: false,
    schedules: false,
    message,
  };
}

function handleSkill(skill) {
  const definition = SKILL_HANDLERS[skill];
  if (!definition) return null;
  return definition.handle();
}

module.exports = { SKILL_HANDLERS, handleSkill };
