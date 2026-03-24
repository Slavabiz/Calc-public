/* buh-cards-widget v2.3.0 | 2026-03-24 | updated texts + new photos */
(function(){
"use strict";
var V="2.3.0",CID="buh-cards",CTA="#order";
var WEBHOOK="https://script.google.com/macros/s/AKfycbym1zvHu5VtcuHSA6XwxuMaMDidPP8o9hnnjY2hhvdzB5tqQlmEd6gDDQQUsWsJG7PTnw/exec";
var CDN="https://cdn.jsdelivr.net/gh/Slavabiz/Calc-public@main/";

var D=[
{id:1,n:"\u0415\u043B\u0435\u043D\u0430 \u041F\u0435\u0442\u0440\u043E\u0432\u0430",ph:CDN+"1.png",exp:"12 \u043B\u0435\u0442",r:4.9,rev:63,sk:["IT-\u0441\u0444\u0435\u0440\u0430","\u041C\u0430\u043B\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441","\u0423\u0441\u043B\u0443\u0433\u0438"],ind:["\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E","\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0438 \u0440\u0435\u043C\u043E\u043D\u0442"],ent:["\u0418\u041F","\u041E\u041E\u041E"],srv:["\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043F\u0435\u0440\u0432\u0438\u0447\u043A\u043E\u0439","\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438"]},
{id:2,n:"\u041E\u043B\u044C\u0433\u0430 \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430",ph:CDN+"2.png",exp:"8 \u043B\u0435\u0442",r:4.8,rev:41,sk:["\u0422\u043E\u0440\u0433\u043E\u0432\u043B\u044F","\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B"],ind:["\u0420\u043E\u0437\u043D\u0438\u0447\u043D\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F","\u041E\u043F\u0442\u043E\u0432\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F"],ent:["\u041E\u041E\u041E","\u0410\u041E"],srv:["\u0412\u0435\u0434\u0435\u043D\u0438\u0435 \u0443\u0447\u0451\u0442\u0430","\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"]},
{id:3,n:"\u041D\u0430\u0442\u0430\u043B\u044C\u044F \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430",ph:CDN+"3.png",exp:"15 \u043B\u0435\u0442",r:5.0,rev:87,sk:["\u041E\u0421\u041D\u041E","\u041D\u0414\u0421","\u0410\u0443\u0434\u0438\u0442"],ind:["\u041B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430","\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"],ent:["\u0418\u041F","\u041E\u041E\u041E","\u0410\u041E"],srv:["\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0447\u0451\u0442\u0430","\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"]},
{id:4,n:"\u0418\u0440\u0438\u043D\u0430 \u0412\u043E\u043B\u043A\u043E\u0432\u0430",ph:CDN+"4.png",exp:"10 \u043B\u0435\u0442",r:4.7,rev:34,sk:["\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","\u0413\u043E\u0441\u0437\u0430\u043A\u0443\u043F\u043A\u0438","\u0421\u043C\u0435\u0442\u044B"],ind:["\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E","\u041F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"],ent:["\u041E\u041E\u041E"],srv:["\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043F\u0435\u0440\u0432\u0438\u0447\u043A\u043E\u0439","\u0412\u0435\u0434\u0435\u043D\u0438\u0435 \u0443\u0447\u0451\u0442\u0430"]},
{id:5,n:"\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u041B\u0435\u0431\u0435\u0434\u0435\u0432\u0430",ph:CDN+"5.png",exp:"7 \u043B\u0435\u0442",r:4.9,rev:52,sk:["\u041C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u044B","E-commerce","\u0411\u043B\u043E\u0433\u0435\u0440\u044B"],ind:["\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F","\u0420\u0435\u043A\u043B\u0430\u043C\u0430 \u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"],ent:["\u0418\u041F","\u0421\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u0435"],srv:["\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438","\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0438"]}
];

/* Analytics (GET pixel) */
function track(event,accountant,direction){
var params="?event="+encodeURIComponent(event)+"&accountant="+encodeURIComponent(accountant||"")+"&direction="+encodeURIComponent(direction||"")+"&url="+encodeURIComponent(location.href)+"&ua="+encodeURIComponent(navigator.userAgent)+"&_t="+Date.now();
console.log("[buh-cards] track:",event,accountant||"",direction||"");
try{var img=new Image();img.src=WEBHOOK+params;}catch(e){}
}

var ico={
star:'<svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.77 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.77 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>',
cD:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
cU:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
aL:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
aR:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
bld:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
brf:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
grd:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>'
};

function rW(n){var m=n%10,m2=n%100;if(m2>=11&&m2<=14)return"\u043E\u0432";if(m===1)return"";if(m>=2&&m<=4)return"\u0430";return"\u043E\u0432";}

var CSS="\
#"+CID+"{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.5}\
#"+CID+" *{box-sizing:border-box;margin:0;padding:0}\
.bw-wrap{max-width:896px;margin:32px auto;padding:0 4px}\
.bw-h3{font-size:20px;line-height:28px;font-weight:700;color:#111827;margin-bottom:4px}\
.bw-sub{font-size:14px;line-height:20px;color:#6b7280;margin-top:4px;margin-bottom:16px}\
.bw-sl{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:4px 4px 16px}\
.bw-sl::-webkit-scrollbar{display:none}\
.bw-nav{display:flex;justify-content:center;gap:8px;margin-top:8px}\
.bw-nb{width:36px;height:36px;border-radius:50%;border:1px solid #d1d5db;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s}\
.bw-nb:hover{background:#f9fafb}\
.bw-fn{font-size:10px;color:#9ca3af;text-align:center;margin-top:12px}\
.bw-card{flex:0 0 288px;scroll-snap-align:start;background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:box-shadow .2s}\
.bw-card:hover{box-shadow:0 4px 16px rgba(0,0,0,.08)}\
@media(max-width:480px){.bw-card{flex:0 0 calc(100vw - 48px)}}\
.bw-cm{padding:16px;flex:1;display:flex;flex-direction:column}\
.bw-top{display:flex;gap:12px;margin-bottom:12px}\
.bw-ph{width:56px;height:56px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid #fed7aa}\
.bw-meta{min-width:0}\
.bw-nr{display:flex;align-items:center;gap:6px;margin-bottom:2px}\
.bw-nm{font-size:14px;font-weight:600;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\
.bw-nr svg{flex-shrink:0}\
.bw-stats{display:flex;align-items:center;gap:8px;font-size:12px;color:#6b7280;margin-bottom:6px;flex-wrap:wrap}\
.bw-star{display:inline-flex;align-items:center;gap:4px}\
.bw-sn{font-weight:600;color:#111827}\
.bw-exp{font-size:12px;color:#6b7280}\
.bw-skills{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px}\
.bw-sk{font-size:10px;line-height:14px;padding:2px 8px;border-radius:6px;background:#f3f4f6;color:#4b5563;font-weight:500}\
.bw-tog{display:inline-flex;align-items:center;gap:4px;background:none;border:none;color:#f97316;font-size:12px;font-weight:500;cursor:pointer;padding:0;margin-bottom:8px;font-family:inherit;transition:color .15s}\
.bw-tog:hover{color:#ea580c}\
.bw-det{display:none;padding-top:8px;margin-bottom:12px;border-top:1px solid #f3f4f6}\
.bw-det--vis{display:flex;flex-direction:column;gap:8px}\
.bw-dr{display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:16px}\
.bw-dr svg{flex-shrink:0;margin-top:1px}\
.bw-dl{color:#9ca3af}\
.bw-dv{color:#374151}\
.bw-cta{display:block;width:100%;padding:10px;border:none;border-radius:8px;background:#f97316;color:#fff;font-size:12px;font-weight:600;text-align:center;text-decoration:none;cursor:pointer;font-family:inherit;transition:background .15s;line-height:18px;margin-top:auto}\
.bw-cta:hover{background:#ea580c}\
";

function rc(c){
var sk=c.sk.map(function(s){return '<span class="bw-sk">'+s+'</span>';}).join('');
return '<div class="bw-card"><div class="bw-cm">'+
'<div class="bw-top">'+
'<img class="bw-ph" src="'+c.ph+'" alt="'+c.n+'" loading="lazy"/>'+
'<div class="bw-meta">'+
'<div class="bw-nr"><span class="bw-nm">'+c.n+'</span>'+ico.check+'</div>'+
'<div class="bw-stats"><span class="bw-star">'+ico.star+' <span class="bw-sn">'+c.r.toFixed(1)+'</span></span><span>'+c.rev+' \u043E\u0442\u0437\u044B\u0432'+rW(c.rev)+'</span></div>'+
'<div class="bw-exp">\u041E\u043F\u044B\u0442 '+c.exp+'</div>'+
'</div></div>'+
'<div class="bw-skills">'+sk+'</div>'+
'<button class="bw-tog" data-t="'+c.id+'" data-n="'+c.n+'">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 '+ico.cD+'</button>'+
'<div class="bw-det" id="bwd-'+c.id+'">'+
'<div class="bw-dr">'+ico.bld+'<div><span class="bw-dl">\u041E\u0442\u0440\u0430\u0441\u043B\u0438: </span><span class="bw-dv">'+c.ind.join(", ")+'</span></div></div>'+
'<div class="bw-dr">'+ico.brf+'<div><span class="bw-dl">\u0412\u0435\u0434\u0435\u0442: </span><span class="bw-dv">'+c.ent.join(", ")+'</span></div></div>'+
'<div class="bw-dr">'+ico.grd+'<div><span class="bw-dl">\u0423\u0441\u043B\u0443\u0433\u0438: </span><span class="bw-dv">'+c.srv.join(", ")+'</span></div></div>'+
'</div>'+
'<a class="bw-cta" href="'+CTA+'" data-cta="'+c.n+'">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E</a>'+
'</div></div>';
}

function init(){
var el=document.getElementById(CID);if(!el)return;
var s=document.createElement("style");s.textContent=CSS;document.head.appendChild(s);
el.innerHTML=
'<div class="bw-wrap">'+
'<h3 class="bw-h3">\u041F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u044B \u2014 \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443</h3>'+
'<p class="bw-sub">\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440 \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u0442 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E \u0437\u0430 30\u00A0\u043C\u0438\u043D\u0443\u0442. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0430\u0432\u0430\u0442\u044C, \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u044E\u0440\u043B\u0438\u0446\u0430, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u043D\u0430\u043B\u043E\u0433\u0430\u043C, \u041D\u0414\u0421, \u043F\u0430\u0442\u0435\u043D\u0442\u0443 \u0438 \u0434\u0440\u0443\u0433\u0438\u043C \u0432\u0430\u0436\u043D\u044B\u043C \u0442\u0435\u043C\u0430\u043C.</p>'+
'<div class="bw-sl" id="bw-sl">'+D.map(rc).join('')+'</div>'+
'<div class="bw-nav">'+
'<button class="bw-nb" id="bw-p">'+ico.aL+'</button>'+
'<button class="bw-nb" id="bw-n">'+ico.aR+'</button>'+
'</div>'+
'<p class="bw-fn">\u0420\u0435\u043A\u043B\u0430\u043C\u0430 16+</p></div>';

track("impression");

el.addEventListener("click",function(e){
var tog=e.target.closest("[data-t]");
if(tog){
  var id=tog.getAttribute("data-t");var nm=tog.getAttribute("data-n");
  var det=document.getElementById("bwd-"+id);if(!det)return;
  var op=det.classList.toggle("bw-det--vis");
  tog.innerHTML=(op?"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C "+ico.cU:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 "+ico.cD);
  if(op)track("details_click",nm);
  return;
}
var cta=e.target.closest("[data-cta]");
if(cta){track("cta_click",cta.getAttribute("data-cta"));}
});

var sl=document.getElementById("bw-sl");
document.getElementById("bw-p").addEventListener("click",function(){track("scroll","","left");sl.scrollBy({left:-304,behavior:"smooth"});});
document.getElementById("bw-n").addEventListener("click",function(){track("scroll","","right");sl.scrollBy({left:304,behavior:"smooth"});});

console.log("[buh-cards-widget] v"+V+" init");
}

window.__buhCardsTrack=track;
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
