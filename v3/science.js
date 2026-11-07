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
    var L = lang(), hasD = !!E.sciDiagram;
    var sec = function (k, title, sub, inner) { return '<div class="card pad"><div class="lhead"><span class="lnum">' + n(k) + '</span><div><h3>' + title + '</h3><p class="sub">' + esc(sub) + "</p></div></div>" + inner + "</div>"; };
    body.innerHTML = '<div class="learn-flow">' +
      sec(1, w("idea"), w("ideaSub"), objHTML(l) + '<div id="idea"></div>') +
      (hasD ? sec(2, "🔎 " + esc(E.sciDiagramTitle(l.id) || t("Explore the diagram", "استكشف الرسم")), t("Explore the picture: every part talks.", "استكشف الصورة: كل جزء يتكلم."), '<div id="diag"></div>') : "") +
      sec(hasD ? 3 : 2, w("words"), w("wordsSub"), '<div class="flips" id="flips">' +
        l.words.map(function (x, i) {
          return '<button type="button" class="flip" data-i="' + i + '"><span class="ff">' + esc(E.isAr() ? x[1] : x[0]) + '<small>' + esc(E.isAr() ? x[0] : x[1]) + '</small></span><span class="fb2">' + esc(E.isAr() ? x[3] : x[2]) + "</span></button>";
        }).join("") + "</div>") +
      '<div class="btn-row" style="justify-content:flex-end"><a class="btn primary" id="golab" href="#/sci/' + l.id + '/lab">' + w("goLab") + " " + arrow() + "</a></div></div>";
    E.presenter(body.querySelector("#idea"), { official: l.idea.official[L], story: l.idea.story[L] }, {});
    var seen = {};
    function learned() { if (!P.learn[l.id]) { P.learn[l.id] = 1; save(); markStep(0); } }
    if (hasD) E.sciDiagram(body.querySelector("#diag"), l.id, learned);
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

  /* ---------- quiz engine: choice, true/false, order, match ---------- */
  function ansText(it) {
    if (it.k === "tf") return it.a ? t("True", "صواب") : t("False", "خطأ");
    if (it.k === "order") return it.items.map(T).join(" → ");
    if (it.k === "match") return it.pairs.map(function (p) { return T(p[0]) + " : " + T(p[1]); }).join(t("; ", "؛ "));
    return T(it.c[0]);
  }
  function solWays(item, ansTxt) {
    var a = w("theAns") + ": " + ansTxt + ".";
    return { official: [a, T(item.off)], story: [T(item.sto), w("answerIs") + ": " + ansTxt + "."] };
  }
  function lessonQs(l) { return l.quiz.concat((E.SCI3_EXTRA && E.SCI3_EXTRA[l.id]) || []).map(function (q) { q.lesson = l; return q; }); }

  // body, list of questions, { onDone(score,total), nextHref, restart, tag }
  function quizRound(body, qs, opts) {
    var i = 0, score = 0;
    function show() {
      E.hush();
      if (i >= qs.length) return finish();
      var it = qs[i], kind = it.k || "choice";
      var head = '<div class="q-top"><span class="chip">' + w("q") + " " + n(i + 1) + " " + w("of") + " " + n(qs.length) + "</span>" +
        (opts.tag && it.lesson ? '<span class="chip blue">' + it.lesson.icon + " " + esc(E.L(it.lesson.title)) + "</span>" : "") +
        '<span class="chip orange">' + (kind === "order" ? "🔢 " + t("Put in order", "رتّب") : kind === "match" ? "🔗 " + t("Match", "صِل") : kind === "tf" ? "⚖️ " + t("True or false", "صواب أم خطأ") : "🔘 " + t("Choose", "اختر")) + '</span><button type="button" class="btn sm ghost" id="sayq">🔊</button></div>';
      body.innerHTML = '<div class="card pad">' + head + '<h2 class="sq">' + T(it.q) + '</h2><div id="qa"></div><div id="fb" style="margin-top:12px"></div></div>';
      body.querySelector("#sayq").onclick = function () { E.speak(T(it.q)); };
      var qa = body.querySelector("#qa");
      if (kind === "choice") choiceQ(qa, it, settle);
      else if (kind === "tf") tfQ(qa, it, settle);
      else if (kind === "order") orderQ(qa, it, settle);
      else matchQ(qa, it, settle);
      function settle(ok) {
        if (ok) score++;
        var ans = ansText(it), fb = body.querySelector("#fb");
        fb.innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><b>' + (ok ? w("right") : w("wrong") + " " + w("theAns") + ": " + ans) + "</b></div>" +
          (ok ? '<button type="button" class="btn sm" id="hs" style="margin-top:10px">🔊 ' + w("hearSol") + "</button>" : "") +
          '<div class="p-pres" style="margin-top:10px"></div><div class="btn-row" style="justify-content:flex-end;margin-top:12px"><button type="button" class="btn primary" id="nx">' + w("next") + " " + arrow() + "</button></div>";
        var host = fb.querySelector(".p-pres");
        if (ok) { E.speak(w("right")); fb.querySelector("#hs").onclick = function () { this.remove(); E.presenter(host, solWays(it, ans), { auto: true }); }; }
        else E.presenter(host, solWays(it, ans), { auto: true });
        fb.querySelector("#nx").onclick = function () { i++; show(); };
      }
    }
    function finish() {
      var total = qs.length, st = score >= total ? 3 : score >= total - 1 ? 2 : score >= total / 2 ? 1 : 0;
      if (opts.onDone) opts.onDone(st, score, total);
      var face = st === 3 ? "🏆" : st === 2 ? "🌟" : st === 1 ? "👍" : "💪";
      body.innerHTML = '<div class="card result"><div class="big">' + face + "</div><h2>" + w("done") + '</h2><div class="score">' + n(score) + " / " + n(total) + '</div><div style="font-size:30px">' + starHTML(st) + "</div>" +
        '<div class="btn-row" style="justify-content:center;margin-top:18px"><button class="btn" type="button" id="again">' + w("again") + "</button>" + (opts.nextHref ? '<a class="btn primary" href="' + opts.nextHref + '">' + w("nextLesson") + " " + arrow() + "</a>" : "") + "</div></div>";
      if (st >= 2) E.burst();
      body.querySelector("#again").onclick = opts.restart;
    }
    show();
  }
  function choiceQ(qa, it, settle) {
    var order = E.shuffle([0, 1, 2, 3]);
    qa.innerHTML = '<div class="choices sci-choices">' + order.map(function (k) { return '<button class="choice" type="button" data-k="' + k + '">' + T(it.c[k]) + "</button>"; }).join("") + "</div>";
    qa.querySelectorAll(".choice").forEach(function (b) {
      b.onclick = function () {
        var ok = b.dataset.k === "0";
        qa.querySelectorAll(".choice").forEach(function (c) { c.disabled = true; if (c.dataset.k === "0") c.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        settle(ok);
      };
    });
  }
  function tfQ(qa, it, settle) {
    qa.innerHTML = '<div class="tf"><button type="button" class="choice tf-t" data-v="1">✔ ' + t("True", "صواب") + '</button><button type="button" class="choice tf-f" data-v="0">✖ ' + t("False", "خطأ") + "</button></div>";
    qa.querySelectorAll(".choice").forEach(function (b) {
      b.onclick = function () {
        var v = b.dataset.v === "1", ok = v === it.a;
        qa.querySelectorAll(".choice").forEach(function (c) { c.disabled = true; if ((c.dataset.v === "1") === it.a) c.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        settle(ok);
      };
    });
  }
  function orderQ(qa, it, settle) {
    var pool = E.shuffle(it.items.map(function (x, k) { return k; })), picked = [];
    qa.innerHTML = '<p class="sub">' + esc(t("Tap the cards in the right order.", "اضغط على البطاقات بالترتيب الصحيح.")) + '</p><ol class="ord-picked"></ol><div class="ord-pool"></div><div class="btn-row"><button type="button" class="btn sm ghost" id="undo">↶ ' + t("Undo", "تراجع") + '</button><button type="button" class="btn sm primary" id="chk" disabled>' + t("Check", "تحقّق") + "</button></div>";
    function draw() {
      qa.querySelector(".ord-picked").innerHTML = picked.map(function (k) { return "<li>" + esc(T(it.items[k])) + "</li>"; }).join("");
      qa.querySelector(".ord-pool").innerHTML = pool.filter(function (k) { return picked.indexOf(k) < 0; }).map(function (k) { return '<button type="button" class="sl-item" data-k="' + k + '">' + esc(T(it.items[k])) + "</button>"; }).join("");
      qa.querySelectorAll(".ord-pool button").forEach(function (b) { b.onclick = function () { picked.push(Number(b.dataset.k)); draw(); }; });
      qa.querySelector("#chk").disabled = picked.length !== it.items.length;
    }
    qa.querySelector("#undo").onclick = function () { picked.pop(); draw(); };
    qa.querySelector("#chk").onclick = function () {
      var ok = picked.every(function (k, j) { return k === j; });
      qa.querySelectorAll(".ord-picked li").forEach(function (li, j) { li.classList.add(picked[j] === j ? "ok" : "no"); });
      qa.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
      settle(ok);
    };
    draw();
  }
  function matchQ(qa, it, settle) {
    var right = E.shuffle(it.pairs.map(function (p, k) { return k; })), sel = null, got = 0, miss = 0;
    qa.innerHTML = '<p class="sub">' + esc(t("Tap an item on the left, then its partner on the right.", "اضغط على عنصر في العمود الأول ثم على ما يناسبه في العمود الثاني.")) + '</p><div class="mt"><div class="mt-l">' +
      it.pairs.map(function (p, k) { return '<button type="button" class="sl-item" data-k="' + k + '">' + T(p[0]) + "</button>"; }).join("") + '</div><div class="mt-r">' +
      right.map(function (k) { return '<button type="button" class="sl-item" data-k="' + k + '">' + esc(T(it.pairs[k][1])) + "</button>"; }).join("") + "</div></div>";
    qa.querySelectorAll(".mt-l button").forEach(function (b) { b.onclick = function () { if (b.disabled) return; qa.querySelectorAll(".mt-l .sel").forEach(function (x) { x.classList.remove("sel"); }); b.classList.add("sel"); sel = b; }; });
    qa.querySelectorAll(".mt-r button").forEach(function (b) {
      b.onclick = function () {
        if (b.disabled) return;
        if (!sel) { E.toast(t("Tap an item on the left first.", "اضغط على عنصر في العمود الأول أولًا.")); return; }
        if (sel.dataset.k === b.dataset.k) {
          sel.classList.remove("sel"); sel.classList.add("placed"); b.classList.add("placed"); sel.disabled = b.disabled = true;
          var c = "m" + (got % 4); sel.classList.add(c); b.classList.add(c);
          sel = null; got++;
          if (got === it.pairs.length) settle(miss === 0);
        } else { miss++; b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake"); }
      };
    });
  }

  function quizTab(body, l, force) {
    if (!force && !(quizTab.skip || {})[l.id] && (!P.learn[l.id] || !P.lab[l.id])) {
      var miss = !P.learn[l.id] ? "learn" : "lab";
      body.innerHTML = '<div class="card pad gate"><div class="big">🔬</div><h3>' + esc(w("gateT")) + '</h3><p class="sub">' + esc(w(miss === "learn" ? "gateLearn" : "gateLab")) + "</p>" +
        '<div class="btn-row" style="justify-content:center"><a class="btn primary" href="#/sci/' + l.id + "/" + miss + '">' + w(miss) + " " + arrow() + '</a><button class="btn ghost" type="button" id="anyway">' + w("anyway") + "</button></div></div>";
      body.querySelector("#anyway").onclick = function () { (quizTab.skip = quizTab.skip || {})[l.id] = true; quizTab(body, l, true); };
      return;
    }
    var list = all(), nxt = list[list.indexOf(l) + 1];
    quizRound(body, E.shuffle(lessonQs(l)), {
      nextHref: nxt ? "#/sci/" + nxt.id + "/learn" : null,
      restart: function () { quizTab(body, l, true); },
      onDone: function (st, score) {
        if (st > (P.stars[l.id] || 0)) { P.stars[l.id] = st; save(); }
        if (score > 0) markStep(2);
        var hs = document.querySelector(".shead .stars"); if (hs) hs.outerHTML = starHTML(P.stars[l.id] || 0);
      }
    });
  }

  /* quick revision: 10 mixed questions from lessons started (or all) */
  function viewMix(el) {
    var ls = all().filter(function (l) { return P.learn[l.id] || P.lab[l.id] || P.stars[l.id]; });
    if (ls.length < 2) ls = all();
    var pool = [];
    ls.forEach(function (l) { pool = pool.concat(lessonQs(l)); });
    el.innerHTML = '<div class="crumbs"><a href="#/">' + w("home") + "</a></div><h1>🎯 " + t("Quick revision", "مراجعة سريعة") + '</h1><p class="sub" style="margin-bottom:14px">' + esc(t("10 mixed questions from the lessons you have started: choose, match, order and true or false.", "١٠ أسئلة متنوعة من الدروس التي بدأتها: اختيار وتوصيل وترتيب وصواب أم خطأ.")) + '</p><div id="mixb"></div>';
    quizRound(el.querySelector("#mixb"), E.shuffle(pool).slice(0, 10), { tag: true, restart: function () { viewMix(el); } });
  }

  /* science home (subject = Science) */
  E.sciHome = function (el) {
    var ls = all(), done = 0, stars = 0;
    ls.forEach(function (l) { done += lessonDone(l); stars += P.stars[l.id] || 0; });
    var next = ls.filter(function (l) { return lessonDone(l) < 3; })[0] || ls[0];
    el.innerHTML = '<section class="hero sci-home"><div><h1>🔬 ' + w("sci") + "</h1><p>" + esc(w("sciSub")) + '</p><div class="btn-row" style="margin:16px 0"><a class="btn primary" href="#/sci/' + next.id + "/" + nextTab(next) + '">▶ ' + esc(E.L(next.title)) + '</a><a class="btn" href="#/sci/mix">🎯 ' + t("Quick revision", "مراجعة سريعة") + "</a></div>" +
      '<div class="hero-stats"><div class="hstat"><b>' + n(stars) + "/" + n(ls.length * 3) + "</b><span>⭐ " + t("stars", "نجمة") + '</span></div><div class="hstat"><b>' + n(ls.filter(function (l) { return P.lab[l.id]; }).length) + "/" + n(ls.length) + "</b><span>🧪 " + t("labs done", "معامل منجزة") + "</span></div></div></div>" +
      '<div class="sci-hero-art">⚗️🧲🧬🦴</div></section>' +
      '<section class="journey"><b>' + esc(t("Every lesson, step by step", "كل درس خطوة بخطوة")) + '</b><div class="jsteps">' + [["🎓", t("Official voice", "شرح رسمي")], ["📖", t("Story voice", "شرح بالقصة")], ["🔎", t("Explore the picture", "استكشف الصورة")], ["🧪", t("Simulation lab", "معمل محاكاة")], ["✅", t("Quiz + 2 spoken solutions", "اختبار + حل بطريقتين")]].map(function (x, i) {
        return '<span class="jstep"><i>' + x[0] + "</i>" + esc(x[1]) + "</span>" + (i < 4 ? '<span class="jarr">' + arrow() + "</span>" : "");
      }).join("") + "</div></section>" +
      E.sciHomeBlock().replace("sec sci-sec", "sec") +
      units().map(function (u) { return '<section class="sec"><div class="sec-head"><h2>' + u.icon + " " + esc(unitTitle(u)) + '</h2></div><div class="slist">' + u.lessons.map(lessonRow).join("") + "</div></section>"; }).join("") +
      '<p class="sub sci-note">' + esc(w("note")) + "</p>";
  };

  /* ---------- router entry (app.js calls this for #/sci...) ---------- */
  E.sciView = function (el, parts) {
    var a = parts[1] || "";
    if (!a) return viewAll(el);
    if (a === "mix") return viewMix(el);
    if (/^u\d+$/.test(a)) return viewAll(el, a);
    var l = byId(a);
    if (!l) { location.hash = "#/sci"; return; }
    viewLesson(el, l, parts[2]);
  };
  E.sciT = T;
})();
