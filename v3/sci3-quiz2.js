/* EduZone Learn v3 - Science · Prep 3: hands-on quiz items added to every lesson.
   k: "order" (tap the items in the right order; items listed in the correct order),
      "match" (tap a left item, then its partner), "tf" (true or false).
   Every item still has the two spoken solutions: off (official) and sto (story). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCI3_EXTRA = {
    u1l1: [
      { k: "match", q: ["Match each reaction to its type.", "صِل كل تفاعل بنوعه."],
        pairs: [[[eq("2Mg + O₂ → 2MgO"), eq("2Mg + O₂ → 2MgO")], ["Direct combination", "اتحاد مباشر"]], [[eq("CaCO₃ → CaO + CO₂"), eq("CaCO₃ → CaO + CO₂")], ["Decomposition", "تحلل"]],
          [[eq("Zn + CuSO₄ → ZnSO₄ + Cu"), eq("Zn + CuSO₄ → ZnSO₄ + Cu")], ["Single displacement", "إحلال بسيط"]], [[eq("AgNO₃ + NaCl → NaNO₃ + AgCl"), eq("AgNO₃ + NaCl → NaNO₃ + AgCl")], ["Double displacement", "إحلال مزدوج"]]],
        off: ["Two make one: combination. One breaks into two: decomposition. An element swaps in: single. Two compounds swap ions: double.", "اثنان يصبحان واحدًا: اتحاد، وواحد يتفكك: تحلل، وعنصر يحل محل آخر: إحلال بسيط، ومركبان يتبادلان الأيونات: إحلال مزدوج."],
        sto: ["Join the couple, split the couple, cut in, or swap partners: four dance moves, four reaction types.", "زوج يتكوّن، وزوج ينفصل، وراقص يأخذ المكان، وزوجان يتبادلان: أربع حركات وأربعة أنواع."] },
      { k: "tf", q: ["True or false: silver displaces copper from copper sulphate solution.", "صواب أم خطأ: الفضة تحل محل النحاس في محلول كبريتات النحاس."], a: false,
        off: ["False. Silver is below copper in the activity series, so it cannot displace it.", "خطأ؛ الفضة تلي النحاس في سلسلة النشاط فلا تستطيع أن تحل محله."],
        sto: ["Silver is the weaker dancer here, so copper keeps its place.", "الفضة هنا هي الراقص الأضعف، فيحتفظ النحاس بمكانه."] }
    ],
    u1l2: [
      { k: "match", q: ["Match each combustion product to its clue.", "صِل كل ناتج احتراق بالدليل عليه."],
        pairs: [[["Carbon dioxide", "ثاني أكسيد الكربون"], ["Turns lime water milky", "يعكّر ماء الجير"]], [["Carbon monoxide", "أول أكسيد الكربون"], ["Toxic, no colour or smell", "سام عديم اللون والرائحة"]],
          [["Water vapour", "بخار الماء"], ["Cobalt chloride paper turns pink", "ورقة كلوريد الكوبالت تصبح وردية"]], [["Soot", "السناج"], ["Black unburnt carbon", "كربون أسود غير محترق"]]],
        off: ["CO₂ turns lime water milky, water turns cobalt chloride pink, CO is a silent poison and soot is unburnt carbon.", "ثاني أكسيد الكربون يعكّر ماء الجير، والماء يجعل كلوريد الكوبالت ورديًا، وأول أكسيد الكربون سم صامت، والسناج كربون غير محترق."],
        sto: ["Each product leaves its own fingerprint, like suspects in a detective story.", "كل ناتج يترك بصمته الخاصة، مثل المشتبه بهم في قصة بوليسية."] },
      { k: "tf", q: ["True or false: removing any one side of the fire triangle puts the fire out.", "صواب أم خطأ: إزالة أي ضلع من مثلث الاحتراق تطفئ النار."], a: true,
        off: ["True. Burning needs fuel, oxygen and heat together.", "صواب؛ الاحتراق يحتاج الوقود والأكسجين والحرارة معًا."],
        sto: ["If one of the three campfire friends leaves, the party ends.", "إذا غادر أحد أصدقاء المخيم الثلاثة انتهت الحفلة."] }
    ],
    u1l3: [
      { k: "match", q: ["Match each substance in smoke to its harm.", "صِل كل مادة في الدخان بضررها."],
        pairs: [[["Nicotine", "النيكوتين"], ["Addiction and higher blood pressure", "الإدمان وارتفاع ضغط الدم"]], [["Tar", "القطران"], ["Coats and blackens the lungs", "يغطي الرئتين ويسوّدهما"]],
          [["Carbon monoxide", "أول أكسيد الكربون"], ["Takes oxygen's place on haemoglobin", "يأخذ مكان الأكسجين على الهيموجلوبين"]], [["Polonium-210", "البولونيوم ٢١٠"], ["Radioactive", "مادة مشعة"]]],
        off: ["Nicotine is addictive, tar coats the lungs, CO blocks oxygen transport and polonium-210 is radioactive.", "النيكوتين يسبب الإدمان، والقطران يغطي الرئتين، وأول أكسيد الكربون يعيق نقل الأكسجين، والبولونيوم ٢١٠ مشع."],
        sto: ["Four villains in one cigarette, each with its own trick.", "أربعة أشرار في سيجارة واحدة، لكل منهم حيلته."] },
      { k: "tf", q: ["True or false: passive smokers are not harmed because they do not hold the cigarette.", "صواب أم خطأ: المدخن السلبي لا يتضرر لأنه لا يمسك السيجارة."], a: false,
        off: ["False. Breathing other people's smoke harms the body, and side smoke passes through no filter.", "خطأ؛ استنشاق دخان الآخرين يضر الجسم، والدخان الجانبي لا يمر بأي فلتر."],
        sto: ["Karim's sister never smoked, yet the smoke still reached her lungs.", "أخت كريم لم تدخن قط، ومع ذلك وصل الدخان إلى رئتيها."] }
    ],
    u2l1: [
      { k: "match", q: ["Match each quantity to its unit.", "صِل كل كمية بوحدة قياسها."],
        pairs: [[["Current intensity", "شدة التيار"], ["ampere (A)", "الأمبير"]], [["Potential difference", "فرق الجهد"], ["volt (V)", "الفولت"]], [["Resistance", "المقاومة"], ["ohm (Ω)", "الأوم"]], [["Quantity of charge", "كمية الكهربية"], ["coulomb (C)", "الكولوم"]]],
        off: ["Current in amperes, potential difference in volts, resistance in ohms and charge in coulombs.", "شدة التيار بالأمبير، وفرق الجهد بالفولت، والمقاومة بالأوم، وكمية الكهربية بالكولوم."],
        sto: ["How many pupils pass the door (amperes), how hard the pump pushes (volts), how narrow the pipe is (ohms) and the pupils themselves (coulombs).", "كم تلميذًا يعبر الباب (أمبير)، وقوة دفع المضخة (فولت)، وضيق الأنبوب (أوم)، والتلاميذ أنفسهم (كولوم)."] },
      { k: "tf", q: ["True or false: an ammeter is connected in parallel.", "صواب أم خطأ: الأميتر يوصل على التوازي."], a: false,
        off: ["False. The ammeter goes in series so the whole current passes through it; the voltmeter goes in parallel.", "خطأ؛ الأميتر يوصل على التوالي ليمر به التيار كله، والفولتميتر يوصل على التوازي."],
        sto: ["To count every pupil, you must stand in the doorway itself, not beside it.", "لكي تعد كل التلاميذ يجب أن تقف في الباب نفسه لا بجانبه."] }
    ],
    u2l2: [
      { k: "order", q: ["Put the steps in order: the cost of a 2 kW heater for 3 hours at 1.55 EGP per kW·h.", "رتّب الخطوات: تكلفة مدفأة ٢ كيلووات تعمل ٣ ساعات بسعر ١٫٥٥ جنيه للكيلووات ساعة."],
        items: [["Write the power in kilowatts: 2 kW", "اكتب القدرة بالكيلووات: ٢ كيلووات"], ["Multiply by the hours: 2 × 3 = 6 kW·h", "اضرب في عدد الساعات: ٢ × ٣ = ٦ كيلووات ساعة"], ["Multiply by the price: 6 × 1.55", "اضرب في السعر: ٦ × ١٫٥٥"], ["Cost = 9.3 EGP", "التكلفة = ٩٫٣ جنيه"]],
        off: ["Energy = power × time = 6 kW·h, then cost = energy × price = 9.3 EGP.", "الطاقة = القدرة × الزمن = ٦ كيلووات ساعة، ثم التكلفة = الطاقة × السعر = ٩٫٣ جنيه."],
        sto: ["First see how hungry the heater is, then how long it eats, then pay for every meal.", "اعرف أولًا كم تأكل المدفأة، ثم كم ساعة تأكل، ثم ادفع ثمن كل وجبة."] },
      { k: "tf", q: ["True or false: adding more resistors in parallel decreases the equivalent resistance.", "صواب أم خطأ: إضافة مقاومات أكثر على التوازي تقلل المقاومة المكافئة."], a: true,
        off: ["True. Each new branch gives the current another path, so R = r ÷ n gets smaller.", "صواب؛ كل فرع جديد يعطي التيار مسارًا إضافيًا فتصغر R = r ÷ n."],
        sto: ["More lanes on the road mean easier traffic.", "حارات أكثر في الطريق تعني مرورًا أسهل."] }
    ],
    u2l3: [
      { k: "order", q: ["Put the bicycle dynamo in order.", "رتّب خطوات عمل دينامو الدراجة."],
        items: [["Your legs push the pedals", "قدماك تدفعان البدّال"], ["The wheel spins the dynamo", "العجلة تدير الدينامو"], ["The coil cuts magnetic field lines", "الملف يقطع خطوط المجال المغناطيسي"], ["An EMF is produced and the lamp lights", "تتولد قوة دافعة كهربية فيضيء المصباح"]],
        off: ["Kinetic energy turns the coil in the magnetic field, which produces EMF: a generator.", "الطاقة الحركية تدير الملف في المجال المغناطيسي فتتولد قوة دافعة كهربية، وهذا مولد."],
        sto: ["From your legs to the light: pedal, spin, cut the field, glow!", "من قدميك إلى الضوء: بدّل، ودوّر، واقطع المجال، فيضيء!"] },
      { k: "tf", q: ["True or false: an electromagnet stays magnetic after the current is switched off.", "صواب أم خطأ: المغناطيس الكهربي يبقى مغناطيسًا بعد فصل التيار."], a: false,
        off: ["False. It is a temporary magnet: the soft iron core loses its magnetism when the current stops.", "خطأ؛ هو مغناطيس مؤقت، وقلب الحديد المطاوع يفقد مغناطيسيته عند انقطاع التيار."],
        sto: ["Switch off and the paper clips drop straight away.", "افصل التيار فتسقط المشابك فورًا."] }
    ],
    u3l1: [
      { k: "order", q: ["Order from the biggest to the smallest.", "رتّب من الأكبر إلى الأصغر."],
        items: [["Cell", "الخلية"], ["Nucleus", "النواة"], ["Chromosome", "الكروموسوم"], ["Gene", "الجين"]],
        off: ["The cell contains the nucleus, the nucleus holds chromosomes, and a gene is a short piece of a chromosome's DNA.", "الخلية تحتوي النواة، والنواة تحمل الكروموسومات، والجين جزء قصير من الحمض النووي للكروموسوم."],
        sto: ["A library, a bookshelf, a book, and one recipe page inside it.", "مكتبة، ثم رف، ثم كتاب، ثم صفحة وصفة واحدة بداخله."] },
      { k: "tf", q: ["True or false: the recessive trait shows when the genotype is Yy.", "صواب أم خطأ: تظهر الصفة المتنحية عندما يكون النمط الجيني Yy."], a: false,
        off: ["False. In Yy the dominant allele Y hides y, so the dominant trait shows. The recessive shows only in yy.", "خطأ؛ في Yy يخفي الأليل السائد Y الأليل y فتظهر الصفة السائدة، والمتنحية لا تظهر إلا في yy."],
        sto: ["The loud card always wins over the whisper.", "البطاقة الصائحة تتغلب دائمًا على الهامسة."] }
    ],
    u3l2: [
      { k: "order", q: ["Put the peppered moth story in order.", "رتّب قصة فراشات العثة."],
        items: [["Factory soot darkens the tree trunks", "سناج المصانع يسوّد جذوع الأشجار"], ["Light moths become easy for birds to see", "تصبح الفراشات الفاتحة سهلة الرؤية للطيور"], ["More dark moths survive and reproduce", "يعيش عدد أكبر من الفراشات الداكنة ويتكاثر"], ["After many generations most moths are dark", "بعد أجيال كثيرة تصبح معظم الفراشات داكنة"]],
        off: ["The environment changed, the better-camouflaged moths survived and passed on their trait: natural selection.", "تغيرت البيئة فعاشت الفراشات الأفضل تمويهًا ونقلت صفتها: انتخاب طبيعي."],
        sto: ["Soot, sharp-eyed birds, hidden survivors, and a new dark normal.", "سناج، وطيور حادة البصر، وناجون مختبئون، ووضع داكن جديد."] },
      { k: "tf", q: ["True or false: in artificial selection, humans choose which individuals breed.", "صواب أم خطأ: في الانتخاب الصناعي يختار الإنسان الأفراد التي تتكاثر."], a: true,
        off: ["True. Humans pick parents with traits they want, such as high milk yield.", "صواب؛ يختار الإنسان آباء بصفات يريدها مثل غزارة اللبن."],
        sto: ["The farmer, not nature, chooses which cow has the next calf.", "المزارع وليس الطبيعة يختار أي بقرة تلد العجل التالي."] }
    ],
    u4l1: [
      { k: "order", q: ["Put the stages of fossil formation in order.", "رتّب مراحل تكوّن الحفرية."],
        items: [["The organism dies", "يموت الكائن"], ["Sediment buries it quickly", "تدفنه الرواسب بسرعة"], ["Layers press the sediment into rock", "تضغط الطبقات الرواسب فتصبح صخرًا"], ["Minerals replace or fill the remains", "تحل المعادن محل البقايا أو تملؤها"], ["Uplift and erosion expose the fossil", "الرفع والتعرية يكشفان الحفرية"]],
        off: ["Quick burial stops decay, rock forms, minerals preserve the shape and erosion finally uncovers it.", "الدفن السريع يمنع التحلل، ثم يتكون الصخر، وتحفظ المعادن الشكل، وأخيرًا تكشفه التعرية."],
        sto: ["The Earth writes the page, closes the book for millions of years, then opens it again.", "الأرض تكتب الصفحة وتغلق الكتاب ملايين السنين ثم تفتحه من جديد."] },
      { k: "tf", q: ["True or false: a bat wing and a butterfly wing are homologous structures.", "صواب أم خطأ: جناح الخفاش وجناح الفراشة تركيبان متماثلان."], a: false,
        off: ["False. They do the same job with different structures, so they are analogous.", "خطأ؛ يؤديان الوظيفة نفسها ببناء مختلف، فهما تركيبان متناظران."],
        sto: ["Two different machines that both fly: same job, different parts.", "آلتان مختلفتان تطيران: الوظيفة نفسها والأجزاء مختلفة."] }
    ],
    u4l2: [
      { k: "order", q: ["Order from the oldest to the most recent.", "رتّب من الأقدم إلى الأحدث."],
        items: [["Earth forms (about 4.6 billion years ago)", "تكوّن الأرض (منذ نحو ٤٫٦ مليار سنة)"], ["Paleozoic: ancient life", "حقب الحياة القديمة"], ["Mesozoic: middle life", "حقب الحياة الوسطى"], ["Cenozoic: modern life", "حقب الحياة الحديثة"]],
        off: ["After Precambrian time come the Paleozoic, Mesozoic and Cenozoic eras of the Phanerozoic eon.", "بعد زمن ما قبل الكمبري تأتي أحقاب الحياة القديمة ثم الوسطى ثم الحديثة في دهر الحياة الظاهرة."],
        sto: ["Earth's story book: the long opening, then ancient, middle and modern chapters.", "كتاب قصة الأرض: مقدمة طويلة ثم فصول قديمة ووسطى وحديثة."] },
      { k: "tf", q: ["True or false: relative age tells us the exact age of a rock in years.", "صواب أم خطأ: العمر النسبي يخبرنا بعمر الصخر بالسنين بالضبط."], a: false,
        off: ["False. Relative age only says older or younger; radioactive dating gives the absolute age in years.", "خطأ؛ العمر النسبي يحدد الأقدم والأحدث فقط، والتأريخ بالعناصر المشعة يعطي العمر المطلق بالسنين."],
        sto: ["The newspaper pile shows which came first, not the date printed on it.", "كومة الجرائد توضح أيها جاء أولًا، لا التاريخ المطبوع عليها."] }
    ]
  };
})();
