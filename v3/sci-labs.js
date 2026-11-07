/* EduZone Learn v3 - Science · Prep 3 hands-on labs.
   EZ3.sciLabs[type](host, cfg, done) - call done() once every goal is reached. No scoring. */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var L = E.sciLabs = {};

  /* goal checklist shared by the labs */
  function goals(host, list, done) {
    var box = E.el("div", "goals card-in");
    box.innerHTML = "<b>🎯 " + t("Goals", "الأهداف") + '</b><ol>' + list.map(function (g) { return "<li>" + g + "</li>"; }).join("") + "</ol>";
    host.appendChild(box);
    var got = {};
    return function tick(i) {
      if (got[i]) return;
      got[i] = 1;
      var li = box.querySelectorAll("li")[i];
      if (li) { li.classList.add("ok"); li.classList.add("pop"); }
      E.toast("✅ " + li.textContent);
      if (Object.keys(got).length === list.length) setTimeout(done, 400);
    };
  }
  function slider(label, min, max, step, val, unit) {
    return '<label class="sl"><span>' + label + ' <b class="slv"></b></span><input type="range" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '" data-unit="' + (unit || "") + '"></label>';
  }

  /* ---------- sort: tap an item, then its group ---------- */
  L.sort = function (host, cfg, done) {
    var items = E.shuffle(cfg.items.map(function (x, i) { return { i: i, html: typeof x[0] === "string" ? x[0] : esc(T(x[0])), bin: x[1] }; }));
    var sel = null, left = items.length;
    host.innerHTML = '<p class="lab-prompt">' + esc(T(cfg.prompt)) + '</p><div class="sl-pool">' +
      items.map(function (it) { return '<button type="button" class="sl-item" data-i="' + it.i + '">' + it.html + "</button>"; }).join("") +
      '</div><div class="sl-bins">' + cfg.bins.map(function (b) {
        return '<div class="sl-bin" data-b="' + b[0] + '" role="button" tabindex="0"><div class="sl-head">' + b[1] + " " + esc(E.isAr() ? b[3] : b[2]) + '</div><div class="sl-in"></div></div>';
      }).join("") + "</div>";
    host.querySelectorAll(".sl-item").forEach(function (b) {
      b.onclick = function () {
        if (b.classList.contains("placed")) return;
        host.querySelectorAll(".sl-item.sel").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel"); sel = b;
        E.speak(b.textContent);
      };
    });
    host.querySelectorAll(".sl-bin").forEach(function (bin) {
      bin.onclick = function () {
        if (!sel) { E.toast(t("Tap an item first.", "اضغط على عنصر أولًا.")); return; }
        var it = items.filter(function (x) { return String(x.i) === sel.dataset.i; })[0];
        if (it.bin === bin.dataset.b) {
          sel.classList.remove("sel"); sel.classList.add("placed");
          bin.querySelector(".sl-in").appendChild(sel);
          E.speak(bin.querySelector(".sl-head").textContent.replace(/^\S+\s/, ""));
          sel = null; left--;
          if (!left) setTimeout(done, 300);
        } else {
          bin.classList.remove("shake"); void bin.offsetWidth; bin.classList.add("shake");
          E.toast(t("Not this group. Try another one.", "ليست هذه المجموعة، جرّب مجموعة أخرى."));
        }
      };
    });
  };

  /* ---------- fire triangle + complete / incomplete combustion ---------- */
  L.fire = function (host, cfg, done) {
    var s = { fuel: true, oxy: true, heat: false, air: 40 }, wasOn = false;
    host.innerHTML = '<div class="fire-wrap"><div class="fire-stage"><div class="soot"></div><div class="flame"></div><div class="logs">🪵🪵</div></div>' +
      '<div class="fire-ctl"><div class="btn-row tgs"><button type="button" class="btn sm tg" data-k="fuel">🪵 ' + t("Fuel", "الوقود") + '</button><button type="button" class="btn sm tg" data-k="oxy">💨 ' + t("Oxygen", "الأكسجين") + '</button><button type="button" class="btn sm tg" data-k="heat">🔥 ' + t("Heat (match)", "الحرارة (عود ثقاب)") + "</button></div>" +
      slider(t("Air holes open", "فتحات الهواء"), 0, 100, 10, s.air, "%") + '<div class="fire-out"></div></div></div>';
    var tick = goals(host, [t("Light the fire: fuel + oxygen + heat.", "أشعل النار: وقود + أكسجين + حرارة."),
      t("Get complete combustion: a blue flame.", "احصل على احتراق تام: لهب أزرق."),
      t("Put the fire out by removing the oxygen.", "أطفئ النار بمنع الأكسجين."),
      t("Light it again, then put it out by removing the heat.", "أشعلها مرة أخرى، ثم أطفئها بإزالة الحرارة.")], done);
    var rng = host.querySelector("input");
    function draw(changed) {
      var on = s.fuel && s.oxy && s.heat, blue = s.air >= 60;
      host.querySelectorAll(".tg").forEach(function (b) { var v = s[b.dataset.k]; b.classList.toggle("on", v); b.setAttribute("aria-pressed", v); });
      host.querySelector(".slv").textContent = n(s.air) + "%";
      var st = host.querySelector(".fire-stage");
      st.className = "fire-stage" + (on ? (blue ? " on blue" : " on yellow") : "");
      var out = host.querySelector(".fire-out");
      if (on) out.innerHTML = blue ? '<b class="ok-t">' + t("Complete combustion", "احتراق تام") + "</b>" + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + "<small>" + t("Blue flame, more energy, no soot.", "لهب أزرق وطاقة أكبر ولا سناج.") + "</small>"
        : '<b class="no-t">' + t("Incomplete combustion", "احتراق غير تام") + "</b>" + eq("2CH₄ + 3O₂ → 2CO + 4H₂O") + "<small>" + t("Yellow flame, black soot and toxic CO. Open the air holes!", "لهب أصفر وسناج أسود وغاز CO السام. افتح فتحات الهواء!") + "</small>";
      else {
        var miss = [!s.fuel && t("fuel", "الوقود"), !s.oxy && t("oxygen", "الأكسجين"), !s.heat && t("heat", "الحرارة")].filter(Boolean);
        out.innerHTML = "<b>" + t("No fire", "لا توجد نار") + "</b><small>" + t("Missing: ", "ينقصها: ") + miss.join(t(", ", "، ")) + "</small>";
      }
      if (on) { tick(0); if (blue) tick(1); }
      if (wasOn && !on && changed === "oxy") tick(2);
      if (wasOn && !on && changed === "heat" && draw.relit) tick(3);
      if (on && draw.outOnce) draw.relit = true;
      if (wasOn && !on) draw.outOnce = true;
      wasOn = on;
    }
    host.querySelectorAll(".tg").forEach(function (b) { b.onclick = function () { s[b.dataset.k] = !s[b.dataset.k]; draw(b.dataset.k); }; });
    rng.oninput = function () { s.air = Number(rng.value); draw("air"); };
    draw();
  };

  /* ---------- Ohm's law ---------- */
  L.ohm = function (host, cfg, done) {
    var V = 6, R = 6, pool = E.shuffle([0.5, 1, 1.5, 2, 3, 4, 6]), round = 0, target = pool[0];
    host.innerHTML = '<div class="ohm"><div class="ohm-circ"><span class="batt">🔋</span><span class="wire"></span><span class="res">⏛</span><span class="wire"></span><span class="bulb">💡</span></div>' +
      slider(t("Potential difference V", "فرق الجهد V"), 1, 12, 1, V, "V") + slider(t("Resistance R", "المقاومة R"), 1, 12, 1, R, "Ω") +
      '<div class="meter"></div><div class="target"></div></div>';
    var tick = goals(host, [t("Reach the 1st target current.", "حقّق شدة التيار المطلوبة الأولى."), t("Reach the 2nd target current.", "حقّق شدة التيار المطلوبة الثانية."), t("Reach the 3rd target current.", "حقّق شدة التيار المطلوبة الثالثة.")], done);
    var ins = host.querySelectorAll("input");
    function fmt(x) { return n(Math.round(x * 100) / 100); }
    function draw() {
      var I = V / R;
      var sl = host.querySelectorAll(".slv"); sl[0].textContent = n(V) + " V"; sl[1].textContent = n(R) + " Ω";
      host.querySelector(".bulb").style.cssText = "opacity:" + Math.max(0.2, Math.min(1, I / 4)) + ";filter:drop-shadow(0 0 " + Math.min(24, I * 5) + "px #facc15)";
      host.querySelector(".meter").innerHTML = eq("I = V ÷ R = " + V + " ÷ " + R + " = " + (Math.round(I * 100) / 100) + " A") + '<span class="amm">🅰️ ' + fmt(I) + " A</span>";
      host.querySelector(".target").innerHTML = round < 3 ? "🎯 " + t("Make the current exactly ", "اجعل شدة التيار ") + "<b>" + fmt(target) + " A</b>" + t("", " بالضبط") : "✅ " + t("All targets reached!", "حققت كل الأهداف!");
      if (round < 3 && Math.abs(I - target) < 1e-9) {
        tick(round); round++; target = pool[round] || 0;
        setTimeout(draw, 700);
      }
    }
    ins[0].oninput = function () { V = Number(ins[0].value); draw(); };
    ins[1].oninput = function () { R = Number(ins[1].value); draw(); };
    draw();
  };

  /* ---------- series vs parallel ---------- */
  L.circuit = function (host, cfg, done) {
    var s = { mode: "series", nb: 2, broken: -1 }, r = 6, Vb = 12;
    host.innerHTML = '<div class="cir-top"><div class="seg" id="cmode"></div><div class="btn-row"><button type="button" class="btn sm" id="minus">−</button><b id="nb"></b><button type="button" class="btn sm" id="plus">+</button></div></div>' +
      '<p class="lab-prompt">' + t("Each bulb is 6 Ω, the battery is 12 V. Tap a bulb to break or fix it.", "كل مصباح مقاومته ٦ أوم والبطارية ١٢ فولت. اضغط على مصباح لتكسره أو تصلحه.") + '</p><div class="cir"><div class="cir-batt">🔋 ' + n(12) + ' V</div><div class="bulbs"></div></div><div class="meter"></div>';
    var tick = goals(host, [t("Make the equivalent resistance 18 Ω.", "اجعل المقاومة المكافئة ١٨ أوم."), t("Make the equivalent resistance 2 Ω.", "اجعل المقاومة المكافئة ٢ أوم."),
      t("Break one bulb in series. What happens to the others?", "اكسر مصباحًا في دائرة التوالي. ماذا يحدث للباقي؟"), t("Break one bulb in parallel. Do the others stay on?", "اكسر مصباحًا في دائرة التوازي. هل يبقى الباقي مضيئًا؟")], done);
    function draw() {
      host.querySelector("#cmode").innerHTML = [["series", t("Series", "توالي")], ["parallel", t("Parallel", "توازي")]].map(function (x) { return '<button type="button" data-m="' + x[0] + '" class="' + (s.mode === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("");
      host.querySelectorAll("#cmode button").forEach(function (b) { b.onclick = function () { s.mode = b.dataset.m; s.broken = -1; draw(); }; });
      host.querySelector("#nb").textContent = n(s.nb) + " 💡";
      var working = s.broken >= 0 ? s.nb - 1 : s.nb, Req, I, Vbulb, lit;
      if (s.mode === "series") { Req = s.nb * r; lit = s.broken < 0; I = lit ? Vb / Req : 0; Vbulb = lit ? Vb / s.nb : 0; }
      else { Req = working ? r / working : Infinity; lit = working > 0; I = lit ? Vb / Req : 0; Vbulb = Vb; }
      var bright = Vbulb * Vbulb / r / 24;
      host.querySelector(".cir").className = "cir " + s.mode;
      host.querySelector(".bulbs").innerHTML = Array.from({ length: s.nb }, function (_, k) {
        var br = k === s.broken, on = !br && (s.mode === "series" ? lit : true);
        return '<button type="button" class="cb' + (br ? " broken" : "") + (on ? " on" : "") + '" data-k="' + k + '" style="--b:' + (on ? Math.max(0.25, bright) : 0) + '"><span>' + (br ? "💥" : "💡") + "</span><small>" + n(r) + " Ω</small></button>";
      }).join("");
      host.querySelectorAll(".cb").forEach(function (b) { b.onclick = function () { var k = Number(b.dataset.k); s.broken = s.broken === k ? -1 : k; draw(); }; });
      var rq = s.mode === "series" ? eq("R = n × r = " + s.nb + " × 6 = " + Req + " Ω") : (isFinite(Req) ? eq("R = r ÷ n = 6 ÷ " + working + " = " + (Math.round(Req * 100) / 100) + " Ω") : "—");
      host.querySelector(".meter").innerHTML = '<span>' + t("Equivalent resistance: ", "المقاومة المكافئة: ") + rq + "</span><span>" + t("Total current: ", "شدة التيار الكلية: ") + "<b>" + n(Math.round(I * 100) / 100) + " A</b></span><span>" + t("Voltage on each bulb: ", "الجهد على كل مصباح: ") + "<b>" + n(Math.round(Vbulb * 100) / 100) + " V</b></span>";
      if (s.broken < 0 && Req === 18) tick(0);
      if (s.broken < 0 && Req === 2) tick(1);
      if (s.mode === "series" && s.broken >= 0 && s.nb >= 2) tick(2);
      if (s.mode === "parallel" && s.broken >= 0 && s.nb >= 2) tick(3);
    }
    host.querySelector("#minus").onclick = function () { if (s.nb > 1) { s.nb--; s.broken = -1; draw(); } };
    host.querySelector("#plus").onclick = function () { if (s.nb < 4) { s.nb++; s.broken = -1; draw(); } };
    draw();
  };

  /* ---------- electromagnet ---------- */
  L.magnet = function (host, cfg, done) {
    var s = { turns: 30, cur: 2, core: true }, targets = E.shuffle([4, 6, 8, 10, 12, 16]).slice(0, 2), stage = 0;
    host.innerHTML = '<div class="mag"><div class="mag-stage"><div class="coil"><span class="nail"></span><span class="turns"></span></div><div class="clips"></div></div>' +
      slider(t("Turns of wire", "عدد اللفات"), 10, 100, 10, s.turns) + slider(t("Current", "شدة التيار"), 1, 5, 1, s.cur, "A") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="core"></button></div><div class="meter"></div><div class="target"></div></div>';
    var tick = goals(host, [t("Pick up exactly ", "التقط بالضبط ") + n(targets[0]) + t(" paper clips.", " مشبك ورق."), t("Now remove the soft iron core. What happens?", "أزل الآن قلب الحديد المطاوع. ماذا يحدث؟"),
      t("Put the core back and pick up exactly ", "أعد القلب والتقط بالضبط ") + n(targets[1]) + t(" clips.", " مشبك.")], done);
    var ins = host.querySelectorAll("input");
    function clips() { return Math.min(20, Math.round(s.turns * s.cur * (s.core ? 1 : 0.1) / 25)); }
    function draw() {
      var c = clips(), sl = host.querySelectorAll(".slv");
      sl[0].textContent = n(s.turns); sl[1].textContent = n(s.cur) + " A";
      host.querySelector("#core").innerHTML = (s.core ? "🔩 " + t("Soft iron core: IN", "قلب الحديد المطاوع: موجود") : "⭕ " + t("Core: OUT", "القلب: غير موجود"));
      host.querySelector("#core").classList.toggle("on", s.core);
      host.querySelector(".nail").style.opacity = s.core ? 1 : 0.15;
      host.querySelector(".turns").textContent = new Array(Math.max(1, s.turns / 10) + 1).join("〰");
      host.querySelector(".clips").innerHTML = c ? new Array(c + 1).join("📎") : '<span class="sub">' + t("No clips lifted", "لم يُرفع أي مشبك") + "</span>";
      host.querySelector(".meter").innerHTML = "<b>" + n(c) + "</b> " + t("clips lifted", "مشبك مرفوع") + (s.core ? "" : '<small class="no-t">' + t(" Without the soft iron core the magnet is much weaker!", " بدون قلب الحديد المطاوع يصبح المغناطيس أضعف كثيرًا!") + "</small>");
      var goal = stage === 0 ? targets[0] : stage === 2 ? targets[1] : null;
      host.querySelector(".target").innerHTML = stage > 2 ? "✅ " + t("Great work!", "عمل رائع!") : goal != null ? "🎯 " + t("Target: ", "المطلوب: ") + "<b>" + n(goal) + "</b> 📎" : "🎯 " + t("Remove the core and watch the clips.", "أزل القلب وراقب المشابك.");
      if (stage === 0 && s.core && c === targets[0]) { tick(0); stage = 1; setTimeout(draw, 600); }
      else if (stage === 1 && !s.core) { tick(1); stage = 2; setTimeout(draw, 900); }
      else if (stage === 2 && s.core && c === targets[1]) { tick(2); stage = 3; }
    }
    ins[0].oninput = function () { s.turns = Number(ins[0].value); draw(); };
    ins[1].oninput = function () { s.cur = Number(ins[1].value); draw(); };
    host.querySelector("#core").onclick = function () { s.core = !s.core; draw(); };
    draw();
  };

  /* ---------- Punnett square ---------- */
  L.punnett = function (host, cfg, done) {
    var G = ["YY", "Yy", "yy"], p = ["Yy", "yy"];
    host.innerHTML = '<p class="lab-prompt">' + t("Y = yellow seeds (dominant), y = green seeds (recessive). Choose each parent's genotype.", "Y = بذور صفراء (سائد)، y = بذور خضراء (متنحي). اختر النمط الجيني لكل أب.") + "</p>" +
      '<div class="pp"><div><b>♀ ' + t("Parent 1", "الأب الأول") + '</b><div class="seg" data-p="0"></div></div><div><b>♂ ' + t("Parent 2", "الأب الثاني") + '</b><div class="seg" data-p="1"></div></div></div><div class="pun"></div><div class="meter"></div>';
    var tick = goals(host, [t("All yellow offspring, with one green parent.", "كل الأبناء صفراء مع أن أحد الأبوين أخضر."), t("Get 3 yellow : 1 green.", "احصل على ٣ أصفر : ١ أخضر."),
      t("Get 1 yellow : 1 green.", "احصل على ١ أصفر : ١ أخضر."), t("Get all green offspring.", "اجعل كل الأبناء خضراء.")], done);
    function cell(a, b) { var g = a === "Y" || b !== "Y" ? a + b : b + a; return g; }
    function draw() {
      host.querySelectorAll(".pp .seg").forEach(function (sg) {
        var k = Number(sg.dataset.p);
        sg.innerHTML = G.map(function (g) { return '<button type="button" class="' + (p[k] === g ? "on" : "") + '" dir="ltr">' + g + "</button>"; }).join("");
        sg.querySelectorAll("button").forEach(function (b) { b.onclick = function () { p[k] = b.textContent; draw(); E.speak(b.textContent.split("").join(" ")); }; });
      });
      var a = p[0].split(""), b = p[1].split(""), cnt = { YY: 0, Yy: 0, yy: 0 }, yel = 0;
      var h = '<table dir="ltr"><tr><th></th><th>' + b[0] + "</th><th>" + b[1] + "</th></tr>";
      a.forEach(function (x) {
        h += "<tr><th>" + x + "</th>";
        b.forEach(function (y) { var g = cell(x, y), Y = g.indexOf("Y") >= 0; cnt[g]++; if (Y) yel++; h += '<td class="' + (Y ? "yel" : "grn") + '"><span>' + (Y ? "🟡" : "🟢") + "</span>" + g + "</td>"; });
        h += "</tr>";
      });
      host.querySelector(".pun").innerHTML = h + "</table>";
      host.querySelector(".meter").innerHTML = "<span>" + t("Yellow : Green", "أصفر : أخضر") + " = <b>" + n(yel) + " : " + n(4 - yel) + "</b></span><span dir=\"ltr\">YY " + n(cnt.YY) + " · Yy " + n(cnt.Yy) + " · yy " + n(cnt.yy) + "</span>";
      var green = (p[0] === "yy") + (p[1] === "yy");
      if (yel === 4 && green === 1) tick(0);
      if (yel === 3) tick(1);
      if (yel === 2) tick(2);
      if (yel === 0) tick(3);
    }
    draw();
  };

  /* ---------- peppered moths: natural selection ---------- */
  L.moth = function (host, cfg, done) {
    var s = { bark: "light", dark: 0.1, gen: 0, hist: [0.1] }, N = 20;
    host.innerHTML = '<div class="cir-top"><div class="seg" id="bark"></div><button type="button" class="btn sm primary" id="hunt">🐦 ' + t("Birds hunt → next generation", "الطيور تصطاد ← الجيل التالي") + "</button></div>" +
      '<div class="moths"></div><div class="meter"></div><div class="hist"></div>';
    var tick = goals(host, [t("Darken the tree trunks with factory soot.", "سوّد جذوع الأشجار بسناج المصانع."), t("Let natural selection make dark moths 80% or more.", "اجعل الانتخاب الطبيعي يرفع الفراشات الداكنة إلى ٨٠٪ أو أكثر."),
      t("Clean the air (light bark) and bring light moths back to 80% or more.", "نظّف الهواء (جذوع فاتحة) وأعد الفراشات الفاتحة إلى ٨٠٪ أو أكثر.")], done);
    var reached = false;
    function draw() {
      host.querySelector("#bark").innerHTML = [["light", "🌳 " + t("Clean bark", "جذوع نظيفة")], ["dark", "🏭 " + t("Sooty bark", "جذوع بها سناج")]].map(function (x) { return '<button type="button" data-b="' + x[0] + '" class="' + (s.bark === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("");
      host.querySelectorAll("#bark button").forEach(function (b) { b.onclick = function () { s.bark = b.dataset.b; if (s.bark === "dark") tick(0); draw(); }; });
      var nd = Math.round(s.dark * N), list = E.shuffle(Array.from({ length: N }, function (_, k) { return k < nd; }));
      var m = host.querySelector(".moths");
      m.className = "moths " + s.bark;
      m.innerHTML = list.map(function (d) { return '<span class="moth ' + (d ? "dk" : "lt") + '">🦋</span>'; }).join("");
      host.querySelector(".meter").innerHTML = "<span>" + t("Generation ", "الجيل ") + "<b>" + n(s.gen) + "</b></span><span>" + t("Dark moths: ", "الفراشات الداكنة: ") + "<b>" + n(Math.round(s.dark * 100)) + "%</b></span><span>" + t("Light moths: ", "الفراشات الفاتحة: ") + "<b>" + n(100 - Math.round(s.dark * 100)) + "%</b></span>";
      host.querySelector(".hist").innerHTML = s.hist.slice(-16).map(function (v) { return '<i style="height:' + Math.max(4, Math.round(v * 100)) + '%" title="' + Math.round(v * 100) + '%"></i>'; }).join("");
    }
    host.querySelector("#hunt").onclick = function () {
      var visD = s.bark === "light", sd = visD ? 0.5 : 0.9, sl = visD ? 0.9 : 0.5;
      var d = s.dark * sd, l = (1 - s.dark) * sl;
      s.dark = Math.min(0.95, Math.max(0.05, d / (d + l)));
      s.gen++; s.hist.push(s.dark);
      draw();
      if (s.dark >= 0.8) { tick(1); reached = true; }
      if (reached && s.dark <= 0.2) tick(2);
    };
    draw();
  };

  /* ---------- rock layers (superposition) + half-life ---------- */
  L.layers = function (host, cfg, done) {
    var layers = [ // top -> bottom
      ["🌱", ["Soil today", "التربة الحالية"], ["Now", "الآن"]],
      ["🦣", ["Mammal bones", "عظام ثدييات"], ["Cenozoic", "الحياة الحديثة"]],
      ["🦖", ["Dinosaur bones", "عظام ديناصورات"], ["Mesozoic", "الحياة الوسطى"]],
      ["🐚", ["Ammonites", "أمونيت"], ["Mesozoic", "الحياة الوسطى"]],
      ["🪲", ["Trilobites", "تريلوبيت"], ["Paleozoic", "الحياة القديمة"]]
    ];
    var nextIdx = layers.length - 1, order = 0, atoms = 16, left = 16, halves = 0, aDone = false;
    host.innerHTML = '<div class="lay-wrap"><div><p class="lab-prompt">' + t("Part A: tap the layers from OLDEST to YOUNGEST.", "الجزء أ: اضغط على الطبقات من الأقدم إلى الأحدث.") + '</p><div class="rocks">' +
      layers.map(function (x, i) { return '<button type="button" class="rock r' + i + '" data-i="' + i + '"><span class="ord"></span>' + x[0] + " " + esc(T(x[1])) + '<em class="era"></em></button>'; }).join("") + "</div></div>" +
      '<div><p class="lab-prompt">' + t("Part B: carbon-14 has a half-life of 5,730 years.", "الجزء ب: عمر النصف للكربون ١٤ هو ٥٧٣٠ سنة.") + '</p><div class="atoms"></div><div class="btn-row"><button type="button" class="btn sm primary" id="hl">⏳ ' + t("One half-life passes", "يمر عمر نصف واحد") + '</button><button type="button" class="btn sm ghost" id="hr">↺</button></div><div class="meter"></div></div></div>';
    var tick = goals(host, [t("Order all 5 layers from oldest to youngest.", "رتّب الطبقات الخمس من الأقدم إلى الأحدث."), t("Let the carbon-14 decay until only 12.5% is left.", "اترك الكربون ١٤ يتحلل حتى يتبقى ١٢٫٥٪ فقط.")], done);
    host.querySelectorAll(".rock").forEach(function (b) {
      b.onclick = function () {
        var i = Number(b.dataset.i);
        if (b.classList.contains("ok")) return;
        if (i === nextIdx) {
          order++; b.classList.add("ok"); b.querySelector(".ord").textContent = n(order);
          b.querySelector(".era").textContent = T(layers[i][2]);
          E.speak(T(layers[i][1]));
          nextIdx--;
          if (nextIdx < 0) { aDone = true; tick(0); }
        } else {
          b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake");
          E.toast(t("Remember: the lowest undisturbed layer is the oldest.", "تذكّر: الطبقة السفلى غير المضطربة هي الأقدم."));
        }
      };
    });
    function draw() {
      host.querySelector(".atoms").innerHTML = Array.from({ length: atoms }, function (_, k) { return '<i class="' + (k < left ? "c14" : "n14") + '"></i>'; }).join("");
      var pct = left / atoms * 100;
      host.querySelector(".meter").innerHTML = "<span>" + t("Carbon-14 left: ", "الكربون ١٤ المتبقي: ") + "<b>" + n(pct) + "%</b></span><span>" + t("Half-lives: ", "أعمار النصف: ") + "<b>" + n(halves) + "</b></span><span>" + t("Time passed: ", "الزمن المنقضي: ") + "<b>" + n(halves * 5730) + " " + t("years", "سنة") + "</b></span>";
      host.querySelector("#hl").disabled = left <= 1;
      if (left === 2) tick(1);
    }
    host.querySelector("#hl").onclick = function () { if (left > 1) { left = left / 2; halves++; draw(); E.speak(t(left / atoms * 100 + " percent left", "تبقّى " + left / atoms * 100 + " في المئة")); } };
    host.querySelector("#hr").onclick = function () { left = atoms; halves = 0; draw(); };
    draw();
  };

  /* ---------- part names (shown when a lab has several parts) ---------- */
  L.names = {
    sort: ["Sort it", "صنّف"], fire: ["Fire triangle", "مثلث الاحتراق"], ohm: ["Ohm's law lab", "معمل قانون أوم"], circuit: ["Series and parallel", "التوالي والتوازي"],
    magnet: ["Electromagnet", "المغناطيس الكهربي"], punnett: ["Punnett square", "مربع بانيت"], moth: ["Peppered moths", "فراشات العثة"], layers: ["Rock layers and half-life", "طبقات الصخور وعمر النصف"],
    patterns: ["Watch the atoms rearrange", "شاهد الذرات تعيد ترتيبها"], series: ["Activity series test tubes", "أنابيب سلسلة النشاط"], lungs: ["Lungs and smoke model", "نموذج الرئتين والدخان"],
    current: ["Charges through the wire", "الشحنات في السلك"], cells: ["Connect the cells", "توصيل الأعمدة"], fossilize: ["How a fossil forms", "كيف تتكون الحفرية"]
  };

  /* ---------- reaction patterns: animated atoms ---------- */
  L.patterns = function (host, cfg, done) {
    var P = {
      comb: { name: ["Direct combination", "اتحاد مباشر"], eqn: "2Mg + O₂ → 2MgO",
        atoms: [["Mg", "#ef4444", [6, 0], [56, 0]], ["O", "#3b82f6", [26, 0], [56, 36]]], plus: [[18, 0]], plusAfter: [] },
      dec: { name: ["Decomposition", "تحلل"], eqn: "2HgO → 2Hg + O₂",
        atoms: [["Hg", "#a3a3a3", [8, 0], [52, 0]], ["O", "#3b82f6", [8, 36], [78, 0]]], plus: [], plusAfter: [[68, 0]] },
      single: { name: ["Single displacement", "إحلال بسيط"], eqn: "Zn + CuSO₄ → ZnSO₄ + Cu",
        atoms: [["Zn", "#94a3b8", [2, 0], [50, 0]], ["Cu", "#f97316", [20, 0], [80, 0]], ["SO₄", "#22c55e", [20, 36], [50, 36]]], plus: [[12, 0]], plusAfter: [[68, 0]] },
      double: { name: ["Double displacement", "إحلال مزدوج"], eqn: "AgNO₃ + NaCl → NaNO₃ + AgCl↓",
        atoms: [["Ag", "#cbd5e1", [0, 0], [74, 0]], ["NO₃", "#a855f7", [0, 36], [50, 36]], ["Na", "#eab308", [20, 0], [50, 0]], ["Cl", "#14b8a6", [20, 36], [74, 36]]], plus: [[11, 0]], plusAfter: [[64, 0]] }
    };
    var keys = ["comb", "dec", "single", "double"], cur = "comb", seen = {};
    host.innerHTML = '<p class="lab-prompt">' + t("Choose a pattern, then press React and watch the atoms swap partners.", "اختر نوع التفاعل ثم اضغط «تفاعل» وشاهد الذرات تبدّل شركاءها.") + '</p><div class="seg pat-seg"></div>' +
      '<div class="pat-stage"><span class="pat-arrow">' + t("→", "→") + '</span></div><div class="btn-row" style="margin-top:10px"><button type="button" class="btn sm primary" id="react">⚗️ ' + t("React", "تفاعل") + '</button><button type="button" class="btn sm ghost" id="reset">↺</button></div><div class="meter pat-out"></div>';
    var tick = goals(host, keys.map(function (k) { return t("Watch ", "شاهد ") + T(P[k].name) + "."; }), done);
    var stage = host.querySelector(".pat-stage");
    function pos(el, p) { el.style.left = "calc(" + p[0] + "% + 0px)"; el.style.top = (24 + p[1]) + "px"; }
    function build() {
      host.querySelector(".pat-seg").innerHTML = keys.map(function (k) { return '<button type="button" data-k="' + k + '" class="' + (k === cur ? "on" : "") + '">' + esc(T(P[k].name)) + "</button>"; }).join("");
      host.querySelectorAll(".pat-seg button").forEach(function (b) { b.onclick = function () { cur = b.dataset.k; build(); }; });
      stage.querySelectorAll(".atom,.pplus").forEach(function (x) { x.remove(); });
      var p = P[cur];
      p.atoms.forEach(function (a, i) { var d = E.el("span", "atom", a[0]); d.style.background = a[1]; d.dataset.i = i; pos(d, a[2]); stage.appendChild(d); });
      p.plus.forEach(function (q) { var d = E.el("span", "pplus before", "+"); pos(d, q); stage.appendChild(d); });
      p.plusAfter.forEach(function (q) { var d = E.el("span", "pplus after", "+"); pos(d, q); stage.appendChild(d); });
      stage.classList.remove("done");
      host.querySelector(".pat-out").innerHTML = '<span class="sub">' + t("Before the reaction", "قبل التفاعل") + "</span>";
    }
    host.querySelector("#react").onclick = function () {
      var p = P[cur];
      stage.querySelectorAll(".atom").forEach(function (d) { pos(d, p.atoms[Number(d.dataset.i)][3]); });
      stage.classList.add("done");
      host.querySelector(".pat-out").innerHTML = "<b>" + esc(T(p.name)) + "</b>" + eq(p.eqn);
      E.speak(T(p.name) + ". " + '<span class="eq">' + p.eqn + "</span>");
      if (!seen[cur]) { seen[cur] = 1; tick(keys.indexOf(cur)); }
    };
    host.querySelector("#reset").onclick = build;
    build();
  };

  /* ---------- activity series: metal + solution test tubes ---------- */
  L.series = function (host, cfg, done) {
    var SER = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "Sn", "Pb", "H", "Cu", "Hg", "Ag", "Pt", "Au"];
    var METALS = [["Mg", ["Magnesium", "ماغنسيوم"], "#d4d4d8"], ["Zn", ["Zinc", "خارصين"], "#a1a1aa"], ["Fe", ["Iron", "حديد"], "#71717a"], ["Cu", ["Copper", "نحاس"], "#ea580c"], ["Ag", ["Silver", "فضة"], "#e5e7eb"]];
    var SOLS = [["H", "HCl", ["Dilute hydrochloric acid", "حمض الهيدروكلوريك المخفف"], "rgba(226,232,240,.75)"], ["Cu", "CuSO₄", ["Copper sulphate (blue)", "كبريتات النحاس (أزرق)"], "rgba(37,99,235,.65)"],
      ["Ag", "AgNO₃", ["Silver nitrate", "نترات الفضة"], "rgba(241,245,249,.8)"], ["Zn", "ZnSO₄", ["Zinc sulphate", "كبريتات الخارصين"], "rgba(241,245,249,.8)"]];
    var EQN = {
      "Mg|H": "Mg + 2HCl → MgCl₂ + H₂↑", "Zn|H": "Zn + 2HCl → ZnCl₂ + H₂↑", "Fe|H": "Fe + 2HCl → FeCl₂ + H₂↑",
      "Mg|Cu": "Mg + CuSO₄ → MgSO₄ + Cu", "Zn|Cu": "Zn + CuSO₄ → ZnSO₄ + Cu", "Fe|Cu": "Fe + CuSO₄ → FeSO₄ + Cu",
      "Mg|Ag": "Mg + 2AgNO₃ → Mg(NO₃)₂ + 2Ag", "Zn|Ag": "Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag", "Fe|Ag": "Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag", "Cu|Ag": "Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag",
      "Mg|Zn": "Mg + ZnSO₄ → MgSO₄ + Zn"
    };
    var m = 0, so = 0;
    host.innerHTML = '<p class="lab-prompt">' + t("Pick a metal strip and a solution, then drop the metal in.", "اختر شريط فلز ومحلولًا، ثم أسقط الفلز في المحلول.") + '</p><div class="series-strip"></div>' +
      '<div class="ser-row"><div><b>' + t("Metal", "الفلز") + '</b><div class="seg" id="sm"></div></div><div><b>' + t("Solution", "المحلول") + '</b><div class="seg" id="ss"></div></div></div>' +
      '<div class="tube-wrap"><div class="tube"><div class="liquid"><span class="strip"></span><span class="bubbles"></span></div></div><div class="tube-out"></div></div>' +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="drop">🧪 ' + t("Drop the metal in", "أسقط الفلز") + "</button></div>";
    var tick = goals(host, [t("Make hydrogen gas bubble out of the acid.", "اجعل غاز الهيدروجين يتصاعد من الحمض."), t("Find a metal that does NOT react with the acid.", "اكتشف فلزًا لا يتفاعل مع الحمض."),
      t("Make red copper appear from the blue solution.", "اجعل النحاس الأحمر يظهر من المحلول الأزرق."), t("Make copper itself displace another metal.", "اجعل النحاس نفسه يحل محل فلز آخر.")], done);
    function draw() {
      host.querySelector("#sm").innerHTML = METALS.map(function (x, i) { return '<button type="button" data-i="' + i + '" class="' + (i === m ? "on" : "") + '">' + x[0] + "</button>"; }).join("");
      host.querySelector("#ss").innerHTML = SOLS.map(function (x, i) { return '<button type="button" data-i="' + i + '" class="' + (i === so ? "on" : "") + '" dir="ltr">' + x[1] + "</button>"; }).join("");
      host.querySelectorAll("#sm button").forEach(function (b) { b.onclick = function () { m = Number(b.dataset.i); draw(); }; });
      host.querySelectorAll("#ss button").forEach(function (b) { b.onclick = function () { so = Number(b.dataset.i); draw(); }; });
      host.querySelector(".series-strip").innerHTML = SER.map(function (x) {
        var cls = x === METALS[m][0] ? " me" : x === SOLS[so][0] ? " them" : x === "H" ? " h" : "";
        return '<span class="' + cls + '">' + x + "</span>";
      }).join("");
      var tube = host.querySelector(".tube");
      tube.className = "tube";
      host.querySelector(".liquid").style.background = SOLS[so][3];
      host.querySelector(".strip").style.background = METALS[m][2];
      host.querySelector(".tube-out").innerHTML = "<b>" + esc(T(METALS[m][1])) + "</b> + <b>" + esc(T(SOLS[so][2])) + "</b>";
    }
    host.querySelector("#drop").onclick = function () {
      var me = METALS[m][0], them = SOLS[so][0], key = me + "|" + them, react = !!EQN[key];
      var tube = host.querySelector(".tube"), liq = host.querySelector(".liquid"), out = host.querySelector(".tube-out");
      tube.className = "tube in";
      setTimeout(function () {
        if (react) {
          tube.classList.add(them === "H" ? "fizz" : "coat");
          if (them === "Cu") liq.style.background = "rgba(226,232,240,.75)";
          if (key === "Cu|Ag") liq.style.background = "rgba(37,99,235,.45)";
          host.querySelector(".strip").style.background = them === "Cu" ? "linear-gradient(#b45309,#c2410c)" : them === "Ag" ? "linear-gradient(#e5e7eb,#9ca3af)" : them === "Zn" ? "#a1a1aa" : METALS[m][2];
          var what = them === "H" ? t("Hydrogen gas bubbles out. It burns with a pop.", "يتصاعد غاز الهيدروجين، ويشتعل بفرقعة.")
            : them === "Cu" ? t("The blue colour fades and red-brown copper coats the strip.", "يبهت اللون الأزرق ويغطي النحاس البني المحمر الشريط.")
            : them === "Ag" ? t("Shiny silver coats the strip" + (me === "Cu" ? " and the solution turns blue." : "."), "تغطي الفضة اللامعة الشريط" + (me === "Cu" ? " ويتحول المحلول إلى الأزرق." : "."))
            : t("Grey zinc coats the magnesium strip.", "يغطي الخارصين الرمادي شريط الماغنسيوم.");
          out.innerHTML = '<b class="ok-t">✔ ' + t("It reacts!", "يحدث تفاعل!") + "</b>" + eq(EQN[key]) + "<small>" + what + " " + t(me + " is above " + (them === "H" ? "hydrogen" : them) + " in the activity series.", me + " يسبق " + (them === "H" ? "الهيدروجين" : them) + " في سلسلة النشاط.") + "</small>";
          E.speak(t("It reacts! ", "يحدث تفاعل! ") + what);
          if (them === "H") tick(0);
          if (them === "Cu") tick(2);
          if (me === "Cu") tick(3);
        } else {
          out.innerHTML = '<b class="no-t">✖ ' + t("No reaction", "لا يحدث تفاعل") + "</b><small>" + (me === them ? t("A metal cannot displace itself.", "الفلز لا يحل محل نفسه.") : t(me + " is below " + (them === "H" ? "hydrogen" : them) + " in the activity series, so it cannot displace it.", me + " يلي " + (them === "H" ? "الهيدروجين" : them) + " في سلسلة النشاط، فلا يستطيع أن يحل محله.")) + "</small>";
          E.speak(t("No reaction.", "لا يحدث تفاعل."));
          if (them === "H") tick(1);
        }
      }, 700);
    };
    draw();
  };

  /* ---------- lungs model (illustrative) ---------- */
  L.lungs = function (host, cfg, done) {
    var s = { d: 0, y: 0, pas: false };
    host.innerHTML = '<p class="lab-prompt">' + t("Move the sliders and watch what smoke does inside the body. This is a teaching model, not real medical numbers.", "حرّك المؤشرات وشاهد ماذا يفعل الدخان داخل الجسم. هذا نموذج تعليمي وليس أرقامًا طبية حقيقية.") + "</p>" +
      '<div class="lung-wrap"><div class="lung-stage"><span class="lung">🫁</span><span class="tar"></span></div><div><div class="alv"></div><div class="o2"><span>' + t("Oxygen carried by blood", "الأكسجين الذي يحمله الدم") + '</span><div class="o2bar"><i></i></div></div><div class="lung-note"></div></div></div>' +
      slider(t("Cigarettes per day", "عدد السجائر يوميًا"), 0, 20, 1, 0) + slider(t("Years of smoking", "سنوات التدخين"), 0, 30, 1, 0) +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="pas">👥 ' + t("Sits next to smokers (passive)", "يجلس بجوار المدخنين (سلبي)") + "</button></div>";
    var tick = goals(host, [t("See healthy lungs: no smoke at all.", "شاهد رئتين سليمتين: بلا دخان تمامًا."), t("Find when the walls of the alveoli start to break (emphysema).", "اكتشف متى تبدأ جدران الحويصلات في التهدم (انتفاخ الرئة)."),
      t("Set 0 cigarettes but turn on passive smoking. Is the person safe?", "اجعل السجائر صفرًا وشغّل التدخين السلبي. هل الشخص آمن؟")], done);
    var ins = host.querySelectorAll("input");
    function draw() {
      var e = s.d * s.y + (s.pas ? 60 : 0), tar = Math.min(1, e / 300), br = Math.floor(Math.min(1, e / 400) * 6), o2 = Math.round(98 - 22 * Math.min(1, e / 400));
      var sl = host.querySelectorAll(".slv"); sl[0].textContent = n(s.d); sl[1].textContent = n(s.y);
      host.querySelector(".lung").style.filter = "grayscale(" + tar + ") brightness(" + (1 - tar * 0.55) + ")";
      host.querySelector(".tar").style.opacity = tar * 0.85;
      var a = "";
      for (var i = 0; i < 6; i++) a += i < br ? (i % 2 ? "" : '<i class="big"></i>') : "<i></i><i></i>";
      host.querySelector(".alv").innerHTML = "<b>" + t("Alveoli", "الحويصلات الهوائية") + "</b><div>" + a + "</div>";
      host.querySelector(".o2bar i").style.width = o2 + "%";
      host.querySelector(".o2bar i").textContent = n(o2) + "%";
      host.querySelector("#pas").classList.toggle("on", s.pas);
      host.querySelector(".lung-note").innerHTML = e === 0 ? '<b class="ok-t">' + t("Healthy pink lungs, millions of small alveoli.", "رئتان ورديتان سليمتان وملايين الحويصلات الصغيرة.") + "</b>"
        : (br ? '<b class="no-t">' + t("Tar blackens the lungs and alveoli walls break into big empty bags. CO takes oxygen's place on haemoglobin.", "القطران يسوّد الرئتين وتتهدم جدران الحويصلات فتصبح أكياسًا كبيرة، وأول أكسيد الكربون يأخذ مكان الأكسجين على الهيموجلوبين.") + "</b>"
          : '<b class="no-t">' + t("Tar starts to coat the lungs.", "يبدأ القطران في تغطية الرئتين.") + "</b>") + (s.pas && !s.d ? "<small>" + t("No cigarette in hand, but the smoke still reaches the lungs. Side smoke has no filter.", "لا توجد سيجارة في يده، لكن الدخان يصل إلى رئتيه، والدخان الجانبي بلا فلتر.") + "</small>" : "");
      if (e === 0) tick(0);
      if (br >= 1 && s.d > 0) tick(1);
      if (s.pas && s.d === 0) tick(2);
    }
    ins[0].oninput = function () { s.d = Number(ins[0].value); draw(); };
    ins[1].oninput = function () { s.y = Number(ins[1].value); draw(); };
    host.querySelector("#pas").onclick = function () { s.pas = !s.pas; draw(); };
    draw();
  };

  /* ---------- charges through a wire: I = Q / t ---------- */
  L.current = function (host, cfg, done) {
    var Q = 12, tt = 6, pool = E.shuffle([1, 2, 3, 4, 5, 6]), round = 0;
    host.innerHTML = '<p class="lab-prompt">' + t("Each dot is a packet of charge passing the ammeter. Change the charge and the time.", "كل نقطة حزمة من الشحنة تمر بالأميتر. غيّر كمية الشحنة والزمن.") + '</p><div class="wire-stage"><div class="lane"></div><span class="gate">🅰️</span></div>' +
      slider(t("Charge Q", "الشحنة Q"), 1, 60, 1, Q, "C") + slider(t("Time t", "الزمن t"), 1, 20, 1, tt, "s") + '<div class="meter"></div><div class="target"></div>';
    var tick = goals(host, [t("Reach the 1st target current.", "حقّق شدة التيار المطلوبة الأولى."), t("Reach the 2nd target current.", "حقّق شدة التيار المطلوبة الثانية."), t("Reach the 3rd target current.", "حقّق شدة التيار المطلوبة الثالثة.")], done);
    var ins = host.querySelectorAll("input");
    function draw() {
      var I = Q / tt, sl = host.querySelectorAll(".slv");
      sl[0].textContent = n(Q) + " C"; sl[1].textContent = n(tt) + " s";
      var lane = host.querySelector(".lane"), k = Math.min(14, Math.max(2, Math.round(I * 2)));
      lane.innerHTML = Array.from({ length: k }, function (_, i) { return '<i style="animation-delay:-' + (i * (3 / k)).toFixed(2) + 's"></i>'; }).join("");
      lane.style.setProperty("--spd", Math.max(0.6, 3 / Math.max(0.3, I / 2)).toFixed(2) + "s");
      host.querySelector(".meter").innerHTML = eq("I = Q ÷ t = " + Q + " ÷ " + tt + " = " + (Math.round(I * 100) / 100) + " A") + '<span class="amm">🅰️ ' + n(Math.round(I * 100) / 100) + " A</span>";
      host.querySelector(".target").innerHTML = round < 3 ? "🎯 " + t("Make the current exactly ", "اجعل شدة التيار ") + "<b>" + n(pool[round]) + " A</b>" + t("", " بالضبط") : "✅ " + t("All targets reached!", "حققت كل الأهداف!");
      if (round < 3 && Math.abs(I - pool[round]) < 1e-9) { tick(round); round++; setTimeout(draw, 700); }
    }
    ins[0].oninput = function () { Q = Number(ins[0].value); draw(); };
    ins[1].oninput = function () { tt = Number(ins[1].value); draw(); };
    draw();
  };

  /* ---------- cells in series / parallel ---------- */
  L.cells = function (host, cfg, done) {
    var s = { n: 1, mode: "series" };
    host.innerHTML = '<p class="lab-prompt">' + t("Each cell is 3 V. Connect them and watch the torch.", "كل عمود ٣ فولت. وصّلها وشاهد الكشاف.") + '</p><div class="cir-top"><div class="seg" id="cm"></div><div class="btn-row"><button type="button" class="btn sm" id="m">−</button><b id="cn"></b><button type="button" class="btn sm" id="p">+</button></div></div>' +
      '<div class="cells-stage"><div class="cellbox"></div><span class="torch">🔦</span></div><div class="meter"></div>';
    var tick = goals(host, [t("Make 9 V for the torch.", "اجعل الجهد ٩ فولت للكشاف."), t("Keep 3 V but make the battery last 3 times longer.", "اجعل الجهد ٣ فولت لكن اجعل البطارية تدوم ٣ أضعاف.")], done);
    function draw() {
      host.querySelector("#cm").innerHTML = [["series", t("Series", "توالي")], ["parallel", t("Parallel", "توازي")]].map(function (x) { return '<button type="button" data-m="' + x[0] + '" class="' + (s.mode === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("");
      host.querySelectorAll("#cm button").forEach(function (b) { b.onclick = function () { s.mode = b.dataset.m; draw(); }; });
      host.querySelector("#cn").textContent = n(s.n) + " 🔋";
      var V = s.mode === "series" ? 3 * s.n : 3, life = s.mode === "series" ? 1 : s.n;
      var box = host.querySelector(".cellbox"); box.className = "cellbox " + s.mode;
      box.innerHTML = Array.from({ length: s.n }, function () { return '<span class="cell">🔋<small>' + n(3) + " V</small></span>"; }).join("");
      var tr = host.querySelector(".torch"); tr.style.filter = "drop-shadow(0 0 " + V * 2 + "px #facc15) brightness(" + (0.6 + V / 15) + ")";
      host.querySelector(".meter").innerHTML = "<span>" + t("EMF: ", "القوة الدافعة: ") + "<b>" + n(V) + " V</b></span><span>" + t("Lasts: ", "تدوم: ") + "<b>× " + n(life) + "</b></span><span class=\"sub\">" + (s.mode === "series" ? t("Series: the EMFs add up.", "التوالي: تُجمع القوى الدافعة.") : t("Parallel: same EMF as one cell, lasts longer.", "التوازي: القوة الدافعة لعمود واحد وتدوم أطول.")) + "</span>";
      if (V === 9) tick(0);
      if (s.mode === "parallel" && s.n === 3) tick(1);
    }
    host.querySelector("#m").onclick = function () { if (s.n > 1) { s.n--; draw(); } };
    host.querySelector("#p").onclick = function () { if (s.n < 4) { s.n++; draw(); } };
    draw();
  };

  /* ---------- how a fossil forms: step through ---------- */
  L.fossilize = function (host, cfg, done) {
    var steps = [
      ["🐚", ["An ammonite lives in an ancient sea.", "حيوان الأمونيت يعيش في بحر قديم."], 0, "live"],
      ["🐚", ["It dies and sinks. Mud and sand bury it quickly, before it decays.", "يموت ويغوص، ويدفنه الطين والرمل بسرعة قبل أن يتحلل."], 2, "dead"],
      ["🐚", ["More layers pile up and press the sediment into rock.", "تتراكم طبقات أكثر وتضغط الرواسب فتتحول إلى صخر."], 5, "buried"],
      ["🪨", ["Water with minerals soaks in. Minerals replace the shell, or fill the space it leaves: a mold and cast.", "تتسرب مياه بها معادن فتحل محل الصدفة أو تملأ الفراغ الذي تتركه: قالب ونسخة."], 5, "stone"],
      ["🔍", ["Earth movements lift the rock and erosion uncovers it. A scientist finds the fossil!", "حركات الأرض ترفع الصخر والتعرية تكشفه، فيجد العالِم الحفرية!"], 3, "found"]
    ];
    var i = 0;
    host.innerHTML = '<div class="fos-stage"><div class="sea"></div><div class="seds"></div><span class="crit"></span></div><p class="fos-txt"></p><div class="btn-row"><button type="button" class="btn sm primary" id="fn">' + t("Next stage ▸", "المرحلة التالية ◂") + '</button><button type="button" class="btn sm ghost" id="fr">↺</button></div>';
    var tick = goals(host, [t("Follow all 5 stages of fossil formation.", "تابع مراحل تكوّن الحفرية الخمس.")], done);
    function draw() {
      var st = steps[i], stg = host.querySelector(".fos-stage");
      stg.className = "fos-stage s-" + st[3];
      host.querySelector(".seds").innerHTML = Array.from({ length: st[2] }, function (_, k) { return '<i style="background:' + ["#d6a77a", "#c08457", "#e2c290", "#a8794f", "#cfa77c"][k % 5] + '"></i>'; }).join("");
      host.querySelector(".crit").textContent = st[0];
      host.querySelector(".fos-txt").innerHTML = "<b>" + n(i + 1) + " / " + n(steps.length) + "</b> " + esc(T(st[1]));
      host.querySelector("#fn").disabled = i >= steps.length - 1;
      E.speak(T(st[1]));
      if (i === steps.length - 1) tick(0);
    }
    host.querySelector("#fn").onclick = function () { if (i < steps.length - 1) { i++; draw(); } };
    host.querySelector("#fr").onclick = function () { i = 0; draw(); };
    draw();
  };
})();
