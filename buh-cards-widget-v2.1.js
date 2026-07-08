/* buh-cards-widget v2.1.0 | 2026-03-16 */
(function(){
"use strict";
var V="2.1.0",CID="buh-cards",CTA="#order";

var D=[
{id:1,n:"Елена Петрова",ini:"ЕП",clr:"#E8724A",ph:"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&h=128&fit=crop&crop=face",exp:"12 лет",r:4.9,rev:63,sk:["IT-сфера","Малый бизнес","Услуги"],ind:["Производство","Строительство и ремонт"],ent:["ИП","ООО"],srv:["Работа с первичкой","Сдача отчетности"]},
{id:2,n:"Ольга Кузнецова",ini:"ОК",clr:"#5B8DEF",ph:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop&crop=face",exp:"8 лет",r:4.8,rev:41,sk:["Торговля","ВЭД","Маркетплейсы"],ind:["Розничная торговля","Оптовая торговля"],ent:["ООО","АО"],srv:["Ведение учёта","Налоговое планирование"]},
{id:3,n:"Наталья Смирнова",ini:"НС",clr:"#27AE60",ph:"https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=128&h=128&fit=crop&crop=face",exp:"15 лет",r:5.0,rev:87,sk:["ОСНО","НДС","Аудит"],ind:["Логистика","Транспорт"],ent:["ИП","ООО","АО"],srv:["Восстановление учёта","Сдача отчетности","Консультации"]},
{id:4,n:"Ирина Волкова",ini:"ИВ",clr:"#9B59B6",ph:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=128&h=128&fit=crop&crop=face",exp:"10 лет",r:4.7,rev:34,sk:["Строительство","Госзакупки","Сметы"],ind:["Строительство","Проектирование"],ent:["ООО"],srv:["Работа с первичкой","Ведение учёта"]},
{id:5,n:"Татьяна Лебедева",ini:"ТЛ",clr:"#E67E22",ph:"https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=128&h=128&fit=crop&crop=face",exp:"7 лет",r:4.9,rev:52,sk:["Маркетплейсы","E-commerce","Блогеры"],ind:["Интернет-торговля","Реклама и маркетинг"],ent:["ИП","Самозанятые"],srv:["Сдача отчетности","Налоговое планирование","Консультации"]}
];

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

function rW(n){var m=n%10,m2=n%100;if(m2>=11&&m2<=14)return"ов";if(m===1)return"";if(m>=2&&m<=4)return"а";return"ов";}

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
.bw-ava{width:56px;height:56px;min-width:56px;min-height:56px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;font-weight:700;overflow:hidden;border:2px solid rgba(249,115,22,.3)}\
.bw-ava img{width:100%;height:100%;object-fit:cover;display:block}\
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
var ava=c.ph?'<img src="'+c.ph+'" alt="'+c.n+'" loading="lazy"/>':c.ini;
return '<div class="bw-card"><div class="bw-cm">'+
'<div class="bw-top">'+
'<div class="bw-ava" style="background:'+c.clr+'">'+ava+'</div>'+
'<div class="bw-meta">'+
'<div class="bw-nr"><span class="bw-nm">'+c.n+'</span>'+ico.check+'</div>'+
'<div class="bw-stats"><span class="bw-star">'+ico.star+' <span class="bw-sn">'+c.r.toFixed(1)+'</span></span><span>'+c.rev+' отзыв'+rW(c.rev)+'</span></div>'+
'<div class="bw-exp">Опыт '+c.exp+'</div>'+
'</div></div>'+
'<div class="bw-skills">'+sk+'</div>'+
'<button class="bw-tog" data-t="'+c.id+'">Подробнее '+ico.cD+'</button>'+
'<div class="bw-det" id="bwd-'+c.id+'">'+
'<div class="bw-dr">'+ico.bld+'<div><span class="bw-dl">Отрасли: </span><span class="bw-dv">'+c.ind.join(", ")+'</span></div></div>'+
'<div class="bw-dr">'+ico.brf+'<div><span class="bw-dl">Ведет: </span><span class="bw-dv">'+c.ent.join(", ")+'</span></div></div>'+
'<div class="bw-dr">'+ico.grd+'<div><span class="bw-dl">Услуги: </span><span class="bw-dv">'+c.srv.join(", ")+'</span></div></div>'+
'</div>'+
'<a class="bw-cta" href="'+CTA+'">Записаться на бесплатную консультацию</a>'+
'</div></div>';
}

function init(){
var el=document.getElementById(CID);if(!el)return;
var s=document.createElement("style");s.textContent=CSS;document.head.appendChild(s);
el.innerHTML=
'<div class="bw-wrap">'+
'<h3 class="bw-h3">Проверенные бухгалтеры \u2014 готовы начать работу</h3>'+
'<p class="bw-sub">Специалисты со стажем от 3 лет. Проведите бесплатную встречу: задайте вопросы, расскажите о специфике бизнеса и текущих задачах \u2014 узнайте всё, что поможет принять решение о работе с бухгалтером.</p>'+
'<div class="bw-sl" id="bw-sl">'+D.map(rc).join('')+'</div>'+
'<div class="bw-nav">'+
'<button class="bw-nb" id="bw-p">'+ico.aL+'</button>'+
'<button class="bw-nb" id="bw-n">'+ico.aR+'</button>'+
'</div>'+
'<p class="bw-fn">Реклама 16+</p></div>';

el.addEventListener("click",function(e){
var btn=e.target.closest("[data-t]");if(!btn)return;
var id=btn.getAttribute("data-t");
var det=document.getElementById("bwd-"+id);if(!det)return;
var op=det.classList.toggle("bw-det--vis");
btn.innerHTML=(op?"Свернуть "+ico.cU:"Подробнее "+ico.cD);
});
var sl=document.getElementById("bw-sl");
document.getElementById("bw-p").addEventListener("click",function(){sl.scrollBy({left:-304,behavior:"smooth"});});
document.getElementById("bw-n").addEventListener("click",function(){sl.scrollBy({left:304,behavior:"smooth"});});
console.log("[buh-cards-widget] v"+V+" init");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
else init();
})();
