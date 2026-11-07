/* EduZone Learn v3 - Science · Prep 3: "Explore the diagram" for every lesson.
   EZ3.sciDiagram(host, lessonId, onExplored) draws an SVG (viewBox 0 0 400 240) with numbered,
   pulsing hotspots. Tapping a hotspot shows and speaks its label + meaning. onExplored() fires once
   every hotspot (or, for custom diagrams, every control) has been tried. */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="13" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }

  var D = {};

  /* U1 L1 - activity series */
  D.u1l1 = {
    title: ["The activity series", "سلسلة النشاط الكيميائي"],
    svg: function () {
      var m = ["K", "Na", "Ca", "Mg", "Al", "Zn", "Fe", "Sn", "Pb", "H", "Cu", "Hg", "Ag", "Pt", "Au"], s = "";
      m.forEach(function (x, i) {
        var c = i < 3 ? "#f87171" : i < 9 ? "#fb923c" : i === 9 ? "#facc15" : "#94a3b8", h = 150 - i * 7;
        s += '<rect x="' + (12 + i * 25.3) + '" y="' + (190 - h) + '" width="22" height="' + h + '" rx="5" fill="' + c + '"/>' + tx(23 + i * 25.3, 208, x);
      });
      s += '<path d="M380 26 L30 26" stroke="var(--muted)" stroke-width="3" marker-end="url(#ar1)"/><defs><marker id="ar1" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--muted)"/></marker></defs>' +
        tx(205, 18, t("more active", "أكثر نشاطًا"), mut);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [47, 60, ["Very active metals", "فلزات نشطة جدًا"], ["Potassium, sodium and calcium react even with cold water, giving hydrogen gas.", "البوتاسيوم والصوديوم والكالسيوم تتفاعل حتى مع الماء البارد ويتصاعد الهيدروجين."]],
      [150, 90, ["Above hydrogen", "تسبق الهيدروجين"], ["Magnesium to lead displace hydrogen from dilute acids. Magnesium needs hot water to react with water.", "من الماغنسيوم إلى الرصاص تحل محل الهيدروجين في الأحماض المخففة، والماغنسيوم يحتاج ماء ساخنًا ليتفاعل مع الماء."]],
      [240, 120, ["Hydrogen: the dividing line", "الهيدروجين: الخط الفاصل"], ["Hydrogen is not a metal, but it marks which metals can take its place in acids.", "الهيدروجين ليس فلزًا، لكنه يحدد أي الفلزات تستطيع أن تحل محله في الأحماض."]],
      [330, 140, ["Below hydrogen", "تلي الهيدروجين"], ["Copper, mercury, silver, platinum and gold do not displace hydrogen from dilute acids.", "النحاس والزئبق والفضة والبلاتين والذهب لا تحل محل الهيدروجين في الأحماض المخففة."]],
      [205, 30, ["The rule", "القاعدة"], ["A metal higher in the series displaces a lower metal from its salt solution.", "الفلز الأعلى في السلسلة يحل محل الفلز الأقل منه في محلول ملحه."]]
    ]
  };

  /* U1 L2 - fire triangle */
  D.u1l2 = {
    title: ["The fire triangle and flame colour", "مثلث الاحتراق ولون اللهب"],
    svg: function () {
      return '<polygon points="150,30 50,200 250,200" fill="var(--orange-soft)" stroke="#f97316" stroke-width="8" stroke-linejoin="round"/>' +
        '<path d="M150 170 C120 140 140 110 150 85 C160 110 182 135 150 170z" fill="#f97316"/><path d="M150 168 C138 150 146 132 150 118 C156 132 162 150 150 168z" fill="#fde047"/>' +
        tx(75, 110, t("Fuel", "الوقود")) + tx(228, 110, t("Oxygen", "الأكسجين")) + tx(150, 225, t("Heat", "الحرارة")) +
        '<path d="M320 150 C302 128 314 104 320 84 C328 104 340 126 320 150z" fill="#3b82f6"/><path d="M370 150 C346 122 362 96 370 70 C380 96 396 122 370 150z" fill="#f59e0b"/>' +
        '<ellipse cx="370" cy="62" rx="22" ry="10" fill="#1f2937" opacity=".75"/>' + tx(320, 172, t("blue", "أزرق")) + tx(370, 172, t("yellow", "أصفر"));
    },
    spots: [
      [88, 128, ["Fuel", "المادة القابلة للاشتعال"], ["A substance that can burn, such as wood, gas or paper.", "مادة تحترق مثل الخشب أو الغاز أو الورق."]],
      [212, 128, ["Oxygen", "الأكسجين"], ["Burning needs oxygen from the air. Covering a fire cuts it off.", "الاحتراق يحتاج أكسجين الهواء، وتغطية النار تقطعه."]],
      [150, 205, ["Heat", "الحرارة"], ["The fuel must reach its ignition point, the lowest temperature at which it starts and keeps burning.", "يجب أن يصل الوقود إلى نقطة اشتعاله، وهي أقل درجة حرارة يبدأ عندها في الاشتعال ويستمر."]],
      [150, 130, ["Remove one side", "أزل ضلعًا واحدًا"], ["Take away fuel, oxygen or heat and the fire goes out.", "أزل الوقود أو الأكسجين أو الحرارة فتنطفئ النار."]],
      [320, 118, ["Blue flame", "اللهب الأزرق"], ["Complete combustion: enough oxygen gives CO₂ + water and more energy.", "احتراق تام: الأكسجين الكافي يعطي ثاني أكسيد الكربون والماء وطاقة أكبر."]],
      [370, 100, ["Yellow flame", "اللهب الأصفر"], ["Incomplete combustion: too little oxygen gives soot and toxic carbon monoxide.", "احتراق غير تام: نقص الأكسجين يعطي السناج وأول أكسيد الكربون السام."]]
    ]
  };

  /* U1 L3 - body */
  D.u1l3 = {
    title: ["What smoke does in the body", "ماذا يفعل الدخان في الجسم"],
    svg: function () {
      return '<circle cx="200" cy="38" r="26" fill="#fcd9b6"/><rect x="150" y="68" width="100" height="150" rx="40" fill="#fde7d3"/>' +
        '<ellipse cx="180" cy="120" rx="20" ry="36" fill="#f9a8b4"/><ellipse cx="220" cy="120" rx="20" ry="36" fill="#f9a8b4"/>' +
        '<circle cx="176" cy="112" r="3" fill="#57534e"/><circle cx="186" cy="128" r="3" fill="#57534e"/><circle cx="224" cy="118" r="3" fill="#57534e"/>' +
        '<path d="M206 150 C196 140 186 150 196 162 L206 172 L216 162 C226 150 216 140 206 150z" fill="#dc2626"/>' +
        '<path d="M206 172 L206 210 M196 162 L168 205 M216 162 L240 205" stroke="#dc2626" stroke-width="3" fill="none"/>' +
        '<ellipse cx="200" cy="30" rx="16" ry="11" fill="#f0abfc" opacity=".8"/>' +
        '<g transform="translate(300 90)"><circle r="9" fill="#f9a8b4" stroke="#fb7185" stroke-width="2"/><circle cx="16" cy="6" r="9" fill="#f9a8b4" stroke="#fb7185" stroke-width="2"/><circle cx="6" cy="20" r="9" fill="#f9a8b4" stroke="#fb7185" stroke-width="2"/></g>' +
        tx(312, 140, t("alveoli", "الحويصلات"), mut) + '<path d="M240 118 L288 98" stroke="var(--muted)" stroke-dasharray="3 3"/>' +
        '<g transform="translate(70 120)"><circle r="14" fill="#ef4444"/><circle r="5" fill="#fca5a5"/></g>' + tx(70, 152, t("red blood cell", "كرة دم حمراء"), mut);
    },
    spots: [
      [200, 30, ["Brain", "المخ"], ["Nicotine reaches the brain in seconds and causes addiction.", "يصل النيكوتين إلى المخ في ثوانٍ ويسبب الإدمان."]],
      [180, 105, ["Lungs", "الرئتان"], ["Tar coats and blackens the lungs and can cause lung cancer.", "القطران يغطي الرئتين ويسوّدهما وقد يسبب سرطان الرئة."]],
      [310, 98, ["Alveoli", "الحويصلات الهوائية"], ["In emphysema their walls break down, so breathing gets hard.", "في انتفاخ الرئة تتهدم جدرانها فيصعب التنفس."]],
      [206, 158, ["Heart and blood vessels", "القلب والأوعية الدموية"], ["Nicotine raises blood pressure and narrows the blood vessels.", "النيكوتين يرفع ضغط الدم ويضيّق الأوعية الدموية."]],
      [70, 120, ["Blood", "الدم"], ["Carbon monoxide binds to haemoglobin faster than oxygen, so blood carries less oxygen.", "أول أكسيد الكربون يرتبط بالهيموجلوبين أسرع من الأكسجين فيحمل الدم أكسجين أقل."]]
    ]
  };

  /* U2 L1 - circuit symbols */
  D.u2l1 = {
    title: ["Reading a circuit diagram", "قراءة رسم الدائرة الكهربية"],
    svg: function () {
      var w = 'stroke="var(--ink)" stroke-width="3" fill="none"';
      return '<g direction="ltr"><path d="M60 50 H170 M210 50 H340 V190 H250 M210 190 H120 M80 190 H60 V50" ' + w + '/>' +
        '<path d="M170 34 V66 M184 42 V58" stroke="var(--ink)" stroke-width="4"/><path d="M184 50 H210" ' + w + '/>' + tx(177, 26, "+ −", mut) +
        '<circle cx="340" cy="120" r="16" ' + w + ' style="fill:var(--card)"/><path d="M329 109 L351 131 M351 109 L329 131" stroke="var(--ink)" stroke-width="3"/>' +
        '<circle cx="230" cy="190" r="16" style="fill:var(--card)" stroke="var(--ink)" stroke-width="3"/>' + tx(230, 195, "A") +
        '<rect x="80" y="180" width="40" height="20" rx="2" style="fill:var(--card)" stroke="var(--ink)" stroke-width="3"/>' +
        '<path d="M60 110 L60 120" ' + w + '/><circle cx="60" cy="98" r="4" fill="var(--ink)"/><path d="M60 98 L76 84" stroke="var(--ink)" stroke-width="3"/><circle cx="60" cy="132" r="4" fill="var(--ink)"/><rect x="54" y="100" width="12" height="30" style="fill:var(--card)"/><path d="M60 100 L74 86" stroke="var(--ink)" stroke-width="3"/>' +
        '<path d="M340 90 H385 V150 H340" stroke="var(--blue-2)" stroke-width="2.5" fill="none" stroke-dasharray="5 4"/><circle cx="385" cy="120" r="14" style="fill:var(--card)" stroke="var(--blue-2)" stroke-width="3"/>' + tx(385, 125, "V", 'style="fill:var(--blue-2)"') +
        '<path d="M250 44 L270 50 L250 56" fill="#f97316"/><path d="M110 196 L90 190 L110 184" fill="#f97316"/></g>';
    },
    spots: [
      [177, 50, ["Cell", "العمود الكهربي"], ["The long line is the positive terminal, the short line is negative. It pushes the charges round.", "الخط الطويل هو القطب الموجب والقصير هو السالب، وهو يدفع الشحنات في الدائرة."]],
      [60, 112, ["Switch", "المفتاح"], ["Open: no path, no current. Closed: the circuit is complete.", "مفتوح: لا مسار ولا تيار، ومغلق: الدائرة مكتملة."]],
      [340, 120, ["Lamp", "المصباح"], ["Turns electrical energy into light and heat.", "يحوّل الطاقة الكهربية إلى ضوء وحرارة."]],
      [230, 190, ["Ammeter", "الأميتر"], ["Measures current in amperes. Always connected in series.", "يقيس شدة التيار بالأمبير ويوصل دائمًا على التوالي."]],
      [385, 120, ["Voltmeter", "الفولتميتر"], ["Measures potential difference in volts. Connected in parallel across the lamp.", "يقيس فرق الجهد بالفولت ويوصل على التوازي مع المصباح."]],
      [100, 190, ["Resistor", "المقاومة"], ["Opposes the current. Measured in ohms (Ω).", "تعيق مرور التيار وتقاس بالأوم."]],
      [260, 50, ["Current direction", "اتجاه التيار"], ["Conventional current flows from + to − outside the cell; electrons move the other way.", "التيار الاصطلاحي يسري من الموجب إلى السالب خارج العمود، والإلكترونات تتحرك في الاتجاه المعاكس."]]
    ]
  };

  /* U2 L2 - interactive V-I graph (custom) */
  D.u2l2 = {
    title: ["Ohm's law on a graph", "قانون أوم على الرسم البياني"],
    custom: function (host, done) {
      var R = 4, V = 8, moved = {};
      host.innerHTML = '<div class="vi"><svg viewBox="0 0 400 240" class="dg-svg" direction="ltr"></svg></div>' +
        '<label class="sl"><span>' + t("Resistance R", "المقاومة R") + ' <b class="slv"></b></span><input type="range" min="1" max="8" step="1" value="4"></label>' +
        '<label class="sl"><span>' + t("Potential difference V", "فرق الجهد V") + ' <b class="slv"></b></span><input type="range" min="0" max="12" step="1" value="8"></label><div class="meter vi-out"></div>';
      var ins = host.querySelectorAll("input");
      function draw() {
        var I = V / R, X = function (v) { return 50 + v * 27; }, Y = function (i) { return 210 - i * 15; }, s = "";
        s += '<path d="M50 20 V210 H380" stroke="var(--ink)" stroke-width="2" fill="none"/>';
        for (var v = 0; v <= 12; v += 2) s += '<text x="' + X(v) + '" y="226" font-size="11" text-anchor="middle" style="fill:var(--muted)">' + v + "</text>";
        for (var i = 0; i <= 12; i += 2) s += '<text x="40" y="' + (Y(i) + 4) + '" font-size="11" text-anchor="end" style="fill:var(--muted)">' + i + "</text>";
        s += '<text x="372" y="204" font-size="12" font-weight="800" style="fill:var(--ink)">V</text><text x="58" y="26" font-size="12" font-weight="800" style="fill:var(--ink)">I (A)</text>';
        [1, 2, 4, 8].forEach(function (r) { if (r !== R) s += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(Math.min(12, r * 12)) + '" y2="' + Y(Math.min(12, 12 / r)) + '" stroke="var(--line)" stroke-width="2"/>'; });
        var vmax = Math.min(12, R * 12);
        s += '<line x1="' + X(0) + '" y1="' + Y(0) + '" x2="' + X(vmax) + '" y2="' + Y(vmax / R) + '" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>';
        s += '<line x1="' + X(V) + '" y1="210" x2="' + X(V) + '" y2="' + Y(I) + '" stroke="var(--blue-2)" stroke-dasharray="4 4"/><line x1="50" y1="' + Y(I) + '" x2="' + X(V) + '" y2="' + Y(I) + '" stroke="var(--blue-2)" stroke-dasharray="4 4"/>';
        s += '<circle cx="' + X(V) + '" cy="' + Y(I) + '" r="8" fill="var(--blue-2)" stroke="#fff" stroke-width="3"/>';
        host.querySelector("svg").innerHTML = s;
        var sl = host.querySelectorAll(".slv"); sl[0].textContent = n(R) + " Ω"; sl[1].textContent = n(V) + " V";
        host.querySelector(".vi-out").innerHTML = '<span class="eq" dir="ltr">I = V ÷ R = ' + V + " ÷ " + R + " = " + (Math.round(I * 100) / 100) + " A</span><span class=\"sub\">" + t("Straight line through the origin: I is directly proportional to V. A bigger R gives a flatter line.", "خط مستقيم يمر بنقطة الأصل: I تتناسب طرديًا مع V، والمقاومة الأكبر تعطي خطًا أقل ميلًا.") + "</span>";
        if (moved.r && moved.v) done();
      }
      ins[0].oninput = function () { R = Number(ins[0].value); moved.r = 1; draw(); };
      ins[1].oninput = function () { V = Number(ins[1].value); moved.v = 1; draw(); };
      draw();
    },
    customHint: ["Move both sliders: change R and watch the slope, change V and watch the point.", "حرّك المؤشرين: غيّر R وراقب ميل الخط، وغيّر V وراقب النقطة."]
  };

  /* U2 L3 - electric motor */
  D.u2l3 = {
    title: ["Inside an electric motor", "داخل المحرك الكهربي"],
    svg: function () {
      return '<g direction="ltr"><rect x="20" y="60" width="70" height="110" rx="10" fill="#ef4444"/>' + tx(55, 122, "N", 'style="fill:#fff"') + '<rect x="310" y="60" width="70" height="110" rx="10" fill="#3b82f6"/>' + tx(345, 122, "S", 'style="fill:#fff"') +
        '<path d="M95 95 H305 M95 115 H305 M95 135 H305" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="6 6"/>' +
        '<g class="spin"><rect x="150" y="70" width="100" height="90" rx="4" fill="none" stroke="#f59e0b" stroke-width="7"/></g>' +
        '<path d="M190 160 V182 M210 160 V182" stroke="#f59e0b" stroke-width="5"/>' +
        '<path d="M182 182 A18 18 0 0 0 198 200 L198 182 Z M218 182 A18 18 0 0 1 202 200 L202 182 Z" fill="#b45309"/>' +
        '<rect x="160" y="186" width="14" height="22" fill="#374151"/><rect x="226" y="186" width="14" height="22" fill="#374151"/>' +
        '<path d="M167 208 V226 H120 M233 208 V226 H280" stroke="var(--ink)" stroke-width="3" fill="none"/>' +
        '<rect x="120" y="216" width="160" height="20" rx="4" fill="var(--bg-2)" stroke="var(--ink)" stroke-width="2"/>' + tx(200, 231, "🔋") + "</g>";
    },
    spots: [
      [55, 80, ["Strong magnets", "مغناطيسان قويان"], ["Their magnetic field runs from the N pole to the S pole across the coil.", "مجالهما المغناطيسي يمتد من القطب الشمالي إلى الجنوبي عبر الملف."]],
      [200, 70, ["The coil", "الملف"], ["Current in the coil inside the field makes two equal and opposite forces: a couple that turns it.", "مرور التيار في الملف داخل المجال يولّد قوتين متساويتين ومتضادتين تكوّنان ازدواجًا يديره."]],
      [200, 192, ["Split ring", "الأسطوانة المشقوقة"], ["Reverses the current in the coil every half turn, so it keeps spinning the same way.", "تعكس التيار في الملف كل نصف دورة فيستمر في الدوران في الاتجاه نفسه."]],
      [233, 197, ["Carbon brushes", "فرشتا الكربون"], ["Press on the split ring and carry current into the spinning coil.", "تضغطان على الأسطوانة المشقوقة وتنقلان التيار إلى الملف الدوار."]],
      [200, 226, ["Energy change", "تحول الطاقة"], ["A motor changes electrical energy into kinetic energy. A generator does the reverse.", "المحرك يحوّل الطاقة الكهربية إلى حركية، والمولد يفعل العكس."]]
    ]
  };

  /* U3 L1 - from cell to gene */
  D.u3l1 = {
    title: ["Zoom in: from cell to gene", "تكبير: من الخلية إلى الجين"],
    svg: function () {
      var dna = "";
      for (var i = 0; i < 6; i++) dna += '<path d="M' + (292 + i * 12) + ' 100 Q ' + (298 + i * 12) + ' 120 ' + (304 + i * 12) + ' 140" stroke="#3b82f6" stroke-width="3" fill="none"/><path d="M' + (292 + i * 12) + ' 140 Q ' + (298 + i * 12) + ' 120 ' + (304 + i * 12) + ' 100" stroke="#ef4444" stroke-width="3" fill="none"/>';
      return '<g direction="ltr"><circle cx="45" cy="120" r="38" fill="#bbf7d0" stroke="#22c55e" stroke-width="3"/><circle cx="52" cy="112" r="14" fill="#a78bfa"/>' +
        '<circle cx="140" cy="120" r="34" fill="#ddd6fe" stroke="#a78bfa" stroke-width="3"/><path d="M128 104 L152 136 M152 104 L128 136 M118 120 L132 112" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"/>' +
        '<path d="M212 80 L248 160 M248 80 L212 160" stroke="#7c3aed" stroke-width="12" stroke-linecap="round"/><rect x="222" y="96" width="16" height="10" fill="#facc15"/>' +
        dna + '<rect x="312" y="96" width="28" height="48" rx="6" fill="none" stroke="#facc15" stroke-width="3"/>' +
        '<path d="M83 120 H104 M176 120 H200 M262 120 H284" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar3)"/><defs><marker id="ar3" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/></marker></defs>' +
        tx(45, 180, t("cell", "خلية")) + tx(140, 180, t("nucleus", "نواة")) + tx(230, 180, t("chromosome", "كروموسوم")) + tx(322, 180, "DNA") + '<rect x="160" y="196" width="80" height="26" rx="13" fill="#fef9c3" stroke="#facc15" stroke-width="2"/>' + tx(200, 214, t("gene", "جين"), 'style="fill:#854d0e"') + "</g>";
    },
    spots: [
      [45, 120, ["Cell", "الخلية"], ["Every cell of your body carries the full set of instructions.", "كل خلية في جسمك تحمل مجموعة التعليمات كاملة."]],
      [140, 120, ["Nucleus", "النواة"], ["The nucleus holds the chromosomes.", "النواة تحتوي على الكروموسومات."]],
      [230, 120, ["Chromosome", "الكروموسوم"], ["DNA wound tightly around proteins. Chromosomes come in pairs, one from each parent.", "حمض نووي ملفوف بإحكام حول بروتينات، وتوجد الكروموسومات في أزواج، واحد من كل أب."]],
      [322, 120, ["DNA", "الحمض النووي DNA"], ["The genetic material that stores the information for all traits.", "المادة الوراثية التي تخزن معلومات كل الصفات."]],
      [200, 209, ["Gene and alleles", "الجين والأليلات"], ["A gene is a piece of DNA for one trait. Its versions are alleles, like Y (yellow) and y (green).", "الجين جزء من الحمض النووي لصفة واحدة، وصوره هي الأليلات مثل Y للأصفر و y للأخضر."]]
    ]
  };

  /* U3 L2 - population growth curve */
  D.u3l2 = {
    title: ["How a population grows", "كيف تنمو الجماعة"],
    svg: function () {
      var pts = [], x;
      for (x = 0; x <= 300; x += 10) pts.push((60 + x) + "," + (200 - 150 / (1 + Math.exp(-(x - 140) / 28))).toFixed(1));
      return '<g direction="ltr"><path d="M60 20 V200 H380" stroke="var(--ink)" stroke-width="2" fill="none"/><line x1="60" y1="52" x2="380" y2="52" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 5"/>' +
        '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>' +
        tx(220, 225, t("time", "الزمن"), mut) + '<text x="30" y="110" font-size="12" font-weight="800" transform="rotate(-90 30 110)" text-anchor="middle" style="fill:var(--muted)">' + t("number of individuals", "عدد الأفراد") + "</text>" +
        tx(330, 44, t("carrying capacity", "السعة التحملية"), 'style="fill:#16a34a"') + "</g>";
    },
    spots: [
      [100, 192, ["Slow start", "بداية بطيئة"], ["Few individuals, so few new births at first.", "عدد الأفراد قليل فيكون عدد المواليد قليلًا في البداية."]],
      [200, 125, ["Rapid growth", "نمو سريع"], ["With plenty of food and space, numbers double again and again: 2, 4, 8, 16…", "مع وفرة الغذاء والمكان يتضاعف العدد مرة بعد مرة: ٢، ٤، ٨، ١٦…"]],
      [280, 66, ["Growth slows", "يتباطأ النمو"], ["Environmental resistance: food runs short, competition, disease and predators.", "المقاومة البيئية: نقص الغذاء والتنافس والأمراض والمفترسات."]],
      [340, 52, ["Carrying capacity", "السعة التحملية"], ["The largest number the environment can support. If it is exceeded, numbers fall back.", "أكبر عدد تستطيع البيئة إعالته، وإذا تجاوزته الجماعة يقل العدد."]]
    ]
  };

  /* U4 L1 - homologous structures */
  D.u4l1 = {
    title: ["Same bones, different jobs", "العظام نفسها بوظائف مختلفة"],
    svg: function () {
      function limb(x, sc, fingers) {
        var s = '<g transform="translate(' + x + ' 30) scale(' + sc + ')"><line x1="40" y1="0" x2="40" y2="60" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>' +
          '<line x1="34" y1="66" x2="30" y2="118" stroke="#3b82f6" stroke-width="7" stroke-linecap="round"/><line x1="46" y1="66" x2="50" y2="118" stroke="#3b82f6" stroke-width="7" stroke-linecap="round"/>';
        fingers.forEach(function (f) { s += '<line x1="40" y1="126" x2="' + (40 + f[0]) + '" y2="' + (126 + f[1]) + '" stroke="#22c55e" stroke-width="5" stroke-linecap="round"/>'; });
        return s + "</g>";
      }
      return '<g direction="ltr">' + limb(20, 1, [[-14, 30], [-6, 36], [2, 38], [10, 36], [18, 28]]) + limb(140, 1, [[-40, 50], [-20, 66], [6, 70], [30, 62], [18, 24]]) +
        '<path d="M160 158 L120 216 L146 226 L166 230 L192 222 L208 186 Z" fill="#a78bfa" opacity=".35"/>' + limb(270, 1, [[-10, 46], [-3, 52], [4, 52], [11, 46], [16, 34]]) +
        '<path d="M290 150 Q 270 210 310 228 Q 350 210 330 150 Z" fill="#94a3b8" opacity=".35"/>' +
        tx(60, 228, t("human arm", "ذراع الإنسان")) + tx(180, 238, t("bat wing", "جناح الخفاش")) + tx(310, 238, t("whale flipper", "زعنفة الحوت")) + "</g>";
    },
    spots: [
      [60, 55, ["Upper arm bone", "عظمة العضد"], ["One long bone in all three limbs (red).", "عظمة طويلة واحدة في الأطراف الثلاثة (باللون الأحمر)."]],
      [180, 120, ["Two forearm bones", "عظمتا الساعد"], ["Two bones in all three (blue), even though the jobs differ.", "عظمتان في الثلاثة (باللون الأزرق) رغم اختلاف الوظائف."]],
      [310, 175, ["Finger bones", "عظام الأصابع"], ["Five sets of finger bones (green): for grasping, flying or swimming.", "خمس مجموعات من عظام الأصابع (باللون الأخضر): للإمساك أو الطيران أو السباحة."]],
      [120, 200, ["Homologous structures", "التراكيب المتماثلة"], ["Same basic structure, different functions. A clue to common ancestry.", "بناء أساسي واحد ووظائف مختلفة، ودليل على أصل مشترك."]],
      [250, 30, ["Analogous structures", "التراكيب المتناظرة"], ["Same job, different structure, like a bat wing and a butterfly wing. Not a sign of shared ancestry.", "وظيفة واحدة وبناء مختلف، مثل جناح الخفاش وجناح الفراشة، وليست دليلًا على أصل مشترك."]]
    ]
  };

  /* U4 L2 - geologic time bar */
  D.u4l2 = {
    title: ["4.6 billion years on one bar", "٤٫٦ مليار سنة على شريط واحد"],
    svg: function () {
      return '<g direction="ltr"><rect x="20" y="80" width="300" height="56" rx="8" fill="#a8a29e"/><rect x="320" y="80" width="30" height="56" fill="#93c5fd"/><rect x="350" y="80" width="20" height="56" fill="#86efac"/><rect x="370" y="80" width="12" height="56" rx="3" fill="#fcd34d"/>' +
        tx(170, 114, t("Precambrian time", "ما قبل الكمبري")) + tx(335, 70, "🪲") + tx(360, 70, "🦖") + tx(376, 56, "🦣") +
        '<path d="M368 140 V176" stroke="#ef4444" stroke-width="3"/>' + tx(340, 192, t("66 million years ago", "منذ ٦٦ مليون سنة"), 'style="fill:#ef4444"') +
        tx(20, 160, "4.6 bn", mut) + tx(382, 160, t("now", "الآن"), mut) + '<path d="M36 70 L36 50" stroke="var(--muted)" stroke-width="2"/>' + tx(60, 44, t("oldest crystals ~4.4 bn", "أقدم البلورات ~٤٫٤ مليار"), mut) + "</g>";
    },
    spots: [
      [24, 108, ["Earth forms", "تكوّن الأرض"], ["About 4.6 billion years ago. Zircon crystals from Australia are about 4.4 billion years old.", "منذ نحو ٤٫٦ مليار سنة، وبلورات الزركون في أستراليا عمرها نحو ٤٫٤ مليار سنة."]],
      [335, 108, ["Paleozoic: ancient life", "حقب الحياة القديمة"], ["The first era of the Phanerozoic eon. Trilobites are a well-known index fossil.", "أول أحقاب دهر الحياة الظاهرة، والتريلوبيت من أشهر حفرياته المرشدة."]],
      [360, 108, ["Mesozoic: middle life", "حقب الحياة الوسطى"], ["The age of dinosaurs and ammonites.", "عصر الديناصورات والأمونيت."]],
      [376, 120, ["Cenozoic: modern life", "حقب الحياة الحديثة"], ["Began after the mass extinction; mammals spread.", "بدأ بعد الانقراض الجماعي، وانتشرت فيه الثدييات."]],
      [368, 168, ["Mass extinction", "الانقراض الجماعي"], ["About 66 million years ago around 75% of species, including most dinosaurs, died out.", "منذ نحو ٦٦ مليون سنة انقرض نحو ٧٥٪ من الأنواع ومنها معظم الديناصورات."]],
      [170, 108, ["Units of time", "وحدات الزمن"], ["Eon → era → period → epoch, from the largest to the smallest.", "الدهر ← الحقب ← العصر ← الزمن، من الأكبر إلى الأصغر."]]
    ]
  };

  E.sciDiagram = function (host, id, onExplored) {
    var d = D[id];
    if (!d) { host.innerHTML = ""; return false; }
    var fired = false;
    function fire() { if (!fired) { fired = true; if (onExplored) onExplored(); } }
    if (d.custom) {
      host.innerHTML = '<p class="sub dg-hint">' + esc(T(d.customHint)) + '</p><div class="dg-c"></div>';
      d.custom(host.querySelector(".dg-c"), fire);
      return true;
    }
    var seen = {};
    host.innerHTML = '<p class="sub dg-hint">' + esc(t("Tap each numbered dot to explore. ", "اضغط على كل نقطة مرقمة لتستكشف. ")) + '<b class="dg-count"></b></p>' +
      '<div class="dg"><svg viewBox="0 0 400 240" class="dg-svg">' + d.svg() + "</svg>" +
      d.spots.map(function (s, i) { return '<button type="button" class="dg-spot" data-i="' + i + '" style="left:' + (s[0] / 4) + "%;top:" + (s[1] / 2.4) + '%">' + n(i + 1) + "</button>"; }).join("") +
      '</div><div class="dg-info"><span class="sub">' + esc(t("Nothing selected yet.", "لم تختر شيئًا بعد.")) + "</span></div>";
    function count() { host.querySelector(".dg-count").textContent = n(Object.keys(seen).length) + " / " + n(d.spots.length); }
    host.querySelectorAll(".dg-spot").forEach(function (b) {
      b.onclick = function () {
        var s = d.spots[Number(b.dataset.i)];
        host.querySelectorAll(".dg-spot").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on", "seen"); seen[b.dataset.i] = 1; count();
        host.querySelector(".dg-info").innerHTML = '<b><span class="dg-n">' + n(Number(b.dataset.i) + 1) + "</span> " + esc(T(s[2])) + "</b><p>" + esc(T(s[3])) + "</p>";
        E.speak(T(s[2]) + ". " + T(s[3]));
        if (Object.keys(seen).length === d.spots.length) { fire(); E.toast("✅ " + t("Diagram explored!", "استكشفت الرسم كله!")); }
      };
    });
    count();
    return true;
  };
  E.sciDiagramTitle = function (id) { return D[id] ? T(D[id].title) : ""; };
})();
