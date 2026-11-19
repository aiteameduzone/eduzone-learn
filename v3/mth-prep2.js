/* EduZone Learn v3 - National Maths, Egyptian Prep 2 (2nd preparatory), Term 1 (2026-2027).
   Follows the Ministry Mathematics Student's Book contents exactly (printed page numbers):
     Unit 1 Numbers and Their Operations (5 lessons, p2-25), Unit 2 Algebra (4 lessons, p33-53),
     Unit 3 Geometry (6 lessons, p62-97), Unit 4 Statistics (2 lessons, p106-112).
   17 lessons, ids mprep2u1l1 ... mprep2u4l2. Registered as EZ3.MTHG.prep2 (engine: math-nat.js).
   Labs: part 1 of every lesson is a live canvas manipulative (mprep2_* in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  function C4(a, b, c, d) { return [[eq(a), eq(a)], [eq(b), eq(b)], [eq(c), eq(c)], [eq(d), eq(d)]]; }
  E.MTHG = E.MTHG || {};
  var U = E.MTHG.prep2 = { units: [], book: "Mathematics, Second Preparatory, Term 1 (2026-2027)" };

  /* ======================= UNIT 1 - NUMBERS AND THEIR OPERATIONS ======================= */
  U.units.push({
    id: "mprep2u1", num: 1, icon: "🔢", color: "blue",
    title: { en: "Numbers and Their Operations", ar: "الأعداد والعمليات عليها" },
    lessons: [
      {
        id: "mprep2u1l1", icon: "√", page: 2,
        title: { en: "Real Numbers", ar: "الأعداد الحقيقية" },
        idea: {
          official: {
            en: ["An irrational number cannot be written as " + eq("a ÷ b") + " with a, b integers and b ≠ 0. The set of irrational numbers is " + eq("Q′") + ".",
              "Examples: " + eq("√2 = 1.414213…") + ", " + eq("∛5 = 1.709975…") + " and " + eq("π ≈ 3.14159…") + ": their decimals are infinite and never recur.",
              "Estimate " + eq("√11") + ": " + eq("9 < 11 < 16") + " so " + eq("√9 < √11 < √16") + ", that is " + eq("3 < √11 < 4") + ". 11 is closer to 9, so " + eq("√11 ≈ 3.3") + ".",
              "Estimate " + eq("∛20") + ": " + eq("8 < 20 < 27") + " so " + eq("2 < ∛20 < 3") + ", and 20 is closer to 27, so " + eq("∛20 ≈ 2.7") + ".",
              "The real numbers are " + eq("R = Q ∪ Q′") + " where " + eq("Q ∩ Q′ = ∅") + ", and " + eq("N ⊂ Z ⊂ Q ⊂ R") + ".",
              "Solve " + eq("x² − 3 = 2") + " in R: " + eq("x² = 5") + " so " + eq("x = ±√5") + ". The solution set is " + eq("{√5, −√5}") + "."],
            ar: ["العدد غير النسبي هو عدد لا يمكن كتابته على الصورة " + eq("a ÷ b") + " حيث a وb عددان صحيحان وb ≠ صفر، ويُرمز لمجموعة الأعداد غير النسبية بالرمز " + eq("Q′") + ".",
              "من أمثلته: " + eq("√2 = 1.414213…") + " و" + eq("∛5 = 1.709975…") + " و" + eq("π ≈ 3.14159…") + "، فأرقامها العشرية غير منتهية وغير دورية.",
              "لتقدير " + eq("√11") + ": " + eq("9 < 11 < 16") + " إذن " + eq("3 < √11 < 4") + "، و١١ أقرب إلى ٩، إذن " + eq("√11 ≈ 3.3") + ".",
              "لتقدير " + eq("∛20") + ": " + eq("8 < 20 < 27") + " إذن " + eq("2 < ∛20 < 3") + "، و٢٠ أقرب إلى ٢٧، إذن " + eq("∛20 ≈ 2.7") + ".",
              "مجموعة الأعداد الحقيقية " + eq("R = Q ∪ Q′") + " حيث " + eq("Q ∩ Q′ = ∅") + "، و" + eq("N ⊂ Z ⊂ Q ⊂ R") + ".",
              "لحل " + eq("x² − 3 = 2") + " في ح: " + eq("x² = 5") + " إذن " + eq("x = ±√5") + "، ومجموعة الحل " + eq("{√5, −√5}") + "."]
          },
          story: {
            en: ["Malak's family in Damietta has a square balcony with an area of 11 m². How long is each side?",
              "No whole number works: 3 × 3 = 9 is too small and 4 × 4 = 16 is too big. So the side is " + eq("√11") + ", between 3 and 4.",
              "11 is much nearer to 9 than to 16, so Malak guesses 3.3. Her phone says 3.3166… and the digits never stop or repeat.",
              "Her teacher says such numbers are irrational. Together with fractions and whole numbers they make the real numbers.",
              "Every length Malak can measure, rational or not, is a real number with its own point on the number line."],
            ar: ["لدى أسرة ملك في دمياط شرفة مربعة مساحتها ١١ مترًا مربعًا، فكم طول ضلعها؟",
              "لا يصلح أي عدد صحيح: ٣ × ٣ = ٩ أصغر من المطلوب و٤ × ٤ = ١٦ أكبر منه، إذن طول الضلع " + eq("√11") + " ويقع بين ٣ و٤.",
              "العدد ١١ أقرب كثيرًا إلى ٩ منه إلى ١٦، فتقدّر ملك الطول بنحو ٣٫٣، وتعطيها الآلة الحاسبة ٣٫٣١٦٦… بأرقام لا تنتهي ولا تتكرر.",
              "تقول معلمتها إن هذه الأعداد غير نسبية، وهي مع الكسور والأعداد الصحيحة تكوّن الأعداد الحقيقية.",
              "كل طول تقيسه ملك، نسبيًا كان أو غير نسبي، عدد حقيقي له نقطة على خط الأعداد."]
          }
        },
        words: [
          ["Irrational number", "العدد غير النسبي", "A number that cannot be written as a ÷ b with integers a, b and b ≠ 0, like √2 and π.", "عدد لا يمكن كتابته على صورة a ÷ b حيث a وb صحيحان وb ≠ صفر، مثل √2 وπ."],
          ["Real numbers R", "الأعداد الحقيقية ح", "The union of the rational and the irrational numbers: R = Q ∪ Q′.", "اتحاد مجموعتي الأعداد النسبية وغير النسبية: ح = ن ∪ ن′."],
          ["Rational number", "العدد النسبي", "A number that can be written as a ÷ b with integers a, b and b ≠ 0.", "عدد يمكن كتابته على صورة a ÷ b حيث a وb صحيحان وb ≠ صفر."],
          ["Perfect square", "المربع الكامل", "A number whose square root is a whole number, like 9 and 16.", "عدد جذره التربيعي عدد صحيح، مثل ٩ و١٦."],
          ["Perfect cube", "المكعب الكامل", "A number whose cube root is a whole number, like 8 and 27.", "عدد جذره التكعيبي عدد صحيح، مثل ٨ و٢٧."],
          ["Golden ratio", "النسبة الذهبية", "The irrational ratio (1 + √5) ÷ 2 ≈ 1.618, seen in nature and art.", "النسبة غير النسبية (1 + √5) ÷ 2 ≈ 1.618، وتظهر في الطبيعة والفن."]
        ],
        lab: { parts: [{ type: "mprep2_roots" }] },
        quiz: [
          Q(["Which of these numbers is irrational?", "أي الأعداد الآتية عدد غير نسبي؟"], C4("√13", "√25", "∛−27", "0.125"),
            ["13 is not a perfect square, so √13 cannot be written as a ÷ b. √25 = 5, ∛−27 = −3 and 0.125 = 125 ÷ 1000 are rational.", "١٣ ليس مربعًا كاملًا، فلا يمكن كتابة √13 على صورة a ÷ b، أما √25 = 5 و∛−27 = −3 و0.125 = 125 ÷ 1000 فأعداد نسبية."],
            ["Malak tries to build a square of 13 tiles: it never comes out even.", "تحاول ملك بناء مربع من ١٣ بلاطة فلا يكتمل أبدًا."]),
          Q(["Between which two consecutive integers does √11 lie?", "بين أي عددين صحيحين متتاليين يقع √11؟"], [[eq("3") + " and " + eq("4"), eq("3") + " و" + eq("4")], [eq("9") + " and " + eq("16"), eq("9") + " و" + eq("16")], [eq("5") + " and " + eq("6"), eq("5") + " و" + eq("6")], [eq("2") + " and " + eq("3"), eq("2") + " و" + eq("3")]],
            ["9 < 11 < 16, so √9 < √11 < √16, that is 3 < √11 < 4. (9 and 16 are the squares, not the roots.)", "9 < 11 < 16 إذن √9 < √11 < √16 أي 3 < √11 < 4. (٩ و١٦ هما المربعان وليسا الجذرين.)"],
            ["A 3 m square is 9 m², a 4 m square is 16 m²; Malak's 11 m² balcony is in between.", "المربع ذو الضلع ٣ م مساحته ٩ م² وذو الضلع ٤ م مساحته ١٦ م²، وشرفة ملك ١١ م² بينهما."]),
          Q(["What is ∛20 to the nearest tenth?", "ما قيمة ∛20 لأقرب جزء من عشرة؟"], C4("2.7", "2.2", "4.5", "3.3"),
            ["8 < 20 < 27 so 2 < ∛20 < 3, and 20 is closer to 27, so ∛20 is closer to 3: about 2.7 (2.714…).", "8 < 20 < 27 إذن 2 < ∛20 < 3، و٢٠ أقرب إلى ٢٧ فيكون ∛20 أقرب إلى ٣: نحو 2.7 (2.714…)."],
            ["A 2 cm cube holds 8 cm³ and a 3 cm cube holds 27 cm³; 20 cm³ needs an edge close to 3.", "مكعب حرفه ٢ سم حجمه ٨ سم³ وحرفه ٣ سم حجمه ٢٧ سم³، و٢٠ سم³ تحتاج حرفًا قريبًا من ٣."]),
          Q(["Using √5 ≈ 2.24, the golden ratio (1 + √5) ÷ 2 to the nearest tenth is…", "باستخدام √5 ≈ 2.24 فإن النسبة الذهبية (1 + √5) ÷ 2 لأقرب جزء من عشرة تساوي…"], C4("1.6", "3.2", "1.1", "2.6"),
            ["(1 + 2.24) ÷ 2 = 3.24 ÷ 2 = 1.62 ≈ 1.6. Forgetting to halve gives 3.2.", "(1 + 2.24) ÷ 2 = 3.24 ÷ 2 = 1.62 ≈ 1.6، ونسيان القسمة على ٢ يعطي 3.2."],
            ["A golden picture frame is about 1.6 times as long as it is wide.", "إطار الصورة الذهبي طوله نحو ١٫٦ مرة قدر عرضه."]),
          Q(["The solution set of x² − 3 = 2 in R is…", "مجموعة حل المعادلة x² − 3 = 2 في ح هي…"], C4("{√5, −√5}", "{√5}", "{5}", "∅"),
            ["x² = 5, so x = √5 or x = −√5: both are real numbers.", "x² = 5 إذن x = √5 أو x = −√5، وكلاهما عدد حقيقي."],
            ["Two numbers square to 5: one on each side of zero.", "عددان مربع كل منهما ٥: واحد على كل جانب من الصفر."]),
          Q(["The solution set of 4x³ = −32 where x ∈ Q′ is…", "مجموعة حل المعادلة 4x³ = −32 حيث x ∈ Q′ هي…"], C4("∅", "{−2}", "{2}", "{−2, 2}"),
            ["x³ = −8 so x = −2. But −2 is rational, not in Q′, so the solution set in Q′ is empty.", "x³ = −8 إذن x = −2، لكن −2 عدد نسبي وليس في Q′، إذن مجموعة الحل في Q′ خالية."],
            ["The answer exists, but it is not in the club we were asked about.", "الإجابة موجودة لكنها ليست في المجموعة المطلوبة."]),
          Q(["The solution set of 5x³ − 1 = 4x³ + 8 in R is…", "مجموعة حل المعادلة 5x³ − 1 = 4x³ + 8 في ح هي…"], C4("{∛9}", "{9}", "{3}", "{∛7}"),
            ["5x³ − 4x³ = 8 + 1, so x³ = 9 and x = ∛9, a real (irrational) number.", "5x³ − 4x³ = 8 + 1 إذن x³ = 9 ومنها x = ∛9، وهو عدد حقيقي غير نسبي."],
            ["Move the cubes to one side and the numbers to the other: a cube of volume 9.", "اجمع المكعبات في طرف والأعداد في الطرف الآخر: مكعب حجمه ٩."]),
          Q(["A square floor has area 15 m². About how long is a strip around it?", "أرضية مربعة مساحتها ١٥ م²، فكم يبلغ تقريبًا طول شريط حولها؟"], [["About 15.5 m", "نحو ١٥٫٥ م"], ["About 60 m", "نحو ٦٠ م"], ["About 7.7 m", "نحو ٧٫٧ م"], ["About 3.9 m", "نحو ٣٫٩ م"]],
            ["Side = √15 ≈ 3.9 (9 < 15 < 16, close to 16). Perimeter = 4 × √15 ≈ 4 × 3.87 ≈ 15.5 m.", "طول الضلع = √15 ≈ 3.9 (9 < 15 < 16 وأقرب إلى ١٦)، والمحيط = 4 × √15 ≈ 4 × 3.87 ≈ 15.5 م."],
            ["Ahmed walks round four sides, each just under 4 m.", "يمشي أحمد حول أربعة أضلاع طول كل منها أقل قليلًا من ٤ م."])
        ]
      },
      {
        id: "mprep2u1l2", icon: "↔️", page: 8,
        title: { en: "Intervals and Their Operations", ar: "الفترات والعمليات عليها" },
        idea: {
          official: {
            en: ["Between any two real numbers there are infinitely many real numbers, so subsets of R are written as intervals.",
              "Closed " + eq("[a, b] = {x : a ≤ x ≤ b}") + ", open " + eq("]a, b[ = {x : a < x < b}") + ", half-open " + eq("[a, b[") + " and " + eq("]a, b]") + ". A closed end is a filled dot, an open end a hollow dot.",
              "Unbounded intervals use ∞: " + eq("[a, ∞[") + ", " + eq("]a, ∞[") + ", " + eq("]−∞, a]") + ", " + eq("]−∞, a[") + ", and " + eq("R = ]−∞, ∞[") + ". The ∞ end is always open.",
              "Operations work as on sets. With " + eq("X = [−1, 3]") + " and " + eq("Y = [1, 4]") + ": " + eq("X ∪ Y = [−1, 4]") + ", " + eq("X ∩ Y = [1, 3]") + ", " + eq("X − Y = [−1, 1[") + ".",
              "The complement is " + eq("X′ = R − X") + ": for " + eq("X = [−1, 3]") + ", " + eq("X′ = ]−∞, −1[ ∪ ]3, ∞[") + ".",
              "Use the number line: shade both intervals and read where they overlap (∩), cover (∪) or leave out (−)."],
            ar: ["بين أي عددين حقيقيين عدد لا نهائي من الأعداد الحقيقية، لذلك نكتب المجموعات الجزئية من ح على صورة فترات.",
              "الفترة المغلقة " + eq("[a, b] = {x : a ≤ x ≤ b}") + "، والمفتوحة " + eq("]a, b[ = {x : a < x < b}") + "، ونصف المفتوحة " + eq("[a, b[") + " و" + eq("]a, b]") + "؛ والطرف المغلق نقطة مظللة والمفتوح نقطة فارغة.",
              "الفترات غير المحدودة تستخدم ∞: " + eq("[a, ∞[") + " و" + eq("]a, ∞[") + " و" + eq("]−∞, a]") + " و" + eq("]−∞, a[") + "، و" + eq("ح = ]−∞, ∞[") + "، والطرف ∞ مفتوح دائمًا.",
              "العمليات كما في المجموعات، فإذا كانت " + eq("X = [−1, 3]") + " و" + eq("Y = [1, 4]") + ": " + eq("X ∪ Y = [−1, 4]") + " و" + eq("X ∩ Y = [1, 3]") + " و" + eq("X − Y = [−1, 1[") + ".",
              "المكملة " + eq("X′ = ح − X") + "، فإذا كانت " + eq("X = [−1, 3]") + " فإن " + eq("X′ = ]−∞, −1[ ∪ ]3, ∞[") + ".",
              "استخدم خط الأعداد: ظلّل الفترتين واقرأ الجزء المشترك (∩) أو الكل (∪) أو ما يتبقى (−)."]
          },
          story: {
            en: ["Nour goes diving in Hurghada. One fish lives at depths from 15 m to 60 m, another from 10 m to 25 m.",
              "She writes the depths as intervals: " + eq("[15, 60]") + " and " + eq("[10, 25]") + ", and shades them on a vertical number line.",
              "To see both fish she must be where the shadings overlap: " + eq("[15, 60] ∩ [10, 25] = [15, 25]") + ".",
              "Her friend Bassem at 20 m can see both. Amal at 12 m sees only the second fish and Magdy at 30 m only the first.",
              "Any depth in at least one interval is the union " + eq("[10, 60]") + ": somewhere at least one kind of fish swims."],
            ar: ["تغوص نور في الغردقة؛ نوع من الأسماك يعيش على أعماق من ١٥ م إلى ٦٠ م، ونوع آخر من ١٠ م إلى ٢٥ م.",
              "تكتب الأعماق على صورة فترتين " + eq("[15, 60]") + " و" + eq("[10, 25]") + " وتظللهما على خط أعداد رأسي.",
              "لترى النوعين معًا يجب أن تكون حيث يتداخل التظليلان: " + eq("[15, 60] ∩ [10, 25] = [15, 25]") + ".",
              "صديقها باسم على عمق ٢٠ م يرى النوعين، وأمل على ١٢ م ترى النوع الثاني فقط، ومجدي على ٣٠ م يرى الأول فقط.",
              "أي عمق في فترة واحدة على الأقل يقع في الاتحاد " + eq("[10, 60]") + "، حيث يسبح نوع واحد على الأقل."]
          }
        },
        words: [
          ["Interval", "الفترة", "A set of all real numbers between two ends, written with brackets like [a, b[.", "مجموعة كل الأعداد الحقيقية بين طرفين، وتُكتب بأقواس مثل [a, b[."],
          ["Closed interval", "الفترة المغلقة", "[a, b]: both ends belong to the interval (filled dots).", "[a, b]: الطرفان ينتميان إلى الفترة (نقطتان مظللتان)."],
          ["Open interval", "الفترة المفتوحة", "]a, b[: neither end belongs to the interval (hollow dots).", "]a, b[: الطرفان لا ينتميان إلى الفترة (نقطتان فارغتان)."],
          ["Unbounded interval", "الفترة غير المحدودة", "An interval that goes on to ∞ or −∞, like [2, ∞[.", "فترة تمتد إلى ∞ أو −∞ مثل [2, ∞[."],
          ["Intersection", "التقاطع", "X ∩ Y: the numbers that belong to both intervals.", "X ∩ Y: الأعداد التي تنتمي إلى الفترتين معًا."],
          ["Complement", "المكملة", "X′ = R − X: the real numbers not in X.", "X′ = ح − X: الأعداد الحقيقية التي لا تنتمي إلى X."]
        ],
        lab: { parts: [{ type: "mprep2_intervals" }] },
        quiz: [
          Q(["Write {x : x ∈ R, 1 < x ≤ 3} as an interval.", "اكتب " + eq("{x : x ∈ ح، 1 < x ≤ 3}") + " على صورة فترة."], C4("]1, 3]", "[1, 3]", "]1, 3[", "[1, 3["),
            ["1 is not included (<), so the bracket opens away from it: ]1. 3 is included (≤): 3].", "العدد ١ لا ينتمي (<) فيكون القوس مفتوحًا عنده ]1، والعدد ٣ ينتمي (≤) فيكون 3]."],
            ["A hollow dot at 1, a filled dot at 3.", "نقطة فارغة عند ١ ونقطة مظللة عند ٣."]),
          Q(["[−3, 5[ ∪ [2, 7[ = ?", "[−3, 5[ ∪ [2, 7[ = ؟"], C4("[−3, 7[", "[2, 5[", "[−3, 2[", "]−3, 7]"),
            ["Together the shadings cover from −3 (included) to 7 (not included).", "التظليلان معًا يغطيان من −3 (ينتمي) إلى ٧ (لا ينتمي)."],
            ["Two paint strokes that overlap make one long stroke.", "ضربتا فرشاة متداخلتان تصنعان ضربة طويلة واحدة."]),
          Q(["]1, 5] ∩ ]−∞, 3] = ?", "]1, 5] ∩ ]−∞, 3] = ؟"], C4("]1, 3]", "]−∞, 5]", "[3, 5]", "]1, 3["),
            ["The common part starts after 1 and ends at 3, and 3 belongs to both, so ]1, 3].", "الجزء المشترك يبدأ بعد ١ وينتهي عند ٣، و٣ ينتمي للفترتين، إذن ]1, 3]."],
            ["Only where both shadings lie on top of each other.", "فقط حيث يقع التظليلان فوق بعضهما."]),
          Q(["]−∞, 6] − [4, ∞[ = ?", "]−∞, 6] − [4, ∞[ = ؟"], C4("]−∞, 4[", "]−∞, 4]", "[4, 6]", "]6, ∞["),
            ["Remove from ]−∞, 6] every number ≥ 4. 4 itself is removed, so the end at 4 is open.", "نحذف من ]−∞, 6] كل عدد ≥ ٤، والعدد ٤ نفسه محذوف فيكون الطرف عنده مفتوحًا."],
            ["Erase the part of the first stroke covered by the second.", "امسح جزء الضربة الأولى الذي تغطيه الثانية."]),
          Q(["If X = ]−∞, 3[ then X′ = ?", "إذا كانت X = ]−∞, 3[ فإن X′ = ؟"], C4("[3, ∞[", "]3, ∞[", "]−∞, 3]", "[−3, ∞["),
            ["X′ = R − X: everything from 3 onwards. 3 is not in X, so it is in X′: [3, ∞[.", "X′ = ح − X: كل الأعداد من ٣ فما فوق، و٣ ليس في X فهو في X′: [3, ∞[."],
            ["The hollow dot of X becomes a filled dot in X′.", "النقطة الفارغة في X تصبح مظللة في X′."]),
          Q(["Fish A live at depths [15, 60] m and fish B at [10, 25] m. Who sees both?", "النوع الأول من الأسماك يعيش على أعماق [15, 60] م والثاني على [10, 25] م، فمن يرى النوعين؟"], [["Bassem at 20 m", "باسم على عمق ٢٠ م"], ["Magdy at 30 m", "مجدي على عمق ٣٠ م"], ["Amal at 12 m", "أمل على عمق ١٢ م"], ["None of them", "لا أحد منهم"]],
            ["[15, 60] ∩ [10, 25] = [15, 25], and only 20 lies in it.", "[15, 60] ∩ [10, 25] = [15, 25]، والعمق ٢٠ فقط يقع فيها."],
            ["Nour finds the overlap of the two fish homes.", "تبحث نور عن الجزء المشترك بين بيتي النوعين."]),
          Q(["The set of non-negative real numbers is…", "مجموعة الأعداد الحقيقية غير السالبة هي…"], C4("[0, ∞[", "]0, ∞[", "]−∞, 0]", "R"),
            ["Non-negative means positive or zero, so 0 is included: [0, ∞[.", "غير السالبة تعني الموجبة أو الصفر، فالصفر ينتمي: [0, ∞[."],
            ["Zero is not negative, so it joins the positives.", "الصفر ليس سالبًا فينضم إلى الموجبة."]),
          Q(["[4, 9] ∩ [7, 10[ = ?", "[4, 9] ∩ [7, 10[ = ؟"], C4("[7, 9]", "[4, 10[", "[7, 10[", "[4, 7]"),
            ["The overlap runs from 7 to 9; both ends belong to both intervals.", "الجزء المشترك من ٧ إلى ٩، وكلا الطرفين ينتمي إلى الفترتين."],
            ["Mustafa is free from 7 to 10 and the gym is open from 4 to 9: he trains 7 to 9.", "مصطفى متفرغ من ٧ إلى ١٠ والصالة مفتوحة من ٤ إلى ٩، فيتمرن من ٧ إلى ٩."])
        ]
      },
      {
        id: "mprep2u1l3", icon: "➕", page: 14,
        title: { en: "Operations on Real Numbers", ar: "العمليات على الأعداد الحقيقية" },
        idea: {
          official: {
            en: ["Like radical terms have the same index and the same radicand, like " + eq("3√5") + " and " + eq("−4√5") + ". Add them like algebraic terms: " + eq("3√5 − 4√5 = −√5") + ".",
              "Multiply radical terms like algebraic terms: " + eq("−4√3 × √3 = −4 × 3 = −12") + ". Unlike terms such as " + eq("−8√3 − 5") + " cannot be combined.",
              "Expand brackets with the distributive property: " + eq("2√3(4 + √3) − 4√3 = 8√3 + 6 − 4√3 = 4√3 + 6") + ".",
              "Conjugates give a rational product: " + eq("(2√2 + 1)(2√2 − 1) = 8 − 1 = 7") + ".",
              "To make a denominator an integer, multiply top and bottom: " + eq("7 ÷ √3 = 7√3 ÷ 3") + ", and the multiplicative inverse of " + eq("2 − √3") + " is " + eq("2 + √3") + ".",
              "R is closed under + and ×; both are commutative and associative; 0 and 1 are the identities; a has additive inverse −a and multiplicative inverse 1 ÷ a (a ≠ 0)."],
            ar: ["الحدود الجذرية المتشابهة لها الدليل نفسه وما تحت الجذر نفسه، مثل " + eq("3√5") + " و" + eq("−4√5") + "، ونجمعها كالحدود الجبرية: " + eq("3√5 − 4√5 = −√5") + ".",
              "نضرب الحدود الجذرية كالحدود الجبرية: " + eq("−4√3 × √3 = −4 × 3 = −12") + "، أما الحدود غير المتشابهة مثل " + eq("−8√3 − 5") + " فلا تُجمع.",
              "نفك الأقواس بخاصية التوزيع: " + eq("2√3(4 + √3) − 4√3 = 8√3 + 6 − 4√3 = 4√3 + 6") + ".",
              "حاصل ضرب العددين المترافقين عدد نسبي: " + eq("(2√2 + 1)(2√2 − 1) = 8 − 1 = 7") + ".",
              "لجعل المقام عددًا صحيحًا نضرب البسط والمقام: " + eq("7 ÷ √3 = 7√3 ÷ 3") + "، والمعكوس الضربي للعدد " + eq("2 − √3") + " هو " + eq("2 + √3") + ".",
              "ح مغلقة بالنسبة للجمع والضرب، وكلاهما إبدالي ودامج، والصفر والواحد هما المحايدان، وللعدد a معكوس جمعي −a ومعكوس ضربي 1 ÷ a (a ≠ 0)."]
          },
          story: {
            en: ["Karim's grandmother has two carpets: a rectangle (√5 + 1) m by (√5 − 1) m and a square with side √5 m.",
              "Karim multiplies the rectangle: " + eq("(√5 + 1)(√5 − 1) = 5 − 1 = 4") + " m². The middle terms cancel because the factors are conjugates.",
              "The square is " + eq("√5 × √5 = 5") + " m², so the square carpet is larger by 1 m².",
              "For the perimeters he adds like terms: " + eq("2(√5 + 1 + √5 − 1) = 4√5") + " m for both. Same frame, different areas!",
              "Grandma laughs: the same border tape fits both carpets."],
            ar: ["لدى جدة كريم سجادتان: مستطيلة بُعداها (√5 + 1) م و(√5 − 1) م، ومربعة طول ضلعها √5 م.",
              "يضرب كريم بُعدي المستطيلة: " + eq("(√5 + 1)(√5 − 1) = 5 − 1 = 4") + " م²؛ يختفي الحدان الأوسطان لأن العاملين مترافقان.",
              "ومساحة المربعة " + eq("√5 × √5 = 5") + " م²، إذن السجادة المربعة أكبر بمتر مربع واحد.",
              "وللمحيطين يجمع الحدود المتشابهة: " + eq("2(√5 + 1 + √5 − 1) = 4√5") + " م لكل منهما؛ إطار واحد ومساحتان مختلفتان!",
              "تضحك الجدة: الشريط نفسه يصلح حول السجادتين."]
          }
        },
        words: [
          ["Like radical terms", "الحدود الجذرية المتشابهة", "Terms with the same index and the same radicand, like 2√5 and −3√5.", "حدود لها الدليل نفسه وما تحت الجذر نفسه، مثل 2√5 و−3√5."],
          ["Radicand", "ما تحت الجذر", "The number under the root sign.", "العدد المكتوب تحت علامة الجذر."],
          ["Conjugate", "المرافق", "a + √b and a − √b are conjugates; their product a² − b is rational.", "a + √b وa − √b عددان مترافقان، وحاصل ضربهما a² − b عدد نسبي."],
          ["Additive inverse", "المعكوس الجمعي", "The number −a, because a + (−a) = 0.", "العدد −a لأن a + (−a) = 0."],
          ["Multiplicative inverse", "المعكوس الضربي", "The number 1 ÷ a (a ≠ 0), because a × (1 ÷ a) = 1.", "العدد 1 ÷ a (a ≠ 0) لأن a × (1 ÷ a) = 1."],
          ["Closure", "الانغلاق", "Adding or multiplying two real numbers always gives a real number.", "جمع عددين حقيقيين أو ضربهما يعطي دائمًا عددًا حقيقيًا."]
        ],
        lab: { parts: [{ type: "mprep2_radmul" }] },
        quiz: [
          Q(["3√5 − 4√5 = ?", "3√5 − 4√5 = ؟"], C4("−√5", "−1", "7√5", "−√10"),
            ["Like radical terms: (3 − 4)√5 = −√5, just like 3x − 4x = −x.", "حدود متشابهة: (3 − 4)√5 = −√5، تمامًا مثل 3x − 4x = −x."],
            ["3 bags of √5 minus 4 bags of √5 leaves you owing one bag.", "٣ أكياس من √5 ناقص ٤ أكياس يتبقى عليك كيس واحد."]),
          Q(["Write 7 ÷ √3 with an integer denominator.", "اكتب 7 ÷ √3 بحيث يكون المقام عددًا صحيحًا."], C4("7√3 ÷ 3", "7 ÷ 3", "7√3", "√21 ÷ 9"),
            ["Multiply top and bottom by √3: 7√3 ÷ (√3 × √3) = 7√3 ÷ 3.", "نضرب البسط والمقام في √3: 7√3 ÷ (√3 × √3) = 7√3 ÷ 3."],
            ["Multiplying by √3 ÷ √3 is multiplying by 1: the value stays the same.", "الضرب في √3 ÷ √3 ضرب في ١ فلا تتغير القيمة."]),
          Q(["(2√2 + 1)(2√2 − 1) = ?", "(2√2 + 1)(2√2 − 1) = ؟"], C4("7", "3", "8", "9"),
            ["Conjugates: (2√2)² − 1² = 4 × 2 − 1 = 7.", "عددان مترافقان: (2√2)² − 1² = 4 × 2 − 1 = 7."],
            ["The middle terms cancel, leaving square minus square.", "يختفي الحدان الأوسطان فيبقى مربع ناقص مربع."]),
          Q(["2√3(4 + √3) − 4√3 = ?", "2√3(4 + √3) − 4√3 = ؟"], C4("4√3 + 6", "8√3 + 6", "4√3 + 3", "10√3"),
            ["2√3 × 4 = 8√3 and 2√3 × √3 = 6, so 8√3 + 6 − 4√3 = 4√3 + 6.", "2√3 × 4 = 8√3 و2√3 × √3 = 6، إذن 8√3 + 6 − 4√3 = 4√3 + 6."],
            ["Distribute first, then gather the √3 bags.", "وزّع أولًا ثم اجمع أكياس √3."]),
          Q(["(2√5 − 5)² = ?", "(2√5 − 5)² = ؟"], C4("45 − 20√5", "−5", "45", "45 − 10√5"),
            ["(2√5)² − 2 × 2√5 × 5 + 5² = 20 − 20√5 + 25 = 45 − 20√5.", "(2√5)² − 2 × 2√5 × 5 + 5² = 20 − 20√5 + 25 = 45 − 20√5."],
            ["Square of a difference: first², minus twice the product, plus last².", "مربع الفرق: مربع الأول ناقص ضعف حاصل الضرب زائد مربع الأخير."]),
          Q(["The multiplicative inverse of 2 − √3 in simplest form is…", "المعكوس الضربي للعدد 2 − √3 في أبسط صورة هو…"], C4("2 + √3", "√3 − 2", "2 − √3", "−2 − √3"),
            ["1 ÷ (2 − √3) = (2 + √3) ÷ ((2 − √3)(2 + √3)) = (2 + √3) ÷ (4 − 3) = 2 + √3. (√3 − 2 is the additive inverse.)", "1 ÷ (2 − √3) = (2 + √3) ÷ ((2 − √3)(2 + √3)) = (2 + √3) ÷ (4 − 3) = 2 + √3. (√3 − 2 هو المعكوس الجمعي.)"],
            ["Multiply by the conjugate and the bottom becomes 1.", "اضرب في المرافق فيصبح المقام ١."]),
          Q(["A fish tank is a cuboid 2√2 m by 2 m by √2 m. Its volume is…", "حوض سمك على شكل متوازي مستطيلات أبعاده 2√2 م و2 م و√2 م، فحجمه…"], [[eq("8") + " m³", eq("8") + " م³"], [eq("4√2") + " m³", eq("4√2") + " م³"], [eq("8√2") + " m³", eq("8√2") + " م³"], [eq("16") + " m³", eq("16") + " م³"]],
            ["V = 2√2 × 2 × √2 = 4 × (√2 × √2) = 4 × 2 = 8 m³.", "V = 2√2 × 2 × √2 = 4 × (√2 × √2) = 4 × 2 = 8 م³."],
            ["The two √2 meet and become a plain 2.", "يلتقي √2 مع √2 فيصبحان ٢."]),
          Q(["Carpet A is (√5 + 1) m by (√5 − 1) m; carpet B is a square of side √5 m. Which is true?", "السجادة A بُعداها (√5 + 1) م و(√5 − 1) م، والسجادة B مربعة طول ضلعها √5 م. أي العبارات صحيحة؟"], [["B is larger by 1 m²", "B أكبر بمقدار ١ م²"], ["A is larger by 1 m²", "A أكبر بمقدار ١ م²"], ["They are equal", "متساويتان"], ["A is larger by 4 m²", "A أكبر بمقدار ٤ م²"]],
            ["A = (√5)² − 1² = 4 m² and B = (√5)² = 5 m², so B is larger by 1 m².", "مساحة A = (√5)² − 1² = 4 م² ومساحة B = (√5)² = 5 م²، إذن B أكبر بمتر مربع."],
            ["Karim's grandmother's square carpet wins by one square metre.", "سجادة جدة كريم المربعة تفوز بمتر مربع واحد."])
        ]
      },
      {
        id: "mprep2u1l4", icon: "🌱", page: 20,
        title: { en: "Laws of Square and Cube Roots", ar: "قوانين الجذور التربيعية والتكعيبية" },
        idea: {
          official: {
            en: ["For non-negative a, b: " + eq("√a × √b = √(ab)") + " and " + eq("√a ÷ √b = √(a ÷ b)") + " (b ≠ 0). Example: " + eq("√2 × √8 = √16 = 4") + ".",
              "For any real a, b: " + eq("∛a × ∛b = ∛(ab)") + ", e.g. " + eq("∛3 × ∛−9 = ∛−27 = −3") + ".",
              "To simplify, split off the largest perfect square: " + eq("√32 = √(16 × 2) = 4√2") + ". For cube roots the largest perfect cube: " + eq("∛24 = ∛(8 × 3) = 2∛3") + ".",
              "Simplify each term, then add like terms: " + eq("2√3 + 5√27 − √48 = 2√3 + 15√3 − 4√3 = 13√3") + ".",
              "Careful: " + eq("√a + √b ≠ √(a + b)") + ", for example " + eq("√9 + √16 = 7") + " but " + eq("√25 = 5") + ".",
              "Book example: perimeter " + eq("√1440") + " with sides " + eq("√250") + " and " + eq("√160") + ": " + eq("BC = 12√10 − 5√10 − 4√10 = 3√10") + " cm."],
            ar: ["إذا كان a وb عددين حقيقيين غير سالبين فإن " + eq("√a × √b = √(ab)") + " و" + eq("√a ÷ √b = √(a ÷ b)") + " (b ≠ 0)، مثل " + eq("√2 × √8 = √16 = 4") + ".",
              "ولأي عددين حقيقيين: " + eq("∛a × ∛b = ∛(ab)") + "، مثل " + eq("∛3 × ∛−9 = ∛−27 = −3") + ".",
              "للتبسيط نحلل العدد إلى أكبر مربع كامل: " + eq("√32 = √(16 × 2) = 4√2") + "، وفي الجذر التكعيبي إلى أكبر مكعب كامل: " + eq("∛24 = ∛(8 × 3) = 2∛3") + ".",
              "نبسّط كل حد ثم نجمع المتشابهة: " + eq("2√3 + 5√27 − √48 = 2√3 + 15√3 − 4√3 = 13√3") + ".",
              "انتبه: " + eq("√a + √b ≠ √(a + b)") + "، فمثلًا " + eq("√9 + √16 = 7") + " بينما " + eq("√25 = 5") + ".",
              "مثال الكتاب: محيط مثلث " + eq("√1440") + " وطولا ضلعين " + eq("√250") + " و" + eq("√160") + "، إذن " + eq("BC = 12√10 − 5√10 − 4√10 = 3√10") + " سم."]
          },
          story: {
            en: ["Osama's class builds a school seedbed of two squares side by side: one of 48 m² for seedlings and one of 12 m² for herbs.",
              "Side of the big square: " + eq("√48 = √(16 × 3) = 4√3") + " m. Side of the small one: " + eq("√12 = √(4 × 3) = 2√3") + " m.",
              "Both are bags of √3, so they add easily: the bed is " + eq("4√3 + 2√3 = 6√3") + " m long.",
              "The fence goes along the outline: " + eq("2 × 6√3 + 2 × 4√3 = 20√3") + " m, about 34.6 m.",
              "Osama notices that simplifying the roots first is what made them addable."],
            ar: ["يبني فصل أسامة مشتلًا في المدرسة من مربعين متجاورين: الأول مساحته ٤٨ م² للشتلات والثاني ١٢ م² للنباتات العطرية.",
              "طول ضلع المربع الكبير " + eq("√48 = √(16 × 3) = 4√3") + " م، وطول ضلع الصغير " + eq("√12 = √(4 × 3) = 2√3") + " م.",
              "كلاهما أكياس من √3 فيُجمعان بسهولة: طول المشتل " + eq("4√3 + 2√3 = 6√3") + " م.",
              "والسور يدور حول الشكل: " + eq("2 × 6√3 + 2 × 4√3 = 20√3") + " م، أي نحو ٣٤٫٦ م.",
              "لاحظ أسامة أن تبسيط الجذور أولًا هو ما جعل جمعها ممكنًا."]
          }
        },
        words: [
          ["Square root", "الجذر التربيعي", "√a is the non-negative number whose square is a (a ≥ 0).", "√a هو العدد غير السالب الذي مربعه a (a ≥ 0)."],
          ["Cube root", "الجذر التكعيبي", "∛a is the number whose cube is a; it exists for every real a.", "∛a هو العدد الذي مكعبه a، ويوجد لكل عدد حقيقي a."],
          ["Simplest form", "أبسط صورة", "No perfect-square (or perfect-cube) factor is left under the root, e.g. 4√2.", "لا يبقى تحت الجذر عامل مربع كامل (أو مكعب كامل)، مثل 4√2."],
          ["Product law", "قانون الضرب", "√a × √b = √(ab) for a, b ≥ 0.", "√a × √b = √(ab) حيث a وb ≥ صفر."],
          ["Quotient law", "قانون القسمة", "√a ÷ √b = √(a ÷ b) for a ≥ 0, b > 0.", "√a ÷ √b = √(a ÷ b) حيث a ≥ صفر وb > صفر."]
        ],
        lab: { parts: [{ type: "mprep2_simplify" }] },
        quiz: [
          Q(["√32 in its simplest form is…", "√32 في أبسط صورة…"], C4("4√2", "2√8", "16√2", "8√2"),
            ["32 = 16 × 2 and 16 is the largest perfect square factor: √32 = 4√2. (2√8 can still be simplified.)", "32 = 16 × 2 و١٦ أكبر عامل مربع كامل: √32 = 4√2. (2√8 يمكن تبسيطه أكثر.)"],
            ["Pack the 32 tiles into two perfect 4 × 4 squares.", "رتّب البلاطات الـ٣٢ في مربعين كاملين ٤ × ٤."]),
          Q(["∛24 in its simplest form is…", "∛24 في أبسط صورة…"], C4("2∛3", "3∛2", "8∛3", "2√6"),
            ["24 = 8 × 3 and 8 = 2³ is the largest perfect cube factor: ∛24 = 2∛3.", "24 = 8 × 3 و8 = 2³ أكبر عامل مكعب كامل: ∛24 = 2∛3."],
            ["Three 2 × 2 × 2 cubes make 24 small cubes.", "ثلاثة مكعبات ٢ × ٢ × ٢ تصنع ٢٤ مكعبًا صغيرًا."]),
          Q(["2√3 + 5√27 − √48 = ?", "2√3 + 5√27 − √48 = ؟"], C4("13√3", "21√3", "7√3", "6√3"),
            ["√27 = 3√3 and √48 = 4√3, so 2√3 + 15√3 − 4√3 = 13√3.", "√27 = 3√3 و√48 = 4√3، إذن 2√3 + 15√3 − 4√3 = 13√3."],
            ["Turn every term into bags of √3, then count bags.", "حوّل كل حد إلى أكياس من √3 ثم عُدّ الأكياس."]),
          Q(["A triangle has perimeter √1440 cm and two sides √250 cm and √160 cm. BC = ?", "مثلث محيطه √1440 سم وطولا ضلعين فيه √250 سم و√160 سم، فإن BC = ؟"], C4("3√10", "9√10", "21√10", "√1030"),
            ["√250 = 5√10, √160 = 4√10, √1440 = 12√10, so BC = 12√10 − 9√10 = 3√10 cm. (Subtracting under the root, √1030, is wrong.)", "√250 = 5√10 و√160 = 4√10 و√1440 = 12√10، إذن BC = 12√10 − 9√10 = 3√10 سم. (الطرح تحت الجذر √1030 خطأ.)"],
            ["All three lengths are bags of √10: 12 bags minus 9 bags.", "الأطوال الثلاثة أكياس من √10: ١٢ كيسًا ناقص ٩ أكياس."]),
          Q(["√2 × √8 = ?", "√2 × √8 = ؟"], C4("4", "√10", "16", "2√2"),
            ["√2 × √8 = √16 = 4.", "√2 × √8 = √16 = 4."],
            ["Multiply under one roof, then take the root.", "اضرب تحت سقف واحد ثم خذ الجذر."]),
          Q(["The side of Osama's 48 m² square seedbed in simplest form is…", "طول ضلع مشتل أسامة المربع الذي مساحته ٤٨ م² في أبسط صورة…"], [[eq("4√3") + " m", eq("4√3") + " م"], [eq("16√3") + " m", eq("16√3") + " م"], [eq("2√12") + " m", eq("2√12") + " م"], [eq("24") + " m", eq("24") + " م"]],
            ["√48 = √(16 × 3) = 4√3. 2√12 equals it but is not simplest, because 12 still contains 4.", "√48 = √(16 × 3) = 4√3، و2√12 يساويه لكنه ليس في أبسط صورة لأن ١٢ ما زال فيه ٤."],
            ["Take the biggest square out of 48 in one go: 16.", "أخرج أكبر مربع من ٤٨ مرة واحدة: ١٦."]),
          Q(["If x = √5 + √2 and y = √5 − √2, then x − y = ?", "إذا كان x = √5 + √2 وy = √5 − √2 فإن x − y = ؟"], C4("2√2", "2√5", "0", "√3"),
            ["(√5 + √2) − (√5 − √2) = √5 + √2 − √5 + √2 = 2√2.", "(√5 + √2) − (√5 − √2) = √5 + √2 − √5 + √2 = 2√2."],
            ["The √5 parts cancel; the √2 parts double.", "يختفي √5، ويتضاعف √2."]),
          Q(["∛3 × ∛−9 = ?", "∛3 × ∛−9 = ؟"], C4("−3", "3", "−9", "∛−12"),
            ["∛3 × ∛−9 = ∛(3 × −9) = ∛−27 = −3. Cube roots of negative numbers are real.", "∛3 × ∛−9 = ∛(3 × −9) = ∛−27 = −3، والجذر التكعيبي للعدد السالب عدد حقيقي."],
            ["(−3)³ = −27, so −3 is the cube root.", "(−3)³ = −27، إذن −3 هو الجذر التكعيبي."])
        ]
      },
      {
        id: "mprep2u1l5", icon: "⚡", page: 25,
        title: { en: "Laws of Exponents in Real Numbers", ar: "قوانين الأسس في الأعداد الحقيقية" },
        idea: {
          official: {
            en: [eq("aⁿ = a × a × … × a") + " (n times). Example: " + eq("√2 × √2 × √2 × √2 × √2 = (√2)⁵") + ", base √2 and exponent 5.",
              eq("(−a)ⁿ = aⁿ") + " for even n and " + eq("(−a)ⁿ = −aⁿ") + " for odd n: " + eq("(−√5)⁴ = 25") + ", " + eq("(−√5)³ = −5√5") + ".",
              eq("a⁰ = 1") + " and " + eq("a⁻ⁿ = 1 ÷ aⁿ") + " for a ≠ 0: " + eq("(√3)⁻⁴ = 1 ÷ 9") + ".",
              "Same base: " + eq("aᵐ × aⁿ = aᵐ⁺ⁿ") + " and " + eq("aᵐ ÷ aⁿ = aᵐ⁻ⁿ") + ". Example: " + eq("2⁴ × 2⁶ = 2¹⁰") + ".",
              "Products and quotients: " + eq("(ab)ⁿ = aⁿbⁿ") + ", " + eq("(a ÷ b)ⁿ = aⁿ ÷ bⁿ") + ": " + eq("(3√2)² = 9 × 2 = 18") + ". But " + eq("(a + b)ⁿ ≠ aⁿ + bⁿ") + ".",
              "Book example: square side " + eq("3ˣ") + " with perimeter 20 gives " + eq("3ˣ = 5") + ", so the rectangle " + eq("3ˣ⁺¹ × 3 = 3ˣ × 9 = 45") + " cm²."],
            ar: [eq("aⁿ = a × a × … × a") + " (n مرة)، مثل " + eq("√2 × √2 × √2 × √2 × √2 = (√2)⁵") + "، الأساس √2 والأس ٥.",
              eq("(−a)ⁿ = aⁿ") + " إذا كان n زوجيًا و" + eq("(−a)ⁿ = −aⁿ") + " إذا كان n فرديًا: " + eq("(−√5)⁴ = 25") + " و" + eq("(−√5)³ = −5√5") + ".",
              eq("a⁰ = 1") + " و" + eq("a⁻ⁿ = 1 ÷ aⁿ") + " حيث a ≠ صفر، مثل " + eq("(√3)⁻⁴ = 1 ÷ 9") + ".",
              "عند تساوي الأساسات: " + eq("aᵐ × aⁿ = aᵐ⁺ⁿ") + " و" + eq("aᵐ ÷ aⁿ = aᵐ⁻ⁿ") + "، مثل " + eq("2⁴ × 2⁶ = 2¹⁰") + ".",
              "وللضرب والقسمة: " + eq("(ab)ⁿ = aⁿbⁿ") + " و" + eq("(a ÷ b)ⁿ = aⁿ ÷ bⁿ") + "، مثل " + eq("(3√2)² = 9 × 2 = 18") + "، لكن " + eq("(a + b)ⁿ ≠ aⁿ + bⁿ") + ".",
              "مثال الكتاب: مربع طول ضلعه " + eq("3ˣ") + " ومحيطه ٢٠ فإن " + eq("3ˣ = 5") + "، ومساحة المستطيل " + eq("3ˣ⁺¹ × 3 = 3ˣ × 9 = 45") + " سم²."]
          },
          story: {
            en: ["A toy factory in 10th of Ramadan City makes a safe plastic cube with edge " + eq("4√3") + " cm.",
              "Farida works out the volume as edge to the power 3: " + eq("(4√3)³ = 4³ × (√3)³") + ".",
              eq("4³ = 64") + " and " + eq("(√3)³ = √3 × √3 × √3 = 3√3") + ", so the volume is " + eq("64 × 3√3 = 192√3") + " cm³.",
              "That is about 332.6 cm³ of plastic for each toy.",
              "Farida smiles: the power of a product is the product of the powers."],
            ar: ["يصنع مصنع لعب في مدينة العاشر من رمضان مكعبًا من البلاستيك الآمن طول حرفه " + eq("4√3") + " سم.",
              "تحسب فريدة الحجم بأن ترفع طول الحرف للأس ٣: " + eq("(4√3)³ = 4³ × (√3)³") + ".",
              eq("4³ = 64") + " و" + eq("(√3)³ = √3 × √3 × √3 = 3√3") + "، إذن الحجم " + eq("64 × 3√3 = 192√3") + " سم³.",
              "أي نحو ٣٣٢٫٦ سم³ من البلاستيك لكل لعبة.",
              "تبتسم فريدة: قوة حاصل الضرب تساوي حاصل ضرب القوى."]
          }
        },
        words: [
          ["Power", "القوة", "aⁿ: the base a multiplied by itself n times.", "aⁿ: الأساس a مضروبًا في نفسه n مرة."],
          ["Base", "الأساس", "The number that is repeated in a power.", "العدد الذي يتكرر في القوة."],
          ["Exponent", "الأس", "How many times the base is multiplied.", "عدد مرات ضرب الأساس في نفسه."],
          ["Zero exponent", "الأس الصفري", "a⁰ = 1 for any real a ≠ 0.", "a⁰ = 1 لأي عدد حقيقي a ≠ صفر."],
          ["Negative exponent", "الأس السالب", "a⁻ⁿ = 1 ÷ aⁿ: the multiplicative inverse of aⁿ.", "a⁻ⁿ = 1 ÷ aⁿ: المعكوس الضربي للعدد aⁿ."]
        ],
        lab: { parts: [{ type: "mprep2_powers" }] },
        quiz: [
          Q(["(−√5)⁴ = ?", "(−√5)⁴ = ؟"], C4("25", "−25", "20", "5"),
            ["Even exponent: (−√5)⁴ = (√5)⁴ = (√5)² × (√5)² = 5 × 5 = 25.", "الأس زوجي: (−√5)⁴ = (√5)⁴ = (√5)² × (√5)² = 5 × 5 = 25."],
            ["Four minus signs pair up and vanish.", "أربع إشارات سالبة تتزاوج وتختفي."]),
          Q(["(−√5)³ = ?", "(−√5)³ = ؟"], C4("−5√5", "5√5", "−15", "−125"),
            ["Odd exponent: (−√5)³ = −(√5)³ = −(5 × √5) = −5√5.", "الأس فردي: (−√5)³ = −(√5)³ = −(5 × √5) = −5√5."],
            ["Three minus signs: one is left without a partner.", "ثلاث إشارات سالبة: تبقى واحدة بلا شريك."]),
          Q(["2⁴ × 2⁶ = ?", "2⁴ × 2⁶ = ؟"], C4("2¹⁰", "2²⁴", "4¹⁰", "2²"),
            ["Same base: keep 2 and add the exponents, 4 + 6 = 10.", "الأساسان متساويان: نكتب ٢ ونجمع الأسس 4 + 6 = 10."],
            ["Four 2s then six more 2s: ten 2s in a row.", "أربعة من ٢ ثم ستة أخرى: عشرة من ٢ متتالية."]),
          Q(["(3√2)² = ?", "(3√2)² = ؟"], C4("18", "12", "6", "36"),
            ["(ab)ⁿ = aⁿbⁿ: 3² × (√2)² = 9 × 2 = 18.", "(ab)ⁿ = aⁿbⁿ: 3² × (√2)² = 9 × 2 = 18."],
            ["Square each factor, then multiply.", "ربّع كل عامل ثم اضرب."]),
          Q(["(√3)⁻⁴ = ?", "(√3)⁻⁴ = ؟"], C4("1 ÷ 9", "9", "−9", "−1 ÷ 9"),
            ["(√3)⁻⁴ = 1 ÷ (√3)⁴ = 1 ÷ 9. A negative exponent gives an inverse, not a negative number.", "(√3)⁻⁴ = 1 ÷ (√3)⁴ = 1 ÷ 9، والأس السالب يعطي معكوسًا وليس عددًا سالبًا."],
            ["The minus sign in the exponent sends the power under the fraction bar.", "الإشارة السالبة في الأس ترسل القوة إلى المقام."]),
          Q(["A toy cube has edge 4√3 cm. Its volume is…", "مكعب لعبة طول حرفه 4√3 سم، فحجمه…"], [[eq("192√3") + " cm³", eq("192√3") + " سم³"], [eq("64√3") + " cm³", eq("64√3") + " سم³"], [eq("576") + " cm³", eq("576") + " سم³"], [eq("12√3") + " cm³", eq("12√3") + " سم³"]],
            ["(4√3)³ = 4³ × (√3)³ = 64 × 3√3 = 192√3 cm³.", "(4√3)³ = 4³ × (√3)³ = 64 × 3√3 = 192√3 سم³."],
            ["Farida cubes the 4 and the √3 separately, then multiplies.", "تكعّب فريدة ٤ و√3 كلًا على حدة ثم تضرب."]),
          Q(["If 3ˣ = 5, then 3ˣ⁺¹ × 3 = ?", "إذا كان 3ˣ = 5 فإن 3ˣ⁺¹ × 3 = ؟"], C4("45", "15", "25", "30"),
            ["3ˣ⁺¹ × 3 = 3ˣ × 3 × 3 = 5 × 9 = 45.", "3ˣ⁺¹ × 3 = 3ˣ × 3 × 3 = 5 × 9 = 45."],
            ["Split the power into the known part 3ˣ and extra 3s.", "قسّم القوة إلى الجزء المعلوم 3ˣ وثلاثات إضافية."]),
          Q(["The value of 10³ⁿ⁻⁶ when n = 2 is…", "قيمة 10³ⁿ⁻⁶ عندما n = 2 هي…"], C4("1", "10", "0", "100"),
            ["3 × 2 − 6 = 0, and 10⁰ = 1.", "3 × 2 − 6 = 0، و10⁰ = 1."],
            ["Zero exponent: no tens multiplied, the answer is 1, not 0.", "الأس صفر: لا عشرات مضروبة، والإجابة ١ وليست صفرًا."])
        ]
      }
    ]
  });

  /* ======================= UNIT 2 - ALGEBRA ======================= */
  U.units.push({
    id: "mprep2u2", num: 2, icon: "🧩", color: "green",
    title: { en: "Algebra", ar: "الجبر" },
    lessons: [
      {
        id: "mprep2u2l1", icon: "🎾", page: 33,
        title: { en: "Factorizing by Taking Out the Greatest Common Factor (GCF)", ar: "التحليل بإخراج العامل المشترك الأكبر" },
        idea: {
          official: {
            en: ["A polynomial has only positive whole exponents on its variables: monomial " + eq("−3xy") + ", binomial " + eq("4xy² + 2x") + ", trinomial " + eq("2x² + 3y + 8") + ".",
              "To factorize " + eq("6x² − 15x") + ": write " + eq("6x² = 2 × 3 × x × x") + " and " + eq("15x = 3 × 5 × x") + ". The GCF is " + eq("3x") + ".",
              "Divide by the GCF and write it outside the bracket: " + eq("6x² − 15x = 3x(2x − 5)") + ". Check by expanding.",
              "The GCF can be a bracket: " + eq("12x(x + y) − 18y(x + y) = 6(x + y)(2x − 3y)") + ", and " + eq("(x + 3)² − x − 3 = (x + 3)(x + 2)") + ".",
              "It also makes arithmetic easy: " + eq("19 × 23 + 19 × 27 = 19 × 50 = 950") + ".",
              "If " + eq("a × b = 0") + " then a = 0 or b = 0: " + eq("3x² + 6x = 0 ⇒ 3x(x + 2) = 0") + ", so the solution set is " + eq("{0, −2}") + "."],
            ar: ["كثيرة الحدود مقدار جبري أسس متغيراته أعداد صحيحة موجبة: وحيدة الحد " + eq("−3xy") + " وذات الحدين " + eq("4xy² + 2x") + " وذات الثلاثة حدود " + eq("2x² + 3y + 8") + ".",
              "لتحليل " + eq("6x² − 15x") + ": نكتب " + eq("6x² = 2 × 3 × x × x") + " و" + eq("15x = 3 × 5 × x") + "، فيكون العامل المشترك الأكبر " + eq("3x") + ".",
              "نقسم على ع.م.أ ونكتبه خارج القوس: " + eq("6x² − 15x = 3x(2x − 5)") + "، ونتحقق بفك القوس.",
              "قد يكون ع.م.أ قوسًا: " + eq("12x(x + y) − 18y(x + y) = 6(x + y)(2x − 3y)") + "، و" + eq("(x + 3)² − x − 3 = (x + 3)(x + 2)") + ".",
              "ويسهّل الحساب: " + eq("19 × 23 + 19 × 27 = 19 × 50 = 950") + ".",
              "إذا كان " + eq("a × b = 0") + " فإن a = 0 أو b = 0: " + eq("3x² + 6x = 0 ⇒ 3x(x + 2) = 0") + "، ومجموعة الحل " + eq("{0, −2}") + "."]
          },
          story: {
            en: ["Adam watches Egyptian squash champions and wonders about the court. Suppose its area is " + eq("4x² + 12x") + " m².",
              "Both terms share " + eq("4") + " and " + eq("x") + ", and nothing bigger, so the GCF is " + eq("4x") + ".",
              "Dividing gives " + eq("4x² ÷ 4x = x") + " and " + eq("12x ÷ 4x = 3") + ", so the area is " + eq("4x(x + 3)") + ".",
              "The court can be " + eq("4x") + " m by " + eq("(x + 3)") + " m. It cannot be 4x by 12x, because that gives 48x².",
              "Adam multiplies back to check: " + eq("4x × x + 4x × 3 = 4x² + 12x") + ". Match!"],
            ar: ["يشاهد آدم أبطال مصر في الإسكواش ويفكر في الملعب؛ لنفترض أن مساحته " + eq("4x² + 12x") + " م².",
              "يشترك الحدان في " + eq("4") + " و" + eq("x") + " ولا شيء أكبر، إذن ع.م.أ هو " + eq("4x") + ".",
              "بالقسمة: " + eq("4x² ÷ 4x = x") + " و" + eq("12x ÷ 4x = 3") + "، إذن المساحة " + eq("4x(x + 3)") + ".",
              "قد يكون بُعدا الملعب " + eq("4x") + " م و" + eq("(x + 3)") + " م، ولا يمكن أن يكونا 4x و12x لأن حاصل ضربهما 48x².",
              "يضرب آدم ليتحقق: " + eq("4x × x + 4x × 3 = 4x² + 12x") + "، تطابق!"]
          }
        },
        words: [
          ["Factorization", "التحليل", "Writing a polynomial as a product of factors.", "كتابة كثيرة الحدود على صورة حاصل ضرب عوامل."],
          ["Greatest common factor (GCF)", "العامل المشترك الأكبر (ع.م.أ)", "The largest factor shared by all the terms, e.g. 3x in 6x² − 15x.", "أكبر عامل مشترك بين جميع الحدود، مثل 3x في 6x² − 15x."],
          ["Polynomial", "كثيرة الحدود", "An algebraic expression whose variables have positive whole exponents.", "مقدار جبري أسس متغيراته أعداد صحيحة موجبة."],
          ["Monomial / binomial", "وحيدة الحد / ذات الحدين", "A polynomial of one term / of two terms.", "كثيرة حدود من حد واحد / من حدين."],
          ["Prime polynomial", "كثيرة الحدود الأولية", "A polynomial that cannot be factorized, like 2x + 5.", "كثيرة حدود لا يمكن تحليلها، مثل 2x + 5."]
        ],
        lab: { parts: [{ type: "mprep2_gcf" }] },
        quiz: [
          Q(["Factorize 6x² − 15x completely.", "حلّل 6x² − 15x تحليلًا تامًا."], C4("3x(2x − 5)", "x(6x − 15)", "3(2x² − 5x)", "3x(2x − 15)"),
            ["The GCF of 6x² and 15x is 3x; 6x² ÷ 3x = 2x and 15x ÷ 3x = 5.", "ع.م.أ للحدين 6x² و15x هو 3x، و6x² ÷ 3x = 2x و15x ÷ 3x = 5."],
            ["Take out everything both terms share: a 3 and an x.", "أخرج كل ما يشترك فيه الحدان: ٣ وx."]),
          Q(["The GCF of the terms of 12x² − 8x is…", "العامل المشترك الأكبر لحدود 12x² − 8x هو…"], C4("4x", "2x", "4", "4x²"),
            ["GCF of 12 and 8 is 4, and the smallest power of x is x¹: 4x. So 12x² − 8x = 4x(3x − 2).", "ع.م.أ للعددين ١٢ و٨ هو ٤، وأصغر قوة لـ x هي x: إذن 4x، و12x² − 8x = 4x(3x − 2)."],
            ["Biggest number in both, smallest power of x in both.", "أكبر عدد مشترك وأصغر قوة مشتركة لـ x."]),
          Q(["Use the GCF: 19 × 23 + 19 × 27 = ?", "باستخدام ع.م.أ: 19 × 23 + 19 × 27 = ؟"], C4("950", "900", "1000", "969"),
            ["19 × 23 + 19 × 27 = 19 × (23 + 27) = 19 × 50 = 950.", "19 × 23 + 19 × 27 = 19 × (23 + 27) = 19 × 50 = 950."],
            ["19 boxes of 23 plus 19 boxes of 27 is 19 boxes of 50.", "١٩ صندوقًا من ٢٣ مع ١٩ صندوقًا من ٢٧ هي ١٩ صندوقًا من ٥٠."]),
          Q(["37 × 163 − 37 × 26 − (37)² = ?", "37 × 163 − 37 × 26 − (37)² = ؟"], C4("3700", "6438", "3737", "370"),
            ["37 × (163 − 26 − 37) = 37 × 100 = 3700. (Writing +37 in the bracket gives 6438.)", "37 × (163 − 26 − 37) = 37 × 100 = 3700. (كتابة +37 داخل القوس تعطي 6438.)"],
            ["(37)² is 37 × 37, so the third term also gives 37 to the GCF.", "(37)² هي 37 × 37، فالحد الثالث أيضًا فيه ٣٧."]),
          Q(["Factorize 12x(x + y) − 18y(x + y).", "حلّل 12x(x + y) − 18y(x + y)."], C4("6(x + y)(2x − 3y)", "6(x + y)(2x + 3y)", "6x(x + y)(2 − 3y)", "(x + y)(12x + 18y)"),
            ["The GCF is 6(x + y); 12x ÷ 6 = 2x and 18y ÷ 6 = 3y, keeping the minus sign.", "ع.م.أ هو 6(x + y)، و12x ÷ 6 = 2x و18y ÷ 6 = 3y مع الاحتفاظ بإشارة الطرح."],
            ["Treat the bracket (x + y) like a single letter.", "تعامل مع القوس (x + y) كأنه حرف واحد."]),
          Q(["Factorize (x + 3)² − x − 3.", "حلّل (x + 3)² − x − 3."], C4("(x + 3)(x + 2)", "(x + 3)(x + 4)", "(x + 3)²", "x(x + 3)"),
            ["−x − 3 = −(x + 3), so (x + 3)² − (x + 3) = (x + 3)(x + 3 − 1) = (x + 3)(x + 2).", "−x − 3 = −(x + 3)، إذن (x + 3)² − (x + 3) = (x + 3)(x + 3 − 1) = (x + 3)(x + 2)."],
            ["Spot the hidden bracket, then take it out.", "اكتشف القوس المختبئ ثم أخرجه."]),
          Q(["The solution set of 3x² + 6x = 0 in R is…", "مجموعة حل المعادلة 3x² + 6x = 0 في ح هي…"], C4("{0, −2}", "{−2}", "{0, 2}", "{2}"),
            ["3x(x + 2) = 0, so 3x = 0 (x = 0) or x + 2 = 0 (x = −2). Dividing by x would lose the 0.", "3x(x + 2) = 0 إذن 3x = 0 (x = 0) أو x + 2 = 0 (x = −2)، والقسمة على x تُضيّع الحل صفر."],
            ["A product is zero only if one factor is zero.", "حاصل الضرب يساوي صفرًا فقط إذا كان أحد العاملين صفرًا."]),
          Q(["If x + 2y = 8 and 2x + y = 7, then 2x(x + 2y) + y(x + 2y) = ?", "إذا كان x + 2y = 8 و2x + y = 7 فإن 2x(x + 2y) + y(x + 2y) = ؟"], C4("56", "15", "64", "49"),
            ["Take out (x + 2y): (x + 2y)(2x + y) = 8 × 7 = 56.", "نُخرج (x + 2y): (x + 2y)(2x + y) = 8 × 7 = 56."],
            ["Factorize first and the numbers drop straight in.", "حلّل أولًا فتدخل الأعداد مباشرة."])
        ]
      },
      {
        id: "mprep2u2l2", icon: "📱", page: 39,
        title: { en: "Factorizing a Trinomial", ar: "تحليل المقدار الثلاثي" },
        idea: {
          official: {
            en: [eq("(x + 2)(x + 3) = x² + 5x + 6") + ": 6 is the product of 2 and 3, and 5 is their sum. Factorizing reverses this.",
              "For " + eq("x² + bx + c") + " find two integers with product c and sum b: " + eq("x² + 7x + 12 = (x + 3)(x + 4)") + ".",
              "If c > 0 both numbers have the sign of b: " + eq("x² − 6x + 8 = (x − 2)(x − 4)") + ". If c < 0 the signs differ and the larger one has the sign of b: " + eq("x² − 7x − 18 = (x − 9)(x + 2)") + ".",
              "For " + eq("ax² + bx + c") + " (a ≠ ±1) try factor pairs and check the middle term: " + eq("2x² + 7x + 6 = (2x + 3)(x + 2)") + ", since 4x + 3x = 7x.",
              "Take out the GCF first: " + eq("3x² + 6x − 72 = 3(x + 6)(x − 4)") + ".",
              "Solve by factorizing: " + eq("x² + 5x − 36 = 0 ⇒ (x − 4)(x + 9) = 0") + ", so " + eq("{4, −9}") + "."],
            ar: [eq("(x + 2)(x + 3) = x² + 5x + 6") + ": العدد ٦ حاصل ضرب ٢ و٣، والعدد ٥ مجموعهما، والتحليل عكس هذه العملية.",
              "لتحليل " + eq("x² + bx + c") + " نبحث عن عددين صحيحين حاصل ضربهما c ومجموعهما b: " + eq("x² + 7x + 12 = (x + 3)(x + 4)") + ".",
              "إذا كان c موجبًا فللعددين إشارة b: " + eq("x² − 6x + 8 = (x − 2)(x − 4)") + "، وإذا كان سالبًا اختلفت الإشارتان وأخذ الأكبر قيمةً مطلقة إشارة b: " + eq("x² − 7x − 18 = (x − 9)(x + 2)") + ".",
              "ولتحليل " + eq("ax² + bx + c") + " (a ≠ ±1) نجرب أزواج العوامل ونتحقق من الحد الأوسط: " + eq("2x² + 7x + 6 = (2x + 3)(x + 2)") + " لأن 4x + 3x = 7x.",
              "نُخرج ع.م.أ أولًا: " + eq("3x² + 6x − 72 = 3(x + 6)(x − 4)") + ".",
              "الحل بالتحليل: " + eq("x² + 5x − 36 = 0 ⇒ (x − 4)(x + 9) = 0") + "، ومجموعة الحل " + eq("{4, −9}") + "."]
          },
          story: {
            en: ["Seif's cousin designs phone screens. The screen must be 7 cm longer than it is wide, with area 120 cm².",
              "Width x, length x + 7: " + eq("x(x + 7) = 120") + ", so " + eq("x² + 7x − 120 = 0") + ".",
              "Two numbers with product −120 and sum 7: 15 and −8. So " + eq("(x + 15)(x − 8) = 0") + ".",
              "x = −15 is refused (a length cannot be negative), so the width is 8 cm and the length 15 cm.",
              "Check: 8 × 15 = 120 and 15 − 8 = 7. The screen fits!"],
            ar: ["ابن عم سيف يصمم شاشات الهواتف؛ يجب أن يزيد طول الشاشة على عرضها ٧ سم ومساحتها ١٢٠ سم².",
              "العرض x والطول x + 7: " + eq("x(x + 7) = 120") + " إذن " + eq("x² + 7x − 120 = 0") + ".",
              "عددان حاصل ضربهما −120 ومجموعهما ٧: ١٥ و−٨، إذن " + eq("(x + 15)(x − 8) = 0") + ".",
              "x = −15 مرفوض لأن الطول لا يكون سالبًا، إذن العرض ٨ سم والطول ١٥ سم.",
              "تحقق: 8 × 15 = 120 و15 − 8 = 7، الشاشة مناسبة!"]
          }
        },
        words: [
          ["Trinomial", "المقدار الثلاثي", "A polynomial of three terms, like x² + 5x + 6.", "كثيرة حدود من ثلاثة حدود مثل x² + 5x + 6."],
          ["Middle term", "الحد الأوسط", "The bx term; in (x + l)(x + m) it equals (l + m)x.", "الحد bx، وفي (x + l)(x + m) يساوي (l + m)x."],
          ["Constant term", "الحد المطلق", "The term c without x; in (x + l)(x + m) it equals lm.", "الحد c الخالي من x، وفي (x + l)(x + m) يساوي lm."],
          ["Quadratic equation", "معادلة الدرجة الثانية", "An equation like ax² + bx + c = 0 (a ≠ 0).", "معادلة على الصورة ax² + bx + c = 0 حيث a ≠ صفر."],
          ["Complete factorization", "التحليل التام", "Writing a polynomial as a product of prime polynomials.", "كتابة كثيرة الحدود على صورة حاصل ضرب كثيرات حدود أولية."]
        ],
        lab: { parts: [{ type: "mprep2_trinom" }] },
        quiz: [
          Q(["x² + 7x + 12 = ?", "x² + 7x + 12 = ؟"], C4("(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x − 3)(x − 4)"),
            ["3 × 4 = 12 and 3 + 4 = 7. The pair 2 and 6 has the right product but sum 8.", "3 × 4 = 12 و3 + 4 = 7، أما الزوج ٢ و٦ فحاصل ضربهما صحيح لكن مجموعهما ٨."],
            ["Hunt for the pair that multiplies to 12 and adds to 7.", "ابحث عن الزوج الذي ضربه ١٢ وجمعه ٧."]),
          Q(["x² − 6x + 8 = ?", "x² − 6x + 8 = ؟"], C4("(x − 2)(x − 4)", "(x + 2)(x + 4)", "(x − 1)(x − 8)", "(x + 2)(x − 4)"),
            ["Product +8, sum −6: both negative, −2 and −4.", "حاصل الضرب +٨ والمجموع −٦: العددان سالبان −٢ و−٤."],
            ["Positive product, negative sum: two negatives.", "ضرب موجب ومجموع سالب: عددان سالبان."]),
          Q(["x² + x − 12 = ?", "x² + x − 12 = ؟"], C4("(x + 4)(x − 3)", "(x − 4)(x + 3)", "(x + 6)(x − 2)", "(x + 12)(x − 1)"),
            ["Product −12, sum +1: different signs and the larger is positive: +4 and −3.", "حاصل الضرب −١٢ والمجموع +١: إشارتان مختلفتان والأكبر موجب: +٤ و−٣."],
            ["The bigger number wins the sign of the middle term.", "العدد الأكبر يأخذ إشارة الحد الأوسط."]),
          Q(["x² − 7x − 18 = ?", "x² − 7x − 18 = ؟"], C4("(x − 9)(x + 2)", "(x + 9)(x − 2)", "(x − 6)(x + 3)", "(x − 18)(x + 1)"),
            ["Product −18, sum −7: −9 and +2.", "حاصل الضرب −١٨ والمجموع −٧: −٩ و+٢."],
            ["Check: −9 × 2 = −18 and −9 + 2 = −7.", "تحقق: −9 × 2 = −18 و−9 + 2 = −7."]),
          Q(["2x² + 7x + 6 = ?", "2x² + 7x + 6 = ؟"], C4("(2x + 3)(x + 2)", "(2x + 2)(x + 3)", "(2x + 6)(x + 1)", "(2x + 1)(x + 6)"),
            ["Middle terms: (2x + 3)(x + 2) gives 4x + 3x = 7x. The others give 8x, 8x and 13x.", "الحد الأوسط: (2x + 3)(x + 2) يعطي 4x + 3x = 7x، أما الباقية فتعطي 8x و8x و13x."],
            ["Try each pair with the scissors method until the middle term is 7x.", "جرّب كل زوج بطريقة المقص حتى يصبح الحد الأوسط 7x."]),
          Q(["The solution set of x² + 5x − 36 = 0 in R is…", "مجموعة حل المعادلة x² + 5x − 36 = 0 في ح هي…"], C4("{4, −9}", "{−4, 9}", "{6, −6}", "{−4, −9}"),
            ["(x − 4)(x + 9) = 0, so x = 4 or x = −9.", "(x − 4)(x + 9) = 0 إذن x = 4 أو x = −9."],
            ["Each bracket set to zero gives one answer.", "كل قوس يساوي صفرًا يعطي حلًا."]),
          Q(["A screen is 7 cm longer than its width and has area 120 cm². Its dimensions are…", "شاشة طولها يزيد على عرضها ٧ سم ومساحتها ١٢٠ سم²، فبُعداها…"], [["8 cm and 15 cm", "٨ سم و١٥ سم"], ["10 cm and 12 cm", "١٠ سم و١٢ سم"], ["15 cm and 22 cm", "١٥ سم و٢٢ سم"], ["5 cm and 12 cm", "٥ سم و١٢ سم"]],
            ["x(x + 7) = 120 ⇒ x² + 7x − 120 = 0 ⇒ (x + 15)(x − 8) = 0, so x = 8 and the length is 15.", "x(x + 7) = 120 ⇒ x² + 7x − 120 = 0 ⇒ (x + 15)(x − 8) = 0، إذن x = 8 والطول ١٥."],
            ["10 × 12 is 120 too, but 12 is only 2 more than 10.", "10 × 12 = 120 أيضًا، لكن ١٢ تزيد على ١٠ بمقدار ٢ فقط."]),
          Q(["The solution set of 6x² − 13x + 6 = 0 in R is…", "مجموعة حل المعادلة 6x² − 13x + 6 = 0 في ح هي…"], C4("{3 ÷ 2, 2 ÷ 3}", "{−3 ÷ 2, −2 ÷ 3}", "{2, 3}", "{6, 1}"),
            ["(2x − 3)(3x − 2) = 0, so x = 3 ÷ 2 or x = 2 ÷ 3. Check the middle term: −4x − 9x = −13x.", "(2x − 3)(3x − 2) = 0 إذن x = 3 ÷ 2 أو x = 2 ÷ 3، وتحقق من الحد الأوسط: −4x − 9x = −13x."],
            ["Both roots are positive because the middle term is negative and the end is positive.", "الحلان موجبان لأن الحد الأوسط سالب والحد المطلق موجب."])
        ]
      },
      {
        id: "mprep2u2l3", icon: "🔺", page: 46,
        title: { en: "Factorizing Special Cases", ar: "تحليل حالات خاصة" },
        idea: {
          official: {
            en: ["A perfect square trinomial: first and last terms are perfect squares and the middle term is ±2 × their roots. " + eq("a² ± 2ab + b² = (a ± b)²") + ".",
              "Example: " + eq("4x² + 20x + 25") + ": " + eq("4x² = (2x)²") + ", " + eq("25 = 5²") + ", " + eq("2(2x)(5) = 20x") + ", so it is " + eq("(2x + 5)²") + ". But " + eq("x² − 6x − 9") + " is not (−9 is negative).",
              "Difference of two squares: " + eq("a² − b² = (a − b)(a + b)") + ", e.g. " + eq("9x⁴ − 16y² = (3x² − 4y)(3x² + 4y)") + ".",
              "Sum and difference of two cubes: " + eq("a³ + b³ = (a + b)(a² − ab + b²)") + " and " + eq("a³ − b³ = (a − b)(a² + ab + b²)") + ": " + eq("x³ − 27 = (x − 3)(x² + 3x + 9)") + ".",
              "Always take out the GCF first: " + eq("5x⁵ − 320x² = 5x²(x − 4)(x² + 4x + 16)") + ".",
              "Fast arithmetic: " + eq("99² − 1 = (99 − 1)(99 + 1) = 9800") + " and " + eq("57² + 2(57)(43) + 43² = 100² = 10000") + "."],
            ar: ["المقدار الثلاثي المربع الكامل: حداه الأول والأخير مربعان كاملان والحد الأوسط = ± ٢ × جذريهما: " + eq("a² ± 2ab + b² = (a ± b)²") + ".",
              "مثال: " + eq("4x² + 20x + 25") + ": " + eq("4x² = (2x)²") + " و" + eq("25 = 5²") + " و" + eq("2(2x)(5) = 20x") + "، إذن هو " + eq("(2x + 5)²") + "، أما " + eq("x² − 6x − 9") + " فليس مربعًا كاملًا (−9 سالب).",
              "الفرق بين مربعين: " + eq("a² − b² = (a − b)(a + b)") + "، مثل " + eq("9x⁴ − 16y² = (3x² − 4y)(3x² + 4y)") + ".",
              "مجموع مكعبين والفرق بينهما: " + eq("a³ + b³ = (a + b)(a² − ab + b²)") + " و" + eq("a³ − b³ = (a − b)(a² + ab + b²)") + "، مثل " + eq("x³ − 27 = (x − 3)(x² + 3x + 9)") + ".",
              "نُخرج ع.م.أ أولًا دائمًا: " + eq("5x⁵ − 320x² = 5x²(x − 4)(x² + 4x + 16)") + ".",
              "حساب سريع: " + eq("99² − 1 = (99 − 1)(99 + 1) = 9800") + " و" + eq("57² + 2(57)(43) + 43² = 100² = 10000") + "."]
          },
          story: {
            en: ["Mariam's class studies the Great Pyramid of Giza. Suppose its square base has area " + eq("x² + 6x + 9") + " m².",
              "She checks: " + eq("x²") + " is a square, " + eq("9 = 3²") + " is a square, and " + eq("2 × x × 3 = 6x") + " is the middle term.",
              "So the area is a perfect square: " + eq("(x + 3)²") + ", and each side of the base is " + eq("x + 3") + " m.",
              "The perimeter is " + eq("4(x + 3) = 4x + 12") + " m.",
              "Mariam smiles: the pyramid's base was a perfect square in every sense."],
            ar: ["يدرس فصل مريم هرم خوفو الأكبر بالجيزة؛ لنفترض أن مساحة قاعدته المربعة " + eq("x² + 6x + 9") + " م².",
              "تتحقق مريم: " + eq("x²") + " مربع كامل و" + eq("9 = 3²") + " مربع كامل و" + eq("2 × x × 3 = 6x") + " هو الحد الأوسط.",
              "إذن المساحة مربع كامل " + eq("(x + 3)²") + "، وطول ضلع القاعدة " + eq("x + 3") + " م.",
              "والمحيط " + eq("4(x + 3) = 4x + 12") + " م.",
              "تبتسم مريم: قاعدة الهرم مربع كامل بكل معنى الكلمة."]
          }
        },
        words: [
          ["Perfect square trinomial", "المقدار الثلاثي المربع الكامل", "A trinomial equal to (a ± b)², like x² + 6x + 9.", "مقدار ثلاثي يساوي (a ± b)²، مثل x² + 6x + 9."],
          ["Difference of two squares", "الفرق بين مربعين", "a² − b² = (a − b)(a + b).", "a² − b² = (a − b)(a + b)."],
          ["Sum of two cubes", "مجموع مكعبين", "a³ + b³ = (a + b)(a² − ab + b²).", "a³ + b³ = (a + b)(a² − ab + b²)."],
          ["Difference of two cubes", "الفرق بين مكعبين", "a³ − b³ = (a − b)(a² + ab + b²).", "a³ − b³ = (a − b)(a² + ab + b²)."],
          ["Sum of two squares", "مجموع مربعين", "x² + y² cannot be factorized in R.", "x² + y² لا يمكن تحليله في ح."]
        ],
        lab: { parts: [{ type: "mprep2_diffsq" }] },
        quiz: [
          Q(["4x² + 20x + 25 = ?", "4x² + 20x + 25 = ؟"], C4("(2x + 5)²", "(4x + 5)²", "(2x + 25)²", "(2x − 5)²"),
            ["4x² = (2x)², 25 = 5², and 2(2x)(5) = 20x, so it is (2x + 5)².", "4x² = (2x)² و25 = 5² و2(2x)(5) = 20x، إذن هو (2x + 5)²."],
            ["Root of the first, root of the last, check twice their product.", "جذر الأول وجذر الأخير، وتحقق من ضعف حاصل ضربهما."]),
          Q(["Which trinomial is a perfect square?", "أي المقادير الثلاثية الآتية مربع كامل؟"], C4("x² − 10x + 25", "x² − 6x − 9", "x² + 9x + 81", "5x² + 20x + 4"),
            ["x² − 10x + 25 = (x − 5)² since 2(x)(5) = 10x. −9 is negative; 2(x)(9) = 18x ≠ 9x; 5x² is not a perfect square.", "x² − 10x + 25 = (x − 5)² لأن 2(x)(5) = 10x، و−9 سالب، و2(x)(9) = 18x ≠ 9x، و5x² ليس مربعًا كاملًا."],
            ["Test the three conditions one by one.", "اختبر الشروط الثلاثة واحدًا تلو الآخر."]),
          Q(["What value of a makes x² + 14x + a a perfect square?", "ما قيمة a التي تجعل x² + 14x + a مربعًا كاملًا؟"], C4("49", "196", "14", "7"),
            ["a = (half of 14)² = 7² = 49, giving (x + 7)².", "a = (نصف ١٤)² = 7² = 49، فيصبح (x + 7)²."],
            ["Half the middle coefficient, then square it.", "نصف معامل الحد الأوسط ثم ربّعه."]),
          Q(["9x⁴ − 16y² = ?", "9x⁴ − 16y² = ؟"], C4("(3x² − 4y)(3x² + 4y)", "(3x − 4y)(3x + 4y)", "(3x² − 4y)²", "(9x² − 16y)(x² + y)"),
            ["9x⁴ = (3x²)² and 16y² = (4y)²: difference of two squares.", "9x⁴ = (3x²)² و16y² = (4y)²: فرق بين مربعين."],
            ["Root of each square, once with minus and once with plus.", "جذر كل مربع، مرة بالسالب ومرة بالموجب."]),
          Q(["x³ − 27 = ?", "x³ − 27 = ؟"], C4("(x − 3)(x² + 3x + 9)", "(x − 3)(x² − 3x + 9)", "(x − 3)³", "(x − 3)(x² + 9)"),
            ["a³ − b³ = (a − b)(a² + ab + b²) with a = x, b = 3.", "a³ − b³ = (a − b)(a² + ab + b²) حيث a = x وb = 3."],
            ["For a difference of cubes, the long bracket is all plus signs.", "في الفرق بين مكعبين يكون القوس الطويل كله موجبًا."]),
          Q(["Use factorization: 99² − 1 = ?", "باستخدام التحليل: 99² − 1 = ؟"], C4("9800", "9600", "10000", "9900"),
            ["(99 − 1)(99 + 1) = 98 × 100 = 9800.", "(99 − 1)(99 + 1) = 98 × 100 = 9800."],
            ["A difference of squares turns into an easy × 100.", "الفرق بين مربعين يتحول إلى ضرب سهل في ١٠٠."]),
          Q(["57² + 2(57)(43) + 43² = ?", "57² + 2(57)(43) + 43² = ؟"], C4("10000", "5098", "100", "9000"),
            ["It is (57 + 43)² = 100² = 10000. (57² + 43² alone is 5098.)", "هو (57 + 43)² = 100² = 10000. (57² + 43² وحدهما = 5098.)"],
            ["Spot the perfect square pattern and add first.", "اكتشف نمط المربع الكامل واجمع أولًا."]),
          Q(["If 4x² − 9y² = 115 and 2x − 3y = 5, then 2x + 3y = ?", "إذا كان 4x² − 9y² = 115 و2x − 3y = 5 فإن 2x + 3y = ؟"], C4("23", "110", "575", "120"),
            ["(2x − 3y)(2x + 3y) = 115, so 5(2x + 3y) = 115 and 2x + 3y = 23.", "(2x − 3y)(2x + 3y) = 115 إذن 5(2x + 3y) = 115 ومنها 2x + 3y = 23."],
            ["Factorize, substitute the known bracket, divide.", "حلّل وعوّض القوس المعلوم ثم اقسم."])
        ]
      },
      {
        id: "mprep2u2l4", icon: "🏛️", page: 53,
        title: { en: "Factorizing by Grouping", ar: "التحليل بالتقسيم" },
        idea: {
          official: {
            en: ["Method 1: group four terms in pairs, factorize each pair, then take out the common bracket: " + eq("3x² − 9x + xy − 3y = 3x(x − 3) + y(x − 3) = (x − 3)(3x + y)") + ".",
              "If a grouping gives no common bracket, regroup. " + eq("3x³ + 2x² − 3x − 2 = x²(3x + 2) − (3x + 2) = (3x + 2)(x − 1)(x + 1)") + ".",
              "For " + eq("ax² + bx + c") + ": find two numbers with product ac and sum b and split bx. " + eq("3x² + 8x + 4 = 3x² + 6x + 2x + 4 = (x + 2)(3x + 2)") + ".",
              "Method 2: a perfect square minus a square: " + eq("x² − 8xy + 16y² − 49 = (x − 4y)² − 7² = (x − 4y − 7)(x − 4y + 7)") + ".",
              "Completing the square adds " + eq("(half the x-coefficient)²") + ": " + eq("x² + 10x + 25 = (x + 5)²") + ". For " + eq("81x⁴ + 4") + " add and subtract " + eq("36x²") + ".",
              "Solve " + eq("x² − 8x + 3 = 0") + ": " + eq("x² − 8x + 16 = 13 ⇒ (x − 4)² = 13 ⇒ x = 4 ± √13") + "."],
            ar: ["الطريقة الأولى: نقسّم الحدود الأربعة إلى زوجين ونحلل كل زوج ثم نُخرج القوس المشترك: " + eq("3x² − 9x + xy − 3y = 3x(x − 3) + y(x − 3) = (x − 3)(3x + y)") + ".",
              "إذا لم يظهر قوس مشترك نعيد التقسيم: " + eq("3x³ + 2x² − 3x − 2 = x²(3x + 2) − (3x + 2) = (3x + 2)(x − 1)(x + 1)") + ".",
              "ولتحليل " + eq("ax² + bx + c") + " نبحث عن عددين حاصل ضربهما ac ومجموعهما b ونجزّئ bx: " + eq("3x² + 8x + 4 = 3x² + 6x + 2x + 4 = (x + 2)(3x + 2)") + ".",
              "الطريقة الثانية: مربع كامل ناقص مربع: " + eq("x² − 8xy + 16y² − 49 = (x − 4y)² − 7² = (x − 4y − 7)(x − 4y + 7)") + ".",
              "إكمال المربع بإضافة " + eq("(نصف معامل x)²") + ": " + eq("x² + 10x + 25 = (x + 5)²") + "، ولتحليل " + eq("81x⁴ + 4") + " نضيف ونطرح " + eq("36x²") + ".",
              "لحل " + eq("x² − 8x + 3 = 0") + ": " + eq("x² − 8x + 16 = 13 ⇒ (x − 4)² = 13 ⇒ x = 4 ± √13") + "."]
          },
          story: {
            en: ["Laila visits the Central Library of Cairo University. Suppose its plot has area " + eq("3x³ − 6x² + 4x − 8") + " m².",
              "She groups the terms in pairs: " + eq("(3x³ − 6x²) + (4x − 8)") + ".",
              "Each pair gives the same bracket: " + eq("3x²(x − 2) + 4(x − 2)") + ".",
              "Taking out the bracket: " + eq("(x − 2)(3x² + 4)") + ". The plot could be " + eq("(x − 2)") + " m by " + eq("(3x² + 4)") + " m.",
              "Laila checks by multiplying back, and the four terms appear again."],
            ar: ["تزور ليلى المكتبة المركزية بجامعة القاهرة؛ لنفترض أن مساحة أرضها " + eq("3x³ − 6x² + 4x − 8") + " م².",
              "تقسّم الحدود إلى زوجين: " + eq("(3x³ − 6x²) + (4x − 8)") + ".",
              "يعطي كل زوج القوس نفسه: " + eq("3x²(x − 2) + 4(x − 2)") + ".",
              "بإخراج القوس: " + eq("(x − 2)(3x² + 4)") + "، فقد يكون بُعدا الأرض " + eq("(x − 2)") + " م و" + eq("(3x² + 4)") + " م.",
              "تتحقق ليلى بالضرب فتعود الحدود الأربعة من جديد."]
          }
        },
        words: [
          ["Factorizing by grouping", "التحليل بالتقسيم", "Splitting terms into groups that share a common bracket.", "تقسيم الحدود إلى مجموعات يجمعها قوس مشترك."],
          ["Common bracket", "القوس المشترك", "A bracket that appears in every group, like (x − 2).", "قوس يظهر في كل مجموعة مثل (x − 2)."],
          ["Completing the square", "إكمال المربع", "Adding a term to make a perfect square trinomial, e.g. x² + 10x + 25.", "إضافة حد ليصبح المقدار مربعًا كاملًا، مثل x² + 10x + 25."],
          ["Splitting the middle term", "تجزئة الحد الأوسط", "Writing bx as two terms whose coefficients multiply to ac.", "كتابة bx على صورة حدين حاصل ضرب معامليهما ac."],
          ["Refused solution", "الحل المرفوض", "A solution that does not fit the problem, like a negative length.", "حل لا يناسب المسألة مثل طول سالب."]
        ],
        lab: { parts: [{ type: "mprep2_csq" }] },
        quiz: [
          Q(["ax + by + ay + bx = ?", "ax + by + ay + bx = ؟"], C4("(a + b)(x + y)", "(a + x)(b + y)", "(a − b)(x − y)", "ab(x + y)"),
            ["(ax + ay) + (bx + by) = a(x + y) + b(x + y) = (a + b)(x + y).", "(ax + ay) + (bx + by) = a(x + y) + b(x + y) = (a + b)(x + y)."],
            ["Pair the a-terms and the b-terms, then the bracket repeats.", "اجمع حدود a معًا وحدود b معًا فيتكرر القوس."]),
          Q(["3x³ + 2x² − 3x − 2 = ?", "3x³ + 2x² − 3x − 2 = ؟"], C4("(3x + 2)(x − 1)(x + 1)", "(3x + 2)(x² + 1)", "(3x − 2)(x − 1)(x + 1)", "(3x + 2)(x − 1)²"),
            ["x²(3x + 2) − (3x + 2) = (3x + 2)(x² − 1) = (3x + 2)(x − 1)(x + 1).", "x²(3x + 2) − (3x + 2) = (3x + 2)(x² − 1) = (3x + 2)(x − 1)(x + 1)."],
            ["Do not stop at x² − 1: it is a difference of squares.", "لا تتوقف عند x² − 1، فهو فرق بين مربعين."]),
          Q(["To factorize 3x² + 8x + 4 by grouping, split 8x into…", "لتحليل 3x² + 8x + 4 بالتقسيم نجزّئ 8x إلى…"], C4("6x + 2x", "4x + 4x", "3x + 5x", "12x − 4x"),
            ["ac = 3 × 4 = 12; the numbers with product 12 and sum 8 are 6 and 2.", "ac = 3 × 4 = 12، والعددان اللذان حاصل ضربهما ١٢ ومجموعهما ٨ هما ٦ و٢."],
            ["Product ac, sum b: the same hunt as before.", "حاصل ضرب ac ومجموع b: البحث نفسه كما سبق."]),
          Q(["x² + 16y² − 8xy − 49 = ?", "x² + 16y² − 8xy − 49 = ؟"], C4("(x − 4y − 7)(x − 4y + 7)", "(x + 4y − 7)(x + 4y + 7)", "(x − 4y − 7)²", "(x − 4y)(x + 4y − 49)"),
            ["(x² − 8xy + 16y²) − 49 = (x − 4y)² − 7², a difference of squares.", "(x² − 8xy + 16y²) − 49 = (x − 4y)² − 7²، فرق بين مربعين."],
            ["Group the perfect square, leave the 49 alone.", "اجمع المربع الكامل واترك ٤٩ وحده."]),
          Q(["To complete the square for x² + 10x, add…", "لإكمال المربع في x² + 10x نضيف…"], C4("25", "100", "10", "5"),
            ["(10 ÷ 2)² = 25, giving (x + 5)².", "(10 ÷ 2)² = 25 فيصبح (x + 5)²."],
            ["Two strips of 5 leave a 5 × 5 corner empty.", "شريطان عرض كل منهما ٥ يتركان ركنًا فارغًا ٥ × ٥."]),
          Q(["The solution set of x² − 8x + 3 = 0 in R is…", "مجموعة حل المعادلة x² − 8x + 3 = 0 في ح هي…"], C4("{4 − √13, 4 + √13}", "{4 − √19, 4 + √19}", "{−4 − √13, −4 + √13}", "{1, 3}"),
            ["x² − 8x = −3; add 16: (x − 4)² = 13, so x = 4 ± √13.", "x² − 8x = −3، نضيف ١٦: (x − 4)² = 13 إذن x = 4 ± √13."],
            ["Add the same 16 to both sides to keep the balance.", "أضف ١٦ نفسها للطرفين ليبقى الميزان متزنًا."]),
          Q(["To factorize 81x⁴ + 4 we add and subtract…", "لتحليل 81x⁴ + 4 نضيف ونطرح…"], C4("36x²", "18x²", "4x²", "324x²"),
            ["2 × √(81x⁴) × √4 = 2 × 9x² × 2 = 36x², giving (9x² + 2)² − (6x)².", "2 × √(81x⁴) × √4 = 2 × 9x² × 2 = 36x² فيصبح (9x² + 2)² − (6x)²."],
            ["Twice the product of the two roots completes the square.", "ضعف حاصل ضرب الجذرين يُكمل المربع."]),
          Q(["A glass box has dimensions x, (x − 2) and (2x − 1) m and volume 5 m³. Its dimensions are…", "صندوق زجاجي أبعاده x و(x − 2) و(2x − 1) م وحجمه ٥ م³، فأبعاده…"], [["0.5 m, 2.5 m, 4 m", "٠٫٥ م و٢٫٥ م و٤ م"], ["1 m, 3 m, 5 m", "١ م و٣ م و٥ م"], ["2 m, 3 m, 0 m", "٢ م و٣ م و٠ م"], ["3 m, 5 m, 9 m", "٣ م و٥ م و٩ م"]],
            ["2x³ − 5x² + 2x − 5 = 0 ⇒ (2x − 5)(x² + 1) = 0 ⇒ x = 2.5, giving 2.5, 0.5 and 4 (product 5).", "2x³ − 5x² + 2x − 5 = 0 ⇒ (2x − 5)(x² + 1) = 0 ⇒ x = 2.5، فالأبعاد ٢٫٥ و٠٫٥ و٤ (حاصل ضربها ٥)."],
            ["x² + 1 = 0 has no real solution, so it is refused.", "x² + 1 = 0 ليس لها حل حقيقي فتُرفض."])
        ]
      }
    ]
  });
})();
/* ---------- Prep 2 maths data, part B: Unit 3 Geometry, Unit 4 Statistics ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  function C4(a, b, c, d) { return [[eq(a), eq(a)], [eq(b), eq(b)], [eq(c), eq(c)], [eq(d), eq(d)]]; }
  function U4(u, ua, a, b, c, d) { return [[eq(a) + " " + u, eq(a) + " " + ua], [eq(b) + " " + u, eq(b) + " " + ua], [eq(c) + " " + u, eq(c) + " " + ua], [eq(d) + " " + u, eq(d) + " " + ua]]; }
  var U = E.MTHG.prep2;

  /* ======================= UNIT 3 - GEOMETRY ======================= */
  U.units.push({
    id: "mprep2u3", num: 3, icon: "📐", color: "orange",
    title: { en: "Geometry", ar: "الهندسة" },
    lessons: [
      {
        id: "mprep2u3l1", icon: "🌉", page: 62,
        title: { en: "Congruence", ar: "التطابق" },
        idea: {
          official: {
            en: ["Two segments are congruent if they are equal in length; two angles are congruent if they are equal in measure. The symbol is ≡.",
              "Two polygons are congruent if their corresponding sides are equal and their corresponding angles are equal. Name them in the same vertex order.",
              "For triangles, three elements including at least one side are enough. SSS: three sides. SAS: two sides and the included angle.",
              "ASA: two angles and the included side. AAS: two angles and a side that is not between them.",
              "RHS: two right-angled triangles with equal hypotenuses and one more equal side. Three equal angles (AAA) are NOT enough.",
              "Book example: " + eq("AB = AC") + ", D the midpoint of BC, " + eq("m∠B = 63°") + ". By SSS " + eq("△ADB ≡ △ADC") + ", so " + eq("m∠DAC = (180° − 126°) ÷ 2 = 27°") + "."],
            ar: ["تتطابق قطعتان مستقيمتان إذا تساوتا في الطول، وتتطابق زاويتان إذا تساوتا في القياس، ورمز التطابق ≡.",
              "يتطابق مضلعان إذا تساوت أطوال أضلاعهما المتناظرة وتساوت قياسات زواياهما المتناظرة، ونكتبهما بترتيب الرؤوس المتناظرة.",
              "يكفي في المثلثين تطابق ثلاثة عناصر منها ضلع على الأقل: ضلع ضلع ضلع (ثلاثة أضلاع)، وضلعان والزاوية المحصورة بينهما.",
              "زاويتان والضلع المرسوم بين رأسيهما، أو زاويتان وضلع غير محصور بينهما.",
              "وتر وضلع في مثلثين قائمي الزاوية. أما تساوي الزوايا الثلاث وحدها فلا يكفي للتطابق.",
              "مثال الكتاب: " + eq("AB = AC") + " وD منتصف BC و" + eq("m∠B = 63°") + "؛ بالأضلاع الثلاثة " + eq("△ADB ≡ △ADC") + "، إذن " + eq("m∠DAC = (180° − 126°) ÷ 2 = 27°") + "."]
          },
          story: {
            en: ["Tarek crosses a steel bridge over the Nile and counts the triangles in its frame. They all look exactly the same.",
              "Engineers make them congruent so each one carries an equal share of the load.",
              "Checking every side and angle of every triangle would take ages. Tarek learns that three well-chosen measurements are enough.",
              "If two bars and the angle between them match (SAS), the third bar is forced to match too.",
              "But three equal angles alone could belong to a small model bridge and the real one: same shape, different size."],
            ar: ["يعبر طارق جسرًا حديديًا فوق النيل ويعد المثلثات في هيكله، فيجدها كلها متماثلة تمامًا.",
              "يجعلها المهندسون متطابقة حتى يحمل كل مثلث نصيبًا متساويًا من الحمل.",
              "قياس كل ضلع وكل زاوية في كل مثلث يستغرق وقتًا طويلًا، ويتعلم طارق أن ثلاثة قياسات مختارة جيدًا تكفي.",
              "إذا تطابق قضيبان والزاوية بينهما، فلا بد أن يتطابق القضيب الثالث أيضًا.",
              "لكن تساوي الزوايا الثلاث وحدها قد يحدث بين نموذج صغير للجسر والجسر الحقيقي: الشكل نفسه بحجم مختلف."]
          }
        },
        words: [
          ["Congruence", "التطابق", "Two figures are congruent if all corresponding sides and angles are equal.", "يتطابق شكلان إذا تساوت كل أضلاعهما وزواياهما المتناظرة."],
          ["Included angle", "الزاوية المحصورة", "The angle between two given sides.", "الزاوية المرسومة بين ضلعين معلومين."],
          ["Included side", "الضلع المحصور", "The side between the vertices of two given angles.", "الضلع الواصل بين رأسي زاويتين معلومتين."],
          ["Hypotenuse", "الوتر", "The side opposite the right angle; the longest side of a right-angled triangle.", "الضلع المقابل للزاوية القائمة، وهو أطول أضلاع المثلث القائم."],
          ["Corresponding elements", "العناصر المتناظرة", "Sides or angles that match each other in two congruent figures.", "الأضلاع أو الزوايا التي تقابل بعضها في شكلين متطابقين."]
        ],
        lab: { parts: [{ type: "mprep2_congr" }] },
        quiz: [
          Q(["Which of these is NOT a case of congruence of two triangles?", "أي مما يأتي ليس حالة من حالات تطابق مثلثين؟"], [["Three equal angles (AAA)", "تساوي الزوايا الثلاث"], ["Three equal sides (SSS)", "تساوي الأضلاع الثلاثة"], ["Two sides and the included angle (SAS)", "ضلعان والزاوية المحصورة بينهما"], ["Hypotenuse and a side in right triangles (RHS)", "وتر وضلع في مثلثين قائمين"]],
            ["Equal angles fix the shape but not the size, so the triangles may be different sizes.", "تساوي الزوايا يحدد الشكل لا الحجم، فقد يختلف المثلثان في الحجم."],
            ["A photo and its enlargement have the same angles but are not congruent.", "الصورة وتكبيرها لهما الزوايا نفسها لكنهما غير متطابقين."]),
          Q(["In △ABC and △DEF: AB = DE, ∠B ≡ ∠E, BC = EF. Which case proves congruence?", "في △ABC و△DEF: AB = DE و∠B ≡ ∠E وBC = EF، ما الحالة التي تثبت التطابق؟"], [["SAS", "ضلعان وزاوية محصورة"], ["SSS", "ثلاثة أضلاع"], ["ASA", "زاويتان وضلع محصور"], ["RHS", "وتر وضلع"]],
            ["∠B lies between sides AB and BC, so it is the included angle: SAS.", "الزاوية B محصورة بين الضلعين AB وBC، إذن الحالة ضلعان والزاوية المحصورة بينهما."],
            ["The angle sits right at the corner where the two equal sides meet.", "الزاوية تقع عند الركن الذي يلتقي فيه الضلعان المتساويان."]),
          Q(["Two angles and a side NOT between them are equal. The case is…", "تساوت زاويتان وضلع غير محصور بينهما، فالحالة…"], [["AAS", "زاويتان وضلع غير محصور"], ["ASA", "زاويتان وضلع محصور"], ["SAS", "ضلعان وزاوية محصورة"], ["SSS", "ثلاثة أضلاع"]],
            ["When the side is not between the two angles, the case is AAS (the book's fourth case).", "إذا لم يكن الضلع محصورًا بين الزاويتين فالحالة هي الرابعة في الكتاب: زاويتان وضلع غير محصور."],
            ["Two angles fix the third angle anyway, so any one side then fixes the size.", "زاويتان تحددان الثالثة، فيكفي أي ضلع لتحديد الحجم."]),
          Q(["AB = AC, D is the midpoint of BC and m∠B = 63°. m∠DAC = ?", "AB = AC وD منتصف BC وm∠B = 63°، فإن m∠DAC = ؟"], U4("", "", "27°", "54°", "63°", "117°"),
            ["△ADB ≡ △ADC (SSS) so ∠C = 63° and ∠BAC = 180° − 126° = 54°, which AD halves: 27°.", "△ADB ≡ △ADC (ثلاثة أضلاع) إذن ∠C = 63° و∠BAC = 180° − 126° = 54°، وAD ينصفها: 27°."],
            ["The tent pole down the middle splits the top angle into two equal halves.", "عمود الخيمة في المنتصف يقسم الزاوية العليا نصفين متساويين."]),
          Q(["EFGH is the image of ABCD by a rotation. BC = 6 cm and FG = 2y cm. y = ?", "EFGH صورة ABCD بالدوران، وBC = 6 سم وFG = 2y سم، فإن y = ؟"], C4("3", "6", "12", "4"),
            ["A rotation preserves lengths, so FG = BC: 2y = 6, y = 3.", "الدوران يحافظ على الأطوال، إذن FG = BC: 2y = 6 ومنها y = 3."],
            ["Turning a shape never stretches it.", "تدوير الشكل لا يمطّه أبدًا."]),
          Q(["△ABC ≡ △DEF, AB = 5 cm and m∠B = 40°. Which is true?", "△ABC ≡ △DEF وAB = 5 سم وm∠B = 40°، أي العبارات صحيحة؟"], [["DE = 5 cm and m∠E = 40°", "DE = 5 سم وm∠E = 40°"], ["EF = 5 cm and m∠F = 40°", "EF = 5 سم وm∠F = 40°"], ["DE = 5 cm and m∠D = 40°", "DE = 5 سم وm∠D = 40°"], ["DF = 5 cm and m∠E = 40°", "DF = 5 سم وm∠E = 40°"]],
            ["The vertex order matches: A↔D, B↔E, C↔F, so AB ↔ DE and ∠B ↔ ∠E.", "ترتيب الرؤوس متناظر: A↔D وB↔E وC↔F، إذن AB يناظر DE و∠B تناظر ∠E."],
            ["Read the names letter by letter like seats in two matching rows.", "اقرأ الاسمين حرفًا حرفًا كمقاعد في صفين متقابلين."]),
          Q(["To prove two triangles congruent it is enough to show…", "لإثبات تطابق مثلثين يكفي أن نثبت تطابق…"], [["three elements, including at least one side", "ثلاثة عناصر منها ضلع على الأقل"], ["all six elements", "العناصر الستة كلها"], ["any two elements", "أي عنصرين"], ["three angles", "ثلاث زوايا"]],
            ["A triangle has 6 elements, but three suitable ones including a side (SSS, SAS, ASA, AAS, RHS) are enough.", "للمثلث ٦ عناصر، لكن يكفي ثلاثة مناسبة منها ضلع على الأقل حسب الحالات الخمس."],
            ["Tarek saves time: three good measurements tell the whole story.", "يوفر طارق الوقت: ثلاثة قياسات جيدة تحكي القصة كلها."])
        ]
      },
      {
        id: "mprep2u3l2", icon: "🪜", page: 70,
        title: { en: "Pythagoras' Theorem and Its Converse", ar: "نظرية فيثاغورس وعكسها" },
        idea: {
          official: {
            en: ["In a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides: " + eq("c² = a² + b²") + ".",
              "Find the hypotenuse: legs 8 and 15 give " + eq("x² = 64 + 225 = 289") + ", so " + eq("x = 17") + ".",
              "Find a side: hypotenuse 25 and side 15 give " + eq("x² = 625 − 225 = 400") + ", so " + eq("x = 20") + " and the area is " + eq("½ × 15 × 20 = 150") + " cm².",
              "Converse: if " + eq("c² = a² + b²") + " for the longest side c, the triangle is right-angled. 7, 24, 25: " + eq("49 + 576 = 625") + ".",
              "If " + eq("c² < a² + b²") + " the triangle is acute (9, 10, 11: 121 < 181). If " + eq("c² > a² + b²") + " it is obtuse (3, 2√3, 3√3: 27 > 21).",
              "Ancient Egyptians made right angles with a rope of 12 equal knots forming a 3, 4, 5 triangle."],
            ar: ["في المثلث القائم الزاوية مساحة المربع المنشأ على الوتر تساوي مجموع مساحتي المربعين المنشأين على الضلعين الآخرين: " + eq("c² = a² + b²") + ".",
              "لإيجاد الوتر: الضلعان ٨ و١٥ يعطيان " + eq("x² = 64 + 225 = 289") + " إذن " + eq("x = 17") + ".",
              "لإيجاد ضلع: الوتر ٢٥ وضلع ١٥ يعطيان " + eq("x² = 625 − 225 = 400") + " إذن " + eq("x = 20") + " والمساحة " + eq("½ × 15 × 20 = 150") + " سم².",
              "العكس: إذا كان " + eq("c² = a² + b²") + " حيث c أطول الأضلاع فالمثلث قائم الزاوية، مثل ٧ و٢٤ و٢٥: " + eq("49 + 576 = 625") + ".",
              "إذا كان " + eq("c² < a² + b²") + " فالمثلث حاد الزوايا (٩ و١٠ و١١: 121 < 181)، وإذا كان " + eq("c² > a² + b²") + " فهو منفرج الزاوية (3 و2√3 و3√3: 27 > 21).",
              "استخدم قدماء المصريين حبلًا به ١٢ عقدة متساوية الأبعاد ليكوّنوا مثلثًا أضلاعه ٣ و٤ و٥ ويرسموا زاوية قائمة."]
          },
          story: {
            en: ["Habiba's father leans a 13-foot ladder against the wall to fix the balcony light. Its foot is 5 feet from the wall.",
              "Wall, ground and ladder make a right-angled triangle; the ladder is the hypotenuse.",
              eq("h² + 5² = 13²") + ", so " + eq("h² = 169 − 25 = 144") + " and " + eq("h = 12") + " feet.",
              "Habiba checks with the converse: " + eq("5² + 12² = 25 + 144 = 169 = 13²") + ". The wall really is upright.",
              "She remembers the 12-knot rope of the pyramid builders: 3, 4, 5 is the same idea, just smaller."],
            ar: ["يسند والد حبيبة سُلّمًا طوله ١٣ قدمًا على الحائط ليصلح مصباح الشرفة، وقاعدته على بعد ٥ أقدام من الحائط.",
              "الحائط والأرض والسلم تكوّن مثلثًا قائم الزاوية، والسلم هو الوتر.",
              eq("h² + 5² = 13²") + " إذن " + eq("h² = 169 − 25 = 144") + " ومنها " + eq("h = 12") + " قدمًا.",
              "تتحقق حبيبة بالعكس: " + eq("5² + 12² = 25 + 144 = 169 = 13²") + "، فالحائط رأسي فعلًا.",
              "وتتذكر حبل بناة الأهرام ذا العقد الاثنتي عشرة: ٣ و٤ و٥ هي الفكرة نفسها لكن أصغر."]
          }
        },
        words: [
          ["Pythagoras' theorem", "نظرية فيثاغورس", "In a right triangle, c² = a² + b² where c is the hypotenuse.", "في المثلث القائم c² = a² + b² حيث c هو الوتر."],
          ["Converse of Pythagoras", "عكس نظرية فيثاغورس", "If c² = a² + b² for the longest side c, the angle opposite c is right.", "إذا كان c² = a² + b² لأطول الأضلاع c فالزاوية المقابلة له قائمة."],
          ["Acute-angled triangle", "المثلث الحاد الزوايا", "All angles less than 90°: c² < a² + b².", "كل زواياه أقل من ٩٠°: c² < a² + b²."],
          ["Obtuse-angled triangle", "المثلث المنفرج الزاوية", "One angle more than 90°: c² > a² + b².", "إحدى زواياه أكبر من ٩٠°: c² > a² + b²."],
          ["Pythagorean triple", "ثلاثية فيثاغورس", "Three integers with c² = a² + b², like 3, 4, 5 and 5, 12, 13.", "ثلاثة أعداد صحيحة تحقق c² = a² + b² مثل ٣ و٤ و٥، و٥ و١٢ و١٣."]
        ],
        lab: { parts: [{ type: "mprep2_pyth" }] },
        quiz: [
          Q(["A 13-foot ladder leans on a wall with its foot 5 feet away. How high does it reach?", "سلم طوله ١٣ قدمًا يستند إلى حائط وقاعدته على بعد ٥ أقدام منه، فإلى أي ارتفاع يصل؟"], U4("ft", "قدمًا", "12", "8", "18", "√194"),
            ["h² = 13² − 5² = 169 − 25 = 144, h = 12. (Adding the squares, √194, treats 13 as a leg.)", "h² = 13² − 5² = 169 − 25 = 144 إذن h = 12. (جمع المربعين √194 يعامل ١٣ كأنه ضلع وليس وترًا.)"],
            ["The ladder is the longest side, so subtract to find a shorter side.", "السلم أطول الأضلاع، فنطرح لإيجاد ضلع أقصر."]),
          Q(["The legs of a right triangle are 8 cm and 15 cm. The hypotenuse is…", "طولا ضلعي القائمة في مثلث قائم ٨ سم و١٥ سم، فطول الوتر…"], U4("cm", "سم", "17", "23", "7", "√161"),
            ["c² = 64 + 225 = 289, c = 17 cm.", "c² = 64 + 225 = 289 إذن c = 17 سم."],
            ["Square, add, then take the root.", "ربّع واجمع ثم خذ الجذر."]),
          Q(["A right triangle has hypotenuse 25 cm and one leg 15 cm. Its area is…", "مثلث قائم طول وتره ٢٥ سم وطول أحد ضلعي القائمة ١٥ سم، فمساحته…"], U4("cm²", "سم²", "150", "300", "187.5", "375"),
            ["Other leg = √(625 − 225) = 20; area = ½ × 15 × 20 = 150 cm².", "الضلع الآخر = √(625 − 225) = 20، والمساحة = ½ × 15 × 20 = 150 سم²."],
            ["Use the two legs, not the hypotenuse, as base and height.", "استخدم ضلعي القائمة لا الوتر كقاعدة وارتفاع."]),
          Q(["Which lengths form a right-angled triangle?", "أي الأطوال الآتية تكوّن مثلثًا قائم الزاوية؟"], C4("7, 24, 25", "8, 13, 15", "30, 40, 60", "9, 10, 12"),
            ["7² + 24² = 49 + 576 = 625 = 25². For 8, 13, 15: 64 + 169 = 233 ≠ 225.", "7² + 24² = 49 + 576 = 625 = 25²، أما ٨ و١٣ و١٥: 64 + 169 = 233 ≠ 225."],
            ["Square the longest side and compare with the other two.", "ربّع أطول ضلع وقارن بمجموع مربعي الآخرين."]),
          Q(["A triangle has sides 9 cm, 10 cm and 11 cm. It is…", "مثلث أطوال أضلاعه ٩ سم و١٠ سم و١١ سم، فهو…"], [["acute-angled", "حاد الزوايا"], ["right-angled", "قائم الزاوية"], ["obtuse-angled", "منفرج الزاوية"], ["not a triangle", "ليس مثلثًا"]],
            ["11² = 121 < 9² + 10² = 181, so the largest angle is acute.", "11² = 121 < 9² + 10² = 181، إذن أكبر زاوية حادة."],
            ["The longest side is too short to make a right angle.", "أطول ضلع أقصر من أن يصنع زاوية قائمة."]),
          Q(["A triangle has sides 3, 2√3 and 3√3 cm. It is…", "مثلث أطوال أضلاعه 3 و2√3 و3√3 سم، فهو…"], [["obtuse-angled", "منفرج الزاوية"], ["right-angled", "قائم الزاوية"], ["acute-angled", "حاد الزوايا"], ["equilateral", "متساوي الأضلاع"]],
            ["(3√3)² = 27 > 3² + (2√3)² = 9 + 12 = 21, so it is obtuse.", "(3√3)² = 27 > 3² + (2√3)² = 9 + 12 = 21، إذن منفرج الزاوية."],
            ["The longest side is longer than a right angle needs: the angle opens wide.", "أطول ضلع أطول مما تحتاجه الزاوية القائمة فتنفرج الزاوية."]),
          Q(["A rectangular garden is 20 m by 15 m. The diagonal path is…", "حديقة مستطيلة بُعداها ٢٠ م و١٥ م، فطول الممر القطري…"], U4("m", "م", "25", "35", "√175", "30"),
            ["d² = 20² + 15² = 400 + 225 = 625, d = 25 m.", "d² = 20² + 15² = 400 + 225 = 625 إذن d = 25 م."],
            ["The diagonal is the hypotenuse of a 15-20-25 triangle (5 × 3-4-5).", "القطر وتر مثلث ١٥-٢٠-٢٥ (أي ٥ أمثال ٣-٤-٥)."]),
          Q(["XYZM: XY = 3, YZ = 4 (∠Y = 90°), ZM = 12, XM = 13 cm. The area of the concave XYZM is…", "XYZM فيه XY = 3 وYZ = 4 (∠Y = 90°) وZM = 12 وXM = 13 سم، فمساحة الشكل الرباعي المقعر XYZM…"], U4("cm²", "سم²", "24", "30", "36", "6"),
            ["XZ = 5; 5² + 12² = 169 = 13² so ∠XZM = 90°. Area = ½ × 5 × 12 − ½ × 3 × 4 = 30 − 6 = 24 cm².", "XZ = 5، و5² + 12² = 169 = 13² إذن ∠XZM = 90°، والمساحة = ½ × 5 × 12 − ½ × 3 × 4 = 30 − 6 = 24 سم²."],
            ["Big right triangle minus the small bite taken out of it.", "مثلث قائم كبير ناقص القطعة الصغيرة المقضومة منه."])
        ]
      },
      {
        id: "mprep2u3l3", icon: "🛣️", page: 78,
        title: { en: "Applications of Parallelism", ar: "تطبيقات على التوازي" },
        idea: {
          official: {
            en: ["Theorem 3-1: if parallel lines cut equal parts on one transversal, they cut equal parts on any other transversal.",
              "Theorem 3-2: the ray drawn from the midpoint of one side of a triangle parallel to another side bisects the third side.",
              "A midsegment joins the midpoints of two sides. Every triangle has three midsegments.",
              "Theorem 3-3: the midsegment is parallel to the third side and half its length: if D, E are the midpoints of AB, AC then " + eq("DE ∥ BC") + " and " + eq("DE = ½ BC") + ".",
              "Book example: △ABD right at D, AB = 13, BD = 5, so " + eq("AD = √(169 − 25) = 12") + "; E is the midpoint of AC and EF ∥ AD, so " + eq("EF = ½ × 12 = 6") + " cm.",
              "Using it twice: D, E midpoints of AB, AC and G the midpoint of DF with GH ∥ DE give " + eq("BC = 2DE = 4GH") + "."],
            ar: ["نظرية ١: إذا قطعت مستقيمات متوازية قاطعًا ما إلى أجزاء متساوية الطول فإنها تقطع أي قاطع آخر إلى أجزاء متساوية الطول.",
              "نظرية ٢: المستقيم المرسوم من منتصف ضلع في مثلث موازيًا أحد الضلعين الآخرين ينصف الضلع الثالث.",
              "القطعة المستقيمة الواصلة بين منتصفي ضلعين في مثلث، ولكل مثلث ثلاث قطع منها.",
              "نظرية ٣: القطعة الواصلة بين منتصفي ضلعين في مثلث توازي الضلع الثالث وطولها نصف طوله: إذا كان D وE منتصفي AB وAC فإن " + eq("DE ∥ BC") + " و" + eq("DE = ½ BC") + ".",
              "مثال الكتاب: △ABD قائم في D وAB = 13 وBD = 5 إذن " + eq("AD = √(169 − 25) = 12") + "، وE منتصف AC وEF ∥ AD إذن " + eq("EF = ½ × 12 = 6") + " سم.",
              "وباستخدامها مرتين: D وE منتصفا AB وAC، وG منتصف DF وGH ∥ DE، فيكون " + eq("BC = 2DE = 4GH") + "."]
          },
          story: {
            en: ["Seif helps his uncle paint the school wall using a folding A-shaped ladder.",
              "A horizontal bar joins the middles of the two legs, and it is 0.75 m long.",
              "The bar joins two midpoints, so it is a midsegment of the triangle made by the legs and the floor.",
              "The floor gap is twice the bar: " + eq("2 × 0.75 = 1.5") + " m, and the bar is parallel to the floor.",
              "Seif tells his uncle the feet are 1.5 m apart before he even measures. The tape agrees!"],
            ar: ["يساعد سيف عمه في طلاء سور المدرسة باستخدام سلم قابل للطي على شكل حرف A.",
              "يربط قضيب أفقي منتصفي ساقي السلم، وطوله ٠٫٧٥ م.",
              "القضيب يصل بين منتصفين، فهو القطعة الواصلة بين منتصفي ضلعين في المثلث المكوّن من الساقين والأرض.",
              "إذن المسافة على الأرض ضعف القضيب: " + eq("2 × 0.75 = 1.5") + " م، والقضيب يوازي الأرض.",
              "يخبر سيف عمه أن القدمين تبعدان ١٫٥ م قبل أن يقيس، ويؤكد شريط القياس ذلك!"]
          }
        },
        words: [
          ["Parallel lines", "المستقيمات المتوازية", "Lines in a plane that never meet.", "مستقيمات في مستوى واحد لا تتقاطع أبدًا."],
          ["Transversal", "القاطع", "A line that crosses two or more lines.", "مستقيم يقطع مستقيمين أو أكثر."],
          ["Midpoint", "منتصف القطعة", "The point that divides a segment into two equal parts.", "النقطة التي تقسم القطعة المستقيمة إلى جزأين متساويين."],
          ["Midsegment", "القطعة الواصلة بين منتصفي ضلعين", "The segment joining the midpoints of two sides of a triangle.", "القطعة المستقيمة الواصلة بين منتصفي ضلعين في مثلث."],
          ["Bisect", "ينصّف", "To divide into two equal parts.", "يقسم إلى جزأين متساويين."]
        ],
        lab: { parts: [{ type: "mprep2_midseg" }] },
        quiz: [
          Q(["D and E are the midpoints of AB and AC, and BC = 12 cm. DE = ?", "D وE منتصفا AB وAC، وBC = 12 سم، فإن DE = ؟"], U4("cm", "سم", "6", "24", "12", "3"),
            ["The midsegment is half the third side: DE = ½ × 12 = 6 cm.", "القطعة الواصلة بين المنتصفين نصف الضلع الثالث: DE = ½ × 12 = 6 سم."],
            ["Halfway up both sides, the gap is half as wide.", "في منتصف الضلعين تكون الفتحة نصف العرض."]),
          Q(["The bar joining the middles of an A-ladder's legs is 0.75 m. How far apart are the feet?", "القضيب الواصل بين منتصفي ساقي سلم على شكل A طوله ٠٫٧٥ م، فكم تبعد القدمان؟"], U4("m", "م", "1.5", "0.375", "0.75", "3"),
            ["The bar is a midsegment, so the base = 2 × 0.75 = 1.5 m.", "القضيب قطعة واصلة بين منتصفين، إذن القاعدة = 2 × 0.75 = 1.5 م."],
            ["Seif doubles the bar to get the floor gap.", "يضاعف سيف طول القضيب ليعرف المسافة على الأرض."]),
          Q(["Parallel lines cut AB = BC = CD on one transversal. On another transversal EF = (y + 1) cm and FG = 8 cm. y = ?", "مستقيمات متوازية تقطع قاطعًا فتكون AB = BC = CD، وعلى قاطع آخر EF = (y + 1) سم وFG = 8 سم، فإن y = ؟"], C4("7", "8", "9", "4"),
            ["Equal parts on one transversal mean equal parts on the other: y + 1 = 8, y = 7.", "الأجزاء المتساوية على قاطع تعني أجزاء متساوية على الآخر: y + 1 = 8 ومنها y = 7."],
            ["Equal steps on one ladder rail mean equal steps on the other.", "الدرجات المتساوية على قائم السلم الأول تعني درجات متساوية على الآخر."]),
          Q(["D is the midpoint of AB and DE ∥ BC meets AC at E. If AC = 10 cm then AE = ?", "D منتصف AB وDE ∥ BC يقطع AC في E، فإذا كان AC = 10 سم فإن AE = ؟"], U4("cm", "سم", "5", "10", "2.5", "20"),
            ["The ray from a midpoint parallel to a side bisects the third side: AE = ½ × 10 = 5 cm.", "المستقيم المرسوم من المنتصف موازيًا لضلع ينصف الضلع الثالث: AE = ½ × 10 = 5 سم."],
            ["Start halfway on one side and stay parallel: you land halfway on the other.", "ابدأ من المنتصف وسِر موازيًا فتصل إلى منتصف الضلع الآخر."]),
          Q(["D, E are midpoints of AB, AC; G is the midpoint of DF and GH ∥ DE meets EF at H. If GH = 3 cm, BC = ?", "D وE منتصفا AB وAC، وG منتصف DF وGH ∥ DE يقطع EF في H، فإذا كان GH = 3 سم فإن BC = ؟"], U4("cm", "سم", "12", "6", "9", "1.5"),
            ["In △FDE, GH = ½ DE so DE = 6; in △ABC, DE = ½ BC so BC = 12 cm.", "في △FDE يكون GH = ½ DE إذن DE = 6، وفي △ABC يكون DE = ½ BC إذن BC = 12 سم."],
            ["Halve twice going down, so double twice going up: 3 → 6 → 12.", "التنصيف مرتين نزولًا يعني المضاعفة مرتين صعودًا: ٣ ← ٦ ← ١٢."]),
          Q(["A triangle has sides 8, 10 and 12 cm. The perimeter of the triangle formed by its three midsegments is…", "مثلث أطوال أضلاعه ٨ و١٠ و١٢ سم، فمحيط المثلث المكوّن من القطع الثلاث الواصلة بين منتصفات أضلاعه…"], U4("cm", "سم", "15", "30", "60", "10"),
            ["Each midsegment is half a side: 4 + 5 + 6 = 15 cm, half of 30.", "كل قطعة نصف ضلع: 4 + 5 + 6 = 15 سم، أي نصف ٣٠."],
            ["The inner triangle is a half-size copy.", "المثلث الداخلي نسخة بنصف الحجم."]),
          Q(["△ABD is right-angled at D with AB = 13, BD = 5. E is the midpoint of AC and EF ∥ AD meets DC at F. EF = ?", "△ABD قائم في D وAB = 13 وBD = 5، وE منتصف AC وEF ∥ AD يقطع DC في F، فإن EF = ؟"], U4("cm", "سم", "6", "12", "6.5", "2.5"),
            ["AD = √(169 − 25) = 12; in △ADC, F is the midpoint of DC, so EF = ½ AD = 6 cm.", "AD = √(169 − 25) = 12، وفي △ADC تكون F منتصف DC، إذن EF = ½ AD = 6 سم."],
            ["Pythagoras finds AD, the midsegment halves it.", "فيثاغورس يعطي AD، والقطعة الواصلة تنصّفه."])
        ]
      },
      {
        id: "mprep2u3l4", icon: "🚁", page: 83,
        title: { en: "Medians of the Triangle", ar: "متوسطات المثلث" },
        idea: {
          official: {
            en: ["A median joins a vertex to the midpoint of the opposite side. Every triangle has three medians.",
              "Theorem 4-1: the three medians are concurrent at one point G, the centroid (the triangle's balance point).",
              "Theorem 4-2: the centroid divides each median in the ratio 2 : 1 from the vertex: " + eq("AG = 2GD") + ", " + eq("AG = ⅔ AD") + ", " + eq("GD = ⅓ AD") + ". If AG = 8 cm then " + eq("AD = 12") + " cm.",
              "Theorem 4-3: in a right-angled triangle the median from the right angle is half the hypotenuse: " + eq("BD = AD = DC = ½ AC") + ".",
              "Converse: if a median equals half the side it meets, the angle at its vertex is right. AD = 17 and BC = 34 ⇒ " + eq("m∠BAC = 90°") + ".",
              "Book example: AB = 24, AC = 18, right at A: " + eq("BC = 30") + ", " + eq("AD = 15") + ", " + eq("AG = ⅔ × 15 = 10") + " cm."],
            ar: ["المتوسط قطعة مستقيمة تصل رأس المثلث بمنتصف الضلع المقابل، ولكل مثلث ثلاثة متوسطات.",
              "نظرية ١: متوسطات المثلث تتقاطع في نقطة واحدة G هي نقطة تقاطع المتوسطات (نقطة اتزان المثلث).",
              "نظرية ٢: نقطة تقاطع المتوسطات تقسم كلًا منها بنسبة ٢ : ١ من جهة الرأس: " + eq("AG = 2GD") + " و" + eq("AG = ⅔ AD") + " و" + eq("GD = ⅓ AD") + "، فإذا كان AG = 8 سم فإن " + eq("AD = 12") + " سم.",
              "نظرية ٣: في المثلث القائم طول المتوسط الخارج من رأس القائمة يساوي نصف طول الوتر: " + eq("BD = AD = DC = ½ AC") + ".",
              "العكس: إذا كان طول المتوسط نصف طول الضلع المرسوم إليه فالزاوية عند رأسه قائمة: AD = 17 وBC = 34 ⇒ " + eq("m∠BAC = 90°") + ".",
              "مثال الكتاب: AB = 24 وAC = 18 والمثلث قائم في A: " + eq("BC = 30") + " و" + eq("AD = 15") + " و" + eq("AG = ⅔ × 15 = 10") + " سم."]
          },
          story: {
            en: ["Jana's brother builds a drone with three arms, each ending in an identical motor.",
              "The three motors are the vertices of a triangle. Where should the battery go so the drone flies level?",
              "Jana draws a line from each motor to the middle of the opposite side. The three lines meet at one point: the centroid.",
              "She measures one median, 9 cm: the centroid is 6 cm from the motor and 3 cm from the side, ratio 2 : 1.",
              "With the battery at the centroid, the drone hovers perfectly flat."],
            ar: ["يبني أخو جنى طائرة مسيّرة بثلاثة أذرع، في نهاية كل منها محرك مماثل للآخرين.",
              "المحركات الثلاثة رؤوس مثلث، فأين توضع البطارية حتى تطير الطائرة مستوية؟",
              "ترسم جنى خطًا من كل محرك إلى منتصف الضلع المقابل، فتلتقي الخطوط الثلاثة في نقطة واحدة: نقطة تقاطع المتوسطات.",
              "تقيس أحد المتوسطات فتجده ٩ سم، فالنقطة تبعد ٦ سم عن المحرك و٣ سم عن الضلع، بنسبة ٢ : ١.",
              "وعند وضع البطارية في هذه النقطة تحلّق الطائرة مستوية تمامًا."]
          }
        },
        words: [
          ["Median", "المتوسط", "A segment from a vertex to the midpoint of the opposite side.", "قطعة مستقيمة من رأس المثلث إلى منتصف الضلع المقابل."],
          ["Centroid", "نقطة تقاطع المتوسطات", "The point where the three medians meet; the balance point.", "النقطة التي تتقاطع فيها المتوسطات الثلاثة، وهي نقطة الاتزان."],
          ["Concurrent", "متقاطعة في نقطة", "Lines that all pass through one point.", "مستقيمات تمر جميعها بنقطة واحدة."],
          ["Ratio 2 : 1", "النسبة ٢ : ١", "The centroid is twice as far from the vertex as from the side's midpoint.", "بُعد نقطة التقاطع عن الرأس ضعف بُعدها عن منتصف الضلع."],
          ["Equilibrium point", "نقطة الاتزان", "A point where a flat triangle balances on a single support.", "النقطة التي يتزن عندها مثلث مسطح على دعامة واحدة."]
        ],
        lab: { parts: [{ type: "mprep2_median" }] },
        quiz: [
          Q(["G is the centroid of △ABC and AG = 8 cm. AD = ?", "G نقطة تقاطع متوسطات △ABC وAG = 8 سم، فإن AD = ؟"], U4("cm", "سم", "12", "16", "24", "4"),
            ["AG = ⅔ AD, so AD = 8 × 3 ÷ 2 = 12 cm.", "AG = ⅔ AD إذن AD = 8 × 3 ÷ 2 = 12 سم."],
            ["AG is 2 parts out of 3, so each part is 4 and the whole is 12.", "AG جزءان من ثلاثة، فالجزء ٤ والكل ١٢."]),
          Q(["G is the centroid and GE = 3.5 cm on median BE. BE = ?", "G نقطة تقاطع المتوسطات وGE = 3.5 سم على المتوسط BE، فإن BE = ؟"], U4("cm", "سم", "10.5", "7", "3.5", "5.25"),
            ["GE = ⅓ BE, so BE = 3 × 3.5 = 10.5 cm.", "GE = ⅓ BE إذن BE = 3 × 3.5 = 10.5 سم."],
            ["The short piece is one third of the median.", "القطعة القصيرة ثلث المتوسط."]),
          Q(["CF = 7.5 cm is a median and G the centroid. CG = ?", "CF = 7.5 سم متوسط وG نقطة تقاطع المتوسطات، فإن CG = ؟"], U4("cm", "سم", "5", "2.5", "3.75", "15"),
            ["CG = ⅔ × 7.5 = 5 cm.", "CG = ⅔ × 7.5 = 5 سم."],
            ["Two thirds of the way from the corner.", "ثلثا المسافة من الركن."]),
          Q(["△ABC is right-angled at A and BC = 30 cm. The median AD = ?", "△ABC قائم الزاوية في A وBC = 30 سم، فطول المتوسط AD = ؟"], U4("cm", "سم", "15", "30", "10", "7.5"),
            ["The median from the right angle is half the hypotenuse: 15 cm.", "المتوسط الخارج من رأس القائمة نصف الوتر: ١٥ سم."],
            ["D is the centre of a circle through A, B and C.", "D مركز دائرة تمر بالنقاط A وB وC."]),
          Q(["△ABC is right-angled at A, AB = 24 cm, AC = 18 cm, G the centroid. AG = ?", "△ABC قائم في A وAB = 24 سم وAC = 18 سم وG نقطة تقاطع المتوسطات، فإن AG = ؟"], U4("cm", "سم", "10", "15", "5", "20"),
            ["BC = √(576 + 324) = 30, AD = 15, AG = ⅔ × 15 = 10 cm.", "BC = √(576 + 324) = 30 وAD = 15 وAG = ⅔ × 15 = 10 سم."],
            ["Pythagoras, then half, then two thirds.", "فيثاغورس، ثم النصف، ثم الثلثان."]),
          Q(["AD is a median, AD = 17 cm, BC = 34 cm, AB = 16 cm. The area of △ABC is…", "AD متوسط، AD = 17 سم وBC = 34 سم وAB = 16 سم، فمساحة △ABC…"], U4("cm²", "سم²", "240", "480", "272", "136"),
            ["AD = ½ BC so ∠BAC = 90°; AC = √(34² − 16²) = √900 = 30; area = ½ × 16 × 30 = 240 cm².", "AD = ½ BC إذن ∠BAC = 90°، وAC = √(34² − 16²) = √900 = 30، والمساحة = ½ × 16 × 30 = 240 سم²."],
            ["The converse tells you the corner is square, then Pythagoras does the rest.", "العكس يخبرك أن الزاوية قائمة، ثم يكمل فيثاغورس الباقي."]),
          Q(["The centroid divides each median, from the vertex, in the ratio…", "نقطة تقاطع المتوسطات تقسم كل متوسط من جهة الرأس بنسبة…"], C4("2 : 1", "1 : 2", "1 : 1", "3 : 1"),
            ["AG : GD = 2 : 1 (theorem 4-2).", "AG : GD = 2 : 1 (نظرية ٢)."],
            ["Twice as far from the motor as from the side.", "ضعف البعد عن المحرك مقارنة بالبعد عن الضلع."]),
          Q(["A drone has three identical motors at the corners of a triangle. Its balance point is…", "طائرة مسيّرة لها ثلاثة محركات متماثلة في رؤوس مثلث، فنقطة اتزانها…"], [["the point of intersection of the medians", "نقطة تقاطع المتوسطات"], ["the midpoint of the longest side", "منتصف أطول ضلع"], ["any vertex", "أي رأس"], ["the midpoint of one median", "منتصف أحد المتوسطات"]],
            ["The centroid is the geometric centre and the equilibrium point of the triangle.", "نقطة تقاطع المتوسطات هي المركز الهندسي ونقطة اتزان المثلث."],
            ["Jana puts the battery where the three medians meet.", "تضع جنى البطارية حيث تلتقي المتوسطات الثلاثة."])
        ]
      },
      {
        id: "mprep2u3l5", icon: "⛺", page: 89,
        title: { en: "Isosceles Triangle", ar: "المثلث المتساوي الساقين" },
        idea: {
          official: {
            en: ["An isosceles triangle has two congruent sides (the legs). The angle between them is the vertex angle; the other two are the base angles.",
              "Theorem 5-1: the base angles of an isosceles triangle are congruent. Conversely, if two angles are congruent, the sides opposite them are congruent.",
              "Example: " + eq("AB = AC") + " and " + eq("m∠A = 40°") + " ⇒ " + eq("m∠B = m∠C = (180° − 40°) ÷ 2 = 70°") + ". An equilateral triangle is equiangular: each angle is 60°.",
              "The axis of symmetry of a segment is the perpendicular through its midpoint; every point on it is equidistant from the ends, and conversely.",
              "In an isosceles triangle the median from the vertex, the bisector of the vertex angle and the perpendicular to the base are the same line: its axis of symmetry.",
              "In a 30°-60°-90° triangle the side opposite 30° is half the hypotenuse: hypotenuse 4 cm ⇒ side 2 cm."],
            ar: ["المثلث المتساوي الساقين له ضلعان متطابقان (الساقان)، والزاوية بينهما زاوية الرأس، والزاويتان الأخريان زاويتا القاعدة.",
              "نظرية: زاويتا قاعدة المثلث المتساوي الساقين متطابقتان، وعكسيًا: إذا تطابقت زاويتان في مثلث تطابق الضلعان المقابلان لهما.",
              "مثال: " + eq("AB = AC") + " و" + eq("m∠A = 40°") + " ⇒ " + eq("m∠B = m∠C = (180° − 40°) ÷ 2 = 70°") + "، والمثلث المتساوي الأضلاع متساوي الزوايا وقياس كل زاوية ٦٠°.",
              "محور تماثل القطعة المستقيمة هو المستقيم العمودي عليها من منتصفها، وأي نقطة عليه على بعدين متساويين من طرفيها، والعكس صحيح.",
              "في المثلث المتساوي الساقين يكون المتوسط من الرأس ومنصف زاوية الرأس والعمود على القاعدة مستقيمًا واحدًا هو محور تماثله.",
              "في المثلث الثلاثيني الستيني طول الضلع المقابل للزاوية ٣٠° نصف طول الوتر: الوتر ٤ سم ⇒ الضلع ٢ سم."]
          },
          story: {
            en: ["Adel and Yasser set up a triangular tent on the beach in Dahab. Both sloping sides are 1.6 m and the floor is 2.5 m wide.",
              "Two equal sides: it is isosceles, so the pole from the top to the middle of the floor is its axis of symmetry and stands upright.",
              "The pole splits the tent into two right triangles with hypotenuse 1.6 m and base " + eq("2.5 ÷ 2 = 1.25") + " m.",
              eq("h = √(1.6² − 1.25²) = √0.9975 ≈ 1") + " m. Just enough to sit inside!",
              "Yasser notices that both bottom corners of the tent make equal angles with the sand."],
            ar: ["نصب عادل وصديقه ياسر خيمة مثلثة على شاطئ دهب؛ كل من جانبيها المائلين ١٫٦ م وعرض أرضيتها ٢٫٥ م.",
              "لها جانبان متساويان فهي متساوية الساقين، والعمود من قمتها إلى منتصف الأرضية محور تماثلها ويقف رأسيًا.",
              "يقسم العمود الخيمة إلى مثلثين قائمين وترهما ١٫٦ م وقاعدتهما " + eq("2.5 ÷ 2 = 1.25") + " م.",
              eq("h = √(1.6² − 1.25²) = √0.9975 ≈ 1") + " م، ارتفاع يكفي للجلوس داخلها!",
              "يلاحظ ياسر أن ركني الخيمة السفليين يصنعان زاويتين متساويتين مع الرمل."]
          }
        },
        words: [
          ["Isosceles triangle", "المثلث المتساوي الساقين", "A triangle with two congruent sides.", "مثلث فيه ضلعان متطابقان."],
          ["Equilateral triangle", "المثلث المتساوي الأضلاع", "A triangle with three congruent sides; each angle is 60°.", "مثلث أضلاعه الثلاثة متطابقة وقياس كل زاوية فيه ٦٠°."],
          ["Base angles", "زاويتا القاعدة", "The two angles at the ends of the base; they are congruent.", "الزاويتان عند طرفي القاعدة، وهما متطابقتان."],
          ["Axis of symmetry", "محور التماثل", "A line that divides a figure into two mirror-image halves.", "مستقيم يقسم الشكل إلى نصفين كل منهما صورة مرآة للآخر."],
          ["30°-60°-90° triangle", "المثلث الثلاثيني الستيني", "A right triangle whose side opposite 30° is half the hypotenuse.", "مثلث قائم طول الضلع المقابل لزاوية ٣٠° فيه نصف طول الوتر."]
        ],
        lab: { parts: [{ type: "mprep2_isos" }] },
        quiz: [
          Q(["AB = AC and m∠A = 40°. m∠B = ?", "AB = AC وm∠A = 40°، فإن m∠B = ؟"], C4("70°", "40°", "140°", "80°"),
            ["Base angles are equal: (180° − 40°) ÷ 2 = 70°.", "زاويتا القاعدة متساويتان: (180° − 40°) ÷ 2 = 70°."],
            ["What is left of 180° is shared equally by the two bottom corners.", "ما يتبقى من ١٨٠° يتقاسمه الركنان السفليان بالتساوي."]),
          Q(["AB = AC and m∠B = 50°. m∠A = ?", "AB = AC وm∠B = 50°، فإن m∠A = ؟"], C4("80°", "50°", "65°", "130°"),
            ["∠C = ∠B = 50°, so ∠A = 180° − 100° = 80°.", "∠C = ∠B = 50° إذن ∠A = 180° − 100° = 80°."],
            ["Two equal base angles first, then the top takes the rest.", "زاويتا القاعدة المتساويتان أولًا، ثم تأخذ القمة الباقي."]),
          Q(["Each angle of an equilateral triangle measures…", "قياس كل زاوية في المثلث المتساوي الأضلاع…"], C4("60°", "90°", "45°", "180°"),
            ["An equilateral triangle is equiangular: 180° ÷ 3 = 60°.", "المثلث المتساوي الأضلاع متساوي الزوايا: 180° ÷ 3 = 60°."],
            ["Three equal corners share 180°.", "ثلاثة أركان متساوية تتقاسم ١٨٠°."]),
          Q(["In a 30°-60°-90° triangle the hypotenuse is 4 cm. The side opposite 30° is…", "في مثلث ثلاثيني ستيني طول الوتر ٤ سم، فطول الضلع المقابل لزاوية ٣٠°…"], U4("cm", "سم", "2", "4", "8", "2√3"),
            ["The side opposite 30° is half the hypotenuse: 2 cm.", "الضلع المقابل لزاوية ٣٠° نصف الوتر: ٢ سم."],
            ["Half an equilateral triangle: the cut base is half a side.", "نصف مثلث متساوي الأضلاع: القاعدة المقطوعة نصف ضلع."]),
          Q(["X lies on the axis of symmetry of AB and XA = 5.4 cm. XB = ?", "X تقع على محور تماثل AB وXA = 5.4 سم، فإن XB = ؟"], U4("cm", "سم", "5.4", "10.8", "2.7", "5"),
            ["Any point on the axis of symmetry is equidistant from the ends: XB = XA = 5.4 cm.", "أي نقطة على محور التماثل على بعدين متساويين من الطرفين: XB = XA = 5.4 سم."],
            ["The mirror line sees both ends at the same distance.", "خط المرآة يرى الطرفين على البعد نفسه."]),
          Q(["A tent has sloping sides 1.6 m and floor 2.5 m. Its height is about…", "خيمة جانباها المائلان ١٫٦ م وعرض أرضيتها ٢٫٥ م، فارتفاعها تقريبًا…"], U4("m", "م", "1", "2", "1.6", "0.35"),
            ["The axis meets the floor at its midpoint: h = √(1.6² − 1.25²) = √0.9975 ≈ 1 m.", "المحور يقطع الأرضية في منتصفها: h = √(1.6² − 1.25²) = √0.9975 ≈ 1 م."],
            ["Half the floor, the side and the pole make a right triangle.", "نصف الأرضية والجانب والعمود تكوّن مثلثًا قائمًا."]),
          Q(["How many axes of symmetry does an isosceles (not equilateral) triangle have?", "كم محور تماثل للمثلث المتساوي الساقين (غير المتساوي الأضلاع)؟"], C4("1", "3", "0", "2"),
            ["Only one: the line from the vertex perpendicular to the base. Equilateral has 3, scalene has 0.", "محور واحد فقط: المستقيم من الرأس عموديًا على القاعدة، وللمتساوي الأضلاع ٣ وللمختلف الأضلاع صفر."],
            ["Fold the tent along its pole: the halves match. No other fold works.", "اطوِ الخيمة على عمودها فينطبق النصفان، ولا يصلح أي طي آخر."]),
          Q(["A colour wheel is made of 12 congruent isosceles triangles meeting at the centre. Each base angle is…", "عجلة ألوان مكوّنة من ١٢ مثلثًا متساوي الساقين متطابقة تلتقي رؤوسها في المركز، فقياس كل زاوية قاعدة…"], C4("75°", "30°", "60°", "150°"),
            ["Vertex angle = 360° ÷ 12 = 30°, so each base angle = (180° − 30°) ÷ 2 = 75°.", "زاوية الرأس = 360° ÷ 12 = 30°، إذن زاوية القاعدة = (180° − 30°) ÷ 2 = 75°."],
            ["Twelve slices of a full turn, then share the rest of 180°.", "اثنتا عشرة شريحة من دورة كاملة، ثم وزّع باقي ١٨٠°."])
        ]
      },
      {
        id: "mprep2u3l6", icon: "🛑", page: 97,
        title: { en: "Interior and Exterior Angles of Polygons", ar: "الزوايا الداخلة والخارجة للمضلعات" },
        idea: {
          official: {
            en: ["The diagonals from one vertex divide a convex polygon with n sides into " + eq("n − 2") + " triangles.",
              "So the sum of its interior angles is " + eq("(n − 2) × 180°") + ": pentagon " + eq("540°") + ", octagon " + eq("1080°") + ".",
              "The sum of the exterior angles (one at each vertex) of any convex polygon is " + eq("360°") + ".",
              "In a regular polygon: interior angle " + eq("(n − 2) × 180° ÷ n") + " and exterior angle " + eq("360° ÷ n") + ". Regular hexagon: 120° and 60°.",
              "Working back: interior angle 150° ⇒ " + eq("180n − 360 = 150n ⇒ n = 12") + "; exterior angle 24° ⇒ " + eq("n = 360 ÷ 24 = 15") + ".",
              "Number of diagonals " + eq("= n(n − 3) ÷ 2") + ": octagon " + eq("8 × 5 ÷ 2 = 20") + "; 35 diagonals ⇒ " + eq("n² − 3n − 70 = 0 ⇒ n = 10") + "."],
            ar: ["الأقطار المرسومة من رأس واحد تقسم المضلع المحدب ذا n ضلعًا إلى " + eq("n − 2") + " مثلثًا.",
              "إذن مجموع قياسات زواياه الداخلة " + eq("(n − 2) × 180°") + ": الخماسي " + eq("540°") + " والثماني " + eq("1080°") + ".",
              "مجموع قياسات الزوايا الخارجة (زاوية عند كل رأس) لأي مضلع محدب يساوي " + eq("360°") + ".",
              "في المضلع المنتظم: الزاوية الداخلة " + eq("(n − 2) × 180° ÷ n") + " والخارجة " + eq("360° ÷ n") + "، ففي السداسي المنتظم ١٢٠° و٦٠°.",
              "بالعكس: الزاوية الداخلة ١٥٠° ⇒ " + eq("180n − 360 = 150n ⇒ n = 12") + "، والخارجة ٢٤° ⇒ " + eq("n = 360 ÷ 24 = 15") + ".",
              "عدد الأقطار " + eq("= n(n − 3) ÷ 2") + ": للثماني " + eq("8 × 5 ÷ 2 = 20") + "، و٣٥ قطرًا ⇒ " + eq("n² − 3n − 70 = 0 ⇒ n = 10") + "."]
          },
          story: {
            en: ["Ziad visits the New Administrative Capital and sees the Octagon building: a regular octagon.",
              "From one corner he imagines diagonals to all the other corners: they cut the floor plan into " + eq("8 − 2 = 6") + " triangles.",
              "The angles add up to " + eq("6 × 180° = 1080°") + ", and the 8 equal corners share them: " + eq("1080° ÷ 8 = 135°") + " each.",
              "Walking round the outside, he turns " + eq("45°") + " at every corner, and after 8 corners he has turned " + eq("360°") + ", a full turn.",
              "Interior 135° plus exterior 45° makes a straight 180° at every corner."],
            ar: ["يزور زياد العاصمة الإدارية الجديدة ويرى مبنى الأوكتاجون على شكل ثماني منتظم.",
              "يتخيل أقطارًا من أحد الأركان إلى بقية الأركان، فتقسم المسقط إلى " + eq("8 − 2 = 6") + " مثلثات.",
              "مجموع الزوايا " + eq("6 × 180° = 1080°") + "، وتتقاسمه الأركان الثمانية المتساوية: " + eq("1080° ÷ 8 = 135°") + " لكل ركن.",
              "وعند السير حول المبنى يدور ٤٥° عند كل ركن، وبعد ٨ أركان يكون قد دار ٣٦٠°، دورة كاملة.",
              "الزاوية الداخلة ١٣٥° مع الخارجة ٤٥° تصنعان ١٨٠° عند كل ركن."]
          }
        },
        words: [
          ["Convex polygon", "المضلع المحدب", "A polygon whose interior angles are all less than 180°.", "مضلع كل زواياه الداخلة أقل من ١٨٠°."],
          ["Regular polygon", "المضلع المنتظم", "All sides equal in length and all interior angles equal.", "أضلاعه متساوية الطول وزواياه الداخلة متساوية القياس."],
          ["Interior angle", "الزاوية الداخلة", "The angle inside the polygon at a vertex.", "الزاوية داخل المضلع عند أحد رؤوسه."],
          ["Exterior angle", "الزاوية الخارجة", "The angle between one side and the extension of the next; interior + exterior = 180°.", "الزاوية بين ضلع وامتداد الضلع المجاور، والداخلة + الخارجة = ١٨٠°."],
          ["Diagonal", "القطر", "A segment joining two non-adjacent vertices; a polygon has n(n − 3) ÷ 2 of them.", "قطعة تصل رأسين غير متجاورين، وعددها n(n − 3) ÷ 2."]
        ],
        lab: { parts: [{ type: "mprep2_poly" }] },
        quiz: [
          Q(["The sum of the interior angles of a convex octagon is…", "مجموع قياسات الزوايا الداخلة للمضلع الثماني المحدب…"], C4("1080°", "1440°", "900°", "1260°"),
            ["(8 − 2) × 180° = 1080°.", "(8 − 2) × 180° = 1080°."],
            ["Six triangles of 180° fit inside an octagon.", "ستة مثلثات كل منها ١٨٠° داخل الثماني."]),
          Q(["Each interior angle of a regular octagon is…", "قياس كل زاوية داخلة في الثماني المنتظم…"], C4("135°", "45°", "120°", "140°"),
            ["1080° ÷ 8 = 135° (or 180° − 360° ÷ 8 = 180° − 45°).", "1080° ÷ 8 = 135° (أو 180° − 360° ÷ 8 = 180° − 45°)."],
            ["Ziad's Octagon corners are 135° each.", "أركان مبنى الأوكتاجون ١٣٥° لكل منها."]),
          Q(["A convex polygon has interior angles summing to 1440°. It has…", "مضلع محدب مجموع قياسات زواياه الداخلة ١٤٤٠°، فعدد أضلاعه…"], U4("sides", "أضلاع", "10", "8", "12", "9"),
            ["(n − 2) × 180 = 1440 ⇒ n − 2 = 8 ⇒ n = 10.", "(n − 2) × 180 = 1440 ⇒ n − 2 = 8 ⇒ n = 10."],
            ["1440 ÷ 180 = 8 triangles, and there are always 2 more sides than triangles.", "1440 ÷ 180 = 8 مثلثات، والأضلاع دائمًا تزيد ٢ على المثلثات."]),
          Q(["A regular polygon has interior angle 150°. It has…", "مضلع منتظم قياس زاويته الداخلة ١٥٠°، فعدد أضلاعه…"], U4("sides", "ضلعًا", "12", "10", "15", "6"),
            ["Exterior angle = 30°, so n = 360 ÷ 30 = 12.", "الزاوية الخارجة = 30° إذن n = 360 ÷ 30 = 12."],
            ["Use the exterior angle: it is quicker.", "استخدم الزاوية الخارجة فهي أسرع."]),
          Q(["A regular polygon has exterior angle 24°. It has…", "مضلع منتظم قياس زاويته الخارجة ٢٤°، فعدد أضلاعه…"], U4("sides", "ضلعًا", "15", "24", "12", "18"),
            ["n = 360° ÷ 24° = 15.", "n = 360° ÷ 24° = 15."],
            ["15 equal turns of 24° make one full turn.", "١٥ دورة متساوية كل منها ٢٤° تصنع دورة كاملة."]),
          Q(["The number of diagonals of a convex octagon is…", "عدد أقطار المضلع الثماني المحدب…"], C4("20", "40", "5", "28"),
            ["n(n − 3) ÷ 2 = 8 × 5 ÷ 2 = 20. (Forgetting ÷ 2 counts each diagonal twice: 40.)", "n(n − 3) ÷ 2 = 8 × 5 ÷ 2 = 20. (نسيان القسمة على ٢ يعد كل قطر مرتين: ٤٠.)"],
            ["Each corner sends 5 diagonals, but each diagonal has two ends.", "يخرج من كل ركن ٥ أقطار، لكن لكل قطر طرفان."]),
          Q(["A convex polygon has 35 diagonals. It has…", "مضلع محدب عدد أقطاره ٣٥، فعدد أضلاعه…"], U4("sides", "أضلاع", "10", "7", "35", "12"),
            ["n(n − 3) = 70 ⇒ n² − 3n − 70 = 0 ⇒ (n − 10)(n + 7) = 0 ⇒ n = 10 (−7 refused).", "n(n − 3) = 70 ⇒ n² − 3n − 70 = 0 ⇒ (n − 10)(n + 7) = 0 ⇒ n = 10 (و−7 مرفوض)."],
            ["Factorizing from Unit 2 meets geometry here.", "التحليل من الوحدة الثانية يلتقي بالهندسة هنا."]),
          Q(["A pentagonal locker has angles 100°, 125°, 125°, 100° and A. For it to fit a room corner, m∠A must be 90°. m∠A = ?", "خزانة على شكل خماسي زواياه ١٠٠° و١٢٥° و١٢٥° و١٠٠° وA، ولتناسب ركن الحجرة يجب أن تكون m∠A = 90°، فما m∠A؟"], [[eq("90°") + ": it fits", eq("90°") + ": تناسب الركن"], [eq("80°") + ": it does not fit", eq("80°") + ": لا تناسب"], [eq("100°") + ": it does not fit", eq("100°") + ": لا تناسب"], [eq("450°") + ": impossible", eq("450°") + ": مستحيل"]],
            ["Sum = (5 − 2) × 180° = 540°, so m∠A = 540° − 450° = 90°. The locker fits.", "المجموع = (5 − 2) × 180° = 540° إذن m∠A = 540° − 450° = 90°، فالخزانة تناسب الركن."],
            ["The carpenter's corner is exactly square.", "ركن النجار قائم تمامًا."])
        ]
      }
    ]
  });

  /* ======================= UNIT 4 - STATISTICS ======================= */
  U.units.push({
    id: "mprep2u4", num: 4, icon: "📊", color: "purple",
    title: { en: "Statistics", ar: "الإحصاء" },
    lessons: [
      {
        id: "mprep2u4l1", icon: "📈", page: 106,
        title: { en: "Ascending Cumulative Frequency Table and Its Graph", ar: "الجدول التكراري المتجمع الصاعد وتمثيله بيانيًا" },
        idea: {
          official: {
            en: ["A frequency table with intervals (10-, 20-, 30-, …) tells how many values fall in each interval, but not how many are 'less than' a value.",
              "The ascending cumulative frequency adds the frequencies one by one. Science marks of 28 students: frequencies 2, 10, 9, 5, 2 for 10-, 20-, 30-, 40-, 50-.",
              "Cumulative: less than 10 → 0, less than 20 → 2, less than 30 → " + eq("2 + 10 = 12") + ", less than 40 → 21, less than 50 → 26, less than 60 → 28.",
              "Plot the points (upper limit, cumulative frequency), starting at (10, 0), and join them with a smooth curve: the ascending cumulative frequency curve.",
              "The last cumulative frequency equals the total. Students with 20 or more: " + eq("28 − 2 = 26") + ".",
              "Percentages: if 85 of 100 swimmers finished in less than 45 s, that is " + eq("85 ÷ 100 × 100% = 85%") + "."],
            ar: ["الجدول التكراري ذو الفئات (10-، 20-، 30-، …) يبين عدد القيم في كل فئة، لكنه لا يبين مباشرة عدد القيم «الأقل من» قيمة ما.",
              "التكرار المتجمع الصاعد نجمع فيه التكرارات واحدًا بعد الآخر. درجات العلوم لـ٢٨ طالبًا: التكرارات ٢ و١٠ و٩ و٥ و٢ للفئات 10- و20- و30- و40- و50-.",
              "التكرار المتجمع: أقل من ١٠ ← صفر، أقل من ٢٠ ← ٢، أقل من ٣٠ ← " + eq("2 + 10 = 12") + "، أقل من ٤٠ ← ٢١، أقل من ٥٠ ← ٢٦، أقل من ٦٠ ← ٢٨.",
              "نمثل النقاط (الحد الأعلى للفئة، التكرار المتجمع) بدءًا من (١٠، صفر) ونصلها بمنحنى ممهد: المنحنى التكراري المتجمع الصاعد.",
              "آخر تكرار متجمع يساوي مجموع التكرارات، وعدد الحاصلين على ٢٠ درجة فأكثر " + eq("28 − 2 = 26") + ".",
              "النسب المئوية: إذا أنهى ٨٥ من ١٠٠ سبّاح السباق في أقل من ٤٥ ث فالنسبة " + eq("85 ÷ 100 × 100% = 85%") + "."]
          },
          story: {
            en: ["A hospital in Assiut records how long 200 patients wait, to plan appointments better.",
              "Hana, whose mother works there, adds the patients interval by interval: under 10 min, under 20, under 30…",
              "Each new number includes all the earlier ones, so the list only grows. That is the ascending cumulative frequency.",
              "She plots the totals and draws a rising curve. Reading it at 30 min shows how many waited less than half an hour.",
              "Dividing by 200 gives the percentage, and the manager knows exactly when the clinic gets busy."],
            ar: ["يسجل مستشفى في أسيوط مدة انتظار ٢٠٠ مريض ليحسّن جدول المواعيد.",
              "تجمع هنا، التي تعمل والدتها هناك، المرضى فئة بعد فئة: أقل من ١٠ دقائق، أقل من ٢٠، أقل من ٣٠…",
              "كل عدد جديد يشمل كل ما قبله، فتكبر القائمة دائمًا؛ هذا هو التكرار المتجمع الصاعد.",
              "ترسم المجاميع وتصل بينها بمنحنى صاعد، وقراءته عند ٣٠ دقيقة تبين عدد من انتظروا أقل من نصف ساعة.",
              "وبالقسمة على ٢٠٠ تحصل على النسبة المئوية، فيعرف المدير متى تزدحم العيادة."]
          }
        },
        words: [
          ["Frequency table with intervals", "الجدول التكراري ذو الفئات", "A table showing how many values fall in each interval.", "جدول يبين عدد القيم في كل فئة."],
          ["Ascending cumulative frequency", "التكرار المتجمع الصاعد", "The number of values less than the upper limit of an interval.", "عدد القيم الأقل من الحد الأعلى للفئة."],
          ["Upper limit", "الحد الأعلى للفئة", "The end value of an interval, e.g. 30 for the interval 20-.", "القيمة التي تنتهي عندها الفئة، مثل ٣٠ للفئة 20-."],
          ["Ascending cumulative curve", "المنحنى التكراري المتجمع الصاعد", "A smooth rising curve through (upper limit, cumulative frequency).", "منحنى ممهد صاعد يمر بالنقاط (الحد الأعلى، التكرار المتجمع)."],
          ["Total frequency", "مجموع التكرارات", "The sum of all frequencies; it equals the last cumulative frequency.", "مجموع كل التكرارات، ويساوي آخر تكرار متجمع."]
        ],
        lab: { parts: [{ type: "mprep2_cumfreq" }] },
        quiz: [
          Q(["Marks: 10- (2), 20- (10), 30- (9), 40- (5), 50- (2). The cumulative frequency 'less than 30' is…", "الدرجات: 10- (٢) و20- (١٠) و30- (٩) و40- (٥) و50- (٢). التكرار المتجمع «أقل من ٣٠»…"], C4("12", "10", "21", "2"),
            ["Less than 30 includes 10- and 20-: 2 + 10 = 12.", "أقل من ٣٠ تشمل الفئتين 10- و20-: 2 + 10 = 12."],
            ["Add every interval that ends at 30 or before.", "اجمع كل الفئات التي تنتهي عند ٣٠ أو قبلها."]),
          Q(["Same marks. The cumulative frequency 'less than 50' is…", "الدرجات نفسها. التكرار المتجمع «أقل من ٥٠»…"], C4("26", "28", "21", "5"),
            ["2 + 10 + 9 + 5 = 26.", "2 + 10 + 9 + 5 = 26."],
            ["Everything except the top interval 50-.", "كل الفئات ما عدا الفئة العليا 50-."]),
          Q(["Same marks. How many students got 20 marks or more?", "الدرجات نفسها. كم طالبًا حصلوا على ٢٠ درجة فأكثر؟"], C4("26", "2", "12", "28"),
            ["Total 28 minus those less than 20 (2): 28 − 2 = 26.", "المجموع ٢٨ ناقص الأقل من ٢٠ (٢): 28 − 2 = 26."],
            ["Count everyone, then remove the few below 20.", "عُدّ الجميع ثم احذف القلة الأقل من ٢٠."]),
          Q(["22 of 100 swimmers recorded less than 35 s. How many recorded 35 s or more?", "سجّل ٢٢ من ١٠٠ سبّاح أقل من ٣٥ ث، فكم سبّاحًا سجّلوا ٣٥ ث فأكثر؟"], C4("78", "22", "122", "65"),
            ["100 − 22 = 78 swimmers.", "100 − 22 = 78 سبّاحًا."],
            ["The rest of the pool finished at 35 s or slower.", "بقية السباحين أنهوا في ٣٥ ث أو أبطأ."]),
          Q(["85 of 100 swimmers recorded less than 45 s. The percentage is…", "سجّل ٨٥ من ١٠٠ سبّاح أقل من ٤٥ ث، فالنسبة المئوية…"], C4("85%", "15%", "45%", "0.85%"),
            ["85 ÷ 100 × 100% = 85%.", "85 ÷ 100 × 100% = 85%."],
            ["Out of 100, the count is already the percentage.", "من أصل ١٠٠ يكون العدد هو النسبة المئوية."]),
          Q(["The last ascending cumulative frequency in a table always equals…", "آخر تكرار متجمع صاعد في الجدول يساوي دائمًا…"], [["the sum of all frequencies", "مجموع التكرارات"], ["the largest frequency", "أكبر تكرار"], ["zero", "صفرًا"], ["the last frequency", "آخر تكرار"]],
            ["By then every frequency has been added.", "عندها تكون كل التكرارات قد جُمعت."],
            ["Hana's last total counts all 200 patients.", "آخر مجموع لدى هنا يعد المرضى الـ٢٠٠ كلهم."]),
          Q(["The first point plotted on the ascending cumulative curve for intervals 10-, 20-, … is…", "أول نقطة تُمثل على المنحنى المتجمع الصاعد للفئات 10- و20- و… هي…"], C4("(10, 0)", "(0, 10)", "(20, 2)", "(10, 2)"),
            ["Nobody is less than 10 (the lower limit of the first interval), so the curve starts at (10, 0).", "لا أحد أقل من ١٠ (الحد الأدنى للفئة الأولى)، فيبدأ المنحنى من (١٠، صفر)."],
            ["The curve starts on the ground before anyone is counted.", "يبدأ المنحنى من الأرض قبل عدّ أي أحد."])
        ]
      },
      {
        id: "mprep2u4l2", icon: "⚖️", page: 112,
        title: { en: "Measures of Central Tendency for a Frequency Table with Intervals", ar: "مقاييس النزعة المركزية للجدول التكراري ذي الفئات" },
        idea: {
          official: {
            en: ["Mean: " + eq("x̄ = Σ(f × xₘ) ÷ Σf") + ", where " + eq("xₘ = (lower + upper) ÷ 2") + " is the centre of each interval.",
              "Book example, speeds of 100 cars: centres 85, 95, 105, 115, 125 with frequencies 13, 17, 24, 32, 14. " + eq("Σ(f × xₘ) = 10670") + ", so " + eq("x̄ = 10670 ÷ 100 = 106.7") + " km/h.",
              "Median: find the order " + eq("n ÷ 2") + ", then read it on the ascending cumulative curve. For n = 40 the order is 20.",
              "Between 'less than 12' (14) and 'less than 18' (26): " + eq("median = 12 + 6 × (20 − 14) ÷ (26 − 14) = 15") + ".",
              "Mode: draw the histogram, take the tallest bar (modal interval) and join its top corners crosswise to the tops of the neighbouring bars. The crossing point projects onto the mode.",
              "If the mean is known you can find a missing frequency: " + eq("(2020 + 85k) ÷ (22 + k) = 90 ⇒ k = 8") + "."],
            ar: ["الوسط الحسابي: " + eq("x̄ = Σ(f × xₘ) ÷ Σf") + " حيث " + eq("xₘ = (الحد الأدنى + الحد الأعلى) ÷ 2") + " مركز الفئة.",
              "مثال الكتاب، سرعات ١٠٠ سيارة: المراكز ٨٥ و٩٥ و١٠٥ و١١٥ و١٢٥ بتكرارات ١٣ و١٧ و٢٤ و٣٢ و١٤، " + eq("Σ(f × xₘ) = 10670") + " إذن " + eq("x̄ = 10670 ÷ 100 = 106.7") + " كم/س.",
              "الوسيط: نوجد ترتيبه " + eq("n ÷ 2") + " ثم نقرؤه من المنحنى المتجمع الصاعد، فإذا كان n = 40 فالترتيب ٢٠.",
              "بين «أقل من ١٢» (١٤) و«أقل من ١٨» (٢٦): " + eq("الوسيط = 12 + 6 × (20 − 14) ÷ (26 − 14) = 15") + ".",
              "المنوال: نرسم المدرج التكراري ونأخذ أطول مستطيل (الفئة المنوالية) ونصل ركنيه العلويين تقاطعيًا برأسي المستطيلين المجاورين، ومسقط نقطة التقاطع هو المنوال.",
              "إذا علم الوسط أمكن إيجاد تكرار مجهول: " + eq("(2020 + 85k) ÷ (22 + k) = 90 ⇒ k = 8") + "."]
          },
          story: {
            en: ["Omar's uncle works for the traffic department on the Cairo-Alexandria desert road and records the speeds of 100 cars.",
              "Omar replaces each interval by its centre: every car in 100- counts as 105 km/h.",
              "He multiplies each centre by its frequency, adds the products (10670) and divides by 100: about 106.7 km/h on average.",
              "The tallest bar is 110-, so most cars drive between 110 and 120 km/h: that is where the mode is.",
              "The median splits the cars in half: 50 drove slower and 50 faster."],
            ar: ["يعمل خال عمر في إدارة المرور على طريق القاهرة الإسكندرية الصحراوي ويسجل سرعات ١٠٠ سيارة.",
              "يستبدل عمر كل فئة بمركزها: كل سيارة في الفئة 100- تُحسب ١٠٥ كم/س.",
              "يضرب كل مركز في تكراره ويجمع النواتج (١٠٦٧٠) ويقسم على ١٠٠: المتوسط نحو ١٠٦٫٧ كم/س.",
              "أطول مستطيل هو الفئة 110-، فمعظم السيارات تسير بين ١١٠ و١٢٠ كم/س، وهناك يقع المنوال.",
              "والوسيط يقسم السيارات نصفين: ٥٠ أبطأ منه و٥٠ أسرع."]
          }
        },
        words: [
          ["Arithmetic mean", "الوسط الحسابي", "Σ(f × xₘ) ÷ Σf for a table with intervals.", "Σ(f × xₘ) ÷ Σf في الجدول ذي الفئات."],
          ["Centre of an interval", "مركز الفئة", "(lower limit + upper limit) ÷ 2, e.g. 85 for 80-90.", "(الحد الأدنى + الحد الأعلى) ÷ 2، مثل ٨٥ للفئة ٨٠-٩٠."],
          ["Median", "الوسيط", "The middle value; its order is n ÷ 2 on the cumulative curve.", "القيمة التي في المنتصف، وترتيبها n ÷ 2 على المنحنى المتجمع."],
          ["Mode", "المنوال", "The most common value, estimated from the tallest bar of the histogram.", "القيمة الأكثر تكرارًا، وتُقدّر من أطول مستطيل في المدرج التكراري."],
          ["Modal interval", "الفئة المنوالية", "The interval with the largest frequency.", "الفئة ذات أكبر تكرار."]
        ],
        lab: { parts: [{ type: "mprep2_central" }] },
        quiz: [
          Q(["The centre of the interval 80-90 is…", "مركز الفئة ٨٠-٩٠ هو…"], C4("85", "80", "90", "170"),
            ["(80 + 90) ÷ 2 = 85.", "(80 + 90) ÷ 2 = 85."],
            ["Halfway between the two limits.", "في منتصف المسافة بين الحدين."]),
          Q(["Speeds: Σf = 100 and Σ(f × xₘ) = 10670. The mean speed is…", "السرعات: Σf = 100 وΣ(f × xₘ) = 10670، فالوسط الحسابي للسرعة…"], U4("km/h", "كم/س", "106.7", "1067", "105", "100"),
            ["x̄ = 10670 ÷ 100 = 106.7 km/h.", "x̄ = 10670 ÷ 100 = 106.7 كم/س."],
            ["Share the total speed equally among the 100 cars.", "وزّع مجموع السرعات بالتساوي على السيارات المئة."]),
          Q(["A table has Σf = 22 + k and Σ(f × xₘ) = 2020 + 85k. If the mean is 90, k = ?", "جدول فيه Σf = 22 + k وΣ(f × xₘ) = 2020 + 85k، فإذا كان الوسط ٩٠ فإن k = ؟"], C4("8", "40", "5", "22"),
            ["90(22 + k) = 2020 + 85k ⇒ 1980 + 90k = 2020 + 85k ⇒ 5k = 40 ⇒ k = 8.", "90(22 + k) = 2020 + 85k ⇒ 1980 + 90k = 2020 + 85k ⇒ 5k = 40 ⇒ k = 8."],
            ["Cross-multiply, then gather the k terms.", "اضرب تبادليًا ثم اجمع حدود k."]),
          Q(["For a frequency table with total frequency 40, the order of the median is…", "في جدول تكراري مجموع تكراراته ٤٠ يكون ترتيب الوسيط…"], C4("20", "20.5", "40", "10"),
            ["Order of the median = n ÷ 2 = 40 ÷ 2 = 20.", "ترتيب الوسيط = n ÷ 2 = 40 ÷ 2 = 20."],
            ["Half of the class stands on each side of the median.", "نصف الفصل على كل جانب من الوسيط."]),
          Q(["Less than 12 → 14, less than 18 → 26, median order 20. The median is…", "أقل من ١٢ ← ١٤، وأقل من ١٨ ← ٢٦، وترتيب الوسيط ٢٠، فالوسيط…"], C4("15", "20", "16", "14"),
            ["12 + 6 × (20 − 14) ÷ (26 − 14) = 12 + 6 × 6 ÷ 12 = 12 + 3 = 15.", "12 + 6 × (20 − 14) ÷ (26 − 14) = 12 + 6 × 6 ÷ 12 = 12 + 3 = 15."],
            ["20 is halfway from 14 to 26, so the median is halfway from 12 to 18.", "٢٠ في منتصف المسافة من ١٤ إلى ٢٦، فالوسيط في منتصف المسافة من ١٢ إلى ١٨."]),
          Q(["Modal interval 20-30 has frequency 14; the interval before has 8 and the one after has 10. The mode is about…", "الفئة المنوالية ٢٠-٣٠ تكرارها ١٤، والفئة السابقة ٨ واللاحقة ١٠، فالمنوال تقريبًا…"], C4("26", "25", "24", "30"),
            ["The crossing lines give 20 + 10 × (14 − 8) ÷ ((14 − 8) + (14 − 10)) = 20 + 10 × 6 ÷ 10 = 26.", "خطا التقاطع يعطيان 20 + 10 × (14 − 8) ÷ ((14 − 8) + (14 − 10)) = 20 + 10 × 6 ÷ 10 = 26."],
            ["The smaller neighbour is on the right, so the mode leans right of the centre 25.", "الجار الأصغر على اليمين، فيميل المنوال يمين المركز ٢٥."]),
          Q(["Intervals 0-, 10-, 20- (to 30) with frequencies 2, 5, 3. The mean is…", "الفئات 0- و10- و20- (حتى ٣٠) بتكرارات ٢ و٥ و٣، فالوسط الحسابي…"], C4("16", "15", "10", "160"),
            ["Centres 5, 15, 25: (2 × 5 + 5 × 15 + 3 × 25) ÷ 10 = (10 + 75 + 75) ÷ 10 = 16.", "المراكز ٥ و١٥ و٢٥: (2 × 5 + 5 × 15 + 3 × 25) ÷ 10 = (10 + 75 + 75) ÷ 10 = 16."],
            ["Multiply each centre by how many, add, then share.", "اضرب كل مركز في عدده واجمع ثم وزّع."])
        ]
      }
    ]
  });
})();
/* ---------- Prep 2 maths simulations (part A): numbers and algebra ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function f2(x) { return n(r2(x)); }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  var BL = "#3b82f6", GR = "#22c55e", OR = "#f97316", PU = "#a855f7", RE = "#ef4444", TE = "#14b8a6";
  /* signed number for canvas text: real minus sign, local digits */
  function sg(x) { return (x < 0 ? "−" : "") + n(Math.abs(x)); }
  function ctl(host, html) { var c = E.el("div", "sim-ctl"); host.appendChild(c); c.innerHTML = html; return c; }
  function bindSl(c, i, on) { var ins = c.querySelectorAll("input[type=range]"), sl = c.querySelectorAll(".slv"); function upd() { sl[i].textContent = sg(Number(ins[i].value)); } ins[i].addEventListener("input", function () { upd(); on(Number(ins[i].value)); }); upd(); return { set: function (v) { ins[i].value = v; upd(); } }; }

  /* =========================================================
     mprep2_roots - estimate irrational numbers on a number line
     ========================================================= */
  L.mprep2_roots = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a number to hunt, then drag the orange marker along the number line. The dashed square (or the readout) tells you if you are too small or too big.", "اختر العدد المطلوب ثم اسحب المؤشر البرتقالي على خط الأعداد، والمربع المنقط (أو القراءة) يخبرك هل أنت أصغر أم أكبر من المطلوب.")) + '<div class="seg" id="rtS"></div>';
    var S = K.make(host, 0.5, 330), mode = "sq", v = 1.5, drag = false, lo = 0, hi = 5;
    var M = {
      sq: { tgt: Math.sqrt(11), a: 11, p: 2, lab: "√11", b: [3, 4] },
      cb: { tgt: Math.cbrt(20), a: 20, p: 3, lab: "∛20", b: [2, 3] },
      phi: { tgt: (1 + Math.sqrt(5)) / 2, lab: "(1 + √5) ÷ 2", b: [1, 2] }
    };
    var c = ctl(host, '<div class="meter rt-out"></div>'), out = c.querySelector(".rt-out");
    var tick = L._goals(host, [t("Estimate √11 to within 0.05.", "قدّر √11 بخطأ لا يزيد على ٠٫٠٥."), t("Estimate ∛20 to within 0.05.", "قدّر ∛20 بخطأ لا يزيد على ٠٫٠٥."), t("Estimate the golden ratio (1 + √5) ÷ 2 to within 0.05.", "قدّر النسبة الذهبية (1 + √5) ÷ 2 بخطأ لا يزيد على ٠٫٠٥.")], done);
    K.seg(host, "#rtS", [["sq", "√11"], ["cb", "∛20"], ["phi", t("Golden ratio", "النسبة الذهبية")]], mode, function (m) { mode = m; upd(); });
    function X(x) { return 30 + (x - lo) / (hi - lo) * (S.W - 60); }
    function val() { var m = M[mode]; return mode === "phi" ? Math.pow(2 * v - 1, 2) : Math.pow(v, m.p); }
    function upd() {
      var m = M[mode], got = val(), goal = mode === "phi" ? 5 : m.a, diff = got - goal, close = Math.abs(v - m.tgt) <= 0.05;
      var lines = mode === "sq" ? [eq("9 < 11 < 16") + " ⇒ " + eq("3 < √11 < 4"), eq(f2(v) + "² = " + f2(got))]
        : mode === "cb" ? [eq("8 < 20 < 27") + " ⇒ " + eq("2 < ∛20 < 3"), eq(f2(v) + "³ = " + f2(got))]
          : [eq("4 < 5 < 9") + " ⇒ " + eq("2 < √5 < 3") + " ⇒ " + eq("1.5 < φ < 2"), t("If φ = ", "إذا كانت φ = ") + eq(f2(v)) + t(" then √5 = 2φ − 1 = ", " فإن √5 = 2φ − 1 = ") + eq(f2(2 * v - 1)) + t(", whose square is ", "ومربعه ") + eq(f2(got))];
      out.innerHTML = "<span>" + t("Hunting: ", "المطلوب: ") + "<b>" + eq(m.lab) + "</b></span><span>" + t("Your point: ", "نقطتك: ") + "<b>" + eq(f2(v)) + "</b></span>" + lines.map(function (s) { return "<span>" + s + "</span>"; }).join("") +
        "<span><b>" + (close ? t("Very close! ✓", "قريب جدًا! ✓") : diff < 0 ? t("Too small: move right", "أصغر من المطلوب: تحرك يمينًا") : t("Too big: move left", "أكبر من المطلوب: تحرك يسارًا")) + "</b></span>";
      if (close) tick(mode === "sq" ? 0 : mode === "cb" ? 1 : 2);
    }
    function setV(px) { v = clamp(Math.round(((px - 30) / (S.W - 60) * (hi - lo) + lo) * 100) / 100, lo, hi); upd(); }
    S.drag({ down: function (p) { if (p.y > S.H * 0.45) { drag = true; setV(p.x); return true; } return false; }, move: function (p) { if (drag) setV(p.x); }, up: function () { drag = false; }, hover: function (p) { return p.y > S.H * 0.45; } });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, y = H * 0.74, m = M[mode], i;
      x.clearRect(0, 0, W, H);
      x.fillStyle = "rgba(59,130,246,.14)"; x.fillRect(X(m.b[0]), y - 16, X(m.b[1]) - X(m.b[0]), 32);
      x.strokeStyle = C.ink; x.lineWidth = 2; x.beginPath(); x.moveTo(20, y); x.lineTo(W - 20, y); x.stroke();
      for (i = 0; i <= 50; i++) {
        var xx = X(i / 10), big = i % 10 === 0, mid = i % 5 === 0;
        x.strokeStyle = big ? C.ink : C.muted; x.lineWidth = big ? 2 : 1; x.beginPath(); x.moveTo(xx, y - (big ? 10 : mid ? 7 : 4)); x.lineTo(xx, y + (big ? 10 : mid ? 7 : 4)); x.stroke();
        if (big) K.txt(x, n(i / 10), xx, y + 22, { s: 13, c: C.ink });
      }
      var mx = X(v);
      x.fillStyle = OR; x.beginPath(); x.moveTo(mx, y - 6); x.lineTo(mx - 10, y - 24); x.lineTo(mx + 10, y - 24); x.closePath(); x.fill();
      K.rr(x, mx - 26, y - 50, 52, 22, 6); x.fillStyle = OR; x.fill(); K.txt(x, f2(v), mx, y - 39, { s: 13, c: "#fff" });
      /* square or cube picture: your size vs the target size */
      var unit = Math.min((H * 0.42) / Math.max(v, m.tgt, 0.5), 60), ox = 24, oy = 12;
      if (mode === "sq") {
        x.setLineDash([5, 4]); x.strokeStyle = C.muted; x.lineWidth = 2; x.strokeRect(ox, oy, m.tgt * unit, m.tgt * unit); x.setLineDash([]);
        x.fillStyle = "rgba(249,115,22,.35)"; x.fillRect(ox, oy, v * unit, v * unit); x.strokeStyle = OR; x.strokeRect(ox, oy, v * unit, v * unit);
        K.txt(x, t("area ", "المساحة ") + f2(v * v), ox + Math.max(v, m.tgt) * unit + 10, oy + 12, { s: 12, c: C.ink, a: "left" });
        K.txt(x, t("target 11", "المطلوب ١١"), ox + Math.max(v, m.tgt) * unit + 10, oy + 30, { s: 12, c: C.muted, a: "left" });
      } else {
        K.txt(x, mode === "cb" ? t("volume ", "الحجم ") + f2(Math.pow(v, 3)) + t("  (target 20)", "  (المطلوب ٢٠)") : t("golden rectangle: length ÷ width = ", "المستطيل الذهبي: الطول ÷ العرض = ") + f2(v), 24, 22, { s: 13, c: C.ink, a: "left" });
        if (mode === "phi") { var gw = Math.min(W * 0.3, 160), gh = gw / Math.max(v, 0.3); x.strokeStyle = TE; x.lineWidth = 2; x.strokeRect(24, 36, gw, Math.min(gh, H * 0.38)); }
        else { var e = Math.min(v * 18, H * 0.3); x.strokeStyle = OR; x.lineWidth = 2; x.strokeRect(30, 40, e, e); x.beginPath(); x.moveTo(30, 40); x.lineTo(30 + e * 0.4, 40 - e * 0.3); x.lineTo(30 + e * 1.4, 40 - e * 0.3); x.lineTo(30 + e, 40); x.moveTo(30 + e * 1.4, 40 - e * 0.3); x.lineTo(30 + e * 1.4, 40 + e * 0.7); x.lineTo(30 + e, 40 + e); x.stroke(); }
      }
    });
  };

  /* =========================================================
     mprep2_intervals - two intervals and the set operations
     ========================================================= */
  L.mprep2_intervals = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the dots of X and Y along the line. Tap a dot to switch it between closed ● and open ○. Choose an operation and read the result.", "اسحب نقاط X وY على الخط، واضغط على نقطة لتبدّلها بين مغلقة ● ومفتوحة ○، ثم اختر العملية واقرأ الناتج.")) + '<div class="seg" id="ivS"></div>';
    var S = K.make(host, 0.55, 360), lo = -6, hi = 10, op = "n", drag = null;
    var I = [{ a: -2, b: 2, ca: true, cb: false, col: BL, nm: "X" }, { a: 0, b: 5, ca: false, cb: true, col: OR, nm: "Y" }];
    var c = ctl(host, '<div class="meter iv-out"></div>'), out = c.querySelector(".iv-out");
    var tick = L._goals(host, [t("Make X = [−1, 3] and Y = [1, 4], then show X ∩ Y = [1, 3].", "اجعل X = [−1, 3] وY = [1, 4] ثم اعرض X ∩ Y = [1, 3]."), t("Make a union equal to [−3, 7[.", "كوّن اتحادًا يساوي [−3, 7[."), t("Make X ∩ Y = ∅ (no common numbers).", "اجعل X ∩ Y = ∅ (لا أعداد مشتركة)."), t("Show the complement X′.", "اعرض المكملة X′.")], done);
    var OPS = { u: "X ∪ Y", n: "X ∩ Y", d: "X − Y", c: "X′" };
    K.seg(host, "#ivS", [["u", "∪"], ["n", "∩"], ["d", "X − Y"], ["c", "X′"]], op, function (o) { op = o; upd(); });
    function inI(k, x) { var q = I[k]; return (x > q.a || (x === q.a && q.ca)) && (x < q.b || (x === q.b && q.cb)); }
    function inR(x) { var p = inI(0, x), q = inI(1, x); return op === "u" ? p || q : op === "n" ? p && q : op === "d" ? p && !q : !p; }
    function runs() {
      var pts = [], m = [], i, R = [];
      for (i = lo * 2; i <= hi * 2; i++) { pts.push(i / 2); m.push(inR(i / 2)); }
      for (i = 0; i < pts.length; i++) {
        if (!m[i]) continue;
        var j = i; while (j + 1 < pts.length && m[j + 1]) j++;
        var s = pts[i], e = pts[j];
        R.push({ a: i === 0 ? -Infinity : (s % 1 === 0 ? s : s - 0.5), ca: i !== 0 && s % 1 === 0, b: j === pts.length - 1 ? Infinity : (e % 1 === 0 ? e : e + 0.5), cb: j !== pts.length - 1 && e % 1 === 0 });
        i = j;
      }
      return R;
    }
    function num(x, loc) { return x === Infinity ? "∞" : x === -Infinity ? "−∞" : loc ? sg(x) : String(x); }
    function str(r, loc) { if (r.a === r.b) return "{" + num(r.a, loc) + "}"; return (r.ca ? "[" : "]") + num(r.a, loc) + ", " + num(r.b, loc) + (r.cb ? "]" : "["); }
    function setStr(R, loc) { return R.length ? R.map(function (r) { return str(r, loc); }).join(" ∪ ") : "∅"; }
    function upd() {
      var R = runs(), key = setStr(R, false);
      out.innerHTML = "<span>X = <b>" + eq(str(I[0], true)) + "</b></span><span>Y = <b>" + eq(str(I[1], true)) + "</b></span><span>" + eq(OPS[op]) + " = <b>" + eq(setStr(R, true)) + "</b></span>";
      if (op === "n" && key === "[1, 3]" && str(I[0]) === "[-1, 3]" && str(I[1]) === "[1, 4]") tick(0);
      if (op === "u" && key === "[-3, 7[") tick(1);
      if (op === "n" && key === "∅") tick(2);
      if (op === "c") tick(3);
    }
    function X(x) { return 34 + (x - lo) / (hi - lo) * (S.W - 68); }
    function rowY(k) { return S.H * [0.18, 0.42, 0.72][k]; }
    S.drag({
      down: function (p) {
        for (var k = 0; k < 2; k++) {
          if (Math.abs(p.y - rowY(k)) > 22) continue;
          var da = Math.abs(p.x - X(I[k].a)), db = Math.abs(p.x - X(I[k].b));
          if (Math.min(da, db) < 18) { drag = { k: k, e: da <= db ? "a" : "b", sx: p.x, moved: false }; return true; }
        }
        return false;
      },
      move: function (p) {
        if (!drag) return;
        if (Math.abs(p.x - drag.sx) > 6) drag.moved = true;
        if (!drag.moved) return;
        var q = I[drag.k], v = clamp(Math.round((p.x - 34) / (S.W - 68) * (hi - lo) + lo), lo + 1, hi - 1);
        if (drag.e === "a") q.a = Math.min(v, q.b - 1); else q.b = Math.max(v, q.a + 1);
        upd();
      },
      up: function () { if (drag && !drag.moved) { var q = I[drag.k]; if (drag.e === "a") q.ca = !q.ca; else q.cb = !q.cb; upd(); } drag = null; },
      hover: function (p) { for (var k = 0; k < 2; k++) if (Math.abs(p.y - rowY(k)) < 22 && Math.min(Math.abs(p.x - X(I[k].a)), Math.abs(p.x - X(I[k].b))) < 18) return true; return false; }
    });
    upd();
    function seg(x, a, b, ca, cb, y, col, C) {
      var xa = a === -Infinity ? 22 : X(a), xb = b === Infinity ? S.W - 22 : X(b);
      x.strokeStyle = col; x.lineWidth = 7; x.lineCap = "round"; x.beginPath(); x.moveTo(xa, y); x.lineTo(xb, y); x.stroke(); x.lineCap = "butt";
      if (a === -Infinity) { x.fillStyle = col; x.beginPath(); x.moveTo(14, y); x.lineTo(26, y - 8); x.lineTo(26, y + 8); x.fill(); } else end(x, xa, y, ca, col, C);
      if (b === Infinity) { x.fillStyle = col; x.beginPath(); x.moveTo(S.W - 14, y); x.lineTo(S.W - 26, y - 8); x.lineTo(S.W - 26, y + 8); x.fill(); } else end(x, xb, y, cb, col, C);
    }
    function end(x, px, y, closed, col, C) { x.beginPath(); x.arc(px, y, 8, 0, Math.PI * 2); x.fillStyle = closed ? col : C.card; x.fill(); x.lineWidth = 3; x.strokeStyle = col; x.stroke(); }
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, k, i;
      x.clearRect(0, 0, W, H);
      for (i = lo; i <= hi; i++) { x.strokeStyle = C.line; x.lineWidth = 1; x.beginPath(); x.moveTo(X(i), H * 0.08); x.lineTo(X(i), H * 0.86); x.stroke(); K.txt(x, sg(i), X(i), H * 0.93, { s: 11, c: i === 0 ? C.ink : C.muted }); }
      for (k = 0; k < 3; k++) { x.strokeStyle = C.muted; x.lineWidth = 1.5; x.beginPath(); x.moveTo(14, rowY(k)); x.lineTo(W - 14, rowY(k)); x.stroke(); }
      for (k = 0; k < 2; k++) { seg(x, I[k].a, I[k].b, I[k].ca, I[k].cb, rowY(k), I[k].col, C); K.txt(x, I[k].nm, 14, rowY(k) - 16, { s: 13, c: I[k].col, a: "left" }); }
      runs().forEach(function (r) { seg(x, r.a, r.b, r.ca, r.cb, rowY(2), GR, C); });
      K.txt(x, OPS[op], 14, rowY(2) - 18, { s: 13, c: GR, a: "left" });
    });
  };

  /* =========================================================
     mprep2_radmul - area model for (a + b√r)(c + d√r)
     ========================================================= */
  L.mprep2_radmul = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the root, then slide a, b, c, d to build (a + b√r)(c + d√r). Each cell of the rectangle is one product; red cells are negative.", "اختر الجذر ثم حرّك a وb وc وd لتكوّن (a + b√r)(c + d√r)؛ كل خلية في المستطيل حاصل ضرب واحد، والخلايا الحمراء سالبة.")) + '<div class="seg" id="rmS"></div>';
    var S = K.make(host, 0.5, 320), r = 5, a = 1, b = 1, c0 = 2, d = 1;
    var c = ctl(host, L._slider("a", -4, 4, 1, a) + L._slider("b", -4, 4, 1, b) + L._slider("c", -4, 4, 1, c0) + L._slider("d", -4, 4, 1, d) + '<div class="meter rm-out"></div>'), out = c.querySelector(".rm-out");
    var tick = L._goals(host, [t("Carpet: make (√5 + 1)(√5 − 1) and get the rational product 4.", "السجادة: كوّن (√5 + 1)(√5 − 1) واحصل على الناتج النسبي ٤."), t("Make the book's product (√7 − 1)(2√7 + 3) = 11 + √7.", "كوّن حاصل ضرب الكتاب (√7 − 1)(2√7 + 3) = 11 + √7."), t("Show that 2 − √3 times its inverse 2 + √3 is 1.", "بيّن أن 2 − √3 مضروبًا في معكوسه 2 + √3 يساوي ١."), t("Make 2√3(4 + √3) = 8√3 + 6.", "كوّن 2√3(4 + √3) = 8√3 + 6.")], done);
    K.seg(host, "#rmS", [["2", "√2"], ["3", "√3"], ["5", "√5"], ["7", "√7"]], "5", function (v) { r = Number(v); upd(); });
    bindSl(c, 0, function (v) { a = v; upd(); }); bindSl(c, 1, function (v) { b = v; upd(); }); bindSl(c, 2, function (v) { c0 = v; upd(); }); bindSl(c, 3, function (v) { d = v; upd(); });
    function term(k, root) { if (k === 0) return "0"; var s = root ? (Math.abs(k) === 1 ? "" : n(Math.abs(k))) + "√" + n(r) : n(Math.abs(k)); return (k < 0 ? "−" : "") + s; }
    function pair(p, q) { if (q === 0) return sg(p); if (p === 0) return term(q, true); return sg(p) + (q < 0 ? " − " : " + ") + term(Math.abs(q), true); }
    function expand() {
      var pc = [[a * c0, false], [a * d, true], [b * c0, true], [b * d * r, false]].filter(function (q) { return q[0] !== 0; });
      if (!pc.length) return "0";
      return pc.map(function (q, i) { var body = q[1] ? term(Math.abs(q[0]), true) : n(Math.abs(q[0])); return (i === 0 ? (q[0] < 0 ? "−" : "") : (q[0] < 0 ? " − " : " + ")) + body; }).join("");
    }
    function upd() {
      var P = a * c0 + b * d * r, Qr = a * d + b * c0;
      out.innerHTML = "<span>" + eq("(" + pair(a, b) + ")(" + pair(c0, d) + ")") + "</span><span>= " + eq(expand()) + "</span><span>= <b>" + eq(pair(P, Qr)) + "</b> ≈ " + eq(f2(P + Qr * Math.sqrt(r))) + "</span>" +
        (Qr === 0 && b !== 0 && d !== 0 ? "<span><b>" + t("Rational result: the √ parts cancelled (conjugates).", "ناتج نسبي: اختفى الجزء الجذري (مترافقان).") + "</b></span>" : "");
      if (r === 5 && P === 4 && Qr === 0 && b !== 0) tick(0);
      if (r === 7 && P === 11 && Qr === 1) tick(1);
      if (r === 3 && P === 1 && Qr === 0 && b !== 0 && d !== 0) tick(2);
      if (r === 3 && P === 6 && Qr === 8) tick(3);
    }
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, sr = Math.sqrt(r);
      x.clearRect(0, 0, W, H);
      var wx = [Math.abs(a), Math.abs(b) * sr], hy = [Math.abs(c0), Math.abs(d) * sr], tw = wx[0] + wx[1] || 1, th = hy[0] + hy[1] || 1;
      var u = Math.min((W - 120) / tw, (H - 70) / th, 70), ox = 70, oy = 40;
      var lw = [term(a, false), term(b, true)], lh = [term(c0, false), term(d, true)], sgx = [a, b], sgy = [c0, d];
      var px = ox, i, j;
      for (i = 0; i < 2; i++) {
        if (!wx[i]) continue;
        K.txt(x, lw[i], px + wx[i] * u / 2, oy - 14, { s: 13, c: C.ink });
        var py = oy;
        for (j = 0; j < 2; j++) {
          if (!hy[j]) continue;
          var neg = sgx[i] * sgy[j] < 0;
          x.fillStyle = neg ? "rgba(239,68,68,.25)" : "rgba(34,197,94,.25)"; x.fillRect(px, py, wx[i] * u, hy[j] * u);
          x.strokeStyle = neg ? RE : GR; x.lineWidth = 2; x.strokeRect(px, py, wx[i] * u, hy[j] * u);
          var pr = i === 0 && j === 0 ? sg(a * c0) : i === 1 && j === 1 ? sg(b * d * r) : term(i === 0 ? a * d : b * c0, true);
          if (wx[i] * u > 26 && hy[j] * u > 16) K.txt(x, pr, px + wx[i] * u / 2, py + hy[j] * u / 2, { s: 13, c: C.ink });
          if (i === 0 || !wx[0]) K.txt(x, lh[j], ox - 10, py + hy[j] * u / 2, { s: 13, c: C.ink, a: "right" });
          py += hy[j] * u;
        }
        px += wx[i] * u;
      }
      if (!tw || !th || (!wx[0] && !wx[1]) || (!hy[0] && !hy[1])) K.txt(x, t("A side is 0, so the product is 0.", "أحد البعدين صفر، فالناتج صفر."), W / 2, H / 2, { s: 14, c: C.muted });
    });
  };

  /* =========================================================
     mprep2_simplify - pack N unit squares into perfect-square blocks
     ========================================================= */
  L.mprep2_simplify = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a number, then slide the block size k. The tiles are packed into k × k squares: if they fit with nothing left, √N = k√m. Find the biggest block that fits.", "اختر عددًا ثم حرّك حجم المربع k؛ تُرتب البلاطات في مربعات k × k، فإذا لم يتبقَّ شيء فإن √N = k√m. ابحث عن أكبر مربع يصلح.")) + '<div class="seg" id="smS"></div>';
    var S = K.make(host, 0.55, 360), N = 32, k = 1, did = {};
    var c = ctl(host, L._slider(t("Block size k", "حجم المربع k"), 1, 6, 1, 1) + '<div class="meter sm-out"></div>'), out = c.querySelector(".sm-out");
    var tick = L._goals(host, [t("Write √32 in its simplest form.", "اكتب √32 في أبسط صورة."), t("Write √48 in its simplest form.", "اكتب √48 في أبسط صورة."), t("Write √27 in its simplest form.", "اكتب √27 في أبسط صورة."), t("Write √72 in its simplest form.", "اكتب √72 في أبسط صورة.")], done);
    var BEST = { 32: 4, 48: 4, 27: 3, 72: 6 }, IDX = { 32: 0, 48: 1, 27: 2, 72: 3 };
    K.seg(host, "#smS", [["32", "√32"], ["48", "√48"], ["27", "√27"], ["72", "√72"]], "32", function (v) { N = Number(v); upd(); });
    bindSl(c, 0, function (v) { k = v; upd(); });
    function upd() {
      var sq = k * k, m = Math.floor(N / sq), left = N - m * sq, fits = left === 0, best = fits && k === BEST[N];
      var h = "<span>" + eq("N = " + n(N)) + " · " + t("blocks of ", "مربعات من ") + eq(n(sq)) + "</span>";
      if (sq > N) h += "<span><b>" + t("The block is bigger than N.", "المربع أكبر من N.") + "</b></span>";
      else if (!fits) h += "<span><b>" + eq(n(sq)) + t(" is not a factor of ", " ليس عاملًا للعدد ") + eq(n(N)) + t(": ", ": ") + n(left) + t(" tiles left over.", " بلاطات متبقية.") + "</b></span>";
      else h += "<span>" + eq("√" + n(N) + " = √(" + n(sq) + " × " + n(m) + ") = " + (k === 1 ? "√" + n(N) : n(k) + (m === 1 ? "" : "√" + n(m)))) + "</span><span><b>" + (best ? t("Simplest form! ✓", "أبسط صورة! ✓") : k === 1 ? t("Try a bigger block.", "جرّب مربعًا أكبر.") : t("Correct, but " + m + " still hides a perfect square.", "صحيح، لكن " + n(m) + " ما زال فيه مربع كامل.")) + "</b></span>";
      if (best) { did[N] = 1; tick(IDX[N]); }
      if (did[27] && did[48]) h += "<span>" + eq("2√3 + 5√27 − √48 = 2√3 + 15√3 − 4√3 = 13√3") + "</span>";
      out.innerHTML = h;
    }
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, sq = k * k, m = Math.floor(N / sq), left = N - m * sq, slots = m + (left ? 1 : 0), s, bpr = 1, rows, gap = 8, i;
      x.clearRect(0, 0, W, H);
      if (sq > N) { m = 0; left = N; slots = 1; }
      var cols = sq > N ? 8 : k, cellH = sq > N ? Math.ceil(N / 8) : Math.max(k, Math.ceil(left / k)), q, bx, by;
      for (s = 22; s >= 3; s--) { bpr = Math.max(1, Math.floor((W - 20) / (cols * s + gap))); rows = Math.ceil(slots / bpr); if (rows * (cellH * s + gap) <= H - 16) break; }
      for (i = 0; i < slots; i++) {
        bx = 10 + (i % bpr) * (cols * s + gap); by = 8 + Math.floor(i / bpr) * (cellH * s + gap);
        var cnt = i < m ? sq : left, full = i < m;
        for (q = 0; q < cnt; q++) {
          var cx = bx + (q % cols) * s, cy = by + Math.floor(q / cols) * s;
          x.fillStyle = full ? (k > 1 ? "rgba(34,197,94,.55)" : "rgba(59,130,246,.45)") : "rgba(239,68,68,.55)"; x.fillRect(cx + 1, cy + 1, s - 2, s - 2);
        }
        if (full && k > 1) { x.strokeStyle = GR; x.lineWidth = 2; x.strokeRect(bx, by, k * s, k * s); if (k * s > 24) K.txt(x, n(sq), bx + k * s / 2, by + k * s / 2, { s: Math.min(14, k * s / 2), c: C.ink }); }
      }
    });
  };

  /* =========================================================
     mprep2_powers - powers as tiles that cancel
     ========================================================= */
  L.mprep2_powers = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a base and × or ÷, then slide the two exponents. Negative exponents put tiles under the fraction bar, and a tile above cancels a tile below.", "اختر الأساس و× أو ÷ ثم حرّك الأسين؛ الأس السالب يضع البلاطات تحت خط الكسر، وكل بلاطة فوقه تلغي بلاطة تحته.")) + '<div class="seg" id="pwB"></div><div class="seg" id="pwO"></div>';
    var S = K.make(host, 0.5, 320), base = "2", op = "x", m = 3, k = 2, anim = 0;
    var c = ctl(host, L._slider("m", -4, 6, 1, m) + L._slider("n", -4, 6, 1, k) + '<div class="meter pw-out"></div>'), out = c.querySelector(".pw-out");
    var tick = L._goals(host, [t("Get a result with exponent 0 (value 1) without using m = 0.", "احصل على ناتج أسه صفر (قيمته ١) دون أن يكون m = 0."), t("With base 2, get the value 1 ÷ 8.", "بالأساس ٢ احصل على القيمة 1 ÷ 8."), t("With base √2, get the value 4.", "بالأساس √2 احصل على القيمة ٤."), t("Use ÷ with base 2 to get 2⁷ = 128.", "استخدم ÷ بالأساس ٢ لتحصل على 2⁷ = 128.")], done);
    K.seg(host, "#pwB", [["2", "2"], ["3", "3"], ["r2", "√2"]], base, function (v) { base = v; upd(); });
    K.seg(host, "#pwO", [["x", "aᵐ × aⁿ"], ["d", "aᵐ ÷ aⁿ"]], op, function (v) { op = v; upd(); });
    bindSl(c, 0, function (v) { m = v; upd(); }); bindSl(c, 1, function (v) { k = v; upd(); });
    var SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
    function sup(e) { return String(e).split("").map(function (ch) { return SUP[ch] || ch; }).join(""); }
    function bl() { return base === "r2" ? "(√2)" : base; }
    function value(e) {
      var B = base === "r2" ? 2 : Number(base);
      if (base !== "r2" || e % 2 === 0) { var ee = base === "r2" ? e / 2 : e, v = Math.pow(B, Math.abs(ee)); return { s: ee >= 0 ? n(v) : "1 ÷ " + n(v), v: Math.pow(B, ee) }; }
      var h = (Math.abs(e) - 1) / 2, cf = Math.pow(2, h), s = (cf === 1 ? "" : n(cf)) + "√2";
      return { s: e > 0 ? s : "1 ÷ " + s, v: Math.pow(2, e / 2) };
    }
    function res() { return op === "x" ? m + k : m - k; }
    function upd() {
      var e = res(), V = value(e);
      out.innerHTML = "<span>" + eq(bl() + sup(m) + (op === "x" ? " × " : " ÷ ") + bl() + sup(k) + " = " + bl() + sup(e)) + "</span><span>" + t("exponent: ", "الأس: ") + eq(sg(m) + (op === "x" ? " + " : " − ") + (k < 0 ? "(" + sg(k) + ")" : n(k)) + " = " + sg(e)) + "</span><span>= <b>" + eq(V.s) + "</b></span>" +
        (e === 0 ? "<span><b>" + t("Any non-zero number to the power 0 is 1.", "أي عدد غير الصفر أسه صفر يساوي ١.") + "</b></span>" : e < 0 ? "<span>" + t("Negative exponent: the multiplicative inverse.", "أس سالب: المعكوس الضربي.") + "</span>" : "");
      anim = 0;
      if (e === 0 && m !== 0) tick(0);
      if (base === "2" && e === -3) tick(1);
      if (base === "r2" && e === 4) tick(2);
      if (base === "2" && op === "d" && e === 7) tick(3);
    }
    upd();
    S.loop(function (dt) {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, kk = op === "x" ? k : -k;
      anim = Math.min(1, anim + dt * 1.5);
      x.clearRect(0, 0, W, H);
      var top = [], bot = [], i;
      for (i = 0; i < Math.abs(m); i++) (m > 0 ? top : bot).push(BL);
      for (i = 0; i < Math.abs(kk); i++) (kk > 0 ? top : bot).push(OR);
      var cancel = Math.min(top.length, bot.length), size = Math.min(40, (W - 40) / Math.max(top.length, bot.length, 1) - 6), mid = H * 0.5;
      var tw = top.length * (size + 6), bw = bot.length * (size + 6);
      x.strokeStyle = C.ink; x.lineWidth = 2; x.beginPath(); x.moveTo(20, mid); x.lineTo(W - 20, mid); x.stroke();
      function row(arr, y, w) {
        arr.forEach(function (col, j) {
          var px = W / 2 - w / 2 + j * (size + 6), gone = j < cancel;
          x.globalAlpha = gone ? 1 - 0.75 * anim : 1;
          K.rr(x, px, y, size, size, 6); x.fillStyle = col; x.fill();
          K.txt(x, base === "r2" ? "√2" : base, px + size / 2, y + size / 2, { s: Math.max(10, size * 0.4), c: "#fff" });
          if (gone) { x.strokeStyle = RE; x.lineWidth = 3; x.beginPath(); x.moveTo(px, y); x.lineTo(px + size * anim, y + size * anim); x.stroke(); }
          x.globalAlpha = 1;
        });
      }
      row(top, mid - size - 14, tw); row(bot, mid + 14, bw);
      if (!top.length) K.txt(x, "1", W / 2, mid - 30, { s: 20, c: C.ink });
      if (!bot.length) K.txt(x, "1", W / 2, mid + 30, { s: 20, c: C.ink });
      K.txt(x, t("blue = m tiles, orange = n tiles; each pair across the bar cancels", "الأزرق بلاطات m والبرتقالي بلاطات n، وكل زوج على جانبي الخط يلغي بعضه"), W / 2, H - 12, { s: 11, c: C.muted });
    });
  };

  /* =========================================================
     mprep2_gcf - take out a common factor with an area model
     ========================================================= */
  L.mprep2_gcf = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick an expression. Build a factor with the number slider and the × x button. If it divides every term, the area model shows the bracket. Find the GREATEST common factor.", "اختر مقدارًا وكوّن عاملًا بشريط العدد وزر × x، فإذا قسم كل الحدود يُظهر نموذج المساحة القوس. ابحث عن العامل المشترك الأكبر.")) + '<div class="seg" id="gfS"></div>';
    var S = K.make(host, 0.45, 300), ex = 0, kf = 1, fx = 0;
    var EX = [[{ c: 6, p: 2 }, { c: -15, p: 1 }], [{ c: 4, p: 2 }, { c: 12, p: 1 }], [{ c: 8, p: 2 }, { c: -16, p: 0 }]];
    var c = ctl(host, L._slider(t("Number part", "الجزء العددي"), 1, 8, 1, 1) + '<div class="btn-row"><button type="button" class="btn sm tg" id="gfX">× x</button></div><div class="meter gf-out"></div>'), out = c.querySelector(".gf-out"), bx = c.querySelector("#gfX");
    var tick = L._goals(host, [t("Factorize 6x² − 15x by its GCF.", "حلّل 6x² − 15x بإخراج ع.م.أ."), t("Factorize the squash court 4x² + 12x by its GCF.", "حلّل مساحة ملعب الإسكواش 4x² + 12x بإخراج ع.م.أ."), t("Factorize 8x² − 16 by its GCF (careful with x!).", "حلّل 8x² − 16 بإخراج ع.م.أ (انتبه للحرف x!).")], done);
    function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var tt = a % b; a = b; b = tt; } return a; }
    function tm(cf, p, first) { var s = Math.abs(cf) === 1 && p > 0 ? "" : n(Math.abs(cf)); s += p === 0 ? "" : p === 1 ? "x" : "x²"; return (cf < 0 ? (first ? "−" : " − ") : (first ? "" : " + ")) + s; }
    function poly(T) { return T.map(function (q, i) { return tm(q.c, q.p, i === 0); }).join(""); }
    K.seg(host, "#gfS", [["0", "6x² − 15x"], ["1", "4x² + 12x"], ["2", "8x² − 16"]], "0", function (v) { ex = Number(v); upd(); });
    bindSl(c, 0, function (v) { kf = v; upd(); });
    bx.onclick = function () { fx = fx ? 0 : 1; bx.classList.toggle("on", !!fx); upd(); };
    function state() {
      var T = EX[ex], ok = T.every(function (q) { return q.c % kf === 0 && q.p >= fx; });
      var G = gcd(T[0].c, T[1].c), gp = Math.min(T[0].p, T[1].p);
      return { T: T, ok: ok, best: ok && kf === G && fx === gp, Q: T.map(function (q) { return { c: q.c / kf, p: q.p - fx }; }) };
    }
    function upd() {
      var st = state(), F = tm(kf, fx, true);
      out.innerHTML = "<span>" + t("Factor: ", "العامل: ") + "<b>" + eq(F) + "</b></span>" + (st.ok ? "<span>" + eq(poly(st.T) + " = " + F + "(" + poly(st.Q) + ")") + "</span><span><b>" + (st.best ? t("That is the GCF! ✓", "هذا هو ع.م.أ! ✓") : t("A common factor, but you can take out more.", "عامل مشترك، لكن يمكنك إخراج المزيد.")) + "</b></span>"
        : "<span><b>" + eq(F) + t(" does not divide every term.", " لا يقسم كل الحدود.") + "</b></span>");
      if (st.best) tick(ex);
    }
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, st = state(), F = tm(kf, fx, true);
      x.clearRect(0, 0, W, H);
      var hgt = Math.min(H - 70, 40 + kf * 12 + fx * 40), ox = 90, oy = (H - hgt) / 2 + 10;
      var ws = st.Q.map(function (q) { return Math.abs(q.c) * (q.p ? 2 : 1) + 1; }), tw = ws[0] + ws[1], wa = W - ox - 30;
      var px = ox;
      K.txt(x, F, ox - 12, oy + hgt / 2, { s: 16, c: st.ok ? GR : RE, a: "right" });
      x.strokeStyle = st.ok ? GR : RE; x.lineWidth = 2; x.beginPath(); x.moveTo(ox - 6, oy); x.lineTo(ox - 6, oy + hgt); x.stroke();
      st.T.forEach(function (q, i) {
        var w = wa * ws[i] / tw, neg = q.c < 0;
        x.fillStyle = neg ? "rgba(239,68,68,.22)" : "rgba(59,130,246,.22)"; x.fillRect(px, oy, w, hgt);
        x.strokeStyle = neg ? RE : BL; x.lineWidth = 2; x.strokeRect(px, oy, w, hgt);
        K.txt(x, tm(q.c, q.p, true), px + w / 2, oy + hgt / 2, { s: 16, c: C.ink });
        K.txt(x, st.ok ? tm(st.Q[i].c, st.Q[i].p, true) : "?", px + w / 2, oy - 14, { s: 15, c: st.ok ? GR : RE });
        px += w;
      });
      K.txt(x, st.ok ? t("width × length = area", "العرض × الطول = المساحة") : t("no whole-number length fits", "لا يوجد طول مناسب"), W / 2, H - 10, { s: 11, c: C.muted });
    });
  };

  /* =========================================================
     mprep2_trinom - algebra tiles (x + l)(x + m)
     ========================================================= */
  L.mprep2_trinom = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide l and m to build the rectangle (x + l)(x + m) from tiles. Watch the trinomial it makes and match each target: product of l and m = last term, sum = middle coefficient.", "حرّك l وm لتبني المستطيل (x + l)(x + m) من البلاطات، وراقب المقدار الثلاثي الناتج وطابق كل هدف: حاصل ضرب l وm = الحد المطلق، ومجموعهما = معامل الحد الأوسط."));
    var S = K.make(host, 0.6, 380), l = 1, m = 1;
    var TG = [[7, 12], [-6, 8], [1, -12], [-7, -18]];
    var c = ctl(host, L._slider("l", -10, 10, 1, l) + L._slider("m", -10, 10, 1, m) + '<div class="meter tr-out"></div>'), out = c.querySelector(".tr-out");
    function tri(b, cc) { return "x²" + (b === 0 ? "" : (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : n(Math.abs(b))) + "x") + (cc === 0 ? "" : (cc < 0 ? " − " : " + ") + n(Math.abs(cc))); }
    var tick = L._goals(host, TG.map(function (g) { return t("Factorize ", "حلّل ") + eq(tri(g[0], g[1])) + "."; }), done);
    bindSl(c, 0, function (v) { l = v; upd(); }); bindSl(c, 1, function (v) { m = v; upd(); });
    function br(v) { return "(x" + (v === 0 ? "" : (v < 0 ? " − " : " + ") + n(Math.abs(v))) + ")"; }
    function upd() {
      var b = l + m, cc = l * m;
      out.innerHTML = "<span>" + eq(br(l) + br(m) + " = " + tri(b, cc)) + "</span><span>" + t("sum ", "المجموع ") + eq(sg(l) + " + " + sg(m) + " = " + sg(b)) + " · " + t("product ", "حاصل الضرب ") + eq(sg(l) + " × " + sg(m) + " = " + sg(cc)) + "</span>";
      TG.forEach(function (g, i) { if (g[0] === b && g[1] === cc) tick(i); });
    }
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, al = Math.abs(l), am = Math.abs(m);
      x.clearRect(0, 0, W, H);
      var u = Math.min((W - 60) / (6 + 10), (H - 40) / (6 + 10)), X0 = 6 * u, ox = 40, oy = 20, i, j;
      function tile(px, py, w, h, neg, lab) { x.fillStyle = neg ? "rgba(239,68,68,.55)" : lab === "x²" ? "rgba(59,130,246,.55)" : "rgba(34,197,94,.55)"; x.fillRect(px + 1, py + 1, w - 2, h - 2); x.strokeStyle = C.card; x.lineWidth = 1; x.strokeRect(px + 1, py + 1, w - 2, h - 2); if (lab && w > 18 && h > 14) K.txt(x, lab, px + w / 2, py + h / 2, { s: Math.min(14, h * 0.5), c: "#fff" }); }
      tile(ox, oy, X0, X0, false, "x²");
      for (i = 0; i < al; i++) tile(ox + X0 + i * u, oy, u, X0, l < 0, "x");
      for (j = 0; j < am; j++) tile(ox, oy + X0 + j * u, X0, u, m < 0, "x");
      for (i = 0; i < al; i++) for (j = 0; j < am; j++) tile(ox + X0 + i * u, oy + X0 + j * u, u, u, (l < 0) !== (m < 0), "1");
      K.txt(x, "x", ox + X0 / 2, oy - 8, { s: 13, c: C.ink }); K.txt(x, "x", ox - 10, oy + X0 / 2, { s: 13, c: C.ink });
      if (al) K.txt(x, sg(l), ox + X0 + al * u / 2, oy - 8, { s: 13, c: l < 0 ? RE : GR });
      if (am) K.txt(x, sg(m), ox - 12, oy + X0 + am * u / 2, { s: 13, c: m < 0 ? RE : GR });
      K.txt(x, t("red tiles are negative", "البلاطات الحمراء سالبة"), W - 10, H - 10, { s: 11, c: C.muted, a: "right" });
    });
  };

  /* =========================================================
     mprep2_diffsq - cut a square, rearrange: x² − y² = (x − y)(x + y)
     ========================================================= */
  L.mprep2_diffsq = function (host, cfg, done) {
    host.innerHTML = hint(t("A small y × y square is cut from an x × x square. Drag the orange strip and drop it on top of the blue part to make one rectangle. Then use the sliders.", "قُطع مربع صغير y × y من مربع x × x؛ اسحب الشريط البرتقالي وأسقطه فوق الجزء الأزرق لتكوّن مستطيلًا واحدًا، ثم استخدم الشريطين."));
    var S = K.make(host, 0.6, 380), X = 10, Y = 4, placed = false, drag = null;
    var c = ctl(host, L._slider("x", 2, 100, 1, X) + L._slider("y", 1, 99, 1, Y) + '<div class="meter ds-out"></div>'), out = c.querySelector(".ds-out");
    var tick = L._goals(host, [t("Drag the strip to turn the L-shape into a rectangle.", "اسحب الشريط لتحوّل الشكل L إلى مستطيل."), t("Use it to work out 99² − 1² (x = 99, y = 1).", "استخدمه لحساب 99² − 1² (x = 99 وy = 1)."), t("Make the leftover area exactly 45.", "اجعل المساحة المتبقية ٤٥ تمامًا.")], done);
    var sx = bindSl(c, 0, function (v) { X = v; if (Y >= X) { Y = X - 1; sy.set(Y); } upd(); });
    var sy = bindSl(c, 1, function (v) { Y = Math.min(v, X - 1); if (Y !== v) sy.set(Y); upd(); });
    function upd() {
      var A = X * X - Y * Y;
      out.innerHTML = "<span>" + eq("x² − y² = " + n(X * X) + " − " + n(Y * Y) + " = " + n(A)) + "</span><span>" + eq("(x − y)(x + y) = " + n(X - Y) + " × " + n(X + Y) + " = " + n((X - Y) * (X + Y))) + "</span>" + (placed ? "<span><b>" + t("One rectangle: (x − y) wide and (x + y) tall.", "مستطيل واحد: عرضه (x − y) وارتفاعه (x + y).") + "</b></span>" : "");
      if (placed && X === 99 && Y === 1) tick(1);
      if (A === 45) tick(2);
    }
    function geo() { var u = Math.min((S.H - 30) / (X + Y), (S.W * 0.55) / X); return { u: u, ox: 30, oy: S.H - 12 - X * u }; }
    function strip() { var g = geo(); return { x: g.ox + (X - Y) * g.u, y: g.oy + Y * g.u, w: Y * g.u, h: (X - Y) * g.u }; }
    S.drag({
      down: function (p) { if (placed) return false; var s = strip(); if (p.x >= s.x && p.x <= s.x + s.w && p.y >= s.y && p.y <= s.y + s.h) { drag = { dx: p.x - s.x, dy: p.y - s.y, x: s.x, y: s.y }; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x - drag.dx; drag.y = p.y - drag.dy; } },
      up: function () { if (!drag) return; var g = geo(), s = strip(), d = Math.hypot(drag.x + s.w / 2 - (g.ox + (X - Y) * g.u / 2), drag.y + s.h / 2 - (g.oy - Y * g.u / 2)); if (d < Math.max(50, 0.35 * X * g.u)) { placed = true; tick(0); E.speak(t("x squared minus y squared equals x minus y times x plus y.", "x تربيع ناقص y تربيع يساوي x ناقص y في x زائد y.")); upd(); } drag = null; },
      hover: function (p) { if (placed) return false; var s = strip(); return p.x >= s.x && p.x <= s.x + s.w && p.y >= s.y && p.y <= s.y + s.h; }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), u = g.u, ox = g.ox, oy = g.oy;
      x.clearRect(0, 0, W, H);
      x.setLineDash([5, 4]); x.strokeStyle = C.muted; x.lineWidth = 1.5; x.strokeRect(ox + (X - Y) * u, oy, Y * u, Y * u); x.setLineDash([]);
      K.txt(x, t("cut y²", "مقطوع y²"), ox + (X - Y / 2) * u, oy + Y * u / 2, { s: 11, c: C.muted });
      x.fillStyle = "rgba(59,130,246,.45)"; x.fillRect(ox, oy, (X - Y) * u, X * u); x.strokeStyle = BL; x.lineWidth = 2; x.strokeRect(ox, oy, (X - Y) * u, X * u);
      K.txt(x, "x − y", ox + (X - Y) * u / 2, oy + X * u + 10 > H ? H - 4 : oy + X * u + 10, { s: 12, c: C.ink });
      K.txt(x, "x", ox - 12, oy + X * u / 2, { s: 12, c: C.ink });
      if (placed) {
        x.fillStyle = "rgba(249,115,22,.55)"; x.fillRect(ox, oy - Y * u, (X - Y) * u, Y * u); x.strokeStyle = OR; x.strokeRect(ox, oy - Y * u, (X - Y) * u, Y * u);
        K.txt(x, "x + y", ox + (X - Y) * u + 26, oy - Y * u + (X + Y) * u / 2, { s: 13, c: GR, a: "left" });
        x.strokeStyle = GR; x.lineWidth = 3; x.strokeRect(ox, oy - Y * u, (X - Y) * u, (X + Y) * u);
      } else {
        var s = strip(), px = drag ? drag.x : s.x, py = drag ? drag.y : s.y;
        x.fillStyle = "rgba(249,115,22,.55)"; x.fillRect(px, py, s.w, s.h); x.strokeStyle = OR; x.lineWidth = 2; x.strokeRect(px, py, s.w, s.h);
        if (drag) { x.setLineDash([6, 4]); x.strokeStyle = GR; x.strokeRect(ox, oy - Y * u, (X - Y) * u, Y * u); x.setLineDash([]); K.txt(x, t("drop here", "أسقطه هنا"), ox + (X - Y) * u / 2, oy - Y * u / 2, { s: 12, c: GR }); }
      }
    });
  };

  /* =========================================================
     mprep2_csq - complete the square with a corner tile
     ========================================================= */
  L.mprep2_csq = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide b to build x² + bx: the x-square plus two strips of b ÷ 2. Drag the purple corner tile into the gap to complete the square.", "حرّك b لتبني x² + bx: مربع x وشريطان عرض كل منهما b ÷ 2، ثم اسحب البلاطة البنفسجية إلى الفراغ لتكمل المربع."));
    var S = K.make(host, 0.6, 380), b = 6, placed = false, drag = null;
    var c = ctl(host, L._slider("b", -14, 14, 2, b) + '<div class="meter cq-out"></div>'), out = c.querySelector(".cq-out");
    var tick = L._goals(host, [t("Complete the square for x² + 10x.", "أكمل المربع للمقدار x² + 10x."), t("Complete the square for x² + 14x.", "أكمل المربع للمقدار x² + 14x."), t("Complete x² − 8x and solve x² − 8x + 3 = 0.", "أكمل x² − 8x وحل المعادلة x² − 8x + 3 = 0.")], done);
    var sb = bindSl(c, 0, function (v) { if (v === 0) { v = 2; sb.set(2); } b = v; placed = false; upd(); });
    function upd() {
      var h = b / 2, hs = Math.abs(h), sgn = b < 0 ? " − " : " + ";
      out.innerHTML = "<span>" + eq("x²" + sgn + n(Math.abs(b)) + "x" + (placed ? " + " + n(hs * hs) : " + ?")) + "</span>" +
        (placed ? "<span>= <b>" + eq("(x" + sgn + n(hs) + ")²") + "</b> · " + t("added (b ÷ 2)² = ", "أضفنا (b ÷ 2)² = ") + eq(n(hs * hs)) + "</span>" : "<span>" + t("The missing corner is (b ÷ 2) × (b ÷ 2).", "الركن الناقص (b ÷ 2) × (b ÷ 2).") + "</span>") +
        (placed && b === -8 ? "<span>" + eq("x² − 8x + 3 = 0 ⇒ x² − 8x + 16 = 13 ⇒ (x − 4)² = 13 ⇒ x = 4 ± √13") + "</span>" : "");
      if (placed && b === 10) tick(0);
      if (placed && b === 14) tick(1);
      if (placed && b === -8) tick(2);
    }
    function geo() { var u = Math.min((S.H - 40) / 15, (S.W - 90) / 22), ox = 40, oy = 20, X0 = 8 * u, hu = Math.abs(b) / 2 * u; return { u: u, ox: ox, oy: oy, X0: X0, hu: hu, cx: b > 0 ? ox + X0 : ox, cy: b > 0 ? oy + X0 : oy, tx: Math.max(ox + 15 * u + 20, S.W - 30 - 7 * u), ty: S.H / 2 - hu / 2 }; }
    S.drag({
      down: function (p) { if (placed) return false; var g = geo(); if (p.x >= g.tx && p.x <= g.tx + g.hu && p.y >= g.ty && p.y <= g.ty + g.hu) { drag = { dx: p.x - g.tx, dy: p.y - g.ty, x: g.tx, y: g.ty }; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x - drag.dx; drag.y = p.y - drag.dy; } },
      up: function () { if (!drag) return; var g = geo(); if (Math.abs(drag.x - g.cx) < 24 && Math.abs(drag.y - g.cy) < 24) { placed = true; upd(); E.speak(t("Square completed.", "اكتمل المربع.")); } drag = null; },
      hover: function (p) { var g = geo(); return !placed && p.x >= g.tx && p.x <= g.tx + g.hu && p.y >= g.ty && p.y <= g.ty + g.hu; }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), ox = g.ox, oy = g.oy, X0 = g.X0, hu = g.hu;
      x.clearRect(0, 0, W, H);
      x.fillStyle = "rgba(59,130,246,.35)"; x.fillRect(ox, oy, X0, X0); x.strokeStyle = BL; x.lineWidth = 2; x.strokeRect(ox, oy, X0, X0);
      K.txt(x, "x²", ox + X0 / 2, oy + X0 / 2, { s: 18, c: C.ink });
      var h = n(Math.abs(b) / 2) + "x";
      if (b > 0) {
        x.fillStyle = "rgba(34,197,94,.45)"; x.fillRect(ox + X0, oy, hu, X0); x.fillRect(ox, oy + X0, X0, hu);
        x.strokeStyle = GR; x.strokeRect(ox + X0, oy, hu, X0); x.strokeRect(ox, oy + X0, X0, hu);
        K.txt(x, h, ox + X0 + hu / 2, oy + X0 / 2, { s: 12, c: C.ink }); K.txt(x, h, ox + X0 / 2, oy + X0 + hu / 2, { s: 12, c: C.ink });
      } else {
        x.fillStyle = "rgba(239,68,68,.35)"; x.fillRect(ox, oy, X0, hu); x.fillRect(ox, oy, hu, X0);
        x.strokeStyle = RE; x.strokeRect(ox, oy, X0, hu); x.strokeRect(ox, oy, hu, X0);
        K.txt(x, "−" + h, ox + X0 / 2 + hu / 2, oy + hu / 2, { s: 12, c: C.ink }); K.txt(x, "−" + h, ox + hu / 2, oy + X0 / 2 + hu / 2, { s: 12, c: C.ink });
        K.txt(x, t("corner taken away twice", "الركن حُذف مرتين"), ox + X0 + 10, oy + 10, { s: 11, c: C.muted, a: "left" });
      }
      x.setLineDash([5, 4]); x.strokeStyle = PU; x.lineWidth = 2; if (!placed) x.strokeRect(g.cx, g.cy, hu, hu); x.setLineDash([]);
      var px = placed ? g.cx : drag ? drag.x : g.tx, py = placed ? g.cy : drag ? drag.y : g.ty;
      x.fillStyle = "rgba(168,85,247,.6)"; x.fillRect(px, py, hu, hu); x.strokeStyle = PU; x.strokeRect(px, py, hu, hu);
      K.txt(x, n(b * b / 4), px + hu / 2, py + hu / 2, { s: 12, c: "#fff" });
      if (placed) { x.strokeStyle = GR; x.lineWidth = 3; if (b > 0) x.strokeRect(ox, oy, X0 + hu, X0 + hu); else x.strokeRect(ox + hu, oy + hu, X0 - hu, X0 - hu); }
    });
  };
})();
/* ---------- Prep 2 maths simulations (part B): geometry and statistics ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function r1(x) { return Math.round(x * 10) / 10; }
  function r2(x) { return Math.round(x * 100) / 100; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function d2(a, b) { var dx = a.x - b.x, dy = a.y - b.y; return dx * dx + dy * dy; }
  function ang(p, q, r) { var ax = p.x - q.x, ay = p.y - q.y, bx = r.x - q.x, by = r.y - q.y; return Math.acos(clamp((ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by) || 1), -1, 1)) * 180 / Math.PI; }
  var BL = "#3b82f6", GR = "#22c55e", OR = "#f97316", PU = "#a855f7", RE = "#ef4444", TE = "#14b8a6";
  function ctl(host, html) { var c = E.el("div", "sim-ctl"); host.appendChild(c); c.innerHTML = html; return c; }
  function bindSl(c, i, on) { var ins = c.querySelectorAll("input[type=range]"), sl = c.querySelectorAll(".slv"); function upd() { sl[i].textContent = n(Number(ins[i].value)); } ins[i].addEventListener("input", function () { upd(); on(Number(ins[i].value)); }); upd(); return { set: function (v) { ins[i].value = v; upd(); } }; }
  /* length of a segment whose square is an integer: 5 or √13 */
  function rootStr(q) { q = Math.round(q * 4) / 4; var s = Math.sqrt(q); if (Math.abs(s - Math.round(s)) < 1e-9) return n(Math.round(s)); if (Math.abs(q - Math.round(q)) < 1e-9) return "√" + n(Math.round(q)); return n(r2(s)); }
  /* grid helper (y down), cols x rows cells */
  function grid(S, cols, rows) { var c = Math.min((S.W - 20) / cols, (S.H - 20) / rows), ox = (S.W - c * cols) / 2, oy = (S.H - c * rows) / 2; return { c: c, P: function (p) { return { x: ox + p.x * c, y: oy + p.y * c }; }, G: function (q) { return { x: (q.x - ox) / c, y: (q.y - oy) / c }; }, draw: function (x, C) { x.strokeStyle = C.line; x.lineWidth = 1; for (var i = 0; i <= cols; i++) { x.beginPath(); x.moveTo(ox + i * c, oy); x.lineTo(ox + i * c, oy + rows * c); x.stroke(); } for (var j = 0; j <= rows; j++) { x.beginPath(); x.moveTo(ox, oy + j * c); x.lineTo(ox + cols * c, oy + j * c); x.stroke(); } } }; }
  function poly(x, pts, fill, stroke, w) { x.beginPath(); pts.forEach(function (p, i) { if (i) x.lineTo(p.x, p.y); else x.moveTo(p.x, p.y); }); x.closePath(); if (fill) { x.fillStyle = fill; x.fill(); } if (stroke) { x.strokeStyle = stroke; x.lineWidth = w || 2; x.stroke(); } }
  function line(x, a, b, col, w, dash) { x.strokeStyle = col; x.lineWidth = w || 2; if (dash) x.setLineDash(dash); x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); x.setLineDash([]); }
  function handle(x, p, col, lab, C) { K.dot(x, p.x, p.y, 8, col, C.card); if (lab) K.txt(x, lab, p.x + 12, p.y - 12, { s: 13, c: C.ink }); }
  /* drag handles on a grid: pts = array of {x,y} in grid units */
  function gridDrag(S, gfn, pts, idx, cols, rows, onMove) {
    var cur = -1;
    S.drag({
      down: function (p) { var g = gfn(); for (var k = 0; k < idx.length; k++) { var q = g.P(pts[idx[k]]); if (Math.hypot(q.x - p.x, q.y - p.y) < Math.max(16, g.c * 0.6)) { cur = idx[k]; return true; } } return false; },
      move: function (p) { if (cur < 0) return; var g = gfn(), q = g.G(p), nx = clamp(Math.round(q.x), 0, cols), ny = clamp(Math.round(q.y), 0, rows); if (pts.some(function (o, k) { return k !== cur && o.x === nx && o.y === ny; })) return; if (pts[cur].x !== nx || pts[cur].y !== ny) { pts[cur].x = nx; pts[cur].y = ny; onMove(); } },
      up: function () { cur = -1; },
      hover: function (p) { var g = gfn(); return idx.some(function (k) { var q = g.P(pts[k]); return Math.hypot(q.x - p.x, q.y - p.y) < Math.max(16, g.c * 0.6); }); }
    });
  }

  /* =========================================================
     mprep2_congr - copy a triangle on a grid: SSS, reflection, AAA
     ========================================================= */
  L.mprep2_congr = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the corners D, E and F on the grid. Compare the sides and angles of △DEF with the blue △ABC.", "اسحب الرؤوس D وE وF على الشبكة، وقارن أضلاع وزوايا △DEF بالمثلث الأزرق △ABC."));
    var S = K.make(host, 0.6, 400), COLS = 17, ROWS = 10;
    var P = [{ x: 1, y: 8 }, { x: 5, y: 8 }, { x: 1, y: 5 }, { x: 9, y: 8 }, { x: 12, y: 8 }, { x: 9, y: 6 }];
    var c = ctl(host, '<div class="meter cg-out"></div>'), out = c.querySelector(".cg-out");
    var tick = L._goals(host, [t("Make △DEF congruent to △ABC.", "اجعل △DEF مطابقًا للمثلث △ABC."), t("Make a congruent copy that is flipped (a reflection).", "كوّن نسخة مطابقة مقلوبة (انعكاس)."), t("Make a triangle with the same three angles but NOT congruent.", "كوّن مثلثًا له الزوايا الثلاث نفسها لكنه غير مطابق.")], done);
    function cross(a, b, c2) { return (b.x - a.x) * (c2.y - a.y) - (b.y - a.y) * (c2.x - a.x); }
    function info() {
      var D = P[3], Ee = P[4], F = P[5], s = [d2(Ee, F), d2(D, F), d2(D, Ee)], srt = s.slice().sort(function (a, b) { return a - b; });
      var cong = srt[0] === 9 && srt[1] === 16 && srt[2] === 25, sim = srt[0] > 0 && srt[0] * 16 === srt[1] * 9 && srt[0] * 25 === srt[2] * 9 && !cong;
      var flip = false;
      if (cong) { var V = [D, Ee, F], rA = V[s.indexOf(25)], rC = V[s.indexOf(16)], rB = V[s.indexOf(9)]; flip = (cross(rA, rB, rC) > 0) !== (cross(P[0], P[1], P[2]) > 0); }
      return { s: s, cong: cong, sim: sim, flip: flip, A: [ang(Ee, D, F), ang(D, Ee, F), ang(D, F, Ee)], deg: cross(D, Ee, F) === 0 };
    }
    function upd() {
      var I = info();
      out.innerHTML = "<span>△ABC: " + eq("AB = 4, AC = 3, BC = 5") + " · " + eq("∠A = 90°, ∠B ≈ 36.9°, ∠C ≈ 53.1°") + "</span>" +
        "<span>△DEF: " + eq("DE = " + rootStr(I.s[2]) + ", EF = " + rootStr(I.s[0]) + ", DF = " + rootStr(I.s[1])) + " · " + eq("∠D ≈ " + n(r1(I.A[0])) + "°, ∠E ≈ " + n(r1(I.A[1])) + "°, ∠F ≈ " + n(r1(I.A[2])) + "°") + "</span>" +
        "<span><b>" + (I.deg ? t("The three points are on one line: no triangle.", "النقاط الثلاث على استقامة واحدة: لا يوجد مثلث.") : I.cong ? (I.flip ? t("SSS: all three sides match, so the triangles are congruent. This copy is flipped (a reflection).", "الأضلاع الثلاثة متساوية، إذن المثلثان متطابقان، وهذه النسخة مقلوبة (انعكاس).") : t("SSS: all three sides match, so the triangles are congruent.", "الأضلاع الثلاثة متساوية، إذن المثلثان متطابقان.")) : I.sim ? t("Same angles, different size: NOT congruent. Three angles are not enough!", "الزوايا نفسها والحجم مختلف: غير متطابقين؛ الزوايا الثلاث لا تكفي!") : t("Not congruent yet.", "غير متطابقين بعد.")) + "</b></span>";
      if (I.cong) tick(0);
      if (I.cong && I.flip) tick(1);
      if (I.sim) tick(2);
    }
    gridDrag(S, function () { return grid(S, COLS, ROWS); }, P, [3, 4, 5], COLS, ROWS, upd);
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, g = grid(S, COLS, ROWS), Q = P.map(g.P), I = info();
      x.clearRect(0, 0, S.W, S.H); g.draw(x, C);
      poly(x, Q.slice(0, 3), "rgba(59,130,246,.25)", BL, 3);
      poly(x, Q.slice(3), I.cong ? "rgba(34,197,94,.3)" : I.sim ? "rgba(168,85,247,.25)" : "rgba(249,115,22,.22)", I.cong ? GR : I.sim ? PU : OR, 3);
      ["A", "B", "C"].forEach(function (s, i) { K.txt(x, s, Q[i].x - 12, Q[i].y + (i === 2 ? -10 : 14), { s: 13, c: BL }); });
      ["D", "E", "F"].forEach(function (s, i) { handle(x, Q[3 + i], OR, s, C); });
    });
  };

  /* =========================================================
     mprep2_pyth - squares on the sides of a triangle
     ========================================================= */
  L.mprep2_pyth = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag B along the ground and drag C anywhere. The squares on the sides show a², b² and c². Compare the biggest square with the other two.", "اسحب B على الأرض واسحب C إلى أي مكان؛ المربعات على الأضلاع تبين المربعات، فقارن أكبر مربع بمجموع الآخرين."));
    var S = K.make(host, 0.7, 440), A = { x: 0, y: 0 }, B = { x: 4, y: 0 }, Cc = { x: 0, y: 2 }, drag = null, T = null;
    var c = ctl(host, '<div class="meter py-out"></div>'), out = c.querySelector(".py-out");
    var tick = L._goals(host, [t("Make a right triangle with legs 6 and 8. How long is the hypotenuse?", "كوّن مثلثًا قائمًا ضلعا القائمة فيه ٦ و٨. كم طول الوتر؟"), t("Make a right triangle whose right angle is NOT at A (use the converse).", "كوّن مثلثًا قائمًا ليست زاويته القائمة عند A (استخدم العكس)."), t("Make an obtuse-angled triangle: c² > a² + b².", "كوّن مثلثًا منفرج الزاوية: c² > a² + b²."), t("Make an acute-angled triangle: c² < a² + b².", "كوّن مثلثًا حاد الزوايا: c² < a² + b².")], done);
    function sqr(p, q, r) { var vx = q.x - p.x, vy = q.y - p.y, nx = -vy, ny = vx; if (nx * (r.x - p.x) + ny * (r.y - p.y) > 0) { nx = -nx; ny = -ny; } return [p, q, { x: q.x + nx, y: q.y + ny }, { x: p.x + nx, y: p.y + ny }]; }
    function sqs() { return [sqr(A, B, Cc), sqr(A, Cc, B), sqr(B, Cc, A)]; }
    function fit() {
      var all = [].concat.apply([], sqs()), x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      all.forEach(function (p) { x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y); });
      var u = Math.min((S.W - 30) / (x1 - x0), (S.H - 30) / (y1 - y0), 48);
      T = { u: u, ox: (S.W - u * (x1 - x0)) / 2 - x0 * u, oy: (S.H + u * (y1 - y0)) / 2 + y0 * u };
    }
    function P(p) { return { x: T.ox + p.x * T.u, y: T.oy - p.y * T.u }; }
    function info() {
      var ab = d2(A, B), ac = d2(A, Cc), bc = d2(B, Cc), arr = [ab, ac, bc].sort(function (a, b) { return a - b; }), cc = arr[2], ss = arr[0] + arr[1];
      var at = B.x * Cc.x === 0 ? "A" : (Cc.x - B.x) === 0 ? "B" : ((A.x - Cc.x) * (B.x - Cc.x) + (A.y - Cc.y) * (B.y - Cc.y)) === 0 ? "C" : "";
      return { ab: ab, ac: ac, bc: bc, arr: arr, type: cc === ss ? "r" : cc > ss ? "o" : "a", at: at };
    }
    function upd() {
      var I = info(), sym = I.type === "r" ? "=" : I.type === "o" ? ">" : "<";
      out.innerHTML = "<span>" + eq("AB² = " + n(I.ab) + ", AC² = " + n(I.ac) + ", BC² = " + n(I.bc)) + "</span>" +
        "<span>" + t("Longest side squared: ", "مربع أطول ضلع: ") + eq(n(I.arr[2]) + " " + sym + " " + n(I.arr[0]) + " + " + n(I.arr[1]) + " = " + n(I.arr[0] + I.arr[1])) + "</span>" +
        "<span><b>" + (I.type === "r" ? t("Right-angled at ", "قائم الزاوية في ") + I.at + " · " + t("hypotenuse = ", "الوتر = ") + eq(rootStr(I.arr[2])) : I.type === "o" ? t("Obtuse-angled triangle", "مثلث منفرج الزاوية") : t("Acute-angled triangle", "مثلث حاد الزوايا")) + "</b></span>";
      if (I.type === "r" && I.arr[0] === 36 && I.arr[1] === 64) tick(0);
      if (I.type === "r" && I.at !== "A") tick(1);
      if (I.type === "o") tick(2);
      if (I.type === "a") tick(3);
    }
    fit();
    S.onSize = function () { fit(); };
    S.drag({
      down: function (p) { var pb = P(B), pc = P(Cc); if (Math.hypot(p.x - pc.x, p.y - pc.y) < 18) { drag = "C"; return true; } if (Math.hypot(p.x - pb.x, p.y - pb.y) < 18) { drag = "B"; return true; } return false; },
      move: function (p) {
        if (!drag) return;
        var gx = Math.round((p.x - T.ox) / T.u), gy = Math.round((T.oy - p.y) / T.u);
        if (drag === "B") { gx = clamp(gx, 1, 10); if (gx !== B.x && !(Cc.x === gx && Cc.y === 0)) { B.x = gx; upd(); } }
        else { gx = clamp(gx, -3, 10); gy = clamp(gy, 1, 8); if (gx !== Cc.x || gy !== Cc.y) { Cc.x = gx; Cc.y = gy; upd(); } }
      },
      up: function () { drag = null; fit(); },
      hover: function (p) { var pb = P(B), pc = P(Cc); return Math.hypot(p.x - pc.x, p.y - pc.y) < 18 || Math.hypot(p.x - pb.x, p.y - pb.y) < 18; }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, I = info(), q = sqs(), cols = [BL, OR, I.type === "r" ? GR : "#94a3b8"], longest = Math.max(I.ab, I.ac, I.bc);
      x.clearRect(0, 0, W, H);
      [I.ab, I.ac, I.bc].forEach(function (v, i) {
        var col = v === longest ? (I.type === "r" ? GR : I.type === "o" ? RE : TE) : cols[i];
        poly(x, q[i].map(P), col + "33", col, 2);
        var cx = 0, cy = 0; q[i].forEach(function (p) { cx += p.x / 4; cy += p.y / 4; });
        var pc = P({ x: cx, y: cy }); K.txt(x, n(v), pc.x, pc.y, { s: 14, c: C.ink });
      });
      poly(x, [A, B, Cc].map(P), C.card, C.ink, 3);
      var pa = P(A), pb = P(B), pc2 = P(Cc);
      if (I.type === "r") { var rv = I.at === "A" ? A : I.at === "B" ? B : Cc, o1 = I.at === "A" ? B : A, o2 = I.at === "C" ? B : Cc, u1 = { x: (o1.x - rv.x) / Math.sqrt(d2(o1, rv)) * 0.5, y: (o1.y - rv.y) / Math.sqrt(d2(o1, rv)) * 0.5 }, u2 = { x: (o2.x - rv.x) / Math.sqrt(d2(o2, rv)) * 0.5, y: (o2.y - rv.y) / Math.sqrt(d2(o2, rv)) * 0.5 };
        poly(x, [rv, { x: rv.x + u1.x, y: rv.y + u1.y }, { x: rv.x + u1.x + u2.x, y: rv.y + u1.y + u2.y }, { x: rv.x + u2.x, y: rv.y + u2.y }].map(P), null, GR, 2); }
      K.txt(x, "A", pa.x - 12, pa.y + 12, { s: 13, c: C.ink });
      handle(x, pb, OR, "B", C); handle(x, pc2, PU, "C", C);
    });
  };

  /* =========================================================
     mprep2_midseg - midpoint, parallel line and half the base
     ========================================================= */
  L.mprep2_midseg = function (host, cfg, done) {
    host.innerHTML = hint(t("D is the midpoint of AB. Slide E along AC until DE is parallel to BC. Drag A, B, C on the grid to change the triangle (each square is 1 cm).", "D منتصف AB؛ حرّك E على AC حتى يصبح DE موازيًا لـ BC، واسحب A وB وC على الشبكة لتغيير المثلث (كل مربع ١ سم)."));
    var S = K.make(host, 0.62, 400), COLS = 16, ROWS = 10, P = [{ x: 4, y: 1 }, { x: 1, y: 9 }, { x: 13, y: 9 }], tt = 0.3, dragE = false;
    var c = ctl(host, '<div class="meter ms-out"></div>'), out = c.querySelector(".ms-out");
    var tick = L._goals(host, [t("Make DE parallel to BC. Where is E now?", "اجعل DE موازيًا لـ BC. أين تقع E الآن؟"), t("Keep DE ∥ BC and make BC = 10 cm. What is DE?", "حافظ على DE ∥ BC واجعل BC = 10 سم. كم يساوي DE؟"), t("Keep DE ∥ BC and make DE = 3 cm.", "حافظ على DE ∥ BC واجعل DE = 3 سم.")], done);
    function pts() { var A = P[0], B = P[1], Cc = P[2]; return { A: A, B: B, C: Cc, D: { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }, E: { x: A.x + (Cc.x - A.x) * tt, y: A.y + (Cc.y - A.y) * tt } }; }
    function upd() {
      var p = pts(), de = dist(p.D, p.E), bc = dist(p.B, p.C), par = tt === 0.5, ae = dist(p.A, p.E), ec = dist(p.E, p.C);
      var a1 = Math.atan2(p.E.y - p.D.y, p.E.x - p.D.x), a2 = Math.atan2(p.C.y - p.B.y, p.C.x - p.B.x), da = Math.abs(((a1 - a2) * 180 / Math.PI + 540) % 180);
      da = Math.min(da, 180 - da);
      out.innerHTML = "<span>" + eq("DE = " + n(r2(de)) + " cm, BC = " + n(r2(bc)) + " cm") + "</span><span>" + eq("AE = " + n(r2(ae)) + ", EC = " + n(r2(ec))) + " · " + t("angle between DE and BC: ", "الزاوية بين DE وBC: ") + eq(n(r1(da)) + "°") + "</span>" +
        "<span><b>" + (par ? t("DE ∥ BC, so E is the midpoint of AC and DE = ½ BC.", "DE ∥ BC، إذن E منتصف AC وDE = ½ BC.") : t("Not parallel yet.", "ليس موازيًا بعد.")) + "</b></span>";
      if (par) tick(0);
      if (par && Math.abs(bc - 10) < 1e-9) tick(1);
      if (par && Math.abs(de - 3) < 1e-9) tick(2);
    }
    var gfn = function () { return grid(S, COLS, ROWS); }, cur = -1;
    S.drag({
      down: function (p) {
        var g = gfn(), q = pts(), pe = g.P(q.E);
        if (Math.hypot(p.x - pe.x, p.y - pe.y) < 18) { dragE = true; return true; }
        for (var k = 0; k < 3; k++) { var v = g.P(P[k]); if (Math.hypot(p.x - v.x, p.y - v.y) < Math.max(16, g.c * 0.6)) { cur = k; return true; } }
        return false;
      },
      move: function (p) {
        var g = gfn(), q = g.G(p);
        if (dragE) { var A = P[0], Cc = P[2], vx = Cc.x - A.x, vy = Cc.y - A.y, s = ((q.x - A.x) * vx + (q.y - A.y) * vy) / (vx * vx + vy * vy || 1); s = clamp(s, 0.05, 0.95); if (Math.abs(s - 0.5) < 0.04) s = 0.5; tt = s; upd(); return; }
        if (cur < 0) return;
        var nx = clamp(Math.round(q.x), 0, COLS), ny = clamp(Math.round(q.y), 0, ROWS);
        if (P.some(function (o, k) { return k !== cur && o.x === nx && o.y === ny; })) return;
        if (P[cur].x !== nx || P[cur].y !== ny) { P[cur].x = nx; P[cur].y = ny; upd(); }
      },
      up: function () { dragE = false; cur = -1; },
      hover: function (p) { var g = gfn(), q = pts(), pe = g.P(q.E); return Math.hypot(p.x - pe.x, p.y - pe.y) < 18 || P.some(function (v) { v = g.P(v); return Math.hypot(p.x - v.x, p.y - v.y) < 16; }); }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, g = gfn(), q = pts(), A = g.P(q.A), B = g.P(q.B), Cc = g.P(q.C), D = g.P(q.D), Ee = g.P(q.E), par = tt === 0.5;
      x.clearRect(0, 0, S.W, S.H); g.draw(x, C);
      poly(x, [A, B, Cc], "rgba(59,130,246,.12)", C.ink, 2.5);
      line(x, D, Ee, par ? GR : OR, 4);
      if (par) { line(x, B, Cc, GR, 4); K.txt(x, "∥", (D.x + Ee.x) / 2, (D.y + Ee.y) / 2 - 12, { s: 16, c: GR }); }
      K.dot(x, D.x, D.y, 6, TE); K.txt(x, "D", D.x - 14, D.y, { s: 13, c: C.ink });
      handle(x, Ee, par ? GR : OR, "E", C);
      [[A, "A"], [B, "B"], [Cc, "C"]].forEach(function (v) { handle(x, v[0], BL, v[1], C); });
    });
  };

  /* =========================================================
     mprep2_median - medians, centroid and balancing on a pin
     ========================================================= */
  L.mprep2_median = function (host, cfg, done) {
    host.innerHTML = hint(t("The three medians meet at G. Drag the red pin under the triangle until it balances. Drag A, B, C on the grid to reshape it (each square is 1 cm).", "تلتقي المتوسطات الثلاثة في G؛ اسحب الدبوس الأحمر تحت المثلث حتى يتزن، واسحب A وB وC على الشبكة لتغيير شكله (كل مربع ١ سم)."));
    var S = K.make(host, 0.66, 420), COLS = 16, ROWS = 12, P = [{ x: 4, y: 1 }, { x: 1, y: 10 }, { x: 13, y: 10 }], pin = { x: 9, y: 4 }, tilt = 0, dragPin = false, cur = -1;
    var c = ctl(host, '<div class="meter md-out"></div>'), out = c.querySelector(".md-out");
    var tick = L._goals(host, [t("Balance the triangle on the pin.", "اجعل المثلث يتزن على الدبوس."), t("Make the angle at A a right angle and compare AD with BC.", "اجعل الزاوية عند A قائمة وقارن AD بـ BC."), t("Make the median AD exactly 6 cm. How long is AG?", "اجعل المتوسط AD = 6 سم تمامًا. كم طول AG؟")], done);
    function geo() { var A = P[0], B = P[1], Cc = P[2], D = { x: (B.x + Cc.x) / 2, y: (B.y + Cc.y) / 2 }, Ee = { x: (A.x + Cc.x) / 2, y: (A.y + Cc.y) / 2 }, F = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }, G = { x: (A.x + B.x + Cc.x) / 3, y: (A.y + B.y + Cc.y) / 3 }; return { A: A, B: B, C: Cc, D: D, E: Ee, F: F, G: G }; }
    function right() { var A = P[0], B = P[1], Cc = P[2]; return (B.x - A.x) * (Cc.x - A.x) + (B.y - A.y) * (Cc.y - A.y) === 0; }
    function upd() {
      var q = geo(), ad = dist(q.A, q.D), ag = dist(q.A, q.G), gd = dist(q.G, q.D), bc = dist(q.B, q.C), bal = dist(pin, q.G) < 0.3;
      out.innerHTML = "<span>" + eq("AD = " + n(r2(ad)) + ", AG = " + n(r2(ag)) + ", GD = " + n(r2(gd))) + " · " + eq("AG : GD = 2 : 1") + "</span>" +
        "<span>" + eq("BC = " + n(r2(bc))) + (right() ? " · <b>" + t("∠A = 90°, so AD = ½ BC = ", "∠A = 90°، إذن AD = ½ BC = ") + eq(n(r2(bc / 2))) + "</b>" : "") + "</span>" +
        "<span><b>" + (bal ? t("Balanced! The pin is at the centroid G.", "اتزن! الدبوس عند نقطة تقاطع المتوسطات G.") : t("Not balanced: it tips towards G.", "غير متزن: يميل نحو G.")) + "</b></span>";
      if (bal) tick(0);
      if (right()) tick(1);
      if (Math.abs(ad - 6) < 1e-9) tick(2);
    }
    var gfn = function () { return grid(S, COLS, ROWS); };
    S.drag({
      down: function (p) {
        var g = gfn(), pp = g.P(pin);
        for (var k = 0; k < 3; k++) { var v = g.P(P[k]); if (Math.hypot(p.x - v.x, p.y - v.y) < Math.max(16, g.c * 0.6)) { cur = k; return true; } }
        if (Math.hypot(p.x - pp.x, p.y - pp.y) < 20) { dragPin = true; return true; }
        return false;
      },
      move: function (p) {
        var g = gfn(), q = g.G(p);
        if (dragPin) { pin.x = clamp(q.x, 0, COLS); pin.y = clamp(q.y, 0, ROWS); var G = geo().G; if (dist(pin, G) < 0.3) { pin.x = G.x; pin.y = G.y; } upd(); return; }
        if (cur < 0) return;
        var nx = clamp(Math.round(q.x), 0, COLS), ny = clamp(Math.round(q.y), 0, ROWS);
        if (P.some(function (o, k) { return k !== cur && o.x === nx && o.y === ny; })) return;
        if (P[cur].x !== nx || P[cur].y !== ny) { P[cur].x = nx; P[cur].y = ny; upd(); }
      },
      up: function () { dragPin = false; cur = -1; },
      hover: function (p) { var g = gfn(), pp = g.P(pin); return Math.hypot(p.x - pp.x, p.y - pp.y) < 20 || P.some(function (v) { v = g.P(v); return Math.hypot(p.x - v.x, p.y - v.y) < 16; }); }
    });
    upd();
    S.loop(function (dt) {
      var x = S.ctx, C = S.C, g = gfn(), q = geo(), bal = dist(pin, q.G) < 0.3, target = bal ? 0 : clamp((q.G.x - pin.x) * 0.06, -0.3, 0.3);
      tilt += (target - tilt) * Math.min(1, dt * 4);
      x.clearRect(0, 0, S.W, S.H); g.draw(x, C);
      var pp = g.P(pin), rot = function (v) { var s = g.P(v), dx = s.x - pp.x, dy = s.y - pp.y, cs = Math.cos(tilt), sn = Math.sin(tilt); return { x: pp.x + dx * cs - dy * sn, y: pp.y + dx * sn + dy * cs }; };
      poly(x, [q.A, q.B, q.C].map(g.P), null, C.line, 1);
      poly(x, [q.A, q.B, q.C].map(rot), bal ? "rgba(34,197,94,.25)" : "rgba(59,130,246,.18)", bal ? GR : BL, 2.5);
      [[q.A, q.D], [q.B, q.E], [q.C, q.F]].forEach(function (m) { line(x, rot(m[0]), rot(m[1]), PU, 2, [6, 4]); });
      [q.D, q.E, q.F].forEach(function (m) { var r = rot(m); K.dot(x, r.x, r.y, 4, PU); });
      var rg = rot(q.G); K.dot(x, rg.x, rg.y, 6, OR); K.txt(x, "G", rg.x + 12, rg.y - 10, { s: 13, c: OR });
      var rd = rot(q.D); K.txt(x, "D", rd.x + 10, rd.y + 12, { s: 12, c: PU });
      x.fillStyle = RE; x.beginPath(); x.moveTo(pp.x, pp.y); x.lineTo(pp.x - 9, pp.y + 22); x.lineTo(pp.x + 9, pp.y + 22); x.closePath(); x.fill(); K.dot(x, pp.x, pp.y, 4, "#fff", RE);
      [[q.A, "A"], [q.B, "B"], [q.C, "C"]].forEach(function (v) { handle(x, g.P(v[0]), BL, v[1], C); });
    });
  };

  /* =========================================================
     mprep2_isos - drag the apex of a triangle on a fixed base
     ========================================================= */
  L.mprep2_isos = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the top vertex A. BC is fixed. Watch the sides and the angles; when AB = AC the axis of symmetry appears.", "اسحب الرأس A والقاعدة BC ثابتة، وراقب الأضلاع والزوايا؛ عندما يكون AB = AC يظهر محور التماثل."));
    var S = K.make(host, 0.62, 400), A = { x: 1.2, y: 3 }, drag = false, H3 = 2 * Math.sqrt(3), H40 = 2 / Math.tan(20 * Math.PI / 180), H30 = 2 * Math.tan(30 * Math.PI / 180);
    var B = { x: -2, y: 0 }, Cc = { x: 2, y: 0 };
    var c = ctl(host, '<div class="meter is-out"></div>'), out = c.querySelector(".is-out");
    var tick = L._goals(host, [t("Make the triangle isosceles: AB = AC.", "اجعل المثلث متساوي الساقين: AB = AC."), t("Make it equilateral.", "اجعله متساوي الأضلاع."), t("Make an isosceles triangle with vertex angle 40°. What are the base angles?", "كوّن مثلثًا متساوي الساقين زاوية رأسه ٤٠°. كم قياس زاويتي القاعدة؟"), t("Make base angles of 30° and look at the two 30°-60°-90° halves.", "اجعل زاويتي القاعدة ٣٠° وانظر إلى النصفين الثلاثينيين الستينيين.")], done);
    function T() { var u = Math.min((S.H - 56) / 7.4, (S.W - 40) / 11), ox = S.W / 2, oy = S.H - 34; return { u: u, P: function (p) { return { x: ox + p.x * u, y: oy - p.y * u }; }, G: function (q) { return { x: (q.x - ox) / u, y: (oy - q.y) / u }; } }; }
    function info() { var ab = dist(A, B), ac = dist(A, Cc), iso = Math.abs(ab - ac) < 1e-9; return { ab: ab, ac: ac, iso: iso, eqi: iso && Math.abs(ab - 4) < 1e-9, a: ang(B, A, Cc), b: ang(A, B, Cc), c: ang(A, Cc, B) }; }
    function upd() {
      var I = info();
      out.innerHTML = "<span>" + eq("AB = " + n(r2(I.ab)) + ", AC = " + n(r2(I.ac)) + ", BC = 4") + "</span><span>" + eq("∠A = " + n(r1(I.a)) + "°, ∠B = " + n(r1(I.b)) + "°, ∠C = " + n(r1(I.c)) + "°") + "</span>" +
        "<span><b>" + (I.eqi ? t("Equilateral: every angle is 60°.", "متساوي الأضلاع: كل زاوية ٦٠°.") : I.iso ? t("Isosceles: the base angles are equal, and the axis of symmetry is the median, the bisector and the perpendicular.", "متساوي الساقين: زاويتا القاعدة متساويتان، ومحور التماثل هو المتوسط والمنصف والعمود.") : t("Scalene: no axis of symmetry.", "مختلف الأضلاع: لا يوجد محور تماثل.")) + "</b>" +
        (I.iso && Math.abs(I.b - 30) < 0.05 ? " " + t("In each half: the side opposite 30° (AD = ", "في كل نصف: الضلع المقابل للزاوية ٣٠° (AD = ") + eq(n(r2(A.y))) + t(") is half the hypotenuse AB = ", ") نصف الوتر AB = ") + eq(n(r2(I.ab))) + "." : "") + "</span>";
      if (I.iso) tick(0);
      if (I.eqi) tick(1);
      if (I.iso && Math.abs(I.a - 40) < 0.05) tick(2);
      if (I.iso && Math.abs(I.b - 30) < 0.05) tick(3);
    }
    S.drag({
      down: function (p) { var q = T().P(A); if (Math.hypot(p.x - q.x, p.y - q.y) < 22) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag) return;
        var q = T().G(p); A.x = clamp(q.x, -5, 5); A.y = clamp(q.y, 0.5, 7);
        if (Math.abs(A.x) < 0.15) { A.x = 0; [H3, H40, H30].forEach(function (h) { if (Math.abs(A.y - h) < 0.12) A.y = h; }); }
        upd();
      },
      up: function () { drag = false; },
      hover: function (p) { var q = T().P(A); return Math.hypot(p.x - q.x, p.y - q.y) < 22; }
    });
    upd();
    function arc(x, v, a1, a2, col) { x.strokeStyle = col; x.lineWidth = 2; x.beginPath(); x.arc(v.x, v.y, 22, a1, a2, false); x.stroke(); }
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, tr = T(), pa = tr.P(A), pb = tr.P(B), pc = tr.P(Cc), I = info();
      x.clearRect(0, 0, W, H);
      x.strokeStyle = C.line; x.lineWidth = 1; x.beginPath(); x.moveTo(10, pb.y); x.lineTo(W - 10, pb.y); x.stroke();
      if (I.iso) { var pd = tr.P({ x: 0, y: 0 }); line(x, { x: pd.x, y: 8 }, { x: pd.x, y: pd.y + 20 }, PU, 2, [7, 5]); K.txt(x, t("axis", "المحور"), pd.x + 6, 14, { s: 11, c: PU, a: "left" }); K.rr(x, pd.x, pd.y - 10, 10, 10, 0); x.strokeStyle = PU; x.lineWidth = 1.5; x.stroke(); }
      poly(x, [pa, pb, pc], I.eqi ? "rgba(34,197,94,.25)" : I.iso ? "rgba(168,85,247,.18)" : "rgba(249,115,22,.15)", C.ink, 3);
      var cb = I.iso ? GR : OR;
      arc(x, pb, Math.atan2(pa.y - pb.y, pa.x - pb.x), 0, cb);
      arc(x, pc, Math.PI, Math.atan2(pa.y - pc.y, pa.x - pc.x) + 2 * Math.PI, cb);
      if (I.iso) { [[pa, pb], [pa, pc]].forEach(function (s) { var mx = (s[0].x + s[1].x) / 2, my = (s[0].y + s[1].y) / 2, dx = s[1].y - s[0].y, dy = s[0].x - s[1].x, L0 = Math.hypot(dx, dy) || 1; line(x, { x: mx - dx / L0 * 7, y: my - dy / L0 * 7 }, { x: mx + dx / L0 * 7, y: my + dy / L0 * 7 }, GR, 2.5); }); }
      K.txt(x, n(r1(I.b)) + "°", pb.x + 34, pb.y - 12, { s: 12, c: C.ink }); K.txt(x, n(r1(I.c)) + "°", pc.x - 34, pc.y - 12, { s: 12, c: C.ink });
      K.txt(x, n(r1(I.a)) + "°", pa.x, pa.y + 26, { s: 12, c: C.ink });
      K.txt(x, "B", pb.x - 12, pb.y + 14, { s: 13, c: C.ink }); K.txt(x, "C", pc.x + 12, pc.y + 14, { s: 13, c: C.ink });
      handle(x, pa, OR, "A", C);
    });
  };

  /* =========================================================
     mprep2_poly - regular polygons: triangles, diagonals, exterior turn
     ========================================================= */
  L.mprep2_poly = function (host, cfg, done) {
    host.innerHTML = hint(t("Slide n to change the regular polygon. Toggle the diagonals. Then shrink the polygon: the exterior angles slide together into one full turn.", "حرّك n لتغيير المضلع المنتظم، وأظهر الأقطار أو أخفها، ثم صغّر المضلع: تتجمع الزوايا الخارجة في دورة كاملة."));
    var S = K.make(host, 0.6, 400), N = 5, sz = 100, diag = false, cur = 1;
    var c = ctl(host, L._slider(t("Sides n", "عدد الأضلاع n"), 3, 20, 1, N) + L._slider(t("Size", "الحجم"), 0, 100, 2, sz, "%") + '<div class="btn-row"><button type="button" class="btn sm tg" id="pgD">' + t("Show diagonals", "اعرض الأقطار") + '</button></div><div class="meter pg-out"></div>'), out = c.querySelector(".pg-out");
    var tick = L._goals(host, [t("Find the interior angle of the regular octagon (the Octagon building).", "أوجد قياس الزاوية الداخلة للثماني المنتظم (مبنى الأوكتاجون)."), t("Find the polygon whose interior angles add up to 1440°.", "أوجد المضلع الذي مجموع قياسات زواياه الداخلة ١٤٤٠°."), t("Find the regular polygon whose exterior angle is 24°.", "أوجد المضلع المنتظم الذي قياس زاويته الخارجة ٢٤°."), t("Shrink the polygon to a point: what do the exterior angles add up to?", "صغّر المضلع إلى نقطة: كم مجموع الزوايا الخارجة؟")], done);
    bindSl(c, 0, function (v) { N = v; upd(); });
    bindSl(c, 1, function (v) { sz = v; upd(); });
    c.querySelector("#pgD").onclick = function () { diag = !diag; this.classList.toggle("on", diag); };
    function upd() {
      var sum = (N - 2) * 180, ia = sum / N, ea = 360 / N;
      out.innerHTML = "<span>" + eq("n = " + n(N)) + " · " + n(N - 2) + " " + t("triangles", "مثلثات") + " · " + eq("(n − 2) × 180° = " + n(sum) + "°") + "</span><span>" + t("Each interior angle ", "كل زاوية داخلة ") + eq(n(r2(ia)) + "°") + " · " + t("each exterior angle ", "كل زاوية خارجة ") + eq(n(r2(ea)) + "°") + " · " + t("diagonals ", "الأقطار ") + eq("n(n − 3) ÷ 2 = " + n(N * (N - 3) / 2)) + "</span>" +
        (sz <= 4 ? "<span><b>" + t("The exterior angles fill one full turn: 360°.", "الزوايا الخارجة تملأ دورة كاملة: ٣٦٠°.") + "</b></span>" : "");
      if (N === 8) tick(0);
      if (N === 10) tick(1);
      if (N === 15) tick(2);
      if (sz <= 4) tick(3);
    }
    upd();
    var COLS = [BL, OR, GR, PU, RE, TE];
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, cx = W / 2, cy = H / 2, R = Math.min(W, H) * 0.36 * sz / 100, i, j, V = [];
      x.clearRect(0, 0, W, H);
      for (i = 0; i < N; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / N; V.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) }); }
      if (R > 8) {
        for (i = 1; i < N - 1; i++) poly(x, [V[0], V[i], V[i + 1]], COLS[i % 6] + "30", null);
        if (diag) for (i = 0; i < N; i++) for (j = i + 2; j < N; j++) if (!(i === 0 && j === N - 1)) line(x, V[i], V[j], C.muted, 1);
        poly(x, V, null, C.ink, 2.5);
        for (i = 1; i < N - 1 && !diag; i++) line(x, V[0], V[i + 1], C.muted, 1, [4, 4]);
      }
      var re = Math.max(16, Math.min(34, Math.min(W, H) * 0.08));
      for (i = 0; i < N; i++) {
        var p = V[i], prev = V[(i + N - 1) % N], a1 = Math.atan2(p.y - prev.y, p.x - prev.x), a2 = a1 + 2 * Math.PI / N;
        if (R > 8) line(x, p, { x: p.x + Math.cos(a1) * re * 1.6, y: p.y + Math.sin(a1) * re * 1.6 }, C.muted, 1.5, [4, 3]);
        x.fillStyle = COLS[i % 6] + "aa"; x.beginPath(); x.moveTo(p.x, p.y); x.arc(p.x, p.y, re, a1, a2); x.closePath(); x.fill();
      }
      if (sz <= 4) K.txt(x, "360°", cx, cy - re - 14, { s: 16, c: C.ink });
      K.txt(x, n(r1((N - 2) * 180 / N)) + "°", V[0].x, V[0].y + (R > 30 ? 26 : -26), { s: 12, c: C.ink });
    });
  };

  /* =========================================================
     mprep2_cumfreq - histogram to ascending cumulative curve
     ========================================================= */
  L.mprep2_cumfreq = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the bars up or down to set the frequency of each mark interval. The right graph builds the ascending cumulative curve; drag the green line to read it.", "اسحب المستطيلات لأعلى أو لأسفل لتحدد تكرار كل فئة من الدرجات، فيُبنى المنحنى المتجمع الصاعد على اليمين، واسحب الخط الأخضر لتقرأ منه."));
    var S = K.make(host, 0.55, 360), f = [3, 5, 8, 6, 4], LIM = [10, 20, 30, 40, 50, 60], xr = 45, drag = null;
    var c = ctl(host, '<div class="meter cf-out"></div>'), out = c.querySelector(".cf-out");
    var tick = L._goals(host, [t("Enter the book's science marks: 2, 10, 9, 5, 2.", "أدخل درجات العلوم في الكتاب: ٢ و١٠ و٩ و٥ و٢."), t("With the book's data, read how many got less than 30.", "باستخدام بيانات الكتاب، اقرأ عدد من حصلوا على أقل من ٣٠."), t("Make 40 students with exactly 20 of them below 30.", "كوّن ٤٠ طالبًا منهم ٢٠ تمامًا أقل من ٣٠.")], done);
    function cum() { var a = [0], s = 0; f.forEach(function (v) { s += v; a.push(s); }); return a; }
    function read(xv) { var cf = cum(); if (xv <= 10) return 0; if (xv >= 60) return cf[5]; var i = Math.floor((xv - 10) / 10), fr = (xv - LIM[i]) / 10; return cf[i] + (cf[i + 1] - cf[i]) * fr; }
    function book() { return f.join() === "2,10,9,5,2"; }
    function upd() {
      var cf = cum(), tot = cf[5], rv = read(xr);
      out.innerHTML = "<span>" + LIM.map(function (l, i) { return t("less than ", "أقل من ") + n(l) + ": <b>" + n(cf[i]) + "</b>"; }).join(" · ") + "</span>" +
        "<span>" + t("Total = ", "المجموع = ") + eq(n(tot)) + " · " + t("Reading: less than ", "القراءة: أقل من ") + eq(n(xr)) + " → " + eq(n(r1(rv))) + "</span>";
      if (book()) tick(0);
      if (book() && xr === 30) tick(1);
      if (tot === 40 && cf[2] === 20) tick(2);
    }
    function lay() { var W = S.W, H = S.H, top = 24, bot = H - 30; return { L0: 36, L1: W * 0.47, R0: W * 0.56, R1: W - 14, top: top, bot: bot }; }
    S.drag({
      down: function (p) {
        var g = lay(), bw = (g.L1 - g.L0) / 5;
        if (p.x >= g.L0 && p.x <= g.L1) { drag = { bar: Math.min(4, Math.floor((p.x - g.L0) / bw)) }; this.move(p); return true; }
        if (p.x >= g.R0 - 10 && p.x <= g.R1 + 10) { drag = { read: true }; this.move(p); return true; }
        return false;
      },
      move: function (p) {
        if (!drag) return;
        var g = lay();
        if (drag.read) { var v = clamp(Math.round(10 + (p.x - g.R0) / (g.R1 - g.R0) * 50), 10, 60); if (v !== xr) { xr = v; upd(); } return; }
        var fv = clamp(Math.round((g.bot - p.y) / (g.bot - g.top) * 15), 0, 15);
        if (fv !== f[drag.bar]) { f[drag.bar] = fv; upd(); }
      },
      up: function () { drag = null; },
      hover: function (p) { var g = lay(); return (p.x >= g.L0 && p.x <= g.L1) || (p.x >= g.R0 && p.x <= g.R1); }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, g = lay(), bw = (g.L1 - g.L0) / 5, cf = cum(), tot = Math.max(cf[5], 5), ymax = Math.ceil(tot / 5) * 5, i;
      x.clearRect(0, 0, W, H);
      /* histogram */
      line(x, { x: g.L0, y: g.bot }, { x: g.L1, y: g.bot }, C.ink, 2); line(x, { x: g.L0, y: g.bot }, { x: g.L0, y: g.top - 6 }, C.ink, 2);
      for (i = 0; i <= 15; i += 5) { var yy = g.bot - i / 15 * (g.bot - g.top); K.txt(x, n(i), g.L0 - 8, yy, { s: 10, c: C.muted, a: "right" }); }
      for (i = 0; i < 5; i++) {
        var hh = f[i] / 15 * (g.bot - g.top), bx = g.L0 + i * bw;
        x.fillStyle = "rgba(59,130,246,.5)"; x.fillRect(bx + 2, g.bot - hh, bw - 4, hh); x.strokeStyle = BL; x.lineWidth = 2; x.strokeRect(bx + 2, g.bot - hh, bw - 4, hh);
        K.txt(x, n(f[i]), bx + bw / 2, g.bot - hh - 9, { s: 12, c: C.ink }); K.txt(x, n(LIM[i]) + "-", bx + bw / 2, g.bot + 14, { s: 11, c: C.muted });
      }
      K.txt(x, t("frequency", "التكرار"), g.L0, 10, { s: 11, c: C.muted, a: "left" });
      /* cumulative curve */
      var X = function (v) { return g.R0 + (v - 10) / 50 * (g.R1 - g.R0); }, Y = function (v) { return g.bot - v / ymax * (g.bot - g.top); };
      line(x, { x: g.R0, y: g.bot }, { x: g.R1, y: g.bot }, C.ink, 2); line(x, { x: g.R0, y: g.bot }, { x: g.R0, y: g.top - 6 }, C.ink, 2);
      for (i = 0; i <= ymax; i += Math.max(5, ymax / 4)) K.txt(x, n(i), g.R0 - 6, Y(i), { s: 10, c: C.muted, a: "right" });
      LIM.forEach(function (l) { K.txt(x, n(l), X(l), g.bot + 14, { s: 10, c: C.muted }); });
      x.strokeStyle = OR; x.lineWidth = 3; x.beginPath(); LIM.forEach(function (l, k) { if (k) x.lineTo(X(l), Y(cf[k])); else x.moveTo(X(l), Y(cf[k])); }); x.stroke();
      LIM.forEach(function (l, k) { K.dot(x, X(l), Y(cf[k]), 4, OR); });
      var rv = read(xr);
      line(x, { x: X(xr), y: g.bot }, { x: X(xr), y: Y(rv) }, GR, 2.5); line(x, { x: X(xr), y: Y(rv) }, { x: g.R0, y: Y(rv) }, GR, 1.5, [5, 4]);
      K.dot(x, X(xr), Y(rv), 6, GR); K.txt(x, n(r1(rv)), g.R0 + 6, Y(rv) - 9, { s: 12, c: GR, a: "left" });
      K.txt(x, t("ascending cumulative frequency", "التكرار المتجمع الصاعد"), g.R0, 10, { s: 11, c: C.muted, a: "left" });
    });
  };

  /* =========================================================
     mprep2_central - mean, median and mode of a histogram
     ========================================================= */
  L.mprep2_central = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the bars to set how many cars drove at each speed. The orange triangle balances the histogram at the mean; the crossing lines on the tallest bar find the mode.", "اسحب المستطيلات لتحدد عدد السيارات في كل فئة سرعة؛ المثلث البرتقالي يوازن المدرج عند الوسط الحسابي، والخطان المتقاطعان على أطول مستطيل يحددان المنوال."));
    var S = K.make(host, 0.55, 360), f = [6, 10, 15, 10, 6], LO = [80, 90, 100, 110, 120], drag = -1;
    var c = ctl(host, '<div class="meter ce-out"></div>'), out = c.querySelector(".ce-out");
    var tick = L._goals(host, [t("Enter the book's car speeds: 13, 17, 24, 32, 14. What is the mean?", "أدخل سرعات السيارات في الكتاب: ١٣ و١٧ و٢٤ و٣٢ و١٤. كم الوسط الحسابي؟"), t("Make the mean exactly 100 km/h.", "اجعل الوسط الحسابي ١٠٠ كم/س تمامًا."), t("Make the modal interval 90-.", "اجعل الفئة المنوالية 90-.")], done);
    function stats() {
      var sf = 0, sfx = 0, i, mi = 0;
      f.forEach(function (v, k) { sf += v; sfx += v * (LO[k] + 5); if (v > f[mi]) mi = k; });
      var mean = sf ? sfx / sf : NaN, d1 = f[mi] - (mi ? f[mi - 1] : 0), d2v = f[mi] - (mi < 4 ? f[mi + 1] : 0), mode = d1 + d2v ? LO[mi] + 10 * d1 / (d1 + d2v) : LO[mi] + 5;
      var half = sf / 2, run = 0, med = NaN;
      for (i = 0; i < 5; i++) { if (f[i] && run + f[i] >= half) { med = LO[i] + 10 * (half - run) / f[i]; break; } run += f[i]; }
      var uniq = f.filter(function (v) { return v === f[mi]; }).length === 1;
      return { sf: sf, sfx: sfx, mean: mean, mode: mode, mi: mi, med: med, uniq: uniq };
    }
    function upd() {
      var s = stats();
      out.innerHTML = "<span>" + eq("Σf = " + n(s.sf) + ", Σ(f × xₘ) = " + n(s.sfx)) + "</span><span>" + t("Mean ", "الوسط ") + eq("x̄ = " + (s.sf ? n(s.sfx) + " ÷ " + n(s.sf) + " = " + n(r2(s.mean)) : "—")) + "</span>" +
        "<span>" + t("Median ≈ ", "الوسيط ≈ ") + eq(isNaN(s.med) ? "—" : n(r1(s.med))) + " · " + t("Mode ≈ ", "المنوال ≈ ") + eq(s.sf ? n(r1(s.mode)) : "—") + (s.uniq ? "" : " (" + t("two tallest bars", "أطول مستطيلين متساويين") + ")") + "</span>";
      if (f.join() === "13,17,24,32,14") tick(0);
      if (s.sf && Math.abs(s.mean - 100) < 1e-9) tick(1);
      if (s.sf && s.mi === 1 && s.uniq) tick(2);
    }
    function lay() { return { L0: 40, L1: S.W - 16, top: 22, bot: S.H - 46 }; }
    S.drag({
      down: function (p) { var g = lay(); if (p.x < g.L0 || p.x > g.L1 || p.y > g.bot + 4) return false; drag = Math.min(4, Math.floor((p.x - g.L0) / ((g.L1 - g.L0) / 5))); this.move(p); return true; },
      move: function (p) { if (drag < 0) return; var g = lay(), v = clamp(Math.round((g.bot - p.y) / (g.bot - g.top) * 40), 0, 40); if (v !== f[drag]) { f[drag] = v; upd(); } },
      up: function () { drag = -1; },
      hover: function (p) { var g = lay(); return p.x >= g.L0 && p.x <= g.L1 && p.y <= g.bot; }
    });
    upd();
    S.loop(function () {
      var x = S.ctx, C = S.C, W = S.W, H = S.H, g = lay(), bw = (g.L1 - g.L0) / 5, s = stats(), i;
      var X = function (v) { return g.L0 + (v - 80) / 50 * (g.L1 - g.L0); }, Y = function (v) { return g.bot - v / 40 * (g.bot - g.top); };
      x.clearRect(0, 0, W, H);
      line(x, { x: g.L0, y: g.bot }, { x: g.L1, y: g.bot }, C.ink, 2); line(x, { x: g.L0, y: g.bot }, { x: g.L0, y: g.top - 6 }, C.ink, 2);
      for (i = 0; i <= 40; i += 10) K.txt(x, n(i), g.L0 - 8, Y(i), { s: 10, c: C.muted, a: "right" });
      for (i = 0; i < 5; i++) {
        var bx = g.L0 + i * bw, top = Y(f[i]), mod = s.sf && i === s.mi;
        x.fillStyle = mod ? "rgba(168,85,247,.45)" : "rgba(59,130,246,.45)"; x.fillRect(bx, top, bw, g.bot - top); x.strokeStyle = mod ? PU : BL; x.lineWidth = 2; x.strokeRect(bx, top, bw, g.bot - top);
        K.txt(x, n(f[i]), bx + bw / 2, top - 9, { s: 12, c: C.ink });
      }
      for (i = 0; i <= 5; i++) K.txt(x, n(80 + i * 10), X(80 + i * 10), g.bot + 13, { s: 10, c: C.muted });
      if (s.sf) {
        var m = s.mi, bx0 = g.L0 + m * bw, tl = { x: bx0, y: Y(f[m]) }, tr = { x: bx0 + bw, y: Y(f[m]) }, pl = { x: bx0, y: Y(m ? f[m - 1] : 0) }, pr = { x: bx0 + bw, y: Y(m < 4 ? f[m + 1] : 0) };
        line(x, tl, pr, OR, 2); line(x, tr, pl, OR, 2);
        line(x, { x: X(s.mode), y: g.bot }, { x: X(s.mode), y: Y(f[m]) }, OR, 1.5, [5, 4]); K.txt(x, t("mode", "المنوال"), X(s.mode), g.top - 10, { s: 11, c: OR });
        var mx = X(s.mean); x.fillStyle = OR; x.beginPath(); x.moveTo(mx, g.bot + 18); x.lineTo(mx - 10, g.bot + 34); x.lineTo(mx + 10, g.bot + 34); x.closePath(); x.fill();
        K.txt(x, "x̄ = " + n(r1(s.mean)), mx + 14, g.bot + 30, { s: 12, c: C.ink, a: "left" });
        if (!isNaN(s.med)) { x.fillStyle = GR; x.fillRect(X(s.med) - 1.5, g.bot - 8, 3, 16); }
      }
      K.txt(x, t("speed (km/h) · green tick = median", "السرعة (كم/س) · العلامة الخضراء = الوسيط"), W - 14, H - 6, { s: 10, c: C.muted, a: "right" });
    });
  };
})();
/* ---------- Prep 2 maths: objectives, extra quiz items, diagrams, lab names ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;

  /* ---------- "In this lesson" objectives (from the book's learning outcomes) ---------- */
  var O = {
    mprep2u1l1: [["The concept of an irrational number", "مفهوم العدد غير النسبي"], ["Estimating √ and ∛ values on a number line", "تقدير قيم الجذور على خط الأعداد"], ["The set of real numbers R = Q ∪ Q′", "مجموعة الأعداد الحقيقية ح = ن ∪ ن′"], ["Ordering real numbers and solving equations in R", "ترتيب الأعداد الحقيقية وحل المعادلات في ح"]],
    mprep2u1l2: [["An interval as a subset of R", "الفترة مجموعة جزئية من ح"], ["Closed, open, half-open and unbounded intervals", "الفترات المغلقة والمفتوحة ونصف المفتوحة وغير المحدودة"], ["Union, intersection, difference and complement", "الاتحاد والتقاطع والفرق والمكملة"], ["Solving real-life problems with intervals", "حل مسائل حياتية باستخدام الفترات"]],
    mprep2u1l3: [["Like radical terms", "الحدود الجذرية المتشابهة"], ["Adding, subtracting, multiplying radicals", "جمع الجذور وطرحها وضربها"], ["Making a denominator an integer; conjugates", "جعل المقام عددًا صحيحًا؛ المترافقان"], ["Properties of operations in R", "خواص العمليات في ح"]],
    mprep2u1l4: [["Product and quotient laws of square roots", "قانونا ضرب الجذور التربيعية وقسمتها"], ["Laws of cube roots", "قوانين الجذور التكعيبية"], ["Writing roots in simplest form", "كتابة الجذور في أبسط صورة"], ["Using root laws in real-life problems", "استخدام قوانين الجذور في مسائل حياتية"]],
    mprep2u1l5: [["Repeated multiplication in R", "الضرب المتكرر في ح"], ["Zero and negative exponents", "الأس الصفري والأس السالب"], ["Laws of multiplication and division of powers", "قوانين ضرب القوى وقسمتها"], ["Simplifying expressions with exponents", "تبسيط المقادير ذات الأسس"]],
    mprep2u2l1: [["Polynomials: monomial, binomial, trinomial", "كثيرات الحدود: وحيدة الحد وذات الحدين وذات الثلاثة حدود"], ["Finding the GCF of the terms", "إيجاد العامل المشترك الأكبر للحدود"], ["Factorizing by taking out the GCF", "التحليل بإخراج ع.م.أ"], ["Solving equations with a × b = 0", "حل المعادلات باستخدام a × b = 0"]],
    mprep2u2l2: [["Factorizing x² + bx + c", "تحليل x² + bx + c"], ["Factorizing ax² + bx + c (a ≠ ±1)", "تحليل ax² + bx + c حيث a ≠ ±1"], ["Complete factorization", "التحليل التام"], ["Solving quadratic equations by factorizing", "حل معادلات الدرجة الثانية بالتحليل"]],
    mprep2u2l3: [["Perfect square trinomials", "المقدار الثلاثي المربع الكامل"], ["The difference of two squares", "الفرق بين مربعين"], ["The sum and difference of two cubes", "مجموع مكعبين والفرق بينهما"], ["Using factorization for fast arithmetic", "استخدام التحليل في الحساب السريع"]],
    mprep2u2l4: [["Factorizing four terms by grouping", "تحليل أربعة حدود بالتقسيم"], ["Splitting the middle term", "تجزئة الحد الأوسط"], ["Completing the square", "إكمال المربع"], ["Solving equations by completing the square", "حل المعادلات بإكمال المربع"]],
    mprep2u3l1: [["Congruent segments, angles and polygons", "تطابق القطع المستقيمة والزوايا والمضلعات"], ["The five cases of congruent triangles", "حالات تطابق المثلثين الخمس"], ["Finding lengths and angles from congruence", "إيجاد الأطوال والزوايا من التطابق"], ["Writing a congruence proof", "كتابة برهان التطابق"]],
    mprep2u3l2: [["Pythagoras' theorem", "نظرية فيثاغورس"], ["Finding a missing side of a right triangle", "إيجاد ضلع مجهول في مثلث قائم"], ["The converse of Pythagoras' theorem", "عكس نظرية فيثاغورس"], ["Acute, right or obtuse from the sides", "حاد أم قائم أم منفرج من أطوال الأضلاع"]],
    mprep2u3l3: [["Parallel lines cut equal parts on transversals", "المستقيمات المتوازية تقطع أجزاء متساوية على القواطع"], ["The ray from a midpoint parallel to a side", "المستقيم المرسوم من المنتصف موازيًا لضلع"], ["The midsegment of a triangle", "القطعة الواصلة بين منتصفي ضلعين"], ["Midsegment = ½ the third side", "طولها نصف طول الضلع الثالث"]],
    mprep2u3l4: [["The median of a triangle", "متوسط المثلث"], ["The centroid and the 2 : 1 ratio", "نقطة تقاطع المتوسطات والنسبة ٢ : ١"], ["Median to the hypotenuse = ½ hypotenuse", "المتوسط إلى الوتر = نصف الوتر"], ["The converse and real-life balance problems", "العكس ومسائل الاتزان الحياتية"]],
    mprep2u3l5: [["Isosceles triangle theorem and its converse", "نظرية المثلث المتساوي الساقين وعكسها"], ["The equilateral triangle", "المثلث المتساوي الأضلاع"], ["Axes of symmetry", "محاور التماثل"], ["The 30°-60°-90° triangle", "المثلث الثلاثيني الستيني"]],
    mprep2u3l6: [["Sum of interior angles (n − 2) × 180°", "مجموع الزوايا الداخلة (n − 2) × 180°"], ["Sum of exterior angles = 360°", "مجموع الزوايا الخارجة = ٣٦٠°"], ["Angles of a regular polygon", "زوايا المضلع المنتظم"], ["Number of diagonals n(n − 3) ÷ 2", "عدد الأقطار n(n − 3) ÷ 2"]],
    mprep2u4l1: [["Frequency tables with intervals", "الجداول التكرارية ذات الفئات"], ["Forming the ascending cumulative table", "تكوين الجدول التكراري المتجمع الصاعد"], ["Drawing the ascending cumulative curve", "رسم المنحنى التكراري المتجمع الصاعد"], ["Reading 'less than' and 'or more' values and percentages", "قراءة قيم «أقل من» و«فأكثر» والنسب المئوية"]],
    mprep2u4l2: [["Estimating the mean with interval centres", "تقدير الوسط الحسابي بمراكز الفئات"], ["Estimating the median from the cumulative curve", "تقدير الوسيط من المنحنى المتجمع"], ["Estimating the mode from the histogram", "تقدير المنوال من المدرج التكراري"], ["Interpreting tables and graphs", "قراءة الجداول والرسوم وتفسيرها"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return x[1]; }) }; });

  /* ---------- extra quiz items (order / match / tf) ---------- */
  EX.mprep2u1l1 = [
    { k: "order", q: ["Order from the smallest to the largest.", "رتّب تصاعديًا."], items: [["√2 ≈ 1.41", "√2 ≈ 1.41"], ["(1 + √5) ÷ 2 ≈ 1.62", "(1 + √5) ÷ 2 ≈ 1.62"], ["∛20 ≈ 2.71", "∛20 ≈ 2.71"], ["π ≈ 3.14", "π ≈ 3.14"], ["√11 ≈ 3.32", "√11 ≈ 3.32"]],
      off: ["Estimate each number between two integers, then compare the decimals.", "قدّر كل عدد بين عددين صحيحين ثم قارن الأرقام العشرية."], sto: ["Malak lines up the irrational numbers on her ruler.", "ترتب ملك الأعداد غير النسبية على مسطرتها."] },
    { k: "tf", a: true, q: ["True or false: N ⊂ Z ⊂ Q ⊂ R.", "صواب أم خطأ: ط ⊂ ص ⊂ ن ⊂ ح."],
      off: ["True. Every natural number is an integer, every integer is rational and every rational number is real.", "صواب؛ كل عدد طبيعي صحيح، وكل صحيح نسبي، وكل نسبي حقيقي."], sto: ["Boxes inside boxes, with R the biggest box.", "صناديق داخل صناديق، وح أكبرها."] }
  ];
  EX.mprep2u1l2 = [
    { k: "match", q: ["Match each set to its interval.", "صِل كل مجموعة بالفترة التي تمثلها."], pairs: [[["{x : 1 < x ≤ 3}", "{x : 1 < x ≤ 3}"], ["]1, 3]", "]1, 3]"]], [["{x : x ≥ −2}", "{x : x ≥ −2}"], ["[−2, ∞[", "[−2, ∞["]], [["{x : x < 1}", "{x : x < 1}"], ["]−∞, 1[", "]−∞, 1["]], [["{x : −2 < x < 2}", "{x : −2 < x < 2}"], ["]−2, 2[", "]−2, 2["]]],
      off: ["≤ and ≥ give closed ends; < and > give open ends; ∞ is always open.", "≤ و≥ تعطيان طرفًا مغلقًا، و< و> تعطيان طرفًا مفتوحًا، و∞ دائمًا مفتوح."], sto: ["Filled dot means 'allowed in', hollow dot means 'just outside'.", "النقطة المظللة تعني «مسموح بالدخول» والفارغة تعني «خارج الباب»."] },
    { k: "tf", a: false, q: ["True or false: X − Y = Y − X for any two intervals.", "صواب أم خطأ: X − Y = Y − X لأي فترتين."],
      off: ["False. With X = [−1, 3], Y = [1, 4]: X − Y = [−1, 1[ but Y − X = ]3, 4].", "خطأ؛ إذا كانت X = [−1, 3] وY = [1, 4] فإن X − Y = [−1, 1[ بينما Y − X = ]3, 4]."], sto: ["Taking Y away from X leaves a different piece than taking X away from Y.", "حذف Y من X يترك جزءًا مختلفًا عن حذف X من Y."] }
  ];
  EX.mprep2u1l3 = [
    { k: "match", q: ["Match each number to its multiplicative inverse in simplest form.", "صِل كل عدد بمعكوسه الضربي في أبسط صورة."], pairs: [[["2 − √3", "2 − √3"], ["2 + √3", "2 + √3"]], [["√5", "√5"], ["√5 ÷ 5", "√5 ÷ 5"]], [["3√2", "3√2"], ["√2 ÷ 6", "√2 ÷ 6"]], [["√2 + 1", "√2 + 1"], ["√2 − 1", "√2 − 1"]]],
      off: ["Multiply top and bottom by the root or the conjugate: e.g. 1 ÷ (√2 + 1) = (√2 − 1) ÷ (2 − 1) = √2 − 1.", "نضرب البسط والمقام في الجذر أو المرافق، مثل 1 ÷ (√2 + 1) = (√2 − 1) ÷ (2 − 1) = √2 − 1."], sto: ["Each pair multiplies to exactly 1.", "حاصل ضرب كل زوج يساوي ١ تمامًا."] },
    { k: "tf", a: false, q: ["True or false: 2√5 + 5 = 7√5.", "صواب أم خطأ: 2√5 + 5 = 7√5."],
      off: ["False. 2√5 and 5 are not like terms, so they cannot be added into one term.", "خطأ؛ 2√5 و5 ليسا حدين متشابهين فلا يُجمعان في حد واحد."], sto: ["Islam tried to add apples and oranges.", "حاول إسلام جمع التفاح مع البرتقال."] }
  ];
  EX.mprep2u1l4 = [
    { k: "match", q: ["Match each root to its simplest form.", "صِل كل جذر بأبسط صورة له."], pairs: [[["√32", "√32"], ["4√2", "4√2"]], [["√48", "√48"], ["4√3", "4√3"]], [["∛24", "∛24"], ["2∛3", "2∛3"]], [["√72", "√72"], ["6√2", "6√2"]]],
      off: ["Take out the largest perfect square (or cube): 16, 16, 8 and 36.", "أخرج أكبر مربع كامل (أو مكعب كامل): ١٦ و١٦ و٨ و٣٦."], sto: ["Pack each pile of tiles into the biggest perfect squares.", "رتّب كل كومة بلاطات في أكبر مربعات كاملة."] },
    { k: "tf", a: false, q: ["True or false: √9 + √16 = √25.", "صواب أم خطأ: √9 + √16 = √25."],
      off: ["False. √9 + √16 = 3 + 4 = 7 but √25 = 5: √a + √b ≠ √(a + b).", "خطأ؛ √9 + √16 = 3 + 4 = 7 بينما √25 = 5، أي أن √a + √b ≠ √(a + b)."], sto: ["Two sides of a right triangle are longer together than the hypotenuse.", "ضلعا المثلث القائم معًا أطول من الوتر."] }
  ];
  EX.mprep2u1l5 = [
    { k: "order", q: ["Order from the smallest to the largest.", "رتّب تصاعديًا."], items: [["2⁻³", "2⁻³"], ["(√3)⁰", "(√3)⁰"], ["(√2)⁴", "(√2)⁴"], ["2⁴", "2⁴"], ["(3√2)²", "(3√2)²"]],
      off: ["2⁻³ = 1 ÷ 8, (√3)⁰ = 1, (√2)⁴ = 4, 2⁴ = 16, (3√2)² = 18.", "2⁻³ = 1 ÷ 8 و(√3)⁰ = 1 و(√2)⁴ = 4 و2⁴ = 16 و(3√2)² = 18."], sto: ["Work out each value first, then line them up.", "احسب كل قيمة أولًا ثم رتّبها."] },
    { k: "tf", a: false, q: ["True or false: (a + b)² = a² + b².", "صواب أم خطأ: (a + b)² = a² + b²."],
      off: ["False. (a + b)² = a² + 2ab + b²; the exponent distributes over a product, not over a sum.", "خطأ؛ (a + b)² = a² + 2ab + b²، والأس يتوزع على الضرب لا على الجمع."], sto: ["Try a = b = 1: 4 is not 2.", "جرّب a = b = 1: ٤ لا تساوي ٢."] }
  ];
  EX.mprep2u2l1 = [
    { k: "match", q: ["Match each polynomial to its complete factorization.", "صِل كل كثيرة حدود بتحليلها التام."], pairs: [[["6x² − 15x", "6x² − 15x"], ["3x(2x − 5)", "3x(2x − 5)"]], [["4x² + 12x", "4x² + 12x"], ["4x(x + 3)", "4x(x + 3)"]], [["15x²y − 30xy²", "15x²y − 30xy²"], ["15xy(x − 2y)", "15xy(x − 2y)"]], [["−4x⁴ + 12x³ − 8x²", "−4x⁴ + 12x³ − 8x²"], ["−4x²(x² − 3x + 2)", "−4x²(x² − 3x + 2)"]]],
      off: ["In each, the GCF is the largest number and the smallest powers shared by every term.", "في كل منها ع.م.أ هو أكبر عدد وأصغر قوى مشتركة بين كل الحدود."], sto: ["Adam checks each by multiplying back.", "يتحقق آدم من كل منها بالضرب."] },
    { k: "tf", a: false, q: ["True or false: to solve x² = 3x we may divide both sides by x.", "صواب أم خطأ: لحل x² = 3x يمكننا قسمة الطرفين على x."],
      off: ["False. Dividing by x loses the solution x = 0. Factorize: x(x − 3) = 0, so {0, 3}.", "خطأ؛ القسمة على x تُضيّع الحل x = 0، والصحيح التحليل: x(x − 3) = 0 فتكون مجموعة الحل {0, 3}."], sto: ["Never divide by something that might be zero.", "لا تقسم أبدًا على ما قد يساوي صفرًا."] }
  ];
  EX.mprep2u2l2 = [
    { k: "match", q: ["Match each trinomial to its factors.", "صِل كل مقدار ثلاثي بعامليه."], pairs: [[["x² + 5x + 6", "x² + 5x + 6"], ["(x + 2)(x + 3)", "(x + 2)(x + 3)"]], [["x² − 11x + 24", "x² − 11x + 24"], ["(x − 3)(x − 8)", "(x − 3)(x − 8)"]], [["x² − 3x − 28", "x² − 3x − 28"], ["(x − 7)(x + 4)", "(x − 7)(x + 4)"]], [["x² + x − 42", "x² + x − 42"], ["(x + 7)(x − 6)", "(x + 7)(x − 6)"]]],
      off: ["Find two numbers with the right product (last term) and the right sum (middle coefficient).", "ابحث عن عددين حاصل ضربهما الحد المطلق ومجموعهما معامل الحد الأوسط."], sto: ["Four pairs, each found by the product-and-sum hunt.", "أربعة أزواج، كل منها بالبحث عن حاصل الضرب والمجموع."] },
    { k: "tf", a: true, q: ["True or false: a pool with floor area 40 m² and perimeter 26 m measures 5 m by 8 m.", "صواب أم خطأ: حمام سباحة مساحة أرضيته ٤٠ م² ومحيطها ٢٦ م بُعداه ٥ م و٨ م."],
      off: ["True. Two numbers with product 40 and sum 13 (half the perimeter): 5 and 8.", "صواب؛ عددان حاصل ضربهما ٤٠ ومجموعهما ١٣ (نصف المحيط): ٥ و٨."], sto: ["Omar's pool: 5 × 8 = 40 and 2(5 + 8) = 26.", "حمام عمر: 5 × 8 = 40 و2(5 + 8) = 26."] }
  ];
  EX.mprep2u2l3 = [
    { k: "match", q: ["Match each expression to its factorization.", "صِل كل مقدار بتحليله."], pairs: [[["x² − 1", "x² − 1"], ["(x − 1)(x + 1)", "(x − 1)(x + 1)"]], [["x² + 6x + 9", "x² + 6x + 9"], ["(x + 3)²", "(x + 3)²"]], [["a³ − 8b³", "a³ − 8b³"], ["(a − 2b)(a² + 2ab + 4b²)", "(a − 2b)(a² + 2ab + 4b²)"]], [["1 + 512x³y³", "1 + 512x³y³"], ["(1 + 8xy)(1 − 8xy + 64x²y²)", "(1 + 8xy)(1 − 8xy + 64x²y²)"]]],
      off: ["Difference of squares, perfect square, difference of cubes and sum of cubes.", "فرق بين مربعين، ومربع كامل، وفرق بين مكعبين، ومجموع مكعبين."], sto: ["Four special shapes, four special patterns.", "أربعة أشكال خاصة وأربعة أنماط خاصة."] },
    { k: "tf", a: false, q: ["True or false: x² + y² = (x + y)(x + y).", "صواب أم خطأ: x² + y² = (x + y)(x + y)."],
      off: ["False. (x + y)² = x² + 2xy + y². The sum of two squares cannot be factorized in R.", "خطأ؛ (x + y)² = x² + 2xy + y²، ومجموع مربعين لا يُحلل في ح."], sto: ["The 2xy pieces are missing from the picture.", "قطعتا 2xy غائبتان من الصورة."] }
  ];
  EX.mprep2u2l4 = [
    { k: "order", q: ["Put the steps for solving x² − 8x + 3 = 0 in order.", "رتّب خطوات حل المعادلة x² − 8x + 3 = 0."], items: [["x² − 8x = −3", "x² − 8x = −3"], ["x² − 8x + 16 = 13", "x² − 8x + 16 = 13"], ["(x − 4)² = 13", "(x − 4)² = 13"], ["x − 4 = ±√13", "x − 4 = ±√13"], ["x = 4 ± √13", "x = 4 ± √13"]],
      off: ["Move the constant, add (b ÷ 2)² to both sides, write the perfect square, take roots, solve.", "انقل الحد المطلق، وأضف (b ÷ 2)² للطرفين، واكتب المربع الكامل، وخذ الجذر، ثم أوجد x."], sto: ["Laila completes the square like adding the missing corner tile.", "تكمل ليلى المربع كأنها تضع البلاطة الناقصة في الركن."] },
    { k: "tf", a: true, q: ["True or false: 2x³ − x²y + 6xy − 3y² = (2x − y)(x² + 3y).", "صواب أم خطأ: 2x³ − x²y + 6xy − 3y² = (2x − y)(x² + 3y)."],
      off: ["True. x²(2x − y) + 3y(2x − y) = (2x − y)(x² + 3y). If 2x − y = 8 and x² + 3y = 31 its value is 248.", "صواب؛ x²(2x − y) + 3y(2x − y) = (2x − y)(x² + 3y)، وإذا كان 2x − y = 8 وx² + 3y = 31 فقيمته ٢٤٨."], sto: ["Group in pairs and the common bracket appears.", "قسّم إلى زوجين فيظهر القوس المشترك."] }
  ];
  EX.mprep2u3l1 = [
    { k: "match", q: ["Match each given information to the congruence case.", "صِل كل معطيات بحالة التطابق."], pairs: [[["Three pairs of equal sides", "ثلاثة أزواج من الأضلاع المتساوية"], ["SSS", "ثلاثة أضلاع"]], [["Two sides and the angle between them", "ضلعان والزاوية بينهما"], ["SAS", "ضلعان وزاوية محصورة"]], [["Two angles and the side between them", "زاويتان والضلع بينهما"], ["ASA", "زاويتان وضلع محصور"]], [["Right angle, hypotenuse and a side", "زاوية قائمة ووتر وضلع"], ["RHS", "وتر وضلع"]]],
      off: ["Each case uses three elements including at least one side.", "كل حالة تستخدم ثلاثة عناصر منها ضلع على الأقل."], sto: ["Tarek's three-measurement shortcuts.", "طرق طارق المختصرة بثلاثة قياسات."] },
    { k: "tf", a: true, q: ["True or false: reflection, translation and rotation give a congruent image.", "صواب أم خطأ: الانعكاس والانتقال والدوران تعطي صورة مطابقة للشكل."],
      off: ["True. They preserve side lengths, angle measures and parallelism.", "صواب؛ لأنها تحافظ على أطوال الأضلاع وقياسات الزوايا والتوازي."], sto: ["Ibrahim copies and pastes the triangle: every copy is congruent.", "ينسخ إبراهيم المثلث ويلصقه، فكل نسخة مطابقة."] }
  ];
  EX.mprep2u3l2 = [
    { k: "match", q: ["Match each set of side lengths to the type of triangle.", "صِل كل أطوال أضلاع بنوع المثلث."], pairs: [[["7, 24, 25", "7, 24, 25"], ["Right-angled", "قائم الزاوية"]], [["9, 10, 11", "9, 10, 11"], ["Acute-angled", "حاد الزوايا"]], [["3, 2√3, 3√3", "3, 2√3, 3√3"], ["Obtuse-angled", "منفرج الزاوية"]], [["1.5, 2, 2.5", "1.5, 2, 2.5"], ["Right-angled too", "قائم الزاوية أيضًا"]]],
      off: ["Compare c² with a² + b²: 625 = 625; 121 < 181; 27 > 21; 6.25 = 6.25.", "قارن c² بمجموع a² + b²: 625 = 625 و121 < 181 و27 > 21 و6.25 = 6.25."], sto: ["Habiba tests every triangle with the converse.", "تختبر حبيبة كل مثلث بالعكس."] },
    { k: "tf", a: true, q: ["True or false: from wood pieces 9, 10, 12 and 15 cm, the pieces 9, 12, 15 make a right triangle.", "صواب أم خطأ: من قطع الخشب ٩ و١٠ و١٢ و١٥ سم تكوّن القطع ٩ و١٢ و١٥ مثلثًا قائمًا."],
      off: ["True. 9² + 12² = 81 + 144 = 225 = 15² (3 × the 3-4-5 triple).", "صواب؛ 9² + 12² = 81 + 144 = 225 = 15² (ثلاثة أمثال ٣-٤-٥)."], sto: ["The Egyptian knot rope, three times bigger.", "حبل العقد المصري لكن أكبر ثلاث مرات."] }
  ];
  EX.mprep2u3l3 = [
    { k: "order", q: ["Put the steps of finding EF in order (AB = 13, BD = 5, right angle at D).", "رتّب خطوات إيجاد EF (AB = 13 وBD = 5 والزاوية القائمة عند D)."], items: [["AD = √(13² − 5²) = 12", "AD = √(13² − 5²) = 12"], ["AD ∥ EF (corresponding right angles)", "AD ∥ EF (زاويتان قائمتان متناظرتان)"], ["E is the midpoint of AC, so F is the midpoint of DC", "E منتصف AC إذن F منتصف DC"], ["EF = ½ AD = 6 cm", "EF = ½ AD = 6 سم"]],
      off: ["Pythagoras, then parallel, then the midpoint theorem, then half the side.", "فيثاغورس ثم التوازي ثم نظرية المنتصف ثم نصف الضلع."], sto: ["One theorem hands the baton to the next.", "كل نظرية تسلّم العصا للتي بعدها."] },
    { k: "tf", a: true, q: ["True or false: the midsegment of a triangle is parallel to the third side.", "صواب أم خطأ: القطعة الواصلة بين منتصفي ضلعين في مثلث توازي الضلع الثالث."],
      off: ["True (theorem 3-3), and its length is half the third side.", "صواب (نظرية ٣)، وطولها نصف طول الضلع الثالث."], sto: ["The ladder's middle bar is parallel to the floor.", "القضيب الأوسط في السلم يوازي الأرض."] }
  ];
  EX.mprep2u3l4 = [
    { k: "order", q: ["G is the centroid and AD = 12 cm. Order from the shortest to the longest.", "G نقطة تقاطع المتوسطات وAD = 12 سم. رتّب من الأقصر إلى الأطول."], items: [["GD = 4 cm", "GD = 4 سم"], ["AG = 8 cm", "AG = 8 سم"], ["AD = 12 cm", "AD = 12 سم"]],
      off: ["GD = ⅓ AD = 4 and AG = ⅔ AD = 8.", "GD = ⅓ AD = 4 وAG = ⅔ AD = 8."], sto: ["One part, two parts, three parts.", "جزء، ثم جزءان، ثم ثلاثة أجزاء."] },
    { k: "tf", a: true, q: ["True or false: if a median is half the side it is drawn to, the angle at its vertex is right.", "صواب أم خطأ: إذا كان طول المتوسط نصف طول الضلع المرسوم إليه فالزاوية عند رأسه قائمة."],
      off: ["True. This is the converse of theorem 4-3.", "صواب؛ هذا عكس نظرية ٣ في الدرس."], sto: ["A, B and C all sit on a circle around D.", "النقاط A وB وC تقع على دائرة مركزها D."] }
  ];
  EX.mprep2u3l5 = [
    { k: "match", q: ["Match each triangle to its number of axes of symmetry.", "صِل كل مثلث بعدد محاور تماثله."], pairs: [[["Equilateral", "متساوي الأضلاع"], ["3 axes", "٣ محاور"]], [["Isosceles (not equilateral)", "متساوي الساقين (غير متساوي الأضلاع)"], ["1 axis", "محور واحد"]], [["Scalene", "مختلف الأضلاع"], ["No axis", "لا يوجد محور"]]],
      off: ["An axis passes through a vertex and is perpendicular to the opposite side only when the two sides at that vertex are equal.", "يمر المحور برأس عموديًا على الضلع المقابل فقط إذا تساوى الضلعان عند هذا الرأس."], sto: ["Fold the paper triangle and see which folds match.", "اطوِ المثلث الورقي وانظر أي طيّة تنطبق."] },
    { k: "tf", a: true, q: ["True or false: in an isosceles triangle the bisector of the vertex angle bisects the base and is perpendicular to it.", "صواب أم خطأ: في المثلث المتساوي الساقين منصف زاوية الرأس ينصف القاعدة ويكون عموديًا عليها."],
      off: ["True. It lies on the axis of symmetry.", "صواب؛ لأنه يقع على محور التماثل."], sto: ["The tent pole stands upright in the middle.", "عمود الخيمة يقف رأسيًا في المنتصف."] }
  ];
  EX.mprep2u3l6 = [
    { k: "match", q: ["Match each regular polygon to its interior angle.", "صِل كل مضلع منتظم بقياس زاويته الداخلة."], pairs: [[["Hexagon", "السداسي"], ["120°", "١٢٠°"]], [["Octagon", "الثماني"], ["135°", "١٣٥°"]], [["Nonagon (9)", "التساعي"], ["140°", "١٤٠°"]], [["12-gon", "ذو الاثني عشر ضلعًا"], ["150°", "١٥٠°"]]],
      off: ["Interior angle = 180° − 360° ÷ n: 120°, 135°, 140°, 150°.", "الزاوية الداخلة = 180° − 360° ÷ n: ١٢٠° و١٣٥° و١٤٠° و١٥٠°."], sto: ["More sides, wider corners, but never 180°.", "كلما زادت الأضلاع اتسعت الأركان دون أن تبلغ ١٨٠°."] },
    { k: "tf", a: true, q: ["True or false: the exterior angles of a convex hexagon and of a convex 12-gon add up to the same total.", "صواب أم خطأ: مجموع الزوايا الخارجة للسداسي المحدب يساوي مجموعها لذي الاثني عشر ضلعًا المحدب."],
      off: ["True. For every convex polygon the exterior angles (one per vertex) add up to 360°.", "صواب؛ مجموع الزوايا الخارجة (زاوية عند كل رأس) لأي مضلع محدب ٣٦٠°."], sto: ["Walk round any building and you turn exactly once.", "سِر حول أي مبنى فتدور دورة كاملة واحدة."] }
  ];
  EX.mprep2u4l1 = [
    { k: "order", q: ["Put the ascending cumulative frequencies of the marks (2, 10, 9, 5, 2) in order.", "رتّب التكرارات المتجمعة الصاعدة للدرجات (٢ و١٠ و٩ و٥ و٢)."], items: [["less than 20: 2", "أقل من ٢٠: ٢"], ["less than 30: 12", "أقل من ٣٠: ١٢"], ["less than 40: 21", "أقل من ٤٠: ٢١"], ["less than 50: 26", "أقل من ٥٠: ٢٦"], ["less than 60: 28", "أقل من ٦٠: ٢٨"]],
      off: ["Each value adds the next frequency: 2, 2 + 10, 12 + 9, 21 + 5, 26 + 2.", "كل قيمة تضيف التكرار التالي: ٢ ثم 2 + 10 ثم 12 + 9 ثم 21 + 5 ثم 26 + 2."], sto: ["A running total that only climbs.", "مجموع جارٍ لا يعرف إلا الصعود."] },
    { k: "tf", a: false, q: ["True or false: an ascending cumulative frequency curve can go down.", "صواب أم خطأ: يمكن أن ينزل المنحنى التكراري المتجمع الصاعد."],
      off: ["False. Frequencies are never negative, so the running total never decreases.", "خطأ؛ التكرارات لا تكون سالبة، فالمجموع الجاري لا يقل أبدًا."], sto: ["Hana never removes a patient once counted.", "لا تحذف هنا أي مريض بعد أن تعدّه."] }
  ];
  EX.mprep2u4l2 = [
    { k: "match", q: ["Match each measure to how it is estimated.", "صِل كل مقياس بطريقة تقديره."], pairs: [[["Mean", "الوسط الحسابي"], ["Σ(f × xₘ) ÷ Σf", "Σ(f × xₘ) ÷ Σf"]], [["Median", "الوسيط"], ["Order n ÷ 2 on the cumulative curve", "الترتيب n ÷ 2 على المنحنى المتجمع"]], [["Mode", "المنوال"], ["Crossing lines on the tallest bar", "خطان متقاطعان على أطول مستطيل"]]],
      off: ["Mean from centres, median from the cumulative curve, mode from the histogram.", "الوسط من مراكز الفئات، والوسيط من المنحنى المتجمع، والمنوال من المدرج التكراري."], sto: ["Three tools in Omar's traffic toolbox.", "ثلاث أدوات في صندوق عمر المروري."] },
    { k: "tf", a: true, q: ["True or false: the centre of the interval 120-130 is 125.", "صواب أم خطأ: مركز الفئة ١٢٠-١٣٠ هو ١٢٥."],
      off: ["True. (120 + 130) ÷ 2 = 125.", "صواب؛ (120 + 130) ÷ 2 = 125."], sto: ["Every car in that interval counts as 125 km/h.", "كل سيارة في هذه الفئة تُحسب ١٢٥ كم/س."] }
  ];

  /* ---------- keep maths left-to-right inside Arabic sentences: wrap formula runs in eq spans ---------- */
  var MS = "A-Za-z0-9√∛()\\[\\]{}−+×÷=<>²³⁴⁵⁶⁷⁸⁹⁰¹⁻ⁿᵐˣ°∞∪∩′∅±⇒≡∥△∠%∈∉≤≥≠⊂\\u0304ₘΣπφ⅓⅔½|";
  var MRX = new RegExp("[" + MS + "](?:[" + MS + ".:, ]*[" + MS + "])?", "g");
  function wrapAr(str) {
    if (typeof str !== "string" || str.indexOf("<span") >= 0) return str;
    return str.replace(MRX, function (m) { return /[A-Za-z0-9√∛²³]/.test(m) ? '<span class="eq" dir="ltr">' + m + "</span>" : m; });
  }
  function fixItem(it) { ["q", "off", "sto"].forEach(function (k) { if (it[k] && it[k][1]) it[k][1] = wrapAr(it[k][1]); }); }
  ((E.MTHG && E.MTHG.prep2 && E.MTHG.prep2.units) || []).forEach(function (u) { u.lessons.forEach(function (l) { l.quiz.forEach(fixItem); (EX[l.id] || []).forEach(fixItem); }); });

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function ln(x1, y1, x2, y2, col, w, dash) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || "var(--ink)") + '" stroke-width="' + (w || 2) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : "") + "/>"; }
  function pg(pts, fill, st) { return '<polygon points="' + pts + '" fill="' + (fill || "none") + '" stroke="' + (st || "var(--ink)") + '" stroke-width="2"/>'; }
  function rc(x, y, w, h, fill, st) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3" fill="' + fill + '" stroke="' + (st || "none") + '" stroke-width="2"/>'; }
  function ci(x, y, r, f, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2.5"' : "") + "/>"; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }

  D.mprep2u1l1 = {
    title: ["Sets of numbers", "مجموعات الأعداد"],
    svg: function () {
      return g(rc(10, 10, 380, 220, "rgba(59,130,246,.10)", "#3b82f6") + rc(24, 40, 230, 180, "rgba(34,197,94,.12)", "#22c55e") + rc(38, 80, 160, 130, "rgba(249,115,22,.14)", "#f97316") + rc(52, 125, 90, 75, "rgba(168,85,247,.16)", "#a855f7") +
        rc(268, 40, 108, 180, "rgba(239,68,68,.12)", "#ef4444") + tx(30, 30, "R", ink, 15) + tx(42, 60, "Q", ink, 14) + tx(56, 100, "Z", ink, 14) + tx(70, 145, "N", ink, 14) + tx(322, 62, "Q′", ink, 14) +
        tx(97, 180, "1, 2, 3", mut, 12) + tx(170, 150, "−4", mut, 12) + tx(215, 120, "0.125", mut, 12) + tx(322, 110, "√2", mut, 13) + tx(322, 145, "∛5", mut, 13) + tx(322, 180, "π", mut, 14));
    },
    spots: [[30, 30, ["Real numbers R", "الأعداد الحقيقية ح"], ["R = Q ∪ Q′: every point of the number line.", "ح = ن ∪ ن′: كل نقاط خط الأعداد."]],
      [42, 60, ["Rational numbers Q", "الأعداد النسبية ن"], ["Numbers of the form a ÷ b with integers a, b and b ≠ 0, like 0.125 = 125 ÷ 1000.", "أعداد على صورة a ÷ b حيث a وb صحيحان وb ≠ صفر، مثل 0.125 = 125 ÷ 1000."]],
      [56, 100, ["Integers Z", "الأعداد الصحيحة ص"], ["…, −2, −1, 0, 1, 2, …; Z ⊂ Q.", "…، −٢، −١، ٠، ١، ٢، …؛ ص ⊂ ن."]],
      [70, 145, ["Natural numbers N", "الأعداد الطبيعية ط"], ["0, 1, 2, 3, …; N ⊂ Z ⊂ Q ⊂ R.", "٠، ١، ٢، ٣، …؛ ط ⊂ ص ⊂ ن ⊂ ح."]],
      [322, 62, ["Irrational numbers Q′", "الأعداد غير النسبية ن′"], ["√2, ∛5, π and the golden ratio: infinite non-recurring decimals. Q ∩ Q′ = ∅.", "√2 و∛5 وπ والنسبة الذهبية: كسور عشرية غير منتهية وغير دورية، ون ∩ ن′ = ∅."]]]
  };
  D.mprep2u1l2 = {
    title: ["Intervals on the number line", "الفترات على خط الأعداد"],
    svg: function () {
      var s = "", i;
      [50, 120, 190].forEach(function (y) { s += ln(20, y, 380, y, "var(--muted)", 1.5); for (i = -2; i <= 6; i++) s += ln(60 + (i + 2) * 40, y - 5, 60 + (i + 2) * 40, y + 5, "var(--muted)", 1.5); });
      for (i = -2; i <= 6; i++) s += tx(60 + (i + 2) * 40, 225, String(i), mut, 11);
      s += ln(100, 50, 220, 50, "#3b82f6", 7) + ci(100, 50, 7, "#3b82f6") + ci(220, 50, 7, "#3b82f6") + tx(30, 40, "X", ink, 13);
      s += ln(180, 120, 260, 120, "#f97316", 7) + ci(180, 120, 7, "#f97316") + ci(260, 120, 7, "var(--card)", "#f97316") + tx(30, 110, "Y", ink, 13);
      s += ln(180, 190, 220, 190, "#22c55e", 7) + ci(180, 190, 7, "#22c55e") + ci(220, 190, 7, "#22c55e") + tx(36, 180, "X ∩ Y", ink, 12);
      s += '<path d="M330 120 L360 120" stroke="#a855f7" stroke-width="5"/><path d="M372 120 L358 112 L358 128 Z" fill="#a855f7"/>' + tx(345, 105, "∞", ink, 16);
      return g(s);
    },
    spots: [[100, 50, ["Closed end ●", "طرف مغلق ●"], ["X = [−1, 2]: a filled dot means the end number belongs to the interval.", "X = [−1, 2]: النقطة المظللة تعني أن العدد الطرفي ينتمي إلى الفترة."]],
      [260, 120, ["Open end ○", "طرف مفتوح ○"], ["Y = [1, 3[: the hollow dot at 3 means 3 is not included.", "Y = [1, 3[: النقطة الفارغة عند ٣ تعني أن ٣ لا ينتمي."]],
      [200, 190, ["Intersection", "التقاطع"], ["X ∩ Y = [1, 2]: only the part shaded in both.", "X ∩ Y = [1, 2]: الجزء المظلل في الفترتين فقط."]],
      [345, 105, ["Infinity", "اللانهاية"], ["∞ is not a real number, so an interval end at ∞ is always open: [a, ∞[.", "∞ ليس عددًا حقيقيًا، فالطرف عند ∞ مفتوح دائمًا: [a, ∞[."]],
      [36, 180, ["Read the result", "اقرأ الناتج"], ["Union = everything shaded; difference X − Y = in X but not in Y; complement X′ = R − X.", "الاتحاد = كل ما ظُلل، والفرق X − Y = ما في X وليس في Y، والمكملة X′ = ح − X."]]]
  };
  D.mprep2u1l3 = {
    title: ["Karim's grandmother's carpets", "سجادتا جدة كريم"],
    svg: function () {
      return g(rc(30, 50, 180, 110, "rgba(59,130,246,.18)", "#3b82f6") + tx(120, 40, "√5 + 1", ink, 13) + tx(225, 110, "√5 − 1", ink, 13) + tx(120, 110, "4 m²", ink, 16) +
        rc(260, 40, 120, 120, "rgba(34,197,94,.18)", "#22c55e") + tx(320, 30, "√5", ink, 13) + tx(320, 105, "5 m²", ink, 16) + tx(200, 200, "(√5 + 1)(√5 − 1) = 5 − 1 = 4", ink, 14) + tx(200, 222, "P = 4√5 m", mut, 12));
    },
    spots: [[120, 40, ["Conjugates", "مترافقان"], ["√5 + 1 and √5 − 1 differ only in the sign between the terms.", "√5 + 1 و√5 − 1 يختلفان فقط في الإشارة بين الحدين."]],
      [120, 110, ["Rational product", "حاصل ضرب نسبي"], ["(√5)² − 1² = 4: the √5 terms cancel.", "(√5)² − 1² = 4: يختفي الحدان اللذان فيهما √5."]],
      [320, 105, ["The square", "المربعة"], ["√5 × √5 = 5 m², 1 m² more than the rectangle.", "√5 × √5 = 5 م²، أكبر بمتر مربع من المستطيلة."]],
      [200, 222, ["Same perimeter", "المحيط نفسه"], ["2(√5 + 1 + √5 − 1) = 4√5 and 4 × √5 = 4√5: like terms add.", "2(√5 + 1 + √5 − 1) = 4√5 و4 × √5 = 4√5: الحدود المتشابهة تُجمع."]]]
  };
  D.mprep2u1l4 = {
    title: ["Osama's school seedbed", "مشتل مدرسة أسامة"],
    svg: function () {
      return g(rc(40, 40, 160, 160, "rgba(34,197,94,.22)", "#22c55e") + rc(200, 120, 80, 80, "rgba(168,85,247,.22)", "#a855f7") + tx(120, 125, "48 m²", ink, 16) + tx(240, 165, "12 m²", ink, 13) +
        tx(120, 30, "4√3", ink, 14) + tx(240, 112, "2√3", ink, 13) + tx(330, 80, "√48 = √(16 × 3)", mut, 12) + tx(330, 100, "= 4√3", ink, 13) + tx(330, 150, "√12 = √(4 × 3)", mut, 12) + tx(330, 170, "= 2√3", ink, 13) + tx(160, 225, "fence = 20√3 m", ink, 13));
    },
    spots: [[120, 30, ["Largest perfect square", "أكبر مربع كامل"], ["48 = 16 × 3, so √48 = √16 × √3 = 4√3.", "48 = 16 × 3 إذن √48 = √16 × √3 = 4√3."]],
      [240, 112, ["Small square", "المربع الصغير"], ["12 = 4 × 3, so √12 = 2√3.", "12 = 4 × 3 إذن √12 = 2√3."]],
      [330, 90, ["Product law", "قانون الضرب"], ["√(ab) = √a × √b for a, b ≥ 0.", "√(ab) = √a × √b حيث a وb ≥ صفر."]],
      [160, 225, ["Adding like roots", "جمع الجذور المتشابهة"], ["Outline = 2 × 6√3 + 2 × 4√3 = 20√3 ≈ 34.6 m.", "المحيط = 2 × 6√3 + 2 × 4√3 = 20√3 ≈ 34.6 م."]]]
  };
  D.mprep2u1l5 = {
    title: ["A cube of edge 4√3", "مكعب طول حرفه 4√3"],
    svg: function () {
      return g('<polygon points="60,90 180,90 180,210 60,210" fill="rgba(59,130,246,.25)" stroke="#3b82f6" stroke-width="2"/><polygon points="60,90 110,50 230,50 180,90" fill="rgba(59,130,246,.15)" stroke="#3b82f6" stroke-width="2"/><polygon points="180,90 230,50 230,170 180,210" fill="rgba(59,130,246,.35)" stroke="#3b82f6" stroke-width="2"/>' +
        tx(120, 228, "4√3", ink, 14) + tx(310, 70, "V = (4√3)³", ink, 15) + tx(310, 105, "= 4³ × (√3)³", ink, 14) + tx(310, 140, "= 64 × 3√3", ink, 14) + tx(310, 175, "= 192√3", ink, 16));
    },
    spots: [[120, 228, ["Edge", "الحرف"], ["Each edge is 4√3 cm, a product of 4 and √3.", "طول كل حرف 4√3 سم، أي حاصل ضرب ٤ و√3."]],
      [310, 70, ["Exponent 3", "الأس ٣"], ["Volume = edge × edge × edge = edge³.", "الحجم = الحرف × الحرف × الحرف = الحرف³."]],
      [310, 105, ["Power of a product", "قوة حاصل الضرب"], ["(ab)ⁿ = aⁿbⁿ, so (4√3)³ = 4³ × (√3)³.", "(ab)ⁿ = aⁿbⁿ إذن (4√3)³ = 4³ × (√3)³."]],
      [310, 140, ["(√3)³", "(√3)³"], ["√3 × √3 × √3 = 3 × √3 = 3√3.", "√3 × √3 × √3 = 3 × √3 = 3√3."]],
      [310, 175, ["The volume", "الحجم"], ["192√3 cm³ ≈ 332.6 cm³.", "192√3 سم³ ≈ 332.6 سم³."]]]
  };
  D.mprep2u2l1 = {
    title: ["Area model of 6x² − 15x", "نموذج مساحة 6x² − 15x"],
    svg: function () {
      return g(rc(80, 70, 150, 110, "rgba(59,130,246,.22)", "#3b82f6") + rc(230, 70, 120, 110, "rgba(239,68,68,.2)", "#ef4444") + tx(155, 130, "6x²", ink, 18) + tx(290, 130, "−15x", ink, 18) +
        tx(155, 58, "2x", ink, 15) + tx(290, 58, "−5", ink, 15) + tx(55, 130, "3x", ink, 16) + tx(215, 215, "6x² − 15x = 3x(2x − 5)", ink, 15));
    },
    spots: [[55, 130, ["The GCF", "العامل المشترك الأكبر"], ["3x: the greatest number (3) and the smallest power of x (x¹) in both terms.", "3x: أكبر عدد مشترك (٣) وأصغر قوة لـ x (x) في الحدين."]],
      [155, 130, ["First term", "الحد الأول"], ["6x² = 3x × 2x.", "6x² = 3x × 2x."]],
      [290, 130, ["Second term", "الحد الثاني"], ["−15x = 3x × (−5).", "−15x = 3x × (−5)."]],
      [220, 58, ["The bracket", "القوس"], ["The quotients 2x and −5 go inside the bracket.", "خارجا القسمة 2x و−5 يُكتبان داخل القوس."]],
      [215, 215, ["Check", "التحقق"], ["Expand: 3x × 2x − 3x × 5 = 6x² − 15x.", "فك القوس: 3x × 2x − 3x × 5 = 6x² − 15x."]]]
  };
  D.mprep2u2l2 = {
    title: ["Tiles for (x + 2)(x + 3)", "بلاطات (x + 2)(x + 3)"],
    svg: function () {
      var s = rc(60, 40, 110, 110, "rgba(59,130,246,.45)", "#3b82f6") + tx(115, 100, "x²", ink, 18), i, j;
      for (i = 0; i < 3; i++) s += rc(170 + i * 24, 40, 24, 110, "rgba(34,197,94,.45)", "var(--card)");
      for (j = 0; j < 2; j++) s += rc(60, 150 + j * 24, 110, 24, "rgba(34,197,94,.45)", "var(--card)");
      for (i = 0; i < 3; i++) for (j = 0; j < 2; j++) s += rc(170 + i * 24, 150 + j * 24, 24, 24, "rgba(249,115,22,.5)", "var(--card)");
      s += tx(115, 30, "x", ink, 14) + tx(206, 30, "3", ink, 14) + tx(45, 100, "x", ink, 14) + tx(45, 175, "2", ink, 14) + tx(330, 100, "x² + 5x + 6", ink, 15) + tx(330, 130, "2 × 3 = 6", mut, 12) + tx(330, 150, "2 + 3 = 5", mut, 12);
      return g(s);
    },
    spots: [[115, 100, ["x² tile", "بلاطة x²"], ["The big square: x × x.", "المربع الكبير: x × x."]],
      [206, 95, ["3 x-strips", "٣ شرائط x"], ["x × 3 = 3x along the top.", "x × 3 = 3x على الجانب."]],
      [115, 175, ["2 x-strips", "شريطا x"], ["x × 2 = 2x. With 3x they make the middle term 5x.", "x × 2 = 2x، ومع 3x تصنع الحد الأوسط 5x."]],
      [206, 174, ["6 unit tiles", "٦ بلاطات وحدة"], ["2 × 3 = 6: the constant term.", "2 × 3 = 6: الحد المطلق."]],
      [330, 140, ["Product and sum", "حاصل الضرب والمجموع"], ["To factorize x² + 5x + 6 find two numbers with product 6 and sum 5.", "لتحليل x² + 5x + 6 ابحث عن عددين حاصل ضربهما ٦ ومجموعهما ٥."]]]
  };
  D.mprep2u2l3 = {
    title: ["x² − y² cut and rearranged", "x² − y² بالقص وإعادة الترتيب"],
    svg: function () {
      return g(rc(30, 60, 100, 160, "rgba(59,130,246,.35)", "#3b82f6") + rc(130, 120, 60, 100, "rgba(249,115,22,.4)", "#f97316") + '<rect x="130" y="60" width="60" height="60" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="5 4"/>' +
        tx(160, 95, "y²", mut, 13) + tx(110, 50, "x", ink, 13) + tx(80, 232, "x − y", ink, 12) +
        rc(250, 20, 100, 100, "rgba(249,115,22,.4)", "#f97316") + rc(250, 120, 100, 100, "rgba(59,130,246,.35)", "#3b82f6") + tx(300, 232, "x − y", ink, 12) + tx(372, 120, "x + y", ink, 12) + ln(212, 140, 238, 140, "var(--ink)", 2) + tx(225, 130, "⇒", ink, 16));
    },
    spots: [[160, 95, ["The cut square", "المربع المقطوع"], ["A y × y square is removed from the x × x square: area x² − y².", "يُقطع مربع y × y من المربع x × x فتبقى المساحة x² − y²."]],
      [80, 140, ["Blue part", "الجزء الأزرق"], ["(x − y) wide and x tall.", "عرضه (x − y) وارتفاعه x."]],
      [160, 170, ["Orange strip", "الشريط البرتقالي"], ["y wide and (x − y) tall; turn it and put it on top.", "عرضه y وارتفاعه (x − y)؛ أدِره وضعه فوق."]],
      [372, 120, ["New rectangle", "المستطيل الجديد"], ["(x − y)(x + y): so x² − y² = (x − y)(x + y).", "(x − y)(x + y): إذن x² − y² = (x − y)(x + y)."]],
      [300, 232, ["Fast arithmetic", "حساب سريع"], ["99² − 1² = 98 × 100 = 9800.", "99² − 1² = 98 × 100 = 9800."]]]
  };
  D.mprep2u2l4 = {
    title: ["Completing the square: x² + 10x + 25", "إكمال المربع: x² + 10x + 25"],
    svg: function () {
      return g(rc(60, 30, 130, 130, "rgba(59,130,246,.35)", "#3b82f6") + rc(190, 30, 50, 130, "rgba(34,197,94,.4)", "#22c55e") + rc(60, 160, 130, 50, "rgba(34,197,94,.4)", "#22c55e") + rc(190, 160, 50, 50, "rgba(168,85,247,.55)", "#a855f7") +
        tx(125, 100, "x²", ink, 18) + tx(215, 100, "5x", ink, 13) + tx(125, 190, "5x", ink, 13) + tx(215, 190, "25", "style=\"fill:#fff\"", 13) + tx(125, 22, "x", ink, 13) + tx(215, 22, "5", ink, 13) + tx(320, 100, "(x + 5)²", ink, 17) + tx(320, 130, "add (10 ÷ 2)² = 25", mut, 11));
    },
    spots: [[125, 100, ["x²", "x²"], ["The square of side x.", "مربع طول ضلعه x."]],
      [215, 100, ["Half of 10x", "نصف 10x"], ["10x is split into two strips of 5x.", "يُقسم 10x إلى شريطين كل منهما 5x."]],
      [215, 190, ["The missing corner", "الركن الناقص"], ["5 × 5 = 25 = (half the x-coefficient)².", "5 × 5 = 25 = (نصف معامل x)²."]],
      [320, 100, ["Perfect square", "مربع كامل"], ["x² + 10x + 25 = (x + 5)².", "x² + 10x + 25 = (x + 5)²."]],
      [320, 130, ["Solving", "الحل"], ["For x² − 8x + 3 = 0 add 16 to both sides: (x − 4)² = 13, x = 4 ± √13.", "في x² − 8x + 3 = 0 نضيف ١٦ للطرفين: (x − 4)² = 13 إذن x = 4 ± √13."]]]
  };
  D.mprep2u3l1 = {
    title: ["Two congruent triangles (SAS)", "مثلثان متطابقان (ضلعان وزاوية محصورة)"],
    svg: function () {
      return g(pg("40,200 170,200 70,60", "rgba(59,130,246,.18)", "#3b82f6") + pg("230,200 360,200 260,60", "rgba(34,197,94,.18)", "#22c55e") +
        ln(100, 195, 100, 205, "#f97316", 3) + ln(290, 195, 290, 205, "#f97316", 3) + ln(50, 128, 62, 132, "#f97316", 3) + ln(53, 124, 65, 128, "#f97316", 3) + ln(240, 128, 252, 132, "#f97316", 3) + ln(243, 124, 255, 128, "#f97316", 3) +
        '<path d="M60 200 A20 20 0 0 0 47 182" fill="none" stroke="#a855f7" stroke-width="3"/><path d="M250 200 A20 20 0 0 0 237 182" fill="none" stroke="#a855f7" stroke-width="3"/>' +
        tx(32, 215, "A", ink) + tx(178, 215, "B", ink) + tx(70, 50, "C", ink) + tx(222, 215, "D", ink) + tx(368, 215, "E", ink) + tx(260, 50, "F", ink) + tx(200, 232, "△ABC ≡ △DEF", ink, 14));
    },
    spots: [[100, 200, ["Equal sides", "ضلعان متساويان"], ["AB = DE (one tick each).", "AB = DE (علامة واحدة على كل منهما)."]],
      [57, 128, ["Second pair", "الزوج الثاني"], ["AC = DF (two ticks each).", "AC = DF (علامتان على كل منهما)."]],
      [52, 186, ["Included angle", "الزاوية المحصورة"], ["∠A ≡ ∠D lies between the two equal sides: SAS.", "∠A ≡ ∠D محصورة بين الضلعين المتساويين."]],
      [200, 232, ["Order of vertices", "ترتيب الرؤوس"], ["A↔D, B↔E, C↔F, so BC = EF, ∠B ≡ ∠E and ∠C ≡ ∠F.", "A↔D وB↔E وC↔F، إذن BC = EF و∠B ≡ ∠E و∠C ≡ ∠F."]],
      [310, 120, ["Other cases", "حالات أخرى"], ["SSS, ASA, AAS and RHS also prove congruence; AAA does not.", "الأضلاع الثلاثة، وزاويتان وضلع محصور، وزاويتان وضلع غير محصور، ووتر وضلع، تثبت التطابق أيضًا، أما الزوايا الثلاث فلا."]]]
  };
  D.mprep2u3l2 = {
    title: ["Squares on a 3-4-5 triangle", "مربعات على مثلث ٣-٤-٥"],
    svg: function () {
      return g(pg("120,150 200,150 120,90", "var(--card)", "var(--ink)") + pg("120,150 200,150 200,230 120,230", "rgba(59,130,246,.25)", "#3b82f6") + pg("120,150 120,90 60,90 60,150", "rgba(249,115,22,.25)", "#f97316") + pg("120,90 200,150 260,70 180,10", "rgba(34,197,94,.25)", "#22c55e") +
        '<rect x="120" y="140" width="10" height="10" fill="none" stroke="var(--ink)" stroke-width="1.5"/>' + tx(160, 195, "16", ink, 16) + tx(90, 125, "9", ink, 16) + tx(190, 85, "25", ink, 16) + tx(330, 120, "9 + 16 = 25", ink, 15) + tx(330, 145, "3² + 4² = 5²", mut, 13));
    },
    spots: [[160, 195, ["Square on a leg", "مربع على ضلع القائمة"], ["Side 4: area 16.", "طول الضلع ٤: المساحة ١٦."]],
      [90, 125, ["Square on the other leg", "مربع على الضلع الآخر"], ["Side 3: area 9.", "طول الضلع ٣: المساحة ٩."]],
      [190, 85, ["Square on the hypotenuse", "مربع على الوتر"], ["Side 5: area 25 = 9 + 16.", "طول الضلع ٥: المساحة 25 = 9 + 16."]],
      [125, 145, ["The right angle", "الزاوية القائمة"], ["The hypotenuse is opposite the right angle and is the longest side.", "الوتر يقابل الزاوية القائمة وهو أطول الأضلاع."]],
      [330, 132, ["Converse", "العكس"], ["If c² = a² + b² the triangle is right-angled; c² > a² + b² obtuse; c² < a² + b² acute.", "إذا كان c² = a² + b² فالمثلث قائم، وإذا كان أكبر فمنفرج، وإذا كان أصغر فحاد."]]]
  };
  D.mprep2u3l3 = {
    title: ["The midsegment of a triangle", "القطعة الواصلة بين منتصفي ضلعين"],
    svg: function () {
      return g(pg("160,20 40,210 330,210", "rgba(59,130,246,.12)", "var(--ink)") + ln(100, 115, 245, 115, "#22c55e", 4) + ci(100, 115, 5, "#14b8a6") + ci(245, 115, 5, "#14b8a6") +
        tx(160, 12, "A", ink) + tx(30, 222, "B", ink) + tx(340, 222, "C", ink) + tx(85, 112, "D", ink) + tx(262, 112, "E", ink) + tx(172, 105, "DE = ½ BC", ink, 13) + tx(185, 230, "BC", ink, 13) +
        ln(66, 165, 76, 160, "#f97316", 3) + ln(127, 70, 137, 65, "#f97316", 3) + ln(198, 66, 208, 72, "#a855f7", 3) + ln(285, 160, 295, 166, "#a855f7", 3));
    },
    spots: [[100, 115, ["Midpoint D", "المنتصف D"], ["AD = DB (orange ticks).", "AD = DB (العلامتان البرتقاليتان)."]],
      [245, 115, ["Midpoint E", "المنتصف E"], ["AE = EC (purple ticks).", "AE = EC (العلامتان البنفسجيتان)."]],
      [172, 105, ["Half the length", "نصف الطول"], ["DE = ½ BC: if BC = 12 cm then DE = 6 cm.", "DE = ½ BC: إذا كان BC = 12 سم فإن DE = 6 سم."]],
      [185, 215, ["Parallel", "التوازي"], ["DE ∥ BC.", "DE ∥ BC."]],
      [60, 60, ["Converse idea", "فكرة العكس"], ["A line from D parallel to BC must pass through E, the midpoint of AC.", "المستقيم المرسوم من D موازيًا لـ BC يمر حتمًا بـ E منتصف AC."]]]
  };
  D.mprep2u3l4 = {
    title: ["Medians and the centroid G", "المتوسطات ونقطة تقاطعها G"],
    svg: function () {
      return g(pg("150,20 40,210 340,210", "rgba(59,130,246,.12)", "var(--ink)") + ln(150, 20, 190, 210, "#a855f7", 2, "6 4") + ln(40, 210, 245, 115, "#a855f7", 2, "6 4") + ln(340, 210, 95, 115, "#a855f7", 2, "6 4") +
        ci(190, 210, 5, "#a855f7") + ci(245, 115, 5, "#a855f7") + ci(95, 115, 5, "#a855f7") + ci(176.7, 146.7, 7, "#f97316") +
        tx(150, 12, "A", ink) + tx(30, 222, "B", ink) + tx(350, 222, "C", ink) + tx(192, 228, "D", ink) + tx(196, 142, "G", ink) + tx(330, 60, "AG : GD = 2 : 1", ink, 13));
    },
    spots: [[150, 20, ["Vertex A", "الرأس A"], ["The median AD starts here.", "يبدأ المتوسط AD من هنا."]],
      [190, 210, ["Midpoint D", "المنتصف D"], ["D is the midpoint of BC, so AD is a median.", "D منتصف BC، إذن AD متوسط."]],
      [176, 146, ["Centroid G", "نقطة التقاطع G"], ["The three medians meet here: the balance point of the triangle.", "تلتقي المتوسطات الثلاثة هنا: نقطة اتزان المثلث."]],
      [330, 84, ["Ratio 2 : 1", "النسبة ٢ : ١"], ["AG = ⅔ AD and GD = ⅓ AD. If AG = 8 then AD = 12.", "AG = ⅔ AD وGD = ⅓ AD، فإذا كان AG = 8 فإن AD = 12."]],
      [95, 115, ["Three medians", "ثلاثة متوسطات"], ["Every triangle has three medians, one from each vertex.", "لكل مثلث ثلاثة متوسطات، واحد من كل رأس."]]]
  };
  D.mprep2u3l5 = {
    title: ["An isosceles triangle and its axis", "مثلث متساوي الساقين ومحوره"],
    svg: function () {
      return g(pg("200,25 90,205 310,205", "rgba(168,85,247,.15)", "var(--ink)") + ln(200, 10, 200, 225, "#a855f7", 2, "7 5") + '<rect x="200" y="195" width="10" height="10" fill="none" stroke="#a855f7" stroke-width="1.5"/>' +
        ln(140, 112, 150, 120, "#22c55e", 3) + ln(250, 120, 260, 112, "#22c55e", 3) + '<path d="M118 205 A28 28 0 0 0 105 182" fill="none" stroke="#f97316" stroke-width="3"/><path d="M282 205 A28 28 0 0 1 295 182" fill="none" stroke="#f97316" stroke-width="3"/>' +
        tx(200, 18, "A", ink) + tx(80, 218, "B", ink) + tx(320, 218, "C", ink) + tx(200, 236, "D", ink) + tx(130, 196, "70°", ink, 12) + tx(270, 196, "70°", ink, 12) + tx(200, 60, "40°", ink, 12));
    },
    spots: [[145, 116, ["Legs", "الساقان"], ["AB = AC: the two congruent sides.", "AB = AC: الضلعان المتطابقان."]],
      [115, 190, ["Base angles", "زاويتا القاعدة"], ["∠B ≡ ∠C. With ∠A = 40°: (180° − 40°) ÷ 2 = 70° each.", "∠B ≡ ∠C، وإذا كانت ∠A = 40° فكل منهما (180° − 40°) ÷ 2 = 70°."]],
      [200, 60, ["Vertex angle", "زاوية الرأس"], ["The angle between the legs.", "الزاوية بين الساقين."]],
      [200, 140, ["Axis of symmetry", "محور التماثل"], ["AD is at once the median, the bisector of ∠A and perpendicular to BC.", "AD هو في الوقت نفسه المتوسط ومنصف ∠A والعمود على BC."]],
      [200, 225, ["Midpoint D", "المنتصف D"], ["BD = DC, and any point on AD is equidistant from B and C.", "BD = DC، وأي نقطة على AD على بعدين متساويين من B وC."]]]
  };
  D.mprep2u3l6 = {
    title: ["A regular hexagon", "سداسي منتظم"],
    svg: function () {
      var V = [], i, s = "";
      for (i = 0; i < 6; i++) { var a = -Math.PI / 2 + i * Math.PI / 3; V.push([150 + 90 * Math.cos(a), 120 + 90 * Math.sin(a)]); }
      var cols = ["rgba(59,130,246,.25)", "rgba(249,115,22,.25)", "rgba(34,197,94,.25)", "rgba(168,85,247,.25)"];
      for (i = 1; i < 5; i++) s += pg(V[0].join(",") + " " + V[i].join(",") + " " + V[i + 1].join(","), cols[i - 1], "var(--muted)");
      s += pg(V.map(function (p) { return p.join(","); }).join(" "), "none", "var(--ink)");
      s += ln(V[1][0], V[1][1], V[1][0] + (V[1][0] - V[0][0]) * 0.6, V[1][1] + (V[1][1] - V[0][1]) * 0.6, "#ef4444", 2, "5 4");
      s += tx(V[0][0], V[0][1] + 34, "120°", ink, 12) + tx(V[1][0] + 30, V[1][1] + 6, "60°", "style=\"fill:#ef4444\"", 12) + tx(320, 80, "4 × 180° = 720°", ink, 13) + tx(320, 110, "720° ÷ 6 = 120°", ink, 13) + tx(320, 150, "360° ÷ 6 = 60°", "style=\"fill:#ef4444\"", 13) + tx(320, 190, "9 diagonals", mut, 12);
      return g(s);
    },
    spots: [[150, 120, ["n − 2 triangles", "n − 2 مثلثات"], ["Diagonals from one vertex cut the hexagon into 4 triangles.", "الأقطار من رأس واحد تقسم السداسي إلى ٤ مثلثات."]],
      [320, 80, ["Interior sum", "مجموع الزوايا الداخلة"], ["(n − 2) × 180° = 4 × 180° = 720°.", "(n − 2) × 180° = 4 × 180° = 720°."]],
      [320, 110, ["Each interior angle", "كل زاوية داخلة"], ["Regular hexagon: 720° ÷ 6 = 120°.", "السداسي المنتظم: 720° ÷ 6 = 120°."]],
      [262, 81, ["Exterior angle", "الزاوية الخارجة"], ["360° ÷ 6 = 60°, and 120° + 60° = 180°.", "360° ÷ 6 = 60°، و120° + 60° = 180°."]],
      [320, 190, ["Diagonals", "الأقطار"], ["n(n − 3) ÷ 2 = 6 × 3 ÷ 2 = 9.", "n(n − 3) ÷ 2 = 6 × 3 ÷ 2 = 9."]]]
  };
  D.mprep2u4l1 = {
    title: ["Ascending cumulative frequency curve", "المنحنى التكراري المتجمع الصاعد"],
    svg: function () {
      var X = function (v) { return 60 + (v - 10) * 6; }, Y = function (v) { return 210 - v * 6.5; }, P = [[10, 0], [20, 2], [30, 12], [40, 21], [50, 26], [60, 28]], s = "";
      s += ln(60, 210, 370, 210, "var(--ink)", 2) + ln(60, 210, 60, 20, "var(--ink)", 2);
      [10, 20, 30, 40, 50, 60].forEach(function (v) { s += tx(X(v), 226, String(v), mut, 11); });
      [0, 7, 14, 21, 28].forEach(function (v) { s += tx(45, Y(v) + 4, String(v), mut, 11); });
      s += '<polyline points="' + P.map(function (p) { return X(p[0]) + "," + Y(p[1]); }).join(" ") + '" fill="none" stroke="#f97316" stroke-width="3"/>';
      P.forEach(function (p) { s += ci(X(p[0]), Y(p[1]), 4, "#f97316"); });
      s += ln(X(30), 210, X(30), Y(12), "#22c55e", 2, "5 4") + ln(X(30), Y(12), 60, Y(12), "#22c55e", 2, "5 4");
      return g(s);
    },
    spots: [[60, 210, ["Start point", "نقطة البداية"], ["(10, 0): nobody scored less than 10.", "(١٠، صفر): لا أحد حصل على أقل من ١٠."]],
      [180, 132, ["Reading the curve", "القراءة من المنحنى"], ["Less than 30 → 12 students.", "أقل من ٣٠ ← ١٢ طالبًا."]],
      [240, 74, ["Upper limits", "الحدود العليا"], ["Each point is (upper limit, cumulative frequency), e.g. (40, 21).", "كل نقطة هي (الحد الأعلى، التكرار المتجمع) مثل (٤٠، ٢١)."]],
      [360, 28, ["Last point", "آخر نقطة"], ["(60, 28): the total number of students.", "(٦٠، ٢٨): العدد الكلي للطلاب."]],
      [45, 120, ["Vertical axis", "المحور الرأسي"], ["Ascending cumulative frequency, from 0 to the total.", "التكرار المتجمع الصاعد من الصفر إلى المجموع."]]]
  };
  D.mprep2u4l2 = {
    title: ["Histogram with mean and mode", "مدرج تكراري مع الوسط والمنوال"],
    svg: function () {
      var F = [13, 17, 24, 32, 14], s = "", i, bw = 60, X0 = 50, Y = function (v) { return 200 - v * 5; };
      s += ln(40, 200, 360, 200, "var(--ink)", 2);
      for (i = 0; i < 5; i++) s += rc(X0 + i * bw, Y(F[i]), bw, 200 - Y(F[i]), i === 3 ? "rgba(168,85,247,.45)" : "rgba(59,130,246,.4)", i === 3 ? "#a855f7" : "#3b82f6") + tx(X0 + i * bw + 30, Y(F[i]) - 6, String(F[i]), ink, 11) + tx(X0 + i * bw, 216, String(80 + i * 10), mut, 10);
      s += tx(X0 + 300, 216, "130", mut, 10);
      s += ln(230, Y(32), 290, Y(14), "#f97316", 2) + ln(290, Y(32), 230, Y(24), "#f97316", 2) + ln(248.5, 200, 248.5, Y(32), "#f97316", 1.5, "5 4");
      s += '<polygon points="210.1,204 200.1,222 220.1,222" fill="#f97316"/>' + tx(205, 236, "x̄ = 106.7", ink, 12);
      return g(s);
    },
    spots: [[110, 115, ["Interval centres", "مراكز الفئات"], ["80-90 → 85, 90-100 → 95, …, 120-130 → 125.", "٨٠-٩٠ ← ٨٥، و٩٠-١٠٠ ← ٩٥، …، و١٢٠-١٣٠ ← ١٢٥."]],
      [210, 230, ["Mean", "الوسط الحسابي"], ["Σ(f × xₘ) ÷ Σf = 10670 ÷ 100 = 106.7 km/h: the balance point.", "Σ(f × xₘ) ÷ Σf = 10670 ÷ 100 = 106.7 كم/س: نقطة الاتزان."]],
      [260, 50, ["Modal interval", "الفئة المنوالية"], ["110- has the largest frequency (32).", "الفئة 110- لها أكبر تكرار (٣٢)."]],
      [248, 62, ["Crossing lines", "الخطان المتقاطعان"], ["Join the corners of the tallest bar to its neighbours; the crossing point projects onto the mode ≈ 113.", "صِل ركني أطول مستطيل برأسي المستطيلين المجاورين، فيسقط التقاطع على المنوال ≈ ١١٣."]],
      [330, 160, ["Median", "الوسيط"], ["Order 100 ÷ 2 = 50, read from the ascending cumulative curve.", "الترتيب 100 ÷ 2 = 50، ويُقرأ من المنحنى المتجمع الصاعد."]]]
  };

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  L.names.mprep2_roots = ["Irrational number hunter", "صائد الأعداد غير النسبية"];
  L.names.mprep2_intervals = ["Interval builder", "بناء الفترات"];
  L.names.mprep2_radmul = ["Radical area model", "نموذج المساحة للجذور"];
  L.names.mprep2_simplify = ["Root simplifier", "مبسّط الجذور"];
  L.names.mprep2_powers = ["Power tiles", "بلاطات القوى"];
  L.names.mprep2_gcf = ["GCF area model", "نموذج مساحة العامل المشترك"];
  L.names.mprep2_trinom = ["Algebra tiles", "البلاطات الجبرية"];
  L.names.mprep2_diffsq = ["Cut and rearrange", "قص وأعد الترتيب"];
  L.names.mprep2_csq = ["Complete the square", "أكمل المربع"];
  L.names.mprep2_congr = ["Congruence grid", "شبكة التطابق"];
  L.names.mprep2_pyth = ["Pythagoras squares", "مربعات فيثاغورس"];
  L.names.mprep2_midseg = ["Midsegment explorer", "مستكشف القطعة المتوسطة"];
  L.names.mprep2_median = ["Balance the triangle", "وازن المثلث"];
  L.names.mprep2_isos = ["Isosceles triangle lab", "معمل المثلث المتساوي الساقين"];
  L.names.mprep2_poly = ["Polygon angles", "زوايا المضلعات"];
  L.names.mprep2_cumfreq = ["Cumulative frequency builder", "بناء التكرار المتجمع"];
  L.names.mprep2_central = ["Mean, median and mode", "الوسط والوسيط والمنوال"];
})();
