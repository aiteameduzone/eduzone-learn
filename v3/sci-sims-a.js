/* EduZone Learn v3 - Science · Prep 3 simulation labs (part A): live, draggable canvas sims.
   reactlab (metal + solution beaker), burner (combustion), lungsim (smoke in the lungs),
   flow (electrons in a circuit), builder (series / parallel circuit kit).
   Each registers as EZ3.sciLabs[type](host, cfg, done) like the other labs. Original designs. */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };

  /* ---------- shared kit ---------- */
  var K = E.simKit = {};
  K.make = function (host, ratio, maxH) {
    var wrap = E.el("div", "sim"), cv = document.createElement("canvas");
    wrap.appendChild(cv); host.appendChild(wrap);
    var ctx = cv.getContext("2d"), o = { cv: cv, ctx: ctx, W: 0, H: 0, wrap: wrap };
    function size() {
      var w = wrap.clientWidth || 600, h = Math.min(maxH || 420, Math.max(220, Math.round(w * ratio))), d = window.devicePixelRatio || 1;
      if (w === o.W && h === o.H) return;
      cv.width = w * d; cv.height = h * d; cv.style.height = h + "px"; ctx.setTransform(d, 0, 0, d, 0, 0); o.W = w; o.H = h;
      if (o.onSize) o.onSize();
    }
    size();
    var ro = window.ResizeObserver ? new ResizeObserver(size) : null; if (ro) ro.observe(wrap);
    o.loop = function (fn) {
      var last = performance.now();
      (function f(now) {
        if (!cv.isConnected) { if (ro) ro.disconnect(); return; }
        var dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now;
        o.C = { ink: K.col("--ink"), muted: K.col("--muted"), card: K.col("--card"), bg: K.col("--bg-2"), line: K.col("--line") };
        fn(dt); requestAnimationFrame(f);
      })(last);
    };
    o.pt = function (e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    o.drag = function (h) {
      var on = false;
      cv.addEventListener("pointerdown", function (e) { var p = o.pt(e); if (h.down && h.down(p) !== false) { on = true; try { cv.setPointerCapture(e.pointerId); } catch (x) {} e.preventDefault(); } });
      cv.addEventListener("pointermove", function (e) { var p = o.pt(e); if (on) { if (h.move) h.move(p); } else if (h.hover) cv.style.cursor = h.hover(p) ? "grab" : "default"; });
      cv.addEventListener("pointerup", function (e) { if (on) { on = false; if (h.up) h.up(o.pt(e)); } });
      cv.addEventListener("pointercancel", function () { on = false; });
    };
    return o;
  };
  K.col = function (v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim() || "#334155"; };
  K.txt = function (ctx, s, x, y, o) {
    o = o || {}; ctx.font = (o.w || 800) + " " + (o.s || 13) + "px Nunito, Cairo, sans-serif";
    ctx.fillStyle = o.c || "#0f172a"; ctx.textAlign = o.a || "center"; ctx.textBaseline = "middle"; ctx.fillText(s, x, y);
  };
  K.rr = function (ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };
  K.dot = function (ctx, x, y, r, c, stroke) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fillStyle = c; ctx.fill(); if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1; ctx.stroke(); } };
  K.rnd = function (a, b) { return a + Math.random() * (b - a); };
  K.seg = function (host, id, opts, cur, on) {
    var el = host.querySelector(id);
    function draw() {
      el.innerHTML = opts.map(function (o) { return '<button type="button" data-v="' + o[0] + '" class="' + (o[0] === cur ? "on" : "") + '">' + o[1] + "</button>"; }).join("");
      el.querySelectorAll("button").forEach(function (b) { b.onclick = function () { cur = b.dataset.v; draw(); on(cur); }; });
    }
    draw();
    return { set: function (v) { cur = v; draw(); } };
  };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }

  /* =========================================================
     1. reactlab - drag a metal strip into a solution
     ========================================================= */
  L.reactlab = function (host, cfg, done) {
    var METALS = { Mg: ["#d4d4d8", ["Magnesium", "ماغنسيوم"]], Zn: ["#a1a1aa", ["Zinc", "خارصين"]], Fe: ["#6b7280", ["Iron", "حديد"]], Cu: ["#c2410c", ["Copper", "نحاس"]], Ag: ["#e5e7eb", ["Silver", "فضة"]] };
    var ORDER = ["Mg", "Zn", "Fe", "Cu", "Ag"];
    var SER = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "Sn", "Pb", "H", "Cu", "Hg", "Ag", "Pt", "Au"];
    var SOL = { HCl: ["H", "#facc15", "#14b8a6", ["Dilute HCl", "حمض HCl مخفف"]], CuSO4: ["Cu", "#2563eb", "#22c55e", ["Copper sulphate", "كبريتات النحاس"]], AgNO3: ["Ag", "#cbd5e1", "#a855f7", ["Silver nitrate", "نترات الفضة"]], ZnSO4: ["Zn", "#9ca3af", "#22c55e", ["Zinc sulphate", "كبريتات الخارصين"]] };
    var EQN = { "Mg|H": "Mg + 2HCl → MgCl₂ + H₂↑", "Zn|H": "Zn + 2HCl → ZnCl₂ + H₂↑", "Fe|H": "Fe + 2HCl → FeCl₂ + H₂↑", "Mg|Cu": "Mg + CuSO₄ → MgSO₄ + Cu", "Zn|Cu": "Zn + CuSO₄ → ZnSO₄ + Cu", "Fe|Cu": "Fe + CuSO₄ → FeSO₄ + Cu",
      "Mg|Ag": "Mg + 2AgNO₃ → Mg(NO₃)₂ + 2Ag", "Zn|Ag": "Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag", "Fe|Ag": "Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag", "Cu|Ag": "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag", "Mg|Zn": "Mg + ZnSO₄ → MgSO₄ + Zn" };
    var ION = { H: "#facc15", Cu: "#2563eb", Ag: "#cbd5e1", Zn: "#9ca3af", Mg: "#f5f5f4", Fe: "#a16207" };
    host.innerHTML = hint(t("Drag a metal strip from the shelf into the beaker. Watch the ions. Change the solution with the buttons.", "اسحب شريط فلز من الرف إلى الكأس وراقب الأيونات، وغيّر المحلول بالأزرار.")) + '<div class="seg" id="rxs"></div>';
    var S = K.make(host, 0.62, 380), sol = "CuSO4", strips = [], ions = [], bubbles = [], dep = [], inStrip = null, drag = null, acc = 0, lastKey = "";
    var out = E.el("div", "meter rx-out"); host.appendChild(out);
    var tick = L._goals(host, [t("Make hydrogen gas bubble out of the acid.", "اجعل غاز الهيدروجين يتصاعد من الحمض."), t("Find a metal that does NOT react with the acid.", "اكتشف فلزًا لا يتفاعل مع الحمض."),
      t("Make red copper appear from the blue solution.", "اجعل النحاس الأحمر يظهر من المحلول الأزرق."), t("Make copper itself displace another metal.", "اجعل النحاس نفسه يحل محل فلز آخر.")], done);
    function geo() { var W = S.W, H = S.H; return { bx: W * 0.42, bw: W * 0.36, by: H * 0.2, bh: H * 0.74, ly: H * 0.36, shelfY: H * 0.92 }; }
    function home(s, i) { var W = S.W; s.hx = W * 0.05 + i * Math.min(48, W * 0.07); s.hy = geo().shelfY; }
    function reset() {
      var g = geo(); strips = ORDER.map(function (m, i) { var s = { m: m, h: 110, x: 0, y: 0 }; home(s, i); s.x = s.hx; s.y = s.hy; return s; });
      inStrip = null; dep = []; bubbles = [];
      ions = [];
      var c = SOL[sol];
      for (var i = 0; i < 36; i++) ions.push({ x: K.rnd(g.bx + 8, g.bx + g.bw - 8), y: K.rnd(g.ly + 8, g.by + g.bh - 8), vx: K.rnd(-20, 20), vy: K.rnd(-20, 20), t: c[0] });
      for (i = 0; i < 18; i++) ions.push({ x: K.rnd(g.bx + 8, g.bx + g.bw - 8), y: K.rnd(g.ly + 8, g.by + g.bh - 8), vx: K.rnd(-20, 20), vy: K.rnd(-20, 20), t: "anion", c: c[2] });
      lastKey = ""; result();
    }
    S.onSize = function () { strips.forEach(function (s, i) { home(s, i); if (s !== inStrip && s !== drag) { s.x = s.hx; s.y = s.hy; } }); };
    K.seg(host, "#rxs", Object.keys(SOL).map(function (k) { return [k, '<span dir="ltr">' + k.replace("SO4", "SO₄").replace("NO3", "NO₃") + "</span>"]; }), sol, function (v) { sol = v; reset(); });
    function react() { return inStrip ? EQN[inStrip.m + "|" + SOL[sol][0]] : null; }
    function result() {
      var c = SOL[sol], strip = '<span class="series-strip mini">' + SER.map(function (x) { return '<span class="' + (inStrip && x === inStrip.m ? "me" : x === c[0] ? "them" : x === "H" ? "h" : "") + '">' + x + "</span>"; }).join("") + "</span>";
      if (!inStrip) { out.innerHTML = strip + '<span class="sub">' + esc(T(c[3])) + " · " + t("drop a metal in", "أسقط فلزًا") + "</span>"; return; }
      var me = inStrip.m, them = c[0], e = react();
      if (e) out.innerHTML = strip + '<b class="ok-t">✔ ' + t("Reaction!", "يحدث تفاعل!") + "</b>" + eq(e) + '<span class="sub">' + t(me + " is above " + (them === "H" ? "hydrogen" : them) + ", so it displaces it.", me + " يسبق " + (them === "H" ? "الهيدروجين" : them) + " فيحل محله.") + "</span>";
      else out.innerHTML = strip + '<b class="no-t">✖ ' + t("No reaction", "لا يحدث تفاعل") + '</b><span class="sub">' + (me === them ? t("A metal cannot displace itself.", "الفلز لا يحل محل نفسه.") : t(me + " is below " + (them === "H" ? "hydrogen" : them) + ".", me + " يلي " + (them === "H" ? "الهيدروجين" : them) + ".")) + "</span>";
      var key = me + "|" + them;
      if (key !== lastKey) {
        lastKey = key; E.speak(e ? t("Reaction!", "يحدث تفاعل!") : t("No reaction.", "لا يحدث تفاعل."));
        if (!e && them === "H") tick(1);
      }
    }
    function stripRect(s) { var w = 14; return { x: s.x - w / 2, y: s.y - s.h, w: w, h: s.h }; }
    S.drag({
      down: function (p) {
        for (var i = strips.length - 1; i >= 0; i--) { var r = stripRect(strips[i]); if (p.x > r.x - 8 && p.x < r.x + r.w + 8 && p.y > r.y - 8 && p.y < r.y + r.h + 8) { drag = strips[i]; drag.ox = p.x - drag.x; drag.oy = p.y - drag.y; if (drag === inStrip) { inStrip = null; dep = []; result(); } return true; } }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x - drag.ox; drag.y = p.y - drag.oy; } },
      up: function () {
        if (!drag) return;
        var g = geo();
        if (drag.x > g.bx + 10 && drag.x < g.bx + g.bw - 10 && drag.y > g.ly + 20) {
          if (inStrip && inStrip !== drag) { inStrip.x = inStrip.hx; inStrip.y = inStrip.hy; }
          inStrip = drag; drag.x = Math.max(g.bx + 30, Math.min(g.bx + g.bw - 30, drag.x)); drag.y = g.by + g.bh - 6; dep = []; result();
        } else { drag.x = drag.hx; drag.y = drag.hy; }
        drag = null;
      },
      hover: function (p) { return strips.some(function (s) { var r = stripRect(s); return p.x > r.x - 8 && p.x < r.x + r.w + 8 && p.y > r.y && p.y < r.y + r.h; }); }
    });
    reset();
    S.loop(function (dt) {
      var c = S.ctx, g = geo(), W = S.W, H = S.H, C = S.C, e = react(), them = SOL[sol][0];
      c.clearRect(0, 0, W, H);
      // solution colour: blue while Cu ions remain
      var nCu = ions.filter(function (i) { return i.t === "Cu"; }).length;
      c.fillStyle = "rgba(37,99,235," + (0.06 + nCu / 36 * 0.45) + ")";
      c.fillRect(g.bx, g.ly, g.bw, g.by + g.bh - g.ly);
      // ions
      ions.forEach(function (i) {
        if (i.go && inStrip) { var tx = inStrip.x, ty = inStrip.y - K.rnd(0, inStrip.h * 0.6); i.vx += (tx - i.x) * 7 * dt; i.vy += (ty - i.y) * 7 * dt; i.vx *= 0.97; i.vy *= 0.97; }
        i.x += i.vx * dt; i.y += i.vy * dt;
        if (i.x < g.bx + 5 || i.x > g.bx + g.bw - 5) i.vx *= -1; if (i.y < g.ly + 5 || i.y > g.by + g.bh - 5) i.vy *= -1;
        i.x = Math.max(g.bx + 5, Math.min(g.bx + g.bw - 5, i.x)); i.y = Math.max(g.ly + 5, Math.min(g.by + g.bh - 5, i.y));
        if (!i.go) { i.vx += K.rnd(-30, 30) * dt; i.vy += K.rnd(-30, 30) * dt; i.vx *= 0.99; i.vy *= 0.99; }
        if (i.t === "anion") K.dot(c, i.x, i.y, 3, i.c); else K.dot(c, i.x, i.y, 6, ION[i.t], "rgba(0,0,0,.3)");
      });
      // reaction step
      if (e && inStrip && inStrip.h > 50) {
        acc += dt;
        if (acc > 0.16) {
          acc = 0;
          var cand = ions.filter(function (i) { return i.t === them && !i.go; });
          if (cand.length) {
            var ion = cand[Math.floor(Math.random() * cand.length)]; ion.go = true;
            ions.push({ x: inStrip.x + K.rnd(-8, 8), y: inStrip.y - K.rnd(10, inStrip.h * 0.6), vx: K.rnd(-90, 90), vy: K.rnd(-90, 30), t: inStrip.m });
            inStrip.h -= 0.6;
          }
        }
        ions = ions.filter(function (i) {
          if (!i.go || !inStrip) return true;
          if (Math.abs(i.x - inStrip.x) < 10 && i.y > inStrip.y - inStrip.h) {
            if (them === "H") { if (Math.random() < 0.6) bubbles.push({ x: inStrip.x + K.rnd(-8, 8), y: i.y, r: K.rnd(3, 6) }); }
            else dep.push({ dx: K.rnd(-9, 9), dy: K.rnd(4, inStrip.h - 4), c: them === "Cu" ? "#b45309" : them === "Ag" ? "#f8fafc" : "#9ca3af" });
            if (them === "H") tick(0); if (them === "Cu") tick(2); if (inStrip.m === "Cu") tick(3);
            return false;
          }
          return true;
        });
      }
      bubbles.forEach(function (b) { b.y -= 60 * dt; b.x += K.rnd(-10, 10) * dt; });
      bubbles = bubbles.filter(function (b) { return b.y > g.ly; });
      bubbles.forEach(function (b) { c.beginPath(); c.arc(b.x, b.y, b.r, 0, 7); c.strokeStyle = "rgba(255,255,255,.95)"; c.lineWidth = 1.5; c.stroke(); });
      // beaker glass
      c.strokeStyle = C.muted; c.lineWidth = 3; c.beginPath(); c.moveTo(g.bx - 4, g.by); c.lineTo(g.bx, g.by + g.bh); c.lineTo(g.bx + g.bw, g.by + g.bh); c.lineTo(g.bx + g.bw + 4, g.by); c.stroke();
      c.strokeStyle = "rgba(255,255,255,.35)"; c.beginPath(); c.moveTo(g.bx, g.ly); c.lineTo(g.bx + g.bw, g.ly); c.stroke();
      K.txt(c, T(SOL[sol][3]), g.bx + g.bw / 2, g.by - 10, { c: C.ink, s: 13 });
      // shelf
      c.fillStyle = C.line; c.fillRect(W * 0.03, g.shelfY, Math.min(W * 0.36, 5 * 48 + 10), 6);
      // strips
      strips.forEach(function (s) {
        var r = stripRect(s); c.fillStyle = METALS[s.m][0]; K.rr(c, r.x, r.y, r.w, r.h, 3); c.fill(); c.strokeStyle = "rgba(0,0,0,.3)"; c.lineWidth = 1; c.stroke();
        if (s === inStrip && dep.length) { c.globalAlpha = Math.min(0.85, dep.length / 26); c.fillStyle = dep[0].c; K.rr(c, r.x - 2, r.y + 4, r.w + 4, r.h - 4, 3); c.fill(); c.globalAlpha = 1; dep.forEach(function (d) { K.dot(c, s.x + d.dx * 0.8, s.y - d.dy, 3.4, d.c, "rgba(0,0,0,.2)"); }); }
        K.txt(c, s.m, s.x, r.y - 10, { c: C.ink, s: 12 });
      });
      // legend
      var lx = W - 8, ly = 14; [["H", "H⁺"], ["Cu", "Cu²⁺"], ["Ag", "Ag⁺"], ["Zn", "Zn²⁺"]].forEach(function (k, j) { K.dot(c, lx - 52, ly + j * 16, 5, ION[k[0]], "rgba(0,0,0,.25)"); K.txt(c, k[1], lx - 40, ly + j * 16, { a: "left", c: C.muted, s: 11 }); });
    });
  };

  /* =========================================================
     2. burner - a gas burner with gas, air holes, lid and tests
     ========================================================= */
  L.burner = function (host, cfg, done) {
    host.innerHTML = hint(t("Open the gas, press Ignite, then change the air holes. Drag the metal lid onto the burner to put it out.", "افتح الغاز واضغط «إشعال» ثم غيّر فتحات الهواء، واسحب الغطاء المعدني فوق الموقد لإطفائه."));
    var S = K.make(host, 0.6, 360), parts = [], soot = 0, lit = false, lime = 0, cobalt = 0, sparks = 0, lid = { x: 0, y: 0, on: false }, dragLid = false, rates = { co2: 0, h2o: 0, co: 0, c: 0 };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Gas valve", "صمام الغاز"), 0, 100, 10, 50, "%") + L._slider(t("Air holes", "فتحات الهواء"), 0, 100, 10, 30, "%") +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="ign">🔥 ' + t("Ignite", "إشعال") + '</button><button type="button" class="btn sm tg" id="tlime">🧪 ' + t("Lime water above", "ماء الجير فوق اللهب") + '</button><button type="button" class="btn sm tg" id="tcob">📄 ' + t("Cobalt chloride paper", "ورقة كلوريد الكوبالت") + "</button></div>" +
      '<div class="prod"></div>';
    var ins = ctl.querySelectorAll("input"), gas = 50, air = 30, tools = { lime: false, cob: false };
    var tick = L._goals(host, [t("Light the burner.", "أشعل الموقد."), t("Get complete combustion: a blue flame.", "احصل على احتراق تام: لهب أزرق."), t("Make the pot black with soot.", "اجعل الإناء أسود بالسناج."),
      t("Show CO₂ is made: lime water turns milky.", "أثبت تكوّن ثاني أكسيد الكربون: يتعكر ماء الجير."), t("Put the fire out with the lid (no oxygen).", "أطفئ النار بالغطاء (بلا أكسجين)."), t("Put the fire out by closing the gas (no fuel).", "أطفئ النار بغلق الغاز (بلا وقود).")], done);
    function upd() { var sl = ctl.querySelectorAll(".slv"); sl[0].textContent = n(gas) + "%"; sl[1].textContent = n(air) + "%"; }
    ins[0].oninput = function () { gas = Number(ins[0].value); upd(); if (gas === 0 && lit) { lit = false; tick(5); E.speak(t("No fuel, no fire.", "لا وقود، لا نار.")); } };
    ins[1].oninput = function () { air = Number(ins[1].value); upd(); };
    ctl.querySelector("#ign").onclick = function () {
      sparks = 0.5;
      if (gas > 0 && !lid.on) { lit = true; tick(0); E.speak(t("Fuel, oxygen and heat: fire!", "وقود وأكسجين وحرارة: نار!")); }
      else E.toast(gas === 0 ? t("Open the gas first.", "افتح الغاز أولًا.") : t("Remove the lid: no oxygen can reach the gas.", "أزل الغطاء: الأكسجين لا يصل إلى الغاز."));
    };
    ctl.querySelector("#tlime").onclick = function () { tools.lime = !tools.lime; this.classList.toggle("on", tools.lime); };
    ctl.querySelector("#tcob").onclick = function () { tools.cob = !tools.cob; this.classList.toggle("on", tools.cob); };
    upd();
    function geo() { var W = S.W, H = S.H; return { cx: W * 0.42, top: H * 0.62, base: H * 0.92, potY: H * 0.16 }; }
    function lidHome() { lid.x = S.W * 0.82; lid.y = S.H * 0.82; }
    lidHome(); S.onSize = function () { if (!lid.on && !dragLid) lidHome(); };
    S.drag({
      down: function (p) { if (Math.abs(p.x - lid.x) < 40 && Math.abs(p.y - lid.y) < 18) { dragLid = true; lid.on = false; return true; } return false; },
      move: function (p) { lid.x = p.x; lid.y = p.y; },
      up: function () {
        dragLid = false; var g = geo();
        if (Math.abs(lid.x - g.cx) < 40 && Math.abs(lid.y - g.top) < 40) { lid.on = true; lid.x = g.cx; lid.y = g.top - 2; if (lit) { lit = false; tick(4); E.speak(t("The lid cut off the oxygen. The fire is out.", "الغطاء قطع الأكسجين فانطفأت النار.")); } }
        else lidHome();
      },
      hover: function (p) { return Math.abs(p.x - lid.x) < 40 && Math.abs(p.y - lid.y) < 18; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), blue = air >= 60, on = lit && gas > 0;
      c.clearRect(0, 0, W, H);
      if (on) {
        var k = gas / 100;
        for (var i = 0; i < Math.round(4 + 10 * k); i++) parts.push({ x: g.cx + K.rnd(-7, 7), y: g.top - 4, vx: K.rnd(-12, 12), vy: -K.rnd(130, 210) * (0.6 + k), life: K.rnd(0.35, 0.6) * (0.6 + k), max: 0, s: !blue && Math.random() < 0.18 });
        if (blue) { rates.co2 = k; rates.h2o = k; rates.co = 0; rates.c = 0; } else { var q = 1 - air / 60; rates.co2 = k * (1 - q * 0.6); rates.h2o = k; rates.co = k * q; rates.c = k * q; soot = Math.min(1, soot + dt * k * q * 0.12); }
        if (tools.lime) lime = Math.min(1, lime + dt * rates.co2 * 0.35);
        if (tools.cob) cobalt = Math.min(1, cobalt + dt * rates.h2o * 0.4);
        if (blue) tick(1); if (soot > 0.45) tick(2); if (lime > 0.6) tick(3);
      } else rates = { co2: 0, h2o: 0, co: 0, c: 0 };
      parts.forEach(function (p) { if (!p.max) p.max = p.life; p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; });
      parts = parts.filter(function (p) { return p.life > 0; });
      // tripod + pot
      c.strokeStyle = C.muted; c.lineWidth = 3; c.beginPath(); c.moveTo(g.cx - 70, g.base); c.lineTo(g.cx - 50, g.potY + 46); c.moveTo(g.cx + 70, g.base); c.lineTo(g.cx + 50, g.potY + 46); c.stroke();
      c.fillStyle = "rgb(" + Math.round(203 - 170 * soot) + "," + Math.round(213 - 180 * soot) + "," + Math.round(225 - 190 * soot) + ")";
      K.rr(c, g.cx - 58, g.potY, 116, 44, 8); c.fill();
      // flame particles
      c.globalCompositeOperation = "lighter";
      parts.forEach(function (p) {
        var a = p.life / p.max;
        if (p.s) { c.globalCompositeOperation = "source-over"; K.dot(c, p.x, p.y, 2.5, "rgba(30,30,30," + (0.7 * a) + ")"); c.globalCompositeOperation = "lighter"; return; }
        K.dot(c, p.x, p.y, 10 * a + 3, blue ? "rgba(59,130,246," + (0.35 * a) + ")" : "rgba(249,115,22," + (0.35 * a) + ")");
        if (a > 0.6) K.dot(c, p.x, p.y, 3, blue ? "rgba(191,219,254,.5)" : "rgba(254,240,138,.5)");
      });
      c.globalCompositeOperation = "source-over";
      // burner
      c.fillStyle = "#64748b"; K.rr(c, g.cx - 10, g.top, 20, g.base - g.top - 10, 3); c.fill();
      c.fillStyle = "#475569"; K.rr(c, g.cx - 38, g.base - 12, 76, 12, 4); c.fill();
      c.fillStyle = "#0f172a"; c.fillRect(g.cx - 10, g.base - 40, 20 * (0.15 + air / 120), 10);
      K.txt(c, t("air", "هواء"), g.cx + 26, g.base - 35, { c: C.muted, s: 11, a: "left" });
      c.strokeStyle = "#f59e0b"; c.lineWidth = 4; c.beginPath(); c.moveTo(g.cx - 38, g.base - 6); c.lineTo(g.cx - 70, g.base - 6); c.stroke();
      K.txt(c, t("gas", "غاز"), g.cx - 78, g.base - 18, { c: C.muted, s: 11 });
      if (sparks > 0) { sparks -= dt; for (var j = 0; j < 6; j++) K.dot(c, g.cx + K.rnd(-14, 14), g.top - K.rnd(0, 20), 2, "#fde047"); }
      // tools
      if (tools.lime) { var tx = g.cx + 80, ty = g.potY + 4; c.fillStyle = "rgba(255,255,255," + (0.25 + lime * 0.7) + ")"; K.rr(c, tx, ty + 30, 18, 40, 6); c.fill(); c.strokeStyle = C.muted; c.lineWidth = 2; K.rr(c, tx, ty, 18, 70, 6); c.stroke(); K.txt(c, t("lime water", "ماء الجير"), tx + 9, ty + 84, { c: C.muted, s: 10 }); }
      if (tools.cob) { var px = g.cx - 110, py = g.potY + 6; c.fillStyle = "rgb(" + Math.round(96 + 140 * cobalt) + "," + Math.round(165 - 40 * cobalt) + "," + Math.round(250 - 60 * cobalt) + ")"; c.fillRect(px, py, 16, 56); K.txt(c, t("cobalt paper", "ورقة الكوبالت"), px + 8, py + 70, { c: C.muted, s: 10 }); }
      // lid
      c.fillStyle = "#94a3b8"; K.rr(c, lid.x - 34, lid.y - 6, 68, 12, 5); c.fill(); c.fillStyle = "#475569"; c.fillRect(lid.x - 6, lid.y - 12, 12, 6);
      if (!lid.on && !dragLid) K.txt(c, t("lid", "غطاء"), lid.x, lid.y + 18, { c: C.muted, s: 11 });
      // fire triangle mini status
      var st = [[t("fuel", "وقود"), gas > 0], [t("oxygen", "أكسجين"), !lid.on], [t("heat", "حرارة"), lit]];
      st.forEach(function (s, i2) { K.txt(c, (s[1] ? "✅ " : "⛔ ") + s[0], 10, 16 + i2 * 18, { a: "left", c: C.ink, s: 12 }); });
    });
    // product meters (HTML, refreshed)
    var pr = ctl.querySelector(".prod");
    (function bars() {
      if (!pr.isConnected) return;
      pr.innerHTML = [["CO₂", rates.co2, "#64748b"], ["H₂O", rates.h2o, "#38bdf8"], ["CO ☠", rates.co, "#ef4444"], [t("soot", "سناج"), rates.c, "#1f2937"]].map(function (b) {
        return '<div class="pbar"><span dir="ltr">' + b[0] + '</span><i><b style="width:' + Math.round(b[1] * 100) + "%;background:" + b[2] + '"></b></i></div>';
      }).join("") + (lime > 0.6 ? '<span class="chip green">' + t("Lime water is milky: CO₂!", "ماء الجير متعكر: ثاني أكسيد الكربون!") + "</span>" : "") + (cobalt > 0.6 ? '<span class="chip green">' + t("Cobalt paper is pink: water!", "ورقة الكوبالت وردية: ماء!") + "</span>" : "");
      setTimeout(bars, 300);
    })();
  };

  /* =========================================================
     3. lungsim - breathing, alveolus and red blood cells
     ========================================================= */
  L.lungsim = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose what the person breathes. Watch oxygen (blue) and carbon monoxide (black) compete for seats on red blood cells. This is a teaching model.", "اختر ما يتنفسه الشخص، وراقب الأكسجين (أزرق) وأول أكسيد الكربون (أسود) يتنافسان على مقاعد كرات الدم الحمراء. هذا نموذج تعليمي.")) + '<div class="seg" id="lm"></div>';
    var S = K.make(host, 0.6, 360), mode = "clean", tm = 0, gas = [], rbc = [], tar = 0, spawn = 0, rbcT = 0, shown = { co: 0 };
    var out = E.el("div", "meter lung-out"); host.appendChild(out);
    var tick = L._goals(host, [t("Clean air: see blood carry 90% oxygen or more.", "هواء نظيف: اجعل الدم يحمل ٩٠٪ أكسجين أو أكثر."), t("Smoking: see CO take a quarter of the seats.", "التدخين: شاهد أول أكسيد الكربون يأخذ ربع المقاعد."),
      t("Keep smoking until tar covers half of the lungs.", "استمر في التدخين حتى يغطي القطران نصف الرئتين."), t("Passive smoking: see CO reach the blood of a non-smoker.", "التدخين السلبي: شاهد أول أكسيد الكربون يصل إلى دم غير المدخن.")], done);
    K.seg(host, "#lm", [["clean", "🌿 " + t("Clean air", "هواء نظيف")], ["smoke", "🚬 " + t("Smoking", "تدخين")], ["passive", "👥 " + t("Passive", "سلبي")], ["quit", "🛑 " + t("Quit", "إقلاع")]], mode, function (v) { mode = v; });
    function seats() { var o = 0, co = 0, all = 0; rbc.forEach(function (r) { if (r.x < S.W * 0.47 + S.W * 0.5 * 0.55) return; r.s.forEach(function (s) { all++; if (s === "o") o++; if (s === "c") co++; }); }); return { o: all ? o / all : 0, c: all ? co / all : 0 }; }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; tm += dt;
      c.clearRect(0, 0, W, H);
      var br = Math.sin(tm * 1.6), s = 1 + 0.05 * br, inhale = br > 0;
      // lungs (left)
      var lx = W * 0.2, ly = H * 0.55, dark = Math.min(1, tar);
      c.save(); c.translate(lx, ly); c.scale(s, s);
      c.strokeStyle = "#f9a8b4"; c.lineWidth = 8; c.beginPath(); c.moveTo(0, -H * 0.42); c.lineTo(0, -H * 0.2); c.moveTo(0, -H * 0.2); c.lineTo(-20, -H * 0.12); c.moveTo(0, -H * 0.2); c.lineTo(20, -H * 0.12); c.stroke();
      var pink = "rgb(" + Math.round(249 - 150 * dark) + "," + Math.round(168 - 110 * dark) + "," + Math.round(180 - 120 * dark) + ")";
      c.fillStyle = pink;
      c.beginPath(); c.ellipse(-W * 0.07, 0, W * 0.065, H * 0.3, 0, 0, 7); c.fill(); c.beginPath(); c.ellipse(W * 0.07, 0, W * 0.065, H * 0.3, 0, 0, 7); c.fill();
      for (var d = 0; d < tar * 60; d++) { var a = d * 2.4, rr = (d % 7) / 7; K.dot(c, (d % 2 ? 1 : -1) * W * 0.07 + Math.cos(a) * W * 0.05 * rr, Math.sin(a) * H * 0.25 * rr, 2, "rgba(41,37,36,.6)"); }
      c.restore();
      K.txt(c, inhale ? t("breathing in", "شهيق") : t("breathing out", "زفير"), lx, H - 12, { c: C.muted, s: 12 });
      // zoom: alveolus + capillary
      var zx = W * 0.47, zw = W * 0.5, top = H * 0.08, ah = H * 0.52, cy = H * 0.78;
      c.strokeStyle = C.line; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(lx + W * 0.1, ly - 20); c.lineTo(zx, top + ah / 2); c.stroke(); c.setLineDash([]);
      c.fillStyle = "rgba(251,207,232,.45)"; K.rr(c, zx, top, zw, ah, 30); c.fill();
      c.strokeStyle = tar > 0.7 ? "#a8a29e" : "#fb7185"; c.lineWidth = 4; c.setLineDash(tar > 0.7 ? [24, 10] : []); K.rr(c, zx, top, zw, ah, 30); c.stroke(); c.setLineDash([]);
      K.txt(c, t("alveolus", "حويصلة هوائية"), zx + zw / 2, top + 14, { c: C.muted, s: 12 });
      for (d = 0; d < tar * 40; d++) K.dot(c, zx + 8 + (d * 37) % (zw - 16), top + 6 + ((d * 53) % 3 === 0 ? 0 : ah - 12) * ((d % 3) ? 1 : 0), 3, "rgba(87,61,40,.75)");
      c.fillStyle = "rgba(239,68,68,.18)"; K.rr(c, zx - 10, cy - 18, zw + 20, 36, 18); c.fill();
      K.txt(c, t("blood capillary", "شعيرة دموية"), zx + zw / 2, cy + 28, { c: C.muted, s: 11 });
      // spawn inhaled gas
      spawn += dt;
      if (inhale && spawn > 0.05) {
        spawn = 0;
        var smokey = mode === "smoke" ? 0.6 : mode === "passive" ? 0.25 : 0;
        var kind = Math.random() < smokey ? (Math.random() < 0.55 ? "co" : "tar") : "o";
        gas.push({ x: zx + K.rnd(20, zw - 20), y: top + 20, vx: K.rnd(-20, 20), vy: K.rnd(20, 50), k: kind });
      }
      gas.forEach(function (g) {
        g.x += g.vx * dt; g.y += g.vy * dt;
        if (g.x < zx + 8 || g.x > zx + zw - 8) g.vx *= -1;
        if (g.k === "tar" && (g.y > top + ah - 10 || Math.random() < dt * 0.4)) { g.dead = 1; tar = Math.min(1, tar + 0.02); }
        if (g.y > top + ah - 6) { g.y = top + ah - 6; g.vy = 0; g.wait = (g.wait || 0) + dt; }
      });
      // red blood cells
      rbcT += dt;
      if (rbcT > 0.75) { rbcT = 0; rbc.push({ x: zx - 20, s: [null, null, null, null] }); }
      rbc.forEach(function (r) { r.x += 40 * dt; });
      rbc = rbc.filter(function (r) { return r.x < zx + zw + 20; });
      gas.forEach(function (g) {
        if (g.dead || g.y < top + ah - 7) return;
        var r = rbc.filter(function (b) { return Math.abs(b.x - g.x) < 30 && b.s.indexOf(null) >= 0; })[0];
        var pr = g.k === "co" ? 0.9 : 0.25;
        if (r && g.k !== "tar" && Math.random() < pr) { r.s[r.s.indexOf(null)] = g.k === "co" ? "c" : "o"; g.dead = 1; }
        if ((g.wait || 0) > 2.5) g.dead = 1;
      });
      gas = gas.filter(function (g) { return !g.dead; });
      gas.forEach(function (g) { K.dot(c, g.x, g.y, 5, g.k === "o" ? "#3b82f6" : g.k === "co" ? "#111827" : "#78350f"); });
      rbc.forEach(function (r) {
        K.dot(c, r.x, cy, 15, "#ef4444"); K.dot(c, r.x, cy, 6, "#fca5a5");
        r.s.forEach(function (s2, j) { var a2 = j * Math.PI / 2 + 0.6; if (s2) K.dot(c, r.x + Math.cos(a2) * 11, cy + Math.sin(a2) * 11, 3.5, s2 === "o" ? "#3b82f6" : "#111827"); });
      });
      if (mode === "quit") tar = Math.max(0, tar - dt * 0.01);
      var st = seats();
      if (mode === "clean" && st.o >= 0.9 && rbc.length > 4) tick(0);
      if (mode === "smoke" && st.c >= 0.25) tick(1);
      if (tar >= 0.5) tick(2);
      if (mode === "passive" && st.c > 0.05) tick(3);
      shown.o = st.o; shown.c = st.c;
    });
    (function meters() {
      if (!out.isConnected) return;
      out.innerHTML = "<span>🔵 " + t("Oxygen seats: ", "مقاعد الأكسجين: ") + "<b>" + n(Math.round(shown.o * 100)) + "%</b></span><span>⚫ CO: <b>" + n(Math.round(shown.c * 100)) + "%</b></span><span>🟤 " + t("Tar in lungs: ", "القطران في الرئتين: ") + "<b>" + n(Math.round(tar * 100)) + "%</b></span>" + (tar > 0.7 ? '<span class="chip red">' + t("Alveoli walls breaking: emphysema", "تهدم جدران الحويصلات: انتفاخ الرئة") + "</span>" : "");
      setTimeout(meters, 300);
    })();
  };

  /* =========================================================
     4. flow - electrons moving round a circuit; I = Q / t
     ========================================================= */
  L.flow = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap the switch to close the circuit. Change the cells and the wire. Each dot is one coulomb of charge.", "اضغط على المفتاح لغلق الدائرة، وغيّر الأعمدة والسلك. كل نقطة تمثل كولومًا واحدًا من الشحنة."));
    var S = K.make(host, 0.55, 340), cells = 1, len = 3, thick = 1, closed = false, conv = false, phase = 0, count = null, lastS = [];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><span class="sub">' + t("Cells (3 V each)", "الأعمدة (٣ فولت لكل منها)") + '</span><button type="button" class="btn sm" id="cm">−</button><b id="cn"></b><button type="button" class="btn sm" id="cp">+</button><button type="button" class="btn sm tg" id="conv">➡️ ' + t("Conventional current", "التيار الاصطلاحي") + "</button></div>" +
      L._slider(t("Wire length", "طول السلك"), 1, 6, 1, len) + L._slider(t("Wire thickness", "سُمك السلك"), 1, 3, 1, thick) +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="cnt">⏱ ' + t("Count the charge for 5 s", "عُدّ الشحنة لمدة ٥ ثوانٍ") + '</button></div><div class="meter fl-out"></div>';
    var tick = L._goals(host, [t("Close the switch.", "أغلق المفتاح."), t("Make the current exactly 2 A.", "اجعل شدة التيار ٢ أمبير بالضبط."), t("Count the charge for 5 s and work out I = Q ÷ t.", "عُدّ الشحنة لمدة ٥ ثوانٍ واحسب I = Q ÷ t."), t("Show the conventional current direction.", "اعرض اتجاه التيار الاصطلاحي.")], done);
    var ins = ctl.querySelectorAll("input");
    function R() { return 2 * len / thick; }
    function I() { return closed ? cells * 3 / R() : 0; }
    function upd() {
      ctl.querySelector("#cn").textContent = n(cells); var sl = ctl.querySelectorAll(".slv"); sl[0].textContent = n(len); sl[1].textContent = n(thick);
      var i = I();
      ctl.querySelector(".fl-out").innerHTML = '<span class="eq" dir="ltr">V = ' + cells * 3 + " V</span><span class=\"eq\" dir=\"ltr\">R = " + (Math.round(R() * 100) / 100) + ' Ω</span><span class="amm">🅰️ ' + n(Math.round(i * 100) / 100) + " A</span>" +
        (count ? (count.done ? '<span class="eq" dir="ltr">I = Q ÷ t = ' + count.q + " ÷ 5 = " + (count.q / 5) + " A</span>" : "<span>⏱ " + n(Math.ceil(5 - count.t)) + " s · Q = " + n(count.q) + " C</span>") : "") +
        (closed ? "" : '<span class="chip">' + t("Switch open: no current", "المفتاح مفتوح: لا يوجد تيار") + "</span>");
      if (closed && Math.abs(i - 2) < 1e-9) tick(1);
    }
    ctl.querySelector("#cm").onclick = function () { if (cells > 1) { cells--; upd(); } };
    ctl.querySelector("#cp").onclick = function () { if (cells < 4) { cells++; upd(); } };
    ctl.querySelector("#conv").onclick = function () { conv = !conv; this.classList.toggle("on", conv); if (conv) tick(3); };
    ins[0].oninput = function () { len = Number(ins[0].value); upd(); };
    ins[1].oninput = function () { thick = Number(ins[1].value); upd(); };
    ctl.querySelector("#cnt").onclick = function () { if (!closed) { E.toast(t("Close the switch first.", "أغلق المفتاح أولًا.")); return; } count = { t: 0, q: 0, done: false }; upd(); };
    upd();
    function geo() { var W = S.W, H = S.H; return { x: W * 0.12, y: H * 0.18, w: W * 0.76, h: H * 0.64 }; }
    function at(s) { // position along the loop, s in [0,1)
      var g = geo(), P = 2 * (g.w + g.h), d = ((s % 1) + 1) % 1 * P;
      if (d < g.w) return { x: g.x + d, y: g.y }; d -= g.w;
      if (d < g.h) return { x: g.x + g.w, y: g.y + d }; d -= g.h;
      if (d < g.w) return { x: g.x + g.w - d, y: g.y + g.h }; d -= g.w;
      return { x: g.x, y: g.y + g.h - d };
    }
    S.drag({ down: function (p) { var g = geo(); if (Math.abs(p.x - (g.x + g.w * 0.25)) < 34 && Math.abs(p.y - g.y) < 24) { closed = !closed; if (closed) tick(0); upd(); E.speak(closed ? t("Circuit closed. Charges flow.", "الدائرة مغلقة، تسري الشحنات.") : t("Circuit open.", "الدائرة مفتوحة.")); } return false; },
      hover: function (p) { var g = geo(); return Math.abs(p.x - (g.x + g.w * 0.25)) < 34 && Math.abs(p.y - g.y) < 24; } });
    var N = 40;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), i = I();
      c.clearRect(0, 0, W, H);
      phase += dt * i / N;
      // wire loop
      c.strokeStyle = "#f59e0b"; c.lineWidth = 6; c.strokeRect(g.x, g.y, g.w, g.h);
      // test wire on the bottom (thicker / longer drawing)
      var tw = g.w * (0.2 + len * 0.09); c.strokeStyle = "#b45309"; c.lineWidth = 4 + thick * 4; c.beginPath(); c.moveTo(g.x + g.w / 2 - tw / 2, g.y + g.h); c.lineTo(g.x + g.w / 2 + tw / 2, g.y + g.h); c.stroke();
      K.txt(c, t("test wire", "سلك الاختبار"), g.x + g.w / 2, g.y + g.h + 20, { c: C.muted, s: 11 });
      // battery on the left side
      c.fillStyle = C.card; c.fillRect(g.x - 18, g.y + g.h * 0.25, 36, g.h * 0.5);
      for (var k = 0; k < cells; k++) { var cy2 = g.y + g.h * 0.3 + k * (g.h * 0.4 / Math.max(1, cells)); c.fillStyle = "#16a34a"; c.fillRect(g.x - 14, cy2, 28, g.h * 0.4 / Math.max(1, cells) - 4); K.txt(c, "3V", g.x, cy2 + 10, { c: "#fff", s: 10 }); }
      K.txt(c, "+", g.x + 24, g.y + g.h * 0.28, { c: C.ink, s: 14 }); K.txt(c, "−", g.x + 24, g.y + g.h * 0.72, { c: C.ink, s: 14 });
      // switch on the top
      var sx = g.x + g.w * 0.25; c.fillStyle = C.card; c.fillRect(sx - 30, g.y - 8, 60, 16);
      c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.moveTo(sx - 24, g.y); c.lineTo(sx + (closed ? 24 : 16), closed ? g.y : g.y - 22); c.stroke(); K.dot(c, sx - 24, g.y, 4, C.ink); K.dot(c, sx + 24, g.y, 4, C.ink);
      K.txt(c, closed ? t("closed", "مغلق") : t("tap me", "اضغط"), sx, g.y - 30, { c: closed ? "#16a34a" : "#f97316", s: 12 });
      // bulb top right
      var bx = g.x + g.w * 0.72, glow = Math.min(1, i / 6);
      if (glow > 0) { var gr = c.createRadialGradient(bx, g.y, 2, bx, g.y, 50); gr.addColorStop(0, "rgba(250,204,21," + (0.8 * glow) + ")"); gr.addColorStop(1, "rgba(250,204,21,0)"); c.fillStyle = gr; c.beginPath(); c.arc(bx, g.y, 50, 0, 7); c.fill(); }
      K.dot(c, bx, g.y, 13, glow > 0 ? "#fde047" : C.card, C.ink);
      // ammeter right side + gate
      var ax = g.x + g.w, ay = g.y + g.h * 0.5; K.dot(c, ax, ay, 16, C.card, C.ink); K.txt(c, "A", ax, ay, { c: C.ink, s: 13 });
      // electrons: move from - to + through the outside circuit (anticlockwise in this drawing)
      for (var e = 0; e < N; e++) {
        var s0 = e / N - phase, p = at(s0);
        K.dot(c, p.x, p.y, 4, "#2563eb");
        if (count && !count.done && closed) { var prev = lastS[e]; var cur = ((s0 % 1) + 1) % 1; if (prev != null && prev > 0.27 && cur <= 0.27 && Math.abs(prev - cur) < 0.5) count.q++; lastS[e] = cur; }
      }
      if (conv && i > 0) { for (var a = 0; a < 6; a++) { var q1 = at(a / 6 + phase * 0.5), q2 = at(a / 6 + phase * 0.5 + 0.012), ang = Math.atan2(q2.y - q1.y, q2.x - q1.x); c.save(); c.translate(q1.x, q1.y); c.rotate(ang); c.fillStyle = "#f97316"; c.beginPath(); c.moveTo(10, 0); c.lineTo(-6, -7); c.lineTo(-6, 7); c.fill(); c.restore(); } }
      if (count && !count.done) { count.t += dt; if (count.t >= 5) { count.done = true; tick(2); E.speak(t("Charge counted: " + count.q + " coulombs in 5 seconds.", "عددنا " + count.q + " كولوم في ٥ ثوانٍ.")); } upd(); }
      K.txt(c, "🔵 " + t("electrons: − to +", "الإلكترونات: من السالب إلى الموجب"), 10, H - 12, { a: "left", c: C.muted, s: 11 });
    });
  };

  /* =========================================================
     5. builder - drag bulbs, resistors and wires into slots
     ========================================================= */
  L.builder = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag parts from the toolbox into the empty slots. Drag a part off the board to remove it. Tap the switch.", "اسحب القطع من صندوق الأدوات إلى الأماكن الفارغة، واسحبها خارج اللوحة لإزالتها، واضغط على المفتاح.")) + '<div class="seg" id="bm"></div>';
    var S = K.make(host, 0.62, 380), mode = "series", slots = { series: [null, null, null], parallel: [null, null, null] }, closed = true, drag = null, phase = [0, 0, 0, 0];
    var PART = { bulb: { r: 6, c: "#fde047", n: ["Bulb 6 Ω", "مصباح ٦ أوم"] }, res: { r: 3, c: "#a78bfa", n: ["Resistor 3 Ω", "مقاومة ٣ أوم"] }, wire: { r: 0, c: "#f59e0b", n: ["Wire 0 Ω", "سلك ٠ أوم"] } };
    var out = E.el("div", "meter bd-out"); host.appendChild(out);
    var tick = L._goals(host, [t("Series: make the equivalent resistance 18 Ω.", "توالي: اجعل المقاومة المكافئة ١٨ أوم."), t("Parallel: make the equivalent resistance 2 Ω.", "توازي: اجعل المقاومة المكافئة ٢ أوم."),
      t("Series: leave one slot empty. What happens to the bulbs?", "توالي: اترك مكانًا فارغًا. ماذا يحدث للمصابيح؟"), t("Parallel: remove one bulb while the others stay lit.", "توازي: أزل مصباحًا وتبقى المصابيح الأخرى مضيئة.")], done);
    K.seg(host, "#bm", [["series", t("Series board", "لوحة التوالي")], ["parallel", t("Parallel board", "لوحة التوازي")]], mode, function (v) { mode = v; calc(); });
    function geo() { var W = S.W, H = S.H; return { x: W * 0.14, y: H * 0.12, w: W * 0.78, h: H * 0.56, tb: H * 0.82 }; }
    function slotPos(i) {
      var g = geo();
      if (mode === "series") return { x: g.x + g.w * (0.25 + i * 0.25), y: g.y };
      return { x: g.x + g.w * 0.55, y: g.y + g.h * (0.22 + i * 0.3) };
    }
    function tools() { var W = S.W, g = geo(); return ["bulb", "res", "wire"].map(function (k, i) { return { k: k, x: W * (0.2 + i * 0.28), y: g.tb }; }); }
    var res = { R: 0, I: 0, br: [], open: false, short: false };
    function calc() {
      var sl = slots[mode], V = 12; res = { R: 0, I: 0, br: [0, 0, 0], ib: [0, 0, 0], open: false, short: false };
      if (mode === "series") {
        if (sl.some(function (x) { return !x; })) res.open = true;
        else { res.R = sl.reduce(function (a, x) { return a + PART[x].r; }, 0); if (res.R === 0) res.short = true; }
        res.I = closed && !res.open && !res.short ? V / res.R : 0;
        sl.forEach(function (x, i) { if (x) { res.ib[i] = res.I; res.br[i] = x === "bulb" ? res.I * res.I * 6 / 24 : 0; } });
      } else {
        var g = 0, any = false;
        sl.forEach(function (x) { if (x) { any = true; if (PART[x].r === 0) res.short = true; else g += 1 / PART[x].r; } });
        res.open = !any; res.R = any && !res.short ? 1 / g : 0;
        res.I = closed && any && !res.short ? V * g : 0;
        sl.forEach(function (x, i) { if (x && !res.short && closed) { res.ib[i] = V / PART[x].r; res.br[i] = x === "bulb" ? 1 : 0; } });
      }
      var bulbs = sl.filter(function (x) { return x === "bulb"; }).length, empty = sl.filter(function (x) { return !x; }).length;
      out.innerHTML = res.short ? '<b class="no-t">⚠️ ' + t("Short circuit! A plain wire gives almost no resistance. The battery would overheat.", "دائرة قصر! السلك وحده مقاومته تقريبًا صفر، والبطارية سترتفع حرارتها.") + "</b>"
        : '<span>' + t("Equivalent resistance: ", "المقاومة المكافئة: ") + "<b>" + (res.open ? "∞" : n(Math.round(res.R * 100) / 100) + " Ω") + "</b></span><span>" + t("Total current: ", "شدة التيار الكلية: ") + "<b>" + n(Math.round(res.I * 100) / 100) + " A</b></span><span>" + t("Power: ", "القدرة: ") + "<b>" + n(Math.round(res.I * 12 * 10) / 10) + " W</b></span>" + (res.open && mode === "series" ? '<span class="chip">' + t("Open circuit: one path is broken", "دائرة مفتوحة: المسار الوحيد مقطوع") + "</span>" : "");
      if (!res.short && closed) {
        if (mode === "series" && !res.open && Math.abs(res.R - 18) < 1e-9) tick(0);
        if (mode === "parallel" && Math.abs(res.R - 2) < 1e-9) tick(1);
        if (mode === "series" && empty >= 1 && bulbs >= 1) tick(2);
        if (mode === "parallel" && bulbs >= 1 && calc.hadThree && bulbs < 3 && empty >= 1) tick(3);
      }
      if (mode === "parallel" && bulbs === 3) calc.hadThree = true;
    }
    function hitSlot(p) { for (var i = 0; i < 3; i++) { var s = slotPos(i); if (Math.abs(p.x - s.x) < 34 && Math.abs(p.y - s.y) < 26) return i; } return -1; }
    S.drag({
      down: function (p) {
        var g = geo();
        if (Math.abs(p.x - g.x) < 30 && Math.abs(p.y - (g.y + g.h * 0.85)) < 22) { closed = !closed; calc(); return false; }
        var tl = tools().filter(function (q) { return Math.abs(p.x - q.x) < 40 && Math.abs(p.y - q.y) < 24; })[0];
        if (tl) { drag = { k: tl.k, x: p.x, y: p.y, from: -1 }; return true; }
        var si = hitSlot(p);
        if (si >= 0 && slots[mode][si]) { drag = { k: slots[mode][si], x: p.x, y: p.y, from: si }; slots[mode][si] = null; calc(); return true; }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function (p) { if (!drag) return; var si = hitSlot(p); if (si >= 0) { slots[mode][si] = drag.k; E.speak(T(PART[drag.k].n)); } drag = null; calc(); },
      hover: function (p) { return hitSlot(p) >= 0 || tools().some(function (q) { return Math.abs(p.x - q.x) < 40 && Math.abs(p.y - q.y) < 24; }); }
    });
    calc();
    function drawPart(c, k, x, y, glow, C) {
      if (k === "bulb") {
        if (glow > 0) { var gr = c.createRadialGradient(x, y, 2, x, y, 40); gr.addColorStop(0, "rgba(250,204,21," + Math.min(0.9, glow) + ")"); gr.addColorStop(1, "rgba(250,204,21,0)"); c.fillStyle = gr; c.beginPath(); c.arc(x, y, 40, 0, 7); c.fill(); }
        K.dot(c, x, y, 14, glow > 0 ? "#fde047" : C.card, C.ink); c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(x - 7, y - 7); c.lineTo(x + 7, y + 7); c.moveTo(x + 7, y - 7); c.lineTo(x - 7, y + 7); c.stroke();
      } else if (k === "res") { c.fillStyle = "#ddd6fe"; c.strokeStyle = C.ink; c.lineWidth = 2; c.fillRect(x - 22, y - 9, 44, 18); c.strokeRect(x - 22, y - 9, 44, 18); K.txt(c, "3Ω", x, y, { c: "#4c1d95", s: 11 }); }
      else { c.strokeStyle = "#f59e0b"; c.lineWidth = 6; c.beginPath(); c.moveTo(x - 24, y); c.lineTo(x + 24, y); c.stroke(); }
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), sl = slots[mode];
      c.clearRect(0, 0, W, H);
      c.strokeStyle = "#f59e0b"; c.lineWidth = 5;
      if (mode === "series") { c.strokeRect(g.x, g.y, g.w, g.h); }
      else {
        c.beginPath(); c.moveTo(g.x, g.y); c.lineTo(g.x, g.y + g.h); c.lineTo(g.x + g.w, g.y + g.h); c.lineTo(g.x + g.w, g.y); c.lineTo(g.x + g.w * 0.25, g.y); c.lineTo(g.x, g.y); c.stroke();
        for (var b = 0; b < 3; b++) { var py = slotPos(b).y; c.beginPath(); c.moveTo(g.x + g.w * 0.25, g.y); c.lineTo(g.x + g.w * 0.25, py); c.lineTo(g.x + g.w * 0.85, py); c.lineTo(g.x + g.w * 0.85, g.y + g.h); c.stroke(); }
      }
      // battery + switch on the left
      c.fillStyle = C.card; c.fillRect(g.x - 16, g.y + g.h * 0.3, 32, g.h * 0.3); c.fillStyle = "#16a34a"; c.fillRect(g.x - 12, g.y + g.h * 0.33, 24, g.h * 0.24); K.txt(c, "12V", g.x, g.y + g.h * 0.45, { c: "#fff", s: 10 });
      var sy = g.y + g.h * 0.85; c.fillStyle = C.card; c.fillRect(g.x - 8, sy - 22, 16, 44); c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.moveTo(g.x, sy + 18); c.lineTo(closed ? g.x : g.x + 16, sy - 18); c.stroke();
      K.txt(c, closed ? "ON" : "OFF", g.x + 26, sy, { c: closed ? "#16a34a" : "#ef4444", s: 11, a: "left" });
      // slots + parts + electrons
      for (var i = 0; i < 3; i++) {
        var s = slotPos(i);
        if (!sl[i]) { c.setLineDash([5, 4]); c.strokeStyle = C.muted; c.lineWidth = 2; c.fillStyle = C.bg; c.fillRect(s.x - 30, s.y - 20, 60, 40); c.strokeRect(s.x - 30, s.y - 20, 60, 40); c.setLineDash([]); }
        else {
          drawPart(c, sl[i], s.x, s.y, res.br[i], C);
          if (res.ib[i] > 0) {
            phase[i] = (phase[i] + dt * res.ib[i] * 0.12) % 1;
            for (var e = 0; e < 4; e++) { var f = (phase[i] + e / 4) % 1; var ex = mode === "series" ? g.x + g.w * f : g.x + g.w * (0.25 + 0.6 * f); var ey = s.y; K.dot(c, ex, ey, 3.5, "#2563eb"); }
            K.txt(c, n(Math.round(res.ib[i] * 100) / 100) + " A", s.x, s.y + 32, { c: C.muted, s: 11 });
          }
        }
      }
      // toolbox
      c.fillStyle = C.bg; K.rr(c, W * 0.06, g.tb - 30, W * 0.88, 60, 14); c.fill();
      tools().forEach(function (q) { drawPart(c, q.k, q.x, q.y - 6, 0, C); K.txt(c, T(PART[q.k].n), q.x, q.y + 18, { c: C.muted, s: 11 }); });
      if (drag) drawPart(c, drag.k, drag.x, drag.y, 0, C);
    });
  };
})();
