/* EduZone Learn v3 - Chemistry, Egyptian Secondary 2 (2nd secondary), Term 1 (2026-2027).
   Follows the Ministry book "Chemistry, For 2nd secondary - First Term":
   Chapter 1 Chemical Calculation, Chapter 2 Atomic Structure,
   Chapter 3 The Periodic Table and Classification of Elements.
   Registers EZ3.SCIG.sec2chem = {units, book} (ids sec2chemu1l1 ...), plus objectives (EZ3.SCI3_OBJ),
   extra quiz items (EZ3.SCI3_EXTRA), diagrams (EZ3.sciDiagrams) and live simulations
   (EZ3.sciLabs.sec2chem_*). Same lesson shape as Prep 2 (sci-prep2.js). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  E.SCIG = E.SCIG || {};
  var G = E.SCIG.sec2chem = { book: { en: "Chemistry, For 2nd Secondary - First Term", ar: "الكيمياء، الصف الثاني الثانوي - الفصل الدراسي الأول" }, units: [] };

  /* ================= CHAPTER 1: CHEMICAL CALCULATION ================= */
  G.units.push({
    id: "sec2chemu1", num: 1, icon: "⚖️", color: "blue",
    title: { en: "Chemical Calculation", ar: "الحسابات الكيميائية" },
    lessons: [
      {
        id: "sec2chemu1l1", icon: "🧮", page: 8,
        title: { en: "The Mole and Molar Mass", ar: "المول والكتلة المولية" },
        idea: {
          official: {
            en: ["In the SI system the amount of a substance is measured in moles. One mole of any substance contains Avogadro's number of particles: " + eq("N<sub>A</sub> = 6.02 × 10²³") + ".",
              "Number of particles = number of moles × Avogadro's number. Example: 2 mol of CH₄ contain 8 mol of H atoms, so " + eq("8 × 6.02 × 10²³ = 48.16 × 10²³") + " H atoms.",
              "The molar mass is the gram atomic or gram molecular mass, in g/mol: the sum of the atomic masses in the formula. " + eq("H₂O = 16 + (2 × 1) = 18 g/mol") + ".",
              "For hydrated copper sulphate: " + eq("CuSO₄·5H₂O = 63.5 + 32 + (4 × 16) + 5(18) = 249.5 g/mol") + ".",
              "Number of moles = mass (g) ÷ molar mass (g/mol). Example: 265 g of Na₂CO₃ (106 g/mol) is " + eq("265 ÷ 106 = 2.5 mol") + ".",
              "Each mole of Na₂CO₃ gives 2 mol of Na⁺ ions in water, so the sample gives 5 mol of Na⁺ = " + eq("5 × 6.02 × 10²³ = 30.1 × 10²³") + " ions."],
            ar: ["في النظام الدولي للوحدات تُقاس كمية المادة بوحدة المول، والمول من أي مادة يحتوي على عدد ثابت من الجسيمات يُسمى عدد أفوجادرو: " + eq("N<sub>A</sub> = 6.02 × 10²³") + ".",
              "عدد الجسيمات = عدد المولات × عدد أفوجادرو. مثال: 2 مول من الميثان CH₄ تحتوي على 8 مول من ذرات الهيدروجين، أي " + eq("8 × 6.02 × 10²³ = 48.16 × 10²³") + " ذرة.",
              "الكتلة المولية هي الكتلة الذرية الجرامية أو الكتلة الجزيئية الجرامية بوحدة جم/مول، وتساوي مجموع الكتل الذرية في الصيغة: " + eq("H₂O = 16 + (2 × 1) = 18 g/mol") + ".",
              "ولبلورات كبريتات النحاس المائية الزرقاء: " + eq("CuSO₄·5H₂O = 63.5 + 32 + (4 × 16) + 5(18) = 249.5 g/mol") + ".",
              "عدد المولات = كتلة المادة (جم) ÷ الكتلة المولية (جم/مول). مثال: 265 جم من كربونات الصوديوم (106 جم/مول) تساوي " + eq("265 ÷ 106 = 2.5 mol") + ".",
              "كل مول من Na₂CO₃ يعطي في الماء 2 مول من أيونات Na⁺، فتعطي العينة 5 مول أيون، أي " + eq("5 × 6.02 × 10²³ = 30.1 × 10²³") + " أيون."]
          },
          story: {
            en: ["Omar works weekends at his uncle's bakery in Shubra. Flour is never counted grain by grain: it is sold by the 50 kg sack.",
              "Chemists do the same with atoms. A mole is the chemist's 'sack': it always holds 6.02 × 10²³ particles.",
              "His uncle knows one sack of flour weighs 50 kg, so 150 kg means 3 sacks. Omar knows one mole of water weighs 18 g, so 36 g means 2 moles.",
              "A tray of 'basbousa' cut into 2 pieces per portion is like Na₂CO₃: every 'portion' (mole) gives 2 sodium 'pieces' (ions).",
              "So Omar writes the bakery rule on the flour bin: moles = mass ÷ molar mass."],
            ar: ["يعمل عمر في عطلة نهاية الأسبوع في مخبز عمه في شبرا، والدقيق لا يُعد حبة حبة بل يُباع بالشيكارة وزنها 50 كجم.",
              "الكيميائيون يفعلون الشيء نفسه مع الذرات؛ فالمول هو «شيكارة» الكيميائي، وتحتوي دائمًا على 6.02 × 10²³ جسيم.",
              "عمه يعرف أن الشيكارة تزن 50 كجم، فـ 150 كجم تساوي 3 شيكارات، وعمر يعرف أن مول الماء يزن 18 جم، فـ 36 جم تساوي 2 مول.",
              "صينية البسبوسة التي تُقطع كل حصة منها إلى قطعتين تشبه Na₂CO₃: كل «حصة» (مول) تعطي «قطعتين» (أيونين) من الصوديوم.",
              "فكتب عمر قاعدة المخبز على صندوق الدقيق: عدد المولات = الكتلة ÷ الكتلة المولية."]
          }
        },
        words: [
          ["Mole", "المول", "The SI unit of amount of substance; it contains 6.02 × 10²³ particles.", "وحدة كمية المادة في النظام الدولي، ويحتوي على 6.02 × 10²³ جسيم."],
          ["Avogadro's number", "عدد أفوجادرو", "The number of particles in one mole: 6.02 × 10²³.", "عدد الجسيمات في المول الواحد: 6.02 × 10²³."],
          ["Molar mass", "الكتلة المولية", "The mass of one mole of a substance in g/mol: the sum of the atomic masses in its formula.", "كتلة مول واحد من المادة بوحدة جم/مول، وتساوي مجموع الكتل الذرية في صيغتها."],
          ["Gram atomic mass", "الكتلة الذرية الجرامية", "The relative atomic mass of an element expressed in grams.", "الكتلة الذرية النسبية للعنصر معبرًا عنها بالجرامات."],
          ["Hydrated salt", "ملح متهدرت", "A crystal that contains water of crystallization, such as CuSO₄·5H₂O.", "بلورة تحتوي على ماء تبلر مثل CuSO₄·5H₂O."],
          ["Mole ion", "المول أيون", "One mole of ions: 6.02 × 10²³ ions.", "مول من الأيونات: 6.02 × 10²³ أيون."]
        ],
        lab: { parts: [{ type: "sec2chem_mole" }, {
          type: "sort",
          prompt: ["Tap a sample, then tap how many moles it is.", "اضغط على العينة، ثم اختر عدد مولاتها."],
          bins: [["h", "½", "0.5 mol", "0.5 مول"], ["o", "1", "1 mol", "1 مول"], ["t", "2", "2 mol", "2 مول"]],
          items: [[["9 g of water H₂O", "9 جم ماء H₂O"], "h"], [["22 g of CO₂", "22 جم CO₂"], "h"], [["16 g of methane CH₄", "16 جم ميثان CH₄"], "o"], [["58.5 g of NaCl", "58.5 جم NaCl"], "o"],
            [["80 g of NaOH", "80 جم NaOH"], "t"], [["212 g of Na₂CO₃", "212 جم Na₂CO₃"], "t"], [["1.204 × 10²⁴ molecules of O₂", "1.204 × 10²⁴ جزيء O₂"], "t"]]
        }] },
        quiz: [
          { q: ["How many hydrogen atoms are in 2 mol of methane CH₄?", "كم عدد ذرات الهيدروجين في 2 مول من الميثان CH₄؟"],
            c: [["4.816 × 10²⁴", "4.816 × 10²⁴"], ["1.204 × 10²⁴", "1.204 × 10²⁴"], ["2.408 × 10²⁴", "2.408 × 10²⁴"], ["3.01 × 10²³", "3.01 × 10²³"]],
            off: ["2 mol CH₄ × 4 = 8 mol H atoms; " + eq("8 × 6.02 × 10²³ = 4.816 × 10²⁴") + ".", "2 مول CH₄ × 4 = 8 مول ذرات H؛ " + eq("8 × 6.02 × 10²³ = 4.816 × 10²⁴") + "."],
            sto: ["Two boxes, four eggs each: count every egg, not just the boxes.", "صندوقان في كل منهما 4 بيضات: عُدّ البيض كله لا الصناديق فقط."] },
          { q: ["The molar mass of CuSO₄·5H₂O is... [Cu = 63.5, S = 32, O = 16, H = 1]", "الكتلة المولية لـ CuSO₄·5H₂O تساوي... [Cu = 63.5، S = 32، O = 16، H = 1]"],
            c: [["249.5 g/mol", "249.5 جم/مول"], ["159.5 g/mol", "159.5 جم/مول"], ["177.5 g/mol", "177.5 جم/مول"], ["244.5 g/mol", "244.5 جم/مول"]],
            off: [eq("63.5 + 32 + 64 + 5 × 18 = 249.5") + ". 159.5 forgets the water of crystallization.", eq("63.5 + 32 + 64 + 5 × 18 = 249.5") + "، والقيمة 159.5 تنسى ماء التبلر."],
            sto: ["The blue crystal carries five water 'passengers'; weigh them too.", "البلورة الزرقاء تحمل خمسة «ركاب» من الماء، فزنهم أيضًا."] },
          { q: ["How many Na⁺ ions come from dissolving 265 g of Na₂CO₃ in water? [Na₂CO₃ = 106 g/mol]", "كم عدد أيونات Na⁺ الناتجة من إذابة 265 جم من Na₂CO₃ في الماء؟ [Na₂CO₃ = 106 جم/مول]"],
            c: [["3.01 × 10²⁴", "3.01 × 10²⁴"], ["1.505 × 10²⁴", "1.505 × 10²⁴"], ["4.515 × 10²⁴", "4.515 × 10²⁴"], ["6.02 × 10²³", "6.02 × 10²³"]],
            off: [eq("265 ÷ 106 = 2.5 mol") + "; Na⁺ = 2 × 2.5 = 5 mol; " + eq("5 × 6.02 × 10²³ = 3.01 × 10²⁴") + ".", eq("265 ÷ 106 = 2.5 mol") + "؛ Na⁺ = 2 × 2.5 = 5 مول؛ " + eq("5 × 6.02 × 10²³ = 3.01 × 10²⁴") + "."],
            sto: ["Each portion of basbousa gives two pieces: 2.5 portions give 5 pieces.", "كل حصة بسبوسة تعطي قطعتين: 2.5 حصة تعطي 5 قطع."] },
          { q: ["Which has the smallest molar mass? [H = 1, O = 16, C = 12, Cl = 35.5]", "أي مما يلي له أصغر كتلة مولية؟ [H = 1، O = 16، C = 12، Cl = 35.5]"],
            c: [["Methane CH₄", "الميثان CH₄"], ["Water H₂O", "الماء H₂O"], ["Carbon dioxide CO₂", "ثاني أكسيد الكربون CO₂"], ["Hydrogen chloride HCl", "كلوريد الهيدروجين HCl"]],
            off: ["CH₄ = 16, H₂O = 18, HCl = 36.5, CO₂ = 44 g/mol.", "CH₄ = 16، H₂O = 18، HCl = 36.5، CO₂ = 44 جم/مول."],
            sto: ["Methane is the lightest gas in the kitchen pipe.", "الميثان هو أخف غاز في ماسورة المطبخ."] },
          { q: ["What is the mass of 0.2 mol of carbon? [C = 12]", "ما كتلة 0.2 مول من الكربون؟ [C = 12]"],
            c: [["2.4 g", "2.4 جم"], ["0.2 g", "0.2 جم"], ["60 g", "60 جم"], ["24 g", "24 جم"]],
            off: ["Mass = moles × molar mass = " + eq("0.2 × 12 = 2.4 g") + ". 60 g comes from dividing instead of multiplying.", "الكتلة = عدد المولات × الكتلة المولية = " + eq("0.2 × 12 = 2.4 g") + "، و60 جم تنتج من القسمة بدل الضرب."],
            sto: ["A fifth of a 12 g 'sack' is 2.4 g.", "خُمس «شيكارة» وزنها 12 جم يساوي 2.4 جم."] },
          { q: ["How many ions are in 16 g of anhydrous CuSO₄? [CuSO₄ = 159.5 g/mol]", "كم عدد الأيونات في 16 جم من CuSO₄ اللامائية؟ [CuSO₄ = 159.5 جم/مول]"],
            c: [["1.2 × 10²³", "1.2 × 10²³"], ["3.61 × 10²³", "3.61 × 10²³"], ["1.2 × 10²⁴", "1.2 × 10²⁴"], ["6.04 × 10²²", "6.04 × 10²²"]],
            off: [eq("16 ÷ 159.5 ≈ 0.1 mol") + "; CuSO₄ → Cu²⁺ + SO₄²⁻ gives 2 ions, so " + eq("0.2 × 6.02 × 10²³ ≈ 1.2 × 10²³") + ".", eq("16 ÷ 159.5 ≈ 0.1 mol") + "؛ CuSO₄ → Cu²⁺ + SO₄²⁻ تعطي أيونين، إذن " + eq("0.2 × 6.02 × 10²³ ≈ 1.2 × 10²³") + "."],
            sto: ["Each formula unit splits into two dancers: one Cu²⁺ and one SO₄²⁻.", "كل وحدة صيغة تنفصل إلى راقصين: Cu²⁺ وSO₄²⁻."] },
          { q: ["How many molecules are in 4.4 g of CO₂? [C = 12, O = 16]", "كم عدد الجزيئات في 4.4 جم من CO₂؟ [C = 12، O = 16]"],
            c: [["6.02 × 10²²", "6.02 × 10²²"], ["6.02 × 10²³", "6.02 × 10²³"], ["1.806 × 10²³", "1.806 × 10²³"], ["2.65 × 10²⁴", "2.65 × 10²⁴"]],
            off: [eq("4.4 ÷ 44 = 0.1 mol") + "; " + eq("0.1 × 6.02 × 10²³ = 6.02 × 10²²") + ". 1.806 × 10²³ counts atoms, not molecules.", eq("4.4 ÷ 44 = 0.1 mol") + "؛ " + eq("0.1 × 6.02 × 10²³ = 6.02 × 10²²") + "، و1.806 × 10²³ هو عدد الذرات لا الجزيئات."],
            sto: ["A tenth of a sack still holds billions of billions of molecules.", "عُشر الشيكارة ما زال يحتوي على مليارات المليارات من الجزيئات."] }
        ]
      },
      {
        id: "sec2chemu1l2", icon: "🎈", page: 9,
        title: { en: "Molar Volume of Gases", ar: "الحجم المولاري للغازات" },
        idea: {
          official: {
            en: ["Avogadro's law: one mole of any gas occupies the same volume under the same conditions of pressure and temperature.",
              "At STP (0°C = 273 K and 1 atm = 760 mmHg) one mole of any gas occupies 22.4 L. At rtp (25°C = 298 K and 1 atm) it occupies 24 L.",
              "Avogadro's postulate: equal volumes of different gases under the same conditions contain the same number of molecules. 22.4 L of O₂, N₂ or H₂ at STP all hold 6.02 × 10²³ molecules, though their masses are 32, 28 and 2 g.",
              "Number of moles of a gas = " + eq("volume (L) ÷ molar volume") + ".",
              "Example: 1.6 g of CH₄ is " + eq("1.6 ÷ 16 = 0.1 mol") + ", so it occupies " + eq("0.1 × 22.4 = 2.24 L") + " at STP and " + eq("0.1 × 24 = 2.4 L") + " at rtp."],
            ar: ["قانون أفوجادرو: المول الواحد من أي غاز يشغل الحجم نفسه تحت الظروف نفسها من الضغط ودرجة الحرارة.",
              "في الظروف القياسية STP (صفر°س = 273 كلفن، و1 ض.ج = 760 مم زئبق) يشغل المول من أي غاز 22.4 لتر، وفي ظروف الغرفة rtp (25°س = 298 كلفن، و1 ض.ج) يشغل 24 لترًا.",
              "فرض أفوجادرو: الحجوم المتساوية من الغازات المختلفة تحت الظروف نفسها تحتوي على أعداد متساوية من الجزيئات؛ فـ 22.4 لتر من O₂ أو N₂ أو H₂ في STP تحتوي كلها على 6.02 × 10²³ جزيء رغم أن كتلها 32 و28 و2 جم.",
              "عدد مولات الغاز = " + eq("volume (L) ÷ molar volume") + ".",
              "مثال: 1.6 جم من الميثان تساوي " + eq("1.6 ÷ 16 = 0.1 mol") + "، فتشغل " + eq("0.1 × 22.4 = 2.24 L") + " في STP و" + eq("0.1 × 24 = 2.4 L") + " في rtp."]
          },
          story: {
            en: ["Salma is filling balloons for her brother's birthday in Alexandria.",
              "Her helium balloon and her dad's air balloon are the same size, so by Avogadro they hold the same number of particles, even though the helium one floats away.",
              "Mass is different, count is the same: a mole of hydrogen is 2 g and a mole of CO₂ is 44 g, but both fill 24 L in the warm room.",
              "In the cold fridge (closer to 0°C) the same mole would shrink to about 22.4 L.",
              "Salma smiles: 'For gases, I can count molecules with a measuring jug.'"],
            ar: ["سلمى تنفخ البالونات لعيد ميلاد أخيها في الإسكندرية.",
              "بالونها المملوء بالهيليوم وبالون أبيها المملوء بالهواء لهما الحجم نفسه، فهما حسب أفوجادرو يحتويان على العدد نفسه من الجسيمات رغم أن بالون الهيليوم يطير.",
              "الكتلة مختلفة والعدد واحد: مول الهيدروجين 2 جم ومول ثاني أكسيد الكربون 44 جم، لكن كليهما يملأ 24 لترًا في الغرفة الدافئة.",
              "وفي الثلاجة الباردة (قرب صفر°س) ينكمش المول نفسه إلى نحو 22.4 لتر.",
              "تبتسم سلمى: «في الغازات أستطيع عدّ الجزيئات بالكوب المدرج!»"]
          }
        },
        words: [
          ["Avogadro's law", "قانون أفوجادرو", "One mole of any gas occupies the same volume under the same conditions of pressure and temperature.", "المول من أي غاز يشغل الحجم نفسه تحت الظروف نفسها من الضغط ودرجة الحرارة."],
          ["Molar volume", "الحجم المولاري", "The volume of one mole of a gas: 22.4 L at STP or 24 L at rtp.", "حجم مول واحد من الغاز: 22.4 لتر في STP أو 24 لترًا في rtp."],
          ["STP", "الظروف القياسية (STP)", "Standard temperature and pressure: 0°C (273 K) and 1 atm (760 mmHg).", "درجة الحرارة والضغط القياسيان: صفر°س (273 كلفن) و1 ض.ج (760 مم زئبق)."],
          ["rtp", "ظروف الغرفة (rtp)", "Room temperature and pressure: 25°C (298 K) and 1 atm.", "درجة حرارة الغرفة والضغط المعتاد: 25°س (298 كلفن) و1 ض.ج."],
          ["Avogadro's postulate", "فرض أفوجادرو", "Equal volumes of gases under the same conditions contain equal numbers of molecules.", "الحجوم المتساوية من الغازات تحت الظروف نفسها تحتوي على أعداد متساوية من الجزيئات."]
        ],
        lab: { parts: [{ type: "sec2chem_gas" }, {
          type: "sort",
          prompt: ["Tap a gas sample (at STP), then tap its volume.", "اضغط على عينة الغاز (في STP)، ثم اختر حجمها."],
          bins: [["a", "🎈", "11.2 L", "11.2 لتر"], ["b", "🎈🎈", "22.4 L", "22.4 لتر"], ["c", "🎈🎈🎈🎈", "44.8 L", "44.8 لتر"]],
          items: [[["1 g of H₂", "1 جم H₂"], "a"], [["16 g of O₂", "16 جم O₂"], "a"], [["28 g of N₂", "28 جم N₂"], "b"], [["44 g of CO₂", "44 جم CO₂"], "b"], [["4 g of H₂", "4 جم H₂"], "c"], [["32 g of CH₄", "32 جم CH₄"], "c"]]
        }] },
        quiz: [
          { q: ["What volume does 1.6 g of CH₄ occupy at STP? [C = 12, H = 1]", "ما الحجم الذي تشغله 1.6 جم من CH₄ في STP؟ [C = 12، H = 1]"],
            c: [["2.24 L", "2.24 لتر"], ["2.4 L", "2.4 لتر"], ["22.4 L", "22.4 لتر"], ["35.84 L", "35.84 لتر"]],
            off: [eq("1.6 ÷ 16 = 0.1 mol") + "; " + eq("0.1 × 22.4 = 2.24 L") + ". 2.4 L is the answer at rtp.", eq("1.6 ÷ 16 = 0.1 mol") + "؛ " + eq("0.1 × 22.4 = 2.24 L") + "، و2.4 لتر هي الإجابة في rtp."],
            sto: ["First turn grams into moles, then moles into litres.", "حوّل الجرامات إلى مولات أولًا ثم المولات إلى لترات."] },
          { q: ["What is the volume of 0.25 mol of N₂ at rtp?", "ما حجم 0.25 مول من N₂ في rtp؟"],
            c: [["6 L", "6 لتر"], ["5.6 L", "5.6 لتر"], ["24 L", "24 لترًا"], ["96 L", "96 لترًا"]],
            off: [eq("0.25 × 24 = 6 L") + ". 5.6 L would be at STP (0.25 × 22.4).", eq("0.25 × 24 = 6 L") + "، و5.6 لتر تكون في STP (0.25 × 22.4)."],
            sto: ["A quarter of a 24 L balloon is 6 L.", "ربع بالون حجمه 24 لترًا يساوي 6 لترات."] },
          { q: ["Each of the following represents 0.25 mol of N₂ at rtp EXCEPT... [N = 14]", "كل مما يلي يمثل 0.25 مول من N₂ في rtp ما عدا... [N = 14]"],
            c: [["5.6 L", "5.6 لتر"], ["0.5 mol of atoms", "0.5 مول ذرات"], ["7 g", "7 جم"], ["3.01 × 10²³ atoms", "3.01 × 10²³ ذرة"]],
            off: ["At rtp 0.25 mol occupies 6 L, not 5.6 L. 7 g = 0.25 × 28; 0.5 mol of atoms = 3.01 × 10²³ atoms.", "في rtp يشغل 0.25 مول 6 لترات لا 5.6 لتر؛ 7 جم = 0.25 × 28، و0.5 مول ذرات = 3.01 × 10²³ ذرة."],
            sto: ["5.6 L is the right answer to a different question (STP).", "5.6 لتر إجابة صحيحة لسؤال آخر (في STP)."] },
          { q: ["8 g of O₂ contain the same number of atoms as 16 g of element X. The molar mass of X is... [O = 16]", "8 جم من الأكسجين تحتوي على عدد الذرات نفسه الموجود في 16 جم من العنصر X، فتكون الكتلة المولية لـ X..."],
            c: [["32 g/mol", "32 جم/مول"], ["16 g/mol", "16 جم/مول"], ["8 g/mol", "8 جم/مول"], ["4 g/mol", "4 جم/مول"]],
            off: ["8 g O₂ = 0.25 mol molecules = 0.5 mol atoms. X: 16 g = 0.5 mol, so " + eq("M = 16 ÷ 0.5 = 32 g/mol") + ".", "8 جم O₂ = 0.25 مول جزيئات = 0.5 مول ذرات، وX: 16 جم = 0.5 مول، إذن " + eq("M = 16 ÷ 0.5 = 32 g/mol") + "."],
            sto: ["Count atoms, not molecules: each O₂ is a pair of twins.", "عُدّ الذرات لا الجزيئات؛ كل O₂ زوج من التوائم."] },
          { q: ["How many molecules are in 11.2 L of H₂ at STP?", "كم عدد الجزيئات في 11.2 لتر من H₂ في STP؟"],
            c: [["3.01 × 10²³", "3.01 × 10²³"], ["6.02 × 10²³", "6.02 × 10²³"], ["1.204 × 10²⁴", "1.204 × 10²⁴"], ["6.74 × 10²⁴", "6.74 × 10²⁴"]],
            off: [eq("11.2 ÷ 22.4 = 0.5 mol") + "; " + eq("0.5 × 6.02 × 10²³ = 3.01 × 10²³") + ".", eq("11.2 ÷ 22.4 = 0.5 mol") + "؛ " + eq("0.5 × 6.02 × 10²³ = 3.01 × 10²³") + "."],
            sto: ["Half the standard balloon, half Avogadro's crowd.", "نصف البالون القياسي، ونصف حشد أفوجادرو."] },
          { q: ["What is the mass of 48 L of CO₂ at rtp? [C = 12, O = 16]", "ما كتلة 48 لترًا من CO₂ في rtp؟ [C = 12، O = 16]"],
            c: [["88 g", "88 جم"], ["44 g", "44 جم"], ["94.3 g", "94.3 جم"], ["22 g", "22 جم"]],
            off: [eq("48 ÷ 24 = 2 mol") + "; " + eq("2 × 44 = 88 g") + ". 94.3 g wrongly uses 22.4 L at rtp.", eq("48 ÷ 24 = 2 mol") + "؛ " + eq("2 × 44 = 88 g") + "، و94.3 جم تستخدم 22.4 لتر خطأً في rtp."],
            sto: ["Two room-temperature balloons of CO₂, 44 g each.", "بالونان من CO₂ في حرارة الغرفة، كل منهما 44 جم."] },
          { q: ["22.4 L of H₂ and 22.4 L of O₂ at STP have the same...", "22.4 لتر من H₂ و22.4 لتر من O₂ في STP لهما نفس..."],
            c: [["number of molecules", "عدد الجزيئات"], ["mass", "الكتلة"], ["density", "الكثافة"], ["molar mass", "الكتلة المولية"]],
            off: ["Avogadro's postulate: equal volumes, same conditions, same number of molecules (6.02 × 10²³). Their masses are 2 g and 32 g.", "فرض أفوجادرو: حجوم متساوية في الظروف نفسها تحتوي على العدد نفسه من الجزيئات (6.02 × 10²³)، أما كتلتاهما فـ 2 جم و32 جم."],
            sto: ["Two equal buses: one full of children, one full of wrestlers. Same number of seats.", "حافلتان متساويتان: واحدة مليئة بالأطفال وأخرى بالمصارعين؛ عدد المقاعد واحد."] }
        ]
      },
      {
        id: "sec2chemu1l3", icon: "🧪", page: 11,
        title: { en: "Equations and the Limiting Reactant", ar: "المعادلة الموزونة والمادة المحددة للتفاعل" },
        idea: {
          official: {
            en: ["The balanced symbolic equation gives the mole ratio of reactants and products, so we can calculate masses, moles, particles and gas volumes.",
              "Electrolysis of acidified water: " + eq("2H₂O → 2H₂ + O₂") + ". To make 2.5 mol O₂ we need 5 mol H₂O; to make 2 g H₂ we need " + eq("36 × 2 ÷ 4 = 18 g") + " of water.",
              "Heating KNO₃: " + eq("2KNO₃ → 2KNO₂ + O₂") + ". 5 mol KNO₃ give 2.5 mol O₂ = 56 L at STP or 60 L at rtp.",
              "The limiting reactant is completely consumed first and decides the amount of product. In " + eq("H₂ + F₂ → 2HF") + ", 6 mol H₂ + 4 mol F₂ give 8 mol HF and 2 mol H₂ remain: F₂ is limiting.",
              "To find it, divide the given moles of each reactant by its coefficient; the smaller ratio is the limiting reactant.",
              "Example: 24 L H₂ (1 mol) + 14.4 L O₂ (0.6 mol) at rtp in " + eq("2H₂ + O₂ → 2H₂O") + ": ratios 0.5 and 0.6, so H₂ is limiting; 16 g O₂ react and " + eq("19.2 − 16 = 3.2 g") + " of O₂ remain."],
            ar: ["المعادلة الرمزية الموزونة تعطي النسبة المولية بين المتفاعلات والنواتج، فنحسب منها الكتل وعدد المولات وعدد الجسيمات وحجوم الغازات.",
              "التحليل الكهربي للماء المحمض: " + eq("2H₂O → 2H₂ + O₂") + "؛ لإنتاج 2.5 مول O₂ نحتاج 5 مول ماء، ولإنتاج 2 جم H₂ نحتاج " + eq("36 × 2 ÷ 4 = 18 g") + " من الماء.",
              "تسخين نترات البوتاسيوم: " + eq("2KNO₃ → 2KNO₂ + O₂") + "؛ 5 مول KNO₃ تعطي 2.5 مول O₂ = 56 لترًا في STP أو 60 لترًا في rtp.",
              "المادة المحددة للتفاعل هي التي تُستهلك كليًا أولًا وتحدد كمية الناتج. في " + eq("H₂ + F₂ → 2HF") + "، 6 مول H₂ مع 4 مول F₂ تعطي 8 مول HF ويتبقى 2 مول H₂، فالفلور هو المادة المحددة.",
              "لتحديدها نقسم عدد المولات المعطاة لكل متفاعل على معامله في المعادلة الموزونة، والنسبة الأصغر هي المادة المحددة للتفاعل.",
              "مثال: 24 لتر H₂ (1 مول) مع 14.4 لتر O₂ (0.6 مول) في rtp في " + eq("2H₂ + O₂ → 2H₂O") + ": النسبتان 0.5 و0.6، فالهيدروجين هو المحدد، ويتفاعل 16 جم O₂ ويتبقى " + eq("19.2 − 16 = 3.2 g") + "."]
          },
          story: {
            en: ["Youssef is making 'ta'meya' sandwiches for his football team in Mansoura. Each sandwich needs 1 loaf and 2 discs of ta'meya.",
              "He has 10 loaves and 16 discs. Loaves allow 10 sandwiches, discs allow only 8.",
              "So the ta'meya is the limiting reactant: after 8 sandwiches it runs out, and 2 loaves are left over (excess).",
              "His recipe is the balanced equation: 1 loaf + 2 discs → 1 sandwich. Dividing what he has by the recipe number tells him what runs out first.",
              "Next time he buys ta'meya by the ratio, so nothing is wasted."],
            ar: ["يوسف يجهز سندويتشات طعمية لفريق الكرة في المنصورة، وكل سندويتش يحتاج رغيفًا واحدًا وقرصين من الطعمية.",
              "معه 10 أرغفة و16 قرص طعمية؛ الأرغفة تكفي 10 سندويتشات، والطعمية تكفي 8 فقط.",
              "إذن الطعمية هي المادة المحددة للتفاعل: بعد 8 سندويتشات تنفد، ويتبقى رغيفان زائدان.",
              "وصفته هي المعادلة الموزونة: رغيف + قرصان ← سندويتش، وقسمة ما معه على رقم الوصفة تخبره بما سينفد أولًا.",
              "في المرة القادمة يشتري الطعمية بالنسبة الصحيحة حتى لا يضيع شيء."]
          }
        },
        words: [
          ["Balanced equation", "المعادلة الموزونة", "A symbolic equation with equal numbers of each atom on both sides; its coefficients give mole ratios.", "معادلة رمزية يتساوى فيها عدد ذرات كل عنصر في الطرفين، ومعاملاتها تعطي النسب المولية."],
          ["Mole ratio", "النسبة المولية", "The ratio between the coefficients of substances in a balanced equation.", "النسبة بين معاملات المواد في المعادلة الموزونة."],
          ["Limiting reactant", "المادة المحددة للتفاعل", "The reactant completely consumed first; it stops the reaction and decides the amount of product.", "المادة التي تُستهلك كليًا أولًا، فتوقف التفاعل وتحدد كمية الناتج."],
          ["Excess reactant", "المادة الزائدة", "The reactant left unreacted when the limiting reactant is used up.", "المادة المتبقية دون تفاعل بعد استهلاك المادة المحددة."],
          ["Electrolysis of water", "التحليل الكهربي للماء", "Decomposing acidified water by electricity: 2H₂O → 2H₂ + O₂.", "تفكيك الماء المحمض بالكهرباء: 2H₂O → 2H₂ + O₂."]
        ],
        lab: { parts: [{ type: "sec2chem_limit" }] },
        quiz: [
          { q: ["In " + eq("2H₂O → 2H₂ + O₂") + ", how many moles of water are needed to produce 2.5 mol of O₂?", "في " + eq("2H₂O → 2H₂ + O₂") + "، كم مول ماء يلزم لإنتاج 2.5 مول O₂؟"],
            c: [["5 mol", "5 مول"], ["2.5 mol", "2.5 مول"], ["1.25 mol", "1.25 مول"], ["10 mol", "10 مول"]],
            off: ["2 mol H₂O : 1 mol O₂, so " + eq("2.5 × 2 = 5 mol") + ".", "2 مول H₂O : 1 مول O₂، إذن " + eq("2.5 × 2 = 5 mol") + "."],
            sto: ["Two waters for every oxygen, like two eggs per omelette.", "ماءان لكل أكسجين، مثل بيضتين لكل عجة."] },
          { q: ["In the same reaction, what mass of water gives 2 g of H₂? [H = 1, O = 16]", "في التفاعل نفسه، ما كتلة الماء التي تعطي 2 جم H₂؟ [H = 1، O = 16]"],
            c: [["18 g", "18 جم"], ["36 g", "36 جم"], ["9 g", "9 جم"], ["4 g", "4 جم"]],
            off: ["36 g H₂O → 4 g H₂, so " + eq("36 × 2 ÷ 4 = 18 g") + ".", "36 جم H₂O ← 4 جم H₂، إذن " + eq("36 × 2 ÷ 4 = 18 g") + "."],
            sto: ["Half the hydrogen needs half the water.", "نصف الهيدروجين يحتاج نصف الماء."] },
          { q: ["What volume of O₂ at STP comes from heating 5 mol of KNO₃? " + eq("2KNO₃ → 2KNO₂ + O₂"), "ما حجم O₂ في STP الناتج من تسخين 5 مول KNO₃؟ " + eq("2KNO₃ → 2KNO₂ + O₂")],
            c: [["56 L", "56 لترًا"], ["112 L", "112 لترًا"], ["60 L", "60 لترًا"], ["28 L", "28 لترًا"]],
            off: [eq("5 ÷ 2 = 2.5 mol O₂") + "; " + eq("2.5 × 22.4 = 56 L") + ". 60 L is at rtp; 112 L ignores the 2 : 1 ratio.", eq("5 ÷ 2 = 2.5 mol O₂") + "؛ " + eq("2.5 × 22.4 = 56 L") + "، و60 لترًا في rtp، و112 لترًا تتجاهل النسبة 2 : 1."],
            sto: ["Two nitrate 'tickets' buy one oxygen balloon.", "كل «تذكرتين» من النترات تشتري بالون أكسجين واحدًا."] },
          { q: ["6 mol H₂ are mixed with 4 mol F₂: " + eq("H₂ + F₂ → 2HF") + ". Which is limiting and how much HF forms?", "خُلط 6 مول H₂ مع 4 مول F₂: " + eq("H₂ + F₂ → 2HF") + ". أيهما المحدد وكم يتكون من HF؟"],
            c: [["F₂; 8 mol HF", "F₂؛ 8 مول HF"], ["H₂; 12 mol HF", "H₂؛ 12 مول HF"], ["F₂; 4 mol HF", "F₂؛ 4 مول HF"], ["H₂; 8 mol HF", "H₂؛ 8 مول HF"]],
            off: ["Ratios: H₂ 6/1 = 6, F₂ 4/1 = 4, so F₂ is limiting; 4 mol F₂ → 8 mol HF; 2 mol H₂ remain.", "النسب: H₂ = 6/1 = 6، وF₂ = 4/1 = 4، فالفلور هو المحدد؛ 4 مول F₂ ← 8 مول HF ويتبقى 2 مول H₂."],
            sto: ["Fluorine runs out first, like the ta'meya.", "الفلور ينفد أولًا مثل الطعمية."] },
          { q: ["24 L H₂ and 14.4 L O₂ (rtp) react: " + eq("2H₂ + O₂ → 2H₂O") + ". What mass of the excess reactant remains? [O = 16]", "تفاعل 24 لتر H₂ مع 14.4 لتر O₂ (rtp): " + eq("2H₂ + O₂ → 2H₂O") + ". ما كتلة المادة الزائدة المتبقية؟ [O = 16]"],
            c: [["3.2 g of O₂", "3.2 جم O₂"], ["19.2 g of O₂", "19.2 جم O₂"], ["16 g of O₂", "16 جم O₂"], ["0.2 g of H₂", "0.2 جم H₂"]],
            off: ["H₂ 1 mol (ratio 0.5), O₂ 0.6 mol (ratio 0.6): H₂ limiting. O₂ used = 0.5 mol = 16 g; given 19.2 g; left " + eq("3.2 g") + ".", "H₂ = 1 مول (النسبة 0.5)، وO₂ = 0.6 مول (النسبة 0.6): الهيدروجين محدد. O₂ المستهلك = 0.5 مول = 16 جم من 19.2 جم، والمتبقي " + eq("3.2 g") + "."],
            sto: ["Compare ratios, not raw litres: more litres of H₂ still ran out first.", "قارن النسب لا اللترات: لترات الهيدروجين الأكثر نفدت أولًا."] },
          { q: ["What volume of H₂ at STP forms when 4.6 g Na reacts with excess water? " + eq("2Na + 2H₂O → 2NaOH + H₂") + " [Na = 23]", "ما حجم H₂ في STP عند تفاعل 4.6 جم صوديوم مع وفرة من الماء؟ " + eq("2Na + 2H₂O → 2NaOH + H₂") + " [Na = 23]"],
            c: [["2.24 L", "2.24 لتر"], ["4.48 L", "4.48 لتر"], ["1.12 L", "1.12 لتر"], ["11.2 L", "11.2 لتر"]],
            off: [eq("4.6 ÷ 23 = 0.2 mol Na") + " → 0.1 mol H₂ → " + eq("0.1 × 22.4 = 2.24 L") + ".", eq("4.6 ÷ 23 = 0.2 mol Na") + " ← 0.1 مول H₂ ← " + eq("0.1 × 22.4 = 2.24 L") + "."],
            sto: ["Two sodium atoms share one hydrogen molecule.", "كل ذرتي صوديوم تشتركان في جزيء هيدروجين واحد."] },
          { q: ["From " + eq("2NH₃ + NaClO → N₂H₄ + NaCl + H₂O") + ", what forms from 34 g of NH₃? [N = 14, H = 1]", "من " + eq("2NH₃ + NaClO → N₂H₄ + NaCl + H₂O") + "، ما الناتج من 34 جم NH₃؟ [N = 14، H = 1]"],
            c: [["1 mol / 32 g of N₂H₄", "1 مول / 32 جم N₂H₄"], ["2 mol / 64 g of N₂H₄", "2 مول / 64 جم N₂H₄"], ["1 mol / 18 g of N₂H₄", "1 مول / 18 جم N₂H₄"], ["2 mol / 36 g of N₂H₄", "2 مول / 36 جم N₂H₄"]],
            off: [eq("34 ÷ 17 = 2 mol NH₃") + " → 1 mol N₂H₄; " + eq("N₂H₄ = 28 + 4 = 32 g") + ".", eq("34 ÷ 17 = 2 mol NH₃") + " ← 1 مول N₂H₄؛ " + eq("N₂H₄ = 28 + 4 = 32 g") + "."],
            sto: ["Two ammonias pair up to build one hydrazine.", "كل جزيئي نشادر يتحدان لبناء جزيء هيدرازين واحد."] },
          { q: ["1.33 g of P₄ is added to 5 g of O₂: " + eq("P₄ + 5O₂ → P₄O₁₀") + ". What mass of P₄O₁₀ forms? [P = 31, O = 16]", "أُضيف 1.33 جم P₄ إلى 5 جم O₂: " + eq("P₄ + 5O₂ → P₄O₁₀") + ". ما كتلة P₄O₁₀ الناتجة؟ [P = 31، O = 16]"],
            c: [["3.05 g", "3.05 جم"], ["8.88 g", "8.88 جم"], ["6.33 g", "6.33 جم"], ["1.52 g", "1.52 جم"]],
            off: ["P₄: 1.33/124 = 0.0107 mol (ratio 0.0107); O₂: 5/32 = 0.156 mol (ratio 0.031). P₄ limits: " + eq("0.0107 × 284 ≈ 3.05 g") + ".", "P₄: 1.33/124 = 0.0107 مول (النسبة 0.0107)، وO₂: 5/32 = 0.156 مول (النسبة 0.031)؛ الفوسفور محدد: " + eq("0.0107 × 284 ≈ 3.05 g") + "."],
            sto: ["8.88 g would need far more phosphorus than the flask holds.", "8.88 جم تحتاج فوسفورًا أكثر بكثير مما في الدورق."] }
        ]
      },
      {
        id: "sec2chemu1l4", icon: "🔬", page: 14,
        title: { en: "Empirical and Molecular Formulas", ar: "الصيغة الأولية والصيغة الجزيئية" },
        idea: {
          official: {
            en: ["The empirical formula is the simplest whole-number ratio of atoms; the molecular formula gives the actual types and numbers of atoms; the structural formula also shows how they are bonded.",
              "Ethane: empirical CH₃, molecular C₂H₆. Hydrogen peroxide: HO and H₂O₂. Hydrazine: NH₂ and N₂H₄.",
              "From percentages (masses in 100 g): find the moles of each element, then divide by the smallest. 85.63% C, 14.37% H: " + eq("C = 85.63 ÷ 12 = 7.136, H = 14.37 ÷ 1 = 14.37") + " → ratio 1 : 2 → CH₂.",
              "Number of empirical units: " + eq("n = molar mass of compound ÷ molar mass of empirical formula") + ". If M = 28 g/mol: n = 28 ÷ 14 = 2 → C₂H₄.",
              "83.7% C, M = 86: C 6.975, H 16.3 → 1 : 2.337 → ×3 = C₃H₇ (43 g/mol); n = 86 ÷ 43 = 2 → C₆H₁₄.",
              "From combustion: 88 g CO₂ contain " + eq("12/44 × 88 = 24 g C") + " and 45 g H₂O contain " + eq("2/18 × 45 = 5 g H") + " → C 2 : H 5 → C₂H₅; with M = 58, n = 2 → C₄H₁₀."],
            ar: ["الصيغة الأولية تعبر عن أبسط نسبة عددية صحيحة بين الذرات، والصيغة الجزيئية تعبر عن أنواع الذرات وأعدادها الفعلية، والصيغة البنائية توضح أيضًا طريقة ارتباطها.",
              "الإيثان: صيغته الأولية CH₃ والجزيئية C₂H₆، وفوق أكسيد الهيدروجين: HO وH₂O₂، والهيدرازين: NH₂ وN₂H₄.",
              "من النسب المئوية (كتل في 100 جم) نحسب عدد مولات كل عنصر ثم نقسم على أصغرها. 85.63% C و14.37% H: " + eq("C = 85.63 ÷ 12 = 7.136, H = 14.37 ÷ 1 = 14.37") + " ← النسبة 1 : 2 ← CH₂.",
              "عدد وحدات الصيغة الأولية: " + eq("n = molar mass of compound ÷ molar mass of empirical formula") + "، فإذا كانت M = 28 جم/مول: n = 28 ÷ 14 = 2 ← C₂H₄.",
              "83.7% C و M = 86: C = 6.975 وH = 16.3 ← 1 : 2.337 ← بالضرب × 3 = C₃H₇ (43 جم/مول)، n = 86 ÷ 43 = 2 ← C₆H₁₄.",
              "من الاحتراق: 88 جم CO₂ تحتوي على " + eq("12/44 × 88 = 24 g C") + "، و45 جم H₂O تحتوي على " + eq("2/18 × 45 = 5 g H") + " ← C 2 : H 5 ← C₂H₅، ومع M = 58 تكون n = 2 ← C₄H₁₀."]
          },
          story: {
            en: ["Mariam is reading the label of a camping gas cylinder at a shop in Hurghada: 'butane'.",
              "Her chemistry teacher gave the class a puzzle: burning the gas gave 88 g of CO₂ and 45 g of water.",
              "Like a detective, Mariam traces where every atom went: carbon ended up in CO₂, hydrogen in water.",
              "She finds 2 C for every 5 H, the empirical 'fingerprint' C₂H₅, then uses the molar mass 58 to see the real molecule is twice that: C₄H₁₀.",
              "The cylinder label agrees: butane, C₄H₁₀."],
            ar: ["تقرأ مريم ملصق أسطوانة غاز للتخييم في محل بالغردقة: «بيوتان».",
              "أعطت معلمة الكيمياء الفصل لغزًا: احتراق الغاز أعطى 88 جم CO₂ و45 جم ماء.",
              "كالمحققة تتبعت مريم أين ذهبت كل ذرة: الكربون انتهى في CO₂، والهيدروجين في الماء.",
              "وجدت 2 كربون لكل 5 هيدروجين، أي «بصمة» الصيغة الأولية C₂H₅، ثم استخدمت الكتلة المولية 58 لترى أن الجزيء الحقيقي ضعفها: C₄H₁₀.",
              "والملصق يوافقها: البيوتان C₄H₁₀."]
          }
        },
        words: [
          ["Empirical formula", "الصيغة الأولية", "The simplest whole-number ratio of the atoms or ions of the elements in a compound.", "أبسط نسبة عددية صحيحة بين ذرات أو أيونات العناصر المكونة للمركب."],
          ["Molecular formula", "الصيغة الجزيئية", "The types and actual numbers of atoms or ions that make up the molecule.", "أنواع وأعداد الذرات أو الأيونات الفعلية المكونة للجزيء."],
          ["Structural formula", "الصيغة البنائية", "Shows the types and numbers of atoms and how they are bonded together.", "توضح أنواع الذرات وأعدادها وطريقة ارتباطها ببعضها."],
          ["Mass percentage", "النسبة المئوية الكتلية", "The mass of an element in every 100 g of the compound.", "كتلة العنصر في كل 100 جم من المركب."],
          ["Number of empirical units (n)", "عدد وحدات الصيغة الأولية (n)", "n = molar mass of the compound ÷ molar mass of the empirical formula.", "n = الكتلة المولية للمركب ÷ الكتلة المولية للصيغة الأولية."],
          ["Hydrocarbon", "هيدروكربون", "A compound made of carbon and hydrogen only.", "مركب يتكون من الكربون والهيدروجين فقط."]
        ],
        lab: { parts: [{ type: "sec2chem_formula" }, {
          type: "sort",
          prompt: ["Tap a molecular formula, then tap its empirical formula.", "اضغط على الصيغة الجزيئية، ثم اختر صيغتها الأولية."],
          bins: [["a", "🧩", "CH₂", "CH₂"], ["b", "🧩", "CH₃", "CH₃"], ["c", "🧩", "HO / NH₂", "HO / NH₂"]],
          items: [["C₂H₄", "a"], ["C₃H₆", "a"], ["C₆H₁₂", "a"], ["C₂H₆", "b"], ["H₂O₂", "c"], ["N₂H₄", "c"]]
        }] },
        quiz: [
          { q: ["A compound contains 85.63% C and 14.37% H. Its empirical formula is... [C = 12, H = 1]", "مركب يحتوي على 85.63% C و14.37% H، صيغته الأولية..."],
            c: [["CH₂", "CH₂"], ["CH", "CH"], ["CH₃", "CH₃"], ["C₂H₅", "C₂H₅"]],
            off: ["C: 85.63/12 = 7.136; H: 14.37/1 = 14.37; divide by 7.136 → 1 : 2 → CH₂.", "C: 85.63/12 = 7.136، وH: 14.37/1 = 14.37، وبالقسمة على 7.136 ← 1 : 2 ← CH₂."],
            sto: ["Divide by the smallest to find the simplest team ratio.", "اقسم على الأصغر لتجد أبسط نسبة في الفريق."] },
          { q: ["If the compound above has a molar mass of 28 g/mol, its molecular formula is...", "إذا كانت الكتلة المولية للمركب السابق 28 جم/مول فصيغته الجزيئية..."],
            c: [["C₂H₄", "C₂H₄"], ["CH₂", "CH₂"], ["C₃H₆", "C₃H₆"], ["C₂H₆", "C₂H₆"]],
            off: ["CH₂ = 14 g/mol; " + eq("n = 28 ÷ 14 = 2") + " → (CH₂)₂ = C₂H₄.", "CH₂ = 14 جم/مول؛ " + eq("n = 28 ÷ 14 = 2") + " ← (CH₂)₂ = C₂H₄."],
            sto: ["Two copies of the fingerprint make the real molecule.", "نسختان من البصمة تصنعان الجزيء الحقيقي."] },
          { q: ["A hydrocarbon has 83.7% C and a molar mass of 86 g/mol. Its molecular formula is...", "هيدروكربون نسبة الكربون فيه 83.7% وكتلته المولية 86 جم/مول، صيغته الجزيئية..."],
            c: [["C₆H₁₄", "C₆H₁₄"], ["C₃H₇", "C₃H₇"], ["C₆H₁₂", "C₆H₁₂"], ["C₅H₁₂", "C₅H₁₂"]],
            off: ["C 6.975 : H 16.3 = 1 : 2.337; ×3 → C₃H₇ (43); " + eq("n = 86 ÷ 43 = 2") + " → C₆H₁₄.", "C 6.975 : H 16.3 = 1 : 2.337؛ × 3 ← C₃H₇ (43)؛ " + eq("n = 86 ÷ 43 = 2") + " ← C₆H₁₄."],
            sto: ["2.337 is close to 2⅓, so multiply by 3 to clear the fraction.", "2.337 قريبة من 2⅓، فاضرب في 3 لتتخلص من الكسر."] },
          { q: ["Burning CₓHᵧ (M = 58) gives 88 g CO₂ and 45 g H₂O. Find x and y.", "احتراق CₓHᵧ (M = 58) أعطى 88 جم CO₂ و45 جم H₂O، أوجد x وy."],
            c: [["x = 4, y = 10", "x = 4، y = 10"], ["x = 2, y = 5", "x = 2، y = 5"], ["x = 2, y = 10", "x = 2، y = 10"], ["x = 4, y = 5", "x = 4، y = 5"]],
            off: ["C = 24 g = 2 mol; H = 5 g = 5 mol → C₂H₅ (29); n = 58 ÷ 29 = 2 → C₄H₁₀.", "C = 24 جم = 2 مول، وH = 5 جم = 5 مول ← C₂H₅ (29)؛ n = 58 ÷ 29 = 2 ← C₄H₁₀."],
            sto: ["The camping gas is butane.", "غاز التخييم هو البيوتان."] },
          { q: ["What mass of carbon is in 88 g of CO₂? [C = 12, O = 16]", "ما كتلة الكربون في 88 جم من CO₂؟"],
            c: [["24 g", "24 جم"], ["12 g", "12 جم"], ["64 g", "64 جم"], ["44 g", "44 جم"]],
            off: [eq("12 ÷ 44 × 88 = 24 g") + "; 64 g is the oxygen.", eq("12 ÷ 44 × 88 = 24 g") + "، و64 جم هي كتلة الأكسجين."],
            sto: ["Carbon is only 12 parts of every 44.", "الكربون 12 جزءًا فقط من كل 44."] },
          { q: ["264 g of Sr reacts completely with 213 g of chlorine. The formula of the compound is... [Sr = 87.6, Cl = 35.5]", "يتفاعل 264 جم سترانشيوم تمامًا مع 213 جم كلور، فتكون صيغة المركب... [Sr = 87.6، Cl = 35.5]"],
            c: [["SrCl₂", "SrCl₂"], ["SrCl", "SrCl"], ["Sr₂Cl", "Sr₂Cl"], ["SrCl₃", "SrCl₃"]],
            off: ["Sr: 264/87.6 ≈ 3 mol; Cl: 213/35.5 = 6 mol → 1 : 2 → SrCl₂.", "Sr: 264/87.6 ≈ 3 مول، وCl: 213/35.5 = 6 مول ← 1 : 2 ← SrCl₂."],
            sto: ["Every strontium grabs two chlorines, like a group 2A metal should.", "كل سترانشيوم يمسك بكلورين كما يليق بفلز من المجموعة 2A."] },
          { q: ["Which compound has the empirical formula NH₂?", "أي مركب صيغته الأولية NH₂؟"],
            c: [["Hydrazine N₂H₄", "الهيدرازين N₂H₄"], ["Ammonia NH₃", "النشادر NH₃"], ["Hydrogen peroxide H₂O₂", "فوق أكسيد الهيدروجين H₂O₂"], ["Ethane C₂H₆", "الإيثان C₂H₆"]],
            off: ["N₂H₄ ÷ 2 = NH₂. H₂O₂ → HO and C₂H₆ → CH₃.", "N₂H₄ ÷ 2 = NH₂، وH₂O₂ ← HO، وC₂H₆ ← CH₃."],
            sto: ["Halve the hydrazine and you get its fingerprint.", "اقسم الهيدرازين على 2 تحصل على بصمته."] }
        ]
      },
      {
        id: "sec2chemu1l5", icon: "🧴", page: 17,
        title: { en: "Molarity and Dilution", ar: "التركيز المولاري والتخفيف" },
        idea: {
          official: {
            en: ["Molarity (molar concentration) is the number of moles of solute per litre of solution: " + eq("M = n ÷ V(L)") + ", in mol/L (M).",
              "Example: 2 g NaOH (40 g/mol) = 0.05 mol in 500 mL: " + eq("M = 0.05 ÷ 0.5 = 0.1 M") + ".",
              "When a solution is diluted with water its volume changes but the amount of solute stays constant, so its concentration decreases.",
              "Dilution law: " + eq("M₁ × V₁ = M₂ × V₂") + " (before dilution = after dilution).",
              "Example: to make 1 L of Na₂CO₃ in which 10 mL contain 0.53 g: 53 g/L = 0.5 mol → 0.5 M. From 1.5 M: " + eq("1.5 × V = 0.5 × 1 → V = 0.33 L") + ", so add " + eq("1 − 0.33 = 0.67 L") + " of water."],
            ar: ["التركيز المولاري (المولارية) هو عدد مولات المذاب في لتر من المحلول: " + eq("M = n ÷ V(L)") + "، ووحدته مول/لتر (M).",
              "مثال: 2 جم NaOH (40 جم/مول) = 0.05 مول في 500 مل: " + eq("M = 0.05 ÷ 0.5 = 0.1 M") + ".",
              "عند تخفيف محلول بالماء يتغير حجمه وتظل كمية المذاب ثابتة، فيقل تركيزه.",
              "قانون التخفيف: " + eq("M₁ × V₁ = M₂ × V₂") + " (قبل التخفيف = بعد التخفيف).",
              "مثال: لتحضير لتر من Na₂CO₃ كل 10 مل منه تحتوي على 0.53 جم: 53 جم/لتر = 0.5 مول ← 0.5 M، ومن محلول 1.5 M: " + eq("1.5 × V = 0.5 × 1 → V = 0.33 L") + "، فنضيف " + eq("1 − 0.33 = 0.67 L") + " ماء."]
          },
          story: {
            en: ["Nour helps her mum prepare 'karkadeh' for Ramadan. The concentrate in the bottle is far too strong to drink.",
              "Her mum pours one glass of concentrate into a jug and fills it to five glasses with cold water.",
              "The amount of hibiscus did not change, only the volume did, so the drink is five times weaker.",
              "Nour writes it like a chemist: strength × volume before = strength × volume after.",
              "That is exactly M₁V₁ = M₂V₂ in the school lab."],
            ar: ["نور تساعد أمها في تحضير الكركديه في رمضان، والمركز في الزجاجة قوي جدًا لا يُشرب.",
              "تصب أمها كوبًا واحدًا من المركز في إبريق ثم تكمله إلى خمسة أكواب بالماء البارد.",
              "كمية الكركديه لم تتغير، تغير الحجم فقط، فأصبح المشروب أضعف خمس مرات.",
              "تكتبها نور ككيميائية: التركيز × الحجم قبل = التركيز × الحجم بعد.",
              "وهذا هو قانون M₁V₁ = M₂V₂ في معمل المدرسة."]
          }
        },
        words: [
          ["Molarity", "المولارية (التركيز المولاري)", "The number of moles of solute per litre of solution (mol/L or M).", "عدد مولات المذاب في لتر من المحلول (مول/لتر أو M)."],
          ["Solute", "المذاب", "The substance dissolved in the solvent.", "المادة التي تذوب في المذيب."],
          ["Solution", "المحلول", "A homogeneous mixture of solute and solvent.", "مخلوط متجانس من المذاب والمذيب."],
          ["Dilution", "التخفيف", "Adding water to a solution: volume increases, amount of solute stays the same, concentration falls.", "إضافة الماء إلى المحلول: يزيد الحجم وتثبت كمية المذاب ويقل التركيز."],
          ["Dilution law", "قانون التخفيف", "M₁V₁ = M₂V₂ (before dilution = after dilution).", "M₁V₁ = M₂V₂ (قبل التخفيف = بعد التخفيف)."]
        ],
        lab: { parts: [{ type: "sec2chem_molarity" }] },
        quiz: [
          { q: ["What is the molarity of 2 g NaOH dissolved to make 500 mL of solution? [Na = 23, O = 16, H = 1]", "ما مولارية محلول ناتج من إذابة 2 جم NaOH لتكوين 500 مل محلول؟"],
            c: [["0.1 M", "0.1 M"], ["0.004 M", "0.004 M"], ["0.05 M", "0.05 M"], ["4 M", "4 M"]],
            off: [eq("2 ÷ 40 = 0.05 mol") + "; " + eq("0.05 ÷ 0.5 = 0.1 M") + ". 0.004 forgets to change mL to L and grams to moles.", eq("2 ÷ 40 = 0.05 mol") + "؛ " + eq("0.05 ÷ 0.5 = 0.1 M") + "، و0.004 تنسى تحويل المل إلى لتر والجرام إلى مول."],
            sto: ["Moles first, litres second.", "المولات أولًا، ثم اللترات."] },
          { q: ["How many moles of NaOH are in 2 L of a 5 M solution?", "كم مول NaOH في 2 لتر من محلول تركيزه 5 M؟"],
            c: [["10 mol", "10 مول"], ["2.5 mol", "2.5 مول"], ["7 mol", "7 مول"], ["0.4 mol", "0.4 مول"]],
            off: [eq("n = M × V = 5 × 2 = 10 mol") + ".", eq("n = M × V = 5 × 2 = 10 mol") + "."],
            sto: ["Five moles in every litre, two litres: ten moles.", "خمسة مولات في كل لتر، ولتران: عشرة مولات."] },
          { q: ["240 cm³ of water are added to 10 cm³ of 0.8 M Na₂CO₃. The new concentration is...", "أُضيف 240 سم³ ماء إلى 10 سم³ من محلول Na₂CO₃ تركيزه 0.8 M، فيصبح التركيز..."],
            c: [["0.032 M", "0.032 M"], ["0.0333 M", "0.0333 M"], ["0.016 M", "0.016 M"], ["0.064 M", "0.064 M"]],
            off: ["V₂ = 10 + 240 = 250 cm³; " + eq("0.8 × 10 = M₂ × 250 → M₂ = 0.032 M") + ". 0.0333 uses 240 instead of 250.", "V₂ = 10 + 240 = 250 سم³؛ " + eq("0.8 × 10 = M₂ × 250 → M₂ = 0.032 M") + "، و0.0333 تستخدم 240 بدل 250."],
            sto: ["The final jug holds the concentrate AND the water.", "الإبريق النهائي يحتوي على المركز والماء معًا."] },
          { q: ["How much water must be added to 1.5 M Na₂CO₃ to get 1 L of 0.5 M solution?", "كم لترًا من الماء يُضاف إلى محلول Na₂CO₃ تركيزه 1.5 M للحصول على لتر من محلول 0.5 M؟"],
            c: [["0.67 L", "0.67 لتر"], ["0.33 L", "0.33 لتر"], ["1 L", "1 لتر"], ["3 L", "3 لترات"]],
            off: [eq("1.5 × V₁ = 0.5 × 1 → V₁ = 0.33 L") + "; water = 1 − 0.33 = 0.67 L. 0.33 L is the volume of concentrate.", eq("1.5 × V₁ = 0.5 × 1 → V₁ = 0.33 L") + "؛ الماء = 1 − 0.33 = 0.67 لتر، و0.33 لتر هو حجم المحلول المركز."],
            sto: ["One third concentrate, two thirds water.", "ثلث مركز وثلثا ماء."] },
          { q: ["What volume of 2 M HCl is needed to prepare 250 cm³ of 0.15 M HCl?", "ما حجم حمض HCl تركيزه 2 M اللازم لتحضير 250 سم³ من محلول 0.15 M؟"],
            c: [["18.75 cm³", "18.75 سم³"], ["3333 cm³", "3333 سم³"], ["37.5 cm³", "37.5 سم³"], ["75 cm³", "75 سم³"]],
            off: [eq("2 × V₁ = 0.15 × 250 → V₁ = 18.75 cm³") + ".", eq("2 × V₁ = 0.15 × 250 → V₁ = 18.75 cm³") + "."],
            sto: ["A strong acid needs only a small splash.", "الحمض المركز يحتاج رشفة صغيرة فقط."] },
          { q: ["What volume of 0.3 M Na₂SO₄ makes 2 L of solution with [Na⁺] = 0.4 M?", "ما حجم محلول Na₂SO₄ تركيزه 0.3 M اللازم لتحضير 2 لتر محلول تركيز أيونات Na⁺ فيه 0.4 M؟"],
            c: [["1.33 L", "1.33 لتر"], ["2.67 L", "2.67 لتر"], ["0.67 L", "0.67 لتر"], ["1.5 L", "1.5 لتر"]],
            off: ["[Na⁺] 0.4 M needs Na₂SO₄ 0.2 M (2 Na⁺ each); " + eq("0.3 × V = 0.2 × 2 → V = 1.33 L") + ".", "تركيز Na⁺ = 0.4 M يحتاج Na₂SO₄ تركيزه 0.2 M (لكل وحدة أيونان)؛ " + eq("0.3 × V = 0.2 × 2 → V = 1.33 L") + "."],
            sto: ["Each sulphate unit brings two sodium passengers.", "كل وحدة كبريتات تحمل راكبين من الصوديوم."] },
          { q: ["What volume of 0.5 M BaCl₂ contains 3 mol of chloride ions?", "ما حجم محلول BaCl₂ تركيزه 0.5 M الذي يحتوي على 3 مول من أيونات الكلوريد؟"],
            c: [["3 L", "3 لترات"], ["6 L", "6 لترات"], ["1.5 L", "1.5 لتر"], ["0.75 L", "0.75 لتر"]],
            off: ["3 mol Cl⁻ = 1.5 mol BaCl₂; " + eq("V = 1.5 ÷ 0.5 = 3 L") + ".", "3 مول Cl⁻ = 1.5 مول BaCl₂؛ " + eq("V = 1.5 ÷ 0.5 = 3 L") + "."],
            sto: ["Two chlorides per barium halves the moles of salt.", "كلوريدان لكل باريوم، فعدد مولات الملح نصف عدد مولات الكلوريد."] }
        ]
      }
    ]
  });

  /* ================= CHAPTER 2: ATOMIC STRUCTURE ================= */
  G.units.push({
    id: "sec2chemu2", num: 2, icon: "⚛️", color: "purple",
    title: { en: "Atomic Structure", ar: "تركيب الذرة" },
    lessons: [
      {
        id: "sec2chemu2l1", icon: "🎯", page: 24,
        title: { en: "Thomson and Rutherford Models", ar: "نموذجا طومسون ورذرفورد" },
        idea: {
          official: {
            en: ["Thomson (1897): the atom is a solid, homogeneous sphere of uniform positive charge with negative electrons embedded in it, so it is electrically neutral.",
              "Geiger and Marsden, in Rutherford's experiment, fired positive alpha particles (helium nuclei) at a very thin gold foil in front of a plate coated with zinc sulphide, which flashes when hit.",
              "Most alpha particles passed straight through → most of the atom is empty space (not a solid sphere as Thomson assumed).",
              "A very small percentage bounced back → there is a tiny, very dense part: the nucleus. Some were deflected → the nucleus is positive like the alpha particles, so they repel.",
              "Rutherford's model (1911): a tiny positive nucleus holding most of the mass, with electrons of negligible mass revolving around it like planets. Total negative charge = positive charge of the nucleus.",
              "The attraction between nucleus and electron is balanced by an equal and opposite centrifugal force. But Rutherford did not explain the system in which electrons orbit."],
            ar: ["طومسون (1897): الذرة كرة مصمتة متجانسة من الشحنة الموجبة تنغرس فيها إلكترونات سالبة، فتكون متعادلة كهربيًا.",
              "أجرى جيجر ومارسدن تجربة رذرفورد: وُجهت دقائق ألفا الموجبة (أنوية الهيليوم) نحو رقيقة ذهب رقيقة جدًا أمام لوح مبطن بكبريتيد الخارصين يعطي ومضات عند اصطدامها به.",
              "معظم دقائق ألفا نفذت دون أن تنحرف ← معظم الذرة فراغ (وليست كرة مصمتة كما افترض طومسون).",
              "نسبة ضئيلة جدًا ارتدت ← يوجد جزء صغير جدًا عالي الكثافة هو النواة، وبعضها انحرف ← النواة موجبة مثل دقائق ألفا فتتنافر معها.",
              "نموذج رذرفورد (1911): نواة موجبة صغيرة جدًا تتركز فيها معظم الكتلة، تدور حولها إلكترونات كتلتها مهملة كالكواكب حول الشمس، ومجموع الشحنات السالبة = الشحنة الموجبة للنواة.",
              "قوة جذب النواة للإلكترون تتعادل مع قوة طاردة مركزية مساوية لها ومضادة في الاتجاه، لكن رذرفورد لم يوضح النظام الذي تدور به الإلكترونات."]
          },
          story: {
            en: ["Karim is throwing tennis balls at the fence of the Cairo Stadium car park at night.",
              "Almost every ball flies straight through the big gaps in the fence: the fence is mostly empty space.",
              "Once in a while a ball hits a thick metal post and bounces straight back at him.",
              "If the fence were a solid wall (Thomson's idea) no ball would pass; if it were all air, none would come back.",
              "Rutherford read the same clues from alpha particles: lots of empty space and a tiny, hard, positive centre."],
            ar: ["كريم يقذف كرات التنس ليلًا على سور جراج استاد القاهرة.",
              "تقريبًا كل الكرات تعبر مباشرة من الفتحات الواسعة في السور؛ فالسور في معظمه فراغ.",
              "ومن حين لآخر تصطدم كرة بعمود معدني سميك فترتد إليه مباشرة.",
              "لو كان السور حائطًا مصمتًا (فكرة طومسون) ما عبرت كرة، ولو كان هواءً كله ما ارتدت كرة.",
              "قرأ رذرفورد الأدلة نفسها من دقائق ألفا: فراغ كبير ومركز صغير صلب موجب."]
          }
        },
        words: [
          ["Thomson's model", "نموذج طومسون", "A solid homogeneous sphere of positive charge with electrons embedded in it.", "كرة مصمتة متجانسة من الشحنة الموجبة تنغرس فيها الإلكترونات."],
          ["Alpha particles", "دقائق ألفا", "Positively charged helium nuclei used in Rutherford's experiment.", "أنوية هيليوم موجبة الشحنة استُخدمت في تجربة رذرفورد."],
          ["Nucleus", "النواة", "The tiny, dense, positive centre of the atom where most of its mass is concentrated.", "مركز الذرة الصغير الكثيف الموجب الذي تتركز فيه معظم كتلتها."],
          ["Zinc sulphide screen", "لوح كبريتيد الخارصين", "A plate that gives flashes when struck by alpha particles.", "لوح يعطي ومضات عند اصطدام دقائق ألفا به."],
          ["Centrifugal force", "القوة الطاردة المركزية", "The force that balances the nucleus's attraction to the revolving electron.", "القوة التي تعادل جذب النواة للإلكترون الدائر حولها."]
        ],
        lab: { parts: [{ type: "sec2chem_rutherford" }, {
          type: "sort",
          prompt: ["Tap an observation, then tap the conclusion it proves.", "اضغط على الملاحظة، ثم اختر الاستنتاج الذي تثبته."],
          bins: [["e", "🕳️", "Atom mostly empty", "معظم الذرة فراغ"], ["n", "🔴", "Tiny dense nucleus", "نواة صغيرة كثيفة"], ["p", "➕", "Nucleus is positive", "النواة موجبة"]],
          items: [[["Most alpha particles go straight through", "معظم دقائق ألفا تنفذ مستقيمة"], "e"], [["Flashes stay in the same place as without foil", "الومضات في المكان نفسه كما بدون الرقيقة"], "e"],
            [["A very few bounce straight back", "قلة قليلة جدًا ترتد"], "n"], [["Some alpha particles are deflected", "بعض دقائق ألفا تنحرف"], "p"], [["Alpha (+) are pushed away near the centre", "دقائق ألفا (+) تُدفع بعيدًا قرب المركز"], "p"]]
        }] },
        quiz: [
          { q: ["Thomson described the atom as...", "وصف طومسون الذرة بأنها..."],
            c: [["a solid sphere of positive charge with embedded electrons", "كرة مصمتة من الشحنة الموجبة تنغرس فيها الإلكترونات"], ["a tiny nucleus with orbiting electrons", "نواة صغيرة تدور حولها الإلكترونات"], ["electrons in energy levels", "إلكترونات في مستويات طاقة"], ["an electron cloud", "سحابة إلكترونية"]],
            off: ["Thomson (1897): solid, homogeneous, positively charged sphere; electrons embedded; neutral overall.", "طومسون (1897): كرة مصمتة متجانسة موجبة تنغرس فيها الإلكترونات، والذرة متعادلة."],
            sto: ["Picture a 'feteer' with raisins spread inside.", "تخيل فطيرة بداخلها زبيب منثور."] },
          { q: ["Most alpha particles passed through the gold foil. This shows that...", "نفاذ معظم دقائق ألفا خلال رقيقة الذهب يدل على أن..."],
            c: [["most of the atom is empty space", "معظم الذرة فراغ"], ["the nucleus is positive", "النواة موجبة"], ["electrons have mass", "الإلكترونات لها كتلة"], ["the atom is a solid sphere", "الذرة كرة مصمتة"]],
            off: ["Their flashes appeared in the same place as without the foil: no obstacle for most of them.", "ظهرت ومضاتها في المكان نفسه كما بدون الرقيقة؛ فلا عائق أمام معظمها."],
            sto: ["The tennis balls slipped through the gaps in the fence.", "كرات التنس عبرت من فتحات السور."] },
          { q: ["A very small percentage of alpha particles bounced back because...", "ارتدت نسبة ضئيلة جدًا من دقائق ألفا لأن..."],
            c: [["they hit a tiny, very dense nucleus", "اصطدمت بنواة صغيرة جدًا عالية الكثافة"], ["they hit electrons", "اصطدمت بالإلكترونات"], ["the foil was too thick", "الرقيقة كانت سميكة"], ["they were attracted by the nucleus", "انجذبت إلى النواة"]],
            off: ["Only a head-on hit with the tiny dense nucleus throws an alpha particle back; electrons are far too light.", "فقط الاصطدام المباشر بالنواة الصغيرة الكثيفة يعيد دقيقة ألفا للخلف؛ الإلكترونات خفيفة جدًا."],
            sto: ["Only the thick metal post sends the ball back to Karim.", "العمود المعدني السميك وحده يعيد الكرة إلى كريم."] },
          { q: ["Why were some alpha particles deflected?", "لماذا انحرفت بعض دقائق ألفا؟"],
            c: [["The nucleus has a positive charge that repels them", "لأن النواة موجبة الشحنة فتتنافر معها"], ["The nucleus is negative and attracts them", "لأن النواة سالبة فتجذبها"], ["Electrons block their path", "لأن الإلكترونات تعترض طريقها"], ["Gold atoms are magnetic", "لأن ذرات الذهب مغناطيسية"]],
            off: ["Like charges repel: positive alpha particles passing near the positive nucleus are pushed sideways.", "الشحنات المتشابهة تتنافر: دقائق ألفا الموجبة القريبة من النواة الموجبة تُدفع جانبًا."],
            sto: ["Two north poles of magnets pushing apart.", "قطبان شماليان لمغناطيسين يتنافران."] },
          { q: ["In Rutherford's model, what balances the attraction of the nucleus for an electron?", "في نموذج رذرفورد، ما الذي يعادل قوة جذب النواة للإلكترون؟"],
            c: [["The centrifugal force", "القوة الطاردة المركزية"], ["Gravity", "الجاذبية الأرضية"], ["The repulsion of protons", "تنافر البروتونات"], ["Magnetic force of spin", "القوة المغناطيسية للغزل"]],
            off: ["The electron revolves at high speed; the centrifugal force is equal in magnitude and opposite in direction to the attraction.", "يدور الإلكترون بسرعة كبيرة، فتنشأ قوة طاردة مركزية مساوية لقوة الجذب ومضادة لها في الاتجاه."],
            sto: ["A stone on a string whirled around your hand.", "حجر مربوط بخيط تديره حول يدك."] },
          { q: ["Which statement belongs to Rutherford's model?", "أي عبارة تنتمي إلى نموذج رذرفورد؟"],
            c: [["Most of the mass is concentrated in a small positive nucleus", "معظم الكتلة تتركز في نواة صغيرة موجبة"], ["Electrons have definite energy levels", "للإلكترونات مستويات طاقة محددة"], ["The electron has a dual nature", "للإلكترون طبيعة مزدوجة"], ["The atom is a homogeneous sphere", "الذرة كرة متجانسة"]],
            off: ["Energy levels are Bohr's, dual nature is modern theory, the homogeneous sphere is Thomson's.", "مستويات الطاقة من نموذج بور، والطبيعة المزدوجة من النظرية الحديثة، والكرة المتجانسة من طومسون."],
            sto: ["Rutherford's atom is a tiny solar system.", "ذرة رذرفورد مجموعة شمسية صغيرة."] },
          { q: ["The weakness of Rutherford's model was that it...", "كان قصور نموذج رذرفورد أنه..."],
            c: [["did not explain the system in which electrons orbit", "لم يوضح النظام الذي تدور به الإلكترونات"], ["had no nucleus", "لم يكن به نواة"], ["said the atom was charged", "قال إن الذرة مشحونة"], ["ignored alpha particles", "تجاهل دقائق ألفا"]],
            off: ["Rutherford's theory did not clarify how the electrons are arranged around the nucleus; Bohr answered that.", "لم توضح نظرية رذرفورد كيف تترتب الإلكترونات حول النواة، وأجاب بور عن ذلك."],
            sto: ["He found the sun but not the planets' timetable.", "وجد الشمس لكنه لم يجد جدول مواعيد الكواكب."] }
        ]
      },
      {
        id: "sec2chemu2l2", icon: "🌈", page: 26,
        title: { en: "Line Spectrum and Bohr's Model", ar: "الطيف الخطي ونموذج بور" },
        idea: {
          official: {
            en: ["Heating a pure element's gas or vapour, or using an electric discharge tube at low pressure, emits a line (emission) spectrum: a few coloured lines separated by dark areas. Each element's spectrum is characteristic.",
              "Hydrogen's visible lines: 656 nm (red), 486 nm (green-blue), 434 nm (blue), 410 nm (violet).",
              "Bohr (1913, Nobel 1922) kept Rutherford's nucleus and added: electrons move in definite energy levels without losing energy; the spaces between levels are forbidden; the level's energy rises with its radius and is given by the principal quantum number n.",
              "An electron that gains a quantum moves to a higher level (excited atom), then returns, emitting the same quantum as light of a definite wavelength: one spectral line.",
              "Returning to level 2 gives the visible lines; returning to level 1 gives ultraviolet; the energy gaps between levels decrease away from the nucleus.",
              "Shortcomings: works only for hydrogen (not even helium), ignores the electron's wave nature, assumes position and speed are known together, and makes the atom flat (atoms are 3-D)."],
            ar: ["عند تسخين غاز أو بخار عنصر نقي أو تعريضه لتفريغ كهربي في أنبوبة تحت ضغط منخفض ينبعث طيف خطي (انبعاث): خطوط ملونة قليلة تفصلها مناطق معتمة، وطيف كل عنصر صفة مميزة له.",
              "خطوط الهيدروجين المرئية: 656 نانومتر (أحمر)، 486 (أخضر مزرق)، 434 (أزرق)، 410 (بنفسجي).",
              "بور (1913، نوبل 1922) أبقى نواة رذرفورد وأضاف: الإلكترونات تتحرك في مستويات طاقة محددة دون أن تفقد طاقة، والمسافات بين المستويات مناطق محرمة، وتزداد طاقة المستوى بزيادة نصف قطره ويُعبَّر عنها بعدد الكم الرئيسي n.",
              "الإلكترون الذي يكتسب كمًّا ينتقل إلى مستوى أعلى (ذرة مثارة)، ثم يعود فاقدًا الكم نفسه في صورة ضوء له طول موجي محدد: خط طيفي واحد.",
              "العودة إلى المستوى الثاني تعطي الخطوط المرئية، والعودة إلى المستوى الأول تعطي أشعة فوق بنفسجية، وفروق الطاقة بين المستويات تقل بالبعد عن النواة.",
              "القصور: نجح مع الهيدروجين فقط (حتى الهيليوم لم يفسره)، وأهمل الطبيعة الموجية للإلكترون، وافترض إمكان تحديد مكانه وسرعته معًا، وجعل الذرة مسطحة (والذرات ثلاثية الأبعاد)."]
          },
          story: {
            en: ["Hana watches the neon signs on Talaat Harb Street at night: red, orange, blue.",
              "Each gas glows with its own 'barcode' of colours, so a chemist with a spectroscope can name the gas from far away.",
              "Hana imagines a building with floors (energy levels) and no stairs between them: the electron can stand on a floor, never between floors.",
              "When electricity lifts the electron to an upper floor, it soon jumps back down and throws out a photon. The bigger the jump, the bluer the light.",
              "Jumping down to the ground floor (level 1) throws light so energetic that her eyes cannot see it: ultraviolet."],
            ar: ["تشاهد هنا لافتات النيون في شارع طلعت حرب ليلًا: أحمر وبرتقالي وأزرق.",
              "كل غاز يتوهج بـ «باركود» خاص من الألوان، فيستطيع الكيميائي بالمطياف تحديد الغاز من بعيد.",
              "تتخيل هنا مبنى له أدوار (مستويات طاقة) بلا سلالم بينها؛ يقف الإلكترون على دور ولا يقف أبدًا بين دورين.",
              "عندما ترفعه الكهرباء إلى دور أعلى سرعان ما يقفز عائدًا ويطلق فوتونًا، وكلما كانت القفزة أكبر كان الضوء أكثر زرقة.",
              "والقفز إلى الدور الأرضي (المستوى الأول) يطلق ضوءًا عالي الطاقة لا تراه عيناها: الأشعة فوق البنفسجية."]
          }
        },
        words: [
          ["Line spectrum", "الطيف الخطي", "A limited number of distinct coloured lines separated by dark areas, characteristic of each element.", "عدد محدود من الخطوط الملونة المميزة تفصلها مناطق معتمة، وهو صفة مميزة لكل عنصر."],
          ["Energy level", "مستوى الطاقة", "A definite region around the nucleus where an electron moves without losing energy.", "منطقة محددة حول النواة يتحرك فيها الإلكترون دون أن يفقد طاقة."],
          ["Quantum", "الكم", "The amount of energy gained or emitted when an electron moves from one energy level to another.", "مقدار الطاقة المكتسبة أو المنبعثة عند انتقال الإلكترون من مستوى طاقة إلى آخر."],
          ["Excited atom", "الذرة المثارة", "An atom whose electron has gained a quantum and moved to a higher level.", "ذرة اكتسب إلكترونها كمًّا وانتقل إلى مستوى أعلى."],
          ["Principal quantum number", "عدد الكم الرئيسي", "The integer n that expresses the energy of each level.", "العدد الصحيح n الذي يعبر عن طاقة كل مستوى."],
          ["Spectrometer", "المطياف (الإسبكتروسكوب)", "A device that separates light into its spectral lines.", "جهاز يحلل الضوء إلى خطوطه الطيفية."]
        ],
        lab: { parts: [{ type: "sec2chem_bohr" }] },
        quiz: [
          { q: ["The line spectrum of an element is characteristic because...", "الطيف الخطي لأي عنصر صفة مميزة له لأن..."],
            c: [["no two elements have the same energy levels and line spectrum", "لا يوجد عنصران لهما المستويات نفسها والطيف الخطي نفسه"], ["all elements emit white light", "كل العناصر تعطي ضوءًا أبيض"], ["it depends on the container", "يعتمد على الإناء"], ["it changes with temperature only", "يتغير مع درجة الحرارة فقط"]],
            off: ["Each line comes from a jump between that element's own energy levels, so the pattern is unique.", "كل خط ينتج من انتقال بين مستويات الطاقة الخاصة بذلك العنصر، فيكون النمط فريدًا."],
            sto: ["A spectral barcode, like a fingerprint.", "باركود طيفي مثل البصمة."] },
          { q: ["The red line (656 nm) of hydrogen comes from the electron returning from...", "ينتج الخط الأحمر (656 نانومتر) في طيف الهيدروجين من عودة الإلكترون من..."],
            c: [["level 3 to level 2", "المستوى 3 إلى المستوى 2"], ["level 2 to level 1", "المستوى 2 إلى المستوى 1"], ["level 6 to level 2", "المستوى 6 إلى المستوى 2"], ["level 4 to level 3", "المستوى 4 إلى المستوى 3"]],
            off: ["The smallest jump down to level 2 gives the lowest-energy visible light: red. 6 → 2 gives violet 410 nm; to level 1 is UV; to level 3 is infrared.", "أصغر قفزة إلى المستوى 2 تعطي أقل ضوء مرئي طاقة وهو الأحمر، و6 ← 2 تعطي البنفسجي 410، والعودة إلى 1 فوق بنفسجية، وإلى 3 تحت حمراء."],
            sto: ["The shortest drop gives the 'calmest' colour.", "أقصر قفزة تعطي أهدأ لون."] },
          { q: ["When an excited electron returns to the first energy level, the radiation is...", "عند عودة الإلكترون المثار إلى المستوى الأول يكون الإشعاع..."],
            c: [["ultraviolet (invisible)", "فوق بنفسجي (غير مرئي)"], ["red visible light", "ضوءًا أحمر مرئيًا"], ["infrared", "تحت أحمر"], ["no radiation", "لا يوجد إشعاع"]],
            off: ["The gap to level 1 is the largest, so the quantum is large: ultraviolet.", "الفرق إلى المستوى الأول هو الأكبر، فيكون الكم كبيرًا: أشعة فوق بنفسجية."],
            sto: ["Jumping all the way to the ground floor throws the most energetic light.", "القفز حتى الدور الأرضي يطلق أعلى ضوء طاقة."] },
          { q: ["If an electron absorbs a quantum of energy, it...", "إذا امتص الإلكترون كمًّا من الطاقة فإنه..."],
            c: [["moves to the higher level that corresponds to that quantum", "ينتقل إلى المستوى الأعلى المناظر لهذا الكم"], ["moves to all higher levels", "ينتقل إلى كل المستويات الأعلى"], ["moves to any lower level", "ينتقل إلى أي مستوى أقل"], ["stops between two levels", "يستقر بين مستويين"]],
            off: ["The electron jumps exactly to the level whose energy difference equals the quantum; it never stops between levels.", "يقفز الإلكترون إلى المستوى الذي يساوي فرق طاقته الكم الممتص بالضبط، ولا يستقر أبدًا بين المستويات."],
            sto: ["An elevator with exact buttons, no stopping between floors.", "مصعد بأزرار محددة، لا يقف بين الأدوار."] },
          { q: ["As we move away from the nucleus, the energy difference between successive levels...", "بالابتعاد عن النواة فإن فرق الطاقة بين المستويات المتتالية..."],
            c: [["decreases", "يقل"], ["increases", "يزداد"], ["stays equal", "يظل ثابتًا"], ["becomes zero at level 2", "ينعدم عند المستوى 2"]],
            off: ["Bohr's calculations: the gaps are unequal and get smaller further out, so the quantum needed is not constant.", "حسابات بور: الفروق غير متساوية وتقل بالابتعاد، فالكم اللازم للانتقال ليس ثابتًا."],
            sto: ["The higher floors of the building are closer together.", "الأدوار العليا في المبنى متقاربة أكثر."] },
          { q: ["Which is a shortcoming of Bohr's model?", "أي مما يلي من أوجه قصور نموذج بور؟"],
            c: [["It failed to explain the spectrum of helium", "فشل في تفسير طيف الهيليوم"], ["It explained hydrogen's spectrum", "فسر طيف الهيدروجين"], ["It introduced the quantum", "أدخل فكرة الكم"], ["It kept a positive nucleus", "احتفظ بالنواة الموجبة"]],
            off: ["Bohr explained hydrogen only; he ignored wave properties, assumed exact position and speed together and pictured a flat atom.", "فسر بور طيف الهيدروجين فقط، وأهمل الخواص الموجية، وافترض تحديد المكان والسرعة معًا، وتصور ذرة مسطحة."],
            sto: ["A key that opens only one door.", "مفتاح يفتح بابًا واحدًا فقط."] },
          { q: ["Bohr's model succeeded in...", "نجح نموذج بور في..."],
            c: [["explaining hydrogen's line spectrum and introducing the quantum", "تفسير طيف الهيدروجين الخطي وإدخال فكرة الكم"], ["explaining all elements' spectra", "تفسير أطياف كل العناصر"], ["proving the atom is 3-D", "إثبات أن الذرة ثلاثية الأبعاد"], ["discovering the nucleus", "اكتشاف النواة"]],
            off: ["Those are Bohr's two successes; the nucleus was Rutherford's discovery.", "هذان هما نجاحا بور، أما النواة فاكتشفها رذرفورد."],
            sto: ["He decoded hydrogen's barcode.", "فك شفرة باركود الهيدروجين."] }
        ]
      },
      {
        id: "sec2chemu2l3", icon: "☁️", page: 29,
        title: { en: "Modern Theory and Quantum Numbers", ar: "النظرية الذرية الحديثة وأعداد الكم" },
        idea: {
          official: {
            en: ["Modern theory modifies Bohr's model by: the dual nature of the electron (a particle with wave properties), Heisenberg's uncertainty principle (position and velocity cannot be known together; we speak of probability) and Schrödinger's wave-mechanical theory (1926).",
              "The electron cloud is the region around the nucleus where the electron is likely to be found in all directions; an orbital is a region in it where that probability is high.",
              "Principal n = 1, 2, 3...: the main level (K, L, M, N); it holds " + eq("2n²") + " electrons (2, 8, 18, 32), up to the fourth level only.",
              "Subsidiary l = 0 … (n − 1): sublevels s, p, d, f (l = 0, 1, 2, 3); level n has n sublevels; energy f > d > p > s.",
              "Magnetic m<sub>l</sub> = −l … 0 … +l: the orbitals and their orientation. s: 1 sphere; p: 3 dumbbells p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>; d: 5; f: 7. A sublevel has " + eq("2l + 1") + " orbitals and a level " + eq("n²") + ".",
              "Spin m<sub>s</sub> = +½ (clockwise) or −½ (anticlockwise). An orbital holds at most 2 electrons with opposite spins (spin-paired), whose magnetic fields oppose."],
            ar: ["عدّلت النظرية الحديثة نموذج بور بـ: الطبيعة المزدوجة للإلكترون (جسيم مادي له خواص موجية)، ومبدأ عدم التأكد لهايزنبرج (لا يمكن تحديد مكان الإلكترون وسرعته معًا، ونتحدث بلغة الاحتمالات)، والنظرية الميكانيكية الموجية لشرودنجر (1926).",
              "السحابة الإلكترونية هي المنطقة حول النواة التي يُحتمل وجود الإلكترون فيها في جميع الاتجاهات، والأوربيتال منطقة داخلها يزداد فيها احتمال وجوده.",
              "عدد الكم الرئيسي n = 1، 2، 3...: يحدد المستوى الرئيسي (K وL وM وN)، ويتشبع بـ " + eq("2n²") + " إلكترون (2، 8، 18، 32) حتى المستوى الرابع فقط.",
              "عدد الكم الثانوي l = صفر … (n − 1): مستويات الطاقة الفرعية s وp وd وf (l = 0، 1، 2، 3)، وعدد المستويات الفرعية = رقم المستوى الرئيسي، والطاقة f > d > p > s.",
              "عدد الكم المغناطيسي m<sub>l</sub> = −l … صفر … +l: عدد الأوربيتالات واتجاهاتها؛ s: أوربيتال كروي واحد، وp: ثلاثة على شكل الدمبل p<sub>x</sub> وp<sub>y</sub> وp<sub>z</sub>، وd: خمسة، وf: سبعة. عدد أوربيتالات المستوى الفرعي " + eq("2l + 1") + " والمستوى الرئيسي " + eq("n²") + ".",
              "عدد الكم المغزلي m<sub>s</sub> = +½ (مع عقارب الساعة) أو −½ (عكسها)، والأوربيتال يتسع لإلكترونين على الأكثر بغزل متضاد (حالة ازدواج) فيتعاكس مجالاهما المغناطيسيان."]
          },
          story: {
            en: ["Ziad's family lives in a tall building in Nasr City. To deliver a pizza you need a full address.",
              "Building floor = principal number n. Flat type on that floor (studio, 2-room, 3-room) = subsidiary l: s, p, d, f.",
              "The room inside the flat and which way it faces = magnetic number m. Each room has two beds: one sleeper faces left, one faces right = spin +½ and −½.",
              "No two residents of the building have exactly the same four-part address.",
              "And like a blurry photo of a moving fan, we only know where the electron probably is: the electron cloud."],
            ar: ["تسكن عائلة زياد في برج عالٍ في مدينة نصر، ولتوصيل البيتزا تحتاج إلى عنوان كامل.",
              "رقم الدور = عدد الكم الرئيسي n، ونوع الشقة في الدور (استوديو، غرفتان، ثلاث غرف) = عدد الكم الثانوي l: s وp وd وf.",
              "الغرفة داخل الشقة واتجاهها = عدد الكم المغناطيسي m، وفي كل غرفة سريران: نائم يتجه يسارًا وآخر يمينًا = الغزل +½ و−½.",
              "لا يوجد ساكنان في البرج لهما العنوان الرباعي نفسه تمامًا.",
              "ومثل صورة مهتزة لمروحة تدور، لا نعرف إلا أين يُحتمل وجود الإلكترون: السحابة الإلكترونية."]
          }
        },
        words: [
          ["Dual nature of the electron", "الطبيعة المزدوجة للإلكترون", "The electron is a material particle that also has wave properties.", "الإلكترون جسيم مادي له خواص موجية أيضًا."],
          ["Uncertainty principle", "مبدأ عدم التأكد", "Heisenberg: it is practically impossible to determine an electron's position and velocity at the same time.", "هايزنبرج: من المستحيل عمليًا تحديد مكان الإلكترون وسرعته في الوقت نفسه."],
          ["Electron cloud", "السحابة الإلكترونية", "The region around the nucleus where the electron is likely to be found in all directions.", "المنطقة حول النواة التي يُحتمل وجود الإلكترون فيها في جميع الاتجاهات."],
          ["Orbital", "الأوربيتال", "A region of the electron cloud where the probability of finding the electron is high.", "منطقة في السحابة الإلكترونية يزداد فيها احتمال وجود الإلكترون."],
          ["Subsidiary quantum number", "عدد الكم الثانوي", "l = 0 to n − 1; describes the sublevels s, p, d, f.", "l من صفر إلى n − 1، ويحدد المستويات الفرعية s وp وd وf."],
          ["Magnetic quantum number", "عدد الكم المغناطيسي", "m from −l to +l; the number of orbitals and their spatial directions.", "m من −l إلى +l، ويحدد عدد الأوربيتالات واتجاهاتها في الفراغ."],
          ["Spin quantum number", "عدد الكم المغزلي", "+½ or −½: the direction of the electron's spin about its axis.", "+½ أو −½: اتجاه غزل الإلكترون حول محوره."]
        ],
        lab: { parts: [{ type: "sec2chem_quantum" }] },
        quiz: [
          { q: ["The uncertainty principle was proposed by...", "صاحب مبدأ عدم التأكد هو..."],
            c: [["Heisenberg", "هايزنبرج"], ["Schrödinger", "شرودنجر"], ["Rutherford", "رذرفورد"], ["Bohr", "بور"]],
            off: ["Heisenberg: position and velocity cannot be determined together. Schrödinger formulated the wave equation.", "هايزنبرج: لا يمكن تحديد المكان والسرعة معًا، أما شرودنجر فصاغ المعادلة الموجية."],
            sto: ["The blurry photo of the spinning fan.", "الصورة المهتزة للمروحة الدوارة."] },
          { q: ["How many orbitals are in the third main energy level (n = 3)?", "كم أوربيتالًا في المستوى الرئيسي الثالث (n = 3)؟"],
            c: [["9", "9"], ["18", "18"], ["3", "3"], ["6", "6"]],
            off: [eq("n² = 3² = 9") + ": 3s (1) + 3p (3) + 3d (5). 18 is the number of electrons.", eq("n² = 3² = 9") + ": 3s (1) + 3p (3) + 3d (5)، و18 هو عدد الإلكترونات."],
            sto: ["Nine rooms, two beds each: 18 residents.", "تسع غرف في كل منها سريران: 18 ساكنًا."] },
          { q: ["The maximum number of electrons in the fourth level (n = 4) is...", "أقصى عدد من الإلكترونات في المستوى الرابع (n = 4)..."],
            c: [["32", "32"], ["16", "16"], ["8", "8"], ["18", "18"]],
            off: [eq("2n² = 2 × 4² = 32") + ". 16 is the number of orbitals.", eq("2n² = 2 × 4² = 32") + "، و16 هو عدد الأوربيتالات."],
            sto: ["Sixteen rooms × two beds.", "ست عشرة غرفة × سريران."] },
          { q: ["What are the possible values of l when n = 3?", "ما القيم الممكنة لـ l عندما n = 3؟"],
            c: [["0, 1, 2", "0، 1، 2"], ["1, 2, 3", "1، 2، 3"], ["0, 1, 2, 3", "0، 1، 2، 3"], ["−1, 0, +1", "−1، 0، +1"]],
            off: ["l runs from 0 to n − 1 = 2: the sublevels 3s, 3p, 3d.", "l من صفر إلى n − 1 = 2: المستويات الفرعية 3s و3p و3d."],
            sto: ["Floor 3 has three flat types.", "الدور الثالث فيه ثلاثة أنواع من الشقق."] },
          { q: ["The number of orbitals in the 3d sublevel is...", "عدد الأوربيتالات في المستوى الفرعي 3d..."],
            c: [["5", "5"], ["3", "3"], ["7", "7"], ["10", "10"]],
            off: ["d has l = 2: " + eq("2l + 1 = 5") + " orbitals (holding 10 electrons).", "d له l = 2: " + eq("2l + 1 = 5") + " أوربيتالات (تتسع لـ 10 إلكترونات)."],
            sto: ["m = −2, −1, 0, +1, +2: five rooms.", "m = −2، −1، 0، +1، +2: خمس غرف."] },
          { q: ["Which set of quantum numbers is IMPOSSIBLE?", "أي مجموعة من أعداد الكم مستحيلة؟"],
            c: [["n = 1, l = 1, m = +1, m<sub>s</sub> = −½", "n = 1، l = 1، m = +1، m<sub>s</sub> = −½"], ["n = 3, l = 2, m = −1, m<sub>s</sub> = +½", "n = 3، l = 2، m = −1، m<sub>s</sub> = +½"], ["n = 4, l = 3, m = −2, m<sub>s</sub> = +½", "n = 4، l = 3، m = −2، m<sub>s</sub> = +½"], ["n = 2, l = 0, m = 0, m<sub>s</sub> = −½", "n = 2، l = 0، m = 0، m<sub>s</sub> = −½"]],
            off: ["When n = 1, l can only be 0 (l ≤ n − 1). The first level has no p sublevel.", "عندما n = 1 لا يأخذ l إلا صفرًا (l ≤ n − 1)، فلا يوجد مستوى فرعي p في المستوى الأول."],
            sto: ["The ground floor has studios only.", "الدور الأرضي فيه استوديوهات فقط."] },
          { q: ["The magnetic quantum number shows...", "يحدد عدد الكم المغناطيسي..."],
            c: [["the number of orbitals in a sublevel and their spatial directions", "عدد الأوربيتالات في المستوى الفرعي واتجاهاتها في الفراغ"], ["the number of main levels", "عدد المستويات الرئيسية"], ["the spin of the electron", "غزل الإلكترون"], ["the number of electrons in an orbital", "عدد الإلكترونات في الأوربيتال"]],
            off: ["m takes values −l … +l: for p, three orbitals along x, y, z.", "m يأخذ القيم من −l إلى +l، ففي p ثلاثة أوربيتالات على المحاور x وy وz."],
            sto: ["Which room, and which way it faces.", "أي غرفة، وفي أي اتجاه تطل."] },
          { q: ["Two electrons in the same orbital do not fly apart because...", "لا يتنافر إلكترونا الأوربيتال الواحد تنافرًا يبعدهما لأن..."],
            c: [["their opposite spins make opposing magnetic fields", "غزلهما المتضاد يكوّن مجالين مغناطيسيين متعاكسين"], ["they have opposite charges", "شحنتيهما مختلفتان"], ["they are in different levels", "هما في مستويين مختلفين"], ["they have no charge", "ليس لهما شحنة"]],
            off: ["Both are negative, but spinning in opposite directions (+½, −½) creates opposing magnetic fields: spin-paired.", "كلاهما سالب، لكن الغزل في اتجاهين متضادين (+½ و−½) يكوّن مجالين مغناطيسيين متعاكسين: حالة ازدواج."],
            sto: ["Two magnets placed head to tail.", "مغناطيسان متجاوران بأقطاب متعاكسة."] }
        ]
      },
      {
        id: "sec2chemu2l4", icon: "📦", page: 34,
        title: { en: "Electron Configuration", ar: "التوزيع الإلكتروني" },
        idea: {
          official: {
            en: ["Pauli's exclusion principle: no two electrons in the same atom have the same four quantum numbers. The two 3s electrons share n = 3, l = 0, m = 0 but have m<sub>s</sub> = +½ and −½.",
              "Aufbau (building-up) principle: electrons fill lower-energy sublevels first: " + eq("1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d") + ".",
              "The (n + l) rule: 4s has n + l = 4, 3d has 5, so 4s fills first. If n + l is equal, the sublevel with smaller n is lower: 3p and 4s both have 4, so 3p fills first.",
              "Examples: " + eq("₁₁Na: 1s² 2s² 2p⁶ 3s¹") + ", " + eq("₂₀Ca: … 3p⁶ 4s²") + ", " + eq("₃₀Zn: … 4s² 3d¹⁰") + ".",
              "Hund's rule: no pairing in a sublevel until each orbital has one electron, with parallel spins. ₇N: 2p has three single electrons ↑ ↑ ↑.",
              "For ₈O the fourth 2p electron pairs (↑↓ ↑ ↑) rather than moving up to 3s, because pairing costs less energy than jumping to a higher sublevel."],
            ar: ["مبدأ الاستبعاد لباولي: لا يتفق إلكترونان في ذرة واحدة في أعداد الكم الأربعة؛ فإلكترونا 3s يتفقان في n = 3 وl = 0 وm = 0 ويختلفان في m<sub>s</sub> = +½ و−½.",
              "مبدأ البناء التصاعدي: تملأ الإلكترونات المستويات الفرعية الأقل طاقة أولًا: " + eq("1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d") + ".",
              "قاعدة (n + l): للمستوى 4s القيمة 4 وللمستوى 3d القيمة 5، فيمتلئ 4s أولًا، وعند تساوي (n + l) يكون المستوى ذو n الأصغر أقل طاقة (3p و4s كلاهما 4 ← 3p أولًا).",
              "أمثلة: " + eq("₁₁Na: 1s² 2s² 2p⁶ 3s¹") + "، " + eq("₂₀Ca: … 3p⁶ 4s²") + "، " + eq("₃₀Zn: … 4s² 3d¹⁰") + ".",
              "قاعدة هوند: لا يحدث ازدواج في مستوى فرعي إلا بعد أن تشغل كل أوربيتالاته فرادى بغزل متوازٍ؛ ففي ₇N يحتوي 2p على ثلاثة إلكترونات منفردة ↑ ↑ ↑.",
              "وفي ₈O يزدوج الإلكترون الرابع في 2p (↑↓ ↑ ↑) بدل الانتقال إلى 3s، لأن الازدواج أقل طاقة من القفز إلى مستوى فرعي أعلى."]
          },
          story: {
            en: ["Every morning the microbus at Ramses Square fills in a strict way.",
              "Passengers take the cheapest, front-most seats first, then move back: that is Aufbau.",
              "On a bench of three seats, nobody sits next to a stranger while an empty bench seat remains: each takes a seat alone first. That is Hund's rule.",
              "Two people may share one seat only if they face opposite ways, and no two passengers hold the same ticket: that is Pauli.",
              "The driver's 'seat plan' is the electron configuration."],
            ar: ["كل صباح يمتلئ الميكروباص في ميدان رمسيس بطريقة صارمة.",
              "يأخذ الركاب المقاعد الأمامية الأرخص أولًا ثم يتجهون للخلف: هذا هو مبدأ البناء التصاعدي.",
              "وعلى الكنبة ذات المقاعد الثلاثة لا يجلس أحد بجوار غريب ما دام هناك مقعد فارغ؛ كل راكب يجلس منفردًا أولًا: هذه قاعدة هوند.",
              "ولا يتشارك راكبان مقعدًا إلا إذا اتجه كل منهما عكس الآخر، ولا يحمل راكبان التذكرة نفسها: هذا مبدأ باولي.",
              "و«خطة المقاعد» عند السائق هي التوزيع الإلكتروني."]
          }
        },
        words: [
          ["Pauli's exclusion principle", "مبدأ الاستبعاد لباولي", "No two electrons in the same atom can have the same four quantum numbers.", "لا يتفق إلكترونان في ذرة واحدة في أعداد الكم الأربعة."],
          ["Aufbau principle", "مبدأ البناء التصاعدي", "Electrons fill the lower energy sublevels first, then the higher ones.", "تملأ الإلكترونات المستويات الفرعية الأقل طاقة أولًا ثم الأعلى."],
          ["Hund's rule", "قاعدة هوند", "No pairing occurs in a sublevel until each orbital contains one electron.", "لا يحدث ازدواج في مستوى فرعي حتى يشغل كل أوربيتال بإلكترون واحد."],
          ["Electron configuration", "التوزيع الإلكتروني", "The arrangement of an atom's electrons in its sublevels, such as 1s² 2s² 2p³.", "ترتيب إلكترونات الذرة في مستوياتها الفرعية مثل 1s² 2s² 2p³."],
          ["Unpaired electron", "إلكترون مفرد", "An electron alone in an orbital.", "إلكترون منفرد في أوربيتال."],
          ["(n + l) rule", "قاعدة (n + l)", "The sublevel with smaller n + l has lower energy; if equal, the one with smaller n.", "المستوى الفرعي ذو (n + l) الأصغر أقل طاقة، وعند التساوي ذو n الأصغر."]
        ],
        lab: { parts: [{ type: "sec2chem_aufbau" }, {
          type: "sort",
          prompt: ["Tap a configuration, then tap the rule it breaks (or 'correct').", "اضغط على التوزيع، ثم اختر القاعدة التي يخالفها (أو «صحيح»)."],
          bins: [["ok", "✅", "Correct", "صحيح"], ["au", "🏗️", "Breaks Aufbau", "يخالف البناء التصاعدي"], ["hu", "🪑", "Breaks Hund", "يخالف هوند"], ["pa", "🎫", "Breaks Pauli", "يخالف باولي"]],
          items: [[["N: 2p ↑ ↑ ↑", "N: 2p ↑ ↑ ↑"], "ok"], [["Ca: … 3p⁶ 4s²", "Ca: … 3p⁶ 4s²"], "ok"], [["K: … 3p⁶ 3d¹", "K: … 3p⁶ 3d¹"], "au"], [["Na: 1s² 2s² 2p⁶ 3p¹", "Na: 1s² 2s² 2p⁶ 3p¹"], "au"],
            [["N: 2p ↑↓ ↑ _", "N: 2p ↑↓ ↑ _"], "hu"], [["C: 2p ↑↓ _ _", "C: 2p ↑↓ _ _"], "hu"], [["He: 1s ↑↑", "He: 1s ↑↑"], "pa"]]
        }] },
        quiz: [
          { q: ["Which is the electron configuration of ₂₀Ca by the Aufbau principle?", "أي مما يلي التوزيع الإلكتروني لـ ₂₀Ca حسب مبدأ البناء التصاعدي؟"],
            c: [["1s² 2s² 2p⁶ 3s² 3p⁶ 4s²", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²"], ["1s² 2s² 2p⁶ 3s² 3p⁶ 3d²", "1s² 2s² 2p⁶ 3s² 3p⁶ 3d²"], ["1s² 2s² 2p⁶ 3s² 3p⁸", "1s² 2s² 2p⁶ 3s² 3p⁸"], ["2, 8, 10", "2، 8، 10"]],
            off: ["4s (n + l = 4) is lower than 3d (n + l = 5), so it fills first. p holds only 6.", "4s (n + l = 4) أقل طاقة من 3d (n + l = 5) فيمتلئ أولًا، وp يتسع لـ 6 فقط."],
            sto: ["The 4s seat is cheaper than the 3d seat.", "مقعد 4s أرخص من مقعد 3d."] },
          { q: ["The correct order of energy is...", "الترتيب الصحيح حسب الطاقة..."],
            c: [["3s < 3p < 4s < 3d", "3s < 3p < 4s < 3d"], ["3s < 3p < 3d < 4s", "3s < 3p < 3d < 4s"], ["3s < 3p < 4d < 4s", "3s < 3p < 4d < 4s"], ["3s < 4p < 3d < 4f", "3s < 4p < 3d < 4f"]],
            off: ["n + l: 3s = 3, 3p = 4, 4s = 4 (larger n so after 3p), 3d = 5.", "n + l: 3s = 3، 3p = 4، 4s = 4 (n أكبر فيأتي بعد 3p)، 3d = 5."],
            sto: ["Equal (n + l)? The lower floor wins.", "تساوت (n + l)؟ الدور الأقل يفوز."] },
          { q: ["The configuration of nitrogen according to Hund's rule is...", "التوزيع الإلكتروني للنيتروجين حسب قاعدة هوند..."],
            c: [["1s² 2s² 2p<sub>x</sub>¹ 2p<sub>y</sub>¹ 2p<sub>z</sub>¹", "1s² 2s² 2p<sub>x</sub>¹ 2p<sub>y</sub>¹ 2p<sub>z</sub>¹"], ["1s² 2s² 2p<sub>x</sub>² 2p<sub>y</sub>¹", "1s² 2s² 2p<sub>x</sub>² 2p<sub>y</sub>¹"], ["2, 5", "2، 5"], ["1s² 2s⁴ 2p¹", "1s² 2s⁴ 2p¹"]],
            off: ["Three 2p electrons occupy the three orbitals singly with parallel spins before pairing.", "إلكترونات 2p الثلاثة تشغل الأوربيتالات الثلاثة فرادى بغزل متوازٍ قبل الازدواج."],
            sto: ["Three passengers, three seats, nobody shares.", "ثلاثة ركاب وثلاثة مقاعد، لا أحد يشارك."] },
          { q: ["What is the configuration of ₃₀Zn?", "ما التوزيع الإلكتروني لـ ₃₀Zn؟"],
            c: [["[Ar] 4s² 3d¹⁰", "[Ar] 4s² 3d¹⁰"], ["[Ar] 3d¹²", "[Ar] 3d¹²"], ["[Ar] 4s² 4p¹⁰", "[Ar] 4s² 4p¹⁰"], ["[Ar] 4s¹ 3d¹¹", "[Ar] 4s¹ 3d¹¹"]],
            off: ["18 (argon core) + 4s² + 3d¹⁰ = 30. A d sublevel holds at most 10.", "18 (قلب الأرجون) + 4s² + 3d¹⁰ = 30، والمستوى d يتسع لـ 10 على الأكثر."],
            sto: ["Fill 4s, then pack the five 3d rooms.", "املأ 4s ثم الغرف الخمس في 3d."] },
          { q: ["The quantum numbers of the last electron in ₁₁Na are...", "أعداد الكم لآخر إلكترون في ₁₁Na هي..."],
            c: [["n = 3, l = 0, m = 0, m<sub>s</sub> = +½", "n = 3، l = 0، m = 0، m<sub>s</sub> = +½"], ["n = 3, l = 1, m = 0, m<sub>s</sub> = +½", "n = 3، l = 1، m = 0، m<sub>s</sub> = +½"], ["n = 2, l = 1, m = +1, m<sub>s</sub> = −½", "n = 2، l = 1، m = +1، m<sub>s</sub> = −½"], ["n = 1, l = 0, m = 0, m<sub>s</sub> = +½", "n = 1، l = 0، m = 0، m<sub>s</sub> = +½"]],
            off: ["Na: … 3s¹. The 3s electron: n = 3, s → l = 0, m = 0, alone → spin +½.", "Na: … 3s¹، وإلكترون 3s: n = 3، وs ← l = 0، وm = 0، ومنفرد ← +½."],
            sto: ["Floor 3, studio, the only room, first bed.", "الدور الثالث، استوديو، الغرفة الوحيدة، السرير الأول."] },
          { q: ["Electrons occupy orbitals singly before pairing because...", "تشغل الإلكترونات الأوربيتالات فرادى قبل الازدواج لأن..."],
            c: [["pairing causes repulsion that lowers stability", "الازدواج يسبب تنافرًا يقلل الاستقرار"], ["pairing is forbidden", "الازدواج ممنوع"], ["singles have more mass", "المنفردة كتلتها أكبر"], ["orbitals have different energies", "الأوربيتالات مختلفة الطاقة"]],
            off: ["Orbitals of the same sublevel are equal in energy; single parallel spins give maximum stability (Hund).", "أوربيتالات المستوى الفرعي الواحد متساوية الطاقة، والإلكترونات المنفردة بغزل متوازٍ تعطي أقصى استقرار (هوند)."],
            sto: ["Nobody likes sharing a seat when free seats remain.", "لا أحد يحب مشاركة المقعد ما دامت هناك مقاعد خالية."] },
          { q: ["The two electrons of 3s differ only in...", "يختلف إلكترونا المستوى 3s فقط في..."],
            c: [["the spin quantum number", "عدد الكم المغزلي"], ["the principal quantum number", "عدد الكم الرئيسي"], ["the subsidiary quantum number", "عدد الكم الثانوي"], ["the magnetic quantum number", "عدد الكم المغناطيسي"]],
            off: ["Pauli: n = 3, l = 0, m = 0 for both; m<sub>s</sub> = +½ and −½.", "باولي: n = 3، l = 0، m = 0 لكليهما، وm<sub>s</sub> = +½ و−½."],
            sto: ["Same room, same bed frame, facing opposite ways.", "الغرفة نفسها والسرير نفسه، واتجاهان متعاكسان."] }
        ]
      }
    ]
  });

  /* ================= CHAPTER 3: THE PERIODIC TABLE AND CLASSIFICATION OF ELEMENTS ================= */
  G.units.push({
    id: "sec2chemu3", num: 3, icon: "🧱", color: "teal",
    title: { en: "The Periodic Table and Classification of Elements", ar: "الجدول الدوري وتصنيف العناصر" },
    lessons: [
      {
        id: "sec2chemu3l1", icon: "🗂️", page: 42,
        title: { en: "The Modern Periodic Table and Its Blocks", ar: "الجدول الدوري الحديث وفئاته" },
        idea: {
          official: {
            en: ["In the modern periodic table elements are arranged in ascending order of atomic number and according to the Aufbau principle: each element has one electron more than the one before it.",
              "It has 18 vertical groups and 7 horizontal periods. Each period starts by filling a new level with one electron and ends with a noble gas; elements of one group share the outer configuration with different n.",
              "s-block (left): groups 1A (ns¹) and 2A (ns²), where n is both the last level and the period number. p-block (right): groups 3A to 7A (np¹ … np⁵) and group zero (np⁶).",
              "d-block (middle): 10 columns where d fills: seven B groups and three columns of group 8. f-block (separated below): lanthanides (4f, outer 6s²) and actinides (5f, all radioactive), 14 elements each.",
              "Four types: noble elements (group 0: ns² np⁶, He 1s²), representative elements (s and p blocks except group 0), main transition elements (d-block) and inner transition elements (f-block).",
              "Example: " + eq("₁₇Cl: [Ne] 3s² 3p⁵") + " → period 3, group 7A, p-block, representative."],
            ar: ["في الجدول الدوري الحديث تُرتب العناصر تصاعديًا حسب أعدادها الذرية وحسب مبدأ البناء التصاعدي، فكل عنصر يزيد عن الذي قبله بإلكترون واحد.",
              "يتكون من 18 مجموعة رأسية و7 دورات أفقية، وتبدأ كل دورة بملء مستوى جديد بإلكترون واحد وتنتهي بغاز نبيل، وعناصر المجموعة الواحدة تتشابه في توزيع المستوى الأخير مع اختلاف n.",
              "الفئة s (يسار): المجموعة 1A (ns¹) و2A (ns²) حيث n رقم المستوى الأخير ورقم الدورة معًا، والفئة p (يمين): المجموعات من 3A إلى 7A (np¹ … np⁵) والمجموعة الصفرية (np⁶).",
              "الفئة d (الوسط): 10 أعمدة يمتلئ فيها المستوى d؛ سبع مجموعات B وثلاثة أعمدة للمجموعة الثامنة، والفئة f (منفصلة أسفل الجدول): اللانثانيدات (4f وغلافها الخارجي 6s²) والأكتينيدات (5f وكلها مشعة)، 14 عنصرًا لكل منهما.",
              "أربعة أنواع: العناصر النبيلة (المجموعة الصفرية: ns² np⁶ والهيليوم 1s²)، والعناصر الممثلة (الفئتان s وp عدا الصفرية)، والعناصر الانتقالية الرئيسية (الفئة d)، والعناصر الانتقالية الداخلية (الفئة f).",
              "مثال: " + eq("₁₇Cl: [Ne] 3s² 3p⁵") + " ← الدورة الثالثة، المجموعة 7A، الفئة p، عنصر ممثل."]
          },
          story: {
            en: ["Laila is organising the shoe shop at City Stars mall.",
              "She puts boxes in order of size, one size bigger each time, like atomic numbers.",
              "Each shelf row is a period; each column holds the same style in different sizes, like a group sharing the same outer electrons.",
              "Sandals on the left (s-block), trainers on the right (p-block), formal shoes in the wide middle (d-block), and a long row of kids' shoes stored underneath so the shelf is not too long (f-block).",
              "The last column holds the 'complete sets' that never need anything added: the noble gases."],
            ar: ["ليلى ترتب محل الأحذية في مول سيتي ستارز.",
              "تضع العلب حسب المقاس، كل علبة أكبر بمقاس واحد، مثل الأعداد الذرية.",
              "كل صف من الرفوف دورة، وكل عمود يضم الموديل نفسه بمقاسات مختلفة، مثل المجموعة التي تتشابه في إلكترونات المستوى الأخير.",
              "الصنادل يسارًا (الفئة s)، والأحذية الرياضية يمينًا (الفئة p)، والأحذية الرسمية في الوسط العريض (الفئة d)، وصف طويل لأحذية الأطفال مخزن أسفل الرف حتى لا يطول (الفئة f).",
              "والعمود الأخير يضم «الأطقم الكاملة» التي لا تحتاج إلى إضافة: الغازات النبيلة."]
          }
        },
        words: [
          ["Period", "الدورة", "A horizontal row; its number equals the number of the last energy level.", "صف أفقي، ورقمه يساوي رقم آخر مستوى طاقة."],
          ["Group", "المجموعة", "A vertical column of elements with similar outer-level configuration.", "عمود رأسي من العناصر متشابهة في توزيع المستوى الأخير."],
          ["Block", "الفئة", "A region of the table named after the sublevel being filled: s, p, d or f.", "منطقة في الجدول تسمى باسم المستوى الفرعي الذي يمتلئ: s أو p أو d أو f."],
          ["Representative elements", "العناصر الممثلة", "s- and p-block elements except group zero; all levels full except the last.", "عناصر الفئتين s وp عدا المجموعة الصفرية، وكل مستوياتها مكتملة عدا الأخير."],
          ["Noble elements", "العناصر النبيلة", "Group zero (18): all sublevels of the period full (ns² np⁶), very stable.", "المجموعة الصفرية (18): كل مستويات الدورة الفرعية مكتملة (ns² np⁶)، شديدة الاستقرار."],
          ["Main transition elements", "العناصر الانتقالية الرئيسية", "d-block elements in which the d sublevel fills successively.", "عناصر الفئة d التي يمتلئ فيها المستوى الفرعي d تدريجيًا."],
          ["Inner transition elements", "العناصر الانتقالية الداخلية", "f-block elements: lanthanides (4f) and actinides (5f).", "عناصر الفئة f: اللانثانيدات (4f) والأكتينيدات (5f)."]
        ],
        lab: { parts: [{ type: "sec2chem_blocks" }, {
          type: "sort",
          prompt: ["Tap an outer configuration, then tap its block.", "اضغط على توزيع المستوى الأخير، ثم اختر فئته."],
          bins: [["s", "🟥", "s-block", "الفئة s"], ["p", "🟨", "p-block", "الفئة p"], ["d", "🟦", "d-block", "الفئة d"], ["f", "🟩", "f-block", "الفئة f"]],
          items: [["6s¹ (Cs)", "s"], ["4s² (Ca)", "s"], ["4s² 4p⁵ (Br)", "p"], ["6s² 6p⁶ (Rn)", "p"], ["4s² 3d³ (V)", "d"], ["6s² 4f¹⁴ 5d⁶ (Os)", "d"], ["6s² 4f⁷ 5d¹ (Gd)", "f"]]
        }] },
        quiz: [
          { q: ["Elements in the modern periodic table are arranged according to...", "تُرتب العناصر في الجدول الدوري الحديث حسب..."],
            c: [["increasing atomic number and the Aufbau principle", "تزايد العدد الذري ومبدأ البناء التصاعدي"], ["increasing atomic mass", "تزايد الكتلة الذرية"], ["alphabetical order", "الترتيب الأبجدي"], ["date of discovery", "تاريخ الاكتشاف"]],
            off: ["Each element has one more electron than the previous one, filling sublevels in Aufbau order.", "كل عنصر يزيد إلكترونًا عن سابقه، وتُملأ المستويات الفرعية بترتيب البناء التصاعدي."],
            sto: ["One shoe size bigger every box.", "كل علبة أكبر بمقاس واحد."] },
          { q: ["The element with outer configuration 4s² 3d³ is...", "العنصر الذي ينتهي توزيعه بـ 4s² 3d³ هو..."],
            c: [["a main transition element in the 4th period", "عنصر انتقالي رئيسي في الدورة الرابعة"], ["a representative element in group 5A", "عنصر ممثل في المجموعة 5A"], ["a lanthanide", "أحد اللانثانيدات"], ["a noble gas", "غاز نبيل"]],
            off: ["d is filling, so it is d-block (vanadium, ₂₃V); the last s level is 4 → period 4.", "المستوى d يمتلئ فهو من الفئة d (الفاناديوم ₂₃V)، وآخر مستوى s رقمه 4 ← الدورة الرابعة."],
            sto: ["Formal shoes on the fourth shelf.", "حذاء رسمي على الرف الرابع."] },
          { q: ["How many types of elements are in the sixth period?", "كم نوعًا من العناصر في الدورة السادسة؟"],
            c: [["4", "4"], ["3", "3"], ["5", "5"], ["6", "6"]],
            off: ["Period 6 contains representative (s, p), noble (Rn), main transition (5d) and inner transition (lanthanides, 4f).", "تحتوي الدورة السادسة على عناصر ممثلة (s وp) ونبيلة (Rn) وانتقالية رئيسية (5d) وانتقالية داخلية (اللانثانيدات 4f)."],
            sto: ["The sixth shelf has every kind of shoe.", "الرف السادس فيه كل أنواع الأحذية."] },
          { q: ["₁₇Cl (1s² 2s² 2p⁶ 3s² 3p⁵) is in...", "يقع ₁₇Cl (1s² 2s² 2p⁶ 3s² 3p⁵) في..."],
            c: [["period 3, group 7A", "الدورة 3، المجموعة 7A"], ["period 5, group 3A", "الدورة 5، المجموعة 3A"], ["period 3, group 5A", "الدورة 3، المجموعة 5A"], ["period 7, group 3A", "الدورة 7، المجموعة 3A"]],
            off: ["Last level n = 3 → period 3; outer electrons 3s² 3p⁵ = 7 → group 7A.", "آخر مستوى n = 3 ← الدورة 3، وإلكترونات المستوى الأخير 3s² 3p⁵ = 7 ← المجموعة 7A."],
            sto: ["Count the outer electrons to find the column.", "عُدّ إلكترونات المستوى الأخير لتجد العمود."] },
          { q: ["The d-block consists of...", "تتكون الفئة d من..."],
            c: [["10 columns: seven B groups and three of group 8", "10 أعمدة: سبع مجموعات B وثلاثة للمجموعة الثامنة"], ["14 columns", "14 عمودًا"], ["6 columns of group A", "6 أعمدة من المجموعات A"], ["2 series below the table", "سلسلتين أسفل الجدول"]],
            off: ["d holds 10 electrons, so 10 columns. 14 columns is the f-block (lanthanides and actinides).", "المستوى d يتسع لـ 10 إلكترونات، فله 10 أعمدة، أما 14 فللفئة f."],
            sto: ["Ten rooms in the d-flat, ten columns on the shelf.", "عشر خانات في d، وعشرة أعمدة على الرف."] },
          { q: ["The actinides are characterised by...", "تتميز الأكتينيدات بأنها..."],
            c: [["filling 5f; all are radioactive", "يمتلئ فيها 5f وكلها مشعة"], ["filling 4f; outer 6s²", "يمتلئ فيها 4f وغلافها 6s²"], ["filling 3d", "يمتلئ فيها 3d"], ["being noble gases", "غازات نبيلة"]],
            off: ["Actinides fill 5f, 14 elements, with unstable radioactive nuclei. 4f is the lanthanides.", "الأكتينيدات يمتلئ فيها 5f، وعددها 14، وأنويتها غير مستقرة مشعة، و4f للانثانيدات."],
            sto: ["The bottom row of the store room holds the 'dangerous' boxes.", "الصف الأسفل في المخزن فيه العلب «الخطرة»."] },
          { q: ["Representative elements tend to reach the configuration...", "تميل العناصر الممثلة للوصول إلى التركيب..."],
            c: [["ns² np⁶ by losing, gaining or sharing electrons", "ns² np⁶ بالفقد أو الاكتساب أو المشاركة"], ["(n−1)d¹⁰", "(n−1)d¹⁰"], ["ns¹", "ns¹"], ["4f¹⁴", "4f¹⁴"]],
            off: ["Their aim is the stable noble-gas outer configuration ns² np⁶.", "هدفها التركيب الخارجي المستقر للغاز النبيل ns² np⁶."],
            sto: ["Everyone wants a 'complete set' like the noble gases.", "الكل يريد «طقمًا كاملًا» مثل الغازات النبيلة."] }
        ]
      },
      {
        id: "sec2chemu3l2", icon: "📏", page: 47,
        title: { en: "Atomic Radius and Ionization Energy", ar: "نصف القطر الذري وجهد التأين" },
        idea: {
          official: {
            en: ["Because the electron's exact position cannot be known, the atomic (covalent) radius is half the distance between the centres of two identical atoms in a diatomic molecule, in picometres (1 pm = 10⁻¹² m). Cl–Cl = 198 pm → r = 99 pm.",
              "Across a period the radius decreases (1A largest, 7A smallest) because the effective nuclear charge increases; down a group it increases: more levels, shielding by full levels, more electron repulsion.",
              "A cation is smaller than its atom (Na 186 → Na⁺ 102 pm; Fe 126 → Fe²⁺ 78 → Fe³⁺ 64.5 pm). An anion is larger (Cl 99 → Cl⁻ 181 pm): more electrons than protons.",
              "Ionization potential: the energy needed to remove one mole of electrons from one mole of separate gaseous atoms. " + eq("M(g) → M⁺(g) + e⁻") + ", in kJ/mol.",
              "It increases across a period (smaller radius, larger effective charge) and decreases down a group; it is inversely proportional to the radius. Noble gases have very high values.",
              "Successive ionizations of Mg: 737, 1450 and 7730 kJ/mol: the third is huge because it breaks a full level."],
            ar: ["لأنه لا يمكن تحديد مكان الإلكترون بدقة، يُعرَّف نصف القطر الذري (التساهمي) بأنه نصف المسافة بين مركزي ذرتين متماثلتين في جزيء ثنائي الذرة، ويقاس بالبيكومتر (1 pm = 10⁻¹² m)؛ Cl–Cl = 198 pm ← r = 99 pm.",
              "في الدورة يقل نصف القطر (أكبره في 1A وأصغره في 7A) لزيادة الشحنة الفعالة للنواة، وفي المجموعة يزداد لزيادة عدد المستويات وحجب المستويات الممتلئة وزيادة التنافر بين الإلكترونات.",
              "الأيون الموجب أصغر من ذرته (Na 186 ← Na⁺ 102 pm، وFe 126 ← Fe²⁺ 78 ← Fe³⁺ 64.5 pm)، والأيون السالب أكبر (Cl 99 ← Cl⁻ 181 pm) لزيادة عدد الإلكترونات عن البروتونات.",
              "جهد التأين: مقدار الطاقة اللازمة لإزالة مول من الإلكترونات من مول من الذرات المفردة في الحالة الغازية: " + eq("M(g) → M⁺(g) + e⁻") + "، بوحدة كيلوجول/مول.",
              "يزداد في الدورة (نصف قطر أصغر وشحنة فعالة أكبر) ويقل في المجموعة، فهو يتناسب عكسيًا مع نصف القطر، وقيمه للغازات النبيلة عالية جدًا.",
              "جهود تأين الماغنسيوم المتتالية: 737 و1450 و7730 كيلوجول/مول، والثالث كبير جدًا لأنه يكسر مستوى مكتملًا."]
          },
          story: {
            en: ["Mostafa and his classmates play tug of war in the school yard in Assiut. The nucleus is one team, the outer electron is the rope's end.",
              "Across a period, the nucleus team gains a new strong player each step while the electrons stay in the same shell, so the rope is pulled in: the atom shrinks.",
              "Down a group, a new shell is added: the electron is held from further away, behind 'blocking' inner players, so it is easier to pull off. Ionization energy falls.",
              "When sodium loses its outer electron, the same team pulls fewer electrons: Na⁺ shrinks. When chlorine gains one, the team must hold extra: Cl⁻ swells.",
              "Pulling a third electron off magnesium means breaking into a full, tight shell: almost impossible."],
            ar: ["يلعب مصطفى وزملاؤه شد الحبل في فناء المدرسة في أسيوط، والنواة فريق، والإلكترون الخارجي طرف الحبل.",
              "في الدورة يكسب فريق النواة لاعبًا قويًا جديدًا في كل خطوة والإلكترونات في المستوى نفسه، فيُشد الحبل للداخل وتنكمش الذرة.",
              "وفي المجموعة يُضاف مستوى جديد؛ فيُمسَك الإلكترون من مسافة أبعد خلف لاعبين داخليين «يحجبون»، فيسهل انتزاعه ويقل جهد التأين.",
              "عندما يفقد الصوديوم إلكترونه الخارجي يشد الفريق نفسه إلكترونات أقل فينكمش Na⁺، وعندما يكسب الكلور إلكترونًا يجب أن يمسك الفريق بإلكترون زائد فيتضخم Cl⁻.",
              "وانتزاع إلكترون ثالث من الماغنسيوم يعني اقتحام مستوى مكتمل متماسك: شبه مستحيل."]
          }
        },
        words: [
          ["Atomic radius", "نصف القطر الذري", "Half the distance between the centres of two identical atoms in a diatomic molecule.", "نصف المسافة بين مركزي ذرتين متماثلتين في جزيء ثنائي الذرة."],
          ["Effective nuclear charge", "الشحنة الفعالة للنواة", "The actual nuclear charge felt by an electron; less than the number of protons due to shielding.", "الشحنة الفعلية للنواة التي يتأثر بها الإلكترون، وهي أقل من عدد البروتونات بسبب الحجب."],
          ["Ionic radius", "نصف القطر الأيوني", "The radius of an ion in an ionic crystal; it depends on electrons lost or gained.", "نصف قطر الأيون في البلورة الأيونية، ويعتمد على عدد الإلكترونات المفقودة أو المكتسبة."],
          ["Ionization potential", "جهد التأين", "The energy needed to remove one mole of electrons from one mole of gaseous atoms.", "الطاقة اللازمة لإزالة مول من الإلكترونات من مول من الذرات الغازية."],
          ["Picometre", "البيكومتر", "A unit of length: 1 pm = 10⁻¹² m.", "وحدة طول: 1 pm = 10⁻¹² m."],
          ["Shielding", "الحجب", "Inner full levels reduce the pull of the nucleus on outer electrons.", "المستويات الداخلية الممتلئة تقلل جذب النواة للإلكترونات الخارجية."]
        ],
        lab: { parts: [{ type: "sec2chem_trends" }] },
        quiz: [
          { q: ["The Cl–Cl bond length in Cl₂ is 198 pm. The atomic radius of chlorine is...", "طول الرابطة Cl–Cl في جزيء Cl₂ يساوي 198 pm، فيكون نصف القطر الذري للكلور..."],
            c: [["99 pm", "99 pm"], ["198 pm", "198 pm"], ["396 pm", "396 pm"], ["181 pm", "181 pm"]],
            off: ["Covalent radius = half the distance between the two centres: " + eq("198 ÷ 2 = 99 pm") + ". 181 pm is Cl⁻.", "نصف القطر التساهمي = نصف المسافة بين المركزين: " + eq("198 ÷ 2 = 99 pm") + "، و181 pm هو نصف قطر Cl⁻."],
            sto: ["Two equal balls touching: each radius is half the gap between centres.", "كرتان متساويتان متلامستان: نصف قطر كل منهما نصف المسافة بين المركزين."] },
          { q: ["Across a period from 1A to 7A, the atomic radius decreases because...", "في الدورة من 1A إلى 7A يقل نصف القطر الذري بسبب..."],
            c: [["the effective nuclear charge increases", "زيادة الشحنة الفعالة للنواة"], ["the number of levels increases", "زيادة عدد المستويات"], ["electrons are lost", "فقد الإلكترونات"], ["shielding increases a lot", "زيادة الحجب كثيرًا"]],
            off: ["Electrons enter the same level while protons increase, so the outer electrons are pulled closer.", "تدخل الإلكترونات المستوى نفسه مع زيادة البروتونات، فتنجذب الإلكترونات الخارجية أكثر."],
            sto: ["New strong players join the nucleus team on the same rope.", "لاعبون أقوياء جدد ينضمون لفريق النواة على الحبل نفسه."] },
          { q: ["Which is the largest?", "أي مما يلي الأكبر حجمًا؟"],
            c: [["Cl⁻ (181 pm)", "Cl⁻ (181 pm)"], ["Cl (99 pm)", "Cl (99 pm)"], ["Na⁺ (102 pm)", "Na⁺ (102 pm)"], ["Fe³⁺ (64.5 pm)", "Fe³⁺ (64.5 pm)"]],
            off: ["Cl⁻ has 18 electrons on 17 protons: the anion swells. Cations shrink.", "Cl⁻ فيه 18 إلكترونًا على 17 بروتونًا فيتضخم الأيون السالب، أما الأيونات الموجبة فتنكمش."],
            sto: ["The team holding one extra player on the rope loses its grip.", "الفريق الذي يمسك لاعبًا زائدًا على الحبل تضعف قبضته."] },
          { q: ["Why is Fe³⁺ smaller than Fe²⁺?", "لماذا Fe³⁺ أصغر من Fe²⁺؟"],
            c: [["It has fewer electrons for the same 26 protons", "لأن عدد إلكتروناته أقل مع نفس الـ 26 بروتونًا"], ["It has more protons", "لأن بروتوناته أكثر"], ["It has more levels", "لأن مستوياته أكثر"], ["It is a different element", "لأنه عنصر مختلف"]],
            off: ["Fe²⁺: 24 e⁻, Fe³⁺: 23 e⁻, both 26 p: the higher the positive charge, the smaller the ion (78 → 64.5 pm).", "Fe²⁺ فيه 24 إلكترونًا وFe³⁺ فيه 23، وكلاهما 26 بروتونًا؛ كلما زادت الشحنة الموجبة صغر الأيون (78 ← 64.5 pm)."],
            sto: ["Same team, fewer people to pull: tighter grip.", "الفريق نفسه وأشخاص أقل للشد: قبضة أقوى."] },
          { q: ["Down group 1A, the first ionization energy...", "في المجموعة 1A لأسفل فإن جهد التأين الأول..."],
            c: [["decreases", "يقل"], ["increases", "يزداد"], ["stays constant", "يظل ثابتًا"], ["becomes zero", "ينعدم"]],
            off: ["More shells → larger radius → weaker attraction for the outer electron → less energy needed (Cs is lowest).", "مستويات أكثر ← نصف قطر أكبر ← جذب أضعف للإلكترون الخارجي ← طاقة أقل (السيزيوم أقلها)."],
            sto: ["The farther the rope end, the easier to snatch.", "كلما بعد طرف الحبل سهل خطفه."] },
          { q: ["The third ionization energy of Mg (7730 kJ/mol) is much larger than the second because...", "جهد التأين الثالث للماغنسيوم (7730 كيلوجول/مول) أكبر بكثير من الثاني لأن..."],
            c: [["it breaks a complete (saturated) energy level", "يكسر مستوى طاقة مكتملًا"], ["Mg is a noble gas", "الماغنسيوم غاز نبيل"], ["the atom becomes larger", "الذرة تصبح أكبر"], ["Mg gains electrons", "الماغنسيوم يكتسب إلكترونات"]],
            off: ["After losing 3s², Mg²⁺ has the neon configuration; removing a 2p electron from that full level needs huge energy.", "بعد فقد 3s² يصبح Mg²⁺ بتركيب النيون، وإزالة إلكترون من هذا المستوى المكتمل تحتاج طاقة ضخمة."],
            sto: ["The third pull hits the locked inner team.", "الشدة الثالثة تصطدم بالفريق الداخلي المغلق."] },
          { q: ["Ionization energy in a period increases because...", "يزداد جهد التأين في الدورة بسبب..."],
            c: [["the radius decreases and the effective nuclear charge increases", "نقص نصف القطر وزيادة الشحنة الفعالة للنواة"], ["the radius increases", "زيادة نصف القطر"], ["the number of levels increases", "زيادة عدد المستويات"], ["metallic character increases", "زيادة الخاصية الفلزية"]],
            off: ["Smaller atoms hold valence electrons more tightly: IE is inversely proportional to radius.", "الذرات الأصغر تمسك إلكترونات التكافؤ بقوة أكبر؛ فجهد التأين يتناسب عكسيًا مع نصف القطر."],
            sto: ["Short rope, strong team: hard to win.", "حبل قصير وفريق قوي: صعب الفوز."] }
        ]
      },
      {
        id: "sec2chemu3l3", icon: "🧲", page: 50,
        title: { en: "Electron Affinity, Electronegativity and Metallic Character", ar: "الميل الإلكتروني والسالبية الكهربية والخاصية الفلزية" },
        idea: {
          official: {
            en: ["Electron affinity: the energy released or absorbed when one mole of separate gaseous atoms gains one mole of electrons. " + eq("Br(g) + e⁻ → Br⁻(g)   ΔH = −325 kJ/mol") + ".",
              "Its trend is irregular. Halogens (7A) have the highest values (Cl −349, F −328). Be and Mg, N (half-filled 2p) and the noble gases have positive values: energy is absorbed.",
              "Electronegativity: the ability of an atom in a bond to attract the bonding electrons to itself. It increases across a period and decreases down a group; fluorine is the highest. Electron affinity is for a free atom, electronegativity for a bonded atom.",
              "Metals: valence shell generally less than half full, they lose electrons (electropositive), large radius and low ionization energy, conduct electricity. Nonmetals: more than half full, gain electrons (electronegative), small radius, high ionization energy, insulators.",
              "Metalloids (B, Si, Ge, As, Sb, Te…) look like metals, have mostly nonmetal properties and intermediate electronegativity; used in transistors and semiconductors.",
              "Metallic character decreases across a period and increases down a group: the strongest metal is cesium (bottom left), the strongest nonmetal is fluorine (top right)."],
            ar: ["الميل الإلكتروني: مقدار الطاقة المنطلقة أو الممتصة عندما يكتسب مول من الذرات الغازية المفردة مولًا من الإلكترونات: " + eq("Br(g) + e⁻ → Br⁻(g)   ΔH = −325 kJ/mol") + ".",
              "تدرجه غير منتظم، وأعلى قيمه للهالوجينات (7A) (Cl = −349 وF = −328)، وقيمه موجبة للبريليوم والماغنسيوم والنيتروجين (2p نصف ممتلئ) والغازات النبيلة: أي تُمتص طاقة.",
              "السالبية الكهربية: قدرة الذرة في الرابطة على جذب إلكترونات الرابطة نحوها، وتزداد في الدورة وتقل في المجموعة، والفلور أعلاها. الميل الإلكتروني للذرة المفردة، والسالبية للذرة المرتبطة.",
              "الفلزات: غلاف التكافؤ غالبًا أقل من نصف ممتلئ، تفقد الإلكترونات (كهروموجبة)، نصف قطرها كبير وجهد تأينها صغير، وتوصل الكهرباء. اللافلزات: أكثر من نصف ممتلئ، تكتسب الإلكترونات (كهروسالبة)، نصف قطرها صغير وجهد تأينها كبير، وعازلة.",
              "أشباه الفلزات (B وSi وGe وAs وSb وTe…) لها مظهر الفلزات ومعظم خواص اللافلزات وسالبية كهربية متوسطة، وتُستخدم في الترانزستورات وأشباه الموصلات.",
              "الخاصية الفلزية تقل في الدورة وتزداد في المجموعة: أقوى الفلزات السيزيوم (أسفل اليسار)، وأقوى اللافلزات الفلور (أعلى اليمين)."]
          },
          story: {
            en: ["Ahmed and his cousin share one charger cable between their phones in the family car to Ain Sokhna.",
              "Whoever pulls harder gets more of the cable: in a bond, the more electronegative atom pulls the shared electrons closer. Fluorine always wins.",
              "Electron affinity is different: it is how happy a lonely atom is to receive a gift electron. Chlorine is delighted (energy released); neon refuses (energy absorbed).",
              "Metals like sodium are generous: they give away electrons easily, which is also why their electrons move and carry current.",
              "Silicon in Ahmed's phone chip sits between the two teams: a metalloid semiconductor."],
            ar: ["يتشارك أحمد وابن عمه كابل شاحن واحد بين هاتفيهما في سيارة العائلة إلى العين السخنة.",
              "من يشد أقوى يحصل على جزء أكبر من الكابل؛ ففي الرابطة تجذب الذرة الأعلى سالبية الإلكترونات المشتركة نحوها، والفلور يفوز دائمًا.",
              "أما الميل الإلكتروني فشيء آخر: مدى سعادة ذرة وحيدة باستقبال إلكترون هدية؛ الكلور يفرح (تنطلق طاقة)، والنيون يرفض (تُمتص طاقة).",
              "والفلزات مثل الصوديوم كريمة تعطي إلكتروناتها بسهولة، ولهذا تتحرك إلكتروناتها وتنقل التيار.",
              "والسيليكون في شريحة هاتف أحمد يقف بين الفريقين: شبه فلز وشبه موصل."]
          }
        },
        words: [
          ["Electron affinity", "الميل الإلكتروني", "The energy released or absorbed when one mole of gaseous atoms gains one mole of electrons.", "الطاقة المنطلقة أو الممتصة عندما يكتسب مول من الذرات الغازية مولًا من الإلكترونات."],
          ["Electronegativity", "السالبية الكهربية", "The ability of a bonded atom to attract the bonding electrons to itself.", "قدرة الذرة المرتبطة على جذب إلكترونات الرابطة نحوها."],
          ["Metals", "الفلزات", "Elements whose valence shell is generally less than half full; they lose electrons (electropositive).", "عناصر غلاف تكافؤها غالبًا أقل من نصف ممتلئ، تفقد الإلكترونات (كهروموجبة)."],
          ["Nonmetals", "اللافلزات", "Elements whose valence shell is generally more than half full; they gain electrons (electronegative).", "عناصر غلاف تكافؤها غالبًا أكثر من نصف ممتلئ، تكتسب الإلكترونات (كهروسالبة)."],
          ["Metalloids", "أشباه الفلزات", "Elements with a metallic appearance and mostly nonmetal properties; semiconductors.", "عناصر لها مظهر الفلزات ومعظم خواص اللافلزات، وهي أشباه موصلات."],
          ["Semiconductor", "شبه موصل", "A material whose conductivity is less than metals but much greater than nonmetals.", "مادة توصيلها أقل من الفلزات وأكبر كثيرًا من اللافلزات."]
        ],
        lab: { parts: [{ type: "sec2chem_negativity" }, {
          type: "sort",
          prompt: ["Tap an element, then tap its type.", "اضغط على العنصر، ثم اختر نوعه."],
          bins: [["m", "🔩", "Metal", "فلز"], ["d", "💻", "Metalloid", "شبه فلز"], ["n", "💨", "Nonmetal", "لافلز"]],
          items: [[["Cesium Cs", "السيزيوم Cs"], "m"], [["Magnesium Mg", "الماغنسيوم Mg"], "m"], [["Aluminium Al", "الألومنيوم Al"], "m"], [["Silicon Si", "السيليكون Si"], "d"], [["Germanium Ge", "الجرمانيوم Ge"], "d"], [["Arsenic As", "الزرنيخ As"], "d"],
            [["Fluorine F", "الفلور F"], "n"], [["Sulphur S", "الكبريت S"], "n"]]
        }] },
        quiz: [
          { q: ["The element with the highest electronegativity is...", "العنصر الأعلى في السالبية الكهربية هو..."],
            c: [["fluorine", "الفلور"], ["cesium", "السيزيوم"], ["chlorine", "الكلور"], ["neon", "النيون"]],
            off: ["Electronegativity increases across and up: fluorine at the top right is the highest.", "تزداد السالبية في الدورة وتقل في المجموعة، فالفلور أعلى يمين الجدول هو الأعلى."],
            sto: ["Fluorine always wins the cable tug.", "الفلور يفوز دائمًا بشد الكابل."] },
          { q: ["The electron affinity of nitrogen is positive because...", "الميل الإلكتروني للنيتروجين موجب لأن..."],
            c: [["its half-filled 2p sublevel is stable; the new electron must pair", "مستواه 2p نصف ممتلئ مستقر، والإلكترون الجديد يجب أن يزدوج"], ["it is a metal", "لأنه فلز"], ["its 2p is full", "لأن 2p ممتلئ"], ["it has a large radius", "لأن نصف قطره كبير"]],
            off: ["2p³ is half-filled and stable; an added electron pairs and lowers stability, so energy is absorbed.", "2p³ نصف ممتلئ ومستقر، والإلكترون المضاف يزدوج فيقل الاستقرار فتُمتص طاقة."],
            sto: ["Three passengers each with their own seat do not want a fourth squeezing in.", "ثلاثة ركاب لكل منهم مقعده لا يرحبون برابع يزاحمهم."] },
          { q: ["Which group has the highest (most negative) electron affinity values?", "أي مجموعة لها أعلى قيم ميل إلكتروني (الأكثر سالبية)؟"],
            c: [["The halogens (7A)", "الهالوجينات (7A)"], ["The noble gases", "الغازات النبيلة"], ["Group 2A", "المجموعة 2A"], ["Group 1A", "المجموعة 1A"]],
            off: ["Their anions get the configuration of the nearest noble gas (Cl −349, F −328 kJ/mol).", "أنيوناتها تصل إلى تركيب أقرب غاز نبيل (Cl = −349 وF = −328 كيلوجول/مول)."],
            sto: ["One electron away from a complete set, so they welcome the gift.", "على بعد إلكترون من الطقم الكامل، فيرحبون بالهدية."] },
          { q: ["Nonmetals are characterised by...", "تتميز اللافلزات بأن..."],
            c: [["high ionization energy", "جهد تأينها كبير"], ["being electropositive", "عناصرها كهروموجبة"], ["low electronegativity", "سالبيتها الكهربية منخفضة"], ["large atomic radius", "نصف قطرها الذري كبير"]],
            off: ["Small radius → valence electrons held strongly → high ionization energy, electronegative, insulators.", "نصف قطر صغير ← إلكترونات تكافؤ مرتبطة بقوة ← جهد تأين كبير وكهروسالبية وعزل."],
            sto: ["Nonmetals grip their electrons tightly.", "اللافلزات تقبض على إلكتروناتها بقوة."] },
          { q: ["The strongest metallic element is...", "أقوى العناصر الفلزية هو..."],
            c: [["cesium", "السيزيوم"], ["sodium", "الصوديوم"], ["aluminium", "الألومنيوم"], ["iron", "الحديد"]],
            off: ["Metallic character increases down and to the left: cesium at the bottom left.", "تزداد الخاصية الفلزية لأسفل ولليسار، فالسيزيوم أسفل اليسار."],
            sto: ["The most generous giver sits at the bottom left.", "أكرم مانح يجلس أسفل اليسار."] },
          { q: ["Metalloids are used in...", "تُستخدم أشباه الفلزات في..."],
            c: [["transistors and semiconductors", "الترانزستورات وأشباه الموصلات"], ["electric wires", "الأسلاك الكهربية"], ["thermal insulation only", "العزل الحراري فقط"], ["making acids", "صناعة الأحماض"]],
            off: ["Their conductivity is between metals and nonmetals: ideal for electronic parts.", "توصيلها الكهربي بين الفلزات واللافلزات، فهي مثالية للأجزاء الإلكترونية."],
            sto: ["Silicon chips in every phone.", "شرائح السيليكون في كل هاتف."] },
          { q: ["What is the difference between electron affinity and electronegativity?", "ما الفرق بين الميل الإلكتروني والسالبية الكهربية؟"],
            c: [["Affinity is energy for a free atom; electronegativity is attraction in a bonded atom", "الميل طاقة للذرة المفردة، والسالبية قدرة جذب للذرة المرتبطة"], ["They are the same thing", "هما الشيء نفسه"], ["Affinity is for bonded atoms", "الميل للذرات المرتبطة"], ["Electronegativity is measured in kJ/mol", "السالبية تقاس بالكيلوجول/مول"]],
            off: ["Electron affinity is an energy (kJ/mol) of an isolated gaseous atom; electronegativity is a relative value for an atom in a bond.", "الميل الإلكتروني طاقة (كيلوجول/مول) لذرة غازية مفردة، والسالبية الكهربية قيمة نسبية لذرة في رابطة."],
            sto: ["Accepting a gift alone versus winning a tug in a team.", "قبول هدية وحدك مقابل الفوز بالشد داخل فريق."] }
        ]
      },
      {
        id: "sec2chemu3l4", icon: "🧫", page: 54,
        title: { en: "Acidic and Basic Properties", ar: "الخواص الحامضية والقاعدية" },
        idea: {
          official: {
            en: ["Nonmetal oxides dissolve in water to give acids: " + eq("CO₂ + H₂O → H₂CO₃") + ", " + eq("SO₃ + H₂O → H₂SO₄") + ". They are acidic oxides and react with alkalis: " + eq("CO₂ + 2NaOH → Na₂CO₃ + H₂O") + ".",
              "Metal oxides are basic oxides and react with acids to give salt and water: " + eq("Na₂O + 2HCl → 2NaCl + H₂O") + ", " + eq("MgO + H₂SO₄ → MgSO₄ + H₂O") + ". Soluble ones are alkaline oxides: " + eq("Na₂O + H₂O → 2NaOH") + ".",
              "Amphoteric oxides (Al₂O₃, ZnO, Sb₂O₃, SnO) react as basic and as acidic oxides: " + eq("Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O") + " (sodium aluminate), " + eq("ZnO + 2NaOH → Na₂ZnO₂ + H₂O") + " (sodium zincate).",
              "Neutral oxides (CO, NO, N₂O) react with neither acids nor alkalis and do not dissolve easily in water.",
              "Across a period the basic property of oxides decreases and the acidic property increases. Down group 1 the basic property increases. Down group 7A the acidity of the hydrides increases (HI > HBr > HCl > HF): a larger atom holds hydrogen less tightly."],
            ar: ["أكاسيد اللافلزات تذوب في الماء فتعطي أحماضًا: " + eq("CO₂ + H₂O → H₂CO₃") + "، " + eq("SO₃ + H₂O → H₂SO₄") + "، وهي أكاسيد حامضية تتفاعل مع القلويات: " + eq("CO₂ + 2NaOH → Na₂CO₃ + H₂O") + ".",
              "أكاسيد الفلزات أكاسيد قاعدية تتفاعل مع الأحماض فتعطي ملحًا وماء: " + eq("Na₂O + 2HCl → 2NaCl + H₂O") + "، " + eq("MgO + H₂SO₄ → MgSO₄ + H₂O") + "، والذائبة منها أكاسيد قلوية: " + eq("Na₂O + H₂O → 2NaOH") + ".",
              "الأكاسيد المترددة (Al₂O₃ وZnO وSb₂O₃ وSnO) تتفاعل كأكاسيد قاعدية وكأكاسيد حامضية: " + eq("Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O") + " (ألومينات الصوديوم)، " + eq("ZnO + 2NaOH → Na₂ZnO₂ + H₂O") + " (زنكات الصوديوم).",
              "الأكاسيد المتعادلة (CO وNO وN₂O) لا تتفاعل مع الأحماض ولا مع القلويات ولا تذوب بسهولة في الماء.",
              "في الدورة تقل الخاصية القاعدية للأكاسيد وتزداد الحامضية، وفي المجموعة الأولى تزداد القاعدية لأسفل، وفي المجموعة 7A تزداد حامضية الهيدريدات لأسفل (HI > HBr > HCl > HF) لأن الذرة الأكبر تجذب الهيدروجين بقوة أقل."]
          },
          story: {
            en: ["Yasmine opens a bottle of soda at a picnic in Al-Azhar Park. The fizz is CO₂, and the slightly sour taste is carbonic acid.",
              "Her grandmother cleans an old aluminium pot and warns: 'Don't scrub it with strong caustic soda or lemon for long.'",
              "Yasmine understands: the aluminium oxide layer is amphoteric; it is attacked by both acids and alkalis.",
              "The car exhaust that worries her teacher contains carbon monoxide: a neutral oxide that neither acid nor alkali can remove.",
              "One oxygen, many personalities: acidic, basic, amphoteric or neutral."],
            ar: ["تفتح ياسمين زجاجة مياه غازية في نزهة بحديقة الأزهر؛ الفوران هو CO₂، والطعم الحمضي الخفيف هو حمض الكربونيك.",
              "جدتها تنظف حلة ألومنيوم قديمة وتحذرها: «لا تدعكيها بالصودا الكاوية القوية أو الليمون طويلًا».",
              "تفهم ياسمين: طبقة أكسيد الألومنيوم مترددة؛ يهاجمها الحمض والقلوي معًا.",
              "وعادم السيارات الذي يقلق معلمتها فيه أول أكسيد الكربون: أكسيد متعادل لا يزيله حمض ولا قلوي.",
              "أكسجين واحد وشخصيات كثيرة: حامضي وقاعدي ومتردد ومتعادل."]
          }
        },
        words: [
          ["Acidic oxide", "أكسيد حامضي", "A nonmetal oxide that dissolves in water to give an acid and reacts with alkalis.", "أكسيد لافلز يذوب في الماء فيعطي حمضًا ويتفاعل مع القلويات."],
          ["Basic oxide", "أكسيد قاعدي", "A metal oxide that reacts with acids to give salt and water.", "أكسيد فلز يتفاعل مع الأحماض فيعطي ملحًا وماء."],
          ["Alkaline oxide", "أكسيد قلوي", "A basic oxide that dissolves in water to give an alkali, such as Na₂O and K₂O.", "أكسيد قاعدي يذوب في الماء فيعطي قلويًا مثل Na₂O وK₂O."],
          ["Amphoteric oxide", "أكسيد متردد", "An oxide that reacts as a basic oxide with acids and as an acidic oxide with alkalis (Al₂O₃, ZnO).", "أكسيد يتفاعل كأكسيد قاعدي مع الأحماض وكأكسيد حامضي مع القلويات (Al₂O₃ وZnO)."],
          ["Neutral oxide", "أكسيد متعادل", "An oxide that reacts with neither acids nor alkalis (CO, NO, N₂O).", "أكسيد لا يتفاعل مع الأحماض ولا مع القلويات (CO وNO وN₂O)."]
        ],
        lab: { parts: [{ type: "sec2chem_oxides" }, {
          type: "sort",
          prompt: ["Tap an oxide, then tap its type.", "اضغط على الأكسيد، ثم اختر نوعه."],
          bins: [["a", "🍋", "Acidic", "حامضي"], ["b", "🧼", "Basic", "قاعدي"], ["m", "⚖️", "Amphoteric", "متردد"], ["n", "⭕", "Neutral", "متعادل"]],
          items: [["CO₂", "a"], ["SO₃", "a"], ["Na₂O", "b"], ["K₂O", "b"], ["MgO", "b"], ["Al₂O₃", "m"], ["ZnO", "m"], ["SnO", "m"], ["CO", "n"], ["NO", "n"], ["N₂O", "n"]]
        }] },
        quiz: [
          { q: ["Which equation shows that SO₃ is an acidic oxide?", "أي معادلة توضح أن SO₃ أكسيد حامضي؟"],
            c: [[eq("SO₃ + H₂O → H₂SO₄"), eq("SO₃ + H₂O → H₂SO₄")], [eq("SO₃ + HCl → no reaction"), eq("SO₃ + HCl → no reaction")], [eq("Na₂O + H₂O → 2NaOH"), eq("Na₂O + H₂O → 2NaOH")], [eq("ZnO + H₂SO₄ → ZnSO₄ + H₂O"), eq("ZnO + H₂SO₄ → ZnSO₄ + H₂O")]],
            off: ["A nonmetal oxide dissolving in water to give sulphuric acid is the proof.", "ذوبان أكسيد اللافلز في الماء معطيًا حمض الكبريتيك هو الدليل."],
            sto: ["Sulphur's oxide turns water sour.", "أكسيد الكبريت يجعل الماء حمضيًا."] },
          { q: ["An oxide that reacts with both HCl and NaOH is...", "الأكسيد الذي يتفاعل مع HCl ومع NaOH هو..."],
            c: [["Al₂O₃", "Al₂O₃"], ["Na₂O", "Na₂O"], ["CO₂", "CO₂"], ["CO", "CO"]],
            off: ["Al₂O₃ is amphoteric: with HCl it gives AlCl₃; with NaOH it gives sodium aluminate NaAlO₂.", "Al₂O₃ متردد: مع HCl يعطي AlCl₃، ومع NaOH يعطي ألومينات الصوديوم NaAlO₂."],
            sto: ["Grandma's aluminium pot fears both lemon and caustic soda.", "حلة الجدة الألومنيوم تخاف الليمون والصودا الكاوية معًا."] },
          { q: ["Carbon monoxide CO is classified as...", "يُصنف أول أكسيد الكربون CO على أنه..."],
            c: [["a neutral oxide", "أكسيد متعادل"], ["an acidic oxide", "أكسيد حامضي"], ["a basic oxide", "أكسيد قاعدي"], ["an amphoteric oxide", "أكسيد متردد"]],
            off: ["CO, NO and N₂O react with neither acids nor alkalis and do not dissolve easily in water.", "CO وNO وN₂O لا تتفاعل مع الأحماض ولا القلويات ولا تذوب بسهولة في الماء."],
            sto: ["The exhaust gas that ignores both teams.", "غاز العادم الذي يتجاهل الفريقين."] },
          { q: ["The product of " + eq("ZnO + 2NaOH") + " is...", "ناتج تفاعل " + eq("ZnO + 2NaOH") + " هو..."],
            c: [["sodium zincate Na₂ZnO₂ + H₂O", "زنكات الصوديوم Na₂ZnO₂ + H₂O"], ["zinc hydroxide only", "هيدروكسيد الخارصين فقط"], ["no reaction", "لا يحدث تفاعل"], ["ZnSO₄ + H₂O", "ZnSO₄ + H₂O"]],
            off: [eq("ZnO + 2NaOH → Na₂ZnO₂ + H₂O") + ": ZnO acts as an acidic oxide here.", eq("ZnO + 2NaOH → Na₂ZnO₂ + H₂O") + "، وهنا يسلك ZnO سلوك الأكسيد الحامضي."],
            sto: ["Zinc oxide switches sides when it meets an alkali.", "أكسيد الخارصين يغير فريقه عندما يقابل قلويًا."] },
          { q: ["Across period 3 from Na to Cl, the oxides become...", "عبر الدورة الثالثة من Na إلى Cl تصبح الأكاسيد..."],
            c: [["less basic and more acidic", "أقل قاعدية وأكثر حامضية"], ["more basic", "أكثر قاعدية"], ["all neutral", "كلها متعادلة"], ["less acidic", "أقل حامضية"]],
            off: ["Na₂O is basic, Al₂O₃ amphoteric, SO₃ and Cl oxides acidic: acidity increases with atomic number.", "Na₂O قاعدي وAl₂O₃ متردد وأكاسيد الكبريت والكلور حامضية؛ تزداد الحامضية بزيادة العدد الذري."],
            sto: ["From soap on the left to lemon on the right.", "من الصابون يسارًا إلى الليمون يمينًا."] },
          { q: ["The strongest acid among the hydrogen halides is...", "أقوى الأحماض بين هاليدات الهيدروجين..."],
            c: [["HI", "HI"], ["HF", "HF"], ["HCl", "HCl"], ["HBr", "HBr"]],
            off: ["Down group 7A the radius increases, attraction for H decreases, ionization is easier: HI is the strongest.", "في المجموعة 7A لأسفل يزداد نصف القطر ويقل جذب الهيدروجين فيسهل تأينه: HI الأقوى."],
            sto: ["The biggest atom lets go of hydrogen most easily.", "الذرة الأكبر تترك الهيدروجين بسهولة أكثر."] },
          { q: ["Which forms an alkali when dissolved in water?", "أي مما يلي يعطي قلويًا عند ذوبانه في الماء؟"],
            c: [["K₂O", "K₂O"], ["SO₃", "SO₃"], ["CO", "CO"], ["Al₂O₃", "Al₂O₃"]],
            off: [eq("K₂O + H₂O → 2KOH") + ": K₂O is a soluble basic (alkaline) oxide.", eq("K₂O + H₂O → 2KOH") + "، فـ K₂O أكسيد قاعدي ذائب (قلوي)."],
            sto: ["Potassium oxide makes slippery, soapy water.", "أكسيد البوتاسيوم يجعل الماء زلقًا كالصابون."] }
        ]
      },
      {
        id: "sec2chemu3l5", icon: "🔄", page: 55,
        title: { en: "Oxidation Numbers and Redox Reactions", ar: "أعداد التأكسد وتفاعلات الأكسدة والاختزال" },
        idea: {
          official: {
            en: ["The oxidation number is the charge (positive or negative) the atom or ion would carry in the compound, ionic or covalent. In ionic compounds it equals the ion's charge; in molecules of one element it is 0; in covalent bonds the more electronegative atom takes the negative.",
              "Rules: the sum in a neutral molecule is 0; 1A = +1, 2A = +2, 3A = +3, F = −1 always; O is −2 (but −1 in peroxides H₂O₂, Na₂O₂, −½ in KO₂, +2 in OF₂); H is +1 (but −1 in metal hydrides NaH, CaH₂); a group's number equals its charge (NO₃⁻ −1, SO₄²⁻ −2, NH₄⁺ +1).",
              "Example: Mn in KMnO₄: " + eq("+1 + x + 4(−2) = 0 → x = +7") + ".",
              "Oxidation: losing electrons, increase in oxidation number. Reduction: gaining electrons, decrease. The reducing agent loses electrons; the oxidizing agent gains them; electrons lost = electrons gained.",
              "In " + eq("2NaI + Cl₂ → 2NaCl + I₂") + ", Na⁺ is a spectator ion. Net ionic: " + eq("2I⁻ + Cl₂ → I₂ + 2Cl⁻") + "; half-reactions: " + eq("2I⁻ → I₂ + 2e⁻") + " and " + eq("Cl₂ + 2e⁻ → 2Cl⁻") + ".",
              "Balancing: separate halves, balance atoms, add electrons, equalise electrons, add. " + eq("2Cr + 6H⁺ → 2Cr³⁺ + 3H₂") + ". Disproportionation: one element is both oxidized and reduced (" + eq("2H₂O₂ → 2H₂O + O₂") + "); comproportionation: " + eq("2H₂S + SO₂ → 3S + 2H₂O") + "."],
            ar: ["عدد التأكسد هو مقدار الشحنة (الموجبة أو السالبة) التي تبدو على الذرة أو الأيون في المركب أيونيًا كان أو تساهميًا؛ في المركبات الأيونية يساوي شحنة الأيون، وفي جزيئات العنصر الواحد صفر، وفي الروابط التساهمية تحمل الذرة الأعلى سالبية الشحنة السالبة.",
              "القواعد: مجموع أعداد التأكسد في الجزيء المتعادل صفر، و1A = +1 و2A = +2 و3A = +3 والفلور −1 دائمًا، والأكسجين −2 (لكنه −1 في فوق الأكاسيد H₂O₂ وNa₂O₂، و−½ في KO₂، و+2 في OF₂)، والهيدروجين +1 (لكنه −1 في هيدريدات الفلزات NaH وCaH₂)، وعدد تأكسد المجموعة الذرية = شحنتها (NO₃⁻ = −1، SO₄²⁻ = −2، NH₄⁺ = +1).",
              "مثال: المنجنيز في KMnO₄: " + eq("+1 + x + 4(−2) = 0 → x = +7") + ".",
              "الأكسدة: فقد إلكترونات يصحبه زيادة في عدد التأكسد، والاختزال: اكتساب إلكترونات يصحبه نقص فيه. العامل المختزل يفقد الإلكترونات، والعامل المؤكسد يكتسبها، والإلكترونات المفقودة = المكتسبة.",
              "في " + eq("2NaI + Cl₂ → 2NaCl + I₂") + " يكون Na⁺ أيونًا متفرجًا، والمعادلة الأيونية الصافية " + eq("2I⁻ + Cl₂ → I₂ + 2Cl⁻") + "، ونصفا التفاعل: " + eq("2I⁻ → I₂ + 2e⁻") + " و" + eq("Cl₂ + 2e⁻ → 2Cl⁻") + ".",
              "الوزن: نفصل نصفي التفاعل، ونزن الذرات، ونضيف الإلكترونات، ونساوي عددها، ثم نجمع: " + eq("2Cr + 6H⁺ → 2Cr³⁺ + 3H₂") + ". وفي تفاعل الأكسدة والاختزال الذاتي يتأكسد العنصر نفسه ويُختزل (" + eq("2H₂O₂ → 2H₂O + O₂") + ")، وفي التفاعل التناسبي: " + eq("2H₂S + SO₂ → 3S + 2H₂O") + "."]
          },
          story: {
            en: ["Adam and Nada trade football stickers at school in Tanta. Adam gives away 2 stickers, Nada receives exactly 2.",
              "Adam 'lost' (oxidized), Nada 'gained' (reduced). Adam made Nada richer, so Adam is the reducing agent; Nada, who took them, is the oxidizing agent.",
              "Their friend Fady just stands and watches the trade: a spectator ion, he can be left out of the net story.",
              "Stickers are never created or destroyed in the trade: electrons lost always equal electrons gained.",
              "Their teacher keeps score with oxidation numbers: whoever's number goes up was oxidized."],
            ar: ["يتبادل آدم وندى ملصقات كرة القدم في المدرسة في طنطا؛ يعطي آدم ملصقين، وتستقبل ندى ملصقين بالضبط.",
              "آدم «فقد» (تأكسد)، وندى «اكتسبت» (اختُزلت)، وآدم جعل ندى أغنى فهو العامل المختزل، وندى التي أخذت هي العامل المؤكسد.",
              "وصديقهما فادي يقف ويشاهد فقط: أيون متفرج يمكن حذفه من القصة الصافية.",
              "الملصقات لا تُخلق ولا تفنى في التبادل: الإلكترونات المفقودة تساوي دائمًا المكتسبة.",
              "والمعلمة تسجل النتيجة بأعداد التأكسد: من يزيد عدده يكون قد تأكسد."]
          }
        },
        words: [
          ["Oxidation number", "عدد التأكسد", "A number showing the charge an atom or ion would carry in a compound.", "عدد يعبر عن الشحنة التي تبدو على الذرة أو الأيون في المركب."],
          ["Oxidation", "الأكسدة", "Losing electrons, with an increase in positive charge (oxidation number).", "فقد إلكترونات يصحبه زيادة في الشحنة الموجبة (عدد التأكسد)."],
          ["Reduction", "الاختزال", "Gaining electrons, with a decrease in positive charge.", "اكتساب إلكترونات يصحبه نقص في الشحنة الموجبة."],
          ["Oxidizing agent", "العامل المؤكسد", "The reactant that gains electrons (it is reduced).", "المادة التي تكتسب الإلكترونات (تُختزل)."],
          ["Reducing agent", "العامل المختزل", "The reactant that loses electrons (it is oxidized).", "المادة التي تفقد الإلكترونات (تتأكسد)."],
          ["Spectator ion", "الأيون المتفرج", "An ion whose oxidation number does not change in the reaction.", "أيون لا يتغير عدد تأكسده في التفاعل."],
          ["Disproportionation", "الأكسدة والاختزال الذاتي", "A redox reaction where one element in one reactant is both oxidized and reduced.", "تفاعل أكسدة واختزال يتأكسد فيه العنصر نفسه ويُختزل في متفاعل واحد."]
        ],
        lab: { parts: [{ type: "sec2chem_redox" }] },
        quiz: [
          { q: ["The oxidation number of Mn in KMnO₄ is...", "عدد تأكسد المنجنيز في KMnO₄..."],
            c: [["+7", "+7"], ["+5", "+5"], ["+4", "+4"], ["+8", "+8"]],
            off: [eq("+1 + x + 4(−2) = 0 → x = +7") + ".", eq("+1 + x + 4(−2) = 0 → x = +7") + "."],
            sto: ["Four oxygens pull −8; potassium gives +1; manganese must bring +7.", "أربع ذرات أكسجين تسحب −8 والبوتاسيوم يعطي +1، فلا بد أن يحمل المنجنيز +7."] },
          { q: ["The oxidation number of oxygen in OF₂ is...", "عدد تأكسد الأكسجين في OF₂..."],
            c: [["+2", "+2"], ["−2", "−2"], ["−1", "−1"], ["0", "0"]],
            off: ["F is always −1: " + eq("x + 2(−1) = 0 → x = +2") + ". Fluorine is more electronegative than oxygen.", "الفلور دائمًا −1: " + eq("x + 2(−1) = 0 → x = +2") + "، لأن الفلور أعلى سالبية من الأكسجين."],
            sto: ["Even oxygen loses the tug against fluorine.", "حتى الأكسجين يخسر الشد أمام الفلور."] },
          { q: ["The oxidation number of hydrogen in NaH is...", "عدد تأكسد الهيدروجين في NaH..."],
            c: [["−1", "−1"], ["+1", "+1"], ["0", "0"], ["+2", "+2"]],
            off: ["In active-metal hydrides H is the negative ion H⁻; Na is +1. On electrolysis of molten NaH, H₂ is freed at the anode.", "في هيدريدات الفلزات النشطة يكون الهيدروجين أيونًا سالبًا H⁻ والصوديوم +1، وعند التحليل الكهربي لـ NaH المنصهر يتصاعد الهيدروجين عند المصعد."],
            sto: ["Next to sodium, hydrogen is the one that takes the electron.", "بجوار الصوديوم يكون الهيدروجين هو من يأخذ الإلكترون."] },
          { q: ["The oxidation number of Cl in NaClO₃ is...", "عدد تأكسد الكلور في NaClO₃..."],
            c: [["+5", "+5"], ["+3", "+3"], ["−1", "−1"], ["+7", "+7"]],
            off: [eq("+1 + x + 3(−2) = 0 → x = +5") + ". +7 is in NaClO₄, +3 in NaClO₂, −1 in NaCl.", eq("+1 + x + 3(−2) = 0 → x = +5") + "، و+7 في NaClO₄ و+3 في NaClO₂ و−1 في NaCl."],
            sto: ["Three oxygens: −6; sodium +1; chlorine fills the gap: +5.", "ثلاث ذرات أكسجين: −6، والصوديوم +1، والكلور يسد الفرق: +5."] },
          { q: ["In " + eq("2I⁻ + Cl₂ → I₂ + 2Cl⁻") + ", the oxidizing agent is...", "في " + eq("2I⁻ + Cl₂ → I₂ + 2Cl⁻") + " يكون العامل المؤكسد..."],
            c: [["Cl₂", "Cl₂"], ["I⁻", "I⁻"], ["I₂", "I₂"], ["Cl⁻", "Cl⁻"]],
            off: ["Cl goes 0 → −1 (gains electrons, reduced) so Cl₂ is the oxidizing agent; I⁻ goes −1 → 0 (oxidized), the reducing agent.", "الكلور من صفر إلى −1 (اكتسب إلكترونات واختُزل) فهو العامل المؤكسد، واليود من −1 إلى صفر (تأكسد) فهو العامل المختزل."],
            sto: ["Chlorine is Nada: it takes the stickers.", "الكلور هو ندى: يأخذ الملصقات."] },
          { q: ["Which reaction is NOT a redox reaction?", "أي تفاعل مما يلي ليس تفاعل أكسدة واختزال؟"],
            c: [[eq("NaOH + HNO₃ → NaNO₃ + H₂O"), eq("NaOH + HNO₃ → NaNO₃ + H₂O")], [eq("Zn + 2HCl → ZnCl₂ + H₂"), eq("Zn + 2HCl → ZnCl₂ + H₂")], [eq("Mg + CuSO₄ → MgSO₄ + Cu"), eq("Mg + CuSO₄ → MgSO₄ + Cu")], [eq("2NaI + Cl₂ → 2NaCl + I₂"), eq("2NaI + Cl₂ → 2NaCl + I₂")]],
            off: ["Neutralization: Na +1, N +5, O −2, H +1 on both sides; no oxidation number changes.", "التعادل: Na = +1 وN = +5 وO = −2 وH = +1 في الطرفين، فلا يتغير أي عدد تأكسد."],
            sto: ["A swap of partners with nobody losing stickers.", "تبادل شركاء دون أن يفقد أحد ملصقات."] },
          { q: ["To balance " + eq("Cr + H⁺ → Cr³⁺ + H₂") + ", the oxidation half is multiplied by...", "لوزن " + eq("Cr + H⁺ → Cr³⁺ + H₂") + " نضرب نصف تفاعل الأكسدة في..."],
            c: [["2 (and the reduction half by 3)", "2 (ونصف الاختزال في 3)"], ["3 (and the reduction half by 2)", "3 (ونصف الاختزال في 2)"], ["1 (and the reduction half by 1)", "1 (ونصف الاختزال في 1)"], ["6 (and the reduction half by 1)", "6 (ونصف الاختزال في 1)"]],
            off: [eq("Cr → Cr³⁺ + 3e⁻") + " ×2 and " + eq("2H⁺ + 2e⁻ → H₂") + " ×3: 6 electrons each → " + eq("2Cr + 6H⁺ → 2Cr³⁺ + 3H₂") + ".", eq("Cr → Cr³⁺ + 3e⁻") + " × 2 و" + eq("2H⁺ + 2e⁻ → H₂") + " × 3: 6 إلكترونات لكل منهما ← " + eq("2Cr + 6H⁺ → 2Cr³⁺ + 3H₂") + "."],
            sto: ["Find the smallest number both 3 and 2 go into: 6.", "ابحث عن أصغر عدد يقبل القسمة على 3 و2: 6."] },
          { q: [eq("2H₂O₂ → 2H₂O + O₂") + " is an example of...", eq("2H₂O₂ → 2H₂O + O₂") + " مثال على..."],
            c: [["disproportionation (self oxidation-reduction)", "الأكسدة والاختزال الذاتي"], ["comproportionation", "التفاعل التناسبي"], ["neutralization", "التعادل"], ["no redox at all", "لا أكسدة ولا اختزال"]],
            off: ["Oxygen (−1) is oxidized to O₂ (0) and reduced to H₂O (−2) in the same reactant.", "الأكسجين (−1) يتأكسد إلى O₂ (صفر) ويُختزل إلى H₂O (−2) في المتفاعل نفسه."],
            sto: ["One player who both scores and concedes in the same match.", "لاعب واحد يسجل ويُسجَّل عليه في المباراة نفسها."] }
        ]
      }
    ]
  });

  /* Arabic digits in Arabic strings (outside equations and Latin tokens such as 3d, 1A, KMnO4) */
  var EAST = "٠١٢٣٤٥٦٧٨٩";
  function arD(s) {
    if (typeof s !== "string") return s;
    return s.split(/(<span class="eq"[^>]*>[\s\S]*?<\/span>|<[^>]+>)/).map(function (seg) {
      if (seg.charAt(0) === "<") return seg;
      return seg.replace(/[A-Za-z]*\d+(?:\.\d+)?[A-Za-z]*/g, function (m) {
        return /[A-Za-z]/.test(m) ? m : m.replace(/\./g, "٫").replace(/\d/g, function (c) { return EAST[c]; });
      });
    }).join("");
  }
  function pa(p) { if (p && typeof p[1] === "string") p[1] = arD(p[1]); }
  G.arD = arD;
  G.units.forEach(function (u) {
    u.lessons.forEach(function (l) {
      l.idea.official.ar = l.idea.official.ar.map(arD); l.idea.story.ar = l.idea.story.ar.map(arD);
      l.words.forEach(function (w) { w[1] = arD(w[1]); w[3] = arD(w[3]); });
      l.quiz.forEach(function (q) { pa(q.q); q.c.forEach(pa); pa(q.off); pa(q.sto); });
      l.lab.parts.forEach(function (p) {
        if (p.prompt) pa(p.prompt);
        if (p.bins) p.bins.forEach(function (b) { b[3] = arD(b[3]); });
        if (p.items) p.items.forEach(function (it) { if (typeof it[0] !== "string") pa(it[0]); });
      });
    });
  });
})();

/* ---------- Secondary 2 Chemistry: objectives, extra quiz items, tappable diagrams ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var O = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var X = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var arD = (E.SCIG && E.SCIG.sec2chem && E.SCIG.sec2chem.arD) || function (s) { return s; };

  /* ----- "In this lesson" objectives (from the book's chapter objectives) ----- */
  O.sec2chemu1l1 = { en: ["Define the mole and Avogadro's number", "Calculate molar masses, including hydrated salts", "Convert between mass, moles and number of particles", "Count the ions produced when a salt dissolves"],
    ar: ["تعريف المول وعدد أفوجادرو", "حساب الكتل المولية ومنها الأملاح المتهدرتة", "التحويل بين الكتلة وعدد المولات وعدد الجسيمات", "حساب عدد الأيونات الناتجة من ذوبان ملح"] };
  O.sec2chemu1l2 = { en: ["State Avogadro's law and postulate", "Use the molar volume: 22.4 L at STP and 24 L at rtp", "Convert between gas volume, moles, mass and molecules"],
    ar: ["ذكر قانون أفوجادرو وفرضه", "استخدام الحجم المولاري: 22.4 لتر في STP و24 لترًا في rtp", "التحويل بين حجم الغاز وعدد المولات والكتلة وعدد الجزيئات"] };
  O.sec2chemu1l3 = { en: ["Use a balanced equation to find masses, moles and volumes", "Calculate the volumes of reactant or product gases", "Determine the limiting reactant", "Find the mass of the excess reactant left over"],
    ar: ["استخدام المعادلة الموزونة في حساب الكتل والمولات والحجوم", "حساب حجوم الغازات المتفاعلة أو الناتجة", "تحديد المادة المحددة للتفاعل", "حساب كتلة المادة الزائدة المتبقية"] };
  O.sec2chemu1l4 = { en: ["Differentiate empirical, molecular and structural formulas", "Find the empirical formula from percentages", "Deduce the molecular formula using n", "Use combustion data to find a hydrocarbon's formula"],
    ar: ["التمييز بين الصيغة الأولية والجزيئية والبنائية", "إيجاد الصيغة الأولية من النسب المئوية", "استنتاج الصيغة الجزيئية باستخدام n", "استخدام بيانات الاحتراق لإيجاد صيغة هيدروكربون"] };
  O.sec2chemu1l5 = { en: ["Calculate the molarity of a solution", "Find moles of solute from M and V", "Apply the dilution law M₁V₁ = M₂V₂", "Calculate the water needed for a dilution"],
    ar: ["حساب مولارية المحلول", "إيجاد عدد مولات المذاب من M وV", "تطبيق قانون التخفيف M₁V₁ = M₂V₂", "حساب حجم الماء اللازم للتخفيف"] };
  O.sec2chemu2l1 = { en: ["Describe Thomson's atomic model", "Explain Rutherford's gold foil experiment", "Link each observation to its conclusion", "State the postulates of Rutherford's model"],
    ar: ["وصف نموذج طومسون للذرة", "شرح تجربة رذرفورد ورقيقة الذهب", "ربط كل ملاحظة باستنتاجها", "ذكر فروض نموذج رذرفورد"] };
  O.sec2chemu2l2 = { en: ["Describe the line (emission) spectrum", "State Bohr's postulates", "Explain hydrogen's spectral lines by electron jumps", "Explain the limitations of Bohr's model"],
    ar: ["وصف الطيف الخطي (طيف الانبعاث)", "ذكر فروض بور", "تفسير خطوط طيف الهيدروجين بانتقالات الإلكترون", "توضيح أوجه قصور نموذج بور"] };
  O.sec2chemu2l3 = { en: ["Explain the modifications of modern atomic theory", "Define the electron cloud and the orbital", "Identify the four quantum numbers", "Relate n to sublevels, orbitals and electrons"],
    ar: ["توضيح تعديلات النظرية الذرية الحديثة", "تعريف السحابة الإلكترونية والأوربيتال", "التعرف على أعداد الكم الأربعة", "ربط n بالمستويات الفرعية والأوربيتالات والإلكترونات"] };
  O.sec2chemu2l4 = { en: ["Apply Pauli's exclusion principle", "Write configurations by the Aufbau principle", "Use the (n + l) rule", "Apply Hund's rule to p orbitals"],
    ar: ["تطبيق مبدأ الاستبعاد لباولي", "كتابة التوزيع الإلكتروني بمبدأ البناء التصاعدي", "استخدام قاعدة (n + l)", "تطبيق قاعدة هوند على أوربيتالات p"] };
  O.sec2chemu3l1 = { en: ["Describe the modern periodic table", "Identify the s, p, d and f blocks", "Relate a group's configuration to its number", "Classify elements into four types"],
    ar: ["وصف الجدول الدوري الحديث", "التعرف على الفئات s وp وd وf", "ربط توزيع المجموعة برقمها", "تصنيف العناصر إلى أربعة أنواع"] };
  O.sec2chemu3l2 = { en: ["Define the atomic radius", "Explain why the radius decreases across a period", "Compare ionic and atomic radii", "Define and trace ionization energy"],
    ar: ["تعريف نصف القطر الذري", "تفسير نقص نصف القطر في الدورة", "مقارنة نصف القطر الأيوني بالذري", "تعريف جهد التأين وتتبع تدرجه"] };
  O.sec2chemu3l3 = { en: ["Define electron affinity and electronegativity", "Compare electron affinity and electronegativity", "Locate metals, nonmetals and metalloids", "Trace metallic and nonmetallic character"],
    ar: ["تعريف الميل الإلكتروني والسالبية الكهربية", "المقارنة بين الميل الإلكتروني والسالبية الكهربية", "تحديد مواقع الفلزات واللافلزات وأشباه الفلزات", "تتبع الخاصية الفلزية واللافلزية"] };
  O.sec2chemu3l4 = { en: ["Classify oxides: acidic, basic, amphoteric, neutral", "Write equations for each type", "Relate atomic number to acidic and basic properties"],
    ar: ["تصنيف الأكاسيد: حامضية وقاعدية ومترددة ومتعادلة", "كتابة معادلات كل نوع", "ربط العدد الذري بالخواص الحامضية والقاعدية"] };
  O.sec2chemu3l5 = { en: ["Calculate the oxidation number of an atom in a compound", "Identify oxidation, reduction and the agents", "Write half-reactions and net ionic equations", "Balance redox equations by electrons"],
    ar: ["حساب عدد تأكسد ذرة في مركب", "تحديد الأكسدة والاختزال والعاملين المؤكسد والمختزل", "كتابة أنصاف التفاعلات والمعادلات الأيونية الصافية", "وزن معادلات الأكسدة والاختزال بالإلكترونات"] };

  /* ----- extra quiz items: one order/match + one true/false per lesson ----- */
  X.sec2chemu1l1 = [
    { k: "order", q: ["Order by molar mass, from SMALLEST to largest. [H=1, C=12, O=16, Na=23, S=32, Cu=63.5]", "رتب حسب الكتلة المولية من الأصغر إلى الأكبر."],
      items: [["CH₄ (16)", "CH₄ (16)"], ["H₂O (18)", "H₂O (18)"], ["CO₂ (44)", "CO₂ (44)"], ["Na₂CO₃ (106)", "Na₂CO₃ (106)"], ["CuSO₄·5H₂O (249.5)", "CuSO₄·5H₂O (249.5)"]],
      off: ["Add the atomic masses in each formula.", "اجمع الكتل الذرية في كل صيغة."],
      sto: ["From a feather-light gas to a heavy blue crystal.", "من غاز خفيف كالريشة إلى بلورة زرقاء ثقيلة."] },
    { k: "tf", a: true, q: ["True or false: 1 mol of water and 1 mol of salt contain the same number of particles.", "صواب أم خطأ: المول من الماء والمول من الملح يحتويان على العدد نفسه من الجسيمات."],
      off: ["True: every mole holds 6.02 × 10²³ particles; only their masses differ (18 g and 58.5 g).", "صواب: كل مول يحتوي على 6.02 × 10²³ جسيم، والكتلتان فقط مختلفتان (18 جم و58.5 جم)."],
      sto: ["A sack is a sack, whatever is inside.", "الشيكارة شيكارة مهما كان ما بداخلها."] }
  ];
  X.sec2chemu1l2 = [
    { k: "match", q: ["Match each amount of gas to its volume.", "صِل كل كمية غاز بحجمها."],
      pairs: [[["1 mol at STP", "1 مول في STP"], ["22.4 L", "22.4 لتر"]], [["1 mol at rtp", "1 مول في rtp"], ["24 L", "24 لترًا"]], [["0.5 mol at STP", "0.5 مول في STP"], ["11.2 L", "11.2 لتر"]], [["2 mol at rtp", "2 مول في rtp"], ["48 L", "48 لترًا"]]],
      off: ["Volume = moles × molar volume (22.4 at STP, 24 at rtp).", "الحجم = عدد المولات × الحجم المولاري (22.4 في STP و24 في rtp)."],
      sto: ["Warm room, slightly bigger balloons.", "الغرفة الدافئة تعطي بالونات أكبر قليلًا."] },
    { k: "tf", a: false, q: ["True or false: 1 mol of CO₂ occupies a larger volume than 1 mol of H₂ at STP because it is heavier.", "صواب أم خطأ: المول من CO₂ يشغل حجمًا أكبر من مول H₂ في STP لأنه أثقل."],
      off: ["False. Both occupy 22.4 L at STP; volume depends on the number of moles, not on the mass.", "خطأ؛ كلاهما يشغل 22.4 لتر في STP، فالحجم يعتمد على عدد المولات لا الكتلة."],
      sto: ["Same balloon size, very different weights.", "حجم البالون نفسه وأوزان مختلفة جدًا."] }
  ];
  X.sec2chemu1l3 = [
    { k: "order", q: ["Order the steps to find the limiting reactant.", "رتب خطوات تحديد المادة المحددة للتفاعل."],
      items: [["Write the balanced equation", "اكتب المعادلة الموزونة"], ["Change given amounts to moles", "حوّل الكميات المعطاة إلى مولات"], ["Divide moles by each coefficient", "اقسم المولات على معامل كل مادة"], ["The smaller ratio is limiting", "النسبة الأصغر هي المحددة"]],
      off: ["Balanced equation → moles → ratio to coefficient → compare.", "المعادلة الموزونة ← المولات ← النسبة إلى المعامل ← المقارنة."],
      sto: ["Recipe, count, divide, find what runs out.", "الوصفة، العد، القسمة، ثم ما ينفد."] },
    { k: "tf", a: false, q: ["True or false: the limiting reactant is always the one present in the smaller number of moles.", "صواب أم خطأ: المادة المحددة هي دائمًا المادة ذات عدد المولات الأقل."],
      off: ["False. Compare moles ÷ coefficient. 1 mol H₂ vs 0.6 mol O₂ in 2H₂ + O₂: H₂ is limiting although it has more moles.", "خطأ؛ نقارن المولات ÷ المعامل. 1 مول H₂ مقابل 0.6 مول O₂ في 2H₂ + O₂: الهيدروجين محدد رغم أن مولاته أكثر."],
      sto: ["Ten loaves can still run out if each sandwich needs two.", "عشرة أرغفة قد تنفد إذا احتاج كل سندويتش رغيفين."] }
  ];
  X.sec2chemu1l4 = [
    { k: "order", q: ["Order the steps to find a molecular formula from percentages.", "رتب خطوات إيجاد الصيغة الجزيئية من النسب المئوية."],
      items: [["Take the % as grams in 100 g", "اعتبر النسبة جرامات في 100 جم"], ["Divide by atomic masses to get moles", "اقسم على الكتل الذرية لتحصل على المولات"], ["Divide by the smallest number of moles", "اقسم على أصغر عدد مولات"], ["Write the empirical formula", "اكتب الصيغة الأولية"], ["n = molar mass ÷ empirical mass", "n = الكتلة المولية ÷ كتلة الصيغة الأولية"]],
      off: ["Percent → moles → simplest ratio → empirical formula → n → molecular formula.", "النسبة ← المولات ← أبسط نسبة ← الصيغة الأولية ← n ← الصيغة الجزيئية."],
      sto: ["Mariam's detective checklist.", "قائمة مريم البوليسية."] },
    { k: "tf", a: true, q: ["True or false: the empirical and molecular formulas of water are the same.", "صواب أم خطأ: الصيغة الأولية والجزيئية للماء متطابقتان."],
      off: ["True: H₂O cannot be simplified, so n = 1.", "صواب: H₂O لا يمكن تبسيطها، فـ n = 1."],
      sto: ["Some fingerprints are already the whole hand.", "بعض البصمات هي اليد كلها."] }
  ];
  X.sec2chemu1l5 = [
    { k: "match", q: ["Match each quantity to its formula.", "صِل كل كمية بقانونها."],
      pairs: [[["Molarity", "المولارية"], ["n ÷ V(L)", "n ÷ V(L)"]], [["Moles of solute", "مولات المذاب"], ["M × V(L)", "M × V(L)"]], [["Dilution", "التخفيف"], ["M₁V₁ = M₂V₂", "M₁V₁ = M₂V₂"]], [["Moles from mass", "المولات من الكتلة"], ["mass ÷ molar mass", "الكتلة ÷ الكتلة المولية"]]],
      off: ["These four relations solve every solution problem in the chapter.", "هذه العلاقات الأربع تحل كل مسائل المحاليل في الفصل."],
      sto: ["Four keys for the solutions lock.", "أربعة مفاتيح لقفل المحاليل."] },
    { k: "tf", a: true, q: ["True or false: adding water to a solution does not change the number of moles of solute.", "صواب أم خطأ: إضافة الماء إلى المحلول لا تغير عدد مولات المذاب."],
      off: ["True. Only the volume increases, so the molarity decreases.", "صواب؛ يزداد الحجم فقط فتقل المولارية."],
      sto: ["Same hibiscus, bigger jug.", "الكركديه نفسه في إبريق أكبر."] }
  ];
  X.sec2chemu2l1 = [
    { k: "match", q: ["Match each Rutherford observation to its conclusion.", "صِل كل ملاحظة لرذرفورد باستنتاجها."],
      pairs: [[["Most α pass straight through", "معظم ألفا تنفذ مستقيمة"], ["The atom is mostly empty space", "معظم الذرة فراغ"]], [["Very few bounce back", "قلة قليلة جدًا ترتد"], ["A tiny dense nucleus", "نواة صغيرة كثيفة"]], [["Some are deflected", "بعضها ينحرف"], ["The nucleus is positive", "النواة موجبة"]]],
      off: ["Each observation gives one piece of Rutherford's model.", "كل ملاحظة تعطي جزءًا من نموذج رذرفورد."],
      sto: ["Three clues, one solar-system atom.", "ثلاثة أدلة وذرة على شكل مجموعة شمسية."] },
    { k: "tf", a: false, q: ["True or false: in Rutherford's model, electrons carry most of the mass of the atom.", "صواب أم خطأ: في نموذج رذرفورد تحمل الإلكترونات معظم كتلة الذرة."],
      off: ["False. Electrons have negligible mass; most of the mass is in the nucleus.", "خطأ؛ كتلة الإلكترونات مهملة، ومعظم الكتلة في النواة."],
      sto: ["The planets are tiny next to the sun.", "الكواكب صغيرة جدًا بجوار الشمس."] }
  ];
  X.sec2chemu2l2 = [
    { k: "order", q: ["Order hydrogen's visible lines from LONGEST to shortest wavelength.", "رتب خطوط الهيدروجين المرئية من الأطول إلى الأقصر طولًا موجيًا."],
      items: [["656 nm red (3 → 2)", "656 نانومتر أحمر (3 ← 2)"], ["486 nm green-blue (4 → 2)", "486 أخضر مزرق (4 ← 2)"], ["434 nm blue (5 → 2)", "434 أزرق (5 ← 2)"], ["410 nm violet (6 → 2)", "410 بنفسجي (6 ← 2)"]],
      off: ["Bigger jumps give more energy and shorter wavelength.", "القفزات الأكبر تعطي طاقة أكبر وطولًا موجيًا أقصر."],
      sto: ["From calm red to energetic violet.", "من الأحمر الهادئ إلى البنفسجي النشيط."] },
    { k: "tf", a: false, q: ["True or false: in Bohr's model an electron can stay between two energy levels.", "صواب أم خطأ: في نموذج بور يمكن أن يستقر الإلكترون بين مستويين للطاقة."],
      off: ["False. The spaces between levels are forbidden; the electron moves in definite jumps.", "خطأ؛ المسافات بين المستويات محرمة، والإلكترون ينتقل في قفزات محددة."],
      sto: ["No standing on the stairs: there are none.", "لا وقوف على السلم: لا يوجد سلم أصلًا."] }
  ];
  X.sec2chemu2l3 = [
    { k: "match", q: ["Match each quantum number to what it describes.", "صِل كل عدد كم بما يحدده."],
      pairs: [[["Principal n", "الرئيسي n"], ["Main energy level and distance from the nucleus", "المستوى الرئيسي وبعده عن النواة"]], [["Subsidiary l", "الثانوي l"], ["Sublevel s, p, d, f", "المستوى الفرعي s وp وd وf"]], [["Magnetic m", "المغناطيسي m"], ["Orbital and its direction", "الأوربيتال واتجاهه"]], [["Spin mₛ", "المغزلي mₛ"], ["Spin direction ±½", "اتجاه الغزل ±½"]]],
      off: ["Floor, flat type, room, and which way you face.", "الدور، ونوع الشقة، والغرفة، واتجاهك."],
      sto: ["The four-part address of every electron.", "العنوان الرباعي لكل إلكترون."] },
    { k: "tf", a: true, q: ["True or false: the three 2p orbitals are equal in energy and perpendicular to each other.", "صواب أم خطأ: أوربيتالات 2p الثلاثة متساوية الطاقة ومتعامدة."],
      off: ["True: pₓ, p_y and p_z lie along x, y and z with equal energy.", "صواب: pₓ وp_y وp_z على المحاور x وy وz ولها الطاقة نفسها."],
      sto: ["Three identical rooms facing three directions.", "ثلاث غرف متطابقة تطل على ثلاثة اتجاهات."] }
  ];
  X.sec2chemu2l4 = [
    { k: "order", q: ["Order these sublevels by the Aufbau principle.", "رتب هذه المستويات الفرعية حسب مبدأ البناء التصاعدي."],
      items: [["3s", "3s"], ["3p", "3p"], ["4s", "4s"], ["3d", "3d"], ["4p", "4p"]],
      off: ["n + l: 3, 4, 4 (larger n), 5, 5 (larger n).", "n + l: 3، 4، 4 (n أكبر)، 5، 5 (n أكبر)."],
      sto: ["The microbus fills from the cheapest seat.", "الميكروباص يمتلئ من المقعد الأرخص."] },
    { k: "tf", a: false, q: ["True or false: in oxygen, the fourth 2p electron moves up to 3s instead of pairing.", "صواب أم خطأ: في الأكسجين ينتقل الإلكترون الرابع في 2p إلى 3s بدل الازدواج."],
      off: ["False. Pairing in 2p costs less energy than jumping to the higher 3s.", "خطأ؛ الازدواج في 2p أقل طاقة من القفز إلى 3s الأعلى."],
      sto: ["Better to share a seat than to buy an expensive ticket.", "مشاركة المقعد أفضل من شراء تذكرة غالية."] }
  ];
  X.sec2chemu3l1 = [
    { k: "match", q: ["Match each element type to its block.", "صِل كل نوع من العناصر بفئته."],
      pairs: [[["Representative", "ممثلة"], ["s and p (except group 0)", "s وp (عدا الصفرية)"]], [["Noble", "نبيلة"], ["Group 0 of p-block", "المجموعة الصفرية من p"]], [["Main transition", "انتقالية رئيسية"], ["d-block", "الفئة d"]], [["Inner transition", "انتقالية داخلية"], ["f-block", "الفئة f"]]],
      off: ["The type depends on which sublevel is being filled.", "النوع يعتمد على المستوى الفرعي الذي يمتلئ."],
      sto: ["Four sections of Laila's shoe shop.", "أربعة أقسام في محل ليلى."] },
    { k: "tf", a: true, q: ["True or false: for s-block elements, n in ns¹ or ns² is also the period number.", "صواب أم خطأ: في عناصر الفئة s يكون n في ns¹ أو ns² هو رقم الدورة أيضًا."],
      off: ["True: Na is 3s¹, period 3.", "صواب: الصوديوم 3s¹ في الدورة الثالثة."],
      sto: ["The shelf number is printed on the box.", "رقم الرف مطبوع على العلبة."] }
  ];
  X.sec2chemu3l2 = [
    { k: "order", q: ["Order by radius, from SMALLEST to largest.", "رتب حسب نصف القطر من الأصغر إلى الأكبر."],
      items: [["Fe³⁺ (64.5 pm)", "Fe³⁺ (64.5 pm)"], ["Fe²⁺ (78 pm)", "Fe²⁺ (78 pm)"], ["Cl (99 pm)", "Cl (99 pm)"], ["Na⁺ (102 pm)", "Na⁺ (102 pm)"], ["Cl⁻ (181 pm)", "Cl⁻ (181 pm)"], ["Na (186 pm)", "Na (186 pm)"]],
      off: ["Values from the book's table: cations shrink, anions swell.", "القيم من جدول الكتاب: الأيونات الموجبة تنكمش والسالبة تتضخم."],
      sto: ["Tug of war decides every size.", "شد الحبل يحدد كل حجم."] },
    { k: "tf", a: true, q: ["True or false: the second ionization potential is always greater than the first.", "صواب أم خطأ: جهد التأين الثاني دائمًا أكبر من الأول."],
      off: ["True. After the first electron leaves, the effective nuclear charge on the rest increases.", "صواب؛ بعد خروج الإلكترون الأول تزداد الشحنة الفعالة على الباقي."],
      sto: ["Each extra pull is harder.", "كل شدة إضافية أصعب."] }
  ];
  X.sec2chemu3l3 = [
    { k: "match", q: ["Match each element to the best description.", "صِل كل عنصر بأفضل وصف له."],
      pairs: [[["F", "F"], ["Highest electronegativity", "أعلى سالبية كهربية"]], [["Cs", "Cs"], ["Strongest metal", "أقوى فلز"]], [["Cl", "Cl"], ["Highest electron affinity (−349)", "أعلى ميل إلكتروني (−349)"]], [["Si", "Si"], ["Metalloid semiconductor", "شبه فلز وشبه موصل"]]],
      off: ["Corners of the table hold the extremes.", "أركان الجدول تضم القيم القصوى."],
      sto: ["Champions of each league.", "أبطال كل دوري."] },
    { k: "tf", a: false, q: ["True or false: electron affinity and electronegativity are two names for the same property.", "صواب أم خطأ: الميل الإلكتروني والسالبية الكهربية اسمان لخاصية واحدة."],
      off: ["False. Affinity is an energy for an isolated atom; electronegativity is an atom's pull on bonding electrons.", "خطأ؛ الميل طاقة لذرة مفردة، والسالبية قدرة ذرة مرتبطة على جذب إلكترونات الرابطة."],
      sto: ["A gift to a loner versus a tug inside a team.", "هدية لوحيد مقابل شد داخل فريق."] }
  ];
  X.sec2chemu3l4 = [
    { k: "match", q: ["Match each oxide to its reaction.", "صِل كل أكسيد بتفاعله."],
      pairs: [[["CO₂", "CO₂"], ["+ 2NaOH → Na₂CO₃ + H₂O", "+ 2NaOH → Na₂CO₃ + H₂O"]], [["Na₂O", "Na₂O"], ["+ H₂O → 2NaOH", "+ H₂O → 2NaOH"]], [["Al₂O₃", "Al₂O₃"], ["+ 2NaOH → 2NaAlO₂ + H₂O", "+ 2NaOH → 2NaAlO₂ + H₂O"]], [["MgO", "MgO"], ["+ H₂SO₄ → MgSO₄ + H₂O", "+ H₂SO₄ → MgSO₄ + H₂O"]]],
      off: ["Acidic oxides meet alkalis; basic oxides meet acids or water; amphoteric oxides meet both.", "الأكاسيد الحامضية تتفاعل مع القلويات، والقاعدية مع الأحماض أو الماء، والمترددة مع الاثنين."],
      sto: ["Each oxide shows its personality.", "كل أكسيد يظهر شخصيته."] },
    { k: "tf", a: true, q: ["True or false: the basic property increases down group 1A.", "صواب أم خطأ: تزداد الخاصية القاعدية لأسفل في المجموعة 1A."],
      off: ["True: from LiOH to CsOH the hydroxides become stronger bases.", "صواب: من LiOH إلى CsOH تصبح الهيدروكسيدات قواعد أقوى."],
      sto: ["The bigger the metal, the soapier the water.", "كلما كبر الفلز صار الماء أكثر صابونية."] }
  ];
  X.sec2chemu3l5 = [
    { k: "match", q: ["Match each species to the oxidation number of the underlined element (first element).", "صِل كل مادة بعدد تأكسد العنصر الأول فيها."],
      pairs: [[["H in CaH₂", "H في CaH₂"], ["−1", "−1"]], [["O in Na₂O₂", "O في Na₂O₂"], ["−1 (peroxide)", "−1 (فوق أكسيد)"]], [["O in KO₂", "O في KO₂"], ["−½", "−½"]], [["N in NH₃", "N في NH₃"], ["−3", "−3"]], [["S in H₂SO₄", "S في H₂SO₄"], ["+6", "+6"]]],
      off: ["Use the fixed rules first (1A +1, 2A +2, H +1 except hydrides, O −2 except peroxides), then make the sum zero.", "استخدم القواعد الثابتة أولًا (1A = +1، 2A = +2، H = +1 عدا الهيدريدات، O = −2 عدا فوق الأكاسيد) ثم اجعل المجموع صفرًا."],
      sto: ["Every compound's score must add to zero.", "نتيجة كل مركب يجب أن يكون مجموعها صفرًا."] },
    { k: "tf", a: true, q: ["True or false: in a redox reaction the electrons lost by the reducing agent equal those gained by the oxidizing agent.", "صواب أم خطأ: في تفاعل الأكسدة والاختزال تساوي الإلكترونات المفقودة من العامل المختزل الإلكترونات المكتسبة بالعامل المؤكسد."],
      off: ["True: this conservation of charge is why we equalise electrons when balancing.", "صواب: هذا هو حفظ الشحنة، ولهذا نساوي الإلكترونات عند الوزن."],
      sto: ["Adam gives two stickers, Nada gets two.", "آدم يعطي ملصقين، وندى تأخذ ملصقين."] }
  ];
  /* Arabic digits in the Arabic texts above */
  function pa(p) { if (p && typeof p[1] === "string") p[1] = arD(p[1]); }
  Object.keys(O).forEach(function (k) { if (k.indexOf("sec2chem") === 0) O[k].ar = O[k].ar.map(arD); });
  Object.keys(X).forEach(function (k) {
    if (k.indexOf("sec2chem") !== 0) return;
    X[k].forEach(function (it) { pa(it.q); pa(it.off); pa(it.sto); if (it.items) it.items.forEach(pa); if (it.pairs) it.pairs.forEach(function (p) { pa(p[0]); pa(p[1]); }); });
  });

  /* ----- tappable diagrams (viewBox 0 0 400 240) ----- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 12) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function arrowDef(id, c) { return '<defs><marker id="' + id + '" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="' + c + '"/></marker></defs>'; }
  function box(x, y, w, h, fill, stroke) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10" fill="' + fill + '" stroke="' + (stroke || "none") + '" stroke-width="2"/>'; }
  var W = 'style="fill:#fff"';

  D.sec2chemu1l1 = {
    title: ["The mole triangle", "مثلث المول"],
    svg: function () {
      var s = arrowDef("s2a1", "#64748b");
      s += box(150, 90, 100, 60, "#2563eb") + tx(200, 118, "n (mol)", W, 15) + tx(200, 136, t("moles", "مولات"), W, 11);
      s += box(20, 20, 110, 50, "#f97316") + tx(75, 50, t("mass (g)", "الكتلة (جم)"), W, 13);
      s += box(270, 20, 110, 50, "#16a34a") + tx(325, 50, t("particles", "الجسيمات"), W, 13);
      s += box(20, 175, 110, 50, "#a855f7") + tx(75, 205, t("volume (gas)", "الحجم (غاز)"), W, 13);
      s += box(270, 175, 110, 50, "#0d9488") + tx(325, 205, t("molarity × V", "المولارية × V"), W, 13);
      s += '<path d="M130 55 L155 92 M270 55 L245 92 M130 195 L155 148 M270 195 L245 148" stroke="#64748b" stroke-width="3" marker-end="url(#s2a1)"/>';
      s += tx(112, 86, "÷ M", mut, 11) + tx(290, 86, "÷ Nₐ", mut, 11) + tx(110, 168, "÷ 22.4", mut, 11) + tx(292, 168, "M × V", mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 120, ["Moles in the middle", "المول في المنتصف"], ["Every calculation passes through moles: change what you know into moles first.", "كل الحسابات تمر بالمولات: حوّل ما تعرفه إلى مولات أولًا."]],
      [75, 45, ["Mass ↔ moles", "الكتلة ↔ المولات"], ["n = mass ÷ molar mass. 265 g Na₂CO₃ ÷ 106 = 2.5 mol.", "n = الكتلة ÷ الكتلة المولية؛ 265 جم Na₂CO₃ ÷ 106 = 2.5 مول."]],
      [325, 45, ["Particles ↔ moles", "الجسيمات ↔ المولات"], ["Particles = n × 6.02 × 10²³ (molecules, atoms or ions).", "الجسيمات = n × 6.02 × 10²³ (جزيئات أو ذرات أو أيونات)."]],
      [75, 200, ["Gas volume ↔ moles", "حجم الغاز ↔ المولات"], ["n = V ÷ 22.4 at STP, or V ÷ 24 at rtp.", "n = V ÷ 22.4 في STP، أو V ÷ 24 في rtp."]],
      [325, 200, ["Solutions", "المحاليل"], ["n = M × V(L) for a dissolved solute.", "n = M × V(L) للمذاب في محلول."]]
    ]
  };

  D.sec2chemu1l2 = {
    title: ["Equal volumes, equal molecules", "حجوم متساوية وجزيئات متساوية"],
    svg: function () {
      var s = "", cols = ["#ef4444", "#3b82f6", "#e5e7eb"], names = ["O₂", "N₂", "H₂"], mass = ["32 g", "28 g", "2 g"];
      for (var i = 0; i < 3; i++) {
        var x = 25 + i * 125;
        s += box(x, 40, 100, 130, "#e0f2fe", "#0284c7");
        for (var k = 0; k < 6; k++) { var px = x + 22 + (k % 3) * 28, py = 75 + Math.floor(k / 3) * 50; s += '<circle cx="' + px + '" cy="' + py + '" r="8" fill="' + cols[i] + '" stroke="#334155"/><circle cx="' + (px + 10) + '" cy="' + py + '" r="8" fill="' + cols[i] + '" stroke="#334155"/>'; }
        s += tx(x + 50, 30, names[i], ink, 15) + tx(x + 50, 190, "22.4 L · STP", mut, 11) + tx(x + 50, 210, mass[i], ink, 13);
      }
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [75, 105, ["Same number of molecules", "عدد الجزيئات نفسه"], ["Each box holds 1 mol = 6.02 × 10²³ molecules (Avogadro's postulate).", "كل صندوق يحتوي على 1 مول = 6.02 × 10²³ جزيء (فرض أفوجادرو)."]],
      [200, 190, ["Molar volume", "الحجم المولاري"], ["1 mol of any gas: 22.4 L at STP (0°C, 1 atm) or 24 L at rtp (25°C).", "1 مول من أي غاز: 22.4 لتر في STP (صفر°س، 1 ض.ج) أو 24 لترًا في rtp (25°س)."]],
      [325, 210, ["Different masses", "كتل مختلفة"], ["32 g, 28 g and 2 g: masses differ because molar masses differ.", "32 و28 و2 جم: الكتل تختلف لاختلاف الكتل المولية."]],
      [325, 105, ["Hydrogen", "الهيدروجين"], ["The lightest gas still fills 22.4 L per mole at STP.", "أخف الغازات يملأ أيضًا 22.4 لتر لكل مول في STP."]]
    ]
  };

  D.sec2chemu1l3 = {
    title: ["6 H₂ + 4 F₂: who runs out?", "6 H₂ + 4 F₂: من ينفد؟"],
    svg: function () {
      var s = arrowDef("s2a3", "#64748b"), i;
      function mol(x, y, c1, c2) { return '<circle cx="' + x + '" cy="' + y + '" r="8" fill="' + c1 + '" stroke="#334155"/><circle cx="' + (x + 11) + '" cy="' + y + '" r="8" fill="' + c2 + '" stroke="#334155"/>'; }
      s += box(10, 30, 160, 150, "#f1f5f9", "#94a3b8") + box(230, 30, 160, 150, "#f1f5f9", "#94a3b8");
      for (i = 0; i < 6; i++) s += mol(30 + (i % 3) * 45, 60 + Math.floor(i / 3) * 30, "#e5e7eb", "#e5e7eb");
      for (i = 0; i < 4; i++) s += mol(30 + (i % 2) * 70, 130 + Math.floor(i / 2) * 30, "#a3e635", "#a3e635");
      for (i = 0; i < 8; i++) s += mol(250 + (i % 4) * 35, 60 + Math.floor(i / 4) * 30, "#e5e7eb", "#a3e635");
      for (i = 0; i < 2; i++) s += mol(265 + i * 60, 150, "#e5e7eb", "#e5e7eb");
      s += '<path d="M175 105 L222 105" stroke="#64748b" stroke-width="4" marker-end="url(#s2a3)"/>';
      s += tx(90, 22, t("before", "قبل"), mut) + tx(310, 22, t("after", "بعد"), mut) + tx(90, 205, "6 H₂ + 4 F₂", ink, 14) + tx(310, 205, "8 HF + 2 H₂", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [55, 140, ["Limiting reactant: F₂", "المادة المحددة: F₂"], ["All 4 mol F₂ are consumed; they decide the product: 4 × 2 = 8 mol HF.", "تُستهلك 4 مول F₂ كلها وتحدد الناتج: 4 × 2 = 8 مول HF."]],
      [75, 70, ["H₂ given", "H₂ المعطى"], ["6 mol H₂; ratio 6 ÷ 1 = 6 is larger than 4 ÷ 1 = 4.", "6 مول H₂؛ النسبة 6 ÷ 1 = 6 أكبر من 4 ÷ 1 = 4."]],
      [300, 75, ["Product", "الناتج"], ["H₂ + F₂ → 2HF: 8 mol of hydrogen fluoride.", "H₂ + F₂ → 2HF: 8 مول فلوريد هيدروجين."]],
      [300, 150, ["Excess", "الزائد"], ["2 mol H₂ remain unreacted.", "يتبقى 2 مول H₂ دون تفاعل."]]
    ]
  };

  D.sec2chemu1l4 = {
    title: ["From percent to molecular formula", "من النسبة المئوية إلى الصيغة الجزيئية"],
    svg: function () {
      var s = arrowDef("s2a4", "#64748b"), st = [["83.7% C · 16.3% H", "#f97316"], ["C 6.975 · H 16.3 mol", "#2563eb"], ["1 : 2.337 → ×3", "#a855f7"], ["C₃H₇ (43)", "#16a34a"], ["n = 86 ÷ 43 = 2 → C₆H₁₄", "#0d9488"]];
      st.forEach(function (p, i) { s += box(60, 10 + i * 46, 280, 34, p[1]) + tx(200, 32 + i * 46, p[0], W, 13); if (i < 4) s += '<path d="M200 44 L200 54" transform="translate(0 ' + i * 46 + ')" stroke="#64748b" stroke-width="3" marker-end="url(#s2a4)"/>'; });
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [200, 27, ["Mass percentages", "النسب المئوية الكتلية"], ["Treat them as grams in 100 g. H = 100 − 83.7 = 16.3%.", "اعتبرها جرامات في 100 جم؛ H = 100 − 83.7 = 16.3%."]],
      [200, 73, ["Moles", "المولات"], ["Divide by atomic masses: 83.7 ÷ 12 and 16.3 ÷ 1.", "اقسم على الكتل الذرية: 83.7 ÷ 12 و16.3 ÷ 1."]],
      [200, 119, ["Simplest ratio", "أبسط نسبة"], ["Divide by the smallest; 2.337 ≈ 2⅓ so multiply by 3.", "اقسم على الأصغر؛ 2.337 ≈ 2⅓ فاضرب في 3."]],
      [200, 165, ["Empirical formula", "الصيغة الأولية"], ["C₃H₇ with molar mass 3 × 12 + 7 = 43 g/mol.", "C₃H₇ وكتلتها المولية 3 × 12 + 7 = 43 جم/مول."]],
      [200, 211, ["Molecular formula", "الصيغة الجزيئية"], ["n = 86 ÷ 43 = 2 → (C₃H₇)₂ = C₆H₁₄.", "n = 86 ÷ 43 = 2 ← (C₃H₇)₂ = C₆H₁₄."]]
    ]
  };

  D.sec2chemu1l5 = {
    title: ["Diluting a solution", "تخفيف محلول"],
    svg: function () {
      var s = arrowDef("s2a5", "#64748b"), i;
      s += '<path d="M40 60 L40 200 Q40 215 55 215 L135 215 Q150 215 150 200 L150 60" fill="none" stroke="#64748b" stroke-width="3"/><rect x="42" y="150" width="106" height="63" fill="#1d4ed8" opacity=".85"/>';
      s += '<path d="M250 40 L250 200 Q250 215 265 215 L345 215 Q360 215 360 200 L360 40" fill="none" stroke="#64748b" stroke-width="3"/><rect x="252" y="80" width="106" height="133" fill="#93c5fd" opacity=".85"/>';
      for (i = 0; i < 8; i++) { s += '<circle cx="' + (55 + (i % 4) * 25) + '" cy="' + (165 + Math.floor(i / 4) * 25) + '" r="5" fill="#fde047"/>'; s += '<circle cx="' + (268 + (i % 4) * 25) + '" cy="' + (100 + Math.floor(i / 4) * 55) + '" r="5" fill="#fde047"/>'; }
      s += '<path d="M165 140 L235 140" stroke="#64748b" stroke-width="4" marker-end="url(#s2a5)"/>' + tx(200, 128, t("+ water", "+ ماء"), mut);
      s += tx(95, 40, "M₁ · V₁", ink, 14) + tx(305, 28, "M₂ · V₂", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [95, 180, ["Concentrated solution", "المحلول المركز"], ["Small volume V₁ with high molarity M₁.", "حجم صغير V₁ بمولارية كبيرة M₁."]],
      [305, 150, ["Diluted solution", "المحلول المخفف"], ["Larger volume V₂, lower molarity M₂.", "حجم أكبر V₂ ومولارية أقل M₂."]],
      [200, 140, ["Add water", "إضافة الماء"], ["Water added = V₂ − V₁.", "الماء المضاف = V₂ − V₁."]],
      [305, 100, ["Same solute particles", "جسيمات المذاب نفسها"], ["Eight yellow dots in both: moles stay constant, so M₁V₁ = M₂V₂.", "ثماني نقاط صفراء في الاثنين: عدد المولات ثابت، فـ M₁V₁ = M₂V₂."]]
    ]
  };

  D.sec2chemu2l1 = {
    title: ["Rutherford's gold foil experiment", "تجربة رذرفورد ورقيقة الذهب"],
    svg: function () {
      var s = arrowDef("s2b1", "#dc2626");
      s += box(10, 95, 60, 50, "#64748b") + tx(40, 124, t("source", "المصدر"), W, 11);
      s += '<path d="M200 30 A110 110 0 0 1 200 210" fill="none" stroke="#22c55e" stroke-width="10" opacity=".5"/><path d="M200 30 A110 110 0 0 0 200 210" fill="none" stroke="#22c55e" stroke-width="10" opacity=".25"/>';
      s += '<rect x="196" y="60" width="8" height="120" fill="#facc15" stroke="#a16207"/>';
      s += '<path d="M70 120 L300 120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#s2b1)"/><path d="M70 112 L195 112 Q215 105 290 70" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#s2b1)"/><path d="M70 128 L190 127 Q160 150 110 175" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#s2b1)"/>';
      s += tx(330, 125, t("ZnS screen", "لوح ZnS"), mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [40, 120, ["Alpha source", "مصدر ألفا"], ["A radioactive source in a lead box fires positive alpha particles (He nuclei).", "مصدر مشع في صندوق من الرصاص يطلق دقائق ألفا الموجبة (أنوية هيليوم)."]],
      [200, 160, ["Thin gold foil", "رقيقة ذهب رقيقة"], ["Only a few atoms thick, so each alpha meets few nuclei.", "سمكها ذرات قليلة، فتقابل كل دقيقة ألفا أنوية قليلة."]],
      [290, 120, ["Straight through", "تنفذ مستقيمة"], ["Most particles: the atom is mostly empty space.", "معظم الدقائق: معظم الذرة فراغ."]],
      [270, 78, ["Deflected", "تنحرف"], ["Repelled by the positive nucleus.", "تتنافر مع النواة الموجبة."]],
      [125, 165, ["Bounced back", "ترتد"], ["A tiny fraction hits the small, dense nucleus head on.", "نسبة ضئيلة تصطدم بالنواة الصغيرة الكثيفة مباشرة."]],
      [320, 205, ["Zinc sulphide screen", "لوح كبريتيد الخارصين"], ["Gives a flash where each alpha particle strikes.", "يعطي ومضة حيث تصطدم كل دقيقة ألفا."]]
    ]
  };

  D.sec2chemu2l2 = {
    title: ["Hydrogen's energy levels and spectrum", "مستويات طاقة الهيدروجين وطيفه"],
    svg: function () {
      var s = arrowDef("s2b2", "#334155"), ys = [215, 140, 105, 88, 78, 72], i, cl = ["#ef4444", "#14b8a6", "#3b82f6", "#8b5cf6"];
      for (i = 0; i < 6; i++) s += '<line x1="20" y1="' + ys[i] + '" x2="250" y2="' + ys[i] + '" stroke="var(--muted)" stroke-width="2"/>' + tx(10, ys[i] + 4, "" + (i + 1), mut, 10);
      for (i = 0; i < 4; i++) s += '<path d="M' + (60 + i * 40) + ' ' + ys[i + 2] + ' L' + (60 + i * 40) + ' ' + (ys[1] - 4) + '" stroke="' + cl[i] + '" stroke-width="3" marker-end="url(#s2b2)"/>';
      s += '<path d="M225 ' + ys[1] + ' L225 ' + (ys[0] - 4) + '" stroke="#64748b" stroke-width="3" stroke-dasharray="5 4" marker-end="url(#s2b2)"/>';
      s += '<rect x="270" y="60" width="120" height="40" fill="#0f172a"/>';
      [[656, 0], [486, 1], [434, 2], [410, 3]].forEach(function (p) { var x = 270 + (p[0] - 400) / 270 * 120; s += '<rect x="' + x.toFixed(1) + '" y="62" width="3" height="36" fill="' + cl[p[1]] + '"/>'; });
      s += tx(330, 120, "410 – 656 nm", mut, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [60, 120, ["3 → 2: red 656 nm", "3 ← 2: أحمر 656"], ["The smallest jump to level 2 gives the red line.", "أصغر قفزة إلى المستوى 2 تعطي الخط الأحمر."]],
      [180, 100, ["6 → 2: violet 410 nm", "6 ← 2: بنفسجي 410"], ["Larger jumps give more energy, shorter wavelength.", "القفزات الأكبر تعطي طاقة أكبر وطولًا موجيًا أقصر."]],
      [225, 180, ["To level 1: ultraviolet", "إلى المستوى 1: فوق بنفسجي"], ["The biggest gap; invisible to the eye.", "أكبر فرق، ولا تراه العين."]],
      [330, 80, ["Line spectrum", "الطيف الخطي"], ["Four coloured lines separated by dark areas: hydrogen's fingerprint.", "أربعة خطوط ملونة تفصلها مناطق معتمة: بصمة الهيدروجين."]],
      [130, 80, ["Levels crowd together", "المستويات تتقارب"], ["Energy gaps decrease away from the nucleus.", "فروق الطاقة تقل بالبعد عن النواة."]]
    ]
  };

  D.sec2chemu2l3 = {
    title: ["Orbital shapes", "أشكال الأوربيتالات"],
    svg: function () {
      var s = '<circle cx="70" cy="120" r="45" fill="#60a5fa" opacity=".6" stroke="#1d4ed8" stroke-width="2"/>';
      s += '<ellipse cx="175" cy="88" rx="16" ry="32" fill="#f97316" opacity=".7"/><ellipse cx="175" cy="152" rx="16" ry="32" fill="#f97316" opacity=".7"/>';
      s += '<ellipse cx="255" cy="120" rx="32" ry="15" fill="#22c55e" opacity=".7"/><ellipse cx="320" cy="120" rx="32" ry="15" fill="#22c55e" opacity=".7"/>';
      s += '<line x1="140" y1="120" x2="360" y2="120" stroke="var(--muted)" stroke-dasharray="4 4"/><line x1="175" y1="40" x2="175" y2="200" stroke="var(--muted)" stroke-dasharray="4 4"/>';
      s += tx(70, 190, "s", ink, 16) + tx(175, 220, "p<tspan font-size=\"10\">z</tspan>", ink, 16) + tx(288, 160, "p<tspan font-size=\"10\">x</tspan>", ink, 16);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 120, ["s orbital", "أوربيتال s"], ["One spherical orbital, symmetrical around the nucleus (l = 0, m = 0).", "أوربيتال كروي واحد متماثل حول النواة (l = 0، m = 0)."]],
      [175, 80, ["p orbital: dumbbell", "أوربيتال p: دمبل"], ["Two opposite lobes meeting at the centre where electron density is zero.", "فصان متقابلان يلتقيان عند المركز حيث كثافة الإلكترون صفر."]],
      [288, 120, ["pₓ, p_y, p_z", "pₓ وp_y وp_z"], ["Three p orbitals (m = −1, 0, +1) along x, y, z, perpendicular and equal in energy.", "ثلاثة أوربيتالات p (m = −1، 0، +1) على المحاور x وy وz، متعامدة ومتساوية الطاقة."]],
      [360, 60, ["d and f", "d وf"], ["d has 5 orbitals and f has 7 (2l + 1).", "d له 5 أوربيتالات وf له 7 (2l + 1)."]],
      [70, 60, ["Electron cloud", "السحابة الإلكترونية"], ["Where the electron is probably found: probability, not a fixed orbit.", "حيث يُحتمل وجود الإلكترون: احتمال لا مسار ثابت."]]
    ]
  };

  D.sec2chemu2l4 = {
    title: ["Oxygen's orbital diagram", "توزيع الأكسجين في الأوربيتالات"],
    svg: function () {
      var s = "", bx = function (x, y, a, b) { return '<rect x="' + x + '" y="' + y + '" width="40" height="40" fill="var(--card)" stroke="var(--ink)" stroke-width="2"/>' + (a ? tx(x + 13, y + 28, "↑", 'style="fill:#2563eb"', 22) : "") + (b ? tx(x + 27, y + 28, "↓", 'style="fill:#dc2626"', 22) : ""); };
      s += bx(40, 170, 1, 1) + tx(60, 230, "1s", ink, 13);
      s += bx(120, 120, 1, 1) + tx(140, 180, "2s", ink, 13);
      s += bx(220, 70, 1, 1) + bx(262, 70, 1, 0) + bx(304, 70, 1, 0) + tx(283, 130, "2p", ink, 13);
      s += tx(200, 25, "₈O: 1s² 2s² 2p⁴", ink, 15);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [60, 190, ["Aufbau", "البناء التصاعدي"], ["Lowest energy first: 1s, then 2s, then 2p.", "الأقل طاقة أولًا: 1s ثم 2s ثم 2p."]],
      [140, 140, ["Pauli", "باولي"], ["Two electrons in one orbital have opposite spins (+½, −½).", "إلكترونا الأوربيتال الواحد غزلهما متضاد (+½ و−½)."]],
      [304, 90, ["Hund", "هوند"], ["Two 2p electrons stay single with parallel spins.", "إلكترونان في 2p يبقيان منفردين بغزل متوازٍ."]],
      [240, 90, ["The 4th 2p electron pairs", "الإلكترون الرابع في 2p يزدوج"], ["Pairing costs less energy than moving up to 3s.", "الازدواج أقل طاقة من الانتقال إلى 3s."]],
      [200, 25, ["Configuration", "التوزيع"], ["8 electrons: 2 + 2 + 4.", "8 إلكترونات: 2 + 2 + 4."]]
    ]
  };

  D.sec2chemu3l1 = {
    title: ["The blocks of the periodic table", "فئات الجدول الدوري"],
    svg: function () {
      var s = "", c = 20;
      s += '<rect x="20" y="20" width="' + 2 * c + '" height="' + 7 * c + '" fill="#ef4444" opacity=".8"/>';
      s += '<rect x="' + (20 + 2 * c) + '" y="' + (20 + 3 * c) + '" width="' + 10 * c + '" height="' + 4 * c + '" fill="#3b82f6" opacity=".8"/>';
      s += '<rect x="' + (20 + 12 * c) + '" y="' + (20 + c) + '" width="' + 6 * c + '" height="' + 6 * c + '" fill="#eab308" opacity=".85"/>';
      s += '<rect x="' + (20 + 17 * c) + '" y="20" width="' + c + '" height="' + 7 * c + '" fill="#a855f7" opacity=".85"/>';
      s += '<rect x="' + (20 + 3 * c) + '" y="' + (40 + 7 * c) + '" width="' + 14 * c + '" height="' + 2 * c + '" fill="#22c55e" opacity=".85"/>';
      s += tx(40, 95, "s", W, 18) + tx(140, 125, "d", W, 18) + tx(290, 105, "p", W, 18) + tx(370, 100, "0", W, 14) + tx(200, 206, "f", W, 18);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [40, 60, ["s-block", "الفئة s"], ["Groups 1A (ns¹) and 2A (ns²); n = period number.", "المجموعتان 1A (ns¹) و2A (ns²)؛ n = رقم الدورة."]],
      [140, 130, ["d-block", "الفئة d"], ["10 columns: seven B groups + three columns of group 8; main transition elements.", "10 أعمدة: سبع مجموعات B + ثلاثة أعمدة للمجموعة الثامنة؛ عناصر انتقالية رئيسية."]],
      [290, 90, ["p-block", "الفئة p"], ["Groups 3A–7A (np¹–np⁵) and group 0 (np⁶).", "المجموعات 3A إلى 7A (np¹ إلى np⁵) والمجموعة الصفرية (np⁶)."]],
      [370, 60, ["Noble gases", "الغازات النبيلة"], ["Group 0: ns² np⁶ (He 1s²): completely stable.", "المجموعة الصفرية: ns² np⁶ (He 1s²): مستقرة تمامًا."]],
      [200, 200, ["f-block", "الفئة f"], ["Lanthanides (4f) and actinides (5f, radioactive), 14 elements each, placed below.", "اللانثانيدات (4f) والأكتينيدات (5f المشعة)، 14 عنصرًا لكل منهما أسفل الجدول."]]
    ]
  };

  D.sec2chemu3l2 = {
    title: ["Atoms and their ions", "الذرات وأيوناتها"],
    svg: function () {
      var s = "";
      s += '<circle cx="70" cy="90" r="56" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><circle cx="170" cy="90" r="31" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>';
      s += '<circle cx="250" cy="90" r="30" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><circle cx="335" cy="90" r="55" fill="#86efac" stroke="#15803d" stroke-width="2"/>';
      s += tx(70, 95, "Na", ink, 14) + tx(170, 95, "Na⁺", ink, 13) + tx(250, 95, "Cl", ink, 13) + tx(335, 95, "Cl⁻", ink, 14);
      s += tx(70, 165, "186 pm", mut, 11) + tx(170, 165, "102 pm", mut, 11) + tx(250, 165, "99 pm", mut, 11) + tx(335, 165, "181 pm", mut, 11);
      s += '<line x1="30" y1="205" x2="370" y2="205" stroke="var(--muted)" stroke-width="2"/>' + tx(200, 228, t("1A → 7A: radius decreases, ionization energy increases", "1A ← 7A: يقل نصف القطر ويزداد جهد التأين"), ink, 11);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [70, 90, ["Sodium atom", "ذرة الصوديوم"], ["11 p, 11 e⁻: a large group 1A atom with low ionization energy.", "11 بروتونًا و11 إلكترونًا: ذرة كبيرة من 1A جهد تأينها منخفض."]],
      [170, 90, ["Na⁺ is smaller", "Na⁺ أصغر"], ["Same 11 protons, only 10 electrons: higher effective charge pulls them in.", "البروتونات 11 نفسها و10 إلكترونات فقط: شحنة فعالة أكبر تجذبها للداخل."]],
      [250, 90, ["Chlorine atom", "ذرة الكلور"], ["Small group 7A atom: half of the 198 pm Cl–Cl bond.", "ذرة صغيرة من 7A: نصف الرابطة Cl–Cl البالغة 198 pm."]],
      [335, 90, ["Cl⁻ is larger", "Cl⁻ أكبر"], ["18 electrons on 17 protons: the anion swells.", "18 إلكترونًا على 17 بروتونًا: الأيون السالب يتضخم."]],
      [200, 205, ["Trends", "التدرج"], ["Across a period the radius decreases; down a group it increases.", "في الدورة يقل نصف القطر، وفي المجموعة يزداد."]]
    ]
  };

  D.sec2chemu3l3 = {
    title: ["Trends summary", "ملخص التدرج"],
    svg: function () {
      var s = arrowDef("s2c3", "#0d9488"), i, j;
      for (i = 0; i < 5; i++) for (j = 0; j < 8; j++) {
        var met = j < 2 || (j === 2 && i > 0) || (j === 3 && i > 2) || (j === 4 && i > 3), mtl = (j === 2 && i === 0) || (j === 3 && (i === 1 || i === 2)) || (j === 4 && (i === 2 || i === 3)) || (j === 5 && i === 3);
        s += '<rect x="' + (60 + j * 34) + '" y="' + (30 + i * 30) + '" width="32" height="28" rx="4" fill="' + (met ? "#93c5fd" : mtl ? "#fcd34d" : "#fca5a5") + '"/>';
      }
      s += '<path d="M60 195 L330 195" stroke="#0d9488" stroke-width="3" marker-end="url(#s2c3)"/><path d="M40 175 L40 35" stroke="#0d9488" stroke-width="3" marker-end="url(#s2c3)"/>';
      s += tx(195, 215, t("electronegativity ↑", "السالبية الكهربية ↑"), ink, 11) + tx(352, 50, "F", ink, 14) + tx(76, 168, "Cs", ink, 13);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [90, 100, ["Metals", "الفلزات"], ["Left: few valence electrons, lose them easily, conduct electricity.", "يسارًا: إلكترونات تكافؤ قليلة تُفقد بسهولة، وتوصل الكهرباء."]],
      [180, 90, ["Metalloids", "أشباه الفلزات"], ["Diagonal strip (B, Si, Ge, As, Sb, Te): semiconductors.", "شريط قطري (B وSi وGe وAs وSb وTe): أشباه موصلات."]],
      [290, 70, ["Nonmetals", "اللافلزات"], ["Right: gain electrons, high ionization energy, insulators.", "يمينًا: تكتسب الإلكترونات، جهد تأينها كبير، عازلة."]],
      [352, 50, ["Fluorine", "الفلور"], ["Highest electronegativity; strongest nonmetal.", "أعلى سالبية كهربية وأقوى لافلز."]],
      [76, 165, ["Cesium", "السيزيوم"], ["Strongest metal, bottom left.", "أقوى فلز، أسفل اليسار."]]
    ]
  };

  D.sec2chemu3l4 = {
    title: ["Four kinds of oxides", "أربعة أنواع من الأكاسيد"],
    svg: function () {
      var s = "", k = [["#fca5a5", "CO₂ · SO₃", t("acidic", "حامضي")], ["#93c5fd", "Na₂O · MgO", t("basic", "قاعدي")], ["#c4b5fd", "Al₂O₃ · ZnO", t("amphoteric", "متردد")], ["#d1d5db", "CO · NO · N₂O", t("neutral", "متعادل")]];
      k.forEach(function (p, i) { var x = 15 + (i % 2) * 195, y = 15 + Math.floor(i / 2) * 110; s += box(x, y, 180, 100, p[0]) + tx(x + 90, y + 45, p[1], 'style="fill:#0f172a"', 15) + tx(x + 90, y + 72, p[2], 'style="fill:#334155"', 13); });
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [105, 65, ["Acidic oxides", "الأكاسيد الحامضية"], ["Nonmetal oxides: with water give acids; react with alkalis (CO₂ + 2NaOH → Na₂CO₃ + H₂O).", "أكاسيد اللافلزات: تعطي مع الماء أحماضًا وتتفاعل مع القلويات."]],
      [300, 65, ["Basic oxides", "الأكاسيد القاعدية"], ["Metal oxides: react with acids to give salt + water; soluble ones are alkaline.", "أكاسيد الفلزات: تتفاعل مع الأحماض فتعطي ملحًا وماء، والذائبة منها قلوية."]],
      [105, 175, ["Amphoteric oxides", "الأكاسيد المترددة"], ["React with acids and alkalis: Al₂O₃ gives sodium aluminate, ZnO gives sodium zincate.", "تتفاعل مع الأحماض والقلويات: Al₂O₃ يعطي ألومينات الصوديوم وZnO يعطي زنكات الصوديوم."]],
      [300, 175, ["Neutral oxides", "الأكاسيد المتعادلة"], ["React with neither acids nor alkalis; hardly dissolve in water.", "لا تتفاعل مع الأحماض ولا القلويات، ولا تذوب بسهولة في الماء."]]
    ]
  };

  D.sec2chemu3l5 = {
    title: ["Electron transfer in 2I⁻ + Cl₂", "انتقال الإلكترونات في 2I⁻ + Cl₂"],
    svg: function () {
      var s = arrowDef("s2c5", "#f59e0b");
      s += '<circle cx="80" cy="120" r="40" fill="#c4b5fd"/><circle cx="320" cy="120" r="40" fill="#bbf7d0"/>';
      s += tx(80, 126, "2I⁻", 'style="fill:#0f172a"', 18) + tx(320, 126, "Cl₂", 'style="fill:#0f172a"', 18);
      s += '<path d="M125 105 Q200 60 275 105" stroke="#f59e0b" stroke-width="4" fill="none" marker-end="url(#s2c5)"/>' + tx(200, 70, "2e⁻", ink, 15);
      s += tx(80, 185, "−1 → 0", ink, 13) + tx(320, 185, "0 → −1", ink, 13) + tx(80, 210, t("oxidation", "أكسدة"), mut, 12) + tx(320, 210, t("reduction", "اختزال"), mut, 12);
      s += tx(200, 30, "2I⁻ + Cl₂ → I₂ + 2Cl⁻", ink, 14);
      return '<g direction="ltr">' + s + "</g>";
    },
    spots: [
      [80, 120, ["Reducing agent: I⁻", "العامل المختزل: I⁻"], ["Loses electrons: 2I⁻ → I₂ + 2e⁻ (oxidized).", "يفقد إلكترونات: 2I⁻ → I₂ + 2e⁻ (يتأكسد)."]],
      [320, 120, ["Oxidizing agent: Cl₂", "العامل المؤكسد: Cl₂"], ["Gains electrons: Cl₂ + 2e⁻ → 2Cl⁻ (reduced).", "يكتسب إلكترونات: Cl₂ + 2e⁻ → 2Cl⁻ (يُختزل)."]],
      [200, 75, ["Electrons lost = gained", "المفقود = المكتسب"], ["Two electrons leave iodide and two arrive at chlorine.", "إلكترونان يغادران اليوديد وإلكترونان يصلان إلى الكلور."]],
      [200, 30, ["Net ionic equation", "المعادلة الأيونية الصافية"], ["Na⁺ was removed: it is a spectator ion.", "حُذف Na⁺ لأنه أيون متفرج."]],
      [80, 190, ["Oxidation numbers", "أعداد التأكسد"], ["An increase means oxidation; a decrease means reduction.", "الزيادة تعني أكسدة، والنقص يعني اختزالًا."]]
    ]
  };
  Object.keys(D).forEach(function (k) {
    if (k.indexOf("sec2chem") !== 0) return;
    D[k].title[1] = arD(D[k].title[1]);
    D[k].spots.forEach(function (sp) { sp[2][1] = arD(sp[2][1]); sp[3][1] = arD(sp[3][1]); });
  });
})();

/* ---------- Secondary 2 Chemistry live simulations (part 1): mole balance, gas syringe, limiting reactant,
   formula finder, molarity and dilution, gold foil, Bohr atom. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var txt = K.txt;
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function box(host, html) { var c = E.el("div", "sim-ctl"); c.innerHTML = html; host.appendChild(c); return c; }
  function sl(b, i, fmt, on) {
    var inp = b.querySelectorAll('input[type="range"]')[i], lab = b.querySelectorAll(".slv")[i];
    function u() { var v = Number(inp.value); lab.textContent = fmt(v); on(v); }
    inp.addEventListener("input", u); u();
    return { inp: inp, set: function (v) { inp.value = v; u(); } };
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rd(v, d) { var p = Math.pow(10, d || 0); return Math.round(v * p) / p; }
  var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  function sci(x) {
    if (!x) return n(0);
    var e = Math.floor(Math.log(Math.abs(x)) / Math.LN10), m = rd(x / Math.pow(10, e), 3);
    if (m >= 10) { m = rd(m / 10, 3); e++; }
    return n(m) + " × 10" + String(e).split("").map(function (c) { return SUP[c]; }).join("");
  }
  function fs(S) { return Math.max(11, Math.min(14, S.W / 46)); }
  E.s2ckit = { hint: hint, box: box, sl: sl, clamp: clamp, rd: rd, sci: sci, fs: fs };

  /* =========================================================
     1. sec2chem_mole - balance + mole counter
     ========================================================= */
  L.sec2chem_mole = function (host, cfg, done) {
    var SUB = [
      { f: "H₂O", M: 18, parts: [[2, 1], [1, 16]], col: "#60a5fa", what: ["molecules", "جزيء"] },
      { f: "CO₂", M: 44, parts: [[1, 12], [2, 16]], col: "#cbd5e1", what: ["molecules", "جزيء"] },
      { f: "CH₄", M: 16, parts: [[1, 12], [4, 1]], col: "#a3e635", what: ["molecules", "جزيء"] },
      { f: "NaCl", M: 58.5, parts: [[1, 23], [1, 35.5]], col: "#f8fafc", ions: [["Na⁺", 1], ["Cl⁻", 1]], what: ["formula units", "وحدة صيغة"] },
      { f: "Na₂CO₃", M: 106, parts: [[2, 23], [1, 12], [3, 16]], col: "#fef9c3", ions: [["Na⁺", 2], ["CO₃²⁻", 1]], what: ["formula units", "وحدة صيغة"] },
      { f: "CuSO₄·5H₂O", M: 249.5, parts: [[1, 63.5], [1, 32], [4, 16], [5, 18]], col: "#2563eb", ions: [["Cu²⁺", 1], ["SO₄²⁻", 1]], what: ["formula units", "وحدة صيغة"] }
    ];
    host.innerHTML = hint(t("Choose a substance, then add or remove it: use the slider or drag up and down on the balance. Watch the moles and particles change live.",
      "اختر مادة ثم أضف منها أو أنقص: استخدم المنزلق أو اسحب لأعلى ولأسفل على الميزان، وراقب عدد المولات والجسيمات تتغير لحظيًا.")) + '<div class="seg" id="s2mS"></div>';
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Mass on the balance", "الكتلة على الميزان"), 0, 54, 0.5, 0, ""));
    var tick = L._goals(host, [t("Weigh exactly 1 mol of water.", "زن 1 مول من الماء بالضبط."), t("Take 0.5 mol of carbon dioxide.", "خذ 0.5 مول من ثاني أكسيد الكربون."),
      t("Book example: weigh 2.5 mol of Na₂CO₃ and read the moles of Na⁺.", "مثال الكتاب: زن 2.5 مول من Na₂CO₃ واقرأ عدد مولات Na⁺."), t("Weigh one mole of blue CuSO₄·5H₂O.", "زن مولًا واحدًا من CuSO₄·5H₂O الزرقاء.")], done);
    var cur = 0, mass = 0, drag = null;
    var sld = sl(c, 0, function (v) { return n(v) + t(" g", " جم"); }, function (v) { mass = v; check(); });
    function maxM() { return Math.ceil(SUB[cur].M * 3 * 2) / 2; }
    K.seg(host, "#s2mS", SUB.map(function (s, i) { return [String(i), s.f]; }), "0", function (v) { cur = Number(v); sld.inp.max = maxM(); sld.set(0); });
    function check() {
      var s = SUB[cur], m = mass / s.M, near = function (x) { return Math.abs(m - x) < 0.006; };
      if (cur === 0 && near(1)) tick(0);
      if (cur === 1 && near(0.5)) tick(1);
      if (cur === 4 && near(2.5)) tick(2);
      if (cur === 5 && near(1)) tick(3);
    }
    function geo() { var W = S.W, H = S.H; return { cx: W * 0.22, py: H * 0.5, pw: Math.min(W * 0.34, 220) }; }
    S.drag({
      down: function (p) { if (p.x < S.W * 0.45) { drag = { y: p.y, m: mass }; return true; } return false; },
      move: function (p) { if (!drag) return; var mx = maxM(), v = clamp(drag.m + (drag.y - p.y) / (S.H * 0.7) * mx, 0, mx); sld.set(Math.round(v * 2) / 2); },
      up: function () { drag = null; },
      hover: function (p) { return p.x < S.W * 0.45; }
    });
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), s = SUB[cur], f = fs(S), mol = mass / s.M, fr = mass / maxM();
      ctx.clearRect(0, 0, W, H);
      // balance
      ctx.fillStyle = C.muted; K.rr(ctx, g.cx - g.pw * 0.5, H * 0.82, g.pw, H * 0.1, 8); ctx.fill();
      ctx.fillStyle = "#0f172a"; K.rr(ctx, g.cx - 50, H * 0.84, 100, H * 0.06, 5); ctx.fill();
      txt(ctx, n(mass) + t(" g", " جم"), g.cx, H * 0.87, { c: "#22c55e", s: f + 2 });
      ctx.fillStyle = C.muted; ctx.fillRect(g.cx - 4, H * 0.62, 8, H * 0.2);
      ctx.fillStyle = C.line; K.rr(ctx, g.cx - g.pw * 0.45, H * 0.6, g.pw * 0.9, 8, 4); ctx.fill();
      // heap
      if (mass > 0) {
        var hh = 10 + fr * H * 0.42, hw = g.pw * (0.25 + fr * 0.18);
        ctx.beginPath(); ctx.moveTo(g.cx - hw, H * 0.6); ctx.quadraticCurveTo(g.cx, H * 0.6 - hh * 2, g.cx + hw, H * 0.6); ctx.closePath();
        ctx.fillStyle = s.col; ctx.fill(); ctx.strokeStyle = "rgba(0,0,0,.25)"; ctx.lineWidth = 1; ctx.stroke();
      }
      txt(ctx, "↕ " + t("drag", "اسحب"), g.cx, H * 0.06, { c: C.muted, s: f - 1 });
      // readouts
      var x0 = W * 0.47, y = H * 0.08, lh = Math.max(20, H * 0.085), a = "left";
      txt(ctx, s.f, x0, y, { c: C.ink, s: f + 6, a: a }); y += lh * 1.2;
      var mm = s.parts.map(function (p) { return p[0] > 1 ? p[0] + "(" + p[1] + ")" : String(p[1]); }).join(" + ");
      txt(ctx, "M = " + mm + " = " + s.M + " g/mol", x0, y, { c: C.ink, s: f, a: a }); y += lh;
      txt(ctx, "n = " + n(mass) + " ÷ " + s.M + " = " + n(rd(mol, 3)) + " mol", x0, y, { c: "#2563eb", s: f + 1, a: a }); y += lh;
      txt(ctx, t("Particles", "الجسيمات") + " = " + sci(mol * 6.02e23) + " " + t(s.what[0], s.what[1]), x0, y, { c: C.ink, s: f - 1, a: a }); y += lh;
      if (s.ions) s.ions.forEach(function (io) { txt(ctx, io[0] + ": " + n(rd(io[1] * mol, 3)) + " mol = " + sci(io[1] * mol * 6.02e23), x0, y, { c: "#a855f7", s: f - 1, a: a }); y += lh; });
      // mole sacks
      var sw = Math.min(46, (W - x0) / 4.5), sy = H - sw * 1.3 - 6;
      for (var i = 0; i < 3; i++) {
        var sx = x0 + i * (sw + 10), fill = clamp(mol - i, 0, 1);
        ctx.strokeStyle = C.muted; ctx.lineWidth = 2; K.rr(ctx, sx, sy, sw, sw * 1.2, 8); ctx.stroke();
        if (fill > 0) { ctx.fillStyle = "rgba(37,99,235,.55)"; K.rr(ctx, sx + 2, sy + 2 + (1 - fill) * (sw * 1.2 - 4), sw - 4, fill * (sw * 1.2 - 4), 6); ctx.fill(); }
        txt(ctx, t("1 mol", "1 مول"), sx + sw / 2, sy - 9, { c: C.muted, s: 10 });
      }
    });
  };

  /* =========================================================
     2. sec2chem_gas - molar volume syringe
     ========================================================= */
  L.sec2chem_gas = function (host, cfg, done) {
    var GAS = [["H₂", 2, "#e5e7eb"], ["N₂", 28, "#3b82f6"], ["O₂", 32, "#ef4444"], ["CH₄", 16, "#a3e635"], ["CO₂", 44, "#94a3b8"]];
    host.innerHTML = hint(t("Pick a gas and the conditions, then drag the plunger (or use the slider) to set the volume. Count the molecule dots: same volume, same number, whatever the gas.",
      "اختر الغاز والظروف ثم اسحب المكبس (أو استخدم المنزلق) لضبط الحجم، وعُدّ نقاط الجزيئات: الحجم نفسه يعني العدد نفسه مهما كان الغاز.")) + '<div class="seg" id="s2gG"></div><div class="seg" id="s2gC"></div>';
    var S = K.make(host, 0.5, 340);
    var c = box(host, L._slider(t("Volume", "الحجم"), 0, 60, 0.1, 10, ""));
    var tick = L._goals(host, [t("Fill exactly 1 mol of any gas at STP.", "املأ 1 مول بالضبط من أي غاز في STP."), t("Book example: measure 1.6 g of methane at rtp.", "مثال الكتاب: قِس 1.6 جم من الميثان في rtp."),
      t("Show that 1 mol of H₂ and 1 mol of CO₂ fill the same volume.", "أثبت أن 1 مول H₂ و1 مول CO₂ يشغلان الحجم نفسه."), t("Collect the O₂ from 5 mol KNO₃: 2.5 mol at STP.", "اجمع O₂ الناتج من 5 مول KNO₃: 2.5 مول في STP.")], done);
    var gi = 0, cond = "stp", V = 10, drag = false, seen = {}, pts = [];
    for (var i = 0; i < 80; i++) pts.push([Math.random(), Math.random(), Math.random() * 6.28, K.rnd(-1, 1), K.rnd(-1, 1)]);
    var sld = sl(c, 0, function (v) { return n(rd(v, 1)) + t(" L", " لتر"); }, function (v) { V = v; check(); });
    K.seg(host, "#s2gG", GAS.map(function (g, i) { return [String(i), g[0]]; }), "0", function (v) { gi = Number(v); check(); });
    K.seg(host, "#s2gC", [["stp", "STP · 0°C"], ["rtp", "rtp · 25°C"]], "stp", function (v) { cond = v; check(); });
    function Vm() { return cond === "stp" ? 22.4 : 24; }
    function check() {
      var nn = V / Vm(), g = GAS[gi][0];
      if (cond === "stp" && Math.abs(V - 22.4) < 0.05) tick(0);
      if (g === "CH₄" && cond === "rtp" && Math.abs(nn * 16 - 1.6) < 0.01) tick(1);
      if (Math.abs(nn - 1) < 0.003) { seen[cond + g] = 1; if (seen[cond + "H₂"] && seen[cond + "CO₂"]) tick(2); }
      if (g === "O₂" && cond === "stp" && Math.abs(V - 56) < 0.05) tick(3);
    }
    function geo() { var W = S.W, H = S.H, x0 = W * 0.05, x1 = W * 0.64; return { x0: x0, x1: x1, y: H * 0.25, h: H * 0.38, px: x0 + (V / 60) * (x1 - x0) }; }
    S.drag({
      down: function (p) { var g = geo(); if (Math.abs(p.x - g.px) < 30 && p.y > g.y - 20 && p.y < g.y + g.h + 40) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(); sld.set(rd(clamp((p.x - g.x0) / (g.x1 - g.x0) * 60, 0, 60), 1)); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return Math.abs(p.x - g.px) < 30 && p.y > g.y - 20 && p.y < g.y + g.h + 40; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), f = fs(S), nn = V / Vm(), G = GAS[gi];
      ctx.clearRect(0, 0, W, H);
      // barrel with scale
      ctx.fillStyle = C.card; ctx.fillRect(g.x0, g.y, g.x1 - g.x0, g.h);
      ctx.fillStyle = "rgba(14,165,233,.12)"; ctx.fillRect(g.x0, g.y, g.px - g.x0, g.h);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.strokeRect(g.x0, g.y, g.x1 - g.x0, g.h);
      for (var v = 0; v <= 60; v += 10) { var x = g.x0 + v / 60 * (g.x1 - g.x0); ctx.beginPath(); ctx.moveTo(x, g.y); ctx.lineTo(x, g.y + 8); ctx.stroke(); txt(ctx, n(v), x, g.y - 9, { c: C.muted, s: 10 }); }
      var mk = g.x0 + Vm() / 60 * (g.x1 - g.x0); ctx.strokeStyle = "#f59e0b"; ctx.setLineDash([4, 4]); ctx.beginPath(); ctx.moveTo(mk, g.y); ctx.lineTo(mk, g.y + g.h); ctx.stroke(); ctx.setLineDash([]);
      txt(ctx, n(Vm()) + " L", mk, g.y + g.h + 12, { c: "#f59e0b", s: 11 });
      // molecules (12 dots per mole)
      var N = Math.min(80, Math.round(nn * 12)), w = g.px - g.x0 - 14;
      for (var k = 0; k < N && w > 4; k++) {
        var q = pts[k]; q[0] += q[3] * dt * 0.15; q[1] += q[4] * dt * 0.3;
        if (q[0] < 0 || q[0] > 1) q[3] *= -1; if (q[1] < 0 || q[1] > 1) q[4] *= -1; q[0] = clamp(q[0], 0, 1); q[1] = clamp(q[1], 0, 1);
        var mx = g.x0 + 8 + q[0] * w, my = g.y + 10 + q[1] * (g.h - 20);
        K.dot(ctx, mx - 3, my, 4.5, G[2], "rgba(0,0,0,.35)"); K.dot(ctx, mx + 3, my, 4.5, G[2], "rgba(0,0,0,.35)");
      }
      // plunger
      ctx.fillStyle = "#64748b"; ctx.fillRect(g.px - 5, g.y + 2, 10, g.h - 4); ctx.fillRect(g.px, g.y + g.h / 2 - 4, Math.max(0, W * 0.7 - g.px), 8);
      K.rr(ctx, Math.min(W - 18, W * 0.7), g.y + g.h / 2 - 22, 14, 44, 4); ctx.fill();
      txt(ctx, "↔", g.px, g.y + g.h + 26, { c: C.ink, s: 16 });
      // readouts
      var x0 = W * 0.76, y = H * 0.12, lh = Math.max(20, H * 0.11), a = "left";
      txt(ctx, G[0] + "  (" + G[1] + " g/mol)", x0, y, { c: C.ink, s: f + 3, a: a }); y += lh;
      txt(ctx, "V = " + n(rd(V, 1)) + " L", x0, y, { c: C.ink, s: f, a: a }); y += lh;
      txt(ctx, "n = V ÷ " + n(Vm()) + " = " + n(rd(nn, 3)) + " mol", x0, y, { c: "#2563eb", s: f, a: a }); y += lh;
      txt(ctx, t("mass", "الكتلة") + " = " + n(rd(nn * G[1], 2)) + " g", x0, y, { c: C.ink, s: f, a: a }); y += lh;
      txt(ctx, sci(nn * 6.02e23), x0, y, { c: "#a855f7", s: f, a: a }); y += lh * 0.7;
      txt(ctx, t("molecules", "جزيء"), x0, y, { c: C.muted, s: f - 2, a: a });
      txt(ctx, t("● ● = 1/12 mol", "● ● = 1/12 مول"), W * 0.05, H - 12, { c: C.muted, s: 10, a: "left" });
    });
  };

  /* =========================================================
     3. sec2chem_limit - limiting reactant mixer
     ========================================================= */
  L.sec2chem_limit = function (host, cfg, done) {
    var RX = [
      { eq: "H₂ + F₂ → 2HF", A: ["H₂", 1, ["#e5e7eb", "#e5e7eb"]], B: ["F₂", 1, ["#a3e635", "#a3e635"]], P: ["HF", 2, ["#e5e7eb", "#a3e635"]] },
      { eq: "2H₂ + O₂ → 2H₂O", A: ["H₂", 2, ["#e5e7eb", "#e5e7eb"]], B: ["O₂", 1, ["#ef4444", "#ef4444"]], P: ["H₂O", 2, ["#e5e7eb", "#ef4444", "#e5e7eb"]] },
      { eq: "N₂ + 3H₂ → 2NH₃", A: ["N₂", 1, ["#3b82f6", "#3b82f6"]], B: ["H₂", 3, ["#e5e7eb", "#e5e7eb"]], P: ["NH₃", 2, ["#e5e7eb", "#3b82f6", "#e5e7eb", "#e5e7eb"]] }
    ];
    host.innerHTML = hint(t("Choose a reaction, set the moles of each reactant with the sliders, then press React. One icon = 1 mol.",
      "اختر تفاعلًا واضبط مولات كل متفاعل بالمنزلقين ثم اضغط «تفاعل». كل رمز = 1 مول.")) + '<div class="seg" id="s2lR"></div>';
    var S = K.make(host, 0.55, 360);
    var c = box(host, L._slider("A", 0, 12, 1, 6, "") + L._slider("B", 0, 12, 1, 4, "") +
      '<div class="btn-row"><button type="button" class="btn sm primary" id="s2lGo">⚗️ ' + t("React", "تفاعل") + '</button><button type="button" class="btn sm ghost" id="s2lRe">↺ ' + t("Mix again", "اخلط من جديد") + "</button></div>");
    var tick = L._goals(host, [t("Book example: 6 mol H₂ + 4 mol F₂. React and see 8 mol HF and 2 mol H₂ left.", "مثال الكتاب: 6 مول H₂ + 4 مول F₂. فاعلهما لترى 8 مول HF ويتبقى 2 مول H₂."),
      t("Make O₂ the limiting reactant in the water reaction.", "اجعل O₂ هو المادة المحددة في تفاعل تكوين الماء."), t("Mix N₂ and H₂ so that nothing is left over.", "اخلط N₂ وH₂ بحيث لا يتبقى شيء.")], done);
    var ri = 0, a = 6, b = 4, ph = 0, go = false;
    var labs = c.querySelectorAll(".sl span");
    function nm() { labs[0].firstChild.nodeValue = t("Moles of ", "مولات ") + RX[ri].A[0] + " "; labs[1].firstChild.nodeValue = t("Moles of ", "مولات ") + RX[ri].B[0] + " "; }
    var sA = sl(c, 0, function (v) { return n(v); }, function (v) { a = v; go = false; ph = 0; });
    var sB = sl(c, 1, function (v) { return n(v); }, function (v) { b = v; go = false; ph = 0; });
    K.seg(host, "#s2lR", RX.map(function (r, i) { return [String(i), r.eq]; }), "0", function (v) { ri = Number(v); nm(); go = false; ph = 0; });
    nm();
    function res() { var r = RX[ri], x = Math.min(a / r.A[1], b / r.B[1]); return { x: x, ra: a / r.A[1], rb: b / r.B[1], P: x * r.P[1], la: rd(a - x * r.A[1], 2), lb: rd(b - x * r.B[1], 2) }; }
    c.querySelector("#s2lGo").onclick = function () {
      if (!a || !b) { E.toast(t("Add some of both reactants first.", "أضف من المتفاعلين أولًا.")); return; }
      go = true; ph = 0; var q = res();
      if (ri === 0 && a === 6 && b === 4) tick(0);
      if (ri === 1 && q.rb < q.ra) tick(1);
      if (ri === 2 && q.la === 0 && q.lb === 0) tick(2);
      E.speak(q.ra < q.rb ? t(RX[ri].A[0] + " is the limiting reactant", RX[ri].A[0] + " هو المادة المحددة") : q.rb < q.ra ? t(RX[ri].B[0] + " is the limiting reactant", RX[ri].B[0] + " هو المادة المحددة") : t("Exact ratio: nothing left over", "نسبة تامة: لا يتبقى شيء"));
    };
    c.querySelector("#s2lRe").onclick = function () { go = false; ph = 0; };
    function mol(ctx, x, y, cols, r, alpha) {
      ctx.globalAlpha = alpha; cols.forEach(function (cl, i) { K.dot(ctx, x + (i - (cols.length - 1) / 2) * r * 1.3, y + (i === 3 ? -r : 0), r, cl, "rgba(0,0,0,.4)"); }); ctx.globalAlpha = 1;
    }
    function grid(ctx, x, y, w, cnt, cols, r, alpha) {
      var per = Math.max(1, Math.floor(w / (r * 5.5))), whole = Math.floor(cnt + 1e-9), part = cnt - whole;
      for (var i = 0; i < Math.ceil(cnt - 1e-9); i++) mol(ctx, x + (i % per) * r * 5.5 + r * 2.5, y + Math.floor(i / per) * r * 3.2, cols, r, (i < whole ? 1 : 0.35) * alpha);
      return part;
    }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, r = RX[ri], f = fs(S), q = res(), rad = Math.max(4, Math.min(8, W / 90));
      ctx.clearRect(0, 0, W, H);
      if (go) ph = Math.min(1, ph + dt * 1.2);
      var bx = W * 0.03, bw = W * 0.5, by = H * 0.1, bh = H * 0.62;
      ctx.fillStyle = C.card; K.rr(ctx, bx, by, bw, bh, 12); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
      txt(ctx, go ? t("After the reaction", "بعد التفاعل") : t("Reaction mixture", "مخلوط التفاعل"), bx + bw / 2, by - 10, { c: C.ink, s: f });
      var y1 = by + rad * 3, ys = (bh - rad * 6) / 3;
      if (!go || ph < 1) {
        grid(ctx, bx + 6, y1, bw - 12, a, r.A[2], rad, 1 - ph);
        grid(ctx, bx + 6, y1 + ys * 1.5, bw - 12, b, r.B[2], rad, 1 - ph);
      }
      if (go) {
        grid(ctx, bx + 6, y1, bw - 12, q.P, r.P[2], rad, ph);
        if (q.la > 0) grid(ctx, bx + 6, y1 + ys * 1.5, bw - 12, q.la, r.A[2], rad, ph);
        if (q.lb > 0) grid(ctx, bx + 6, y1 + ys * 1.5, bw - 12, q.lb, r.B[2], rad, ph);
      }
      // ratio bars
      var x0 = W * 0.57, y = H * 0.1, lh = Math.max(20, H * 0.09), a2 = "left", mx = Math.max(q.ra, q.rb, 1), bwid = W * 0.38;
      txt(ctx, r.eq, x0, y, { c: C.ink, s: f + 2, a: a2 }); y += lh;
      [[r.A, a, q.ra], [r.B, b, q.rb]].forEach(function (p) {
        var lim = p[2] <= Math.min(q.ra, q.rb) + 1e-9 && q.ra !== q.rb;
        txt(ctx, p[0][0] + ": " + n(p[1]) + " ÷ " + p[0][1] + " = " + n(rd(p[2], 2)) + (lim ? t("  ← limiting", "  ← المحددة") : ""), x0, y, { c: lim ? "#dc2626" : C.ink, s: f, a: a2 }); y += lh * 0.55;
        ctx.fillStyle = C.line; K.rr(ctx, x0, y, bwid, 10, 5); ctx.fill(); ctx.fillStyle = lim ? "#ef4444" : "#3b82f6"; K.rr(ctx, x0, y, Math.max(4, bwid * p[2] / mx), 10, 5); ctx.fill(); y += lh * 0.9;
      });
      if (go) {
        txt(ctx, t("Formed: ", "الناتج: ") + n(rd(q.P, 2)) + " mol " + r.P[0], x0, y, { c: "#16a34a", s: f, a: a2 }); y += lh;
        txt(ctx, t("Left over: ", "المتبقي: ") + (q.la > 0 ? n(q.la) + " mol " + r.A[0] : q.lb > 0 ? n(q.lb) + " mol " + r.B[0] : t("nothing", "لا شيء")), x0, y, { c: "#f59e0b", s: f, a: a2 });
      } else txt(ctx, t("Smaller ratio = limiting reactant", "النسبة الأصغر = المادة المحددة"), x0, y, { c: C.muted, s: f - 1, a: a2 });
    });
  };

  /* =========================================================
     4. sec2chem_formula - empirical & molecular formula finder
     ========================================================= */
  L.sec2chem_formula = function (host, cfg, done) {
    var SUBN = "₀₁₂₃₄₅₆₇₈₉";
    function sub(k) { return k === 1 ? "" : String(k).split("").map(function (d) { return SUBN[d]; }).join(""); }
    function fm(cn, hn) { return "C" + sub(cn) + "H" + sub(hn); }
    host.innerHTML = hint(t("A hydrocarbon contains only C and H. Slide the % of carbon and the molar mass; the steps of the book's method update live.",
      "الهيدروكربون يحتوي على C وH فقط. حرّك النسبة المئوية للكربون والكتلة المولية، فتتحدث خطوات طريقة الكتاب لحظيًا."));
    var S = K.make(host, 0.6, 380);
    var c = box(host, L._slider(t("Carbon %", "نسبة الكربون %"), 75, 92.3, 0.1, 80, "") + L._slider(t("Molar mass", "الكتلة المولية"), 14, 120, 1, 30, ""));
    var tick = L._goals(host, [t("Find a compound whose empirical formula is CH₂.", "أوجد مركبًا صيغته الأولية CH₂."), t("Book example: 83.7% C and 86 g/mol. Reach C₆H₁₄.", "مثال الكتاب: 83.7% C و86 جم/مول، توصل إلى C₆H₁₄."),
      t("Find butane C₄H₁₀ (58 g/mol).", "أوجد البيوتان C₄H₁₀ (58 جم/مول)."), t("Find ethene C₂H₄ (28 g/mol).", "أوجد الإيثين C₂H₄ (28 جم/مول).")], done);
    var pc = 80, M = 30, R = {};
    sl(c, 0, function (v) { return n(rd(v, 1)) + "%"; }, function (v) { pc = rd(v, 1); calc(); });
    sl(c, 1, function (v) { return n(v) + " g/mol"; }, function (v) { M = v; calc(); });
    function calc() {
      var cm = pc / 12, hm = (100 - pc) / 1, r = hm / cm, k = 0;
      for (var i = 1; i <= 4; i++) if (Math.abs(r * i - Math.round(r * i)) < 0.06) { k = i; break; }
      R = { cm: cm, hm: hm, r: r, k: k };
      if (k) {
        R.ec = k; R.eh = Math.round(r * k); R.em = 12 * k + R.eh; R.n = M / R.em; R.ni = Math.round(R.n); R.ok = R.ni >= 1 && Math.abs(R.n - R.ni) < 0.04;
        if (R.ok) { R.mc = R.ec * R.ni; R.mh = R.eh * R.ni; }
        var ef = fm(R.ec, R.eh), mf = R.ok ? fm(R.mc, R.mh) : "";
        if (ef === "CH₂") tick(0);
        if (mf === "C₆H₁₄") tick(1);
        if (mf === "C₄H₁₀") tick(2);
        if (mf === "C₂H₄") tick(3);
      }
    }
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, f = fs(S), x0 = W * 0.04, y = H * 0.09, lh = Math.max(22, H * 0.105), a = "left";
      ctx.clearRect(0, 0, W, H);
      var rows = [
        [t("1. In 100 g:", "1. في 100 جم:"), "C = " + n(pc) + " g ,  H = " + n(rd(100 - pc, 1)) + " g", C.ink],
        [t("2. Moles:", "2. المولات:"), "C = " + n(rd(R.cm, 3)) + " ,  H = " + n(rd(R.hm, 3)), "#2563eb"],
        [t("3. ÷ smallest:", "3. ÷ الأصغر:"), "C : H = 1 : " + n(rd(R.r, 3)) + (R.k > 1 ? "   (× " + R.k + ")" : ""), "#a855f7"],
        [t("4. Empirical:", "4. الأولية:"), R.k ? fm(R.ec, R.eh) + "  (" + R.em + " g/mol)" : t("no simple ratio - keep sliding", "لا توجد نسبة بسيطة - واصل التحريك"), R.k ? "#16a34a" : "#dc2626"],
        [t("5. n = M ÷ emp.:", "5. n = M ÷ الأولية:"), R.k ? n(M) + " ÷ " + R.em + " = " + n(rd(R.n, 2)) + (R.ok ? "" : t("  (not whole)", "  (ليست عددًا صحيحًا)")) : "—", R.ok ? "#0d9488" : C.muted],
        [t("Molecular:", "الجزيئية:"), R.ok ? fm(R.mc, R.mh) : "—", R.ok ? "#0d9488" : C.muted]
      ];
      rows.forEach(function (rw, i) { txt(ctx, rw[0], x0, y + i * lh, { c: C.muted, s: f - 1, a: a }); txt(ctx, rw[1], x0 + Math.min(W * 0.2, 150), y + i * lh, { c: rw[2], s: i === 5 ? f + 4 : f, a: a }); });
      // molecule sketch
      var mx = W * 0.72, my = H * 0.5;
      if (R.ok) {
        var cn = R.mc, hn = R.mh, sp = Math.min(34, W * 0.24 / Math.max(1, cn - 1 || 1)), rC = Math.max(7, Math.min(12, sp * 0.4)), sx = mx - (cn - 1) * sp / 2, hl = hn;
        ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath();
        for (var i = 0; i < cn; i++) { var cx = sx + i * sp, cy = my + (i % 2 ? -10 : 10); if (i) ctx.lineTo(cx, cy); else ctx.moveTo(cx, cy); } ctx.stroke();
        var slots = [];
        for (var j = 0; j < cn; j++) { var X = sx + j * sp, Y = my + (j % 2 ? -10 : 10), d = j % 2 ? -1 : 1; slots.push([X, Y + d * 26], [X - 12, Y - d * 22], [X + 12, Y - d * 22]); if (j === 0) slots.push([X - 26, Y]); if (j === cn - 1) slots.push([X + 26, Y]); }
        for (var k = 0; k < Math.min(hl, slots.length); k++) {
          var s0 = slots[k], pj = Math.floor(k / 3) < cn ? Math.min(cn - 1, Math.floor(k / 3)) : cn - 1, ax = sx + pj * sp, ay = my + (pj % 2 ? -10 : 10);
          ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(s0[0], s0[1]); ctx.stroke();
          K.dot(ctx, s0[0], s0[1], rC * 0.55, "#f1f5f9", "#64748b");
        }
        for (var m = 0; m < cn; m++) K.dot(ctx, sx + m * sp, my + (m % 2 ? -10 : 10), rC, "#334155", "#0f172a");
        txt(ctx, fm(cn, hn), mx, H * 0.86, { c: C.ink, s: f + 4 });
      } else txt(ctx, "?", mx, my, { c: C.muted, s: 48 });
    });
  };

  /* =========================================================
     5. sec2chem_molarity - prepare and dilute
     ========================================================= */
  L.sec2chem_molarity = function (host, cfg, done) {
    host.innerHTML = hint(t("Prepare: set the mass of NaOH and the flask volume. Dilute: press and hold the water bottle to pour (or use the slider) and watch M₁V₁ = M₂V₂.",
      "التحضير: اضبط كتلة NaOH وحجم الدورق. التخفيف: اضغط باستمرار على زجاجة الماء لتصب (أو استخدم المنزلق) وراقب M₁V₁ = M₂V₂.")) + '<div class="seg" id="s2dM"></div>';
    var S = K.make(host, 0.58, 370);
    var c = box(host, '<div id="s2dP">' + L._slider(t("Mass of NaOH", "كتلة NaOH"), 0, 8, 0.1, 1, "") + L._slider(t("Volume of solution", "حجم المحلول"), 100, 1000, 50, 250, "") + "</div>" +
      '<div id="s2dD" style="display:none"><div class="seg" id="s2dS"></div>' + L._slider(t("Water added", "الماء المضاف"), 0, 1000, 10, 0, "") + "</div>");
    var tick = L._goals(host, [t("Book example: make 0.1 M NaOH from 2 g in 500 mL.", "مثال الكتاب: حضّر NaOH تركيزه 0.1 M من 2 جم في 500 مل."), t("Prepare a 1 M NaOH solution.", "حضّر محلول NaOH تركيزه 1 M."),
      t("Dilute 10 mL of 0.8 M Na₂CO₃ to 0.032 M.", "خفف 10 مل من Na₂CO₃ تركيزه 0.8 M إلى 0.032 M."), t("Make 1 L of 0.5 M Na₂CO₃ from the 1.5 M stock.", "حضّر لترًا من Na₂CO₃ تركيزه 0.5 M من المحلول 1.5 M.")], done);
    var mode = "p", mass = 1, vol = 250, st = 0, water = 0, pour = false, drops = [];
    var STK = [[0.8, 10], [1.5, 333]];
    sl(c, 0, function (v) { return n(rd(v, 1)) + t(" g", " جم"); }, function (v) { mass = rd(v, 1); chk(); });
    sl(c, 1, function (v) { return n(v) + t(" mL", " مل"); }, function (v) { vol = v; chk(); });
    var wS = sl(c, 2, function (v) { return n(v) + t(" mL", " مل"); }, function (v) { water = v; chk(); });
    K.seg(host, "#s2dM", [["p", "⚖️ " + t("Prepare", "تحضير")], ["d", "💧 " + t("Dilute", "تخفيف")]], "p", function (v) { mode = v; c.querySelector("#s2dP").style.display = v === "p" ? "" : "none"; c.querySelector("#s2dD").style.display = v === "d" ? "" : "none"; });
    K.seg(c, "#s2dS", [["0", "10 mL · 0.8 M"], ["1", "333 mL · 1.5 M"]], "0", function (v) { st = Number(v); wS.set(0); });
    function Mp() { return mass / 40 / (vol / 1000); }
    function Md() { return STK[st][0] * STK[st][1] / (STK[st][1] + water); }
    function chk() {
      if (Math.abs(mass - 2) < 0.01 && vol === 500) tick(0);
      if (mode === "p" && Math.abs(Mp() - 1) < 0.005) tick(1);
      if (st === 0 && Math.abs(Md() - 0.032) < 0.0006) tick(2);
      if (st === 1 && Math.abs(Md() - 0.5) < 0.004 && Math.abs(STK[1][1] + water - 1000) < 10) tick(3);
    }
    function bottle() { return { x: S.W * 0.08, y: S.H * 0.12, w: S.W * 0.1, h: S.H * 0.3 }; }
    S.drag({
      down: function (p) { if (mode !== "d") return false; var b = bottle(); if (p.x > b.x - 10 && p.x < b.x + b.w + 30 && p.y > b.y - 10 && p.y < b.y + b.h + 10) { pour = true; return true; } return false; },
      move: function () {}, up: function () { pour = false; },
      hover: function (p) { if (mode !== "d") return false; var b = bottle(); return p.x > b.x - 10 && p.x < b.x + b.w + 30 && p.y > b.y - 10 && p.y < b.y + b.h + 10; }
    });
    var acc = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, f = fs(S);
      ctx.clearRect(0, 0, W, H);
      var fx = W * 0.32, fw = W * 0.26, fy = H * 0.12, fh = H * 0.8, cap = 1000, M, V;
      if (mode === "p") { M = Mp(); V = vol; } else {
        if (pour && water < 1000) { acc += dt * 200; if (acc >= 10) { var stp = Math.floor(acc / 10) * 10; acc -= stp; wS.set(Math.min(1000, water + stp)); } drops.push([0, 0]); }
        M = Md(); V = STK[st][1] + water; cap = 1400;
      }
      // flask (beaker style)
      var lvl = clamp(V / cap, 0, 1) * fh * 0.92, conc = clamp(M / 1.5, 0.04, 1);
      ctx.fillStyle = mode === "p" ? "rgba(168,85,247," + (0.12 + conc * 0.7) + ")" : "rgba(37,99,235," + (0.1 + conc * 0.75) + ")";
      ctx.fillRect(fx + 3, fy + fh - lvl, fw - 6, lvl - 3);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx, fy + fh); ctx.lineTo(fx + fw, fy + fh); ctx.lineTo(fx + fw, fy); ctx.stroke();
      for (var g = 200; g < cap; g += 200) { var gy = fy + fh - g / cap * fh * 0.92; ctx.beginPath(); ctx.moveTo(fx + fw - 14, gy); ctx.lineTo(fx + fw, gy); ctx.lineWidth = 1.5; ctx.stroke(); txt(ctx, n(g), fx + fw + 18, gy, { c: C.muted, s: 10 }); }
      // solute particles: count ~ moles
      var mols = mode === "p" ? mass / 40 : STK[st][0] * STK[st][1] / 1000, np = Math.min(60, Math.round(mols * 120));
      for (var i = 0; i < np; i++) { var px = fx + 10 + ((i * 37) % 97) / 97 * (fw - 20), py = fy + fh - 8 - ((i * 53) % 89) / 89 * (lvl - 14); if (lvl > 16) K.dot(ctx, px, py, 2.6, "#fde047"); }
      if (mode === "d") {
        var b = bottle();
        ctx.save(); ctx.translate(b.x + b.w / 2, b.y + b.h / 2); ctx.rotate(pour ? -0.9 : 0);
        ctx.fillStyle = "rgba(14,165,233,.35)"; K.rr(ctx, -b.w / 2, -b.h / 2, b.w, b.h, 8); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = C.muted; ctx.fillRect(-b.w * 0.15, -b.h / 2 - 12, b.w * 0.3, 12); ctx.restore();
        txt(ctx, "H₂O", b.x + b.w / 2, b.y + b.h + 14, { c: C.ink, s: f });
        if (pour) { ctx.strokeStyle = "rgba(14,165,233,.8)"; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(b.x + b.w * 1.1, b.y); ctx.quadraticCurveTo(fx + fw * 0.3, b.y, fx + fw * 0.35, fy + fh - lvl); ctx.stroke(); }
        else txt(ctx, t("hold to pour", "اضغط للصب"), b.x + b.w / 2, b.y - 22, { c: C.muted, s: 10 });
      }
      // readouts
      var x0 = W * 0.68, y = H * 0.12, lh = Math.max(20, H * 0.1), a = "left";
      if (mode === "p") {
        txt(ctx, "NaOH (40 g/mol)", x0, y, { c: C.ink, s: f + 2, a: a }); y += lh;
        txt(ctx, "n = " + n(mass) + " ÷ 40 = " + n(rd(mass / 40, 4)) + " mol", x0, y, { c: C.ink, s: f, a: a }); y += lh;
        txt(ctx, "V = " + n(vol) + " mL = " + n(vol / 1000) + " L", x0, y, { c: C.ink, s: f, a: a }); y += lh;
        txt(ctx, "M = n ÷ V = " + n(rd(M, 3)) + " M", x0, y, { c: "#a855f7", s: f + 3, a: a });
      } else {
        var s0 = STK[st];
        txt(ctx, "Na₂CO₃", x0, y, { c: C.ink, s: f + 2, a: a }); y += lh;
        txt(ctx, "M₁V₁ = " + n(s0[0]) + " × " + n(s0[1]) + " mL", x0, y, { c: C.ink, s: f, a: a }); y += lh;
        txt(ctx, "V₂ = " + n(s0[1]) + " + " + n(water) + " = " + n(V) + " mL", x0, y, { c: C.ink, s: f, a: a }); y += lh;
        txt(ctx, "M₂ = " + n(rd(M, 4)) + " M", x0, y, { c: "#2563eb", s: f + 3, a: a }); y += lh;
        txt(ctx, t("Solute moles stay constant", "مولات المذاب ثابتة"), x0, y, { c: C.muted, s: f - 2, a: a });
      }
    });
  };

  /* =========================================================
     6. sec2chem_rutherford - gold foil scattering
     ========================================================= */
  L.sec2chem_rutherford = function (host, cfg, done) {
    host.innerHTML = hint(t("Press Fire to send alpha particles at the gold foil. Drag the source up or down to aim. Switch between Thomson's atom and Rutherford's atom and compare the counters.",
      "اضغط «أطلق» لإرسال دقائق ألفا نحو رقيقة الذهب، واسحب المصدر لأعلى أو لأسفل لتصويبه، وبدّل بين ذرة طومسون وذرة رذرفورد وقارن العدادات.")) + '<div class="seg" id="s2rM"></div>';
    var S = K.make(host, 0.58, 380);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm tg" id="s2rF">🔫 ' + t("Fire alpha particles", "أطلق دقائق ألفا") + '</button><button type="button" class="btn sm ghost" id="s2rC">↺ ' + t("Reset counters", "صفّر العدادات") + "</button></div>");
    var tick = L._goals(host, [t("Fire at least 50 alpha particles at Thomson's atom: none bounce back.", "أطلق 50 دقيقة ألفا على الأقل على ذرة طومسون: لا ترتد أي منها."),
      t("Switch to Rutherford's atom and catch a particle bouncing back.", "بدّل إلى ذرة رذرفورد والتقط دقيقة ترتد."), t("See at least 5 deflected particles.", "شاهد 5 دقائق منحرفة على الأقل."),
      t("After 200 particles on Rutherford's atom, most passed straight through.", "بعد 200 دقيقة على ذرة رذرفورد، معظمها نفذ مستقيمًا.")], done);
    var model = "t", firing = false, P = [], flashes = [], cnt = { n: 0, s: 0, d: 0, b: 0 }, aim = 0.5, drag = false, acc = 0;
    K.seg(host, "#s2rM", [["t", "🍮 " + t("Thomson's atom", "ذرة طومسون")], ["r", "☀️ " + t("Rutherford's atom", "ذرة رذرفورد")]], "t", function (v) { model = v; reset(); });
    function reset() { cnt = { n: 0, s: 0, d: 0, b: 0 }; P = []; }
    c.querySelector("#s2rF").onclick = function () { firing = !firing; this.classList.toggle("on", firing); };
    c.querySelector("#s2rC").onclick = reset;
    function geo() { var W = S.W, H = S.H; return { sx: W * 0.06, fx: W * 0.5, fy: H * 0.14, fh: H * 0.72, sp: H * 0.72 / 6 }; }
    function nuclei(g) { var out = []; for (var col = 0; col < 3; col++) for (var r = 0; r < 7; r++) out.push([g.fx - 8 + col * 8, g.fy + (r + (col % 2) * 0.5) * g.sp, col]); return out; }
    S.drag({
      down: function (p) { var g = geo(); if (p.x < g.sx + 50) { drag = true; return true; } return false; },
      move: function (p) { if (drag) { var g = geo(); aim = clamp((p.y - g.fy) / g.fh, 0.05, 0.95); } },
      up: function () { drag = false; },
      hover: function (p) { return p.x < geo().sx + 50; }
    });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), f = fs(S), NU = nuclei(g), b90 = 0.15, sp = W * 0.5;
      ctx.clearRect(0, 0, W, H);
      if (firing) { acc += dt * 14; while (acc >= 1) { acc--; P.push({ x: g.sx + 30, y: g.fy + aim * g.fh + K.rnd(-g.fh * 0.12, g.fh * 0.12), vx: sp, vy: 0, cols: {}, th: 0 }); } }
      // foil
      ctx.fillStyle = "rgba(250,204,21,.35)"; ctx.fillRect(g.fx - 14, g.fy - 10, 28, g.fh + 20);
      if (model === "t") { for (var k = 0; k < 8; k++) { ctx.fillStyle = "rgba(244,114,182,.35)"; K.dot(ctx, g.fx, g.fy + k * g.fh / 7, g.fh / 14, "rgba(244,114,182,.3)"); K.dot(ctx, g.fx + K.rnd(-3, 3), g.fy + k * g.fh / 7 + K.rnd(-5, 5), 2, "#1d4ed8"); } }
      else NU.forEach(function (q) { K.dot(ctx, q[0], q[1], 2.5, "#dc2626"); });
      // screen arc
      ctx.strokeStyle = "rgba(34,197,94,.55)"; ctx.lineWidth = 8; ctx.beginPath(); ctx.arc(g.fx, H / 2, Math.min(W * 0.46, H * 0.62), -1.35, 1.35); ctx.stroke();
      ctx.beginPath(); ctx.arc(g.fx, H / 2, Math.min(W * 0.46, H * 0.62), Math.PI - 1.0, Math.PI + 1.0); ctx.strokeStyle = "rgba(34,197,94,.3)"; ctx.stroke();
      // source
      var sy = g.fy + aim * g.fh;
      ctx.fillStyle = "#475569"; K.rr(ctx, g.sx - 10, sy - 18, 44, 36, 6); ctx.fill(); txt(ctx, "α", g.sx + 12, sy, { c: "#fff", s: 16 });
      txt(ctx, "↕", g.sx + 12, sy + 30, { c: C.ink, s: 14 });
      // particles
      for (var i = P.length - 1; i >= 0; i--) {
        var a = P[i], ox = a.x; a.x += a.vx * dt; a.y += a.vy * dt;
        if (model === "r") NU.forEach(function (q, j) {
          if (!a.cols[j] && (ox - q[0]) * (a.x - q[0]) <= 0 && Math.abs(a.y - q[1]) < g.sp) {
            a.cols[j] = 1; var bb = a.y - q[1];
            if (Math.abs(bb) < 25) { var th = 2 * Math.atan(b90 / Math.max(0.05, Math.abs(bb))) * (bb >= 0 ? 1 : -1), ang = Math.atan2(a.vy, a.vx) + th; a.vx = Math.cos(ang) * sp; a.vy = Math.sin(ang) * sp; a.th = Math.abs(Math.atan2(a.vy, a.vx)); }
          }
        });
        else if (!a.cols.t && a.x > g.fx) { a.cols.t = 1; var tt = K.rnd(-0.01, 0.01); a.vy = Math.sin(tt) * sp; a.vx = Math.cos(tt) * sp; a.th = Math.abs(tt); }
        K.dot(ctx, a.x, a.y, 3, "#f97316");
        var R = Math.min(W * 0.46, H * 0.62);
        var far = Math.hypot(a.x - g.fx, a.y - H / 2) > R && (a.x > g.fx || a.vx < 0);
        if (far || a.x < 0 || a.x > W || a.y < 0 || a.y > H) {
          var deg = a.th * 180 / Math.PI; cnt.n++;
          if (deg > 90) cnt.b++; else if (deg > 8) cnt.d++; else cnt.s++;
          flashes.push([a.x, a.y, 0.6]); P.splice(i, 1);
          if (model === "t" && cnt.n >= 50 && cnt.b === 0) tick(0);
          if (model === "r") { if (cnt.b > 0) tick(1); if (cnt.d >= 5) tick(2); if (cnt.n >= 200 && cnt.s > cnt.n / 2) tick(3); }
        }
      }
      flashes = flashes.filter(function (fl) { fl[2] -= dt; if (fl[2] > 0) K.dot(ctx, fl[0], fl[1], 6 * fl[2] + 2, "rgba(190,242,100," + fl[2] + ")"); return fl[2] > 0; });
      // counters
      var x0 = W * 0.7, y = H * 0.1, lh = Math.max(18, H * 0.075), al = "left";
      txt(ctx, model === "t" ? t("Thomson's atom", "ذرة طومسون") : t("Rutherford's atom", "ذرة رذرفورد"), x0, y, { c: C.ink, s: f + 1, a: al }); y += lh;
      txt(ctx, t("Fired: ", "المطلقة: ") + n(cnt.n), x0, y, { c: C.ink, s: f, a: al }); y += lh;
      txt(ctx, t("Straight: ", "مستقيمة: ") + n(cnt.s) + (cnt.n ? " (" + n(Math.round(cnt.s / cnt.n * 100)) + "%)" : ""), x0, y, { c: "#16a34a", s: f, a: al }); y += lh;
      txt(ctx, t("Deflected: ", "منحرفة: ") + n(cnt.d), x0, y, { c: "#f59e0b", s: f, a: al }); y += lh;
      txt(ctx, t("Bounced back: ", "مرتدة: ") + n(cnt.b), x0, y, { c: "#dc2626", s: f, a: al });
    });
  };

  /* =========================================================
     7. sec2chem_bohr - hydrogen atom, jumps and spectrum
     ========================================================= */
  L.sec2chem_bohr = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the electron to another energy level and let go. Moving out absorbs a quantum; falling in emits a photon that lands on the spectrum strip. Or press Spark to excite many atoms.",
      "اسحب الإلكترون إلى مستوى طاقة آخر واتركه؛ الانتقال للخارج يمتص كمًّا، والسقوط للداخل يطلق فوتونًا يظهر على شريط الطيف، أو اضغط «شرارة» لإثارة ذرات كثيرة."));
    var S = K.make(host, 0.6, 390);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm primary" id="s2bS">⚡ ' + t("Spark (electric discharge)", "شرارة (تفريغ كهربي)") + '</button><button type="button" class="btn sm ghost" id="s2bC">↺ ' + t("Clear spectrum", "امسح الطيف") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Produce hydrogen's red line (656 nm).", "أنتج الخط الأحمر للهيدروجين (656 نانومتر)."), t("Collect all four visible lines.", "اجمع الخطوط المرئية الأربعة."),
      t("Emit an invisible ultraviolet photon.", "أطلق فوتونًا فوق بنفسجي غير مرئي."), t("Emit an infrared photon.", "أطلق فوتونًا تحت أحمر.")], done);
    var lvl = 1, pos = null, drag = false, lines = {}, photons = [], queue = [], qt = 0, vis = {};
    function lam(hi, lo) { return 1e9 / (1.0968e7 * (1 / (lo * lo) - 1 / (hi * hi))); }
    function colr(l) { return l > 700 ? "#7f1d1d" : l > 620 ? "#ef4444" : l > 560 ? "#eab308" : l > 495 ? "#22c55e" : l > 470 ? "#14b8a6" : l > 440 ? "#3b82f6" : l > 400 ? "#8b5cf6" : "#c4b5fd"; }
    function region(l) { return l < 400 ? t("ultraviolet (invisible)", "فوق بنفسجي (غير مرئي)") : l > 700 ? t("infrared (invisible)", "تحت أحمر (غير مرئي)") : t("visible", "مرئي"); }
    function geo() { var W = S.W, H = S.H, cx = W * 0.27, cy = H * 0.46, R = Math.min(W * 0.25, H * 0.43); return { cx: cx, cy: cy, R: R }; }
    function rad(g, k) { return g.R * (0.13 + 0.87 * (k - 1) / 5); }
    function jump(to) {
      if (to === lvl) return;
      var from = lvl; lvl = to;
      if (to > from) { out.innerHTML = "<span>" + esc(t("Absorbed a quantum: n = " + from + " → " + to + ". The atom is excited.", "امتص كمًّا: n = " + n(from) + " ← " + n(to) + "، والذرة مثارة.")) + "</span>"; return; }
      var l = lam(from, to); photons.push({ x: 0, l: l, a: 1 }); lines[Math.round(l)] = l;
      out.innerHTML = "<span>" + esc(t("n = " + from + " → " + to + ": photon λ = " + Math.round(l) + " nm, " + region(l), "n = " + n(from) + " ← " + n(to) + ": فوتون λ = " + n(Math.round(l)) + " نانومتر، " + region(l))) + "</span>";
      if (to === 2 && from <= 6) { vis[from] = 1; if (from === 3) tick(0); if (vis[3] && vis[4] && vis[5] && vis[6]) tick(1); }
      if (to === 1) tick(2);
      if (to === 3) tick(3);
    }
    c.querySelector("#s2bS").onclick = function () {
      var top = 3 + Math.floor(Math.random() * 4); queue = []; lvl = 1; queue.push(top);
      var k = top; while (k > 1) { var nx = Math.max(1, k - 1 - Math.floor(Math.random() * Math.min(3, k - 1))); if (Math.random() < 0.5 && k > 2) nx = 2; queue.push(nx); k = nx; }
      qt = 0.4;
    };
    c.querySelector("#s2bC").onclick = function () { lines = {}; };
    S.drag({
      down: function (p) { var g = geo(), r = rad(g, lvl); if (Math.abs(Math.hypot(p.x - g.cx, p.y - g.cy) - r) < 22) { drag = true; queue = []; return true; } return false; },
      move: function (p) { if (drag) pos = p; },
      up: function (p) { if (!drag) return; drag = false; var g = geo(), d = Math.hypot(p.x - g.cx, p.y - g.cy), best = 1, bd = 1e9; for (var k = 1; k <= 6; k++) { var e = Math.abs(rad(g, k) - d); if (e < bd) { bd = e; best = k; } } pos = null; jump(best); },
      hover: function (p) { var g = geo(); return Math.abs(Math.hypot(p.x - g.cx, p.y - g.cy) - rad(g, lvl)) < 22; }
    });
    var ang = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), f = fs(S);
      ctx.clearRect(0, 0, W, H); ang += dt * 1.6;
      if (queue.length) { qt -= dt; if (qt <= 0) { jump(queue.shift()); qt = 0.7; } }
      for (var k = 1; k <= 6; k++) { ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(g.cx, g.cy, rad(g, k), 0, 6.283); ctx.stroke(); txt(ctx, "n=" + k, g.cx + rad(g, k) * 0.71 + 4, g.cy - rad(g, k) * 0.71 - 4, { c: C.muted, s: 10 }); }
      K.dot(ctx, g.cx, g.cy, 7, "#dc2626"); txt(ctx, "+", g.cx, g.cy + 1, { c: "#fff", s: 11 });
      var ex = pos ? pos.x : g.cx + Math.cos(ang) * rad(g, lvl), ey = pos ? pos.y : g.cy + Math.sin(ang) * rad(g, lvl);
      K.dot(ctx, ex, ey, 7, "#2563eb", "#1e3a8a"); txt(ctx, "−", ex, ey, { c: "#fff", s: 12 });
      // energy ladder
      var lx = W * 0.6, lw = W * 0.12, ly0 = H * 0.08, ly1 = H * 0.62;
      for (var j = 1; j <= 6; j++) { var yy = ly0 + (ly1 - ly0) * (1 - (1 - 1 / (j * j)) / (1 - 1 / 36)); ctx.strokeStyle = j === lvl ? "#2563eb" : C.muted; ctx.lineWidth = j === lvl ? 4 : 2; ctx.beginPath(); ctx.moveTo(lx, yy); ctx.lineTo(lx + lw, yy); ctx.stroke(); txt(ctx, String(j), lx - 10, yy, { c: C.muted, s: 10 }); }
      txt(ctx, t("Energy ↑", "الطاقة ↑"), lx + lw / 2, ly0 - 4 > 8 ? ly0 - 8 : 8, { c: C.muted, s: 10 });
      // photons flying
      photons = photons.filter(function (ph) { ph.x += dt * 1.4; ph.a -= dt * 0.5; var px = g.cx + (W * 0.75 - g.cx) * ph.x, py = g.cy - ph.x * 30; ctx.strokeStyle = colr(ph.l); ctx.lineWidth = 3; ctx.beginPath(); for (var s = 0; s < 30; s++) { var X = px - s * 1.5, Y = py + Math.sin(s * 0.8 + ph.x * 30) * 4; if (s) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); } ctx.stroke(); return ph.x < 1; });
      // spectrum strip 380-760 visible plus UV/IR flags
      var sx = W * 0.56, sw = W * 0.4, sy = H * 0.72, sh = H * 0.13;
      ctx.fillStyle = "#0f172a"; ctx.fillRect(sx, sy, sw, sh);
      var uv = 0, ir = 0;
      Object.keys(lines).forEach(function (k2) { var l = lines[k2]; if (l < 380) { uv++; return; } if (l > 760) { ir++; return; } var x = sx + (l - 380) / 380 * sw; ctx.fillStyle = colr(l); ctx.fillRect(x - 1.5, sy + 2, 3, sh - 4); txt(ctx, n(Math.round(l)), x, sy + sh + 10, { c: C.muted, s: 9 }); });
      txt(ctx, "UV: " + n(uv), sx - 4, sy - 9, { c: "#8b5cf6", s: 10, a: "left" }); txt(ctx, "IR: " + n(ir), sx + sw - 34, sy - 9, { c: "#b91c1c", s: 10, a: "left" });
      txt(ctx, t("Line spectrum (nm)", "الطيف الخطي (نانومتر)"), sx + sw / 2, H - 6, { c: C.ink, s: f - 2 });
    });
  };

  var NM = {
    sec2chem_mole: ["Mole balance simulation", "محاكاة ميزان المول"], sec2chem_gas: ["Molar volume syringe", "محقن الحجم المولاري"],
    sec2chem_limit: ["Limiting reactant mixer", "خلاط المادة المحددة للتفاعل"], sec2chem_formula: ["Formula finder", "مستكشف الصيغ"],
    sec2chem_molarity: ["Molarity and dilution lab", "معمل المولارية والتخفيف"], sec2chem_rutherford: ["Gold foil simulation", "محاكاة رقيقة الذهب"],
    sec2chem_bohr: ["Bohr atom and spectrum", "ذرة بور والطيف"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();

/* ---------- Secondary 2 Chemistry live simulations (part 2): quantum numbers, orbital filler, periodic table explorer,
   trends, electronegativity tug, oxides lab, redox lab. Original designs on EZ3.simKit. ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit, Q = E.s2ckit;
  var txt = K.txt, hint = Q.hint, box = Q.box, sl = Q.sl, clamp = Q.clamp, rd = Q.rd, fs = Q.fs;
  var SUPD = "⁰¹²³⁴⁵⁶⁷⁸⁹";
  function sup(k) { return String(k).split("").map(function (d) { return SUPD[d]; }).join(""); }
  function sg(v) { return v > 0 ? "+" + v : v < 0 ? "−" + Math.abs(v) : "0"; }

  /* =========================================================
     8. sec2chem_quantum - quantum number explorer
     ========================================================= */
  L.sec2chem_quantum = function (host, cfg, done) {
    host.innerHTML = hint(t("Set the four quantum numbers with the sliders. The orbital shape and the counts update live; an impossible address is flagged in red.",
      "اضبط أعداد الكم الأربعة بالمنزلقات، فيتحدث شكل الأوربيتال والأعداد لحظيًا، والعنوان المستحيل يظهر باللون الأحمر.")) + '<div class="seg" id="s2qS"></div>';
    var S = K.make(host, 0.58, 370);
    var c = box(host, L._slider(t("Principal n", "الرئيسي n"), 1, 4, 1, 1, "") + L._slider(t("Subsidiary l", "الثانوي l"), 0, 3, 1, 0, "") + L._slider(t("Magnetic m", "المغناطيسي m"), -3, 3, 1, 0, ""));
    var tick = L._goals(host, [t("Show a dumbbell-shaped p orbital.", "اعرض أوربيتال p على شكل الدمبل."), t("Show an orbital of the 3d sublevel.", "اعرض أوربيتالًا من المستوى الفرعي 3d."),
      t("Find the level that has 16 orbitals and holds 32 electrons.", "اكتشف المستوى الذي فيه 16 أوربيتالًا ويتسع لـ 32 إلكترونًا."), t("Try an impossible address (for example n = 1, l = 1) and read why.", "جرّب عنوانًا مستحيلًا (مثل n = 1، l = 1) واقرأ السبب.")], done);
    var N = 1, Lq = 0, M = 0, spin = 1, ph = 0;
    sl(c, 0, function (v) { return n(v); }, function (v) { N = v; chk(); });
    sl(c, 1, function (v) { return n(v); }, function (v) { Lq = v; chk(); });
    sl(c, 2, function (v) { return v > 0 ? "+" + n(v) : n(v); }, function (v) { M = v; chk(); });
    K.seg(host, "#s2qS", [["1", "mₛ = +½ ↑"], ["-1", "mₛ = −½ ↓"]], "1", function (v) { spin = Number(v); });
    function ok() { return Lq <= N - 1 && Math.abs(M) <= Lq; }
    function chk() {
      if (!ok()) { tick(3); return; }
      if (Lq === 1) tick(0);
      if (N === 3 && Lq === 2) tick(1);
      if (N === 4) tick(2);
    }
    function lobe(ctx, cx, cy, ang, d, rx, ry, col) { ctx.save(); ctx.translate(cx, cy); ctx.rotate(ang); ctx.beginPath(); ctx.ellipse(d, 0, rx, ry, 0, 0, 6.283); ctx.fillStyle = col; ctx.fill(); ctx.restore(); }
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, f = fs(S), cx = W * 0.25, cy = H * 0.5, R = Math.min(W * 0.2, H * 0.4), v = ok();
      ctx.clearRect(0, 0, W, H); ph += dt;
      ctx.strokeStyle = C.line; ctx.setLineDash([4, 4]); ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(cx - R * 1.1, cy); ctx.lineTo(cx + R * 1.1, cy); ctx.moveTo(cx, cy - R * 1.1); ctx.lineTo(cx, cy + R * 1.1); ctx.moveTo(cx - R * 0.7, cy + R * 0.7); ctx.lineTo(cx + R * 0.7, cy - R * 0.7); ctx.stroke(); ctx.setLineDash([]);
      txt(ctx, "x", cx + R * 1.15, cy - 8, { c: C.muted, s: 11 }); txt(ctx, "z", cx + 8, cy - R * 1.12, { c: C.muted, s: 11 }); txt(ctx, "y", cx + R * 0.78, cy - R * 0.78, { c: C.muted, s: 11 });
      if (v) {
        var col = ["rgba(59,130,246,.55)", "rgba(249,115,22,.6)", "rgba(34,197,94,.6)", "rgba(168,85,247,.6)"][Lq];
        if (Lq === 0) { var gr = ctx.createRadialGradient(cx, cy, 2, cx, cy, R * (0.5 + N * 0.12)); gr.addColorStop(0, "rgba(59,130,246,.8)"); gr.addColorStop(1, "rgba(59,130,246,.05)"); ctx.fillStyle = gr; ctx.beginPath(); ctx.arc(cx, cy, R * (0.5 + N * 0.12), 0, 6.283); ctx.fill(); }
        else if (Lq === 1) { var a = M === -1 ? 0 : M === 0 ? -Math.PI / 4 : -Math.PI / 2; lobe(ctx, cx, cy, a, R * 0.45, R * 0.45, R * 0.22, col); lobe(ctx, cx, cy, a + Math.PI, R * 0.45, R * 0.45, R * 0.22, col); }
        else if (Lq === 2) {
          if (M === 0) { lobe(ctx, cx, cy, -Math.PI / 2, R * 0.48, R * 0.45, R * 0.2, col); lobe(ctx, cx, cy, Math.PI / 2, R * 0.48, R * 0.45, R * 0.2, col); ctx.strokeStyle = col; ctx.lineWidth = 9; ctx.beginPath(); ctx.ellipse(cx, cy, R * 0.4, R * 0.12, 0, 0, 6.283); ctx.stroke(); }
          else for (var i = 0; i < 4; i++) lobe(ctx, cx, cy, i * Math.PI / 2 + M * Math.PI / 8 + Math.PI / 4, R * 0.45, R * 0.38, R * 0.17, col);
        } else for (var j = 0; j < 6; j++) lobe(ctx, cx, cy, j * Math.PI / 3 + M * Math.PI / 14, R * 0.48, R * 0.34, R * 0.12, col);
        K.dot(ctx, cx, cy, 4, "#dc2626");
        var ex = cx + Math.cos(ph * 2) * R * 0.15; txt(ctx, spin > 0 ? "↑" : "↓", ex, cy - R * 0.95, { c: "#2563eb", s: 22 });
      } else { txt(ctx, "✖", cx, cy, { c: "#dc2626", s: 54 }); }
      var x0 = W * 0.52, y = H * 0.09, lh = Math.max(20, H * 0.092), al = "left", letter = "spdf"[Lq];
      txt(ctx, "n = " + N + ",  l = " + Lq + ",  m = " + sg(M) + ",  mₛ = " + (spin > 0 ? "+½" : "−½"), x0, y, { c: C.ink, s: f, a: al }); y += lh;
      if (!v) {
        txt(ctx, t("Impossible!", "مستحيل!"), x0, y, { c: "#dc2626", s: f + 3, a: al }); y += lh;
        txt(ctx, Lq > N - 1 ? t("l can only be 0 … n − 1 = ", "l يأخذ فقط 0 … n − 1 = ") + (N - 1) : t("m can only be −l … +l", "m يأخذ فقط من −l إلى +l"), x0, y, { c: "#dc2626", s: f, a: al }); y += lh;
        if (Lq > N - 1) txt(ctx, t("Level " + N + " has only " + N + " sublevel(s).", "المستوى " + N + " فيه " + N + " مستوى فرعي فقط."), x0, y, { c: C.ink, s: f - 1, a: al });
        return;
      }
      txt(ctx, t("Sublevel: ", "المستوى الفرعي: ") + N + letter, x0, y, { c: "#2563eb", s: f + 4, a: al }); y += lh;
      txt(ctx, t("Orbitals in ", "أوربيتالات ") + N + letter + ": 2l + 1 = " + (2 * Lq + 1), x0, y, { c: C.ink, s: f, a: al }); y += lh;
      txt(ctx, t("Electrons in ", "إلكترونات ") + N + letter + ": " + 2 * (2 * Lq + 1), x0, y, { c: C.ink, s: f, a: al }); y += lh;
      txt(ctx, t("Sublevels in level ", "المستويات الفرعية في المستوى ") + N + ": " + "spdf".slice(0, N).split("").map(function (s) { return N + s; }).join(", "), x0, y, { c: C.ink, s: f, a: al }); y += lh;
      txt(ctx, t("Orbitals in level: n² = ", "أوربيتالات المستوى: n² = ") + N * N, x0, y, { c: "#16a34a", s: f, a: al }); y += lh;
      txt(ctx, t("Max electrons: 2n² = ", "أقصى عدد إلكترونات: 2n² = ") + 2 * N * N, x0, y, { c: "#16a34a", s: f, a: al }); y += lh;
      txt(ctx, Lq === 0 ? t("Shape: sphere", "الشكل: كرة") : Lq === 1 ? t("Shape: dumbbell (one of pₓ, p_y, p_z)", "الشكل: دمبل (أحد pₓ وp_y وp_z)") : Lq === 2 ? t("d: one of 5 orbitals", "d: أحد 5 أوربيتالات") : t("f: one of 7 orbitals", "f: أحد 7 أوربيتالات"), x0, y, { c: C.muted, s: f - 1, a: al });
    });
  };

  /* =========================================================
     9. sec2chem_aufbau - orbital box filler
     ========================================================= */
  L.sec2chem_aufbau = function (host, cfg, done) {
    var SUBS = [["1s", 1], ["2s", 1], ["2p", 3], ["3s", 1], ["3p", 3], ["4s", 1], ["3d", 5], ["4p", 3]];
    var TG = [["N", 7], ["O", 8], ["Ca", 20], ["Fe", 26]];
    host.innerHTML = hint(t("Pick a target atom. Tap an orbital box to add an electron (↑, then ↑↓; a third tap empties it). Follow Aufbau, Hund and Pauli: the checker reads your diagram live.",
      "اختر الذرة المطلوبة، واضغط على مربع الأوربيتال لإضافة إلكترون (↑ ثم ↑↓، والضغطة الثالثة تفرغه). اتبع البناء التصاعدي وهوند وباولي، والمدقق يقرأ رسمك لحظيًا.")) + '<div class="seg" id="s2aT"></div>';
    var S = K.make(host, 0.5, 340);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s2aN">[Ne] ' + t("core", "القلب") + '</button><button type="button" class="btn sm ghost" id="s2aC">↺ ' + t("Empty all", "أفرغ الكل") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build nitrogen ₇N correctly (Hund's rule).", "ابنِ النيتروجين ₇N صحيحًا (قاعدة هوند)."), t("Build oxygen ₈O correctly.", "ابنِ الأكسجين ₈O صحيحًا."),
      t("Build calcium ₂₀Ca (4s before 3d).", "ابنِ الكالسيوم ₂₀Ca (4s قبل 3d)."), t("Build iron ₂₆Fe.", "ابنِ الحديد ₂₆Fe.")], done);
    var ti = 0, occ = SUBS.map(function (s) { var a = []; for (var i = 0; i < s[1]; i++) a.push(0); return a; }), hits = [];
    K.seg(host, "#s2aT", TG.map(function (g, i) { return [String(i), g[0] + " (Z = " + g[1] + ")"]; }), "0", function (v) { ti = Number(v); evalS(); });
    c.querySelector("#s2aN").onclick = function () { for (var i = 0; i < 3; i++) occ[i] = occ[i].map(function () { return 2; }); evalS(); };
    c.querySelector("#s2aC").onclick = function () { occ = occ.map(function (a) { return a.map(function () { return 0; }); }); evalS(); };
    function cnt(i) { return occ[i].reduce(function (s, v) { return s + v; }, 0); }
    function evalS() {
      var tot = 0, cfgS = [], au = "", hu = "";
      occ.forEach(function (a, i) {
        var e = cnt(i); tot += e; if (e) cfgS.push(SUBS[i][0] + sup(e));
        if (e && !au) for (var j = 0; j < i; j++) if (cnt(j) < SUBS[j][1] * 2) { au = t("Aufbau: fill ", "البناء التصاعدي: املأ ") + SUBS[j][0] + t(" before ", " قبل ") + SUBS[i][0]; break; }
        if (!hu && a.indexOf(2) >= 0 && a.indexOf(0) >= 0) hu = t("Hund: an electron paired in ", "هوند: إلكترون ازدوج في ") + SUBS[i][0] + t(" while an orbital is still empty", " بينما يوجد أوربيتال فارغ");
      });
      var Z = TG[ti][1], msgs = [];
      msgs.push(t("Electrons: ", "الإلكترونات: ") + n(tot) + " / " + n(Z));
      if (au) msgs.push("⚠️ " + au); if (hu) msgs.push("⚠️ " + hu);
      var good = !au && !hu && tot === Z;
      if (good) { msgs.push("✅ " + t("Correct ground-state configuration!", "توزيع صحيح في الحالة المستقرة!")); tick(ti); }
      out.innerHTML = "<span>" + esc((cfgS.join(" ") || "—") + "   ·   " + msgs.join("   ·   ")) + "</span>";
      return { tot: tot };
    }
    function lay() {
      var W = S.W, H = S.H, gaps = SUBS.length - 1, bs = Math.min(34, (W * 0.95) / (18 + gaps * 0.6)), x = (W - (18 * bs + gaps * bs * 0.6)) / 2, rects = [];
      var ranks = [0, 1, 2, 3, 4, 5, 6, 7];
      SUBS.forEach(function (s, i) { var y = H * 0.78 - ranks[i] * (H * 0.62 / 7) - bs; for (var j = 0; j < s[1]; j++) { rects.push([i, j, x, y, bs]); x += bs; } x += bs * 0.6; });
      return rects;
    }
    S.drag({
      down: function (p) {
        var hit = lay().filter(function (r) { return p.x >= r[2] && p.x <= r[2] + r[4] && p.y >= r[3] && p.y <= r[3] + r[4]; })[0];
        if (!hit) return false; occ[hit[0]][hit[1]] = (occ[hit[0]][hit[1]] + 1) % 3; evalS(); return true;
      },
      hover: function (p) { return lay().some(function (r) { return p.x >= r[2] && p.x <= r[2] + r[4] && p.y >= r[3] && p.y <= r[3] + r[4]; }); }
    });
    evalS();
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, R = lay();
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(10, H * 0.9); ctx.lineTo(10, 8); ctx.stroke(); txt(ctx, t("Energy", "الطاقة"), 14, 10, { c: C.muted, s: 10, a: "left" });
      R.forEach(function (r) {
        var v = occ[r[0]][r[1]], bs = r[4];
        ctx.fillStyle = C.card; ctx.fillRect(r[2], r[3], bs, bs); ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.strokeRect(r[2], r[3], bs, bs);
        if (v >= 1) txt(ctx, "↑", r[2] + bs * 0.33, r[3] + bs / 2, { c: "#2563eb", s: bs * 0.7 });
        if (v === 2) txt(ctx, "↓", r[2] + bs * 0.67, r[3] + bs / 2, { c: "#dc2626", s: bs * 0.7 });
        if (r[1] === 0) txt(ctx, SUBS[r[0]][0], r[2] + bs * SUBS[r[0]][1] / 2, r[3] + bs + 11, { c: C.ink, s: Math.max(10, bs * 0.4) });
      });
    });
  };

  /* ---------- periodic data ---------- */
  var SYM = ("H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe " +
    "Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og").split(" ");
  var ORD = [["1s", 2], ["2s", 2], ["2p", 6], ["3s", 2], ["3p", 6], ["4s", 2], ["3d", 10], ["4p", 6], ["5s", 2], ["4d", 10], ["5p", 6], ["6s", 2], ["4f", 14], ["5d", 10], ["6p", 6], ["7s", 2], ["5f", 14], ["6d", 10], ["7p", 6]];
  var NOB = [[86, "Rn"], [54, "Xe"], [36, "Kr"], [18, "Ar"], [10, "Ne"], [2, "He"]];
  function conf(Z) {
    var ov = { 24: "[Ar] 4s¹ 3d⁵", 29: "[Ar] 4s¹ 3d¹⁰", 64: "[Xe] 6s² 4f⁷ 5d¹" };
    var left = Z, parts = [], last = "";
    ORD.forEach(function (o) { if (left <= 0) return; var e = Math.min(o[1], left); left -= e; parts.push([o[0], e]); last = o[0]; });
    var core = NOB.filter(function (c) { return c[0] < Z; })[0], skip = core ? core[0] : 0, s = core ? "[" + core[1] + "]" : "", acc = 0;
    parts.forEach(function (p) { acc += p[1]; if (acc > skip) s += " " + p[0] + sup(p[1]); });
    return { s: ov[Z] || s.trim(), last: last };
  }
  function place(Z) {
    var P = [0, 2, 10, 18, 36, 54, 86, 118], p = 1; while (Z > P[p]) p++;
    var i = Z - P[p - 1];
    if (p === 1) return { r: 0, c: Z === 1 ? 0 : 17, p: 1 };
    if (p <= 3) return { r: p - 1, c: i <= 2 ? i - 1 : i + 9, p: p };
    if (p <= 5) return { r: p - 1, c: i - 1, p: p };
    if (i <= 2) return { r: p - 1, c: i - 1, p: p };
    if (i <= 16) return { r: p + 1, c: i, p: p, f: true };
    return { r: p - 1, c: i - 15, p: p };
  }
  var GRP = ["1A", "2A", "3B", "4B", "5B", "6B", "7B", "8", "8", "8", "1B", "2B", "3A", "4A", "5A", "6A", "7A", "0"];
  function info(Z) {
    var pl = place(Z), cf = conf(Z), blk = pl.f ? "f" : cf.last.slice(-1), type;
    if (pl.c === 17 && !pl.f) type = t("noble element", "عنصر نبيل");
    else if (blk === "s" || blk === "p") type = t("representative element", "عنصر ممثل");
    else if (blk === "d") type = t("main transition element", "عنصر انتقالي رئيسي");
    else type = Z < 89 ? t("inner transition (lanthanide)", "انتقالي داخلي (لانثانيد)") : t("inner transition (actinide)", "انتقالي داخلي (أكتينيد)");
    return { pl: pl, cf: cf.s, blk: blk, type: type, grp: pl.f ? "—" : GRP[pl.c] };
  }

  /* =========================================================
     10. sec2chem_blocks - periodic table explorer
     ========================================================= */
  L.sec2chem_blocks = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap any element to read its configuration, period, group, block and type. Colours show the four blocks.",
      "اضغط على أي عنصر لتقرأ توزيعه ودورته ومجموعته وفئته ونوعه، والألوان توضح الفئات الأربع."));
    var S = K.make(host, 0.56, 400);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Tap an s-block element of the 6th period.", "اضغط على عنصر من الفئة s في الدورة السادسة."), t("Tap a noble gas.", "اضغط على غاز نبيل."),
      t("Find the element whose configuration ends in 4s² 3d³.", "اكتشف العنصر الذي ينتهي توزيعه بـ 4s² 3d³."), t("Tap a lanthanide (f-block, 6th period).", "اضغط على أحد اللانثانيدات (الفئة f، الدورة السادسة)."),
      t("Tap the halogen of the 4th period.", "اضغط على الهالوجين في الدورة الرابعة.")], done);
    var sel = 0, COL = { s: "#fca5a5", p: "#fde68a", d: "#93c5fd", f: "#86efac" };
    function cs() { return Math.min((S.W - 12) / 18, (S.H - 8) / 9.5); }
    function xy(Z) { var p = place(Z), k = cs(), ox = (S.W - 18 * k) / 2; return { x: ox + p.c * k, y: 4 + (p.f ? p.r + 0.4 : p.r) * k, k: k }; }
    function pick(p) { for (var Z = 1; Z <= 118; Z++) { var q = xy(Z); if (p.x >= q.x && p.x < q.x + q.k && p.y >= q.y && p.y < q.y + q.k) return Z; } return 0; }
    function choose(Z) {
      sel = Z; var I = info(Z);
      out.innerHTML = "<span><b>" + esc(SYM[Z - 1] + " (Z = " + n(Z) + ")") + "</b> · " + '<span dir="ltr">' + esc(I.cf) + "</span> · " + esc(t("period ", "الدورة ") + n(I.pl.p) + " · " + t("group ", "المجموعة ") + I.grp + " · " + t("block ", "الفئة ") + I.blk + " · " + I.type) + "</span>";
      if (I.pl.p === 6 && I.blk === "s") tick(0);
      if (I.pl.c === 17 && !I.pl.f) tick(1);
      if (Z === 23) tick(2);
      if (I.pl.f && Z < 89) tick(3);
      if (Z === 35) tick(4);
    }
    S.drag({ down: function (p) { var Z = pick(p); if (!Z) return false; choose(Z); return true; }, hover: function (p) { return !!pick(p); } });
    out.innerHTML = "<span>" + esc(t("Tap an element.", "اضغط على عنصر.")) + "</span>";
    S.loop(function () {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C;
      ctx.clearRect(0, 0, W, H);
      for (var Z = 1; Z <= 118; Z++) {
        var q = xy(Z), I = place(Z), blk = I.f ? "f" : conf(Z).last.slice(-1), k = q.k;
        ctx.fillStyle = Z === sel ? "#0f172a" : COL[blk]; ctx.fillRect(q.x + 0.5, q.y + 0.5, k - 1, k - 1);
        if (k > 14) txt(ctx, SYM[Z - 1], q.x + k / 2, q.y + k * 0.58, { c: Z === sel ? "#fff" : "#0f172a", s: Math.min(13, k * 0.42) });
        if (k > 26) txt(ctx, String(Z), q.x + k / 2, q.y + k * 0.2, { c: Z === sel ? "#fff" : "#334155", s: 8, w: 600 });
      }
      var k2 = cs(), ox = (W - 18 * k2) / 2;
      txt(ctx, "s", ox + k2, 4 + 7.2 * k2 + 6, { c: "#ef4444", s: 12 }); txt(ctx, "d", ox + 7.5 * k2, 4 + 7.2 * k2 + 6, { c: "#2563eb", s: 12 });
      txt(ctx, "p", ox + 15 * k2, 4 + 7.2 * k2 + 6, { c: "#ca8a04", s: 12 }); txt(ctx, "f →", ox + 1.3 * k2, 4 + 8.9 * k2, { c: "#16a34a", s: 12 });
    });
  };

  /* ---------- representative elements grid (1A..7A, 0) ---------- */
  var RS = [["H", "", "", "", "", "", "", "He"], ["Li", "Be", "B", "C", "N", "O", "F", "Ne"], ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"], ["K", "Ca", "Ga", "Ge", "As", "Se", "Br", "Kr"], ["Rb", "Sr", "In", "Sn", "Sb", "Te", "I", "Xe"], ["Cs", "Ba", "Tl", "Pb", "Bi", "Po", "At", "Rn"]];
  var RAD = [[37, 0, 0, 0, 0, 0, 0, 0], [152, 112, 85, 77, 75, 73, 72, 0], [186, 160, 143, 118, 110, 103, 99, 0], [227, 197, 135, 122, 120, 119, 114, 0], [248, 215, 167, 140, 138, 135, 133, 0], [265, 217, 170, 175, 155, 150, 140, 0]];
  var IE = [[1312, 0, 0, 0, 0, 0, 0, 2372], [520, 899, 801, 1086, 1402, 1314, 1681, 2081], [496, 737, 578, 787, 1012, 1000, 1251, 1521], [419, 590, 579, 762, 947, 941, 1140, 1351], [403, 550, 558, 709, 834, 869, 1008, 1170], [376, 503, 589, 716, 703, 812, 920, 1037]];
  var EN = [[2.1, 0, 0, 0, 0, 0, 0, 0], [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 0], [0.9, 1.2, 1.5, 1.8, 2.1, 2.5, 3.0, 0], [0.8, 1.0, 1.6, 1.8, 2.0, 2.4, 2.8, 0], [0.8, 1.0, 1.7, 1.8, 1.9, 2.1, 2.5, 0], [0.7, 0.9, 1.8, 1.8, 1.9, 2.0, 2.2, 0]];
  var MTL = { B: 1, Si: 1, Ge: 1, As: 1, Sb: 1, Te: 1, At: 1 };
  function grid(S, top) { var W = S.W, H = S.H, k = Math.min((W * 0.56) / 8, (H - top - 6) / 6), ox = 6; return { k: k, ox: ox, oy: top }; }
  function cellAt(g, p) { var c = Math.floor((p.x - g.ox) / g.k), r = Math.floor((p.y - g.oy) / g.k); if (r < 0 || r > 5 || c < 0 || c > 7 || !RS[r][c]) return null; return [r, c]; }
  var KC = { m: "#bfdbfe", d: "#fde68a", n: "#fecaca", g: "#e9d5ff" };

  /* =========================================================
     11. sec2chem_trends - radius / ionization energy explorer
     ========================================================= */
  L.sec2chem_trends = function (host, cfg, done) {
    host.innerHTML = hint(t("Explore: tap or drag over the elements to read atomic radius and ionization energy. Ions: turn atoms into ions. Magnesium: pull its electrons off one by one.",
      "استكشف: اضغط أو اسحب فوق العناصر لتقرأ نصف القطر وجهد التأين. الأيونات: حوّل الذرات إلى أيونات. الماغنسيوم: انتزع إلكتروناته واحدًا تلو الآخر.")) + '<div class="seg" id="s2tM"></div><div class="seg" id="s2tP"></div>';
    var S = K.make(host, 0.58, 380);
    var c = box(host, '<div class="btn-row" id="s2tI" style="display:none"><button type="button" class="btn sm" data-i="0">Na → Na⁺</button><button type="button" class="btn sm" data-i="1">Cl → Cl⁻</button><button type="button" class="btn sm" data-i="2">Fe → Fe²⁺ → Fe³⁺</button></div>' +
      '<div class="btn-row" id="s2tG" style="display:none"><button type="button" class="btn sm primary" id="s2tR">➖ ' + t("Remove an electron", "انزع إلكترونًا") + '</button><button type="button" class="btn sm ghost" id="s2tZ">↺ ' + t("Start again", "ابدأ من جديد") + "</button></div>");
    var tick = L._goals(host, [t("Find the largest atom in period 3.", "اكتشف أكبر ذرة في الدورة الثالثة."), t("Find the element with the highest first ionization energy.", "اكتشف العنصر صاحب أعلى جهد تأين أول."),
      t("Turn a sodium atom into a sodium ion and compare the sizes.", "حوّل ذرة صوديوم إلى أيون صوديوم وقارن الحجمين."), t("Pull the third electron off magnesium and see the jump.", "انتزع الإلكترون الثالث من الماغنسيوم ولاحظ القفزة.")], done);
    var mode = "x", prop = "r", sel = [2, 0], st = [0, 0, 0], shown = [0, 0, 0], mg = 0, drag = false;
    var IONS = [["Na", 186, ["Na⁺", 102], 11, [11, 10]], ["Cl", 99, ["Cl⁻", 181], 17, [17, 18]], ["Fe", 126, ["Fe²⁺", 78, "Fe³⁺", 64.5], 26, [26, 24, 23]]];
    var MGI = [737, 1450, 7730];
    K.seg(host, "#s2tM", [["x", "🔎 " + t("Explore", "استكشف")], ["i", "± " + t("Ions", "الأيونات")], ["g", "Mg"]], "x", function (v) { mode = v; c.querySelector("#s2tI").style.display = v === "i" ? "" : "none"; c.querySelector("#s2tG").style.display = v === "g" ? "" : "none"; });
    K.seg(host, "#s2tP", [["r", t("Atomic radius", "نصف القطر الذري")], ["e", t("Ionization energy", "جهد التأين")]], "r", function (v) { prop = v; });
    c.querySelectorAll("#s2tI button").forEach(function (b) { b.onclick = function () { var i = Number(b.dataset.i); st[i] = (st[i] + 1) % (i === 2 ? 3 : 2); if (i === 0 && st[0] === 1) tick(2); }; });
    c.querySelector("#s2tR").onclick = function () { if (mg >= 3) { E.toast(t("That is enough: the 4th needs even more energy.", "يكفي: الرابع يحتاج طاقة أكبر.")); return; } mg++; if (mg === 3) { tick(3); E.speak(t("Seven thousand seven hundred thirty kilojoules: a full level is broken.", "سبعة آلاف وسبعمائة وثلاثون كيلوجول: انكسر مستوى مكتمل.")); } };
    c.querySelector("#s2tZ").onclick = function () { mg = 0; };
    function pickC(p) { var g = grid(S, 6), q = cellAt(g, p); if (q) { sel = q; var s = RS[q[0]][q[1]]; if (s === "Na") tick(0); if (s === "He") tick(1); } return q; }
    S.drag({ down: function (p) { if (mode !== "x") return false; drag = true; return !!pickC(p) || true; }, move: function (p) { if (drag) pickC(p); }, up: function () { drag = false; }, hover: function (p) { return mode === "x" && !!cellAt(grid(S, 6), p); } });
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, f = fs(S);
      ctx.clearRect(0, 0, W, H);
      if (mode === "x") {
        var g = grid(S, 6), k = g.k;
        for (var r = 0; r < 6; r++) for (var cc = 0; cc < 8; cc++) {
          if (!RS[r][cc]) continue; var x = g.ox + cc * k, y = g.oy + r * k, on = sel[0] === r && sel[1] === cc;
          ctx.fillStyle = on ? "rgba(37,99,235,.18)" : C.card; ctx.fillRect(x + 1, y + 1, k - 2, k - 2); ctx.strokeStyle = on ? "#2563eb" : C.line; ctx.lineWidth = on ? 2 : 1; ctx.strokeRect(x + 1, y + 1, k - 2, k - 2);
          if (prop === "r") { if (RAD[r][cc]) K.dot(ctx, x + k / 2, y + k / 2, RAD[r][cc] / 265 * k * 0.45, "rgba(59,130,246,.55)"); }
          else { var hh = IE[r][cc] / 2372 * (k - 6); ctx.fillStyle = "rgba(239,68,68,.6)"; ctx.fillRect(x + k * 0.3, y + k - 3 - hh, k * 0.4, hh); }
          txt(ctx, RS[r][cc], x + k / 2, y + k / 2, { c: C.ink, s: Math.min(13, k * 0.32) });
        }
        ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "0"].forEach(function (s, i) { if (g.oy + 6 * k + 10 < H) txt(ctx, s, g.ox + i * k + k / 2, g.oy + 6 * k + 8, { c: C.muted, s: 10 }); });
        var s = RS[sel[0]][sel[1]], x0 = g.ox + 8 * k + 14, yy = H * 0.12, lh = Math.max(20, H * 0.1), al = "left";
        txt(ctx, s, x0, yy, { c: C.ink, s: f + 10, a: al }); yy += lh * 1.2;
        txt(ctx, t("Period ", "الدورة ") + (sel[0] + 1) + " · " + t("group ", "المجموعة ") + ["1A", "2A", "3A", "4A", "5A", "6A", "7A", "0"][sel[1]], x0, yy, { c: C.muted, s: f, a: al }); yy += lh;
        txt(ctx, t("Radius: ", "نصف القطر: ") + (RAD[sel[0]][sel[1]] ? n(RAD[sel[0]][sel[1]]) + " pm" : "—"), x0, yy, { c: "#2563eb", s: f + 1, a: al }); yy += lh;
        txt(ctx, t("1st IE: ", "جهد التأين الأول: ") + n(IE[sel[0]][sel[1]]) + " kJ/mol", x0, yy, { c: "#dc2626", s: f + 1, a: al }); yy += lh * 1.2;
        txt(ctx, t("→ period: radius ↓, IE ↑", "← الدورة: نصف القطر ↓ وجهد التأين ↑"), x0, yy, { c: C.muted, s: f - 1, a: al }); yy += lh * 0.8;
        txt(ctx, t("↓ group: radius ↑, IE ↓", "↓ المجموعة: نصف القطر ↑ وجهد التأين ↓"), x0, yy, { c: C.muted, s: f - 1, a: al });
      } else if (mode === "i") {
        var sc = Math.min(W / 3, H) * 0.0021;
        IONS.forEach(function (io, i) {
          var cx = W * (0.18 + i * 0.32), cy = H * 0.45, tgt = st[i] === 0 ? io[1] : io[2][(st[i] - 1) * 2 + 1];
          shown[i] = shown[i] ? shown[i] + (tgt - shown[i]) * Math.min(1, dt * 5) : tgt;
          K.dot(ctx, cx, cy, shown[i] * sc * 100 / 2.2 * 0.9, i === 1 ? "rgba(34,197,94,.45)" : "rgba(59,130,246,.45)", "rgba(0,0,0,.3)");
          var nm = st[i] === 0 ? io[0] : io[2][(st[i] - 1) * 2];
          txt(ctx, nm, cx, cy, { c: C.ink, s: f + 4 }); txt(ctx, n(tgt) + " pm", cx, H * 0.85, { c: C.ink, s: f });
          txt(ctx, io[3] + " p⁺ · " + io[4][st[i]] + " e⁻", cx, H * 0.93, { c: C.muted, s: f - 2 });
        });
      } else {
        var cx2 = W * 0.27, cy2 = H * 0.5, R = Math.min(W * 0.22, H * 0.42), shells = [2, 8, 2], rem = mg;
        K.dot(ctx, cx2, cy2, R * 0.16, "#dc2626"); txt(ctx, "12+", cx2, cy2, { c: "#fff", s: 12 });
        shells.forEach(function (ne, si) {
          var rr = R * (0.35 + si * 0.3); ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx2, cy2, rr, 0, 6.283); ctx.stroke();
          var take = si === 2 ? Math.min(2, rem) : si === 1 ? Math.max(0, rem - 2) : 0;
          for (var e = 0; e < ne - take; e++) { var a = e / ne * 6.283 + si; K.dot(ctx, cx2 + Math.cos(a) * rr, cy2 + Math.sin(a) * rr, 5, "#2563eb"); }
        });
        txt(ctx, ["Mg", "Mg⁺", "Mg²⁺", "Mg³⁺"][mg], cx2, cy2 + R + 14 > H - 6 ? H - 8 : cy2 + R + 14, { c: C.ink, s: f + 2 });
        var bx = W * 0.55, bw = W * 0.12, base = H * 0.85, top = H * 0.12;
        MGI.forEach(function (v, i) {
          var x = bx + i * (bw + 10), hh = (base - top) * Math.log(v) / Math.log(8000) * (i < mg ? 1 : 0);
          ctx.fillStyle = i === 2 ? "#dc2626" : "#f59e0b"; ctx.fillRect(x, base - hh, bw, hh);
          txt(ctx, ["1st", "2nd", "3rd"][i], x + bw / 2, base + 12, { c: C.muted, s: 11 });
          if (i < mg) txt(ctx, n(v), x + bw / 2, base - hh - 10, { c: C.ink, s: f });
        });
        txt(ctx, "kJ/mol (" + t("log scale", "مقياس لوغاريتمي") + ")", bx + bw * 1.6, top - 4 > 8 ? top - 4 : 8, { c: C.muted, s: 10 });
      }
    });
  };

  /* =========================================================
     12. sec2chem_negativity - electronegativity tug of war
     ========================================================= */
  L.sec2chem_negativity = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap two elements to bond them. The shared electron pair slides toward the more electronegative atom. Colours: blue metals, yellow metalloids, red nonmetals.",
      "اضغط على عنصرين لربطهما، فينزلق زوج الإلكترونات المشترك نحو الذرة الأعلى سالبية. الألوان: الأزرق فلزات، والأصفر أشباه فلزات، والأحمر لافلزات."));
    var S = K.make(host, 0.58, 380);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make a bond where the electrons are shared equally.", "كوّن رابطة تتشارك فيها الإلكترونات بالتساوي."), t("Bond fluorine with another atom: who wins the pull?", "اربط الفلور بذرة أخرى: من يفوز بالشد؟"),
      t("Make a bond with an electronegativity difference of 2 or more.", "كوّن رابطة فرق السالبية فيها ٢ أو أكثر."), t("Tap a metalloid.", "اضغط على شبه فلز.")], done);
    var A = [2, 0], B = [2, 6], turn = 0, sh = 0;
    function kd(r, c) { var s = RS[r][c]; if (c === 7) return "g"; if (MTL[s]) return "d"; if (s === "H") return "n"; if (c <= 1) return "m"; if (c === 2) return "m"; if (c === 3) return r <= 1 ? "n" : "m"; if (c === 4) return r <= 2 ? "n" : "m"; if (c === 5) return r <= 3 ? "n" : "m"; return "n"; }
    function upd() {
      var ea = EN[A[0]][A[1]], eb = EN[B[0]][B[1]], d = rd(Math.abs(ea - eb), 1), sa = RS[A[0]][A[1]], sb = RS[B[0]][B[1]];
      var w = d === 0 ? t("shared equally (non-polar)", "مشاركة متساوية (غير قطبية)") : d >= 1.7 ? t("very unequal: ionic tendency", "غير متساوية جدًا: ميل للرابطة الأيونية") : t("unequal (polar): pulled toward ", "غير متساوية (قطبية): تنجذب نحو ") + (ea > eb ? sa : sb);
      out.innerHTML = "<span>" + esc(sa + " (" + n(ea) + ") – " + sb + " (" + n(eb) + ") · ΔEN = " + n(d) + " · " + w) + "</span>";
      if (A[0] === B[0] && A[1] === B[1]) tick(0);
      if (sa === "F" || sb === "F") tick(1);
      if (d >= 2) tick(2);
    }
    S.drag({
      down: function (p) {
        var q = cellAt(grid(S, 6), p); if (!q) return false;
        if (kd(q[0], q[1]) === "d") tick(3);
        if (q[1] === 7) { E.toast(t("Noble gases hardly form bonds: no electronegativity value.", "الغازات النبيلة لا تكاد تكوّن روابط: لا قيمة للسالبية.")); return true; }
        if (turn === 0) A = q; else B = q; turn = 1 - turn; upd(); return true;
      },
      hover: function (p) { return !!cellAt(grid(S, 6), p); }
    });
    upd();
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, g = grid(S, 6), k = g.k, f = fs(S);
      ctx.clearRect(0, 0, W, H);
      for (var r = 0; r < 6; r++) for (var cc = 0; cc < 8; cc++) {
        if (!RS[r][cc]) continue; var x = g.ox + cc * k, y = g.oy + r * k, isA = A[0] === r && A[1] === cc, isB = B[0] === r && B[1] === cc;
        ctx.fillStyle = KC[kd(r, cc)]; ctx.fillRect(x + 1, y + 1, k - 2, k - 2);
        if (isA || isB) { ctx.strokeStyle = isA ? "#2563eb" : "#dc2626"; ctx.lineWidth = 3; ctx.strokeRect(x + 2, y + 2, k - 4, k - 4); }
        txt(ctx, RS[r][cc], x + k / 2, y + k * 0.42, { c: "#0f172a", s: Math.min(13, k * 0.32) });
        if (EN[r][cc] && k > 26) txt(ctx, String(EN[r][cc]), x + k / 2, y + k * 0.75, { c: "#334155", s: 9, w: 600 });
      }
      // tug
      var ea = EN[A[0]][A[1]], eb = EN[B[0]][B[1]], x1 = g.ox + 8 * k + W * 0.06, x2 = W - W * 0.07, cy = H * 0.42, rA = Math.min(34, (x2 - x1) / 5);
      var target = clamp((eb - ea) / 3.3, -1, 1); sh += (target - sh) * Math.min(1, dt * 4);
      ctx.strokeStyle = C.muted; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x1, cy); ctx.lineTo(x2, cy); ctx.stroke();
      K.dot(ctx, x1, cy, rA, "rgba(37,99,235,.35)", "#2563eb"); K.dot(ctx, x2, cy, rA, "rgba(220,38,38,.35)", "#dc2626");
      txt(ctx, RS[A[0]][A[1]], x1, cy, { c: C.ink, s: f + 3 }); txt(ctx, RS[B[0]][B[1]], x2, cy, { c: C.ink, s: f + 3 });
      var mx = (x1 + x2) / 2 + sh * ((x2 - x1) / 2 - rA * 0.6);
      K.dot(ctx, mx - 5, cy - 16, 5, "#facc15", "#a16207"); K.dot(ctx, mx + 5, cy - 16, 5, "#facc15", "#a16207");
      txt(ctx, "δ" + (ea > eb ? "−" : ea < eb ? "+" : ""), x1, cy - rA - 10, { c: "#2563eb", s: f }); txt(ctx, "δ" + (eb > ea ? "−" : eb < ea ? "+" : ""), x2, cy - rA - 10, { c: "#dc2626", s: f });
      txt(ctx, "ΔEN = " + n(rd(Math.abs(ea - eb), 1)), (x1 + x2) / 2, cy + rA + 18, { c: C.ink, s: f + 1 });
      txt(ctx, t("tap 2 elements", "اضغط عنصرين"), (x1 + x2) / 2, H * 0.85, { c: C.muted, s: f - 2 });
    });
  };

  /* =========================================================
     13. sec2chem_oxides - oxide + water + acid/alkali lab
     ========================================================= */
  L.sec2chem_oxides = function (host, cfg, done) {
    var OX = [
      { f: "Na₂O", ph: 13, sol: true, w: "Na₂O + H₂O → 2NaOH", A: "Na₂O + 2HCl → 2NaCl + H₂O", B: null, col: "#f8fafc" },
      { f: "MgO", ph: 9, sol: false, w: t("hardly dissolves (slightly basic)", "يكاد لا يذوب (قاعدي ضعيف)"), A: "MgO + 2HCl → MgCl₂ + H₂O", B: null, col: "#f1f5f9" },
      { f: "CO₂", ph: 5, sol: true, gas: true, w: "CO₂ + H₂O → H₂CO₃", A: null, B: "CO₂ + 2NaOH → Na₂CO₃ + H₂O", col: "#cbd5e1" },
      { f: "SO₃", ph: 1, sol: true, w: "SO₃ + H₂O → H₂SO₄", A: null, B: "SO₃ + 2NaOH → Na₂SO₄ + H₂O", col: "#fef9c3" },
      { f: "Al₂O₃", ph: 7, sol: false, w: t("does not dissolve in water", "لا يذوب في الماء"), A: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O", B: "Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O", col: "#e5e7eb" },
      { f: "ZnO", ph: 7, sol: false, w: t("does not dissolve in water", "لا يذوب في الماء"), A: "ZnO + 2HCl → ZnCl₂ + H₂O", B: "ZnO + 2NaOH → Na₂ZnO₂ + H₂O", col: "#fafaf9" },
      { f: "CO", ph: 7, sol: false, gas: true, w: t("does not dissolve easily", "لا يذوب بسهولة"), A: null, B: null, col: "#d1d5db" }
    ];
    host.innerHTML = hint(t("Drag an oxide jar into the beaker of water with universal indicator. Then test it: add HCl (acid) and NaOH (alkali) and see whether the oxide reacts.",
      "اسحب برطمان أكسيد إلى كأس الماء الذي به الكاشف العام، ثم اختبره: أضف HCl (حمض) وNaOH (قلوي) وانظر هل يتفاعل الأكسيد."));
    var S = K.make(host, 0.6, 390);
    var c = box(host, '<div class="btn-row"><button type="button" class="btn sm" id="s2oA">🧪 ' + t("Add HCl (acid)", "أضف HCl (حمض)") + '</button><button type="button" class="btn sm" id="s2oB">🧴 ' + t("Add NaOH (alkali)", "أضف NaOH (قلوي)") + "</button></div>");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make an alkaline solution (pH 12 or more) from an oxide and water.", "كوّن محلولًا قلويًا (pH = ١٢ أو أكثر) من أكسيد وماء."), t("Make an acidic solution (pH 3 or less) from an oxide and water.", "كوّن محلولًا حامضيًا (pH = ٣ أو أقل) من أكسيد وماء."),
      t("Prove that an oxide is amphoteric.", "أثبت أن أكسيدًا مترددًا."), t("Prove that carbon monoxide is a neutral oxide.", "أثبت أن أول أكسيد الكربون أكسيد متعادل.")], done);
    var cur = -1, ph = 7, solid = false, tA = 0, tB = 0, rA = false, rB = false, drag = null, bub = [];
    function jars() { var W = S.W, H = S.H, w = Math.min(W * 0.12, 64), gap = (W - 7 * w) / 8; return OX.map(function (o, i) { return { x: gap + i * (w + gap), y: H * 0.8, w: w, h: H * 0.16 }; }); }
    function beaker() { var W = S.W, H = S.H; return { x: W * 0.3, y: H * 0.1, w: W * 0.26, h: H * 0.56 }; }
    function verdict() {
      if (!(tA && tB)) return "";
      var o = OX[cur]; var v = o.A && o.B ? t("amphoteric oxide", "أكسيد متردد") : o.A ? t("basic oxide", "أكسيد قاعدي") : o.B ? t("acidic oxide", "أكسيد حامضي") : t("neutral oxide", "أكسيد متعادل");
      if (o.A && o.B) tick(2); if (!o.A && !o.B && o.f === "CO") tick(3);
      return "  ⇒  " + o.f + ": " + v;
    }
    function say(s) { out.innerHTML = "<span>" + esc(s) + "</span>"; }
    function drop(i) {
      cur = i; var o = OX[i]; ph = o.ph; solid = !o.sol && !o.gas; tA = tB = 0; rA = rB = false;
      say(o.f + " + H₂O: " + o.w + " · pH ≈ " + n(ph));
      if (ph >= 12) tick(0); if (ph <= 3) tick(1);
    }
    c.querySelector("#s2oA").onclick = function () {
      if (cur < 0) { E.toast(t("Drop an oxide into the beaker first.", "ضع أكسيدًا في الكأس أولًا.")); return; }
      var o = OX[cur]; tA = 1; rA = !!o.A;
      if (o.A) { solid = false; ph = o.B ? 3 : 7; say(o.A + verdict()); } else { ph = Math.min(ph, 2); say(t("HCl: no reaction with ", "HCl: لا يتفاعل مع ") + o.f + verdict()); }
    };
    c.querySelector("#s2oB").onclick = function () {
      if (cur < 0) { E.toast(t("Drop an oxide into the beaker first.", "ضع أكسيدًا في الكأس أولًا.")); return; }
      var o = OX[cur]; tB = 1; rB = !!o.B;
      if (o.B) { solid = false; ph = o.A ? 12 : 7; say(o.B + verdict()); } else { ph = Math.max(ph, 12); say(t("NaOH: no reaction with ", "NaOH: لا يتفاعل مع ") + o.f + verdict()); }
    };
    S.drag({
      down: function (p) { var J = jars(); for (var i = 0; i < J.length; i++) { var j = J[i]; if (p.x > j.x && p.x < j.x + j.w && p.y > j.y && p.y < j.y + j.h) { drag = { i: i, x: p.x, y: p.y }; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function (p) { if (!drag) return; var b = beaker(); if (p.x > b.x - 20 && p.x < b.x + b.w + 20 && p.y < b.y + b.h + 20) drop(drag.i); drag = null; },
      hover: function (p) { return jars().some(function (j) { return p.x > j.x && p.x < j.x + j.w && p.y > j.y && p.y < j.y + j.h; }); }
    });
    say(t("Drag an oxide into the beaker.", "اسحب أكسيدًا إلى الكأس."));
    function phc(v) { var s = ["#dc2626", "#ef4444", "#f97316", "#fb923c", "#facc15", "#eab308", "#a3e635", "#22c55e", "#14b8a6", "#0ea5e9", "#3b82f6", "#4f46e5", "#7c3aed", "#6d28d9", "#581c87"]; return s[clamp(Math.round(v), 0, 14)]; }
    var shownPh = 7;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, b = beaker(), J = jars(), f = fs(S);
      ctx.clearRect(0, 0, W, H); shownPh += (ph - shownPh) * Math.min(1, dt * 3);
      ctx.fillStyle = phc(shownPh); ctx.globalAlpha = 0.55; ctx.fillRect(b.x + 3, b.y + b.h * 0.3, b.w - 6, b.h * 0.7 - 3); ctx.globalAlpha = 1;
      ctx.strokeStyle = C.muted; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(b.x, b.y); ctx.lineTo(b.x, b.y + b.h); ctx.lineTo(b.x + b.w, b.y + b.h); ctx.lineTo(b.x + b.w, b.y); ctx.stroke();
      if (cur >= 0 && solid) for (var k = 0; k < 14; k++) K.dot(ctx, b.x + 12 + (k * 23 % (b.w - 24)), b.y + b.h - 8 - (k % 3) * 6, 4, OX[cur].col, "rgba(0,0,0,.35)");
      if (cur >= 0 && OX[cur].f === "CO") { if (Math.random() < 0.3) bub.push([b.x + K.rnd(10, b.w - 10), b.y + b.h - 6]); }
      bub = bub.filter(function (q) { q[1] -= dt * 60; K.dot(ctx, q[0], q[1], 3, "rgba(148,163,184,.8)"); return q[1] > b.y + b.h * 0.3; });
      txt(ctx, cur >= 0 ? OX[cur].f + " · pH ≈ " + n(Math.round(shownPh)) : "H₂O · pH 7", b.x + b.w / 2, b.y + b.h * 0.18, { c: C.ink, s: f + 2 });
      // pH scale
      var sx = W * 0.64, sw = W * 0.32, sy = H * 0.2;
      for (var v = 0; v <= 14; v++) { ctx.fillStyle = phc(v); ctx.fillRect(sx + v / 15 * sw, sy, sw / 15 + 0.5, 18); }
      txt(ctx, "0", sx, sy + 30, { c: C.muted, s: 10 }); txt(ctx, "7", sx + sw * 7.5 / 15, sy + 30, { c: C.muted, s: 10 }); txt(ctx, "14", sx + sw, sy + 30, { c: C.muted, s: 10 });
      var px = sx + (shownPh + 0.5) / 15 * sw; txt(ctx, "▲", px, sy + 44, { c: C.ink, s: 14 });
      txt(ctx, t("acidic", "حامضي"), sx + sw * 0.12, sy - 10, { c: "#dc2626", s: 11 }); txt(ctx, t("alkaline", "قلوي"), sx + sw * 0.88, sy - 10, { c: "#6d28d9", s: 11 });
      if (cur >= 0) {
        txt(ctx, "HCl: " + (tA ? (rA ? t("reacts ✔", "يتفاعل ✔") : t("no reaction ✖", "لا يتفاعل ✖")) : "?"), sx, sy + 76, { c: C.ink, s: f, a: "left" });
        txt(ctx, "NaOH: " + (tB ? (rB ? t("reacts ✔", "يتفاعل ✔") : t("no reaction ✖", "لا يتفاعل ✖")) : "?"), sx, sy + 100, { c: C.ink, s: f, a: "left" });
      }
      J.forEach(function (j, i) {
        if (drag && drag.i === i) return;
        ctx.fillStyle = C.card; K.rr(ctx, j.x, j.y, j.w, j.h, 6); ctx.fill(); ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = OX[i].col; ctx.fillRect(j.x + 4, j.y + j.h * 0.45, j.w - 8, j.h * 0.5);
        txt(ctx, OX[i].f, j.x + j.w / 2, j.y + j.h * 0.25, { c: C.ink, s: Math.min(12, j.w / 4.5) });
      });
      if (drag) { var dw = J[drag.i].w; ctx.fillStyle = OX[drag.i].col; K.rr(ctx, drag.x - dw / 2, drag.y - 20, dw, 40, 6); ctx.fill(); ctx.strokeStyle = C.ink; ctx.stroke(); txt(ctx, OX[drag.i].f, drag.x, drag.y, { c: "#0f172a", s: 12 }); }
    });
  };

  /* =========================================================
     14. sec2chem_redox - oxidation numbers and electron balancing
     ========================================================= */
  L.sec2chem_redox = function (host, cfg, done) {
    var CP = [
      { f: "KMnO₄", at: [["K", 1, 1], ["Mn", 1, null], ["O", 4, -2]], x: 7 },
      { f: "NH₃", at: [["N", 1, null], ["H", 3, 1]], x: -3 },
      { f: "OF₂", at: [["O", 1, null], ["F", 2, -1]], x: 2 },
      { f: "K₂Cr₂O₇", at: [["K", 2, 1], ["Cr", 2, null], ["O", 7, -2]], x: 6 },
      { f: "NaClO₃", at: [["Na", 1, 1], ["Cl", 1, null], ["O", 3, -2]], x: 5 },
      { f: "NaH", at: [["Na", 1, 1], ["H", 1, null]], x: -1 },
      { f: "H₂O₂", at: [["H", 2, 1], ["O", 2, null]], x: -1 }
    ];
    var RX = [
      { ox: [[[1, "Cr"]], [[1, "Cr³⁺"]], 3], red: [[[2, "H⁺"]], [[1, "H₂"]], 2] },
      { ox: [[[1, "Sn²⁺"]], [[1, "Sn⁴⁺"]], 2], red: [[[1, "Fe³⁺"]], [[1, "Fe²⁺"]], 1] },
      { ox: [[[2, "I⁻"]], [[1, "I₂"]], 2], red: [[[1, "Cl₂"]], [[2, "Cl⁻"]], 2] },
      { ox: [[[1, "Al"]], [[1, "Al³⁺"]], 3], red: [[[1, "Cu²⁺"]], [[1, "Cu"]], 2] }
    ];
    host.innerHTML = hint(t("Oxidation number: drag the unknown tile up or down (or use the slider) until the charges add up to zero. Balance: multiply the half-reactions until electrons lost = electrons gained.",
      "عدد التأكسد: اسحب البطاقة المجهولة لأعلى أو لأسفل (أو استخدم المنزلق) حتى يصبح مجموع الشحنات صفرًا. الوزن: اضرب نصفي التفاعل حتى تتساوى الإلكترونات المفقودة والمكتسبة.")) + '<div class="seg" id="s2xM"></div>';
    var S = K.make(host, 0.56, 370);
    var c = box(host, '<div id="s2xA"><div class="seg" id="s2xC"></div>' + L._slider(t("Unknown oxidation number x", "عدد التأكسد المجهول x"), -4, 8, 1, 0, "") + "</div>" +
      '<div id="s2xB" style="display:none"><div class="seg" id="s2xR"></div><div class="btn-row"><button type="button" class="btn sm" id="s2am">− ' + t("oxidation", "أكسدة") + '</button><button type="button" class="btn sm" id="s2ap">+ ' + t("oxidation", "أكسدة") +
      '</button><button type="button" class="btn sm" id="s2bm">− ' + t("reduction", "اختزال") + '</button><button type="button" class="btn sm" id="s2bp">+ ' + t("reduction", "اختزال") + "</button></div></div>");
    var tick = L._goals(host, [t("Find the oxidation number of Mn in KMnO₄.", "أوجد عدد تأكسد المنجنيز في KMnO₄."), t("Find a negative oxidation number: N in NH₃.", "أوجد عدد تأكسد سالبًا: N في NH₃."),
      t("Find the unusual oxidation number of O in OF₂.", "أوجد عدد التأكسد غير المعتاد للأكسجين في OF₂."), t("Solve a compound with two unknown atoms: Cr in K₂Cr₂O₇.", "حل مركبًا فيه ذرتان مجهولتان: Cr في K₂Cr₂O₇."),
      t("Balance Cr + H⁺ → Cr³⁺ + H₂ by equalising electrons.", "زن Cr + H⁺ → Cr³⁺ + H₂ بمساواة الإلكترونات.")], done);
    var mode = "a", ci = 0, X = 0, ri = 0, ma = 1, mb = 1, drag = null, xs;
    xs = sl(c, 0, function (v) { return sg(v); }, function (v) { X = v; chkA(); });
    K.seg(host, "#s2xM", [["a", t("Oxidation number", "عدد التأكسد")], ["b", t("Balance electrons", "وزن الإلكترونات")]], "a", function (v) { mode = v; c.querySelector("#s2xA").style.display = v === "a" ? "" : "none"; c.querySelector("#s2xB").style.display = v === "b" ? "" : "none"; });
    K.seg(c, "#s2xC", CP.map(function (p, i) { return [String(i), p.f]; }), "0", function (v) { ci = Number(v); xs.set(0); });
    K.seg(c, "#s2xR", RX.map(function (r, i) { return [String(i), r.ox[0][0][1] + " / " + r.red[0][0][1]]; }), "0", function (v) { ri = Number(v); ma = mb = 1; chkB(); });
    [["s2am", -1, 0], ["s2ap", 1, 0], ["s2bm", -1, 1], ["s2bp", 1, 1]].forEach(function (b) { c.querySelector("#" + b[0]).onclick = function () { if (b[2]) mb = clamp(mb + b[1], 1, 6); else ma = clamp(ma + b[1], 1, 6); chkB(); }; });
    function sum() { var p = CP[ci]; return p.at.reduce(function (s, a) { return s + a[1] * (a[2] === null ? X : a[2]); }, 0); }
    function chkA() { if (sum() === 0) { var nm = CP[ci].f; if (nm === "KMnO₄") tick(0); if (nm === "NH₃") tick(1); if (nm === "OF₂") tick(2); if (nm === "K₂Cr₂O₇") tick(3); } }
    function chkB() { var r = RX[ri]; if (ri === 0 && ma * r.ox[2] === mb * r.red[2]) tick(4); }
    function side(list, k) { return list.map(function (s) { var cc = s[0] * k; return (cc === 1 ? "" : cc) + s[1]; }); }
    function tiles() { var p = CP[ci], W = S.W, H = S.H, tw = Math.min(110, W * 0.8 / p.at.length), x0 = (W - tw * p.at.length) / 2; return p.at.map(function (a, i) { return { a: a, x: x0 + i * tw + 6, y: H * 0.12, w: tw - 12, h: H * 0.4 }; }); }
    S.drag({
      down: function (p) { if (mode !== "a") return false; var T = tiles().filter(function (q) { return q.a[2] === null && p.x > q.x && p.x < q.x + q.w && p.y > q.y && p.y < q.y + q.h; })[0]; if (!T) return false; drag = { y: p.y, x: X }; return true; },
      move: function (p) { if (drag) xs.set(clamp(drag.x + Math.round((drag.y - p.y) / 22), -4, 8)); },
      up: function () { drag = null; },
      hover: function (p) { return mode === "a" && tiles().some(function (q) { return q.a[2] === null && p.x > q.x && p.x < q.x + q.w && p.y > q.y && p.y < q.y + q.h; }); }
    });
    var tilt = 0;
    S.loop(function (dt) {
      var ctx = S.ctx, W = S.W, H = S.H, C = S.C, f = fs(S);
      ctx.clearRect(0, 0, W, H);
      if (mode === "a") {
        var T = tiles(), s = sum();
        T.forEach(function (q) {
          var unk = q.a[2] === null, v = unk ? X : q.a[2];
          ctx.fillStyle = unk ? (s === 0 ? "rgba(34,197,94,.25)" : "rgba(37,99,235,.15)") : C.card; K.rr(ctx, q.x, q.y, q.w, q.h, 10); ctx.fill();
          ctx.strokeStyle = unk ? (s === 0 ? "#16a34a" : "#2563eb") : C.line; ctx.lineWidth = unk ? 3 : 1.5; ctx.stroke();
          txt(ctx, q.a[0] + (q.a[1] > 1 ? " ×" + q.a[1] : ""), q.x + q.w / 2, q.y + q.h * 0.25, { c: C.ink, s: f + 3 });
          txt(ctx, unk ? "x = " + sg(v) : sg(v), q.x + q.w / 2, q.y + q.h * 0.55, { c: unk ? "#2563eb" : C.muted, s: f + 4 });
          txt(ctx, "= " + sg(v * q.a[1]), q.x + q.w / 2, q.y + q.h * 0.82, { c: C.ink, s: f });
          if (unk) txt(ctx, "↕", q.x + q.w - 12, q.y + 14, { c: "#2563eb", s: 14 });
        });
        tilt += (clamp(s * 0.05, -0.35, 0.35) - tilt) * Math.min(1, dt * 5);
        var cx = W / 2, cy = H * 0.74, bl = Math.min(W * 0.35, 180);
        ctx.fillStyle = C.muted; ctx.beginPath(); ctx.moveTo(cx - 14, cy + 30); ctx.lineTo(cx + 14, cy + 30); ctx.lineTo(cx, cy); ctx.fill();
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(-tilt); ctx.fillStyle = s === 0 ? "#16a34a" : "#64748b"; ctx.fillRect(-bl, -4, bl * 2, 8);
        txt(ctx, "+", bl - 12, -16, { c: "#dc2626", s: 16 }); txt(ctx, "−", -bl + 12, -16, { c: "#2563eb", s: 16 }); ctx.restore();
        txt(ctx, t("Sum of charges = ", "مجموع الشحنات = ") + sg(s) + (s === 0 ? "  ✓" : ""), cx, H * 0.94, { c: s === 0 ? "#16a34a" : C.ink, s: f + 2 });
      } else {
        var r = RX[ri], lost = ma * r.ox[2], got = mb * r.red[2], eqd = lost === got;
        var bw = W * 0.44, by = H * 0.08, bh = H * 0.48;
        [[r.ox, ma, W * 0.04, t("Oxidation ×", "أكسدة ×"), "#f59e0b", lost, true], [r.red, mb, W * 0.52, t("Reduction ×", "اختزال ×"), "#3b82f6", got, false]].forEach(function (h) {
          ctx.fillStyle = C.card; K.rr(ctx, h[2], by, bw, bh, 12); ctx.fill(); ctx.strokeStyle = h[4]; ctx.lineWidth = 2; ctx.stroke();
          txt(ctx, h[3] + " " + h[1], h[2] + bw / 2, by + 18, { c: h[4], s: f + 2 });
          var eq = h[6] ? side(h[0][0], h[1]).join(" + ") + " → " + side(h[0][1], h[1]).join(" + ") + " + " + h[5] + "e⁻" : side(h[0][0], h[1]).join(" + ") + " + " + h[5] + "e⁻ → " + side(h[0][1], h[1]).join(" + ");
          txt(ctx, eq, h[2] + bw / 2, by + bh * 0.4, { c: C.ink, s: Math.min(f + 1, bw / eq.length * 1.9) });
          for (var e = 0; e < h[5]; e++) K.dot(ctx, h[2] + 16 + (e % 9) * ((bw - 32) / 8), by + bh * 0.68 + Math.floor(e / 9) * 14, 5, "#facc15", "#a16207");
          txt(ctx, (h[6] ? t("lost: ", "مفقودة: ") : t("gained: ", "مكتسبة: ")) + h[5] + " e⁻", h[2] + bw / 2, by + bh - 12, { c: C.muted, s: f });
        });
        if (eqd) {
          var lhs = side(r.ox[0], ma).concat(side(r.red[0], mb)).join(" + "), rhs = side(r.ox[1], ma).concat(side(r.red[1], mb)).join(" + ");
          txt(ctx, "✓ " + lhs + " → " + rhs, W / 2, H * 0.72, { c: "#16a34a", s: f + 3 });
          txt(ctx, t("Electrons lost = electrons gained = ", "المفقودة = المكتسبة = ") + lost, W / 2, H * 0.84, { c: C.ink, s: f });
        } else txt(ctx, t("Lost ", "المفقودة ") + lost + " ≠ " + t("gained ", "المكتسبة ") + got, W / 2, H * 0.74, { c: "#dc2626", s: f + 2 });
      }
    });
  };

  var NM = {
    sec2chem_quantum: ["Quantum numbers explorer", "مستكشف أعداد الكم"], sec2chem_aufbau: ["Orbital filling lab", "معمل ملء الأوربيتالات"],
    sec2chem_blocks: ["Periodic table explorer", "مستكشف الجدول الدوري"], sec2chem_trends: ["Radius and ionization lab", "معمل نصف القطر وجهد التأين"],
    sec2chem_negativity: ["Electronegativity tug of war", "شد الحبل للسالبية الكهربية"], sec2chem_oxides: ["Oxides lab", "معمل الأكاسيد"],
    sec2chem_redox: ["Redox lab", "معمل الأكسدة والاختزال"]
  };
  Object.keys(NM).forEach(function (k) { L.names[k] = NM[k]; });
})();
