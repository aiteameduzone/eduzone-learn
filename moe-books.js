(()=>{'use strict';
const $=s=>document.querySelector(s);
let lang=localStorage.getItem('ez-hub-lang')||'en',stage='all',rows=[],books=[],open={};
const ar=()=>lang!=='en',tr=(en,formal,egypt)=>lang==='en'?en:lang==='eg'?(egypt||formal):formal;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=n=>ar()?String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]):String(n);
const stages=[['all','All','الكل'],['kg','KG','رياض الأطفال'],['primary','Primary','ابتدائي'],['prep','Preparatory','إعدادي'],['secondary','Secondary','ثانوي'],['baccalaureate','Baccalaureate','بكالوريا']];
/* subjects that already have an interactive EduZone course */
const LIVE={'p4|العلوم':'v3/#/sci/g/p4','p5|العلوم':'v3/#/sci/g/p5','p6|العلوم':'v3/#/sci/g/p6','prep1|العلوم':'v3/#/sci/g/prep1','prep2|العلوم':'v3/#/sci/g/prep2','prep3|العلوم':'v3/#/sci/g/prep3','p4|الرياضيات':'learn/index.html','p5|الرياضيات':'v3/#/mth/g/p5','p6|الرياضيات':'v3/#/mth/g/p6','prep1|الرياضيات':'v3/#/mth/g/prep1','prep2|الرياضيات':'v3/#/mth/g/prep2','prep3|الرياضيات':'v3/#/mth/g/prep3'};
const EDN={en:['English edition','بالإنجليزية'],ar:['Arabic edition','بالعربية'],fr:['French edition','بالفرنسية']};
function subjects(gid){const m={};books.filter(b=>b.g===gid).forEach(b=>{(m[b.s]=m[b.s]||{s:b.s,se:b.se,list:[]}).list.push(b)});return Object.values(m)}
function bookBtn(b){const ed=b.ed?(ar()?EDN[b.ed][1]:EDN[b.ed][0]):tr('Book','الكتاب');const extra=[b.p===1?tr('Part 1','الجزء ١'):b.p===2?tr('Part 2','الجزء ٢'):b.p===0?tr('Parts 1-2','الجزءان ١-٢'):'',b.t==='a'?tr('Assessment book','كتاب التقييمات'):''].filter(Boolean).join(' · ');
return `<a class="bk" href="${esc(b.u)}" target="_blank" rel="noopener noreferrer"><b>${esc(ed)}</b>${extra?`<small>${esc(extra)}</small>`:''}<i><span dir="ltr">PDF${b.mb?' · '+num(b.mb)+' MB':''}</span> ↗</i></a>`}
function setLang(){document.documentElement.dir=ar()?'rtl':'ltr';document.documentElement.lang=ar()?'ar-EG':'en';
$('#langLabel').textContent=tr('Language','اللغة');$('#back').textContent=tr('← Back to learning hub','← الرجوع للمنصة','← ارجع للمنصة');
$('#heading').textContent=tr('All Ministry Textbooks 📚','كل كتب وزارة التربية والتعليم 📚','كل كتب الوزارة 📚');
$('#subheading').textContent=tr('Every subject, every grade: KG1 to Secondary 3 and Baccalaureate. Term 1, 2026-2027.','كل المواد لكل الصفوف من KG1 حتى الثالث الثانوي والبكالوريا. الترم الأول ٢٠٢٦-٢٠٢٧.','كل المواد لكل الصفوف من KG1 لتالتة ثانوي والبكالوريا. الترم الأول ٢٠٢٦-٢٠٢٧.');
$('#warning').innerHTML=tr('<b>286 official books</b> in 15 grades, each opening the PDF directly from the Ministry of Education server. All links checked on 19 Nov 2026. Subjects marked <b>▶ Interactive</b> already have an EduZone course.','<b>٢٨٦ كتابًا رسميًا</b> في ١٥ صفًا، كل رابط يفتح ملف PDF مباشرة من خادم وزارة التربية والتعليم. تم فحص كل الروابط في ١٩ نوفمبر ٢٠٢٦. المواد المعلَّمة بـ <b>▶ تفاعلي</b> لها كورس جاهز على EduZone.','<b>٢٨٦ كتاب رسمي</b> في ١٥ صف، كل رابط بيفتح الـ PDF من سيرفر الوزارة على طول. اتفحصت كل الروابط يوم ١٩ نوفمبر ٢٠٢٦. المواد اللي عليها <b>▶ تفاعلي</b> ليها كورس جاهز على EduZone.');
$('#directTitle').textContent=tr('Already interactive on EduZone Learn','متاح تفاعليًا على EduZone Learn','متاح تفاعلي على EduZone Learn');
$('#directNote').textContent=tr('These subjects have lessons, simulation labs and voiced quizzes built from the Ministry book.','هذه المواد لها دروس ومعامل محاكاة واختبارات بالصوت مبنية على كتاب الوزارة.','المواد دي ليها دروس ومعامل محاكاة واختبارات بالصوت معمولة من كتاب الوزارة.');
$('#foot').textContent=tr('EduZone Learn · Official Ministry PDFs, Term 1 · 2026-2027','EduZone Learn · ملفات الوزارة الرسمية، الترم الأول · ٢٠٢٦-٢٠٢٧');
$('#search').placeholder=tr('Search a subject or grade (e.g. physics, Prep 2)...','ابحث عن مادة أو صف (مثلًا: الفيزياء، الثاني الإعدادي)...','دوّر على مادة أو صف (مثلًا: فيزياء، تانية إعدادي)...');
document.querySelectorAll('[data-lang]').forEach(b=>{b.classList.toggle('active',b.dataset.lang===lang);b.setAttribute('aria-pressed',b.dataset.lang===lang)});render()}
function render(){const q=$('#search').value.trim().toLowerCase();
$('#stages').innerHTML=stages.map(([id,en,an])=>`<button type="button" data-stage="${id}" class="${id===stage?'active':''}">${lang==='en'?en:an}</button>`).join('');
document.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>{stage=b.dataset.stage;render()});
let html='',hits=0;
rows.filter(g=>stage==='all'||g.stage===stage).forEach(g=>{const gm=!q||g.name.toLowerCase().includes(q)||g.ar.includes(q);let subs=subjects(g.id);if(!gm)subs=subs.filter(s=>s.se.toLowerCase().includes(q)||s.s.includes(q));if(!subs.length)return;hits+=subs.length;
const isOpen=open[g.id]||(q&&!gm);
html+=`<article class="shelf-card${isOpen?' open':''}"><button type="button" class="gh" data-g="${g.id}" aria-expanded="${!!isOpen}"><span><span class="pillnote">${esc(g.stage==='baccalaureate'?tr('Baccalaureate pathway','مسار البكالوريا'):tr('National · Term 1','قومي · الترم الأول'))}</span><h3>${esc(ar()?g.ar:g.name)}</h3><small>${num(subs.length)} ${tr('subjects','مادة')} · ${num(subs.reduce((a,s)=>a+s.list.length,0))} ${tr('books','كتاب')}</small></span><span class="chev">${isOpen?'−':'+'}</span></button>`+
(isOpen?`<div class="subs">${subs.map(s=>{const live=LIVE[g.id+'|'+s.s];return `<div class="sub"><div class="sn"><b>${esc(ar()?s.s:s.se)}</b><small>${esc(ar()?s.se:s.s)}</small>${live?`<a class="live" href="${live}">▶ ${tr('Interactive','تفاعلي')}</a>`:''}</div><div class="bks">${s.list.map(bookBtn).join('')}</div></div>`}).join('')}</div>`:'')+`</article>`});
$('#shelf').innerHTML=html||`<p>${tr('No matching subject or grade.','لا توجد مادة أو صف مطابق.')}</p>`;
document.querySelectorAll('.gh').forEach(b=>b.onclick=()=>{open[b.dataset.g]=!open[b.dataset.g];render()});
const L=Object.keys(LIVE);$('#direct').innerHTML=L.map(k=>{const [gid,s]=k.split('|');const g=rows.find(r=>r.id===gid)||{name:gid,ar:gid};const se=(books.find(b=>b.s===s)||{}).se||s;return `<div class="direct-row"><div><strong>${esc(ar()?s:se)} · ${esc(ar()?g.ar:g.name)}</strong></div><a href="${LIVE[k]}">${tr('Open course →','افتح الكورس ←')}</a></div>`}).join('')}
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('ez-hub-lang',lang);setLang()});
$('#search').oninput=render;
Promise.all([fetch('moe/grade-index.json').then(x=>x.json()),fetch('moe/all-books.json').then(x=>x.json())]).then(([g,b])=>{rows=g;books=b;setLang()}).catch(()=>{$('#shelf').textContent='Load this folder via GitHub Pages or a local web server.'});
setLang();})();
