const crypto = require('node:crypto');

const workflows = new Map();
const providers = { whatsapp: 'not_connected', email: 'not_connected', calendar: 'not_connected', tasks: 'not_connected' };
function id(prefix='wf') { return `${prefix}_${crypto.randomBytes(8).toString('hex')}`; }
function providerFor(text) {
  if (/whatsapp|message|reply|send .*msg/i.test(text)) return 'whatsapp';
  if (/email|mail|gmail|outlook/i.test(text)) return 'email';
  if (/calendar|meeting|schedule|event/i.test(text)) return 'calendar';
  if (/reminder|task|todo/i.test(text)) return 'tasks';
  return null;
}
function parse(text='') {
  const value = String(text).trim();
  if (!value) return { ok:false, code:'EMPTY_COMMAND', message:'Command text is required.' };
  const provider = providerFor(value);
  const reminder = /remind(?:er)?|task|todo/i.test(value);
  const draft = /\bdraft\b/i.test(value) && !/\bsend\b|\breply\b/i.test(value);
  const destructive = /\bsend\b|\breply\b|\bdelete\b|\bcancel\b|\bschedule\b|\bcreate\b|\badd\b/i.test(value);
  const steps = /\bthen\b|\bafter that\b|\bnext\b|multi[- ]?step|workflow/i.test(value)
    ? value.split(/\bthen\b|\bafter that\b|\bnext\b/i).map(s=>s.trim()).filter(Boolean).map((command, index)=>({ id:id('step'), order:index+1, command, status:'pending' }))
    : [{ id:id('step'), order:1, command:value, status:'pending' }];
  const kind = reminder ? 'reminder' : draft ? 'draft' : provider ? 'provider_action' : 'workflow';
  return { ok:true, kind, provider, draft, requiresConfirmation: Boolean(destructive || provider || reminder), explicitAction: true, steps };
}
function preview(text) {
  const parsed = parse(text);
  if (!parsed.ok) return parsed;
  const workflow = { id:id(), createdAt:new Date().toISOString(), status:'preview', ...parsed, audit:[{event:'previewed',at:new Date().toISOString()}] };
  workflows.set(workflow.id, workflow);
  return { ok:true, workflow, message: workflow.requiresConfirmation ? 'Preview ready. Nothing was executed. Confirmation is required.' : 'Preview ready. Nothing was executed.' };
}
function get(idValue) { return workflows.get(idValue) || null; }
function cancel(idValue) { const w=get(idValue); if(!w) return {ok:false,code:'WORKFLOW_NOT_FOUND',message:'Workflow was not found.'}; if(['executed','cancelled'].includes(w.status)) return {ok:false,code:'WORKFLOW_NOT_ACTIVE',message:`Workflow is already ${w.status}.`}; w.status='cancelled'; w.audit.push({event:'cancelled',at:new Date().toISOString()}); return {ok:true,workflow:w,message:'Workflow cancelled. Nothing was executed.'}; }
function approve(idValue) { const w=get(idValue); if(!w) return {ok:false,code:'WORKFLOW_NOT_FOUND',message:'Workflow was not found.'}; if(w.status!=='preview') return {ok:false,code:'CONFIRMATION_INVALID',message:'Only a preview can be confirmed.'}; w.status='approved'; w.audit.push({event:'approved',at:new Date().toISOString()}); if(w.provider && providers[w.provider] !== 'connected') { w.status='blocked'; w.blockedReason=`${w.provider} connector is ${providers[w.provider] || 'not_connected'}.`; return {ok:true,executed:false,blocked:true,workflow:w,message:`Approved, but not executed: ${w.provider} connector is not connected. No external action occurred.`}; } return {ok:true,executed:false,blocked:true,workflow:w,message:'Approved, but execution is unavailable in this credential-free scaffold. No external action occurred.'}; }
function undo(idValue) { const w=get(idValue); if(!w) return {ok:false,code:'WORKFLOW_NOT_FOUND',message:'Workflow was not found.'}; if(w.status==='executed') return {ok:false,code:'UNDO_UNSUPPORTED',message:'This action cannot be undone automatically.'}; return cancel(idValue); }
function list() { return [...workflows.values()].map(w=>({id:w.id,status:w.status,kind:w.kind,provider:w.provider,createdAt:w.createdAt})); }
module.exports={preview,approve,cancel,undo,get,list,parse,providers};
