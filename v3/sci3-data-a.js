/* EduZone Learn v3 - Science, Egyptian Prep 3 (3rd preparatory), Term 1 - Units 1 and 2.
   Follows the Ministry book contents: Unit 1 Chemical Reactions and Their Environmental Impacts,
   Unit 2 Electricity and Magnetism. Used by the National and British curricula.
   Lesson shape:
     idea  : two-way spoken explanation { official:{en:[],ar:[]}, story:{en:[],ar:[]} }
     words : key-word cards [en term, ar term, en meaning, ar meaning]
     lab   : the hands-on activity (type + config) done BEFORE the quiz
     quiz  : [{ q:[en,ar], c:[[en,ar] x4] (first = correct, shuffled on screen), off:[en,ar], sto:[en,ar] }] */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCI3 = E.SCI3 || { units: [] };

  E.SCI3.units.push({
    id: "u1", num: 1, icon: "⚗️", color: "blue",
    title: { en: "Chemical Reactions and Their Environmental Impacts", ar: "التفاعلات الكيميائية وتأثيراتها البيئية" },
    lessons: [
      {
        id: "u1l1", icon: "🧪", page: 2,
        title: { en: "Types of Chemical Reactions", ar: "أنواع التفاعلات الكيميائية" },
        idea: {
          official: {
            en: ["A chemical reaction breaks bonds in the reactants and forms new bonds in the products, so new substances are made.",
              "Signs of a reaction: a colour change, a gas, a precipitate, or heat and light given out.",
              "There are four main types: direct combination, decomposition, single displacement and double displacement.",
              "In the activity series, a more active metal displaces a less active metal from its salt solution, and metals above hydrogen displace it from dilute acids.",
              "Oxidation is the loss of electrons and reduction is the gain of electrons. They always happen together."],
            ar: ["التفاعل الكيميائي هو كسر روابط في المواد المتفاعلة وتكوين روابط جديدة في المواد الناتجة، فتتكوّن مواد جديدة.",
              "من علامات حدوث التفاعل: تغيّر اللون، أو تصاعد غاز، أو تكوّن راسب، أو انطلاق حرارة وضوء.",
              "أنواع التفاعلات الرئيسية أربعة: الاتحاد المباشر، والتحلل، والإحلال البسيط، والإحلال المزدوج.",
              "في سلسلة النشاط الكيميائي يحلّ الفلز الأنشط محل الفلز الأقل نشاطًا في محلول ملحه، والفلزات التي تسبق الهيدروجين تحلّ محله في الأحماض المخففة.",
              "الأكسدة فقد إلكترونات، والاختزال اكتساب إلكترونات، وهما يحدثان معًا دائمًا."]
          },
          story: {
            en: ["Imagine a dance party. The atoms are dancers holding hands, and their hands are the bonds.",
              "Combination: two dancers join into one couple. Magnesium and oxygen become magnesium oxide.",
              "Decomposition: a couple splits up when it gets too hot. Heating calcium carbonate gives calcium oxide and carbon dioxide.",
              "Single displacement: a stronger dancer cuts in. Zinc takes copper's place, so the blue solution fades and red copper appears.",
              "Double displacement: two couples swap partners. Silver nitrate and sodium chloride swap, and white silver chloride falls as a precipitate."],
            ar: ["تخيّل حفلة رقص: الذرات راقصون يمسكون بأيدي بعضهم، وهذه الأيدي هي الروابط.",
              "الاتحاد المباشر: راقصان يتّحدان في زوج واحد؛ الماغنسيوم والأكسجين يكوّنان أكسيد الماغنسيوم.",
              "التحلل: الزوج ينفصل عندما تشتد الحرارة؛ تسخين كربونات الكالسيوم يعطي أكسيد الكالسيوم وثاني أكسيد الكربون.",
              "الإحلال البسيط: راقص أقوى يأخذ مكان غيره؛ الخارصين يحلّ محل النحاس، فيبهت اللون الأزرق ويظهر النحاس الأحمر.",
              "الإحلال المزدوج: زوجان يتبادلان الشركاء؛ نترات الفضة وكلوريد الصوديوم يتبادلان فيترسب كلوريد الفضة الأبيض."]
          }
        },
        words: [
          ["Activity series", "سلسلة النشاط الكيميائي", "Metals in order of activity: K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, H, Cu, Hg, Ag, Pt, Au.", "ترتيب الفلزات حسب نشاطها: K, Na, Ca, Mg, Al, Zn, Fe, Sn, Pb, H, Cu, Hg, Ag, Pt, Au."],
          ["Precipitate", "الراسب", "A solid that forms and settles out of a solution.", "مادة صلبة تتكوّن وتنفصل عن المحلول."],
          ["Neutralisation", "التعادل", "Acid + base → salt + water. A kind of double displacement.", "حمض + قاعدة ← ملح + ماء، وهو نوع من الإحلال المزدوج."],
          ["Oxidation", "الأكسدة", "Loss of electrons. The substance that loses them is the reducing agent.", "فقد إلكترونات، والمادة التي تفقدها هي العامل المختزل."],
          ["Reduction", "الاختزال", "Gain of electrons. The substance that gains them is the oxidising agent.", "اكتساب إلكترونات، والمادة التي تكتسبها هي العامل المؤكسد."]
        ],
        lab: { parts: [{ type: "reactlab" }, { type: "patterns" }, {
          type: "sort",
          prompt: ["Tap an equation, then tap its reaction type.", "اضغط على معادلة، ثم اضغط على نوع التفاعل."],
          bins: [["comb", "🤝", "Direct combination", "اتحاد مباشر"], ["dec", "💥", "Decomposition", "تحلل"], ["single", "🔁", "Single displacement", "إحلال بسيط"], ["double", "🔀", "Double displacement", "إحلال مزدوج"]],
          items: [
            [eq("2Mg + O₂ → 2MgO"), "comb"], [eq("2Cu + O₂ → 2CuO"), "comb"],
            [eq("2HgO → 2Hg + O₂"), "dec"], [eq("CaCO₃ → CaO + CO₂"), "dec"],
            [eq("Zn + CuSO₄ → ZnSO₄ + Cu"), "single"], [eq("Mg + 2HCl → MgCl₂ + H₂"), "single"],
            [eq("HCl + NaOH → NaCl + H₂O"), "double"], [eq("AgNO₃ + NaCl → NaNO₃ + AgCl↓"), "double"]
          ]
        }] },
        quiz: [
          { q: ["Which type of reaction is " + eq("2Mg + O₂ → 2MgO") + "?", "ما نوع التفاعل " + eq("2Mg + O₂ → 2MgO") + "؟"],
            c: [["Direct combination", "اتحاد مباشر"], ["Decomposition", "تحلل"], ["Single displacement", "إحلال بسيط"], ["Double displacement", "إحلال مزدوج"]],
            off: ["Two substances join to form one compound, so it is direct combination.", "مادتان تتحدان لتكوين مركب واحد، إذن هو اتحاد مباشر."],
            sto: ["Two dancers became one couple: magnesium and oxygen joined into magnesium oxide.", "راقصان أصبحا زوجًا واحدًا: الماغنسيوم والأكسجين اتّحدا في أكسيد الماغنسيوم."] },
          { q: ["Zinc is put into blue copper sulphate solution. What do you see?", "وُضع الخارصين في محلول كبريتات النحاس الأزرق. ماذا تلاحظ؟"],
            c: [["The blue colour fades and red copper forms", "يبهت اللون الأزرق ويتكوّن نحاس أحمر"], ["Nothing happens", "لا يحدث شيء"], ["Hydrogen bubbles appear", "تتصاعد فقاعات هيدروجين"], ["A white precipitate forms", "يتكوّن راسب أبيض"]],
            off: ["Zinc is above copper in the activity series, so it displaces it: " + eq("Zn + CuSO₄ → ZnSO₄ + Cu") + ".", "الخارصين يسبق النحاس في سلسلة النشاط، فيحلّ محله: " + eq("Zn + CuSO₄ → ZnSO₄ + Cu") + "."],
            sto: ["Zinc is the stronger dancer, so it cuts in and copper leaves the dance floor as red metal.", "الخارصين هو الراقص الأقوى، فيأخذ المكان ويخرج النحاس فلزًا أحمر."] },
          { q: ["Which metal does NOT react with dilute hydrochloric acid?", "أي فلز لا يتفاعل مع حمض الهيدروكلوريك المخفف؟"],
            c: [["Copper", "النحاس"], ["Magnesium", "الماغنسيوم"], ["Zinc", "الخارصين"], ["Iron", "الحديد"]],
            off: ["Copper comes after hydrogen in the activity series, so it cannot displace hydrogen from the acid.", "النحاس يلي الهيدروجين في سلسلة النشاط، فلا يستطيع أن يحلّ محله في الحمض."],
            sto: ["Copper is weaker than hydrogen, so it cannot push hydrogen out of its seat.", "النحاس أضعف من الهيدروجين، فلا يقدر أن يأخذ مكانه."] },
          { q: ["In " + eq("Zn → Zn²⁺ + 2e⁻") + ", zinc is…", "في " + eq("Zn → Zn²⁺ + 2e⁻") + " يكون الخارصين قد…"],
            c: [["oxidised (it loses electrons)", "تأكسد (فقد إلكترونات)"], ["reduced (it gains electrons)", "اختُزل (اكتسب إلكترونات)"], ["neutralised", "تعادل"], ["decomposed", "تحلل"]],
            off: ["Oxidation is loss of electrons. Zinc loses two electrons, so it is oxidised and is the reducing agent.", "الأكسدة فقد إلكترونات، والخارصين فقد إلكترونين، إذن تأكسد وهو العامل المختزل."],
            sto: ["Zinc gives away two electrons like giving away two coins. Losing is oxidation.", "الخارصين أعطى إلكترونين كأنه أعطى عملتين، والفقد هو الأكسدة."] },
          { q: [eq("HCl + NaOH → NaCl + H₂O") + " is an example of…", eq("HCl + NaOH → NaCl + H₂O") + " مثال على…"],
            c: [["neutralisation (double displacement)", "التعادل (إحلال مزدوج)"], ["decomposition", "التحلل"], ["direct combination", "الاتحاد المباشر"], ["single displacement", "الإحلال البسيط"]],
            off: ["An acid and a base exchange ions to make a salt and water. That is neutralisation, a type of double displacement.", "حمض وقاعدة يتبادلان الأيونات فيتكوّن ملح وماء، وهذا تعادل وهو نوع من الإحلال المزدوج."],
            sto: ["Two couples swapped partners: H met OH to make water, and Na met Cl to make salt.", "زوجان تبادلا الشركاء: الهيدروجين قابل الهيدروكسيد فتكوّن الماء، والصوديوم قابل الكلور فتكوّن الملح."] },
          { q: ["Heating mercury oxide gives mercury and oxygen. This is…", "تسخين أكسيد الزئبق يعطي زئبقًا وأكسجين. هذا تفاعل…"],
            c: [["thermal decomposition", "تحلل حراري"], ["direct combination", "اتحاد مباشر"], ["double displacement", "إحلال مزدوج"], ["neutralisation", "تعادل"]],
            off: ["One compound breaks down by heat into simpler substances: thermal decomposition, " + eq("2HgO → 2Hg + O₂") + ".", "مركب واحد يتفكك بالحرارة إلى مواد أبسط، وهذا تحلل حراري: " + eq("2HgO → 2Hg + O₂") + "."],
            sto: ["The heat made the couple split: mercury went one way and oxygen went the other.", "الحرارة جعلت الزوج ينفصل: الزئبق في اتجاه والأكسجين في اتجاه آخر."] }
        ]
      },
      {
        id: "u1l2", icon: "🔥", page: 15,
        title: { en: "Combustion Reactions and Environmental Pollution", ar: "تفاعلات الاحتراق والتلوث البيئي" },
        idea: {
          official: {
            en: ["Combustion needs three things, the fire triangle: fuel, oxygen and heat. Remove any one and the fire goes out.",
              "The ignition point is the lowest temperature at which a substance starts burning and keeps burning.",
              "Complete combustion has enough oxygen: " + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + ", with a blue flame and more energy.",
              "Incomplete combustion lacks oxygen. It gives a yellow flame, black soot and toxic carbon monoxide, CO.",
              "Burning fuel releases CO₂, SO₂ and nitrogen oxides that pollute the air. Catalytic converters, chimney filters and clean energy reduce this pollution."],
            ar: ["يحتاج الاحتراق إلى ثلاثة عناصر هي مثلث الاحتراق: مادة قابلة للاشتعال، وأكسجين، وحرارة. إذا أُزيل أحدها انطفأت النار.",
              "نقطة الاشتعال هي أقل درجة حرارة تبدأ عندها المادة في الاشتعال وتستمر.",
              "الاحتراق التام يحدث مع وفرة الأكسجين: " + eq("CH₄ + 2O₂ → CO₂ + 2H₂O") + "، ويكون اللهب أزرق والطاقة أكبر.",
              "الاحتراق غير التام يحدث مع نقص الأكسجين، فيكون اللهب أصفر ويتكوّن السناج الأسود وغاز أول أكسيد الكربون السام.",
              "احتراق الوقود يطلق غازات ثاني أكسيد الكربون وثاني أكسيد الكبريت وأكاسيد النيتروجين التي تلوث الهواء، ويقلل المحول الحفزي ومرشحات المداخن والطاقة النظيفة من هذا التلوث."]
          },
          story: {
            en: ["Picture a campfire with three friends: wood, air and a match. If one friend leaves, the fire party ends.",
              "Water takes away the heat, a blanket takes away the air, and moving the wood takes away the fuel.",
              "When the gas stove at home gets plenty of air, the flame is blue and the food cooks fast.",
              "When the air holes get blocked, the flame turns yellow, the pot gets black soot, and invisible CO can fill the kitchen. That is dangerous!",
              "Burning rice straw makes the black cloud over our cities. A car's catalytic converter works like a filter that turns poison gases into safer ones."],
            ar: ["تخيّل نار المخيم ومعها ثلاثة أصدقاء: الخشب والهواء وعود الثقاب. إذا غادر أحدهم انتهت الحفلة.",
              "الماء يأخذ الحرارة، والبطانية تمنع الهواء، وإبعاد الخشب يزيل الوقود.",
              "عندما يحصل موقد الغاز في البيت على هواء كافٍ يكون اللهب أزرق وينضج الطعام بسرعة.",
              "وعندما تُسد فتحات الهواء يصبح اللهب أصفر، ويسودّ الإناء بالسناج، وقد يملأ غاز أول أكسيد الكربون الخفي المطبخ، وهذا خطر!",
              "حرق قش الأرز يسبب السحابة السوداء، والمحول الحفزي في السيارة يعمل كمرشح يحوّل الغازات السامة إلى غازات أقل ضررًا."]
          }
        },
        words: [
          ["Fire triangle", "مثلث الاحتراق", "Fuel + oxygen + heat. All three are needed for burning.", "مادة قابلة للاشتعال + أكسجين + حرارة، ولا بد من الثلاثة."],
          ["Ignition point", "نقطة الاشتعال", "The lowest temperature at which a substance starts and keeps burning.", "أقل درجة حرارة تبدأ عندها المادة في الاشتعال وتستمر."],
          ["Soot", "السناج", "Black unburnt carbon from incomplete combustion.", "كربون أسود غير محترق ينتج من الاحتراق غير التام."],
          ["Carbon monoxide", "أول أكسيد الكربون", "CO: a toxic gas with no colour and no smell.", "CO: غاز سام عديم اللون والرائحة."],
          ["Catalytic converter", "المحول الحفزي", "A car part that changes CO and nitrogen oxides into less harmful gases.", "جزء في السيارة يحوّل أول أكسيد الكربون وأكاسيد النيتروجين إلى غازات أقل ضررًا."]
        ],
        lab: { type: "burner" },
        quiz: [
          { q: ["Covering a burning pan with a lid puts out the fire because it removes…", "تغطية مقلاة مشتعلة بغطاء تطفئ النار لأنها تمنع…"],
            c: [["oxygen", "الأكسجين"], ["heat", "الحرارة"], ["fuel", "الوقود"], ["carbon dioxide", "ثاني أكسيد الكربون"]],
            off: ["Fire needs fuel, oxygen and heat. The lid cuts off the oxygen, so one side of the fire triangle is gone.", "النار تحتاج وقودًا وأكسجين وحرارة، والغطاء يقطع الأكسجين فيختفي ضلع من مثلث الاحتراق."],
            sto: ["The air friend could not get in under the lid, so the fire party ended.", "صديق الهواء لم يستطع الدخول تحت الغطاء، فانتهت حفلة النار."] },
          { q: ["A yellow, sooty flame shows…", "اللهب الأصفر المصحوب بالسناج يدل على…"],
            c: [["incomplete combustion", "احتراق غير تام"], ["complete combustion", "احتراق تام"], ["neutralisation", "تعادل"], ["decomposition", "تحلل"]],
            off: ["Without enough oxygen some carbon stays unburnt as soot and the flame is yellow: incomplete combustion.", "عند نقص الأكسجين يبقى بعض الكربون دون احتراق على هيئة سناج ويكون اللهب أصفر: احتراق غير تام."],
            sto: ["The stove's air holes were blocked, so the flame turned yellow and the pot went black.", "فتحات هواء الموقد كانت مسدودة، فاصفرّ اللهب واسودّ الإناء."] },
          { q: ["Which gas is toxic, colourless and has no smell?", "أي غاز سام وعديم اللون والرائحة؟"],
            c: [["Carbon monoxide, CO", "أول أكسيد الكربون CO"], ["Oxygen", "الأكسجين"], ["Water vapour", "بخار الماء"], ["Nitrogen dioxide, NO₂", "ثاني أكسيد النيتروجين NO₂"]],
            off: ["Carbon monoxide comes from incomplete combustion. It is toxic and we cannot see or smell it. NO₂ is a reddish-brown gas.", "أول أكسيد الكربون ينتج من الاحتراق غير التام، وهو سام ولا نراه ولا نشمه، أما ثاني أكسيد النيتروجين فلونه بني محمر."],
            sto: ["CO is like a silent thief in the kitchen: no colour, no smell, but very dangerous.", "أول أكسيد الكربون مثل لص صامت في المطبخ: بلا لون ولا رائحة لكنه خطير جدًا."] },
          { q: ["Which test shows that water vapour is produced by burning?", "أي اختبار يوضح تكوّن بخار الماء عند الاحتراق؟"],
            c: [["Dry cobalt chloride paper turns from blue to pink", "تتحول ورقة كلوريد الكوبالت الجافة من الأزرق إلى الوردي"], ["Lime water turns milky", "يتعكر ماء الجير"], ["Litmus turns blue", "يتحول عباد الشمس إلى الأزرق"], ["The gas burns with a pop", "يشتعل الغاز بفرقعة"]],
            off: ["Anhydrous cobalt chloride paper changes from light blue to pink with water. Lime water is the test for CO₂.", "ورقة كلوريد الكوبالت اللامائية تتحول من الأزرق الفاتح إلى الوردي بالماء، أما ماء الجير فهو كشف ثاني أكسيد الكربون."],
            sto: ["The blue paper blushes pink when it meets water drops from the flame.", "الورقة الزرقاء تحمرّ خجلًا حين تقابل قطرات الماء الخارجة من اللهب."] },
          { q: ["Which device changes CO and nitrogen oxides from cars into less harmful gases?", "أي جهاز يحوّل أول أكسيد الكربون وأكاسيد النيتروجين من السيارات إلى غازات أقل ضررًا؟"],
            c: [["The catalytic converter", "المحول الحفزي"], ["The ammeter", "الأميتر"], ["The electromagnet", "المغناطيس الكهربي"], ["The Bunsen burner", "موقد بنزن"]],
            off: ["A catalytic converter in the exhaust changes CO and nitrogen oxides into less harmful substances.", "المحول الحفزي في عادم السيارة يحوّل أول أكسيد الكربون وأكاسيد النيتروجين إلى مواد أقل ضررًا."],
            sto: ["The converter is the car's filter: poison gases go in and safer gases come out.", "المحول هو مرشح السيارة: تدخله الغازات السامة وتخرج منه غازات أكثر أمانًا."] },
          { q: ["Non-metal oxides like SO₂ dissolve in water to make…", "أكاسيد اللافلزات مثل SO₂ تذوب في الماء مكوّنة…"],
            c: [["acidic solutions that turn litmus red", "محاليل حمضية تحوّل عباد الشمس إلى الأحمر"], ["basic solutions that turn litmus blue", "محاليل قاعدية تحوّل عباد الشمس إلى الأزرق"], ["pure water", "ماء نقيًا"], ["metals", "فلزات"]],
            off: ["Non-metals form acidic oxides. SO₂ forms sulphurous acid, which can fall as acid rain.", "اللافلزات تكوّن أكاسيد حمضية، وثاني أكسيد الكبريت يكوّن حمض الكبريتوز الذي قد يسقط مطرًا حمضيًا."],
            sto: ["Smoke from factories meets rain clouds and the rain comes down sour, harming trees and buildings.", "دخان المصانع يقابل السحب فينزل المطر حمضيًا ويضر الأشجار والمباني."] }
        ]
      },
      {
        id: "u1l3", icon: "🚭", page: 25,
        title: { en: "Smoking and Its Hazards", ar: "التدخين وأضراره" },
        idea: {
          official: {
            en: ["Tobacco contains nicotine, an addictive substance that raises blood pressure and narrows blood vessels.",
              "Its smoke also has tar, toxic gases like carbon monoxide and hydrogen cyanide, heavy metals such as cadmium and lead, and radioactive polonium-210.",
              "Smoking harms the lungs: it blackens them and causes lung cancer and emphysema, where the walls of the alveoli break down.",
              "Carbon monoxide binds to haemoglobin faster than oxygen, so the blood carries less oxygen.",
              "Passive smokers who breathe the smoke are harmed too, and electronic cigarettes are not a safe choice."],
            ar: ["يحتوي التبغ على النيكوتين، وهو مادة تسبب الإدمان وترفع ضغط الدم وتضيّق الأوعية الدموية.",
              "ويحتوي دخانه أيضًا على القطران، وغازات سامة مثل أول أكسيد الكربون وسيانيد الهيدروجين، وفلزات ثقيلة مثل الكادميوم والرصاص، وعنصر البولونيوم ٢١٠ المشع.",
              "التدخين يضر الرئتين: يسودّهما ويسبب سرطان الرئة وانتفاخ الرئة الذي تتهدم فيه جدران الحويصلات الهوائية.",
              "يرتبط أول أكسيد الكربون بالهيموجلوبين أسرع من الأكسجين، فيقل الأكسجين الذي يحمله الدم.",
              "المدخن السلبي الذي يستنشق الدخان يتضرر أيضًا، والسجائر الإلكترونية ليست خيارًا آمنًا."]
          },
          story: {
            en: ["Meet Karim's lungs: two pink sponges with millions of tiny air balloons called alveoli.",
              "Every cigarette paints them with sticky tar, like black paint on a sponge.",
              "Carbon monoxide is a sneaky passenger that takes the seats on red blood cells meant for oxygen.",
              "Nicotine is the hook. It makes the body ask for another cigarette, again and again.",
              "Karim's little sister sits next to him and breathes the smoke too, so saying 'No, thanks' protects the whole family."],
            ar: ["تعرّف على رئتي كريم: إسفنجتان ورديتان فيهما ملايين البالونات الهوائية الصغيرة اسمها الحويصلات الهوائية.",
              "كل سيجارة تدهنهما بالقطران اللزج كأنه طلاء أسود على إسفنجة.",
              "أول أكسيد الكربون راكب ماكر يأخذ مقاعد الأكسجين على كرات الدم الحمراء.",
              "النيكوتين هو الخطّاف؛ يجعل الجسم يطلب سيجارة أخرى مرة بعد مرة.",
              "أخت كريم الصغيرة تجلس بجانبه وتستنشق الدخان أيضًا، لذلك فإن قول «لا، شكرًا» يحمي الأسرة كلها."]
          }
        },
        words: [
          ["Nicotine", "النيكوتين", "The addictive substance in tobacco. It raises blood pressure.", "المادة المسببة للإدمان في التبغ، وترفع ضغط الدم."],
          ["Tar", "القطران", "A sticky dark substance that coats the lungs.", "مادة لزجة داكنة تغطي الرئتين."],
          ["Emphysema", "انتفاخ الرئة", "A disease where the walls of the alveoli break down.", "مرض تتهدم فيه جدران الحويصلات الهوائية."],
          ["Passive smoking", "التدخين السلبي", "Breathing other people's smoke.", "استنشاق دخان الآخرين."],
          ["Haemoglobin", "الهيموجلوبين", "The substance in red blood cells that carries oxygen.", "المادة التي تحمل الأكسجين في كرات الدم الحمراء."]
        ],
        lab: { parts: [{ type: "lungsim" }, {
          type: "sort",
          prompt: ["Sort what is in tobacco smoke. Tap a substance, then tap its group.", "صنّف مكونات دخان التبغ: اضغط على المادة ثم على مجموعتها."],
          bins: [["add", "🪝", "Addictive substance", "مادة مسببة للإدمان"], ["gas", "☁️", "Toxic or irritant gas", "غاز سام أو مهيّج"], ["metal", "🔩", "Heavy metal", "فلز ثقيل"], ["rad", "☢️", "Radioactive", "مادة مشعة"]],
          items: [
            [["Nicotine", "النيكوتين"], "add"],
            [["Carbon monoxide", "أول أكسيد الكربون"], "gas"], [["Hydrogen cyanide", "سيانيد الهيدروجين"], "gas"], [["Ammonia", "النشادر"], "gas"], [["Nitrogen oxides", "أكاسيد النيتروجين"], "gas"],
            [["Cadmium", "الكادميوم"], "metal"], [["Lead", "الرصاص"], "metal"], [["Arsenic", "الزرنيخ"], "metal"],
            [["Polonium-210", "البولونيوم ٢١٠"], "rad"]
          ]
        }] },
        quiz: [
          { q: ["Which substance in tobacco causes addiction?", "ما المادة في التبغ التي تسبب الإدمان؟"],
            c: [["Nicotine", "النيكوتين"], ["Tar", "القطران"], ["Polonium-210", "البولونيوم ٢١٠"], ["Ammonia", "النشادر"]],
            off: ["Nicotine is the addictive substance in tobacco. It also raises blood pressure and narrows blood vessels.", "النيكوتين هو المادة المسببة للإدمان في التبغ، كما يرفع ضغط الدم ويضيّق الأوعية الدموية."],
            sto: ["Nicotine is the hook that keeps pulling Karim back to another cigarette.", "النيكوتين هو الخطّاف الذي يشد كريم إلى سيجارة أخرى."] },
          { q: ["Why does carbon monoxide lower the oxygen in the blood?", "لماذا يقلل أول أكسيد الكربون الأكسجين في الدم؟"],
            c: [["It binds to haemoglobin faster than oxygen", "يرتبط بالهيموجلوبين أسرع من الأكسجين"], ["It dissolves the alveoli", "يذيب الحويصلات الهوائية"], ["It makes the heart stop", "يوقف القلب"], ["It raises lung temperature", "يرفع حرارة الرئتين"]],
            off: ["CO binds to haemoglobin more quickly than oxygen does, so less oxygen reaches the body's cells.", "يرتبط أول أكسيد الكربون بالهيموجلوبين أسرع من الأكسجين، فيصل أكسجين أقل إلى خلايا الجسم."],
            sto: ["CO grabs the seats on the red blood cell bus before oxygen can get on.", "أول أكسيد الكربون يخطف مقاعد حافلة كرات الدم الحمراء قبل أن يركب الأكسجين."] },
          { q: ["Emphysema is…", "انتفاخ الرئة هو…"],
            c: [["the breakdown of the walls of the alveoli", "تهدم جدران الحويصلات الهوائية"], ["a heart disease", "مرض في القلب"], ["a type of cigarette", "نوع من السجائر"], ["a vitamin deficiency", "نقص فيتامين"]],
            off: ["In emphysema the walls of the alveoli break, so the lungs have less surface for gas exchange and breathing becomes hard.", "في انتفاخ الرئة تتهدم جدران الحويصلات فتقل مساحة تبادل الغازات ويصعب التنفس."],
            sto: ["Many tiny balloons pop and become a few big bags, so Karim gets out of breath on the stairs.", "تنفجر بالونات صغيرة كثيرة وتصبح أكياسًا كبيرة قليلة، فيلهث كريم على السلم."] },
          { q: ["Which radioactive element is found in tobacco smoke?", "ما العنصر المشع الموجود في دخان التبغ؟"],
            c: [["Polonium-210", "البولونيوم ٢١٠"], ["Cadmium", "الكادميوم"], ["Nicotine", "النيكوتين"], ["Nitrogen", "النيتروجين"]],
            off: ["Polonium-210 is radioactive. Cadmium and lead are heavy metals, and nicotine is the addictive substance.", "البولونيوم ٢١٠ عنصر مشع، أما الكادميوم والرصاص ففلزات ثقيلة، والنيكوتين مادة مسببة للإدمان."],
            sto: ["Hidden in the smoke is a tiny radioactive guest, polonium-210, that damages cells from inside.", "في الدخان ضيف مشع صغير مختبئ هو البولونيوم ٢١٠، يضر الخلايا من الداخل."] },
          { q: ["A person who sits near smokers…", "الشخص الذي يجلس بالقرب من المدخنين…"],
            c: [["is a passive smoker and is harmed too", "مدخن سلبي ويتضرر أيضًا"], ["is safe because he does not smoke", "آمن لأنه لا يدخن"], ["is harmed only by e-cigarettes", "يتضرر من السجائر الإلكترونية فقط"], ["is protected by the cigarette filter", "يحميه فلتر السيجارة"]],
            off: ["Breathing other people's smoke is passive smoking. Side smoke does not pass through a filter, so it carries more toxic gases.", "استنشاق دخان الآخرين تدخين سلبي، والدخان الجانبي لا يمر بالفلتر فيحمل غازات سامة أكثر."],
            sto: ["Karim's sister never touched a cigarette, but the smoke still reached her lungs.", "أخت كريم لم تلمس سيجارة قط، لكن الدخان وصل إلى رئتيها."] },
          { q: ["Which statement about electronic cigarettes is correct?", "أي عبارة عن السجائر الإلكترونية صحيحة؟"],
            c: [["They heat a nicotine liquid and are not a safe choice", "تسخّن سائلًا به نيكوتين وليست خيارًا آمنًا"], ["They contain no nicotine", "لا تحتوي على نيكوتين"], ["They clean the lungs", "تنظف الرئتين"], ["They are harmless to people nearby", "لا تضر من حولها"]],
            off: ["E-cigarettes heat a liquid with nicotine. They still cause addiction and harm, so they are not a safe alternative.", "السجائر الإلكترونية تسخّن سائلًا يحتوي على النيكوتين، فتسبب الإدمان والضرر وليست بديلًا آمنًا."],
            sto: ["A new costume does not change the hook: the e-cigarette still hides nicotine inside.", "الزي الجديد لا يغيّر الخطّاف؛ السيجارة الإلكترونية ما زالت تخفي النيكوتين."] }
        ]
      }
    ]
  });

  E.SCI3.units.push({
    id: "u2", num: 2, icon: "⚡", color: "purple",
    title: { en: "Electricity and Magnetism", ar: "الكهربية والمغناطيسية" },
    lessons: [
      {
        id: "u2l1", icon: "🔋", page: 35,
        title: { en: "Electric Current", ar: "التيار الكهربي" },
        idea: {
          official: {
            en: ["Electric current is the flow of electric charges through a conductor in a closed circuit.",
              "Current intensity " + eq("I = Q ÷ t") + " is measured in amperes, using an ammeter connected in series.",
              "Potential difference " + eq("V = W ÷ Q") + " is measured in volts, using a voltmeter connected in parallel. Conventional current flows from the positive terminal to the negative one; electrons move the other way.",
              "The electromotive force, EMF, is the total work the source does to move one coulomb around the whole circuit. It is a little bigger than the potential difference across the circuit because of the cell's internal resistance.",
              "Cells in series add their EMFs; cells in parallel give the EMF of one cell but last longer. Resistance is measured in ohms and increases with the length of the wire."],
            ar: ["التيار الكهربي هو سريان الشحنات الكهربية في موصل خلال دائرة مغلقة.",
              "شدة التيار " + eq("I = Q ÷ t") + " وتقاس بالأمبير باستخدام الأميتر الذي يوصل على التوالي.",
              "فرق الجهد " + eq("V = W ÷ Q") + " ويقاس بالفولت باستخدام الفولتميتر الذي يوصل على التوازي، والتيار الاصطلاحي يسري من القطب الموجب إلى السالب، بينما تتحرك الإلكترونات في الاتجاه المعاكس.",
              "القوة الدافعة الكهربية هي الشغل الكلي الذي يبذله المصدر لنقل كولوم واحد خلال الدائرة كلها، وهي أكبر قليلًا من فرق الجهد على الدائرة بسبب المقاومة الداخلية للعمود.",
              "الأعمدة على التوالي تُجمع قوتها الدافعة، وعلى التوازي تعطي القوة الدافعة لعمود واحد لكنها تدوم أطول، والمقاومة تقاس بالأوم وتزداد بزيادة طول السلك."]
          },
          story: {
            en: ["Imagine the school door at break time. The pupils walking through are the electric charges.",
              "Count how many pass every second: that is the current. Twelve pupils in three seconds is four pupils a second.",
              "The battery is a pump that pushes the charges round. The voltage tells us how hard it pushes.",
              "Line up three batteries one after another, like three pumps in a row: three pushes, 9 volts for a torch.",
              "Put them side by side instead: the push stays 3 volts, but it lasts much longer, like a power bank."],
            ar: ["تخيّل باب المدرسة وقت الفسحة: التلاميذ الذين يعبرونه هم الشحنات الكهربية.",
              "عُدّ كم تلميذًا يعبر كل ثانية: هذا هو التيار؛ اثنا عشر تلميذًا في ثلاث ثوانٍ تعني أربعة تلاميذ كل ثانية.",
              "البطارية مضخة تدفع الشحنات في الدائرة، وفرق الجهد يخبرنا بقوة هذه الدفعة.",
              "ضع ثلاث بطاريات واحدة بعد الأخرى مثل ثلاث مضخات متتالية: ثلاث دفعات، أي ٩ فولت للكشاف.",
              "وضعها متجاورة: الدفعة تبقى ٣ فولت لكنها تدوم أطول كثيرًا، مثل باور بانك."]
          }
        },
        words: [
          ["Ampere (A)", "الأمبير", "Unit of current intensity: one coulomb per second.", "وحدة شدة التيار، وتساوي كولوم لكل ثانية."],
          ["Volt (V)", "الفولت", "Unit of potential difference: one joule per coulomb.", "وحدة فرق الجهد، وتساوي جول لكل كولوم."],
          ["Ammeter", "الأميتر", "Measures current. Connected in series.", "يقيس شدة التيار ويوصل على التوالي."],
          ["Voltmeter", "الفولتميتر", "Measures potential difference. Connected in parallel.", "يقيس فرق الجهد ويوصل على التوازي."],
          ["EMF", "القوة الدافعة الكهربية", "The total work a source does to move one coulomb around the whole circuit.", "الشغل الكلي الذي يبذله المصدر لنقل كولوم واحد خلال الدائرة كلها."],
          ["Ohm (Ω)", "الأوم", "Unit of electrical resistance.", "وحدة المقاومة الكهربية."]
        ],
        lab: { parts: [{ type: "flow" }, { type: "cells" }] },
        quiz: [
          { q: ["A charge of 12 C passes in 3 s. What is the current?", "كمية كهربية ١٢ كولوم تمر في ٣ ثوانٍ. ما شدة التيار؟"],
            c: [["4 A", "٤ أمبير"], ["36 A", "٣٦ أمبير"], ["3 A", "٣ أمبير"], ["15 A", "١٥ أمبير"]],
            off: [eq("I = Q ÷ t = 12 ÷ 3 = 4 A") + ".", eq("I = Q ÷ t = 12 ÷ 3 = 4 A") + "."],
            sto: ["Twelve pupils pass the door in three seconds, so four pass each second.", "اثنا عشر تلميذًا يعبرون الباب في ثلاث ثوانٍ، أي أربعة كل ثانية."] },
          { q: ["How is a voltmeter connected in a circuit?", "كيف يوصل الفولتميتر في الدائرة؟"],
            c: [["In parallel", "على التوازي"], ["In series", "على التوالي"], ["Either way", "بأي طريقة"], ["It is not connected", "لا يوصل"]],
            off: ["A voltmeter measures the potential difference between two points, so it is connected in parallel. The ammeter goes in series.", "الفولتميتر يقيس فرق الجهد بين نقطتين فيوصل على التوازي، أما الأميتر فيوصل على التوالي."],
            sto: ["The voltmeter stands beside the lamp to compare both ends, like checking the water pressure before and after a pipe.", "الفولتميتر يقف بجانب المصباح ليقارن طرفيه، كأنه يقيس ضغط الماء قبل الأنبوب وبعده."] },
          { q: ["The unit of potential difference is the…", "وحدة قياس فرق الجهد هي…"],
            c: [["volt", "الفولت"], ["ampere", "الأمبير"], ["ohm", "الأوم"], ["watt", "الوات"]],
            off: ["Potential difference is measured in volts: one volt is one joule per coulomb.", "يقاس فرق الجهد بالفولت، والفولت يساوي جول لكل كولوم."],
            sto: ["Volts measure how hard the battery pump pushes.", "الفولت يقيس قوة دفع مضخة البطارية."] },
          { q: ["Three 3 V cells connected in series give…", "ثلاثة أعمدة كل منها ٣ فولت موصلة على التوالي تعطي…"],
            c: [["9 V", "٩ فولت"], ["3 V", "٣ فولت"], ["1 V", "١ فولت"], ["6 V", "٦ فولت"]],
            off: ["Cells in series add their EMFs: 3 + 3 + 3 = 9 V, as in a flashlight.", "الأعمدة على التوالي تُجمع قوتها الدافعة: ٣ + ٣ + ٣ = ٩ فولت، كما في الكشاف."],
            sto: ["Three pumps in a row each add a push, so the charges get three pushes.", "ثلاث مضخات متتالية تضيف كل منها دفعة، فتحصل الشحنات على ثلاث دفعات."] },
          { q: ["Three 3 V cells connected in parallel give…", "ثلاثة أعمدة كل منها ٣ فولت موصلة على التوازي تعطي…"],
            c: [["3 V, and they last longer", "٣ فولت وتدوم أطول"], ["9 V, and they last longer", "٩ فولت وتدوم أطول"], ["1 V only", "١ فولت فقط"], ["0 V", "صفر فولت"]],
            off: ["In parallel the EMF equals the EMF of one cell, 3 V, but the cells share the work, so they last longer.", "على التوازي تساوي القوة الدافعة قوة عمود واحد أي ٣ فولت، لكن الأعمدة تتقاسم العمل فتدوم أطول."],
            sto: ["Three pumps side by side share the job: the same push, but much more time before they get tired.", "ثلاث مضخات متجاورة تتقاسم العمل: الدفعة نفسها لكن وقت أطول قبل أن تتعب."] },
          { q: ["Outside the cell, conventional current flows…", "خارج العمود يسري التيار الاصطلاحي…"],
            c: [["from the positive terminal to the negative terminal", "من القطب الموجب إلى القطب السالب"], ["from the negative terminal to the positive terminal", "من القطب السالب إلى القطب الموجب"], ["in both directions at once", "في الاتجاهين معًا"], ["only inside the cell", "داخل العمود فقط"]],
            off: ["Conventional current is taken from positive to negative in the outer circuit. The electrons themselves move from negative to positive.", "يُعتبر التيار الاصطلاحي من الموجب إلى السالب في الدائرة الخارجية، أما الإلكترونات نفسها فتتحرك من السالب إلى الموجب."],
            sto: ["The agreed map arrow goes plus to minus, even though the electron travellers walk the other way.", "سهم الخريطة المتفق عليه يتجه من الموجب إلى السالب، مع أن الإلكترونات المسافرة تسير في الاتجاه الآخر."] },
          { q: ["The resistance of a wire increases when…", "تزداد مقاومة السلك عندما…"],
            c: [["its length increases", "يزداد طوله"], ["its cross-section gets thicker", "تزداد مساحة مقطعه"], ["it is made shorter", "يصبح أقصر"], ["the current is switched off", "ينقطع التيار"]],
            off: ["Resistance increases with the length of the wire and decreases when the cross-sectional area increases.", "تزداد المقاومة بزيادة طول السلك وتقل بزيادة مساحة مقطعه."],
            sto: ["A long, narrow pipe is harder for water to get through than a short, wide one.", "الأنبوب الطويل الضيق أصعب على الماء من الأنبوب القصير الواسع."] }
        ]
      },
      {
        id: "u2l2", icon: "💡", page: 46,
        title: { en: "Electric Circuits", ar: "الدوائر الكهربية" },
        idea: {
          official: {
            en: ["Ohm's law: " + eq("V = I × R") + " at constant temperature, so current is directly proportional to potential difference. The V–I graph is a straight line through the origin.",
              "In a series circuit there is one path. The current is the same everywhere, the voltage is shared, and for n identical resistors " + eq("R = n × r") + ".",
              "In a parallel circuit there are branches. Each branch has the same potential difference, the current divides, and " + eq("R = r ÷ n") + ", smaller than any one resistor.",
              "Electric power " + eq("P = E ÷ t") + " is measured in watts, so the energy used is " + eq("E = P × t") + ".",
              "Energy cost = kilowatts × hours × the price of one kilowatt-hour. Home appliances are connected in parallel, and LED lamps save money because they use less power."],
            ar: ["قانون أوم: " + eq("V = I × R") + " عند ثبوت درجة الحرارة، أي أن شدة التيار تتناسب طرديًا مع فرق الجهد، والعلاقة البيانية بينهما خط مستقيم يمر بنقطة الأصل.",
              "في دائرة التوالي يوجد مسار واحد، وشدة التيار ثابتة، ويتوزع فرق الجهد، ولعدد n من المقاومات المتساوية " + eq("R = n × r") + ".",
              "في دائرة التوازي توجد فروع لها فرق الجهد نفسه، ويتجزأ التيار، و" + eq("R = r ÷ n") + " وهي أصغر من أي مقاومة منفردة.",
              "القدرة الكهربية " + eq("P = E ÷ t") + " وتقاس بالوات، فتكون الطاقة المستهلكة " + eq("E = P × t") + ".",
              "تكلفة الطاقة = الكيلووات × عدد الساعات × سعر الكيلووات ساعة، والأجهزة المنزلية توصل على التوازي، ولمبات الليد توفر المال لأنها تستهلك قدرة أقل."]
          },
          story: {
            en: ["Water in pipes again: push twice as hard through the same pipe and twice as much water flows. That is Ohm's law.",
              "A series circuit is a one-lane road. Every car passes every lamp, and if one lamp breaks, every lamp goes out.",
              "A parallel circuit is a road with many lanes. More lanes make traffic easier, so the total resistance drops.",
              "That is why at home you can switch off the TV and the fridge keeps working.",
              "The meter counts kilowatt-hours. Mum swaps a 20-watt lamp for a 12-watt LED, and the monthly bill gets smaller."],
            ar: ["الماء في الأنابيب مرة أخرى: ادفع بقوة مضاعفة في الأنبوب نفسه فيمر ضعف الماء، وهذا قانون أوم.",
              "دائرة التوالي طريق بحارة واحدة؛ كل سيارة تمر على كل مصباح، وإذا تلف مصباح انطفأت كل المصابيح.",
              "دائرة التوازي طريق بحارات كثيرة؛ الحارات الأكثر تجعل المرور أسهل فتقل المقاومة الكلية.",
              "لهذا تستطيع في البيت أن تطفئ التلفاز وتبقى الثلاجة تعمل.",
              "العداد يحسب الكيلووات ساعة، وعندما تستبدل الأم لمبة ٢٠ وات بلمبة ليد ١٢ وات تصغر فاتورة الشهر."]
          }
        },
        words: [
          ["Ohm's law", "قانون أوم", "V = I × R: current is directly proportional to potential difference at constant temperature.", "V = I × R: شدة التيار تتناسب طرديًا مع فرق الجهد عند ثبوت درجة الحرارة."],
          ["Series connection", "التوصيل على التوالي", "One path; the same current flows through every part.", "مسار واحد، وشدة التيار نفسها تمر في كل الأجزاء."],
          ["Parallel connection", "التوصيل على التوازي", "Branches; every branch has the same potential difference.", "فروع، ولكل فرع فرق الجهد نفسه."],
          ["Equivalent resistance", "المقاومة المكافئة", "One resistance that could replace a group of resistors.", "مقاومة واحدة يمكن أن تحل محل مجموعة مقاومات."],
          ["Electric power (W)", "القدرة الكهربية", "Energy used per second, measured in watts.", "الطاقة المستهلكة في الثانية، وتقاس بالوات."],
          ["Kilowatt-hour", "الكيلووات ساعة", "The unit on the home meter: 1 kW·h = 3.6 × 10⁶ J.", "وحدة عداد البيت: ١ كيلووات ساعة = ٣٫٦ × ١٠⁶ جول."]
        ],
        lab: { parts: [{ type: "builder" }, { type: "ohm" }] },
        quiz: [
          { q: ["A 2 Ω wire is connected to 6 V. What is the current?", "سلك مقاومته ٢ أوم وُصّل بفرق جهد ٦ فولت. ما شدة التيار؟"],
            c: [["3 A", "٣ أمبير"], ["12 A", "١٢ أمبير"], ["4 A", "٤ أمبير"], ["0.33 A", "٠٫٣٣ أمبير"]],
            off: ["Ohm's law: " + eq("I = V ÷ R = 6 ÷ 2 = 3 A") + ".", "من قانون أوم: " + eq("I = V ÷ R = 6 ÷ 2 = 3 A") + "."],
            sto: ["A push of 6 through a pipe that resists 2 lets 3 units of current flow.", "دفعة قدرها ٦ في أنبوب مقاومته ٢ تسمح بمرور ٣ وحدات من التيار."] },
          { q: ["If the potential difference doubles and the resistance stays the same, the current…", "إذا تضاعف فرق الجهد وبقيت المقاومة ثابتة، فإن شدة التيار…"],
            c: [["doubles", "تتضاعف"], ["halves", "تقل إلى النصف"], ["stays the same", "تبقى كما هي"], ["becomes zero", "تصبح صفرًا"]],
            off: ["By Ohm's law, current is directly proportional to potential difference when resistance is constant, so it doubles.", "حسب قانون أوم تتناسب شدة التيار طرديًا مع فرق الجهد عند ثبوت المقاومة، فتتضاعف."],
            sto: ["Push twice as hard through the same pipe and twice the water flows.", "ادفع بقوة مضاعفة في الأنبوب نفسه فيمر ضعف الماء."] },
          { q: ["Three 2 Ω resistors are connected in series. What is the equivalent resistance?", "ثلاث مقاومات كل منها ٢ أوم موصلة على التوالي. ما المقاومة المكافئة؟"],
            c: [["6 Ω", "٦ أوم"], ["⅔ Ω", "⅔ أوم"], ["2 Ω", "٢ أوم"], ["8 Ω", "٨ أوم"]],
            off: ["In series, " + eq("R = n × r = 3 × 2 = 6 Ω") + ".", "على التوالي " + eq("R = n × r = 3 × 2 = 6 Ω") + "."],
            sto: ["Three narrow pipes one after another: the water has to fight through all three.", "ثلاثة أنابيب ضيقة متتالية: يجب أن يشق الماء طريقه خلالها جميعًا."] },
          { q: ["Three 6 Ω resistors are connected in parallel. What is the equivalent resistance?", "ثلاث مقاومات كل منها ٦ أوم موصلة على التوازي. ما المقاومة المكافئة؟"],
            c: [["2 Ω", "٢ أوم"], ["18 Ω", "١٨ أوم"], ["6 Ω", "٦ أوم"], ["3 Ω", "٣ أوم"]],
            off: ["In parallel, " + eq("R = r ÷ n = 6 ÷ 3 = 2 Ω") + ", less than any single resistor.", "على التوازي " + eq("R = r ÷ n = 6 ÷ 3 = 2 Ω") + "، وهي أصغر من أي مقاومة منفردة."],
            sto: ["Three lanes side by side let the traffic through three times as easily.", "ثلاث حارات متجاورة تسمح بالمرور بسهولة مضاعفة ثلاث مرات."] },
          { q: ["Three identical resistors in series with a 12 V battery carry 2 A. What is each resistance?", "ثلاث مقاومات متساوية على التوالي مع بطارية ١٢ فولت يمر بها ٢ أمبير. ما قيمة كل مقاومة؟"],
            c: [["2 Ω", "٢ أوم"], ["6 Ω", "٦ أوم"], ["24 Ω", "٢٤ أوم"], ["4 Ω", "٤ أوم"]],
            off: ["Total " + eq("R = V ÷ I = 12 ÷ 2 = 6 Ω") + ". Each resistor = 6 ÷ 3 = 2 Ω.", "المقاومة الكلية " + eq("R = V ÷ I = 12 ÷ 2 = 6 Ω") + "، وكل مقاومة = ٦ ÷ ٣ = ٢ أوم."],
            sto: ["The whole road resists 6, and it is made of three equal pieces, so each piece resists 2.", "الطريق كله يقاوم بمقدار ٦، وهو ثلاث قطع متساوية، فكل قطعة تقاوم ٢."] },
          { q: ["Why are home appliances connected in parallel?", "لماذا توصل الأجهزة المنزلية على التوازي؟"],
            c: [["Each gets the full voltage and works on its own", "ليحصل كل جهاز على الجهد الكامل ويعمل مستقلًا"], ["To share the voltage between them", "ليتوزع الجهد بينها"], ["To increase the total resistance", "لزيادة المقاومة الكلية"], ["So one switch controls them all", "ليتحكم مفتاح واحد فيها كلها"]],
            off: ["In parallel every branch has the same potential difference, and switching off one branch does not stop the others.", "في التوازي يكون لكل فرع فرق الجهد نفسه، وفصل فرع لا يوقف الفروع الأخرى."],
            sto: ["Each appliance has its own lane, so the fridge keeps going when the TV is switched off.", "لكل جهاز حارته، فتبقى الثلاجة تعمل عند إطفاء التلفاز."] },
          { q: ["A 1 kW heater runs for 3 hours. One kW·h costs 1.55 EGP. What is the cost?", "مدفأة قدرتها ١ كيلووات تعمل ٣ ساعات، وسعر الكيلووات ساعة ١٫٥٥ جنيه. ما التكلفة؟"],
            c: [["4.65 EGP", "٤٫٦٥ جنيه"], ["3 EGP", "٣ جنيهات"], ["1.55 EGP", "١٫٥٥ جنيه"], ["465 EGP", "٤٦٥ جنيهًا"]],
            off: ["Energy = 1 kW × 3 h = 3 kW·h. Cost = 3 × 1.55 = 4.65 EGP.", "الطاقة = ١ كيلووات × ٣ ساعات = ٣ كيلووات ساعة، والتكلفة = ٣ × ١٫٥٥ = ٤٫٦٥ جنيه."],
            sto: ["The meter counts 3 kilowatt-hours, and each one costs 1.55 pounds, so mum pays 4.65 pounds.", "العداد يحسب ٣ كيلووات ساعة، وكل واحد بـ ١٫٥٥ جنيه، فتدفع الأم ٤٫٦٥ جنيه."] },
          { q: ["In a series circuit, if one lamp burns out…", "في دائرة التوالي، إذا احترق مصباح…"],
            c: [["all the lamps go out", "تنطفئ كل المصابيح"], ["the others get brighter", "تزداد إضاءة الباقي"], ["nothing changes", "لا يتغير شيء"], ["only the next lamp goes out", "ينطفئ المصباح التالي فقط"]],
            off: ["A series circuit has only one path. A burnt-out lamp breaks the path, so no current flows anywhere.", "دائرة التوالي لها مسار واحد، والمصباح المحترق يقطع المسار فلا يمر تيار."],
            sto: ["One broken bridge on a one-lane road stops every car.", "جسر واحد مكسور على طريق بحارة واحدة يوقف كل السيارات."] }
        ]
      },
      {
        id: "u2l3", icon: "🧲", page: 54,
        title: { en: "Electric and Magnetic Forces", ar: "القوى الكهربية والمغناطيسية" },
        idea: {
          official: {
            en: ["Oersted found that a current in a wire makes a magnetic field that deflects a compass needle.",
              "An electromagnet is insulated copper wire wound round a soft iron core. It is a temporary magnet.",
              "It becomes stronger with more turns of wire, a bigger current, and a soft iron core.",
              "A current-carrying wire in a magnetic field feels a force. The electric motor uses this to change electrical energy into kinetic energy, with a split ring and two carbon brushes.",
              "A generator does the opposite: a coil spinning in a magnetic field produces EMF, changing kinetic energy into electrical energy. Power stations produce alternating current."],
            ar: ["اكتشف أورستد أن مرور تيار في سلك يولّد مجالًا مغناطيسيًا يحرّف إبرة البوصلة.",
              "المغناطيس الكهربي سلك نحاسي معزول ملفوف حول قلب من الحديد المطاوع، وهو مغناطيس مؤقت.",
              "تزداد قوته بزيادة عدد لفات السلك، وزيادة شدة التيار، ووجود قلب من الحديد المطاوع.",
              "السلك الذي يمر به تيار داخل مجال مغناطيسي تؤثر فيه قوة، ويستخدم المحرك الكهربي ذلك لتحويل الطاقة الكهربية إلى طاقة حركية، وفيه أسطوانة مشقوقة وفرشتان من الكربون.",
              "المولد الكهربي يعمل عكس ذلك: ملف يدور في مجال مغناطيسي فتتولد قوة دافعة كهربية، أي تتحول الطاقة الحركية إلى كهربية، ومحطات الكهرباء تنتج تيارًا مترددًا."]
          },
          story: {
            en: ["Oersted's compass was like a curious cat that turned its head every time current flowed nearby.",
              "Wrap wire round an iron nail, connect a battery, and the nail picks up paper clips. Switch off and they drop.",
              "Each extra turn of wire is like adding another helper pulling on the clips.",
              "In a fan, the motor turns electricity into spinning blades.",
              "On a bicycle the dynamo does the reverse: your pedalling spins it and lights the lamp."],
            ar: ["كانت بوصلة أورستد مثل قطة فضولية تلتفت كلما مر تيار بقربها.",
              "لُفّ سلكًا حول مسمار حديد وصِله ببطارية فيلتقط المسمار مشابك الورق، وافصل التيار فتسقط.",
              "كل لفة إضافية كأنها مساعد جديد يشد المشابك.",
              "في المروحة يحوّل المحرك الكهرباء إلى ريش تدور.",
              "وفي الدراجة يعمل الدينامو بالعكس: دوران العجلة بالبدّال يضيء المصباح."]
          }
        },
        words: [
          ["Electromagnet", "المغناطيس الكهربي", "A coil of insulated wire round a soft iron core; magnetic only while current flows.", "ملف من سلك معزول حول قلب من الحديد المطاوع، ويكون مغناطيسًا أثناء مرور التيار فقط."],
          ["Soft iron", "الحديد المطاوع", "Iron that magnetises and loses its magnetism easily.", "حديد يتمغنط ويفقد مغناطيسيته بسهولة."],
          ["Split ring", "الأسطوانة المشقوقة", "Reverses the current in the motor coil every half turn so it keeps spinning.", "تعكس اتجاه التيار في ملف المحرك كل نصف دورة ليستمر في الدوران."],
          ["Electric generator", "المولد الكهربي", "Changes kinetic energy into electrical energy.", "يحوّل الطاقة الحركية إلى طاقة كهربية."],
          ["Alternating current", "التيار المتردد", "Current that keeps changing direction; produced by power stations.", "تيار يتغير اتجاهه باستمرار، وتنتجه محطات الكهرباء."]
        ],
        lab: { type: "emlab" },
        quiz: [
          { q: ["Who showed that an electric current produces a magnetic field?", "من أثبت أن التيار الكهربي يولّد مجالًا مغناطيسيًا؟"],
            c: [["Oersted", "أورستد"], ["Mendel", "مندل"], ["Ohm", "أوم"], ["Darwin", "داروين"]],
            off: ["Oersted saw a compass needle move when current flowed in a nearby wire.", "لاحظ أورستد انحراف إبرة البوصلة عند مرور تيار في سلك قريب."],
            sto: ["The compass cat turned its head the moment Oersted switched the current on.", "قطة البوصلة التفتت لحظة تشغيل أورستد للتيار."] },
          { q: ["Which change makes an electromagnet stronger?", "أي تغيير يزيد قوة المغناطيس الكهربي؟"],
            c: [["More turns of wire", "زيادة عدد اللفات"], ["Fewer turns of wire", "تقليل عدد اللفات"], ["Removing the iron core", "إزالة القلب الحديدي"], ["Less current", "تقليل شدة التيار"]],
            off: ["Strength increases with more turns, a bigger current and a soft iron core.", "تزداد القوة بزيادة عدد اللفات وشدة التيار ووجود قلب من الحديد المطاوع."],
            sto: ["Every extra turn is another helper pulling on the paper clips.", "كل لفة زيادة مساعد جديد يشد المشابك."] },
          { q: ["Why is the core of an electromagnet made of soft iron?", "لماذا يصنع قلب المغناطيس الكهربي من الحديد المطاوع؟"],
            c: [["It magnetises and demagnetises easily", "لأنه يتمغنط ويفقد مغناطيسيته بسهولة"], ["It is a permanent magnet", "لأنه مغناطيس دائم"], ["It insulates the wire", "لأنه يعزل السلك"], ["It conducts no electricity", "لأنه لا يوصل الكهرباء"]],
            off: ["Soft iron becomes a strong magnet while current flows and loses its magnetism when the current stops.", "الحديد المطاوع يصبح مغناطيسًا قويًا أثناء مرور التيار ويفقد مغناطيسيته عند انقطاعه."],
            sto: ["The scrap crane must drop the metal when the driver switches off, so the core must forget its magnetism fast.", "رافعة الخردة يجب أن تُسقط المعادن عند فصل التيار، فلا بد أن ينسى القلب مغناطيسيته بسرعة."] },
          { q: ["An electric motor changes…", "المحرك الكهربي يحوّل…"],
            c: [["electrical energy into kinetic energy", "الطاقة الكهربية إلى طاقة حركية"], ["kinetic energy into electrical energy", "الطاقة الحركية إلى طاقة كهربية"], ["heat into light", "الحرارة إلى ضوء"], ["chemical energy into sound", "الطاقة الكيميائية إلى صوت"]],
            off: ["The current-carrying coil in a magnetic field feels a turning force, so electrical energy becomes kinetic energy.", "الملف الذي يمر به تيار في مجال مغناطيسي تؤثر فيه قوة تديره، فتتحول الطاقة الكهربية إلى حركية."],
            sto: ["Plug in the fan and the electricity becomes spinning blades.", "شغّل المروحة فتتحول الكهرباء إلى ريش تدور."] },
          { q: ["A bicycle dynamo is an example of…", "دينامو الدراجة مثال على…"],
            c: [["an electric generator", "المولد الكهربي"], ["an electric motor", "المحرك الكهربي"], ["an electric bell", "الجرس الكهربي"], ["a voltmeter", "الفولتميتر"]],
            off: ["Spinning a coil and magnet produces EMF: kinetic energy becomes electrical energy. That is a generator.", "دوران ملف ومغناطيس يولّد قوة دافعة كهربية فتتحول الطاقة الحركية إلى كهربية، وهذا مولد."],
            sto: ["The faster you pedal, the brighter your bicycle lamp shines.", "كلما أسرعت في التبديل ازدادت إضاءة مصباح الدراجة."] },
          { q: ["Reversing the current in a wire inside a magnetic field…", "عكس اتجاه التيار في سلك داخل مجال مغناطيسي…"],
            c: [["reverses the direction of the force", "يعكس اتجاه القوة"], ["doubles the force", "يضاعف القوة"], ["removes the magnetic field", "يزيل المجال المغناطيسي"], ["has no effect", "ليس له تأثير"]],
            off: ["The direction of the force depends on the directions of the current and of the field. Reverse one and the wire moves the other way.", "اتجاه القوة يعتمد على اتجاه التيار واتجاه المجال، فإذا عُكس أحدهما تحرك السلك في الاتجاه المعاكس."],
            sto: ["Swap the battery around and the little wire swing jumps the other way.", "اقلب البطارية فتقفز أرجوحة السلك الصغيرة في الاتجاه الآخر."] }
        ]
      }
    ]
  });
})();
