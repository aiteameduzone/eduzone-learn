/* EduZone Learn v3 - Science, Egyptian Secondary 2 PHYSICS, Term 1 (2026-2027).
   Follows the Ministry book "Physics, Second Secondary, First Term":
   Unit 1 Physical Quantities and Units of Measurement (Ch.1 Physical Measurement),
   Unit 2 Linear Motion (Ch.2 Motion in a Straight Line, Ch.3 Force and Motion),
   Unit 3 Properties of Matter (Ch.4 Hydrodynamics, Ch.5 Hydrostatics), Unit 4 Heat (Ch.6 Gas Laws).
   Registers EZ3.SCIG.sec2phy = {units, book} (ids sec2phyu1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.sec2phy_*). Same lesson shape as sci-prep2.js. */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec2phy = { book: { en: "Physics, Second Secondary, First Term", ar: "الفيزياء، الصف الثاني الثانوي، الفصل الدراسي الأول" }, units: [] };
  var Q = function (q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; };

  /* ================= UNIT 1: PHYSICAL QUANTITIES AND UNITS OF MEASUREMENT ================= */
  G.units.push({
    id: "sec2phyu1", num: 1, icon: "📏", color: "blue",
    title: { en: "Physical Quantities and Units of Measurement", ar: "الكميات الفيزيائية ووحدات القياس" },
    lessons: [
      {
        id: "sec2phyu1l1", icon: "📐", page: 7,
        title: { en: "Physical Measurement and SI Units", ar: "القياس الفيزيائي والنظام الدولي للوحدات" },
        idea: {
          official: {
            en: ["Measurement is comparing an unknown quantity with a quantity of the same kind (the unit) to find how many times it contains it. It needs three things: the physical quantity, the measuring instrument and the unit.",
              "A fundamental quantity is not defined in terms of other quantities (length, mass, time). A derived quantity is defined from fundamental ones, e.g. " + eq("volume = length × width × height") + ".",
              "Older systems: CGS (cm, g, s), FPS (foot, pound, second) and MKS (m, kg, s). The SI (1960) has seven base units: metre, kilogram, second, ampere, kelvin, mole and candela, plus the radian and steradian for angles.",
              "Standards: the metre was the distance between two marks on a platinum-iridium bar at 0°C (later 1,650,763.73 wavelengths of krypton-86 light); the kilogram is the mass of a platinum-iridium cylinder at 0°C; the second is " + eq("1/86,400") + " of the mean solar day (now a cesium-133 atomic clock).",
              "Vernier caliper: each main-scale division is 1 mm and each vernier division is 0.9 mm, so reading = main scale + (aligned vernier line × 0.1 mm). Example: " + eq("29 mm + 6 × 0.1 mm = 29.6 mm") + "."],
            ar: ["القياس هو مقارنة كمية مجهولة بكمية أخرى من نوعها (وحدة القياس) لمعرفة عدد مرات احتوائها عليها، وتلزمه ثلاثة عناصر: الكمية الفيزيائية وأداة القياس ووحدة القياس.",
              "الكمية الفيزيائية الأساسية لا تُعرّف بدلالة كميات أخرى (الطول والكتلة والزمن)، والكمية المشتقة تُعرّف بدلالة الكميات الأساسية، مثل " + eq("volume = length × width × height") + ".",
              "من أنظمة الوحدات: النظام الفرنسي CGS (سنتيمتر، جرام، ثانية) والبريطاني FPS (قدم، رطل، ثانية) والمتري MKS (متر، كيلوجرام، ثانية)، والنظام الدولي SI (١٩٦٠) له سبع وحدات أساسية: المتر والكيلوجرام والثانية والأمبير والكلفن والمول والشمعة (الكانديلا)، بالإضافة إلى الراديان والاستراديان.",
              "المعايير: المتر العياري هو المسافة بين علامتين على ساق من سبيكة البلاتين والإيريديوم عند صفر سيلزيوس (ثم ١٬٦٥٠٬٧٦٣٫٧٣ طولًا موجيًا لضوء الكريبتون ٨٦)، والكيلوجرام العياري كتلة أسطوانة من نفس السبيكة عند صفر سيلزيوس، والثانية " + eq("1/86,400") + " من اليوم الشمسي المتوسط (وحاليًا ساعة السيزيوم ١٣٣).",
              "القدمة ذات الورنية: قسم المسطرة الرئيسية ١ مم وقسم الورنية ٠٫٩ مم، فالقراءة = قراءة المسطرة الرئيسية + (رقم خط الورنية المنطبق × ٠٫١ مم). مثال: " + eq("29 mm + 6 × 0.1 mm = 29.6 mm") + "."]
          },
          story: {
            en: ["Omar's grandfather is a carpenter in Damietta. He measures a table leg with his hand span: \"four spans\".",
              "Omar laughs: \"Grandpa, my hand is smaller, so for me it is five spans!\" That is why people agreed on standard units.",
              "Omar takes out a vernier caliper from his school bag. The main scale shows 29 mm, and the 6th vernier line matches a main line.",
              "\"29 plus 0.6 is 29.6 mm,\" he says. Grandpa nods: \"Same answer in Damietta and in Paris.\"",
              "Length, mass and time are the basic bricks; the speed of Grandpa's delivery truck is built from them: a derived quantity."],
            ar: ["جدّ عمر نجّار في دمياط، يقيس رِجل منضدة بشبر يده فيقول: «أربعة أشبار».",
              "يضحك عمر: «يا جدّي يدي أصغر، فهي عندي خمسة أشبار!» ولهذا اتفق الناس على وحدات قياس عيارية.",
              "يُخرج عمر قدمة ذات ورنية من حقيبته؛ المسطرة الرئيسية تقرأ ٢٩ مم، والخط السادس من الورنية ينطبق على خط من المسطرة.",
              "يقول عمر: «٢٩ زائد ٠٫٦ تساوي ٢٩٫٦ مم». فيبتسم الجدّ: «نفس الإجابة في دمياط وفي باريس».",
              "الطول والكتلة والزمن هي الطوب الأساسي، وسرعة سيارة النقل الخاصة بالجدّ تُبنى منها، فهي كمية مشتقة."]
          }
        },
        words: [
          ["Measurement", "القياس", "Comparing an unknown quantity with a quantity of the same kind (the unit).", "مقارنة كمية مجهولة بكمية من نوعها (وحدة القياس)."],
          ["Fundamental quantity", "كمية فيزيائية أساسية", "A quantity not defined in terms of others: length, mass, time.", "كمية لا تُعرّف بدلالة كميات أخرى: الطول والكتلة والزمن."],
          ["Derived quantity", "كمية فيزيائية مشتقة", "A quantity defined from fundamental ones: volume, speed, acceleration.", "كمية تُعرّف بدلالة الكميات الأساسية: الحجم والسرعة والعجلة."],
          ["SI units", "النظام الدولي للوحدات", "The modern metric system (1960) with seven base units: m, kg, s, A, K, mol, cd.", "النظام المتري الحديث (١٩٦٠) وله سبع وحدات أساسية: m وkg وs وA وK وmol وcd."],
          ["Standard kilogram", "الكيلوجرام العياري", "Mass of a platinum-iridium cylinder kept at 0°C near Paris.", "كتلة أسطوانة من سبيكة البلاتين والإيريديوم محفوظة عند صفر سيلزيوس قرب باريس."],
          ["Vernier caliper", "القدمة ذات الورنية", "Measures length to 0.1 mm: main scale + aligned vernier line × 0.1 mm.", "تقيس الأطوال لأقرب ٠٫١ مم: قراءة المسطرة + رقم خط الورنية المنطبق × ٠٫١ مم."]
        ],
        lab: { parts: [{ type: "sec2phy_vernier" }, {
          type: "sort",
          prompt: ["Tap a quantity, then tap its type.", "اضغط على كمية، ثم اضغط على نوعها."],
          bins: [["f", "🧱", "Fundamental", "أساسية"], ["d", "🧩", "Derived", "مشتقة"]],
          items: [[["Length", "الطول"], "f"], [["Mass", "الكتلة"], "f"], [["Time", "الزمن"], "f"], [["Electric current", "شدة التيار الكهربي"], "f"], [["Absolute temperature", "درجة الحرارة المطلقة"], "f"],
            [["Volume", "الحجم"], "d"], [["Speed", "السرعة"], "d"], [["Acceleration", "العجلة"], "d"], [["Density", "الكثافة"], "d"], [["Force", "القوة"], "d"]]
        }] },
        quiz: [
          Q(["Which of the following is a derived physical quantity?", "أي مما يلي كمية فيزيائية مشتقة؟"],
            [["Speed", "السرعة"], ["Length", "الطول"], ["Mass", "الكتلة"], ["Time", "الزمن"]],
            ["Speed = distance ÷ time, so it is defined from length and time.", "السرعة = المسافة ÷ الزمن، فهي تُعرّف بدلالة الطول والزمن."],
            ["Grandpa's truck speed is built from the bricks of length and time.", "سرعة سيارة الجدّ مبنية من طوبتي الطول والزمن."]),
          Q(["In the SI, the ampere is the unit of...", "في النظام الدولي، الأمبير وحدة قياس..."],
            [["Electric current intensity", "شدة التيار الكهربي"], ["Electric charge", "الشحنة الكهربية"], ["Length", "الطول"], ["Luminous intensity", "شدة الإضاءة"]],
            ["The seven SI base units: m (length), kg (mass), s (time), A (current), K (temperature), mol (amount), cd (luminous intensity).", "الوحدات الأساسية السبع: m للطول وkg للكتلة وs للزمن وA لشدة التيار وK لدرجة الحرارة وmol لكمية المادة وcd لشدة الإضاءة."],
            ["Omar's phone charger label says 2 A: that is a current.", "مكتوب على شاحن هاتف عمر 2 A؛ وهذه شدة تيار."]),
          Q(["A vernier caliper: the main scale reads 29 mm before the vernier zero, and the 6th vernier line is aligned. The length is...", "قدمة ذات ورنية: قراءة المسطرة الرئيسية قبل صفر الورنية ٢٩ مم، والخط السادس من الورنية منطبق. الطول يساوي..."],
            [["29.6 mm", "٢٩٫٦ مم"], ["29.06 mm", "٢٩٫٠٦ مم"], ["35 mm", "٣٥ مم"], ["30.5 mm", "٣٠٫٥ مم"]],
            ["Each vernier division is 0.1 mm shorter than a main division: 29 + 6 × 0.1 = 29.6 mm.", "كل قسم من الورنية أقل بمقدار ٠٫١ مم من قسم المسطرة: ٢٩ + ٦ × ٠٫١ = ٢٩٫٦ مم."],
            ["Omar adds 6 tenths of a millimetre, not 6 hundredths and not 6 whole millimetres.", "يضيف عمر ستة أعشار المليمتر، لا ستة أجزاء من المئة ولا ستة مليمترات."]),
          Q(["How many seconds are there in one mean solar day?", "كم ثانية في اليوم الشمسي المتوسط؟"],
            [["86,400 s", "٨٦٬٤٠٠ ثانية"], ["3,600 s", "٣٬٦٠٠ ثانية"], ["1,440 s", "١٬٤٤٠ ثانية"], ["24,000 s", "٢٤٬٠٠٠ ثانية"]],
            ["1 day = 24 × 60 × 60 = 86,400 s, so the second was defined as 1/86,400 of the mean solar day.", "اليوم = ٢٤ × ٦٠ × ٦٠ = ٨٦٬٤٠٠ ثانية، لذا عُرّفت الثانية بأنها ١/٨٦٬٤٠٠ من اليوم الشمسي المتوسط."],
            ["3,600 is only one hour; Omar multiplies by 24 hours too.", "٣٬٦٠٠ ثانية ساعة واحدة فقط، فيضربها عمر في ٢٤ ساعة."]),
          Q(["Which system uses the foot, the pound and the second?", "أي نظام يستخدم القدم والرطل والثانية؟"],
            [["The British system (FPS)", "النظام البريطاني FPS"], ["The French system (CGS)", "النظام الفرنسي CGS"], ["The metric system (MKS)", "النظام المتري MKS"], ["None of them", "لا شيء مما سبق"]],
            ["FPS = foot, pound, second; CGS = centimetre, gram, second; MKS = metre, kilogram, second.", "FPS = قدم ورطل وثانية، وCGS = سنتيمتر وجرام وثانية، وMKS = متر وكيلوجرام وثانية."],
            ["The F in FPS stands for Foot, like the football boots Omar's cousin buys in London.", "الحرف F في FPS للقدم Foot."]),
          Q(["Why is a glass rod of the same length not used as the standard metre?", "لماذا لا تُستخدم ساق زجاجية لها طول المتر العياري كمعيار للطول؟"],
            [["Its length changes with temperature and it breaks easily", "يتغير طولها بتغير درجة الحرارة وتنكسر بسهولة"], ["Glass is too heavy to carry", "الزجاج ثقيل جدًا"], ["Marks cannot be engraved on glass", "لا يمكن الحفر على الزجاج"], ["Glass conducts electricity", "الزجاج موصل للكهرباء"]],
            ["A standard must be stable; the platinum-iridium alloy was kept at 0°C, and later an atomic (krypton) standard was chosen because it never changes.", "يجب أن يكون المعيار ثابتًا؛ لذا حُفظت سبيكة البلاتين والإيريديوم عند صفر سيلزيوس، ثم اختير معيار ذري (الكريبتون) لأنه لا يتغير."],
            ["A ruler that grows in Aswan's summer and shrinks in Alexandria's winter cannot be a standard.", "مسطرة تطول في صيف أسوان وتقصر في شتاء الإسكندرية لا تصلح معيارًا."]),
          Q(["The kelvin is the SI unit of...", "الكلفن وحدة قياس..."],
            [["Absolute temperature", "درجة الحرارة المطلقة"], ["Amount of substance", "كمية المادة"], ["Luminous intensity", "شدة الإضاءة"], ["Heat energy", "الطاقة الحرارية"]],
            ["Lord Kelvin defined absolute zero: 0 K = −273°C. Heat energy is measured in joules.", "عرّف اللورد كلفن الصفر المطلق: ٠ كلفن = −٢٧٣°س، أما الطاقة الحرارية فتقاس بالجول."],
            ["Kelvin is a temperature scale, not an amount of heat in Mama's kettle.", "الكلفن مقياس لدرجة الحرارة، لا لكمية الحرارة في غلاية ماما."])
        ]
      },
      {
        id: "sec2phyu1l2", icon: "🧮", page: 14,
        title: { en: "Dimensional Formulas and Prefixes", ar: "معادلة الأبعاد ومضاعفات الوحدات" },
        idea: {
          official: {
            en: ["The dimensional formula writes a quantity using L (length), M (mass) and T (time): " + eq("[A] = Lᵃ Mᵇ Tᶜ") + ". Speed = distance ÷ time, so " + eq("[v] = LT⁻¹") + " and its unit is m/s.",
              "Acceleration = velocity ÷ time: " + eq("[a] = LT⁻²") + " (m/s²). Force = mass × acceleration: " + eq("MLT⁻²") + " (newton = kg·m/s²). Pressure = force ÷ area: " + eq("ML⁻¹T⁻²") + " (pascal). Work = force × displacement: " + eq("ML²T⁻²") + " (joule). Density: " + eq("ML⁻³") + ".",
              "Only quantities with the same dimensions can be added or subtracted, after converting to the same unit: " + eq("1 m + 170 cm = 270 cm") + ". Different quantities can be multiplied or divided to give a new quantity.",
              "Dimensional homogeneity: " + eq("KE = ½ m v²") + " gives " + eq("ML²T⁻²") + " on both sides (½ has no dimension), so it may be valid. " + eq("V = π r h") + " gives L² against L³, so it is certainly wrong. Matching does not prove a law; a mismatch proves it wrong.",
              "Prefixes: nano 10⁻⁹, micro 10⁻⁶, milli 10⁻³, centi 10⁻², kilo 10³, mega 10⁶, giga 10⁹. Example: " + eq("7 mA = 7 × 10³ μA = 7000 μA") + "."],
            ar: ["معادلة الأبعاد تكتب الكمية بدلالة L (الطول) وM (الكتلة) وT (الزمن): " + eq("[A] = Lᵃ Mᵇ Tᶜ") + ". السرعة = المسافة ÷ الزمن، إذن " + eq("[v] = LT⁻¹") + " ووحدتها m/s.",
              "العجلة = السرعة ÷ الزمن: " + eq("[a] = LT⁻²") + " (m/s²)، والقوة = الكتلة × العجلة: " + eq("MLT⁻²") + " (نيوتن = kg·m/s²)، والضغط = القوة ÷ المساحة: " + eq("ML⁻¹T⁻²") + " (باسكال)، والشغل = القوة × الإزاحة: " + eq("ML²T⁻²") + " (جول)، والكثافة: " + eq("ML⁻³") + ".",
              "لا تُجمع ولا تُطرح إلا الكميات المتماثلة في الأبعاد بعد توحيد وحداتها: " + eq("1 m + 170 cm = 270 cm") + "، أما الكميات المختلفة فيمكن ضربها أو قسمتها لنحصل على كمية جديدة.",
              "تجانس الأبعاد: " + eq("KE = ½ m v²") + " أبعاد طرفيها " + eq("ML²T⁻²") + " (الكسر ½ ليس له أبعاد) فقد تكون صحيحة، أما " + eq("V = π r h") + " فطرفها الأيمن L² والأيسر L³ فهي خاطئة حتمًا. تساوي الأبعاد لا يثبت صحة العلاقة، لكن اختلافها يثبت خطأها.",
              "البادئات: نانو 10⁻⁹ وميكرو 10⁻⁶ ومللي 10⁻³ وسنتي 10⁻² وكيلو 10³ وميجا 10⁶ وجيجا 10⁹. مثال: " + eq("7 mA = 7 × 10³ μA = 7000 μA") + "."]
          },
          story: {
            en: ["Salma is checking her brother's physics homework in their flat in Tanta.",
              "He wrote: \"volume of a cylinder = π r h\". Salma writes L × L = L² under it and L³ under volume.",
              "\"The dimensions do not match, so it is wrong for sure,\" she says. \"It should be π r² h.\"",
              "Then he adds 1 m to 170 cm and writes 171. Salma laughs: \"Same kind but different units! 100 cm + 170 cm = 270 cm.\"",
              "At the end, the phone charger says 7 mA. \"That is 7000 microamperes,\" Salma says, multiplying by 10³."],
            ar: ["سلمى تراجع واجب الفيزياء لأخيها في شقتهم بطنطا.",
              "كتب أخوها: «حجم الأسطوانة = π r h»، فكتبت سلمى تحتها L × L = L² وتحت الحجم L³.",
              "قالت: «الأبعاد غير متساوية، إذن العلاقة خاطئة حتمًا، والصحيح π r² h».",
              "ثم جمع ١ متر مع ١٧٠ سم وكتب ١٧١! فضحكت سلمى: «نفس النوع لكن الوحدات مختلفة: ١٠٠ سم + ١٧٠ سم = ٢٧٠ سم».",
              "وفي النهاية قرأت على الشاحن 7 mA فقالت: «هذه ٧٠٠٠ ميكروأمبير» بعد الضرب في 10³."]
          }
        },
        words: [
          ["Dimensional formula", "معادلة الأبعاد", "A quantity written in terms of L, M and T with powers, e.g. LT⁻².", "تمثيل الكمية بدلالة L وM وT مرفوعة لأسس، مثل LT⁻²."],
          ["Dimensional homogeneity", "تجانس الأبعاد", "Both sides of a valid equation must have the same dimensions.", "يجب أن تتساوى أبعاد طرفي العلاقة الصحيحة."],
          ["Newton (N)", "النيوتن", "Unit of force: kg·m/s², dimensions MLT⁻².", "وحدة القوة: kg·m/s²، وأبعادها MLT⁻²."],
          ["Pascal (Pa)", "الباسكال", "Unit of pressure: N/m² = kg·m⁻¹·s⁻², dimensions ML⁻¹T⁻².", "وحدة الضغط: N/m² = kg·m⁻¹·s⁻²، وأبعادها ML⁻¹T⁻²."],
          ["Joule (J)", "الجول", "Unit of work and energy: kg·m²/s², dimensions ML²T⁻².", "وحدة الشغل والطاقة: kg·m²/s²، وأبعادها ML²T⁻²."],
          ["Scientific notation", "الصورة العلمية", "Writing numbers with powers of ten, e.g. 300,000,000 m/s = 3 × 10⁸ m/s.", "كتابة الأعداد بقوى العشرة، مثل 300,000,000 m/s = 3 × 10⁸ m/s."]
        ],
        lab: { parts: [{ type: "sec2phy_dims" }] },
        quiz: [
          Q(["The dimensional formula of acceleration is...", "معادلة أبعاد العجلة هي..."],
            [[eq("LT⁻²"), eq("LT⁻²")], [eq("LT⁻¹"), eq("LT⁻¹")], [eq("L²T⁻¹"), eq("L²T⁻¹")], [eq("MLT⁻²"), eq("MLT⁻²")]],
            ["a = velocity ÷ time = LT⁻¹ ÷ T = LT⁻², unit m/s².", "العجلة = السرعة ÷ الزمن = LT⁻¹ ÷ T = LT⁻²، ووحدتها m/s²."],
            ["Salma divides velocity by time once more: one more T⁻¹.", "تقسم سلمى السرعة على الزمن مرة أخرى فتزيد T⁻¹."]),
          Q(["Pressure = force ÷ area. Its dimensional formula is...", "الضغط = القوة ÷ المساحة. معادلة أبعاده..."],
            [[eq("ML⁻¹T⁻²"), eq("ML⁻¹T⁻²")], [eq("MLT⁻²"), eq("MLT⁻²")], [eq("ML²T⁻²"), eq("ML²T⁻²")], [eq("ML⁻³"), eq("ML⁻³")]],
            ["MLT⁻² ÷ L² = ML⁻¹T⁻², unit kg·m⁻¹·s⁻² = pascal.", "MLT⁻² ÷ L² = ML⁻¹T⁻²، ووحدته kg·m⁻¹·s⁻² = باسكال."],
            ["Dividing by area removes two L's from force's one L, leaving L⁻¹.", "القسمة على المساحة تطرح L² من L واحدة فيتبقى L⁻¹."]),
          Q(["A student wrote: acceleration (m/s²) × time (s) = velocity (m/s). Dimensional analysis shows that...", "كتب طالب: العجلة (m/s²) × الزمن (s) = السرعة (m/s). يوضح تحليل الأبعاد أن..."],
            [["both sides are LT⁻¹, so the equation may be correct", "أبعاد الطرفين LT⁻¹ فقد تكون العلاقة صحيحة"], ["the equation is certainly wrong", "العلاقة خاطئة حتمًا"], ["the equation is certainly correct with any number", "العلاقة صحيحة حتمًا مع أي معامل عددي"], ["the left side is LT⁻³", "أبعاد الطرف الأيسر LT⁻³"]],
            ["LT⁻² × T = LT⁻¹ = [velocity]. Matching dimensions means the law may be valid; numbers cannot be checked this way.", "LT⁻² × T = LT⁻¹ = أبعاد السرعة. التساوي يعني أن العلاقة قد تكون صحيحة، ولا يمكن التحقق من المعاملات العددية بالأبعاد."],
            ["Salma ticks it, but she knows matching dimensions is a hint, not a proof.", "تضع سلمى علامة صح، لكنها تعرف أن تساوي الأبعاد دليل مبدئي لا إثبات."]),
          Q(["From Einstein's E = mc² (c = speed of light), the SI unit of E is...", "من معادلة أينشتاين E = mc² (حيث c سرعة الضوء)، وحدة E في النظام الدولي..."],
            [["kg·m²/s² (joule)", "kg·m²/s² (جول)"], ["kg·m/s² (newton)", "kg·m/s² (نيوتن)"], ["kg·m/s", "kg·m/s"], ["kg²·m/s²", "kg²·m/s²"]],
            ["kg × (m/s)² = kg·m²/s², dimensions ML²T⁻²: the unit of energy, the joule.", "kg × (m/s)² = kg·m²/s² وأبعادها ML²T⁻²، وهي وحدة الطاقة: الجول."],
            ["Squaring the speed squares both the metre and the second.", "تربيع السرعة يربّع المتر والثانية معًا."]),
          Q(["Express 7 mA in microamperes.", "عبّر عن 7 mA بالميكروأمبير."],
            [["7000 μA", "7000 μA"], ["0.007 μA", "0.007 μA"], ["70 μA", "70 μA"], ["7 × 10⁶ μA", "7 × 10⁶ μA"]],
            ["1 mA = 10⁻³ A and 1 μA = 10⁻⁶ A, so 1 mA = 10³ μA and 7 mA = 7 × 10³ = 7000 μA.", "1 mA = 10⁻³ A و1 μA = 10⁻⁶ A، إذن 1 mA = 10³ μA و7 mA = 7 × 10³ = 7000 μA."],
            ["Going to a smaller unit gives a bigger number, like changing pounds to piastres.", "التحويل إلى وحدة أصغر يعطي عددًا أكبر، مثل تحويل الجنيهات إلى قروش."]),
          Q(["Write 88 km in metres using scientific notation.", "اكتب 88 km بالمتر في الصورة العلمية."],
            [["8.8 × 10⁴ m", "8.8 × 10⁴ m"], ["8.8 × 10³ m", "8.8 × 10³ m"], ["8.8 × 10⁵ m", "8.8 × 10⁵ m"], ["88 × 10⁻³ m", "88 × 10⁻³ m"]],
            ["88 km = 88 × 10³ m = 88,000 m = 8.8 × 10⁴ m.", "88 km = 88 × 10³ m = 88,000 m = 8.8 × 10⁴ m."],
            ["Salma moves the decimal point once to the left, so the power rises from 3 to 4.", "تنقل سلمى العلامة العشرية خانة لليسار فيزيد الأس من ٣ إلى ٤."]),
          Q(["A human hair is about 0.05 mm thick. In metres this is...", "قطر شعرة الإنسان نحو 0.05 mm. بالمتر يساوي..."],
            [["5 × 10⁻⁵ m", "5 × 10⁻⁵ m"], ["5 × 10⁻⁴ m", "5 × 10⁻⁴ m"], ["5 × 10⁻³ m", "5 × 10⁻³ m"], ["5 × 10⁻⁶ m", "5 × 10⁻⁶ m"]],
            ["0.05 mm = 0.05 × 10⁻³ m = 5 × 10⁻⁵ m.", "0.05 mm = 0.05 × 10⁻³ m = 5 × 10⁻⁵ m."],
            ["5 hundredths of a millimetre: two more steps of ten below the millimetre.", "خمسة أجزاء من مئة من المليمتر: خطوتان إضافيتان من العشرة تحت المليمتر."]),
          Q(["Saturn: radius 5.85 × 10⁷ m, mass 5.68 × 10²⁶ kg. Its average density is about...", "زحل: نصف قطره 5.85 × 10⁷ m وكتلته 5.68 × 10²⁶ kg. متوسط كثافته تقريبًا..."],
            [["0.677 g/cm³", "0.677 g/cm³"], ["6.77 g/cm³", "6.77 g/cm³"], ["2.84 g/cm³", "2.84 g/cm³"], ["0.0677 g/cm³", "0.0677 g/cm³"]],
            ["V = 4/3 π r³ = 8.39 × 10²³ m³; ρ = m/V ≈ 677 kg/m³ = 0.677 g/cm³ (less than water!).", "V = 4/3 π r³ = 8.39 × 10²³ m³، وρ = m/V ≈ 677 kg/m³ = 0.677 g/cm³ (أقل من الماء!)."],
            ["2.84 comes from forgetting 4/3 π; Salma never drops the sphere formula.", "الرقم 2.84 ينتج عن نسيان 4/3 π، وسلمى لا تنسى قانون حجم الكرة."])
        ]
      },
      {
        id: "sec2phyu1l3", icon: "🎯", page: 18,
        title: { en: "Measurement Error, Direct and Indirect Measurement", ar: "الخطأ في القياس والقياس المباشر وغير المباشر" },
        idea: {
          official: {
            en: ["No measurement is 100% accurate: there is always a margin of error. Five students measured one pencil: 10.1, 10.0, 9.8, 10.0 and 10.0 cm; their mean is " + eq("49.9 ÷ 5 = 9.98 cm") + ".",
              "Sources of error: (1) an unsuitable instrument (an ordinary balance for a gold ring); (2) a defective instrument (an old ammeter with a weak magnet, or a pointer that does not return to zero); (3) wrong technique (misusing a multi-range meter, or looking at the scale at an angle instead of perpendicular to it); (4) environment (temperature, humidity, air currents: a sensitive balance is kept in a glass case).",
              "Direct measurement uses one instrument in one operation with no equation, e.g. density with a hydrometer or volume with a graduated cylinder.",
              "Indirect measurement uses more than one instrument and an equation, e.g. " + eq("ρ = m / V") + " with a balance and a graduated cylinder, or " + eq("V = l × w × h") + ". Several errors add up: error accumulation.",
              "To reduce error: choose a more precise instrument (a ruler in millimetres rather than centimetres), look perpendicular to the scale and repeat the measurement and take the average."],
            ar: ["لا يوجد قياس دقيق بنسبة ١٠٠٪؛ فهناك دائمًا قدر من الخطأ. قاس خمسة طلاب قلمًا واحدًا فكانت النتائج ١٠٫١ و١٠٫٠ و٩٫٨ و١٠٫٠ و١٠٫٠ سم، ومتوسطها " + eq("49.9 ÷ 5 = 9.98 cm") + ".",
              "مصادر الخطأ: (١) اختيار أداة غير مناسبة (ميزان عادي لقياس كتلة خاتم ذهب)، (٢) خلل في أداة القياس (أميتر قديم مغناطيسه ضعيف أو مؤشر لا يعود للصفر)، (٣) إجراء القياس بطريقة خاطئة (عدم معرفة استخدام الأجهزة متعددة التدريج، أو النظر للتدريج بزاوية مائلة بدلًا من أن يكون خط النظر عموديًا)، (٤) عوامل بيئية (الحرارة والرطوبة وتيارات الهواء؛ لذا يوضع الميزان الحساس داخل صندوق زجاجي).",
              "القياس المباشر يتم بأداة واحدة وعملية قياس واحدة دون التعويض في علاقة رياضية، مثل قياس الكثافة بالهيدروميتر أو الحجم بالمخبار المدرج.",
              "القياس غير المباشر يستخدم أكثر من أداة والتعويض في علاقة رياضية، مثل " + eq("ρ = m / V") + " باستخدام الميزان والمخبار، أو " + eq("V = l × w × h") + "، فتتراكم الأخطاء.",
              "لتقليل الخطأ: نختار أداة أدق (مسطرة مقسمة بالمليمتر بدلًا من السنتيمتر)، وننظر عموديًا على التدريج، ونكرر القياس ونأخذ المتوسط."]
          },
          story: {
            en: ["Nour works on Saturday at her uncle's jewellery shop in Khan El-Khalili.",
              "A customer wants to weigh a small gold ring. Nour reaches for the big vegetable scale; her uncle stops her: \"Wrong instrument!\"",
              "He uses the sensitive balance inside its glass case: \"The fan's air current would push the pan and spoil the reading.\"",
              "Later Nour reads the old ammeter of the shop's light and notices the needle sits at 0.1 even when it is off: a defective instrument.",
              "When she checks a necklace's length, she looks straight down at the ruler, not from the side, and repeats three times."],
            ar: ["نور تعمل يوم السبت في محل مجوهرات عمّها بخان الخليلي.",
              "زبون يريد وزن خاتم ذهب صغير، فتمد نور يدها إلى ميزان الخضار الكبير، فيوقفها عمّها: «أداة غير مناسبة!»",
              "يستخدم العم الميزان الحساس داخل صندوقه الزجاجي ويقول: «تيار هواء المروحة يحرّك الكفة ويفسد القراءة».",
              "لاحقًا تقرأ نور الأميتر القديم لإضاءة المحل فتلاحظ أن المؤشر يقف عند ٠٫١ حتى وهو مطفأ: خلل في الأداة.",
              "وعندما تقيس طول عقد تنظر للمسطرة عموديًا لا من الجانب، وتكرر القياس ثلاث مرات."]
          }
        },
        words: [
          ["Measurement error", "الخطأ في القياس", "The difference between the measured value and the true value.", "الفرق بين القيمة المقيسة والقيمة الحقيقية."],
          ["Direct measurement", "القياس المباشر", "One instrument, one operation, no equation (hydrometer, graduated cylinder).", "أداة واحدة وعملية واحدة دون علاقة رياضية (الهيدروميتر، المخبار المدرج)."],
          ["Indirect measurement", "القياس غير المباشر", "Several measurements combined in an equation, e.g. ρ = m/V.", "عدة قياسات تُعوّض في علاقة رياضية، مثل ρ = m/V."],
          ["Error accumulation", "تراكم الأخطاء", "In indirect measurement the errors of each step add up.", "في القياس غير المباشر تتجمع أخطاء كل خطوة."],
          ["Line of sight", "خط النظر", "Must be perpendicular to the scale to avoid a reading error.", "يجب أن يكون عموديًا على التدريج لتجنب خطأ القراءة."],
          ["Hydrometer", "الهيدروميتر", "An instrument that measures the density of a liquid directly.", "جهاز يقيس كثافة السائل قياسًا مباشرًا."]
        ],
        lab: { parts: [{ type: "sec2phy_error" }, {
          type: "sort",
          prompt: ["Tap a situation, then tap its source of error.", "اضغط على موقف، ثم اضغط على مصدر الخطأ فيه."],
          bins: [["i", "⚖️", "Unsuitable instrument", "أداة غير مناسبة"], ["d", "🔧", "Defective instrument", "خلل في الأداة"], ["w", "👁️", "Wrong technique", "طريقة خاطئة"], ["e", "🌬️", "Environment", "عوامل بيئية"]],
          items: [[["Weighing a gold ring on a kitchen scale", "وزن خاتم ذهب بميزان المطبخ"], "i"], [["Measuring a hair with a metre ruler", "قياس شعرة بمسطرة متر"], "i"],
            [["Ammeter pointer not returning to zero", "مؤشر الأميتر لا يعود للصفر"], "d"], [["Old ammeter with a weak magnet", "أميتر قديم مغناطيسه ضعيف"], "d"],
            [["Reading the scale from the side", "قراءة التدريج من الجانب"], "w"], [["Wrong range on a multimeter", "اختيار تدريج خاطئ في الملتيميتر"], "w"],
            [["Air current from a fan on a sensitive balance", "تيار هواء مروحة على ميزان حساس"], "e"], [["A steel tape measured in strong sun", "شريط قياس صلب في شمس قوية"], "e"]]
        }] },
        quiz: [
          Q(["Five students measured a pencil: 10.1, 10.0, 9.8, 10.0, 10.0 cm. The mean length is...", "قاس خمسة طلاب قلمًا: ١٠٫١ و١٠٫٠ و٩٫٨ و١٠٫٠ و١٠٫٠ سم. متوسط الطول..."],
            [["9.98 cm", "٩٫٩٨ سم"], ["10.0 cm exactly", "١٠٫٠ سم تمامًا"], ["9.8 cm", "٩٫٨ سم"], ["49.9 cm", "٤٩٫٩ سم"]],
            ["Sum = 49.9 cm; mean = 49.9 ÷ 5 = 9.98 cm.", "المجموع = ٤٩٫٩ سم، والمتوسط = ٤٩٫٩ ÷ ٥ = ٩٫٩٨ سم."],
            ["49.9 is only the total; Nour divides by the five readings.", "٤٩٫٩ هو المجموع فقط، وتقسمه نور على عدد القراءات الخمس."]),
          Q(["Using an ordinary balance to find the mass of a gold ring causes an error due to...", "استخدام ميزان عادي لقياس كتلة خاتم ذهب يسبب خطأ بسبب..."],
            [["choosing an unsuitable instrument", "اختيار أداة قياس غير مناسبة"], ["a defect in the instrument", "خلل في أداة القياس"], ["environmental factors", "عوامل بيئية"], ["error accumulation", "تراكم الأخطاء"]],
            ["A small mass needs a sensitive balance; the ordinary balance is the wrong tool.", "الكتلة الصغيرة تحتاج ميزانًا حساسًا، والميزان العادي أداة غير مناسبة."],
            ["Nour's uncle never weighs gold on the vegetable scale.", "عمّ نور لا يزن الذهب أبدًا بميزان الخضار."]),
          Q(["The pointer of an ammeter does not return to zero when the current is cut off. This is...", "مؤشر الأميتر لا يعود إلى الصفر عند قطع التيار. هذا..."],
            [["a defect in the measuring instrument", "خلل في أداة القياس"], ["an environmental factor", "عامل بيئي"], ["a wrong line of sight", "خط نظر خاطئ"], ["an indirect measurement", "قياس غير مباشر"]],
            ["The book lists a weak magnet and a pointer not returning to zero as defects of the ammeter.", "يذكر الكتاب ضعف المغناطيس وعدم رجوع المؤشر للصفر كأمثلة لخلل الأميتر."],
            ["The shop's ammeter shows 0.1 A with the light off: the meter itself is faulty.", "أميتر المحل يقرأ ٠٫١ أمبير والإضاءة مطفأة؛ فالعيب في الجهاز نفسه."]),
          Q(["A sensitive balance is placed inside a glass case to avoid errors from...", "يوضع الميزان الحساس داخل صندوق زجاجي لتجنب الخطأ الناتج عن..."],
            [["air currents", "تيارات الهواء"], ["parallax", "زاوية النظر"], ["a weak magnet", "ضعف المغناطيس"], ["error accumulation", "تراكم الأخطاء"]],
            ["Air currents are an environmental factor that pushes the light pan and changes the reading.", "تيارات الهواء عامل بيئي يحرك الكفة الخفيفة فيغير القراءة."],
            ["The shop fan is enough to move the tiny pan, so the uncle closes the glass door.", "مروحة المحل كافية لتحريك الكفة الصغيرة، لذا يغلق العم باب الصندوق."]),
          Q(["Which of these is an INDIRECT measurement?", "أي مما يلي قياس غير مباشر؟"],
            [["Density from a balance and a graduated cylinder", "الكثافة باستخدام ميزان ومخبار مدرج"], ["Density with a hydrometer", "الكثافة بالهيدروميتر"], ["Volume with a graduated cylinder", "الحجم بالمخبار المدرج"], ["Mass with a digital balance", "الكتلة بميزان رقمي"]],
            ["Two instruments plus the equation ρ = m/V make it indirect; the others need one instrument only.", "أداتان والتعويض في ρ = m/V يجعلانه قياسًا غير مباشر، أما الباقي فبأداة واحدة."],
            ["Nour weighs, then measures volume, then divides: three steps, three chances for error.", "نور تزن ثم تقيس الحجم ثم تقسم: ثلاث خطوات وثلاث فرص للخطأ."]),
          Q(["Why is indirect measurement usually less accurate than direct measurement?", "لماذا يكون القياس غير المباشر عادة أقل دقة من المباشر؟"],
            [["Errors of several measurements accumulate", "تتراكم أخطاء عدة عمليات قياس"], ["It uses no instrument", "لا يستخدم أي أداة"], ["It is always done at an angle", "يتم دائمًا بزاوية مائلة"], ["Its units are not SI", "وحداته ليست دولية"]],
            ["More than one measuring operation means more than one error, and they add up.", "أكثر من عملية قياس تعني أكثر من خطأ، فتتراكم الأخطاء."],
            ["Like small mistakes in each line of a long sum.", "مثل أخطاء صغيرة في كل سطر من عملية جمع طويلة."]),
          Q(["Which ruler measures the pencil more accurately?", "أي مسطرة أدق في قياس طول القلم؟"],
            [["A ruler graduated in 1 mm divisions", "مسطرة مقسمة إلى ١ مم"], ["A ruler graduated in 1 cm divisions", "مسطرة مقسمة إلى ١ سم"], ["Both are equally accurate", "الاثنتان بنفس الدقة"], ["A metre stick with no divisions", "عصا متر بلا تدريج"]],
            ["The smaller the smallest division, the smaller the uncertainty of the reading.", "كلما صغر أصغر تدريج، قل مقدار الشك في القراءة."],
            ["With centimetre marks Nour can only guess the millimetres.", "مع تدريج السنتيمتر تخمّن نور المليمترات تخمينًا."])
        ]
      }
    ]
  });

  /* ================= UNIT 2: LINEAR MOTION ================= */
  G.units.push({
    id: "sec2phyu2", num: 2, icon: "🏎️", color: "purple",
    title: { en: "Linear Motion", ar: "الحركة الخطية" },
    lessons: [
      {
        id: "sec2phyu2l1", icon: "🚆", page: 27,
        title: { en: "Motion in a Straight Line and Velocity", ar: "الحركة في خط مستقيم والسرعة" },
        idea: {
          official: {
            en: ["Motion is the change in an object's position with time relative to another object. Motion in one direction along a straight path is motion in a straight line, the simplest type.",
              "Translational motion has a start point and an end point (a train, a projectile). Periodic motion repeats itself at equal time intervals (a pendulum, a tuning-fork prong, circular motion).",
              "Speed is the distance covered per unit time: a scalar, always positive (the speedometer shows 80 km/h). Velocity is the displacement per unit time: a vector with magnitude and direction (80 km/h east), positive or negative: " + eq("v = Δd / Δt") + ".",
              "Uniform velocity: equal displacements in equal times; the displacement–time graph is a straight line whose slope is the velocity. Variable velocity: unequal displacements in equal times.",
              "Instantaneous velocity = slope of the tangent to the d–t curve at that moment. Average velocity = total displacement ÷ total time. Example: a runner covers 4000 m in 30 min: " + eq("v̄ = 4 km ÷ 0.5 h = 8 km/h") + "; in 45 min he covers " + eq("8 × 0.75 = 6 km") + "."],
            ar: ["الحركة هي التغير في موضع الجسم بمرور الزمن بالنسبة لموضع جسم آخر، وإذا كانت في اتجاه واحد وفي مسار مستقيم سُميت حركة في خط مستقيم، وهي أبسط أنواع الحركة.",
              "الحركة الانتقالية لها نقطة بداية ونقطة نهاية (القطار، المقذوفات)، والحركة الدورية تكرر نفسها على فترات زمنية متساوية (البندول، شوكة رنانة، الحركة الدائرية).",
              "السرعة القياسية هي المسافة المقطوعة في وحدة الزمن، كمية قياسية موجبة دائمًا (عداد السرعة يقرأ ٨٠ km/h)، والسرعة المتجهة هي الإزاحة في وحدة الزمن، كمية متجهة لها مقدار واتجاه (٨٠ km/h شرقًا) وقد تكون موجبة أو سالبة: " + eq("v = Δd / Δt") + ".",
              "السرعة المنتظمة: يقطع الجسم إزاحات متساوية في أزمنة متساوية، ومنحنى الإزاحة–الزمن خط مستقيم ميله يساوي السرعة. السرعة المتغيرة: إزاحات غير متساوية في أزمنة متساوية.",
              "السرعة اللحظية = ميل المماس لمنحنى الإزاحة–الزمن عند تلك اللحظة، والسرعة المتوسطة = الإزاحة الكلية ÷ الزمن الكلي. مثال: عدّاء قطع ٤٠٠٠ م في ٣٠ دقيقة: " + eq("v̄ = 4 km ÷ 0.5 h = 8 km/h") + "، وفي ٤٥ دقيقة يقطع " + eq("8 × 0.75 = 6 km") + "."]
          },
          story: {
            en: ["Karim takes the train from Cairo to Alexandria. On the long straight track near Tanta it moves in a straight line.",
              "The speedometer on the driver's screen says 120 km/h, but that is speed only; Karim adds \"towards Alexandria\" to make it a velocity.",
              "From the window, poles pass at equal time gaps: equal displacements in equal times, so the velocity is uniform.",
              "Approaching Damanhour the train slows: the gaps get smaller. The velocity is now variable.",
              "The whole 210 km trip takes 2.5 h, so Karim's average velocity is 84 km/h, even though the speedometer showed many different instantaneous values."],
            ar: ["كريم يركب القطار من القاهرة إلى الإسكندرية، وعلى القضبان المستقيمة الطويلة قرب طنطا يتحرك القطار في خط مستقيم.",
              "تُظهر شاشة السائق ١٢٠ km/h، وهذه سرعة قياسية فقط، فيضيف كريم «نحو الإسكندرية» لتصبح سرعة متجهة.",
              "من النافذة تمر أعمدة الإنارة بفترات زمنية متساوية: إزاحات متساوية في أزمنة متساوية، فالسرعة منتظمة.",
              "عند الاقتراب من دمنهور يُبطئ القطار فتقل المسافات بين المواضع، فتصبح السرعة متغيرة.",
              "الرحلة كلها ٢١٠ كم في ٢٫٥ ساعة، فالسرعة المتوسطة ٨٤ km/h، مع أن العداد أظهر قيمًا لحظية كثيرة مختلفة."]
          }
        },
        words: [
          ["Motion", "الحركة", "The change in an object's position with time relative to another object.", "التغير في موضع الجسم بمرور الزمن بالنسبة لجسم آخر."],
          ["Periodic motion", "الحركة الدورية", "Motion that repeats itself at equal time intervals.", "حركة تكرر نفسها على فترات زمنية متساوية."],
          ["Velocity", "السرعة المتجهة", "Displacement per unit time; a vector (m/s or km/h).", "الإزاحة في وحدة الزمن، كمية متجهة (m/s أو km/h)."],
          ["Uniform velocity", "السرعة المنتظمة", "Equal displacements in equal time intervals in a straight line.", "إزاحات متساوية في أزمنة متساوية في خط مستقيم."],
          ["Instantaneous velocity", "السرعة اللحظية", "Velocity at a moment: slope of the tangent to the d–t curve.", "السرعة عند لحظة معينة: ميل المماس لمنحنى الإزاحة–الزمن."],
          ["Average velocity", "السرعة المتوسطة", "Total displacement ÷ total time.", "الإزاحة الكلية ÷ الزمن الكلي."]
        ],
        lab: { parts: [{ type: "sec2phy_motion" }, {
          type: "sort",
          prompt: ["Tap a motion, then tap its type.", "اضغط على حركة، ثم اضغط على نوعها."],
          bins: [["t", "➡️", "Translational", "انتقالية"], ["p", "🔁", "Periodic", "دورية"]],
          items: [[["A train between two stations", "قطار بين محطتين"], "t"], [["A thrown ball (projectile)", "كرة مقذوفة"], "t"], [["A car on the Ring Road", "سيارة على الطريق الدائري"], "t"],
            [["A clock pendulum", "بندول الساعة"], "p"], [["A tuning-fork prong", "فرع الشوكة الرنانة"], "p"], [["A ceiling fan blade", "ريشة مروحة السقف"], "p"], [["A swing in the park", "أرجوحة في الحديقة"], "p"]]
        }] },
        quiz: [
          Q(["A runner covers 4000 m in a straight line in 30 min. His average velocity is...", "عدّاء قطع ٤٠٠٠ م في خط مستقيم خلال ٣٠ دقيقة. سرعته المتوسطة..."],
            [["8 km/h", "8 km/h"], ["133 km/h", "133 km/h"], ["2 km/h", "2 km/h"], ["0.13 km/h", "0.13 km/h"]],
            ["v̄ = 4 km ÷ 0.5 h = 8 km/h. (133 comes from dividing metres by minutes and calling it km/h.)", "v̄ = 4 km ÷ 0.5 h = 8 km/h. (الرقم 133 ينتج من قسمة الأمتار على الدقائق دون تحويل.)"],
            ["Karim converts first: 4000 m is 4 km and 30 min is half an hour.", "يحوّل كريم أولًا: ٤٠٠٠ م = ٤ كم و٣٠ دقيقة = نصف ساعة."]),
          Q(["At the same average velocity (8 km/h), how far does the runner go in 45 min?", "بنفس السرعة المتوسطة (8 km/h)، ما المسافة التي يقطعها العدّاء في ٤٥ دقيقة؟"],
            [["6 km", "٦ كم"], ["8 km", "٨ كم"], ["12 km", "١٢ كم"], ["360 km", "٣٦٠ كم"]],
            ["d = v̄ × t = 8 km/h × 0.75 h = 6 km.", "d = v̄ × t = 8 km/h × 0.75 h = 6 km."],
            ["Three quarters of an hour gives three quarters of 8 km.", "ثلاثة أرباع الساعة تعطي ثلاثة أرباع الـ ٨ كم."]),
          Q(["The motion of a clock pendulum is...", "حركة بندول الساعة..."],
            [["periodic motion", "حركة دورية"], ["translational motion", "حركة انتقالية"], ["motion in a straight line", "حركة في خط مستقيم"], ["projectile motion", "حركة مقذوفات"]],
            ["It repeats itself at equal time intervals, so it is periodic.", "تكرر نفسها على فترات زمنية متساوية فهي دورية."],
            ["The pendulum in Karim's grandmother's hall swings back every second, forever.", "بندول ساعة جدة كريم يعود كل ثانية بلا نهاية."]),
          Q(["A car speedometer reads 80 km/h. It measures...", "عداد سرعة السيارة يقرأ 80 km/h. هو يقيس..."],
            [["speed (magnitude only)", "السرعة القياسية (المقدار فقط)"], ["velocity (magnitude and direction)", "السرعة المتجهة (المقدار والاتجاه)"], ["acceleration", "العجلة"], ["displacement", "الإزاحة"]],
            ["The speedometer tells nothing about direction; velocity needs a direction too (80 km/h east).", "العداد لا يخبرنا بالاتجاه، والسرعة المتجهة تحتاج اتجاهًا (٨٠ km/h شرقًا)."],
            ["The dashboard does not know if Karim's train goes north or south.", "لوحة القيادة لا تعرف إن كان القطار يتجه شمالًا أم جنوبًا."]),
          Q(["The slope of a displacement–time straight line represents the...", "ميل الخط المستقيم في منحنى الإزاحة–الزمن يمثل..."],
            [["velocity", "السرعة"], ["acceleration", "العجلة"], ["distance", "المسافة"], ["time", "الزمن"]],
            ["Slope = Δd ÷ Δt = velocity. A straight line means uniform velocity.", "الميل = Δd ÷ Δt = السرعة، والخط المستقيم يعني سرعة منتظمة."],
            ["A steeper line means more metres each second: a faster train.", "الخط الأكثر انحدارًا يعني أمتارًا أكثر كل ثانية: قطارًا أسرع."]),
          Q(["How is the instantaneous velocity found from a curved d–t graph?", "كيف تُعيّن السرعة اللحظية من منحنى إزاحة–زمن غير مستقيم؟"],
            [["From the slope of the tangent at that instant", "من ميل المماس للمنحنى عند تلك اللحظة"], ["From the slope of the line joining start and end", "من ميل الخط الواصل بين البداية والنهاية"], ["From the area under the curve", "من المساحة تحت المنحنى"], ["From the highest point only", "من أعلى نقطة فقط"]],
            ["Tangent slope = instantaneous velocity; the start-to-end line slope = average velocity.", "ميل المماس = السرعة اللحظية، وميل الخط الواصل بين البداية والنهاية = السرعة المتوسطة."],
            ["It is the speedometer reading at one moment, not the whole trip.", "إنها قراءة العداد في لحظة واحدة، لا الرحلة كلها."]),
          Q(["Convert 72 km/h to m/s.", "حوّل 72 km/h إلى m/s."],
            [["20 m/s", "20 m/s"], ["72 m/s", "72 m/s"], ["259.2 m/s", "259.2 m/s"], ["7.2 m/s", "7.2 m/s"]],
            ["1 km/h = 1000 m ÷ 3600 s = 5/18 m/s, so 72 × 5/18 = 20 m/s.", "1 km/h = 1000 m ÷ 3600 s = 5/18 m/s، إذن 72 × 5/18 = 20 m/s."],
            ["259.2 is multiplying by 3.6 instead of dividing.", "الرقم 259.2 ينتج من الضرب في 3.6 بدلًا من القسمة عليه."])
        ]
      },
      {
        id: "sec2phyu2l2", icon: "🚀", page: 31,
        title: { en: "Acceleration", ar: "العجلة" },
        idea: {
          official: {
            en: ["Motion in which velocity changes with time (in magnitude, direction or both) is accelerated motion. Acceleration is the change in velocity per unit time: " + eq("a = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)") + ", unit m/s².",
              "Example from the book: a car starts from rest and its speedometer rises by 5 m/s every second, so " + eq("a = (10 − 5) / (2 − 1) = 5 m/s²") + ".",
              "To convert speedometer readings: " + eq("1 km/h = 1000 m ÷ 3600 s = 5/18 m/s") + ".",
              "On a velocity–time graph a straight line means uniform acceleration (equal changes of velocity in equal times); its slope is the acceleration.",
              "Taking the direction of motion as positive: a ball rolling down a smooth incline has positive acceleration (velocity increases); on a smooth horizontal surface zero acceleration (constant velocity); rolling up the incline negative acceleration (velocity decreases). A car has three controls: the gas pedal, the brake and the steering wheel."],
            ar: ["الحركة التي تتغير فيها السرعة مع الزمن (مقدارًا أو اتجاهًا أو كليهما) تسمى حركة معجلة، والعجلة هي التغير في السرعة في وحدة الزمن: " + eq("a = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)") + "، ووحدتها m/s².",
              "مثال الكتاب: سيارة تبدأ من السكون وتزداد قراءة عدادها ٥ m/s كل ثانية، إذن " + eq("a = (10 − 5) / (2 − 1) = 5 m/s²") + ".",
              "لتحويل قراءة العداد: " + eq("1 km/h = 1000 m ÷ 3600 s = 5/18 m/s") + ".",
              "في منحنى السرعة–الزمن يدل الخط المستقيم على عجلة منتظمة (تغيرات متساوية في السرعة في أزمنة متساوية)، وميله يساوي العجلة.",
              "باعتبار اتجاه الحركة موجبًا: كرة تهبط مستوى مائلًا أملس عجلتها موجبة (تزداد السرعة)، وعلى سطح أفقي أملس عجلتها صفر (سرعة ثابتة)، وأثناء صعودها المستوى المائل عجلتها سالبة (تقل السرعة). وفي السيارة ثلاث أدوات للتحكم: دواسة البنزين والفرامل وعجلة القيادة."]
          },
          story: {
            en: ["Hana is in the back seat as her dad leaves a toll gate on the Cairo–Ain Sokhna road.",
              "She watches the speedometer: 18, 36, 54 km/h after 1, 2 and 3 seconds. In m/s that is 5, 10, 15: up 5 m/s every second.",
              "\"Our acceleration is 5 m/s²,\" she announces. The gas pedal makes it positive.",
              "On the flat cruise at 90 km/h the needle stays still: zero acceleration, but the car is still moving fast!",
              "Near a speed bump Dad brakes from 20 m/s to 0 in 5 s: a = −4 m/s², a negative acceleration."],
            ar: ["هنا تجلس في المقعد الخلفي وأبوها يغادر بوابة الرسوم على طريق القاهرة–العين السخنة.",
              "تراقب العداد: ١٨ ثم ٣٦ ثم ٥٤ km/h بعد ١ و٢ و٣ ثوانٍ، أي ٥ و١٠ و١٥ m/s: تزيد ٥ m/s كل ثانية.",
              "تعلن هنا: «عجلتنا ٥ m/s²»، ودواسة البنزين تجعلها موجبة.",
              "على الطريق المستوي بسرعة ٩٠ km/h يثبت المؤشر: عجلة صفرية، مع أن السيارة ما زالت مسرعة!",
              "قرب مطب يضغط الأب الفرامل من ٢٠ m/s إلى السكون في ٥ ثوانٍ: a = −٤ m/s²، عجلة سالبة."]
          }
        },
        words: [
          ["Acceleration", "العجلة", "The change in velocity per unit time, a = Δv/Δt (m/s²).", "التغير في السرعة في وحدة الزمن، a = Δv/Δt (m/s²)."],
          ["Accelerated motion", "الحركة المعجلة", "Motion in which the velocity changes with time.", "حركة تتغير فيها السرعة بمرور الزمن."],
          ["Uniform acceleration", "العجلة المنتظمة", "Velocity changes by equal amounts in equal time intervals.", "تتغير السرعة بمقادير متساوية في أزمنة متساوية."],
          ["Positive acceleration", "العجلة الموجبة", "Velocity increases with time (ball rolling down an incline).", "تزداد السرعة بمرور الزمن (كرة تهبط مستوى مائلًا)."],
          ["Negative acceleration", "العجلة السالبة", "Velocity decreases with time (ball rolling up, braking).", "تقل السرعة بمرور الزمن (كرة تصعد، فرملة)."],
          ["Velocity–time graph", "منحنى السرعة–الزمن", "Its slope gives the acceleration.", "ميله يساوي العجلة."]
        ],
        lab: { parts: [{ type: "sec2phy_accel" }] },
        quiz: [
          Q(["A car's velocity is 5 m/s at t = 1 s and 10 m/s at t = 2 s. Its acceleration is...", "سرعة سيارة 5 m/s عند t = 1 s و10 m/s عند t = 2 s. عجلتها..."],
            [["5 m/s²", "5 m/s²"], ["10 m/s²", "10 m/s²"], ["15 m/s²", "15 m/s²"], ["0.2 m/s²", "0.2 m/s²"]],
            ["a = (10 − 5) ÷ (2 − 1) = 5 m/s².", "a = (10 − 5) ÷ (2 − 1) = 5 m/s²."],
            ["Hana's needle climbs 5 m/s in each second.", "مؤشر هنا يرتفع 5 m/s كل ثانية."]),
          Q(["Convert 36 km/h to m/s.", "حوّل 36 km/h إلى m/s."],
            [["10 m/s", "10 m/s"], ["36 m/s", "36 m/s"], ["129.6 m/s", "129.6 m/s"], ["3.6 m/s", "3.6 m/s"]],
            ["36 × 5/18 = 10 m/s.", "36 × 5/18 = 10 m/s."],
            ["Divide by 3.6: 36 ÷ 3.6 = 10.", "اقسم على 3.6: 36 ÷ 3.6 = 10."]),
          Q(["A car brakes from 20 m/s to rest in 5 s. Its acceleration is...", "سيارة تفرمل من 20 m/s حتى تتوقف في 5 s. عجلتها..."],
            [["−4 m/s²", "−4 m/s²"], ["4 m/s²", "4 m/s²"], ["−100 m/s²", "−100 m/s²"], ["0.25 m/s²", "0.25 m/s²"]],
            ["a = (0 − 20) ÷ 5 = −4 m/s²: negative because velocity decreases.", "a = (0 − 20) ÷ 5 = −4 m/s²، سالبة لأن السرعة تقل."],
            ["Dad's brake gives the same 4 m/s every second, but taken away.", "فرامل الأب تُنقص 4 m/s كل ثانية."]),
          Q(["A ball rolls UP a smooth inclined plane. Its acceleration is...", "كرة تصعد مستوى مائلًا أملس. عجلتها..."],
            [["negative", "سالبة"], ["positive", "موجبة"], ["zero", "صفر"], ["infinite", "لا نهائية"]],
            ["Its velocity decreases with time, so with motion taken as positive the acceleration is negative.", "سرعتها تقل بمرور الزمن، فإذا اعتبرنا اتجاه الحركة موجبًا تكون العجلة سالبة."],
            ["Like a bicycle slowing down on the Mokattam hill.", "مثل دراجة تبطئ وهي تصعد هضبة المقطم."]),
          Q(["If an object's acceleration is zero, then...", "إذا كانت عجلة جسم صفرًا فإن..."],
            [["its velocity is constant (it may be moving)", "سرعته ثابتة (وقد يكون متحركًا)"], ["it must be at rest", "يجب أن يكون ساكنًا"], ["its velocity is increasing", "سرعته تزداد"], ["its velocity is decreasing", "سرعته تقل"]],
            ["Zero acceleration means no change in velocity; a car cruising at 90 km/h has a = 0.", "العجلة الصفرية تعني عدم تغير السرعة؛ سيارة تسير بسرعة ثابتة ٩٠ km/h عجلتها صفر."],
            ["Hana's car on cruise is fast but not accelerating.", "سيارة هنا على السرعة الثابتة سريعة لكنها بلا عجلة."]),
          Q(["An object moves with uniform acceleration when its velocity...", "يتحرك الجسم بعجلة منتظمة عندما..."],
            [["changes by equal amounts in equal time intervals", "تتغير سرعته بمقادير متساوية في أزمنة متساوية"], ["covers equal distances in equal times", "يقطع مسافات متساوية في أزمنة متساوية"], ["increases by equal amounts in unequal times", "تزيد سرعته بمقادير متساوية في أزمنة غير متساوية"], ["is zero", "تكون سرعته صفرًا"]],
            ["Uniform acceleration = constant Δv/Δt; equal distances in equal times is uniform VELOCITY.", "العجلة المنتظمة = Δv/Δt ثابتة، أما المسافات المتساوية في أزمنة متساوية فهي سرعة منتظمة."],
            ["+5, +5, +5 m/s each second: a straight line on the v–t graph.", "‎+5 ثم +5 ثم +5 m/s كل ثانية: خط مستقيم في منحنى السرعة–الزمن."]),
          Q(["A car speeds up from 0 to 30 m/s in 10 s on a straight road. Its acceleration is...", "سيارة تزيد سرعتها من 0 إلى 30 m/s في 10 s على طريق مستقيم. عجلتها..."],
            [["3 m/s²", "3 m/s²"], ["300 m/s²", "300 m/s²"], ["0.33 m/s²", "0.33 m/s²"], ["30 m/s²", "30 m/s²"]],
            ["a = (30 − 0) ÷ 10 = 3 m/s².", "a = (30 − 0) ÷ 10 = 3 m/s²."],
            ["0.33 is time ÷ velocity: upside down.", "0.33 ناتجة من قسمة الزمن على السرعة: مقلوبة."]),
          Q(["When the acceleration is opposite to the direction of velocity, the object's velocity...", "عندما تكون العجلة في عكس اتجاه السرعة فإن سرعة الجسم..."],
            [["decreases", "تقل"], ["increases at a constant rate", "تزداد بمعدل ثابت"], ["remains constant", "تظل ثابتة"], ["increases at a non-constant rate", "تزداد بمعدل غير ثابت"]],
            ["Opposite signs of v and a mean slowing down (braking).", "اختلاف إشارتي السرعة والعجلة يعني تباطؤ الجسم (الفرملة)."],
            ["The brake pushes against the car's motion.", "الفرامل تعمل ضد اتجاه حركة السيارة."])
        ]
      },
      {
        id: "sec2phyu2l3", icon: "🛑", page: 39,
        title: { en: "Force, Newton's First Law and Momentum", ar: "القوة وقانون نيوتن الأول وكمية الحركة" },
        idea: {
          official: {
            en: ["Force is an external influence that changes, or tries to change, an object's state of motion or direction. It is measured with a spring balance in newtons (N).",
              "Newton's first law: an object stays at rest, or keeps moving with constant velocity in a straight line, unless a resultant force acts to change its state: " + eq("ΣF = 0 ⇒ a = 0") + ". Several forces can cancel so the resultant is zero.",
              "A pushed object stops because of friction, not because \"rest is natural\". A force is needed to start or stop motion, but no force is needed to keep a constant velocity.",
              "Inertia: the tendency of an object at rest to stay at rest and of a moving object to keep moving uniformly in a straight line, i.e. objects resist changes to their state. The first law is called the law of inertia.",
              "It is harder to stop a truck than a bicycle at the same velocity, and a fast car than a slow one: mass and velocity combine into momentum " + eq("P = m v") + ", a vector measured in kg·m/s. Example: " + eq("1500 kg × 20 m/s = 3 × 10⁴ kg·m/s") + "."],
            ar: ["القوة مؤثر خارجي يؤثر على الجسم فيغير أو يحاول أن يغير من حالته الحركية أو اتجاهه، وتقاس بالميزان الزنبركي ووحدتها النيوتن (N).",
              "قانون نيوتن الأول: الجسم الساكن يظل ساكنًا والجسم المتحرك يظل متحركًا بسرعة منتظمة في خط مستقيم ما لم تؤثر عليه قوة محصلة تغير من حالته: " + eq("ΣF = 0 ⇒ a = 0") + "، وقد تؤثر عدة قوى يلغي بعضها بعضًا فتكون المحصلة صفرًا.",
              "الجسم المدفوع يتوقف بسبب قوى الاحتكاك وليس لأن «السكون طبيعة المادة»؛ فالقوة لازمة لتحريك الجسم الساكن أو إيقاف المتحرك، ولا تلزم لاستمرار حركته بسرعة منتظمة.",
              "القصور الذاتي: ميل الجسم الساكن للبقاء ساكنًا والمتحرك للاستمرار في حركته المنتظمة في خط مستقيم، أي مقاومة الأجسام لتغيير حالتها؛ ولذلك يسمى القانون الأول قانون القصور الذاتي.",
              "إيقاف شاحنة أصعب من إيقاف دراجة لهما نفس السرعة، وإيقاف سيارة سريعة أصعب من بطيئة؛ فالكتلة والسرعة ترتبطان في كمية الحركة " + eq("P = m v") + "، وهي كمية متجهة وحدتها kg·m/s. مثال: " + eq("1500 kg × 20 m/s = 3 × 10⁴ kg·m/s") + "."]
          },
          story: {
            en: ["Ziad stands in a Cairo Metro carriage holding the rail loosely. The train starts suddenly.",
              "His body tries to stay where it was, so he leans backwards: inertia of rest.",
              "Later the train brakes at Sadat station and Ziad lurches forward: his body wants to keep moving, inertia of motion.",
              "On the platform a cleaner pushes a cart; it rolls and then stops. \"Friction stopped it,\" Ziad thinks, \"not some love of rest.\"",
              "A 10-tonne freight truck at 2 m/s has 20,000 kg·m/s of momentum, more than a 1000 kg car at 15 m/s (15,000 kg·m/s): harder to stop."],
            ar: ["زياد يقف في عربة مترو القاهرة ممسكًا بالعمود برفق، ثم يتحرك القطار فجأة.",
              "يحاول جسمه البقاء في مكانه فيميل للخلف: قصور ذاتي للسكون.",
              "وعندما يفرمل القطار في محطة السادات يندفع زياد للأمام: جسمه يريد الاستمرار في الحركة، قصور ذاتي للحركة.",
              "على الرصيف عامل يدفع عربة فتسير ثم تتوقف، فيفكر زياد: «الاحتكاك أوقفها، لا حب السكون».",
              "شاحنة كتلتها ١٠ أطنان بسرعة ٢ m/s لها كمية حركة ٢٠٬٠٠٠ kg·m/s، أكبر من سيارة ١٠٠٠ كجم بسرعة ١٥ m/s (١٥٬٠٠٠ kg·m/s)، فإيقافها أصعب."]
          }
        },
        words: [
          ["Force", "القوة", "An external influence that changes or tries to change an object's motion or direction (N).", "مؤثر خارجي يغير أو يحاول أن يغير الحالة الحركية للجسم أو اتجاهه (N)."],
          ["Resultant force", "القوة المحصلة", "The single force equivalent to all forces acting on the object (ΣF).", "القوة الواحدة المكافئة لكل القوى المؤثرة على الجسم (ΣF)."],
          ["Newton's first law", "قانون نيوتن الأول", "With no resultant force an object stays at rest or moves with constant velocity in a straight line.", "في غياب القوة المحصلة يبقى الجسم ساكنًا أو متحركًا بسرعة منتظمة في خط مستقيم."],
          ["Inertia", "القصور الذاتي", "An object's resistance to changing its state of rest or uniform motion.", "مقاومة الجسم لتغيير حالته من سكون أو حركة منتظمة."],
          ["Momentum", "كمية الحركة", "Mass × velocity, P = mv, a vector in kg·m/s.", "الكتلة × السرعة، P = mv، كمية متجهة وحدتها kg·m/s."],
          ["Friction", "الاحتكاك", "A force that resists sliding and slows moving objects down.", "قوة تقاوم الانزلاق وتبطئ الأجسام المتحركة."]
        ],
        lab: { parts: [{ type: "sec2phy_inertia" }] },
        quiz: [
          Q(["A bicycle moves at constant velocity in a straight line towards the east. The resultant force on it is...", "دراجة تتحرك بسرعة منتظمة في خط مستقيم نحو الشرق. القوة المحصلة عليها..."],
            [["zero", "صفر"], ["towards the east", "نحو الشرق"], ["towards the west", "نحو الغرب"], ["negative and increasing", "سالبة ومتزايدة"]],
            ["Constant velocity means a = 0, so by the first law ΣF = 0 (the pedalling force balances friction).", "السرعة المنتظمة تعني a = 0، فحسب القانون الأول ΣF = 0 (قوة البدال تتزن مع الاحتكاك)."],
            ["Ziad pedals just enough to cancel friction: the forces cancel.", "زياد يبدّل بالقدر الذي يلغي الاحتكاك فقط: القوى تلغي بعضها."]),
          Q(["A train suddenly moves forward. A small bag on the floor under a seat moves...", "قطار يتحرك فجأة للأمام. حقيبة صغيرة على الأرض تحت المقعد تتحرك..."],
            [["backwards relative to the train", "للخلف بالنسبة للقطار"], ["forwards relative to the train", "للأمام بالنسبة للقطار"], ["upwards", "لأعلى"], ["it does not move relative to the train", "لا تتحرك بالنسبة للقطار"]],
            ["By inertia the bag tends to stay at rest while the floor moves forward under it.", "بسبب القصور الذاتي تميل الحقيبة للبقاء ساكنة بينما تتحرك الأرضية للأمام تحتها."],
            ["Exactly like Ziad leaning back when the metro starts.", "تمامًا مثل ميل زياد للخلف عند تحرك المترو."]),
          Q(["The momentum of a 1500 kg car moving at 20 m/s is...", "كمية حركة سيارة كتلتها 1500 kg تتحرك بسرعة 20 m/s..."],
            [["3 × 10⁴ kg·m/s", "3 × 10⁴ kg·m/s"], ["75 kg·m/s", "75 kg·m/s"], ["3 × 10³ kg·m/s", "3 × 10³ kg·m/s"], ["1.5 × 10⁴ kg·m/s", "1.5 × 10⁴ kg·m/s"]],
            ["P = mv = 1500 × 20 = 30,000 = 3 × 10⁴ kg·m/s.", "P = mv = 1500 × 20 = 30,000 = 3 × 10⁴ kg·m/s."],
            ["75 comes from dividing instead of multiplying.", "75 تنتج من القسمة بدلًا من الضرب."]),
          Q(["Which is harder to stop: a 10,000 kg truck at 2 m/s or a 1000 kg car at 15 m/s?", "أيهما أصعب في الإيقاف: شاحنة 10,000 kg بسرعة 2 m/s أم سيارة 1000 kg بسرعة 15 m/s؟"],
            [["The truck (20,000 kg·m/s)", "الشاحنة (20,000 kg·m/s)"], ["The car (15,000 kg·m/s)", "السيارة (15,000 kg·m/s)"], ["They are equally hard", "متساويان"], ["The faster one, always", "الأسرع دائمًا"]],
            ["Compare momentum, not speed alone: 10,000 × 2 = 20,000 is greater than 1000 × 15 = 15,000.", "نقارن كمية الحركة لا السرعة وحدها: 10,000 × 2 = 20,000 أكبر من 1000 × 15 = 15,000."],
            ["The slow heavy truck carries more \"motion\" than the fast light car.", "الشاحنة البطيئة الثقيلة تحمل «حركة» أكثر من السيارة السريعة الخفيفة."]),
          Q(["Inertia is...", "القصور الذاتي هو..."],
            [["the tendency of an object to resist changes to its state of rest or uniform motion", "ميل الجسم لمقاومة تغيير حالته من سكون أو حركة منتظمة"], ["the force that stops moving objects", "القوة التي توقف الأجسام المتحركة"], ["the product of mass and velocity", "حاصل ضرب الكتلة في السرعة"], ["the change of velocity per second", "التغير في السرعة كل ثانية"]],
            ["Inertia is a property of matter, not a force; mass × velocity is momentum; Δv/Δt is acceleration.", "القصور الذاتي خاصية للمادة وليس قوة، والكتلة × السرعة كمية الحركة، وΔv/Δt العجلة."],
            ["It is the \"laziness\" of objects to change what they are doing.", "إنه «كسل» الأجسام عن تغيير ما تفعله."]),
          Q(["The unit of momentum is...", "وحدة قياس كمية الحركة..."],
            [["kg·m/s", "kg·m/s"], ["kg·m/s²", "kg·m/s²"], ["N/m²", "N/m²"], ["kg/m³", "kg/m³"]],
            ["P = mv: kg × m/s = kg·m/s. kg·m/s² is the newton.", "P = mv: kg × m/s = kg·m/s، أما kg·m/s² فهي النيوتن."],
            ["Mass unit times velocity unit, nothing more.", "وحدة الكتلة × وحدة السرعة، لا أكثر."]),
          Q(["A box pushed along the floor slides and then stops because...", "صندوق يُدفع على الأرض فينزلق ثم يتوقف لأن..."],
            [["friction acts as a resultant force opposite its motion", "الاحتكاك يعمل كقوة محصلة عكس حركته"], ["the natural state of matter is rest", "السكون طبيعة المادة"], ["its inertia becomes zero", "قصوره الذاتي يصبح صفرًا"], ["its mass decreases", "كتلته تقل"]],
            ["Without friction it would keep moving forever (first law); friction is the resultant force that slows it.", "بدون احتكاك يستمر في الحركة (القانون الأول)، والاحتكاك هو القوة المحصلة التي تبطئه."],
            ["On ice in a skating rink the box would glide much farther.", "على جليد حلبة التزلج كان الصندوق سينزلق مسافة أكبر بكثير."])
        ]
      },
      {
        id: "sec2phyu2l4", icon: "🧨", page: 41,
        title: { en: "Newton's Second and Third Laws", ar: "قانونا نيوتن الثاني والثالث" },
        idea: {
          official: {
            en: ["Newton's second law: the resultant force on an object equals the time rate of change of its momentum: " + eq("F = Δ(mv)/Δt = m(v₂ − v₁)/Δt = m a") + ".",
              "So acceleration is directly proportional to the force and inversely proportional to the mass: " + eq("a = F / m") + ". The same force gives a 100 kg body twice the acceleration of a 200 kg body.",
              "The newton is the force that gives a 1 kg mass an acceleration of 1 m/s²: " + eq("1 N = 1 kg·m/s²") + ". Example: " + eq("200 N ÷ 100 kg = 2 m/s²") + ".",
              "From " + eq("F = m Δv / Δt") + ": the longer the collision time, the smaller the force. Airbags, a pile of straw, water or a cushion under an egg increase Δt and reduce the force; a heavier truck or a greater height increases it.",
              "Newton's third law: for every action there is a reaction equal in magnitude and opposite in direction, " + eq("F₁ = −F₂") + ". They appear and vanish together, have the same nature, and act on two different bodies, so they do not cancel. Balloons, rifle recoil and rockets work this way."],
            ar: ["قانون نيوتن الثاني: القوة المحصلة المؤثرة على جسم تساوي المعدل الزمني للتغير في كمية حركته: " + eq("F = Δ(mv)/Δt = m(v₂ − v₁)/Δt = m a") + ".",
              "أي أن العجلة تتناسب طرديًا مع القوة وعكسيًا مع الكتلة: " + eq("a = F / m") + "، فنفس القوة تكسب جسمًا كتلته ١٠٠ كجم ضعف عجلة جسم كتلته ٢٠٠ كجم.",
              "النيوتن هو القوة التي إذا أثرت على جسم كتلته ١ كجم أكسبته عجلة ١ m/s²: " + eq("1 N = 1 kg·m/s²") + ". مثال: " + eq("200 N ÷ 100 kg = 2 m/s²") + ".",
              "من " + eq("F = m Δv / Δt") + ": كلما زاد زمن التصادم قلت القوة؛ فالوسائد الهوائية وكومة القش والماء والوسادة تحت البيضة تزيد Δt فتقل القوة، بينما تزيدها كتلة الشاحنة الأكبر أو الارتفاع الأكبر.",
              "قانون نيوتن الثالث: لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه " + eq("F₁ = −F₂") + "، يظهران ويختفيان معًا، ومن نفس النوع، ويؤثران على جسمين مختلفين فلا تكون محصلتهما صفرًا. ومن أمثلته البالون وارتداد البندقية والصاروخ."]
          },
          story: {
            en: ["Farida's school team builds a water rocket in the courtyard in Mansoura.",
              "When they pump air and release it, water shoots down and the rocket shoots up: action and reaction on two different bodies.",
              "Their teacher pushes two carts with the same force: the empty one (smaller mass) gets three times the acceleration of the loaded one.",
              "For the egg-drop contest Farida lines the box with sponge. The egg's momentum still drops to zero, but over a longer time, so the force is small.",
              "\"That is why Baba's car has airbags,\" she says. \"Same change in momentum, longer time, smaller force.\""],
            ar: ["فريق فريدة المدرسي يصنع صاروخًا مائيًا في فناء المدرسة بالمنصورة.",
              "عند ضخ الهواء وإطلاقه يندفع الماء لأسفل والصاروخ لأعلى: فعل ورد فعل على جسمين مختلفين.",
              "يدفع المعلم عربتين بنفس القوة، فتكتسب العربة الفارغة (الأقل كتلة) ثلاثة أضعاف عجلة العربة المحمّلة.",
              "في مسابقة إسقاط البيض تبطّن فريدة الصندوق بالإسفنج؛ كمية حركة البيضة تصل للصفر لكن في زمن أطول فتكون القوة صغيرة.",
              "تقول فريدة: «ولهذا في سيارة بابا وسائد هوائية: نفس التغير في كمية الحركة، زمن أطول، قوة أصغر»."]
          }
        },
        words: [
          ["Newton's second law", "قانون نيوتن الثاني", "The resultant force equals the rate of change of momentum: F = ma.", "القوة المحصلة تساوي المعدل الزمني للتغير في كمية الحركة: F = ma."],
          ["Newton (N)", "النيوتن", "The force giving 1 kg an acceleration of 1 m/s².", "القوة التي تكسب جسمًا كتلته ١ كجم عجلة ١ m/s²."],
          ["Impact time", "زمن التصادم", "A longer time of momentum change means a smaller force.", "كلما طال زمن تغير كمية الحركة قلت القوة."],
          ["Newton's third law", "قانون نيوتن الثالث", "For every action there is an equal and opposite reaction.", "لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه."],
          ["Action and reaction", "الفعل ورد الفعل", "A pair of equal opposite forces acting on two different bodies.", "زوج من القوى المتساوية المتضادة يؤثر على جسمين مختلفين."],
          ["Rocket propulsion", "دفع الصاروخ", "Hot gases are pushed down; the gases push the rocket up.", "تُدفع الغازات الساخنة لأسفل فتدفع الصاروخ لأعلى."]
        ],
        lab: { parts: [{ type: "sec2phy_newton2" }, {
          type: "sort",
          prompt: ["Tap a situation, then tap the law of motion that explains it.", "اضغط على موقف، ثم اضغط على قانون الحركة الذي يفسره."],
          bins: [["1", "🛑", "First law (inertia)", "القانون الأول (القصور)"], ["2", "📈", "Second law (F = ma)", "القانون الثاني (F = ma)"], ["3", "🔁", "Third law (action–reaction)", "القانون الثالث (الفعل ورد الفعل)"]],
          items: [[["Passengers lean forward when a bus brakes", "ميل الركاب للأمام عند فرملة الأتوبيس"], "1"], [["A seat belt holds you in a sudden stop", "حزام الأمان يثبتك عند التوقف المفاجئ"], "1"],
            [["An airbag reduces the force on the driver", "الوسادة الهوائية تقلل القوة على السائق"], "2"], [["An empty cart accelerates more than a loaded one", "العربة الفارغة تتسارع أكثر من المحمّلة"], "2"],
            [["A rifle recoils when it fires", "ارتداد البندقية عند الإطلاق"], "3"], [["A rocket rises as gases rush down", "صعود الصاروخ مع اندفاع الغازات لأسفل"], "3"], [["Pushing the wall moves your rolling chair back", "دفع الحائط يحرك كرسيك المتحرك للخلف"], "3"]]
        }] },
        quiz: [
          Q(["A resultant force of 200 N acts on a 100 kg body. Its acceleration is...", "قوة محصلة 200 N تؤثر على جسم كتلته 100 kg. عجلته..."],
            [["2 m/s²", "2 m/s²"], ["0.5 m/s²", "0.5 m/s²"], ["20,000 m/s²", "20,000 m/s²"], ["300 m/s²", "300 m/s²"]],
            ["a = F/m = 200 ÷ 100 = 2 m/s².", "a = F/m = 200 ÷ 100 = 2 m/s²."],
            ["Each of the 100 kilograms gets 2 newtons: 2 m/s².", "كل كيلوجرام من المئة يحصل على ٢ نيوتن: ٢ m/s²."]),
          Q(["The same force acts on a 100 kg body and a 200 kg body. The 100 kg body's acceleration is...", "نفس القوة تؤثر على جسم 100 kg وجسم 200 kg. عجلة الجسم 100 kg..."],
            [["twice that of the 200 kg body", "ضعف عجلة الجسم 200 kg"], ["half that of the 200 kg body", "نصف عجلة الجسم 200 kg"], ["equal to it", "مساوية لها"], ["four times it", "أربعة أضعافها"]],
            ["At constant force a ∝ 1/m: halving the mass doubles the acceleration (Figure 5 in the book).", "عند ثبوت القوة a ∝ 1/m، فنصف الكتلة يعطي ضعف العجلة (الشكل ٥ في الكتاب)."],
            ["The empty cart in Farida's courtyard races ahead.", "العربة الفارغة في فناء فريدة تنطلق أسرع."]),
          Q(["A force gives a wooden cube an acceleration a. The same force gives a second cube 3a. The second cube's mass is...", "قوة تكسب مكعبًا خشبيًا عجلة a، ونفس القوة تكسب مكعبًا آخر عجلة 3a. كتلة المكعب الثاني..."],
            [["one third of the first", "ثلث كتلة الأول"], ["three times the first", "ثلاثة أضعاف الأول"], ["equal to the first", "مساوية للأول"], ["nine times the first", "تسعة أضعاف الأول"]],
            ["m = F/a; with 3a the mass is F/(3a) = m/3.", "m = F/a، ومع 3a تكون الكتلة F/(3a) = m/3."],
            ["Three times the acceleration means three times lighter.", "ثلاثة أضعاف العجلة تعني كتلة أخف ثلاث مرات."]),
          Q(["A 1000 kg car moving at 20 m/s hits a wall and stops in 0.1 s. The average force is...", "سيارة كتلتها 1000 kg تتحرك بسرعة 20 m/s تصطدم بحائط فتتوقف في 0.1 s. متوسط القوة..."],
            [["2 × 10⁵ N", "2 × 10⁵ N"], ["2 × 10⁴ N", "2 × 10⁴ N"], ["2 × 10³ N", "2 × 10³ N"], ["200 N", "200 N"]],
            ["F = mΔv/Δt = 1000 × 20 ÷ 0.1 = 200,000 N. Into straw over 1 s it would be only 2 × 10⁴ N.", "F = mΔv/Δt = 1000 × 20 ÷ 0.1 = 200,000 N، وعلى كومة قش في 1 s تكون 2 × 10⁴ N فقط."],
            ["A wall stops the car in a flash; that is why it is so destructive.", "الحائط يوقف السيارة في لحظة؛ لذا يكون التصادم مدمرًا."]),
          Q(["An airbag protects the driver in a collision because it...", "تحمي الوسادة الهوائية السائق عند التصادم لأنها..."],
            [["increases the time of the momentum change, reducing the force", "تزيد زمن التغير في كمية الحركة فتقل القوة"], ["reduces the driver's mass", "تقلل كتلة السائق"], ["cancels the driver's momentum change", "تلغي التغير في كمية حركة السائق"], ["increases the driver's velocity", "تزيد سرعة السائق"]],
            ["Δ(mv) is the same either way; a longer Δt gives a smaller F = Δ(mv)/Δt.", "Δ(mv) ثابتة في الحالتين، وزيادة Δt تجعل F = Δ(mv)/Δt أصغر."],
            ["Like Farida's sponge around the egg.", "مثل إسفنج فريدة حول البيضة."]),
          Q(["A large truck collides with a small car. The collision force is...", "شاحنة كبيرة تصطدم بسيارة صغيرة. قوة التصادم..."],
            [["equal on both, in opposite directions", "متساوية على الاثنين وفي اتجاهين متضادين"], ["greater on the small car", "أكبر على السيارة الصغيرة"], ["greater on the truck", "أكبر على الشاحنة"], ["zero on the truck", "صفر على الشاحنة"]],
            ["Third law: action = reaction in magnitude. The small car is damaged more because its smaller mass gets a larger acceleration.", "القانون الثالث: الفعل = رد الفعل مقدارًا، والسيارة الصغيرة تتضرر أكثر لأن كتلتها الأصغر تكتسب عجلة أكبر."],
            ["Equal forces, unequal masses, unequal results.", "قوى متساوية وكتل مختلفة ونتائج مختلفة."]),
          Q(["Why don't action and reaction cancel each other?", "لماذا لا يلغي الفعل ورد الفعل أحدهما الآخر؟"],
            [["They act on two different bodies", "لأنهما يؤثران على جسمين مختلفين"], ["They are not equal", "لأنهما غير متساويين"], ["They act in the same direction", "لأنهما في نفس الاتجاه"], ["One of them is always zero", "لأن أحدهما صفر دائمًا"]],
            ["Forces cancel only when they act on the same body; action and reaction never do.", "تلغي القوى بعضها فقط إذا أثرت على نفس الجسم، والفعل ورد الفعل لا يؤثران على جسم واحد أبدًا."],
            ["The water is pushed down and the rocket is pushed up: two different bodies.", "الماء يُدفع لأسفل والصاروخ يُدفع لأعلى: جسمان مختلفان."]),
          Q(["Newton's first law can be seen as a special case of the second law because...", "يمكن اعتبار القانون الأول حالة خاصة من القانون الثاني لأن..."],
            [["if F = 0 then a = F/m = 0, so velocity is constant", "إذا كانت F = 0 فإن a = F/m = 0 فتثبت السرعة"], ["the first law has no mass in it", "القانون الأول لا يحتوي على الكتلة"], ["both laws need two bodies", "القانونان يحتاجان جسمين"], ["the second law only works at rest", "القانون الثاني يعمل في السكون فقط"]],
            ["Put ΣF = 0 into F = ma: a = 0, the statement of the first law.", "بالتعويض ΣF = 0 في F = ma نحصل على a = 0، وهذا نص القانون الأول."],
            ["No push, no change: the first law hides inside F = ma.", "لا دفع لا تغيير: القانون الأول مختبئ داخل F = ma."])
        ]
      }
    ]
  });
})();

/* ---------- Secondary 2 Physics data (part 2): Unit 3 Properties of Matter, Unit 4 Heat ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var G = E.SCIG.sec2phy;
  var Q = function (q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; };

  /* ================= UNIT 3: PROPERTIES OF MATTER ================= */
  G.units.push({
    id: "sec2phyu3", num: 3, icon: "💧", color: "teal",
    title: { en: "Properties of Matter", ar: "خواص المادة" },
    lessons: [
      {
        id: "sec2phyu3l1", icon: "⚖️", page: 49,
        title: { en: "Fluids, Density and Relative Density", ar: "الموائع والكثافة والكثافة النسبية" },
        idea: {
          official: {
            en: ["Fluids are materials that can flow: liquids and gases. Gases are easily compressed and fill any space; liquids resist compression almost entirely and have a definite volume.",
              "Density is the mass per unit volume: " + eq("ρ = m / V") + " (kg/m³). Water 1000, glycerin 1260, mercury 13,600, aluminium 2700, iron 7900, gold 19,300, air 1.29 kg/m³. It differs because of the atomic/molecular mass and the spaces between particles.",
              "Relative density = density of the material ÷ density of water at 4°C (1000 kg/m³) = mass of a volume of the material ÷ mass of the same volume of water. It has no unit: gold " + eq("19,300 ÷ 1000 = 19.3") + ".",
              "Car battery: as it discharges, sulfuric acid reacts with the lead plates forming lead sulfate, so the electrolyte's density decreases; on recharging it increases. Measuring density shows the charge.",
              "Medicine: normal blood density is 1040–1060 kg/m³ (higher means more blood cells; lower may suggest anaemia); urine is about 1020 kg/m³ and rises in some diseases. Gold alloys (18 karat 15.45 g/cm³) are less dense than pure 24-karat gold (19.32 g/cm³)."],
            ar: ["الموائع مواد قابلة للانسياب: السوائل والغازات. الغازات سهلة الانضغاط وتشغل أي حيز متاح، والسوائل تقاوم الانضغاط تقريبًا تمامًا ولها حجم محدد.",
              "الكثافة هي كتلة وحدة الحجوم: " + eq("ρ = m / V") + " (kg/m³). الماء 1000 والجليسرين 1260 والزئبق 13,600 والألومنيوم 2700 والحديد 7900 والذهب 19,300 والهواء 1.29 kg/m³، وتختلف بسبب اختلاف الكتلة الذرية أو الجزيئية والمسافات البينية.",
              "الكثافة النسبية = كثافة المادة ÷ كثافة الماء عند ٤°س (1000 kg/m³) = كتلة حجم من المادة ÷ كتلة نفس الحجم من الماء، وليس لها وحدة: الذهب " + eq("19,300 ÷ 1000 = 19.3") + ".",
              "بطارية السيارة: عند تفريغها يتفاعل حمض الكبريتيك مع ألواح الرصاص مكونًا كبريتات الرصاص فتقل كثافة المحلول، وعند الشحن تزداد؛ فقياس الكثافة يحدد حالة الشحن.",
              "في الطب: كثافة الدم الطبيعية 1040–1060 kg/m³ (زيادتها تعني زيادة الخلايا، ونقصها قد يدل على الأنيميا)، وكثافة البول نحو 1020 kg/m³ وتزيد في بعض الأمراض. وسبائك الذهب (عيار ١٨: 15.45 g/cm³) أقل كثافة من الذهب الخالص عيار ٢٤ (19.32 g/cm³)."]
          },
          story: {
            en: ["Mariam goes with her mother to a goldsmith in Assiut to sell an old bracelet.",
              "The goldsmith weighs it in air and in water and calculates its density: 15.4 g/cm³. \"18 karat,\" he says, not 24.",
              "Mariam thinks: pure gold is 19.32 g/cm³; mixing in copper, which is lighter per cm³, lowers the density.",
              "On the way home, the mechanic dips a hydrometer into Baba's car battery: \"Low density, the battery is weak; the acid was used up.\"",
              "That evening her aunt's lab report shows blood density 1035 kg/m³, just below 1040: the doctor asks about anaemia."],
            ar: ["مريم تذهب مع أمها إلى صائغ في أسيوط لبيع سوار قديم.",
              "يزن الصائغ السوار في الهواء وفي الماء ويحسب كثافته: 15.4 g/cm³، ويقول: «عيار ١٨ وليس ٢٤».",
              "تفكر مريم: الذهب الخالص 19.32 g/cm³، وإضافة النحاس الأقل كثافة تقلل كثافة السبيكة.",
              "في طريق العودة يغمس الميكانيكي الهيدروميتر في بطارية سيارة بابا: «الكثافة منخفضة، البطارية ضعيفة؛ استُهلك الحمض».",
              "وفي المساء يُظهر تحليل خالتها أن كثافة الدم 1035 kg/m³، أقل قليلًا من 1040، فيسأل الطبيب عن الأنيميا."]
          }
        },
        words: [
          ["Fluid", "المائع", "Any substance that can flow and has no fixed shape of its own: liquids and gases.", "أي مادة قابلة للانسياب وليس لها شكل ثابت: السوائل والغازات."],
          ["Density", "الكثافة", "Mass of a unit volume, ρ = m/V, in kg/m³.", "كتلة وحدة الحجوم، ρ = m/V، بوحدة kg/m³."],
          ["Relative density", "الكثافة النسبية", "Density of a material ÷ density of water at 4°C; it has no unit.", "كثافة المادة ÷ كثافة الماء عند ٤°س، وليس لها وحدة."],
          ["Electrolyte", "المحلول الإلكتروليتي", "Dilute sulfuric acid in a car battery; its density shows the charge.", "حمض الكبريتيك المخفف في بطارية السيارة، وكثافته تدل على حالة الشحن."],
          ["Blood density", "كثافة الدم", "Normally 1040–1060 kg/m³; low values may indicate anaemia.", "طبيعيًا 1040–1060 kg/m³، وانخفاضها قد يدل على الأنيميا."],
          ["Karat", "العيار", "Purity of gold; 24-karat is pure (19.32 g/cm³), alloys are less dense.", "درجة نقاء الذهب؛ عيار ٢٤ خالص (19.32 g/cm³) والسبائك أقل كثافة."]
        ],
        lab: { parts: [{ type: "sec2phy_density" }] },
        quiz: [
          Q(["A metal block has a mass of 540 g and a volume of 200 cm³. Its relative density is...", "قطعة معدن كتلتها 540 g وحجمها 200 cm³. كثافتها النسبية..."],
            [["2.7", "2.7"], ["2700", "2700"], ["0.37", "0.37"], ["2.7 kg/m³", "2.7 kg/m³"]],
            ["ρ = 540 ÷ 200 = 2.7 g/cm³ = 2700 kg/m³; relative density = 2700 ÷ 1000 = 2.7 (no unit): aluminium.", "ρ = 540 ÷ 200 = 2.7 g/cm³ = 2700 kg/m³، والكثافة النسبية = 2700 ÷ 1000 = 2.7 (بلا وحدة): ألومنيوم."],
            ["A ratio of two densities cancels the units, like the goldsmith's comparison with water.", "نسبة بين كثافتين تلغي الوحدات، مثل مقارنة الصائغ بالماء."]),
          Q(["The relative density of mercury (13,600 kg/m³) is...", "الكثافة النسبية للزئبق (13,600 kg/m³)..."],
            [["13.6", "13.6"], ["13,600", "13,600"], ["1.36", "1.36"], ["0.0736", "0.0736"]],
            ["13,600 ÷ 1000 = 13.6: a volume of mercury is 13.6 times as heavy as the same volume of water.", "13,600 ÷ 1000 = 13.6: أي حجم من الزئبق أثقل 13.6 مرة من نفس الحجم من الماء."],
            ["A small bottle of mercury feels shockingly heavy in Mariam's hand.", "زجاجة زئبق صغيرة تبدو ثقيلة جدًا في يد مريم."]),
          Q(["The unit of relative density is...", "وحدة قياس الكثافة النسبية..."],
            [["it has no unit", "ليس لها وحدة"], ["kg/m³", "kg/m³"], ["g/cm³", "g/cm³"], ["N/m²", "N/m²"]],
            ["It is a ratio between two quantities of the same kind, so the units cancel.", "هي نسبة بين كميتين من نفس النوع فتلغي الوحدات."],
            ["\"How many times heavier than water?\" is answered with just a number.", "سؤال «كم مرة أثقل من الماء؟» إجابته عدد فقط."]),
          Q(["As a car battery discharges, the density of its electrolyte...", "عند تفريغ بطارية السيارة فإن كثافة المحلول الإلكتروليتي..."],
            [["decreases", "تقل"], ["increases", "تزداد"], ["stays constant", "تظل ثابتة"], ["becomes zero", "تصبح صفرًا"]],
            ["Sulfuric acid is consumed by the lead plates forming lead sulfate, so the solution becomes less dense.", "يُستهلك حمض الكبريتيك بتفاعله مع ألواح الرصاص مكونًا كبريتات الرصاص فتقل كثافة المحلول."],
            ["The mechanic's hydrometer sank deeper: a weak battery.", "غاص هيدروميتر الميكانيكي أكثر: بطارية ضعيفة."]),
          Q(["A blood density lower than 1040 kg/m³ may indicate...", "انخفاض كثافة الدم عن 1040 kg/m³ قد يدل على..."],
            [["anaemia (fewer blood cells)", "الأنيميا (نقص خلايا الدم)"], ["more blood cells than normal", "زيادة خلايا الدم"], ["a fully charged battery", "بطارية مشحونة"], ["high urine density", "زيادة كثافة البول"]],
            ["Normal blood density is 1040–1060 kg/m³; lower means a lower concentration of blood cells.", "كثافة الدم الطبيعية 1040–1060 kg/m³، وانخفاضها يعني تركيزًا أقل لخلايا الدم."],
            ["The aunt's 1035 reading made the doctor think of anaemia.", "قراءة الخالة 1035 جعلت الطبيب يفكر في الأنيميا."]),
          Q(["What is the mass of 2 m³ of iron (ρ = 7900 kg/m³)?", "ما كتلة 2 m³ من الحديد (ρ = 7900 kg/m³)؟"],
            [["15,800 kg", "15,800 kg"], ["3950 kg", "3950 kg"], ["7900 kg", "7900 kg"], ["0.00025 kg", "0.00025 kg"]],
            ["m = ρV = 7900 × 2 = 15,800 kg.", "m = ρV = 7900 × 2 = 15,800 kg."],
            ["Two cubic metres hold two lots of 7900 kg.", "مترين مكعبين يحملان ضعف 7900 kg."]),
          Q(["Why is 18-karat gold less dense than 24-karat gold?", "لماذا كثافة الذهب عيار ١٨ أقل من عيار ٢٤؟"],
            [["It is an alloy with less dense metals such as copper", "لأنه سبيكة مع فلزات أقل كثافة مثل النحاس"], ["Its atoms are heavier", "لأن ذراته أثقل"], ["It contains more gold", "لأنه يحتوي ذهبًا أكثر"], ["Density does not depend on the material", "لأن الكثافة لا تعتمد على نوع المادة"]],
            ["24 karat is pure gold (19.32 g/cm³); mixing in lighter metals lowers the density (18 karat about 15.45 g/cm³).", "عيار ٢٤ ذهب خالص (19.32 g/cm³)، وخلطه بفلزات أخف يقلل الكثافة (عيار ١٨ نحو 15.45 g/cm³)."],
            ["The goldsmith reads the karat from the density.", "الصائغ يعرف العيار من الكثافة."])
        ]
      },
      {
        id: "sec2phyu3l2", icon: "🚰", page: 52,
        title: { en: "Liquid Flow and the Continuity Equation", ar: "انسياب السوائل ومعادلة الاستمرارية" },
        idea: {
          official: {
            en: ["Laminar (streamline) flow: adjacent layers slide smoothly past each other; each part follows a streamline. Streamlines never intersect, the tangent gives the velocity direction, and closer streamlines mean faster flow.",
              "Turbulent flow: above a certain speed, small circular vortices appear (also in smoke and gases moving from high to low pressure).",
              "Steady flow in a tube: the liquid fills the tube, the amount entering equals the amount leaving in the same time, and the velocity at each point does not change with time.",
              "Volume flow rate " + eq("Q_v = A v") + " (m³/s); mass flow rate " + eq("Q_m = ρ A v") + " (kg/s). By conservation of mass: " + eq("A₁ v₁ = A₂ v₂") + ", the continuity equation: velocity is inversely proportional to the cross-sectional area.",
              "Book example: a 2 cm pipe carries water at 0.1 m/s and narrows to 1 cm: " + eq("v₂ = v₁ (r₁/r₂)² = 0.1 × 4 = 0.4 m/s") + "; " + eq("Q_v = π (0.01)² × 0.1 = 3.14 × 10⁻⁵ m³/s") + ", so 1.884 kg of water passes each minute. Bernoulli: faster air over a wing means lower pressure, giving lift."],
            ar: ["الانسياب الهادئ (الطبقي): تنزلق الطبقات المتجاورة بنعومة، ويتبع كل جزء خط انسياب. خطوط الانسياب لا تتقاطع، والمماس عند أي نقطة يحدد اتجاه السرعة، وتقاربها يعني سرعة أكبر.",
              "الانسياب المضطرب: عندما تتجاوز السرعة حدًا معينًا تظهر دوامات دائرية صغيرة (ويحدث ذلك في الدخان والغازات المنتقلة من ضغط مرتفع إلى منخفض).",
              "الانسياب المستقر في أنبوبة: يملأ السائل الأنبوبة، وكمية السائل الداخلة تساوي الخارجة في نفس الزمن، وسرعة السائل عند أي نقطة لا تتغير مع الزمن.",
              "معدل الانسياب الحجمي " + eq("Q_v = A v") + " (m³/s)، ومعدل الانسياب الكتلي " + eq("Q_m = ρ A v") + " (kg/s)، ومن قانون بقاء الكتلة: " + eq("A₁ v₁ = A₂ v₂") + " وهي معادلة الاستمرارية: السرعة تتناسب عكسيًا مع مساحة المقطع.",
              "مثال الكتاب: أنبوبة قطرها 2 cm يسري فيها الماء بسرعة 0.1 m/s ثم يصبح قطرها 1 cm: " + eq("v₂ = v₁ (r₁/r₂)² = 0.1 × 4 = 0.4 m/s") + "، و" + eq("Q_v = π (0.01)² × 0.1 = 3.14 × 10⁻⁵ m³/s") + " أي 1.884 kg من الماء كل دقيقة. ومبدأ برنولي: الهواء الأسرع فوق الجناح ضغطه أقل فتنشأ قوة رفع."]
          },
          story: {
            en: ["Adham is watering his grandmother's garden in Fayoum with a hose.",
              "The water creeps out slowly. He presses his thumb over the end: the opening gets smaller and the water shoots across the garden.",
              "\"Same water per second has to pass a smaller hole, so it must go faster,\" he says: A₁v₁ = A₂v₂.",
              "When he opens the tap fully, the jet breaks into swirls and spray: the flow has become turbulent.",
              "His doctor uncle adds: blood in the wide aorta moves at 0.33 m/s but spreads into many vessels whose total area is bigger, so it slows down to let oxygen pass into the tissues."],
            ar: ["أدهم يروي حديقة جدته في الفيوم بخرطوم.",
              "يخرج الماء ببطء، فيضع إبهامه على فوهة الخرطوم فتصغر الفتحة ويندفع الماء عبر الحديقة.",
              "يقول أدهم: «نفس كمية الماء في الثانية يجب أن تمر من فتحة أصغر، فلا بد أن تسرع»: A₁v₁ = A₂v₂.",
              "وعندما يفتح الصنبور كله يتكسر التيار إلى دوامات ورذاذ: أصبح الانسياب مضطربًا.",
              "ويضيف خاله الطبيب: الدم في الأورطى الواسع يسير بسرعة 0.33 m/s ثم يتوزع على أوعية كثيرة مجموع مساحاتها أكبر فيبطئ ليسمح بتبادل الأكسجين في الأنسجة."]
          }
        },
        words: [
          ["Laminar flow", "الانسياب الهادئ", "Adjacent liquid layers slide smoothly past each other along streamlines.", "تنزلق طبقات السائل المتجاورة بنعومة على خطوط انسياب."],
          ["Streamline", "خط الانسياب", "The path of a small part of the liquid; streamlines never intersect.", "المسار الذي يتبعه جزء صغير من السائل، وخطوط الانسياب لا تتقاطع."],
          ["Turbulent flow", "الانسياب المضطرب", "Flow above a certain speed with small circular vortices.", "انسياب يتجاوز سرعة معينة وتظهر فيه دوامات دائرية صغيرة."],
          ["Volume flow rate", "معدل الانسياب الحجمي", "Volume of liquid passing a section per second, Qv = Av (m³/s).", "حجم السائل المار خلال مقطع في الثانية، Qv = Av (m³/s)."],
          ["Mass flow rate", "معدل الانسياب الكتلي", "Mass passing a section per second, Qm = ρAv (kg/s).", "الكتلة المارة خلال مقطع في الثانية، Qm = ρAv (kg/s)."],
          ["Continuity equation", "معادلة الاستمرارية", "A₁v₁ = A₂v₂: velocity is inversely proportional to cross-sectional area.", "A₁v₁ = A₂v₂: السرعة تتناسب عكسيًا مع مساحة المقطع."]
        ],
        lab: { parts: [{ type: "sec2phy_flow" }] },
        quiz: [
          Q(["Water enters a house in a 2 cm diameter pipe at 0.1 m/s; the pipe narrows to 1 cm. The speed in the narrow part is...", "تدخل المياه منزلًا في أنبوبة قطرها 2 cm بسرعة 0.1 m/s ثم يصبح قطرها 1 cm. السرعة في الجزء الضيق..."],
            [["0.4 m/s", "0.4 m/s"], ["0.2 m/s", "0.2 m/s"], ["0.05 m/s", "0.05 m/s"], ["0.025 m/s", "0.025 m/s"]],
            ["A ∝ d²: halving the diameter quarters the area, so v₂ = 0.1 × 4 = 0.4 m/s. (0.2 forgets to square.)", "A ∝ d²: نصف القطر يجعل المساحة الربع، إذن v₂ = 0.1 × 4 = 0.4 m/s. (0.2 تنتج من نسيان التربيع.)"],
            ["Adham's thumb halves the width, and the water goes four times faster.", "إبهام أدهم ينصف العرض فيسرع الماء أربع مرات."]),
          Q(["Water flows at a constant rate of 0.002 m³/s through a pipe of cross-section 1 cm². Its velocity is...", "يسري ماء بمعدل ثابت 0.002 m³/s في أنبوبة مساحة مقطعها 1 cm². سرعته..."],
            [["20 m/s", "20 m/s"], ["0.2 m/s", "0.2 m/s"], ["2 × 10⁻⁷ m/s", "2 × 10⁻⁷ m/s"], ["0.002 m/s", "0.002 m/s"]],
            ["v = Qv ÷ A = 0.002 ÷ (1 × 10⁻⁴) = 20 m/s.", "v = Qv ÷ A = 0.002 ÷ (1 × 10⁻⁴) = 20 m/s."],
            ["Convert cm² to m² first: 1 cm² = 10⁻⁴ m².", "حوّل cm² إلى m² أولًا: 1 cm² = 10⁻⁴ m²."]),
          Q(["A pipe's cross-section is 10 cm² at A and 2 cm² at B. If water moves at 12 m/s at A, at B it moves at...", "مساحة مقطع أنبوبة 10 cm² عند A و2 cm² عند B. إذا كانت سرعة الماء 12 m/s عند A فإنها عند B..."],
            [["60 m/s", "60 m/s"], ["2.4 m/s", "2.4 m/s"], ["24 m/s", "24 m/s"], ["12 m/s", "12 m/s"]],
            ["v_B = v_A × A_A/A_B = 12 × 10/2 = 60 m/s.", "v_B = v_A × A_A/A_B = 12 × 10/2 = 60 m/s."],
            ["Five times narrower, five times faster.", "أضيق خمس مرات، أسرع خمس مرات."]),
          Q(["Water flows in a 1.2 cm hose at 3 m/s and leaves the nozzle at 27 m/s. The nozzle diameter is...", "يمر ماء في خرطوم قطره 1.2 cm بسرعة 3 m/s ويخرج من الفوهة بسرعة 27 m/s. قطر الفوهة..."],
            [["0.4 cm", "0.4 cm"], ["0.13 cm", "0.13 cm"], ["3.6 cm", "3.6 cm"], ["0.04 cm", "0.04 cm"]],
            ["v ∝ 1/d², so d₂ = d₁√(v₁/v₂) = 1.2 × √(3/27) = 1.2 × 1/3 = 0.4 cm.", "v ∝ 1/d²، إذن d₂ = d₁√(v₁/v₂) = 1.2 × √(3/27) = 1.2 × 1/3 = 0.4 cm."],
            ["9 times faster needs 9 times less area, which is 3 times less diameter.", "سرعة أكبر ٩ مرات تحتاج مساحة أقل ٩ مرات، أي قطرًا أقل ٣ مرات."]),
          Q(["Blood flows in the aorta (radius 0.7 cm) at 0.33 m/s into 30 main arteries (radius 0.35 cm each). The speed in each artery is...", "يسري الدم في الأورطى (نصف قطره 0.7 cm) بسرعة 0.33 m/s ثم يتوزع على 30 شريانًا رئيسيًا (نصف قطر كل منها 0.35 cm). السرعة في كل شريان..."],
            [["0.044 m/s", "0.044 m/s"], ["1.32 m/s", "1.32 m/s"], ["0.011 m/s", "0.011 m/s"], ["0.33 m/s", "0.33 m/s"]],
            ["π(0.007)²(0.33) = π(0.0035)²(30)v → v = 0.33 × 4 ÷ 30 = 0.044 m/s.", "π(0.007)²(0.33) = π(0.0035)²(30)v ⇒ v = 0.33 × 4 ÷ 30 = 0.044 m/s."],
            ["The total area of the 30 arteries is bigger than the aorta's, so blood slows down.", "مجموع مساحات الشرايين الثلاثين أكبر من مساحة الأورطى فيبطئ الدم."]),
          Q(["In laminar flow, streamlines never intersect because...", "في الانسياب الهادئ لا تتقاطع خطوط الانسياب لأن..."],
            [["the velocity at a point has only one direction", "السرعة عند أي نقطة لها اتجاه واحد فقط"], ["the liquid is compressible", "السائل قابل للانضغاط"], ["the flow is turbulent", "الانسياب مضطرب"], ["the pipe is always narrow", "الأنبوبة ضيقة دائمًا"]],
            ["The tangent to a streamline gives the velocity direction; a crossing would give two directions at one point.", "المماس لخط الانسياب يحدد اتجاه السرعة، والتقاطع يعني اتجاهين عند نقطة واحدة."],
            ["Two cars cannot be in one spot heading two ways.", "لا يمكن لسيارتين أن تكونا في نفس النقطة باتجاهين مختلفين."]),
          Q(["The unit of the mass flow rate is...", "وحدة معدل الانسياب الكتلي..."],
            [["kg/s", "kg/s"], ["m³/s", "m³/s"], ["kg/m³", "kg/m³"], ["m/s", "m/s"]],
            ["Qm = ρ A v: kg/m³ × m² × m/s = kg/s. The volume flow rate is m³/s.", "Qm = ρ A v: kg/m³ × m² × m/s = kg/s، أما معدل الانسياب الحجمي فوحدته m³/s."],
            ["Kilograms of water every second through the hose.", "كيلوجرامات من الماء كل ثانية عبر الخرطوم."])
        ]
      },
      {
        id: "sec2phyu3l3", icon: "🍯", page: 56,
        title: { en: "Viscosity", ar: "اللزوجة" },
        idea: {
          official: {
            en: ["Experiments: alcohol flows out of a funnel faster than glycerin; a glass rod moves more easily in water than in honey; a steel ball falls faster in water than in glycerin. Water and alcohol have low viscosity; honey and glycerin have high viscosity.",
              "Viscosity is the property that causes resistance (friction) between the layers of a fluid, hindering their sliding over each other.",
              "Between a fixed plate and a plate moving at v, the liquid layer touching each plate moves with it (adhesion), and the layers in between move with speeds from 0 to v.",
              "The force keeping the plate moving is " + eq("F = η A v / d") + ", so " + eq("η = F d / (A v)") + ": the coefficient of viscosity, in N·s/m² = kg·m⁻¹·s⁻¹. It depends on the liquid's type and temperature. For example (not from the book): η = 1.5 N·s/m², A = 0.1 m², v = 0.2 m/s, d = 2 mm give " + eq("F = 1.5 × 0.1 × 0.2 ÷ 0.002 = 15 N") + ".",
              "Applications: high-viscosity oils for lubrication (less heat and wear); air resistance on cars is ∝ v at moderate speeds but ∝ v² at high speeds, wasting fuel; blood sedimentation rate rises in rheumatic fever (cells clump, larger radius) and falls in anaemia."],
            ar: ["التجارب: الكحول ينساب من القمع أسرع من الجليسرين، والساق الزجاجية تتحرك في الماء أسهل من العسل، والكرة الصلب تهبط في الماء أسرع من الجليسرين. فالماء والكحول لزوجتهما منخفضة، والعسل والجليسرين لزوجتهما مرتفعة.",
              "اللزوجة هي الخاصية التي تسبب المقاومة أو الاحتكاك بين طبقات المائع فتعوق انزلاقها بعضها فوق بعض.",
              "بين لوح ثابت ولوح متحرك بسرعة v تتحرك طبقة السائل الملاصقة لكل لوح معه (بسبب قوى التلاصق)، وتتدرج سرعات الطبقات بينهما من الصفر إلى v.",
              "القوة اللازمة لاستمرار حركة اللوح " + eq("F = η A v / d") + "، إذن " + eq("η = F d / (A v)") + ": معامل اللزوجة ووحدته N·s/m² = kg·m⁻¹·s⁻¹، ويعتمد على نوع السائل ودرجة حرارته. مثال (ليس من الكتاب): η = 1.5 N·s/m² وA = 0.1 m² وv = 0.2 m/s وd = 2 mm تعطي " + eq("F = 1.5 × 0.1 × 0.2 ÷ 0.002 = 15 N") + ".",
              "التطبيقات: زيوت عالية اللزوجة للتزييت (تقليل الحرارة والتآكل)، ومقاومة الهواء للسيارة تتناسب مع v عند السرعات المتوسطة ومع v² عند السرعات العالية فيزيد استهلاك الوقود، وسرعة ترسيب الدم تزيد في الحمى الروماتيزمية (تلتصق الخلايا فيكبر نصف قطرها) وتقل في الأنيميا."]
          },
          story: {
            en: ["Jana helps her mother make basbousa in their kitchen in Ismailia.",
              "She stirs the water and the spoon glides; she stirs the honey syrup and the spoon drags. Honey has a higher viscosity.",
              "When she pulls the spoon out, the water keeps swirling but the honey stops almost at once: strong friction between its layers.",
              "Her father, a mechanic, says engine oil must be viscous so it clings to the moving parts instead of running off like water.",
              "On the desert road he drives at 90, not 140: above a certain speed air resistance grows with v², and the fuel gauge drops fast."],
            ar: ["جنى تساعد أمها في عمل البسبوسة في مطبخهم بالإسماعيلية.",
              "تقلّب الماء فتنزلق الملعقة بسهولة، وتقلّب شربات العسل فتثقل الملعقة؛ فالعسل لزوجته أكبر.",
              "وعندما تُخرج الملعقة يستمر الماء في الدوران بينما يتوقف العسل تقريبًا فورًا: احتكاك قوي بين طبقاته.",
              "يقول والدها الميكانيكي إن زيت المحرك يجب أن يكون لزجًا ليلتصق بالأجزاء المتحركة ولا ينساب بعيدًا مثل الماء.",
              "وعلى الطريق الصحراوي يقود بسرعة ٩٠ لا ١٤٠؛ فبعد سرعة معينة تزداد مقاومة الهواء مع v² وينخفض مؤشر الوقود بسرعة."]
          }
        },
        words: [
          ["Viscosity", "اللزوجة", "The property causing friction between fluid layers, hindering their sliding.", "خاصية تسبب الاحتكاك بين طبقات المائع فتعوق انزلاقها."],
          ["Coefficient of viscosity", "معامل اللزوجة", "Tangential force per unit area for a unit velocity difference between layers a unit distance apart; η = Fd/(Av).", "القوة المماسية على وحدة المساحات التي تحدث فرقًا في السرعة مقداره الوحدة بين طبقتين بينهما وحدة المسافات؛ η = Fd/(Av)."],
          ["N·s/m²", "N·s/m²", "The unit of η, the same as kg·m⁻¹·s⁻¹.", "وحدة معامل اللزوجة، وتكافئ kg·m⁻¹·s⁻¹."],
          ["Adhesion", "التلاصق", "Attraction between solid and liquid molecules that holds the layer next to a plate.", "تجاذب بين جزيئات الصلب والسائل يثبت الطبقة الملاصقة للوح."],
          ["Lubrication", "التزييت", "Using viscous oils to reduce heat and wear between moving parts.", "استخدام زيوت لزجة لتقليل الحرارة والتآكل بين الأجزاء المتحركة."],
          ["Sedimentation rate", "سرعة الترسيب", "Speed at which red blood cells settle; it rises with cell radius.", "سرعة هبوط كرات الدم الحمراء في العينة، وتزيد بزيادة نصف قطرها."]
        ],
        lab: { parts: [{ type: "sec2phy_visc" }] },
        quiz: [
          Q(["A plate of area 0.1 m² moves at 0.2 m/s over a liquid layer 2 mm thick (η = 1.5 N·s/m²). The force needed is...", "لوح مساحته 0.1 m² يتحرك بسرعة 0.2 m/s فوق طبقة سائل سمكها 2 mm (η = 1.5 N·s/m²). القوة اللازمة..."],
            [["15 N", "15 N"], ["0.015 N", "0.015 N"], ["0.06 N", "0.06 N"], ["150 N", "150 N"]],
            ["F = ηAv/d = 1.5 × 0.1 × 0.2 ÷ 0.002 = 15 N. (0.06 forgets to divide by d; 0.015 uses d in mm.)", "F = ηAv/d = 1.5 × 0.1 × 0.2 ÷ 0.002 = 15 N. (0.06 تنتج من عدم القسمة على d، و0.015 من ترك d بالمليمتر.)"],
            ["Convert 2 mm to 0.002 m before dividing.", "حوّل 2 mm إلى 0.002 m قبل القسمة."]),
          Q(["If the distance between the two plates is halved (all else constant), the viscous force...", "إذا قلت المسافة بين اللوحين إلى النصف (مع ثبوت الباقي) فإن قوة اللزوجة..."],
            [["doubles", "تتضاعف"], ["halves", "تقل للنصف"], ["stays the same", "تظل ثابتة"], ["becomes four times", "تصبح أربعة أضعاف"]],
            ["F ∝ 1/d, so half the distance gives twice the force.", "F ∝ 1/d، فنصف المسافة يعطي ضعف القوة."],
            ["A thinner layer of syrup under Jana's spoon is harder to shear.", "طبقة أرق من الشربات تحت ملعقة جنى أصعب في التحريك."]),
          Q(["The unit of the coefficient of viscosity is...", "وحدة قياس معامل اللزوجة..."],
            [["kg·m⁻¹·s⁻¹", "kg·m⁻¹·s⁻¹"], ["kg·m·s⁻²", "kg·m·s⁻²"], ["N/m²", "N/m²"], ["kg/m³", "kg/m³"]],
            ["η = Fd/(Av): N·m ÷ (m² · m/s) = N·s/m² = kg·m⁻¹·s⁻¹.", "η = Fd/(Av): N·m ÷ (m² · m/s) = N·s/m² = kg·m⁻¹·s⁻¹."],
            ["N/m² is pressure; one extra second turns it into viscosity.", "N/m² وحدة الضغط، وثانية إضافية تحولها لوحدة اللزوجة."]),
          Q(["Oils used for lubricating machines are chosen with...", "الزيوت المستخدمة في تزييت الآلات تُختار بحيث تكون..."],
            [["high viscosity", "عالية اللزوجة"], ["low viscosity like water", "منخفضة اللزوجة مثل الماء"], ["zero viscosity", "عديمة اللزوجة"], ["high density only", "عالية الكثافة فقط"]],
            ["A viscous oil sticks to the moving parts and does not flow away, reducing heat and wear.", "الزيت اللزج يلتصق بالأجزاء المتحركة ولا ينساب بعيدًا فيقلل الحرارة والتآكل."],
            ["Water would run off Jana's father's engine in seconds.", "الماء كان سينساب من محرك والد جنى في ثوانٍ."]),
          Q(["In rheumatic fever, the blood sedimentation rate...", "في حالة الحمى الروماتيزمية فإن سرعة ترسيب الدم..."],
            [["increases above normal", "تزداد عن المعدل الطبيعي"], ["decreases below normal", "تقل عن المعدل الطبيعي"], ["stays normal", "تظل طبيعية"], ["becomes zero", "تصبح صفرًا"]],
            ["Red cells stick together, increasing their radius, so they fall faster; in anaemia cells break down and the rate falls.", "تلتصق كرات الدم الحمراء فيكبر نصف قطرها فتهبط أسرع، وفي الأنيميا تتكسر فتقل السرعة."],
            ["Bigger balls fall faster through the syrup of plasma.", "الكرات الأكبر تهبط أسرع خلال البلازما."]),
          Q(["A force of 0.03 N moves a 0.01 m² plate at 0.1 m/s over a liquid layer 1 mm thick. η equals...", "قوة 0.03 N تحرك لوحًا مساحته 0.01 m² بسرعة 0.1 m/s فوق طبقة سائل سمكها 1 mm. معامل اللزوجة..."],
            [["0.03 N·s/m²", "0.03 N·s/m²"], ["30 N·s/m²", "30 N·s/m²"], ["3 × 10⁻⁵ N·s/m²", "3 × 10⁻⁵ N·s/m²"], ["0.3 N·s/m²", "0.3 N·s/m²"]],
            ["η = Fd/(Av) = 0.03 × 0.001 ÷ (0.01 × 0.1) = 0.03 N·s/m².", "η = Fd/(Av) = 0.03 × 0.001 ÷ (0.01 × 0.1) = 0.03 N·s/m²."],
            ["Multiply by d on top, divide by A and v below.", "اضرب في d في البسط، واقسم على A وv في المقام."]),
          Q(["The liquid layer touching the fixed plate is...", "طبقة السائل الملاصقة للوح الثابت..."],
            [["at rest, held by adhesion", "ساكنة بسبب قوى التلاصق"], ["the fastest layer", "أسرع الطبقات"], ["moving at v/2", "تتحرك بسرعة v/2"], ["turbulent", "مضطربة"]],
            ["Adhesion between the plate's molecules and the liquid holds this layer still; speeds rise to v at the moving plate.", "التلاصق بين جزيئات اللوح والسائل يثبت هذه الطبقة، وتتزايد السرعات حتى v عند اللوح المتحرك."],
            ["The honey stuck to the bottom of Jana's pot does not move at all.", "العسل الملتصق بقاع إناء جنى لا يتحرك إطلاقًا."])
        ]
      },
      {
        id: "sec2phyu3l4", icon: "🌊", page: 62,
        title: { en: "Pressure in Liquids and Atmospheric Pressure", ar: "الضغط في السوائل والضغط الجوي" },
        idea: {
          official: {
            en: ["Pressure at a point is the average force acting perpendicularly on a unit area around that point: " + eq("P = F / A") + " (N/m² = Pa). A brick 5 × 10 × 20 cm (ρ = 5000 kg/m³, weight 50 N) gives " + eq("50 ÷ (0.05 × 0.1) = 10⁴ Pa") + " on its smallest face and 2500 Pa on its largest.",
              "A liquid column of height h and area A weighs " + eq("A h ρ g") + ", so the liquid pressure is " + eq("P = h ρ g") + " and the total pressure is " + eq("P = Pₐ + ρ g h") + ". Points on one level have equal pressure; connecting vessels fill to one level; dams are thicker at the base; divers need suits.",
              "Immiscible liquids in a U-tube: pressures at the separating level are equal, so " + eq("ρₒ hₒ = ρ_w h_w") + ". Oil (800 kg/m³) 5 cm high balances " + eq("800 × 5 ÷ 1000 = 4 cm") + " of water; this gives the relative density of oil.",
              "Torricelli's barometer: mercury stays 0.76 m above the basin (Torricelli vacuum above it) whether the tube is vertical or tilted: " + eq("Pₐ = ρ g h = 0.76 × 13,595 × 9.8 = 1.013 × 10⁵ Pa") + ".",
              "Units: " + eq("1 atm = 76 cmHg = 760 torr = 1.013 bar = 1.013 × 10⁵ Pa") + ", with 1 bar = 10⁵ Pa and 1 torr = 1 mmHg. Pressure falls with height, which we feel in our ears (Eustachian tube)."],
            ar: ["الضغط عند نقطة هو متوسط القوة المؤثرة عموديًا على وحدة المساحات المحيطة بتلك النقطة: " + eq("P = F / A") + " (N/m² = Pa). متوازي مستطيلات 5 × 10 × 20 cm (ρ = 5000 kg/m³ ووزنه 50 N) يعطي " + eq("50 ÷ (0.05 × 0.1) = 10⁴ Pa") + " على أصغر أوجهه و2500 Pa على أكبرها.",
              "عمود سائل ارتفاعه h ومساحة مقطعه A وزنه " + eq("A h ρ g") + "، فضغط السائل " + eq("P = h ρ g") + " والضغط الكلي " + eq("P = Pₐ + ρ g h") + ". جميع النقاط في مستوى أفقي واحد لها نفس الضغط، والأواني المستطرقة يرتفع فيها السائل لمستوى واحد، والسدود قاعدتها أسمك، والغواصون يحتاجون بدلًا خاصة.",
              "اتزان سائلين لا يمتزجان في أنبوبة ذات شعبتين: الضغط متساوٍ عند السطح الفاصل، إذن " + eq("ρₒ hₒ = ρ_w h_w") + "؛ فعمود زيت (800 kg/m³) ارتفاعه 5 cm يتزن مع " + eq("800 × 5 ÷ 1000 = 4 cm") + " من الماء، وبهذا نعين الكثافة النسبية للزيت.",
              "بارومتر تورشيللي: يظل الزئبق على ارتفاع رأسي 0.76 m فوق سطح الحوض (وفوقه فراغ تورشيللي) سواء كانت الأنبوبة رأسية أو مائلة: " + eq("Pₐ = ρ g h = 0.76 × 13,595 × 9.8 = 1.013 × 10⁵ Pa") + ".",
              "الوحدات: " + eq("1 atm = 76 cmHg = 760 torr = 1.013 bar = 1.013 × 10⁵ Pa") + "، حيث 1 bar = 10⁵ Pa و1 torr = 1 mmHg. ويقل الضغط الجوي بالارتفاع ونشعر بذلك في آذاننا (قناة استاكيوس)."]
          },
          story: {
            en: ["Hassan goes snorkelling with his cousins at Ras Mohammed in Sinai.",
              "At 1 m deep his ears feel a slight push; at 3 m it is stronger. P = Pₐ + ρgh grows with depth, and seawater (1030 kg/m³) is denser than fresh water.",
              "Back on the boat, he remembers the High Dam: its base is much thicker than its top because the pressure on it grows with depth.",
              "On the plane back to Cairo his ears pop as the cabin pressure falls; chewing gum opens his Eustachian tubes.",
              "His physics teacher's mercury barometer reads 76 cm in Alexandria, but it would read less on top of Mount Catherine."],
            ar: ["حسن يغطس مع أبناء عمه في رأس محمد بسيناء.",
              "على عمق ١ م يشعر بضغط خفيف على أذنيه، وعلى عمق ٣ م يزداد؛ فالضغط P = Pₐ + ρgh يزيد بالعمق، وماء البحر (1030 kg/m³) أكثف من الماء العذب.",
              "على المركب يتذكر السد العالي: قاعدته أسمك كثيرًا من قمته لأن الضغط عليها يزيد بالعمق.",
              "وفي الطائرة العائدة للقاهرة يشعر بطنين في أذنيه مع انخفاض الضغط، فيمضغ اللبان لتنفتح قناة استاكيوس.",
              "بارومتر الزئبق الخاص بمعلمه يقرأ ٧٦ سم في الإسكندرية، لكنه يقرأ أقل فوق جبل كاترين."]
          }
        },
        words: [
          ["Pressure at a point", "الضغط عند نقطة", "Average force acting perpendicularly on a unit area around the point, P = F/A.", "متوسط القوة المؤثرة عموديًا على وحدة المساحات المحيطة بالنقطة، P = F/A."],
          ["Pascal (Pa)", "الباسكال", "Unit of pressure: 1 Pa = 1 N/m².", "وحدة الضغط: 1 Pa = 1 N/m²."],
          ["Connecting vessels", "الأواني المستطرقة", "Connected containers in which a liquid rises to the same level.", "أوانٍ متصلة يرتفع فيها السائل إلى مستوى واحد."],
          ["Standard atmospheric pressure", "الضغط الجوي المعتاد", "Pressure of a 0.76 m mercury column at 0°C at sea level = 1.013 × 10⁵ Pa.", "ضغط عمود من الزئبق ارتفاعه 0.76 m عند صفر سيلزيوس عند سطح البحر = 1.013 × 10⁵ Pa."],
          ["Torricelli vacuum", "فراغ تورشيللي", "The empty space above the mercury in a barometer tube.", "الحيز الخالي فوق الزئبق في أنبوبة البارومتر."],
          ["Torr", "التور", "1 torr = 1 mmHg; 1 atm = 760 torr.", "1 تور = 1 mmHg، و1 atm = 760 تور."]
        ],
        lab: { parts: [{ type: "sec2phy_pressure" }] },
        quiz: [
          Q(["A block 5 cm × 10 cm × 20 cm (ρ = 5000 kg/m³, g = 10 m/s²) rests on a table. The MAXIMUM pressure it can exert is...", "متوازي مستطيلات 5 cm × 10 cm × 20 cm (ρ = 5000 kg/m³ وg = 10 m/s²) على منضدة. أقصى ضغط يمكن أن يحدثه..."],
            [["10⁴ Pa", "10⁴ Pa"], ["2500 Pa", "2500 Pa"], ["5000 Pa", "5000 Pa"], ["50 Pa", "50 Pa"]],
            ["Weight = 10⁻³ m³ × 5000 × 10 = 50 N; on the smallest face (0.05 × 0.1 m²): 50 ÷ 0.005 = 10⁴ Pa. The largest face gives 2500 Pa.", "الوزن = 10⁻³ m³ × 5000 × 10 = 50 N، وعلى أصغر وجه (0.05 × 0.1 m²): 50 ÷ 0.005 = 10⁴ Pa، وأكبر وجه يعطي 2500 Pa."],
            ["Like a stiletto heel: small area, big pressure.", "مثل الكعب المدبب: مساحة صغيرة وضغط كبير."]),
          Q(["A tank of saltwater (1030 kg/m³) is 1 m deep; Pₐ = 1.013 × 10⁵ Pa, g = 10 m/s². The total pressure on its base is...", "خزان ماء مالح (1030 kg/m³) عمقه 1 m، وPₐ = 1.013 × 10⁵ Pa وg = 10 m/s². الضغط الكلي على قاعه..."],
            [["1.116 × 10⁵ Pa", "1.116 × 10⁵ Pa"], ["1.03 × 10⁴ Pa", "1.03 × 10⁴ Pa"], ["0.910 × 10⁵ Pa", "0.910 × 10⁵ Pa"], ["2.026 × 10⁵ Pa", "2.026 × 10⁵ Pa"]],
            ["P = Pₐ + ρgh = 1.013 × 10⁵ + 1030 × 10 × 1 = 1.116 × 10⁵ Pa.", "P = Pₐ + ρgh = 1.013 × 10⁵ + 1030 × 10 × 1 = 1.116 × 10⁵ Pa."],
            ["1.03 × 10⁴ is only the water's part; the air also presses on the surface.", "1.03 × 10⁴ هو ضغط الماء فقط، والهواء يضغط على السطح أيضًا."]),
          Q(["Which factor does NOT affect the pressure at the bottom of a container of liquid?", "أي العوامل الآتية لا يؤثر على الضغط عند قاع إناء به سائل؟"],
            [["The area of the base", "مساحة قاعدة الإناء"], ["The height of the liquid", "ارتفاع السائل"], ["The density of the liquid", "كثافة السائل"], ["The atmospheric pressure", "الضغط الجوي"]],
            ["P = Pₐ + ρgh has no area in it.", "العلاقة P = Pₐ + ρgh لا تحتوي على المساحة."],
            ["A wide pool and a narrow pipe at the same depth give Hassan's ears the same push.", "حمام سباحة واسع وأنبوبة ضيقة لهما نفس الضغط على أذن حسن عند نفس العمق."]),
          Q(["Oil (800 kg/m³) is poured into one arm of a U-tube containing water until the oil column is 5 cm. The water height above the separating surface is...", "يُصب زيت (800 kg/m³) في إحدى شعبتي أنبوبة بها ماء حتى يصبح ارتفاع عمود الزيت 5 cm. ارتفاع الماء فوق السطح الفاصل..."],
            [["4 cm", "4 cm"], ["6.25 cm", "6.25 cm"], ["5 cm", "5 cm"], ["0.4 cm", "0.4 cm"]],
            ["ρₒhₒ = ρ_w h_w → h_w = 800 × 5 ÷ 1000 = 4 cm. The areas of the arms do not matter.", "ρₒhₒ = ρ_w h_w ⇒ h_w = 800 × 5 ÷ 1000 = 4 cm، ولا تؤثر مساحتا الشعبتين."],
            ["The lighter oil needs a taller column to press as much as the water.", "الزيت الأخف يحتاج عمودًا أطول ليضغط مثل الماء."]),
          Q(["The pressure at the bottom of a lake is 3 atm and at its surface 1 atm (ρ = 1000 kg/m³, g = 9.8 m/s², 1 atm = 1.013 × 10⁵ Pa). The depth is about...", "الضغط عند قاع بحيرة 3 atm وعند سطحها 1 atm (ρ = 1000 kg/m³ وg = 9.8 m/s² و1 atm = 1.013 × 10⁵ Pa). العمق تقريبًا..."],
            [["20.7 m", "20.7 m"], ["31.0 m", "31.0 m"], ["10.3 m", "10.3 m"], ["30 m", "30 m"]],
            ["ρgh = 2 atm = 2.026 × 10⁵ Pa → h = 2.026 × 10⁵ ÷ 9800 = 20.67 m. (31 m uses 3 atm and forgets the surface pressure.)", "ρgh = 2 atm = 2.026 × 10⁵ Pa ⇒ h = 2.026 × 10⁵ ÷ 9800 = 20.67 m. (31 m تنتج من استخدام 3 atm ونسيان ضغط السطح.)"],
            ["Each 10.3 m of water adds about one atmosphere.", "كل 10.3 m من الماء تضيف تقريبًا ضغطًا جويًا واحدًا."]),
          Q(["Which factor has NO effect on the height of the mercury column in a barometer?", "أي العوامل الآتية لا يؤثر على ارتفاع عمود الزئبق في البارومتر؟"],
            [["The cross-sectional area of the tube", "مساحة مقطع الأنبوبة"], ["The density of mercury", "كثافة الزئبق"], ["The atmospheric pressure", "الضغط الجوي"], ["The temperature of the mercury", "درجة حرارة الزئبق"]],
            ["Pₐ = ρgh: the height depends on Pₐ and ρ (which changes with temperature), not on the tube's area or tilt.", "Pₐ = ρgh: الارتفاع يعتمد على Pₐ وρ (التي تتغير بدرجة الحرارة)، لا على مساحة الأنبوبة أو ميلها."],
            ["Thick tube or thin tube, the teacher's barometer still reads 76 cm.", "أنبوبة سميكة أو رفيعة، بارومتر المعلم يقرأ ٧٦ سم."]),
          Q(["A fish tank with a base of 1000 cm² holds water weighing 4000 N. The water pressure on the base is...", "حوض أسماك مساحة قاعدته 1000 cm² يحتوي ماء وزنه 4000 N. ضغط الماء على القاعدة..."],
            [["4 × 10⁴ Pa", "4 × 10⁴ Pa"], ["4 Pa", "4 Pa"], ["4 × 10⁶ Pa", "4 × 10⁶ Pa"], ["400 Pa", "400 Pa"]],
            ["P = F/A = 4000 ÷ 0.1 m² = 4 × 10⁴ Pa (1000 cm² = 0.1 m²).", "P = F/A = 4000 ÷ 0.1 m² = 4 × 10⁴ Pa (1000 cm² = 0.1 m²)."],
            ["Convert cm² to m² by multiplying by 10⁻⁴.", "حوّل cm² إلى m² بالضرب في 10⁻⁴."]),
          Q(["Standard atmospheric pressure (760 torr) expressed in bar is...", "الضغط الجوي المعتاد (760 تور) بوحدة البار..."],
            [["1.013 bar", "1.013 bar"], ["760 bar", "760 bar"], ["0.76 bar", "0.76 bar"], ["10⁵ bar", "10⁵ bar"]],
            ["1 atm = 1.013 × 10⁵ Pa and 1 bar = 10⁵ Pa, so 1 atm = 1.013 bar.", "1 atm = 1.013 × 10⁵ Pa و1 bar = 10⁵ Pa، إذن 1 atm = 1.013 bar."],
            ["Weather maps use millibars: about 1013 mbar at sea level.", "خرائط الطقس تستخدم المللي بار: نحو 1013 مللي بار عند سطح البحر."])
        ]
      },
      {
        id: "sec2phyu3l5", icon: "🏗️", page: 69,
        title: { en: "The Manometer and Pascal's Principle", ar: "المانومتر وقاعدة باسكال" },
        idea: {
          official: {
            en: ["The manometer is a U-tube containing a liquid of known density, one arm connected to a gas tank. If the liquid in the open arm is higher by h: " + eq("P = Pₐ + ρ g h") + "; if lower: " + eq("P = Pₐ − ρ g h") + ". The pressure difference is " + eq("ΔP = P − Pₐ = ρ g h") + ".",
              "Book example: mercury in the open arm is 36 cm higher: " + eq("P = 76 + 36 = 112 cmHg = 112/76 = 1.474 atm = 1.493 × 10⁵ Pa") + ".",
              "Applications: blood pressure (systolic 120 torr when the heart contracts, diastolic 80 torr when it relaxes; turbulent flow makes a noise heard by the stethoscope) and car tyre pressure gauges.",
              "Pascal's principle: when pressure is applied to a liquid enclosed in a container, it is transmitted in full to all parts of the liquid and to the walls of the container.",
              "Hydraulic press: " + eq("f / a = F / A") + "; mechanical advantage " + eq("η = A / a = F / f = y₁ / y₂") + " (since " + eq("f y₁ = F y₂") + "). Example: a = 10 cm², A = 800 cm², f = 100 N give F = 8000 N (lifts 800 kg), η = 80, and the small piston moves 80 cm to raise the large one 1 cm. Used in car brakes, hydraulic lifts and excavators."],
            ar: ["المانومتر أنبوبة على شكل حرف U بها سائل معلوم الكثافة، تتصل إحدى شعبتيها بمستودع الغاز. إذا كان سطح السائل في الفرع المفتوح أعلى بمقدار h فإن " + eq("P = Pₐ + ρ g h") + "، وإذا كان أدنى فإن " + eq("P = Pₐ − ρ g h") + "، وفرق الضغط " + eq("ΔP = P − Pₐ = ρ g h") + ".",
              "مثال الكتاب: الزئبق في الفرع المفتوح أعلى بمقدار 36 cm: " + eq("P = 76 + 36 = 112 cmHg = 112/76 = 1.474 atm = 1.493 × 10⁵ Pa") + ".",
              "التطبيقات: ضغط الدم (الانقباضي 120 تور عند انقباض القلب، والانبساطي 80 تور عند انبساطه، والانسياب المضطرب يصاحبه صوت يسمع بالسماعة)، ومقياس ضغط إطارات السيارات.",
              "قاعدة باسكال: عندما يقع ضغط على سائل محبوس في إناء فإن الضغط ينتقل بتمامه إلى جميع أجزاء السائل وإلى جدران الإناء الحاوي له.",
              "المكبس الهيدروليكي: " + eq("f / a = F / A") + "، والفائدة الآلية " + eq("η = A / a = F / f = y₁ / y₂") + " (لأن " + eq("f y₁ = F y₂") + "). مثال: a = 10 cm² وA = 800 cm² وf = 100 N تعطي F = 8000 N (ترفع 800 kg) وη = 80، ويتحرك المكبس الصغير 80 cm ليرتفع الكبير 1 cm. ويستخدم في فرامل السيارات والروافع الهيدروليكية والحفارات."]
          },
          story: {
            en: ["Mostafa visits his uncle's car service centre in Shubra.",
              "A hydraulic lift raises a whole car while the worker presses a small pedal: the oil carries the same pressure to a much bigger piston.",
              "\"If the big piston is 80 times larger, my 100 N becomes 8000 N,\" Mostafa calculates, \"but I must push 80 cm to lift it 1 cm.\"",
              "Then the technician checks the brake fluid: a small push on the brake pedal is transmitted in full to every wheel cylinder.",
              "At home, Mostafa's grandfather has his blood pressure measured: 120 over 80, in torr, just like the book says."],
            ar: ["مصطفى يزور مركز صيانة السيارات الخاص بخاله في شبرا.",
              "رافعة هيدروليكية ترفع سيارة كاملة بينما يضغط العامل على دواسة صغيرة: الزيت ينقل نفس الضغط إلى مكبس أكبر كثيرًا.",
              "يحسب مصطفى: «إذا كان المكبس الكبير أكبر ٨٠ مرة فإن ١٠٠ نيوتن تصبح ٨٠٠٠ نيوتن، لكن عليّ أن أدفع ٨٠ سم لأرفعها ١ سم».",
              "ثم يفحص الفني زيت الفرامل: دفعة صغيرة على دواسة الفرامل تنتقل بتمامها إلى كل أسطوانات العجلات.",
              "وفي البيت يقيس جدّ مصطفى ضغط دمه: ١٢٠ على ٨٠ بالتور، تمامًا كما في الكتاب."]
          }
        },
        words: [
          ["Manometer", "المانومتر", "A U-tube device measuring the difference between a gas pressure and atmospheric pressure.", "جهاز على شكل U يقيس الفرق بين ضغط غاز محبوس والضغط الجوي."],
          ["Pressure difference", "فرق الضغط", "ΔP = P − Pₐ = ρgh, read from the level difference in the manometer.", "ΔP = P − Pₐ = ρgh، ويقرأ من فرق المستوى في المانومتر."],
          ["Systolic pressure", "الضغط الانقباضي", "The maximum arterial pressure when the heart contracts (about 120 torr).", "أقصى ضغط في الشريان عند انقباض القلب (نحو 120 تور)."],
          ["Pascal's principle", "قاعدة باسكال", "Pressure on an enclosed liquid is transmitted in full to all its parts and the container walls.", "الضغط على سائل محبوس ينتقل بتمامه إلى جميع أجزائه وإلى جدران الإناء."],
          ["Hydraulic press", "المكبس الهيدروليكي", "Two pistons of areas a and A joined by a liquid: F/A = f/a.", "مكبسان مساحتاهما a وA يصل بينهما سائل: F/A = f/a."],
          ["Mechanical advantage", "الفائدة الآلية", "η = A/a = F/f = y₁/y₂ for the hydraulic press.", "η = A/a = F/f = y₁/y₂ للمكبس الهيدروليكي."]
        ],
        lab: { parts: [{ type: "sec2phy_hydraulic" }] },
        quiz: [
          Q(["In a mercury manometer the open arm is 36 cm higher than the arm joined to the tank (Pₐ = 76 cmHg). The gas pressure is...", "في مانومتر زئبقي سطح الفرع المفتوح أعلى بمقدار 36 cm من الفرع المتصل بالمستودع (Pₐ = 76 cmHg). ضغط الغاز..."],
            [["112 cmHg", "112 cmHg"], ["40 cmHg", "40 cmHg"], ["36 cmHg", "36 cmHg"], ["76 cmHg", "76 cmHg"]],
            ["Open arm higher → P = Pₐ + h = 76 + 36 = 112 cmHg = 1.474 atm.", "الفرع المفتوح أعلى ⇒ P = Pₐ + h = 76 + 36 = 112 cmHg = 1.474 atm."],
            ["The gas pushes the mercury up the open side, so it is above atmospheric.", "الغاز يدفع الزئبق لأعلى في الفرع المفتوح، فضغطه أكبر من الجوي."]),
          Q(["A mercury manometer (ρ = 13,600 kg/m³, g = 9.8 m/s²) shows the open arm 25 cm higher. The pressure difference ΔP is...", "مانومتر زئبقي (ρ = 13,600 kg/m³ وg = 9.8 m/s²) فيه الفرع المفتوح أعلى بمقدار 25 cm. فرق الضغط ΔP..."],
            [["3.332 × 10⁴ Pa", "3.332 × 10⁴ Pa"], ["3.332 × 10⁶ Pa", "3.332 × 10⁶ Pa"], ["1.3462 × 10⁵ Pa", "1.3462 × 10⁵ Pa"], ["3400 Pa", "3400 Pa"]],
            ["ΔP = ρgh = 13,600 × 9.8 × 0.25 = 33,320 Pa; the absolute pressure is 1.013 × 10⁵ + 0.3332 × 10⁵ = 1.3462 × 10⁵ Pa.", "ΔP = ρgh = 13,600 × 9.8 × 0.25 = 33,320 Pa، والضغط المطلق 1.013 × 10⁵ + 0.3332 × 10⁵ = 1.3462 × 10⁵ Pa."],
            ["ΔP is the difference only; the absolute value adds the air's pressure.", "ΔP هو الفرق فقط، والضغط المطلق يضيف ضغط الهواء."]),
          Q(["A hydraulic press: small piston 10 cm² with 100 N, large piston 800 cm² (g = 10 m/s²). The largest mass it can lift is...", "مكبس هيدروليكي: المكبس الصغير 10 cm² تؤثر عليه 100 N والكبير 800 cm² (g = 10 m/s²). أكبر كتلة يمكن رفعها..."],
            [["800 kg", "800 kg"], ["8000 kg", "8000 kg"], ["80 kg", "80 kg"], ["1.25 kg", "1.25 kg"]],
            ["F = f × A/a = 100 × 800/10 = 8000 N; m = F/g = 800 kg.", "F = f × A/a = 100 × 800/10 = 8000 N، وm = F/g = 800 kg."],
            ["8000 is the force in newtons; Mostafa divides by g to get kilograms.", "8000 هي القوة بالنيوتن، ويقسم مصطفى على g ليحصل على الكيلوجرامات."]),
          Q(["A hydraulic press has pistons of diameters 2 cm and 24 cm. A force of 2000 N acts on the large piston. The force on the small piston is about...", "مكبس هيدروليكي قطرا مكبسيه 2 cm و24 cm، والقوة على المكبس الكبير 2000 N. القوة على المكبس الصغير تقريبًا..."],
            [["13.9 N", "13.9 N"], ["166.7 N", "166.7 N"], ["24,000 N", "24,000 N"], ["1.39 N", "1.39 N"]],
            ["Area ratio = (24/2)² = 144 = η, so f = 2000 ÷ 144 ≈ 13.9 N. (166.7 uses the diameter ratio without squaring.)", "نسبة المساحتين = (24/2)² = 144 = η، إذن f = 2000 ÷ 144 ≈ 13.9 N. (166.7 من نسبة القطرين دون تربيع.)"],
            ["Twelve times the diameter is 144 times the area.", "قطر أكبر ١٢ مرة يعني مساحة أكبر ١٤٤ مرة."]),
          Q(["The ratio of the radii of the two pistons of a hydraulic press is 2/9. The ratio of the forces on them (small : large) is...", "النسبة بين نصفي قطري المكبسين في المكبس المائي 2/9. النسبة بين القوتين (الصغير : الكبير)..."],
            [["4/81", "4/81"], ["2/9", "2/9"], ["9/2", "9/2"], ["81/4", "81/4"]],
            ["f/F = a/A = (r₁/r₂)² = (2/9)² = 4/81.", "f/F = a/A = (r₁/r₂)² = (2/9)² = 4/81."],
            ["Forces follow the areas, and areas follow the radius squared.", "القوى تتبع المساحات، والمساحات تتبع مربع نصف القطر."]),
          Q(["In a press with mechanical advantage 80, to raise the large piston 1 cm the small piston must move...", "في مكبس فائدته الآلية 80، لكي يرتفع المكبس الكبير 1 cm يجب أن يتحرك المكبس الصغير..."],
            [["80 cm", "80 cm"], ["1/80 cm", "1/80 cm"], ["1 cm", "1 cm"], ["8 cm", "8 cm"]],
            ["f y₁ = F y₂ (conservation of energy), so y₁/y₂ = F/f = 80: y₁ = 80 cm.", "f y₁ = F y₂ (بقاء الطاقة)، إذن y₁/y₂ = F/f = 80، وy₁ = 80 cm."],
            ["The press multiplies force, never work: Mostafa trades distance for force.", "المكبس يضاعف القوة لا الشغل: مصطفى يبادل المسافة بالقوة."]),
          Q(["When a gas pressure is LESS than atmospheric pressure, in the manometer...", "عندما يكون ضغط الغاز أقل من الضغط الجوي فإن في المانومتر..."],
            [["the liquid in the open arm is lower: P = Pₐ − ρgh", "يكون سطح السائل في الفرع المفتوح أدنى: P = Pₐ − ρgh"], ["the liquid in the open arm is higher: P = Pₐ + ρgh", "يكون سطح السائل في الفرع المفتوح أعلى: P = Pₐ + ρgh"], ["the two levels are always equal", "يتساوى المستويان دائمًا"], ["the liquid leaves the tube", "يخرج السائل من الأنبوبة"]],
            ["The stronger atmosphere pushes the open-arm liquid down towards the tank.", "الضغط الجوي الأكبر يدفع السائل في الفرع المفتوح لأسفل نحو المستودع."],
            ["The air outside wins the tug of war.", "الهواء الخارجي يفوز في شد الحبل."]),
          Q(["A car tyre needs a pressure difference of 3.039 × 10⁵ Pa above Pₐ = 1.013 × 10⁵ Pa. The pressure inside the tyre is...", "يحتاج إطار سيارة فرق ضغط 3.039 × 10⁵ Pa فوق Pₐ = 1.013 × 10⁵ Pa. الضغط داخل الإطار..."],
            [["4 atm", "4 atm"], ["3 atm", "3 atm"], ["2 atm", "2 atm"], ["1.013 atm", "1.013 atm"]],
            ["P = 1.013 × 10⁵ + 3.039 × 10⁵ = 4.052 × 10⁵ Pa = 4 atm.", "P = 1.013 × 10⁵ + 3.039 × 10⁵ = 4.052 × 10⁵ Pa = 4 atm."],
            ["The gauge shows 3 atm extra, so the inside holds 4 atm in total.", "المقياس يُظهر 3 atm زيادة، فالداخل 4 atm إجمالًا."])
        ]
      }
    ]
  });

  /* ================= UNIT 4: HEAT ================= */
  G.units.push({
    id: "sec2phyu4", num: 4, icon: "🎈", color: "orange",
    title: { en: "Heat", ar: "الحرارة" },
    lessons: [
      {
        id: "sec2phyu4l1", icon: "💨", page: 82,
        title: { en: "Brownian Motion and Boyle's Law", ar: "الحركة البراونية وقانون بويل" },
        idea: {
          official: {
            en: ["Molecules are always moving: gas molecules in random translational motion, liquid molecules translational and vibrational, solid molecules vibrational. Brownian motion: carbon particles of smoke (and pollen in water, Brown 1827) move randomly because gas molecules hit them unequally from different sides.",
              "An NH₃ jar inverted over an HCl jar forms a white NH₄Cl cloud that fills both jars: gas molecules have large intermolecular spaces, which explains why gases are compressible.",
              "A gas is described by volume, pressure and temperature; each experiment keeps one constant: Boyle (T constant), Charles (P constant), pressure law (V constant).",
              "Boyle's apparatus: trapped air in tube A; raising tube B gives " + eq("P = Pₐ + h") + ", lowering it gives " + eq("P = Pₐ − h") + ". A graph of V against 1/P is a straight line.",
              "Boyle's law: at constant temperature the volume of a fixed mass of gas is inversely proportional to its pressure: " + eq("P V = const, P₁V₁ = P₂V₂") + ". Example: 15 L of N₂ at 12 cmHg and 10 L of O₂ at 50 cmHg put in a 5 L container: " + eq("36 + 100 = 136 cmHg") + " (the mixture's pressure is the sum of partial pressures)."],
            ar: ["الجزيئات في حركة مستمرة: جزيئات الغاز حركة انتقالية عشوائية، والسائل انتقالية واهتزازية، والصلب اهتزازية. الحركة البراونية: حبيبات الكربون في الدخان (وحبوب اللقاح في الماء، براون ١٨٢٧) تتحرك عشوائيًا لأن جزيئات الغاز تصطدم بها بأعداد غير متساوية من الجهات المختلفة.",
              "عند قلب مخبار به غاز النشادر NH₃ فوق آخر به غاز كلوريد الهيدروجين HCl تتكون سحابة بيضاء من كلوريد الأمونيوم NH₄Cl تملأ المخبارين: بين جزيئات الغاز مسافات بينية كبيرة نسبيًا، وهذا يفسر قابلية الغازات للانضغاط.",
              "يُوصف الغاز بالحجم والضغط ودرجة الحرارة، وكل تجربة تثبت متغيرًا واحدًا: بويل (ثبوت درجة الحرارة)، وشارل (ثبوت الضغط)، وقانون الضغط (ثبوت الحجم).",
              "جهاز بويل: هواء محبوس في الأنبوبة A، ورفع الأنبوبة B يعطي " + eq("P = Pₐ + h") + " وخفضها يعطي " + eq("P = Pₐ − h") + "، والعلاقة بين V و1/P خط مستقيم.",
              "قانون بويل: عند ثبوت درجة الحرارة يتناسب حجم كمية محددة من غاز عكسيًا مع ضغطها: " + eq("P V = const, P₁V₁ = P₂V₂") + ". مثال: 15 لتر نيتروجين عند 12 cmHg و10 لتر أكسجين عند 50 cmHg في إناء سعته 5 لتر: " + eq("36 + 100 = 136 cmHg") + " (ضغط الخليط مجموع الضغوط الجزئية)."]
          },
          story: {
            en: ["Habiba lights a candle during a power cut in Port Said and shines a phone torch through the smoke.",
              "Under her cousin's school microscope the smoke specks jiggle randomly: invisible air molecules are bumping them unevenly. That is Brownian motion.",
              "Next day in the lab she blocks the end of a 100 cm³ syringe full of air and pushes the plunger to 50 cm³: the gauge shows double pressure.",
              "\"P × V stays the same at room temperature,\" she says: 76 × 100 = 152 × 50.",
              "Pulling the plunger out to 200 cm³ halves the pressure to 38 cmHg; the air molecules simply have more room."],
            ar: ["حبيبة تشعل شمعة أثناء انقطاع الكهرباء في بورسعيد وتسلط ضوء الهاتف على الدخان.",
              "تحت ميكروسكوب ابن عمها ترى ذرات الدخان تهتز عشوائيًا؛ جزيئات الهواء غير المرئية تصطدم بها بشكل غير متساوٍ: إنها الحركة البراونية.",
              "وفي المعمل تسد طرف محقن به 100 cm³ من الهواء وتدفع المكبس إلى 50 cm³، فيُظهر المقياس ضعف الضغط.",
              "تقول حبيبة: «حاصل ضرب P × V ثابت عند درجة حرارة الغرفة»: 76 × 100 = 152 × 50.",
              "وعندما تسحب المكبس إلى 200 cm³ يقل الضغط للنصف 38 cmHg؛ فجزيئات الهواء صار لديها مكان أوسع."]
          }
        },
        words: [
          ["Brownian motion", "الحركة البراونية", "Random motion of small particles (smoke, pollen) caused by unequal molecular collisions.", "حركة عشوائية لجسيمات صغيرة (دخان، حبوب لقاح) بسبب اصطدامات جزيئية غير متساوية."],
          ["Intermolecular spaces", "المسافات البينية", "Spaces between gas molecules; they explain why gases are compressible.", "المسافات بين جزيئات الغاز، وتفسر قابلية الغازات للانضغاط."],
          ["Boyle's law", "قانون بويل", "At constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure.", "عند ثبوت درجة الحرارة يتناسب حجم كمية محددة من غاز عكسيًا مع ضغطها."],
          ["Boyle's apparatus", "جهاز بويل", "Two mercury tubes joined by rubber; moving tube B changes the trapped air's pressure.", "أنبوبتان بهما زئبق تتصلان بخرطوم مطاطي، وتحريك الأنبوبة B يغير ضغط الهواء المحبوس."],
          ["Partial pressure", "الضغط الجزئي", "The pressure one gas of a mixture would have alone in the whole volume.", "ضغط أحد غازات الخليط لو شغل الحجم كله وحده."]
        ],
        lab: { parts: [{ type: "sec2phy_boyle" }] },
        quiz: [
          Q(["At constant temperature, the pressure of a gas is doubled. Its volume...", "عند ثبوت درجة الحرارة تضاعف ضغط غاز. حجمه..."],
            [["decreases to half", "يقل إلى النصف"], ["doubles", "يتضاعف"], ["stays constant", "يظل ثابتًا"], ["increases by a small amount", "يزيد بمقدار صغير"]],
            ["PV = const: 2P × V/2 = PV.", "PV = const: 2P × V/2 = PV."],
            ["Habiba pushes the plunger to half and the gauge doubles.", "تدفع حبيبة المكبس للنصف فيتضاعف المقياس."]),
          Q(["200 cm³ of gas at 76 cmHg is compressed at constant temperature to 100 cm³. Its new pressure is...", "200 cm³ من غاز عند 76 cmHg ضُغطت عند ثبوت درجة الحرارة إلى 100 cm³. ضغطها الجديد..."],
            [["152 cmHg", "152 cmHg"], ["38 cmHg", "38 cmHg"], ["76 cmHg", "76 cmHg"], ["264 cmHg", "264 cmHg"]],
            ["P₂ = P₁V₁/V₂ = 76 × 200 ÷ 100 = 152 cmHg.", "P₂ = P₁V₁/V₂ = 76 × 200 ÷ 100 = 152 cmHg."],
            ["Half the room, twice the crowding.", "نصف المساحة وضعف الزحام."]),
          Q(["15 L of nitrogen at 12 cmHg and 10 L of oxygen at 50 cmHg are put into a 5 L sealed container at constant temperature. The mixture's pressure is...", "15 لتر نيتروجين عند 12 cmHg و10 لتر أكسجين عند 50 cmHg وُضعا في إناء مغلق سعته 5 لتر عند ثبوت درجة الحرارة. ضغط الخليط..."],
            [["136 cmHg", "136 cmHg"], ["62 cmHg", "62 cmHg"], ["100 cmHg", "100 cmHg"], ["24.8 cmHg", "24.8 cmHg"]],
            ["N₂: 12 × 15 = P × 5 → 36 cmHg; O₂: 50 × 10 = P × 5 → 100 cmHg; total = 136 cmHg.", "النيتروجين: 12 × 15 = P × 5 ⇒ 36 cmHg، والأكسجين: 50 × 10 = P × 5 ⇒ 100 cmHg، والمجموع 136 cmHg."],
            ["Each gas spreads over the whole 5 L, then their pressures add up.", "كل غاز ينتشر في الخمسة لترات كلها، ثم تُجمع الضغوط."]),
          Q(["A gas is slowly compressed to half its volume at constant temperature. Then...", "ضُغط غاز ببطء إلى نصف حجمه عند ثبوت درجة الحرارة. عندئذ..."],
            [["its pressure doubles", "يتضاعف ضغطه"], ["its mass doubles", "تتضاعف كتلته"], ["its density halves", "تقل كثافته للنصف"], ["its pressure halves", "يقل ضغطه للنصف"]],
            ["The mass stays the same; the volume halves so the density doubles and, by Boyle, the pressure doubles.", "الكتلة ثابتة، والحجم يقل للنصف فتتضاعف الكثافة، وحسب بويل يتضاعف الضغط."],
            ["The same molecules squeezed into half the space.", "نفس الجزيئات محشورة في نصف المساحة."]),
          Q(["In Boyle's apparatus (Pₐ = 76 cmHg) the mercury in tube B stands 10 cm above that in tube A. The trapped air pressure is...", "في جهاز بويل (Pₐ = 76 cmHg) سطح الزئبق في الأنبوبة B أعلى بمقدار 10 cm من الأنبوبة A. ضغط الهواء المحبوس..."],
            [["86 cmHg", "86 cmHg"], ["66 cmHg", "66 cmHg"], ["76 cmHg", "76 cmHg"], ["10 cmHg", "10 cmHg"]],
            ["B higher → P = Pₐ + h = 76 + 10 = 86 cmHg.", "B أعلى ⇒ P = Pₐ + h = 76 + 10 = 86 cmHg."],
            ["The extra mercury column pushes on the trapped air.", "عمود الزئبق الإضافي يضغط على الهواء المحبوس."]),
          Q(["Brownian motion of smoke particles is caused by...", "سبب الحركة البراونية لحبيبات الدخان..."],
            [["unequal collisions of air molecules from different sides", "اصطدام جزيئات الهواء بها بأعداد غير متساوية من الجهات المختلفة"], ["the particles' own engines", "قوى داخلية في الحبيبات"], ["gravity only", "الجاذبية فقط"], ["the light shining on them", "الضوء الساقط عليها"]],
            ["More hits on one side at a moment push the particle a short distance in one direction.", "زيادة الاصطدامات على جانب في لحظة ما تدفع الحبيبة مسافة قصيرة في اتجاه معين."],
            ["Like a beach ball bounced around by a crowd at a match.", "مثل كرة شاطئ تتقاذفها أيدي الجماهير في المباراة."]),
          Q(["The ammonia and hydrogen chloride experiment proves that...", "تجربة غاز النشادر وغاز كلوريد الهيدروجين تثبت أن..."],
            [["there are spaces between gas molecules", "بين جزيئات الغاز مسافات بينية"], ["gases have a fixed volume", "الغازات لها حجم ثابت"], ["denser gases never move upwards", "الغازات الأكثف لا تتحرك لأعلى أبدًا"], ["gases cannot react", "الغازات لا تتفاعل"]],
            ["HCl (denser) diffuses upward and NH₃ downward through the spaces between molecules, forming NH₄Cl in both jars.", "ينتشر HCl (الأكثف) لأعلى وNH₃ لأسفل خلال المسافات البينية، فيتكون NH₄Cl في المخبارين."],
            ["The white cloud fills both jars because the molecules slip between each other.", "السحابة البيضاء تملأ المخبارين لأن الجزيئات تنساب بين بعضها."]),
          Q(["In Boyle's experiment, plotting V against 1/P gives...", "في تجربة بويل، رسم V مقابل 1/P يعطي..."],
            [["a straight line through the origin", "خطًا مستقيمًا يمر بنقطة الأصل"], ["a horizontal line", "خطًا أفقيًا"], ["a curve that meets −273°C", "منحنى يقطع −273°C"], ["a vertical line", "خطًا رأسيًا"]],
            ["V = const × (1/P): direct proportion with 1/P, so a straight line.", "V = const × (1/P): تناسب طردي مع 1/P فيكون خطًا مستقيمًا."],
            ["Inverse with P means straight with 1/P.", "عكسي مع P يعني مستقيمًا مع 1/P."])
        ]
      },
      {
        id: "sec2phyu4l2", icon: "🌡️", page: 86,
        title: { en: "Charles's Law, the Pressure Law and Absolute Zero", ar: "قانون شارل وقانون الضغط والصفر المطلق" },
        idea: {
          official: {
            en: ["Two equal flasks of different gases heated equally at constant pressure push their mercury threads equal distances: equal volumes of different gases expand equally. Volume expansion coefficient " + eq("α_v = (V₁₀₀ − V₀) / (V₀ × 100) = 1/273 °C⁻¹") + " for all gases (Charles's apparatus: ice, then steam).",
              "Charles's law: at constant pressure, the volume of a gas increases by 1/273 of its volume at 0°C for each 1°C rise. Another form: " + eq("V ∝ T") + " (kelvin), " + eq("V₁/T₁ = V₂/T₂") + ".",
              "Jolly's apparatus keeps the gas volume constant (1/7 of the bulb is filled with mercury because mercury expands 7 times as much as glass). Pressure coefficient " + eq("β_P = (P₁₀₀ − P₀)/(P₀ × 100) = 1/273 °C⁻¹") + ". Pressure law: " + eq("P ∝ T") + " at constant volume.",
              "Extending the V–t or P–t line meets the temperature axis at −273°C: absolute zero (0 K), where an ideal gas's volume (or pressure) would vanish. " + eq("T(K) = t(°C) + 273") + ": 0°C = 273 K, 100°C = 373 K.",
              "Book examples: " + eq("450 × (273 + 91)/273 = 600 cm³") + "; 0.5 L from 10°C to 293°C becomes " + eq("500 × 566/283 = 1000 cm³") + "; 59.8 cmHg at 26°C becomes " + eq("59.8 × 403/299 = 80.6 cmHg") + " at 130°C."],
            ar: ["دورقان متساويان بهما غازان مختلفان يُسخّنان بنفس المقدار عند ثبوت الضغط فيتحرك خيطا الزئبق مسافتين متساويتين: الحجوم المتساوية من الغازات المختلفة تتمدد بمقادير متساوية. معامل التمدد الحجمي " + eq("α_v = (V₁₀₀ − V₀) / (V₀ × 100) = 1/273 °C⁻¹") + " لجميع الغازات (جهاز شارل: جليد ثم بخار).",
              "قانون شارل: عند ثبوت الضغط يزداد حجم كمية من غاز بمقدار 1/273 من حجمها الأصلي عند صفر سيلزيوس لكل ارتفاع درجة واحدة سيلزيوس. وبصورة أخرى: " + eq("V ∝ T") + " (بالكلفن)، " + eq("V₁/T₁ = V₂/T₂") + ".",
              "جهاز جولي يحفظ حجم الغاز ثابتًا (يُملأ 1/7 الانتفاخ بالزئبق لأن معامل تمدد الزئبق سبعة أمثال الزجاج). معامل زيادة الضغط " + eq("β_P = (P₁₀₀ − P₀)/(P₀ × 100) = 1/273 °C⁻¹") + "، وقانون الضغط: " + eq("P ∝ T") + " عند ثبوت الحجم.",
              "امتداد خط V–t أو P–t يقطع محور درجة الحرارة عند −273°C: الصفر المطلق (0 K) الذي ينعدم عنده حجم (أو ضغط) الغاز المثالي. " + eq("T(K) = t(°C) + 273") + "، فصفر سيلزيوس = 273 K و100°C = 373 K.",
              "أمثلة الكتاب: " + eq("450 × (273 + 91)/273 = 600 cm³") + "، ونصف لتر من 10°C إلى 293°C يصبح " + eq("500 × 566/283 = 1000 cm³") + "، و59.8 cmHg عند 26°C يصبح " + eq("59.8 × 403/299 = 80.6 cmHg") + " عند 130°C."]
          },
          story: {
            en: ["Laila's family leaves Cairo for Luxor on a cold January dawn. The tyre gauge reads 1.5 atm at 3°C.",
              "By midday on the hot road the tyres reach 51°C: at constant volume the pressure rises with absolute temperature, 1.5 × 324/276 ≈ 1.8 atm.",
              "At the Luxor balloon site she watches the burner heat the air inside a hot-air balloon: at constant pressure, the hot air expands and some leaves, so the balloon becomes lighter.",
              "Laila draws the V–t line on her notebook and extends it backwards: it hits −273°C, absolute zero.",
              "\"Kelvin means always positive,\" she writes: body temperature 37°C is 310 K."],
            ar: ["عائلة ليلى تغادر القاهرة إلى الأقصر في فجر يوم بارد من يناير، ومقياس الإطار يقرأ 1.5 atm عند 3°C.",
              "وعند الظهيرة على الطريق الساخن تصل الإطارات إلى 51°C؛ فعند ثبوت الحجم يزيد الضغط مع درجة الحرارة المطلقة: 1.5 × 324/276 ≈ 1.8 atm.",
              "وفي موقع البالونات بالأقصر ترى الموقد يسخّن هواء البالون: عند ثبوت الضغط يتمدد الهواء الساخن ويخرج بعضه فيصبح البالون أخف.",
              "ترسم ليلى خط V–t في كراستها وتمده للخلف فيقطع المحور عند −273°C: الصفر المطلق.",
              "تكتب ليلى: «الكلفن موجب دائمًا»: درجة حرارة الجسم 37°C تساوي 310 K."]
          }
        },
        words: [
          ["Volume expansion coefficient", "معامل التمدد الحجمي", "Increase in unit volume at 0°C per 1°C rise at constant pressure = 1/273 °C⁻¹.", "مقدار الزيادة في وحدة الحجوم عند صفر سيلزيوس لكل ارتفاع درجة واحدة عند ثبوت الضغط = 1/273."],
          ["Charles's law", "قانون شارل", "At constant pressure, V ∝ T (kelvin) for a fixed mass of gas.", "عند ثبوت الضغط يتناسب حجم كمية محددة من غاز طرديًا مع درجة حرارتها المطلقة."],
          ["Pressure coefficient", "معامل زيادة الضغط", "Increase in unit pressure at 0°C per 1°C rise at constant volume = 1/273 °C⁻¹.", "مقدار الزيادة في وحدة الضغوط عند صفر سيلزيوس لكل ارتفاع درجة واحدة عند ثبوت الحجم = 1/273."],
          ["Pressure law (Gay-Lussac)", "قانون الضغط (جاي لوساك)", "At constant volume, P ∝ T (kelvin) for a fixed mass of gas.", "عند ثبوت الحجم يتناسب ضغط كمية محددة من غاز طرديًا مع درجة حرارتها المطلقة."],
          ["Jolly's apparatus", "جهاز جولي", "Measures the pressure coefficient of a gas at constant volume.", "يُعيّن معامل زيادة ضغط الغاز عند ثبوت الحجم."],
          ["Absolute zero", "الصفر المطلق", "−273°C = 0 K, where an ideal gas's volume or pressure would vanish.", "−273°C = 0 K، وعندها ينعدم حجم أو ضغط الغاز المثالي."]
        ],
        lab: { parts: [{ type: "sec2phy_charles" }] },
        quiz: [
          Q(["A gas has a volume of 450 cm³ at 0°C. At constant pressure, its volume at 91°C is...", "حجم كمية من غاز 450 cm³ عند 0°C. عند ثبوت الضغط يكون حجمها عند 91°C..."],
            [["600 cm³", "600 cm³"], ["491 cm³", "491 cm³"], ["337.5 cm³", "337.5 cm³"], ["40,950 cm³", "40,950 cm³"]],
            ["V₂ = V₁ × T₂/T₁ = 450 × 364/273 = 600 cm³.", "V₂ = V₁ × T₂/T₁ = 450 × 364/273 = 600 cm³."],
            ["Use kelvin: 0°C is 273 K and 91°C is 364 K.", "استخدم الكلفن: 0°C = 273 K و91°C = 364 K."]),
          Q(["Half a litre of hydrogen is heated from 10°C to 293°C at constant pressure. Its new volume is...", "نصف لتر من الهيدروجين سُخّن من 10°C إلى 293°C عند ثبوت الضغط. حجمه الجديد..."],
            [["1 L", "1 L"], ["14.65 L", "14.65 L"], ["0.25 L", "0.25 L"], ["0.5 L", "0.5 L"]],
            ["T₁ = 283 K, T₂ = 566 K: the absolute temperature doubles, so V = 500 × 566/283 = 1000 cm³ = 1 L.", "T₁ = 283 K وT₂ = 566 K: تتضاعف الدرجة المطلقة فيصبح V = 500 × 566/283 = 1000 cm³ = 1 L."],
            ["14.65 comes from using Celsius: 293/10. Never use °C in gas laws!", "14.65 تنتج من استخدام السيلزيوس 293/10؛ لا تستخدم °C في قوانين الغازات!"]),
          Q(["The pressure of a gas at 10°C will double, at constant volume, if it is heated to...", "يتضاعف ضغط كمية من غاز عند 10°C إذا سُخّنت عند ثبوت الحجم إلى..."],
            [["293°C", "293°C"], ["20°C", "20°C"], ["80°C", "80°C"], ["410°C", "410°C"]],
            ["P ∝ T: 283 K × 2 = 566 K = 293°C.", "P ∝ T: 283 K × 2 = 566 K = 293°C."],
            ["Doubling the Celsius number (20°C) is a trap: double the kelvin.", "مضاعفة رقم السيلزيوس (20°C) فخ؛ ضاعف الكلفن."]),
          Q(["The human body temperature on the Kelvin scale is approximately...", "درجة حرارة جسم الإنسان على مقياس كلفن تقريبًا..."],
            [["310 K", "310 K"], ["37 K", "37 K"], ["100 K", "100 K"], ["373 K", "373 K"]],
            ["T = 37 + 273 = 310 K.", "T = 37 + 273 = 310 K."],
            ["Add 273 and you are in kelvin.", "أضف 273 فتصبح بالكلفن."]),
          Q(["A sealed container of air is cooled from 0°C to −91°C and its pressure becomes 40 cmHg. Its pressure at 0°C was...", "إناء مغلق به هواء بُرّد من 0°C إلى −91°C فأصبح ضغطه 40 cmHg. ضغطه عند 0°C كان..."],
            [["60 cmHg", "60 cmHg"], ["26.7 cmHg", "26.7 cmHg"], ["131 cmHg", "131 cmHg"], ["40 cmHg", "40 cmHg"]],
            ["P₀ = 40 × 273/182 = 60 cmHg (−91°C = 182 K).", "P₀ = 40 × 273/182 = 60 cmHg (−91°C = 182 K)."],
            ["Cooling lowered the pressure, so it must have been higher before.", "التبريد قلل الضغط، فلا بد أنه كان أكبر قبله."]),
          Q(["A car tyre is at 1.5 atm at 3°C. At constant volume, at 51°C its pressure is about...", "إطار سيارة ضغطه 1.5 atm عند 3°C. عند ثبوت الحجم يصبح ضغطه عند 51°C تقريبًا..."],
            [["1.8 atm", "1.8 atm"], ["25.5 atm", "25.5 atm"], ["1.3 atm", "1.3 atm"], ["1.5 atm", "1.5 atm"]],
            ["P₂ = 1.5 × 324/276 ≈ 1.76 ≈ 1.8 atm.", "P₂ = 1.5 × 324/276 ≈ 1.76 ≈ 1.8 atm."],
            ["Laila's tyres gain pressure as they heat on the Upper Egypt road.", "إطارات ليلى يزيد ضغطها مع سخونة طريق الصعيد."]),
          Q(["The volume expansion coefficient of a gas at constant pressure equals...", "معامل التمدد الحجمي للغاز عند ثبوت الضغط يساوي..."],
            [["1/273 per °C, the same for all gases", "1/273 لكل درجة سيلزيوس، وهو ثابت لجميع الغازات"], ["273 per °C", "273 لكل درجة"], ["1/273 for air only", "1/273 للهواء فقط"], ["it depends on the gas type", "يعتمد على نوع الغاز"]],
            ["Experiments show equal volumes of different gases expand equally, so α_v = β_P = 1/273 K⁻¹ for all gases.", "تثبت التجارب أن الحجوم المتساوية من الغازات المختلفة تتمدد بالتساوي، فإن α_v = β_P = 1/273 K⁻¹ لكل الغازات."],
            ["The two mercury threads moved exactly the same distance.", "خيطا الزئبق تحركا نفس المسافة تمامًا."]),
          Q(["In Jolly's apparatus, 1/7 of the bulb is filled with mercury because...", "في جهاز جولي يُملأ 1/7 الانتفاخ بالزئبق لأن..."],
            [["mercury expands 7 times as much as glass, so the gas volume stays constant", "معامل تمدد الزئبق سبعة أمثال الزجاج فيظل حجم الغاز ثابتًا"], ["mercury is 7 times denser than glass", "الزئبق أكثف من الزجاج سبع مرات"], ["it makes the gas pressure 7 times larger", "يجعل ضغط الغاز سبعة أضعاف"], ["mercury does not expand", "الزئبق لا يتمدد"]],
            ["The extra expansion of the mercury exactly fills the extra space as the glass expands.", "التمدد الزائد للزئبق يملأ تمامًا الحيز الإضافي الناتج عن تمدد الزجاج."],
            ["The glass grows, the mercury grows 7 times more: the space left for the gas stays the same.", "الزجاج يتمدد، والزئبق يتمدد سبعة أضعاف: يبقى حيز الغاز كما هو."])
        ]
      },
      {
        id: "sec2phyu4l3", icon: "🎈", page: 93,
        title: { en: "The General Gas Law", ar: "القانون العام للغازات" },
        idea: {
          official: {
            en: ["Boyle: " + eq("V ∝ 1/P") + " (T constant). Charles: " + eq("V ∝ T") + " (P constant). Together " + eq("V ∝ T / P") + ", so " + eq("P V / T = const") + " for a fixed mass of gas.",
              "To compare two states of the same gas: " + eq("P₁V₁/T₁ = P₂V₂/T₂") + ", always with T in kelvin.",
              "STP means 76 cmHg and 0°C (273 K). Book example: 380 cm³ at 27°C and 60 cmHg → " + eq("V = 60 × 380 × 273 / (76 × 300) = 273 cm³") + " at STP.",
              "Enrichment: " + eq("P V = n R T") + ", with n the number of moles and " + eq("R = 8.31 J/(mol·K)") + ". A mole is the amount of substance whose mass in grams equals its molecular mass: O₂ 32 g, N₂ 28 g, CO₂ 44 g.",
              "Exercises: 760 cm³ of O₂ at 91°C and 84 cmHg → 630 cm³ at STP. A 28 cm³ bubble at 10.13 m depth (7°C) rises to the surface (27°C): " + eq("P₁ = 2 atm, V₂ = 28 × 2 × 300/280 = 60 cm³") + ". A helium balloon expands as it rises because the outside pressure falls."],
            ar: ["بويل: " + eq("V ∝ 1/P") + " (عند ثبوت T)، وشارل: " + eq("V ∝ T") + " (عند ثبوت P)، ومعًا " + eq("V ∝ T / P") + "، إذن " + eq("P V / T = const") + " لكمية محددة من غاز.",
              "للمقارنة بين حالتين لنفس الغاز: " + eq("P₁V₁/T₁ = P₂V₂/T₂") + "، ودرجة الحرارة دائمًا بالكلفن.",
              "معدل الضغط ودرجة الحرارة (STP) يعني 76 cmHg و0°C (273 K). مثال الكتاب: 380 cm³ عند 27°C و60 cmHg ⇒ " + eq("V = 60 × 380 × 273 / (76 × 300) = 273 cm³") + " في الظروف القياسية.",
              "معلومة إثرائية: " + eq("P V = n R T") + "، حيث n عدد المولات و" + eq("R = 8.31 J/(mol·K)") + " الثابت العام للغازات. المول كمية المادة التي كتلتها بالجرام تساوي كتلتها الجزيئية: O₂ 32 g وN₂ 28 g وCO₂ 44 g.",
              "تمارين: 760 cm³ أكسجين عند 91°C و84 cmHg ⇒ 630 cm³ في الظروف القياسية. فقاعة هواء 28 cm³ على عمق 10.13 m (7°C) تصعد للسطح (27°C): " + eq("P₁ = 2 atm, V₂ = 28 × 2 × 300/280 = 60 cm³") + ". وبالون الهيليوم يتمدد وهو يصعد لأن الضغط الخارجي يقل."]
          },
          story: {
            en: ["Youssef is diving with his father off Hurghada. At about 10 m deep he breathes out a small bubble of 28 cm³.",
              "Down there the water presses with about 2 atm and it is 7°C cooler than the surface sun-warmed layer at 27°C.",
              "As the bubble rises, the pressure halves and the temperature rises, so the bubble grows: 28 × 2 × 300/280 = 60 cm³.",
              "\"That's why divers must never hold their breath while rising,\" his father warns: the air in their lungs expands too.",
              "On the beach a child's helium balloon escapes; Youssef predicts it will swell as it rises into thinner air."],
            ar: ["يوسف يغطس مع والده في الغردقة، وعلى عمق نحو 10 أمتار يخرج فقاعة صغيرة حجمها 28 cm³.",
              "في الأسفل يضغط الماء بنحو 2 atm، والماء أبرد (7°C) من الطبقة السطحية الدافئة (27°C).",
              "وبينما تصعد الفقاعة يقل الضغط للنصف وترتفع درجة الحرارة فتكبر: 28 × 2 × 300/280 = 60 cm³.",
              "يحذره والده: «لهذا لا يحبس الغواص أنفاسه أثناء الصعود»؛ فالهواء في رئتيه يتمدد أيضًا.",
              "وعلى الشاطئ يفلت بالون هيليوم من طفل، فيتوقع يوسف أنه سينتفخ وهو يصعد في هواء أقل ضغطًا."]
          }
        },
        words: [
          ["General gas law", "القانون العام للغازات", "PV/T = const for a fixed mass of gas; P₁V₁/T₁ = P₂V₂/T₂.", "PV/T = مقدار ثابت لكمية محددة من غاز، P₁V₁/T₁ = P₂V₂/T₂."],
          ["STP", "معدل الضغط ودرجة الحرارة", "Standard temperature and pressure: 0°C (273 K) and 76 cmHg.", "الظروف القياسية: 0°C (273 K) و76 cmHg."],
          ["Universal gas constant", "الثابت العام للغازات", "R = 8.31 J/(mol·K) in PV = nRT.", "R = 8.31 J/(mol·K) في PV = nRT."],
          ["Mole", "المول", "Amount of substance whose mass in grams equals its molecular mass.", "كمية المادة التي كتلتها بالجرام تساوي كتلتها الجزيئية."],
          ["Ideal gas", "الغاز المثالي", "A gas whose volume or pressure would vanish at absolute zero.", "غاز ينعدم حجمه أو ضغطه عند الصفر المطلق."]
        ],
        lab: { parts: [{ type: "sec2phy_gaslaw" }] },
        quiz: [
          Q(["A gas occupies 380 cm³ at 27°C and 60 cmHg. Its volume at STP is...", "كمية من غاز حجمها 380 cm³ عند 27°C و60 cmHg. حجمها في الظروف القياسية..."],
            [["273 cm³", "273 cm³"], ["529 cm³", "529 cm³"], ["300 cm³", "300 cm³"], ["481 cm³", "481 cm³"]],
            ["V₂ = P₁V₁T₂/(P₂T₁) = 60 × 380 × 273 ÷ (76 × 300) = 273 cm³.", "V₂ = P₁V₁T₂/(P₂T₁) = 60 × 380 × 273 ÷ (76 × 300) = 273 cm³."],
            ["Pressure rises (smaller volume) and temperature falls (smaller again).", "الضغط يزيد (حجم أصغر) ودرجة الحرارة تقل (أصغر أيضًا)."]),
          Q(["760 cm³ of oxygen at 91°C and 84 cmHg is brought to STP. Its volume becomes...", "760 cm³ من الأكسجين عند 91°C و84 cmHg نُقلت إلى الظروف القياسية. حجمها يصبح..."],
            [["630 cm³", "630 cm³"], ["917 cm³", "917 cm³"], ["760 cm³", "760 cm³"], ["573 cm³", "573 cm³"]],
            ["V₂ = 760 × 84/76 × 273/364 = 630 cm³.", "V₂ = 760 × 84/76 × 273/364 = 630 cm³."],
            ["Lower pressure expands it, cooling shrinks it more.", "انخفاض الضغط يمدده، والتبريد ينكمشه أكثر."]),
          Q(["An air bubble of 28 cm³ at 10.13 m depth in fresh water (7°C) rises to the surface (27°C). Pₐ = 1.013 × 10⁵ Pa, ρ = 1000 kg/m³, g = 10 m/s². Its volume at the surface is...", "فقاعة هواء حجمها 28 cm³ على عمق 10.13 m في ماء عذب (7°C) تصعد للسطح (27°C). Pₐ = 1.013 × 10⁵ Pa وρ = 1000 kg/m³ وg = 10 m/s². حجمها عند السطح..."],
            [["60 cm³", "60 cm³"], ["56 cm³", "56 cm³"], ["30 cm³", "30 cm³"], ["14 cm³", "14 cm³"]],
            ["P₁ = 1.013 × 10⁵ + 1000 × 10 × 10.13 = 2.026 × 10⁵ Pa = 2Pₐ; V₂ = 28 × 2 × 300/280 = 60 cm³. (56 forgets the temperature.)", "P₁ = 1.013 × 10⁵ + 1000 × 10 × 10.13 = 2.026 × 10⁵ Pa = 2Pₐ، وV₂ = 28 × 2 × 300/280 = 60 cm³. (56 تنتج من نسيان درجة الحرارة.)"],
            ["Youssef's bubble more than doubles on its way up.", "فقاعة يوسف تكبر لأكثر من الضعف في صعودها."]),
          Q(["Using PV = nRT (R = 8.31 J/(mol·K)), one mole of gas at 273 K and 1.013 × 10⁵ Pa occupies about...", "باستخدام PV = nRT (R = 8.31 J/(mol·K))، مول واحد من غاز عند 273 K و1.013 × 10⁵ Pa يشغل تقريبًا..."],
            [["22.4 L", "22.4 L"], ["2.24 L", "2.24 L"], ["224 L", "224 L"], ["0.224 L", "0.224 L"]],
            ["V = nRT/P = 8.31 × 273 ÷ 1.013 × 10⁵ = 0.0224 m³ = 22.4 L.", "V = nRT/P = 8.31 × 273 ÷ 1.013 × 10⁵ = 0.0224 m³ = 22.4 L."],
            ["1 m³ = 1000 L, so 0.0224 m³ is 22.4 L.", "1 m³ = 1000 L، إذن 0.0224 m³ = 22.4 L."]),
          Q(["The mass of one mole of carbon dioxide (CO₂) is...", "كتلة مول واحد من ثاني أكسيد الكربون (CO₂)..."],
            [["44 g", "44 g"], ["28 g", "28 g"], ["32 g", "32 g"], ["22.4 g", "22.4 g"]],
            ["12 + 2 × 16 = 44 g; O₂ is 32 g and N₂ is 28 g.", "12 + 2 × 16 = 44 g، والأكسجين 32 g والنيتروجين 28 g."],
            ["22.4 is a volume in litres, not a mass.", "22.4 حجم باللتر لا كتلة."]),
          Q(["A helium balloon is released and rises into the sky. Its volume...", "بالون هيليوم أُطلق فصعد في السماء. حجمه..."],
            [["increases because the outside pressure decreases", "يزداد لأن الضغط الخارجي يقل"], ["decreases because it gets colder", "يقل لأن الجو يبرد فقط"], ["stays constant", "يظل ثابتًا"], ["becomes zero", "يصبح صفرًا"]],
            ["The pressure falls with height much more than the temperature, so by PV/T = const the volume grows.", "الضغط يقل بالارتفاع أكثر كثيرًا من تأثير درجة الحرارة، فحسب PV/T = const يزداد الحجم."],
            ["The child's balloon swells as it climbs over the beach.", "بالون الطفل ينتفخ وهو يصعد فوق الشاطئ."]),
          Q(["Both the pressure and the kelvin temperature of a gas are doubled. Its volume...", "تضاعف كل من ضغط غاز ودرجة حرارته المطلقة. حجمه..."],
            [["stays the same", "يظل ثابتًا"], ["doubles", "يتضاعف"], ["becomes four times", "يصبح أربعة أضعاف"], ["halves", "يقل للنصف"]],
            ["V ∝ T/P = 2T/2P = T/P: no change.", "V ∝ T/P = 2T/2P = T/P: لا تغيير."],
            ["The heat pushes it bigger and the pressure squeezes it back by the same factor.", "الحرارة تكبّره والضغط يصغّره بنفس النسبة."]),
          Q(["In the general gas law the temperature must be measured in...", "في القانون العام للغازات يجب قياس درجة الحرارة بـ..."],
            [["kelvin", "الكلفن"], ["degrees Celsius", "الدرجات السيلزيوس"], ["degrees Fahrenheit", "الدرجات الفهرنهايت"], ["any scale", "أي مقياس"]],
            ["V and P are proportional to the absolute temperature; Celsius can be zero or negative.", "الحجم والضغط يتناسبان مع درجة الحرارة المطلقة، والسيلزيوس قد يكون صفرًا أو سالبًا."],
            ["At 0°C a Celsius formula would divide by zero!", "عند 0°C ستقسم صيغة السيلزيوس على صفر!"])
        ]
      }
    ]
  });
})();

/* ---------- Secondary 2 Physics: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};

  /* ----- "In this lesson" objectives (from the book's expected learning outcomes) ----- */
  O.sec2phyu1l1 = { en: ["Define measurement and its three elements", "Distinguish fundamental and derived quantities", "Name the seven SI base units", "Describe the standard metre, kilogram and second", "Read a vernier caliper to 0.1 mm"],
    ar: ["تعريف القياس وعناصره الثلاثة", "التمييز بين الكميات الأساسية والمشتقة", "ذكر الوحدات الأساسية السبع في النظام الدولي", "وصف المتر والكيلوجرام والثانية العيارية", "قراءة القدمة ذات الورنية لأقرب ٠٫١ مم"] };
  O.sec2phyu1l2 = { en: ["Derive dimensional formulas of derived quantities", "Find SI units from dimensional formulas", "Use dimensions to test physical laws", "Use prefixes and scientific notation"],
    ar: ["استنتاج معادلة الأبعاد للكميات المشتقة", "تحديد وحدات القياس من معادلات الأبعاد", "استخدام الأبعاد لاختبار صحة القوانين", "استخدام البادئات والصورة العلمية"] };
  O.sec2phyu1l3 = { en: ["Explain why every measurement has an error", "List the four sources of measurement error", "Compare direct and indirect measurement", "Reduce error by precise tools, correct sight and averaging"],
    ar: ["تفسير وجود خطأ في كل قياس", "ذكر مصادر الخطأ الأربعة في القياس", "المقارنة بين القياس المباشر وغير المباشر", "تقليل الخطأ بالأداة الدقيقة وخط النظر الصحيح وأخذ المتوسط"] };
  O.sec2phyu2l1 = { en: ["Define motion and motion in a straight line", "Distinguish translational and periodic motion", "Compare speed and velocity", "Read displacement–time graphs", "Find instantaneous and average velocity"],
    ar: ["تعريف الحركة والحركة في خط مستقيم", "التمييز بين الحركة الانتقالية والدورية", "المقارنة بين السرعة القياسية والمتجهة", "قراءة منحنى الإزاحة–الزمن", "تعيين السرعة اللحظية والمتوسطة"] };
  O.sec2phyu2l2 = { en: ["Define acceleration and its unit", "Calculate acceleration from a = Δv/Δt", "Convert km/h to m/s", "Find acceleration from the v–t graph slope", "Classify positive, zero and negative acceleration"],
    ar: ["تعريف العجلة ووحدتها", "حساب العجلة من a = Δv/Δt", "التحويل من km/h إلى m/s", "تعيين العجلة من ميل منحنى السرعة–الزمن", "تصنيف العجلة الموجبة والصفرية والسالبة"] };
  O.sec2phyu2l3 = { en: ["Define force and its unit", "State Newton's first law", "Explain inertia with examples", "Calculate momentum P = mv"],
    ar: ["تعريف القوة ووحدتها", "ذكر نص قانون نيوتن الأول", "تفسير القصور الذاتي بأمثلة", "حساب كمية الحركة P = mv"] };
  O.sec2phyu2l4 = { en: ["State Newton's second law and F = ma", "Define the newton", "Explain collisions using F = mΔv/Δt", "State Newton's third law and its features"],
    ar: ["ذكر نص قانون نيوتن الثاني وF = ma", "تعريف النيوتن", "تفسير التصادمات باستخدام F = mΔv/Δt", "ذكر نص قانون نيوتن الثالث وخصائصه"] };
  O.sec2phyu3l1 = { en: ["Define a fluid", "Calculate density ρ = m/V", "Find relative density", "Explain density uses in batteries and medicine"],
    ar: ["تعريف المائع", "حساب الكثافة ρ = m/V", "حساب الكثافة النسبية", "تفسير تطبيقات الكثافة في البطاريات والطب"] };
  O.sec2phyu3l2 = { en: ["Compare laminar and turbulent flow", "State the conditions of steady flow", "Calculate volume and mass flow rates", "Apply the continuity equation A₁v₁ = A₂v₂"],
    ar: ["المقارنة بين الانسياب الهادئ والمضطرب", "ذكر شروط الانسياب المستقر", "حساب معدلي الانسياب الحجمي والكتلي", "تطبيق معادلة الاستمرارية A₁v₁ = A₂v₂"] };
  O.sec2phyu3l3 = { en: ["Explain viscosity with experiments", "Explain the velocity of liquid layers between two plates", "Use F = ηAv/d and the unit of η", "Discuss lubrication, vehicles and sedimentation rate"],
    ar: ["تفسير اللزوجة بالتجارب", "تفسير سرعات طبقات السائل بين لوحين", "استخدام F = ηAv/d ووحدة معامل اللزوجة", "مناقشة التزييت والسيارات وسرعة الترسيب"] };
  O.sec2phyu3l4 = { en: ["Define pressure at a point", "Derive P = Pₐ + ρgh", "Find the relative density of oil with a U-tube", "Measure atmospheric pressure with a barometer", "Convert between Pa, bar, torr and atm"],
    ar: ["تعريف الضغط عند نقطة", "استنتاج P = Pₐ + ρgh", "تعيين الكثافة النسبية للزيت بأنبوبة ذات شعبتين", "قياس الضغط الجوي بالبارومتر", "التحويل بين الباسكال والبار والتور والضغط الجوي"] };
  O.sec2phyu3l5 = { en: ["Describe the manometer and use P = Pₐ ± ρgh", "Explain blood pressure and tyre pressure", "State Pascal's principle", "Calculate forces and mechanical advantage of a hydraulic press"],
    ar: ["وصف المانومتر واستخدام P = Pₐ ± ρgh", "تفسير ضغط الدم وضغط الإطارات", "ذكر قاعدة باسكال", "حساب القوى والفائدة الآلية للمكبس الهيدروليكي"] };
  O.sec2phyu4l1 = { en: ["Explain Brownian motion", "Prove intermolecular spaces in gases", "Verify Boyle's law experimentally", "Apply P₁V₁ = P₂V₂ and partial pressures"],
    ar: ["تفسير الحركة البراونية", "إثبات وجود المسافات البينية في الغازات", "التحقق عمليًا من قانون بويل", "تطبيق P₁V₁ = P₂V₂ والضغوط الجزئية"] };
  O.sec2phyu4l2 = { en: ["Show that all gases expand equally", "State Charles's law and the pressure law", "Describe Charles's and Jolly's apparatus", "Deduce absolute zero and use T = t + 273"],
    ar: ["إثبات أن الغازات تتمدد بالتساوي", "ذكر قانوني شارل والضغط", "وصف جهازي شارل وجولي", "استنتاج الصفر المطلق واستخدام T = t + 273"] };
  O.sec2phyu4l3 = { en: ["Derive the general gas law", "Solve problems with P₁V₁/T₁ = P₂V₂/T₂", "Convert volumes to STP", "Use PV = nRT and the mole"],
    ar: ["استنتاج القانون العام للغازات", "حل مسائل على P₁V₁/T₁ = P₂V₂/T₂", "تحويل الحجوم إلى الظروف القياسية", "استخدام PV = nRT والمول"] };

  /* ----- extra quiz items: one order/match + one true/false per lesson ----- */
  function tf(a, q, off, sto) { return { k: "tf", a: a, q: q, off: off, sto: sto }; }
  X.sec2phyu1l1 = [
    { k: "match", q: ["Match each SI quantity with its unit.", "صِل كل كمية بوحدتها في النظام الدولي."],
      pairs: [[["Electric current", "شدة التيار"], ["Ampere", "الأمبير"]], [["Absolute temperature", "درجة الحرارة المطلقة"], ["Kelvin", "الكلفن"]], [["Amount of substance", "كمية المادة"], ["Mole", "المول"]], [["Luminous intensity", "شدة الإضاءة"], ["Candela", "الشمعة (الكانديلا)"]]],
      off: ["SI base units: m, kg, s, A, K, mol, cd.", "الوحدات الأساسية: m وkg وs وA وK وmol وcd."],
      sto: ["Omar's checklist of seven bricks.", "قائمة عمر بالطوب السبع."] },
    tf(false, ["True or false: each vernier division is 1 mm long.", "صواب أم خطأ: طول كل قسم من أقسام الورنية ١ مم."],
      ["False. Each vernier division is 0.9 mm, 0.1 mm less than a main-scale division.", "خطأ؛ قسم الورنية ٠٫٩ مم، أقل بمقدار ٠٫١ مم من قسم المسطرة الرئيسية."],
      ["That 0.1 mm difference is the whole trick of the vernier.", "فرق الـ ٠٫١ مم هو سر الورنية كلها."])
  ];
  X.sec2phyu1l2 = [
    { k: "match", q: ["Match each quantity with its dimensional formula.", "صِل كل كمية بمعادلة أبعادها."],
      pairs: [[["Velocity", "السرعة"], ["LT⁻¹", "LT⁻¹"]], [["Force", "القوة"], ["MLT⁻²", "MLT⁻²"]], [["Work", "الشغل"], ["ML²T⁻²", "ML²T⁻²"]], [["Density", "الكثافة"], ["ML⁻³", "ML⁻³"]]],
      off: ["v = d/t, F = ma, W = Fd, ρ = m/V.", "v = d/t وF = ma وW = Fd وρ = m/V."],
      sto: ["Salma builds each one from L, M and T bricks.", "سلمى تبني كل واحدة من طوب L وM وT."] },
    tf(false, ["True or false: if both sides of an equation have the same dimensions, the equation is certainly correct.", "صواب أم خطأ: إذا تساوت أبعاد طرفي معادلة فهي صحيحة حتمًا."],
      ["False. Matching dimensions does not guarantee correctness (numbers like ½ cannot be checked); only a mismatch is decisive.", "خطأ؛ تساوي الأبعاد لا يضمن الصحة (المعاملات مثل ½ لا تُختبر)، أما اختلافها فيثبت الخطأ."],
      ["Matching is a green light, not a proof.", "التساوي ضوء أخضر لا برهان."])
  ];
  X.sec2phyu1l3 = [
    { k: "match", q: ["Match each example with its type of measurement.", "صِل كل مثال بنوع القياس."],
      pairs: [[["Volume with a graduated cylinder", "الحجم بالمخبار المدرج"], ["Direct", "مباشر"]], [["Volume = length × width × height", "الحجم = الطول × العرض × الارتفاع"], ["Indirect", "غير مباشر"]], [["Density with a hydrometer", "الكثافة بالهيدروميتر"], ["Direct (one tool)", "مباشر (أداة واحدة)"]], [["Density from a balance and a cylinder", "الكثافة بالميزان والمخبار"], ["Indirect (equation)", "غير مباشر (علاقة رياضية)"]]],
      off: ["Direct = one instrument, no equation; indirect = several measurements and an equation.", "المباشر = أداة واحدة بلا علاقة، وغير المباشر = عدة قياسات وعلاقة رياضية."],
      sto: ["Nour counts the tools and the steps.", "نور تعد الأدوات والخطوات."] },
    tf(true, ["True or false: in indirect measurement errors can accumulate.", "صواب أم خطأ: في القياس غير المباشر قد تتراكم الأخطاء."],
      ["True. Each measurement adds its own error to the final result.", "صواب؛ كل عملية قياس تضيف خطأها إلى النتيجة النهائية."],
      ["Three steps, three small slips, one bigger error.", "ثلاث خطوات وثلاث هفوات صغيرة وخطأ أكبر."])
  ];
  X.sec2phyu2l1 = [
    { k: "match", q: ["Match each idea with its graph meaning.", "صِل كل مفهوم بمعناه على المنحنى."],
      pairs: [[["Uniform velocity", "السرعة المنتظمة"], ["Straight d–t line", "خط إزاحة–زمن مستقيم"]], [["Instantaneous velocity", "السرعة اللحظية"], ["Slope of the tangent", "ميل المماس"]], [["Average velocity", "السرعة المتوسطة"], ["Slope of start-to-end line", "ميل الخط من البداية للنهاية"]], [["At rest", "السكون"], ["Horizontal d–t line", "خط إزاحة–زمن أفقي"]]],
      off: ["Velocity is the slope of the displacement–time graph.", "السرعة هي ميل منحنى الإزاحة–الزمن."],
      sto: ["Karim reads the train trip from the graph's steepness.", "كريم يقرأ رحلة القطار من انحدار المنحنى."] },
    tf(false, ["True or false: speed can be negative.", "صواب أم خطأ: السرعة القياسية قد تكون سالبة."],
      ["False. Speed is a scalar and always positive; velocity can be negative when the motion is in the opposite direction.", "خطأ؛ السرعة القياسية كمية قياسية موجبة دائمًا، والسرعة المتجهة قد تكون سالبة في الاتجاه المعاكس."],
      ["The speedometer never shows a minus sign.", "العداد لا يُظهر إشارة سالبة أبدًا."])
  ];
  X.sec2phyu2l2 = [
    { k: "order", q: ["Order the steps to find a car's acceleration from speedometer readings.", "رتب خطوات حساب عجلة سيارة من قراءات العداد."],
      items: [["Read v₁ and v₂ in km/h", "اقرأ v₁ وv₂ بالكيلومتر/ساعة"], ["Convert them to m/s (× 5/18)", "حوّلهما إلى m/s (× 5/18)"], ["Find Δv = v₂ − v₁", "احسب Δv = v₂ − v₁"], ["Divide by Δt", "اقسم على Δt"]],
      off: ["a = (v₂ − v₁)/Δt in m/s².", "a = (v₂ − v₁)/Δt بوحدة m/s²."],
      sto: ["Hana reads, converts, subtracts, divides.", "هنا تقرأ ثم تحوّل ثم تطرح ثم تقسم."] },
    tf(false, ["True or false: a car moving at a constant 90 km/h on a straight road has a large acceleration.", "صواب أم خطأ: سيارة تسير بسرعة ثابتة ٩٠ km/h على طريق مستقيم لها عجلة كبيرة."],
      ["False. Constant velocity means zero acceleration, however fast.", "خطأ؛ السرعة الثابتة تعني عجلة صفرية مهما كانت كبيرة."],
      ["Fast is not the same as accelerating.", "السرعة الكبيرة ليست هي العجلة."])
  ];
  X.sec2phyu2l3 = [
    { k: "match", q: ["Match each term with its meaning.", "صِل كل مصطلح بمعناه."],
      pairs: [[["Inertia", "القصور الذاتي"], ["Resists change of motion", "مقاومة تغيير الحالة الحركية"]], [["Momentum", "كمية الحركة"], ["P = mv", "P = mv"]], [["Force", "القوة"], ["Changes or tries to change motion", "تغير أو تحاول تغيير الحركة"]], [["ΣF = 0", "ΣF = 0"], ["Constant velocity or rest", "سرعة منتظمة أو سكون"]]],
      off: ["These are the key ideas of Newton's first law.", "هذه هي المفاهيم الأساسية لقانون نيوتن الأول."],
      sto: ["Ziad's metro ride in four words.", "رحلة مترو زياد في أربع كلمات."] },
    tf(true, ["True or false: no force is needed to keep an object moving at constant velocity on a frictionless surface.", "صواب أم خطأ: لا تلزم قوة لاستمرار حركة جسم بسرعة منتظمة على سطح عديم الاحتكاك."],
      ["True. By the first law a resultant force is needed only to change the velocity.", "صواب؛ حسب القانون الأول تلزم القوة المحصلة لتغيير السرعة فقط."],
      ["A puck on perfect ice would glide forever.", "قرص على جليد مثالي ينزلق إلى الأبد."])
  ];
  X.sec2phyu2l4 = [
    { k: "match", q: ["Match each law with its formula.", "صِل كل قانون بصيغته الرياضية."],
      pairs: [[["First law", "القانون الأول"], ["ΣF = 0", "ΣF = 0"]], [["Second law", "القانون الثاني"], ["F = ma", "F = ma"]], [["Third law", "القانون الثالث"], ["F₁ = −F₂", "F₁ = −F₂"]], [["Momentum", "كمية الحركة"], ["P = mv", "P = mv"]]],
      off: ["The book's summary of Newton's laws.", "ملخص الكتاب لقوانين نيوتن."],
      sto: ["Farida's four flashcards.", "بطاقات فريدة الأربع."] },
    tf(false, ["True or false: action and reaction cancel because they are equal and opposite.", "صواب أم خطأ: الفعل ورد الفعل يلغي كل منهما الآخر لأنهما متساويان ومتضادان."],
      ["False. They act on two different bodies, so their resultant cannot be taken as zero.", "خطأ؛ يؤثران على جسمين مختلفين فلا يمكن اعتبار محصلتهما صفرًا."],
      ["The rocket still flies.", "الصاروخ ما زال يطير."])
  ];
  X.sec2phyu3l1 = [
    { k: "order", q: ["Order from the LEAST to the MOST dense.", "رتب من الأقل كثافة إلى الأكبر كثافة."],
      items: [["Air (1.29 kg/m³)", "الهواء (1.29 kg/m³)"], ["Water (1000 kg/m³)", "الماء (1000 kg/m³)"], ["Aluminium (2700 kg/m³)", "الألومنيوم (2700 kg/m³)"], ["Mercury (13,600 kg/m³)", "الزئبق (13,600 kg/m³)"], ["Gold (19,300 kg/m³)", "الذهب (19,300 kg/m³)"]],
      off: ["Values from the book's density table.", "القيم من جدول الكثافات في الكتاب."],
      sto: ["From the air in Mariam's room to her mother's gold.", "من هواء غرفة مريم إلى ذهب أمها."] },
    tf(true, ["True or false: relative density has no unit.", "صواب أم خطأ: الكثافة النسبية ليس لها وحدة قياس."],
      ["True. It is the ratio of two densities.", "صواب؛ هي نسبة بين كثافتين."],
      ["\"How many times water?\" is a plain number.", "«كم مرة قدر الماء؟» عدد فقط."])
  ];
  X.sec2phyu3l2 = [
    { k: "order", q: ["Order the steps to find the speed in the narrow part of a pipe.", "رتب خطوات حساب السرعة في الجزء الضيق من الأنبوبة."],
      items: [["Find A₁ = πr₁²", "احسب A₁ = πr₁²"], ["Find A₂ = πr₂²", "احسب A₂ = πr₂²"], ["Write A₁v₁ = A₂v₂", "اكتب A₁v₁ = A₂v₂"], ["Solve v₂ = A₁v₁/A₂", "احسب v₂ = A₁v₁/A₂"]],
      off: ["Continuity: the volume flow rate is the same at every section.", "الاستمرارية: معدل الانسياب الحجمي ثابت عند كل مقطع."],
      sto: ["Adham's thumb trick written as a recipe.", "حيلة إبهام أدهم مكتوبة كخطوات."] },
    tf(false, ["True or false: in laminar flow, streamlines can cross each other.", "صواب أم خطأ: في الانسياب الهادئ يمكن أن تتقاطع خطوط الانسياب."],
      ["False. Streamlines never intersect; each point has one velocity direction.", "خطأ؛ خطوط الانسياب لا تتقاطع، فلكل نقطة اتجاه سرعة واحد."],
      ["Smooth lanes, no crossings.", "حارات منتظمة بلا تقاطعات."])
  ];
  X.sec2phyu3l3 = [
    { k: "order", q: ["Order the liquids from the LOWEST to the HIGHEST viscosity (book experiments).", "رتب السوائل من الأقل لزوجة إلى الأعلى (تجارب الكتاب)."],
      items: [["Alcohol", "الكحول"], ["Water", "الماء"], ["Glycerin", "الجليسرين"], ["Honey", "العسل"]],
      off: ["Alcohol flows faster than water; glycerin and honey are highly viscous, honey most of all.", "الكحول أسرع انسيابًا من الماء، والجليسرين والعسل عاليا اللزوجة والعسل أعلاهما."],
      sto: ["Jana's spoon gets heavier down the list.", "ملعقة جنى تثقل كلما نزلنا في القائمة."] },
    tf(true, ["True or false: the coefficient of viscosity of a pure liquid depends on its type and temperature.", "صواب أم خطأ: معامل لزوجة السائل النقي يعتمد على نوعه ودرجة حرارته."],
      ["True. Warm honey flows more easily than cold honey.", "صواب؛ العسل الدافئ ينساب أسهل من البارد."],
      ["Jana warms the honey jar to pour it.", "جنى تدفئ برطمان العسل لتصبه."])
  ];
  X.sec2phyu3l4 = [
    { k: "match", q: ["Match each value with an equal pressure (standard atmosphere).", "صِل كل قيمة بما يساويها (الضغط الجوي المعتاد)."],
      pairs: [[["1 atm", "1 atm"], ["76 cmHg", "76 cmHg"]], [["760 torr", "760 تور"], ["1.013 bar", "1.013 bar"]], [["1 bar", "1 بار"], ["10⁵ Pa", "10⁵ Pa"]], [["1 torr", "1 تور"], ["1 mmHg", "1 mmHg"]]],
      off: ["1 atm = 76 cmHg = 760 torr = 1.013 bar = 1.013 × 10⁵ Pa.", "1 atm = 76 cmHg = 760 تور = 1.013 bar = 1.013 × 10⁵ Pa."],
      sto: ["Same air, many units.", "نفس الهواء ووحدات كثيرة."] },
    tf(true, ["True or false: tilting a barometer tube does not change the vertical height of the mercury column.", "صواب أم خطأ: إمالة أنبوبة البارومتر لا تغير الارتفاع الرأسي لعمود الزئبق."],
      ["True. Pₐ = ρgh depends on the vertical height only; the mercury fills more of the tilted tube.", "صواب؛ Pₐ = ρgh تعتمد على الارتفاع الرأسي فقط، والزئبق يملأ جزءًا أطول من الأنبوبة المائلة."],
      ["Hassan tilts it and the top stays at 76 cm high.", "حسن يميلها فيبقى السطح على ارتفاع ٧٦ سم."])
  ];
  X.sec2phyu3l5 = [
    { k: "order", q: ["Order how a hydraulic car brake works.", "رتب طريقة عمل فرامل السيارة الهيدروليكية."],
      items: [["The driver presses the pedal", "يضغط السائق الدواسة"], ["The master cylinder pressurises the brake fluid", "الأسطوانة الرئيسية تضغط زيت الفرامل"], ["The pressure is transmitted in full to the wheel cylinders", "ينتقل الضغط بتمامه إلى أسطوانات العجلات"], ["Pads or shoes press on the disc or drum", "تضغط التيل أو الأحذية على القرص أو الطنبورة"]],
      off: ["Pascal's principle carries the pressure through the fluid.", "قاعدة باسكال تنقل الضغط عبر السائل."],
      sto: ["Mostafa follows the brake line from pedal to wheel.", "مصطفى يتتبع خط الفرامل من الدواسة إلى العجلة."] },
    tf(false, ["True or false: a hydraulic press multiplies both force and work.", "صواب أم خطأ: المكبس الهيدروليكي يضاعف القوة والشغل معًا."],
      ["False. f y₁ = F y₂: it multiplies force but the work stays the same (ideal press).", "خطأ؛ f y₁ = F y₂: يضاعف القوة لكن الشغل يبقى ثابتًا (مكبس مثالي)."],
      ["Small push, long stroke; big lift, short rise.", "دفعة صغيرة ومشوار طويل، رفعة كبيرة وارتفاع قصير."])
  ];
  X.sec2phyu4l1 = [
    { k: "order", q: ["Order the steps of verifying Boyle's law.", "رتب خطوات التحقق من قانون بويل."],
      items: [["Level the mercury with tap A open", "سوِّ الزئبق والصنبور A مفتوح"], ["Close the tap; record V and P = Pₐ", "أغلق الصنبور وسجل V وP = Pₐ"], ["Raise or lower tube B; record V and P = Pₐ ± h", "ارفع أو اخفض الأنبوبة B وسجل V وP = Pₐ ± h"], ["Plot V against 1/P: a straight line", "ارسم V مقابل 1/P: خط مستقيم"]],
      off: ["The book's procedure for Boyle's apparatus.", "خطوات الكتاب لجهاز بويل."],
      sto: ["Habiba's lab notebook, step by step.", "كراسة معمل حبيبة خطوة بخطوة."] },
    tf(true, ["True or false: the pressure of a mixture of gases equals the sum of their partial pressures.", "صواب أم خطأ: ضغط خليط من الغازات يساوي مجموع ضغوطها الجزئية."],
      ["True. 36 + 100 = 136 cmHg in the book's example.", "صواب؛ 36 + 100 = 136 cmHg في مثال الكتاب."],
      ["Each gas pushes on the walls as if alone.", "كل غاز يضغط على الجدران كأنه وحده."])
  ];
  X.sec2phyu4l2 = [
    { k: "match", q: ["Match each Celsius temperature with its kelvin value.", "صِل كل درجة سيلزيوس بقيمتها بالكلفن."],
      pairs: [[["−273°C", "−273°C"], ["0 K", "0 K"]], [["0°C", "0°C"], ["273 K", "273 K"]], [["37°C", "37°C"], ["310 K", "310 K"]], [["100°C", "100°C"], ["373 K", "373 K"]]],
      off: ["T(K) = t(°C) + 273.", "T(K) = t(°C) + 273."],
      sto: ["Laila adds 273 every time.", "ليلى تضيف 273 في كل مرة."] },
    tf(false, ["True or false: at constant pressure, the volume of a gas doubles when its Celsius temperature doubles from 20°C to 40°C.", "صواب أم خطأ: عند ثبوت الضغط يتضاعف حجم الغاز عندما تتضاعف درجته السيلزيوس من 20°C إلى 40°C."],
      ["False. V ∝ T in kelvin: 313/293 ≈ 1.07, only a 7% increase.", "خطأ؛ V ∝ T بالكلفن: 313/293 ≈ 1.07، أي زيادة 7٪ فقط."],
      ["Celsius numbers fool you; kelvin tells the truth.", "أرقام السيلزيوس تخدعك والكلفن يقول الحقيقة."])
  ];
  X.sec2phyu4l3 = [
    { k: "order", q: ["Order the steps to solve a general gas law problem.", "رتب خطوات حل مسألة على القانون العام للغازات."],
      items: [["List P₁, V₁, T₁ and P₂, T₂", "اكتب P₁ وV₁ وT₁ وP₂ وT₂"], ["Convert temperatures to kelvin (+273)", "حوّل درجات الحرارة إلى كلفن (+273)"], ["Write P₁V₁/T₁ = P₂V₂/T₂", "اكتب P₁V₁/T₁ = P₂V₂/T₂"], ["Solve for V₂", "احسب V₂"]],
      off: ["Kelvin first, then the law.", "الكلفن أولًا ثم القانون."],
      sto: ["Youssef's bubble problem in four lines.", "مسألة فقاعة يوسف في أربعة أسطر."] },
    tf(true, ["True or false: STP means 0°C and 76 cmHg.", "صواب أم خطأ: الظروف القياسية (STP) تعني 0°C و76 cmHg."],
      ["True. Standard temperature 273 K and standard pressure 76 cmHg.", "صواب؛ درجة الحرارة القياسية 273 K والضغط القياسي 76 cmHg."],
      ["The reference point for comparing gas volumes.", "نقطة المرجع لمقارنة حجوم الغازات."])
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size, anchor) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="' + (anchor || "middle") + '" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function line(x1, y1, x2, y2, c, w, extra) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2) + '" ' + (extra || "") + "/>"; }
  function rect(x, y, w, h, f, s, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 0) + '" fill="' + f + '"' + (s ? ' stroke="' + s + '" stroke-width="2"' : "") + "/>"; }
  function axes(x0, y0, w, h, xl, yl, id) {
    return line(x0, y0, x0 + w, y0, "var(--muted)", 2, 'marker-end="url(#' + id + ')"') + line(x0, y0, x0, y0 - h, "var(--muted)", 2, 'marker-end="url(#' + id + ')"') + tx(x0 + w - 4, y0 + 16, xl, mut, 11) + tx(x0 + 4, y0 - h - 6, yl, mut, 11, "start");
  }

  D.sec2phyu1l1 = {
    title: ["Reading a vernier caliper", "قراءة القدمة ذات الورنية"],
    svg: function () {
      var s = rect(20, 60, 360, 34, "var(--bg-2)", "var(--muted)", 4), i;
      for (i = 0; i <= 50; i++) { var mx = 30 + i * 7; s += line(mx, 94, mx, 94 - (i % 10 === 0 ? 18 : i % 5 === 0 ? 12 : 7), "var(--ink)", 1.2); if (i % 10 === 0) s += tx(mx, 74, String(i / 10 * 1), mut, 10); }
      var vz = 30 + 29.6 * 7; // 1 mm = 7 px
      s += rect(vz - 6, 96, 10 * 6.3 + 14, 30, "#bfdbfe", "#2563eb", 4);
      for (i = 0; i <= 10; i++) { var px = vz + i * 6.3; s += line(px, 96, px, 96 + (i % 5 === 0 ? 14 : 9), i === 6 ? "#dc2626" : "#1e3a8a", i === 6 ? 2.5 : 1.2); }
      s += tx(vz, 140, "0", mut, 10) + tx(vz + 6 * 6.3, 140, "6", 'style="fill:#dc2626"', 11);
      s += rect(30, 150, 50, 50, "#fde68a", "#b45309", 4) + tx(55, 215, t("object", "الجسم"), mut, 10);
      s += tx(200, 230, "29 mm + 6 × 0.1 mm = 29.6 mm", ink, 13);
      s += tx(30, 50, t("main scale (cm)", "المسطرة الرئيسية (سم)"), mut, 10, "start");
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [130, 80, ["Main scale", "المسطرة الرئيسية"], ["Divided in millimetres. Read the mark just before the vernier zero: 29 mm.", "مقسمة بالمليمتر، ونقرأ العلامة التي تسبق صفر الورنية مباشرة: ٢٩ مم."]],
      [237, 112, ["Vernier scale", "الورنية"], ["10 divisions, each 0.9 mm, so each is 0.1 mm shorter than a main division.", "عشرة أقسام كل منها ٠٫٩ مم، أي أقل بمقدار ٠٫١ مم من قسم المسطرة."]],
      [275, 140, ["Aligned line", "الخط المنطبق"], ["The 6th vernier line matches a main line: add 6 × 0.1 = 0.6 mm.", "الخط السادس من الورنية ينطبق على خط من المسطرة: نضيف ٦ × ٠٫١ = ٠٫٦ مم."]],
      [55, 175, ["Object between the jaws", "الجسم بين الفكين"], ["Press gently; repeat several times and take the average.", "اضغط برفق، وكرر القياس عدة مرات وخذ المتوسط."]],
      [200, 225, ["Total reading", "القراءة الكلية"], ["Main scale + vernier = 29.6 mm.", "المسطرة الرئيسية + الورنية = ٢٩٫٦ مم."]]
    ]
  };

  D.sec2phyu1l2 = {
    title: ["Building dimensional formulas", "بناء معادلات الأبعاد"],
    svg: function () {
      var s = arrowDef("s2pa1", "var(--muted)");
      var rows = [["v = d / t", "LT⁻¹", "m/s"], ["a = v / t", "LT⁻²", "m/s²"], ["F = m a", "MLT⁻²", "N = kg·m/s²"], ["P = F / A", "ML⁻¹T⁻²", "Pa = N/m²"], ["W = F d", "ML²T⁻²", "J = kg·m²/s²"]];
      s += tx(70, 24, t("Law", "العلاقة"), mut, 11) + tx(200, 24, t("Dimensions", "الأبعاد"), mut, 11) + tx(330, 24, t("SI unit", "الوحدة"), mut, 11);
      rows.forEach(function (r, i) {
        var y = 52 + i * 38;
        s += rect(12, y - 18, 376, 30, i % 2 ? "var(--bg-2)" : "var(--card)", "var(--line)", 8);
        s += tx(70, y + 2, r[0], ink, 13) + tx(200, y + 2, r[1], 'style="fill:#7c3aed"', 15) + tx(330, y + 2, r[2], ink, 11);
      });
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 54, ["Velocity", "السرعة"], ["Distance ÷ time: L ÷ T = LT⁻¹, unit m/s.", "المسافة ÷ الزمن: L ÷ T = LT⁻¹، والوحدة m/s."]],
      [200, 92, ["Acceleration", "العجلة"], ["Velocity ÷ time: LT⁻¹ ÷ T = LT⁻², unit m/s².", "السرعة ÷ الزمن: LT⁻¹ ÷ T = LT⁻²، والوحدة m/s²."]],
      [330, 130, ["The newton", "النيوتن"], ["Mass × acceleration: kg·m/s² = 1 N.", "الكتلة × العجلة: kg·m/s² = 1 N."]],
      [200, 168, ["Pressure", "الضغط"], ["MLT⁻² ÷ L² = ML⁻¹T⁻²: the pascal.", "MLT⁻² ÷ L² = ML⁻¹T⁻²: الباسكال."]],
      [200, 206, ["Work and energy", "الشغل والطاقة"], ["MLT⁻² × L = ML²T⁻²: the same as ½mv², so KE = ½mv² is dimensionally consistent.", "MLT⁻² × L = ML²T⁻²، مثل ½mv²، فالعلاقة KE = ½mv² متجانسة الأبعاد."]]
    ]
  };

  D.sec2phyu1l3 = {
    title: ["Parallax: where to put your eye", "زاوية النظر: أين تضع عينك؟"],
    svg: function () {
      var s = arrowDef("s2pa2", "#dc2626"), i;
      s += rect(30, 170, 340, 26, "#fef3c7", "#b45309", 4);
      for (i = 0; i <= 16; i++) s += line(40 + i * 20, 170, 40 + i * 20, 170 + (i % 2 ? 8 : 14), "#78350f", 1.5);
      s += rect(60, 138, 200, 14, "#facc15", "#a16207", 7) + '<path d="M260 138 L285 145 L260 152 Z" fill="#a16207"/>';
      s += '<circle cx="285" cy="40" r="10" fill="#0ea5e9"/>' + line(285, 50, 285, 168, "#16a34a", 2, 'stroke-dasharray="5 4"');
      s += '<circle cx="150" cy="40" r="10" fill="#94a3b8"/>' + line(150, 50, 300, 178, "#dc2626", 2, 'stroke-dasharray="5 4"');
      s += tx(285, 22, t("correct", "صحيح"), 'style="fill:#16a34a"', 11) + tx(150, 22, t("wrong", "خطأ"), 'style="fill:#dc2626"', 11);
      s += tx(200, 222, t("a ruler in mm is more precise than one in cm", "المسطرة بالمليمتر أدق من المسطرة بالسنتيمتر"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [285, 40, ["Eye perpendicular", "عين عمودية"], ["The line of sight is perpendicular to the scale at the tip: the true reading.", "خط النظر عمودي على التدريج عند طرف الجسم: القراءة الصحيحة."]],
      [150, 40, ["Eye at an angle", "عين مائلة"], ["Looking from the side shifts the reading: a technique error (parallax).", "النظر من الجانب يزيح القراءة: خطأ في طريقة القياس."]],
      [160, 145, ["The pencil", "القلم"], ["Its tip is raised above the scale, so the angle of sight matters.", "طرفه مرتفع عن التدريج، لذلك تؤثر زاوية النظر."]],
      [200, 184, ["The ruler", "المسطرة"], ["The smallest division sets the precision; choose the right tool.", "أصغر تدريج يحدد الدقة، فاختر الأداة المناسبة."]],
      [200, 220, ["Repeat and average", "كرر وخذ المتوسط"], ["Five readings 10.1, 10.0, 9.8, 10.0, 10.0 cm give a mean of 9.98 cm.", "خمس قراءات ١٠٫١ و١٠٫٠ و٩٫٨ و١٠٫٠ و١٠٫٠ سم متوسطها ٩٫٩٨ سم."]]
    ]
  };

  D.sec2phyu2l1 = {
    title: ["Displacement–time graphs", "منحنيات الإزاحة–الزمن"],
    svg: function () {
      var s = arrowDef("s2pa3", "var(--muted)");
      s += axes(40, 200, 330, 180, "t (s)", "d (m)", "s2pa3");
      s += line(40, 200, 200, 80, "#2563eb", 3);
      s += '<path d="M40 200 Q 260 200 360 50" fill="none" stroke="#f97316" stroke-width="3"/>';
      s += line(230, 175, 350, 105, "#16a34a", 2, 'stroke-dasharray="5 4"');
      s += line(40, 200, 360, 50, "#a855f7", 2, 'stroke-dasharray="2 4"');
      s += tx(130, 120, t("uniform", "منتظمة"), 'style="fill:#2563eb"', 11) + tx(330, 180, t("tangent", "المماس"), 'style="fill:#16a34a"', 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [120, 140, ["Uniform velocity", "سرعة منتظمة"], ["A straight line: equal displacements in equal times. The slope is the velocity.", "خط مستقيم: إزاحات متساوية في أزمنة متساوية، والميل يساوي السرعة."]],
      [300, 120, ["Variable velocity", "سرعة متغيرة"], ["A curve: the displacement in each second changes.", "منحنى: الإزاحة في كل ثانية تتغير."]],
      [290, 140, ["Instantaneous velocity", "السرعة اللحظية"], ["Slope of the tangent at that instant, like the speedometer reading.", "ميل المماس عند تلك اللحظة، مثل قراءة العداد."]],
      [200, 125, ["Average velocity", "السرعة المتوسطة"], ["Slope of the line from start to end = total displacement ÷ total time.", "ميل الخط من البداية للنهاية = الإزاحة الكلية ÷ الزمن الكلي."]],
      [40, 200, ["Origin", "نقطة الأصل"], ["Displacement is measured from the starting point; it can be negative if the object goes back.", "تقاس الإزاحة من نقطة البداية، وقد تكون سالبة إذا عاد الجسم للخلف."]]
    ]
  };

  D.sec2phyu2l2 = {
    title: ["Positive, zero and negative acceleration", "العجلة الموجبة والصفرية والسالبة"],
    svg: function () {
      var s = "";
      s += '<path d="M10 70 L130 150 L270 150 L390 70" fill="none" stroke="var(--muted)" stroke-width="4"/>';
      s += '<circle cx="70" cy="100" r="11" fill="#22c55e"/><circle cx="200" cy="139" r="11" fill="#3b82f6"/><circle cx="330" cy="100" r="11" fill="#ef4444"/>';
      s += tx(70, 180, "a > 0", 'style="fill:#16a34a"', 14) + tx(200, 180, "a = 0", 'style="fill:#2563eb"', 14) + tx(330, 180, "a < 0", 'style="fill:#dc2626"', 14);
      s += tx(200, 215, "a = (v₂ − v₁) / (t₂ − t₁)", ink, 14) + tx(200, 236, "(10 − 5) / (2 − 1) = 5 m/s²", mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 100, ["Rolling down", "الهبوط"], ["Velocity increases with time: positive acceleration (gas pedal).", "تزداد السرعة مع الزمن: عجلة موجبة (دواسة البنزين)."]],
      [200, 139, ["Smooth flat part", "الجزء الأفقي الأملس"], ["Velocity does not change: zero acceleration, yet the ball is moving.", "السرعة لا تتغير: عجلة صفرية مع أن الكرة متحركة."]],
      [330, 100, ["Rolling up", "الصعود"], ["Velocity decreases: negative acceleration (brake).", "تقل السرعة: عجلة سالبة (الفرامل)."]],
      [200, 212, ["The definition", "التعريف"], ["Acceleration = change in velocity ÷ change in time, in m/s².", "العجلة = التغير في السرعة ÷ التغير في الزمن، بوحدة m/s²."]],
      [200, 236, ["Book example", "مثال الكتاب"], ["The speedometer gains 5 m/s every second: a = 5 m/s².", "العداد يزيد ٥ m/s كل ثانية: a = ٥ m/s²."]]
    ]
  };

  D.sec2phyu2l3 = {
    title: ["Inertia in a bus", "القصور الذاتي في الأتوبيس"],
    svg: function () {
      var s = arrowDef("s2pa4", "#dc2626") + arrowDef("s2pa5", "#2563eb");
      s += rect(40, 60, 320, 100, "#fde68a", "#b45309", 14) + rect(60, 75, 60, 35, "#bae6fd", null, 4) + rect(140, 75, 60, 35, "#bae6fd", null, 4) + rect(220, 75, 60, 35, "#bae6fd", null, 4);
      s += '<circle cx="100" cy="175" r="16" fill="#334155"/><circle cx="300" cy="175" r="16" fill="#334155"/>';
      s += '<circle cx="250" cy="125" r="8" fill="#7c3aed"/>' + line(250, 133, 250, 155, "#7c3aed", 4);
      s += line(250, 130, 300, 130, "#dc2626", 3, 'marker-end="url(#s2pa4)"');
      s += line(170, 205, 80, 205, "#2563eb", 3, 'marker-end="url(#s2pa5)"');
      s += tx(200, 225, t("bus brakes", "الأتوبيس يفرمل"), 'style="fill:#2563eb"', 11) + tx(320, 120, t("passenger", "الراكب"), 'style="fill:#dc2626"', 11);
      s += tx(200, 40, "P = m v", ink, 16);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [280, 130, ["Inertia of motion", "قصور ذاتي للحركة"], ["When the bus brakes, the passenger tends to keep moving forward.", "عند فرملة الأتوبيس يميل الراكب للاستمرار في الحركة للأمام."]],
      [120, 205, ["Resultant force", "قوة محصلة"], ["The brakes give a resultant force on the bus, changing its velocity.", "الفرامل تؤثر بقوة محصلة على الأتوبيس فتغير سرعته."]],
      [200, 40, ["Momentum", "كمية الحركة"], ["A full bus has more mass, so more momentum and is harder to stop.", "الأتوبيس الممتلئ كتلته أكبر فكمية حركته أكبر وإيقافه أصعب."]],
      [100, 175, ["Friction", "الاحتكاك"], ["Without friction a rolling bus would never stop by itself.", "بدون احتكاك لا يتوقف الأتوبيس المتحرك من تلقاء نفسه."]],
      [150, 92, ["First law", "القانون الأول"], ["ΣF = 0 means rest or constant velocity in a straight line.", "ΣF = 0 تعني سكونًا أو سرعة منتظمة في خط مستقيم."]]
    ]
  };

  D.sec2phyu2l4 = {
    title: ["F = ma and action–reaction", "F = ma والفعل ورد الفعل"],
    svg: function () {
      var s = arrowDef("s2pa6", "var(--muted)") + arrowDef("s2pa7", "#dc2626") + arrowDef("s2pa8", "#2563eb");
      s += axes(30, 200, 170, 170, "F (N)", "a", "s2pa6");
      s += line(30, 200, 190, 60, "#f97316", 3) + line(30, 200, 190, 130, "#0ea5e9", 3);
      s += tx(160, 70, "100 kg", 'style="fill:#f97316"', 11) + tx(165, 150, "200 kg", 'style="fill:#0ea5e9"', 11);
      s += '<path d="M300 60 L320 100 L310 100 L310 170 L290 170 L290 100 L280 100 Z" fill="#94a3b8" stroke="#475569" stroke-width="2"/>';
      s += line(300, 175, 300, 225, "#dc2626", 3, 'marker-end="url(#s2pa7)"') + line(330, 140, 330, 70, "#2563eb", 3, 'marker-end="url(#s2pa8)"');
      s += tx(360, 215, t("gases", "الغازات"), 'style="fill:#dc2626"', 11) + tx(360, 100, t("rocket", "الصاروخ"), 'style="fill:#2563eb"', 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [130, 100, ["a ∝ F", "a ∝ F"], ["At constant mass the acceleration grows in proportion to the force.", "عند ثبوت الكتلة تزداد العجلة بتناسب طردي مع القوة."]],
      [165, 150, ["a ∝ 1/m", "a ∝ 1/m"], ["The same force gives the 200 kg body half the acceleration of the 100 kg body.", "نفس القوة تعطي الجسم ٢٠٠ كجم نصف عجلة الجسم ١٠٠ كجم."]],
      [300, 205, ["Action", "الفعل"], ["The rocket pushes a large mass of burning gases downwards.", "الصاروخ يدفع كتلة كبيرة من الغازات المحترقة لأسفل."]],
      [330, 100, ["Reaction", "رد الفعل"], ["The gases push the rocket upwards with an equal force: F₁ = −F₂.", "الغازات تدفع الصاروخ لأعلى بقوة مساوية: F₁ = −F₂."]],
      [40, 200, ["1 newton", "١ نيوتن"], ["The force giving 1 kg an acceleration of 1 m/s².", "القوة التي تكسب ١ كجم عجلة ١ m/s²."]]
    ]
  };

  D.sec2phyu3l1 = {
    title: ["Density and floating", "الكثافة والطفو"],
    svg: function () {
      var s = "";
      [[30, "#bfdbfe", t("water", "الماء"), "1000"], [150, "#fde68a", t("glycerin", "الجليسرين"), "1260"], [270, "#cbd5e1", t("mercury", "الزئبق"), "13,600"]].forEach(function (b) {
        s += rect(b[0], 60, 100, 130, "none", "var(--muted)", 6) + rect(b[0] + 2, 90, 96, 98, b[1], null, 4) + tx(b[0] + 50, 210, b[2], ink, 12) + tx(b[0] + 50, 226, b[3] + " kg/m³", mut, 10);
      });
      s += rect(55, 160, 26, 26, "#64748b") + rect(175, 72, 26, 26, "#a16207") + rect(300, 74, 26, 26, "#64748b");
      s += tx(200, 30, "ρ = m / V", ink, 18);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [68, 173, ["Iron sinks in water", "الحديد يغوص في الماء"], ["7900 kg/m³ is greater than 1000 kg/m³.", "7900 kg/m³ أكبر من 1000 kg/m³."]],
      [188, 85, ["Wood floats", "الخشب يطفو"], ["An object less dense than the liquid floats.", "الجسم الأقل كثافة من السائل يطفو."]],
      [313, 87, ["Iron floats on mercury", "الحديد يطفو على الزئبق"], ["7900 kg/m³ is less than 13,600 kg/m³.", "7900 kg/m³ أقل من 13,600 kg/m³."]],
      [200, 30, ["Density", "الكثافة"], ["Mass per unit volume in kg/m³; relative density = ρ ÷ 1000 (no unit).", "كتلة وحدة الحجوم بوحدة kg/m³، والكثافة النسبية = ρ ÷ 1000 (بلا وحدة)."]],
      [80, 120, ["Why densities differ", "سبب اختلاف الكثافة"], ["Different atomic or molecular masses and different spaces between particles.", "اختلاف الكتلة الذرية أو الجزيئية والمسافات البينية."]]
    ]
  };

  D.sec2phyu3l2 = {
    title: ["Continuity in a narrowing pipe", "الاستمرارية في أنبوبة تضيق"],
    svg: function () {
      var s = arrowDef("s2pa9", "#2563eb");
      s += '<path d="M10 60 L160 60 L240 95 L390 95 L390 145 L240 145 L160 180 L10 180 Z" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>';
      [80, 100, 120, 140, 160].forEach(function (y, i) { s += '<path d="M14 ' + y + ' L160 ' + y + ' L240 ' + (100 + i * 10) + ' L386 ' + (100 + i * 10) + '" fill="none" stroke="#60a5fa" stroke-width="1.5"/>'; });
      s += line(40, 120, 90, 120, "#2563eb", 3, 'marker-end="url(#s2pa9)"') + line(270, 120, 370, 120, "#2563eb", 3, 'marker-end="url(#s2pa9)"');
      s += tx(70, 45, "A₁ , v₁", ink, 13) + tx(320, 80, "A₂ , v₂", ink, 13) + tx(200, 222, "A₁ v₁ = A₂ v₂", ink, 16);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [60, 120, ["Wide section", "المقطع الواسع"], ["Large area A₁: the liquid moves slowly (v₁ small).", "مساحة كبيرة A₁: يتحرك السائل ببطء (v₁ صغيرة)."]],
      [320, 120, ["Narrow section", "المقطع الضيق"], ["Small area A₂: the liquid moves faster. Halving the diameter makes it 4 times faster.", "مساحة صغيرة A₂: يتحرك السائل أسرع، ونصف القطر يجعله أسرع ٤ مرات."]],
      [200, 108, ["Streamlines", "خطوط الانسياب"], ["They never cross; closer lines mean faster flow.", "لا تتقاطع، وتقاربها يعني سرعة أكبر."]],
      [200, 220, ["Continuity equation", "معادلة الاستمرارية"], ["Volume flow rate Qv = Av is the same at every section (conservation of mass).", "معدل الانسياب الحجمي Qv = Av ثابت عند كل مقطع (بقاء الكتلة)."]],
      [370, 120, ["Steady flow", "الانسياب المستقر"], ["The pipe is full and the velocity at each point does not change with time.", "الأنبوبة ممتلئة والسرعة عند كل نقطة لا تتغير مع الزمن."]]
    ]
  };

  D.sec2phyu3l3 = {
    title: ["Liquid layers between two plates", "طبقات السائل بين لوحين"],
    svg: function () {
      var s = arrowDef("s2pa10", "#2563eb") + arrowDef("s2pa11", "#dc2626"), i;
      s += rect(40, 40, 320, 14, "#64748b", null, 3) + rect(40, 186, 320, 14, "#334155", null, 3);
      s += rect(40, 54, 320, 132, "#fef3c7");
      for (i = 0; i < 6; i++) { var y = 172 - i * 22, L = 12 + i * 34; s += line(120, y, 120 + L, y, "#2563eb", 2.5, 'marker-end="url(#s2pa10)"'); }
      s += line(300, 30, 380, 30, "#dc2626", 3, 'marker-end="url(#s2pa11)"') + tx(340, 22, "F , v", 'style="fill:#dc2626"', 12);
      s += line(70, 54, 70, 186, "var(--muted)", 1.5, 'stroke-dasharray="4 3"') + tx(60, 125, "d", ink, 14);
      s += tx(200, 226, "F = η A v / d", ink, 16);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 46, ["Moving plate", "اللوح المتحرك"], ["The layer touching it moves with it at speed v.", "الطبقة الملاصقة له تتحرك معه بالسرعة v."]],
      [200, 193, ["Fixed plate", "اللوح الثابت"], ["Adhesion holds the touching layer at rest.", "قوى التلاصق تجعل الطبقة الملاصقة ساكنة."]],
      [190, 110, ["Layers in between", "الطبقات البينية"], ["Speeds rise steadily from 0 to v; friction between layers is viscosity.", "تتدرج السرعات من صفر إلى v، والاحتكاك بين الطبقات هو اللزوجة."]],
      [60, 125, ["Distance d", "المسافة d"], ["F ∝ 1/d: a thinner layer needs a larger force.", "F ∝ 1/d: الطبقة الأرق تحتاج قوة أكبر."]],
      [200, 224, ["Coefficient of viscosity", "معامل اللزوجة"], ["η = Fd/(Av), unit N·s/m² = kg·m⁻¹·s⁻¹; it depends on the liquid and its temperature.", "η = Fd/(Av) ووحدته N·s/m² = kg·m⁻¹·s⁻¹، ويعتمد على نوع السائل ودرجة حرارته."]]
    ]
  };

  D.sec2phyu3l4 = {
    title: ["Pressure in a liquid and the barometer", "الضغط في السائل والبارومتر"],
    svg: function () {
      var s = "";
      s += rect(20, 40, 160, 160, "none", "var(--muted)", 4) + rect(22, 60, 156, 138, "#bfdbfe");
      s += '<circle cx="100" cy="110" r="5" fill="#dc2626"/><circle cx="100" cy="170" r="5" fill="#dc2626"/><circle cx="50" cy="170" r="5" fill="#dc2626"/>';
      s += line(150, 60, 150, 170, "#1e3a8a", 1.5, 'stroke-dasharray="4 3"') + tx(162, 120, "h", ink, 13);
      s += tx(100, 225, "P = Pₐ + ρ g h", ink, 14);
      s += rect(240, 200, 140, 20, "#94a3b8", null, 4) + rect(296, 30, 24, 180, "none", "var(--muted)", 4) + rect(298, 62, 20, 148, "#94a3b8");
      s += line(330, 62, 330, 200, "#1e3a8a", 1.5, 'stroke-dasharray="4 3"') + tx(356, 130, "0.76 m", ink, 11);
      s += tx(308, 46, t("vacuum", "فراغ"), mut, 9);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [100, 110, ["Shallow point", "نقطة قريبة من السطح"], ["Less depth, less pressure.", "عمق أقل وضغط أقل."]],
      [100, 170, ["Deep point", "نقطة عميقة"], ["Pressure increases with depth h and with density ρ.", "يزداد الضغط بزيادة العمق h والكثافة ρ."]],
      [50, 170, ["Same level, same pressure", "نفس المستوى نفس الضغط"], ["All points on one horizontal level in a still liquid have equal pressure.", "جميع النقاط في مستوى أفقي واحد في سائل ساكن لها نفس الضغط."]],
      [308, 46, ["Torricelli vacuum", "فراغ تورشيللي"], ["Empty space above the mercury (only a little mercury vapour).", "حيز فارغ فوق الزئبق (عدا قليل من بخار الزئبق)."]],
      [345, 130, ["Mercury column", "عمود الزئبق"], ["0.76 m at sea level: Pₐ = ρgh = 1.013 × 10⁵ Pa, whatever the tube's tilt or area.", "0.76 m عند سطح البحر: Pₐ = ρgh = 1.013 × 10⁵ Pa مهما كان ميل الأنبوبة أو مساحتها."]]
    ]
  };

  D.sec2phyu3l5 = {
    title: ["The hydraulic press", "المكبس الهيدروليكي"],
    svg: function () {
      var s = arrowDef("s2pa12", "#dc2626") + arrowDef("s2pa13", "#16a34a");
      s += '<path d="M60 90 L90 90 L90 180 L280 180 L280 110 L360 110 L360 210 L60 210 Z" fill="#fde68a" stroke="#b45309" stroke-width="3"/>';
      s += rect(58, 80, 34, 12, "#64748b", null, 2) + rect(276, 100, 88, 12, "#64748b", null, 2);
      s += line(75, 30, 75, 76, "#dc2626", 3, 'marker-end="url(#s2pa12)"') + tx(55, 40, "f", 'style="fill:#dc2626"', 14);
      s += line(320, 96, 320, 40, "#16a34a", 3, 'marker-end="url(#s2pa13)"') + tx(345, 50, "F", 'style="fill:#16a34a"', 14);
      s += tx(75, 110, "a", ink, 13) + tx(320, 135, "A", ink, 13);
      s += tx(200, 232, "f / a = F / A ,  η = A / a", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [75, 60, ["Small force", "قوة صغيرة"], ["f on the small piston of area a makes a pressure P = f/a.", "القوة f على المكبس الصغير مساحته a تحدث ضغطًا P = f/a."]],
      [200, 195, ["Pascal's principle", "قاعدة باسكال"], ["The liquid transmits the pressure in full to every part and to the large piston.", "السائل ينقل الضغط بتمامه إلى كل أجزائه وإلى المكبس الكبير."]],
      [320, 70, ["Large force", "قوة كبيرة"], ["F = P × A: with a = 10 cm², A = 800 cm², 100 N becomes 8000 N.", "F = P × A: مع a = 10 cm² وA = 800 cm² تصبح 100 N تساوي 8000 N."]],
      [200, 230, ["Mechanical advantage", "الفائدة الآلية"], ["η = A/a = F/f = y₁/y₂; the small piston moves 80 cm to raise the large one 1 cm.", "η = A/a = F/f = y₁/y₂؛ يتحرك المكبس الصغير 80 cm ليرتفع الكبير 1 cm."]],
      [320, 135, ["Uses", "الاستخدامات"], ["Car brakes, hydraulic lifts in service stations and excavators.", "فرامل السيارات والروافع الهيدروليكية في محطات الخدمة والحفارات."]]
    ]
  };

  D.sec2phyu4l1 = {
    title: ["Boyle's law: P × V = constant", "قانون بويل: P × V = مقدار ثابت"],
    svg: function () {
      var s = arrowDef("s2pa14", "var(--muted)");
      s += axes(40, 200, 150, 170, "1/P", "V", "s2pa14");
      s += line(40, 200, 180, 50, "#7c3aed", 3);
      [[70, 168], [100, 136], [130, 104], [160, 71]].forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#f97316"/>'; });
      s += rect(240, 60, 60, 140, "none", "var(--muted)", 6) + rect(242, 110, 56, 88, "#e0f2fe") + rect(238, 100, 68, 10, "#64748b", null, 3) + line(272, 100, 272, 40, "#64748b", 6);
      [[255, 130], [280, 150], [262, 175], [287, 125], [270, 190], [250, 160]].forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#2563eb"/>'; });
      s += tx(340, 120, "P₁V₁", ink, 14) + tx(340, 142, "=", ink, 14) + tx(340, 164, "P₂V₂", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [110, 125, ["Straight line", "خط مستقيم"], ["V against 1/P is a straight line: V is inversely proportional to P.", "V مقابل 1/P خط مستقيم: الحجم يتناسب عكسيًا مع الضغط."]],
      [272, 100, ["Piston", "المكبس"], ["Pushing it in halves the volume and doubles the pressure (T constant).", "دفعه للداخل ينصف الحجم ويضاعف الضغط (عند ثبوت T)."]],
      [270, 160, ["Gas molecules", "جزيئات الغاز"], ["Random motion and collisions with the walls cause the pressure; large spaces make gases compressible.", "حركتها العشوائية واصطدامها بالجدران يسببان الضغط، والمسافات البينية الكبيرة تجعل الغاز قابلًا للانضغاط."]],
      [340, 142, ["Boyle's law", "قانون بويل"], ["At constant temperature, P₁V₁ = P₂V₂ for a fixed mass of gas.", "عند ثبوت درجة الحرارة P₁V₁ = P₂V₂ لكمية محددة من غاز."]],
      [40, 200, ["Constant temperature", "ثبوت درجة الحرارة"], ["Change the volume slowly so the gas stays at room temperature.", "غيّر الحجم ببطء ليظل الغاز عند درجة حرارة الغرفة."]]
    ]
  };

  D.sec2phyu4l2 = {
    title: ["Extending Charles's line to absolute zero", "مد خط شارل حتى الصفر المطلق"],
    svg: function () {
      var s = arrowDef("s2pa15", "var(--muted)");
      s += line(20, 200, 385, 200, "var(--muted)", 2, 'marker-end="url(#s2pa15)"') + line(200, 210, 200, 30, "var(--muted)", 2, 'marker-end="url(#s2pa15)"');
      s += line(40, 200, 200, 130, "#dc2626", 2.5, 'stroke-dasharray="6 4"') + line(200, 130, 360, 60, "#dc2626", 3.5);
      s += '<circle cx="40" cy="200" r="6" fill="#0f172a"/>' + '<circle cx="200" cy="130" r="5" fill="#2563eb"/><circle cx="330" cy="73" r="5" fill="#2563eb"/>';
      s += tx(40, 222, "−273°C", ink, 12) + tx(200, 222, "0°C", ink, 12) + tx(330, 222, "100°C", ink, 12) + tx(372, 190, "t", mut, 12) + tx(212, 40, "V", mut, 12, "start");
      s += tx(110, 120, "0 K", 'style="fill:#dc2626"', 13);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 130, ["Volume at 0°C", "الحجم عند 0°C"], ["V₀ measured with the tube in melting ice.", "V₀ يُقاس والأنبوبة في جليد منصهر."]],
      [330, 73, ["Volume at 100°C", "الحجم عند 100°C"], ["Measured with steam; α_v = (V₁₀₀ − V₀)/(V₀ × 100) = 1/273 per °C.", "يُقاس بالبخار، وα_v = (V₁₀₀ − V₀)/(V₀ × 100) = 1/273 لكل درجة."]],
      [40, 200, ["Absolute zero", "الصفر المطلق"], ["The extended line meets the axis at −273°C = 0 K, where an ideal gas's volume would vanish.", "يقطع الخط الممتد المحور عند −273°C = 0 K حيث ينعدم حجم الغاز المثالي."]],
      [120, 160, ["Extrapolation", "الامتداد"], ["Real gases liquefy before 0 K, so this part is drawn dashed.", "الغازات الحقيقية تتحول لسائل قبل 0 K، لذا رُسم هذا الجزء متقطعًا."]],
      [280, 95, ["Same for pressure", "نفس الأمر للضغط"], ["The P–t line from Jolly's apparatus also meets −273°C (pressure law).", "خط P–t من جهاز جولي يقطع أيضًا −273°C (قانون الضغط)."]]
    ]
  };

  D.sec2phyu4l3 = {
    title: ["A rising bubble", "فقاعة صاعدة"],
    svg: function () {
      var s = rect(0, 30, 400, 210, "#bfdbfe") + rect(0, 30, 400, 20, "#93c5fd");
      s += '<circle cx="200" cy="200" r="10" fill="#fff" stroke="#2563eb" stroke-width="2"/><circle cx="200" cy="125" r="13" fill="#fff" stroke="#2563eb" stroke-width="2"/><circle cx="200" cy="58" r="16" fill="#fff" stroke="#2563eb" stroke-width="2"/>';
      s += tx(90, 205, "28 cm³ , 2 atm , 280 K", ink, 11) + tx(90, 62, "60 cm³ , 1 atm , 300 K", ink, 11);
      s += tx(320, 135, "P₁V₁/T₁ = P₂V₂/T₂", ink, 13) + tx(320, 22, t("surface", "السطح"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 200, ["At 10.13 m depth", "على عمق 10.13 m"], ["P = Pₐ + ρgh = 1.013 × 10⁵ + 1000 × 10 × 10.13 ≈ 2 atm, at 7°C = 280 K.", "P = Pₐ + ρgh = 1.013 × 10⁵ + 1000 × 10 × 10.13 ≈ 2 atm، عند 7°C = 280 K."]],
      [200, 125, ["Rising", "الصعود"], ["Pressure falls and temperature rises, so the bubble grows.", "يقل الضغط وترتفع درجة الحرارة فتكبر الفقاعة."]],
      [200, 58, ["At the surface", "عند السطح"], ["V₂ = 28 × 2 × 300/280 = 60 cm³.", "V₂ = 28 × 2 × 300/280 = 60 cm³."]],
      [320, 135, ["General gas law", "القانون العام للغازات"], ["PV/T is constant for a fixed mass of gas; T in kelvin.", "PV/T ثابت لكمية محددة من غاز، وT بالكلفن."]],
      [320, 22, ["PV = nRT", "PV = nRT"], ["Enrichment: R = 8.31 J/(mol·K); 1 mol at STP occupies about 22.4 L.", "إثراء: R = 8.31 J/(mol·K)، والمول الواحد في الظروف القياسية يشغل نحو 22.4 لتر."]]
    ]
  };
})();

/* ---------- Secondary 2 Physics live simulations (part 1): measurement and motion ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var txt = K.txt;
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function meter(host) { var m = E.el("div", "meter"); m.dir = "ltr"; host.appendChild(m); return m; }
  function mk(host, r, mh) { var S = K.make(host, r, mh); S.cv.dir = "ltr"; return S; }
  function lt(s) { return '<span dir="ltr" style="unicode-bidi:isolate">' + s + "</span>"; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u(); return inp;
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rd(v, d) { var p = Math.pow(10, d || 0); return Math.round(v * p) / p; }
  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  function sup(k) { return String(k).split("").map(function (c) { return SUP[c] || c; }).join(""); }
  function sci(x, d) {
    if (!x) return n(0);
    var e = Math.floor(Math.log(Math.abs(x)) / Math.LN10);
    if (e >= -2 && e <= 3) return n(rd(x, d == null ? 2 : d));
    return n(rd(x / Math.pow(10, e), d == null ? 3 : d)) + " × 10" + sup(e);
  }
  function arrow(ctx, x1, y1, x2, y2, c, w) {
    var a = Math.atan2(y2 - y1, x2 - x1), L2 = Math.hypot(x2 - x1, y2 - y1); if (L2 < 2) return;
    ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = w || 3; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - Math.cos(a) * 6, y2 - Math.sin(a) * 6); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - Math.cos(a - 0.45) * 11, y2 - Math.sin(a - 0.45) * 11); ctx.lineTo(x2 - Math.cos(a + 0.45) * 11, y2 - Math.sin(a + 0.45) * 11); ctx.closePath(); ctx.fill();
  }
  /* graph frame: g = {x, y, w, h}, ranges xr, yr; returns mappers */
  function frame(ctx, C, g, xr, yr, xl, yl) {
    var X = function (v) { return g.x + (v - xr[0]) / (xr[1] - xr[0]) * g.w; }, Y = function (v) { return g.y + g.h - (v - yr[0]) / (yr[1] - yr[0]) * g.h; };
    ctx.fillStyle = C.card; ctx.fillRect(g.x, g.y, g.w, g.h);
    ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.strokeRect(g.x, g.y, g.w, g.h);
    ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath();
    var y0 = clamp(Y(0), g.y, g.y + g.h), x0 = clamp(X(0), g.x, g.x + g.w);
    ctx.moveTo(g.x, y0); ctx.lineTo(g.x + g.w, y0); ctx.moveTo(x0, g.y); ctx.lineTo(x0, g.y + g.h); ctx.stroke();
    txt(ctx, xl, g.x + g.w - 4, Math.min(g.y + g.h - 8, y0 + 10), { c: C.muted, s: 11, a: "right" });
    txt(ctx, yl, x0 + 5, g.y + 9, { c: C.muted, s: 11, a: "left" });
    return { X: X, Y: Y };
  }
  E.s2pkit = { mk: mk, lt: lt, hint: hint, box: box, meter: meter, sl: sl, clamp: clamp, rd: rd, sup: sup, sci: sci, arrow: arrow, frame: frame };

  /* =========================================================
     1. sec2phy_vernier - drag the sliding jaw, read main scale + vernier
     ========================================================= */
  L.sec2phy_vernier = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose an object, drag the blue sliding jaw until it touches the object, then read the magnified scales below and type your reading.",
      "اختر جسمًا، واسحب الفك المنزلق الأزرق حتى يلمس الجسم، ثم اقرأ التدريج المكبر بالأسفل واكتب قراءتك.")) + '<div class="seg" id="s2vObj"></div>';
    var OB = [{ L: 29.6, n: t("Coin", "عملة"), c: "#eab308" }, { L: 18.3, n: t("Bolt", "مسمار قلاووظ"), c: "#94a3b8" }, { L: 42.7, n: t("Ring box", "علبة خاتم"), c: "#f472b6" }];
    var S = mk(host, 0.62, 400);
    var c = box(host, '<div class="btn-row"><label class="sl" style="max-width:220px"><span>' + t("Your reading (mm)", "قراءتك (مم)") + '</span><input type="text" inputmode="decimal" id="s2vIn" autocomplete="off"></label><button type="button" class="btn sm" id="s2vChk">✔ ' + t("Check reading", "تحقق من القراءة") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Close the jaws on the coin.", "أغلق الفكين على العملة."), t("Read the coin correctly (to 0.1 mm).", "اقرأ قطر العملة صحيحًا (لأقرب ٠٫١ مم)."),
      t("Measure another object correctly.", "قِس جسمًا آخر قياسًا صحيحًا.")], done);
    var ob = 0, jaw = 52, drag = false, msg = t("Drag the blue jaw to the left.", "اسحب الفك الأزرق لليسار.");
    K.seg(host, "#s2vObj", OB.map(function (o, i) { return [String(i), o.n]; }), "0", function (v) { ob = Number(v); jaw = 55; c.querySelector("#s2vIn").value = ""; msg = t("New object: open jaws, now close them on it.", "جسم جديد: أغلق الفكين عليه."); });
    function geo() { var W = S.W, H = S.H, x0 = 34, ppm = (W - 60) / 62; return { x0: x0, ppm: ppm, by: H * 0.1, bh: H * 0.13, jy: H * 0.5 }; }
    function closed() { return Math.abs(jaw - OB[ob].L) < 0.05; }
    c.querySelector("#s2vChk").onclick = function () {
      var v = E.parse(c.querySelector("#s2vIn").value), o = OB[ob];
      if (!closed()) { E.toast(t("Close the jaws on the object first.", "أغلق الفكين على الجسم أولًا.")); return; }
      if (isNaN(v)) { E.toast(t("Type a number in mm, e.g. 25.4", "اكتب رقمًا بالمليمتر مثل ٢٥٫٤")); return; }
      if (Math.abs(v - o.L) < 0.051) {
        msg = "✔ " + t("Correct: ", "صحيح: ") + n(Math.floor(o.L)) + " mm + " + n(Math.round((o.L - Math.floor(o.L)) * 10)) + " × 0.1 mm = " + n(o.L) + " mm";
        if (ob === 0) tick(1); else tick(2);
      } else msg = "✘ " + t("Not yet. Main scale: the last mm mark before the vernier zero. Then find the vernier line that matches a main line.", "ليس بعد. المسطرة: آخر علامة مليمتر قبل صفر الورنية، ثم ابحث عن خط الورنية المنطبق على خط من المسطرة.");
    };
    S.drag({
      down: function (p) { var g = geo(), jx = g.x0 + jaw * g.ppm; if (Math.abs(p.x - jx) < 28 && p.y > g.by - 10 && p.y < g.jy + 20) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); jaw = clamp((p.x - g.x0) / g.ppm, OB[ob].L, 60); },
      up: function () { drag = false; jaw = Math.max(OB[ob].L, Math.round(jaw * 10) / 10); if (closed()) { if (ob === 0) tick(0); msg = t("Jaws closed. Now read the magnified scales.", "أُغلق الفكان. اقرأ الآن التدريج المكبر."); } },
      hover: function (p) { var g = geo(); return Math.abs(p.x - (g.x0 + jaw * g.ppm)) < 28 && p.y > g.by - 10 && p.y < g.jy + 20; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), o = OB[ob], jx = g.x0 + jaw * g.ppm, i;
      ctx.clearRect(0, 0, W, H);
      // main bar
      ctx.fillStyle = "#cbd5e1"; ctx.fillRect(g.x0 - 20, g.by, W - g.x0, g.bh);
      ctx.strokeStyle = "#334155"; ctx.lineWidth = 1;
      for (i = 0; i <= 60; i++) { var x = g.x0 + i * g.ppm, h = i % 10 === 0 ? g.bh * 0.6 : i % 5 === 0 ? g.bh * 0.42 : g.bh * 0.25; ctx.beginPath(); ctx.moveTo(x, g.by + g.bh); ctx.lineTo(x, g.by + g.bh - h); ctx.stroke(); if (i % 10 === 0) txt(ctx, n(i / 10), x, g.by + 9, { c: "#0f172a", s: 10 }); }
      // fixed jaw
      ctx.fillStyle = "#64748b"; ctx.beginPath(); ctx.moveTo(g.x0 - 20, g.by + g.bh); ctx.lineTo(g.x0, g.by + g.bh); ctx.lineTo(g.x0, g.jy + 18); ctx.lineTo(g.x0 - 14, g.jy + 18); ctx.closePath(); ctx.fill();
      // object
      ctx.fillStyle = o.c; K.rr(ctx, g.x0, g.jy - 18, o.L * g.ppm, 34, 6); ctx.fill();
      txt(ctx, o.n, g.x0 + o.L * g.ppm / 2, g.jy - 1, { c: "#0f172a", s: 11 });
      // sliding jaw + vernier plate
      ctx.fillStyle = "rgba(37,99,235,.85)"; ctx.fillRect(jx - 8, g.by + g.bh, 10 * 0.9 * g.ppm + 16, g.bh * 0.7);
      ctx.beginPath(); ctx.moveTo(jx, g.by + g.bh); ctx.lineTo(jx + 14, g.by + g.bh); ctx.lineTo(jx + 14, g.jy + 18); ctx.lineTo(jx, g.jy + 18); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#fff";
      for (i = 0; i <= 10; i++) { var vx = jx + i * 0.9 * g.ppm; ctx.beginPath(); ctx.moveTo(vx, g.by + g.bh); ctx.lineTo(vx, g.by + g.bh + (i % 5 === 0 ? g.bh * 0.5 : g.bh * 0.3)); ctx.stroke(); }
      txt(ctx, "⇔", jx + 7, g.jy + 34, { c: "#2563eb", s: 16 });
      // magnified inset
      var iy = H * 0.66, ih = H * 0.3, ix = 10, iw = W - 20, zp = iw / 18, cx0 = ix + iw * 0.25;
      ctx.fillStyle = C.card; ctx.strokeStyle = C.line; K.rr(ctx, ix, iy, iw, ih, 10); ctx.fill(); ctx.stroke();
      txt(ctx, t("magnified ×", "تكبير ×") + n(Math.round(zp / g.ppm)), ix + 8, iy + ih - 10, { c: C.muted, s: 10, a: "left" });
      var mid = iy + ih * 0.56;
      ctx.save(); ctx.beginPath(); ctx.rect(ix, iy, iw, ih); ctx.clip();
      ctx.strokeStyle = C.ink; ctx.lineWidth = 1.3;
      for (var m = Math.floor(jaw) - 6; m <= Math.floor(jaw) + 14; m++) {
        if (m < 0 || m > 60) continue;
        var mx = cx0 + (m - jaw) * zp, mh = m % 10 === 0 ? ih * 0.26 : m % 5 === 0 ? ih * 0.2 : ih * 0.13;
        ctx.beginPath(); ctx.moveTo(mx, mid); ctx.lineTo(mx, mid - mh); ctx.stroke();
        if (m % 5 === 0) txt(ctx, n(m), mx, mid - mh - 8, { c: C.ink, s: 11 });
      }
      ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 1.6;
      for (i = 0; i <= 10; i++) { var vx2 = cx0 + i * 0.9 * zp; ctx.beginPath(); ctx.moveTo(vx2, mid + 2); ctx.lineTo(vx2, mid + (i % 5 === 0 ? ih * 0.3 : ih * 0.2)); ctx.stroke(); if (i % 5 === 0) txt(ctx, n(i), vx2, mid + ih * 0.38, { c: "#2563eb", s: 11 }); }
      ctx.restore();
      txt(ctx, t("main (mm)", "الرئيسية (مم)"), ix + iw - 8, iy + 12, { c: C.ink, s: 10, a: "right" });
      txt(ctx, t("vernier", "الورنية"), ix + iw - 8, iy + ih - 10, { c: "#2563eb", s: 10, a: "right" });
      out.innerHTML = "<span>" + esc(msg) + "</span>";
    });
  };

  /* =========================================================
     2. sec2phy_dims - build L, M, T exponents to balance the target quantity
     ========================================================= */
  L.sec2phy_dims = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a quantity, then use − and + to set the powers of M, L and T until the balance is level. The SI unit appears with your formula.",
      "اختر كمية، ثم استخدم − و+ لضبط أسس M وL وT حتى يتزن الميزان، وتظهر الوحدة الدولية مع معادلتك.")) + '<div class="seg" id="s2dQ"></div>';
    var QS = [
      { k: "v", n: t("Velocity", "السرعة"), d: "d / t", e: [1, 0, -1] }, { k: "a", n: t("Acceleration", "العجلة"), d: "v / t", e: [1, 0, -2] },
      { k: "F", n: t("Force", "القوة"), d: "m × a", e: [1, 1, -2] }, { k: "P", n: t("Pressure", "الضغط"), d: "F / A", e: [-1, 1, -2] },
      { k: "W", n: t("Work", "الشغل"), d: "F × d", e: [2, 1, -2] }, { k: "r", n: t("Density", "الكثافة"), d: "m / V", e: [-3, 1, 0] }];
    var S = mk(host, 0.55, 360);
    var c = box(host, ["M", "L", "T"].map(function (s) { return '<div class="btn-row" style="align-items:center"><b style="min-width:26px">' + s + '</b><button type="button" class="btn sm" data-d="' + s + '-">−</button><b class="s2dv" style="min-width:30px;text-align:center" data-v="' + s + '"></b><button type="button" class="btn sm" data-d="' + s + '+">+</button></div>'; }).join(""));
    var out = meter(host);
    var tick = L._goals(host, [t("Build acceleration: LT⁻².", "ابنِ العجلة: " + lt("LT⁻²") + "."), t("Build force (the newton).", "ابنِ القوة (النيوتن)."), t("Build pressure (the pascal).", "ابنِ الضغط (الباسكال)."), t("Build work (the joule).", "ابنِ الشغل (الجول).")], done);
    var q = 0, ex = { L: 0, M: 0, T: 0 }, tilt = 0;
    K.seg(host, "#s2dQ", QS.map(function (o, i) { return [String(i), o.n]; }), "0", function (v) { q = Number(v); });
    function upd() { ["M", "L", "T"].forEach(function (s) { c.querySelector('[data-v="' + s + '"]').textContent = n(ex[s]); }); }
    c.querySelectorAll("button[data-d]").forEach(function (b) { b.onclick = function () { var s = b.dataset.d[0], d = b.dataset.d[1] === "+" ? 1 : -1; ex[s] = clamp(ex[s] + d, -4, 4); upd(); }; });
    upd();
    function form(a, b, cc) { var s = ""; if (b) s += "M" + (b !== 1 ? sup(b) : ""); if (a) s += "L" + (a !== 1 ? sup(a) : ""); if (cc) s += "T" + (cc !== 1 ? sup(cc) : ""); return s || "1"; }
    function unit(a, b, cc) { var s = []; if (b) s.push("kg" + (b !== 1 ? sup(b) : "")); if (a) s.push("m" + (a !== 1 ? sup(a) : "")); if (cc) s.push("s" + (cc !== 1 ? sup(cc) : "")); return s.join("·") || "—"; }
    var NAMES = { a: "m/s²", F: "N (newton)", P: "Pa (pascal)", W: "J (joule)", v: "m/s", r: "kg/m³" };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, o = QS[q], e = o.e;
      var ok = ex.L === e[0] && ex.M === e[1] && ex.T === e[2];
      var diff = (ex.L + ex.M + ex.T) - (e[0] + e[1] + e[2]) + (ok ? 0 : (ex.L !== e[0] || ex.M !== e[1] || ex.T !== e[2]) ? 0.5 : 0);
      var want = ok ? 0 : clamp(diff * 0.08, -0.25, 0.25) || 0.12;
      tilt += (want - tilt) * Math.min(1, dt * 6);
      ctx.clearRect(0, 0, W, H);
      var cx = W / 2, cy = H * 0.3, arm = Math.min(W * 0.36, 260);
      ctx.fillStyle = C.muted; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - 24, H * 0.92); ctx.lineTo(cx + 24, H * 0.92); ctx.closePath(); ctx.fill();
      var lx = cx - arm * Math.cos(tilt), ly = cy - arm * Math.sin(tilt), rx = cx + arm * Math.cos(tilt), ry = cy + arm * Math.sin(tilt);
      ctx.strokeStyle = C.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(rx, ry); ctx.stroke();
      K.dot(ctx, cx, cy, 7, ok ? "#22c55e" : "#f97316");
      [[lx, ly, "#ede9fe", "#7c3aed", o.n + " = " + o.d, form(e[0], e[1], e[2])], [rx, ry, ok ? "#dcfce7" : "#ffedd5", ok ? "#16a34a" : "#ea580c", t("Your formula", "معادلتك"), form(ex.L, ex.M, ex.T)]].forEach(function (p) {
        var pw = Math.min(arm * 0.95, 190), ph = 70;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] - pw / 2, p[1] + 30); ctx.moveTo(p[0], p[1]); ctx.lineTo(p[0] + pw / 2, p[1] + 30); ctx.stroke();
        ctx.fillStyle = p[2]; ctx.strokeStyle = p[3]; K.rr(ctx, p[0] - pw / 2, p[1] + 30, pw, ph, 10); ctx.fill(); ctx.stroke();
        txt(ctx, p[4], p[0], p[1] + 46, { c: "#334155", s: 11 });
        txt(ctx, p[5], p[0], p[1] + 76, { c: "#0f172a", s: 22 });
      });
      txt(ctx, ok ? t("Balanced! Dimensions match.", "متزن! الأبعاد متساوية.") : t("Not balanced: change the powers.", "غير متزن: غيّر الأسس."), cx, H * 0.08, { c: ok ? "#16a34a" : C.muted, s: 14 });
      out.innerHTML = "<span>" + t("Your unit: ", "وحدتك: ") + "<b dir=\"ltr\">" + esc(unit(ex.L, ex.M, ex.T)) + "</b></span>" + (ok ? "<span>= <b>" + esc(NAMES[o.k]) + "</b></span>" : "");
      if (ok) { if (o.k === "a") tick(0); if (o.k === "F") tick(1); if (o.k === "P") tick(2); if (o.k === "W") tick(3); }
    });
  };

  /* =========================================================
     3. sec2phy_error - parallax and precision with a ruler
     ========================================================= */
  L.sec2phy_error = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the eye left and right. The red line of sight shows what you read on the ruler. Switch rulers and record readings.",
      "اسحب العين يمينًا ويسارًا؛ الخط الأحمر هو خط النظر ويوضح ما تقرؤه على المسطرة. بدّل المسطرة وسجّل القراءات.")) + '<div class="seg" id="s2eR"></div>';
    var S = mk(host, 0.58, 380);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s2eRec">📝 ' + t("Record reading", "سجّل القراءة") + '</button><button type="button" class="btn sm ghost" id="s2eClr">↺ ' + t("Clear", "امسح") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Look from an angle: get a reading error of 0.3 cm or more.", "انظر بزاوية مائلة: احصل على خطأ ٠٫٣ سم أو أكثر."), t("Put your eye perpendicular above the tip: no error.", "ضع عينك عموديًا فوق طرف القلم: بلا خطأ."),
      t("With the mm ruler, record 3 readings whose mean is 10.0 cm.", "بمسطرة المليمتر سجّل ٣ قراءات متوسطها ١٠٫٠ سم.")], done);
    var ruler = "mm", ex = 0.65, drag = false, recs = [];
    K.seg(host, "#s2eR", [["mm", t("Ruler in mm", "مسطرة بالمليمتر")], ["cm", t("Ruler in cm", "مسطرة بالسنتيمتر")]], "mm", function (v) { ruler = v; recs = []; });
    function geo() { var W = S.W, H = S.H, x0 = 24, ppc = (W - 48) / 14; return { x0: x0, ppc: ppc, ry: H * 0.74, py: H * 0.64, ey: H * 0.12, tip: x0 + 10 * ppc }; }
    function reading() { var g = geo(), xe = g.x0 + ex * (S.W - 48) + 0, k = (g.ry - g.py) / (g.py - g.ey); var xr = g.tip + (g.tip - xe) * k; return (xr - g.x0) / g.ppc; }
    function shown(r) { return ruler === "mm" ? Math.round(r * 10) / 10 : Math.round(r * 2) / 2; }
    c.querySelector("#s2eRec").onclick = function () { recs.push(shown(reading())); if (recs.length > 6) recs.shift(); check(); };
    c.querySelector("#s2eClr").onclick = function () { recs = []; };
    function mean() { var s = 0; recs.forEach(function (r) { s += r; }); return recs.length ? s / recs.length : 0; }
    function check() { if (ruler === "mm" && recs.length >= 3 && Math.abs(mean() - 10) < 0.051) tick(2); }
    S.drag({
      down: function (p) { var g = geo(), xe = g.x0 + ex * (S.W - 48); if (Math.abs(p.x - xe) < 30 && Math.abs(p.y - g.ey) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (drag) ex = clamp((p.x - geo().x0) / (S.W - 48), 0.05, 0.98); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.x - (g.x0 + ex * (S.W - 48))) < 30 && Math.abs(p.y - g.ey) < 30; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), i, r = reading(), xe = g.x0 + ex * (W - 48), xr = g.x0 + r * g.ppc;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#fef3c7"; ctx.fillRect(g.x0 - 8, g.ry, 14 * g.ppc + 16, H * 0.14); ctx.strokeStyle = "#b45309"; ctx.strokeRect(g.x0 - 8, g.ry, 14 * g.ppc + 16, H * 0.14);
      ctx.strokeStyle = "#78350f"; ctx.lineWidth = 1;
      for (i = 0; i <= 140; i++) { if (ruler === "cm" && i % 10) continue; var x = g.x0 + i / 10 * g.ppc, h = i % 10 === 0 ? 16 : i % 5 === 0 ? 10 : 6; ctx.beginPath(); ctx.moveTo(x, g.ry); ctx.lineTo(x, g.ry + h); ctx.stroke(); if (i % 10 === 0) txt(ctx, n(i / 10), x, g.ry + 26, { c: "#78350f", s: 10 }); }
      // pencil on a block
      ctx.fillStyle = "#a8a29e"; ctx.fillRect(g.x0 + 2 * g.ppc, g.py + 8, 2 * g.ppc, g.ry - g.py - 8);
      ctx.fillStyle = "#facc15"; ctx.fillRect(g.x0, g.py - 6, 9.2 * g.ppc, 14); ctx.fillStyle = "#a16207"; ctx.beginPath(); ctx.moveTo(g.x0 + 9.2 * g.ppc, g.py - 6); ctx.lineTo(g.tip, g.py + 1); ctx.lineTo(g.x0 + 9.2 * g.ppc, g.py + 8); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = C.muted; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(g.x0, g.py); ctx.lineTo(g.x0, g.ry); ctx.stroke(); ctx.setLineDash([]);
      // sight line
      ctx.strokeStyle = "#dc2626"; ctx.lineWidth = 2; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.moveTo(xe, g.ey); ctx.lineTo(xr, g.ry); ctx.stroke(); ctx.setLineDash([]);
      K.dot(ctx, xr, g.ry, 4, "#dc2626");
      // eye
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.ellipse(xe, g.ey, 20, 11, 0, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.stroke(); K.dot(ctx, xe, g.ey, 6, "#0ea5e9"); K.dot(ctx, xe, g.ey, 2.5, "#0f172a");
      txt(ctx, "⇔", xe, g.ey + 24, { c: C.muted, s: 14 });
      var err = r - 10, perp = Math.abs(xe - g.tip) < 6;
      txt(ctx, perp ? t("Line of sight perpendicular ✔", "خط النظر عمودي ✔") : t("Looking at an angle", "النظر بزاوية مائلة"), W / 2, H * 0.97, { c: perp ? "#16a34a" : "#dc2626", s: 12 });
      if (Math.abs(err) >= 0.3) tick(0);
      if (perp) tick(1);
      out.innerHTML = "<span>" + t("You read: ", "تقرأ: ") + "<b>" + n(shown(r)) + " cm</b>" + (ruler === "cm" ? " (±0.5)" : "") + "</span><span>" + t("True length: ", "الطول الحقيقي: ") + "<b>" + n(10) + " cm</b></span><span>" + t("Error: ", "الخطأ: ") + "<b>" + n(rd(err, 2)) + " cm</b></span>" +
        "<span>" + t("Recorded: ", "المسجل: ") + "<b dir=\"ltr\">" + (recs.length ? recs.map(function (x) { return n(x); }).join(" , ") : "—") + "</b></span>" + (recs.length ? "<span>" + t("Mean: ", "المتوسط: ") + "<b>" + n(rd(mean(), 2)) + " cm</b></span>" : "");
    });
  };

  /* =========================================================
     4. sec2phy_motion - drive a car, draw the displacement-time graph
     ========================================================= */
  L.sec2phy_motion = function (host, cfg, done) {
    host.innerHTML = hint(t("Press Start, then change the velocity slider while the car drives for 10 s. Watch the displacement–time graph build up.",
      "اضغط ابدأ، ثم غيّر منزلق السرعة أثناء سير السيارة لمدة ١٠ ثوانٍ، وراقب منحنى الإزاحة–الزمن."));
    var S = mk(host, 0.68, 420);
    var c = box(host, L._slider(t("Velocity", "السرعة"), -10, 10, 1, 5, "m/s") + '<div class="btn-row"><button type="button" class="btn sm" id="s2mGo">▶ ' + t("Start", "ابدأ") + '</button><button type="button" class="btn sm ghost" id="s2mRs">↺ ' + t("Reset", "أعد") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Uniform velocity: keep a non-zero velocity constant for 3 s.", "سرعة منتظمة: ثبّت سرعة غير صفرية لمدة ٣ ثوانٍ."), t("Make the car move in the negative direction.", "اجعل السيارة تتحرك في الاتجاه السالب."),
      t("Finish a 10 s run with changing velocity and an average velocity of 5 m/s (4.5 to 5.5).", "أنهِ رحلة ١٠ ثوانٍ بسرعة متغيرة وسرعة متوسطة " + lt("5 m/s") + " (من ٤٫٥ إلى ٥٫٥).")], done);
    var v = 5, tm = 0, d = 0, run = false, pts = [], same = 0, changed = false, lastV = 5;
    sl(c, 0, function (x) { return n(x) + " m/s"; }, function (x) { v = x; if (run && x !== lastV) { changed = true; same = 0; } lastV = x; });
    c.querySelector("#s2mGo").onclick = function () { if (tm >= 10) reset(); run = true; };
    c.querySelector("#s2mRs").onclick = reset;
    function reset() { run = false; tm = 0; d = 0; pts = [[0, 0]]; same = 0; changed = false; }
    reset();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      if (run) {
        tm += dt; d += v * dt; d = clamp(d, -20, 80);
        if (v !== 0) same += dt; if (same >= 3) tick(0);
        if (v < 0 && pts.length > 2) tick(1);
        if (!pts.length || tm - pts[pts.length - 1][0] > 0.1) pts.push([tm, d]);
        if (tm >= 10) { tm = 10; run = false; var av = d / 10; if (changed && av >= 4.5 && av <= 5.5) tick(2); else E.toast(t("Run finished. Average velocity = ", "انتهت الرحلة. السرعة المتوسطة = ") + n(rd(av, 2)) + " m/s"); }
      }
      ctx.clearRect(0, 0, W, H);
      // road
      var ry = H * 0.16, rx0 = 20, rw = W - 40, X = function (m) { return rx0 + (m + 20) / 100 * rw; };
      ctx.fillStyle = "#475569"; ctx.fillRect(rx0, ry - 14, rw, 28);
      ctx.strokeStyle = "#f8fafc"; ctx.setLineDash([10, 8]); ctx.beginPath(); ctx.moveTo(rx0, ry); ctx.lineTo(rx0 + rw, ry); ctx.stroke(); ctx.setLineDash([]);
      for (var m = -20; m <= 80; m += 20) { txt(ctx, n(m) + " m", X(m), ry + 26, { c: C.muted, s: 10 }); }
      ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(X(0), ry - 16); ctx.lineTo(X(0), ry + 16); ctx.stroke();
      var cx = X(d); ctx.fillStyle = "#ef4444"; K.rr(ctx, cx - 16, ry - 10, 32, 16, 5); ctx.fill(); K.dot(ctx, cx - 9, ry + 7, 4, "#0f172a"); K.dot(ctx, cx + 9, ry + 7, 4, "#0f172a");
      if (v) arrow(ctx, cx, ry - 20, cx + v * 3, ry - 20, "#2563eb", 2);
      // graph
      var g = { x: 44, y: H * 0.36, w: W - 64, h: H * 0.56 }, F = frame(ctx, C, g, [0, 10], [-20, 80], "t (s)", "d (m)");
      for (var s2 = 2; s2 <= 10; s2 += 2) txt(ctx, n(s2), F.X(s2), g.y + g.h + 10, { c: C.muted, s: 10 });
      [-20, 0, 40, 80].forEach(function (y) { txt(ctx, n(y), g.x - 4, F.Y(y), { c: C.muted, s: 10, a: "right" }); });
      ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 2.5; ctx.beginPath(); pts.forEach(function (p, i) { if (i) ctx.lineTo(F.X(p[0]), F.Y(p[1])); else ctx.moveTo(F.X(p[0]), F.Y(p[1])); }); ctx.lineTo(F.X(tm), F.Y(d)); ctx.stroke();
      if (tm > 0.2) { ctx.strokeStyle = "#a855f7"; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(F.X(0), F.Y(0)); ctx.lineTo(F.X(tm), F.Y(d)); ctx.stroke(); ctx.setLineDash([]); }
      K.dot(ctx, F.X(tm), F.Y(d), 4, "#ef4444");
      out.innerHTML = "<span>t = <b>" + n(rd(tm, 1)) + " s</b></span><span>d = <b>" + n(rd(d, 1)) + " m</b></span><span>" + t("Instantaneous v = ", "السرعة اللحظية = ") + "<b>" + n(v) + " m/s</b></span><span style=\"color:#a855f7\">" + t("Average v̄ = d / t = ", "السرعة المتوسطة = d / t = ") + "<b>" + (tm > 0.2 ? n(rd(d / tm, 2)) : "—") + " m/s</b></span>";
    });
  };

  /* =========================================================
     5. sec2phy_accel - tilt the track, release the ball, read the v-t graph
     ========================================================= */
  L.sec2phy_accel = function (host, cfg, done) {
    host.innerHTML = hint(t("Tilt the smooth track with the slider (positive = downhill in the direction of motion), then release the ball at 3 m/s. The slope of the v–t graph is the acceleration a = g sin θ.",
      "أمِل المسار الأملس بالمنزلق (موجب = هبوط في اتجاه الحركة)، ثم أطلق الكرة بسرعة ٣ m/s. ميل منحنى السرعة–الزمن هو العجلة a = g sin θ."));
    var S = mk(host, 0.68, 420);
    var c = box(host, L._slider(t("Track angle θ", "زاوية المسار θ"), -35, 35, 0.5, 10, "°") + '<div class="btn-row"><button type="button" class="btn sm" id="s2aGo">▶ ' + t("Release ball", "أطلق الكرة") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Positive acceleration: the ball speeds up.", "عجلة موجبة: الكرة تتسارع."), t("Zero acceleration: the ball rolls at constant velocity.", "عجلة صفرية: الكرة تسير بسرعة ثابتة."),
      t("Negative acceleration: the ball slows down.", "عجلة سالبة: الكرة تتباطأ."), t("Set a = 5 m/s² (±0.2), like the book's car.", "اضبط " + lt("a = 5 m/s² (±0.2)") + " مثل سيارة الكتاب.")], done);
    var th = 10, s = 0, v = 0, tm = 0, run = false, pts = [], flat = 0;
    function acc() { return 9.8 * Math.sin(th * Math.PI / 180); }
    sl(c, 0, function (x) { return n(x) + "°"; }, function (x) { th = x; if (Math.abs(acc() - 5) <= 0.2) tick(3); });
    c.querySelector("#s2aGo").onclick = function () { s = 0; v = 3; tm = 0; run = true; pts = [[0, 3]]; flat = 0; };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, a = acc();
      if (run) {
        tm += dt; v += a * dt; s += v * dt;
        if (tm - pts[pts.length - 1][0] > 0.08) pts.push([tm, v]);
        if (v > 0.3 && a > 0.5) tick(0);
        if (v > 0.3 && a < -0.5) tick(2);
        if (th === 0 && v > 0.3) { flat += dt; if (flat > 1) tick(1); } else flat = 0;
        if (s > 20 || s < -0.5 || tm > 8 || v < -12) run = false;
      }
      ctx.clearRect(0, 0, W, H);
      var rad = th * Math.PI / 180, top = H * 0.06, bot = H * 0.42, len = Math.min(W * 0.86, (bot - top) / Math.max(0.05, Math.abs(Math.sin(rad))));
      var x0 = W / 2 - len / 2 * Math.cos(rad), y0 = (top + bot) / 2 - len / 2 * Math.sin(rad), x1 = W / 2 + len / 2 * Math.cos(rad), y1 = (top + bot) / 2 + len / 2 * Math.sin(rad);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
      var f = clamp(s / 20, 0, 1), bx = x0 + (x1 - x0) * f, by = y0 + (y1 - y0) * f;
      K.dot(ctx, bx - 10 * Math.sin(rad), by - 10 * Math.cos(rad), 10, a > 0.05 ? "#22c55e" : a < -0.05 ? "#ef4444" : "#3b82f6");
      txt(ctx, "θ = " + n(th) + "°", W - 12, top + 8, { c: C.ink, s: 13, a: "right" });
      var g = { x: 44, y: H * 0.5, w: W - 64, h: H * 0.44 }, F = frame(ctx, C, g, [0, 8], [-10, 20], "t (s)", "v (m/s)");
      [-10, 0, 10, 20].forEach(function (y) { txt(ctx, n(y), g.x - 4, F.Y(y), { c: C.muted, s: 10, a: "right" }); });
      for (var k = 2; k <= 8; k += 2) txt(ctx, n(k), F.X(k), g.y + g.h + 10, { c: C.muted, s: 10 });
      ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2.5; ctx.beginPath(); pts.forEach(function (p, i) { var X = F.X(p[0]), Y = F.Y(clamp(p[1], -10, 20)); if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }); ctx.stroke();
      out.innerHTML = "<span>a = g sin θ = <b>" + n(rd(a, 2)) + " m/s²</b></span><span>v = <b>" + n(rd(v, 1)) + " m/s</b></span><span>t = <b>" + n(rd(tm, 1)) + " s</b></span><span>" +
        (a > 0.05 ? t("positive: speeding up", "موجبة: تزايد السرعة") : a < -0.05 ? t("negative: slowing down", "سالبة: تناقص السرعة") : t("zero: constant velocity", "صفر: سرعة ثابتة")) + "</span>";
    });
  };

  /* =========================================================
     6. sec2phy_inertia - first law on a track with friction, momentum meter
     ========================================================= */
  L.sec2phy_inertia = function (host, cfg, done) {
    host.innerHTML = hint(t("Use the force slider to push the block, change friction and mass, and watch velocity and momentum P = mv. The track loops around.",
      "استخدم منزلق القوة لدفع الصندوق، وغيّر الاحتكاك والكتلة، وراقب السرعة وكمية الحركة P = mv. المسار دائري يعود من البداية."));
    var S = mk(host, 0.45, 300);
    var c = box(host, L._slider(t("Applied force F", "القوة المؤثرة F"), -20, 20, 1, 0, "N") + L._slider(t("Friction coefficient μ", "معامل الاحتكاك μ"), 0, 0.5, 0.05, 0.2, "") + L._slider(t("Mass m", "الكتلة m"), 1, 10, 1, 4, "kg") +
      '<div class="btn-row"><button type="button" class="btn sm ghost" id="s2iRs">↺ ' + t("Stop and reset", "أوقف وأعد") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("First law: with μ = 0 and F = 0 keep the block moving at constant velocity for 2 s.", "القانون الأول: مع " + lt("μ = 0") + " و" + lt("F = 0") + " اجعل الصندوق يتحرك بسرعة ثابتة لمدة ٢ ث."),
      t("With friction and F = 0, watch a moving block come to rest.", "مع وجود احتكاك و" + lt("F = 0") + " شاهد صندوقًا متحركًا يتوقف."), t("Give the block a momentum of 30 kg·m/s or more.", "أكسب الصندوق كمية حركة " + lt("30 kg·m/s") + " أو أكثر.")], done);
    var F = 0, mu = 0.2, m = 4, x = 0.1, v = 0, coast = 0, wasMoving = false;
    sl(c, 0, function (q) { return n(q) + " N"; }, function (q) { F = q; });
    sl(c, 1, function (q) { return n(rd(q, 2)); }, function (q) { mu = q; });
    sl(c, 2, function (q) { return n(q) + " kg"; }, function (q) { m = q; });
    c.querySelector("#s2iRs").onclick = function () { v = 0; x = 0.1; };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, fr = 0, g = 9.8, fmax = mu * m * g;
      if (Math.abs(v) > 0.02) fr = -Math.sign(v) * fmax; else { v = 0; fr = Math.abs(F) <= fmax ? -F : -Math.sign(F) * fmax; }
      var net = F + fr, a = net / m;
      var nv = v + a * dt; if (v !== 0 && F === 0 && Math.sign(nv) !== Math.sign(v)) nv = 0; v = clamp(nv, -15, 15);
      x += v * dt / 30; x = x - Math.floor(x);
      if (mu === 0 && F === 0 && Math.abs(v) > 0.5) { coast += dt; if (coast > 2) tick(0); } else coast = 0;
      if (Math.abs(v) > 0.5) wasMoving = true;
      if (wasMoving && mu > 0 && F === 0 && v === 0) tick(1);
      if (v === 0 && F !== 0) wasMoving = false;
      if (Math.abs(m * v) >= 30) tick(2);
      ctx.clearRect(0, 0, W, H);
      var gy = H * 0.66;
      ctx.fillStyle = mu > 0 ? "#a16207" : "#bae6fd"; ctx.fillRect(0, gy, W, H * 0.08);
      txt(ctx, mu > 0 ? t("rough surface", "سطح خشن") : t("frictionless (ice)", "عديم الاحتكاك (جليد)"), W / 2, gy + H * 0.16, { c: C.muted, s: 11 });
      var sz = 26 + Math.cbrt(m) * 14, bx = 20 + x * (W - 40);
      ctx.fillStyle = "#7c3aed"; K.rr(ctx, bx - sz / 2, gy - sz, sz, sz, 5); ctx.fill(); txt(ctx, n(m) + " kg", bx, gy - sz / 2, { c: "#fff", s: 11 });
      if (F) arrow(ctx, bx, gy - sz - 12, bx + F * 3, gy - sz - 12, "#2563eb", 3);
      if (fr && Math.abs(fr) > 0.01) arrow(ctx, bx, gy + 6, bx + fr * 3, gy + 6, "#dc2626", 3);
      if (v) arrow(ctx, bx, gy - sz - 34, bx + v * 5, gy - sz - 34, "#16a34a", 2);
      txt(ctx, "F", 14, H * 0.1, { c: "#2563eb", s: 12, a: "left" }); txt(ctx, t("friction", "احتكاك"), 34, H * 0.1, { c: "#dc2626", s: 12, a: "left" }); txt(ctx, "v", 110, H * 0.1, { c: "#16a34a", s: 12, a: "left" });
      out.innerHTML = "<span>ΣF = <b>" + n(rd(net, 1)) + " N</b></span><span>a = <b>" + n(rd(a, 2)) + " m/s²</b></span><span>v = <b>" + n(rd(v, 2)) + " m/s</b></span><span>P = m v = <b>" + n(rd(m * v, 1)) + " kg·m/s</b></span>" +
        (Math.abs(net) < 0.01 && v !== 0 ? "<span class=\"chip green\">" + t("ΣF = 0: constant velocity", "ΣF = 0: سرعة منتظمة") + "</span>" : "");
    });
  };

  /* =========================================================
     7. sec2phy_newton2 - F = ma cart + egg-drop collision time
     ========================================================= */
  L.sec2phy_newton2 = function (host, cfg, done) {
    host.innerHTML = hint(t("F = ma: set the force and the mass and watch the cart and the a–F graph. Egg drop: choose a height and a surface; a longer stopping time means a smaller force.",
      "F = ma: اضبط القوة والكتلة وراقب العربة ومنحنى العجلة–القوة. إسقاط البيضة: اختر الارتفاع والسطح؛ زمن توقف أطول يعني قوة أصغر.")) + '<div class="seg" id="s2nM"></div>';
    var S = mk(host, 0.6, 380);
    var c = box(host, '<div id="s2nA">' + L._slider(t("Force F", "القوة F"), 0, 250, 10, 100, "N") + '<div class="seg" id="s2nMass"></div></div>' +
      '<div id="s2nB" style="display:none">' + L._slider(t("Height h", "الارتفاع h"), 0.5, 3, 0.1, 1, "m") + '<div class="seg" id="s2nSurf"></div><div class="btn-row"><button type="button" class="btn sm" id="s2nDrop">🥚 ' + t("Drop the egg", "أسقط البيضة") + "</button></div></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Give the 100 kg cart an acceleration of 2 m/s².", "أكسب العربة ١٠٠ كجم عجلة " + lt("2 m/s²") + "."), t("Apply 200 N to the 200 kg cart: half the acceleration.", "أثّر بقوة " + lt("200 N") + " على العربة ٢٠٠ كجم: نصف العجلة."),
      t("Break the egg on the hard floor.", "اكسر البيضة على الأرضية الصلبة."), t("Save the egg from 2 m or higher.", "أنقذ البيضة من ارتفاع ٢ م أو أكثر.")], done);
    var mode = "a", F = 100, m = 100, cx = 0, cv = 0, h = 1, surf = "floor", egg = null, pts = {};
    var SURF = { floor: [0.002, t("Hard floor", "أرضية صلبة")], straw: [0.05, t("Straw", "قش")], cushion: [0.15, t("Cushion", "وسادة")] };
    K.seg(host, "#s2nM", [["a", "F = ma"], ["e", t("Egg drop", "إسقاط البيضة")]], "a", function (v) { mode = v; c.querySelector("#s2nA").style.display = v === "a" ? "" : "none"; c.querySelector("#s2nB").style.display = v === "e" ? "" : "none"; });
    sl(c, 0, function (q) { return n(q) + " N"; }, function (q) { F = q; cv = 0; mark(); });
    K.seg(c, "#s2nMass", [["100", "100 kg"], ["200", "200 kg"]], "100", function (v) { m = Number(v); cv = 0; mark(); });
    sl(c, 1, function (q) { return n(rd(q, 1)) + " m"; }, function (q) { h = rd(q, 1); });
    K.seg(c, "#s2nSurf", Object.keys(SURF).map(function (k) { return [k, SURF[k][1]]; }), "floor", function (v) { surf = v; });
    function mark() { pts[m + "_" + F] = [F, F / m, m]; if (m === 100 && F === 200) tick(0); if (m === 200 && F === 200) tick(1); }
    c.querySelector("#s2nDrop").onclick = function () { egg = { y: 0, v: 0, h: h, s: surf, res: null }; };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "a") {
        var a = F / m; cv += a * dt * 0.6; if (cv > 40) cv = 40; cx += cv * dt * 4; var tw = W * 0.9; cx = cx % tw;
        var ty = H * 0.25; ctx.fillStyle = C.line; ctx.fillRect(W * 0.05, ty + 12, tw, 4);
        var bx = W * 0.05 + cx, bw = m === 100 ? 44 : 62;
        ctx.fillStyle = m === 100 ? "#f97316" : "#0ea5e9"; K.rr(ctx, bx, ty - 20, bw, 30, 6); ctx.fill(); K.dot(ctx, bx + 10, ty + 12, 6, "#0f172a"); K.dot(ctx, bx + bw - 10, ty + 12, 6, "#0f172a");
        txt(ctx, n(m) + " kg", bx + bw / 2, ty - 5, { c: "#fff", s: 11 });
        if (F) arrow(ctx, bx - F / 5 - 8, ty - 5, bx - 2, ty - 5, "#dc2626", 3);
        var g = { x: 50, y: H * 0.42, w: W - 70, h: H * 0.5 }, Fr = frame(ctx, C, g, [0, 250], [0, 2.6], "F (N)", "a (m/s²)");
        [50, 100, 150, 200, 250].forEach(function (q) { txt(ctx, n(q), Fr.X(q), g.y + g.h + 10, { c: C.muted, s: 10 }); });
        [1, 2].forEach(function (q) { txt(ctx, n(q), g.x - 4, Fr.Y(q), { c: C.muted, s: 10, a: "right" }); });
        [[100, "#f97316"], [200, "#0ea5e9"]].forEach(function (L2) { ctx.strokeStyle = L2[1]; ctx.globalAlpha = 0.35; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(Fr.X(0), Fr.Y(0)); ctx.lineTo(Fr.X(250), Fr.Y(250 / L2[0])); ctx.stroke(); ctx.globalAlpha = 1; txt(ctx, n(L2[0]) + " kg", Fr.X(240), Fr.Y(240 / L2[0]) - 10, { c: L2[1], s: 11, a: "right" }); });
        Object.keys(pts).forEach(function (k) { var p = pts[k]; K.dot(ctx, Fr.X(p[0]), Fr.Y(p[1]), 4, p[2] === 100 ? "#f97316" : "#0ea5e9"); });
        K.dot(ctx, Fr.X(F), Fr.Y(a), 7, "#dc2626", "#fff");
        out.innerHTML = "<span>a = F / m = " + n(F) + " ÷ " + n(m) + " = <b>" + n(rd(a, 2)) + " m/s²</b></span>";
      } else {
        var fy = H * 0.86, topY = H * 0.08, px = (fy - topY) / 3;
        ctx.fillStyle = surf === "floor" ? "#64748b" : surf === "straw" ? "#facc15" : "#f472b6"; ctx.fillRect(W * 0.3, fy, W * 0.4, H * 0.1);
        txt(ctx, SURF[surf][1] + "  (Δt = " + n(SURF[surf][0]) + " s)", W / 2, fy + H * 0.06, { c: "#0f172a", s: 11 });
        ctx.strokeStyle = C.line; ctx.beginPath(); ctx.moveTo(W * 0.2, fy - h * px); ctx.lineTo(W * 0.8, fy - h * px); ctx.stroke(); txt(ctx, "h = " + n(h) + " m", W * 0.82, fy - h * px, { c: C.muted, s: 11, a: "left" });
        var ey = fy - h * px - 14, res = null;
        if (egg) {
          if (!egg.res) { egg.v += 9.8 * dt; egg.y += egg.v * dt; if (egg.y >= egg.h) { egg.y = egg.h; var vi = Math.sqrt(2 * 9.8 * egg.h), Fc = 0.06 * vi / SURF[egg.s][0]; egg.res = { v: vi, F: Fc, br: Fc > 25 }; if (egg.res.br && egg.s === "floor") tick(2); if (!egg.res.br && egg.h >= 2) tick(3); } }
          ey = fy - (egg.h - egg.y) * px - 14; res = egg.res;
        }
        if (res && res.br) { ctx.fillStyle = "#fde68a"; ctx.beginPath(); ctx.ellipse(W / 2, fy - 4, 26, 6, 0, 0, Math.PI * 2); ctx.fill(); K.dot(ctx, W / 2, fy - 6, 7, "#f59e0b"); }
        else { ctx.fillStyle = "#fffbeb"; ctx.strokeStyle = "#a16207"; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(W / 2, ey, 11, 14, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
        out.innerHTML = res ? "<span>v = √(2gh) = <b>" + n(rd(res.v, 2)) + " m/s</b></span><span>F = mΔv/Δt = 0.06 × " + n(rd(res.v, 2)) + " ÷ " + n(SURF[egg.s][0]) + " = <b>" + n(rd(res.F, 1)) + " N</b></span><span>" + (res.br ? "💥 " + t("Broken (more than 25 N)", "انكسرت (أكثر من ٢٥ N)") : "✔ " + t("Safe (25 N or less)", "سليمة (٢٥ N أو أقل)")) + "</span>"
          : "<span>" + t("Egg mass 60 g. It breaks above 25 N.", "كتلة البيضة ٦٠ جم، وتنكسر إذا زادت القوة على ٢٥ N.") + "</span>";
      }
    });
  };

  var NM = {
    sec2phy_vernier: ["Vernier caliper simulation", "محاكاة القدمة ذات الورنية"], sec2phy_dims: ["Dimension balance", "ميزان الأبعاد"],
    sec2phy_error: ["Parallax and precision bench", "منضدة زاوية النظر والدقة"], sec2phy_motion: ["Displacement–time track", "مسار الإزاحة–الزمن"],
    sec2phy_accel: ["Inclined track and v–t graph", "المسار المائل ومنحنى السرعة–الزمن"], sec2phy_inertia: ["Inertia and momentum track", "مسار القصور الذاتي وكمية الحركة"],
    sec2phy_newton2: ["F = ma and collision lab", "معمل F = ma والتصادم"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();

/* ---------- Secondary 2 Physics live simulations (part 2): fluids and gas laws ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit, P = E.s2pkit;
  var txt = K.txt, mk = P.mk, lt = P.lt, hint = P.hint, box = P.box, meter = P.meter, sl = P.sl, clamp = P.clamp, rd = P.rd, sci = P.sci, arrow = P.arrow, frame = P.frame;

  /* =========================================================
     8. sec2phy_density - build a block, drop it in a liquid
     ========================================================= */
  L.sec2phy_density = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the block's mass and volume, choose a liquid and see whether it floats or sinks. ρ = m / V; relative density = ρ ÷ 1000.",
      "اضبط كتلة القطعة وحجمها، واختر سائلًا وشاهد هل تطفو أم تغوص. ρ = m / V، والكثافة النسبية = ρ ÷ 1000.")) + '<div class="seg" id="s2dL"></div>';
    var LQ = { w: [1000, t("Water", "الماء"), "#bfdbfe"], g: [1260, t("Glycerin", "الجليسرين"), "#fde68a"], m: [13600, t("Mercury", "الزئبق"), "#cbd5e1"] };
    var MAT = [[2700, t("aluminium", "الألومنيوم")], [7900, t("iron", "الحديد")], [8890, t("copper", "النحاس")], [11400, t("lead", "الرصاص")], [19300, t("gold", "الذهب")], [2600, t("glass", "الزجاج")], [1600, t("sugar", "السكر")], [1000, t("like water", "مثل الماء")]];
    var S = mk(host, 0.55, 360);
    var c = box(host, L._slider(t("Mass m", "الكتلة m"), 10, 2000, 10, 300, "g") + L._slider(t("Volume V", "الحجم V"), 10, 500, 10, 200, "cm³"));
    var out = meter(host);
    var tick = L._goals(host, [t("Make an aluminium block (2700 kg/m³).", "اصنع قطعة ألومنيوم (" + lt("2700 kg/m³") + ")."), t("Make a block that floats on water.", "اصنع قطعة تطفو على الماء."),
      t("Find a block that sinks in water but floats on mercury.", "أوجد قطعة تغوص في الماء وتطفو على الزئبق."), t("Make the relative density exactly 1: it hangs inside water.", "اجعل الكثافة النسبية ١ تمامًا: تبقى معلقة داخل الماء.")], done);
    var m = 300, V = 200, lq = "w", y = 0.2;
    K.seg(host, "#s2dL", Object.keys(LQ).map(function (k) { return [k, LQ[k][1]]; }), "w", function (v) { lq = v; y = 0; });
    sl(c, 0, function (q) { return n(q) + " g"; }, function (q) { m = q; });
    sl(c, 1, function (q) { return n(q) + " cm³"; }, function (q) { V = q; });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, rho = m / V * 1000, rl = LQ[lq][0], rel = rho / 1000;
      if (Math.abs(rho - 2700) <= 50) tick(0);
      if (lq === "w" && rho < 1000) tick(1);
      if (lq === "m" && rho > 1000 && rho < 13600) tick(2);
      if (lq === "w" && Math.abs(rel - 1) < 0.0051) tick(3);
      ctx.clearRect(0, 0, W, H);
      var bx = W * 0.08, bw = W * 0.5, top = H * 0.08, bh = H * 0.86, surf = top + bh * 0.25;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx, top); ctx.lineTo(bx, top + bh); ctx.lineTo(bx + bw, top + bh); ctx.lineTo(bx + bw, top); ctx.stroke();
      ctx.fillStyle = LQ[lq][2]; ctx.fillRect(bx + 2, surf, bw - 4, top + bh - surf - 2);
      var side = clamp(Math.cbrt(V) * 6, 26, 70), target;
      if (rho < rl - 0.5) { var frac = rho / rl; target = surf - side * (1 - frac); }
      else if (Math.abs(rho - rl) <= 5) target = surf + (top + bh - surf) * 0.35;
      else target = top + bh - side - 3;
      y += ((target - y) || 0) * Math.min(1, dt * 3); if (!y) y = top;
      ctx.fillStyle = rho > 5000 ? "#475569" : rho > 1500 ? "#94a3b8" : "#a16207"; K.rr(ctx, bx + bw / 2 - side / 2, y, side, side, 4); ctx.fill();
      txt(ctx, n(Math.round(rho)), bx + bw / 2, y + side / 2, { c: "#fff", s: 11 });
      var x0 = bx + bw + 14, fs = Math.max(11, Math.min(14, (W - x0) / 12));
      txt(ctx, "ρ = m / V", x0, top + 10, { c: C.ink, s: fs + 2, a: "left" });
      txt(ctx, n(m) + " g ÷ " + n(V) + " cm³", x0, top + 36, { c: C.muted, s: fs - 1, a: "left" });
      txt(ctx, "= " + n(rd(m / V, 3)) + " g/cm³", x0, top + 58, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "= " + n(Math.round(rho)) + " kg/m³", x0, top + 80, { c: C.ink, s: fs, a: "left" });
      txt(ctx, LQ[lq][1] + ": " + n(rl) + " kg/m³", x0, top + 110, { c: C.muted, s: fs - 1, a: "left" });
      txt(ctx, rho < rl - 0.5 ? t("FLOATS", "تطفو") : Math.abs(rho - rl) <= 5 ? t("SUSPENDED", "معلقة") : t("SINKS", "تغوص"), x0, top + 140, { c: rho < rl ? "#16a34a" : "#dc2626", s: fs + 4, a: "left" });
      var near = null; MAT.forEach(function (q) { if (Math.abs(rho - q[0]) / q[0] < 0.02) near = q[1]; });
      out.innerHTML = "<span>" + t("Relative density: ", "الكثافة النسبية: ") + "<b>" + n(rd(rel, 3)) + "</b> " + t("(no unit)", "(بلا وحدة)") + "</span>" + (near ? "<span class=\"chip green\">≈ " + esc(near) + "</span>" : "");
    });
  };

  /* =========================================================
     9. sec2phy_flow - pipe that narrows: continuity and turbulence
     ========================================================= */
  L.sec2phy_flow = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the orange handle (or use the slider) to change the diameter of the narrow part. The wide part is 2 cm. A₁v₁ = A₂v₂.",
      "اسحب المقبض البرتقالي (أو استخدم المنزلق) لتغيير قطر الجزء الضيق. قطر الجزء الواسع ٢ سم. A₁v₁ = A₂v₂."));
    var S = mk(host, 0.5, 330);
    var c = box(host, L._slider(t("Inlet speed v₁", "سرعة الدخول v₁"), 0.05, 0.5, 0.01, 0.2, "m/s") + L._slider(t("Narrow diameter d₂", "قطر الجزء الضيق d₂"), 0.5, 2, 0.1, 1.5, "cm"));
    var out = meter(host);
    var tick = L._goals(host, [t("Narrow the pipe so the liquid goes at least twice as fast.", "ضيّق الأنبوبة لتصبح سرعة السائل الضعف على الأقل."), t("Book example: v₁ = 0.10 m/s and d₂ = 1 cm, giving v₂ = 0.4 m/s.", "مثال الكتاب: " + lt("v₁ = 0.10 m/s") + " و" + lt("d₂ = 1 cm") + " فتكون " + lt("v₂ = 0.4 m/s") + "."),
      t("Make the flow turbulent (v₂ above 1.2 m/s).", "اجعل الانسياب مضطربًا (" + lt("v₂") + " أكبر من " + lt("1.2 m/s") + ").")], done);
    var v1 = 0.2, d2 = 1.5, drag = false, tm = 0, Pt = [], i;
    for (i = 0; i < 70; i++) Pt.push({ x: Math.random(), f: K.rnd(-0.85, 0.85), ph: Math.random() * 6 });
    var inp2 = c.querySelectorAll('input[type="range"]')[1];
    sl(c, 0, function (q) { return n(rd(q, 2)) + " m/s"; }, function (q) { v1 = rd(q, 2); });
    sl(c, 1, function (q) { return n(rd(q, 1)) + " cm"; }, function (q) { d2 = rd(q, 1); });
    function geo() { var W = S.W, H = S.H, cy = H * 0.42, R1 = H * 0.3; return { cy: cy, R1: R1, R2: R1 * d2 / 2, xa: W * 0.38, xb: W * 0.55, W: W }; }
    function rAt(g, x) { var px = x * g.W; if (px <= g.xa) return g.R1; if (px >= g.xb) return g.R2; var u = (px - g.xa) / (g.xb - g.xa); u = u * u * (3 - 2 * u); return g.R1 + (g.R2 - g.R1) * u; }
    S.drag({
      down: function (p) { var g = geo(), hx = g.W * 0.78, hy = g.cy - g.R2; if (Math.hypot(p.x - hx, p.y - hy) < 26) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(), r = clamp((g.cy - p.y) / g.R1 * 2, 0.5, 2); d2 = Math.round(r * 10) / 10; inp2.value = d2; inp2.dispatchEvent(new Event("input")); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.hypot(p.x - g.W * 0.78, p.y - (g.cy - g.R2)) < 26; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), v2 = v1 * Math.pow(2 / d2, 2), turb = v2 > 1.2, Qv = Math.PI * 0.01 * 0.01 * v1;
      tm += dt;
      if (v2 >= 2 * v1 - 1e-9) tick(0);
      if (Math.abs(v1 - 0.1) < 0.001 && Math.abs(d2 - 1) < 0.001) tick(1);
      if (turb) tick(2);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#dbeafe"; ctx.beginPath(); var x;
      for (x = 0; x <= 1.0001; x += 0.01) ctx.lineTo(x * W, g.cy - rAt(g, x)); for (x = 1; x >= -0.0001; x -= 0.01) ctx.lineTo(x * W, g.cy + rAt(g, x)); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 3; ctx.beginPath(); for (x = 0; x <= 1.0001; x += 0.01) ctx.lineTo(x * W, g.cy - rAt(g, x)); ctx.stroke(); ctx.beginPath(); for (x = 0; x <= 1.0001; x += 0.01) ctx.lineTo(x * W, g.cy + rAt(g, x)); ctx.stroke();
      Pt.forEach(function (q) {
        var r = rAt(g, q.x), vl = v1 * Math.pow(g.R1 / r, 2), spd = Math.min(900, vl * 300);
        q.x += spd * dt / W; if (q.x > 1) { q.x -= 1; q.f = K.rnd(-0.85, 0.85); }
        var yy = g.cy + q.f * r, xx = q.x * W;
        if (turb && xx > g.xb) { yy += Math.sin(tm * 9 + q.ph) * r * 0.45; xx += Math.cos(tm * 9 + q.ph) * 8; yy = clamp(yy, g.cy - r + 3, g.cy + r - 3); }
        K.dot(ctx, xx, yy, 2.6, "#1d4ed8");
      });
      if (turb) { ctx.strokeStyle = "rgba(220,38,38,.7)"; ctx.lineWidth = 1.5; for (i = 0; i < 4; i++) { var vx = g.xb + (i + 0.5) * (W - g.xb) / 4, vy = g.cy + Math.sin(tm * 3 + i) * g.R2 * 0.3; ctx.beginPath(); ctx.arc(vx, vy, Math.max(5, g.R2 * 0.4), tm * 5 + i, tm * 5 + i + 4.5); ctx.stroke(); } }
      K.dot(ctx, W * 0.78, g.cy - g.R2, 10, "#f97316", "#fff");
      txt(ctx, "A₁ , v₁", W * 0.16, g.cy - g.R1 - 12, { c: C.ink, s: 12 }); txt(ctx, "A₂ , v₂", W * 0.9, g.cy - g.R2 - 14, { c: C.ink, s: 12 });
      txt(ctx, turb ? t("TURBULENT: vortices", "مضطرب: دوامات") : t("laminar (streamline) flow", "انسياب هادئ"), W / 2, H * 0.92, { c: turb ? "#dc2626" : "#16a34a", s: 13 });
      out.innerHTML = "<span>A₁ = π(0.01)² = <b>" + sci(Math.PI * 1e-4) + " m²</b></span><span>A₂ = <b>" + sci(Math.PI * Math.pow(d2 / 200, 2)) + " m²</b></span><span>v₂ = v₁ × A₁/A₂ = <b>" + n(rd(v2, 3)) + " m/s</b></span><span>Q_v = A v = <b>" + sci(Qv) + " m³/s</b></span>";
    });
  };

  /* =========================================================
     10. sec2phy_visc - shearing plates + falling balls
     ========================================================= */
  L.sec2phy_visc = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a liquid. Left: the top plate (area 0.1 m²) slides at speed v over a layer d thick; F = ηAv/d. Right: drop a steel ball and time it. η values are approximate at 20°C.",
      "اختر سائلًا. يسارًا: اللوح العلوي (مساحته 0.1 m²) ينزلق بسرعة v فوق طبقة سمكها d، وF = ηAv/d. يمينًا: أسقط كرة صلب وقِس زمنها. قيم η تقريبية عند ٢٠°س.")) + '<div class="seg" id="s2vL"></div>';
    var LQ = { a: [0.0012, t("Alcohol", "الكحول"), "#ecfeff"], w: [0.001, t("Water", "الماء"), "#bfdbfe"], g: [1.5, t("Glycerin", "الجليسرين"), "#fde68a"] };
    var S = mk(host, 0.6, 380);
    var c = box(host, L._slider(t("Plate speed v", "سرعة اللوح v"), 0, 0.5, 0.01, 0.1, "m/s") + L._slider(t("Layer thickness d", "سمك الطبقة d"), 1, 5, 0.5, 2, "mm") + L._slider(t("Ball radius r", "نصف قطر الكرة r"), 1.5, 4, 0.5, 3, "mm") +
      '<div class="btn-row"><button type="button" class="btn sm" id="s2vDrop">⚫ ' + t("Drop the ball", "أسقط الكرة") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Drop a ball in water and in glycerin and compare the times.", "أسقط كرة في الماء وفي الجليسرين وقارن الزمنين."), t("In glycerin, drop a big ball (3 mm or more) and a small one (2 mm or less).", "في الجليسرين أسقط كرة كبيرة (٣ مم فأكثر) وصغيرة (٢ مم فأقل)."),
      t("Make the viscous force on the plate 15 N.", "اجعل قوة اللزوجة على اللوح ١٥ N.")], done);
    var lq = "w", v = 0.1, d = 2, r = 3, ball = null, tm = 0, log = [];
    K.seg(host, "#s2vL", Object.keys(LQ).map(function (k) { return [k, LQ[k][1]]; }), "w", function (x) { lq = x; ball = null; });
    sl(c, 0, function (q) { return n(rd(q, 2)) + " m/s"; }, function (q) { v = rd(q, 2); });
    sl(c, 1, function (q) { return n(q) + " mm"; }, function (q) { d = q; });
    sl(c, 2, function (q) { return n(q) + " mm"; }, function (q) { r = q; });
    c.querySelector("#s2vDrop").onclick = function () { ball = { y: 0, t: 0, T: (0.3 + 2 * LQ[lq][0]) * (3 / r), lq: lq, r: r, end: false }; };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, eta = LQ[lq][0], F = eta * 0.1 * v / (d / 1000), i;
      tm += dt;
      if (Math.abs(F - 15) <= 0.3) tick(2);
      ctx.clearRect(0, 0, W, H);
      // plates
      var px = 14, pw = W * 0.55, top = H * 0.16, bot = H * 0.84, gap = bot - top;
      ctx.fillStyle = LQ[lq][2]; ctx.fillRect(px, top, pw, gap);
      ctx.fillStyle = "#64748b"; ctx.fillRect(px, top - 12, pw, 12); ctx.fillStyle = "#334155"; ctx.fillRect(px, bot, pw, 12);
      for (i = 0; i <= 6; i++) { var fy = bot - i / 6 * gap, len = v / 0.5 * pw * 0.6 * (i / 6); if (len > 2) arrow(ctx, px + 20, fy - (i === 6 ? 6 : 0), px + 20 + len, fy - (i === 6 ? 6 : 0), "#2563eb", 2); }
      ctx.strokeStyle = "rgba(37,99,235,.35)"; ctx.beginPath(); ctx.moveTo(px + 20, bot); ctx.lineTo(px + 20 + v / 0.5 * pw * 0.6, top); ctx.stroke();
      if (v > 0) arrow(ctx, px + pw * 0.55, top - 22, px + pw * 0.55 + 20 + F * 2, top - 22, "#dc2626", 3);
      txt(ctx, "F = " + n(rd(F, 2)) + " N", px + pw * 0.5, top - 22, { c: "#dc2626", s: 12, a: "right" });
      txt(ctx, "d = " + n(d) + " mm", px + 6, (top + bot) / 2, { c: C.ink, s: 11, a: "left" });
      // cylinder
      var cx = W * 0.8, cw = Math.min(70, W * 0.16), ct = H * 0.08, cb = H * 0.94;
      ctx.fillStyle = LQ[lq][2]; ctx.fillRect(cx - cw / 2, ct, cw, cb - ct); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(cx - cw / 2, ct, cw, cb - ct);
      if (ball) {
        if (!ball.end) { ball.t += dt; ball.y = Math.min(1, ball.t / ball.T); if (ball.y >= 1) { ball.end = true; log.push([ball.lq, ball.r, ball.T]); if (log.length > 8) log.shift(); check(); } }
        K.dot(ctx, cx, ct + 8 + ball.y * (cb - ct - 16), 3 + ball.r * 1.5, "#334155");
        txt(ctx, n(rd(ball.end ? ball.T : ball.t, 2)) + " s", cx, cb + 0, { c: C.ink, s: 12 });
      }
      out.innerHTML = "<span>η (" + esc(LQ[lq][1]) + ") ≈ <b>" + n(eta) + " N·s/m²</b></span><span>F = ηAv/d = <b>" + n(rd(F, 3)) + " N</b></span>" +
        "<span>" + t("Fall times: ", "أزمنة السقوط: ") + "<b>" + (log.length ? log.map(function (q) { return esc(LQ[q[0]][1]) + " r=" + n(q[1]) + ": " + n(rd(q[2], 2)) + " s"; }).join(" · ") : "—") + "</b></span>";
    });
    function check() {
      var w = log.some(function (q) { return q[0] === "w"; }), g = log.some(function (q) { return q[0] === "g"; });
      if (w && g) tick(0);
      var big = log.some(function (q) { return q[0] === "g" && q[1] >= 3; }), small = log.some(function (q) { return q[0] === "g" && q[1] <= 2; });
      if (big && small) tick(1);
    }
  };

  /* =========================================================
     11. sec2phy_pressure - depth probe, U-tube, barometer
     ========================================================= */
  L.sec2phy_pressure = function (host, cfg, done) {
    host.innerHTML = hint(t("Tank: drag the red probe up and down. U-tube: pour oil into the left arm. Barometer: tilt the tube and climb a mountain.",
      "الخزان: اسحب المجس الأحمر لأعلى ولأسفل. الأنبوبة: صب زيتًا في الشعبة اليسرى. البارومتر: أمِل الأنبوبة واصعد جبلًا.")) + '<div class="seg" id="s2pM"></div><div class="seg" id="s2pLq"></div>';
    var LQ = { w: [1000, t("Fresh water", "ماء عذب"), "#bfdbfe"], s: [1030, t("Seawater", "ماء البحر"), "#99f6e4"], m: [13600, t("Mercury", "الزئبق"), "#cbd5e1"] };
    var S = mk(host, 0.62, 400);
    var c = box(host, '<div id="s2pU" style="display:none">' + L._slider(t("Oil column hₒ", "عمود الزيت hₒ"), 0, 10, 0.5, 0, "cm") + '</div><div id="s2pB" style="display:none">' + L._slider(t("Tilt", "الميل"), 0, 60, 1, 0, "°") + L._slider(t("Altitude", "الارتفاع عن سطح البحر"), 0, 2500, 50, 0, "m") + "</div>");
    var out = meter(host);
    var tick = L._goals(host, [t("In fresh water, find the depth where the total pressure is 2 atm.", "في الماء العذب أوجد العمق الذي يكون عنده الضغط الكلي " + lt("2 atm") + "."), t("U-tube: pour 5 cm of oil (800 kg/m³) and read the water height.", "الأنبوبة: صب " + lt("5 cm") + " من الزيت (" + lt("800 kg/m³") + ") واقرأ ارتفاع الماء."),
      t("Tilt the barometer 30° or more at sea level: the vertical height stays 76 cm.", "أمِل البارومتر ٣٠° أو أكثر عند سطح البحر: يبقى الارتفاع الرأسي ٧٦ سم."), t("Climb until the barometer reads 74.15 cmHg.", "اصعد حتى يقرأ البارومتر " + lt("74.15 cmHg") + ".")], done);
    var mode = "t", lq = "w", h = 3, ho = 0, tilt = 0, alt = 0, drag = false, Pa = 1.013e5;
    var lqSeg = host.querySelector("#s2pLq");
    K.seg(host, "#s2pM", [["t", t("Tank", "الخزان")], ["u", t("U-tube", "أنبوبة U")], ["b", t("Barometer", "البارومتر")]], "t", function (v) {
      mode = v; lqSeg.style.display = v === "t" ? "" : "none"; c.querySelector("#s2pU").style.display = v === "u" ? "" : "none"; c.querySelector("#s2pB").style.display = v === "b" ? "" : "none"; });
    K.seg(host, "#s2pLq", Object.keys(LQ).map(function (k) { return [k, LQ[k][1]]; }), "w", function (v) { lq = v; });
    sl(c, 0, function (q) { return n(q) + " cm"; }, function (q) { ho = q; if (q === 5) tick(1); });
    sl(c, 1, function (q) { return n(q) + "°"; }, function (q) { tilt = q; if (q >= 30 && alt === 0) tick(2); });
    sl(c, 2, function (q) { return n(q) + " m"; }, function (q) { alt = q; if (Math.abs(baro() - 74.15) < 0.1) tick(3); if (tilt >= 30 && q === 0) tick(2); });
    function baro() { return 76 * Math.exp(-alt / 8000); }
    function tg() { var W = S.W, H = S.H; return { x: W * 0.08, w: W * 0.42, top: H * 0.08, bot: H * 0.92 }; }
    S.drag({
      down: function (p) { if (mode !== "t") return false; var g = tg(), py = g.top + h / 12 * (g.bot - g.top); if (Math.abs(p.y - py) < 24 && p.x > g.x && p.x < g.x + g.w + 20) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = tg(); h = clamp((p.y - g.top) / (g.bot - g.top) * 12, 0, 12); h = Math.round(h * 100) / 100; },
      up: function () { drag = false; },
      hover: function (p) { if (mode !== "t") return false; var g = tg(); return Math.abs(p.y - (g.top + h / 12 * (g.bot - g.top))) < 24; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, i;
      ctx.clearRect(0, 0, W, H);
      if (mode === "t") {
        var g = tg(), rho = LQ[lq][0], pl = rho * 9.8 * h, Pt = Pa + pl;
        ctx.fillStyle = LQ[lq][2]; ctx.fillRect(g.x, g.top, g.w, g.bot - g.top); ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.strokeRect(g.x, g.top, g.w, g.bot - g.top);
        for (i = 0; i <= 12; i += 2) { var yy = g.top + i / 12 * (g.bot - g.top); ctx.strokeStyle = "rgba(30,58,138,.35)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(g.x + g.w - 12, yy); ctx.lineTo(g.x + g.w, yy); ctx.stroke(); txt(ctx, n(i) + " m", g.x + g.w + 4, yy, { c: C.muted, s: 10, a: "left" }); }
        var py = g.top + h / 12 * (g.bot - g.top);
        ctx.strokeStyle = "#dc2626"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(g.x + g.w / 2, g.top - 6); ctx.lineTo(g.x + g.w / 2, py); ctx.stroke(); K.dot(ctx, g.x + g.w / 2, py, 9, "#dc2626", "#fff");
        var arr = 8 + pl / 1e4 * 2.2; if (lq === "m") arr = 8 + Math.min(60, pl / 1e5 * 4);
        arrow(ctx, g.x + g.w / 2 - 12 - Math.min(arr, 60), py, g.x + g.w / 2 - 11, py, "#7c3aed", 2); arrow(ctx, g.x + g.w / 2 + 12 + Math.min(arr, 60), py, g.x + g.w / 2 + 11, py, "#7c3aed", 2);
        var x0 = g.x + g.w + 44, fs = Math.max(11, Math.min(14, (W - x0) / 13));
        txt(ctx, "h = " + n(rd(h, 2)) + " m", x0, H * 0.18, { c: C.ink, s: fs + 2, a: "left" });
        txt(ctx, "ρgh = " + sci(pl) + " Pa", x0, H * 0.32, { c: C.ink, s: fs, a: "left" });
        txt(ctx, "P = Pₐ + ρgh", x0, H * 0.46, { c: C.muted, s: fs, a: "left" });
        txt(ctx, "= " + sci(Pt) + " Pa", x0, H * 0.58, { c: C.ink, s: fs, a: "left" });
        txt(ctx, "= " + n(rd(Pt / Pa, 3)) + " atm", x0, H * 0.7, { c: "#7c3aed", s: fs + 2, a: "left" });
        if (lq === "w" && Math.abs(Pt / Pa - 2) < 0.015) tick(0);
        out.innerHTML = "<span>" + t("Same depth, any direction: the pressure acts perpendicular to every surface.", "عند نفس العمق وفي كل الاتجاهات: الضغط يؤثر عموديًا على أي سطح.") + "</span>";
      } else if (mode === "u") {
        var hw = ho * 0.8, sc = (H * 0.5) / 12, base = H * 0.86, lxA = W * 0.3, lxB = W * 0.6, tw = W * 0.08;
        var sep = base - H * 0.32 + 0 * sc, waterTopB = sep - hw * sc, oilTop = sep - ho * sc;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(lxA - tw / 2, H * 0.06); ctx.lineTo(lxA - tw / 2, base); ctx.lineTo(lxB + tw / 2, base); ctx.lineTo(lxB + tw / 2, H * 0.06); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(lxA + tw / 2, H * 0.06); ctx.lineTo(lxA + tw / 2, base - tw); ctx.lineTo(lxB - tw / 2, base - tw); ctx.lineTo(lxB - tw / 2, H * 0.06); ctx.stroke();
        ctx.fillStyle = "#93c5fd"; ctx.fillRect(lxA - tw / 2 + 2, sep, tw - 4, base - sep - 2); ctx.fillRect(lxA - tw / 2 + 2, base - tw + 2, lxB - lxA + tw - 4, tw - 4); ctx.fillRect(lxB - tw / 2 + 2, waterTopB, tw - 4, base - waterTopB - 2);
        if (ho > 0) { ctx.fillStyle = "#facc15"; ctx.fillRect(lxA - tw / 2 + 2, oilTop, tw - 4, sep - oilTop); }
        ctx.strokeStyle = "#dc2626"; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(lxA - tw, sep); ctx.lineTo(lxB + tw, sep); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, t("separating level", "السطح الفاصل"), lxB + tw, sep + 12, { c: "#dc2626", s: 10, a: "left" });
        txt(ctx, "hₒ = " + n(ho) + " cm", lxA - tw, (oilTop + sep) / 2, { c: "#a16207", s: 12, a: "right" });
        txt(ctx, "h_w = " + n(rd(hw, 2)) + " cm", lxB + tw + 4, (waterTopB + sep) / 2, { c: "#1d4ed8", s: 12, a: "left" });
        out.innerHTML = "<span>ρₒhₒ = ρ_w h_w ⇒ h_w = 800 × " + n(ho) + " ÷ 1000 = <b>" + n(rd(hw, 2)) + " cm</b></span><span>" + t("Relative density of oil = h_w / hₒ = ", "الكثافة النسبية للزيت = h_w / hₒ = ") + "<b>" + (ho ? n(0.8) : "—") + "</b></span>";
      } else {
        var hb = baro(), bx = W * 0.35, by = H * 0.9, scale = (H * 0.75) / 100, rad = tilt * Math.PI / 180, Lt = 100 * scale, ux = Math.sin(rad), uy = -Math.cos(rad);
        ctx.fillStyle = "#cbd5e1"; ctx.fillRect(bx - W * 0.18, by - 8, W * 0.36, 20); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(bx - W * 0.18, by - 18, W * 0.36, 30);
        var len = hb / Math.cos(rad) * scale;
        ctx.save(); ctx.translate(bx, by); ctx.rotate(rad);
        ctx.fillStyle = "#e2e8f0"; ctx.fillRect(-9, -Lt, 18, Lt + 4); ctx.strokeStyle = C.muted; ctx.strokeRect(-9, -Lt, 18, Lt + 4);
        ctx.fillStyle = "#94a3b8"; ctx.fillRect(-7, -Math.min(len, Lt - 2), 14, Math.min(len, Lt - 2) + 4);
        ctx.restore();
        var topY = by - hb * scale;
        ctx.strokeStyle = "#dc2626"; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(bx - 30, topY); ctx.lineTo(W * 0.85, topY); ctx.moveTo(W * 0.8, topY); ctx.lineTo(W * 0.8, by); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, n(rd(hb, 2)) + " cm", W * 0.82, (topY + by) / 2, { c: "#dc2626", s: 13, a: "left" });
        txt(ctx, t("vacuum", "فراغ"), bx + ux * (Lt - 10), by + uy * (Lt - 10), { c: C.muted, s: 10 });
        out.innerHTML = "<span>" + t("Vertical height: ", "الارتفاع الرأسي: ") + "<b>" + n(rd(hb, 2)) + " cmHg</b></span><span>" + t("Length of mercury in tube: ", "طول الزئبق في الأنبوبة: ") + "<b>" + n(rd(hb / Math.cos(rad), 1)) + " cm</b></span><span>Pₐ = ρgh = <b>" + sci(13595 * 9.8 * hb / 100) + " Pa</b></span>" + (alt ? "<span>" + t("(altitude model is approximate)", "(نموذج الارتفاع تقريبي)") + "</span>" : "");
      }
    });
  };

  /* =========================================================
     12. sec2phy_hydraulic - manometer + hydraulic press
     ========================================================= */
  L.sec2phy_hydraulic = function (host, cfg, done) {
    host.innerHTML = hint(t("Manometer: change the gas pressure and read the mercury levels. Press: set the areas and the force, then drag the small piston down to lift the 800 kg car.",
      "المانومتر: غيّر ضغط الغاز واقرأ مستويي الزئبق. المكبس: اضبط المساحتين والقوة ثم اسحب المكبس الصغير لأسفل لرفع السيارة ٨٠٠ كجم.")) + '<div class="seg" id="s2hM"></div>';
    var S = mk(host, 0.62, 400);
    var c = box(host, '<div id="s2hA">' + L._slider(t("Gas pressure P", "ضغط الغاز P"), 40, 130, 1, 90, "cmHg") + '</div><div id="s2hB" style="display:none"><div class="seg" id="s2ha"></div>' + L._slider(t("Large piston area A", "مساحة المكبس الكبير A"), 100, 1000, 50, 400, "cm²") + L._slider(t("Force on small piston f", "القوة على المكبس الصغير f"), 0, 200, 10, 100, "N") + '<div class="btn-row"><button type="button" class="btn sm ghost" id="s2hR">↺ ' + t("Lower the car", "أنزل السيارة") + "</button></div></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Manometer: set the gas pressure to 112 cmHg (h = 36 cm).", "المانومتر: اجعل ضغط الغاز " + lt("112 cmHg (h = 36 cm)") + "."), t("Make the gas pressure less than atmospheric.", "اجعل ضغط الغاز أقل من الضغط الجوي."),
      t("Lift the 800 kg car with a force of only 100 N.", "ارفع السيارة ٨٠٠ كجم بقوة " + lt("100 N") + " فقط."), t("Raise the car by 1 cm.", "ارفع السيارة ١ سم.")], done);
    var mode = "m", Pg = 90, a = 10, A = 400, f = 100, y1 = 0, drag = false, lastY = 0;
    K.seg(host, "#s2hM", [["m", t("Manometer", "المانومتر")], ["p", t("Hydraulic press", "المكبس الهيدروليكي")]], "m", function (v) { mode = v; c.querySelector("#s2hA").style.display = v === "m" ? "" : "none"; c.querySelector("#s2hB").style.display = v === "p" ? "" : "none"; });
    K.seg(c, "#s2ha", [["5", "a = 5 cm²"], ["10", "a = 10 cm²"], ["20", "a = 20 cm²"]], "10", function (v) { a = Number(v); y1 = 0; });
    sl(c, 0, function (q) { return n(q) + " cmHg"; }, function (q) { Pg = q; if (q === 112) tick(0); if (q < 76) tick(1); });
    sl(c, 1, function (q) { return n(q) + " cm²"; }, function (q) { A = q; y1 = 0; });
    sl(c, 2, function (q) { return n(q) + " N"; }, function (q) { f = q; });
    c.querySelector("#s2hR").onclick = function () { y1 = 0; };
    function Fbig() { return f * A / a; }
    function pg() { var W = S.W, H = S.H; return { sx: W * 0.16, sy: H * 0.3, bx: W * 0.62, base: H * 0.8, sc: (H * 0.3) / 100 }; }
    S.drag({
      down: function (p) { if (mode !== "p") return false; var g = pg(); if (Math.abs(p.x - g.sx) < 34 && Math.abs(p.y - (g.sy + y1 * g.sc)) < 30) { drag = true; lastY = p.y; return true; } return false; },
      move: function (p) {
        if (!drag) return; var g = pg(), dy = (p.y - lastY) / g.sc; lastY = p.y;
        if (dy > 0 && Fbig() < 8000) { E.toast(t("F = ", "F = ") + n(Math.round(Fbig())) + t(" N is less than the car's weight 8000 N.", " N أقل من وزن السيارة ٨٠٠٠ N.")); drag = false; return; }
        y1 = clamp(y1 + dy, 0, 100);
        if (y1 > 0.5 && f <= 100) tick(2);
        if (y1 * a / A >= 1 - 1e-6) tick(3);
      },
      up: function () { drag = false; },
      hover: function (p) { if (mode !== "p") return false; var g = pg(); return Math.abs(p.x - g.sx) < 34 && Math.abs(p.y - (g.sy + y1 * g.sc)) < 30; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "m") {
        var hcm = Pg - 76, sc = H * 0.35 / 60, mid = H * 0.55, lx = W * 0.3, rx = W * 0.5, tw = 22, base = H * 0.92;
        ctx.fillStyle = "#e0f2fe"; K.rr(ctx, W * 0.02, H * 0.08, W * 0.2, H * 0.3, 12); ctx.fill(); ctx.strokeStyle = "#0369a1"; ctx.lineWidth = 2; ctx.stroke();
        txt(ctx, t("gas", "غاز"), W * 0.12, H * 0.2, { c: "#0369a1", s: 13 }); txt(ctx, n(Pg) + " cmHg", W * 0.12, H * 0.28, { c: "#0369a1", s: 12 });
        ctx.strokeStyle = "#0369a1"; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(W * 0.22, H * 0.15); ctx.lineTo(lx, H * 0.15); ctx.lineTo(lx, H * 0.2); ctx.stroke();
        var yL = mid + hcm / 2 * sc, yR = mid - hcm / 2 * sc;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(lx - tw / 2, H * 0.2); ctx.lineTo(lx - tw / 2, base); ctx.lineTo(rx + tw / 2, base); ctx.lineTo(rx + tw / 2, H * 0.04); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(lx + tw / 2, H * 0.2); ctx.lineTo(lx + tw / 2, base - tw); ctx.lineTo(rx - tw / 2, base - tw); ctx.lineTo(rx - tw / 2, H * 0.04); ctx.stroke();
        ctx.fillStyle = "#94a3b8"; ctx.fillRect(lx - tw / 2 + 2, yL, tw - 4, base - yL - 2); ctx.fillRect(lx - tw / 2 + 2, base - tw + 2, rx - lx + tw - 4, tw - 4); ctx.fillRect(rx - tw / 2 + 2, yR, tw - 4, base - yR - 2);
        ctx.strokeStyle = "#dc2626"; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(lx - 30, yL); ctx.lineTo(rx + 60, yL); ctx.moveTo(rx, yR); ctx.lineTo(rx + 60, yR); ctx.stroke(); ctx.setLineDash([]);
        if (hcm) { arrow(ctx, rx + 50, yL, rx + 50, yR, "#dc2626", 2); txt(ctx, "h = " + n(Math.abs(hcm)) + " cm", rx + 58, (yL + yR) / 2, { c: "#dc2626", s: 13, a: "left" }); }
        txt(ctx, t("open to air", "مفتوح للهواء"), rx, H * 0.03 + 6, { c: C.muted, s: 10 });
        var Ppa = Pg / 76 * 1.013e5;
        out.innerHTML = "<span>P = Pₐ " + (hcm >= 0 ? "+" : "−") + " h = 76 " + (hcm >= 0 ? "+" : "−") + " " + n(Math.abs(hcm)) + " = <b>" + n(Pg) + " cmHg</b></span><span>= <b>" + n(rd(Pg / 76, 3)) + " atm</b></span><span>= <b>" + sci(Ppa) + " Pa</b></span><span>ΔP = ρgh = <b>" + sci(13600 * 9.8 * hcm / 100) + " Pa</b></span>";
      } else {
        var g = pg(), y2 = y1 * a / A, rs = clamp(Math.sqrt(a) * 6, 14, 30), rb = clamp(Math.sqrt(A) * 2.6, 40, W * 0.16), oilTop = g.sy + 14;
        ctx.fillStyle = "#fde68a"; ctx.fillRect(g.sx - rs, oilTop + y1 * g.sc, rs * 2, g.base - oilTop - y1 * g.sc); ctx.fillRect(g.sx - rs, g.base - 30, g.bx - g.sx + rb, 30);
        var ly = g.sy + 14 - y2 * g.sc * 8; ctx.fillRect(g.bx - rb, ly, rb * 2, g.base - ly);
        ctx.strokeStyle = "#b45309"; ctx.lineWidth = 2; ctx.strokeRect(g.sx - rs, g.sy - 10, rs * 2, g.base - g.sy + 10); ctx.strokeRect(g.bx - rb, g.sy - 50, rb * 2, g.base - g.sy + 50);
        ctx.fillStyle = "#64748b"; ctx.fillRect(g.sx - rs, g.sy + y1 * g.sc, rs * 2, 14); ctx.fillRect(g.bx - rb, ly - 12, rb * 2, 12);
        arrow(ctx, g.sx, g.sy + y1 * g.sc - 46, g.sx, g.sy + y1 * g.sc - 4, "#dc2626", 3); txt(ctx, "f = " + n(f) + " N", g.sx + rs + 6, g.sy + y1 * g.sc - 30, { c: "#dc2626", s: 12, a: "left" });
        ctx.fillStyle = "#ef4444"; K.rr(ctx, g.bx - 50, ly - 40, 100, 26, 8); ctx.fill(); K.dot(ctx, g.bx - 28, ly - 14, 7, "#0f172a"); K.dot(ctx, g.bx + 28, ly - 14, 7, "#0f172a"); txt(ctx, "800 kg", g.bx, ly - 27, { c: "#fff", s: 11 });
        txt(ctx, "⇕", g.sx, g.sy + y1 * g.sc + 26, { c: C.ink, s: 14 });
        out.innerHTML = "<span>F = f × A/a = <b>" + n(Math.round(Fbig())) + " N</b> (" + (Fbig() >= 8000 ? t("enough", "تكفي") : t("less than 8000 N", "أقل من ٨٠٠٠ N")) + ")</span><span>η = A/a = <b>" + n(rd(A / a, 1)) + "</b></span><span>y₁ = <b>" + n(rd(y1, 1)) + " cm</b></span><span>y₂ = y₁ × a/A = <b>" + n(rd(y2, 2)) + " cm</b></span>";
      }
    });
  };

  /* =========================================================
     13. sec2phy_boyle - piston at constant temperature, V vs 1/P
     ========================================================= */
  L.sec2phy_boyle = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the piston handle up and down slowly (constant temperature). Record points to draw V against 1/P. Switch on the smoke view to see Brownian motion.",
      "اسحب ذراع المكبس لأعلى ولأسفل ببطء (عند ثبوت درجة الحرارة)، وسجّل نقاطًا لرسم V مقابل 1/P، وشغّل عرض الدخان لترى الحركة البراونية."));
    var S = mk(host, 0.6, 380);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s2bRec">📍 ' + t("Record point", "سجّل نقطة") + '</button><button type="button" class="btn sm tg" id="s2bBr">🔬 ' + t("Smoke particle (Brownian)", "حبيبة دخان (براونية)") + '</button><button type="button" class="btn sm ghost" id="s2bClr">↺ ' + t("Clear graph", "امسح المنحنى") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Halve the volume: the pressure doubles to 152 cmHg.", "نصّف الحجم: يتضاعف الضغط إلى " + lt("152 cmHg") + "."), t("Double the volume to 200 cm³: the pressure halves.", "ضاعف الحجم إلى " + lt("200 cm³") + ": يقل الضغط للنصف."),
      t("Record 4 different points on the V–1/P graph.", "سجّل ٤ نقاط مختلفة على منحنى " + lt("V–1/P") + "."), t("Watch the smoke particle's Brownian motion.", "شاهد الحركة البراونية لحبيبة الدخان.")], done);
    var V = 100, drag = false, pts = [], br = false, M = [], sm = { x: 0.5, y: 0.5, vx: 0, vy: 0 }, i;
    for (i = 0; i < 36; i++) M.push({ x: Math.random(), y: Math.random(), a: Math.random() * 6.283 });
    function Pp() { return 7600 / V; }
    c.querySelector("#s2bRec").onclick = function () { var k = Math.round(V); if (!pts.some(function (p) { return p[0] === k; })) pts.push([k, Pp()]); if (pts.length >= 4) tick(2); };
    c.querySelector("#s2bClr").onclick = function () { pts = []; };
    c.querySelector("#s2bBr").onclick = function () { br = !br; this.classList.toggle("on", br); if (br) tick(3); };
    function geo() { var W = S.W, H = S.H, cx = W * 0.05, cw = W * 0.34, bot = H * 0.94, full = H * 0.8; return { cx: cx, cw: cw, bot: bot, full: full, top: bot - full * V / 200 }; }
    S.drag({
      down: function (p) { var g = geo(); if (p.x > g.cx && p.x < g.cx + g.cw && Math.abs(p.y - g.top) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); V = clamp(Math.round((g.bot - p.y) / g.full * 200), 40, 200); if (V <= 50) tick(0); if (V >= 200) tick(1); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return p.x > g.cx && p.x < g.cx + g.cw && Math.abs(p.y - g.top) < 30; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), h = g.bot - g.top;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#e0f2fe"; ctx.fillRect(g.cx, g.top, g.cw, h); ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(g.cx, g.bot - g.full - 6); ctx.lineTo(g.cx, g.bot); ctx.lineTo(g.cx + g.cw, g.bot); ctx.lineTo(g.cx + g.cw, g.bot - g.full - 6); ctx.stroke();
      M.forEach(function (q) { q.x += Math.cos(q.a) * dt * 0.9; q.y += Math.sin(q.a) * dt * 0.9 * (100 / V); if (q.x < 0.02 || q.x > 0.98) { q.a = Math.PI - q.a; q.x = clamp(q.x, 0.02, 0.98); } if (q.y < 0.03 || q.y > 0.97) { q.a = -q.a; q.y = clamp(q.y, 0.03, 0.97); } K.dot(ctx, g.cx + q.x * g.cw, g.top + q.y * h, 3, "#2563eb"); });
      if (br) { sm.vx += K.rnd(-1, 1) * dt * 3; sm.vy += K.rnd(-1, 1) * dt * 3; sm.vx *= 0.9; sm.vy *= 0.9; sm.x = clamp(sm.x + sm.vx * dt, 0.1, 0.9); sm.y = clamp(sm.y + sm.vy * dt, 0.1, 0.9); K.dot(ctx, g.cx + sm.x * g.cw, g.top + sm.y * h, 8, "#334155"); }
      ctx.fillStyle = "#64748b"; ctx.fillRect(g.cx + 2, g.top - 12, g.cw - 4, 12); ctx.fillRect(g.cx + g.cw / 2 - 5, g.top - 40, 10, 28); K.rr(ctx, g.cx + g.cw / 2 - 30, g.top - 48, 60, 10, 4); ctx.fill();
      var gr = { x: W * 0.5, y: H * 0.08, w: W * 0.46, h: H * 0.7 }, F = frame(ctx, C, gr, [0, 0.028], [0, 210], "1/P", "V (cm³)");
      ctx.strokeStyle = "rgba(124,58,237,.3)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(F.X(0), F.Y(0)); ctx.lineTo(F.X(0.0276), F.Y(7600 * 0.0276)); ctx.stroke();
      pts.forEach(function (p) { K.dot(ctx, F.X(1 / p[1]), F.Y(p[0]), 5, "#f97316"); });
      K.dot(ctx, F.X(1 / Pp()), F.Y(V), 4, "#7c3aed");
      txt(ctx, "PV = " + n(Math.round(Pp() * V)), gr.x + gr.w / 2, gr.y + gr.h + 22, { c: "#7c3aed", s: 13 });
      out.innerHTML = "<span>V = <b>" + n(V) + " cm³</b></span><span>P = <b>" + n(rd(Pp(), 1)) + " cmHg</b></span><span>P × V = <b>" + n(Math.round(Pp() * V)) + "</b> " + t("(constant)", "(ثابت)") + "</span><span>" + t("Points: ", "النقاط: ") + "<b>" + n(pts.length) + "</b></span>";
    });
  };

  /* =========================================================
     14. sec2phy_charles - heat a gas at constant P or constant V, find absolute zero
     ========================================================= */
  L.sec2phy_charles = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose constant pressure (Charles) or constant volume (Jolly) and change the temperature. Then extend the straight line to find absolute zero.",
      "اختر ثبوت الضغط (شارل) أو ثبوت الحجم (جولي) وغيّر درجة الحرارة، ثم مُدّ الخط المستقيم لتجد الصفر المطلق.")) + '<div class="seg" id="s2cM"></div>';
    var S = mk(host, 0.62, 400);
    var c = box(host, L._slider(t("Temperature t", "درجة الحرارة t"), -200, 300, 1, 0, "°C") + '<div class="btn-row"><button type="button" class="btn sm" id="s2cX">📏 ' + t("Extend the line", "مُدّ الخط") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Constant P: heat 450 cm³ from 0°C to 91°C and read 600 cm³.", "ثبوت الضغط: سخّن " + lt("450 cm³") + " من " + lt("0°C") + " إلى " + lt("91°C") + " واقرأ " + lt("600 cm³") + "."), t("Constant V: double the pressure you had at 10°C.", "ثبوت الحجم: ضاعف الضغط الذي كان عند " + lt("10°C") + "."),
      t("Extend the line to find absolute zero.", "مُدّ الخط لتجد الصفر المطلق.")], done);
    var mode = "p", tc = 0, ext = false, seen = { p: [0, 0], v: [0, 0] };
    K.seg(host, "#s2cM", [["p", t("Constant pressure", "ثبوت الضغط")], ["v", t("Constant volume", "ثبوت الحجم")]], "p", function (v) { mode = v; ext = false; });
    sl(c, 0, function (q) { return n(q) + "°C (" + n(q + 273) + " K)"; }, function (q) { tc = q; var s = seen[mode]; s[0] = Math.min(s[0], q); s[1] = Math.max(s[1], q); if (mode === "p" && q === 91) tick(0); if (mode === "v" && q >= 293) tick(1); });
    c.querySelector("#s2cX").onclick = function () { ext = true; tick(2); };
    function val(tt) { return mode === "p" ? 450 * (tt + 273) / 273 : 76 * (tt + 273) / 273; }
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, T = tc + 273, y = val(tc), ymax = mode === "p" ? 1000 : 170;
      ctx.clearRect(0, 0, W, H);
      // apparatus
      var ax = W * 0.04, aw = W * 0.24, bot = H * 0.9, full = H * 0.75, warm = clamp((tc + 200) / 500, 0, 1);
      ctx.fillStyle = "rgb(" + Math.round(147 + 100 * warm) + "," + Math.round(197 - 90 * warm) + "," + Math.round(253 - 180 * warm) + ")"; ctx.globalAlpha = 0.35; ctx.fillRect(ax - 6, bot - full - 10, aw + 12, full + 16); ctx.globalAlpha = 1;
      if (mode === "p") {
        var hh = full * y / ymax; ctx.fillStyle = "#e0f2fe"; ctx.fillRect(ax, bot - hh, aw, hh); ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.strokeRect(ax, bot - full, aw, full);
        ctx.fillStyle = "#64748b"; ctx.fillRect(ax + 2, bot - hh - 10, aw - 4, 10); txt(ctx, n(Math.round(y)) + " cm³", ax + aw / 2, bot - hh / 2, { c: "#0369a1", s: 12 });
      } else {
        var hv = full * 0.4; ctx.fillStyle = "#e0f2fe"; ctx.fillRect(ax, bot - hv, aw, hv); ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.strokeRect(ax, bot - hv, aw, hv);
        var col = (y - 76) * full * 0.004 * 1.2; ctx.fillStyle = "#94a3b8"; ctx.fillRect(ax + aw / 2 - 5, bot - hv - Math.max(0, 30 + col), 10, Math.max(0, 30 + col));
        txt(ctx, n(rd(y, 1)) + " cmHg", ax + aw / 2, bot - hv / 2, { c: "#0369a1", s: 12 });
      }
      // graph
      var g = { x: W * 0.36, y: H * 0.06, w: W * 0.6, h: H * 0.78 }, F = frame(ctx, C, g, [-300, 300], [0, ymax], "t (°C)", mode === "p" ? "V (cm³)" : "P (cmHg)");
      [-273, 0, 100, 300].forEach(function (q) { txt(ctx, n(q), F.X(q), g.y + g.h + 10, { c: q === -273 ? "#dc2626" : C.muted, s: 10 }); });
      var s = seen[mode];
      ctx.strokeStyle = "#dc2626"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(F.X(s[0]), F.Y(val(s[0]))); ctx.lineTo(F.X(s[1]), F.Y(val(s[1]))); ctx.stroke();
      if (ext) { ctx.setLineDash([6, 5]); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(F.X(s[0]), F.Y(val(s[0]))); ctx.lineTo(F.X(-273), F.Y(0)); ctx.stroke(); ctx.setLineDash([]); K.dot(ctx, F.X(-273), F.Y(0), 6, "#0f172a"); txt(ctx, "−273°C = 0 K", F.X(-273) + 8, F.Y(0) - 14, { c: C.ink, s: 12, a: "left" }); }
      K.dot(ctx, F.X(tc), F.Y(y), 6, "#2563eb", "#fff");
      out.innerHTML = "<span>T = t + 273 = <b>" + n(T) + " K</b></span><span>" + (mode === "p" ? "V = 450 × T/273 = <b>" + n(rd(y, 1)) + " cm³</b>" : "P = 76 × T/273 = <b>" + n(rd(y, 1)) + " cmHg</b>") + "</span><span>" + (mode === "p" ? "V/T" : "P/T") + " = <b>" + n(rd(y / T, 3)) + "</b> " + t("(constant)", "(ثابت)") + "</span>" +
        (mode === "v" ? "<span>" + t("At 10°C: ", "عند 10°C: ") + "<b>" + n(rd(val(10), 1)) + " cmHg</b></span>" : "");
    });
  };

  /* =========================================================
     15. sec2phy_gaslaw - general gas law: piston and rising bubble
     ========================================================= */
  L.sec2phy_gaslaw = function (host, cfg, done) {
    host.innerHTML = hint(t("Piston: change P and T and watch V from PV/T = constant (start: 380 cm³ at 27°C and 60 cmHg). Bubble: drag the depth slider to let the bubble rise.",
      "المكبس: غيّر P وT وراقب V من PV/T = ثابت (البداية: 380 cm³ عند 27°C و60 cmHg). الفقاعة: حرّك منزلق العمق لتصعد الفقاعة.")) + '<div class="seg" id="s2gM"></div>';
    var S = mk(host, 0.6, 380);
    var c = box(host, '<div id="s2gA">' + L._slider(t("Pressure P", "الضغط P"), 20, 152, 1, 60, "cmHg") + L._slider(t("Temperature t", "درجة الحرارة t"), -100, 400, 1, 27, "°C") + '</div><div id="s2gB" style="display:none">' + L._slider(t("Depth h", "العمق h"), 0, 10.13, 0.01, 10.13, "m") + "</div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Bring the gas to STP (76 cmHg, 0°C) and read 273 cm³.", "انقل الغاز إلى الظروف القياسية (" + lt("76 cmHg") + " و" + lt("0°C") + ") واقرأ " + lt("273 cm³") + "."), t("Double both P (120 cmHg) and T (600 K = 327°C): V returns to 380 cm³.", "ضاعف " + lt("P (120 cmHg)") + " و" + lt("T (600 K = 327°C)") + ": يعود " + lt("V") + " إلى " + lt("380 cm³") + "."),
      t("Let the 28 cm³ bubble rise to the surface: 60 cm³.", "اترك الفقاعة " + lt("28 cm³") + " تصعد للسطح: " + lt("60 cm³") + ".")], done);
    var mode = "p", Pc = 60, tc = 27, h = 10.13;
    K.seg(host, "#s2gM", [["p", t("Piston", "المكبس")], ["b", t("Rising bubble", "فقاعة صاعدة")]], "p", function (v) { mode = v; c.querySelector("#s2gA").style.display = v === "p" ? "" : "none"; c.querySelector("#s2gB").style.display = v === "b" ? "" : "none"; });
    function Vp() { return 76 * (tc + 273) / Pc; }
    function chk() { if (Pc === 76 && tc === 0) tick(0); if (Pc === 120 && tc === 327) tick(1); }
    sl(c, 0, function (q) { return n(q) + " cmHg"; }, function (q) { Pc = q; chk(); });
    sl(c, 1, function (q) { return n(q) + "°C"; }, function (q) { tc = q; chk(); });
    sl(c, 2, function (q) { return n(rd(q, 2)) + " m"; }, function (q) { h = rd(q, 2); if (h === 0) tick(2); });
    function bub() { var P1 = 1.013e5 + 1000 * 10 * 10.13, P = 1.013e5 + 1000 * 10 * h, T = 273 + 27 - 20 * h / 10.13; return { P: P, T: T, V: 28 * P1 / P * T / 280 }; }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "p") {
        var V = Vp(), ax = W * 0.1, aw = W * 0.3, bot = H * 0.92, full = H * 0.8, hh = clamp(full * V / 1200, 4, full);
        ctx.fillStyle = "#e0f2fe"; ctx.fillRect(ax, bot - hh, aw, hh); ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ax, bot - full); ctx.lineTo(ax, bot); ctx.lineTo(ax + aw, bot); ctx.lineTo(ax + aw, bot - full); ctx.stroke();
        ctx.fillStyle = "#64748b"; ctx.fillRect(ax + 2, bot - hh - 12, aw - 4, 12);
        var wts = Math.round(Pc / 20); for (var k = 0; k < wts; k++) { ctx.fillStyle = "#475569"; ctx.fillRect(ax + aw / 2 - 22, bot - hh - 22 - k * 9, 44, 8); }
        txt(ctx, n(rd(V, 1)) + " cm³", ax + aw / 2, bot - hh / 2, { c: "#0369a1", s: 13 });
        var x0 = W * 0.5, fs = Math.max(12, Math.min(16, W / 36));
        txt(ctx, "P₁V₁/T₁ = P₂V₂/T₂", x0, H * 0.14, { c: C.ink, s: fs + 2, a: "left" });
        txt(ctx, "60 × 380 / 300 = " + n(76), x0, H * 0.28, { c: C.muted, s: fs - 2, a: "left" });
        txt(ctx, n(Pc) + " × V / " + n(tc + 273) + " = " + n(76), x0, H * 0.4, { c: C.ink, s: fs, a: "left" });
        txt(ctx, "V = " + n(rd(V, 1)) + " cm³", x0, H * 0.54, { c: "#7c3aed", s: fs + 4, a: "left" });
        out.innerHTML = "<span>P = <b>" + n(Pc) + " cmHg</b></span><span>T = <b>" + n(tc + 273) + " K</b></span><span>PV/T = <b>" + n(rd(Pc * V / (tc + 273), 2)) + "</b> " + t("(constant)", "(ثابت)") + "</span>";
      } else {
        var b = bub(), sy = H * 0.1, by = H * 0.92, yy = sy + (h / 10.13) * (by - sy - 20) + 10, r = Math.cbrt(b.V) * 4.5;
        var gr = ctx.createLinearGradient(0, sy, 0, by); gr.addColorStop(0, "#93c5fd"); gr.addColorStop(1, "#1e3a8a"); ctx.fillStyle = gr; ctx.fillRect(0, sy, W * 0.55, by - sy);
        ctx.fillStyle = "rgba(255,255,255,.85)"; ctx.strokeStyle = "#fff"; ctx.beginPath(); ctx.arc(W * 0.27, yy, r, 0, Math.PI * 2); ctx.fill();
        txt(ctx, t("surface 27°C", "السطح 27°C"), W * 0.27, sy - 10, { c: C.ink, s: 11 }); txt(ctx, "10.13 m, 7°C", W * 0.27, by + 10, { c: C.ink, s: 11 });
        var x1 = W * 0.6, f2 = Math.max(11, Math.min(15, W / 40));
        txt(ctx, "P = " + n(rd(b.P / 1.013e5, 3)) + " atm", x1, H * 0.2, { c: C.ink, s: f2, a: "left" });
        txt(ctx, "T = " + n(rd(b.T, 1)) + " K", x1, H * 0.34, { c: C.ink, s: f2, a: "left" });
        txt(ctx, "V = " + n(rd(b.V, 1)) + " cm³", x1, H * 0.5, { c: "#7c3aed", s: f2 + 4, a: "left" });
        out.innerHTML = "<span>V₂ = V₁ × (P₁/P₂) × (T₂/T₁) = 28 × " + n(rd(2.0 / (b.P / 1.013e5), 3)) + " × " + n(rd(b.T / 280, 3)) + " = <b>" + n(rd(b.V, 1)) + " cm³</b></span>";
      }
    });
  };

  var NM = {
    sec2phy_density: ["Density and floating lab", "معمل الكثافة والطفو"], sec2phy_flow: ["Continuity pipe simulation", "محاكاة أنبوبة الاستمرارية"],
    sec2phy_visc: ["Viscosity lab", "معمل اللزوجة"], sec2phy_pressure: ["Liquid pressure and barometer lab", "معمل ضغط السوائل والبارومتر"],
    sec2phy_hydraulic: ["Manometer and hydraulic press", "المانومتر والمكبس الهيدروليكي"], sec2phy_boyle: ["Boyle's law piston", "مكبس قانون بويل"],
    sec2phy_charles: ["Charles and pressure law simulation", "محاكاة قانوني شارل والضغط"], sec2phy_gaslaw: ["General gas law simulation", "محاكاة القانون العام للغازات"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
