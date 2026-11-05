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
