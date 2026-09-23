/*
 * KALKI Social Automation Agent: browser-local builder and simulation only.
 * No Instagram/Meta requests, OAuth, webhook listener, message sending, or publish API.
 */
(() => {
  'use strict';
  const KEY = 'kalki_social_agent_preview_v1';
  const RATE_WINDOW_MS = 60 * 60 * 1000;
  const MAX_AUDIT = 100;
  const MAX_RATE_RECORDS = 1000;
  const $ = (id) => document.getElementById(id);
  const fresh = () => ({running:false,rules:[],allowlist:[],audit:[],rate:[],metrics:{previews:0,approved:0,blocked:0}});
  function loadState() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!raw || typeof raw !== 'object') return fresh();
      return {
        running:false, // Never restore a running simulator after page reload.
        rules:Array.isArray(raw.rules) ? raw.rules : [],
        allowlist:Array.isArray(raw.allowlist) ? raw.allowlist : [],
        audit:Array.isArray(raw.audit) ? raw.audit.slice(0,MAX_AUDIT) : [],
        rate:Array.isArray(raw.rate) ? raw.rate.slice(0,MAX_RATE_RECORDS) : [],
        metrics:{previews:0,approved:0,blocked:0,...(raw.metrics || {})}
      };
    } catch (_) { return fresh(); }
  }
  let state = loadState();
  let pendingPreview = null;
  function status(message) { const node=$('social-agent-status'); if(node) node.textContent=message; }
  function save() {
    try { localStorage.setItem(KEY,JSON.stringify(state)); }
    catch (_) { status('Could not save local preview data in this browser.'); }
    render();
  }
  function audit(event,detail) {
    state.audit.unshift({at:new Date().toISOString(),event,detail});
    state.audit=state.audit.slice(0,MAX_AUDIT);
  }
  function formatTime(value) { try { return new Date(value).toLocaleString(); } catch (_) { return String(value); } }
  function parseAllowlist(value) {
    return [...new Set(String(value).split(/[\s,;]+/).map(item=>item.trim().replace(/^@/,'').toLowerCase()).filter(item=>/^[a-z0-9._]{1,30}$/.test(item)))];
  }
  function triggerLabel(value) {
    return ({comment:'Post comment · one private CTA',keyword:'Incoming DM keyword · follow gate',story:'Story reply DM · follow gate'})[value] || value;
  }
  function matches(rule,text) {
    if (rule.condition === 'any') return true;
    const value=String(text||'').toLowerCase();
    return (rule.keywords||[]).some(term=>rule.matchMode==='word' ? value.split(/\W+/).includes(term) : value.includes(term));
  }
  function render() {
    const running=$('social-agent-running');
    if(running){running.textContent=state.running?'SIMULATOR ACTIVE · LOCAL ONLY':'PAUSED / STOPPED';running.setAttribute('aria-live','polite');}
    const toggle=$('social-agent-toggle'); if(toggle) toggle.textContent=state.running?'Pause simulator':'Start simulator';
    const metrics=$('social-agent-metrics');
    if(metrics){
      metrics.replaceChildren();
      [['Previews',state.metrics.previews],['Approvals',state.metrics.approved],['Blocked',state.metrics.blocked],['Live sends',0]].forEach(([label,value])=>{
        const card=document.createElement('div');card.className='social-metric';
        const amount=document.createElement('strong');amount.textContent=String(value);
        const caption=document.createElement('small');caption.textContent=label;
        card.append(amount,caption);metrics.append(card);
      });
    }
    const list=$('social-agent-rules');
    if(list){
      list.replaceChildren();
      if(!state.rules.length){const empty=document.createElement('p');empty.textContent='No local rules yet. Create one above; every rule starts paused.';list.append(empty);}
      state.rules.forEach((rule,index)=>{
        const card=document.createElement('article');card.className='social-rule';
        const head=document.createElement('div');head.className='social-rule-head';
        const title=document.createElement('strong');title.textContent=rule.name;
        const actions=document.createElement('div');actions.className='social-row';
        const toggle=document.createElement('button');toggle.type='button';toggle.className='social-secondary';toggle.dataset.toggleRule=String(index);toggle.textContent=rule.enabled?'Pause rule':'Enable simulator rule';
        const remove=document.createElement('button');remove.type='button';remove.className='social-danger';remove.dataset.removeRule=String(index);remove.textContent='Delete';
        actions.append(toggle,remove);head.append(title,actions);
        const meta=document.createElement('small');meta.textContent=`${rule.triggerLabel} · ${rule.conditionLabel} · explicit approval required · ${rule.enabled?'simulator on':'paused'}`;
        const cta=document.createElement('p');cta.textContent=`Private-reply CTA / reminder: ${rule.reply}`;
        const key=document.createElement('p');key.textContent=`Agreed DM keyword: ${rule.dmKeyword}`;
        const resource=document.createElement('p');resource.textContent=`Resource: ${rule.resourceUrl}${rule.inviteUrl?' · WhatsApp invite: '+rule.inviteUrl:''}`;
        const allow=document.createElement('p');allow.textContent=`Allowlist: ${rule.allowlist.join(', ')||'empty — no preview can pass'}`;
        card.append(head,meta,cta,key,resource,allow);list.append(card);
      });
    }
    const log=$('social-agent-audit');
    if(log){
      log.replaceChildren();
      if(!state.audit.length){const empty=document.createElement('p');empty.textContent='No preview activity recorded.';log.append(empty);}
      state.audit.slice(0,30).forEach(entry=>{const row=document.createElement('div');row.className='social-audit-item';row.textContent=`${formatTime(entry.at)} · ${entry.event} · ${entry.detail}`;log.append(row);});
    }
    const preview=$('social-agent-pending');
    if(preview){
      preview.hidden=!pendingPreview;
      if(pendingPreview){$('social-preview-title').textContent=pendingPreview.title;$('social-preview-detail').textContent=pendingPreview.detail;$('social-preview-action').textContent=pendingPreview.action;$('social-preview-check').checked=false;$('social-preview-confirm').disabled=true;}
    }
  }
  function safeHttps(value) {
    if (!value) return false;
    try { return new URL(value).protocol==='https:'; } catch (_) { return false; }
  }
  function followCta(rule) {
    let message=String(rule.reply||'').replace(/\{keyword\}/gi,rule.dmKeyword);
    if (!/\bfollow\b/i.test(message)) message=`Please follow @growthos_telugu. ${message}`;
    if (!message.toLowerCase().includes(String(rule.dmKeyword).toLowerCase())) message+=` Then DM ${rule.dmKeyword} after following @growthos_telugu.`;
    return message;
  }
  function onReady() {
    if (!$('social-agent-form')) return;
    $('social-agent-form').addEventListener('submit',event=>{
      event.preventDefault();
      const data=new FormData(event.currentTarget);
      const trigger=String(data.get('trigger')||'comment');
      const condition=String(data.get('condition')||'keyword');
      const name=String(data.get('name')||'').trim();
      const keywords=String(data.get('keywords')||'').split(',').map(value=>value.trim().toLowerCase()).filter(Boolean);
      const reply=String(data.get('reply')||'').trim();
      const dmKeyword=String(data.get('dmKeyword')||'').trim().toLowerCase();
      const resourceUrl=String(data.get('resourceUrl')||'').trim();
      const inviteUrl=String(data.get('inviteUrl')||'').trim();
      const allowlist=parseAllowlist(String(data.get('allowlist')||''));
      if(!name||!reply||!dmKeyword){status('Add a rule name, CTA/reminder, and agreed DM keyword.');return;}
      if(condition==='keyword'&&!keywords.length){status('Add at least one trigger condition keyword.');return;}
      if(!safeHttps(resourceUrl)|| (inviteUrl&&!safeHttps(inviteUrl))){status('Resource and community links must be valid HTTPS URLs.');return;}
      if(!allowlist.length){status('Add at least one permitted username; an empty allowlist blocks every simulation.');return;}
      const signature=[trigger,condition,keywords.join('|'),dmKeyword,name.toLowerCase()].join('::');
      if(state.rules.some(rule=>rule.signature===signature)){status('Duplicate rule blocked. Change its name, trigger or condition.');return;}
      const rule={id:`rule-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,signature,name,trigger,triggerLabel:triggerLabel(trigger),condition,conditionLabel:condition==='keyword'?`trigger keyword: ${keywords.join(', ')}`:'any text',keywords,matchMode:String(data.get('matchMode')||'contains'),reply,dmKeyword,resourceUrl,inviteUrl,allowlist,enabled:false,createdAt:new Date().toISOString()};
      state.allowlist=allowlist;state.rules.push(rule);audit('RULE_SAVED',`${name} saved locally; paused`);event.currentTarget.reset();save();status('Saved locally and paused. No Meta connection or external action.');
    });
    $('social-agent-toggle').addEventListener('click',()=>{state.running=!state.running;audit(state.running?'SIMULATOR_STARTED':'SIMULATOR_PAUSED',state.running?'local preview simulator only':'simulator paused');save();status(state.running?'Local simulator started; it can only create previews.':'Simulator paused.');});
    $('social-agent-stop').addEventListener('click',()=>{state.running=false;pendingPreview=null;audit('STOP_ALL','simulator stopped and pending preview cleared');save();status('Stopped. Pending preview cleared; no message was sent.');});
    $('social-agent-rules').addEventListener('click',event=>{
      const toggle=event.target.closest('[data-toggle-rule]');
      if(toggle){const rule=state.rules[Number(toggle.dataset.toggleRule)];if(rule){rule.enabled=!rule.enabled;audit(rule.enabled?'SIMULATOR_RULE_ENABLED':'SIMULATOR_RULE_PAUSED',`${rule.name} · local preview only`);save();status(rule.enabled?'Rule enabled in local simulator only.':'Rule paused.');}return;}
      const remove=event.target.closest('[data-remove-rule]');if(!remove)return;
      const index=Number(remove.dataset.removeRule);const rule=state.rules[index];
      if(rule){audit('RULE_DELETED',rule.name);state.rules.splice(index,1);save();status('Rule deleted from this browser.');}
    });
    $('social-simulate-form').addEventListener('submit',event=>{
      event.preventDefault();pendingPreview=null;
      const data=new FormData(event.currentTarget);
      const trigger=String(data.get('trigger')||'comment');
      const username=String(data.get('username')||'').trim().replace(/^@/,'').toLowerCase();
      const text=String(data.get('eventText')||'').trim();
      const profileStatus=String(data.get('profileStatus')||'unknown');
      if(!/^[a-z0-9._]{1,30}$/.test(username)||!text){status('Enter a valid Instagram username and sample event text.');return;}
      if(!state.running){state.metrics.blocked++;audit('BLOCKED_PAUSED',`@${username} · simulator paused`);save();status('Blocked: start the local simulator before generating a preview.');return;}
      const rule=state.rules.find(item=>{
        if(!item.enabled||!item.allowlist.includes(username))return false;
        if(trigger==='comment')return item.trigger==='comment'&&matches(item,text);
        if(trigger==='keyword'){
          const agreedKeyword=String(item.dmKeyword||'').toLowerCase();
          return item.trigger==='keyword'?matches(item,text):(item.trigger==='comment'&&agreedKeyword&&text.toLowerCase().includes(agreedKeyword));
        }
        return trigger==='story'&&item.trigger==='story'&&matches(item,text);
      });
      if(!rule){state.metrics.blocked++;audit('BLOCKED_NO_MATCH',`@${username} · ${triggerLabel(trigger)} · rule/condition/allowlist not matched`);save();status('Blocked: no enabled matching rule, condition or allowlisted username.');return;}
      if(trigger!=='comment'&&profileStatus==='unknown'){state.metrics.blocked++;audit('BLOCKED_NO_CONSENT',`@${username} · unknown follower status; profile result required after inbound DM`);save();status('Blocked: unknown profile status. An inbound DM/eligible consent and an explicit follower result are required before previewing a link.');return;}
      const now=Date.now();
      state.rate=state.rate.filter(item=>now-item.at<24*60*60*1000).slice(0,MAX_RATE_RECORDS);
      const previous=state.rate.find(item=>item.ruleId===rule.id&&item.username===username&&item.stage===trigger);
      const signature=`${rule.id}:${username}:${trigger}:${text.toLowerCase()}`;
      if(previous&&previous.signature===signature){state.metrics.blocked++;audit('BLOCKED_DUPLICATE',`@${username} · duplicate event ignored`);save();status('Duplicate event blocked.');return;}
      if(previous&&now-previous.at<RATE_WINDOW_MS){state.metrics.blocked++;audit('BLOCKED_RATE_LIMIT',`@${username} · one preview per rule/user per 60 minutes`);save();status('Rate limit: one preview per user/rule each 60 minutes.');return;}
      state.rate.unshift({ruleId:rule.id,username,stage:trigger,signature,at:now});state.rate=state.rate.slice(0,MAX_RATE_RECORDS);
      const cta=followCta(rule);
      let action;
      if(trigger==='comment'){
        action=`ONE private-reply CTA only (Meta comment window: up to 7 days; never a second private reply): ${cta}`;
      } else if(profileStatus==='follower') {
        action=`Follow check: is_user_follow_business = true (simulated only). Prepare resource link: ${rule.resourceUrl}${rule.inviteUrl?`\nWhatsApp community invite: ${rule.inviteUrl}`:''}\nSend window: only within 24 hours after this inbound message.`;
      } else {
        action=`Follow check: is_user_follow_business = false (simulated only). Do NOT reveal either link. Reminder draft: ${cta}`;
      }
      const statusLabel=trigger==='comment'?'not checked (comment does not grant profile consent)':profileStatus==='follower'?'follows account (simulated)': 'does not follow (simulated)';
      pendingPreview={title:`Preview only · ${rule.name}`,detail:`Sample event from @${username}: “${text}”\nTrigger: ${triggerLabel(trigger)}\nCondition: ${rule.conditionLabel}\nAllowlist: matched locally\nFollow status: ${statusLabel}\nDuplicate/rate checks: passed`,action,username,ruleName:rule.name};
      state.metrics.previews++;audit('PREVIEW_CREATED',`@${username} · ${rule.name} · ${trigger==='comment'?'single CTA only':'follow gate simulated'} · not sent`);save();status('Preview created. No profile lookup, DM, or external action occurred.');
    });
    $('social-preview-check').addEventListener('change',event=>{$('social-preview-confirm').disabled=!event.currentTarget.checked;});
    $('social-preview-confirm').addEventListener('click',()=>{
      if(!pendingPreview||!$('social-preview-check').checked)return;
      state.metrics.approved++;audit('PREVIEW_APPROVED_NOT_SENT',`@${pendingPreview.username} · ${pendingPreview.ruleName} · explicit local approval only`);pendingPreview=null;save();status('Approval recorded locally only. No DM was sent.');
    });
    $('social-agent-clear-audit').addEventListener('click',()=>{state.audit=[];state.metrics={previews:0,approved:0,blocked:0};pendingPreview=null;audit('LOCAL_AUDIT_CLEARED','browser-local audit and preview counters reset');save();status('Local audit and preview counters cleared.');});
    render();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',onReady,{once:true});
  else onReady();
})();
