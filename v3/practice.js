/* EduZone Learn v3 - practice question generators (one per skill, unlimited questions).
   Each generator returns:
   { q: html, kind: "num" | "choice", answer: number | string, choices?: [string],
     vis?: svg/html, hint: string, steps: [string] }
   Strings are already in the current language (call again after a language change). */
(function () {
  "use strict";
  var E = EZ3, t = E.t, n = E.n, d = E.d, R = E.rand, P = E.pick;
  var G = {};
  // question mark in maths sentences: Arabic uses ؟
  function QM() { return E.isAr() ? "؟" : "?"; }
  function ltr(s) { return '<span dir="ltr">' + s + "</span>"; }
  function sep() { return E.isAr() ? "، " : ", "; }
  // four unique numeric choices containing ans
  function numChoices(ans, cands) {
    var out = [ans];
    cands.forEach(function (c) { if (out.indexOf(c) < 0 && out.length < 4) out.push(c); });
    var k = 1;
    while (out.length < 4) { var c = ans + k * (k % 2 ? 1 : -1) * (Math.abs(ans) > 100 ? 10 : 1); if (out.indexOf(c) < 0) out.push(c); k++; }
    return { choices: E.shuffle(out).map(n), answer: n(ans) };
  }
  function strChoices(ans, others) {
    var out = [ans];
    others.forEach(function (o) { if (out.indexOf(o) < 0 && out.length < 4) out.push(o); });
    return { choices: E.shuffle(out), answer: ans };
  }
  function Q(o) { return o; }

  /* ---------------- small SVG visuals ---------------- */
  var V = {};
  V.numberLine = function (min, max, mark, opt) {
    opt = opt || {};
    var W = 600, pad = 30, span = max - min, step = opt.step || 1, x = function (v) { return pad + (v - min) / span * (W - 2 * pad); };
    var s = '<svg viewBox="0 0 ' + W + ' 90" role="img"><line x1="' + pad + '" y1="45" x2="' + (W - pad) + '" y2="45" stroke="var(--ink-2)" stroke-width="3"/>';
    for (var v = min; v <= max + 1e-9; v += step) {
      var big = opt.labelEvery ? ((v - min) % opt.labelEvery === 0) : true;
      s += '<line x1="' + x(v) + '" y1="' + (big ? 35 : 39) + '" x2="' + x(v) + '" y2="' + (big ? 55 : 51) + '" stroke="var(--ink-2)" stroke-width="2"/>';
      if (big) s += '<text x="' + x(v) + '" y="78" text-anchor="middle" class="svg-label" font-size="15">' + n(v) + "</text>";
    }
    if (mark != null) s += '<circle cx="' + x(mark) + '" cy="45" r="9" fill="var(--orange)"/>';
    return s + "</svg>";
  };
  V.rect = function (w, h, lw, lh, unit) {
    var sc = Math.min(260 / w, 150 / h), W = w * sc, H = h * sc, ox = 60, oy = 20;
    var s = '<svg viewBox="0 0 ' + (W + 120) + " " + (H + 60) + '" role="img"><rect x="' + ox + '" y="' + oy + '" width="' + W + '" height="' + H + '" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="3" rx="2"/>';
    s += '<text x="' + (ox + W / 2) + '" y="' + (oy + H + 28) + '" text-anchor="middle" class="svg-label" font-size="16">' + lw + "</text>";
    s += '<text x="' + (ox - 10) + '" y="' + (oy + H / 2 + 5) + '" text-anchor="end" class="svg-label" font-size="16">' + lh + "</text>";
    return s + "</svg>";
  };
  V.squares = function (w, h) {
    var c = 30, s = '<svg viewBox="0 0 ' + (w * c + 4) + " " + (h * c + 4) + '" role="img">';
    for (var i = 0; i < w; i++) for (var j = 0; j < h; j++) s += '<rect x="' + (2 + i * c) + '" y="' + (2 + j * c) + '" width="' + c + '" height="' + c + '" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="1.5"/>';
    return s + "</svg>";
  };
  // L-shape: outer W x H, notch cw x ch cut from the top-right corner
  V.lshape = function (W, H, cw, ch, u) {
    var sc = Math.min(32, 300 / W, 200 / H), ox = 70, oy = 30, X = function (v) { return ox + v * sc; }, Y = function (v) { return oy + v * sc; };
    var pts = [[0, 0], [W - cw, 0], [W - cw, ch], [W, ch], [W, H], [0, H]].map(function (p) { return X(p[0]) + "," + Y(p[1]); }).join(" ");
    var s = '<svg viewBox="0 0 ' + (W * sc + 150) + " " + (H * sc + 70) + '" role="img"><polygon points="' + pts + '" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="3"/>';
    function lab(x, y, txt, anchor) { s += '<text x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '" class="svg-label" font-size="15">' + txt + "</text>"; }
    lab(X(W / 2), Y(H) + 24, n(W) + " " + u);
    lab(X(0) - 8, Y(H / 2) + 5, n(H) + " " + u, "end");
    lab(X((W - cw) / 2), Y(0) - 8, n(W - cw) + " " + u);
    lab(X(W) + 8, Y(ch + (H - ch) / 2) + 5, n(H - ch) + " " + u, "start");
    lab(X(W - cw / 2), Y(ch) - 8, n(cw) + " " + u);
    lab(X(W - cw) + 6, Y(ch / 2) + 5, n(ch) + " " + u, "start");
    return s + "</svg>";
  };
  V.tally = function (k) {
    var s = '<svg viewBox="0 0 ' + (Math.ceil(k / 5) * 70 + 10) + ' 80" role="img">', g = 0;
    for (var i = 0; i < k; i++) {
      var grp = Math.floor(i / 5), pos = i % 5, gx = 10 + grp * 70;
      if (pos < 4) s += '<line x1="' + (gx + pos * 12) + '" y1="12" x2="' + (gx + pos * 12) + '" y2="68" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>';
      else s += '<line x1="' + (gx - 6) + '" y1="58" x2="' + (gx + 44) + '" y2="20" stroke="var(--orange)" stroke-width="4" stroke-linecap="round"/>';
      g = grp;
    }
    return s + "</svg>";
  };
  V.bars = function (data, unit) {
    var max = Math.max.apply(null, data.map(function (x) { return x[1]; })), top = Math.ceil((max + 1) / 2) * 2, H = 180, bw = 56, gap = 26, ox = 40;
    var W = ox + data.length * (bw + gap) + 10, colors = ["var(--blue)", "var(--orange)", "var(--green)", "var(--purple)", "var(--pink)"];
    var s = '<svg viewBox="0 0 ' + W + " " + (H + 60) + '" role="img">';
    for (var v = 0; v <= top; v += 2) {
      var y = 10 + H - v / top * H;
      s += '<line x1="' + ox + '" y1="' + y + '" x2="' + W + '" y2="' + y + '" stroke="var(--line)"/><text x="' + (ox - 6) + '" y="' + (y + 5) + '" text-anchor="end" class="svg-muted" font-size="13">' + n(v) + "</text>";
    }
    data.forEach(function (b, i) {
      var h = b[1] / top * H, x = ox + gap / 2 + i * (bw + gap);
      s += '<rect x="' + x + '" y="' + (10 + H - h) + '" width="' + bw + '" height="' + h + '" rx="5" fill="' + colors[i % 5] + '"/>';
      s += '<text x="' + (x + bw / 2) + '" y="' + (H + 34) + '" text-anchor="middle" font-size="22">' + b[0] + "</text>";
    });
    return s + "</svg>";
  };
  V.fracBar = function (a, b) {
    var W = 360, s = '<svg viewBox="0 0 ' + (W + 10) + ' 70" role="img">', w = W / b;
    for (var i = 0; i < b; i++) s += '<rect x="' + (5 + i * w) + '" y="10" width="' + w + '" height="50" fill="' + (i < a ? "var(--pink)" : "var(--card)") + '" stroke="var(--ink-2)" stroke-width="2"/>';
    return s + "</svg>";
  };
  V.grid100 = function (k) {
    var c = 22, s = '<svg viewBox="0 0 ' + (c * 10 + 4) + " " + (c * 10 + 4) + '" role="img">';
    for (var i = 0; i < 100; i++) s += '<rect x="' + (2 + (i % 10) * c) + '" y="' + (2 + Math.floor(i / 10) * c) + '" width="' + c + '" height="' + c + '" fill="' + (i < k ? "var(--teal)" : "var(--card)") + '" stroke="var(--line)"/>';
    return s + "</svg>";
  };
  V.coord = function (pts, mirror, size) {
    size = size || 10;
    var c = 30, o = 34, W = o + size * c + 16, s = '<svg viewBox="0 0 ' + W + " " + W + '" role="img">', X = function (v) { return o + v * c; }, Y = function (v) { return W - o - v * c; };
    for (var i = 0; i <= size; i++) {
      s += '<line x1="' + X(i) + '" y1="' + Y(0) + '" x2="' + X(i) + '" y2="' + Y(size) + '" stroke="var(--line)"/><line x1="' + X(0) + '" y1="' + Y(i) + '" x2="' + X(size) + '" y2="' + Y(i) + '" stroke="var(--line)"/>';
      s += '<text x="' + X(i) + '" y="' + (Y(0) + 20) + '" text-anchor="middle" class="svg-muted" font-size="13">' + n(i) + '</text><text x="' + (X(0) - 10) + '" y="' + (Y(i) + 5) + '" text-anchor="end" class="svg-muted" font-size="13">' + n(i) + "</text>";
    }
    s += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(size) + '" y2="' + Y(0) + '" stroke="var(--ink-2)" stroke-width="2.5"/><line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(0) + '" y2="' + Y(size) + '" stroke="var(--ink-2)" stroke-width="2.5"/>';
    if (mirror) {
      if (mirror.x != null) s += '<line x1="' + X(mirror.x) + '" y1="' + Y(0) + '" x2="' + X(mirror.x) + '" y2="' + Y(size) + '" stroke="var(--purple)" stroke-width="3" stroke-dasharray="8 6"/>';
      else s += '<line x1="' + X(0) + '" y1="' + Y(mirror.y) + '" x2="' + X(size) + '" y2="' + Y(mirror.y) + '" stroke="var(--purple)" stroke-width="3" stroke-dasharray="8 6"/>';
    }
    pts.forEach(function (p) {
      s += '<circle cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="8" fill="' + (p.color || "var(--orange)") + '"/>';
      if (p.label) s += '<text x="' + (X(p.x) + 11) + '" y="' + (Y(p.y) - 9) + '" class="svg-label" font-size="17">' + p.label + "</text>";
    });
    return s + "</svg>";
  };
  V.polygon = function (k) {
    var s = '<svg viewBox="0 0 220 220" role="img"><polygon points="', pts = [];
    for (var i = 0; i < k; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / k; pts.push((110 + 90 * Math.cos(a)).toFixed(1) + "," + (110 + 90 * Math.sin(a)).toFixed(1)); }
    return s + pts.join(" ") + '" fill="var(--purple-soft)" stroke="var(--purple)" stroke-width="4" stroke-linejoin="round"/></svg>';
  };
  V.angle = function (deg) {
    var cx = 70, cy = 150, L = 130, r = deg * Math.PI / 180;
    var x2 = cx + L * Math.cos(-r), y2 = cy + L * Math.sin(-r), ar = 34;
    var large = deg > 180 ? 1 : 0, ax = cx + ar * Math.cos(-r), ay = cy + ar * Math.sin(-r);
    var s = '<svg viewBox="0 0 260 190" role="img">';
    s += '<path d="M' + (cx + ar) + "," + cy + " A" + ar + "," + ar + " 0 " + large + ",0 " + ax.toFixed(1) + "," + ay.toFixed(1) + '" fill="none" stroke="var(--orange)" stroke-width="4"/>';
    if (deg === 90) s += '<rect x="' + cx + '" y="' + (cy - 18) + '" width="18" height="18" fill="none" stroke="var(--orange)" stroke-width="3"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + L) + '" y2="' + cy + '" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>';
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="var(--blue)" stroke-width="5" stroke-linecap="round"/>';
    return s + '<circle cx="' + cx + '" cy="' + cy + '" r="6" fill="var(--ink)"/></svg>';
  };
  V.venn = function (A, B) {
    return '<svg viewBox="0 0 360 200" role="img"><rect x="2" y="2" width="356" height="196" rx="14" fill="none" stroke="var(--line)" stroke-width="2"/>' +
      '<circle cx="135" cy="105" r="78" fill="var(--blue)" fill-opacity=".15" stroke="var(--blue)" stroke-width="3"/>' +
      '<circle cx="225" cy="105" r="78" fill="var(--orange)" fill-opacity=".15" stroke="var(--orange)" stroke-width="3"/>' +
      '<text x="100" y="24" text-anchor="middle" class="svg-label" font-size="14">' + A + '</text><text x="262" y="24" text-anchor="middle" class="svg-label" font-size="14">' + B + "</text></svg>";
  };
  V.bag = function (items) {
    var s = '<svg viewBox="0 0 300 150" role="img"><path d="M40 40 Q150 10 260 40 L240 140 Q150 150 60 140 Z" fill="var(--bg-2)" stroke="var(--muted)" stroke-width="3"/>', k = 0;
    items.forEach(function (it) { for (var i = 0; i < it[1]; i++) { s += '<circle cx="' + (75 + (k % 7) * 25) + '" cy="' + (65 + Math.floor(k / 7) * 26) + '" r="10" fill="' + it[0] + '"/>'; k++; } });
    return s + "</svg>";
  };
  V.spinner = function (cols) {
    var s = '<svg viewBox="0 0 200 200" role="img">', k = cols.length;
    cols.forEach(function (c, i) {
      var a0 = -Math.PI / 2 + i * 2 * Math.PI / k, a1 = a0 + 2 * Math.PI / k;
      s += '<path d="M100,100 L' + (100 + 90 * Math.cos(a0)).toFixed(1) + "," + (100 + 90 * Math.sin(a0)).toFixed(1) + " A90,90 0 0,1 " + (100 + 90 * Math.cos(a1)).toFixed(1) + "," + (100 + 90 * Math.sin(a1)).toFixed(1) + ' Z" fill="' + c + '" stroke="var(--card)" stroke-width="3"/>';
    });
    return s + '<circle cx="100" cy="100" r="8" fill="var(--ink)"/></svg>';
  };
  V.table = function (head, rows) {
    return '<table class="ttable"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  };
  E.V = V;

  var COL = { red: ["var(--red)", "red", "أحمر"], blue: ["var(--blue)", "blue", "أزرق"], green: ["var(--green)", "green", "أخضر"], yellow: ["var(--yellow)", "yellow", "أصفر"] };
  function colName(k) { return t(COL[k][1], COL[k][2]); }
  function fmtTime(h, m) { return d(h + ":" + (m < 10 ? "0" : "") + m); }
  function fmt24(h, m) { return d((h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m); }
  function ampm(h24) { return h24 < 12 ? t("am", "صباحًا") : t("pm", "مساءً"); }
  function h12(h24) { var h = h24 % 12; return h === 0 ? 12 : h; }

  /* ================= Numbers ================= */
  G.negative = function () {
    var ty = R(0, 2);
    if (ty === 0) {
      var s = R(-3, 8), dd = R(3, 9), ans = s - dd;
      return Q({ q: t("It is " + n(s) + "°C. The temperature drops by " + n(dd) + " degrees. What is the new temperature?",
        "درجة الحرارة " + n(s) + "°. انخفضت " + n(dd) + " درجات. كم أصبحت درجة الحرارة؟"),
        kind: "num", answer: ans, vis: V.numberLine(-10, 10, s),
        hint: t("Count back on the number line. Going below 0 gives a negative number.", "عُدّ للخلف على خط الأعداد. ما يقل عن الصفر عدد سالب."),
        steps: [t("Start at " + n(s) + ".", "ابدأ من " + n(s) + "."), t("Count back " + n(dd) + " steps.", "عُدّ للخلف " + n(dd) + " خطوات."), t("You land on " + n(ans) + ".", "تصل إلى " + n(ans) + ".")] });
    }
    if (ty === 1) {
      var a = R(-8, -1), b = R(1, 9);
      return Q({ q: t("What is the difference between " + n(a) + " and " + n(b) + "?", "ما الفرق بين " + n(a) + " و " + n(b) + "؟"),
        kind: "num", answer: b - a, vis: V.numberLine(-10, 10, null),
        hint: t("Count the steps from " + n(a) + " up to 0, then from 0 up to " + n(b) + ".", "عُدّ الخطوات من " + n(a) + " إلى الصفر، ثم من الصفر إلى " + n(b) + "."),
        steps: [t("From " + n(a) + " to 0 is " + n(-a) + " steps.", "من " + n(a) + " إلى الصفر " + n(-a) + " خطوات."), t("From 0 to " + n(b) + " is " + n(b) + " steps.", "من الصفر إلى " + n(b) + " " + n(b) + " خطوات."), t(n(-a) + " + " + n(b) + " = " + n(b - a), n(-a) + " + " + n(b) + " = " + n(b - a))] });
    }
    var set = E.shuffle([-9, -7, -6, -4, -3, -2, -1, 0, 1, 2, 4, 5, 7, 8]).slice(0, 4), small = Math.random() < 0.5;
    var ans2 = small ? Math.min.apply(null, set) : Math.max.apply(null, set);
    return Q({ q: small ? t("Which number is the smallest?", "ما أصغر عدد؟") : t("Which number is the greatest?", "ما أكبر عدد؟"),
      kind: "choice", choices: set.map(n), answer: n(ans2),
      hint: t("On a number line, numbers get smaller as you go left.", "على خط الأعداد تصغر الأعداد كلما اتجهنا يسارًا."),
      steps: [t("Put the numbers in order: " + set.slice().sort(function (x, y) { return x - y; }).map(n).join(sep()), "رتّب الأعداد: " + set.slice().sort(function (x, y) { return x - y; }).map(n).join(sep()))] });
  };

  G.countstep = function () {
    var step = P([3, 4, 6, 7, 8, 9, 25, 50, 100, 1000]), up = Math.random() < 0.5;
    var start = up ? step * R(1, 6) + (step < 25 ? R(0, 5) : 0) : step * R(5, 10) + (step < 25 ? R(0, 5) : 0);
    var dir = up ? 1 : -1, seq = [start, start + dir * step, start + 2 * dir * step, start + 3 * dir * step], ans = start + 4 * dir * step;
    return Q({ q: t("What comes next? ", "ما العدد التالي؟ ") + seq.map(n).join(sep()) + sep() + "__", kind: "num", answer: ans,
      hint: t("Find the jump between two neighbouring numbers.", "أوجد الفرق بين كل عددين متتاليين."),
      steps: [up ? t("The numbers go up by " + n(step) + " each time.", "الأعداد تزيد " + n(step) + " في كل مرة.") : t("The numbers go down by " + n(step) + " each time.", "الأعداد تنقص " + n(step) + " في كل مرة."),
        n(seq[3]) + (up ? " + " : " − ") + n(step) + " = " + n(ans)] });
  };

  var PLACES = [["ones", "الآحاد"], ["tens", "العشرات"], ["hundreds", "المئات"], ["thousands", "الآلاف"], ["ten thousands", "عشرات الآلاف"]];
  G.placevalue = function () {
    var digits = [R(1, 9), R(0, 9), R(0, 9), R(0, 9), R(0, 9)], N = Number(digits.join(""));
    if (Math.random() < 0.55) {
      var k = R(0, 4), dig = digits[4 - k];
      if (dig === 0) { digits[4 - k] = dig = R(1, 9); N = Number(digits.join("")); }
      var val = dig * Math.pow(10, k);
      return Q({ q: t("What is the value of the " + n(dig) + " in " + n(N) + "?", "ما قيمة الرقم " + n(dig) + " في العدد " + n(N) + "؟"),
        kind: "num", answer: val,
        hint: t("Find which column the digit is in.", "حدّد المنزلة التي يقع فيها الرقم."),
        steps: [t("The " + n(dig) + " is in the " + PLACES[k][0] + " place.", "الرقم " + n(dig) + " في منزلة " + PLACES[k][1] + "."), n(dig) + " × " + n(Math.pow(10, k)) + " = " + n(val)] });
    }
    var parts = [];
    digits.forEach(function (g, i) { if (g) parts.push(g * Math.pow(10, 4 - i)); });
    return Q({ q: t("Write as one number: ", "اكتب في صورة عدد واحد: ") + parts.map(n).join(" + "), kind: "num", answer: N,
      hint: t("Put each part in its own place-value column.", "ضع كل جزء في منزلته."),
      steps: [t("Add the parts: ", "اجمع الأجزاء: ") + parts.map(n).join(" + ") + " = " + n(N)] });
  };

  G.rounding = function () {
    var to = P([10, 100, 1000]), N;
    do { N = R(1001, 9989); } while (N % to === 0);
    var lo = Math.floor(N / to) * to, hi = lo + to, mid = lo + to / 2, ans = N >= mid ? hi : lo;
    return Q({ q: t("Round " + n(N) + " to the nearest " + n(to) + ".", "قرّب العدد " + n(N) + " لأقرب " + n(to) + "."), kind: "num", answer: ans,
      vis: V.numberLine(lo, hi, N, { step: to / 10, labelEvery: to / 2 }),
      hint: t("Which multiple of " + n(to) + " is it closer to? Halfway rounds up.", "أي مضاعف لـ " + n(to) + " أقرب إليه؟ المنتصف يُقرّب لأعلى."),
      steps: [t(n(N) + " is between " + n(lo) + " and " + n(hi) + ".", "العدد " + n(N) + " بين " + n(lo) + " و " + n(hi) + "."),
        t("Halfway is " + n(mid) + ".", "المنتصف هو " + n(mid) + "."),
        N >= mid ? t(n(N) + " is at or past halfway, so it rounds up to " + n(ans) + ".", "العدد عند المنتصف أو بعده، فيُقرّب إلى " + n(ans) + ".") : t(n(N) + " is before halfway, so it rounds down to " + n(ans) + ".", "العدد قبل المنتصف، فيُقرّب إلى " + n(ans) + ".")] });
  };

  G.compare = function () {
    var base = R(10000, 98999);
    if (Math.random() < 0.5) {
      var nums = [base], tries = 0;
      while (nums.length < 4 && tries++ < 50) { var c = base + P([-1, 1]) * P([9, 90, 100, 900, 1000, 10, 1]); if (nums.indexOf(c) < 0 && c > 9999) nums.push(c); }
      var great = Math.random() < 0.5, ans = great ? Math.max.apply(null, nums) : Math.min.apply(null, nums);
      return Q({ q: great ? t("Which number is the greatest?", "ما أكبر عدد؟") : t("Which number is the smallest?", "ما أصغر عدد؟"),
        kind: "choice", choices: E.shuffle(nums).map(n), answer: n(ans),
        hint: t("Compare digits from the left: ten thousands first, then thousands…", "قارن الأرقام من اليسار: عشرات الآلاف أولًا ثم الآلاف…"),
        steps: [t("In order: ", "بالترتيب: ") + nums.slice().sort(function (x, y) { return x - y; }).map(n).join(" < ")] });
    }
    var b = base + P([-1, 1]) * P([10, 100, 1, 1000]);
    if (Math.random() < 0.15) b = base;
    var rel = base > b ? 0 : base < b ? 1 : 2;
    var words = [t("is greater than", "أكبر من"), t("is less than", "أصغر من"), t("is equal to", "يساوي")];
    return Q({ q: n(base) + " ____ " + n(b), kind: "choice", choices: words.slice(), answer: words[rel],
      hint: t("Look for the first column where the digits are different.", "ابحث عن أول منزلة يختلف فيها الرقمان."),
      steps: [t("Compare place by place from the left.", "قارن منزلة بمنزلة من اليسار."), n(base) + " " + words[rel] + " " + n(b)] });
  };

  /* ================= Geometry ================= */
  var POLY = { 3: ["triangle", "مثلث"], 4: ["quadrilateral", "رباعي أضلاع"], 5: ["pentagon", "خماسي"], 6: ["hexagon", "سداسي"], 7: ["heptagon", "سباعي"], 8: ["octagon", "ثماني"], 9: ["nonagon", "تساعي"], 10: ["decagon", "عشاري"] };
  function pname(k) { return t(POLY[k][0], POLY[k][1]); }
  G.polygons = function () {
    var k = R(3, 10), ty = R(0, 2);
    if (ty === 1) {
      var others = E.shuffle([3, 4, 5, 6, 7, 8, 9, 10].filter(function (x) { return x !== k; })).slice(0, 3);
      return Q({ q: t("What is this regular polygon called?", "ما اسم هذا المضلع المنتظم؟"), vis: V.polygon(k), kind: "choice",
        choices: E.shuffle([k].concat(others)).map(pname), answer: pname(k),
        hint: t("Count the sides.", "عُدّ الأضلاع."), steps: [t("It has " + n(k) + " sides, so it is a " + pname(k) + ".", "له " + n(k) + " أضلاع، إذن هو " + pname(k) + ".")] });
    }
    var what = ty === 0 ? t("sides", "أضلاع") : t("vertices (corners)", "رؤوس");
    return Q({ q: t("How many " + what + " does a " + pname(k) + " have?", "كم عدد " + what + " الشكل ال" + pname(k) + "؟").replace("الشكل الرباعي أضلاع", "الشكل الرباعي الأضلاع"), kind: "num", answer: k,
      hint: t("A polygon has the same number of sides and vertices.", "عدد أضلاع المضلع يساوي عدد رؤوسه."),
      steps: [t("A " + pname(k) + " has " + n(k) + " sides and " + n(k) + " vertices.", "ال" + pname(k) + " له " + n(k) + " أضلاع و " + n(k) + " رؤوس.")] });
  };

  var TESS = [["equilateral triangle", "مثلث متساوي الأضلاع", true, 60], ["square", "مربع", true, 90], ["regular hexagon", "سداسي منتظم", true, 120],
    ["regular pentagon", "خماسي منتظم", false, 108], ["regular octagon", "ثماني منتظم", false, 135], ["circle", "دائرة", false, 0]];
  G.tessellate = function () {
    if (Math.random() < 0.5) {
      var yes = P(TESS.slice(0, 3)), nos = E.shuffle(TESS.slice(3));
      var all = [yes].concat(nos).map(function (x) { return t(x[0], x[1]); });
      return Q({ q: t("Which shape tessellates on its own (fits together with no gaps)?", "أي شكل يمكن تبليطه وحده دون فراغات؟"),
        kind: "choice", choices: E.shuffle(all), answer: t(yes[0], yes[1]),
        hint: t("The angles meeting at a point must add up to exactly 360°.", "يجب أن يكون مجموع الزوايا حول نقطة ٣٦٠° تمامًا.".replace("٣٦٠", n(360))),
        steps: [t("Only triangles, squares and hexagons tessellate on their own.", "المثلثات والمربعات والأشكال السداسية فقط يمكن تبليطها وحدها."),
          t("Example: 4 squares × 90° = 360°.", "مثال: ٤ مربعات × ٩٠° = ٣٦٠°.".replace(/[0-9٠-٩]+/g, function (m) { return m; }))] });
    }
    var s = P(TESS), yesW = t("Yes", "نعم"), noW = t("No", "لا");
    return Q({ q: t("Does a " + s[0] + " tessellate on its own?", "هل يمكن تبليط " + s[1] + " وحده دون فراغات؟"), kind: "choice", choices: [yesW, noW], answer: s[2] ? yesW : noW,
      hint: t("Try it in the Try it tool: do gaps appear?", "جرّبه في أداة «جرّب بنفسك»: هل تظهر فراغات؟"),
      steps: [s[2] ? t("Yes - copies fit around a point with no gaps.", "نعم - تتلاقى النسخ حول نقطة دون فراغات.") : t("No - copies leave gaps or overlap.", "لا - تترك النسخ فراغات أو تتداخل.")] });
  };

  G.compound = function () {
    var W = R(5, 9), H = R(4, 7), cw = R(2, W - 2), ch = R(1, H - 2), u = t("cm", "سم");
    var A = (W - cw) * H, B = cw * (H - ch), ans = A + B;
    return Q({ q: t("What is the area of this shape?", "ما مساحة هذا الشكل؟"), kind: "num", answer: ans, unit: t("cm²", "سم²"),
      vis: V.lshape(W, H, cw, ch, u),
      hint: t("Split the shape into two rectangles. Find each area, then add.", "قسّم الشكل إلى مستطيلين، أوجد مساحة كل منهما ثم اجمع."),
      steps: [t("Rectangle 1: ", "المستطيل ١: ".replace("١", n(1))) + n(W - cw) + " × " + n(H) + " = " + n(A),
        t("Rectangle 2: ", "المستطيل ٢: ".replace("٢", n(2))) + n(cw) + " × " + n(H - ch) + " = " + n(B),
        t("Total: ", "المجموع: ") + n(A) + " + " + n(B) + " = " + n(ans) + " " + t("cm²", "سم²")] });
  };

  G.perimeter = function () {
    var ty = R(0, 2), u = t("cm", "سم");
    if (ty === 1) {
      var s = R(2, 12);
      return Q({ q: t("A square has sides of " + n(s) + " cm. What is its perimeter?", "مربع طول ضلعه " + n(s) + " سم. ما محيطه؟"), kind: "num", answer: 4 * s, unit: u,
        vis: V.rect(s, s, n(s) + " " + u, n(s) + " " + u),
        hint: t("A square has 4 equal sides.", "للمربع ٤ أضلاع متساوية.".replace("٤", n(4))),
        steps: [n(s) + " × " + n(4) + " = " + n(4 * s) + " " + u] });
    }
    var l = R(3, 15), w = R(2, l - 1);
    if (ty === 2) {
      var Pm = 2 * (l + w);
      return Q({ q: t("A rectangle has a perimeter of " + n(Pm) + " cm. One side is " + n(l) + " cm. How long is the shorter side?", "مستطيل محيطه " + n(Pm) + " سم، وطول أحد أضلاعه " + n(l) + " سم. ما طول الضلع الأقصر؟"), kind: "num", answer: w, unit: u,
        hint: t("Half the perimeter is one long side plus one short side.", "نصف المحيط = ضلع طويل + ضلع قصير."),
        steps: [t("Half of " + n(Pm) + " is " + n(Pm / 2) + ".", "نصف " + n(Pm) + " هو " + n(Pm / 2) + "."), n(Pm / 2) + " − " + n(l) + " = " + n(w) + " " + u] });
    }
    return Q({ q: t("What is the perimeter of this rectangle?", "ما محيط هذا المستطيل؟"), kind: "num", answer: 2 * (l + w), unit: u,
      vis: V.rect(l, w, n(l) + " " + u, n(w) + " " + u),
      hint: t("Perimeter is the distance all the way round. Add all four sides.", "المحيط هو طول الحدود كلها. اجمع الأضلاع الأربعة."),
      steps: [n(l) + " + " + n(w) + " + " + n(l) + " + " + n(w) + " = " + n(2 * (l + w)) + " " + u] });
  };

  G.area = function () {
    var ty = R(0, 2), u2 = t("cm²", "سم²");
    if (ty === 2) {
      var a = R(3, 7), b = R(2, 5);
      return Q({ q: t("Each square is 1 cm². What is the area of the rectangle?", "مساحة كل مربع ١ سم². ما مساحة المستطيل؟".replace("١", n(1))), kind: "num", answer: a * b, unit: u2,
        vis: V.squares(a, b), hint: t("Count the squares, or multiply rows × columns.", "عُدّ المربعات أو اضرب عدد الصفوف × عدد الأعمدة."),
        steps: [n(b) + " " + t("rows of", "صفوف في كل منها") + " " + n(a) + " = " + n(b) + " × " + n(a) + " = " + n(a * b) + " " + u2] });
    }
    var l = R(3, 12), w = R(2, 9), u = t("cm", "سم");
    if (ty === 1) {
      return Q({ q: t("A rectangle has an area of " + n(l * w) + " cm². One side is " + n(l) + " cm. How long is the other side?", "مستطيل مساحته " + n(l * w) + " سم²، وطول أحد أضلاعه " + n(l) + " سم. ما طول الضلع الآخر؟"), kind: "num", answer: w, unit: u,
        hint: t("Area = length × width, so divide.", "المساحة = الطول × العرض، إذن اقسم."),
        steps: [n(l * w) + " ÷ " + n(l) + " = " + n(w) + " " + u] });
    }
    return Q({ q: t("What is the area of this rectangle?", "ما مساحة هذا المستطيل؟"), kind: "num", answer: l * w, unit: u2,
      vis: V.rect(l, w, n(l) + " " + u, n(w) + " " + u),
      hint: t("Area = length × width.", "المساحة = الطول × العرض."), steps: [n(l) + " × " + n(w) + " = " + n(l * w) + " " + u2] });
  };

  /* ================= Calculations ================= */
  G.mental = function () {
    var ty = R(0, 3), a, b, ans, steps;
    if (ty === 0) { a = R(1, 8) * 100 + R(6, 9) * 10; var up = Math.ceil(a / 100) * 100; b = (up - a) + R(1, 6) * 10; ans = a + b;
      steps = [t("Bridge to the next hundred: ", "أكمل إلى المئة التالية: ") + n(a) + " + " + n(up - a) + " = " + n(up), t("Then add the rest: ", "ثم أضف الباقي: ") + n(up) + " + " + n(b - (up - a)) + " = " + n(ans)];
      return Q({ q: n(a) + " + " + n(b) + " = " + QM(), kind: "num", answer: ans, hint: t("Jump to the next hundred first.", "اقفز إلى المئة التالية أولًا."), steps: steps }); }
    if (ty === 1) { a = R(2, 9) * 100 + R(0, 3) * 10; b = R(2, 8) * 10; if (b <= a % 100) b += 40; ans = a - b; var dn = Math.floor(a / 100) * 100;
      steps = [t("Jump back to the hundred: ", "ارجع إلى المئة: ") + n(a) + " − " + n(a - dn) + " = " + n(dn), t("Then take away the rest: ", "ثم اطرح الباقي: ") + n(dn) + " − " + n(b - (a - dn)) + " = " + n(ans)];
      return Q({ q: n(a) + " − " + n(b) + " = " + QM(), kind: "num", answer: ans, hint: t("Jump back to a hundred first.", "ارجع إلى المئة أولًا."), steps: steps }); }
    if (ty === 2) { a = R(120, 850); b = P([99, 199, 299]); ans = a + b;
      return Q({ q: n(a) + " + " + n(b) + " = " + QM(), kind: "num", answer: ans, hint: t(n(b) + " is just 1 less than " + n(b + 1) + ".", "العدد " + n(b) + " أقل من " + n(b + 1) + " بواحد."),
        steps: [n(a) + " + " + n(b + 1) + " = " + n(a + b + 1), n(a + b + 1) + " − " + n(1) + " = " + n(ans)] }); }
    a = R(11, 89) * 100 + P([0, 50]); b = R(2, 9) * 100; ans = a + b;
    return Q({ q: n(a) + " + " + n(b) + " = " + QM(), kind: "num", answer: ans, hint: t("Only the hundreds (and maybe thousands) change.", "تتغير المئات فقط (وربما الآلاف)."),
      steps: [t("Add the hundreds: ", "اجمع المئات: ") + n(a) + " + " + n(b) + " = " + n(ans)] });
  };

  G.facts = function () {
    var a = R(2, 12), b = R(2, 12), c = a * b, ty = R(0, 2);
    if (ty === 1) return Q({ q: QM() + " × " + n(b) + " = " + n(c), kind: "num", answer: a, hint: t("Which number times " + n(b) + " makes " + n(c) + "?", "أي عدد × " + n(b) + " يعطي " + n(c) + "؟"), steps: [n(c) + " ÷ " + n(b) + " = " + n(a)] });
    if (ty === 2) return Q({ q: n(c) + " ÷ " + n(a) + " = " + QM(), kind: "num", answer: b, hint: t("Use the times table: " + n(a) + " × " + QM() + " = " + n(c), "استخدم جدول الضرب: " + n(a) + " × " + QM() + " = " + n(c)), steps: [n(a) + " × " + n(b) + " = " + n(c) + t(", so ", "، إذن ") + n(c) + " ÷ " + n(a) + " = " + n(b)] });
    return Q({ q: n(a) + " × " + n(b) + " = " + QM(), kind: "num", answer: c, hint: t("Think of " + n(a) + " groups of " + n(b) + ".", "فكّر في " + n(a) + " مجموعات في كل منها " + n(b) + "."),
      steps: [n(a) + " × " + n(b) + " = " + n(c)] });
  };

  G.missing = function () {
    var ty = R(0, 3), a, b, c, box = "☐";
    if (ty === 0) { a = R(5, 60); c = a + R(10, 90); return Q({ q: box + " + " + n(a) + " = " + n(c), kind: "num", answer: c - a, hint: t("Use the inverse: subtract.", "استخدم العملية العكسية: الطرح."), steps: [n(c) + " − " + n(a) + " = " + n(c - a)] }); }
    if (ty === 1) { c = R(40, 150); b = R(5, c - 5); return Q({ q: n(c) + " − " + box + " = " + n(b), kind: "num", answer: c - b, hint: t("What do you take from " + n(c) + " to leave " + n(b) + "?", "ماذا نطرح من " + n(c) + " ليبقى " + n(b) + "؟"), steps: [n(c) + " − " + n(b) + " = " + n(c - b)] }); }
    if (ty === 2) { a = R(2, 9); b = R(2, 12); return Q({ q: n(a) + " × " + box + " = " + n(a * b), kind: "num", answer: b, hint: t("Use the inverse: divide.", "استخدم العملية العكسية: القسمة."), steps: [n(a * b) + " ÷ " + n(a) + " = " + n(b)] }); }
    a = R(2, 9); b = R(2, 12);
    return Q({ q: box + " ÷ " + n(a) + " = " + n(b), kind: "num", answer: a * b, hint: t("Use the inverse: multiply.", "استخدم العملية العكسية: الضرب."), steps: [n(b) + " × " + n(a) + " = " + n(a * b)] });
  };

  G.multiply = function () {
    var big = Math.random() < 0.4, a = big ? R(101, 499) : R(12, 99), b = big ? R(2, 6) : R(2, 9), ans = a * b;
    var parts = [], s = String(a);
    for (var i = 0; i < s.length; i++) { var p = Number(s[i]) * Math.pow(10, s.length - 1 - i); if (p) parts.push(p); }
    return Q({ q: n(a) + " × " + n(b) + " = " + QM(), kind: "num", answer: ans, hint: t("Split " + n(a) + " into " + parts.map(n).join(" + ") + " and multiply each part.", "جزّئ " + n(a) + " إلى " + parts.map(n).join(" + ") + " واضرب كل جزء."),
      steps: parts.map(function (p) { return n(p) + " × " + n(b) + " = " + n(p * b); }).concat([t("Add: ", "اجمع: ") + parts.map(function (p) { return n(p * b); }).join(" + ") + " = " + n(ans)]) });
  };

  G.divide = function () {
    var b = R(2, 9), q = R(11, Math.floor(99 / b)), withR = Math.random() < 0.4, r = withR ? R(1, b - 1) : 0, a = b * q + r;
    if (a > 99) { r = 0; a = b * q; withR = false; }
    var tens = Math.floor(a / 10) * 10;
    if (withR) return Q({ q: t(n(a) + " ÷ " + n(b) + " = " + n(q) + " remainder ?", n(a) + " ÷ " + n(b) + " = " + n(q) + " والباقي ؟"), kind: "num", answer: r,
      hint: t("How much is left after " + n(b) + " groups of " + n(q) + "?", "كم يتبقى بعد " + n(b) + " مجموعات في كل منها " + n(q) + "؟"),
      steps: [n(b) + " × " + n(q) + " = " + n(b * q), n(a) + " − " + n(b * q) + " = " + n(r) + " " + t("left over", "باقٍ")] });
    return Q({ q: n(a) + " ÷ " + n(b) + " = " + QM(), kind: "num", answer: q, hint: t("Share the tens first, then the ones.", "وزّع العشرات أولًا ثم الآحاد."),
      steps: [t("Think: ", "فكّر: ") + n(b) + " × " + QM() + " = " + n(a), n(b) + " × " + n(q) + " = " + n(a)] });
  };

  G.sequence = function () {
    var ty = R(0, 2);
    if (ty === 1) {
      var N = R(101, 999), even = N % 2 === 0, ev = t("even", "زوجي"), od = t("odd", "فردي");
      return Q({ q: t("Is " + n(N) + " odd or even?", "هل العدد " + n(N) + " فردي أم زوجي؟"), kind: "choice", choices: [od, ev], answer: even ? ev : od,
        hint: t("Only the ones digit matters.", "انظر إلى رقم الآحاد فقط."), steps: [t("The ones digit is " + n(N % 10) + ", which is " + (even ? "even" : "odd") + ".", "رقم الآحاد " + n(N % 10) + " وهو " + (even ? "زوجي" : "فردي") + ".")] });
    }
    if (ty === 2) {
      var pair = P([["odd + odd", "فردي + فردي", "e"], ["even + even", "زوجي + زوجي", "e"], ["odd + even", "فردي + زوجي", "o"], ["even × any number", "زوجي × أي عدد", "e"]]);
      var e1 = t("always even", "زوجي دائمًا"), o1 = t("always odd", "فردي دائمًا"), x1 = t("could be either", "قد يكون أيًّا منهما");
      return Q({ q: t("The answer to " + pair[0] + " is…", "ناتج " + pair[1] + " يكون…"), kind: "choice", choices: [e1, o1, x1], answer: pair[2] === "e" ? e1 : o1,
        hint: t("Try two examples.", "جرّب مثالين."), steps: [t("Try examples: 3 + 5 = 8, 7 + 9 = 16 …", "جرّب أمثلة: ٣ + ٥ = ٨، ٧ + ٩ = ١٦ …")] });
    }
    var step = R(3, 11), start = R(1, 20), seq = [start, start + step, start + 2 * step, start + 3 * step];
    return Q({ q: t("What comes next? ", "ما العدد التالي؟ ") + seq.map(n).join(sep()) + sep() + "__", kind: "num", answer: start + 4 * step,
      hint: t("Find the rule: how much does it go up each time?", "أوجد القاعدة: كم يزيد في كل مرة؟"),
      steps: [t("The rule is +" + n(step) + ".", "القاعدة: نضيف " + n(step) + "."), n(seq[3]) + " + " + n(step) + " = " + n(start + 4 * step)] });
  };

  /* ================= Fractions ================= */
  G.fracparts = function () {
    var ty = R(0, 2);
    if (ty === 0) {
      var b = R(3, 10), a = R(1, b - 1);
      var cands = [E.frac(a, b), E.frac(b - a, b), E.frac(a, b + 1), E.frac(b, a)];
      var uniq = cands.filter(function (x, i) { return cands.indexOf(x) === i; });
      return Q({ q: t("What fraction of the bar is shaded?", "ما الكسر الذي يمثل الجزء المظلل؟"), vis: V.fracBar(a, b), kind: "choice", choices: E.shuffle(uniq), answer: E.frac(a, b),
        hint: t("Count all the equal parts (denominator), then the shaded parts (numerator).", "عُدّ كل الأجزاء المتساوية (المقام)، ثم الأجزاء المظللة (البسط)."),
        steps: [t(n(a) + " shaded out of " + n(b) + " equal parts = " + E.frac(a, b), n(a) + " أجزاء مظللة من " + n(b) + " أجزاء متساوية = " + E.frac(a, b))] });
    }
    var den = P([2, 3, 4, 5, 6, 8, 10]), m = R(2, 8), total = den * m, num = ty === 1 || den === 2 ? 1 : R(2, den - 1), ans = total / den * num;
    return Q({ q: t("What is " + E.frac(num, den) + " of " + n(total) + "?", "ما " + E.frac(num, den) + " من " + n(total) + "؟"), kind: "num", answer: ans,
      hint: t("Divide by the denominator, then multiply by the numerator.", "اقسم على المقام ثم اضرب في البسط."),
      steps: [n(total) + " ÷ " + n(den) + " = " + n(total / den)].concat(num > 1 ? [n(total / den) + " × " + n(num) + " = " + n(ans)] : []) });
  };

  G.fracequiv = function () {
    var a = R(1, 4), b = R(a + 1, 6), k = R(2, 4);
    if (Math.random() < 0.6) {
      return Q({ q: E.frac(a, b) + " = " + QM() + "/" + d(b * k), kind: "num", answer: a * k,
        hint: t("What did the denominator get multiplied by? Do the same to the numerator.", "في أي عدد ضُرب المقام؟ اضرب البسط في العدد نفسه."),
        steps: [n(b) + " × " + n(k) + " = " + n(b * k), n(a) + " × " + n(k) + " = " + n(a * k), E.frac(a, b) + " = " + E.frac(a * k, b * k)] });
    }
    var half = P([[1, 2], [1, 3], [1, 4], [3, 4], [2, 5]]), m = R(2, 4);
    var right = E.frac(half[0] * m, half[1] * m), wrong = [E.frac(half[0] + m, half[1] + m), E.frac(half[0] * m, half[1] * m + 1), E.frac(half[1] * m, half[0] * m)];
    var all = [right].concat(wrong).filter(function (x, i, arr) { return arr.indexOf(x) === i; });
    return Q({ q: t("Which fraction is equal to " + E.frac(half[0], half[1]) + "?", "أي كسر يساوي " + E.frac(half[0], half[1]) + "؟"), kind: "choice", choices: E.shuffle(all), answer: right,
      hint: t("Multiply the numerator and denominator by the same number.", "اضرب البسط والمقام في العدد نفسه."),
      steps: [E.frac(half[0], half[1]) + " = " + d("(" + half[0] + " × " + m + ")/(" + half[1] + " × " + m + ")") + " = " + right] });
  };

  G.fracadd = function () {
    var dd = R(4, 12), a = R(1, dd - 2), b = R(1, dd - 1 - a), add = Math.random() < 0.6;
    if (!add && a <= b) { var tmp = a + b; a = tmp; }
    var res = add ? a + b : a - b;
    var right = E.frac(res, dd), wrong = add ? [E.frac(a + b, dd + dd), E.frac(a + b + 1, dd), E.frac(a * b, dd)] : [E.frac(res + 1, dd), E.frac(a + b, dd), E.frac(res, dd + 1)];
    var all = [right].concat(wrong).filter(function (x, i, arr) { return arr.indexOf(x) === i && !/\/[0٠]$/.test(x); });
    return Q({ q: E.frac(a, dd) + (add ? " + " : " − ") + E.frac(b, dd) + " = " + QM(), kind: "choice", choices: E.shuffle(all), answer: right,
      vis: V.fracBar(a, dd) + V.fracBar(b, dd),
      hint: t("The denominators are the same, so keep the denominator and " + (add ? "add" : "subtract") + " the numerators.", "المقامات متساوية، فنحتفظ بالمقام و" + (add ? "نجمع" : "نطرح") + " البسطين."),
      steps: [n(a) + (add ? " + " : " − ") + n(b) + " = " + n(res), t("Denominator stays " + n(dd) + ": ", "يبقى المقام " + n(dd) + ": ") + right] });
  };

  G.percent = function () {
    var ty = R(0, 2);
    if (ty === 0) { var k = R(1, 19) * 5; return Q({ q: t("What percentage of the grid is shaded?", "ما النسبة المئوية للجزء المظلل؟"), vis: V.grid100(k), kind: "num", answer: k, unit: "%",
      hint: t("There are 100 squares. Count the shaded ones.", "في الشبكة ١٠٠ مربع. عُدّ المربعات المظللة.".replace("١٠٠", n(100))), steps: [t(n(k) + " out of 100 = " + n(k) + "%", n(k) + " من ١٠٠ = ".replace("١٠٠", n(100)) + n(k) + "٪")] }); }
    if (ty === 1) {
      var pair = P([[50, 1, 2], [25, 1, 4], [75, 3, 4], [10, 1, 10], [20, 1, 5], [100, 1, 1]]), right = pair[2] === 1 ? n(1) : E.frac(pair[1], pair[2]);
      var opts = [right, E.frac(1, pair[0] === 100 ? 100 : pair[0]), E.frac(pair[1], pair[2] * 10), E.frac(pair[2], 10)].filter(function (x, i, arr) { return arr.indexOf(x) === i; });
      return Q({ q: t(n(pair[0]) + "% is equal to which fraction?", n(pair[0]) + "٪ تساوي أي كسر؟"), kind: "choice", choices: E.shuffle(opts), answer: right,
        hint: t("Per cent means out of 100.", "«بالمئة» تعني من ١٠٠.".replace("١٠٠", n(100))), steps: [E.frac(pair[0], 100) + " = " + right] });
    }
    var p = P([10, 25, 50, 75]), whole = P([20, 40, 60, 80, 100, 200]), ans = whole * p / 100;
    return Q({ q: t("What is " + n(p) + "% of " + n(whole) + "?", "ما " + n(p) + "٪ من " + n(whole) + "؟"), kind: "num", answer: ans,
      hint: t(p === 50 ? "50% is half." : p === 25 ? "25% is a quarter." : p === 75 ? "75% is three quarters." : "10% is one tenth.", p === 50 ? "٥٠٪ هي النصف." : p === 25 ? "٢٥٪ هي الربع." : p === 75 ? "٧٥٪ هي ثلاثة أرباع." : "١٠٪ هي العُشر."),
      steps: [p === 75 ? n(whole) + " ÷ " + n(4) + " = " + n(whole / 4) + sep() + n(whole / 4) + " × " + n(3) + " = " + n(ans) : n(whole) + " ÷ " + n(100 / p) + " = " + n(ans)] });
  };

  /* ================= Time ================= */
  G.time24 = function () {
    var h24 = R(0, 23), m = R(0, 11) * 5, hh = h12(h24);
    var twelve = fmtTime(hh, m) + " " + ampm(h24), tf = fmt24(h24, m);
    if (Math.random() < 0.5) {
      var alts = [tf, fmt24((h24 + 12) % 24, m), fmt24((h24 + 10) % 24, m), fmt24((h24 + 2) % 24, m)].filter(function (x, i, a) { return a.indexOf(x) === i; });
      return Q({ q: t("Write " + twelve + " in 24-hour time.", "اكتب " + twelve + " بنظام ٢٤ ساعة.".replace("٢٤", n(24))), kind: "choice", choices: E.shuffle(alts), answer: tf,
        hint: h24 >= 12 ? t("For pm times, add 12 to the hour (except 12 pm).", "في أوقات المساء أضف ١٢ إلى الساعة (عدا ١٢ ظهرًا).".replace(/١٢/g, n(12))) : t("am times keep the hour (12 am becomes 00).", "أوقات الصباح تبقى كما هي (١٢ منتصف الليل تصبح ٠٠).".replace("١٢", n(12)).replace("٠٠", d("00"))),
        steps: [twelve + " → " + tf] });
    }
    var alts2 = [twelve, fmtTime(hh, m) + " " + ampm((h24 + 12) % 24), fmtTime(h12(h24 + 2), m) + " " + ampm(h24), fmtTime(h12(h24 + 10), m) + " " + ampm((h24 + 10) % 24)].filter(function (x, i, a) { return a.indexOf(x) === i; });
    return Q({ q: t("What is " + tf + " in 12-hour time?", "ما الوقت " + tf + " بنظام ١٢ ساعة؟".replace("١٢", n(12))), kind: "choice", choices: E.shuffle(alts2), answer: twelve,
      hint: t("Hours after 12 are pm: subtract 12.", "الساعات بعد ١٢ تكون مساءً: اطرح ١٢.".replace(/١٢/g, n(12))), steps: [tf + " → " + twelve] });
  };

  var MONTHS = [["January", "يناير", 31], ["February", "فبراير", 28], ["March", "مارس", 31], ["April", "أبريل", 30], ["May", "مايو", 31], ["June", "يونيو", 30], ["July", "يوليو", 31], ["August", "أغسطس", 31], ["September", "سبتمبر", 30], ["October", "أكتوبر", 31], ["November", "نوفمبر", 30], ["December", "ديسمبر", 31]];
  function dateStr(day, mi) { return t(n(day) + " " + MONTHS[mi][0], n(day) + " " + MONTHS[mi][1]); }
  G.timetable = function () {
    var ty = R(0, 2);
    if (ty === 0) {
      var sh = R(7, 15), sm = R(0, 11) * 5, dur = R(3, 18) * 5, tot = sh * 60 + sm + dur, eh = Math.floor(tot / 60), em = tot % 60;
      return Q({ q: t("A bus leaves at " + fmtTime(sh, sm) + " and arrives at " + fmtTime(eh, em) + ". How many minutes is the journey?", "تتحرك حافلة الساعة " + fmtTime(sh, sm) + " وتصل الساعة " + fmtTime(eh, em) + ". كم دقيقة تستغرق الرحلة؟"),
        kind: "num", answer: dur, unit: t("min", "دقيقة"),
        hint: t("Count on to the next o'clock, then add the rest.", "عُدّ حتى الساعة التالية، ثم أضف الباقي."),
        steps: em >= sm && eh === sh ? [n(em) + " − " + n(sm) + " = " + n(dur)] : [t("From " + fmtTime(sh, sm) + " to " + fmtTime(sh + 1, 0) + " is " + n(60 - sm) + " min.", "من " + fmtTime(sh, sm) + " إلى " + fmtTime(sh + 1, 0) + " = " + n(60 - sm) + " دقيقة."), t("Then " + n(dur - (60 - sm)) + " more min. Total " + n(dur) + " min.", "ثم " + n(dur - (60 - sm)) + " دقيقة أخرى. المجموع " + n(dur) + " دقيقة.")] });
    }
    if (ty === 1) {
      var stops = [[t("School", "المدرسة"), 0], [t("Park", "الحديقة"), R(2, 4) * 5], [t("Museum", "المتحف"), 0], [t("Zoo", "حديقة الحيوان"), 0]];
      stops[2][1] = stops[1][1] + R(2, 5) * 5; stops[3][1] = stops[2][1] + R(2, 4) * 5;
      var buses = [R(8, 9) * 60 + R(0, 3) * 5, 0, 0]; buses[1] = buses[0] + 40; buses[2] = buses[1] + 45;
      var tm = function (x) { return fmtTime(Math.floor(x / 60), x % 60); };
      var bi = R(0, 2), si = R(2, 3), ans = tm(buses[bi] + stops[si][1]);
      var rows = stops.map(function (s) { return [s[0]].concat(buses.map(function (b) { return tm(b + s[1]); })); });
      var alts = [ans, tm(buses[(bi + 1) % 3] + stops[si][1]), tm(buses[bi] + stops[si === 3 ? 2 : 3][1]), tm(buses[bi] + stops[1][1])].filter(function (x, i, a) { return a.indexOf(x) === i; });
      return Q({ q: t("You catch the bus that leaves School at " + tm(buses[bi]) + ". What time do you arrive at the " + stops[si][0] + "?", "تركب الحافلة التي تغادر المدرسة الساعة " + tm(buses[bi]) + ". متى تصل إلى " + stops[si][0] + "؟"),
        kind: "choice", choices: E.shuffle(alts), answer: ans, vis: V.table([t("Stop", "المحطة"), t("Bus 1", "حافلة ١").replace("١", n(1)), t("Bus 2", "حافلة ٢").replace("٢", n(2)), t("Bus 3", "حافلة ٣").replace("٣", n(3))], rows),
        hint: t("Find the right column first, then go down to your stop.", "حدّد العمود الصحيح أولًا، ثم انزل إلى محطتك."), steps: [t("Column with " + tm(buses[bi]) + " → row " + stops[si][0] + " → " + ans, "العمود الذي يبدأ " + tm(buses[bi]) + " ← صف " + stops[si][0] + " ← " + ans)] });
    }
    var mi = R(0, 11), day = R(MONTHS[mi][2] - 9, MONTHS[mi][2] - 1), add = P([7, 7, 14, 10]), nd = day + add, nm = mi;
    if (nd > MONTHS[mi][2]) { nd -= MONTHS[mi][2]; nm = (mi + 1) % 12; }
    var right = dateStr(nd, nm), alts3 = [right, dateStr(Math.min(day + add - 1, MONTHS[mi][2]), mi), dateStr(nd + 1, nm), dateStr(nd, mi)].filter(function (x, i, a) { return a.indexOf(x) === i; });
    var addW = add === 7 ? t("one week", "أسبوع واحد") : add === 14 ? t("two weeks", "أسبوعين") : t(n(add) + " days", n(add) + " أيام");
    return Q({ q: t("What date is " + addW + " after " + dateStr(day, mi) + "?", "ما التاريخ بعد " + addW + " من " + dateStr(day, mi) + "؟"), kind: "choice", choices: E.shuffle(alts3), answer: right,
      hint: t(MONTHS[mi][0] + " has " + n(MONTHS[mi][2]) + " days.", "شهر " + MONTHS[mi][1] + " فيه " + n(MONTHS[mi][2]) + " يومًا."),
      steps: [t("Count on " + n(add) + " days from " + dateStr(day, mi) + ".", "عُدّ " + n(add) + " أيام بعد " + dateStr(day, mi) + "."), t(MONTHS[mi][0] + " ends on day " + n(MONTHS[mi][2]) + " → " + right, "ينتهي " + MONTHS[mi][1] + " في يوم " + n(MONTHS[mi][2]) + " ← " + right)] });
  };

  G.units = function () {
    var U = [["hours", "ساعات", "minutes", "دقيقة", 60, "ساعة"], ["minutes", "دقائق", "seconds", "ثانية", 60, "دقيقة"], ["days", "أيام", "hours", "ساعة", 24, "يوم"], ["weeks", "أسابيع", "days", "يومًا", 7, "أسبوع"], ["years", "سنوات", "months", "شهرًا", 12, "سنة"]];
    var u = P(U), k = R(2, u[4] === 60 ? 5 : 6), big = k * u[4];
    if (Math.random() < 0.6) return Q({ q: t("How many " + u[2] + " are in " + n(k) + " " + u[0] + "?", "كم " + u[3] + " في " + n(k) + " " + u[1] + "؟"), kind: "num", answer: big,
      hint: t("1 " + u[0].replace(/s$/, "") + " = " + n(u[4]) + " " + u[2] + ".", n(1) + " " + u[5] + " = " + n(u[4]) + " " + u[3] + "."), steps: [n(k) + " × " + n(u[4]) + " = " + n(big)] });
    return Q({ q: t(n(big) + " " + u[2] + " = ? " + u[0], n(big) + " " + u[3] + " = كم " + u[1] + "؟"), kind: "num", answer: k,
      hint: t("Divide by " + n(u[4]) + ".", "اقسم على " + n(u[4]) + "."), steps: [n(big) + " ÷ " + n(u[4]) + " = " + n(k)] });
  };

  /* ================= Data ================= */
  var FRUIT = [["🍎", "apples", "التفاح"], ["🍌", "bananas", "الموز"], ["🥭", "mangoes", "المانجو"], ["🍊", "oranges", "البرتقال"], ["🍇", "grapes", "العنب"]];
  G.tally = function () {
    if (Math.random() < 0.5) {
      var k = R(4, 19);
      return Q({ q: t("How many do these tally marks show?", "كم تمثل علامات العد هذه؟"), vis: V.tally(k), kind: "num", answer: k,
        hint: t("Each gate (4 lines and a line across) is 5.", "كل حزمة (٤ خطوط وخط مائل) تساوي ٥.".replace("٤", n(4)).replace("٥", n(5))),
        steps: [t(n(Math.floor(k / 5)) + " groups of 5 = " + n(Math.floor(k / 5) * 5) + ", plus " + n(k % 5) + " = " + n(k), n(Math.floor(k / 5)) + " حزم × " + n(5) + " = " + n(Math.floor(k / 5) * 5) + "، ونضيف " + n(k % 5) + " = " + n(k))] });
    }
    var f = E.shuffle(FRUIT).slice(0, 3), vals = f.map(function () { return R(3, 12); }), tot = vals.reduce(function (a, b) { return a + b; }, 0);
    var html = V.table([t("Fruit", "الفاكهة"), t("Tally", "علامات العد")], f.map(function (x, i) { return [x[0] + " " + t(x[1], x[2]), V.tally(vals[i]).replace("<svg", '<svg style="height:34px;width:auto"')]; }));
    return Q({ q: t("The class voted for their favourite fruit. How many children voted altogether?", "صوّت التلاميذ لفاكهتهم المفضلة. كم تلميذًا صوّت في المجموع؟"), vis: html, kind: "num", answer: tot,
      hint: t("Count each row, then add the three totals.", "عُدّ كل صف، ثم اجمع النواتج الثلاثة."), steps: [vals.map(n).join(" + ") + " = " + n(tot)] });
  };

  G.graphs = function () {
    var f = E.shuffle(FRUIT).slice(0, 4), vals = f.map(function () { return R(2, 14); });
    var data = f.map(function (x, i) { return [x[0], vals[i]]; }), ty = R(0, 2), i1 = 0, i2 = 1;
    while (vals[i1] === vals[i2]) { vals[i2] = R(2, 14); data[i2][1] = vals[i2]; }
    if (vals[i1] < vals[i2]) { var tmp = i1; i1 = i2; i2 = tmp; }
    var nm = function (i) { return f[i][0] + " " + t(f[i][1], f[i][2]); };
    if (ty === 0) return Q({ q: t("How many more " + f[i1][1] + " than " + f[i2][1] + "?", "كم يزيد عدد " + f[i1][2] + " على " + f[i2][2] + "؟"), vis: V.bars(data), kind: "num", answer: vals[i1] - vals[i2],
      hint: t("Read both bars, then subtract.", "اقرأ العمودين ثم اطرح."), steps: [nm(i1) + ": " + n(vals[i1]) + sep() + nm(i2) + ": " + n(vals[i2]), n(vals[i1]) + " − " + n(vals[i2]) + " = " + n(vals[i1] - vals[i2])] });
    if (ty === 1) { var tot = vals.reduce(function (a, b) { return a + b; }, 0);
      return Q({ q: t("How many fruits were chosen altogether?", "كم ثمرة اختيرت في المجموع؟"), vis: V.bars(data), kind: "num", answer: tot, hint: t("Add the heights of all the bars.", "اجمع ارتفاعات كل الأعمدة."), steps: [vals.map(n).join(" + ") + " = " + n(tot)] }); }
    var mn = Math.min.apply(null, vals), cnt = vals.filter(function (v) { return v === mn; }).length;
    if (cnt > 1) { vals[vals.indexOf(mn)] = mn - 1 > 0 ? mn - 1 : mn + 20; data = f.map(function (x, i) { return [x[0], vals[i]]; }); mn = Math.min.apply(null, vals); }
    var li = vals.indexOf(mn);
    return Q({ q: t("Which fruit was chosen the least?", "أي فاكهة اختيرت أقل عدد من المرات؟"), vis: V.bars(data), kind: "choice", choices: f.map(function (x, i) { return nm(i); }), answer: nm(li),
      hint: t("Look for the shortest bar.", "ابحث عن أقصر عمود."), steps: [t("The shortest bar is " + nm(li) + " with " + n(mn) + ".", "أقصر عمود هو " + nm(li) + " بعدد " + n(mn) + ".")] });
  };

  var RULES = [
    { en: "even", ar: "زوجي", f: function (x) { return x % 2 === 0; } },
    { en: "odd", ar: "فردي", f: function (x) { return x % 2 === 1; }, not: "even" },
    { en: "multiple of 3", ar: "مضاعف لـ ٣", f: function (x) { return x % 3 === 0; } },
    { en: "multiple of 5", ar: "مضاعف لـ ٥", f: function (x) { return x % 5 === 0; } },
    { en: "greater than 10", ar: "أكبر من ١٠", f: function (x) { return x > 10; } },
    { en: "less than 15", ar: "أصغر من ١٥", f: function (x) { return x < 15; } }
  ];
  G.venn = function () {
    var A = P(RULES), B; do { B = P(RULES); } while (B === A || (A.en + B.en).indexOf("even") >= 0 && (A.en + B.en).indexOf("odd") >= 0);
    var x = R(1, 30), a = A.f(x), b = B.f(x), An = t(A.en, d(A.ar)), Bn = t(B.en, d(B.ar));
    var both = t("In both circles (the middle)", "في الدائرتين معًا (الوسط)"), onlyA = t("Only in “" + A.en + "”", "في «" + d(A.ar) + "» فقط"), onlyB = t("Only in “" + B.en + "”", "في «" + d(B.ar) + "» فقط"), none = t("Outside both circles", "خارج الدائرتين");
    var ans = a && b ? both : a ? onlyA : b ? onlyB : none;
    return Q({ q: t("Where does " + n(x) + " go?", "أين نضع العدد " + n(x) + "؟"), vis: V.venn(An, Bn), kind: "choice", choices: [onlyA, both, onlyB, none], answer: ans,
      hint: t("Test both rules: is " + n(x) + " " + A.en + "? Is it " + B.en + "?", "اختبر القاعدتين: هل " + n(x) + " " + d(A.ar) + "؟ وهل هو " + d(B.ar) + "؟"),
      steps: [An + ": " + (a ? "✓" : "✗") + sep() + Bn + ": " + (b ? "✓" : "✗"), "→ " + ans] });
  };

  /* ================= Probability ================= */
  var LIKE = [["impossible", "مستحيل"], ["unlikely", "غير مرجح"], ["even chance", "احتمال متساوٍ"], ["likely", "مرجح"], ["certain", "مؤكد"]];
  G.likelihood = function () {
    var kind = R(0, 4), total = 8, target, counts;
    var target_n = kind === 0 ? 0 : kind === 1 ? R(1, 3) : kind === 2 ? 4 : kind === 3 ? R(5, 7) : 8;
    var colors = E.shuffle(["red", "blue", "green", "yellow"]); target = colors[0];
    counts = [[target, target_n]]; var rest = total - target_n;
    if (rest > 0) { var o1 = R(0, rest); counts.push([colors[1], o1]); counts.push([colors[2], rest - o1]); }
    var items = counts.filter(function (c) { return c[1] > 0; }).map(function (c) { return [COL[c[0]][0], c[1]]; });
    var desc = counts.filter(function (c) { return c[1] > 0; }).map(function (c) { return E.isAr() ? n(c[1]) + " باللون " + colName(c[0]) : n(c[1]) + " " + colName(c[0]); }).join(sep());
    var words = LIKE.map(function (w) { return t(w[0], w[1]); });
    return Q({ q: t("A bag has " + desc + " balls. You pick one without looking. Picking a " + colName(target) + " ball is…", "في كيس كرات: " + desc + ". تسحب كرة دون أن تنظر. سحب كرة لونها " + colName(target) + " يكون…"),
      vis: V.bag(items), kind: "choice", choices: words, answer: words[kind],
      hint: t("Compare the " + colName(target) + " balls with all " + n(total) + " balls.", "قارن عدد كرات اللون " + colName(target) + " بعدد الكرات كلها (" + n(total) + ")."),
      steps: [t(n(target_n) + " out of " + n(total) + " → " + words[kind], n(target_n) + " من " + n(total) + " ← " + words[kind])] });
  };

  G.experiment = function () {
    var ty = R(0, 2);
    if (ty === 0) { var it = P([["coin", "قطعة نقود", 2], ["dice", "حجر نرد", 6]]);
      return Q({ q: t("How many different outcomes are there when you " + (it[2] === 2 ? "toss a coin" : "roll a dice") + "?", "كم ناتجًا مختلفًا يمكن أن يظهر عند رمي " + it[1] + "؟"), kind: "num", answer: it[2],
        hint: t("List all the ways it can land.", "اكتب كل الاحتمالات الممكنة."), steps: [it[2] === 2 ? t("Heads or tails: 2 outcomes.", "صورة أو كتابة: ناتجان.") : t("1, 2, 3, 4, 5, 6: 6 outcomes.", "١، ٢، ٣، ٤، ٥، ٦: ستة نواتج.")] }); }
    if (ty === 1) {
      var cols = E.shuffle(["red", "blue", "green"]), big = R(3, 5), secs = [];
      for (var i = 0; i < big; i++) secs.push(cols[0]);
      var rest = 8 - big, c1 = R(1, rest - 1);
      for (i = 0; i < c1; i++) secs.push(cols[1]);
      for (i = 0; i < rest - c1; i++) secs.push(cols[2]);
      if (c1 >= big || rest - c1 >= big) { big = 5; secs = [cols[0], cols[0], cols[0], cols[0], cols[0], cols[1], cols[1], cols[2]]; }
      var sorted = E.shuffle(secs);
      return Q({ q: t("You spin this spinner. Which colour is it most likely to land on?", "تُدير هذا القرص الدوّار. على أي لون يُرجَّح أن يتوقف؟"), vis: V.spinner(sorted.map(function (c) { return COL[c][0]; })), kind: "choice",
        choices: cols.map(colName), answer: colName(cols[0]), hint: t("Which colour has the most sections?", "أي لون له أكبر عدد من الأجزاء؟"), steps: [t(colName(cols[0]) + " has the most equal sections.", "اللون " + colName(cols[0]) + " له أكبر عدد من الأجزاء المتساوية.")] });
    }
    var trials = P([30, 60, 120]);
    return Q({ q: t("You roll a fair dice " + n(trials) + " times. About how many times would you expect to roll a 3?", "ترمي حجر نرد عادلًا " + n(trials) + " مرة. تقريبًا كم مرة تتوقع أن يظهر العدد ٣؟".replace("٣؟", n(3) + "؟")), kind: "num", answer: trials / 6,
      hint: t("Each number has 1 chance in 6.", "لكل عدد فرصة ١ من ٦.".replace("١", n(1)).replace("٦", n(6))), steps: [n(trials) + " ÷ " + n(6) + " = " + n(trials / 6)] });
  };

  /* ================= Shapes 3D, angles, compass, coordinates ================= */
  var SOLIDS = [["cube", "مكعب", 6, 12, 8], ["cuboid", "متوازي مستطيلات", 6, 12, 8], ["triangular prism", "منشور ثلاثي", 5, 9, 6], ["square-based pyramid", "هرم رباعي القاعدة", 5, 8, 5], ["triangular pyramid", "هرم ثلاثي", 4, 6, 4]];
  G.solids = function () {
    var s = P(SOLIDS), what = R(0, 2), W = [["faces", "أوجه"], ["edges", "أحرف"], ["vertices", "رؤوس"]][what];
    if (Math.random() < 0.65) return Q({ q: t("How many " + W[0] + " does a " + s[0] + " have?", "كم عدد " + W[1] + " ال" + s[1] + "؟"), kind: "num", answer: s[2 + what],
      hint: t("Faces are flat surfaces, edges are where two faces meet, vertices are corners.", "الأوجه أسطح مستوية، والأحرف حيث يلتقي وجهان، والرؤوس هي الأركان."),
      steps: [t("A " + s[0] + ": " + n(s[2]) + " faces, " + n(s[3]) + " edges, " + n(s[4]) + " vertices.", "ال" + s[1] + ": " + n(s[2]) + " أوجه، " + n(s[3]) + " أحرف، " + n(s[4]) + " رؤوس.")] });
    var pick = P([[0, t("6 square faces", "٦ أوجه مربعة".replace("٦", n(6)))], [3, t("5 faces and 5 vertices", "٥ أوجه و ٥ رؤوس".replace(/٥/g, n(5)))], [4, t("4 triangular faces", "٤ أوجه مثلثة".replace("٤", n(4)))], [2, t("2 triangular faces and 3 rectangular faces", "وجهان مثلثان و ٣ أوجه مستطيلة".replace("٣", n(3)))]]);
    var names = SOLIDS.map(function (x) { return t(x[0], x[1]); });
    return Q({ q: t("Which solid has " + pick[1] + "?", "أي مجسم له " + pick[1] + "؟"), kind: "choice", choices: strChoices(names[pick[0]], E.shuffle(names)).choices, answer: names[pick[0]],
      hint: t("Picture each solid and count.", "تخيّل كل مجسم وعُدّ."), steps: [names[pick[0]]] });
  };

  var DIRS = [["North", "الشمال"], ["North-East", "الشمال الشرقي"], ["East", "الشرق"], ["South-East", "الجنوب الشرقي"], ["South", "الجنوب"], ["South-West", "الجنوب الغربي"], ["West", "الغرب"], ["North-West", "الشمال الغربي"]];
  function dn(i) { return t(DIRS[(i + 8) % 8][0], DIRS[(i + 8) % 8][1]); }
  G.compass = function () {
    var s = R(0, 7);
    if (Math.random() < 0.35) { var opp = (s + 4) % 8;
      return Q({ q: t("Which direction is opposite " + dn(s) + "?", "ما الاتجاه المقابل لـ" + dn(s) + "؟"), kind: "choice", choices: E.shuffle([opp, (s + 2) % 8, (s + 6) % 8, (s + 3) % 8]).map(dn), answer: dn(opp),
        hint: t("Opposite means a half turn.", "المقابل يعني نصف دورة."), steps: [dn(s) + " → " + t("half turn", "نصف دورة") + " → " + dn(opp)] }); }
    var turn = P([[2, "a quarter turn", "ربع دورة"], [4, "a half turn", "نصف دورة"], [6, "a three-quarter turn", "ثلاثة أرباع دورة"], [1, "an eighth of a turn", "ثُمن دورة"]]), cw = Math.random() < 0.5;
    var end = (s + (cw ? turn[0] : -turn[0]) + 16) % 8, dirW = cw ? t("clockwise", "مع اتجاه عقارب الساعة") : t("anticlockwise", "عكس اتجاه عقارب الساعة");
    var alts = [end, (s + (cw ? -turn[0] : turn[0]) + 16) % 8, (end + 1) % 8, (end + 7) % 8].filter(function (x, i, a) { return a.indexOf(x) === i; });
    return Q({ q: t("You face " + dn(s) + ". You make " + turn[1] + " " + dirW + ". Which way do you face now?", "أنت تتجه نحو " + dn(s) + ". تدور " + turn[2] + " " + dirW + ". إلى أين تتجه الآن؟"), kind: "choice", choices: E.shuffle(alts).map(dn), answer: dn(end),
      hint: t("Clockwise goes N → NE → E → SE → S …", "مع عقارب الساعة: شمال ← شمال شرق ← شرق ← جنوب شرق ← جنوب …"), steps: [dn(s) + " → " + dn(end)] });
  };

  G.angles = function () {
    var ty = R(0, 2);
    if (ty === 0) { var tr = P([["a quarter turn", "ربع دورة", 90], ["a half turn", "نصف دورة", 180], ["a three-quarter turn", "ثلاثة أرباع دورة", 270], ["a full turn", "دورة كاملة", 360]]);
      return Q({ q: t("How many degrees are in " + tr[0] + "?", "كم درجة في " + tr[1] + "؟"), kind: "num", answer: tr[2], unit: "°", hint: t("A full turn is 360°.", "الدورة الكاملة ٣٦٠°.".replace("٣٦٠", n(360))), steps: [t("A full turn is " + n(360) + "°, so " + tr[0] + " is " + n(tr[2]) + "°.", "الدورة الكاملة " + n(360) + "°، إذن " + tr[1] + " = " + n(tr[2]) + "°.")] }); }
    if (ty === 1) { var k = P([1, 2, 3]); return Q({ q: t("How many right angles make " + (k === 1 ? "a quarter turn" : k === 2 ? "a half turn" : "a three-quarter turn") + "?", "كم زاوية قائمة في " + (k === 1 ? "ربع دورة" : k === 2 ? "نصف دورة" : "ثلاثة أرباع دورة") + "؟"), kind: "num", answer: k,
      hint: t("A right angle is a quarter turn (90°).", "الزاوية القائمة ربع دورة (٩٠°).".replace("٩٠", n(90))), steps: [n(k * 90) + "° ÷ " + n(90) + "° = " + n(k)] }); }
    var deg = P([20, 35, 45, 60, 75, 90, 110, 130, 150, 170]), words = [t("acute", "حادة"), t("right angle", "قائمة"), t("obtuse", "منفرجة"), t("straight", "مستقيمة")];
    var ans = deg < 90 ? words[0] : deg === 90 ? words[1] : words[2];
    return Q({ q: t("What type of angle is this?", "ما نوع هذه الزاوية؟"), vis: V.angle(deg), kind: "choice", choices: words, answer: ans,
      hint: t("Compare it with a right angle (the corner of a book).", "قارنها بالزاوية القائمة (ركن الكتاب)."),
      steps: [deg < 90 ? t("Smaller than a right angle → acute.", "أصغر من القائمة ← حادة.") : deg === 90 ? t("Exactly a square corner → right angle.", "ركن مربع تمامًا ← قائمة.") : t("Bigger than a right angle but less than a straight line → obtuse.", "أكبر من القائمة وأصغر من المستقيمة ← منفرجة.")] });
  };

  var PT = [["A", "أ"], ["B", "ب"], ["C", "ج"], ["D", "د"]];
  // (x, y) - in Arabic the natural right-to-left order puts x first on the right, as in Arabic textbooks
  function cp(x, y) { return E.isAr() ? '<span dir="rtl">' + d("(" + x + "، " + y + ")") + "</span>" : ltr("(" + x + ", " + y + ")"); }
  G.coords = function () {
    if (Math.random() < 0.55) {
      var x = R(1, 8), y = R(1, 8); if (x === y) y = (y % 8) + 1;
      var alts = [[x, y], [y, x], [x + 1, y], [x, y - 1 || y + 1]].map(function (p) { return cp(p[0], p[1]); }).filter(function (v, i, a) { return a.indexOf(v) === i; });
      return Q({ q: t("What are the coordinates of point A?", "ما إحداثيا النقطة أ؟"), vis: V.coord([{ x: x, y: y, label: t("A", "أ") }]), kind: "choice", choices: E.shuffle(alts), answer: cp(x, y),
        hint: t("Go across first (x), then up (y).", "تحرّك أفقيًا أولًا (س)، ثم رأسيًا (ص)."), steps: [t("Across " + n(x) + ", up " + n(y) + " → ", "أفقيًا " + n(x) + "، رأسيًا " + n(y) + " ← ") + cp(x, y)] });
    }
    var pts = [], used = {};
    while (pts.length < 4) { var px = R(1, 9), py = R(1, 9), key = px + "," + py; if (!used[key] && !used[py + "," + px]) { used[key] = 1; pts.push({ x: px, y: py, label: t(PT[pts.length][0], PT[pts.length][1]), color: "var(--blue)" }); } }
    var tg = R(0, 3);
    return Q({ q: t("Which point is at ", "أي نقطة إحداثياها ") + cp(pts[tg].x, pts[tg].y) + t("?", "؟"), vis: V.coord(pts), kind: "choice", choices: pts.map(function (p) { return p.label; }), answer: pts[tg].label,
      hint: t("Across first, then up.", "أفقيًا أولًا، ثم رأسيًا."), steps: [cp(pts[tg].x, pts[tg].y) + " → " + pts[tg].label] });
  };

  G.reflect = function () {
    var vert = Math.random() < 0.6, x = R(1, 4), y = R(1, 9), rx, ry;
    if (vert) { rx = 10 - x; ry = y; } else { x = R(1, 9); y = R(1, 4); rx = x; ry = 10 - y; }
    var alts = [cp(rx, ry), cp(x, y), cp(ry, rx), vert ? cp(rx - 1, ry) : cp(rx, ry - 1)].filter(function (v, i, a) { return a.indexOf(v) === i; });
    return Q({ q: t("Point A is reflected in the dashed mirror line. Where is its reflection?", "انعكست النقطة أ في خط المرآة المتقطع. أين صورتها؟"),
      vis: V.coord([{ x: x, y: y, label: t("A", "أ") }], vert ? { x: 5 } : { y: 5 }), kind: "choice", choices: E.shuffle(alts), answer: cp(rx, ry),
      hint: t("The reflection is the same distance from the mirror, on the other side.", "الصورة على البعد نفسه من المرآة لكن في الجهة الأخرى."),
      steps: [vert ? t("A is " + n(5 - x) + " squares left of the mirror, so the image is " + n(5 - x) + " squares right of it.", "النقطة أ تبعد " + n(5 - x) + " مربعات يسار المرآة، فصورتها تبعد " + n(5 - x) + " مربعات يمينها.") : t("A is " + n(5 - y) + " squares below the mirror, so the image is " + n(5 - y) + " squares above it.", "النقطة أ تبعد " + n(5 - y) + " مربعات أسفل المرآة، فصورتها تبعد " + n(5 - y) + " مربعات أعلاها."), "→ " + cp(rx, ry)] });
  };

  /* ================= Factors & squares ================= */
  function factorsOf(N) { var f = []; for (var i = 1; i <= N; i++) if (N % i === 0) f.push(i); return f; }
  G.factors = function () {
    var N = P([12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 48]), fs = factorsOf(N), ty = R(0, 2);
    if (ty === 0) { var good = P(fs.filter(function (x) { return x > 1 && x < N; })), bad = E.shuffle([5, 7, 9, 11, 13, 14, 15, 17].filter(function (x) { return N % x !== 0; })).slice(0, 3);
      return Q({ q: t("Which number is a factor of " + n(N) + "?", "أي عدد من عوامل " + n(N) + "؟"), kind: "choice", choices: E.shuffle([good].concat(bad)).map(n), answer: n(good),
        hint: t("A factor divides " + n(N) + " exactly, with no remainder.", "العامل يقسم " + n(N) + " دون باقٍ."), steps: [n(N) + " ÷ " + n(good) + " = " + n(N / good)] }); }
    if (ty === 1) { var k = R(3, 9), m = k * R(3, 9), bads = [m + 1, m - 2, m + k - 1].filter(function (x) { return x % k !== 0; });
      return Q({ q: t("Which number is a multiple of " + n(k) + "?", "أي عدد من مضاعفات " + n(k) + "؟"), kind: "choice", choices: E.shuffle([m].concat(bads)).map(n), answer: n(m),
        hint: t("Multiples are in the " + n(k) + " times table.", "المضاعفات موجودة في جدول ضرب " + n(k) + "."), steps: [n(k) + " × " + n(m / k) + " = " + n(m)] }); }
    var pairs = []; fs.forEach(function (f) { if (f <= N / f) pairs.push(n(f) + " × " + n(N / f)); });
    return Q({ q: t("How many factors does " + n(N) + " have?", "كم عاملًا للعدد " + n(N) + "؟"), kind: "num", answer: fs.length,
      hint: t("Find the factor pairs: 1 × " + n(N) + ", 2 × …", "أوجد أزواج العوامل: ١ × ".replace("١", n(1)) + n(N) + "، …"),
      steps: [pairs.join(sep()), t("Factors: ", "العوامل: ") + fs.map(n).join(sep()) + " (" + n(fs.length) + ")"] });
  };

  G.squares = function () {
    if (Math.random() < 0.55) { var k = R(2, 12);
      return Q({ q: t(n(k) + " squared (" + n(k) + " × " + n(k) + ") = ?", "مربع العدد " + n(k) + " (" + n(k) + " × " + n(k) + ") = ؟"), kind: "num", answer: k * k,
        hint: t("Build a square with " + n(k) + " rows of " + n(k) + ".", "كوّن مربعًا من " + n(k) + " صفوف في كل منها " + n(k) + "."), steps: [n(k) + " × " + n(k) + " = " + n(k * k)] }); }
    var sq = P([16, 25, 36, 49, 64, 81, 100]), bad = E.shuffle([18, 24, 30, 40, 45, 50, 60, 72, 90].filter(function (x) { return x !== sq; })).slice(0, 3);
    return Q({ q: t("Which is a square number?", "أي عدد مربع؟"), kind: "choice", choices: E.shuffle([sq].concat(bad)).map(n), answer: n(sq),
      hint: t("A square number is a number times itself.", "العدد المربع هو عدد مضروب في نفسه."), steps: [n(Math.sqrt(sq)) + " × " + n(Math.sqrt(sq)) + " = " + n(sq)] });
  };

  E.GEN = G;
  // run a generator safely; returns null if it throws
  E.makeQuestion = function (key) {
    try { var q = G[key](); if (q.kind === "choice" && (!q.choices || q.choices.indexOf(q.answer) < 0)) return null; return q; }
    catch (e) { if (window.console) console.error("generator " + key, e); return null; }
  };
  E.numChoices = numChoices;
})();
