/* EduZone Learn v3 - the 35 British Year 4 skills, grouped into 8 topics.
   Text (explanation + quick check) comes from ../british/year4-map.json; this file adds
   the hands-on tool, the practice generator and the icon for each skill. */
(function () {
  "use strict";
  EZ3.CLUSTERS = [
    { id: "Numbers",      icon: "🔢", color: "blue",   en: "Numbers & place value", ar: "الأعداد والقيمة المكانية", eg: "الأرقام والقيمة المكانية" },
    { id: "Calculations", icon: "➕", color: "orange", en: "Calculations",          ar: "العمليات الحسابية",       eg: "الحساب" },
    { id: "Fractions",    icon: "🍕", color: "pink",   en: "Fractions & percentages", ar: "الكسور والنسب المئوية", eg: "الكسور والنسبة المئوية" },
    { id: "Geometry",     icon: "📐", color: "purple", en: "Shapes & measures",     ar: "الأشكال والقياس",         eg: "الأشكال والقياس" },
    { id: "Position",     icon: "🧭", color: "teal",   en: "Position & direction",  ar: "الموقع والاتجاه",          eg: "المكان والاتجاه" },
    { id: "Time",         icon: "⏰", color: "yellow", en: "Time",                  ar: "الزمن",                   eg: "الوقت" },
    { id: "Data",         icon: "📊", color: "green",  en: "Data & graphs",         ar: "البيانات والتمثيل البياني", eg: "البيانات والرسوم" },
    { id: "Probability",  icon: "🎲", color: "red",    en: "Chance",                ar: "الاحتمال",                eg: "الاحتمالات" }
  ];

  // id: [icon, tool, mode(s) for Try it, practice generator]
  var X = {
    "by4-01": ["🌡️", "numberline", ["negative"], "negative"],
    "by4-02": ["🦘", "numberline", ["count"], "countstep"],
    "by4-03": ["🧮", "placevalue", ["build"], "placevalue"],
    "by4-04": ["🎯", "numberline", ["round"], "rounding"],
    "by4-05": ["⚖️", "placevalue", ["compare"], "compare"],
    "by4-06": ["🔷", "polygon", ["polygons"], "polygons"],
    "by4-07": ["🧱", "tessellate", ["tessellate"], "tessellate"],
    "by4-08": ["🧩", "areagrid", ["compound"], "compound"],
    "by4-09": ["📏", "areagrid", ["perimeter"], "perimeter"],
    "by4-10": ["🟦", "areagrid", ["area"], "area"],
    "by4-11": ["🧠", "numberline", ["bridge"], "mental"],
    "by4-12": ["✖️", "array", ["facts"], "facts"],
    "by4-13": ["🕕", "clock", ["24h"], "time24"],
    "by4-14": ["📅", "clock", ["duration"], "timetable"],
    "by4-15": ["📋", "datachart", ["tally"], "tally"],
    "by4-16": ["⭕", "venn", ["venn", "carroll"], "venn"],
    "by4-17": ["🌦️", "spinner", ["likelihood"], "likelihood"],
    "by4-18": ["🪙", "spinner", ["experiment"], "experiment"],
    "by4-19": ["🍰", "fraction", ["shade"], "fracparts"],
    "by4-20": ["🟰", "fraction", ["equivalent"], "fracequiv"],
    "by4-21": ["🥧", "fraction", ["addsub"], "fracadd"],
    "by4-22": ["❓", "balance", ["missing"], "missing"],
    "by4-23": ["🔲", "gridmethod", ["multiply"], "multiply"],
    "by4-24": ["🔁", "hundred", ["square"], "sequence"],
    "by4-25": ["🧊", "shapes3d", ["solids"], "solids"],
    "by4-26": ["📐", "angle", ["angles"], "angles"],
    "by4-27": ["🧭", "compass", ["compass"], "compass"],
    "by4-28": ["📍", "coordgrid", ["plot"], "coords"],
    "by4-29": ["🔗", "array", ["factors"], "factors"],
    "by4-30": ["⏳", "converter", ["time"], "units"],
    "by4-31": ["⏹️", "array", ["square"], "squares"],
    "by4-32": ["➗", "share", ["divide"], "divide"],
    "by4-33": ["📊", "datachart", ["graph"], "graphs"],
    "by4-34": ["🪞", "coordgrid", ["reflect"], "reflect"],
    "by4-35": ["💯", "hundred", ["percent"], "percent"]
  };

  // names of the tool modes, shown on the mode switch when a skill has more than one
  EZ3.MODE_NAMES = {
    venn: { en: "Venn diagram", ar: "شكل فن" },
    carroll: { en: "Carroll diagram", ar: "مخطط كارول" }
  };

  /* ---------- curricula: the same 35 skills, organised three ways ----------
     british  = the school's Year 4 long-term plan (clusters + terms 1-3 from year4-map.json)
     american = Common Core Grade 4 domains; each skill carries its standard code
     national = Egyptian Primary 4 units 1-13 (unit ids match ../learn/content/catalog.json)
     A skill that is not part of a curriculum's Grade 4 goes into that curriculum's "Extra practice" group. */
  EZ3.CURRICULA = {
    british: { flag: "🇬🇧", en: "British", ar: "بريطاني", sub: { en: "British Year 4 · Maths", ar: "رياضيات · السنة الرابعة البريطانية" }, terms: [1, 2, 3] },
    american: { flag: "🇺🇸", en: "American", ar: "أمريكي", sub: { en: "American Grade 4 · Common Core Maths", ar: "رياضيات · الصف الرابع الأمريكي" }, terms: null,
      groups: [
        { id: "OA", icon: "➕", color: "orange", code: "4.OA", en: "Operations & Algebraic Thinking", ar: "العمليات والتفكير الجبري",
          skills: [["by4-12", "4.OA.A.1"], ["by4-22", "4.OA.A.3"], ["by4-29", "4.OA.B.4"], ["by4-02", "4.OA.C.5"], ["by4-24", "4.OA.C.5"]] },
        { id: "NBT", icon: "🔢", color: "blue", code: "4.NBT", en: "Number & Operations in Base Ten", ar: "الأعداد والعمليات في النظام العشري",
          skills: [["by4-03", "4.NBT.A.1"], ["by4-05", "4.NBT.A.2"], ["by4-04", "4.NBT.A.3"], ["by4-11", "4.NBT.B.4"], ["by4-23", "4.NBT.B.5"], ["by4-32", "4.NBT.B.6"]] },
        { id: "NF", icon: "🍕", color: "pink", code: "4.NF", en: "Number & Operations – Fractions", ar: "الأعداد والعمليات – الكسور",
          skills: [["by4-20", "4.NF.A.1"], ["by4-19", "4.NF.B.3"], ["by4-21", "4.NF.B.3.a"]] },
        { id: "MD", icon: "📏", color: "green", code: "4.MD", en: "Measurement & Data", ar: "القياس والبيانات",
          skills: [["by4-30", "4.MD.A.1"], ["by4-14", "4.MD.A.2"], ["by4-09", "4.MD.A.3"], ["by4-10", "4.MD.A.3"], ["by4-26", "4.MD.C.5"],
            ["by4-08", "3.MD.C.7", true], ["by4-15", "3.MD.B.3", true], ["by4-33", "3.MD.B.3", true]] },
        { id: "G", icon: "📐", color: "purple", code: "4.G", en: "Geometry", ar: "الهندسة",
          skills: [["by4-06", "4.G.A.2"], ["by4-34", "4.G.A.3"]] }
      ] },
    national: { flag: "🇪🇬", en: "National (Egypt)", ar: "قومي (مصري)", sub: { en: "Egyptian National · Primary 4 Maths", ar: "رياضيات · الصف الرابع الابتدائي (المنهج المصري)" }, terms: [1, 2],
      groups: [
        { id: "U1", num: 1, term: 1, unit: "g4-math-u01", icon: "🔢", color: "blue", en: "Place Value", ar: "القيمة المكانية", skills: [["by4-03"], ["by4-05"], ["by4-04"]] },
        { id: "U2", num: 2, term: 1, unit: "g4-math-u02", icon: "➕", color: "orange", en: "Addition and Subtraction Strategies", ar: "إستراتيجيات الجمع والطرح", skills: [["by4-11"], ["by4-22"]] },
        { id: "U3", num: 3, term: 1, unit: "g4-math-u03", icon: "📏", color: "yellow", en: "Measurement", ar: "مفاهيم القياس", skills: [["by4-30"], ["by4-14"]] },
        { id: "U4", num: 4, term: 1, unit: "g4-math-u04", icon: "🟦", color: "purple", en: "Area and Perimeter", ar: "المساحة والمحيط", skills: [["by4-09"], ["by4-10"], ["by4-08"]] },
        { id: "U5", num: 5, term: 1, unit: "g4-math-u05", icon: "✖️", color: "orange", en: "Multiplication as a Relationship", ar: "الضرب كعلاقة", skills: [["by4-12"]] },
        { id: "U6", num: 6, term: 1, unit: "g4-math-u06", icon: "🔗", color: "teal", en: "Factors and Multiples", ar: "العوامل والمضاعفات", skills: [["by4-29"]] },
        { id: "U7", num: 7, term: 1, unit: "g4-math-u07", icon: "➗", color: "red", en: "Multiplication and Division", ar: "الضرب والقسمة", skills: [["by4-23"], ["by4-32"]] },
        { id: "U8", num: 8, term: 1, unit: "g4-math-u08", icon: "🧮", color: "green", en: "Order of Operations", ar: "ترتيب العمليات", skills: [] },
        { id: "U9", num: 9, term: 2, unit: "g4-math-frac", icon: "🍕", color: "pink", en: "Fractions", ar: "الكسور الاعتيادية", skills: [["by4-19"], ["by4-20"], ["by4-21"]] },
        { id: "U10", num: 10, term: 2, unit: "g4-math-u10", icon: "🔟", color: "blue", en: "Decimals", ar: "الكسور العشرية", skills: [], soon: true },
        { id: "U11", num: 11, term: 2, unit: "g4-math-u11", icon: "📊", color: "green", en: "Data", ar: "البيانات", skills: [["by4-15"], ["by4-33"]] },
        { id: "U12", num: 12, term: 2, unit: "g4-math-u12", icon: "🔷", color: "purple", en: "Geometry: Lines, Angles and Shapes", ar: "الهندسة: الخطوط والزوايا والأشكال", skills: [["by4-06"]] },
        { id: "U13", num: 13, term: 2, unit: "g4-math-u13", icon: "📐", color: "teal", en: "Measuring Angles", ar: "قياس الزوايا", skills: [["by4-26"]] }
      ] }
  };
  // units of the Egyptian plan that have full guided lessons in ../learn (U10-U13 not written yet)
  var LESSON_UNITS = { "g4-math-u01": 6, "g4-math-u02": 6, "g4-math-u03": 6, "g4-math-u04": 5, "g4-math-u05": 6, "g4-math-u06": 5, "g4-math-u07": 6, "g4-math-u08": 4, "g4-math-frac": 7 };
  EZ3.lessonCount = function (unit) { return LESSON_UNITS[unit] || 0; };

  /* groupsFor(cur, skills) -> [{ id, icon, color, title, skills:[skill], meta:{skillId: {code, review}}, unit?, term?, num?, extra? }] */
  EZ3.groupsFor = function (cur, skills) {
    var BY = {}; skills.forEach(function (s) { BY[s.id] = s; });
    var out;
    if (cur === "british" || !EZ3.CURRICULA[cur]) {
      out = EZ3.CLUSTERS.map(function (c) {
        return { id: c.id, icon: c.icon, color: c.color, title: { en: c.en, ar: c.ar }, skills: skills.filter(function (s) { return s.cluster === c.id; }), meta: {} };
      });
      return out;
    }
    var used = {};
    out = EZ3.CURRICULA[cur].groups.map(function (g) {
      var meta = {}, list = [];
      g.skills.forEach(function (x) { if (BY[x[0]]) { list.push(BY[x[0]]); used[x[0]] = 1; meta[x[0]] = { code: x[1] || "", review: !!x[2] }; } });
      return { id: g.id, icon: g.icon, color: g.color, title: { en: g.en, ar: g.ar }, skills: list, meta: meta, unit: g.unit, term: g.term, num: g.num, code: g.code, soon: g.soon };
    });
    var extra = skills.filter(function (s) { return !used[s.id]; });
    if (extra.length) out.push({ id: "extra", icon: "⭐", color: "teal", extra: true, skills: extra, meta: {},
      title: { en: "Extra practice (beyond this Grade 4 plan)", ar: "تدريب إضافي (خارج خطة هذا الصف)" } });
    return out;
  };

  // Called by app.js with the parsed year4-map.json
  EZ3.buildSkills = function (map) {
    return map.map(function (m, i) {
      var x = X[m.id] || ["⭐", null, [], null];
      return {
        id: m.id, order: i, cluster: m.cluster, term: m.term, unit: m.unit || "",
        title: { en: m.en, ar: m.ar },
        explain: { en: m.exen, ar: m.exar },
        check: { q: { en: m.qen, ar: m.qar }, options: m.options, correct: m.correct, why: { en: m.whyen, ar: m.whyar } },
        icon: x[0], tool: x[1], modes: x[2], gen: x[3]
      };
    }).sort(function (a, b) { return a.term - b.term || a.order - b.order; });
  };
})();
