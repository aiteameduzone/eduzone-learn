// Interactive widgets. Each widget: (el, params, ctx) -> renders into el.
// ctx = { lang, num(x), frac(n,d), say(key), done() }
(function () {
  "use strict";

  var W = {};

  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function gcd(a, b) { return b ? gcd(b, a % b) : a; }

  function status(el, ok, text) {
    el.className = "w-status" + (ok ? " ok" : "");
    el.innerHTML = text;
  }

  function bar(parts, on, readonly, alt) {
    var b = h("div", "fbar" + (readonly ? " ro" : "") + (alt ? " alt" : ""));
    for (var i = 0; i < parts; i++) {
      var s = h("div", "seg" + (i < on ? " on" : ""));
      s.dataset.i = i;
      b.appendChild(s);
    }
    return b;
  }

  // Shade n of d equal parts.
  W["fraction-shade"] = function (el, p, ctx) {
    var d = p.parts, target = p.target, shaded = {};
    var b = bar(d, 0, false);
    var out = h("div", "w-row");
    var read = h("div", "w-readout");
    out.appendChild(read);
    var st = h("div", "w-status");
    el.appendChild(b); el.appendChild(out); el.appendChild(st);
    function count() { return Object.keys(shaded).length; }
    function upd() {
      var n = count();
      read.innerHTML = ctx.frac(n, d);
      if (n === target) { status(st, true, ctx.say("correct")); ctx.done(); }
      else status(st, false, "");
    }
    b.addEventListener("click", function (e) {
      var i = e.target.dataset.i;
      if (i == null) return;
      if (shaded[i]) { delete shaded[i]; e.target.classList.remove("on"); }
      else { shaded[i] = 1; e.target.classList.add("on"); }
      upd();
    });
    upd();
  };

  // Split every part into k pieces: n/d == nk/dk.
  W["fraction-equivalent"] = function (el, p, ctx) {
    var n = p.num, d = p.den, maxK = p.maxK || 4, goal = p.targetDen || 0;
    var top = h("div");
    var bottom = h("div");
    bottom.style.marginTop = "10px";
    var row = h("div", "w-row");
    var range = h("input");
    range.type = "range"; range.min = 1; range.max = maxK; range.value = 1;
    var read = h("div", "w-readout");
    row.appendChild(range); row.appendChild(read);
    var st = h("div", "w-status");
    el.appendChild(top); el.appendChild(bottom); el.appendChild(row); el.appendChild(st);
    top.appendChild(bar(d, n, true));
    function upd() {
      var k = +range.value;
      bottom.innerHTML = "";
      bottom.appendChild(bar(d * k, n * k, true, true));
      read.innerHTML = ctx.frac(n, d) + " = " + ctx.frac(n * k, d * k);
      if (goal ? d * k === goal : k > 1) { status(st, true, ctx.say("same_amount")); ctx.done(); }
      else status(st, false, "");
    }
    range.addEventListener("input", upd);
    upd();
  };

  // Place a fraction (or whole number) on a number line.
  W["number-line"] = function (el, p, ctx) {
    var min = p.min || 0, max = p.max || 1, div = p.divisions || 4;
    var tn = p.target[0], td = p.target[1];
    // scale: each whole step on the line is worth `scale` (e.g. 1000 for rounding big numbers)
    var scale = p.scale || 0;
    function big(v) { return ctx.num(Math.round(v).toLocaleString("en-US")); }
    var total = (max - min) * div;
    var line = h("div", "nline");
    line.appendChild(h("div", "axis"));
    var dot = h("div", "dot");
    dot.style.display = "none";
    for (var i = 0; i <= total; i++) {
      var x = (i / total) * 100;
      var t = h("div", "tick"); t.style.left = x + "%"; line.appendChild(t);
      var whole = i % div === 0;
      if (whole || p.labelAll) {
        var l = h("div", "lbl", scale ? big((min + i / div) * scale) : whole ? ctx.num(min + i / div) : ctx.frac(min * div + i, div));
        l.style.left = x + "%";
        line.appendChild(l);
      }
      var hit = h("div", "hit"); hit.style.left = x + "%"; hit.dataset.i = i;
      line.appendChild(hit);
    }
    line.appendChild(dot);
    var st = h("div", "w-status");
    el.appendChild(line); el.appendChild(st);
    line.addEventListener("click", function (e) {
      var i = e.target.dataset.i;
      if (i == null) return;
      i = +i;
      dot.style.display = "block";
      dot.style.left = (i / total) * 100 + "%";
      var pn = min * div + i;
      if (pn * td === tn * div) { status(st, true, ctx.say("correct")); ctx.done(); }
      else status(st, false, ctx.say("you_placed") + " " + (scale ? big(pn / div * scale) : ctx.frac(pn, div)) + " - " + ctx.say("try_again"));
    });
  };

  // Build a number in a place-value chart.
  var PLACES = {
    en: ["Millions", "Hundred thousands", "Ten thousands", "Thousands", "Hundreds", "Tens", "Ones"],
    ar: ["ملايين", "مئات الألوف", "عشرات الألوف", "آلاف", "مئات", "عشرات", "آحاد"]
  };
  W["place-value"] = function (el, p, ctx) {
    var cols = p.places || 7, target = p.target;
    var names = PLACES[ctx.lang].slice(7 - cols);
    var vals = [];
    var grid = h("div", "pv");
    grid.style.setProperty("--cols", cols);
    var read = h("div", "w-readout");
    read.style.marginTop = "10px";
    var st = h("div", "w-status");
    names.forEach(function (name, i) {
      vals.push(0);
      var c = h("div", "col");
      c.appendChild(h("div", "h", name));
      var v = h("div", "v", ctx.num(0));
      var plus = h("button", null, "+");
      var minus = h("button", null, "&minus;");
      plus.onclick = function () { vals[i] = (vals[i] + 1) % 10; v.innerHTML = ctx.num(vals[i]); upd(); };
      minus.onclick = function () { vals[i] = (vals[i] + 9) % 10; v.innerHTML = ctx.num(vals[i]); upd(); };
      c.appendChild(plus); c.appendChild(v); c.appendChild(minus);
      grid.appendChild(c);
    });
    el.appendChild(grid); el.appendChild(read); el.appendChild(st);
    function upd() {
      var n = 0;
      vals.forEach(function (d) { n = n * 10 + d; });
      read.innerHTML = ctx.num(n.toLocaleString("en-US"));
      if (n === target) { status(st, true, ctx.say("correct")); ctx.done(); }
      else status(st, false, "");
    }
    upd();
  };

  // Compare two fractions with bars, pick < = >.
  W["compare"] = function (el, p, ctx) {
    var a = p.a, b = p.b;
    var la = h("div", "w-readout", ctx.frac(a[0], a[1]));
    var lb = h("div", "w-readout", ctx.frac(b[0], b[1]));
    el.appendChild(la); el.appendChild(bar(a[1], a[0], true));
    var mid = h("div", "w-row cmp");
    mid.style.margin = "12px 0";
    var st = h("div", "w-status");
    var ans = a[0] * b[1] - b[0] * a[1];
    var right = ans > 0 ? ">" : ans < 0 ? "<" : "=";
    [">", "=", "<"].forEach(function (sym) {
      var btn = h("button", null, sym);
      btn.setAttribute("dir", "ltr");
      btn.onclick = function () {
        mid.querySelectorAll("button").forEach(function (x) { x.classList.remove("sel"); });
        btn.classList.add("sel");
        if (sym === right) { status(st, true, ctx.say("correct")); ctx.done(); }
        else status(st, false, ctx.say("try_again"));
      };
      mid.appendChild(btn);
    });
    el.appendChild(mid);
    el.appendChild(lb); el.appendChild(bar(b[1], b[0], true, true));
    el.appendChild(st);
  };

  // +/- stepper used by array and area-grid
  function stepper(label, val, min, max, onChange, ctx) {
    var box = h("div", "stepper");
    box.appendChild(h("span", "st-lbl", label));
    var minus = h("button", null, "&minus;"), v = h("b", "st-val", ctx.num(val)), plus = h("button", null, "+");
    minus.onclick = function () { if (val > min) { val--; v.innerHTML = ctx.num(val); onChange(val); } };
    plus.onclick = function () { if (val < max) { val++; v.innerHTML = ctx.num(val); onChange(val); } };
    box.appendChild(minus); box.appendChild(v); box.appendChild(plus);
    return box;
  }

  function dotGrid(rows, cols) {
    var g = h("div", "dots");
    g.style.gridTemplateColumns = "repeat(" + cols + ", 1fr)";
    for (var i = 0; i < rows * cols; i++) g.appendChild(h("span", "dot-c"));
    return g;
  }

  // Build an array of rows x cols. Done when the product (or exact shape) matches.
  // params: {target, rows?, cols?, max?, exact?: [r, c]}
  var ROWS = { en: "Rows", ar: "صفوف" }, COLS = { en: "Columns", ar: "أعمدة" };
  W["array"] = function (el, p, ctx) {
    var r = p.rows || 1, c = p.cols || 1, max = p.max || 10;
    var wrap = h("div", "w-row"), pic = h("div", "dots-wrap"), read = h("div", "w-readout"), st = h("div", "w-status");
    wrap.appendChild(stepper(ROWS[ctx.lang], r, 1, max, function (x) { r = x; upd(); }, ctx));
    wrap.appendChild(stepper(COLS[ctx.lang], c, 1, max, function (x) { c = x; upd(); }, ctx));
    el.appendChild(wrap); el.appendChild(pic); el.appendChild(read); el.appendChild(st);
    function upd() {
      pic.innerHTML = ""; pic.appendChild(dotGrid(r, c));
      read.innerHTML = '<span dir="ltr">' + ctx.num(r) + " × " + ctx.num(c) + " = " + ctx.num(r * c) + "</span>";
      var ok = p.exact ? (r === p.exact[0] && c === p.exact[1]) || (r === p.exact[1] && c === p.exact[0])
                       : r * c === p.target && (!p.notTrivial || (r > 1 && c > 1));
      if (ok) { status(st, true, ctx.say("correct")); ctx.done(); } else status(st, false, "");
    }
    upd();
  };

  // Rectangle on a square grid: shows area and perimeter.
  // params: {target: {area?, perimeter?, w?, h?}, w?, h?, maxW?, maxH?}
  var WD = { en: "Length", ar: "الطول" }, HT = { en: "Width", ar: "العرض" };
  var AREA = { en: "Area", ar: "المساحة" }, PERI = { en: "Perimeter", ar: "المحيط" };
  W["area-grid"] = function (el, p, ctx) {
    var w = p.w || 1, ht = p.h || 1, mw = p.maxW || 10, mh = p.maxH || 8, tg = p.target || {};
    var wrap = h("div", "w-row"), pic = h("div", "grid-wrap"), read = h("div", "w-readout area-read"), st = h("div", "w-status");
    wrap.appendChild(stepper(WD[ctx.lang], w, 1, mw, function (x) { w = x; upd(); }, ctx));
    wrap.appendChild(stepper(HT[ctx.lang], ht, 1, mh, function (x) { ht = x; upd(); }, ctx));
    el.appendChild(wrap); el.appendChild(pic); el.appendChild(read); el.appendChild(st);
    function upd() {
      pic.innerHTML = ""; pic.appendChild(gridPic(w, ht, mw, mh));
      read.innerHTML = '<span dir="ltr">' + AREA[ctx.lang] + " = " + ctx.num(w) + " × " + ctx.num(ht) + " = <b>" + ctx.num(w * ht) +
        "</b></span><br><span dir=\"ltr\">" + PERI[ctx.lang] + " = " + ctx.num(w) + " + " + ctx.num(ht) + " + " + ctx.num(w) + " + " + ctx.num(ht) + " = <b>" + ctx.num(2 * (w + ht)) + "</b></span>";
      var ok = (tg.area == null || w * ht === tg.area) && (tg.perimeter == null || 2 * (w + ht) === tg.perimeter) &&
               (tg.w == null || (w === tg.w && ht === tg.h) || (w === tg.h && ht === tg.w));
      if (ok) { status(st, true, ctx.say("correct")); ctx.done(); } else status(st, false, "");
    }
    upd();
  };

  function gridPic(w, ht, mw, mh) {
    var g = h("div", "sqgrid");
    g.style.gridTemplateColumns = "repeat(" + mw + ", 1fr)";
    for (var y = 0; y < mh; y++) for (var x = 0; x < mw; x++) g.appendChild(h("span", "sq" + (x < w && y < ht ? " on" : "")));
    return g;
  }

  // ---------- Read-only animated visuals for explain/example steps ----------
  // visual = {kind: "pies"|"bars", items: [{f:[n,d], label?, color?}], ops?: ["+","="...], emoji?}
  var SVGNS = "http://www.w3.org/2000/svg";
  function pie(n, d, color) {
    var size = 110, r = 50, c = 55;
    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", "0 0 " + size + " " + size);
    svg.setAttribute("class", "pie");
    for (var i = 0; i < d; i++) {
      var a0 = (i / d) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / d) * 2 * Math.PI - Math.PI / 2;
      var el;
      if (d === 1) {
        el = document.createElementNS(SVGNS, "circle");
        el.setAttribute("cx", c); el.setAttribute("cy", c); el.setAttribute("r", r);
      } else {
        el = document.createElementNS(SVGNS, "path");
        var x0 = c + r * Math.cos(a0), y0 = c + r * Math.sin(a0), x1 = c + r * Math.cos(a1), y1 = c + r * Math.sin(a1);
        el.setAttribute("d", "M" + c + "," + c + " L" + x0 + "," + y0 + " A" + r + "," + r + " 0 " + (a1 - a0 > Math.PI ? 1 : 0) + " 1 " + x1 + "," + y1 + " Z");
      }
      el.setAttribute("class", "slice" + (i < n ? " on " + (color || "") : ""));
      el.style.transitionDelay = (i * 0.12) + "s";
      svg.appendChild(el);
    }
    return svg;
  }

  // Base-ten blocks: thousands (cube), hundreds (flat), tens (rod), ones (unit).
  var PLACE4 = { en: ["thousands", "hundreds", "tens", "ones"], ar: ["آلاف", "مئات", "عشرات", "آحاد"] };
  function blocks(el, v, ctx) {
    var n = v.n, d = [Math.floor(n / 1000) % 10, Math.floor(n / 100) % 10, Math.floor(n / 10) % 10, n % 10];
    var row = h("div", "vis blocks");
    d.forEach(function (k, i) {
      if (!k && n < Math.pow(10, 3 - i)) return; // skip leading zeros; inner zeros keep an empty column
      var col = h("div", "vis-item");
      var pile = h("div", "pile pile-" + i);
      for (var j = 0; j < k; j++) { var b = h("span", "blk blk-" + i); b.style.animationDelay = (j * 0.08) + "s"; pile.appendChild(b); }
      col.appendChild(pile);
      col.appendChild(h("div", "vis-label small", ctx.num(k) + " " + PLACE4[ctx.lang][i]));
      row.appendChild(col);
    });
    el.appendChild(row);
    el.appendChild(h("div", "vis-total", ctx.num(n.toLocaleString("en-US"))));
  }

  W.visual = function (el, v, ctx) {
    if (v.kind === "blocks") { if (v.emoji) el.appendChild(h("div", "vis-emoji", v.emoji)); return blocks(el, v, ctx); }
    if (v.kind === "array" || v.kind === "grid") {
      if (v.emoji) el.appendChild(h("div", "vis-emoji", v.emoji));
      var box = h("div", "vis vis-" + v.kind);
      if (v.kind === "array") box.appendChild(dotGrid(v.rows, v.cols));
      else { var gp = gridPic(v.w, v.h, v.w, v.h); gp.style.width = Math.min(300, v.w * 34) + "px"; box.appendChild(gp); }
      el.appendChild(box);
      el.appendChild(h("div", "vis-total", v.label ? ctx.inline(ctx.L(v.label)) :
        '<span dir="ltr">' + ctx.num(v.kind === "array" ? v.rows : v.w) + " × " + ctx.num(v.kind === "array" ? v.cols : v.h) + "</span>"));
      return;
    }
    var row = h("div", "vis vis-" + v.kind);
    var ops = v.ops || [];
    v.items.forEach(function (it, i) {
      var cell = h("div", "vis-item" + (i > 0 && ops[i - 1] === "=" ? " result" : ""));
      var n = it.f[0], d = it.f[1];
      if (v.kind === "pies") {
        var wrap = h("div", "pies");
        // improper fractions draw several whole pies
        var wholes = Math.max(1, Math.ceil(n / d));
        for (var k = 0; k < wholes; k++) wrap.appendChild(pie(Math.min(d, Math.max(0, n - k * d)), d, it.color));
        cell.appendChild(wrap);
      } else {
        var b = bar(d, n, true, it.color === "blue");
        for (var q = 0; q < b.children.length; q++) b.children[q].style.transitionDelay = (q * 0.12) + "s";
        cell.appendChild(b);
      }
      cell.appendChild(h("div", "vis-label" + (v.hideLabels ? " ans" : ""), it.label ? ctx.inline(ctx.L(it.label)) : ctx.frac(n, d)));
      row.appendChild(cell);
      if (ops[i]) row.appendChild(h("div", "vis-op" + ("=<>".indexOf(ops[i]) >= 0 ? " ans" : ""), ops[i]));
    });
    if (v.emoji) el.appendChild(h("div", "vis-emoji", v.emoji));
    el.appendChild(row);
    // start animation on next frame
    requestAnimationFrame(function () { requestAnimationFrame(function () { row.classList.add("go"); }); });
  };

  window.EZWidgets = W;
  window.EZgcd = gcd;
})();
