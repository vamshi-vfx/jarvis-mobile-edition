const SKILLS = {
  whatsapp: { name: 'WhatsApp', provider: 'private-whatsapp-bridge', explicitOnly: true },
  search: { name: 'Web Search', provider: 'search-api', explicitOnly: true },
  youtube: { name: 'YouTube', provider: 'youtube-api', explicitOnly: true },
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
