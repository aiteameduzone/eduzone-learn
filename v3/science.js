/* EduZone Learn v3 - Science · Prep 3 (Egyptian Ministry book, Term 1).
   Data: sci3-data-a.js + sci3-data-b.js (EZ3.SCI3). Routes handled here (called from app.js):
     #/sci            all units and lessons
     #/sci/u1         one unit
     #/sci/u1l1/learn | lab | quiz
   Every lesson: 1 Learn (idea in two voiced ways + key-word cards) -> 2 Lab (hands-on, no score)
   -> 3 Quiz (each answer explained in two voiced ways). The quiz opens after Learn + Lab. */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc;
  var P = E.store.get("ez3_sci3", null) || {};
  ["learn", "lab", "stars"].forEach(function (k) { if (!P[k] || typeof P[k] !== "object") P[k] = {}; });
  function save() { E.store.set("ez3_sci3", P); }
  function T(pair) { return typeof pair === "string" ? pair : (E.isAr() ? pair[1] : pair[0]); }
  function lang() { return E.isAr() ? "ar" : "en"; }
  function units() { var u = (E.SCI3 && E.SCI3.units) || []; u.forEach(function (x) { x.lessons.forEach(function (l) { l.unit = x; }); }); return u; }
  function all() { var a = []; units().forEach(function (u) { u.lessons.forEach(function (l) { l.unit = u; a.push(l); }); }); return a; }
  function byId(id) { return all().filter(function (l) { return l.id === id; })[0] || null; }
  function starHTML(k) { var h = ""; for (var i = 0; i < 3; i++) h += i < k ? "⭐" : '<span class="off">⭐</span>'; return '<span class="stars">' + h + "</span>"; }
  function soft(c) { return "background:var(--" + c + "-soft)"; }
  function unitTitle(u) { return t("Unit ", "الوحدة ") + n(u.num) + " · " + E.L(u.title); }
  function nextTab(l) { return !P.learn[l.id] ? "learn" : !P.lab[l.id] ? "lab" : "quiz"; }
  var arrow = function () { return t("→", "←"); };

  var W = {
    sci: ["Science · Prep 3", "العلوم · الثالث الإعدادي"],
    sciSub: ["Term 1 · Egyptian Ministry book · 4 units, 10 lessons", "الفصل الدراسي الأول · كتاب الوزارة · ٤ وحدات و١٠ دروس"],
    sciHome: ["Learn each lesson in two voiced ways, explore it in a hands-on lab, then take the quiz.", "تعلّم كل درس بطريقتين بالصوت، وجرّبه في معمل تفاعلي، ثم خذ الاختبار."],
    allLessons: ["All lessons", "كل الدروس"],
    learn: ["Learn", "تعلّم"], lab: ["Lab", "المعمل"], quiz: ["Quiz", "الاختبار"],
    idea: ["The big idea, two ways", "الفكرة بطريقتين"], ideaSub: ["Pick a way, press Play and follow the highlighted line.", "اختر الطريقة، واضغط تشغيل، وتابع السطر المضيء."],
    words: ["Key words", "المصطلحات"], wordsSub: ["Tap a card to flip it and hear it.", "اضغط على البطاقة لتقلبها وتسمعها."],
    goLab: ["Next: the Lab", "التالي: المعمل"], goQuiz: ["Next: the Quiz", "التالي: الاختبار"],
    labT: ["Hands-on lab", "المعمل التفاعلي"], labSub: ["No score here. Explore until you reach every goal.", "لا توجد درجات هنا، جرّب حتى تحقق كل الأهداف."],
    labDone: ["Lab complete! You are ready for the quiz.", "أحسنت! انتهى المعمل وأنت جاهز للاختبار."],
    gateT: ["Learn and explore first", "تعلّم وجرّب أولًا"],
    gateLearn: ["Start with Learn: hear the idea two ways and flip the key words.", "ابدأ بخطوة تعلّم: استمع للفكرة بطريقتين واقلب بطاقات المصطلحات."],
    gateLab: ["Finish the hands-on lab first. It makes the questions easier.", "أكمل المعمل التفاعلي أولًا، فتصبح الأسئلة أسهل."],
    anyway: ["Take the quiz anyway", "خذ الاختبار على أي حال"],
    q: ["Question", "السؤال"], of: ["of", "من"], right: ["Correct! ⭐", "إجابة صحيحة! ⭐"], wrong: ["Not quite.", "ليست صحيحة."],
    theAns: ["The answer is", "الإجابة الصحيحة"], hearSol: ["Hear the solution two ways", "استمع إلى الحل بطريقتين"], next: ["Next", "التالي"],
    done: ["Quiz complete!", "انتهى الاختبار!"], again: ["Try the quiz again ↻", "أعد الاختبار ↻"], nextLesson: ["Next lesson", "الدرس التالي"],
    page: ["Book page", "صفحة الكتاب"], unit: ["Unit", "الوحدة"], lessons: ["lessons", "دروس"],
    note: ["Lesson titles follow the Ministry of Education Prep 3 Science book, Term 1. Practice material, not official exam content.", "عناوين الدروس حسب كتاب العلوم للصف الثالث الإعدادي (الفصل الأول) من وزارة التربية والتعليم. مواد تدريبية وليست امتحانًا رسميًا."],
    goals: ["Goals", "الأهداف"], pickFirst: ["Tap an item first.", "اضغط على عنصر أولًا."], notHere: ["Not this group. Try another one.", "ليست هذه المجموعة، جرّب مجموعة أخرى."],
    home: ["Home", "الرئيسية"], answerIs: ["So the answer is", "إذن الإجابة هي"]
  };
  function w(k) { var x = W[k]; return x ? T(x) : k; }

  /* ---------- progress used by the home page ---------- */
  function lessonDone(l) { return (P.learn[l.id] ? 1 : 0) + (P.lab[l.id] ? 1 : 0) + ((P.stars[l.id] || 0) > 0 ? 1 : 0); }
  function unitPct(u) { var d = 0; u.lessons.forEach(function (l) { d += lessonDone(l); }); return Math.round(d / (u.lessons.length * 3) * 100); }

  /* home-page section (National + British) */
  E.sciHomeBlock = function () {
    if (!units().length) return "";
    return '<section class="sec sci-sec"><div class="sec-head"><div><h2>🔬 ' + w("sci") + '</h2><p class="sub">' + esc(w("sciSub")) + '</p></div><a class="tag-link" href="#/sci">' + w("allLessons") + " " + arrow() + '</a></div><div class="clusters">' +
      units().map(function (u) {
        return '<a class="ccard" href="#/sci/' + u.id + '"><span class="ci" style="' + soft(u.color) + '">' + u.icon + "</span><b>" + esc(unitTitle(u)) + "</b><small>" + n(u.lessons.length) + " " + w("lessons") + '</small><div class="bar"><i style="width:' + unitPct(u) + '%"></i></div></a>';
      }).join("") + "</div></section>";
  };

  function lessonRow(l) {
    var st = P.stars[l.id] || 0;
    return '<a class="srow" href="#/sci/' + l.id + "/" + nextTab(l) + '"><span class="si" style="' + soft(l.unit.color) + '">' + l.icon + '</span><span class="st"><b>' + esc(E.L(l.title)) + '</b><span class="meta">' +
      '<span class="chip' + (P.learn[l.id] ? " green" : "") + '">' + (P.learn[l.id] ? "✓ " : "") + w("learn") + '</span><span class="chip' + (P.lab[l.id] ? " green" : "") + '">' + (P.lab[l.id] ? "✓ " : "") + w("lab") + "</span>" +
      '<span class="chip">' + w("page") + " " + n(l.page) + "</span></span></span>" + starHTML(st) + "</a>";
  }

  function viewAll(el, uid) {
    var one = uid ? units().filter(function (u) { return u.id === uid; })[0] : null;
    var h = '<div class="crumbs"><a href="#/">' + w("home") + "</a>" + (one ? ' / <a href="#/sci">' + w("sci") + "</a>" : "") + "</div>" +
      '<section class="card pad sci-hero"><div class="sci-hero-i">🔬</div><div><h1>' + (one ? one.icon + " " + esc(unitTitle(one)) : w("sci")) + '</h1><p class="sub">' + esc(one ? w("sciSub") : w("sciHome")) + "</p></div></section>";
    (one ? [one] : units()).forEach(function (u) {
      h += '<section class="sec"><div class="sec-head"><h2>' + u.icon + " " + esc(unitTitle(u)) + "</h2>" + (one ? "" : '<a class="tag-link" href="#/sci/' + u.id + '">' + n(u.lessons.length) + " " + w("lessons") + "</a>") + '</div><div class="slist">' +
        u.lessons.map(lessonRow).join("") + "</div></section>";
    });
    h += '<p class="sub sci-note">' + esc(w("note")) + "</p>";
    el.innerHTML = h;
  }

  /* ---------- lesson page ---------- */
  function viewLesson(el, l, tab) {
    if (["learn", "lab", "quiz"].indexOf(tab) < 0) tab = nextTab(l);
    var u = l.unit, list = all(), idx = list.indexOf(l);
    var done = function (k) { return k === "learn" ? P.learn[l.id] : k === "lab" ? P.lab[l.id] : (P.stars[l.id] || 0) > 0; };
    el.innerHTML = '<div class="crumbs"><a href="#/">' + w("home") + '</a> / <a href="#/sci">' + w("sci") + '</a> / <a href="#/sci/' + u.id + '">' + w("unit") + " " + n(u.num) + "</a></div>" +
      '<div class="shead"><div class="left"><span class="si" style="' + soft(u.color) + '">' + l.icon + '</span><div><h1 class="sci-title">' + esc(E.L(l.title)) + '</h1><span class="sub">' + esc(unitTitle(u)) + " · " + w("page") + " " + n(l.page) + "</span></div></div>" + starHTML(P.stars[l.id] || 0) + "</div>" +
      '<nav class="steps">' + [["learn", 1], ["lab", 2], ["quiz", 3]].map(function (x) {
        return '<a href="#/sci/' + l.id + "/" + x[0] + '" class="' + (x[0] === tab ? "on " : "") + (done(x[0]) ? "done" : "") + '"><span class="n">' + (done(x[0]) ? "✓" : n(x[1])) + "</span>" + w(x[0]) + "</a>";
      }).join("") + '</nav><div id="sbody"></div>' +
      '<div class="btn-row sci-pn">' + (list[idx - 1] ? '<a class="btn sm ghost" href="#/sci/' + list[idx - 1].id + '/learn">' + t("← ", "→ ") + esc(E.L(list[idx - 1].title)) + "</a>" : "<span></span>") +
      (list[idx + 1] ? '<a class="btn sm ghost" href="#/sci/' + list[idx + 1].id + '/learn">' + esc(E.L(list[idx + 1].title)) + " " + arrow() + "</a>" : "") + "</div>";
    var body = el.querySelector("#sbody");
    if (tab === "learn") learnTab(body, l);
    else if (tab === "lab") labTab(body, l);
    else quizTab(body, l, false);
  }

  function markStep(k) {
    var a = document.querySelectorAll(".steps a")[k];
    if (a && !a.classList.contains("done")) { a.classList.add("done"); a.querySelector(".n").textContent = "✓"; }
  }

  function objHTML(l) {
    var o = E.SCI3_OBJ && E.SCI3_OBJ[l.id];
    if (!o) return "";
    return '<div class="obj" style="margin:0 0 12px"><b style="width:100%;font-size:14px">🎯 ' + t("In this lesson", "في هذا الدرس") + "</b>" + (o[lang()] || o.en).map(function (x) { return '<span class="chip blue">' + esc(x) + "</span>"; }).join("") + "</div>";
  }
  function learnTab(body, l) {
    var L = lang();
    body.innerHTML = '<div class="learn-flow">' +
      '<div class="card pad"><div class="lhead"><span class="lnum">' + n(1) + '</span><div><h3>' + w("idea") + '</h3><p class="sub">' + esc(w("ideaSub")) + '</p></div></div>' + objHTML(l) + '<div id="idea"></div></div>' +
      '<div class="card pad"><div class="lhead"><span class="lnum">' + n(2) + '</span><div><h3>' + w("words") + '</h3><p class="sub">' + esc(w("wordsSub")) + '</p></div></div><div class="flips" id="flips">' +
      l.words.map(function (x, i) {
        return '<button type="button" class="flip" data-i="' + i + '"><span class="ff">' + esc(E.isAr() ? x[1] : x[0]) + '<small>' + esc(E.isAr() ? x[0] : x[1]) + '</small></span><span class="fb2">' + esc(E.isAr() ? x[3] : x[2]) + "</span></button>";
      }).join("") + "</div></div>" +
      '<div class="btn-row" style="justify-content:flex-end"><a class="btn primary" id="golab" href="#/sci/' + l.id + '/lab">' + w("goLab") + " " + arrow() + "</a></div></div>";
    E.presenter(body.querySelector("#idea"), { official: l.idea.official[L], story: l.idea.story[L] }, {});
    var seen = {};
    function learned() { if (!P.learn[l.id]) { P.learn[l.id] = 1; save(); markStep(0); } }
    body.querySelectorAll(".flip").forEach(function (b) {
      b.onclick = function () {
        var x = l.words[Number(b.dataset.i)];
        b.classList.toggle("on");
        E.speak(b.classList.contains("on") ? (E.isAr() ? x[3] : x[2]) : (E.isAr() ? x[1] : x[0]));
        seen[b.dataset.i] = 1;
        if (Object.keys(seen).length >= l.words.length) learned();
      };
    });
    body.querySelector("#golab").onclick = learned;
    body.querySelector("#idea").addEventListener("click", function (e) { if (e.target.closest(".pres-play")) learned(); });
  }

  function labTab(body, l) {
    var parts = l.lab.parts || [l.lab], got = 0;
    body.innerHTML = '<div class="card pad"><div class="lhead"><span class="lnum">🧪</span><div><h3>' + w("labT") + '</h3><p class="sub">' + esc(w("labSub")) + "</p></div></div>" +
      (parts.length > 1 ? '<div class="obj lab-map">' + parts.map(function (p, i) { return '<span class="chip" data-i="' + i + '">' + n(i + 1) + ". " + esc(T(E.sciLabs.names[p.type] || [p.type, p.type])) + "</span>"; }).join("") + "</div>" : "") +
      '<div id="labhost" class="lab"></div><div id="labend"></div></div>';
    var host = body.querySelector("#labhost"), end = body.querySelector("#labend");
    function finished() {
      if (!P.lab[l.id]) { P.lab[l.id] = 1; save(); markStep(1); }
      if (end.innerHTML) return;
      E.burst();
      end.innerHTML = '<div class="fb ok" style="margin-top:14px"><b>🎉 ' + w("labDone") + '</b></div><div class="btn-row" style="justify-content:flex-end;margin-top:12px"><a class="btn primary" href="#/sci/' + l.id + '/quiz">' + w("goQuiz") + " " + arrow() + "</a></div>";
      E.speak(w("labDone"));
    }
    function chip(i, cls) { var c = body.querySelector('.lab-map .chip[data-i="' + i + '"]'); if (c) c.className = "chip " + cls; }
    function start(i) {
      var p = parts[i], box = E.el("div", "lab-part");
      if (parts.length > 1) box.innerHTML = "<h4>" + t("Part ", "الجزء ") + n(i + 1) + " " + t("of", "من") + " " + n(parts.length) + ": " + esc(T(E.sciLabs.names[p.type] || [p.type, p.type])) + "</h4>";
      var inner = E.el("div"); box.appendChild(inner); host.appendChild(box);
      chip(i, "orange");
      var once = false;
      E.sciLabs[p.type](inner, p, function () {
        if (once) return; once = true; got++; chip(i, "green");
        if (i + 1 < parts.length) {
          E.toast("✅ " + t("Part ", "الجزء ") + n(i + 1) + t(" done!", " انتهى!"));
          start(i + 1);
          setTimeout(function () { var nb = host.querySelectorAll(".lab-part")[i + 1]; if (nb && nb.scrollIntoView) nb.scrollIntoView({ behavior: "smooth", block: "start" }); }, 350);
        } else finished();
      });
    }
    start(0);
  }

  function solWays(item, ansTxt) {
    var a = w("theAns") + ": " + ansTxt + ".";
    return { official: [a, T(item.off)], story: [T(item.sto), w("answerIs") + ": " + ansTxt + "."] };
  }

  function quizTab(body, l, force) {
    if (!force && !(quizTab.skip || {})[l.id] && (!P.learn[l.id] || !P.lab[l.id])) {
      var miss = !P.learn[l.id] ? "learn" : "lab";
      body.innerHTML = '<div class="card pad gate"><div class="big">🔬</div><h3>' + esc(w("gateT")) + '</h3><p class="sub">' + esc(w(miss === "learn" ? "gateLearn" : "gateLab")) + "</p>" +
        '<div class="btn-row" style="justify-content:center"><a class="btn primary" href="#/sci/' + l.id + "/" + miss + '">' + w(miss) + " " + arrow() + '</a><button class="btn ghost" type="button" id="anyway">' + w("anyway") + "</button></div></div>";
      body.querySelector("#anyway").onclick = function () { (quizTab.skip = quizTab.skip || {})[l.id] = true; quizTab(body, l, true); };
      return;
    }
    var qs = E.shuffle(l.quiz), i = 0, score = 0;
    function show() {
      E.hush();
      if (i >= qs.length) return finish();
      var it = qs[i], order = E.shuffle([0, 1, 2, 3]);
      body.innerHTML = '<div class="card pad"><div class="q-top"><span class="chip">' + w("q") + " " + n(i + 1) + " " + w("of") + " " + n(qs.length) + '</span><button type="button" class="btn sm ghost" id="sayq">🔊</button></div>' +
        '<h2 class="sq">' + T(it.q) + '</h2><div class="choices sci-choices">' + order.map(function (k) {
          return '<button class="choice" type="button" data-k="' + k + '">' + T(it.c[k]) + "</button>";
        }).join("") + '</div><div id="fb" style="margin-top:12px"></div></div>';
      body.querySelector("#sayq").onclick = function () { E.speak(T(it.q)); };
      body.querySelectorAll(".choice").forEach(function (b) {
        b.onclick = function () {
          var k = Number(b.dataset.k), ok = k === 0, ans = T(it.c[0]);
          body.querySelectorAll(".choice").forEach(function (c) { c.disabled = true; if (Number(c.dataset.k) === 0) c.classList.add("right"); });
          if (!ok) b.classList.add("wrong");
          if (ok) score++;
          var fb = body.querySelector("#fb");
          fb.innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><b>' + (ok ? w("right") : w("wrong") + " " + w("theAns") + ": " + ans) + "</b></div>" +
            (ok ? '<button type="button" class="btn sm" id="hs" style="margin-top:10px">🔊 ' + w("hearSol") + "</button>" : "") +
            '<div class="p-pres" style="margin-top:10px"></div><div class="btn-row" style="justify-content:flex-end;margin-top:12px"><button type="button" class="btn primary" id="nx">' + w("next") + " " + arrow() + "</button></div>";
          var host = fb.querySelector(".p-pres");
          if (ok) { E.speak(w("right")); fb.querySelector("#hs").onclick = function () { this.remove(); E.presenter(host, solWays(it, ans), { auto: true }); }; }
          else E.presenter(host, solWays(it, ans), { auto: true });
          var nx = fb.querySelector("#nx"); nx.onclick = function () { i++; show(); };
        };
      });
    }
    function finish() {
      var total = qs.length, st = score >= total ? 3 : score >= total - 1 ? 2 : score >= total / 2 ? 1 : 0;
      if (st > (P.stars[l.id] || 0)) { P.stars[l.id] = st; save(); }
      if (score > 0) markStep(2);
      var hs = document.querySelector(".shead .stars"); if (hs) hs.outerHTML = starHTML(P.stars[l.id] || 0);
      var list = all(), nxt = list[list.indexOf(l) + 1];
      var face = st === 3 ? "🏆" : st === 2 ? "🌟" : st === 1 ? "👍" : "💪";
      body.innerHTML = '<div class="card result"><div class="big">' + face + "</div><h2>" + w("done") + '</h2><div class="score">' + n(score) + " / " + n(total) + '</div><div style="font-size:30px">' + starHTML(st) + "</div>" +
        '<div class="btn-row" style="justify-content:center;margin-top:18px"><button class="btn" type="button" id="again">' + w("again") + "</button>" + (nxt ? '<a class="btn primary" href="#/sci/' + nxt.id + '/learn">' + w("nextLesson") + " " + arrow() + "</a>" : "") + "</div></div>";
      if (st >= 2) E.burst();
      body.querySelector("#again").onclick = function () { quizTab(body, l, true); };
    }
    show();
  }

  /* ---------- router entry (app.js calls this for #/sci...) ---------- */
  E.sciView = function (el, parts) {
    var a = parts[1] || "";
    if (!a) return viewAll(el);
    if (/^u\d+$/.test(a)) return viewAll(el, a);
    var l = byId(a);
    if (!l) { location.hash = "#/sci"; return; }
    viewLesson(el, l, parts[2]);
  };
  E.sciT = T;
})();
