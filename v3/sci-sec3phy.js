/* EduZone Learn v3 - Physics, Egyptian Secondary 3 (Thanaweya Amma), 2026-2027.
   Follows the Ministry book "Physics, General Secondary Certificate" (a full-year book, not split by term):
   Unit 1 Dynamic Electricity and Electromagnetism (chapters 1-4), Unit 2 Introduction to Modern Physics (chapters 5-8).
   Registers EZ3.SCIG.sec3phy = {units, book} (ids sec3phyu1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations (EZ3.sciLabs.sec3phy_*). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function q(a, c, off, sto) { return { q: a, c: c, off: off, sto: sto }; }
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec3phy = { book: { en: "Physics, General Secondary Certificate (Secondary 3)", ar: "الفيزياء، شهادة إتمام الدراسة الثانوية العامة (الصف الثالث الثانوي)" }, units: [] };

  /* ================= UNIT 1: DYNAMIC ELECTRICITY AND ELECTROMAGNETISM ================= */
  G.units.push({
    id: "sec3phyu1", num: 1, icon: "⚡", color: "blue",
    title: { en: "Dynamic Electricity and Electromagnetism", ar: "الكهربية التيارية والكهرومغناطيسية" },
    lessons: [
      /* ---------- Ch1 a ---------- */
      {
        id: "sec3phyu1l1", icon: "🔌", page: 10,
        title: { en: "Ch 1: Connecting Resistors in Series and Parallel", ar: "ف١: توصيل المقاومات على التوالي والتوازي" },
        idea: {
          official: {
            en: ["Resistance R opposes the current and depends on the length, cross-section and material: " + eq("R = ρℓ / A") + ", and the conductivity is " + eq("σ = 1/ρ") + ".",
              "Series: the same current I passes in every resistor and the voltages add, so " + eq("R = R₁ + R₂ + R₃") + "; for N equal resistors " + eq("R = N r") + ". Series gives a LARGER resistance.",
              "Parallel: every resistor has the same voltage V and the currents add, so " + eq("1/R = 1/R₁ + 1/R₂ + 1/R₃") + "; for two resistors " + eq("R = R₁R₂ / (R₁ + R₂)") + ", for N equal ones " + eq("R = r / N") + ".",
              "Book example: 25 Ω, 70 Ω and 85 Ω in series on 45 V give " + eq("R = 180 Ω") + ", " + eq("I = 45/180 = 0.25 A") + " and V₈₅ = 0.25 × 85 = 21.25 V.",
              "The same three in parallel: " + eq("R = 15.14 Ω") + " and the total current " + eq("I = 1.8 + 0.643 + 0.529 = 2.972 A") + ". The parallel resistance is smaller than the smallest resistor."],
            ar: ["المقاومة R تعوق مرور التيار وتتوقف على الطول ومساحة المقطع ونوع المادة: " + eq("R = ρℓ / A") + "، والتوصيلية الكهربية " + eq("σ = 1/ρ") + ".",
              "التوالي: يمر نفس التيار I في كل مقاومة وتُجمع فروق الجهد، فتكون " + eq("R = R₁ + R₂ + R₃") + "، ولعدد N من المقاومات المتساوية " + eq("R = N r") + ". التوالي يعطي مقاومة أكبر.",
              "التوازي: فرق الجهد V واحد على كل المقاومات وتُجمع التيارات، فتكون " + eq("1/R = 1/R₁ + 1/R₂ + 1/R₃") + "، ولمقاومتين " + eq("R = R₁R₂ / (R₁ + R₂)") + "، ولعدد N متساوية " + eq("R = r / N") + ".",
              "مثال الكتاب: ٢٥ أوم و٧٠ أوم و٨٥ أوم على التوالي مع ٤٥ فولت تعطي " + eq("R = 180 Ω") + " و" + eq("I = 45/180 = 0.25 A") + " وفرق الجهد على ٨٥ أوم = ٠٫٢٥ × ٨٥ = ٢١٫٢٥ فولت.",
              "نفس المقاومات على التوازي: " + eq("R = 15.14 Ω") + " والتيار الكلي " + eq("I = 1.8 + 0.643 + 0.529 = 2.972 A") + "، والمقاومة المكافئة أصغر من أصغر مقاومة."]
          },
          story: {
            en: ["Omar is wiring Ramadan lanterns on the balcony of his building in Shubra.",
              "First he joins three bulbs in one line, one after the other. One bulb breaks and all of them go dark: in series one path carries the same current through every bulb.",
              "His uncle rewires them so each bulb has its own path to the plug. Now if one breaks, the others stay lit: that is parallel, every bulb gets the full 220 V.",
              "Omar notices the parallel lanterns draw more current from the socket: adding paths is like opening more gates at a metro station, so the total resistance falls.",
              "He writes in his notebook: series adds resistances, parallel adds currents."],
            ar: ["عمر يوصّل فوانيس رمضان في شرفة عمارته في شبرا.",
              "في البداية وصّل ثلاث لمبات في خط واحد واحدة بعد الأخرى، فلما احترقت لمبة انطفأت كلها؛ ففي التوالي مسار واحد يحمل نفس التيار في كل اللمبات.",
              "أعاد خاله التوصيل بحيث يكون لكل لمبة مسار خاص بها إلى المقبس، فإذا احترقت واحدة بقيت الباقيات مضيئة؛ هذا هو التوازي، وكل لمبة تأخذ ٢٢٠ فولت كاملة.",
              "لاحظ عمر أن الفوانيس الموصلة على التوازي تسحب تيارًا أكبر؛ فزيادة المسارات مثل فتح بوابات أكثر في محطة المترو، فتقل المقاومة الكلية.",
              "كتب في كراسته: التوالي يجمع المقاومات، والتوازي يجمع التيارات."]
          }
        },
        words: [
          ["Equivalent resistance", "المقاومة المكافئة", "One resistance that can replace a group of resistors and pass the same current at the same voltage.", "مقاومة واحدة تحل محل مجموعة مقاومات وتُمرر نفس التيار عند نفس فرق الجهد."],
          ["Series connection", "التوصيل على التوالي", "Resistors joined end to end: same current, voltages add, R = R₁ + R₂ + …", "مقاومات متصلة طرفًا لطرف: نفس التيار وتُجمع فروق الجهد، R = R₁ + R₂ + …"],
          ["Parallel connection", "التوصيل على التوازي", "Resistors across the same two points: same voltage, currents add, 1/R = Σ 1/Rᵢ.", "مقاومات بين نفس النقطتين: نفس فرق الجهد وتُجمع التيارات، 1/R = مجموع 1/Rᵢ."],
          ["Resistivity (ρ)", "المقاومة النوعية (ρ)", "ρ = RA/ℓ, a property of the material at constant temperature, unit Ω·m.", "ρ = RA/ℓ، صفة مميزة للمادة عند ثبوت درجة الحرارة، ووحدتها أوم·م."],
          ["Electrical conductivity (σ)", "التوصيلية الكهربية (σ)", "The reciprocal of resistivity, σ = 1/ρ, unit Ω⁻¹m⁻¹.", "مقلوب المقاومة النوعية، σ = 1/ρ، ووحدتها أوم⁻¹·م⁻¹."],
          ["Rheostat", "الريوستات", "A variable resistor used to control the current in a circuit.", "مقاومة متغيرة تُستخدم للتحكم في شدة التيار في الدائرة."]
        ],
        lab: { parts: [{ type: "sec3phy_resnet" }, {
          type: "sort",
          prompt: ["Tap a fact, then tap the connection it belongs to.", "اضغط على عبارة، ثم اضغط على نوع التوصيل الذي تخصه."],
          bins: [["s", "➖", "Series", "توالي"], ["p", "🔱", "Parallel", "توازي"]],
          items: [[["Same current in every resistor", "نفس التيار في كل مقاومة"], "s"], [["Voltages add up", "فروق الجهد تُجمع"], "s"], [["R = N r", "R = N r"], "s"], [["Gives a larger resistance", "يعطي مقاومة أكبر"], "s"],
            [["Same voltage on every resistor", "نفس فرق الجهد على كل مقاومة"], "p"], [["Currents add up", "التيارات تُجمع"], "p"], [["R = r / N", "R = r / N"], "p"], [["House lamps are wired this way", "مصابيح المنزل توصل هكذا"], "p"]]
        }] },
        quiz: [
          q(["Four resistors of 20 Ω each are connected in series. The equivalent resistance is…", "أربع مقاومات كل منها ٢٠ أوم موصلة على التوالي. المقاومة المكافئة تساوي…"],
            [["80 Ω", "٨٠ أوم"], ["5 Ω", "٥ أوم"], ["20 Ω", "٢٠ أوم"], ["40 Ω", "٤٠ أوم"]],
            ["R = N r = 4 × 20 = 80 Ω.", "R = N r = ٤ × ٢٠ = ٨٠ أوم."], ["Four bulbs in one line: the current must push through all four.", "أربع لمبات في خط واحد: التيار يجب أن يعبرها كلها."]),
          q(["The same four 20 Ω resistors are connected in parallel. The equivalent resistance is…", "نفس المقاومات الأربع (٢٠ أوم) موصلة على التوازي. المقاومة المكافئة تساوي…"],
            [["5 Ω", "٥ أوم"], ["80 Ω", "٨٠ أوم"], ["20 Ω", "٢٠ أوم"], ["0.2 Ω", "٠٫٢ أوم"]],
            ["R = r / N = 20 / 4 = 5 Ω (smaller than any single resistor).", "R = r / N = ٢٠ ÷ ٤ = ٥ أوم (أصغر من أي مقاومة منفردة)."], ["Four metro gates open side by side let the crowd through four times more easily.", "أربع بوابات مترو متجاورة تُسهّل مرور الزحام أربع مرات."]),
          q(["Resistors of 25 Ω, 70 Ω and 85 Ω are in series with a 45 V battery (negligible internal resistance). The voltage across the 85 Ω resistor is…", "مقاومات ٢٥ و٧٠ و٨٥ أوم على التوالي مع بطارية ٤٥ فولت (مقاومتها الداخلية مهملة). فرق الجهد على المقاومة ٨٥ أوم يساوي…"],
            [["21.25 V", "٢١٫٢٥ فولت"], ["45 V", "٤٥ فولت"], ["15 V", "١٥ فولت"], ["6.25 V", "٦٫٢٥ فولت"]],
            ["R = 180 Ω, I = 45/180 = 0.25 A, V = IR = 0.25 × 85 = 21.25 V.", "R = ١٨٠ أوم، I = ٤٥ ÷ ١٨٠ = ٠٫٢٥ أمبير، V = IR = ٠٫٢٥ × ٨٥ = ٢١٫٢٥ فولت."], ["The biggest resistor takes the biggest share of the battery's voltage.", "المقاومة الأكبر تأخذ النصيب الأكبر من جهد البطارية."]),
          q(["A 3 Ω and a 6 Ω resistor in parallel are connected in series with a 7 Ω resistor and an 18 V battery. The battery current is…", "مقاومتان ٣ أوم و٦ أوم على التوازي، والمجموعة على التوالي مع مقاومة ٧ أوم وبطارية ١٨ فولت. تيار البطارية يساوي…"],
            [["2 A", "٢ أمبير"], ["1.125 A", "١٫١٢٥ أمبير"], ["1 A", "١ أمبير"], ["6 A", "٦ أمبير"]],
            ["3∥6 = 18/9 = 2 Ω; total R = 2 + 7 = 9 Ω; I = 18/9 = 2 A. (1.125 A comes from wrongly adding 3 + 6 + 7.)", "٣∥٦ = ١٨ ÷ ٩ = ٢ أوم؛ المقاومة الكلية = ٢ + ٧ = ٩ أوم؛ I = ١٨ ÷ ٩ = ٢ أمبير. (١٫١٢٥ أمبير ناتجة عن جمع ٣ + ٦ + ٧ خطأً.)"], ["Combine the side-by-side pair first, then add the one in the line.", "اختصر المقاومتين المتجاورتين أولًا ثم أضف المقاومة التي في الخط."]),
          q(["In the same circuit, the current in the 3 Ω resistor is…", "في نفس الدائرة، التيار المار في المقاومة ٣ أوم يساوي…"],
            [["1.33 A", "١٫٣٣ أمبير"], ["0.67 A", "٠٫٦٧ أمبير"], ["2 A", "٢ أمبير"], ["6 A", "٦ أمبير"]],
            ["V across the pair = IR' = 2 × 2 = 4 V, so I₃ = 4/3 = 1.33 A and I₆ = 4/6 = 0.67 A.", "فرق الجهد على المجموعة = ٢ × ٢ = ٤ فولت، فيكون I₃ = ٤ ÷ ٣ = ١٫٣٣ أمبير و I₆ = ٤ ÷ ٦ = ٠٫٦٧ أمبير."], ["The easier path (smaller resistance) takes the larger share of the current.", "المسار الأسهل (المقاومة الأصغر) يأخذ النصيب الأكبر من التيار."]),
          q(["A 10 Ω and a 40 Ω resistor are connected in parallel. Their equivalent resistance is…", "مقاومتان ١٠ أوم و٤٠ أوم على التوازي. المقاومة المكافئة تساوي…"],
            [["8 Ω", "٨ أوم"], ["50 Ω", "٥٠ أوم"], ["25 Ω", "٢٥ أوم"], ["4 Ω", "٤ أوم"]],
            ["R = R₁R₂/(R₁ + R₂) = 400/50 = 8 Ω, smaller than 10 Ω.", "R = R₁R₂ ÷ (R₁ + R₂) = ٤٠٠ ÷ ٥٠ = ٨ أوم، وهي أصغر من ١٠ أوم."], ["Product over sum, and the answer must be below the smallest one.", "حاصل الضرب على المجموع، والناتج لا بد أن يكون أقل من أصغرهما."]),
          q(["A wire of length 2 m and cross-section 1 × 10⁻⁶ m² is made of copper (ρ = 1.7 × 10⁻⁸ Ω·m). Its resistance is…", "سلك طوله ٢ م ومساحة مقطعه ١ × ١٠⁻⁶ م² من النحاس (ρ = ١٫٧ × ١٠⁻⁸ أوم·م). مقاومته تساوي…"],
            [["0.034 Ω", "٠٫٠٣٤ أوم"], ["0.0085 Ω", "٠٫٠٠٨٥ أوم"], ["3.4 × 10⁻¹⁴ Ω", "٣٫٤ × ١٠⁻¹⁴ أوم"], ["0.017 Ω", "٠٫٠١٧ أوم"]],
            ["R = ρℓ/A = 1.7 × 10⁻⁸ × 2 / 10⁻⁶ = 0.034 Ω.", "R = ρℓ/A = ١٫٧ × ١٠⁻⁸ × ٢ ÷ ١٠⁻⁶ = ٠٫٠٣٤ أوم."], ["Longer wire = more resistance; thicker wire = less.", "سلك أطول = مقاومة أكبر، وسلك أسمك = مقاومة أقل."])
        ]
      },
      /* ---------- Ch1 b ---------- */
      {
        id: "sec3phyu1l2", icon: "🔋", page: 15,
        title: { en: "Ch 1: Ohm's Law for a Closed Circuit and Kirchhoff's Laws", ar: "ف١: قانون أوم للدائرة المغلقة وقانونا كيرتشوف" },
        idea: {
          official: {
            en: ["The emf V_B of a source is the total work done to move 1 C around the whole circuit, inside and outside the source. With external resistance R and internal resistance r: " + eq("V_B = IR + Ir") + ", so " + eq("I = V_B / (R + r)") + ".",
              "The voltage across the source terminals is " + eq("V = V_B − Ir") + ". When the current stops (open circuit) V = V_B, so the emf is the terminal voltage when no current flows.",
              "Book example: a 2 V cell with r = 0.1 Ω and R = 3.9 Ω gives " + eq("I = 2 / (3.9 + 0.1) = 0.5 A") + ".",
              "Kirchhoff's first law (conservation of charge): the currents into a junction equal the currents out, " + eq("ΣI = 0") + ". Example: 4 + 5 + 2 = 8 + I gives I = 3 A leaving the node.",
              "Kirchhoff's second law (conservation of energy): in any closed loop " + eq("ΣV_B = ΣIR") + ". Assume directions; a negative answer means the real current is opposite. A battery whose current enters its positive pole is being charged: " + eq("V = V_B + Ir") + "."],
            ar: ["القوة الدافعة الكهربية V_B للمصدر هي الشغل الكلي المبذول لنقل ١ كولوم خلال الدائرة كلها داخل المصدر وخارجه. ومع مقاومة خارجية R ومقاومة داخلية r: " + eq("V_B = IR + Ir") + "، أي " + eq("I = V_B / (R + r)") + ".",
              "فرق الجهد بين قطبي المصدر " + eq("V = V_B − Ir") + "، وعندما ينقطع التيار تكون V = V_B؛ فالقوة الدافعة الكهربية هي فرق الجهد بين قطبي المصدر عندما لا يمر تيار.",
              "مثال الكتاب: عمود ٢ فولت ومقاومته الداخلية ٠٫١ أوم مع مقاومة خارجية ٣٫٩ أوم يعطي " + eq("I = 2 / (3.9 + 0.1) = 0.5 A") + ".",
              "قانون كيرتشوف الأول (بقاء الشحنة): مجموع التيارات الداخلة إلى نقطة تفرع = مجموع التيارات الخارجة منها، " + eq("ΣI = 0") + ". مثال: ٤ + ٥ + ٢ = ٨ + I فيكون I = ٣ أمبير خارجًا من النقطة.",
              "قانون كيرتشوف الثاني (بقاء الطاقة): في أي مسار مغلق " + eq("ΣV_B = ΣIR") + ". نفترض اتجاهات التيارات، والإشارة السالبة تعني أن الاتجاه الحقيقي عكس المفترض. البطارية التي يدخل التيار قطبها الموجب تكون في حالة شحن: " + eq("V = V_B + Ir") + "."]
          },
          story: {
            en: ["Mariam's phone power bank says 5 V, but her multimeter shows only 4.6 V while it charges her phone.",
              "Her cousin, an engineering student in Alexandria, explains: part of the push is used inside the power bank itself, across its internal resistance: V = V_B − Ir.",
              "When she unplugs the phone, the meter jumps back to 5 V: no current, no lost volts, so the reading equals the emf.",
              "Then she looks at the multi-socket under her desk: the current from the wall splits into the laptop, the lamp and the charger, and the three branch currents add back to the wall current. That is Kirchhoff's first law.",
              "Charge never piles up and energy is never created: those two ideas solve any circuit."],
            ar: ["مكتوب على باور بانك مريم ٥ فولت، لكن جهاز الملتيميتر يقرأ ٤٫٦ فولت فقط وهي تشحن هاتفها.",
              "شرح لها ابن عمها طالب الهندسة في الإسكندرية أن جزءًا من الدفع يُستهلك داخل الباور بانك نفسه على مقاومته الداخلية: V = V_B − Ir.",
              "عندما فصلت الهاتف قفزت القراءة إلى ٥ فولت؛ لا تيار ولا فولتات مفقودة، فتساوي القراءة القوة الدافعة الكهربية.",
              "ثم نظرت إلى المشترك تحت مكتبها: التيار القادم من الحائط يتفرع إلى اللابتوب والمصباح والشاحن، ومجموع تيارات الفروع يساوي تيار الحائط؛ هذا قانون كيرتشوف الأول.",
              "الشحنة لا تتراكم والطاقة لا تُخلق من العدم؛ بهاتين الفكرتين تُحل أي دائرة."]
          }
        },
        words: [
          ["Electromotive force (emf)", "القوة الدافعة الكهربية", "Total work done to transfer 1 C around the whole circuit, inside and outside the source; it equals the terminal voltage when no current flows.", "الشغل الكلي المبذول لنقل ١ كولوم خلال الدائرة كلها داخل المصدر وخارجه، ويساوي فرق الجهد بين قطبيه عند انقطاع التيار."],
          ["Internal resistance (r)", "المقاومة الداخلية (r)", "The resistance of the source itself; it causes a voltage drop Ir inside the source.", "مقاومة المصدر نفسه، وتسبب هبوطًا في الجهد قدره Ir داخل المصدر."],
          ["Ohm's law for a closed circuit", "قانون أوم للدائرة المغلقة", "I = V_B / (R + r): total emf divided by total resistance.", "I = V_B / (R + r): القوة الدافعة الكلية مقسومة على المقاومة الكلية."],
          ["Junction (node)", "نقطة التفرع", "A point where three or more conductors meet.", "نقطة يلتقي عندها ثلاثة موصلات أو أكثر."],
          ["Kirchhoff's first law", "قانون كيرتشوف الأول", "Sum of currents into a node = sum of currents out (ΣI = 0); conservation of charge.", "مجموع التيارات الداخلة إلى نقطة تفرع = مجموع الخارجة منها (ΣI = 0)؛ بقاء الشحنة."],
          ["Kirchhoff's second law", "قانون كيرتشوف الثاني", "In a closed loop the algebraic sum of emfs = algebraic sum of IR drops; conservation of energy.", "في المسار المغلق المجموع الجبري للقوى الدافعة = المجموع الجبري لفروق الجهد IR؛ بقاء الطاقة."]
        ],
        lab: { parts: [{ type: "sec3phy_kirch" }] },
        quiz: [
          q(["A cell of emf 2 V and internal resistance 0.1 Ω is connected to an external resistance of 3.9 Ω. The current is…", "عمود قوته الدافعة ٢ فولت ومقاومته الداخلية ٠٫١ أوم متصل بمقاومة خارجية ٣٫٩ أوم. شدة التيار…"],
            [["0.5 A", "٠٫٥ أمبير"], ["0.513 A", "٠٫٥١٣ أمبير"], ["20 A", "٢٠ أمبير"], ["0.05 A", "٠٫٠٥ أمبير"]],
            ["I = V_B/(R + r) = 2/(3.9 + 0.1) = 0.5 A. Ignoring r gives 0.513 A.", "I = V_B ÷ (R + r) = ٢ ÷ (٣٫٩ + ٠٫١) = ٠٫٥ أمبير، وإهمال r يعطي ٠٫٥١٣ أمبير."], ["The push must drive the current through the outside AND the inside of the cell.", "الدفع يجب أن يحرك التيار في الخارج وداخل العمود أيضًا."]),
          q(["For the same cell, the voltage across its terminals while the current flows is…", "لنفس العمود، فرق الجهد بين قطبيه أثناء مرور التيار يساوي…"],
            [["1.95 V", "١٫٩٥ فولت"], ["2.05 V", "٢٫٠٥ فولت"], ["2 V", "٢ فولت"], ["0.05 V", "٠٫٠٥ فولت"]],
            ["V = V_B − Ir = 2 − 0.5 × 0.1 = 1.95 V (also = IR = 0.5 × 3.9).", "V = V_B − Ir = ٢ − ٠٫٥ × ٠٫١ = ١٫٩٥ فولت (وتساوي IR = ٠٫٥ × ٣٫٩)."], ["0.05 V is lost inside the cell, so the outside gets a little less than 2 V.", "يضيع ٠٫٠٥ فولت داخل العمود، فيصل للخارج أقل قليلًا من ٢ فولت."]),
          q(["A 12 V battery with internal resistance 0.5 Ω supplies 4 A. Its terminal voltage is…", "بطارية ١٢ فولت مقاومتها الداخلية ٠٫٥ أوم تعطي تيارًا ٤ أمبير. فرق الجهد بين قطبيها…"],
            [["10 V", "١٠ فولت"], ["14 V", "١٤ فولت"], ["12 V", "١٢ فولت"], ["2 V", "٢ فولت"]],
            ["V = V_B − Ir = 12 − 4 × 0.5 = 10 V. (14 V would be a battery being charged.)", "V = V_B − Ir = ١٢ − ٤ × ٠٫٥ = ١٠ فولت. (١٤ فولت تكون لبطارية تُشحن.)"], ["A car battery dims the headlights a bit when the starter pulls a big current.", "بطارية السيارة تُضعف الكشافات قليلًا عندما يسحب المارش تيارًا كبيرًا."]),
          q(["Currents of 4 A, 5 A and 2 A flow into a junction and 8 A flows out. The fifth current is…", "تيارات ٤ و٥ و٢ أمبير تدخل نقطة تفرع ويخرج منها ٨ أمبير. التيار الخامس…"],
            [["3 A leaving the junction", "٣ أمبير خارج من النقطة"], ["3 A entering the junction", "٣ أمبير داخل إلى النقطة"], ["19 A leaving", "١٩ أمبير خارج"], ["1 A entering", "١ أمبير داخل"]],
            ["ΣI in = ΣI out: 4 + 5 + 2 = 8 + I, so I = 3 A going out.", "مجموع الداخل = مجموع الخارج: ٤ + ٥ + ٢ = ٨ + I، إذن I = ٣ أمبير خارج."], ["11 people enter a metro hall and 8 leave by one door, so 3 must leave by the other.", "١١ شخصًا يدخلون صالة المترو ويخرج ٨ من باب، فلا بد أن يخرج ٣ من الباب الآخر."]),
          q(["Kirchhoff's second law is a consequence of the conservation of…", "قانون كيرتشوف الثاني نتيجة لقانون بقاء…"],
            [["energy", "الطاقة"], ["electric charge", "الشحنة الكهربية"], ["mass", "الكتلة"], ["momentum", "كمية الحركة"]],
            ["Around a closed loop the energy given to 1 C (ΣV_B) equals the energy it loses (ΣIR). The first law is conservation of charge.", "في المسار المغلق الطاقة المعطاة لكل ١ كولوم (ΣV_B) تساوي الطاقة المفقودة (ΣIR)، أما الأول فبقاء الشحنة."], ["A full lap brings you back to the same height: what you climbed equals what you descended.", "اللفة الكاملة تعيدك إلى نفس الارتفاع: ما صعدته يساوي ما نزلته."]),
          q(["Solving a circuit with Kirchhoff's laws gives I₂ = −0.516 A. This means…", "عند حل دائرة بقانوني كيرتشوف كانت I₂ = −٠٫٥١٦ أمبير. هذا يعني…"],
            [["The real current is 0.516 A opposite to the assumed direction", "التيار الحقيقي ٠٫٥١٦ أمبير في عكس الاتجاه المفترض"], ["The current is impossible, re-start", "التيار مستحيل ويجب إعادة الحل"], ["No current flows in that branch", "لا يمر تيار في هذا الفرع"], ["The battery must be removed", "يجب إزالة البطارية"]],
            ["The sign only tells the direction: a negative value means the actual direction is opposite to the guess.", "الإشارة تحدد الاتجاه فقط؛ القيمة السالبة تعني أن الاتجاه الحقيقي عكس المفترض."], ["You guessed the traffic went north; the minus sign says it went south.", "خمنت أن المرور متجه شمالًا، والإشارة السالبة تقول إنه متجه جنوبًا."]),
          q(["A 20 V battery (r = 1 Ω) is being charged by a current of 2.35 A. Its terminal voltage is…", "بطارية ٢٠ فولت (r = ١ أوم) تُشحن بتيار ٢٫٣٥ أمبير. فرق الجهد بين قطبيها…"],
            [["22.35 V", "٢٢٫٣٥ فولت"], ["17.65 V", "١٧٫٦٥ فولت"], ["20 V", "٢٠ فولت"], ["2.35 V", "٢٫٣٥ فولت"]],
            ["When charging, the current is forced against the emf: V = V_B + Ir = 20 + 2.35 × 1 = 22.35 V.", "عند الشحن يُدفع التيار عكس القوة الدافعة: V = V_B + Ir = ٢٠ + ٢٫٣٥ × ١ = ٢٢٫٣٥ فولت."], ["To fill a tank you must push harder than the water pushing back.", "لتملأ خزانًا يجب أن تدفع أقوى من الماء الذي يدفعك للخلف."])
        ]
      },
      /* ---------- Ch2 a ---------- */
      {
        id: "sec3phyu1l3", icon: "🧲", page: 32,
        title: { en: "Ch 2: Magnetic Field of a Current (Wire, Loop, Solenoid)", ar: "ف٢: المجال المغناطيسي للتيار (سلك مستقيم، ملف دائري، ملف حلزوني)" },
        idea: {
          official: {
            en: ["Oersted (1819) found that a current deflects a compass: a current produces a magnetic field. Its strength is the magnetic flux density " + eq("B = Φ / A") + " in Wb/m² (tesla).",
              "Straight wire: circular field lines; " + eq("B = μI / (2πd)") + " with μ(air) = 4π × 10⁻⁷ Wb/A·m. Direction: Ampere's right-hand rule (thumb along the current, fingers curl with the field).",
              "Book example: I = 10 A at d = 10 cm gives " + eq("B = 4π×10⁻⁷ × 10 / (2π × 0.1) = 2 × 10⁻⁵ T") + ".",
              "Circular loop of N turns, radius r: " + eq("B = μNI / (2r)") + " at the centre; the face where the current looks clockwise is a south pole. Example: N = 20, I = 1.4 A, r = 11 cm gives B = 1.6 × 10⁻⁴ T.",
              "Solenoid of N turns and length ℓ: " + eq("B = μNI / ℓ = μnI") + ", uniform inside like a bar magnet; polarity by the right-hand screw rule. Example: 800 turns, 0.7 A, 20 cm gives B = 3.52 × 10⁻³ T."],
            ar: ["اكتشف أورستد (١٨١٩) أن التيار يحرف البوصلة؛ أي أن التيار يولد مجالًا مغناطيسيًا، ويُقاس بكثافة الفيض المغناطيسي " + eq("B = Φ / A") + " بوحدة ويبر/م² (تسلا).",
              "السلك المستقيم: خطوط الفيض دوائر متحدة المركز، و" + eq("B = μI / (2πd)") + " حيث μ للهواء = ٤π × ١٠⁻⁷ ويبر/أمبير·م. ويُحدد الاتجاه بقاعدة أمبير لليد اليمنى (الإبهام مع التيار والأصابع مع المجال).",
              "مثال الكتاب: I = ١٠ أمبير على بعد d = ١٠ سم يعطي " + eq("B = 4π×10⁻⁷ × 10 / (2π × 0.1) = 2 × 10⁻⁵ T") + ".",
              "الملف الدائري ذو N لفة ونصف قطره r: " + eq("B = μNI / (2r)") + " عند مركزه، والوجه الذي يبدو فيه التيار مع عقارب الساعة قطب جنوبي. مثال: N = ٢٠ و I = ١٫٤ أمبير و r = ١١ سم تعطي B = ١٫٦ × ١٠⁻⁴ تسلا.",
              "الملف الحلزوني ذو N لفة وطوله ℓ: " + eq("B = μNI / ℓ = μnI") + "، ومجاله منتظم داخله مثل المغناطيس المستقيم، وتُحدد قطبيته بقاعدة البريمة لليد اليمنى. مثال: ٨٠٠ لفة و٠٫٧ أمبير وطول ٢٠ سم تعطي B = ٣٫٥٢ × ١٠⁻³ تسلا."]
          },
          story: {
            en: ["Youssef is on a school trip near the high-voltage towers on the Cairo-Alexandria desert road, holding his phone's compass app.",
              "Near a cable carrying a large current, the compass needle wobbles. Every current is wrapped in invisible magnetic circles.",
              "His teacher explains that B falls as 1/d: doubling the distance halves the field, which is why the book advises living away from high-voltage towers.",
              "Back home, Youssef winds wire around a pencil and connects a battery. The coil now picks up paper clips: a solenoid acts like a bar magnet.",
              "He adds more turns and the clips jump higher: B grows with N and with I."],
            ar: ["يوسف في رحلة مدرسية قرب أبراج الضغط العالي على الطريق الصحراوي بين القاهرة والإسكندرية، ومعه تطبيق البوصلة في هاتفه.",
              "بالقرب من كابل يحمل تيارًا كبيرًا اهتزت إبرة البوصلة؛ فكل تيار محاط بدوائر مغناطيسية غير مرئية.",
              "شرح المعلم أن B تقل بنسبة 1/d؛ فمضاعفة المسافة تُنصّف المجال، ولهذا ينصح الكتاب بالسكن بعيدًا عن أبراج الضغط العالي.",
              "في البيت لفّ يوسف سلكًا حول قلم ووصله ببطارية، فصار الملف يجذب مشابك الورق؛ الملف الحلزوني يعمل كمغناطيس مستقيم.",
              "زاد عدد اللفات فقفزت المشابك أعلى؛ فالمجال B يزداد بزيادة N و I."]
          }
        },
        words: [
          ["Magnetic flux density (B)", "كثافة الفيض المغناطيسي (B)", "Magnetic flux per unit area normal to the field, B = Φ/A; unit Wb/m² = tesla.", "الفيض المغناطيسي لكل وحدة مساحة عمودية على المجال، B = Φ/A؛ ووحدتها ويبر/م² = تسلا."],
          ["Permeability (μ)", "النفاذية المغناطيسية (μ)", "A property of the medium; in air μ = 4π × 10⁻⁷ Wb/A·m.", "صفة للوسط؛ للهواء μ = ٤π × ١٠⁻⁷ ويبر/أمبير·م."],
          ["Ampere's right-hand rule", "قاعدة أمبير لليد اليمنى", "Grasp the wire with the thumb along the current; the curled fingers give the field direction.", "أمسك السلك بحيث يشير الإبهام إلى اتجاه التيار، فتشير الأصابع الملتفة إلى اتجاه المجال."],
          ["Right-hand screw rule", "قاعدة البريمة لليد اليمنى", "Turn a screw with the current; its advance gives the field direction at the centre of a loop or coil.", "إذا دارت البريمة مع اتجاه التيار فإن اتجاه تقدمها يعطي اتجاه المجال عند مركز الملف."],
          ["Solenoid", "الملف الحلزوني (اللولبي)", "A long cylindrical coil; inside it the field is uniform, B = μNI/ℓ.", "ملف أسطواني طويل، مجاله داخله منتظم، B = μNI/ℓ."],
          ["Magnetic dipole", "ثنائي القطب المغناطيسي", "A loop carrying current behaves like a short magnet with a north and a south face.", "الملف الذي يمر به تيار يسلك سلوك مغناطيس قصير له وجه شمالي ووجه جنوبي."]
        ],
        lab: { parts: [{ type: "sec3phy_bfield" }] },
        quiz: [
          q(["A long straight wire carries 10 A in air. The flux density 10 cm from it is…", "سلك مستقيم طويل يحمل تيارًا ١٠ أمبير في الهواء. كثافة الفيض على بعد ١٠ سم منه…"],
            [["2 × 10⁻⁵ T", "٢ × ١٠⁻⁵ تسلا"], ["1.26 × 10⁻⁴ T", "١٫٢٦ × ١٠⁻⁴ تسلا"], ["2 × 10⁻⁷ T", "٢ × ١٠⁻⁷ تسلا"], ["2 × 10⁻³ T", "٢ × ١٠⁻³ تسلا"]],
            ["B = μI/(2πd) = 4π×10⁻⁷ × 10/(2π × 0.1) = 2 × 10⁻⁵ T. Forgetting 2π gives 1.26 × 10⁻⁴ T.", "B = μI/(2πd) = ٤π×١٠⁻⁷ × ١٠ ÷ (٢π × ٠٫١) = ٢ × ١٠⁻⁵ تسلا، ونسيان ٢π يعطي ١٫٢٦ × ١٠⁻⁴."], ["Convert 10 cm to 0.1 m first, then the π's cancel.", "حوّل ١٠ سم إلى ٠٫١ م أولًا، ثم تُختصر π."]),
          q(["A circular coil of 20 turns and radius 11 cm carries 1.4 A (μ = 4π × 10⁻⁷). B at its centre is…", "ملف دائري ٢٠ لفة نصف قطره ١١ سم يمر به ١٫٤ أمبير (μ = ٤π × ١٠⁻⁷). كثافة الفيض عند مركزه…"],
            [["1.6 × 10⁻⁴ T", "١٫٦ × ١٠⁻⁴ تسلا"], ["3.2 × 10⁻⁴ T", "٣٫٢ × ١٠⁻⁴ تسلا"], ["8 × 10⁻⁵ T", "٨ × ١٠⁻⁵ تسلا"], ["1.6 × 10⁻² T", "١٫٦ × ١٠⁻² تسلا"]],
            ["B = μNI/(2r) = 4π×10⁻⁷ × 20 × 1.4/(2 × 0.11) = 1.6 × 10⁻⁴ T. Dropping the 2 gives 3.2 × 10⁻⁴.", "B = μNI/(2r) = ٤π×١٠⁻⁷ × ٢٠ × ١٫٤ ÷ (٢ × ٠٫١١) = ١٫٦ × ١٠⁻⁴ تسلا، وإهمال العدد ٢ يعطي ٣٫٢ × ١٠⁻⁴."], ["Each of the 20 turns adds its own small field at the centre.", "كل لفة من الـ ٢٠ تضيف مجالها الصغير عند المركز."]),
          q(["A solenoid 20 cm long has 800 turns and carries 0.7 A (air core). B on its axis is…", "ملف حلزوني طوله ٢٠ سم وعدد لفاته ٨٠٠ ويمر به ٠٫٧ أمبير (قلب هوائي). كثافة الفيض على محوره…"],
            [["3.52 × 10⁻³ T", "٣٫٥٢ × ١٠⁻³ تسلا"], ["3.52 × 10⁻⁵ T", "٣٫٥٢ × ١٠⁻⁵ تسلا"], ["1.76 × 10⁻³ T", "١٫٧٦ × ١٠⁻³ تسلا"], ["7.04 × 10⁻³ T", "٧٫٠٤ × ١٠⁻³ تسلا"]],
            ["B = μNI/ℓ = 4π×10⁻⁷ × 800 × 0.7/0.2 = 3.52 × 10⁻³ T. Using ℓ = 20 instead of 0.2 m gives 3.52 × 10⁻⁵.", "B = μNI/ℓ = ٤π×١٠⁻⁷ × ٨٠٠ × ٠٫٧ ÷ ٠٫٢ = ٣٫٥٢ × ١٠⁻³ تسلا، واستخدام ℓ = ٢٠ بدل ٠٫٢ م يعطي ٣٫٥٢ × ١٠⁻⁵."], ["Many turns packed into a short length = a strong uniform field.", "لفات كثيرة في طول قصير = مجال قوي منتظم."]),
          q(["At what distance from a wire carrying 2 A is B = 4 × 10⁻⁶ T (air)?", "على أي بعد من سلك يحمل ٢ أمبير تكون B = ٤ × ١٠⁻⁶ تسلا (هواء)؟"],
            [["0.1 m", "٠٫١ م"], ["1 m", "١ م"], ["0.01 m", "٠٫٠١ م"], ["0.628 m", "٠٫٦٢٨ م"]],
            ["d = μI/(2πB) = 2 × 10⁻⁷ × 2/(4 × 10⁻⁶) = 0.1 m.", "d = μI/(2πB) = ٢ × ١٠⁻⁷ × ٢ ÷ (٤ × ١٠⁻⁶) = ٠٫١ م."], ["μ/2π = 2 × 10⁻⁷ is a handy shortcut.", "μ/2π = ٢ × ١٠⁻⁷ اختصار مفيد."]),
          q(["If the distance from a straight current-carrying wire is doubled, B becomes…", "إذا تضاعف البعد عن سلك مستقيم يمر به تيار فإن B تصبح…"],
            [["half", "النصف"], ["double", "الضعف"], ["a quarter", "الربع"], ["unchanged", "لا تتغير"]],
            ["B ∝ 1/d for a straight wire (not 1/d²).", "في السلك المستقيم B ∝ 1/d وليس 1/d²."], ["Twice as far from the tower, half the field.", "ضعف المسافة عن البرج، نصف المجال."]),
          q(["The current in a circular loop is doubled and its radius is doubled. B at the centre…", "تضاعف التيار في ملف دائري وتضاعف نصف قطره. كثافة الفيض عند مركزه…"],
            [["stays the same", "تظل كما هي"], ["doubles", "تتضاعف"], ["becomes 4 times", "تصبح ٤ أمثال"], ["halves", "تنقص للنصف"]],
            ["B = μNI/(2r): doubling I doubles B, doubling r halves it, so B is unchanged.", "B = μNI/(2r): مضاعفة I تضاعف B ومضاعفة r تُنصفها، فلا تتغير."], ["One change pushes up, the other pulls down equally.", "تغيير يرفع وتغيير يخفض بنفس القدر."]),
          q(["Looking at the face of a loop, the current appears clockwise. That face is…", "عند النظر إلى وجه ملف دائري يبدو التيار في اتجاه عقارب الساعة. هذا الوجه…"],
            [["a south pole", "قطب جنوبي"], ["a north pole", "قطب شمالي"], ["neutral", "متعادل"], ["a north pole only if the current is AC", "قطب شمالي فقط إذا كان التيار مترددًا"]],
            ["Clockwise = south, anticlockwise = north (right-hand screw: the field enters the clockwise face).", "مع عقارب الساعة = جنوبي، وعكسها = شمالي (قاعدة البريمة: المجال يدخل من الوجه الذي يبدو فيه التيار مع عقارب الساعة)."], ["Clock-wise looks like the letter S drawn with arrows: South.", "اتجاه عقارب الساعة يشبه حرف S بالأسهم: جنوبي."])
        ]
      },
      /* ---------- Ch2 b ---------- */
      {
        id: "sec3phyu1l4", icon: "🧭", page: 39,
        title: { en: "Ch 2: Force on a Current and Torque on a Coil", ar: "ف٢: القوة على سلك يحمل تيارًا وعزم الازدواج على ملف" },
        idea: {
          official: {
            en: ["A current-carrying wire in a magnetic field feels a force perpendicular to both the wire and the field. Direction: Fleming's left-hand rule (pointer = field, fingers = current, thumb = force).",
              "Magnitude: " + eq("F = BIℓ sinθ") + ", θ between wire and field; F = 0 when the wire is parallel to B. One tesla gives 1 N on 1 m of wire carrying 1 A at right angles.",
              "Book example: ℓ = 0.3 m, I = 4 A, F = 6 N gives " + eq("B = F/(Iℓ) = 6/(4 × 0.3) = 5 T") + "; at θ = 30°, " + eq("F = 5 × 4 × 0.3 × ½ = 3 N") + ".",
              "Two parallel wires attract if the currents are in the same direction and repel if opposite: " + eq("F = μI₁I₂ℓ / (2πd)") + ".",
              "A rectangular coil in a field feels a couple: " + eq("τ = BIAN sinθ = m_d B sinθ") + " with " + eq("m_d = IAN") + " the magnetic dipole moment; θ is between the normal to the coil and B. τ is maximum when the coil's plane is parallel to B and zero when perpendicular."],
            ar: ["السلك الذي يمر به تيار في مجال مغناطيسي تؤثر عليه قوة عمودية على السلك وعلى المجال، ويُحدد اتجاهها بقاعدة فلمنج لليد اليسرى (السبابة للمجال والأصابع للتيار والإبهام للقوة).",
              "مقدارها " + eq("F = BIℓ sinθ") + " حيث θ الزاوية بين السلك والمجال، وتنعدم F عندما يكون السلك موازيًا للمجال. التسلا تؤثر بقوة ١ نيوتن على سلك طوله ١ م يمر به ١ أمبير عموديًا عليها.",
              "مثال الكتاب: ℓ = ٠٫٣ م و I = ٤ أمبير و F = ٦ نيوتن تعطي " + eq("B = F/(Iℓ) = 6/(4 × 0.3) = 5 T") + "، وعند θ = ٣٠° تكون " + eq("F = 5 × 4 × 0.3 × ½ = 3 N") + ".",
              "السلكان المتوازيان يتجاذبان إذا كان التياران في اتجاه واحد ويتنافران إذا كانا متعاكسين: " + eq("F = μI₁I₂ℓ / (2πd)") + ".",
              "الملف المستطيل في مجال يتأثر بعزم ازدواج " + eq("τ = BIAN sinθ = m_d B sinθ") + " حيث " + eq("m_d = IAN") + " عزم ثنائي القطب المغناطيسي، و θ بين العمودي على الملف والمجال؛ ويكون العزم أكبر ما يمكن عندما يوازي مستوى الملف المجال وينعدم عندما يتعامد عليه."]
          },
          story: {
            en: ["Karim takes apart an old fan from his grandmother's flat in Tanta to see why it spins.",
              "Inside he finds coils of copper wire between curved magnets. When current flows, each side of the coil is pushed: one side up, the other down. Two equal, opposite forces make a couple.",
              "He uses his left hand: pointer along the field from N to S, middle fingers along the current, and his thumb shows the push.",
              "The push is strongest when the coil's plane lies along the field and fades to zero when the coil faces the field head-on.",
              "Karim realises the fan, the galvanometer in the school lab and the car's starter motor all run on the same rule: F = BIℓ."],
            ar: ["فكّ كريم مروحة قديمة من شقة جدته في طنطا ليعرف لماذا تدور.",
              "وجد بداخلها ملفات من سلك النحاس بين مغناطيسات منحنية؛ عندما يمر التيار يُدفع كل جانب من الملف: جانب لأعلى والآخر لأسفل، فتتكون قوتان متساويتان متضادتان تكوّنان ازدواجًا.",
              "استخدم يده اليسرى: السبابة مع المجال من الشمالي للجنوبي، والأصابع الوسطى مع التيار، فأشار إبهامه إلى اتجاه الدفع.",
              "يكون الدفع أقوى ما يمكن عندما يوازي مستوى الملف المجال، ويتلاشى عندما يواجه الملف المجال مباشرة.",
              "أدرك كريم أن المروحة والجلفانومتر في معمل المدرسة ومارش السيارة تعمل كلها بنفس القاعدة: F = BIℓ."]
          }
        },
        words: [
          ["Fleming's left-hand rule", "قاعدة فلمنج لليد اليسرى", "Pointer = field, other fingers = current, thumb = force or motion on the wire.", "السبابة = المجال، باقي الأصابع = التيار، الإبهام = القوة أو الحركة."],
          ["Tesla", "التسلا", "The flux density that exerts 1 N on 1 m of wire carrying 1 A perpendicular to the field (= Wb/m² = N/A·m).", "كثافة الفيض التي تؤثر بقوة ١ نيوتن على سلك طوله ١ م يمر به ١ أمبير عموديًا على المجال (= ويبر/م² = نيوتن/أمبير·م)."],
          ["Torque (couple)", "عزم الازدواج", "Force × perpendicular distance between two equal opposite parallel forces; on a coil τ = BIAN sinθ.", "القوة × البعد العمودي بين قوتين متساويتين متضادتين متوازيتين؛ وعلى الملف τ = BIAN sinθ."],
          ["Magnetic dipole moment", "عزم ثنائي القطب المغناطيسي", "m_d = IAN, a vector normal to the coil's face; τ = m_d B sinθ.", "m_d = IAN، كمية متجهة عمودية على وجه الملف؛ τ = m_d B sinθ."],
          ["Attraction of parallel currents", "تجاذب التيارات المتوازية", "Two parallel wires attract when their currents are in the same direction, repel when opposite.", "يتجاذب السلكان المتوازيان إذا كان التياران في نفس الاتجاه ويتنافران إذا تعاكسا."]
        ],
        lab: { parts: [{ type: "sec3phy_force" }] },
        quiz: [
          q(["A 30 cm wire carries 4 A perpendicular to a field and feels 6 N. The flux density is…", "سلك طوله ٣٠ سم يحمل ٤ أمبير عموديًا على مجال وتؤثر عليه قوة ٦ نيوتن. كثافة الفيض…"],
            [["5 T", "٥ تسلا"], ["7.2 T", "٧٫٢ تسلا"], ["0.2 T", "٠٫٢ تسلا"], ["0.05 T", "٠٫٠٥ تسلا"]],
            ["B = F/(Iℓ) = 6/(4 × 0.3) = 5 T. Multiplying instead of dividing gives 7.2.", "B = F/(Iℓ) = ٦ ÷ (٤ × ٠٫٣) = ٥ تسلا، والضرب بدل القسمة يعطي ٧٫٢."], ["Bigger force for the same wire and current means a stronger field.", "قوة أكبر لنفس السلك والتيار تعني مجالًا أقوى."]),
          q(["The same wire is turned to make 30° with the field. The force becomes…", "أُدير نفس السلك ليصنع زاوية ٣٠° مع المجال. تصبح القوة…"],
            [["3 N", "٣ نيوتن"], ["5.2 N", "٥٫٢ نيوتن"], ["6 N", "٦ نيوتن"], ["1.5 N", "١٫٥ نيوتن"]],
            ["F = BIℓ sin30° = 5 × 4 × 0.3 × 0.5 = 3 N. Using cos30° gives 5.2 N.", "F = BIℓ sin30° = ٥ × ٤ × ٠٫٣ × ٠٫٥ = ٣ نيوتن، واستخدام جتا ٣٠° يعطي ٥٫٢."], ["Only the part of the field across the wire pushes it.", "الجزء العمودي فقط من المجال هو الذي يدفع السلك."]),
          q(["A wire carrying current lies parallel to a uniform magnetic field. The force on it is…", "سلك يمر به تيار موضوع موازيًا لمجال مغناطيسي منتظم. القوة المؤثرة عليه…"],
            [["zero", "صفر"], ["maximum", "أكبر ما يمكن"], ["BIℓ/2", "BIℓ/2"], ["along the wire", "في اتجاه السلك"]],
            ["F = BIℓ sinθ and sin0° = 0.", "F = BIℓ sinθ و جا صفر = صفر."], ["Running alongside the field lines, the wire is never pushed sideways.", "عندما يسير السلك مع خطوط المجال لا يُدفع جانبيًا أبدًا."]),
          q(["A coil of 100 turns, area 0.02 m², carries 0.5 A in a 0.4 T field with its plane parallel to the field. The torque is…", "ملف ١٠٠ لفة ومساحته ٠٫٠٢ م² يمر به ٠٫٥ أمبير في مجال ٠٫٤ تسلا ومستواه موازٍ للمجال. عزم الازدواج…"],
            [["0.4 N·m", "٠٫٤ نيوتن·م"], ["0 N·m", "صفر"], ["0.004 N·m", "٠٫٠٠٤ نيوتن·م"], ["40 N·m", "٤٠ نيوتن·م"]],
            ["Plane parallel to B means the normal is at 90°: τ = BIAN = 0.4 × 0.5 × 0.02 × 100 = 0.4 N·m (maximum).", "المستوى موازٍ للمجال يعني أن العمودي عليه بزاوية ٩٠°: τ = BIAN = ٠٫٤ × ٠٫٥ × ٠٫٠٢ × ١٠٠ = ٠٫٤ نيوتن·م (أكبر قيمة)."], ["Like pushing a door at its edge, at right angles: the best turning effect.", "مثل دفع الباب من طرفه بزاوية قائمة: أفضل تأثير للدوران."]),
          q(["For the same coil, the magnetic dipole moment m_d is…", "لنفس الملف، عزم ثنائي القطب المغناطيسي m_d يساوي…"],
            [["1 A·m²", "١ أمبير·م²"], ["0.4 A·m²", "٠٫٤ أمبير·م²"], ["0.01 A·m²", "٠٫٠١ أمبير·م²"], ["2 A·m²", "٢ أمبير·م²"]],
            ["m_d = IAN = 0.5 × 0.02 × 100 = 1 A·m² (and τ = m_d B = 0.4 N·m).", "m_d = IAN = ٠٫٥ × ٠٫٠٢ × ١٠٠ = ١ أمبير·م² (و τ = m_d B = ٠٫٤ نيوتن·م)."], ["The moment belongs to the coil; the field just decides how hard it turns.", "العزم صفة للملف، والمجال يحدد فقط مدى قوة دورانه."]),
          q(["Two long parallel wires 10 cm apart carry 5 A and 10 A in the same direction. The force on 1 m of each is…", "سلكان متوازيان طويلان البعد بينهما ١٠ سم يحملان ٥ و١٠ أمبير في نفس الاتجاه. القوة على كل ١ م…"],
            [["1 × 10⁻⁴ N, attraction", "١ × ١٠⁻⁴ نيوتن تجاذب"], ["1 × 10⁻⁴ N, repulsion", "١ × ١٠⁻⁴ نيوتن تنافر"], ["6.28 × 10⁻⁴ N, attraction", "٦٫٢٨ × ١٠⁻⁴ نيوتن تجاذب"], ["1 × 10⁻⁶ N, attraction", "١ × ١٠⁻⁶ نيوتن تجاذب"]],
            ["F = μI₁I₂ℓ/(2πd) = 2 × 10⁻⁷ × 5 × 10 × 1/0.1 = 1 × 10⁻⁴ N; same-direction currents attract.", "F = μI₁I₂ℓ/(2πd) = ٢ × ١٠⁻⁷ × ٥ × ١٠ × ١ ÷ ٠٫١ = ١ × ١٠⁻⁴ نيوتن، والتياران في نفس الاتجاه يتجاذبان."], ["Currents going the same way are friends: they pull together.", "التيارات التي تسير في نفس الاتجاه أصدقاء: تتجاذب."]),
          q(["The torque on a current coil in a magnetic field is zero when…", "ينعدم عزم الازدواج على ملف يمر به تيار في مجال مغناطيسي عندما…"],
            [["the plane of the coil is perpendicular to the field", "يكون مستوى الملف عموديًا على المجال"], ["the plane of the coil is parallel to the field", "يكون مستوى الملف موازيًا للمجال"], ["the current is doubled", "يتضاعف التيار"], ["the coil has many turns", "يكون عدد اللفات كبيرًا"]],
            ["Then m_d is parallel to B, θ = 0 and τ = m_d B sin0 = 0.", "عندها يوازي m_d المجال فتكون θ = صفر و τ = m_d B sin0 = صفر."], ["Facing the field head-on, the two pushes pull along the same line and cancel.", "عندما يواجه الملف المجال مباشرة تعمل القوتان على خط واحد فتُلغي إحداهما الأخرى."])
        ]
      },
      /* ---------- Ch2 c ---------- */
      {
        id: "sec3phyu1l5", icon: "🎛️", page: 45,
        title: { en: "Ch 2: Measuring Instruments (Galvanometer, Ammeter, Voltmeter, Ohmmeter)", ar: "ف٢: أجهزة القياس (الجلفانومتر والأميتر والفولتميتر والأوميتر)" },
        idea: {
          official: {
            en: ["The sensitive moving-coil galvanometer detects, measures and gives the direction of weak currents. A torque on its coil in a radial field turns it until the spiral springs balance it, so the deflection ∝ current. Sensitivity = deflection per unit current (deg/μA).",
              "Ammeter: a small shunt R_s in PARALLEL with the coil carries most of the current: " + eq("R_s = I_g R_g / (I − I_g)") + ". Book example: R_g = 2 Ω, I_g = 5 mA, range 10 A give R_s = 0.01/9.995 ≈ 0.001 Ω.",
              "Voltmeter: a large multiplier R_m in SERIES with the coil: " + eq("R_m = (V − V_g) / I_g") + ". Book example: R_g = 0.1 Ω, I_g = 1 mA, range 50 V give R_m = 49 999.9 Ω, total 50 000 Ω.",
              "Ohmmeter: a microammeter (400 μA FSD) in series with a 1.5 V cell, a fixed and a variable resistance. Shorting the terminals gives FSD: internal resistance " + eq("1.5 / (400 × 10⁻⁶) = 3750 Ω") + ".",
              "An unknown R_x = 3750 Ω gives ½ FSD (200 μA), 7500 Ω gives ⅓ FSD, 11 250 Ω gives ¼ FSD: the scale is reversed and non-linear."],
            ar: ["الجلفانومتر الحساس ذو الملف المتحرك يكشف التيارات الضعيفة ويقيسها ويحدد اتجاهها. يتأثر ملفه بعزم ازدواج في مجال نصف قطري فيدور حتى يتزن مع عزم الملفين الزنبركيين، فيتناسب الانحراف مع التيار. والحساسية = الانحراف لكل وحدة تيار (درجة/ميكروأمبير).",
              "الأميتر: مجزئ تيار صغير R_s يوصل على التوازي مع الملف ويمر فيه معظم التيار: " + eq("R_s = I_g R_g / (I − I_g)") + ". مثال الكتاب: R_g = ٢ أوم و I_g = ٥ مللي أمبير والمدى ١٠ أمبير تعطي R_s = ٠٫٠١ ÷ ٩٫٩٩٥ ≈ ٠٫٠٠١ أوم.",
              "الفولتميتر: مضاعف جهد كبير R_m يوصل على التوالي مع الملف: " + eq("R_m = (V − V_g) / I_g") + ". مثال الكتاب: R_g = ٠٫١ أوم و I_g = ١ مللي أمبير والمدى ٥٠ فولت تعطي R_m = ٤٩٩٩٩٫٩ أوم والمقاومة الكلية ٥٠٠٠٠ أوم.",
              "الأوميتر: ميكروأميتر (أقصى تدريج ٤٠٠ ميكروأمبير) على التوالي مع عمود ١٫٥ فولت ومقاومة ثابتة ومقاومة متغيرة. عند توصيل طرفيه ببعض ينحرف المؤشر لنهاية التدريج: المقاومة الداخلية " + eq("1.5 / (400 × 10⁻⁶) = 3750 Ω") + ".",
              "المقاومة المجهولة R_x = ٣٧٥٠ أوم تعطي نصف التدريج (٢٠٠ ميكروأمبير)، و٧٥٠٠ أوم تعطي الثلث، و١١٢٥٠ أوم تعطي الربع؛ فالتدريج معكوس وغير منتظم."]
          },
          story: {
            en: ["Salma's father repairs washing machines in Mansoura and carries one analogue multimeter for everything.",
              "She asks how one needle can read 10 A and also 50 V. He opens the back: a tiny galvanometer that only needs 5 mA, plus a set of resistors chosen by the dial.",
              "On the amps range, a very thin shunt stands beside the coil and lets almost all the current bypass it, so the meter hardly disturbs the circuit it is put in series with.",
              "On the volts range, a huge resistor joins the coil in series, so the meter takes almost no current from the two points it is put across.",
              "On the ohms range, the needle swings fully when the probes touch: zero ohms is at the right end, the opposite of the amps scale."],
            ar: ["والد سلمى يصلح الغسالات في المنصورة ويحمل جهاز ملتيميتر تناظريًا واحدًا لكل شيء.",
              "سألته كيف يقرأ مؤشر واحد ١٠ أمبير و٥٠ فولت معًا؟ ففتح ظهر الجهاز: جلفانومتر صغير يحتاج ٥ مللي أمبير فقط، ومجموعة مقاومات يختارها القرص.",
              "في مدى الأمبير توجد مقاومة رفيعة جدًا بجوار الملف تمرر معظم التيار بعيدًا عنه، فلا يكاد الجهاز يغير تيار الدائرة الموصل بها على التوالي.",
              "وفي مدى الفولت تتصل مقاومة ضخمة بالملف على التوالي، فلا يكاد الجهاز يسحب تيارًا من النقطتين اللتين يوصل بينهما.",
              "وفي مدى الأوم ينحرف المؤشر لآخر التدريج عندما يتلامس الطرفان؛ فالصفر في أقصى اليمين، عكس تدريج الأمبير."]
          }
        },
        words: [
          ["Moving-coil galvanometer", "الجلفانومتر ذو الملف المتحرك", "Detects, measures and shows the direction of very weak currents using the torque on a coil in a radial field.", "يكشف التيارات الضعيفة جدًا ويقيسها ويحدد اتجاهها بالاعتماد على عزم الازدواج على ملف في مجال نصف قطري."],
          ["Galvanometer sensitivity", "حساسية الجلفانومتر", "The scale deflection per unit current in its coil (deg/μA).", "زاوية انحراف المؤشر لكل وحدة تيار تمر في ملفه (درجة/ميكروأمبير)."],
          ["Shunt", "مجزئ التيار", "A very small resistance in parallel with the galvanometer to make an ammeter: R_s = I_gR_g/(I − I_g).", "مقاومة صغيرة جدًا توصل على التوازي مع الجلفانومتر لتحويله إلى أميتر: R_s = I_gR_g/(I − I_g)."],
          ["Multiplier", "مضاعف الجهد", "A large resistance in series with the galvanometer to make a voltmeter: R_m = (V − V_g)/I_g.", "مقاومة كبيرة توصل على التوالي مع الجلفانومتر لتحويله إلى فولتميتر: R_m = (V − V_g)/I_g."],
          ["Ohmmeter", "الأوميتر", "Microammeter + cell + fixed and variable resistances; reads resistance directly on a reversed, non-linear scale.", "ميكروأميتر + عمود + مقاومة ثابتة ومتغيرة، يقيس المقاومة مباشرة على تدريج معكوس غير منتظم."],
          ["Full-scale deflection (FSD)", "أقصى انحراف (نهاية التدريج)", "The largest reading of the meter, at the maximum current I_g of the coil.", "أكبر قراءة للجهاز، عند أقصى تيار I_g يتحمله الملف."]
        ],
        lab: { parts: [{ type: "sec3phy_meters" }] },
        quiz: [
          q(["A galvanometer of resistance 2 Ω gives FSD at 5 mA. The shunt needed for a 10 A ammeter is about…", "جلفانومتر مقاومته ٢ أوم وأقصى تيار له ٥ مللي أمبير. مجزئ التيار اللازم لتحويله إلى أميتر مداه ١٠ أمبير تقريبًا…"],
            [["0.001 Ω in parallel", "٠٫٠٠١ أوم على التوازي"], ["0.001 Ω in series", "٠٫٠٠١ أوم على التوالي"], ["1998 Ω in series", "١٩٩٨ أوم على التوالي"], ["0.5 Ω in parallel", "٠٫٥ أوم على التوازي"]],
            ["R_s = I_gR_g/(I − I_g) = 0.005 × 2/9.995 ≈ 0.001 Ω, connected in parallel.", "R_s = I_gR_g/(I − I_g) = ٠٫٠٠٥ × ٢ ÷ ٩٫٩٩٥ ≈ ٠٫٠٠١ أوم، ويوصل على التوازي."], ["A wide bypass road next to a narrow bridge carries almost all the traffic.", "طريق جانبي واسع بجوار كوبري ضيق يحمل معظم المرور."]),
          q(["A galvanometer (0.1 Ω, FSD 1 mA) is to become a 50 V voltmeter. The multiplier is…", "جلفانومتر (٠٫١ أوم، أقصى تيار ١ مللي أمبير) يُراد تحويله إلى فولتميتر مداه ٥٠ فولت. مضاعف الجهد…"],
            [["49 999.9 Ω in series", "٤٩٩٩٩٫٩ أوم على التوالي"], ["50 000.1 Ω in series", "٥٠٠٠٠٫١ أوم على التوالي"], ["49 999.9 Ω in parallel", "٤٩٩٩٩٫٩ أوم على التوازي"], ["50 Ω in series", "٥٠ أوم على التوالي"]],
            ["V_g = I_gR_g = 10⁻⁴ V; R_m = (50 − 10⁻⁴)/10⁻³ = 49 999.9 Ω in series; total = 50 000 Ω.", "V_g = I_gR_g = ١٠⁻⁴ فولت؛ R_m = (٥٠ − ١٠⁻⁴) ÷ ١٠⁻³ = ٤٩٩٩٩٫٩ أوم على التوالي، والكلية ٥٠٠٠٠ أوم."], ["Total resistance × FSD current = range: 50 000 × 0.001 = 50 V.", "المقاومة الكلية × أقصى تيار = المدى: ٥٠٠٠٠ × ٠٫٠٠١ = ٥٠ فولت."]),
          q(["A galvanometer of 50 Ω gives FSD at 10 mA. The shunt for a 1 A range is…", "جلفانومتر مقاومته ٥٠ أوم وأقصى تيار له ١٠ مللي أمبير. مجزئ التيار لمدى ١ أمبير…"],
            [["0.505 Ω", "٠٫٥٠٥ أوم"], ["5 Ω", "٥ أوم"], ["49.5 Ω", "٤٩٫٥ أوم"], ["0.0505 Ω", "٠٫٠٥٠٥ أوم"]],
            ["R_s = 0.01 × 50/(1 − 0.01) = 0.5/0.99 = 0.505 Ω.", "R_s = ٠٫٠١ × ٥٠ ÷ (١ − ٠٫٠١) = ٠٫٥ ÷ ٠٫٩٩ = ٠٫٥٠٥ أوم."], ["The shunt carries 0.99 A, the coil only 0.01 A, at the same voltage.", "المجزئ يحمل ٠٫٩٩ أمبير والملف ٠٫٠١ أمبير فقط عند نفس فرق الجهد."]),
          q(["An ohmmeter (1.5 V, FSD 400 μA, internal resistance 3750 Ω) measures 7500 Ω. The pointer shows…", "أوميتر (١٫٥ فولت، أقصى تيار ٤٠٠ ميكروأمبير، مقاومته الداخلية ٣٧٥٠ أوم) يقيس مقاومة ٧٥٠٠ أوم. يشير المؤشر إلى…"],
            [["⅓ FSD (133 μA)", "ثلث التدريج (١٣٣ ميكروأمبير)"], ["½ FSD", "نصف التدريج"], ["¼ FSD", "ربع التدريج"], ["⅔ FSD", "ثلثي التدريج"]],
            ["I = 1.5/(3750 + 7500) = 1.33 × 10⁻⁴ A = ⅓ of 400 μA.", "I = ١٫٥ ÷ (٣٧٥٠ + ٧٥٠٠) = ١٫٣٣ × ١٠⁻⁴ أمبير = ثلث ٤٠٠ ميكروأمبير."], ["Total resistance became 3 times bigger, so the current is 3 times smaller.", "أصبحت المقاومة الكلية ٣ أمثال، فقل التيار إلى الثلث."]),
          q(["Why must an ammeter have a very small total resistance?", "لماذا يجب أن تكون مقاومة الأميتر الكلية صغيرة جدًا؟"],
            [["It is in series, so it must not change the current it measures", "لأنه يوصل على التوالي فلا يجب أن يغير التيار المراد قياسه"], ["It is in parallel, so it must not draw current", "لأنه يوصل على التوازي فلا يجب أن يسحب تيارًا"], ["To increase its sensitivity", "لزيادة حساسيته"], ["To protect the battery", "لحماية البطارية"]],
            ["A large ammeter resistance in series would reduce the very current being measured.", "مقاومة كبيرة على التوالي تُنقص التيار نفسه المراد قياسه."], ["A checkpoint on the road must not slow the traffic it is counting.", "نقطة العد على الطريق يجب ألا تُبطئ المرور الذي تعدّه."]),
          q(["On an ohmmeter scale, zero ohms is at…", "على تدريج الأوميتر يقع الصفر أوم عند…"],
            [["full-scale deflection, and the scale is non-linear", "أقصى انحراف، والتدريج غير منتظم"], ["zero deflection, and the scale is uniform", "صفر الانحراف، والتدريج منتظم"], ["half deflection", "نصف الانحراف"], ["the middle, and the scale is uniform", "المنتصف، والتدريج منتظم"]],
            ["Short-circuited terminals give the largest current, FSD; I = V/(R_int + R_x) is not linear in R_x.", "قصر الطرفين يعطي أكبر تيار أي نهاية التدريج، و I = V/(R_int + R_x) ليست علاقة خطية في R_x."], ["No resistance = maximum current = needle all the way across.", "لا مقاومة = أكبر تيار = المؤشر لآخره."])
        ]
      },
      /* ---------- Ch3 a ---------- */
      {
        id: "sec3phyu1l6", icon: "🌀", page: 61,
        title: { en: "Ch 3: Electromagnetic Induction (Faraday, Lenz, Mutual and Self Induction)", ar: "ف٣: الحث الكهرومغناطيسي (فاراداي ولنز والحث المتبادل والذاتي)" },
        idea: {
          official: {
            en: ["Faraday plunged a magnet into a coil connected to a centre-zero galvanometer: the pointer deflected while the magnet moved and deflected the opposite way when it was pulled out. A CHANGING flux induces an emf.",
              "Faraday's law: " + eq("emf = −N ΔΦ/Δt") + ". The minus sign is Lenz's rule: the induced current opposes the change that produces it (a N pole pushed in makes a N face on the coil, which repels it).",
              "A straight wire moving through a field: " + eq("emf = Bℓv sinθ") + ", direction by Fleming's right-hand rule (pointer = field, thumb = motion, middle finger = induced current).",
              "Mutual induction between two coils: " + eq("emf₂ = −M ΔI₁/Δt") + ", M in henry. Self induction of one coil: " + eq("emf = −L ΔI/Δt") + "; one henry gives 1 V when the current changes by 1 A/s. Example: L = 0.5 H, current falls 4 A in 0.01 s gives 200 V (the spark at the switch).",
              "Eddy currents are induced in solid metal by a changing flux. They heat (induction furnaces) and waste energy in cores, so cores are made of thin insulated sheets."],
            ar: ["أدخل فاراداي مغناطيسًا في ملف متصل بجلفانومتر صفره في المنتصف، فانحرف المؤشر أثناء حركة المغناطيس، وانحرف في الاتجاه المضاد عند إخراجه؛ فتغير الفيض يولد قوة دافعة مستحثة.",
              "قانون فاراداي: " + eq("emf = −N ΔΦ/Δt") + "، والإشارة السالبة هي قاعدة لنز: التيار المستحث يكون في اتجاه يقاوم التغير المسبب له (تقريب قطب شمالي يجعل وجه الملف شماليًا فيتنافران).",
              "السلك المستقيم المتحرك في مجال: " + eq("emf = Bℓv sinθ") + "، ويُحدد الاتجاه بقاعدة فلمنج لليد اليمنى (السبابة للمجال والإبهام للحركة والوسطى للتيار المستحث).",
              "الحث المتبادل بين ملفين: " + eq("emf₂ = −M ΔI₁/Δt") + "، ووحدة M الهنري. والحث الذاتي لملف واحد: " + eq("emf = −L ΔI/Δt") + "؛ الهنري يولد ١ فولت عندما يتغير التيار بمعدل ١ أمبير/ث. مثال: L = ٠٫٥ هنري ويهبط التيار ٤ أمبير في ٠٫٠١ ث فتتولد ٢٠٠ فولت (شرارة المفتاح).",
              "التيارات الدوامية تتولد في الكتل المعدنية بتغير الفيض، فتسبب تسخينًا (أفران الحث) وفقدًا للطاقة في القلوب الحديدية، لذا تُصنع القلوب من شرائح رقيقة معزولة."]
          },
          story: {
            en: ["Nour rides her bicycle along the Corniche in Alexandria at night; a small dynamo touching the wheel lights her front lamp.",
              "When she pedals faster the lamp shines brighter: the magnet inside spins faster, the flux changes faster, and emf = −N ΔΦ/Δt grows.",
              "When she stops, the lamp dies even though the magnet is still there. No change, no induction.",
              "Pedalling feels slightly harder with the lamp on. That is Lenz's rule: the induced current makes its own magnet that resists the spinning, so her legs supply the electrical energy.",
              "At home, she switches off her old fan and sees a tiny spark inside the switch: self-induction trying to keep the current going."],
            ar: ["تركب نور دراجتها ليلًا على كورنيش الإسكندرية، ودينامو صغير يلامس العجلة يضيء مصباحها الأمامي.",
              "عندما تبدّل أسرع يزداد ضوء المصباح؛ فالمغناطيس بالداخل يدور أسرع ويتغير الفيض أسرع فتزداد emf = −N ΔΦ/Δt.",
              "عندما تتوقف ينطفئ المصباح رغم وجود المغناطيس؛ لا تغير، لا حث.",
              "تشعر أن التبديل أصعب قليلًا والمصباح مضاء؛ هذه قاعدة لنز: التيار المستحث يكوّن مغناطيسًا يقاوم الدوران، فقدماها هما مصدر الطاقة الكهربية.",
              "في البيت أطفأت مروحتها القديمة فرأت شرارة صغيرة داخل المفتاح؛ إنه الحث الذاتي يحاول إبقاء التيار مستمرًا."]
          }
        },
        words: [
          ["Electromagnetic induction", "الحث الكهرومغناطيسي", "Generation of an induced emf and current in a conductor when the magnetic flux linked with it changes.", "توليد قوة دافعة كهربية وتيار مستحثين في موصل عند تغير الفيض المغناطيسي الذي يقطعه."],
          ["Faraday's law", "قانون فاراداي", "emf = −N ΔΦ/Δt: the induced emf is proportional to the rate of change of flux and to the number of turns.", "emf = −N ΔΦ/Δt: القوة الدافعة المستحثة تتناسب مع معدل تغير الفيض ومع عدد اللفات."],
          ["Lenz's rule", "قاعدة لنز", "The induced current flows in a direction that opposes the change producing it.", "يكون اتجاه التيار المستحث بحيث يقاوم التغير المسبب له."],
          ["Fleming's right-hand rule", "قاعدة فلمنج لليد اليمنى", "Pointer = field, thumb = motion, middle finger = direction of the induced current.", "السبابة = المجال، الإبهام = الحركة، الوسطى = اتجاه التيار المستحث."],
          ["Mutual induction", "الحث المتبادل", "A changing current in one coil induces an emf in a nearby coil: emf = −M ΔI/Δt.", "تغير التيار في ملف يولد قوة دافعة مستحثة في ملف مجاور: emf = −M ΔI/Δt."],
          ["Self-inductance (L), the henry", "معامل الحث الذاتي (L)، الهنري", "emf induced in a coil when its own current changes at 1 A/s; 1 H = 1 V·s/A.", "القوة الدافعة المستحثة في الملف عندما يتغير تياره بمعدل ١ أمبير/ث؛ الهنري = فولت·ث/أمبير."],
          ["Eddy currents", "التيارات الدوامية", "Closed induced currents in a solid conductor in a changing flux; they produce heat.", "تيارات مستحثة مقفلة في كتلة موصلة عند تغير الفيض، وتولد حرارة."]
        ],
        lab: { parts: [{ type: "sec3phy_induct" }] },
        quiz: [
          q(["The flux through a 200-turn coil falls from 5 × 10⁻³ Wb to 1 × 10⁻³ Wb in 0.2 s. The average induced emf is…", "يتغير الفيض خلال ملف ٢٠٠ لفة من ٥ × ١٠⁻³ ويبر إلى ١ × ١٠⁻³ ويبر في ٠٫٢ ث. متوسط القوة الدافعة المستحثة…"],
            [["4 V", "٤ فولت"], ["5 V", "٥ فولت"], ["0.02 V", "٠٫٠٢ فولت"], ["1 V", "١ فولت"]],
            ["emf = N ΔΦ/Δt = 200 × 4 × 10⁻³/0.2 = 4 V. Using 5 × 10⁻³ instead of the change gives 5 V.", "emf = N ΔΦ/Δt = ٢٠٠ × ٤ × ١٠⁻³ ÷ ٠٫٢ = ٤ فولت، واستخدام ٥ × ١٠⁻³ بدل التغير يعطي ٥ فولت."], ["Only the CHANGE in flux counts, not the flux itself.", "التغير في الفيض هو المهم وليس الفيض نفسه."]),
          q(["A 0.5 m wire moves at 4 m/s perpendicular to a 0.2 T field. The induced emf is…", "سلك طوله ٠٫٥ م يتحرك بسرعة ٤ م/ث عموديًا على مجال ٠٫٢ تسلا. القوة الدافعة المستحثة…"],
            [["0.4 V", "٠٫٤ فولت"], ["1.6 V", "١٫٦ فولت"], ["0.1 V", "٠٫١ فولت"], ["10 V", "١٠ فولت"]],
            ["emf = Bℓv = 0.2 × 0.5 × 4 = 0.4 V.", "emf = Bℓv = ٠٫٢ × ٠٫٥ × ٤ = ٠٫٤ فولت."], ["The wire sweeps 2 m² of field every second: 0.2 T × 2 m²/s.", "السلك يمسح ٢ م² من المجال كل ثانية: ٠٫٢ × ٢."]),
          q(["The same wire moves at 30° to the field. The emf becomes…", "تحرك نفس السلك بزاوية ٣٠° مع المجال. تصبح القوة الدافعة…"],
            [["0.2 V", "٠٫٢ فولت"], ["0.35 V", "٠٫٣٥ فولت"], ["0.4 V", "٠٫٤ فولت"], ["0.8 V", "٠٫٨ فولت"]],
            ["emf = Bℓv sinθ = 0.4 × 0.5 = 0.2 V.", "emf = Bℓv sinθ = ٠٫٤ × ٠٫٥ = ٠٫٢ فولت."], ["Moving partly along the lines cuts fewer of them.", "الحركة جزئيًا مع الخطوط تقطع عددًا أقل منها."]),
          q(["The current in a coil of L = 0.5 H drops from 4 A to zero in 0.01 s. The self-induced emf is…", "يهبط التيار في ملف معامل حثه الذاتي ٠٫٥ هنري من ٤ أمبير إلى الصفر في ٠٫٠١ ث. القوة الدافعة المستحثة الذاتية…"],
            [["200 V", "٢٠٠ فولت"], ["2 V", "٢ فولت"], ["0.02 V", "٠٫٠٢ فولت"], ["8 V", "٨ فولت"]],
            ["emf = L ΔI/Δt = 0.5 × 4/0.01 = 200 V, enough to light a neon lamp (~180 V) or spark at the switch.", "emf = L ΔI/Δt = ٠٫٥ × ٤ ÷ ٠٫٠١ = ٢٠٠ فولت، تكفي لإضاءة لمبة نيون (حوالي ١٨٠ فولت) أو إحداث شرارة."], ["Stopping a current suddenly is like slamming the brakes: a big kick.", "إيقاف التيار فجأة مثل الفرملة المفاجئة: ركلة كبيرة."]),
          q(["Two coils have M = 0.2 H. The primary current rises by 3 A in 0.1 s. The emf in the secondary is…", "ملفان معامل الحث المتبادل بينهما ٠٫٢ هنري. يزداد التيار في الابتدائي ٣ أمبير خلال ٠٫١ ث. القوة الدافعة في الثانوي…"],
            [["6 V", "٦ فولت"], ["0.06 V", "٠٫٠٦ فولت"], ["1.5 V", "١٫٥ فولت"], ["60 V", "٦٠ فولت"]],
            ["emf = M ΔI/Δt = 0.2 × 3/0.1 = 6 V, opposing the increase.", "emf = M ΔI/Δt = ٠٫٢ × ٣ ÷ ٠٫١ = ٦ فولت، في اتجاه يقاوم الزيادة."], ["The secondary only reacts while the primary current is changing.", "الثانوي يتأثر فقط أثناء تغير تيار الابتدائي."]),
          q(["The N pole of a magnet is pushed towards a coil. The coil face nearest the magnet becomes…", "يُقرّب القطب الشمالي لمغناطيس من ملف. يصبح وجه الملف المقابل للمغناطيس…"],
            [["a N pole, repelling the magnet", "قطبًا شماليًا يتنافر مع المغناطيس"], ["a S pole, attracting the magnet", "قطبًا جنوبيًا يجذب المغناطيس"], ["neutral", "متعادلًا"], ["a N pole only when the magnet stops", "قطبًا شماليًا فقط عند توقف المغناطيس"]],
            ["By Lenz's rule the induced current opposes the approach, so a N face forms and repels.", "حسب قاعدة لنز يقاوم التيار المستحث الاقتراب، فيتكون وجه شمالي يتنافر معه."], ["The coil says: you are coming closer? I will push you back.", "الملف يقول: تقترب؟ سأدفعك للخلف."]),
          q(["Transformer cores are made of thin insulated sheets of soft iron in order to…", "تُصنع قلوب المحولات من شرائح رقيقة معزولة من الحديد المطاوع من أجل…"],
            [["reduce eddy currents and the heat they waste", "تقليل التيارات الدوامية والحرارة الضائعة"], ["increase eddy currents", "زيادة التيارات الدوامية"], ["make the core lighter only", "جعل القلب أخف فقط"], ["increase the resistance of the coils", "زيادة مقاومة الملفات"]],
            ["Insulated laminations break the closed paths of eddy currents, reducing energy loss as heat.", "الشرائح المعزولة تقطع المسارات المقفلة للتيارات الدوامية فيقل الفقد الحراري."], ["Cutting a big roundabout into small blocked streets stops the swirling traffic.", "تقسيم ميدان كبير إلى شوارع صغيرة مغلقة يمنع الدوران."])
        ]
      },
      /* ---------- Ch3 b ---------- */
      {
        id: "sec3phyu1l7", icon: "⚙️", page: 72,
        title: { en: "Ch 3: The Dynamo, the Transformer and the DC Motor", ar: "ف٣: الدينامو والمحول الكهربي والمحرك الكهربي" },
        idea: {
          official: {
            en: ["The AC generator (dynamo) turns mechanical energy into electrical energy: a coil spins in a field and slip rings + graphite brushes take the current out. " + eq("emf = NBAω sinθ") + " with " + eq("ω = 2πf") + "; " + eq("emf_max = NBA(2πf)") + ".",
              "Book example: N = 100, A = 0.21 m², B = 10⁻³ T, f = 50 Hz give " + eq("emf_max ≈ 6.6 V") + " and at θ = 30°, emf = 6.6 × ½ = 3.3 V. The emf is zero when the coil is perpendicular to the field.",
              "Effective (rms) value: the DC that gives the same heating: " + eq("I_eff = 0.707 I_max") + ", " + eq("V_eff = 0.707 V_max") + ". A split cylinder (commutator) instead of slip rings gives one-direction current (DC dynamo).",
              "Transformer (mutual induction, AC only): " + eq("V_s/V_p = N_s/N_p") + " and, if ideal, " + eq("I_s/I_p = N_p/N_s") + ". Efficiency " + eq("η = V_sI_s / (V_pI_p)") + ". Example: 240 V in, 900 V × 4 A out (100 %) gives I_p = 15 A.",
              "Step-up transformers at power stations reduce the current, so the line loss I²R falls (1/100 of the current gives 1/10 000 of the loss). The DC motor reverses the idea: a current coil in a field turns, and the commutator reverses the current every half turn."],
            ar: ["المولد الكهربي (الدينامو) يحول الطاقة الميكانيكية إلى طاقة كهربية: ملف يدور في مجال، وتنقل الحلقتان المعدنيتان والفرشتان الجرافيت التيار للخارج. " + eq("emf = NBAω sinθ") + " حيث " + eq("ω = 2πf") + "، و" + eq("emf_max = NBA(2πf)") + ".",
              "مثال الكتاب: N = ١٠٠ و A = ٠٫٢١ م² و B = ١٠⁻³ تسلا و f = ٥٠ هرتز تعطي " + eq("emf_max ≈ 6.6 V") + "، وعند θ = ٣٠° تكون emf = ٦٫٦ × ½ = ٣٫٣ فولت، وتنعدم عندما يتعامد مستوى الملف على المجال.",
              "القيمة الفعالة: قيمة التيار المستمر الذي يعطي نفس التأثير الحراري: " + eq("I_eff = 0.707 I_max") + " و" + eq("V_eff = 0.707 V_max") + ". واستخدام أسطوانة مشقوقة بدل الحلقتين يعطي تيارًا في اتجاه واحد (دينامو التيار المستمر).",
              "المحول الكهربي (حث متبادل، تيار متردد فقط): " + eq("V_s/V_p = N_s/N_p") + "، وإذا كان مثاليًا " + eq("I_s/I_p = N_p/N_s") + ". الكفاءة " + eq("η = V_sI_s / (V_pI_p)") + ". مثال: ٢٤٠ فولت دخل و٩٠٠ فولت × ٤ أمبير خرج (١٠٠٪) تعطي I_p = ١٥ أمبير.",
              "المحولات الرافعة في محطات التوليد تُقلل التيار فتقل خسارة الخطوط I²R (تقليل التيار إلى ١/١٠٠ يقلل الخسارة إلى ١/١٠٠٠٠). والمحرك الكهربي عكس الفكرة: ملف يحمل تيارًا في مجال فيدور، والأسطوانة المشقوقة تعكس التيار كل نصف دورة."]
          },
          story: {
            en: ["Ahmed visits the Aswan High Dam with his class. Inside, water spins huge turbines that turn coils inside giant magnets: mechanical energy becomes electrical energy.",
              "The engineer shows a screen: the voltage rises and falls 50 times a second. That is the 50 Hz AC of every Egyptian socket.",
              "Outside, the power goes into a step-up transformer to hundreds of thousands of volts. 'Why so high?' Ahmed asks. 'High voltage means small current, and small current means tiny I²R losses on the long lines to Cairo.'",
              "Near his home, a step-down transformer on a pole lowers it to 220 V.",
              "At night, his electric toothbrush charger hums: a tiny step-down transformer, and its motor uses a commutator to keep turning one way."],
            ar: ["زار أحمد السد العالي في أسوان مع فصله؛ بالداخل تُدير المياه توربينات ضخمة تُدير ملفات داخل مغناطيسات عملاقة، فتتحول الطاقة الميكانيكية إلى كهربية.",
              "أشار المهندس إلى شاشة: الجهد يرتفع وينخفض ٥٠ مرة كل ثانية؛ هذا هو التيار المتردد ٥٠ هرتز في كل مقبس مصري.",
              "في الخارج تدخل الكهرباء محولًا رافعًا إلى مئات الآلاف من الفولتات. سأل أحمد: لماذا هذا الارتفاع؟ فأجاب: الجهد العالي يعني تيارًا صغيرًا، والتيار الصغير يعني خسارة I²R ضئيلة في الخطوط الطويلة إلى القاهرة.",
              "وقرب بيته يخفض محول خافض على عمود الجهد إلى ٢٢٠ فولت.",
              "وفي الليل يطن شاحن فرشاة أسنانه الكهربية: محول خافض صغير، ومحركها يستخدم أسطوانة مشقوقة ليستمر في الدوران في اتجاه واحد."]
          }
        },
        words: [
          ["AC generator (dynamo)", "المولد الكهربي (الدينامو)", "Converts mechanical energy into electrical energy by rotating a coil in a magnetic field.", "يحول الطاقة الميكانيكية إلى طاقة كهربية بدوران ملف في مجال مغناطيسي."],
          ["Slip rings and brushes", "الحلقتان المعدنيتان والفرشتان", "Rotate with the coil and pass the alternating current to the external circuit.", "تدوران مع الملف وتنقلان التيار المتردد إلى الدائرة الخارجية."],
          ["Commutator (split cylinder)", "الأسطوانة المعدنية المشقوقة", "Two insulated halves that reverse the coil connections every half turn to give unidirectional current.", "نصفا أسطوانة معزولان يعكسان توصيل الملف كل نصف دورة فيعطيان تيارًا في اتجاه واحد."],
          ["Effective value", "القيمة الفعالة", "The DC value that produces the same heating: I_eff = 0.707 I_max.", "قيمة التيار المستمر الذي يعطي نفس التأثير الحراري: I_eff = 0.707 I_max."],
          ["Transformer", "المحول الكهربي", "Steps an AC voltage up or down by mutual induction: V_s/V_p = N_s/N_p.", "يرفع أو يخفض الجهد المتردد بالحث المتبادل: V_s/V_p = N_s/N_p."],
          ["Efficiency of a transformer", "كفاءة المحول", "Output energy of the secondary ÷ input energy of the primary in the same time: η = V_sI_s/(V_pI_p).", "نسبة الطاقة الناتجة من الثانوي إلى الطاقة المعطاة للابتدائي في نفس الزمن: η = V_sI_s/(V_pI_p)."],
          ["Electric motor", "المحرك الكهربي", "Converts electrical energy into mechanical energy using the torque on a current coil.", "يحول الطاقة الكهربية إلى طاقة ميكانيكية بالاعتماد على عزم الازدواج على ملف يمر به تيار."]
        ],
        lab: { parts: [{ type: "sec3phy_dynamo" }] },
        quiz: [
          q(["A generator coil has 100 turns of area 0.21 m² and spins at 50 Hz in B = 10⁻³ T. Its maximum emf is about…", "ملف دينامو ١٠٠ لفة ومساحته ٠٫٢١ م² يدور بتردد ٥٠ هرتز في مجال ١٠⁻³ تسلا. القوة الدافعة العظمى تقريبًا…"],
            [["6.6 V", "٦٫٦ فولت"], ["1.05 V", "١٫٠٥ فولت"], ["3.3 V", "٣٫٣ فولت"], ["66 V", "٦٦ فولت"]],
            ["emf_max = NBA(2πf) = 100 × 10⁻³ × 0.21 × 2π × 50 ≈ 6.6 V. Forgetting 2π gives 1.05 V.", "emf_max = NBA(2πf) = ١٠٠ × ١٠⁻³ × ٠٫٢١ × ٢π × ٥٠ ≈ ٦٫٦ فولت، ونسيان ٢π يعطي ١٫٠٥ فولت."], ["ω is in rad/s: one turn is 2π radians, 50 turns a second.", "ω بالراديان/ث: الدورة ٢π راديان، و٥٠ دورة في الثانية."]),
          q(["For the same generator, the emf when the angle θ = 30° is…", "لنفس الدينامو، القوة الدافعة عندما θ = ٣٠°…"],
            [["3.3 V", "٣٫٣ فولت"], ["5.7 V", "٥٫٧ فولت"], ["6.6 V", "٦٫٦ فولت"], ["0 V", "صفر"]],
            ["emf = emf_max sinθ = 6.6 × 0.5 = 3.3 V.", "emf = emf_max sinθ = ٦٫٦ × ٠٫٥ = ٣٫٣ فولت."], ["A third of the way to the peak angle gives half of the peak value.", "عند ٣٠° نحصل على نصف القيمة العظمى."]),
          q(["The effective current in a circuit is 10 A. Its maximum value is…", "القيمة الفعالة لتيار متردد ١٠ أمبير. قيمته العظمى…"],
            [["14.14 A", "١٤٫١٤ أمبير"], ["7.07 A", "٧٫٠٧ أمبير"], ["10 A", "١٠ أمبير"], ["20 A", "٢٠ أمبير"]],
            ["I_max = I_eff/0.707 = 10/0.707 = 14.14 A.", "I_max = I_eff ÷ ٠٫٧٠٧ = ١٠ ÷ ٠٫٧٠٧ = ١٤٫١٤ أمبير."], ["The peak is always higher than the effective value.", "القمة دائمًا أعلى من القيمة الفعالة."]),
          q(["A transformer on 240 V gives 900 V and 4 A (efficiency 100 %). The primary current is…", "محول على ٢٤٠ فولت يعطي ٩٠٠ فولت و٤ أمبير (كفاءة ١٠٠٪). تيار الابتدائي…"],
            [["15 A", "١٥ أمبير"], ["1.07 A", "١٫٠٧ أمبير"], ["4 A", "٤ أمبير"], ["3.75 A", "٣٫٧٥ أمبير"]],
            ["V_pI_p = V_sI_s: I_p = 900 × 4/240 = 15 A.", "V_pI_p = V_sI_s: I_p = ٩٠٠ × ٤ ÷ ٢٤٠ = ١٥ أمبير."], ["Step the voltage up and the current must step down by the same factor.", "إذا ارتفع الجهد لا بد أن ينخفض التيار بنفس النسبة."]),
          q(["A bell transformer (efficiency 80 %) gives 8 V from 220 V; the primary has 1100 turns. The secondary turns are…", "محول جرس كفاءته ٨٠٪ يعطي ٨ فولت من ٢٢٠ فولت، وعدد لفات الابتدائي ١١٠٠. عدد لفات الثانوي…"],
            [["50", "٥٠"], ["40", "٤٠"], ["32", "٣٢"], ["30 250", "٣٠٢٥٠"]],
            ["η = V_sN_p/(V_pN_s): 0.8 = 8 × 1100/(220 N_s), so N_s = 8800/176 = 50. (40 would be the ideal answer.)", "η = V_sN_p/(V_pN_s): ٠٫٨ = ٨ × ١١٠٠ ÷ (٢٢٠ N_s)، إذن N_s = ٨٨٠٠ ÷ ١٧٦ = ٥٠. (٤٠ إجابة المحول المثالي.)"], ["Losses mean you need a few extra turns to still get 8 V out.", "الفقد يعني أنك تحتاج لفات إضافية لتحصل على ٨ فولت."]),
          q(["In the same bell transformer the primary current is 0.1 A. The secondary current is…", "في نفس محول الجرس تيار الابتدائي ٠٫١ أمبير. تيار الثانوي…"],
            [["2.2 A", "٢٫٢ أمبير"], ["2.75 A", "٢٫٧٥ أمبير"], ["1.76 A", "١٫٧٦ أمبير"], ["0.36 A", "٠٫٣٦ أمبير"]],
            ["η = V_sI_s/(V_pI_p): 0.8 = 8 I_s/(220 × 0.1), I_s = 17.6/8 = 2.2 A.", "η = V_sI_s/(V_pI_p): ٠٫٨ = ٨ I_s ÷ (٢٢٠ × ٠٫١)، إذن I_s = ١٧٫٦ ÷ ٨ = ٢٫٢ أمبير."], ["Only 80 % of the 22 W input reaches the bell: 17.6 W at 8 V.", "يصل ٨٠٪ فقط من ٢٢ وات إلى الجرس: ١٧٫٦ وات عند ٨ فولت."]),
          q(["Replacing the slip rings of a dynamo with a split cylinder (commutator)…", "استبدال الحلقتين المعدنيتين في الدينامو بأسطوانة مشقوقة…"],
            [["makes the current unidirectional", "يجعل التيار في اتجاه واحد"], ["doubles the frequency of the AC", "يضاعف تردد التيار المتردد"], ["makes the emf constant and maximum", "يجعل القوة الدافعة ثابتة وعظمى"], ["stops the coil from turning", "يوقف دوران الملف"]],
            ["The halves swap brushes every half turn, so the outside current keeps one direction (still varying in size).", "يتبادل النصفان الفرشتين كل نصف دورة فيبقى التيار الخارجي في اتجاه واحد (مع تغير مقداره)."], ["Like a roundabout that always lets cars out on the same side.", "مثل ميدان يُخرج السيارات دائمًا من نفس الجهة."]),
          q(["If a step-up transformer reduces the transmission current to 1/100, the power lost in the lines becomes…", "إذا خفّض محول رافع تيار خطوط النقل إلى ١/١٠٠ فإن القدرة المفقودة في الخطوط تصبح…"],
            [["1/10 000 of its value", "١/١٠٠٠٠ من قيمتها"], ["1/100 of its value", "١/١٠٠ من قيمتها"], ["1/10 of its value", "١/١٠ من قيمتها"], ["unchanged", "كما هي"]],
            ["Loss = I²R, so (1/100)² = 1/10 000.", "الفقد = I²R، إذن (١/١٠٠)² = ١/١٠٠٠٠."], ["Squares make small currents a huge saving.", "التربيع يجعل تقليل التيار توفيرًا هائلًا."])
        ]
      },
      /* ---------- Ch4 ---------- */
      {
        id: "sec3phyu1l8", icon: "〰️", page: 100,
        title: { en: "Ch 4: AC Circuits (Reactance, Impedance, Resonance)", ar: "ف٤: دوائر التيار المتردد (المفاعلة والمعاوقة والرنين)" },
        idea: {
          official: {
            en: ["AC (50 Hz in Egypt) is measured by the hot-wire ammeter (thermal effect, Q ∝ I²), which reads the effective value on a non-uniform scale. In a pure resistor V and I are in phase.",
              "Inductor: the voltage LEADS the current by 90°; inductive reactance " + eq("X_L = 2πfL") + ". Example: L = 0.7 H, 200 V, 50 Hz give X_L = 220 Ω and I ≈ 0.9 A.",
              "Capacitor (Q = CV): the voltage LAGS the current by 90°; capacitive reactance " + eq("X_C = 1/(2πfC)") + ". In parallel C = C₁ + C₂ + C₃: 20 + 80 + 40 μF on 100 V, 50 Hz give X_C ≈ 22.7 Ω and I ≈ 4.4 A.",
              "Series RLC: voltages add as vectors, " + eq("Z = √(R² + (X_L − X_C)²)") + ", " + eq("tanθ = (X_L − X_C)/R") + ". Example: V_L = 80, V_C = 50, V_R = 40 V give V = √(40² + 30²) = 50 V and θ = 37° (inductive). Only R consumes power.",
              "Resonance when X_L = X_C: " + eq("f = 1 / (2π√(LC))") + ", current maximum, Z = R. Example: L = 16 mH, C = 4.9 μF give f ≈ 568 Hz. The LC oscillating circuit swaps energy between the capacitor's electric field and the coil's magnetic field; radios tune stations this way."],
            ar: ["التيار المتردد (٥٠ هرتز في مصر) يُقاس بالأميتر الحراري (التأثير الحراري، Q ∝ I²) الذي يقرأ القيمة الفعالة على تدريج غير منتظم، وفي المقاومة الأومية يتفق الجهد والتيار في الطور.",
              "الملف: الجهد يسبق التيار بزاوية ٩٠°، والمفاعلة الحثية " + eq("X_L = 2πfL") + ". مثال: L = ٠٫٧ هنري و٢٠٠ فولت و٥٠ هرتز تعطي X_L = ٢٢٠ أوم و I ≈ ٠٫٩ أمبير.",
              "المكثف (Q = CV): الجهد يتأخر عن التيار بزاوية ٩٠°، والمفاعلة السعوية " + eq("X_C = 1/(2πfC)") + ". وعلى التوازي C = C₁ + C₂ + C₃: ٢٠ + ٨٠ + ٤٠ ميكروفاراد على ١٠٠ فولت و٥٠ هرتز تعطي X_C ≈ ٢٢٫٧ أوم و I ≈ ٤٫٤ أمبير.",
              "دائرة RLC على التوالي: تُجمع الجهود اتجاهيًا، " + eq("Z = √(R² + (X_L − X_C)²)") + " و" + eq("tanθ = (X_L − X_C)/R") + ". مثال: V_L = ٨٠ و V_C = ٥٠ و V_R = ٤٠ فولت تعطي V = √(٤٠² + ٣٠²) = ٥٠ فولت و θ = ٣٧° (خواص حثية). والمقاومة الأومية فقط تستهلك القدرة.",
              "الرنين عندما X_L = X_C: " + eq("f = 1 / (2π√(LC))") + "، فيكون التيار أكبر ما يمكن و Z = R. مثال: L = ١٦ مللي هنري و C = ٤٫٩ ميكروفاراد تعطي f ≈ ٥٦٨ هرتز. ودائرة المهتز LC تتبادل فيها الطاقة بين المجال الكهربي للمكثف والمجال المغناطيسي للملف، وهكذا تُضبط محطات الراديو."]
          },
          story: {
            en: ["Hana's grandfather in Port Said listens to an old radio with a big tuning knob.",
              "Turning the knob changes a variable capacitor. Every station sends a different frequency, and the antenna feels them all at once.",
              "Only when X_L = X_C does the circuit's natural frequency f = 1/(2π√LC) match one station: that current becomes large and the voice comes through clearly. This is resonance.",
              "Hana compares it to two tuning forks in the music room: strike one and only the fork with the same frequency starts to ring.",
              "She also learns that the coil and capacitor only borrow energy and give it back; the radio's resistance is what turns energy into heat."],
            ar: ["جد هنا في بورسعيد يستمع إلى راديو قديم له مقبض ضبط كبير.",
              "إدارة المقبض تغير سعة مكثف متغير؛ كل محطة ترسل ترددًا مختلفًا، والهوائي يستقبلها كلها في وقت واحد.",
              "عندما تتساوى X_L و X_C فقط يتطابق التردد الطبيعي للدائرة f = 1/(2π√LC) مع محطة واحدة، فيكبر تيارها ويصل الصوت واضحًا؛ هذا هو الرنين.",
              "شبهته هنا بشوكتين رنانتين في حجرة الموسيقى: إذا طرقت إحداهما اهتزت فقط الشوكة التي لها نفس التردد.",
              "وتعلمت أن الملف والمكثف يستعيران الطاقة ثم يردانها، وأن مقاومة الراديو هي التي تحول الطاقة إلى حرارة."]
          }
        },
        words: [
          ["Hot-wire ammeter", "الأميتر الحراري", "Measures the effective value of AC (or DC) by the expansion of a platinum-iridium wire; its scale is non-uniform.", "يقيس القيمة الفعالة للتيار المتردد (أو المستمر) بتمدد سلك من البلاتين والإيريديوم، وتدريجه غير منتظم."],
          ["Inductive reactance (X_L)", "المفاعلة الحثية (X_L)", "Opposition of a coil to AC due to its self-inductance: X_L = 2πfL.", "ممانعة الملف لمرور التيار المتردد بسبب حثه الذاتي: X_L = 2πfL."],
          ["Capacitive reactance (X_C)", "المفاعلة السعوية (X_C)", "Opposition of a capacitor to AC due to its capacitance: X_C = 1/(2πfC).", "ممانعة المكثف لمرور التيار المتردد بسبب سعته: X_C = 1/(2πfC)."],
          ["Impedance (Z)", "المعاوقة (Z)", "The total opposition of resistance and reactances: Z = √(R² + (X_L − X_C)²).", "المحصلة الكلية للمقاومة والمفاعلات: Z = √(R² + (X_L − X_C)²)."],
          ["Phase angle (θ)", "زاوية الطور (θ)", "The angle between the total voltage and the current: tanθ = (X_L − X_C)/R.", "الزاوية بين الجهد الكلي والتيار: tanθ = (X_L − X_C)/R."],
          ["Resonance", "الرنين", "X_L = X_C, so Z = R and the current is maximum at f = 1/(2π√LC).", "تساوي X_L و X_C فتصبح Z = R ويكون التيار أكبر ما يمكن عند f = 1/(2π√LC)."],
          ["Oscillating circuit", "دائرة المهتز", "A charged capacitor and a coil exchanging energy between electric and magnetic fields.", "مكثف مشحون وملف تتبادل فيهما الطاقة بين المجالين الكهربي والمغناطيسي."]
        ],
        lab: { parts: [{ type: "sec3phy_rlc" }] },
        quiz: [
          q(["A coil of L = 0.7 H (negligible resistance) is connected to 200 V, 50 Hz. The current is about…", "ملف معامل حثه ٠٫٧ هنري (مقاومته مهملة) متصل بمصدر ٢٠٠ فولت و٥٠ هرتز. شدة التيار تقريبًا…"],
            [["0.91 A", "٠٫٩١ أمبير"], ["5.7 A", "٥٫٧ أمبير"], ["286 A", "٢٨٦ أمبير"], ["9.1 × 10⁻⁴ A", "٩٫١ × ١٠⁻⁴ أمبير"]],
            ["X_L = 2πfL = 2π × 50 × 0.7 ≈ 220 Ω; I = 200/220 ≈ 0.91 A. Forgetting 2π gives 5.7 A.", "X_L = 2πfL = ٢π × ٥٠ × ٠٫٧ ≈ ٢٢٠ أوم؛ I = ٢٠٠ ÷ ٢٢٠ ≈ ٠٫٩١ أمبير، ونسيان ٢π يعطي ٥٫٧ أمبير."], ["The coil fights every change of current, 50 times a second.", "الملف يقاوم كل تغير في التيار ٥٠ مرة كل ثانية."]),
          q(["Capacitors of 20, 80 and 40 μF in parallel are connected to 100 V, 50 Hz. The current is about…", "مكثفات ٢٠ و٨٠ و٤٠ ميكروفاراد على التوازي متصلة بمصدر ١٠٠ فولت و٥٠ هرتز. التيار تقريبًا…"],
            [["4.4 A", "٤٫٤ أمبير"], ["0.36 A", "٠٫٣٦ أمبير"], ["0.7 A", "٠٫٧ أمبير"], ["22.7 A", "٢٢٫٧ أمبير"]],
            ["C = 140 μF, X_C = 1/(2π × 50 × 1.4 × 10⁻⁴) ≈ 22.7 Ω, I = 100/22.7 ≈ 4.4 A. Treating them as series gives 0.36 A.", "C = ١٤٠ ميكروفاراد، X_C = ١ ÷ (٢π × ٥٠ × ١٫٤ × ١٠⁻⁴) ≈ ٢٢٫٧ أوم، I = ١٠٠ ÷ ٢٢٫٧ ≈ ٤٫٤ أمبير، ومعاملتها كتوالٍ تعطي ٠٫٣٦ أمبير."], ["Capacitors in parallel add like extra buckets: more capacity, less opposition.", "المكثفات على التوازي تُجمع كدلاء إضافية: سعة أكبر وممانعة أقل."]),
          q(["R = 40 Ω and X_L = 30 Ω in series on 80 V AC. The impedance is…", "R = ٤٠ أوم و X_L = ٣٠ أوم على التوالي مع مصدر متردد ٨٠ فولت. المعاوقة…"],
            [["50 Ω", "٥٠ أوم"], ["70 Ω", "٧٠ أوم"], ["10 Ω", "١٠ أوم"], ["1.6 Ω", "١٫٦ أوم"]],
            ["Z = √(40² + 30²) = 50 Ω, so I = 80/50 = 1.6 A.", "Z = √(٤٠² + ٣٠²) = ٥٠ أوم، إذن I = ٨٠ ÷ ٥٠ = ١٫٦ أمبير."], ["A 3-4-5 triangle: the reactance and resistance are at right angles.", "مثلث ٣-٤-٥: المفاعلة والمقاومة متعامدتان."]),
          q(["In that circuit V_R = 64 V and V_L = 48 V, yet the supply is 80 V because…", "في هذه الدائرة V_R = ٦٤ فولت و V_L = ٤٨ فولت ومع ذلك جهد المصدر ٨٠ فولت لأن…"],
            [["the voltages are 90° out of phase and add as vectors", "الجهدين بينهما فرق طور ٩٠° ويُجمعان اتجاهيًا"], ["the coil wastes 32 V as heat", "الملف يضيع ٣٢ فولت حرارة"], ["the meters are wrong", "أجهزة القياس خاطئة"], ["AC voltages always subtract", "جهود التيار المتردد تُطرح دائمًا"]],
            ["√(64² + 48²) = 80 V. Algebraic addition (112 V) is wrong in AC.", "√(٦٤² + ٤٨²) = ٨٠ فولت، والجمع الجبري (١١٢ فولت) خطأ في التيار المتردد."], ["Walking 64 m east then 48 m north puts you 80 m from the start.", "إذا مشيت ٦٤ م شرقًا ثم ٤٨ م شمالًا تبعد ٨٠ م عن البداية."]),
          q(["A series circuit has V_L = 80 V, V_C = 50 V, V_R = 40 V. The supply voltage and the circuit's character are…", "دائرة توالٍ فيها V_L = ٨٠ و V_C = ٥٠ و V_R = ٤٠ فولت. جهد المصدر وخواص الدائرة…"],
            [["50 V, inductive (θ ≈ 37°)", "٥٠ فولت، حثية (θ ≈ ٣٧°)"], ["170 V, inductive", "١٧٠ فولت، حثية"], ["50 V, capacitive", "٥٠ فولت، سعوية"], ["70 V, resistive", "٧٠ فولت، أومية"]],
            ["V = √(40² + (80 − 50)²) = 50 V; tanθ = 30/40, θ ≈ 37°, positive so the voltage leads: inductive.", "V = √(٤٠² + (٨٠ − ٥٠)²) = ٥٠ فولت؛ tanθ = ٣٠ ÷ ٤٠ و θ ≈ ٣٧° موجبة، فالجهد يسبق: حثية."], ["The coil and capacitor pull in opposite directions; the coil wins by 30 V.", "الملف والمكثف يشدان في اتجاهين متضادين، والملف يفوز بفارق ٣٠ فولت."]),
          q(["An LC circuit has L = 16 mH and C = 4.9 μF. Its resonant frequency is about…", "دائرة LC فيها L = ١٦ مللي هنري و C = ٤٫٩ ميكروفاراد. تردد الرنين تقريبًا…"],
            [["568 Hz", "٥٦٨ هرتز"], ["3571 Hz", "٣٥٧١ هرتز"], ["2.03 × 10⁶ Hz", "٢٫٠٣ × ١٠⁶ هرتز"], ["56.8 Hz", "٥٦٫٨ هرتز"]],
            ["f = 1/(2π√(LC)) = 1/(2π√(0.016 × 4.9 × 10⁻⁶)) = 1/(2π × 2.8 × 10⁻⁴) ≈ 568 Hz. Forgetting 2π gives 3571 Hz.", "f = ١ ÷ (٢π√(LC)) = ١ ÷ (٢π√(٠٫٠١٦ × ٤٫٩ × ١٠⁻⁶)) = ١ ÷ (٢π × ٢٫٨ × ١٠⁻⁴) ≈ ٥٦٨ هرتز، ونسيان ٢π يعطي ٣٥٧١ هرتز."], ["Bigger L or C slows the energy swap, lowering the frequency.", "زيادة L أو C تبطئ تبادل الطاقة فيقل التردد."]),
          q(["In a circuit containing only a capacitor, the voltage…", "في دائرة تحتوي على مكثف فقط، الجهد…"],
            [["lags the current by 90°", "يتأخر عن التيار بزاوية ٩٠°"], ["leads the current by 90°", "يسبق التيار بزاوية ٩٠°"], ["is in phase with the current", "يتفق مع التيار في الطور"], ["lags the current by 180°", "يتأخر عن التيار بزاوية ١٨٠°"]],
            ["The current is largest when the charge changes fastest (V = 0), so the current leads and V lags by 90°.", "يكون التيار أكبر ما يمكن عندما تتغير الشحنة بأسرع معدل (V = صفر)، فيسبق التيار ويتأخر الجهد بزاوية ٩٠°."], ["Water rushes into an empty tank first; the level (voltage) rises later.", "الماء يندفع إلى الخزان الفارغ أولًا، ثم يرتفع المستوى (الجهد) لاحقًا."]),
          q(["The divisions of a hot-wire ammeter scale get wider as the current increases because…", "تتسع أقسام تدريج الأميتر الحراري بزيادة التيار لأن…"],
            [["the heat produced is proportional to I²", "الحرارة المتولدة تتناسب مع I²"], ["the wire's resistance falls", "مقاومة السلك تقل"], ["the spring weakens", "الزنبرك يضعف"], ["AC changes direction", "التيار المتردد يغير اتجاهه"]],
            ["Q ∝ I², so the expansion and the pointer deflection grow with the square of the current.", "Q ∝ I²، فيزداد التمدد وانحراف المؤشر مع مربع التيار."], ["Doubling the current gives four times the heat.", "مضاعفة التيار تعطي أربعة أضعاف الحرارة."])
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Physics, Unit 2: Introduction to Modern Physics ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function q(a, c, off, sto) { return { q: a, c: c, off: off, sto: sto }; }
  var G = E.SCIG.sec3phy;
  G.units.push({
    id: "sec3phyu2", num: 2, icon: "⚛️", color: "purple",
    title: { en: "Introduction to Modern Physics", ar: "مقدمة في الفيزياء الحديثة" },
    lessons: [
      /* ---------- Ch5 a ---------- */
      {
        id: "sec3phyu2l1", icon: "☀️", page: 118,
        title: { en: "Ch 5: Black Body Radiation and the Photoelectric Effect", ar: "ف٥: إشعاع الجسم الأسود والظاهرة الكهروضوئية" },
        idea: {
          official: {
            en: ["A hot body radiates all wavelengths, but not equally (Planck's distribution curve). Wien's law: the wavelength of maximum intensity is inversely proportional to the absolute temperature. The Sun (6000 K) peaks near 500 nm (visible); a lamp filament (3000 K) near 1000 nm (infrared); the Earth near 10 μm.",
              "Classical physics could not explain why intensity falls at high frequency. Planck (1900): radiation comes in quanta (photons) of energy " + eq("E = hν") + ", h = 6.625 × 10⁻³⁴ J·s.",
              "Photoelectric effect: light frees electrons from a metal only if ν is above a critical frequency ν_c, whatever the intensity; the emission is instantaneous; the current grows with intensity but the electrons' kinetic energy grows only with frequency.",
              "Einstein: work function " + eq("E_w = hν_c") + " and " + eq("½mv² = hν − hν_c") + ". Example: 400 nm light (3.1 eV) on a metal with E_w = 2.3 eV gives KE ≈ 0.8 eV.",
              "Thermionic emission (heat freeing electrons) is used in the cathode ray tube's electron gun; black-body ideas are used in remote sensing, night vision and thermal imaging."],
            ar: ["الجسم الساخن يشع كل الأطوال الموجية لكن بشدة غير متساوية (منحنى توزيع بلانك). قانون فين: الطول الموجي عند أقصى شدة يتناسب عكسيًا مع درجة الحرارة المطلقة؛ الشمس (٦٠٠٠ كلفن) قمتها قرب ٥٠٠ نانومتر (مرئي)، وفتيل المصباح (٣٠٠٠ كلفن) قرب ١٠٠٠ نانومتر (تحت أحمر)، والأرض قرب ١٠ ميكرون.",
              "عجزت الفيزياء الكلاسيكية عن تفسير نقص الشدة عند الترددات العالية، ففسر بلانك (١٩٠٠) أن الإشعاع يتكون من كمات (فوتونات) طاقة كل منها " + eq("E = hν") + " حيث h = ٦٫٦٢٥ × ١٠⁻³⁴ جول·ث.",
              "الظاهرة الكهروضوئية: يحرر الضوء إلكترونات من سطح الفلز فقط إذا زاد تردده عن تردد حرج ν_c مهما كانت الشدة، والانبعاث لحظي، والتيار يزداد بزيادة الشدة لكن طاقة حركة الإلكترونات تزداد بزيادة التردد فقط.",
              "تفسير أينشتاين: دالة الشغل " + eq("E_w = hν_c") + " و" + eq("½mv² = hν − hν_c") + ". مثال: ضوء ٤٠٠ نانومتر (٣٫١ إلكترون فولت) على فلز دالة شغله ٢٫٣ إلكترون فولت يعطي طاقة حركة ≈ ٠٫٨ إلكترون فولت.",
              "الانبعاث الحراري (تحرير الإلكترونات بالحرارة) يُستخدم في مدفع الإلكترونات بأنبوبة أشعة الكاثود، وتطبيقات إشعاع الأجسام تشمل الاستشعار عن بعد والرؤية الليلية والتصوير الحراري."]
          },
          story: {
            en: ["Laila watches a blacksmith in Khan El-Khalili heat an iron bar. It glows dull red, then orange, then nearly white.",
              "Hotter means a shorter peak wavelength: that is Wien's law written in colour.",
              "On the roof of her school in 6th of October, the solar panels raise another question: why does red light make almost no current in her photocell kit while violet light works at once?",
              "Each photon delivers its energy hν to one electron. Red photons are too 'small' to pay the work function, no matter how many arrive; violet photons pay it and give the change as kinetic energy.",
              "Brighter violet light frees more electrons, not faster ones."],
            ar: ["تشاهد ليلى حدادًا في خان الخليلي يسخن قضيبًا من الحديد؛ يتوهج بالأحمر الباهت ثم البرتقالي ثم يكاد يبيضّ.",
              "كلما زادت السخونة قصر الطول الموجي للقمة؛ هذا قانون فين مكتوبًا بالألوان.",
              "على سطح مدرستها في ٦ أكتوبر تطرح الألواح الشمسية سؤالًا آخر: لماذا لا يكاد الضوء الأحمر يولد تيارًا في خلية ضوئية بينما يعمل البنفسجي فورًا؟",
              "كل فوتون يعطي طاقته hν لإلكترون واحد؛ فوتونات الأحمر أصغر من أن تدفع دالة الشغل مهما كثر عددها، أما البنفسجية فتدفعها وتعطي الباقي طاقة حركة.",
              "زيادة شدة الضوء البنفسجي تحرر إلكترونات أكثر، لا إلكترونات أسرع."]
          }
        },
        words: [
          ["Black body", "الجسم الأسود", "A body that absorbs all radiation falling on it (perfect absorber) and is also a perfect emitter.", "جسم يمتص كل الإشعاع الساقط عليه (ماص مثالي) وهو أيضًا مشع مثالي."],
          ["Planck's distribution curve", "منحنى توزيع بلانك", "The curve of radiation intensity against wavelength for a hot body.", "منحنى العلاقة بين شدة الإشعاع والطول الموجي لجسم ساخن."],
          ["Wien's law", "قانون فين", "λ_max is inversely proportional to the absolute temperature of the radiating body.", "الطول الموجي عند أقصى شدة يتناسب عكسيًا مع درجة الحرارة المطلقة للجسم المشع."],
          ["Photon (quantum)", "الفوتون (الكم)", "A packet of radiation energy E = hν moving at c.", "حزمة من طاقة الإشعاع E = hν تتحرك بسرعة الضوء c."],
          ["Photoelectric effect", "الظاهرة الكهروضوئية", "Emission of electrons from a metal surface when light of suitable frequency falls on it.", "انبعاث إلكترونات من سطح فلز عند سقوط ضوء ذي تردد مناسب عليه."],
          ["Work function (E_w)", "دالة الشغل (E_w)", "The minimum energy needed to free an electron from a metal surface: E_w = hν_c.", "أقل طاقة لازمة لتحرير إلكترون من سطح الفلز: E_w = hν_c."],
          ["Critical (threshold) frequency", "التردد الحرج", "The lowest frequency that can free electrons from a given metal.", "أقل تردد يمكنه تحرير إلكترونات من سطح فلز معين."]
        ],
        lab: { parts: [{ type: "sec3phy_photo" }] },
        quiz: [
          q(["The energy of a photon of wavelength 770 nm is (h = 6.625 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)…", "طاقة فوتون طوله الموجي ٧٧٠ نانومتر (h = ٦٫٦٢٥ × ١٠⁻³⁴ جول·ث، c = ٣ × ١٠⁸ م/ث)…"],
            [["2.58 × 10⁻¹⁹ J", "٢٫٥٨ × ١٠⁻¹⁹ جول"], ["2.58 × 10⁻²⁸ J", "٢٫٥٨ × ١٠⁻²⁸ جول"], ["8.6 × 10⁻²⁸ J", "٨٫٦ × ١٠⁻²⁸ جول"], ["5.16 × 10⁻¹⁹ J", "٥٫١٦ × ١٠⁻¹⁹ جول"]],
            ["E = hc/λ = 6.625 × 10⁻³⁴ × 3 × 10⁸/(770 × 10⁻⁹) = 2.58 × 10⁻¹⁹ J. Forgetting nm → m gives 10⁻²⁸.", "E = hc/λ = ٦٫٦٢٥ × ١٠⁻³⁴ × ٣ × ١٠⁸ ÷ (٧٧٠ × ١٠⁻٩) = ٢٫٥٨ × ١٠⁻¹⁹ جول، ونسيان تحويل النانومتر يعطي ١٠⁻²⁸."], ["Shorter wavelength = more energetic photon; red light is on the weak side.", "طول موجي أقصر = فوتون أقوى، والأحمر في الجانب الضعيف."]),
          q(["A metal has a work function of 2.3 eV. Its critical frequency is (1 eV = 1.6 × 10⁻¹⁹ J)…", "فلز دالة شغله ٢٫٣ إلكترون فولت. تردده الحرج (١ إلكترون فولت = ١٫٦ × ١٠⁻¹⁹ جول)…"],
            [["5.55 × 10¹⁴ Hz", "٥٫٥٥ × ١٠¹⁴ هرتز"], ["3.47 × 10³³ Hz", "٣٫٤٧ × ١٠³³ هرتز"], ["1.8 × 10⁻¹⁵ Hz", "١٫٨ × ١٠⁻¹⁵ هرتز"], ["5.55 × 10⁵ Hz", "٥٫٥٥ × ١٠⁵ هرتز"]],
            ["ν_c = E_w/h = 2.3 × 1.6 × 10⁻¹⁹/6.625 × 10⁻³⁴ = 5.55 × 10¹⁴ Hz. Not converting eV to J gives 3.47 × 10³³.", "ν_c = E_w/h = ٢٫٣ × ١٫٦ × ١٠⁻¹٩ ÷ ٦٫٦٢٥ × ١٠⁻³٤ = ٥٫٥٥ × ١٠¹⁴ هرتز، وعدم تحويل الإلكترون فولت إلى جول يعطي ٣٫٤٧ × ١٠³³."], ["Convert to joules first, then divide by h.", "حوّل إلى جول أولًا ثم اقسم على h."]),
          q(["Light of 400 nm (photon energy 3.1 eV) falls on that metal (E_w = 2.3 eV). The maximum KE of the photoelectrons is…", "ضوء ٤٠٠ نانومتر (طاقة الفوتون ٣٫١ إلكترون فولت) يسقط على هذا الفلز (E_w = ٢٫٣ إلكترون فولت). أقصى طاقة حركة للإلكترونات…"],
            [["0.8 eV", "٠٫٨ إلكترون فولت"], ["5.4 eV", "٥٫٤ إلكترون فولت"], ["3.1 eV", "٣٫١ إلكترون فولت"], ["0 eV (no emission)", "صفر (لا انبعاث)"]],
            ["½mv² = hν − E_w = 3.1 − 2.3 = 0.8 eV.", "½mv² = hν − E_w = ٣٫١ − ٢٫٣ = ٠٫٨ إلكترون فولت."], ["Pay the exit fee of 2.3 eV, keep 0.8 eV as change.", "ادفع رسوم الخروج ٢٫٣ وخذ الباقي ٠٫٨ طاقة حركة."]),
          q(["The intensity of light above the critical frequency is doubled. Then…", "تضاعفت شدة ضوء تردده أعلى من التردد الحرج. عندئذٍ…"],
            [["the photocurrent doubles; the maximum KE is unchanged", "يتضاعف التيار الكهروضوئي وتبقى أقصى طاقة حركة ثابتة"], ["the maximum KE doubles", "تتضاعف أقصى طاقة حركة"], ["both double", "يتضاعف الاثنان"], ["nothing changes", "لا يتغير شيء"]],
            ["More photons free more electrons, but each photon still has energy hν, so KE_max is the same.", "فوتونات أكثر تحرر إلكترونات أكثر، لكن طاقة كل فوتون ما زالت hν فتبقى أقصى طاقة حركة كما هي."], ["Twice as many buses, but each bus still travels at the same speed.", "ضعف عدد الأتوبيسات لكن كل أتوبيس بنفس السرعة."]),
          q(["Very bright red light falls on a metal for a long time, but no electrons are emitted. The reason is…", "ضوء أحمر شديد جدًا يسقط على فلز لمدة طويلة ولا تنبعث إلكترونات. السبب…"],
            [["its frequency is below the critical frequency", "تردده أقل من التردد الحرج"], ["the intensity is still too low", "شدته ما زالت ضعيفة"], ["the exposure time is too short", "زمن التعرض قصير"], ["the metal is too cold", "الفلز بارد جدًا"]],
            ["Each photon's hν is less than E_w; energy cannot be collected over time.", "طاقة كل فوتون hν أقل من دالة الشغل، والطاقة لا تتجمع مع الزمن."], ["A thousand small coins will not open a machine that only takes one big coin.", "ألف عملة صغيرة لن تفتح ماكينة لا تقبل إلا عملة كبيرة واحدة."]),
          q(["The Sun (about 6000 K) has peak radiation near 500 nm. A lamp filament at 3000 K peaks near…", "قمة إشعاع الشمس (حوالي ٦٠٠٠ كلفن) قرب ٥٠٠ نانومتر. قمة إشعاع فتيل مصباح عند ٣٠٠٠ كلفن قرب…"],
            [["1000 nm (infrared)", "١٠٠٠ نانومتر (تحت أحمر)"], ["250 nm (ultraviolet)", "٢٥٠ نانومتر (فوق بنفسجي)"], ["500 nm", "٥٠٠ نانومتر"], ["2000 nm", "٢٠٠٠ نانومتر"]],
            ["λ_max ∝ 1/T: half the temperature gives double the peak wavelength, 1000 nm. That is why most of a filament's output is heat.", "λ_max ∝ 1/T: نصف درجة الحرارة يعطي ضعف الطول الموجي، ١٠٠٠ نانومتر؛ لهذا معظم ما يشعه الفتيل حرارة."], ["Cooler glow, redder colour, longer wavelength.", "توهج أبرد = لون أحمر = طول موجي أطول."]),
          q(["A black body is defined as a body that…", "الجسم الأسود هو جسم…"],
            [["absorbs all radiation falling on it and is a perfect emitter", "يمتص كل الإشعاع الساقط عليه وهو مشع مثالي"], ["reflects all radiation", "يعكس كل الإشعاع"], ["emits only visible light", "يشع الضوء المرئي فقط"], ["is painted black", "مطلي باللون الأسود"]],
            ["A small hole in a closed cavity behaves as a black body: radiation entering is trapped by reflections.", "الثقب الصغير في تجويف مغلق يسلك كجسم أسود، فالإشعاع الداخل يُحبس بالانعكاسات المتتالية."], ["The open window of a dark room looks black from outside: light goes in and does not come back.", "نافذة غرفة مظلمة تبدو سوداء من الخارج: الضوء يدخل ولا يعود."])
        ]
      },
      /* ---------- Ch5 b ---------- */
      {
        id: "sec3phyu2l2", icon: "🎱", page: 126,
        title: { en: "Ch 5: Compton Effect, Photon Momentum and de Broglie Waves", ar: "ف٥: تأثير كومتون وكمية حركة الفوتون والموجات المصاحبة" },
        idea: {
          official: {
            en: ["Compton effect: an X-ray or gamma photon hitting a free electron leaves with a LOWER frequency and a new direction, while the electron speeds off. Momentum and energy are conserved as in a billiard collision, so the photon behaves as a particle.",
              "A photon moves at c, has energy hν, an equivalent mass " + eq("m = hν/c²") + " and momentum " + eq("p = hν/c = h/λ") + ". For λ = 380 nm: m = 5.81 × 10⁻³⁶ kg and p = 1.74 × 10⁻²⁷ kg·m/s.",
              "A beam of power P_w reflected from a surface exerts " + eq("F = 2P_w / c") + ": 1 W gives only 6.7 × 10⁻⁹ N, too small to move a wall but enough to knock a free electron.",
              "De Broglie (1923): every moving particle has an associated wave " + eq("λ = h / (mv)") + ". Electrons show interference and diffraction like light.",
              "Electron microscope: electrons accelerated through V gain " + eq("eV = ½mv²") + ". At 100 V, v ≈ 5.9 × 10⁶ m/s and λ ≈ 0.12 nm, thousands of times shorter than light, so the resolving power is huge; magnetic lenses focus the beam."],
            ar: ["تأثير كومتون: فوتون أشعة سينية أو جاما يصطدم بإلكترون حر فيخرج بتردد أقل واتجاه جديد بينما تزداد سرعة الإلكترون، مع بقاء كمية الحركة والطاقة كما في تصادم كرات البلياردو؛ فالفوتون يسلك سلوك الجسيم.",
              "الفوتون يتحرك بسرعة c وطاقته hν وله كتلة مكافئة " + eq("m = hν/c²") + " وكمية حركة " + eq("p = hν/c = h/λ") + ". عند λ = ٣٨٠ نانومتر: m = ٥٫٨١ × ١٠⁻³⁶ كجم و p = ١٫٧٤ × ١٠⁻²⁷ كجم·م/ث.",
              "شعاع قدرته P_w ينعكس عن سطح يؤثر بقوة " + eq("F = 2P_w / c") + "؛ شعاع ١ وات يعطي ٦٫٧ × ١٠⁻٩ نيوتن فقط، لا تحرك جدارًا لكنها تقذف إلكترونًا حرًا.",
              "دي برولي (١٩٢٣): لكل جسيم متحرك موجة مصاحبة " + eq("λ = h / (mv)") + "، فالإلكترونات تُظهر التداخل والحيود مثل الضوء.",
              "الميكروسكوب الإلكتروني: الإلكترون المعجل بفرق جهد V يكتسب " + eq("eV = ½mv²") + ". عند ١٠٠ فولت تكون v ≈ ٥٫٩ × ١٠⁶ م/ث و λ ≈ ٠٫١٢ نانومتر، أقصر من الضوء بآلاف المرات، فتكون قدرة التحليل كبيرة جدًا، وتُستخدم عدسات مغناطيسية لتجميع الحزمة."]
          },
          story: {
            en: ["Ziad plays billiards at a café in Heliopolis. A fast ball hits a still one: the first slows and changes direction, the second shoots away.",
              "His physics teacher grins: that is the Compton effect. Replace the cue ball with an X-ray photon and the target with a free electron.",
              "The photon loses energy, so its frequency drops and its wavelength grows; the electron gains exactly that energy. Waves cannot do this, particles can.",
              "Later, at Cairo University's open day, Ziad sees a fly's head under an electron microscope, every hair sharp.",
              "Electrons, it turns out, are waves too: λ = h/(mv). Fast electrons have tiny wavelengths that reveal tiny details."],
            ar: ["يلعب زياد البلياردو في مقهى بمصر الجديدة؛ كرة سريعة تصطدم بكرة ساكنة فتبطئ الأولى ويتغير اتجاهها وتنطلق الثانية.",
              "ابتسم معلم الفيزياء: هذا تأثير كومتون؛ ضع مكان الكرة الأولى فوتون أشعة سينية ومكان الثانية إلكترونًا حرًا.",
              "يفقد الفوتون طاقة فيقل تردده ويزيد طوله الموجي، ويكتسب الإلكترون هذه الطاقة بالضبط؛ الموجات لا تفعل هذا، الجسيمات تفعله.",
              "وفي اليوم المفتوح بجامعة القاهرة رأى زياد رأس ذبابة تحت الميكروسكوب الإلكتروني وكل شعرة فيها واضحة.",
              "فالإلكترونات موجات أيضًا: λ = h/(mv)، والإلكترونات السريعة أطوالها الموجية صغيرة جدًا فتكشف أدق التفاصيل."]
          }
        },
        words: [
          ["Compton effect", "تأثير كومتون", "A photon scattered by a free electron loses energy (lower frequency) while the electron gains speed; proof of the particle nature of light.", "فوتون يتشتت بإلكترون حر فيفقد طاقة (يقل تردده) ويكتسب الإلكترون سرعة؛ دليل على الطبيعة الجسيمية للضوء."],
          ["Photon momentum", "كمية حركة الفوتون", "p = hν/c = h/λ.", "p = hν/c = h/λ."],
          ["Equivalent mass of a photon", "الكتلة المكافئة للفوتون", "m = hν/c² while it moves at c (from E = mc²).", "m = hν/c² أثناء حركته بسرعة c (من E = mc²)."],
          ["Wave-particle duality", "ازدواجية الموجة والجسيم", "Light and matter show both wave and particle properties.", "الضوء والمادة يُظهران خواص الموجة وخواص الجسيم معًا."],
          ["De Broglie wavelength", "الطول الموجي المصاحب (دي برولي)", "The wavelength associated with a moving particle: λ = h/(mv).", "الطول الموجي للموجة المصاحبة لجسيم متحرك: λ = h/(mv)."],
          ["Electron microscope", "الميكروسكوب الإلكتروني", "Uses the short wavelength of fast electrons and magnetic lenses to get very high resolving power.", "يستخدم الطول الموجي القصير للإلكترونات السريعة وعدسات مغناطيسية للحصول على قدرة تحليل عالية جدًا."]
        ],
        lab: { parts: [{ type: "sec3phy_compton" }] },
        quiz: [
          q(["A 1 W light beam is totally reflected from a wall. The force on the wall is…", "شعاع ضوئي قدرته ١ وات ينعكس كليًا عن جدار. القوة المؤثرة على الجدار…"],
            [["6.7 × 10⁻⁹ N", "٦٫٧ × ١٠⁻٩ نيوتن"], ["3.3 × 10⁻⁹ N", "٣٫٣ × ١٠⁻٩ نيوتن"], ["6 × 10⁸ N", "٦ × ١٠⁸ نيوتن"], ["1 N", "١ نيوتن"]],
            ["F = 2P_w/c = 2 × 1/(3 × 10⁸) = 6.7 × 10⁻⁹ N; reflection doubles the momentum change (absorption alone would give 3.3 × 10⁻⁹).", "F = 2P_w/c = ٢ × ١ ÷ (٣ × ١٠⁸) = ٦٫٧ × ١٠⁻٩ نيوتن؛ الانعكاس يضاعف التغير في كمية الحركة (الامتصاص وحده يعطي ٣٫٣ × ١٠⁻٩)."], ["A ball that bounces back pushes the wall twice as hard as one that sticks.", "الكرة المرتدة تدفع الجدار ضعف الكرة التي تلتصق به."]),
          q(["The momentum of a photon of wavelength 380 nm is…", "كمية حركة فوتون طوله الموجي ٣٨٠ نانومتر…"],
            [["1.74 × 10⁻²⁷ kg·m/s", "١٫٧٤ × ١٠⁻²⁷ كجم·م/ث"], ["5.81 × 10⁻³⁶ kg·m/s", "٥٫٨١ × ١٠⁻³⁶ كجم·م/ث"], ["5.23 × 10⁻¹⁹ kg·m/s", "٥٫٢٣ × ١٠⁻١٩ كجم·م/ث"], ["1.74 × 10⁻³⁶ kg·m/s", "١٫٧٤ × ١٠⁻³⁶ كجم·م/ث"]],
            ["p = h/λ = 6.625 × 10⁻³⁴/(380 × 10⁻⁹) = 1.74 × 10⁻²⁷ kg·m/s. (5.81 × 10⁻³⁶ is the equivalent mass in kg, 5.23 × 10⁻¹⁹ the energy in J.)", "p = h/λ = ٦٫٦٢٥ × ١٠⁻³⁴ ÷ (٣٨٠ × ١٠⁻٩) = ١٫٧٤ × ١٠⁻²⁷ كجم·م/ث. (٥٫٨١ × ١٠⁻³⁶ هي الكتلة المكافئة و٥٫٢٣ × ١٠⁻١٩ هي الطاقة بالجول.)"], ["Divide h by the wavelength in metres.", "اقسم h على الطول الموجي بالمتر."]),
          q(["The equivalent mass of the same 380 nm photon is…", "الكتلة المكافئة لنفس الفوتون (٣٨٠ نانومتر)…"],
            [["5.81 × 10⁻³⁶ kg", "٥٫٨١ × ١٠⁻³⁶ كجم"], ["9.1 × 10⁻³¹ kg", "٩٫١ × ١٠⁻³¹ كجم"], ["1.74 × 10⁻²⁷ kg", "١٫٧٤ × ١٠⁻²⁷ كجم"], ["zero at all times", "صفر دائمًا"]],
            ["m = hν/c² = h/(λc) = 6.625 × 10⁻³⁴/(380 × 10⁻⁹ × 3 × 10⁸) = 5.81 × 10⁻³⁶ kg. 9.1 × 10⁻³¹ kg is the electron's mass.", "m = hν/c² = h/(λc) = ٦٫٦٢٥ × ١٠⁻³⁴ ÷ (٣٨٠ × ١٠⁻٩ × ٣ × ١٠⁸) = ٥٫٨١ × ١٠⁻³⁶ كجم، و٩٫١ × ١٠⁻³¹ هي كتلة الإلكترون."], ["E = mc² read backwards: energy carries mass.", "E = mc² بالعكس: الطاقة تحمل كتلة."]),
          q(["An electron (m = 9.1 × 10⁻³¹ kg) is accelerated from rest through 100 V. Its de Broglie wavelength is about…", "إلكترون (m = ٩٫١ × ١٠⁻³¹ كجم) يُعجل من السكون بفرق جهد ١٠٠ فولت. طوله الموجي المصاحب تقريبًا…"],
            [["0.123 nm", "٠٫١٢٣ نانومتر"], ["123 nm", "١٢٣ نانومتر"], ["1.23 nm", "١٫٢٣ نانومتر"], ["0.0123 nm", "٠٫٠١٢٣ نانومتر"]],
            ["v = √(2eV/m) = 5.93 × 10⁶ m/s; λ = h/(mv) = 6.625 × 10⁻³⁴/(9.1 × 10⁻³¹ × 5.93 × 10⁶) = 1.23 × 10⁻¹⁰ m.", "v = √(2eV/m) = ٥٫٩٣ × ١٠⁶ م/ث؛ λ = h/(mv) = ٦٫٦٢٥ × ١٠⁻³⁴ ÷ (٩٫١ × ١٠⁻³¹ × ٥٫٩٣ × ١٠⁶) = ١٫٢٣ × ١٠⁻١٠ م."], ["About the size of an atom: perfect for seeing tiny structures.", "حوالي حجم الذرة: مثالي لرؤية البنى الدقيقة."]),
          q(["In the Compton effect, the scattered photon has…", "في تأثير كومتون يكون للفوتون المشتت…"],
            [["a lower frequency (longer wavelength)", "تردد أقل (طول موجي أطول)"], ["a higher frequency", "تردد أعلى"], ["the same frequency but lower speed", "نفس التردد وسرعة أقل"], ["zero energy", "طاقة صفرية"]],
            ["It gives part of its energy hν to the electron, so ν falls; its speed stays c.", "يعطي جزءًا من طاقته hν للإلكترون فيقل ν، وتبقى سرعته c."], ["The cue ball slows after the hit, but a photon cannot slow, so it changes colour instead.", "الكرة تبطئ بعد الضربة، لكن الفوتون لا يبطئ فيتغير لونه بدلًا من ذلك."]),
          q(["If the speed of an electron is doubled, its de Broglie wavelength…", "إذا تضاعفت سرعة إلكترون فإن طوله الموجي المصاحب…"],
            [["halves", "يقل إلى النصف"], ["doubles", "يتضاعف"], ["becomes a quarter", "يصبح الربع"], ["stays the same", "لا يتغير"]],
            ["λ = h/(mv) ∝ 1/v.", "λ = h/(mv) ∝ 1/v."], ["Faster particle, finer wave, sharper picture.", "جسيم أسرع، موجة أدق، صورة أوضح."]),
          q(["The electron microscope has a much larger resolving power than the optical microscope because…", "قدرة تحليل الميكروسكوب الإلكتروني أكبر كثيرًا من الضوئي لأن…"],
            [["fast electrons have very short wavelengths", "الإلكترونات السريعة أطوالها الموجية قصيرة جدًا"], ["electrons are heavier than photons", "الإلكترونات أثقل من الفوتونات"], ["it uses glass lenses", "يستخدم عدسات زجاجية"], ["electrons travel faster than light", "الإلكترونات أسرع من الضوء"]],
            ["High kinetic energy means large momentum and λ = h/p thousands of times shorter than visible light.", "طاقة الحركة الكبيرة تعني كمية حركة كبيرة و λ = h/p أقصر من الضوء المرئي بآلاف المرات."], ["A finer pen draws finer details.", "القلم الأدق يرسم تفاصيل أدق."])
        ]
      },
      /* ---------- Ch6 ---------- */
      {
        id: "sec3phyu2l3", icon: "🌈", page: 140,
        title: { en: "Ch 6: Atomic Spectra and X-Rays", ar: "ف٦: الأطياف الذرية والأشعة السينية" },
        idea: {
          official: {
            en: ["Bohr's model: electrons move in shells of fixed energy without radiating. In hydrogen " + eq("E_n = −13.6 / n² eV") + " (1 eV = 1.6 × 10⁻¹⁹ J): E₁ = −13.6, E₂ = −3.39, E₃ = −1.51, E₄ = −0.85 eV.",
              "When an electron drops from a higher level to a lower one it emits one photon: " + eq("hν = E₂ − E₁") + ", " + eq("λ = hc / ΔE") + ". From n = 3 to n = 2: ΔE = 1.89 eV and λ ≈ 656 nm, the red line.",
              "Hydrogen series: Lyman (to n = 1, ultraviolet), Balmer (to n = 2, visible), Paschen (to n = 3, IR), Brackett (to n = 4, IR), Pfund (to n = 5, far IR, the longest wavelengths).",
              "The spectrometer gives a pure spectrum: emission spectra are bright lines; absorption spectra are dark lines at the same wavelengths (Fraunhofer lines in sunlight). Spectra can be continuous or line spectra.",
              "X-rays (Röntgen): short-wavelength EM waves made in a Coolidge tube. The continuous part comes from electrons braking in the target; the characteristic lines come from inner-shell transitions, depend on the target element only, and " + eq("λ = hc / ΔE") + ". Used for crystal diffraction, flaw detection and medical imaging."],
            ar: ["نموذج بور: تتحرك الإلكترونات في مستويات طاقة ثابتة دون أن تشع. في ذرة الهيدروجين " + eq("E_n = −13.6 / n² eV") + " (١ إلكترون فولت = ١٫٦ × ١٠⁻١٩ جول): E₁ = −١٣٫٦ و E₂ = −٣٫٣٩ و E₃ = −١٫٥١ و E₄ = −٠٫٨٥ إلكترون فولت.",
              "عندما ينتقل إلكترون من مستوى أعلى إلى أدنى يشع فوتونًا واحدًا: " + eq("hν = E₂ − E₁") + " و" + eq("λ = hc / ΔE") + ". من n = ٣ إلى n = ٢: ΔE = ١٫٨٩ إلكترون فولت و λ ≈ ٦٥٦ نانومتر، الخط الأحمر.",
              "متسلسلات الهيدروجين: ليمان (إلى n = ١، فوق بنفسجية)، بالمر (إلى n = ٢، مرئية)، باشن (إلى n = ٣، تحت حمراء)، براكت (إلى n = ٤، تحت حمراء)، فوند (إلى n = ٥، تحت حمراء بعيدة وأطول الأطوال الموجية).",
              "المطياف يعطي طيفًا نقيًا: طيف الانبعاث خطوط مضيئة، وطيف الامتصاص خطوط مظلمة عند نفس الأطوال الموجية (خطوط فراونهوفر في ضوء الشمس)، والطيف إما مستمر أو خطي.",
              "الأشعة السينية (رونتجن): موجات كهرومغناطيسية قصيرة الطول الموجي تُنتج في أنبوبة كولدج؛ الطيف المستمر ينتج من تباطؤ الإلكترونات في الهدف، والطيف الخطي المميز من انتقالات المستويات الداخلية ويتوقف على عنصر الهدف فقط، و" + eq("λ = hc / ΔE") + ". وتُستخدم في حيود البلورات وكشف عيوب المعادن والتصوير الطبي."]
          },
          story: {
            en: ["Farida walks down Talaat Harb Street at night. The old neon signs glow red, sodium street lamps glow yellow.",
              "Each gas has its own fingerprint: electrons fall between fixed energy levels, so only certain photon energies, and colours, come out.",
              "Through a cheap spectroscope from her school club she sees not a rainbow but a few bright lines. In hydrogen, the red line is an electron dropping from n = 3 to n = 2.",
              "At the clinic, her brother's wrist X-ray uses a Coolidge tube: fast electrons slam into tungsten and the energy comes out as X-ray photons that pass through skin but not bone.",
              "Light from atoms tells their story, line by line."],
            ar: ["تمشي فريدة في شارع طلعت حرب ليلًا؛ لافتات النيون القديمة تتوهج بالأحمر ومصابيح الصوديوم في الشارع بالأصفر.",
              "لكل غاز بصمته: الإلكترونات تهبط بين مستويات طاقة محددة، فتخرج طاقات فوتونات وألوان معينة فقط.",
              "من خلال مطياف بسيط من نادي مدرستها لا ترى قوس قزح بل خطوطًا مضيئة قليلة؛ وفي الهيدروجين الخط الأحمر هو إلكترون يهبط من n = ٣ إلى n = ٢.",
              "وفي العيادة استُخدمت أنبوبة كولدج لتصوير رسغ أخيها بالأشعة السينية: إلكترونات سريعة تصطدم بالتنجستن فتخرج طاقتها فوتونات سينية تخترق الجلد ولا تخترق العظم.",
              "ضوء الذرات يحكي قصتها خطًا خطًا."]
          }
        },
        words: [
          ["Energy level", "مستوى الطاقة", "A shell of fixed energy in which an electron moves without radiating.", "مستوى له طاقة محددة يتحرك فيه الإلكترون دون أن يشع."],
          ["Electron volt (eV)", "الإلكترون فولت", "The energy gained by an electron through 1 V: 1 eV = 1.6 × 10⁻¹⁹ J.", "الطاقة التي يكتسبها إلكترون عند تعجيله بفرق جهد ١ فولت: ١ إلكترون فولت = ١٫٦ × ١٠⁻¹٩ جول."],
          ["Line spectrum", "الطيف الخطي", "A spectrum of specific separate wavelengths, characteristic of the element.", "طيف من أطوال موجية محددة منفصلة يميز العنصر."],
          ["Absorption spectrum", "طيف الامتصاص", "Dark lines in a continuous spectrum where a gas absorbs the same wavelengths it emits (e.g. Fraunhofer lines).", "خطوط مظلمة في طيف مستمر عند الأطوال الموجية التي يمتصها الغاز وهي نفس ما يشعه (مثل خطوط فراونهوفر)."],
          ["Spectrometer", "المطياف", "A device (collimator, prism, telescope) that separates light into a pure spectrum.", "جهاز (مصدر شعاع ومنشور ومنظار) يحلل الضوء إلى طيف نقي."],
          ["X-rays", "الأشعة السينية", "Invisible short-wavelength EM radiation that penetrates matter, ionizes gases and diffracts in crystals.", "إشعاع كهرومغناطيسي غير مرئي قصير الطول الموجي ينفذ في المواد ويؤين الغازات ويحيد في البلورات."],
          ["Characteristic X-rays", "الأشعة السينية المميزة", "Line X-rays from inner-shell transitions; their wavelength depends on the target element.", "خطوط أشعة سينية من انتقالات المستويات الداخلية، ويتوقف طولها الموجي على عنصر الهدف."]
        ],
        lab: { parts: [{ type: "sec3phy_bohr" }] },
        quiz: [
          q(["Using E_n = −13.6/n² eV, the photon emitted when hydrogen's electron drops from n = 3 to n = 2 has wavelength about…", "باستخدام E_n = −١٣٫٦/n² إلكترون فولت، الطول الموجي للفوتون المنبعث عند انتقال إلكترون الهيدروجين من n = ٣ إلى n = ٢ تقريبًا…"],
            [["657 nm (red)", "٦٥٧ نانومتر (أحمر)"], ["486 nm (blue)", "٤٨٦ نانومتر (أزرق)"], ["122 nm (UV)", "١٢٢ نانومتر (فوق بنفسجي)"], ["1879 nm (IR)", "١٨٧٩ نانومتر (تحت أحمر)"]],
            ["ΔE = 13.6(1/4 − 1/9) = 1.89 eV; λ = hc/ΔE = 1.24 × 10⁻⁶/1.89 ≈ 6.57 × 10⁻⁷ m (the book's table lists 656.3 nm).", "ΔE = ١٣٫٦ (١/٤ − ١/٩) = ١٫٨٩ إلكترون فولت؛ λ = hc/ΔE ≈ ٦٫٥٧ × ١٠⁻٧ م (جدول الكتاب ٦٥٦٫٣ نانومتر)."], ["A small drop gives a small photon: red light.", "هبوط صغير يعطي فوتونًا صغيرًا: ضوء أحمر."]),
          q(["The energy of the fourth level (n = 4) of hydrogen is…", "طاقة المستوى الرابع (n = ٤) لذرة الهيدروجين…"],
            [["−0.85 eV", "−٠٫٨٥ إلكترون فولت"], ["−3.4 eV", "−٣٫٤ إلكترون فولت"], ["−54.4 eV", "−٥٤٫٤ إلكترون فولت"], ["+0.85 eV", "+٠٫٨٥ إلكترون فولت"]],
            ["E₄ = −13.6/4² = −0.85 eV. Dividing by n instead of n² gives −3.4.", "E₄ = −١٣٫٦ ÷ ٤² = −٠٫٨٥ إلكترون فولت، والقسمة على n بدل n² تعطي −٣٫٤."], ["Higher levels are less negative, closer to freedom (0 eV).", "المستويات الأعلى أقل سالبية وأقرب إلى التحرر (صفر)."]),
          q(["The energy needed to ionize a hydrogen atom from its ground state, in joules, is…", "الطاقة اللازمة لتأين ذرة هيدروجين من المستوى الأرضي بالجول…"],
            [["2.18 × 10⁻¹⁸ J", "٢٫١٨ × ١٠⁻١٨ جول"], ["13.6 J", "١٣٫٦ جول"], ["2.18 × 10⁻¹⁹ J", "٢٫١٨ × ١٠⁻١٩ جول"], ["8.5 × 10⁻²⁰ J", "٨٫٥ × ١٠⁻٢٠ جول"]],
            ["From −13.6 eV to 0: 13.6 × 1.6 × 10⁻¹⁹ = 2.18 × 10⁻¹⁸ J.", "من −١٣٫٦ إلى صفر: ١٣٫٦ × ١٫٦ × ١٠⁻¹٩ = ٢٫١٨ × ١٠⁻¹٨ جول."], ["Lift the electron all the way out of the well.", "ارفع الإلكترون حتى يخرج من البئر تمامًا."]),
          q(["Which hydrogen series lies in the ultraviolet region?", "أي متسلسلات الهيدروجين تقع في منطقة الأشعة فوق البنفسجية؟"],
            [["Lyman (to n = 1)", "ليمان (إلى n = ١)"], ["Balmer (to n = 2)", "بالمر (إلى n = ٢)"], ["Paschen (to n = 3)", "باشن (إلى n = ٣)"], ["Pfund (to n = 5)", "فوند (إلى n = ٥)"]],
            ["Drops to n = 1 are the largest energy jumps, so the shortest wavelengths (UV).", "الهبوط إلى n = ١ هو أكبر قفزة طاقة فيعطي أقصر أطوال موجية (فوق بنفسجية)."], ["The deepest fall to the ground floor releases the most energetic photons.", "أعمق سقوط إلى الدور الأرضي يطلق أقوى الفوتونات."]),
          q(["Fraunhofer lines in the solar spectrum are an example of…", "خطوط فراونهوفر في طيف الشمس مثال على…"],
            [["an absorption spectrum", "طيف الامتصاص"], ["an emission spectrum", "طيف الانبعاث"], ["a continuous spectrum", "طيف مستمر"], ["characteristic X-rays", "أشعة سينية مميزة"]],
            ["Gases in the Sun's atmosphere absorb the same wavelengths they would emit, leaving dark lines.", "غازات جو الشمس تمتص نفس الأطوال الموجية التي تشعها فتظهر خطوط مظلمة."], ["Missing colours are the fingerprints of the absorbing gas.", "الألوان الناقصة هي بصمات الغاز الماص."]),
          q(["Electrons accelerated through 50 kV hit a target. If one electron gives all its energy to one photon, the photon's wavelength is about…", "إلكترونات معجلة بفرق جهد ٥٠ كيلوفولت تصطدم بهدف. إذا أعطى إلكترون طاقته كلها لفوتون واحد فإن طوله الموجي تقريبًا…"],
            [["0.025 nm", "٠٫٠٢٥ نانومتر"], ["25 nm", "٢٥ نانومتر"], ["0.25 nm", "٠٫٢٥ نانومتر"], ["2.5 nm", "٢٫٥ نانومتر"]],
            ["λ = hc/(eV) = 6.625 × 10⁻³⁴ × 3 × 10⁸/(1.6 × 10⁻¹⁹ × 5 × 10⁴) = 2.48 × 10⁻¹¹ m ≈ 0.025 nm.", "λ = hc/(eV) = ٦٫٦٢٥ × ١٠⁻³⁴ × ٣ × ١٠⁸ ÷ (١٫٦ × ١٠⁻١٩ × ٥ × ١٠⁴) = ٢٫٤٨ × ١٠⁻¹¹ م ≈ ٠٫٠٢٥ نانومتر."], ["50 keV photons are X-rays, far shorter than light.", "فوتونات ٥٠ كيلو إلكترون فولت أشعة سينية أقصر بكثير من الضوء."]),
          q(["The wavelength of characteristic X-rays depends on…", "يتوقف الطول الموجي للأشعة السينية المميزة على…"],
            [["the element of the target", "عنصر مادة الهدف"], ["the voltage of the tube only", "فرق جهد الأنبوبة فقط"], ["the filament current", "تيار الفتيل"], ["the size of the tube", "حجم الأنبوبة"]],
            ["They come from transitions between inner levels of the target atoms; higher atomic number gives shorter λ.", "تنتج من انتقالات بين المستويات الداخلية لذرات الهدف، وكلما زاد العدد الذري قصر الطول الموجي."], ["Every metal sings its own X-ray note.", "كل فلز يغني نغمته السينية الخاصة."])
        ]
      },
      /* ---------- Ch7 ---------- */
      {
        id: "sec3phyu2l4", icon: "🔴", page: 154,
        title: { en: "Ch 7: The Laser", ar: "ف٧: الليزر" },
        idea: {
          official: {
            en: ["LASER = Light Amplification by Stimulated Emission of Radiation (Maiman, ruby laser, 1960). In spontaneous emission an excited atom drops after its lifetime (~10⁻⁸ s) and emits a photon in a random phase and direction.",
              "Stimulated emission (Einstein 1917): a photon of energy " + eq("hν = E₂ − E₁") + " passing an excited atom before its lifetime ends makes it emit a second photon with the SAME frequency, phase and direction.",
              "Laser properties: monochromatic (one narrow line), collimated (parallel beam), coherent (same phase), and concentrated (not subject to the inverse square law). A beam sent to the Moon (380 000 km) returns after " + eq("t = 2d/c ≈ 2.5 s") + ".",
              "Laser action needs population inversion (more atoms in an excited, usually metastable, level than below), a pump (electrical, optical, thermal or chemical) and a resonant cavity of two mirrors, one semi-transparent, that multiplies the photons.",
              "He-Ne laser: He:Ne = 10:1 at about 0.6 mmHg; an electric discharge excites He, which excites Ne by collision into a metastable level; the red line is 632.8 nm. Uses: holography, retina surgery, fibre communications, industry, CDs, printers, surveying."],
            ar: ["الليزر = تضخيم الضوء بالانبعاث المستحث للإشعاع (مايمان، ليزر الياقوت ١٩٦٠). في الانبعاث التلقائي تهبط الذرة المثارة بعد فترة عمرها (حوالي ١٠⁻⁸ ث) وتشع فوتونًا بطور واتجاه عشوائيين.",
              "الانبعاث المستحث (أينشتاين ١٩١٧): فوتون طاقته " + eq("hν = E₂ − E₁") + " يمر بذرة مثارة قبل انتهاء فترة عمرها فيجعلها تشع فوتونًا ثانيًا له نفس التردد والطور والاتجاه.",
              "خواص الليزر: أحادية الطول الموجي، والتوازي، والترابط (نفس الطور)، والشدة العالية (لا يخضع لقانون التربيع العكسي). شعاع يُرسل إلى القمر (٣٨٠٠٠٠ كم) يعود بعد " + eq("t = 2d/c ≈ 2.5 s") + ".",
              "يحتاج فعل الليزر إلى الإسكان المعكوس (عدد الذرات في مستوى مثار، غالبًا شبه مستقر، أكبر من المستوى الأدنى)، ومصدر طاقة للضخ (كهربي أو ضوئي أو حراري أو كيميائي)، وتجويف رنيني من مرآتين إحداهما نصف شفافة يضاعف الفوتونات.",
              "ليزر الهيليوم-نيون: He:Ne = ١٠:١ تحت ضغط حوالي ٠٫٦ مم زئبق؛ التفريغ الكهربي يثير الهيليوم فيثير النيون بالتصادم إلى مستوى شبه مستقر، والخط الأحمر ٦٣٢٫٨ نانومتر. وتطبيقاته: الهولوجرام وجراحات الشبكية والاتصالات بالألياف الضوئية والصناعة والأقراص المدمجة والطابعات والمساحة."]
          },
          story: {
            en: ["Habiba's mother had laser surgery for her eyes at a hospital in Cairo; it took seconds, not hours.",
              "Habiba wonders why a laser pointer from a stall in Ataba makes a tiny dot across the whole Nile while a torch spreads into a wide blur.",
              "In a torch, atoms emit whenever they like, in any direction: a crowd shouting randomly. In a laser, each photon makes an excited atom copy it exactly: a stadium singing the national anthem together.",
              "Between two mirrors the copies multiply back and forth, and a little escapes through the semi-transparent mirror as one tight, coherent beam.",
              "That is why the beam stays narrow, one colour, and powerful enough to weld a retina."],
            ar: ["أجرت والدة حبيبة جراحة ليزر لعينيها في مستشفى بالقاهرة، واستغرقت ثواني لا ساعات.",
              "تتساءل حبيبة: لماذا يصنع قلم ليزر من فرشة في العتبة نقطة صغيرة عبر النيل كله، بينما يتشتت ضوء الكشاف في بقعة واسعة؟",
              "في الكشاف تشع الذرات متى شاءت وفي أي اتجاه، كجمهور يصيح بشكل عشوائي؛ وفي الليزر كل فوتون يجعل ذرة مثارة تنسخه تمامًا، كاستاد يغني النشيد الوطني معًا.",
              "بين مرآتين تتضاعف النسخ ذهابًا وإيابًا، ويخرج جزء منها عبر المرآة نصف الشفافة شعاعًا واحدًا ضيقًا مترابطًا.",
              "لهذا يبقى الشعاع ضيقًا بلون واحد وقويًا بما يكفي للحام الشبكية."]
          }
        },
        words: [
          ["Spontaneous emission", "الانبعاث التلقائي", "An excited atom drops after its lifetime without an external photon; random phase and direction.", "هبوط الذرة المثارة بعد انتهاء فترة عمرها دون فوتون خارجي، بطور واتجاه عشوائيين."],
          ["Stimulated emission", "الانبعاث المستحث", "An external photon makes an excited atom emit an identical photon (same frequency, phase, direction) before its lifetime ends.", "فوتون خارجي يجعل الذرة المثارة تشع فوتونًا مماثلًا (نفس التردد والطور والاتجاه) قبل انتهاء فترة عمرها."],
          ["Population inversion", "الإسكان المعكوس", "More atoms in the upper (excited) level than in the lower level.", "عدد الذرات في المستوى الأعلى (المثار) أكبر من عددها في المستوى الأدنى."],
          ["Metastable level", "المستوى شبه المستقر", "An excited level with a relatively long lifetime where atoms accumulate.", "مستوى مثار فترة عمره طويلة نسبيًا تتجمع فيه الذرات."],
          ["Active medium", "الوسط الفعال", "The material whose atoms produce the laser light (ruby, He-Ne gas, CO₂, dye, semiconductor).", "المادة التي تنتج ذراتها ضوء الليزر (الياقوت، غاز He-Ne، CO₂، صبغة، شبه موصل)."],
          ["Resonant cavity", "التجويف الرنيني", "Two parallel mirrors (one semi-transparent) that reflect photons back and forth to amplify them.", "مرآتان متوازيتان (إحداهما نصف شفافة) تعكسان الفوتونات ذهابًا وإيابًا لتضخيمها."],
          ["Coherence", "الترابط", "The photons keep the same phase in time and place.", "احتفاظ الفوتونات بنفس الطور زمانًا ومكانًا."]
        ],
        lab: { parts: [{ type: "sec3phy_laser" }, {
          type: "sort",
          prompt: ["Tap a property, then tap the kind of emission.", "اضغط على صفة، ثم اضغط على نوع الانبعاث."],
          bins: [["s", "💡", "Spontaneous", "تلقائي"], ["t", "🔴", "Stimulated", "مستحث"]],
          items: [[["After the lifetime is over", "بعد انتهاء فترة العمر"], "s"], [["Random phase and direction", "طور واتجاه عشوائيان"], "s"], [["Wide range of wavelengths", "مدى واسع من الأطوال الموجية"], "s"], [["Follows the inverse square law", "يخضع لقانون التربيع العكسي"], "s"],
            [["Needs an external photon", "يحتاج فوتونًا خارجيًا"], "t"], [["Coherent photons", "فوتونات مترابطة"], "t"], [["Monochromatic", "أحادي الطول الموجي"], "t"], [["Dominant in lasers", "السائد في الليزر"], "t"]]
        }] },
        quiz: [
          q(["In stimulated emission, the emitted photon and the incident photon have…", "في الانبعاث المستحث يكون للفوتون المنبعث والفوتون الساقط…"],
            [["the same frequency, phase and direction", "نفس التردد والطور والاتجاه"], ["the same frequency but random direction", "نفس التردد واتجاه عشوائي"], ["different frequencies", "ترددات مختلفة"], ["opposite directions", "اتجاهان متضادان"]],
            ["The stimulated photon is an exact copy, which makes laser light coherent.", "الفوتون المستحث نسخة طبق الأصل، وهذا يجعل ضوء الليزر مترابطًا."], ["A perfect photocopy of the first photon.", "صورة ضوئية مطابقة للفوتون الأول."]),
          q(["Population inversion means…", "الإسكان المعكوس يعني…"],
            [["more atoms in the excited level than in the lower level", "عدد الذرات في المستوى المثار أكبر من المستوى الأدنى"], ["all atoms in the ground state", "كل الذرات في المستوى الأرضي"], ["the atoms are ionized", "الذرات متأينة"], ["the mirrors are reversed", "المرآتان معكوستان"]],
            ["Only then does stimulated emission beat absorption and the light is amplified.", "عندها فقط يتفوق الانبعاث المستحث على الامتصاص فيتضخم الضوء."], ["More people ready to sing than people who only listen.", "عدد المستعدين للغناء أكبر من المستمعين فقط."]),
          q(["The role of the metastable level in a laser is…", "دور المستوى شبه المستقر في الليزر…"],
            [["atoms stay there long enough to build a population inversion", "تبقى فيه الذرات فترة كافية لتكوين الإسكان المعكوس"], ["to absorb the laser beam", "امتصاص شعاع الليزر"], ["to cool the tube", "تبريد الأنبوبة"], ["to reflect photons", "عكس الفوتونات"]],
            ["Its long lifetime lets excited atoms accumulate until they are stimulated.", "فترة عمره الطويلة تسمح للذرات المثارة بالتراكم حتى تُستحث."], ["A waiting room where atoms queue for their turn.", "غرفة انتظار تصطف فيها الذرات حتى يأتي دورها."]),
          q(["In the He-Ne laser, the ratio of helium to neon atoms is…", "في ليزر الهيليوم-نيون، نسبة ذرات الهيليوم إلى النيون…"],
            [["10 : 1", "١٠ : ١"], ["1 : 10", "١ : ١٠"], ["1 : 1", "١ : ١"], ["100 : 1", "١٠٠ : ١"]],
            ["He is excited by the discharge and passes its energy to Ne by collisions, so many He atoms are needed.", "يُثار الهيليوم بالتفريغ وينقل طاقته إلى النيون بالتصادم، لذا يلزم عدد كبير من ذراته."], ["Ten helpers for every singer.", "عشرة مساعدين لكل مغنٍ."]),
          q(["A laser pulse is reflected from a mirror on the Moon, 3.8 × 10⁸ m away. It returns after about…", "نبضة ليزر تنعكس عن مرآة على سطح القمر على بعد ٣٫٨ × ١٠⁸ م. تعود بعد حوالي…"],
            [["2.5 s", "٢٫٥ ث"], ["1.3 s", "١٫٣ ث"], ["0.8 s", "٠٫٨ ث"], ["8 min", "٨ دقائق"]],
            ["t = 2d/c = 2 × 3.8 × 10⁸/3 × 10⁸ = 2.53 s; the beam barely spreads, so it can be detected.", "t = 2d/c = ٢ × ٣٫٨ × ١٠⁸ ÷ ٣ × ١٠⁸ = ٢٫٥٣ ث، والشعاع لا يكاد يتشتت فيمكن رصده."], ["There and back, so double the distance.", "ذهاب وعودة، فنضاعف المسافة."]),
          q(["The He-Ne red line has λ = 632.8 nm. Its photon energy is about…", "الخط الأحمر لليزر الهيليوم-نيون λ = ٦٣٢٫٨ نانومتر. طاقة فوتونه تقريبًا…"],
            [["1.96 eV", "١٫٩٦ إلكترون فولت"], ["3.14 × 10⁻¹⁹ eV", "٣٫١٤ × ١٠⁻١٩ إلكترون فولت"], ["0.51 eV", "٠٫٥١ إلكترون فولت"], ["632.8 eV", "٦٣٢٫٨ إلكترون فولت"]],
            ["E = hc/λ = 3.14 × 10⁻¹⁹ J ÷ 1.6 × 10⁻¹⁹ = 1.96 eV.", "E = hc/λ = ٣٫١٤ × ١٠⁻١٩ جول ÷ ١٫٦ × ١٠⁻١٩ = ١٫٩٦ إلكترون فولت."], ["Red photons carry about 2 eV each.", "فوتونات الأحمر تحمل حوالي ٢ إلكترون فولت."]),
          q(["Holography needs laser light because…", "يحتاج التصوير المجسم (الهولوجرام) إلى ضوء الليزر لأن…"],
            [["it is coherent, so the reference and object beams interfere and record phase", "مترابط فيتداخل الشعاع المرجعي مع شعاع الجسم ويُسجل فرق الطور"], ["it is very hot", "شديد السخونة"], ["it has many colours", "متعدد الألوان"], ["it obeys the inverse square law", "يخضع لقانون التربيع العكسي"]],
            ["A normal photo records only intensity; the hologram also records path (phase) differences through interference.", "الصورة العادية تسجل الشدة فقط، أما الهولوجرام فيسجل فروق المسار (الطور) أيضًا بالتداخل."], ["Phase holds the depth information, and only coherent light keeps it.", "الطور يحمل معلومات العمق، والضوء المترابط فقط يحفظه."])
        ]
      },
      /* ---------- Ch8 a ---------- */
      {
        id: "sec3phyu2l5", icon: "🔲", page: 177,
        title: { en: "Ch 8: Semiconductors and the pn Junction", ar: "ف٨: أشباه الموصلات والوصلة الثنائية pn" },
        idea: {
          official: {
            en: ["Pure silicon: each atom shares its 4 valence electrons in covalent bonds. At absolute zero it is an insulator; heating breaks some bonds, making free electrons and an equal number of holes (positive vacancies). At each temperature a thermal equilibrium keeps their number constant.",
              "n-type: a pentavalent donor (P, Sb) gives an extra free electron: " + eq("n = p + N_D") + ", n ≈ N_D. p-type: a trivalent acceptor (B, Al) takes an electron, making a hole: " + eq("p = n + N_A") + ", p ≈ N_A.",
              "Law of mass action: " + eq("n p = n_i²") + ". Example: n_i = 1.5 × 10¹⁶ m⁻³ and N_D = 10²² m⁻³ give p = (1.5 × 10¹⁶)²/10²² = 2.25 × 10¹⁰ m⁻³.",
              "pn junction: electrons diffuse from n to p and holes from p to n, leaving a depletion (transition) region of fixed ions with an internal field opposing further diffusion.",
              "Forward bias (p to +): the field is weakened and current flows, like a closed switch. Reverse bias: the depletion region widens and almost no current flows, like an open switch. Used for rectification; reverse-biased diodes act as variable capacitors for electronic tuning."],
            ar: ["السيليكون النقي: كل ذرة تشارك بإلكتروناتها الأربعة في روابط تساهمية؛ عند الصفر المطلق يكون عازلًا، وبالتسخين تنكسر بعض الروابط فتظهر إلكترونات حرة وعدد مساوٍ من الفجوات (أماكن شاغرة موجبة)، وعند كل درجة حرارة يحفظ الاتزان الحراري عددها ثابتًا.",
              "النوع السالب n: شائبة خماسية مانحة (فوسفور، أنتيمون) تعطي إلكترونًا حرًا زائدًا: " + eq("n = p + N_D") + " و n ≈ N_D. والنوع الموجب p: شائبة ثلاثية مستقبلة (بورون، ألومنيوم) تأخذ إلكترونًا فتتكون فجوة: " + eq("p = n + N_A") + " و p ≈ N_A.",
              "قانون فعل الكتلة: " + eq("n p = n_i²") + ". مثال: n_i = ١٫٥ × ١٠¹⁶ م⁻³ و N_D = ١٠²² م⁻³ تعطي p = (١٫٥ × ١٠¹⁶)² ÷ ١٠²² = ٢٫٢٥ × ١٠¹⁰ م⁻³.",
              "الوصلة الثنائية pn: تنتشر الإلكترونات من n إلى p والفجوات من p إلى n، فتتكون منطقة انتقالية (استنزاف) من أيونات ثابتة بها مجال داخلي يقاوم استمرار الانتشار.",
              "الانحياز الأمامي (p بالموجب): يضعف المجال ويمر التيار كمفتاح مغلق. الانحياز العكسي: تتسع المنطقة الانتقالية ولا يكاد يمر تيار كمفتاح مفتوح. وتُستخدم الوصلة في التقويم، والوصلة المنحازة عكسيًا تعمل كمكثف متغير في التوليف الإلكتروني."]
          },
          story: {
            en: ["Mostafa's phone charger says 'Input: AC, Output: 5 V DC'. He opens a broken one at his uncle's shop in El-Mosky.",
              "Inside are tiny black diodes made of silicon. Pure silicon barely conducts, but adding a pinch of phosphorus or boron changes everything.",
              "A pn junction lets current pass only one way: forward bias opens the door, reverse bias slams it shut. Four diodes turn the swinging AC into one-way current.",
              "Mostafa compares the depletion region to the empty no-man's land between two rival football crowds after they have mixed at the border.",
              "Push from the right side and the gap shrinks; push from the wrong side and it widens."],
            ar: ["مكتوب على شاحن هاتف مصطفى: الدخل متردد، والخرج ٥ فولت مستمر. فتح شاحنًا تالفًا في محل خاله بالموسكي.",
              "وجد بداخله ثنائيات سوداء صغيرة من السيليكون؛ السيليكون النقي لا يكاد يوصل، لكن إضافة قليل من الفوسفور أو البورون تغير كل شيء.",
              "الوصلة pn تسمح بمرور التيار في اتجاه واحد فقط: الانحياز الأمامي يفتح الباب والعكسي يغلقه بقوة، وأربعة ثنائيات تحول التيار المتردد إلى تيار في اتجاه واحد.",
              "شبّه مصطفى المنطقة الانتقالية بالمنطقة الفارغة بين جمهوري فريقين متنافسين بعد اختلاطهما عند الحدود.",
              "ادفع من الجهة الصحيحة تضيق الفجوة، وادفع من الجهة الخاطئة تتسع."]
          }
        },
        words: [
          ["Semiconductor", "شبه الموصل", "A material whose conductivity is between conductors and insulators and increases with temperature (e.g. silicon).", "مادة توصيلها بين الموصلات والعوازل ويزداد بارتفاع درجة الحرارة (مثل السيليكون)."],
          ["Hole", "الفجوة", "The vacancy left in a broken covalent bond; it behaves as a positive charge carrier.", "المكان الشاغر في رابطة تساهمية مكسورة، ويسلك كحامل شحنة موجب."],
          ["Doping", "التطعيم (الإشابة)", "Adding a small amount of impurity to a pure semiconductor to raise its electrons or holes.", "إضافة كمية صغيرة من شوائب إلى شبه موصل نقي لزيادة الإلكترونات أو الفجوات."],
          ["Donor (n-type)", "الشائبة المانحة (النوع السالب)", "A pentavalent atom (P, Sb) that gives an extra free electron; n > p.", "ذرة خماسية (فوسفور، أنتيمون) تعطي إلكترونًا حرًا زائدًا؛ n > p."],
          ["Acceptor (p-type)", "الشائبة المستقبلة (النوع الموجب)", "A trivalent atom (B, Al) that takes an electron and creates a hole; p > n.", "ذرة ثلاثية (بورون، ألومنيوم) تأخذ إلكترونًا فتتكون فجوة؛ p > n."],
          ["Depletion (transition) region", "المنطقة الانتقالية", "The region at a pn junction containing only fixed ions, with no free electrons or holes.", "منطقة عند الوصلة pn تحتوي على أيونات ثابتة فقط دون إلكترونات حرة أو فجوات."],
          ["Forward / reverse bias", "الانحياز الأمامي / العكسي", "p to + conducts (closed switch); p to − blocks (open switch).", "توصيل p بالموجب يمرر التيار (مفتاح مغلق)، وتوصيلها بالسالب يمنعه (مفتاح مفتوح)."]
        ],
        lab: { parts: [{ type: "sec3phy_semi" }] },
        quiz: [
          q(["Silicon (n_i = 1.5 × 10¹⁶ m⁻³) is doped with 10²² donors/m³. The hole concentration is…", "سيليكون (n_i = ١٫٥ × ١٠¹⁶ م⁻³) طُعّم بعدد ١٠²² ذرة مانحة/م³. تركيز الفجوات…"],
            [["2.25 × 10¹⁰ m⁻³", "٢٫٢٥ × ١٠¹⁰ م⁻³"], ["10²² m⁻³", "١٠²² م⁻³"], ["1.5 × 10¹⁶ m⁻³", "١٫٥ × ١٠¹⁶ م⁻³"], ["2.25 × 10³² m⁻³", "٢٫٢٥ × ١٠³² م⁻³"]],
            ["n ≈ N_D = 10²², so p = n_i²/N_D = (1.5 × 10¹⁶)²/10²² = 2.25 × 10¹⁰ m⁻³.", "n ≈ N_D = ١٠²²، إذن p = n_i²/N_D = (١٫٥ × ١٠¹⁶)² ÷ ١٠²² = ٢٫٢٥ × ١٠¹⁰ م⁻³."], ["Flood the crystal with electrons and they fill most of the holes.", "إغراق البلورة بالإلكترونات يملأ معظم الفجوات."]),
          q(["Silicon doped with 10²¹ acceptors/m³ (n_i = 1.5 × 10¹⁶ m⁻³). The free-electron concentration is…", "سيليكون مطعّم بعدد ١٠²¹ ذرة مستقبلة/م³ (n_i = ١٫٥ × ١٠¹⁶ م⁻³). تركيز الإلكترونات الحرة…"],
            [["2.25 × 10¹¹ m⁻³", "٢٫٢٥ × ١٠¹¹ م⁻³"], ["10²¹ m⁻³", "١٠²¹ م⁻³"], ["2.25 × 10¹⁰ m⁻³", "٢٫٢٥ × ١٠¹⁰ م⁻³"], ["1.5 × 10⁵ m⁻³", "١٫٥ × ١٠⁵ م⁻³"]],
            ["p ≈ N_A = 10²¹; n = n_i²/N_A = 2.25 × 10³²/10²¹ = 2.25 × 10¹¹ m⁻³.", "p ≈ N_A = ١٠²¹؛ n = n_i²/N_A = ٢٫٢٥ × ١٠³² ÷ ١٠²¹ = ٢٫٢٥ × ١٠¹¹ م⁻³."], ["np stays equal to n_i² whatever the doping.", "حاصل np يبقى مساويًا n_i² مهما كان التطعيم."]),
          q(["Adding phosphorus (pentavalent) to pure silicon makes it…", "إضافة الفوسفور (خماسي) إلى السيليكون النقي تجعله…"],
            [["n-type, phosphorus is a donor", "من النوع السالب n والفوسفور مانح"], ["p-type, phosphorus is an acceptor", "من النوع الموجب p والفوسفور مستقبل"], ["an insulator", "عازلًا"], ["a metal", "فلزًا"]],
            ["Four electrons bond, the fifth is free; the P atom becomes a positive ion.", "تشارك أربعة إلكترونات في الروابط ويتحرر الخامس، وتصبح ذرة الفوسفور أيونًا موجبًا."], ["Five guests at a table for four: one is free to wander.", "خمسة ضيوف على مائدة لأربعة: واحد حر يتجول."]),
          q(["A pn diode is forward biased when…", "تكون الوصلة الثنائية في حالة انحياز أمامي عندما…"],
            [["the p-side is connected to the positive terminal", "يوصل الطرف p بالقطب الموجب"], ["the p-side is connected to the negative terminal", "يوصل الطرف p بالقطب السالب"], ["both sides are earthed", "يوصل الطرفان بالأرض"], ["no battery is connected", "لا توجد بطارية"]],
            ["The battery field then opposes the internal field and the depletion region narrows, so current flows.", "يعاكس مجال البطارية المجال الداخلي فتضيق المنطقة الانتقالية ويمر التيار."], ["p likes plus.", "p مع الموجب."]),
          q(["The depletion (transition) region of a pn junction contains…", "المنطقة الانتقالية في الوصلة pn تحتوي على…"],
            [["fixed positive and negative ions only", "أيونات موجبة وسالبة ثابتة فقط"], ["free electrons only", "إلكترونات حرة فقط"], ["holes only", "فجوات فقط"], ["many free electrons and holes", "إلكترونات حرة وفجوات كثيرة"]],
            ["Diffusing carriers recombine there, uncovering donor (+) and acceptor (−) ions.", "تتحد الحوامل المنتشرة هناك فتنكشف الأيونات المانحة (+) والمستقبلة (−)."], ["The border strip where the two crowds cancelled each other out.", "الشريط الحدودي الذي ألغى فيه الجمهوران أحدهما الآخر."]),
          q(["In a pure semiconductor, as the temperature rises…", "في شبه الموصل النقي، بارتفاع درجة الحرارة…"],
            [["the numbers of free electrons and holes increase equally", "يزداد عدد الإلكترونات الحرة والفجوات بالتساوي"], ["only free electrons increase", "تزداد الإلكترونات الحرة فقط"], ["the conductivity decreases", "تقل التوصيلية"], ["holes disappear", "تختفي الفجوات"]],
            ["Each broken bond creates one electron-hole pair, so n = p = n_i rises with T.", "كل رابطة مكسورة تعطي زوجًا (إلكترون وفجوة)، فيزداد n = p = n_i بارتفاع الحرارة."], ["Every dancer who leaves a seat leaves an empty chair.", "كل راقص يترك مقعده يترك كرسيًا فارغًا."]),
          q(["To check a diode with an ohmmeter, a good diode shows…", "عند فحص ثنائي بالأوميتر، الثنائي السليم يعطي…"],
            [["low resistance one way and high resistance the other", "مقاومة صغيرة في اتجاه وكبيرة في الاتجاه العكسي"], ["the same low resistance both ways", "مقاومة صغيرة في الاتجاهين"], ["infinite resistance both ways", "مقاومة لا نهائية في الاتجاهين"], ["zero resistance both ways", "مقاومة صفرية في الاتجاهين"]],
            ["Forward: small resistance (conducting); reverse: large resistance (blocking).", "أمامي: مقاومة صغيرة (يوصل)، وعكسي: مقاومة كبيرة (يمنع)."], ["A one-way valve: easy one way, blocked the other.", "صمام اتجاه واحد: سهل في اتجاه ومغلق في الآخر."])
        ]
      },
      /* ---------- Ch8 b ---------- */
      {
        id: "sec3phyu2l6", icon: "💻", page: 189,
        title: { en: "Ch 8: The Transistor and Digital Electronics (Logic Gates)", ar: "ف٨: الترانزستور والإلكترونيات الرقمية (البوابات المنطقية)" },
        idea: {
          official: {
            en: ["The bipolar junction transistor (npn or pnp) has an emitter, a very thin base and a collector. With the emitter-base junction forward biased and the collector-base reverse biased: " + eq("I_E = I_C + I_B") + ".",
              "Current distribution ratio " + eq("α_e = I_C / I_E") + " (close to 1) and current gain " + eq("β_e = I_C / I_B") + " (large); " + eq("β_e = α_e / (1 − α_e)") + ". Example: α_e = 0.98 gives β_e = 0.98/0.02 = 49.",
              "As an amplifier (common emitter), a small change in base current makes a large change in collector current. As a switch, " + eq("V_CC = V_CE + I_C R_C") + ": large V_in gives large I_C and V_CE ≈ 0.2 V (closed switch); small or negative V_in gives I_C ≈ 0 and V_CE ≈ V_CC (open switch). So it is also an inverter.",
              "Digital electronics codes information as 0 or 1 (binary): 3 = 11₂ = 1 × 2¹ + 1 × 2⁰. Because only the state matters, it resists electrical noise, the main advantage over analog electronics. ADC and DAC convert between the two.",
              "Logic gates: NOT (output is the inverse of the input), AND (1 only if all inputs are 1; switches in series), OR (1 if any input is 1; switches in parallel). Transistors build all of them."],
            ar: ["الترانزستور ثنائي الوصلة (npn أو pnp) له باعث وقاعدة رقيقة جدًا ومجمع. عندما تكون وصلة الباعث-القاعدة في انحياز أمامي ووصلة المجمع-القاعدة في انحياز عكسي: " + eq("I_E = I_C + I_B") + ".",
              "معامل التوزيع " + eq("α_e = I_C / I_E") + " (قريب من الواحد) ومعامل التكبير " + eq("β_e = I_C / I_B") + " (كبير)، و" + eq("β_e = α_e / (1 − α_e)") + ". مثال: α_e = ٠٫٩٨ تعطي β_e = ٠٫٩٨ ÷ ٠٫٠٢ = ٤٩.",
              "كمكبر (باعث مشترك): تغير صغير في تيار القاعدة يحدث تغيرًا كبيرًا في تيار المجمع. وكمفتاح: " + eq("V_CC = V_CE + I_C R_C") + "؛ جهد دخل كبير يعطي I_C كبيرًا و V_CE ≈ ٠٫٢ فولت (مفتاح مغلق)، وجهد دخل صغير أو سالب يعطي I_C ≈ صفر و V_CE ≈ V_CC (مفتاح مفتوح)، فهو عاكس أيضًا.",
              "الإلكترونيات الرقمية تُشفّر المعلومات بالرمزين ٠ و١ (النظام الثنائي): ٣ = ١١₂ = ١ × ٢¹ + ١ × ٢⁰. ولأن الحالة فقط هي المهمة فهي تقاوم الضوضاء الكهربية، وهذه أهم ميزة لها على الإلكترونيات التناظرية، ويحول المحولان ADC و DAC بينهما.",
              "البوابات المنطقية: NOT (الخرج عكس الدخل)، و AND (الخرج ١ فقط إذا كانت كل المداخل ١؛ مفتاحان على التوالي)، و OR (الخرج ١ إذا كان أي مدخل ١؛ مفتاحان على التوازي)، وتُبنى كلها بالترانزستورات."]
          },
          story: {
            en: ["Adam's family car will not start unless the seatbelt is fastened AND the brake is pressed. That is an AND gate inside the car's computer.",
              "The cabin light turns on if the driver's door OR the passenger's door is open: an OR gate.",
              "The 'low fuel' lamp is ON when the sensor says NOT full: an inverter.",
              "Each gate is made of transistors acting as tiny switches: a small base current lets a large collector current flow, billions of times a second inside his phone.",
              "Adam realises that his WhatsApp messages travel as 0s and 1s, so a bit of noise on the line does not change what his friends read."],
            ar: ["سيارة عائلة آدم لا تدور إلا إذا رُبط حزام الأمان وضُغطت الفرامل معًا؛ هذه بوابة AND داخل كمبيوتر السيارة.",
              "ويضيء نور الكابينة إذا فُتح باب السائق أو باب الراكب؛ هذه بوابة OR.",
              "ولمبة نقص البنزين تضيء عندما يقول الحساس: ليس ممتلئًا؛ هذا عاكس NOT.",
              "كل بوابة مصنوعة من ترانزستورات تعمل كمفاتيح صغيرة: تيار قاعدة صغير يسمح بمرور تيار مجمع كبير، مليارات المرات كل ثانية داخل هاتفه.",
              "أدرك آدم أن رسائل واتساب تنتقل أصفارًا وآحادًا، فلا تغير الضوضاء البسيطة في الخط ما يقرؤه أصدقاؤه."]
          }
        },
        words: [
          ["Transistor (BJT)", "الترانزستور ثنائي الوصلة", "npn or pnp device with emitter, base and collector; used as an amplifier and a switch.", "نبيطة npn أو pnp لها باعث وقاعدة ومجمع، تُستخدم كمكبر وكمفتاح."],
          ["Current distribution ratio (α_e)", "معامل التوزيع (α_e)", "α_e = I_C / I_E, slightly less than 1.", "α_e = I_C / I_E، أقل قليلًا من الواحد."],
          ["Current gain (β_e)", "معامل التكبير (β_e)", "β_e = I_C / I_B, a large number; β_e = α_e/(1 − α_e).", "β_e = I_C / I_B، عدد كبير؛ β_e = α_e/(1 − α_e)."],
          ["Digital electronics", "الإلكترونيات الرقمية", "Electronics that codes signals as 0 or 1 (binary), so noise does not change the information.", "إلكترونيات تشفر الإشارة بالرمزين ٠ و١ (ثنائي)، فلا تغير الضوضاء المعلومات."],
          ["Logic gate", "البوابة المنطقية", "A digital circuit performing a logic operation (NOT, AND, OR).", "دائرة رقمية تؤدي عملية منطقية (NOT، AND، OR)."],
          ["Truth table", "جدول الحقيقة", "A table listing the output of a gate for every combination of inputs.", "جدول يبين خرج البوابة لكل احتمالات المداخل."]
        ],
        lab: { parts: [{ type: "sec3phy_gates" }] },
        quiz: [
          q(["A transistor has α_e = 0.98. Its current gain β_e is…", "ترانزستور معامل توزيعه α_e = ٠٫٩٨. معامل تكبيره β_e…"],
            [["49", "٤٩"], ["50", "٥٠"], ["0.98", "٠٫٩٨"], ["0.02", "٠٫٠٢"]],
            ["β_e = α_e/(1 − α_e) = 0.98/0.02 = 49.", "β_e = α_e/(1 − α_e) = ٠٫٩٨ ÷ ٠٫٠٢ = ٤٩."], ["98 of every 100 electrons reach the collector, 2 leave by the base: 98/2 = 49.", "٩٨ من كل ١٠٠ إلكترون تصل إلى المجمع و٢ تخرج من القاعدة: ٩٨ ÷ ٢ = ٤٩."]),
          q(["The emitter current is 10 mA and α_e = 0.99. The base current is…", "تيار الباعث ١٠ مللي أمبير و α_e = ٠٫٩٩. تيار القاعدة…"],
            [["0.1 mA", "٠٫١ مللي أمبير"], ["9.9 mA", "٩٫٩ مللي أمبير"], ["10.1 mA", "١٠٫١ مللي أمبير"], ["1 mA", "١ مللي أمبير"]],
            ["I_C = 0.99 × 10 = 9.9 mA; I_B = I_E − I_C = 0.1 mA.", "I_C = ٠٫٩٩ × ١٠ = ٩٫٩ مللي أمبير؛ I_B = I_E − I_C = ٠٫١ مللي أمبير."], ["Almost everything passes through to the collector; a trickle leaves at the base.", "تقريبًا كل شيء يعبر إلى المجمع، وقطرة صغيرة تخرج من القاعدة."]),
          q(["In a switching circuit V_CC = 10 V, R_C = 1 kΩ and I_C = 5 mA. V_CE is…", "في دائرة مفتاح V_CC = ١٠ فولت و R_C = ١ كيلو أوم و I_C = ٥ مللي أمبير. قيمة V_CE…"],
            [["5 V", "٥ فولت"], ["15 V", "١٥ فولت"], ["0.2 V", "٠٫٢ فولت"], ["10 V", "١٠ فولت"]],
            ["V_CE = V_CC − I_C R_C = 10 − 0.005 × 1000 = 5 V.", "V_CE = V_CC − I_C R_C = ١٠ − ٠٫٠٠٥ × ١٠٠٠ = ٥ فولت."], ["Whatever the resistor takes, the transistor gets the rest.", "ما تأخذه المقاومة يبقى الباقي للترانزستور."]),
          q(["When the base input voltage of a common-emitter switch is large, the output V_CE is…", "عندما يكون جهد دخل القاعدة لمفتاح الباعث المشترك كبيرًا، يكون جهد الخرج V_CE…"],
            [["small (about 0.2 V): a closed switch", "صغيرًا (حوالي ٠٫٢ فولت): مفتاح مغلق"], ["large (≈ V_CC): an open switch", "كبيرًا (≈ V_CC): مفتاح مفتوح"], ["zero current", "تيارًا صفريًا"], ["negative", "سالبًا"]],
            ["Large I_C makes a large I_CR_C drop, leaving V_CE small; input high gives output low, an inverter.", "تيار المجمع الكبير يسبب هبوطًا كبيرًا على R_C فيصغر V_CE؛ دخل عالٍ يعطي خرجًا منخفضًا، فهو عاكس."], ["The input says 1, the output says 0.", "الدخل يقول ١ والخرج يقول ٠."]),
          q(["An AND gate gives output 1 when…", "تعطي بوابة AND خرجًا ١ عندما…"],
            [["all inputs are 1", "تكون كل المداخل ١"], ["any input is 1", "يكون أي مدخل ١"], ["all inputs are 0", "تكون كل المداخل ٠"], ["the inputs differ", "تختلف المداخل"]],
            ["AND is like two switches in series: both must be closed.", "AND مثل مفتاحين على التوالي: لا بد من إغلاقهما معًا."], ["Seatbelt AND brake, or the car will not start.", "حزام الأمان وأيضًا الفرامل، وإلا لن تدور السيارة."]),
          q(["The decimal number 13 written in binary is…", "العدد العشري ١٣ بالنظام الثنائي…"],
            [["1101₂", "1101₂"], ["1011₂", "1011₂"], ["1110₂", "1110₂"], ["0111₂", "0111₂"]],
            ["13 = 8 + 4 + 1 = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = 1101₂.", "١٣ = ٨ + ٤ + ١ = ١ × ٢³ + ١ × ٢² + ٠ × ٢¹ + ١ × ٢⁰ = 1101₂."], ["Weights 8, 4, 2, 1: take 8, 4 and 1.", "الأوزان ٨ و٤ و٢ و١: خذ ٨ و٤ و١."]),
          q(["The main advantage of digital over analog electronics is…", "أهم ميزة للإلكترونيات الرقمية على التناظرية…"],
            [["resistance to electrical noise", "مقاومة الضوضاء الكهربية"], ["it needs no transistors", "لا تحتاج ترانزستورات"], ["it uses only AC", "تستخدم التيار المتردد فقط"], ["signals take any value", "الإشارة تأخذ أي قيمة"]],
            ["Information lies in the state 0 or 1, not in the exact value, so added noise does not change it.", "المعلومة في الحالة ٠ أو ١ لا في القيمة الدقيقة، فلا تغيرها الضوضاء المضافة."], ["A hiss on the line cannot turn a clear 1 into a 0.", "الوشيش في الخط لا يحول ١ واضحًا إلى ٠."])
        ]
      }
    ]
  });
})();

/* ---------- Sec 3 Physics: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};

  O.sec3phyu1l1 = { en: ["Find the equivalent resistance in series and in parallel", "Use R = Nr and R = r/N for equal resistors", "Calculate the current and voltage in each resistor", "Relate resistance to ρ, length and area"],
    ar: ["إيجاد المقاومة المكافئة على التوالي والتوازي", "استخدام R = Nr و R = r/N للمقاومات المتساوية", "حساب التيار وفرق الجهد في كل مقاومة", "ربط المقاومة بالمقاومة النوعية والطول والمساحة"] };
  O.sec3phyu1l2 = { en: ["Apply Ohm's law for a closed circuit", "Relate the terminal voltage to the emf: V = V_B − Ir", "State and apply Kirchhoff's first law", "Solve loops with Kirchhoff's second law"],
    ar: ["تطبيق قانون أوم للدائرة المغلقة", "ربط فرق جهد القطبين بالقوة الدافعة: V = V_B − Ir", "استنتاج وتطبيق قانون كيرتشوف الأول", "حل المسارات المغلقة بقانون كيرتشوف الثاني"] };
  O.sec3phyu1l3 = { en: ["Describe the field around a straight wire", "Calculate B for a wire, a loop and a solenoid", "Use Ampere's right-hand rule and the right-hand screw rule", "Find the polarity of a loop and a solenoid"],
    ar: ["وصف المجال حول سلك مستقيم", "حساب B لسلك وملف دائري وملف حلزوني", "استخدام قاعدة أمبير لليد اليمنى وقاعدة البريمة", "تحديد قطبية الملف الدائري والحلزوني"] };
  O.sec3phyu1l4 = { en: ["Calculate F = BIℓ sinθ", "Use Fleming's left-hand rule", "Explain forces between parallel currents", "Calculate the torque and dipole moment of a coil"],
    ar: ["حساب F = BIℓ sinθ", "استخدام قاعدة فلمنج لليد اليسرى", "تفسير القوة بين تيارين متوازيين", "حساب عزم الازدواج وعزم ثنائي القطب لملف"] };
  O.sec3phyu1l5 = { en: ["Explain how a moving-coil galvanometer works", "Convert a galvanometer to an ammeter with a shunt", "Convert a galvanometer to a voltmeter with a multiplier", "Read and explain the ohmmeter scale"],
    ar: ["تفسير عمل الجلفانومتر ذي الملف المتحرك", "تحويل الجلفانومتر إلى أميتر بمجزئ تيار", "تحويل الجلفانومتر إلى فولتميتر بمضاعف جهد", "قراءة تدريج الأوميتر وتفسيره"] };
  O.sec3phyu1l6 = { en: ["Describe Faraday's experiment", "Apply Faraday's law and Lenz's rule", "Calculate the emf in a moving wire", "Distinguish mutual and self induction", "Explain eddy currents"],
    ar: ["وصف تجربة فاراداي", "تطبيق قانون فاراداي وقاعدة لنز", "حساب القوة الدافعة في سلك متحرك", "التمييز بين الحث المتبادل والذاتي", "تفسير التيارات الدوامية"] };
  O.sec3phyu1l7 = { en: ["Explain the AC generator and calculate emf_max", "Use the effective value of AC", "Apply the transformer equations and efficiency", "Explain the commutator and the DC motor"],
    ar: ["شرح المولد الكهربي وحساب القوة الدافعة العظمى", "استخدام القيمة الفعالة للتيار المتردد", "تطبيق معادلات المحول وكفاءته", "شرح الأسطوانة المشقوقة والمحرك الكهربي"] };
  O.sec3phyu1l8 = { en: ["Explain the hot-wire ammeter", "Calculate X_L and X_C", "Find the impedance and phase angle of RLC circuits", "Calculate the resonant frequency and explain tuning"],
    ar: ["شرح الأميتر الحراري", "حساب X_L و X_C", "إيجاد المعاوقة وزاوية الطور لدوائر RLC", "حساب تردد الرنين وتفسير التوليف"] };
  O.sec3phyu2l1 = { en: ["Describe black-body radiation and Wien's law", "Use E = hν", "List the photoelectric observations", "Apply Einstein's equation"],
    ar: ["وصف إشعاع الجسم الأسود وقانون فين", "استخدام E = hν", "ذكر مشاهدات الظاهرة الكهروضوئية", "تطبيق معادلة أينشتاين"] };
  O.sec3phyu2l2 = { en: ["Explain the Compton effect", "Calculate a photon's mass and momentum", "Calculate the force of a light beam", "Use the de Broglie wavelength and the electron microscope"],
    ar: ["تفسير تأثير كومتون", "حساب كتلة وكمية حركة الفوتون", "حساب قوة شعاع ضوئي", "استخدام الطول الموجي المصاحب والميكروسكوب الإلكتروني"] };
  O.sec3phyu2l3 = { en: ["State Bohr's postulates", "Calculate photon energy and wavelength from levels", "Name the five hydrogen series", "Compare emission and absorption spectra", "Explain X-ray production and uses"],
    ar: ["ذكر فروض بور", "حساب طاقة الفوتون وطوله الموجي من المستويات", "تسمية متسلسلات الهيدروجين الخمس", "المقارنة بين طيفي الانبعاث والامتصاص", "تفسير إنتاج الأشعة السينية واستخداماتها"] };
  O.sec3phyu2l4 = { en: ["Compare spontaneous and stimulated emission", "List the properties of laser light", "Explain population inversion and the cavity", "Describe the He-Ne laser and laser uses"],
    ar: ["المقارنة بين الانبعاث التلقائي والمستحث", "ذكر خواص ضوء الليزر", "تفسير الإسكان المعكوس والتجويف الرنيني", "وصف ليزر الهيليوم-نيون وتطبيقات الليزر"] };
  O.sec3phyu2l5 = { en: ["Explain electrons and holes in pure silicon", "Distinguish n-type and p-type", "Apply np = n_i²", "Explain forward and reverse bias of a pn junction"],
    ar: ["تفسير الإلكترونات والفجوات في السيليكون النقي", "التمييز بين النوعين n و p", "تطبيق np = n_i²", "تفسير الانحياز الأمامي والعكسي للوصلة pn"] };
  O.sec3phyu2l6 = { en: ["Relate I_E, I_C and I_B", "Calculate α_e and β_e", "Explain the transistor as amplifier and switch", "Use binary numbers and the NOT, AND, OR gates"],
    ar: ["الربط بين I_E و I_C و I_B", "حساب α_e و β_e", "شرح الترانزستور كمكبر وكمفتاح", "استخدام النظام الثنائي والبوابات NOT و AND و OR"] };

  function tf(a, q, off, sto) { return { k: "tf", a: a, q: q, off: off, sto: sto }; }
  X.sec3phyu1l1 = [
    { k: "order", q: ["Order by equivalent resistance, SMALLEST first (each resistor 30 Ω).", "رتب حسب المقاومة المكافئة من الأصغر (كل مقاومة ٣٠ أوم)."],
      items: [["Three in parallel (10 Ω)", "ثلاث على التوازي (١٠ أوم)"], ["Two in parallel (15 Ω)", "اثنتان على التوازي (١٥ أوم)"], ["One alone (30 Ω)", "واحدة منفردة (٣٠ أوم)"], ["Two in series (60 Ω)", "اثنتان على التوالي (٦٠ أوم)"], ["Three in series (90 Ω)", "ثلاث على التوالي (٩٠ أوم)"]],
      off: ["r/N for parallel, Nr for series.", "r/N للتوازي و Nr للتوالي."], sto: ["More side-by-side gates = easier; more in a line = harder.", "بوابات متجاورة أكثر = أسهل، وفي خط أطول = أصعب."] },
    tf(false, ["True or false: in a parallel connection, the largest resistance carries the largest current.", "صواب أم خطأ: في التوصيل على التوازي تمر أكبر شدة تيار في أكبر مقاومة."],
      ["False. I = V/R with the same V, so the SMALLEST resistance carries the largest current.", "خطأ؛ I = V/R بنفس V، فأصغر مقاومة يمر فيها أكبر تيار."], ["Water prefers the widest pipe.", "الماء يفضل الأنبوب الأوسع."])
  ];
  X.sec3phyu1l2 = [
    { k: "match", q: ["Match each law to its basis.", "صِل كل قانون بأساسه."],
      pairs: [[["Kirchhoff's first law", "قانون كيرتشوف الأول"], ["Conservation of charge", "بقاء الشحنة"]], [["Kirchhoff's second law", "قانون كيرتشوف الثاني"], ["Conservation of energy", "بقاء الطاقة"]],
        [["V = V_B − Ir", "V = V_B − Ir"], ["A discharging source", "مصدر في حالة تفريغ"]], [["V = V_B + Ir", "V = V_B + Ir"], ["A battery being charged", "بطارية في حالة شحن"]]],
      off: ["Charge and energy are both conserved; the sign of Ir depends on charging or discharging.", "الشحنة والطاقة محفوظتان، وإشارة Ir تتوقف على الشحن أو التفريغ."], sto: ["Count the people and count the stairs.", "عُد الأشخاص وعُد الدرجات."] },
    tf(true, ["True or false: the emf of a cell equals its terminal voltage when no current flows.", "صواب أم خطأ: القوة الدافعة للعمود تساوي فرق الجهد بين قطبيه عندما لا يمر تيار."],
      ["True. With I = 0, V = V_B − 0 = V_B.", "صواب؛ عندما I = صفر تكون V = V_B."], ["Unplug the phone and the power bank reads its full 5 V.", "افصل الهاتف فيقرأ الباور بانك ٥ فولت كاملة."])
  ];
  X.sec3phyu1l3 = [
    { k: "match", q: ["Match each conductor to its flux density at the centre/axis.", "صِل كل موصل بكثافة الفيض عنده."],
      pairs: [[["Straight wire", "سلك مستقيم"], ["μI / 2πd", "μI / 2πd"]], [["Circular loop", "ملف دائري"], ["μNI / 2r", "μNI / 2r"]], [["Solenoid", "ملف حلزوني"], ["μNI / ℓ", "μNI / ℓ"]]],
      off: ["Wire: falls with distance; loop: depends on radius; solenoid: on turns per length.", "السلك: يقل بالبعد، والدائري: يتوقف على نصف القطر، والحلزوني: على عدد اللفات لوحدة الأطوال."], sto: ["Three shapes, three formulas.", "ثلاثة أشكال وثلاث علاقات."] },
    tf(false, ["True or false: a single isolated magnetic north pole can be made with a current loop.", "صواب أم خطأ: يمكن بالملف الدائري الحصول على قطب شمالي منفرد."],
      ["False. Magnetic poles always come in N-S pairs; a loop is a dipole.", "خطأ؛ الأقطاب المغناطيسية دائمًا أزواج، والملف ثنائي قطب."], ["Every coin has two faces.", "لكل عملة وجهان."])
  ];
  X.sec3phyu1l4 = [
    { k: "order", q: ["Order the force on a wire (B, I, ℓ fixed) from SMALLEST to largest by angle with the field.", "رتب القوة على سلك (B و I و ℓ ثابتة) من الأصغر حسب الزاوية مع المجال."],
      items: [["0°", "٠°"], ["30°", "٣٠°"], ["60°", "٦٠°"], ["90°", "٩٠°"]],
      off: ["F ∝ sinθ: 0, ½, 0.87, 1.", "F ∝ sinθ: صفر، ½، ٠٫٨٧، ١."], sto: ["The more the wire crosses the field, the harder the push.", "كلما عبر السلك المجال أكثر زاد الدفع."] },
    tf(true, ["True or false: two parallel wires carrying currents in opposite directions repel each other.", "صواب أم خطأ: سلكان متوازيان يمر بهما تياران متضادان يتنافران."],
      ["True. Same direction attract, opposite directions repel.", "صواب؛ المتماثلان يتجاذبان والمتضادان يتنافران."], ["Opposite traffic pushes apart.", "المرور المتعاكس يتباعد."])
  ];
  X.sec3phyu1l5 = [
    { k: "match", q: ["Match each instrument to how its resistor is connected.", "صِل كل جهاز بطريقة توصيل مقاومته."],
      pairs: [[["Ammeter", "الأميتر"], ["Small shunt in parallel", "مجزئ صغير على التوازي"]], [["Voltmeter", "الفولتميتر"], ["Large multiplier in series", "مضاعف كبير على التوالي"]], [["Ohmmeter", "الأوميتر"], ["Cell + variable resistance in series", "عمود ومقاومة متغيرة على التوالي"]]],
      off: ["The resistor sets the range of each instrument.", "المقاومة تحدد مدى كل جهاز."], sto: ["One galvanometer, three jobs.", "جلفانومتر واحد وثلاث وظائف."] },
    tf(false, ["True or false: a voltmeter should have a very small resistance.", "صواب أم خطأ: يجب أن تكون مقاومة الفولتميتر صغيرة جدًا."],
      ["False. It is connected in parallel, so it needs a very large resistance to draw almost no current.", "خطأ؛ يوصل على التوازي فيحتاج مقاومة كبيرة جدًا حتى لا يسحب تيارًا يذكر."], ["A guest who watches should not eat the food.", "الضيف الذي يراقب لا يأكل الطعام."])
  ];
  X.sec3phyu1l6 = [
    { k: "match", q: ["Match each formula to its kind of induction.", "صِل كل علاقة بنوع الحث."],
      pairs: [[["−N ΔΦ/Δt", "−N ΔΦ/Δt"], ["Faraday's law", "قانون فاراداي"]], [["−M ΔI₁/Δt", "−M ΔI₁/Δt"], ["Mutual induction", "الحث المتبادل"]], [["−L ΔI/Δt", "−L ΔI/Δt"], ["Self induction", "الحث الذاتي"]], [["Bℓv sinθ", "Bℓv sinθ"], ["Moving straight wire", "سلك مستقيم متحرك"]]],
      off: ["The minus sign in each is Lenz's rule.", "الإشارة السالبة في كل منها هي قاعدة لنز."], sto: ["Four faces of one idea: change makes emf.", "أربعة وجوه لفكرة واحدة: التغير يولد قوة دافعة."] },
    tf(false, ["True or false: a magnet resting still inside a coil induces a steady current.", "صواب أم خطأ: مغناطيس ساكن داخل ملف يولد تيارًا مستمرًا."],
      ["False. No change of flux, no induced emf.", "خطأ؛ لا تغير في الفيض فلا توجد قوة دافعة مستحثة."], ["Nour's lamp dies when she stops pedalling.", "مصباح نور ينطفئ عندما تتوقف عن التبديل."])
  ];
  X.sec3phyu1l7 = [
    { k: "order", q: ["Order the path of electricity from the High Dam to a home.", "رتب مسار الكهرباء من السد العالي إلى المنزل."],
      items: [["Turbine turns the generator", "التوربين يدير المولد"], ["Step-up transformer", "المحول الرافع"], ["High-voltage lines", "خطوط الضغط العالي"], ["Step-down transformer", "المحول الخافض"], ["220 V socket", "مقبس ٢٢٠ فولت"]],
      off: ["Raise V to cut I²R losses, then lower it for safe use.", "يُرفع الجهد لتقليل فقد I²R ثم يُخفض للاستخدام الآمن."], sto: ["Up for the journey, down at the door.", "رفع للرحلة، وخفض عند الباب."] },
    tf(false, ["True or false: a transformer can step up a DC battery voltage.", "صواب أم خطأ: يمكن للمحول رفع جهد بطارية تيار مستمر."],
      ["False. Only a changing current changes the flux, so a transformer needs AC.", "خطأ؛ التيار المتغير فقط يغير الفيض، فالمحول يحتاج تيارًا مترددًا."], ["No change, no induction.", "لا تغير، لا حث."])
  ];
  X.sec3phyu1l8 = [
    { k: "match", q: ["Match each component to the phase of its voltage.", "صِل كل عنصر بطور جهده."],
      pairs: [[["Resistor", "مقاومة أومية"], ["In phase with I", "متفق مع التيار"]], [["Inductor", "ملف حثي"], ["Leads I by 90°", "يسبق التيار بـ ٩٠°"]], [["Capacitor", "مكثف"], ["Lags I by 90°", "يتأخر عن التيار بـ ٩٠°"]], [["RLC at resonance", "RLC عند الرنين"], ["In phase, Z = R", "متفق، Z = R"]]],
      off: ["X_L and X_C act in opposite directions on the phasor diagram.", "X_L و X_C في اتجاهين متضادين على المخطط الاتجاهي."], sto: ["The coil runs ahead, the capacitor lags behind.", "الملف يسبق والمكثف يتأخر."] },
    tf(true, ["True or false: an ideal coil and capacitor consume no average power in an AC circuit.", "صواب أم خطأ: الملف والمكثف المثاليان لا يستهلكان قدرة في دائرة التيار المتردد."],
      ["True. They store energy and give it back each cycle; only R turns it into heat.", "صواب؛ يخزنان الطاقة ويعيدانها كل دورة، والمقاومة فقط تحولها حرارة."], ["They borrow and return; the resistor spends.", "يستعيران ويردان، والمقاومة تنفق."])
  ];
  X.sec3phyu2l1 = [
    { k: "order", q: ["Order the sources by peak wavelength, SHORTEST first.", "رتب المصادر حسب الطول الموجي عند القمة من الأقصر."],
      items: [["The Sun (6000 K)", "الشمس (٦٠٠٠ كلفن)"], ["Lamp filament (3000 K)", "فتيل المصباح (٣٠٠٠ كلفن)"], ["The Earth (~300 K)", "الأرض (حوالي ٣٠٠ كلفن)"]],
      off: ["λ_max ∝ 1/T: about 0.5 μm, 1 μm, 10 μm.", "λ_max ∝ 1/T: حوالي ٠٫٥ و١ و١٠ ميكرون."], sto: ["Hotter glows bluer.", "الأسخن يتوهج أزرق."] },
    tf(false, ["True or false: making ultraviolet light brighter increases the maximum kinetic energy of photoelectrons.", "صواب أم خطأ: زيادة شدة الأشعة فوق البنفسجية تزيد أقصى طاقة حركة للإلكترونات الضوئية."],
      ["False. Intensity increases the number of electrons; KE depends only on frequency.", "خطأ؛ الشدة تزيد عدد الإلكترونات، وطاقة الحركة تتوقف على التردد فقط."], ["More buses, same speed.", "أتوبيسات أكثر، نفس السرعة."])
  ];
  X.sec3phyu2l2 = [
    { k: "match", q: ["Match each quantity of a photon to its formula.", "صِل كل كمية للفوتون بعلاقتها."],
      pairs: [[["Energy", "الطاقة"], ["hν", "hν"]], [["Momentum", "كمية الحركة"], ["h/λ", "h/λ"]], [["Equivalent mass", "الكتلة المكافئة"], ["hν/c²", "hν/c²"]], [["Force of reflected beam", "قوة الشعاع المنعكس"], ["2P_w/c", "2P_w/c"]]],
      off: ["All follow from E = hν and E = mc².", "كلها من E = hν و E = mc²."], sto: ["One photon, four ID cards.", "فوتون واحد وأربع بطاقات هوية."] },
    tf(true, ["True or false: electrons show diffraction and interference like light.", "صواب أم خطأ: الإلكترونات تُظهر الحيود والتداخل مثل الضوء."],
      ["True. This wave nature (λ = h/mv) is used in the electron microscope.", "صواب؛ هذه الطبيعة الموجية (λ = h/mv) تُستخدم في الميكروسكوب الإلكتروني."], ["Particles can surf too.", "الجسيمات تركب الموج أيضًا."])
  ];
  X.sec3phyu2l3 = [
    { k: "match", q: ["Match each hydrogen series to its final level and region.", "صِل كل متسلسلة بالمستوى النهائي والمنطقة."],
      pairs: [[["Lyman", "ليمان"], ["n = 1, ultraviolet", "n = ١، فوق بنفسجية"]], [["Balmer", "بالمر"], ["n = 2, visible", "n = ٢، مرئية"]], [["Paschen", "باشن"], ["n = 3, infrared", "n = ٣، تحت حمراء"]], [["Pfund", "فوند"], ["n = 5, far infrared", "n = ٥، تحت حمراء بعيدة"]]],
      off: ["Lower final level = bigger jump = shorter wavelength.", "مستوى نهائي أدنى = قفزة أكبر = طول موجي أقصر."], sto: ["The deeper the fall, the bluer the photon.", "كلما كان السقوط أعمق كان الفوتون أزرق."] },
    tf(false, ["True or false: raising the tube voltage changes the wavelength of the characteristic X-ray lines.", "صواب أم خطأ: زيادة جهد الأنبوبة تغير الطول الموجي لخطوط الأشعة السينية المميزة."],
      ["False. Characteristic lines depend on the target element only.", "خطأ؛ الخطوط المميزة تتوقف على عنصر الهدف فقط."], ["Tungsten keeps its own voice.", "التنجستن يحتفظ بصوته الخاص."])
  ];
  X.sec3phyu2l4 = [
    { k: "order", q: ["Order the steps of the He-Ne laser.", "رتب خطوات عمل ليزر الهيليوم-نيون."],
      items: [["Discharge excites helium", "التفريغ يثير الهيليوم"], ["He collides and excites neon", "الهيليوم يصطدم بالنيون فيثيره"], ["Ne gathers in the metastable level", "يتجمع النيون في المستوى شبه المستقر"], ["Photons stimulate emission between mirrors", "الفوتونات تستحث الانبعاث بين المرآتين"], ["Beam leaves the semi-transparent mirror", "يخرج الشعاع من المرآة نصف الشفافة"]],
      off: ["Pump, inversion, stimulated emission, amplification, output.", "ضخ، إسكان معكوس، انبعاث مستحث، تضخيم، خروج."], sto: ["From one spark to one beam.", "من شرارة إلى شعاع."] },
    tf(true, ["True or false: laser light is not subject to the inverse square law.", "صواب أم خطأ: ضوء الليزر لا يخضع لقانون التربيع العكسي."],
      ["True. The beam is collimated and hardly spreads.", "صواب؛ الشعاع متوازٍ ولا يكاد يتشتت."], ["The Nile-wide dot stays tiny.", "النقطة عبر النيل تبقى صغيرة."])
  ];
  X.sec3phyu2l5 = [
    { k: "match", q: ["Match each term to its description.", "صِل كل مصطلح بوصفه."],
      pairs: [[["Donor", "مانحة"], ["Pentavalent, gives an electron", "خماسية تعطي إلكترونًا"]], [["Acceptor", "مستقبلة"], ["Trivalent, creates a hole", "ثلاثية تكوّن فجوة"]], [["Forward bias", "انحياز أمامي"], ["p to +, conducts", "p بالموجب، يوصل"]], [["Reverse bias", "انحياز عكسي"], ["p to −, blocks", "p بالسالب، يمنع"]]],
      off: ["Doping sets the carrier type; bias sets the switch.", "التطعيم يحدد نوع الحامل والانحياز يحدد المفتاح."], sto: ["Ingredients, then direction.", "المكونات ثم الاتجاه."] },
    tf(false, ["True or false: in a metal, the number of free electrons increases strongly with temperature, as in a semiconductor.", "صواب أم خطأ: في الفلز يزداد عدد الإلكترونات الحرة كثيرًا بارتفاع الحرارة كما في شبه الموصل."],
      ["False. In metals the electron concentration is constant; in semiconductors it rises with temperature.", "خطأ؛ تركيز الإلكترونات في الفلز ثابت، أما في شبه الموصل فيزداد بارتفاع الحرارة."], ["Metals are always crowded; silicon fills up when warm.", "الفلز مزدحم دائمًا، والسيليكون يزدحم عندما يسخن."])
  ];
  X.sec3phyu2l6 = [
    { k: "match", q: ["Match each gate to its rule.", "صِل كل بوابة بقاعدتها."],
      pairs: [[["NOT", "NOT"], ["Output is the opposite of the input", "الخرج عكس الدخل"]], [["AND", "AND"], ["1 only if all inputs are 1", "١ فقط إذا كانت كل المداخل ١"]], [["OR", "OR"], ["1 if any input is 1", "١ إذا كان أي مدخل ١"]]],
      off: ["NOT = inverter, AND = series switches, OR = parallel switches.", "NOT = عاكس، AND = مفاتيح توالٍ، OR = مفاتيح توازٍ."], sto: ["Seatbelt AND brake; door OR door.", "الحزام وأيضًا الفرامل؛ باب أو باب."] },
    tf(true, ["True or false: I_E = I_C + I_B in a transistor.", "صواب أم خطأ: في الترانزستور I_E = I_C + I_B."],
      ["True. The emitter current divides between collector and base.", "صواب؛ تيار الباعث يتوزع بين المجمع والقاعدة."], ["Kirchhoff's first law inside a chip.", "قانون كيرتشوف الأول داخل شريحة."])
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function ln(x1, y1, x2, y2, c, w, extra) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2) + '"' + (extra || "") + "/>"; }
  function res(x, y, w, lab) { return '<rect x="' + x + '" y="' + (y - 9) + '" width="' + w + '" height="18" rx="4" fill="#fde68a" stroke="#b45309" stroke-width="2"/>' + tx(x + w / 2, y + 4, lab, 'style="fill:#78350f"', 10); }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function wrap(s) { return '<g direction="ltr">' + s + "</g>"; }

  D.sec3phyu1l1 = {
    title: ["Series and parallel resistors", "المقاومات على التوالي والتوازي"],
    svg: function () {
      var s = ln(20, 60, 380, 60) + res(60, 60, 60, "25 Ω") + res(170, 60, 60, "70 Ω") + res(280, 60, 60, "85 Ω");
      s += tx(200, 30, t("Series: same I, R = R₁ + R₂ + R₃ = 180 Ω", "توالي: نفس I، R = ١٨٠ أوم"), mut, 11);
      s += ln(40, 120, 40, 210) + ln(360, 120, 360, 210) + ln(20, 165, 40, 165) + ln(360, 165, 380, 165);
      [125, 165, 205].forEach(function (y, i) { s += ln(40, y, 160, y) + ln(240, y, 360, y) + res(160, y, 80, ["25 Ω", "70 Ω", "85 Ω"][i]); });
      s += tx(200, 236, t("Parallel: same V, 1/R = Σ1/Rᵢ → 15.14 Ω", "توازي: نفس V، R = ١٥٫١٤ أوم"), mut, 11);
      return wrap(s);
    },
    spots: [[90, 60, ["Same current", "نفس التيار"], ["In series one path carries the same current I = 0.25 A through every resistor.", "في التوالي مسار واحد يحمل نفس التيار ٠٫٢٥ أمبير في كل مقاومة."]],
      [310, 60, ["Largest share of V", "أكبر نصيب من الجهد"], ["V = IR: the 85 Ω resistor takes 21.25 V of the 45 V.", "V = IR: المقاومة ٨٥ أوم تأخذ ٢١٫٢٥ فولت من ٤٥ فولت."]],
      [40, 165, ["Junction", "نقطة تفرع"], ["The current divides here; the branch currents add back up at the other side.", "يتفرع التيار هنا، ومجموع تيارات الفروع يعود عند الطرف الآخر."]],
      [200, 125, ["Smallest R, largest I", "أصغر مقاومة وأكبر تيار"], ["With the same 45 V, the 25 Ω branch carries 1.8 A.", "بنفس ٤٥ فولت يمر في فرع ٢٥ أوم تيار ١٫٨ أمبير."]],
      [200, 236, ["Parallel is smaller", "التوازي أصغر"], ["The equivalent resistance is less than the smallest branch.", "المقاومة المكافئة أصغر من أصغر فرع."]]]
  };
  D.sec3phyu1l2 = {
    title: ["A closed circuit and a junction", "دائرة مغلقة ونقطة تفرع"],
    svg: function () {
      var s = '<rect x="30" y="40" width="200" height="150" rx="6" fill="none" stroke="var(--muted)" stroke-width="2"/>';
      s += '<rect x="20" y="95" width="20" height="40" fill="var(--card)"/>' + ln(16, 102, 44, 102, "#ef4444", 4) + ln(22, 112, 38, 112, "#ef4444", 2) + tx(70, 112, "V_B, r", mut, 11);
      s += '<rect x="100" y="181" width="60" height="18" rx="4" fill="#fde68a" stroke="#b45309" stroke-width="2"/>' + tx(130, 194, "R", 'style="fill:#78350f"', 11);
      s += '<circle cx="130" cy="40" r="13" fill="var(--card)" stroke="#2563eb" stroke-width="2"/>' + tx(130, 45, "A", 'style="fill:#2563eb"', 12);
      s += '<circle cx="320" cy="120" r="7" fill="#7c3aed"/>' + arrowDef("s3a2", "#7c3aed");
      [[260, 70, 312, 114, "4A"], [260, 170, 312, 126, "5A"], [380, 70, 327, 114, "2A"]].forEach(function (a) { s += '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + a[2] + '" y2="' + a[3] + '" stroke="#7c3aed" stroke-width="3" marker-end="url(#s3a2)"/>' + tx(a[0] + (a[0] > 300 ? 8 : -6), a[1] - 6, a[4], mut, 11); });
      s += '<line x1="328" y1="126" x2="378" y2="172" stroke="#7c3aed" stroke-width="3" marker-end="url(#s3a2)"/>' + tx(388, 186, "8A", mut, 11);
      s += '<line x1="320" y1="128" x2="320" y2="200" stroke="#f97316" stroke-width="3" marker-end="url(#s3a2)"/>' + tx(320, 222, "I = 3A", 'style="fill:#f97316"', 12);
      return wrap(s);
    },
    spots: [[30, 112, ["Source with internal resistance", "مصدر له مقاومة داخلية"], ["V_B = I(R + r); part of the emf, Ir, is used inside the source.", "V_B = I(R + r)، وجزء من القوة الدافعة Ir يُستهلك داخل المصدر."]],
      [130, 190, ["External resistance", "المقاومة الخارجية"], ["The terminal voltage V = IR = V_B − Ir.", "فرق جهد القطبين V = IR = V_B − Ir."]],
      [130, 40, ["Ammeter in series", "أميتر على التوالي"], ["Measures I = V_B/(R + r); e.g. 2/(3.9 + 0.1) = 0.5 A.", "يقيس I = V_B/(R + r)، مثل ٢ ÷ (٣٫٩ + ٠٫١) = ٠٫٥ أمبير."]],
      [320, 120, ["Junction (Kirchhoff 1)", "نقطة تفرع (كيرتشوف الأول)"], ["In: 4 + 5 + 2 = 11 A. Out: 8 + I, so I = 3 A out.", "الداخل ٤ + ٥ + ٢ = ١١ أمبير، والخارج ٨ + I، إذن I = ٣ أمبير خارج."]],
      [130, 115, ["Closed loop (Kirchhoff 2)", "مسار مغلق (كيرتشوف الثاني)"], ["Around any loop ΣV_B = ΣIR: energy is conserved.", "في أي مسار مغلق ΣV_B = ΣIR: بقاء الطاقة."]]]
  };
  D.sec3phyu1l3 = {
    title: ["Fields of a wire, a loop and a solenoid", "مجال السلك والملف الدائري والحلزوني"],
    svg: function () {
      var s = "";
      [14, 26, 40].forEach(function (r) { s += '<circle cx="70" cy="110" r="' + r + '" fill="none" stroke="#3b82f6" stroke-width="1.5"/>'; });
      s += '<circle cx="70" cy="110" r="6" fill="var(--ink)"/>' + '<circle cx="70" cy="110" r="2" fill="var(--card)"/>' + tx(70, 175, t("Wire (current out)", "سلك (تيار للخارج)"), mut, 11);
      s += '<ellipse cx="200" cy="110" rx="18" ry="45" fill="none" stroke="#b45309" stroke-width="4"/>' + ln(150, 110, 250, 110, "#3b82f6", 2) + tx(200, 175, t("Loop", "ملف دائري"), mut, 11) + tx(240, 100, "N", 'style="fill:#ef4444"', 13) + tx(160, 100, "S", 'style="fill:#2563eb"', 13);
      for (var i = 0; i < 7; i++) s += '<ellipse cx="' + (290 + i * 12) + '" cy="110" rx="6" ry="30" fill="none" stroke="#b45309" stroke-width="3"/>';
      s += ln(270, 110, 390, 110, "#3b82f6", 2) + ln(285, 95, 370, 95, "#3b82f6", 1.5) + ln(285, 125, 370, 125, "#3b82f6", 1.5) + tx(330, 175, t("Solenoid", "ملف حلزوني"), mut, 11);
      s += tx(200, 215, "B = μI/2πd   ·   μNI/2r   ·   μNI/ℓ", mut, 12);
      return wrap(s);
    },
    spots: [[70, 70, ["Concentric circles", "دوائر متحدة المركز"], ["Closer together near the wire: B = μI/(2πd) falls as 1/d.", "متقاربة قرب السلك: B = μI/(2πd) تقل بنسبة 1/d."]],
      [70, 110, ["Right-hand rule", "قاعدة اليد اليمنى"], ["Current out of the page: field lines go anticlockwise.", "تيار خارج من الصفحة: خطوط المجال عكس عقارب الساعة."]],
      [200, 110, ["Uniform at the centre", "منتظم عند المركز"], ["At the loop's centre the lines are straight and parallel: B = μNI/(2r).", "عند مركز الملف الخطوط مستقيمة متوازية: B = μNI/(2r)."]],
      [240, 100, ["Polarity", "القطبية"], ["Anticlockwise face = N, clockwise face = S.", "الوجه عكس عقارب الساعة شمالي، ومع عقارب الساعة جنوبي."]],
      [330, 110, ["Like a bar magnet", "مثل المغناطيس المستقيم"], ["Inside a solenoid B = μNI/ℓ is uniform; lines leave the N end.", "داخل الملف الحلزوني B = μNI/ℓ منتظم، والخطوط تخرج من الطرف الشمالي."]]]
  };
  D.sec3phyu1l4 = {
    title: ["Force on a wire and torque on a coil", "القوة على سلك وعزم الازدواج على ملف"],
    svg: function () {
      var s = arrowDef("s3a4", "#ef4444");
      s += '<rect x="20" y="40" width="40" height="140" rx="6" fill="#ef4444"/>' + tx(40, 115, "N", 'style="fill:#fff"', 18) + '<rect x="200" y="40" width="40" height="140" rx="6" fill="#2563eb"/>' + tx(220, 115, "S", 'style="fill:#fff"', 18);
      for (var y = 60; y <= 160; y += 25) s += ln(62, y, 198, y, "#93c5fd", 1.5, ' stroke-dasharray="4 4"');
      s += '<circle cx="130" cy="110" r="10" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + ln(124, 104, 136, 116, "var(--ink)", 2) + ln(136, 104, 124, 116, "var(--ink)", 2);
      s += '<line x1="130" y1="98" x2="130" y2="52" stroke="#ef4444" stroke-width="4" marker-end="url(#s3a4)"/>' + tx(150, 50, "F", 'style="fill:#ef4444"', 14);
      s += '<rect x="280" y="70" width="90" height="80" fill="none" stroke="#b45309" stroke-width="4"/>' + '<line x1="275" y1="70" x2="275" y2="30" stroke="#ef4444" stroke-width="3" marker-end="url(#s3a4)"/>' + '<line x1="375" y1="150" x2="375" y2="190" stroke="#ef4444" stroke-width="3" marker-end="url(#s3a4)"/>';
      s += tx(325, 215, "τ = BIAN sinθ", mut, 12) + tx(130, 215, "F = BIℓ sinθ", mut, 12);
      return wrap(s);
    },
    spots: [[130, 110, ["Current into the page", "تيار داخل الصفحة"], ["The × marks a current going into the page between the poles.", "العلامة × تعني تيارًا داخلًا إلى الصفحة بين القطبين."]],
      [130, 60, ["The force", "القوة"], ["Fleming's left hand: field N→S, current in, force up. F = BIℓ sinθ.", "يد فلمنج اليسرى: المجال من N إلى S والتيار للداخل فتكون القوة لأعلى. F = BIℓ sinθ."]],
      [100, 160, ["Field lines", "خطوط المجال"], ["If the wire were along these lines (θ = 0), the force would vanish.", "إذا كان السلك موازيًا لهذه الخطوط (θ = صفر) تنعدم القوة."]],
      [325, 110, ["Couple on a coil", "ازدواج على ملف"], ["Opposite sides feel equal opposite forces: a torque τ = BIAN sinθ.", "يتأثر الضلعان المتقابلان بقوتين متساويتين متضادتين: عزم τ = BIAN sinθ."]],
      [325, 215, ["Dipole moment", "عزم ثنائي القطب"], ["m_d = IAN; τ = 0 when m_d is parallel to B.", "m_d = IAN، وينعدم العزم عندما يوازي m_d المجال."]]]
  };
  D.sec3phyu1l5 = {
    title: ["Galvanometer to ammeter and voltmeter", "تحويل الجلفانومتر إلى أميتر وفولتميتر"],
    svg: function () {
      var s = "";
      function g(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="20" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + tx(x, y + 5, "G", ink, 14); }
      s += ln(20, 80, 80, 80) + g(100, 80) + ln(120, 80, 180, 80) + ln(50, 80, 50, 130) + ln(150, 80, 150, 130) + ln(50, 130, 70, 130) + ln(130, 130, 150, 130) + res(70, 130, 60, "R_s");
      s += tx(100, 175, t("Ammeter: shunt in parallel", "أميتر: مجزئ على التوازي"), mut, 11);
      s += ln(220, 80, 250, 80) + g(270, 80) + ln(290, 80, 310, 80) + res(310, 80, 60, "R_m") + ln(370, 80, 390, 80);
      s += tx(300, 175, t("Voltmeter: multiplier in series", "فولتميتر: مضاعف على التوالي"), mut, 11);
      s += tx(200, 215, "R_s = I_gR_g/(I − I_g)    R_m = (V − V_g)/I_g", mut, 12);
      return wrap(s);
    },
    spots: [[100, 80, ["Moving-coil galvanometer", "الجلفانومتر ذو الملف المتحرك"], ["Deflection ∝ current; FSD at a few mA. It cannot carry large currents alone.", "الانحراف يتناسب مع التيار، وأقصى تيار مللي أمبيرات قليلة فلا يتحمل وحده تيارات كبيرة."]],
      [100, 130, ["Shunt", "مجزئ التيار"], ["A tiny resistance in parallel carries most of the current: 0.001 Ω for 10 A.", "مقاومة صغيرة جدًا على التوازي تحمل معظم التيار: ٠٫٠٠١ أوم لمدى ١٠ أمبير."]],
      [340, 80, ["Multiplier", "مضاعف الجهد"], ["A huge resistance in series: 49 999.9 Ω for a 50 V range.", "مقاومة ضخمة على التوالي: ٤٩٩٩٩٫٩ أوم لمدى ٥٠ فولت."]],
      [200, 215, ["The two formulas", "العلاقتان"], ["Same voltage on shunt and coil; same current through multiplier and coil.", "نفس الجهد على المجزئ والملف، ونفس التيار في المضاعف والملف."]]]
  };
  D.sec3phyu1l6 = {
    title: ["Faraday's experiment and Lenz's rule", "تجربة فاراداي وقاعدة لنز"],
    svg: function () {
      var s = arrowDef("s3a6", "#f97316");
      s += '<rect x="20" y="90" width="50" height="30" fill="#ef4444"/><rect x="70" y="90" width="50" height="30" fill="#2563eb"/>' + tx(45, 110, "S", 'style="fill:#fff"', 13) + tx(95, 110, "N", 'style="fill:#fff"', 13);
      s += '<line x1="40" y1="70" x2="100" y2="70" stroke="#f97316" stroke-width="3" marker-end="url(#s3a6)"/>' + tx(70, 60, t("push in", "إدخال"), mut, 11);
      for (var i = 0; i < 8; i++) s += '<ellipse cx="' + (170 + i * 14) + '" cy="105" rx="7" ry="34" fill="none" stroke="#b45309" stroke-width="3"/>';
      s += tx(160, 60, "N", 'style="fill:#ef4444"', 16);
      s += ln(170, 139, 170, 200) + ln(268, 139, 268, 200) + ln(170, 200, 190, 200) + ln(248, 200, 268, 200);
      s += '<circle cx="219" cy="200" r="24" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + ln(219, 200, 232, 184, "#ef4444", 3) + tx(219, 216, "G", mut, 10);
      s += tx(340, 110, "emf = −N ΔΦ/Δt", mut, 12);
      return wrap(s);
    },
    spots: [[95, 105, ["Moving magnet", "مغناطيس متحرك"], ["Only while it moves does the flux through the coil change.", "أثناء الحركة فقط يتغير الفيض خلال الملف."]],
      [160, 70, ["Induced N pole", "قطب شمالي مستحث"], ["Lenz: the coil makes a N face to repel the approaching N pole.", "لنز: الملف يكوّن وجهًا شماليًا ليتنافر مع القطب الشمالي المقترب."]],
      [219, 200, ["Centre-zero galvanometer", "جلفانومتر صفره في المنتصف"], ["Deflects one way on pushing in, the other way on pulling out.", "ينحرف في اتجاه عند الإدخال وفي الاتجاه المضاد عند الإخراج."]],
      [220, 105, ["More turns, more emf", "لفات أكثر = قوة دافعة أكبر"], ["emf ∝ N and ∝ the rate of change of flux.", "emf تتناسب مع N ومع معدل تغير الفيض."]],
      [340, 110, ["Faraday's law", "قانون فاراداي"], ["The minus sign is Lenz's rule: the effect opposes its cause.", "الإشارة السالبة هي قاعدة لنز: الأثر يقاوم السبب."]]]
  };
  D.sec3phyu1l7 = {
    title: ["Generator output and the transformer", "خرج المولد والمحول الكهربي"],
    svg: function () {
      var s = ln(20, 80, 200, 80, "var(--line)", 1) + '<path d="M20 80 ' + (function () { var p = ""; for (var x = 0; x <= 180; x += 5) p += "L" + (20 + x) + " " + (80 - 45 * Math.sin(x / 180 * 2 * Math.PI)).toFixed(1) + " "; return p; })() + '" fill="none" stroke="#f97316" stroke-width="3"/>';
      s += ln(20, 80 - 45 * 0.707, 200, 80 - 45 * 0.707, "#22c55e", 1.5, ' stroke-dasharray="5 4"') + tx(110, 150, t("AC emf (one turn)", "قوة دافعة مترددة (دورة)"), mut, 11);
      s += '<rect x="250" y="40" width="130" height="120" rx="6" fill="none" stroke="#64748b" stroke-width="8"/>';
      for (var i = 0; i < 4; i++) s += '<ellipse cx="254" cy="' + (65 + i * 22) + '" rx="14" ry="6" fill="none" stroke="#b45309" stroke-width="3"/>';
      for (var j = 0; j < 8; j++) s += '<ellipse cx="376" cy="' + (52 + j * 13) + '" rx="14" ry="5" fill="none" stroke="#7c3aed" stroke-width="3"/>';
      s += tx(254, 185, "N_p", mut, 11) + tx(376, 185, "N_s", mut, 11) + tx(315, 215, "V_s/V_p = N_s/N_p", mut, 12);
      return wrap(s);
    },
    spots: [[65, 35, ["emf_max = NBAω", "القوة الدافعة العظمى"], ["Peak when the coil plane is parallel to B; e.g. 6.6 V in the book's example.", "تكون عظمى عندما يوازي مستوى الملف المجال، مثل ٦٫٦ فولت في مثال الكتاب."]],
      [20, 80, ["Zero emf", "قوة دافعة صفرية"], ["When the coil is perpendicular to the field no lines are being cut.", "عندما يتعامد الملف على المجال لا تُقطع خطوط فيض."]],
      [170, 48, ["Effective value", "القيمة الفعالة"], ["The dashed line is 0.707 × peak: the DC that heats equally.", "الخط المتقطع = ٠٫٧٠٧ × القيمة العظمى: التيار المستمر المكافئ حراريًا."]],
      [315, 100, ["Laminated core", "قلب من شرائح"], ["Thin insulated soft-iron sheets guide the flux and cut eddy currents.", "شرائح حديد مطاوع رقيقة معزولة توجه الفيض وتقلل التيارات الدوامية."]],
      [376, 100, ["More secondary turns", "لفات ثانوي أكثر"], ["N_s > N_p: step-up, the voltage rises and the current falls.", "N_s > N_p: محول رافع، يرتفع الجهد ويقل التيار."]]]
  };
  D.sec3phyu1l8 = {
    title: ["Phasors in a series RLC circuit", "المخطط الاتجاهي لدائرة RLC على التوالي"],
    svg: function () {
      var s = arrowDef("s3a8a", "#22c55e") + arrowDef("s3a8b", "#ef4444") + arrowDef("s3a8c", "#3b82f6") + arrowDef("s3a8d", "#f97316");
      s += '<line x1="80" y1="140" x2="200" y2="140" stroke="#22c55e" stroke-width="4" marker-end="url(#s3a8a)"/>' + tx(150, 160, "V_R = 40", 'style="fill:#22c55e"', 11);
      s += '<line x1="80" y1="140" x2="80" y2="34" stroke="#ef4444" stroke-width="4" marker-end="url(#s3a8b)"/>' + tx(52, 40, "V_L = 80", 'style="fill:#ef4444"', 11);
      s += '<line x1="90" y1="140" x2="90" y2="210" stroke="#3b82f6" stroke-width="4" marker-end="url(#s3a8c)"/>' + tx(130, 215, "V_C = 50", 'style="fill:#3b82f6"', 11);
      s += '<line x1="80" y1="140" x2="196" y2="86" stroke="#f97316" stroke-width="4" marker-end="url(#s3a8d)"/>' + tx(228, 80, "V = 50", 'style="fill:#f97316"', 12) + tx(130, 130, "θ", mut, 12);
      s += tx(310, 70, "Z = √(R² + (X_L − X_C)²)", mut, 11) + tx(310, 110, "f₀ = 1 / 2π√(LC)", mut, 12) + tx(310, 150, "X_L = 2πfL", mut, 11) + tx(310, 180, "X_C = 1 / 2πfC", mut, 11);
      return wrap(s);
    },
    spots: [[150, 140, ["V_R in phase with I", "V_R متفق مع التيار"], ["The resistor's voltage is drawn along the current.", "جهد المقاومة يُرسم في اتجاه التيار."]],
      [80, 60, ["V_L leads by 90°", "V_L يسبق بـ ٩٠°"], ["The coil's voltage points up, 90° ahead.", "جهد الملف لأعلى، يسبق بـ ٩٠°."]],
      [90, 195, ["V_C lags by 90°", "V_C يتأخر بـ ٩٠°"], ["The capacitor's voltage points down, opposite to V_L.", "جهد المكثف لأسفل، عكس V_L."]],
      [180, 95, ["Vector sum", "المحصلة الاتجاهية"], ["V = √(40² + 30²) = 50 V, θ ≈ 37°, inductive.", "V = √(٤٠² + ٣٠²) = ٥٠ فولت، θ ≈ ٣٧°، حثية."]],
      [310, 110, ["Resonance", "الرنين"], ["When X_L = X_C the arrows cancel, Z = R and I is maximum.", "عندما X_L = X_C يلغي السهمان بعضهما فتكون Z = R والتيار أكبر ما يمكن."]]]
  };
  D.sec3phyu2l1 = {
    title: ["Planck curves and the photoelectric effect", "منحنيات بلانك والظاهرة الكهروضوئية"],
    svg: function () {
      var s = ln(20, 180, 220, 180) + ln(20, 180, 20, 30);
      function curve(T, c) { var p = "M20 180 "; for (var l = 0.1; l <= 3; l += 0.05) { var x = l * 1e-6, I = 1 / (Math.pow(x, 5) * (Math.exp(0.0144 / (x * T)) - 1)); p += "L" + (20 + l * 65).toFixed(1) + " " + (180 - I / 2.8e29 * 140).toFixed(1) + " "; } return '<path d="' + p + '" fill="none" stroke="' + c + '" stroke-width="3"/>'; }
      s += curve(6000, "#f59e0b") + curve(5000, "#ef4444");
      s += tx(120, 200, "λ (μm)", mut, 10) + tx(70, 40, "6000 K", 'style="fill:#f59e0b"', 11);
      s += '<rect x="270" y="60" width="16" height="110" fill="#94a3b8"/>' + tx(278, 190, t("metal", "فلز"), mut, 10);
      s += '<path d="M230 40 l10 6 l-6 4 l10 6 l-6 4 l14 10" fill="none" stroke="#7c3aed" stroke-width="3"/>' + tx(230, 30, "hν", 'style="fill:#7c3aed"', 13);
      s += '<circle cx="330" cy="100" r="7" fill="#2563eb"/>' + ln(290, 100, 320, 100, "#2563eb", 2) + tx(345, 130, "½mv² = hν − E_w", mut, 11);
      return wrap(s);
    },
    spots: [[50, 70, ["Peak shifts (Wien)", "انزياح القمة (فين)"], ["Hotter body: higher curve, peak at shorter λ. The Sun peaks near 0.5 μm.", "الجسم الأسخن منحناه أعلى وقمته عند λ أقصر؛ قمة الشمس قرب ٠٫٥ ميكرون."]],
      [190, 165, ["Falls at both ends", "تقل عند الطرفين"], ["Intensity tends to zero at very long and very short λ; classical physics failed here.", "تقترب الشدة من الصفر عند الأطوال الطويلة والقصيرة جدًا، وهنا عجزت الفيزياء الكلاسيكية."]],
      [240, 50, ["Photon hν", "فوتون hν"], ["Each photon gives all its energy to one electron.", "كل فوتون يعطي طاقته كلها لإلكترون واحد."]],
      [278, 120, ["Work function", "دالة الشغل"], ["E_w = hν_c: below ν_c no electrons, however bright the light.", "E_w = hν_c: تحت التردد الحرج لا إلكترونات مهما زادت الشدة."]],
      [330, 100, ["Photoelectron", "إلكترون ضوئي"], ["Its KE = hν − E_w depends on frequency, not intensity.", "طاقة حركته hν − E_w تتوقف على التردد لا على الشدة."]]]
  };
  D.sec3phyu2l2 = {
    title: ["Compton scattering", "تشتت كومتون"],
    svg: function () {
      var s = arrowDef("s3b2", "#7c3aed");
      s += '<path d="M20 120 ' + (function () { var p = ""; for (var x = 0; x <= 150; x += 3) p += "L" + (20 + x) + " " + (120 - 12 * Math.sin(x / 8)).toFixed(1) + " "; return p; })() + '" fill="none" stroke="#7c3aed" stroke-width="3"/>' + tx(80, 95, t("photon λ", "فوتون λ"), 'style="fill:#7c3aed"', 11);
      s += '<circle cx="190" cy="120" r="10" fill="#2563eb"/>' + tx(190, 150, "e⁻", mut, 12);
      s += '<path d="M200 115 ' + (function () { var p = ""; for (var k = 0; k <= 150; k += 3) { var x = 200 + k * 0.85, y = 115 - k * 0.5 - 10 * Math.sin(k / 12); p += "L" + x.toFixed(1) + " " + y.toFixed(1) + " "; } return p; })() + '" fill="none" stroke="#a855f7" stroke-width="3"/>' + tx(345, 30, t("longer λ′", "λ′ أطول"), 'style="fill:#a855f7"', 11);
      s += '<line x1="200" y1="128" x2="320" y2="200" stroke="#2563eb" stroke-width="3" marker-end="url(#s3b2)"/>' + tx(330, 220, t("faster electron", "إلكترون أسرع"), mut, 11);
      s += tx(100, 210, "p = h/λ ,  λ = h/mv", mut, 12);
      return wrap(s);
    },
    spots: [[80, 120, ["Incident photon", "الفوتون الساقط"], ["An X-ray photon with momentum p = h/λ, like a billiard ball.", "فوتون أشعة سينية كمية حركته h/λ مثل كرة بلياردو."]],
      [190, 120, ["Free electron", "إلكترون حر"], ["Light and small, so the tiny photon force can knock it.", "خفيف وصغير، فتقذفه قوة الفوتون الضئيلة."]],
      [300, 60, ["Scattered photon", "الفوتون المشتت"], ["Lower frequency, longer wavelength, new direction: it lost energy.", "تردد أقل وطول موجي أطول واتجاه جديد: فقد طاقة."]],
      [300, 185, ["Recoiling electron", "الإلكترون المرتد"], ["It gains exactly the energy and momentum the photon lost.", "يكتسب بالضبط الطاقة وكمية الحركة التي فقدها الفوتون."]],
      [100, 210, ["De Broglie", "دي برولي"], ["The same h links waves and particles: λ = h/(mv).", "نفس الثابت h يربط الموجات بالجسيمات: λ = h/(mv)."]]]
  };
  D.sec3phyu2l3 = {
    title: ["Energy levels of hydrogen", "مستويات الطاقة في ذرة الهيدروجين"],
    svg: function () {
      var s = arrowDef("s3b3a", "#7c3aed") + arrowDef("s3b3b", "#ef4444") + arrowDef("s3b3c", "#b45309");
      var L = [[1, -13.6], [2, -3.4], [3, -1.51], [4, -0.85], [5, -0.54]];
      function y(e) { return 30 + (-e) / 13.6 * 180 * 0.15 + (e < -10 ? 140 : 0); }
      L.forEach(function (l) { var yy = l[0] === 1 ? 210 : 30 + (l[0] === 2 ? 120 : l[0] === 3 ? 70 : l[0] === 4 ? 45 : 32); s += ln(60, yy, 300, yy, "var(--ink)", 2) + tx(40, yy + 4, "n=" + l[0], mut, 10) + tx(340, yy + 4, l[1] + " eV", mut, 10); });
      s += '<line x1="100" y1="100" x2="100" y2="205" stroke="#7c3aed" stroke-width="3" marker-end="url(#s3b3a)"/>' + tx(100, 230, "Lyman", 'style="fill:#7c3aed"', 10);
      s += '<line x1="180" y1="100" x2="180" y2="146" stroke="#ef4444" stroke-width="3" marker-end="url(#s3b3b)"/>' + tx(180, 165, "Balmer 656 nm", 'style="fill:#ef4444"', 10);
      s += '<line x1="260" y1="75" x2="260" y2="96" stroke="#b45309" stroke-width="3" marker-end="url(#s3b3c)"/>' + tx(262, 120, "Paschen", 'style="fill:#b45309"', 10);
      return wrap(s);
    },
    spots: [[180, 210, ["Ground state", "المستوى الأرضي"], ["E₁ = −13.6 eV; 13.6 eV is needed to ionize the atom.", "E₁ = −١٣٫٦ إلكترون فولت، ويلزم ١٣٫٦ إلكترون فولت لتأين الذرة."]],
      [100, 160, ["Lyman series", "متسلسلة ليمان"], ["Drops to n = 1: large ΔE, ultraviolet.", "الهبوط إلى n = ١: فرق طاقة كبير، فوق بنفسجي."]],
      [180, 125, ["Balmer series", "متسلسلة بالمر"], ["Drops to n = 2: visible lines, e.g. 3→2 red at 656 nm.", "الهبوط إلى n = ٢: خطوط مرئية، مثل ٣←٢ أحمر عند ٦٥٦ نانومتر."]],
      [260, 86, ["Paschen series", "متسلسلة باشن"], ["Drops to n = 3: infrared.", "الهبوط إلى n = ٣: تحت أحمر."]],
      [300, 40, ["Levels crowd together", "تتقارب المستويات"], ["E_n = −13.6/n² approaches 0 (free electron) as n grows.", "E_n = −١٣٫٦/n² تقترب من الصفر (إلكترون حر) بزيادة n."]]]
  };
  D.sec3phyu2l4 = {
    title: ["Inside a gas laser", "داخل ليزر غازي"],
    svg: function () {
      var s = arrowDef("s3b4", "#ef4444");
      s += '<rect x="60" y="80" width="280" height="80" rx="30" fill="var(--bg-2)" stroke="var(--muted)" stroke-width="2"/>';
      s += '<rect x="40" y="70" width="12" height="100" fill="#64748b"/><rect x="348" y="70" width="12" height="100" fill="#94a3b8" opacity=".6"/>';
      for (var i = 0; i < 12; i++) s += '<circle cx="' + (85 + i * 22) + '" cy="' + (100 + (i % 3) * 20) + '" r="6" fill="' + (i % 4 === 0 ? "#60a5fa" : "#f97316") + '"/>';
      s += '<line x1="80" y1="120" x2="330" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>' + '<line x1="362" y1="120" x2="395" y2="120" stroke="#ef4444" stroke-width="5" marker-end="url(#s3b4)"/>';
      s += ln(120, 160, 120, 200, "var(--muted)") + ln(280, 160, 280, 200, "var(--muted)") + ln(120, 200, 280, 200, "var(--muted)") + tx(200, 222, t("pump (discharge)", "الضخ (تفريغ كهربي)"), mut, 11);
      s += tx(46, 60, "100%", mut, 10) + tx(354, 60, "98%", mut, 10);
      return wrap(s);
    },
    spots: [[46, 120, ["Full mirror", "مرآة عاكسة"], ["Reflects the photons back into the tube.", "تعكس الفوتونات إلى داخل الأنبوبة."]],
      [354, 120, ["Semi-transparent mirror", "مرآة نصف شفافة"], ["Lets a small part out as the laser beam.", "تسمح بخروج جزء صغير كشعاع ليزر."]],
      [150, 100, ["Excited atoms", "ذرات مثارة"], ["Orange atoms are in the metastable level: population inversion.", "الذرات البرتقالية في المستوى شبه المستقر: إسكان معكوس."]],
      [200, 120, ["Stimulated emission", "الانبعاث المستحث"], ["Each passing photon makes an excited atom emit an identical photon.", "كل فوتون مار يجعل ذرة مثارة تشع فوتونًا مماثلًا."]],
      [200, 200, ["Pumping", "الضخ"], ["Electrical energy excites helium, which excites neon by collision.", "الطاقة الكهربية تثير الهيليوم الذي يثير النيون بالتصادم."]]]
  };
  D.sec3phyu2l5 = {
    title: ["A pn junction", "الوصلة الثنائية pn"],
    svg: function () {
      var s = '<rect x="40" y="60" width="150" height="100" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><rect x="210" y="60" width="150" height="100" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>';
      s += '<rect x="170" y="60" width="60" height="100" fill="var(--card)" stroke="var(--muted)" stroke-dasharray="4 3"/>';
      for (var i = 0; i < 10; i++) { s += '<circle cx="' + (55 + (i % 5) * 24) + '" cy="' + (80 + Math.floor(i / 5) * 40) + '" r="7" fill="none" stroke="#ef4444" stroke-width="2"/>'; s += '<circle cx="' + (250 + (i % 5) * 24) + '" cy="' + (80 + Math.floor(i / 5) * 40) + '" r="5" fill="#2563eb"/>'; }
      for (var j = 0; j < 3; j++) { s += tx(185, 85 + j * 28, "−", 'style="fill:#ef4444"', 16) + tx(215, 85 + j * 28, "+", 'style="fill:#2563eb"', 16); }
      s += tx(115, 185, t("p-type (holes)", "النوع p (فجوات)"), mut, 11) + tx(285, 185, t("n-type (electrons)", "النوع n (إلكترونات)"), mut, 11) + tx(200, 215, t("depletion region", "المنطقة الانتقالية"), mut, 11);
      return wrap(s);
    },
    spots: [[100, 80, ["Holes", "الفجوات"], ["Majority carriers in p-type, made by trivalent acceptors.", "الحاملات الأغلبية في النوع p، تكونها الشوائب الثلاثية المستقبلة."]],
      [300, 80, ["Free electrons", "الإلكترونات الحرة"], ["Majority carriers in n-type, given by pentavalent donors.", "الحاملات الأغلبية في النوع n، تعطيها الشوائب الخماسية المانحة."]],
      [185, 110, ["Negative acceptor ions", "أيونات مستقبلة سالبة"], ["Left uncovered on the p side after holes diffuse away.", "تنكشف في جانب p بعد انتشار الفجوات."]],
      [215, 110, ["Positive donor ions", "أيونات مانحة موجبة"], ["Left on the n side; the field points from + ions to − ions.", "تبقى في جانب n، والمجال من الأيونات الموجبة إلى السالبة."]],
      [200, 215, ["Depletion region", "المنطقة الانتقالية"], ["No free carriers; it narrows in forward bias and widens in reverse bias.", "لا حاملات حرة فيها، تضيق في الانحياز الأمامي وتتسع في العكسي."]]]
  };
  D.sec3phyu2l6 = {
    title: ["Transistor and logic gates", "الترانزستور والبوابات المنطقية"],
    svg: function () {
      var s = '<rect x="30" y="80" width="40" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><rect x="70" y="80" width="14" height="70" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><rect x="84" y="80" width="40" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>';
      s += tx(50, 70, "E", ink, 13) + tx(77, 70, "B", ink, 13) + tx(104, 70, "C", ink, 13) + tx(77, 180, "I_E = I_C + I_B", mut, 11);
      s += '<path d="M180 50 h25 a20 20 0 0 1 0 40 h-25 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + tx(200, 75, "AND", mut, 9);
      s += '<path d="M180 110 q15 20 0 40 q40 0 55 -20 q-15 -20 -55 -20 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + tx(205, 134, "OR", mut, 9);
      s += '<path d="M180 175 l35 18 l-35 18 z" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/><circle cx="219" cy="193" r="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + tx(195, 196, "NOT", mut, 8);
      s += tx(320, 70, "1·1 = 1", mut, 12) + tx(320, 134, "1 + 0 = 1", mut, 12) + tx(320, 196, "NOT 1 = 0", mut, 12);
      return wrap(s);
    },
    spots: [[77, 115, ["Thin base", "قاعدة رقيقة"], ["Few electrons recombine here, so α_e is close to 1 and β_e is large.", "قليل من الإلكترونات يتحد هنا، فتكون α_e قريبة من ١ و β_e كبيرة."]],
      [104, 115, ["Collector", "المجمع"], ["Collects most electrons from the emitter: I_C = α_e I_E.", "يجمع معظم إلكترونات الباعث: I_C = α_e I_E."]],
      [200, 70, ["AND gate", "بوابة AND"], ["Like two switches in series: output 1 only if both inputs are 1.", "مثل مفتاحين على التوالي: الخرج ١ فقط إذا كان المدخلان ١."]],
      [205, 130, ["OR gate", "بوابة OR"], ["Like two switches in parallel: any 1 gives 1.", "مثل مفتاحين على التوازي: أي ١ يعطي ١."]],
      [200, 193, ["NOT gate", "بوابة NOT"], ["A transistor switch: high input, low output.", "مفتاح ترانزستور: دخل عالٍ يعطي خرجًا منخفضًا."]]]
  };
})();

/* ---------- Sec 3 Physics live simulations (part 1, Unit 1): resistor network, closed circuit + Kirchhoff,
   magnetic field explorer, force/torque, meter builder, induction, dynamo + transformer, RLC resonance.
   Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var txt = K.txt;
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u(); return inp;
  }
  function showSl(b, i, on) { var l = b.querySelectorAll("label.sl")[i]; if (l) l.style.display = on ? "" : "none"; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sig(x, d) { return Number(Number(x).toPrecision(d || 3)); }
  var SUP = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  function sci(x, d) {
    d = d || 3; if (!isFinite(x)) return "∞"; if (x === 0) return n(0);
    var ex = Math.floor(Math.log10(Math.abs(x)));
    if (ex >= -2 && ex <= 4) return n(sig(x, d));
    var m = sig(x / Math.pow(10, ex), d); if (Math.abs(m) >= 10) { m = sig(m / 10, d); ex++; }
    return n(m) + " × 10" + String(ex).split("").map(function (c) { return SUP[c]; }).join("");
  }
  function meter(host) { var m = E.el("div", "meter"); host.appendChild(m); return function (parts) { m.innerHTML = parts.map(function (p) { return "<span>" + p + "</span>"; }).join(""); }; }
  function plen(p) { var s = 0; for (var i = 1; i < p.length; i++) s += Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); return s; }
  function along(p, d) {
    var tot = plen(p); if (tot <= 0) return p[0]; d = ((d % tot) + tot) % tot;
    for (var i = 1; i < p.length; i++) { var l = Math.hypot(p[i][0] - p[i - 1][0], p[i][1] - p[i - 1][1]); if (d <= l) { var f = l ? d / l : 0; return [p[i - 1][0] + (p[i][0] - p[i - 1][0]) * f, p[i - 1][1] + (p[i][1] - p[i - 1][1]) * f]; } d -= l; }
    return p[p.length - 1];
  }
  function poly(ctx, p, c, w) { ctx.strokeStyle = c; ctx.lineWidth = w || 3; ctx.beginPath(); p.forEach(function (q, i) { if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }); ctx.stroke(); }
  function dots(ctx, p, ph, gap, c) { var tot = plen(p); for (var d = 0; d < tot; d += gap) { var q = along(p, d + ph); K.dot(ctx, q[0], q[1], 3, c || "#facc15"); } }
  function resBox(ctx, x, y, w, h, lab, C) { ctx.fillStyle = "#fde68a"; K.rr(ctx, x - w / 2, y - h / 2, w, h, 4); ctx.fill(); ctx.strokeStyle = "#b45309"; ctx.lineWidth = 2; ctx.stroke(); txt(ctx, lab, x, y, { c: "#78350f", s: Math.max(10, Math.min(13, h * 0.6)) }); }
  function batt(ctx, x, y, vert, s, C) {
    ctx.fillStyle = C.card; ctx.fillRect(vert ? x - s : x - s * 0.4, vert ? y - s * 0.4 : y - s, vert ? 2 * s : s * 0.8, vert ? s * 0.8 : 2 * s);
    ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 4; ctx.beginPath();
    if (vert) { ctx.moveTo(x - s, y - s * 0.25); ctx.lineTo(x + s, y - s * 0.25); } else { ctx.moveTo(x - s * 0.25, y - s); ctx.lineTo(x - s * 0.25, y + s); } ctx.stroke();
    ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath();
    if (vert) { ctx.moveTo(x - s * 0.55, y + s * 0.25); ctx.lineTo(x + s * 0.55, y + s * 0.25); } else { ctx.moveTo(x + s * 0.25, y - s * 0.55); ctx.lineTo(x + s * 0.25, y + s * 0.55); } ctx.stroke();
  }
  function arrow(ctx, x1, y1, x2, y2, c, w) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 7 + (w || 3);
    ctx.strokeStyle = c; ctx.fillStyle = c; ctx.lineWidth = w || 3; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - h * Math.cos(a - 0.45), y2 - h * Math.sin(a - 0.45)); ctx.lineTo(x2 - h * Math.cos(a + 0.45), y2 - h * Math.sin(a + 0.45)); ctx.closePath(); ctx.fill();
  }
  function dial(ctx, cx, cy, r, f, C, labels, centreZero) {
    ctx.fillStyle = C.card; ctx.beginPath(); ctx.arc(cx, cy, r, Math.PI, 2 * Math.PI); ctx.closePath(); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
    for (var k = 0; k <= 10; k++) { var a = Math.PI + k / 10 * Math.PI; ctx.strokeStyle = C.muted; ctx.lineWidth = k % 5 ? 1 : 2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * r * 0.85, cy + Math.sin(a) * r * 0.85); ctx.lineTo(cx + Math.cos(a) * r * 0.97, cy + Math.sin(a) * r * 0.97); ctx.stroke(); }
    if (labels) labels.forEach(function (l) { var a = Math.PI + l[0] * Math.PI; txt(ctx, l[1], cx + Math.cos(a) * r * 0.7, cy + Math.sin(a) * r * 0.7, { c: C.muted, s: Math.max(9, r * 0.12) }); });
    var p = centreZero ? 0.5 + clamp(f, -1, 1) / 2 : clamp(f, 0, 1.03), ang = Math.PI + p * Math.PI;
    ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(ang) * r * 0.9, cy + Math.sin(ang) * r * 0.9); ctx.stroke(); K.dot(ctx, cx, cy, 5, C.ink);
  }
  E.s3pk = { hint: hint, box: box, sl: sl, showSl: showSl, clamp: clamp, sig: sig, sci: sci, meter: meter, along: along, plen: plen, poly: poly, dots: dots, arrow: arrow, dial: dial, resBox: resBox };

  /* =========================================================
     1. sec3phy_resnet - series / parallel resistor bench with live currents
     ========================================================= */
  L.sec3phy_resnet = function (host, cfg, done) {
    host.innerHTML = hint(t("Switch between series and parallel, set the battery and the three resistors, and watch the electrons and the meters.",
      "بدّل بين التوالي والتوازي، واضبط البطارية والمقاومات الثلاث، وراقب الإلكترونات وأجهزة القياس.")) + '<div class="seg" id="s3rm"></div>';
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider(t("Battery", "البطارية"), 5, 60, 5, 30, "V") + L._slider("R₁", 5, 100, 5, 20, "Ω") + L._slider("R₂", 5, 100, 5, 40, "Ω") + L._slider("R₃", 5, 100, 5, 60, "Ω"));
    var out = meter(host);
    var tick = L._goals(host, [t("Book example in series: 25, 70, 85 Ω on 45 V gives I = 0.25 A.", "مثال الكتاب على التوالي: ٢٥ و٧٠ و٨٥ أوم مع ٤٥ فولت تعطي I = ٠٫٢٥ أمبير."),
      t("Same resistors in parallel on 45 V: total current 2.97 A.", "نفس المقاومات على التوازي مع ٤٥ فولت: التيار الكلي ٢٫٩٧ أمبير."),
      t("In parallel, make the equivalent resistance exactly 10 Ω.", "على التوازي اجعل المقاومة المكافئة ١٠ أوم بالضبط."),
      t("In series, make the voltage across R₂ exactly half the battery voltage.", "على التوالي اجعل فرق الجهد على R₂ نصف جهد البطارية بالضبط.")], done);
    var mode = "s", V = 30, R = [20, 40, 60], ph = 0, phb = [0, 0, 0];
    K.seg(host, "#s3rm", [["s", t("Series", "توالي")], ["p", t("Parallel", "توازي")]], mode, function (v) { mode = v; upd(); });
    sl(c, 0, function (v) { return n(v) + " V"; }, function (v) { V = v; upd(); });
    [1, 2, 3].forEach(function (i) { sl(c, i, function (v) { return n(v) + " Ω"; }, function (v) { R[i - 1] = v; upd(); }); });
    var Req, I, Ii;
    function upd() {
      if (mode === "s") { Req = R[0] + R[1] + R[2]; I = V / Req; Ii = [I, I, I]; }
      else { Req = 1 / (1 / R[0] + 1 / R[1] + 1 / R[2]); I = V / Req; Ii = R.map(function (r) { return V / r; }); }
      var Vi = mode === "s" ? R.map(function (r) { return I * r; }) : [V, V, V];
      out(["R = " + n(sig(Req, 4)) + " Ω", "I = " + n(sig(I, 4)) + " A"].concat([0, 1, 2].map(function (k) { return "R" + "₁₂₃"[k] + ": " + n(sig(Ii[k], 3)) + " A, " + n(sig(Vi[k], 4)) + " V"; })));
      if (mode === "s" && Math.abs(I - 0.25) < 0.0005 && V === 45 && R[0] === 25 && R[1] === 70 && R[2] === 85) tick(0);
      if (mode === "p" && V === 45 && Math.abs(I - 2.972) < 0.01) tick(1);
      if (mode === "p" && Math.abs(Req - 10) < 0.05) tick(2);
      if (mode === "s" && Math.abs(Vi[1] - V / 2) < 0.01) tick(3);
    }
    upd();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, x0 = W * 0.08, x1 = W * 0.92, yt = H * 0.14, yb = H * 0.86, sp = 60;
      ctx.clearRect(0, 0, W, H);
      if (mode === "s") {
        var loop = [[x0, yb], [x0, yt], [x1, yt], [x1, yb], [x0, yb]];
        poly(ctx, loop, C.muted, 3); ph -= Math.min(I, 4) * sp * dt; dots(ctx, loop, ph, 26);
        for (var k = 0; k < 3; k++) { var xr = x0 + (x1 - x0) * (0.22 + k * 0.28); resBox(ctx, xr, yt, Math.min(90, W * 0.15), 26, "R" + "₁₂₃"[k] + " " + n(R[k]) + "Ω", C); txt(ctx, n(sig(I * R[k], 3)) + " V", xr, yt + 32, { c: C.muted, s: 12 }); }
      } else {
        var xa = W * 0.32, xb = W * 0.78, yr = H * 0.93, ys = [H * 0.14, H * 0.42, H * 0.7];
        var main = [[xb, yr], [x0, yr], [x0, ys[0]], [xa, ys[0]]];
        poly(ctx, main, C.muted, 3); poly(ctx, [[xa, ys[0]], [xa, ys[2]]], C.muted, 3); poly(ctx, [[xb, ys[0]], [xb, yr]], C.muted, 3);
        ph -= Math.min(I, 6) * sp * 0.5 * dt; dots(ctx, main, -ph, 26);
        for (var j = 0; j < 3; j++) {
          var br = [[xa, ys[j]], [xb, ys[j]]]; poly(ctx, br, C.muted, 3); phb[j] += Math.min(Ii[j], 4) * sp * dt; dots(ctx, br, phb[j], 26);
          resBox(ctx, (xa + xb) / 2, ys[j], Math.min(100, W * 0.17), 26, "R" + "₁₂₃"[j] + " " + n(R[j]) + "Ω", C);
          txt(ctx, n(sig(Ii[j], 3)) + " A", (xa + xb) / 2, ys[j] + 26, { c: "#2563eb", s: 12 });
        }
      }
      batt(ctx, x0, H * 0.5, true, 16, C); txt(ctx, n(V) + " V", x0 + 34, H * 0.5, { c: C.ink, s: 13 });
      txt(ctx, t("I total = ", "التيار الكلي = ") + n(sig(I, 4)) + " A", W * 0.55, H * 0.97 - (mode === "p" ? 0 : 6), { c: C.ink, s: 13 });
    });
  };

  /* =========================================================
     2. sec3phy_kirch - closed circuit with internal resistance + two-loop Kirchhoff solver
     ========================================================= */
  L.sec3phy_kirch = function (host, cfg, done) {
    host.innerHTML = hint(t("Closed circuit: change the emf, internal resistance r and external R; open the switch to read the emf. Two loops: change the right battery and watch the three branch currents.",
      "الدائرة المغلقة: غيّر القوة الدافعة والمقاومة الداخلية r والخارجية R، وافتح المفتاح لتقرأ القوة الدافعة. المساران: غيّر البطارية اليمنى وراقب تيارات الفروع الثلاثة.")) + '<div class="seg" id="s3km"></div>';
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider("V_B", 1, 12, 0.5, 2, "V") + L._slider("r", 0, 2, 0.1, 1, "Ω") + L._slider("R", 0.5, 20, 0.1, 6, "Ω") + L._slider(t("Right battery V₂", "البطارية اليمنى V₂"), 0, 10, 0.1, 2, "V") +
      '<div class="btn-row"><button type="button" class="btn sm tg on" id="s3ksw">🔌 ' + t("Switch closed", "المفتاح مغلق") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Book example: 2 V cell, r = 0.1 Ω: find the R that gives I = 0.5 A.", "مثال الكتاب: عمود ٢ فولت و r = ٠٫١ أوم: أوجد R التي تعطي I = ٠٫٥ أمبير."),
      t("Open the switch: the voltmeter now reads the emf.", "افتح المفتاح: يقرأ الفولتميتر الآن القوة الدافعة."),
      t("Two loops: make the current in the right branch zero.", "المساران: اجعل التيار في الفرع الأيمن صفرًا."),
      t("Two loops: make I₂ flow in the assumed (upward) direction.", "المساران: اجعل I₂ يسري في الاتجاه المفترض (لأعلى).")], done);
    var mode = "c", VB = 2, r = 1, R = 6, E2 = 2, closed = true, ph = 0, p1 = 0, p2 = 0, p3 = 0, sw = c.querySelector("#s3ksw");
    function vis() { [0, 1, 2].forEach(function (i) { showSl(c, i, mode === "c"); }); showSl(c, 3, mode === "k"); sw.style.display = mode === "c" ? "" : "none"; }
    K.seg(host, "#s3km", [["c", t("Closed circuit", "دائرة مغلقة")], ["k", t("Two loops (Kirchhoff)", "مساران (كيرتشوف)")]], mode, function (v) { mode = v; vis(); upd(); });
    sl(c, 0, function (v) { return n(v) + " V"; }, function (v) { VB = v; upd(); });
    sl(c, 1, function (v) { return n(v) + " Ω"; }, function (v) { r = v; upd(); });
    sl(c, 2, function (v) { return n(v) + " Ω"; }, function (v) { R = v; upd(); });
    sl(c, 3, function (v) { return n(v) + " V"; }, function (v) { E2 = v; upd(); });
    sw.onclick = function () { closed = !closed; sw.classList.toggle("on", closed); sw.innerHTML = closed ? "🔌 " + t("Switch closed", "المفتاح مغلق") : "⭕ " + t("Switch open", "المفتاح مفتوح"); upd(); };
    var I = 0, Vt = 0, I1 = 0, I2 = 0, I3 = 0;
    function solve() { I3 = (3 + E2 / 3) / (1 + 2.5 + 5 / 3); I1 = (6 - 5 * I3) / 2; I2 = (E2 - 5 * I3) / 3; }
    function upd() {
      if (mode === "c") {
        I = closed ? VB / (R + r) : 0; Vt = VB - I * r;
        out(["I = " + n(sig(I, 3)) + " A", t("Terminal V = ", "فرق جهد القطبين = ") + n(sig(Vt, 3)) + " V", "Ir = " + n(sig(I * r, 3)) + " V", "IR = " + n(sig(I * R, 3)) + " V"]);
        if (closed && VB === 2 && Math.abs(r - 0.1) < 1e-9 && Math.abs(I - 0.5) < 0.003) tick(0);
        if (!closed) tick(1);
      } else {
        solve();
        out(["I₁ = " + n(sig(I1, 3)) + " A", "I₂ = " + n(sig(I2, 3)) + " A", "I₃ = " + n(sig(I3, 3)) + " A", "I₁ + I₂ = " + n(sig(I1 + I2, 3)) + " A"]);
        if (Math.abs(I2) < 0.01) tick(2);
        if (I2 > 0.01) tick(3);
      }
    }
    vis(); upd();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "c") {
        var x0 = W * 0.12, x1 = W * 0.62, yt = H * 0.2, yb = H * 0.82;
        var loop = [[x0, yb], [x0, yt], [x1, yt], [x1, yb], [x0, yb]];
        poly(ctx, loop, C.muted, 3);
        if (!closed) { ctx.fillStyle = C.card; ctx.fillRect((x0 + x1) / 2 - 22, yt - 8, 44, 16); ctx.strokeStyle = C.ink; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo((x0 + x1) / 2 - 22, yt); ctx.lineTo((x0 + x1) / 2 + 18, yt - 22); ctx.stroke(); }
        ph -= I * 50 * dt; if (closed) dots(ctx, loop, ph, 24);
        batt(ctx, x0, H * 0.42, true, 16, C); resBox(ctx, x0, H * 0.62, 30, 34, "r", C);
        txt(ctx, n(VB) + " V", x0 + 40, H * 0.42, { c: C.ink, s: 12 });
        resBox(ctx, x1, H * 0.5, 34, 60, "R", C);
        K.dot(ctx, (x0 + x1) / 2, yb, 16, C.card, "#2563eb"); txt(ctx, "A", (x0 + x1) / 2, yb, { c: "#2563eb", s: 14 });
        // voltmeter across the source
        poly(ctx, [[x0, H * 0.3], [x0 - W * 0.06, H * 0.3], [x0 - W * 0.06, H * 0.72], [x0, H * 0.72]], "#7c3aed", 1.5);
        K.dot(ctx, x0 - W * 0.06, H * 0.51, 14, C.card, "#7c3aed"); txt(ctx, "V", x0 - W * 0.06, H * 0.51, { c: "#7c3aed", s: 13 });
        // energy bar: emf = Ir + IR
        var bx = W * 0.72, bw = W * 0.2, by = H * 0.18, bh = H * 0.64, sc = bh / 12;
        txt(ctx, "V_B = Ir + IR", bx + bw / 2, by - 12, { c: C.ink, s: 12 });
        ctx.strokeStyle = C.line; ctx.strokeRect(bx, by, bw, bh);
        var hR = I * R * sc, hr = I * r * sc;
        ctx.fillStyle = "#22c55e"; ctx.fillRect(bx, by + bh - hR, bw, hR); ctx.fillStyle = "#ef4444"; ctx.fillRect(bx, by + bh - hR - hr, bw, hr);
        ctx.strokeStyle = C.ink; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(bx - 6, by + bh - VB * sc); ctx.lineTo(bx + bw + 6, by + bh - VB * sc); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, "IR", bx + bw / 2, by + bh - Math.max(10, hR / 2), { c: "#fff", s: 11 }); if (hr > 14) txt(ctx, "Ir", bx + bw / 2, by + bh - hR - hr / 2, { c: "#fff", s: 11 });
      } else {
        var xl = W * 0.15, xm = W * 0.45, xr = W * 0.75, y0 = H * 0.15, y1 = H * 0.85;
        poly(ctx, [[xl, y0], [xr, y0]], C.muted, 3); poly(ctx, [[xl, y1], [xr, y1]], C.muted, 3);
        [[xl, I1, -1], [xm, I3, 1], [xr, I2, -1]].forEach(function (b, k) {
          var path = [[b[0], y1], [b[0], y0]]; poly(ctx, path, C.muted, 3);
          var sgn = b[1] * b[2]; if (k === 0) p1 -= sgn * 50 * dt * Math.min(Math.abs(b[1]), 3) / (Math.abs(b[1]) || 1); if (k === 1) p2 -= sgn * 50 * dt * Math.min(Math.abs(b[1]), 3) / (Math.abs(b[1]) || 1); if (k === 2) p3 -= sgn * 50 * dt * Math.min(Math.abs(b[1]), 3) / (Math.abs(b[1]) || 1);
          if (Math.abs(b[1]) > 0.005) dots(ctx, path, [p1, p2, p3][k] * Math.abs(b[1]), 24);
        });
        batt(ctx, xl, H * 0.35, true, 15, C); txt(ctx, "6 V", xl - 30, H * 0.35, { c: C.ink, s: 12 }); resBox(ctx, xl, H * 0.62, 30, 40, "2Ω", C);
        resBox(ctx, xm, H * 0.5, 30, 50, "5Ω", C);
        batt(ctx, xr, H * 0.35, true, 15, C); txt(ctx, n(E2) + " V", xr + 34, H * 0.35, { c: C.ink, s: 12 }); resBox(ctx, xr, H * 0.62, 30, 40, "3Ω", C);
        [[xl, I1, "I₁", -1], [xm, I3, "I₃", 1], [xr, I2, "I₂", -1]].forEach(function (b) {
          var up = b[1] * b[3] < 0, col = b[1] >= 0 ? "#2563eb" : "#ef4444";
          if (Math.abs(b[1]) > 0.005) arrow(ctx, b[0] + 26, up ? H * 0.82 - 30 : H * 0.18 + 30, b[0] + 26, up ? H * 0.18 + 60 : H * 0.82 - 60, col, 3);
          txt(ctx, b[2] + " = " + n(sig(b[1], 3)) + " A", b[0] + 30, H * 0.94, { c: col, s: 12 });
        });
        K.dot(ctx, xm, y0, 6, "#7c3aed"); txt(ctx, t("node: I₃ = I₁ + I₂", "نقطة التفرع: I₃ = I₁ + I₂"), xm, y0 - 10, { c: C.muted, s: 11 });
      }
    });
  };

  /* =========================================================
     3. sec3phy_bfield - magnetic field of a wire / loop / solenoid with a draggable probe
     ========================================================= */
  L.sec3phy_bfield = function (host, cfg, done) {
    host.innerHTML = hint(t("Wire: drag the probe to measure B at different distances and reverse the current. Loop and solenoid: change the current, turns and size.",
      "السلك: اسحب المجس لتقيس B على أبعاد مختلفة واعكس التيار. الملف الدائري والحلزوني: غيّر التيار وعدد اللفات والأبعاد.")) + '<div class="seg" id="s3bm"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Current I", "التيار I"), 0, 20, 0.1, 5, "A") + L._slider(t("Turns N", "عدد اللفات N"), 1, 100, 1, 10, "") + L._slider(t("Radius r", "نصف القطر r"), 2, 50, 1, 11, "cm") +
      '<div class="btn-row"><button type="button" class="btn sm ghost" id="s3brev">⇅ ' + t("Reverse the current", "اعكس التيار") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Wire: get B = 2 × 10⁻⁵ T at the probe (book: 10 A at 10 cm).", "السلك: احصل على B = ٢ × ١٠⁻⁵ تسلا عند المجس (الكتاب: ١٠ أمبير على بعد ١٠ سم)."),
      t("Wire: reverse the current and watch the compasses flip.", "السلك: اعكس التيار وشاهد البوصلات تنقلب."),
      t("Loop: reach the book value 1.6 × 10⁻⁴ T (20 turns, 1.4 A, r = 11 cm).", "الملف الدائري: صل إلى قيمة الكتاب ١٫٦ × ١٠⁻⁴ تسلا (٢٠ لفة و١٫٤ أمبير و r = ١١ سم)."),
      t("Solenoid: reach the book value 3.52 × 10⁻³ T (800 turns, 0.7 A, 20 cm).", "الملف الحلزوني: صل إلى قيمة الكتاب ٣٫٥٢ × ١٠⁻³ تسلا (٨٠٠ لفة و٠٫٧ أمبير وطول ٢٠ سم).")], done);
    var mode = "w", I = 5, N = 20, rr = 11, dir = 1, probe = { x: 0.8, y: 0.62 }, drag = false, ang = 0, mu = 4 * Math.PI * 1e-7;
    function vis() {
      showSl(c, 1, mode !== "w"); showSl(c, 2, mode !== "w");
      var ni = c.querySelectorAll('input[type="range"]')[1], want = mode === "s" ? [100, 1000, 50, 400] : [1, 100, 1, 10];
      if (Number(ni.max) !== want[1]) { ni.min = want[0]; ni.max = want[1]; ni.step = want[2]; ni.value = want[3]; ni.dispatchEvent(new Event("input")); }
      var lb = c.querySelectorAll("label.sl span")[2]; if (lb) lb.firstChild.nodeValue = (mode === "s" ? t("Length ℓ", "الطول ℓ") : t("Radius r", "نصف القطر r")) + " "; }
    K.seg(host, "#s3bm", [["w", t("Straight wire", "سلك مستقيم")], ["l", t("Circular loop", "ملف دائري")], ["s", t("Solenoid", "ملف حلزوني")]], mode, function (v) { mode = v; vis(); });
    sl(c, 0, function (v) { return n(v) + " A"; }, function (v) { I = v; });
    sl(c, 1, function (v) { return n(v); }, function (v) { N = v; });
    sl(c, 2, function (v) { return n(v) + " cm"; }, function (v) { rr = v; });
    c.querySelector("#s3brev").onclick = function () { dir = -dir; if (mode === "w" && I > 0) tick(1); };
    vis();
    function geo() { var W = S.W, H = S.H, s = Math.min(W * 0.62, H) * 0.46; return { cx: W * 0.33, cy: H * 0.5, s: s }; } // s px = 25 cm
    S.drag({
      down: function (p) { if (mode !== "w") return false; var g = geo(), px = g.cx + (probe.x - 0.5) * 2 * g.s, py = g.cy + (probe.y - 0.5) * 2 * g.s; if (Math.hypot(p.x - px, p.y - py) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); probe.x = clamp(0.5 + (p.x - g.cx) / (2 * g.s), 0, 1); probe.y = clamp(0.5 + (p.y - g.cy) / (2 * g.s), 0, 1); },
      up: function () { drag = false; },
      hover: function (p) { if (mode !== "w") return false; var g = geo(), px = g.cx + (probe.x - 0.5) * 2 * g.s, py = g.cy + (probe.y - 0.5) * 2 * g.s; return Math.hypot(p.x - px, p.y - py) < 30; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), B;
      ctx.clearRect(0, 0, W, H); ang += dt * dir * Math.min(I, 10) * 0.25;
      if (mode === "w") {
        var dx = (probe.x - 0.5) * 0.5, dy = (probe.y - 0.5) * 0.5, d = Math.max(0.005, Math.hypot(dx, dy)); B = mu * I / (2 * Math.PI * d);
        ctx.fillStyle = C.bg; ctx.fillRect(g.cx - g.s, g.cy - g.s, 2 * g.s, 2 * g.s);
        var nring = Math.round(2 + I / 2.5);
        for (var k = 1; k <= nring; k++) { var rad = g.s * Math.pow(k / nring, 1.6) * 0.98; ctx.strokeStyle = "rgba(59,130,246,.55)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(g.cx, g.cy, rad, 0, 7); ctx.stroke(); }
        for (var gx = -2; gx <= 2; gx++) for (var gy = -2; gy <= 2; gy++) {
          if (!gx && !gy) continue; var px0 = g.cx + gx * g.s * 0.4, py0 = g.cy + gy * g.s * 0.4, a = Math.atan2(gy, gx) - dir * Math.PI / 2, len = 11;
          if (I < 0.05) a = -Math.PI / 2;
          ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(px0, py0); ctx.lineTo(px0 + Math.cos(a) * len, py0 + Math.sin(a) * len); ctx.stroke();
          ctx.strokeStyle = "#94a3b8"; ctx.beginPath(); ctx.moveTo(px0, py0); ctx.lineTo(px0 - Math.cos(a) * len, py0 - Math.sin(a) * len); ctx.stroke();
        }
        K.dot(ctx, g.cx, g.cy, 12, C.card, C.ink);
        if (dir > 0) K.dot(ctx, g.cx, g.cy, 4, C.ink); else { ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(g.cx - 6, g.cy - 6); ctx.lineTo(g.cx + 6, g.cy + 6); ctx.moveTo(g.cx + 6, g.cy - 6); ctx.lineTo(g.cx - 6, g.cy + 6); ctx.stroke(); }
        var ppx = g.cx + (probe.x - 0.5) * 2 * g.s, ppy = g.cy + (probe.y - 0.5) * 2 * g.s;
        ctx.strokeStyle = "#7c3aed"; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(g.cx, g.cy); ctx.lineTo(ppx, ppy); ctx.stroke(); ctx.setLineDash([]);
        K.dot(ctx, ppx, ppy, 11, "#a855f7", "#fff"); txt(ctx, "d = " + n(sig(d * 100, 3)) + " cm", ppx, ppy - 20, { c: "#7c3aed", s: 12 });
        txt(ctx, dir > 0 ? t("current out of the page ⊙", "التيار خارج من الصفحة ⊙") : t("current into the page ⊗", "التيار داخل الصفحة ⊗"), g.cx, g.cy + g.s + 14, { c: C.muted, s: 12 });
        if (Math.abs(B - 2e-5) / 2e-5 < 0.03) tick(0);
        out(["B = " + sci(B) + " T", "d = " + n(sig(d * 100, 3)) + " cm", "B = μI / 2πd"]);
      } else if (mode === "l") {
        B = mu * N * I / (2 * rr / 100);
        var ry = g.s * (0.3 + rr / 50 * 0.6), rx = ry * 0.28;
        var lines = Math.round(clamp(Math.log10(B * 1e6 + 1) * 3, 0, 12));
        for (var q = 0; q < lines; q++) { var off = (q - (lines - 1) / 2) * ry * 1.4 / Math.max(lines, 1); ctx.strokeStyle = "rgba(59,130,246,.6)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.ellipse(g.cx, g.cy + off * 0.4, g.s * 0.9 * (1 - Math.abs(off) / (ry * 1.2)), Math.abs(off) * 0.8 + 3, 0, 0, 7); ctx.stroke(); }
        arrow(ctx, g.cx - g.s * 0.9 * dir, g.cy, g.cx + g.s * 0.9 * dir, g.cy, "#3b82f6", 2);
        ctx.strokeStyle = "#b45309"; ctx.lineWidth = Math.min(12, 3 + N / 10); ctx.beginPath(); ctx.ellipse(g.cx, g.cy, rx, ry, 0, 0, 7); ctx.stroke();
        txt(ctx, dir > 0 ? "S" : "N", g.cx - rx - 22, g.cy - ry * 0.5, { c: dir > 0 ? "#2563eb" : "#ef4444", s: 18 }); txt(ctx, dir > 0 ? "N" : "S", g.cx + rx + 22, g.cy - ry * 0.5, { c: dir > 0 ? "#ef4444" : "#2563eb", s: 18 });
        var ea = ang; K.dot(ctx, g.cx + Math.sin(ea) * rx, g.cy - Math.cos(ea) * ry, 4, "#facc15"); K.dot(ctx, g.cx + Math.sin(ea + 3.14) * rx, g.cy - Math.cos(ea + 3.14) * ry, 4, "#facc15");
        if (Math.abs(B - 1.6e-4) / 1.6e-4 < 0.03) tick(2);
        out(["B = " + sci(B) + " T", "N = " + n(N), "r = " + n(rr) + " cm", "B = μNI / 2r"]);
      } else {
        B = mu * N * I / (rr / 100);
        var len2 = g.s * (0.5 + rr / 50 * 1.2), x0 = g.cx - len2 / 2, h2 = g.s * 0.5, turns = Math.max(4, Math.min(40, Math.round(N / 25)));
        var nl = Math.round(clamp(Math.log10(B * 1e6 + 1) * 2.4, 0, 9));
        for (var m2 = 0; m2 < nl; m2++) { var yy = g.cy - h2 * 0.7 + m2 * h2 * 1.4 / Math.max(nl - 1, 1); ctx.strokeStyle = "rgba(59,130,246,.6)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x0 - 20, yy); ctx.lineTo(x0 + len2 + 20, yy); ctx.stroke(); }
        if (nl) arrow(ctx, g.cx - 30 * dir, g.cy, g.cx + 30 * dir, g.cy, "#3b82f6", 3);
        for (var tt = 0; tt < turns; tt++) { var xx = x0 + tt * len2 / (turns - 1); ctx.strokeStyle = "#b45309"; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(xx, g.cy, 5, h2, 0, 0, 7); ctx.stroke(); }
        txt(ctx, dir > 0 ? "S" : "N", x0 - 36, g.cy, { c: dir > 0 ? "#2563eb" : "#ef4444", s: 20 }); txt(ctx, dir > 0 ? "N" : "S", x0 + len2 + 36, g.cy, { c: dir > 0 ? "#ef4444" : "#2563eb", s: 20 });
        txt(ctx, "ℓ = " + n(rr) + " cm", g.cx, g.cy + h2 + 22, { c: C.muted, s: 12 });
        if (Math.abs(B - 3.52e-3) / 3.52e-3 < 0.02) tick(3);
        out(["B = " + sci(B) + " T", "N = " + n(N), "ℓ = " + n(rr) + " cm", "B = μNI / ℓ"]);
      }
      // B gauge
      var bx = W * 0.72, bw = W * 0.22, lg = clamp((Math.log10(Math.max(B, 1e-8)) + 8) / 7, 0, 1);
      txt(ctx, t("Flux density", "كثافة الفيض"), bx + bw / 2, H * 0.12, { c: C.muted, s: 12 });
      ctx.fillStyle = C.line; K.rr(ctx, bx, H * 0.18, bw, H * 0.08, 6); ctx.fill(); ctx.fillStyle = "#3b82f6"; K.rr(ctx, bx, H * 0.18, Math.max(6, bw * lg), H * 0.08, 6); ctx.fill();
      txt(ctx, "B = " + sci(B) + " T", bx + bw / 2, H * 0.34, { c: C.ink, s: 14 });
      txt(ctx, "μ = 4π × 10⁻⁷", bx + bw / 2, H * 0.44, { c: C.muted, s: 11 });
    });
  };

  /* =========================================================
     4. sec3phy_force - force on a wire (F = BIL sin θ) and torque on a coil
     ========================================================= */
  L.sec3phy_force = function (host, cfg, done) {
    host.innerHTML = hint(t("Wire: drag the wire's end to turn it in the field and set B, I and ℓ. Coil: drag the coil to twist it, then let go and watch the torque turn it.",
      "السلك: اسحب طرف السلك لتديره في المجال واضبط B و I و ℓ. الملف: اسحب الملف لتلويه ثم اتركه وشاهد عزم الازدواج يديره.")) + '<div class="seg" id="s3fm"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider("B", 0, 10, 0.5, 2, "T") + L._slider("I", 0, 10, 0.5, 4, "A") + L._slider("ℓ", 0.1, 1, 0.05, 0.3, "m"));
    var out = meter(host);
    var tick = L._goals(host, [t("Wire at 90°: make F = 6 N with I = 4 A and ℓ = 0.3 m.", "السلك بزاوية ٩٠°: اجعل F = ٦ نيوتن مع I = ٤ أمبير و ℓ = ٠٫٣ م."),
      t("Same values: turn the wire to 30° and read F = 3 N.", "بنفس القيم: أدر السلك إلى ٣٠° واقرأ F = ٣ نيوتن."),
      t("Make the force vanish by turning the wire parallel to the field.", "اجعل القوة تنعدم بجعل السلك موازيًا للمجال."),
      t("Coil: twist it, let go, and let the torque bring it to rest where τ = 0.", "الملف: الوِه ثم اتركه حتى يستقر حيث τ = صفر.")], done);
    var mode = "w", B = 2, I = 4, ell = 0.3, th = 90, drag = false, ca = 0.3, cw = 0, twisted = false, rest = 0;
    K.seg(host, "#s3fm", [["w", t("Wire in a field", "سلك في مجال")], ["c", t("Coil (torque)", "ملف (عزم)")]], mode, function (v) { mode = v; showSl(c, 2, v === "w"); });
    sl(c, 0, function (v) { return n(v) + " T"; }, function (v) { B = v; });
    sl(c, 1, function (v) { return n(v) + " A"; }, function (v) { I = v; });
    sl(c, 2, function (v) { return n(v) + " m"; }, function (v) { ell = v; });
    function ctr() { return { x: S.W * 0.36, y: S.H * 0.5, r: Math.min(S.W * 0.28, S.H * 0.4) }; }
    S.drag({
      down: function (p) { var g = ctr(); if (Math.hypot(p.x - g.x, p.y - g.y) < g.r * 1.1) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return; var g = ctr(), a = Math.atan2(-(p.y - g.y), p.x - g.x);
        if (mode === "w") { var dgr = Math.round(a * 180 / Math.PI); if (dgr < 0) dgr += 180; th = clamp(dgr, 0, 180); }
        else { ca = a; cw = 0; if (Math.abs(Math.cos(ca)) > 0.7) twisted = true; }
      },
      up: function () { drag = false; },
      hover: function (p) { var g = ctr(); return Math.hypot(p.x - g.x, p.y - g.y) < g.r * 1.1; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = ctr();
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#ef4444"; K.rr(ctx, g.x - g.r - 46, g.y - g.r, 34, 2 * g.r, 6); ctx.fill(); txt(ctx, "N", g.x - g.r - 29, g.y, { c: "#fff", s: 18 });
      ctx.fillStyle = "#2563eb"; K.rr(ctx, g.x + g.r + 12, g.y - g.r, 34, 2 * g.r, 6); ctx.fill(); txt(ctx, "S", g.x + g.r + 29, g.y, { c: "#fff", s: 18 });
      var nl = Math.round(2 + B);
      for (var k = 0; k < nl; k++) { var yy = g.y - g.r + (k + 0.5) * 2 * g.r / nl; ctx.strokeStyle = "rgba(147,197,253,.8)"; ctx.lineWidth = 1.5; ctx.setLineDash([6, 5]); ctx.beginPath(); ctx.moveTo(g.x - g.r - 10, yy); ctx.lineTo(g.x + g.r + 10, yy); ctx.stroke(); ctx.setLineDash([]); }
      var px = W * 0.74;
      if (mode === "w") {
        var a = th * Math.PI / 180, F = B * I * ell * Math.sin(a), hx = Math.cos(a) * g.r * 0.9, hy = -Math.sin(a) * g.r * 0.9;
        ctx.strokeStyle = "#b45309"; ctx.lineWidth = 7; ctx.beginPath(); ctx.moveTo(g.x - hx, g.y - hy); ctx.lineTo(g.x + hx, g.y + hy); ctx.stroke();
        if (I > 0) arrow(ctx, g.x - hx * 0.4, g.y - hy * 0.4, g.x + hx * 0.4, g.y + hy * 0.4, "#facc15", 3);
        K.dot(ctx, g.x + hx, g.y + hy, 9, "#f59e0b", "#fff");
        // force out of / into page shown as a growing symbol
        var fr = 6 + Math.min(30, Math.abs(F) * 3);
        if (Math.abs(F) > 0.01) { K.dot(ctx, g.x, g.y, fr, "rgba(239,68,68,.2)", "#ef4444"); K.dot(ctx, g.x, g.y, 4, "#ef4444"); }
        txt(ctx, "θ = " + n(th) + "°", px, H * 0.18, { c: C.ink, s: 16 });
        txt(ctx, "F = BIℓ sinθ", px, H * 0.32, { c: C.muted, s: 13 });
        txt(ctx, "F = " + n(sig(F, 3)) + " N", px, H * 0.46, { c: "#ef4444", s: 20 });
        txt(ctx, Math.abs(F) > 0.01 ? t("force out of the page ⊙", "القوة خارج الصفحة ⊙") : t("no force", "لا قوة"), px, H * 0.6, { c: C.muted, s: 12 });
        out(["θ = " + n(th) + "°", "F = " + n(sig(F, 3)) + " N", "sinθ = " + n(sig(Math.sin(a), 3))]);
        if (th === 90 && I === 4 && ell === 0.3 && Math.abs(F - 6) < 0.01) tick(0);
        if (th >= 29 && th <= 31 && I === 4 && Math.abs(ell - 0.3) < 1e-9 && B === 5) tick(1);
        if (I > 0 && B > 0 && (th === 0 || th === 180)) tick(2);
      } else {
        var Nn = 100, A = 0.02, md = I * A * Nn, theta = Math.PI / 2 - ca, tau = B * I * A * Nn * Math.sin(theta);
        if (!drag) { cw += (tau * 2.2 - cw * 4.5) * dt; ca += cw * dt; }
        var nx = Math.cos(ca + Math.PI / 2), ny = Math.sin(ca + Math.PI / 2);
        var ex = Math.cos(ca) * g.r * 0.8, ey = -Math.sin(ca) * g.r * 0.8;
        ctx.strokeStyle = "#b45309"; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(g.x - ex, g.y - ey); ctx.lineTo(g.x + ex, g.y + ey); ctx.stroke();
        K.dot(ctx, g.x + ex, g.y + ey, 9, C.card, C.ink); K.dot(ctx, g.x - ex, g.y - ey, 9, C.card, C.ink);
        txt(ctx, "⊙", g.x + ex, g.y + ey + 1, { c: C.ink, s: 13 }); txt(ctx, "⊗", g.x - ex, g.y - ey + 1, { c: C.ink, s: 13 });
        arrow(ctx, g.x, g.y, g.x + nx * g.r * 0.55, g.y - ny * g.r * 0.55, "#7c3aed", 3); txt(ctx, "m_d", g.x + nx * g.r * 0.66, g.y - ny * g.r * 0.66, { c: "#7c3aed", s: 12 });
        if (Math.abs(tau) > 0.005) { var fl = Math.min(g.r * 0.5, 10 + Math.abs(tau) * 20); arrow(ctx, g.x + ex, g.y + ey, g.x + ex, g.y + ey - fl, "#ef4444", 3); arrow(ctx, g.x - ex, g.y - ey, g.x - ex, g.y - ey + fl, "#ef4444", 3); }
        var dg = Math.round(((theta * 180 / Math.PI) % 360 + 540) % 360 - 180);
        txt(ctx, t("angle (normal, B) = ", "الزاوية (العمودي، B) = ") + n(dg) + "°", px, H * 0.2, { c: C.ink, s: 13 });
        txt(ctx, "τ = BIAN sinθ", px, H * 0.34, { c: C.muted, s: 13 });
        txt(ctx, "τ = " + n(sig(Math.abs(tau), 3)) + " N·m", px, H * 0.48, { c: "#ef4444", s: 18 });
        txt(ctx, "N = 100, A = 0.02 m²", px, H * 0.62, { c: C.muted, s: 11 });
        out(["τ = " + n(sig(Math.abs(tau), 3)) + " N·m", "m_d = IAN = " + n(sig(md, 3)) + " A·m²"]);
        if (!drag && twisted && Math.abs(tau) < 0.01 * Math.max(1, B * I) && Math.abs(cw) < 0.05 && B * I > 0) { rest += dt; if (rest > 0.6) tick(3); } else rest = 0;
      }
    });
  };

  /* =========================================================
     5. sec3phy_meters - turn a galvanometer into an ammeter, voltmeter and ohmmeter
     ========================================================= */
  L.sec3phy_meters = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick an instrument and move the resistance slider. Watch the range and where the needle points.",
      "اختر جهازًا وحرّك منزلق المقاومة، وراقب المدى وموضع المؤشر.")) + '<div class="seg" id="s3mm"></div>';
    var S = K.make(host, 0.56, 340);
    var c = box(host, L._slider(t("Resistance (log scale)", "المقاومة (تدريج لوغاريتمي)"), 0, 1000, 1, 500, ""));
    var out = meter(host);
    var tick = L._goals(host, [t("Ammeter (R_g = 2 Ω, I_g = 5 mA): choose the shunt for a 10 A range.", "أميتر (R_g = ٢ أوم، I_g = ٥ مللي أمبير): اختر المجزئ لمدى ١٠ أمبير."),
      t("Voltmeter (R_g = 0.1 Ω, I_g = 1 mA): choose the multiplier for a 50 V range.", "فولتميتر (R_g = ٠٫١ أوم، I_g = ١ مللي أمبير): اختر المضاعف لمدى ٥٠ فولت."),
      t("Ohmmeter: find the resistance that gives half-scale deflection.", "أوميتر: أوجد المقاومة التي تعطي نصف التدريج."),
      t("Ohmmeter: find the resistance that gives a quarter-scale deflection.", "أوميتر: أوجد المقاومة التي تعطي ربع التدريج.")], done);
    var mode = "a", v = 500, Rv = 1, fv = 0;
    var inp = c.querySelector('input[type="range"]'), lab = c.querySelector(".slv");
    function Rof(m, x) { return m === "a" ? Math.pow(10, -4 + 5 * x / 1000) : m === "v" ? Math.pow(10, 6 * x / 1000) : Math.pow(10, 1 + 5 * x / 1000); }
    function upd() {
      v = Number(inp.value); Rv = Rof(mode, v); lab.textContent = sci(Rv, 4) + " Ω";
      var f, info;
      if (mode === "a") { var range = 0.005 * (2 + Rv) / Rv; f = 10 / range; info = [t("Shunt R_s = ", "المجزئ R_s = ") + sci(Rv, 4) + " Ω", t("Range = ", "المدى = ") + sci(range, 4) + " A", t("Circuit current: 10 A", "تيار الدائرة: ١٠ أمبير")]; if (Math.abs(range - 10) / 10 < 0.02) tick(0); }
      else if (mode === "v") { var rv = 0.001 * (0.1 + Rv); f = 50 / rv; info = [t("Multiplier R_m = ", "المضاعف R_m = ") + sci(Rv, 5) + " Ω", t("Range = ", "المدى = ") + sci(rv, 4) + " V", t("Measured: 50 V", "الجهد المقاس: ٥٠ فولت")]; if (Math.abs(rv - 50) / 50 < 0.02) tick(1); }
      else { var Ic = 1.5 / (3750 + Rv); f = Ic / 400e-6; info = ["R_x = " + sci(Rv, 4) + " Ω", "I = " + n(sig(Ic * 1e6, 3)) + " μA", t("Deflection = ", "الانحراف = ") + n(sig(f, 3)) + " FSD"]; if (Math.abs(f - 0.5) < 0.012) tick(2); if (Math.abs(f - 0.25) < 0.008) tick(3); }
      fv = f; out(info);
    }
    inp.addEventListener("input", upd);
    K.seg(host, "#s3mm", [["a", t("Ammeter", "أميتر")], ["v", t("Voltmeter", "فولتميتر")], ["o", t("Ohmmeter", "أوميتر")]], mode, function (m) { mode = m; inp.value = m === "o" ? 300 : 500; upd(); });
    upd();
    var shown = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, cx = W * 0.3, cy = H * 0.62, r = Math.min(W * 0.24, H * 0.52);
      ctx.clearRect(0, 0, W, H); shown += (Math.min(fv, 1.04) - shown) * Math.min(1, dt * 6);
      var labs = mode === "o" ? [[1, "0"], [0.5, "3750"], [0.25, "11250"], [0.02, "∞"]] : [[0, "0"], [0.5, mode === "a" ? "5" : "25"], [1, mode === "a" ? "10 A" : "50 V"]];
      dial(ctx, cx, cy, r, shown, C, labs, false);
      txt(ctx, "G", cx, cy + 20, { c: C.muted, s: 14 });
      if (fv > 1.02) txt(ctx, t("Overload! Range too small", "تحميل زائد! المدى صغير"), cx, cy + 42, { c: "#ef4444", s: 13 });
      else if (mode !== "o" && fv < 0.98) txt(ctx, t("Range too large: needle short of FSD", "المدى كبير: المؤشر لم يصل لنهاية التدريج"), cx, cy + 42, { c: C.muted, s: 12 });
      // circuit sketch on the right
      var x0 = W * 0.62, x1 = W * 0.94, ym = H * 0.42;
      if (mode === "a") {
        poly(ctx, [[x0, ym], [x1, ym]], C.muted, 3); poly(ctx, [[x0 + 20, ym], [x0 + 20, ym + 60], [x1 - 20, ym + 60], [x1 - 20, ym]], C.muted, 2);
        K.dot(ctx, (x0 + x1) / 2, ym, 16, C.card, C.ink); txt(ctx, "G", (x0 + x1) / 2, ym, { c: C.ink, s: 13 });
        resBox(ctx, (x0 + x1) / 2, ym + 60, 60, 22, "R_s", C); txt(ctx, t("shunt in parallel", "مجزئ على التوازي"), (x0 + x1) / 2, ym + 92, { c: C.muted, s: 11 });
        txt(ctx, "R_s = I_gR_g / (I − I_g)", (x0 + x1) / 2, H * 0.15, { c: C.ink, s: 12 });
      } else if (mode === "v") {
        poly(ctx, [[x0, ym], [x1, ym]], C.muted, 3); K.dot(ctx, x0 + 40, ym, 16, C.card, C.ink); txt(ctx, "G", x0 + 40, ym, { c: C.ink, s: 13 });
        resBox(ctx, x1 - 50, ym, 64, 22, "R_m", C); txt(ctx, t("multiplier in series", "مضاعف على التوالي"), (x0 + x1) / 2, ym + 40, { c: C.muted, s: 11 });
        txt(ctx, "R_m = (V − V_g) / I_g", (x0 + x1) / 2, H * 0.15, { c: C.ink, s: 12 });
      } else {
        poly(ctx, [[x0, ym], [x1, ym], [x1, ym + 70], [x0, ym + 70], [x0, ym]], C.muted, 2);
        K.dot(ctx, x0 + 30, ym, 14, C.card, C.ink); txt(ctx, "μA", x0 + 30, ym, { c: C.ink, s: 10 }); batt(ctx, x1, ym + 35, true, 12, C);
        resBox(ctx, (x0 + x1) / 2 + 10, ym, 50, 20, "3750", C); resBox(ctx, (x0 + x1) / 2, ym + 70, 50, 20, "R_x", C);
        txt(ctx, "I = 1.5 / (3750 + R_x)", (x0 + x1) / 2, H * 0.15, { c: C.ink, s: 12 });
      }
    });
  };

  /* =========================================================
     6. sec3phy_induct - Faraday's magnet and coil with a centre-zero galvanometer and Lenz poles
     ========================================================= */
  L.sec3phy_induct = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the magnet into the coil and out again. Try fast and slow, change the turns, or flip the magnet. The coil face shows the induced pole.",
      "اسحب المغناطيس إلى داخل الملف ثم أخرجه، جرب السرعة والبطء وغيّر عدد اللفات أو اقلب المغناطيس، ويظهر على وجه الملف القطب المستحث."));
    var S = K.make(host, 0.55, 340);
    var c = box(host, L._slider(t("Turns N", "عدد اللفات N"), 50, 500, 50, 200, "") + '<div class="btn-row"><button type="button" class="btn sm ghost" id="s3iflip">⇄ ' + t("Flip the magnet", "اقلب المغناطيس") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Push the N pole in: the needle swings one way.", "أدخل القطب الشمالي: ينحرف المؤشر في اتجاه."),
      t("Pull it out: the needle swings the opposite way.", "أخرجه: ينحرف المؤشر في الاتجاه المضاد."),
      t("Make a big deflection (more than 80 % of the scale).", "احصل على انحراف كبير (أكثر من ٨٠٪ من التدريج)."),
      t("Hold the magnet still inside the coil: the needle returns to zero.", "ثبّت المغناطيس داخل الملف: يعود المؤشر إلى الصفر.")], done);
    var N = 200, u = 0.12, lastU = 0.12, vel = 0, emf = 0, flip = 1, drag = false, off = 0, wasIn = false, still = 0;
    sl(c, 0, function (v) { return n(v); }, function (v) { N = v; });
    c.querySelector("#s3iflip").onclick = function () { flip = -flip; };
    var cxN = 0.66, wN = 0.12;
    function phi(x) { return 1 / (1 + Math.pow((x - cxN) / wN, 2)); } // x = magnet's leading-face position (fraction of W)
    function mag() { return { x: u * S.W, y: S.H * 0.38, w: S.W * 0.2, h: S.H * 0.16 }; }
    S.drag({
      down: function (p) { var m = mag(); if (p.x > m.x - m.w - 10 && p.x < m.x + 10 && Math.abs(p.y - m.y) < m.h) { drag = true; off = p.x - m.x; return true; } return false; },
      move: function (p) { if (drag) u = clamp((p.x - off) / S.W, 0.22, 0.8); },
      up: function () { drag = false; },
      hover: function (p) { var m = mag(); return p.x > m.x - m.w - 10 && p.x < m.x + 10 && Math.abs(p.y - m.y) < m.h; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, m = mag();
      ctx.clearRect(0, 0, W, H);
      if (dt > 0) { var v = (u - lastU) / dt; vel += (v - vel) * Math.min(1, dt * 12); } lastU = u;
      var dphi = -2 * (u - cxN) / (wN * wN) * Math.pow(phi(u), 2) * vel; // dΦ/dt (normalised)
      var target = N * 1e-4 * dphi * flip; emf += (target - emf) * Math.min(1, dt * 10); if (Math.abs(emf) < 1e-5) emf = 0;
      var defl = clamp(emf / 0.04, -1, 1);
      // coil
      var cx0 = W * (cxN - 0.08), cx1 = W * (cxN + 0.12), turns = Math.round(N / 50) + 4, ch = H * 0.3;
      for (var k = 0; k < turns; k++) { var xx = cx0 + k * (cx1 - cx0) / (turns - 1); ctx.strokeStyle = "#b45309"; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(xx, m.y, 6, ch / 2 + 6, 0, 0, 7); ctx.stroke(); }
      poly(ctx, [[cx0, m.y + ch / 2 + 6], [cx0, H * 0.86], [W * 0.5, H * 0.86]], C.muted, 2); poly(ctx, [[cx1, m.y + ch / 2 + 6], [cx1, H * 0.86], [W * 0.62, H * 0.86]], C.muted, 2);
      dial(ctx, W * 0.56, H * 0.96, Math.min(W * 0.1, H * 0.22), defl, C, [[0.5, "0"]], true);
      // magnet (leading face at m.x)
      var leadN = flip > 0;
      ctx.fillStyle = leadN ? "#2563eb" : "#ef4444"; ctx.fillRect(m.x - m.w, m.y - m.h / 2, m.w / 2, m.h); ctx.fillStyle = leadN ? "#ef4444" : "#2563eb"; ctx.fillRect(m.x - m.w / 2, m.y - m.h / 2, m.w / 2, m.h);
      txt(ctx, leadN ? "S" : "N", m.x - m.w * 0.75, m.y, { c: "#fff", s: 16 }); txt(ctx, leadN ? "N" : "S", m.x - m.w * 0.25, m.y, { c: "#fff", s: 16 });
      // induced pole on the coil face (Lenz)
      if (Math.abs(defl) > 0.04) {
        var approaching = dphi > 0, facePole = approaching ? (leadN ? "N" : "S") : (leadN ? "S" : "N");
        txt(ctx, facePole, cx0 - 18, m.y - ch / 2 - 14, { c: facePole === "N" ? "#ef4444" : "#2563eb", s: 20 });
        txt(ctx, approaching ? t("repels the magnet", "يتنافر مع المغناطيس") : t("attracts the magnet", "يجذب المغناطيس"), cx0 - 18, m.y - ch / 2 - 34, { c: C.muted, s: 11 });
      }
      txt(ctx, "emf = −N ΔΦ/Δt", W * 0.2, H * 0.1, { c: C.muted, s: 13 });
      var inside = u > cxN - 0.05 && u < cxN + 0.12;
      out(["emf ≈ " + n(sig(Math.abs(emf) * 1000, 2)) + " mV", "N = " + n(N), inside ? t("magnet inside the coil", "المغناطيس داخل الملف") : t("magnet outside", "المغناطيس خارج الملف")]);
      if (leadN && vel > 0.05 && defl > 0.1) { tick(0); wasIn = true; }
      if (leadN && vel < -0.05 && defl < -0.1) tick(1);
      if (Math.abs(defl) > 0.8) tick(2);
      if (inside && wasIn && Math.abs(vel) < 0.01 && Math.abs(defl) < 0.02) { still += dt; if (still > 0.8) tick(3); } else still = 0;
    });
  };

  /* =========================================================
     7. sec3phy_dynamo - AC generator (slip rings / commutator) and transformer
     ========================================================= */
  L.sec3phy_dynamo = function (host, cfg, done) {
    host.innerHTML = hint(t("Generator: set N, B and f, watch the coil turn (slow motion) and the emf graph; swap slip rings for a split cylinder. Transformer: set the turns and the efficiency.",
      "المولد: اضبط N و B و f وشاهد الملف يدور (حركة بطيئة) ومنحنى القوة الدافعة، واستبدل الحلقتين بأسطوانة مشقوقة. المحول: اضبط عدد اللفات والكفاءة.")) + '<div class="seg" id="s3dm"></div>';
    var S = K.make(host, 0.56, 360);
    var c = box(host, L._slider("N", 10, 200, 10, 50, "") + L._slider("B", 0, 5, 0.5, 2, "mT") + L._slider("f", 0, 60, 5, 25, "Hz") +
      L._slider("N_p", 100, 2000, 100, 1100, "") + L._slider("N_s", 10, 2000, 10, 100, "") + L._slider(t("Efficiency", "الكفاءة"), 50, 100, 5, 100, "%") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="s3dcom">◐ ' + t("Split cylinder (DC)", "أسطوانة مشقوقة (مستمر)") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Book example: N = 100, B = 1 mT, f = 50 Hz (A = 0.21 m²) gives emf_max ≈ 6.6 V.", "مثال الكتاب: N = ١٠٠ و B = ١ مللي تسلا و f = ٥٠ هرتز (A = ٠٫٢١ م²) تعطي emf_max ≈ ٦٫٦ فولت."),
      t("Use the split cylinder to get one-direction current.", "استخدم الأسطوانة المشقوقة لتحصل على تيار في اتجاه واحد."),
      t("Transformer: step 220 V down to exactly 8 V for a door bell.", "المحول: اخفض ٢٢٠ فولت إلى ٨ فولت بالضبط لجرس الباب."),
      t("Transformer: step 220 V up to at least 2000 V.", "المحول: ارفع ٢٢٠ فولت إلى ٢٠٠٠ فولت على الأقل.")], done);
    var mode = "g", N = 50, B = 2, f = 25, Np = 1100, Ns = 100, eta = 1, com = false, th = 0, hist = [], acc = 0, tt = 0;
    var cb = c.querySelector("#s3dcom");
    function vis() { [0, 1, 2].forEach(function (i) { showSl(c, i, mode === "g"); }); [3, 4, 5].forEach(function (i) { showSl(c, i, mode === "t"); }); cb.style.display = mode === "g" ? "" : "none"; }
    K.seg(host, "#s3dm", [["g", t("Generator", "المولد")], ["t", t("Transformer", "المحول")]], mode, function (v) { mode = v; vis(); });
    sl(c, 0, function (v) { return n(v); }, function (v) { N = v; });
    sl(c, 1, function (v) { return n(v) + " mT"; }, function (v) { B = v; });
    sl(c, 2, function (v) { return n(v) + " Hz"; }, function (v) { f = v; });
    sl(c, 3, function (v) { return n(v); }, function (v) { Np = v; });
    sl(c, 4, function (v) { return n(v); }, function (v) { Ns = v; });
    sl(c, 5, function (v) { return n(v) + "%"; }, function (v) { eta = v / 100; });
    cb.onclick = function () { com = !com; cb.classList.toggle("on", com); hist = []; };
    vis();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "g") {
        var A = 0.21, emax = N * B * 1e-3 * A * 2 * Math.PI * f;
        th += 2 * Math.PI * f / 25 * dt; tt += dt; // slow motion x1/25
        var e = emax * Math.sin(th), shownE = com ? Math.abs(e) : e;
        acc += dt; if (acc > 0.02) { acc = 0; hist.push(shownE); if (hist.length > 160) hist.shift(); }
        var cx = W * 0.2, cy = H * 0.45, r = Math.min(W * 0.14, H * 0.3);
        ctx.fillStyle = "#ef4444"; K.rr(ctx, cx - r - 40, cy - r, 28, 2 * r, 5); ctx.fill(); txt(ctx, "N", cx - r - 26, cy, { c: "#fff", s: 16 });
        ctx.fillStyle = "#2563eb"; K.rr(ctx, cx + r + 12, cy - r, 28, 2 * r, 5); ctx.fill(); txt(ctx, "S", cx + r + 26, cy, { c: "#fff", s: 16 });
        for (var k = -2; k <= 2; k++) { ctx.strokeStyle = "rgba(147,197,253,.7)"; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(cx - r - 10, cy + k * r * 0.4); ctx.lineTo(cx + r + 10, cy + k * r * 0.4); ctx.stroke(); ctx.setLineDash([]); }
        var ex = Math.cos(th) * r * 0.85, ey = Math.sin(th) * r * 0.85;
        ctx.strokeStyle = "#b45309"; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(cx - ex, cy - ey); ctx.lineTo(cx + ex, cy + ey); ctx.stroke();
        K.dot(ctx, cx + ex, cy + ey, 7, "#f59e0b"); K.dot(ctx, cx - ex, cy - ey, 7, "#a16207");
        txt(ctx, com ? t("split cylinder", "أسطوانة مشقوقة") : t("slip rings", "حلقتان معدنيتان"), cx, cy + r + 18, { c: C.muted, s: 12 });
        txt(ctx, t("slow motion", "حركة بطيئة"), cx, H * 0.06, { c: C.muted, s: 11 });
        // graph
        var gx = W * 0.44, gw = W * 0.53, gy = H * 0.45, gh = H * 0.36, sc = gh / Math.max(1, Math.ceil(Math.max(emax, 1)));
        ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + gw, gy); ctx.moveTo(gx, gy - gh); ctx.lineTo(gx, gy + gh); ctx.stroke();
        ctx.strokeStyle = "#f97316"; ctx.lineWidth = 2.5; ctx.beginPath(); hist.forEach(function (v, i) { var x = gx + i / 160 * gw, y = gy - v * sc; if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); }); ctx.stroke();
        ctx.strokeStyle = "#22c55e"; ctx.setLineDash([5, 4]); ctx.beginPath(); ctx.moveTo(gx, gy - 0.707 * emax * sc); ctx.lineTo(gx + gw, gy - 0.707 * emax * sc); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, "emf (V)", gx + 30, gy - gh - 8, { c: C.muted, s: 11 }); txt(ctx, t("time", "الزمن"), gx + gw - 20, gy + 12, { c: C.muted, s: 11 });
        txt(ctx, "V_eff = 0.707 V_max", gx + gw - 70, gy - 0.707 * emax * sc - 10, { c: "#22c55e", s: 10 });
        out(["emf_max = NBA·2πf = " + n(sig(emax, 3)) + " V", t("now: ", "الآن: ") + n(sig(shownE, 2)) + " V", "V_eff = " + n(sig(0.707 * emax, 3)) + " V"]);
        if (N === 100 && B === 1 && f === 50) tick(0);
        if (com && f > 0 && B > 0 && N > 0 && hist.length > 25) tick(1);
      } else {
        var Vp = 220, Vs = Vp * Ns / Np, Is = Vs / 4, Ip = Vs * Is / (eta * Vp);
        tt += dt;
        var x0 = W * 0.3, x1 = W * 0.7, y0 = H * 0.18, y1 = H * 0.78;
        ctx.strokeStyle = "#64748b"; ctx.lineWidth = 16; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
        var tp = Math.min(16, Math.round(Np / 125)), ts = Math.min(24, Math.max(1, Math.round(Ns / 85)));
        for (var a = 0; a < tp; a++) { ctx.strokeStyle = "#b45309"; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(x0, y0 + 20 + a * (y1 - y0 - 40) / Math.max(tp - 1, 1), 18, 5, 0, 0, 7); ctx.stroke(); }
        for (var b = 0; b < ts; b++) { ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(x1, y0 + 20 + b * (y1 - y0 - 40) / Math.max(ts - 1, 1), 18, 4, 0, 0, 7); ctx.stroke(); }
        function wave(xc, amp, col) { ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath(); for (var i = 0; i <= 60; i++) { var x = xc - 50 + i * 100 / 60, y = H * 0.9 - amp * Math.sin(i / 60 * 4 * Math.PI + tt * 3); if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y); } ctx.stroke(); }
        var maxV = Math.max(Vp, Vs);
        wave(W * 0.14, 30 * Vp / maxV, "#b45309"); wave(W * 0.86, 30 * Vs / maxV, "#7c3aed");
        txt(ctx, "V_p = 220 V", W * 0.14, H * 0.12, { c: "#b45309", s: 13 }); txt(ctx, "N_p = " + n(Np), W * 0.14, H * 0.2, { c: C.muted, s: 12 });
        txt(ctx, "V_s = " + n(sig(Vs, 4)) + " V", W * 0.86, H * 0.12, { c: "#7c3aed", s: 13 }); txt(ctx, "N_s = " + n(Ns), W * 0.86, H * 0.2, { c: C.muted, s: 12 });
        txt(ctx, Vs > Vp ? t("step-up", "رافع") : Vs < Vp ? t("step-down", "خافض") : "1 : 1", W * 0.5, H * 0.48, { c: C.ink, s: 15 });
        out(["V_s/V_p = N_s/N_p", "V_s = " + n(sig(Vs, 4)) + " V", t("load 4 Ω: I_s = ", "حمل ٤ أوم: I_s = ") + n(sig(Is, 3)) + " A", "I_p = " + n(sig(Ip, 3)) + " A", "η = " + n(Math.round(eta * 100)) + "%"]);
        if (Math.abs(Vs - 8) < 0.05) tick(2);
        if (Vs >= 2000) tick(3);
      }
    });
  };

  /* =========================================================
     8. sec3phy_rlc - series RLC: phasors, impedance and the resonance curve
     ========================================================= */
  L.sec3phy_rlc = function (host, cfg, done) {
    host.innerHTML = hint(t("Change the frequency, R, L and C of a series circuit on 10 V AC. Watch the voltage arrows and the dot on the resonance curve.",
      "غيّر التردد و R و L و C لدائرة توالٍ على مصدر متردد ١٠ فولت، وراقب أسهم الجهد والنقطة على منحنى الرنين."));
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider("f", 0, 1000, 1, 594, "Hz") + L._slider("R", 5, 100, 1, 100, "Ω") + L._slider("L", 1, 100, 1, 50, "mH") + L._slider("C", 0.5, 20, 0.1, 10, "μF"));
    var out = meter(host);
    var tick = L._goals(host, [t("Tune to resonance: X_L = X_C and the current is maximum.", "اضبط على الرنين: X_L = X_C والتيار أكبر ما يمكن."),
      t("Make the circuit capacitive (voltage lags the current by more than 10°).", "اجعل الدائرة سعوية (الجهد يتأخر عن التيار بأكثر من ١٠°)."),
      t("Make the circuit inductive (voltage leads the current by more than 10°).", "اجعل الدائرة حثية (الجهد يسبق التيار بأكثر من ١٠°)."),
      t("Book example: L = 16 mH, C = 4.9 μF at resonance (about 568 Hz).", "مثال الكتاب: L = ١٦ مللي هنري و C = ٤٫٩ ميكروفاراد عند الرنين (حوالي ٥٦٨ هرتز).")], done);
    var f = 100, R = 20, Lh = 0.016, Cf = 4.9e-6, V = 10;
    function fOf(v) { return 10 * Math.pow(10, 2.3 * v / 1000); }
    sl(c, 0, function (v) { return n(sig(fOf(v), 4)) + " Hz"; }, function (v) { f = fOf(v); });
    sl(c, 1, function (v) { return n(v) + " Ω"; }, function (v) { R = v; });
    sl(c, 2, function (v) { return n(v) + " mH"; }, function (v) { Lh = v / 1000; });
    sl(c, 3, function (v) { return n(v) + " μF"; }, function (v) { Cf = v * 1e-6; });
    function calc(fr) { var XL = 2 * Math.PI * fr * Lh, XC = 1 / (2 * Math.PI * fr * Cf), Z = Math.sqrt(R * R + (XL - XC) * (XL - XC)); return { XL: XL, XC: XC, Z: Z, I: V / Z, th: Math.atan2(XL - XC, R) * 180 / Math.PI }; }
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, k = calc(f), f0 = 1 / (2 * Math.PI * Math.sqrt(Lh * Cf));
      ctx.clearRect(0, 0, W, H);
      // phasors
      var ox = W * 0.12, oy = H * 0.5, sc = Math.min(W * 0.28, H * 0.4) / Math.max(V, k.I * Math.max(k.XL, k.XC, R)) * 0.95;
      var VR = k.I * R, VL = k.I * k.XL, VC = k.I * k.XC;
      arrow(ctx, ox, oy, ox + VR * sc, oy, "#22c55e", 4); arrow(ctx, ox + 4, oy, ox + 4, oy - VL * sc, "#ef4444", 4); arrow(ctx, ox + 12, oy, ox + 12, oy + VC * sc, "#3b82f6", 4);
      arrow(ctx, ox, oy, ox + VR * sc, oy - (VL - VC) * sc, "#f97316", 4);
      txt(ctx, "V_R " + n(sig(VR, 3)), ox + VR * sc / 2, oy + 14, { c: "#22c55e", s: 11 }); txt(ctx, "V_L " + n(sig(VL, 3)), ox + 40, oy - VL * sc + 6, { c: "#ef4444", s: 11 }); txt(ctx, "V_C " + n(sig(VC, 3)), ox + 48, oy + VC * sc - 6, { c: "#3b82f6", s: 11 });
      txt(ctx, "V = 10 V", ox + VR * sc + 26, oy - (VL - VC) * sc, { c: "#f97316", s: 12 });
      // resonance curve
      var gx = W * 0.5, gw = W * 0.46, gy = H * 0.85, gh = H * 0.7, Imax = V / R;
      ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx, gy - gh); ctx.lineTo(gx, gy); ctx.lineTo(gx + gw, gy); ctx.stroke();
      ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var i = 0; i <= 200; i++) { var fr = fOf(i * 5), y = gy - calc(fr).I / Imax * gh; if (i) ctx.lineTo(gx + i / 200 * gw, y); else ctx.moveTo(gx, y); } ctx.stroke();
      var px = gx + Math.log10(f / 10) / 2.3 * gw, py = gy - k.I / Imax * gh; K.dot(ctx, px, py, 7, "#f97316", "#fff");
      var p0 = gx + Math.log10(f0 / 10) / 2.3 * gw; if (p0 > gx && p0 < gx + gw) { ctx.strokeStyle = C.muted; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(p0, gy); ctx.lineTo(p0, gy - gh); ctx.stroke(); ctx.setLineDash([]); txt(ctx, "f₀ = " + n(sig(f0, 4)) + " Hz", p0, gy - gh - 8, { c: C.muted, s: 11 }); }
      txt(ctx, "I", gx - 10, gy - gh + 8, { c: C.muted, s: 12 }); txt(ctx, "f (log)", gx + gw - 20, gy + 12, { c: C.muted, s: 11 });
      var ch = Math.abs(k.th) < 2 ? t("resistive (resonance)", "أومية (رنين)") : k.th > 0 ? t("inductive", "حثية") : t("capacitive", "سعوية");
      out(["X_L = " + n(sig(k.XL, 3)) + " Ω", "X_C = " + n(sig(k.XC, 3)) + " Ω", "Z = " + n(sig(k.Z, 3)) + " Ω", "I = " + n(sig(k.I, 3)) + " A", "θ = " + n(Math.round(k.th)) + "° · " + ch]);
      var res = Math.abs(f - f0) / f0 < 0.02;
      if (res) tick(0);
      if (k.th < -10) tick(1);
      if (k.th > 10) tick(2);
      if (res && Math.abs(Lh - 0.016) < 1e-9 && Math.abs(Cf - 4.9e-6) < 1e-12) tick(3);
    });
  };
})();

/* ---------- Sec 3 Physics live simulations (part 2, Unit 2): photoelectric cell + black body, Compton + de Broglie,
   Bohr hydrogen atom, laser cavity, semiconductor crystal + pn diode, transistor switch + logic gates. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit, P = E.s3pk;
  var txt = K.txt, hint = P.hint, box = P.box, sl = P.sl, showSl = P.showSl, clamp = P.clamp, sig = P.sig, sci = P.sci, meter = P.meter, arrow = P.arrow, poly = P.poly;
  var h = 6.625e-34, c0 = 3e8, e0 = 1.6e-19, me = 9.1e-31;
  function wlCol(nm) {
    if (nm < 380) return "#a855f7"; if (nm > 750) return "#7f1d1d";
    var r = 0, g = 0, b = 0;
    if (nm < 440) { r = (440 - nm) / 60; b = 1; } else if (nm < 490) { g = (nm - 440) / 50; b = 1; } else if (nm < 510) { g = 1; b = (510 - nm) / 20; } else if (nm < 580) { r = (nm - 510) / 70; g = 1; } else if (nm < 645) { r = 1; g = (645 - nm) / 65; } else r = 1;
    return "rgb(" + Math.round(r * 255) + "," + Math.round(g * 255) + "," + Math.round(b * 255) + ")";
  }
  function wiggle(ctx, x1, y1, x2, y2, col, ph, amp, k) {
    var L2 = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L2, uy = (y2 - y1) / L2;
    ctx.strokeStyle = col; ctx.lineWidth = 2.5; ctx.beginPath();
    for (var s = 0; s <= L2; s += 2) { var w = Math.sin(s * k + ph) * amp, x = x1 + ux * s - uy * w, y = y1 + uy * s + ux * w; if (s) ctx.lineTo(x, y); else ctx.moveTo(x, y); }
    ctx.stroke();
  }

  /* =========================================================
     9. sec3phy_photo - photoelectric cell and black-body (Wien) explorer
     ========================================================= */
  L.sec3phy_photo = function (host, cfg, done) {
    host.innerHTML = hint(t("Photoelectric: choose the metal, then change the wavelength and the brightness of the light. Black body: change the temperature and watch the peak move.",
      "الكهروضوئية: اختر الفلز ثم غيّر الطول الموجي وشدة الضوء. الجسم الأسود: غيّر درجة الحرارة وراقب انتقال القمة.")) + '<div class="seg" id="s3pm"></div><div class="seg" id="s3pmet"></div>';
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider(t("Wavelength λ", "الطول الموجي λ"), 150, 800, 5, 650, "nm") + L._slider(t("Intensity", "الشدة"), 0, 100, 5, 60, "%") + L._slider(t("Temperature T", "درجة الحرارة T"), 1000, 8000, 100, 3000, "K"));
    var out = meter(host);
    var tick = L._goals(host, [t("Find the threshold: electrons just start to leave (KE below 0.1 eV).", "أوجد العتبة: تبدأ الإلكترونات في الخروج بالكاد (طاقة حركة أقل من ٠٫١ إلكترون فولت)."),
      t("Give the photoelectrons at least 1.5 eV of kinetic energy.", "أعطِ الإلكترونات الضوئية طاقة حركة ١٫٥ إلكترون فولت على الأقل."),
      t("Shine bright red light (λ ≥ 620 nm, 100 %) on sodium: no electrons at all.", "سلّط ضوءًا أحمر شديدًا (λ ≥ ٦٢٠ نانومتر، ١٠٠٪) على الصوديوم: لا إلكترونات إطلاقًا."),
      t("Black body: set the Sun's temperature so the peak is at about 500 nm.", "الجسم الأسود: اضبط درجة حرارة الشمس لتكون القمة عند حوالي ٥٠٠ نانومتر.")], done);
    var mode = "p", MET = { Na: [2.3, t("Sodium", "صوديوم")], Cs: [1.9, t("Caesium", "سيزيوم")], Zn: [4.3, t("Zinc", "خارصين")] }, met = "Na", lam = 650, Iy = 60, T = 3000;
    var ph = [], el = [], ph0 = 0, acc = 0, cnt = 0;
    function vis() { showSl(c, 0, mode === "p"); showSl(c, 1, mode === "p"); showSl(c, 2, mode === "b"); host.querySelector("#s3pmet").style.display = mode === "p" ? "" : "none"; }
    K.seg(host, "#s3pm", [["p", t("Photoelectric effect", "الظاهرة الكهروضوئية")], ["b", t("Black body", "الجسم الأسود")]], mode, function (v) { mode = v; vis(); });
    K.seg(host, "#s3pmet", Object.keys(MET).map(function (k) { return [k, MET[k][1] + " (" + n(MET[k][0]) + " eV)"]; }), met, function (v) { met = v; el = []; });
    sl(c, 0, function (v) { return n(v) + " nm"; }, function (v) { lam = v; });
    sl(c, 1, function (v) { return n(v) + "%"; }, function (v) { Iy = v; });
    sl(c, 2, function (v) { return n(v) + " K"; }, function (v) { T = v; });
    vis();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      if (mode === "p") {
        var Eph = h * c0 / (lam * 1e-9) / e0, Ew = MET[met][0], KE = Eph - Ew, emits = KE > 0 && Iy > 0, col = wlCol(lam);
        var lx = W * 0.08, ly = H * 0.18, px = W * 0.4, pyT = H * 0.25, pyB = H * 0.8;
        // lamp
        K.dot(ctx, lx, ly, 18, col, C.ink);
        ctx.fillStyle = "#94a3b8"; ctx.fillRect(px, pyT, 14, pyB - pyT); txt(ctx, MET[met][1], px + 7, pyB + 14, { c: C.muted, s: 12 });
        // photons
        acc += dt * Iy / 8; while (acc > 1) { acc -= 1; ph.push({ s: 0, y: K.rnd(pyT + 10, pyB - 10), p: Math.random() * 6 }); }
        ph = ph.filter(function (q) {
          q.s += dt * 1.6; var x = lx + (px - lx) * q.s, y = ly + (q.y - ly) * q.s;
          if (q.s >= 1) { if (emits) { el.push({ x: px + 16, y: q.y, vx: 60 + Math.sqrt(KE) * 160, vy: K.rnd(-30, 30) }); cnt++; } return false; }
          var ang = Math.atan2(q.y - ly, px - lx), x2 = x + Math.cos(ang) * 22, y2 = y + Math.sin(ang) * 22; wiggle(ctx, x, y, x2, y2, col, q.p + q.s * 40, 3, 0.7); return true;
        });
        el = el.filter(function (q) { q.x += q.vx * dt; q.y += q.vy * dt; K.dot(ctx, q.x, q.y, 4, "#2563eb"); return q.x < W * 0.68; });
        // collector + ammeter
        ctx.fillStyle = C.line; ctx.fillRect(W * 0.68, pyT, 8, pyB - pyT);
        var cur = emits ? Iy / 100 : 0;
        P.dial(ctx, W * 0.56, H * 0.98, Math.min(W * 0.09, H * 0.18), cur, C, [[0, "0"]], false); txt(ctx, "μA", W * 0.56, H * 0.9, { c: C.muted, s: 10 });
        // KE vs frequency graph
        var gx = W * 0.75, gw = W * 0.23, gy = H * 0.8, gh = H * 0.6, fmax = 2e15, kmax = 6;
        ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx, gy - gh); ctx.lineTo(gx, gy); ctx.lineTo(gx + gw, gy); ctx.stroke();
        var fc = Ew * e0 / h; ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(gx + fc / fmax * gw, gy); ctx.lineTo(gx + gw, gy - (h * fmax / e0 - Ew) / kmax * gh); ctx.stroke();
        var fq = c0 / (lam * 1e-9); K.dot(ctx, gx + fq / fmax * gw, gy - Math.max(0, KE) / kmax * gh, 6, col, C.ink);
        txt(ctx, "KE", gx + 12, gy - gh - 8, { c: C.muted, s: 11 }); txt(ctx, "ν", gx + gw - 6, gy + 12, { c: C.muted, s: 12 }); txt(ctx, "ν_c", gx + fc / fmax * gw, gy + 12, { c: "#7c3aed", s: 11 });
        out(["hν = " + n(sig(Eph, 3)) + " eV", "E_w = " + n(Ew) + " eV", emits ? "KE_max = " + n(sig(KE, 3)) + " eV" : t("no emission (hν < E_w)", "لا انبعاث (hν < E_w)"), "ν = " + sci(fq) + " Hz"]);
        if (emits && KE < 0.1) tick(0);
        if (emits && KE >= 1.5) tick(1);
        if (met === "Na" && lam >= 620 && Iy === 100) tick(2);
      } else {
        var lmax = 2.898e-3 / T * 1e9, gx2 = W * 0.08, gw2 = W * 0.86, gy2 = H * 0.85, gh2 = H * 0.7, lmaxAx = 3000;
        // visible band
        for (var w = 380; w <= 750; w += 5) { ctx.fillStyle = wlCol(w); ctx.globalAlpha = 0.35; ctx.fillRect(gx2 + w / lmaxAx * gw2, gy2 - gh2, 5 / lmaxAx * gw2 + 1, gh2); }
        ctx.globalAlpha = 1;
        ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx2, gy2 - gh2); ctx.lineTo(gx2, gy2); ctx.lineTo(gx2 + gw2, gy2); ctx.stroke();
        function planck(nm, TT) { var x = nm * 1e-9; return 1 / (Math.pow(x, 5) * (Math.exp(0.014388 / (x * TT)) - 1)); }
        var ref = planck(2.898e-3 / 8000 * 1e9, 8000);
        [[T, "#f97316", 3], [6000, "rgba(234,179,8,.5)", 1.5]].forEach(function (cv) {
          ctx.strokeStyle = cv[1]; ctx.lineWidth = cv[2]; ctx.beginPath();
          for (var i = 1; i <= 300; i++) { var nm = i * 10, y = gy2 - planck(nm, cv[0]) / ref * gh2; if (i > 1) ctx.lineTo(gx2 + nm / lmaxAx * gw2, y); else ctx.moveTo(gx2 + nm / lmaxAx * gw2, y); } ctx.stroke();
        });
        var mx = gx2 + lmax / lmaxAx * gw2; ctx.strokeStyle = C.ink; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(mx, gy2); ctx.lineTo(mx, gy2 - gh2); ctx.stroke(); ctx.setLineDash([]);
        txt(ctx, "λ_max = " + n(Math.round(lmax)) + " nm", Math.min(mx + 60, W - 70), gy2 - gh2 + 10, { c: C.ink, s: 13 });
        txt(ctx, "λ (nm)", gx2 + gw2 - 20, gy2 + 14, { c: C.muted, s: 11 }); [500, 1000, 2000, 3000].forEach(function (v) { txt(ctx, n(v), gx2 + v / lmaxAx * gw2, gy2 + 14, { c: C.muted, s: 10 }); });
        txt(ctx, t("faint curve: 6000 K", "المنحنى الباهت: ٦٠٠٠ كلفن"), gx2 + gw2 * 0.75, gy2 - gh2 * 0.5, { c: C.muted, s: 11 });
        var reg = lmax < 380 ? t("ultraviolet", "فوق بنفسجي") : lmax <= 750 ? t("visible", "مرئي") : t("infrared", "تحت أحمر");
        out(["T = " + n(T) + " K", "λ_max = " + n(Math.round(lmax)) + " nm (" + reg + ")", "λ_max ∝ 1/T"]);
        if (Math.abs(lmax - 500) < 10) tick(3);
      }
    });
  };

  /* =========================================================
     10. sec3phy_compton - Compton collision + de Broglie wavelength of accelerated electrons
     ========================================================= */
  L.sec3phy_compton = function (host, cfg, done) {
    host.innerHTML = hint(t("Fire an X-ray photon at the free electron. Then change the accelerating voltage of the electron gun and compare the electron's wavelength with light and with an atom.",
      "أطلق فوتون أشعة سينية على الإلكترون الحر، ثم غيّر جهد تعجيل مدفع الإلكترونات وقارن الطول الموجي للإلكترون بالضوء وبحجم الذرة."));
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Accelerating voltage V", "جهد التعجيل V"), 0, 1000, 1, 0, "V") + '<div class="btn-row"><button type="button" class="btn sm" id="s3cfire">💥 ' + t("Fire a photon", "أطلق فوتونًا") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Fire a photon and see it scatter with a longer wavelength.", "أطلق فوتونًا وشاهده يتشتت بطول موجي أطول."),
      t("Make the electron's wavelength shorter than 1 nm.", "اجعل الطول الموجي للإلكترون أقصر من ١ نانومتر."),
      t("Accelerate through 100 V: λ ≈ 0.123 nm (atom size).", "عجّل بفرق جهد ١٠٠ فولت: λ ≈ ٠٫١٢٣ نانومتر (حجم الذرة)."),
      t("Make λ shorter than 0.01 nm, like a powerful electron microscope.", "اجعل λ أقصر من ٠٫٠١ نانومتر مثل ميكروسكوب إلكتروني قوي.")], done);
    var V = 10, shot = null, ang = 0;
    function vOf(x) { return Math.pow(10, 5 * x / 1000); }
    sl(c, 0, function (x) { var v = vOf(x); return (v >= 1000 ? n(sig(v / 1000, 3)) + " k" : n(sig(v, 3)) + " ") + "V"; }, function (x) { V = vOf(x); });
    c.querySelector("#s3cfire").onclick = function () { ang = K.rnd(0.5, 2.2) * (Math.random() < 0.5 ? -1 : 1); shot = { t: 0 }; };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      // --- Compton panel (left) ---
      var ex = W * 0.28, ey = H * 0.3, x0 = W * 0.03;
      txt(ctx, t("Compton effect", "تأثير كومتون"), W * 0.25, H * 0.05, { c: C.ink, s: 13 });
      if (!shot) { K.dot(ctx, ex, ey, 9, "#2563eb"); txt(ctx, "e⁻", ex, ey + 20, { c: C.muted, s: 12 }); }
      else {
        shot.t += dt; var tt = shot.t;
        if (tt < 0.8) { var xh = x0 + (ex - x0) * tt / 0.8; P.poly(ctx, [[x0, ey], [x0, ey]], C.muted, 1); var g = ctx; (function () { g.strokeStyle = "#7c3aed"; g.lineWidth = 2.5; g.beginPath(); for (var x = x0; x <= xh; x += 2) { var y = ey - 8 * Math.sin((x - x0) * 0.35 - tt * 20); if (x > x0) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); })(); K.dot(ctx, ex, ey, 9, "#2563eb"); }
        else {
          var s2 = (tt - 0.8) * 160, a1 = ang, a2 = -ang * 0.6 + (ang > 0 ? -0.6 : 0.6);
          ctx.strokeStyle = "#a855f7"; ctx.lineWidth = 2.5; ctx.beginPath();
          for (var k = 0; k <= Math.min(s2, W * 0.25); k += 2) { var px = ex + Math.cos(a1) * k - Math.sin(a1) * 8 * Math.sin(k * 0.22), py = ey - Math.sin(a1) * k - Math.cos(a1) * 8 * Math.sin(k * 0.22); if (k) ctx.lineTo(px, py); else ctx.moveTo(px, py); } ctx.stroke();
          var ed = Math.min(s2 * 1.2, W * 0.22); K.dot(ctx, ex + Math.cos(a2) * ed, ey - Math.sin(a2) * ed, 9, "#2563eb"); arrow(ctx, ex, ey, ex + Math.cos(a2) * ed * 0.8, ey - Math.sin(a2) * ed * 0.8, "rgba(37,99,235,.5)", 2);
          txt(ctx, t("λ′ > λ (lower ν)", "λ′ > λ (تردد أقل)"), W * 0.25, H * 0.56, { c: "#a855f7", s: 12 });
          if (tt > 1.2) tick(0);
          if (tt > 3.5) shot = null;
        }
      }
      txt(ctx, "p = h/λ ,  m = hν/c²", W * 0.25, H * 0.64, { c: C.muted, s: 12 });
      // --- de Broglie panel (right): log ruler of lengths ---
      var v = Math.sqrt(2 * e0 * V / me), lam = h / (me * v), lnm = lam * 1e9;
      var rx0 = W * 0.52, rx1 = W * 0.97, ry = H * 0.5, lo = -3, hi = 3; // 10^-3 .. 10^3 nm
      function X(nm) { return rx0 + (Math.log10(nm) - lo) / (hi - lo) * (rx1 - rx0); }
      txt(ctx, t("De Broglie: λ = h / mv", "دي برولي: λ = h / mv"), (rx0 + rx1) / 2, H * 0.05, { c: C.ink, s: 13 });
      for (var w = 400; w <= 700; w += 10) { ctx.fillStyle = wlCol(w); ctx.fillRect(X(w), ry - 14, X(w + 10) - X(w) + 1, 28); }
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(rx0, ry); ctx.lineTo(rx1, ry); ctx.stroke();
      for (var d = lo; d <= hi; d++) { var xx = X(Math.pow(10, d)); ctx.beginPath(); ctx.moveTo(xx, ry - 5); ctx.lineTo(xx, ry + 5); ctx.stroke(); txt(ctx, "10" + (d < 0 ? "⁻" + "⁰¹²³"[-d] : "⁰¹²³"[d]), xx, ry + 18, { c: C.muted, s: 10 }); }
      txt(ctx, "nm", rx1 - 4, ry + 32, { c: C.muted, s: 10 });
      txt(ctx, t("visible light", "الضوء المرئي"), X(530), ry - 24, { c: C.muted, s: 11 }); K.dot(ctx, X(0.1), ry, 6, "#94a3b8"); txt(ctx, t("atom", "ذرة"), X(0.1), ry - 22, { c: C.muted, s: 11 });
      var lx = X(clamp(lnm, 1e-3, 1e3)); arrow(ctx, lx, ry + 70, lx, ry + 8, "#2563eb", 3); txt(ctx, "λ_e = " + sci(lnm, 3) + " nm", lx, ry + 84, { c: "#2563eb", s: 13 });
      // electron wave drawing
      var wl = clamp(Math.log10(lnm) + 3, 0.3, 6) * 6;
      ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 2; ctx.beginPath(); for (var q = 0; q <= rx1 - rx0; q += 2) { var yy = H * 0.22 + 10 * Math.sin(q / wl * 2 * Math.PI - performance.now() / 200); if (q) ctx.lineTo(rx0 + q, yy); else ctx.moveTo(rx0, yy); } ctx.stroke();
      out(["V = " + sci(V, 3) + " V", "v = " + sci(v, 3) + " m/s", "λ = " + sci(lnm, 3) + " nm"]);
      if (lnm < 1) tick(1);
      if (Math.abs(V - 100) / 100 < 0.03) tick(2);
      if (lnm < 0.01) tick(3);
    });
  };

  /* =========================================================
     11. sec3phy_bohr - tap the levels of hydrogen to absorb / emit photons and build the spectrum
     ========================================================= */
  L.sec3phy_bohr = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap a level to move the electron. Going up absorbs a photon; going down emits one, and its line appears on the spectrum strip. The Ionize button frees the electron.",
      "اضغط على مستوى لنقل الإلكترون؛ الصعود يمتص فوتونًا والهبوط يشع فوتونًا يظهر خطه على شريط الطيف. زر التأين يحرر الإلكترون."));
    var S = K.make(host, 0.62, 400);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s3bion">⚡ ' + t("Ionize", "تأيين") + '</button><button type="button" class="btn sm ghost" id="s3bclr">↺ ' + t("Clear spectrum", "امسح الطيف") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Emit the red Balmer line (n = 3 → n = 2).", "أشع الخط الأحمر لمتسلسلة بالمر (n = ٣ ← n = ٢)."),
      t("Emit a Lyman (ultraviolet) line: drop to n = 1.", "أشع خطًا من متسلسلة ليمان (فوق بنفسجي): اهبط إلى n = ١."),
      t("Emit a Paschen (infrared) line: drop to n = 3.", "أشع خطًا من متسلسلة باشن (تحت أحمر): اهبط إلى n = ٣."),
      t("Ionize the atom from the ground state (13.6 eV).", "أيّن الذرة من المستوى الأرضي (١٣٫٦ إلكترون فولت).")], done);
    var lev = 1, lines = [], photon = null, freeE = null, msg = t("Tap n = 3 to excite the electron.", "اضغط على n = ٣ لإثارة الإلكترون.");
    var SER = { 1: t("Lyman · UV", "ليمان · فوق بنفسجي"), 2: t("Balmer · visible", "بالمر · مرئي"), 3: t("Paschen · IR", "باشن · تحت أحمر"), 4: t("Brackett · IR", "براكت · تحت أحمر"), 5: t("Pfund · far IR", "فوند · تحت أحمر بعيد") };
    function En(k) { return -13.6 / (k * k); }
    function yOf(k, H) { return H * 0.08 + (1 - (En(k) + 13.6) / 13.6) * H * 0.62 + (k === 1 ? 0 : 0); }
    function geoY(k) { var H = S.H, top = H * 0.06, bot = H * 0.7; return bot - (En(k) + 13.6) / 13.6 * (bot - top); }
    c.querySelector("#s3bclr").onclick = function () { lines = []; };
    c.querySelector("#s3bion").onclick = function () {
      if (!lev) return; var need = -En(lev); msg = t("Ionized: ", "تأين: ") + n(sig(need, 3)) + " eV " + t("absorbed. The electron is free.", "ممتصة، والإلكترون حر.");
      if (lev === 1) tick(3); freeE = { t: 0 }; lev = 0; E.speak(t("Ionized.", "تأينت الذرة."));
    };
    S.drag({
      down: function (p) {
        var x0 = S.W * 0.08, x1 = S.W * 0.62; if (p.x < x0 - 10 || p.x > x1 + 40) return false;
        var best = 0, bd = 18; for (var k = 1; k <= 6; k++) { var d = Math.abs(p.y - geoY(k)); if (d < bd) { bd = d; best = k; } }
        if (!best) return false;
        if (!lev) { lev = best; freeE = null; msg = t("Electron captured into n = ", "التقطت الذرة إلكترونًا في n = ") + n(best); return true; }
        if (best === lev) return true;
        var dE = Math.abs(En(best) - En(lev)), nm = h * c0 / (dE * e0) * 1e9;
        if (best > lev) { photon = { up: true, from: lev, to: best, t: 0, nm: nm }; msg = t("Absorbed ", "امتُص ") + n(sig(dE, 3)) + " eV (λ = " + n(Math.round(nm)) + " nm)"; }
        else {
          photon = { up: false, from: lev, to: best, t: 0, nm: nm }; lines.push({ nm: nm, to: best });
          msg = t("Emitted ", "انبعث ") + n(sig(dE, 3)) + " eV, λ = " + n(Math.round(nm)) + " nm · " + SER[best];
          if (lev === 3 && best === 2) tick(0); if (best === 1) tick(1); if (best === 3) tick(2);
        }
        lev = best; return true;
      },
      hover: function (p) { return p.x > S.W * 0.05 && p.x < S.W * 0.7 && p.y < S.H * 0.75; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, x0 = W * 0.08, x1 = W * 0.62;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = C.line; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(x0, H * 0.06); ctx.lineTo(x1, H * 0.06); ctx.stroke(); ctx.setLineDash([]); txt(ctx, "0 eV (" + t("free", "حر") + ")", x1 + 46, H * 0.06, { c: C.muted, s: 10 });
      for (var k = 1; k <= 6; k++) { var y = geoY(k); ctx.strokeStyle = k === lev ? "#f97316" : C.ink; ctx.lineWidth = k === lev ? 4 : 2; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke(); if (k < 6) txt(ctx, k === 5 ? "n=5,6" : "n=" + n(k), x0 - 24, y, { c: C.muted, s: 10 }); if (k <= 4) txt(ctx, n(sig(En(k), 3)) + " eV", x1 + 40, y, { c: C.muted, s: 10 }); }
      if (lev) K.dot(ctx, (x0 + x1) / 2, geoY(lev), 9, "#2563eb", "#fff");
      if (freeE) { freeE.t += dt; K.dot(ctx, (x0 + x1) / 2 + freeE.t * 80, H * 0.04 - Math.min(10, freeE.t * 10) + 10, 8, "#2563eb"); }
      if (photon) {
        photon.t += dt; var col = wlCol(photon.nm), yy = geoY(photon.to), sx = (x0 + x1) / 2 + 20;
        if (photon.up) wiggle(ctx, sx + 150 - photon.t * 150, yy + 10, sx + 190 - photon.t * 150, yy + 10, col, photon.t * 30, 4, 0.6);
        else wiggle(ctx, sx + photon.t * 200, geoY(photon.from), sx + photon.t * 200 + 40, geoY(photon.from), col, photon.t * 30, 4, 0.6);
        if (photon.t > 1) photon = null;
      }
      // spectrum strip: 90 nm .. 2000 nm (log)
      var sx0 = W * 0.05, sx1 = W * 0.95, sy = H * 0.84, sh = H * 0.08;
      function X(nm) { return sx0 + (Math.log10(nm) - Math.log10(90)) / (Math.log10(2000) - Math.log10(90)) * (sx1 - sx0); }
      ctx.fillStyle = "#0f172a"; ctx.fillRect(sx0, sy, sx1 - sx0, sh);
      for (var w = 380; w < 750; w += 5) { ctx.fillStyle = wlCol(w); ctx.globalAlpha = 0.18; ctx.fillRect(X(w), sy, X(w + 5) - X(w) + 1, sh); } ctx.globalAlpha = 1;
      lines.forEach(function (l) { ctx.fillStyle = l.nm >= 380 && l.nm <= 750 ? wlCol(l.nm) : l.nm < 380 ? "#c084fc" : "#f87171"; ctx.fillRect(X(l.nm) - 1.5, sy, 3, sh); });
      txt(ctx, "UV", X(150), sy + sh + 10, { c: C.muted, s: 10 }); txt(ctx, t("visible", "مرئي"), X(530), sy + sh + 10, { c: C.muted, s: 10 }); txt(ctx, "IR", X(1300), sy + sh + 10, { c: C.muted, s: 10 });
      out([msg]);
    });
  };

  /* =========================================================
     12. sec3phy_laser - pump a gas laser: population inversion, stimulated emission, mirrors
     ========================================================= */
  L.sec3phy_laser = function (host, cfg, done) {
    host.innerHTML = hint(t("Raise the pump to excite the atoms (orange = metastable level). Photons along the tube stimulate copies and bounce between the mirrors; part leaves through the semi-transparent mirror.",
      "ارفع الضخ لإثارة الذرات (البرتقالي = المستوى شبه المستقر). الفوتونات على محور الأنبوبة تستحث نسخًا منها وترتد بين المرآتين، ويخرج جزء من المرآة نصف الشفافة."));
    var S = K.make(host, 0.5, 320);
    var c = box(host, L._slider(t("Pump power", "قدرة الضخ"), 0, 100, 5, 10, "%") + '<div class="btn-row"><button type="button" class="btn sm tg on" id="s3lmir">🪞 ' + t("Mirrors in place", "المرآتان في مكانهما") + "</button></div>");
    var out = meter(host);
    var tick = L._goals(host, [t("Reach population inversion (more than half the atoms excited).", "حقق الإسكان المعكوس (أكثر من نصف الذرات مثارة)."),
      t("Get a steady laser beam out of the semi-transparent mirror.", "احصل على شعاع ليزر مستمر من المرآة نصف الشفافة."),
      t("Remove the mirrors while pumping hard: the beam dies (no amplification).", "أزل المرآتين مع ضخ قوي: يختفي الشعاع (لا تضخيم).")], done);
    var pump = 0.1, mir = true, A = [], Ph = [], outRate = 0, outAcc = 0, hold = 0, mirOffT = 0, mb = c.querySelector("#s3lmir");
    for (var i = 0; i < 48; i++) A.push({ x: 0.06 + (i % 16) * 0.058, y: 0.3 + Math.floor(i / 16) * 0.2 + K.rnd(-0.03, 0.03), s: 0 });
    sl(c, 0, function (v) { return n(v) + "%"; }, function (v) { pump = v / 100; });
    mb.onclick = function () { mir = !mir; mb.classList.toggle("on", mir); mb.innerHTML = "🪞 " + (mir ? t("Mirrors in place", "المرآتان في مكانهما") : t("Mirrors removed", "المرآتان مُزالتان")); };
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, tx0 = W * 0.08, tx1 = W * 0.86, ty0 = H * 0.15, ty1 = H * 0.75;
      ctx.clearRect(0, 0, W, H);
      // physics
      var nEx = 0;
      A.forEach(function (a) {
        if (!a.s && Math.random() < pump * 2 * dt) a.s = 1;
        else if (a.s && Math.random() < 0.25 * dt) { a.s = 0; var ang = K.rnd(-Math.PI, Math.PI); if (Ph.length < 200) Ph.push({ x: a.x, y: a.y, vx: Math.cos(ang), vy: Math.sin(ang) * 0.5 }); }
        nEx += a.s;
      });
      var outN = 0, born = [];
      Ph = Ph.filter(function (p) {
        p.x += p.vx * dt * 1.5; p.y += p.vy * dt * 1.5;
        if (p.y < 0.05 || p.y > 0.95) return false;
        if (p.x > 0.97) { if (mir && Math.random() < 0.8) { p.vx = -Math.abs(p.vx); p.x = 0.97; } else { if (mir) outN++; return false; } }
        if (p.x < 0.02) { if (mir) { p.vx = Math.abs(p.vx); p.x = 0.02; } else return false; }
        for (var j = 0; j < A.length; j++) {
          var a = A[j]; if (Math.abs(a.x - p.x) < 0.02 && Math.abs(a.y - p.y) < 0.1) {
            if (a.s && !p.hit) { a.s = 0; if (Ph.length + born.length < 220) born.push({ x: p.x, y: p.y + K.rnd(-0.01, 0.01), vx: p.vx, vy: p.vy * 0.5, hit: 0.04 }); p.hit = 0.04; }
            else if (!a.s && !p.hit) { a.s = 1; return false; }
          }
        }
        if (p.hit) { p.hit -= dt; if (p.hit < 0) p.hit = 0; }
        return true;
      });
      Ph = Ph.concat(born);
      outAcc += outN; outRate += (outN / Math.max(dt, 1e-3) - outRate) * Math.min(1, dt * 2);
      // drawing
      ctx.fillStyle = C.bg; K.rr(ctx, tx0, ty0, tx1 - tx0, ty1 - ty0, 24); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
      if (mir) { ctx.fillStyle = "#64748b"; ctx.fillRect(tx0 - 12, ty0 - 6, 10, ty1 - ty0 + 12); ctx.fillStyle = "rgba(148,163,184,.6)"; ctx.fillRect(tx1 + 2, ty0 - 6, 10, ty1 - ty0 + 12); }
      A.forEach(function (a) { K.dot(ctx, tx0 + a.x * (tx1 - tx0), ty0 + a.y * (ty1 - ty0), 7, a.s ? "#f97316" : "#60a5fa"); });
      Ph.forEach(function (p) { var x = tx0 + p.x * (tx1 - tx0), y = ty0 + p.y * (ty1 - ty0); ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - p.vx * 8, y - p.vy * 8); ctx.lineTo(x + p.vx * 8, y + p.vy * 8); ctx.stroke(); });
      var beam = clamp(outRate / 20, 0, 1);
      if (beam > 0.05) { ctx.strokeStyle = "rgba(239,68,68," + (0.3 + beam * 0.7) + ")"; ctx.lineWidth = 2 + beam * 6; ctx.beginPath(); ctx.moveTo(tx1 + 12, (ty0 + ty1) / 2); ctx.lineTo(W, (ty0 + ty1) / 2); ctx.stroke(); }
      var fr = nEx / A.length;
      ctx.fillStyle = C.line; K.rr(ctx, tx0, H * 0.84, (tx1 - tx0) * 0.45, 12, 6); ctx.fill(); ctx.fillStyle = fr > 0.5 ? "#f97316" : "#60a5fa"; K.rr(ctx, tx0, H * 0.84, Math.max(6, (tx1 - tx0) * 0.45 * fr), 12, 6); ctx.fill();
      ctx.strokeStyle = C.ink; ctx.beginPath(); ctx.moveTo(tx0 + (tx1 - tx0) * 0.225, H * 0.82); ctx.lineTo(tx0 + (tx1 - tx0) * 0.225, H * 0.88); ctx.stroke();
      txt(ctx, t("excited: ", "المثارة: ") + n(Math.round(fr * 100)) + "%", tx0 + (tx1 - tx0) * 0.23, H * 0.94, { c: C.ink, s: 12 });
      txt(ctx, t("output: ", "الخرج: ") + n(Math.round(outRate)) + t(" photons/s", " فوتون/ث"), tx0 + (tx1 - tx0) * 0.75, H * 0.9, { c: "#ef4444", s: 13 });
      out([t("Excited atoms: ", "الذرات المثارة: ") + n(Math.round(fr * 100)) + "%", fr > 0.5 ? t("population inversion ✓", "إسكان معكوس ✓") : t("no inversion", "لا يوجد إسكان معكوس"), t("Photons in tube: ", "فوتونات في الأنبوبة: ") + n(Ph.length)]);
      if (fr > 0.5) tick(0);
      if (mir && outRate > 10) { hold += dt; if (hold > 1.5) tick(1); } else hold = 0;
      if (!mir && pump >= 0.6) { mirOffT += dt; if (mirOffT > 3 && outRate < 8) tick(2); } else mirOffT = 0;
    });
  };

  /* =========================================================
     13. sec3phy_semi - silicon crystal (temperature + doping) and pn junction bias
     ========================================================= */
  L.sec3phy_semi = function (host, cfg, done) {
    host.innerHTML = hint(t("Crystal: heat pure silicon, then dope it with phosphorus (n-type) or boron (p-type). Diode: move the bias from reverse to forward and watch the depletion region and the current.",
      "البلورة: سخّن السيليكون النقي ثم طعّمه بالفوسفور (نوع n) أو البورون (نوع p). الثنائي: حرّك الانحياز من العكسي إلى الأمامي وراقب المنطقة الانتقالية والتيار.")) + '<div class="seg" id="s3sm"></div><div class="seg" id="s3sd"></div>';
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider(t("Temperature", "درجة الحرارة"), 0, 600, 10, 0, "K") + L._slider(t("Bias voltage", "جهد الانحياز"), -5, 1, 0.05, 0, "V"));
    var out = meter(host);
    var tick = L._goals(host, [t("Heat pure silicon until at least 3 electron-hole pairs appear.", "سخّن السيليكون النقي حتى يظهر ٣ أزواج (إلكترون-فجوة) على الأقل."),
      t("Dope with phosphorus: make an n-type crystal (n > p).", "طعّم بالفوسفور: كوّن بلورة من النوع n (n > p)."),
      t("Dope with boron: make a p-type crystal (p > n).", "طعّم بالبورون: كوّن بلورة من النوع p (p > n)."),
      t("Diode: forward bias it until the current exceeds 10 mA.", "الثنائي: اجعله في انحياز أمامي حتى يتجاوز التيار ١٠ مللي أمبير."),
      t("Diode: reverse bias it until the depletion region is twice as wide.", "الثنائي: اجعله في انحياز عكسي حتى تتضاعف المنطقة الانتقالية.")], done);
    var mode = "c", dop = "i", T = 0, Vb = 0, carriers = [], tm = 0;
    var NX = 7, NY = 4;
    function vis() { showSl(c, 0, mode === "c"); showSl(c, 1, mode === "d"); host.querySelector("#s3sd").style.display = mode === "c" ? "" : "none"; }
    K.seg(host, "#s3sm", [["c", t("Silicon crystal", "بلورة السيليكون")], ["d", t("pn diode", "الثنائي pn")]], mode, function (v) { mode = v; vis(); });
    K.seg(host, "#s3sd", [["i", t("Pure", "نقي")], ["n", t("+ Phosphorus (n)", "+ فوسفور (n)")], ["p", t("+ Boron (p)", "+ بورون (p)")]], dop, function (v) { dop = v; });
    sl(c, 0, function (v) { return n(v) + " K"; }, function (v) { T = v; });
    sl(c, 1, function (v) { return n(sig(v, 3)) + " V"; }, function (v) { Vb = v; });
    vis();
    var DOP = [[1, 1], [3, 2], [5, 1], [2, 3]]; // impurity sites
    var wander = []; for (var i = 0; i < 12; i++) wander.push({ x: Math.random(), y: Math.random(), vx: K.rnd(-1, 1), vy: K.rnd(-1, 1), ph: Math.random() * 6 });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H); tm += dt;
      if (mode === "c") {
        var gx0 = W * 0.06, gx1 = W * 0.62, gy0 = H * 0.12, gy1 = H * 0.88, dx = (gx1 - gx0) / (NX - 1), dy = (gy1 - gy0) / (NY - 1);
        var pairs = Math.round(6 * Math.pow(T / 600, 2)), nd = dop === "n" ? DOP.length : 0, na = dop === "p" ? DOP.length : 0, ne = pairs + nd, np = pairs + na;
        ctx.strokeStyle = C.line; ctx.lineWidth = 3;
        for (var x = 0; x < NX; x++) for (var y = 0; y < NY; y++) { var X = gx0 + x * dx, Y = gy0 + y * dy; if (x < NX - 1) { ctx.beginPath(); ctx.moveTo(X, Y); ctx.lineTo(X + dx, Y); ctx.stroke(); } if (y < NY - 1) { ctx.beginPath(); ctx.moveTo(X, Y); ctx.lineTo(X, Y + dy); ctx.stroke(); } }
        for (var x2 = 0; x2 < NX; x2++) for (var y2 = 0; y2 < NY; y2++) {
          var imp = DOP.filter(function (d) { return d[0] === x2 && d[1] === y2; }).length && dop !== "i";
          var X2 = gx0 + x2 * dx, Y2 = gy0 + y2 * dy, vib = T / 600 * 2;
          K.dot(ctx, X2 + K.rnd(-vib, vib), Y2 + K.rnd(-vib, vib), 13, imp ? (dop === "n" ? "#22c55e" : "#a855f7") : "#94a3b8", C.ink);
          txt(ctx, imp ? (dop === "n" ? "P⁺" : "B⁻") : "Si", X2, Y2, { c: "#fff", s: 10 });
        }
        // holes: fixed-ish on bonds, jumping
        for (var hI = 0; hI < np; hI++) { var bx = (hI * 3 + Math.floor(tm * 0.7 + hI)) % (NX - 1), by = (hI * 2 + Math.floor(tm * 0.5)) % NY; ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(gx0 + (bx + 0.5) * dx, gy0 + by * dy, 6, 0, 7); ctx.stroke(); }
        for (var eI = 0; eI < Math.min(ne, wander.length); eI++) { var w = wander[eI]; w.x += w.vx * dt * 0.25; w.y += w.vy * dt * 0.25; if (w.x < 0 || w.x > 1) w.vx *= -1; if (w.y < 0 || w.y > 1) w.vy *= -1; w.x = clamp(w.x, 0, 1); w.y = clamp(w.y, 0, 1); K.dot(ctx, gx0 + w.x * (gx1 - gx0), gy0 + w.y * (gy1 - gy0), 5, "#2563eb"); }
        var px = W * 0.82;
        txt(ctx, t("free electrons n = ", "إلكترونات حرة n = ") + n(ne), px, H * 0.2, { c: "#2563eb", s: 14 });
        txt(ctx, t("holes p = ", "فجوات p = ") + n(np), px, H * 0.32, { c: "#ef4444", s: 14 });
        var ty = ne > np ? t("n-type", "النوع n") : np > ne ? t("p-type", "النوع p") : t("intrinsic (n = p)", "نقي (n = p)");
        txt(ctx, ty, px, H * 0.46, { c: C.ink, s: 16 });
        txt(ctx, "n p = n_i²", px, H * 0.6, { c: C.muted, s: 13 });
        txt(ctx, T === 0 && dop === "i" ? t("all bonds intact: insulator", "كل الروابط سليمة: عازل") : "", px, H * 0.72, { c: C.muted, s: 11 });
        out([t("Pairs from heat: ", "أزواج من الحرارة: ") + n(pairs), "n = " + n(ne), "p = " + n(np), ty]);
        if (dop === "i" && pairs >= 3) tick(0);
        if (dop === "n" && ne > np) tick(1);
        if (dop === "p" && np > ne) tick(2);
      } else {
        var w0 = W * 0.08, wd = w0 * Math.sqrt(clamp((0.7 - Vb) / 0.7, 0.05, 9)), cx = W * 0.3, y0 = H * 0.15, y1 = H * 0.6;
        var I = 1e-6 * (Math.exp(Vb / 0.05) - 1), ImA = clamp(I * 1000, -0.001, 999);
        ctx.fillStyle = "rgba(239,68,68,.15)"; ctx.fillRect(W * 0.04, y0, cx - W * 0.04, y1 - y0); ctx.fillStyle = "rgba(37,99,235,.15)"; ctx.fillRect(cx, y0, W * 0.56 - cx, y1 - y0);
        ctx.fillStyle = C.card; ctx.fillRect(cx - wd / 2, y0, wd, y1 - y0); ctx.strokeStyle = C.muted; ctx.setLineDash([4, 3]); ctx.strokeRect(cx - wd / 2, y0, wd, y1 - y0); ctx.setLineDash([]);
        for (var k = 0; k < 4; k++) { txt(ctx, "−", cx - wd / 4, y0 + (k + 0.5) * (y1 - y0) / 4, { c: "#ef4444", s: 16 }); txt(ctx, "+", cx + wd / 4, y0 + (k + 0.5) * (y1 - y0) / 4, { c: "#2563eb", s: 16 }); }
        txt(ctx, "p", W * 0.08, y0 - 10, { c: "#ef4444", s: 16 }); txt(ctx, "n", W * 0.52, y0 - 10, { c: "#2563eb", s: 16 });
        var flow = Vb > 0.45;
        wander.forEach(function (q, j) {
          var left = j % 2 === 0, xx, yy = y0 + (0.1 + (j % 6) * 0.15) * (y1 - y0);
          q.ph += dt * (flow ? 1.2 : 0.3);
          if (left) { xx = W * 0.05 + ((q.ph * 40) % ((cx - wd / 2) - W * 0.05 + (flow ? wd : 0))); ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(xx, yy, 5, 0, 7); ctx.stroke(); }
          else { var span = W * 0.55 - (cx + wd / 2) + (flow ? wd : 0); xx = W * 0.55 - ((q.ph * 40) % Math.max(span, 1)); K.dot(ctx, xx, yy, 4.5, "#2563eb"); }
        });
        txt(ctx, Vb >= 0 ? t("forward bias (p to +)", "انحياز أمامي (p بالموجب)") : t("reverse bias (p to −)", "انحياز عكسي (p بالسالب)"), W * 0.3, H * 0.68, { c: C.ink, s: 13 });
        // I-V curve
        var gx = W * 0.62, gw = W * 0.35, gy = H * 0.75, gh = H * 0.6;
        ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx + gw, gy); ctx.moveTo(gx + gw * 5 / 6, gy - gh); ctx.lineTo(gx + gw * 5 / 6, gy + 10); ctx.stroke();
        ctx.strokeStyle = "#7c3aed"; ctx.lineWidth = 2.5; ctx.beginPath();
        for (var s = 0; s <= 120; s++) { var v = -5 + s * 6 / 120, ii = clamp(1e-6 * (Math.exp(v / 0.05) - 1) * 1000 / 50, -0.02, 1.05), X3 = gx + (v + 5) / 6 * gw, Y3 = gy - ii * gh; if (s) ctx.lineTo(X3, Y3); else ctx.moveTo(X3, Y3); } ctx.stroke();
        K.dot(ctx, gx + (Vb + 5) / 6 * gw, gy - clamp(ImA / 50, -0.02, 1.05) * gh, 7, "#f97316", "#fff");
        txt(ctx, "I", gx + gw * 5 / 6 + 10, gy - gh, { c: C.muted, s: 12 }); txt(ctx, "V", gx + gw - 6, gy + 12, { c: C.muted, s: 12 });
        out(["V = " + n(sig(Vb, 3)) + " V", "I = " + (ImA > 0.01 ? n(sig(ImA, 3)) + " mA" : t("≈ 0 (tiny)", "≈ صفر (ضئيل)")), t("Depletion width ×", "عرض المنطقة الانتقالية ×") + n(sig(wd / (w0), 2))]);
        if (ImA > 10) tick(3);
        if (wd / w0 >= 2) tick(4);
      }
    });
  };

  /* =========================================================
     14. sec3phy_gates - logic gates with tap switches + transistor switch
     ========================================================= */
  L.sec3phy_gates = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a gate and tap the input switches A and B to fill its truth table. Then slide the base voltage of the transistor switch.",
      "اختر بوابة واضغط على مفتاحي الدخل A و B لتملأ جدول الحقيقة، ثم حرّك جهد القاعدة لمفتاح الترانزستور.")) + '<div class="seg" id="s3gm"></div>';
    var S = K.make(host, 0.58, 360);
    var c = box(host, L._slider(t("Base input V_in", "دخل القاعدة V_in"), 0, 5, 0.1, 0, "V"));
    var tbl = E.el("div", "meter"); host.appendChild(tbl);
    var tick = L._goals(host, [t("Fill the whole AND truth table (all 4 input pairs).", "املأ جدول حقيقة AND كاملًا (الاحتمالات الأربعة)."),
      t("Fill the whole OR truth table.", "املأ جدول حقيقة OR كاملًا."),
      t("Try both inputs of the NOT gate.", "جرّب حالتي دخل بوابة NOT."),
      t("Transistor: make it a closed switch (V_CE about 0.2 V, lamp ON).", "الترانزستور: اجعله مفتاحًا مغلقًا (V_CE حوالي ٠٫٢ فولت، اللمبة مضيئة)."),
      t("Transistor: make it an open switch (I_C = 0, V_CE = V_CC).", "الترانزستور: اجعله مفتاحًا مفتوحًا (I_C = صفر، V_CE = V_CC).")], done);
    var gate = "AND", a = 0, b = 0, seen = { AND: {}, OR: {}, NOT: {} }, Vin = 0, sawLow = false, sawOpen = false;
    function outp() { return gate === "AND" ? a & b : gate === "OR" ? a | b : 1 - a; }
    function mark() {
      var key = gate === "NOT" ? String(a) : a + "" + b; seen[gate][key] = outp();
      if (Object.keys(seen.AND).length === 4) tick(0); if (Object.keys(seen.OR).length === 4) tick(1); if (Object.keys(seen.NOT).length === 2) tick(2);
      var rows = gate === "NOT" ? ["0", "1"] : ["00", "01", "10", "11"];
      tbl.innerHTML = "<b>" + gate + "</b>" + rows.map(function (r) { var o = seen[gate][r]; return '<span dir="ltr">' + (gate === "NOT" ? "A=" + r : "A=" + r[0] + " B=" + r[1]) + " → " + (o === undefined ? "?" : o) + "</span>"; }).join("");
    }
    K.seg(host, "#s3gm", [["AND", "AND"], ["OR", "OR"], ["NOT", "NOT"]], gate, function (v) { gate = v; if (v === "NOT") b = 0; mark(); });
    sl(c, 0, function (v) { return n(v) + " V"; }, function (v) { Vin = v; });
    mark();
    function sw() { var W = S.W, H = S.H; return { A: { x: W * 0.08, y: H * 0.22 }, B: { x: W * 0.08, y: H * 0.46 } }; }
    S.drag({
      down: function (p) { var s = sw(); if (Math.hypot(p.x - s.A.x, p.y - s.A.y) < 30) { a = 1 - a; mark(); return true; } if (gate !== "NOT" && Math.hypot(p.x - s.B.x, p.y - s.B.y) < 30) { b = 1 - b; mark(); return true; } return false; },
      hover: function (p) { var s = sw(); return Math.hypot(p.x - s.A.x, p.y - s.A.y) < 30 || (gate !== "NOT" && Math.hypot(p.x - s.B.x, p.y - s.B.y) < 30); }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, s = sw(), gx = W * 0.26, gy = H * 0.34, gs = Math.min(W * 0.1, H * 0.2);
      ctx.clearRect(0, 0, W, H);
      [["A", a, s.A], ["B", b, s.B]].forEach(function (q) {
        if (q[0] === "B" && gate === "NOT") return;
        ctx.fillStyle = q[1] ? "#22c55e" : C.line; K.rr(ctx, q[2].x - 24, q[2].y - 14, 48, 28, 14); ctx.fill();
        K.dot(ctx, q[2].x + (q[1] ? 10 : -10), q[2].y, 11, "#fff", C.muted); txt(ctx, q[0] + "=" + q[1], q[2].x, q[2].y - 24, { c: C.ink, s: 12 });
        poly(ctx, [[q[2].x + 26, q[2].y], [gx - gs * 0.5, q[2].y], [gx - gs * 0.5, gate === "NOT" ? gy : (q[0] === "A" ? gy - gs * 0.25 : gy + gs * 0.25)], [gx, gate === "NOT" ? gy : (q[0] === "A" ? gy - gs * 0.25 : gy + gs * 0.25)]], q[1] ? "#22c55e" : C.muted, 2.5);
      });
      ctx.fillStyle = C.card; ctx.strokeStyle = C.ink; ctx.lineWidth = 2.5; ctx.beginPath();
      if (gate === "AND") { ctx.moveTo(gx, gy - gs * 0.5); ctx.lineTo(gx + gs * 0.5, gy - gs * 0.5); ctx.arc(gx + gs * 0.5, gy, gs * 0.5, -Math.PI / 2, Math.PI / 2); ctx.lineTo(gx, gy + gs * 0.5); ctx.closePath(); }
      else if (gate === "OR") { ctx.moveTo(gx, gy - gs * 0.5); ctx.quadraticCurveTo(gx + gs * 0.8, gy - gs * 0.5, gx + gs, gy); ctx.quadraticCurveTo(gx + gs * 0.8, gy + gs * 0.5, gx, gy + gs * 0.5); ctx.quadraticCurveTo(gx + gs * 0.3, gy, gx, gy - gs * 0.5); }
      else { ctx.moveTo(gx, gy - gs * 0.45); ctx.lineTo(gx + gs * 0.85, gy); ctx.lineTo(gx, gy + gs * 0.45); ctx.closePath(); }
      ctx.fill(); ctx.stroke(); if (gate === "NOT") K.dot(ctx, gx + gs * 0.92, gy, 6, C.card, C.ink);
      txt(ctx, gate, gx + gs * 0.4, gy, { c: C.muted, s: 11 });
      var o = outp(); poly(ctx, [[gx + gs, gy], [gx + gs * 1.8, gy]], o ? "#22c55e" : C.muted, 2.5);
      K.dot(ctx, gx + gs * 2.1, gy, 16, o ? "#facc15" : C.line, C.ink); txt(ctx, t("out = ", "الخرج = ") + o, gx + gs * 2.1, gy + 28, { c: C.ink, s: 12 });
      // transistor switch (right half)
      var Vcc = 5, Rc = 1000, Rb = 10000, beta = 100, Ib = Math.max(0, (Vin - 0.7) / Rb), Ic = Math.min(beta * Ib, (Vcc - 0.2) / Rc), Vce = Vcc - Ic * Rc;
      var tx = W * 0.72, ty = H * 0.55;
      txt(ctx, t("Transistor switch (V_CC = 5 V)", "مفتاح ترانزستور (V_CC = ٥ فولت)"), tx, H * 0.08, { c: C.ink, s: 12 });
      poly(ctx, [[tx + 20, H * 0.14], [tx + 20, ty - 26]], C.muted, 2.5); P.resBox(ctx, tx + 20, H * 0.28, 22, 40, "R_C", C);
      K.dot(ctx, tx + 20, H * 0.14, 5, "#ef4444"); txt(ctx, "+5V", tx + 46, H * 0.14, { c: "#ef4444", s: 11 });
      K.dot(ctx, tx, ty, 26, C.card, C.ink); poly(ctx, [[tx - 8, ty - 16], [tx - 8, ty + 16]], C.ink, 3); poly(ctx, [[tx - 8, ty - 6], [tx + 20, ty - 26]], C.ink, 2.5); poly(ctx, [[tx - 8, ty + 6], [tx + 20, ty + 26]], C.ink, 2.5);
      poly(ctx, [[tx - 70, ty], [tx - 8, ty]], Vin > 0.7 ? "#22c55e" : C.muted, 2.5); txt(ctx, "V_in = " + n(Vin) + " V", tx - 60, ty - 14, { c: C.ink, s: 11 });
      poly(ctx, [[tx + 20, ty + 26], [tx + 20, H * 0.86]], C.muted, 2.5); txt(ctx, "⏚", tx + 20, H * 0.9, { c: C.muted, s: 14 });
      var on = Ic > 0.004;
      K.dot(ctx, tx + 70, H * 0.28, 13, on ? "#facc15" : C.line, C.ink); poly(ctx, [[tx + 20, H * 0.2], [tx + 70, H * 0.2], [tx + 70, H * 0.36]], C.muted, 1.5);
      txt(ctx, "I_C = " + n(sig(Ic * 1000, 3)) + " mA", tx, H * 0.78, { c: "#2563eb", s: 12 }); txt(ctx, "V_CE = " + n(sig(Vce, 3)) + " V", tx, H * 0.84, { c: "#7c3aed", s: 12 });
      txt(ctx, Vce <= 0.25 ? t("closed switch (output LOW)", "مفتاح مغلق (خرج منخفض)") : Ic < 1e-6 ? t("open switch (output HIGH)", "مفتاح مفتوح (خرج مرتفع)") : t("amplifying region", "منطقة التكبير"), tx, H * 0.96, { c: C.muted, s: 11 });
      if (Vce <= 0.25) tick(3);
      if (Ic < 1e-6 && Vin < 0.7 && sawLow) tick(4);
      if (Vce <= 0.25) sawLow = true;
    });
  };

  /* ---------- part names ---------- */
  var NM = {
    sec3phy_resnet: ["Series and parallel bench", "منضدة التوالي والتوازي"], sec3phy_kirch: ["Closed circuit and Kirchhoff simulation", "محاكاة الدائرة المغلقة وكيرتشوف"],
    sec3phy_bfield: ["Magnetic field explorer", "مستكشف المجال المغناطيسي"], sec3phy_force: ["Force and torque simulation", "محاكاة القوة وعزم الازدواج"],
    sec3phy_meters: ["Meter builder", "بناء أجهزة القياس"], sec3phy_induct: ["Faraday's induction lab", "معمل حث فاراداي"],
    sec3phy_dynamo: ["Dynamo and transformer simulation", "محاكاة الدينامو والمحول"], sec3phy_rlc: ["RLC resonance simulation", "محاكاة رنين RLC"],
    sec3phy_photo: ["Photoelectric and black-body lab", "معمل الكهروضوئية والجسم الأسود"], sec3phy_compton: ["Compton and de Broglie simulation", "محاكاة كومتون ودي برولي"],
    sec3phy_bohr: ["Bohr atom spectrum builder", "بناء طيف ذرة بور"], sec3phy_laser: ["Laser cavity simulation", "محاكاة تجويف الليزر"],
    sec3phy_semi: ["Semiconductor and diode simulation", "محاكاة أشباه الموصلات والثنائي"], sec3phy_gates: ["Logic gates and transistor switch", "البوابات المنطقية ومفتاح الترانزستور"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
