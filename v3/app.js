/* EduZone Learn v3 - app shell: router, home, topics, skill page (Learn / Try it / Practise), practice mix */
(function () {
  "use strict";
  var E = EZ3, t = E.t, n = E.n, esc = E.esc;
  var SKILLS = [], BY = {}, view = null;

  /* ---------- UI words ---------- */
  var W = {
    home: ["Home", "الرئيسية", "الرئيسية"], topics: ["Topics", "الموضوعات", "المواضيع"], mix: ["Practice mix", "تدريب منوّع", "تمرين متنوع"], more: ["More", "المزيد", "كمان"],
    learn: ["Learn", "تعلّم", "اتعلم"], tryit: ["Try it", "جرّب", "جرّب"], practise: ["Practise", "تدرّب", "اتمرّن"],
    brandSub: ["British Year 4 · Maths", "رياضيات · السنة الرابعة البريطانية", "رياضيات · رابعة بريطاني"],
    heroT: ["Learn it. Try it. Practise it.", "تعلّم. جرّب. تدرّب.", "اتعلم. جرّب. اتمرّن."],
    heroP: ["Grade 4 maths, organised the way your curriculum teaches it. Every skill has a short explanation, a hands-on tool and unlimited practice with instant feedback.", "رياضيات الصف الرابع مرتبة حسب منهجك. لكل مهارة شرح قصير وأداة تفاعلية وتدريب غير محدود مع تصحيح فوري.", "رياضيات رابعة مترتبة على حسب منهجك. كل مهارة ليها شرح بسيط وأداة تلعب بيها وتمارين كتير بتتصحح على طول."],
    start: ["▶ Start learning", "▶ ابدأ التعلّم", "▶ يلا نبدأ"], cont: ["▶ Continue", "▶ تابع", "▶ كمّل"],
    stars: ["stars", "نجمة", "نجمة"], mastered: ["skills mastered", "مهارة متقنة", "مهارة خلصتها"], goals: ["tool goals", "هدف في الأدوات", "هدف في الأدوات"],
    mission: ["Today's mission", "مهمة اليوم", "مهمة النهارده"], missionSub: ["Three skills picked for you. Finish each step to earn stars.", "ثلاث مهارات اخترناها لك. أكمل كل خطوة لتجمع النجوم.", "٣ مهارات اخترناهم ليك. خلّص كل خطوة وخد نجوم."],
    nextStep: ["Next step", "الخطوة التالية", "الخطوة الجاية"], allTopics: ["All topics", "كل الموضوعات", "كل المواضيع"], topicsSub: ["Pick a topic, then a skill.", "اختر موضوعًا ثم مهارة.", "اختار موضوع وبعدين مهارة."],
    moreT: ["More to explore", "المزيد للاستكشاف", "حاجات تانية تستكشفها"],
    fullLessons: ["Full Grade 4 lessons", "دروس الصف الرابع الكاملة", "دروس رابعة كاملة"], fullLessonsSub: ["51 guided lessons with voice", "٥١ درسًا موجّهًا بالصوت", "٥١ درس بالصوت"],
    science: ["Grade 4 Science", "علوم الصف الرابع", "علوم رابعة"], scienceSub: ["Desert animals and adaptation", "حيوانات الصحراء والتكيف", "حيوانات الصحرا والتكيف"],
    labs: ["STEM labs", "معامل STEM", "معامل STEM"], labsSub: ["Circuits, floating, pyramids, pH", "الدوائر والطفو والأهرامات والحموضة", "الكهربا والطفو والأهرامات والحموضة"],
    studio: ["Math Discovery Studio", "استوديو استكشاف الرياضيات", "استوديو الرياضيات"], studioSub: ["The 8 original hands-on games", "الألعاب التفاعلية الثماني الأصلية", "الـ٨ ألعاب الأصلية"],
    oldHome: ["Previous version", "النسخة السابقة", "النسخة القديمة"], oldHomeSub: ["The earlier EduZone Learn home", "الصفحة الرئيسية السابقة", "الصفحة القديمة"],
    search: ["Search skills…", "ابحث عن مهارة…", "دوّر على مهارة…"], all: ["All", "الكل", "الكل"], term: ["Term", "الفصل", "الترم"],
    skills: ["skills", "مهارات", "مهارات"], fullLesson: ["Full lesson", "درس كامل", "درس كامل"],
    bigIdea: ["The big idea", "الفكرة الأساسية", "الفكرة ببساطة"], listen: ["🔊 Listen", "🔊 استمع", "🔊 اسمع"],
    example: ["Worked example", "مثال محلول", "مثال محلول"], showSteps: ["Show the steps", "اعرض الخطوات", "ورّيني الخطوات"], another: ["Another example ↻", "مثال آخر ↻", "مثال تاني ↻"],
    answer: ["Answer", "الإجابة", "الإجابة"], quick: ["Quick check", "تحقّق سريع", "سؤال سريع"],
    your3: ["Your 3 steps", "خطواتك الثلاث", "خطواتك التلاتة"],
    s1: ["Read the idea and the example.", "اقرأ الفكرة والمثال.", "اقرا الفكرة والمثال."], s2: ["Reach a goal with the hands-on tool.", "حقّق هدفًا باستخدام الأداة التفاعلية.", "حقّق هدف بالأداة."], s3: ["Answer 5 questions to earn up to 3 stars.", "أجب عن ٥ أسئلة لتحصل على ٣ نجوم.", "جاوب ٥ أسئلة وخد لحد ٣ نجوم."],
    openLesson: ["Open the full lesson →", "افتح الدرس الكامل ←", "افتح الدرس الكامل ←"],
    goTry: ["Next: Try it →", "التالي: جرّب ←", "اللي بعده: جرّب ←"], goPractise: ["Next: Practise →", "التالي: تدرّب ←", "اللي بعده: اتمرّن ←"],
    tryHint: ["Reach the goal, then press “New goal” for another challenge.", "حقّق الهدف، ثم اضغط «هدف جديد» لتحدٍّ آخر.", "خلّص الهدف ودوس «هدف جديد» عشان تحدي تاني."],
    q: ["Question", "السؤال", "سؤال"], of: ["of", "من", "من"], check: ["Check", "تحقّق", "صحّح"], hint: ["💡 Hint", "💡 تلميح", "💡 مساعدة"], next: ["Next →", "التالي ←", "اللي بعده ←"],
    right: ["Correct! ⭐", "إجابة صحيحة! ⭐", "صح! عاش ⭐"], tryAgain: ["Not quite - try once more.", "ليست صحيحة - حاول مرة أخرى.", "لسه - جرّب تاني."],
    theAnswer: ["The answer is", "الإجابة الصحيحة", "الإجابة الصح"], typeAnswer: ["Type your answer", "اكتب إجابتك", "اكتب إجابتك"],
    done: ["Round complete!", "انتهت الجولة!", "خلصت الجولة!"], again: ["Practise again ↻", "تدرّب مرة أخرى ↻", "اتمرّن تاني ↻"], nextSkill: ["Next skill →", "المهارة التالية ←", "المهارة اللي بعدها ←"],
    backTopic: ["Back to topic", "العودة إلى الموضوع", "ارجع للموضوع"], best: ["Best", "الأفضل", "أحسن نتيجة"],
    mixT: ["Practice mix", "تدريب منوّع", "تمرين متنوع"], mixP: ["10 questions from the skills you have started. Great for revision.", "١٠ أسئلة من المهارات التي بدأتها. مناسب للمراجعة.", "١٠ أسئلة من المهارات اللي بدأتها. حلو للمراجعة."],
    prev: ["← Previous", "→ السابق", "→ اللي قبله"], nextS: ["Next →", "التالي ←", "اللي بعده ←"],
    note: ["Skills follow a British Division Year 4 long-term plan; practice materials, not official exam content.", "المهارات مبنية على خطة السنة الرابعة لقسم بريطاني؛ مواد تدريبية وليست امتحانات رسمية.", "المهارات ماشية على خطة رابعة بريطاني؛ دي تمارين مش امتحانات رسمية."],
    loadErr: ["Could not load the skills. Open this page from the website (not from a file).", "تعذّر تحميل المهارات. افتح الصفحة من الموقع وليس من ملف.", "مش قادرين نحمّل المهارات. افتح الصفحة من الموقع."],
    reset: ["Reset my progress", "مسح تقدّمي", "امسح تقدّمي"], resetQ: ["Clear all stars and progress on this device?", "مسح كل النجوم والتقدّم على هذا الجهاز؟", "تمسح كل النجوم والتقدّم على الجهاز ده؟"],
    voice: ["Voice", "الصوت", "الصوت"], lessons: ["lessons", "دروس", "دروس"], soon: ["Coming soon", "قريبًا", "قريب"], learned: ["Learn ✓", "تعلّم ✓", "اتعلم ✓"], mode: ["Mode", "النمط", "النوع"]
  };
  function w(k) { var x = W[k]; return x ? t(x[0], x[1], x[2]) : k; }

  /* ---------- progress (this device only) ---------- */
  var prog = E.store.get("ez3_progress", null) || { stars: {}, goals: {}, learned: {}, answered: 0, correct: 0, last: null };
  function save() { E.store.set("ez3_progress", prog); }
  function stars(id) { return prog.stars[id] || 0; }
  function totalStars() { return SKILLS.reduce(function (a, s) { return a + stars(s.id); }, 0); }
  function masteredCount(list) { return (list || SKILLS).filter(function (s) { return stars(s.id) >= 3; }).length; }
  function starHTML(k) { var h = ""; for (var i = 0; i < 3; i++) h += i < k ? "⭐" : '<span class="off">⭐</span>'; return '<span class="stars" aria-label="' + k + '/3">' + h + "</span>"; }
  function nextStepOf(s) {
    if (!prog.learned[s.id]) return "learn";
    if (!prog.goals[s.id]) return "try";
    return "practice";
  }

  /* ---------- helpers ---------- */
  function soft(c) { return "background:var(--" + c.color + "-soft)"; }

  /* ---------- curriculum (British / American / National) ---------- */
  var CUR = E.store.get("ez3_cur", "british");
  if (!E.CURRICULA[CUR]) CUR = "british";
  var GROUPS = [], ORDER = [], GOF = {}, NATUNIT = {};
  function buildGroups() {
    GROUPS = E.groupsFor(CUR, SKILLS); ORDER = []; GOF = {};
    GROUPS.forEach(function (g) { g.skills.forEach(function (s) { if (!GOF[s.id]) { GOF[s.id] = g; ORDER.push(s); } }); });
    NATUNIT = {};
    E.groupsFor("national", SKILLS).forEach(function (g) { if (g.unit) g.skills.forEach(function (s) { NATUNIT[s.id] = g.unit; }); });
  }
  function setCur(c) { CUR = c; E.store.set("ez3_cur", c); viewTopics.term = 0; buildGroups(); }
  function grp(id) { return GROUPS.filter(function (g) { return g.id === id; })[0] || null; }
  function gOf(s) { return GOF[s.id] || GROUPS[0]; }
  function gTitle(g) { return (g.num ? t("Unit ", "الوحدة ") + n(g.num) + " · " : "") + E.L(g.title); }
  // short curriculum label for a skill: British "Term 2", American "4.NBT.A.3", National "Unit 1 · Term 1"
  function labelOf(s) {
    var g = gOf(s);
    if (CUR === "british") return w("term") + " " + n(s.term);
    if (g.extra) return t("Extra practice", "تدريب إضافي");
    if (CUR === "american") { var m = g.meta[s.id] || {}; return E.d(m.code) + (m.review ? " · " + t("Grade 3 review", "مراجعة الصف الثالث") : ""); }
    return t("Unit ", "الوحدة ") + n(g.num) + " · " + w("term") + " " + n(g.term);
  }
  function termOf(s) { return CUR === "british" ? s.term : (gOf(s).term || 0); }
  // full guided lesson for a skill (Egyptian unit when mapped, else the British map's link)
  function unitOf(s) { var u = NATUNIT[s.id] || s.unit; return u && E.lessonCount(u) ? u : ""; }
  function href(s, tab) { return "#/s/" + s.id + "/" + (tab || nextStepOf(s)); }
  function plain(html) { var d = document.createElement("div"); d.innerHTML = html; return d.textContent; }
  function ring(pct) {
    var r = 52, c = 2 * Math.PI * r;
    return '<svg class="ring" viewBox="0 0 130 130" role="img" aria-label="' + Math.round(pct * 100) + '%"><circle cx="65" cy="65" r="' + r + '" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="12"/>' +
      '<circle cx="65" cy="65" r="' + r + '" fill="none" stroke="#ffb703" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + (c * pct).toFixed(1) + " " + c.toFixed(1) + '" transform="rotate(-90 65 65)"/>' +
      '<text x="65" y="72" text-anchor="middle" fill="#fff" font-size="26" font-weight="900" font-family="Nunito,Cairo,sans-serif">' + E.d(Math.round(pct * 100)) + "%</text></svg>";
  }

  /* ---------- shell ---------- */
  function shell() {
    document.body.innerHTML =
      '<header class="top"><div class="top-in">' +
      '<a class="brand" href="#/"><img src="ez-icon.png" alt="EduZone"><span><b>EduZone <span>Learn</span></b><small id="bsub"></small></span></a>' +
      '<nav class="nav" id="nav"></nav>' +
      '<div class="top-tools"><select class="lang cur" id="cur"></select>' +
      '<select class="lang" id="lang" aria-label="Language"><option value="en">English</option><option value="ar">العربية</option></select>' +
      '<button class="icon-btn" id="voice" type="button"></button></div>' +
      '</div></header><main class="page" id="view"></main><footer class="foot" id="foot"></footer><nav class="bnav" id="bnav"></nav>';
    if (E.lang === "eg") E.setLang("ar");
    var sel = document.getElementById("lang");
    sel.value = E.lang;
    sel.onchange = function () { E.setLang(sel.value); route(); };
    var cs = document.getElementById("cur");
    cs.onchange = function () {
      setCur(cs.value);
      var h = location.hash;
      if (/^#\/c\//.test(h)) location.hash = "#/topics"; else route();
    };
    var vb = document.getElementById("voice");
    vb.onclick = function () { E.setVoice(!E.voiceOn()); paintChrome(); };
  }
  function paintChrome(active) {
    var cd = E.CURRICULA[CUR];
    document.title = "EduZone Learn · " + E.L(cd.sub);
    document.getElementById("bsub").textContent = E.L(cd.sub);
    var cs = document.getElementById("cur");
    cs.setAttribute("aria-label", t("Curriculum", "المنهج"));
    cs.innerHTML = Object.keys(E.CURRICULA).map(function (k) { var c = E.CURRICULA[k]; return '<option value="' + k + '"' + (k === CUR ? " selected" : "") + ">" + c.flag + " " + E.L(c) + "</option>"; }).join("");
    document.getElementById("lang").value = E.lang;
    var vb = document.getElementById("voice");
    vb.textContent = E.voiceOn() ? "🔊" : "🔇"; vb.classList.toggle("off", !E.voiceOn());
    vb.setAttribute("aria-label", w("voice")); vb.title = w("voice");
    var items = [["home", "#/", "🏠"], ["topics", "#/topics", "🗂️"], ["mix", "#/mix", "🎯"], ["more", "#/more", "📚"]];
    if (active !== undefined) paintChrome.active = active;
    var a = paintChrome.active || "home";
    document.getElementById("nav").innerHTML = items.map(function (i) { return '<a href="' + i[1] + '" class="' + (i[0] === a ? "on" : "") + '">' + w(i[0]) + "</a>"; }).join("");
    document.getElementById("bnav").innerHTML = items.map(function (i) { return '<a href="' + i[1] + '" class="' + (i[0] === a ? "on" : "") + '"><span>' + i[2] + "</span>" + w(i[0]) + "</a>"; }).join("");
    var note = CUR === "american" ? t("Skills are mapped to Common Core Grade 4 standards (codes shown on each skill); practice materials, not official test content.", "المهارات مرتبطة بمعايير Common Core للصف الرابع (الرمز ظاهر على كل مهارة)؛ مواد تدريبية وليست امتحانات رسمية.")
      : CUR === "national" ? t("Skills are mapped to the Egyptian Primary 4 maths units; practice materials, not official exam content.", "المهارات مرتبطة بوحدات رياضيات الصف الرابع الابتدائي المصري؛ مواد تدريبية وليست امتحانات رسمية.")
      : w("note");
    document.getElementById("foot").innerHTML = esc(note) + ' · <a href="#" id="resetp">' + esc(w("reset")) + "</a>";
    document.getElementById("resetp").onclick = function (e) {
      e.preventDefault();
      if (confirm(w("resetQ"))) { prog = { stars: {}, goals: {}, learned: {}, answered: 0, correct: 0, last: null }; save(); route(); }
    };
  }

  /* ---------- views ---------- */
  function viewHome(el) {
    paintChrome("home");
    var last = prog.last && BY[prog.last];
    var pct = masteredCount() / SKILLS.length;
    var cont = last ? '<a class="btn primary" href="' + href(last) + '">' + w("cont") + ": " + esc(E.L(last.title)) + "</a>" : '<a class="btn primary" href="' + href(ORDER[0]) + '">' + w("start") + "</a>";
    var h = '<section class="hero"><div><h1>' + w("heroT") + "</h1><p>" + esc(w("heroP")) + '</p><div class="btn-row" style="margin:16px 0">' + cont +
      '<a class="btn" href="#/mix">🎯 ' + w("mix") + "</a></div>" +
      '<div class="hero-stats"><div class="hstat"><b>' + n(totalStars()) + "/" + n(SKILLS.length * 3) + "</b><span>⭐ " + w("stars") + '</span></div><div class="hstat"><b>' + n(masteredCount()) + "/" + n(SKILLS.length) + "</b><span>🏅 " + w("mastered") +
      '</span></div><div class="hstat"><b>' + n(Object.keys(prog.goals).reduce(function (a, k) { return a + prog.goals[k]; }, 0)) + "</b><span>🎯 " + w("goals") + "</span></div></div></div>" + ring(pct) + "</section>";
    // mission
    h += '<section class="sec"><div class="sec-head"><div><h2>🚀 ' + w("mission") + '</h2><p class="sub">' + esc(w("missionSub")) + '</p></div></div><div class="mission">' +
      mission().map(function (s) {
        var c = gOf(s), st = nextStepOf(s);
        return '<a class="mcard" href="' + href(s, st) + '"><span class="mi" style="' + soft(c) + '">' + s.icon + '</span><span class="mt"><b>' + esc(E.L(s.title)) + "</b><small>" + w("nextStep") + ": " + w(st === "learn" ? "learn" : st === "try" ? "tryit" : "practise") + "</small></span>" + starHTML(stars(s.id)) + "</a>";
      }).join("") + "</div></section>";
    // topics
    h += '<section class="sec"><div class="sec-head"><div><h2>🗂️ ' + w("topics") + '</h2><p class="sub">' + esc(w("topicsSub")) + '</p></div><a class="tag-link" href="#/topics">' + w("allTopics") + " " + t("→", "←") + '</a></div><div class="clusters">' +
      GROUPS.map(function (c) {
        var list = c.skills, st = list.reduce(function (a, s) { return a + stars(s.id); }, 0);
        var sub = list.length ? n(list.length) + " " + w("skills") + " · ⭐ " + n(st) + "/" + n(list.length * 3)
          : E.lessonCount(c.unit) ? "📘 " + n(E.lessonCount(c.unit)) + " " + w("lessons") : w("soon");
        return '<a class="ccard" href="#/c/' + c.id + '"><span class="ci" style="' + soft(c) + '">' + c.icon + "</span><b>" + esc(gTitle(c)) + "</b>" + (c.code ? '<span class="chip">' + c.code + "</span>" : "") + "<small>" + sub + '</small><div class="bar"><i style="width:' + (list.length ? Math.round(st / (list.length * 3) * 100) : 0) + '%"></i></div></a>';
      }).join("") + "</div></section>";
    h += moreBlock();
    el.innerHTML = h;
  }
  function mission() {
    var pick = [], add = function (s) { if (s && pick.indexOf(s) < 0 && stars(s.id) < 3 && pick.length < 3) pick.push(s); };
    var core = ORDER.filter(function (s) { return !gOf(s).extra; });
    if (prog.last && core.indexOf(BY[prog.last]) >= 0) add(BY[prog.last]);
    core.forEach(function (s) { if (prog.learned[s.id] || prog.goals[s.id]) add(s); });
    core.forEach(function (s) { add(s); });
    if (!pick.length) pick = ORDER.slice(0, 3);
    return pick;
  }
  function moreBlock() {
    var items = [["../learn/index.html", "📘", "fullLessons", "fullLessonsSub"], ["../science.html", "🦊", "science", "scienceSub"], ["../labs.html", "💡", "labs", "labsSub"]];
    return '<section class="sec"><div class="sec-head"><h2>📚 ' + w("moreT") + '</h2></div><div class="more">' + items.map(function (i) {
      return '<a class="card" href="' + i[0] + '"><span>' + i[1] + "</span><div><b>" + w(i[2]) + "</b><small>" + esc(w(i[3])) + "</small></div></a>";
    }).join("") + "</div></section>";
  }
  function viewMore(el) {
    paintChrome("more");
    var items = [["../learn/index.html", "📘", "fullLessons", "fullLessonsSub"], ["../science.html", "🦊", "science", "scienceSub"], ["../labs.html", "💡", "labs", "labsSub"],
      ["../math-studio.html", "🧩", "studio", "studioSub"], ["../index.html", "🏠", "oldHome", "oldHomeSub"]];
    el.innerHTML = "<h1>📚 " + w("moreT") + '</h1><div class="more" style="margin-top:16px">' + items.map(function (i) {
      return '<a class="card" href="' + i[0] + '"><span>' + i[1] + "</span><div><b>" + w(i[2]) + "</b><small>" + esc(w(i[3])) + "</small></div></a>";
    }).join("") + "</div>";
  }

  function skillRow(s) {
    var c = gOf(s);
    return '<a class="srow" href="' + href(s) + '"><span class="si" style="' + soft(c) + '">' + s.icon + '</span><span class="st"><b>' + esc(E.L(s.title)) + '</b><span class="meta"><span class="chip">' + labelOf(s) + "</span>" +
      (prog.learned[s.id] ? '<span class="chip green">' + w("learned") + "</span>" : "") + (unitOf(s) ? '<span class="chip blue">📘 ' + w("fullLesson") + "</span>" : "") + "</span></span>" + starHTML(stars(s.id)) + "</a>";
  }
  function viewTopics(el, cid) {
    paintChrome("topics");
    var one = cid ? grp(cid) : null, termF = viewTopics.term || 0, q = viewTopics.q || "", terms = E.CURRICULA[CUR].terms;
    if (cid && !one) { location.hash = "#/topics"; return; }
    var h = "";
    if (one) {
      h += '<div class="crumbs"><a href="#/">' + w("home") + "</a> / <a href=\"#/topics\">" + w("topics") + "</a></div>" +
        '<div class="chead"><span class="ci" style="' + soft(one) + '">' + one.icon + "</span><div><h1>" + esc(gTitle(one)) + '</h1><p class="sub">' + (one.code ? one.code + " · " : "") + (one.term ? w("term") + " " + n(one.term) + " · " : "") + n(one.skills.length) + " " + w("skills") + " · 🏅 " + n(masteredCount(one.skills)) + "</p></div></div>";
    } else {
      h += "<h1>🗂️ " + w("allTopics") + '</h1><p class="sub">' + esc(w("topicsSub")) + "</p>";
    }
    h += '<div class="filters"><input class="search" id="q" type="search" placeholder="' + esc(w("search")) + '" value="' + esc(q) + '"></div><div class="filters" id="tf"></div><div id="list"></div>';
    el.innerHTML = h;
    var tf = el.querySelector("#tf"), api = E.makeToolApi(tf);
    if (terms && !one) tf.appendChild(api.seg([[0, w("all")]].concat(terms.map(function (k) { return [k, w("term") + " " + n(k)]; })), termF, function (v) { viewTopics.term = v; draw(); }));
    var qi = el.querySelector("#q");
    qi.oninput = function () { viewTopics.q = qi.value; draw(); };
    function norm(s) { return String(s).toLowerCase().replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي").replace(/[ًٌٍَُِّْ]/g, ""); }
    function draw() {
      var qq = norm(viewTopics.q || ""), tt = viewTopics.term || 0;
      var groups = (one ? [one] : GROUPS).map(function (c) {
        if (one && one.extra) tt = 0;
        var list = c.skills.filter(function (s) { return (!tt || termOf(s) === tt) && (!qq || norm(s.title.en + " " + s.title.ar).indexOf(qq) >= 0); });
        var lessons = E.lessonCount(c.unit), lessonCard = lessons ? '<a class="srow" href="../learn/index.html#/unit/' + encodeURIComponent(c.unit) + '"><span class="si" style="' + soft(c) + '">📘</span><span class="st"><b>' + w("fullLessons") + '</b><span class="meta"><span class="chip blue">' + n(lessons) + " " + w("lessons") + '</span></span></span><span class="tag-link">' + t("→", "←") + "</span></a>" : "";
        if (!list.length && (qq || (tt && c.term !== tt))) return "";
        if (!list.length && !lessonCard && !c.soon) return "";
        var head = one ? "" : '<div class="sec-head"><h2>' + c.icon + " " + esc(gTitle(c)) + (c.code ? ' <span class="chip">' + c.code + "</span>" : "") + "</h2><a class=\"tag-link\" href=\"#/c/" + c.id + '">' + n(list.length) + " " + w("skills") + "</a></div>";
        if (c.extra && !one) head += '<p class="sub" style="margin:-6px 0 12px">' + esc(t("These skills are on the British Year 4 plan but are not part of this curriculum's Grade 4. Use them as extra practice.", "هذه المهارات ضمن خطة السنة الرابعة البريطانية لكنها ليست من منهج هذا الصف. استخدمها للتدريب الإضافي.")) + "</p>";
        var body = list.length || lessonCard ? '<div class="slist">' + list.map(skillRow).join("") + lessonCard + "</div>" : '<div class="card pad empty">🛠️ ' + w("soon") + "</div>";
        return '<section class="sec">' + head + body + "</section>";
      }).join("");
      el.querySelector("#list").innerHTML = groups || '<div class="empty">🔍</div>';
    }
    draw();
  }

  /* ---------- skill page ---------- */
  function viewSkill(el, id, tab) {
    var s = BY[id];
    if (!s) { location.hash = "#/topics"; return; }
    paintChrome("topics");
    prog.last = id; save();
    tab = ["learn", "try", "practice"].indexOf(tab) >= 0 ? tab : "learn";
    var c = gOf(s), idx = ORDER.indexOf(s), prev = ORDER[idx - 1], next = ORDER[idx + 1];
    var stepCls = function (k) { var done = k === "learn" ? prog.learned[id] : k === "try" ? prog.goals[id] : stars(id) > 0; return (k === tab ? "on " : "") + (done ? "done" : ""); };
    var h = '<div class="crumbs"><a href="#/">' + w("home") + '</a> / <a href="#/c/' + c.id + '">' + esc(gTitle(c)) + "</a></div>" +
      '<div class="shead"><div class="left"><span class="si" style="' + soft(c) + '">' + s.icon + "</span><div><h1>" + esc(E.L(s.title)) + '</h1><div class="btn-row"><span class="chip">' + labelOf(s) + '</span><span class="chip">' + c.icon + " " + esc(gTitle(c)) + "</span></div></div></div>" + starHTML(stars(id)) + "</div>" +
      '<nav class="steps">' + [["learn", "learn", 1], ["try", "tryit", 2], ["practice", "practise", 3]].map(function (x) {
        return '<a href="#/s/' + id + "/" + x[0] + '" class="' + stepCls(x[0]) + '"><span class="n">' + (stepCls(x[0]).indexOf("done") >= 0 ? "✓" : n(x[2])) + "</span>" + w(x[1]) + "</a>";
      }).join("") + '</nav><div id="body"></div>' +
      '<div class="skill-nav">' + (prev ? '<a class="btn ghost" href="' + href(prev, "learn") + '">' + w("prev") + " · " + esc(E.L(prev.title)) + "</a>" : "<span></span>") +
      (next ? '<a class="btn ghost" href="' + href(next, "learn") + '">' + esc(E.L(next.title)) + " · " + w("nextS") + "</a>" : "") + "</div>";
    el.innerHTML = h;
    var body = el.querySelector("#body");
    if (tab === "learn") learnTab(body, s);
    else if (tab === "try") tryTab(body, s);
    else practiceTab(body, s);
  }

  function learnTab(body, s) {
    prog.learned[s.id] = true; save();
    var ex = s.gen && E.makeQuestion(s.gen);
    var h = '<div class="layout two"><div style="display:flex;flex-direction:column;gap:16px">' +
      '<div class="card pad"><div class="sec-head" style="margin-bottom:6px"><h3>💡 ' + w("bigIdea") + '</h3><button class="say" type="button" id="sayit">' + w("listen") + '</button></div><div class="explain"><p>' + esc(E.d(E.L(s.explain))) + "</p></div></div>" +
      '<div class="card pad"><h3 style="margin-bottom:10px">✏️ ' + w("example") + '</h3><div id="ex"></div></div>' +
      '<div class="card pad"><h3 style="margin-bottom:10px">✅ ' + w("quick") + '</h3><div id="qc"></div></div></div>' +
      '<aside style="display:flex;flex-direction:column;gap:16px"><div class="card pad"><h3>🧭 ' + w("your3") + '</h3><ol style="margin:10px 0 0;padding-inline-start:22px;font-weight:700;line-height:1.9"><li>' + esc(w("s1")) + "</li><li>" + esc(w("s2")) + "</li><li>" + esc(w("s3")) + "</li></ol>" +
      '<div class="btn-row" style="margin-top:14px"><a class="btn primary" href="#/s/' + s.id + '/try">' + w("goTry") + "</a></div></div>" +
      (unitOf(s) ? '<a class="card pad" style="text-decoration:none;display:block" href="../learn/index.html#/unit/' + encodeURIComponent(unitOf(s)) + '"><b>📘 ' + w("fullLesson") + '</b><p class="sub" style="margin:4px 0 8px">' + esc(w("fullLessonsSub")) + '</p><span class="tag-link">' + w("openLesson") + "</span></a>" : "") +
      "</aside></div>";
    body.innerHTML = h;
    body.querySelector("#sayit").onclick = function () { E.speak(E.L(s.explain)); };
    function drawEx(q) {
      var exEl = body.querySelector("#ex");
      if (!q) { exEl.innerHTML = '<p class="sub">—</p>'; return; }
      var ans = q.kind === "num" ? n(q.answer) + (q.unit ? " " + q.unit : "") : q.answer;
      exEl.innerHTML = '<div class="example"><div class="q">' + q.q + "</div>" + (q.vis ? '<div class="vis">' + q.vis + "</div>" : "") +
        '<div class="btn-row"><button class="btn sm" type="button" id="show">' + w("showSteps") + '</button><button class="btn sm ghost" type="button" id="again">' + w("another") + "</button></div>" +
        '<div class="solution" hidden><ol>' + q.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol><p style=\"margin:8px 0 0\">" + w("answer") + ": <b>" + ans + "</b></p></div></div>";
      exEl.querySelector("#show").onclick = function () { exEl.querySelector(".solution").hidden = false; this.remove(); };
      exEl.querySelector("#again").onclick = function () { drawEx(E.makeQuestion(s.gen)); };
    }
    drawEx(ex);
    // quick check from the year-4 map
    var qc = body.querySelector("#qc"), ck = s.check, answered = false;
    qc.innerHTML = '<div class="qtext" style="font-size:20px;margin-bottom:12px">' + esc(E.d(E.L(ck.q))) + '</div><div class="choices">' +
      ck.options.map(function (o, i) { return '<button class="choice" type="button" data-i="' + i + '">' + esc(E.d(o)) + "</button>"; }).join("") + '</div><div id="qcfb" style="margin-top:12px"></div>';
    qc.querySelectorAll(".choice").forEach(function (b) {
      b.onclick = function () {
        if (answered) return;
        var i = Number(b.dataset.i), ok = i === ck.correct;
        b.classList.add(ok ? "right" : "wrong");
        if (!ok) qc.querySelector('[data-i="' + ck.correct + '"]').classList.add("right");
        answered = true;
        qc.querySelector("#qcfb").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><b>' + (ok ? w("right") : w("theAnswer") + ": " + esc(E.d(ck.options[ck.correct]))) + "</b>" + esc(E.d(E.L(ck.why))) + "</div>";
        if (ok) E.burst();
      };
    });
  }

  function tryTab(body, s) {
    var tool = s.tool && E.tools[s.tool];
    if (!tool) { body.innerHTML = '<div class="card pad empty">🛠️</div>'; return; }
    var mode = tryTab.mode && s.modes.indexOf(tryTab.mode) >= 0 ? tryTab.mode : s.modes[0];
    body.innerHTML = '<div class="card pad"><div class="sec-head" style="margin-bottom:12px"><div><h3>🛠️ ' + w("tryit") + '</h3><p class="sub">' + esc(w("tryHint")) + '</p></div><div id="modes"></div></div><div id="toolhost"></div></div>' +
      '<div class="btn-row" style="margin-top:14px;justify-content:flex-end"><a class="btn primary" href="#/s/' + s.id + '/practice">' + w("goPractise") + "</a></div>";
    var host = body.querySelector("#toolhost");
    if (s.modes.length > 1) {
      var mapi = E.makeToolApi(body.querySelector("#modes"));
      body.querySelector("#modes").appendChild(mapi.seg(s.modes.map(function (m) { return [m, E.L(E.MODE_NAMES[m] || { en: m, ar: m })]; }), mode, function (v) { tryTab.mode = v; run(v); }));
    }
    function run(m) {
      try {
        tool(host, { mode: m }, E.makeToolApi(host, function () {
          prog.goals[s.id] = (prog.goals[s.id] || 0) + 1; save();
          var st = document.querySelectorAll(".steps a")[1];
          if (st) { st.classList.add("done"); st.querySelector(".n").textContent = "✓"; }
        }));
      } catch (e) { if (window.console) console.error(e); host.innerHTML = '<div class="empty">⚠️ ' + esc(e.message) + "</div>"; }
    }
    run(mode);
  }

  /* ---------- practice engine (skill rounds and the mix) ---------- */
  function practiceRound(body, opts) {
    var total = opts.count, i = 0, score = 0, results = [];
    function nextQ() {
      if (i >= total) return finish();
      var src = opts.pick(i), q = null, tries = 0;
      while (!q && tries++ < 6) q = E.makeQuestion(src.gen);
      if (!q) { i++; results.push(0); return nextQ(); }
      showQ(q, src);
    }
    function dots() {
      var h = '<div class="dots">';
      for (var k = 0; k < total; k++) h += "<i class=\"" + (k < results.length ? (results[k] === 1 ? "ok" : results[k] > 0 ? "ok" : "no") : k === i ? "cur" : "") + '"></i>';
      return h + "</div>";
    }
    function showQ(q, src) {
      var attempts = 0, finished = false;
      var tag = opts.tag ? '<a class="mix-tag" href="' + href(src.skill, "learn") + '">' + src.skill.icon + " " + esc(E.L(src.skill.title)) + "</a>" : "";
      var h = '<div class="card pad pq"><div class="ptop">' + dots() + '<span class="sub">' + w("q") + " " + n(i + 1) + " " + w("of") + " " + n(total) + '</span><button class="say" type="button" id="sayq">🔊</button></div>' + tag +
        '<div class="qtext">' + q.q + "</div>" + (q.vis ? '<div class="vis">' + q.vis + "</div>" : "");
      if (q.kind === "choice") h += '<div class="choices">' + q.choices.map(function (c, k) { return '<button class="choice" type="button" data-k="' + k + '">' + c + "</button>"; }).join("") + "</div>";
      else h += '<div class="answer-row">' + (src.gen === "negative" ? '<button class="btn sm" type="button" id="neg" aria-label="minus">±</button>' : "") +
        '<input class="num-in" id="ans" inputmode="numeric" autocomplete="off" placeholder="?" aria-label="' + esc(w("typeAnswer")) + '">' + (q.unit ? '<b>' + q.unit + "</b>" : "") +
        '<button class="btn primary" type="button" id="chk">' + w("check") + "</button></div>";
      h += '<div class="btn-row"><button class="btn sm ghost" type="button" id="hint">' + w("hint") + '</button></div><div id="fb"></div></div>';
      body.innerHTML = h;
      var fb = body.querySelector("#fb");
      body.querySelector("#sayq").onclick = function () { E.speak(plain(q.q)); };
      body.querySelector("#hint").onclick = function () { fb.innerHTML = '<div class="hint">💡 ' + q.hint + "</div>"; };
      function settle(ok, rightText) {
        attempts++;
        if (ok) {
          var pts = attempts === 1 ? 1 : 0.5;
          score += pts; results.push(pts); finished = true;
          prog.answered++; prog.correct++; save();
          fb.innerHTML = '<div class="fb ok"><b>' + w("right") + "</b>" + q.steps.join(" · ") + '</div><div class="btn-row" style="margin-top:12px"><button class="btn primary" type="button" id="nx">' + w("next") + "</button></div>";
          E.burst();
        } else if (attempts < 2) {
          fb.innerHTML = '<div class="fb no"><b>' + w("tryAgain") + "</b>💡 " + q.hint + "</div>";
          return false;
        } else {
          results.push(0); finished = true; prog.answered++; save();
          fb.innerHTML = '<div class="fb no"><b>' + w("theAnswer") + ": " + rightText + '</b><ol style="margin:6px 0 0;padding-inline-start:20px">' + q.steps.map(function (x) { return "<li>" + x + "</li>"; }).join("") +
            '</ol></div><div class="btn-row" style="margin-top:12px"><button class="btn primary" type="button" id="nx">' + w("next") + "</button></div>";
        }
        var nx = body.querySelector("#nx"); nx.onclick = function () { i++; nextQ(); }; nx.focus();
        return true;
      }
      if (q.kind === "choice") {
        body.querySelectorAll(".choice").forEach(function (b) {
          b.onclick = function () {
            if (finished || b.classList.contains("wrong")) return;
            var ok = q.choices[Number(b.dataset.k)] === q.answer;
            b.classList.add(ok ? "right" : "wrong");
            var endNow = settle(ok, q.answer);
            if (endNow && !ok) body.querySelectorAll(".choice").forEach(function (c) { if (q.choices[Number(c.dataset.k)] === q.answer) c.classList.add("right"); });
          };
        });
      } else {
        var inp = body.querySelector("#ans");
        var go = function () {
          if (finished) return;
          var raw = inp.value.replace(/[^0-9٠-٩۰-۹\-−.,٬٫]/g, "");
          var v = E.parse(raw);
          if (isNaN(v)) { inp.focus(); return; }
          var ok = v === q.answer;
          inp.style.borderColor = ok ? "var(--green)" : "var(--red)";
          if (!settle(ok, n(q.answer) + (q.unit ? " " + q.unit : ""))) { inp.select(); }
        };
        body.querySelector("#chk").onclick = go;
        inp.onkeydown = function (e) { if (e.key === "Enter") go(); };
        var neg = body.querySelector("#neg");
        if (neg) neg.onclick = function () { inp.value = inp.value.indexOf("-") === 0 || inp.value.indexOf("−") === 0 ? inp.value.slice(1) : "-" + inp.value; inp.focus(); };
        if (window.matchMedia("(min-width: 900px)").matches) inp.focus();
      }
    }
    function finish() {
      var st = score >= total * 0.9 ? 3 : score >= total * 0.7 ? 2 : score >= total * 0.4 ? 1 : 0;
      if (opts.onDone) opts.onDone(st, score);
      var face = st === 3 ? "🏆" : st === 2 ? "🌟" : st === 1 ? "👍" : "💪";
      body.innerHTML = '<div class="card result"><div class="big">' + face + "</div><h2>" + w("done") + '</h2><div class="score">' + n(score) + " / " + n(total) + "</div>" + (opts.stars ? '<div style="font-size:30px">' + starHTML(st) + "</div>" : "") +
        '<div class="btn-row" style="justify-content:center;margin-top:18px"><button class="btn" type="button" id="again">' + w("again") + "</button>" + (opts.nextHref ? '<a class="btn primary" href="' + opts.nextHref + '">' + w("nextSkill") + "</a>" : "") + "</div></div>";
      if (st >= 2) E.burst();
      body.querySelector("#again").onclick = function () { opts.restart(); };
    }
    nextQ();
  }

  function practiceTab(body, s) {
    var idx = ORDER.indexOf(s), next = ORDER[idx + 1];
    var opts = {
      count: 5, stars: true, pick: function () { return { gen: s.gen, skill: s }; },
      nextHref: next ? href(next, "learn") : null,
      restart: function () { practiceTab(body, s); },
      onDone: function (st) {
        if (st > stars(s.id)) { prog.stars[s.id] = st; save(); }
        var hs = document.querySelector(".shead .stars"); if (hs) hs.outerHTML = starHTML(stars(s.id));
        var a = document.querySelectorAll(".steps a")[2]; if (a && stars(s.id) > 0) { a.classList.add("done"); a.querySelector(".n").textContent = "✓"; }
      }
    };
    practiceRound(body, opts);
  }

  function viewMix(el) {
    paintChrome("mix");
    var core = ORDER.filter(function (s) { return !gOf(s).extra; });
    var pool = core.filter(function (s) { return prog.learned[s.id] || prog.goals[s.id] || stars(s.id); });
    if (pool.length < 3) pool = core.slice(0, 10);
    el.innerHTML = "<h1>🎯 " + w("mixT") + '</h1><p class="sub" style="margin-bottom:16px">' + esc(w("mixP")) + '</p><div id="body"></div>';
    var order = E.shuffle(pool);
    practiceRound(el.querySelector("#body"), {
      count: 10, tag: true, pick: function (k) { var s = order[k % order.length]; return { gen: s.gen, skill: s }; },
      restart: function () { viewMix(el); }
    });
  }

  /* ---------- router ---------- */
  function route() {
    E.hush();
    var el = document.getElementById("view"), parts = location.hash.replace(/^#\/?/, "").split("/");
    if (!SKILLS.length) return;
    if (parts[0] === "topics") viewTopics(el);
    else if (parts[0] === "c") viewTopics(el, decodeURIComponent(parts[1] || ""));
    else if (parts[0] === "s") viewSkill(el, parts[1], parts[2]);
    else if (parts[0] === "mix") viewMix(el);
    else if (parts[0] === "more") viewMore(el);
    else viewHome(el);
    if (route.lastPath !== parts.slice(0, 2).join("/")) window.scrollTo(0, 0);
    route.lastPath = parts.slice(0, 2).join("/");
  }

  shell();
  paintChrome();
  fetch("../british/year4-map.json").then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (map) {
    SKILLS = E.buildSkills(map);
    SKILLS.forEach(function (s) { BY[s.id] = s; });
    buildGroups();
    window.addEventListener("hashchange", route);
    route();
  }).catch(function () {
    document.getElementById("view").innerHTML = '<div class="card pad empty">' + esc(w("loadErr")) + "</div>";
  });
})();
