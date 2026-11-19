/* EduZone Learn v3 - Science, Egyptian Secondary 1, Integrated Science, Term 1 (2026-2027).
   Follows the Ministry book "Integrated Science, First Secondary Grade, First Semester"
   (Ecosystems and the Sustainability of Life): Unit 1 Aquatic Ecosystems (1-1 .. 1-10),
   Unit 2 The Atmosphere (2-1 .. 2-4). Printed page numbers in `page`.
   Registers EZ3.SCIG.sec1 = {units, book} (ids sec1u1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.sec1_*). Same lesson shape as Prep 2 (sci-prep2.js). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec1 = { book: { en: "Integrated Science, First Secondary Grade, First Semester", ar: "العلوم المتكاملة، الصف الأول الثانوي، الفصل الدراسي الأول" }, units: [] };

  /* ================= UNIT 1: AQUATIC ECOSYSTEMS ================= */
  G.units.push({
    id: "sec1u1", num: 1, icon: "🌊", color: "blue",
    title: { en: "Aquatic Ecosystems", ar: "النظم البيئية المائية" },
    lessons: [
      {
        id: "sec1u1l1", icon: "💧", page: 5,
        title: { en: "The Hydrosphere and the Water Molecule", ar: "الغلاف المائي وجزيء الماء" },
        idea: {
          official: {
            en: ["The hydrosphere is the water on Earth. Water covers about 70% of Earth's surface: 97% of it is salty, about 2% is frozen and only about 1% is usable fresh water.",
              "The water cycle is an almost closed system: evaporation, transpiration, respiration and excretion add vapour; condensation forms clouds; precipitation and infiltration return water to the surface and the groundwater.",
              "A water molecule is one oxygen atom joined to two hydrogen atoms by two single covalent bonds at about " + eq("104.5°") + ". By mass, " + eq("O = 16/18 = 88.89%") + " and " + eq("H = 2/18 = 11.11%") + ".",
              "Oxygen has a higher electronegativity, so it pulls the bond electrons: oxygen gets a partial negative charge " + eq("δ−") + " and each hydrogen a partial positive charge " + eq("δ+") + ". This is the polarity of water.",
              "Polar molecules attract each other by hydrogen bonds (up to four per molecule). That is why water boils at 100°C while the heavier H₂S boils at −61°C.",
              "Water is a universal solvent: in NaCl solution, Na⁺ is surrounded by the δ− oxygen ends and Cl⁻ by the δ+ hydrogen ends, " + eq("NaCl(s) → Na⁺(aq) + Cl⁻(aq)") + "; this is dissociation, not hydrolysis."],
            ar: ["الغلاف المائي هو الماء الموجود على الأرض، ويغطي الماء نحو ٧٠٪ من سطحها؛ ٩٧٪ منه مالح، ونحو ٢٪ متجمد، ونحو ١٪ فقط ماء عذب صالح للاستخدام.",
              "دورة الماء في الطبيعة نظام شبه مغلق: البخر والنتح والتنفس والإخراج تضيف بخار الماء، والتكثف يكوّن السحب، والهطول والتسرب يعيدان الماء إلى السطح والمياه الجوفية.",
              "يتكون جزيء الماء من ذرة أكسجين مرتبطة بذرتي هيدروجين برابطتين تساهميتين أحاديتين بينهما زاوية نحو " + eq("104.5°") + "، ونسبة الكتلة " + eq("O = 16/18 = 88.89%") + " و" + eq("H = 2/18 = 11.11%") + ".",
              "السالبية الكهربية للأكسجين أعلى، فيجذب إلكترونات الرابطة نحوه؛ فتحمل ذرة الأكسجين شحنة جزئية سالبة " + eq("δ−") + " وكل ذرة هيدروجين شحنة جزئية موجبة " + eq("δ+") + "، وهذه هي قطبية الماء.",
              "تتجاذب الجزيئات القطبية بروابط هيدروجينية (حتى أربع روابط لكل جزيء)، ولذلك يغلي الماء عند ١٠٠°م بينما يغلي كبريتيد الهيدروجين الأثقل عند −٦١°م.",
              "الماء مذيب عام: في محلول ملح الطعام تحيط أطراف الأكسجين السالبة بأيون الصوديوم وأطراف الهيدروجين الموجبة بأيون الكلوريد، " + eq("NaCl(s) → Na⁺(aq) + Cl⁻(aq)") + "، وهذا تفكك وليس تميؤًا."]
          },
          story: {
            en: ["Mariam looks at a globe in her Alexandria classroom: so much blue, yet Egypt worries about every drop of the Nile.",
              "Her teacher explains: of all that water, only about 1% is fresh and usable. The rest is salty sea or frozen ice.",
              "At home she stirs salt into her tea glass of water. The crystals vanish because each water molecule is a tiny magnet: a negative oxygen end and two positive hydrogen ends.",
              "The oxygen ends crowd around each sodium ion and the hydrogen ends hug each chloride ion, pulling the crystal apart.",
              "She also learns why her kettle needs 100°C: hydrogen bonds hold water molecules together, so it takes extra energy to set them free as vapour."],
            ar: ["تنظر مريم إلى مجسم الكرة الأرضية في فصلها بالإسكندرية: لون أزرق في كل مكان، ومع ذلك تهتم مصر بكل قطرة من مياه النيل.",
              "تشرح المعلمة أن نحو ١٪ فقط من كل هذا الماء عذب صالح للاستخدام، والباقي بحار مالحة أو جليد متجمد.",
              "في البيت تذيب مريم الملح في كوب ماء فتختفي البلورات، لأن كل جزيء ماء مغناطيس صغير: طرف أكسجين سالب وطرفا هيدروجين موجبان.",
              "تلتف أطراف الأكسجين حول كل أيون صوديوم، وتحتضن أطراف الهيدروجين كل أيون كلوريد، فتتفكك البلورة.",
              "وتفهم أيضًا لماذا تحتاج الغلاية إلى ١٠٠°م: الروابط الهيدروجينية تمسك جزيئات الماء معًا، فيلزم طاقة إضافية لتحريرها بخارًا."]
          }
        },
        words: [
          ["Hydrosphere", "الغلاف المائي", "All the water found on Earth: oceans, seas, rivers, lakes, ice and groundwater.", "كل الماء الموجود على الأرض: المحيطات والبحار والأنهار والبحيرات والجليد والمياه الجوفية."],
          ["Water cycle", "دورة الماء في الطبيعة", "The continuous movement of water between its three states around the planet; an almost closed system.", "الحركة المستمرة للماء بين حالاته الثلاث حول الكوكب، وهي نظام شبه مغلق."],
          ["Transpiration", "النتح", "Loss of excess water as vapour from plant surfaces, mostly through the stomata.", "تخلص النبات من الماء الزائد في صورة بخار من أسطحه المعرضة للهواء، ومعظمه عن طريق الثغور."],
          ["Electronegativity", "السالبية الكهربية", "A measure of an atom's ability to pull the electrons of a chemical bond toward it.", "مقياس لقدرة الذرة على جذب إلكترونات الرابطة الكيميائية نحوها."],
          ["Polarity", "القطبية", "Partial negative charge on oxygen and partial positive charge on hydrogen in the water molecule.", "وجود شحنة جزئية سالبة على الأكسجين وشحنة جزئية موجبة على الهيدروجين في جزيء الماء."],
          ["Hydrogen bond", "الرابطة الهيدروجينية", "Electrostatic attraction between δ− oxygen of one water molecule and δ+ hydrogen of a neighbouring one.", "تجاذب كهروستاتيكي بين أكسجين جزيء ماء (δ−) وهيدروجين جزيء ماء مجاور (δ+)."],
          ["Universal solvent", "المذيب العام", "Water: it dissolves ionic compounds and polar covalent compounds.", "الماء؛ لأنه يذيب المركبات الأيونية والمركبات التساهمية القطبية."]
        ],
        lab: { parts: [{ type: "sec1_dissolve" }, {
          type: "sort",
          prompt: ["Tap a process, then tap how it moves water in the water cycle.", "اضغط على العملية، ثم اختر كيف تنقل الماء في دورة الماء."],
          bins: [["up", "☁️", "Adds vapour to the air", "تضيف بخارًا إلى الهواء"], ["down", "🌧️", "Returns water to the ground", "تعيد الماء إلى الأرض"]],
          items: [[["Evaporation", "البخر"], "up"], [["Transpiration", "النتح"], "up"], [["Respiration", "التنفس"], "up"], [["Excretion of water vapour", "إخراج بخار الماء"], "up"],
            [["Rainfall", "سقوط الأمطار"], "down"], [["Snowfall", "سقوط الثلوج"], "down"], [["Infiltration into soil", "التسرب في التربة"], "down"], [["Surface runoff", "الجريان السطحي"], "down"]]
        }] },
        quiz: [
          { q: ["About what percentage of Earth's water is fresh water available for human use?", "ما النسبة التقريبية للماء العذب المتاح للإنسان من مياه الأرض؟"],
            c: [["1%", "١٪"], ["2%", "٢٪"], ["70%", "٧٠٪"], ["97%", "٩٧٪"]],
            off: ["97% is salty, about 2% is frozen in ice caps and glaciers, and only about 1% is fresh water in rivers, lakes and groundwater. 70% is the fraction of the SURFACE covered by water.", "٩٧٪ مالح، ونحو ٢٪ متجمد في القمم الجليدية والأنهار الجليدية، ونحو ١٪ فقط عذب في الأنهار والبحيرات والمياه الجوفية، أما ٧٠٪ فهي نسبة السطح المغطى بالماء."],
            sto: ["Mariam's globe is 70% blue, but only one drop in a hundred is drinkable.", "مجسم مريم أزرق بنسبة ٧٠٪، لكن قطرة واحدة من كل مئة فقط صالحة للشرب."] },
          { q: ["What is the percentage by mass of hydrogen in a water molecule (H = 1, O = 16)?", "ما النسبة المئوية لكتلة الهيدروجين في جزيء الماء (H = 1، O = 16)؟"],
            c: [["11.11%", "11.11%"], ["66.67%", "66.67%"], ["88.89%", "88.89%"], ["33.33%", "33.33%"]],
            off: ["Molar mass of H₂O = 2(1) + 16 = 18. Hydrogen = 2/18 × 100 = 11.11%; oxygen = 16/18 × 100 = 88.89%. 66.67% is the fraction of ATOMS (2 of 3), not mass.", "الكتلة الجزيئية للماء = ٢(١) + ١٦ = ١٨، والهيدروجين = ٢ ÷ ١٨ × ١٠٠ = 11.11٪، والأكسجين = 88.89٪. أما 66.67٪ فهي نسبة عدد الذرات لا الكتلة."],
            sto: ["Two light hydrogen atoms weigh very little next to one heavy oxygen.", "ذرتا الهيدروجين الخفيفتان لا تزنان شيئًا يذكر بجوار ذرة الأكسجين الثقيلة."] },
          { q: ["The mass ratio of hydrogen to oxygen in water is...", "النسبة بين كتلة الهيدروجين وكتلة الأكسجين في الماء هي..."],
            c: [["1 : 8", "١ : ٨"], ["2 : 1", "٢ : ١"], ["1 : 16", "١ : ١٦"], ["8 : 1", "٨ : ١"]],
            off: ["Mass of H = 2 × 1 = 2, mass of O = 16, so H : O = 2 : 16 = 1 : 8. 2 : 1 is the ratio of the number of atoms.", "كتلة الهيدروجين = ٢ × ١ = ٢، وكتلة الأكسجين = ١٦، فالنسبة ٢ : ١٦ = ١ : ٨، أما ٢ : ١ فهي نسبة عدد الذرات."],
            sto: ["In 9 g of water, Mariam finds 1 g of hydrogen and 8 g of oxygen.", "في ٩ جم من الماء تجد مريم ١ جم هيدروجين و٨ جم أكسجين."] },
          { q: ["How many grams of hydrogen are in 36 g of water?", "كم جرامًا من الهيدروجين يوجد في ٣٦ جم من الماء؟"],
            c: [["4 g", "٤ جم"], ["2 g", "٢ جم"], ["32 g", "٣٢ جم"], ["11.11 g", "11.11 جم"]],
            off: ["Hydrogen is 2/18 of the mass: 36 × 2/18 = 4 g (the remaining 32 g is oxygen).", "الهيدروجين يمثل ٢ من ١٨ من الكتلة: ٣٦ × ٢ ÷ ١٨ = ٤ جم، والباقي ٣٢ جم أكسجين."],
            sto: ["Two glasses of 18 g each: 2 g of hydrogen in each.", "كوبان كل منهما ١٨ جم، في كل منهما ٢ جم هيدروجين."] },
          { q: ["Why does water (M = 18) boil at 100°C while hydrogen sulfide (M = 34) boils at −61°C?", "لماذا يغلي الماء (الكتلة ١٨) عند ١٠٠°م بينما يغلي كبريتيد الهيدروجين (الكتلة ٣٤) عند −٦١°م؟"],
            c: [["Hydrogen bonds between water molecules need extra energy to break", "الروابط الهيدروجينية بين جزيئات الماء تحتاج طاقة إضافية لكسرها"], ["Water has a larger molecular mass", "الكتلة الجزيئية للماء أكبر"], ["Water molecules are non-polar", "جزيئات الماء غير قطبية"], ["The covalent bonds inside water break at 100°C", "الروابط التساهمية داخل الماء تنكسر عند ١٠٠°م"]],
            off: ["Normally a heavier molecule boils higher, but water is lighter. The network of hydrogen bonds between water molecules must be broken to vaporize it. Boiling does not break the O−H covalent bonds.", "عادةً يرتفع الغليان بزيادة الكتلة الجزيئية، لكن الماء أخف؛ والسبب شبكة الروابط الهيدروجينية بين جزيئاته التي يجب كسرها لتبخيره، والغليان لا يكسر الروابط التساهمية O−H."],
            sto: ["Water molecules hold hands; the kettle must pull them apart.", "جزيئات الماء متشابكة الأيدي، والغلاية يجب أن تفك هذا التشابك."] },
          { q: ["When NaCl dissolves in water, the Na⁺ ions are surrounded by...", "عند ذوبان كلوريد الصوديوم في الماء تحاط أيونات Na⁺ بـ..."],
            c: [["the δ− oxygen ends of water molecules", "أطراف الأكسجين (δ−) لجزيئات الماء"], ["the δ+ hydrogen ends of water molecules", "أطراف الهيدروجين (δ+) لجزيئات الماء"], ["chloride ions only", "أيونات الكلوريد فقط"], ["hydroxide ions formed by hydrolysis", "أيونات هيدروكسيد ناتجة من التميؤ"]],
            off: ["Opposite charges attract: positive Na⁺ attracts the partially negative oxygen; negative Cl⁻ attracts the partially positive hydrogen. No hydrolysis happens: no acid or base forms.", "الشحنات المختلفة تتجاذب: Na⁺ الموجب يجذب الأكسجين الجزئي السالب، وCl⁻ السالب يجذب الهيدروجين الجزئي الموجب، ولا يحدث تميؤ لأنه لا يتكون حمض ولا قاعدة."],
            sto: ["In Mariam's glass, every sodium ion gets a ring of oxygen 'faces'.", "في كوب مريم يحاط كل أيون صوديوم بحلقة من وجوه الأكسجين."] },
          { q: ["If evaporation stopped completely, what would happen first?", "إذا توقف البخر تمامًا، فماذا يحدث أولًا؟"],
            c: [["The water cycle would be directly disturbed: less vapour, fewer clouds and less rain", "تختل دورة الماء مباشرة: بخار أقل وسحب أقل وأمطار أقل"], ["Groundwater would increase", "تزداد المياه الجوفية"], ["Oceans would become fresh", "تصبح المحيطات عذبة"], ["Transpiration would stop", "يتوقف النتح"]],
            off: ["Evaporation from water bodies is the main supply of vapour; without it condensation and precipitation drop and the balance of the cycle breaks.", "البخر من المسطحات المائية هو المصدر الرئيسي لبخار الماء، وبدونه يقل التكثف والهطول ويختل اتزان الدورة."],
            sto: ["No steam from the sea pot means no clouds over the Delta.", "لا بخار من قِدر البحر يعني لا سحب فوق الدلتا."] }
        ]
      },
      {
        id: "sec1u1l2", icon: "🧪", page: 10,
        title: { en: "Ionic Equilibrium, Hydrolysis and pH", ar: "الاتزان الأيوني للماء والتميؤ والأس الهيدروجيني" },
        idea: {
          official: {
            en: ["Pure water ionizes very slightly into equal amounts of hydrogen and hydroxide ions, so it is neutral: " + eq("H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)") + ".",
              "Hydrolysis is the reaction of a salt with water forming an acid and a base, one or both of which are weak: " + eq("Salt + Water ⇌ Acid + Base") + ".",
              "Acidic salt: ammonium chloride, " + eq("NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻") + ". [H⁺] rises above [OH⁻], so the solution is acidic.",
              "Basic salt: sodium bicarbonate, " + eq("NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃") + ". [OH⁻] rises, so the solution is basic. Neutral salt: ammonium bicarbonate gives a weak acid and a weak base, so [H⁺] = [OH⁻].",
              "The pH scale (0 to 14) expresses acidity or alkalinity: pH 7 is neutral, below 7 acidic, above 7 alkaline. Sea water is about 7.5 to 8.4, cloud water 4.5 to 5, mine water 3 to 4.",
              "pH is measured with a pH meter (calibrated in distilled water) or with test strips compared to a colour chart."],
            ar: ["يتأين الماء النقي تأينًا ضعيفًا جدًا إلى كميات متساوية من أيونات الهيدروجين والهيدروكسيد فيكون متعادلًا: " + eq("H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)") + ".",
              "التميؤ هو تفاعل الملح مع الماء لتكوين حمض وقاعدة أحدهما أو كلاهما ضعيف: " + eq("ملح + ماء ⇌ حمض + قاعدة") + ".",
              "الملح الحمضي: كلوريد الأمونيوم " + eq("NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻") + "، فيزيد تركيز H⁺ عن OH⁻ ويصبح المحلول حمضيًا.",
              "الملح القاعدي: بيكربونات الصوديوم " + eq("NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃") + "، فيزيد تركيز OH⁻ ويصبح المحلول قاعديًا. والملح المتعادل مثل بيكربونات الأمونيوم يعطي حمضًا ضعيفًا وقاعدة ضعيفة فيتساوى التركيزان.",
              "مقياس الأس الهيدروجيني (pH) من ٠ إلى ١٤ يعبر عن درجة الحمضية أو القاعدية: ٧ متعادل، وأقل من ٧ حمضي، وأكبر من ٧ قاعدي. ماء البحر بين 7.5 و8.4، وماء السحب بين 4.5 و5، وماء المناجم بين ٣ و٤.",
              "يقاس الأس الهيدروجيني بجهاز pH meter بعد معايرته بالماء المقطر، أو بشرائط الاختبار ومقارنة لونها بالجدول القياسي."]
          },
          story: {
            en: ["Omar's grandmother in Mansoura puts baking soda in water to soothe heartburn. Omar wonders why it works.",
              "In the school lab he dips a test strip into the baking-soda water: it turns blue-green, about pH 8. The salt NaHCO₃ hydrolyses and releases OH⁻ ions.",
              "Then he tests ammonium chloride solution: the strip turns orange, below 7. This salt makes extra H⁺ ions.",
              "Common table salt stays at 7: its ions just float, surrounded by water, without making an acid or a base.",
              "On a trip to Hurghada he tests sea water, about 8.1: slightly alkaline, just like his book's table says."],
            ar: ["تضع جدة عمر في المنصورة بيكربونات الصوديوم في الماء لتهدئة حموضة المعدة، فيتساءل عمر: لماذا تنجح؟",
              "في معمل المدرسة يغمس شريط اختبار في محلول البيكربونات فيصبح أزرق مخضرًا عند نحو ٨؛ فالملح NaHCO₃ يتميأ ويطلق أيونات OH⁻.",
              "ثم يختبر محلول كلوريد الأمونيوم فيصبح الشريط برتقاليًا أقل من ٧؛ فهذا الملح يكوّن أيونات H⁺ إضافية.",
              "أما ملح الطعام فيبقى عند ٧؛ أيوناته تسبح محاطة بالماء دون أن تكوّن حمضًا أو قاعدة.",
              "وفي رحلة إلى الغردقة يختبر ماء البحر فيجده نحو 8.1؛ قاعديًا قليلًا كما في جدول كتابه."]
          }
        },
        words: [
          ["Ionic equilibrium of water", "الاتزان الأيوني للماء", "Pure water ionizes slightly into equal concentrations of H⁺ and OH⁻.", "تأين الماء النقي تأينًا ضعيفًا إلى تركيزين متساويين من H⁺ وOH⁻."],
          ["Hydrolysis", "التميؤ", "Reaction of a salt with water forming an acid and a base, one or both weak.", "تفاعل الملح مع الماء لتكوين حمض وقاعدة أحدهما أو كلاهما ضعيف."],
          ["Acidic salt", "ملح حمضي", "A salt whose hydrolysis makes [H⁺] greater than [OH⁻], e.g. NH₄Cl.", "ملح يؤدي تميؤه إلى زيادة تركيز H⁺ عن OH⁻، مثل NH₄Cl."],
          ["Basic salt", "ملح قاعدي", "A salt whose hydrolysis makes [OH⁻] greater than [H⁺], e.g. NaHCO₃.", "ملح يؤدي تميؤه إلى زيادة تركيز OH⁻ عن H⁺، مثل NaHCO₃."],
          ["Neutral salt", "ملح متعادل", "A salt whose hydrolysis keeps [H⁺] = [OH⁻], e.g. NH₄HCO₃.", "ملح لا يغير تميؤه تساوي تركيزي H⁺ وOH⁻، مثل NH₄HCO₃."],
          ["pH scale", "مقياس الأس الهيدروجيني", "A scale from 0 to 14 expressing the acidity or alkalinity of a solution; 7 is neutral.", "مقياس من ٠ إلى ١٤ يعبر عن درجة حمضية المحلول أو قاعديته، و٧ نقطة التعادل."]
        ],
        lab: { parts: [{ type: "sec1_ph" }, {
          type: "sort",
          prompt: ["Tap a salt or water sample, then tap the kind of solution it gives.", "اضغط على الملح أو عينة الماء، ثم اختر نوع المحلول."],
          bins: [["a", "🍋", "Acidic (pH < 7)", "حمضي (pH < 7)"], ["n", "⚖️", "Neutral (pH = 7)", "متعادل (pH = 7)"], ["b", "🧼", "Basic (pH > 7)", "قاعدي (pH > 7)"]],
          items: [[["NH₄Cl solution", "محلول NH₄Cl"], "a"], [["Mine water", "ماء المناجم"], "a"], [["Cloud water", "ماء السحب"], "a"],
            [["NaHCO₃ solution", "محلول NaHCO₃"], "b"], [["Sea water", "ماء البحر"], "b"], [["Distilled water", "الماء المقطر"], "n"], [["NH₄HCO₃ solution", "محلول NH₄HCO₃"], "n"], [["NaCl solution", "محلول NaCl"], "n"]]
        }] },
        quiz: [
          { q: ["Pure water is neutral because...", "الماء النقي متعادل لأن..."],
            c: [["[H⁺] equals [OH⁻]", "تركيز H⁺ يساوي تركيز OH⁻"], ["it contains no ions at all", "لا يحتوي على أي أيونات"], ["[H⁺] is greater than [OH⁻]", "تركيز H⁺ أكبر من OH⁻"], ["it is a strong electrolyte", "إلكتروليت قوي"]],
            off: ["Water ionizes slightly, H₂O ⇌ H⁺ + OH⁻, giving equal concentrations, so pH = 7.", "يتأين الماء تأينًا ضعيفًا H₂O ⇌ H⁺ + OH⁻ بتركيزين متساويين، فيكون pH = ٧."],
            sto: ["A perfectly balanced seesaw: one H⁺ for every OH⁻.", "أرجوحة متزنة تمامًا: أيون H⁺ مقابل كل OH⁻."] },
          { q: ["The solution of ammonium chloride (NH₄Cl) is acidic because...", "محلول كلوريد الأمونيوم حمضي لأن..."],
            c: [["[OH⁻] in the solution is less than [H⁺]", "تركيز OH⁻ في المحلول أقل من H⁺"], ["[OH⁻] is greater than [H⁺]", "تركيز OH⁻ أكبر من H⁺"], ["[OH⁻] equals [H⁺]", "تركيز OH⁻ يساوي H⁺"], ["NH₄Cl does not react with water", "NH₄Cl لا يتفاعل مع الماء"]],
            off: ["Hydrolysis: NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻. NH₄OH is a weak base, so free H⁺ accumulates and [OH⁻] decreases.", "التميؤ: NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻، وNH₄OH قاعدة ضعيفة، فتتراكم أيونات H⁺ ويقل تركيز OH⁻."],
            sto: ["Omar's strip turned orange: more H⁺ than OH⁻.", "شريط عمر أصبح برتقاليًا: H⁺ أكثر من OH⁻."] },
          { q: ["Which salt gives a basic solution when it hydrolyses?", "أي الأملاح التالية يعطي محلولًا قاعديًا عند تميؤه؟"],
            c: [["NaHCO₃", "NaHCO₃"], ["NH₄Cl", "NH₄Cl"], ["NH₄HCO₃", "NH₄HCO₃"], ["NaCl", "NaCl"]],
            off: ["NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃; H₂CO₃ is a weak acid, so OH⁻ ions remain in excess.", "NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃، وحمض الكربونيك ضعيف فتبقى أيونات OH⁻ زائدة."],
            sto: ["Grandma's baking soda is basic, which is why it calms stomach acid.", "بيكربونات الجدة قاعدية، ولذلك تهدئ حموضة المعدة."] },
          { q: ["Dissolving NaCl in water is NOT hydrolysis because...", "ذوبان NaCl في الماء ليس تميؤًا لأن..."],
            c: [["its ions do not react with water to form an acid or a base", "أيوناته لا تتفاعل مع الماء لتكوين حمض أو قاعدة"], ["NaCl does not dissolve in water", "NaCl لا يذوب في الماء"], ["it forms HCl and NaOH", "يتكون HCl وNaOH"], ["it makes the solution acidic", "يجعل المحلول حمضيًا"]],
            off: ["Na⁺ and Cl⁻ only become surrounded by water molecules (dissociation). No acid or base forms, so the pH stays 7.", "يحاط Na⁺ وCl⁻ بجزيئات الماء فقط (تفكك)، ولا يتكون حمض أو قاعدة فيبقى pH = ٧."],
            sto: ["The salt ions float like guests; they never change the house.", "أيونات الملح ضيوف يسبحون دون أن يغيروا شيئًا في البيت."] },
          { q: ["A water sample has pH = 3.5. It is most likely...", "عينة ماء قيمة الأس الهيدروجيني لها 3.5، فهي على الأرجح..."],
            c: [["mine water", "ماء مناجم"], ["sea water", "ماء بحر"], ["distilled water", "ماء مقطر"], ["river water", "ماء نهر"]],
            off: ["From the book's table: mine water 3 to 4, cloud water 4.5 to 5, river water 6.8 to 7.8, sea water 7.5 to 8.4, distilled water 7.", "من جدول الكتاب: ماء المناجم ٣–٤، وماء السحب 4.5–5، وماء النهر 6.8–7.8، وماء البحر 7.5–8.4، والماء المقطر ٧."],
            sto: ["Very acidic, like water dripping in an old mine.", "حمضي جدًا مثل ماء يتقطر في منجم قديم."] },
          { q: ["As [OH⁻] increases in an aqueous solution, its pH...", "كلما زاد تركيز OH⁻ في محلول مائي فإن قيمة pH..."],
            c: [["increases above 7", "تزداد فوق ٧"], ["decreases below 7", "تقل عن ٧"], ["stays exactly 7", "تبقى ٧ تمامًا"], ["becomes 0", "تصبح صفرًا"]],
            off: ["More OH⁻ means more alkaline; alkalinity increases toward 14.", "زيادة OH⁻ تعني زيادة القاعدية، فتتجه القيمة نحو ١٤."],
            sto: ["Omar's strip slides from green to dark blue.", "شريط عمر ينتقل من الأخضر إلى الأزرق الداكن."] },
          { q: ["Before measuring samples, the pH meter should be...", "قبل قياس العينات يجب أن يكون جهاز قياس pH..."],
            c: [["calibrated with distilled water, then the electrode dried", "معايرًا بالماء المقطر ثم يجفف القطب"], ["heated to 100°C", "مسخنًا إلى ١٠٠°م"], ["dipped in sea water", "مغموسًا في ماء البحر"], ["filled with salt", "مملوءًا بالملح"]],
            off: ["Step 1 of the activity: calibrate with distilled water (pH 7) according to the instructions, then dry the electrode with paper towels.", "الخطوة الأولى في النشاط: المعايرة بالماء المقطر وفق تعليمات الجهاز ثم تجفيف القطب بالمناديل الورقية."],
            sto: ["Like zeroing a kitchen scale before weighing.", "مثل تصفير ميزان المطبخ قبل الوزن."] }
        ]
      },
      {
        id: "sec1u1l3", icon: "🧊", page: 16,
        title: { en: "Density of Water", ar: "كثافة الماء" },
        idea: {
          official: {
            en: ["Density is the mass per unit volume of a substance at a specific temperature: " + eq("ρ = m / V") + ". At 4°C, 1 cm³ of pure water has a mass of 1 g, so " + eq("ρ = 1 g/cm³ = 1000 kg/m³") + ".",
              "Relative density = density of the substance ÷ density of pure water at 4°C. It is measured with a hydrometer: it floats higher in a denser liquid, so the larger readings are at the bottom of its scale.",
              "Water is an exception: from 0°C to 4°C it contracts and its density increases; above 4°C it expands. Maximum density is 1000 kg/m³ at 4°C.",
              "Ice is less dense than water, so lakes freeze from the top. The floating ice insulates the water below and aquatic organisms survive.",
              "Ocean water density rises with salinity, falls with temperature (above 4°C) and rises slightly at great depths. Density differences drive vertical ocean currents.",
              "Example: the mass of 4 m³ of water at 4°C is " + eq("m = ρV = 1000 × 4 = 4000 kg") + "."],
            ar: ["الكثافة هي كتلة وحدة الحجوم من المادة عند درجة حرارة معينة " + eq("ρ = m / V") + "، وعند ٤°م كتلة ١ سم³ من الماء النقي ١ جم، أي " + eq("ρ = 1 g/cm³ = 1000 kg/m³") + ".",
              "الكثافة النسبية = كثافة المادة ÷ كثافة الماء النقي عند ٤°م، وتقاس بالهيدروميتر الذي يطفو أعلى في السائل الأكثف، لذلك توجد القراءات الكبرى أسفل تدريجه.",
              "الماء شاذ: من صفر إلى ٤°م ينكمش وتزداد كثافته، وفوق ٤°م يتمدد؛ وأقصى كثافة له ١٠٠٠ كجم/م³ عند ٤°م.",
              "الجليد أقل كثافة من الماء، فتتجمد البحيرات من السطح، ويعزل الجليد الطافي الماء أسفله فتعيش الكائنات المائية.",
              "تزداد كثافة ماء المحيط بزيادة الملوحة، وتقل بارتفاع درجة الحرارة (فوق ٤°م)، وتزداد قليلًا في الأعماق الكبيرة، واختلاف الكثافة يسبب التيارات المحيطية الرأسية.",
              "مثال: كتلة ٤ م³ من الماء عند ٤°م هي " + eq("m = ρV = 1000 × 4 = 4000 kg") + "."]
          },
          story: {
            en: ["Youssef swims at Ain Sokhna and notices he floats more easily than in the club pool in Cairo.",
              "His cousin, a lab technician, drops a hydrometer into a glass of sea water: it rises higher than in tap water and reads about 1.025.",
              "More dissolved salt means more mass in the same volume, so the sea pushes him up harder.",
              "At night they watch a documentary about a frozen Canadian lake: fish swim under the ice because the 4°C water, the densest, sinks to the bottom and stays liquid.",
              "Youssef laughs: water is the only friend who becomes lighter when it freezes."],
            ar: ["يسبح يوسف في العين السخنة ويلاحظ أنه يطفو بسهولة أكبر من حمام سباحة النادي في القاهرة.",
              "يضع ابن عمه، فني المعمل، هيدروميترًا في كوب من ماء البحر، فيرتفع أعلى مما في ماء الصنبور ويقرأ نحو 1.025.",
              "الملح الذائب يزيد الكتلة في الحجم نفسه، فيدفعه البحر لأعلى بقوة أكبر.",
              "وفي المساء يشاهدان فيلمًا عن بحيرة متجمدة في كندا: الأسماك تسبح تحت الجليد لأن الماء عند ٤°م، وهو الأكثف، يهبط إلى القاع ويبقى سائلًا.",
              "يضحك يوسف: الماء هو الصديق الوحيد الذي يصبح أخف عندما يتجمد."]
          }
        },
        words: [
          ["Density", "الكثافة", "Mass per unit volume of a substance at a specific temperature (kg/m³ or g/cm³).", "كتلة وحدة الحجوم من المادة عند درجة حرارة معينة (كجم/م³ أو جم/سم³)."],
          ["Relative density", "الكثافة النسبية", "Density of a substance divided by the density of pure water at 4°C; it has no unit.", "النسبة بين كثافة المادة وكثافة الماء النقي عند ٤°م، وليس لها وحدة."],
          ["Hydrometer", "الهيدروميتر", "A sealed glass float with ballast and a graduated stem used to measure the density of liquids.", "أداة زجاجية مغلقة بها ثقل وساق مدرجة تستخدم لقياس كثافة السوائل."],
          ["Anomalous expansion", "شذوذ تمدد الماء", "Water contracts when heated from 0°C to 4°C and has its maximum density at 4°C.", "ينكمش الماء عند تسخينه من صفر إلى ٤°م وتكون كثافته أكبر ما يمكن عند ٤°م."],
          ["Salinity", "الملوحة", "The concentration of dissolved salts in water; higher salinity means higher density.", "تركيز الأملاح الذائبة في الماء، وكلما زادت زادت الكثافة."],
          ["Ocean currents", "التيارات المحيطية", "Movements of ocean water caused partly by density differences due to temperature and salinity.", "حركة مياه المحيط الناتجة جزئيًا عن اختلاف الكثافة بسبب الحرارة والملوحة."]
        ],
        lab: { parts: [{ type: "sec1_density" }] },
        quiz: [
          { q: ["Given the density of water at 4°C is 1 g/cm³, the mass of 4 m³ of water is...", "إذا كانت كثافة الماء عند ٤°م = ١ جم/سم³، فإن كتلة ٤ م³ من الماء تساوي..."],
            c: [["4000 kg", "٤٠٠٠ كجم"], ["4 kg", "٤ كجم"], ["0.004 kg", "0.004 كجم"], ["1 kg", "١ كجم"]],
            off: ["1 g/cm³ = 1000 kg/m³, so m = ρV = 1000 × 4 = 4000 kg.", "١ جم/سم³ = ١٠٠٠ كجم/م³، إذن m = ρV = ١٠٠٠ × ٤ = ٤٠٠٠ كجم."],
            sto: ["A 4 m³ water tank on a Cairo roof holds 4 tonnes.", "خزان ماء سعته ٤ م³ فوق سطح بيت في القاهرة يحمل ٤ أطنان."] },
          { q: ["When water at 4°C is heated to 8°C, its volume and density...", "عند تسخين الماء من ٤°م إلى ٨°م فإن حجمه وكثافته..."],
            c: [["volume increases, density decreases", "يزداد الحجم وتقل الكثافة"], ["volume decreases, density increases", "يقل الحجم وتزداد الكثافة"], ["both increase", "يزداد كلاهما"], ["both decrease", "يقل كلاهما"]],
            off: ["Above 4°C water expands like normal liquids: same mass in a larger volume, so ρ = m/V decreases.", "فوق ٤°م يتمدد الماء كالسوائل العادية: نفس الكتلة في حجم أكبر فتقل الكثافة ρ = m/V."],
            sto: ["Warm water spreads out, so each cup weighs a bit less.", "الماء الدافئ يتمدد فيصبح كل كوب منه أخف قليلًا."] },
          { q: ["At which temperature is the density of pure water maximum?", "عند أي درجة حرارة تكون كثافة الماء النقي أكبر ما يمكن؟"],
            c: [["4°C", "٤°م"], ["0°C", "صفر°م"], ["100°C", "١٠٠°م"], ["−4°C", "−٤°م"]],
            off: ["Water contracts from 0°C to 4°C and expands above 4°C, so its density peaks at 1000 kg/m³ at 4°C.", "ينكمش الماء من صفر إلى ٤°م ويتمدد فوقها، فتبلغ كثافته أقصاها ١٠٠٠ كجم/م³ عند ٤°م."],
            sto: ["The 4°C water is the heavy blanket at the lake bottom.", "الماء عند ٤°م هو البطانية الثقيلة في قاع البحيرة."] },
          { q: ["A large amount of salt is dissolved in the water in which a hydrometer floats. The submerged part of the hydrometer...", "أذيبت كمية كبيرة من الملح في الماء الذي يطفو فيه هيدروميتر، فإن الجزء المغمور منه..."],
            c: [["decreases", "يقل"], ["increases", "يزداد"], ["does not change", "لا يتغير"], ["cannot be determined", "لا يمكن تحديده"]],
            off: ["Salt raises the density. A floating body shows a smaller submerged part in a denser liquid (law of buoyancy).", "الملح يزيد الكثافة، والجسم الطافي يغمر منه جزء أصغر في السائل الأكثف (قاعدة الطفو)."],
            sto: ["Like Youssef floating higher at Ain Sokhna.", "مثل يوسف الذي يطفو أعلى في العين السخنة."] },
          { q: ["Sea water has a density of 1025 kg/m³. Its relative density is...", "كثافة ماء البحر ١٠٢٥ كجم/م³، فكثافته النسبية تساوي..."],
            c: [["1.025", "1.025"], ["1025", "١٠٢٥"], ["0.975", "0.975"], ["1.025 kg/m³", "1.025 كجم/م³"]],
            off: ["Relative density = 1025 ÷ 1000 = 1.025. It is a ratio, so it has no unit.", "الكثافة النسبية = ١٠٢٥ ÷ ١٠٠٠ = 1.025، وهي نسبة ليس لها وحدة."],
            sto: ["The hydrometer in the sea-water glass reads 1.025.", "الهيدروميتر في كوب ماء البحر يقرأ 1.025."] },
          { q: ["Why does a lake in a polar region freeze at its surface first?", "لماذا تتجمد البحيرة في المناطق القطبية من سطحها أولًا؟"],
            c: [["Water below 4°C and ice are less dense, so they stay on top", "الماء الأقل من ٤°م والجليد أقل كثافة فيبقيان في الأعلى"], ["The bottom is heated by the Sun", "القاع يسخن بالشمس"], ["Ice is denser than water", "الجليد أكثف من الماء"], ["Salt collects at the surface", "يتجمع الملح على السطح"]],
            off: ["Cooling from 4°C to 0°C makes surface water expand and become less dense; ice is even less dense, so it floats and insulates the water below.", "التبريد من ٤°م إلى صفر°م يجعل الماء السطحي يتمدد وتقل كثافته، والجليد أقل كثافة فيطفو ويعزل الماء أسفله."],
            sto: ["The fish in the documentary live under an ice roof.", "أسماك الفيلم تعيش تحت سقف من الجليد."] },
          { q: ["Four 1 kg samples. Which has the greatest volume?", "أربع عينات كتلة كل منها ١ كجم، أيها له أكبر حجم؟"],
            c: [["Fresh water at 8°C", "ماء عذب عند ٨°م"], ["Fresh water at 4°C", "ماء عذب عند ٤°م"], ["Salt water at 4°C", "ماء مالح عند ٤°م"], ["Salt water at 8°C", "ماء مالح عند ٨°م"]],
            off: ["Same mass: V = m/ρ, so the LEAST dense sample has the largest volume. Fresh water is less dense than salt water, and 8°C is less dense than 4°C.", "الكتلة واحدة، وV = m/ρ، فالعينة الأقل كثافة لها أكبر حجم؛ والماء العذب أقل كثافة من المالح، والماء عند ٨°م أقل كثافة منه عند ٤°م."],
            sto: ["The lightest-per-cup water needs the biggest bottle.", "الماء الأخف لكل كوب يحتاج أكبر زجاجة."] }
        ]
      },
      {
        id: "sec1u1l4", icon: "🔥", page: 20,
        title: { en: "Heat, Temperature and Specific Heat", ar: "الحرارة ودرجة الحرارة والحرارة النوعية" },
        idea: {
          official: {
            en: ["Internal energy is the sum of the potential and kinetic energies of a body's molecules. Heat is energy transferred because of a temperature difference; it is measured in joules (J).",
              "Temperature describes how hot or cold a body is: it represents the average kinetic energy of its molecules. Its SI unit is the kelvin: " + eq("T(K) = t(°C) + 273") + "; a change of 1°C equals a change of 1 K.",
              "Specific heat c is the heat needed to raise 1 kg of a substance by 1 K (J/kg·K). Water has a high value, 4200 J/kg·K, because of its hydrogen bonds; copper is 390 and aluminium 900.",
              "Heat gained or lost: " + eq("Q = m c Δt") + ". Example: 0.3 kg of copper from 20°C to 70°C: " + eq("Q = 0.3 × 390 × 50 = 5850 J") + ".",
              "Conservation of energy: heat lost by hot aluminium (0.2 kg, 80°C → 40°C) = heat gained by water: " + eq("Q = 0.2 × 900 × (40 − 80) = −7200 J") + ", so the water gains 7200 J.",
              "Latent heat of vaporization is the heat absorbed by 1 kg of liquid to become vapour without a temperature change. Water's is high, so sweating and transpiration cool bodies; the sea's high specific heat gives the sea breeze and stable habitats."],
            ar: ["الطاقة الداخلية هي مجموع طاقتي الوضع والحركة لجزيئات الجسم، والحرارة هي الطاقة المنتقلة بسبب فرق في درجة الحرارة، وتقاس بالجول (J).",
              "درجة الحرارة وصف كمي لمدى سخونة الجسم أو برودته، وتمثل متوسط طاقة حركة جزيئاته، ووحدتها الدولية الكلفن " + eq("T(K) = t(°C) + 273") + "، والتغير بمقدار ١°م يساوي التغير بمقدار ١ كلفن.",
              "الحرارة النوعية c هي كمية الحرارة اللازمة لرفع درجة حرارة ١ كجم من المادة ١ كلفن (J/kg·K)، وقيمتها للماء كبيرة ٤٢٠٠ بسبب الروابط الهيدروجينية، وللنحاس ٣٩٠ وللألومنيوم ٩٠٠.",
              "كمية الحرارة المكتسبة أو المفقودة " + eq("Q = m c Δt") + "، مثال: ٠٫٣ كجم نحاس من ٢٠°م إلى ٧٠°م: " + eq("Q = 0.3 × 390 × 50 = 5850 J") + ".",
              "بقاء الطاقة: الحرارة التي تفقدها قطعة ألومنيوم ساخنة (٠٫٢ كجم من ٨٠°م إلى ٤٠°م) = الحرارة التي يكتسبها الماء: " + eq("Q = 0.2 × 900 × (40 − 80) = −7200 J") + "، إذن يكتسب الماء ٧٢٠٠ جول.",
              "الحرارة الكامنة للتصعيد هي الحرارة التي يمتصها ١ كجم من السائل ليتحول إلى بخار دون تغير درجة حرارته، وهي كبيرة للماء، لذلك يبرد العرق والنتح الأجسام، والحرارة النوعية الكبيرة للبحر تسبب نسيم البحر وثبات حرارة البيئات البحرية."]
          },
          story: {
            en: ["At noon on Marsa Matrouh beach, Salma burns her feet on the sand but the sea feels cool.",
              "Same Sun, same hours. The difference is specific heat: sand needs little energy per kilogram to warm up, water needs about 4200 J for every kilogram and every degree.",
              "She calculates: warming 1 kg of sea water by 5°C needs about 4200 × 5 = 21000 J, several times more than the same mass of sand.",
              "In the afternoon a cool breeze blows from the sea: hot air rises over the land and cooler sea air rushes in to replace it.",
              "At night the sea is still warm. It stores the day's heat like a giant thermos, keeping the fish's home stable."],
            ar: ["عند الظهر على شاطئ مرسى مطروح تحرق الرمال قدمي سلمى، بينما تشعر ببرودة ماء البحر.",
              "الشمس نفسها والساعات نفسها، والفرق هو الحرارة النوعية: الرمل يحتاج طاقة قليلة لكل كيلوجرام ليسخن، والماء يحتاج نحو ٤٢٠٠ جول لكل كيلوجرام ولكل درجة.",
              "تحسب سلمى: تسخين ١ كجم من ماء البحر ٥°م يحتاج نحو ٤٢٠٠ × ٥ = ٢١٠٠٠ جول، أي أضعاف ما تحتاجه الكتلة نفسها من الرمل.",
              "بعد الظهر يهب نسيم بارد من البحر: الهواء الساخن يصعد فوق اليابسة، والهواء البحري الأبرد يندفع ليحل محله.",
              "وفي الليل يبقى البحر دافئًا؛ يخزن حرارة النهار كترمس عملاق فيحافظ على ثبات بيت الأسماك."]
          }
        },
        words: [
          ["Internal energy", "الطاقة الداخلية", "The sum of the potential and kinetic energies of the molecules of a body.", "مجموع طاقتي الوضع والحركة لجزيئات الجسم."],
          ["Heat", "الحرارة", "Energy transferred to or from a body because of a temperature difference; unit joule (J).", "الطاقة المنتقلة من الجسم أو إليه بسبب فرق في درجة الحرارة، ووحدتها الجول."],
          ["Temperature", "درجة الحرارة", "A measure of how hot or cold a body is; the average kinetic energy of its molecules (SI unit K).", "وصف كمي لسخونة الجسم أو برودته، ويمثل متوسط طاقة حركة جزيئاته (وحدته الكلفن)."],
          ["Specific heat", "الحرارة النوعية", "Heat needed to raise the temperature of 1 kg of a substance by 1 K (J/kg·K).", "كمية الحرارة اللازمة لرفع درجة حرارة ١ كجم من المادة ١ كلفن (J/kg·K)."],
          ["Latent heat of vaporization", "الحرارة الكامنة للتصعيد", "Heat absorbed by 1 kg of a liquid to change into vapour without a change in temperature.", "كمية الحرارة التي يمتصها ١ كجم من السائل ليتحول إلى بخار دون تغير في درجة حرارته."],
          ["Sea breeze", "نسيم البحر", "Daytime wind from the cooler sea to the hotter land.", "رياح نهارية تهب من البحر الأبرد إلى اليابسة الأسخن."],
          ["Cold-blooded organism", "كائن متغير درجة الحرارة", "An organism (fish, amphibians, reptiles, invertebrates) whose body temperature changes with its surroundings.", "كائن (أسماك وبرمائيات وزواحف ولافقاريات) تتغير درجة حرارة جسمه مع حرارة الوسط المحيط."]
        ],
        lab: { parts: [{ type: "sec1_calor" }] },
        quiz: [
          { q: ["Calculate the heat needed to raise 0.9 kg of copper by 70°C (c = 390 J/kg·K).", "احسب كمية الحرارة اللازمة لرفع درجة حرارة ٠٫٩ كجم من النحاس بمقدار ٧٠°م (c = ٣٩٠ J/kg·K)."],
            c: [["24570 J", "٢٤٥٧٠ جول"], ["27300 J", "٢٧٣٠٠ جول"], ["351 J", "٣٥١ جول"], ["5850 J", "٥٨٥٠ جول"]],
            off: ["Q = mcΔt = 0.9 × 390 × 70 = 24570 J. A rise of 70°C equals a rise of 70 K.", "Q = mcΔt = ٠٫٩ × ٣٩٠ × ٧٠ = ٢٤٥٧٠ جول، والارتفاع ٧٠°م يساوي ٧٠ كلفن."],
            sto: ["Salma's copper pot needs 24570 J to warm by 70 degrees.", "تحتاج حلة سلمى النحاسية ٢٤٥٧٠ جول لتسخن ٧٠ درجة."] },
          { q: ["A 200 g piece of aluminium (c = 900 J/kg·K) cools from 80°C to 40°C in water. The heat gained by the water is...", "قطعة ألومنيوم كتلتها ٢٠٠ جم (c = ٩٠٠) تبرد في الماء من ٨٠°م إلى ٤٠°م. كمية الحرارة التي يكتسبها الماء..."],
            c: [["7200 J", "٧٢٠٠ جول"], ["−7200 J", "−٧٢٠٠ جول"], ["7200000 J", "٧٢٠٠٠٠٠ جول"], ["14400 J", "١٤٤٠٠ جول"]],
            off: ["Use SI units: m = 0.2 kg. Q(Al) = 0.2 × 900 × (40 − 80) = −7200 J. The minus sign means aluminium LOST heat, so the water GAINED 7200 J. Using 200 instead of 0.2 gives the wrong 7200000 J.", "نستخدم الوحدات الدولية: m = ٠٫٢ كجم، Q = ٠٫٢ × ٩٠٠ × (٤٠ − ٨٠) = −٧٢٠٠ جول، والإشارة السالبة تعني أن الألومنيوم فقد الحرارة فاكتسبها الماء ٧٢٠٠ جول، واستخدام ٢٠٠ بدل ٠٫٢ خطأ شائع."],
            sto: ["What the hot metal gives, the water takes: energy is never lost.", "ما يعطيه المعدن الساخن يأخذه الماء، والطاقة لا تفنى."] },
          { q: ["A temperature of 20°C equals...", "درجة الحرارة ٢٠°م تساوي..."],
            c: [["293 K", "٢٩٣ كلفن"], ["253 K", "٢٥٣ كلفن"], ["20 K", "٢٠ كلفن"], ["−253 K", "−٢٥٣ كلفن"]],
            off: ["T(K) = t(°C) + 273 = 20 + 273 = 293 K.", "T(K) = t(°C) + 273 = ٢٠ + ٢٧٣ = ٢٩٣ كلفن."],
            sto: ["A comfortable spring day in Cairo is 293 K.", "يوم ربيعي معتدل في القاهرة درجة حرارته ٢٩٣ كلفن."] },
          { q: ["Equal masses of W, X, Y and Z got the same heat. Their temperatures rose by 20°C, 40°C, 60 K and 80 K. Which has the highest specific heat?", "أعطيت كتل متساوية من W وX وY وZ كمية الحرارة نفسها فارتفعت درجات حرارتها ٢٠°م و٤٠°م و٦٠ كلفن و٨٠ كلفن. أيها له أكبر حرارة نوعية؟"],
            c: [["W", "W"], ["X", "X"], ["Y", "Y"], ["Z", "Z"]],
            off: ["c = Q/(mΔt). With the same Q and m, the smallest Δt gives the largest c. A rise of 20°C = 20 K is the smallest, so W.", "c = Q/(mΔt)، ومع ثبات Q وm فإن أصغر Δt يعطي أكبر c، والارتفاع ٢٠°م = ٢٠ كلفن هو الأصغر، إذن W."],
            sto: ["W is like the sea: it barely warms up under the same Sun.", "W مثل البحر: بالكاد يسخن تحت الشمس نفسها."] },
          { q: ["How much heat is needed to warm 2 kg of water from 25°C to 35°C (c = 4200 J/kg·K)?", "ما كمية الحرارة اللازمة لتسخين ٢ كجم من الماء من ٢٥°م إلى ٣٥°م (c = ٤٢٠٠)؟"],
            c: [["84000 J", "٨٤٠٠٠ جول"], ["42000 J", "٤٢٠٠٠ جول"], ["294000 J", "٢٩٤٠٠٠ جول"], ["8400 J", "٨٤٠٠ جول"]],
            off: ["Δt = 35 − 25 = 10°C. Q = 2 × 4200 × 10 = 84000 J. Using 35 instead of Δt gives the wrong 294000 J.", "Δt = ٣٥ − ٢٥ = ١٠°م، Q = ٢ × ٤٢٠٠ × ١٠ = ٨٤٠٠٠ جول، واستخدام ٣٥ بدل الفرق يعطي ٢٩٤٠٠٠ خطأً."],
            sto: ["Two litres for Salma's tea need 84 kJ just for ten degrees.", "لترا شاي سلمى يحتاجان ٨٤ كيلوجول لعشر درجات فقط."] },
          { q: ["During a sunny day, the sea breeze blows...", "في يوم مشمس يهب نسيم البحر..."],
            c: [["from the sea to the land", "من البحر إلى اليابسة"], ["from the land to the sea", "من اليابسة إلى البحر"], ["vertically downward", "رأسيًا لأسفل"], ["only at night", "ليلًا فقط"]],
            off: ["Land heats faster (low specific heat). Hot air over land becomes less dense and rises; cooler air over the sea moves in to replace it.", "اليابسة تسخن أسرع (حرارتها النوعية صغيرة)، فيسخن الهواء فوقها وتقل كثافته ويصعد، فيتحرك الهواء الأبرد من فوق البحر ليحل محله."],
            sto: ["Salma's afternoon breeze comes off the water.", "نسيم العصر عند سلمى يأتي من جهة الماء."] },
          { q: ["Water's high latent heat of vaporization helps living organisms by...", "تساعد الحرارة الكامنة للتصعيد الكبيرة للماء الكائنات الحية على..."],
            c: [["carrying heat away when sweat or transpired water evaporates", "التخلص من الحرارة عند تبخر العرق أو ماء النتح"], ["raising their body temperature quickly", "رفع درجة حرارة أجسامها بسرعة"], ["making water freeze faster", "تجميد الماء أسرع"], ["dissolving more salts", "إذابة أملاح أكثر"]],
            off: ["Breaking hydrogen bonds to evaporate water takes much energy; evaporating molecules carry this heat away from the body.", "كسر الروابط الهيدروجينية لتبخير الماء يحتاج طاقة كبيرة، والجزيئات المتبخرة تحمل هذه الحرارة بعيدًا عن الجسم."],
            sto: ["Sweat drying on Salma's arm takes the heat with it.", "العرق الذي يجف على ذراع سلمى يأخذ الحرارة معه."] }
        ]
      },
      {
        id: "sec1u1l5", icon: "🧂", page: 28,
        title: { en: "Aqueous Solutions and Colligative Properties", ar: "المحاليل المائية والخواص التجميعية" },
        idea: {
          official: {
            en: ["A solution is a homogeneous mixture of a solvent and a solute. In nature water is the solvent and salts are common solutes.",
              "Colligative properties depend on the NUMBER of molecules or ions of a non-volatile solute, not on its type: lowering of vapour pressure, elevation of boiling point, depression of freezing point and osmotic pressure.",
              "Vapour pressure: in a closed flask evaporation and condensation reach dynamic equilibrium. Solute particles occupy part of the surface and attract water molecules, so fewer escape and the vapour pressure decreases.",
              "Boiling point is the temperature at which vapour pressure equals the external pressure. Pure water boils at 100°C at 1 atm; lower pressure (high altitude) lowers it, higher pressure (pressure cooker) raises it. A solution boils higher than pure water.",
              "A solution freezes below 0°C: solute particles hinder water molecules from forming ice crystals. That is why salt is spread on icy roads.",
              "Osmosis: water moves through a semi-permeable membrane from the dilute solution (lower osmotic pressure) to the concentrated solution (higher osmotic pressure)."],
            ar: ["المحلول مخلوط متجانس من مذيب ومذاب، وفي الطبيعة يكون الماء هو المذيب غالبًا والأملاح من أشهر المذابات.",
              "الخواص التجميعية تعتمد على عدد جزيئات أو أيونات المذاب غير المتطاير لا على نوعه، وهي: انخفاض الضغط البخاري، وارتفاع درجة الغليان، وانخفاض درجة التجمد، والضغط الأسموزي.",
              "الضغط البخاري: في دورق مغلق يصل البخر والتكثف إلى اتزان ديناميكي، وجسيمات المذاب تشغل جزءًا من السطح وتجذب جزيئات الماء، فيقل عدد الجزيئات المتبخرة وينخفض الضغط البخاري.",
              "درجة الغليان هي درجة الحرارة التي يتساوى عندها الضغط البخاري للسائل مع الضغط الخارجي؛ يغلي الماء النقي عند ١٠٠°م تحت ١ ض.ج، وتنخفض بانخفاض الضغط (المرتفعات) وترتفع بزيادته (حلة الضغط)، والمحلول يغلي عند درجة أعلى من الماء النقي.",
              "يتجمد المحلول عند درجة أقل من الصفر لأن جسيمات المذاب تعيق ترابط جزيئات الماء لتكوين بلورات الجليد، ولذلك يُرش الملح على الطرق المتجمدة.",
              "الأسموزية: انتقال الماء عبر غشاء شبه منفذ من المحلول المخفف (الأقل ضغطًا أسموزيًا) إلى المحلول المركز (الأعلى ضغطًا أسموزيًا)."]
          },
          story: {
            en: ["Hana's mother salts the water before boiling pasta and uses a pressure cooker for meat. Hana asks why.",
              "Salt particles hold onto water molecules, so the water must get a little hotter than 100°C to boil: the boiling point rises.",
              "The pressure cooker pushes on the water surface, so it boils at a higher temperature and the meat cooks faster.",
              "Her uncle climbing Mount Catherine says tea there boils below 100°C because the air pressure is lower.",
              "Then Hana soaks dried apricots in water for qamar el-din: they swell, because water moves into the sweeter, more concentrated fruit cells by osmosis."],
            ar: ["تضع والدة هنا الملح في ماء المكرونة قبل الغليان، وتستخدم حلة الضغط لطهي اللحم، فتسأل هنا: لماذا؟",
              "جسيمات الملح تمسك بجزيئات الماء، فيلزم أن يسخن الماء قليلًا فوق ١٠٠°م ليغلي؛ أي ترتفع درجة الغليان.",
              "حلة الضغط تضغط على سطح الماء فيغلي عند درجة أعلى وينضج اللحم أسرع.",
              "ويقول خالها الذي صعد جبل سانت كاترين إن الشاي هناك يغلي تحت ١٠٠°م لأن ضغط الهواء أقل.",
              "ثم تنقع هنا المشمش المجفف في الماء لعمل قمر الدين فينتفخ، لأن الماء ينتقل إلى خلايا الثمرة الأكثر تركيزًا بالأسموزية."]
          }
        },
        words: [
          ["Solution", "المحلول", "A homogeneous mixture of a solvent and a solute.", "مخلوط متجانس من مذيب ومذاب."],
          ["Colligative properties", "الخواص التجميعية", "Solution properties that depend on the number of solute particles, not their type.", "خواص المحاليل التي تعتمد على عدد جسيمات المذاب لا على نوعها."],
          ["Vapour pressure", "الضغط البخاري", "The pressure exerted by the vapour above a liquid in dynamic equilibrium with it.", "الضغط الذي يحدثه البخار فوق سطح السائل عند الاتزان الديناميكي."],
          ["Boiling point", "درجة الغليان", "The temperature at which the vapour pressure of a liquid equals the external pressure.", "درجة الحرارة التي يتساوى عندها الضغط البخاري للسائل مع الضغط الخارجي."],
          ["Osmosis", "الأسموزية", "Movement of water through a semi-permeable membrane from a dilute to a concentrated solution.", "انتقال الماء عبر غشاء شبه منفذ من المحلول المخفف إلى المحلول المركز."],
          ["Osmotic pressure", "الضغط الأسموزي", "Pressure arising from the difference in solute concentration; it draws water toward the more concentrated side.", "الضغط الناشئ عن اختلاف تركيز المذاب، ويسحب الماء نحو الجانب الأكثر تركيزًا."]
        ],
        lab: { parts: [{ type: "sec1_osmo" }] },
        quiz: [
          { q: ["Colligative properties of a solution depend on...", "تعتمد الخواص التجميعية للمحلول على..."],
            c: [["the number of solute particles", "عدد جسيمات المذاب"], ["the type of solute", "نوع المذاب"], ["the colour of the solute", "لون المذاب"], ["the shape of the container", "شكل الإناء"]],
            off: ["By definition they depend on the number of molecules or ions of a non-volatile solute, not on what the solute is.", "بالتعريف تعتمد على عدد جزيئات أو أيونات المذاب غير المتطاير، لا على نوعه."],
            sto: ["A spoon of salt or a spoon of sugar: what counts is how many particles join the water.", "ملعقة ملح أو ملعقة سكر: المهم عدد الجسيمات التي دخلت الماء."] },
          { q: ["Equal numbers of moles of NaCl and glucose are each dissolved in 1 kg of water. Which solution boils at a higher temperature?", "أذيب عدد متساوٍ من مولات NaCl والجلوكوز كل في ١ كجم ماء، أي المحلولين يغلي عند درجة أعلى؟"],
            c: [["NaCl, because each unit gives two ions", "NaCl لأن كل وحدة تعطي أيونين"], ["Glucose, because its molecule is larger", "الجلوكوز لأن جزيئه أكبر"], ["Both boil at exactly the same temperature", "كلاهما يغلي عند الدرجة نفسها تمامًا"], ["Neither, solutions boil at 100°C", "لا هذا ولا ذاك، المحاليل تغلي عند ١٠٠°م"]],
            off: ["NaCl → Na⁺ + Cl⁻ gives twice as many particles as glucose (which does not ionize). The rise in boiling point is proportional to the number of particles.", "NaCl → Na⁺ + Cl⁻ يعطي ضعف عدد الجسيمات مقارنة بالجلوكوز الذي لا يتأين، وارتفاع درجة الغليان يتناسب مع عدد الجسيمات."],
            sto: ["Each salt unit splits into two particles, so it counts twice.", "كل وحدة ملح تنقسم إلى جسيمين فتُحسب مرتين."] },
          { q: ["Water boils below 100°C at the top of a high mountain because...", "يغلي الماء عند درجة أقل من ١٠٠°م فوق قمة جبل مرتفع لأن..."],
            c: [["the atmospheric pressure on its surface is lower", "الضغط الجوي على سطحه أقل"], ["the water there is purer", "الماء هناك أنقى"], ["the air is colder", "الهواء أبرد"], ["its vapour pressure is lower", "ضغطه البخاري أقل"]],
            off: ["Boiling happens when vapour pressure equals external pressure. Lower air pressure is reached at a lower temperature.", "يحدث الغليان عندما يتساوى الضغط البخاري مع الضغط الخارجي، والضغط الجوي الأقل يُبلَغ عند درجة حرارة أقل."],
            sto: ["The uncle's tea at Saint Catherine boils early but is less hot.", "شاي الخال في سانت كاترين يغلي مبكرًا لكنه أقل سخونة."] },
          { q: ["Salt is spread on icy roads in cold countries because it...", "يُرش الملح على الطرق المتجمدة في البلاد الباردة لأنه..."],
            c: [["lowers the freezing point of water", "يخفض درجة تجمد الماء"], ["raises the freezing point of water", "يرفع درجة تجمد الماء"], ["raises the vapour pressure", "يرفع الضغط البخاري"], ["heats the road", "يسخن الطريق"]],
            off: ["Solute particles hinder water molecules from bonding into ice crystals, so the solution freezes below 0°C; this reduces skidding and accidents.", "جسيمات المذاب تعيق ترابط جزيئات الماء لتكوين بلورات الجليد، فيتجمد المحلول تحت الصفر، فيقل انزلاق السيارات والحوادث."],
            sto: ["Salty water refuses to freeze at 0°C.", "الماء المالح يرفض التجمد عند الصفر."] },
          { q: ["Two solutions are separated by a semi-permeable membrane: 2% salt on the left, 8% salt on the right. Water moves...", "محلولان يفصلهما غشاء شبه منفذ: ٢٪ ملح يسارًا و٨٪ ملح يمينًا، فينتقل الماء..."],
            c: [["from left to right", "من اليسار إلى اليمين"], ["from right to left", "من اليمين إلى اليسار"], ["equally in both directions with no net change", "بالتساوي في الاتجاهين دون تغير"], ["it does not move", "لا ينتقل"]],
            off: ["Water moves from the dilute solution (lower osmotic pressure, 2%) to the concentrated one (higher osmotic pressure, 8%).", "ينتقل الماء من المحلول المخفف (الأقل ضغطًا أسموزيًا، ٢٪) إلى المركز (الأعلى ضغطًا أسموزيًا، ٨٪)."],
            sto: ["Water always travels to where it is 'needed' most: the saltier side.", "الماء يسافر دائمًا إلى حيث الحاجة إليه أكبر: الجانب الأكثر ملوحة."] },
          { q: ["Dissolving a non-volatile substance in water lowers the vapour pressure because...", "إذابة مادة غير متطايرة في الماء تخفض الضغط البخاري لأن..."],
            c: [["solute particles occupy part of the surface and attract water molecules", "جسيمات المذاب تشغل جزءًا من السطح وتجذب جزيئات الماء"], ["the solute evaporates instead of water", "المذاب يتبخر بدلًا من الماء"], ["water molecules move faster", "جزيئات الماء تتحرك أسرع"], ["the temperature of the solution rises", "ترتفع درجة حرارة المحلول"]],
            off: ["Fewer water molecules are at the surface, and extra attractions need more energy to overcome, so fewer molecules escape.", "يقل عدد جزيئات الماء على السطح، والتجاذبات الإضافية تحتاج طاقة أكبر للتغلب عليها، فيتبخر عدد أقل."],
            sto: ["Salt guests take some of the seats by the exit door.", "ضيوف الملح يشغلون بعض المقاعد بجوار باب الخروج."] },
          { q: ["A pressure cooker cooks food faster because...", "تطهو حلة الضغط الطعام أسرع لأن..."],
            c: [["higher pressure raises the boiling point of water", "زيادة الضغط ترفع درجة غليان الماء"], ["it lowers the boiling point", "تخفض درجة الغليان"], ["it removes the water", "تزيل الماء"], ["it lowers the freezing point", "تخفض درجة التجمد"]],
            off: ["An increase in external pressure raises the boiling point, so the water stays liquid above 100°C and transfers more heat to the food.", "زيادة الضغط الخارجي ترفع درجة الغليان، فيبقى الماء سائلًا فوق ١٠٠°م وينقل حرارة أكبر للطعام."],
            sto: ["Hana's mother's meat cooks in half the time.", "لحم والدة هنا ينضج في نصف الوقت."] }
        ]
      },
      {
        id: "sec1u1l6", icon: "🦠", page: 31,
        title: { en: "Biological Importance of Water", ar: "الأهمية البيولوجية للماء" },
        idea: {
          official: {
            en: ["Water is the most abundant chemical in living organisms. In mammals it is about 70% of body mass: about 47% inside cells and about 23% outside them (blood plasma and body fluids).",
              "The cell is the structural and functional unit of life. Prokaryotes (bacteria) have genetic material without a nuclear membrane and a peptidoglycan cell wall; eukaryotes (protists, fungi, plants, animals) have a nucleus and organelles.",
              "Plant cells have a cellulose wall, chloroplasts and one large central vacuole; animal cells have no wall and many small vacuoles. Mitochondria produce energy; the endoplasmic reticulum transports materials; cytoplasm is mostly water.",
              "Metabolism: catabolic processes break bonds and release energy (glucose → CO₂ + H₂O in respiration); anabolic processes build large molecules and consume energy (photosynthesis, protein synthesis).",
              "Activation energy is the minimum energy needed to start a reaction. Enzymes are protein catalysts that lower it. Their active site fits the substrate like a lock and key, and the enzyme is unchanged at the end.",
              "Each enzyme has an optimum temperature and pH; outside that range its activity gradually decreases until it stops."],
            ar: ["الماء أكثر المواد الكيميائية وفرة في الكائنات الحية، ويمثل في الثدييات نحو ٧٠٪ من كتلة الجسم: نحو ٤٧٪ داخل الخلايا ونحو ٢٣٪ خارجها (بلازما الدم وسوائل الجسم).",
              "الخلية هي الوحدة البنائية والوظيفية للحياة؛ بدائيات النواة (البكتيريا) مادتها الوراثية غير محاطة بغشاء نووي وجدارها من الببتيدوجليكان، وحقيقيات النواة (الطلائعيات والفطريات والنباتات والحيوانات) لها نواة وعضيات.",
              "للخلية النباتية جدار سليلوزي وبلاستيدات خضراء وفجوة عصارية كبيرة مركزية، والخلية الحيوانية بلا جدار وفجواتها صغيرة كثيرة. الميتوكوندريا مراكز إنتاج الطاقة، والشبكة الإندوبلازمية تنقل المواد، والسيتوبلازم معظمه ماء.",
              "الأيض: عمليات الهدم تكسر الروابط وتطلق الطاقة (الجلوكوز ← ثاني أكسيد الكربون + ماء في التنفس)، وعمليات البناء تكوّن جزيئات كبيرة وتستهلك الطاقة (البناء الضوئي وتخليق البروتين).",
              "طاقة التنشيط هي أقل طاقة لازمة لبدء التفاعل، والإنزيمات عوامل حفز بروتينية تخفضها، ويرتبط موقعها النشط بالمادة المتفاعلة بآلية القفل والمفتاح، ويبقى الإنزيم دون تغير بعد التفاعل.",
              "لكل إنزيم درجة حرارة مثلى وpH أمثل، وخارجهما يقل نشاطه تدريجيًا حتى يتوقف."]
          },
          story: {
            en: ["Ziad, a 60 kg runner in Assiut, weighs himself before and after a long practice in the heat.",
              "He learns that about 42 kg of him is water, most of it inside his cells, where every reaction happens in a watery cytoplasm.",
              "During the run his mitochondria break glucose down (catabolism) to release energy, and he loses water as sweat.",
              "His biology teacher compares enzymes to keys: each fits one lock, the substrate. When Ziad gets a high fever, his enzymes slow down because they are far from their best temperature.",
              "Drinking water after practice refills the medium where all these reactions take place."],
            ar: ["زياد عدّاء من أسيوط وزنه ٦٠ كجم، يزن نفسه قبل تمرين طويل في الحر وبعده.",
              "يتعلم أن نحو ٤٢ كجم من جسمه ماء، معظمه داخل خلاياه، حيث تحدث كل التفاعلات في سيتوبلازم مائي.",
              "أثناء الجري تهدم الميتوكوندريا الجلوكوز (هدم) لتطلق الطاقة، ويفقد زياد الماء في صورة عرق.",
              "يشبّه معلم الأحياء الإنزيمات بالمفاتيح: كل مفتاح يناسب قفلًا واحدًا هو المادة المتفاعلة، وعندما يصاب زياد بحمى شديدة يقل نشاط إنزيماته لابتعادها عن درجة حرارتها المثلى.",
              "وشرب الماء بعد التمرين يعيد ملء الوسط الذي تحدث فيه كل هذه التفاعلات."]
          }
        },
        words: [
          ["Prokaryote", "كائن بدائي النواة", "An organism whose genetic material is not surrounded by a nuclear membrane, e.g. bacteria.", "كائن مادته الوراثية غير محاطة بغشاء نووي، مثل البكتيريا."],
          ["Eukaryote", "كائن حقيقي النواة", "An organism whose genetic material is enclosed by a nuclear membrane: protists, fungi, plants and animals.", "كائن مادته الوراثية محاطة بغشاء نووي: الطلائعيات والفطريات والنباتات والحيوانات."],
          ["Metabolism", "الأيض (التمثيل الغذائي)", "The continuous biochemical reactions in cells: catabolic (energy-releasing) and anabolic (energy-consuming).", "مجموعة التفاعلات الحيوية المستمرة في الخلايا: الهدم (يطلق طاقة) والبناء (يستهلك طاقة)."],
          ["Activation energy", "طاقة التنشيط", "The minimum amount of energy needed to start a chemical reaction.", "أقل قدر من الطاقة يلزم لبدء التفاعل الكيميائي."],
          ["Enzyme", "الإنزيم", "A protein catalyst that lowers the activation energy and speeds up reactions in living cells.", "عامل حفز بروتيني يخفض طاقة التنشيط ويسرع التفاعلات في الخلايا الحية."],
          ["Active site", "الموقع النشط", "The part of the enzyme that binds specifically to its substrate (lock and key).", "الجزء من الإنزيم الذي يرتبط بالمادة المتفاعلة تحديدًا (القفل والمفتاح)."],
          ["Mitochondria", "الميتوكوندريا", "Organelles that serve as energy-production centres in the cell.", "عضيات تعمل كمراكز لإنتاج الطاقة في الخلية."]
        ],
        lab: { parts: [{ type: "sec1_enzyme" }, {
          type: "sort",
          prompt: ["Tap a structure, then tap where it is found.", "اضغط على التركيب، ثم اختر أين يوجد."],
          bins: [["p", "🌿", "Plant cell only", "الخلية النباتية فقط"], ["a", "🐾", "Animal cell only", "الخلية الحيوانية فقط"], ["b", "🔁", "Both", "كلتاهما"]],
          items: [[["Cellulose cell wall", "الجدار السليلوزي"], "p"], [["Chloroplasts", "البلاستيدات الخضراء"], "p"], [["One large central vacuole", "فجوة كبيرة مركزية"], "p"],
            [["Many small vacuoles", "فجوات صغيرة كثيرة"], "a"], [["Cell membrane", "الغشاء البلازمي"], "b"], [["Nucleus", "النواة"], "b"], [["Mitochondria", "الميتوكوندريا"], "b"], [["Endoplasmic reticulum", "الشبكة الإندوبلازمية"], "b"]]
        }] },
        quiz: [
          { q: ["About how many kilograms of water are in the body of a 60 kg mammal (water ≈ 70% of body mass)?", "كم كيلوجرامًا من الماء تقريبًا في جسم ثديي كتلته ٦٠ كجم (الماء ≈ ٧٠٪ من كتلة الجسم)؟"],
            c: [["42 kg", "٤٢ كجم"], ["28.2 kg", "28.2 كجم"], ["13.8 kg", "13.8 كجم"], ["70 kg", "٧٠ كجم"]],
            off: ["70% of 60 kg = 0.70 × 60 = 42 kg. (28.2 kg is the water INSIDE cells: 47% of 60.)", "٧٠٪ من ٦٠ كجم = ٠٫٧ × ٦٠ = ٤٢ كجم، (أما 28.2 كجم فهي الماء داخل الخلايا: ٤٧٪ من ٦٠)."],
            sto: ["Ziad is 42 kg of water walking on two legs.", "زياد ٤٢ كجم من الماء يمشي على قدمين."] },
          { q: ["In the same 60 kg body, the water found inside the cells (47% of body mass) is about...", "في الجسم نفسه (٦٠ كجم) يكون الماء داخل الخلايا (٤٧٪ من كتلة الجسم) نحو..."],
            c: [["28.2 kg", "28.2 كجم"], ["13.8 kg", "13.8 كجم"], ["42 kg", "٤٢ كجم"], ["4.7 kg", "4.7 كجم"]],
            off: ["0.47 × 60 = 28.2 kg inside cells; 0.23 × 60 = 13.8 kg outside cells; total 42 kg.", "٠٫٤٧ × ٦٠ = 28.2 كجم داخل الخلايا، و٠٫٢٣ × ٦٠ = 13.8 كجم خارجها، والمجموع ٤٢ كجم."],
            sto: ["Most of Ziad's water lives inside his cells.", "معظم ماء زياد يسكن داخل خلاياه."] },
          { q: ["An organism has its genetic material free in the cytoplasm and lacks mitochondria. It is a/an...", "كائن مادته الوراثية حرة في السيتوبلازم ولا توجد به ميتوكوندريا، فهو..."],
            c: [["prokaryote", "بدائي النواة"], ["eukaryote", "حقيقي النواة"], ["plant", "نبات"], ["animal", "حيوان"]],
            off: ["No nuclear membrane and no membrane organelles such as mitochondria: a prokaryote such as a bacterium.", "لا يوجد غشاء نووي ولا عضيات غشائية مثل الميتوكوندريا، فهو بدائي النواة مثل البكتيريا."],
            sto: ["A bacterium keeps its genes loose, with no nucleus room.", "البكتيريا تترك جيناتها حرة بلا غرفة نواة."] },
          { q: ["Which of the following is an anabolic process?", "أي مما يلي عملية بناء؟"],
            c: [["Synthesis of proteins from amino acids", "تخليق البروتينات من الأحماض الأمينية"], ["Breakdown of glucose in cellular respiration", "هدم الجلوكوز في التنفس الخلوي"], ["Releasing energy from food", "إطلاق الطاقة من الغذاء"], ["Digesting starch", "هضم النشا"]],
            off: ["Anabolic processes build large molecules from simple ones and consume energy: photosynthesis and protein synthesis.", "عمليات البناء تكوّن جزيئات كبيرة من جزيئات بسيطة وتستهلك الطاقة، مثل البناء الضوئي وتخليق البروتين."],
            sto: ["Building muscle after training is anabolism.", "بناء العضلات بعد التمرين عملية بناء."] },
          { q: ["Enzymes speed up reactions because they...", "تسرع الإنزيمات التفاعلات لأنها..."],
            c: [["lower the activation energy", "تخفض طاقة التنشيط"], ["raise the activation energy", "ترفع طاقة التنشيط"], ["are used up in the reaction", "تُستهلك في التفاعل"], ["add heat to the cell", "تضيف حرارة إلى الخلية"]],
            off: ["Catalysts lower the minimum energy needed to start the reaction and remain unchanged, ready for another reaction of the same type.", "عوامل الحفز تخفض أقل طاقة لازمة لبدء التفاعل وتبقى دون تغير لتحفز تفاعلًا آخر من النوع نفسه."],
            sto: ["The enzyme digs a tunnel through the energy hill.", "الإنزيم يحفر نفقًا خلال تل الطاقة."] },
          { q: ["Which factor directly slows down enzyme activity?", "أي العوامل التالية يبطئ نشاط الإنزيم مباشرة؟"],
            c: [["Raising the temperature above the optimum", "رفع درجة الحرارة فوق الدرجة المثلى"], ["Increasing the number of mitochondria", "زيادة عدد الميتوكوندريا"], ["Plenty of substrate molecules", "توافر جزيئات المادة المتفاعلة بكثرة"], ["Increasing the size of the vacuole", "زيادة حجم الفجوة العصارية"]],
            off: ["Away from the optimum temperature or pH, activity gradually decreases until it stops completely.", "عند الابتعاد عن درجة الحرارة أو pH الأمثل يقل النشاط تدريجيًا حتى يتوقف تمامًا."],
            sto: ["Ziad's fever bends the keys, so they fit the locks badly.", "حمى زياد تثني المفاتيح فلا تناسب الأقفال جيدًا."] },
          { q: ["Dysfunction of the mitochondria in a cell directly leads to...", "تعطل الميتوكوندريا في الخلية يؤدي مباشرة إلى..."],
            c: [["reduced production of energy (ATP)", "نقص إنتاج الطاقة (ATP)"], ["cessation of transpiration", "توقف النتح"], ["loss of the cell wall", "فقدان الجدار الخلوي"], ["more chlorophyll", "زيادة الكلوروفيل"]],
            off: ["Mitochondria are the energy-production centres of the cell.", "الميتوكوندريا مراكز إنتاج الطاقة في الخلية."],
            sto: ["No power station, no electricity for the cell city.", "لا محطة كهرباء يعني لا طاقة لمدينة الخلية."] }
        ]
      },
      {
        id: "sec1u1l7", icon: "🐟", page: 37,
        title: { en: "Adaptations of Aquatic Organisms", ar: "التكيفات البيولوجية للكائنات في البيئة المائية" },
        idea: {
          official: {
            en: ["Adaptation is a behavioural or physical trait that helps an organism survive better in its ecosystem. Types: structural (anatomical), behavioural and physiological (functional).",
              "Structural: fish have a streamlined body, fins, scales and mucus to reduce water resistance, gills to extract dissolved oxygen, and a swim bladder in bony fish. Deep-sea fish have large eyes and compressed bodies; dolphins have blowholes on top of the head.",
              "Behavioural: whales produce sounds to communicate and hunt; salmon migrate between fresh water and the sea to reproduce.",
              "Physiological: deep-sea fish slow their metabolic rate to need less oxygen and regulate blood pressure; the viper fish has high haemoglobin and flexible skeletal structures.",
              "Freshwater organisms gain water by osmosis: amoeba, paramecium and euglena expel it with a contractile vacuole; freshwater fish excrete dilute urine through the kidneys.",
              "Marine fish lose water by osmosis: they drink sea water and excrete excess salt through the kidneys and gill cells. Sharks keep a high urea concentration in their blood to raise their osmotic pressure."],
            ar: ["التكيف هو صفة سلوكية أو جسمية تساعد الكائن الحي على البقاء بصورة أفضل في نظامه البيئي، وأنواعه: تركيبية (تشريحية) وسلوكية وفسيولوجية (وظيفية).",
              "التكيفات التركيبية: للأسماك جسم انسيابي وزعانف وقشور ومخاط لتقليل مقاومة الماء، وخياشيم لاستخلاص الأكسجين الذائب، ومثانة عوم في الأسماك العظمية؛ ولأسماك الأعماق عيون كبيرة وأجسام مضغوطة، وللدلفين فتحات تنفس أعلى الرأس.",
              "التكيفات السلوكية: تصدر الحيتان أصواتًا للتواصل والصيد، وتهاجر أسماك السلمون بين المياه العذبة والبحر للتكاثر.",
              "التكيفات الفسيولوجية: تبطئ أسماك الأعماق معدل الأيض لتقليل حاجتها للأكسجين وتنظم ضغط دمها، ولسمكة الأفعى تركيز عالٍ من الهيموجلوبين وهياكل مرنة.",
              "كائنات المياه العذبة يدخلها الماء بالأسموزية: الأميبا والبراميسيوم واليوجلينا تطرده بالفجوة المنقبضة، والأسماك العذبة تتخلص منه في بول مخفف عن طريق الكلى.",
              "الأسماك البحرية تفقد الماء بالأسموزية: فتبتلع ماء البحر وتتخلص من الأملاح الزائدة بالكلى وخلايا متخصصة في الخياشيم، وتحتفظ القروش بتركيز عالٍ من اليوريا في دمها لرفع ضغطها الأسموزي."]
          },
          story: {
            en: ["Karim visits the Hurghada aquarium with his class and keeps a notebook of 'survival tricks'.",
              "The parrotfish's smooth shape and slippery mucus are structural tricks: built into the body.",
              "A video shows salmon swimming upstream to the river where they hatched: a behavioural trick, something they do.",
              "The guide explains the reef fish drink sea water all day and pump salt out through their gills, while Nile tilapia does the opposite and makes lots of dilute urine: physiological tricks, how the body works.",
              "At the shark tank Karim learns sharks keep urea in their blood so the salty sea cannot pull their water out."],
            ar: ["يزور كريم مع فصله أكواريوم الغردقة ويدون في دفتره حيل البقاء.",
              "شكل سمكة الببغاء الانسيابي ومخاطها الزلق حيل تركيبية مبنية في الجسم.",
              "يعرض فيديو أسماك السلمون تسبح عكس التيار إلى النهر الذي فقست فيه؛ هذه حيلة سلوكية، شيء تفعله.",
              "ويشرح المرشد أن أسماك الشعاب تشرب ماء البحر طوال اليوم وتضخ الأملاح عبر خياشيمها، بينما يفعل البلطي النيلي العكس فيخرج كثيرًا من البول المخفف؛ هذه حيل فسيولوجية في طريقة عمل الجسم.",
              "وعند حوض القروش يعرف كريم أن القرش يحتفظ باليوريا في دمه حتى لا يسحب البحر المالح ماءه."]
          }
        },
        words: [
          ["Adaptation", "التكيف", "A behavioural or physical trait that helps an organism survive better in its ecosystem.", "صفة سلوكية أو جسمية تساعد الكائن على البقاء بصورة أفضل في نظامه البيئي."],
          ["Structural adaptation", "تكيف تركيبي", "A change in the structure or shape of body parts, e.g. streamlined body, fins, swim bladder.", "تغير في تركيب أجزاء الجسم أو شكلها، مثل الجسم الانسيابي والزعانف ومثانة العوم."],
          ["Behavioural adaptation", "تكيف سلوكي", "An inherited or learned behaviour that helps survival, e.g. salmon migration, whale sounds.", "سلوك موروث أو مكتسب يساعد على البقاء، مثل هجرة السلمون وأصوات الحيتان."],
          ["Physiological adaptation", "تكيف فسيولوجي (وظيفي)", "A change in how vital functions are performed, e.g. slowing metabolism, excreting salts.", "تعديل في طريقة أداء الوظائف الحيوية، مثل إبطاء الأيض وإخراج الأملاح."],
          ["Contractile vacuole", "الفجوة المنقبضة", "A structure in amoeba, paramecium and euglena that collects excess water and expels it.", "تركيب في الأميبا والبراميسيوم واليوجلينا يجمع الماء الزائد ويطرده خارج الخلية."],
          ["Swim bladder", "مثانة العوم (الكيس الهوائي)", "A gas-filled sac in bony fish that helps them float and control buoyancy.", "كيس مملوء بالغاز في الأسماك العظمية يساعدها على الطفو والتحكم فيه."]
        ],
        lab: { parts: [{ type: "sec1_fish" }, {
          type: "sort",
          prompt: ["Tap an adaptation, then tap its type.", "اضغط على التكيف، ثم اختر نوعه."],
          bins: [["s", "🦴", "Structural", "تركيبي"], ["b", "🧭", "Behavioural", "سلوكي"], ["f", "⚙️", "Physiological", "فسيولوجي"]],
          items: [[["Streamlined body and mucus", "جسم انسيابي ومخاط"], "s"], [["Dolphin blowhole on top of the head", "فتحة تنفس الدلفين أعلى الرأس"], "s"], [["Large eyes of deep-sea fish", "عيون أسماك الأعماق الكبيرة"], "s"],
            [["Salmon migration to rivers", "هجرة السلمون إلى الأنهار"], "b"], [["Whales producing sounds to hunt", "إصدار الحيتان أصواتًا للصيد"], "b"],
            [["Slowing the metabolic rate", "إبطاء معدل الأيض"], "f"], [["Excreting salt through the gills", "إخراج الأملاح عبر الخياشيم"], "f"], [["Sharks retaining urea in blood", "احتفاظ القرش باليوريا في الدم"], "f"]]
        }] },
        quiz: [
          { q: ["The streamlined body, mucus and scales of fish that reduce water resistance are a/an ... adaptation.", "الجسم الانسيابي والمخاط والقشور في الأسماك التي تقلل مقاومة الماء تكيف..."],
            c: [["structural", "تركيبي"], ["behavioural", "سلوكي"], ["functional", "وظيفي"], ["osmotic", "أسموزي"]],
            off: ["They are changes in the structure and shape of body parts, so they are structural adaptations.", "هي تغيرات في تركيب أجزاء الجسم وشكلها، فهي تكيفات تركيبية."],
            sto: ["The parrotfish was born with its torpedo shape.", "سمكة الببغاء وُلدت بشكلها الطوربيدي."] },
          { q: ["Which adaptation enables deep-sea fish to cope with oxygen deficiency?", "أي التكيفات يمكّن أسماك الأعماق من مواجهة نقص الأكسجين؟"],
            c: [["Slowing the metabolic rate", "إبطاء معدل الأيض"], ["Compressed body", "الجسم المضغوط"], ["Large eyes", "العيون الكبيرة"], ["Strong blood vessels", "الأوعية الدموية القوية"]],
            off: ["Slowing metabolism reduces oxygen requirements (physiological). A compressed body and strong vessels help against pressure; large eyes help in the dark.", "إبطاء الأيض يقلل الحاجة إلى الأكسجين (فسيولوجي)، أما الجسم المضغوط والأوعية القوية فلمقاومة الضغط، والعيون الكبيرة للرؤية في الظلام."],
            sto: ["Like a phone on battery-saver mode in the deep.", "مثل هاتف في وضع توفير الطاقة في الأعماق."] },
          { q: ["The migration of salmon between rivers and the sea is considered...", "تعتبر هجرة السلمون بين الأنهار والبحر..."],
            c: [["both a behavioural and a functional adaptation", "تكيفًا سلوكيًا ووظيفيًا معًا"], ["only a behavioural adaptation", "تكيفًا سلوكيًا فقط"], ["only a functional adaptation", "تكيفًا وظيفيًا فقط"], ["not an adaptation", "ليست تكيفًا"]],
            off: ["Migrating is a behaviour, and living in both fresh and salt water requires the body to adjust its osmotic regulation (functional).", "الهجرة سلوك، والعيش في الماء العذب والمالح يتطلب أن يعدل الجسم تنظيمه الأسموزي (وظيفي)."],
            sto: ["The salmon both travels and re-tunes its body for each water.", "السلمون يسافر ويعيد ضبط جسمه مع كل نوع من الماء."] },
          { q: ["How does a freshwater fish deal with water entering its body by osmosis?", "كيف تتخلص السمكة العذبة من الماء الذي يدخل جسمها بالأسموزية؟"],
            c: [["It excretes large amounts of dilute urine through the kidneys", "تخرج كميات كبيرة من البول المخفف عن طريق الكلى"], ["It drinks more water", "تشرب مزيدًا من الماء"], ["It stores urea in its blood", "تخزن اليوريا في دمها"], ["It uses a contractile vacuole", "تستخدم الفجوة المنقبضة"]],
            off: ["Its body fluids are more concentrated than fresh water, so water enters; the kidneys get rid of it as dilute urine. Contractile vacuoles are for unicellular organisms.", "سوائل جسمها أكثر تركيزًا من الماء العذب فيدخلها الماء، فتتخلص منه الكلى في بول مخفف، والفجوة المنقبضة للكائنات وحيدة الخلية."],
            sto: ["Nile tilapia is always 'bailing out' its body.", "البلطي النيلي ينزح الماء من جسمه باستمرار."] },
          { q: ["Most marine bony fish drink large amounts of sea water because...", "تبتلع معظم الأسماك البحرية العظمية كميات كبيرة من ماء البحر لأن..."],
            c: [["they lose water by osmosis to the saltier sea", "تفقد الماء بالأسموزية إلى البحر الأكثر ملوحة"], ["they gain too much water", "يدخلها ماء زائد"], ["they need salt for their bones", "تحتاج الملح لعظامها"], ["they have no gills", "ليس لها خياشيم"]],
            off: ["Sea water has higher osmotic pressure than their body fluids, so water leaves them; they drink and then excrete the excess salt by kidneys and gill cells.", "ماء البحر ضغطه الأسموزي أعلى من سوائل أجسامها فيخرج الماء منها، فتشرب ثم تخرج الملح الزائد بالكلى وخلايا الخياشيم."],
            sto: ["Reef fish sip all day and pump the salt back out.", "أسماك الشعاب ترتشف طوال اليوم وتضخ الملح للخارج."] },
          { q: ["Sharks reduce water loss in the sea by...", "تقلل القروش فقدان الماء في البحر عن طريق..."],
            c: [["keeping a high urea concentration in their blood", "الاحتفاظ بتركيز عالٍ من اليوريا في دمها"], ["producing dilute urine", "إخراج بول مخفف"], ["using a contractile vacuole", "استخدام الفجوة المنقبضة"], ["swallowing fresh water", "ابتلاع ماء عذب"]],
            off: ["Urea raises the osmotic pressure of their blood close to that of sea water, so less water leaves.", "اليوريا ترفع الضغط الأسموزي لدمها ليقترب من ضغط ماء البحر فيقل خروج الماء."],
            sto: ["The shark matches the sea's 'saltiness' with urea.", "القرش يجاري ملوحة البحر باليوريا."] },
          { q: ["Icefish live in the cold Southern Ocean at depths of up to about...", "تعيش أسماك الجليد في المحيط الجنوبي البارد على أعماق تصل إلى نحو..."],
            c: [["2 km", "٢ كم"], ["20 km", "٢٠ كم"], ["200 km", "٢٠٠ كم"], ["2000 km", "٢٠٠٠ كم"]],
            off: ["The book says up to 2000 m = 2 km. No ocean is 20 km deep.", "يذكر الكتاب أعماقًا تصل إلى ٢٠٠٠ م = ٢ كم، ولا يوجد محيط عمقه ٢٠ كم."],
            sto: ["2000 m is like about eleven Cairo Towers (187 m each) stacked downward.", "٢٠٠٠ م تعادل نحو أحد عشر برجًا مثل برج القاهرة (١٨٧ م) فوق بعضها لأسفل."] }
        ]
      },
      {
        id: "sec1u1l8", icon: "🫧", page: 43,
        title: { en: "Atmospheric Gases in Aquatic Environments", ar: "تأثير غازات الهواء الجوي على البيئات المائية" },
        idea: {
          official: {
            en: ["The atmosphere is the main source of dissolved O₂ in water; waves and currents increase gas exchange, and phytoplankton, algae and aquatic plants add O₂ by photosynthesis.",
              "CO₂ comes from the atmosphere, from the respiration (catabolism) of organisms and from human activities. Plants absorb it by diffusion: " + eq("6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂") + " (light, chlorophyll).",
              "Solubility = mass of dissolved gas ÷ volume of solution, at a given temperature and pressure. Air has about 500 times more O₂ than CO₂, but O₂ is about 50 times less soluble. Both are 20 to 30% less soluble in salty ocean water.",
              "Solubility of both gases falls as temperature rises; CO₂ solubility falls at a greater rate than O₂.",
              "Too much CO₂: " + eq("CO₂ + H₂O → H₂CO₃") + " lowers pH (acidification), reduces dissolved O₂ and turns slightly soluble CaCO₃ into soluble calcium bicarbonate, weakening the shells of corals and oysters (calcification falls).",
              "Too little CO₂: less photosynthesis and glucose, less energy along food chains, and pH rises."],
            ar: ["الغلاف الجوي هو المصدر الرئيسي للأكسجين الذائب في الماء، والأمواج والتيارات تزيد تبادل الغازات، كما تضيف العوالق النباتية والطحالب والنباتات المائية الأكسجين بالبناء الضوئي.",
              "يأتي ثاني أكسيد الكربون من الغلاف الجوي ومن تنفس الكائنات (الهدم) ومن الأنشطة البشرية، وتمتصه النباتات بالانتشار: " + eq("6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂") + " (ضوء وكلوروفيل).",
              "الذوبانية = كتلة الغاز الذائب ÷ حجم المحلول عند درجة حرارة وضغط معينين. تركيز الأكسجين في الهواء نحو ٥٠٠ ضعف تركيز ثاني أكسيد الكربون، لكن ذوبانيته أقل منه نحو ٥٠ مرة، وذوبانية الغازين في ماء المحيط المالح أقل بنسبة ٢٠–٣٠٪.",
              "تقل ذوبانية الغازين بارتفاع درجة الحرارة، وتقل ذوبانية ثاني أكسيد الكربون بمعدل أكبر من الأكسجين.",
              "زيادة CO₂: " + eq("CO₂ + H₂O → H₂CO₃") + " فيقل pH (التحمض)، ويقل الأكسجين الذائب، وتتحول كربونات الكالسيوم شحيحة الذوبان إلى بيكربونات كالسيوم ذائبة فتضعف أصداف المرجان والمحار (تقل عملية التكلس).",
              "نقص CO₂: يقل البناء الضوئي وتكوين الجلوكوز، فتقل الطاقة في السلاسل الغذائية ويرتفع pH."]
          },
          story: {
            en: ["Nour keeps goldfish in Tanta. One hot August afternoon they gasp at the surface.",
              "Her father explains: warm water holds less dissolved oxygen, so the fish struggle. They add an air pump: bubbles, like waves, increase gas exchange.",
              "On a school trip to Ras Mohammed, the guide shows white, bleached-looking patches of coral.",
              "As the air gets more CO₂, the sea absorbs more, forming carbonic acid; the pH drops and shells made of calcium carbonate get harder to build.",
              "Nour realizes her small tank and the huge Red Sea follow the same chemistry."],
            ar: ["تربي نور أسماك الزينة في طنطا، وفي ظهيرة حارة من أغسطس تراها تلهث عند السطح.",
              "يشرح والدها: الماء الدافئ يذوب فيه أكسجين أقل فتعاني الأسماك، فيضيفان مضخة هواء؛ الفقاعات مثل الأمواج تزيد تبادل الغازات.",
              "وفي رحلة مدرسية إلى رأس محمد يريهم المرشد بقعًا بيضاء من المرجان.",
              "عندما يزداد CO₂ في الهواء يمتص البحر كمية أكبر منه فيتكون حمض الكربونيك، فينخفض pH ويصعب بناء الأصداف المصنوعة من كربونات الكالسيوم.",
              "تدرك نور أن حوضها الصغير والبحر الأحمر الكبير يخضعان للكيمياء نفسها."]
          }
        },
        words: [
          ["Solubility", "الذوبانية", "The maximum amount of solute that dissolves in a volume of solvent to form a saturated solution at a given temperature and pressure.", "أقصى كمية من المذاب تذوب في حجم معين من المذيب لتكوين محلول مشبع عند درجة حرارة وضغط معينين."],
          ["Diffusion", "الانتشار", "Movement of a gas from a region of higher concentration to a region of lower concentration.", "انتقال الغاز من الوسط الأعلى تركيزًا إلى الوسط الأقل تركيزًا."],
          ["Acidification", "التحمض", "Fall in water pH when more CO₂ dissolves and forms carbonic acid (H₂CO₃).", "انخفاض pH الماء عند ذوبان كمية أكبر من CO₂ وتكوين حمض الكربونيك."],
          ["Calcification", "التكلس", "Deposition of calcium carbonate by organisms such as corals and oysters to build shells and skeletons.", "ترسيب كربونات الكالسيوم بواسطة كائنات مثل المرجان والمحار لبناء أصدافها وهياكلها."],
          ["External skeleton", "الهيكل الخارجي", "Outer support of organisms such as corals and oysters (CaCO₃) or shrimp (chitin).", "الدعامة الخارجية لكائنات مثل المرجان والمحار (كربونات كالسيوم) أو الجمبري (كيتين)."],
          ["Phytoplankton", "العوالق النباتية", "Tiny drifting producers that make oxygen and glucose by photosynthesis.", "كائنات منتجة دقيقة هائمة تنتج الأكسجين والجلوكوز بالبناء الضوئي."]
        ],
        lab: { parts: [{ type: "sec1_gas" }] },
        quiz: [
          { q: ["All of the following are sources of dissolved CO₂ in water EXCEPT...", "كل مما يلي مصادر لثاني أكسيد الكربون الذائب في الماء ما عدا..."],
            c: [["photosynthesis", "البناء الضوئي"], ["the atmosphere", "الغلاف الجوي"], ["respiration of marine organisms", "تنفس الكائنات البحرية"], ["decomposition of organic matter", "تحلل المواد العضوية"]],
            off: ["Photosynthesis CONSUMES CO₂ and releases O₂.", "البناء الضوئي يستهلك CO₂ ويطلق O₂."],
            sto: ["Algae are CO₂ eaters, not CO₂ makers.", "الطحالب تأكل CO₂ ولا تصنعه."] },
          { q: ["As the temperature of water rises, the solubility of O₂ and CO₂...", "عند ارتفاع درجة حرارة الماء فإن ذوبانية O₂ وCO₂..."],
            c: [["both decrease, CO₂ at a greater rate", "تقل كلتاهما، وCO₂ بمعدل أكبر"], ["both decrease, O₂ at a greater rate", "تقل كلتاهما، وO₂ بمعدل أكبر"], ["both decrease at the same rate", "تقل كلتاهما بالمعدل نفسه"], ["both increase", "تزداد كلتاهما"]],
            off: ["From the book's graphs (20°C → 50°C), the solubility of CO₂ decreases by a greater amount than that of O₂.", "من رسوم الكتاب (من ٢٠°م إلى ٥٠°م) تقل ذوبانية CO₂ بمقدار أكبر من ذوبانية O₂."],
            sto: ["A warm soda goes flat faster than a cold one.", "المشروب الغازي الدافئ يفقد غازه أسرع من البارد."] },
          { q: ["Fresh water at a certain temperature dissolves 8 mg/L of O₂. Ocean water at the same temperature, with 25% lower solubility, dissolves about...", "يذوب في الماء العذب عند درجة معينة ٨ مجم/لتر من O₂. ماء المحيط عند الدرجة نفسها وذوبانيته أقل بنسبة ٢٥٪ يذيب نحو..."],
            c: [["6 mg/L", "٦ مجم/لتر"], ["2 mg/L", "٢ مجم/لتر"], ["10 mg/L", "١٠ مجم/لتر"], ["7.75 mg/L", "7.75 مجم/لتر"]],
            off: ["25% lower: 8 × (1 − 0.25) = 8 × 0.75 = 6 mg/L. (2 mg/L is only the amount removed.)", "أقل بنسبة ٢٥٪: ٨ × (١ − ٠٫٢٥) = ٨ × ٠٫٧٥ = ٦ مجم/لتر، (و٢ مجم/لتر هي الكمية الناقصة فقط)."],
            sto: ["Salt takes a quarter of the oxygen's seats.", "الملح يأخذ ربع مقاعد الأكسجين."] },
          { q: ["When CO₂ combines with water, it forms...", "عند اتحاد ثاني أكسيد الكربون مع الماء يتكون..."],
            c: [["carbonic acid, H₂CO₃", "حمض الكربونيك H₂CO₃"], ["carbonate ion only, CO₃²⁻", "أيون الكربونات فقط CO₃²⁻"], ["sulfuric acid, H₂SO₄", "حمض الكبريتيك H₂SO₄"], ["glucose, C₆H₁₂O₆", "الجلوكوز C₆H₁₂O₆"]],
            off: ["CO₂ + H₂O → H₂CO₃, which lowers the pH of the water.", "CO₂ + H₂O → H₂CO₃، فيقل pH الماء."],
            sto: ["The fizz in Nour's soda is carbonic acid.", "فوران مشروب نور الغازي سببه حمض الكربونيك."] },
          { q: ["An increase of dissolved CO₂ in sea water leads to...", "زيادة ثاني أكسيد الكربون الذائب في ماء البحر تؤدي إلى..."],
            c: [["more acidification and less coral calcification", "زيادة التحمض ونقص تكلس المرجان"], ["more acidification and more calcification", "زيادة التحمض وزيادة التكلس"], ["less acidification and more calcification", "نقص التحمض وزيادة التكلس"], ["less acidification and less calcification", "نقص التحمض ونقص التكلس"]],
            off: ["More H₂CO₃ lowers pH, and CO₂ turns slightly soluble CaCO₃ into soluble calcium bicarbonate, so shells are harder to build.", "زيادة H₂CO₃ تخفض pH، وCO₂ يحول CaCO₃ شحيحة الذوبان إلى بيكربونات كالسيوم ذائبة فيصعب بناء الأصداف."],
            sto: ["The bleached patches at Ras Mohammed are a warning sign.", "البقع البيضاء في رأس محمد علامة تحذير."] },
          { q: ["Although air has about 500 times more O₂ than CO₂, water may hold a lot of CO₂ because...", "رغم أن الهواء به أكسجين أكثر من CO₂ بنحو ٥٠٠ مرة، فقد يحتوي الماء على كمية كبيرة من CO₂ لأن..."],
            c: [["CO₂ is about 50 times more soluble in water than O₂", "ذوبانية CO₂ في الماء أكبر من O₂ بنحو ٥٠ مرة"], ["CO₂ is lighter than O₂", "CO₂ أخف من O₂"], ["O₂ does not dissolve at all", "الأكسجين لا يذوب إطلاقًا"], ["water produces CO₂ by itself", "الماء ينتج CO₂ بنفسه"]],
            off: ["The book: O₂ solubility is about 50 times LESS than CO₂ solubility.", "يذكر الكتاب أن ذوبانية الأكسجين أقل من ذوبانية CO₂ بنحو ٥٠ مرة."],
            sto: ["CO₂ is the guest that water welcomes most.", "CO₂ هو الضيف الذي يرحب به الماء أكثر."] },
          { q: ["A decrease of CO₂ in water mainly harms aquatic ecosystems by...", "نقص ثاني أكسيد الكربون في الماء يضر النظم البيئية المائية أساسًا عن طريق..."],
            c: [["reducing photosynthesis and the energy in food chains", "تقليل البناء الضوئي والطاقة في السلاسل الغذائية"], ["increasing acidification", "زيادة التحمض"], ["dissolving coral shells", "إذابة أصداف المرجان"], ["lowering the pH", "خفض pH"]],
            off: ["Producers need CO₂ to make glucose; less glucose means less energy for higher levels of the food chain, and the pH rises.", "المنتجات تحتاج CO₂ لصنع الجلوكوز، ونقص الجلوكوز يعني طاقة أقل للمستويات الأعلى في السلسلة الغذائية، ويرتفع pH."],
            sto: ["No flour for the bakery, no bread for the town.", "لا دقيق للمخبز يعني لا خبز للمدينة."] }
        ]
      },
      {
        id: "sec1u1l9", icon: "🤿", page: 50,
        title: { en: "Light, Solar Radiation and Water Pressure", ar: "الضوء والإشعاع الشمسي وضغط الماء" },
        idea: {
          official: {
            en: ["Visible light is a small part of the electromagnetic spectrum (red, orange, yellow, green, blue, indigo, violet). Most light enters the water when the Sun's rays strike perpendicularly (90°).",
              "Light intensity decreases with depth: water absorbs almost all infrared in the top 10 cm, more than 50% of visible light by 10 m, and only about 1% (mostly blue) reaches 100 m. Long-wavelength red and orange are absorbed first.",
              "This gives light zones: sunlit (surface, down to about 200 m), twilight (mid-depth) and dark (deep). Producers live in the sunlit layer; coral reefs thrive in warm, shallow, sunny water.",
              "Pressure at a point in a liquid equals the weight of the liquid column above it per unit area, and the force on a surface is " + eq("F = P × A") + ". Pressure increases with depth and with density.",
              "At sea level " + eq("Pa = 1 atm = 1.013 × 10⁵ N/m²") + ". Water adds about 1 atm every 10 m, and " + eq("P = Pa + Pw") + ": at 100 m, P = 1 + 10 = 11 atm.",
              "Adaptations to pressure: swim bladders at mid-depths; compact bodies, no gas bladder (rays) or liquid-filled bladders and oil-rich livers at great depths; flexible cartilage in sharks and rays; more unsaturated fatty acids keep cell membranes fluid."],
            ar: ["الضوء المرئي جزء صغير من الطيف الكهرومغناطيسي (أحمر وبرتقالي وأصفر وأخضر وأزرق ونيلي وبنفسجي)، ويدخل الماء أكبر قدر منه عندما تسقط أشعة الشمس عمودية (٩٠°).",
              "تقل شدة الضوء بزيادة العمق: يمتص الماء كل الأشعة تحت الحمراء تقريبًا في أول ١٠ سم، وأكثر من ٥٠٪ من الضوء المرئي حتى عمق ١٠ م، ولا يصل إلى ١٠٠ م إلا نحو ١٪ معظمه أزرق، ويُمتص الأحمر والبرتقالي (الطول الموجي الكبير) أولًا.",
              "ينتج عن ذلك نطاقات ضوئية: المضيء (السطحي حتى نحو ٢٠٠ م) وشبه المظلم (المتوسط) والمظلم (العميق)، وتعيش المنتجات في الطبقة المضيئة، وتزدهر الشعاب المرجانية في المياه الدافئة الضحلة المشمسة.",
              "الضغط عند نقطة في سائل يساوي وزن عمود السائل فوقها على وحدة المساحات، والقوة على سطح " + eq("F = P × A") + "، ويزداد الضغط بزيادة العمق وكثافة السائل.",
              "عند سطح البحر " + eq("Pa = 1 atm = 1.013 × 10⁵ N/m²") + "، ويضيف الماء نحو ١ ض.ج كل ١٠ م، و" + eq("P = Pa + Pw") + "؛ فعند عمق ١٠٠ م يكون P = ١ + ١٠ = ١١ ض.ج.",
              "التكيف مع الضغط: مثانة العوم في الأعماق المتوسطة، وأجسام متماسكة وغياب المثانة الغازية (الراي) أو مثانة سائلة وكبد غني بالزيت في الأعماق الكبيرة، وغضاريف مرنة في القرش والراي، وزيادة الأحماض الدهنية غير المشبعة تحفظ مرونة الأغشية الخلوية."]
          },
          story: {
            en: ["Adham takes a diving course in Dahab. At 10 m his red fins look brown and grey.",
              "The instructor explains: water swallows red light first, so below about 10 m most of the red is gone and the world turns blue.",
              "His ears hurt on the way down: every 10 m adds about one atmosphere. At 30 m, he feels 1 + 3 = 4 atmospheres.",
              "The Blue Hole wall drops into darkness where no plants grow: there is not enough light for photosynthesis.",
              "Back on the boat the instructor shows a photo of a deep-sea ray: no air bladder to be crushed, just a flexible cartilage skeleton."],
            ar: ["يأخذ أدهم دورة غوص في دهب، وعند عمق ١٠ م تبدو زعانفه الحمراء بنية رمادية.",
              "يشرح المدرب: الماء يبتلع الضوء الأحمر أولًا، فبعد نحو ١٠ م يختفي معظم الأحمر ويصبح العالم أزرق.",
              "وتؤلمه أذناه أثناء النزول؛ فكل ١٠ م تضيف نحو ضغط جوي واحد، وعند ٣٠ م يتحمل ١ + ٣ = ٤ ض.ج.",
              "وجدار الحفرة الزرقاء ينحدر إلى ظلام لا ينمو فيه نبات، لأن الضوء غير كافٍ للبناء الضوئي.",
              "وعلى القارب يريه المدرب صورة سمكة راي من الأعماق: بلا مثانة هوائية تنسحق، وبهيكل غضروفي مرن."]
          }
        },
        words: [
          ["Electromagnetic spectrum", "الطيف الكهرومغناطيسي", "Waves that differ in wavelength (λ) and frequency (ν), from gamma rays to radio waves; visible light is a small part.", "موجات تختلف في الطول الموجي (λ) والتردد (ν) من أشعة جاما إلى موجات الراديو، والضوء المرئي جزء صغير منها."],
          ["Photic zones", "النطاقات الضوئية", "Ocean layers defined by light: sunlit, twilight and dark zones.", "طبقات المحيط حسب الضوء: النطاق المضيء وشبه المظلم والمظلم."],
          ["Pressure at a point", "الضغط عند نقطة", "Weight of the liquid column above the point acting on the unit area around it (N/m²).", "وزن عمود السائل فوق النقطة المؤثر على وحدة المساحات حولها (N/m²)."],
          ["Standard atmospheric pressure", "الضغط الجوي المعتاد", "Pressure at sea level at 0°C: 1 atm = 1.013 × 10⁵ N/m².", "الضغط عند سطح البحر عند صفر°م: ١ ض.ج = 1.013 × 10⁵ نيوتن/م²."],
          ["Cartilaginous fish", "الأسماك الغضروفية", "Fish such as sharks and rays with a flexible, lighter cartilage skeleton.", "أسماك مثل القرش والراي لها هيكل غضروفي مرن وأخف."],
          ["Unsaturated fatty acids", "الأحماض الدهنية غير المشبعة", "Membrane components that keep deep-sea cell membranes fluid and stable under pressure.", "مكونات في الأغشية تحفظ سيولة أغشية خلايا أسماك الأعماق وثباتها تحت الضغط."]
        ],
        lab: { parts: [{ type: "sec1_dive" }] },
        quiz: [
          { q: ["The total pressure on a diver at a depth of 100 m is about...", "الضغط الكلي على غواص عند عمق ١٠٠ م يساوي تقريبًا..."],
            c: [["11 atm", "١١ ض.ج"], ["10 atm", "١٠ ض.ج"], ["100 atm", "١٠٠ ض.ج"], ["1 atm", "١ ض.ج"]],
            off: ["Water adds about 1 atm per 10 m, so Pw = 10 atm. P = Pa + Pw = 1 + 10 = 11 atm. 10 atm forgets the atmosphere above the water.", "الماء يضيف نحو ١ ض.ج كل ١٠ م، فيكون Pw = ١٠ ض.ج، وP = Pa + Pw = ١ + ١٠ = ١١ ض.ج، واختيار ١٠ ينسى الضغط الجوي فوق الماء."],
            sto: ["Adham's dive computer would show eleven atmospheres at 100 m.", "حاسب غوص أدهم سيعرض أحد عشر ضغطًا جويًا عند ١٠٠ م."] },
          { q: ["What is the total pressure in N/m² at a depth of 20 m? (1 atm = 1.013 × 10⁵ N/m²)", "ما الضغط الكلي بالنيوتن/م² عند عمق ٢٠ م؟ (١ ض.ج = 1.013 × 10⁵ نيوتن/م²)"],
            c: [["3.039 × 10⁵ N/m²", "3.039 × 10⁵ نيوتن/م²"], ["2.026 × 10⁵ N/m²", "2.026 × 10⁵ نيوتن/م²"], ["2.026 × 10⁶ N/m²", "2.026 × 10⁶ نيوتن/م²"], ["1.013 × 10⁵ N/m²", "1.013 × 10⁵ نيوتن/م²"]],
            off: ["P = 1 + 20/10 = 3 atm = 3 × 1.013 × 10⁵ = 3.039 × 10⁵ N/m².", "P = ١ + ٢٠ ÷ ١٠ = ٣ ض.ج = ٣ × 1.013 × 10⁵ = 3.039 × 10⁵ نيوتن/م²."],
            sto: ["At 20 m, three atmospheres press on Adham.", "عند ٢٠ م تضغط ثلاثة أجواء على أدهم."] },
          { q: ["The pressure at a point is 2 × 10⁵ N/m². The force on a fish's side of area 0.01 m² is...", "الضغط عند نقطة 2 × 10⁵ نيوتن/م². القوة على جانب سمكة مساحته 0.01 م² تساوي..."],
            c: [["2000 N", "٢٠٠٠ نيوتن"], ["2 × 10⁷ N", "2 × 10⁷ نيوتن"], ["20 N", "٢٠ نيوتن"], ["200 N", "٢٠٠ نيوتن"]],
            off: ["F = P × A = 2 × 10⁵ × 0.01 = 2 × 10³ = 2000 N, perpendicular to the surface.", "F = P × A = 2 × 10⁵ × 0.01 = 2 × 10³ = ٢٠٠٠ نيوتن، عمودية على السطح."],
            sto: ["Like a 200 kg mass pressing on a small patch of skin.", "كأن كتلة ٢٠٠ كجم تضغط على رقعة صغيرة من الجلد."] },
          { q: ["Which colours of sunlight are absorbed first after entering the sea?", "أي ألوان ضوء الشمس تمتص أولًا بعد دخوله البحر؟"],
            c: [["Red and orange", "الأحمر والبرتقالي"], ["Blue and violet", "الأزرق والبنفسجي"], ["Green and blue", "الأخضر والأزرق"], ["All colours equally", "كل الألوان بالتساوي"]],
            off: ["Water absorbs the warm, long-wavelength colours (red, orange) first and lets the short-wavelength blue go deepest.", "يمتص الماء الألوان الدافئة طويلة الموجة (الأحمر والبرتقالي) أولًا، ويصل الأزرق قصير الموجة إلى أعمق مسافة."],
            sto: ["Adham's red fins turned grey at 10 m.", "زعانف أدهم الحمراء صارت رمادية عند ١٠ م."] },
          { q: ["The amount of light entering the water surface is greatest when the angle between the Sun's rays and the surface is...", "تكون كمية الضوء النافذة من سطح الماء أكبر ما يمكن عندما تكون الزاوية بين أشعة الشمس والسطح..."],
            c: [["90°", "٩٠°"], ["0°", "صفر°"], ["45°", "٤٥°"], ["120°", "١٢٠°"]],
            off: ["Light penetration is high when the rays strike perpendicularly and decreases as they strike at an angle.", "تكون كمية الضوء النافذ كبيرة عندما تسقط الأشعة عمودية وتقل عند سقوطها مائلة."],
            sto: ["Noon sun at Dahab lights the reef best.", "شمس الظهيرة في دهب تضيء الشعاب أكثر."] },
          { q: ["Rays live at great depths without a gas-filled bladder. This helps them...", "تعيش أسماك الراي في الأعماق الكبيرة بلا مثانة غازية، وهذا يساعدها على..."],
            c: [["avoid collapsing under the very high pressure", "عدم الانهيار تحت الضغط الهائل"], ["float near the surface", "الطفو قرب السطح"], ["see in the dark", "الرؤية في الظلام"], ["breathe air", "تنفس الهواء"]],
            off: ["Gas is compressible and would be crushed at great depths; rays instead rely on a large oil-rich liver for buoyancy.", "الغاز قابل للانضغاط وسينسحق في الأعماق الكبيرة، لذا تعتمد الراي على كبد كبير غني بالزيت للطفو."],
            sto: ["No balloon inside, nothing to pop.", "لا بالون بالداخل، فلا شيء ينفجر."] },
          { q: ["Water pressure at 50 m in the Red Sea compared with 50 m in a freshwater lake is...", "ضغط الماء عند عمق ٥٠ م في البحر الأحمر مقارنة بعمق ٥٠ م في بحيرة عذبة..."],
            c: [["greater, because sea water is denser", "أكبر لأن ماء البحر أكثف"], ["smaller, because sea water is denser", "أصغر لأن ماء البحر أكثف"], ["equal, because the depth is the same", "متساوٍ لأن العمق واحد"], ["zero in both", "صفر في الحالتين"]],
            off: ["Pressure increases with density: salt water with more salts and plankton is denser, so the column above weighs more.", "يزداد الضغط بزيادة الكثافة؛ والماء المالح الغني بالأملاح والعوالق أكثف فيكون عمود الماء فوق النقطة أثقل."],
            sto: ["The same depth of a heavier liquid squeezes harder.", "العمق نفسه من سائل أثقل يضغط أكثر."] }
        ]
      },
      {
        id: "sec1u1l10", icon: "♻️", page: 60,
        title: { en: "Ecological Balance and the Human Role", ar: "الاتزان البيئي ودور الإنسان في استدامة الحياة المائية" },
        idea: {
          official: {
            en: ["Ecological balance is a state of dynamic stability in which organisms interact with the non-living components in a way that sustains life: balance of nutrients, balance among organisms and energy flow through food webs.",
              "Nutrient balance: nitrogen and phosphorus feed plants and algae, the base of the food chain; an excess causes an abnormal algal bloom.",
              "Balance among organisms: predatory fish control prey populations. If overfishing removes predators, small fish increase excessively and overconsume food resources.",
              "Energy flows from producers (algae, plants) to consumers (herbivorous then predatory fish). If predators eat many small fish, zooplankton increase and algae growth changes.",
              "On coral reefs, predatory fish control sea urchins that would destroy the reef. Human threats: pollution (pesticides, heavy metals), overfishing and habitat destruction (reefs, wetlands).",
              "Human roles: conserve resources, raise awareness, sustainable development (meeting present needs without compromising future generations) and eco-friendly habits, such as protecting the Nile."],
            ar: ["الاتزان البيئي حالة من الاستقرار الديناميكي تتفاعل فيها الكائنات الحية مع المكونات غير الحية بما يضمن استمرار الحياة: اتزان العناصر الغذائية، والاتزان بين الكائنات، وتدفق الطاقة في الشبكات الغذائية.",
              "اتزان العناصر الغذائية: النيتروجين والفوسفور غذاء النباتات والطحالب قاعدة السلسلة الغذائية، وزيادتهما المفرطة تسبب نموًا غير طبيعي للطحالب.",
              "الاتزان بين الكائنات: الأسماك المفترسة تضبط أعداد الفرائس، وإذا قل عددها بالصيد الجائر تزداد الأسماك الصغيرة بإفراط وتستنزف الموارد الغذائية.",
              "تتدفق الطاقة من المنتجات (الطحالب والنباتات) إلى المستهلكات (الأسماك آكلة العشب ثم المفترسة)، وإذا التهمت المفترسات أعدادًا كبيرة من الأسماك الصغيرة تزداد العوالق الحيوانية ويتغير نمو الطحالب.",
              "في الشعاب المرجانية تضبط الأسماك المفترسة أعداد قنافذ البحر التي قد تدمر الشعاب. ومن تهديدات الإنسان: التلوث (المبيدات والعناصر الثقيلة) والصيد الجائر وتدمير الموائل (الشعاب والأراضي الرطبة).",
              "دور الإنسان: الحفاظ على الموارد، والتوعية البيئية، والتنمية المستدامة (تلبية احتياجات الحاضر دون الإضرار بقدرة الأجيال القادمة)، والممارسات الصديقة للبيئة مثل حماية نهر النيل."]
          },
          story: {
            en: ["Ali's grandfather has fished Lake Manzala for fifty years. He says the big fish used to be everywhere.",
              "When fishermen took too many large predators, small fish exploded in number and ate the lake's tiny animals.",
              "Fertilizer from the fields drained into the lake, and green algae covered the water like a carpet, using up oxygen at night.",
              "Ali joins a school project: a plan to protect the Nile with less fertilizer runoff, treated factory waste and fishing seasons.",
              "His grandfather smiles: a lake is like a family; if one member takes too much, everyone suffers."],
            ar: ["يصطاد جد علي في بحيرة المنزلة منذ خمسين عامًا، ويقول إن الأسماك الكبيرة كانت في كل مكان.",
              "عندما اصطاد الصيادون عددًا كبيرًا من المفترسات الكبيرة تضاعفت الأسماك الصغيرة وأكلت حيوانات البحيرة الدقيقة.",
              "وتسربت الأسمدة من الحقول إلى البحيرة فغطت الطحالب الخضراء الماء كالسجادة واستهلكت الأكسجين ليلًا.",
              "ينضم علي إلى مشروع مدرسي لوضع خطة لحماية النيل: أسمدة أقل تتسرب، ومعالجة مخلفات المصانع، ومواسم محددة للصيد.",
              "يبتسم الجد: البحيرة مثل الأسرة؛ إذا أخذ فرد أكثر من حقه عانى الجميع."]
          }
        },
        words: [
          ["Ecological balance", "الاتزان البيئي", "A state of dynamic stability where organisms and non-living components interact to sustain life.", "حالة استقرار ديناميكي تتفاعل فيها الكائنات والمكونات غير الحية بما يضمن استمرار الحياة."],
          ["Food web", "الشبكة الغذائية", "Interconnected food chains through which energy flows from producers to consumers.", "سلاسل غذائية متشابكة تتدفق خلالها الطاقة من المنتجات إلى المستهلكات."],
          ["Algal bloom", "ازدهار الطحالب", "Abnormal growth of algae caused by excess nutrients such as nitrogen and phosphorus.", "نمو غير طبيعي للطحالب بسبب زيادة العناصر الغذائية مثل النيتروجين والفوسفور."],
          ["Overfishing", "الصيد الجائر", "Catching fish faster than they can reproduce, which disrupts ecological balance.", "صيد الأسماك بمعدل أسرع من تكاثرها مما يخل بالاتزان البيئي."],
          ["Habitat destruction", "تدمير الموائل", "Damage to natural habitats such as coral reefs and wetlands, causing loss of biodiversity.", "إتلاف الموائل الطبيعية مثل الشعاب المرجانية والأراضي الرطبة مما يفقد التنوع البيولوجي."],
          ["Sustainable development", "التنمية المستدامة", "Development that meets present needs without compromising the ability of future generations to meet theirs.", "تنمية تلبي احتياجات الحاضر دون الإضرار بقدرة الأجيال القادمة على تلبية احتياجاتها."]
        ],
        lab: { parts: [{ type: "sec1_web" }, {
          type: "sort",
          prompt: ["Tap an action, then tap its effect on aquatic ecosystems.", "اضغط على الفعل، ثم اختر أثره على النظم المائية."],
          bins: [["good", "💚", "Helps the balance", "يحافظ على الاتزان"], ["bad", "⚠️", "Disrupts the balance", "يخل بالاتزان"]],
          items: [[["Fishing seasons and limits", "مواسم وحدود للصيد"], "good"], [["Treating factory waste", "معالجة مخلفات المصانع"], "good"], [["Awareness campaigns", "حملات التوعية"], "good"], [["Clean, sustainable technology", "تقنيات نظيفة مستدامة"], "good"],
            [["Overfishing predators", "الصيد الجائر للمفترسات"], "bad"], [["Fertilizer runoff", "تسرب الأسمدة"], "bad"], [["Destroying coral reefs", "تدمير الشعاب المرجانية"], "bad"], [["Pesticides and heavy metals", "المبيدات والعناصر الثقيلة"], "bad"]]
        }] },
        quiz: [
          { q: ["The role of predatory fish in maintaining ecological balance is...", "دور الأسماك المفترسة في الحفاظ على الاتزان البيئي هو..."],
            c: [["controlling the number of small fish", "ضبط أعداد الأسماك الصغيرة"], ["reducing nutrient levels", "خفض مستويات العناصر الغذائية"], ["producing oxygen", "إنتاج الأكسجين"], ["increasing algae growth directly", "زيادة نمو الطحالب مباشرة"]],
            off: ["Predators keep prey populations in check, so food resources are not overconsumed.", "المفترسات تضبط أعداد الفرائس فلا تُستنزف الموارد الغذائية."],
            sto: ["Grandpa's big fish were the lake's police.", "أسماك الجد الكبيرة كانت شرطة البحيرة."] },
          { q: ["Excessive nutrient levels (nitrogen and phosphorus) in a lake lead to...", "الزيادة المفرطة للعناصر الغذائية (النيتروجين والفوسفور) في بحيرة تؤدي إلى..."],
            c: [["an abnormal algal bloom", "نمو غير طبيعي للطحالب"], ["decreased plant growth", "نقص نمو النباتات"], ["increased biodiversity", "زيادة التنوع البيولوجي"], ["ecosystem stability", "استقرار النظام البيئي"]],
            off: ["Nutrients feed algae; too much causes a bloom that disturbs the ecosystem.", "العناصر الغذائية تغذي الطحالب، وزيادتها تسبب ازدهارًا يخل بالنظام البيئي."],
            sto: ["The green carpet on Lake Manzala came from farm fertilizer.", "السجادة الخضراء على بحيرة المنزلة جاءت من أسمدة الحقول."] },
          { q: ["If overfishing removes most predatory fish, the population of small fish will most likely...", "إذا أزال الصيد الجائر معظم الأسماك المفترسة، فإن أعداد الأسماك الصغيرة على الأرجح..."],
            c: [["increase excessively and overconsume food resources", "تزداد بإفراط وتستنزف الموارد الغذائية"], ["decrease to zero", "تقل حتى تختفي"], ["stay exactly the same", "تبقى كما هي تمامًا"], ["turn into predators", "تتحول إلى مفترسات"]],
            off: ["Without control, prey increase, eat too much zooplankton and other food, and the system becomes imbalanced.", "بدون ضبط تزداد الفرائس وتأكل كثيرًا من العوالق الحيوانية وغيرها فيختل النظام."],
            sto: ["No cats, too many mice, empty pantry.", "لا قطط، فئران كثيرة، مخزن فارغ."] },
          { q: ["In an aquatic food web, energy flows...", "في الشبكة الغذائية المائية تتدفق الطاقة..."],
            c: [["from producers such as algae to consumers such as herbivorous and predatory fish", "من المنتجات مثل الطحالب إلى المستهلكات مثل الأسماك آكلة العشب والمفترسة"], ["from predators to plants", "من المفترسات إلى النباتات"], ["from nitrogen to phosphorus", "من النيتروجين إلى الفوسفور"], ["from deep organisms to surface organisms", "من كائنات الأعماق إلى كائنات السطح"]],
            off: ["Producers capture light energy by photosynthesis; it passes to herbivores, then to predators.", "المنتجات تحبس طاقة الضوء بالبناء الضوئي، ثم تنتقل إلى آكلات العشب ثم إلى المفترسات."],
            sto: ["Sunlight → algae → small fish → big fish on grandpa's hook.", "ضوء الشمس ← طحالب ← أسماك صغيرة ← سمكة كبيرة في صنارة الجد."] },
          { q: ["What is the main cause of biodiversity loss in aquatic ecosystems?", "ما السبب الرئيسي لفقدان التنوع البيولوجي في النظم البيئية المائية؟"],
            c: [["Habitat destruction", "تدمير الموائل"], ["Sustainable fishing", "الصيد المستدام"], ["Natural predation", "الافتراس الطبيعي"], ["Balanced nutrient levels", "توازن العناصر الغذائية"]],
            off: ["Destroying natural habitats such as coral reefs and wetlands causes a loss of biodiversity.", "تدمير الموائل الطبيعية مثل الشعاب المرجانية والأراضي الرطبة يسبب فقدان التنوع البيولوجي."],
            sto: ["Knock down the apartment block and the families scatter.", "اهدم العمارة فتتشتت الأسر."] },
          { q: ["Sustainable development means...", "التنمية المستدامة تعني..."],
            c: [["meeting present needs without compromising future generations", "تلبية احتياجات الحاضر دون الإضرار بالأجيال القادمة"], ["using all resources as fast as possible", "استخدام كل الموارد بأسرع ما يمكن"], ["stopping all industry", "إيقاف كل الصناعات"], ["ignoring future needs", "تجاهل احتياجات المستقبل"]],
            off: ["The book's definition: development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs.", "تعريف الكتاب: تنمية تلبي احتياجات الجيل الحالي دون الإضرار بقدرة الأجيال القادمة على تلبية احتياجاتها."],
            sto: ["Ali wants his own grandchildren to fish the Nile too.", "علي يريد أن يصطاد أحفاده في النيل أيضًا."] },
          { q: ["Which of the following is NOT a negative impact of human activity on aquatic ecosystems?", "أي مما يلي ليس أثرًا سلبيًا للنشاط البشري على النظم المائية؟"],
            c: [["Sustainable development programmes", "برامج التنمية المستدامة"], ["Pollution by pesticides and heavy metals", "التلوث بالمبيدات والعناصر الثقيلة"], ["Overfishing", "الصيد الجائر"], ["Destroying coral reefs", "تدمير الشعاب المرجانية"]],
            off: ["Sustainable development protects resources; the other three disturb ecological balance.", "التنمية المستدامة تحمي الموارد، أما الثلاثة الأخرى فتخل بالاتزان البيئي."],
            sto: ["Ali's Nile plan is the cure, not the disease.", "خطة علي للنيل هي العلاج لا المرض."] }
        ]
      }
    ]
  });

  /* ================= UNIT 2: THE ATMOSPHERE ================= */
  G.units.push({
    id: "sec1u2", num: 2, icon: "🌍", color: "teal",
    title: { en: "The Atmosphere", ar: "الغلاف الجوي" },
    lessons: [
      {
        id: "sec1u2l1", icon: "🎈", page: 68,
        title: { en: "Components and Layers of the Atmosphere", ar: "مكونات الغلاف الجوي وطبقاته" },
        idea: {
          official: {
            en: ["The atmosphere is a layer of gases around Earth: nitrogen about 78%, oxygen about 21%, argon about 0.93% and carbon dioxide about 0.04%, plus water vapour, SO₂, O₃, CO and NO₂. Respiration, photosynthesis and volcanoes keep changing these proportions.",
              "Nitrogen is largely inert (its reactions need lightning or very high temperatures), so nitrogen oxides are rare. CO₂ is a greenhouse gas that traps heat.",
              "Troposphere (0 to about 10 to 11 km): densest layer, all weather. Temperature falls about 6.5°C per km from about 15°C at the surface: " + eq("t = t₀ − 6.5 × h(km)") + ", reaching −56.5°C at the tropopause (11 km).",
              "Stratosphere (10 to 50 km): the ozone layer (about 20 to 40 km) absorbs UV, so temperature rises with height; air moves horizontally, good for aircraft.",
              "Mesosphere (50 to 80 km): coldest layer, about −93°C; meteors burn up here. Thermosphere (80 to 700 km): over 2000°C; its lower part (80 to 550 km) is the ionosphere, which reflects radio waves and makes the aurora. Exosphere (700 to 1000 km): satellites.",
              "A planet keeps a gas if " + eq("v(rms) < v(e)") + ". Earth's escape velocity is about 11.2 km/s; small, hot Mercury has no atmosphere."],
            ar: ["الغلاف الجوي طبقة من الغازات تحيط بالأرض: النيتروجين نحو ٧٨٪ والأكسجين نحو ٢١٪ والأرجون نحو 0.93٪ وثاني أكسيد الكربون نحو 0.04٪، بالإضافة إلى بخار الماء وSO₂ وO₃ وCO وNO₂، والتنفس والبناء الضوئي والبراكين تغير هذه النسب باستمرار.",
              "النيتروجين خامل إلى حد كبير (تفاعلاته تحتاج البرق أو درجات حرارة عالية جدًا)، لذلك أكاسيده نادرة، وثاني أكسيد الكربون من غازات الصوبة الزجاجية التي تحبس الحرارة.",
              "التروبوسفير (من صفر إلى نحو ١٠–١١ كم): أكثف الطبقات وبه كل الظواهر الجوية، وتقل درجة الحرارة نحو 6.5°م لكل كيلومتر بدءًا من نحو ١٥°م عند السطح: " + eq("t = t₀ − 6.5 × h(km)") + "، فتصل إلى −56.5°م عند التروبوبوز (١١ كم).",
              "الستراتوسفير (١٠–٥٠ كم): به طبقة الأوزون (نحو ٢٠–٤٠ كم) التي تمتص الأشعة فوق البنفسجية فترتفع الحرارة بالارتفاع، وحركة الهواء أفقية فيناسب الطيران.",
              "الميزوسفير (٥٠–٨٠ كم): أبرد الطبقات نحو −٩٣°م، وفيه تحترق الشهب. الثرموسفير (٨٠–٧٠٠ كم): تتجاوز حرارته ٢٠٠٠°م، وجزؤه السفلي (٨٠–٥٥٠ كم) هو الأيونوسفير الذي يعكس موجات الراديو ويسبب الشفق القطبي. الإكسوسفير (٧٠٠–١٠٠٠ كم): مكان الأقمار الصناعية.",
              "يحتفظ الكوكب بالغاز إذا كانت " + eq("v(rms) < v(e)") + "، وسرعة الإفلات للأرض نحو 11.2 كم/ث، أما عطارد الصغير الساخن فلا غلاف جوي له."]
          },
          story: {
            en: ["Laila watches a weather balloon launch from the Helwan Observatory. She imagines riding with it.",
              "In the first 11 km the air gets thinner and colder: every kilometre about 6.5°C cooler, until −56.5°C at the tropopause where the clouds stop.",
              "Higher, in the stratosphere, it surprisingly warms again: the ozone layer is soaking up ultraviolet light, shielding her skin and DNA.",
              "The balloon pops near 35 km, but Laila's imagination keeps going: past the freezing mesosphere where shooting stars burn, into the ionosphere that bounces radio signals, up to the satellites that run her phone's GPS.",
              "She smiles: Earth keeps this blanket because its gravity is strong enough that air molecules cannot reach 11.2 km/s."],
            ar: ["تشاهد ليلى إطلاق بالون أرصاد من مرصد حلوان وتتخيل أنها تصعد معه.",
              "في أول ١١ كم يصبح الهواء أخف وأبرد؛ كل كيلومتر أبرد بنحو 6.5°م حتى −56.5°م عند التروبوبوز حيث تنتهي السحب.",
              "وفي الستراتوسفير الأعلى يدفأ الجو من جديد بشكل مفاجئ؛ فطبقة الأوزون تمتص الأشعة فوق البنفسجية وتحمي جلدها وحمضها النووي.",
              "ينفجر البالون قرب ٣٥ كم، لكن خيال ليلى يكمل: عبر الميزوسفير المتجمد حيث تحترق الشهب، إلى الأيونوسفير الذي يعكس إشارات الراديو، حتى الأقمار الصناعية التي تشغل نظام GPS في هاتفها.",
              "تبتسم: تحتفظ الأرض بهذا الغطاء لأن جاذبيتها قوية بما يكفي فلا تصل جزيئات الهواء إلى 11.2 كم/ث."]
          }
        },
        words: [
          ["Atmosphere", "الغلاف الجوي", "The layer of gases surrounding Earth, mainly nitrogen and oxygen.", "طبقة الغازات المحيطة بالأرض، ومعظمها نيتروجين وأكسجين."],
          ["Troposphere", "التروبوسفير", "The lowest, densest layer (0 to about 11 km) where all weather occurs; temperature falls 6.5°C per km.", "أدنى الطبقات وأكثفها (حتى نحو ١١ كم) وبها كل الظواهر الجوية، وتقل الحرارة 6.5°م لكل كيلومتر."],
          ["Tropopause", "التروبوبوز", "Thin transition layer at the top of the troposphere that stops cold and warm air from mixing.", "طبقة انتقالية رقيقة أعلى التروبوسفير تمنع اختلاط الهواء البارد بالدافئ."],
          ["Ozone layer", "طبقة الأوزون", "Part of the stratosphere (about 20 to 40 km) where O₃ absorbs most harmful UV radiation.", "جزء من الستراتوسفير (نحو ٢٠–٤٠ كم) يمتص فيه الأوزون معظم الأشعة فوق البنفسجية الضارة."],
          ["Ionosphere", "الأيونوسفير", "Lower thermosphere (80 to 550 km) of charged ions; it reflects radio waves and produces the aurora.", "الجزء السفلي من الثرموسفير (٨٠–٥٥٠ كم) المليء بالأيونات، يعكس موجات الراديو ويسبب الشفق القطبي."],
          ["Escape velocity", "سرعة الإفلات", "The speed needed to escape a planet's gravity; about 11.2 km/s for Earth.", "السرعة اللازمة للإفلات من جاذبية الكوكب، ونحو 11.2 كم/ث للأرض."]
        ],
        lab: { parts: [{ type: "sec1_layers" }, {
          type: "sort",
          prompt: ["Tap a fact, then tap the layer it belongs to.", "اضغط على المعلومة، ثم اختر الطبقة."],
          bins: [["t", "☁️", "Troposphere", "التروبوسفير"], ["s", "✈️", "Stratosphere", "الستراتوسفير"], ["m", "☄️", "Mesosphere", "الميزوسفير"], ["th", "📻", "Thermosphere", "الثرموسفير"], ["e", "🛰️", "Exosphere", "الإكسوسفير"]],
          items: [[["All weather and clouds", "كل الظواهر الجوية والسحب"], "t"], [["Ozone layer", "طبقة الأوزون"], "s"], [["Meteors burn up", "احتراق الشهب"], "m"], [["Coldest, about −93°C", "الأبرد نحو −٩٣°م"], "m"],
            [["Aurora and radio reflection", "الشفق وانعكاس الراديو"], "th"], [["Over 2000°C", "أكثر من ٢٠٠٠°م"], "th"], [["Satellites and GPS", "الأقمار الصناعية وGPS"], "e"], [["Horizontal air, good for aircraft", "هواء أفقي مناسب للطيران"], "s"]]
        }] },
        quiz: [
          { q: ["The air temperature at ground level is 5°C. What is the temperature at the top of a mountain 2 km high?", "درجة حرارة الهواء عند سطح الأرض ٥°م، فما درجة الحرارة عند قمة جبل ارتفاعه ٢ كم؟"],
            c: [["−8°C", "−٨°م"], ["−1.5°C", "−1.5°م"], ["1.5°C", "1.5°م"], ["0°C", "صفر°م"]],
            off: ["Temperature falls 6.5°C per km: drop = 6.5 × 2 = 13°C, so t = 5 − 13 = −8°C.", "تقل الحرارة 6.5°م لكل كيلومتر: الانخفاض = 6.5 × ٢ = ١٣°م، إذن t = ٥ − ١٣ = −٨°م."],
            sto: ["Laila would need a jacket on that summit.", "ستحتاج ليلى إلى سترة فوق تلك القمة."] },
          { q: ["Starting from 15°C at the surface, the temperature at the tropopause (11 km) is...", "بدءًا من ١٥°م عند السطح، فإن درجة الحرارة عند التروبوبوز (١١ كم) تساوي..."],
            c: [["−56.5°C", "−56.5°م"], ["−71.5°C", "−71.5°م"], ["−93°C", "−٩٣°م"], ["8.5°C", "8.5°م"]],
            off: ["Drop = 6.5 × 11 = 71.5°C, so t = 15 − 71.5 = −56.5°C (−71.5 is the drop, not the temperature).", "الانخفاض = 6.5 × ١١ = 71.5°م، إذن t = ١٥ − 71.5 = −56.5°م (و−71.5 هي مقدار الانخفاض لا درجة الحرارة)."],
            sto: ["The balloon's thermometer reads −56.5°C where clouds end.", "يقرأ ترمومتر البالون −56.5°م حيث تنتهي السحب."] },
          { q: ["Although nitrogen is the most abundant gas, nitrogen oxides are very rare in air because...", "رغم أن النيتروجين أكثر الغازات وفرة، فإن أكاسيده نادرة جدًا في الهواء لأن..."],
            c: [["the strong triple bond makes N₂ largely inert", "الرابطة الثلاثية القوية تجعل N₂ خاملًا إلى حد كبير"], ["N₂ reacts with O₂ at low temperatures", "N₂ يتفاعل مع O₂ عند درجات حرارة منخفضة"], ["it comes from decaying plants", "ينتج من تحلل النباتات"], ["it reacts during rainfall", "يتفاعل أثناء سقوط المطر"]],
            off: ["Nitrogen's reactions need special conditions such as lightning or extremely high temperatures, so its oxides stay at very low levels.", "تفاعلات النيتروجين تحتاج ظروفًا خاصة كالبرق أو درجات الحرارة العالية جدًا، فتبقى أكاسيده بنسب ضئيلة."],
            sto: ["Nitrogen is the lazy giant of the air.", "النيتروجين هو العملاق الكسول في الهواء."] },
          { q: ["The thickness of the thermosphere is approximately...", "سُمك طبقة الثرموسفير يساوي تقريبًا..."],
            c: [["620 km", "٦٢٠ كم"], ["700 km", "٧٠٠ كم"], ["30 km", "٣٠ كم"], ["40 km", "٤٠ كم"]],
            off: ["It extends from 80 km to about 700 km: 700 − 80 = 620 km. 700 km is its top, not its thickness.", "تمتد من ٨٠ كم إلى نحو ٧٠٠ كم: ٧٠٠ − ٨٠ = ٦٢٠ كم، و٧٠٠ كم هو حدها العلوي لا سُمكها."],
            sto: ["Subtract the floor from the ceiling.", "اطرح الأرضية من السقف."] },
          { q: ["In which layer does temperature INCREASE with height because ozone absorbs UV?", "في أي طبقة تزداد درجة الحرارة بالارتفاع لأن الأوزون يمتص الأشعة فوق البنفسجية؟"],
            c: [["Stratosphere", "الستراتوسفير"], ["Troposphere", "التروبوسفير"], ["Mesosphere", "الميزوسفير"], ["Exosphere", "الإكسوسفير"]],
            off: ["The ozone layer (about 20 to 40 km) lies in the stratosphere; absorbing UV heats it.", "طبقة الأوزون (نحو ٢٠–٤٠ كم) في الستراتوسفير، وامتصاص الأشعة فوق البنفسجية يسخنها."],
            sto: ["Laila's surprise warm zone above the clouds.", "منطقة ليلى الدافئة المفاجئة فوق السحب."] },
          { q: ["A planet keeps a certain gas in its atmosphere when...", "يحتفظ الكوكب بغاز معين في غلافه الجوي عندما..."],
            c: [["the effective speed of its molecules is less than the escape velocity", "تكون السرعة الفعالة لجزيئاته أقل من سرعة الإفلات"], ["the speed of its molecules equals the escape velocity", "تساوي سرعة جزيئاته سرعة الإفلات"], ["the speed of its molecules exceeds the escape velocity", "تزيد سرعة جزيئاته عن سرعة الإفلات"], ["the planet is very hot", "يكون الكوكب ساخنًا جدًا"]],
            off: ["If v(rms) < v(e) the molecules cannot escape; if v(rms) ≥ v(e) they drift into space.", "إذا كانت v(rms) < v(e) لا تستطيع الجزيئات الإفلات، وإذا كانت v(rms) ≥ v(e) تهرب إلى الفضاء."],
            sto: ["Molecules slower than 11.2 km/s are stuck with Earth.", "الجزيئات الأبطأ من 11.2 كم/ث تبقى مع الأرض."] },
          { q: ["Oxygen makes up approximately ... of the volume of atmospheric air.", "يمثل الأكسجين تقريبًا ... من حجم الهواء الجوي."],
            c: [["21%", "٢١٪"], ["78%", "٧٨٪"], ["0.93%", "0.93٪"], ["0.04%", "0.04٪"]],
            off: ["N₂ ≈ 78%, O₂ ≈ 21%, Ar ≈ 0.93%, CO₂ ≈ 0.04%.", "النيتروجين ≈ ٧٨٪، والأكسجين ≈ ٢١٪، والأرجون ≈ 0.93٪، وثاني أكسيد الكربون ≈ 0.04٪."],
            sto: ["About one breath in five is oxygen.", "نحو خُمس كل نفس أكسجين."] }
        ]
      },
      {
        id: "sec1u2l2", icon: "☀️", page: 78,
        title: { en: "Chemical Reactions in the Atmosphere", ar: "التفاعلات الكيميائية في الغلاف الجوي" },
        idea: {
          official: {
            en: ["Ultraviolet rays have shorter wavelengths and higher energy than visible light: UVC 100 to 280 nm, UVB 280 to 315 nm, UVA 315 to 400 nm. UV lamps sterilize instruments and check banknotes.",
              "N₂, O₂ and atomic O absorb photons shorter than 240 nm; ozone absorbs UV from 240 to 310 nm, protecting us from these high-energy photons.",
              "Ozone formation step 1, photodissociation: UV shorter than 240 nm breaks the O=O bond: " + eq("O₂ + UV → O + O") + ".",
              "Step 2: a free oxygen atom joins an oxygen molecule: " + eq("O + O₂ → O₃") + ".",
              "Ozone depletion is caused mainly by chlorine and bromine compounds such as CFCs. More UV reaches the ground: DNA damage and skin cancer (melanoma), weaker immunity (helper T-cells) and cataract. The Montreal Protocol banned many of these chemicals and the layer is recovering.",
              "Help: choose eco-friendly cleaners (vinegar, baking soda), refrigerants like 410A instead of CFCs, and halon-free extinguishers. Ground-level ozone (NOx + hydrocarbons + sunlight) causes smog, burns leaves, damages crops and corrodes rubber and plastic."],
            ar: ["الأشعة فوق البنفسجية أقصر طولًا موجيًا وأعلى طاقة من الضوء المرئي: UVC من ١٠٠ إلى ٢٨٠ نانومتر، وUVB من ٢٨٠ إلى ٣١٥، وUVA من ٣١٥ إلى ٤٠٠، وتستخدم مصابيحها في تعقيم الأدوات والكشف عن العملات المزيفة.",
              "تمتص جزيئات N₂ وO₂ والأكسجين الذري الفوتونات الأقصر من ٢٤٠ نانومتر، ويمتص الأوزون الأشعة من ٢٤٠ إلى ٣١٠ نانومتر فيحمينا من هذه الفوتونات عالية الطاقة.",
              "الخطوة الأولى لتكوين الأوزون، التفكك الضوئي: الأشعة الأقصر من ٢٤٠ نانومتر تكسر الرابطة O=O: " + eq("O₂ + UV → O + O") + ".",
              "الخطوة الثانية: تتحد ذرة أكسجين حرة مع جزيء أكسجين: " + eq("O + O₂ → O₃") + ".",
              "يحدث تآكل طبقة الأوزون أساسًا بسبب مركبات الكلور والبروم مثل مركبات الكلوروفلوروكربون CFCs، فيصل مزيد من الأشعة فوق البنفسجية إلى الأرض: تلف DNA وسرطان الجلد (الميلانوما)، وضعف المناعة (الخلايا التائية المساعدة)، والمياه البيضاء (الكتاراكت). وقد منع بروتوكول مونتريال كثيرًا من هذه المواد وبدأت الطبقة تتعافى.",
              "للمساعدة: اختر منظفات صديقة للبيئة (الخل وبيكربونات الصوديوم)، وغازات تبريد مثل 410A بدل CFCs، وطفايات خالية من الهالون. أما الأوزون قرب سطح الأرض (أكاسيد النيتروجين + الهيدروكربونات + ضوء الشمس) فيسبب الضباب الدخاني ويحرق الأوراق ويتلف المحاصيل ويُتلف المطاط والبلاستيك."]
          },
          story: {
            en: ["Ahmed works summers at his uncle's shop in Khan el-Khalili. His uncle checks every 200-pound note under a small UV lamp.",
              "The lamp's light is ultraviolet: invisible, high-energy, the same kind of rays the Sun sends.",
              "High in the stratosphere, the shortest UV rays smash O₂ molecules into single atoms, which grab other O₂ molecules to make O₃.",
              "That ozone then catches the UVB that would burn Ahmed's skin at noon in the alley.",
              "When the old shop fridge breaks, Ahmed insists on a new one with 410A gas: no CFCs to eat the shield."],
            ar: ["يعمل أحمد في الصيف في محل عمه بخان الخليلي، ويفحص عمه كل ورقة فئة ٢٠٠ جنيه تحت مصباح صغير للأشعة فوق البنفسجية.",
              "ضوء المصباح أشعة فوق بنفسجية: غير مرئية وعالية الطاقة، من نوع الأشعة التي ترسلها الشمس نفسها.",
              "وفي أعلى الستراتوسفير تحطم أقصر الأشعة فوق البنفسجية جزيئات O₂ إلى ذرات منفردة، تتحد كل منها مع جزيء O₂ آخر لتكوّن O₃.",
              "وهذا الأوزون يصطاد أشعة UVB التي كانت ستحرق جلد أحمد ظهرًا في الحارة.",
              "وعندما تعطلت ثلاجة المحل القديمة أصر أحمد على ثلاجة جديدة بغاز 410A؛ بلا CFCs تأكل الدرع الواقي."]
          }
        },
        words: [
          ["Ultraviolet rays", "الأشعة فوق البنفسجية", "Short-wavelength, high-energy radiation (100 to 400 nm): UVC, UVB, UVA.", "أشعة قصيرة الطول الموجي عالية الطاقة (١٠٠–٤٠٠ نانومتر): UVC وUVB وUVA."],
          ["Photodissociation", "التفكك الضوئي", "Breaking of chemical bonds in a molecule as a result of absorbing light, e.g. O₂ → 2O.", "تكسر الروابط الكيميائية في الجزيء نتيجة امتصاص الضوء، مثل O₂ ← 2O."],
          ["Ozone", "الأوزون", "A molecule of three oxygen atoms (O₃) formed when O + O₂ combine.", "جزيء من ثلاث ذرات أكسجين (O₃) يتكون باتحاد O مع O₂."],
          ["Ozone layer depletion", "تآكل طبقة الأوزون", "Gradual deterioration of the ozone layer mainly by chlorine and bromine compounds such as CFCs.", "التدهور التدريجي لطبقة الأوزون بسبب مركبات الكلور والبروم مثل CFCs."],
          ["CFCs", "مركبات الكلوروفلوروكربون", "Chlorofluorocarbons from old refrigerants and sprays that destroy ozone.", "مركبات من غازات التبريد والبخاخات القديمة تدمر الأوزون."],
          ["Smog", "الضباب الدخاني", "Polluted haze formed when ground-level ozone combines with SO₂, NO₂ and fine particles.", "ضباب ملوث يتكون عند اتحاد الأوزون الأرضي مع SO₂ وNO₂ والجسيمات الدقيقة."]
        ],
        lab: { parts: [{ type: "sec1_ozone" }] },
        quiz: [
          { q: ["Which ultraviolet wavelength causes photodissociation of the bond in an O₂ molecule?", "أي طول موجي للأشعة فوق البنفسجية يسبب التفكك الضوئي للرابطة في جزيء O₂؟"],
            c: [["230 nm", "٢٣٠ نانومتر"], ["240 nm", "٢٤٠ نانومتر"], ["290 nm", "٢٩٠ نانومتر"], ["305 nm", "٣٠٥ نانومتر"]],
            off: ["Only UV shorter than 240 nm breaks the O=O bond; 230 nm < 240 nm. 240 nm itself is not shorter.", "الأشعة الأقصر من ٢٤٠ نانومتر فقط تكسر الرابطة O=O، و٢٣٠ < ٢٤٠، أما ٢٤٠ نفسها فليست أقصر."],
            sto: ["Only the sharpest photons crack the O₂ nut.", "أقوى الفوتونات فقط تكسر جوزة O₂."] },
          { q: ["Ozone can absorb photons with a wavelength of...", "يستطيع الأوزون امتصاص فوتونات طولها الموجي..."],
            c: [["250 nm", "٢٥٠ نانومتر"], ["200 nm", "٢٠٠ نانومتر"], ["350 nm", "٣٥٠ نانومتر"], ["400 nm", "٤٠٠ نانومتر"]],
            off: ["Ozone absorbs UV between 240 nm and 310 nm; only 250 nm is inside this range.", "يمتص الأوزون الأشعة بين ٢٤٠ و٣١٠ نانومتر، و٢٥٠ فقط داخل هذا المدى."],
            sto: ["The ozone goalkeeper only catches shots between 240 and 310.", "حارس الأوزون يصد فقط التسديدات بين ٢٤٠ و٣١٠."] },
          { q: ["When the bond in an O₂ molecule breaks by photodissociation, the products are...", "عند انكسار الرابطة في جزيء O₂ بالتفكك الضوئي ينتج..."],
            c: [["two single oxygen atoms (O)", "ذرتا أكسجين منفردتان (O)"], ["two oxide ions (O²⁻)", "أيونا أكسيد (O²⁻)"], ["one ozone molecule", "جزيء أوزون واحد"], ["one atom and one ion", "ذرة وأيون"]],
            off: ["O₂ + UV → O + O: the covalent bond splits into two free oxygen atoms.", "O₂ + UV → O + O: تنكسر الرابطة التساهمية إلى ذرتي أكسجين حرتين."],
            sto: ["One pair of dancers splits into two solo dancers.", "زوج من الراقصين ينفصل إلى راقصين منفردين."] },
          { q: ["An ozone molecule is formed by the combination of...", "يتكون جزيء الأوزون باتحاد..."],
            c: [["one oxygen atom and one oxygen molecule", "ذرة أكسجين وجزيء أكسجين"], ["two oxygen molecules", "جزيئي أكسجين"], ["three oxygen molecules", "ثلاثة جزيئات أكسجين"], ["two oxygen atoms", "ذرتي أكسجين"]],
            off: ["Step 2: O + O₂ → O₃.", "الخطوة الثانية: O + O₂ → O₃."],
            sto: ["A solo dancer joins a couple: a trio.", "راقص منفرد ينضم إلى زوج فيصبحون ثلاثة."] },
          { q: ["The reaction O₂ + photon → O + O is called...", "التفاعل O₂ + فوتون ← O + O يسمى..."],
            c: [["photodissociation", "تفككًا ضوئيًا"], ["thermal dissociation", "تفككًا حراريًا"], ["nuclear dissociation", "تفككًا نوويًا"], ["ionic dissociation", "تفككًا أيونيًا"]],
            off: ["Bonds break because light (a photon) is absorbed.", "تنكسر الروابط بسبب امتصاص الضوء (فوتون)."],
            sto: ["Light is the hammer here.", "الضوء هو المطرقة هنا."] },
          { q: ["Which set lists health effects of more UV reaching the ground due to ozone depletion?", "أي مجموعة تمثل الآثار الصحية لوصول مزيد من الأشعة فوق البنفسجية بسبب تآكل الأوزون؟"],
            c: [["Skin cancer, weakened immunity and cataract", "سرطان الجلد وضعف المناعة والمياه البيضاء"], ["Asthma, bronchitis and smog", "الربو والتهاب الشعب والضباب الدخاني"], ["Anaemia, diabetes and obesity", "الأنيميا والسكري والسمنة"], ["Broken bones only", "كسور العظام فقط"]],
            off: ["UV damages skin-cell DNA (melanoma), affects helper T-cells (immunity) and accelerates cataract in the eye's lens.", "الأشعة تتلف DNA خلايا الجلد (الميلانوما)، وتؤثر في الخلايا التائية المساعدة (المناعة)، وتسرع المياه البيضاء في عدسة العين."],
            sto: ["Ahmed's sunglasses and sunscreen are real armour.", "نظارة أحمد الشمسية وواقي الشمس درع حقيقي."] },
          { q: ["Which choice helps reduce ozone layer depletion?", "أي اختيار يساعد على الحد من تآكل طبقة الأوزون؟"],
            c: [["Using refrigerators with 410A instead of CFCs", "استخدام ثلاجات بغاز 410A بدلًا من CFCs"], ["Using halon fire extinguishers", "استخدام طفايات الهالون"], ["Using more chlorine cleaners", "استخدام منظفات كلور أكثر"], ["Releasing bromine compounds", "إطلاق مركبات البروم"]],
            off: ["CFCs, halon (bromine) and chlorine/bromine cleaners destroy ozone; 410A is a safer alternative.", "مركبات CFCs والهالون (البروم) ومنظفات الكلور والبروم تدمر الأوزون، وغاز 410A بديل أكثر أمانًا."],
            sto: ["Ahmed's new shop fridge is ozone-friendly.", "ثلاجة محل أحمد الجديدة صديقة للأوزون."] }
        ]
      },
      {
        id: "sec1u2l3", icon: "⛰️", page: 84,
        title: { en: "Physical Factors: Heat, Pressure, Wind and Humidity", ar: "العوامل الفيزيائية: الحرارة والضغط والرياح والرطوبة" },
        idea: {
          official: {
            en: ["Heat affects pressure, wind, humidity and rainfall. Temperature scales: " + eq("T(K) = t(°C) + 273") + " and " + eq("t(°F) = 1.8 × t(°C) + 32") + ". Water freezes at 0°C = 32°F = 273 K and boils at 100°C = 212°F = 373 K.",
              "Heat moves by conduction (solids, metals good, cork poor), convection (fluids: warm, less dense parts rise; birds use thermals) and radiation (electromagnetic, even in vacuum). Wood frogs store glucose as antifreeze; icefish make antifreeze proteins; the thorny devil lizard channels moisture to its mouth.",
              "Atmospheric pressure is the weight of the air column above a point per unit area; it decreases with altitude. Standard: " + eq("1 atm = 76 cmHg = 1.013 × 10⁵ N/m²") + " at sea level and 0°C. A mercury barometer measures it; weather maps use millibars " + eq("(1 mbar = 100 N/m²)") + " and isobars.",
              "Example: 750 mmHg = " + eq("(75/76) × 1.013 × 10⁵ ≈ 99967 N/m²") + ". At low pressure there is less oxygen; the body makes more red blood cells. Normal blood pressure is about 120/80 mmHg.",
              "Wind blows from high pressure to low pressure. Plants resist wind with tissues: parenchyma (living, thin cellulose walls), collenchyma (cellulose and pectin, strength with flexibility) and sclerenchyma (thick lignin walls, usually dead, great strength).",
              "Humidity is the water vapour in air, measured with a hygrometer; warmer air holds more. Comfort is at 40 to 60% relative humidity; high humidity slows sweat evaporation (heat stress), dry air causes dehydration and the kidneys reabsorb water (osmoregulation)."],
            ar: ["تؤثر الحرارة في الضغط والرياح والرطوبة والأمطار، وتدريجات الحرارة: " + eq("T(K) = t(°C) + 273") + " و" + eq("t(°F) = 1.8 × t(°C) + 32") + "، فيتجمد الماء عند صفر°م = ٣٢°ف = ٢٧٣ كلفن ويغلي عند ١٠٠°م = ٢١٢°ف = ٣٧٣ كلفن.",
              "تنتقل الحرارة بالتوصيل (في الأجسام الصلبة؛ المعادن جيدة والفلين رديء)، والحمل (في الموائع: الأجزاء الدافئة الأقل كثافة تصعد، والطيور تستغل التيارات الصاعدة)، والإشعاع (موجات كهرومغناطيسية حتى في الفراغ). الضفدع الخشبي يخزن الجلوكوز مانعًا للتجمد، وسمكة الجليد تفرز بروتينات مانعة للتجمد، وسحلية الشيطان الشائك توجه الرطوبة إلى فمها.",
              "الضغط الجوي هو وزن عمود الهواء فوق نقطة على وحدة المساحات، ويقل بالارتفاع، والضغط المعتاد " + eq("1 atm = 76 cmHg = 1.013 × 10⁵ N/m²") + " عند سطح البحر وصفر°م، ويقاس بالبارومتر الزئبقي، وتستخدم خرائط الطقس الملليبار " + eq("(1 mbar = 100 N/m²)") + " وخطوط الضغط المتساوي.",
              "مثال: ٧٥٠ مم زئبق = " + eq("(75/76) × 1.013 × 10⁵ ≈ 99967 N/m²") + ". وفي الضغط المنخفض يقل الأكسجين فيزيد الجسم إنتاج كرات الدم الحمراء، وضغط الدم الطبيعي نحو ١٢٠/٨٠ مم زئبق.",
              "تهب الرياح من الضغط المرتفع إلى المنخفض، وتقاوم النباتات الرياح بأنسجة: البارنشيمي (خلايا حية بجدر سليلوزية رقيقة)، والكولنشيمي (سليلوز وبكتين يعطي قوة ومرونة)، والإسكلرنشيمي (جدر سميكة من اللجنين وخلاياه ميتة غالبًا ويعطي قوة كبيرة).",
              "الرطوبة هي بخار الماء في الهواء وتقاس بالهيجرومتر، والهواء الأدفأ يحمل بخارًا أكثر. يرتاح الإنسان عند رطوبة نسبية ٤٠–٦٠٪، والرطوبة العالية تبطئ تبخر العرق (الإجهاد الحراري)، والجفاف يسبب فقد الماء فتعيد الكلى امتصاصه (الاتزان المائي)."]
          },
          story: {
            en: ["Mostafa climbs Mount Sinai at night with his school trip. At the base in the afternoon the thermometer says 32°C.",
              "After climbing 528 m he checks his phone: about 6.5°C colder per kilometre, so about 32 − 3.4 ≈ 28.6°C.",
              "His friend from Alexandria, used to sticky 80% humidity, says the dry mountain air feels great, but Mostafa's lips crack and he drinks more water.",
              "At the summit (2285 m) the barometer app shows lower pressure and he breathes faster: each breath carries less oxygen.",
              "A cousin in the US texts: 'It's 50°F here.' Mostafa converts: (50 − 32) ÷ 1.8 = 10°C = 283 K. Cold, like the summit at dawn."],
            ar: ["يصعد مصطفى جبل موسى ليلًا مع رحلة المدرسة، وعند السفح بعد الظهر يقرأ الترمومتر ٣٢°م.",
              "بعد صعود ٥٢٨ م ينظر إلى هاتفه: الحرارة تقل نحو 6.5°م لكل كيلومتر، أي نحو ٣٢ − 3.4 ≈ 28.6°م.",
              "يقول صديقه السكندري المعتاد على رطوبة ٨٠٪ اللزجة إن هواء الجبل الجاف رائع، لكن شفتي مصطفى تتشققان فيشرب ماءً أكثر.",
              "وعند القمة (٢٢٨٥ م) يُظهر تطبيق البارومتر ضغطًا أقل فيتنفس أسرع؛ فكل نفس يحمل أكسجين أقل.",
              "يرسل له قريب في أمريكا: الجو هنا ٥٠°ف. يحول مصطفى: (٥٠ − ٣٢) ÷ 1.8 = ١٠°م = ٢٨٣ كلفن؛ بارد مثل القمة عند الفجر."]
          }
        },
        words: [
          ["Kelvin scale", "التدريج المطلق (الكلفن)", "Absolute temperature scale used in science: T(K) = t(°C) + 273.", "تدريج الحرارة المطلق المستخدم علميًا: T(K) = t(°C) + 273."],
          ["Convection", "الحمل", "Heat transfer in fluids by currents: warmer, less dense parts rise and denser parts sink.", "انتقال الحرارة في الموائع بتيارات: الأجزاء الأدفأ الأقل كثافة تصعد والأكثف تهبط."],
          ["Atmospheric pressure", "الضغط الجوي", "Weight of the air column above a point acting on the unit area; 1.013 × 10⁵ N/m² at sea level.", "وزن عمود الهواء فوق نقطة على وحدة المساحات، ويساوي 1.013 × 10⁵ نيوتن/م² عند سطح البحر."],
          ["Barometer", "البارومتر", "Instrument that measures atmospheric pressure, e.g. the 76 cm mercury column.", "جهاز لقياس الضغط الجوي، مثل عمود الزئبق ٧٦ سم."],
          ["Isobars", "خطوط الضغط المتساوي", "Lines on weather maps joining places of equal atmospheric pressure.", "خطوط على خرائط الطقس تصل بين الأماكن المتساوية في الضغط الجوي."],
          ["Sclerenchyma", "النسيج الإسكلرنشيمي", "Plant tissue of hard, usually dead cells with thick lignin walls giving mechanical strength.", "نسيج نباتي من خلايا صلبة ميتة غالبًا بجدر سميكة من اللجنين يعطي قوة ميكانيكية."],
          ["Humidity", "الرطوبة", "The amount of water vapour in the air, measured with a hygrometer.", "كمية بخار الماء في الهواء، وتقاس بالهيجرومتر."]
        ],
        lab: { parts: [{ type: "sec1_weather" }, {
          type: "sort",
          prompt: ["Tap a description, then tap the plant tissue.", "اضغط على الوصف، ثم اختر النسيج النباتي."],
          bins: [["p", "🟢", "Parenchyma", "بارنشيمي"], ["c", "🟡", "Collenchyma", "كولنشيمي"], ["s", "🟤", "Sclerenchyma", "إسكلرنشيمي"]],
          items: [[["Thin cellulose walls, many chloroplasts", "جدر سليلوزية رقيقة وبلاستيدات كثيرة"], "p"], [["Stores food and water, aids ventilation", "يخزن الغذاء والماء ويساعد على التهوية"], "p"],
            [["Irregular cellulose and pectin thickening", "تغلظ غير منتظم من السليلوز والبكتين"], "c"], [["Strength with flexibility in growing parts", "قوة مع مرونة في الأجزاء النامية"], "c"],
            [["Thick lignin walls, impermeable to water", "جدر سميكة من اللجنين لا تنفذ الماء"], "s"], [["Usually dead cells, great mechanical strength", "خلايا ميتة غالبًا وقوة ميكانيكية كبيرة"], "s"]]
        }] },
        quiz: [
          { q: ["A body at 283 K has a temperature on the Fahrenheit scale of...", "جسم درجة حرارته ٢٨٣ كلفن، فدرجة حرارته بالفهرنهايت..."],
            c: [["50°F", "٥٠°ف"], ["10°F", "١٠°ف"], ["30°F", "٣٠°ف"], ["70°F", "٧٠°ف"]],
            off: ["t(°C) = 283 − 273 = 10°C; t(°F) = 1.8 × 10 + 32 = 50°F.", "t(°C) = ٢٨٣ − ٢٧٣ = ١٠°م، وt(°F) = 1.8 × ١٠ + ٣٢ = ٥٠°ف."],
            sto: ["The cousin's 50°F is Mostafa's 10°C.", "٥٠°ف عند القريب تساوي ١٠°م عند مصطفى."] },
          { q: ["The temperature at the base of Mount Sinai is 32°C. What is it 528 m above the base (fall of 6.5°C per km)?", "درجة الحرارة عند سفح جبل موسى ٣٢°م، فما درجة الحرارة على ارتفاع ٥٢٨ م فوق السفح (انخفاض 6.5°م لكل كيلومتر)؟"],
            c: [["About 29°C", "نحو ٢٩°م"], ["About 35°C", "نحو ٣٥°م"], ["About 19°C", "نحو ١٩°م"], ["About 16°C", "نحو ١٦°م"]],
            off: ["Drop = 6.5 × 0.528 = 3.432°C; t = 32 − 3.432 ≈ 28.6°C ≈ 29°C. 35°C wrongly adds the drop.", "الانخفاض = 6.5 × ٠٫٥٢٨ = 3.432°م، إذن t = ٣٢ − 3.432 ≈ 28.6°م ≈ ٢٩°م، واختيار ٣٥ يضيف الانخفاض خطأً."],
            sto: ["Mostafa's phone reads about 28.6°C on the path.", "يقرأ هاتف مصطفى نحو 28.6°م على الطريق."] },
          { q: ["The pressure at the top of a mountain is 750 mmHg. In N/m² it equals (1.013 × 10⁵ N/m² = 76 cmHg)...", "الضغط عند قمة جبل ٧٥٠ مم زئبق، ويساوي بالنيوتن/م² (1.013 × 10⁵ نيوتن/م² = ٧٦ سم زئبق)..."],
            c: [["99967 N/m²", "٩٩٩٦٧ نيوتن/م²"], ["89967 N/m²", "٨٩٩٦٧ نيوتن/م²"], ["101300 N/m²", "١٠١٣٠٠ نيوتن/م²"], ["1013 N/m²", "١٠١٣ نيوتن/م²"]],
            off: ["750 mmHg = 75 cmHg. P = (75 ÷ 76) × 1.013 × 10⁵ ≈ 99967 N/m².", "٧٥٠ مم زئبق = ٧٥ سم زئبق، P = (٧٥ ÷ ٧٦) × 1.013 × 10⁵ ≈ ٩٩٩٦٧ نيوتن/م²."],
            sto: ["Slightly below standard, as expected on a hill.", "أقل قليلًا من المعتاد كما يُتوقع فوق مرتفع."] },
          { q: ["The boiling point of pure water at standard pressure equals...", "درجة غليان الماء النقي تحت الضغط المعتاد تساوي..."],
            c: [["212°F", "٢١٢°ف"], ["100 K", "١٠٠ كلفن"], ["373°F", "٣٧٣°ف"], ["273 K", "٢٧٣ كلفن"]],
            off: ["100°C = 1.8 × 100 + 32 = 212°F = 100 + 273 = 373 K. 273 K is the freezing point.", "١٠٠°م = 1.8 × ١٠٠ + ٣٢ = ٢١٢°ف = ١٠٠ + ٢٧٣ = ٣٧٣ كلفن، و٢٧٣ كلفن هي درجة التجمد."],
            sto: ["An American kettle boils at 212.", "الغلاية الأمريكية تغلي عند ٢١٢."] },
          { q: ["Atmospheric pressure in a weather report is 1000 millibar. In N/m² it is...", "الضغط الجوي في نشرة الطقس ١٠٠٠ ملليبار، ويساوي بالنيوتن/م²..."],
            c: [["1 × 10⁵ N/m²", "1 × 10⁵ نيوتن/م²"], ["1 × 10³ N/m²", "1 × 10³ نيوتن/م²"], ["10 N/m²", "١٠ نيوتن/م²"], ["1.013 N/m²", "1.013 نيوتن/م²"]],
            off: ["1 mbar = 100 N/m², so 1000 mbar = 1000 × 100 = 1 × 10⁵ N/m², close to 1 atm.", "١ ملليبار = ١٠٠ نيوتن/م²، إذن ١٠٠٠ ملليبار = ١٠٠٠ × ١٠٠ = 1 × 10⁵ نيوتن/م²، قريب من ١ ض.ج."],
            sto: ["The TV weather map's 1000 is just under one atmosphere.", "رقم ١٠٠٠ على خريطة الطقس أقل قليلًا من ضغط جوي واحد."] },
          { q: ["Wind blows between two regions at the same level...", "تهب الرياح بين منطقتين على المستوى الأفقي نفسه..."],
            c: [["from the high-pressure area to the low-pressure area", "من منطقة الضغط المرتفع إلى منطقة الضغط المنخفض"], ["from low pressure to high pressure", "من الضغط المنخفض إلى المرتفع"], ["only from the poles", "من القطبين فقط"], ["only when pressures are equal", "فقط عندما يتساوى الضغطان"]],
            off: ["A pressure difference pushes air from high to low pressure; polar winds blow from the high-pressure poles to subpolar lows.", "فرق الضغط يدفع الهواء من المرتفع إلى المنخفض، والرياح القطبية تهب من ضغط القطبين المرتفع إلى المناطق دون القطبية المنخفضة."],
            sto: ["Like air rushing out of a pumped balloon.", "مثل الهواء المندفع من بالون منفوخ."] },
          { q: ["In high humidity, people feel hotter because...", "في الرطوبة العالية يشعر الإنسان بحرارة أكبر لأن..."],
            c: [["sweat evaporates more slowly, so the body cools less", "العرق يتبخر ببطء فيقل تبريد الجسم"], ["sweat evaporates faster", "العرق يتبخر أسرع"], ["the air holds less vapour", "الهواء يحمل بخارًا أقل"], ["the kidneys stop working", "الكلى تتوقف"]],
            off: ["Evaporating sweat absorbs heat from the body; humid air slows evaporation, risking heat stress or heatstroke.", "تبخر العرق يمتص الحرارة من الجسم، والهواء الرطب يبطئ التبخر فيزيد خطر الإجهاد الحراري وضربة الشمس."],
            sto: ["August in Alexandria feels hotter than dry Aswan at the same temperature.", "أغسطس في الإسكندرية أكثر إرهاقًا من أسوان الجافة عند الحرارة نفسها."] }
        ]
      },
      {
        id: "sec1u2l4", icon: "🌱", page: 98,
        title: { en: "The Atmosphere and the Role of Science in Its Sustainability", ar: "الغلاف الجوي ودور العلم في استدامته" },
        idea: {
          official: {
            en: ["Global warming is the continuous rise in the temperature of the air near Earth's surface, mainly from burning fossil fuels. Greenhouse gases: CO₂, CH₄, N₂O, CFCs and water vapour.",
              "The atmosphere lets short-wavelength solar radiation reach Earth; the surface re-emits long-wavelength thermal (infrared) radiation, which greenhouse gases prevent from escaping. Effects: melting polar ice, coastal floods, loss of polar species, hurricanes, floods and droughts. Remedies: public transport, energy efficiency (LED, renewables) and afforestation.",
              "Carbon monoxide from incomplete combustion binds haemoglobin 200 to 250 times more strongly than O₂, forming carboxyhaemoglobin (HbCO): hypoxia, lactic acid, headache, then dizziness and brain damage.",
              "Acid rain: " + eq("2SO₂ + O₂ → 2SO₃") + ", " + eq("SO₃ + H₂O → H₂SO₄") + "; " + eq("4NO₂ + O₂ + 2H₂O → 4HNO₃") + ".",
              "Harm: respiratory irritation and asthma; leaf damage, less photosynthesis, soil losing Ca and Mg; corrosion of limestone monuments: " + eq("H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O") + ".",
              "Science helps: gas scrubbers in chimneys, clean energy, satellites, weather stations (the 1985 ozone hole discovery led to the Montreal Protocol, 1987) and climate models. The 2015 Paris Agreement aims to keep warming below 2°C."],
            ar: ["الاحتباس الحراري هو الارتفاع المستمر في درجة حرارة الهواء الملاصق لسطح الأرض، ويرجع أساسًا إلى حرق الوقود الأحفوري، وغازات الصوبة الزجاجية: CO₂ وCH₄ وN₂O وCFCs وبخار الماء.",
              "يسمح الغلاف الجوي بمرور الإشعاع الشمسي قصير الموجة إلى الأرض، فيعيد السطح إشعاعه أشعة حرارية (تحت حمراء) طويلة الموجة تمنع غازات الصوبة هروبها. ومن آثاره: ذوبان جليد القطبين وغرق السواحل وانقراض كائنات قطبية والأعاصير والفيضانات والجفاف. ومن الحلول: المواصلات العامة، ورفع كفاءة الطاقة (LED والطاقة المتجددة)، والتشجير.",
              "أول أكسيد الكربون الناتج من الاحتراق غير الكامل يرتبط بالهيموجلوبين بقوة تزيد ٢٠٠–٢٥٠ مرة عن الأكسجين مكونًا كربوكسي هيموجلوبين (HbCO)، فيحدث نقص الأكسجة وتراكم حمض اللاكتيك والصداع، ثم الدوار وتلف المخ.",
              "الأمطار الحمضية: " + eq("2SO₂ + O₂ → 2SO₃") + "، " + eq("SO₃ + H₂O → H₂SO₄") + "، " + eq("4NO₂ + O₂ + 2H₂O → 4HNO₃") + ".",
              "أضرارها: تهيج الجهاز التنفسي والربو، وتلف الأوراق وقلة البناء الضوئي وفقد التربة للكالسيوم والماغنسيوم، وتآكل الآثار الجيرية: " + eq("H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O") + ".",
              "يساعد العلم بأجهزة غسل الغازات في المداخن، والطاقة النظيفة، والأقمار الصناعية، ومحطات الأرصاد (اكتشاف ثقب الأوزون عام ١٩٨٥ أدى إلى بروتوكول مونتريال ١٩٨٧)، والنماذج المناخية، ويهدف اتفاق باريس ٢٠١٥ إلى إبقاء الارتفاع أقل من ٢°م."]
          },
          story: {
            en: ["Rana lives in Helwan near old factories. Her grandfather says the limestone mosque nearby used to look sharper.",
              "Her chemistry teacher explains: sulfur dioxide from chimneys becomes sulfuric acid in clouds, and that acid slowly eats calcium carbonate stone.",
              "Rana's class visits a new plant with gas scrubbers: the chimney gas is washed before it leaves, removing the sulfur and nitrogen oxides.",
              "At home she makes sure the gas heater has ventilation: carbon monoxide is colourless, odourless and grabs haemoglobin far more tightly than oxygen.",
              "Her project: more trees in the schoolyard, LED lamps and the metro instead of car rides: small steps to cool the planet."],
            ar: ["تعيش رنا في حلوان قرب مصانع قديمة، ويقول جدها إن المسجد الحجري الجيري القريب كانت تفاصيله أوضح زمان.",
              "تشرح معلمة الكيمياء: ثاني أكسيد الكبريت من المداخن يصبح حمض كبريتيك في السحب، وهذا الحمض يأكل حجر كربونات الكالسيوم ببطء.",
              "يزور فصل رنا مصنعًا جديدًا به أجهزة غسل الغازات: تُغسل غازات المدخنة قبل خروجها فتزال أكاسيد الكبريت والنيتروجين.",
              "وفي البيت تتأكد من تهوية سخان الغاز؛ فأول أكسيد الكربون عديم اللون والرائحة ويمسك الهيموجلوبين بقوة أكبر بكثير من الأكسجين.",
              "مشروعها: أشجار أكثر في فناء المدرسة، ومصابيح LED، والمترو بدل السيارة؛ خطوات صغيرة لتبريد الكوكب."]
          }
        },
        words: [
          ["Global warming", "الاحتباس الحراري", "Continuous rise in the temperature of the air near Earth's surface, mainly from burning fossil fuels.", "الارتفاع المستمر في درجة حرارة الهواء الملاصق لسطح الأرض بسبب حرق الوقود الأحفوري أساسًا."],
          ["Greenhouse gases", "غازات الصوبة الزجاجية", "Gases that trap long-wavelength heat radiation: CO₂, CH₄, N₂O, CFCs, water vapour.", "غازات تحبس الأشعة الحرارية طويلة الموجة: CO₂ وCH₄ وN₂O وCFCs وبخار الماء."],
          ["Carboxyhaemoglobin", "كربوكسي هيموجلوبين", "HbCO: the stable compound of CO with haemoglobin that blocks oxygen transport.", "HbCO: مركب ثابت من أول أكسيد الكربون والهيموجلوبين يمنع نقل الأكسجين."],
          ["Acid rain", "الأمطار الحمضية", "Rain containing sulfuric and nitric acids formed from sulfur and nitrogen oxides.", "أمطار تحتوي على حمضي الكبريتيك والنيتريك المتكونين من أكاسيد الكبريت والنيتروجين."],
          ["Gas scrubber", "جهاز غسل الغازات", "Device in chimneys that removes sulfur and nitrogen oxides before release.", "جهاز في المداخن يزيل أكاسيد الكبريت والنيتروجين قبل انطلاقها."],
          ["Climate model", "النموذج المناخي", "Computer program built on physical, chemical and biological equations that predicts climate changes.", "برنامج حاسوبي مبني على معادلات فيزيائية وكيميائية وبيولوجية يتنبأ بتغيرات المناخ."]
        ],
        lab: { parts: [{ type: "sec1_green" }] },
        quiz: [
          { q: ["All of the following are greenhouse gases that cause global warming EXCEPT...", "كل مما يلي من غازات الصوبة الزجاجية المسببة للاحتباس الحراري ما عدا..."],
            c: [["N₂", "N₂"], ["CH₄", "CH₄"], ["CFCs", "CFCs"], ["N₂O", "N₂O"]],
            off: ["The book lists CO₂, CH₄, N₂O, CFCs and water vapour. Nitrogen gas (N₂) is not a greenhouse gas.", "يذكر الكتاب CO₂ وCH₄ وN₂O وCFCs وبخار الماء، وغاز النيتروجين N₂ ليس منها."],
            sto: ["The air's main gas is innocent of warming.", "الغاز الرئيسي في الهواء بريء من الاحترار."] },
          { q: ["Greenhouse gases prevent which radiation from escaping into space?", "تمنع غازات الصوبة الزجاجية أي إشعاع من الهروب إلى الفضاء؟"],
            c: [["Infrared (long-wavelength thermal) radiation", "الأشعة تحت الحمراء (الحرارية طويلة الموجة)"], ["Ultraviolet rays", "الأشعة فوق البنفسجية"], ["Radio waves", "موجات الراديو"], ["Gamma rays", "أشعة جاما"]],
            off: ["Earth absorbs short-wavelength sunlight and re-emits long-wavelength thermal (infrared) radiation, which these gases trap.", "تمتص الأرض ضوء الشمس قصير الموجة وتعيد إشعاعه أشعة حرارية تحت حمراء طويلة الموجة تحبسها هذه الغازات."],
            sto: ["Like a car parked in the Cairo sun with closed windows.", "مثل سيارة مغلقة النوافذ في شمس القاهرة."] },
          { q: ["In 4NO₂ + O₂ + 2H₂O → 4HNO₃, how many O₂ molecules react with 12 NO₂ molecules?", "في التفاعل 4NO₂ + O₂ + 2H₂O → 4HNO₃، كم جزيء O₂ يتفاعل مع ١٢ جزيء NO₂؟"],
            c: [["3", "٣"], ["12", "١٢"], ["4", "٤"], ["1", "١"]],
            off: ["Ratio NO₂ : O₂ = 4 : 1, so 12 NO₂ need 12 ÷ 4 = 3 O₂ (and give 12 HNO₃).", "النسبة NO₂ : O₂ = ٤ : ١، إذن ١٢ جزيء NO₂ تحتاج ١٢ ÷ ٤ = ٣ جزيئات O₂ (وتعطي ١٢ جزيء HNO₃)."],
            sto: ["Three recipes' worth of oxygen for twelve NO₂.", "أكسجين ثلاث وصفات لاثني عشر جزيء NO₂."] },
          { q: ["Sulfur trioxide reacts with water droplets in clouds to form...", "يتفاعل ثالث أكسيد الكبريت مع قطرات الماء في السحب مكونًا..."],
            c: [["sulfuric acid, H₂SO₄", "حمض الكبريتيك H₂SO₄"], ["nitric acid, HNO₃", "حمض النيتريك HNO₃"], ["carbonic acid, H₂CO₃", "حمض الكربونيك H₂CO₃"], ["sulfur dioxide, SO₂", "ثاني أكسيد الكبريت SO₂"]],
            off: ["SO₃(g) + H₂O(l) → H₂SO₄(aq), a very strong acid.", "SO₃(g) + H₂O(l) → H₂SO₄(aq)، وهو حمض قوي جدًا."],
            sto: ["The Helwan clouds brew sulfuric acid from chimney smoke.", "سحب حلوان تصنع حمض الكبريتيك من دخان المداخن."] },
          { q: ["Carbon monoxide is dangerous mainly because it...", "خطورة أول أكسيد الكربون ترجع أساسًا إلى أنه..."],
            c: [["binds haemoglobin 200 to 250 times more strongly than O₂", "يرتبط بالهيموجلوبين بقوة تزيد ٢٠٠–٢٥٠ مرة عن الأكسجين"], ["has a strong smell", "له رائحة قوية"], ["is a greenhouse gas only", "غاز صوبة زجاجية فقط"], ["forms acid rain", "يكوّن الأمطار الحمضية"]],
            off: ["It forms stable carboxyhaemoglobin, so less oxygen reaches the tissues (hypoxia). It is colourless and odourless.", "يكوّن كربوكسي هيموجلوبين ثابتًا فيقل وصول الأكسجين للأنسجة (نقص الأكسجة)، وهو عديم اللون والرائحة."],
            sto: ["The silent thief steals the oxygen's seat on the red blood cell.", "اللص الصامت يسرق مقعد الأكسجين على كرة الدم الحمراء."] },
          { q: ["Acid rain damages limestone monuments according to...", "تتلف الأمطار الحمضية الآثار الجيرية وفق المعادلة..."],
            c: [["H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O", "H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O"], ["CaCO₃ → CaO + CO₂ only by heating", "CaCO₃ → CaO + CO₂ بالتسخين فقط"], ["2SO₂ + O₂ → 2SO₃", "2SO₂ + O₂ → 2SO₃"], ["CO₂ + H₂O → H₂CO₃", "CO₂ + H₂O → H₂CO₃"]],
            off: ["The acid reacts with calcium carbonate, producing calcium sulfate, CO₂ and water, so the stone corrodes.", "يتفاعل الحمض مع كربونات الكالسيوم فينتج كبريتات الكالسيوم وCO₂ وماء فيتآكل الحجر."],
            sto: ["Rana's grandfather's mosque lost its sharp edges this way.", "هكذا فقد مسجد جد رنا تفاصيله الحادة."] },
          { q: ["The discovery of the ozone hole in 1985 led to...", "أدى اكتشاف ثقب الأوزون عام ١٩٨٥ إلى..."],
            c: [["the Montreal Protocol in 1987", "بروتوكول مونتريال عام ١٩٨٧"], ["the Paris Agreement in 1987", "اتفاق باريس عام ١٩٨٧"], ["banning public transport", "منع المواصلات العامة"], ["more CFC production", "زيادة إنتاج CFCs"]],
            off: ["A British station in Antarctica found it; the 1987 Montreal Protocol limited CFCs and the layer began recovering. Paris (2015) is about warming.", "اكتشفته محطة بريطانية في القارة القطبية الجنوبية، وحدّ بروتوكول مونتريال ١٩٨٧ من CFCs فبدأت الطبقة تتعافى، أما اتفاق باريس (٢٠١٥) فعن الاحترار."],
            sto: ["One weather station changed the whole world's fridges.", "محطة أرصاد واحدة غيرت ثلاجات العالم كله."] }
        ]
      }
    ]
  });
})();

/* ---------- Sec 1: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};

  /* ----- "In this lesson" objectives (from the book's unit learning outcomes) ----- */
  O.sec1u1l1 = { en: ["Describe the hydrosphere and the share of salt, frozen and fresh water", "Explain the water cycle and the role of transpiration", "Describe the structure and polarity of the water molecule", "Explain hydrogen bonds and why water is a universal solvent"],
    ar: ["وصف الغلاف المائي ونسب الماء المالح والمتجمد والعذب", "تفسير دورة الماء في الطبيعة ودور النتح", "وصف تركيب جزيء الماء وقطبيته", "تفسير الروابط الهيدروجينية ولماذا يعد الماء مذيبًا عامًا"] };
  O.sec1u1l2 = { en: ["Explain the ionic equilibrium of pure water", "Define hydrolysis and classify salts as acidic, basic or neutral", "Write hydrolysis equations for NH₄Cl and NaHCO₃", "Use the pH scale and measure the pH of water samples"],
    ar: ["تفسير الاتزان الأيوني للماء النقي", "تعريف التميؤ وتصنيف الأملاح إلى حمضية وقاعدية ومتعادلة", "كتابة معادلات تميؤ NH₄Cl وNaHCO₃", "استخدام مقياس pH وقياس pH لعينات من الماء"] };
  O.sec1u1l3 = { en: ["Define density and relative density and calculate ρ = m/V", "Use a hydrometer", "Explain the anomalous behaviour of water at 4°C", "Relate ocean density to salinity, temperature and currents"],
    ar: ["تعريف الكثافة والكثافة النسبية وحساب ρ = m/V", "استخدام الهيدروميتر", "تفسير السلوك الشاذ للماء عند ٤°م", "ربط كثافة ماء المحيط بالملوحة ودرجة الحرارة والتيارات"] };
  O.sec1u1l4 = { en: ["Distinguish heat, temperature and internal energy", "Convert between °C and K", "Calculate heat with Q = mcΔt", "Explain the sea breeze, latent heat and effects on marine life"],
    ar: ["التمييز بين الحرارة ودرجة الحرارة والطاقة الداخلية", "التحويل بين السلزيوس والكلفن", "حساب كمية الحرارة بالعلاقة Q = mcΔt", "تفسير نسيم البحر والحرارة الكامنة وأثرهما على الكائنات البحرية"] };
  O.sec1u1l5 = { en: ["Define a solution and colligative properties", "Explain the lowering of vapour pressure", "Explain boiling point elevation and freezing point depression", "Explain osmosis and osmotic pressure"],
    ar: ["تعريف المحلول والخواص التجميعية", "تفسير انخفاض الضغط البخاري", "تفسير ارتفاع درجة الغليان وانخفاض درجة التجمد", "تفسير الأسموزية والضغط الأسموزي"] };
  O.sec1u1l6 = { en: ["State how much of the body is water and where it is found", "Compare prokaryotes and eukaryotes, plant and animal cells", "Distinguish catabolic and anabolic processes", "Explain how enzymes work and what affects them"],
    ar: ["تحديد نسبة الماء في الجسم وأماكن وجوده", "المقارنة بين بدائيات النواة وحقيقياتها والخلية النباتية والحيوانية", "التمييز بين عمليات الهدم والبناء", "تفسير عمل الإنزيمات والعوامل المؤثرة فيها"] };
  O.sec1u1l7 = { en: ["Define adaptation and its three types", "Give structural and behavioural adaptations of aquatic animals", "Explain physiological adaptations of deep-sea fish", "Explain osmoregulation in freshwater and marine organisms"],
    ar: ["تعريف التكيف وأنواعه الثلاثة", "ذكر تكيفات تركيبية وسلوكية للحيوانات المائية", "تفسير التكيفات الفسيولوجية لأسماك الأعماق", "تفسير التنظيم الأسموزي في كائنات المياه العذبة والمالحة"] };
  O.sec1u1l8 = { en: ["Identify the sources of O₂ and CO₂ in water", "Relate gas solubility to temperature and salinity", "Explain acidification and its effect on calcification", "Explain the effects of too little CO₂"],
    ar: ["تحديد مصادر O₂ وCO₂ في الماء", "ربط ذوبانية الغازات بدرجة الحرارة والملوحة", "تفسير التحمض وأثره على التكلس", "تفسير آثار نقص CO₂"] };
  O.sec1u1l9 = { en: ["Describe how light is absorbed with depth and the light zones", "Explain the role of solar radiation in marine life", "Calculate pressure at depth: P = Pa + Pw and F = P × A", "Explain adaptations of organisms to high pressure"],
    ar: ["وصف امتصاص الضوء مع العمق والنطاقات الضوئية", "تفسير دور الإشعاع الشمسي في الحياة البحرية", "حساب الضغط عند عمق: P = Pa + Pw وF = P × A", "تفسير تكيفات الكائنات مع الضغط المرتفع"] };
  O.sec1u1l10 = { en: ["Define ecological balance and its three parts", "Predict the effect of removing predators or adding nutrients", "Identify human impacts on aquatic life", "Plan actions for sustainable development of the Nile"],
    ar: ["تعريف الاتزان البيئي وجوانبه الثلاثة", "التنبؤ بأثر إزالة المفترسات أو زيادة العناصر الغذائية", "تحديد آثار الإنسان على الحياة المائية", "وضع خطة للتنمية المستدامة لنهر النيل"] };
  O.sec1u2l1 = { en: ["Name the main gases of the atmosphere and their percentages", "Describe the five layers and their features", "Calculate temperature in the troposphere (6.5°C per km)", "Explain escape velocity and why Earth keeps its atmosphere"],
    ar: ["ذكر الغازات الرئيسية للغلاف الجوي ونسبها", "وصف الطبقات الخمس وخصائصها", "حساب درجة الحرارة في التروبوسفير (6.5°م لكل كم)", "تفسير سرعة الإفلات ولماذا تحتفظ الأرض بغلافها الجوي"] };
  O.sec1u2l2 = { en: ["Classify UV rays by wavelength", "Write the two steps of ozone formation", "Explain ozone depletion and its health effects", "Compare stratospheric and ground-level ozone"],
    ar: ["تصنيف الأشعة فوق البنفسجية حسب الطول الموجي", "كتابة خطوتي تكوين الأوزون", "تفسير تآكل الأوزون وآثاره الصحية", "المقارنة بين أوزون الستراتوسفير والأوزون قرب السطح"] };
  O.sec1u2l3 = { en: ["Convert between Celsius, Fahrenheit and Kelvin", "Explain conduction, convection and radiation", "Calculate and convert atmospheric pressure", "Relate wind, plant tissues and humidity to living organisms"],
    ar: ["التحويل بين السلزيوس والفهرنهايت والكلفن", "تفسير التوصيل والحمل والإشعاع", "حساب الضغط الجوي وتحويل وحداته", "ربط الرياح والأنسجة النباتية والرطوبة بالكائنات الحية"] };
  O.sec1u2l4 = { en: ["Explain global warming and the greenhouse effect", "Explain why carbon monoxide is toxic", "Write the equations of acid rain and limestone corrosion", "Describe how science monitors and protects the atmosphere"],
    ar: ["تفسير الاحتباس الحراري وتأثير الصوبة الزجاجية", "تفسير سمية أول أكسيد الكربون", "كتابة معادلات الأمطار الحمضية وتآكل الحجر الجيري", "وصف دور العلم في رصد الغلاف الجوي وحمايته"] };

  /* ----- extra quiz items: one order/match + one true/false per lesson ----- */
  X.sec1u1l1 = [
    { k: "order", q: ["Order Earth's water from the LARGEST share to the smallest.", "رتب مياه الأرض من الأكبر نسبة إلى الأصغر."],
      items: [["Salty water (about 97%)", "الماء المالح (نحو ٩٧٪)"], ["Frozen ice and glaciers (about 2%)", "الجليد المتجمد (نحو ٢٪)"], ["Usable fresh water (about 1%)", "الماء العذب المتاح (نحو ١٪)"]],
      off: ["97% salty, about 2% frozen, about 1% fresh in rivers, lakes and groundwater.", "٩٧٪ مالح، ونحو ٢٪ متجمد، ونحو ١٪ عذب في الأنهار والبحيرات والمياه الجوفية."],
      sto: ["A bucket of sea, a cup of ice, a spoon to drink.", "دلو من البحر، وكوب من الجليد، وملعقة للشرب."] },
    { k: "tf", a: false, q: ["True or false: in a water molecule the oxygen atom carries a partial positive charge.", "صواب أم خطأ: ذرة الأكسجين في جزيء الماء تحمل شحنة جزئية موجبة."],
      off: ["False. Oxygen is more electronegative, so it carries δ− and the hydrogens carry δ+.", "خطأ؛ الأكسجين أعلى سالبية كهربية فيحمل δ− والهيدروجين يحمل δ+."],
      sto: ["Oxygen is the electron-greedy end.", "الأكسجين هو الطرف الطماع في الإلكترونات."] }
  ];
  X.sec1u1l2 = [
    { k: "match", q: ["Match each salt to the solution it gives.", "صِل كل ملح بنوع محلوله."],
      pairs: [[["NH₄Cl", "NH₄Cl"], ["Acidic", "حمضي"]], [["NaHCO₃", "NaHCO₃"], ["Basic", "قاعدي"]], [["NH₄HCO₃", "NH₄HCO₃"], ["Neutral after hydrolysis", "متعادل بعد التميؤ"]], [["NaCl", "NaCl"], ["No hydrolysis", "لا يتميأ"]]],
      off: ["NH₄Cl: extra H⁺. NaHCO₃: extra OH⁻. NH₄HCO₃: weak acid + weak base. NaCl: ions only dissociate.", "NH₄Cl يزيد H⁺، وNaHCO₃ يزيد OH⁻، وNH₄HCO₃ يعطي حمضًا ضعيفًا وقاعدة ضعيفة، وNaCl أيوناته تتفكك فقط."],
      sto: ["Omar's four test strips: orange, blue, green, green.", "شرائط عمر الأربعة: برتقالي، أزرق، أخضر، أخضر."] },
    { k: "tf", a: true, q: ["True or false: cloud water is more acidic than river water.", "صواب أم خطأ: ماء السحب أكثر حمضية من ماء النهر."],
      off: ["True. Cloud water pH is 4.5 to 5, river water 6.8 to 7.8; lower pH means more acidic.", "صواب؛ pH ماء السحب 4.5–5 وماء النهر 6.8–7.8، والقيمة الأقل تعني حمضية أكبر."],
      sto: ["Rain starts slightly sour.", "المطر يبدأ حامضًا قليلًا."] }
  ];
  X.sec1u1l3 = [
    { k: "order", q: ["Order these water samples from the HIGHEST density to the lowest.", "رتب عينات الماء من الأعلى كثافة إلى الأقل."],
      items: [["Salt water at 4°C", "ماء مالح عند ٤°م"], ["Fresh water at 4°C", "ماء عذب عند ٤°م"], ["Fresh water at 20°C", "ماء عذب عند ٢٠°م"], ["Ice at 0°C", "جليد عند صفر°م"]],
      off: ["Salt raises density; above 4°C water expands; ice is the least dense, so it floats.", "الملح يزيد الكثافة، والماء فوق ٤°م يتمدد، والجليد الأقل كثافة فيطفو."],
      sto: ["The heaviest cup sinks, the ice rides on top.", "الكوب الأثقل يهبط، والجليد يركب فوق الجميع."] },
    { k: "tf", a: true, q: ["True or false: the larger readings of a hydrometer are at the bottom of its scale.", "صواب أم خطأ: القراءات الأكبر للهيدروميتر توجد أسفل تدريجه."],
      off: ["True. In a denser liquid the hydrometer floats higher, so the liquid surface meets a lower mark.", "صواب؛ في السائل الأكثف يطفو الهيدروميتر أعلى، فيقابل سطح السائل علامة أسفل التدريج."],
      sto: ["Denser sea, higher float, lower mark.", "بحر أكثف، طفو أعلى، علامة أسفل."] }
  ];
  X.sec1u1l4 = [
    { k: "order", q: ["Order by specific heat from the LOWEST to the highest.", "رتب حسب الحرارة النوعية من الأقل إلى الأكبر."],
      items: [["Copper (390)", "النحاس (٣٩٠)"], ["Aluminium (900)", "الألومنيوم (٩٠٠)"], ["Water (4200)", "الماء (٤٢٠٠)"]],
      off: ["Copper 390 < aluminium 900 < water 4200 J/kg·K.", "النحاس ٣٩٠ < الألومنيوم ٩٠٠ < الماء ٤٢٠٠ J/kg·K."],
      sto: ["Copper heats first, the sea heats last.", "النحاس يسخن أولًا، والبحر يسخن أخيرًا."] },
    { k: "tf", a: true, q: ["True or false: a temperature rise of 1°C equals a rise of 1 K.", "صواب أم خطأ: الارتفاع ١°م يساوي الارتفاع ١ كلفن."],
      off: ["True. The two scales have the same step size; only the zero differs (T = t + 273).", "صواب؛ للتدريجين الخطوة نفسها، ويختلف الصفر فقط (T = t + 273)."],
      sto: ["Same staircase, different ground floor.", "السلم نفسه، والدور الأرضي مختلف."] }
  ];
  X.sec1u1l5 = [
    { k: "match", q: ["Match each colligative property to its daily-life example.", "صِل كل خاصية تجميعية بمثالها من الحياة."],
      pairs: [[["Freezing point depression", "انخفاض درجة التجمد"], ["Salt on icy roads", "الملح على الطرق المتجمدة"]], [["Boiling point elevation", "ارتفاع درجة الغليان"], ["Salty pasta water boils hotter", "ماء المكرونة المالح يغلي أسخن"]],
        [["Osmosis", "الأسموزية"], ["Dried apricots swell in water", "انتفاخ المشمش المجفف في الماء"]], [["Lower vapour pressure", "انخفاض الضغط البخاري"], ["Salty water evaporates more slowly", "الماء المالح يتبخر أبطأ"]]],
      off: ["All four depend on the number of solute particles.", "الأربعة تعتمد على عدد جسيمات المذاب."],
      sto: ["Hana's kitchen is a colligative lab.", "مطبخ هنا معمل للخواص التجميعية."] },
    { k: "tf", a: false, q: ["True or false: in osmosis water moves from the concentrated solution to the dilute one.", "صواب أم خطأ: في الأسموزية ينتقل الماء من المحلول المركز إلى المخفف."],
      off: ["False. Water moves from the dilute solution (lower osmotic pressure) to the concentrated one.", "خطأ؛ ينتقل الماء من المحلول المخفف (الأقل ضغطًا أسموزيًا) إلى المركز."],
      sto: ["Water flows toward the salt.", "الماء يذهب نحو الملح."] }
  ];
  X.sec1u1l6 = [
    { k: "match", q: ["Match each organelle to its job.", "صِل كل عضية بوظيفتها."],
      pairs: [[["Mitochondria", "الميتوكوندريا"], ["Energy production", "إنتاج الطاقة"]], [["Chloroplasts", "البلاستيدات الخضراء"], ["Photosynthesis", "البناء الضوئي"]], [["Endoplasmic reticulum", "الشبكة الإندوبلازمية"], ["Transport inside the cell", "النقل داخل الخلية"]], [["Nucleus", "النواة"], ["Controls the cell, holds genetic material", "تتحكم في الخلية وبها المادة الوراثية"]]],
      off: ["Each organelle has a specialised role in eukaryotic cells.", "لكل عضية دور متخصص في الخلايا حقيقية النواة."],
      sto: ["The cell city's power station, solar farm, roads and town hall.", "محطة كهرباء مدينة الخلية، ومزرعتها الشمسية، وطرقها، ومجلسها."] },
    { k: "tf", a: false, q: ["True or false: an enzyme is used up at the end of the reaction it speeds up.", "صواب أم خطأ: يُستهلك الإنزيم في نهاية التفاعل الذي يسرعه."],
      off: ["False. The enzyme remains unchanged, ready to catalyse another reaction of the same type.", "خطأ؛ يبقى الإنزيم دون تغير ليحفز تفاعلًا آخر من النوع نفسه."],
      sto: ["The key opens lock after lock.", "المفتاح يفتح قفلًا بعد قفل."] }
  ];
  X.sec1u1l7 = [
    { k: "match", q: ["Match each organism to how it handles water and salt.", "صِل كل كائن بطريقة تعامله مع الماء والملح."],
      pairs: [[["Amoeba", "الأميبا"], ["Contractile vacuole expels water", "الفجوة المنقبضة تطرد الماء"]], [["Freshwater fish", "السمكة العذبة"], ["Dilute urine from kidneys", "بول مخفف من الكلى"]], [["Marine bony fish", "السمكة البحرية العظمية"], ["Drinks sea water, excretes salt", "تشرب ماء البحر وتخرج الملح"]], [["Shark", "القرش"], ["Keeps urea in its blood", "يحتفظ باليوريا في دمه"]]],
      off: ["Fresh water enters freshwater organisms; marine organisms lose water to the saltier sea.", "الماء العذب يدخل كائنات المياه العذبة، والكائنات البحرية تفقد الماء إلى البحر الأكثر ملوحة."],
      sto: ["Karim's aquarium notebook, page four.", "دفتر كريم في الأكواريوم، الصفحة الرابعة."] },
    { k: "tf", a: true, q: ["True or false: a dolphin's blowhole on top of its head is a structural adaptation.", "صواب أم خطأ: فتحة التنفس أعلى رأس الدلفين تكيف تركيبي."],
      off: ["True. It is a change in body structure that lets the dolphin breathe atmospheric air at the surface.", "صواب؛ هي تغير في تركيب الجسم يسمح للدلفين بتنفس الهواء الجوي عند السطح."],
      sto: ["A snorkel built into the head.", "أنبوب تنفس مدمج في الرأس."] }
  ];
  X.sec1u1l8 = [
    { k: "order", q: ["Order the chain of events when atmospheric CO₂ increases.", "رتب سلسلة الأحداث عند زيادة CO₂ في الجو."],
      items: [["More CO₂ dissolves in sea water", "يذوب مزيد من CO₂ في ماء البحر"], ["More carbonic acid forms", "يتكون مزيد من حمض الكربونيك"], ["The pH of the water falls", "ينخفض pH الماء"], ["CaCO₃ shells become harder to build", "يصعب بناء أصداف كربونات الكالسيوم"]],
      off: ["CO₂ + H₂O → H₂CO₃ lowers pH and turns CaCO₃ into soluble calcium bicarbonate.", "CO₂ + H₂O → H₂CO₃ يخفض pH ويحول CaCO₃ إلى بيكربونات كالسيوم ذائبة."],
      sto: ["From the factory chimney to the coral's skeleton.", "من مدخنة المصنع إلى هيكل المرجان."] },
    { k: "tf", a: false, q: ["True or false: gases dissolve better in warm water than in cold water.", "صواب أم خطأ: تذوب الغازات في الماء الدافئ أفضل من البارد."],
      off: ["False. Solubility of O₂ and CO₂ decreases as temperature rises.", "خطأ؛ تقل ذوبانية O₂ وCO₂ بارتفاع درجة الحرارة."],
      sto: ["Nour's goldfish gasp on hot days.", "أسماك نور تلهث في الأيام الحارة."] }
  ];
  X.sec1u1l9 = [
    { k: "order", q: ["Order the light zones from the surface downward.", "رتب النطاقات الضوئية من السطح إلى أسفل."],
      items: [["Sunlit zone", "النطاق المضيء"], ["Twilight zone", "النطاق شبه المظلم"], ["Dark zone", "النطاق المظلم"]],
      off: ["Light intensity decreases gradually with depth.", "تقل شدة الضوء تدريجيًا بزيادة العمق."],
      sto: ["Adham's dive: bright, dim, dark.", "غطسة أدهم: ساطع ثم خافت ثم مظلم."] },
    { k: "tf", a: true, q: ["True or false: at a depth of 30 m the total pressure is about 4 atm.", "صواب أم خطأ: عند عمق ٣٠ م يكون الضغط الكلي نحو ٤ ض.ج."],
      off: ["True. P = Pa + Pw = 1 + 30/10 = 4 atm.", "صواب؛ P = Pa + Pw = ١ + ٣٠ ÷ ١٠ = ٤ ض.ج."],
      sto: ["Adham's ears felt all four.", "أذنا أدهم شعرتا بالأربعة."] }
  ];
  X.sec1u1l10 = [
    { k: "order", q: ["Order the energy flow in an aquatic food chain.", "رتب تدفق الطاقة في سلسلة غذائية مائية."],
      items: [["Sunlight", "ضوء الشمس"], ["Algae and phytoplankton", "الطحالب والعوالق النباتية"], ["Zooplankton and small fish", "العوالق الحيوانية والأسماك الصغيرة"], ["Predatory fish", "الأسماك المفترسة"]],
      off: ["Producers capture light energy and pass it to consumers level by level.", "المنتجات تحبس طاقة الضوء وتنقلها إلى المستهلكات مستوى بعد مستوى."],
      sto: ["From the Sun to grandpa's big catch.", "من الشمس إلى صيد الجد الكبير."] },
    { k: "tf", a: false, q: ["True or false: removing predatory fish always makes an aquatic ecosystem healthier.", "صواب أم خطأ: إزالة الأسماك المفترسة تجعل النظام المائي دائمًا أكثر صحة."],
      off: ["False. Small fish then increase excessively and overconsume food, disturbing the balance.", "خطأ؛ تزداد الأسماك الصغيرة بإفراط وتستنزف الغذاء فيختل الاتزان."],
      sto: ["Lake Manzala learned this the hard way.", "تعلمت بحيرة المنزلة هذا بالطريقة الصعبة."] }
  ];
  X.sec1u2l1 = [
    { k: "order", q: ["Order the layers of the atmosphere from Earth's surface upward.", "رتب طبقات الغلاف الجوي من سطح الأرض إلى أعلى."],
      items: [["Troposphere", "التروبوسفير"], ["Stratosphere", "الستراتوسفير"], ["Mesosphere", "الميزوسفير"], ["Thermosphere", "الثرموسفير"], ["Exosphere", "الإكسوسفير"]],
      off: ["0 to 11 km, 10 to 50 km, 50 to 80 km, 80 to 700 km, 700 to 1000 km.", "صفر–١١ كم، ١٠–٥٠ كم، ٥٠–٨٠ كم، ٨٠–٧٠٠ كم، ٧٠٠–١٠٠٠ كم."],
      sto: ["Laila's balloon ride, floor by floor.", "رحلة بالون ليلى دورًا بعد دور."] },
    { k: "tf", a: false, q: ["True or false: the thermosphere is the coldest layer of the atmosphere.", "صواب أم خطأ: الثرموسفير أبرد طبقات الغلاف الجوي."],
      off: ["False. The mesosphere is coldest (about −93°C); the thermosphere exceeds 2000°C.", "خطأ؛ الميزوسفير هو الأبرد (نحو −٩٣°م)، والثرموسفير تتجاوز حرارته ٢٠٠٠°م."],
      sto: ["Thermo means heat.", "ثرمو تعني حرارة."] }
  ];
  X.sec1u2l2 = [
    { k: "order", q: ["Order the UV types from the SHORTEST wavelength (highest energy) to the longest.", "رتب أنواع الأشعة فوق البنفسجية من الأقصر طولًا موجيًا (الأعلى طاقة) إلى الأطول."],
      items: [["UVC (100 to 280 nm)", "UVC (١٠٠–٢٨٠ نانومتر)"], ["UVB (280 to 315 nm)", "UVB (٢٨٠–٣١٥ نانومتر)"], ["UVA (315 to 400 nm)", "UVA (٣١٥–٤٠٠ نانومتر)"]],
      off: ["Shorter wavelength means higher photon energy.", "الطول الموجي الأقصر يعني طاقة فوتون أعلى."],
      sto: ["C, B, A: from fiercest to gentlest.", "C ثم B ثم A: من الأشرس إلى الألطف."] },
    { k: "tf", a: false, q: ["True or false: ozone near the ground is harmless to plants.", "صواب أم خطأ: الأوزون قرب سطح الأرض غير ضار بالنباتات."],
      off: ["False. Ground-level ozone burns leaves, reduces photosynthesis and damages crops.", "خطأ؛ الأوزون الأرضي يحرق الأوراق ويقلل البناء الضوئي ويتلف المحاصيل."],
      sto: ["Good up high, bad nearby.", "مفيد في الأعالي، ضار بالقرب منا."] }
  ];
  X.sec1u2l3 = [
    { k: "match", q: ["Match each temperature to its equal value.", "صِل كل درجة حرارة بما يساويها."],
      pairs: [[["0°C", "صفر°م"], ["273 K", "٢٧٣ كلفن"]], [["100°C", "١٠٠°م"], ["212°F", "٢١٢°ف"]], [["283 K", "٢٨٣ كلفن"], ["50°F", "٥٠°ف"]], [["20°C", "٢٠°م"], ["68°F", "٦٨°ف"]]],
      off: ["T = t + 273; t(°F) = 1.8t + 32. 20°C → 1.8 × 20 + 32 = 68°F.", "T = t + 273، وt(°F) = 1.8t + 32، و٢٠°م ← 1.8 × ٢٠ + ٣٢ = ٦٨°ف."],
      sto: ["Mostafa's conversion cheat sheet.", "ورقة تحويلات مصطفى."] },
    { k: "tf", a: true, q: ["True or false: a person is most comfortable at a relative humidity of 40% to 60%.", "صواب أم خطأ: يشعر الإنسان بأكبر راحة عند رطوبة نسبية من ٤٠٪ إلى ٦٠٪."],
      off: ["True. In this range sweating and temperature regulation work efficiently.", "صواب؛ في هذا المدى يعمل التعرق وتنظيم الحرارة بكفاءة."],
      sto: ["Not sticky Alexandria in August, not cracked-lip Sinai.", "لا لزوجة الإسكندرية في أغسطس، ولا تشقق شفاه سيناء."] }
  ];
  X.sec1u2l4 = [
    { k: "order", q: ["Order the steps forming sulfuric acid rain.", "رتب خطوات تكوين المطر الحمضي الكبريتي."],
      items: [["Burning sulfur-containing fuel releases SO₂", "حرق وقود به كبريت يطلق SO₂"], ["2SO₂ + O₂ → 2SO₃ (sunlight catalyst)", "2SO₂ + O₂ → 2SO₃ (ضوء الشمس عامل حفاز)"], ["SO₃ + H₂O → H₂SO₄ in clouds", "SO₃ + H₂O → H₂SO₄ في السحب"], ["Acid rain corrodes limestone", "المطر الحمضي يُتلف الحجر الجيري"]],
      off: ["From the chimney to the monument.", "من المدخنة إلى الأثر."],
      sto: ["Helwan's smoke to the mosque's stones.", "من دخان حلوان إلى أحجار المسجد."] },
    { k: "tf", a: true, q: ["True or false: afforestation helps reduce global warming.", "صواب أم خطأ: التشجير يساعد على الحد من الاحتباس الحراري."],
      off: ["True. More plants carry out more photosynthesis, absorbing CO₂.", "صواب؛ النباتات الأكثر تقوم ببناء ضوئي أكثر فتمتص CO₂."],
      sto: ["Rana's schoolyard trees drink carbon dioxide.", "أشجار فناء رنا تشرب ثاني أكسيد الكربون."] }
  ];

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size, anchor) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="' + (anchor || "middle") + '" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function ar(x1, y1, x2, y2, id, c, w) { return '<path d="M' + x1 + " " + y1 + " L" + x2 + " " + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2.5) + '" marker-end="url(#' + id + ')" fill="none"/>'; }
  function circ(x, y, r, f, s) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (s ? ' stroke="' + s + '" stroke-width="2"' : "") + "/>"; }
  function rect(x, y, w, h, f, s, rx) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx || 6) + '" fill="' + f + '"' + (s ? ' stroke="' + s + '" stroke-width="2"' : "") + "/>"; }
  function water(x, y, a, sc) {
    sc = sc || 1; var r = a * Math.PI / 180, h1 = [x + Math.cos(r - 0.91) * 20 * sc, y + Math.sin(r - 0.91) * 20 * sc], h2 = [x + Math.cos(r + 0.91) * 20 * sc, y + Math.sin(r + 0.91) * 20 * sc];
    return circ(h1[0].toFixed(1), h1[1].toFixed(1), 8 * sc, "#e2e8f0", "#94a3b8") + circ(h2[0].toFixed(1), h2[1].toFixed(1), 8 * sc, "#e2e8f0", "#94a3b8") + circ(x, y, 13 * sc, "#ef4444");
  }

  D.sec1u1l1 = {
    title: ["The polar water molecule and hydrogen bonds", "جزيء الماء القطبي والروابط الهيدروجينية"],
    svg: function () {
      var s = "";
      s += '<path d="M120 120 L84 150 M120 120 L156 150" stroke="var(--muted)" stroke-width="5"/>';
      s += circ(84, 150, 16, "#e2e8f0", "#94a3b8") + circ(156, 150, 16, "#e2e8f0", "#94a3b8") + circ(120, 120, 26, "#ef4444");
      s += tx(120, 125, "O", 'style="fill:#fff"', 16) + tx(84, 155, "H", ink, 13) + tx(156, 155, "H", ink, 13);
      s += tx(120, 84, "δ−", 'style="fill:#ef4444"', 16) + tx(70, 188, "δ+", 'style="fill:#3b82f6"', 15) + tx(170, 188, "δ+", 'style="fill:#3b82f6"', 15);
      s += '<path d="M104 160 Q120 172 136 160" stroke="var(--muted)" fill="none" stroke-width="1.5"/>' + tx(120, 182, "104.5°", mut, 11);
      s += water(300, 80, 90, 0.75) + water(330, 175, -60, 0.75) + water(250, 160, 20, 0.75);
      s += '<path d="M300 112 L318 150" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4 4"/><path d="M262 146 L288 100" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4 4"/>';
      s += tx(300, 225, t("hydrogen bonds (dashed)", "روابط هيدروجينية (متقطعة)"), mut, 11) + tx(120, 225, t("one water molecule", "جزيء ماء واحد"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [120, 120, ["Oxygen atom", "ذرة الأكسجين"], ["Higher electronegativity: it pulls the bond electrons and carries a partial negative charge δ−. It is 88.89% of the molecule's mass.", "سالبيتها الكهربية أعلى فتجذب إلكترونات الرابطة وتحمل شحنة جزئية سالبة δ−، وتمثل 88.89٪ من كتلة الجزيء."]],
      [84, 150, ["Hydrogen atom", "ذرة الهيدروجين"], ["Each H carries a partial positive charge δ+. Both together are 11.11% of the mass.", "تحمل كل ذرة هيدروجين شحنة جزئية موجبة δ+، ومعًا تمثلان 11.11٪ من الكتلة."]],
      [120, 170, ["Bond angle", "زاوية الرابطة"], ["Two single covalent bonds about 104.5° apart: the molecule is bent, so the charges do not cancel.", "رابطتان تساهميتان أحاديتان بينهما نحو 104.5°؛ الجزيء منحنٍ فلا تلغي الشحنات بعضها."]],
      [300, 130, ["Hydrogen bond", "الرابطة الهيدروجينية"], ["Attraction between δ− oxygen and δ+ hydrogen of a neighbour; up to four per molecule. It raises the boiling point to 100°C.", "تجاذب بين أكسجين δ− وهيدروجين δ+ لجزيء مجاور، حتى أربع روابط لكل جزيء، وترفع درجة الغليان إلى ١٠٠°م."]],
      [250, 160, ["Universal solvent", "المذيب العام"], ["The charged ends surround ions: δ− oxygen around Na⁺, δ+ hydrogen around Cl⁻.", "الأطراف المشحونة تحيط بالأيونات: الأكسجين السالب حول Na⁺ والهيدروجين الموجب حول Cl⁻."]]
    ]
  };

  D.sec1u1l2 = {
    title: ["The pH scale and water samples", "مقياس الأس الهيدروجيني وعينات الماء"],
    svg: function () {
      var s = "", cols = ["#dc2626", "#ea580c", "#f59e0b", "#eab308", "#facc15", "#a3e635", "#4ade80", "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6", "#4f46e5", "#7c3aed", "#6d28d9", "#581c87"];
      for (var i = 0; i < 15; i++) s += rect(20 + i * 24, 90, 24, 34, cols[i], null, 0) + tx(32 + i * 24, 142, String(i), mut, 10);
      s += tx(60, 76, t("acidic", "حمضي"), 'style="fill:#dc2626"', 13) + tx(200, 76, t("neutral", "متعادل"), 'style="fill:#16a34a"', 13) + tx(340, 76, t("alkaline", "قاعدي"), 'style="fill:#6d28d9"', 13);
      var pts = [[3.5, t("mine", "منجم")], [4.75, t("cloud", "سحب")], [7, t("distilled", "مقطر")], [8, t("sea", "بحر")]];
      pts.forEach(function (p, k) { var x = 32 + p[0] * 24; s += '<path d="M' + x + " 126 L" + x + " " + (165 + k % 2 * 22) + '" stroke="var(--muted)" stroke-width="1.5"/>' + tx(x, 178 + k % 2 * 22, p[1], ink, 11); });
      s += tx(200, 30, "[H⁺] ↑  ←       →  [OH⁻] ↑", mut, 12);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [60, 107, ["Acidic: pH < 7", "حمضي: pH < 7"], ["[H⁺] is greater than [OH⁻]. NH₄Cl solution, cloud water (4.5 to 5) and mine water (3 to 4) are acidic.", "تركيز H⁺ أكبر من OH⁻، ومنها محلول NH₄Cl وماء السحب (4.5–5) وماء المناجم (٣–٤)."]],
      [200, 107, ["Neutral: pH = 7", "متعادل: pH = 7"], ["[H⁺] = [OH⁻], as in pure (distilled) water: H₂O ⇌ H⁺ + OH⁻.", "تركيز H⁺ = تركيز OH⁻ كما في الماء النقي (المقطر): H₂O ⇌ H⁺ + OH⁻."]],
      [330, 107, ["Alkaline: pH > 7", "قاعدي: pH > 7"], ["[OH⁻] is greater, e.g. NaHCO₃ solution after hydrolysis.", "تركيز OH⁻ أكبر، مثل محلول NaHCO₃ بعد التميؤ."]],
      [224, 200, ["Sea water", "ماء البحر"], ["About 7.5 to 8.4: slightly alkaline. River water 6.8 to 7.8, groundwater 6 to 8.5.", "نحو 7.5–8.4؛ قاعدي قليلًا، وماء النهر 6.8–7.8، والمياه الجوفية ٦–8.5."]],
      [200, 30, ["What pH measures", "ماذا يقيس pH"], ["The relation between [H⁺] and [OH⁻]: more H⁺ lowers pH, more OH⁻ raises it.", "العلاقة بين تركيزي H⁺ وOH⁻: زيادة H⁺ تخفض القيمة، وزيادة OH⁻ ترفعها."]]
    ]
  };

  D.sec1u1l3 = {
    title: ["Water density and the frozen lake", "كثافة الماء والبحيرة المتجمدة"],
    svg: function () {
      var s = "";
      s += '<path d="M30 20 L30 200 L190 200" stroke="var(--muted)" stroke-width="2" fill="none"/>';
      var p = "";
      for (var T = 0; T <= 10; T += 0.5) { var rho = 1 - 0.0000068 * Math.pow(T - 4, 2); var y = 200 - (rho - 0.99975) / 0.00027 * 170; p += (T ? " L" : "M") + (30 + T * 15).toFixed(1) + " " + y.toFixed(1); }
      s += '<path d="' + p + '" stroke="#3b82f6" stroke-width="3.5" fill="none"/>';
      s += '<path d="M90 30 L90 200" stroke="var(--line)" stroke-dasharray="4 4"/>' + tx(90, 216, "4°C", ink, 11) + tx(30, 216, "0", mut, 10) + tx(180, 216, "10°C", mut, 10) + tx(70, 14, t("density", "الكثافة"), mut, 11);
      s += rect(220, 40, 160, 160, "#bfdbfe", null, 8) + rect(220, 40, 160, 22, "#e0f2fe", "#93c5fd", 4);
      s += tx(300, 56, t("ice 0°C", "جليد صفر°م"), ink, 11) + tx(300, 90, "1–3°C", mut, 11) + rect(220, 160, 160, 40, "#3b82f6", null, 0) + tx(300, 185, t("4°C (densest)", "٤°م (الأكثف)"), 'style="fill:#fff"', 11);
      s += '<path d="M265 130 q8 -6 16 0 q-8 6 -16 0 z M281 130 l8 -5 l0 10 z" fill="#f97316"/>';
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [90, 32, ["Maximum density at 4°C", "أقصى كثافة عند ٤°م"], ["1 cm³ of pure water has a mass of 1 g at 4°C: 1 g/cm³ = 1000 kg/m³.", "كتلة ١ سم³ من الماء النقي عند ٤°م = ١ جم، أي ١ جم/سم³ = ١٠٠٠ كجم/م³."]],
      [55, 90, ["0°C to 4°C: an exception", "من صفر إلى ٤°م: شذوذ"], ["Warming from 0°C to 4°C makes water contract, so its density increases.", "تسخين الماء من صفر إلى ٤°م يجعله ينكمش فتزداد كثافته."]],
      [160, 120, ["Above 4°C", "فوق ٤°م"], ["Water expands like other liquids and its density decreases.", "يتمدد الماء كالسوائل الأخرى فتقل كثافته."]],
      [300, 51, ["Ice floats", "الجليد يطفو"], ["Ice molecules are spaced farther apart, so ice is less dense and forms an insulating layer.", "جزيئات الجليد متباعدة أكثر فيكون أقل كثافة ويكوّن طبقة عازلة."]],
      [300, 180, ["Life below the ice", "الحياة تحت الجليد"], ["The densest 4°C water sinks to the bottom and stays liquid, so fish survive the winter.", "الماء الأكثف عند ٤°م يهبط إلى القاع ويبقى سائلًا فتعيش الأسماك في الشتاء."]]
    ]
  };

  D.sec1u1l4 = {
    title: ["Sea breeze and specific heat", "نسيم البحر والحرارة النوعية"],
    svg: function () {
      var s = arrowDef("s1a4", "#f97316") + arrowDef("s1b4", "#3b82f6");
      s += circ(60, 40, 22, "#facc15");
      s += rect(0, 170, 200, 70, "#d6a35c", null, 0) + rect(200, 175, 200, 65, "#3b82f6", null, 0);
      s += tx(100, 210, t("land (sand) heats fast", "اليابسة (الرمل) تسخن بسرعة"), 'style="fill:#fff"', 11) + tx(300, 212, t("sea: high specific heat", "البحر: حرارة نوعية كبيرة"), 'style="fill:#fff"', 11);
      s += ar(100, 160, 100, 70, "s1a4", "#f97316", 3) + ar(130, 60, 280, 60, "s1a4", "#f97316", 2) + ar(300, 70, 300, 150, "s1b4", "#3b82f6", 2) + ar(290, 160, 130, 160, "s1b4", "#3b82f6", 3);
      s += tx(70, 115, t("hot air rises", "هواء ساخن يصعد"), ink, 11, "end") + tx(220, 150, t("cool sea breeze", "نسيم بحري بارد"), 'style="fill:#2563eb"', 11);
      s += tx(300, 110, "Q = mcΔt", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [100, 205, ["Land heats quickly", "اليابسة تسخن بسرعة"], ["Sand and rock have a low specific heat, so the same solar energy raises their temperature a lot.", "الحرارة النوعية للرمل والصخور صغيرة، فترفع الطاقة الشمسية نفسها درجة حرارتها كثيرًا."]],
      [300, 205, ["Water heats slowly", "الماء يسخن ببطء"], ["c(water) = 4200 J/kg·K because of hydrogen bonds; the sea is a huge thermal reservoir.", "الحرارة النوعية للماء ٤٢٠٠ J/kg·K بسبب الروابط الهيدروجينية، فالبحر خزان حراري هائل."]],
      [100, 110, ["Rising hot air", "صعود الهواء الساخن"], ["Air over land warms, its density decreases and it rises.", "يسخن الهواء فوق اليابسة فتقل كثافته ويصعد."]],
      [210, 160, ["Sea breeze", "نسيم البحر"], ["Cooler air from over the sea moves toward the land to replace the rising air.", "يتحرك الهواء الأبرد من فوق البحر نحو اليابسة ليحل محل الهواء الصاعد."]],
      [300, 110, ["Heat equation", "معادلة الحرارة"], ["Q = mcΔt: 0.3 kg of copper from 20°C to 70°C needs 0.3 × 390 × 50 = 5850 J.", "Q = mcΔt: ٠٫٣ كجم نحاس من ٢٠ إلى ٧٠°م تحتاج ٠٫٣ × ٣٩٠ × ٥٠ = ٥٨٥٠ جول."]]
    ]
  };

  D.sec1u1l5 = {
    title: ["Osmosis through a semi-permeable membrane", "الأسموزية عبر غشاء شبه منفذ"],
    svg: function () {
      var s = arrowDef("s1a5", "#3b82f6"), i;
      s += '<path d="M60 40 L60 200 L340 200 L340 40" stroke="var(--muted)" stroke-width="3" fill="none"/>';
      s += rect(62, 110, 137, 88, "#bfdbfe", null, 0) + rect(201, 80, 137, 118, "#bfdbfe", null, 0);
      s += '<path d="M200 60 L200 200" stroke="#a855f7" stroke-width="3" stroke-dasharray="6 4"/>';
      var dots = [[90, 150], [150, 175], [230, 120], [260, 160], [300, 110], [320, 175], [250, 185], [290, 140]];
      dots.forEach(function (d, k) { s += circ(d[0], d[1], 7, k < 2 ? "#f97316" : "#f97316"); });
      for (i = 0; i < 5; i++) s += circ(80 + i * 22, 130 + (i % 2) * 30, 3.5, "#2563eb");
      s += ar(170, 150, 232, 150, "s1a5", "#3b82f6", 3);
      s += tx(130, 225, t("dilute", "مخفف"), ink, 12) + tx(270, 225, t("concentrated", "مركز"), ink, 12) + tx(200, 50, t("membrane", "غشاء"), 'style="fill:#a855f7"', 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 70, ["Semi-permeable membrane", "غشاء شبه منفذ"], ["Lets water molecules pass but not the solute particles.", "يسمح بمرور جزيئات الماء ولا يسمح بمرور جسيمات المذاب."]],
      [130, 160, ["Dilute solution", "المحلول المخفف"], ["Fewer solute particles: lower osmotic pressure.", "جسيمات مذاب أقل: ضغط أسموزي أقل."]],
      [280, 140, ["Concentrated solution", "المحلول المركز"], ["More solute particles: higher osmotic pressure, so water moves into it and its level rises.", "جسيمات مذاب أكثر: ضغط أسموزي أعلى، فينتقل الماء إليه ويرتفع مستواه."]],
      [200, 150, ["Direction of osmosis", "اتجاه الأسموزية"], ["Water moves from the dilute to the concentrated solution.", "ينتقل الماء من المحلول المخفف إلى المحلول المركز."]],
      [270, 92, ["Colligative", "خاصية تجميعية"], ["Osmotic pressure depends on the NUMBER of solute particles, like boiling point rise and freezing point fall.", "يعتمد الضغط الأسموزي على عدد جسيمات المذاب مثل ارتفاع الغليان وانخفاض التجمد."]]
    ]
  };

  D.sec1u1l6 = {
    title: ["Enzyme: lock and key", "الإنزيم: القفل والمفتاح"],
    svg: function () {
      var s = arrowDef("s1a6", "var(--muted)");
      s += '<path d="M40 150 L40 90 L60 90 L60 110 L90 110 L90 90 L120 90 L120 150 Z" fill="#14b8a6"/>' + rect(62, 80, 26, 28, "#f97316", null, 3);
      s += tx(80, 170, t("enzyme", "إنزيم"), ink, 11) + tx(75, 70, t("substrate", "مادة متفاعلة"), mut, 11);
      s += ar(130, 115, 165, 115, "s1a6");
      s += '<path d="M175 150 L175 90 L195 90 L195 110 L225 110 L225 90 L255 90 L255 150 Z" fill="#14b8a6"/>' + rect(197, 88, 26, 22, "#f97316", null, 3);
      s += tx(215, 170, t("complex", "معقد"), ink, 11);
      s += ar(265, 115, 295, 115, "s1a6");
      s += '<path d="M305 150 L305 90 L325 90 L325 110 L355 110 L355 90 L385 90 L385 150 Z" fill="#14b8a6"/>' + rect(318, 58, 12, 22, "#fb923c", null, 3) + rect(345, 52, 12, 22, "#fb923c", null, 3);
      s += tx(345, 170, t("products", "نواتج"), ink, 11);
      s += '<path d="M40 225 Q120 225 160 205 Q200 185 240 205 Q280 225 380 225" stroke="#ef4444" stroke-width="2" fill="none"/><path d="M40 225 Q120 225 165 214 Q200 205 235 214 Q280 225 380 225" stroke="#22c55e" stroke-width="2" fill="none"/>';
      s += tx(200, 198, t("activation energy", "طاقة التنشيط"), mut, 10);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [75, 99, ["Active site", "الموقع النشط"], ["The groove of the enzyme that fits one specific substrate, like a key in a lock.", "تجويف في الإنزيم يناسب مادة متفاعلة معينة كالمفتاح في القفل."]],
      [215, 120, ["Enzyme-substrate complex", "معقد الإنزيم والمادة المتفاعلة"], ["Binding helps the reactants turn into products more efficiently.", "الارتباط يساعد المتفاعلات على التحول إلى نواتج بكفاءة أكبر."]],
      [345, 120, ["Enzyme unchanged", "الإنزيم دون تغير"], ["After the reaction the enzyme is free, ready to catalyse another reaction of the same type.", "بعد التفاعل يتحرر الإنزيم جاهزًا لتحفيز تفاعل آخر من النوع نفسه."]],
      [200, 212, ["Lower activation energy", "طاقة تنشيط أقل"], ["Enzymes are catalysts: they lower the minimum energy needed to start the reaction (green curve).", "الإنزيمات عوامل حفز تخفض أقل طاقة لازمة لبدء التفاعل (المنحنى الأخضر)."]],
      [40, 120, ["Optimum conditions", "الظروف المثلى"], ["Each enzyme works best at one temperature and pH; activity falls on either side.", "لكل إنزيم درجة حرارة وpH مثاليان، ويقل نشاطه عند الابتعاد عنهما."]]
    ]
  };

  D.sec1u1l7 = {
    title: ["Osmoregulation in fresh and salt water", "التنظيم الأسموزي في الماء العذب والمالح"],
    svg: function () {
      var s = arrowDef("s1a7", "#3b82f6") + arrowDef("s1b7", "#f97316");
      s += rect(5, 30, 190, 180, "#dbeafe", null, 8) + rect(205, 30, 190, 180, "#93c5fd", null, 8);
      function fish(x, y) { return '<path d="M' + (x - 45) + " " + y + " Q" + x + " " + (y - 35) + " " + (x + 40) + " " + y + " Q" + x + " " + (y + 35) + " " + (x - 45) + " " + y + ' Z" fill="#f59e0b"/><path d="M' + (x + 38) + " " + y + " L" + (x + 62) + " " + (y - 18) + " L" + (x + 62) + " " + (y + 18) + ' Z" fill="#f59e0b"/>' + circ(x - 25, y - 5, 4, "#1e293b"); }
      s += fish(95, 120) + fish(295, 120);
      s += ar(95, 60, 95, 92, "s1a7") + ar(95, 150, 95, 190, "s1a7") + ar(295, 92, 295, 60, "s1a7") + ar(240, 110, 270, 116, "s1a7") + ar(300, 150, 330, 190, "s1b7");
      s += tx(100, 48, t("fresh water: water IN", "ماء عذب: الماء يدخل"), ink, 11) + tx(100, 204, t("lots of dilute urine", "بول مخفف كثير"), ink, 11);
      s += tx(300, 48, t("sea: water OUT", "البحر: الماء يخرج"), ink, 11) + tx(225, 100, t("drinks", "يشرب"), ink, 10) + tx(330, 204, t("salt out (gills, kidneys)", "إخراج الملح"), ink, 10);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [95, 75, ["Fresh water enters", "دخول الماء العذب"], ["Body fluids are more concentrated than fresh water, so water enters by osmosis.", "سوائل الجسم أكثر تركيزًا من الماء العذب فيدخل الماء بالأسموزية."]],
      [95, 175, ["Dilute urine", "البول المخفف"], ["Freshwater fish remove excess water through the kidneys; unicellular organisms use a contractile vacuole.", "تتخلص الأسماك العذبة من الماء الزائد بالكلى، والكائنات وحيدة الخلية بالفجوة المنقبضة."]],
      [295, 75, ["Water lost to the sea", "فقد الماء إلى البحر"], ["Sea water has higher osmotic pressure, so marine fish lose water by osmosis.", "ماء البحر ضغطه الأسموزي أعلى فتفقد الأسماك البحرية الماء بالأسموزية."]],
      [235, 112, ["Drinking sea water", "شرب ماء البحر"], ["Marine bony fish swallow large amounts of sea water to compensate.", "تبتلع الأسماك البحرية العظمية كميات كبيرة من ماء البحر للتعويض."]],
      [330, 175, ["Excreting salt", "إخراج الملح"], ["Excess salt leaves through the kidneys and special gill cells; sharks instead keep urea in their blood.", "يخرج الملح الزائد بالكلى وخلايا خاصة في الخياشيم، أما القرش فيحتفظ باليوريا في دمه."]]
    ]
  };

  D.sec1u1l8 = {
    title: ["Gas exchange and ocean acidification", "تبادل الغازات وتحمض المحيطات"],
    svg: function () {
      var s = arrowDef("s1a8", "var(--muted)");
      s += rect(0, 90, 400, 150, "#60a5fa", null, 0) + '<path d="M0 90 Q25 80 50 90 T100 90 T150 90 T200 90 T250 90 T300 90 T350 90 T400 90" stroke="#1d4ed8" stroke-width="3" fill="none"/>';
      s += tx(70, 30, "O₂", ink, 15) + tx(160, 30, "CO₂", ink, 15) + ar(70, 40, 70, 110, "s1a8") + ar(160, 40, 160, 110, "s1a8");
      s += '<path d="M300 200 q10 -40 0 -80 M310 200 q-10 -30 6 -70" stroke="#16a34a" stroke-width="5" fill="none"/>' + ar(320, 120, 340, 60, "s1a8") + tx(355, 52, "O₂", ink, 12);
      s += tx(160, 150, "CO₂ + H₂O → H₂CO₃", 'style="fill:#fff"', 13) + tx(160, 172, t("pH falls", "ينخفض pH"), 'style="fill:#fff"', 12);
      s += '<path d="M40 225 a22 14 0 0 1 44 0 z" fill="#fde68a" stroke="#f59e0b"/>' + tx(62, 210, "CaCO₃", 'style="fill:#fff"', 10);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 70, ["Oxygen from the air", "الأكسجين من الهواء"], ["The atmosphere is the main source; waves and currents increase gas exchange. O₂ is about 50 times less soluble than CO₂.", "الغلاف الجوي هو المصدر الرئيسي، والأمواج والتيارات تزيد تبادل الغازات، وذوبانية O₂ أقل من CO₂ بنحو ٥٠ مرة."]],
      [160, 70, ["Carbon dioxide", "ثاني أكسيد الكربون"], ["From the air, organisms' respiration and human activities. Both gases dissolve less in warm or salty water.", "من الهواء وتنفس الكائنات والأنشطة البشرية، وكلا الغازين يذوب أقل في الماء الدافئ أو المالح."]],
      [310, 150, ["Producers", "المنتجات"], ["Algae and aquatic plants take in CO₂ by diffusion and release O₂ by photosynthesis.", "الطحالب والنباتات المائية تأخذ CO₂ بالانتشار وتطلق O₂ بالبناء الضوئي."]],
      [160, 160, ["Acidification", "التحمض"], ["More dissolved CO₂ forms more carbonic acid and lowers the pH.", "زيادة CO₂ الذائب تكوّن حمض كربونيك أكثر وتخفض pH."]],
      [62, 222, ["Weaker shells", "أصداف أضعف"], ["CO₂ converts slightly soluble CaCO₃ into soluble calcium bicarbonate, reducing calcification in corals and oysters.", "يحول CO₂ كربونات الكالسيوم شحيحة الذوبان إلى بيكربونات كالسيوم ذائبة فيقل التكلس في المرجان والمحار."]]
    ]
  };

  D.sec1u1l9 = {
    title: ["Light zones and pressure with depth", "النطاقات الضوئية والضغط مع العمق"],
    svg: function () {
      var s = "";
      s += rect(0, 20, 400, 60, "#7dd3fc", null, 0) + rect(0, 80, 400, 70, "#1d4ed8", null, 0) + rect(0, 150, 400, 90, "#0f172a", null, 0);
      [["#ef4444", 30], ["#f97316", 45], ["#eab308", 65], ["#22c55e", 95], ["#3b82f6", 140]].forEach(function (c, k) { s += '<path d="M' + (20 + k * 14) + " 20 L" + (20 + k * 14) + " " + c[1] + '" stroke="' + c[0] + '" stroke-width="7"/>'; });
      s += tx(250, 52, t("sunlit zone (to ~200 m)", "النطاق المضيء (حتى ~٢٠٠ م)"), ink, 12) + tx(250, 118, t("twilight zone", "النطاق شبه المظلم"), 'style="fill:#fff"', 12) + tx(250, 195, t("dark zone", "النطاق المظلم"), 'style="fill:#fff"', 12);
      s += tx(380, 40, "1 atm", 'style="fill:#0f172a"', 11, "end") + tx(380, 100, "11 atm @100 m", 'style="fill:#fff"', 11, "end") + tx(380, 225, "> 200 atm", 'style="fill:#fff"', 11, "end");
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [20, 28, ["Red goes first", "الأحمر يختفي أولًا"], ["Long-wavelength red and orange are absorbed near the surface; infrared within 10 cm.", "يُمتص الأحمر والبرتقالي طويلا الموجة قرب السطح، والأشعة تحت الحمراء في أول ١٠ سم."]],
      [76, 130, ["Blue goes deepest", "الأزرق يصل أعمق"], ["Only about 1% of visible light, mostly blue, reaches 100 m even in clear water.", "نحو ١٪ فقط من الضوء المرئي، معظمه أزرق، يصل إلى ١٠٠ م حتى في المياه الصافية."]],
      [250, 52, ["Sunlit zone", "النطاق المضيء"], ["Enough light for photosynthesis: algae, phytoplankton, coral reefs.", "ضوء كافٍ للبناء الضوئي: طحالب وعوالق نباتية وشعاب مرجانية."]],
      [370, 100, ["Pressure grows", "الضغط يزداد"], ["P = Pa + Pw: about 1 atm more every 10 m, so 11 atm at 100 m. F = P × A.", "P = Pa + Pw: نحو ١ ض.ج إضافي كل ١٠ م، فيكون ١١ ض.ج عند ١٠٠ م، وF = P × A."]],
      [250, 195, ["Deep adaptations", "تكيفات الأعماق"], ["Compact bodies, no gas bladder or a liquid-filled one, oil-rich livers, flexible cartilage, fluid membranes.", "أجسام متماسكة، وغياب المثانة الغازية أو مثانة سائلة، وكبد غني بالزيت، وغضاريف مرنة، وأغشية مرنة."]]
    ]
  };

  D.sec1u1l10 = {
    title: ["Balance in an aquatic food web", "الاتزان في شبكة غذائية مائية"],
    svg: function () {
      var s = arrowDef("s1a10", "var(--muted)");
      var nodes = [[60, 200, "🌿", t("algae", "طحالب")], [160, 200, "🦐", t("zooplankton", "عوالق حيوانية")], [260, 140, "🐟", t("small fish", "أسماك صغيرة")], [350, 70, "🦈", t("predators", "مفترسات")], [60, 90, "☀️", t("sunlight", "ضوء الشمس")]];
      s += ar(60, 112, 60, 176, "s1a10") + ar(86, 200, 132, 200, "s1a10") + ar(182, 188, 236, 152, "s1a10") + ar(282, 126, 330, 88, "s1a10");
      nodes.forEach(function (n) { s += circ(n[0], n[1], 22, "var(--bg-2)", "var(--line)") + tx(n[0], n[1] + 7, n[2], ink, 20) + tx(n[0], n[1] + 38, n[3], mut, 10); });
      s += tx(210, 40, t("nutrients N, P → algae", "النيتروجين والفوسفور ← الطحالب"), mut, 11) + tx(260, 95, t("overfishing?", "صيد جائر؟"), 'style="fill:#ef4444"', 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [60, 200, ["Producers", "المنتجات"], ["Algae and plants capture light energy; excess nitrogen and phosphorus cause an abnormal algal bloom.", "الطحالب والنباتات تحبس طاقة الضوء، وزيادة النيتروجين والفوسفور تسبب ازدهارًا غير طبيعي للطحالب."]],
      [160, 200, ["Zooplankton", "العوالق الحيوانية"], ["Eat algae. If small fish are eaten in large numbers, zooplankton increase and algae growth changes.", "تأكل الطحالب، وإذا التُهمت الأسماك الصغيرة بأعداد كبيرة تزداد العوالق ويتغير نمو الطحالب."]],
      [260, 140, ["Small fish", "الأسماك الصغيرة"], ["Without predators they increase excessively and overconsume food.", "بدون مفترسات تزداد بإفراط وتستنزف الغذاء."]],
      [350, 70, ["Predatory fish", "الأسماك المفترسة"], ["Control prey populations; on reefs they control sea urchins that could destroy coral.", "تضبط أعداد الفرائس، وفي الشعاب تضبط قنافذ البحر التي قد تدمر المرجان."]],
      [210, 40, ["Human role", "دور الإنسان"], ["Reduce pollution and fertilizer runoff, stop overfishing and habitat destruction, follow sustainable development.", "تقليل التلوث وتسرب الأسمدة، ووقف الصيد الجائر وتدمير الموائل، واتباع التنمية المستدامة."]]
    ]
  };

  D.sec1u2l1 = {
    title: ["Layers of the atmosphere and temperature", "طبقات الغلاف الجوي ودرجة الحرارة"],
    svg: function () {
      var s = "", L = [[200, 240, "#bae6fd", t("Troposphere 0–11 km", "التروبوسفير ٠–١١ كم")], [150, 200, "#c7d2fe", t("Stratosphere 10–50 km", "الستراتوسفير ١٠–٥٠ كم")], [105, 150, "#ddd6fe", t("Mesosphere 50–80 km", "الميزوسفير ٥٠–٨٠ كم")], [50, 105, "#fbcfe8", t("Thermosphere 80–700 km", "الثرموسفير ٨٠–٧٠٠ كم")], [10, 50, "#fde68a", t("Exosphere 700–1000 km", "الإكسوسفير ٧٠٠–١٠٠٠ كم")]];
      L.forEach(function (l) { s += rect(10, l[0], 250, l[1] - l[0], l[2], null, 0) + tx(20, (l[0] + l[1]) / 2 + 4, l[3], 'style="fill:#0f172a"', 11, "start"); });
      s += rect(10, 165, 250, 16, "#a5b4fc", null, 0) + tx(200, 177, t("ozone", "أوزون"), 'style="fill:#0f172a"', 10);
      s += '<path d="M300 240 L300 10" stroke="var(--muted)" stroke-width="1.5"/><path d="M340 238 L292 200 L292 185 L318 150 L280 105 L395 50" stroke="#ef4444" stroke-width="3" fill="none"/>';
      s += tx(345, 232, "15°C", ink, 10) + tx(282, 198, "−56.5", ink, 10, "end") + tx(276, 112, "−93", ink, 10, "end") + tx(385, 40, "2000°C", ink, 10, "end");
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [130, 220, ["Troposphere", "التروبوسفير"], ["Densest layer, all weather; temperature falls about 6.5°C per km to −56.5°C at the tropopause (11 km).", "أكثف الطبقات وبها الطقس كله، وتقل الحرارة نحو 6.5°م لكل كم حتى −56.5°م عند التروبوبوز (١١ كم)."]],
      [200, 173, ["Ozone layer", "طبقة الأوزون"], ["About 20 to 40 km inside the stratosphere; absorbing UV makes temperature rise with height.", "نحو ٢٠–٤٠ كم داخل الستراتوسفير، وامتصاص الأشعة فوق البنفسجية يرفع الحرارة مع الارتفاع."]],
      [130, 127, ["Mesosphere", "الميزوسفير"], ["Coldest layer, about −93°C; most meteors burn up here.", "أبرد الطبقات نحو −٩٣°م، وتحترق فيها معظم الشهب."]],
      [130, 78, ["Thermosphere and ionosphere", "الثرموسفير والأيونوسفير"], ["Over 2000°C; charged ions (80 to 550 km) reflect radio waves and make the aurora.", "تتجاوز ٢٠٠٠°م، والأيونات المشحونة (٨٠–٥٥٠ كم) تعكس موجات الراديو وتسبب الشفق القطبي."]],
      [130, 30, ["Exosphere", "الإكسوسفير"], ["Near vacuum: satellites for communication, internet, GPS and weather data.", "شبه فراغ: أقمار صناعية للاتصالات والإنترنت وGPS وبيانات الطقس."]]
    ]
  };

  D.sec1u2l2 = {
    title: ["Ozone formation and UV absorption", "تكوين الأوزون وامتصاص الأشعة فوق البنفسجية"],
    svg: function () {
      var s = arrowDef("s1a12", "var(--muted)") + arrowDef("s1b12", "#a855f7");
      function O(x, y) { return circ(x, y, 12, "#ef4444") + tx(x, y + 4, "O", 'style="fill:#fff"', 11); }
      s += '<path d="M20 30 L60 70" stroke="#a855f7" stroke-width="3" stroke-dasharray="5 3" marker-end="url(#s1b12)"/>' + tx(28, 22, "UV < 240 nm", 'style="fill:#a855f7"', 10, "start");
      s += O(70, 85) + O(94, 85) + ar(115, 85, 145, 85, "s1a12") + O(165, 70) + O(185, 105);
      s += tx(130, 130, t("photodissociation", "تفكك ضوئي"), mut, 11);
      s += O(240, 85) + tx(262, 89, "+", ink, 14) + O(282, 85) + O(306, 85) + ar(322, 85, 340, 85, "s1a12") + O(350, 70) + O(372, 85) + O(361, 105);
      s += tx(300, 130, "O + O₂ → O₃", ink, 12);
      s += '<path d="M300 150 L340 185" stroke="#7c3aed" stroke-width="3" stroke-dasharray="5 3" marker-end="url(#s1b12)"/>' + tx(240, 165, "UVB 240–310 nm", 'style="fill:#7c3aed"', 10);
      s += rect(20, 200, 360, 30, "var(--bg-2)", "var(--line)", 6) + tx(200, 220, t("CFCs (Cl, Br) destroy O₃ → ozone hole", "مركبات CFCs (كلور وبروم) تدمر O₃ ← ثقب الأوزون"), ink, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [40, 50, ["Short UV photon", "فوتون قصير الموجة"], ["UV shorter than 240 nm has enough energy to break the O=O covalent bond.", "الأشعة الأقصر من ٢٤٠ نانومتر لديها طاقة كافية لكسر الرابطة التساهمية O=O."]],
      [130, 90, ["Step 1: photodissociation", "الخطوة ١: التفكك الضوئي"], ["O₂ + UV → O + O: two free oxygen atoms.", "O₂ + UV → O + O: ذرتا أكسجين حرتان."]],
      [300, 90, ["Step 2: ozone forms", "الخطوة ٢: يتكون الأوزون"], ["A free O atom combines with an O₂ molecule: O + O₂ → O₃.", "تتحد ذرة أكسجين حرة مع جزيء O₂: O + O₂ → O₃."]],
      [320, 170, ["Ozone shield", "درع الأوزون"], ["O₃ absorbs UV from 240 to 310 nm, protecting DNA from damage and skin cancer.", "يمتص O₃ الأشعة من ٢٤٠ إلى ٣١٠ نانومتر فيحمي DNA من التلف وسرطان الجلد."]],
      [200, 215, ["Depletion", "التآكل"], ["Chlorine and bromine compounds (CFCs, halon) destroy ozone; the Montreal Protocol banned many of them.", "مركبات الكلور والبروم (CFCs والهالون) تدمر الأوزون، ومنع بروتوكول مونتريال كثيرًا منها."]]
    ]
  };

  D.sec1u2l3 = {
    title: ["Three thermometers and a mercury barometer", "ثلاثة ترمومترات وبارومتر زئبقي"],
    svg: function () {
      var s = "";
      [[50, "°C", "100", "0"], [120, "°F", "212", "32"], [190, "K", "373", "273"]].forEach(function (c) {
        s += rect(c[0] - 8, 30, 16, 150, "var(--bg-2)", "var(--muted)", 8) + circ(c[0], 188, 14, "#ef4444") + rect(c[0] - 4, 90, 8, 95, "#ef4444", null, 3);
        s += tx(c[0], 22, c[1], ink, 13) + tx(c[0] + 14, 55, c[2], mut, 10, "start") + tx(c[0] + 14, 165, c[3], mut, 10, "start");
      });
      s += '<path d="M30 55 L215 55 M30 165 L215 165" stroke="var(--line)" stroke-dasharray="4 4"/>';
      s += rect(296, 30, 18, 160, "var(--bg-2)", "var(--muted)", 4) + rect(298, 62, 14, 128, "#94a3b8", null, 2) + rect(260, 180, 90, 30, "#94a3b8", "var(--muted)", 4);
      s += tx(330, 70, "76 cm", ink, 11, "start") + tx(305, 22, t("vacuum", "فراغ"), mut, 10) + tx(305, 228, t("barometer", "بارومتر"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [50, 110, ["Celsius", "السلزيوس"], ["Used in Egypt: water freezes at 0°C and boils at 100°C.", "يستخدم في مصر: يتجمد الماء عند صفر°م ويغلي عند ١٠٠°م."]],
      [120, 110, ["Fahrenheit", "الفهرنهايت"], ["Used in the USA: t(°F) = 1.8 t(°C) + 32, so 32°F and 212°F.", "يستخدم في أمريكا: t(°F) = 1.8 t(°C) + 32، أي ٣٢°ف و٢١٢°ف."]],
      [190, 110, ["Kelvin", "الكلفن"], ["The absolute scale used in science: T = t + 273, so 273 K and 373 K.", "التدريج المطلق المستخدم علميًا: T = t + 273، أي ٢٧٣ و٣٧٣ كلفن."]],
      [305, 120, ["Mercury column", "عمود الزئبق"], ["At sea level the air supports 76 cm of mercury: 1 atm = 1.013 × 10⁵ N/m². The column is shorter on mountains.", "عند سطح البحر يحمل الهواء ٧٦ سم زئبق: ١ ض.ج = 1.013 × 10⁵ نيوتن/م²، ويقصر العمود فوق الجبال."]],
      [305, 30, ["Vacuum above", "الفراغ أعلاه"], ["No air presses from above, so the column height measures the outside air pressure only.", "لا يوجد هواء يضغط من أعلى، فيقيس ارتفاع العمود الضغط الجوي الخارجي فقط."]]
    ]
  };

  D.sec1u2l4 = {
    title: ["Greenhouse effect and acid rain", "تأثير الصوبة الزجاجية والأمطار الحمضية"],
    svg: function () {
      var s = arrowDef("s1a14", "#eab308") + arrowDef("s1b14", "#ef4444") + arrowDef("s1c14", "var(--muted)");
      s += circ(30, 30, 20, "#facc15");
      s += '<path d="M0 90 Q200 60 400 90" stroke="#94a3b8" stroke-width="10" fill="none" opacity="0.5"/>' + tx(330, 66, t("greenhouse gases", "غازات الصوبة"), mut, 10);
      s += ar(50, 45, 110, 190, "s1a14", "#eab308", 3) + ar(130, 190, 160, 100, "s1b14", "#ef4444", 2.5) + ar(165, 95, 190, 180, "s1b14", "#ef4444", 2.5);
      s += tx(70, 130, t("short-wave in", "موجات قصيرة تدخل"), 'style="fill:#ca8a04"', 10, "end") + tx(185, 135, t("IR trapped", "أشعة تحت حمراء محبوسة"), 'style="fill:#ef4444"', 10, "start");
      s += rect(0, 200, 400, 40, "#86efac", null, 0);
      s += rect(270, 140, 26, 60, "#64748b", null, 2) + '<path d="M283 135 q-10 -20 5 -35 q15 -15 0 -30" stroke="#94a3b8" stroke-width="8" fill="none"/>' + tx(283, 228, "SO₂, NO₂", 'style="fill:#0f172a"', 10);
      s += '<path d="M340 120 L336 135 M352 115 L348 130 M364 120 L360 135" stroke="#3b82f6" stroke-width="3"/>' + tx(355, 155, "H₂SO₄, HNO₃", ink, 10);
      s += rect(330, 170, 50, 30, "#e7e5e4", "#a8a29e", 2) + tx(355, 190, "CaCO₃", 'style="fill:#0f172a"', 9);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [80, 120, ["Short-wave sunlight", "ضوء شمس قصير الموجة"], ["The atmosphere lets short-wavelength solar radiation pass to Earth's surface.", "يسمح الغلاف الجوي بمرور الإشعاع الشمسي قصير الموجة إلى سطح الأرض."]],
      [165, 130, ["Trapped heat", "حرارة محبوسة"], ["The surface re-emits long-wavelength infrared; CO₂, CH₄, N₂O, CFCs and water vapour stop it escaping.", "يعيد السطح إشعاع أشعة تحت حمراء طويلة الموجة تمنع CO₂ وCH₄ وN₂O وCFCs وبخار الماء هروبها."]],
      [283, 160, ["Chimney gases", "غازات المداخن"], ["SO₂ from coal and oil, NOx from hot combustion. Gas scrubbers remove them before release.", "SO₂ من الفحم والبترول، وأكاسيد النيتروجين من الاحتراق الساخن، وأجهزة غسل الغازات تزيلها قبل انطلاقها."]],
      [355, 128, ["Acid rain", "الأمطار الحمضية"], ["2SO₂ + O₂ → 2SO₃; SO₃ + H₂O → H₂SO₄; 4NO₂ + O₂ + 2H₂O → 4HNO₃.", "2SO₂ + O₂ → 2SO₃، وSO₃ + H₂O → H₂SO₄، و4NO₂ + O₂ + 2H₂O → 4HNO₃."]],
      [355, 185, ["Corroded monuments", "تآكل الآثار"], ["H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O damages limestone buildings.", "H₂SO₄ + CaCO₃ → CaSO₄ + CO₂ + H₂O يتلف المباني الجيرية."]]
    ]
  };
})();

/* ---------- Sec 1 live simulations (part 1): dissolving salt, pH lab, hydrometer, calorimeter,
   osmosis U-tube, enzyme activity, fish osmoregulation. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  /* equations and numbers stay left-to-right on the canvas, even in Arabic mode */
  function txt(ctx, s, x, y, o) { var d = ctx.direction; if (/[=×→]/.test(s) || /^[A-Za-z0-9(+\u2212\u2013-]/.test(s)) ctx.direction = "ltr"; K.txt(ctx, s, x, y, o); ctx.direction = d; }
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u(); return inp;
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function r1(v) { return Math.round(v * 10) / 10; }
  function r2(v) { return Math.round(v * 100) / 100; }
  function bar(ctx, x, y, w, h, f, col, C) { ctx.fillStyle = C.line; K.rr(ctx, x, y, w, h, h / 2); ctx.fill(); ctx.fillStyle = col; K.rr(ctx, x, y, Math.max(h, w * clamp(f, 0, 1)), h, h / 2); ctx.fill(); }
  E.s1kit = { hint: hint, box: box, sl: sl, clamp: clamp, r1: r1, r2: r2, bar: bar };

  /* =========================================================
     1. sec1_dissolve - drag ions out of a NaCl crystal into water
     ========================================================= */
  L.sec1_dissolve = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag sodium (Na⁺, purple) and chloride (Cl⁻, green) ions from the salt crystal into the water. Watch which end of each water molecule turns toward each ion.",
      "اسحب أيونات الصوديوم (Na⁺ البنفسجية) والكلوريد (Cl⁻ الخضراء) من بلورة الملح إلى الماء، ولاحظ أي طرف من جزيء الماء يتجه نحو كل أيون."));
    var S = K.make(host, 0.6, 400);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm tg" id="s1dq">δ± ' + t("Show partial charges", "أظهر الشحنات الجزئية") + '</button><button type="button" class="btn sm ghost" id="s1dr">↺ ' + t("New crystal", "بلورة جديدة") + "</button></div>");
    var tick = L._goals(host, [t("Drag a Na⁺ ion into the water.", "اسحب أيون Na⁺ إلى الماء."), t("Drag a Cl⁻ ion into the water.", "اسحب أيون Cl⁻ إلى الماء."),
      t("Dissolve 6 ions so that each is surrounded by water.", "أذب ٦ أيونات بحيث يحاط كل منها بالماء."), t("Show the partial charges δ− and δ+.", "أظهر الشحنات الجزئية δ− وδ+.")], done);
    var ions = [], mol = [], grab = null, showQ = false;
    function crystal() {
      ions = [];
      for (var r = 0; r < 4; r++) for (var k = 0; k < 3; k++) ions.push({ na: (r + k) % 2 === 0, x: 0.07 + k * 0.065, y: 0.3 + r * 0.12, free: false, vx: 0, vy: 0 });
    }
    crystal();
    for (var i = 0; i < 36; i++) mol.push({ x: K.rnd(0.36, 0.96), y: K.rnd(0.12, 0.92), a: K.rnd(0, 6.28), vx: K.rnd(-0.03, 0.03), vy: K.rnd(-0.03, 0.03) });
    c.querySelector("#s1dq").onclick = function () { showQ = !showQ; this.classList.toggle("on", showQ); if (showQ) tick(3); };
    c.querySelector("#s1dr").onclick = function () { crystal(); };
    function inWater(p) { return p.x > 0.33 && p.x < 0.98 && p.y > 0.08 && p.y < 0.96; }
    S.drag({
      down: function (p) {
        var best = null, bd = 30;
        ions.forEach(function (o) { var d = Math.hypot(o.x * S.W - p.x, o.y * S.H - p.y); if (d < bd) { bd = d; best = o; } });
        if (!best) return false; grab = best; return true;
      },
      move: function (p) { if (grab) { grab.x = clamp(p.x / S.W, 0.02, 0.98); grab.y = clamp(p.y / S.H, 0.06, 0.96); grab.free = false; } },
      up: function () {
        if (!grab) return;
        if (inWater(grab)) { grab.free = true; grab.vx = K.rnd(-0.04, 0.04); grab.vy = K.rnd(-0.04, 0.04); tick(grab.na ? 0 : 1); }
        grab = null;
      },
      hover: function (p) { return ions.some(function (o) { return Math.hypot(o.x * S.W - p.x, o.y * S.H - p.y) < 22; }); }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, sc = clamp(Math.min(W, H) / 380, 0.7, 1.3);
      ctx.clearRect(0, 0, W, H);
      // beaker
      ctx.fillStyle = "rgba(59,130,246,.13)"; K.rr(ctx, 0.33 * W, 0.08 * H, 0.65 * W, 0.88 * H, 10); ctx.fill();
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
      txt(ctx, t("salt crystal", "بلورة الملح"), 0.135 * W, 0.2 * H, { c: C.muted, s: 12 });
      ctx.strokeStyle = C.line; ctx.setLineDash([4, 4]); ctx.strokeRect(0.035 * W, 0.24 * H, 0.2 * W, 0.52 * H); ctx.setLineDash([]);
      var free = ions.filter(function (o) { return o.free; });
      // ions move
      free.forEach(function (o) {
        o.vx += K.rnd(-0.05, 0.05) * dt; o.vy += K.rnd(-0.05, 0.05) * dt; o.vx *= 0.99; o.vy *= 0.99;
        o.x += o.vx * dt; o.y += o.vy * dt;
        if (o.x < 0.37) { o.x = 0.37; o.vx = Math.abs(o.vx); } if (o.x > 0.95) { o.x = 0.95; o.vx = -Math.abs(o.vx); }
        if (o.y < 0.13) { o.y = 0.13; o.vy = Math.abs(o.vy); } if (o.y > 0.92) { o.y = 0.92; o.vy = -Math.abs(o.vy); }
      });
      for (var a = 0; a < free.length; a++) for (var b = a + 1; b < free.length; b++) {
        var dx = (free[a].x - free[b].x) * W, dy = (free[a].y - free[b].y) * H, d = Math.hypot(dx, dy) || 1;
        if (d < 70 * sc) { var f = (70 * sc - d) / d * 0.002; free[a].x += dx * f / W * 3; free[a].y += dy * f / H * 3; free[b].x -= dx * f / W * 3; free[b].y -= dy * f / H * 3; }
      }
      // water molecules
      var hyd = {};
      mol.forEach(function (m) {
        var near = null, nd = 220 * sc;
        free.forEach(function (o, k) { var d = Math.hypot((o.x - m.x) * W, (o.y - m.y) * H); if (d < nd) { nd = d; near = k; } });
        if (near !== null) {
          var o = free[near], ang = Math.atan2((m.y - o.y) * H, (m.x - o.x) * W);
          var want = o.na ? ang : ang + Math.PI, diff = Math.atan2(Math.sin(want - m.a), Math.cos(want - m.a));
          m.a += diff * Math.min(1, dt * 5);
          var target = (o.na ? 30 : 36) * sc, pull = (nd - target) * 0.6;
          m.x -= Math.cos(ang) * pull * dt / W; m.y -= Math.sin(ang) * pull * dt / H;
          m.x += -Math.sin(ang) * 10 * dt / W; m.y += Math.cos(ang) * 10 * dt / H;
          if (nd < 55 * sc) hyd[near] = (hyd[near] || 0) + 1;
        } else {
          m.a += K.rnd(-1, 1) * dt; m.vx += K.rnd(-0.02, 0.02) * dt; m.vy += K.rnd(-0.02, 0.02) * dt;
          m.vx = clamp(m.vx, -0.04, 0.04); m.vy = clamp(m.vy, -0.04, 0.04); m.x += m.vx * dt; m.y += m.vy * dt;
        }
        if (m.x < 0.36) { m.x = 0.36; m.vx = Math.abs(m.vx); } if (m.x > 0.96) { m.x = 0.96; m.vx = -Math.abs(m.vx); }
        if (m.y < 0.12) { m.y = 0.12; m.vy = Math.abs(m.vy); } if (m.y > 0.93) { m.y = 0.93; m.vy = -Math.abs(m.vy); }
      });
      for (a = 0; a < mol.length; a++) for (b = a + 1; b < mol.length; b++) {
        var ex = (mol[a].x - mol[b].x) * W, ey = (mol[a].y - mol[b].y) * H, e = Math.hypot(ex, ey) || 1;
        if (e < 20 * sc) { var g = (20 * sc - e) / e * 0.5; mol[a].x += ex * g / W; mol[a].y += ey * g / H; mol[b].x -= ex * g / W; mol[b].y -= ey * g / H; }
      }
      mol.forEach(function (m) {
        var x = m.x * W, y = m.y * H, h1 = m.a - 0.91, h2 = m.a + 0.91, rr = 11 * sc;
        K.dot(ctx, x + Math.cos(h1) * rr, y + Math.sin(h1) * rr, 4.5 * sc, "#f1f5f9", "#94a3b8");
        K.dot(ctx, x + Math.cos(h2) * rr, y + Math.sin(h2) * rr, 4.5 * sc, "#f1f5f9", "#94a3b8");
        K.dot(ctx, x, y, 7 * sc, "#ef4444");
        if (showQ) { txt(ctx, "δ−", x - Math.cos(m.a) * 13 * sc, y - Math.sin(m.a) * 13 * sc, { c: "#ef4444", s: 9 * sc }); txt(ctx, "δ+", x + Math.cos(m.a) * 21 * sc, y + Math.sin(m.a) * 21 * sc, { c: "#3b82f6", s: 9 * sc }); }
      });
      ions.forEach(function (o) {
        var r = (o.na ? 9 : 12.5) * sc;
        K.dot(ctx, o.x * W, o.y * H, r, o.na ? "#a855f7" : "#22c55e", "rgba(0,0,0,.3)");
        txt(ctx, o.na ? "Na⁺" : "Cl⁻", o.x * W, o.y * H, { c: "#fff", s: 8 * sc });
      });
      var nNa = 0, nCl = 0, nh = 0;
      free.forEach(function (o, k) { if (o.na) nNa++; else nCl++; if ((hyd[k] || 0) >= 2) nh++; });
      if (nh >= 6) tick(2);
      var fs = clamp(W / 46, 11, 14);
      txt(ctx, "NaCl(s) → Na⁺(aq) + Cl⁻(aq)", 0.65 * W, 0.045 * H, { c: C.ink, s: fs });
      txt(ctx, t("Na⁺ in water: ", "Na⁺ في الماء: ") + n(nNa) + "   " + t("Cl⁻ in water: ", "Cl⁻ في الماء: ") + n(nCl) + "   " + t("surrounded: ", "محاطة بالماء: ") + n(nh), 0.135 * W, 0.86 * H, { c: C.ink, s: fs - 2 });
      txt(ctx, t("O (δ−) faces Na⁺ · H (δ+) faces Cl⁻", "الأكسجين (δ−) نحو Na⁺ · الهيدروجين (δ+) نحو Cl⁻"), 0.135 * W, 0.92 * H, { c: C.muted, s: fs - 3 });
    });
  };

  /* =========================================================
     2. sec1_ph - salt hydrolysis and natural water samples on a pH meter
     ========================================================= */
  L.sec1_ph = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick what is in the beaker. For a salt, add scoops with the slider and read the pH meter. Red dots are H⁺ ions, blue dots are OH⁻ ions.",
      "اختر محتوى الكأس، وللملح أضف ملاعق بالمنزلق واقرأ جهاز pH. النقاط الحمراء أيونات H⁺ والزرقاء أيونات OH⁻.")) + '<div class="seg" id="s1pm"></div>';
    var S = K.make(host, 0.55, 380);
    var c = box(host, L._slider(t("Salt scoops", "ملاعق الملح"), 0, 8, 1, 0, ""));
    var eqd = E.el("div", "meter"); host.appendChild(eqd);
    var tick = L._goals(host, [t("Make an acidic salt solution (pH below 6).", "حضّر محلول ملح حمضيًا (pH أقل من ٦)."), t("Make a basic salt solution (pH above 8).", "حضّر محلول ملح قاعديًا (pH أكبر من ٨)."),
      t("Find the salt that hydrolyses yet stays neutral (3 or more scoops).", "اكتشف الملح الذي يتميأ ويبقى متعادلًا (٣ ملاعق أو أكثر)."), t("Test a sample of sea water.", "اختبر عينة من ماء البحر.")], done);
    var EQ = {
      NaCl: "NaCl(s) → Na⁺(aq) + Cl⁻(aq) · " + t("no hydrolysis", "لا يحدث تميؤ"),
      NH4Cl: "NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻ · " + t("acidic salt", "ملح حمضي"),
      NaHCO3: "NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃ · " + t("basic salt", "ملح قاعدي"),
      NH4HCO3: "NH₄HCO₃ + H₂O → H₂CO₃ + NH₄OH · " + t("neutral salt", "ملح متعادل"),
      sea: t("Sea water: about 7.5 to 8.4", "ماء البحر: نحو 7.5 إلى 8.4"), river: t("River water: 6.8 to 7.8", "ماء النهر: 6.8 إلى 7.8"),
      cloud: t("Cloud water: 4.5 to 5", "ماء السحب: 4.5 إلى 5"), mine: t("Mine water: 3 to 4", "ماء المناجم: ٣ إلى ٤")
    };
    var mode = "NaCl", sc = 0, shown = 7, P = [];
    for (var i = 0; i < 60; i++) P.push({ x: Math.random(), y: Math.random(), vx: K.rnd(-0.1, 0.1), vy: K.rnd(-0.1, 0.1) });
    K.seg(host, "#s1pm", [["NaCl", "NaCl"], ["NH4Cl", "NH₄Cl"], ["NaHCO3", "NaHCO₃"], ["NH4HCO3", "NH₄HCO₃"], ["sea", t("Sea", "بحر")], ["river", t("River", "نهر")], ["cloud", t("Cloud", "سحب")], ["mine", t("Mine", "منجم")]], mode, function (v) { mode = v; upd(); });
    var inp = sl(c, 0, function (v) { return n(v); }, function (v) { sc = v; upd(); });
    function salt() { return mode === "NaCl" || mode === "NH4Cl" || mode === "NaHCO3" || mode === "NH4HCO3"; }
    function pH() {
      var k = 1 - Math.exp(-sc / 2.5);
      return mode === "NH4Cl" ? 7 - 2.1 * k : mode === "NaHCO3" ? 7 + 1.3 * k : mode === "sea" ? 8.1 : mode === "river" ? 7.3 : mode === "cloud" ? 4.7 : mode === "mine" ? 3.5 : 7;
    }
    function upd() {
      if (inp) inp.disabled = !salt();
      eqd.innerHTML = '<span><span class="eq" dir="ltr">' + EQ[mode] + "</span></span>";
      var p = pH();
      if (salt() && sc > 0 && p < 6) tick(0);
      if (salt() && sc > 0 && p > 8) tick(1);
      if (mode === "NH4HCO3" && sc >= 3) tick(2);
      if (mode === "sea") tick(3);
    }
    upd();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, p = pH();
      shown += (p - shown) * Math.min(1, dt * 3);
      ctx.clearRect(0, 0, W, H);
      var bx = W * 0.05, by = H * 0.12, bw = W * 0.42, bh = H * 0.78;
      var tint = shown < 6.5 ? "rgba(239,68,68,.15)" : shown > 7.5 ? "rgba(99,102,241,.16)" : "rgba(34,197,94,.13)";
      ctx.fillStyle = tint; ctx.fillRect(bx, by + bh * 0.15, bw, bh * 0.85);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by); ctx.stroke();
      var nH = Math.min(45, Math.round(6 * Math.pow(10, (7 - shown) * 0.33))), nO = Math.min(45, Math.round(6 * Math.pow(10, (shown - 7) * 0.33)));
      P.forEach(function (q, k) {
        q.x += q.vx * dt; q.y += q.vy * dt; if (q.x < 0.03 || q.x > 0.97) q.vx *= -1; if (q.y < 0.03 || q.y > 0.97) q.vy *= -1;
        q.x = clamp(q.x, 0.03, 0.97); q.y = clamp(q.y, 0.03, 0.97);
        var col = k < nH ? "#ef4444" : (k >= 60 - nO ? "#3b82f6" : null);
        if (col) K.dot(ctx, bx + q.x * bw, by + bh * 0.15 + q.y * bh * 0.85, 4, col);
      });
      txt(ctx, t("H⁺: ", "H⁺: ") + n(nH) + "   OH⁻: " + n(nO), bx + bw / 2, by + bh * 0.07, { c: C.ink, s: 13 });
      // pH meter
      var mx = W * 0.54, mw = W * 0.42, my = H * 0.42, cols = ["#dc2626", "#ea580c", "#f59e0b", "#eab308", "#facc15", "#a3e635", "#4ade80", "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6", "#4f46e5", "#7c3aed", "#6d28d9", "#581c87"];
      for (var j = 0; j < 15; j++) { ctx.fillStyle = cols[j]; ctx.fillRect(mx + j * mw / 15, my, mw / 15 + 0.5, 26); if (j % 2 === 0) txt(ctx, n(j), mx + (j + 0.5) * mw / 15, my + 40, { c: C.muted, s: 10 }); }
      var px = mx + (shown + 0.5) / 15 * mw;
      ctx.fillStyle = C.ink; ctx.beginPath(); ctx.moveTo(px, my - 2); ctx.lineTo(px - 8, my - 16); ctx.lineTo(px + 8, my - 16); ctx.fill();
      txt(ctx, "pH = " + n(r1(shown)), mx + mw / 2, H * 0.2, { c: C.ink, s: clamp(W / 22, 16, 26) });
      var kind = shown < 6.95 ? t("acidic: [H⁺] > [OH⁻]", "حمضي: [H⁺] > [OH⁻]") : shown > 7.05 ? t("basic: [OH⁻] > [H⁺]", "قاعدي: [OH⁻] > [H⁺]") : t("neutral: [H⁺] = [OH⁻]", "متعادل: [H⁺] = [OH⁻]");
      txt(ctx, kind, mx + mw / 2, H * 0.3, { c: shown < 6.95 ? "#dc2626" : shown > 7.05 ? "#4f46e5" : "#16a34a", s: 13 });
      txt(ctx, salt() ? t("scoops of salt: ", "ملاعق الملح: ") + n(sc) : t("natural sample", "عينة طبيعية"), mx + mw / 2, H * 0.72, { c: C.muted, s: 12 });
    });
  };

  /* =========================================================
     3. sec1_density - hydrometer in water: temperature + salinity
     ========================================================= */
  L.sec1_density = function (host, cfg, done) {
    host.innerHTML = hint(t("Change the temperature and the salt. The hydrometer floats higher in denser water; read the mark at the water surface. The graph shows density against temperature.",
      "غيّر درجة الحرارة وكمية الملح. يطفو الهيدروميتر أعلى في الماء الأكثف؛ اقرأ العلامة عند سطح الماء. ويوضح الرسم الكثافة مقابل درجة الحرارة."));
    var S = K.make(host, 0.6, 400);
    var c = box(host, L._slider(t("Temperature", "درجة الحرارة"), -4, 30, 1, 20, "°C") + L._slider(t("Dissolved salt", "الملح الذائب"), 0, 40, 1, 0, "g/kg"));
    var tick = L._goals(host, [t("Find the temperature where fresh water is densest.", "اكتشف درجة الحرارة التي يكون عندها الماء العذب أكثف ما يمكن."), t("Make water as dense as the sea (relative density 1.025 or more).", "اجعل الماء في كثافة البحر (كثافة نسبية 1.025 أو أكثر)."),
      t("Make the hydrometer sink deepest (least dense liquid water).", "اجعل الهيدروميتر يغوص لأقصى عمق (أقل ماء سائل كثافة)."), t("Cool below 0°C and watch the ice float.", "برّد أقل من الصفر وشاهد الجليد يطفو.")], done);
    var T = 20, Sa = 0, shown = 0.998;
    function rw(x) { return 1000 * (1 - (x + 288.9414) / (508929.2 * (x + 68.12963)) * Math.pow(x - 3.9863, 2)); }
    function rho() { return rw(Math.max(0, T)) + 0.77 * Sa; }
    sl(c, 0, function (v) { return n(v) + "°C"; }, function (v) { T = v; chk(); });
    sl(c, 1, function (v) { return n(v) + " g/kg"; }, function (v) { Sa = v; chk(); });
    function chk() {
      if (Sa === 0 && T === 4) tick(0);
      if (rho() >= 1025) tick(1);
      if (Sa === 0 && T >= 29) tick(2);
      if (T < 0) tick(3);
    }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, rd = rho() / 1000;
      shown += (rd - shown) * Math.min(1, dt * 4);
      ctx.clearRect(0, 0, W, H);
      var jx = W * 0.06, jw = W * 0.26, jy = H * 0.1, jh = H * 0.84, surf = jy + jh * 0.3;
      var ice = T < 0, iceH = ice ? Math.min(0.12, -T * 0.03) * jh : 0;
      ctx.fillStyle = Sa > 0 ? "rgba(14,165,233," + (0.18 + Sa / 200) + ")" : "rgba(59,130,246,.18)"; ctx.fillRect(jx, surf, jw, jy + jh - surf);
      if (ice) { ctx.fillStyle = "rgba(226,242,255,.95)"; ctx.fillRect(jx, surf - iceH * 0.1, jw, iceH); ctx.strokeStyle = "#93c5fd"; ctx.strokeRect(jx, surf - iceH * 0.1, jw, iceH); txt(ctx, t("ice (floats)", "جليد (يطفو)"), jx + jw / 2, surf + iceH * 0.4, { c: "#1e3a8a", s: 11 }); }
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(jx, jy); ctx.lineTo(jx, jy + jh); ctx.lineTo(jx + jw, jy + jh); ctx.lineTo(jx + jw, jy); ctx.stroke();
      // hydrometer: mark for reading r is (r-0.99)/0.05 * stemLen below stem top
      var stemLen = jh * 0.42, cx = jx + jw * 0.62, top = surf - clamp((shown - 0.99) / 0.05, 0, 1) * stemLen + (ice ? iceH * 0.9 : 0) * 0;
      var sTop = (ice ? surf + iceH * 0.9 : surf) - clamp((shown - 0.99) / 0.05, 0, 1) * stemLen;
      top = sTop;
      ctx.fillStyle = "rgba(255,255,255,.55)"; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5;
      K.rr(ctx, cx - 5, top, 10, stemLen + 6, 4); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(cx, top + stemLen + 6 + jh * 0.1, 15, jh * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      K.dot(ctx, cx, top + stemLen + 6 + jh * 0.17, 9, "#64748b");
      for (var k = 0; k <= 5; k++) { var yy = top + k / 5 * stemLen; ctx.strokeStyle = C.ink; ctx.beginPath(); ctx.moveTo(cx - 5, yy); ctx.lineTo(cx + 1, yy); ctx.stroke(); txt(ctx, (0.99 + k * 0.01).toFixed(2), cx - 9, yy, { c: C.muted, s: 9, a: "right" }); }
      var surfY = ice ? surf + iceH * 0.9 : surf;
      ctx.strokeStyle = "#ef4444"; ctx.beginPath(); ctx.moveTo(cx - 14, surfY); ctx.lineTo(cx + 18, surfY); ctx.stroke();
      // graph
      var gx = W * 0.44, gw = W * 0.5, gy = H * 0.12, gh = H * 0.5;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      var lo = 995 + 0.77 * Sa, hi = 1000.5 + 0.77 * Sa;
      ctx.strokeStyle = "#3b82f6"; ctx.lineWidth = 3; ctx.beginPath();
      for (var x = 0; x <= 30; x += 0.5) { var X = gx + x / 30 * gw, Y = gy + gh - (rw(x) + 0.77 * Sa - lo) / (hi - lo) * gh; if (x) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke();
      var mxp = gx + clamp(T, 0, 30) / 30 * gw, myp = gy + gh - (rho() - lo) / (hi - lo) * gh;
      K.dot(ctx, mxp, myp, 6, "#ef4444");
      txt(ctx, "0", gx, gy + gh + 12, { c: C.muted, s: 10 }); txt(ctx, "4", gx + 4 / 30 * gw, gy + gh + 12, { c: C.ink, s: 10 }); txt(ctx, "30°C", gx + gw, gy + gh + 12, { c: C.muted, s: 10 });
      txt(ctx, t("density (kg/m³)", "الكثافة (كجم/م³)"), gx + 4, gy - 8, { c: C.muted, s: 11, a: "left" });
      var fs = clamp(W / 40, 12, 15), ly = H * 0.74;
      txt(ctx, "ρ = " + n(r1(rho())) + " kg/m³", gx, ly, { c: C.ink, s: fs + 2, a: "left" });
      txt(ctx, t("relative density = ", "الكثافة النسبية = ") + n((Math.round(rho()) / 1000).toFixed(3)), gx, ly + 24, { c: C.ink, s: fs, a: "left" });
      txt(ctx, ice ? t("ice: about 917 kg/m³, less dense than water", "الجليد: نحو ٩١٧ كجم/م³، أقل كثافة من الماء") : (T < 4 ? t("below 4°C: water expands as it cools", "أقل من ٤°م: الماء يتمدد عند التبريد") : T === 4 ? t("4°C: maximum density", "٤°م: أقصى كثافة") : t("above 4°C: water expands as it warms", "فوق ٤°م: الماء يتمدد عند التسخين")), gx, ly + 48, { c: C.muted, s: fs - 2, a: "left" });
    });
  };

  /* =========================================================
     4. sec1_calor - heat a sample: Q = m c Δt live
     ========================================================= */
  L.sec1_calor = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a material and its mass, then switch the heater on. Watch Q = m c Δt build up. Changing the material or mass starts again at 20°C.",
      "اختر المادة وكتلتها ثم شغّل السخان، وراقب تزايد Q = m c Δt. تغيير المادة أو الكتلة يعيد البداية عند ٢٠°م.")) + '<div class="seg" id="s1cm"></div>';
    var S = K.make(host, 0.52, 360);
    var c = box(host, L._slider(t("Mass", "الكتلة"), 0.1, 2, 0.1, 0.3, "kg") + L._slider(t("Heater power", "قدرة السخان"), 500, 3000, 100, 1500, "W") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="s1ch">🔥 ' + t("Heater on / off", "تشغيل / إيقاف السخان") + '</button><button type="button" class="btn sm ghost" id="s1cr">↺ ' + t("Back to 20°C", "العودة إلى ٢٠°م") + "</button></div>");
    var tick = L._goals(host, [t("Heat 0.3 kg of copper from 20°C to 70°C. How many joules?", "سخّن ٠٫٣ كجم نحاس من ٢٠°م إلى ٧٠°م. كم جولًا؟"), t("Raise 1 kg of water by 10 K.", "ارفع درجة حرارة ١ كجم ماء بمقدار ١٠ كلفن."),
      t("Heat three different materials (2000 J or more each) and compare Δt.", "سخّن ثلاث مواد مختلفة (٢٠٠٠ جول أو أكثر لكل منها) وقارن Δt.")], done);
    var MAT = { water: [4200, "#3b82f6", ["Water", "الماء"]], al: [900, "#cbd5e1", ["Aluminium", "الألومنيوم"]], cu: [390, "#ea580c", ["Copper", "النحاس"]], sea: [3900, "#0ea5e9", ["Sea water", "ماء البحر"]] };
    var mat = "cu", m = 0.3, Pw = 1500, on = false, Q = 0, seen = {}, last = {};
    function reset() { Q = 0; }
    K.seg(host, "#s1cm", Object.keys(MAT).map(function (k) { return [k, E.isAr() ? MAT[k][2][1] : MAT[k][2][0]]; }), mat, function (v) { mat = v; reset(); });
    sl(c, 0, function (v) { return n(r1(v)) + " kg"; }, function (v) { m = v; reset(); });
    sl(c, 1, function (v) { return n(v) + " W"; }, function (v) { Pw = v; });
    var hb = c.querySelector("#s1ch");
    hb.onclick = function () { on = !on; hb.classList.toggle("on", on); };
    c.querySelector("#s1cr").onclick = reset;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, cc = MAT[mat][0];
      var dT = Q / (m * cc), Tn = 20 + dT;
      if (on) {
        if (Tn >= 100) { on = false; hb.classList.remove("on"); E.toast(t("Stopped at 100°C.", "توقف عند ١٠٠°م.")); }
        else Q += Pw * dt;
      }
      dT = Q / (m * cc); Tn = 20 + dT;
      if (Q >= 2000) seen[mat] = 1;
      last[mat] = dT;
      if (mat === "cu" && Math.abs(m - 0.3) < 0.01 && Tn >= 70) tick(0);
      if (mat === "water" && Math.abs(m - 1) < 0.01 && dT >= 10) tick(1);
      if (Object.keys(seen).length >= 3) tick(2);
      ctx.clearRect(0, 0, W, H);
      // hot plate + sample
      var px = W * 0.06, pw = W * 0.34, py = H * 0.78;
      ctx.fillStyle = "#475569"; K.rr(ctx, px, py, pw, H * 0.08, 6); ctx.fill();
      ctx.fillStyle = on ? "#f97316" : "#94a3b8"; K.rr(ctx, px + pw * 0.1, py - 6, pw * 0.8, 8, 4); ctx.fill();
      var sz = clamp(Math.sqrt(m / 2), 0.35, 1) * H * 0.45, sx = px + pw / 2 - sz * 0.6, sy = py - 8 - sz;
      var heat = clamp(dT / 80, 0, 1);
      ctx.fillStyle = MAT[mat][1]; K.rr(ctx, sx, sy, sz * 1.2, sz, 8); ctx.fill();
      ctx.fillStyle = "rgba(239,68,68," + (heat * 0.55) + ")"; K.rr(ctx, sx, sy, sz * 1.2, sz, 8); ctx.fill();
      txt(ctx, (E.isAr() ? MAT[mat][2][1] : MAT[mat][2][0]) + " · " + n(r1(m)) + " kg", px + pw / 2, sy - 12, { c: C.ink, s: 12 });
      if (on) for (var k = 0; k < 3; k++) { var wx = px + pw * (0.25 + k * 0.25), ph = (performance.now() / 300 + k) % 1; ctx.strokeStyle = "rgba(249,115,22," + (1 - ph) + ")"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(wx, py + 20 - ph * 6, 6, Math.PI, 0); ctx.stroke(); }
      // thermometer
      var tx0 = W * 0.47, ty = H * 0.1, th = H * 0.7;
      ctx.fillStyle = C.line; K.rr(ctx, tx0 - 6, ty, 12, th, 6); ctx.fill();
      var fh = clamp((Tn - 0) / 100, 0, 1) * th;
      ctx.fillStyle = "#ef4444"; K.rr(ctx, tx0 - 4, ty + th - fh, 8, fh, 4); ctx.fill(); K.dot(ctx, tx0, ty + th + 8, 11, "#ef4444");
      [0, 20, 50, 70, 100].forEach(function (v) { var yy = ty + th - v / 100 * th; txt(ctx, n(v), tx0 + 12, yy, { c: C.muted, s: 10, a: "left" }); });
      // readouts
      var rx = W * 0.58, fs = clamp(W / 42, 12, 15);
      txt(ctx, "T = " + n(r1(Tn)) + " °C   (" + n(Math.round(Tn + 273)) + " K)", rx, H * 0.14, { c: C.ink, s: fs + 3, a: "left" });
      txt(ctx, "Δt = " + n(r1(dT)) + " K", rx, H * 0.25, { c: C.ink, s: fs + 1, a: "left" });
      txt(ctx, "c = " + n(cc) + " J/kg·K", rx, H * 0.35, { c: C.muted, s: fs, a: "left" });
      txt(ctx, "Q = m c Δt", rx, H * 0.47, { c: C.muted, s: fs, a: "left" });
      txt(ctx, "= " + n(r1(m)) + " × " + n(cc) + " × " + n(r1(dT)), rx, H * 0.56, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "= " + n(Math.round(Q)) + " J", rx, H * 0.66, { c: "#ea580c", s: fs + 4, a: "left" });
      var ks = Object.keys(last).filter(function (k) { return seen[k]; });
      if (ks.length) txt(ctx, t("Δt per 1000 J for this mass: ", "Δt لكل ١٠٠٠ جول لهذه الكتلة: ") + ks.map(function (k) { return (E.isAr() ? MAT[k][2][1] : MAT[k][2][0]) + " " + n(r1(1000 / (m * MAT[k][0]))); }).join(" · "), rx, H * 0.8, { c: C.muted, s: fs - 3, a: "left" });
    });
  };

  /* =========================================================
     5. sec1_osmo - U-tube with a semi-permeable membrane
     ========================================================= */
  L.sec1_osmo = function (host, cfg, done) {
    host.innerHTML = hint(t("Add solute particles to either arm. Only water (blue) can cross the purple membrane. Watch the levels, and read the boiling and freezing points of the right-hand solution.",
      "أضف جسيمات مذاب إلى أي من الفرعين. الماء (الأزرق) فقط يعبر الغشاء البنفسجي. راقب المستويين واقرأ درجتي غليان وتجمد المحلول في الفرع الأيمن."));
    var S = K.make(host, 0.58, 400);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s1ol">+ ' + t("Solute LEFT", "مذاب يسار") + '</button><button type="button" class="btn sm" id="s1or">+ ' + t("Solute RIGHT", "مذاب يمين") + '</button><button type="button" class="btn sm ghost" id="s1o0">↺ ' + t("Pure water both sides", "ماء نقي في الجانبين") + "</button></div>");
    var tick = L._goals(host, [t("Make water move into the right arm (right level clearly higher).", "اجعل الماء ينتقل إلى الفرع الأيمن (المستوى الأيمن أعلى بوضوح)."), t("With solute on BOTH sides, make the two levels equal again.", "مع وجود مذاب في الجانبين، اجعل المستويين متساويين مرة أخرى."),
      t("Raise the boiling point of the right solution to 100.5°C or more.", "ارفع درجة غليان المحلول الأيمن إلى 100.5°م أو أكثر.")], done);
    var nL = 0, nR = 0, VL = 1, VR = 1, sol = [], wat = [];
    function addS(side) { if ((side ? nR : nL) >= 30) { E.toast(t("This arm is saturated with particles.", "هذا الفرع امتلأ بالجسيمات.")); return; } if (side) nR++; else nL++; sol.push({ s: side, x: Math.random(), y: Math.random(), vx: K.rnd(-0.2, 0.2), vy: K.rnd(-0.2, 0.2) }); }
    c.querySelector("#s1ol").onclick = function () { for (var i = 0; i < 3; i++) addS(0); };
    c.querySelector("#s1or").onclick = function () { for (var i = 0; i < 3; i++) addS(1); };
    c.querySelector("#s1o0").onclick = function () { nL = 0; nR = 0; sol = []; };
    for (var i = 0; i < 26; i++) wat.push({ s: i % 2, x: Math.random(), y: Math.random(), vx: K.rnd(-0.2, 0.2), vy: K.rnd(-0.2, 0.2), cross: 0 });
    var flowAcc = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      var cL = nL / VL, cR = nR / VR, flow = 0.05 * ((cR - cL) - 9 * (VR - VL));
      VR = clamp(VR + flow * dt, 0.5, 1.5); VL = 2 - VR;
      flowAcc += flow * dt * 40;
      ctx.clearRect(0, 0, W, H);
      var ax = W * 0.08, aw = W * 0.2, gap = W * 0.04, bx = ax + aw + gap, base = H * 0.88, top = H * 0.08, maxH = base - top;
      var hL = VL / 1.6 * maxH, hR = VR / 1.6 * maxH;
      // tube body
      ctx.fillStyle = "rgba(59,130,246,.2)";
      ctx.fillRect(ax, base - hL, aw, hL); ctx.fillRect(bx, base - hR, aw, hR); ctx.fillRect(ax + aw, base - maxH * 0.12, gap, maxH * 0.12);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath();
      ctx.moveTo(ax, top); ctx.lineTo(ax, base); ctx.lineTo(bx + aw, base); ctx.lineTo(bx + aw, top); ctx.moveTo(ax + aw, top); ctx.lineTo(ax + aw, base - maxH * 0.12); ctx.lineTo(bx, base - maxH * 0.12); ctx.lineTo(bx, top); ctx.stroke();
      ctx.strokeStyle = "#a855f7"; ctx.setLineDash([5, 4]); ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ax + aw + gap / 2, base - maxH * 0.12); ctx.lineTo(ax + aw + gap / 2, base); ctx.stroke(); ctx.setLineDash([]);
      // level marks
      ctx.strokeStyle = C.ink; ctx.lineWidth = 1; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(ax - 6, base - hL); ctx.lineTo(bx + aw + 6, base - hL); ctx.stroke(); ctx.setLineDash([]);
      // particles
      function drawSet(arr, rad, colF) {
        arr.forEach(function (p) {
          p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0.05 || p.x > 0.95) p.vx *= -1; if (p.y < 0.05 || p.y > 0.95) p.vy *= -1;
          p.x = clamp(p.x, 0.05, 0.95); p.y = clamp(p.y, 0.05, 0.95);
          var h = p.s ? hR : hL, x0 = p.s ? bx : ax;
          K.dot(ctx, x0 + p.x * aw, base - h + p.y * h, rad, colF(p));
        });
      }
      drawSet(sol, 5, function () { return "#f97316"; });
      if (Math.abs(flowAcc) > 1) { var dir = flowAcc > 0 ? 1 : 0; flowAcc -= flowAcc > 0 ? 1 : -1; var w = wat.filter(function (q) { return q.s !== dir && !q.cross; })[0]; if (w) w.cross = 1; }
      wat.forEach(function (p) {
        if (p.cross) { p.cross += dt * 1.2; var from = p.s ? bx : ax, to = p.s ? ax + aw * 0.7 : bx + aw * 0.3, f = Math.min(1, p.cross - 1), y = base - maxH * 0.06;
          K.dot(ctx, from + aw * 0.5 + (to - from - aw * 0.5) * f, y, 3.5, "#2563eb");
          if (p.cross >= 2) { p.s = 1 - p.s; p.cross = 0; p.x = p.s ? 0.2 : 0.8; p.y = 0.9; } return; }
        p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 0.05 || p.x > 0.95) p.vx *= -1; if (p.y < 0.05 || p.y > 0.95) p.vy *= -1;
        p.x = clamp(p.x, 0.05, 0.95); p.y = clamp(p.y, 0.05, 0.95);
        var h = p.s ? hR : hL, x0 = p.s ? bx : ax; K.dot(ctx, x0 + p.x * aw, base - h + p.y * h, 3, "#2563eb");
      });
      // readouts
      var rx = W * 0.62, fs = clamp(W / 44, 11, 14), bp = 100 + 0.04 * cR, fp = -0.15 * cR;
      txt(ctx, t("Left: ", "يسار: ") + n(nL) + t(" particles", " جسيم") + "   " + t("Right: ", "يمين: ") + n(nR), rx, H * 0.12, { c: C.ink, s: fs, a: "left" });
      txt(ctx, t("concentration L : R = ", "التركيز يسار : يمين = ") + n(r1(cL)) + " : " + n(r1(cR)), rx, H * 0.21, { c: C.ink, s: fs, a: "left" });
      var dh = Math.round((VR - VL) * 100);
      txt(ctx, t("level difference: ", "فرق المستوى: ") + (dh > 0 ? "+" : "") + n(dh) + " mm", rx, H * 0.3, { c: C.ink, s: fs, a: "left" });
      txt(ctx, Math.abs(flow) < 0.004 ? t("equilibrium: no net flow", "اتزان: لا يوجد انتقال صافٍ") : flow > 0 ? t("water flows LEFT → RIGHT", "الماء ينتقل من اليسار إلى اليمين") : t("water flows RIGHT → LEFT", "الماء ينتقل من اليمين إلى اليسار"), rx, H * 0.4, { c: "#2563eb", s: fs, a: "left" });
      txt(ctx, t("Right solution:", "المحلول الأيمن:"), rx, H * 0.55, { c: C.muted, s: fs, a: "left" });
      txt(ctx, t("boiling point ≈ ", "درجة الغليان ≈ ") + n(r2(bp).toFixed(2)) + " °C", rx, H * 0.64, { c: "#ea580c", s: fs + 1, a: "left" });
      txt(ctx, t("freezing point ≈ ", "درجة التجمد ≈ ") + n(r2(fp).toFixed(2)) + " °C", rx, H * 0.73, { c: "#0284c7", s: fs + 1, a: "left" });
      txt(ctx, t("(model: changes grow with the NUMBER of particles)", "(نموذج: التغير يزداد بزيادة عدد الجسيمات)"), rx, H * 0.83, { c: C.muted, s: fs - 3, a: "left" });
      if (VR - VL > 0.2) tick(0);
      if (nL >= 3 && nR >= 3 && Math.abs(VR - VL) < 0.04 && Math.abs(flow) < 0.01) tick(1);
      if (bp >= 100.5) tick(2);
    });
  };

  /* =========================================================
     6. sec1_enzyme - enzyme activity vs temperature and pH
     ========================================================= */
  L.sec1_enzyme = function (host, cfg, done) {
    host.innerHTML = hint(t("Each teal enzyme has an active site that fits the orange substrate. Change the temperature and pH and watch the reaction rate and the activity curve.",
      "لكل إنزيم (اللون الأخضر المزرق) موقع نشط يناسب المادة المتفاعلة البرتقالية. غيّر درجة الحرارة وpH وراقب معدل التفاعل ومنحنى النشاط."));
    var S = K.make(host, 0.58, 400);
    var c = box(host, L._slider(t("Temperature", "درجة الحرارة"), 0, 80, 1, 20, "°C") + L._slider("pH", 1, 14, 0.5, 7, ""));
    var tick = L._goals(host, [t("Find the optimum: activity 95% or more.", "اكتشف الظروف المثلى: نشاط ٩٥٪ أو أكثر."), t("Let the enzymes make 15 products.", "دع الإنزيمات تكوّن ١٥ ناتجًا."),
      t("Heat above 60°C and see the enzyme stop working.", "سخّن فوق ٦٠°م وشاهد الإنزيم يتوقف عن العمل."), t("At 37°C, make the medium very acidic (pH 3 or less).", "عند ٣٧°م اجعل الوسط حمضيًا جدًا (pH ٣ أو أقل).")], done);
    var T = 20, pH = 7, made = 0, enz = [], sub = [], prod = [];
    function fT(x) { return x <= 37 ? Math.exp(-Math.pow((x - 37) / 16, 2)) : Math.exp(-Math.pow((x - 37) / 9, 2)); }
    function fP(x) { return Math.exp(-Math.pow((x - 7) / 2, 2)); }
    function act() { return fT(T) * fP(pH); }
    sl(c, 0, function (v) { return n(v) + "°C"; }, function (v) { T = v; chk(); });
    sl(c, 1, function (v) { return n(v); }, function (v) { pH = v; chk(); });
    function chk() { if (act() >= 0.95) tick(0); if (T >= 60) tick(2); if (pH <= 3 && Math.abs(T - 37) <= 3) tick(3); }
    for (var i = 0; i < 3; i++) enz.push({ x: 0.12 + i * 0.16, y: 0.3 + (i % 2) * 0.35, b: 0 });
    function spawn() { return { x: K.rnd(0.03, 0.57), y: K.rnd(0.08, 0.92), vx: K.rnd(-0.12, 0.12), vy: K.rnd(-0.12, 0.12) }; }
    for (i = 0; i < 12; i++) sub.push(spawn());
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, a = act(), den = T >= 55 || fP(pH) < 0.05, sc = clamp(Math.min(W, H) / 360, 0.75, 1.3);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = C.bg; K.rr(ctx, W * 0.02, H * 0.04, W * 0.58, H * 0.92, 10); ctx.fill();
      var spd = 0.4 + T / 60;
      sub.forEach(function (s) {
        s.x += s.vx * spd * dt; s.y += s.vy * spd * dt; if (s.x < 0.04 || s.x > 0.57) s.vx *= -1; if (s.y < 0.08 || s.y > 0.92) s.vy *= -1;
        s.x = clamp(s.x, 0.04, 0.57); s.y = clamp(s.y, 0.08, 0.92);
      });
      enz.forEach(function (e) {
        var ex = e.x * W, ey = e.y * H, w = 54 * sc, h = 34 * sc, sx = ex, sy = ey - h / 2 - 2;
        if (e.b > 0) { e.b -= dt; if (e.b <= 0) { made++; prod.push({ x: ex - 8, y: sy, vx: -0.08, vy: -0.1, l: 2 }, { x: ex + 8, y: sy, vx: 0.08, vy: -0.1, l: 2 }); } }
        else if (!den) {
          for (var k = 0; k < sub.length; k++) {
            var s = sub[k], dd = Math.hypot(s.x * W - sx, s.y * H - sy);
            if (dd < 110 * sc && a > 0.05) { s.x += (sx / W - s.x) * dt * 1.5 * a; s.y += (sy / H - s.y) * dt * 1.5 * a; }
            if (dd < 26 * sc && Math.random() < a * dt * 14) { e.b = 0.45; sub.splice(k, 1); sub.push(spawn()); break; }
          }
        }
        ctx.fillStyle = den ? "#94a3b8" : "#14b8a6";
        ctx.beginPath();
        if (den) { ctx.moveTo(ex - w / 2, ey + h / 2); ctx.quadraticCurveTo(ex - w / 2 - 6, ey - h / 2, ex - 4, ey - h / 2 + 4); ctx.quadraticCurveTo(ex + 6, ey - h / 2 - 6, ex + w / 2, ey - h / 3); ctx.lineTo(ex + w / 2 + 4, ey + h / 2); ctx.closePath(); }
        else { ctx.moveTo(ex - w / 2, ey + h / 2); ctx.lineTo(ex - w / 2, ey - h / 2); ctx.lineTo(ex - 12 * sc, ey - h / 2); ctx.lineTo(ex - 12 * sc, ey - h / 2 + 12 * sc); ctx.lineTo(ex + 12 * sc, ey - h / 2 + 12 * sc); ctx.lineTo(ex + 12 * sc, ey - h / 2); ctx.lineTo(ex + w / 2, ey - h / 2); ctx.lineTo(ex + w / 2, ey + h / 2); ctx.closePath(); }
        ctx.fill();
        if (e.b > 0) { ctx.fillStyle = "#f97316"; K.rr(ctx, ex - 11 * sc, ey - h / 2 - 1, 22 * sc, 13 * sc, 3); ctx.fill(); }
      });
      sub.forEach(function (s) { ctx.fillStyle = "#f97316"; K.rr(ctx, s.x * W - 10 * sc, s.y * H - 6 * sc, 20 * sc, 12 * sc, 3); ctx.fill(); });
      prod = prod.filter(function (p) { p.l -= dt; p.x += p.vx * W * dt * 0.3; p.y += p.vy * H * dt * 0.3; ctx.globalAlpha = clamp(p.l / 2, 0, 1); ctx.fillStyle = "#fb923c"; K.rr(ctx, p.x - 5 * sc, p.y - 6 * sc, 10 * sc, 12 * sc, 3); ctx.fill(); ctx.globalAlpha = 1; return p.l > 0; });
      if (made >= 15) tick(1);
      // graph of activity vs temperature at this pH
      var gx = W * 0.66, gw = W * 0.3, gy = H * 0.1, gh = H * 0.38;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      ctx.strokeStyle = "#14b8a6"; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var x = 0; x <= 80; x += 1) { var X = gx + x / 80 * gw, Y = gy + gh - fT(x) * fP(pH) * gh; if (x) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke(); K.dot(ctx, gx + T / 80 * gw, gy + gh - a * gh, 6, "#ef4444");
      txt(ctx, t("activity", "النشاط"), gx + 4, gy - 8, { c: C.muted, s: 11, a: "left" }); txt(ctx, "°C", gx + gw, gy + gh + 12, { c: C.muted, s: 10 }); txt(ctx, "37", gx + 37 / 80 * gw, gy + gh + 12, { c: C.muted, s: 10 });
      var fs = clamp(W / 44, 11, 14);
      txt(ctx, t("activity: ", "النشاط: ") + n(Math.round(a * 100)) + "%", gx, H * 0.62, { c: C.ink, s: fs + 2, a: "left" });
      bar(ctx, gx, H * 0.67, gw, 10, a, "#14b8a6", C);
      txt(ctx, t("products made: ", "النواتج المتكونة: ") + n(made), gx, H * 0.78, { c: C.ink, s: fs, a: "left" });
      txt(ctx, den ? t("active site changed: enzyme stopped", "تغير الموقع النشط: توقف الإنزيم") : a > 0.9 ? t("near optimum (37°C, pH 7)", "قرب الظروف المثلى (٣٧°م، pH ٧)") : t("away from optimum: slower", "بعيدًا عن المثلى: أبطأ"), gx, H * 0.88, { c: den ? "#ef4444" : C.muted, s: fs - 2, a: "left" });
    });
  };

  /* =========================================================
     7. sec1_fish - keep a fish's body water balanced
     ========================================================= */
  L.sec1_fish = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose where the fish lives, then switch on the right adaptations to keep its body water (and salt) in the green zone for 4 seconds.",
      "اختر بيئة السمكة، ثم شغّل التكيفات المناسبة لتبقي ماء جسمها (وملحه) في المنطقة الخضراء لمدة ٤ ثوانٍ.")) + '<div class="seg" id="s1fe"></div>';
    var S = K.make(host, 0.52, 360);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm tg" data-a="urine">💧 ' + t("Lots of dilute urine", "بول مخفف كثير") + '</button><button type="button" class="btn sm tg" data-a="drink">🥤 ' + t("Drink sea water", "شرب ماء البحر") + '</button><button type="button" class="btn sm tg" data-a="gill">🧂 ' + t("Gill cells excrete salt", "خلايا الخياشيم تخرج الملح") + '</button><button type="button" class="btn sm tg" data-a="urea">🧪 ' + t("Keep urea in blood", "الاحتفاظ باليوريا في الدم") + "</button></div>");
    var tick = L._goals(host, [t("Balance a freshwater fish (tilapia).", "حقق الاتزان لسمكة مياه عذبة (البلطي)."), t("Balance a marine bony fish.", "حقق الاتزان لسمكة بحرية عظمية."), t("Balance a shark.", "حقق الاتزان لسمكة القرش.")], done);
    var env = "fresh", A = { urine: false, drink: false, gill: false, urea: false }, Wt = 50, Sl = 50, ok = 0;
    K.seg(host, "#s1fe", [["fresh", t("🏞️ Fresh water", "🏞️ مياه عذبة")], ["sea", t("🌊 Sea (bony fish)", "🌊 البحر (سمكة عظمية)")], ["shark", t("🦈 Sea (shark)", "🦈 البحر (قرش)")]], env, function (v) { env = v; Wt = 50; Sl = 50; ok = 0; });
    c.querySelectorAll("button[data-a]").forEach(function (b) { b.onclick = function () { var k = b.dataset.a; A[k] = !A[k]; b.classList.toggle("on", A[k]); }; });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      var osm = env === "fresh" ? 6 : (A.urea && env === "shark" ? 0 : -6), dw = osm, ds = 0;
      if (A.urine) dw -= 6;
      if (A.drink) { dw += 6; ds += 5; }
      if (A.gill) ds -= 5;
      if (env === "fresh" && A.gill) ds -= 1;
      if (env === "shark" && A.urea) ds += 0;
      if (Math.abs(dw) < 0.5) Wt += (50 - Wt) * 0.6 * dt; else Wt += dw * dt;
      if (Math.abs(ds) < 0.5) Sl += (50 - Sl) * 0.6 * dt; else Sl += ds * dt;
      Wt = clamp(Wt, 0, 100); Sl = clamp(Sl, 0, 100);
      var good = Wt > 40 && Wt < 60 && Sl > 40 && Sl < 60;
      ok = good ? ok + dt : 0;
      if (ok >= 4) tick(env === "fresh" ? 0 : env === "sea" ? 1 : 2);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = env === "fresh" ? "rgba(125,211,252,.35)" : "rgba(37,99,235,.35)"; K.rr(ctx, W * 0.03, H * 0.06, W * 0.55, H * 0.88, 12); ctx.fill();
      var fx = W * 0.3, fy = H * 0.5, s = (0.8 + (Wt - 50) / 120) * clamp(Math.min(W, H) / 300, 0.7, 1.4);
      ctx.fillStyle = env === "shark" ? "#64748b" : "#f59e0b";
      ctx.beginPath(); ctx.moveTo(fx - 70 * s, fy); ctx.quadraticCurveTo(fx, fy - 48 * s, fx + 60 * s, fy); ctx.quadraticCurveTo(fx, fy + 48 * s, fx - 70 * s, fy); ctx.fill();
      ctx.beginPath(); ctx.moveTo(fx + 56 * s, fy); ctx.lineTo(fx + 92 * s, fy - 26 * s); ctx.lineTo(fx + 92 * s, fy + 26 * s); ctx.fill();
      if (env === "shark") { ctx.beginPath(); ctx.moveTo(fx - 5 * s, fy - 34 * s); ctx.lineTo(fx + 15 * s, fy - 62 * s); ctx.lineTo(fx + 25 * s, fy - 30 * s); ctx.fill(); }
      K.dot(ctx, fx - 40 * s, fy - 8 * s, 5 * s, "#1e293b");
      var ph = (performance.now() / 700) % 1;
      if (osm !== 0) for (var k = 0; k < 4; k++) { var ang = k * 1.57 + 0.6, r0 = osm > 0 ? 110 - ph * 40 : 70 + ph * 40; K.dot(ctx, fx + Math.cos(ang) * r0 * s, fy + Math.sin(ang) * r0 * 0.6 * s, 4, "#2563eb"); }
      txt(ctx, osm > 0 ? t("water enters by osmosis", "الماء يدخل بالأسموزية") : osm < 0 ? t("water leaves by osmosis", "الماء يخرج بالأسموزية") : t("urea: osmotic pressure close to the sea", "اليوريا: ضغط أسموزي قريب من البحر"), W * 0.3, H * 0.12, { c: C.ink, s: 12 });
      var mx = W * 0.64, mw = W * 0.32, fs = clamp(W / 44, 11, 14);
      [[t("Body water", "ماء الجسم"), Wt, "#3b82f6", H * 0.18], [t("Body salt", "ملح الجسم"), Sl, "#f97316", H * 0.42]].forEach(function (r) {
        txt(ctx, r[0] + ": " + n(Math.round(r[1])) + "%", mx, r[3], { c: C.ink, s: fs, a: "left" });
        ctx.fillStyle = C.line; ctx.fillRect(mx, r[3] + 12, mw, 14); ctx.fillStyle = "rgba(34,197,94,.35)"; ctx.fillRect(mx + mw * 0.4, r[3] + 12, mw * 0.2, 14);
        ctx.fillStyle = r[2]; ctx.fillRect(mx + mw * r[1] / 100 - 3, r[3] + 8, 6, 22);
      });
      txt(ctx, good ? t("balanced: ", "متزن: ") + n(Math.min(4, Math.floor(ok))) + " / 4 s" : (Wt >= 60 ? t("swelling: too much water", "انتفاخ: ماء زائد") : Wt <= 40 ? t("dehydrating: too little water", "جفاف: ماء قليل") : Sl >= 60 ? t("too much salt", "ملح زائد") : t("too little salt", "ملح قليل")), mx, H * 0.7, { c: good ? "#16a34a" : "#ef4444", s: fs + 1, a: "left" });
      txt(ctx, env === "fresh" ? t("tip: get rid of extra water", "تلميح: تخلص من الماء الزائد") : env === "sea" ? t("tip: replace lost water, remove the salt", "تلميح: عوّض الماء المفقود وأخرج الملح") : t("tip: sharks do it differently", "تلميح: القرش يفعلها بطريقة مختلفة"), mx, H * 0.82, { c: C.muted, s: fs - 2, a: "left" });
    });
  };

  /* =========================================================
     8. sec1_gas - dissolved O2 / CO2 vs temperature, salinity, CO2 level
     ========================================================= */
  L.sec1_gas = function (host, cfg, done) {
    host.innerHTML = hint(t("Change the water temperature, fresh or sea water, and the CO₂ in the air. Read dissolved oxygen, the pH and the health of the shells (model based on the book's graphs).",
      "غيّر درجة حرارة الماء ونوعه (عذب أو بحر) وكمية CO₂ في الهواء، واقرأ الأكسجين الذائب وpH وحالة الأصداف (نموذج مبني على رسوم الكتاب).")) + '<div class="seg" id="s1gw"></div>';
    var S = K.make(host, 0.55, 380);
    var c = box(host, L._slider(t("Water temperature", "درجة حرارة الماء"), 0, 40, 1, 20, "°C") + L._slider(t("CO₂ in air", "CO₂ في الهواء"), 280, 1000, 20, 420, "ppm"));
    var tick = L._goals(host, [t("Cool fresh water to 2°C or less: the most dissolved O₂.", "برّد الماء العذب إلى ٢°م أو أقل: أكبر أكسجين ذائب."), t("Switch to sea water and see O₂ fall by about 25%.", "انتقل إلى ماء البحر ولاحظ نقص الأكسجين نحو ٢٥٪."),
      t("Warm sea water to 30°C or more: O₂ below 6 mg/L.", "سخّن ماء البحر إلى ٣٠°م أو أكثر: أكسجين أقل من ٦ مجم/لتر."), t("Raise CO₂ until sea pH falls below 7.9 and shells weaken.", "ارفع CO₂ حتى ينخفض pH البحر عن 7.9 وتضعف الأصداف.")], done);
    var T = 20, ppm = 420, sea = false, DO = 9;
    var O2T = [14.6, 11.3, 9.1, 7.6, 6.4], CO2T = [3.35, 2.32, 1.69, 1.26, 0.97];
    function lerp(tab, x) { var i = Math.min(3, Math.floor(x / 10)), f = (x - i * 10) / 10; return tab[i] + (tab[i + 1] - tab[i]) * f; }
    function o2() { return lerp(O2T, T) * (sea ? 0.75 : 1); }
    function co2() { return lerp(CO2T, T) / 3.35 * ppm / 280 * (sea ? 0.75 : 1); }
    function pH() { return (sea ? 8.2 : 7.6) - 0.33 * Math.log(ppm / 280) / Math.LN2; }
    K.seg(host, "#s1gw", [["f", t("Fresh water", "ماء عذب")], ["s", t("Sea water", "ماء البحر")]], "f", function (v) { sea = v === "s"; chk(); });
    sl(c, 0, function (v) { return n(v) + "°C"; }, function (v) { T = v; chk(); });
    sl(c, 1, function (v) { return n(v) + " ppm"; }, function (v) { ppm = v; chk(); });
    function chk() {
      if (!sea && T <= 2) tick(0);
      if (sea) tick(1);
      if (sea && T >= 30 && o2() < 6) tick(2);
      if (sea && pH() < 7.9) tick(3);
    }
    var bub = [];
    for (var i = 0; i < 20; i++) bub.push({ x: Math.random(), y: Math.random(), c: i % 3 === 0 });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, sat = o2(), p = pH();
      DO += (sat - DO) * Math.min(1, dt * 2);
      ctx.clearRect(0, 0, W, H);
      var tx0 = W * 0.04, tw = W * 0.5, ty = H * 0.16, th = H * 0.78;
      ctx.fillStyle = "rgba(186,230,253,.4)"; ctx.fillRect(tx0, H * 0.02, tw, ty - H * 0.02);
      txt(ctx, t("air: O₂ 21% · CO₂ ", "الهواء: O₂ ٢١٪ · CO₂ ") + n(ppm) + " ppm", tx0 + tw / 2, H * 0.08, { c: C.ink, s: 11 });
      var warm = T / 40;
      ctx.fillStyle = sea ? "rgba(37,99,235," + (0.35 + warm * 0.1) + ")" : "rgba(56,189,248," + (0.3 + warm * 0.1) + ")"; ctx.fillRect(tx0, ty, tw, th);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(tx0, ty, tw, th);
      var nO = Math.round(DO * 2.2), nC = Math.round(co2() * 6);
      bub.forEach(function (b, k) { b.y -= dt * 0.04; if (b.y < 0) b.y = 1; });
      for (i = 0; i < Math.min(40, nO); i++) { var bx = (i * 0.137 + 0.05) % 0.95, by = (i * 0.291 + performance.now() / 20000) % 1; K.dot(ctx, tx0 + 8 + bx * (tw - 16), ty + 6 + by * (th - 40), 3.2, "#f8fafc", "#60a5fa"); }
      for (i = 0; i < Math.min(40, nC); i++) { var cx = (i * 0.173 + 0.11) % 0.95, cy = (i * 0.217 + performance.now() / 26000) % 1; K.dot(ctx, tx0 + 8 + cx * (tw - 16), ty + 6 + cy * (th - 40), 3.2, "#94a3b8"); }
      // shells
      var health = sea ? clamp((p - 7.75) / 0.4, 0, 1) : 1;
      for (i = 0; i < 4; i++) { var sx = tx0 + tw * (0.15 + i * 0.22), sy = ty + th - 6; ctx.fillStyle = "rgba(253,230,138," + (0.3 + 0.7 * health) + ")"; ctx.strokeStyle = "#d97706"; ctx.beginPath(); ctx.arc(sx, sy, 12 + 4 * health, Math.PI, 0); ctx.fill(); ctx.stroke(); }
      // fish
      var stress = DO < 6;
      ctx.fillStyle = stress ? "#ef4444" : "#f59e0b"; var fx = tx0 + tw * 0.55, fy = ty + th * (stress ? 0.12 : 0.45);
      ctx.beginPath(); ctx.ellipse(fx, fy, 22, 11, 0, 0, 7); ctx.fill(); ctx.beginPath(); ctx.moveTo(fx + 20, fy); ctx.lineTo(fx + 34, fy - 9); ctx.lineTo(fx + 34, fy + 9); ctx.fill();
      var rx = W * 0.6, fs = clamp(W / 44, 11, 14), rw = W * 0.36;
      txt(ctx, t("Dissolved O₂: ", "الأكسجين الذائب: ") + n(r1(DO)) + " mg/L", rx, H * 0.1, { c: C.ink, s: fs + 1, a: "left" });
      bar(ctx, rx, H * 0.15, rw, 10, DO / 15, "#3b82f6", C);
      txt(ctx, t("Dissolved CO₂ (relative): ", "CO₂ الذائب (نسبيًا): ") + n(r1(co2())), rx, H * 0.27, { c: C.ink, s: fs, a: "left" });
      bar(ctx, rx, H * 0.32, rw, 10, co2() / 4, "#64748b", C);
      txt(ctx, "pH = " + n(r2(p).toFixed(2)) + (sea ? "" : t(" (fresh)", " (عذب)")), rx, H * 0.45, { c: p < 7.9 && sea ? "#ef4444" : C.ink, s: fs + 2, a: "left" });
      txt(ctx, "CO₂ + H₂O → H₂CO₃", rx, H * 0.54, { c: C.muted, s: fs - 1, a: "left" });
      txt(ctx, sea ? t("shell calcification: ", "تكلس الأصداف: ") + n(Math.round(health * 100)) + "%" : t("switch to sea water to see shells", "انتقل إلى ماء البحر لرؤية الأصداف"), rx, H * 0.65, { c: health < 0.6 ? "#ef4444" : C.ink, s: fs, a: "left" });
      txt(ctx, stress ? t("fish gasping: too little O₂", "السمكة تلهث: أكسجين قليل") : t("fish breathing normally", "السمكة تتنفس طبيعيًا"), rx, H * 0.76, { c: stress ? "#ef4444" : "#16a34a", s: fs, a: "left" });
      txt(ctx, t("warmer or saltier water holds less gas", "الماء الأدفأ أو الأكثر ملوحة يذيب غازًا أقل"), rx, H * 0.87, { c: C.muted, s: fs - 2, a: "left" });
    });
  };

  /* =========================================================
     9. sec1_dive - drag a submersible: light colours, zones, pressure
     ========================================================= */
  L.sec1_dive = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the yellow submersible up and down (the depth scale stretches near the surface). Watch which colours of light remain and how the pressure grows.",
      "اسحب الغواصة الصفراء لأعلى ولأسفل (مقياس العمق متسع قرب السطح)، ولاحظ الألوان المتبقية من الضوء وكيف يزداد الضغط."));
    var S = K.make(host, 0.7, 440);
    var tick = L._goals(host, [t("Find where red light is almost gone (below 5%).", "اكتشف أين يكاد الضوء الأحمر يختفي (أقل من ٥٪)."), t("Dive below 100 m: pressure above 11 atm.", "انزل أعمق من ١٠٠ م: ضغط أكبر من ١١ ض.ج."),
      t("Enter the twilight zone (deeper than 200 m).", "ادخل النطاق شبه المظلم (أعمق من ٢٠٠ م)."), t("Reach 2000 m, home of deep-sea fish.", "اصل إلى ٢٠٠٠ م، موطن أسماك الأعماق.")], done);
    var u = 0.05, drag = false, MAX = 4000;
    var COL = [["#ef4444", 0.35, ["red", "أحمر"]], ["#f97316", 0.15, ["orange", "برتقالي"]], ["#eab308", 0.07, ["yellow", "أصفر"]], ["#22c55e", 0.05, ["green", "أخضر"]], ["#3b82f6", 0.03, ["blue", "أزرق"]]];
    function depth() { return MAX * u * u; }
    function geo() { return { top: S.H * 0.06, h: S.H * 0.9, x: S.W * 0.36 }; }
    S.drag({
      down: function (p) { var g = geo(), y = g.top + u * g.h; if (Math.abs(p.y - y) < 30 && Math.abs(p.x - g.x) < 60) { drag = true; return true; } return false; },
      move: function (p) { if (drag) { var g = geo(); u = clamp((p.y - g.top) / g.h, 0, 1); } },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.y - (g.top + u * g.h)) < 30 && Math.abs(p.x - g.x) < 60; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), d = depth(), P = 1 + d / 10;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < 40; i++) { var uu = i / 40, dd = MAX * uu * uu, li = Math.exp(-0.03 * dd); ctx.fillStyle = "rgb(" + Math.round(20 + 80 * li) + "," + Math.round(40 + 150 * li) + "," + Math.round(60 + 190 * li) + ")"; ctx.fillRect(0, g.top + uu * g.h, W * 0.58, g.h / 40 + 1); }
      ctx.fillStyle = "#bae6fd"; ctx.fillRect(0, 0, W * 0.58, g.top);
      [10, 100, 200, 1000, 2000, 4000].forEach(function (m) { var y = g.top + Math.sqrt(m / MAX) * g.h; ctx.strokeStyle = "rgba(255,255,255,.45)"; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(14, y); ctx.stroke(); txt(ctx, n(m) + " m", 18, y, { c: "#fff", s: 10, a: "left" }); });
      txt(ctx, "🪸", W * 0.1, g.top + Math.sqrt(8 / MAX) * g.h, { s: 18 }); txt(ctx, "🐠", W * 0.48, g.top + Math.sqrt(25 / MAX) * g.h, { s: 16 });
      txt(ctx, "🦑", W * 0.5, g.top + Math.sqrt(600 / MAX) * g.h, { s: 16 }); txt(ctx, "🐡", W * 0.14, g.top + Math.sqrt(2500 / MAX) * g.h, { s: 16 });
      var sy = g.top + u * g.h;
      ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.ellipse(g.x, sy, 34, 15, 0, 0, 7); ctx.fill(); ctx.fillRect(g.x - 8, sy - 24, 16, 12);
      K.dot(ctx, g.x + 12, sy, 6, "#7dd3fc", "#0f172a");
      var rx = W * 0.62, fs = clamp(W / 44, 11, 14);
      txt(ctx, t("Depth: ", "العمق: ") + n(Math.round(d)) + " m", rx, H * 0.08, { c: C.ink, s: fs + 3, a: "left" });
      txt(ctx, "P = Pa + Pw = 1 + " + n(r1(d / 10)) + " = " + n(r1(P)) + " atm", rx, H * 0.16, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "= " + n((P * 1.013e5).toExponential(2)) + " N/m²", rx, H * 0.23, { c: C.muted, s: fs, a: "left" });
      txt(ctx, t("Force on a 0.05 m² window: ", "القوة على نافذة ٠٫٠٥ م²: ") + n(Math.round(P * 1.013e5 * 0.05)) + " N", rx, H * 0.3, { c: C.muted, s: fs - 1, a: "left" });
      var red = 0;
      COL.forEach(function (cl, k) { var f = Math.exp(-cl[1] * d); if (!k) red = f; var y = H * 0.4 + k * H * 0.065; txt(ctx, (E.isAr() ? cl[2][1] : cl[2][0]), rx, y, { c: C.ink, s: fs - 1, a: "left" }); bar(ctx, rx + W * 0.08, y - 5, W * 0.22, 10, f, cl[0], C); txt(ctx, f < 0.001 ? "0%" : n(f < 0.1 ? r1(f * 100) : Math.round(f * 100)) + "%", rx + W * 0.31, y, { c: C.muted, s: 10, a: "left" }); });
      var zone = d < 200 ? t("sunlit zone", "النطاق المضيء") : d < 1000 ? t("twilight zone", "النطاق شبه المظلم") : t("dark zone", "النطاق المظلم");
      txt(ctx, zone, rx, H * 0.78, { c: C.ink, s: fs + 1, a: "left" });
      txt(ctx, d < 200 ? t("enough light for photosynthesis", "ضوء كافٍ للبناء الضوئي") : d < 2000 ? t("swim bladders help with buoyancy", "مثانة العوم تساعد على الطفو") : t("compact bodies, no gas bladder, oily livers", "أجسام متماسكة، بلا مثانة غازية، كبد زيتي"), rx, H * 0.86, { c: C.muted, s: fs - 2, a: "left" });
      if (red < 0.05) tick(0);
      if (d > 100) tick(1);
      if (d > 200) tick(2);
      if (d >= 2000) tick(3);
    });
  };

  /* =========================================================
     10. sec1_web - aquatic food web with fishing and nutrient sliders
     ========================================================= */
  L.sec1_web = function (host, cfg, done) {
    host.innerHTML = hint(t("Move the fishing and fertilizer sliders and watch the four populations change over time (1 = normal level). A simple model of the book's food web.",
      "حرّك منزلقي الصيد والأسمدة وراقب تغير أعداد المجموعات الأربع مع الوقت (١ = المستوى الطبيعي). نموذج مبسط للشبكة الغذائية في الكتاب."));
    var S = K.make(host, 0.55, 380);
    var c = box(host, L._slider(t("Fishing of predators", "صيد المفترسات"), 0, 100, 5, 0, "%") + L._slider(t("Fertilizer runoff (N, P)", "تسرب الأسمدة (N، P)"), 0, 100, 5, 0, "%"));
    var tick = L._goals(host, [t("Overfish the predators until small fish boom (above 1.8).", "اصطد المفترسات بإفراط حتى تنفجر أعداد الأسماك الصغيرة (أكثر من ١٫٨)."), t("Cause an algal bloom (algae above 2.5).", "سبّب ازدهارًا للطحالب (أكثر من ٢٫٥)."),
      t("Then restore the balance: all four between 0.85 and 1.2 for 3 s.", "ثم أعد الاتزان: الأربعة بين ٠٫٨٥ و١٫٢ لمدة ٣ ثوانٍ.")], done);
    var f = 0, nu = 0, pop = { A: 1, Z: 1, S: 1, P: 1 }, hist = [], acc = 0, bal = 0, upset = false;
    sl(c, 0, function (v) { return n(v) + "%"; }, function (v) { f = v / 100; });
    sl(c, 1, function (v) { return n(v) + "%"; }, function (v) { nu = v / 100; });
    var SP = [["P", "#ef4444", "🦈", ["predators", "مفترسات"]], ["S", "#f59e0b", "🐟", ["small fish", "أسماك صغيرة"]], ["Z", "#a855f7", "🦐", ["zooplankton", "عوالق حيوانية"]], ["A", "#22c55e", "🌿", ["algae", "طحالب"]]];
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      var Pt = 1 - 0.9 * f, St = 1 + 1.6 * (1 - pop.P), Zt = clamp(1 - 0.45 * (pop.S - 1), 0.2, 2), At = (1 + 2.2 * nu) * (1 + 0.6 * (1 - pop.Z));
      pop.P += (Pt - pop.P) * dt * 0.9; pop.S += (St - pop.S) * dt * 0.7; pop.Z += (Zt - pop.Z) * dt * 0.7; pop.A += (At - pop.A) * dt * 0.7;
      acc += dt; if (acc > 0.2) { acc = 0; hist.push({ A: pop.A, Z: pop.Z, S: pop.S, P: pop.P }); if (hist.length > 100) hist.shift(); }
      if (pop.S > 1.8) { tick(0); upset = true; }
      if (pop.A > 2.5) { tick(1); upset = true; }
      var inb = ["A", "Z", "S", "P"].every(function (k) { return pop[k] >= 0.85 && pop[k] <= 1.2; });
      bal = inb && upset ? bal + dt : 0; if (bal >= 3) tick(2);
      ctx.clearRect(0, 0, W, H);
      var gx = W * 0.07, gw = W * 0.56, gy = H * 0.08, gh = H * 0.78;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx, gy + gh); ctx.lineTo(gx + gw, gy + gh); ctx.stroke();
      var ymax = 3.5, y1 = gy + gh - 1 / ymax * gh;
      ctx.strokeStyle = C.line; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(gx, y1); ctx.lineTo(gx + gw, y1); ctx.stroke(); ctx.setLineDash([]);
      txt(ctx, "1", gx - 8, y1, { c: C.muted, s: 10 }); txt(ctx, t("time →", "الزمن ←"), gx + gw - 20, gy + gh + 12, { c: C.muted, s: 10 });
      SP.forEach(function (sp) {
        ctx.strokeStyle = sp[1]; ctx.lineWidth = 2.5; ctx.beginPath();
        hist.forEach(function (h, i) { var X = gx + i / 99 * gw, Y = gy + gh - clamp(h[sp[0]], 0, ymax) / ymax * gh; if (i) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
        ctx.stroke();
      });
      var rx = W * 0.68, fs = clamp(W / 44, 11, 14);
      SP.forEach(function (sp, i) {
        var y = H * 0.1 + i * H * 0.15;
        txt(ctx, sp[2] + " " + (E.isAr() ? sp[3][1] : sp[3][0]) + ": " + n(r2(pop[sp[0]]).toFixed(2)), rx, y, { c: sp[1], s: fs, a: "left" });
        bar(ctx, rx, y + 10, W * 0.28, 8, pop[sp[0]] / ymax, sp[1], C);
      });
      var msg = pop.A > 2 ? t("algal bloom: oxygen drops at night", "ازدهار طحالب: يقل الأكسجين ليلًا") : pop.S > 1.5 ? t("too many small fish: food overconsumed", "أسماك صغيرة كثيرة: استنزاف الغذاء") : inb ? t("ecological balance", "اتزان بيئي") : t("changing...", "يتغير...");
      txt(ctx, msg, rx, H * 0.75, { c: inb ? "#16a34a" : "#ef4444", s: fs, a: "left" });
      if (bal > 0) txt(ctx, t("balanced for ", "متزن منذ ") + n(Math.min(3, Math.floor(bal))) + " / 3 s", rx, H * 0.85, { c: C.muted, s: fs - 1, a: "left" });
    });
  };

  /* =========================================================
     11. sec1_layers - drag a probe through the atmosphere layers
     ========================================================= */
  L.sec1_layers = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the red probe up through the atmosphere. Each layer gets its own band on the scale (not to scale). Read the temperature, pressure and what happens there.",
      "اسحب المسبار الأحمر لأعلى عبر الغلاف الجوي. لكل طبقة شريط خاص على المقياس (ليس بمقياس رسم). اقرأ درجة الحرارة والضغط وما يحدث هناك."));
    var S = K.make(host, 0.7, 440);
    var tick = L._goals(host, [t("Stop at the tropopause (about 11 km, −56.5°C).", "توقف عند التروبوبوز (نحو ١١ كم، −56.5°م)."), t("Enter the ozone layer (20 to 40 km).", "ادخل طبقة الأوزون (٢٠–٤٠ كم)."),
      t("Find the coldest place in the atmosphere.", "اكتشف أبرد مكان في الغلاف الجوي."), t("Reach the satellites in the exosphere.", "اصل إلى الأقمار الصناعية في الإكسوسفير.")], done);
    var B = [[0, 11, 0, 0.22], [11, 50, 0.22, 0.45], [50, 80, 0.45, 0.6], [80, 700, 0.6, 0.88], [700, 1000, 0.88, 1]];
    var NM = [["Troposphere", "التروبوسفير", "#bae6fd"], ["Stratosphere", "الستراتوسفير", "#c7d2fe"], ["Mesosphere", "الميزوسفير", "#ddd6fe"], ["Thermosphere", "الثرموسفير", "#fbcfe8"], ["Exosphere", "الإكسوسفير", "#fde68a"]];
    var v = 0.02, drag = false;
    function alt(x) { for (var i = 0; i < 5; i++) { var b = B[i]; if (x <= b[3]) return b[0] + (x - b[2]) / (b[3] - b[2]) * (b[1] - b[0]); } return 1000; }
    function pos(h) { for (var i = 0; i < 5; i++) { var b = B[i]; if (h <= b[1]) return b[2] + (h - b[0]) / (b[1] - b[0]) * (b[3] - b[2]); } return 1; }
    function layer(h) { return h <= 11 ? 0 : h <= 50 ? 1 : h <= 80 ? 2 : h <= 700 ? 3 : 4; }
    function temp(h) {
      if (h <= 11) return 15 - 6.5 * h; if (h <= 20) return -56.5; if (h <= 47) return -56.5 + (h - 20) * 2; if (h <= 50) return -2.5;
      if (h <= 80) return -2.5 - (h - 50) / 30 * 90.5; if (h <= 700) return -93 + (h - 80) / 620 * 2093; return 2000;
    }
    function geo() { return { bot: S.H * 0.95, h: S.H * 0.9, x: S.W * 0.08, w: S.W * 0.3 }; }
    S.drag({
      down: function (p) { var g = geo(), y = g.bot - v * g.h; if (Math.abs(p.y - y) < 26 && p.x < g.x + g.w + 30) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return; var g = geo(); v = clamp((g.bot - p.y) / g.h, 0, 1);
        var h = alt(v); if (Math.abs(h - 11) < 2.5) v = pos(11); else if (Math.abs(h - 80) < 4) v = pos(80);
      },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.y - (g.bot - v * g.h)) < 26; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), h = alt(v), T = temp(h), ly = layer(h);
      ctx.clearRect(0, 0, W, H);
      B.forEach(function (b, i) { var y0 = g.bot - b[3] * g.h, y1 = g.bot - b[2] * g.h; ctx.fillStyle = NM[i][2]; ctx.fillRect(g.x, y0, g.w, y1 - y0); txt(ctx, E.isAr() ? NM[i][1] : NM[i][0], g.x + g.w / 2, (y0 + y1) / 2, { c: "#0f172a", s: 11 }); txt(ctx, n(b[0]), g.x - 4, y1, { c: C.muted, s: 9, a: "right" }); });
      var oz0 = g.bot - pos(20) * g.h, oz1 = g.bot - pos(40) * g.h; ctx.fillStyle = "rgba(99,102,241,.3)"; ctx.fillRect(g.x, oz1, g.w, oz0 - oz1);
      txt(ctx, t("ozone", "أوزون"), g.x + g.w - 22, (oz0 + oz1) / 2, { c: "#3730a3", s: 9 });
      // temperature graph on same vertical scale
      var gx = g.x + g.w + 20, gw = W * 0.22;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(gx, g.bot); ctx.lineTo(gx, g.bot - g.h); ctx.stroke();
      function tX(x) { return gx + (x <= 20 ? (x + 100) / 120 * gw * 0.55 : gw * 0.55 + Math.min(1, (x - 20) / 1980) * gw * 0.45); }
      ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 2.5; ctx.beginPath();
      for (var k = 0; k <= 200; k++) { var vv = k / 200, hh = alt(vv), X = tX(temp(hh)), Y = g.bot - vv * g.h; if (k) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); }
      ctx.stroke();
      txt(ctx, "T", gx + gw / 2, g.bot - g.h - 4, { c: C.muted, s: 10 });
      var py = g.bot - v * g.h;
      ctx.strokeStyle = "#ef4444"; ctx.setLineDash([3, 3]); ctx.beginPath(); ctx.moveTo(g.x, py); ctx.lineTo(gx + gw, py); ctx.stroke(); ctx.setLineDash([]);
      K.dot(ctx, g.x + 18, py, 9, "#ef4444", "#7f1d1d"); K.dot(ctx, tX(T), py, 5, "#ef4444");
      var rx = W * 0.66, fs = clamp(W / 46, 11, 14);
      txt(ctx, t("Altitude: ", "الارتفاع: ") + n(h < 20 ? r1(h) : Math.round(h)) + " km", rx, H * 0.08, { c: C.ink, s: fs + 2, a: "left" });
      txt(ctx, E.isAr() ? NM[ly][1] : NM[ly][0], rx, H * 0.16, { c: C.ink, s: fs + 1, a: "left" });
      txt(ctx, t("Temperature: ", "درجة الحرارة: ") + n(r1(T)) + " °C", rx, H * 0.25, { c: "#ef4444", s: fs + 1, a: "left" });
      var pr = 1013 * Math.exp(-h / 7.6);
      txt(ctx, t("Pressure: ", "الضغط: ") + (pr > 1 ? n(Math.round(pr)) : pr > 0.001 ? n(pr.toFixed(3)) : "≈ 0") + " mbar", rx, H * 0.33, { c: C.ink, s: fs, a: "left" });
      var note = h <= 11 ? (h >= 10 ? t("tropopause: cooling stops here", "التروبوبوز: يتوقف التبرد هنا") : t("weather, clouds; −6.5°C per km", "طقس وسحب؛ −6.5°م لكل كم")) : h <= 20 ? t("calm, horizontal air: aircraft", "هواء أفقي هادئ: الطائرات") : h <= 40 ? t("ozone absorbs UV: warming", "الأوزون يمتص الأشعة فوق البنفسجية: تدفئة") : h <= 50 ? t("top of the stratosphere", "قمة الستراتوسفير") : h <= 80 ? t("meteors burn up here", "الشهب تحترق هنا") : h <= 550 ? t("ionosphere: radio reflection, aurora", "الأيونوسفير: انعكاس الراديو والشفق") : h <= 700 ? t("very hot thin gas", "غاز رقيق شديد الحرارة") : t("satellites, GPS, internet", "أقمار صناعية وGPS وإنترنت");
      txt(ctx, note, rx, H * 0.42, { c: C.muted, s: fs - 1, a: "left" });
      txt(ctx, "N₂ 78% · O₂ 21% · Ar 0.93% · CO₂ 0.04%", rx, H * 0.55, { c: C.muted, s: fs - 2, a: "left" });
      txt(ctx, t("Escape velocity of Earth ≈ 11.2 km/s", "سرعة الإفلات للأرض ≈ 11.2 كم/ث"), rx, H * 0.63, { c: C.muted, s: fs - 2, a: "left" });
      if (h >= 10 && h <= 13) tick(0);
      if (h >= 20 && h <= 40) tick(1);
      if (T <= -85) tick(2);
      if (h >= 700) tick(3);
    });
  };

  /* =========================================================
     12. sec1_ozone - fire UV photons at O2 and O3 molecules
     ========================================================= */
  L.sec1_ozone = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the UV wavelength, then tap the sky (or the button) to fire photons downward. Short UV splits O₂; free O atoms join O₂ to make O₃; O₃ catches UVB. Try releasing CFCs too.",
      "اضبط الطول الموجي للأشعة فوق البنفسجية ثم اضغط على السماء (أو الزر) لإطلاق فوتونات لأسفل. الأشعة القصيرة تفكك O₂، وذرات O الحرة تتحد مع O₂ لتكوين O₃، والأوزون يصطاد UVB. جرّب إطلاق CFCs أيضًا."));
    var S = K.make(host, 0.62, 400);
    var c = box(host, L._slider(t("UV wavelength", "الطول الموجي"), 100, 400, 5, 220, "nm") +
      '<div class="btn-row"><button type="button" class="btn sm" id="s1zf">☀️ ' + t("Fire 5 photons", "أطلق ٥ فوتونات") + '</button><button type="button" class="btn sm" id="s1zc">🧴 ' + t("Release CFCs", "أطلق CFCs") + '</button><button type="button" class="btn sm ghost" id="s1zr">↺ ' + t("Reset", "إعادة") + "</button></div>");
    var tick = L._goals(host, [t("Split an O₂ molecule (photodissociation).", "فكك جزيء O₂ (تفكك ضوئي)."), t("Build 3 new ozone molecules.", "كوّن ٣ جزيئات أوزون جديدة."),
      t("Let ozone absorb a UVB photon (280 to 310 nm).", "دع الأوزون يمتص فوتون UVB (٢٨٠–٣١٠ نانومتر)."), t("Release CFCs and watch them destroy 2 ozone molecules.", "أطلق CFCs وشاهدها تدمر جزيئي أوزون.")], done);
    var lam = 220, M = [], ph = [], cl = [], made = 0, killed = 0, ground = 0;
    function mk(type) { return { k: type, x: K.rnd(0.05, 0.95), y: K.rnd(0.12, 0.72), vx: K.rnd(-0.03, 0.03), vy: K.rnd(-0.02, 0.02), a: K.rnd(0, 6) }; }
    function reset() { M = []; ph = []; cl = []; for (var i = 0; i < 10; i++) M.push(mk(2)); M.push(mk(3)); M.push(mk(3)); }
    reset();
    sl(c, 0, function (v) { return n(v) + " nm · " + (v < 280 ? "UVC" : v < 315 ? "UVB" : "UVA"); }, function (v) { lam = v; });
    function fire(x) { ph.push({ x: x === undefined ? K.rnd(0.05, 0.95) : x, y: 0.02, l: lam }); }
    c.querySelector("#s1zf").onclick = function () { for (var i = 0; i < 5; i++) fire(); };
    c.querySelector("#s1zc").onclick = function () { cl.push({ x: 0.5, y: 0.95, vx: K.rnd(-0.08, 0.08), vy: -0.06 }, { x: 0.3, y: 0.95, vx: K.rnd(-0.08, 0.08), vy: -0.06 }); };
    c.querySelector("#s1zr").onclick = function () { reset(); made = 0; killed = 0; ground = 0; };
    S.drag({ down: function (p) { if (p.y < S.H * 0.8) { fire(p.x / S.W); return true; } return false; } });
    function colOf(l) { return l < 280 ? "#7c3aed" : l < 315 ? "#c026d3" : "#e879f9"; }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, sc = clamp(Math.min(W, H) / 380, 0.7, 1.3), r = 6 * sc;
      M.forEach(function (m) { m.x += m.vx * dt; m.y += m.vy * dt; if (m.x < 0.03 || m.x > 0.97) m.vx *= -1; if (m.y < 0.1 || m.y > 0.76) m.vy *= -1; m.x = clamp(m.x, 0.03, 0.97); m.y = clamp(m.y, 0.1, 0.76); m.a += dt * 0.5; });
      // free O atoms seek O2
      M.forEach(function (m) {
        if (m.k !== 1) return; var best = null, bd = 1e9;
        M.forEach(function (o) { if (o.k === 2) { var d = Math.hypot((o.x - m.x) * W, (o.y - m.y) * H); if (d < bd) { bd = d; best = o; } } });
        if (best) { m.x += (best.x - m.x) * dt * 0.8; m.y += (best.y - m.y) * dt * 0.8; if (bd < 14 * sc) { best.k = 3; m.dead = 1; made++; } }
      });
      M = M.filter(function (m) { return !m.dead; });
      if (M.filter(function (m) { return m.k === 2; }).length < 4) { var nm = mk(2); nm.y = 0.74; M.push(nm); }
      ph.forEach(function (p) {
        p.y += dt * 0.5;
        M.forEach(function (m) {
          if (p.dead || m.dead) return;
          if (Math.hypot((m.x - p.x) * W, (m.y - p.y) * H) > 13 * sc) return;
          if (p.l < 240 && m.k === 2) { m.k = 1; var o = mk(1); o.x = m.x + 0.03; o.y = m.y; M.push(o); p.dead = 1; tick(0); }
          else if (p.l >= 240 && p.l <= 310 && m.k === 3) { m.k = 2; var o2 = mk(1); o2.x = m.x + 0.03; o2.y = m.y; M.push(o2); p.dead = 1; if (p.l >= 280) tick(2); }
        });
        if (p.y > 0.86) { p.dead = 1; if (p.l >= 280 && p.l < 315) ground++; }
      });
      ph = ph.filter(function (p) { return !p.dead; });
      cl.forEach(function (q) {
        q.x += q.vx * dt; q.y += q.vy * dt; if (q.x < 0.03 || q.x > 0.97) q.vx *= -1; if (q.y < 0.1) q.vy = Math.abs(q.vy); if (q.y > 0.8) q.vy = -Math.abs(q.vy);
        var tgt = null, bd = 1e9; M.forEach(function (m) { if (m.k === 3) { var d = Math.hypot((m.x - q.x) * W, (m.y - q.y) * H); if (d < bd) { bd = d; tgt = m; } } });
        if (tgt) { q.x += (tgt.x - q.x) * dt * 0.5; q.y += (tgt.y - q.y) * dt * 0.5; if (bd < 14 * sc) { tgt.k = 2; killed++; } }
      });
      if (made >= 3) tick(1);
      if (killed >= 2) tick(3);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(129,140,248,.12)"; ctx.fillRect(0, 0, W, H * 0.8);
      ctx.fillStyle = "#86efac"; ctx.fillRect(0, H * 0.86, W, H * 0.14);
      txt(ctx, t("stratosphere", "الستراتوسفير"), W * 0.08, H * 0.05, { c: C.muted, s: 11 });
      M.forEach(function (m) {
        var x = m.x * W, y = m.y * H, k;
        if (m.k === 1) { K.dot(ctx, x, y, r, "#fb7185", "#9f1239"); return; }
        for (k = 0; k < m.k; k++) { var ang = m.a + k * 6.283 / m.k; K.dot(ctx, x + Math.cos(ang) * r * (m.k === 2 ? 0.9 : 1.1), y + Math.sin(ang) * r * (m.k === 2 ? 0.9 : 1.1), r, m.k === 3 ? "#3b82f6" : "#ef4444", "rgba(0,0,0,.3)"); }
      });
      cl.forEach(function (q) { K.dot(ctx, q.x * W, q.y * H, r * 1.1, "#22c55e", "#14532d"); txt(ctx, "Cl", q.x * W, q.y * H, { c: "#fff", s: 8 * sc }); });
      ph.forEach(function (p) { ctx.strokeStyle = colOf(p.l); ctx.lineWidth = 3; ctx.beginPath(); for (var k = 0; k < 6; k++) { var yy = p.y * H - k * 5; ctx.lineTo(p.x * W + Math.sin(k * 1.6) * 4, yy); } ctx.stroke(); });
      var n2 = 0, n3 = 0, n1 = 0; M.forEach(function (m) { if (m.k === 2) n2++; else if (m.k === 3) n3++; else n1++; });
      var fs = clamp(W / 46, 11, 13);
      txt(ctx, "O₂: " + n(n2) + "   O: " + n(n1) + "   O₃: " + n(n3) + "   " + t("new O₃: ", "O₃ جديد: ") + n(made) + "   " + t("destroyed by Cl: ", "دمرها الكلور: ") + n(killed), W / 2, H * 0.83, { c: C.ink, s: fs });
      txt(ctx, t("UVB reaching the ground: ", "UVB الواصل إلى الأرض: ") + n(ground), W / 2, H * 0.93, { c: ground > 3 ? "#b91c1c" : "#14532d", s: fs });
      txt(ctx, lam < 240 ? t("< 240 nm: splits O₂", "أقل من ٢٤٠: يفكك O₂") : lam <= 310 ? t("240–310 nm: absorbed by O₃", "٢٤٠–٣١٠: يمتصه O₃") : t("> 310 nm: passes through", "أكبر من ٣١٠: ينفذ"), W * 0.92, H * 0.05, { c: colOf(lam), s: fs, a: "right" });
    });
  };

  /* =========================================================
     13. sec1_weather - climb a mountain: temperature scales, pressure, humidity
     ========================================================= */
  L.sec1_weather = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the climber up the mountain (or use the ±10 m buttons). Set the temperature at the base and the humidity. Read °C, °F and K, the barometer and how comfortable it feels.",
      "اسحب المتسلق على الجبل (أو استخدم زري ±١٠ م)، واضبط درجة الحرارة عند السفح والرطوبة، واقرأ °م و°ف والكلفن والبارومتر ومدى الراحة."));
    var S = K.make(host, 0.6, 400);
    var c = box(host, L._slider(t("Temperature at the base", "درجة الحرارة عند السفح"), -10, 45, 1, 25, "°C") + L._slider(t("Relative humidity", "الرطوبة النسبية"), 0, 100, 5, 80, "%") +
      '<div class="btn-row"><button type="button" class="btn sm" id="s1wu">▲ +10 m</button><button type="button" class="btn sm" id="s1wd">▼ −10 m</button></div>');
    var tick = L._goals(host, [t("Set the base to 32°C and climb 500 to 560 m (Mount Sinai question).", "اضبط السفح على ٣٢°م واصعد من ٥٠٠ إلى ٥٦٠ م (سؤال جبل موسى)."), t("Find a place where the temperature is 283 K (50°F).", "اكتشف مكانًا درجة حرارته ٢٨٣ كلفن (٥٠°ف)."),
      t("Set the humidity to the comfort zone (40% to 60%).", "اضبط الرطوبة في منطقة الراحة (٤٠٪ إلى ٦٠٪)."), t("Climb until the barometer reads below 700 mmHg.", "اصعد حتى يقرأ البارومتر أقل من ٧٠٠ مم زئبق.")], done);
    var base = 25, hum = 80, h = 0, drag = false, MAXH = 2500;
    sl(c, 0, function (v) { return n(v) + "°C"; }, function (v) { base = v; });
    sl(c, 1, function (v) { return n(v) + "%"; }, function (v) { hum = v; if (v >= 40 && v <= 60) tick(2); });
    c.querySelector("#s1wu").onclick = function () { h = clamp(h + 10, 0, MAXH); };
    c.querySelector("#s1wd").onclick = function () { h = clamp(h - 10, 0, MAXH); };
    function geo() { return { x0: S.W * 0.04, y0: S.H * 0.92, x1: S.W * 0.46, y1: S.H * 0.1 }; }
    function pt(s) { var g = geo(); return { x: g.x0 + (g.x1 - g.x0) * s, y: g.y0 + (g.y1 - g.y0) * s }; }
    S.drag({
      down: function (p) { var q = pt(h / MAXH); if (Math.hypot(p.x - q.x, p.y - q.y) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(), dx = g.x1 - g.x0, dy = g.y1 - g.y0, s = ((p.x - g.x0) * dx + (p.y - g.y0) * dy) / (dx * dx + dy * dy); h = Math.round(clamp(s, 0, 1) * MAXH); },
      up: function () { drag = false; },
      hover: function (p) { var q = pt(h / MAXH); return Math.hypot(p.x - q.x, p.y - q.y) < 30; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo();
      var tc = base - 6.5 * h / 1000, tf = 1.8 * tc + 32, tk = tc + 273, mm = 760 * Math.exp(-h / 8400), pa = mm / 760 * 1.013e5;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(125,211,252,.25)"; ctx.fillRect(0, 0, W * 0.56, H);
      ctx.fillStyle = "#a8a29e"; ctx.beginPath(); ctx.moveTo(g.x0 - 10, g.y0 + 20); ctx.lineTo(g.x1, g.y1 - 4); ctx.lineTo(W * 0.56, g.y0 + 20); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#f8fafc"; ctx.beginPath(); ctx.moveTo(g.x1, g.y1 - 4); ctx.lineTo(g.x1 - 18, g.y1 + 24); ctx.lineTo(g.x1 + 20, g.y1 + 24); ctx.closePath(); ctx.fill();
      [500, 1000, 1500, 2000].forEach(function (m) { var q = pt(m / MAXH); txt(ctx, n(m) + " m", q.x - 6, q.y, { c: "#fff", s: 9, a: "right" }); });
      var q = pt(h / MAXH); K.dot(ctx, q.x, q.y - 10, 9, "#ef4444", "#7f1d1d"); txt(ctx, "🧗", q.x + 14, q.y - 18, { s: 16 });
      // barometer
      var bx = W * 0.52, bt = H * 0.08, bh = H * 0.7, colH = mm / 800 * bh;
      ctx.fillStyle = C.card; ctx.fillRect(bx - 7, bt, 14, bh); ctx.strokeStyle = C.muted; ctx.strokeRect(bx - 7, bt, 14, bh);
      ctx.fillStyle = "#94a3b8"; ctx.fillRect(bx - 5, bt + bh - colH, 10, colH); ctx.fillRect(bx - 20, bt + bh, 40, 10);
      txt(ctx, n(Math.round(mm)), bx, bt - 7, { c: C.ink, s: 10 });
      var rx = W * 0.6, fs = clamp(W / 46, 11, 14);
      txt(ctx, t("Height above base: ", "الارتفاع فوق السفح: ") + n(h) + " m", rx, H * 0.08, { c: C.ink, s: fs + 1, a: "left" });
      txt(ctx, "t = " + n(base) + " − 6.5 × " + n(r2(h / 1000)) + " = " + n(r1(tc)) + " °C", rx, H * 0.17, { c: "#ef4444", s: fs, a: "left" });
      txt(ctx, "= " + n(r1(tf)) + " °F = " + n(r1(tk)) + " K", rx, H * 0.25, { c: C.ink, s: fs, a: "left" });
      txt(ctx, t("Barometer: ", "البارومتر: ") + n(Math.round(mm)) + " mmHg", rx, H * 0.36, { c: C.ink, s: fs, a: "left" });
      txt(ctx, "= " + n(Math.round(pa)) + " N/m² = " + n(Math.round(pa / 100)) + " mbar", rx, H * 0.44, { c: C.muted, s: fs - 1, a: "left" });
      txt(ctx, t("Oxygen per breath: ", "الأكسجين في كل نفس: ") + n(Math.round(mm / 760 * 100)) + t("% of sea level", "٪ من سطح البحر"), rx, H * 0.52, { c: C.muted, s: fs - 1, a: "left" });
      var comf = hum < 40 ? t("dry: sweat evaporates fast, dehydration risk", "جاف: العرق يتبخر بسرعة وخطر الجفاف") : hum > 60 ? t("humid: sweat evaporates slowly, heat stress", "رطب: العرق يتبخر ببطء وإجهاد حراري") : t("comfortable: sweating works well", "مريح: التعرق يعمل بكفاءة");
      txt(ctx, t("Humidity ", "الرطوبة ") + n(hum) + "%", rx, H * 0.64, { c: C.ink, s: fs, a: "left" });
      txt(ctx, comf, rx, H * 0.72, { c: hum >= 40 && hum <= 60 ? "#16a34a" : "#ea580c", s: fs - 2, a: "left" });
      for (var k = 0; k < 4; k++) { var ph = (performance.now() / (300 + hum * 25) + k * 0.25) % 1; K.dot(ctx, rx + 14 + k * 22, H * 0.86 - ph * 22, 3.5, "rgba(59,130,246," + (1 - ph) + ")"); }
      txt(ctx, t("sweat evaporating", "تبخر العرق"), rx + 110, H * 0.84, { c: C.muted, s: 10, a: "left" });
      if (base === 32 && h >= 500 && h <= 560) tick(0);
      if (Math.abs(tk - 283) <= 0.5) tick(1);
      if (mm < 700) tick(3);
    });
  };

  /* =========================================================
     14. sec1_green - greenhouse effect, trees and gas scrubbers
     ========================================================= */
  L.sec1_green = function (host, cfg, done) {
    host.innerHTML = hint(t("Raise or lower CO₂ in the air, plant trees and switch the factory's gas scrubbers on. Yellow arrows are sunlight, red arrows are infrared heat (simple climate model).",
      "ارفع CO₂ في الهواء أو اخفضه، وازرع الأشجار، وشغّل أجهزة غسل الغازات في المصنع. الأسهم الصفراء ضوء الشمس والحمراء أشعة تحت حمراء (نموذج مناخي مبسط)."));
    var S = K.make(host, 0.58, 380);
    var c = box(host, L._slider(t("CO₂ emitted into the air", "CO₂ المنبعث في الهواء"), 280, 800, 10, 420, "ppm") +
      '<div class="btn-row"><button type="button" class="btn sm tg" id="s1gt">🌳 ' + t("Afforestation (trees absorb 60 ppm)", "التشجير (الأشجار تمتص ٦٠ ppm)") + '</button><button type="button" class="btn sm tg" id="s1gs">🏭 ' + t("Gas scrubbers", "أجهزة غسل الغازات") + "</button></div>");
    var tick = L._goals(host, [t("Push warming above 2°C (the Paris limit).", "ارفع الاحترار فوق ٢°م (حد اتفاق باريس)."), t("With CO₂ at 400 ppm or more, plant trees to bring warming below 1.5°C.", "مع CO₂ عند ٤٠٠ ppm أو أكثر، ازرع الأشجار لتخفض الاحترار تحت 1.5°م."),
      t("Switch the scrubbers on to make the rain less acidic.", "شغّل أجهزة غسل الغازات لتقل حمضية المطر.")], done);
    var ppm = 420, trees = false, scr = false, P = [];
    sl(c, 0, function (v) { return n(v) + " ppm"; }, function (v) { ppm = v; });
    c.querySelector("#s1gt").onclick = function () { trees = !trees; this.classList.toggle("on", trees); };
    c.querySelector("#s1gs").onclick = function () { scr = !scr; this.classList.toggle("on", scr); };
    var spawn = 0, shownT = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      var eff = ppm - (trees ? 60 : 0), dT = 3 * Math.log(eff / 280) / Math.LN2, trap = clamp(0.15 + (eff - 280) / 700, 0.15, 0.9), rain = scr ? 5.6 : 4.3;
      shownT += (dT - shownT) * Math.min(1, dt * 2);
      if (dT > 2) tick(0);
      if (ppm >= 400 && trees && dT < 1.5) tick(1);
      if (scr) tick(2);
      spawn += dt; if (spawn > 0.25) { spawn = 0; P.push({ x: K.rnd(0.05, 0.6), y: 0.05, k: "sun" }); }
      ctx.clearRect(0, 0, W, H);
      var gy = H * 0.8, atm = H * 0.26;
      ctx.fillStyle = "rgba(148,163,184," + (0.1 + trap * 0.4) + ")"; ctx.fillRect(0, atm - 10, W * 0.66, 20);
      txt(ctx, t("greenhouse gases", "غازات الصوبة"), W * 0.55, atm - 18, { c: C.muted, s: 10 });
      K.dot(ctx, W * 0.05, H * 0.07, 16, "#facc15");
      ctx.fillStyle = "#86efac"; ctx.fillRect(0, gy, W * 0.66, H - gy);
      ctx.fillStyle = "#64748b"; ctx.fillRect(W * 0.46, gy - 50, 22, 50); ctx.fillRect(W * 0.42, gy - 24, 50, 24);
      ctx.fillStyle = scr ? "rgba(226,232,240,.8)" : "rgba(71,85,105,.75)"; ctx.beginPath(); ctx.arc(W * 0.47, gy - 62, 10, 0, 7); ctx.arc(W * 0.49, gy - 78, 13, 0, 7); ctx.fill();
      if (trees) for (var k = 0; k < 4; k++) txt(ctx, "🌳", W * (0.08 + k * 0.07), gy - 12, { s: 22 });
      ctx.fillStyle = "#e7e5e4"; ctx.fillRect(W * 0.58, gy - 30, 22, 30); txt(ctx, "CaCO₃", W * 0.58 + 11, gy - 36, { c: C.muted, s: 9 });
      for (k = 0; k < 6; k++) { var rx0 = W * (0.52 + k * 0.02), ry = atm + 20 + ((performance.now() / 600 + k * 0.3) % 1) * (gy - atm - 30); ctx.strokeStyle = rain < 5 ? "#a3e635" : "#60a5fa"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(rx0, ry); ctx.lineTo(rx0 - 2, ry + 7); ctx.stroke(); }
      P.forEach(function (p) {
        if (p.k === "sun") { p.y += dt * 0.5; if (p.y * H > gy) { p.k = "ir"; p.vy = -1; } }
        else { p.y += p.vy * dt * 0.35; if (p.vy < 0 && p.y * H < atm && !p.tested) { p.tested = 1; if (Math.random() < trap) p.vy = 1; } if (p.vy > 0 && p.y * H > gy) p.dead = 1; if (p.y < 0) p.dead = 1; }
        var x = p.x * W, y = p.y * H; ctx.strokeStyle = p.k === "sun" ? "#eab308" : "#ef4444"; ctx.lineWidth = 2.5; ctx.beginPath();
        if (p.k === "sun") { ctx.moveTo(x, y - 10); ctx.lineTo(x, y); } else { for (var j = 0; j < 5; j++) ctx.lineTo(x + Math.sin(j * 1.8) * 3, y - p.vy * j * 3); }
        ctx.stroke();
      });
      P = P.filter(function (p) { return !p.dead; }).slice(-60);
      var rx = W * 0.7, fs = clamp(W / 46, 11, 14);
      txt(ctx, t("CO₂ in air: ", "CO₂ في الهواء: ") + n(eff) + " ppm", rx, H * 0.1, { c: C.ink, s: fs + 1, a: "left" });
      txt(ctx, t("Warming: +", "الاحترار: +") + n(r1(Math.max(0, shownT))) + " °C", rx, H * 0.2, { c: dT > 2 ? "#ef4444" : dT > 1.5 ? "#ea580c" : "#16a34a", s: fs + 3, a: "left" });
      bar(ctx, rx, H * 0.26, W * 0.26, 10, dT / 4, dT > 2 ? "#ef4444" : "#f59e0b", C);
      txt(ctx, t("Paris 2015: keep below 2°C", "باريس ٢٠١٥: أقل من ٢°م"), rx, H * 0.35, { c: C.muted, s: fs - 2, a: "left" });
      txt(ctx, t("IR trapped: ", "الأشعة المحبوسة: ") + n(Math.round(trap * 100)) + "%", rx, H * 0.45, { c: C.ink, s: fs, a: "left" });
      txt(ctx, t("Rain pH ≈ ", "pH المطر ≈ ") + n(rain.toFixed(1)), rx, H * 0.57, { c: rain < 5 ? "#ef4444" : "#2563eb", s: fs + 1, a: "left" });
      txt(ctx, scr ? t("scrubbers remove SO₂ and NOx", "أجهزة الغسل تزيل SO₂ وأكاسيد النيتروجين") : "SO₃ + H₂O → H₂SO₄", rx, H * 0.65, { c: C.muted, s: fs - 2, a: "left" });
      txt(ctx, scr ? t("limestone protected", "الحجر الجيري محمي") : t("acid attacks CaCO₃", "الحمض يهاجم CaCO₃"), rx, H * 0.73, { c: scr ? "#16a34a" : "#ef4444", s: fs - 1, a: "left" });
    });
  };

  /* ---------- part names ---------- */
  var NM = {
    sec1_dissolve: ["Dissolving salt simulation", "محاكاة ذوبان الملح"], sec1_ph: ["pH and hydrolysis lab", "معمل pH والتميؤ"],
    sec1_density: ["Hydrometer and density simulation", "محاكاة الهيدروميتر والكثافة"], sec1_calor: ["Specific heat simulation", "محاكاة الحرارة النوعية"],
    sec1_osmo: ["Osmosis U-tube simulation", "محاكاة الأنبوب والأسموزية"], sec1_enzyme: ["Enzyme activity simulation", "محاكاة نشاط الإنزيم"],
    sec1_fish: ["Fish osmoregulation simulation", "محاكاة التنظيم الأسموزي في الأسماك"], sec1_gas: ["Dissolved gases simulation", "محاكاة الغازات الذائبة"],
    sec1_dive: ["Deep-sea dive simulation", "محاكاة الغوص في الأعماق"], sec1_web: ["Food web balance simulation", "محاكاة اتزان الشبكة الغذائية"],
    sec1_layers: ["Atmosphere layers probe", "مسبار طبقات الغلاف الجوي"], sec1_ozone: ["Ozone and UV simulation", "محاكاة الأوزون والأشعة فوق البنفسجية"],
    sec1_weather: ["Mountain weather station", "محطة أرصاد الجبل"], sec1_green: ["Greenhouse and acid rain simulation", "محاكاة الصوبة الزجاجية والمطر الحمضي"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
