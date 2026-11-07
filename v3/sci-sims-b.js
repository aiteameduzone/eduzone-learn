/* EduZone Learn v3 - Science · Prep 3 simulation labs (part B).
   emlab (electromagnet + compass + motor/generator), peas (genetic crosses with chance),
   selection (be the bird: natural selection), dig (fossil time-lapse + excavation), decay (half-life). */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }

  /* =========================================================
     6. emlab - electromagnet with draggable compass, clips, motor and generator
     ========================================================= */
  L.emlab = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the current and the turns. Drag the compass around the coil to explore the magnetic field. Then switch to the motor.", "اضبط شدة التيار وعدد اللفات، واسحب البوصلة حول الملف لتستكشف المجال المغناطيسي، ثم انتقل إلى المحرك.")) + '<div class="seg" id="emm"></div>';
    var S = K.make(host, 0.6, 370), mode = "magnet", cur = 0, turns = 40, core = true, comp = { x: 0, y: 0 }, dragC = false, clips = [], ang = 0, omega = 0, gen = false, crank = null, emf = 0, flips = { pos: false, neg: false };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Current (− reverses it)", "شدة التيار (السالب يعكسه)"), -5, 5, 1, 0, "A") + '<div class="em-mag">' + L._slider(t("Turns of wire", "عدد اللفات"), 10, 100, 10, 40) + '<div class="btn-row"><button type="button" class="btn sm tg on" id="core">🔩 ' + t("Soft iron core", "قلب الحديد المطاوع") + '</button></div></div><div class="em-mot" hidden><div class="btn-row"><button type="button" class="btn sm tg" id="gen">🚲 ' + t("Generator mode: spin it yourself", "وضع المولد: أدره بنفسك") + '</button></div></div><div class="meter em-out"></div>';
    var tick = L._goals(host, [t("Switch on a current and watch the compasses turn (Oersted).", "شغّل التيار وراقب البوصلات تنحرف (أورستد)."), t("Reverse the current: the needles flip.", "اعكس التيار: تنقلب الإبر."), t("Lift 10 paper clips or more.", "ارفع ١٠ مشابك ورق أو أكثر."),
      t("Run the motor.", "شغّل المحرك."), t("Generator: spin the coil and light the bulb.", "المولد: أدر الملف وأضئ المصباح.")], done);
    K.seg(host, "#emm", [["magnet", "🧲 " + t("Electromagnet", "المغناطيس الكهربي")], ["motor", "⚙️ " + t("Motor and generator", "المحرك والمولد")]], mode, function (v) { mode = v; ctl.querySelector(".em-mag").hidden = v !== "magnet"; ctl.querySelector(".em-mot").hidden = v !== "motor"; });
    var ins = ctl.querySelectorAll("input");
    function strength() { return Math.abs(cur) * turns * (core ? 1 : 0.12) / 25; }
    function upd() { var sl = ctl.querySelectorAll(".slv"); sl[0].textContent = n(cur) + " A"; sl[1].textContent = n(turns); }
    ins[0].oninput = function () { cur = Number(ins[0].value); upd(); if (cur > 0) flips.pos = true; if (cur < 0) flips.neg = true; if (cur !== 0) tick(0); if (flips.pos && flips.neg) tick(1); };
    ins[1].oninput = function () { turns = Number(ins[1].value); upd(); };
    ctl.querySelector("#core").onclick = function () { core = !core; this.classList.toggle("on", core); };
    ctl.querySelector("#gen").onclick = function () { gen = !gen; this.classList.toggle("on", gen); omega = 0; };
    upd();
    function g() { return { cx: S.W * 0.45, cy: S.H * 0.45 }; }
    comp.x = S.W * 0.2; comp.y = S.H * 0.2;
    for (var i = 0; i < 20; i++) clips.push({ hx: 0, hy: 0, x: 0, y: 0, on: false, i: i });
    function clipHome(cl) { cl.hx = S.W * 0.62 + (cl.i % 10) * 10; cl.hy = S.H * 0.9 - Math.floor(cl.i / 10) * 8; }
    clips.forEach(function (cl) { clipHome(cl); cl.x = cl.hx; cl.y = cl.hy; });
    S.onSize = function () { clips.forEach(clipHome); };
    function field(x, y) { // simple dipole field of the coil, axis horizontal, N on the right when cur > 0
      var o = g(), m = (cur > 0 ? 1 : -1) * strength(), dx = x - o.cx, dy = y - o.cy, r2 = dx * dx + dy * dy + 400, r = Math.sqrt(r2), r5 = r2 * r2 * r;
      var bx = m * (3 * dx * dx - r2) / r5, by = m * (3 * dx * dy) / r5;
      return { x: bx * 1e5, y: by * 1e5 };
    }
    S.drag({
      down: function (p) {
        if (mode === "magnet" && Math.hypot(p.x - comp.x, p.y - comp.y) < 26) { dragC = true; return true; }
        if (mode === "motor" && gen) { var o = g(); crank = Math.atan2(p.y - o.cy, p.x - o.cx); return true; }
        return false;
      },
      move: function (p) {
        if (dragC) { comp.x = p.x; comp.y = p.y; }
        if (crank != null) { var o = g(), a = Math.atan2(p.y - o.cy, p.x - o.cx), d = a - crank; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; omega = omega * 0.6 + d * 25; crank = a; }
      },
      up: function () { dragC = false; crank = null; },
      hover: function (p) { return (mode === "magnet" && Math.hypot(p.x - comp.x, p.y - comp.y) < 26) || (mode === "motor" && gen); }
    });
    function needle(c, x, y, r, C, fx, fy) {
      var a = (fx === 0 && fy === 0) ? -Math.PI / 2 : Math.atan2(fy, fx);
      var mag = Math.hypot(fx, fy); if (mag < 0.02) a = -Math.PI / 2; // points to Earth's north when the field is weak
      K.dot(c, x, y, r, C.card, C.muted);
      c.save(); c.translate(x, y); c.rotate(a); c.fillStyle = "#ef4444"; c.beginPath(); c.moveTo(r - 3, 0); c.lineTo(0, -4); c.lineTo(0, 4); c.fill(); c.fillStyle = "#64748b"; c.beginPath(); c.moveTo(-r + 3, 0); c.lineTo(0, -4); c.lineTo(0, 4); c.fill(); c.restore();
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = g();
      c.clearRect(0, 0, W, H);
      if (mode === "magnet") {
        var st = strength();
        // field lines
        if (cur !== 0) {
          c.strokeStyle = "rgba(59,130,246," + Math.min(0.5, 0.1 + st * 0.03) + ")"; c.lineWidth = 1.5;
          [30, 55, 85, 120].forEach(function (k) { c.beginPath(); c.ellipse(o.cx, o.cy - k * 0.5, k + 40, k * 0.55, 0, 0, 7); c.stroke(); c.beginPath(); c.ellipse(o.cx, o.cy + k * 0.5, k + 40, k * 0.55, 0, 0, 7); c.stroke(); });
        }
        // core + coil
        c.globalAlpha = core ? 1 : 0.15; c.fillStyle = "#64748b"; K.rr(c, o.cx - 70, o.cy - 9, 140, 18, 8); c.fill(); c.globalAlpha = 1;
        var nt = Math.round(turns / 10) * 2;
        for (var k2 = 0; k2 < nt; k2++) { var xx = o.cx - 60 + k2 * (120 / nt); c.strokeStyle = cur !== 0 ? "#f59e0b" : "#b45309"; c.lineWidth = 3; c.beginPath(); c.ellipse(xx, o.cy, 4, 16, 0, 0, 7); c.stroke(); }
        if (cur !== 0) { K.txt(c, cur > 0 ? "S" : "N", o.cx - 86, o.cy, { c: cur > 0 ? "#3b82f6" : "#ef4444", s: 16 }); K.txt(c, cur > 0 ? "N" : "S", o.cx + 86, o.cy, { c: cur > 0 ? "#ef4444" : "#3b82f6", s: 16 }); }
        // battery wires
        c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(o.cx - 60, o.cy + 16); c.lineTo(o.cx - 60, H * 0.88); c.lineTo(o.cx - 20, H * 0.88); c.moveTo(o.cx + 60, o.cy + 16); c.lineTo(o.cx + 60, H * 0.88); c.lineTo(o.cx + 20, H * 0.88); c.stroke();
        c.fillStyle = "#16a34a"; c.fillRect(o.cx - 20, H * 0.88 - 9, 40, 18); K.txt(c, n(cur) + " A", o.cx, H * 0.88, { c: "#fff", s: 11 });
        // fixed compasses
        [[o.cx - 140, o.cy], [o.cx + 140, o.cy], [o.cx, o.cy - 70], [o.cx, o.cy + 70], [o.cx - 100, o.cy - 60], [o.cx + 100, o.cy + 60]].forEach(function (q) { var f = field(q[0], q[1]); needle(c, q[0], q[1], 13, C, f.x, f.y); });
        // draggable compass
        var f2 = field(comp.x, comp.y); needle(c, comp.x, comp.y, 22, C, f2.x, f2.y); K.txt(c, t("drag me", "اسحبني"), comp.x, comp.y + 32, { c: C.muted, s: 11 });
        // clips
        var lift = Math.min(20, Math.floor(st)), endX = cur >= 0 ? o.cx + 75 : o.cx + 75;
        clips.forEach(function (cl, j) {
          var want = j < lift;
          var tx = want ? endX + 6 + (j % 5) * 6 : cl.hx, ty = want ? o.cy + 12 + Math.floor(j / 5) * 9 : cl.hy;
          cl.x += (tx - cl.x) * Math.min(1, dt * 6); cl.y += (ty - cl.y) * Math.min(1, dt * 6);
          c.strokeStyle = "#94a3b8"; c.lineWidth = 2; K.rr(c, cl.x - 3, cl.y - 5, 6, 10, 3); c.stroke();
        });
        if (lift >= 10) tick(2);
        ctl.querySelector(".em-out").innerHTML = "<span>📎 <b>" + n(lift) + "</b> " + t("clips lifted", "مشبك مرفوع") + "</span>" + (cur === 0 ? '<span class="sub">' + t("No current: the compasses point north.", "لا تيار: البوصلات تشير إلى الشمال.") + "</span>" : "") + (!core && cur !== 0 ? '<span class="chip">' + t("Without the core the magnet is much weaker", "بدون القلب يصبح المغناطيس أضعف كثيرًا") + "</span>" : "");
      } else {
        // motor / generator
        if (!gen) { omega += ((cur * 2.2) - omega) * Math.min(1, dt * 1.5); emf = 0; if (Math.abs(cur) > 0) tick(3); }
        else { omega *= Math.pow(0.6, dt); emf = Math.abs(omega) * 0.25; if (emf > 1.2) tick(4); }
        ang += omega * dt;
        c.fillStyle = "#ef4444"; K.rr(c, o.cx - 150, o.cy - 60, 50, 120, 10); c.fill(); K.txt(c, "N", o.cx - 125, o.cy, { c: "#fff", s: 18 });
        c.fillStyle = "#3b82f6"; K.rr(c, o.cx + 100, o.cy - 60, 50, 120, 10); c.fill(); K.txt(c, "S", o.cx + 125, o.cy, { c: "#fff", s: 18 });
        c.strokeStyle = "rgba(100,116,139,.5)"; c.setLineDash([6, 6]); c.lineWidth = 1.5; for (var fl = -40; fl <= 40; fl += 20) { c.beginPath(); c.moveTo(o.cx - 100, o.cy + fl); c.lineTo(o.cx + 100, o.cy + fl); c.stroke(); } c.setLineDash([]);
        var wv = 70 * Math.cos(ang), front = Math.sin(ang) > 0;
        c.strokeStyle = front ? "#f59e0b" : "#b45309"; c.lineWidth = 7; c.strokeRect(o.cx - Math.abs(wv), o.cy - 50, Math.max(4, Math.abs(wv) * 2), 100);
        // split ring + brushes
        var ry = o.cy + 84; c.fillStyle = "#b45309"; c.beginPath(); c.arc(o.cx, ry, 16, ang, ang + Math.PI - 0.3); c.lineTo(o.cx, ry); c.fill(); c.beginPath(); c.arc(o.cx, ry, 16, ang + Math.PI, ang + 2 * Math.PI - 0.3); c.lineTo(o.cx, ry); c.fill();
        c.fillStyle = "#374151"; c.fillRect(o.cx - 30, ry - 7, 12, 14); c.fillRect(o.cx + 18, ry - 7, 12, 14);
        c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(o.cx, o.cy + 50); c.lineTo(o.cx, ry - 16); c.stroke();
        K.txt(c, t("split ring", "أسطوانة مشقوقة"), o.cx, ry + 30, { c: C.muted, s: 11 }); K.txt(c, t("brushes", "الفرشتان"), o.cx + 60, ry, { c: C.muted, s: 11, a: "left" });
        if (gen) {
          var bx = W * 0.86, by = H * 0.18, gl = Math.min(1, emf / 3);
          if (gl > 0.05) { var gr = c.createRadialGradient(bx, by, 2, bx, by, 46); gr.addColorStop(0, "rgba(250,204,21," + gl + ")"); gr.addColorStop(1, "rgba(250,204,21,0)"); c.fillStyle = gr; c.beginPath(); c.arc(bx, by, 46, 0, 7); c.fill(); }
          K.dot(c, bx, by, 14, gl > 0.05 ? "#fde047" : C.card, C.ink);
          K.txt(c, t("Drag in circles to spin the coil", "اسحب في دوائر لتدير الملف"), o.cx, 14, { c: "#f97316", s: 13 });
        }
        ctl.querySelector(".em-out").innerHTML = gen ? "<span>" + t("Spin speed: ", "سرعة الدوران: ") + "<b>" + n(Math.round(Math.abs(omega) * 10) / 10) + "</b></span><span>EMF: <b>" + n(Math.round(emf * 10) / 10) + " V</b></span><span class=\"sub\">" + t("Kinetic → electrical energy. Faster spinning = bigger EMF.", "طاقة حركية ← كهربية، والدوران الأسرع = قوة دافعة أكبر.") + "</span>"
          : "<span>" + t("Current: ", "التيار: ") + "<b>" + n(cur) + " A</b></span><span class=\"sub\">" + (cur === 0 ? t("Set a current to make the coil turn.", "اضبط تيارًا ليدور الملف.") : t("Electrical → kinetic energy. More current = faster; reverse it = other way.", "طاقة كهربية ← حركية، وتيار أكبر = أسرع، وعكسه = اتجاه معاكس.")) + "</span>";
      }
    });
  };

  /* =========================================================
     7. peas - breed pea plants: expected Punnett vs real chance
     ========================================================= */
  L.peas = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap a parent to change its alleles. Press Cross to grow 16 seeds. Try 'Real life (chance)' to see why real results wobble.", "اضغط على أحد الأبوين لتغيير أليلاته، ثم «تلقيح» لإنتاج ١٦ بذرة، وجرّب «الحياة الحقيقية (الصدفة)» لترى لماذا تتذبذب النتائج.")) +
      '<div class="cir-top"><div class="seg" id="pt"></div><div class="seg" id="pm"></div></div>';
    var S = K.make(host, 0.6, 380), two = "one", chance = "exp", P1 = ["Y", "y", "R", "r"], P2 = ["Y", "y", "R", "r"], kids = [], grow = 0, runs = 0, flying = [];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm primary" id="cross">🌱 ' + t("Cross ×16", "تلقيح ×١٦") + '</button><button type="button" class="btn sm" id="useF1">👪 ' + t("Use two offspring as parents", "استخدم ابنين كأبوين") + '</button></div><div class="meter pea-out"></div>';
    var tick = L._goals(host, [t("Cross pure yellow × pure green: all yellow.", "لقّح أصفر نقي × أخضر نقي: الكل أصفر."), t("Cross two hybrids (Yy × Yy) and see about 3 : 1.", "لقّح هجينين (Yy × Yy) وشاهد نحو ٣ : ١."), t("Two traits: get the 9 : 3 : 3 : 1 pattern.", "صفتان: احصل على النمط ٩ : ٣ : ٣ : ١."), t("Real life: cross 3 times and see the numbers change.", "الحياة الحقيقية: لقّح ٣ مرات وشاهد الأعداد تتغير.")], done);
    K.seg(host, "#pt", [["one", t("1 trait: colour", "صفة واحدة: اللون")], ["two", t("2 traits: + shape", "صفتان: + الشكل")]], two, function (v) { two = v; kids = []; draw(); });
    K.seg(host, "#pm", [["exp", t("Expected (Punnett)", "المتوقع (بانيت)")], ["real", t("Real life (chance)", "الحياة الحقيقية (الصدفة)")]], chance, function (v) { chance = v; runs = 0; });
    var CYC = [["Y", "Y"], ["Y", "y"], ["y", "y"]], CYR = [["R", "R"], ["R", "r"], ["r", "r"]];
    function gstr(p) { var a = (p[0] === "Y" || p[1] !== "Y" ? p[0] + p[1] : p[1] + p[0]); if (two === "two") a += " " + (p[2] === "R" || p[3] !== "R" ? p[2] + p[3] : p[3] + p[2]); return a; }
    function pheno(g) { return { yel: g[0] === "Y" || g[1] === "Y", round: g[2] === "R" || g[3] === "R" }; }
    function geo() { var W = S.W, H = S.H; return { p1: { x: W * 0.16, y: H * 0.26 }, p2: { x: W * 0.16, y: H * 0.7 }, gx: W * 0.42, gy: H * 0.1, cs: Math.min((W * 0.52) / 4, (H * 0.8) / 4) }; }
    function cycle(p) {
      var c1 = CYC.findIndex(function (x) { return x[0] === (p[0] === "Y" || p[1] !== "Y" ? p[0] : p[1]) && x[1] === (p[0] === "Y" || p[1] !== "Y" ? p[1] : p[0]); });
      var nx = CYC[(c1 + 1) % 3]; p[0] = nx[0]; p[1] = nx[1];
      if (two === "two" && c1 === 2) { var r1 = CYR.findIndex(function (x) { return (x[0] + x[1]) === ((p[2] === "R" || p[3] !== "R") ? p[2] + p[3] : p[3] + p[2]); }); var nr = CYR[(r1 + 1) % 3]; p[2] = nr[0]; p[3] = nr[1]; }
    }
    S.drag({ down: function (p) { var o = geo(); [[P1, o.p1], [P2, o.p2]].forEach(function (q) { if (Math.hypot(p.x - q[1].x, p.y - q[1].y) < 40) { cycle(q[0]); kids = []; E.speak(gstr(q[0]).split("").join(" ")); draw(); } }); return false; },
      hover: function (p) { var o = geo(); return Math.hypot(p.x - o.p1.x, p.y - o.p1.y) < 40 || Math.hypot(p.x - o.p2.x, p.y - o.p2.y) < 40; } });
    function gametes(p) { return two === "two" ? [[p[0], p[2]], [p[0], p[3]], [p[1], p[2]], [p[1], p[3]]] : [[p[0]], [p[1]], [p[0]], [p[1]]]; }
    function cross() {
      kids = []; var g1 = gametes(P1), g2 = gametes(P2);
      if (two === "two") {
        // expected = all 16 combinations; real = 16 random draws
        for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
          var a = chance === "real" ? g1[Math.floor(Math.random() * 4)] : g1[i], b = chance === "real" ? g2[Math.floor(Math.random() * 4)] : g2[j];
          kids.push([a[0], b[0], a[1], b[1]]);
        }
      } else {
        for (var k = 0; k < 16; k++) {
          var x = chance === "real" ? P1[Math.floor(Math.random() * 2)] : P1[(k >> 2) % 2], y = chance === "real" ? P2[Math.floor(Math.random() * 2)] : P2[k % 2];
          kids.push([x, y, "R", "R"]);
        }
      }
      grow = 0; flying = [];
      var c = count();
      if (two === "one" && c.y === 16 && ((P1[0] === "Y" && P1[1] === "Y" && P2[0] === "y" && P2[1] === "y") || (P2[0] === "Y" && P2[1] === "Y" && P1[0] === "y" && P1[1] === "y"))) tick(0);
      if (two === "one" && gstr(P1) === "Yy" && gstr(P2) === "Yy" && c.y >= 10 && c.y <= 14) tick(1);
      if (two === "two" && chance === "exp" && gstr(P1) === "Yy Rr" && gstr(P2) === "Yy Rr") tick(2);
      if (chance === "real") { runs++; if (runs >= 3) tick(3); }
      draw(); E.speak(t(c.y + " yellow and " + c.g + " green.", c.y + " صفراء و" + c.g + " خضراء."));
    }
    function count() { var r = { y: 0, g: 0, yr: 0, yw: 0, gr: 0, gw: 0 }; kids.forEach(function (k) { var p = pheno(k); if (p.yel) r.y++; else r.g++; if (p.yel && p.round) r.yr++; if (p.yel && !p.round) r.yw++; if (!p.yel && p.round) r.gr++; if (!p.yel && !p.round) r.gw++; }); return r; }
    function draw() {
      var c = count(), o = ctl.querySelector(".pea-out");
      if (!kids.length) { o.innerHTML = '<span class="sub">' + t("Parents: ", "الأبوان: ") + '<b dir="ltr">' + gstr(P1) + " × " + gstr(P2) + "</b></span>"; return; }
      o.innerHTML = '<span dir="ltr"><b>' + gstr(P1) + " × " + gstr(P2) + "</b></span>" + (two === "one"
        ? "<span>🟡 " + n(c.y) + " : 🟢 " + n(c.g) + "</span>"
        : "<span>🟡⚪ " + n(c.yr) + " · 🟡〰 " + n(c.yw) + " · 🟢⚪ " + n(c.gr) + " · 🟢〰 " + n(c.gw) + "</span>") + (chance === "real" ? '<span class="chip orange">' + t("Chance! Cross again.", "صدفة! لقّح مرة أخرى.") + "</span>" : "");
    }
    ctl.querySelector("#cross").onclick = cross;
    ctl.querySelector("#useF1").onclick = function () { if (kids.length < 2) { E.toast(t("Cross first.", "لقّح أولًا.")); return; } var a = kids[0], b = kids[1]; P1 = a.slice(); P2 = b.slice(); kids = []; draw(); E.toast(t("New parents: ", "الأبوان الجديدان: ") + gstr(P1) + " × " + gstr(P2)); };
    draw();
    function seed(c, x, y, r, gen, C) {
      var p = pheno(gen), col = p.yel ? "#facc15" : "#4ade80";
      c.save(); c.translate(x, y);
      if (two === "two" && !p.round) { c.beginPath(); for (var a = 0; a <= 12; a++) { var rr = r * (a % 2 ? 0.78 : 1), aa = a / 12 * Math.PI * 2; c.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); } c.closePath(); c.fillStyle = col; c.fill(); }
      else K.dot(c, 0, 0, r, col);
      c.strokeStyle = "rgba(0,0,0,.25)"; c.lineWidth = 1.5; c.beginPath(); c.arc(-r * 0.3, -r * 0.3, r * 0.3, 0, 7); c.stroke();
      c.restore();
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = geo();
      c.clearRect(0, 0, W, H);
      [[P1, o.p1, "♀"], [P2, o.p2, "♂"]].forEach(function (q) {
        c.strokeStyle = "#16a34a"; c.lineWidth = 4; c.beginPath(); c.moveTo(q[1].x, q[1].y + 40); c.lineTo(q[1].x, q[1].y - 20); c.stroke();
        c.fillStyle = "#86efac"; c.beginPath(); c.ellipse(q[1].x - 16, q[1].y + 4, 14, 7, -0.6, 0, 7); c.fill(); c.beginPath(); c.ellipse(q[1].x + 16, q[1].y + 4, 14, 7, 0.6, 0, 7); c.fill();
        seed(c, q[1].x, q[1].y - 26, 14, q[0], C);
        K.txt(c, q[2] + " " + gstr(q[0]), q[1].x, q[1].y + 54, { c: C.ink, s: 14 });
      });
      K.txt(c, t("tap a parent", "اضغط على أحد الأبوين"), o.p1.x, H - 8, { c: C.muted, s: 11 });
      K.txt(c, "×", o.p1.x, (o.p1.y + o.p2.y) / 2 + 8, { c: C.muted, s: 22 });
      grow = Math.min(16, grow + dt * 12);
      for (var i = 0; i < 16; i++) {
        var gx = o.gx + (i % 4) * o.cs + o.cs / 2, gy = o.gy + Math.floor(i / 4) * o.cs + o.cs / 2;
        c.fillStyle = C.bg; K.rr(c, gx - o.cs / 2 + 3, gy - o.cs / 2 + 3, o.cs - 6, o.cs - 6, 10); c.fill();
        if (kids[i] && i < grow) { var sc = Math.min(1, grow - i); seed(c, gx, gy - 6, o.cs * 0.22 * sc, kids[i], C); K.txt(c, gstr(kids[i]), gx, gy + o.cs * 0.3, { c: C.muted, s: Math.max(9, Math.min(12, o.cs * 0.16)) }); }
      }
    });
  };

  /* =========================================================
     8. selection - be the bird
     ========================================================= */
  L.selection = function (host, cfg, done) {
    host.innerHTML = hint(t("You are the bird! Press Hunt, then tap as many moths as you can in 8 seconds. The survivors have babies. Switch the bark to see natural selection.", "أنت الطائر! اضغط «صيد» ثم اضغط على أكبر عدد من الفراشات خلال ٨ ثوانٍ، والناجية تتكاثر، وغيّر لون الجذوع لترى الانتخاب الطبيعي.")) +
      '<div class="cir-top"><div class="seg" id="sb"></div><div class="btn-row"><button type="button" class="btn sm primary" id="hunt">🐦 ' + t("Hunt (8 s)", "صيد (٨ ث)") + '</button><button type="button" class="btn sm" id="auto">⏩ ' + t("Birds hunt for me", "دع الطيور تصطاد") + "</button></div></div>";
    var S = K.make(host, 0.56, 340), bark = "light", moths = [], gen = 0, hist = [], timer = 0, hunting = false, eaten = 0, reached = false, played = false;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Play the bird for one generation.", "كن الطائر لجيل واحد."), t("Sooty bark: make dark moths 80% or more.", "جذوع بها سناج: اجعل الفراشات الداكنة ٨٠٪ أو أكثر."), t("Clean bark again: bring light moths back to 80% or more.", "جذوع نظيفة مرة أخرى: أعد الفراشات الفاتحة إلى ٨٠٪ أو أكثر.")], done);
    K.seg(host, "#sb", [["light", "🌳 " + t("Clean bark", "جذوع نظيفة")], ["dark", "🏭 " + t("Sooty bark", "جذوع بها سناج")]], bark, function (v) { bark = v; });
    function place(dark) { return { x: K.rnd(0.04, 0.96), y: K.rnd(0.12, 0.92), d: dark, a: K.rnd(0, 6), alive: true }; }
    function populate(fracDark) { moths = []; for (var i = 0; i < 24; i++) moths.push(place(i < Math.round(fracDark * 24))); }
    populate(0.12); hist.push(0.12);
    function frac() { var a = moths.filter(function (m) { return m.alive; }); return a.length ? a.filter(function (m) { return m.d; }).length / a.length : 0; }
    function breed() {
      var alive = moths.filter(function (m) { return m.alive; });
      if (!alive.length) alive = [place(Math.random() < 0.5)];
      var next = [];
      for (var i = 0; i < 24; i++) { var p = alive[Math.floor(Math.random() * alive.length)], d = p.d; if (Math.random() < 0.03) d = !d; next.push(place(d)); }
      moths = next; gen++; var f = frac(); hist.push(f);
      if (bark === "dark" && f >= 0.8) { tick(1); reached = true; }
      if (reached && bark === "light" && f <= 0.2) tick(2);
      upd();
    }
    function upd() { var f = frac(); out.innerHTML = "<span>" + t("Generation ", "الجيل ") + "<b>" + n(gen) + "</b></span><span>⚫ " + n(Math.round(f * 100)) + "%</span><span>⚪ " + n(100 - Math.round(f * 100)) + "%</span>" + (hunting ? "<span>⏱ <b>" + n(Math.ceil(timer)) + "</b> · 🐦 " + n(eaten) + "</span>" : ""); }
    host.querySelector("#hunt").onclick = function () { if (hunting) return; hunting = true; timer = 8; eaten = 0; upd(); };
    host.querySelector("#auto").onclick = function () {
      if (hunting) return;
      moths.forEach(function (m) { var visible = m.d !== (bark === "dark"); if (Math.random() < (visible ? 0.55 : 0.12)) m.alive = false; });
      breed();
    };
    function treeY() { return S.H; }
    S.drag({ down: function (p) {
      if (!hunting) return false;
      var hit = moths.filter(function (m) { return m.alive && Math.hypot(p.x - m.x * S.W, p.y - m.y * treeY()) < 16; })[0];
      if (hit) { hit.alive = false; eaten++; upd(); }
      return false;
    } });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      // bark texture
      var base = bark === "dark" ? [41, 37, 36] : [231, 229, 228];
      c.fillStyle = "rgb(" + base.join(",") + ")"; c.fillRect(0, 0, W, H);
      for (var i = 0; i < 26; i++) { var x = (i * 97) % W, sh = (i % 3 - 1) * 18; c.strokeStyle = "rgb(" + (base[0] + sh) + "," + (base[1] + sh) + "," + (base[2] + sh) + ")"; c.lineWidth = 6 + (i % 4) * 3; c.beginPath(); c.moveTo(x, 0); c.bezierCurveTo(x + 20, H * 0.3, x - 20, H * 0.6, x + 10, H); c.stroke(); }
      if (bark === "light") for (i = 0; i < 18; i++) { K.dot(c, (i * 131) % W, (i * 73) % H, 10 + (i % 3) * 4, "rgba(163,190,140,.35)"); }
      // moths
      moths.forEach(function (m) {
        if (!m.alive) return;
        var x = m.x * W, y = m.y * H, col = m.d ? "#292524" : "#f5f5f4", edge = m.d ? "#57534e" : "#d6d3d1";
        c.save(); c.translate(x, y); c.rotate(Math.sin(m.a) * 0.4);
        c.fillStyle = col; c.strokeStyle = edge; c.lineWidth = 1;
        c.beginPath(); c.ellipse(-7, 0, 8, 6, -0.5, 0, 7); c.fill(); c.stroke(); c.beginPath(); c.ellipse(7, 0, 8, 6, 0.5, 0, 7); c.fill(); c.stroke();
        c.fillStyle = edge; c.fillRect(-1.5, -6, 3, 12); c.restore();
      });
      if (hunting) {
        timer -= dt;
        c.fillStyle = "rgba(249,115,22,.85)"; c.fillRect(0, 0, W * Math.max(0, timer / 8), 6);
        if (timer <= 0) { hunting = false; played = true; tick(0); breed(); E.speak(t("Survivors had babies.", "الناجون أنجبوا.")); }
      }
      // population graph
      var gw = Math.min(160, W * 0.35), gh = 54, gx = W - gw - 8, gy = 8;
      c.fillStyle = "rgba(255,255,255,.85)"; K.rr(c, gx, gy, gw, gh, 8); c.fill();
      var hs = hist.slice(-20);
      c.strokeStyle = "#292524"; c.lineWidth = 2; c.beginPath(); hs.forEach(function (v, j) { var px = gx + 6 + j * (gw - 12) / Math.max(1, hs.length - 1), py = gy + gh - 6 - v * (gh - 12); if (j) c.lineTo(px, py); else c.moveTo(px, py); }); c.stroke();
      K.txt(c, t("% dark", "٪ داكن"), gx + 6, gy + 10, { a: "left", c: "#57534e", s: 10 });
    });
  };

  /* =========================================================
     9. dig - fossil time-lapse + excavation
     ========================================================= */
  L.dig = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the time slider to watch a fossil form over millions of years. Then dig: rub the rock to uncover three fossils.", "اسحب شريط الزمن لترى تكوّن الحفرية عبر ملايين السنين، ثم احفر: امسح الصخر لتكشف ثلاث حفريات.")) + '<div class="seg" id="dm"></div>';
    var S = K.make(host, 0.58, 360), mode = "time", tl = 0, cover = null, found = [false, false, false], tlDone = false;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="dg-time">' + L._slider(t("Time", "الزمن"), 0, 100, 1, 0) + '</div><div class="meter dig-out"></div>';
    var tick = L._goals(host, [t("Slide time to the end: from living animal to found fossil.", "اسحب الزمن حتى النهاية: من الحيوان الحي إلى الحفرية المكتشفة."), t("Dig up all three fossils.", "اكشف الحفريات الثلاث.")], done);
    K.seg(host, "#dm", [["time", "⏳ " + t("Time-lapse", "مرور الزمن")], ["dig", "⛏️ " + t("Dig site", "موقع الحفر")]], mode, function (v) { mode = v; ctl.querySelector(".dg-time").hidden = v !== "time"; desc(); });
    var STAGES = [[0, ["An ammonite swims in an ancient sea.", "حيوان أمونيت يسبح في بحر قديم."]], [15, ["It dies and sinks to the sea floor.", "يموت ويغوص إلى قاع البحر."]], [30, ["Mud and sand bury it quickly, before it decays.", "يدفنه الطين والرمل بسرعة قبل أن يتحلل."]],
      [50, ["More layers press the sediment into rock.", "طبقات أكثر تضغط الرواسب فتصبح صخرًا."]], [65, ["Minerals soak in and replace the shell: it becomes stone.", "تتسرب المعادن وتحل محل الصدفة فتصبح حجرًا."]], [80, ["Earth movements lift the rock above the sea.", "حركات الأرض ترفع الصخر فوق البحر."]], [92, ["Erosion wears the top away and the fossil is found!", "التعرية تزيل الطبقات العليا وتظهر الحفرية!"]]];
    var ins = ctl.querySelectorAll("input"), lastStage = -1;
    function stage() { var s = 0; STAGES.forEach(function (x, i) { if (tl >= x[0]) s = i; }); return s; }
    function desc() {
      var o = ctl.querySelector(".dig-out");
      if (mode === "time") { var s = stage(); o.innerHTML = "<span>⏳ " + n(Math.round(tl * 1.5)) + " " + t("million years", "مليون سنة") + "</span><span><b>" + esc(T(STAGES[s][1])) + "</b></span>"; if (s !== lastStage) { lastStage = s; E.speak(T(STAGES[s][1])); } }
      else o.innerHTML = ["🦴 " + t("Body fossil: bones", "حفرية جسم: عظام"), "👣 " + t("Trace fossil: footprints", "حفرية آثار: آثار أقدام"), "🐚 " + t("Mold of a shell", "قالب صدفة")].map(function (x, i) { return '<span class="chip' + (found[i] ? " green" : "") + '">' + (found[i] ? "✓ " + x : "❓ " + t("hidden", "مخفية")) + "</span>"; }).join("");
    }
    ins[0].oninput = function () { tl = Number(ins[0].value); ctl.querySelector(".slv").textContent = ""; desc(); if (tl >= 95 && !tlDone) { tlDone = true; tick(0); } };
    desc();
    function makeCover() {
      cover = document.createElement("canvas"); var d = window.devicePixelRatio || 1; cover.width = S.W * d; cover.height = S.H * d;
      var x = cover.getContext("2d"); x.setTransform(d, 0, 0, d, 0, 0);
      for (var i = 0; i < 6; i++) { x.fillStyle = ["#c8a27a", "#b8875e", "#d6b48c", "#a77b55", "#c99d71", "#b28457"][i]; x.fillRect(0, i * S.H / 6, S.W, S.H / 6 + 1); }
      for (i = 0; i < 300; i++) { x.fillStyle = "rgba(0,0,0," + K.rnd(0.03, 0.12) + ")"; x.fillRect(K.rnd(0, S.W), K.rnd(0, S.H), 3, 3); }
    }
    function fossilSpots() { return [{ x: S.W * 0.22, y: S.H * 0.55 }, { x: S.W * 0.52, y: S.H * 0.35 }, { x: S.W * 0.8, y: S.H * 0.65 }]; }
    function revealed(sp) {
      var x = cover.getContext("2d"), d = window.devicePixelRatio || 1, dat = x.getImageData((sp.x - 30) * d, (sp.y - 30) * d, 60 * d, 60 * d).data, clear = 0, tot = 0;
      for (var i = 3; i < dat.length; i += 16) { tot++; if (dat[i] < 40) clear++; }
      return clear / tot;
    }
    S.onSize = function () { if (cover) makeCover(); };
    var digging = false;
    function scrape(p) { var x = cover.getContext("2d"); x.globalCompositeOperation = "destination-out"; x.fillStyle = "#000"; x.beginPath(); x.arc(p.x, p.y, 18, 0, 7); x.fill(); x.globalCompositeOperation = "source-over"; }
    S.drag({
      down: function (p) { if (mode !== "dig") return false; if (!cover) makeCover(); digging = true; scrape(p); return true; },
      move: function (p) {
        if (!digging) return; scrape(p);
        fossilSpots().forEach(function (sp, i) { if (!found[i] && revealed(sp) > 0.55) { found[i] = true; desc(); E.speak(i === 0 ? t("A body fossil: bones!", "حفرية جسم: عظام!") : i === 1 ? t("A trace fossil: footprints!", "حفرية آثار: آثار أقدام!") : t("A mold of a shell!", "قالب صدفة!")); if (found.every(Boolean)) tick(1); } });
      },
      up: function () { digging = false; }
    });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      c.clearRect(0, 0, W, H);
      if (mode === "time") {
        var s = stage(), up = Math.max(0, Math.min(1, (tl - 80) / 12)), ero = Math.max(0, Math.min(1, (tl - 90) / 10));
        var sea = H * (0.12 + up * 0.5);
        c.fillStyle = up > 0.5 ? "#bae6fd" : "#7dd3fc"; c.fillRect(0, 0, W, H);
        c.fillStyle = "#0369a1"; c.globalAlpha = 1 - up * 0.9; c.fillRect(0, sea, W, H - sea); c.globalAlpha = 1;
        var nl = Math.max(0, Math.min(6, Math.floor((tl - 25) / 6))), lh = H * 0.07, floor = H * 0.92 - up * H * 0.35;
        var keep = Math.round(nl - ero * 4);
        for (var i = 0; i < Math.max(0, keep); i++) { c.fillStyle = ["#d6b48c", "#c8a27a", "#b8875e", "#a77b55", "#c99d71", "#b28457"][i % 6]; c.fillRect(0, floor - (i + 1) * lh, W, lh + 1); }
        c.fillStyle = "#92400e"; c.fillRect(0, floor, W, H - floor);
        var ax = W * 0.5, ay = s === 0 ? H * 0.35 + Math.sin(performance.now() / 500) * 10 : floor - 10;
        if (s === 0) ax += Math.sin(performance.now() / 900) * 40;
        c.save(); c.translate(ax, ay);
        c.fillStyle = s >= 4 ? "#78716c" : s >= 1 ? "#a8a29e" : "#f59e0b";
        c.beginPath(); for (var a = 0; a < 40; a++) { var r = 3 + a * 0.75, aa = a * 0.5; c.lineTo(Math.cos(aa) * r, Math.sin(aa) * r); } c.lineWidth = 6; c.strokeStyle = c.fillStyle; c.stroke();
        c.restore();
        if (s === 6) { K.txt(c, "🔍", ax + 40, ay - 30, { s: 28 }); }
        K.txt(c, t("sea", "بحر"), 30, sea + 14, { c: "#e0f2fe", s: 12, a: "left" });
      } else {
        if (!cover) makeCover();
        c.fillStyle = "#e7d3b5"; c.fillRect(0, 0, W, H);
        var sp = fossilSpots();
        // bones
        c.strokeStyle = "#f5f5f4"; c.lineWidth = 7; c.lineCap = "round"; c.beginPath(); c.moveTo(sp[0].x - 26, sp[0].y - 10); c.lineTo(sp[0].x + 26, sp[0].y + 10); c.moveTo(sp[0].x - 20, sp[0].y + 14); c.lineTo(sp[0].x + 18, sp[0].y - 14); c.stroke();
        // footprints
        [[-18, 10], [0, -6], [18, 10]].forEach(function (q) { K.dot(c, sp[1].x + q[0], sp[1].y + q[1], 7, "#78350f"); for (var k = -1; k <= 1; k++) K.dot(c, sp[1].x + q[0] + k * 6, sp[1].y + q[1] - 10, 3, "#78350f"); });
        // shell mold
        c.strokeStyle = "#78716c"; c.lineWidth = 4; c.beginPath(); for (var a2 = 0; a2 < 36; a2++) { var r2 = 2 + a2 * 0.6, aa2 = a2 * 0.5; c.lineTo(sp[2].x + Math.cos(aa2) * r2, sp[2].y + Math.sin(aa2) * r2); } c.stroke();
        c.drawImage(cover, 0, 0, W, H);
        K.txt(c, t("⛏️ rub to dig", "⛏️ امسح لتحفر"), W / 2, 14, { c: "#fff", s: 13 });
      }
    });
  };

  /* =========================================================
     10. decay - radioactive atoms and half-life
     ========================================================= */
  L.decay = function (host, cfg, done) {
    host.innerHTML = hint(t("Press Play and watch the atoms decay at random. Count how long it takes for half of them to change: that is the half-life.", "اضغط تشغيل وراقب الذرات تتحلل عشوائيًا، واحسب الزمن حتى يتحول نصفها: هذا هو عمر النصف.")) + '<div class="seg" id="iso"></div>';
    var ISO = { c14: { hl: 5730, n: ["Carbon-14", "الكربون ١٤"], u: ["years", "سنة"] }, u238: { hl: 4.5e9, n: ["Uranium-238", "اليورانيوم ٢٣٨"], u: ["years", "سنة"] } };
    var S = K.make(host, 0.52, 330), iso = "c14", atoms = [], tm = 0, play = false, hist = [], marks = {}, N = 100;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm primary" id="pl">▶ ' + t("Play", "تشغيل") + '</button><button type="button" class="btn sm ghost" id="rs">↺ ' + t("Reset", "إعادة") + '</button></div><div class="meter dc-out"></div>';
    var tick = L._goals(host, [t("Watch until half of the carbon-14 is left (one half-life).", "راقب حتى يتبقى نصف الكربون ١٤ (عمر نصف واحد)."), t("Keep going until only a quarter is left (two half-lives).", "استمر حتى يتبقى الربع فقط (عمرا نصف)."), t("Switch to uranium-238 and see a half-life of billions of years.", "انتقل إلى اليورانيوم ٢٣٨ وشاهد عمر نصف بمليارات السنين.")], done);
    K.seg(host, "#iso", Object.keys(ISO).map(function (k) { return [k, T(ISO[k].n)]; }), iso, function (v) { iso = v; reset(); if (v === "u238") tick(2); });
    function reset() { atoms = []; for (var i = 0; i < N; i++) atoms.push({ p: true, f: 0 }); tm = 0; hist = [[0, 1]]; marks = {}; upd(); }
    function left() { return atoms.filter(function (a) { return a.p; }).length; }
    function yrs(x) { var h = ISO[iso].hl * x; return h >= 1e9 ? n(Math.round(h / 1e8) / 10) + " " + t("billion years", "مليار سنة") : n(Math.round(h)) + " " + T(ISO[iso].u); }
    function upd() {
      var l = left();
      ctl.querySelector(".dc-out").innerHTML = "<span>" + t("Parent atoms left: ", "الذرات الأصلية المتبقية: ") + "<b>" + n(l) + "%</b></span><span>" + t("Time: ", "الزمن: ") + "<b>" + yrs(tm) + "</b></span><span>" + t("Half-lives: ", "أعمار النصف: ") + "<b>" + n(Math.round(tm * 10) / 10) + "</b></span>";
    }
    ctl.querySelector("#pl").onclick = function () { play = !play; this.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play", "تشغيل"); };
    ctl.querySelector("#rs").onclick = reset;
    reset();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (play) {
        var step = dt * 0.35; tm += step;
        var pr = 1 - Math.pow(0.5, step);
        atoms.forEach(function (a) { if (a.p && Math.random() < pr) { a.p = false; a.f = 1; } });
        hist.push([tm, left() / N]);
        var l = left();
        if (l <= 50 && !marks.h1) { marks.h1 = tm; if (iso === "c14") tick(0); E.speak(t("Half left after " + yrs(tm), "تبقّى النصف بعد " + yrs(tm))); }
        if (l <= 25 && !marks.h2) { marks.h2 = tm; if (iso === "c14") tick(1); }
        if (l <= 1) play = false;
        upd();
      }
      c.clearRect(0, 0, W, H);
      // atom grid (left)
      var gw = Math.min(W * 0.42, H * 0.9), cs = gw / 10, ox = 10, oy = (H - gw) / 2;
      atoms.forEach(function (a, i) {
        var x = ox + (i % 10) * cs + cs / 2, y = oy + Math.floor(i / 10) * cs + cs / 2;
        if (a.f > 0) { a.f -= dt * 2; K.dot(c, x, y, cs * 0.5 * (1 + (1 - a.f)), "rgba(250,204,21," + Math.max(0, a.f) * 0.6 + ")"); }
        K.dot(c, x, y, cs * 0.36, a.p ? "#f97316" : C.line);
      });
      // graph (right)
      var gx = ox + gw + 30, gwid = W - gx - 14, gy = 16, gh = H - 46;
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx, gy + gh); c.lineTo(gx + gwid, gy + gh); c.stroke();
      var maxT = Math.max(4, Math.ceil(tm));
      for (var h = 1; h <= maxT; h++) { var hx = gx + gwid * h / maxT; c.strokeStyle = C.line; c.lineWidth = 1; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(hx, gy); c.lineTo(hx, gy + gh); c.stroke(); c.setLineDash([]); K.txt(c, n(h), hx, gy + gh + 12, { c: C.muted, s: 10 }); }
      [0.5, 0.25].forEach(function (v) { var vy = gy + gh * (1 - v); c.strokeStyle = "rgba(249,115,22,.35)"; c.beginPath(); c.moveTo(gx, vy); c.lineTo(gx + gwid, vy); c.stroke(); K.txt(c, n(v * 100) + "%", gx - 4, vy, { a: "right", c: C.muted, s: 10 }); });
      c.strokeStyle = "#f97316"; c.lineWidth = 3; c.beginPath();
      hist.forEach(function (p2, j) { var px = gx + gwid * p2[0] / maxT, py = gy + gh * (1 - p2[1]); if (j) c.lineTo(px, py); else c.moveTo(px, py); }); c.stroke();
      K.txt(c, t("half-lives →", "أعمار النصف ←"), gx + gwid - 4, gy + gh + 26, { a: "right", c: C.muted, s: 10 });
    });
  };
})();
