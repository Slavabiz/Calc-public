/**
 * InsuranceCalcWidget v3.0.0 — лид-магнит калькулятор страховых взносов
 * Zero dependencies. Все стили с префиксом .ic- для изоляции.
 *
 * Встройка:
 *   <div id="insurance-calc"></div>
 *   <script src="insurance-calc-widget-v3.js"></script>
 *
 * Аналитика встроена: события отправляются в Google Sheets.
 * Для смены URL аналитики — data-analytics-url на теге <script>.
 */
;(function(){
"use strict";

var V="3.3.0";
var YP={2025:{lim:2759000,mrot:22440},2026:{lim:2979000,mrot:27093}};
var HR={"3.1":2,"3.2":4,"3.3":6,"3.4":7,"4":8};
var CATS=[
  {v:"general",l:"Общий тариф",g:"Общие"},
  {v:"sme_privileged",l:"МСП — приоритетные отрасли",g:"МСП"},
  {v:"sme_manufacture",l:"МСП — обрабатывающие производства",g:"МСП"},
  {v:"sme_no_privilege",l:"МСП — без льготы",g:"МСП"},
  {v:"it",l:"IT-компания",g:"IT / Технологии"},
  {v:"radioelectronics",l:"Радиоэлектроника",g:"IT / Технологии"},
  {v:"skolkovo",l:"«Сколково» / ИНТЦ",g:"Инновации"},
  {v:"nko_usn",l:"НКО на УСН",g:"НКО"},
  {v:"charity_usn",l:"Благотворительная на УСН",g:"НКО"},
  {v:"sez",l:"Участник СЭЗ",g:"ОЭЗ / ТОСЭР"},
  {v:"toser",l:"Резидент ТОСЭР / СПВ",g:"ОЭЗ / ТОСЭР"},
  {v:"oez_kaliningrad",l:"ОЭЗ Калининград",g:"ОЭЗ / ТОСЭР"}
];
var MON=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

// ─── Defaults (frozen state) ───
var DEF={yr:2026,cat:"general",injR:"0.2",sal:"85 000",mon:"1",ct:"labor"};

// ─── Analytics ───
var ANALYTICS_URL="https://script.google.com/macros/s/AKfycbxYDPqhnW4axB2HWm6F5w7j_cSJ_szswDqbs4iarkHzX2JnyQFzy1R5_G1ll0bO6M5X/exec";
var ANALYTICS_TOKEN=null;

function trackEvent(eventName,data){
  var payload={
    event:eventName,
    timestamp:new Date().toISOString(),
    url:window.location.href,
    salary:data&&data.salary||null,
    category:data&&data.category||null,
    year:data&&data.year||null,
    total:data&&data.total||null,
    type:data&&(data.type||data.contract)||null
  };
  if(!ANALYTICS_URL)return;
  var url=ANALYTICS_URL+(ANALYTICS_TOKEN?"?token="+encodeURIComponent(ANALYTICS_TOKEN):"");
  var body=JSON.stringify(payload);
  try{
    navigator.sendBeacon?navigator.sendBeacon(url,body):
      fetch(url,{method:"POST",mode:"no-cors",body:body}).catch(function(){});
  }catch(e){}
}

// ─── Calc engine ───
function calc(yr,cat,sal,cum,injR,ct){
  var p={lim:YP[yr].lim,mrot:YP[yr].mrot};
  var lim=p.lim,aft=cum+sal;
  var wB=aft<=lim?sal:(cum>=lim?0:lim-cum),aB=sal-wB;
  var u=0,ln=[];
  var ec=cat;
  if(cat==="sme_no_privilege"&&yr>=2026)ec="general";
  function ad(l,b,r){var a=b*r/100;ln.push({l:l,a:a});return a;}
  if(ec==="general"){u+=ad("До базы × 30%",wB,30);if(aB>0)u+=ad("Сверх базы × 15,1%",aB,15.1);}
  else if(ec==="it"||ec==="radioelectronics"){
    if(yr===2025){u+=ad("Единый 7,6%",sal,7.6);}
    else{u+=ad("До базы × 15%",wB,15);if(aB>0)u+=ad("Сверх базы × 7,6%",aB,7.6);}
  }
  else{u+=ad("До базы × 7,6%",wB,7.6);if(aB>0)u+=ad("Сверх базы × 0%",aB,0);}
  var inj=ct==="gpc"?0:sal*injR/100;
  return{u:u,inj:inj,ha:0,tot:u+inj,ln:ln};
}
function fmt(n){return n.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})+" ₽";}
function pNum(v){return parseInt(String(v).replace(/\s/g,""),10)||0;}

// ─── CSS ───
var CSS='\
.ic-root{font-family:"Golos Text",system-ui,-apple-system,sans-serif;color:#1f2937;line-height:1.5;max-width:560px;box-sizing:border-box;}\
.ic-root *,.ic-root *::before,.ic-root *::after{box-sizing:border-box;margin:0;padding:0;}\
.ic-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 1px 4px rgba(0,0,0,.06);overflow:hidden;}\
.ic-hdr{padding:24px 24px 16px;}\
.ic-hdr-row{display:flex;align-items:flex-start;gap:12px;}\
.ic-icon{width:36px;height:36px;border-radius:10px;background:#fff3e0;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}\
.ic-hdr h3{font-size:17px;font-weight:700;margin:0;}\
.ic-hdr p{font-size:13px;color:#6b7280;margin-top:6px;margin-left:48px;line-height:1.45;}\
.ic-yr{display:flex;gap:4px;margin:10px 0 0 48px;}\
.ic-yr button{font-family:inherit;font-size:12px;font-weight:600;padding:3px 14px;border-radius:6px;cursor:default;transition:all .15s;}\
.ic-yr .on{border:1.5px solid #e8590c;background:#fff3e0;color:#c2410c;}\
.ic-yr .off{border:1.5px solid #e5e7eb;background:transparent;color:#6b7280;}\
.ic-body{padding:0 24px 8px;}\
.ic-sec{font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1px;margin:20px 0 10px;}\
.ic-g2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}\
@media(max-width:480px){.ic-g2{grid-template-columns:1fr;}}\
.ic-f label{display:block;font-size:13px;font-weight:500;color:#1f2937;margin-bottom:4px;}\
.ic-root input[type=text],.ic-root select{font-family:inherit;font-size:15px;width:100%;padding:8px 12px;border:1px solid #e5e7eb;border-radius:8px;background:#fff;color:#1f2937;outline:none;}\
.ic-root select{cursor:default;appearance:none;-webkit-appearance:none;\
background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2.5\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E");\
background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}\
.ic-frozen{position:relative;}\
.ic-frozen-inner{pointer-events:none;opacity:.55;user-select:none;}\
.ic-frozen-overlay{position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;z-index:2;}\
.ic-blur-zone{position:relative;margin-top:4px;max-height:80px;overflow:hidden;}\
.ic-blur-inner{filter:blur(3px);opacity:.5;user-select:none;pointer-events:none;}\
.ic-blur-fade{position:absolute;bottom:0;left:0;right:0;height:60%;background:linear-gradient(to bottom,rgba(255,255,255,0) 0%,rgba(255,255,255,.85) 60%,rgba(255,255,255,1) 100%);pointer-events:none;}\
.ic-blur-click{position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;z-index:2;}\
.ic-ct{display:flex;align-items:center;gap:8px;margin-top:12px;}\
.ic-ct>span{font-size:13px;font-weight:500;}\
.ic-ct button{font-family:inherit;font-size:13px;font-weight:600;padding:5px 18px;border-radius:20px;cursor:default;transition:all .15s;}\
.ic-ct .on{border:2px solid #e8590c;background:#e8590c;color:#fff;}\
.ic-ct .off{border:1.5px solid #e5e7eb;background:transparent;color:#6b7280;}\
.ic-extra-btn{font-family:inherit;font-size:13px;font-weight:500;color:#6b7280;background:none;border:none;cursor:default;display:flex;align-items:center;gap:6px;margin-top:16px;padding:0;}\
.ic-btn-wrap{padding:16px 24px 20px;}\
.ic-btn{font-family:inherit;font-size:14px;font-weight:600;width:100%;padding:10px 0;border:none;border-radius:8px;cursor:pointer;background:#1f2937;color:#fff;transition:opacity .15s;}\
.ic-btn:hover{opacity:.9;}\
.ic-res{margin:16px 24px 8px;border-radius:12px;background:#f7f8fa;padding:16px;}\
.ic-rl{display:flex;justify-content:space-between;align-items:center;padding:5px 0;font-size:14px;}\
.ic-rl .k{color:#6b7280;}\
.ic-rl .v{font-weight:600;font-variant-numeric:tabular-nums;}\
.ic-tot{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:10px;border-top:1px solid #e5e7eb;}\
.ic-tot .k{font-weight:700;font-size:15px;}\
.ic-tot .v{font-weight:700;font-size:20px;color:#e8590c;font-variant-numeric:tabular-nums;}\
.ic-edit{font-family:inherit;font-size:12px;color:#6b7280;cursor:pointer;margin-top:8px;text-decoration:underline;text-underline-offset:2px;background:none;border:none;padding:0;}\
.ic-edit:hover{color:#1f2937;}\
.ic-cta{margin:16px 24px;border-radius:12px;padding:20px;background:hsl(340,66%,24%);}\
.ic-cta p{font-size:13px;color:rgba(255,255,255,.9);line-height:1.5;margin-bottom:12px;}\
.ic-cta a{display:inline-flex;align-items:center;gap:8px;font-family:inherit;font-size:13px;font-weight:700;padding:10px 20px;border-radius:8px;border:none;background:hsl(20,97%,59%);color:#fff;text-decoration:none;cursor:pointer;}\
.ic-cta a:hover{opacity:.92;}\
.ic-foot{text-align:right;padding:0 24px 12px;font-size:10px;color:#d1d5db;}\
@keyframes ic-fadeIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\
.ic-anim{animation:ic-fadeIn .35s ease-out;}\
';

// ─── Render ───
function render(root,S){
  root.innerHTML="";

  // Inject font
  if(!document.getElementById("ic-font-link")){
    var lk=document.createElement("link");lk.id="ic-font-link";lk.rel="stylesheet";
    lk.href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap";
    document.head.appendChild(lk);
  }
  // Inject styles
  if(!document.getElementById("ic-widget-style-v3")){
    var st=document.createElement("style");st.id="ic-widget-style-v3";st.textContent=CSS;
    document.head.appendChild(st);
  }

  var w=document.createElement("div");w.className="ic-root";
  var card=document.createElement("div");card.className="ic-card";

  // ── Header ──
  card.innerHTML='\
<div class="ic-hdr">\
  <div class="ic-hdr-row">\
    <div class="ic-icon">📋</div>\
    <h3>Рассчитайте взносы за сотрудника</h3>\
  </div>\
  <p>Сколько вы переплачиваете при расчёте зарплаты вручную? Часто бухгалтеры допускают ошибки в расчёте вычетов. Проверьте свои цифры в Контур.Экстерне за пару минут.</p>\
  <div class="ic-yr" id="ic-yr"></div>\
</div>\
<div class="ic-body" id="ic-body"></div>\
<div id="ic-result-area"></div>\
<div class="ic-foot">v'+V+'</div>';

  w.appendChild(card);
  root.appendChild(w);

  // ── Year pills (frozen) ──
  var yrDiv=card.querySelector("#ic-yr");
  [2025,2026].forEach(function(y){
    var fr=document.createElement("div");fr.className="ic-frozen";fr.style.display="inline-block";
    var inner=document.createElement("div");inner.className="ic-frozen-inner";
    var b=document.createElement("button");
    b.textContent=y;b.className=DEF.yr===y?"on":"off";
    inner.appendChild(b);fr.appendChild(inner);
    var ov=document.createElement("div");ov.className="ic-frozen-overlay";
    ov.onclick=function(){trackEvent("КЛИК",{type:"year_select",year:y});};
    fr.appendChild(ov);yrDiv.appendChild(fr);
  });

  var body=card.querySelector("#ic-body");
  var resArea=card.querySelector("#ic-result-area");

  // ── Работодатель (frozen) ──
  body.innerHTML='<div class="ic-sec">Работодатель</div>';
  var g1=document.createElement("div");g1.className="ic-g2";

  // Category (frozen)
  var cf=document.createElement("div");cf.className="ic-frozen";
  var cfInner=document.createElement("div");cfInner.className="ic-frozen-inner";
  cfInner.innerHTML='<label>Категория плательщика</label>';
  var cs=document.createElement("select");
  var lg="";
  CATS.forEach(function(c){
    if(c.g!==lg){var og=document.createElement("optgroup");og.label=c.g;cs.appendChild(og);lg=c.g;}
    var o=document.createElement("option");o.value=c.v;o.textContent=c.l;
    if(c.v===DEF.cat)o.selected=true;
    cs.lastChild.appendChild(o);
  });
  cfInner.appendChild(cs);cf.appendChild(cfInner);
  var cfOv=document.createElement("div");cfOv.className="ic-frozen-overlay";
  cfOv.onclick=function(){trackEvent("КЛИК",{type:"category_select",category:DEF.cat});};
  cf.appendChild(cfOv);g1.appendChild(cf);

  // Injury rate (frozen)
  var injf=document.createElement("div");injf.className="ic-frozen";
  var injInner=document.createElement("div");injInner.className="ic-frozen-inner";
  injInner.innerHTML='<label>Тариф на травматизм, %</label>';
  var iinp=document.createElement("input");iinp.type="text";iinp.value=DEF.injR;iinp.readOnly=true;
  injInner.appendChild(iinp);injf.appendChild(injInner);
  var injOv=document.createElement("div");injOv.className="ic-frozen-overlay";
  injOv.onclick=function(){trackEvent("КЛИК",{type:"injury_rate_input",value:DEF.injR});};
  injf.appendChild(injOv);g1.appendChild(injf);
  body.appendChild(g1);

  // ── Сотрудник (frozen, visible) ──
  var sec2=document.createElement("div");sec2.className="ic-sec";sec2.textContent="Сотрудник";
  body.appendChild(sec2);

  var g2=document.createElement("div");g2.className="ic-g2";

  // Salary (frozen)
  var sf=document.createElement("div");sf.className="ic-frozen";
  var sfInner=document.createElement("div");sfInner.className="ic-frozen-inner";
  sfInner.innerHTML='<label>Зарплата за месяц, ₽</label>';
  var si=document.createElement("input");si.type="text";si.value=DEF.sal;si.readOnly=true;
  sfInner.appendChild(si);sf.appendChild(sfInner);
  var sfOv=document.createElement("div");sfOv.className="ic-frozen-overlay";
  sfOv.onclick=function(){trackEvent("КЛИК",{type:"salary_input",salary:DEF.sal});};
  sf.appendChild(sfOv);g2.appendChild(sf);

  // Month (frozen)
  var mf=document.createElement("div");mf.className="ic-frozen";
  var mfInner=document.createElement("div");mfInner.className="ic-frozen-inner";
  mfInner.innerHTML='<label>Месяц расчёта</label>';
  var ms2=document.createElement("select");
  MON.forEach(function(m,i){
    var o=document.createElement("option");o.value=String(i+1);o.textContent=m;
    if(String(i+1)===DEF.mon)o.selected=true;
    ms2.appendChild(o);
  });
  mfInner.appendChild(ms2);mf.appendChild(mfInner);
  var mfOv=document.createElement("div");mfOv.className="ic-frozen-overlay";
  mfOv.onclick=function(){trackEvent("КЛИК",{type:"month_select"});};
  mf.appendChild(mfOv);g2.appendChild(mf);
  body.appendChild(g2);

  // Contract type (frozen)
  var ctDiv=document.createElement("div");ctDiv.className="ic-ct";
  ctDiv.innerHTML='<span>Вид договора:</span>';
  ["labor","gpc"].forEach(function(t){
    var fr=document.createElement("div");fr.className="ic-frozen";fr.style.display="inline-block";
    var inner=document.createElement("div");inner.className="ic-frozen-inner";
    var b=document.createElement("button");
    b.textContent=t==="labor"?"Трудовой":"ГПХ";
    b.className=DEF.ct===t?"on":"off";
    inner.appendChild(b);fr.appendChild(inner);
    var ov=document.createElement("div");ov.className="ic-frozen-overlay";
    ov.onclick=function(){trackEvent("КЛИК",{type:"contract_type",contract:t});};
    fr.appendChild(ov);ctDiv.appendChild(fr);
  });
  body.appendChild(ctDiv);

  // Extra toggle (frozen)
  var exFr=document.createElement("div");exFr.className="ic-frozen";
  var exInner=document.createElement("div");exInner.className="ic-frozen-inner";
  var exBtn=document.createElement("button");exBtn.className="ic-extra-btn";
  exBtn.innerHTML='<span style="font-size:10px">▼</span> Дополнительно';
  exInner.appendChild(exBtn);exFr.appendChild(exInner);
  var exOv=document.createElement("div");exOv.className="ic-frozen-overlay";
  exOv.onclick=function(){trackEvent("КЛИК",{type:"extra_options_toggle"});};
  exFr.appendChild(exOv);body.appendChild(exFr);

  // ── Button — leads to external link ──
  var bw=document.createElement("div");bw.className="ic-btn-wrap";
  var btnLink=document.createElement("a");
  btnLink.href="https://www.kontur-extern.ru/registration3?utm_source=promik&utm_medium=organic&utm_campaign=calc_slav";
  btnLink.target="_blank";btnLink.rel="noopener noreferrer";
  btnLink.className="ic-btn";
  btnLink.style.cssText="display:block;text-align:center;text-decoration:none;color:#fff;";
  btnLink.textContent="Рассчитать";
  btnLink.onclick=function(){
    var salNum=pNum(DEF.sal);
    trackEvent("Рассчитать",{salary:salNum,year:DEF.yr,category:DEF.cat});
  };
  bw.appendChild(btnLink);
  resArea.appendChild(bw);
}

// ─── Init ───
function init(){
  // Read analytics URL from script tag if present
  var scripts=document.querySelectorAll("script[src*='insurance-calc']");
  if(scripts.length){
    var tag=scripts[scripts.length-1];
    if(tag.getAttribute("data-analytics-url"))ANALYTICS_URL=tag.getAttribute("data-analytics-url");
    if(tag.getAttribute("data-analytics-token"))ANALYTICS_TOKEN=tag.getAttribute("data-analytics-token");
  }

  var tid="insurance-calc";
  if(scripts.length){tid=scripts[scripts.length-1].getAttribute("data-target")||tid;}
  var el=document.getElementById(tid);
  if(!el){console.warn("[InsuranceCalcWidget v3] #"+tid+" not found");return;}

  var state={};
  render(el,state);
}

if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",init);}
else{init();}

})();
