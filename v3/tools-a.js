/* EduZone Learn v3 - hands-on tools (set A):
   numberline, placevalue, areagrid, array, gridmethod, share, balance.
   Each tool: EZ3.tools[name] = function (host, cfg, api) - see EZ3.makeToolApi in core.js. */
(function () {
  "use strict";
  var EZ = window.EZ3;
  if (!EZ) return;

  /* ---------- private helpers ---------- */
  function r1(v) { return Math.round(v * 10) / 10; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function pickMode(cfg, list) { return cfg && list.indexOf(cfg.mode) >= 0 ? cfg.mode : list[0]; }
  function signed(api, v) { return (v > 0 ? "+" : "") + api.n(v); }
  function svg(w, h, body, maxw, extra) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + ' ' + h + '" style="width:100%;max-width:' +
      (maxw || w) + 'px' + (extra ? ';' + extra : '') + '">' + body + '</svg>';
  }
  function txt(x, y, s, size, style, anchor, cls) {
    return '<text x="' + r1(x) + '" y="' + r1(y) + '" font-size="' + size + '" text-anchor="' + (anchor || "middle") +
      '" class="' + (cls || "svg-label") + '"' + (style ? ' style="' + style + '"' : '') + '>' + s + '</text>';
  }
  function line(x1, y1, x2, y2, stroke, w, extra) {
    return '<line x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(x2) + '" y2="' + r1(y2) + '" style="stroke:' + stroke +
      ';stroke-width:' + (w || 2) + ';stroke-linecap:round' + (extra ? ';' + extra : '') + '"/>';
  }
  function dot(cx, cy, r, color, extra) {
    return '<circle cx="' + r1(cx) + '" cy="' + r1(cy) + '" r="' + r1(r) + '" style="fill:' + color + (extra ? ';' + extra : '') + '"/>';
  }
  function scale(lo, hi, x0, x1) { return function (v) { return x0 + (v - lo) * (x1 - x0) / ((hi - lo) || 1); }; }
  // curved jump arrow from xa to xb, sitting on the line at y
  function jump(xa, xb, y, label, color, hMax) {
    var mx = (xa + xb) / 2, w = Math.abs(xb - xa), h = clamp(w * 0.45, 10, hMax || 55), cy = y - 2 * h;
    var s = '<path d="M' + r1(xa) + ' ' + r1(y) + ' Q' + r1(mx) + ' ' + r1(cy) + ' ' + r1(xb) + ' ' + r1(y) +
      '" style="fill:none;stroke:' + color + ';stroke-width:3;stroke-linecap:round"/>';
    var dx = xb - mx, dy = y - cy, L = Math.sqrt(dx * dx + dy * dy) || 1;
    dx /= L; dy /= L;
    var bx = xb - 10 * dx, by = y - 10 * dy;
    s += '<polygon points="' + r1(xb) + ',' + r1(y) + ' ' + r1(bx - 5 * dy) + ',' + r1(by + 5 * dx) + ' ' +
      r1(bx + 5 * dy) + ',' + r1(by - 5 * dx) + '" style="fill:' + color + '"/>';
    if (label && w >= 24) s += txt(mx, y - h - 8, label, 14, 'fill:' + color);
    return s;
  }
  function button(label, fn, cls, aria) {
    var b = EZ.el("button", cls || "btn sm", label);
    b.type = "button";
    if (aria) b.setAttribute("aria-label", aria);
    b.onclick = fn;
    return b;
  }
  function row(ltr) {
    var r = EZ.el("div", "btn-row");
    r.style.justifyContent = "center";
    if (ltr) r.setAttribute("dir", "ltr");
    return r;
  }
  function mark(el, ok) {
    el.style.borderColor = ok ? "var(--green)" : "var(--red)";
    el.style.background = ok ? "var(--green-soft)" : "var(--red-soft)";
  }
  function numInput(label, onEnter) {
    var i = EZ.el("input", "num-in sm");
    i.type = "text";
    i.setAttribute("inputmode", "numeric");
    i.setAttribute("autocomplete", "off");
    i.setAttribute("aria-label", label);
    i.addEventListener("input", function () { i.style.borderColor = ""; i.style.background = ""; });
    i.addEventListener("keydown", function (e) { if (e.key === "Enter") onEnter(); });
    return i;
  }
  function labelled(text, input) {
    var l = EZ.el("label", null, text + " ");
    l.style.cssText = "display:inline-flex;align-items:center;gap:8px;font-weight:800";
    l.appendChild(input);
    return l;
  }

  /* =====================================================================
     1. numberline - modes: negative, count, round, bridge
     ===================================================================== */
  var NL = {};
  EZ.tools.numberline = function (host, cfg, api) {
    var mode = pickMode(cfg, ["negative", "count", "round", "bridge"]);
    NL[mode](api.frame(), api);
  };

  // --- negative: -10..10, move a counter with -5 -1 +1 +5
  NL.negative = function (f, api) {
    var t = api.t, n = api.n, X = scale(-10, 10, 30, 610), Y = 92;
    var start = 0, ans = 0, pos = 0, temp = false, btns = [], bar = row(true);
    [-5, -1, 1, 5].forEach(function (d) {
      var b = button(signed(api, d), function () { pos = clamp(pos + d, -10, 10); draw(); });
      b.style.minWidth = "56px";
      btns.push([b, d]);
      bar.appendChild(b);
    });
    bar.appendChild(button("↺", function () { pos = start; draw(); }, "btn sm ghost", t("Back to the start", "العودة إلى البداية")));
    f.controls.appendChild(bar);
    f.hint(t("Numbers to the left of zero are negative. Going down means moving left.",
      "الأعداد على يسار الصفر سالبة. النزول يعني التحرك إلى اليسار."));
    function deg(v) { return v === 2 ? "درجتين" : n(v) + " درجات"; }
    function newGoal() {
      var d = 0, k = 0, m;
      do { start = api.rand(-9, 9); d = api.rand(2, 10) * api.pick([1, -1]); ans = start + d; k++; }
      while ((ans < -10 || ans > 10 || start * ans > 0) && k < 300);
      if (ans < -10 || ans > 10 || start * ans > 0) { start = 3; d = -7; ans = -4; }
      temp = Math.random() < 0.5; pos = start; m = Math.abs(d);
      if (temp) {
        f.goal(t("It is " + n(start) + "°C. The temperature " + (d < 0 ? "drops " : "rises ") + n(m) + " degrees. Move to the new temperature.",
          "درجة الحرارة " + n(start) + "°م. " + (d < 0 ? "انخفضت" : "ارتفعت") + " بمقدار " + deg(m) + ". انتقل إلى درجة الحرارة الجديدة."));
      } else {
        f.goal(t("Start at " + n(start) + " and go " + (d < 0 ? "down " : "up ") + n(m) + ".",
          "ابدأ من " + n(start) + " ثم " + (d < 0 ? "انزل " : "اصعد ") + n(m) + "."));
      }
      draw();
    }
    function col(v) { return v < 0 ? "var(--blue-2)" : v > 0 ? "var(--orange)" : "var(--ink)"; }
    function draw() {
      var s = "", v;
      s += line(X(-10), Y, X(0), Y, "var(--blue-2)", 16, "stroke-opacity:.22");
      s += line(X(0), Y, X(10), Y, "var(--orange)", 16, "stroke-opacity:.22");
      s += line(X(-10) - 12, Y, X(10) + 12, Y, "var(--ink-2)", 3);
      for (v = -10; v <= 10; v++) {
        var big = v % 5 === 0;
        s += line(X(v), Y - (big ? 11 : 7), X(v), Y + (big ? 11 : 7), "var(--ink-2)", big ? 3 : 2);
        s += txt(X(v), Y + 34, n(v), v === pos ? 18 : (big ? 15 : 13), "fill:" + col(v) + (v === pos ? ";font-weight:900" : ""));
      }
      if (pos !== start) s += jump(X(start), X(pos), Y - 8, signed(api, pos - start), "var(--purple)");
      s += dot(X(start), Y, 7, "var(--card)", "stroke:var(--muted);stroke-width:3");
      s += dot(X(pos), Y, 12, col(pos), "stroke:var(--card);stroke-width:3");
      f.stage.innerHTML = svg(640, 140, s);
      var moved = pos - start;
      f.readout((temp ? t("Temperature: <b>" + n(pos) + "°C</b>", "درجة الحرارة: <b>" + n(pos) + "°م</b>")
        : t("Marker at <b>" + n(pos) + "</b>", "المؤشر عند <b>" + n(pos) + "</b>")) +
        (moved ? " · " + t("moved ", "تحرّك ") + "<b>" + signed(api, moved) + "</b>" : ""));
      btns.forEach(function (p) { p[0].disabled = pos + p[1] < -10 || pos + p[1] > 10; });
      api.check(pos === ans);
    }
    f.onNew(newGoal);
    newGoal();
  };

  // --- count: count on / back in steps, with a fixed number of jumps
  NL.count = function (f, api) {
    var t = api.t, n = api.n, Y = 100, S = 0, k = 1, nj = 3, dir = 1, ans = 0, lo = 0, hi = 1, X = scale(0, 1, 30, 610);
    var jumps = [], cur = 1;
    var seg = api.seg([[1, t("Count on +", "عُدّ للأمام +")], [-1, t("Count back −", "عُدّ للخلف −")]], 1, function (v) { cur = v; draw(); });
    var jb = button(t("Jump", "اقفز"), function () { jumps.push(cur * k); draw(); }, "btn sm primary");
    var ub = button(t("Undo", "تراجع"), function () { jumps.pop(); draw(); });
    var rb = button(t("Reset", "إعادة"), function () { jumps = []; draw(); }, "btn sm ghost");
    var bar = row();
    bar.appendChild(seg); bar.appendChild(jb); bar.appendChild(ub); bar.appendChild(rb);
    f.controls.appendChild(bar);
    f.hint(t("Choose a direction, then press Jump. Make exactly the number of jumps in the goal.",
      "اختر الاتجاه ثم اضغط اقفز. نفّذ عدد القفزات المطلوب بالضبط."));
    function newGoal() {
      k = api.pick([3, 4, 6, 7, 8, 9, 25, 50, 100]); nj = api.rand(3, 5); dir = api.pick([1, -1]);
      if (k >= 25) S = k * (dir < 0 ? api.rand(nj, nj + 8) : api.rand(0, 8));
      else S = dir < 0 ? api.rand(nj * k, nj * k + 40) : api.rand(0, 50);
      ans = S + dir * nj * k; lo = S - (nj + 1) * k; hi = S + (nj + 1) * k;
      X = scale(lo, hi, 30, 610); jumps = [];
      f.goal(dir > 0
        ? t("Count on from " + n(S) + " in " + n(k) + "s. Make " + n(nj) + " jumps.",
          "عُدّ للأمام من " + n(S) + " بقفزات من " + n(k) + ". اقفز " + n(nj) + " قفزات.")
        : t("Count back from " + n(S) + " in " + n(k) + "s. Make " + n(nj) + " jumps.",
          "عُدّ للخلف من " + n(S) + " بقفزات من " + n(k) + ". اقفز " + n(nj) + " قفزات."));
      draw();
    }
    function draw() {
      var p = S, pts = [S], s = "", i, seen = {};
      for (i = 0; i < jumps.length; i++) { p += jumps[i]; pts.push(p); }
      s += line(X(lo) - 10, Y, X(hi) + 10, Y, "var(--ink-2)", 3);
      for (i = 0; i <= 2 * nj + 2; i++) s += line(X(lo + i * k), Y - 8, X(lo + i * k), Y + 8, "var(--ink-2)", 2);
      for (i = 1; i < pts.length; i++) {
        s += jump(X(pts[i - 1]), X(pts[i]), Y - 6, signed(api, pts[i] - pts[i - 1]), pts[i] > pts[i - 1] ? "var(--orange)" : "var(--blue-2)");
      }
      pts.forEach(function (v, j) {
        if (seen[v]) return;
        seen[v] = 1;
        s += txt(X(v), Y + 32, n(v), 16, j === 0 ? "fill:var(--muted)" : "");
      });
      s += dot(X(p), Y, 9, "var(--orange)", "stroke:var(--card);stroke-width:3");
      f.stage.innerHTML = svg(640, 150, s);
      jb.disabled = jumps.length >= 2 * nj + 2 || p + cur * k < lo || p + cur * k > hi;
      ub.disabled = rb.disabled = !jumps.length;
      var seq = pts.map(function (v) { return n(v); }).join(t(", ", "، "));
      f.readout(t("Jumps: <b>" + n(jumps.length) + "</b> · landed on <b>" + n(p) + "</b>",
        "عدد القفزات: <b>" + n(jumps.length) + "</b> · وصلت إلى <b>" + n(p) + "</b>") +
        '<br><span style="font-size:15px">' + seq + "</span>");
      api.check(jumps.length === nj && p === ans);
    }
    f.onNew(newGoal);
    newGoal();
  };

  // --- round: tap the nearer multiple of 10 / 100 / 1000
  NL.round = function (f, api) {
    var t = api.t, n = api.n, Y = 90, N = 0, p = 10, lo = 0, hi = 10, best = 0, choice = null, X = scale(0, 1, 90, 550);
    var bLo = button("", function () { choose(lo); }, "btn"), bHi = button("", function () { choose(hi); }, "btn");
    bLo.style.minWidth = bHi.style.minWidth = "110px";
    var bar = row(true);
    bar.appendChild(bLo); bar.appendChild(bHi);
    f.controls.appendChild(bar);
    f.hint(t("Look at the halfway mark. A number exactly halfway rounds up.",
      "انظر إلى علامة المنتصف. العدد الذي يقع في المنتصف تمامًا نقرّبه للأعلى."));
    f.stage.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-pick]") : null;
      if (el) choose(el.getAttribute("data-pick") === "lo" ? lo : hi);
    });
    function choose(v) { choice = v; draw(); }
    function newGoal() {
      p = api.pick([10, 100, 1000]);
      do {
        N = api.rand(101, 9999);
        if (Math.random() < 0.15) N = Math.floor(N / p) * p + p / 2;
      } while (N % p === 0 || N < p);
      lo = Math.floor(N / p) * p; hi = lo + p; best = N - lo >= p / 2 ? hi : lo; choice = null;
      X = scale(lo, hi, 90, 550);
      bLo.textContent = n(lo); bHi.textContent = n(hi);
      f.goal(t("Round " + n(N) + " to the nearest " + n(p) + ".", "قرّب العدد " + n(N) + " لأقرب " + n(p) + "."));
      draw();
    }
    function draw() {
      var s = "", i, mid = lo + p / 2;
      s += line(X(mid), Y - 34, X(mid), Y + 16, "var(--yellow)", 4, "stroke-dasharray:6 6");
      s += txt(X(mid), Y + 40, t("halfway ", "المنتصف ") + n(mid), 13, "", "middle", "svg-label svg-muted");
      s += line(X(lo), Y, X(hi), Y, "var(--ink-2)", 3);
      for (i = 0; i <= 10; i++) {
        var big = i === 0 || i === 10, xv = X(lo + i * p / 10);
        s += line(xv, Y - (big ? 14 : 8), xv, Y + (big ? 14 : 8), "var(--ink-2)", big ? 3 : 2);
      }
      [[lo, "lo"], [hi, "hi"]].forEach(function (e) {
        var x = X(e[0]), on = choice === e[0], c = on ? (e[0] === best ? "var(--green)" : "var(--red)") : "var(--blue-2)";
        s += '<g class="tap" data-pick="' + e[1] + '"><rect x="' + r1(x - 58) + '" y="' + (Y + 22) + '" width="116" height="46" rx="12" style="fill:var(--card);stroke:' +
          c + ';stroke-width:' + (on ? 4 : 2) + '"/>' + txt(x, Y + 52, n(e[0]), 19) + "</g>";
      });
      var xn = X(N);
      s += line(xn, Y - 36, xn, Y - 6, "var(--orange)", 3);
      s += dot(xn, Y, 7, "var(--orange)");
      s += txt(xn, Y - 44, n(N), 20, "fill:var(--orange)");
      f.stage.innerHTML = svg(640, 170, s);
      var dl = N - lo, dh = hi - N, msg;
      if (choice === null) {
        msg = t("Which is nearer to " + n(N) + ": <b>" + n(lo) + "</b> or <b>" + n(hi) + "</b>?",
          "أيهما أقرب إلى " + n(N) + ": <b>" + n(lo) + "</b> أم <b>" + n(hi) + "</b>؟");
      } else {
        msg = choice === best
          ? "✓ " + t(n(N) + " rounded to the nearest " + n(p) + " is <b>" + n(best) + "</b>.",
            "تقريب " + n(N) + " لأقرب " + n(p) + " هو <b>" + n(best) + "</b>.")
          : t("Not quite.", "ليس تمامًا.");
        msg += '<br><span style="font-size:15px">' +
          t(n(N) + " is " + n(dl) + " from " + n(lo) + " and " + n(dh) + " from " + n(hi) + ".",
            "العدد " + n(N) + " يبعد " + n(dl) + " عن " + n(lo) + " و" + n(dh) + " عن " + n(hi) + ".") +
          (dl === dh ? " " + t("Exactly halfway rounds up.", "في المنتصف تمامًا نقرّب للأعلى.") : "") + "</span>";
      }
      f.readout(msg);
      [[bLo, lo], [bHi, hi]].forEach(function (q) {
        q[0].style.borderColor = choice === q[1] ? (q[1] === best ? "var(--green)" : "var(--red)") : "";
        q[0].style.borderWidth = choice === q[1] ? "3px" : "";
      });
      api.check(choice === best);
    }
    f.onNew(newGoal);
    newGoal();
  };

  // --- bridge: add / subtract across a ten or hundred with +-1, +-10, +-100 jumps
  NL.bridge = function (f, api) {
    var t = api.t, n = api.n, Y = 90, a = 0, b = 0, op = 1, ans = 0, jumps = [], jbs = [], ub = null, rb = null;
    function gen() {
      var R = api.rand, type = R(1, 3), h, tt, o;
      op = api.pick([1, -1]);
      if (op > 0) {
        if (type === 1) { h = R(1, 8); tt = R(5, 9); a = h * 100 + tt * 10; b = R(11 - tt, 9) * 10; }
        else if (type === 2) { o = R(5, 9); a = R(10, 98) * 10 + o; b = R(11 - o, 9); }
        else { do { a = R(101, 899); b = R(12, 89); } while (a % 10 + b % 10 < 10 || b % 10 === 0); }
      } else {
        if (type === 1) { h = R(2, 9); tt = R(0, 4); a = h * 100 + tt * 10 + R(1, 9); b = R(tt + 1, 9) * 10; }
        else if (type === 2) { o = R(1, 4); a = R(10, 99) * 10 + o; b = R(o + 1, 9); }
        else { do { a = R(150, 999); b = R(12, 89); } while (a % 10 >= b % 10); }
      }
      ans = a + op * b;
    }
    function buildControls() {
      f.controls.innerHTML = "";
      var bar = row(true);
      jbs = [];
      [100, 10, 1].forEach(function (v) {
        var d = op * v, bt = button(signed(api, d), function () { jumps.push(d); draw(); }, "btn sm primary");
        bt.style.minWidth = "60px";
        jbs.push([bt, d]);
        bar.appendChild(bt);
      });
      ub = button(t("Undo", "تراجع"), function () { jumps.pop(); draw(); });
      rb = button(t("Reset jumps", "مسح القفزات"), function () { jumps = []; draw(); }, "btn sm ghost");
      bar.appendChild(ub); bar.appendChild(rb);
      f.controls.appendChild(bar);
    }
    function newGoal() {
      gen(); jumps = []; buildControls();
      var expr = n(a) + (op > 0 ? " + " : " − ") + n(b);
      f.goal(t("Work out " + expr + " by jumping from " + n(a) + ".", "احسب " + expr + " بالقفز من " + n(a) + "."));
      f.hint(op > 0
        ? t("Jump to the next ten or hundred first, then jump the rest.", "اقفز أولًا إلى العشرة أو المئة التالية، ثم اقفز الباقي.")
        : t("Jump back to the ten or hundred first, then jump the rest.", "اقفز للخلف أولًا إلى العشرة أو المئة، ثم اقفز الباقي."));
      draw();
    }
    function draw() {
      var pts = [a], p = a, i, s = "", v;
      for (i = 0; i < jumps.length; i++) { p += jumps[i]; pts.push(p); }
      var all = pts.concat([ans]), mn = Math.min.apply(null, all), mx = Math.max.apply(null, all);
      var pad = Math.max(4, (mx - mn) * 0.12), lo = mn - pad, hi = mx + pad, X = scale(lo, hi, 30, 610);
      var span = hi - lo, tick = span <= 70 ? 1 : span <= 700 ? 10 : 100, lab = tick === 1 ? 10 : 100;
      s += line(22, Y, 618, Y, "var(--ink-2)", 3);
      for (v = Math.ceil(lo / tick) * tick; v <= hi; v += tick) {
        var major = v % lab === 0, h100 = v % 100 === 0;
        s += line(X(v), Y - (major ? 9 : 5), X(v), Y + (major ? 9 : 5), h100 ? "var(--purple)" : "var(--ink-2)", major ? 2.5 : 1.2);
        if (major) s += txt(X(v), Y + 62, n(v), 12, h100 ? "fill:var(--purple)" : "", "middle", "svg-label svg-muted");
      }
      for (i = 1; i < pts.length; i++) {
        s += jump(X(pts[i - 1]), X(pts[i]), Y - 4, signed(api, pts[i] - pts[i - 1]), op > 0 ? "var(--orange)" : "var(--blue-2)", 50);
      }
      // landing labels: start, current, and any point with room around it
      var last = pts.length - 1, lastX = -999, xl = X(pts[last]);
      for (i = 0; i <= last; i++) {
        var x = X(pts[i]);
        if (i > 0 && i < last && (Math.abs(x - lastX) < 38 || Math.abs(x - xl) < 38)) continue;
        if (i === last && last > 0 && pts[last] === pts[0]) continue;
        var yy = Math.abs(x - lastX) < 38 ? Y + 44 : Y + 28;
        s += txt(x, yy, n(pts[i]), 15, i === 0 ? "fill:var(--muted)" : "");
        lastX = x;
      }
      s += dot(X(a), Y, 6, "var(--card)", "stroke:var(--muted);stroke-width:3");
      s += dot(X(p), Y, 9, op > 0 ? "var(--orange)" : "var(--blue-2)", "stroke:var(--card);stroke-width:3");
      f.stage.innerHTML = svg(640, 165, s);
      jbs.forEach(function (q) { q[0].disabled = p + q[1] < 0 || p + q[1] > 1999 || jumps.length >= 40; });
      ub.disabled = rb.disabled = !jumps.length;
      f.readout(t("Now at <b>" + n(p) + "</b> · jumped <b>" + signed(api, p - a) + "</b> · jumps: " + n(jumps.length),
        "الآن عند <b>" + n(p) + "</b> · مقدار القفز <b>" + signed(api, p - a) + "</b> · عدد القفزات: " + n(jumps.length)));
      api.check(p === ans);
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     2. placevalue - modes: build, compare
     ===================================================================== */
  EZ.tools.placevalue = function (host, cfg, api) {
    var t = api.t, n = api.n, mode = pickMode(cfg, ["build", "compare"]), f = api.frame();
    var COLS = [
      [t("Ten thousands", "عشرات الآلاف"), 10000, "var(--purple)"],
      [t("Thousands", "الآلاف"), 1000, "var(--teal)"],
      [t("Hundreds", "المئات"), 100, "var(--green)"],
      [t("Tens", "العشرات"), 10, "var(--blue-2)"],
      [t("Ones", "الآحاد"), 1, "var(--orange)"]
    ];
    var dig = [0, 0, 0, 0, 0], steps = [], g = { kind: "build", a: 0, b: 0 }, wrap = row(true);
    COLS.forEach(function (c, i) {
      var st = api.stepper(c[0], 0, 9, 0, function (v) { dig[i] = v; draw(); });
      steps.push(st);
      wrap.appendChild(st);
    });
    f.controls.appendChild(wrap);
    f.hint(mode === "build"
      ? t("Use + and − in each column. Each column holds " + n(0) + " to " + n(9) + ".",
        "استخدم + و − في كل عمود. كل عمود يأخذ رقمًا من " + n(0) + " إلى " + n(9) + ".")
      : t("Compare from the biggest place value: the first different digit decides.",
        "قارن بدءًا من أكبر قيمة مكانية: أول رقم مختلف هو الذي يحدد."));
    function val(d) { return d.reduce(function (s, x) { return s * 10 + x; }, 0); }
    function digs(v) { var d = [], i; for (i = 0; i < 5; i++) { d.unshift(v % 10); v = Math.floor(v / 10); } return d; }
    function setVal(v) { dig = digs(v); steps.forEach(function (s, i) { s.set(dig[i]); }); }
    // a number sharing the leading digits of a, but smaller (s<0) or bigger (s>0)
    function near(a, s) {
      var ds = digs(a), k, j;
      for (k = 0; k < 60; k++) {
        var p = api.rand(1, 4), d = ds.slice();
        if (s < 0 ? d[p] === 0 : d[p] === 9) continue;
        d[p] = s < 0 ? api.rand(0, d[p] - 1) : api.rand(d[p] + 1, 9);
        for (j = p + 1; j < 5; j++) d[j] = api.rand(0, 9);
        return val(d);
      }
      return s < 0 ? 0 : 99999;
    }
    function ok(v) {
      return g.kind === "build" ? v === g.a : g.kind === "between" ? v > g.a && v < g.b : g.kind === "gt" ? v > g.a : v < g.a;
    }
    function newGoal() {
      if (mode === "build") {
        g = { kind: "build", a: Math.random() < 0.7 ? api.rand(10000, 99999) : api.rand(1000, 9999), b: 0 };
        setVal(0);
        f.goal(t("Build " + n(g.a), "كوّن العدد " + n(g.a)));
      } else {
        var kind = api.pick(["between", "gt", "lt"]), a = api.rand(10000, 98999);
        g = { kind: kind, a: a, b: kind === "between" ? a + (Math.random() < 0.5 ? api.rand(10, 60) : api.rand(80, 400)) : 0 };
        setVal(kind === "lt" ? near(a, 1) : near(a, -1));
        f.goal(kind === "between" ? t("Build a number between " + n(g.a) + " and " + n(g.b), "كوّن عددًا بين " + n(g.a) + " و" + n(g.b))
          : kind === "gt" ? t("Build a number greater than " + n(a), "كوّن عددًا أكبر من " + n(a))
          : t("Build a number smaller than " + n(a), "كوّن عددًا أصغر من " + n(a)));
      }
      draw();
    }
    function rel(x, y) { return n(x) + (x > y ? " &gt; " : x < y ? " &lt; " : " = ") + n(y); }
    function draw() {
      var v = val(dig), s = "", i, j, parts = [];
      for (i = 0; i < 5; i++) {
        var x0 = i * 128, cx = x0 + 64, c = COLS[i];
        s += '<rect x="' + (x0 + 4) + '" y="4" width="120" height="232" rx="14" style="fill:var(--card);stroke:var(--line);stroke-width:2"/>';
        s += txt(cx, 26, c[0], 13);
        s += txt(cx, 44, n(c[1]), 12, "", "middle", "svg-label svg-muted");
        for (j = 0; j < 10; j++) {
          var on = j < dig[i];
          s += '<circle cx="' + (cx + (j % 2 ? 15 : -15)) + '" cy="' + (66 + Math.floor(j / 2) * 24) + '" r="9" style="fill:' +
            (on ? c[2] : "none") + ";stroke:" + (on ? c[2] : "var(--line)") + ';stroke-width:2"/>';
        }
        s += txt(cx, 222, n(dig[i]), 40, "fill:" + c[2]);
        if (dig[i]) parts.push(n(dig[i] * c[1]));
      }
      f.stage.innerHTML = svg(640, 240, s);
      var html = "<b>" + n(v) + "</b>" + (parts.length > 1 ? " = " + parts.join(" + ") : "");
      if (g.kind !== "build") {
        html += '<br><span style="font-size:15px">' + (g.kind === "between" ? rel(v, g.a) + t(" and ", " و") + rel(v, g.b) : rel(v, g.a)) +
          (ok(v) ? " ✓" : "") + "</span>";
      }
      f.readout(html);
      api.check(ok(v));
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     3. areagrid - modes: area, perimeter, compound
     ===================================================================== */
  EZ.tools.areagrid = function (host, cfg, api) {
    var t = api.t, n = api.n, mode = pickMode(cfg, ["area", "perimeter", "compound"]), f = api.frame();
    var C = 10, R = 7, S = 44, P = 10, W = C * S + 2 * P, H = R * S + 2 * P;
    var cells = [], g = { A: 0, P: 0 }, paint = false, drag = false, i, s = "";
    for (i = 0; i < C * R; i++) {
      cells.push(false);
      s += '<rect class="tap" data-cell="' + i + '" x="' + (P + (i % C) * S) + '" y="' + (P + Math.floor(i / C) * S) +
        '" width="' + S + '" height="' + S + '" style="fill:var(--card);stroke:var(--line);stroke-width:1.5"/>';
    }
    s += '<g data-role="box" style="pointer-events:none"></g><g data-role="edge" style="pointer-events:none"></g>';
    f.stage.innerHTML = svg(W, H, s, 540, "touch-action:none;user-select:none;-webkit-user-select:none");
    var svgEl = f.stage.querySelector("svg"), rects = svgEl.querySelectorAll("[data-cell]");
    var boxG = svgEl.querySelector('[data-role="box"]'), edgeG = svgEl.querySelector('[data-role="edge"]');
    function cellAt(e) {
      var el = document.elementFromPoint(e.clientX, e.clientY);
      el = el && el.closest ? el.closest("[data-cell]") : null;
      return el && svgEl.contains(el) ? +el.getAttribute("data-cell") : -1;
    }
    svgEl.addEventListener("pointerdown", function (e) {
      var k = cellAt(e);
      if (k < 0) return;
      e.preventDefault();
      drag = true; paint = !cells[k]; cells[k] = paint; last = k; update();
    });
    // fill every square between the last and current pointer positions, so fast drags leave no gaps
    var last = -1;
    svgEl.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var k = cellAt(e);
      if (k < 0) return;
      var changed = false, x0 = last % C, y0 = Math.floor(last / C), x1 = k % C, y1 = Math.floor(k / C);
      var steps = last < 0 ? 0 : Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
      for (var j = 0; j <= steps; j++) {
        var c = steps ? Math.round(x0 + (x1 - x0) * j / steps) + Math.round(y0 + (y1 - y0) * j / steps) * C : k;
        if (cells[c] !== paint) { cells[c] = paint; changed = true; }
      }
      last = k;
      if (changed) update();
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (ev) { svgEl.addEventListener(ev, function () { drag = false; }); });

    var bar = row();
    bar.appendChild(button(t("Clear", "مسح"), function () { clear(); update(); }, "btn sm ghost"));
    f.controls.appendChild(bar);
    f.hint(mode === "area" ? t("Tap or drag across squares to colour them. Area = number of squares.",
      "اضغط على المربعات أو اسحب فوقها لتلوينها. المساحة = عدد المربعات.")
      : mode === "perimeter" ? t("Perimeter = the length of the orange edge all the way round.",
        "المحيط = طول الحافة البرتقالية حول الشكل كله.")
      : t("The squares must all be joined. The dashed box shows the width and height.",
        "يجب أن تكون المربعات متصلة. المستطيل المتقطع يوضّح العرض والارتفاع."));
    function clear() { for (var k = 0; k < cells.length; k++) cells[k] = false; }
    function update() {
      var area = 0, per = 0, d = "", rMin = R, rMax = -1, cMin = C, cMax = -1, first = -1, r, c, k;
      for (k = 0; k < C * R; k++) {
        rects[k].style.fill = cells[k] ? "var(--blue-2)" : "var(--card)";
        rects[k].style.fillOpacity = cells[k] ? ".55" : "1";
        if (!cells[k]) continue;
        r = Math.floor(k / C); c = k % C; area++;
        if (first < 0) first = k;
        rMin = Math.min(rMin, r); rMax = Math.max(rMax, r); cMin = Math.min(cMin, c); cMax = Math.max(cMax, c);
        var x = P + c * S, y = P + r * S;
        if (r === 0 || !cells[k - C]) { per++; d += "M" + x + " " + y + "h" + S; }
        if (r === R - 1 || !cells[k + C]) { per++; d += "M" + x + " " + (y + S) + "h" + S; }
        if (c === 0 || !cells[k - 1]) { per++; d += "M" + x + " " + y + "v" + S; }
        if (c === C - 1 || !cells[k + 1]) { per++; d += "M" + (x + S) + " " + y + "v" + S; }
      }
      var seen = {}, stack = first >= 0 ? [first] : [], cnt = 0;
      while (stack.length) {
        k = stack.pop();
        if (seen[k] || !cells[k]) continue;
        seen[k] = 1; cnt++; r = Math.floor(k / C); c = k % C;
        if (r > 0) stack.push(k - C);
        if (r < R - 1) stack.push(k + C);
        if (c > 0) stack.push(k - 1);
        if (c < C - 1) stack.push(k + 1);
      }
      var conn = area > 0 && cnt === area, bw = cMax - cMin + 1, bh = rMax - rMin + 1, rect = area > 0 && bw * bh === area;
      edgeG.innerHTML = d ? '<path d="' + d + '" style="fill:none;stroke:var(--orange);stroke-width:4;stroke-linecap:round"/>' : "";
      boxG.innerHTML = mode === "compound" && area > 0 && !rect
        ? '<rect x="' + (P + cMin * S - 3) + '" y="' + (P + rMin * S - 3) + '" width="' + (bw * S + 6) + '" height="' + (bh * S + 6) +
          '" rx="4" style="fill:none;stroke:var(--purple);stroke-width:2.5;stroke-dasharray:7 6"/>' : "";
      var html = t("Area = <b>" + n(area) + "</b> square units", "المساحة = <b>" + n(area) + "</b> وحدة مربعة") + " · " +
        t("Perimeter = <b>" + n(per) + "</b> units", "المحيط = <b>" + n(per) + "</b> وحدة");
      if (area) {
        html += '<br><span style="font-size:15px">' + (rect ? t("Rectangle ", "مستطيل ") + n(bw) + " × " + n(bh) : t("Not a rectangle", "ليس مستطيلًا"));
        if (mode === "compound" && !rect) html += " · " + t("Box ", "المستطيل المحيط ") + n(bw) + " × " + n(bh);
        if (!conn) html += " · " + t("the squares must be joined", "يجب أن تكون المربعات متصلة");
        html += "</span>";
      }
      f.readout(html);
      api.check(mode === "compound" ? conn && !rect && area === g.A
        : rect && (mode === "area" ? area === g.A && (!g.P || per === g.P) : per === g.P));
    }
    function newGoal() {
      var w = api.rand(2, 8), h = api.rand(mode === "perimeter" ? 1 : 2, 6);
      g = { A: w * h, P: 2 * (w + h) };
      if (mode === "area") {
        if (Math.random() < 0.5) {
          g.P = 0;
          f.goal(t("Make a rectangle with an area of " + n(g.A) + " square units.", "كوّن مستطيلًا مساحته " + n(g.A) + " وحدة مربعة."));
        } else {
          f.goal(t("Make a rectangle with area " + n(g.A) + " and perimeter " + n(g.P) + ".", "كوّن مستطيلًا مساحته " + n(g.A) + " ومحيطه " + n(g.P) + "."));
        }
      } else if (mode === "perimeter") {
        f.goal(t("Make a rectangle with a perimeter of " + n(g.P) + " units.", "كوّن مستطيلًا محيطه " + n(g.P) + " وحدة."));
      } else {
        g.A = api.rand(7, 16);
        f.goal(t("Make an L-shape (not a rectangle) with an area of " + n(g.A) + " square units.",
          "كوّن شكلًا على هيئة حرف L (ليس مستطيلًا) مساحته " + n(g.A) + " وحدة مربعة."));
      }
      clear();
      update();
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     4. array - modes: facts, factors, square
     ===================================================================== */
  EZ.tools.array = function (host, cfg, api) {
    var t = api.t, n = api.n, mode = pickMode(cfg, ["facts", "factors", "square"]), f = api.frame();
    var rows = 1, cols = 1, g = { a: 2, b: 2, N: 12, total: 1, s: 2 }, found = {};
    function dotsSvg(r, c, extra) {
      var cw = c + (extra ? 1 : 0), sp = Math.min(34, 540 / Math.max(cw, 1), 340 / Math.max(r, 1)), rad = sp * 0.36;
      var bw = cw * sp, bh = r * sp, x0 = 330 - bw / 2, y0 = 215 - bh / 2, s = "", i, j;
      for (i = 0; i < r; i++) for (j = 0; j < c; j++) s += dot(x0 + j * sp + sp / 2, y0 + i * sp + sp / 2, rad, "var(--blue-2)");
      for (i = 0; i < extra; i++) s += dot(x0 + c * sp + sp / 2, y0 + i * sp + sp / 2, rad, "var(--red)");
      if (c) {
        s += line(x0 + sp * 0.2, y0 - 10, x0 + c * sp - sp * 0.2, y0 - 10, "var(--muted)", 2);
        s += txt(x0 + c * sp / 2, y0 - 18, n(c), 18, "fill:var(--muted)");
      }
      s += line(x0 - 10, y0 + sp * 0.2, x0 - 10, y0 + bh - sp * 0.2, "var(--muted)", 2);
      s += txt(x0 - 18, y0 + bh / 2 + 6, n(r), 18, "fill:var(--muted)", "end");
      return svg(640, 420, s, 560);
    }
    function stepper(label, max, fn) {
      var w = row(true), st = api.stepper(label, 1, max, 1, fn);
      w.appendChild(st);
      return [w, st];
    }
    function controls() {
      f.controls.innerHTML = "";
      rows = cols = 1;
      var w;
      if (mode === "facts") {
        w = stepper(t("Rows", "الصفوف"), 12, function (v) { rows = v; draw(); })[0];
        w.appendChild(api.stepper(t("Columns", "الأعمدة"), 1, 12, 1, function (v) { cols = v; draw(); }));
      } else if (mode === "factors") {
        w = stepper(t("Rows", "الصفوف"), g.N, function (v) { rows = v; draw(); })[0];
      } else {
        w = stepper(t("Rows = columns", "الصفوف = الأعمدة"), 12, function (v) { rows = cols = v; draw(); })[0];
      }
      f.controls.appendChild(w);
    }
    function newGoal() {
      if (mode === "facts") {
        g.a = api.rand(2, 12); g.b = api.rand(2, 12);
        f.goal(t("Show " + n(g.a) + " × " + n(g.b) + " as an array.", "اعرض " + n(g.a) + " × " + n(g.b) + " على شكل مصفوفة."));
        f.hint(t("Set the rows and the columns. Turning the array round gives the same product.",
          "اضبط عدد الصفوف والأعمدة. تدوير المصفوفة يعطي حاصل الضرب نفسه."));
      } else if (mode === "factors") {
        g.N = api.pick([12, 16, 18, 20, 24, 30, 36]); g.total = 0; found = {};
        for (var k = 1; k * k <= g.N; k++) if (g.N % k === 0) g.total++;
        f.goal(t("Find all the factor pairs of " + n(g.N) + ".", "أوجد جميع أزواج عوامل العدد " + n(g.N) + "."));
        f.hint(t("Change the number of rows. If no dots are left over, you have found a factor pair.",
          "غيّر عدد الصفوف. إذا لم تتبقَّ أي نقاط، فقد وجدت زوجًا من العوامل."));
      } else {
        g.s = api.rand(2, 12);
        f.goal(t("Build the square number " + n(g.s * g.s) + ".", "كوّن العدد المربع " + n(g.s * g.s) + "."));
        f.hint(t("A square number has the same number of rows and columns.", "العدد المربع له نفس عدد الصفوف والأعمدة."));
      }
      controls();
      draw();
    }
    function draw() {
      var html, ok;
      if (mode === "factors") {
        var N = g.N, c = Math.floor(N / rows), extra = N - rows * c;
        if (!extra) found[Math.min(rows, c) + "x" + Math.max(rows, c)] = [Math.min(rows, c), Math.max(rows, c)];
        f.stage.innerHTML = dotsSvg(rows, c, extra);
        html = extra
          ? t(n(rows) + " rows of " + n(c) + " with <b>" + n(extra) + "</b> left over, so " + n(rows) + " is not a factor of " + n(N) + ".",
            "عدد الصفوف " + n(rows) + "، في كل صف " + n(c) + "، ويتبقّى <b>" + n(extra) + "</b>، إذن " + n(rows) + " ليس عاملًا من عوامل " + n(N) + ".")
          : "<b>" + n(rows) + "</b> × <b>" + n(c) + "</b> = <b>" + n(N) + "</b> · " +
            t(n(rows) + " is a factor of " + n(N) + ".", "العدد " + n(rows) + " عامل من عوامل " + n(N) + ".");
        var keys = Object.keys(found).sort(function (p, q) { return found[p][0] - found[q][0]; });
        html += '<br><span style="font-size:15px">' + t("Factor pairs found", "أزواج العوامل التي وجدتها") + " (" + n(keys.length) +
          t(" of ", " من ") + n(g.total) + "): " + keys.map(function (k) { return n(found[k][0]) + " × " + n(found[k][1]); }).join(t(", ", "، ")) + "</span>";
        ok = keys.length === g.total;
      } else {
        f.stage.innerHTML = dotsSvg(rows, cols, 0);
        html = "<b>" + n(rows) + "</b> × <b>" + n(cols) + "</b> = <b>" + n(rows * cols) + "</b>";
        if (mode === "facts") {
          html += '<br><span style="font-size:15px">' + t(n(rows) + (rows === 1 ? " row of " : " rows of ") + n(cols),
            "عدد الصفوف " + n(rows) + "، وفي كل صف " + n(cols)) + "</span>";
          ok = (rows === g.a && cols === g.b) || (rows === g.b && cols === g.a);
        } else {
          ok = rows === g.s;
        }
      }
      f.readout(html);
      api.check(ok);
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     5. gridmethod - mode: multiply (2/3-digit x 1-digit)
     ===================================================================== */
  EZ.tools.gridmethod = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), a = 0, b = 2, parts = [], ins = [], tot = null;
    var bar = row();
    bar.appendChild(button(t("Check ✓", "تحقّق ✓"), check, "btn primary"));
    f.controls.appendChild(bar);
    function cell(bg) {
      return ' style="background:' + bg + ';border-radius:12px;padding:8px 14px;font-size:20px;font-weight:900;text-align:center;min-width:84px;color:var(--ink)"';
    }
    function newGoal() {
      var k = api.rand(2, 3), i, h;
      parts = []; a = 0;
      for (i = k - 1; i >= 0; i--) { var p = api.rand(1, 9) * Math.pow(10, i); parts.push(p); a += p; }
      b = api.rand(2, 9);
      f.goal(t("Work out " + n(a) + " × " + n(b) + " using the grid method.", "احسب " + n(a) + " × " + n(b) + " باستخدام طريقة الشبكة."));
      f.hint(t("Multiply each part by " + n(b) + ", then add the answers to find the total.",
        "اضرب كل جزء في " + n(b) + "، ثم اجمع النواتج لتحصل على المجموع."));
      h = '<table style="border-collapse:separate;border-spacing:6px;margin:0 auto"><tr><th' + cell("var(--bg-2)") + ">×</th>";
      parts.forEach(function (p) { h += "<th" + cell("var(--blue-soft)") + ">" + n(p) + "</th>"; });
      h += "</tr><tr><th" + cell("var(--orange-soft)") + ">" + n(b) + "</th>";
      parts.forEach(function () { h += '<td style="text-align:center"></td>'; });
      h += "</tr></table>";
      f.stage.innerHTML = h;
      var tds = f.stage.querySelectorAll("td");
      ins = parts.map(function (p, j) {
        var el = numInput(n(p) + " × " + n(b), check);
        tds[j].appendChild(el);
        return el;
      });
      tot = numInput(t("Total", "المجموع"), check);
      tot.style.width = "110px";
      var totRow = row();
      totRow.setAttribute("dir", EZ.isAr() ? "rtl" : "ltr");
      totRow.style.width = "100%";
      totRow.appendChild(labelled(t("Total =", "المجموع ="), tot));
      f.stage.appendChild(totRow);
      f.readout(n(a) + " = " + parts.map(function (p) { return n(p); }).join(" + "));
    }
    function check() {
      var good = 0, tok, all;
      ins.forEach(function (el, i) {
        var ok = EZ.parse(el.value) === parts[i] * b;
        mark(el, ok);
        if (ok) good++;
      });
      tok = EZ.parse(tot.value) === a * b;
      mark(tot, tok);
      all = good === parts.length && tok;
      f.readout(all ? "✓ " + n(a) + " × " + n(b) + " = <b>" + n(a * b) + "</b>"
        : t("Parts correct: <b>" + n(good) + "</b> of " + n(parts.length) + " · total " + (tok ? "✓" : "✗"),
          "الأجزاء الصحيحة: <b>" + n(good) + "</b> من " + n(parts.length) + " · المجموع " + (tok ? "✓" : "✗")));
      api.check(all);
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     6. share - mode: divide (2-digit / 1-digit by sharing tens and ones)
     ===================================================================== */
  EZ.tools.share = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), N = 0, k = 2, q = 0, r = 0, bT = 0, bO = 0, gT = 0, gO = 0;
    var bTen = button(t("Give " + n(1) + " ten to each group", "أعطِ كل مجموعة عشرة واحدة"), function () { bT -= k; gT++; draw(); }, "btn sm blue");
    var bEx = button(t("Exchange " + n(1) + " ten for " + n(10) + " ones", "استبدل عشرة واحدة بـ " + n(10) + " آحاد"), function () { bT--; bO += 10; draw(); });
    var bOne = button(t("Give " + n(1) + " one to each group", "أعطِ كل مجموعة واحدًا من الآحاد"), function () { bO -= k; gO++; draw(); }, "btn sm primary");
    var bRe = button(t("Start again", "ابدأ من جديد"), function () { reset(); draw(); }, "btn sm ghost");
    var qIn = numInput(t("Each group gets", "نصيب كل مجموعة"), check), rIn = numInput(t("Remainder", "الباقي"), check);
    var row1 = row(), row2 = row();
    row1.appendChild(bTen); row1.appendChild(bEx); row1.appendChild(bOne); row1.appendChild(bRe);
    row2.appendChild(labelled(t("Each group gets", "نصيب كل مجموعة"), qIn));
    row2.appendChild(labelled(t("Remainder", "الباقي"), rIn));
    row2.appendChild(button(t("Check ✓", "تحقّق ✓"), check, "btn primary"));
    row1.style.width = row2.style.width = "100%";
    f.controls.appendChild(row1); f.controls.appendChild(row2);
    f.hint(t("Share the tens first. If there are not enough tens, exchange " + n(1) + " ten for " + n(10) + " ones.",
      "وزّع العشرات أولًا. إذا لم تكفِ العشرات، استبدل عشرة واحدة بـ " + n(10) + " آحاد."));
    function reset() { bT = Math.floor(N / 10); bO = N % 10; gT = gO = 0; }
    function rod(x, y, w, h) {
      var s = '<rect x="' + r1(x) + '" y="' + r1(y) + '" width="' + w + '" height="' + h + '" rx="2" style="fill:var(--blue-2)"/>', i;
      for (i = 1; i < 10; i++) s += line(x + 1, y + i * h / 10, x + w - 1, y + i * h / 10, "var(--card)", 1);
      return s;
    }
    function contents(cx, cy) {
      var s = "", i, cols = gO > 20 ? 7 : 5, sp = gO > 20 ? 8.5 : 11, rws = Math.ceil(gO / cols), hT = gT ? 40 : 0;
      var top = cy - (hT + rws * sp) / 2;
      for (i = 0; i < gT; i++) s += rod(cx - gT * 5 + i * 10 + 1.5, top, 7, 34);
      for (i = 0; i < gO; i++) {
        var rr = Math.floor(i / cols), inR = Math.min(cols, gO - rr * cols);
        s += dot(cx - (inR - 1) * sp / 2 + (i % cols) * sp, top + hT + rr * sp + sp / 2, sp * 0.36, "var(--orange)");
      }
      return s;
    }
    function newGoal() {
      k = api.rand(2, 9);
      r = Math.random() < 0.4 ? api.rand(1, k - 1) : 0;
      q = api.rand(Math.max(2, Math.ceil((12 - r) / k)), Math.floor((99 - r) / k));
      N = q * k + r;
      qIn.value = rIn.value = "";
      [qIn, rIn].forEach(function (el) { el.style.borderColor = ""; el.style.background = ""; });
      reset();
      f.goal(t("Share " + n(N) + " equally into " + n(k) + " groups: " + n(N) + " ÷ " + n(k) + " = ?",
        "وزّع " + n(N) + " بالتساوي على " + (k === 2 ? "مجموعتين" : n(k) + " مجموعات") + ": " + n(N) + " ÷ " + n(k) + " = ؟"));
      draw();
    }
    function draw(extra) {
      var s = "", i, done = bT === 0 && bO < k;
      var bankH = Math.max(100, 44 + Math.ceil(bO / 10) * 18);
      s += '<rect x="6" y="6" width="628" height="' + bankH + '" rx="14" style="fill:var(--card);stroke:var(--line);stroke-width:2"/>';
      s += txt(20, 28, t("To share", "للتوزيع"), 14, "fill:var(--muted)", "start");
      for (i = 0; i < bT; i++) s += rod(22 + i * 22, 38, 14, 54);
      for (i = 0; i < bO; i++) s += dot(262 + (i % 10) * 18, 46 + Math.floor(i / 10) * 18, 6.5, done ? "var(--red)" : "var(--orange)");
      if (done) {
        s += txt(622, 28, bO ? t("Remainder: ", "الباقي: ") + n(bO) : t("Nothing left over", "لا يوجد باقٍ"), 16,
          "fill:" + (bO ? "var(--red)" : "var(--green)"), "end");
      }
      var gy = bankH + 14, perRow = k <= 5 ? k : Math.ceil(k / 2);
      for (i = 0; i < k; i++) {
        var rw = Math.floor(i / perRow), inRow = rw === 0 ? perRow : k - perRow;
        var cx = 320 - inRow * 64 + (i % perRow) * 128 + 64, cy = gy + 62 + rw * 132;
        s += dot(cx, cy, 58, "var(--bg-2)", "stroke:var(--purple);stroke-width:2.5");
        s += contents(cx, cy);
      }
      var H = gy + (k > perRow ? 2 : 1) * 132 + 4;
      f.stage.innerHTML = svg(640, H, s, 600);
      bTen.disabled = bT < k; bEx.disabled = bT < 1; bOne.disabled = bO < k;
      var html = t("To share: tens <b>" + n(bT) + "</b>, ones <b>" + n(bO) + "</b>", "للتوزيع: عشرات <b>" + n(bT) + "</b>، آحاد <b>" + n(bO) + "</b>") +
        " · " + t("Each group: tens <b>" + n(gT) + "</b>, ones <b>" + n(gO) + "</b>", "في كل مجموعة: عشرات <b>" + n(gT) + "</b>، آحاد <b>" + n(gO) + "</b>");
      if (done) html += "<br>" + t("Sharing finished. Now type your answer.", "انتهى التوزيع. اكتب إجابتك الآن.");
      else if (bT > 0 && bT < k && bO < k) html += "<br>" + t("Not enough tens for every group: exchange a ten for ones.", "العشرات لا تكفي كل المجموعات: استبدل عشرة بآحاد.");
      f.readout(html + (extra ? "<br>" + extra : ""));
    }
    function check() {
      var qv = EZ.parse(qIn.value), rv = rIn.value.trim() === "" ? 0 : EZ.parse(rIn.value), okq = qv === q, okr = rv === r;
      mark(qIn, okq); mark(rIn, okr);
      if (okq && okr) {
        f.readout("✓ " + n(N) + " ÷ " + n(k) + " = <b>" + n(q) + "</b>" + (r ? t(" remainder <b>" + n(r) + "</b>", " والباقي <b>" + n(r) + "</b>") : ""));
      } else {
        draw("✗ " + t("Not yet. Look at one group, and at what is left over.", "ليس بعد. انظر إلى مجموعة واحدة وإلى ما تبقّى."));
      }
      api.check(okq && okr);
    }
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     7. balance - mode: missing (missing-number balance scale)
     ===================================================================== */
  EZ.tools.balance = function (host, cfg, api) {
    var t = api.t, n = api.n, f = api.frame(), x = 0, MAX = 200, g = null, beam = null, panL = null, panR = null, valL = null;
    var out = EZ.el("span");
    out.style.cssText = "font-weight:900;font-size:22px;min-width:110px;text-align:center;display:inline-block";
    var bar = row(true), btns = [];
    function add(d) {
      var b = button(signed(api, d), function () { x = clamp(x + d, 0, MAX); update(); }, "btn sm");
      b.style.minWidth = "56px";
      btns.push([b, d]);
      bar.appendChild(b);
    }
    add(-10); add(-1); bar.appendChild(out); add(1); add(10);
    f.controls.appendChild(bar);
    f.hint(t("Change □ until both sides are equal. The heavier side goes down.", "غيّر قيمة □ حتى يتساوى الطرفان. الطرف الأثقل ينزل للأسفل."));
    function newGoal() {
      var op = api.pick(["+", "−", "×", "÷"]), R = api.rand, a, c, ans, first = Math.random() < 0.5, L;
      if (op === "+") { ans = R(5, 60); a = R(5, 60); c = ans + a; L = function (v) { return v + a; }; }
      else if (op === "−") {
        if (first) { ans = R(20, 99); a = R(3, ans - 5); c = ans - a; L = function (v) { return v - a; }; }
        else { a = R(20, 99); ans = R(3, a - 3); c = a - ans; L = function (v) { return a - v; }; }
      } else if (op === "×") { a = R(2, 12); ans = R(2, 12); c = a * ans; L = function (v) { return v * a; }; }
      else { first = true; a = R(2, 10); c = R(2, 12); ans = a * c; L = function (v) { return v / a; }; }
      g = { op: op, a: a, c: c, ans: ans, L: L, expr: first ? "□ " + op + " " + n(a) : n(a) + " " + op + " □" };
      x = 0;
      f.goal(t("Find the missing number: ", "أوجد العدد المفقود: ") + g.expr + " = " + n(c));
      build();
      update();
    }
    function lText(v) {
      if (g.op === "÷" && v % g.a) return n(Math.floor(v / g.a)) + t(" r ", " والباقي ") + n(v % g.a);
      return n(g.L(v));
    }
    function geom() {
      var d = g.L(x) - g.c, ang = d === 0 ? 0 : (d > 0 ? -1 : 1) * clamp(Math.abs(d) / Math.max(g.c, 1) * 40, 3, 12);
      var rad = ang * Math.PI / 180, cs = Math.cos(rad), sn = Math.sin(rad);
      return {
        d: d,
        beam: "translate(320px,70px) rotate(" + r1(ang) + "deg)",
        L: "translate(" + r1(320 - 215 * cs) + "px," + r1(70 - 215 * sn) + "px)",
        R: "translate(" + r1(320 + 215 * cs) + "px," + r1(70 + 215 * sn) + "px)"
      };
    }
    function pan(side, label, tf) {
      var left = side === "L";
      return '<g data-role="pan' + side + '" style="transform:' + tf + ';transform-origin:0 0;transition:transform .45s ease">' +
        line(0, 0, -78, 96, "var(--muted)", 2) + line(0, 0, 78, 96, "var(--muted)", 2) +
        '<rect x="-66" y="40" width="132" height="54" rx="10" style="fill:var(--card);stroke:' + (left ? "var(--orange)" : "var(--blue-2)") + ';stroke-width:2.5"/>' +
        txt(0, left ? 66 : 75, label, 22) +
        (left ? '<text data-role="valL" x="0" y="86" font-size="14" text-anchor="middle" class="svg-label svg-muted"></text>' : "") +
        '<path d="M-88 96 Q0 124 88 96 Z" style="fill:var(--bg-2);stroke:var(--ink-2);stroke-width:2"/></g>';
    }
    function build() {
      var gm = geom(), s = "";
      s += '<polygon points="262,270 378,270 336,250 304,250" style="fill:var(--muted)"/>';
      s += '<rect x="314" y="72" width="12" height="182" rx="4" style="fill:var(--muted)"/>';
      s += '<g data-role="beam" style="transform:' + gm.beam + ';transform-origin:0 0;transition:transform .45s ease">' +
        '<rect x="-225" y="-6" width="450" height="12" rx="6" style="fill:var(--ink-2)"/></g>';
      s += pan("L", g.expr, gm.L) + pan("R", n(g.c), gm.R);
      s += dot(320, 70, 9, "var(--yellow)", "stroke:var(--ink-2);stroke-width:2");
      f.stage.innerHTML = svg(640, 280, s, 600);
      beam = f.stage.querySelector('[data-role="beam"]');
      panL = f.stage.querySelector('[data-role="panL"]');
      panR = f.stage.querySelector('[data-role="panR"]');
      valL = f.stage.querySelector('[data-role="valL"]');
    }
    function update() {
      var gm = geom(), bal = gm.d === 0;
      beam.style.transform = gm.beam; panL.style.transform = gm.L; panR.style.transform = gm.R;
      valL.textContent = "= " + lText(x);
      out.textContent = "□ = " + n(x);
      btns.forEach(function (p) { p[0].disabled = p[1] < 0 ? x <= 0 : x >= MAX; });
      f.readout(bal
        ? "✓ " + t("Balanced! ", "متّزن! ") + g.expr.replace("□", "<b>" + n(x) + "</b>") + " = " + n(g.c)
        : t("Left side = <b>" + lText(x) + "</b> · right side = <b>" + n(g.c) + "</b> · the " + (gm.d > 0 ? "left" : "right") + " side is heavier",
          "الطرف الأيسر = <b>" + lText(x) + "</b> · الطرف الأيمن = <b>" + n(g.c) + "</b> · الطرف " + (gm.d > 0 ? "الأيسر" : "الأيمن") + " أثقل"));
      api.check(bal);
    }
    f.onNew(newGoal);
    newGoal();
  };
})();
