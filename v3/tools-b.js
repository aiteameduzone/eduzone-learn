/* EduZone Learn v3 - hands-on tools, set B (shape, position & direction).
   polygon (polygons) | tessellate (tessellate) | shapes3d (solids) | angle (angles) |
   compass (compass) | coordgrid (plot, reflect).
   Contract: EZ3.tools[name] = function (host, cfg, api) - see EZ3.makeToolApi in core.js. */
(function () {
  "use strict";
  var TAU = Math.PI * 2, DEG = Math.PI / 180;

  /* ---------- private helpers ---------- */
  function r1(v) { return Math.round(v * 10) / 10; }
  function mod(a, n) { return ((a % n) + n) % n; }
  function P(list) { return list.map(function (q) { return r1(q[0]) + "," + r1(q[1]); }).join(" "); }
  // responsive inline svg: fills the stage width up to maxW px
  function svgOpen(w, h, maxW, style) {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + w + " " + h +
      '" style="width:100%;max-width:' + maxW + "px;" + (style || "") + '">';
  }
  function ln(a, b, attrs) {
    return '<line x1="' + r1(a[0]) + '" y1="' + r1(a[1]) + '" x2="' + r1(b[0]) + '" y2="' + r1(b[1]) + '" ' + attrs + "/>";
  }
  function txt(x, y, s, size, style) {
    return '<text x="' + r1(x) + '" y="' + r1(y) + '" font-size="' + size + '" text-anchor="middle" class="svg-label"' +
      (style ? ' style="' + style + '"' : "") + ">" + s + "</text>";
  }
  function dotAt(p, r, fill) {
    return '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="' + r + '" fill="' + fill + '" stroke="var(--card)" stroke-width="2"/>';
  }
  function button(html) { var b = EZ3.el("button", "btn sm", html); b.type = "button"; return b; }
  function setOn(list, idx) { list.forEach(function (b, i) { b.classList.toggle("on", i === idx); }); }
  // pointer event -> svg user coordinates
  function toSvg(svg, e) {
    if (!svg || !svg.getScreenCTM || !svg.createSVGPoint) return null;
    var m = svg.getScreenCTM(); if (!m) return null;
    var p = svg.createSVGPoint(); p.x = e.clientX; p.y = e.clientY;
    return p.matrixTransform(m.inverse());
  }
  // regular polygon: centre, circumradius, n, angle of first vertex (radians, svg y-down)
  function regPoly(cx, cy, r, n, rot) {
    var out = [];
    for (var i = 0; i < n; i++) { var a = rot + i * TAU / n; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    return out;
  }
  function an(w) { return (/^[aeiou]/i.test(w) ? "an " : "a ") + w; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  // random goal that is NOT already met by the current state (so a new goal never wins instantly)
  function pickGoal(make) { var g, i = 0; do { g = make(); } while (g.test() && ++i < 60); return g; }

  /* =====================================================================
     1. polygon - sides 3-12, regular / irregular
     ===================================================================== */
  var PN = {
    3: ["triangle", "مثلث", "مثلثًا"],
    4: ["quadrilateral", "رباعي الأضلاع", "شكلًا رباعي الأضلاع"],
    5: ["pentagon", "خماسي", "شكلًا خماسيًا"],
    6: ["hexagon", "سداسي", "شكلًا سداسيًا"],
    7: ["heptagon", "سباعي", "شكلًا سباعيًا"],
    8: ["octagon", "ثماني", "شكلًا ثمانيًا"],
    9: ["nonagon", "تساعي", "شكلًا تساعيًا"],
    10: ["decagon", "عشاري", "شكلًا عشاريًا"]
  };

  EZ3.tools.polygon = function (host, cfg, api) {
    var f = api.frame(), C = 160, sides = api.rand(3, 8), regular = true, shape = [], goal = null;

    // irregular = vertices at uneven angles on a tilted ellipse: always simple and convex
    function makeShape() {
      var n = sides, out = [], i;
      if (regular) return regPoly(C, C, 120, n, -Math.PI / 2 + (n % 2 ? 0 : Math.PI / n));
      var step = TAU / n, amp = n <= 4 ? 0.22 : 0.33, base = Math.random() * TAU,
        sy = 0.66 + Math.random() * 0.22, tilt = Math.random() * Math.PI, ct = Math.cos(tilt), st = Math.sin(tilt);
      for (i = 0; i < n; i++) {
        var a = base + (i + (Math.random() * 2 - 1) * amp) * step, x = 128 * Math.cos(a), y = 128 * sy * Math.sin(a);
        out.push([C + x * ct - y * st, C + x * st + y * ct]);
      }
      return out;
    }
    function shapeName() {
      if (sides === 4 && regular) return api.t("Square (a regular quadrilateral)", "مربع (رباعي أضلاع منتظم)");
      var en = regular ? "regular " : "irregular ", ar = regular ? "منتظم" : "غير منتظم";
      if (sides <= 10) return api.t(cap(en + PN[sides][0]), PN[sides][1] + " " + ar);
      return api.t(cap(en + "polygon with " + api.n(sides) + " sides"), "مضلع " + ar + " له " + api.n(sides) + " ضلعًا");
    }
    function draw() {
      var n = sides, h = svgOpen(320, 320, 340), gx = 0, gy = 0, i;
      shape.forEach(function (p) { gx += p[0] / n; gy += p[1] / n; });
      h += '<polygon points="' + P(shape) + '" fill="var(--blue-soft)" stroke="var(--blue-2)" stroke-width="4" stroke-linejoin="round"/>';
      for (i = 0; i < n; i++) { // side numbers, pushed outwards from the centre
        var a = shape[i], b = shape[(i + 1) % n], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2,
          dx = mx - gx, dy = my - gy, L = Math.sqrt(dx * dx + dy * dy) || 1;
        h += txt(mx + dx / L * 15, my + dy / L * 15 + 5, api.n(i + 1), 13, "fill:var(--muted)");
      }
      shape.forEach(function (p) { h += dotAt(p, 7, "var(--orange)"); });
      f.stage.innerHTML = h + "</svg>";
      f.readout("<b>" + shapeName() + "</b><br>" + api.t("sides", "الأضلاع") + ": <b>" + api.n(n) + "</b> · " +
        api.t("vertices", "الرؤوس") + ": <b>" + api.n(n) + "</b>");
      api.check(!!goal && goal.test());
    }
    function makeGoal() {
      var k = api.pick(["name", "name", "vertices", "sides", "irregular", "regular"]), s;
      if (k === "name") {
        s = api.rand(3, 10);
        return { test: function () { return sides === s; }, text: api.t("Make " + an(PN[s][0]), "كوّن " + PN[s][2]) };
      }
      if (k === "vertices" || k === "sides") {
        s = api.rand(3, 12);
        var ar = k === "vertices" ? (s <= 10 ? "رؤوس" : "رأسًا") : (s <= 10 ? "أضلاع" : "ضلعًا");
        return { test: function () { return sides === s; },
          text: api.t("Make a polygon with " + api.n(s) + " " + k, "كوّن مضلعًا له " + api.n(s) + " " + ar) };
      }
      s = api.rand(3, 8);
      if (k === "irregular") {
        return { test: function () { return sides === s && !regular; },
          text: api.t("Make an irregular " + PN[s][0], "كوّن " + PN[s][2] + " غير منتظم") };
      }
      return { test: function () { return sides === s && regular; },
        text: s === 4 ? api.t("Make a square", "كوّن مربعًا") : api.t("Make a regular " + PN[s][0], "كوّن " + PN[s][2] + " منتظمًا") };
    }
    function newGoal() { goal = pickGoal(makeGoal); f.goal(goal.text); draw(); }

    var stepper = api.stepper(api.t("Sides", "الأضلاع"), 3, 12, sides, function (v) { sides = v; shape = makeShape(); draw(); });
    var seg = api.seg([["r", api.t("Regular", "منتظم")], ["i", api.t("Irregular", "غير منتظم")]], "r",
      function (v) { regular = v === "r"; shape = makeShape(); draw(); });
    f.controls.appendChild(stepper); f.controls.appendChild(seg);
    f.hint(api.t("Use − and + to change the number of sides. Regular = all sides and all angles equal. Tap Irregular again for a new shape.",
      "استخدم − و + لتغيير عدد الأضلاع. المضلع المنتظم: كل أضلاعه متساوية وكل زواياه متساوية. اضغط «غير منتظم» مرة أخرى لشكل جديد."));
    f.onNew(newGoal);
    shape = makeShape();
    newGoal();
  };

  /* =====================================================================
     2. tessellate - tile a patch with one regular shape; gaps shown in red
     ===================================================================== */
  var TS = [
    { k: "tri", n: 3, ok: true, en: "Triangle", ar: "مثلث" },
    { k: "sq", n: 4, ok: true, en: "Square", ar: "مربع" },
    { k: "pent", n: 5, ok: false, en: "Pentagon", ar: "خماسي" },
    { k: "hex", n: 6, ok: true, en: "Hexagon", ar: "سداسي" },
    { k: "oct", n: 8, ok: false, en: "Octagon", ar: "ثماني" },
    { k: "circ", n: 0, ok: false, en: "Circle", ar: "دائرة" }
  ];
  var TILE_COL = ["var(--blue-2)", "var(--teal)", "var(--purple)"], TX = 10, TY = 10, TW = 300, TH = 280;

  function tilesFor(k) {
    var out = [], i, j, x, y, s3 = Math.sqrt(3), X1 = TX + TW, Y1 = TY + TH;
    if (k === "tri") {
      var a = 76, h = a * s3 / 2;
      for (j = -1; TY + j * h < Y1; j++) {
        y = TY + j * h;
        for (i = -2; TX + i * a < X1 + a; i++) {
          x = TX + i * a + mod(j, 2) * a / 2;
          out.push({ p: [[x, y + h], [x + a, y + h], [x + a / 2, y]], c: 0 });
          out.push({ p: [[x + a / 2, y], [x + 1.5 * a, y], [x + a, y + h]], c: 1 });
        }
      }
    } else if (k === "sq") {
      var q = 76;
      for (j = -1; TY - 12 + j * q < Y1; j++) for (i = -1; TX - 2 + i * q < X1; i++) {
        x = TX - 2 + i * q; y = TY - 12 + j * q;
        out.push({ p: [[x, y], [x + q, y], [x + q, y + q], [x, y + q]], c: mod(i + j, 2) });
      }
    } else if (k === "hex") { // flat-top, odd columns shifted down; 3-colouring via axial coords
      var R = 44, hh = s3 * R;
      for (i = -1; TX + 20 + i * 1.5 * R < X1 + R; i++) for (j = -1; TY + j * hh < Y1 + hh; j++) {
        var ar = j - (i - (i & 1)) / 2;
        out.push({ p: regPoly(TX + 20 + i * 1.5 * R, TY + j * hh + (i & 1 ? hh / 2 : 0), R, 6, 0), c: mod(i - ar, 3) });
      }
    } else if (k === "pent") { // strips of up/down pentagons sharing edges; diamond gaps between strips
      var pr = 38, w = 2 * pr * Math.sin(2 * Math.PI / 5), dd = pr * (1 + Math.cos(2 * Math.PI / 5)),
        per = dd + 2 * pr * Math.cos(Math.PI / 5);
      for (j = -1; TY + j * per < Y1 + per; j++) {
        y = TY + 2.3 * pr + j * per;
        for (i = -2; TX + i * w < X1 + w; i++) {
          x = TX + i * w + mod(j, 2) * w / 2;
          out.push({ p: regPoly(x, y, pr, 5, -Math.PI / 2), c: 0 });
          out.push({ p: regPoly(x + w / 2, y - dd, pr, 5, Math.PI / 2), c: 1 });
        }
      }
    } else if (k === "oct") { // octagons edge to edge leave square gaps
      var d = 86, rc = d / 2 / Math.cos(Math.PI / 8);
      for (j = -1; TY + 26 + j * d < Y1 + d; j++) for (i = -1; TX + 22 + i * d < X1 + d; i++)
        out.push({ p: regPoly(TX + 22 + i * d, TY + 26 + j * d, rc, 8, Math.PI / 8), c: mod(i + j, 2) });
    } else {
      var cr = 42;
      for (j = -1; TY + 30 + j * 2 * cr < Y1 + cr; j++) for (i = -1; TX + 20 + i * 2 * cr < X1 + cr; i++)
        out.push({ circ: [TX + 20 + i * 2 * cr, TY + 30 + j * 2 * cr, cr], c: mod(i + j, 2) });
    }
    return out;
  }
  function tileEl(t, fill, stroke, sw) {
    var a = ' fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '" stroke-linejoin="round"/>';
    return t.circ ? '<circle cx="' + r1(t.circ[0]) + '" cy="' + r1(t.circ[1]) + '" r="' + t.circ[2] + '"' + a
      : '<polygon points="' + P(t.p) + '"' + a;
  }
  function tsIcon(s) {
    var inner = s.n ? '<polygon points="' + P(regPoly(10, s.n === 3 ? 11.5 : 10, 9, s.n,
      s.n === 4 ? -Math.PI / 4 : s.n === 8 ? Math.PI / 8 : s.n === 6 ? 0 : -Math.PI / 2)) + '" fill="currentColor"/>'
      : '<circle cx="10" cy="10" r="8.5" fill="currentColor"/>';
    return '<svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  EZ3.tools.tessellate = function (host, cfg, api) {
    var f = api.frame(), cur = 1, found = {}, goal = null;
    var cid = "ezb-tclip-" + Math.random().toString(36).slice(2, 9);
    var btns = TS.map(function (s, i) {
      var b = button(tsIcon(s) + "<span>" + api.t(s.en, s.ar) + "</span>");
      b.onclick = function () { cur = i; if (s.ok) found[s.k] = true; draw(); };
      f.controls.appendChild(b);
      return b;
    });
    function draw() {
      var s = TS[cur], gaps = !s.ok, tiles = tilesFor(s.k), h = svgOpen(320, 300, 380);
      h += '<defs><clipPath id="' + cid + '"><rect x="' + TX + '" y="' + TY + '" width="' + TW + '" height="' + TH + '" rx="16"/></clipPath></defs>';
      h += '<g clip-path="url(#' + cid + ')"><rect x="' + TX + '" y="' + TY + '" width="' + TW + '" height="' + TH + '" fill="' + (gaps ? "var(--red-soft)" : "var(--card)") + '"/>';
      // gaps: a thick red outline under every tile shows only where no neighbouring tile covers it
      if (gaps) tiles.forEach(function (t) { h += tileEl(t, "none", "var(--red)", 7); });
      tiles.forEach(function (t) { h += tileEl(t, TILE_COL[t.c], "var(--card)", 2); });
      h += '</g><rect x="' + TX + '" y="' + TY + '" width="' + TW + '" height="' + TH + '" rx="16" fill="none" stroke="var(--line)" stroke-width="2"/>';
      f.stage.innerHTML = h + "</svg>";
      setOn(btns, cur);
      var r = gaps
        ? '<b style="color:var(--red)">' + api.t("Gaps! ✗", "توجد فراغات! ✗") + "</b> " + api.t("This shape can't tessellate on its own.", "هذا الشكل لا يكوّن تبليطًا وحده.")
        : '<b style="color:var(--green)">' + api.t("No gaps ✓", "لا توجد فراغات ✓") + "</b> " + api.t("This shape tessellates on its own.", "هذا الشكل يكوّن تبليطًا وحده.");
      if (goal && goal.type === "all3") {
        r += '<div class="btn-row" style="justify-content:center;margin-top:8px">' +
          [0, 1, 3].map(function (i) {
            return found[TS[i].k] ? '<span class="chip green">✓ ' + api.t(TS[i].en, TS[i].ar) + "</span>" : '<span class="chip">?</span>';
          }).join("") + "</div>";
      }
      f.readout(r);
      api.check(!!goal && goal.test());
    }
    function newGoal() {
      var type = api.pick(["all3", "all3", "gap", "hex"]);
      found = {};
      if (type === "all3") {
        cur = api.pick([2, 4, 5]);
        goal = { type: type, text: api.t("Find all 3 regular shapes that tessellate on their own", "ابحث عن الأشكال المنتظمة الثلاثة التي تكوّن تبليطًا وحدها"),
          test: function () { return !!(found.tri && found.sq && found.hex); } };
      } else if (type === "gap") {
        cur = api.pick([0, 1, 3]);
        goal = { type: type, text: api.t("Find a shape that leaves gaps", "ابحث عن شكل يترك فراغات"),
          test: function () { return !TS[cur].ok; } };
      } else {
        cur = api.pick([0, 1, 2, 4, 5]);
        goal = { type: type, text: api.t("Find a regular shape with more than " + api.n(4) + " sides that tessellates on its own",
          "ابحث عن شكل منتظم له أكثر من " + api.n(4) + " أضلاع ويكوّن تبليطًا وحده"),
          test: function () { return TS[cur].k === "hex"; } };
      }
      f.goal(goal.text);
      draw();
    }
    f.hint(api.t("Tap a shape to tile the floor with it. To tessellate means to cover a surface with no gaps and no overlaps.",
      "اضغط على شكل لتغطية الأرضية به. التبليط (الفسيفساء) يعني تغطية السطح دون فراغات ودون تداخل."));
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     3. shapes3d - solid (oblique view, hidden edges dashed) + its net
     ===================================================================== */
  function v3sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function v3cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function v3dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function v3unit(a) { var l = Math.sqrt(v3dot(a, a)) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  // oblique projection: screen x = x + 0.5z, screen up = y + 0.35z  ->  viewer sits at (+0.5, +0.35, -1)
  var CAM = [0.5, 0.35, -1], LIGHT = v3unit([-0.4, 0.85, -0.35]);

  function box(w, h, d) {
    return { v: [[0, 0, 0], [w, 0, 0], [w, h, 0], [0, h, 0], [0, 0, d], [w, 0, d], [w, h, d], [0, h, d]],
      f: [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [3, 2, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5]] };
  }
  var SOLIDS = [
    { k: "cube", en: "Cube", ar: "مكعب", F: 6, E: 12, V: 8, m: function () { return box(100, 100, 100); } },
    { k: "cuboid", en: "Cuboid", ar: "متوازي مستطيلات", F: 6, E: 12, V: 8, m: function () { return box(130, 75, 65); } },
    { k: "tprism", en: "Triangular prism", ar: "منشور ثلاثي", F: 5, E: 9, V: 6, m: function () {
      var w = 90, h = 78, d = 110;
      return { v: [[0, 0, 0], [w, 0, 0], [w / 2, h, 0], [0, 0, d], [w, 0, d], [w / 2, h, d]],
        f: [[0, 1, 2], [3, 4, 5], [0, 1, 4, 3], [1, 2, 5, 4], [2, 0, 3, 5]] };
    } },
    { k: "sqpyr", en: "Square-based pyramid", ar: "هرم رباعي القاعدة", F: 5, E: 8, V: 5, m: function () {
      var s = 110, h = 105;
      return { v: [[0, 0, 0], [s, 0, 0], [s, 0, s], [0, 0, s], [s / 2, h, s / 2]],
        f: [[0, 1, 2, 3], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]] };
    } },
    { k: "tpyr", en: "Triangular pyramid", ar: "هرم ثلاثي", F: 4, E: 6, V: 4, m: function () {
      var v = [], a0 = Math.atan2(-2, 1), i; // one base corner points at the viewer
      for (i = 0; i < 3; i++) { var a = a0 + i * TAU / 3; v.push([70 * Math.cos(a), 0, 70 * Math.sin(a)]); }
      v.push([0, 105, 0]);
      return { v: v, f: [[0, 1, 2], [0, 1, 3], [1, 2, 3], [2, 0, 3]] };
    } },
    { k: "cyl", en: "Cylinder", ar: "أسطوانة", F: 3, E: 2, V: 0, curved: true },
    { k: "cone", en: "Cone", ar: "مخروط", F: 2, E: 1, V: 1, curved: true },
    { k: "sph", en: "Sphere", ar: "كرة", F: 1, E: 0, V: 0, curved: true }
  ];

  // polyhedron fitted into box (bx, by, bw, bh); face visibility from outward normals
  function polySvg(m, bx, by, bw, bh) {
    var V = m.v, cen = [0, 0, 0], minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9, h = "";
    V.forEach(function (p) { for (var i = 0; i < 3; i++) cen[i] += p[i] / V.length; });
    var pr = V.map(function (p) {
      var q = [p[0] + 0.5 * p[2], -(p[1] + 0.35 * p[2])];
      minx = Math.min(minx, q[0]); maxx = Math.max(maxx, q[0]); miny = Math.min(miny, q[1]); maxy = Math.max(maxy, q[1]);
      return q;
    });
    var s = Math.min(bw / (maxx - minx), bh / (maxy - miny), 1.4),
      ox = bx + (bw - (maxx - minx) * s) / 2, oy = by + (bh - (maxy - miny) * s) / 2;
    var pts = pr.map(function (q) { return [ox + (q[0] - minx) * s, oy + (q[1] - miny) * s]; });
    var faces = m.f.map(function (fc) {
      var n = v3cross(v3sub(V[fc[1]], V[fc[0]]), v3sub(V[fc[2]], V[fc[0]])), mid = [0, 0, 0];
      fc.forEach(function (i) { for (var k = 0; k < 3; k++) mid[k] += V[i][k] / fc.length; });
      if (v3dot(n, v3sub(mid, cen)) < 0) n = [-n[0], -n[1], -n[2]];
      return { idx: fc, n: v3unit(n), vis: v3dot(n, CAM) > 0 };
    });
    var edges = {}, vVis = V.map(function () { return false; });
    faces.forEach(function (fc) {
      fc.idx.forEach(function (a, i) {
        var b = fc.idx[(i + 1) % fc.idx.length], key = Math.min(a, b) + "_" + Math.max(a, b);
        if (!edges[key]) edges[key] = { a: a, b: b, vis: false };
        if (fc.vis) { edges[key].vis = true; vVis[a] = true; }
      });
    });
    faces.forEach(function (fc) {
      if (!fc.vis) return;
      var lit = Math.max(0, v3dot(fc.n, LIGHT));
      h += '<polygon points="' + P(fc.idx.map(function (i) { return pts[i]; })) + '" fill="var(--blue-2)" fill-opacity="' + (0.4 - 0.26 * lit).toFixed(2) + '"/>';
    });
    var keys = Object.keys(edges);
    keys.forEach(function (k) { var e = edges[k]; if (!e.vis) h += ln(pts[e.a], pts[e.b], 'stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"'); });
    keys.forEach(function (k) { var e = edges[k]; if (e.vis) h += ln(pts[e.a], pts[e.b], 'stroke="var(--blue-2)" stroke-width="3" stroke-linecap="round"'); });
    pts.forEach(function (p, i) { h += dotAt(p, 4.5, vVis[i] ? "var(--orange)" : "var(--muted)"); });
    return h;
  }
  function curvedSvg(k) {
    var cx = 110, h = "", FILL = 'fill="var(--blue-2)"', SOLID = 'fill="none" stroke="var(--blue-2)" stroke-width="3"',
      DASH = 'fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="6 5"', EDGE = 'stroke="var(--blue-2)" stroke-width="3"';
    // half ellipse from left to right point: sweep 1 = back half (over the top), 0 = front half
    function half(y, rx, ry, sweep) { return "M" + (cx - rx) + " " + y + " A" + rx + " " + ry + " 0 0 " + sweep + " " + (cx + rx) + " " + y; }
    if (k === "cyl") {
      var rx = 58, ry = 17, t = 72, b = 202;
      h += '<path d="M' + (cx - rx) + " " + t + " L" + (cx - rx) + " " + b + " A" + rx + " " + ry + " 0 0 0 " + (cx + rx) + " " + b +
        " L" + (cx + rx) + " " + t + " A" + rx + " " + ry + " 0 0 1 " + (cx - rx) + " " + t + 'Z" ' + FILL + ' fill-opacity="0.3"/>';
      h += '<ellipse cx="' + cx + '" cy="' + t + '" rx="' + rx + '" ry="' + ry + '" ' + FILL + ' fill-opacity="0.15" stroke="var(--blue-2)" stroke-width="3"/>';
      h += '<path d="' + half(b, rx, ry, 1) + '" ' + DASH + "/>" + '<path d="' + half(b, rx, ry, 0) + '" ' + SOLID + "/>";
      h += ln([cx - rx, t], [cx - rx, b], EDGE) + ln([cx + rx, t], [cx + rx, b], EDGE);
    } else if (k === "cone") {
      var ay = 50, by = 200, crx = 64, cry = 18;
      h += '<path d="M' + cx + " " + ay + " L" + (cx - crx) + " " + by + " A" + crx + " " + cry + " 0 0 0 " + (cx + crx) + " " + by + 'Z" ' + FILL + ' fill-opacity="0.3"/>';
      h += '<path d="' + half(by, crx, cry, 1) + '" ' + DASH + "/>" + '<path d="' + half(by, crx, cry, 0) + '" ' + SOLID + "/>";
      h += ln([cx, ay], [cx - crx, by], EDGE) + ln([cx, ay], [cx + crx, by], EDGE) + dotAt([cx, ay], 5, "var(--orange)");
    } else {
      var sr = 80, cy = 137;
      h += '<circle cx="' + cx + '" cy="' + cy + '" r="' + sr + '" ' + FILL + ' fill-opacity="0.22" stroke="var(--blue-2)" stroke-width="3"/>';
      h += '<path d="' + half(cy, sr, 22, 1) + '" ' + DASH + "/>" +
        '<path d="' + half(cy, sr, 22, 0) + '" fill="none" stroke="var(--blue-2)" stroke-width="1.5" stroke-opacity="0.45"/>';
      h += '<ellipse cx="' + (cx - 30) + '" cy="' + (cy - 34) + '" rx="16" ry="9" fill="var(--card)" fill-opacity="0.55" transform="rotate(-35 ' + (cx - 30) + " " + (cy - 34) + ')"/>';
    }
    return h;
  }
  // nets in local coordinates (top-left 0,0); returns {w, h, s} or null (sphere)
  function netOf(k) {
    var sh = [], w, h, i;
    function poly(p) { sh.push('<polygon points="' + P(p) + '"/>'); }
    function rect(x, y, a, b) { poly([[x, y], [x + a, y], [x + a, y + b], [x, y + b]]); }
    function circ(x, y, r) { sh.push('<circle cx="' + r1(x) + '" cy="' + r1(y) + '" r="' + r1(r) + '"/>'); }
    if (k === "cube") {
      var a = 40;
      [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [1, 2]].forEach(function (c) { rect(c[0] * a, c[1] * a, a, a); });
      w = 4 * a; h = 3 * a;
    } else if (k === "cuboid") {
      var A = 52, B = 30, Cd = 26;
      rect(Cd, 0, A, Cd); rect(Cd, Cd, A, B); rect(Cd, Cd + B, A, Cd); rect(Cd, 2 * Cd + B, A, B);
      rect(0, Cd, Cd, B); rect(Cd + A, Cd, Cd, B);
      w = 2 * Cd + A; h = 2 * Cd + 2 * B;
    } else if (k === "tprism") {
      var t = 42, L = 72, th = t * Math.sqrt(3) / 2;
      for (i = 0; i < 3; i++) rect(i * t, th, t, L);
      poly([[t, th], [2 * t, th], [1.5 * t, 0]]); poly([[t, th + L], [2 * t, th + L], [1.5 * t, 2 * th + L]]);
      w = 3 * t; h = L + 2 * th;
    } else if (k === "sqpyr") {
      var q = 50, sl = 52;
      rect(sl, sl, q, q);
      poly([[sl, sl], [sl + q, sl], [sl + q / 2, 0]]); poly([[sl, sl + q], [sl + q, sl + q], [sl + q / 2, 2 * sl + q]]);
      poly([[sl, sl], [sl, sl + q], [0, sl + q / 2]]); poly([[sl + q, sl], [sl + q, sl + q], [2 * sl + q, sl + q / 2]]);
      w = h = 2 * sl + q;
    } else if (k === "tpyr") {
      var u = 66, H = u * Math.sqrt(3), m01 = [u, H], m12 = [1.5 * u, H / 2], m20 = [0.5 * u, H / 2];
      poly([[0, H], m01, m20]); poly([m01, [2 * u, H], m12]); poly([m20, m12, [u, 0]]); poly([m20, m01, m12]);
      w = 2 * u; h = H;
    } else if (k === "cyl") {
      var r = 19, cw = TAU * r, len = 62;
      circ(cw / 2, r, r); rect(0, 2 * r, cw, len); circ(cw / 2, 3 * r + len, r);
      w = cw; h = 4 * r + len;
    } else if (k === "cone") {
      var sl2 = 78, br = 24, ang = TAU * br / sl2, a1 = Math.PI / 2 - ang / 2, a2 = Math.PI / 2 + ang / 2;
      w = 2 * sl2 * Math.sin(ang / 2); h = sl2 + 2 * br;
      var cx = w / 2;
      sh.push('<path d="M' + r1(cx) + " 0 L" + r1(cx + sl2 * Math.cos(a1)) + " " + r1(sl2 * Math.sin(a1)) +
        " A" + sl2 + " " + sl2 + " 0 0 1 " + r1(cx + sl2 * Math.cos(a2)) + " " + r1(sl2 * Math.sin(a2)) + 'Z"/>');
      circ(cx, sl2 + br, br);
    } else return null;
    return { w: w, h: h, s: sh.join("") };
  }

  EZ3.tools.shapes3d = function (host, cfg, api) {
    var f = api.frame(), cur = api.rand(0, SOLIDS.length - 1), goal = null;
    var btns = SOLIDS.map(function (s, i) {
      var b = button(api.t(s.en, s.ar));
      b.onclick = function () { cur = i; draw(); };
      f.controls.appendChild(b);
      return b;
    });
    function draw() {
      var s = SOLIDS[cur], net = netOf(s.k), h = svgOpen(440, 250, 540);
      h += txt(110, 22, api.t("Solid", "المجسم"), 15, "fill:var(--muted)") + txt(331, 22, api.t("Net", "الشبكة"), 15, "fill:var(--muted)");
      h += ln([221, 10], [221, 240], 'stroke="var(--line)" stroke-width="2" stroke-dasharray="4 6"');
      h += s.m ? polySvg(s.m(), 18, 36, 184, 196) : curvedSvg(s.k);
      if (net) {
        var sc = Math.min(186 / net.w, 190 / net.h, 1.25);
        h += '<g transform="translate(' + r1(331 - net.w * sc / 2) + " " + r1(137 - net.h * sc / 2) + ") scale(" + sc.toFixed(3) +
          ')" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2" stroke-linejoin="round">' + net.s + "</g>";
      } else {
        h += txt(331, 126, api.t("No net", "لا توجد شبكة"), 20, "fill:var(--red)") +
          txt(331, 154, api.t("A sphere can't be", "لا يمكن فرد الكرة"), 13, "fill:var(--muted)") +
          txt(331, 172, api.t("unfolded flat.", "على سطح مستوٍ."), 13, "fill:var(--muted)");
      }
      f.stage.innerHTML = h + "</svg>";
      setOn(btns, cur);
      f.readout("<b>" + api.t(s.en, s.ar) + "</b><br>" +
        api.t("faces", "الأوجه") + ": <b>" + api.n(s.F) + "</b> · " +
        api.t("edges", "الأحرف") + ": <b>" + api.n(s.E) + "</b> · " +
        api.t("vertices", "الرؤوس") + ": <b>" + api.n(s.V) + "</b>" +
        (s.curved ? '<div style="font-size:14px;color:var(--muted)">' + api.t("A curved surface counts as a face.", "السطح المنحني يُعدّ وجهًا.") + "</div>" : ""));
      api.check(!!goal && goal.test());
    }
    var WORDS = {
      F: ["face", "faces", "وجه واحد", "وجهان", "أوجه", "وجهًا"],
      E: ["edge", "edges", "حرف واحد", "حرفان", "أحرف", "حرفًا"],
      V: ["vertex", "vertices", "رأس واحد", "رأسان", "رؤوس", "رأسًا"]
    };
    function countText(pk, v) {
      var w = WORDS[pk], en = "Find a solid with ", ar = "ابحث عن مجسم ";
      if (v === 0) return api.t(en + "no " + w[1], ar + "ليس له " + w[4]);
      if (v === 1) return api.t(en + "exactly " + api.n(1) + " " + w[0], ar + "له " + w[2] + " فقط");
      if (v === 2) return api.t(en + api.n(2) + " " + w[1], ar + "له " + w[3]);
      return api.t(en + api.n(v) + " " + w[1], ar + "له " + api.n(v) + " " + (v <= 10 ? w[4] : w[5]));
    }
    function makeGoal() {
      if (Math.random() < 0.2) {
        return { test: function () { return SOLIDS[cur].k === "cube"; },
          text: api.t("Find the solid with " + api.n(8) + " vertices and " + api.n(6) + " faces that are all squares",
            "ابحث عن المجسم الذي له " + api.n(8) + " رؤوس و" + api.n(6) + " أوجه كلها مربعات") };
      }
      var pk = api.pick(["F", "E", "V"]), vals = [];
      SOLIDS.forEach(function (s) { if (vals.indexOf(s[pk]) < 0) vals.push(s[pk]); });
      var v = api.pick(vals);
      return { test: function () { return SOLIDS[cur][pk] === v; }, text: countText(pk, v) };
    }
    function newGoal() { goal = pickGoal(makeGoal); f.goal(goal.text); draw(); }
    f.hint(api.t("Tap a solid to see it and its net. Dashed lines are hidden edges at the back.",
      "اضغط على مجسم لترى شكله وشبكته (مفكوك المجسم). الخطوط المتقطعة أحرف مخفية في الخلف."));
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     4. angle - fixed horizontal arm, second arm turns (drag or buttons)
     ===================================================================== */
  EZ3.tools.angle = function (host, cfg, api) {
    var f = api.frame(), C = 160, ARM = 122, deg = api.pick([30, 45, 60, 120, 150]), goal = null, dragging = false;
    function pt(a, r) { return [C + r * Math.cos(a * DEG), C - r * Math.sin(a * DEG)]; }
    function kind(d) {
      if (d === 0) return api.t("No turn", "لا يوجد دوران");
      if (d < 90) return api.t("Acute angle", "زاوية حادة");
      if (d === 90) return api.t("Right angle", "زاوية قائمة");
      if (d < 180) return api.t("Obtuse angle", "زاوية منفرجة");
      if (d === 180) return api.t("Straight angle", "زاوية مستقيمة");
      if (d < 360) return api.t("Reflex angle", "زاوية منعكسة");
      return api.t("Full turn", "دورة كاملة");
    }
    function turnName(d) {
      return d === 90 ? api.t("quarter turn", "ربع دورة") : d === 180 ? api.t("half turn", "نصف دورة") :
        d === 270 ? api.t("three-quarter turn", "ثلاثة أرباع دورة") : d === 360 ? api.t("full turn", "دورة كاملة") : "";
    }
    function draw() {
      var h = svgOpen(320, 320, 360, "touch-action:none"), end = pt(deg, ARM), a, AR = 'fill="var(--purple)" fill-opacity="0.15" stroke="var(--purple)" stroke-width="2.5"';
      h += '<circle cx="' + C + '" cy="' + C + '" r="' + ARM + '" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>';
      for (a = 0; a < 360; a += 15) h += ln(pt(a, ARM - (a % 90 ? 7 : 14)), pt(a, ARM), 'stroke="var(--line)" stroke-width="' + (a % 90 ? 2 : 3) + '"');
      if (deg === 90) {
        h += '<path d="M' + (C + 26) + " " + C + " L" + (C + 26) + " " + (C - 26) + " L" + C + " " + (C - 26) + " L" + C + " " + C + 'Z" ' + AR + "/>";
      } else if (deg === 360) {
        h += '<circle cx="' + C + '" cy="' + C + '" r="40" ' + AR + "/>";
      } else if (deg > 0) {
        var e40 = pt(deg, 40);
        h += '<path d="M' + C + " " + C + " L" + (C + 40) + " " + C + " A40 40 0 " + (deg > 180 ? 1 : 0) + " 0 " + r1(e40[0]) + " " + r1(e40[1]) + 'Z" ' + AR + "/>";
      }
      h += ln([C, C], pt(0, ARM), 'stroke="var(--ink-2)" stroke-width="7" stroke-linecap="round"');
      h += ln([C, C], end, 'stroke="var(--orange)" stroke-width="7" stroke-linecap="round"');
      h += '<circle cx="' + C + '" cy="' + C + '" r="7" fill="var(--ink)"/>';
      h += '<circle class="tap" cx="' + r1(end[0]) + '" cy="' + r1(end[1]) + '" r="24" fill="var(--orange)" fill-opacity="0.18"/>' + dotAt(end, 11, "var(--orange)");
      var la = deg === 0 || deg === 360 ? 40 : Math.max(deg / 2, 14), lp = pt(la, deg < 40 ? 80 : 64);
      h += txt(lp[0], lp[1] + 7, api.n(deg) + "°", 20, "fill:var(--purple)");
      f.stage.innerHTML = h + "</svg>";
      var tn = turnName(deg);
      f.readout("<b>" + api.n(deg) + "°</b> · " + kind(deg) + (tn && deg !== 360 ? " · <b>" + tn + "</b>" : ""));
      api.check(!!goal && goal.test());
    }
    function set(v) { v = Math.max(0, Math.min(360, v)); if (v !== deg) { deg = v; draw(); } }
    // pointer -> angle, snapped to 5 degrees; while dragging the arm cannot jump across the 0/360 line
    function fromPointer(e, moving) {
      var p = toSvg(f.stage.querySelector("svg"), e);
      if (!p) return;
      var dx = p.x - C, dy = C - p.y;
      if (dx * dx + dy * dy < 144) return;
      var a = Math.round(mod(Math.atan2(dy, dx) / DEG, 360) / 5) * 5;
      if (moving) {
        if (deg >= 270 && a <= 90) a = 360; else if (deg <= 90 && a >= 270) a = 0;
      } else {
        if (Math.abs(mod(a - deg + 180, 360) - 180) <= 15) return; // grabbed the arm itself
        if (a === 360) a = 0;
      }
      set(a);
    }
    f.stage.addEventListener("pointerdown", function (e) {
      if (!e.target || !e.target.closest || !e.target.closest("svg")) return;
      dragging = true;
      try { f.stage.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (e.preventDefault) e.preventDefault();
      fromPointer(e, false);
    });
    f.stage.addEventListener("pointermove", function (e) { if (dragging) fromPointer(e, true); });
    ["pointerup", "pointercancel", "lostpointercapture"].forEach(function (t) { f.stage.addEventListener(t, function () { dragging = false; }); });

    var row = EZ3.el("div", "btn-row"); row.setAttribute("dir", "ltr");
    [-15, -5, 5, 15].forEach(function (d) {
      var b = button((d > 0 ? "+" : "") + api.n(d) + "°");
      b.onclick = function () { set(deg + d); };
      row.appendChild(b);
    });
    f.controls.appendChild(row);

    function makeGoal() {
      var k = api.pick(["right", "acute", "obtuse", "reflex", "straight", "turn", "turn", "exact", "exact"]), v;
      if (k === "right") return { test: function () { return deg === 90; }, text: api.t("Make a right angle", "كوّن زاوية قائمة") };
      if (k === "acute") return { test: function () { return deg > 0 && deg < 90; }, text: api.t("Make an acute angle", "كوّن زاوية حادة") };
      if (k === "obtuse") return { test: function () { return deg > 90 && deg < 180; }, text: api.t("Make an obtuse angle", "كوّن زاوية منفرجة") };
      if (k === "reflex") return { test: function () { return deg > 180 && deg < 360; }, text: api.t("Make a reflex angle", "كوّن زاوية منعكسة") };
      if (k === "straight") return { test: function () { return deg === 180; }, text: api.t("Make a straight angle", "كوّن زاوية مستقيمة") };
      if (k === "turn") {
        v = api.pick([90, 180, 270, 270, 360]);
        return { test: function () { return deg === v; }, text: api.t("Make " + an(turnName(v)), "دوّر الذراع " + turnName(v)) };
      }
      var t = api.pick([["acute", "حادة", [20, 30, 45, 60, 75]], ["obtuse", "منفرجة", [100, 120, 135, 150]], ["reflex", "منعكسة", [200, 225, 240, 300, 315]]]);
      v = api.pick(t[2]);
      return { test: function () { return deg === v; },
        text: api.t("Make " + an(t[0]) + " angle of " + api.n(v) + "°", "كوّن زاوية " + t[1] + " قياسها " + api.n(v) + "°") };
    }
    function newGoal() { goal = pickGoal(makeGoal); f.goal(goal.text); draw(); }
    f.hint(api.t("Drag the orange arm or use the buttons. The angle opens anticlockwise from the grey arm.",
      "اسحب الذراع البرتقالية أو استخدم الأزرار. تنفتح الزاوية عكس اتجاه عقارب الساعة بدءًا من الذراع الرمادية."));
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     5. compass - 8-point rose, robot turns by 1/4 or 1/8 turns (animated)
     ===================================================================== */
  var DIRS = [
    { s: "N", en: "North", ar: "شمال", to: "الشمال" },
    { s: "NE", en: "North-East", ar: "شمال شرق", to: "الشمال الشرقي" },
    { s: "E", en: "East", ar: "شرق", to: "الشرق" },
    { s: "SE", en: "South-East", ar: "جنوب شرق", to: "الجنوب الشرقي" },
    { s: "S", en: "South", ar: "جنوب", to: "الجنوب" },
    { s: "SW", en: "South-West", ar: "جنوب غرب", to: "الجنوب الغربي" },
    { s: "W", en: "West", ar: "غرب", to: "الغرب" },
    { s: "NW", en: "North-West", ar: "شمال غرب", to: "الشمال الغربي" }
  ];

  EZ3.tools.compass = function (host, cfg, api) {
    var f = api.frame(), C = 170, target = 0, shown = 0, goal = null, anim = 0;
    var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    function facing() { return mod(Math.round(target / 45), 8); }
    function robot(a) {
      return '<g class="ezb-robot" transform="rotate(' + r1(a) + " " + C + " " + C + ')">' +
        '<rect x="' + (C - 47) + '" y="' + (C - 18) + '" width="12" height="36" rx="5" fill="var(--ink-2)"/>' +
        '<rect x="' + (C + 35) + '" y="' + (C - 18) + '" width="12" height="36" rx="5" fill="var(--ink-2)"/>' +
        '<circle cx="' + C + '" cy="' + C + '" r="38" fill="var(--blue-2)" stroke="var(--card)" stroke-width="3"/>' +
        '<polygon points="' + P([[C, C - 72], [C - 17, C - 40], [C + 17, C - 40]]) + '" fill="var(--orange)" stroke="var(--card)" stroke-width="2" stroke-linejoin="round"/>' +
        '<circle cx="' + (C - 13) + '" cy="' + (C - 10) + '" r="7" fill="var(--yellow)"/>' +
        '<circle cx="' + (C + 13) + '" cy="' + (C - 10) + '" r="7" fill="var(--yellow)"/></g>';
    }
    function draw() {
      var fi = facing(), h = svgOpen(340, 340, 380);
      h += '<circle cx="' + C + '" cy="' + C + '" r="156" fill="var(--card)" stroke="var(--line)" stroke-width="2"/>';
      [1, 3, 5, 7, 0, 2, 4, 6].forEach(function (i) { // star points: diagonals under, main directions on top
        var card = i % 2 === 0, a = i * 45 * DEG, dx = Math.sin(a), dy = -Math.cos(a), w = card ? 15 : 10, rt = card ? 112 : 88, on = i === fi;
        h += '<polygon points="' + P([[C + dx * rt, C + dy * rt], [C - dy * w, C + dx * w], [C + dy * w, C - dx * w]]) + '" fill="' +
          (on ? "var(--orange-soft)" : "var(--bg-2)") + '" stroke="' + (on ? "var(--orange)" : "var(--line)") + '" stroke-width="2" stroke-linejoin="round"/>';
      });
      DIRS.forEach(function (d, i) {
        var card = i % 2 === 0, a = i * 45 * DEG, rl = card ? 136 : 124, size = card ? api.t(20, 16) : api.t(15, 12),
          col = i === fi ? "var(--orange)" : i === 0 ? "var(--red)" : "var(--ink)";
        h += txt(C + Math.sin(a) * rl, C - Math.cos(a) * rl + size * 0.36, api.t(d.s, d.ar), size, "fill:" + col);
      });
      h += robot(shown);
      f.stage.innerHTML = h + "</svg>";
      f.readout(api.t("Facing: ", "يتجه نحو: ") + "<b>" + api.t(DIRS[fi].en, DIRS[fi].ar) + "</b>");
      api.check(!!goal && goal.test());
    }
    function turn(steps) {
      var from = shown, to = target + steps * 45, start = null, my = ++anim;
      target = to;
      if (reduce || !window.requestAnimationFrame) { shown = to; draw(); return; }
      function frame(ts) {
        if (my !== anim) return;
        if (start === null) start = ts;
        var k = Math.min(1, (ts - start) / 450), e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        shown = from + (to - from) * e;
        var g = f.stage.querySelector(".ezb-robot");
        if (g) g.setAttribute("transform", "rotate(" + r1(shown) + " " + C + " " + C + ")");
        if (k < 1) window.requestAnimationFrame(frame); else { shown = to; draw(); }
      }
      window.requestAnimationFrame(frame);
    }
    var CW = api.t("clockwise", "مع اتجاه عقارب الساعة"), ACW = api.t("anticlockwise", "عكس اتجاه عقارب الساعة");
    [[-2, "↺", api.t("Turn ¼", "استدر ربع دورة"), ACW], [2, "↻", api.t("Turn ¼", "استدر ربع دورة"), CW],
      [-1, "↺", api.t("Turn ⅛", "استدر ثُمن دورة"), ACW], [1, "↻", api.t("Turn ⅛", "استدر ثُمن دورة"), CW]].forEach(function (o) {
      var b = button('<span aria-hidden="true">' + o[1] + "</span> " + o[2] + " " + o[3]);
      b.onclick = function () { turn(o[0]); };
      f.controls.appendChild(b);
    });
    var TURNS = [[1, "an eighth turn", "ثُمن دورة"], [2, "a quarter turn", "ربع دورة"], [4, "a half turn", "نصف دورة"], [6, "a three-quarter turn", "ثلاثة أرباع دورة"]];
    function newGoal() {
      var fi = facing(), t;
      anim++;
      if (Math.random() < 0.45) {
        do { t = api.rand(0, 7); } while (t === fi);
        target = shown = fi * 45;
        goal = { test: function () { return facing() === t; },
          text: api.t("Turn the robot to face " + DIRS[t].en, "دوّر الروبوت ليتجه نحو " + DIRS[t].to) };
      } else {
        var st = api.rand(0, 7), tr = api.pick([TURNS[1], TURNS[1], TURNS[2], TURNS[3], TURNS[0]]), cw = Math.random() < 0.5,
          end = mod(st + (cw ? tr[0] : -tr[0]), 8);
        target = shown = st * 45;
        goal = { test: function () { return facing() === end; },
          text: api.t("You face " + DIRS[st].en + ". Turn " + tr[1] + " " + (cw ? "clockwise" : "anticlockwise") + ". Which way are you facing now?",
            "أنت تتجه نحو " + DIRS[st].to + ". استدر " + tr[2] + " " + (cw ? "مع اتجاه عقارب الساعة" : "عكس اتجاه عقارب الساعة") + ". إلى أين تتجه الآن؟") };
      }
      f.goal(goal.text);
      draw();
    }
    f.hint(api.t("North is at the top. Clockwise ↻ turns the same way as the hands of a clock.",
      "الشمال في الأعلى. الدوران مع اتجاه عقارب الساعة ↻ يكون في الاتجاه نفسه الذي تدور فيه عقارب الساعة."));
    f.onNew(newGoal);
    newGoal();
  };

  /* =====================================================================
     6. coordgrid - first quadrant 0-10. modes: plot | reflect
     ===================================================================== */
  function starPts(cx, cy, ro, ri) {
    var out = [];
    for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? ri : ro; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
    return out;
  }

  EZ3.tools.coordgrid = function (host, cfg, api) {
    var f = api.frame(), mode = cfg && cfg.mode === "reflect" ? "reflect" : "plot";
    var OX = 44, OY = 284, CELL = 25, goal = null, tap = null, ref = null;
    var LET = [api.t("A", "أ"), api.t("B", "ب"), api.t("C", "ج")];
    // no direction override: with Arabic digits the bidi algorithm already shows (x, y) right-to-left, matching the readout
    var HALO = "paint-order:stroke;stroke:var(--card);stroke-width:4px;stroke-linejoin:round";
    function S(p) { return [OX + p[0] * CELL, OY - p[1] * CELL]; }
    function co(p) { return api.d("(" + p[0] + ", " + p[1] + ")"); }
    function same(a, b) { return a[0] === b[0] && a[1] === b[1]; }
    function refl(p) { return ref.vert ? [10 - p[0], p[1]] : [p[0], 10 - p[1]]; }
    function coLabel(p, col) {
      var s = S(p), x = Math.min(Math.max(s[0], OX + 16), OX + 10 * CELL - 8), y = p[1] >= 9 ? s[1] + 25 : s[1] - 13;
      return txt(x, y, co(p), 14, "fill:" + col + ";" + HALO);
    }
    function grid() {
      var h = svgOpen(330, 316, 470), i, e = OX + 10 * CELL, t = OY - 10 * CELL, AX = 'stroke="var(--ink-2)" stroke-width="2.5" stroke-linecap="round"';
      h += '<rect class="tap" x="' + (OX - 12) + '" y="' + (t - 12) + '" width="' + (10 * CELL + 24) + '" height="' + (10 * CELL + 24) + '" rx="10" fill="var(--card)"/>';
      for (i = 0; i <= 10; i++) {
        var g = OX + i * CELL, k = OY - i * CELL;
        h += ln([g, OY], [g, t], 'stroke="var(--line)" stroke-width="1.5"') + ln([OX, k], [e, k], 'stroke="var(--line)" stroke-width="1.5"');
        h += txt(g, OY + 21, api.n(i), 12, "fill:var(--muted)");
        if (i) h += txt(OX - 15, k + 4, api.n(i), 12, "fill:var(--muted)");
      }
      h += ln([OX, OY], [e + 12, OY], AX) + ln([OX, OY], [OX, t - 12], AX);
      h += txt(e + 20, OY + 5, api.t("x", "س"), 16, "fill:var(--ink-2);font-style:italic") + txt(OX, t - 17, api.t("y", "ص"), 16, "fill:var(--ink-2);font-style:italic");
      return h;
    }

    /* --- plot --- */
    function plotGoal() {
      tap = null;
      if (Math.random() < 0.6) {
        var p;
        do { p = [api.rand(0, 10), api.rand(0, 10)]; } while (p[0] + p[1] === 0 || (goal && same(goal.p, p)));
        goal = { p: p, treasure: false, text: api.t("Find the point ", "جِد النقطة ") + co(p) };
      } else {
        var s, mx, my;
        do { s = [api.rand(0, 10), api.rand(0, 10)]; mx = api.rand(-4, 4); my = api.rand(-4, 4); }
        while (!mx || !my || s[0] + mx < 0 || s[0] + mx > 10 || s[1] + my < 0 || s[1] + my > 10);
        goal = { p: [s[0] + mx, s[1] + my], start: s, treasure: true,
          text: api.t("Treasure hunt: the treasure is " + api.n(Math.abs(mx)) + (mx > 0 ? " right" : " left") + " and " +
            api.n(Math.abs(my)) + (my > 0 ? " up" : " down") + " from " + co(s) + ". Tap it!",
            "البحث عن الكنز: الكنز على بُعد " + api.n(Math.abs(mx)) + (mx > 0 ? " إلى اليمين" : " إلى اليسار") + " و" +
            api.n(Math.abs(my)) + (my > 0 ? " إلى الأعلى" : " إلى الأسفل") + " من النقطة " + co(s) + ". اضغط عليه!") };
      }
    }
    function plotTip() {
      if (goal.treasure) return api.t("First find ", "جِد أولًا النقطة ") + co(goal.start) + api.t(", then count the squares.", "، ثم عُدّ المربعات.");
      if (tap[0] === goal.p[1] && tap[1] === goal.p[0]) return api.t("Careful: x comes first (along), then y (up).", "انتبه: س أولًا (أفقيًا)، ثم ص (إلى الأعلى).");
      if (tap[0] !== goal.p[0]) return api.t("Check x: count along the x-axis first.", "تحقق من س: عُدّ على المحور السيني أولًا.");
      return api.t("x is correct! Now check y: count up.", "قيمة س صحيحة! تحقق الآن من ص: عُدّ إلى الأعلى.");
    }
    function drawPlot() {
      var h = grid(), ok = !!tap && same(tap, goal.p), msg;
      if (tap && ok) {
        var c = S(tap);
        h += goal.treasure ? '<polygon points="' + P(starPts(c[0], c[1], 14, 6)) + '" fill="var(--yellow)" stroke="var(--orange)" stroke-width="2" stroke-linejoin="round"/>'
          : dotAt(c, 9, "var(--green)");
        h += coLabel(tap, "var(--green)");
      } else if (tap) {
        h += dotAt(S(tap), 7, "var(--red)") + coLabel(tap, "var(--red)");
      }
      f.stage.innerHTML = h + "</svg>";
      if (!tap) msg = api.t("Tap a crossing point on the grid.", "اضغط على نقطة تقاطع في الشبكة.");
      else if (ok) msg = '<b style="color:var(--green)">' + co(tap) + " ✓</b> " + (goal.treasure ? api.t("You found the treasure!", "وجدت الكنز!") : api.t("That's the point!", "هذه هي النقطة!"));
      else msg = api.t("You tapped ", "ضغطت على ") + '<b style="color:var(--red)">' + co(tap) + "</b>. " + plotTip();
      f.readout(msg);
      api.check(ok);
    }

    /* --- reflect --- */
    function goodTri(p) {
      return Math.abs((p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1])) >= 6;
    }
    function reflectGoal() {
      var vert = Math.random() < 0.5, n = Math.random() < 0.4 ? 1 : 3, side = Math.random() < 0.5, pts, i, tries = 0;
      // keep points off the outer rows/columns that hold the labels: across the mirror 1-4 or 6-9
      function rp() { var a = side ? api.rand(6, 9) : api.rand(1, 4), b = api.rand(1, 9); return vert ? [a, b] : [b, a]; }
      do { pts = []; for (i = 0; i < n; i++) pts.push(rp()); } while (n === 3 && !goodTri(pts) && ++tries < 300);
      ref = { vert: vert, pts: pts, found: pts.map(function () { return false; }), wrong: null };
      goal = { text: n === 1
        ? api.t("Reflect the blue point in the mirror line. Tap where its reflection is.", "اعكس النقطة الزرقاء في خط التماثل (المرآة). اضغط على مكان صورتها.")
        : api.t("Reflect triangle ABC in the mirror line. Tap each reflected vertex.", "اعكس المثلث أ ب ج في خط التماثل (المرآة). اضغط على صورة كل رأس.") };
    }
    function drawReflect() {
      var h = grid(), n = ref.pts.length, cnt = 0, gx = 0, gy = 0, MIR = 'stroke="var(--purple)" stroke-width="3.5" stroke-dasharray="9 6" stroke-linecap="round"';
      ref.found.forEach(function (b) { if (b) cnt++; });
      var done = cnt === n;
      if (ref.vert) {
        h += ln(S([5, -0.3]), S([5, 10.4]), MIR) + txt(S([5, 0])[0], S([5, 10])[1] - 17, api.t("mirror line", "خط التماثل"), 12, "fill:var(--purple)");
      } else {
        // label as a small legend above the grid, so it never sits on top of the shape
        h += ln(S([-0.3, 5]), S([10.4, 5]), MIR) + ln([214, 12], [238, 12], 'stroke="var(--purple)" stroke-width="3" stroke-dasharray="6 4"') +
          txt(284, 16, api.t("mirror line", "خط التماثل"), 12, "fill:var(--purple)");
      }
      ref.pts.forEach(function (p) { var s = S(p); gx += s[0] / n; gy += s[1] / n; });
      // vertex letter, pushed away from the centre of its own triangle (original or reflected)
      function letter(p, i, prime, col) {
        var s = S(p), cx = prime && ref.vert ? 2 * S([5, 0])[0] - gx : gx, cy = prime && !ref.vert ? 2 * S([0, 5])[1] - gy : gy,
          dx = s[0] - cx, dy = s[1] - cy, L = Math.sqrt(dx * dx + dy * dy) || 1;
        return txt(s[0] + dx / L * 17, s[1] + dy / L * 17 + 5, LET[i] + (prime ? "′" : ""), 15, "fill:" + col + ";" + HALO);
      }
      if (n === 3) h += '<polygon points="' + P(ref.pts.map(S)) + '" fill="var(--blue-2)" fill-opacity="0.18" stroke="var(--blue-2)" stroke-width="3" stroke-linejoin="round"/>';
      if (n === 3 && done) h += '<polygon points="' + P(ref.pts.map(function (p) { return S(refl(p)); })) + '" fill="var(--green)" fill-opacity="0.18" stroke="var(--green)" stroke-width="3" stroke-linejoin="round"/>';
      ref.pts.forEach(function (p, i) {
        h += dotAt(S(p), 7, "var(--blue-2)") + (n === 3 ? letter(p, i, false, "var(--blue-2)") : "");
        if (ref.found[i]) {
          var q = refl(p);
          h += dotAt(S(q), 8, "var(--green)") + (n === 3 ? letter(q, i, true, "var(--green)") : coLabel(q, "var(--green)"));
        }
      });
      if (ref.wrong) h += dotAt(S(ref.wrong), 7, "var(--red)"); // its coordinates are in the readout
      f.stage.innerHTML = h + "</svg>";
      var msg;
      if (n === 1) {
        msg = done ? '<b style="color:var(--green)">' + co(refl(ref.pts[0])) + " ✓</b> " + api.t("That's the reflection!", "هذه هي الصورة!")
          : api.t("Tap where the reflection of the blue point is.", "اضغط حيث تقع صورة النقطة الزرقاء.");
      } else {
        msg = api.t("Reflected vertices found: ", "صور الرؤوس التي وجدتها: ") + "<b>" + api.n(cnt) + "</b> " + api.t("of", "من") + " <b>" + api.n(3) + "</b>" +
          (done ? ' <b style="color:var(--green)">✓</b> ' + api.t("The triangle is reflected!", "انعكس المثلث!") : "");
      }
      if (ref.wrong && !done) {
        msg += "<br>" + api.t("Not there: ", "ليست هنا: ") + '<b style="color:var(--red)">' + co(ref.wrong) + "</b>. " +
          api.t("Count the squares from the point to the mirror line, then the same number on the other side.",
            "عُدّ المربعات من النقطة إلى خط التماثل، ثم العدد نفسه على الجهة الأخرى.");
      }
      f.readout(msg);
      api.check(done);
    }

    function draw() { if (mode === "plot") drawPlot(); else drawReflect(); }
    f.stage.addEventListener("click", function (e) {
      var p = toSvg(f.stage.querySelector("svg"), e);
      if (!p) return;
      var x = Math.round((p.x - OX) / CELL), y = Math.round((OY - p.y) / CELL);
      if (x < 0 || x > 10 || y < 0 || y > 10) return;
      if (mode === "plot") { tap = [x, y]; }
      else {
        var hit = -1;
        ref.pts.forEach(function (q, i) { if (same(refl(q), [x, y])) hit = i; });
        if (hit >= 0) { ref.found[hit] = true; ref.wrong = null; } else ref.wrong = [x, y];
      }
      draw();
    });
    function newGoal() { if (mode === "plot") plotGoal(); else reflectGoal(); f.goal(goal.text); draw(); }
    f.hint(mode === "plot"
      ? api.t("Go along the x-axis first, then up the y-axis. Tap where the lines cross.", "تحرّك على المحور السيني أولًا، ثم إلى الأعلى على المحور الصادي. اضغط حيث تتقاطع الخطوط.")
      : api.t("The purple dashed line is the mirror. Each reflected point is the same distance from the mirror, on the other side.",
        "الخط البنفسجي المتقطع هو المرآة. كل نقطة منعكسة تبعد المسافة نفسها عن المرآة، لكن على الجهة الأخرى."));
    f.onNew(newGoal);
    newGoal();
  };
})();
