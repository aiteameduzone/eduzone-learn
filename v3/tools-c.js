/* EduZone Learn v3 - hands-on tools, part C:
   clock, converter, datachart, venn, spinner, fraction, hundred.
   Contract: EZ3.tools[name] = function (host, cfg, api) - see EZ3.makeToolApi in core.js. */
(function () {
  "use strict";
  var PI = Math.PI;

  /* ---------- private helpers (shared by the tools in this file) ---------- */
  function R(x) { return Math.round(x * 10) / 10; }
  function two(x) { return (x < 10 ? "0" : "") + x; }
  function gcd(a, b) { return b ? gcd(b, a % b) : a; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function range(a, b) { var r = []; for (var i = a; i <= b; i++) r.push(i); return r; }
  function flags(k, on) { var r = []; for (var i = 0; i < k; i++) r.push(i < on); return r; }
  // keep a pure-maths expression (digits, + − = /) reading left to right inside Arabic text
  function ltr(s) { return '<span dir="ltr">' + s + "</span>"; }
  function svgOpen(w, h, maxW, cls) {
    return "<svg" + (cls ? ' class="' + cls + '"' : "") + ' viewBox="0 0 ' + w + " " + h +
      '" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:' + maxW + 'px">';
  }
  // text centred on (x, y). Colour must go in extra as style="fill:..." (.svg-label sets fill).
  function txt(x, y, s, size, extra, anchor) {
    return '<text x="' + R(x) + '" y="' + R(y) + '" font-size="' + size + '" text-anchor="' + (anchor || "middle") +
      '" dominant-baseline="central" class="svg-label"' + (extra || "") + ">" + s + "</text>";
  }
  // same, but long labels are split over two lines
  function txt2(x, y, s, size, extra) {
    if (s.length <= 14 || s.indexOf(" ") < 0) return txt(x, y, s, size, extra);
    var mid = Math.floor(s.length / 2), i = s.lastIndexOf(" ", mid), j = s.indexOf(" ", mid);
    var k = i < 0 ? j : j < 0 ? i : (mid - i <= j - mid ? i : j);
    return '<text x="' + R(x) + '" y="' + R(y) + '" font-size="' + size + '" text-anchor="middle" class="svg-label"' + (extra || "") +
      '><tspan x="' + R(x) + '" dy="-0.25em">' + s.slice(0, k) + '</tspan><tspan x="' + R(x) + '" dy="1.15em">' + s.slice(k + 1) + "</tspan></text>";
  }
  function line(x1, y1, x2, y2, col, w, extra) {
    return '<line x1="' + R(x1) + '" y1="' + R(y1) + '" x2="' + R(x2) + '" y2="' + R(y2) + '" stroke="' + col +
      '" stroke-width="' + w + '"' + (extra || "") + "/>";
  }
  function rect(x, y, w, h, fill, extra) {
    return '<rect x="' + R(x) + '" y="' + R(y) + '" width="' + R(w) + '" height="' + R(h) + '" fill="' + fill + '"' + (extra || "") + "/>";
  }
  // pie slice i of n, clockwise from 12 o'clock; off = -0.5 centres slice 0 on the top
  function slice(cx, cy, r, i, n, off, fill, extra) {
    var a0 = (i + off) / n * 2 * PI, a1 = (i + 1 + off) / n * 2 * PI;
    return '<path d="M' + cx + " " + cy + " L" + R(cx + r * Math.sin(a0)) + " " + R(cy - r * Math.cos(a0)) +
      " A" + r + " " + r + " 0 " + (a1 - a0 > PI ? 1 : 0) + " 1 " + R(cx + r * Math.sin(a1)) + " " + R(cy - r * Math.cos(a1)) +
      ' Z" fill="' + fill + '"' + (extra || "") + "/>";
  }
  function button(html, onClick, aria, cls) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "btn sm" + (cls ? " " + cls : ""); b.innerHTML = html;
    if (aria) b.setAttribute("aria-label", aria);
    b.onclick = onClick;
    return b;
  }
  // pointer position in viewBox units (svg is drawn with width:100%, height:auto, so the ratio is kept)
  function svgPoint(svg, e, w, h) {
    var r = svg.getBoundingClientRect();
    return { x: (e.clientX - r.left) * w / r.width, y: (e.clientY - r.top) * h / r.height };
  }
  function tapped(e, attr) { return e.target && e.target.closest ? e.target.closest("[" + attr + "]") : null; }
  function shake(el) {
    if (el && el.animate) el.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" },
      { transform: "translateX(-5px)" }, { transform: "translateX(0)" }], { duration: 380 });
  }
  function setSeg(seg, idx) { Array.prototype.forEach.call(seg.children, function (c, i) { c.classList.toggle("on", i === idx); }); }
  // labelled row of small buttons: items = [[text, aria, fn], ...]
  function btnGroup(api, label, items) {
    var w = api.el("div", "stepper-wrap");
    if (label) w.appendChild(api.el("label", null, label));
    var row = api.el("div", "btn-row"); row.setAttribute("dir", "ltr");
    items.forEach(function (it) { row.appendChild(button(it[0], it[2], it[1])); });
    w.appendChild(row);
    return w;
  }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  function tween(ms, step, done) {
    if (reduced() || !window.requestAnimationFrame) { step(1); done(); return; }
    var t0 = null;
    function fr(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / ms);
      step(p);
      if (p < 1) window.requestAnimationFrame(fr); else done();
    }
    window.requestAnimationFrame(fr);
  }

  /* ================= 1. clock  (modes: 24h, duration) ================= */
  EZ3.tools.clock = function (host, cfg, api) {
    var t = api.t, f = api.frame(), mode = cfg.mode === "duration" ? "duration" : "24h";
    var HE = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    var HA = ["الثانية عشرة", "الواحدة", "الثانية", "الثالثة", "الرابعة", "الخامسة", "السادسة", "السابعة", "الثامنة", "التاسعة", "العاشرة", "الحادية عشرة"];
    var CTX = [["The film", "الفيلم"], ["The swimming lesson", "درس السباحة"], ["The school play", "العرض المسرحي"],
      ["The TV programme", "البرنامج التلفزيوني"], ["The race", "السباق"], ["Football practice", "تدريب كرة القدم"]];
    var now = 9 * 60, goal = -1, start = 0, dur = 0, kind = api.rand(0, 2);
    var dmode = mode === "duration", VW = dmode ? 480 : 300, VH = dmode ? 320 : 300;
    var big = dmode ? { cx: 330, cy: 172, r: 140 } : { cx: 150, cy: 150, r: 140 };
    var small = dmode ? { cx: 85, cy: 182, r: 72 } : null;
    var svg = null;

    function h12(v) { var h = Math.floor(v / 60) % 12; return h === 0 ? 12 : h; }
    function ap(v) { return v < 720 ? t("am", "صباحًا") : t("pm", "مساءً"); }
    function t12(v) { return api.d(h12(v) + ":" + two(v % 60)) + " " + ap(v); }
    function t24(v) { return api.d(two(Math.floor(v / 60)) + ":" + two(v % 60)); }
    function durT(x) {
      var h = Math.floor(x / 60), m = x % 60, en = [], ar = [];
      if (h) { en.push(api.n(h) + " h"); ar.push(api.n(h) + " ساعة"); }
      if (m || !h) { en.push(api.n(m) + " min"); ar.push(api.n(m) + (m >= 3 && m <= 10 ? " دقائق" : " دقيقة")); }
      return t(en.join(" "), ar.join(" و"));
    }
    function words(v) {
      var h = Math.floor(v / 60), m = v % 60, cur = h % 12, next = (h + 1) % 12, en, ar;
      var PE = { 5: "five past ", 10: "ten past ", 15: "quarter past ", 30: "half past " };
      var TE = { 45: "quarter to ", 50: "ten to ", 55: "five to " };
      var PA = { 5: " وخمس دقائق", 10: " وعشر دقائق", 15: " والربع", 30: " والنصف" };
      var TA = { 45: " إلا ربعًا", 50: " إلا عشر دقائق", 55: " إلا خمس دقائق" };
      if (m === 0) { en = HE[cur] + " o'clock"; ar = HA[cur] + " تمامًا"; }
      else if (m <= 30) { en = PE[m] + HE[cur]; ar = HA[cur] + PA[m]; }
      else { en = TE[m] + HE[next]; ar = HA[next] + TA[m]; }
      var part = h < 12 ? ["in the morning", "صباحًا"] : h < 17 ? ["in the afternoon", "بعد الظهر"] : ["in the evening", "مساءً"];
      return t(en + " " + part[0], ar + " " + part[1]);
    }
    function face(c, key) {
      var s = '<circle cx="' + c.cx + '" cy="' + c.cy + '" r="' + c.r + '" fill="var(--card)" stroke="var(--ink)" stroke-width="' + R(c.r * 0.045) + '"/>';
      for (var i = 0; i < 60; i++) {
        var a = i * PI / 30, five = i % 5 === 0, r1 = c.r * (five ? 0.83 : 0.89), r2 = c.r * 0.94;
        s += line(c.cx + Math.sin(a) * r1, c.cy - Math.cos(a) * r1, c.cx + Math.sin(a) * r2, c.cy - Math.cos(a) * r2,
          "var(--ink)", five ? R(c.r * 0.022) : R(c.r * 0.009));
      }
      for (var k = 1; k <= 12; k++) {
        var b = k * PI / 6;
        s += txt(c.cx + Math.sin(b) * c.r * 0.68, c.cy - Math.cos(b) * c.r * 0.68, api.n(k), R(c.r * 0.17));
      }
      s += txt(c.cx, c.cy + c.r * 0.38, "", R(c.r * 0.12), ' data-ap="' + key + '" style="fill:var(--muted)"');
      s += line(c.cx, c.cy, c.cx, c.cy - c.r * 0.5, "var(--blue)", R(c.r * 0.07), ' stroke-linecap="round" data-hh="' + key + '"');
      s += line(c.cx, c.cy, c.cx, c.cy - c.r * 0.78, "var(--orange)", R(c.r * 0.04), ' stroke-linecap="round" data-mh="' + key + '"');
      return s + '<circle cx="' + c.cx + '" cy="' + c.cy + '" r="' + R(c.r * 0.055) + '" fill="var(--ink)"/>';
    }
    function hands(c, v) {
      var ha = (v % 720) / 720 * 2 * PI, ma = (v % 60) / 60 * 2 * PI;
      c.h.setAttribute("x2", R(c.cx + Math.sin(ha) * c.r * 0.5)); c.h.setAttribute("y2", R(c.cy - Math.cos(ha) * c.r * 0.5));
      c.m.setAttribute("x2", R(c.cx + Math.sin(ma) * c.r * 0.78)); c.m.setAttribute("y2", R(c.cy - Math.cos(ma) * c.r * 0.78));
      c.ap.textContent = ap(v);
    }
    function build() {
      var s = svgOpen(VW, VH, dmode ? 540 : 340);
      if (small) {
        s += txt(small.cx, 92, t("Starts", "يبدأ"), 18) + face(small, "s") + txt(small.cx, 276, t12(start), 17) +
          txt(big.cx, 14, t("Ends", "ينتهي"), 18);
      }
      f.stage.innerHTML = s + face(big, "b") + "</svg>";
      svg = f.stage.querySelector("svg");
      svg.style.touchAction = "none"; // so the minute hand can be dragged on touch screens
      [[big, "b"], [small, "s"]].forEach(function (p) {
        if (!p[0]) return;
        p[0].h = svg.querySelector('[data-hh="' + p[1] + '"]');
        p[0].m = svg.querySelector('[data-mh="' + p[1] + '"]');
        p[0].ap = svg.querySelector('[data-ap="' + p[1] + '"]');
      });
      if (small) hands(small, start);
      bindDrag();
    }
    function bindDrag() {
      var drag = false;
      function at(e) {
        var p = svgPoint(svg, e, VW, VH), dx = p.x - big.cx, dy = p.y - big.cy;
        return { dx: dx, dy: dy, d: Math.sqrt(dx * dx + dy * dy) };
      }
      function move(e) {
        var p = at(e), a = Math.atan2(p.dx, -p.dy);
        if (a < 0) a += 2 * PI;
        var nm = Math.round(a / (2 * PI) * 60) % 60, om = now % 60, hr = Math.floor(now / 60);
        if (nm === om) return;
        if (om >= 45 && nm < 15) hr++; else if (om < 15 && nm >= 45) hr--; // passing 12 moves the hour
        set(hr * 60 + nm);
      }
      svg.addEventListener("pointerdown", function (e) {
        var p = at(e);
        if (p.d > big.r || p.d < big.r * 0.12) return;
        drag = true;
        try { svg.setPointerCapture(e.pointerId); } catch (x) { /* ignore */ }
        e.preventDefault(); move(e);
      });
      svg.addEventListener("pointermove", function (e) { if (drag) move(e); });
      svg.addEventListener("pointerup", function () { drag = false; });
      svg.addEventListener("pointercancel", function () { drag = false; });
    }
    function set(v) { now = ((v % 1440) + 1440) % 1440; update(); }
    function update() {
      hands(big, now);
      setSeg(apSeg, now < 720 ? 0 : 1);
      if (dmode) {
        f.readout(t("Starts ", "يبدأ ") + "<b>" + t12(start) + "</b> · " + t("ends ", "ينتهي ") + "<b>" + t12(now) + "</b> · " +
          t("lasts ", "يستغرق ") + "<b>" + durT((now - start + 1440) % 1440) + "</b>");
      } else {
        f.readout(t("12-hour: ", "نظام ١٢ ساعة: ") + "<b>" + t12(now) + "</b> · " + t("24-hour: ", "نظام ٢٤ ساعة: ") + "<b>" + t24(now) + "</b>");
      }
      api.check(now === goal);
    }
    function newGoal() {
      if (dmode) {
        var c = api.pick(CTX);
        start = api.rand(96, 216) * 5;   // 8:00 am .. 6:00 pm
        dur = api.rand(4, 35) * 5;       // 20 min .. 2 h 55 min
        goal = start + dur; now = start;
        f.goal(t(c[0] + " starts at <b>" + t12(start) + "</b> and lasts <b>" + durT(dur) + "</b>. Set the end time.",
          c[1] + " يبدأ الساعة <b>" + t12(start) + "</b> ويستغرق <b>" + durT(dur) + "</b>. اضبط وقت الانتهاء."));
      } else {
        kind = (kind + 1) % 3;
        do {
          if (kind === 0) goal = (api.rand(0, 3) ? api.rand(13, 23) : api.rand(0, 11)) * 60 + api.rand(0, 11) * 5;
          else if (kind === 1) goal = api.rand(7, 20) * 60 + api.pick([0, 5, 10, 15, 30, 45, 50, 55]);
          else goal = api.rand(0, 287) * 5;
        } while (goal === now || goal === 720);
        var g = kind === 0 ? "<b>" + t24(goal) + "</b>" + t(" (24-hour clock)", " (نظام ٢٤ ساعة)") : "<b>" + (kind === 1 ? words(goal) : t12(goal)) + "</b>";
        f.goal(t("Set the clock to ", "اضبط الساعة على ") + g);
      }
      build(); update();
    }

    f.controls.appendChild(btnGroup(api, t("Hour", "الساعة"), [
      ["−", t("one hour back", "ساعة للخلف"), function () { set(now - 60); }],
      ["+", t("one hour forward", "ساعة للأمام"), function () { set(now + 60); }]]));
    f.controls.appendChild(btnGroup(api, t("Minutes", "الدقائق"), [
      ["−" + api.n(5), t("5 minutes back", "٥ دقائق للخلف"), function () { set(now - 5); }],
      ["−" + api.n(1), t("1 minute back", "دقيقة للخلف"), function () { set(now - 1); }],
      ["+" + api.n(1), t("1 minute forward", "دقيقة للأمام"), function () { set(now + 1); }],
      ["+" + api.n(5), t("5 minutes forward", "٥ دقائق للأمام"), function () { set(now + 5); }]]));
    var apSeg = api.seg([["am", t("am", "صباحًا")], ["pm", t("pm", "مساءً")]], "am", function (v) {
      if (v === "pm" && now < 720) set(now + 720); else if (v === "am" && now >= 720) set(now - 720); else update();
    });
    f.controls.appendChild(apSeg);
    f.hint(t("Use the buttons or drag the long minute hand. am = morning, pm = afternoon and evening.",
      "استخدم الأزرار أو اسحب عقرب الدقائق الطويل. صباحًا قبل الظهر، ومساءً بعده."));
    f.onNew(newGoal);
    newGoal();
  };

  /* ================= 2. converter  (mode: time) ================= */
  EZ3.tools.converter = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame();
    // [en singular, en plural, ar singular, ar plural (3-10), ar after 11-99]
    var U = {
      hour: ["hour", "hours", "ساعة", "ساعات", "ساعة"], minute: ["minute", "minutes", "دقيقة", "دقائق", "دقيقة"],
      second: ["second", "seconds", "ثانية", "ثوانٍ", "ثانية"], day: ["day", "days", "يوم", "أيام", "يومًا"],
      week: ["week", "weeks", "أسبوع", "أسابيع", "أسبوعًا"], month: ["month", "months", "شهر", "أشهر", "شهرًا"], year: ["year", "years", "سنة", "سنوات", "سنة"]
    };
    // f = small units in one big unit; step = small button step; sub = tick spacing on the top bar
    var PAIRS = [
      { id: "hm", big: "hour", small: "minute", f: 60, step: 5, sub: 15, max: 4, rem: [15, 30, 45, 5, 10, 20, 40, 50], en: "hours ↔ minutes", ar: "ساعات ↔ دقائق" },
      { id: "ms", big: "minute", small: "second", f: 60, step: 5, sub: 15, max: 4, rem: [15, 30, 45, 10, 20, 40], en: "minutes ↔ seconds", ar: "دقائق ↔ ثوانٍ" },
      { id: "dh", big: "day", small: "hour", f: 24, step: 1, sub: 6, max: 4, rem: [6, 12, 18, 2, 3, 4, 8, 10], en: "days ↔ hours", ar: "أيام ↔ ساعات" },
      { id: "wd", big: "week", small: "day", f: 7, step: 1, sub: 1, max: 5, rem: [1, 2, 3, 4, 5, 6], en: "weeks ↔ days", ar: "أسابيع ↔ أيام" },
      { id: "ym", big: "year", small: "month", f: 12, step: 1, sub: 1, max: 4, rem: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], en: "years ↔ months", ar: "سنوات ↔ أشهر" }
    ];
    var P = PAIRS[0], L = 0, rev = false, scale = 4, val = 0, max = 0, unit = "minute", leftText = "", out = null;
    var ctl = api.el("div", "stepper-wrap");

    function uw(u, k) {
      var w = U[u], e = k >= 100 ? k % 100 : k;
      return t(k === 1 ? w[0] : w[1], e >= 3 && e <= 10 ? w[3] : e >= 11 ? w[4] : w[2]);
    }
    function q(k, u) { return n(k) + " " + uw(u, k); }

    function newGoal() {
      var k = api.rand(0, 2), b, m = 0;
      rev = k === 2;                       // reverse: small units on the left, child sets big units
      if (k === 1) { b = api.rand(1, P.max - 1); m = api.pick(P.rem); }
      else b = api.rand(rev ? 2 : 1, P.max);
      L = b * P.f + m;                     // left side, in small units
      scale = Math.max(3, Math.ceil(L / P.f) + 1);
      unit = rev ? P.big : P.small;
      max = rev ? scale : scale * P.f;
      val = 0;
      leftText = rev ? q(L, P.small) : m ? q(b, P.big) + t(" ", " و") + q(m, P.small) : q(b, P.big);
      f.goal(t("Make the two sides equal: ", "اجعل الطرفين متساويين: ") + "<b>" + leftText + " = " + t("?", "؟") + " " + uw(unit, 11) + "</b>");
      var bigStep = rev ? 1 : P.f, smallStep = rev ? 0 : P.step;
      function add(dv) { return function () { val = Math.max(0, Math.min(max, val + dv)); draw(); }; }
      ctl.innerHTML = "";
      ctl.appendChild(api.el("label", null, t("Your side", "طرفك")));
      var row = api.el("div", "btn-row"); row.setAttribute("dir", "ltr");
      row.appendChild(button("−" + n(bigStep), add(-bigStep), t("take away ", "اطرح ") + q(bigStep, unit)));
      if (smallStep) row.appendChild(button("−" + n(smallStep), add(-smallStep), t("take away ", "اطرح ") + q(smallStep, unit)));
      out = api.el("b"); out.style.cssText = "min-width:118px;text-align:center;font-size:19px";
      row.appendChild(out);
      if (smallStep) row.appendChild(button("+" + n(smallStep), add(smallStep), t("add ", "أضف ") + q(smallStep, unit)));
      row.appendChild(button("+" + n(bigStep), add(bigStep), t("add ", "أضف ") + q(bigStep, unit)));
      ctl.appendChild(row);
      draw();
    }
    function draw() {
      var right = rev ? val * P.f : val, eq = right === L, x0 = 20, len = 600, bw = len / scale;
      var col = eq ? "var(--green)" : "var(--orange)";
      function strip(y, amt, c, every) {
        var w = Math.min(amt, scale * P.f) / P.f * bw;
        var s = rect(x0, y, len, 40, "var(--card)", ' rx="6" stroke="var(--line)" stroke-width="2"');
        if (w > 0) s += rect(x0, y, w, 40, c, ' rx="6" fill-opacity=".28" stroke="' + c + '" stroke-width="2.5"');
        for (var v = every; v < amt; v += every) if (v % P.f) s += line(x0 + v / P.f * bw, y + 24, x0 + v / P.f * bw, y + 40, c, 1.2);
        for (var i = 1; i < scale; i++) s += line(x0 + i * bw, y - 4, x0 + i * bw, y + 44, "var(--muted)", 2);
        return s;
      }
      var s = svgOpen(640, 182, 680) + txt(x0, 14, leftText, 16, ' style="fill:var(--blue)"', "start") + strip(28, L, "var(--blue)", P.sub);
      for (var i = 0; i < Math.floor(L / P.f); i++) s += txt(x0 + (i + 0.5) * bw, 48, rev ? q(P.f, P.small) : q(1, P.big), 14);
      s += txt(x0, 96, q(val, unit), 16, ' style="fill:' + col + '"', "start") + strip(110, right, col, rev ? P.f : P.step);
      for (var j = 0; j <= scale; j++) s += txt(x0 + j * bw, 168, n(j * P.f), 13, ' style="fill:var(--muted)"');
      f.stage.innerHTML = s + "</svg>";
      out.innerHTML = q(val, unit);
      var msg = eq ? "✓ " + t("Equal!", "متساويان!") : right < L ? t("Not enough yet", "أقل من المطلوب") : t("Too much", "أكثر من المطلوب");
      f.readout((eq ? leftText + " = <b>" + q(val, unit) + "</b>" : t("Your side: ", "طرفك: ") + "<b>" + q(val, unit) + "</b>") + " · " + msg);
      api.check(eq);
    }

    f.controls.appendChild(api.seg(PAIRS.map(function (p) { return [p.id, t(p.en, p.ar)]; }), P.id, function (id) {
      P = PAIRS.filter(function (p) { return p.id === id; })[0];
      newGoal();
    }));
    f.controls.appendChild(ctl);
    f.hint(t("Pick a pair of units, then use the buttons. When the two bars are the same length, the sides are equal.",
      "اختر وحدتين، ثم استخدم الأزرار. عندما يتساوى طول الشريطين يكون الطرفان متساويين."));
    f.onNew(newGoal);
    newGoal();
  };

  /* ================= 3. datachart  (modes: tally, graph) ================= */
  EZ3.tools.datachart = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), mode = cfg.mode === "graph" ? "graph" : "tally", MAX = 12;
    var SETS = [
      { q: ["Fruit", "الفاكهة"], items: [["🍎", "apples", "التفاح"], ["🍌", "bananas", "الموز"], ["🥭", "mangoes", "المانجو"], ["🍊", "oranges", "البرتقال"], ["🍇", "grapes", "العنب"]] },
      { q: ["Pet", "الحيوان الأليف"], items: [["🐶", "dogs", "الكلاب"], ["🐱", "cats", "القطط"], ["🐟", "fish", "الأسماك"], ["🐰", "rabbits", "الأرانب"], ["🐦", "birds", "الطيور"]] },
      { q: ["Sport", "الرياضة"], items: [["⚽", "football", "كرة القدم"], ["🏀", "basketball", "كرة السلة"], ["🎾", "tennis", "التنس"], ["🏊", "swimming", "السباحة"], ["🚴", "cycling", "ركوب الدراجات"]] }
    ];
    var COLS = ["var(--blue)", "var(--orange)", "var(--green)", "var(--purple)", "var(--pink)"];
    var cats = [], topic = "", c = [], target = [], rule = null, steppers = [];

    function nm(i) { return t(cats[i][1], cats[i][2]); }
    function lab(i) { return cats[i][0] + " " + nm(i); }
    function sum() { return c.reduce(function (a, b) { return a + b; }, 0); }
    function extreme(most) {
      var best = most ? Math.max.apply(null, c) : Math.min.apply(null, c), who = [];
      c.forEach(function (v, i) { if (v === best) who.push(cats[i][0]); });
      return "<b>" + who.join(" ") + "</b>" + (who.length > 1 ? t(" (tie)", " (تعادل)") : "");
    }
    function makeRule() {
      var o = api.shuffle([0, 1, 2, 3]), A = o[0], B = o[1], k = api.rand(0, 3);
      if (k === 0) {
        var d = api.rand(2, 5), cb = api.rand(1, 6), T = cb + d + cb + api.rand(1, 6) + api.rand(1, 6);
        return {
          text: t("Make " + lab(A) + " <b>" + n(d) + " more</b> than " + lab(B) + ", and the total <b>" + n(T) + "</b>.",
            "اجعل " + lab(A) + " أكثر من " + lab(B) + " بمقدار <b>" + n(d) + "</b>، واجعل المجموع <b>" + n(T) + "</b>."),
          ok: function () { return c[A] - c[B] === d && sum() === T; },
          show: function () { return ltr(cats[A][0] + " − " + cats[B][0] + " = <b>" + n(c[A] - c[B]) + "</b>"); }
        };
      }
      if (k === 1) {
        var v = api.rand(5, 9);
        return {
          text: t("Make " + lab(A) + " the most popular with exactly <b>" + n(v) + "</b>. Every other choice needs at least " + n(1) + ".",
            "اجعل " + lab(A) + " الأكثر شعبية بـ <b>" + n(v) + "</b> بالضبط، ولكل اختيار آخر " + n(1) + " على الأقل."),
          ok: function () { return c[A] === v && c.every(function (x, i) { return i === A || (x >= 1 && x < v); }); },
          show: function () { return t("Most popular: ", "الأكثر شعبية: ") + extreme(true); }
        };
      }
      if (k === 2) {
        var T2 = api.rand(14, 24);
        return {
          text: t("Make " + lab(A) + " the least popular, and the total <b>" + n(T2) + "</b>.",
            "اجعل " + lab(A) + " الأقل شعبية، واجعل المجموع <b>" + n(T2) + "</b>."),
          ok: function () { return sum() === T2 && c.every(function (x, i) { return i === A || x > c[A]; }); },
          show: function () { return t("Least popular: ", "الأقل شعبية: ") + extreme(false); }
        };
      }
      return {
        text: t("Make " + lab(A) + " <b>double</b> " + lab(B) + ". " + cats[B][0] + " must be at least " + n(2) + ".",
          "اجعل " + lab(A) + " <b>ضعف</b> " + lab(B) + "، على أن يكون " + cats[B][0] + " " + n(2) + " على الأقل."),
        ok: function () { return c[B] >= 2 && c[A] === 2 * c[B]; },
        show: function () { return ltr(n(2) + " × " + cats[B][0] + " = <b>" + n(2 * c[B]) + "</b>") + " · " + ltr(cats[A][0] + " = <b>" + n(c[A]) + "</b>"); }
      };
    }
    function newGoal() {
      var set = api.pick(SETS);
      cats = api.shuffle(set.items).slice(0, 4); topic = t(set.q[0], set.q[1]);
      if (mode === "tally") {
        target = cats.map(function () { return api.rand(1, MAX); });
        c = cats.map(function () { return 0; });
        f.goal(t("Make the tally and the bar chart match this table: ", "اجعل علامات العد والتمثيل بالأعمدة مطابقة لهذا الجدول: ") +
          cats.map(function (k, i) { return k[0] + " <b>" + n(target[i]) + "</b>"; }).join(" · "));
      } else {
        do { rule = makeRule(); c = cats.map(function () { return api.rand(1, 6); }); } while (rule.ok());
        f.goal(rule.text);
      }
      f.controls.innerHTML = "";
      steppers = cats.map(function (k, i) {
        var s = api.stepper(lab(i), 0, MAX, c[i], function (v) { c[i] = v; draw(); });
        f.controls.appendChild(s);
        return s;
      });
      draw();
    }
    function tally(x, y, k) {
      var s = "", gx = x, cap2 = ' stroke-linecap="round"';
      for (var g = 0; g < Math.floor(k / 5); g++) {
        for (var j = 0; j < 4; j++) s += line(gx + j * 7, y, gx + j * 7, y + 24, "var(--ink)", 2.4, cap2);
        s += line(gx - 4, y + 20, gx + 25, y + 4, "var(--ink)", 2.4, cap2);
        gx += 38;
      }
      for (var r = 0; r < k % 5; r++) s += line(gx + r * 7, y, gx + r * 7, y + 24, "var(--ink)", 2.4, cap2);
      return s;
    }
    function draw() {
      var th = 40 + cats.length * 46, s = svgOpen(340, th, 360);
      s += rect(0, 0, 340, 34, "var(--bg-2)", ' rx="8"') + txt(8, 17, topic, 14, "", "start") +
        txt(187, 17, t("Tally", "علامات العد"), 14) + txt(298, 17, t("Frequency", "التكرار"), 13);
      s += line(118, 0, 118, th, "var(--line)", 1) + line(256, 0, 256, th, "var(--line)", 1);
      cats.forEach(function (k, i) {
        var y = 40 + i * 46;
        s += line(0, y + 44, 340, y + 44, "var(--line)", 1) + txt(8, y + 22, lab(i), 14, "", "start") +
          tally(128, y + 10, c[i]) + txt(298, y + 22, n(c[i]), 20, ' style="fill:' + COLS[i] + '"');
      });
      s += "</svg>";
      var X0 = 46, Y0 = 252, u = 19, bw = (352 - X0) / cats.length, mid = Y0 - MAX * u / 2, ch = svgOpen(360, 290, 380);
      for (var v = 0; v <= MAX; v++) {
        ch += line(X0, Y0 - v * u, 352, Y0 - v * u, "var(--line)", v % 2 ? 0.7 : 1.4);
        if (v % 2 === 0) ch += txt(X0 - 8, Y0 - v * u, n(v), 12, "", "end");
      }
      ch += line(X0, Y0 - MAX * u - 6, X0, Y0, "var(--ink)", 2) + line(X0, Y0, 352, Y0, "var(--ink)", 2);
      ch += '<text transform="rotate(-90 12 ' + mid + ')" x="12" y="' + mid + '" font-size="12" text-anchor="middle" dominant-baseline="central" class="svg-label svg-muted">' +
        t("Frequency", "التكرار") + "</text>";
      cats.forEach(function (k, i) {
        var cx = X0 + (i + 0.5) * bw, h = c[i] * u;
        if (h) ch += rect(cx - bw * 0.3, Y0 - h, bw * 0.6, h, COLS[i], ' rx="4"');
        ch += txt(cx, Y0 - h - 10, n(c[i]), 13) + txt(cx, Y0 + 20, k[0], 20);
      });
      cats.forEach(function (k, i) { // invisible tap cells: tap a level to set the bar there
        for (var lv = 1; lv <= MAX; lv++) ch += rect(X0 + i * bw, Y0 - lv * u, bw, u, "var(--ink)", ' fill-opacity="0" class="tap" data-c="' + i + '" data-v="' + lv + '"');
      });
      f.stage.innerHTML = s + ch + "</svg>";
      var ok;
      if (mode === "tally") {
        var m = c.filter(function (x, i) { return x === target[i]; }).length;
        ok = m === cats.length;
        f.readout(t("Matching: ", "المتطابق: ") + "<b>" + n(m) + "</b> " + t("of", "من") + " <b>" + n(cats.length) + "</b> · " + t("Total: ", "المجموع: ") + "<b>" + n(sum()) + "</b>");
      } else {
        ok = rule.ok();
        f.readout(t("Total: ", "المجموع: ") + "<b>" + n(sum()) + "</b> · " + rule.show());
      }
      api.check(ok);
    }
    f.stage.onclick = function (e) {
      var el = tapped(e, "data-v");
      if (!el) return;
      var i = +el.getAttribute("data-c"), v = +el.getAttribute("data-v");
      c[i] = c[i] === v ? v - 1 : v;
      steppers[i].set(c[i]);
      draw();
    };
    f.hint(t("Use − and + or tap the bar chart. Every 5th tally mark goes across the other 4 like a gate.",
      "استخدم − و + أو اضغط على التمثيل بالأعمدة. كل علامة عدّ خامسة تُرسم مائلة فوق الأربع كالبوابة."));
    f.onNew(newGoal);
    newGoal();
  };

  /* ================= 4. venn  (modes: venn, carroll) ================= */
  EZ3.tools.venn = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), mode = cfg.mode === "carroll" ? "carroll" : "venn";
    var RULES = [
      { en: "even", ar: "زوجي", nen: "not even", nar: "ليس زوجيًا", f: function (x) { return x % 2 === 0; } },
      { en: "odd", ar: "فردي", nen: "not odd", nar: "ليس فرديًا", f: function (x) { return x % 2 === 1; } },
      { en: "multiple of 3", ar: "مضاعف لـ ٣", nen: "not a multiple of 3", nar: "ليس مضاعفًا لـ ٣", f: function (x) { return x % 3 === 0; } },
      { en: "multiple of 5", ar: "مضاعف لـ ٥", nen: "not a multiple of 5", nar: "ليس مضاعفًا لـ ٥", f: function (x) { return x % 5 === 0; } },
      { en: "multiple of 10", ar: "مضاعف لـ ١٠", nen: "not a multiple of 10", nar: "ليس مضاعفًا لـ ١٠", f: function (x) { return x % 10 === 0; } },
      { en: "greater than 10", ar: "أكبر من ١٠", nen: "not greater than 10", nar: "ليس أكبر من ١٠", f: function (x) { return x > 10; } },
      { en: "greater than 20", ar: "أكبر من ٢٠", nen: "not greater than 20", nar: "ليس أكبر من ٢٠", f: function (x) { return x > 20; } },
      { en: "less than 15", ar: "أصغر من ١٥", nen: "not less than 15", nar: "ليس أصغر من ١٥", f: function (x) { return x < 15; } },
      { en: "has a 5 in it", ar: "فيه الرقم ٥", nen: "has no 5 in it", nar: "ليس فيه الرقم ٥", f: function (x) { return String(x).indexOf("5") >= 0; } }
    ];
    var SL = { // chip slots inside each Venn region (viewBox 520 x 340)
      a: [[125, 125], [125, 185], [125, 245], [168, 150], [168, 220]],
      ab: [[260, 110], [260, 148], [260, 186], [260, 224], [260, 262]],
      b: [[395, 125], [395, 185], [395, 245], [352, 150], [352, 220]],
      o: [[42, 70], [478, 70], [42, 305], [478, 305], [42, 185], [478, 185]]
    };
    var CELL = { ab: [165, 50], b: [340, 50], a: [165, 190], o: [340, 190] }; // Carroll cell corners
    var A = RULES[0], B = RULES[2], nums = [], placed = {}, sel = null, msg = "", VH = mode === "venn" ? 340 : 335;

    function reg(x) { var a = A.f(x), b = B.f(x); return a && b ? "ab" : a ? "a" : b ? "b" : "o"; }
    function newGoal() {
      var pools = null;
      for (var tries = 0; tries < 300; tries++) {
        var r = api.shuffle(RULES); A = r[0]; B = r[1];
        pools = { a: [], ab: [], b: [], o: [] };
        for (var x = 1; x <= 50; x++) pools[reg(x)].push(x);
        if (pools.a.length && pools.ab.length && pools.b.length && pools.o.length) break; // every region gets a number
      }
      nums = ["a", "ab", "b", "o"].map(function (k) { return api.pick(pools[k]); });
      var total = api.rand(7, 8);
      api.shuffle(range(1, 50)).forEach(function (x) { if (nums.length < total && nums.indexOf(x) < 0) nums.push(x); });
      nums = api.shuffle(nums); placed = {}; sel = null; msg = "";
      f.goal(mode === "venn" ? t("Sort the numbers into the Venn diagram.", "صنّف الأعداد في شكل فن.")
        : t("Sort the numbers into the Carroll diagram.", "صنّف الأعداد في مخطط كارول."));
      chips(); draw();
    }
    function chips() {
      f.controls.innerHTML = "";
      nums.forEach(function (x) {
        if (placed[x]) return;
        var b = button(n(x), function () { sel = sel === x ? null : x; msg = ""; chips(); draw(); }, null, sel === x ? "on" : "");
        b.setAttribute("data-n", x); b.setAttribute("aria-pressed", sel === x ? "true" : "false");
        b.style.minWidth = "52px"; b.style.fontSize = "18px";
        f.controls.appendChild(b);
      });
    }
    function slot(r, j) {
      if (mode === "venn") return SL[r][j];
      var o = CELL[r];
      return [o[0] + 37 + (j % 3) * 50, o[1] + 42 + Math.floor(j / 3) * 56];
    }
    function chip(x, y, v, stroke, fill) {
      return '<g pointer-events="none"><circle cx="' + R(x) + '" cy="' + R(y) + '" r="18" fill="' + fill + '" stroke="' + stroke + '" stroke-width="3"/>' + txt(x, y, n(v), 15) + "</g>";
    }
    function draw(tmp) {
      var s, used = { a: 0, ab: 0, b: 0, o: 0 }, done = Object.keys(placed).length;
      if (mode === "venn") {
        s = svgOpen(520, 340, 560) + rect(10, 40, 500, 290, "var(--card)", ' rx="16" stroke="var(--line)" stroke-width="2" class="tap"') +
          '<circle class="tap" cx="200" cy="185" r="115" fill="var(--blue)" fill-opacity=".13" stroke="var(--blue)" stroke-width="3"/>' +
          '<circle class="tap" cx="320" cy="185" r="115" fill="var(--orange)" fill-opacity=".13" stroke="var(--orange)" stroke-width="3"/>' +
          txt(150, 20, t(A.en, A.ar), 16, ' style="fill:var(--blue)"') + txt(370, 20, t(B.en, B.ar), 16, ' style="fill:var(--orange)"');
      } else {
        s = svgOpen(520, 335, 560) +
          rect(167, 4, 171, 42, "var(--blue-soft)", ' rx="8"') + rect(342, 4, 171, 42, "var(--blue-soft)", ' rx="8"') +
          txt2(252, 25, t(A.en, A.ar), 14) + txt2(427, 25, t(A.nen, A.nar), 14) +
          rect(4, 52, 157, 136, "var(--orange-soft)", ' rx="8"') + rect(4, 192, 157, 136, "var(--orange-soft)", ' rx="8"') +
          txt2(82, 120, t(B.en, B.ar), 14) + txt2(82, 260, t(B.nen, B.nar), 14);
        Object.keys(CELL).forEach(function (k) {
          s += rect(CELL[k][0] + 2, CELL[k][1] + 2, 171, 136, "var(--card)", ' rx="8" stroke="var(--line)" stroke-width="2" class="tap" data-r="' + k + '"');
        });
      }
      nums.forEach(function (x) {
        var r = placed[x];
        if (!r) return;
        var p = slot(r, used[r]++);
        s += chip(p[0], p[1], x, "var(--green)", "var(--card)");
      });
      if (tmp) s += chip(tmp.x, tmp.y, tmp.v, "var(--red)", "var(--red-soft)");
      f.stage.innerHTML = s + "</svg>";
      f.readout(t("Placed: ", "تم وضع: ") + "<b>" + n(done) + "</b> " + t("of", "من") + " <b>" + n(nums.length) + "</b>" + (msg ? " · " + msg : ""));
      api.check(done === nums.length);
    }
    function place(r, p) {
      if (sel === null) { msg = t("First tap a number below.", "اضغط على رقم في الأسفل أولًا."); draw(); return; }
      var v = sel;
      if (reg(v) === r) { placed[v] = r; sel = null; msg = ""; chips(); draw(); return; }
      var el = f.controls.querySelector('[data-n="' + v + '"]');
      shake(el);
      if (el) {
        el.style.background = "var(--red-soft)"; el.style.borderColor = "var(--red)";
        setTimeout(function () { el.style.background = ""; el.style.borderColor = ""; }, 700);
      }
      msg = t("Not there! ", "ليس هنا! ") + n(v) + ": " + t(A.en, A.ar) + (A.f(v) ? " ✓" : " ✗") + " · " + t(B.en, B.ar) + (B.f(v) ? " ✓" : " ✗");
      draw({ x: p.x, y: p.y, v: v });
      setTimeout(function () { draw(); }, 650); // the wrong chip "returns" to the row
    }
    f.stage.onclick = function (e) {
      var svg = f.stage.querySelector("svg");
      if (!svg) return;
      var p = svgPoint(svg, e, 520, VH);
      if (mode === "carroll") {
        var cell = tapped(e, "data-r");
        if (cell) place(cell.getAttribute("data-r"), p);
        return;
      }
      if (p.x < 10 || p.x > 510 || p.y < 40 || p.y > 330) return;
      var ia = Math.pow(p.x - 200, 2) + Math.pow(p.y - 185, 2) <= 115 * 115;
      var ib = Math.pow(p.x - 320, 2) + Math.pow(p.y - 185, 2) <= 115 * 115;
      place(ia && ib ? "ab" : ia ? "a" : ib ? "b" : "o", p);
    };
    f.hint(t("Tap a number, then tap the part of the diagram where it belongs.", "اضغط على رقم، ثم اضغط على الجزء المناسب له في الشكل."));
    f.onNew(newGoal);
    newGoal();
  };

  /* ================= 5. spinner  (modes: likelihood, experiment) ================= */
  EZ3.tools.spinner = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), mode = cfg.mode === "experiment" ? "experiment" : "likelihood";
    var COLS = [{ v: "var(--red)", en: "red", ar: "الأحمر" }, { v: "var(--blue)", en: "blue", ar: "الأزرق" },
      { v: "var(--yellow)", en: "yellow", ar: "الأصفر" }, { v: "var(--green)", en: "green", ar: "الأخضر" }];
    function cname(i) { return t(cap(COLS[i].en), COLS[i].ar); }
    function dot(i) { return '<span style="display:inline-block;width:14px;height:14px;border-radius:50%;vertical-align:middle;background:' + COLS[i].v + '"></span>'; }
    function word(k) {
      return k === 0 ? t("impossible", "مستحيل") : k < 4 ? t("unlikely", "غير مرجح") : k === 4 ? t("even chance", "احتمال متساوٍ")
        : k < 8 ? t("likely", "مرجح") : t("certain", "مؤكد");
    }

    function likelihood() {
      var secs = [], pen = 0, g = null;
      var sw = api.el("div", "btn-row");
      COLS.forEach(function (c, i) {
        sw.appendChild(button(dot(i) + " " + cname(i), function () { pen = i; swatches(); }, t("Paint with ", "لوّن بـ") + cname(i)));
      });
      function swatches() { Array.prototype.forEach.call(sw.children, function (b, i) { b.classList.toggle("on", i === pen); }); }
      function cnt(i) { return secs.filter(function (x) { return x === i; }).length; }
      function makeGoal() {
        var o = api.shuffle([0, 1, 2, 3]), x = o[0], y = o[1], X = COLS[x], Y = COLS[y], k = api.rand(0, 4);
        if (k === 0) return { en: "Make landing on " + X.en + " unlikely but possible.", ar: "اجعل الوقوف على " + X.ar + " غير مرجح لكنه ممكن.",
          ok: function () { return cnt(x) >= 1 && cnt(x) <= 3; }, cols: [x] };
        if (k === 1) return { en: "Make landing on " + X.en + " certain.", ar: "اجعل الوقوف على " + X.ar + " مؤكدًا.",
          ok: function () { return cnt(x) === 8; }, cols: [x] };
        if (k === 2) return { en: "Make an even chance of landing on " + X.en + ".", ar: "اجعل للوقوف على " + X.ar + " احتمالًا متساويًا.",
          ok: function () { return cnt(x) === 4; }, cols: [x] };
        if (k === 3) return { en: "Make " + X.en + " impossible and " + Y.en + " likely.", ar: "اجعل " + X.ar + " مستحيلًا و" + Y.ar + " مرجحًا.",
          ok: function () { return cnt(x) === 0 && cnt(y) >= 5 && cnt(y) <= 7; }, cols: [x, y] };
        return { en: "Make " + X.en + " likely but not certain.", ar: "اجعل " + X.ar + " مرجحًا لكن غير مؤكد.",
          ok: function () { return cnt(x) >= 5 && cnt(x) <= 7; }, cols: [x] };
      }
      function newGoal() {
        g = makeGoal();
        do { secs = range(1, 8).map(function () { return api.rand(0, 3); }); } while (g.ok());
        f.goal(t(g.en, g.ar));
        draw();
      }
      function draw() {
        var s = svgOpen(300, 300, 340);
        for (var i = 0; i < 8; i++) s += slice(150, 160, 125, i, 8, -0.5, COLS[secs[i]].v, ' stroke="var(--card)" stroke-width="3" class="tap" data-i="' + i + '"');
        s += '<g pointer-events="none">' + line(150, 160, 150, 70, "var(--ink)", 6, ' stroke-linecap="round"') +
          '<path d="M150 56 L140 76 L160 76 Z" fill="var(--ink)"/><circle cx="150" cy="160" r="10" fill="var(--ink)"/></g>';
        f.stage.innerHTML = s + "</svg>";
        f.readout(g.cols.map(function (i) {
          var k = cnt(i);
          return dot(i) + " " + cname(i) + " " + ltr(api.frac(k, 8)) + ": <b>" + word(k) + "</b>";
        }).join(" · "));
        api.check(g.ok());
      }
      f.stage.onclick = function (e) {
        var el = tapped(e, "data-i");
        if (!el) return;
        secs[+el.getAttribute("data-i")] = pen;
        draw();
      };
      f.controls.appendChild(sw); swatches();
      f.hint(t("Pick a colour, then tap parts of the spinner to paint them.", "اختر لونًا، ثم اضغط على أجزاء الدوّارة لتلوينها."));
      f.onNew(newGoal);
      newGoal();
    }

    function experiment() {
      var obj = "coin", res = [], total = 0, N = 20, busy = false, animId = 0, arrowAng = 0, chart = null;
      var OBJ = {
        coin: { k: 2, verb: t("Toss", "ارمِ"), name: function (i) { return i ? t("Tails", "كتابة") : t("Heads", "صورة"); } },
        dice: { k: 6, verb: t("Roll", "ارمِ"), name: function (i) { return n(i + 1); } },
        spin: { k: 4, verb: t("Spin", "أدِر"), name: cname }
      };
      var PIPS = [[[100, 100]], [[62, 62], [138, 138]], [[62, 62], [100, 100], [138, 138]], [[62, 62], [138, 62], [62, 138], [138, 138]],
        [[62, 62], [138, 62], [100, 100], [62, 138], [138, 138]], [[62, 62], [138, 62], [62, 100], [138, 100], [62, 138], [138, 138]]];
      function coinFace(i) {
        return '<circle cx="100" cy="100" r="80" fill="var(--yellow-soft)" stroke="var(--yellow)" stroke-width="8"/>' +
          '<circle cx="100" cy="100" r="62" fill="none" stroke="var(--yellow)" stroke-width="2" stroke-dasharray="4 5"/>' + txt(100, 100, OBJ.coin.name(i), 26);
      }
      function diceFace(i) {
        return rect(30, 30, 140, 140, "var(--card)", ' rx="24" stroke="var(--ink)" stroke-width="4"') +
          PIPS[i].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="12" fill="var(--ink)"/>'; }).join("");
      }
      function spinFace() {
        var s = "";
        for (var i = 0; i < 4; i++) s += slice(100, 100, 88, i, 4, -0.5, COLS[i].v, ' stroke="var(--card)" stroke-width="3"');
        return s + '<g class="ez-arrow" transform="rotate(' + R(arrowAng) + ' 100 100)">' + line(100, 100, 100, 34, "var(--ink)", 6, ' stroke-linecap="round"') +
          '<path d="M100 20 L90 38 L110 38 Z" fill="var(--ink)"/></g><circle cx="100" cy="100" r="9" fill="var(--ink)"/>';
      }
      function buildStage() {
        var face = obj === "coin" ? coinFace(0) : obj === "dice" ? diceFace(api.rand(0, 5)) : spinFace();
        f.stage.innerHTML = svgOpen(200, 200, 210) + '<g class="ez-obj">' + face + "</g></svg>" + svgOpen(360, 230, 420, "ez-chart") + "</svg>";
        chart = f.stage.querySelector(".ez-chart");
      }
      function drawChart() {
        var o = OBJ[obj], k = o.k, exp = total / k, mx = Math.max(5, Math.ceil(exp));
        res.forEach(function (v) { if (v > mx) mx = v; });
        var top = Math.ceil(mx / 5) * 5, X0 = 40, Y0 = 196, H = 172, u = H / top, bw = (350 - X0) / k, s = "";
        for (var v = 0; v <= top; v += top / 5) s += line(X0, Y0 - v * u, 350, Y0 - v * u, "var(--line)", 1) + txt(X0 - 8, Y0 - v * u, n(v), 12, "", "end");
        s += line(X0, Y0, 350, Y0, "var(--ink)", 2) + line(X0, Y0 - H, X0, Y0, "var(--ink)", 2);
        res.forEach(function (x, i) {
          var cx = X0 + (i + 0.5) * bw, h = x * u;
          var fill = obj === "spin" ? COLS[i].v : obj === "coin" ? (i ? "var(--orange)" : "var(--yellow)") : "var(--blue)";
          if (h) s += rect(cx - bw * 0.32, Y0 - h, bw * 0.64, h, fill, ' rx="3"');
          s += txt(cx, Y0 - h - 10, n(x), 13) + txt(cx, Y0 + 18, o.name(i), obj === "dice" ? 16 : 13);
        });
        if (total) {
          var ey = Y0 - exp * u;
          s += line(X0, ey, 350, ey, "var(--muted)", 2, ' stroke-dasharray="7 5"') + txt(350, ey - 10, t("expected", "المتوقع"), 12, ' style="fill:var(--muted)"', "end");
        }
        chart.innerHTML = s;
        var best = Math.max.apply(null, res), tops = [];
        res.forEach(function (x, i) { if (x === best) tops.push(o.name(i)); });
        var fair = obj === "coin" ? t("about half each", "النصف تقريبًا لكلٍّ منهما") : t("each about 1 in " + n(k), "كل ناتج مرة من كل " + n(k) + " تقريبًا");
        f.readout(t("Trials: ", "عدد التجارب: ") + "<b>" + n(total) + "</b> / " + n(N) + " · " + t("Fair: ", "المتوقع: ") + fair +
          (total >= k ? " (≈ <b>" + n(Math.round(exp)) + "</b> " + t("each", "لكل ناتج") + ")" : "") +
          (total ? " · " + t("Most: ", "الأكثر: ") + "<b>" + tops.join(t(", ", "، ")) + "</b>" : ""));
        api.check(total >= N);
      }
      function animate(final, done) {
        var id = ++animId, g = f.stage.querySelector(".ez-obj");
        busy = true;
        function fin() {
          if (id !== animId) return; // object changed mid-animation: drop these results
          if (obj !== "spin") { g.removeAttribute("transform"); g.innerHTML = obj === "coin" ? coinFace(final) : diceFace(final); }
          busy = false; done();
        }
        if (obj === "spin") {
          var arrow = f.stage.querySelector(".ez-arrow"), from = arrowAng, to = from - (from % 360) + 720 + final * 90 + api.rand(-30, 30);
          tween(1000, function (p) {
            arrowAng = from + (to - from) * (1 - Math.pow(1 - p, 3));
            arrow.setAttribute("transform", "rotate(" + R(arrowAng) + " 100 100)");
          }, fin);
        } else if (obj === "coin") {
          tween(700, function (p) {
            g.setAttribute("transform", "translate(100 100) scale(1 " + R(Math.max(0.06, Math.abs(Math.cos(p * 6 * PI)))) + ") translate(-100 -100)");
            g.innerHTML = coinFace(Math.floor(p * 6) % 2);
          }, fin);
        } else {
          var last = -1;
          tween(700, function (p) {
            var st = Math.floor(p * 9);
            if (st !== last) { last = st; g.innerHTML = diceFace(api.rand(0, 5)); }
            g.setAttribute("transform", "rotate(" + R((1 - p) * 300) + " 100 100)");
          }, fin);
        }
      }
      function roll(times) {
        if (busy) return;
        var outs = [];
        for (var i = 0; i < times; i++) outs.push(api.rand(0, OBJ[obj].k - 1));
        animate(outs[times - 1], function () { outs.forEach(function (o) { res[o]++; }); total += times; drawChart(); });
      }
      function clear() { animId++; busy = false; res = range(1, OBJ[obj].k).map(function () { return 0; }); total = 0; }
      function newGoal() {
        clear();
        N = api.pick([10, 20, 30, 40, 50]);
        var times = t(" times", N === 10 ? " مرات" : " مرة");
        f.goal(obj === "coin" ? t("Toss the coin <b>" + n(N) + times + "</b>. Is heads about half?", "ارمِ العملة <b>" + n(N) + times + "</b>. هل تظهر الصورة في نصف المرات تقريبًا؟")
          : obj === "dice" ? t("Roll the dice <b>" + n(N) + times + "</b>. Which number comes up most?", "ارمِ حجر النرد <b>" + n(N) + times + "</b>. أي عدد يظهر أكثر؟")
            : t("Spin the spinner <b>" + n(N) + times + "</b>. Does each colour come up about 1 in 4?", "أدِر الدوّارة <b>" + n(N) + times + "</b>. هل يظهر كل لون مرة من كل ٤ تقريبًا؟"));
        b1.innerHTML = OBJ[obj].verb + " ×" + n(1); b10.innerHTML = OBJ[obj].verb + " ×" + n(10);
        buildStage(); drawChart();
      }
      var b1 = button("", function () { roll(1); }), b10 = button("", function () { roll(10); });
      b1.classList.add("primary");
      f.controls.appendChild(api.seg([["coin", t("Coin", "عملة")], ["dice", t("Dice", "حجر نرد")], ["spin", t("Spinner", "دوّارة")]], obj,
        function (v) { obj = v; newGoal(); }));
      f.controls.appendChild(b1); f.controls.appendChild(b10);
      f.controls.appendChild(button(t("Reset", "إعادة"), function () { clear(); buildStage(); drawChart(); }));
      f.hint(t("Choose coin, dice or spinner, then do trials. The dashed line shows the fair (expected) count.",
        "اختر عملة أو نردًا أو دوّارة، ثم أجرِ التجارب. الخط المتقطع يبيّن العدد المتوقع."));
      f.onNew(newGoal);
      newGoal();
    }

    if (mode === "experiment") experiment(); else likelihood();
  };

  /* ================= 6. fraction  (modes: shade, equivalent, addsub) ================= */
  EZ3.tools.fraction = function (host, cfg, api) {
    var t = api.t, n = api.n, fr = api.frac, f = api.frame();
    var mode = ["shade", "equivalent", "addsub"].indexOf(cfg.mode) >= 0 ? cfg.mode : "shade";
    var d = 4, sh = flags(4, 0), shape = "bar", G = { a: 1, b: 2 }, dStep = null;

    function count() { return sh.filter(Boolean).length; }
    function parts(k) { return n(k) + t(k === 1 ? " part" : " parts", k >= 3 && k <= 10 ? " أجزاء" : " جزءًا"); }
    function simple(b) { var a; do { a = api.rand(1, b - 1); } while (gcd(a, b) !== 1); return a; }
    function multiples(b) { var m = []; for (var k = 2 * b; k <= 12; k += b) m.push(k); return m; }
    function bar(x, y, w, h, k, s, col, tap) {
      var o = "", pw = w / k;
      for (var i = 0; i < k; i++) {
        o += rect(x + i * pw, y, pw, h, s[i] ? col : "var(--card)", ' stroke="var(--ink)" stroke-width="2"' + (tap ? ' class="tap" data-p="' + i + '"' : ""));
      }
      return o;
    }
    function pie(cx, cy, r, k, s, col) {
      var o = "";
      for (var i = 0; i < k; i++) o += slice(cx, cy, r, i, k, 0, s[i] ? col : "var(--card)", ' stroke="var(--ink)" stroke-width="2" stroke-linejoin="round" class="tap" data-p="' + i + '"');
      return o;
    }
    function cmp(k, dd, a, b) { return k * b < a * dd ? " < " : k * b > a * dd ? " > " : " = "; }

    function newGoal() {
      if (mode === "shade") {
        var b = api.pick([2, 3, 4, 5, 6, 8, 10, 12]), a = simple(b), P = 0;
        if (b <= 6 && api.rand(0, 1)) P = api.pick(multiples(b));
        G = { a: a, b: b, P: P };
        f.goal(P ? t("Shade <b>" + fr(a, b) + "</b> using " + parts(P) + ".", "ظلّل <b>" + fr(a, b) + "</b> باستخدام " + parts(P) + ".")
          : t("Shade <b>" + fr(a, b) + "</b> of the shape.", "ظلّل <b>" + fr(a, b) + "</b> من الشكل."));
      } else if (mode === "equivalent") {
        var b2 = api.rand(2, 6), a2 = simple(b2), D = api.rand(0, 2) ? api.pick(multiples(b2)) : 0;
        G = { a: a2, b: b2, D: D };
        d = b2; dStep.set(d);
        f.goal(D ? t("Find a fraction equal to <b>" + fr(a2, b2) + "</b> with " + parts(D) + ".", "أوجد كسرًا مكافئًا لـ <b>" + fr(a2, b2) + "</b> مقامه " + n(D) + ".")
          : t("Find a fraction equal to <b>" + fr(a2, b2) + "</b> using a different number of parts.", "أوجد كسرًا مكافئًا لـ <b>" + fr(a2, b2) + "</b> بعدد أجزاء مختلف."));
      } else {
        var dd = api.rand(5, 12), plus = api.rand(0, 1) === 1, x, y;
        if (plus) { x = api.rand(1, dd - 2); y = api.rand(1, dd - 1 - x); } else { x = api.rand(2, dd - 1); y = api.rand(1, x - 1); }
        G = { a: x, b: y, plus: plus, res: plus ? x + y : x - y };
        d = dd;
        f.goal(t("Show ", "مثّل ") + "<b>" + ltr(fr(x, d) + (plus ? " + " : " − ") + fr(y, d)) + "</b>" + t(" on the answer bar.", " على شريط الناتج."));
      }
      sh = flags(d, 0);
      draw();
    }
    function draw() {
      var k = count(), s, msg, ok, eq;
      if (mode === "shade") {
        eq = k > 0 && k * G.b === G.a * d;
        ok = eq && (!G.P || d === G.P);
        s = shape === "bar" ? svgOpen(520, 110, 560) + bar(20, 20, 480, 70, d, sh, "var(--orange)", true)
          : svgOpen(300, 300, 300) + pie(150, 150, 135, d, sh, "var(--orange)");
        msg = k ? "<b>" + ltr(fr(k, d)) + "</b> " + t("shaded", "مظلَّل") : t("Tap the parts to shade them.", "اضغط على الأجزاء لتظليلها.");
        if (eq) msg += d === G.b ? " ✓" : " = " + ltr(fr(G.a, G.b)) + " ✓ " + t("(equivalent fractions)", "(كسور متكافئة)");
        if (eq && G.P && d !== G.P) msg += " · " + t("Now try it with ", "جرّب الآن باستخدام ") + parts(G.P) + ".";
      } else if (mode === "equivalent") {
        var A = G.a, B = G.b, X = 80, W = 420, lx = X + W * A / B;
        eq = k > 0 && k * B === A * d;
        ok = eq && (G.D ? d === G.D : d !== B);
        s = svgOpen(520, 200, 560) + bar(X, 24, W, 56, B, flags(B, A), "var(--blue)", false) + txt(40, 52, fr(A, B), 20) +
          bar(X, 116, W, 56, d, sh, "var(--orange)", true) + txt(40, 144, k ? fr(k, d) : t("?", "؟") + "/" + api.d(d), 20) +
          line(lx, 12, lx, 186, "var(--blue)", 2.5, ' stroke-dasharray="6 5" pointer-events="none"');
        msg = k ? ltr(fr(k, d) + cmp(k, d, A, B) + fr(A, B)) + (eq ? " ✓" : "") : t("Tap the parts of the bottom bar to shade them.", "اضغط على أجزاء الشريط السفلي لتظليلها.");
        if (eq && G.D && d !== G.D) msg += " · " + t("Now try it with ", "جرّب الآن باستخدام ") + parts(G.D) + ".";
        if (eq && !G.D && d === B) msg += " · " + t("Same fraction! Change the number of parts.", "إنه الكسر نفسه! غيّر عدد الأجزاء.");
      } else {
        var op = G.plus ? " + " : " − ", sent = fr(G.a, d) + op + fr(G.b, d) + " = ";
        ok = k === G.res;
        s = svgOpen(560, 232, 600) + bar(80, 10, 460, 44, d, flags(d, G.a), "var(--blue)", false) + txt(40, 32, fr(G.a, d), 18) +
          txt(40, 73, op.trim(), 30) + bar(80, 92, 460, 44, d, flags(d, G.b), G.plus ? "var(--green)" : "var(--red)", false) + txt(40, 114, fr(G.b, d), 18) +
          txt(40, 156, "=", 30) + bar(80, 176, 460, 44, d, sh, "var(--orange)", true) + txt(40, 198, k ? fr(k, d) : t("?", "؟"), 18);
        msg = ok ? ltr(sent + "<b>" + fr(G.res, d) + "</b>") + " ✓"
          : ltr(sent + t("?", "؟")) + " · " + t("Shaded: ", "المظلَّل: ") + "<b>" + ltr(fr(k, d)) + "</b>";
      }
      f.stage.innerHTML = s + "</svg>";
      f.readout(msg);
      api.check(ok);
    }

    f.stage.onclick = function (e) {
      var el = tapped(e, "data-p");
      if (!el) return;
      var i = +el.getAttribute("data-p");
      sh[i] = !sh[i];
      draw();
    };
    if (mode === "shade") {
      f.controls.appendChild(api.seg([["bar", t("Bar", "شريط")], ["circle", t("Circle", "دائرة")]], shape, function (v) { shape = v; draw(); }));
    }
    if (mode !== "addsub") {
      dStep = api.stepper(mode === "shade" ? t("Equal parts", "عدد الأجزاء المتساوية") : t("Parts in the bottom bar", "أجزاء الشريط السفلي"), 2, 12, d,
        function (v) { d = v; sh = flags(d, 0); draw(); });
      f.controls.appendChild(dStep);
    }
    f.controls.appendChild(button(t("Clear", "مسح"), function () { sh = flags(d, 0); draw(); }));
    f.hint(mode === "shade" ? t("Choose bar or circle and the number of equal parts, then tap parts to shade them. Equivalent fractions count too.",
      "اختر شريطًا أو دائرة وعدد الأجزاء المتساوية، ثم اضغط على الأجزاء لتظليلها. الكسور المتكافئة مقبولة أيضًا.")
      : mode === "equivalent" ? t("Change the parts of the bottom bar and shade it until the shaded part reaches the dashed line.",
        "غيّر عدد أجزاء الشريط السفلي وظلّله حتى يصل الجزء المظلل إلى الخط المتقطع.")
        : t("Both fractions have the same denominator. Shade the answer on the bottom bar.", "للكسرين المقام نفسه. ظلّل الناتج على الشريط السفلي."));
    f.onNew(newGoal);
    newGoal();
  };

  /* ================= 7. hundred  (modes: square, percent) ================= */
  EZ3.tools.hundred = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), mode = cfg.mode === "percent" ? "percent" : "square";

    function square() {
      var tgt = {}, pre = {}, hl = {}, kind = api.rand(0, 2);
      function newGoal() {
        var text, v, k;
        tgt = {}; pre = {}; hl = {}; kind = (kind + 1) % 3;
        if (kind === 0) {
          k = api.pick([2, 3, 4, 5, 6, 7, 8, 9, 25]);
          var lim = k === 25 ? 100 : k * 10;
          for (v = k; v <= lim; v += k) tgt[v] = 1;
          text = t("Highlight all the multiples of " + n(k) + " up to " + n(lim) + ".", "ظلّل كل مضاعفات " + n(k) + " حتى " + n(lim) + ".");
        } else if (kind === 1) {
          var lo = api.rand(0, 9) * 10 + 1, odd = api.rand(0, 1);
          for (v = lo; v <= lo + 9; v++) if (v % 2 === odd) tgt[v] = 1;
          text = t("Highlight the " + (odd ? "odd" : "even") + " numbers from " + n(lo) + " to " + n(lo + 9) + ".",
            "ظلّل الأعداد " + (odd ? "الفردية" : "الزوجية") + " من " + n(lo) + " إلى " + n(lo + 9) + ".");
        } else {
          var a = api.rand(1, 9), cnt = api.rand(7, 10), terms = [];
          k = api.rand(3, 9);
          for (var i = 0; i < cnt; i++) { tgt[a + i * k] = 1; if (i < 3) { pre[a + i * k] = 1; terms.push(n(a + i * k)); } }
          text = t("Continue the sequence " + terms.join(", ") + " … up to " + n(a + (cnt - 1) * k) + ".",
            "أكمل المتتابعة " + terms.join("، ") + " … حتى " + n(a + (cnt - 1) * k) + ".");
        }
        f.goal(text);
        f.hint(t("Tap a number to highlight it. Tap again to remove it.", "اضغط على عدد لتظليله، واضغط مرة أخرى لإزالة التظليل.") +
          (kind === 2 ? " " + t("The blue numbers are given.", "الأعداد الزرقاء معطاة.") : ""));
        draw();
      }
      function draw() {
        var s = svgOpen(410, 410, 520), need = 0, found = 0, extra = 0;
        for (var v = 1; v <= 100; v++) {
          var x = 5 + ((v - 1) % 10) * 40, y = 5 + Math.floor((v - 1) / 10) * 40, on = hl[v], p = pre[v];
          s += '<g class="tap" data-n="' + v + '">' + rect(x + 2, y + 2, 36, 36, p ? "var(--blue-2)" : on ? "var(--orange)" : "var(--card)", ' rx="7" stroke="var(--line)" stroke-width="1.5"') +
            txt(x + 20, y + 20, n(v), 15, on || p ? ' style="fill:var(--card)"' : "") + "</g>";
          if (tgt[v] && !pre[v]) { need++; if (on) found++; }
          if (on && !tgt[v]) extra++;
        }
        f.stage.innerHTML = s + "</svg>";
        f.readout(t("Found: ", "تم العثور على: ") + "<b>" + n(found) + "</b> " + t("of", "من") + " <b>" + n(need) + "</b>" +
          (extra ? " · " + t("Not in the pattern: ", "ليست من النمط: ") + "<b>" + n(extra) + "</b>" : ""));
        api.check(found === need && extra === 0);
      }
      f.stage.onclick = function (e) {
        var el = tapped(e, "data-n");
        if (!el) return;
        var v = +el.getAttribute("data-n");
        if (pre[v]) return; // given terms stay highlighted
        hl[v] = !hl[v];
        draw();
      };
      f.controls.appendChild(button(t("Clear", "مسح"), function () { hl = {}; draw(); }));
      f.onNew(newGoal);
      newGoal();
    }

    function percent() {
      var on = flags(100, 0), target = 0;
      function count() { return on.filter(Boolean).length; }
      function newGoal() {
        var k = api.rand(0, 3), text, a;
        if (k === 0) { target = api.rand(1, 19) * 5; text = t("Shade <b>" + n(target) + "%</b> of the grid.", "ظلّل <b>" + n(target) + "٪</b> من الشبكة."); }
        else if (k === 1) { a = api.rand(1, 9); target = a * 10; text = t("Shade <b>" + api.frac(a, 10) + "</b> of the grid.", "ظلّل <b>" + api.frac(a, 10) + "</b> من الشبكة."); }
        else if (k === 2) {
          var F = api.pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5]]);
          target = 100 * F[0] / F[1];
          text = t("Shade <b>" + api.frac(F[0], F[1]) + "</b> of the grid.", "ظلّل <b>" + api.frac(F[0], F[1]) + "</b> من الشبكة.");
        } else {
          do { target = api.rand(1, 99); } while (target % 10 === 0);
          text = t("Shade <b>" + api.frac(target, 100) + "</b> of the grid.", "ظلّل <b>" + api.frac(target, 100) + "</b> من الشبكة.");
        }
        on = flags(100, 0);
        f.goal(text);
        draw();
      }
      function draw() {
        var s = svgOpen(460, 410, 540), k = count();
        for (var r = 0; r < 10; r++) {
          var y = 5 + r * 40;
          s += '<g class="tap" data-row="' + r + '"><title>' + t("Shade this row of 10", "ظلّل هذا الصف من ١٠") + "</title>" +
            rect(4, y + 3, 38, 34, "var(--bg-2)", ' rx="8" stroke="var(--line)"') + '<path d="M17 ' + (y + 12) + " L29 " + (y + 20) + " L17 " + (y + 28) + ' Z" fill="var(--blue-2)"/></g>';
          for (var c = 0; c < 10; c++) {
            var i = r * 10 + c;
            s += rect(52 + c * 40, y + 1, 38, 38, on[i] ? "var(--teal)" : "var(--card)", ' rx="4" stroke="var(--line)" stroke-width="1.5" class="tap" data-c="' + i + '"');
          }
        }
        f.stage.innerHTML = s + "</svg>";
        var g = gcd(k, 100), simp = k > 0 && k < 100 && [2, 4, 5, 10].indexOf(100 / g) >= 0 ? " = " + api.frac(k / g, 100 / g) : "";
        f.readout(t(n(k) + " out of 100", n(k) + " من ١٠٠") + " = <b>" + n(k) + t("%", "٪") + "</b> = " + api.frac(k, 100) + simp);
        api.check(k === target);
      }
      f.stage.onclick = function (e) {
        var row = tapped(e, "data-row"), cell = tapped(e, "data-c");
        if (row) {
          var r = +row.getAttribute("data-row"), full = true, c;
          for (c = 0; c < 10; c++) if (!on[r * 10 + c]) full = false;
          for (c = 0; c < 10; c++) on[r * 10 + c] = !full;
        } else if (cell) {
          var i = +cell.getAttribute("data-c");
          on[i] = !on[i];
        } else return;
        draw();
      };
      f.controls.appendChild(button(t("Clear", "مسح"), function () { on = flags(100, 0); draw(); }));
      f.hint(t("Tap squares to shade them, or tap an arrow to shade a whole row of 10. The grid is 100 squares.",
        "اضغط على المربعات لتظليلها، أو اضغط على السهم لتظليل صف كامل من ١٠. الشبكة فيها ١٠٠ مربع."));
      f.onNew(newGoal);
      newGoal();
    }

    if (mode === "percent") percent(); else square();
  };
})();
