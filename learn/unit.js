// Unit page: header, listen bar with speed, and tabs
// (lessons, solved problems, lab, rules, MCQ test, search). Uses helpers from app.js (window.EZ).
(function () {
  "use strict";

  var TXT = {
    en: {
      tab_lessons: "Step by step (from zero)", tab_solved: "Solved problems", tab_lab: "Lab & simulations",
      tab_rules: "Rules & concept cards", tab_test: "MCQ test", tab_search: "Search the curriculum",
      start_zero: "Explanation from zero", solved_btn: "Solved problems", listen_bar: "Listen to this section",
      listen_sub: "Press play to hear it read aloud", speed: "Speed", play_all: "Play", pause: "Pause",
      reveal: "Show solution step", lab_title: "Interactive lab (try it yourself)", lab_sub: "Learn by experimenting, one step at a time",
      test_intro: "10 questions from the whole unit. Answers are explained.", start_test: "Start the test", new_test: "New test",
      search_ph: "Search lessons, examples and questions…", no_results: "No results.", from_lesson: "Lesson",
      lessons_n: "lessons", done_n: "done", rule: "Rule", loading: "Loading…", back_home: "All units", live: "Curriculum-aligned"
    },
    ar: {
      tab_lessons: "التعليم التدريجي (من الصفر)", tab_solved: "المسائل المحلولة والتطبيقات", tab_lab: "المعمل والمحاكاة التفاعلية",
      tab_rules: "القوانين وبطاقات المفاهيم", tab_test: "اختبار MCQ", tab_search: "البحث في المنهج",
      start_zero: "الشرح المتدرج من الصفر", solved_btn: "المسائل المحلولة", listen_bar: "استمع للشرح بالصوت الواضح",
      listen_sub: "اضغط للاستماع إلى الشرح صوتيًا", speed: "السرعة", play_all: "تشغيل", pause: "إيقاف",
      reveal: "اعرض خطوة الحل", lab_title: "المعمل التفاعلي للوحدة (جرّب بنفسك)", lab_sub: "تعلّم المفاهيم بالتجربة المباشرة خطوة بخطوة",
      test_intro: "١٠ أسئلة من الوحدة كلها، مع شرح كل إجابة.", start_test: "ابدأ الاختبار", new_test: "اختبار جديد",
      search_ph: "ابحث في الدروس والأمثلة والأسئلة…", no_results: "لا توجد نتائج.", from_lesson: "الدرس",
      lessons_n: "دروس", done_n: "مكتمل", rule: "قاعدة", loading: "جارٍ التحميل…", back_home: "كل الوحدات", live: "تطبيق حي مطابق للمنهج"
    }
  };
  var TABS = [
    { id: "lessons", icon: "💡" }, { id: "solved", icon: "🧮" }, { id: "lab", icon: "🧪" },
    { id: "rules", icon: "⚡" }, { id: "test", icon: "✅" }, { id: "search", icon: "🔎" }
  ];
  // Lab tools per unit number (Grade 4 math)
  var LABS = { 1: ["place-explorer"], 2: ["column-calc"], 3: ["converter"], 4: ["area-lab"], 5: ["array-lab"],
               6: ["factor-finder"], 7: ["divide-lab"], 8: ["order-ops"], 9: ["fraction-lab"] };

  function x(k) { var E = window.EZ; return TXT[E.state.lang][k] || TXT.en[k]; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ---------- listen bar: plays a queue of narration texts at the chosen speed ----------
  function listenBar(getQueue) {
    var E = window.EZ;
    var bar = el("div", "listen-bar");
    var play = el("button", "lb-play", "▶");
    play.setAttribute("aria-label", x("play_all"));
    var info = el("div", "lb-info", "<b>🔊 " + x("listen_bar") + "</b><small>" + x("listen_sub") + "</small>");
    var sp = el("div", "lb-speed");
    [0.8, 1, 1.25].forEach(function (r) {
      var b = el("button", E.rate() === r ? "on" : "", E.digits(r) + "x");
      b.setAttribute("dir", "ltr");
      b.onclick = function () { E.setRate(r); sp.querySelectorAll("button").forEach(function (q) { q.classList.remove("on"); }); b.classList.add("on"); };
      sp.appendChild(b);
    });
    var playing = false;
    play.onclick = function () {
      if (playing) { E.stopAudio(); return; }
      var q = getQueue();
      if (!q.length) return;
      playing = true; play.textContent = "❚❚";
      E.playQueue(q, function () { playing = false; play.textContent = "▶"; });
    };
    bar.appendChild(play); bar.appendChild(info); bar.appendChild(sp);
    return bar;
  }

  // ---------- data ----------
  function unitById(id) { return window.EZ.state.catalog.units.filter(function (u) { return u.id === id; })[0]; }
  function loadUnit(u) { return Promise.all(u.lessons.map(function (l) { return window.EZ.loadLesson(l.id); })); }
  function stepSay(s) {
    var E = window.EZ, lines = s.lines ? E.L(s.lines) : [];
    return E.L(s.say) || E.plain(E.L(s.text) + (lines.length ? ". " + lines.join(". ") : ""));
  }

  // ---------- page ----------
  function view(id, tab) {
    var E = window.EZ, app = document.getElementById("app"), u = unitById(id);
    if (!u) { app.innerHTML = "<p>Unit not found.</p>"; return; }
    tab = tab || "lessons";
    var prog = E.store.get("ez_progress", {});
    var done = u.lessons.filter(function (l) { return prog[l.id] != null; }).length;
    var home = "#/g/" + u.grade + "/" + u.subject;

    app.innerHTML = "";
    var head = el("section", "unit-hero");
    head.innerHTML = E.crumbs([[x("back_home"), home], [E.L(u.title), null]]) +
      '<h1>' + E.digits(E.t("unit_word") + " " + u.num) + ": " + E.esc(E.L(u.title)) + "</h1>" +
      '<p class="sub">' + u.lessons.map(function (l) { return E.esc(E.L(l.title)); }).join("، ") + "</p>" +
      '<div class="hero-meta"><span class="code">' + E.digits(E.esc(E.L(u.refs[E.state.cur] || ""))) + "</span>" +
      '<span class="code">' + E.digits(done + " / " + u.lessons.length) + " " + x("done_n") + "</span></div>";
    var acts = el("div", "hero-actions");
    var b1 = el("a", "btn orange", "✨ " + x("start_zero")); b1.href = u.lessons.length ? "#/lesson/" + u.lessons[0].id : home;
    var b2 = el("a", "btn ghost", "🧮 " + x("solved_btn")); b2.href = "#/unit/" + u.id + "/solved";
    acts.appendChild(b1); acts.appendChild(b2); head.appendChild(acts);
    app.appendChild(head);

    var body = el("div");
    var queue = [];
    app.appendChild(listenBar(function () { return queue; }));

    var tabs = el("nav", "unit-tabs");
    TABS.forEach(function (tb) {
      var a = el("a", tb.id === tab ? "on" : "", tb.icon + " " + x("tab_" + tb.id));
      a.href = "#/unit/" + u.id + "/" + tb.id;
      if (tb.id === "lessons") a.innerHTML += ' <span class="pill-n">' + E.digits(u.lessons.length) + "</span>";
      tabs.appendChild(a);
    });
    app.appendChild(tabs);
    app.appendChild(body);
    var on = tabs.querySelector(".on"); if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });

    body.innerHTML = '<p class="sub">' + x("loading") + "</p>";
    loadUnit(u).then(function (lessons) {
      body.innerHTML = "";
      ({ lessons: tabLessons, solved: tabSolved, lab: tabLab, rules: tabRules, test: tabTest, search: tabSearch }[tab] || tabLessons)(body, u, lessons, queue);
    });
  }

  function tabLessons(body, u, lessons, queue) {
    var E = window.EZ, prog = E.store.get("ez_progress", {}), cards = el("div", "cards");
    lessons.forEach(function (l, i) {
      var p = prog[l.id];
      var a = el("a", "lcard");
      a.href = "#/lesson/" + l.id;
      a.innerHTML = '<span class="num">' + E.digits(i + 1) + "</span><b>" + E.esc(E.L(l.title)) + "</b>" +
        '<small class="obj">' + E.inline(E.L(l.objective)) + "</small>" +
        '<span class="meta">' + (p != null ? '<span class="stars">' + E.stars(p) + "</span>" : '<span class="go">' + E.t("start") + " ›</span>") + "</span>";
      cards.appendChild(a);
      queue.push(E.plain(E.L(l.title) + ". " + E.L(l.objective)));
    });
    body.appendChild(cards);
  }

  function solvedCard(s, l, E, queue) {
    var card = el("div", "card solved");
    card.appendChild(el("div", "step-kind", "🧮 " + E.esc(E.L(l.title))));
    if (s.visual) { var v = el("div", "visual-box"); window.EZWidgets.visual(v, s.visual, E.wctx()); card.appendChild(v); }
    card.appendChild(el("div", "step-text", E.rich(E.L(s.text))));
    var lines = E.L(s.lines) || [];
    if (lines.length) {
      var ex = el("div", "example"), ol = el("ol");
      lines.forEach(function (ln, k) { var li = el("li", null, E.inline(ln)); if (k) li.style.display = "none"; ol.appendChild(li); });
      ex.appendChild(ol);
      if (lines.length > 1) {
        var more = el("button", "reveal", x("reveal") + " ▸"), shown = 1;
        more.onclick = function () { ol.children[shown].style.display = ""; ol.children[shown].classList.add("pop"); if (++shown >= lines.length) more.remove(); };
        ex.appendChild(more);
      }
      card.appendChild(ex);
    }
    var say = stepSay(s);
    var head = card.firstChild; head.style.display = "flex"; head.style.justifyContent = "space-between"; head.style.gap = "8px";
    head.appendChild(E.speakButton(say));
    queue.push(say);
    return card;
  }

  function tabSolved(body, u, lessons, queue) {
    var E = window.EZ;
    lessons.forEach(function (l) {
      l.steps.forEach(function (s) { if (s.type === "example") body.appendChild(solvedCard(s, l, E, queue)); });
    });
  }

  function tabRules(body, u, lessons, queue) {
    var E = window.EZ, grid = el("div", "rule-grid");
    lessons.forEach(function (l) {
      var s = l.steps[l.steps.length - 1];
      if (s.type !== "explain") s = l.steps.filter(function (q) { return q.type === "explain"; }).pop();
      if (!s) return;
      var c = el("div", "rule-card");
      c.innerHTML = '<span class="lab-badge">⚡ ' + x("rule") + "</span><h3>" + E.esc(E.L(l.title)) + "</h3>";
      if (s.visual) { var v = el("div", "visual-box"); window.EZWidgets.visual(v, s.visual, E.wctx()); c.appendChild(v); }
      c.appendChild(el("div", "rule-text", E.rich(E.L(s.text))));
      var say = stepSay(s);
      c.appendChild(E.speakButton(say));
      queue.push(say);
      grid.appendChild(c);
    });
    body.appendChild(grid);
  }

  function tabLab(body, u, lessons, queue) {
    var E = window.EZ, tools = LABS[u.num] || [];
    var wrap = el("div", "card lab");
    wrap.innerHTML = '<div class="lab-head"><div><h2>🧪 ' + x("lab_title") + '</h2><p class="sub">' + x("lab_sub") + '</p></div><span class="live-pill">' + x("live") + "</span></div>";
    var ctx = { lang: E.state.lang, num: E.digits, frac: E.fracHTML, T: function (en, ar) { return E.state.lang === "ar" ? ar : en; } };
    tools.forEach(function (name) { var box = el("div", "lab-tool"); if (window.EZLab[name]) window.EZLab[name](box, ctx); wrap.appendChild(box); });
    body.appendChild(wrap);
    queue.push(x("lab_title") + ". " + x("lab_sub"));
  }

  function tabTest(body, u, lessons, queue) {
    var E = window.EZ;
    var pool = [];
    lessons.forEach(function (l) { l.quiz.forEach(function (q) { pool.push(q); }); });
    var intro = el("div", "card result");
    intro.innerHTML = '<div class="big">✅</div><p>' + x("test_intro") + "</p>";
    var go = el("button", "btn orange", x("start_test"));
    go.onclick = function () { run(shuffle(pool.slice()).slice(0, 10)); };
    intro.appendChild(go);
    body.appendChild(intro);
    function run(qs) {
      var i = 0, score = 0;
      function show() {
        E.stopAudio(); body.innerHTML = "";
        var q = qs[i], card = el("div", "card");
        var head = el("div"); head.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:10px";
        head.innerHTML = '<span class="step-kind">' + E.t("question") + " " + E.digits(i + 1) + " " + E.t("of") + " " + E.digits(qs.length) + "</span>";
        head.appendChild(E.speakButton(E.L(q.say) || E.plain(E.L(q.q))));
        card.appendChild(head);
        card.appendChild(el("div", "q", E.inline(E.L(q.q))));
        var list = el("div", "opts"), fb = el("div"), nx = el("button", "btn orange", i === qs.length - 1 ? E.t("finish") : E.t("next"));
        nx.style.display = "none";
        nx.onclick = function () { if (++i < qs.length) show(); else finish(); };
        var opts = shuffle(E.L(q.options).map(function (o, k) { return { o: o, k: k }; }));
        opts.forEach(function (o) {
          var b = el("button", "opt", E.inline(o.o));
          b.onclick = function () {
            var ok = o.k === q.answer; if (ok) score++;
            list.querySelectorAll(".opt").forEach(function (z, j) { z.disabled = true; if (opts[j].k === q.answer) z.classList.add("right"); });
            if (!ok) b.classList.add("wrong");
            fb.className = "feedback " + (ok ? "ok" : "no");
            fb.innerHTML = "<b>" + (ok ? E.t("right") : E.t("wrong")) + "</b> " + E.inline(E.L(q.explain));
            nx.style.display = "";
          };
          list.appendChild(b);
        });
        card.appendChild(list); card.appendChild(fb);
        var nav = el("div", "nav"); nav.appendChild(el("span")); nav.appendChild(nx); card.appendChild(nav);
        body.appendChild(card);
      }
      function finish() {
        body.innerHTML = "";
        var c = el("div", "card result");
        c.innerHTML = "<p>" + E.t("score") + '</p><div class="big">' + E.digits(score + " / " + qs.length) + "</div>";
        var again = el("button", "btn orange", x("new_test"));
        again.onclick = function () { run(shuffle(pool.slice()).slice(0, 10)); };
        c.appendChild(again); body.appendChild(c);
      }
      show();
    }
  }

  // Search across every lesson of the grade (all units), in the current language.
  function tabSearch(body, u, lessons, queue) {
    var E = window.EZ, inp = el("input", "lab-in wide search-in");
    inp.placeholder = x("search_ph"); inp.type = "search";
    var res = el("div", "search-res");
    body.appendChild(inp); body.appendChild(res);
    var all = E.state.catalog.units.filter(function (v) { return v.grade === u.grade && v.subject === u.subject && v.lessons.length; });
    Promise.all(all.map(loadUnit)).then(function (groups) {
      var docs = [];
      groups.forEach(function (ls) {
        ls.forEach(function (l) {
          var bits = [E.L(l.title), E.L(l.objective)];
          l.steps.forEach(function (s) { bits.push(E.L(s.text)); (E.L(s.lines) || []).forEach(function (ln) { bits.push(ln); }); });
          l.quiz.forEach(function (q) { bits.push(E.L(q.q)); });
          bits.forEach(function (b) { if (b) docs.push({ l: l, text: E.plain(b) }); });
        });
      });
      function norm(s) { return s.toLowerCase().replace(/[ً-ْـ]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي"); }
      function run() {
        var q = norm(inp.value.trim());
        res.innerHTML = "";
        if (q.length < 2) return;
        var seen = {}, hits = docs.filter(function (d) { return norm(d.text).indexOf(q) >= 0; }).filter(function (d) {
          var k = d.l.id + d.text; if (seen[k]) return false; seen[k] = 1; return true;
        }).slice(0, 30);
        if (!hits.length) { res.innerHTML = '<p class="sub">' + x("no_results") + "</p>"; return; }
        hits.forEach(function (d) {
          var a = el("a", "lesson-row");
          a.href = "#/lesson/" + d.l.id;
          a.innerHTML = "<span>" + E.inline(d.text.length > 140 ? d.text.slice(0, 140) + "…" : d.text) + "</span><span class=\"code\">" + E.esc(E.L(d.l.title)) + "</span>";
          res.appendChild(a);
        });
      }
      inp.oninput = run;
      inp.focus();
    });
  }

  window.EZUnit = { view: view };
})();
