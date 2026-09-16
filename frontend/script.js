
/* Safe WhatsApp handoff: opening never sends. */
document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("msg"),b=document.getElementById("send"),o=document.getElementById("open-whatsapp");const handoff=()=>{if(/^\s*(?:open|launch|start|do)\s+(?:the\s+)?whatsapp\b/i.test(i?.value||"")){location.href="whatsapp://send"}};b?.addEventListener("click",handoff,true);o?.addEventListener("click",e=>{e.preventDefault();e.stopImmediatePropagation();location.href="whatsapp://send"},true)});
