// Lab tools: free-play explorers shown in a unit's Lab tab.
// Each tool: (el, ctx) where ctx = { lang, num(x), frac(n,d), T(en, ar) }.
(function () {
  "use strict";

  var LAB = {};

  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function fmt(n) { return Number(n).toLocaleString("en-US"); }
  function numInput(val, min, max) {
    var i = h("input", "lab-in");
    i.type = "number"; i.value = val; i.min = min; i.max = max; i.inputMode = "numeric";
    return i;
  }
  function field(label, input) {
    var f = h("label", "lab-field");
    f.appendChild(h("span", null, label));
    f.appendChild(input);
    return f;
  }
  function badge(text, kind) { return '<span class="lab-badge ' + (kind || "") + '">' + text + "</span>"; }
  function ltr(s) { return '<span dir="ltr">' + s + "</span>"; }
  function clamp(v, a, b) { v = Math.floor(+v || 0); return Math.max(a, Math.min(b, v)); }

  // ---------- U1: Place value explorer ----------
  var PLACES = {
    en: ["Ones", "Tens", "Hundreds", "Thousands", "Ten thousands", "Hundred thousands", "Millions", "Ten millions", "Hundred millions", "Billions"],
    ar: ["آحاد", "عشرات", "مئات", "آلاف", "عشرات الألوف", "مئات الألوف", "ملايين", "عشرات الملايين", "مئات الملايين", "مليارات"]
  };
  LAB["place-explorer"] = function (el, c) {
    var inp = numInput(3045218, 0, 9999999999);
    var form = h("div", "lab-row"); form.appendChild(field(c.T("Type any number", "اكتب أي عدد"), inp));
    var out = h("div", "lab-out");
    el.appendChild(form); el.appendChild(out);
    function upd() {
      var n = clamp(inp.value, 0, 9999999999), s = String(n), d = s.split("").map(Number);
      var cols = d.map(function (x, i) {
        var p = s.length - 1 - i;
        return '<div class="pv-col' + (x ? "" : " zero") + '"><small>' + PLACES[c.lang][p] + "</small><b>" + c.num(x) +
          "</b><em>" + c.num(fmt(x * Math.pow(10, p))) + "</em></div>";
      }).join("");
      var parts = d.map(function (x, i) { return x ? fmt(x * Math.pow(10, s.length - 1 - i)) : null; }).filter(Boolean);
      var r = [10, 100, 1000].map(function (k) {
        return c.T("Nearest ", "لأقرب ") + c.num(fmt(k)) + ": " + badge(c.num(fmt(Math.round(n / k) * k)), "blue");
      }).join(" ");
      out.innerHTML = '<div class="pv-strip" dir="ltr">' + cols + "</div>" +
        "<p><b>" + c.T("Expanded form", "الصورة الممتدة") + ":</b> " + ltr(c.num(parts.join(" + ") || "0")) + "</p>" +
        "<p><b>" + c.T("Rounding", "التقريب") + ":</b> " + r + "</p>";
    }
    inp.oninput = upd; upd();
  };

  // ---------- U2: Column addition / subtraction with regrouping ----------
  LAB["column-calc"] = function (el, c) {
    var a = numInput(4587, 0, 999999), b = numInput(2675, 0, 999999), op = h("select", "lab-in");
    op.innerHTML = '<option value="+">+</option><option value="-">−</option>';
    var form = h("div", "lab-row");
    form.appendChild(field(c.T("First number", "العدد الأول"), a));
    form.appendChild(field(c.T("Operation", "العملية"), op));
    form.appendChild(field(c.T("Second number", "العدد الثاني"), b));
    var out = h("div", "lab-out");
    el.appendChild(form); el.appendChild(out);
    var NAMES = { en: ["Ones", "Tens", "Hundreds", "Thousands", "Ten thousands", "Hundred thousands"], ar: ["الآحاد", "العشرات", "المئات", "الآلاف", "عشرات الألوف", "مئات الألوف"] };
    function upd() {
      var x = clamp(a.value, 0, 999999), y = clamp(b.value, 0, 999999), sub = op.value === "-";
      if (sub && y > x) { var t = x; x = y; y = t; }
      var res = sub ? x - y : x + y, len = String(Math.max(x, y, res)).length;
      var X = String(x).padStart(len, "0").split("").reverse().map(Number), Y = String(y).padStart(len, "0").split("").reverse().map(Number);
      var steps = [], carry = 0, marks = [];
      for (var i = 0; i < len; i++) {
        if (i >= String(Math.max(x, y)).length && !carry) break;
        var top = X[i] - (sub ? carry : 0), r;
        if (sub) {
          if (top < Y[i]) { r = top + 10 - Y[i]; steps.push(NAMES[c.lang][i] + ": " + ltr(c.num(top) + " < " + c.num(Y[i])) + " → " + c.T("regroup", "نعيد التجميع") + ": " + ltr(c.num(top + 10) + " − " + c.num(Y[i]) + " = " + c.num(r))); carry = 1; marks[i + 1] = "−1"; }
          else { r = top - Y[i]; steps.push(NAMES[c.lang][i] + ": " + ltr(c.num(top) + " − " + c.num(Y[i]) + " = " + c.num(r))); carry = 0; }
        } else {
          var s = X[i] + Y[i] + carry;
          steps.push(NAMES[c.lang][i] + ": " + ltr(c.num(X[i]) + " + " + c.num(Y[i]) + (carry ? " + " + c.num(1) : "") + " = " + c.num(s)) +
            (s > 9 ? " → " + c.T("write ", "نكتب ") + c.num(s % 10) + c.T(", carry 1", " ونحمل ١") : ""));
          if (s > 9) marks[i + 1] = "+1";
          carry = s > 9 ? 1 : 0;
        }
      }
      function row(v, cls) { return '<div class="cc-row ' + (cls || "") + '">' + String(v).padStart(len, " ").split("").map(function (d) { return "<span>" + (d === " " ? "" : c.num(d)) + "</span>"; }).join("") + "</div>"; }
      var markRow = '<div class="cc-row marks">' + Array.apply(null, Array(len)).map(function (_, k) { var m = marks[len - 1 - k]; return "<span>" + (m ? c.num(m) : "") + "</span>"; }).join("") + "</div>";
      out.innerHTML = '<div class="cc" dir="ltr">' + markRow + row(x) + row(y, "op" + (sub ? " sub" : "")) + row(res, "res") + "</div>" +
        "<ol class=\"lab-steps\">" + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>" +
        "<p><b>" + c.T("Check", "التحقق") + ":</b> " + ltr(sub ? c.num(fmt(res)) + " + " + c.num(fmt(y)) + " = " + c.num(fmt(x)) : c.num(fmt(res)) + " − " + c.num(fmt(y)) + " = " + c.num(fmt(x))) + " ✓</p>";
    }
    a.oninput = b.oninput = op.onchange = upd; upd();
  };

  // ---------- U3: Measurement converter ----------
  var UNITS = {
    length: { en: "Length", ar: "الطول", u: [["km", "كم", 1000000], ["m", "م", 1000], ["cm", "سم", 10], ["mm", "مم", 1]] },
    mass: { en: "Mass", ar: "الكتلة", u: [["kg", "كجم", 1000], ["g", "جم", 1]] },
    capacity: { en: "Capacity", ar: "السعة", u: [["L", "لتر", 1000], ["mL", "مل", 1]] },
    time: { en: "Time", ar: "الزمن", u: [["day", "يوم", 86400], ["h", "ساعة", 3600], ["min", "دقيقة", 60], ["s", "ثانية", 1]] }
  };
  LAB["converter"] = function (el, c) {
    var cat = h("select", "lab-in"), val = numInput(3, 0, 100000), from = h("select", "lab-in"), to = h("select", "lab-in");
    Object.keys(UNITS).forEach(function (k) { cat.innerHTML += '<option value="' + k + '">' + UNITS[k][c.lang] + "</option>"; });
    var form = h("div", "lab-row");
    form.appendChild(field(c.T("Measure", "القياس"), cat));
    form.appendChild(field(c.T("Amount", "المقدار"), val));
    form.appendChild(field(c.T("From", "من"), from));
    form.appendChild(field(c.T("To", "إلى"), to));
    var out = h("div", "lab-out");
    el.appendChild(form); el.appendChild(out);
    function nm(u) { return c.lang === "ar" ? u[1] : u[0]; }
    function fill() {
      var us = UNITS[cat.value].u;
      from.innerHTML = to.innerHTML = "";
      us.forEach(function (u, i) { from.innerHTML += '<option value="' + i + '">' + nm(u) + "</option>"; to.innerHTML += '<option value="' + i + '">' + nm(u) + "</option>"; });
      from.value = "0"; to.value = String(Math.min(1, us.length - 1));
      upd();
    }
    function upd() {
      var us = UNITS[cat.value].u, f = us[+from.value], tt = us[+to.value], v = +val.value || 0;
      var r = v * f[2] / tt[2], big = f[2] >= tt[2], k = big ? f[2] / tt[2] : tt[2] / f[2];
      var rules = us.slice(0, -1).map(function (u, i) { return badge(ltr(c.num(1) + " " + nm(u) + " = " + c.num(fmt(u[2] / us[i + 1][2])) + " " + nm(us[i + 1])), ""); }).join(" ");
      out.innerHTML = '<div class="lab-big">' + ltr(c.num(fmt(v)) + " " + nm(f) + " = <b>" + c.num(fmt(+r.toFixed(3))) + "</b> " + nm(tt)) + "</div>" +
        "<p>" + (f === tt ? "" : (big ? c.T("Bigger unit → smaller unit: multiply by ", "من وحدة أكبر إلى أصغر: نضرب في ") : c.T("Smaller unit → bigger unit: divide by ", "من وحدة أصغر إلى أكبر: نقسم على ")) + badge(c.num(fmt(k)), "blue")) + "</p>" +
        "<p>" + rules + "</p>";
    }
    cat.onchange = fill; val.oninput = from.onchange = to.onchange = upd; fill();
  };

  // ---------- U4: Area and perimeter builder (free play) ----------
  LAB["area-lab"] = function (el, c) {
    window.EZWidgets["area-grid"](el, { target: { area: -1 }, w: 5, h: 3, maxW: 12, maxH: 8 }, { lang: c.lang, num: c.num, say: function () { return ""; }, done: function () {} });
    el.appendChild(h("p", "lab-note", c.T("Change the length and width. Area counts the squares inside; perimeter is the path around the outside.",
      "غيّر الطول والعرض. المساحة تعدّ المربعات بالداخل، والمحيط هو المسافة حول الحدود.")));
  };

  // ---------- U5: Array builder + "times as many" ----------
  LAB["array-lab"] = function (el, c) {
    window.EZWidgets["array"](el, { target: -1, rows: 3, cols: 4, max: 12 }, { lang: c.lang, num: c.num, say: function () { return ""; }, done: function () {} });
    var a = numInput(4, 1, 20), k = numInput(3, 1, 10), out = h("div", "lab-out");
    var form = h("div", "lab-row");
    form.appendChild(field(c.T("Ali has", "مع علي"), a));
    form.appendChild(field(c.T("Mona has … times as many", "مع منى … أمثال"), k));
    el.appendChild(h("h3", "lab-sub", c.T("Times as many", "المقارنة بالأمثال")));
    el.appendChild(form); el.appendChild(out);
    function upd() {
      var x = clamp(a.value, 1, 20), m = clamp(k.value, 1, 10), max = x * m;
      function bar(v, cls) { return '<div class="tm-bar ' + cls + '" style="width:' + (v / max * 100) + '%">' + c.num(v) + "</div>"; }
      out.innerHTML = '<div class="tm" dir="ltr">' + bar(x, "") + bar(max, "blue") + "</div><p>" +
        ltr(c.num(m) + " × " + c.num(x) + " = <b>" + c.num(max) + "</b>") + " &nbsp; " +
        c.T("(not ", "(وليس ") + ltr(c.num(x) + " + " + c.num(m) + " = " + c.num(x + m)) + ")</p>";
    }
    a.oninput = k.oninput = upd; upd();
  };

  // ---------- U6: Factor finder, multiples and GCF ----------
  function factors(n) { var f = []; for (var i = 1; i <= n; i++) if (n % i === 0) f.push(i); return f; }
  LAB["factor-finder"] = function (el, c) {
    var inp = numInput(24, 1, 500), out = h("div", "lab-out");
    var form = h("div", "lab-row"); form.appendChild(field(c.T("Choose a number", "اختر عددًا"), inp));
    el.appendChild(form); el.appendChild(out);
    var a = numInput(12, 1, 500), b = numInput(18, 1, 500), out2 = h("div", "lab-out");
    var form2 = h("div", "lab-row");
    form2.appendChild(field(c.T("First number", "العدد الأول"), a));
    form2.appendChild(field(c.T("Second number", "العدد الثاني"), b));
    el.appendChild(h("h3", "lab-sub", c.T("Greatest common factor", "العامل المشترك الأكبر")));
    el.appendChild(form2); el.appendChild(out2);
    function upd() {
      var n = clamp(inp.value, 1, 500), f = factors(n), pairs = [];
      f.forEach(function (x) { if (x <= n / x) pairs.push([x, n / x]); });
      var kind = n === 1 ? c.T("1 is neither prime nor composite", "العدد ١ ليس أوليًا ولا غير أولي") :
        f.length === 2 ? c.T("Prime number: exactly 2 factors", "عدد أولي: له عاملان فقط") :
        c.T("Composite number: ", "عدد غير أولي: له ") + c.num(f.length) + c.T(" factors", " عوامل");
      out.innerHTML = '<div class="lab-verdict ' + (f.length === 2 ? "prime" : "") + '">' + kind + "</div>" +
        "<p><b>" + c.T("Factor pairs", "أزواج العوامل") + ":</b> " + pairs.map(function (p) { return badge(ltr(c.num(p[0]) + " × " + c.num(p[1])), ""); }).join(" ") + "</p>" +
        "<p><b>" + c.T("Factors", "العوامل") + ":</b> " + ltr(f.map(c.num).join(", ")) + "</p>" +
        "<p><b>" + c.T("First multiples", "أول المضاعفات") + ":</b> " + ltr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (k) { return c.num(fmt(n * k)); }).join(", ")) + "</p>";
    }
    function upd2() {
      var x = clamp(a.value, 1, 500), y = clamp(b.value, 1, 500), fx = factors(x), fy = factors(y);
      var common = fx.filter(function (v) { return fy.indexOf(v) >= 0; }), g = common[common.length - 1];
      function list(fs) { return ltr(fs.map(function (v) { return common.indexOf(v) >= 0 ? "<b class=\"hl\">" + c.num(v) + "</b>" : c.num(v); }).join(", ")); }
      out2.innerHTML = "<p>" + c.num(x) + ": " + list(fx) + "</p><p>" + c.num(y) + ": " + list(fy) + "</p>" +
        '<div class="lab-big">' + c.T("GCF = ", "ع.م.أ = ") + "<b>" + c.num(g) + "</b></div>";
    }
    inp.oninput = upd; a.oninput = b.oninput = upd2; upd(); upd2();
  };

  // ---------- U7: Division with remainder ----------
  LAB["divide-lab"] = function (el, c) {
    var a = numInput(29, 1, 120), b = numInput(4, 1, 12), out = h("div", "lab-out");
    var form = h("div", "lab-row");
    form.appendChild(field(c.T("Things to share", "عدد الأشياء"), a));
    form.appendChild(field(c.T("Groups", "عدد المجموعات"), b));
    el.appendChild(form); el.appendChild(out);
    function upd() {
      var n = clamp(a.value, 1, 120), d = clamp(b.value, 1, 12), q = Math.floor(n / d), r = n % d, html = '<div class="dv">';
      for (var g = 0; g < d; g++) { html += '<div class="dv-g">'; for (var k = 0; k < q; k++) html += '<span class="dot-c"></span>'; html += "<small>" + c.num(q) + "</small></div>"; }
      html += "</div>";
      if (r) { html += '<div class="dv-r"><span>' + c.T("Left over", "الباقي") + ":</span>"; for (var j = 0; j < r; j++) html += '<span class="dot-c rem"></span>'; html += "</div>"; }
      out.innerHTML = html + '<div class="lab-big">' + ltr(c.num(n) + " ÷ " + c.num(d) + " = <b>" + c.num(q) + "</b>") +
        (r ? " " + c.T("remainder ", "والباقي ") + "<b>" + c.num(r) + "</b>" : "") + "</div>" +
        "<p><b>" + c.T("Check", "التحقق") + ":</b> " + ltr(c.num(d) + " × " + c.num(q) + (r ? " + " + c.num(r) : "") + " = " + c.num(n)) + " ✓</p>";
    }
    a.oninput = b.oninput = upd; upd();
  };

  // ---------- U8: Order of operations, step by step ----------
  function tokenize(s) {
    var t = s.replace(/x|\*/g, "×").replace(/\//g, "÷").replace(/-/g, "−").match(/\d+|[+−×÷()]/g);
    return t || [];
  }
  function steps(tok) {
    var out = [];
    function calc(a, o, b) { return o === "+" ? a + b : o === "−" ? a - b : o === "×" ? a * b : b ? a / b : NaN; }
    for (var guard = 0; guard < 50 && tok.length > 1; guard++) {
      var open = -1, close = -1;
      for (var i = 0; i < tok.length; i++) { if (tok[i] === "(") open = i; if (tok[i] === ")" && open >= 0) { close = i; break; } }
      var lo = 0, hi = tok.length;
      if (open >= 0 && close > open) {
        if (close - open === 2) { tok.splice(close, 1); tok.splice(open, 1); out.push({ tok: tok.slice(), why: "()" }); continue; }
        lo = open + 1; hi = close;
      }
      var at = -1;
      for (var j = lo; j < hi; j++) if (tok[j] === "×" || tok[j] === "÷") { at = j; break; }
      if (at < 0) for (j = lo; j < hi; j++) if (tok[j] === "+" || tok[j] === "−") { at = j; break; }
      if (at < 0) return null;
      var v = calc(+tok[at - 1], tok[at], +tok[at + 1]);
      if (!isFinite(v)) return null;
      out.push({ before: tok.slice(), at: at, why: lo > 0 ? "in()" : tok[at] });
      tok.splice(at - 1, 3, String(+v.toFixed(4)));
      out[out.length - 1].tok = tok.slice();
    }
    return out;
  }
  LAB["order-ops"] = function (el, c) {
    var inp = h("input", "lab-in wide"); inp.value = "3 + 4 × (6 − 2) ÷ 2"; inp.dir = "ltr";
    var form = h("div", "lab-row"); form.appendChild(field(c.T("Type an expression (use + − × ÷ and brackets)", "اكتب تعبيرًا عدديًا (استخدم + − × ÷ والأقواس)"), inp));
    var out = h("div", "lab-out");
    el.appendChild(form); el.appendChild(out);
    var WHY = { "()": c.T("remove the brackets", "نحذف الأقواس"), "in()": c.T("brackets first", "داخل الأقواس أولًا"), "×": c.T("multiply first", "الضرب أولًا"), "÷": c.T("divide first", "القسمة أولًا"), "+": c.T("then add", "ثم الجمع"), "−": c.T("then subtract", "ثم الطرح") };
    function show(tk, at) { return tk.map(function (x, i) { var s = /\d/.test(x) ? c.num(fmt(+x)) : x; return at != null && i >= at - 1 && i <= at + 1 ? '<b class="hl">' + s + "</b>" : s; }).join(" "); }
    function upd() {
      var tok = tokenize(inp.value), st = tok.length ? steps(tok.slice()) : null;
      if (!st) { out.innerHTML = '<p class="lab-note">' + c.T("Check the expression.", "راجع التعبير العددي.") + "</p>"; return; }
      var html = '<ol class="lab-steps">';
      st.forEach(function (s) { // Arabic-Indic digits read right to left (Egyptian textbook style), so the arrow follows the language
        var rtl = c.lang === "ar";
        html += '<li><div class="ops-line" dir="' + (rtl ? "rtl" : "ltr") + '">' + (s.before ? show(s.before, s.at) + (rtl ? " &nbsp;←&nbsp; " : " &nbsp;→&nbsp; ") : "") + show(s.tok) + '</div><span class="lab-why">' + WHY[s.why] + "</span></li>"; });
      var ans = st.length ? st[st.length - 1].tok[0] : tok[0];
      out.innerHTML = html + '</ol><div class="lab-big">= <b>' + c.num(fmt(+ans)) + "</b></div>" +
        '<p class="lab-note">' + c.T("Order: brackets → × and ÷ (left to right) → + and − (left to right)", "الترتيب: الأقواس ← الضرب والقسمة (من اليسار) ← الجمع والطرح (من اليسار)") + "</p>";
    }
    inp.oninput = upd; upd();
  };

  // ---------- U9: Fraction explorer ----------
  LAB["fraction-lab"] = function (el, c) {
    var n = numInput(3, 0, 24), d = numInput(4, 1, 12), out = h("div", "lab-out");
    var form = h("div", "lab-row");
    form.appendChild(field(c.T("Numerator", "البسط"), n));
    form.appendChild(field(c.T("Denominator", "المقام"), d));
    el.appendChild(form); el.appendChild(out);
    function upd() {
      var a = clamp(n.value, 0, 24), b = clamp(d.value, 1, 12);
      out.innerHTML = "";
      var vis = h("div");
      window.EZWidgets.visual(vis, { kind: "pies", items: [{ f: [a, b] }] }, { lang: c.lang, num: c.num, frac: c.frac, inline: function (x) { return x; }, L: function (x) { return x; } });
      out.appendChild(vis);
      var eq = [2, 3, 4].map(function (k) { return c.frac(a * k, b * k); }).join(" = ");
      var half = a * 2 === b ? c.T("equal to", "يساوي") : a * 2 > b ? c.T("more than", "أكبر من") : c.T("less than", "أصغر من");
      var info = h("div");
      info.innerHTML = "<p><b>" + c.T("Equivalent", "كسور متكافئة") + ":</b> " + ltr(c.frac(a, b) + " = " + eq) + "</p>" +
        "<p><b>" + c.T("Compared with one half", "مقارنة بالنصف") + ":</b> " + half + " " + ltr(c.frac(1, 2)) + "</p>" +
        (a > b ? "<p><b>" + c.T("Mixed number", "عدد كسري") + ":</b> " + ltr(c.num(Math.floor(a / b)) + (a % b ? " " + c.frac(a % b, b) : "")) + "</p>" : "");
      out.appendChild(info);
    }
    n.oninput = d.oninput = upd; upd();
  };

  window.EZLab = LAB;
})();
