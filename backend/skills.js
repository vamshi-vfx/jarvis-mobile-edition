const SKILLS = {
  whatsapp: { name: 'WhatsApp', provider: 'private-whatsapp-bridge', explicitOnly: true },
  search: { name: 'Web Search', provider: 'search-api', explicitOnly: true },
  youtube: { name: 'YouTube', provider: 'youtube-api', explicitOnly: true },
  youtubeAnalytics: { name: 'Daily YouTube Analytics', provider: 'public-youtube-data', explicitOnly: true, oauthRequired: false, channel: 'GrowthOS Telugu (@growthos_telugu)', comparisonState: 'unavailable-without-durable-storage' },
  dailyAiLaunchUpdate: { name: 'Daily AI Launch Updates', provider: 'public-web-sources', explicitOnly: true, sendsMessages: false, schedules: false, status: 'provider-not-connected' },
  dayOrganizer: { name: 'Day Organizer', provider: 'calendar-tasks-email', explicitOnly: true, sendsMessages: false, schedules: false, status: 'provider-not-connected', requiredProviders: ['calendar', 'tasks', 'email'] },
  stayInTouch: { name: 'Stay-in-Touch Assistant', provider: 'contacts-email-whatsapp', explicitOnly: true, sendsMessages: false, schedules: false, status: 'provider-not-connected', requiredProviders: ['contacts', 'email', 'whatsapp'] },
  whatsappAudioTranscription: { name: 'WhatsApp Audio Transcription and Summarization', provider: 'whatsapp-media-transcription', explicitOnly: true, sendsMessages: false, schedules: false, status: 'provider-not-connected', requiredProviders: ['whatsapp'] },
  unavailableTimeReplyDrafts: { name: 'Unavailable-Time Reply Drafts', provider: 'calendar-email', explicitOnly: true, sendsMessages: false, schedules: false, status: 'provider-not-connected', requiredProviders: ['calendar', 'email'] },
  email: { name: 'Email', provider: 'gmail-or-outlook', explicitOnly: true },
  calendar: { name: 'Calendar', provider: 'google-calendar', explicitOnly: true },
  tasks: { name: 'Tasks and Reminders', provider: 'task-provider', explicitOnly: true },
  contacts: { name: 'Contacts', provider: 'contacts-provider', explicitOnly: true },
  drive: { name: 'Cloud Files', provider: 'google-drive', explicitOnly: true },
  documents: { name: 'Documents', provider: 'docx-pdf-xlsx-pptx', explicitOnly: true },
  travel: { name: 'Travel', provider: 'travel-search', explicitOnly: true },
  places: { name: 'Places and Restaurants', provider: 'places-api', explicitOnly: true },
  prices: { name: 'Price Comparison', provider: 'product-search', explicitOnly: true },
  media: { name: 'Image and Media', provider: 'media-tools', explicitOnly: true },
  automation: { name: 'Multi-step Automation', provider: 'skill-orchestrator', explicitOnly: true },
  memory: { name: 'Personal Memory', provider: 'encrypted-memory', explicitOnly: true }
};

module.exports = SKILLS;
