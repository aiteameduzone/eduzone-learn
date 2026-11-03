// EduZone Learn - static single-page app. Content lives in content/*.json.
(function () {
  "use strict";

  var I18N = {
    en: {
      learn: "Learn", cur_egypt: "Egyptian National", cur_ccss: "American",
      foot: "EduZone Tech - Cairo", pick_grade: "What do you want to learn?",
      pick_grade_sub: "Interactive Math and Science, step by step.",
      grade: "Grade", soon: "Coming soon", math: "Math", science: "Science",
      lessons: "lessons", start: "Start", next: "Next", back: "Back", listen: "Listen",
      stop: "Stop", quiz: "Quiz time", check_quiz: "Start the quiz",
      explain: "Learn", example: "Example", interactive: "Try it",
      correct: "Correct! Well done.", same_amount: "Same amount shaded - these fractions are equal!",
      try_again: "Try again.", you_placed: "You placed",
      right: "Correct!", wrong: "Not quite.", question: "Question", of: "of",
      finish: "Finish", score: "Your score", again: "Try again", back_unit: "Back to lessons",
      none_for_cur: "No units mapped to this curriculum yet.", objective: "Objective",
      do_it_first: "Complete the activity to continue", continue: "Continue", term: "Term", show_step: "Show next step"
    },
    ar: {
      learn: "تعلّم", cur_egypt: "المنهج المصري", cur_ccss: "المنهج الأمريكي",
      foot: "إديوزون تك - القاهرة", pick_grade: "ماذا تريد أن تتعلّم؟",
      pick_grade_sub: "رياضيات وعلوم تفاعلية خطوة بخطوة.",
      grade: "الصف", soon: "قريبًا", math: "الرياضيات", science: "العلوم",
      lessons: "دروس", start: "ابدأ", next: "التالي", back: "السابق", listen: "استمع",
      stop: "إيقاف", quiz: "وقت الاختبار", check_quiz: "ابدأ الاختبار",
      explain: "تعلّم", example: "مثال", interactive: "جرّب بنفسك",
      correct: "إجابة صحيحة! أحسنت.", same_amount: "نفس الجزء المظلل - الكسران متكافئان!",
      try_again: "حاول مرة أخرى.", you_placed: "وضعت النقطة عند",
      right: "صحيح!", wrong: "ليست صحيحة.", question: "سؤال", of: "من",
      finish: "إنهاء", score: "نتيجتك", again: "أعد المحاولة", back_unit: "العودة للدروس",
      none_for_cur: "لا توجد وحدات لهذا المنهج بعد.", objective: "الهدف",
      do_it_first: "أكمل النشاط للمتابعة", continue: "تابع", term: "الترم", show_step: "اعرض الخطوة التالية"
    }
  };

  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  var state = {
    lang: store.get("ez_lang", "en"),
    cur: store.get("ez_cur", "egypt"),
    catalog: null,
    audio: {},
    lessons: {}
  };

  var app = document.getElementById("app");
  function t(k) { return I18N[state.lang][k] || I18N.en[k] || k; }
  function L(obj) { return obj == null ? "" : (typeof obj === "string" ? obj : (obj[state.lang] != null ? obj[state.lang] : obj.en)); }

  // ---------- text helpers ----------
  var EAST = "٠١٢٣٤٥٦٧٨٩";
  function digits(s) {
    s = String(s);
    return state.lang === "ar" ? s.replace(/[0-9]/g, function (d) { return EAST[d]; }) : s;
  }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function fracHTML(n, d) {
    return '<span class="frac" dir="ltr"><span class="n">' + digits(n) + '</span><span class="d">' + digits(d) + "</span></span>";
  }
  // Markup: [n/d] = stacked fraction, **bold**, blank line = paragraph.
  function inline(s) {
    return digits(esc(s))
      .replace(/\[([0-9٠-٩?؟]+)\/([0-9٠-٩]+)\]/g, function (_, n, d) {
        return '<span class="frac" dir="ltr"><span class="n">' + n + '</span><span class="d">' + d + "</span></span>";
      })
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }
  function rich(s) {
    return String(s || "").split(/\n\s*\n/).map(function (p) { return "<p>" + inline(p).replace(/\n/g, "<br>") + "</p>"; }).join("");
  }
  function plain(s) {
    return String(s || "").replace(/\[(\d+)\/(\d+)\]/g, "$1 / $2").replace(/\*\*/g, "");
  }

  // ---------- audio (ElevenLabs mp3 if generated, else browser TTS) ----------
  // Key must match tools/make_audio.py: djb2 over UTF-16 code units of lang + "|" + text.
  function djb2(s) {
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
    return h.toString(16);
  }
  var player = new Audio(), speakingBtn = null;
  function stopAudio() {
    player.pause();
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (speakingBtn) { speakingBtn.classList.remove("playing"); speakingBtn.textContent = "🔊 " + t("listen"); }
    speakingBtn = null;
  }
  function speak(text, btn) {
    if (speakingBtn === btn) { stopAudio(); return; }
    stopAudio();
    if (!text) return;
    speakingBtn = btn;
    btn.classList.add("playing"); btn.textContent = "■ " + t("stop");
    var key = djb2(state.lang + "|" + text);
    if (state.audio[key]) {
      player.src = "audio/" + key + ".mp3";
      player.onended = stopAudio;
      player.play().catch(stopAudio);
      return;
    }
    if (!window.speechSynthesis) { stopAudio(); return; }
    var u = new SpeechSynthesisUtterance(text);
    u.lang = state.lang === "ar" ? "ar-EG" : "en-US";
    var voices = speechSynthesis.getVoices().filter(function (v) { return v.lang.indexOf(state.lang) === 0; });
    if (voices.length) u.voice = voices[0];
    u.rate = 0.92;
    u.onend = stopAudio;
    speechSynthesis.speak(u);
  }
  function speakButton(text) {
    var b = document.createElement("button");
    b.className = "speak";
    b.textContent = "🔊 " + t("listen");
    b.onclick = function () { speak(text, b); };
    return b;
  }

  // ---------- data ----------
  function getJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(url + " " + r.status); return r.json(); });
  }
  function loadLesson(id) {
    if (state.lessons[id]) return Promise.resolve(state.lessons[id]);
    return getJSON("content/lessons/" + id + ".json").then(function (l) { state.lessons[id] = l; return l; });
  }

  // ---------- chrome ----------
  function applyLang() {
    var html = document.documentElement;
    html.lang = state.lang;
    html.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.lang === state.lang);
      b.setAttribute("aria-pressed", b.dataset.lang === state.lang);
    });
    document.querySelectorAll("[data-i18n]").forEach(function (e) { e.textContent = t(e.dataset.i18n); });
    document.getElementById("curriculum").value = state.cur;
  }
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.onclick = function () {
      if (state.lang === b.dataset.lang) return;
      state.lang = b.dataset.lang;
      store.set("ez_lang", state.lang);
      stopAudio(); applyLang(); route();
    };
  });
  document.getElementById("curriculum").onchange = function (e) {
    state.cur = e.target.value; store.set("ez_cur", state.cur); route();
  };

  function crumbs(parts) {
    return '<div class="crumbs">' + parts.map(function (p) {
      return p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : esc(p[0]);
    }).join(" › ") + "</div>";
  }
  function stars(n) { return "★★★".slice(0, n) + "☆☆☆".slice(0, 3 - n); }

  // ---------- views ----------
  // One screen: grade chips + subject chips + lesson cards. Choice is remembered.
  function viewHome(g, s) {
    var c = state.catalog;
    g = g || store.get("ez_grade", 4);
    s = s || store.get("ez_subject", "math");
    store.set("ez_grade", g); store.set("ez_subject", s);
    var prog = store.get("ez_progress", {});
    var html = "<h1>" + t("pick_grade") + '</h1><p class="sub">' + t("pick_grade_sub") + "</p>";

    var last = store.get("ez_last", null);
    if (last) {
      var lu = c.units.filter(function (u) { return u.lessons.some(function (x) { return x.id === last.id; }); })[0];
      var lm = lu && lu.lessons.filter(function (x) { return x.id === last.id; })[0];
      if (lm) html += '<a class="continue" href="#/lesson/' + lm.id + '"><span>▶ ' + t("continue") + "</span><b>" + esc(L(lm.title)) + "</b></a>";
    }

    html += '<div class="chips" role="tablist" aria-label="' + t("grade") + '">';
    for (var i = 1; i <= 12; i++) {
      var has = c.units.some(function (u) { return u.grade === i; });
      html += '<a class="chip' + (i === g ? " on" : "") + (has ? "" : " dim") + '" href="#/g/' + i + "/" + s + '">' +
        '<small>' + t("grade") + "</small>" + digits(i) + "</a>";
    }
    html += '</div><div class="chips subj">';
    Object.keys(c.subjects).forEach(function (k) {
      html += '<a class="chip wide' + (k === s ? " on" : "") + '" href="#/g/' + g + "/" + k + '">' + c.subjects[k].icon + " " + esc(L(c.subjects[k].name)) + "</a>";
    });
    html += "</div>";

    var units = c.units.filter(function (u) { return u.grade === g && u.subject === s && u.refs[state.cur]; })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
    var term = null;
    if (!units.length) html += '<div class="empty">' + t("soon") + " 🚧</div>";
    units.forEach(function (u) {
      if (u.term && u.term !== term && state.cur === "egypt") { term = u.term; html += '<div class="term">' + t("term") + " " + digits(term) + "</div>"; }
      if (!u.lessons.length) {
        html += '<div class="unit-soon"><span class="num">' + digits(u.num || "") + "</span><b>" + esc(L(u.title)) +
          '</b><span class="code">' + digits(esc(L(u.refs[state.cur]))) + '</span><span class="soon-tag">' + t("soon") + "</span></div>";
        return;
      }
      html += '<h2>' + esc(L(u.title)) + ' <span class="code">' + digits(esc(L(u.refs[state.cur]))) + "</span></h2><div class=\"cards\">";
      u.lessons.forEach(function (lsn, n) {
        var p = prog[lsn.id];
        html += '<a class="lcard" href="#/lesson/' + lsn.id + '"><span class="num">' + digits(n + 1) + "</span>" +
          "<b>" + esc(L(lsn.title)) + "</b>" +
          '<span class="meta">' + (p != null ? '<span class="stars">' + stars(p) + "</span>" : '<span class="go">' + t("start") + " ›</span>") + "</span></a>";
      });
      html += "</div>";
    });
    app.innerHTML = html;
  }

  function viewLesson(id) {
    app.innerHTML = "<p>…</p>";
    loadLesson(id).then(function (lsn) { runLesson(lsn); }).catch(function (e) { app.innerHTML = "<p>" + esc(e.message) + "</p>"; });
  }

  function findUnit(lessonId) {
    return state.catalog.units.filter(function (u) { return u.lessons.some(function (l) { return l.id === lessonId; }); })[0];
  }

  function quickCheck(c, onDone) {
    var box = document.createElement("div");
    box.className = "qcheck";
    box.innerHTML = '<div class="qc-q">🤔 ' + inline(L(c.q)) + "</div>";
    var row = document.createElement("div");
    row.className = "qc-opts";
    var msg = document.createElement("div");
    msg.className = "qc-msg";
    L(c.options).forEach(function (o, k) {
      var b = document.createElement("button");
      b.innerHTML = inline(o);
      b.setAttribute("dir", "auto");
      b.onclick = function () {
        if (box.dataset.done) return;
        if (k === c.answer) {
          box.dataset.done = 1; b.classList.add("right");
          msg.innerHTML = "🎉 " + t("right");
          onDone();
        } else {
          b.classList.add("wrong"); b.disabled = true;
          msg.innerHTML = t("try_again");
        }
      };
      row.appendChild(b);
    });
    box.appendChild(row); box.appendChild(msg);
    return box;
  }

  function runLesson(lsn) {
    store.set("ez_last", { id: lsn.id });
    var unit = findUnit(lsn.id);
    var steps = lsn.steps, total = steps.length + lsn.quiz.length, i = 0;
    var backHref = unit ? "#/g/" + unit.grade + "/" + unit.subject : "#/";

    function frame(inner, pos) {
      var refs = (lsn.refs && lsn.refs[state.cur]) || [];
      // Egypt refs are written "U4 · topic" in English: show just the unit, in the page language
      if (state.cur === "egypt") refs = refs.map(function (r) {
        var m = /^U(\d+)/.exec(r);
        return m ? (state.lang === "ar" ? "الوحدة " : "Unit ") + digits(m[1]) : r;
      }).filter(function (r, i, a) { return a.indexOf(r) === i; });
      app.innerHTML = crumbs([[t("back_unit"), backHref], [L(lsn.title), null]]) +
        "<h1>" + esc(L(lsn.title)) + "</h1>" +
        '<p class="sub"><b>' + t("objective") + ":</b> " + inline(L(lsn.objective)) + " " +
        (refs.length ? '<span class="code">' + esc(refs.join(", ")) + "</span>" : "") + "</p>" +
        '<div class="progress"><div style="width:' + Math.round((pos / total) * 100) + '%"></div></div>';
      app.appendChild(inner);
    }

    function showStep() {
      stopAudio();
      var s = steps[i], card = document.createElement("div");
      card.className = "card";
      var head = document.createElement("div");
      head.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:10px";
      head.innerHTML = '<span class="step-kind">' + t(s.type) + "</span>";
      var lines = s.lines ? L(s.lines) : [];
      head.appendChild(speakButton(L(s.say) || plain(L(s.text) + (lines.length ? ". " + lines.join(". ") : ""))));
      card.appendChild(head);
      var wctx = { lang: state.lang, num: digits, frac: fracHTML, say: t, inline: inline, L: L };
      var vis = null;
      if (s.visual) {
        vis = document.createElement("div");
        vis.className = "visual-box" + (s.check ? " hide-ops" : "");
        window.EZWidgets.visual(vis, s.visual, wctx);
        card.appendChild(vis);
      }
      var body = document.createElement("div");
      body.className = "step-text";
      body.innerHTML = rich(L(s.text));
      // Predict first: a quick tap question hides the explanation until answered.
      var pending = 0;
      if (s.check) {
        pending++;
        body.style.display = "none";
        card.appendChild(quickCheck(s.check, function () {
          body.style.display = ""; body.classList.add("pop");
          if (vis) vis.classList.remove("hide-ops");
          if (ex) ex.style.display = "";
          unlock();
        }));
      }
      card.appendChild(body);
      var ex = null;
      if (lines.length) {
        pending++;
        ex = document.createElement("div");
        ex.className = "example";
        if (s.check) ex.style.display = "none";
        var ol = document.createElement("ol");
        lines.forEach(function (x, k) {
          var li = document.createElement("li");
          li.innerHTML = inline(x);
          if (k > 0) li.style.display = "none";
          ol.appendChild(li);
        });
        var more = document.createElement("button");
        more.className = "reveal";
        more.textContent = t("show_step") + " ▸";
        var shown = 1;
        more.onclick = function () {
          ol.children[shown].style.display = ""; ol.children[shown].classList.add("pop"); shown++;
          if (shown >= lines.length) { more.remove(); unlock(); }
        };
        ex.appendChild(ol);
        if (lines.length > 1) ex.appendChild(more); else pending--;
        card.appendChild(ex);
      }
      function unlock() { pending--; if (pending <= 0) { next.disabled = false; next.title = ""; } }
      var done = s.type !== "interactive" && pending === 0;
      var nav = document.createElement("div");
      nav.className = "nav";
      var back = document.createElement("button");
      back.className = "btn secondary"; back.textContent = t("back"); back.disabled = i === 0;
      back.onclick = function () { i--; showStep(); };
      var next = document.createElement("button");
      next.className = "btn" + (i === steps.length - 1 ? " orange" : "");
      next.textContent = i === steps.length - 1 ? t("check_quiz") : t("next");
      next.disabled = !done;
      if (!done) next.title = t("do_it_first");
      next.onclick = function () { i++; if (i < steps.length) showStep(); else startQuiz(); };
      if (s.type === "interactive") {
        var w = document.createElement("div");
        w.className = "widget";
        if (s.prompt) w.innerHTML = '<div class="w-prompt">' + inline(L(s.prompt)) + "</div>";
        card.appendChild(w);
        var fn = window.EZWidgets[s.widget];
        if (fn) fn(w, s.params, {
          lang: state.lang, num: digits, frac: fracHTML, say: t, inline: inline, L: L,
          done: function () { next.disabled = false; next.title = ""; }
        });
        else { w.textContent = "Unknown widget: " + s.widget; next.disabled = false; }
      }
      nav.appendChild(back); nav.appendChild(next);
      card.appendChild(nav);
      frame(card, i);
    }

    function startQuiz() {
      var qi = 0, score = 0;
      function showQ() {
        stopAudio();
        var q = lsn.quiz[qi], card = document.createElement("div");
        card.className = "card";
        var opts = L(q.options).map(function (o, k) { return { o: o, k: k }; });
        for (var a = opts.length - 1; a > 0; a--) { var b = Math.floor(Math.random() * (a + 1)); var tmp = opts[a]; opts[a] = opts[b]; opts[b] = tmp; }
        var head = document.createElement("div");
        head.style.cssText = "display:flex;justify-content:space-between;align-items:center;gap:10px";
        head.innerHTML = '<span class="step-kind">' + t("quiz") + " · " + t("question") + " " + digits(qi + 1) + " " + t("of") + " " + digits(lsn.quiz.length) + "</span>";
        head.appendChild(speakButton(L(q.say) || plain(L(q.q))));
        card.appendChild(head);
        var qq = document.createElement("div");
        qq.className = "q"; qq.innerHTML = inline(L(q.q));
        card.appendChild(qq);
        var list = document.createElement("div");
        list.className = "opts";
        var fb = document.createElement("div");
        var nextBtn = document.createElement("button");
        nextBtn.className = "btn orange"; nextBtn.style.display = "none";
        nextBtn.textContent = qi === lsn.quiz.length - 1 ? t("finish") : t("next");
        nextBtn.onclick = function () { qi++; if (qi < lsn.quiz.length) showQ(); else showResult(); };
        opts.forEach(function (x) {
          var b = document.createElement("button");
          b.className = "opt"; b.innerHTML = inline(x.o);
          b.onclick = function () {
            var ok = x.k === q.answer;
            if (ok) score++;
            list.querySelectorAll(".opt").forEach(function (el, j) {
              el.disabled = true;
              if (opts[j].k === q.answer) el.classList.add("right");
            });
            if (!ok) b.classList.add("wrong");
            fb.className = "feedback " + (ok ? "ok" : "no");
            fb.innerHTML = "<b>" + (ok ? t("right") : t("wrong")) + "</b> " + inline(L(q.explain));
            nextBtn.style.display = "";
          };
          list.appendChild(b);
        });
        card.appendChild(list); card.appendChild(fb);
        var nav = document.createElement("div");
        nav.className = "nav"; nav.appendChild(document.createElement("span")); nav.appendChild(nextBtn);
        card.appendChild(nav);
        frame(card, steps.length + qi);
      }
      function showResult() {
        var pct = score / lsn.quiz.length;
        var st = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;
        var prog = store.get("ez_progress", {});
        prog[lsn.id] = Math.max(prog[lsn.id] || 0, st);
        store.set("ez_progress", prog);
        var card = document.createElement("div");
        card.className = "card result";
        card.innerHTML = "<p>" + t("score") + '</p><div class="big">' + digits(score) + " / " + digits(lsn.quiz.length) +
          '</div><p class="stars" style="font-size:2rem">' + stars(st) + '</p><div class="nav" style="justify-content:center">' +
          '<button class="btn secondary" id="again">' + t("again") + '</button><a class="btn" href="' + backHref + '" style="text-decoration:none">' + t("back_unit") + "</a></div>";
        frame(card, total);
        document.getElementById("again").onclick = function () { i = 0; showStep(); };
      }
      showQ();
    }

    showStep();
  }

  // ---------- router ----------
  function route() {
    stopAudio();
    var p = location.hash.replace(/^#\/?/, "").split("/");
    if (p[0] === "g" && p[1]) viewHome(+p[1], p[2]);
    else if (p[0] === "lesson" && p[1]) viewLesson(p[1]);
    else viewHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  applyLang();
  Promise.all([
    getJSON("content/catalog.json"),
    getJSON("audio/manifest.json").catch(function () { return { keys: [] }; })
  ]).then(function (r) {
    state.catalog = r[0];
    r[1].keys.forEach(function (k) { state.audio[k] = 1; });
    route();
  }).catch(function (e) { app.innerHTML = "<p>Could not load content: " + esc(e.message) + "</p>"; });
})();
