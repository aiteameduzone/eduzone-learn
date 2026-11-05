/* EduZone Learn v3 - shared core: language, numbers, speech, tool frame.
   Loaded first. Tools (tools-*.js), practice generators and app.js build on window.EZ3. */
(function () {
  "use strict";
  var EAST = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var lang = store.get("ez3_lang", null);
  if (!lang) { try { lang = localStorage.getItem("ez-hub-lang") || "en"; } catch (e) { lang = "en"; } }
  if (["en", "ar", "eg"].indexOf(lang) < 0) lang = "en";

  var EZ3 = {
    store: store,
    tools: {},
    get lang() { return lang; },
    isAr: function () { return lang !== "en"; },
    setLang: function (l) {
      lang = l; store.set("ez3_lang", l);
      try { localStorage.setItem("ez-hub-lang", l); } catch (e) {}
      document.documentElement.lang = l === "en" ? "en" : "ar";
      document.documentElement.dir = l === "en" ? "ltr" : "rtl";
    },
    // t(en, ar, eg?) - eg (Egyptian colloquial) falls back to formal Arabic
    t: function (en, ar, eg) { return lang === "en" ? en : (lang === "eg" && eg ? eg : (ar == null ? en : ar)); },
    // pick a {en, ar} object
    L: function (o) { return o == null ? "" : typeof o === "string" ? o : (lang === "en" ? o.en : (o[lang] || o.ar || o.en)); },
    // localise digits in any string or number
    d: function (s) { s = String(s); return lang === "en" ? s : s.replace(/[0-9]/g, function (c) { return EAST[c]; }); },
    // format a number: thousands separators, real minus sign, local digits
    n: function (x) {
      if (typeof x !== "number") return EZ3.d(x);
      var neg = x < 0, a = Math.abs(x);
      var s = Number.isInteger(a) ? a.toLocaleString("en-US") : String(a);
      if (lang !== "en") s = s.replace(/,/g, "٬").replace(/\./g, "٫");
      return (neg ? "−" : "") + EZ3.d(s);
    },
    // parse what a child typed: Arabic digits, separators, spaces, minus forms
    parse: function (s) {
      s = String(s == null ? "" : s).trim()
        .replace(/[٠-٩]/g, function (c) { return String(EAST.indexOf(c)); })
        .replace(/[۰-۹]/g, function (c) { return String("۰۱۲۳۴۵۶۷۸۹".indexOf(c)); })
        .replace(/[−–—]/g, "-").replace(/[,٬\s]/g, "").replace(/٫/g, ".");
      if (!/^-?\d+(\.\d+)?$/.test(s)) return NaN;
      return Number(s);
    },
    rand: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    pick: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle: function (arr) {
      var a = arr.slice();
      for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
      return a;
    },
    esc: function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); },
    el: function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; },
    // stacked-free fraction text a/b with local digits, e.g. "3/4" or "٣/٤"
    frac: function (a, b) { return EZ3.d(a) + "/" + EZ3.d(b); }
  };

  /* ---------- speech (browser voices; Arabic prefers an ar-EG voice) ---------- */
  var voiceOn = store.get("ez3_voice", true);
  EZ3.voiceOn = function () { return voiceOn; };
  EZ3.setVoice = function (v) { voiceOn = v; store.set("ez3_voice", v); if (!v) EZ3.hush(); };
  EZ3.hush = function () { try { speechSynthesis.cancel(); } catch (e) {} };
  EZ3.speak = function (text) {
    if (!voiceOn || !("speechSynthesis" in window) || !text) return;
    var clean = String(text).replace(/<[^>]+>/g, " ").replace(/[*_#]/g, "").replace(/−/g, "-");
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(clean);
      var want = lang === "en" ? "en" : "ar";
      u.lang = lang === "en" ? "en-GB" : "ar-EG";
      var vs = speechSynthesis.getVoices().filter(function (v) { return v.lang.toLowerCase().indexOf(want) === 0; });
      var female = vs.filter(function (v) { return /female|woman|zira|samantha|serena|kate|salma|laila|mariam|hoda|amira|zeina/i.test(v.name); });
      if (female.length) u.voice = female[0]; else if (vs.length) u.voice = vs[0];
      u.rate = 0.95;
      speechSynthesis.speak(u);
    } catch (e) {}
  };

  /* ---------- celebration ---------- */
  EZ3.toast = function (msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = EZ3.el("div", "toast"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(EZ3._tt); EZ3._tt = setTimeout(function () { t.classList.remove("show"); }, 1800);
  };
  EZ3.burst = function () {
    var b = EZ3.el("div", "burst"), icons = ["⭐", "✨", "🎉", "🌟", "💫"];
    for (var i = 0; i < 26; i++) {
      var s = EZ3.el("i", null, icons[i % icons.length]);
      s.style.left = Math.random() * 100 + "vw"; s.style.animationDelay = Math.random() * 0.4 + "s";
      b.appendChild(s);
    }
    document.body.appendChild(b); setTimeout(function () { b.remove(); }, 2000);
  };

  /* ---------- tool frame API ----------
     A tool is EZ3.tools[name] = function (host, cfg, api) { ... }.
     api = {
       t, n, d, L, rand, pick, shuffle, esc, el, frac,   // same as EZ3
       frame()            -> { goal(text), onNew(fn), stage, controls, readout(html), hint(text) }
       check(ok)          -> call after every change; first ok for the current goal celebrates once
       stepper(label, min, max, value, onChange, step?) -> element (− value +)
       seg(options[[value,label]], value, onChange)     -> segmented buttons element
       say(text)          -> speaks if the voice is on
     }                                                                          */
  EZ3.makeToolApi = function (host, onWin) {
    var won = false, frameEls = null;
    var api = {
      t: EZ3.t, n: EZ3.n, d: EZ3.d, L: EZ3.L, rand: EZ3.rand, pick: EZ3.pick, shuffle: EZ3.shuffle,
      esc: EZ3.esc, el: EZ3.el, frac: EZ3.frac, say: EZ3.speak,
      frame: function () {
        host.innerHTML = "";
        var root = EZ3.el("div", "tool");
        var goal = EZ3.el("div", "tool-goal");
        goal.innerHTML = '<span class="goal-ico">🎯</span><span class="goal-text"></span>';
        var newBtn = EZ3.el("button", "btn sm", EZ3.t("New goal ↻", "هدف جديد ↻", "هدف جديد ↻"));
        newBtn.type = "button"; goal.appendChild(newBtn);
        var stage = EZ3.el("div", "tool-stage"); stage.setAttribute("dir", "ltr");
        var controls = EZ3.el("div", "tool-controls");
        var readout = EZ3.el("div", "tool-readout"); readout.setAttribute("aria-live", "polite");
        var hint = EZ3.el("div", "tool-hint");
        root.appendChild(goal); root.appendChild(stage); root.appendChild(controls); root.appendChild(readout); root.appendChild(hint);
        host.appendChild(root);
        var newFn = null;
        newBtn.onclick = function () { if (newFn) newFn(); };
        frameEls = {
          root: root, stage: stage, controls: controls,
          goal: function (text) {
            won = false; goal.classList.remove("won");
            goal.querySelector(".goal-ico").textContent = "🎯";
            goal.querySelector(".goal-text").innerHTML = text;
          },
          onNew: function (fn) { newFn = fn; },
          readout: function (html) { readout.innerHTML = html; },
          hint: function (text) { hint.innerHTML = text || ""; }
        };
        return frameEls;
      },
      check: function (ok) {
        if (!ok || won) return;
        won = true;
        if (frameEls) {
          var g = frameEls.root.querySelector(".tool-goal");
          g.classList.add("won"); g.querySelector(".goal-ico").textContent = "⭐";
        }
        EZ3.burst();
        EZ3.toast(EZ3.t("Goal reached! ⭐", "أحسنت! حققت الهدف ⭐", "عاش! خلصت الهدف ⭐"));
        if (onWin) onWin();
      },
      stepper: function (label, min, max, value, onChange, step) {
        step = step || 1;
        var w = EZ3.el("div", "stepper-wrap");
        if (label) w.appendChild(EZ3.el("label", null, label));
        var s = EZ3.el("div", "stepper"); s.setAttribute("dir", "ltr");
        var minus = EZ3.el("button", null, "−"), out = EZ3.el("output"), plus = EZ3.el("button", null, "+");
        minus.type = plus.type = "button";
        minus.setAttribute("aria-label", EZ3.t("less", "أقل")); plus.setAttribute("aria-label", EZ3.t("more", "أكثر"));
        function show() { out.textContent = EZ3.n(value); minus.disabled = value <= min; plus.disabled = value >= max; }
        minus.onclick = function () { value = Math.max(min, value - step); show(); onChange(value); };
        plus.onclick = function () { value = Math.min(max, value + step); show(); onChange(value); };
        s.appendChild(minus); s.appendChild(out); s.appendChild(plus); w.appendChild(s);
        w.set = function (v) { value = v; show(); };
        w.get = function () { return value; };
        show();
        return w;
      },
      seg: function (options, value, onChange) {
        var s = EZ3.el("div", "seg");
        options.forEach(function (o) {
          var b = EZ3.el("button", o[0] === value ? "on" : "", o[1]); b.type = "button";
          b.onclick = function () {
            value = o[0];
            Array.prototype.forEach.call(s.children, function (c) { c.classList.remove("on"); });
            b.classList.add("on"); onChange(value);
          };
          s.appendChild(b);
        });
        return s;
      }
    };
    return api;
  };

  window.EZ3 = EZ3;
  EZ3.setLang(lang);
})();
