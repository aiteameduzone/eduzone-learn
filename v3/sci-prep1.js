/* EduZone Learn v3 - Science, Egyptian Prep 1 (1st preparatory), Term 1 (2026-2027).
   Follows the Ministry Student's Book contents exactly:
     Unit 1 The Matter (4 lessons), Unit 2 Force Fields (3), Unit 3 Living Organisms, Their Structure and Processes (3),
     Unit 4 The (Earth - Sun - Moon) System (2). 12 lessons, ids prep1u1l1 ... prep1u4l2.
   Same lesson shape as Prep 3 (see sci3-data-a.js). Registered as EZ3.SCIG.prep1.
   Labs: part 1 of every lesson is a live canvas simulation (prep1_* in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  E.SCIG = E.SCIG || {};
  var U = [];

  /* ======================= UNIT 1 - THE MATTER ======================= */
  U.push({
    id: "prep1u1", num: 1, icon: "⚛️", color: "blue",
    title: { en: "The Matter", ar: "المادة" },
    lessons: [
      {
        id: "prep1u1l1", icon: "⚛️", page: 2,
        title: { en: "Structure of the Atom", ar: "تركيب الذرة" },
        idea: {
          official: {
            en: ["Matter is anything that has mass and occupies space. The atom is the building unit of any matter.",
              "Rutherford's model (1909) was the first atomic model built on experiments: a tiny nucleus with electrons moving around it at very high speeds.",
              "The nucleus holds protons (charge +1, mass 1 u) and neutrons (no charge, mass 1 u). Electrons (charge −1) have a mass of only 1/1836 u.",
              "Electrons move in energy levels K, L, M, N... Level n holds at most 2n² electrons, and the outermost level holds no more than 8.",
              "Atomic number Z = number of protons. Mass number A = protons + neutrons, so neutrons = A − Z. An atom is neutral because protons = electrons.",
              "Isotopes are atoms of the same element with the same atomic number but different mass numbers, like protium, deuterium and tritium."],
            ar: ["المادة هي كل ما له كتلة ويشغل حيزًا من الفراغ، والذرة هي وحدة بناء أي مادة.",
              "نموذج رذرفورد (١٩٠٩) أول نموذج للذرة قائم على التجربة: نواة صغيرة جدًا تدور حولها الإلكترونات بسرعات عالية جدًا.",
              "تحتوي النواة على البروتونات (شحنتها +١ وكتلتها ١ u) والنيوترونات (متعادلة وكتلتها ١ u)، أما الإلكترونات (شحنتها −١) فكتلتها ١/١٨٣٦ u فقط.",
              "تدور الإلكترونات في مستويات الطاقة K وL وM وN...، ويتشبع المستوى n بعدد 2n² من الإلكترونات، ولا يزيد المستوى الأخير على ٨ إلكترونات.",
              "العدد الذري Z = عدد البروتونات، والعدد الكتلي A = البروتونات + النيوترونات، إذن النيوترونات = A − Z، والذرة متعادلة لأن البروتونات = الإلكترونات.",
              "النظائر ذرات لعنصر واحد لها العدد الذري نفسه وتختلف في العدد الكتلي، مثل البروتيوم والديوتيريوم والتريتيوم."]
          },
          story: {
            en: ["Youssef stands near the Sphinx and touches the limestone. It is mostly calcium carbonate, made of molecules, and the molecules are made of atoms.",
              "His teacher says: if the atom were as big as a football stadium, the nucleus would be a pinhead in the middle of the pitch.",
              "Youssef imagines the nucleus as a crowded centre circle of red players (protons) and grey players (neutrons). Light blue runners (electrons) race around the stands.",
              "The stands have rows. The first row fits 2 runners, the second 8, and extra runners must climb to the next row up.",
              "Same team, different weights: three hydrogen atoms, one with no neutron, one with 1 and one with 2. Those are isotopes."],
            ar: ["يقف يوسف بجوار تمثال أبي الهول ويلمس الحجر الجيري؛ إنه في معظمه كربونات كالسيوم مكوّنة من جزيئات، والجزيئات مكوّنة من ذرات.",
              "يقول معلمه: لو كانت الذرة في حجم ملعب كرة قدم لكانت النواة في حجم رأس دبوس في منتصف الملعب.",
              "يتخيل يوسف النواة دائرة منتصف مزدحمة بلاعبين حمر (بروتونات) ورمادية (نيوترونات)، بينما عدّاؤون زرق خفاف (إلكترونات) يجرون حول المدرجات.",
              "للمدرجات صفوف: الصف الأول يتسع لعدّاءين، والثاني لثمانية، وأي عدّاء زائد يصعد إلى الصف التالي.",
              "فريق واحد بأوزان مختلفة: ثلاث ذرات هيدروجين، واحدة بلا نيوترون، وأخرى بنيوترون، وثالثة بنيوترونين؛ هذه هي النظائر."]
          }
        },
        words: [
          ["Atom", "الذرة", "The building unit of any matter.", "وحدة بناء أي مادة."],
          ["Nucleus", "النواة", "The tiny positive centre of the atom that holds protons and neutrons (nucleons).", "مركز الذرة الصغير الموجب، ويحتوي على البروتونات والنيوترونات (النيوكليونات)."],
          ["Energy level", "مستوى الطاقة", "A path where electrons move around the nucleus. The farther it is, the higher its energy.", "مسار تدور فيه الإلكترونات حول النواة، وكلما بعد عن النواة زادت طاقته."],
          ["Atomic number (Z)", "العدد الذري (Z)", "The number of protons in the nucleus, written at the lower left of the symbol.", "عدد البروتونات في النواة، ويُكتب أسفل يسار رمز العنصر."],
          ["Mass number (A)", "العدد الكتلي (A)", "Protons + neutrons, written at the upper left of the symbol.", "مجموع البروتونات والنيوترونات، ويُكتب أعلى يسار رمز العنصر."],
          ["Isotopes", "النظائر", "Atoms of one element with the same atomic number but different mass numbers.", "ذرات لعنصر واحد لها العدد الذري نفسه وتختلف في العدد الكتلي."],
          ["Element symbol", "رمز العنصر", "One capital letter, or a capital and a small letter, usually from the Latin name: Na from Natrium.", "حرف كبير أو حرف كبير يليه صغير، ويؤخذ غالبًا من الاسم اللاتيني: Na من Natrium."]
        ],
        lab: { parts: [{ type: "prep1_atom" }, {
          type: "sort",
          prompt: ["Tap a clue, then tap the particle it describes.", "اضغط على الدليل ثم اضغط على الجسيم الذي يصفه."],
          bins: [["p", "🔴", "Proton", "بروتون"], ["n", "⚪", "Neutron", "نيوترون"], ["e", "🔵", "Electron", "إلكترون"]],
          items: [[["Charge +1", "شحنته +١"], "p"], [["Its number is the atomic number Z", "عدده هو العدد الذري Z"], "p"], [["No electric charge", "متعادل الشحنة"], "n"], [["Number = A − Z", "عدده = A − Z"], "n"],
            [["Charge −1", "شحنته −١"], "e"], [["Mass 1/1836 u", "كتلته ١/١٨٣٦ u"], "e"], [["Moves in energy levels", "يدور في مستويات الطاقة"], "e"]]
        }] },
        quiz: [
          Q(["Which particle has the smallest mass?", "أي الجسيمات له أصغر كتلة؟"], [["Electron", "الإلكترون"], ["Proton", "البروتون"], ["Neutron", "النيوترون"], ["Nucleus", "النواة"]],
            ["The electron's mass is 1/1836 u, so it is neglected when we calculate the mass of the atom.", "كتلة الإلكترون ١/١٨٣٦ u، لذلك تُهمل عند حساب كتلة الذرة."], ["The runners in the stands are feather-light compared with the players in the centre circle.", "العدّاؤون في المدرجات خفاف كالريش مقارنة باللاعبين في دائرة المنتصف."]),
          Q(["Why is the atom electrically neutral?", "لماذا تكون الذرة متعادلة كهربيًا؟"], [["The number of protons equals the number of electrons", "عدد البروتونات يساوي عدد الإلكترونات"], ["It has no electrons", "لا تحتوي على إلكترونات"], ["Neutrons cancel all charges", "النيوترونات تلغي كل الشحنات"], ["Protons are more than electrons", "البروتونات أكثر من الإلكترونات"]],
            ["Each proton has +1 and each electron −1, and their numbers are equal, so the charges cancel.", "لكل بروتون شحنة +١ ولكل إلكترون −١، وعددهما متساوٍ فتتعادل الشحنات."], ["Every red player has a blue runner as a partner, so the scoreboard reads zero.", "لكل لاعب أحمر عدّاء أزرق يقابله، فتظهر النتيجة صفرًا."]),
          Q(["How many electrons fill the third energy level (M)?", "كم إلكترونًا يتشبع به مستوى الطاقة الثالث (M)؟"], [["18", "١٨"], ["8", "٨"], ["2", "٢"], ["32", "٣٢"]],
            ["Use 2n²: n = 3 gives 2 × 9 = 18 electrons.", "باستخدام 2n²: عندما n = 3 يكون العدد ٢ × ٩ = ١٨ إلكترونًا."], ["Row 3 of the stands is big: 2 × 3 × 3 = 18 seats.", "الصف الثالث في المدرجات كبير: ٢ × ٣ × ٣ = ١٨ مقعدًا."]),
          Q(["An atom has 11 protons and 12 neutrons. What is its mass number?", "ذرة بها ١١ بروتونًا و١٢ نيوترونًا. ما عددها الكتلي؟"], [["23", "٢٣"], ["11", "١١"], ["12", "١٢"], ["1", "١"]],
            ["Mass number A = protons + neutrons = 11 + 12 = 23.", "العدد الكتلي A = البروتونات + النيوترونات = ١١ + ١٢ = ٢٣."], ["Count everyone in the centre circle: 11 red + 12 grey = 23 players.", "عُدّ كل من في دائرة المنتصف: ١١ أحمر + ١٢ رمادي = ٢٣ لاعبًا."]),
          Q(["Element X has 20 neutrons and 39 nucleons. How many electrons does its neutral atom have?", "العنصر X نواته بها ٢٠ نيوترونًا و٣٩ نيوكليونًا. كم إلكترونًا في ذرته المتعادلة؟"], [["19", "١٩"], ["20", "٢٠"], ["39", "٣٩"], ["59", "٥٩"]],
            ["Protons = A − neutrons = 39 − 20 = 19, and a neutral atom has as many electrons as protons.", "البروتونات = A − النيوترونات = ٣٩ − ٢٠ = ١٩، والذرة المتعادلة إلكتروناتها بعدد بروتوناتها."], ["39 players minus 20 grey ones leaves 19 red players, so 19 runners in the stands.", "٣٩ لاعبًا ناقص ٢٠ رماديًا يتبقى ١٩ لاعبًا أحمر، إذن ١٩ عدّاءً في المدرجات."]),
          Q(["Which number is the same in all atoms of the same element?", "أي الأعداد يكون واحدًا في كل ذرات العنصر نفسه؟"], [["The atomic number", "العدد الذري"], ["The mass number", "العدد الكتلي"], ["The number of neutrons", "عدد النيوترونات"], ["The number of nucleons", "عدد النيوكليونات"]],
            ["The number of protons identifies the element. Isotopes differ only in neutrons.", "عدد البروتونات يحدد العنصر، والنظائر تختلف في النيوترونات فقط."], ["The team badge is the number of red players. Grey players can change, the badge cannot.", "شارة الفريق هي عدد اللاعبين الحمر؛ قد يتغير عدد الرماديين أما الشارة فلا."]),
          Q(["Why is the symbol of sodium Na?", "لماذا رمز الصوديوم Na؟"], [["It comes from its Latin name, Natrium", "مأخوذ من اسمه اللاتيني Natrium"], ["It is the first letters of 'sodium'", "هو أول حرفين من sodium"], ["Scientists chose random letters", "اختار العلماء حروفًا عشوائية"], ["Na means salt in English", "Na تعني الملح بالإنجليزية"]],
            ["When the English and Latin names differ, the symbol is taken from the Latin name, like K from Kalium and Fe from Ferrum.", "إذا اختلف الاسم الإنجليزي عن اللاتيني يؤخذ الرمز من اللاتيني، مثل K من Kalium وFe من Ferrum."], ["Sodium has an old Latin nickname, Natrium, and its shirt shows the nickname.", "للصوديوم لقب لاتيني قديم هو Natrium، وقميصه يحمل هذا اللقب."])
        ]
      },
      {
        id: "prep1u1l2", icon: "🧮", page: 10,
        title: { en: "The Periodic Table of Elements", ar: "الجدول الدوري للعناصر" },
        idea: {
          official: {
            en: ["Mendeleev (1869) made the first periodic table, arranging elements by increasing atomic mass. Moseley then arranged them by increasing atomic number and added the noble gases.",
              "The modern periodic table has 7 horizontal periods, 18 vertical groups and 118 elements, arranged by atomic number and the way sublevels fill.",
              "Blocks: s on the left (groups 1A alkali metals and 2A alkaline earth metals), p on the right, d in the middle (transition elements) and f at the bottom.",
              "The period number = the number of occupied energy levels. For s and p groups, the group number = the number of electrons in the last level.",
              "Most metals end with 1, 2 or 3 outer electrons; most nonmetals with 5, 6 or 7. Valency = group number for 1A-4A, and 8 minus outer electrons for 5A to group 0.",
              "Down a group the atomic radius increases. Activity increases down the alkali and alkaline earth metals but decreases down the halogens."],
            ar: ["وضع مندليف (١٨٦٩) أول جدول دوري ورتب العناصر تصاعديًا حسب الكتل الذرية، ثم رتبها موزلي تصاعديًا حسب الأعداد الذرية وأضاف الغازات النبيلة.",
              "يتكون الجدول الدوري الحديث من ٧ دورات أفقية و١٨ مجموعة رأسية و١١٨ عنصرًا، مرتبة حسب العدد الذري وطريقة امتلاء المستويات الفرعية.",
              "الفئات: s يسار الجدول (المجموعة 1A الفلزات القلوية و2A الفلزات القلوية الأرضية)، وp يمين الجدول، وd في الوسط (العناصر الانتقالية)، وf أسفل الجدول.",
              "رقم الدورة = عدد مستويات الطاقة المشغولة بالإلكترونات، وفي مجموعات s وp رقم المجموعة = عدد إلكترونات المستوى الأخير.",
              "معظم الفلزات ينتهي توزيعها بـ ١ أو ٢ أو ٣ إلكترونات، ومعظم اللافلزات بـ ٥ أو ٦ أو ٧. التكافؤ = رقم المجموعة من 1A إلى 4A، و= ٨ ناقص إلكترونات المستوى الأخير من 5A إلى المجموعة الصفرية.",
              "يزداد نصف القطر الذري في المجموعة الواحدة بزيادة العدد الذري، ويزداد النشاط في الفلزات القلوية والقلوية الأرضية، ويقل في الهالوجينات."]
          },
          story: {
            en: ["Malak's school library in Mansoura puts its books on shelves: rows across and columns down.",
              "The rows are periods. Every new row means the atom has one more energy level, like one more floor in a building.",
              "The columns are groups, like families. Lithium, sodium and potassium all have 1 outer electron, so they behave alike and react fast.",
              "On the far right lives the calm family, the noble gases. Their outer level is full, so their valency is zero.",
              "Malak notices that going down a column the atoms get bigger, just like her cousins get taller from the youngest to the eldest."],
            ar: ["في مكتبة مدرسة ملك بالمنصورة تُرتب الكتب على رفوف: صفوف أفقية وأعمدة رأسية.",
              "الصفوف هي الدورات؛ كل صف جديد يعني أن للذرة مستوى طاقة إضافيًا، مثل دور إضافي في عمارة.",
              "الأعمدة هي المجموعات مثل العائلات؛ الليثيوم والصوديوم والبوتاسيوم في كل منها إلكترون واحد في المستوى الأخير، فتتشابه في سلوكها وتتفاعل بسرعة.",
              "في أقصى اليمين تعيش العائلة الهادئة: الغازات النبيلة؛ مستواها الأخير مكتمل لذلك تكافؤها صفر.",
              "تلاحظ ملك أن الذرات تكبر كلما نزلنا في العمود، تمامًا مثل أبناء عمها الذين يطولون من الأصغر إلى الأكبر."]
          }
        },
        words: [
          ["Period", "الدورة", "A horizontal row. Its number = the number of occupied energy levels.", "صف أفقي، ورقمه = عدد مستويات الطاقة المشغولة."],
          ["Group", "المجموعة", "A vertical column. Elements in one group have similar chemical properties.", "عمود رأسي، وعناصر المجموعة الواحدة متشابهة في خواصها الكيميائية."],
          ["Alkali metals", "الفلزات القلوية", "Group 1A metals: very active, with 1 outer electron.", "فلزات المجموعة 1A: نشطة جدًا ولها إلكترون واحد في المستوى الأخير."],
          ["Halogens", "الهالوجينات", "Group 7A nonmetals with 7 outer electrons.", "لافلزات المجموعة 7A ولها ٧ إلكترونات في المستوى الأخير."],
          ["Noble gases", "الغازات النبيلة", "The last group (0). Their outer level is full, so their valency is zero.", "المجموعة الأخيرة (الصفرية)، مستواها الأخير مكتمل وتكافؤها صفر."],
          ["Metalloids", "أشباه الفلزات", "Elements such as B, Si, Ge, As, Sb and Te with properties between metals and nonmetals.", "عناصر مثل B وSi وGe وAs وSb وTe لها خواص بين الفلزات واللافلزات."],
          ["Valency", "التكافؤ", "The number of unpaired electrons in the element's Lewis structure.", "عدد الإلكترونات المفردة في تركيب لويس للعنصر."]
        ],
        lab: { parts: [{ type: "prep1_ptable" }, {
          type: "sort",
          prompt: ["Tap an element, then its type.", "اضغط على عنصر ثم على نوعه."],
          bins: [["m", "🔩", "Metal", "فلز"], ["n", "💨", "Nonmetal", "لافلز"], ["d", "🔀", "Metalloid", "شبه فلز"]],
          items: [[eq("Na"), "m"], [eq("Mg"), "m"], [eq("Al"), "m"], [eq("K"), "m"], [eq("O"), "n"], [eq("Cl"), "n"], [eq("N"), "n"], [eq("S"), "n"], [eq("Si"), "d"], [eq("B"), "d"], [eq("Ge"), "d"]]
        }] },
        quiz: [
          Q(["Who arranged the elements by increasing atomic number?", "من رتب العناصر تصاعديًا حسب أعدادها الذرية؟"], [["Moseley", "موزلي"], ["Mendeleev", "مندليف"], ["Rutherford", "رذرفورد"], ["Dalton", "دالتون"]],
            ["After Rutherford discovered the proton, Moseley found that properties repeat with atomic number, not atomic mass.", "بعد أن اكتشف رذرفورد البروتون وجد موزلي أن تكرار الخواص يرتبط بالعدد الذري وليس بالكتلة الذرية."], ["Moseley re-shelved the library by the badge number, not by how heavy each book was.", "أعاد موزلي ترتيب المكتبة حسب رقم الشارة لا حسب وزن كل كتاب."]),
          Q(["The electrons of an element are " + eq("2, 8, 1") + ". Where is it?", "التوزيع الإلكتروني لعنصر " + eq("2, 8, 1") + ". أين يقع؟"], [["Period 3, group 1A", "الدورة الثالثة، المجموعة 1A"], ["Period 1, group 3A", "الدورة الأولى، المجموعة 3A"], ["Period 3, group 8A", "الدورة الثالثة، المجموعة 8A"], ["Period 2, group 1A", "الدورة الثانية، المجموعة 1A"]],
            ["3 occupied levels give period 3, and 1 outer electron gives group 1A. It is sodium.", "٣ مستويات مشغولة تعني الدورة الثالثة، وإلكترون واحد في الأخير يعني المجموعة 1A؛ إنه الصوديوم."], ["Three floors in the building and one person on the top floor: row 3, column 1.", "ثلاثة أدوار في العمارة وشخص واحد في الدور الأخير: الصف ٣ والعمود ١."]),
          Q(["What is the valency of nitrogen (group 5A)?", "ما تكافؤ النيتروجين (المجموعة 5A)؟"], [["Trivalent (3)", "ثلاثي التكافؤ (٣)"], ["Pentavalent (5)", "خماسي التكافؤ (٥)"], ["Monovalent (1)", "أحادي التكافؤ (١)"], ["Zero", "صفر"]],
            ["For groups 5A to 0, valency = 8 − outer electrons = 8 − 5 = 3.", "في المجموعات من 5A إلى الصفرية: التكافؤ = ٨ − إلكترونات المستوى الأخير = ٨ − ٥ = ٣."], ["Nitrogen has 5 friends on the top floor but only 3 are single, so it can hold 3 hands.", "للنيتروجين ٥ أصدقاء في الدور الأخير، لكن ٣ منهم فقط بلا شريك، فيمسك ٣ أيدٍ."]),
          Q(["Which group are the halogens?", "في أي مجموعة توجد الهالوجينات؟"], [["7A", "7A"], ["1A", "1A"], ["2A", "2A"], ["0", "الصفرية"]],
            ["The halogens (F, Cl, Br, I) are the group before the last, with 7 outer electrons.", "الهالوجينات (F وCl وBr وI) هي المجموعة قبل الأخيرة ولها ٧ إلكترونات في المستوى الأخير."], ["They sit just next to the calm noble family, one seat short of a full row.", "تجلس بجوار العائلة النبيلة الهادئة، ينقصها مقعد واحد لاكتمال الصف."]),
          Q(["How do the melting and boiling points of the alkali metals change from Li to K?", "كيف تتغير درجتا انصهار وغليان الفلزات القلوية من Li إلى K؟"], [["They decrease", "تقل"], ["They increase", "تزداد"], ["They stay the same", "تبقى ثابتة"], ["They become zero", "تصبح صفرًا"]],
            ["Book data: Li melts at 181 °C, Na at 98 °C and K at 64 °C, so they decrease as the atomic number increases.", "بيانات الكتاب: ينصهر Li عند ١٨١ °س وNa عند ٩٨ °س وK عند ٦٤ °س، فهي تقل بزيادة العدد الذري."], ["The bigger cousins melt faster in the sun: K softens before Na, and Na before Li.", "الأقارب الأكبر يذوبون أسرع في الشمس: K يلين قبل Na، وNa قبل Li."]),
          Q(["Which statement about atomic radius is correct?", "أي عبارة صحيحة عن نصف القطر الذري؟"], [["It increases down a group", "يزداد بالنزول في المجموعة"], ["It decreases down a group", "يقل بالنزول في المجموعة"], ["It is the same for all elements", "واحد لكل العناصر"], ["It depends only on neutrons", "يعتمد على النيوترونات فقط"]],
            ["Each step down adds an energy level, so the atom gets bigger: Li 157 pm, Na 191 pm, K 235 pm.", "كل خطوة لأسفل تضيف مستوى طاقة فتكبر الذرة: Li ١٥٧ pm وNa ١٩١ pm وK ٢٣٥ pm."], ["One more floor makes a taller building every time you go down the column.", "كل نزول في العمود يضيف دورًا فيصبح المبنى أعلى."]),
          Q(["Which two elements are liquids at room temperature?", "ما العنصران السائلان في درجة حرارة الغرفة؟"], [["Mercury and bromine", "الزئبق والبروم"], ["Sodium and chlorine", "الصوديوم والكلور"], ["Iron and iodine", "الحديد واليود"], ["Helium and neon", "الهيليوم والنيون"]],
            ["Most elements are solids. The two liquids are the metal mercury (Hg) and the nonmetal bromine (Br).", "معظم العناصر صلبة، والعنصران السائلان هما الفلز الزئبق (Hg) واللافلز البروم (Br)."], ["In the big family photo only two members are swimming: mercury and bromine.", "في صورة العائلة الكبيرة عضوان فقط يسبحان: الزئبق والبروم."])
        ]
      },
      {
        id: "prep1u1l3", icon: "🧂", page: 18,
        title: { en: "Matter and Its Properties", ar: "المادة وخواصها" },
        idea: {
          official: {
            en: ["Substances are mixtures or pure substances. Mixtures are two or more materials not chemically combined, separated by physical methods: filtration, magnetic separation, evaporation and condensation.",
              "Salt in water is a homogeneous mixture (solution), separated by evaporation and condensation. Sand in water is heterogeneous, separated by filtration.",
              "Pure substances are compounds or elements. A compound forms when elements combine chemically in fixed mass ratios and is separated by chemical methods: heating red mercury oxide gives mercury and oxygen.",
              "An element is the simplest pure form of matter. Molecules may be monatomic, diatomic like O₂ or polyatomic like O₃. Organic compounds contain carbon bonded mainly to hydrogen, like CH₄.",
              "Physical properties such as density, viscosity and colour can be observed and measured. Chemical properties appear only when a reaction changes the substance.",
              "Each substance is used for its properties: helium fills balloons, nitrogen fills car tyres, silicon in electronics, stainless steel for pans, aluminium-titanium alloy for aircraft frames."],
            ar: ["تنقسم المواد إلى مخاليط ومواد نقية. المخلوط مادتان أو أكثر غير متحدتين كيميائيًا، وتُفصل مكوناته بطرق فيزيائية: الترشيح والفصل المغناطيسي والتبخير والتكثيف.",
              "مخلوط ملح الطعام في الماء مخلوط متجانس (محلول) يُفصل بالتبخير والتكثيف، ومخلوط الرمل في الماء غير متجانس يُفصل بالترشيح.",
              "المواد النقية مركبات أو عناصر. المركب ينتج من اتحاد عنصرين أو أكثر كيميائيًا بنسب وزنية ثابتة ويُفصل بطرق كيميائية؛ تسخين أكسيد الزئبق الأحمر يعطي الزئبق والأكسجين.",
              "العنصر أبسط صورة نقية للمادة. قد تكون الجزيئات أحادية الذرة أو ثنائية الذرة مثل O₂ أو عديدة الذرات مثل O₃، والمركبات العضوية تحتوي على الكربون مرتبطًا أساسًا بالهيدروجين مثل CH₄.",
              "الخواص الفيزيائية مثل الكثافة واللزوجة واللون يمكن ملاحظتها وقياسها، أما الخواص الكيميائية فلا تظهر إلا عند حدوث تفاعل يغيّر المادة.",
              "تُستخدم كل مادة حسب خواصها: الهيليوم لملء البالونات، والنيتروجين لملء إطارات السيارات، والسيليكون في الإلكترونيات، والصلب غير القابل للصدأ في أواني الطهي، وسبيكة الألومنيوم والتيتانيوم في هياكل الطائرات الحربية."]
          },
          story: {
            en: ["Omar helps his grandmother in her kitchen in Alexandria. She drops sand into a glass of water by mistake.",
              "He can still see every grain: a heterogeneous mixture. He pours it through a coffee filter and the sand stays behind.",
              "Then she stirs salt into water and it vanishes: a homogeneous mixture. Omar leaves a saucer in the sun and white salt crystals appear as the water evaporates.",
              "On TV he sees red mercury oxide heated in a lab. It breaks into silver mercury and oxygen. Only a chemical change can split a compound.",
              "Visiting a Nubian village near Aswan, Omar sees blue house fronts. The guide says it is Egyptian blue, a compound the ancient Egyptians used on papyri."],
            ar: ["يساعد عمر جدته في مطبخها بالإسكندرية، فتسقط منها حبات رمل في كوب ماء بالخطأ.",
              "ما زال يرى كل حبة: مخلوط غير متجانس. يصبه خلال مرشح القهوة فيبقى الرمل عليه.",
              "ثم تقلّب ملحًا في الماء فيختفي: مخلوط متجانس. يترك عمر طبقًا في الشمس فتظهر بلورات ملح بيضاء بعد تبخر الماء.",
              "يشاهد في التلفاز أكسيد الزئبق الأحمر يُسخَّن في المعمل فيتحلل إلى زئبق فضي وأكسجين؛ فالتغير الكيميائي وحده يفصل مكونات المركب.",
              "وفي قرية نوبية قرب أسوان يرى عمر واجهات بيوت زرقاء، فيخبره المرشد أنها الأزرق المصري، وهو مركب استخدمه المصريون القدماء في تلوين أوراق البردي."]
          }
        },
        words: [
          ["Mixture", "المخلوط", "Two or more materials not chemically combined, separated by physical methods.", "مادتان أو أكثر غير متحدتين كيميائيًا، وتُفصل مكوناته بطرق فيزيائية."],
          ["Homogeneous mixture", "المخلوط المتجانس", "A mixture whose parts cannot be seen with the naked eye, such as salt solution.", "مخلوط لا تُميَّز مكوناته بالعين المجردة، مثل محلول الملح."],
          ["Heterogeneous mixture", "المخلوط غير المتجانس", "A mixture whose parts can be seen, such as sand in water.", "مخلوط تُميَّز مكوناته بالعين المجردة، مثل الرمل في الماء."],
          ["Compound", "المركب", "Two or more elements chemically combined in fixed mass ratios, separated only by chemical methods.", "عنصران أو أكثر متحدان كيميائيًا بنسب وزنية ثابتة، ولا يُفصل إلا بطرق كيميائية."],
          ["Element", "العنصر", "The simplest pure form of matter. It cannot be split by physical or chemical methods.", "أبسط صورة نقية للمادة، ولا يمكن تحليله بطرق فيزيائية أو كيميائية."],
          ["Molecular formula", "الصيغة الجزيئية", "Symbols showing the type and number of atoms in a molecule, such as HNO₃ and CH₄.", "صيغة رمزية توضح نوع الذرات وعددها في الجزيء، مثل HNO₃ وCH₄."],
          ["Chemical property", "الخاصية الكيميائية", "A property that appears only when a chemical reaction changes the substance.", "خاصية لا تظهر إلا عند حدوث تفاعل كيميائي يغيّر المادة."]
        ],
        lab: { parts: [{ type: "prep1_matter" }, {
          type: "sort",
          prompt: ["Tap a substance, then its class.", "اضغط على مادة ثم على تصنيفها."],
          bins: [["el", "🟢", "Element", "عنصر"], ["co", "🔗", "Compound", "مركب"], ["mx", "🥣", "Mixture", "مخلوط"]],
          items: [[eq("O₂"), "el"], [eq("O₃"), "el"], [["Mercury", "الزئبق"], "el"], [eq("H₂O"), "co"], [eq("HNO₃"), "co"], [eq("CH₄"), "co"], [eq("CaCuSi₄O₁₀"), "co"], [["Salt + water", "ملح + ماء"], "mx"], [["Sand + water", "رمل + ماء"], "mx"], [["Iron filings + sand", "برادة حديد + رمل"], "mx"]]
        }] },
        quiz: [
          Q(["How can you separate sand from water?", "كيف تفصل الرمل عن الماء؟"], [["Filtration", "الترشيح"], ["Magnetic separation", "الفصل المغناطيسي"], ["Strong heating", "التسخين الشديد"], ["Electrolysis", "التحليل الكهربي"]],
            ["Sand does not dissolve, so it is a heterogeneous mixture: the filter paper holds the sand and lets the water pass.", "الرمل لا يذوب فهو مخلوط غير متجانس، وورقة الترشيح تحجز الرمل وتسمح بمرور الماء."], ["Omar's coffee filter caught every grain and let the water drip through.", "مرشح القهوة عند عمر حجز كل حبة وترك الماء يتساقط."]),
          Q(["Salt dissolved in water is a…", "ملح الطعام الذائب في الماء…"], [["Homogeneous mixture", "مخلوط متجانس"], ["Heterogeneous mixture", "مخلوط غير متجانس"], ["Compound", "مركب"], ["Element", "عنصر"]],
            ["You cannot see the salt, so it is a homogeneous mixture (solution), separated by evaporation and condensation.", "لا يمكنك رؤية الملح فهو مخلوط متجانس (محلول) يُفصل بالتبخير والتكثيف."], ["The salt vanished in grandmother's glass, but the sun brought it back as crystals.", "اختفى الملح في كوب الجدة، لكن الشمس أعادته بلورات."]),
          Q(["Why is water classified as a compound?", "لماذا يُصنف الماء مركبًا؟"], [["It is made of hydrogen and oxygen chemically combined in a fixed ratio", "يتكون من الهيدروجين والأكسجين متحدين كيميائيًا بنسبة ثابتة"], ["It can be filtered", "يمكن ترشيحه"], ["It has only one type of atom", "به نوع واحد من الذرات"], ["It is a liquid", "لأنه سائل"]],
            ["Electrolysis of water (Hoffman voltameter) gives two elements, hydrogen and oxygen, so water is a compound.", "التحليل الكهربي للماء (فولتامتر هوفمان) يعطي عنصرين هما الهيدروجين والأكسجين، إذن الماء مركب."], ["Water is a team of two players holding hands tightly. Only a chemical whistle can split them.", "الماء فريق من لاعبين متشابكي الأيدي بقوة، ولا تفصلهما إلا صافرة كيميائية."]),
          Q(["What is the difference between an oxygen molecule and an ozone molecule?", "ما الفرق بين جزيء الأكسجين وجزيء الأوزون؟"], [["O₂ has 2 oxygen atoms, O₃ has 3", "O₂ به ذرتا أكسجين وO₃ به ثلاث"], ["Ozone is a compound", "الأوزون مركب"], ["Oxygen is a mixture", "الأكسجين مخلوط"], ["They have different elements", "يتكونان من عناصر مختلفة"]],
            ["Both are molecules of the element oxygen: O₂ is diatomic and O₃ is polyatomic.", "كلاهما جزيء لعنصر الأكسجين: O₂ ثنائي الذرة وO₃ عديد الذرات."], ["Same friends, different group size: two oxygen friends or three.", "الأصدقاء أنفسهم بعدد مختلف: صديقان من الأكسجين أو ثلاثة."]),
          Q(["Which is a chemical property?", "أي مما يلي خاصية كيميائية؟"], [["Litmus changes colour in lemon juice", "تغير لون ورقة عباد الشمس في عصير الليمون"], ["Honey is more viscous than water", "العسل أكثر لزوجة من الماء"], ["Cork is less dense than iron", "الفلين أقل كثافة من الحديد"], ["Iron is grey", "الحديد لونه رمادي"]],
            ["The colour change of litmus is a reaction, so it is a chemical property. Viscosity, density and colour are physical.", "تغير لون عباد الشمس تفاعل، فهو خاصية كيميائية، أما اللزوجة والكثافة واللون فخواص فيزيائية."], ["Only the litmus paper changed into something new. The others you can just look at or measure.", "ورقة عباد الشمس وحدها تغيرت، أما الباقي فتنظر إليه أو تقيسه فقط."]),
          Q(["Which substance fills balloons because it is less dense than air and does not burn?", "أي مادة تُستخدم في ملء البالونات لأنها أقل كثافة من الهواء ولا تشتعل؟"], [["Helium", "الهيليوم"], ["Nitrogen", "النيتروجين"], ["Silicon", "السيليكون"], ["Stainless steel", "الصلب غير القابل للصدأ"]],
            ["Helium is an inert gas, less dense than air and non-flammable, so it is safe for balloons.", "الهيليوم غاز خامل أقل كثافة من الهواء وغير قابل للاشتعال، فهو آمن للبالونات."], ["At Omar's birthday the balloons float up and are safe near the candles, thanks to helium.", "في عيد ميلاد عمر ترتفع البالونات وتبقى آمنة بجوار الشموع بفضل الهيليوم."]),
          Q(["Organic compounds always contain the element…", "تحتوي المركبات العضوية دائمًا على عنصر…"], [["Carbon", "الكربون"], ["Iron", "الحديد"], ["Sodium", "الصوديوم"], ["Helium", "الهيليوم"]],
            ["Organic compounds (carbon compounds) contain carbon bonded mainly to hydrogen, like methane CH₄.", "المركبات العضوية (مركبات الكربون) تحتوي على الكربون مرتبطًا أساسًا بالهيدروجين مثل الميثان CH₄."], ["Every organic team has a carbon captain holding hands with hydrogen players.", "لكل فريق عضوي كابتن من الكربون يمسك أيدي لاعبي الهيدروجين."])
        ]
      },
      {
        id: "prep1u1l4", icon: "🔗", page: 26,
        title: { en: "Chemical Bonds", ar: "الروابط الكيميائية" },
        idea: {
          official: {
            en: ["Sodium chloride and hydrogen chloride both contain chlorine, yet they differ, because their atoms are bonded in different ways. There are ionic bonds and covalent bonds.",
              "Atoms lose or gain electrons to reach the stable configuration of the nearest noble gas. Sodium (2,8,1) loses 1 electron to become Na⁺ like neon; chlorine (2,8,7) gains 1 to become Cl⁻ like argon.",
              "The electrostatic attraction between a cation and an anion is the ionic bond. The ionic compound is neutral because the positive and negative charges are equal.",
              "In a covalent bond two nonmetal atoms share electrons. Each atom shares one electron in a single bond (H–Cl), two in a double bond (O=O) and three in a triple bond (N≡N).",
              "Most ionic compounds dissolve in water, their solutions and melts conduct electricity, and they have high melting and boiling points. Most covalent compounds do not dissolve, do not conduct and melt at low temperatures.",
              "Carbon has 4 single outer electrons, so carbon atoms bond into straight chains, branched chains and rings. Methane CH₄ is the simplest organic molecule."],
            ar: ["يحتوي كل من كلوريد الصوديوم وكلوريد الهيدروجين على الكلور ومع ذلك يختلفان، لأن ذراتهما مرتبطة بطرق مختلفة. ومن أنواع الروابط: الرابطة الأيونية والرابطة التساهمية.",
              "تفقد الذرات إلكترونات أو تكتسبها لتصل إلى التركيب المستقر لأقرب غاز نبيل. الصوديوم (2,8,1) يفقد إلكترونًا فيصبح Na⁺ مثل النيون، والكلور (2,8,7) يكتسب إلكترونًا فيصبح Cl⁻ مثل الأرجون.",
              "التجاذب الكهربي بين الأيون الموجب والأيون السالب هو الرابطة الأيونية، والمركب الأيوني متعادل لتساوي الشحنات الموجبة والسالبة.",
              "في الرابطة التساهمية تتشارك ذرتان لافلزيتان في الإلكترونات: كل ذرة تشارك بإلكترون في الرابطة الأحادية (H–Cl)، وبإلكترونين في الثنائية (O=O)، وبثلاثة في الثلاثية (N≡N).",
              "معظم المركبات الأيونية تذوب في الماء، ومحاليلها ومصاهيرها توصل الكهرباء، ودرجتا انصهارها وغليانها مرتفعتان، أما معظم المركبات التساهمية فلا تذوب ولا توصل الكهرباء ودرجتا انصهارها وغليانها منخفضتان.",
              "في المستوى الأخير لذرة الكربون ٤ إلكترونات مفردة، فترتبط ذرات الكربون في سلاسل مستقيمة ومتفرعة وحلقية، والميثان CH₄ أبسط جزيء عضوي."]
          },
          story: {
            en: ["Farida trades stickers at her school in Heliopolis. Her friend Sodium has one sticker too many on his top page, and Chlorine is missing just one.",
              "Sodium simply gives his extra sticker away. Now he is positive, Chlorine is negative, and opposite charges stick together: an ionic bond.",
              "Hydrogen and Chlorine both need one more sticker. Neither wants to give one away, so they put one each in a shared album: a single covalent bond.",
              "Two oxygen friends each need two, so they share two pairs: a double bond. Two nitrogen friends share three pairs: a triple bond.",
              "Farida's table salt dissolves in tea water and melts only at a very high temperature, while the cooking gas methane is a covalent molecule."],
            ar: ["تتبادل فريدة الملصقات في مدرستها بمصر الجديدة؛ صديقها الصوديوم لديه ملصق زائد في صفحته الأخيرة، والكلور ينقصه ملصق واحد فقط.",
              "يعطي الصوديوم ملصقه الزائد ببساطة، فيصبح موجبًا ويصبح الكلور سالبًا، والشحنات المختلفة تتجاذب: رابطة أيونية.",
              "الهيدروجين والكلور كلاهما يحتاج ملصقًا إضافيًا ولا يريد أي منهما أن يعطي، فيضع كل منهما ملصقًا في ألبوم مشترك: رابطة تساهمية أحادية.",
              "صديقا الأكسجين يحتاج كل منهما ملصقين فيتشاركان في زوجين: رابطة ثنائية، وصديقا النيتروجين يتشاركان في ثلاثة أزواج: رابطة ثلاثية.",
              "ملح الطعام عند فريدة يذوب في الماء ولا ينصهر إلا عند درجة حرارة عالية جدًا، أما غاز الطهي الميثان فجزيء تساهمي."]
          }
        },
        words: [
          ["Ionic bond", "الرابطة الأيونية", "The electrostatic attraction between a positive ion and a negative ion.", "قوة التجاذب الكهربي بين أيون موجب وأيون سالب."],
          ["Covalent bond", "الرابطة التساهمية", "A bond in which two nonmetal atoms share pairs of electrons.", "رابطة تتشارك فيها ذرتان لافلزيتان في أزواج من الإلكترونات."],
          ["Positive ion (cation)", "الأيون الموجب", "An atom that lost electrons, with as many positive charges as electrons lost.", "ذرة فقدت إلكترونًا أو أكثر، وعدد شحناتها الموجبة يساوي عدد الإلكترونات المفقودة."],
          ["Negative ion (anion)", "الأيون السالب", "An atom that gained electrons, with as many negative charges as electrons gained.", "ذرة اكتسبت إلكترونًا أو أكثر، وعدد شحناتها السالبة يساوي عدد الإلكترونات المكتسبة."],
          ["Lewis structure", "تركيب لويس", "The symbol with valence electrons drawn as dots around it.", "رمز العنصر وحوله إلكترونات التكافؤ في صورة نقاط."],
          ["Double bond", "الرابطة الثنائية", "Two shared pairs of electrons, as in O=O.", "زوجان مشتركان من الإلكترونات، كما في O=O."]
        ],
        lab: { parts: [{ type: "prep1_bond" }, {
          type: "sort",
          prompt: ["Tap a clue, then tap the bond type.", "اضغط على الدليل ثم على نوع الرابطة."],
          bins: [["ion", "⚡", "Ionic", "أيونية"], ["cov", "🤝", "Covalent", "تساهمية"]],
          items: [[eq("NaCl"), "ion"], [["Electrons are transferred", "انتقال إلكترونات"], "ion"], [["Solution conducts electricity", "محلوله يوصل الكهرباء"], "ion"], [["High melting point", "درجة انصهار مرتفعة"], "ion"],
            [eq("HCl"), "cov"], [eq("O₂"), "cov"], [eq("CH₄"), "cov"], [["Electrons are shared", "مشاركة بالإلكترونات"], "cov"], [["Low boiling point", "درجة غليان منخفضة"], "cov"]]
        }] },
        quiz: [
          Q(["What happens to a sodium atom when it forms a sodium ion?", "ماذا يحدث لذرة الصوديوم عندما تتحول إلى أيون صوديوم؟"], [["It loses 1 electron and becomes Na⁺", "تفقد إلكترونًا واحدًا وتصبح Na⁺"], ["It gains 1 electron and becomes Na⁻", "تكتسب إلكترونًا وتصبح Na⁻"], ["It loses a proton", "تفقد بروتونًا"], ["It shares an electron", "تشارك بإلكترون"]],
            ["Sodium (2,8,1) loses its outer electron and reaches neon's configuration (2,8) with 11 protons and 10 electrons: charge +1.", "الصوديوم (2,8,1) يفقد إلكترون المستوى الأخير فيصل إلى تركيب النيون (2,8)، فيصبح ١١ بروتونًا و١٠ إلكترونات: شحنته +١."], ["Sodium gives away his one extra sticker, so he ends up with one more plus than minus.", "يعطي الصوديوم ملصقه الزائد، فيصبح لديه موجب واحد زائد."]),
          Q(["The bond in hydrogen chloride (HCl) is…", "الرابطة في كلوريد الهيدروجين (HCl)…"], [["A single covalent bond", "تساهمية أحادية"], ["An ionic bond", "أيونية"], ["A double covalent bond", "تساهمية ثنائية"], ["A triple covalent bond", "تساهمية ثلاثية"]],
            ["H and Cl are both nonmetals and each needs one electron, so they share one pair: H–Cl.", "الهيدروجين والكلور لافلزان وكل منهما يحتاج إلكترونًا واحدًا، فيتشاركان في زوج واحد: H–Cl."], ["Each puts one sticker in the shared album: one pair, one line.", "يضع كل منهما ملصقًا في الألبوم المشترك: زوج واحد وخط واحد."]),
          Q(["How many pairs of electrons are shared in a nitrogen molecule N₂?", "كم زوجًا من الإلكترونات مشتركًا في جزيء النيتروجين N₂؟"], [["3", "٣"], ["1", "١"], ["2", "٢"], ["5", "٥"]],
            ["Nitrogen has 5 outer electrons and needs 3 more, so two N atoms share 3 pairs: a triple bond N≡N.", "للنيتروجين ٥ إلكترونات في المستوى الأخير ويحتاج ٣، فتتشارك ذرتان في ٣ أزواج: رابطة ثلاثية N≡N."], ["Two nitrogen friends each bring 3 stickers to the shared album.", "صديقا النيتروجين يحضر كل منهما ٣ ملصقات للألبوم المشترك."]),
          Q(["A metal from group 2A bonds with a nonmetal from group 6A. What are the ion charges?", "يرتبط فلز من المجموعة 2A بلافلز من المجموعة 6A. ما شحنتا الأيونين؟"], [["2+ and 2−", "+٢ و−٢"], ["1+ and 1−", "+١ و−١"], ["2+ and 6−", "+٢ و−٦"], ["6+ and 2−", "+٦ و−٢"]],
            ["The metal loses its 2 outer electrons (2+), and the nonmetal with 6 gains 2 to reach 8 (2−). The formula is like MgO.", "يفقد الفلز إلكتروني المستوى الأخير (+٢)، واللافلز الذي به ٦ يكتسب ٢ ليصل إلى ٨ (−٢)، والصيغة مثل MgO."], ["One friend has 2 extra stickers, the other is missing exactly 2. One swap of two fixes both.", "صديق لديه ملصقان زائدان والآخر ينقصه ملصقان بالضبط؛ تبادل واحد يحل الأمر."]),
          Q(["Which is a property of most ionic compounds?", "أي مما يلي من خواص معظم المركبات الأيونية؟"], [["High melting point and their solutions conduct electricity", "درجة انصهار مرتفعة ومحاليلها توصل الكهرباء"], ["Low boiling point", "درجة غليان منخفضة"], ["Do not dissolve in water", "لا تذوب في الماء"], ["Never conduct electricity", "لا توصل الكهرباء أبدًا"]],
            ["Most ionic compounds dissolve in water, their solutions and melts conduct electricity, and they melt and boil at high temperatures.", "معظم المركبات الأيونية تذوب في الماء، ومحاليلها ومصاهيرها توصل الكهرباء، ودرجتا انصهارها وغليانها مرتفعتان."], ["Table salt needs a furnace to melt, and salty water can carry a current.", "ملح الطعام يحتاج فرنًا لينصهر، والماء المالح يوصل التيار."]),
          Q(["Why does chlorine form an ionic bond with sodium but a covalent bond with hydrogen?", "لماذا يكوّن الكلور رابطة أيونية مع الصوديوم وتساهمية مع الهيدروجين؟"], [["Sodium is a metal that gives an electron; hydrogen is a nonmetal that needs one too", "الصوديوم فلز يعطي إلكترونًا، والهيدروجين لافلز يحتاج إلكترونًا أيضًا"], ["Hydrogen has more protons", "الهيدروجين به بروتونات أكثر"], ["Sodium is a gas", "الصوديوم غاز"], ["Chlorine changes its group", "الكلور يغير مجموعته"]],
            ["Metal + nonmetal: electrons transfer (ionic). Nonmetal + nonmetal: electrons are shared (covalent).", "فلز + لافلز: انتقال إلكترونات (أيونية)، ولافلز + لافلز: مشاركة بالإلكترونات (تساهمية)."], ["Sodium is happy to give. Hydrogen also wants to receive, so the only deal is sharing.", "الصوديوم سعيد بالعطاء، أما الهيدروجين فيريد أن يأخذ أيضًا، فلا حل إلا المشاركة."]),
          Q(["Carbon atoms can form chains and rings because…", "تستطيع ذرات الكربون تكوين سلاسل وحلقات لأن…"], [["Carbon has 4 single outer electrons", "في المستوى الأخير للكربون ٤ إلكترونات مفردة"], ["Carbon is a metal", "الكربون فلز"], ["Carbon has no electrons", "الكربون ليس له إلكترونات"], ["Carbon is a noble gas", "الكربون غاز نبيل"]],
            ["Its 4 unpaired outer electrons let carbon bond to other carbon atoms in straight chains, branched chains or rings.", "إلكتروناته الأربعة المفردة تسمح له بالارتباط بذرات كربون أخرى في سلاسل مستقيمة أو متفرعة أو حلقية."], ["Carbon has four free hands, so it can hold hands with many friends in lines, branches or circles.", "للكربون أربعة أيدٍ حرة، فيمسك أيدي أصدقاء كثيرين في صفوف أو فروع أو دوائر."])
        ]
      }
    ]
  });

  /* ======================= UNIT 2 - FORCE FIELDS ======================= */
  U.push({
    id: "prep1u2", num: 2, icon: "🧲", color: "orange",
    title: { en: "Force Fields", ar: "مجالات القوى" },
    lessons: [
      {
        id: "prep1u2l1", icon: "⚡", page: 33,
        title: { en: "Electric Forces", ar: "القوى الكهربية" },
        idea: {
          official: {
            en: ["When suitable materials are rubbed together, electrons move from the surface of one to the other. Both get equal and opposite charges called static electricity.",
              "The object that loses electrons becomes positive and the one that gains them becomes negative. The charges stay on the rubbed part.",
              "Insulators such as wood, paper, wool, silk and glass can be charged. Metals and carbon can be charged only if held by an insulator, or the charges leak away.",
              "Like charges repel and unlike charges attract. A charged object also attracts light uncharged objects such as paper scraps.",
              "The electric field is the region around a charge where its effect appears without contact. Field lines are imaginary, start at positive charges, end at negative charges and never cross.",
              "The electroscope tells whether an object is charged, the type of charge, and compares charge sizes. Lightning rods and electrostatic paint spraying use electric forces."],
            ar: ["عند دلك مواد مناسبة معًا تنتقل الإلكترونات من سطح إحداها إلى الأخرى، فيكتسب الجسمان شحنتين متساويتين ومختلفتين تسمى الكهربية الساكنة (الإستاتيكية).",
              "الجسم الذي يفقد إلكترونات يصبح موجبًا، والذي يكتسبها يصبح سالبًا، وتبقى الشحنات على الجزء المدلوك فقط.",
              "المواد العازلة مثل الخشب والورق والصوف والحرير والزجاج يمكن شحنها، أما الفلزات والكربون فلا تُشحن إلا إذا عُزلت حتى لا تتسرب الشحنات.",
              "الشحنات المتشابهة تتنافر والمختلفة تتجاذب، والجسم المشحون يجذب أيضًا الأجسام الخفيفة غير المشحونة مثل قصاصات الورق.",
              "المجال الكهربي هو الحيز المحيط بالشحنة الذي يظهر فيه تأثيرها دون تلامس، وخطوط المجال خطوط وهمية تبدأ من الشحنة الموجبة وتنتهي عند السالبة ولا تتقاطع.",
              "يُستخدم الكشاف الكهربي للكشف عن شحن الجسم ونوع شحنته ومقارنة مقادير الشحنات، وتستفيد مانعة الصواعق والطلاء الكهروستاتيكي من القوى الكهربية."]
          },
          story: {
            en: ["On a cold January night in Cairo, Karim pulls off his woollen jumper and hears a tiny crackle. Static electricity!",
              "He rubs a plastic comb on his hair and holds it over scraps of paper. They jump up to the comb without being touched.",
              "Electrons moved from one surface to the other when he rubbed. The comb now has extra electrons, so it is negative.",
              "His sister rubs a balloon on her scarf and brings it near Karim's balloon: the two balloons push apart. Like charges repel.",
              "On the way home Karim sees a fuel truck with a metal chain dragging on the road. It lets the charges escape to the ground safely."],
            ar: ["في ليلة باردة من يناير بالقاهرة، يخلع كريم سترته الصوفية فيسمع طقطقة خفيفة. إنها الكهربية الساكنة!",
              "يدلك مشطًا بلاستيكيًا في شعره ثم يقربه من قصاصات ورق، فتقفز إلى المشط دون أن يلمسها.",
              "انتقلت الإلكترونات من سطح إلى آخر عند الدلك؛ فالمشط الآن به إلكترونات زائدة أي أنه سالب.",
              "تدلك أخته بالونًا في وشاحها وتقربه من بالون كريم فيتباعد البالونان؛ الشحنات المتشابهة تتنافر.",
              "وفي طريق العودة يرى كريم شاحنة وقود تتدلى منها سلسلة معدنية تلامس الأرض لتتسرب الشحنات إلى الأرض بأمان."]
          }
        },
        words: [
          ["Static electricity", "الكهربية الساكنة", "Charges collected on the surface of an object when it loses or gains electrons.", "شحنات متراكمة على سطح الجسم عندما يفقد إلكترونات أو يكتسبها."],
          ["Electric field", "المجال الكهربي", "The region around a charge where its effect appears without contact.", "الحيز المحيط بالشحنة الذي يظهر فيه تأثيرها دون تلامس."],
          ["Electric field lines", "خطوط المجال الكهربي", "Imaginary lines from positive to negative charges that never cross.", "خطوط وهمية تبدأ من الشحنة الموجبة وتنتهي عند السالبة ولا تتقاطع."],
          ["Electroscope", "الكشاف الكهربي", "A device that detects charge, its type and compares charges.", "جهاز يكشف عن الشحنة ونوعها ويقارن بين مقادير الشحنات."],
          ["Electrostatic series", "السلسلة الكهروستاتيكية", "Materials in order of how easily they lose electrons.", "ترتيب المواد حسب سهولة فقدها للإلكترونات."],
          ["Lightning rod", "مانعة الصواعق", "A pointed metal rod connected to a buried plate that leads cloud charges safely to the ground.", "ساق فلزية مدببة متصلة بلوح مدفون في الأرض توصل شحنات السحب إلى الأرض بأمان."],
          ["Electrostatic coating", "الطلاء الكهروستاتيكي", "The object is charged negative and the paint spray positive, so the paint is attracted evenly.", "يُشحن الجسم بشحنة سالبة ورذاذ الطلاء بشحنة موجبة، فينجذب الطلاء بانتظام."]
        ],
        lab: { parts: [{ type: "prep1_charge" }, {
          type: "sort",
          prompt: ["Tap a material, then how it can be charged by rubbing.", "اضغط على مادة ثم على طريقة شحنها بالدلك."],
          bins: [["ins", "🧶", "Charged directly (insulator)", "تُشحن مباشرة (عازلة)"], ["met", "🧤", "Needs an insulating handle", "تحتاج إلى مقبض عازل"]],
          items: [[["Wood", "الخشب"], "ins"], [["Paper", "الورق"], "ins"], [["Wool", "الصوف"], "ins"], [["Silk", "الحرير"], "ins"], [["Glass", "الزجاج"], "ins"], [["Copper", "النحاس"], "met"], [["Iron", "الحديد"], "met"], [["Carbon", "الكربون"], "met"]]
        }] },
        quiz: [
          Q(["An ebonite rod is rubbed with wool. What charge does the rod get?", "دُلكت ساق إبونيت بالصوف. ما نوع الشحنة التي تكتسبها الساق؟"], [["Negative, because it gains electrons", "سالبة لأنها تكتسب إلكترونات"], ["Positive, because it gains protons", "موجبة لأنها تكتسب بروتونات"], ["No charge", "لا تُشحن"], ["Positive, because it gains electrons", "موجبة لأنها تكتسب إلكترونات"]],
            ["Electrons move from the wool to the ebonite, so the ebonite becomes negative and the wool positive.", "تنتقل الإلكترونات من الصوف إلى الإبونيت فيصبح الإبونيت سالبًا والصوف موجبًا."], ["Like Karim's comb, the ebonite collects extra electrons and turns negative.", "مثل مشط كريم يجمع الإبونيت إلكترونات زائدة فيصبح سالبًا."]),
          Q(["Two glass rods rubbed with silk are brought close. What happens?", "تقريب ساقين من الزجاج دُلكتا بالحرير. ماذا يحدث؟"], [["They repel", "تتنافران"], ["They attract", "تتجاذبان"], ["Nothing", "لا يحدث شيء"], ["They lose their charge", "تفقدان شحنتهما"]],
            ["Both rods have the same (positive) charge, and like charges repel.", "الساقان لهما شحنة متشابهة (موجبة)، والشحنات المتشابهة تتنافر."], ["Twin balloons rubbed on the same scarf always push each other away.", "البالونان التوأم المدلوكان في الوشاح نفسه يتباعدان دائمًا."]),
          Q(["Why can't a copper rod held in your hand be charged by rubbing?", "لماذا لا تُشحن ساق نحاس تمسكها بيدك عند دلكها؟"], [["The charges leak through your hand because copper conducts", "تتسرب الشحنات خلال يدك لأن النحاس موصل"], ["Copper has no electrons", "النحاس ليس به إلكترونات"], ["Copper is an insulator", "النحاس مادة عازلة"], ["Copper is too heavy", "النحاس ثقيل جدًا"]],
            ["Metals conduct, so the charges leak away. A metal must be held by an insulator to keep its charge.", "الفلزات موصلة فتتسرب الشحنات، ولا بد من عزل الفلز ليحتفظ بشحنته."], ["The copper is a leaky bucket: the charges run out through your hand to the ground.", "النحاس كدلو مثقوب: تتسرب الشحنات خلال يدك إلى الأرض."]),
          Q(["Electric field lines…", "خطوط المجال الكهربي…"], [["Start at positive charges and end at negative charges", "تبدأ من الشحنة الموجبة وتنتهي عند الشحنة السالبة"], ["Start at negative charges", "تبدأ من الشحنة السالبة"], ["Cross each other", "تتقاطع"], ["Are real wires", "أسلاك حقيقية"]],
            ["They are imaginary lines showing the path of a small free positive charge, from + to −, and they never cross.", "خطوط وهمية توضح مسار شحنة موجبة صغيرة حرة، من الموجب إلى السالب، ولا تتقاطع."], ["Think of one-way streets that leave the plus city and arrive at the minus city, never crossing.", "تخيلها شوارع باتجاه واحد تخرج من مدينة الموجب وتصل إلى مدينة السالب ولا تتقاطع."]),
          Q(["The leaves of a positively charged electroscope diverge less when a rod touches its disc. The rod is…", "قلّ انفراج ورقتي كشاف مشحون بشحنة موجبة عندما لمست قرصه ساق. الساق…"], [["Negatively charged", "مشحونة بشحنة سالبة"], ["Positively charged", "مشحونة بشحنة موجبة"], ["Made of glass rubbed with silk", "زجاجية مدلوكة بالحرير"], ["Always uncharged", "غير مشحونة دائمًا"]],
            ["The negative charge cancels part of the positive charge, so the leaves repel less. An ebonite rod rubbed with wool does this.", "الشحنة السالبة تعادل جزءًا من الشحنة الموجبة فيقل تنافر الورقتين، وهذا ما تفعله ساق إبونيت مدلوكة بالصوف."], ["Minus charges calm down some of the plus charges, so the leaves relax and close a little.", "الشحنات السالبة تهدئ بعض الموجبة فترتخي الورقتان وتقتربان."]),
          Q(["Why do fuel trucks have metal chains touching the ground?", "لماذا تتدلى سلاسل معدنية من شاحنات الوقود لتلامس الأرض؟"], [["To let static charges flow safely to the ground", "لتفريغ الشحنات الساكنة في الأرض بأمان"], ["To slow the truck", "لإبطاء الشاحنة"], ["For decoration", "للزينة"], ["To charge the fuel", "لشحن الوقود"]],
            ["Rubbing with air builds static charge that could make a spark. The metal chain conducts it to the ground.", "احتكاك الشاحنة بالهواء يراكم شحنات قد تسبب شرارة، والسلسلة الفلزية توصلها إلى الأرض."], ["Karim's truck chain is like a slide that lets the sparks slip away before they cause danger.", "سلسلة الشاحنة كالمزلقة تترك الشحنات تنزلق بعيدًا قبل أن تسبب خطرًا."]),
          Q(["In electrostatic coating, the object is charged negative and the paint spray…", "في الطلاء الكهروستاتيكي يُشحن الجسم بشحنة سالبة ويُشحن رذاذ الطلاء…"], [["Positive", "بشحنة موجبة"], ["Negative", "بشحنة سالبة"], ["Not charged", "لا يُشحن"], ["Neutral and magnetic", "متعادلًا ومغناطيسيًا"]],
            ["Opposite charges attract, so the paint covers the object evenly and less paint is wasted.", "الشحنات المختلفة تتجاذب، فيغطي الطلاء الجسم بانتظام ويقل الفاقد."], ["The plus droplets rush to hug the minus car, so no drop is lost.", "قطرات الموجب تسرع لتعانق السيارة السالبة، فلا تضيع قطرة."])
        ]
      },
      {
        id: "prep1u2l2", icon: "🧲", page: 41,
        title: { en: "Magnetic Forces", ar: "القوى المغناطيسية" },
        idea: {
          official: {
            en: ["Lodestone is a natural magnet first found in Magnesia in ancient Greece. Industrial magnets come in shapes such as bar, horseshoe and magnetic needle.",
              "Magnetic materials such as iron, soft iron, cobalt and nickel are attracted to a magnet. Gold, aluminium, copper and silver are non-magnetic.",
              "The attraction is strongest at the ends of the magnet, its poles. A freely hung magnet points its north pole (N) almost towards Earth's geographic north, because Earth acts as a giant magnet.",
              "Cutting a magnet makes new magnets, each with N and S poles. A single isolated pole is impossible.",
              "Law of attraction and repulsion: like poles repel and unlike poles attract.",
              "The magnetic field is the region around a magnet where its effect appears. Field lines are imaginary, go from N to S outside the magnet, never cross, and are densest near the poles."],
            ar: ["حجر المغناطيس مغناطيس طبيعي اكتُشف أول مرة في ماجنيسيا باليونان القديمة، وللمغناطيسات الصناعية أشكال منها القضيب وحدوة الحصان والإبرة المغناطيسية.",
              "المواد المغناطيسية مثل الحديد والحديد المطاوع والكوبالت والنيكل تنجذب للمغناطيس، أما الذهب والألومنيوم والنحاس والفضة فمواد غير مغناطيسية.",
              "تكون قوة الجذب أكبر ما يمكن عند طرفي المغناطيس (القطبين)، والمغناطيس المعلق تعليقًا حرًا يتجه قطبه الشمالي (N) تقريبًا نحو الشمال الجغرافي لأن الأرض تعمل كمغناطيس كبير.",
              "عند تقسيم المغناطيس يصبح كل جزء مغناطيسًا جديدًا له قطب شمالي وقطب جنوبي، ولا يمكن الحصول على قطب منفرد.",
              "قانون الجذب والتنافر: الأقطاب المتشابهة تتنافر والأقطاب المختلفة تتجاذب.",
              "المجال المغناطيسي هو الحيز المحيط بالمغناطيس الذي يظهر فيه أثره، وخطوطه وهمية تخرج من القطب الشمالي إلى الجنوبي خارج المغناطيس، ولا تتقاطع، وتتزاحم عند القطبين."]
          },
          story: {
            en: ["Nour's mother drops a box of pins on the carpet in their flat in Tanta. Nour sweeps a bar magnet over the carpet and the pins jump onto its ends.",
              "Her copper coins and her gold ring stay on the carpet. They are not magnetic materials.",
              "Nour hangs the magnet from a silk thread. It swings, then settles with one end towards the north: that end is the north pole.",
              "She pushes the north poles of two magnets together and feels them fight back. When she turns one round, they snap together.",
              "Her uncle, a police officer, tells her that experts brush iron filings with a magnetic brush to reveal hidden fingerprints."],
            ar: ["تسقط علبة دبابيس من والدة نور على السجادة في شقتهم بطنطا، فتمرر نور مغناطيسًا مستقيمًا فوق السجادة فتقفز الدبابيس إلى طرفيه.",
              "تبقى عملاتها النحاسية وخاتمها الذهبي على السجادة؛ فهي ليست مواد مغناطيسية.",
              "تعلّق نور المغناطيس بخيط من الحرير فيتأرجح ثم يستقر وأحد طرفيه نحو الشمال؛ هذا هو القطب الشمالي.",
              "تقرّب القطبين الشماليين لمغناطيسين فتشعر بهما يتدافعان، وعندما تقلب أحدهما يلتصقان فورًا.",
              "يخبرها خالها ضابط الشرطة أن الخبراء يمررون فرشاة مغناطيسية ببرادة الحديد لإظهار البصمات الخفية."]
          }
        },
        words: [
          ["Magnetic materials", "المواد المغناطيسية", "Materials attracted to a magnet, such as iron, cobalt and nickel.", "مواد تنجذب للمغناطيس مثل الحديد والكوبالت والنيكل."],
          ["Non-magnetic materials", "المواد غير المغناطيسية", "Materials not attracted to a magnet, such as copper, gold, silver and aluminium.", "مواد لا تنجذب للمغناطيس مثل النحاس والذهب والفضة والألومنيوم."],
          ["Magnetic poles", "قطبا المغناطيس", "The two ends of a magnet, where its attraction is strongest: north (N) and south (S).", "طرفا المغناطيس حيث تكون قوة الجذب أكبر ما يمكن: الشمالي (N) والجنوبي (S)."],
          ["Magnetic field", "المجال المغناطيسي", "The region around a magnet where its magnetic effect appears.", "الحيز المحيط بالمغناطيس الذي يظهر فيه أثره المغناطيسي."],
          ["Magnetic field lines", "خطوط المجال المغناطيسي", "Imaginary lines from N to S that never cross and crowd near the poles.", "خطوط وهمية من الشمالي إلى الجنوبي لا تتقاطع وتتزاحم عند القطبين."],
          ["Compass", "البوصلة", "A free-turning magnetic needle on a pivot in a copper or plastic box, used to find directions.", "إبرة مغناطيسية حرة الحركة على محور داخل علبة من النحاس أو البلاستيك، تُستخدم لتحديد الاتجاهات."]
        ],
        lab: { parts: [{ type: "prep1_magnet" }, {
          type: "sort",
          prompt: ["Tap a material: is it attracted to a magnet?", "اضغط على المادة: هل تنجذب للمغناطيس؟"],
          bins: [["mag", "🧲", "Magnetic", "مغناطيسية"], ["non", "🚫", "Non-magnetic", "غير مغناطيسية"]],
          items: [[["Iron", "الحديد"], "mag"], [["Soft iron", "الحديد المطاوع"], "mag"], [["Cobalt", "الكوبالت"], "mag"], [["Nickel", "النيكل"], "mag"], [["Gold", "الذهب"], "non"], [["Aluminium", "الألومنيوم"], "non"], [["Copper", "النحاس"], "non"], [["Silver", "الفضة"], "non"]]
        }] },
        quiz: [
          Q(["Which of these is a magnetic material?", "أي مما يلي مادة مغناطيسية؟"], [["Nickel", "النيكل"], ["Copper", "النحاس"], ["Gold", "الذهب"], ["Aluminium", "الألومنيوم"]],
            ["Iron, soft iron, cobalt and nickel are attracted to a magnet. Copper, gold, silver and aluminium are not.", "الحديد والحديد المطاوع والكوبالت والنيكل تنجذب للمغناطيس، أما النحاس والذهب والفضة والألومنيوم فلا."], ["Nour's magnet picked up the pins but left her copper coins and gold ring on the carpet.", "التقط مغناطيس نور الدبابيس وترك العملات النحاسية والخاتم الذهبي على السجادة."]),
          Q(["Where is the attraction of a bar magnet strongest?", "أين تكون قوة جذب المغناطيس المستقيم أكبر ما يمكن؟"], [["At its two poles", "عند قطبيه"], ["In its middle", "في منتصفه"], ["Equally everywhere", "متساوية في كل مكان"], ["Only at the north pole", "عند القطب الشمالي فقط"]],
            ["Iron filings crowd at the ends (poles), and fewer stick near the middle.", "تتزاحم برادة الحديد عند الطرفين (القطبين)، ويقل عددها قرب المنتصف."], ["The pins rushed to the ends of Nour's magnet, like fans crowding at the two goals.", "اندفعت الدبابيس إلى طرفي مغناطيس نور كالمشجعين المتزاحمين عند المرميين."]),
          Q(["Two north poles are brought close together. They…", "قُرّب قطبان شماليان من بعضهما. فإنهما…"], [["Repel", "يتنافران"], ["Attract", "يتجاذبان"], ["Do nothing", "لا يتأثران"], ["Become south poles", "يصبحان قطبين جنوبيين"]],
            ["Like poles repel and unlike poles attract.", "الأقطاب المتشابهة تتنافر والمختلفة تتجاذب."], ["Nour felt the two north poles fight back, as if they refused to meet.", "شعرت نور بالقطبين الشماليين يتدافعان كأنهما يرفضان اللقاء."]),
          Q(["A bar magnet is cut into two pieces. Each piece…", "قُطع مغناطيس مستقيم إلى جزأين. كل جزء…"], [["Is a magnet with N and S poles", "مغناطيس له قطب شمالي وقطب جنوبي"], ["Has only one pole", "له قطب واحد فقط"], ["Loses its magnetism", "يفقد مغناطيسيته"], ["Becomes copper", "يصبح نحاسًا"]],
            ["Each part forms a new magnet with two poles. An isolated single pole is impossible.", "كل جزء يكوّن مغناطيسًا جديدًا له قطبان، ولا يمكن الحصول على قطب منفرد."], ["Cut a magnet as many times as you like: every piece still has its two ends, N and S.", "اقطع المغناطيس كما تشاء: كل قطعة يبقى لها طرفان شمالي وجنوبي."]),
          Q(["Outside a magnet, magnetic field lines go…", "خارج المغناطيس تتجه خطوط المجال المغناطيسي…"], [["From the north pole to the south pole", "من القطب الشمالي إلى القطب الجنوبي"], ["From south to north", "من الجنوبي إلى الشمالي"], ["In straight parallel lines only", "في خطوط مستقيمة متوازية فقط"], ["Crossing each other", "متقاطعة"]],
            ["They are imaginary lines that leave the N pole, enter the S pole, never cross, and are denser near the poles.", "خطوط وهمية تخرج من القطب الشمالي وتدخل الجنوبي، ولا تتقاطع، وتتزاحم قرب القطبين."], ["The lines are paths from the north gate to the south gate of the magnet's garden.", "الخطوط مسارات من البوابة الشمالية إلى البوابة الجنوبية في حديقة المغناطيس."]),
          Q(["Why is a compass box made of copper or plastic?", "لماذا تُصنع علبة البوصلة من النحاس أو البلاستيك؟"], [["They are non-magnetic, so they do not disturb the needle", "لأنهما غير مغناطيسيين فلا يؤثران على الإبرة"], ["They are magnetic", "لأنهما مغناطيسيان"], ["They make the needle heavier", "لزيادة وزن الإبرة"], ["They are cheaper than glass", "لأنهما أرخص من الزجاج"]],
            ["A magnetic box would attract the needle. Copper and plastic are non-magnetic, so the needle follows Earth's magnetism.", "العلبة المغناطيسية ستجذب الإبرة، والنحاس والبلاستيك غير مغناطيسيين فتتبع الإبرة مغناطيسية الأرض."], ["The needle must listen only to Earth, so its house is made of materials that stay silent.", "يجب أن تسمع الإبرة للأرض فقط، فبيتها مصنوع من مواد صامتة."]),
          Q(["A freely hung magnet settles pointing north-south because…", "يستقر المغناطيس المعلق تعليقًا حرًا في اتجاه شمال-جنوب لأن…"], [["Earth acts as a giant magnet", "الأرض تعمل كمغناطيس كبير"], ["The thread is magnetic", "الخيط مغناطيسي"], ["The Sun pulls it", "الشمس تجذبه"], ["Air pushes it", "الهواء يدفعه"]],
            ["Earth has a magnetic field that turns the free magnet so its N pole points almost to geographic north.", "للأرض مجال مغناطيسي يدير المغناطيس الحر فيتجه قطبه الشمالي تقريبًا نحو الشمال الجغرافي."], ["The whole Earth is a huge hidden magnet, and Nour's little magnet obeys it.", "الأرض كلها مغناطيس ضخم خفي، ومغناطيس نور الصغير يطيعه."])
        ]
      },
      {
        id: "prep1u2l3", icon: "🍎", page: 47,
        title: { en: "Gravitational Forces", ar: "قوى الجاذبية" },
        idea: {
          official: {
            en: ["Forces are contact forces (collision, elasticity, friction) or field forces that act at a distance (gravitational, electrostatic and magnetic).",
              "The gravitational force pulls all objects towards the centre of the Earth. The space where it acts is the Earth's gravitational field, shown by field lines pointing to the centre.",
              "Newton found that all objects attract each other. The forces are mutual, equal in size and opposite in direction. They increase with the masses and decrease as the square of the distance increases.",
              "Gravity keeps objects stable and causes rain and falling. It causes tides and keeps the Moon, Earth and satellites in orbital motion.",
              "Mass is the amount of matter (kg). Weight is the gravitational force on the object (N): " + eq("W = m × g") + ", with g on Earth about 10 N/kg.",
              "The Moon's gravitational field intensity is 1/6 of the Earth's, so weight changes from place to place while mass stays the same. In outer space weight can become zero."],
            ar: ["تنقسم القوى إلى قوى تلامس (التصادم والمرونة والاحتكاك)، وقوى مجال تؤثر عن بعد (الجاذبية والقوى الكهروستاتيكية والمغناطيسية).",
              "قوة الجاذبية تجذب جميع الأجسام نحو مركز الأرض، والحيز الذي تؤثر فيه هو مجال جاذبية الأرض، ويُمثَّل بخطوط تتجه نحو المركز.",
              "اكتشف نيوتن أن جميع الأجسام تتجاذب، والقوى متبادلة ومتساوية في المقدار ومتضادة في الاتجاه، وتزداد بزيادة الكتلتين وتقل بزيادة مربع المسافة بينهما.",
              "الجاذبية مسؤولة عن ثبات الأجسام وسقوط الأمطار وسقوط الأجسام، وتسبب المد والجزر، وتحفظ القمر والأرض والأقمار الصناعية في حركة مدارية.",
              "الكتلة مقدار ما في الجسم من مادة (kg)، والوزن قوة جذب الأرض للجسم (N): " + eq("W = m × g") + "، وشدة مجال الجاذبية على الأرض نحو ١٠ N/kg.",
              "شدة مجال جاذبية القمر ١/٦ شدة مجال جاذبية الأرض، لذلك يتغير الوزن من مكان لآخر بينما تبقى الكتلة ثابتة، وقد يصبح الوزن صفرًا في الفضاء الخارجي."]
          },
          story: {
            en: ["Ziad goes sand-skiing in Wadi El-Rayan in Fayoum. Nobody pushes him, yet he slides down the dune: gravity pulls him towards the Earth's centre.",
              "Gravity acts without touching, like the magnet and the charged comb. It is a field force.",
              "At camp, Ziad hangs his 6 kg backpack on a spring balance: 60 N. His teacher says that on the Moon it would read only 10 N.",
              "But the backpack has the same 6 kg of stuff inside on the Moon. Mass stays, weight changes.",
              "That night Ziad watches the full Moon. Its gravity tugs the oceans and makes tides, highest at new moon and full moon."],
            ar: ["يمارس زياد التزلج على الرمال في وادي الريان بالفيوم؛ لا أحد يدفعه، ومع ذلك ينزلق إلى أسفل الكثيب: الجاذبية تجذبه نحو مركز الأرض.",
              "الجاذبية تؤثر دون تلامس مثل المغناطيس والمشط المشحون؛ إنها قوة مجال.",
              "في المعسكر يعلّق زياد حقيبته ذات ٦ كجم في ميزان زنبركي فيقرأ ٦٠ نيوتن، ويقول معلمه إنها على القمر ستقرأ ١٠ نيوتن فقط.",
              "لكن الحقيبة تحتوي على ٦ كجم من الأشياء نفسها على القمر؛ الكتلة ثابتة والوزن يتغير.",
              "في الليل يتأمل زياد البدر؛ جاذبية القمر تشد مياه المحيطات فيحدث المد والجزر، ويكون في أعلاه عند المحاق والبدر."]
          }
        },
        words: [
          ["Field forces", "قوى المجال", "Forces that act at a distance: gravitational, electrostatic and magnetic.", "قوى تؤثر عن بعد: الجاذبية والكهروستاتيكية والمغناطيسية."],
          ["Contact forces", "قوى التلامس", "Forces that act when objects touch: collision, elasticity and friction.", "قوى تؤثر عند تلامس الأجسام: التصادم والمرونة والاحتكاك."],
          ["Gravitational field", "مجال الجاذبية", "The space where Earth's gravity attracts objects towards its centre.", "الحيز الذي تجذب فيه الأرض الأجسام نحو مركزها."],
          ["Mass", "الكتلة", "The amount of matter in an object, measured in kilograms (kg). It does not change with place.", "مقدار ما يحتويه الجسم من مادة، وتقاس بالكيلوجرام (kg)، ولا تتغير بتغير المكان."],
          ["Weight", "الوزن", "The gravitational force on an object, measured in newtons (N): W = m × g.", "قوة جذب الأرض للجسم، ويقاس بالنيوتن (N): W = m × g."],
          ["Gravitational field intensity (g)", "شدة مجال الجاذبية (g)", "About 10 N/kg at Earth's surface; on the Moon 1/6 of that.", "نحو ١٠ N/kg عند سطح الأرض، وعلى القمر سدس هذه القيمة."],
          ["Orbital motion", "الحركة المدارية", "Motion in a curved path around a central object, held by gravity, like the Moon around Earth.", "حركة جسم في مسار منحنٍ حول جسم مركزي بفعل الجاذبية، مثل حركة القمر حول الأرض."]
        ],
        lab: { parts: [{ type: "prep1_gravity" }, {
          type: "sort",
          prompt: ["Tap a force, then its type.", "اضغط على القوة ثم على نوعها."],
          bins: [["con", "✋", "Contact force", "قوة تلامس"], ["fld", "🌐", "Field force", "قوة مجال"]],
          items: [[["Collision force", "قوة التصادم"], "con"], [["Elasticity force", "قوة المرونة"], "con"], [["Friction force", "قوة الاحتكاك"], "con"], [["Gravitational force", "قوة الجاذبية"], "fld"], [["Electrostatic force", "القوة الكهروستاتيكية"], "fld"], [["Magnetic force", "القوة المغناطيسية"], "fld"]]
        }] },
        quiz: [
          Q(["Which force is a field force?", "أي القوى التالية قوة مجال؟"], [["Gravitational force", "قوة الجاذبية"], ["Friction force", "قوة الاحتكاك"], ["Collision force", "قوة التصادم"], ["Elasticity force", "قوة المرونة"]],
            ["Gravitational, electrostatic and magnetic forces act at a distance, so they have fields. Friction needs contact.", "قوى الجاذبية والكهروستاتيكية والمغناطيسية تؤثر عن بعد فلها مجالات، أما الاحتكاك فيحتاج إلى تلامس."], ["Nobody touched Ziad on the dune, but gravity still pulled him down.", "لم يلمس أحد زيادًا على الكثيب، ومع ذلك جذبته الجاذبية إلى أسفل."]),
          Q(["What is the weight of a 6 kg object on Earth (g = 10 N/kg)?", "ما وزن جسم كتلته ٦ كجم على الأرض (g = 10 N/kg)؟"], [["60 N", "٦٠ نيوتن"], ["6 N", "٦ نيوتن"], ["10 N", "١٠ نيوتن"], ["0.6 N", "٠٫٦ نيوتن"]],
            [eq("W = m × g = 6 × 10 = 60 N") + ".", eq("W = m × g = 6 × 10 = 60 N") + "."], ["Ziad's 6 kg backpack pulled the spring balance down to 60 N.", "حقيبة زياد ذات ٦ كجم شدت الميزان الزنبركي إلى ٦٠ نيوتن."]),
          Q(["The same 6 kg object is taken to the Moon. What happens?", "نُقل الجسم نفسه ذو ٦ كجم إلى القمر. ماذا يحدث؟"], [["Its mass stays 6 kg and its weight becomes 10 N", "تبقى كتلته ٦ كجم ويصبح وزنه ١٠ نيوتن"], ["Its mass becomes 1 kg", "تصبح كتلته ١ كجم"], ["Its weight stays 60 N", "يبقى وزنه ٦٠ نيوتن"], ["Both become zero", "يصبح كلاهما صفرًا"]],
            ["The Moon's g is 1/6 of Earth's, so the weight is 60 ÷ 6 = 10 N. Mass does not depend on place.", "شدة جاذبية القمر سدس شدة جاذبية الأرض، فيصبح الوزن ٦٠ ÷ ٦ = ١٠ نيوتن، والكتلة لا تتغير بتغير المكان."], ["Same backpack, same things inside, but the Moon pulls it six times more gently.", "الحقيبة نفسها بالأشياء نفسها، لكن القمر يجذبها بلطف أكبر ست مرات."]),
          Q(["If the distance between two masses is doubled, the gravitational force…", "إذا تضاعفت المسافة بين كتلتين فإن قوة الجاذبية بينهما…"], [["Becomes a quarter", "تصبح الربع"], ["Doubles", "تتضاعف"], ["Becomes half", "تصبح النصف"], ["Stays the same", "تبقى كما هي"]],
            ["The force decreases as the square of the distance increases: (2)² = 4, so it becomes 1/4.", "القوة تقل بزيادة مربع المسافة: (٢)² = ٤، إذن تصبح ١/٤."], ["Step twice as far apart and the invisible pull weakens four times.", "ابتعد ضعف المسافة فيضعف الشد الخفي أربع مرات."]),
          Q(["The gravitational forces between two objects are…", "قوى الجاذبية بين جسمين…"], [["Equal in size and opposite in direction", "متساوية في المقدار ومتضادة في الاتجاه"], ["Only on the heavier object", "على الجسم الأثقل فقط"], ["Always repulsive", "تنافر دائمًا"], ["Bigger on the smaller object", "أكبر على الجسم الأصغر"]],
            ["Gravitational forces are mutual: each object pulls the other with the same force, and they are always attractive.", "قوى الجاذبية متبادلة: كل جسم يجذب الآخر بالقوة نفسها، وهي تجاذب دائمًا."], ["Like a fair tug of war: both sides pull exactly as hard towards each other.", "كشد حبل عادل: كل طرف يشد الآخر نحوه بالقوة نفسها تمامًا."]),
          Q(["Which phenomenon is caused by the gravity between the Moon and the Earth?", "أي الظواهر التالية سببها الجاذبية بين القمر والأرض؟"], [["Tides", "المد والجزر"], ["Lightning", "البرق"], ["Rainbows", "قوس قزح"], ["Static electricity", "الكهربية الساكنة"]],
            ["Tides happen twice a day and are highest at new moon and full moon. In the Bay of Fundy the difference reaches 19 m.", "يحدث المد والجزر مرتين يوميًا ويبلغ أقصاه عند المحاق والبدر، ويصل الفرق في خليج فندي إلى ١٩ مترًا."], ["The Moon tugs the oceans like a gentle hand pulling a blanket.", "القمر يشد مياه المحيطات كيد لطيفة تشد غطاءً."]),
          Q(["What keeps a satellite moving in its orbit around the Earth?", "ما الذي يحفظ القمر الصناعي في مداره حول الأرض؟"], [["Earth's gravitational force", "قوة جاذبية الأرض"], ["Magnetic force", "القوة المغناطيسية"], ["Friction with air", "الاحتكاك بالهواء"], ["Static electricity", "الكهربية الساكنة"]],
            ["Orbital motion depends on gravity between the orbiting object and the central one, like the Moon around Earth and Earth around the Sun.", "تعتمد الحركة المدارية على الجاذبية بين الجسم الدوار والجسم المركزي، مثل القمر حول الأرض والأرض حول الشمس."], ["Gravity is the invisible string that keeps the satellite circling, like a ball on a rope.", "الجاذبية هي الخيط الخفي الذي يبقي القمر الصناعي يدور، كالكرة المربوطة بحبل."])
        ]
      }
    ]
  });

  E.SCIG.prep1 = { units: U, book: { en: "Discover and Learn: Science, Prep 1, Term 1 (2026-2027)", ar: "اكتشف وتعلم: العلوم، الصف الأول الإعدادي، الفصل الدراسي الأول (٢٠٢٦-٢٠٢٧)" } };
})();
/* ---------- Prep 1 data: Units 3 and 4 ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  var U = E.SCIG.prep1.units;

  /* ======================= UNIT 3 - LIVING ORGANISMS ======================= */
  U.push({
    id: "prep1u3", num: 3, icon: "🦠", color: "green",
    title: { en: "Living Organisms, Their Structure and Processes", ar: "الكائنات الحية: تركيبها وعملياتها الحيوية" },
    lessons: [
      {
        id: "prep1u3l1", icon: "🔬", page: 56,
        title: { en: "Cells and Life", ar: "الخلايا والحياة" },
        idea: {
          official: {
            en: ["The cell is the basic unit of structure and function in any living organism. Cells form tissues, tissues form organs, organs form systems, and systems form the organism.",
              "Living organisms are classified by their cells into prokaryotes and eukaryotes.",
              "Prokaryotes, such as bacteria, are unicellular, simple and very small. Their genetic material lies in the cytoplasm, not surrounded by a nuclear membrane.",
              "Eukaryotes have a true nucleus. They may be unicellular (amoeba, paramecium, euglena, yeast) or multicellular with specialised cells (fungi such as mushroom and bread mould, plants and animals).",
              "The plant cell has a cell wall, chloroplasts and a large vacuole. The animal cell has a centrosome and no cell wall. Both have a nucleus, cytoplasm, mitochondria, Golgi apparatus, endoplasmic reticulum and ribosomes.",
              "Stem cells are undifferentiated cells that renew themselves by division and can change into specialised cells such as nerve, muscle, liver and intestinal cells."],
            ar: ["الخلية هي وحدة التركيب والوظيفة في أي كائن حي؛ الخلايا تكوّن الأنسجة، والأنسجة تكوّن الأعضاء، والأعضاء تكوّن الأجهزة، والأجهزة تكوّن الكائن الحي.",
              "تُصنف الكائنات الحية حسب نوع خلاياها إلى بدائيات النواة وحقيقيات النواة.",
              "بدائيات النواة مثل البكتيريا كائنات وحيدة الخلية بسيطة التركيب صغيرة جدًا، ومادتها الوراثية في السيتوبلازم غير محاطة بغشاء نووي.",
              "حقيقيات النواة لها نواة حقيقية، وقد تكون وحيدة الخلية (الأميبا والبراميسيوم واليوجلينا وفطر الخميرة) أو عديدة الخلايا ذات خلايا متخصصة (الفطريات مثل عيش الغراب وعفن الخبز، والنباتات والحيوانات).",
              "تتميز الخلية النباتية بالجدار الخلوي والبلاستيدات الخضراء والفجوة الكبيرة، والخلية الحيوانية بالجسم المركزي وعدم وجود جدار خلوي، وفي كلتيهما نواة وسيتوبلازم وميتوكوندريا وجهاز جولجي وشبكة إندوبلازمية وريبوسومات.",
              "الخلايا الجذعية خلايا غير متمايزة تجدد نفسها بالانقسام، ويمكن أن تتحول إلى خلايا متخصصة مثل الخلايا العصبية والعضلية وخلايا الكبد والأمعاء."]
          },
          story: {
            en: ["Hana visits the pottery village in Fustat, near the Museum of Civilizations, and watches an artist turn one lump of clay into a jar, a plate and a lamp.",
              "Stem cells are like that clay: one kind of cell that can become nerve cells, muscle cells, liver cells or intestinal cells.",
              "Back at school, Hana looks at onion skin under the microscope: neat boxes with walls. Plant cells! Cheek cells look like round blobs without walls.",
              "Then her teacher shows a picture of bacteria. They are much smaller, and their genetic material floats loose with no nucleus around it.",
              "Hana realises her own body is like Cairo: cells are the people, tissues the streets, organs the districts and systems the whole city working together."],
            ar: ["تزور هنا قرية الفخار في الفسطاط قرب متحف الحضارة، وتشاهد فنانًا يحوّل كتلة واحدة من الطين إلى جرة وطبق ومصباح.",
              "الخلايا الجذعية تشبه هذا الطين: نوع واحد من الخلايا يمكن أن يصبح خلايا عصبية أو عضلية أو خلايا كبد أو أمعاء.",
              "في المدرسة تفحص هنا قشرة البصل تحت المجهر فترى صناديق منتظمة لها جدران: خلايا نباتية! أما خلايا بطانة الخد فتبدو كتلًا مستديرة بلا جدران.",
              "ثم تعرض المعلمة صورة للبكتيريا؛ إنها أصغر بكثير، ومادتها الوراثية سابحة في السيتوبلازم دون نواة تحيط بها.",
              "تدرك هنا أن جسمها يشبه القاهرة: الخلايا هم الناس، والأنسجة الشوارع، والأعضاء الأحياء، والأجهزة المدينة كلها تعمل معًا."]
          }
        },
        words: [
          ["Cell", "الخلية", "The basic unit of structure and function in living organisms.", "وحدة التركيب والوظيفة في الكائنات الحية."],
          ["Prokaryotes", "بدائيات النواة", "Unicellular organisms whose genetic material is not surrounded by a nuclear membrane, such as bacteria.", "كائنات وحيدة الخلية مادتها الوراثية غير محاطة بغشاء نووي، مثل البكتيريا."],
          ["Eukaryotes", "حقيقيات النواة", "Organisms with a true nucleus; unicellular or multicellular.", "كائنات لها نواة حقيقية، وحيدة الخلية أو عديدة الخلايا."],
          ["Unicellular organism", "كائن وحيد الخلية", "One unspecialised cell that does all the life processes, such as amoeba.", "خلية واحدة غير متخصصة تقوم بجميع العمليات الحيوية، مثل الأميبا."],
          ["Chloroplast", "البلاستيدة الخضراء", "A plant-cell organelle that contains chlorophyll for photosynthesis.", "عضية في الخلية النباتية تحتوي على الكلوروفيل للبناء الضوئي."],
          ["Centrosome", "الجسم المركزي", "An organelle found in the animal cell but not in the plant cell.", "عضية توجد في الخلية الحيوانية ولا توجد في الخلية النباتية."],
          ["Stem cells", "الخلايا الجذعية", "Undifferentiated cells that renew themselves and can change into specialised cells.", "خلايا غير متمايزة تجدد نفسها ويمكن أن تتحول إلى خلايا متخصصة."]
        ],
        lab: { parts: [{ type: "prep1_cell" }, {
          type: "sort",
          prompt: ["Tap an organism, then its group (book Diagram 1).", "اضغط على الكائن ثم على مجموعته (المخطط ١ في الكتاب)."],
          bins: [["pro", "🦠", "Prokaryote", "بدائي النواة"], ["uni", "💧", "Unicellular eukaryote", "حقيقي النواة وحيد الخلية"], ["mul", "🌳", "Multicellular eukaryote", "حقيقي النواة عديد الخلايا"]],
          items: [[["Bacteria", "البكتيريا"], "pro"], [["Amoeba", "الأميبا"], "uni"], [["Paramecium", "البراميسيوم"], "uni"], [["Euglena", "اليوجلينا"], "uni"], [["Yeast fungus", "فطر الخميرة"], "uni"], [["Bread mould", "عفن الخبز"], "mul"], [["Mushroom", "عيش الغراب"], "mul"], [["Bean plant", "نبات الفول"], "mul"], [["Lion", "الأسد"], "mul"]]
        }] },
        quiz: [
          Q(["What is the basic unit of structure and function in living organisms?", "ما وحدة التركيب والوظيفة في الكائنات الحية؟"], [["The cell", "الخلية"], ["The atom", "الذرة"], ["The organ", "العضو"], ["The tissue", "النسيج"]],
            ["Cells make tissues, tissues make organs, organs make systems and systems make the organism.", "الخلايا تكوّن الأنسجة، والأنسجة تكوّن الأعضاء، والأعضاء تكوّن الأجهزة، والأجهزة تكوّن الكائن الحي."], ["In Hana's Cairo, the cells are the people: everything else is built from them.", "في قاهرة هنا الخلايا هم الناس: وكل شيء آخر مبني منهم."]),
          Q(["Bacteria are classified as…", "تُصنف البكتيريا من…"], [["Prokaryotes", "بدائيات النواة"], ["Multicellular eukaryotes", "حقيقيات النواة عديدة الخلايا"], ["Unicellular eukaryotes", "حقيقيات النواة وحيدة الخلية"], ["Plants", "النباتات"]],
            ["Bacteria are unicellular and their genetic material is not surrounded by a nuclear membrane.", "البكتيريا وحيدة الخلية ومادتها الوراثية غير محاطة بغشاء نووي."], ["The bacterium's genetic material floats loose with no nucleus 'house' around it.", "المادة الوراثية في البكتيريا سابحة بلا نواة تحيط بها كالبيت."]),
          Q(["Which organelle is found in the plant cell but NOT in the animal cell?", "أي العضيات توجد في الخلية النباتية ولا توجد في الخلية الحيوانية؟"], [["Chloroplasts", "البلاستيدات الخضراء"], ["Nucleus", "النواة"], ["Mitochondria", "الميتوكوندريا"], ["Ribosomes", "الريبوسومات"]],
            ["Chloroplasts contain chlorophyll for photosynthesis, so only plant cells have them. Plant cells also have a cell wall.", "البلاستيدات الخضراء تحتوي على الكلوروفيل للبناء الضوئي، فلا توجد إلا في الخلية النباتية، ولها جدار خلوي أيضًا."], ["Only the onion-skin boxes had green kitchens for making food from light.", "صناديق قشرة البصل وحدها لها مطابخ خضراء تصنع الغذاء من الضوء."]),
          Q(["Which structure is found in animal, plant AND bacterial cells?", "أي التراكيب يوجد في الخلية الحيوانية والنباتية والبكتيرية معًا؟"], [["Ribosomes", "الريبوسومات"], ["Nucleus", "النواة"], ["Chloroplasts", "البلاستيدات الخضراء"], ["Centrosome", "الجسم المركزي"]],
            ["All three have a plasma membrane, cytoplasm and ribosomes. Only eukaryotes have a nucleus.", "الخلايا الثلاث بها غشاء بلازمي وسيتوبلازم وريبوسومات، أما النواة فلا توجد إلا في حقيقيات النواة."], ["Even the tiny bacterium keeps its little ribosome workers.", "حتى البكتيريا الصغيرة تحتفظ بعمالها الصغار: الريبوسومات."]),
          Q(["Which is a unicellular eukaryote?", "أي مما يلي كائن حقيقي النواة وحيد الخلية؟"], [["Amoeba", "الأميبا"], ["Bacteria", "البكتيريا"], ["Mushroom", "عيش الغراب"], ["Lion", "الأسد"]],
            ["Amoeba, paramecium, euglena and yeast are single cells with a true nucleus.", "الأميبا والبراميسيوم واليوجلينا والخميرة خلايا مفردة لها نواة حقيقية."], ["Amoeba lives alone in one cell, but it has a proper nucleus room inside.", "الأميبا تعيش وحدها في خلية واحدة، لكن لها غرفة نواة حقيقية بداخلها."]),
          Q(["What are stem cells?", "ما الخلايا الجذعية؟"], [["Undifferentiated cells that can change into specialised cells", "خلايا غير متمايزة يمكن أن تتحول إلى خلايا متخصصة"], ["Cells found only in plant stems", "خلايا توجد في سيقان النباتات فقط"], ["Dead cells", "خلايا ميتة"], ["Bacteria in the blood", "بكتيريا في الدم"]],
            ["Stem cells renew themselves by division and can differentiate into nerve, muscle, liver and intestinal cells.", "الخلايا الجذعية تجدد نفسها بالانقسام ويمكن أن تتمايز إلى خلايا عصبية وعضلية وخلايا كبد وأمعاء."], ["Like the clay in Fustat that becomes a jar, a plate or a lamp.", "مثل طين الفسطاط الذي يصبح جرة أو طبقًا أو مصباحًا."]),
          Q(["Can prokaryotes act as stem cells?", "هل يمكن أن تعمل بدائيات النواة كخلايا جذعية؟"], [["No, they are unicellular organisms, not cells that build specialised tissues", "لا، فهي كائنات وحيدة الخلية لا تكوّن أنسجة متخصصة"], ["Yes, all bacteria are stem cells", "نعم، كل البكتيريا خلايا جذعية"], ["Yes, because they have a nucleus", "نعم، لأن لها نواة"], ["Only in plants", "في النباتات فقط"]],
            ["Stem cells change into the specialised cells of higher animals and humans. A prokaryote is a whole organism of one cell.", "الخلايا الجذعية تتحول إلى خلايا متخصصة في الحيوانات الراقية والإنسان، أما بدائي النواة فكائن كامل من خلية واحدة."], ["A bacterium is already the whole pot; it is not clay waiting to be shaped.", "البكتيريا هي الإناء كاملًا، وليست طينًا ينتظر التشكيل."])
        ]
      },
      {
        id: "prep1u3l2", icon: "🌿", page: 64,
        title: { en: "General Characteristics of Living Organisms", ar: "الخصائص العامة للكائنات الحية" },
        idea: {
          official: {
            en: ["All living organisms share characteristics such as nutrition, respiration, transport, excretion, movement, growth, reproduction, sensation and adaptation.",
              "Nutrition: autotrophs (producers) make their own food; heterotrophs (consumers) depend on producers. Plants and green algae make glucose by photosynthesis in chloroplasts: carbon dioxide + water, with light and chlorophyll, give glucose + oxygen.",
              "Respiration: humans use lungs, fish use gills, insects use tracheal tubes, and adult frogs use lungs and skin. Plants take oxygen through stomata. Cellular respiration in the mitochondria breaks down glucose with oxygen to release energy, day and night.",
              "Transport: blood carries food and oxygen; the heart pumps it round in a closed circulation. In plants, xylem carries water and salts up from the roots and phloem carries food from the leaves.",
              "Excretion: humans remove CO₂ and water vapour by the lungs, urine by the kidneys and sweat by the skin. Plants lose water vapour and CO₂ through stomata controlled by guard cells.",
              "Movement: humans use the musculoskeletal system. Plant movement is limited, like Gazania flowers and Mimosa leaves. Amoeba uses pseudopodia, Euglena a flagellum and Paramecium cilia."],
            ar: ["تشترك الكائنات الحية في خصائص منها التغذية والتنفس والنقل والإخراج والحركة والنمو والتكاثر والإحساس والتكيف.",
              "التغذية: ذاتية التغذية (المنتجات) تصنع غذاءها بنفسها، وغير ذاتية التغذية (المستهلكات) تعتمد على المنتجات. تصنع النباتات والطحالب الخضراء الجلوكوز بالبناء الضوئي في البلاستيدات الخضراء: ثاني أكسيد الكربون + ماء، في وجود الضوء والكلوروفيل، يعطيان جلوكوز + أكسجين.",
              "التنفس: يتنفس الإنسان بالرئتين، والأسماك بالخياشيم، والحشرات بالقصبات الهوائية، والضفدع البالغ بالرئتين والجلد، ويحصل النبات على الأكسجين من الثغور. والتنفس الخلوي في الميتوكوندريا يحلل الجلوكوز بالأكسجين لتنطلق الطاقة ليلًا ونهارًا.",
              "النقل: يحمل الدم الغذاء والأكسجين ويضخه القلب في دورة مغلقة، وفي النبات ينقل الخشب الماء والأملاح من الجذور لأعلى، وينقل اللحاء الغذاء من الأوراق.",
              "الإخراج: يتخلص الإنسان من ثاني أكسيد الكربون وبخار الماء بالرئتين، ومن البول بالكليتين، ومن العرق بالجلد، ويتخلص النبات من بخار الماء وثاني أكسيد الكربون عبر الثغور التي تتحكم فيها الخلايا الحارسة.",
              "الحركة: يتحرك الإنسان بالجهاز الحركي (العضلات والهيكل العظمي)، وحركة النبات محدودة مثل تفتح زهرة الجازانيا وانطواء أوراق نبات المستحية، وتتحرك الأميبا بالأقدام الكاذبة واليوجلينا بالسوط والبراميسيوم بالأهداب."]
          },
          story: {
            en: ["Adam spends a summer week on his grandfather's farm in Beni Suef. A cow munches clover: the clover is the producer and the cow the consumer.",
              "At noon the clover leaves soak up sunlight, take in carbon dioxide through tiny stomata and give out oxygen while making glucose.",
              "At night there is no photosynthesis, but the plants still respire, just like Adam, using oxygen and giving out carbon dioxide.",
              "Grandfather shows him the Mimosa plant. Adam touches a leaf and it folds up. The sunflowers turn to follow the Sun from morning to evening.",
              "Back in the city, a drop of canal water under the school microscope shows an amoeba crawling with false feet and a paramecium whizzing with cilia."],
            ar: ["يقضي آدم أسبوعًا صيفيًا في مزرعة جده ببني سويف، وتمضغ بقرة البرسيم: البرسيم هو المنتج والبقرة هي المستهلك.",
              "عند الظهيرة تمتص أوراق البرسيم ضوء الشمس وتأخذ ثاني أكسيد الكربون من الثغور الدقيقة وتطلق الأكسجين بينما تصنع الجلوكوز.",
              "في الليل لا يحدث بناء ضوئي، لكن النباتات تظل تتنفس مثل آدم تمامًا، فتأخذ الأكسجين وتطلق ثاني أكسيد الكربون.",
              "يريه جده نبات المستحية فيلمس آدم ورقة فتنطوي، ويرى زهور عباد الشمس تتجه مع الشمس من الصباح إلى المساء.",
              "وفي المدينة تكشف قطرة من ماء الترعة تحت مجهر المدرسة أميبا تزحف بأقدام كاذبة وبراميسيوم يندفع بأهدابه."]
          }
        },
        words: [
          ["Photosynthesis", "البناء الضوئي", "Plants use light and chlorophyll to turn carbon dioxide and water into glucose and oxygen.", "يستخدم النبات الضوء والكلوروفيل لتحويل ثاني أكسيد الكربون والماء إلى جلوكوز وأكسجين."],
          ["Cellular respiration", "التنفس الخلوي", "Breaking down glucose with oxygen in the mitochondria to release energy, day and night.", "تحليل الجلوكوز في وجود الأكسجين داخل الميتوكوندريا لتنطلق الطاقة، ليلًا ونهارًا."],
          ["Autotroph (producer)", "ذاتي التغذية (منتج)", "An organism that makes its own food, such as plants and green algae.", "كائن يصنع غذاءه بنفسه مثل النباتات والطحالب الخضراء."],
          ["Heterotroph (consumer)", "غير ذاتي التغذية (مستهلك)", "An organism that depends on producers for food, such as humans and cows.", "كائن يعتمد على المنتجات في غذائه مثل الإنسان والبقرة."],
          ["Stomata", "الثغور", "Tiny openings in leaves for gas exchange and water vapour loss, opened and closed by guard cells.", "فتحات دقيقة في الأوراق لتبادل الغازات وخروج بخار الماء، تفتحها وتغلقها الخلايا الحارسة."],
          ["Xylem and phloem", "الخشب واللحاء", "Xylem carries water and salts from the roots; phloem carries food from the leaves.", "الخشب ينقل الماء والأملاح من الجذور، واللحاء ينقل الغذاء من الأوراق."],
          ["Excretion", "الإخراج", "Getting rid of wastes such as CO₂, urea, excess water and salts.", "التخلص من الفضلات مثل ثاني أكسيد الكربون واليوريا والماء والأملاح الزائدة."]
        ],
        lab: { parts: [{ type: "prep1_life" }, {
          type: "sort",
          prompt: ["How does the human body get rid of each waste? Tap a waste, then the organ.", "كيف يتخلص جسم الإنسان من كل فضلة؟ اضغط على الفضلة ثم على العضو."],
          bins: [["lung", "🫁", "Lungs (exhaled air)", "الرئتان (هواء الزفير)"], ["kid", "🫘", "Kidneys (urine)", "الكليتان (البول)"], ["skin", "💧", "Skin (sweat)", "الجلد (العرق)"]],
          items: [[["Carbon dioxide", "ثاني أكسيد الكربون"], "lung"], [["Water vapour", "بخار الماء"], "lung"], [["Urea", "اليوريا"], "kid"], [["Excess water and salts as urine", "الماء والأملاح الزائدة في صورة بول"], "kid"], [["Excess water and salts as sweat", "الماء والأملاح الزائدة في صورة عرق"], "skin"]]
        }] },
        quiz: [
          Q(["What are the products of photosynthesis?", "ما نواتج عملية البناء الضوئي؟"], [["Glucose and oxygen", "الجلوكوز والأكسجين"], ["Carbon dioxide and water", "ثاني أكسيد الكربون والماء"], ["Glucose and carbon dioxide", "الجلوكوز وثاني أكسيد الكربون"], ["Oxygen and water only", "الأكسجين والماء فقط"]],
            ["Carbon dioxide + water, with light and chlorophyll, give glucose + oxygen. Light energy becomes stored chemical energy.", "ثاني أكسيد الكربون + الماء، في وجود الضوء والكلوروفيل، يعطيان جلوكوز + أكسجين، فتتحول الطاقة الضوئية إلى طاقة كيميائية مختزنة."], ["The clover's green kitchen cooks glucose from air and water and breathes out oxygen.", "مطبخ البرسيم الأخضر يطبخ الجلوكوز من الهواء والماء ويطلق الأكسجين."]),
          Q(["When does cellular respiration take place in plants?", "متى يحدث التنفس الخلوي في النبات؟"], [["Day and night", "ليلًا ونهارًا"], ["Only in daylight", "في الضوء فقط"], ["Only at night", "في الليل فقط"], ["Only in winter", "في الشتاء فقط"]],
            ["Respiration in the mitochondria goes on all the time to release energy; photosynthesis needs light.", "التنفس في الميتوكوندريا مستمر طوال الوقت لتنطلق الطاقة، أما البناء الضوئي فيحتاج إلى الضوء."], ["At night Adam's clover stopped cooking but never stopped breathing.", "في الليل توقف برسيم آدم عن الطهي لكنه لم يتوقف عن التنفس."]),
          Q(["Insects breathe using…", "تتنفس الحشرات بواسطة…"], [["Tracheal tubes", "القصبات الهوائية"], ["Gills", "الخياشيم"], ["Lungs", "الرئتين"], ["Stomata", "الثغور"]],
            ["Humans use lungs, fish use gills, insects use tracheal tubes, and adult frogs use lungs and skin.", "الإنسان يتنفس بالرئتين، والأسماك بالخياشيم، والحشرات بالقصبات الهوائية، والضفدع البالغ بالرئتين والجلد."], ["A grasshopper has a network of tiny air pipes running through its body.", "للجرادة شبكة من أنابيب الهواء الدقيقة تمتد في جسمها."]),
          Q(["Which plant tissue carries water and mineral salts from the roots to the leaves?", "أي الأنسجة النباتية ينقل الماء والأملاح من الجذور إلى الأوراق؟"], [["Xylem", "الخشب"], ["Phloem", "اللحاء"], ["Stomata", "الثغور"], ["Guard cells", "الخلايا الحارسة"]],
            ["Xylem carries water and salts up; phloem carries food from the leaves to the rest of the plant.", "الخشب ينقل الماء والأملاح لأعلى، واللحاء ينقل الغذاء من الأوراق إلى باقي النبات."], ["Xylem is the water pipe going up; phloem is the food delivery going out from the leaves.", "الخشب أنبوب الماء الصاعد، واللحاء خدمة توصيل الغذاء من الأوراق."]),
          Q(["How does the human body get rid of urea?", "كيف يتخلص جسم الإنسان من اليوريا؟"], [["Through the kidneys in urine", "عن طريق الكليتين في البول"], ["Through the lungs", "عن طريق الرئتين"], ["Through the stomata", "عن طريق الثغور"], ["Through the heart", "عن طريق القلب"]],
            ["The kidneys remove excess water, salts and urea as urine. A dialysis machine does this job when the kidneys fail.", "تتخلص الكليتان من الماء والأملاح الزائدة واليوريا في صورة بول، وجهاز الغسيل الكلوي يقوم بهذا العمل عند فشل الكليتين."], ["The kidneys are the body's water-treatment plant.", "الكليتان محطة معالجة المياه في الجسم."]),
          Q(["Euglena moves using…", "تتحرك اليوجلينا بواسطة…"], [["A flagellum", "السوط"], ["Pseudopodia", "الأقدام الكاذبة"], ["Cilia", "الأهداب"], ["Muscles and bones", "العضلات والعظام"]],
            ["Amoeba uses pseudopodia (false feet), Euglena a flagellum and Paramecium cilia.", "الأميبا تتحرك بالأقدام الكاذبة، واليوجلينا بالسوط، والبراميسيوم بالأهداب."], ["Euglena swims with one long whip-like tail.", "اليوجلينا تسبح بذيل طويل يشبه السوط."]),
          Q(["Which is an example of plant movement?", "أي مما يلي مثال على الحركة في النبات؟"], [["Mimosa leaves fold up when touched", "انطواء أوراق المستحية عند لمسها"], ["A plant walks to water", "النبات يمشي إلى الماء"], ["Roots jump out of the soil", "الجذور تقفز من التربة"], ["Leaves fly to the Sun", "الأوراق تطير نحو الشمس"]],
            ["Plant movement is limited, not locomotion: Gazania flowers open by day, Mimosa leaves fold on touch and sunflowers follow the Sun.", "حركة النبات محدودة وليست انتقالية: تتفتح زهرة الجازانيا نهارًا، وتنطوي أوراق المستحية عند اللمس، وتتبع زهرة عباد الشمس الشمس."], ["Adam touched the Mimosa and it shyly folded its leaves.", "لمس آدم نبات المستحية فطوى أوراقه في خجل."])
        ]
      },
      {
        id: "prep1u3l3", icon: "🧫", page: 72,
        title: { en: "Microbes", ar: "الميكروبات" },
        idea: {
          official: {
            en: ["Microbes are microscopic living organisms found everywhere, even inside our bodies. They can be beneficial or harmful. Prokaryote microbes include bacteria; eukaryote microbes include protozoa and fungi.",
              "Root nodule bacteria live on the roots of legumes such as clover, beans and peas and give the plant nitrogen in a usable form. Decomposition bacteria turn plant remains into soluble nitrogen compounds that make soil fertile.",
              "Lactic acid bacteria turn lactose (milk sugar) into lactic acid, giving yogurt its taste and thickness. Warm milk (about 42 °C) with a little yogurt is kept at 35-45 °C for 4-5 hours.",
              "Penicillium roqueforti gives Roquefort cheese its taste and colours. Fleming discovered in 1928 that Penicillium notatum makes penicillin, an antibiotic that kills some disease bacteria. Yeast is used for bread and is rich in vitamin B complex.",
              "Harmful microbes enter the body by breathing, eating contaminated food or through the skin. Dysentery is caused by the protozoan Entamoeba histolytica and treated with antiprotozoal drugs.",
              "Typhoid is caused by Salmonella typhi bacteria in contaminated food and water, with a fever up to 40 °C, and is treated with antibiotics. Wash food and hands, cover food and brush your teeth."],
            ar: ["الميكروبات كائنات حية دقيقة توجد في كل مكان حتى داخل أجسامنا، وقد تكون نافعة أو ضارة. ومن الميكروبات بدائية النواة البكتيريا، ومن حقيقية النواة الأوليات والفطريات.",
              "تعيش بكتيريا العقد الجذرية على جذور النباتات البقولية مثل البرسيم والفول والبسلة وتمد النبات بالنيتروجين في صورة يستفيد منها، وتحول بكتيريا التحلل بقايا النباتات إلى مركبات نيتروجينية ذائبة تزيد خصوبة التربة.",
              "تحول بكتيريا حمض اللاكتيك سكر اللبن (اللاكتوز) إلى حمض اللاكتيك فيكتسب الزبادي طعمه وقوامه؛ يُضاف قليل من الزبادي إلى اللبن الدافئ (نحو ٤٢ °س) ويُحفظ عند ٣٥-٤٥ °س لمدة ٤-٥ ساعات.",
              "يعطي فطر البنسيليوم روكفورتي جبن الروكفور طعمه وألوانه، واكتشف فلمنج عام ١٩٢٨ أن فطر البنسيليوم نوتاتم يفرز البنسلين، وهو مضاد حيوي يقتل بعض البكتيريا المسببة للأمراض، ويُستخدم فطر الخميرة في صناعة الخبز وهو غني بفيتامين ب المركب.",
              "تدخل الميكروبات الضارة الجسم عن طريق التنفس أو تناول طعام ملوث أو اختراق الجلد. ومرض الدوسنتاريا يسببه حيوان أولي يسمى الإنتاميبا هيستوليتيكا، ويُعالج بالأدوية المضادة للأوليات.",
              "ومرض التيفود تسببه بكتيريا السالمونيلا التيفية في الطعام والماء الملوثين، وتصل الحرارة فيه إلى ٤٠ °س، ويُعالج بالمضادات الحيوية. اغسل الطعام ويديك، وغطِّ الطعام، ونظّف أسنانك."]
          },
          story: {
            en: ["Salma's mother makes yogurt at home in Assiut. She boils the milk to kill any bacteria, then waits until it is just warm, about 42 °C.",
              "Salma stirs in half a cup of yesterday's yogurt. It is full of lactic acid bacteria, tiny workers ready to start.",
              "They keep the pots warm for 4 to 5 hours. The bacteria turn milk sugar into lactic acid and the milk becomes thick and tangy.",
              "Then the pots go into the fridge. Salma forgot one pot on the counter last time and it became far too sour.",
              "At dinner Salma's brother skips washing his hands. She reminds him: dysentery and typhoid both start with contaminated food."],
            ar: ["تصنع والدة سلمى الزبادي في البيت بأسيوط؛ تغلي اللبن لتقتل أي بكتيريا، ثم تنتظر حتى يصبح دافئًا فقط، نحو ٤٢ °س.",
              "تقلّب سلمى فيه نصف كوب من زبادي الأمس؛ إنه مليء ببكتيريا حمض اللاكتيك، عمال صغار مستعدون للبدء.",
              "يحفظون الأواني دافئة من ٤ إلى ٥ ساعات، فتحول البكتيريا سكر اللبن إلى حمض اللاكتيك ويصبح اللبن متماسكًا لاذع الطعم.",
              "ثم توضع الأواني في الثلاجة. نسيت سلمى إناءً على الرخامة في المرة السابقة فأصبح حامضًا جدًا.",
              "على العشاء يهمل أخوها غسل يديه فتذكّره: الدوسنتاريا والتيفود كلاهما يبدأ من طعام ملوث."]
          }
        },
        words: [
          ["Microbes", "الميكروبات", "Microscopic living organisms; some are beneficial and some harmful.", "كائنات حية دقيقة، بعضها نافع وبعضها ضار."],
          ["Root nodule bacteria", "بكتيريا العقد الجذرية", "Bacteria on the roots of legumes that give the plant usable nitrogen.", "بكتيريا على جذور النباتات البقولية تمد النبات بالنيتروجين في صورة صالحة."],
          ["Lactic acid bacteria", "بكتيريا حمض اللاكتيك", "Bacteria that turn lactose into lactic acid, making yogurt.", "بكتيريا تحول اللاكتوز إلى حمض اللاكتيك فيتكون الزبادي."],
          ["Penicillin", "البنسلين", "The antibiotic made by Penicillium notatum, discovered by Fleming in 1928.", "مضاد حيوي يفرزه فطر البنسيليوم نوتاتم، اكتشفه فلمنج عام ١٩٢٨."],
          ["Yeast", "الخميرة", "A fungus used to make bread; a source of vitamin B complex.", "فطر يُستخدم في صناعة الخبز، ومصدر لفيتامين ب المركب."],
          ["Dysentery", "الدوسنتاريا", "A disease caused by the protozoan Entamoeba histolytica in the large intestine.", "مرض يسببه الحيوان الأولي الإنتاميبا هيستوليتيكا في الأمعاء الغليظة."],
          ["Typhoid", "التيفود", "A bacterial disease caused by Salmonella typhi, with high fever up to 40 °C.", "مرض بكتيري تسببه بكتيريا السالمونيلا التيفية، مع ارتفاع الحرارة حتى ٤٠ °س."]
        ],
        lab: { parts: [{ type: "prep1_yogurt" }, {
          type: "sort",
          prompt: ["Tap a microbe: beneficial or harmful?", "اضغط على الميكروب: نافع أم ضار؟"],
          bins: [["good", "✅", "Beneficial", "نافع"], ["bad", "⚠️", "Harmful", "ضار"]],
          items: [[["Root nodule bacteria", "بكتيريا العقد الجذرية"], "good"], [["Decomposition bacteria", "بكتيريا التحلل"], "good"], [["Lactic acid bacteria", "بكتيريا حمض اللاكتيك"], "good"], [["Penicillium notatum", "البنسيليوم نوتاتم"], "good"], [["Yeast fungus", "فطر الخميرة"], "good"], [["Entamoeba histolytica", "الإنتاميبا هيستوليتيكا"], "bad"], [["Salmonella typhi", "السالمونيلا التيفية"], "bad"]]
        }] },
        quiz: [
          Q(["Which microbe changes lactose into lactic acid?", "أي الميكروبات يحول اللاكتوز إلى حمض اللاكتيك؟"], [["Lactic acid bacteria", "بكتيريا حمض اللاكتيك"], ["Yeast", "الخميرة"], ["Salmonella typhi", "السالمونيلا التيفية"], ["Root nodule bacteria", "بكتيريا العقد الجذرية"]],
            ["Lactic acid bacteria turn milk sugar into lactic acid, which gives yogurt its taste and thickness.", "بكتيريا حمض اللاكتيك تحول سكر اللبن إلى حمض اللاكتيك الذي يعطي الزبادي طعمه وقوامه."], ["Salma's tiny workers turned sweet milk into thick, tangy yogurt.", "عمال سلمى الصغار حولوا اللبن الحلو إلى زبادي متماسك لاذع."]),
          Q(["Why is the milk boiled before making yogurt?", "لماذا يُغلى اللبن قبل صنع الزبادي؟"], [["To kill any bacteria that may be in it", "لقتل أي بكتيريا قد توجد فيه"], ["To add lactic acid", "لإضافة حمض اللاكتيك"], ["To make it sour", "لجعله حامضًا"], ["To freeze it", "لتجميده"]],
            ["Boiling kills unwanted bacteria; after cooling to about 42 °C the starter yogurt is added.", "الغليان يقتل البكتيريا غير المرغوب فيها، وبعد التبريد إلى نحو ٤٢ °س يُضاف بادئ الزبادي."], ["First clear the kitchen of strangers, then invite the yogurt workers in.", "أخلِ المطبخ من الغرباء أولًا ثم ادعُ عمال الزبادي."]),
          Q(["What happens if yogurt is left out of the fridge for a long time?", "ماذا يحدث إذا تُرك الزبادي خارج الثلاجة مدة طويلة؟"], [["It becomes more acidic and its taste spoils", "تزداد حموضته ويفسد طعمه"], ["It turns back into milk", "يعود لبنًا"], ["Its bacteria all die at once", "تموت كل بكتيرياه فورًا"], ["It becomes sweeter", "يصبح أحلى"]],
            ["The bacteria keep working when warm and make more lactic acid, so the yogurt gets too sour.", "تستمر البكتيريا في العمل في الدفء وتنتج حمض لاكتيك أكثر، فتزداد الحموضة."], ["Salma's forgotten pot kept 'working overtime' and became far too sour.", "إناء سلمى المنسي ظل يعمل وقتًا إضافيًا فأصبح حامضًا جدًا."]),
          Q(["Penicillin is extracted from…", "يُستخلص البنسلين من…"], [["Penicillium notatum fungus", "فطر البنسيليوم نوتاتم"], ["Penicillium roqueforti fungus", "فطر البنسيليوم روكفورتي"], ["Yeast", "الخميرة"], ["Lactic acid bacteria", "بكتيريا حمض اللاكتيك"]],
            ["Fleming (1928) found that Penicillium notatum secretes a substance that stops the growth of some bacteria: penicillin.", "اكتشف فلمنج (١٩٢٨) أن فطر البنسيليوم نوتاتم يفرز مادة توقف نمو بعض البكتيريا: البنسلين."], ["A green fungus in Fleming's dish cleared away the bacteria around it.", "فطر أخضر في طبق فلمنج أزال البكتيريا من حوله."]),
          Q(["Dysentery is caused by…", "تسبب مرض الدوسنتاريا…"], [["Entamoeba histolytica, a protozoan", "الإنتاميبا هيستوليتيكا، وهي حيوان أولي"], ["Salmonella typhi bacteria", "بكتيريا السالمونيلا التيفية"], ["Yeast", "الخميرة"], ["A virus", "فيروس"]],
            ["Entamoeba histolytica lives in the large intestine and spreads through contaminated food. It is treated with antiprotozoal drugs.", "تعيش الإنتاميبا هيستوليتيكا في الأمعاء الغليظة وتنتقل بالطعام الملوث، وتُعالج بالأدوية المضادة للأوليات."], ["A one-celled troublemaker hides in unwashed food and settles in the large intestine.", "مشاغب وحيد الخلية يختبئ في الطعام غير المغسول ويستقر في الأمعاء الغليظة."]),
          Q(["Typhoid is treated with…", "يُعالج مرض التيفود بـ…"], [["Antibiotics", "المضادات الحيوية"], ["Antiprotozoal drugs", "الأدوية المضادة للأوليات"], ["Yogurt only", "الزبادي فقط"], ["Yeast", "الخميرة"]],
            ["Typhoid is a bacterial disease (Salmonella typhi), so antibiotics are used.", "التيفود مرض بكتيري (السالمونيلا التيفية)، لذلك تُستخدم المضادات الحيوية."], ["Bacterial invaders are beaten by bacteria-fighting medicine.", "الغزاة البكتيريون يهزمهم دواء مقاوم للبكتيريا."]),
          Q(["How do root nodule bacteria help plants?", "كيف تفيد بكتيريا العقد الجذرية النباتات؟"], [["They give legumes nitrogen in a usable form", "تمد النباتات البقولية بالنيتروجين في صورة صالحة"], ["They make the plant sweeter", "تجعل النبات أحلى"], ["They kill the plant roots", "تقتل جذور النبات"], ["They give the plant oxygen", "تمد النبات بالأكسجين"]],
            ["Plants cannot use nitrogen gas directly. Root nodule bacteria on clover, beans and peas supply it for making proteins.", "لا يستطيع النبات استخدام غاز النيتروجين مباشرة، وبكتيريا العقد الجذرية على البرسيم والفول والبسلة تمده به لصنع البروتينات."], ["The bacteria are tiny farmers living in little houses on the bean roots.", "البكتيريا مزارعون صغار يعيشون في بيوت صغيرة على جذور الفول."])
        ]
      }
    ]
  });

  /* ======================= UNIT 4 - EARTH, SUN, MOON ======================= */
  U.push({
    id: "prep1u4", num: 4, icon: "🌍", color: "purple",
    title: { en: "The (Earth - Sun - Moon) System", ar: "منظومة (الأرض - الشمس - القمر)" },
    lessons: [
      {
        id: "prep1u4l1", icon: "🪐", page: 80,
        title: { en: "The Earth and the Solar System", ar: "الأرض والمجموعة الشمسية" },
        idea: {
          official: {
            en: ["The solar system is a star, the Sun, and 8 planets orbiting it in elliptical paths at different distances, so they do not collide.",
              "Mercury, Venus, Earth and Mars are rocky planets with crusts; Venus and Earth have many active volcanoes. Jupiter, Saturn, Uranus and Neptune have no crust. Jupiter (142,948 km) is the largest and Mercury (4,878 km) the smallest.",
              "Earth spins once every 24 hours on its axis, an imaginary line through the North and South poles. This gives day and night and the apparent motion of the Sun from east to west.",
              "The shadow of an object is shortest at noon, when the Sun's apparent height is greatest, and longer near sunrise and sunset.",
              "Earth's axis is tilted 23.5°. The tilt and Earth's orbit around the Sun every 365¼ days make sunlight fall at different angles, giving the four seasons.",
              "In summer the northern end of the axis leans towards the Sun and days are longer than nights; in winter it leans away and nights are longer; in spring and autumn day and night are about equal."],
            ar: ["تتكون المجموعة الشمسية من نجم هو الشمس، و٨ كواكب تدور حولها في مدارات بيضاوية على أبعاد مختلفة فلا تتصادم.",
              "عطارد والزهرة والأرض والمريخ كواكب صخرية لها قشرة، وفي الزهرة والأرض براكين نشطة كثيرة، أما المشتري وزحل وأورانوس ونبتون فليس لها قشرة. والمشتري (١٤٢٩٤٨ كم) أكبرها، وعطارد (٤٨٧٨ كم) أصغرها.",
              "تدور الأرض حول محورها مرة كل ٢٤ ساعة، والمحور خط وهمي يمر بالقطبين الشمالي والجنوبي، فيتعاقب الليل والنهار وتحدث الحركة الظاهرية للشمس من الشرق إلى الغرب.",
              "يكون ظل الجسم أقصر ما يمكن عند الظهيرة حين يكون الارتفاع الظاهري للشمس أكبر ما يمكن، ويطول قرب الشروق والغروب.",
              "يميل محور الأرض بزاوية ٢٣٫٥°، والميل مع دوران الأرض حول الشمس كل ٣٦٥¼ يومًا يجعل أشعة الشمس تسقط بزوايا مختلفة فتتعاقب الفصول الأربعة.",
              "في الصيف يميل الطرف الشمالي للمحور نحو الشمس ويطول النهار عن الليل، وفي الشتاء يميل بعيدًا عنها ويطول الليل، وفي الربيع والخريف يتساوى الليل والنهار تقريبًا."]
          },
          story: {
            en: ["Laila plants a stick in the sand on the beach at Marsa Matrouh at 8 in the morning. Its shadow stretches far to the west.",
              "By noon the Sun is high overhead and the shadow is tiny. By 5 pm it is long again, this time pointing east.",
              "The Sun is not really moving across the sky. Earth is spinning from west to east, so the Sun only appears to move.",
              "In December Laila repeats the test in Cairo. Even at noon the shadow is longer, because the northern half of Earth leans away from the Sun in winter.",
              "Her grandfather says ancient Egyptians read the time from shadows with a sundial."],
            ar: ["تغرس ليلى عصا في رمال شاطئ مرسى مطروح في الثامنة صباحًا، فيمتد ظلها بعيدًا نحو الغرب.",
              "عند الظهيرة تكون الشمس عالية ويصبح الظل قصيرًا جدًا، وفي الخامسة مساءً يطول مرة أخرى متجهًا نحو الشرق هذه المرة.",
              "الشمس لا تتحرك حقًا في السماء؛ الأرض هي التي تدور من الغرب إلى الشرق، فتبدو الشمس كأنها تتحرك.",
              "في ديسمبر تكرر ليلى التجربة في القاهرة، فيكون الظل أطول حتى عند الظهيرة، لأن النصف الشمالي من الأرض يميل بعيدًا عن الشمس في الشتاء.",
              "يقول جدها إن المصريين القدماء عرفوا الوقت من الظلال باستخدام المزولة الشمسية."]
          }
        },
        words: [
          ["Solar system", "المجموعة الشمسية", "The Sun and the 8 planets that orbit it in elliptical paths.", "الشمس والكواكب الثمانية التي تدور حولها في مدارات بيضاوية."],
          ["Earth's axis", "محور الأرض", "An imaginary line through the North and South poles, tilted 23.5°.", "خط وهمي يمر بالقطبين الشمالي والجنوبي، ويميل بزاوية ٢٣٫٥°."],
          ["Apparent motion of the Sun", "الحركة الظاهرية للشمس", "The Sun seems to move east to west because Earth spins west to east.", "تبدو الشمس كأنها تتحرك من الشرق إلى الغرب لأن الأرض تدور من الغرب إلى الشرق."],
          ["Shadow", "الظل", "The dark area behind an object that blocks light. It is shortest at noon.", "منطقة مظلمة خلف جسم يحجب الضوء، ويكون أقصر ما يمكن عند الظهيرة."],
          ["Succession of the seasons", "تعاقب الفصول", "Summer, autumn, winter and spring caused by the axis tilt and Earth's orbit.", "الصيف والخريف والشتاء والربيع بسبب ميل المحور ودوران الأرض حول الشمس."],
          ["Sundial", "المزولة الشمسية", "An ancient solar clock that tells the time by the length and direction of a shadow.", "ساعة شمسية قديمة تحدد الوقت من طول الظل واتجاهه."]
        ],
        lab: { parts: [{ type: "prep1_solar" }, {
          type: "sort",
          prompt: ["Tap a planet: rocky with a crust, or a gas planet with no crust?", "اضغط على الكوكب: صخري له قشرة أم غازي بلا قشرة؟"],
          bins: [["rock", "🪨", "Rocky planet", "كوكب صخري"], ["gas", "🌫️", "Gas planet", "كوكب غازي"]],
          items: [[["Mercury", "عطارد"], "rock"], [["Venus", "الزهرة"], "rock"], [["Earth", "الأرض"], "rock"], [["Mars", "المريخ"], "rock"], [["Jupiter", "المشتري"], "gas"], [["Saturn", "زحل"], "gas"], [["Uranus", "أورانوس"], "gas"], [["Neptune", "نبتون"], "gas"]]
        }] },
        quiz: [
          Q(["Which is the largest planet in the solar system?", "ما أكبر كواكب المجموعة الشمسية؟"], [["Jupiter", "المشتري"], ["Saturn", "زحل"], ["Earth", "الأرض"], ["Neptune", "نبتون"]],
            ["Jupiter's diameter is 142,948 km, the largest in the book's table. Mercury is the smallest at 4,878 km.", "قطر المشتري ١٤٢٩٤٨ كم وهو الأكبر في جدول الكتاب، وعطارد أصغرها بقطر ٤٨٧٨ كم."], ["Jupiter is the giant of the Sun's family, more than 11 Earths across.", "المشتري عملاق عائلة الشمس، قطره أكبر من ١١ مرة قطر الأرض."]),
          Q(["Which planets have many active volcanoes?", "أي الكواكب بها براكين نشطة كثيرة؟"], [["Venus and Earth", "الزهرة والأرض"], ["Jupiter and Saturn", "المشتري وزحل"], ["Mercury and Mars", "عطارد والمريخ"], ["Uranus and Neptune", "أورانوس ونبتون"]],
            ["In the book's table, Venus and Earth have many active volcanoes. Mars has signs of old volcanoes but no current activity.", "في جدول الكتاب الزهرة والأرض بهما براكين نشطة كثيرة، أما المريخ فبه آثار براكين دون نشاط حالي."], ["Earth's next-door neighbour Venus is just as fiery underground.", "جارة الأرض الزهرة نارية تحت سطحها مثلها."]),
          Q(["When is a stick's shadow the shortest?", "متى يكون ظل العصا أقصر ما يمكن؟"], [["At noon", "عند الظهيرة"], ["At sunrise", "عند الشروق"], ["At sunset", "عند الغروب"], ["At midnight", "عند منتصف الليل"]],
            ["At noon the Sun's apparent height is the greatest, so the shadow is the shortest.", "عند الظهيرة يكون الارتفاع الظاهري للشمس أكبر ما يمكن فيكون الظل أقصر ما يمكن."], ["Laila's noon shadow almost hid under her stick.", "ظل ليلى عند الظهيرة كاد يختبئ تحت العصا."]),
          Q(["Why does the Sun seem to move from east to west?", "لماذا تبدو الشمس كأنها تتحرك من الشرق إلى الغرب؟"], [["Earth rotates on its axis from west to east", "لأن الأرض تدور حول محورها من الغرب إلى الشرق"], ["The Sun orbits the Earth", "لأن الشمس تدور حول الأرض"], ["The Moon pushes the Sun", "لأن القمر يدفع الشمس"], ["Clouds carry the Sun", "لأن السحب تحمل الشمس"]],
            ["This is the apparent motion of the Sun, caused by Earth's rotation every 24 hours.", "هذه هي الحركة الظاهرية للشمس، وسببها دوران الأرض حول محورها كل ٢٤ ساعة."], ["Like trees that seem to run backwards when you ride a train.", "مثل الأشجار التي تبدو كأنها تجري للخلف وأنت في القطار."]),
          Q(["What is the tilt of Earth's axis?", "ما زاوية ميل محور الأرض؟"], [["23.5°", "٢٣٫٥°"], ["90°", "٩٠°"], ["5°", "٥°"], ["45°", "٤٥°"]],
            ["Earth's axis tilts 23.5° from the perpendicular to its orbit. The tilt causes the seasons.", "يميل محور الأرض بزاوية ٢٣٫٥° عن العمودي على مستوى مداره، وهذا الميل يسبب الفصول."], ["Earth spins like a slightly leaning top, never standing straight up.", "تدور الأرض كنحلة مائلة قليلًا لا تقف مستقيمة أبدًا."]),
          Q(["On 21 June, the northern end of Earth's axis…", "في ٢١ يونيو يميل الطرف الشمالي لمحور الأرض…"], [["Leans towards the Sun: summer in the north", "نحو الشمس: الصيف في النصف الشمالي"], ["Leans away from the Sun: winter", "بعيدًا عن الشمس: الشتاء"], ["Does not lean at all", "لا يميل مطلقًا"], ["Points at the Moon", "نحو القمر"]],
            ["In summer the north leans towards the Sun, so sunlight is more direct and days are longer than nights.", "في الصيف يميل الشمال نحو الشمس، فتسقط الأشعة أكثر تعامدًا ويطول النهار عن الليل."], ["In June Egypt's half of Earth turns its face to the Sun to sunbathe.", "في يونيو يدير نصف الأرض الذي فيه مصر وجهه للشمس ليستمتع بها."]),
          Q(["In winter in Egypt, day and night are…", "في الشتاء في مصر يكون الليل والنهار…"], [["Nights longer than days", "الليل أطول من النهار"], ["Days longer than nights", "النهار أطول من الليل"], ["Exactly equal", "متساويين تمامًا"], ["24 hours of daylight", "نهارًا ٢٤ ساعة"]],
            ["In winter the north leans away from the Sun, so there are fewer daylight hours. In spring and autumn they are about equal.", "في الشتاء يميل الشمال بعيدًا عن الشمس فتقل ساعات النهار، وفي الربيع والخريف يتساويان تقريبًا."], ["In December Laila gets home from school and it is already getting dark.", "في ديسمبر تعود ليلى من المدرسة وقد بدأ الظلام يحل."])
        ]
      },
      {
        id: "prep1u4l2", icon: "🌕", page: 88,
        title: { en: "Lunar Eclipse", ar: "خسوف القمر" },
        idea: {
          official: {
            en: ["The Moon is a dark body that orbits the Earth and shines by reflecting sunlight. It takes about 29.5 days to orbit the Earth, the same time it takes to spin once, so we always see the same face.",
              "The Moon's shape does not really change. The phases of the Moon show how much of its lit half we can see: new moon, crescent, first quarter, gibbous, full moon and back.",
              "Full moon happens in the middle of the lunar month, when the Earth is between the Sun and the Moon.",
              "An opaque object in the path of light makes a dark shadow surrounded by a partly lit penumbra. Transparent objects let light pass and cast no shadow.",
              "A lunar eclipse happens at full moon when the Earth blocks sunlight from the Moon. Total eclipse: the whole Moon is in Earth's shadow and looks dark. Partial eclipse: only part is in the shadow.",
              "If the Moon is only in the penumbra it looks dim and reddish, but this is not counted as an eclipse. Because the Moon's orbit is tilted about 5°, not every full moon gives an eclipse."],
            ar: ["القمر جسم معتم يدور حول الأرض ويبدو مضيئًا لأنه يعكس ضوء الشمس، ويستغرق نحو ٢٩٫٥ يومًا ليدور حول الأرض، وهو الزمن نفسه لدورانه حول محوره، لذلك نرى وجهًا واحدًا له دائمًا.",
              "شكل القمر لا يتغير في الحقيقة، وأطوار القمر توضح الجزء الذي نراه من نصفه المضيء: المحاق والهلال والتربيع الأول والأحدب والبدر ثم العودة.",
              "يحدث البدر في منتصف الشهر القمري عندما تكون الأرض بين الشمس والقمر.",
              "وجود جسم معتم في مسار الضوء يكوّن منطقة مظلمة هي الظل يحيط بها منطقة شبه مضيئة هي شبه الظل، والأجسام الشفافة تسمح بمرور الضوء فلا تكوّن ظلًا.",
              "يحدث خسوف القمر في طور البدر عندما تحجب الأرض ضوء الشمس عن القمر؛ ففي الخسوف الكلي يكون القمر كله في ظل الأرض فيبدو معتمًا، وفي الخسوف الجزئي يكون جزء منه فقط في الظل.",
              "إذا كان القمر في شبه الظل فقط يبدو قرصًا أحمر خافتًا ولا يُعد ذلك خسوفًا، ولأن مدار القمر يميل بنحو ٥° لا يحدث خسوف في كل بدر."]
          },
          story: {
            en: ["Mariam watches the Moon from her balcony in Luxor every night of the Arabic month. It grows from a thin crescent to a bright full disc.",
              "On the 15th night the full Moon rises just as the Sun sets: the Earth is between them.",
              "One full-moon night the Moon slowly turns dark and coppery. Her father explains that the Earth's shadow is falling on it: a lunar eclipse.",
              "Mariam tries it with a lamp, a ball and a white sheet. The ball's dark shadow has a fuzzy grey ring around it: the penumbra.",
              "Next month the Moon is full again but there is no eclipse. Its tilted orbit took it just above the Earth's shadow."],
            ar: ["تراقب مريم القمر من شرفتها في الأقصر كل ليلة من الشهر العربي، فتراه يكبر من هلال رفيع إلى بدر مكتمل لامع.",
              "في الليلة الخامسة عشرة يشرق البدر مع غروب الشمس تقريبًا: الأرض بينهما.",
              "في إحدى ليالي البدر يعتم القمر ببطء ويصبح نحاسي اللون، فيشرح لها والدها أن ظل الأرض يسقط عليه: إنه خسوف القمر.",
              "تجرب مريم ذلك بمصباح وكرة وملاءة بيضاء، فترى ظل الكرة المظلم تحيط به حلقة رمادية باهتة: شبه الظل.",
              "في الشهر التالي يكتمل البدر مرة أخرى دون خسوف؛ فمداره المائل جعله يمر فوق ظل الأرض مباشرة."]
          }
        },
        words: [
          ["Moon phases", "أطوار القمر", "The changing shapes of the lit part of the Moon we see during the lunar month.", "الأشكال المتغيرة للجزء المضيء الذي نراه من القمر خلال الشهر القمري."],
          ["Full moon", "البدر", "The Moon appears as a complete disc when the Earth is between the Sun and the Moon.", "يبدو القمر قرصًا كاملًا عندما تكون الأرض بين الشمس والقمر."],
          ["Shadow", "الظل", "The dark area formed when an opaque object blocks light.", "منطقة مظلمة تتكون عندما يحجب جسم معتم الضوء."],
          ["Penumbra", "شبه الظل", "The partly lit area around a shadow.", "منطقة شبه مضيئة تحيط بالظل."],
          ["Lunar eclipse", "خسوف القمر", "The full Moon darkens when the Earth blocks sunlight from reaching it.", "إظلام البدر عندما تحجب الأرض ضوء الشمس عنه."],
          ["Total eclipse", "الخسوف الكلي", "The whole Moon is inside the Earth's shadow and looks like a dark disc.", "القمر كله داخل ظل الأرض فيبدو قرصًا معتمًا."],
          ["Partial eclipse", "الخسوف الجزئي", "Only part of the Moon is inside the Earth's shadow.", "جزء فقط من القمر داخل ظل الأرض."]
        ],
        lab: { parts: [{ type: "prep1_eclipse" }, {
          type: "sort",
          prompt: ["Tap an object: does it cast a shadow?", "اضغط على الجسم: هل يكوّن ظلًا؟"],
          bins: [["opq", "🌑", "Opaque: casts a shadow", "معتم: يكوّن ظلًا"], ["trn", "🔆", "Transparent: no shadow", "شفاف: لا يكوّن ظلًا"]],
          items: [[["Wooden block", "قطعة خشب"], "opq"], [["Ball", "كرة"], "opq"], [["The Earth", "الأرض"], "opq"], [["The Moon", "القمر"], "opq"], [["Clear window glass", "زجاج نافذة شفاف"], "trn"], [["Clean air", "الهواء النقي"], "trn"], [["Clear water", "الماء الصافي"], "trn"]]
        }] },
        quiz: [
          Q(["Why does the Moon appear bright?", "لماذا يبدو القمر مضيئًا؟"], [["It reflects sunlight", "لأنه يعكس ضوء الشمس"], ["It makes its own light", "لأنه يصدر ضوءه بنفسه"], ["It is a star", "لأنه نجم"], ["It has volcanoes", "لأن به براكين"]],
            ["The Moon is a dark body; it shines by reflecting the Sun's light.", "القمر جسم معتم يبدو مضيئًا لأنه يعكس ضوء الشمس."], ["The Moon is like a mirror in the night sky, borrowing the Sun's light.", "القمر كمرآة في سماء الليل يستعير ضوء الشمس."]),
          Q(["Where is the Earth during the full moon phase?", "أين تكون الأرض في طور البدر؟"], [["Between the Sun and the Moon", "بين الشمس والقمر"], ["Behind the Sun", "خلف الشمس"], ["The Moon is between the Sun and Earth", "القمر بين الشمس والأرض"], ["Far from the Moon's orbit", "بعيدة عن مدار القمر"]],
            ["At full moon, in the middle of the lunar month, the Earth is between the Sun and the Moon, so we see the whole lit face.", "في البدر، منتصف الشهر القمري، تكون الأرض بين الشمس والقمر فنرى الوجه المضيء كاملًا."], ["Mariam saw the full Moon rise as the Sun set: Earth sat between them.", "رأت مريم البدر يشرق مع غروب الشمس: الأرض في المنتصف."]),
          Q(["How long does the Moon take to orbit the Earth?", "كم يستغرق القمر ليدور حول الأرض؟"], [["About 29.5 days", "نحو ٢٩٫٥ يومًا"], ["24 hours", "٢٤ ساعة"], ["365 days", "٣٦٥ يومًا"], ["7 days", "٧ أيام"]],
            ["About 29.5 days, the same as its spin on its axis, so we always see the same side.", "نحو ٢٩٫٥ يومًا، وهو الزمن نفسه لدورانه حول محوره، لذلك نرى وجهًا واحدًا له دائمًا."], ["One trip round the Earth takes about one Arabic month.", "رحلة واحدة حول الأرض تستغرق نحو شهر عربي."]),
          Q(["During a total lunar eclipse, the Moon is…", "في الخسوف الكلي يكون القمر…"], [["Completely inside the Earth's shadow", "داخل ظل الأرض تمامًا"], ["Completely inside the penumbra only", "داخل شبه الظل فقط"], ["Between the Sun and the Earth", "بين الشمس والأرض"], ["Hidden behind the Sun", "مختبئًا خلف الشمس"]],
            ["No sunlight reaches it directly, so the full Moon looks like a dark disc.", "لا يصله ضوء الشمس مباشرة، فيبدو البدر قرصًا معتمًا."], ["The whole Moon slips into Earth's dark shadow, like walking into a dark tunnel.", "يدخل القمر كله في ظل الأرض المظلم كمن يدخل نفقًا مظلمًا."]),
          Q(["What is the penumbra?", "ما شبه الظل؟"], [["A partly lit area around the shadow", "منطقة شبه مضيئة تحيط بالظل"], ["The darkest part of a shadow", "أشد أجزاء الظل إظلامًا"], ["Light passing through glass", "الضوء المار خلال الزجاج"], ["A phase of the Moon", "أحد أطوار القمر"]],
            ["An opaque object makes a dark shadow surrounded by a partly lit penumbra.", "الجسم المعتم يكوّن ظلًا مظلمًا تحيط به منطقة شبه مضيئة هي شبه الظل."], ["Mariam's ball cast a dark spot with a fuzzy grey ring: that ring is the penumbra.", "كوّنت كرة مريم بقعة مظلمة حولها حلقة رمادية باهتة: هذه الحلقة هي شبه الظل."]),
          Q(["Why doesn't a lunar eclipse happen at every full moon?", "لماذا لا يحدث خسوف للقمر في كل بدر؟"], [["The Moon's orbit is tilted about 5°, so it often passes above or below the Earth's shadow", "لأن مدار القمر يميل بنحو ٥° فيمر غالبًا أعلى ظل الأرض أو أسفله"], ["The Sun is too weak", "لأن الشمس ضعيفة"], ["The Earth has no shadow", "لأن الأرض ليس لها ظل"], ["The Moon stops moving", "لأن القمر يتوقف عن الحركة"]],
            ["Because of the 5° tilt, the Moon is not always on the Sun-Earth line at full moon.", "بسبب ميل ٥° لا يقع القمر دائمًا على الخط الواصل بين الشمس والأرض في طور البدر."], ["Most months the Moon hops just over or under Earth's shadow, like a ball over a rope.", "في معظم الشهور يقفز القمر فوق ظل الأرض أو تحته كالكرة فوق الحبل."]),
          Q(["In which phase can a lunar eclipse happen?", "في أي طور يمكن أن يحدث خسوف القمر؟"], [["Full moon", "البدر"], ["New moon", "المحاق"], ["First quarter", "التربيع الأول"], ["Waxing crescent", "الهلال المتزايد"]],
            ["Only at full moon is the Earth between the Sun and the Moon, so only then can Earth's shadow fall on the Moon.", "في البدر فقط تكون الأرض بين الشمس والقمر، فلا يسقط ظل الأرض على القمر إلا عندئذ."], ["Earth's shadow points away from the Sun, exactly where the full Moon sits.", "ظل الأرض يتجه بعيدًا عن الشمس حيث يقع البدر تمامًا."])
        ]
      }
    ]
  });
})();
/* ---------- Prep 1 simulations (part A): atom, periodic table, matter, bonds, charges, magnets ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }

  /* first 20 elements (symbol, English, Arabic) - shared by the atom builder */
  var EL20 = [["H", "Hydrogen", "الهيدروجين"], ["He", "Helium", "الهيليوم"], ["Li", "Lithium", "الليثيوم"], ["Be", "Beryllium", "البريليوم"], ["B", "Boron", "البورون"],
    ["C", "Carbon", "الكربون"], ["N", "Nitrogen", "النيتروجين"], ["O", "Oxygen", "الأكسجين"], ["F", "Fluorine", "الفلور"], ["Ne", "Neon", "النيون"],
    ["Na", "Sodium", "الصوديوم"], ["Mg", "Magnesium", "الماغنسيوم"], ["Al", "Aluminium", "الألومنيوم"], ["Si", "Silicon", "السيليكون"], ["P", "Phosphorus", "الفوسفور"],
    ["S", "Sulphur", "الكبريت"], ["Cl", "Chlorine", "الكلور"], ["Ar", "Argon", "الأرجون"], ["K", "Potassium", "البوتاسيوم"], ["Ca", "Calcium", "الكالسيوم"]];
  function fill(e) { var cap = [2, 8, 8, 2], out = []; for (var i = 0; i < 4 && e > 0; i++) { var k = Math.min(cap[i], e); out.push(k); e -= k; } return out; }

  /* =========================================================
     prep1_atom - build an atom: protons, neutrons, electrons
     ========================================================= */
  L.prep1_atom = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag protons, neutrons and electrons from the bins into the atom, or just tap a bin. Drag a particle out of the atom to remove it.", "اسحب البروتونات والنيوترونات والإلكترونات من الصناديق إلى الذرة، أو اضغط على الصندوق فقط. واسحب أي جسيم خارج الذرة لتحذفه."));
    var S = K.make(host, 0.6, 390), P = 0, N = 0, Q = 0, drag = null, ang = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm ghost" id="aRs">↺ ' + t("Empty the atom", "أفرغ الذرة") + '</button></div><div class="meter at-out"></div>';
    var out = ctl.querySelector(".at-out");
    var tick = L._goals(host, [t("Build a neutral atom: the number of protons equals the number of electrons.", "كوّن ذرة متعادلة: عدد البروتونات يساوي عدد الإلكترونات."),
      t("Build helium-4: 2 protons, 2 neutrons and 2 electrons.", "كوّن ذرة هيليوم ٤: بروتونان ونيوترونان وإلكترونان."),
      t("Fill the second energy level (L) completely.", "املأ مستوى الطاقة الثاني (L) بالكامل."),
      t("Make deuterium: the hydrogen isotope that has one neutron.", "كوّن الديوتيريوم: نظير الهيدروجين الذي في نواته نيوترون واحد.")], done);
    var COL = { p: "#ef4444", n: "#94a3b8", e: "#3b82f6" };
    function g() { var W = S.W, H = S.H, R = Math.min(W * 0.3, H * 0.45); return { cx: W * 0.6, cy: H * 0.5, R: R, nr: R * 0.2, bx: Math.max(40, W * 0.1), by: [H * 0.2, H * 0.5, H * 0.8] }; }
    function shellR(i) { var o = g(); return o.nr + 12 + (o.R - o.nr - 12) * (i + 1) / 4; }
    function upd() {
      var el = P ? EL20[P - 1] : null, ch = P - Q, A = P + N, sh = fill(Q);
      var nm = el ? (E.isAr() ? el[2] : el[1]) + " " + eq(el[0]) : t("no element yet (no protons)", "لا يوجد عنصر بعد (لا بروتونات)");
      var iso = P === 1 ? [t("protium", "البروتيوم"), t("deuterium", "الديوتيريوم"), t("tritium", "التريتيوم")][N] || "" : "";
      out.innerHTML = "<span>" + t("Element: ", "العنصر: ") + "<b>" + nm + "</b>" + (iso ? " · " + iso : "") + "</span>" +
        "<span>" + eq("Z = " + P) + " " + t("(atomic number)", "(العدد الذري)") + "</span><span>" + eq("A = " + A) + " " + t("(mass number)", "(العدد الكتلي)") + "</span>" +
        "<span>" + t("Charge: ", "الشحنة: ") + "<b>" + (ch === 0 ? t("0, neutral atom", "صفر، ذرة متعادلة") : eq((ch > 0 ? "+" : "−") + Math.abs(ch)) + " " + t("(an ion, not neutral)", "(أيون وليست متعادلة)")) + "</b></span>" +
        "<span>" + t("Electrons in levels: ", "توزيع الإلكترونات: ") + eq(sh.length ? sh.join(", ") : "0") + "</span>" + (A ? "<span>" + t("Neutrons = A − Z = ", "النيوترونات = A − Z = ") + eq(String(N)) + "</span>" : "");
      if (P > 0 && Q === P) tick(0);
      if (P === 2 && N === 2 && Q === 2) tick(1);
      if (Q >= 10) tick(2);
      if (P === 1 && N === 1) tick(3);
    }
    ctl.querySelector("#aRs").onclick = function () { P = N = Q = 0; upd(); };
    function add(k) {
      if (k === "p") { if (P < 20) P++; else E.toast(t("This lab stops at 20 protons (calcium).", "يتوقف هذا المعمل عند ٢٠ بروتونًا (الكالسيوم).")); }
      if (k === "n") N = Math.min(22, N + 1);
      if (k === "e") { if (Q < 20) Q++; }
      upd();
    }
    S.drag({
      down: function (p) {
        var o = g(), ks = ["p", "n", "e"];
        for (var i = 0; i < 3; i++) if (dist(p.x, p.y, o.bx, o.by[i]) < 30) { drag = { k: ks[i], x: p.x, y: p.y, sx: p.x, sy: p.y, bin: true }; return true; }
        var d = dist(p.x, p.y, o.cx, o.cy);
        if (d < o.nr + 6 && P + N > 0) { var k = N > P ? "n" : P ? "p" : "n"; if (k === "p") P--; else N--; drag = { k: k, x: p.x, y: p.y, sx: p.x, sy: p.y }; upd(); return true; }
        if (Q > 0) for (var j = 0; j < 4; j++) if (Math.abs(d - shellR(j)) < 14) { Q--; drag = { k: "e", x: p.x, y: p.y, sx: p.x, sy: p.y }; upd(); return true; }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return;
        var o = g(), inside = dist(drag.x, drag.y, o.cx, o.cy) < o.R + 12, tap = drag.bin && dist(drag.x, drag.y, drag.sx, drag.sy) < 6;
        if (inside || tap) add(drag.k);
        drag = null;
      },
      hover: function (p) { var o = g(); return o.by.some(function (y) { return dist(p.x, p.y, o.bx, y) < 30; }) || dist(p.x, p.y, o.cx, o.cy) < o.R; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, o = g(), C = S.C, W = S.W, H = S.H, sh = fill(Q), i, j;
      c.clearRect(0, 0, W, H); ang += dt;
      [["p", t("Proton +", "بروتون +")], ["n", t("Neutron 0", "نيوترون ٠")], ["e", t("Electron −", "إلكترون −")]].forEach(function (b, k) {
        K.rr(c, o.bx - 30, o.by[k] - 26, 60, 52, 12); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.line; c.lineWidth = 1; c.stroke();
        for (var q = 0; q < 3; q++) K.dot(c, o.bx - 10 + q * 10, o.by[k] - 4 + (q % 2) * 6, b[0] === "e" ? 4 : 7, COL[b[0]], "rgba(0,0,0,.25)");
        K.txt(c, b[1], o.bx, o.by[k] + 36, { s: 11, c: C.ink });
      });
      for (i = 0; i < 4; i++) {
        c.strokeStyle = C.line; c.lineWidth = 1.5; c.setLineDash([4, 5]); c.beginPath(); c.arc(o.cx, o.cy, shellR(i), 0, Math.PI * 2); c.stroke(); c.setLineDash([]);
        K.txt(c, "KLMN"[i], o.cx + shellR(i) * 0.71 + 6, o.cy - shellR(i) * 0.71 - 6, { s: 11, c: C.muted });
      }
      var tot = P + N, pc = 0, nc = 0;
      for (i = 0; i < tot; i++) {
        var rr = tot === 1 ? 0 : 5.2 * Math.sqrt(i + 0.5), a = i * 2.4, isP = pc < P && (nc >= N || i % 2 === 0);
        if (isP) pc++; else nc++;
        K.dot(c, o.cx + rr * Math.cos(a), o.cy + rr * Math.sin(a), 6, isP ? COL.p : COL.n, "rgba(0,0,0,.3)");
      }
      for (i = 0; i < sh.length; i++) for (j = 0; j < sh[i]; j++) {
        var aa = ang * (1.4 - i * 0.25) + j * Math.PI * 2 / sh[i];
        K.dot(c, o.cx + shellR(i) * Math.cos(aa), o.cy + shellR(i) * Math.sin(aa), 5, COL.e, "rgba(0,0,0,.25)");
      }
      if (P) { var el = EL20[P - 1]; K.txt(c, el[0], W - 26, 22, { s: 22, c: C.ink, a: "right" }); K.txt(c, String(P + N), W - 26 - c.measureText(el[0]).width - 4, 12, { s: 11, c: C.muted, a: "right" }); K.txt(c, String(P), W - 26 - c.measureText(el[0]).width - 4, 30, { s: 11, c: C.muted, a: "right" }); }
      if (drag) K.dot(c, drag.x, drag.y, drag.k === "e" ? 5 : 7, COL[drag.k], "rgba(0,0,0,.3)");
    });
  };

  /* =========================================================
     prep1_ptable - modern periodic table explorer (A groups, periods 1-4)
     ========================================================= */
  L.prep1_ptable = function (host, cfg, done) {
    var D = [[1, "H", 1, 1, "n", "Hydrogen", "الهيدروجين"], [2, "He", 1, 8, "g", "Helium", "الهيليوم"],
      [3, "Li", 2, 1, "m", "Lithium", "الليثيوم"], [4, "Be", 2, 2, "m", "Beryllium", "البريليوم"], [5, "B", 2, 3, "d", "Boron", "البورون"], [6, "C", 2, 4, "n", "Carbon", "الكربون"], [7, "N", 2, 5, "n", "Nitrogen", "النيتروجين"], [8, "O", 2, 6, "n", "Oxygen", "الأكسجين"], [9, "F", 2, 7, "n", "Fluorine", "الفلور"], [10, "Ne", 2, 8, "g", "Neon", "النيون"],
      [11, "Na", 3, 1, "m", "Sodium", "الصوديوم"], [12, "Mg", 3, 2, "m", "Magnesium", "الماغنسيوم"], [13, "Al", 3, 3, "m", "Aluminium", "الألومنيوم"], [14, "Si", 3, 4, "d", "Silicon", "السيليكون"], [15, "P", 3, 5, "n", "Phosphorus", "الفوسفور"], [16, "S", 3, 6, "n", "Sulphur", "الكبريت"], [17, "Cl", 3, 7, "n", "Chlorine", "الكلور"], [18, "Ar", 3, 8, "g", "Argon", "الأرجون"],
      [19, "K", 4, 1, "m", "Potassium", "البوتاسيوم"], [20, "Ca", 4, 2, "m", "Calcium", "الكالسيوم"], [31, "Ga", 4, 3, "m", "Gallium", "الجاليوم"], [32, "Ge", 4, 4, "d", "Germanium", "الجرمانيوم"], [33, "As", 4, 5, "d", "Arsenic", "الزرنيخ"], [34, "Se", 4, 6, "n", "Selenium", "السيلينيوم"], [35, "Br", 4, 7, "n", "Bromine", "البروم"], [36, "Kr", 4, 8, "g", "Krypton", "الكريبتون"]];
    var TYP = { m: ["#60a5fa", ["Metal", "فلز"]], n: ["#4ade80", ["Nonmetal", "لافلز"]], d: ["#fbbf24", ["Metalloid", "شبه فلز"]], g: ["#c084fc", ["Noble gas", "غاز نبيل"]] };
    var GN = { 1: ["alkali metals", "الفلزات القلوية"], 2: ["alkaline earth metals", "الفلزات القلوية الأرضية"], 7: ["halogens", "الهالوجينات"], 8: ["noble gases", "الغازات النبيلة"] };
    var TR = { 1: [["Li", 157, 181, 1347], ["Na", 191, 98, 883], ["K", 235, 64, 774]], 7: [["Cl", 99, -101, -34], ["Br", 114, -7, 59], ["I", 133, 114, 184]] };
    host.innerHTML = hint(t("Tap any element. Its atom appears with its energy levels: count the levels (period) and the outer electrons (group).", "اضغط على أي عنصر لتظهر ذرته بمستويات الطاقة: عدّ المستويات (رقم الدورة) وإلكترونات المستوى الأخير (رقم المجموعة).")) + '<div class="seg" id="ptm"></div>';
    var S = K.make(host, 0.9, 400), mode = "type", sel = null, ang = 0, cells = [];
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Tap an alkali metal.", "اضغط على فلز قلوي."), t("Find the element in period 3, group 7A.", "اعثر على العنصر الموجود في الدورة الثالثة والمجموعة 7A."),
      t("Find a metalloid.", "اعثر على شبه فلز."), t("Tap a noble gas and read its valency.", "اضغط على غاز نبيل واقرأ تكافؤه.")], done);
    K.seg(host, "#ptm", [["type", t("Metals and nonmetals", "الفلزات واللافلزات")], ["block", t("Blocks s and p", "الفئتان s و p")]], mode, function (v) { mode = v; });
    function conf(z) { if (z <= 20) return fill(z); return [2, 8, 18, z - 28]; }
    function val(e) { return e[3] === 8 ? 0 : e[0] === 1 ? 1 : e[3] <= 4 ? e[3] : 8 - e[3]; }
    function show(e) {
      sel = e; var cf = conf(e[0]), v = val(e), gnm = GN[e[3]] && !(e[0] === 1) ? " · " + T(GN[e[3]]) : "";
      var h = "<span><b>" + esc(E.isAr() ? e[6] : e[5]) + "</b> " + eq(e[1]) + " · " + eq("Z = " + e[0]) + "</span><span>" + t("Electrons: ", "التوزيع الإلكتروني: ") + eq(cf.join(", ")) + "</span>" +
        "<span>" + t("Period ", "الدورة ") + n(e[2]) + " = " + n(cf.length) + (cf.length === 1 ? t(" energy level", " مستوى طاقة") : t(" energy levels", " مستويات طاقة")) + "</span><span>" + t("Group ", "المجموعة ") + (e[3] === 8 ? "0" : eq(e[3] + "A")) + gnm + "</span>" +
        "<span>" + esc(T(TYP[e[4]][1])) + " · " + t("Valency: ", "التكافؤ: ") + "<b>" + n(v) + "</b></span>";
      if (TR[e[3]] && e[0] !== 1) {
        h += '<span class="sub" style="width:100%">' + t("Same group, going down (book data): radius · melting point · boiling point", "في نفس المجموعة من أعلى لأسفل (بيانات الكتاب): نصف القطر · درجة الانصهار · درجة الغليان") + "</span>" +
          TR[e[3]].map(function (r) { return '<span class="chip">' + eq(r[0] + ": " + r[1] + " pm · " + r[2] + "°C · " + r[3] + "°C") + "</span>"; }).join("");
      }
      out.innerHTML = h; E.speak((E.isAr() ? e[6] : e[5]));
      if (e[3] === 1 && e[0] !== 1) tick(0);
      if (e[1] === "Cl") tick(1);
      if (e[4] === "d") tick(2);
      if (e[4] === "g") tick(3);
    }
    out.innerHTML = '<span class="sub">' + t("Tap an element to start.", "اضغط على عنصر لتبدأ.") + "</span>";
    S.drag({ down: function (p) { for (var i = 0; i < cells.length; i++) { var q = cells[i]; if (p.x > q.x && p.x < q.x + q.w && p.y > q.y && p.y < q.y + q.h) { show(q.e); return true; } } return false; },
      hover: function (p) { return cells.some(function (q) { return p.x > q.x && p.x < q.x + q.w && p.y > q.y && p.y < q.y + q.h; }); } });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, nar = W < 560, ox = 18, tw = nar ? W - ox - 6 : W * 0.6 - ox, cw = tw / 9.4, ch = Math.min(cw * 1.05, nar ? 46 : (H - 40) / 4.4), oy = 26;
      c.clearRect(0, 0, W, H); ang += dt; cells = [];
      for (var gi = 1; gi <= 8; gi++) { var gx = ox + (gi - 1 + (gi > 2 ? 1.4 : 0)) * cw; K.txt(c, gi === 8 ? "0" : gi + "A", gx + cw / 2, oy - 12, { s: 10, c: C.muted }); }
      K.rr(c, ox + 2 * cw + 3, oy + 3 * ch + 3, cw * 1.4 - 6, ch - 6, 6); c.fillStyle = "rgba(244,114,182,.25)"; c.fill();
      K.txt(c, "d", ox + 2.7 * cw, oy + 3.5 * ch, { s: 12, c: C.muted });
      D.forEach(function (e) {
        var x = ox + (e[3] - 1 + (e[3] > 2 ? 1.4 : 0)) * cw, y = oy + (e[2] - 1) * ch, col;
        if (e[0] === 2) x = ox + (7 + 1.4) * cw;
        col = mode === "type" ? TYP[e[4]][0] : (e[3] <= 2 || e[0] === 2 ? "#f87171" : "#facc15");
        K.rr(c, x + 2, y + 2, cw - 4, ch - 4, 6); c.fillStyle = col; c.globalAlpha = sel === e ? 1 : 0.75; c.fill(); c.globalAlpha = 1;
        if (sel === e) { c.strokeStyle = C.ink; c.lineWidth = 2.5; c.stroke(); }
        K.txt(c, e[1], x + cw / 2, y + ch / 2 + 3, { s: Math.min(15, cw * 0.38), c: "#0f172a" }); K.txt(c, String(e[0]), x + 7, y + 9, { s: 8, c: "#0f172a", a: "left", w: 700 });
        cells.push({ x: x, y: y, w: cw, h: ch, e: e });
      });
      for (var pi = 1; pi <= 4; pi++) K.txt(c, String(pi), 9, oy + (pi - 0.5) * ch, { s: 10, c: C.muted });
      var ly = oy + 4 * ch + 12, keys = mode === "type" ? ["m", "n", "d", "g"] : null;
      if (keys) keys.forEach(function (k, i) { K.dot(c, ox + 8 + i * tw / 4, ly, 5, TYP[k][0]); K.txt(c, T(TYP[k][1]), ox + 16 + i * tw / 4, ly, { s: 10, c: C.ink, a: "left" }); });
      else [["#f87171", t("s-block", "الفئة s")], ["#facc15", t("p-block", "الفئة p")], ["rgba(244,114,182,.6)", t("d-block (transition)", "الفئة d (العناصر الانتقالية)")]].forEach(function (k, i) { K.dot(c, ox + 8 + i * tw / 3, ly, 5, k[0]); K.txt(c, k[1], ox + 16 + i * tw / 3, ly, { s: 10, c: C.ink, a: "left" }); });
      var tr = ox + tw, bx = nar ? W / 2 : tr + (W - tr) / 2, top = oy + 4 * ch + 26, by = nar ? top + (H - top) / 2 : H * 0.5, Rm = nar ? Math.min(W * 0.4, (H - top) / 2 - 6) : Math.min((W - tr) / 2 - 8, H * 0.44);
      if (!sel) { K.txt(c, t("tap an element", "اضغط على عنصر"), bx, by, { s: 13, c: C.muted }); return; }
      var cf = conf(sel[0]);
      for (var s = 0; s < cf.length; s++) {
        var r = Rm * (0.3 + 0.7 * (s + 1) / cf.length);
        c.strokeStyle = s === cf.length - 1 ? "#f97316" : C.line; c.lineWidth = s === cf.length - 1 ? 2 : 1.2; c.beginPath(); c.arc(bx, by, r, 0, Math.PI * 2); c.stroke();
        for (var k = 0; k < cf[s]; k++) { var a = ang * (0.9 - s * 0.15) + k * Math.PI * 2 / cf[s]; K.dot(c, bx + r * Math.cos(a), by + r * Math.sin(a), cf[s] > 10 ? 2.5 : 3.5, "#3b82f6"); }
      }
      K.dot(c, bx, by, Rm * 0.2, "#ef4444"); K.txt(c, sel[1], bx, by, { s: 13, c: "#fff" });
    });
  };

  /* =========================================================
     prep1_matter - separate mixtures and break a compound
     ========================================================= */
  L.prep1_matter = function (host, cfg, done) {
    var MIX = {
      sand: { n: t("Sand + water", "رمل + ماء"), k: t("Heterogeneous mixture: you can see the sand.", "مخلوط غير متجانس: يمكنك رؤية الرمل."), ok: "filter" },
      salt: { n: t("Salt + water", "ملح طعام + ماء"), k: t("Homogeneous mixture (solution): the salt is dissolved and cannot be seen.", "مخلوط متجانس (محلول): الملح ذائب ولا يُرى."), ok: "evap" },
      iron: { n: t("Iron filings + sand", "برادة حديد + رمل"), k: t("Heterogeneous mixture of two solids.", "مخلوط غير متجانس من مادتين صلبتين."), ok: "magnet" },
      hgo: { n: t("Red mercury oxide", "أكسيد الزئبق الأحمر"), k: t("A pure substance: a compound of mercury and oxygen in a fixed ratio.", "مادة نقية: مركب من الزئبق والأكسجين بنسبة ثابتة."), ok: "heat" }
    };
    host.innerHTML = hint(t("Choose a sample, then try the tools. Drag the magnet over the beaker. Which method separates each one?", "اختر عينة ثم جرّب الأدوات، واسحب المغناطيس فوق الكأس. أي طريقة تفصل كل عينة؟")) + '<div class="seg" id="mxs"></div>';
    var S = K.make(host, 0.56, 360), mix = "sand", pts = [], anim = null, mag = { x: 0, y: 0 }, dragM = false, sep = false;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm" id="tF">🧻 ' + t("Filter", "الترشيح") + '</button><button type="button" class="btn sm" id="tE">♨️ ' + t("Evaporate (gentle heat)", "التبخير (تسخين هادئ)") + '</button><button type="button" class="btn sm" id="tH">🔥 ' + t("Heat strongly", "تسخين شديد") + '</button><button type="button" class="btn sm ghost" id="tR">↺ ' + t("New sample", "عينة جديدة") + '</button></div><div class="meter mx-out"></div>';
    var out = ctl.querySelector(".mx-out");
    var tick = L._goals(host, [t("Separate sand from water.", "افصل الرمل عن الماء."), t("Get the salt back from salt water.", "استرجع الملح من الماء المالح."), t("Pull the iron out of the sand.", "اسحب الحديد من الرمل."), t("Break mercury oxide into its elements.", "حلّل أكسيد الزئبق إلى عناصره.")], done);
    var GI = { sand: 0, salt: 1, iron: 2, hgo: 3 };
    K.seg(host, "#mxs", Object.keys(MIX).map(function (k) { return [k, MIX[k].n]; }), mix, function (v) { mix = v; reset(); });
    function bk() { var W = S.W, H = S.H; return { x: W * 0.36, y: H * 0.22, w: W * 0.3, h: H * 0.66 }; }
    function say(s, good) { out.innerHTML = "<span><b>" + MIX[mix].n + "</b></span><span class=\"sub\">" + MIX[mix].k + "</span>" + (s ? "<span class=\"" + (good ? "ok-t" : "no-t") + "\">" + (good ? "✔ " : "✖ ") + s + "</span>" : ""); if (s) E.speak(s.replace(/<[^>]+>/g, "")); }
    function P(k, n1) { var b = bk(); for (var i = 0; i < n1; i++) pts.push({ k: k, x: K.rnd(b.x + 8, b.x + b.w - 8), y: K.rnd(b.y + b.h * 0.25, b.y + b.h - 8), vx: 0, vy: 0, a: 1, st: 0 }); }
    function reset() {
      pts = []; anim = null; sep = false; var W = S.W, H = S.H; mag.x = W * 0.86; mag.y = H * 0.3;
      if (mix === "sand") { P("w", 46); P("sand", 22); } if (mix === "salt") { P("w", 46); P("salt", 18); }
      if (mix === "iron") { P("sand", 26); P("fe", 16); } if (mix === "hgo") P("hgo", 22);
      if (mix === "iron" || mix === "hgo") pts.forEach(function (q) { q.y = K.rnd(bk().y + bk().h * 0.62, bk().y + bk().h - 6); });
      say("");
    }
    function tool(k) {
      if (sep) { say(t("Already separated. Choose a new sample.", "تم الفصل بالفعل. اختر عينة جديدة."), true); return; }
      var ok = MIX[mix].ok === k;
      if (k === "filter") {
        if (ok) { anim = { k: "filter", t: 0 }; say(t("Filtration: the sand stays on the filter paper and the water passes through.", "الترشيح: يبقى الرمل على ورقة الترشيح ويمر الماء."), true); tick(0); sep = true; }
        else if (mix === "salt") say(t("The dissolved salt passes through the filter paper with the water.", "الملح الذائب يمر مع الماء خلال ورقة الترشيح."));
        else if (mix === "hgo") say(t("Mercury oxide is a compound: physical methods cannot separate it.", "أكسيد الزئبق مركب، ولا يمكن فصل مكوناته بالطرق الفيزيائية."));
        else say(t("Both solids stay on the filter paper together.", "تبقى المادتان الصلبتان معًا على ورقة الترشيح."));
      }
      if (k === "evap") {
        if (ok) { anim = { k: "evap", t: 0 }; say(t("Evaporation: the water turns to vapour and the salt crystals stay behind.", "التبخير: يتحول الماء إلى بخار وتبقى بلورات الملح."), true); tick(1); sep = true; }
        else if (mix === "hgo") say(t("Gentle heat does not break the compound.", "التسخين الهادئ لا يحلل المركب."));
        else if (mix === "sand") say(t("The water would evaporate, but filtration is the simple way for an insoluble solid.", "سيتبخر الماء، لكن الترشيح هو الطريقة البسيطة لفصل مادة صلبة لا تذوب."));
        else say(t("There is no water to evaporate here.", "لا يوجد ماء ليتبخر هنا."));
      }
      if (k === "heat") {
        if (ok) { anim = { k: "heat", t: 0 }; say(t("Heating breaks the compound by a chemical change: " + eq("2HgO → 2Hg + O₂") + ".", "التسخين يحلل المركب بتغير كيميائي: " + eq("2HgO → 2Hg + O₂") + "."), true); tick(3); sep = true; }
        else say(t("Heating does not split these substances into new elements. This is a mixture: use a physical method.", "التسخين لا يحلل هذه المواد إلى عناصر جديدة؛ هذا مخلوط فاستخدم طريقة فيزيائية."));
      }
    }
    ctl.querySelector("#tF").onclick = function () { tool("filter"); };
    ctl.querySelector("#tE").onclick = function () { tool("evap"); };
    ctl.querySelector("#tH").onclick = function () { tool("heat"); };
    ctl.querySelector("#tR").onclick = reset;
    S.onSize = function () { if (!dragM) { mag.x = Math.min(mag.x, S.W - 20); } };
    S.drag({
      down: function (p) { if (Math.abs(p.x - mag.x) < 34 && Math.abs(p.y - mag.y) < 30) { dragM = true; return true; } return false; },
      move: function (p) { if (dragM) { mag.x = p.x; mag.y = p.y; } },
      up: function () { dragM = false; },
      hover: function (p) { return Math.abs(p.x - mag.x) < 34 && Math.abs(p.y - mag.y) < 30; }
    });
    reset();
    var told = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, b = bk();
      c.clearRect(0, 0, W, H);
      var b2 = bk(); var over = mag.x > b2.x - 10 && mag.x < b2.x + b2.w + 10 && mag.y < b2.y + b2.h && mag.y > b2.y - 60;
      if (over && !sep && dragM && told <= 0) { told = 3; if (mix !== "iron") say(mix === "hgo" ? t("The magnet attracts nothing: mercury oxide is a compound.", "المغناطيس لا يجذب شيئًا: أكسيد الزئبق مركب.") : t("Nothing here is attracted to the magnet.", "لا شيء هنا ينجذب إلى المغناطيس.")); }
      told -= dt;
      if (anim) anim.t += dt;
      pts.forEach(function (q) {
        if (q.k === "fe" && q.st === 0 && over && dist(q.x, q.y, mag.x, mag.y) < 160) q.st = 1;
        if (q.st === 1) { q.x += (mag.x - 10 + (q.x % 20) - q.x) * 6 * dt; q.y += (mag.y + 22 - q.y) * 6 * dt; return; }
        if (anim && anim.k === "filter") { if (q.k === "w") { q.y += 140 * dt; q.a = Math.max(0, q.a - dt * 0.6); } else { q.y += (b.y + 20 - q.y) * 2 * dt; } return; }
        if (anim && anim.k === "evap" && q.k === "w") { q.y -= 70 * dt; q.x += K.rnd(-30, 30) * dt; q.a = Math.max(0, q.a - dt * 0.5); return; }
        if (anim && anim.k === "evap" && q.k === "salt") { q.y += (b.y + b.h - 8 - q.y) * 2 * dt; return; }
        if (anim && anim.k === "heat" && q.k === "hgo") { q.st = 2; }
        if (q.st === 2) { if (!q.sp) q.sp = Math.random() < 0.5 ? "hg" : "o"; if (q.sp === "hg") q.y += (b.y + b.h - 6 - q.y) * 2 * dt; else { q.y -= 60 * dt; q.a = Math.max(0.2, q.a - dt * 0.2); } return; }
        if (q.k === "w" || q.k === "salt") { q.vx += K.rnd(-60, 60) * dt; q.vy += K.rnd(-60, 60) * dt; q.vx *= 0.96; q.vy *= 0.96; q.x += q.vx * dt; q.y += q.vy * dt; }
        else if (q.k === "sand" && mix === "sand" && !anim) { q.y = Math.min(b.y + b.h - 6, q.y + 20 * dt); }
        q.x = Math.max(b.x + 5, Math.min(b.x + b.w - 5, q.x)); if (q.st !== 2) q.y = Math.max(b.y + b.h * 0.22, Math.min(b.y + b.h - 5, q.y));
      });
      if (mix === "iron" && !sep && pts.filter(function (q) { return q.k === "fe"; }).every(function (q) { return q.st === 1; })) { sep = true; tick(2); say(t("Magnetic separation: iron is attracted to the magnet, sand is not.", "الفصل المغناطيسي: الحديد ينجذب إلى المغناطيس والرمل لا ينجذب."), true); }
      // beaker
      if (mix === "sand" || mix === "salt") { c.fillStyle = mix === "salt" ? "rgba(56,189,248,.22)" : "rgba(56,189,248,.16)"; var wl = pts.filter(function (q) { return q.k === "w"; }); var fa = wl.length ? wl.reduce(function (s, q) { return s + q.a; }, 0) / wl.length : 0; c.globalAlpha = fa; c.fillRect(b.x, b.y + b.h * 0.2, b.w, b.h * 0.8); c.globalAlpha = 1; }
      c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(b.x, b.y); c.lineTo(b.x, b.y + b.h); c.lineTo(b.x + b.w, b.y + b.h); c.lineTo(b.x + b.w, b.y); c.stroke();
      if (anim && anim.k === "filter") { c.strokeStyle = "#a3a3a3"; c.lineWidth = 3; c.beginPath(); c.moveTo(b.x + 4, b.y + 14); c.lineTo(b.x + b.w / 2, b.y + 40); c.lineTo(b.x + b.w - 4, b.y + 14); c.stroke(); K.txt(c, t("filter paper", "ورقة الترشيح"), b.x + b.w / 2, b.y - 8, { s: 11, c: C.muted }); }
      if (anim && (anim.k === "evap" || anim.k === "heat")) { for (var f = 0; f < 3; f++) { var fx = b.x + b.w * (0.3 + f * 0.2), fy = b.y + b.h + 14, fl = 10 + Math.sin(anim.t * 12 + f) * 3; c.fillStyle = "#f97316"; c.beginPath(); c.moveTo(fx - 6, fy + 8); c.quadraticCurveTo(fx, fy - fl, fx + 6, fy + 8); c.fill(); } }
      pts.forEach(function (q) {
        c.globalAlpha = q.a;
        if (q.k === "w") K.dot(c, q.x, q.y, 3, "#38bdf8");
        else if (q.k === "sand") K.dot(c, q.x, q.y, 4, "#d6a35c", "rgba(0,0,0,.2)");
        else if (q.k === "salt") { if (anim && anim.k === "evap") { c.fillStyle = "#f8fafc"; c.strokeStyle = "#94a3b8"; c.lineWidth = 1; c.fillRect(q.x - 4, q.y - 4, 8, 8); c.strokeRect(q.x - 4, q.y - 4, 8, 8); } else K.dot(c, q.x, q.y, 2.2, "rgba(148,163,184,.8)"); }
        else if (q.k === "fe") K.dot(c, q.x, q.y, 3.5, "#475569", "rgba(0,0,0,.3)");
        else if (q.k === "hgo") { if (q.st === 2) { if (q.sp === "hg") K.dot(c, q.x, q.y, 5, "#cbd5e1", "#64748b"); else { K.dot(c, q.x - 3, q.y, 3.5, "#ef4444"); K.dot(c, q.x + 3, q.y, 3.5, "#ef4444"); } } else { K.dot(c, q.x - 3, q.y, 5, "#b91c1c"); K.dot(c, q.x + 4, q.y, 3.5, "#fca5a5"); } }
        c.globalAlpha = 1;
      });
      // magnet
      c.save(); c.translate(mag.x, mag.y);
      c.lineWidth = 14; c.lineCap = "butt"; c.strokeStyle = "#dc2626"; c.beginPath(); c.arc(0, 0, 18, Math.PI, Math.PI * 1.5); c.lineTo(0, -18); c.stroke();
      c.strokeStyle = "#2563eb"; c.beginPath(); c.moveTo(0, -18); c.arc(0, 0, 18, Math.PI * 1.5, 0); c.stroke();
      c.lineWidth = 14; c.strokeStyle = "#dc2626"; c.beginPath(); c.moveTo(-18, 0); c.lineTo(-18, 14); c.stroke(); c.strokeStyle = "#2563eb"; c.beginPath(); c.moveTo(18, 0); c.lineTo(18, 14); c.stroke();
      c.restore();
      K.txt(c, t("drag me", "اسحبني"), mag.x, mag.y - 38, { s: 10, c: C.muted });
      // legend
      var lg = mix === "sand" ? [["#38bdf8", t("water", "ماء")], ["#d6a35c", t("sand", "رمل")]] : mix === "salt" ? [["#38bdf8", t("water", "ماء")], ["#94a3b8", t("salt", "ملح")]] : mix === "iron" ? [["#475569", t("iron", "حديد")], ["#d6a35c", t("sand", "رمل")]] : [["#b91c1c", t("mercury oxide", "أكسيد الزئبق")], ["#cbd5e1", t("mercury", "زئبق")], ["#ef4444", t("oxygen", "أكسجين")]];
      lg.forEach(function (l, i) { K.dot(c, 16, 20 + i * 20, 5, l[0]); K.txt(c, l[1], 26, 20 + i * 20, { s: 11, c: C.ink, a: "left" }); });
    });
  };

  /* =========================================================
     prep1_bond - ionic transfer and covalent sharing of electrons
     ========================================================= */
  L.prep1_bond = function (host, cfg, done) {
    var PR = {
      nacl: { a: ["Na", 1, "2,8"], b: ["Cl", 7, "2,8"], ion: true, need: 1, f: "NaCl" },
      mgo: { a: ["Mg", 2, "2,8"], b: ["O", 6, "2"], ion: true, need: 2, f: "MgO" },
      hcl: { a: ["H", 1, ""], b: ["Cl", 7, "2,8"], ion: false, need: 1, f: "H–Cl" },
      h2: { a: ["H", 1, ""], b: ["H", 1, ""], ion: false, need: 1, f: "H–H" },
      o2: { a: ["O", 6, "2"], b: ["O", 6, "2"], ion: false, need: 2, f: "O=O" },
      n2: { a: ["N", 5, "2"], b: ["N", 5, "2"], ion: false, need: 3, f: "N≡N" }
    };
    host.innerHTML = hint(t("Drag outer electrons. A metal GIVES electrons to a nonmetal (ionic). Two nonmetals SHARE: drag electrons from both atoms into the middle (covalent).", "اسحب إلكترونات المستوى الأخير. الفلز يعطي إلكترونات للافلز (رابطة أيونية)، واللافلزان يتشاركان: اسحب إلكترونات من الذرتين إلى المنطقة الوسطى (رابطة تساهمية).")) + '<div class="seg" id="bdp"></div>';
    var S = K.make(host, 0.5, 330), key = "nacl", st, drag = null, dots = [], gap = 0;
    var out = E.el("div", "meter bd-out"); host.appendChild(out);
    var tick = L._goals(host, [t("Form the ionic bond in sodium chloride.", "كوّن الرابطة الأيونية في كلوريد الصوديوم."), t("Form the single covalent bond in hydrogen chloride.", "كوّن الرابطة التساهمية الأحادية في كلوريد الهيدروجين."),
      t("Make a double bond (oxygen molecule).", "كوّن رابطة ثنائية (جزيء الأكسجين)."), t("Make a triple bond (nitrogen molecule).", "كوّن رابطة ثلاثية (جزيء النيتروجين).")], done);
    K.seg(host, "#bdp", Object.keys(PR).map(function (k) { return [k, '<span dir="ltr">' + PR[k].a[0] + " + " + PR[k].b[0] + "</span>"]; }), key, function (v) { key = v; reset(); });
    function reset() { var p = PR[key]; st = { a: p.a[1], b: p.b[1], sa: 0, sb: 0, moved: 0, done: false }; gap = 0; upd(); }
    function full(sym, cnt) { return sym === "H" ? cnt === 2 : cnt === 8; }
    function upd() {
      var p = PR[key], ca, cb, h;
      if (p.ion) { ca = st.a; cb = st.b + st.moved; }
      else { ca = st.a + st.sa + st.sb; cb = st.b + st.sa + st.sb; }
      h = "<span>" + eq(p.a[0]) + ": " + t("outer electrons ", "إلكترونات المستوى الأخير ") + "<b>" + n(p.ion && st.a === 0 ? 8 : ca) + "</b>" + (p.ion && st.a === 0 ? " " + t("(the full level below)", "(المستوى الكامل الذي يليه للداخل)") : "") + "</span>" +
        "<span>" + eq(p.b[0]) + ": " + t("outer electrons ", "إلكترونات المستوى الأخير ") + "<b>" + n(cb) + "</b></span>";
      if (st.done) h += '<b class="ok-t">✔ ' + (p.ion ? t("Ionic bond: ", "رابطة أيونية: ") + eq("[" + p.a[0] + "]" + (p.need > 1 ? p.need : "") + "+ [" + p.b[0] + "]" + (p.need > 1 ? p.need : "") + "−") + " " + t("attract each other.", "يتجاذبان.")
        : t(["Single", "Double", "Triple"][p.need - 1] + " covalent bond: ", "رابطة تساهمية " + ["أحادية", "ثنائية", "ثلاثية"][p.need - 1] + ": ") + eq(p.f)) + "</b>";
      out.innerHTML = h;
    }
    function finish() {
      st.done = true; upd(); var p = PR[key];
      E.speak(p.ion ? t("Ionic bond formed.", "تكوّنت رابطة أيونية.") : t("Covalent bond formed.", "تكوّنت رابطة تساهمية."));
      if (key === "nacl") tick(0); if (key === "hcl") tick(1); if (key === "o2") tick(2); if (key === "n2") tick(3);
    }
    function geo() { var W = S.W, H = S.H, r = Math.min(W * 0.14, H * 0.3); return { ax: W * 0.27 + gap, bx: W * 0.73 - gap, y: H * 0.52, r: r }; }
    function ringPos(cx, cy, r, k, i) { var side = i % 4, a = [-Math.PI / 2, 0, Math.PI / 2, Math.PI][side], off = side < k - 4 ? (i < 4 ? -0.2 : 0.2) : 0; return { x: cx + r * Math.cos(a + off), y: cy + r * Math.sin(a + off) }; }
    function zone(p) { var o = geo(); if (Math.abs(p.x - (o.ax + o.bx) / 2) < Math.max(26, (o.bx - o.ax) * 0.18) && Math.abs(p.y - o.y) < o.r) return "S"; if (dist(p.x, p.y, o.ax, o.y) < o.r + 26) return "A"; if (dist(p.x, p.y, o.bx, o.y) < o.r + 26) return "B"; return null; }
    S.drag({
      down: function (p) { if (st.done) return false; for (var i = 0; i < dots.length; i++) if (dist(p.x, p.y, dots[i].x, dots[i].y) < 14) { drag = { from: dots[i].z, own: dots[i].own, x: p.x, y: p.y }; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function (p) {
        if (!drag) return; var to = zone(p), pr = PR[key], f = drag.from; drag = null;
        if (!to || to === f) return;
        if (pr.ion) {
          if (f === "A" && to === "B") { st.a--; st.moved++; if (st.moved === pr.need) { finish(); } else upd(); }
          else if (to === "S") E.toast(t("A metal and a nonmetal: the electron moves all the way across. It is not shared.", "فلز ولافلز: ينتقل الإلكترون بالكامل ولا يُشارَك."));
          else if (f === "B") E.toast(t("The nonmetal gains electrons. It does not give them away here.", "اللافلز يكتسب إلكترونات ولا يفقدها هنا."));
          return;
        }
        if (to === "S" && (f === "A" || f === "B")) {
          if (f === "A") { if (st.sa >= pr.need) { E.toast(t("This atom has already shared enough electrons.", "شاركت هذه الذرة بما يكفي من الإلكترونات.")); return; } st.a--; st.sa++; }
          else { if (st.sb >= pr.need) { E.toast(t("This atom has already shared enough electrons.", "شاركت هذه الذرة بما يكفي من الإلكترونات.")); return; } st.b--; st.sb++; }
          if (st.sa === pr.need && st.sb === pr.need) finish(); else upd();
        } else if (f === "S") { if (to === "A" && st.sa) { st.sa--; st.a++; } else if (to === "B" && st.sb) { st.sb--; st.b++; } upd(); }
        else E.toast(t("Both atoms need electrons, so neither gives one away. They share a pair.", "كلتا الذرتين تحتاج إلكترونات، فلا تعطي إحداهما الأخرى، بل تتشاركان في زوج."));
      },
      hover: function (p) { return dots.some(function (d) { return dist(p.x, p.y, d.x, d.y) < 14; }); }
    });
    reset();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, p = PR[key], i;
      if (st.done && p.ion && gap < W * 0.06) gap += dt * 60;
      var o = geo(); c.clearRect(0, 0, W, H); dots = [];
      [[o.ax, p.a, st.a, "A"], [o.bx, p.b, st.b, "B"]].forEach(function (A) {
        var cx = A[0], sym = A[1][0], ion = p.ion && st.done;
        K.dot(c, cx, o.y, o.r * 0.42, A[3] === "A" ? "rgba(59,130,246,.2)" : "rgba(249,115,22,.2)");
        if (A[1][2]) { c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.arc(cx, o.y, o.r * 0.62, 0, Math.PI * 2); c.stroke(); }
        if (!(p.ion && A[3] === "A" && st.a === 0)) { c.strokeStyle = C.muted; c.lineWidth = 1.5; c.setLineDash([4, 4]); c.beginPath(); c.arc(cx, o.y, o.r, 0, Math.PI * 2); c.stroke(); c.setLineDash([]); }
        K.txt(c, sym, cx, o.y - 4, { s: 20, c: C.ink }); if (A[1][2]) K.txt(c, A[1][2], cx, o.y + 14, { s: 10, c: C.muted });
        if (ion) K.txt(c, A[3] === "A" ? (p.need > 1 ? p.need : "") + "+" : (p.need > 1 ? p.need : "") + "−", cx + o.r * 0.75, o.y - o.r * 0.85, { s: 18, c: A[3] === "A" ? "#2563eb" : "#ea580c" });
        var own = A[2], extra = A[3] === "B" && p.ion ? st.moved : 0, tot = own + extra;
        for (i = 0; i < tot; i++) { var q = ringPos(cx, o.y, o.r, tot, i), isGift = i >= own; K.dot(c, q.x, q.y, 6, (A[3] === "A") !== isGift ? "#3b82f6" : "#f97316", "rgba(0,0,0,.25)"); if (!isGift) dots.push({ x: q.x, y: q.y, z: A[3] }); }
      });
      var mx = (o.ax + o.bx) / 2;
      if (!p.ion) {
        c.strokeStyle = C.line; c.setLineDash([3, 4]); c.strokeRect(mx - Math.max(26, (o.bx - o.ax) * 0.18), o.y - o.r, Math.max(26, (o.bx - o.ax) * 0.18) * 2, o.r * 2); c.setLineDash([]);
        K.txt(c, t("shared zone", "منطقة المشاركة"), mx, o.y - o.r - 10, { s: 10, c: C.muted });
        for (i = 0; i < p.need; i++) {
          var yy = o.y + (i - (p.need - 1) / 2) * 18;
          if (i < st.sa) { K.dot(c, mx - 7, yy, 6, "#3b82f6", "rgba(0,0,0,.25)"); dots.push({ x: mx - 7, y: yy, z: "S" }); }
          if (i < st.sb) { K.dot(c, mx + 7, yy, 6, "#f97316", "rgba(0,0,0,.25)"); dots.push({ x: mx + 7, y: yy, z: "S" }); }
        }
        if (st.done) K.txt(c, p.f, mx, o.y + o.r + 18, { s: 18, c: C.ink });
      } else if (st.done) { K.txt(c, "⟷ " + t("electrostatic attraction", "تجاذب كهربي") + " ⟷", mx, o.y + o.r + 18, { s: 12, c: C.ink }); }
      if (drag) K.dot(c, drag.x, drag.y, 6, drag.from === "A" ? "#3b82f6" : drag.from === "B" ? "#f97316" : "#a855f7", "rgba(0,0,0,.3)");
    });
  };

  /* =========================================================
     prep1_charge - rub, attract, repel, electroscope, field lines
     ========================================================= */
  L.prep1_charge = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a rod and a cloth. Drag the cloth back and forth over the rod to rub it, then drag the rod near the paper scraps, the hanging rod or the electroscope.", "اختر ساقًا وقطعة قماش، واسحب القماش ذهابًا وإيابًا فوق الساق لتدلكها، ثم اسحب الساق بالقرب من قصاصات الورق أو الساق المعلقة أو الكشاف الكهربي.")) +
      '<div class="seg" id="chr"></div> <div class="seg" id="chc"></div>';
    var S = K.make(host, 0.62, 400), rodM = "ebo", cloth = "wool", q = 0, rub = 0, rod = { x: 0, y: 0 }, cl = { x: 0, y: 0 }, drag = null, last = null, scraps = [], hang = { a: 0, v: 0 }, esq = 0, lines = false, lastMsg = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm tg" id="chF">↗ ' + t("Show field lines", "أظهر خطوط المجال") + '</button><button type="button" class="btn sm ghost" id="chR">↺ ' + t("Reset", "إعادة") + '</button></div><div class="meter ch-out"></div>';
    var out = ctl.querySelector(".ch-out");
    var tick = L._goals(host, [t("Charge a rod and make it attract paper scraps.", "اشحن ساقًا واجعلها تجذب قصاصات الورق."), t("Try to charge the copper rod held in your hand.", "حاول شحن ساق النحاس وأنت تمسكها بيدك."),
      t("Make the hanging ebonite rod swing AWAY (repulsion).", "اجعل ساق الإبونيت المعلقة تبتعد (تنافر)."), t("Make the hanging rod swing TOWARDS your rod (attraction).", "اجعل الساق المعلقة تقترب من ساقك (تجاذب)."),
      t("Touch the electroscope disc with a charged rod: the leaves diverge.", "المس قرص الكشاف الكهربي بساق مشحونة: تنفرج الورقتان.")], done);
    var RM = { ebo: [t("Ebonite rod", "ساق إبونيت"), "#1f2937"], gla: [t("Glass rod", "ساق زجاج"), "rgba(186,230,253,.9)"], cu: [t("Copper rod (in hand)", "ساق نحاس (في اليد)"), "#c2410c"] };
    K.seg(host, "#chr", Object.keys(RM).map(function (k) { return [k, RM[k][0]]; }), rodM, function (v) { rodM = v; q = 0; rub = 0; upd(); });
    K.seg(host, "#chc", [["wool", t("Wool", "صوف")], ["silk", t("Silk", "حرير")]], cloth, function (v) { cloth = v; q = 0; rub = 0; upd(); });
    ctl.querySelector("#chF").onclick = function () { lines = !lines; this.classList.toggle("on", lines); };
    ctl.querySelector("#chR").onclick = function () { reset(); };
    function lay() { var W = S.W, H = S.H; return { rl: Math.min(170, W * 0.26), hx: W * 0.62, hy: H * 0.08, hl: H * 0.36, ex: W * 0.86, ey: H * 0.5, table: H * 0.92 }; }
    function reset() {
      var W = S.W, H = S.H, o = lay(); q = 0; rub = 0; esq = 0; hang = { a: 0, v: 0 }; lastMsg = "";
      rod.x = W * 0.2; rod.y = H * 0.32; cl.x = W * 0.2; cl.y = H * 0.48;
      scraps = []; for (var i = 0; i < 9; i++) scraps.push({ x: W * 0.06 + i * W * 0.035, y: o.table - 4, hx: W * 0.06 + i * W * 0.035, hy: o.table - 4, st: 0, a: K.rnd(0, 3) });
      upd();
    }
    function sign() { return rodM === "ebo" ? -1 : rodM === "gla" ? 1 : 0; }
    function upd() {
      var s = q === 0 ? t("not charged", "غير مشحونة") : (q > 0 ? t("positive (+): it lost electrons", "موجبة (+): فقدت إلكترونات") : t("negative (−): it gained electrons", "سالبة (−): اكتسبت إلكترونات"));
      out.innerHTML = "<span>" + RM[rodM][0] + ": <b>" + s + "</b></span><span>" + t("Charge: ", "الشحنة: ") + eq((q > 0 ? "+" : q < 0 ? "−" : "") + Math.abs(Math.round(q))) + "</span><span>" + t("Hanging ebonite rod: negative (−)", "ساق الإبونيت المعلقة: سالبة (−)") + "</span>" + (lastMsg ? '<span class="sub">' + lastMsg + "</span>" : "");
    }
    var said = {}, lastT = 0;
    function msg(s) { var now = performance.now(); if (s === lastMsg || now - lastT < 1500 || (said[s] && now - said[s] < 4000)) return; said[s] = lastT = now; lastMsg = s; upd(); E.speak(s); }
    S.drag({
      down: function (p) {
        if (Math.abs(p.x - cl.x) < 34 && Math.abs(p.y - cl.y) < 20) { drag = "cl"; last = p; return true; }
        var o = lay(); if (Math.abs(p.x - rod.x) < o.rl / 2 + 8 && Math.abs(p.y - rod.y) < 16) { drag = "rod"; last = p; return true; }
        return false;
      },
      move: function (p) {
        var dx = p.x - last.x, dy = p.y - last.y, o = lay();
        if (drag === "cl") { cl.x += dx; cl.y += dy; if (Math.abs(cl.x - rod.x) < o.rl / 2 && Math.abs(cl.y - rod.y) < 22) { rub += Math.abs(dx); var s = sign(); if (s) { q = s * Math.min(10, rub / 60); } else if (rub > 250) { tick(1); msg(t("The copper rod stays uncharged: the charges leak through your hand. A metal must be held by an insulator to keep a charge.", "تبقى ساق النحاس غير مشحونة لأن الشحنات تتسرب خلال يدك؛ الفلز يحتاج إلى مقبض عازل ليحتفظ بالشحنة.")); } upd(); } }
        if (drag === "rod") { rod.x += dx; rod.y += dy; }
        last = p;
      },
      up: function () { drag = null; },
      hover: function (p) { var o = lay(); return (Math.abs(p.x - cl.x) < 34 && Math.abs(p.y - cl.y) < 20) || (Math.abs(p.x - rod.x) < o.rl / 2 && Math.abs(p.y - rod.y) < 16); }
    });
    reset();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, o = lay(), i;
      c.clearRect(0, 0, W, H);
      rod.x = Math.max(o.rl / 2, Math.min(W - o.rl / 2, rod.x)); rod.y = Math.max(14, Math.min(H - 14, rod.y));
      var tipX = rod.x + o.rl / 2, tipY = rod.y;
      // table + scraps
      c.fillStyle = C.line; c.fillRect(0, o.table, W * 0.45, 4);
      scraps.forEach(function (s) {
        var d = dist(s.x, s.y, rod.x, rod.y);
        if (s.st === 0 && Math.abs(q) > 2 && d < 70 + Math.abs(q) * 4) s.st = 1;
        if (s.st === 1) { s.x += (rod.x - o.rl / 4 + s.a * 12 - s.x) * 8 * dt; s.y += (rod.y + 9 - s.y) * 8 * dt; if (Math.abs(q) < 1) s.st = 2; if (d < 70) tick(0); }
        if (s.st === 2) { s.y = Math.min(s.hy, s.y + 200 * dt); if (s.y >= s.hy) s.st = 0; }
        c.save(); c.translate(s.x, s.y); c.rotate(s.a); c.fillStyle = "#f8fafc"; c.strokeStyle = "#94a3b8"; c.lineWidth = 1; c.fillRect(-4, -3, 8, 6); c.strokeRect(-4, -3, 8, 6); c.restore();
      });
      K.txt(c, t("paper scraps", "قصاصات ورق"), W * 0.2, o.table + 14, { s: 10, c: C.muted });
      // hanging rod (pendulum) with charge -6
      var bobX = o.hx + Math.sin(hang.a) * o.hl, bobY = o.hy + Math.cos(hang.a) * o.hl;
      var dx = bobX - tipX, dy = bobY - tipY, dd = Math.max(30, Math.sqrt(dx * dx + dy * dy)), F = q * -6 / (dd * dd) * 9000;
      var fx = F * dx / dd; hang.v += (fx * 0.02 - hang.a * 6) * dt * 6; hang.v *= 0.92; hang.a = Math.max(-0.7, Math.min(0.7, hang.a + hang.v * dt));
      var away = (bobX - o.hx) * (o.hx - tipX) > 0;
      if (Math.abs(hang.a) > 0.12 && dd < 160) { if (F > 0 && away) { tick(2); msg(t("Like charges repel each other.", "الشحنات المتشابهة تتنافر.")); } if (F < 0 && !away) { tick(3); msg(t("Unlike charges attract each other.", "الشحنات المختلفة تتجاذب.")); } }
      c.strokeStyle = C.muted; c.lineWidth = 1; c.beginPath(); c.moveTo(o.hx, o.hy); c.lineTo(bobX, bobY - 6); c.stroke(); c.fillStyle = C.ink; c.fillRect(o.hx - 30, o.hy - 4, 60, 4);
      c.save(); c.translate(bobX, bobY); c.rotate(hang.a); K.rr(c, -32, -6, 64, 12, 6); c.fillStyle = "#1f2937"; c.fill(); for (i = 0; i < 4; i++) K.txt(c, "−", -22 + i * 15, 0, { s: 12, c: "#fde047" }); c.restore();
      K.txt(c, t("hanging ebonite (−)", "إبونيت معلقة (−)"), o.hx, bobY + 22, { s: 10, c: C.muted });
      // electroscope
      var ex = o.ex, ey = o.ey, touch = dist(tipX, tipY, ex, ey - 40) < 26 || dist(rod.x, rod.y, ex, ey - 40) < 26;
      if (touch && Math.abs(q) > 1) { esq = q * 0.6; tick(4); msg(t("Charge passes to the electroscope: both leaves get the same charge and repel, so they diverge.", "تنتقل الشحنة إلى الكشاف فتكتسب الورقتان شحنة متشابهة وتتنافران فتنفرجان.")); }
      var near = Math.max(0, 1 - dist(tipX, tipY, ex, ey - 40) / 120) * Math.abs(q) * 0.4, spread = Math.min(0.9, (Math.abs(esq) + near) * 0.08);
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.arc(ex, ey + 30, 34, Math.PI, 0); c.lineTo(ex + 34, ey + 70); c.lineTo(ex - 34, ey + 70); c.closePath(); c.stroke();
      c.fillStyle = "#d97706"; c.fillRect(ex - 2, ey - 38, 4, 56); c.beginPath(); c.ellipse(ex, ey - 40, 16, 5, 0, 0, Math.PI * 2); c.fill();
      c.fillStyle = "#facc15"; [-1, 1].forEach(function (sd) { c.save(); c.translate(ex, ey + 16); c.rotate(sd * spread); c.fillRect(-2 + sd * 2, 0, 4, 30); c.restore(); });
      K.txt(c, t("electroscope", "الكشاف الكهربي"), ex, ey + 84, { s: 10, c: C.muted });
      // field lines
      if (lines && Math.abs(q) > 0.5) {
        for (i = 0; i < 14; i++) { var a = i * Math.PI * 2 / 14, r1 = 24, r2 = 24 + Math.abs(q) * 8, x1 = rod.x + Math.cos(a) * (o.rl / 2) * 0.9 * Math.abs(Math.cos(a)), y1 = rod.y;
          c.strokeStyle = q > 0 ? "rgba(239,68,68,.55)" : "rgba(59,130,246,.55)"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(x1 + Math.cos(a) * r1, y1 + Math.sin(a) * r1); c.lineTo(x1 + Math.cos(a) * r2, y1 + Math.sin(a) * r2); c.stroke();
          var ax = x1 + Math.cos(a) * (q > 0 ? r2 : r1), ay = y1 + Math.sin(a) * (q > 0 ? r2 : r1), dir = q > 0 ? a : a + Math.PI;
          c.fillStyle = c.strokeStyle; c.beginPath(); c.moveTo(ax, ay); c.lineTo(ax - 7 * Math.cos(dir - 0.4), ay - 7 * Math.sin(dir - 0.4)); c.lineTo(ax - 7 * Math.cos(dir + 0.4), ay - 7 * Math.sin(dir + 0.4)); c.fill(); }
      }
      // rod
      K.rr(c, rod.x - o.rl / 2, rod.y - 7, o.rl, 14, 7); c.fillStyle = RM[rodM][1]; c.fill(); c.strokeStyle = "rgba(0,0,0,.3)"; c.lineWidth = 1; c.stroke();
      var nq = Math.round(Math.abs(q)); for (i = 0; i < nq; i++) K.txt(c, q > 0 ? "+" : "−", rod.x - o.rl / 2 + 12 + i * (o.rl / 2 - 12) / 10, rod.y, { s: 13, c: q > 0 ? "#dc2626" : "#facc15" });
      if (rodM === "cu") { K.txt(c, "✋", rod.x + o.rl / 2 - 8, rod.y + 4, { s: 20 }); }
      // cloth
      K.rr(c, cl.x - 30, cl.y - 16, 60, 32, 8); c.fillStyle = cloth === "wool" ? "#fca5a5" : "#e9d5ff"; c.fill(); c.strokeStyle = "rgba(0,0,0,.2)"; c.stroke();
      K.txt(c, cloth === "wool" ? t("wool", "صوف") : t("silk", "حرير"), cl.x, cl.y - 4, { s: 10, c: "#0f172a" });
      if (q) for (i = 0; i < Math.min(5, nq); i++) K.txt(c, q > 0 ? "−" : "+", cl.x - 20 + i * 10, cl.y + 8, { s: 11, c: "#0f172a" });
    });
  };

  /* =========================================================
     prep1_magnet - bar magnets, compass, iron filings, cutting
     ========================================================= */
  L.prep1_magnet = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the magnets and the compass. Flip the right magnet to face the other with a different pole. Sprinkle iron filings to see the field.", "اسحب المغناطيسين والبوصلة، واقلب المغناطيس الأيمن ليواجه الآخر بقطب مختلف، ورش برادة الحديد لترى المجال."));
    var S = K.make(host, 0.6, 400), mags = [], comp = { x: 0, y: 0 }, drag = null, filings = false, cut = false, last = null;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><button type="button" class="btn sm" id="mgF">🔁 ' + t("Flip the right magnet", "اقلب المغناطيس الأيمن") + '</button><button type="button" class="btn sm tg" id="mgI">✨ ' + t("Iron filings", "برادة الحديد") + '</button><button type="button" class="btn sm" id="mgC">✂️ ' + t("Cut the left magnet", "اقطع المغناطيس الأيسر") + '</button><button type="button" class="btn sm ghost" id="mgR">↺ ' + t("Reset", "إعادة") + '</button></div><div class="meter mg-out"></div>';
    var out = ctl.querySelector(".mg-out");
    var tick = L._goals(host, [t("Bring the compass close to a north pole: its needle points away from it.", "قرّب البوصلة من قطب شمالي: تتجه إبرتها بعيدًا عنه."), t("Make two like poles face each other: repulsion.", "اجعل قطبين متشابهين متقابلين: تنافر."),
      t("Make two unlike poles face each other: attraction.", "اجعل قطبين مختلفين متقابلين: تجاذب."), t("Sprinkle iron filings: where are the lines densest?", "رش برادة الحديد: أين تتزاحم الخطوط؟"), t("Cut a magnet: does each piece still have two poles?", "اقطع مغناطيسًا: هل لكل جزء قطبان؟")], done);
    function reset() { var W = S.W, H = S.H, L0 = Math.min(130, W * 0.2); mags = [{ x: W * 0.28, y: H * 0.5, d: 1, l: L0, vx: 0 }, { x: W * 0.72, y: H * 0.5, d: 1, l: L0, vx: 0 }]; comp.x = W * 0.5; comp.y = H * 0.18; cut = false; say(""); }
    function say(s) { out.innerHTML = (s ? "<span><b>" + s + "</b></span>" : "") + '<span class="sub">' + t("Red = north pole (N), blue = south pole (S).", "الأحمر = القطب الشمالي (N)، والأزرق = القطب الجنوبي (S).") + "</span>"; }
    var lastSay = "", said = {}, lastT = 0;
    function msg(s, force) { var now = performance.now(); if (!force && (s === lastSay || now - lastT < 1500 || (said[s] && now - said[s] < 4000))) return; said[s] = lastT = now; lastSay = s; say(s); E.speak(s); }
    function poles(m) { return [{ x: m.x + m.d * m.l / 2 - m.d * 6, y: m.y, q: 1, m: m }, { x: m.x - m.d * m.l / 2 + m.d * 6, y: m.y, q: -1, m: m }]; }
    function field(x, y, skip) {
      var bx = 0, by = 0; mags.forEach(function (m) { if (m === skip) return; poles(m).forEach(function (p) { var dx = x - p.x, dy = y - p.y, r2 = dx * dx + dy * dy + 60, r = Math.sqrt(r2); bx += p.q * dx / (r2 * r); by += p.q * dy / (r2 * r); }); });
      return { x: bx * 1e4, y: by * 1e4 };
    }
    ctl.querySelector("#mgF").onclick = function () { var m = mags[mags.length - 1]; m.d *= -1; };
    ctl.querySelector("#mgI").onclick = function () { filings = !filings; this.classList.toggle("on", filings); if (filings) { tick(3); msg(t("The filings crowd together at the poles: the magnetic force is strongest there.", "تتزاحم البرادة عند القطبين: قوة المغناطيس أكبر ما يمكن عندهما."), true); } };
    ctl.querySelector("#mgC").onclick = function () {
      if (cut) { E.toast(t("Already cut. Press Reset to start again.", "تم القطع بالفعل. اضغط إعادة للبدء من جديد.")); return; }
      var m = mags[0], h = m.l / 2; cut = true;
      mags.splice(0, 1, { x: m.x - h / 2 - 24, y: m.y, d: m.d, l: h, vx: 0 }, { x: m.x + h / 2 + 24, y: m.y, d: m.d, l: h, vx: 0 });
      tick(4); msg(t("Each piece is a new magnet with its own N and S pole. A single pole can never be isolated.", "كل جزء مغناطيس جديد له قطب شمالي وقطب جنوبي، ولا يمكن الحصول على قطب منفرد."), true);
    };
    ctl.querySelector("#mgR").onclick = reset;
    S.drag({
      down: function (p) {
        if (dist(p.x, p.y, comp.x, comp.y) < 24) { drag = comp; last = p; return true; }
        for (var i = mags.length - 1; i >= 0; i--) { var m = mags[i]; if (Math.abs(p.x - m.x) < m.l / 2 && Math.abs(p.y - m.y) < 16) { drag = m; last = p; return true; } }
        return false;
      },
      move: function (p) { if (drag) { drag.x += p.x - last.x; drag.y += p.y - last.y; last = p; } },
      up: function () { drag = null; },
      hover: function (p) { return dist(p.x, p.y, comp.x, comp.y) < 24 || mags.some(function (m) { return Math.abs(p.x - m.x) < m.l / 2 && Math.abs(p.y - m.y) < 16; }); }
    });
    reset(); say("");
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i, j;
      c.clearRect(0, 0, W, H);
      mags.forEach(function (m) { m.x = Math.max(m.l / 2, Math.min(W - m.l / 2, m.x)); m.y = Math.max(16, Math.min(H - 16, m.y)); });
      if (filings) {
        for (var gx = 9; gx < W; gx += 16) for (var gy = 9; gy < H; gy += 16) {
          if (mags.some(function (m) { return Math.abs(gx - m.x) < m.l / 2 + 2 && Math.abs(gy - m.y) < 14; })) continue;
          var B = field(gx, gy), bm = Math.sqrt(B.x * B.x + B.y * B.y); if (bm < 0.02) continue;
          var ux = B.x / bm, uy = B.y / bm; c.strokeStyle = "rgba(100,116,139," + Math.min(0.95, 0.08 + bm * 0.3) + ")"; c.lineWidth = 1.4;
          c.beginPath(); c.moveTo(gx - ux * 5, gy - uy * 5); c.lineTo(gx + ux * 5, gy + uy * 5); c.stroke();
        }
      }
      // forces between neighbouring facing poles
      var best = null;
      for (i = 0; i < mags.length; i++) for (j = i + 1; j < mags.length; j++) poles(mags[i]).forEach(function (a) { poles(mags[j]).forEach(function (b) { var d = dist(a.x, a.y, b.x, b.y); if (!best || d < best.d) best = { a: a, b: b, d: d }; }); });
      if (best && best.d < 50 && Math.abs(best.a.y - best.b.y) < 40) {
        var like = best.a.q === best.b.q, ma = best.a.m, mb = best.b.m, dir = mb.x > ma.x ? 1 : -1, push = (like ? 1 : -1) * 40 * dt;
        if (drag !== mb && !(cut && !like)) mb.x += dir * push; if (drag !== ma && !(cut && !like)) ma.x -= dir * push;
        if (!like && best.d < 22) { if (drag !== mb) mb.x = ma.x + dir * (ma.l / 2 + mb.l / 2); }
        if (like) { tick(1); msg(t("Like poles repel each other.", "الأقطاب المتشابهة تتنافر.")); } else { tick(2); msg(t("Unlike poles attract each other.", "الأقطاب المختلفة تتجاذب.")); }
        c.strokeStyle = like ? "#ef4444" : "#16a34a"; c.lineWidth = 3; var mx = (best.a.x + best.b.x) / 2, my = best.a.y - 26;
        c.beginPath(); c.moveTo(mx - 24, my); c.lineTo(mx + 24, my); c.stroke(); K.txt(c, like ? t("repel", "تنافر") : t("attract", "تجاذب"), mx, my - 12, { s: 12, c: like ? "#ef4444" : "#16a34a" });
      }
      mags.forEach(function (m) {
        var lx = m.x - m.l / 2; c.fillStyle = m.d > 0 ? "#2563eb" : "#dc2626"; c.fillRect(lx, m.y - 13, m.l / 2, 26); c.fillStyle = m.d > 0 ? "#dc2626" : "#2563eb"; c.fillRect(m.x, m.y - 13, m.l / 2, 26);
        K.txt(c, m.d > 0 ? "S" : "N", lx + 12, m.y, { s: 14, c: "#fff" }); K.txt(c, m.d > 0 ? "N" : "S", lx + m.l - 12, m.y, { s: 14, c: "#fff" });
      });
      var B = field(comp.x, comp.y), an = Math.atan2(B.y, B.x);
      K.dot(c, comp.x, comp.y, 22, C.card, C.ink);
      c.save(); c.translate(comp.x, comp.y); c.rotate(an); c.fillStyle = "#dc2626"; c.beginPath(); c.moveTo(18, 0); c.lineTo(0, -5); c.lineTo(0, 5); c.fill(); c.fillStyle = "#64748b"; c.beginPath(); c.moveTo(-18, 0); c.lineTo(0, -5); c.lineTo(0, 5); c.fill(); c.restore();
      mags.forEach(function (m) { var np = poles(m)[0]; if (dist(comp.x, comp.y, np.x + m.d * 20, np.y) < 50) { tick(0); msg(t("The compass needle's north end points away from the magnet's north pole, along the field line.", "يتجه الطرف الشمالي لإبرة البوصلة بعيدًا عن القطب الشمالي للمغناطيس في اتجاه خط المجال.")); } });
    });
  };
})();
/* ---------- Prep 1 simulations (part B): gravity, cells, life processes, microbes, solar system, lunar eclipse ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var T = function (p) { return typeof p === "string" ? p : (E.isAr() ? p[1] : p[0]); };
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }
  function r1(x) { return Math.round(x * 10) / 10; }
  function arrow(c, x1, y1, x2, y2, col, w) {
    var a = Math.atan2(y2 - y1, x2 - x1); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = w || 3;
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2 - 8 * Math.cos(a), y2 - 8 * Math.sin(a)); c.stroke();
    c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - 12 * Math.cos(a - 0.45), y2 - 12 * Math.sin(a - 0.45)); c.lineTo(x2 - 12 * Math.cos(a + 0.45), y2 - 12 * Math.sin(a + 0.45)); c.fill();
  }

  /* =========================================================
     prep1_gravity - mutual attraction + weight on Earth, Moon, space
     ========================================================= */
  L.prep1_gravity = function (host, cfg, done) {
    host.innerHTML = hint(t("Two masses: change the masses and the distance and watch the pair of forces. Weight: hang a mass on the spring balance in different places.", "كتلتان: غيّر الكتلتين والمسافة وراقب زوج القوى. الوزن: علّق كتلة في الميزان الزنبركي في أماكن مختلفة.")) + '<div class="seg" id="gvm"></div>';
    var S = K.make(host, 0.52, 340), mode = "pair", m1 = 2, m2 = 2, d = 2, snap = null, mass = 6, loc = "earth", seen = {}, pts = [];
    var G = { earth: [10, t("Earth", "الأرض"), "10"], moon: [10 / 6, t("Moon", "القمر"), "(10 ÷ 6)"], space: [0, t("Outer space", "الفضاء الخارجي"), "0"] };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="gv-p">' + L._slider(t("Mass 1", "الكتلة ١"), 1, 10, 1, m1, "kg") + L._slider(t("Mass 2", "الكتلة ٢"), 1, 10, 1, m2, "kg") + L._slider(t("Distance between centres", "المسافة بين المركزين"), 1, 8, 1, d, "m") + '</div>' +
      '<div class="gv-w" hidden>' + L._slider(t("Mass", "الكتلة"), 1, 10, 1, mass, "kg") + '<div class="seg" id="gvl"></div></div><div class="meter gv-out"></div>';
    var out = ctl.querySelector(".gv-out"), ins = ctl.querySelectorAll("input"), sl = ctl.querySelectorAll(".slv");
    var tick = L._goals(host, [t("Increase a mass and watch the attraction force grow.", "زد إحدى الكتلتين وراقب قوة التجاذب تزداد."), t("Double the distance: the force becomes a quarter.", "ضاعف المسافة: تصبح القوة الربع."),
      t("Weigh 6 kg on the Moon.", "زن ٦ كجم على سطح القمر."), t("Make the weight zero.", "اجعل الوزن صفرًا.")], done);
    K.seg(host, "#gvm", [["pair", t("Two masses", "كتلتان")], ["weight", t("Mass and weight", "الكتلة والوزن")]], mode, function (v) { mode = v; ctl.querySelector(".gv-p").hidden = v !== "pair"; ctl.querySelector(".gv-w").hidden = v !== "weight"; upd(); });
    K.seg(ctl, "#gvl", Object.keys(G).map(function (k) { return [k, G[k][1]]; }), loc, function (v) { loc = v; upd(); });
    function F() { return m1 * m2 / (d * d); }
    function takeSnap() { snap = { m1: m1, m2: m2, d: d, F: F() }; }
    takeSnap();
    function upd() {
      sl[0].textContent = n(m1) + " kg"; sl[1].textContent = n(m2) + " kg"; sl[2].textContent = n(d) + " m"; sl[3].textContent = n(mass) + " kg";
      if (mode === "pair") {
        out.innerHTML = "<span>" + t("Force on each mass: ", "القوة على كل كتلة: ") + eq("F ∝ m₁ × m₂ ÷ d² = " + m1 + " × " + m2 + " ÷ " + d * d + " = " + r1(F())) + " " + t("units", "وحدة") + "</span><span class=\"sub\">" + t("Equal in size, opposite in direction, always attraction.", "متساويتان في المقدار ومتضادتان في الاتجاه، وهما تجاذب دائمًا.") + "</span>";
      } else {
        var g = G[loc][0], W = mass * g;
        out.innerHTML = "<span>" + G[loc][1] + ": " + eq("g = " + (loc === "moon" ? "10 ÷ 6 ≈ 1.67" : G[loc][2]) + " N/kg") + "</span><span>" + eq("W = m × g = " + mass + " × " + G[loc][2] + " = " + r1(W) + " N") + "</span><span>" + t("Mass stays ", "الكتلة تبقى ") + eq(mass + " kg") + t(" everywhere.", " في كل مكان.") + "</span>";
        var k = loc + mass; if (!seen[k]) { seen[k] = 1; pts.push([mass, W, loc]); }
        if (loc === "moon" && mass === 6) tick(2);
        if (loc === "space") tick(3);
      }
    }
    ins[0].oninput = function () { var o = F(); m1 = +ins[0].value; if (F() > o) tick(0); takeSnap(); upd(); };
    ins[1].oninput = function () { var o = F(); m2 = +ins[1].value; if (F() > o) tick(0); takeSnap(); upd(); };
    ins[2].oninput = function () { d = +ins[2].value; if (snap && d >= 2 * snap.d && snap.m1 === m1 && snap.m2 === m2) { tick(1); E.speak(t("Twice the distance, one quarter of the force.", "ضعف المسافة، ربع القوة.")); } upd(); };
    ins[3].oninput = function () { mass = +ins[3].value; upd(); };
    upd();
    var wob = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H); wob += dt;
      if (mode === "pair") {
        var sc = (W - 140) / 8, cx = W / 2, ra = 10 + Math.cbrt(m1) * 10, rb = 10 + Math.cbrt(m2) * 10, half = Math.max(d * sc, ra + rb + 8) / 2, x1 = cx - half, x2 = cx + half, y = H * 0.48;
        c.strokeStyle = C.line; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(x1, y); c.lineTo(x2, y); c.stroke(); c.setLineDash([]);
        K.txt(c, "d = " + n(d) + " m", cx, H - 40, { s: 12, c: C.muted });
        K.dot(c, x1, y, ra, "#f59e0b", "rgba(0,0,0,.3)"); K.dot(c, x2, y, rb, "#8b5cf6", "rgba(0,0,0,.3)");
        K.txt(c, n(m1) + " kg", x1, y, { s: 11, c: "#0f172a" }); K.txt(c, n(m2) + " kg", x2, y, { s: 11, c: "#fff" });
        var L2 = Math.min(Math.max(12, 12 + F() * 10), 130);
        arrow(c, x1, y - ra - 14, x1 + L2, y - ra - 14, "#16a34a"); arrow(c, x2, y + rb + 14, x2 - L2, y + rb + 14, "#16a34a");
        K.txt(c, "F", x1 + L2 / 2, y - ra - 28, { s: 12, c: "#16a34a" }); K.txt(c, "F", x2 - L2 / 2, y + rb + 28, { s: 12, c: "#16a34a" });
        var bw = W * 0.5, bx = W * 0.25; c.fillStyle = C.line; c.fillRect(bx, H - 22, bw, 10); c.fillStyle = "#16a34a"; c.fillRect(bx, H - 22, bw * Math.min(1, Math.sqrt(F() / 100)), 10);
        K.txt(c, t("force size", "مقدار القوة"), bx - 6, H - 17, { s: 10, c: C.muted, a: "right" });
      } else {
        var g = G[loc][0], Wt = mass * g, px = W * 0.25, top = 20, sp = 40 + Wt * 1.6, bob = Math.sin(wob * 3) * (g ? 1 : 3);
        c.fillStyle = C.ink; c.fillRect(px - 40, top - 6, 80, 6);
        c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(px, top); for (var i = 0; i <= 16; i++) c.lineTo(px + (i % 2 ? 9 : -9), top + 8 + i * sp / 16); c.lineTo(px, top + 14 + sp); c.stroke();
        K.rr(c, px - 22, top + 14 + sp + bob, 44, 34, 6); c.fillStyle = "#64748b"; c.fill(); K.txt(c, n(mass) + " kg", px, top + 31 + sp + bob, { s: 12, c: "#fff" });
        K.rr(c, px + 34, top, 46, 140, 6); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.line; c.stroke();
        for (var k = 0; k <= 100; k += 20) { var ty = top + 10 + k * 1.2; c.fillStyle = C.muted; c.fillRect(px + 34, ty, 8, 1.5); K.txt(c, String(k), px + 58, ty, { s: 9, c: C.muted }); }
        c.fillStyle = "#dc2626"; c.fillRect(px + 34, top + 10 + Wt * 1.2 - 1, 22, 3); K.txt(c, r1(Wt) + " N", px + 57, top + 152, { s: 12, c: C.ink });
        K.txt(c, G[loc][1], px, H - 12, { s: 12, c: C.muted });
        var gx = W * 0.52, gy = 20, gw = W * 0.44, gh = H - 50;
        c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx, gy + gh); c.lineTo(gx + gw, gy + gh); c.stroke();
        K.txt(c, t("weight (N)", "الوزن (N)"), gx + 4, gy - 6, { s: 10, c: C.muted, a: "left" }); K.txt(c, t("mass (kg) →", "الكتلة (kg) ←"), gx + gw, gy + gh + 14, { s: 10, c: C.muted, a: "right" });
        Object.keys(G).forEach(function (lk) { var gg = G[lk][0]; c.strokeStyle = lk === loc ? "#f97316" : C.line; c.lineWidth = lk === loc ? 2 : 1; c.beginPath(); c.moveTo(gx, gy + gh); c.lineTo(gx + gw, gy + gh - gh * gg * 10 / 100); c.stroke(); });
        pts.forEach(function (p) { K.dot(c, gx + gw * p[0] / 10, gy + gh - gh * p[1] / 100, 4, p[2] === "earth" ? "#2563eb" : p[2] === "moon" ? "#a3a3a3" : "#7c3aed"); });
      }
    });
  };

  /* =========================================================
     prep1_cell - zoom into animal, plant and bacterial cells
     ========================================================= */
  L.prep1_cell = function (host, cfg, done) {
    var INFO = {
      wall: [t("Cell wall", "الجدار الخلوي"), t("A firm outer layer that supports and protects the cell. Found in plant and bacterial cells, not in animal cells.", "طبقة خارجية صلبة تدعم الخلية وتحميها، توجد في الخلية النباتية والبكتيرية ولا توجد في الخلية الحيوانية.")],
      mem: [t("Plasma membrane", "الغشاء البلازمي"), t("A thin layer around the cytoplasm. Found in all three cells.", "غشاء رقيق يحيط بالسيتوبلازم، يوجد في الخلايا الثلاث.")],
      cyto: [t("Cytoplasm", "السيتوبلازم"), t("The jelly-like material filling the cell where the organelles are found. Found in all three cells.", "مادة شبه هلامية تملأ الخلية وتوجد بها العضيات، يوجد في الخلايا الثلاث.")],
      nuc: [t("Nucleus", "النواة"), t("A true nucleus: the genetic material is surrounded by a nuclear membrane. Found in animal and plant cells (eukaryotes).", "نواة حقيقية: المادة الوراثية محاطة بغشاء نووي، توجد في الخلية الحيوانية والنباتية (حقيقيات النواة).")],
      gen: [t("Genetic material (no nucleus)", "المادة الوراثية (بدون نواة)"), t("In bacteria the genetic material lies free in the cytoplasm, not surrounded by a nuclear membrane: a prokaryote.", "في البكتيريا توجد المادة الوراثية في السيتوبلازم غير محاطة بغشاء نووي، لذلك هي من بدائيات النواة.")],
      mito: [t("Mitochondria", "الميتوكوندريا"), t("Where cellular respiration releases energy from food. Found in animal and plant cells.", "يحدث فيها التنفس الخلوي فتنطلق الطاقة من الغذاء، توجد في الخلية الحيوانية والنباتية.")],
      golgi: [t("Golgi apparatus", "جهاز جولجي"), t("Stacks of membranes in animal and plant cells.", "أكياس غشائية متراصة توجد في الخلية الحيوانية والنباتية.")],
      er: [t("Endoplasmic reticulum", "الشبكة الإندوبلازمية"), t("A network of channels in the cytoplasm of animal and plant cells.", "شبكة من القنوات في سيتوبلازم الخلية الحيوانية والنباتية.")],
      ribo: [t("Ribosomes", "الريبوسومات"), t("Tiny grains found in all three cells, even bacteria.", "حبيبات دقيقة توجد في الخلايا الثلاث حتى البكتيريا.")],
      cent: [t("Centrosome", "الجسم المركزي"), t("Found in the animal cell only, near the nucleus.", "يوجد في الخلية الحيوانية فقط بالقرب من النواة.")],
      chl: [t("Chloroplast", "البلاستيدة الخضراء"), t("Contains green chlorophyll for photosynthesis. Found in plant cells only.", "تحتوي على الكلوروفيل الأخضر للبناء الضوئي، توجد في الخلية النباتية فقط.")],
      vac: [t("Vacuole", "الفجوة"), t("A sac of cell sap. Large in the plant cell; small or few in the animal cell.", "كيس يحتوي على العصير الخلوي، كبيرة في الخلية النباتية وصغيرة أو قليلة في الخلية الحيوانية.")]
    };
    host.innerHTML = hint(t("Choose a cell and drag the zoom slider up. When the organelles appear, tap them to learn what they are.", "اختر خلية واسحب شريط التكبير لأعلى، وعندما تظهر العضيات اضغط عليها لتعرفها.")) + '<div class="seg" id="clk"></div>';
    var S = K.make(host, 0.56, 360), kind = "animal", zoom = 40, hits = [], sel = null, tm = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Microscope magnification", "قوة تكبير المجهر"), 40, 1000, 20, zoom, "×") + '<div class="meter cl-out"></div>';
    var out = ctl.querySelector(".cl-out"), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var tick = L._goals(host, [t("Zoom to ×400 or more to see the organelles.", "كبّر إلى ×٤٠٠ أو أكثر لترى العضيات."), t("Find the chloroplast in the plant cell.", "اعثر على البلاستيدة الخضراء في الخلية النباتية."),
      t("Find the centrosome in the animal cell.", "اعثر على الجسم المركزي في الخلية الحيوانية."), t("Find where the genetic material is in the bacterial cell.", "اعثر على مكان المادة الوراثية في الخلية البكتيرية.")], done);
    K.seg(host, "#clk", [["animal", t("Animal cell", "خلية حيوانية")], ["plant", t("Plant cell", "خلية نباتية")], ["bact", t("Bacterial cell", "خلية بكتيرية")]], kind, function (v) { kind = v; sel = null; info(); });
    function info() {
      slv.textContent = "×" + n(zoom);
      if (!sel) { out.innerHTML = '<span class="sub">' + (zoom < 400 ? t("Too small to see the parts. Zoom in.", "صغيرة جدًا لرؤية أجزائها، كبّر أكثر.") : t("Tap a part of the cell.", "اضغط على جزء من الخلية.")) + "</span>" + '<span>' + (kind === "bact" ? t("Prokaryote: unicellular, very small, no true nucleus.", "من بدائيات النواة: وحيدة الخلية، صغيرة جدًا، وليس لها نواة حقيقية.") : t("Eukaryote: has a true nucleus.", "من حقيقيات النواة: لها نواة حقيقية.")) + "</span>"; return; }
      out.innerHTML = "<span><b>" + INFO[sel][0] + "</b></span><span>" + INFO[sel][1] + "</span>";
    }
    inp.oninput = function () { zoom = +inp.value; if (zoom >= 400) tick(0); info(); };
    info();
    S.drag({ down: function (p) {
      if (zoom < 400) { E.toast(t("Zoom in more first.", "كبّر أكثر أولًا.")); return false; }
      var h = null; for (var i = hits.length - 1; i >= 0; i--) { var q = hits[i]; if (q.ring ? Math.abs(dist(p.x, p.y, q.x, q.y) - q.r) < 7 : dist(p.x, p.y, q.x, q.y) < q.r) { h = q; break; } }
      if (!h) return false; sel = h.k; info(); E.speak(INFO[sel][0]);
      if (sel === "chl") tick(1); if (sel === "cent") tick(2); if (sel === "gen") tick(3); return true;
    } });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, cx = W / 2, cy = H / 2, base = Math.min(W * 0.42, H * 0.44), R = base * zoom / 1000 * (kind === "bact" ? 0.62 : 1); tm += dt;
      c.clearRect(0, 0, W, H); hits = [];
      K.txt(c, "×" + n(zoom), W - 12, 16, { s: 12, c: C.muted, a: "right" });
      c.save(); c.beginPath(); c.arc(cx, cy, Math.min(W, H) * 0.49, 0, Math.PI * 2); c.clip();
      function H2(k, x, y, r, ring) { hits.push({ k: k, x: cx + x * R, y: cy + y * R, r: ring ? R * (ring) : r * R, ring: !!ring }); }
      function blob(x, y, rx, ry, col, stroke) { c.beginPath(); c.ellipse(cx + x * R, cy + y * R, rx * R, ry * R, 0, 0, Math.PI * 2); c.fillStyle = col; c.fill(); if (stroke) { c.strokeStyle = stroke; c.lineWidth = Math.max(1, R * 0.015); c.stroke(); } }
      var show = zoom >= 400;
      if (kind === "animal") {
        blob(0, 0, 1, 0.82, "rgba(251,207,232,.75)", "#db2777"); H2("cyto", 0.55, 0.35, 0.2); H2("mem", 0, 0, 0, 0); hits[hits.length - 1].r = R; hits[hits.length - 1].ring = true;
        if (show) {
          blob(-0.05, 0, 0.3, 0.27, "rgba(147,51,234,.35)", "#7e22ce"); blob(-0.05, 0, 0.1, 0.1, "#7e22ce"); H2("nuc", -0.05, 0, 0.3);
          [[0.55, -0.3], [-0.6, 0.35]].forEach(function (m) { blob(m[0], m[1], 0.16, 0.08, "#fb923c", "#c2410c"); H2("mito", m[0], m[1], 0.16); });
          for (var gi = 0; gi < 3; gi++) { c.strokeStyle = "#0d9488"; c.lineWidth = Math.max(1.5, R * 0.025); c.beginPath(); c.ellipse(cx + 0.45 * R, cy + (0.15 + gi * 0.07) * R, 0.16 * R, 0.03 * R, 0, Math.PI, 0); c.stroke(); } H2("golgi", 0.45, 0.2, 0.15);
          c.strokeStyle = "#2563eb"; c.lineWidth = Math.max(1, R * 0.015); c.beginPath(); for (var ei = 0; ei < 5; ei++) c.arc(cx - 0.45 * R, cy - 0.38 * R + ei * 0.05 * R, 0.12 * R, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); H2("er", -0.45, -0.3, 0.14);
          for (var ri = 0; ri < 10; ri++) K.dot(c, cx + (-0.2 + (ri % 5) * 0.06) * R, cy + (0.45 + Math.floor(ri / 5) * 0.06) * R, Math.max(1.2, R * 0.012), "#1e3a8a"); H2("ribo", -0.08, 0.48, 0.12);
          c.strokeStyle = "#16a34a"; c.lineWidth = Math.max(2, R * 0.03); c.beginPath(); c.moveTo(cx + 0.22 * R, cy - 0.32 * R); c.lineTo(cx + 0.3 * R, cy - 0.32 * R); c.moveTo(cx + 0.26 * R, cy - 0.37 * R); c.lineTo(cx + 0.26 * R, cy - 0.27 * R); c.stroke(); H2("cent", 0.26, -0.32, 0.08);
          blob(-0.55, -0.02, 0.07, 0.07, "rgba(186,230,253,.9)", "#0284c7"); H2("vac", -0.55, -0.02, 0.07);
        }
      } else if (kind === "plant") {
        K.rr(c, cx - R, cy - 0.78 * R, 2 * R, 1.56 * R, R * 0.12); c.fillStyle = "rgba(134,239,172,.35)"; c.fill(); c.strokeStyle = "#15803d"; c.lineWidth = Math.max(2, R * 0.05); c.stroke();
        K.rr(c, cx - 0.92 * R, cy - 0.7 * R, 1.84 * R, 1.4 * R, R * 0.1); c.strokeStyle = "#65a30d"; c.lineWidth = Math.max(1, R * 0.012); c.stroke();
        hits.push({ k: "wall", x: cx, y: cy - 0.78 * R, r: Math.max(8, 0.05 * R) }); hits.push({ k: "wall", x: cx - R, y: cy, r: Math.max(8, 0.05 * R) }); hits.push({ k: "mem", x: cx + 0.92 * R, y: cy, r: Math.max(7, 0.03 * R) }); hits.push({ k: "mem", x: cx, y: cy + 0.7 * R, r: Math.max(7, 0.03 * R) });
        H2("cyto", -0.75, 0.5, 0.12);
        if (show) {
          blob(0.1, 0.02, 0.55, 0.42, "rgba(186,230,253,.8)", "#0284c7"); H2("vac", 0.1, 0.02, 0.4);
          blob(-0.68, -0.35, 0.17, 0.15, "rgba(147,51,234,.35)", "#7e22ce"); blob(-0.68, -0.35, 0.06, 0.06, "#7e22ce"); H2("nuc", -0.68, -0.35, 0.17);
          [[-0.72, 0.15], [0.75, -0.5], [0.78, 0.5], [-0.3, 0.58]].forEach(function (m) { blob(m[0], m[1], 0.13, 0.07, "#22c55e", "#15803d"); H2("chl", m[0], m[1], 0.13); });
          blob(0.72, 0.02, 0.1, 0.05, "#fb923c", "#c2410c"); H2("mito", 0.72, 0.02, 0.1);
          for (var g2 = 0; g2 < 3; g2++) { c.strokeStyle = "#0d9488"; c.lineWidth = Math.max(1.5, R * 0.02); c.beginPath(); c.ellipse(cx - 0.35 * R, cy + (-0.6 + g2 * 0.05) * R, 0.12 * R, 0.025 * R, 0, Math.PI, 0); c.stroke(); } H2("golgi", -0.35, -0.55, 0.1);
          c.strokeStyle = "#2563eb"; c.lineWidth = Math.max(1, R * 0.012); c.beginPath(); for (var e2 = 0; e2 < 4; e2++) c.arc(cx + 0.35 * R, cy - 0.58 * R + e2 * 0.04 * R, 0.1 * R, Math.PI * 1.1, Math.PI * 1.9); c.stroke(); H2("er", 0.35, -0.55, 0.1);
          for (var r2 = 0; r2 < 8; r2++) K.dot(c, cx + (0.25 + (r2 % 4) * 0.05) * R, cy + (0.55 + Math.floor(r2 / 4) * 0.05) * R, Math.max(1.2, R * 0.01), "#1e3a8a"); H2("ribo", 0.32, 0.58, 0.1);
        }
      } else {
        K.rr(c, cx - R, cy - 0.42 * R, 2 * R, 0.84 * R, 0.42 * R); c.fillStyle = "rgba(253,230,138,.55)"; c.fill(); c.strokeStyle = "#a16207"; c.lineWidth = Math.max(2, R * 0.05); c.stroke();
        K.rr(c, cx - 0.93 * R, cy - 0.35 * R, 1.86 * R, 0.7 * R, 0.35 * R); c.strokeStyle = "#ca8a04"; c.lineWidth = Math.max(1, R * 0.012); c.stroke();
        hits.push({ k: "wall", x: cx, y: cy - 0.42 * R, r: Math.max(8, 0.05 * R) }); hits.push({ k: "mem", x: cx, y: cy + 0.35 * R, r: Math.max(7, 0.03 * R) }); H2("cyto", -0.6, 0.12, 0.12);
        if (show) {
          c.strokeStyle = "#7e22ce"; c.lineWidth = Math.max(1.5, R * 0.02); c.beginPath(); for (var a = 0; a <= 40; a++) { var xx = cx + (-0.35 + a * 0.0175) * R, yy = cy + Math.sin(a * 0.9 + tm) * 0.12 * R; if (a) c.lineTo(xx, yy); else c.moveTo(xx, yy); } c.stroke(); H2("gen", 0, 0, 0.3);
          for (var r3 = 0; r3 < 10; r3++) K.dot(c, cx + (0.5 + (r3 % 5) * 0.06) * R, cy + (-0.12 + Math.floor(r3 / 5) * 0.12) * R, Math.max(1.2, R * 0.015), "#1e3a8a"); H2("ribo", 0.62, -0.06, 0.15);
        }
      }
      c.restore();
      if (sel) hits.filter(function (h) { return h.k === sel; }).slice(0, 1).forEach(function (h) { c.strokeStyle = "#f97316"; c.lineWidth = 2.5; c.beginPath(); c.arc(h.x, h.y, h.ring ? h.r : h.r + 4, 0, Math.PI * 2); c.stroke(); });
    });
  };

  /* =========================================================
     prep1_life - leaf gas exchange + movement of unicellular organisms
     ========================================================= */
  L.prep1_life = function (host, cfg, done) {
    host.innerHTML = hint(t("Leaf: change the light and open or close the stomata. Watch which gases go in and out. Pond: tap each tiny organism to see how it moves.", "الورقة: غيّر شدة الضوء وافتح الثغور أو أغلقها، وراقب الغازات الداخلة والخارجة. البركة: اضغط على كل كائن دقيق لترى كيف يتحرك.")) + '<div class="seg" id="lfm"></div>';
    var S = K.make(host, 0.55, 360), mode = "leaf", light = 70, open = true, glu = 0, gas = [], dark = 0, seen = {}, sel = null, orgs = [], tm = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="lf-l">' + L._slider(t("Light", "الضوء"), 0, 100, 5, light, "%") + '<div class="btn-row"><button type="button" class="btn sm tg on" id="lfS">🫧 ' + t("Stomata open", "الثغور مفتوحة") + '</button></div></div><div class="meter lf-out"></div>';
    var out = ctl.querySelector(".lf-out"), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var tick = L._goals(host, [t("Make the leaf store glucose with plenty of light.", "اجعل الورقة تخزن الجلوكوز في ضوء وفير."), t("Turn the light off: what does the plant still do at night?", "أطفئ الضوء: ماذا يظل النبات يفعل ليلًا؟"),
      t("Close the stomata in bright light: what happens?", "أغلق الثغور في الضوء الساطع: ماذا يحدث؟"), t("Pond: watch all three organisms move.", "البركة: شاهد الكائنات الثلاثة تتحرك.")], done);
    K.seg(host, "#lfm", [["leaf", t("Leaf", "الورقة")], ["pond", t("Pond drop", "قطرة من البركة")]], mode, function (v) { mode = v; ctl.querySelector(".lf-l").hidden = v !== "leaf"; upd(); });
    var ORG = { amoeba: [t("Amoeba", "الأميبا"), t("moves using pseudopodia (false feet)", "تتحرك بالأقدام الكاذبة")], euglena: [t("Euglena", "اليوجلينا"), t("moves using a flagellum", "تتحرك بالسوط")], para: [t("Paramecium", "البراميسيوم"), t("moves using cilia", "يتحرك بالأهداب")] };
    function rates() { var P = light / 100 * (open ? 10 : 1.2), R = 2; return { P: P, R: R }; }
    function upd() {
      slv.textContent = n(light) + "%";
      if (mode === "leaf") {
        var r = rates(), net = r.P - r.R;
        out.innerHTML = "<span>" + t("Photosynthesis (light, chlorophyll): ", "البناء الضوئي (ضوء، كلوروفيل): ") + "<b>" + t("carbon dioxide + water → glucose + oxygen", "ثاني أكسيد الكربون + ماء ← جلوكوز + أكسجين") + "</b> · " + n(Math.round(r.P * 10)) + "%</span>" +
          "<span>" + t("Cellular respiration (day and night): ", "التنفس الخلوي (ليلًا ونهارًا): ") + "<b>" + t("glucose + oxygen → carbon dioxide + water + energy", "جلوكوز + أكسجين ← ثاني أكسيد الكربون + ماء + طاقة") + "</b></span>" +
          "<span>" + t("Net: ", "المحصلة: ") + (net > 0.2 ? t("oxygen goes OUT, carbon dioxide goes IN", "يخرج الأكسجين ويدخل ثاني أكسيد الكربون") : net < -0.2 ? t("carbon dioxide goes OUT, oxygen goes IN", "يخرج ثاني أكسيد الكربون ويدخل الأكسجين") : t("about balanced", "متوازنة تقريبًا")) + "</span>" +
          "<span>" + t("Glucose store: ", "مخزون الجلوكوز: ") + "<b>" + n(Math.round(glu)) + "%</b></span>";
      } else {
        out.innerHTML = sel ? "<span><b>" + ORG[sel][0] + "</b> " + ORG[sel][1] + "</span>" : '<span class="sub">' + t("Tap an organism.", "اضغط على كائن.") + "</span>";
      }
    }
    inp.oninput = function () { light = +inp.value; upd(); };
    ctl.querySelector("#lfS").onclick = function () { open = !open; this.classList.toggle("on", open); this.innerHTML = "🫧 " + (open ? t("Stomata open", "الثغور مفتوحة") : t("Stomata closed", "الثغور مغلقة")); if (!open && light >= 50) { tick(2); E.speak(t("Little carbon dioxide can enter, so photosynthesis slows down.", "يدخل قليل من ثاني أكسيد الكربون فيبطؤ البناء الضوئي.")); } upd(); };
    function initOrgs() { var W = S.W, H = S.H; orgs = [{ k: "amoeba", x: W * 0.25, y: H * 0.4, a: 0.3 }, { k: "euglena", x: W * 0.6, y: H * 0.3, a: 2 }, { k: "para", x: W * 0.5, y: H * 0.72, a: 4 }]; }
    initOrgs();
    S.drag({ down: function (p) {
      if (mode !== "pond") return false;
      for (var i = 0; i < orgs.length; i++) if (dist(p.x, p.y, orgs[i].x, orgs[i].y) < 40) { sel = orgs[i].k; seen[sel] = 1; upd(); E.speak(ORG[sel][0] + " " + ORG[sel][1]); if (Object.keys(seen).length === 3) tick(3); return true; }
      return false;
    } });
    upd();
    var acc = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i; tm += dt; c.clearRect(0, 0, W, H);
      if (mode === "leaf") {
        var r = rates(), net = r.P - r.R; glu = Math.max(0, Math.min(100, glu + net * dt * 3)); acc += dt;
        if (light === 0) { dark += dt; if (dark > 1.2) tick(1); } else dark = 0;
        if (glu > 60 && light >= 50 && open) tick(0);
        if (acc > 0.5) { acc = 0; upd(); }
        var sx = W * 0.12, sy = H * 0.18, bri = light / 100;
        K.dot(c, sx, sy, 26, "rgba(250,204,21," + (0.15 + bri * 0.85) + ")"); for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; c.strokeStyle = "rgba(250,204,21," + bri + ")"; c.lineWidth = 3; c.beginPath(); c.moveTo(sx + Math.cos(a) * 32, sy + Math.sin(a) * 32); c.lineTo(sx + Math.cos(a) * 42, sy + Math.sin(a) * 42); c.stroke(); }
        if (!light) K.txt(c, "🌙 " + t("night", "ليل"), sx, sy + 52, { s: 12, c: C.ink });
        var lx = W * 0.55, ly = H * 0.5, lw = W * 0.3, lh = H * 0.28;
        c.fillStyle = "#4ade80"; c.beginPath(); c.moveTo(lx - lw, ly); c.quadraticCurveTo(lx, ly - lh * 1.6, lx + lw, ly); c.quadraticCurveTo(lx, ly + lh * 1.6, lx - lw, ly); c.fill();
        c.strokeStyle = "#15803d"; c.lineWidth = 3; c.beginPath(); c.moveTo(lx - lw - 30, ly + 10); c.lineTo(lx + lw * 0.9, ly); c.stroke();
        for (i = 0; i < 3; i++) { var ox2 = lx - lw * 0.4 + i * lw * 0.4, oy2 = ly + lh * 0.4; c.fillStyle = "#166534"; c.beginPath(); c.ellipse(ox2 - 5, oy2, 4, 9, 0, 0, Math.PI * 2); c.ellipse(ox2 + 5, oy2, 4, 9, 0, 0, Math.PI * 2); c.fill(); if (open) { c.fillStyle = "#052e16"; c.beginPath(); c.ellipse(ox2, oy2, 2, 6, 0, 0, Math.PI * 2); c.fill(); } }
        K.txt(c, t("stomata", "الثغور"), lx, ly + lh * 0.4 + 22, { s: 10, c: C.muted });
        K.txt(c, net > 0.2 ? t("CO₂ in ↑ · O₂ out ↓", "يدخل CO₂ ↑ · يخرج O₂ ↓") : net < -0.2 ? t("O₂ in ↑ · CO₂ out ↓", "يدخل O₂ ↑ · يخرج CO₂ ↓") : t("balanced", "متوازن"), lx, H - 12, { s: 11, c: C.ink });
        if (Math.random() < (1.2 + Math.abs(net) * 0.5) * dt) {
          var inCO2 = net > 0; gas.push({ k: inCO2 ? "co2" : "o2", x: lx + K.rnd(-lw * 0.6, lw * 0.6), y: ly + lh * 0.4, dir: 1, life: 2.4 });
          gas.push({ k: inCO2 ? "o2" : "co2", x: lx + K.rnd(-lw * 0.6, lw * 0.6), y: ly + lh * 0.4, dir: -1, life: 2.4 });
        }
        gas = gas.filter(function (g) { g.life -= dt; return g.life > 0; });
        gas.forEach(function (g) {
          var into = (g.k === "co2") === (net > 0); var p = 1 - g.life / 2.4, y0 = ly + lh * 0.4, y = into ? y0 + 70 * (1 - p) : y0 + 70 * p;
          c.globalAlpha = Math.min(1, g.life); K.dot(c, g.x, y, 8, g.k === "co2" ? "#94a3b8" : "#60a5fa"); K.txt(c, g.k === "co2" ? "CO₂" : "O₂", g.x, y, { s: 8, c: "#0f172a" }); c.globalAlpha = 1;
        });
        var bx = W * 0.86, bh = H * 0.6, by = H * 0.2, gl = Math.min(1, glu / 100);
        K.rr(c, bx, by, 22, bh, 8); c.fillStyle = C.line; c.fill(); K.rr(c, bx, by + bh * (1 - gl), 22, bh * gl, 8); c.fillStyle = "#f59e0b"; c.fill();
        K.txt(c, t("glucose", "جلوكوز"), bx + 11, by + bh + 14, { s: 10, c: C.muted });
      } else {
        c.fillStyle = "rgba(56,189,248,.12)"; c.beginPath(); c.arc(W / 2, H / 2, Math.min(W, H) * 0.48, 0, Math.PI * 2); c.fill();
        orgs.forEach(function (o) {
          var sp = o.k === "amoeba" ? 10 : o.k === "euglena" ? 34 : 46; o.a += K.rnd(-0.6, 0.6) * dt; o.x += Math.cos(o.a) * sp * dt; o.y += Math.sin(o.a) * sp * dt;
          var R0 = Math.min(W, H) * 0.42; if (dist(o.x, o.y, W / 2, H / 2) > R0) { o.a = Math.atan2(H / 2 - o.y, W / 2 - o.x); }
          c.save(); c.translate(o.x, o.y); c.rotate(o.a);
          if (o.k === "amoeba") { c.fillStyle = "rgba(167,139,250,.7)"; c.beginPath(); for (var k = 0; k <= 24; k++) { var aa = k / 24 * Math.PI * 2, rr = 22 + Math.sin(aa * 3 + tm * 2) * 6 + (Math.cos(aa) > 0.7 ? 8 + Math.sin(tm * 3) * 4 : 0); c.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); } c.closePath(); c.fill(); K.dot(c, -4, 0, 6, "#6d28d9"); }
          if (o.k === "euglena") { c.fillStyle = "#4ade80"; c.beginPath(); c.ellipse(0, 0, 26, 9, 0, 0, Math.PI * 2); c.fill(); K.dot(c, 14, -2, 2.5, "#dc2626"); c.strokeStyle = "#166534"; c.lineWidth = 2; c.beginPath(); c.moveTo(26, 0); for (var f = 1; f <= 10; f++) c.lineTo(26 + f * 3, Math.sin(f * 0.9 - tm * 14) * 5); c.stroke(); }
          if (o.k === "para") { c.fillStyle = "rgba(251,191,36,.75)"; c.beginPath(); c.ellipse(0, 0, 30, 12, 0, 0, Math.PI * 2); c.fill(); c.strokeStyle = "#b45309"; c.lineWidth = 1; for (var q = 0; q < 26; q++) { var aq = q / 26 * Math.PI * 2, px = Math.cos(aq) * 30, py = Math.sin(aq) * 12, w = Math.sin(tm * 18 + q) * 0.5; c.beginPath(); c.moveTo(px, py); c.lineTo(px * 1.15 + w * 3, py * 1.45); c.stroke(); } }
          c.restore();
          if (sel === o.k) { c.strokeStyle = "#f97316"; c.lineWidth = 2; c.beginPath(); c.arc(o.x, o.y, 40, 0, Math.PI * 2); c.stroke(); }
          K.txt(c, ORG[o.k][0], o.x, o.y + 36, { s: 11, c: C.ink });
        });
      }
    });
  };

  /* =========================================================
     prep1_yogurt - lactic acid bacteria growth vs temperature and time
     ========================================================= */
  L.prep1_yogurt = function (host, cfg, done) {
    host.innerHTML = hint(t("Make yogurt like the book: boil the milk, cool it to 42 °C, add a little yogurt (lactic acid bacteria), keep it warm for 4-5 hours, then refrigerate. Press Play to run time.", "اصنع الزبادي كما في الكتاب: اغلِ اللبن، وبرّده إلى ٤٢ °س، وأضف قليلًا من الزبادي (بكتيريا حمض اللاكتيك)، واحفظه دافئًا ٤-٥ ساعات، ثم ضعه في الثلاجة. اضغط تشغيل لتمر الساعات."));
    var S = K.make(host, 0.52, 330), temp = 25, boiled = false, bac = 0, wild = 3, acid = 0, hrs = 0, play = false, hist = [], set = false, cool = false, msgT = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Temperature", "درجة الحرارة"), 0, 60, 1, temp, "°C") + '<div class="btn-row"><button type="button" class="btn sm" id="yB">🔥 ' + t("Boil the milk", "اغلِ اللبن") + '</button><button type="button" class="btn sm" id="yA">🥄 ' + t("Add starter yogurt", "أضف بادئ الزبادي") + '</button><button type="button" class="btn sm" id="yF">🧊 ' + t("Put in the fridge", "ضعه في الثلاجة") + '</button><button type="button" class="btn sm primary" id="yP">▶ ' + t("Play", "تشغيل") + '</button><button type="button" class="btn sm ghost" id="yR">↺ ' + t("New milk", "لبن جديد") + '</button></div><div class="meter yg-out"></div>';
    var out = ctl.querySelector(".yg-out"), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var tick = L._goals(host, [t("Boil the milk, then cool it to about 42 °C.", "اغلِ اللبن ثم برّده إلى نحو ٤٢ °س."), t("Turn the milk into thick yogurt.", "حوّل اللبن إلى زبادي متماسك."),
      t("Refrigerate the set yogurt so it stops getting sour.", "ضع الزبادي المتماسك في الثلاجة ليتوقف عن زيادة الحموضة."), t("See what happens if yogurt stays warm too long.", "اكتشف ماذا يحدث إذا بقي الزبادي دافئًا مدة طويلة.")], done);
    function rate(T0) { return T0 >= 35 && T0 <= 45 ? 1.1 : T0 >= 25 && T0 < 35 ? 0.35 : T0 > 45 && T0 <= 50 ? 0.3 : T0 > 55 ? -3 : T0 < 10 ? 0 : 0.1; }
    function upd() {
      slv.textContent = n(temp) + " °C";
      var st = acid >= 2.2 ? t("too sour: the taste is spoiled", "حامض جدًا: فسد طعمه") : acid >= 1 ? t("thick yogurt ✔", "زبادي متماسك ✔") : acid > 0.3 ? t("thickening…", "يتماسك…") : t("liquid milk", "لبن سائل");
      out.innerHTML = "<span>" + t("Time: ", "الزمن: ") + "<b>" + n(r1(hrs)) + " " + t("h", "ساعة") + "</b></span><span>" + t("Lactic acid bacteria: ", "بكتيريا حمض اللاكتيك: ") + "<b>" + (bac < 0.5 ? t("none", "لا يوجد") : n(Math.round(Math.pow(2, bac)))) + "</b></span><span>" + t("Milk: ", "اللبن: ") + "<b>" + st + "</b></span>" + (msgT ? '<span class="sub">' + msgT + "</span>" : "");
    }
    function say(s) { msgT = s; E.speak(s); upd(); }
    inp.oninput = function () { temp = +inp.value; cool = false; if (boiled && temp >= 40 && temp <= 44) tick(0); upd(); };
    ctl.querySelector("#yB").onclick = function () { boiled = true; bac = 0; wild = 0; temp = 60; inp.value = 60; say(t("Boiling kills any bacteria that may be in the milk. Now cool it down.", "الغليان يقتل أي بكتيريا قد توجد في اللبن. برّده الآن.")); };
    ctl.querySelector("#yA").onclick = function () {
      if (temp > 50) { say(t("Too hot! The heat would kill the bacteria in the starter. Cool the milk first.", "ساخن جدًا! الحرارة ستقتل بكتيريا البادئ. برّد اللبن أولًا.")); return; }
      bac = Math.max(bac, 5); say(t("Lactic acid bacteria added. Keep the milk warm (35-45 °C).", "أضيفت بكتيريا حمض اللاكتيك. احفظ اللبن دافئًا (٣٥-٤٥ °س)."));
    };
    ctl.querySelector("#yF").onclick = function () { temp = 4; inp.value = 4; cool = true; if (set && acid < 2.2) { tick(2); say(t("In the cold the bacteria almost stop working, so the yogurt keeps its taste.", "في البرودة تكاد البكتيريا تتوقف عن العمل، فيحتفظ الزبادي بطعمه.")); } else upd(); };
    ctl.querySelector("#yP").onclick = function () { play = !play; this.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play", "تشغيل"); };
    ctl.querySelector("#yR").onclick = function () { temp = 25; inp.value = 25; boiled = false; bac = 0; wild = 3; acid = 0; hrs = 0; hist = []; set = false; msgT = ""; upd(); };
    upd();
    var acc = 0, sticks = [];
    for (var i = 0; i < 40; i++) sticks.push({ x: Math.random(), y: Math.random(), a: Math.random() * 3 });
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C;
      if (play) {
        var h = dt * 0.7; hrs += h; var r = rate(temp);
        if (bac > 0) bac = Math.max(0, Math.min(13, bac + r * h * 1.6)); if (wild > 0 && !boiled) wild = Math.min(10, wild + r * h);
        if (bac > 0.5 && r > 0) acid += Math.pow(2, bac) / 16384 * h * 3.2 * (r > 0.5 ? 1 : 0.4) * (set ? 0.25 : 1);
        if (!boiled && wild > 6 && !set) { if (msgT.indexOf("!") < 0) say(t("Unboiled milk: unknown bacteria are growing too. Boil it first!", "لبن غير مغلي: تنمو فيه بكتيريا غير معروفة أيضًا. اغلِه أولًا!")); }
        if (acid >= 1 && !set) { set = true; say(t("Bacteria changed lactose (milk sugar) into lactic acid: the milk is now thick yogurt.", "حوّلت البكتيريا اللاكتوز (سكر اللبن) إلى حمض اللاكتيك: أصبح اللبن زبادي متماسكًا.")); if (boiled) tick(1); }
        if (acid >= 2.2) { tick(3); if (msgT.indexOf("sour") < 0 && msgT.indexOf("حموضة") < 0) say(t("Left warm, the bacteria keep making lactic acid: the yogurt becomes too sour.", "عند تركه دافئًا تستمر البكتيريا في إنتاج حمض اللاكتيك فتزداد حموضة الزبادي ويفسد طعمه.")); }
        if (!hist.length || hrs - hist[hist.length - 1][0] > 0.05) hist.push([hrs, bac]);
        if (hrs >= 24) { play = false; ctl.querySelector("#yP").innerHTML = "▶ " + t("Play", "تشغيل"); }
        acc += dt; if (acc > 0.3) { acc = 0; upd(); }
      }
      c.clearRect(0, 0, W, H);
      var jx = W * 0.08, jy = H * 0.18, jw = W * 0.3, jh = H * 0.72, thick = Math.min(1, acid);
      c.fillStyle = acid >= 2.2 ? "#fef3c7" : "rgba(255,255,255," + (0.75 + thick * 0.25) + ")"; K.rr(c, jx, jy + jh * 0.15, jw, jh * 0.85, 12); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 2.5; K.rr(c, jx, jy, jw, jh, 14); c.stroke();
      if (thick > 0.3) { c.fillStyle = "rgba(226,232,240," + thick + ")"; c.beginPath(); c.ellipse(jx + jw / 2, jy + jh * 0.15, jw / 2 - 2, 8, 0, 0, Math.PI * 2); c.fill(); }
      var nb = Math.min(40, Math.round(bac * 3)), nw = boiled ? 0 : Math.min(20, Math.round(wild * 2));
      for (var k = 0; k < nb + nw; k++) { var s = sticks[k % 40], x = jx + 10 + s.x * (jw - 20), y = jy + jh * 0.2 + s.y * (jh * 0.75), wig = Math.sin(hrs * 4 + k) * 2; c.strokeStyle = k < nb ? "#7c3aed" : "#dc2626"; c.lineWidth = 3; c.lineCap = "round"; c.beginPath(); c.moveTo(x - 5 * Math.cos(s.a), y - 5 * Math.sin(s.a) + wig); c.lineTo(x + 5 * Math.cos(s.a), y + 5 * Math.sin(s.a) + wig); c.stroke(); }
      c.lineCap = "butt";
      var tx = jx + jw + 22, th = jh; c.fillStyle = C.line; K.rr(c, tx, jy, 12, th, 6); c.fill(); var tf = temp / 100 * th * 1.4; c.fillStyle = temp > 50 ? "#ef4444" : temp >= 35 && temp <= 45 ? "#22c55e" : temp < 10 ? "#38bdf8" : "#f59e0b"; K.rr(c, tx, jy + th - Math.min(th, tf), 12, Math.min(th, tf), 6); c.fill();
      c.fillStyle = "rgba(34,197,94,.25)"; c.fillRect(tx - 4, jy + th - 45 / 100 * th * 1.4, 20, 10 / 100 * th * 1.4); K.txt(c, n(temp) + "°", tx + 6, jy - 8, { s: 11, c: C.ink });
      var gx = W * 0.52, gy = 16, gw = W * 0.44, gh = H - 46;
      c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx, gy + gh); c.lineTo(gx + gw, gy + gh); c.stroke();
      K.txt(c, t("bacteria", "البكتيريا"), gx + 4, gy + 4, { s: 10, c: C.muted, a: "left" }); K.txt(c, t("hours →", "الساعات ←"), gx + gw, gy + gh + 26, { s: 10, c: C.muted, a: "right" });
      var maxH = Math.max(8, Math.ceil(hrs));
      for (var hh = 2; hh <= maxH; hh += (maxH > 12 ? 4 : 2)) K.txt(c, String(hh), gx + gw * hh / maxH, gy + gh + 12, { s: 9, c: C.muted });
      c.strokeStyle = "#7c3aed"; c.lineWidth = 2.5; c.beginPath(); hist.forEach(function (p, j) { var px = gx + gw * p[0] / maxH, py = gy + gh - gh * p[1] / 14; if (j) c.lineTo(px, py); else c.moveTo(px, py); }); c.stroke();
    });
  };

  /* =========================================================
     prep1_solar - planets (book data) + sun height and shadow length
     ========================================================= */
  L.prep1_solar = function (host, cfg, done) {
    var PL = [["Mercury", "عطارد", 4878, "#a8a29e", t("Very thin crust full of meteor craters; very thin atmosphere of hydrogen and helium; no active volcanoes.", "قشرة رقيقة جدًا مليئة بفوهات النيازك، وغلاف جوي رقيق جدًا من الهيدروجين والهيليوم، ولا براكين نشطة.")],
      ["Venus", "الزهرة", 12120, "#fbbf24", t("Very dense atmosphere, mainly carbon dioxide; many active volcanoes.", "غلاف جوي كثيف جدًا معظمه ثاني أكسيد الكربون، وبه براكين نشطة كثيرة.")],
      ["Earth", "الأرض", 12756, "#3b82f6", t("Atmosphere mainly nitrogen and oxygen: the planet of human life; many active volcanoes.", "غلافه الجوي معظمه نيتروجين وأكسجين، وهو كوكب حياة الإنسان، وبه براكين نشطة كثيرة.")],
      ["Mars", "المريخ", 6787, "#ef4444", t("The Red Planet: crust relatively like Earth's, atmosphere mainly carbon dioxide; signs of old volcanoes but no current activity.", "الكوكب الأحمر: قشرته تشبه قشرة الأرض نسبيًا، وغلافه الجوي معظمه ثاني أكسيد الكربون، وبه آثار براكين دون نشاط حالي.")],
      ["Jupiter", "المشتري", 142948, "#d97706", t("The largest planet: a gas planet with no crust, atmosphere of hydrogen and helium; no volcanoes.", "أكبر الكواكب: كوكب غازي بلا قشرة، غلافه الجوي من الهيدروجين والهيليوم، ولا براكين.")],
      ["Saturn", "زحل", 120536, "#eab308", t("Similar to Jupiter: gas planet, hydrogen and helium; no volcanoes.", "يشبه المشتري: كوكب غازي من الهيدروجين والهيليوم، ولا براكين.")],
      ["Uranus", "أورانوس", 51118, "#5eead4", t("Gas and ice, no crust; methane gives it a greenish-blue colour; no volcanoes.", "غازات وجليد بلا قشرة، وغاز الميثان يعطيه لونًا أزرق مخضرًا، ولا براكين.")],
      ["Neptune", "نبتون", 49660, "#3b82f6", t("Similar to Uranus; known as the blue planet; no volcanoes.", "يشبه أورانوس ويعرف بالكوكب الأزرق، ولا براكين.")]];
    var SEA = { summer: [83.5, 14, t("Summer (21 June)", "الصيف (٢١ يونيو)")], equi: [60, 12, t("Spring / autumn", "الربيع / الخريف")], winter: [36.5, 10, t("Winter (22 December)", "الشتاء (٢٢ ديسمبر)")] };
    host.innerHTML = hint(t("Planets: tap a planet to read its data from the book, and change the speed. Shadow: move the time of day and the season and watch the stick's shadow.", "الكواكب: اضغط على كوكب لتقرأ بياناته من الكتاب، وغيّر السرعة. الظل: غيّر ساعة النهار والفصل وراقب ظل العصا.")) + '<div class="seg" id="som"></div>';
    var S = K.make(host, 0.58, 380), mode = "pl", spd = 1, ang = PL.map(function (p, i) { return i * 0.8; }), hits = [], sel = -1, hour = 9, sea = "summer", noon = {};
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="so-p">' + L._slider(t("Orbit speed", "سرعة الدوران"), 0, 4, 0.5, spd, "×") + '</div><div class="so-s" hidden>' + L._slider(t("Time of day", "ساعة النهار"), 6, 18, 0.5, hour, "") + '<div class="seg" id="sos"></div></div><div class="meter so-out"></div>';
    var out = ctl.querySelector(".so-out"), ins = ctl.querySelectorAll("input"), sl = ctl.querySelectorAll(".slv");
    var tick = L._goals(host, [t("Find the largest planet.", "اعثر على أكبر الكواكب."), t("Find another planet with many active volcanoes, like Earth.", "اعثر على كوكب آخر به براكين نشطة كثيرة مثل الأرض."),
      t("Make the shortest shadow of the day.", "اجعل ظل العصا أقصر ما يمكن خلال اليوم."), t("Compare the noon shadow in summer and in winter.", "قارن ظل الظهيرة في الصيف وفي الشتاء.")], done);
    K.seg(host, "#som", [["pl", t("Planets", "الكواكب")], ["sh", t("Sun and shadow", "الشمس والظل")]], mode, function (v) { mode = v; ctl.querySelector(".so-p").hidden = v !== "pl"; ctl.querySelector(".so-s").hidden = v !== "sh"; upd(); });
    K.seg(ctl, "#sos", Object.keys(SEA).map(function (k) { return [k, SEA[k][2]]; }), sea, function (v) { sea = v; upd(); });
    function alt() { var s = SEA[sea], rise = 12 - s[1] / 2, f = (hour - rise) / s[1]; return f <= 0 || f >= 1 ? 0 : s[0] * Math.sin(Math.PI * f); }
    function hm(x) { var h = Math.floor(x), m = Math.round((x - h) * 60); return n(h) + ":" + (m < 10 ? "0" : "") + n(m); }
    function upd() {
      sl[0].textContent = "×" + n(spd); sl[1].textContent = hm(hour);
      if (mode === "pl") { out.innerHTML = sel < 0 ? '<span class="sub">' + t("Tap a planet. 8 planets orbit the Sun in elliptical paths.", "اضغط على كوكب. ثمانية كواكب تدور حول الشمس في مدارات بيضاوية.") + "</span>" : "<span><b>" + (E.isAr() ? PL[sel][1] : PL[sel][0]) + "</b> · " + t("diameter ", "القطر ") + eq(PL[sel][2].toLocaleString("en-US") + " km") + "</span><span>" + PL[sel][4] + "</span>"; return; }
      var a = alt(), s = a > 0 ? 100 / Math.tan(a * Math.PI / 180) : 0;
      out.innerHTML = "<span>" + SEA[sea][2] + " · " + t("day length about ", "طول النهار نحو ") + n(SEA[sea][1]) + t(" hours", " ساعة") + "</span><span>" + t("Sun's height: ", "ارتفاع الشمس: ") + "<b>" + n(Math.round(a)) + "°</b></span><span>" + (a > 0 ? t("Shadow of a 1 m stick: ", "ظل عصا طولها ١ م: ") + "<b>" + n(Math.round(s)) + " " + t("cm", "سم") + "</b>" : t("The Sun is below the horizon: night.", "الشمس تحت الأفق: ليل.")) + "</span>";
      if (Math.abs(hour - 12) < 0.01 && a > 0) { tick(2); noon[sea] = 1; if (noon.summer && noon.winter) tick(3); }
    }
    ins[0].oninput = function () { spd = +ins[0].value; upd(); };
    ins[1].oninput = function () { hour = +ins[1].value; upd(); };
    S.drag({ down: function (p) { if (mode !== "pl") return false; for (var i = 0; i < hits.length; i++) if (dist(p.x, p.y, hits[i].x, hits[i].y) < hits[i].r + 8) { sel = hits[i].i; upd(); E.speak(E.isAr() ? PL[sel][1] : PL[sel][0]); if (sel === 4) tick(0); if (sel === 1) tick(1); return true; } return false; } });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H);
      if (mode === "pl") {
        var cx = W / 2, cy = H / 2, Rx = W * 0.47, Ry = H * 0.45; hits = [];
        K.dot(c, cx, cy, 16, "#facc15"); K.txt(c, t("Sun", "الشمس"), cx, cy + 26, { s: 10, c: C.muted });
        PL.forEach(function (p, i) {
          var f = 0.16 + i * 0.12, ax = Rx * f, ay = Ry * f; ang[i] += spd * dt * 1.2 / Math.pow(f / 0.16, 1.5);
          c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.ellipse(cx, cy, ax, ay, 0, 0, Math.PI * 2); c.stroke();
          var x = cx + Math.cos(ang[i]) * ax, y = cy + Math.sin(ang[i]) * ay, r = 3 + Math.sqrt(p[2] / 142948) * 11;
          K.dot(c, x, y, r, p[3], sel === i ? C.ink : null); if (i === 5) { c.strokeStyle = "#ca8a04"; c.lineWidth = 1.5; c.beginPath(); c.ellipse(x, y, r * 1.8, r * 0.5, -0.3, 0, Math.PI * 2); c.stroke(); }
          if (sel === i) { c.strokeStyle = "#f97316"; c.lineWidth = 2; c.beginPath(); c.arc(x, y, r + 6, 0, Math.PI * 2); c.stroke(); }
          K.txt(c, E.isAr() ? p[1] : p[0], x, y + r + 8, { s: 9, c: C.muted, w: 700 });
          hits.push({ x: x, y: y, r: r, i: i });
        });
      } else {
        var a = alt(), gy = H * 0.78, sx0 = W * 0.5, stH = H * 0.28, sky = a > 0 ? "rgba(125,211,252," + (0.15 + a / 200) + ")" : "rgba(30,41,59,.5)";
        c.fillStyle = sky; c.fillRect(0, 0, W, gy); c.fillStyle = "#a3e635"; c.globalAlpha = 0.4; c.fillRect(0, gy, W, H - gy); c.globalAlpha = 1;
        var s = SEA[sea], rise = 12 - s[1] / 2, f = (hour - rise) / s[1], Ra = Math.min(W * 0.45, gy - 10);
        c.strokeStyle = C.line; c.setLineDash([4, 5]); c.beginPath(); for (var k = 0; k <= 30; k++) { var ff = k / 30, aa = s[0] * Math.sin(Math.PI * ff) * Math.PI / 180, xx = sx0 - Math.cos(Math.PI * ff) * Ra * Math.cos(aa), yy = gy - Ra * Math.sin(aa); if (k) c.lineTo(xx, yy); else c.moveTo(xx, yy); } c.stroke(); c.setLineDash([]);
        K.txt(c, t("East", "الشرق"), 26, gy + 14, { s: 11, c: C.ink }); K.txt(c, t("West", "الغرب"), W - 26, gy + 14, { s: 11, c: C.ink });
        if (a > 0) {
          var ar = a * Math.PI / 180, sx = sx0 - Math.cos(Math.PI * f) * Ra * Math.cos(ar), sy = gy - Ra * Math.sin(ar);
          K.dot(c, sx, sy, 16, "#facc15");
          var len = Math.min(W, stH / Math.tan(ar)), dir = sx < sx0 ? 1 : -1;
          c.fillStyle = "rgba(15,23,42,.45)"; c.beginPath(); c.moveTo(sx0 - 3, gy); c.lineTo(sx0 + dir * len, gy + 2); c.lineTo(sx0 + dir * len, gy + 7); c.lineTo(sx0 + 3, gy + 5); c.fill();
          c.strokeStyle = "rgba(250,204,21,.4)"; c.lineWidth = 1; c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx0 + dir * len, gy); c.stroke();
        } else K.txt(c, "🌙", W * 0.8, H * 0.2, { s: 26 });
        c.fillStyle = "#78350f"; c.fillRect(sx0 - 3, gy - stH, 6, stH);
        K.txt(c, hm(hour), W - 12, 16, { s: 13, c: C.ink, a: "right" });
      }
    });
  };

  /* =========================================================
     prep1_eclipse - drag the Moon round the Earth; shadow, penumbra, eclipse
     ========================================================= */
  L.prep1_eclipse = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the Moon around the Earth (or press Play). Sunlight comes from the left. Use the slider to lift the Moon above or below the Earth's shadow, as its tilted orbit does.", "اسحب القمر حول الأرض (أو اضغط تشغيل). ضوء الشمس يأتي من اليسار. استخدم الشريط لرفع القمر أو خفضه عن ظل الأرض كما يفعل مداره المائل."));
    var S = K.make(host, 0.56, 370), th = 2.2, hgt = 0, drag = false, play = false, last = "";
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Moon above / below the Earth's orbit plane", "القمر أعلى / أسفل مستوى مدار الأرض"), -6, 6, 0.5, 0, "") + '<div class="btn-row"><button type="button" class="btn sm primary" id="ecP">▶ ' + t("Play", "تشغيل") + '</button></div><div class="meter ec-out"></div>';
    var out = ctl.querySelector(".ec-out"), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var tick = L._goals(host, [t("Put the Moon in the full moon phase.", "ضع القمر في طور البدر."), t("Make a total lunar eclipse.", "كوّن خسوفًا كليًا للقمر."), t("Make a partial lunar eclipse.", "كوّن خسوفًا جزئيًا للقمر."),
      t("Make a full moon with NO eclipse.", "كوّن بدرًا دون حدوث خسوف.")], done);
    var rm = 7, Ru = 3 * rm, Rp = 5 * rm;
    function phase() {
      var a = ((th % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI), k = Math.round(a / (Math.PI / 4)) % 8;
      return [[t("Full moon", "البدر"), 0], [t("Waning gibbous", "الأحدب المتناقص"), 1], [t("Last quarter", "التربيع الثاني"), 2], [t("Waning crescent", "الهلال المتناقص"), 3], [t("New moon", "المحاق"), 4], [t("Waxing crescent", "الهلال المتزايد"), 5], [t("First quarter", "التربيع الأول"), 6], [t("Waxing gibbous", "الأحدب المتزايد"), 7]][k];
    }
    function ecl(Ro) {
      if (Math.cos(th) <= 0) return "none";
      var yoff = Ro * Math.sin(th), d = Math.sqrt(yoff * yoff + Math.pow(hgt * rm, 2));
      if (d + rm <= Ru) return "total"; if (d - rm < Ru) return "partial"; if (d - rm < Rp) return "pen"; return "none";
    }
    function upd(e) {
      slv.textContent = n(hgt);
      var ph = phase(), full = ph[1] === 0, txt = { total: t("TOTAL lunar eclipse: the Moon is completely inside the Earth's shadow and looks like a dark disc.", "خسوف كلي: القمر داخل ظل الأرض تمامًا فيبدو قرصًا معتمًا."), partial: t("PARTIAL lunar eclipse: part of the Moon is in the Earth's shadow.", "خسوف جزئي: جزء من القمر في ظل الأرض."), pen: t("The Moon is in the penumbra only: dimly lit, not counted as an eclipse.", "القمر في شبه الظل فقط: إضاءته خافتة، ولا يُعد خسوفًا."), none: full ? t("Full moon, no eclipse: the Moon passes above or below the Earth's shadow.", "بدر دون خسوف: يمر القمر أعلى أو أسفل ظل الأرض.") : "" }[e];
      out.innerHTML = "<span>" + t("Phase: ", "الطور: ") + "<b>" + ph[0] + "</b></span>" + (txt ? "<span>" + txt + "</span>" : "") + '<span class="sub">' + t("The Moon takes about 29.5 days to go round the Earth.", "يستغرق القمر نحو ٢٩٫٥ يومًا ليدور حول الأرض.") + "</span>";
      if (full) tick(0); if (e === "total") tick(1); if (e === "partial") tick(2); if (full && (e === "none" || e === "pen") && hgt !== 0) tick(3);
      var key = ph[0] + e; if (key !== last) { last = key; if (e === "total" || e === "partial") E.speak(txt); }
    }
    inp.oninput = function () { hgt = +inp.value; };
    ctl.querySelector("#ecP").onclick = function () { play = !play; this.innerHTML = play ? "⏸ " + t("Pause", "إيقاف") : "▶ " + t("Play", "تشغيل"); };
    function geo() { var W = S.W, H = S.H; return { ex: W * 0.4, ey: H * 0.5, Ro: Math.min(W * 0.26, H * 0.38), re: 26 }; }
    S.drag({
      down: function (p) { var g = geo(), mx = g.ex + g.Ro * Math.cos(th), my = g.ey + g.Ro * Math.sin(th); if (dist(p.x, p.y, mx, my) < 26 || Math.abs(dist(p.x, p.y, g.ex, g.ey) - g.Ro) < 16) { drag = true; th = Math.atan2(p.y - g.ey, p.x - g.ex); return true; } return false; },
      move: function (p) { if (drag) { var g = geo(); th = Math.atan2(p.y - g.ey, p.x - g.ex); } },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(dist(p.x, p.y, g.ex, g.ey) - g.Ro) < 16; }
    });
    var acc = 0;
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), i;
      if (play) th += dt * 0.5; acc += dt;
      var e = ecl(g.Ro); if (acc > 0.15) { acc = 0; upd(e); }
      c.clearRect(0, 0, W, H); c.fillStyle = "#0b1220"; c.fillRect(0, 0, W, H);
      var sg = c.createRadialGradient(0, g.ey, 4, 0, g.ey, 70); sg.addColorStop(0, "#fde047"); sg.addColorStop(1, "rgba(253,224,71,0)"); c.fillStyle = sg; c.fillRect(0, g.ey - 80, 80, 160);
      K.txt(c, t("Sun", "الشمس"), 26, g.ey + 50, { s: 11, c: "#fde68a" });
      for (i = 0; i < 5; i++) { c.strokeStyle = "rgba(253,224,71,.25)"; c.lineWidth = 1; c.beginPath(); c.moveTo(40, g.ey - 60 + i * 30); c.lineTo(g.ex - 30, g.ey - 60 + i * 30); c.stroke(); }
      var far = W; c.fillStyle = "rgba(148,163,184,.18)"; c.beginPath(); c.moveTo(g.ex, g.ey - g.re); c.lineTo(far, g.ey - g.re - (far - g.ex) * (Rp - g.re) / g.Ro); c.lineTo(far, g.ey + g.re + (far - g.ex) * (Rp - g.re) / g.Ro); c.lineTo(g.ex, g.ey + g.re); c.fill();
      c.fillStyle = "rgba(0,0,0,.75)"; c.beginPath(); c.moveTo(g.ex, g.ey - g.re); c.lineTo(g.ex + g.Ro * 3, g.ey - g.re + 3 * (g.re - Ru)); c.lineTo(g.ex + g.Ro * 3, g.ey + g.re - 3 * (g.re - Ru)); c.lineTo(g.ex, g.ey + g.re); c.fill();
      K.txt(c, t("penumbra", "شبه الظل"), g.ex + g.Ro + 46, g.ey - Rp - 10, { s: 10, c: "#cbd5e1" }); K.txt(c, t("shadow", "الظل"), g.ex + g.Ro * 0.55, g.ey, { s: 10, c: "#cbd5e1" });
      c.strokeStyle = "rgba(203,213,225,.35)"; c.setLineDash([4, 6]); c.beginPath(); c.arc(g.ex, g.ey, g.Ro, 0, Math.PI * 2); c.stroke(); c.setLineDash([]);
      K.dot(c, g.ex, g.ey, g.re, "#2563eb"); c.fillStyle = "rgba(0,0,0,.55)"; c.beginPath(); c.arc(g.ex, g.ey, g.re, -Math.PI / 2, Math.PI / 2); c.fill();
      K.txt(c, t("Earth", "الأرض"), g.ex, g.ey + g.re + 12, { s: 10, c: "#e2e8f0" });
      var mx = g.ex + g.Ro * Math.cos(th), my = g.ey + g.Ro * Math.sin(th), mc = e === "total" ? "#7f1d1d" : e === "partial" ? "#a8a29e" : e === "pen" ? "#d6d3d1" : "#f5f5f4";
      K.dot(c, mx, my, rm, mc); c.fillStyle = "rgba(0,0,0,.6)"; c.beginPath(); c.arc(mx, my, rm, -Math.PI / 2, Math.PI / 2); c.fill();
      if (hgt) K.txt(c, hgt > 0 ? "▲" : "▼", mx, my - rm - 8, { s: 10, c: "#fde68a" });
      // view from Earth
      var vx = W - 62, vy = 60, vr = 34, lit = (1 + Math.cos(th)) / 2, wax = Math.sin(th) < 0;
      K.txt(c, t("seen from Earth", "كما يُرى من الأرض"), vx, vy - vr - 12, { s: 10, c: "#e2e8f0" });
      K.dot(c, vx, vy, vr, "#1e293b"); c.save(); c.beginPath(); c.arc(vx, vy, vr, 0, Math.PI * 2); c.clip();
      c.fillStyle = "#f5f5f4"; c.beginPath();
      var kx = vr * (2 * lit - 1); c.arc(vx, vy, vr, -Math.PI / 2, Math.PI / 2, !wax); c.ellipse(vx, vy, Math.abs(kx), vr, 0, Math.PI / 2, -Math.PI / 2, (kx > 0) !== wax); c.fill();
      if (e === "total") { c.fillStyle = "rgba(127,29,29,.85)"; c.fillRect(vx - vr, vy - vr, vr * 2, vr * 2); }
      if (e === "partial") { var dd = Math.sqrt(Math.pow(g.Ro * Math.sin(th), 2) + Math.pow(hgt * rm, 2)), sgn = (Math.sin(th) || hgt) > 0 ? 1 : -1; c.fillStyle = "rgba(15,23,42,.85)"; c.beginPath(); c.arc(vx - sgn * vr * 0.2, vy - sgn * dd / rm * vr * 0.9, vr * Ru / rm * 0.6, 0, Math.PI * 2); c.fill(); }
      if (e === "pen") { c.fillStyle = "rgba(120,53,15,.3)"; c.fillRect(vx - vr, vy - vr, vr * 2, vr * 2); }
      c.restore();
      // side view
      var sx = W - 120, sy = H - 46, sw = 110;
      c.strokeStyle = "rgba(203,213,225,.4)"; c.beginPath(); c.moveTo(sx, sy); c.lineTo(sx + sw, sy); c.stroke(); c.fillStyle = "rgba(0,0,0,.8)"; c.fillRect(sx + 20, sy - Ru * 0.5, sw - 20, Ru);
      K.dot(c, sx + 12, sy, 8, "#2563eb"); K.dot(c, sx + sw - 16, sy - hgt * rm * 0.5, rm * 0.5, mc);
      K.txt(c, t("side view", "منظر جانبي"), sx + sw / 2, sy + 22, { s: 10, c: "#e2e8f0" });
    });
  };
})();
/* ---------- Prep 1: objectives, extra quiz items, tappable diagrams, lab part names ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;

  /* ---------- "In this lesson" objectives (from the book's lesson objectives) ---------- */
  var O = {
    prep1u1l1: [["The atom is the building unit of matter", "الذرة وحدة بناء المادة"], ["Protons, neutrons and electrons: charge, mass, place", "البروتونات والنيوترونات والإلكترونات: الشحنة والكتلة والموقع"], ["Energy levels and the 2n² rule", "مستويات الطاقة وقاعدة 2n²"], ["Atomic number, mass number and isotopes", "العدد الذري والعدد الكتلي والنظائر"]],
    prep1u1l2: [["Mendeleev, Moseley and the modern table", "مندليف وموزلي والجدول الحديث"], ["Periods, groups and blocks", "الدورات والمجموعات والفئات"], ["Electron configuration and position", "التوزيع الإلكتروني وموقع العنصر"], ["Valency and trends in a group", "التكافؤ وتدرج الخواص في المجموعة"]],
    prep1u1l3: [["Mixtures and pure substances", "المخاليط والمواد النقية"], ["Separating mixtures by physical methods", "فصل المخاليط بالطرق الفيزيائية"], ["Elements, compounds and molecules", "العناصر والمركبات والجزيئات"], ["Physical and chemical properties and uses", "الخواص الفيزيائية والكيميائية والاستخدامات"]],
    prep1u1l4: [["Why atoms bond: the noble-gas configuration", "لماذا ترتبط الذرات: تركيب الغاز النبيل"], ["Ionic bonds: losing and gaining electrons", "الرابطة الأيونية: فقد الإلكترونات واكتسابها"], ["Single, double and triple covalent bonds", "الروابط التساهمية الأحادية والثنائية والثلاثية"], ["Properties of ionic and covalent compounds; carbon", "خواص المركبات الأيونية والتساهمية؛ الكربون"]],
    prep1u2l1: [["How objects get static charges", "كيف تكتسب الأجسام شحنات ساكنة"], ["Attraction and repulsion of charges", "التجاذب والتنافر بين الشحنات"], ["The electric field and its lines", "المجال الكهربي وخطوطه"], ["Uses of the electroscope", "استخدامات الكشاف الكهربي"]],
    prep1u2l2: [["Natural and industrial magnets", "المغناطيسات الطبيعية والصناعية"], ["Magnetic and non-magnetic materials", "المواد المغناطيسية وغير المغناطيسية"], ["Poles and the law of attraction and repulsion", "القطبان وقانون الجذب والتنافر"], ["The magnetic field and its lines", "المجال المغناطيسي وخطوطه"]],
    prep1u2l3: [["Contact forces and field forces", "قوى التلامس وقوى المجال"], ["Earth's gravitational field", "مجال جاذبية الأرض"], ["What changes the gravitational force", "العوامل المؤثرة في قوة الجاذبية"], ["Mass, weight and W = m × g", "الكتلة والوزن وW = m × g"]],
    prep1u3l1: [["The cell: unit of structure and function", "الخلية: وحدة التركيب والوظيفة"], ["Prokaryotes and eukaryotes", "بدائيات النواة وحقيقيات النواة"], ["Animal, plant and bacterial cells compared", "مقارنة الخلية الحيوانية والنباتية والبكتيرية"], ["Unicellular, multicellular and stem cells", "الكائنات وحيدة الخلية وعديدة الخلايا والخلايا الجذعية"]],
    prep1u3l2: [["Nutrition and photosynthesis", "التغذية والبناء الضوئي"], ["Respiration and cellular respiration", "التنفس والتنفس الخلوي"], ["Transport and excretion in humans and plants", "النقل والإخراج في الإنسان والنبات"], ["Movement in humans, plants and unicellular organisms", "الحركة في الإنسان والنبات والكائنات وحيدة الخلية"]],
    prep1u3l3: [["Classifying microbes", "تصنيف الميكروبات"], ["Beneficial bacteria and making yogurt", "البكتيريا النافعة وصناعة الزبادي"], ["Beneficial fungi: penicillin and yeast", "الفطريات النافعة: البنسلين والخميرة"], ["Harmful microbes: dysentery and typhoid", "الميكروبات الضارة: الدوسنتاريا والتيفود"]],
    prep1u4l1: [["Comparing the planets of the solar system", "مقارنة كواكب المجموعة الشمسية"], ["Earth's rotation and the apparent motion of the Sun", "دوران الأرض والحركة الظاهرية للشمس"], ["Sun height and shadow length", "ارتفاع الشمس وطول الظل"], ["Axis tilt, the seasons and day length", "ميل المحور والفصول وطول النهار"]],
    prep1u4l2: [["The Moon and its phases", "القمر وأطواره"], ["The full moon position", "موقع البدر"], ["Shadow and penumbra", "الظل وشبه الظل"], ["Total and partial lunar eclipses", "الخسوف الكلي والجزئي"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return x[1]; }) }; });

  /* ---------- extra hands-on quiz items (order / match / tf) ---------- */
  EX.prep1u1l1 = [
    { k: "order", q: ["Order from the largest to the smallest.", "رتّب من الأكبر إلى الأصغر."],
      items: [["Limestone rock", "صخر الحجر الجيري"], ["Calcium carbonate molecule", "جزيء كربونات الكالسيوم"], ["Atom", "الذرة"], ["Nucleus", "النواة"]],
      off: ["Matter is made of molecules, molecules of atoms, and the nucleus is a tiny part of the atom.", "المادة مكونة من جزيئات، والجزيئات من ذرات، والنواة جزء صغير جدًا من الذرة."], sto: ["From the Sphinx's stone down to a pinhead in the middle of a stadium.", "من حجر أبي الهول إلى رأس دبوس في منتصف ملعب."] },
    { k: "tf", a: false, q: ["True or false: the mass of the atom is spread evenly over the whole atom.", "صواب أم خطأ: كتلة الذرة موزعة بالتساوي على الذرة كلها."],
      off: ["False. The mass is concentrated in the nucleus, because protons and neutrons are 1 u each and electrons are almost massless.", "خطأ؛ الكتلة مركزة في النواة لأن كتلة البروتون والنيوترون ١ u وكتلة الإلكترون مهملة تقريبًا."], sto: ["All the heavy players crowd the centre circle; the runners in the stands weigh almost nothing.", "كل اللاعبين الثقال في دائرة المنتصف، والعدّاؤون في المدرجات لا وزن لهم تقريبًا."] }
  ];
  EX.prep1u1l2 = [
    { k: "match", q: ["Match each group to its name.", "صِل كل مجموعة باسمها."],
      pairs: [[["Group 1A", "المجموعة 1A"], ["Alkali metals", "الفلزات القلوية"]], [["Group 2A", "المجموعة 2A"], ["Alkaline earth metals", "الفلزات القلوية الأرضية"]], [["Group 7A", "المجموعة 7A"], ["Halogens", "الهالوجينات"]], [["Group 0", "المجموعة الصفرية"], ["Noble gases", "الغازات النبيلة"]]],
      off: ["The s-block holds 1A and 2A; the last two p-block groups are the halogens and the noble gases.", "الفئة s تضم 1A و2A، وآخر مجموعتين في الفئة p هما الهالوجينات والغازات النبيلة."], sto: ["Four families with four surnames on Malak's library shelves.", "أربع عائلات بأربعة ألقاب على رفوف مكتبة ملك."] },
    { k: "tf", a: true, q: ["True or false: the period number equals the number of occupied energy levels.", "صواب أم خطأ: رقم الدورة يساوي عدد مستويات الطاقة المشغولة بالإلكترونات."],
      off: ["True. Sodium (2,8,1) has 3 occupied levels and is in period 3.", "صواب؛ الصوديوم (2,8,1) له ٣ مستويات مشغولة ويقع في الدورة الثالثة."], sto: ["Count the floors of the building to find its row.", "عُدّ أدوار المبنى لتعرف صفه."] }
  ];
  EX.prep1u1l3 = [
    { k: "match", q: ["Match each mixture to the method that separates it.", "صِل كل مخلوط بطريقة فصله."],
      pairs: [[["Sand + water", "رمل + ماء"], ["Filtration", "الترشيح"]], [["Salt + water", "ملح + ماء"], ["Evaporation and condensation", "التبخير والتكثيف"]], [["Iron filings + sand", "برادة حديد + رمل"], ["Magnetic separation", "الفصل المغناطيسي"]], [["Mercury oxide (compound)", "أكسيد الزئبق (مركب)"], ["Heating: a chemical method", "التسخين: طريقة كيميائية"]]],
      off: ["Mixtures separate by physical methods; a compound needs a chemical method.", "المخاليط تُفصل بطرق فيزيائية، أما المركب فيحتاج طريقة كيميائية."], sto: ["Omar's filter, the sunny saucer, a magnet, and the lab burner.", "مرشح عمر، والطبق المشمس، والمغناطيس، وموقد المعمل."] },
    { k: "tf", a: false, q: ["True or false: an element can be broken into simpler substances by heating.", "صواب أم خطأ: يمكن تحليل العنصر إلى مواد أبسط بالتسخين."],
      off: ["False. An element is the simplest pure form of matter and cannot be split by physical or chemical methods.", "خطأ؛ العنصر أبسط صورة نقية للمادة ولا يمكن تحليله بالطرق الفيزيائية أو الكيميائية."], sto: ["Mercury and oxygen are the end of the line: nothing simpler hides inside.", "الزئبق والأكسجين نهاية الطريق: لا شيء أبسط يختبئ بداخلهما."] }
  ];
  EX.prep1u1l4 = [
    { k: "order", q: ["Put the steps of forming sodium chloride in order.", "رتّب خطوات تكوين كلوريد الصوديوم."],
      items: [["Sodium atom (2,8,1) loses 1 electron", "ذرة الصوديوم (2,8,1) تفقد إلكترونًا"], ["Chlorine atom (2,8,7) gains that electron", "ذرة الكلور (2,8,7) تكتسب هذا الإلكترون"], ["Na⁺ and Cl⁻ ions form, like neon and argon", "يتكون الأيونان Na⁺ وCl⁻ مثل النيون والأرجون"], ["The opposite ions attract: ionic bond", "يتجاذب الأيونان المختلفان: رابطة أيونية"]],
      off: ["Transfer of the electron makes two ions, and their electrostatic attraction is the ionic bond.", "انتقال الإلكترون يكوّن أيونين، والتجاذب الكهربي بينهما هو الرابطة الأيونية."], sto: ["Give the sticker, take the sticker, become plus and minus, stick together.", "أعطِ الملصق، خذ الملصق، صِر موجبًا وسالبًا، والتصقا معًا."] },
    { k: "tf", a: true, q: ["True or false: a covalent bond forms between two nonmetal atoms that share electrons.", "صواب أم خطأ: تتكون الرابطة التساهمية بين ذرتين لافلزيتين تتشاركان في الإلكترونات."],
      off: ["True. Examples are H₂, O₂, N₂, HCl and H₂O.", "صواب؛ ومن أمثلتها H₂ وO₂ وN₂ وHCl وH₂O."], sto: ["Nobody gives a sticker away; they put them in a shared album.", "لا أحد يعطي ملصقه؛ بل يضعونه في ألبوم مشترك."] }
  ];
  EX.prep1u2l1 = [
    { k: "match", q: ["Match each observation to its meaning (electroscope).", "صِل كل ملاحظة بمعناها (الكشاف الكهربي)."],
      pairs: [[["Leaves diverge when touched by an object", "تنفرج الورقتان عند لمس جسم للقرص"], ["The object is charged", "الجسم مشحون"]], [["Leaves do not diverge", "لا تنفرج الورقتان"], ["The object is not charged", "الجسم غير مشحون"]], [["Leaves of a + electroscope diverge more", "يزداد انفراج ورقتي كشاف موجب"], ["The object is positive", "الجسم موجب"]], [["Leaves of a + electroscope diverge less", "يقل انفراج ورقتي كشاف موجب"], ["The object is negative", "الجسم سالب"]]],
      off: ["The electroscope shows whether an object is charged and the type of its charge.", "الكشاف الكهربي يبين هل الجسم مشحون ونوع شحنته."], sto: ["The two foil leaves are like twins: same charge, they push apart.", "الورقتان كالتوأم: إذا تشابهت شحنتهما تباعدتا."] },
    { k: "tf", a: false, q: ["True or false: electric field lines can cross each other.", "صواب أم خطأ: خطوط المجال الكهربي يمكن أن تتقاطع."],
      off: ["False. Field lines never cross; they start at positive charges and end at negative charges.", "خطأ؛ خطوط المجال لا تتقاطع، وتبدأ من الشحنة الموجبة وتنتهي عند السالبة."], sto: ["One-way streets that never meet at a crossroads.", "شوارع باتجاه واحد لا تلتقي في تقاطع أبدًا."] }
  ];
  EX.prep1u2l2 = [
    { k: "tf", a: true, q: ["True or false: magnetic field lines are densest near the poles.", "صواب أم خطأ: تتزاحم خطوط المجال المغناطيسي قرب القطبين."],
      off: ["True. The magnetic force is strongest at the poles, so the lines crowd there.", "صواب؛ القوة المغناطيسية أكبر ما يمكن عند القطبين فتتزاحم الخطوط هناك."], sto: ["The iron filings pile up at both ends of Nour's magnet.", "تتكدس برادة الحديد عند طرفي مغناطيس نور."] },
    { k: "match", q: ["Match each pair of facing poles to what happens.", "صِل كل قطبين متقابلين بما يحدث."],
      pairs: [[["N facing N", "شمالي مقابل شمالي"], ["Repulsion", "تنافر"]], [["S facing S", "جنوبي مقابل جنوبي"], ["Repulsion again", "تنافر أيضًا"]], [["N facing S", "شمالي مقابل جنوبي"], ["Attraction", "تجاذب"]], [["A pole facing iron", "قطب مقابل قطعة حديد"], ["Iron is attracted", "ينجذب الحديد"]]],
      off: ["Like poles repel, unlike poles attract, and either pole attracts magnetic materials.", "الأقطاب المتشابهة تتنافر والمختلفة تتجاذب، وأي قطب يجذب المواد المغناطيسية."], sto: ["Twins push apart, opposites hug, and iron is everybody's friend.", "التوأم يتباعدان، والمختلفان يتعانقان، والحديد صديق الجميع."] }
  ];
  EX.prep1u2l3 = [
    { k: "order", q: ["Order the weight of a 6 kg backpack from the largest to the smallest.", "رتّب وزن حقيبة كتلتها ٦ كجم من الأكبر إلى الأصغر."],
      items: [["On Earth: 60 N", "على الأرض: ٦٠ نيوتن"], ["On the Moon: 10 N", "على القمر: ١٠ نيوتن"], ["In outer space: 0 N", "في الفضاء الخارجي: صفر نيوتن"]],
      off: ["W = m × g: Earth's g ≈ 10 N/kg, the Moon's is 1/6 of that, and far in space it can be zero.", "W = m × g: شدة جاذبية الأرض نحو ١٠ N/kg، والقمر سدسها، وفي الفضاء البعيد قد تصبح صفرًا."], sto: ["Same 6 kg of stuff, three very different pulls.", "الأشياء نفسها ذات ٦ كجم، وثلاث جاذبيات مختلفة جدًا."] },
    { k: "tf", a: false, q: ["True or false: the mass of an object changes from one planet to another.", "صواب أم خطأ: تتغير كتلة الجسم من كوكب لآخر."],
      off: ["False. Mass is the amount of matter and stays the same; weight changes with g.", "خطأ؛ الكتلة مقدار المادة وتبقى ثابتة، أما الوزن فيتغير بتغير شدة الجاذبية."], sto: ["Ziad's backpack holds the same things on the Moon.", "حقيبة زياد تحمل الأشياء نفسها على القمر."] }
  ];
  EX.prep1u3l1 = [
    { k: "order", q: ["Order the levels of organisation from the smallest.", "رتّب مستويات التنظيم بدءًا من الأصغر."],
      items: [["Cell", "خلية"], ["Tissue", "نسيج"], ["Organ", "عضو"], ["System", "جهاز"], ["Living organism", "كائن حي"]],
      off: ["Cells form tissues, tissues form organs, organs form systems, and systems form the organism.", "الخلايا تكوّن الأنسجة، والأنسجة تكوّن الأعضاء، والأعضاء تكوّن الأجهزة، والأجهزة تكوّن الكائن الحي."], sto: ["People, streets, districts, the whole city, and then Cairo itself.", "الناس، فالشوارع، فالأحياء، فالمدينة كلها: القاهرة."] },
    { k: "tf", a: false, q: ["True or false: the animal cell has a cell wall.", "صواب أم خطأ: للخلية الحيوانية جدار خلوي."],
      off: ["False. Plant and bacterial cells have a cell wall; the animal cell has only a plasma membrane.", "خطأ؛ للخلية النباتية والبكتيرية جدار خلوي، أما الحيوانية فلها غشاء بلازمي فقط."], sto: ["Hana's cheek cells were soft round blobs, not boxes.", "خلايا خد هنا كتل مستديرة لينة وليست صناديق."] }
  ];
  EX.prep1u3l2 = [
    { k: "match", q: ["Match each organism to how it gets oxygen.", "صِل كل كائن بطريقة حصوله على الأكسجين."],
      pairs: [[["Human", "الإنسان"], ["Lungs", "الرئتان"]], [["Fish", "السمكة"], ["Gills (from water)", "الخياشيم (من الماء)"]], [["Insect", "الحشرة"], ["Tracheal tubes", "القصبات الهوائية"]], [["Plant", "النبات"], ["Stomata", "الثغور"]]],
      off: ["Different organisms have different respiratory organs; plants have no respiratory system but use stomata.", "تختلف أعضاء التنفس باختلاف الكائنات، والنبات ليس له جهاز تنفسي لكنه يستخدم الثغور."], sto: ["Everyone breathes, each with their own tool.", "الجميع يتنفس، كل بأداته الخاصة."] },
    { k: "tf", a: true, q: ["True or false: the equation of cellular respiration is the reverse of photosynthesis.", "صواب أم خطأ: معادلة التنفس الخلوي عكس معادلة البناء الضوئي."],
      off: ["True. Glucose + oxygen give carbon dioxide + water + energy.", "صواب؛ الجلوكوز + الأكسجين يعطيان ثاني أكسيد الكربون + الماء + طاقة."], sto: ["Photosynthesis packs the lunchbox; respiration opens it to get the energy.", "البناء الضوئي يجهز علبة الغداء، والتنفس يفتحها ليحصل على الطاقة."] }
  ];
  EX.prep1u3l3 = [
    { k: "order", q: ["Put the yogurt-making steps in order.", "رتّب خطوات صنع الزبادي."],
      items: [["Boil the milk to kill bacteria", "اغلِ اللبن لقتل البكتيريا"], ["Cool it to about 42 °C", "برّده إلى نحو ٤٢ °س"], ["Add half a cup of yogurt", "أضف نصف كوب من الزبادي"], ["Keep warm (35-45 °C) for 4-5 hours", "احفظه دافئًا (٣٥-٤٥ °س) من ٤ إلى ٥ ساعات"], ["Put it in the refrigerator", "ضعه في الثلاجة"]],
      off: ["These are the book's practical steps: lactic acid bacteria need warmth to change lactose into lactic acid.", "هذه خطوات النشاط في الكتاب: بكتيريا حمض اللاكتيك تحتاج إلى الدفء لتحويل اللاكتوز إلى حمض اللاكتيك."], sto: ["Salma's mother's recipe, step by step.", "وصفة والدة سلمى خطوة بخطوة."] },
    { k: "tf", a: false, q: ["True or false: all microbes are harmful.", "صواب أم خطأ: كل الميكروبات ضارة."],
      off: ["False. Root nodule, decomposition and lactic acid bacteria, penicillium and yeast are beneficial.", "خطأ؛ بكتيريا العقد الجذرية والتحلل وحمض اللاكتيك والبنسيليوم والخميرة ميكروبات نافعة."], sto: ["Without microbes there would be no yogurt and no bread.", "لولا الميكروبات ما كان هناك زبادي ولا خبز."] }
  ];
  EX.prep1u4l1 = [
    { k: "order", q: ["Order these planets from the smallest diameter to the largest.", "رتّب هذه الكواكب من الأصغر قطرًا إلى الأكبر."],
      items: [["Mercury (4,878 km)", "عطارد (٤٨٧٨ كم)"], ["Mars (6,787 km)", "المريخ (٦٧٨٧ كم)"], ["Earth (12,756 km)", "الأرض (١٢٧٥٦ كم)"], ["Neptune (49,660 km)", "نبتون (٤٩٦٦٠ كم)"], ["Jupiter (142,948 km)", "المشتري (١٤٢٩٤٨ كم)"]],
      off: ["Diameters from the book's Table 1.", "الأقطار من الجدول ١ في الكتاب."], sto: ["From the pebble to the giant of the Sun's family.", "من الحصاة إلى عملاق عائلة الشمس."] },
    { k: "tf", a: true, q: ["True or false: the tilt of Earth's axis and its orbit around the Sun cause the four seasons.", "صواب أم خطأ: ميل محور الأرض ودورانها حول الشمس يسببان الفصول الأربعة."],
      off: ["True. They make sunlight fall at different angles through the year.", "صواب؛ فهما يجعلان أشعة الشمس تسقط بزوايا مختلفة على مدار السنة."], sto: ["A leaning top travelling round a lamp: sometimes facing it, sometimes turned away.", "نحلة مائلة تدور حول مصباح: أحيانًا تواجهه وأحيانًا تبتعد عنه."] }
  ];
  EX.prep1u4l2 = [
    { k: "order", q: ["Order the Moon's phases starting from the new moon.", "رتّب أطوار القمر بدءًا من المحاق."],
      items: [["New moon", "المحاق"], ["Waxing crescent", "الهلال المتزايد"], ["First quarter", "التربيع الأول"], ["Waxing gibbous", "الأحدب المتزايد"], ["Full moon", "البدر"]],
      off: ["Through the first half of the lunar month we see more and more of the Moon's lit half.", "خلال النصف الأول من الشهر القمري نرى جزءًا متزايدًا من نصف القمر المضيء."], sto: ["Mariam's Moon grows night by night from a thin smile to a full face.", "قمر مريم يكبر ليلة بعد ليلة من ابتسامة رفيعة إلى وجه كامل."] },
    { k: "tf", a: false, q: ["True or false: a lunar eclipse happens every full moon.", "صواب أم خطأ: يحدث خسوف القمر في كل بدر."],
      off: ["False. The Moon's orbit is tilted about 5°, so at most full moons it passes above or below Earth's shadow.", "خطأ؛ مدار القمر يميل بنحو ٥°، ففي معظم مرات البدر يمر أعلى ظل الأرض أو أسفله."], sto: ["The Moon usually hops over or under the shadow rope.", "يقفز القمر عادة فوق حبل الظل أو تحته."] }
  ];

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function ci(x, y, r, f, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2"' : "") + "/>"; }
  function ring(x, y, r) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="4 4"/>'; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }
  function arw(id, col) { return '<defs><marker id="' + id + '" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="' + col + '"/></marker></defs>'; }

  D.prep1u1l1 = {
    title: ["A sodium atom", "ذرة الصوديوم"],
    svg: function () {
      var s = ring(150, 120, 45) + ring(150, 120, 75) + ring(150, 120, 105), i, a;
      for (i = 0; i < 2; i++) { a = i * Math.PI; s += ci(150 + 45 * Math.cos(a), 120 + 45 * Math.sin(a), 6, "#3b82f6"); }
      for (i = 0; i < 8; i++) { a = i * Math.PI / 4 + 0.3; s += ci(150 + 75 * Math.cos(a), 120 + 75 * Math.sin(a), 6, "#3b82f6"); }
      s += ci(150 + 105 * Math.cos(-0.9), 120 + 105 * Math.sin(-0.9), 6, "#3b82f6");
      for (i = 0; i < 9; i++) { a = i * 2.4; s += ci(150 + 4 * Math.sqrt(i + 0.5) * Math.cos(a), 120 + 4 * Math.sqrt(i + 0.5) * Math.sin(a), 5, i % 2 ? "#94a3b8" : "#ef4444"); }
      s += tx(193, 160, "K", mut, 11) + tx(214, 182, "L", mut, 11) + tx(236, 204, "M", mut, 11);
      s += '<text x="300" y="110" font-size="34" font-weight="900" ' + ink + ' font-family="Nunito,sans-serif">Na</text><text x="282" y="88" font-size="14" font-weight="800" ' + mut + '>23</text><text x="282" y="118" font-size="14" font-weight="800" ' + mut + '>11</text>';
      s += tx(330, 150, "2, 8, 1", ink, 15);
      return g(s);
    },
    spots: [[150, 120, ["Nucleus", "النواة"], ["Tiny and positive. Sodium's nucleus has 11 protons and 12 neutrons; almost all the mass is here.", "صغيرة جدًا وموجبة الشحنة، وفي نواة الصوديوم ١١ بروتونًا و١٢ نيوترونًا، وفيها تتركز كتلة الذرة تقريبًا."]],
      [196, 120, ["Level K (n = 1)", "المستوى K (n = 1)"], ["The first level fills with 2 electrons (2n² = 2).", "يتشبع المستوى الأول بإلكترونين (2n² = 2)."]],
      [215, 158, ["Level L (n = 2)", "المستوى L (n = 2)"], ["Holds up to 8 electrons (2n² = 8).", "يتشبع بثمانية إلكترونات (2n² = 8)."]],
      [216, 37, ["Outer electron", "إلكترون المستوى الأخير"], ["Sodium has 1 electron in level M. The farther the level, the higher the electron's energy.", "للصوديوم إلكترون واحد في المستوى M، وكلما بعد المستوى زادت طاقة الإلكترون."]],
      [300, 88, ["Mass number A = 23", "العدد الكتلي A = 23"], ["Written at the upper left: protons + neutrons = 11 + 12.", "يُكتب أعلى يسار الرمز: البروتونات + النيوترونات = ١١ + ١٢."]],
      [300, 126, ["Atomic number Z = 11", "العدد الذري Z = 11"], ["Written at the lower left: 11 protons, and 11 electrons in the neutral atom.", "يُكتب أسفل يسار الرمز: ١١ بروتونًا، و١١ إلكترونًا في الذرة المتعادلة."]]]
  };

  D.prep1u1l2 = {
    title: ["Blocks of the modern periodic table", "فئات الجدول الدوري الحديث"],
    svg: function () {
      var s = '<rect x="20" y="20" width="44" height="150" rx="4" fill="#fca5a5"/><rect x="42" y="20" width="0" height="0"/>' +
        '<rect x="64" y="70" width="170" height="100" rx="4" fill="#f9a8d4"/><rect x="234" y="20" width="140" height="150" rx="4" fill="#fde68a"/>' +
        '<rect x="64" y="190" width="250" height="34" rx="4" fill="#c4b5fd"/><rect x="352" y="20" width="22" height="150" rx="3" fill="#c084fc"/>';
      s += tx(42, 100, "s") + tx(149, 125, "d") + tx(296, 100, "p") + tx(189, 212, "f") + tx(42, 186, "1A 2A", mut, 10) + tx(363, 186, "0", mut, 10);
      for (var i = 1; i <= 7; i++) s += tx(10, 18 + i * 21.5, String(i), mut, 10);
      s += '<path d="M380 30 L380 160" stroke="var(--muted)" stroke-width="2" marker-end="url(#pa)"/>' + arw("pa", "var(--muted)");
      return g(s);
    },
    spots: [[42, 60, ["s-block", "الفئة s"], ["Left side: group 1A alkali metals (very active) and group 2A alkaline earth metals. All metals except hydrogen.", "يسار الجدول: المجموعة 1A الفلزات القلوية (نشطة جدًا) و2A الفلزات القلوية الأرضية، وكلها فلزات عدا الهيدروجين."]],
      [149, 100, ["d-block", "الفئة d"], ["The middle of the table, starting in period 4. Most are transition elements, all metals.", "وسط الجدول وتبدأ من الدورة الرابعة، ومعظم عناصرها عناصر انتقالية وكلها فلزات."]],
      [290, 60, ["p-block", "الفئة p"], ["Right side: six groups with nonmetals, metalloids, some metals and the noble gases.", "يمين الجدول: ست مجموعات فيها لافلزات وأشباه فلزات وبعض الفلزات والغازات النبيلة."]],
      [189, 207, ["f-block", "الفئة f"], ["At the bottom of the table; all metals.", "أسفل الجدول، وكل عناصرها فلزات."]],
      [363, 120, ["Group 0: noble gases", "المجموعة الصفرية: الغازات النبيلة"], ["Full outer level, valency zero: He, Ne, Ar, Kr.", "مستواها الأخير مكتمل وتكافؤها صفر: He وNe وAr وKr."]],
      [12, 130, ["7 periods", "٧ دورات"], ["Horizontal rows. The period number = number of occupied energy levels. The table has 18 groups and 118 elements.", "صفوف أفقية، ورقم الدورة = عدد مستويات الطاقة المشغولة، وفي الجدول ١٨ مجموعة و١١٨ عنصرًا."]]]
  };

  D.prep1u1l3 = {
    title: ["Classifying substances", "تصنيف المواد"],
    svg: function () {
      function box(x, y, w, c, s1) { return '<rect x="' + (x - w / 2) + '" y="' + (y - 14) + '" width="' + w + '" height="28" rx="8" fill="' + c + '"/>' + tx(x, y + 5, s1, 'style="fill:#0f172a"', 12); }
      var ln = function (x1, y1, x2, y2) { return '<path d="M' + x1 + " " + y1 + " L" + x2 + " " + y2 + '" stroke="var(--muted)" stroke-width="2"/>'; };
      var s = ln(200, 34, 105, 86) + ln(200, 34, 295, 86) + ln(105, 100, 55, 166) + ln(105, 100, 155, 166) + ln(295, 100, 245, 166) + ln(295, 100, 345, 166);
      s += box(200, 26, 120, "#e2e8f0", t("Substances", "المواد")) + box(105, 92, 120, "#fde68a", t("Mixtures", "المخاليط")) + box(295, 92, 140, "#bbf7d0", t("Pure substances", "المواد النقية"));
      s += box(55, 172, 100, "#fef3c7", t("Heterogeneous", "غير متجانس")) + box(155, 172, 100, "#fef3c7", t("Homogeneous", "متجانس")) + box(245, 172, 92, "#dcfce7", t("Compounds", "مركبات")) + box(345, 172, 92, "#dcfce7", t("Elements", "عناصر"));
      s += tx(55, 205, t("sand + water", "رمل + ماء"), mut, 11) + tx(155, 205, t("salt solution", "محلول ملح"), mut, 11) + tx(245, 205, "HgO, H₂O", mut, 11) + tx(345, 205, "Hg, O₂", mut, 11);
      return g(s);
    },
    spots: [[105, 66, ["Mixtures", "المخاليط"], ["Not chemically combined: separated by physical methods such as filtration, magnets, evaporation and condensation.", "مكوناتها غير متحدة كيميائيًا، وتُفصل بطرق فيزيائية مثل الترشيح والمغناطيس والتبخير والتكثيف."]],
      [55, 226, ["Heterogeneous mixture", "مخلوط غير متجانس"], ["Its parts can be seen, like sand in water; filtration separates it.", "تُميَّز مكوناته بالعين، مثل الرمل في الماء، ويُفصل بالترشيح."]],
      [155, 226, ["Homogeneous mixture", "مخلوط متجانس"], ["A solution: salt in water. Evaporation and condensation separate it.", "محلول مثل الملح في الماء، ويُفصل بالتبخير والتكثيف."]],
      [295, 66, ["Pure substances", "المواد النقية"], ["Made of one type of atoms or molecules: compounds or elements.", "تتكون من نوع واحد من الذرات أو الجزيئات: مركبات أو عناصر."]],
      [245, 226, ["Compounds", "المركبات"], ["Elements combined chemically in fixed ratios; separated only by chemical methods, like heating HgO.", "عناصر متحدة كيميائيًا بنسب ثابتة، ولا تُفصل إلا بطرق كيميائية مثل تسخين أكسيد الزئبق."]],
      [345, 226, ["Elements", "العناصر"], ["The simplest pure form of matter; cannot be split further.", "أبسط صورة نقية للمادة ولا يمكن تحليلها."]]]
  };

  D.prep1u1l4 = {
    title: ["Ionic and covalent bonds", "الرابطة الأيونية والتساهمية"],
    svg: function () {
      var s = '<line x1="200" y1="10" x2="200" y2="230" stroke="var(--line)" stroke-width="2"/>';
      s += ci(55, 95, 28, "rgba(59,130,246,.18)") + tx(55, 100, "Na") + ci(145, 95, 28, "rgba(249,115,22,.18)") + tx(145, 100, "Cl");
      s += ci(83, 95, 5, "#3b82f6") + '<path d="M88 82 Q100 60 117 82" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#ba)"/>' + arw("ba", "#3b82f6");
      for (var i = 0; i < 7; i++) { var a = i * Math.PI * 2 / 8 + Math.PI / 8 + Math.PI; s += ci(145 + 28 * Math.cos(a), 95 + 28 * Math.sin(a), 4, "#f97316"); }
      s += tx(55, 160, "[Na]⁺", ink, 16) + tx(145, 160, "[Cl]⁻", ink, 16) + tx(100, 185, t("attract", "يتجاذبان"), mut, 12) + tx(100, 30, t("transfer", "انتقال"), mut, 12);
      s += ci(265, 100, 28, "rgba(59,130,246,.18)") + ci(330, 100, 34, "rgba(249,115,22,.18)") + tx(258, 105, "H") + tx(338, 105, "Cl");
      s += ci(293, 94, 4.5, "#3b82f6") + ci(293, 106, 4.5, "#f97316") + tx(300, 165, "H–Cl", ink, 18) + tx(300, 30, t("sharing", "مشاركة"), mut, 12);
      return g(s);
    },
    spots: [[100, 66, ["Electron transfer", "انتقال الإلكترون"], ["Sodium (2,8,1) gives its outer electron to chlorine (2,8,7).", "يعطي الصوديوم (2,8,1) إلكترون المستوى الأخير للكلور (2,8,7)."]],
      [55, 140, ["Positive ion Na⁺", "الأيون الموجب Na⁺"], ["11 protons, 10 electrons: charge +1, like neon.", "١١ بروتونًا و١٠ إلكترونات: شحنته +١ مثل النيون."]],
      [145, 140, ["Negative ion Cl⁻", "الأيون السالب Cl⁻"], ["17 protons, 18 electrons: charge −1, like argon.", "١٧ بروتونًا و١٨ إلكترونًا: شحنته −١ مثل الأرجون."]],
      [100, 205, ["Ionic bond", "الرابطة الأيونية"], ["The electrostatic attraction between the opposite ions.", "التجاذب الكهربي بين الأيونين المختلفين في الشحنة."]],
      [293, 125, ["Shared pair", "زوج مشترك"], ["H and Cl each give one electron to a shared pair that belongs to both.", "يشارك كل من H وCl بإلكترون في زوج مشترك ينتمي للذرتين."]],
      [300, 190, ["Single covalent bond", "رابطة تساهمية أحادية"], ["The dash shows one shared pair. O=O is double and N≡N is triple.", "الشرطة تمثل زوجًا مشتركًا واحدًا، وO=O ثنائية وN≡N ثلاثية."]]]
  };

  D.prep1u2l1 = {
    title: ["Electric field lines", "خطوط المجال الكهربي"],
    svg: function () {
      var s = arw("ea", "#ef4444"), i, a;
      for (i = 0; i < 10; i++) { a = i * Math.PI / 5; s += '<path d="M' + (90 + 22 * Math.cos(a)) + " " + (115 + 22 * Math.sin(a)) + " L" + (90 + 70 * Math.cos(a)) + " " + (115 + 70 * Math.sin(a)) + '" stroke="#ef4444" stroke-width="2" marker-end="url(#ea)"/>'; }
      s += ci(90, 115, 18, "#ef4444") + tx(90, 121, "+", 'style="fill:#fff"', 20);
      s += arw("eb", "#3b82f6");
      for (i = 0; i < 10; i++) { a = i * Math.PI / 5; s += '<path d="M' + (300 + 75 * Math.cos(a)) + " " + (115 + 75 * Math.sin(a)) + " L" + (300 + 27 * Math.cos(a)) + " " + (115 + 27 * Math.sin(a)) + '" stroke="#3b82f6" stroke-width="2" marker-end="url(#eb)"/>'; }
      s += ci(300, 115, 18, "#3b82f6") + tx(300, 121, "−", 'style="fill:#fff"', 20);
      s += tx(90, 222, t("positive charge", "شحنة موجبة"), mut, 12) + tx(300, 222, t("negative charge", "شحنة سالبة"), mut, 12);
      return g(s);
    },
    spots: [[90, 115, ["Positive charge", "شحنة موجبة"], ["Field lines start at a positive charge and point outwards.", "تبدأ خطوط المجال من الشحنة الموجبة وتتجه للخارج."]],
      [300, 115, ["Negative charge", "شحنة سالبة"], ["Field lines end at a negative charge and point inwards.", "تنتهي خطوط المجال عند الشحنة السالبة وتتجه للداخل."]],
      [160, 115, ["Field line", "خط المجال"], ["An imaginary line showing the path a small free positive charge would take.", "خط وهمي يوضح المسار الذي تسلكه شحنة موجبة صغيرة حرة."]],
      [90, 40, ["Lines never cross", "الخطوط لا تتقاطع"], ["Electric field lines do not intersect each other.", "خطوط المجال الكهربي لا تتقاطع."]],
      [230, 60, ["Electric field", "المجال الكهربي"], ["The region around a charge where its effect appears without contact.", "الحيز المحيط بالشحنة الذي يظهر فيه تأثيرها دون تلامس."]]]
  };

  D.prep1u2l2 = {
    title: ["Field of a bar magnet", "مجال المغناطيس المستقيم"],
    svg: function () {
      var s = "";
      [26, 48, 72, 98].forEach(function (h) { s += '<path d="M270 112 C 300 ' + (112 - h * 1.6) + ", 100 " + (112 - h * 1.6) + ', 130 112" fill="none" stroke="var(--muted)" stroke-width="1.6"/><path d="M270 128 C 300 ' + (128 + h * 1.6) + ", 100 " + (128 + h * 1.6) + ', 130 128" fill="none" stroke="var(--muted)" stroke-width="1.6"/>'; });
      s += '<path d="M270 120 L385 120 M130 120 L15 120" stroke="var(--muted)" stroke-width="1.6"/>';
      s += '<rect x="130" y="104" width="70" height="32" fill="#2563eb"/><rect x="200" y="104" width="70" height="32" fill="#dc2626"/>' + tx(150, 125, "S", 'style="fill:#fff"', 16) + tx(250, 125, "N", 'style="fill:#fff"', 16);
      s += '<path d="M200 44 L196 40 L196 48 z" fill="var(--ink)"/><path d="M200 196 L204 192 L204 200 z" fill="var(--ink)"/>';
      return g(s);
    },
    spots: [[250, 120, ["North pole (N)", "القطب الشمالي (N)"], ["Field lines leave the north pole. A freely hung magnet points this end almost to geographic north.", "تخرج خطوط المجال من القطب الشمالي، والمغناطيس المعلق حرًا يتجه هذا الطرف تقريبًا نحو الشمال الجغرافي."]],
      [150, 120, ["South pole (S)", "القطب الجنوبي (S)"], ["Field lines enter the south pole.", "تدخل خطوط المجال في القطب الجنوبي."]],
      [200, 44, ["Field lines", "خطوط المجال"], ["Imaginary lines from N to S outside the magnet; they never cross.", "خطوط وهمية من الشمالي إلى الجنوبي خارج المغناطيس، ولا تتقاطع."]],
      [290, 150, ["Dense near the poles", "متزاحمة قرب القطبين"], ["The force is strongest at the poles, so lines crowd there.", "القوة أكبر ما يمكن عند القطبين فتتزاحم الخطوط هناك."]],
      [200, 160, ["Weak in the middle", "ضعيفة في المنتصف"], ["Fewer iron filings stick near the middle of the magnet.", "تلتصق برادة حديد أقل قرب منتصف المغناطيس."]],
      [360, 60, ["Magnetic field", "المجال المغناطيسي"], ["The region around a magnet where its effect on magnetic materials appears.", "الحيز المحيط بالمغناطيس الذي يظهر فيه تأثيره على المواد المغناطيسية."]]]
  };

  D.prep1u2l3 = {
    title: ["Gravity and weight", "الجاذبية والوزن"],
    svg: function () {
      var s = arw("ga", "#16a34a"), i, a;
      s += ci(90, 120, 50, "#60a5fa") + tx(90, 125, t("Earth", "الأرض"), 'style="fill:#0f172a"', 12);
      for (i = 0; i < 8; i++) { a = i * Math.PI / 4; s += '<path d="M' + (90 + 100 * Math.cos(a)) + " " + (120 + 100 * Math.sin(a) * 0.95) + " L" + (90 + 58 * Math.cos(a)) + " " + (120 + 58 * Math.sin(a) * 0.95) + '" stroke="#16a34a" stroke-width="2" marker-end="url(#ga)"/>'; }
      s += ci(240, 80, 16, "#f59e0b") + ci(340, 80, 24, "#8b5cf6") + '<path d="M258 80 L285 80" stroke="#16a34a" stroke-width="3" marker-end="url(#ga)"/><path d="M314 80 L290 80" stroke="#16a34a" stroke-width="3" marker-end="url(#ga)"/>';
      s += tx(287, 60, "F   F", ink, 12) + '<rect x="270" y="140" width="40" height="8" fill="var(--ink)"/><path d="M290 148 l0 6 l8 4 l-16 6 l16 6 l-16 6 l8 4 l0 6" fill="none" stroke="var(--muted)" stroke-width="2"/>';
      s += '<rect x="274" y="192" width="32" height="26" rx="4" fill="#64748b"/>' + tx(290, 210, "6 kg", 'style="fill:#fff"', 11) + tx(350, 205, "60 N", ink, 14);
      return g(s);
    },
    spots: [[90, 120, ["Earth's gravitational field", "مجال جاذبية الأرض"], ["The space where Earth pulls objects towards its centre.", "الحيز الذي تجذب فيه الأرض الأجسام نحو مركزها."]],
      [160, 50, ["Field lines", "خطوط المجال"], ["Arrows point to Earth's centre: the direction of the pull.", "الأسهم تتجه نحو مركز الأرض: اتجاه قوة الجذب."]],
      [290, 100, ["Mutual forces", "قوى متبادلة"], ["Equal in size, opposite in direction, always attraction.", "متساوية في المقدار ومتضادة في الاتجاه، وهي تجاذب دائمًا."]],
      [340, 110, ["Bigger mass, bigger force", "كتلة أكبر وقوة أكبر"], ["The force grows with the masses and shrinks as the square of the distance grows.", "تزداد القوة بزيادة الكتلتين وتقل بزيادة مربع المسافة."]],
      [250, 205, ["Weight = mass × g", "الوزن = الكتلة × g"], ["6 kg × 10 N/kg = 60 N on Earth; on the Moon only 10 N.", "٦ كجم × ١٠ N/kg = ٦٠ نيوتن على الأرض، وعلى القمر ١٠ نيوتن فقط."]]]
  };

  D.prep1u3l1 = {
    title: ["Plant cell and animal cell", "الخلية النباتية والخلية الحيوانية"],
    svg: function () {
      var s = '<rect x="20" y="40" width="170" height="160" rx="16" fill="rgba(134,239,172,.35)" stroke="#15803d" stroke-width="6"/>' +
        '<rect x="88" y="80" width="90" height="100" rx="20" fill="rgba(186,230,253,.9)" stroke="#0284c7" stroke-width="2"/>' + ci(55, 75, 18, "rgba(147,51,234,.35)", "#7e22ce") +
        '<ellipse cx="55" cy="160" rx="16" ry="8" fill="#22c55e" stroke="#15803d"/><ellipse cx="55" cy="125" rx="16" ry="8" fill="#22c55e" stroke="#15803d"/>';
      s += '<ellipse cx="300" cy="120" rx="85" ry="72" fill="rgba(251,207,232,.75)" stroke="#db2777" stroke-width="2"/>' + ci(295, 120, 24, "rgba(147,51,234,.35)", "#7e22ce") +
        '<path d="M335 82 l12 0 M341 76 l0 12" stroke="#16a34a" stroke-width="4"/><ellipse cx="250" cy="160" rx="16" ry="8" fill="#fb923c" stroke="#c2410c"/>';
      s += tx(105, 225, t("Plant cell", "خلية نباتية"), ink, 13) + tx(300, 225, t("Animal cell", "خلية حيوانية"), ink, 13);
      return g(s);
    },
    spots: [[24, 200, ["Cell wall", "الجدار الخلوي"], ["Firm outer layer of the plant cell; the animal cell has none.", "طبقة خارجية صلبة في الخلية النباتية، ولا توجد في الحيوانية."]],
      [55, 142, ["Chloroplasts", "البلاستيدات الخضراء"], ["Contain chlorophyll for photosynthesis; plant cells only.", "تحتوي على الكلوروفيل للبناء الضوئي، في الخلية النباتية فقط."]],
      [133, 130, ["Large vacuole", "فجوة كبيرة"], ["Plant cells have a large vacuole full of cell sap.", "للخلية النباتية فجوة كبيرة مملوءة بالعصير الخلوي."]],
      [295, 120, ["Nucleus", "النواة"], ["A true nucleus with a nuclear membrane, in both plant and animal cells (eukaryotes).", "نواة حقيقية لها غشاء نووي، في الخلية النباتية والحيوانية (حقيقيات النواة)."]],
      [341, 62, ["Centrosome", "الجسم المركزي"], ["Found in the animal cell only.", "يوجد في الخلية الحيوانية فقط."]],
      [250, 180, ["Mitochondria", "الميتوكوندريا"], ["Where cellular respiration releases energy; in both cells.", "يحدث فيها التنفس الخلوي فتنطلق الطاقة، وتوجد في الخليتين."]]]
  };

  D.prep1u3l2 = {
    title: ["Photosynthesis in a leaf", "البناء الضوئي في الورقة"],
    svg: function () {
      var s = arw("la", "var(--muted)") + ci(50, 45, 24, "#facc15");
      s += '<path d="M120 150 Q230 30 340 150 Q230 230 120 150 z" fill="#4ade80" stroke="#15803d" stroke-width="2"/><path d="M110 152 L330 150" stroke="#15803d" stroke-width="3"/>';
      s += '<path d="M75 60 L150 110" stroke="#facc15" stroke-width="3" marker-end="url(#la)"/>';
      s += '<path d="M380 60 L320 110" stroke="var(--muted)" stroke-width="2" marker-end="url(#la)"/>' + tx(380, 50, "CO₂", ink, 13);
      s += '<path d="M230 185 L230 225" stroke="#60a5fa" stroke-width="2" marker-end="url(#la)"/>' + tx(270, 230, "O₂", ink, 13);
      s += '<path d="M60 200 L118 156" stroke="#38bdf8" stroke-width="2" marker-end="url(#la)"/>' + tx(50, 215, t("water", "ماء"), ink, 12);
      s += '<ellipse cx="200" cy="170" rx="5" ry="9" fill="#166534"/><ellipse cx="210" cy="170" rx="5" ry="9" fill="#166534"/>' + tx(240, 125, t("glucose", "جلوكوز"), 'style="fill:#14532d"', 13);
      return g(s);
    },
    spots: [[50, 45, ["Light energy", "الطاقة الضوئية"], ["Sunlight supplies the energy; chlorophyll in the chloroplasts absorbs it.", "ضوء الشمس يمد العملية بالطاقة، ويمتصه الكلوروفيل في البلاستيدات الخضراء."]],
      [350, 80, ["Carbon dioxide in", "دخول ثاني أكسيد الكربون"], ["Enters the leaf through the stomata.", "يدخل الورقة عبر الثغور."]],
      [85, 185, ["Water", "الماء"], ["Comes up from the roots through the xylem.", "يصعد من الجذور عبر الخشب."]],
      [240, 105, ["Glucose", "الجلوكوز"], ["The food the plant makes; light energy is stored as chemical energy.", "الغذاء الذي يصنعه النبات، فتُخزَّن الطاقة الضوئية في صورة طاقة كيميائية."]],
      [255, 210, ["Oxygen out", "خروج الأكسجين"], ["Released by photosynthesis. At night the plant only respires and gives out CO₂.", "ينطلق من البناء الضوئي، وفي الليل يتنفس النبات فقط ويطلق ثاني أكسيد الكربون."]],
      [205, 150, ["Stomata", "الثغور"], ["Tiny pores opened and closed by guard cells, for gas exchange and water vapour loss.", "فتحات دقيقة تفتحها وتغلقها الخلايا الحارسة لتبادل الغازات وخروج بخار الماء."]]]
  };

  D.prep1u3l3 = {
    title: ["Some microbes", "بعض الميكروبات"],
    svg: function () {
      function box(x, y, w, c, s1) { return '<rect x="' + (x - w / 2) + '" y="' + (y - 13) + '" width="' + w + '" height="26" rx="8" fill="' + c + '"/>' + tx(x, y + 5, s1, 'style="fill:#0f172a"', 11); }
      var ln = function (x1, y1, x2, y2) { return '<path d="M' + x1 + " " + y1 + " L" + x2 + " " + y2 + '" stroke="var(--muted)" stroke-width="2"/>'; };
      var s = ln(200, 30, 100, 80) + ln(200, 30, 300, 80) + ln(100, 92, 100, 130) + ln(300, 92, 245, 130) + ln(300, 92, 355, 130);
      s += ln(100, 142, 40, 190) + ln(100, 142, 100, 190) + ln(100, 142, 160, 190) + ln(245, 142, 230, 190) + ln(355, 142, 310, 190) + ln(355, 142, 375, 190);
      s += box(200, 22, 110, "#e2e8f0", t("Microbes", "الميكروبات")) + box(100, 86, 120, "#fde68a", t("Prokaryotes", "بدائيات النواة")) + box(300, 86, 120, "#bbf7d0", t("Eukaryotes", "حقيقيات النواة"));
      s += box(100, 136, 90, "#fef3c7", t("Bacteria", "البكتيريا")) + box(245, 136, 90, "#dcfce7", t("Protozoa", "الأوليات")) + box(355, 136, 80, "#dcfce7", t("Fungi", "الفطريات"));
      s += tx(40, 205, t("root nodule", "العقد الجذرية"), mut, 9) + tx(100, 220, t("decomposition", "التحلل"), mut, 9) + tx(160, 205, t("lactic acid", "حمض اللاكتيك"), mut, 9) + tx(230, 205, "Entamoeba", mut, 9) + tx(310, 205, "Penicillium", mut, 9) + tx(375, 220, t("yeast", "الخميرة"), mut, 9);
      return g(s);
    },
    spots: [[40, 182, ["Root nodule bacteria", "بكتيريا العقد الجذرية"], ["Live on legume roots and give plants usable nitrogen.", "تعيش على جذور البقوليات وتمد النبات بالنيتروجين في صورة صالحة."]],
      [100, 180, ["Decomposition bacteria", "بكتيريا التحلل"], ["Break plant remains into soluble nitrogen compounds that make soil fertile.", "تحلل بقايا النباتات إلى مركبات نيتروجينية ذائبة تزيد خصوبة التربة."]],
      [160, 182, ["Lactic acid bacteria", "بكتيريا حمض اللاكتيك"], ["Turn lactose into lactic acid: yogurt.", "تحول اللاكتوز إلى حمض اللاكتيك: الزبادي."]],
      [230, 182, ["Entamoeba histolytica", "الإنتاميبا هيستوليتيكا"], ["A harmful protozoan that causes dysentery.", "حيوان أولي ضار يسبب الدوسنتاريا."]],
      [310, 182, ["Penicillium", "البنسيليوم"], ["P. notatum makes penicillin; P. roqueforti flavours Roquefort cheese.", "البنسيليوم نوتاتم يفرز البنسلين، والبنسيليوم روكفورتي يعطي جبن الروكفور طعمه."]],
      [375, 182, ["Yeast", "الخميرة"], ["Used for bread; rich in vitamin B complex and antioxidants.", "تُستخدم في صناعة الخبز، وغنية بفيتامين ب المركب ومضادات الأكسدة."]]]
  };

  D.prep1u4l1 = {
    title: ["Earth's tilt and the seasons", "ميل محور الأرض والفصول"],
    svg: function () {
      var s = '<ellipse cx="200" cy="120" rx="160" ry="60" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 5"/>' + ci(200, 120, 26, "#facc15");
      s += ci(60, 120, 20, "#3b82f6") + '<path d="M60 100 A20 20 0 0 0 60 140 Z" fill="rgba(0,0,0,.4)"/><path d="M68 92 L52 148" stroke="var(--ink)" stroke-width="2"/>';
      s += ci(340, 120, 20, "#3b82f6") + '<path d="M340 100 A20 20 0 0 1 340 140 Z" fill="rgba(0,0,0,.4)"/><path d="M348 92 L332 148" stroke="var(--ink)" stroke-width="2"/>';
      s += tx(60, 175, t("21 June", "٢١ يونيو"), ink, 11) + tx(340, 175, t("22 December", "٢٢ ديسمبر"), ink, 11) + tx(200, 160, t("Sun", "الشمس"), mut, 11) + tx(70, 86, "N", mut, 10) + tx(350, 86, "N", mut, 10);
      return g(s);
    },
    spots: [[200, 120, ["The Sun", "الشمس"], ["Earth orbits the Sun once every 365¼ days.", "تدور الأرض حول الشمس مرة كل ٣٦٥¼ يومًا."]],
      [40, 98, ["Axis tilted 23.5°", "محور مائل ٢٣٫٥°"], ["The axis runs through the poles and is tilted 23.5° from the perpendicular to the orbit.", "يمر المحور بالقطبين ويميل ٢٣٫٥° عن العمودي على مستوى المدار."]],
      [85, 130, ["June: summer", "يونيو: الصيف"], ["The northern end leans towards the Sun: longer days in Egypt.", "يميل الطرف الشمالي نحو الشمس فيطول النهار في مصر."]],
      [315, 130, ["December: winter", "ديسمبر: الشتاء"], ["The northern end leans away from the Sun: longer nights.", "يميل الطرف الشمالي بعيدًا عن الشمس فيطول الليل."]],
      [200, 58, ["Spring and autumn", "الربيع والخريف"], ["The axis leans neither towards nor away from the Sun: day and night are about equal.", "لا يميل المحور نحو الشمس ولا بعيدًا عنها، فيتساوى الليل والنهار تقريبًا."]],
      [60, 140, ["Day and night", "الليل والنهار"], ["Earth spins on its axis every 24 hours; the side facing the Sun has day.", "تدور الأرض حول محورها كل ٢٤ ساعة، والجانب المواجه للشمس يكون نهارًا."]]]
  };

  D.prep1u4l2 = {
    title: ["A lunar eclipse", "خسوف القمر"],
    svg: function () {
      var s = ci(30, 120, 40, "#facc15") + '<path d="M150 98 L390 60 L390 180 L150 142 z" fill="rgba(148,163,184,.35)"/><path d="M150 98 L390 112 L390 128 L150 142 z" fill="rgba(15,23,42,.8)"/>';
      s += ci(150, 120, 22, "#3b82f6") + ci(310, 120, 9, "#7f1d1d") + ci(310, 78, 9, "#e7e5e4") + tx(150, 160, t("Earth", "الأرض"), ink, 11) + tx(30, 175, t("Sun", "الشمس"), ink, 11) + tx(345, 124, t("Moon", "القمر"), 'style="fill:#e2e8f0"', 10);
      return g(s);
    },
    spots: [[30, 120, ["The Sun", "الشمس"], ["The source of light that the Moon reflects.", "مصدر الضوء الذي يعكسه القمر."]],
      [150, 120, ["The Earth", "الأرض"], ["An opaque body between the Sun and the Moon at full moon.", "جسم معتم يكون بين الشمس والقمر في طور البدر."]],
      [250, 120, ["Earth's shadow", "ظل الأرض"], ["The dark area where Earth blocks all direct sunlight.", "المنطقة المظلمة التي تحجب فيها الأرض ضوء الشمس كله."]],
      [250, 88, ["Penumbra", "شبه الظل"], ["Partly lit. A Moon only in the penumbra looks dim red: not an eclipse.", "منطقة شبه مضيئة، والقمر في شبه الظل فقط يبدو أحمر خافتًا ولا يُعد خسوفًا."]],
      [310, 140, ["Total eclipse", "خسوف كلي"], ["The whole Moon is inside Earth's shadow and looks like a dark disc.", "القمر كله داخل ظل الأرض فيبدو قرصًا معتمًا."]],
      [310, 60, ["No eclipse", "لا خسوف"], ["With its orbit tilted 5°, the full Moon often passes above or below the shadow.", "مع ميل مداره ٥° يمر البدر غالبًا أعلى الظل أو أسفله."]]]
  };

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  L.names.prep1_atom = ["Build an atom", "ابنِ ذرة"];
  L.names.prep1_ptable = ["Periodic table explorer", "مستكشف الجدول الدوري"];
  L.names.prep1_matter = ["Separate it! simulation", "محاكاة الفصل"];
  L.names.prep1_bond = ["Bond builder", "بناء الروابط"];
  L.names.prep1_charge = ["Static electricity simulation", "محاكاة الكهربية الساكنة"];
  L.names.prep1_magnet = ["Magnets and fields simulation", "محاكاة المغناطيس ومجاله"];
  L.names.prep1_gravity = ["Gravity and weight simulation", "محاكاة الجاذبية والوزن"];
  L.names.prep1_cell = ["Cell microscope", "مجهر الخلايا"];
  L.names.prep1_life = ["Leaf and pond simulation", "محاكاة الورقة والبركة"];
  L.names.prep1_yogurt = ["Yogurt bacteria simulation", "محاكاة بكتيريا الزبادي"];
  L.names.prep1_solar = ["Planets and shadows simulation", "محاكاة الكواكب والظلال"];
  L.names.prep1_eclipse = ["Lunar eclipse simulation", "محاكاة خسوف القمر"];
})();
