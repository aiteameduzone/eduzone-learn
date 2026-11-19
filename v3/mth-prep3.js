/* EduZone Learn v3 - National Maths, Egyptian Prep 3 (3rd preparatory), Term 1 (2026-2027).
   Follows the Ministry Mathematics book contents exactly:
     Unit 1 Numbers and Operations on Them (2 lessons), Unit 2 Algebra (5), Unit 3 Geometry (7), Unit 4 Statistics (1).
   15 lessons, ids mprep3u1l1 ... mprep3u4l1. Registered as EZ3.MTHG.prep3.
   Labs: part 1 of every lesson is a live canvas manipulative (mprep3_* in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  E.MTHG = E.MTHG || {};
  var U = [];

  /* ======================= UNIT 1 - NUMBERS AND OPERATIONS ON THEM ======================= */
  U.push({
    id: "mprep3u1", num: 1, icon: "🔢", color: "blue",
    title: { en: "Numbers and Operations on Them", ar: "الأعداد والعمليات عليها" },
    lessons: [
      {
        id: "mprep3u1l1", icon: "🗼", page: 2,
        title: { en: "Powers of Powers", ar: "قوة القوة" },
        idea: {
          official: {
            en: ["A power has a base and an exponent: in " + eq("2³") + " the base is 2 and the exponent is 3.",
              "Power of a power: write the factors. " + eq("(2³)⁴ = 2³ × 2³ × 2³ × 2³ = 2³⁺³⁺³⁺³ = 2¹²") + ". 12 is the product 3 × 4.",
              "Rule: for any non-zero real number a and integers m, n: " + eq("(aᵐ)ⁿ = aᵐˣⁿ") + ", for example " + eq("(5⁴)² = 5⁸") + " and " + eq("(7⁻²)⁵ = 7⁻¹⁰") + ".",
              "Power of a product and of a quotient: " + eq("(aᵐ × bⁿ)ᵏ = aᵐᵏ × bⁿᵏ") + " and " + eq("(aᵐ ÷ bⁿ)ᵏ = aᵐᵏ ÷ bⁿᵏ") + ", so " + eq("(2³ × 3)⁴ = 2¹² × 3⁴") + ".",
              "Worked example: " + eq("(2³)² × 2⁴ ÷ 2⁸ = 2⁶⁺⁴⁻⁸ = 2² = 4") + ". Remember " + eq("a⁰ = 1") + " and " + eq("(−a)ⁿ = aⁿ") + " when n is even.",
              "Real life: a cube-shaped tank with edge 27 cm = " + eq("3³") + " cm holds " + eq("(3³)³ = 3⁹ = 19,683 cm³") + "."],
            ar: ["للقوة أساس وأس: في " + eq("2³") + " الأساس ٢ والأس ٣.",
              "قوة القوة: اكتب العوامل. " + eq("(2³)⁴ = 2³ × 2³ × 2³ × 2³ = 2³⁺³⁺³⁺³ = 2¹²") + "، والعدد ١٢ هو حاصل ضرب ٣ × ٤.",
              "القاعدة: لأي عدد حقيقي a لا يساوي صفرًا وأي عددين صحيحين m وn: " + eq("(aᵐ)ⁿ = aᵐˣⁿ") + "، مثل " + eq("(5⁴)² = 5⁸") + " و" + eq("(7⁻²)⁵ = 7⁻¹⁰") + ".",
              "قوة حاصل الضرب وقوة خارج القسمة: " + eq("(aᵐ × bⁿ)ᵏ = aᵐᵏ × bⁿᵏ") + " و" + eq("(aᵐ ÷ bⁿ)ᵏ = aᵐᵏ ÷ bⁿᵏ") + "، إذن " + eq("(2³ × 3)⁴ = 2¹² × 3⁴") + ".",
              "مثال محلول: " + eq("(2³)² × 2⁴ ÷ 2⁸ = 2⁶⁺⁴⁻⁸ = 2² = 4") + "، وتذكّر أن " + eq("a⁰ = 1") + " وأن " + eq("(−a)ⁿ = aⁿ") + " إذا كان n زوجيًا.",
              "من الحياة: حوض على شكل مكعب طول حرفه ٢٧ سم = " + eq("3³") + " سم يتسع لـ " + eq("(3³)³ = 3⁹ = 19683 cm³") + "."]
          },
          story: {
            en: ["Salma visits the Alexandria Aquarium Museum next to Qaitbay Citadel and sees a cube-shaped glass tank.",
              "The guide says each edge is 27 cm. Salma notices 27 = 3 × 3 × 3 = " + eq("3³") + ".",
              "Volume is edge × edge × edge, so she writes " + eq("(3³)³") + ": three groups, each with three 3s.",
              "Counting the 3s gives 3 × 3 = 9 of them, so the volume is " + eq("3⁹") + " cm³ without a long multiplication.",
              "Her calculator agrees: " + eq("3⁹ = 19,683") + " cm³ of sea water for the turtles. Multiply the exponents!"],
            ar: ["تزور سلمى متحف الأحياء المائية بالإسكندرية بجوار قلعة قايتباي، وترى حوضًا زجاجيًا على شكل مكعب.",
              "يقول المرشد إن طول كل حرف ٢٧ سم، فتلاحظ سلمى أن ٢٧ = ٣ × ٣ × ٣ = " + eq("3³") + ".",
              "الحجم = الحرف × الحرف × الحرف، فتكتب " + eq("(3³)³") + ": ثلاث مجموعات في كل منها ثلاث ثلاثات.",
              "تعدّ الثلاثات فتجدها ٣ × ٣ = ٩، إذن الحجم " + eq("3⁹") + " سم³ دون ضرب طويل.",
              "وتؤكد الآلة الحاسبة: " + eq("3⁹ = 19683") + " سم³ من ماء البحر للسلاحف. اضرب الأسس!"]
          }
        },
        words: [
          ["Base", "الأساس", "The number that is multiplied by itself: 2 in 2³.", "العدد المضروب في نفسه: ٢ في 2³."],
          ["Exponent", "الأس", "How many times the base is used as a factor: 3 in 2³.", "عدد مرات تكرار الأساس عاملًا: ٣ في 2³."],
          ["Power", "القوة", "A base with an exponent, like 5⁴.", "أساس مرفوع إلى أس، مثل 5⁴."],
          ["Power of a power", "قوة القوة", "(aᵐ)ⁿ = aᵐˣⁿ: keep the base and multiply the exponents.", "(aᵐ)ⁿ = aᵐˣⁿ: نُبقي الأساس ونضرب الأسين."],
          ["Power of a product", "قوة حاصل الضرب", "(a × b)ⁿ = aⁿ × bⁿ: every factor takes the exponent.", "(a × b)ⁿ = aⁿ × bⁿ: كل عامل يُرفع إلى الأس."],
          ["Zero exponent", "الأس الصفري", "a⁰ = 1 for any non-zero a.", "a⁰ = 1 لأي عدد a لا يساوي صفرًا."]
        ],
        lab: { parts: [{ type: "mprep3_power" }, {
          type: "sort",
          prompt: ["Tap an expression, then tap the box it belongs to.", "اضغط على المقدار ثم اضغط على المجموعة المناسبة."],
          bins: [["y", "✅", "Equals 2¹²", "يساوي 2¹²"], ["n", "❌", "Does not equal 2¹²", "لا يساوي 2¹²"]],
          items: [["(2³)⁴", "y"], ["(2⁶)²", "y"], ["4⁶", "y"], ["8⁴", "y"], ["2³ × 2⁴", "n"], ["(2⁵)²", "n"], ["2³ + 2⁹", "n"]]
        }] },
        quiz: [
          Q(["Simplify (a³)⁴.", "بسّط (a³)⁴."], [["a¹²", "a¹²"], ["a⁷", "a⁷"], ["a³⁴", "a³⁴"], ["a⁸¹", "a⁸¹"]],
            ["Power of a power: multiply the exponents, 3 × 4 = 12, so (a³)⁴ = a¹².", "قوة القوة: نضرب الأسين ٣ × ٤ = ١٢، إذن (a³)⁴ = a¹²."], ["Four boxes, each with three a's inside: 12 a's in total.", "أربعة صناديق في كل منها ثلاثة من a: المجموع ١٢."]),
          Q(["What is the value of (3⁰)⁸?", "ما قيمة (3⁰)⁸؟"], [["1", "1"], ["3⁸", "3⁸"], ["0", "0"], ["24", "24"]],
            ["3⁰ = 1 and 1⁸ = 1. Also (3⁰)⁸ = 3⁰ˣ⁸ = 3⁰ = 1.", "3⁰ = 1 و1⁸ = 1، كما أن (3⁰)⁸ = 3⁰ˣ⁸ = 3⁰ = 1."], ["Eight empty boxes still hold nothing but the number 1.", "ثمانية صناديق فارغة لا تعطي إلا العدد ١."]),
          Q(["If 2ˣ = 5, what is the value of 8ˣ?", "إذا كان 2ˣ = 5 فما قيمة 8ˣ؟"], [["125", "125"], ["40", "40"], ["15", "15"], ["32", "32"]],
            ["8ˣ = (2³)ˣ = (2ˣ)³ = 5³ = 125.", "8ˣ = (2³)ˣ = (2ˣ)³ = 5³ = 125."], ["Swap the order of the exponents: cube the 5 instead.", "بدّل ترتيب الأسين: ارفع ٥ إلى الأس ٣."]),
          Q(["Simplify (2³)² × 2⁴ ÷ 2⁸.", "بسّط (2³)² × 2⁴ ÷ 2⁸."], [["4", "4"], ["2", "2"], ["8", "8"], ["16", "16"]],
            ["(2³)² = 2⁶, then 2⁶⁺⁴⁻⁸ = 2² = 4.", "(2³)² = 2⁶، ثم 2⁶⁺⁴⁻⁸ = 2² = 4."], ["Add the twos you gain and take away the twos you lose: 6 + 4 − 8 = 2.", "اجمع الأسس التي تضاف واطرح التي تُحذف: ٦ + ٤ − ٨ = ٢."]),
          Q(["Simplify (−a²b)³.", "بسّط (−a²b)³."], [["−a⁶b³", "−a⁶b³"], ["a⁶b³", "a⁶b³"], ["−a⁵b³", "−a⁵b³"], ["−a⁶b", "−a⁶b"]],
            ["The exponent 3 is odd, so the sign stays negative: (−1)³ × a²ˣ³ × b³ = −a⁶b³.", "الأس ٣ فردي فتبقى الإشارة سالبة: (−1)³ × a²ˣ³ × b³ = −a⁶b³."], ["Three minus signs multiplied leave one minus sign behind.", "ثلاث إشارات سالبة مضروبة تترك إشارة سالبة واحدة."]),
          Q(["A cube-shaped tank has an edge of 27 cm. Its volume is:", "حوض على شكل مكعب طول حرفه ٢٧ سم. حجمه هو:"], [["3⁹ cm³", "3⁹ سم³"], ["3⁶ cm³", "3⁶ سم³"], ["3⁷ cm³", "3⁷ سم³"], ["81 cm³", "81 سم³"]],
            ["27 = 3³, so the volume = (3³)³ = 3⁹ = 19,683 cm³.", "27 = 3³، إذن الحجم = (3³)³ = 3⁹ = 19683 سم³."], ["Salma counted nine 3s in the aquarium tank.", "عدّت سلمى تسع ثلاثات في حوض المتحف."]),
          Q(["A square floor has side length 2x³y² units. Its area is:", "أرضية مربعة طول ضلعها 2x³y² وحدة طول. مساحتها:"], [["4x⁶y⁴", "4x⁶y⁴"], ["2x⁶y⁴", "2x⁶y⁴"], ["4x⁵y⁴", "4x⁵y⁴"], ["4x⁹y⁴", "4x⁹y⁴"]],
            ["Area = (2x³y²)² = 2² x⁶ y⁴ = 4x⁶y⁴. Every factor is squared, including the 2.", "المساحة = (2x³y²)² = 2² x⁶ y⁴ = 4x⁶y⁴، وكل عامل يُربّع بما فيه العدد ٢."], ["The tiler squares the number too, not only the letters.", "البلّاط يربّع العدد أيضًا وليس الحروف فقط."])
        ]
      },
      {
        id: "mprep3u1l2", icon: "🦠", page: 7,
        title: { en: "Exponential Equations", ar: "المعادلات الأسية" },
        idea: {
          official: {
            en: ["An exponential equation has the variable in the exponent, like " + eq("2ˣ = 8") + " or " + eq("3ˣ⁻⁴ = 1/9") + ". " + eq("x² = 9") + " is not exponential.",
              "We study " + eq("aˣ = b") + " with a > 0 and a ≠ 1, using equality of powers: if " + eq("aˣ = aʸ") + " then x = y.",
              "Method: write both sides with the same base, then make the exponents equal. " + eq("3ˣ⁺¹ = 81 = 3⁴") + " so x + 1 = 4 and x = 3.",
              "Use the power of a power rule: " + eq("9ˣ⁺² = 3ˣ") + " gives " + eq("3²ˣ⁺⁴ = 3ˣ") + ", so 2x + 4 = x and x = −4.",
              "Special cases: if " + eq("aˣ = 1") + " then x = 0. If " + eq("aˣ = bˣ") + " with a ≠ b then x = 0, so " + eq("2ˣ⁺¹ = 3ˣ⁺¹") + " gives x = −1.",
              "Check: substitute back. " + eq("3³⁺¹ = 3⁴ = 81") + " ✓."],
            ar: ["المعادلة الأسية تحتوي على المتغير في الأس، مثل " + eq("2ˣ = 8") + " أو " + eq("3ˣ⁻⁴ = 1/9") + "، أما " + eq("x² = 9") + " فليست أسية.",
              "ندرس المعادلة " + eq("aˣ = b") + " حيث a > 0 وa ≠ 1، مستخدمين تساوي القوى: إذا كان " + eq("aˣ = aʸ") + " فإن x = y.",
              "الطريقة: نكتب الطرفين بالأساس نفسه ثم نساوي الأسين. " + eq("3ˣ⁺¹ = 81 = 3⁴") + " إذن x + 1 = 4 ومنها x = 3.",
              "نستخدم قاعدة قوة القوة: " + eq("9ˣ⁺² = 3ˣ") + " تصبح " + eq("3²ˣ⁺⁴ = 3ˣ") + "، إذن 2x + 4 = x ومنها x = −4.",
              "حالات خاصة: إذا كان " + eq("aˣ = 1") + " فإن x = 0، وإذا كان " + eq("aˣ = bˣ") + " حيث a ≠ b فإن x = 0، لذلك " + eq("2ˣ⁺¹ = 3ˣ⁺¹") + " تعطي x = −1.",
              "التحقق: نعوّض في المعادلة. " + eq("3³⁺¹ = 3⁴ = 81") + " ✓."]
          },
          story: {
            en: ["In the school lab, Omar looks at bacteria under the microscope. Each cell splits into two every hour.",
              "Starting from one cell, after x hours there are " + eq("2ˣ") + " cells. When will there be 1024 cells?",
              "Omar writes " + eq("2ˣ = 1024") + " and halves 1024 again and again: 1024 = " + eq("2¹⁰") + ".",
              "Same base on both sides, so the exponents are equal: x = 10 hours.",
              "He checks: 1, 2, 4, 8, ... the tenth doubling gives 1024. The equation saved him ten lines of counting."],
            ar: ["في معمل المدرسة ينظر عمر إلى البكتيريا تحت المجهر؛ كل خلية تنقسم إلى خليتين كل ساعة.",
              "إذا بدأنا بخلية واحدة يصبح العدد بعد x ساعة " + eq("2ˣ") + " خلية. متى يصبح العدد ١٠٢٤ خلية؟",
              "يكتب عمر " + eq("2ˣ = 1024") + " ويقسم ١٠٢٤ على ٢ مرة بعد مرة: ١٠٢٤ = " + eq("2¹⁰") + ".",
              "الأساس نفسه في الطرفين، إذن يتساوى الأسان: x = ١٠ ساعات.",
              "يتحقق: ١، ٢، ٤، ٨، ... والمضاعفة العاشرة تعطي ١٠٢٤. وفّرت عليه المعادلة عشرة أسطر من العد."]
          }
        },
        words: [
          ["Exponential equation", "المعادلة الأسية", "An equation with the variable in the exponent, like 2ˣ = 8.", "معادلة يكون فيها المتغير في الأس، مثل 2ˣ = 8."],
          ["Equality of powers", "تساوي القوى", "If aˣ = aʸ (a > 0, a ≠ 1) then x = y.", "إذا كان aˣ = aʸ حيث a > 0 وa ≠ 1 فإن x = y."],
          ["Same base", "توحيد الأساس", "Rewrite both sides as powers of one number: 81 = 3⁴, 32 = 2⁵.", "كتابة الطرفين قوى لعدد واحد: ٨١ = 3⁴ و٣٢ = 2⁵."],
          ["Solution set", "مجموعة الحل", "The set of values of x that make the equation true.", "مجموعة قيم x التي تحقق المعادلة."],
          ["Check", "التحقق", "Substitute the value back into the original equation.", "التعويض بالقيمة في المعادلة الأصلية."]
        ],
        lab: { parts: [{ type: "mprep3_expeq" }, {
          type: "sort",
          prompt: ["Tap an equation, then tap its group.", "اضغط على المعادلة ثم اضغط على مجموعتها."],
          bins: [["e", "🚀", "Exponential equation", "معادلة أسية"], ["n", "📏", "Not exponential", "ليست أسية"]],
          items: [["2ˣ = 8", "e"], ["3ˣ⁻⁴ = 1/9", "e"], ["5²ˣ = 125", "e"], ["(1/2)ˣ = 4", "e"], ["x² = 9", "n"], ["x⁵ = 32", "n"], ["2x = 8", "n"]]
        }] },
        quiz: [
          Q(["Solve in R: 3ˣ⁺¹ = 81", "حل في R: 3ˣ⁺¹ = 81"], [["x = 3", "x = 3"], ["x = 4", "x = 4"], ["x = 27", "x = 27"], ["x = 2", "x = 2"]],
            ["81 = 3⁴, so x + 1 = 4 and x = 3.", "81 = 3⁴ إذن x + 1 = 4 ومنها x = 3."], ["Four 3s make 81, and one of them is the +1, so x is 3.", "أربع ثلاثات تعطي ٨١، وواحدة منها هي +١، إذن x = 3."]),
          Q(["Solve in R: 2ˣ⁻⁷ = 1/32", "حل في R: 2ˣ⁻⁷ = 1/32"], [["x = 2", "x = 2"], ["x = −5", "x = −5"], ["x = 12", "x = 12"], ["x = −2", "x = −2"]],
            ["1/32 = 2⁻⁵, so x − 7 = −5 and x = 2.", "1/32 = 2⁻⁵ إذن x − 7 = −5 ومنها x = 2."], ["A fraction with 32 below is a negative exponent of 2.", "كسر مقامه ٣٢ هو قوة سالبة للعدد ٢."]),
          Q(["Solve in R: 9ˣ⁺² = 3ˣ", "حل في R: 9ˣ⁺² = 3ˣ"], [["x = −4", "x = −4"], ["x = 4", "x = 4"], ["x = −2", "x = −2"], ["x = 2", "x = 2"]],
            ["9 = 3², so 3²ˣ⁺⁴ = 3ˣ, then 2x + 4 = x and x = −4.", "9 = 3² إذن 3²ˣ⁺⁴ = 3ˣ، ثم 2x + 4 = x ومنها x = −4."], ["Turn the 9 into two 3s first, then the bases match.", "حوّل ٩ إلى ثلاثتين أولًا فيتساوى الأساسان."]),
          Q(["Solve in R: 125ˣ⁺¹ = 625ˣ⁻¹", "حل في R: 125ˣ⁺¹ = 625ˣ⁻¹"], [["x = 7", "x = 7"], ["x = −7", "x = −7"], ["x = 1", "x = 1"], ["x = 4", "x = 4"]],
            ["125 = 5³ and 625 = 5⁴: 5³ˣ⁺³ = 5⁴ˣ⁻⁴, so 3x + 3 = 4x − 4 and x = 7.", "125 = 5³ و625 = 5⁴: 5³ˣ⁺³ = 5⁴ˣ⁻⁴، إذن 3x + 3 = 4x − 4 ومنها x = 7."], ["Both numbers are towers of 5s: three 5s and four 5s.", "العددان أبراج من الخمسات: ثلاث خمسات وأربع خمسات."]),
          Q(["Solve in R: 4^(x² − 9) = 1", "حل في R: 4^(x² − 9) = 1"], [["x = 3 or x = −3", "x = 3 أو x = −3"], ["x = 3 only", "x = 3 فقط"], ["x = 9", "x = 9"], ["x = 0", "x = 0"]],
            ["aˣ = 1 means the exponent is 0: x² − 9 = 0, x² = 9, x = ±3.", "aˣ = 1 يعني أن الأس صفر: x² − 9 = 0 ومنها x² = 9 وx = ±3."], ["Any power equal to 1 has exponent zero, and two numbers square to 9.", "أي قوة تساوي ١ أسها صفر، وهناك عددان مربع كل منهما ٩."]),
          Q(["One bacterial cell doubles every hour. After how many hours are there 1024 cells?", "خلية بكتيرية تتضاعف كل ساعة. بعد كم ساعة يصبح عدد الخلايا ١٠٢٤؟"], [["10", "10"], ["9", "9"], ["512", "512"], ["11", "11"]],
            ["2ˣ = 1024 = 2¹⁰, so x = 10 hours.", "2ˣ = 1024 = 2¹⁰ إذن x = 10 ساعات."], ["Omar halved 1024 ten times to get back to one cell.", "قسم عمر ١٠٢٤ على ٢ عشر مرات حتى عاد إلى خلية واحدة."]),
          Q(["Solve in R: 2ˣ⁺¹ = 3ˣ⁺¹", "حل في R: 2ˣ⁺¹ = 3ˣ⁺¹"], [["x = −1", "x = −1"], ["x = 0", "x = 0"], ["x = 1", "x = 1"], ["No solution", "لا يوجد حل"]],
            ["aˣ = bˣ with a ≠ b only when the exponent is 0: x + 1 = 0, x = −1.", "aˣ = bˣ حيث a ≠ b لا يتحقق إلا إذا كان الأس صفرًا: x + 1 = 0 ومنها x = −1."], ["Different bases agree only at power zero, where both are 1.", "الأساسان المختلفان يتفقان فقط عند الأس صفر حيث يساوي كل منهما ١."])
        ]
      }
    ]
  });

  /* ======================= UNIT 2 - ALGEBRA ======================= */
  U.push({
    id: "mprep3u2", num: 2, icon: "📈", color: "green",
    title: { en: "Algebra", ar: "الجبر" },
    lessons: [
      {
        id: "mprep3u2l1", icon: "🐬", page: 14,
        title: { en: "Quadratic Function", ar: "الدالة التربيعية" },
        idea: {
          official: {
            en: ["A quadratic function is a second-degree function: standard form " + eq("f(x) = ax² + bx + c, a ≠ 0") + ". Its domain is R and its curve is a parabola.",
              "Vertex: " + eq("x = −b ÷ 2a") + ", y = f(that x). The axis of symmetry is the vertical line through the vertex. The y-intercept is c.",
              "If a > 0 the curve opens upward and f has a minimum at the vertex; if a < 0 it opens downward and f has a maximum.",
              "Example: " + eq("f(x) = x² − 2x − 3") + ": x = 2 ÷ 2 = 1, f(1) = −4, vertex (1, −4), minimum −4, zeros −1 and 3.",
              "Vertex form: " + eq("f(x) = a(x − h)² + k") + ", vertex (h, k). " + eq("f(x) = 5 − 2(x + 1)²") + " has vertex (−1, 5) and maximum 5.",
              "To draw: find the vertex, pick x-values symmetric around it, make a table, plot and join with a smooth curve."],
            ar: ["الدالة التربيعية دالة من الدرجة الثانية صورتها القياسية " + eq("f(x) = ax² + bx + c, a ≠ 0") + "، ومجالها R ومنحناها قطع مكافئ.",
              "رأس المنحنى: " + eq("x = −b ÷ 2a") + " وy = f(x) عند هذه القيمة. محور التماثل هو المستقيم الرأسي المار بالرأس، والمقطع الصادي هو c.",
              "إذا كان a > 0 يكون المنحنى مفتوحًا لأعلى وللدالة قيمة صغرى عند الرأس، وإذا كان a < 0 يكون مفتوحًا لأسفل وللدالة قيمة عظمى.",
              "مثال: " + eq("f(x) = x² − 2x − 3") + ": x = 2 ÷ 2 = 1 وf(1) = −4، الرأس (1, −4) والقيمة الصغرى −4، والأصفار −1 و3.",
              "صورة الرأس: " + eq("f(x) = a(x − h)² + k") + " ورأسها (h, k). الدالة " + eq("f(x) = 5 − 2(x + 1)²") + " رأسها (−1, 5) وقيمتها العظمى 5.",
              "للرسم: نوجد الرأس، ونختار قيمًا لـ x متماثلة حوله، ونكوّن جدولًا، ثم نعيّن النقاط ونصلها بمنحنى أملس."]
          },
          story: {
            en: ["At a dolphin show in Hurghada, Nour films a dolphin jump. Her teacher models its path as " + eq("f(x) = −0.2x² + 2x") + ".",
              "a = −0.2 is negative, so the path opens downward: the top of the jump is a maximum.",
              "The top is at " + eq("x = −2 ÷ (2 × −0.2) = 5") + " metres along the pool.",
              "The height there is " + eq("f(5) = −0.2 × 25 + 10 = 5") + " metres.",
              "The jump is symmetric: the dolphin leaves the water at x = 0 and dives back at x = 10, the same distance on each side of the axis x = 5."],
            ar: ["في عرض للدلافين بالغردقة تصوّر نور قفزة دلفين، ويصف معلمها مساره بالدالة " + eq("f(x) = −0.2x² + 2x") + ".",
              "a = −0.2 سالبة، إذن المسار مفتوح لأسفل وأعلى نقطة في القفزة قيمة عظمى.",
              "تقع القمة عند " + eq("x = −2 ÷ (2 × −0.2) = 5") + " أمتار على طول الحوض.",
              "والارتفاع هناك " + eq("f(5) = −0.2 × 25 + 10 = 5") + " أمتار.",
              "القفزة متماثلة: يخرج الدلفين من الماء عند x = 0 ويغوص عند x = 10، على البعد نفسه من محور التماثل x = 5."]
          }
        },
        words: [
          ["Quadratic function", "الدالة التربيعية", "f(x) = ax² + bx + c with a ≠ 0.", "f(x) = ax² + bx + c حيث a ≠ 0."],
          ["Parabola", "القطع المكافئ", "The U-shaped curve of a quadratic function.", "منحنى الدالة التربيعية على شكل حرف U."],
          ["Vertex", "رأس المنحنى", "The turning point (−b/2a, f(−b/2a)), or (h, k) in vertex form.", "نقطة التحول (−b/2a, f(−b/2a))، أو (h, k) في صورة الرأس."],
          ["Axis of symmetry", "محور التماثل", "The vertical line through the vertex: x = −b/2a.", "المستقيم الرأسي المار بالرأس: x = −b/2a."],
          ["Maximum / minimum value", "القيمة العظمى / الصغرى", "The y of the vertex: a maximum if a < 0, a minimum if a > 0.", "الإحداثي الصادي للرأس: عظمى إذا كان a < 0 وصغرى إذا كان a > 0."],
          ["y-intercept", "المقطع الصادي", "Where the curve meets the y-axis: f(0) = c.", "نقطة تقاطع المنحنى مع محور الصادات: f(0) = c."]
        ],
        lab: { parts: [{ type: "mprep3_parabola" }, {
          type: "sort",
          prompt: ["Tap a function, then tap how its curve opens.", "اضغط على الدالة ثم اضغط على اتجاه فتحة منحناها."],
          bins: [["u", "⬆️", "Opens upward: minimum", "مفتوح لأعلى: قيمة صغرى"], ["d", "⬇️", "Opens downward: maximum", "مفتوح لأسفل: قيمة عظمى"]],
          items: [["x² − 2x − 3", "u"], ["2(x − 3)² + 1", "u"], ["3x² − 12", "u"], ["−x² + 6x − 5", "d"], ["5 − 2(x + 1)²", "d"], ["−0.2x² + 2x", "d"]]
        }] },
        quiz: [
          Q(["What is the vertex of f(x) = x² − 4x + 3?", "ما رأس منحنى الدالة f(x) = x² − 4x + 3؟"], [["(2, −1)", "(2, −1)"], ["(−2, 15)", "(−2, 15)"], ["(2, 3)", "(2, 3)"], ["(1, 0)", "(1, 0)"]],
            ["x = −b ÷ 2a = 4 ÷ 2 = 2 and f(2) = 4 − 8 + 3 = −1, so the vertex is (2, −1).", "x = −b ÷ 2a = 4 ÷ 2 = 2 وf(2) = 4 − 8 + 3 = −1، إذن الرأس (2, −1)."], ["Find the middle first (x = 2), then ask the function how low it goes there.", "أوجد المنتصف أولًا (x = 2) ثم اسأل الدالة عن قيمتها هناك."]),
          Q(["What is the maximum value of f(x) = −x² + 6x − 5?", "ما القيمة العظمى للدالة f(x) = −x² + 6x − 5؟"], [["4", "4"], ["−5", "−5"], ["3", "3"], ["9", "9"]],
            ["x = −6 ÷ (−2) = 3 and f(3) = −9 + 18 − 5 = 4. a < 0, so 4 is a maximum.", "x = −6 ÷ (−2) = 3 وf(3) = −9 + 18 − 5 = 4، وa < 0 إذن ٤ قيمة عظمى."], ["The vertex sits at x = 3, and the top of the hill is 4.", "يقع الرأس عند x = 3 وقمة التل ٤."]),
          Q(["Where does f(x) = 2x² − 5x + 7 cut the y-axis?", "أين يقطع منحنى f(x) = 2x² − 5x + 7 محور الصادات؟"], [["(0, 7)", "(0, 7)"], ["(7, 0)", "(7, 0)"], ["(0, −5)", "(0, −5)"], ["(0, 2)", "(0, 2)"]],
            ["Put x = 0: f(0) = c = 7, so the point is (0, 7).", "نضع x = 0: f(0) = c = 7، إذن النقطة (0, 7)."], ["On the y-axis x is zero, so only the constant is left.", "على محور الصادات x = 0 فيبقى الحد المطلق فقط."]),
          Q(["For f(x) = 5 − 2(x + 1)², the vertex and its type are:", "للدالة f(x) = 5 − 2(x + 1)² الرأس ونوع القيمة هما:"], [["(−1, 5), maximum", "(−1, 5)، قيمة عظمى"], ["(1, 5), maximum", "(1, 5)، قيمة عظمى"], ["(−1, 5), minimum", "(−1, 5)، قيمة صغرى"], ["(5, −1), maximum", "(5, −1)، قيمة عظمى"]],
            ["f(x) = −2(x − (−1))² + 5: h = −1, k = 5 and a = −2 < 0, so 5 is a maximum.", "f(x) = −2(x − (−1))² + 5: h = −1 وk = 5 وa = −2 < 0، إذن ٥ قيمة عظمى."], ["x + 1 hides h = −1; the minus 2 turns the curve upside down.", "x + 1 تخفي h = −1، و−٢ تقلب المنحنى لأسفل."]),
          Q(["A dolphin's jump follows f(x) = −0.2x² + 2x. Its maximum height is:", "مسار قفزة دلفين f(x) = −0.2x² + 2x. أقصى ارتفاع له:"], [["5 m", "5 م"], ["10 m", "10 م"], ["2.5 m", "2.5 م"], ["20 m", "20 م"]],
            ["x = −2 ÷ (2 × −0.2) = 5, f(5) = −5 + 10 = 5 m.", "x = −2 ÷ (2 × −0.2) = 5 وf(5) = −5 + 10 = 5 م."], ["Nour found the top of the jump 5 m along the pool and 5 m high.", "وجدت نور قمة القفزة على بعد ٥ م وبارتفاع ٥ م."]),
          Q(["A ball's height is h(t) = −4.9t² + 19.6t. Its maximum height and the time to reach it:", "ارتفاع كرة h(t) = −4.9t² + 19.6t. أقصى ارتفاع وزمن الوصول إليه:"], [["19.6 m after 2 s", "19.6 م بعد 2 ث"], ["14.7 m after 1 s", "14.7 م بعد 1 ث"], ["19.6 m after 4 s", "19.6 م بعد 4 ث"], ["39.2 m after 2 s", "39.2 م بعد 2 ث"]],
            ["t = −19.6 ÷ (2 × −4.9) = 2 s, h(2) = −19.6 + 39.2 = 19.6 m.", "t = −19.6 ÷ (2 × −4.9) = 2 ث وh(2) = −19.6 + 39.2 = 19.6 م."], ["Up for 2 seconds, down for 2 seconds: the top is in the middle.", "صعود ثانيتين وهبوط ثانيتين، والقمة في المنتصف."]),
          Q(["The point (b, 9) lies on f(x) = 2(x − 3)² + 1. Find b.", "النقطة (b, 9) تقع على منحنى f(x) = 2(x − 3)² + 1. أوجد b."], [["b = 5 or b = 1", "b = 5 أو b = 1"], ["b = 5 only", "b = 5 فقط"], ["b = 7 or b = −1", "b = 7 أو b = −1"], ["b = 2 or b = 4", "b = 2 أو b = 4"]],
            ["2(b − 3)² + 1 = 9, (b − 3)² = 4, b − 3 = ±2, so b = 5 or b = 1.", "2(b − 3)² + 1 = 9 إذن (b − 3)² = 4 وb − 3 = ±2، ومنها b = 5 أو b = 1."], ["The parabola is symmetric about x = 3, so two points share the height 9.", "المنحنى متماثل حول x = 3، فهناك نقطتان على الارتفاع ٩."])
        ]
      },
      {
        id: "mprep3u2l2", icon: "💊", page: 22,
        title: { en: "Set of Real Zeros of Polynomial Functions", ar: "مجموعة أصفار الدوال كثيرات الحدود" },
        idea: {
          official: {
            en: ["A polynomial function " + eq("f(x) = a₀ + a₁x + ... + aₙxⁿ") + " has whole-number exponents; its degree is n: " + eq("9 − 4x") + " is first degree, " + eq("2x² − 1") + " second, " + eq("x³ − 2x + 1") + " third.",
              "The real zeros are the values of x that make f(x) = 0: the set is " + eq("{x : f(x) = 0, x ∈ R}") + ". To find them, solve f(x) = 0.",
              "Example: " + eq("x³ + 2x² − 15x = 0") + " → " + eq("x(x + 5)(x − 3) = 0") + ", zeros {0, −5, 3}. And " + eq("x² − 25 = 0") + " gives {−5, 5}.",
              eq("3x² + 12 = 0") + " gives x² = −4: no real roots, the set is ∅. A constant f(x) = 7 has zeros ∅; the zero polynomial has zeros R.",
              "On a graph, the zeros are where the curve meets the x-axis; the number of different zeros is the number of meeting points.",
              "If −3 is a zero of " + eq("f(x) = 2x² + bx + 3") + " then f(−3) = 0: 18 − 3b + 3 = 0, b = 7."],
            ar: ["الدالة كثيرة الحدود " + eq("f(x) = a₀ + a₁x + ... + aₙxⁿ") + " أسس متغيرها أعداد صحيحة موجبة، ودرجتها n: " + eq("9 − 4x") + " من الدرجة الأولى، و" + eq("2x² − 1") + " من الثانية، و" + eq("x³ − 2x + 1") + " من الثالثة.",
              "الأصفار الحقيقية هي قيم x التي تجعل f(x) = 0، ومجموعتها " + eq("{x : f(x) = 0, x ∈ R}") + "، ولإيجادها نحل المعادلة f(x) = 0.",
              "مثال: " + eq("x³ + 2x² − 15x = 0") + " ← " + eq("x(x + 5)(x − 3) = 0") + " والأصفار {0, −5, 3}، و" + eq("x² − 25 = 0") + " تعطي {−5, 5}.",
              eq("3x² + 12 = 0") + " تعطي x² = −4: لا جذور حقيقية والمجموعة ∅. الدالة الثابتة f(x) = 7 أصفارها ∅، والدالة الصفرية أصفارها R.",
              "بيانيًا: الأصفار هي نقاط تقاطع المنحنى مع محور السينات، وعدد الأصفار المختلفة هو عدد نقاط التقاطع.",
              "إذا كان −3 أحد أصفار " + eq("f(x) = 2x² + bx + 3") + " فإن f(−3) = 0: 18 − 3b + 3 = 0 ومنها b = 7."]
          },
          story: {
            en: ["Dr Hana in Assiut explains medicine to her son Karim: after a dose, " + eq("c(t) = 9 − t²") + " milligrams remain after t hours.",
              "\"When is the medicine all gone?\" Karim asks. That is when c(t) = 0, a zero of the function.",
              "He solves " + eq("9 − t² = 0") + ": t² = 9, so t = 3 or t = −3.",
              "Time cannot be negative, so the effect vanishes after 3 hours.",
              "On the graph, the curve touches the time axis exactly at t = 3: the zero you can see."],
            ar: ["تشرح د. هناء في أسيوط لابنها كريم أن كمية الدواء الباقية بعد t ساعة هي " + eq("c(t) = 9 − t²") + " مليجرام.",
              "يسأل كريم: «متى ينتهي الدواء تمامًا؟» يحدث ذلك عندما c(t) = 0، أي عند صفر الدالة.",
              "يحل " + eq("9 − t² = 0") + ": t² = 9 إذن t = 3 أو t = −3.",
              "الزمن لا يكون سالبًا، إذن يزول أثر الدواء بعد ٣ ساعات.",
              "وعلى الرسم يقطع المنحنى محور الزمن عند t = 3 تمامًا: صفر تراه بعينيك."]
          }
        },
        words: [
          ["Polynomial function", "الدالة كثيرة الحدود", "f(x) = a₀ + a₁x + ... + aₙxⁿ with whole-number exponents.", "f(x) = a₀ + a₁x + ... + aₙxⁿ وأسس المتغير أعداد صحيحة غير سالبة."],
          ["Degree", "درجة الدالة", "The highest exponent of x with a non-zero coefficient.", "أكبر أس للمتغير x معامله لا يساوي صفرًا."],
          ["Zero of a function", "صفر الدالة", "A real number a with f(a) = 0.", "عدد حقيقي a يحقق f(a) = 0."],
          ["Set of zeros", "مجموعة الأصفار", "{x : f(x) = 0, x ∈ R}, written z(f).", "{x : f(x) = 0, x ∈ R} ويرمز لها z(f)."],
          ["Empty set ∅", "المجموعة الخالية ∅", "No real zeros, like 3x² + 12 or a non-zero constant.", "لا توجد أصفار حقيقية، مثل 3x² + 12 أو دالة ثابتة غير صفرية."]
        ],
        lab: { parts: [{ type: "mprep3_zeros" }, {
          type: "sort",
          prompt: ["Tap a function, then tap its group.", "اضغط على الدالة ثم اضغط على مجموعتها."],
          bins: [["p", "✅", "Polynomial function", "دالة كثيرة حدود"], ["n", "❌", "Not a polynomial", "ليست كثيرة حدود"]],
          items: [["5x³ − 20x", "p"], ["9 − 4x", "p"], ["7", "p"], ["x² − x − 12", "p"], ["1 ÷ x", "n"], ["√x", "n"], ["x⁻²", "n"]]
        }] },
        quiz: [
          Q(["The set of zeros of f(x) = 3x − 6 is:", "مجموعة أصفار الدالة f(x) = 3x − 6 هي:"], [["{2}", "{2}"], ["{−2}", "{−2}"], ["{6}", "{6}"], ["{3}", "{3}"]],
            ["3x − 6 = 0, so x = 6 ÷ 3 = 2.", "3x − 6 = 0 إذن x = 6 ÷ 3 = 2."], ["Which number tripled gives 6? Two.", "أي عدد إذا ضُرب في ٣ أعطى ٦؟ إنه ٢."]),
          Q(["The set of zeros of p(x) = x² − 25 is:", "مجموعة أصفار p(x) = x² − 25 هي:"], [["{−5, 5}", "{−5, 5}"], ["{5}", "{5}"], ["{25}", "{25}"], ["{−25, 25}", "{−25, 25}"]],
            ["x² = 25, so x = 5 or x = −5.", "x² = 25 إذن x = 5 أو x = −5."], ["Two numbers, one positive and one negative, square to 25.", "عددان أحدهما موجب والآخر سالب مربع كل منهما ٢٥."]),
          Q(["The set of zeros of f(x) = x³ + 2x² − 15x is:", "مجموعة أصفار f(x) = x³ + 2x² − 15x هي:"], [["{0, −5, 3}", "{0, −5, 3}"], ["{−5, 3}", "{−5, 3}"], ["{5, −3}", "{5, −3}"], ["{0, 5, −3}", "{0, 5, −3}"]],
            ["x(x² + 2x − 15) = x(x + 5)(x − 3) = 0, so x = 0, −5 or 3.", "x(x² + 2x − 15) = x(x + 5)(x − 3) = 0 إذن x = 0 أو −5 أو 3."], ["Do not forget the x you took out: it gives the zero 0.", "لا تنس العامل x الذي أخرجته: إنه يعطي الصفر ٠."]),
          Q(["The set of zeros of p(x) = 3x² + 12 is:", "مجموعة أصفار p(x) = 3x² + 12 هي:"], [["∅", "∅"], ["{−2, 2}", "{−2, 2}"], ["{−4}", "{−4}"], ["{2}", "{2}"]],
            ["3x² = −12 gives x² = −4, and no real number squares to a negative, so the set is ∅.", "3x² = −12 تعطي x² = −4، ولا يوجد عدد حقيقي مربعه سالب، إذن المجموعة ∅."], ["The curve floats above the x-axis and never touches it.", "المنحنى يطفو فوق محور السينات ولا يلمسه أبدًا."]),
          Q(["The set of zeros of g(x) = 27x³ + 125 is:", "مجموعة أصفار g(x) = 27x³ + 125 هي:"], [["{−5/3}", "{−5/3}"], ["{5/3}", "{5/3}"], ["{−125/27}", "{−125/27}"], ["∅", "∅"]],
            ["x³ = −125/27, so x = ∛(−125/27) = −5/3.", "x³ = −125/27 إذن x = ∛(−125/27) = −5/3."], ["A cube root of a negative number is negative: (−5/3)³ = −125/27.", "الجذر التكعيبي لعدد سالب سالب: (−5/3)³ = −125/27."]),
          Q(["If −3 is a zero of f(x) = 2x² + bx + 3, then b =", "إذا كان −3 أحد أصفار f(x) = 2x² + bx + 3 فإن b ="], [["7", "7"], ["−7", "−7"], ["3", "3"], ["5", "5"]],
            ["f(−3) = 0: 18 − 3b + 3 = 0, 3b = 21, b = 7.", "f(−3) = 0: 18 − 3b + 3 = 0 إذن 3b = 21 وb = 7."], ["Plug the zero in and the whole thing must vanish.", "عوّض بالصفر فيجب أن يتلاشى المقدار كله."]),
          Q(["After how many hours does c(t) = 9 − t² reach zero (t ≥ 0)?", "بعد كم ساعة تصبح c(t) = 9 − t² صفرًا (t ≥ 0)؟"], [["3", "3"], ["9", "9"], ["81", "81"], ["4.5", "4.5"]],
            ["9 − t² = 0, t² = 9, t = 3 (reject −3 because time is not negative).", "9 − t² = 0 إذن t² = 9 وt = 3 (نرفض −3 لأن الزمن لا يكون سالبًا)."], ["Karim's medicine is gone after 3 hours.", "ينتهي دواء كريم بعد ٣ ساعات."]),
          Q(["The set of zeros of the zero polynomial f(x) = 0 is:", "مجموعة أصفار الدالة الصفرية f(x) = 0 هي:"], [["R", "R"], ["∅", "∅"], ["{0}", "{0}"], ["{1}", "{1}"]],
            ["Every real x gives f(x) = 0, so the set of zeros is R.", "كل عدد حقيقي x يعطي f(x) = 0، إذن مجموعة الأصفار R."], ["The curve lies on the x-axis itself, touching it everywhere.", "المنحنى منطبق على محور السينات فيلمسه في كل مكان."])
        ]
      },
      {
        id: "mprep3u2l3", icon: "🚗", page: 27,
        title: { en: "Rational Algebraic Functions", ar: "الدوال الكسرية الجبرية" },
        idea: {
          official: {
            en: ["A rational algebraic fraction is " + eq("p(x) ÷ q(x)") + " where p and q are polynomials and q(x) ≠ 0. It is undefined at the zeros of the denominator.",
              "The rational function " + eq("f(x) = p(x) ÷ q(x)") + " has domain " + eq("D = R − {zeros of q}") + ". For " + eq("f(x) = (x² − 25) ÷ (x − 5)") + ", D = R − {5}.",
              "Simplify: factor, find the domain FIRST, then cancel. " + eq("(x² + 2x − 15) ÷ (x² − 5x + 6) = (x − 3)(x + 5) ÷ (x − 2)(x − 3) = (x + 5) ÷ (x − 2)") + ", with D = R − {2, 3}.",
              "So f(1) = 6 ÷ (−1) = −6, but f(2) and f(3) cannot be found: 2 and 3 are not in the domain.",
              "Zeros of f = zeros of the numerator that are not zeros of the denominator. " + eq("(x − 3)(x − 4) ÷ (x − 3)(x + 2)") + ": {3, 4} − {3, −2} = {4}."],
            ar: ["الكسر الجبري النسبي هو " + eq("p(x) ÷ q(x)") + " حيث p وq كثيرتا حدود وq(x) ≠ 0، ولا يكون معرّفًا عند أصفار المقام.",
              "الدالة الكسرية " + eq("f(x) = p(x) ÷ q(x)") + " مجالها " + eq("D = R − {أصفار q}") + "، فالدالة " + eq("f(x) = (x² − 25) ÷ (x − 5)") + " مجالها R − {5}.",
              "الاختزال: نحلل ثم نوجد المجال أولًا ثم نختصر. " + eq("(x² + 2x − 15) ÷ (x² − 5x + 6) = (x − 3)(x + 5) ÷ (x − 2)(x − 3) = (x + 5) ÷ (x − 2)") + " ومجالها R − {2, 3}.",
              "إذن f(1) = 6 ÷ (−1) = −6، أما f(2) وf(3) فلا يمكن إيجادهما لأن ٢ و٣ لا ينتميان إلى المجال.",
              "أصفار f = أصفار البسط التي ليست أصفارًا للمقام. " + eq("(x − 3)(x − 4) ÷ (x − 3)(x + 2)") + ": {3, 4} − {3, −2} = {4}."]
          },
          story: {
            en: ["Yassin's family drives on the Galala Road, carved through the mountains towards Zaafarana.",
              "In a puzzle, the car covers " + eq("x² + 8x + 12") + " km in " + eq("x² − x − 6") + " hours. Speed = distance ÷ time.",
              "Yassin factors: " + eq("(x + 6)(x + 2) ÷ (x − 3)(x + 2)") + ". Before cancelling he notes x ≠ 3 and x ≠ −2.",
              "After cancelling (x + 2), the speed is " + eq("(x + 6) ÷ (x − 3)") + " km/h.",
              "The removed values stay removed: the time can never be zero, just as a road can never be driven in no time."],
            ar: ["تسير أسرة ياسين على طريق الجلالة المحفور في الجبال نحو الزعفرانة.",
              "في لغز تقطع السيارة " + eq("x² + 8x + 12") + " كم في " + eq("x² − x − 6") + " ساعة، والسرعة = المسافة ÷ الزمن.",
              "يحلل ياسين: " + eq("(x + 6)(x + 2) ÷ (x − 3)(x + 2)") + "، وقبل الاختصار يكتب x ≠ 3 وx ≠ −2.",
              "بعد اختصار (x + 2) تصبح السرعة " + eq("(x + 6) ÷ (x − 3)") + " كم/س.",
              "القيم المستبعدة تبقى مستبعدة: لا يمكن أن يكون الزمن صفرًا، كما لا يمكن قطع طريق في لا وقت."]
          }
        },
        words: [
          ["Rational algebraic fraction", "الكسر الجبري النسبي", "p(x) ÷ q(x), two polynomials with q(x) ≠ 0.", "p(x) ÷ q(x) لكثيرتي حدود حيث q(x) ≠ 0."],
          ["Rational algebraic function", "الدالة الكسرية الجبرية", "f(x) = p(x) ÷ q(x) defined on R minus the zeros of q.", "f(x) = p(x) ÷ q(x) ومجالها R ما عدا أصفار q."],
          ["Domain", "المجال", "All x where the function is defined: D = R − z(q).", "قيم x التي تكون الدالة معرّفة عندها: D = R − z(q)."],
          ["Undefined", "غير معرّف", "A value of x that makes the denominator zero.", "قيمة لـ x تجعل المقام صفرًا."],
          ["Simplest form", "أبسط صورة", "The fraction after cancelling common factors (keeping the domain).", "الكسر بعد اختصار العوامل المشتركة (مع الاحتفاظ بالمجال)."],
          ["Zeros of a rational function", "أصفار الدالة الكسرية", "z(p) − z(q): numerator zeros that are not denominator zeros.", "z(p) − z(q): أصفار البسط التي ليست أصفارًا للمقام."]
        ],
        lab: { parts: [{ type: "mprep3_rational" }, {
          type: "sort",
          prompt: ["Tap a fraction, then tap its group.", "اضغط على الكسر ثم اضغط على مجموعته."],
          bins: [["a", "🌐", "Defined for all real x", "معرّف لكل x حقيقي"], ["s", "🚫", "Undefined at some x", "غير معرّف عند بعض القيم"]],
          items: [["(x − 3) ÷ (x² + 16)", "a"], ["(x + 1) ÷ (x² + 4)", "a"], ["7 ÷ (x² + 1)", "a"], ["(x − 3) ÷ (x² − 3x + 2)", "s"], ["(x² − 1) ÷ (x + 2)", "s"], ["(x + 5) ÷ (x − 2)", "s"]]
        }] },
        quiz: [
          Q(["For which values is (x − 3) ÷ (x² − 3x + 2) undefined?", "عند أي القيم يكون الكسر (x − 3) ÷ (x² − 3x + 2) غير معرّف؟"], [["{1, 2}", "{1, 2}"], ["{3}", "{3}"], ["{−1, −2}", "{−1, −2}"], ["{1, 2, 3}", "{1, 2, 3}"]],
            ["x² − 3x + 2 = (x − 2)(x − 1) = 0 gives x = 1 or 2.", "x² − 3x + 2 = (x − 2)(x − 1) = 0 تعطي x = 1 أو 2."], ["Only the denominator can break a fraction; the numerator's 3 is harmless.", "المقام وحده يفسد الكسر، أما ٣ في البسط فلا ضرر منها."]),
          Q(["For which values is (x − 3) ÷ (x² + 16) undefined?", "عند أي القيم يكون الكسر (x − 3) ÷ (x² + 16) غير معرّف؟"], [["No real values (∅)", "لا توجد قيم حقيقية (∅)"], ["{4}", "{4}"], ["{−4, 4}", "{−4, 4}"], ["{3}", "{3}"]],
            ["x² + 16 = 0 gives x² = −16, which has no real solution, so the fraction is defined for every real x.", "x² + 16 = 0 تعطي x² = −16 ولا حل حقيقي لها، إذن الكسر معرّف لكل x حقيقي."], ["x² + 16 is always at least 16: it can never be zero.", "x² + 16 لا يقل أبدًا عن ١٦، فلا يمكن أن يساوي صفرًا."]),
          Q(["The domain of f(x) = (x² − 25) ÷ (x − 5) is:", "مجال الدالة f(x) = (x² − 25) ÷ (x − 5) هو:"], [["R − {5}", "R − {5}"], ["R − {−5, 5}", "R − {−5, 5}"], ["R", "R"], ["R − {−5}", "R − {−5}"]],
            ["Only the denominator matters: x − 5 = 0 at x = 5, so D = R − {5}.", "المقام وحده هو المهم: x − 5 = 0 عند x = 5، إذن D = R − {5}."], ["−5 makes the top zero, which is fine: f(−5) = 0.", "−٥ تجعل البسط صفرًا وهذا مسموح: f(−5) = 0."]),
          Q(["Simplify f(x) = (x² + 2x − 15) ÷ (x² − 5x + 6) and give its domain.", "اختصر f(x) = (x² + 2x − 15) ÷ (x² − 5x + 6) واذكر مجالها."], [["(x + 5) ÷ (x − 2), D = R − {2, 3}", "(x + 5) ÷ (x − 2)، D = R − {2, 3}"], ["(x + 5) ÷ (x − 2), D = R − {2}", "(x + 5) ÷ (x − 2)، D = R − {2}"], ["(x − 3) ÷ (x − 2), D = R − {2, 3}", "(x − 3) ÷ (x − 2)، D = R − {2, 3}"], ["(x + 5) ÷ (x − 3), D = R − {3}", "(x + 5) ÷ (x − 3)، D = R − {3}"]],
            ["(x − 3)(x + 5) ÷ (x − 2)(x − 3): the domain is found before cancelling, R − {2, 3}; then f(x) = (x + 5) ÷ (x − 2).", "(x − 3)(x + 5) ÷ (x − 2)(x − 3): نوجد المجال قبل الاختصار R − {2, 3}، ثم f(x) = (x + 5) ÷ (x − 2)."], ["Cancelling hides the 3, but the hole is still there.", "الاختصار يخفي العدد ٣، لكن الثقب ما زال موجودًا."]),
          Q(["For the same f, f(1) =", "للدالة نفسها f(1) ="], [["−6", "−6"], ["6", "6"], ["undefined", "غير معرّفة"], ["−4", "−4"]],
            ["f(1) = (1 + 5) ÷ (1 − 2) = 6 ÷ (−1) = −6.", "f(1) = (1 + 5) ÷ (1 − 2) = 6 ÷ (−1) = −6."], ["1 is in the domain, so just substitute.", "العدد ١ ينتمي إلى المجال، فقط عوّض."]),
          Q(["The set of zeros of f(x) = (x² − 7x + 12) ÷ (x² − x − 6) is:", "مجموعة أصفار f(x) = (x² − 7x + 12) ÷ (x² − x − 6) هي:"], [["{4}", "{4}"], ["{3, 4}", "{3, 4}"], ["{3, −2}", "{3, −2}"], ["{−2}", "{−2}"]],
            ["Numerator (x − 3)(x − 4): {3, 4}. Denominator (x − 3)(x + 2): {3, −2}. Zeros = {3, 4} − {3, −2} = {4}.", "البسط (x − 3)(x − 4): {3, 4}، والمقام (x − 3)(x + 2): {3, −2}، الأصفار = {3, 4} − {3, −2} = {4}."], ["3 wanted to be a zero, but it is not even in the domain.", "أراد العدد ٣ أن يكون صفرًا، لكنه ليس في المجال أصلًا."]),
          Q(["Speed = (x² + 8x + 12) ÷ (x² − x − 6). In simplest form:", "السرعة = (x² + 8x + 12) ÷ (x² − x − 6). في أبسط صورة:"], [["(x + 6) ÷ (x − 3)", "(x + 6) ÷ (x − 3)"], ["(x + 2) ÷ (x − 3)", "(x + 2) ÷ (x − 3)"], ["(x + 6) ÷ (x + 2)", "(x + 6) ÷ (x + 2)"], ["(x + 4) ÷ (x − 1)", "(x + 4) ÷ (x − 1)"]],
            ["(x + 6)(x + 2) ÷ (x − 3)(x + 2) = (x + 6) ÷ (x − 3), with x ≠ 3, −2.", "(x + 6)(x + 2) ÷ (x − 3)(x + 2) = (x + 6) ÷ (x − 3) حيث x ≠ 3, −2."], ["Yassin cancelled the shared (x + 2) on the Galala Road.", "اختصر ياسين العامل المشترك (x + 2) على طريق الجلالة."])
        ]
      },
      {
        id: "mprep3u2l4", icon: "🏫", page: 33,
        title: { en: "Common Domain and Equivalent Rational Algebraic Functions", ar: "المجال المشترك وتساوي دالتين كسريتين" },
        idea: {
          official: {
            en: ["The common domain of two functions is the set where both are defined: " + eq("D₁ ∩ D₂ = R − (Z₁ ∪ Z₂)") + ", where Z₁, Z₂ are the zeros of the two denominators.",
              "Example: f has denominator " + eq("x² − x − 6 = (x − 3)(x + 2)") + ", g has " + eq("x² − 5x + 6 = (x − 2)(x − 3)") + ". Common domain = " + eq("R − {−2, 2, 3}") + ".",
              "A denominator like " + eq("x² + 4") + " has no real zeros, so it adds nothing to the excluded set.",
              "Two rational functions are equal (f = g) when BOTH: their domains are identical, AND their simplified rules are identical.",
              eq("(x² − 3x) ÷ (x² − 6x + 9) = x ÷ (x − 3)") + " and " + eq("4x ÷ (4x − 12) = x ÷ (x − 3)") + ", both with D = R − {3}: so f = g.",
              "But " + eq("(x² + 2x) ÷ (x² − 4)") + " (D = R − {−2, 2}) and " + eq("x ÷ (x − 2)") + " (D = R − {2}) are NOT equal: same rule, different domains. They agree only on the common domain."],
            ar: ["المجال المشترك لدالتين هو مجموعة القيم التي تكون الدالتان معرّفتين عندها معًا: " + eq("D₁ ∩ D₂ = R − (Z₁ ∪ Z₂)") + " حيث Z₁ وZ₂ أصفار المقامين.",
              "مثال: مقام f هو " + eq("x² − x − 6 = (x − 3)(x + 2)") + " ومقام g هو " + eq("x² − 5x + 6 = (x − 2)(x − 3)") + "، والمجال المشترك = " + eq("R − {−2, 2, 3}") + ".",
              "المقام مثل " + eq("x² + 4") + " ليس له أصفار حقيقية، فلا يضيف شيئًا إلى القيم المستبعدة.",
              "تتساوى دالتان كسريتان (f = g) إذا تحقق الشرطان معًا: تساوي المجالين، وتطابق القاعدتين بعد الاختصار.",
              eq("(x² − 3x) ÷ (x² − 6x + 9) = x ÷ (x − 3)") + " و" + eq("4x ÷ (4x − 12) = x ÷ (x − 3)") + " ومجال كل منهما R − {3}، إذن f = g.",
              "أما " + eq("(x² + 2x) ÷ (x² − 4)") + " (D = R − {−2, 2}) و" + eq("x ÷ (x − 2)") + " (D = R − {2}) فغير متساويتين: القاعدة واحدة والمجالان مختلفان، وتتطابقان فقط على المجال المشترك."]
          },
          story: {
            en: ["Mariam compares two school reports in Mansoura: the girls' school average age is one fraction, the boys' school another.",
              "\"Are the averages the same for all x?\" She factors both fractions.",
              "After cancelling, both rules become the same expression. Mariam almost says yes.",
              "Then she checks the domains: one school's fraction excludes a value the other allows.",
              "So they are equal only on the common domain, not for all x. Two conditions, always both!"],
            ar: ["تقارن مريم في المنصورة تقريرين: متوسط أعمار مدرسة البنات كسر، ومتوسط أعمار مدرسة البنين كسر آخر.",
              "«هل المتوسطان متساويان لكل قيم x؟» تحلل الكسرين.",
              "بعد الاختصار تصبح القاعدتان المقدار نفسه، فتكاد مريم تقول نعم.",
              "ثم تراجع المجالين: كسر إحدى المدرستين يستبعد قيمة يسمح بها الكسر الآخر.",
              "إذن هما متساويان على المجال المشترك فقط وليس لكل x. شرطان، وكلاهما مطلوب دائمًا!"]
          }
        },
        words: [
          ["Common domain", "المجال المشترك", "D₁ ∩ D₂ = R − (zeros of both denominators).", "D₁ ∩ D₂ = R − (أصفار المقامين معًا)."],
          ["Intersection ∩", "التقاطع ∩", "Elements that belong to both sets.", "العناصر المشتركة بين المجموعتين."],
          ["Union ∪", "الاتحاد ∪", "Elements in either set: Z₁ ∪ Z₂ collects all excluded values.", "العناصر الموجودة في أي من المجموعتين: Z₁ ∪ Z₂ تجمع كل القيم المستبعدة."],
          ["Equal functions", "تساوي دالتين", "f = g when D_f = D_g and f(x) = g(x) for every x in the domain.", "f = g إذا كان D_f = D_g وf(x) = g(x) لكل x في المجال."],
          ["Equivalent rules", "تطابق القاعدتين", "The two rules become identical after simplifying.", "تصبح القاعدتان متطابقتين بعد الاختصار."]
        ],
        lab: { parts: [{ type: "mprep3_common" }, {
          type: "sort",
          prompt: ["Tap a pair of functions, then decide: equal or not?", "اضغط على زوج الدوال ثم قرر: متساويتان أم لا؟"],
          bins: [["e", "🟰", "f = g", "f = g"], ["n", "≠", "f ≠ g", "f ≠ g"]],
          items: [["x ÷ (x − 3) and 4x ÷ (4x − 12)", "e"], ["(x² − 3x) ÷ (x² − 6x + 9) and x ÷ (x − 3)", "e"], ["(x² + 2x) ÷ (x² − 4) and x ÷ (x − 2)", "n"], ["(x² − 4) ÷ (x − 2) and x + 2", "n"], ["2 ÷ (x + 1) and 2x ÷ (x² + x)", "n"], ["(x + 1) ÷ (x + 1) and 1", "n"]]
        }] },
        quiz: [
          Q(["D_f = R − {1, 2} and D_g = R − {2, 3}. The common domain is:", "D_f = R − {1, 2} وD_g = R − {2, 3}. المجال المشترك هو:"], [["R − {1, 2, 3}", "R − {1, 2, 3}"], ["R − {2}", "R − {2}"], ["R − {1, 3}", "R − {1, 3}"], ["R − {1, 2}", "R − {1, 2}"]],
            ["Common domain = R − ({1, 2} ∪ {2, 3}) = R − {1, 2, 3}.", "المجال المشترك = R − ({1, 2} ∪ {2, 3}) = R − {1, 2, 3}."], ["Any value that breaks either function is removed.", "تُستبعد كل قيمة تفسد أيًا من الدالتين."]),
          Q(["f has denominator x² − x − 6 and g has x² − 5x + 6. The common domain is:", "مقام f هو x² − x − 6 ومقام g هو x² − 5x + 6. المجال المشترك هو:"], [["R − {−2, 2, 3}", "R − {−2, 2, 3}"], ["R − {3}", "R − {3}"], ["R − {−2, 3}", "R − {−2, 3}"], ["R − {2, 3, −3}", "R − {2, 3, −3}"]],
            ["(x − 3)(x + 2) gives {3, −2}; (x − 2)(x − 3) gives {2, 3}. Union {−2, 2, 3}.", "(x − 3)(x + 2) تعطي {3, −2} و(x − 2)(x − 3) تعطي {2, 3}، والاتحاد {−2, 2, 3}."], ["3 appears twice but is removed only once.", "العدد ٣ يظهر مرتين لكنه يُستبعد مرة واحدة."]),
          Q(["Common domain of f(x) = 3 ÷ (x² − 1), g(x) = x ÷ (x² + 4) and p(x) = 7 ÷ (2x + 3):", "المجال المشترك للدوال f(x) = 3 ÷ (x² − 1) وg(x) = x ÷ (x² + 4) وp(x) = 7 ÷ (2x + 3):"], [["R − {−3/2, −1, 1}", "R − {−3/2, −1, 1}"], ["R − {−1, 1}", "R − {−1, 1}"], ["R − {−2, 2, −3/2}", "R − {−2, 2, −3/2}"], ["R − {3/2, −1, 1}", "R − {3/2, −1, 1}"]],
            ["x² − 1 = 0 gives ±1; x² + 4 has no real zeros; 2x + 3 = 0 gives −3/2.", "x² − 1 = 0 تعطي ±1، وx² + 4 ليس لها أصفار حقيقية، و2x + 3 = 0 تعطي −3/2."], ["x² + 4 is the friendly denominator: it never becomes zero.", "المقام x² + 4 صديق لطيف: لا يصبح صفرًا أبدًا."]),
          Q(["Are f(x) = (x² − 3x) ÷ (x² − 6x + 9) and g(x) = 4x ÷ (4x − 12) equal?", "هل الدالتان f(x) = (x² − 3x) ÷ (x² − 6x + 9) وg(x) = 4x ÷ (4x − 12) متساويتان؟"], [["Yes: both are x ÷ (x − 3) with D = R − {3}", "نعم: كل منهما x ÷ (x − 3) ومجالها R − {3}"], ["No: the domains differ", "لا: المجالان مختلفان"], ["No: the rules differ", "لا: القاعدتان مختلفتان"], ["Only when x = 0", "فقط عندما x = 0"]],
            ["f = x(x − 3) ÷ (x − 3)², D = R − {3}, f(x) = x ÷ (x − 3); g = 4x ÷ 4(x − 3), D = R − {3}, g(x) = x ÷ (x − 3).", "f = x(x − 3) ÷ (x − 3)² ومجالها R − {3} وf(x) = x ÷ (x − 3)، وg = 4x ÷ 4(x − 3) ومجالها R − {3} وg(x) = x ÷ (x − 3)."], ["Same rule and same hole at 3: true twins.", "قاعدة واحدة وثقب واحد عند ٣: توأمان حقيقيان."]),
          Q(["Are f(x) = (x² + 2x) ÷ (x² − 4) and g(x) = x ÷ (x − 2) equal?", "هل f(x) = (x² + 2x) ÷ (x² − 4) وg(x) = x ÷ (x − 2) متساويتان؟"], [["No, the domains are different", "لا، المجالان مختلفان"], ["Yes, they are equal", "نعم، متساويتان"], ["No, the simplified rules differ", "لا، القاعدتان مختلفتان بعد الاختصار"], ["Yes, but only for x > 2", "نعم، لكن فقط عندما x > 2"]],
            ["D_f = R − {−2, 2} but D_g = R − {2}. The rules match, but the first condition fails.", "D_f = R − {−2, 2} أما D_g = R − {2}، القاعدتان متطابقتان لكن الشرط الأول لم يتحقق."], ["g gives 0.5 at x = −2 while f is undefined there.", "g تعطي ٠٫٥ عند x = −2 بينما f غير معرّفة هناك."]),
          Q(["Two rational functions are equal when:", "تتساوى دالتان كسريتان إذا:"], [["They have the same domain and the same simplified rule", "تساوى مجالاهما وتطابقت قاعدتاهما بعد الاختصار"], ["They have the same numerator", "تساوى بسطاهما"], ["Their denominators have the same zeros only", "تساوت أصفار مقاميهما فقط"], ["They have the same value at x = 0", "تساوت قيمتاهما عند x = 0"]],
            ["Both conditions are needed: D_f = D_g and f(x) = g(x) for every x in that domain.", "يلزم الشرطان معًا: D_f = D_g وf(x) = g(x) لكل x في هذا المجال."], ["Mariam's rule: check the rule AND the domain.", "قاعدة مريم: راجع القاعدة والمجال معًا."]),
          Q(["f(x) = (x² − 4) ÷ (x − 2) and g(x) = x + 2. Is f(2) = g(2)?", "f(x) = (x² − 4) ÷ (x − 2) وg(x) = x + 2. هل f(2) = g(2)؟"], [["No: f(2) is undefined and g(2) = 4", "لا: f(2) غير معرّفة وg(2) = 4"], ["Yes, both are 4", "نعم، كل منهما ٤"], ["Yes, both are 0", "نعم، كل منهما صفر"], ["No: g(2) is undefined", "لا: g(2) غير معرّفة"]],
            ["2 makes the denominator x − 2 zero, so 2 ∉ D_f. g is a polynomial, so g(2) = 4.", "العدد ٢ يجعل المقام x − 2 صفرًا، إذن 2 ∉ D_f، أما g فكثيرة حدود وg(2) = 4."], ["f has a hole exactly where g has the point (2, 4).", "لـ f ثقب في المكان الذي تقع فيه نقطة g (2, 4)."])
        ]
      },
      {
        id: "mprep3u2l5", icon: "🎓", page: 38,
        title: { en: "Operations on Rational Algebraic Fractions", ar: "العمليات على الكسور الجبرية" },
        idea: {
          official: {
            en: ["Adding or subtracting: factor each fraction, find the domain, simplify each fraction, use a common denominator, then simplify the result.",
              "Example: " + eq("(x² − 4) ÷ (x² − x − 6) + (x² − 5x + 4) ÷ (x² − 4x + 3)") + ", D = R − {3, −2, 1}: " + eq("(x − 2)/(x − 3) + (x − 4)/(x − 3) = (2x − 6)/(x − 3) = 2") + ".",
              "Multiplying: factor completely, cancel common factors (also across the fractions), multiply. The domain excludes the zeros of both denominators.",
              "Reciprocal: if " + eq("f(x) = (x − 2) ÷ (x + 3)") + " then " + eq("f⁻¹ = (x + 3) ÷ (x − 2)") + ", domain R − {−3, 2}: zeros of the numerator AND the denominator are removed.",
              "Dividing: multiply by the reciprocal of the divisor. Remove the zeros of both denominators and of the divisor's numerator.",
              "Watch the sign: " + eq("(x − 1) ÷ (1 − x) = −1") + " because " + eq("1 − x = −(x − 1)") + ". The additive inverse of " + eq("p/q") + " is " + eq("−p/q") + "."],
            ar: ["الجمع والطرح: نحلل كل كسر، ونوجد المجال، ونختصر كل كسر، ونوحّد المقامات، ثم نضع الناتج في أبسط صورة.",
              "مثال: " + eq("(x² − 4) ÷ (x² − x − 6) + (x² − 5x + 4) ÷ (x² − 4x + 3)") + " ومجالها R − {3, −2, 1}: " + eq("(x − 2)/(x − 3) + (x − 4)/(x − 3) = (2x − 6)/(x − 3) = 2") + ".",
              "الضرب: نحلل تحليلًا كاملًا، ونختصر العوامل المشتركة (حتى بين الكسرين)، ثم نضرب. المجال يستبعد أصفار المقامين.",
              "المعكوس الضربي: إذا كانت " + eq("f(x) = (x − 2) ÷ (x + 3)") + " فإن " + eq("f⁻¹ = (x + 3) ÷ (x − 2)") + " ومجالها R − {−3, 2}: نستبعد أصفار البسط والمقام معًا.",
              "القسمة: نضرب في المعكوس الضربي للمقسوم عليه، ونستبعد أصفار المقامين وأصفار بسط المقسوم عليه.",
              "انتبه للإشارة: " + eq("(x − 1) ÷ (1 − x) = −1") + " لأن " + eq("1 − x = −(x − 1)") + "، والمعكوس الجمعي للكسر " + eq("p/q") + " هو " + eq("−p/q") + "."]
          },
          story: {
            en: ["Khaled needs a total of at least 8 for an excellent grade in his final university year.",
              "His two exam scores are " + eq("(3x² + 16x + 21) ÷ (x² + 5x + 6)") + " and " + eq("(5x² + 34x + 45) ÷ (x² + 7x + 10)") + ".",
              "He factors: " + eq("(3x + 7)(x + 3) ÷ (x + 2)(x + 3) = (3x + 7)/(x + 2)") + " and " + eq("(5x + 9)(x + 5) ÷ (x + 2)(x + 5) = (5x + 9)/(x + 2)") + ".",
              "Same denominator, so he adds the numerators: " + eq("(8x + 16)/(x + 2) = 8(x + 2)/(x + 2) = 8") + ".",
              "The total is exactly 8 whatever x is (in the domain): Khaled gets his excellent grade!"],
            ar: ["يحتاج خالد إلى مجموع لا يقل عن ٨ ليحصل على تقدير ممتاز في السنة النهائية بالجامعة.",
              "درجتا امتحانيه " + eq("(3x² + 16x + 21) ÷ (x² + 5x + 6)") + " و" + eq("(5x² + 34x + 45) ÷ (x² + 7x + 10)") + ".",
              "يحلل: " + eq("(3x + 7)(x + 3) ÷ (x + 2)(x + 3) = (3x + 7)/(x + 2)") + " و" + eq("(5x + 9)(x + 5) ÷ (x + 2)(x + 5) = (5x + 9)/(x + 2)") + ".",
              "المقام واحد، فيجمع البسطين: " + eq("(8x + 16)/(x + 2) = 8(x + 2)/(x + 2) = 8") + ".",
              "المجموع ٨ تمامًا أيًا كانت قيمة x في المجال: يحصل خالد على تقدير ممتاز!"]
          }
        },
        words: [
          ["Common denominator", "المقام المشترك", "One denominator for both fractions before adding or subtracting.", "مقام واحد للكسرين قبل الجمع أو الطرح."],
          ["Additive inverse", "المعكوس الجمعي", "−p/q, which adds to p/q to give 0.", "−p/q، ومجموعه مع p/q يساوي صفرًا."],
          ["Multiplicative inverse (reciprocal)", "المعكوس الضربي", "q/p for p/q, defined when p ≠ 0 and q ≠ 0.", "q/p للكسر p/q، ويكون معرّفًا عندما p ≠ 0 وq ≠ 0."],
          ["Cancel", "الاختصار", "Divide the numerator and the denominator by the same factor.", "قسمة البسط والمقام على العامل نفسه."],
          ["Domain of a quotient", "مجال خارج القسمة", "R minus the zeros of both denominators and of the divisor's numerator.", "R ما عدا أصفار المقامين وأصفار بسط المقسوم عليه."]
        ],
        lab: { parts: [{ type: "mprep3_fracops" }, {
          type: "sort",
          prompt: ["Tap a fraction, then tap its value.", "اضغط على الكسر ثم اضغط على قيمته."],
          bins: [["p", "➕", "= 1", "= 1"], ["m", "➖", "= −1", "= −1"]],
          items: [["(x + 3) ÷ (3 + x)", "p"], ["(x² − 4) ÷ ((x − 2)(x + 2))", "p"], ["((x + 1)(x − 1)) ÷ (x² − 1)", "p"], ["(x − 1) ÷ (1 − x)", "m"], ["(2 − x) ÷ (x − 2)", "m"], ["(−x − 5) ÷ (x + 5)", "m"]]
        }] },
        quiz: [
          Q(["Simplify (x² − 4) ÷ (x² − x − 6) + (x² − 5x + 4) ÷ (x² − 4x + 3).", "اختصر (x² − 4) ÷ (x² − x − 6) + (x² − 5x + 4) ÷ (x² − 4x + 3)."], [["2", "2"], ["1", "1"], ["2x − 6", "2x − 6"], ["(x − 6) ÷ (x − 3)", "(x − 6) ÷ (x − 3)"]],
            ["(x − 2)/(x − 3) + (x − 4)/(x − 3) = (2x − 6)/(x − 3) = 2(x − 3)/(x − 3) = 2.", "(x − 2)/(x − 3) + (x − 4)/(x − 3) = (2x − 6)/(x − 3) = 2(x − 3)/(x − 3) = 2."], ["After all the cancelling, only the number 2 is left standing.", "بعد كل الاختصارات لا يبقى إلا العدد ٢."]),
          Q(["The domain of that sum is:", "مجال دالة المجموع السابقة هو:"], [["R − {−2, 1, 3}", "R − {−2, 1, 3}"], ["R − {3}", "R − {3}"], ["R − {−2, 3}", "R − {−2, 3}"], ["R", "R"]],
            ["Denominators (x − 3)(x + 2) and (x − 1)(x − 3): remove {3, −2, 1}, found before simplifying.", "المقامان (x − 3)(x + 2) و(x − 1)(x − 3): نستبعد {3, −2, 1} ونوجدها قبل الاختصار."], ["The answer 2 still remembers the three holes.", "الناتج ٢ ما زال يتذكر الثقوب الثلاثة."]),
          Q(["The additive inverse of (x − 1) ÷ (x + 2) is:", "المعكوس الجمعي للكسر (x − 1) ÷ (x + 2) هو:"], [["(1 − x) ÷ (x + 2)", "(1 − x) ÷ (x + 2)"], ["(x + 2) ÷ (x − 1)", "(x + 2) ÷ (x − 1)"], ["(x + 1) ÷ (x + 2)", "(x + 1) ÷ (x + 2)"], ["(x − 1) ÷ (x − 2)", "(x − 1) ÷ (x − 2)"]],
            ["−(x − 1)/(x + 2) = (1 − x)/(x + 2); their sum is 0.", "−(x − 1)/(x + 2) = (1 − x)/(x + 2) ومجموعهما صفر."], ["The flipped fraction is the multiplicative inverse, not the additive one.", "الكسر المقلوب هو المعكوس الضربي وليس الجمعي."]),
          Q(["f(x) = (x − 2) ÷ (x + 3). Its reciprocal and domain:", "f(x) = (x − 2) ÷ (x + 3). معكوسها الضربي ومجاله:"], [["(x + 3) ÷ (x − 2), D = R − {−3, 2}", "(x + 3) ÷ (x − 2)، D = R − {−3, 2}"], ["(x + 3) ÷ (x − 2), D = R − {2}", "(x + 3) ÷ (x − 2)، D = R − {2}"], ["(x + 3) ÷ (x − 2), D = R − {−3}", "(x + 3) ÷ (x − 2)، D = R − {−3}"], ["(x − 2) ÷ (x + 3), D = R − {2}", "(x − 2) ÷ (x + 3)، D = R − {2}"]],
            ["Flip the fraction; remove zeros of the old denominator (−3) and of the old numerator (2).", "نقلب الكسر، ونستبعد صفر المقام القديم (−3) وصفر البسط القديم (2)."], ["−3 was already forbidden, and now 2 sits in the denominator too.", "−٣ كان ممنوعًا من قبل، والآن صار ٢ في المقام أيضًا."]),
          Q(["Simplify (x² + 2x + 1) ÷ (1 − x²) ÷ [(x² + 5x + 4) ÷ (x² + 3x − 4)].", "اختصر (x² + 2x + 1) ÷ (1 − x²) ÷ [(x² + 5x + 4) ÷ (x² + 3x − 4)]."], [["−1", "−1"], ["1", "1"], ["x − 1", "x − 1"], ["(x + 1) ÷ (x − 1)", "(x + 1) ÷ (x − 1)"]],
            ["(x + 1)² / (1 − x)(1 + x) × (x − 1)(x + 4) / (x + 1)(x + 4) = (x − 1)/(1 − x) = −1.", "(x + 1)² / (1 − x)(1 + x) × (x − 1)(x + 4) / (x + 1)(x + 4) = (x − 1)/(1 − x) = −1."], ["x − 1 and 1 − x are mirror twins: their ratio is −1.", "x − 1 و1 − x توأمان متعاكسان: النسبة بينهما −1."]),
          Q(["Simplify (x² − 4) ÷ (x² + x − 6) × (x + 3) ÷ (x + 2).", "اختصر (x² − 4) ÷ (x² + x − 6) × (x + 3) ÷ (x + 2)."], [["1", "1"], ["(x + 2) ÷ (x − 2)", "(x + 2) ÷ (x − 2)"], ["x + 3", "x + 3"], ["0", "0"]],
            ["(x − 2)(x + 2)/(x + 3)(x − 2) × (x + 3)/(x + 2) = 1, with D = R − {−3, 2, −2}.", "(x − 2)(x + 2)/(x + 3)(x − 2) × (x + 3)/(x + 2) = 1 ومجالها R − {−3, 2, −2}."], ["Every factor on top meets its partner below and they cancel.", "كل عامل في البسط يقابل شريكه في المقام فيختصران."]),
          Q(["Khaled's scores (3x² + 16x + 21) ÷ (x² + 5x + 6) + (5x² + 34x + 45) ÷ (x² + 7x + 10) total:", "مجموع درجتي خالد (3x² + 16x + 21) ÷ (x² + 5x + 6) + (5x² + 34x + 45) ÷ (x² + 7x + 10):"], [["8, so he gets excellent", "8، إذن يحصل على ممتاز"], ["7, so he does not", "7، إذن لا يحصل عليه"], ["8x", "8x"], ["(8x + 16) ÷ (x + 5)", "(8x + 16) ÷ (x + 5)"]],
            ["(3x + 7)/(x + 2) + (5x + 9)/(x + 2) = (8x + 16)/(x + 2) = 8.", "(3x + 7)/(x + 2) + (5x + 9)/(x + 2) = (8x + 16)/(x + 2) = 8."], ["Khaled's total is exactly 8 for every x in the domain.", "مجموع خالد ٨ تمامًا لكل x في المجال."])
        ]
      }
    ]
  });

  E.MTHG.prep3 = { units: U, book: { en: "Mathematics, Prep 3, Term 1 (2026-2027)", ar: "الرياضيات، الصف الثالث الإعدادي، الفصل الدراسي الأول (٢٠٢٦-٢٠٢٧)" } };
})();
/* ---------- Prep 3 maths data (part B): Unit 3 Geometry, Unit 4 Statistics ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  var U = E.MTHG.prep3.units;

  /* ======================= UNIT 3 - GEOMETRY ======================= */
  U.push({
    id: "mprep3u3", num: 3, icon: "📐", color: "orange",
    title: { en: "Geometry", ar: "الهندسة" },
    lessons: [
      {
        id: "mprep3u3l1", icon: "🗿", page: 48,
        title: { en: "Similarity of Polygons", ar: "تشابه المضلعات" },
        idea: {
          official: {
            en: ["Two polygons are similar when BOTH: their corresponding angles are equal in measure, AND their corresponding side lengths are proportional.",
              "We write " + eq("ABCD ~ EFGH") + " with the vertices in matching order, and " + eq("AB/EF = BC/FG = CD/GH = DA/HE = k") + ", the similarity ratio.",
              "Example: if ABCD ~ EFGH, ∠A = 90°, ∠B = 120°, ∠G = 45°, then " + eq("∠D = 360° − (90° + 120° + 45°) = 105°") + ".",
              "Special cases: all squares are similar; regular polygons with the same number of sides are similar; two rectangles are similar if their dimensions are proportional; two rhombuses if one pair of angles is equal.",
              "Perimeters: " + eq("perimeter ABCD ÷ perimeter EFGH = k") + ". With k = 3/2 and " + eq("(2x + 1)/(x + 2) = 3/2") + ": 4x + 2 = 3x + 6, so x = 4."],
            ar: ["يتشابه مضلعان إذا تحقق الشرطان معًا: الزوايا المتناظرة متساوية في القياس، وأطوال الأضلاع المتناظرة متناسبة.",
              "نكتب " + eq("ABCD ~ EFGH") + " بترتيب الرؤوس المتناظرة، و" + eq("AB/EF = BC/FG = CD/GH = DA/HE = k") + " وهي نسبة التشابه.",
              "مثال: إذا كان ABCD ~ EFGH و∠A = 90° و∠B = 120° و∠G = 45° فإن " + eq("∠D = 360° − (90° + 120° + 45°) = 105°") + ".",
              "حالات خاصة: كل المربعات متشابهة، والمضلعات المنتظمة المتساوية في عدد الأضلاع متشابهة، ويتشابه المستطيلان إذا تناسبت أبعادهما، ويتشابه المعينان إذا تساوت زاويتان متناظرتان.",
              "المحيطات: " + eq("محيط ABCD ÷ محيط EFGH = k") + ". إذا كانت k = 3/2 و" + eq("(2x + 1)/(x + 2) = 3/2") + " فإن 4x + 2 = 3x + 6 ومنها x = 4."]
          },
          story: {
            en: ["In Luxor, Adam's uncle carves souvenir models of the statue of King Thutmose III.",
              "The real statue is 195 cm tall and 58 cm wide. The model must be 5 cm wide.",
              "For the model to look exactly right, it must be similar: every length shrinks by the same ratio.",
              "Ratio: 58 ÷ 5 = 11.6, so the height is " + eq("195 ÷ 11.6 ≈ 16.8 cm") + ".",
              "If his uncle made it taller or thinner, the angles of the face would stay but the proportions would break: not similar!"],
            ar: ["في الأقصر ينحت عم آدم نماذج تذكارية لتمثال الملك تحتمس الثالث.",
              "ارتفاع التمثال الحقيقي ١٩٥ سم وعرضه ٥٨ سم، والنموذج يجب أن يكون عرضه ٥ سم.",
              "ليبدو النموذج مطابقًا يجب أن يكون مشابهًا: كل طول يصغر بالنسبة نفسها.",
              "النسبة: ٥٨ ÷ ٥ = ١١٫٦، إذن الارتفاع " + eq("195 ÷ 11.6 ≈ 16.8 cm") + ".",
              "لو جعله عمه أطول أو أنحف لبقيت الزوايا لكن تفسد النسب: لا تشابه!"]
          }
        },
        words: [
          ["Similar polygons", "المضلعات المتشابهة", "Equal corresponding angles and proportional corresponding sides.", "زواياها المتناظرة متساوية وأضلاعها المتناظرة متناسبة."],
          ["Similarity ratio", "نسبة التشابه", "k = a side in the first polygon ÷ its corresponding side in the second.", "k = طول ضلع في المضلع الأول ÷ طول الضلع المناظر في الثاني."],
          ["Corresponding", "متناظر", "In the same position in both shapes, matched by the order of the letters.", "في الموضع نفسه في الشكلين، ويحدده ترتيب الحروف."],
          ["The symbol ~", "الرمز ~", "Means \"is similar to\".", "يعني «يشابه»."],
          ["Perimeter ratio", "نسبة المحيطين", "Equals the similarity ratio k.", "تساوي نسبة التشابه k."]
        ],
        lab: { parts: [{ type: "mprep3_similar" }, {
          type: "sort",
          prompt: ["Tap a pair of shapes, then tap its group.", "اضغط على زوج الأشكال ثم اضغط على مجموعته."],
          bins: [["a", "✅", "Always similar", "متشابهان دائمًا"], ["n", "❓", "Not always similar", "ليسا متشابهين دائمًا"]],
          items: [[["Two squares", "مربعان"], "a"], [["Two equilateral triangles", "مثلثان متساويا الأضلاع"], "a"], [["Two regular hexagons", "سداسيان منتظمان"], "a"], [["Two rectangles", "مستطيلان"], "n"], [["Two rhombuses", "معينان"], "n"], [["Two parallelograms", "متوازيا أضلاع"], "n"]]
        }] },
        quiz: [
          Q(["Two polygons are similar if:", "يتشابه مضلعان إذا:"], [["Corresponding angles are equal and corresponding sides are proportional", "تساوت الزوايا المتناظرة وتناسبت الأضلاع المتناظرة"], ["Corresponding angles are equal only", "تساوت الزوايا المتناظرة فقط"], ["Corresponding sides are equal", "تساوت الأضلاع المتناظرة"], ["They have the same perimeter", "تساوى محيطاهما"]],
            ["Both conditions must hold together (a rectangle and a square have equal angles but are not similar).", "يجب تحقق الشرطين معًا (المستطيل والمربع زواياهما متساوية لكنهما غير متشابهين)."], ["Same angles AND same shape-stretch everywhere.", "زوايا متساوية وتكبير متساو في كل الاتجاهات."]),
          Q(["ABCD ~ EFGH, m∠A = 90°, m∠B = 120°, m∠G = 45°. Find m∠D.", "ABCD ~ EFGH وm∠A = 90° وm∠B = 120° وm∠G = 45°. أوجد m∠D."], [["105°", "105°"], ["90°", "90°"], ["135°", "135°"], ["45°", "45°"]],
            ["m∠C = m∠G = 45°, so m∠D = 360° − (90° + 120° + 45°) = 105°.", "m∠C = m∠G = 45° إذن m∠D = 360° − (90° + 120° + 45°) = 105°."], ["The four angles of a quadrilateral share 360°.", "زوايا الشكل الرباعي الأربع مجموعها ٣٦٠°."]),
          Q(["ABCD ~ EFGH with similarity ratio 3/2. If AB = 15 cm, then EF =", "ABCD ~ EFGH ونسبة التشابه 3/2. إذا كان AB = 15 سم فإن EF ="], [["10 cm", "10 سم"], ["22.5 cm", "22.5 سم"], ["30 cm", "30 سم"], ["7.5 cm", "7.5 سم"]],
            ["AB/EF = 3/2, so EF = 15 × 2 ÷ 3 = 10 cm.", "AB/EF = 3/2 إذن EF = 15 × 2 ÷ 3 = 10 سم."], ["The second polygon is the smaller one: 15 shrinks to 10.", "المضلع الثاني هو الأصغر: ١٥ تصغر إلى ١٠."]),
          Q(["A statue is 195 cm tall and 58 cm wide. A similar model is 5 cm wide. Its height is about:", "تمثال ارتفاعه ١٩٥ سم وعرضه ٥٨ سم، ونموذج مشابه له عرضه ٥ سم. ارتفاعه تقريبًا:"], [["16.8 cm", "16.8 سم"], ["1.5 cm", "1.5 سم"], ["39 cm", "39 سم"], ["23.4 cm", "23.4 سم"]],
            ["Height ÷ 195 = 5 ÷ 58, so height = 195 × 5 ÷ 58 ≈ 16.8 cm.", "الارتفاع ÷ 195 = 5 ÷ 58 إذن الارتفاع = 195 × 5 ÷ 58 ≈ 16.8 سم."], ["Adam's uncle shrinks every length by the same ratio 11.6.", "يصغّر عم آدم كل الأطوال بالنسبة نفسها ١١٫٦."]),
          Q(["Two similar polygons have ratio 3/2. The smaller has perimeter 30 cm. The larger's perimeter is:", "مضلعان متشابهان نسبة تشابههما 3/2، ومحيط الأصغر ٣٠ سم. محيط الأكبر:"], [["45 cm", "45 سم"], ["20 cm", "20 سم"], ["67.5 cm", "67.5 سم"], ["33 cm", "33 سم"]],
            ["Perimeter ratio = similarity ratio: P ÷ 30 = 3/2, so P = 45 cm.", "نسبة المحيطين = نسبة التشابه: P ÷ 30 = 3/2 إذن P = 45 سم."], ["Every side grows by 3/2, so their total grows by 3/2 too.", "كل ضلع يكبر بنسبة 3/2، فيكبر مجموعها بالنسبة نفسها."]),
          Q(["Which pair is ALWAYS similar?", "أي زوج من الأشكال متشابه دائمًا؟"], [["Any two squares", "أي مربعين"], ["Any two rectangles", "أي مستطيلين"], ["Any two rhombuses", "أي معينين"], ["Any two parallelograms", "أي متوازيي أضلاع"]],
            ["All squares have 90° angles and four equal sides, so their sides are always proportional.", "كل المربعات زواياها 90° وأضلاعها الأربعة متساوية، فأضلاعها متناسبة دائمًا."], ["A square can only grow or shrink; it cannot get thinner.", "المربع يكبر أو يصغر فقط، ولا يمكن أن يصبح أنحف."]),
          Q(["Corresponding sides satisfy (2x + 1) ÷ (x + 2) = 3/2. Find x.", "ضلعان متناظران يحققان (2x + 1) ÷ (x + 2) = 3/2. أوجد x."], [["4", "4"], ["2", "2"], ["5", "5"], ["1", "1"]],
            ["Cross-multiply: 2(2x + 1) = 3(x + 2), 4x + 2 = 3x + 6, x = 4.", "بالضرب التبادلي: 2(2x + 1) = 3(x + 2) أي 4x + 2 = 3x + 6 ومنها x = 4."], ["Check: 9 ÷ 6 = 3/2 ✓.", "تحقق: ٩ ÷ ٦ = 3/2 ✓."])
        ]
      },
      {
        id: "mprep3u3l2", icon: "🌴", page: 55,
        title: { en: "Similarity of Triangles", ar: "تشابه المثلثات" },
        idea: {
          official: {
            en: ["Case 1 (AA): if two angles of one triangle are congruent to two angles of another, the triangles are similar.",
              "Case 2 (SSS): if the three pairs of corresponding sides are proportional, " + eq("AB/DE = BC/EF = AC/DF") + ", the triangles are similar.",
              "Case 3 (SAS): if one angle is congruent and the sides containing it are proportional, the triangles are similar.",
              "Example: AB ∥ DC cut by AC and BD at E: alternate angles give " + eq("△ABE ~ △CDE") + ". With AB = 6, AE = 7.5, DC = 4: " + eq("CE = 4 × 7.5 ÷ 6 = 5") + " cm.",
              "In a right triangle, the altitude to the hypotenuse makes two triangles similar to each other and to the whole, so " + eq("AD² = BD × DC") + "."],
            ar: ["الحالة الأولى (زاويتان): إذا طابقت زاويتان في مثلث زاويتين في مثلث آخر تشابه المثلثان.",
              "الحالة الثانية (ثلاثة أضلاع): إذا تناسبت أطوال الأضلاع المتناظرة الثلاثة " + eq("AB/DE = BC/EF = AC/DF") + " تشابه المثلثان.",
              "الحالة الثالثة (ضلعان وزاوية محصورة): إذا طابقت زاوية زاوية وتناسبت أطوال الأضلاع التي تحتويها تشابه المثلثان.",
              "مثال: AB ∥ DC ويقطعهما AC وBD في E: الزوايا المتبادلة تعطي " + eq("△ABE ~ △CDE") + "، وإذا كان AB = 6 وAE = 7.5 وDC = 4 فإن " + eq("CE = 4 × 7.5 ÷ 6 = 5") + " سم.",
              "في المثلث القائم يقسم العمود المرسوم على الوتر المثلث إلى مثلثين متشابهين ويشابه كل منهما المثلث الأصلي، لذلك " + eq("AD² = BD × DC") + "."]
          },
          story: {
            en: ["Like the ancient Egyptians, Habiba wants the height of her school flagpole without climbing it.",
              "She stands in the sun: she is 1.6 m tall and her shadow is 1.5 m. The flagpole's shadow is 2.4 m.",
              "The sun's rays hit the ground at the same angle, and both she and the pole stand at 90°: two angles, so the triangles are similar (AA).",
              "Height ÷ shadow is the same: " + eq("h ÷ 2.4 = 1.6 ÷ 1.5") + ".",
              "So " + eq("h = 2.4 × 1.6 ÷ 1.5 = 2.56") + " m. Her shadow measured the flagpole!"],
            ar: ["مثل المصريين القدماء تريد حبيبة معرفة ارتفاع سارية علم المدرسة دون تسلقها.",
              "تقف في الشمس: طولها ١٫٦ م وطول ظلها ١٫٥ م، وطول ظل السارية ٢٫٤ م.",
              "أشعة الشمس تسقط على الأرض بالزاوية نفسها، وهي والسارية رأسيتان بزاوية قائمة: زاويتان، إذن المثلثان متشابهان.",
              "النسبة بين الطول والظل واحدة: " + eq("h ÷ 2.4 = 1.6 ÷ 1.5") + ".",
              "إذن " + eq("h = 2.4 × 1.6 ÷ 1.5 = 2.56") + " م. ظلها قاس السارية!"]
          }
        },
        words: [
          ["Similar triangles", "المثلثات المتشابهة", "Equal corresponding angles and proportional corresponding sides.", "زواياها المتناظرة متساوية وأضلاعها المتناظرة متناسبة."],
          ["AA case", "حالة الزاويتين", "Two pairs of congruent angles are enough.", "يكفي تطابق زاويتين مع زاويتين."],
          ["SSS case", "حالة الأضلاع الثلاثة", "Three pairs of proportional sides.", "تناسب أطوال الأضلاع المتناظرة الثلاثة."],
          ["SAS case", "حالة ضلعين وزاوية محصورة", "One congruent angle between two proportional sides.", "زاوية متطابقة محصورة بين ضلعين متناسبين."],
          ["Alternate angles", "الزوايا المتبادلة", "Equal angles made by a transversal cutting two parallel lines.", "زوايا متساوية تنتج عن قاطع لمستقيمين متوازيين."]
        ],
        lab: { parts: [{ type: "mprep3_simtri" }, {
          type: "sort",
          prompt: ["Tap a clue, then tap the similarity case it shows.", "اضغط على الدليل ثم اضغط على حالة التشابه."],
          bins: [["aa", "📐", "AA", "زاويتان"], ["sss", "📏", "SSS", "ثلاثة أضلاع"], ["sas", "📎", "SAS", "ضلعان وزاوية محصورة"]],
          items: [[["Two pairs of equal angles", "زاويتان متساويتان مع زاويتين"], "aa"], [["A line parallel to one side cuts the triangle", "مستقيم يوازي أحد الأضلاع يقطع المثلث"], "aa"], [["Sun rays at the same angle, both objects vertical", "أشعة الشمس بالزاوية نفسها والجسمان رأسيان"], "aa"], [["3/6 = 4/8 = 5/10", "3/6 = 4/8 = 5/10"], "sss"], [["Sides 2, 3, 4 and 4, 6, 8", "أضلاع 2, 3, 4 و4, 6, 8"], "sss"], [["Equal angle between sides 4, 6 and 6, 9", "زاوية متساوية بين ضلعين 4, 6 و6, 9"], "sas"]]
        }] },
        quiz: [
          Q(["A student 1.6 m tall casts a 1.5 m shadow. A flagpole's shadow is 2.4 m. The flagpole's height is:", "طالبة طولها ١٫٦ م وطول ظلها ١٫٥ م، وطول ظل سارية ٢٫٤ م. ارتفاع السارية:"], [["2.56 m", "2.56 م"], ["2.25 m", "2.25 م"], ["3.84 m", "3.84 م"], ["1.6 m", "1.6 م"]],
            ["The triangles are similar (AA): h ÷ 2.4 = 1.6 ÷ 1.5, h = 2.56 m.", "المثلثان متشابهان (زاويتان): h ÷ 2.4 = 1.6 ÷ 1.5 إذن h = 2.56 م."], ["Habiba's shadow is a little shorter than her height, so the pole is a little taller than its shadow.", "ظل حبيبة أقصر قليلًا من طولها، إذن السارية أطول قليلًا من ظلها."]),
          Q(["Which of these is NOT a case of triangle similarity?", "أي مما يلي ليس حالة من حالات تشابه المثلثين؟"], [["Two proportional sides and a non-included angle", "ضلعان متناسبان وزاوية غير محصورة"], ["Two congruent angles (AA)", "زاويتان متطابقتان"], ["Three proportional sides (SSS)", "ثلاثة أضلاع متناسبة"], ["Included angle with proportional sides (SAS)", "زاوية محصورة بين ضلعين متناسبين"]],
            ["The angle must be between the two proportional sides (SAS). A non-included angle does not prove similarity.", "يجب أن تكون الزاوية محصورة بين الضلعين المتناسبين، والزاوية غير المحصورة لا تثبت التشابه."], ["The angle has to be the hinge between the two sides.", "يجب أن تكون الزاوية هي المفصل بين الضلعين."]),
          Q(["AB ∥ DC, AC ∩ BD = {E}, AB = 6, AE = 7.5, DC = 4. Find CE.", "AB ∥ DC وAC ∩ BD = {E} وAB = 6 وAE = 7.5 وDC = 4. أوجد CE."], [["5 cm", "5 سم"], ["3.2 cm", "3.2 سم"], ["11.25 cm", "11.25 سم"], ["4.5 cm", "4.5 سم"]],
            ["△ABE ~ △CDE (alternate angles): AB/CD = AE/CE, 6/4 = 7.5/CE, CE = 5.", "△ABE ~ △CDE (زوايا متبادلة): AB/CD = AE/CE أي 6/4 = 7.5/CE ومنها CE = 5."], ["The small triangle is the big one shrunk by 4/6.", "المثلث الصغير هو الكبير مصغرًا بنسبة 4/6."]),
          Q(["In right triangle ABC (right angle at A), AD ⊥ BC, BD = 4 cm, DC = 9 cm. Find AD.", "في المثلث ABC القائم في A، AD ⊥ BC وBD = 4 سم وDC = 9 سم. أوجد AD."], [["6 cm", "6 سم"], ["13 cm", "13 سم"], ["36 cm", "36 سم"], ["6.5 cm", "6.5 سم"]],
            ["AD² = BD × DC = 4 × 9 = 36, AD = 6 cm.", "AD² = BD × DC = 4 × 9 = 36 إذن AD = 6 سم."], ["The altitude is the geometric mean of the two pieces of the hypotenuse.", "العمود وسط هندسي بين جزأي الوتر."]),
          Q(["Triangles with sides 3, 4, 5 and 6, 8, 10 are:", "المثلثان اللذان أطوال أضلاعهما 3, 4, 5 و6, 8, 10:"], [["Similar (SSS), ratio 1 : 2", "متشابهان (ثلاثة أضلاع) بنسبة 1 : 2"], ["Not similar", "غير متشابهين"], ["Similar (AA), ratio 1 : 3", "متشابهان (زاويتان) بنسبة 1 : 3"], ["Congruent", "متطابقان"]],
            ["3/6 = 4/8 = 5/10 = 1/2, so they are similar by SSS.", "3/6 = 4/8 = 5/10 = 1/2، إذن متشابهان بحالة الأضلاع الثلاثة."], ["Every side doubles, so the shape stays the same.", "كل ضلع يتضاعف فيبقى الشكل كما هو."]),
          Q(["In △ABC and △DEC, m∠ACB = m∠DCE, AC = 18, BC = 15, DC = 6, EC = 5, DE = 5. Find AB.", "في △ABC و△DEC، m∠ACB = m∠DCE وAC = 18 وBC = 15 وDC = 6 وEC = 5 وDE = 5. أوجد AB."], [["15 cm", "15 سم"], ["10 cm", "10 سم"], ["25 cm", "25 سم"], ["5/3 cm", "5/3 سم"]],
            ["AC/DC = 18/6 = 3 and BC/EC = 15/5 = 3 with the included angle equal: SAS, ratio 3, so AB = 3 × 5 = 15 cm.", "AC/DC = 18/6 = 3 وBC/EC = 15/5 = 3 والزاوية المحصورة متساوية: التشابه بنسبة ٣، إذن AB = 3 × 5 = 15 سم."], ["The big triangle is three times the small one.", "المثلث الكبير ثلاثة أمثال الصغير."])
        ]
      },
      {
        id: "mprep3u3l3", icon: "🐰", page: 62,
        title: { en: "Dilation", ar: "التمدد" },
        idea: {
          official: {
            en: ["A dilation is a transformation that enlarges or reduces a figure by a ratio k, the dilation factor. The figure and its image are similar, and each side of the image is parallel to its corresponding side.",
              "Dilation with centre C and factor k > 0: C maps to itself, and every other point P maps to P′ on ray CP with " + eq("CP′ = k × CP") + ".",
              "If k > 1 it is an enlargement; if 0 < k < 1 it is a reduction. " + eq("k = image side ÷ original side = CP′ ÷ CP") + ".",
              "In the coordinate plane, with centre O(0, 0): " + eq("(x, y) → (kx, ky)") + ". With k = 2: A(1, 3) → A′(2, 6), B(2, −1) → B′(4, −2), C(5, 0) → C′(10, 0).",
              "With k = 1/3: A(−3, 6) → A′(−1, 2) and D(−3, −3) → D′(−1, −1): a reduction."],
            ar: ["التمدد تحويل هندسي يكبّر الشكل أو يصغّره بنسبة k تسمى معامل التمدد، والشكل وصورته متشابهان، وكل ضلع في الصورة يوازي الضلع المناظر له.",
              "التمدد الذي مركزه C ومعامله k > 0: النقطة C صورتها نفسها، وكل نقطة أخرى P صورتها P′ على الشعاع CP حيث " + eq("CP′ = k × CP") + ".",
              "إذا كان k > 1 فالتمدد تكبير، وإذا كان 0 < k < 1 فهو تصغير، و" + eq("k = طول ضلع في الصورة ÷ طول الضلع المناظر في الأصل = CP′ ÷ CP") + ".",
              "في المستوى الإحداثي ومركز التمدد O(0, 0): " + eq("(x, y) → (kx, ky)") + "، فعندما k = 2: A(1, 3) → A′(2, 6) وB(2, −1) → B′(4, −2) وC(5, 0) → C′(10, 0).",
              "وعندما k = 1/3: A(−3, 6) → A′(−1, 2) وD(−3, −3) → D′(−1, −1): تصغير."]
          },
          story: {
            en: ["Farida puts on a shadow show with a lamp and a 20 cm cardboard rabbit.",
              "The rabbit is 24 cm from the lamp and the wall is 36 cm behind the rabbit, so the wall is 60 cm from the lamp.",
              "The lamp is the centre of dilation: " + eq("k = 60 ÷ 24 = 2.5") + ".",
              "The shadow rabbit is " + eq("20 × 2.5 = 50") + " cm tall: an enlargement, because k > 1.",
              "When she moves the rabbit closer to the wall, k gets smaller and the shadow shrinks towards the real size."],
            ar: ["تقدم فريدة عرض ظل بمصباح وأرنب من الورق المقوى طوله ٢٠ سم.",
              "الأرنب على بعد ٢٤ سم من المصباح، والحائط خلف الأرنب بـ ٣٦ سم، إذن الحائط على بعد ٦٠ سم من المصباح.",
              "المصباح هو مركز التمدد: " + eq("k = 60 ÷ 24 = 2.5") + ".",
              "طول أرنب الظل " + eq("20 × 2.5 = 50") + " سم: تكبير لأن k > 1.",
              "وعندما تقرّب الأرنب من الحائط تصغر k ويقترب الظل من الحجم الحقيقي."]
          }
        },
        words: [
          ["Dilation", "التمدد", "A transformation that enlarges or reduces a figure by a factor k.", "تحويل هندسي يكبّر الشكل أو يصغّره بمعامل k."],
          ["Centre of dilation", "مركز التمدد", "The fixed point C; every image point lies on a ray from C.", "النقطة الثابتة C، وكل صورة تقع على شعاع يبدأ منها."],
          ["Dilation factor k", "معامل التمدد k", "CP′ ÷ CP = image length ÷ original length.", "CP′ ÷ CP = الطول في الصورة ÷ الطول في الأصل."],
          ["Enlargement", "التكبير", "A dilation with k > 1.", "تمدد معامله k > 1."],
          ["Reduction", "التصغير", "A dilation with 0 < k < 1.", "تمدد معامله 0 < k < 1."]
        ],
        lab: { parts: [{ type: "mprep3_dilation" }, {
          type: "sort",
          prompt: ["Tap a dilation, then tap its type.", "اضغط على التمدد ثم اضغط على نوعه."],
          bins: [["e", "🔍", "Enlargement", "تكبير"], ["r", "🔬", "Reduction", "تصغير"]],
          items: [["k = 2", "e"], ["k = 1.5", "e"], [["A 4 cm side becomes 12 cm", "ضلع ٤ سم يصبح ١٢ سم"], "e"], ["k = 1/3", "r"], ["k = 0.25", "r"], [["CP = 6 and CP′ = 3", "CP = 6 وCP′ = 3"], "r"]]
        }] },
        quiz: [
          Q(["The image of A(1, 3) under a dilation with centre O and factor 2 is:", "صورة A(1, 3) بتمدد مركزه O ومعامله 2 هي:"], [["(2, 6)", "(2, 6)"], ["(3, 5)", "(3, 5)"], ["(0.5, 1.5)", "(0.5, 1.5)"], ["(2, 3)", "(2, 3)"]],
            ["(x, y) → (2x, 2y): (1, 3) → (2, 6).", "(x, y) → (2x, 2y): (1, 3) → (2, 6)."], ["Both coordinates double; adding 2 is a translation, not a dilation.", "يتضاعف الإحداثيان؛ إضافة ٢ انتقال وليست تمددًا."]),
          Q(["The image of (−3, 6) under a dilation with centre O and factor 1/3 is:", "صورة (−3, 6) بتمدد مركزه O ومعامله 1/3 هي:"], [["(−1, 2)", "(−1, 2)"], ["(−9, 18)", "(−9, 18)"], ["(1, −2)", "(1, −2)"], ["(−3, 2)", "(−3, 2)"]],
            ["(x, y) → (x/3, y/3): (−3, 6) → (−1, 2).", "(x, y) → (x/3, y/3): (−3, 6) → (−1, 2)."], ["A third of each coordinate, keeping the sign.", "ثلث كل إحداثي مع الإبقاء على الإشارة."]),
          Q(["A dilation with factor k = 0.4 is:", "التمدد الذي معامله k = 0.4 هو:"], [["A reduction", "تصغير"], ["An enlargement", "تكبير"], ["A congruence (same size)", "تطابق (الحجم نفسه)"], ["A reflection", "انعكاس"]],
            ["0 < 0.4 < 1, so the image is smaller: a reduction.", "0 < 0.4 < 1 إذن الصورة أصغر: تصغير."], ["Less than one whole: the picture shrinks.", "أقل من الواحد: الصورة تنكمش."]),
          Q(["Under a dilation with centre C, CQ = 5 cm and CQ′ = 15 cm. A 4 cm side of the figure becomes:", "بتمدد مركزه C، CQ = 5 سم وCQ′ = 15 سم. ضلع طوله ٤ سم في الشكل يصبح:"], [["12 cm", "12 سم"], ["4/3 cm", "4/3 سم"], ["20 cm", "20 سم"], ["60 cm", "60 سم"]],
            ["k = 15 ÷ 5 = 3, so 4 × 3 = 12 cm.", "k = 15 ÷ 5 = 3 إذن 4 × 3 = 12 سم."], ["Everything is three times as far and three times as long.", "كل شيء أبعد ثلاث مرات وأطول ثلاث مرات."]),
          Q(["△ADE is the image of △ABC by a dilation with centre A and factor 3/5. If DE = 7.5 cm, then BC =", "△ADE صورة △ABC بتمدد مركزه A ومعامله 3/5. إذا كان DE = 7.5 سم فإن BC ="], [["12.5 cm", "12.5 سم"], ["4.5 cm", "4.5 سم"], ["7.5 cm", "7.5 سم"], ["10 cm", "10 سم"]],
            ["DE = k × BC, so BC = 7.5 ÷ (3/5) = 7.5 × 5 ÷ 3 = 12.5 cm.", "DE = k × BC إذن BC = 7.5 ÷ (3/5) = 7.5 × 5 ÷ 3 = 12.5 سم."], ["The image is the smaller one, so the original side is longer than 7.5.", "الصورة هي الأصغر، فالضلع الأصلي أطول من ٧٫٥."]),
          Q(["A 20 cm model is 24 cm from a lamp and the wall is 36 cm behind it. The shadow's height is:", "نموذج طوله ٢٠ سم على بعد ٢٤ سم من مصباح، والحائط خلفه بـ ٣٦ سم. طول الظل:"], [["50 cm", "50 سم"], ["30 cm", "30 سم"], ["20 cm", "20 سم"], ["45 cm", "45 سم"]],
            ["Lamp to wall = 24 + 36 = 60 cm, k = 60 ÷ 24 = 2.5, height = 20 × 2.5 = 50 cm.", "من المصباح إلى الحائط = 24 + 36 = 60 سم، k = 60 ÷ 24 = 2.5، والطول = 20 × 2.5 = 50 سم."], ["Measure from the lamp, the centre, not from the rabbit.", "قِس من المصباح وهو المركز، وليس من الأرنب."]),
          Q(["A figure and its image under a dilation are:", "الشكل وصورته بالتمدد:"], [["Similar, with corresponding sides parallel", "متشابهان والأضلاع المتناظرة متوازية"], ["Always congruent", "متطابقان دائمًا"], ["Similar, with corresponding sides perpendicular", "متشابهان والأضلاع المتناظرة متعامدة"], ["Of equal area", "متساويان في المساحة"]],
            ["Angles are kept and lengths change by the same ratio k, and each image side is parallel to its original.", "تبقى الزوايا وتتغير الأطوال بالنسبة نفسها k، وكل ضلع في الصورة يوازي ضلعه الأصلي."], ["The shadow rabbit has the same shape, just bigger.", "أرنب الظل له الشكل نفسه لكنه أكبر."])
        ]
      },
      {
        id: "mprep3u3l4", icon: "🪁", page: 68,
        title: { en: "Trigonometric Ratios of an Acute Angle", ar: "النسب المثلثية للزاوية الحادة" },
        idea: {
          official: {
            en: ["A trigonometric ratio is the ratio of two side lengths in a right-angled triangle, named from an acute angle θ.",
              eq("sin θ = opposite ÷ hypotenuse") + ", " + eq("cos θ = adjacent ÷ hypotenuse") + ", " + eq("tan θ = opposite ÷ adjacent = sin θ ÷ cos θ") + ".",
              "Example: legs 5 and 12 give hypotenuse " + eq("√(12² + 5²) = 13") + ". For θ opposite 5: " + eq("sin θ = 5/13, cos θ = 12/13, tan θ = 5/12") + ".",
              "For complementary angles A + B = 90°: " + eq("sin A = cos B") + " and " + eq("cos A = sin B") + ".",
              "Given one ratio, draw the triangle: if " + eq("cos θ = 12/13") + ", take adjacent 12k and hypotenuse 13k, then Pythagoras gives opposite 5k. If the adjacent is 24 cm, k = 2 and the hypotenuse is 26 cm."],
            ar: ["النسبة المثلثية هي النسبة بين طولي ضلعين في مثلث قائم الزاوية، وتُنسب إلى زاوية حادة θ.",
              eq("جا θ = المقابل ÷ الوتر") + "، " + eq("جتا θ = المجاور ÷ الوتر") + "، " + eq("ظا θ = المقابل ÷ المجاور = جا θ ÷ جتا θ") + ".",
              "مثال: ضلعا القائمة ٥ و١٢ يعطيان الوتر " + eq("√(12² + 5²) = 13") + "، وللزاوية θ المقابلة للضلع ٥: " + eq("sin θ = 5/13, cos θ = 12/13, tan θ = 5/12") + ".",
              "للزاويتين المتتامتين A + B = 90°: " + eq("sin A = cos B") + " و" + eq("cos A = sin B") + ".",
              "إذا عُلمت نسبة نرسم المثلث: إذا كان " + eq("cos θ = 12/13") + " نأخذ المجاور 12k والوتر 13k فتعطي فيثاغورث المقابل 5k، وإذا كان المجاور ٢٤ سم فإن k = 2 والوتر ٢٦ سم."]
          },
          story: {
            en: ["Ziad flies a kite on the Nile Corniche in Aswan. The string is 20 m long and tight.",
              "The string, the ground and the kite's height make a right-angled triangle, with the string as hypotenuse.",
              "His phone app says the string's angle θ with the ground has " + eq("sin θ = 3/5") + ".",
              "Height = opposite = hypotenuse × sin θ = " + eq("20 × 3/5 = 12") + " m.",
              "And the kite is " + eq("20 × 4/5 = 16") + " m away along the ground, because " + eq("cos θ = 4/5") + ". A 3-4-5 triangle in the sky!"],
            ar: ["يطيّر زياد طائرة ورقية على كورنيش النيل بأسوان، وطول الخيط ٢٠ م مشدودًا.",
              "الخيط والأرض وارتفاع الطائرة تكوّن مثلثًا قائم الزاوية، والخيط هو الوتر.",
              "يقول تطبيق هاتفه إن زاوية الخيط θ مع الأرض جيبها " + eq("sin θ = 3/5") + ".",
              "الارتفاع = المقابل = الوتر × جا θ = " + eq("20 × 3/5 = 12") + " م.",
              "والطائرة على بعد " + eq("20 × 4/5 = 16") + " م على الأرض لأن " + eq("cos θ = 4/5") + ". مثلث ٣-٤-٥ في السماء!"]
          }
        },
        words: [
          ["Sine (sin)", "الجيب (جا)", "Opposite ÷ hypotenuse.", "المقابل ÷ الوتر."],
          ["Cosine (cos)", "جيب التمام (جتا)", "Adjacent ÷ hypotenuse.", "المجاور ÷ الوتر."],
          ["Tangent (tan)", "الظل (ظا)", "Opposite ÷ adjacent = sin ÷ cos.", "المقابل ÷ المجاور = جا ÷ جتا."],
          ["Hypotenuse", "الوتر", "The longest side, opposite the right angle.", "أطول الأضلاع، ويقابل الزاوية القائمة."],
          ["Opposite / adjacent side", "الضلع المقابل / المجاور", "Facing the angle θ / next to θ (not the hypotenuse).", "الضلع المواجه للزاوية θ / الضلع المجاور لها غير الوتر."],
          ["Pythagoras' theorem", "نظرية فيثاغورث", "hypotenuse² = leg² + leg².", "مربع الوتر = مجموع مربعي ضلعي القائمة."]
        ],
        lab: { parts: [{ type: "mprep3_trig" }, {
          type: "sort",
          prompt: ["Triangle 3-4-5, θ opposite the side 3. Tap a clue, then its ratio.", "مثلث ٣-٤-٥ والزاوية θ تقابل الضلع ٣. اضغط على الدليل ثم على النسبة."],
          bins: [["s", "📈", "sin θ", "جا θ"], ["c", "📉", "cos θ", "جتا θ"], ["t", "📐", "tan θ", "ظا θ"]],
          items: [["3/5", "s"], [["opposite ÷ hypotenuse", "المقابل ÷ الوتر"], "s"], ["4/5", "c"], [["adjacent ÷ hypotenuse", "المجاور ÷ الوتر"], "c"], ["3/4", "t"], [["sin θ ÷ cos θ", "جا θ ÷ جتا θ"], "t"]]
        }] },
        quiz: [
          Q(["A right triangle has legs 5 and 12. For θ opposite the side 5, sin θ =", "مثلث قائم ضلعا القائمة فيه ٥ و١٢. للزاوية θ المقابلة للضلع ٥: جا θ ="], [["5/13", "5/13"], ["12/13", "12/13"], ["5/12", "5/12"], ["13/5", "13/5"]],
            ["Hypotenuse = √(25 + 144) = 13, sin θ = opposite ÷ hypotenuse = 5/13.", "الوتر = √(25 + 144) = 13، جا θ = المقابل ÷ الوتر = 5/13."], ["Sine looks across at the opposite side and down at the long side.", "الجيب ينظر إلى الضلع المقابل وإلى الضلع الأطول."]),
          Q(["If cos θ = 12/13, then tan θ =", "إذا كان جتا θ = 12/13 فإن ظا θ ="], [["5/12", "5/12"], ["12/5", "12/5"], ["5/13", "5/13"], ["13/12", "13/12"]],
            ["Adjacent 12k, hypotenuse 13k, opposite = √(169k² − 144k²) = 5k, so tan θ = 5/12.", "المجاور 12k والوتر 13k والمقابل = √(169k² − 144k²) = 5k، إذن ظا θ = 5/12."], ["Draw the 5-12-13 triangle and read the opposite over the adjacent.", "ارسم المثلث ٥-١٢-١٣ واقرأ المقابل على المجاور."]),
          Q(["sin θ = 3/5 and the hypotenuse is 10 cm. The value of sin²θ + cos²θ − tan θ is:", "جا θ = 3/5 والوتر ١٠ سم. قيمة جا²θ + جتا²θ − ظا θ هي:"], [["1/4", "1/4"], ["1", "1"], ["7/4", "7/4"], ["3/4", "3/4"]],
            ["Opposite 6, adjacent 8: sin²θ + cos²θ = 9/25 + 16/25 = 1 and tan θ = 6/8 = 3/4, so 1 − 3/4 = 1/4.", "المقابل ٦ والمجاور ٨: جا²θ + جتا²θ = 9/25 + 16/25 = 1 وظا θ = 6/8 = 3/4، إذن 1 − 3/4 = 1/4."], ["sin² + cos² is always 1, so only the tangent changes the answer.", "جا² + جتا² يساوي ١ دائمًا، فالظل وحده يغيّر الناتج."]),
          Q(["If sin 35° = cos B, where B is acute, then B =", "إذا كان جا 35° = جتا B حيث B حادة فإن B ="], [["55°", "55°"], ["35°", "35°"], ["145°", "145°"], ["65°", "65°"]],
            ["sin A = cos B when A + B = 90°, so B = 90° − 35° = 55°.", "جا A = جتا B عندما A + B = 90°، إذن B = 90° − 35° = 55°."], ["The two acute angles of a right triangle swap sine and cosine.", "الزاويتان الحادتان في المثلث القائم تتبادلان الجيب وجيب التمام."]),
          Q(["A kite string is 20 m and makes angle θ with the ground, sin θ = 3/5. The kite's height is:", "خيط طائرة ورقية طوله ٢٠ م ويصنع زاوية θ مع الأرض حيث جا θ = 3/5. ارتفاع الطائرة:"], [["12 m", "12 م"], ["16 m", "16 م"], ["15 m", "15 م"], ["33.3 m", "33.3 م"]],
            ["Height = 20 × sin θ = 20 × 3/5 = 12 m.", "الارتفاع = 20 × جا θ = 20 × 3/5 = 12 م."], ["Ziad's kite: 3 parts of 5 of the string go straight up.", "طائرة زياد: ٣ أجزاء من ٥ من الخيط تصعد رأسيًا."]),
          Q(["cos θ = 12/13 and the adjacent side is 24 cm. The hypotenuse is:", "جتا θ = 12/13 والضلع المجاور ٢٤ سم. طول الوتر:"], [["26 cm", "26 سم"], ["13 cm", "13 سم"], ["10 cm", "10 سم"], ["28 cm", "28 سم"]],
            ["24 ÷ hypotenuse = 12/13, so hypotenuse = 24 × 13 ÷ 12 = 26 cm.", "24 ÷ الوتر = 12/13 إذن الوتر = 24 × 13 ÷ 12 = 26 سم."], ["24 is 12 doubled, so 13 doubles too.", "٢٤ ضعف ١٢، فيتضاعف ١٣ أيضًا."]),
          Q(["tan θ = 3/4 in a right triangle whose adjacent side is 8 cm. The opposite side is:", "ظا θ = 3/4 في مثلث قائم ضلعه المجاور ٨ سم. الضلع المقابل:"], [["6 cm", "6 سم"], ["10.67 cm", "10.67 سم"], ["4.8 cm", "4.8 سم"], ["3 cm", "3 سم"]],
            ["opposite ÷ 8 = 3/4, so opposite = 6 cm.", "المقابل ÷ 8 = 3/4 إذن المقابل = 6 سم."], ["Two times the 3-4 triangle: 6 and 8.", "ضعف المثلث ٣-٤: ٦ و٨."])
        ]
      },
      {
        id: "mprep3u3l5", icon: "🏛️", page: 74,
        title: { en: "Trigonometric Ratios of Some Special Angles", ar: "النسب المثلثية لبعض الزوايا الخاصة" },
        idea: {
          official: {
            en: ["Half of an equilateral triangle is a 30°-60°-90° triangle with sides " + eq("1 : √3 : 2") + ". Half of a square is a 45°-45°-90° triangle with sides " + eq("1 : 1 : √2") + ".",
              eq("sin 30° = cos 60° = 1/2") + ", " + eq("sin 60° = cos 30° = √3/2") + ", " + eq("tan 30° = 1/√3") + ", " + eq("tan 60° = √3") + ".",
              eq("sin 45° = cos 45° = 1/√2 = √2/2") + " and " + eq("tan 45° = 1") + ".",
              "Example: angle 60°, opposite side 20√3 cm, hypotenuse x: " + eq("sin 60° = 20√3 ÷ x") + ", so " + eq("x = 20√3 ÷ (√3/2) = 40") + " cm.",
              "Other angles: use the calculator (" + eq("sin 42° ≈ 0.6691") + "), and the inverse keys sin⁻¹, cos⁻¹, tan⁻¹ to find an angle from a ratio. If " + eq("2 cos(θ + 20°) = tan 45° = 1") + " then θ + 20° = 60° and θ = 40°."],
            ar: ["نصف المثلث المتساوي الأضلاع مثلث ٣٠°-٦٠°-٩٠° أطوال أضلاعه بنسبة " + eq("1 : √3 : 2") + "، ونصف المربع مثلث ٤٥°-٤٥°-٩٠° أطوال أضلاعه بنسبة " + eq("1 : 1 : √2") + ".",
              eq("sin 30° = cos 60° = 1/2") + "، " + eq("sin 60° = cos 30° = √3/2") + "، " + eq("tan 30° = 1/√3") + "، " + eq("tan 60° = √3") + ".",
              eq("sin 45° = cos 45° = 1/√2 = √2/2") + " و" + eq("tan 45° = 1") + ".",
              "مثال: زاوية ٦٠° والضلع المقابل 20√3 سم والوتر x: " + eq("sin 60° = 20√3 ÷ x") + " إذن " + eq("x = 20√3 ÷ (√3/2) = 40") + " سم.",
              "الزوايا الأخرى: نستخدم الآلة الحاسبة (" + eq("sin 42° ≈ 0.6691") + ")، ومفاتيح sin⁻¹ وcos⁻¹ وtan⁻¹ لإيجاد الزاوية من نسبتها. إذا كان " + eq("2 cos(θ + 20°) = tan 45° = 1") + " فإن θ + 20° = 60° ومنها θ = 40°."]
          },
          story: {
            en: ["At Karnak Temple, Laila stands beside an obelisk 40 m high, the ancient Egyptians' first sundial.",
              "When the sun's rays make 45° with the ground, the obelisk, its shadow and the ray form half a square.",
              "Since " + eq("tan 45° = 1") + ", the shadow is exactly as long as the obelisk: 40 m.",
              "Later the sun is higher, at 60°: shadow = " + eq("40 ÷ tan 60° = 40 ÷ √3 ≈ 23.1") + " m, shorter.",
              "Early morning at 30°, the shadow stretches to " + eq("40 ÷ tan 30° = 40√3 ≈ 69.3") + " m. The shadow tells the time!"],
            ar: ["في معبد الكرنك تقف ليلى بجوار مسلة ارتفاعها ٤٠ م، وهي أول ساعة شمسية عند المصريين القدماء.",
              "عندما تصنع أشعة الشمس زاوية ٤٥° مع الأرض تكوّن المسلة وظلها والشعاع نصف مربع.",
              "ولأن " + eq("tan 45° = 1") + " فطول الظل يساوي ارتفاع المسلة تمامًا: ٤٠ م.",
              "بعد ذلك ترتفع الشمس إلى ٦٠°: الظل = " + eq("40 ÷ tan 60° = 40 ÷ √3 ≈ 23.1") + " م، أقصر.",
              "وفي الصباح الباكر عند ٣٠° يمتد الظل إلى " + eq("40 ÷ tan 30° = 40√3 ≈ 69.3") + " م. الظل يخبرنا بالوقت!"]
          }
        },
        words: [
          ["Special angles", "الزوايا الخاصة", "30°, 45° and 60°, whose ratios are exact.", "الزوايا ٣٠° و٤٥° و٦٠° ونسبها المثلثية قيم مضبوطة."],
          ["30°-60°-90° triangle", "مثلث ٣٠°-٦٠°-٩٠°", "Half of an equilateral triangle: sides 1 : √3 : 2.", "نصف مثلث متساوي الأضلاع: أضلاعه ١ : √٣ : ٢."],
          ["45°-45°-90° triangle", "مثلث ٤٥°-٤٥°-٩٠°", "Half of a square: sides 1 : 1 : √2.", "نصف مربع: أضلاعه ١ : ١ : √٢."],
          ["Inverse ratio", "الدالة العكسية", "sin⁻¹, cos⁻¹, tan⁻¹ give the angle from its ratio.", "sin⁻¹ وcos⁻¹ وtan⁻¹ تعطي الزاوية من نسبتها."],
          ["Degree, minute, second", "الدرجة والدقيقة والثانية", "1° = 60′ and 1′ = 60″.", "1° = 60′ و1′ = 60″."]
        ],
        lab: { parts: [{ type: "mprep3_special" }, {
          type: "sort",
          prompt: ["Tap a ratio, then tap its exact value.", "اضغط على النسبة ثم اضغط على قيمتها المضبوطة."],
          bins: [["h", "½", "1/2", "1/2"], ["r", "√", "√3/2", "√3/2"], ["o", "1️⃣", "1", "1"]],
          items: [["sin 30°", "h"], ["cos 60°", "h"], ["sin 60°", "r"], ["cos 30°", "r"], ["tan 45°", "o"], ["tan 30° × tan 60°", "o"]]
        }] },
        quiz: [
          Q(["sin 30° =", "جا 30° ="], [["1/2", "1/2"], ["√3/2", "√3/2"], ["√2/2", "√2/2"], ["1", "1"]],
            ["In the 30°-60°-90° triangle, the side opposite 30° is 1 and the hypotenuse is 2: sin 30° = 1/2.", "في مثلث ٣٠°-٦٠°-٩٠° الضلع المقابل لـ ٣٠° طوله ١ والوتر ٢: جا 30° = 1/2."], ["The shortest side is half the hypotenuse.", "أقصر ضلع نصف الوتر."]),
          Q(["tan 60° =", "ظا 60° ="], [["√3", "√3"], ["1/√3", "1/√3"], ["1/2", "1/2"], ["1", "1"]],
            ["tan 60° = opposite ÷ adjacent = √3 ÷ 1 = √3.", "ظا 60° = المقابل ÷ المجاور = √3 ÷ 1 = √3."], ["At 60° the opposite side is the long leg √3.", "عند ٦٠° يكون الضلع المقابل هو الضلع الطويل √٣."]),
          Q(["An obelisk is 40 m high. The sun's rays make 45° with the ground. The shadow is:", "مسلة ارتفاعها ٤٠ م وأشعة الشمس تصنع ٤٥° مع الأرض. طول ظلها:"], [["40 m", "40 م"], ["20 m", "20 م"], ["40√2 m", "40√2 م"], ["40√3 m", "40√3 م"]],
            ["tan 45° = 40 ÷ shadow = 1, so the shadow = 40 m.", "ظا 45° = 40 ÷ الظل = 1 إذن الظل = 40 م."], ["Half a square: the two legs are equal.", "نصف مربع: ضلعا القائمة متساويان."]),
          Q(["A right triangle has an angle of 60° whose opposite side is 20√3 cm. The hypotenuse is:", "مثلث قائم فيه زاوية ٦٠° والضلع المقابل لها 20√3 سم. طول الوتر:"], [["40 cm", "40 سم"], ["20 cm", "20 سم"], ["30 cm", "30 سم"], ["40√3 cm", "40√3 سم"]],
            ["sin 60° = 20√3 ÷ x = √3/2, so x = 40 cm.", "جا 60° = 20√3 ÷ x = √3/2 إذن x = 40 سم."], ["The √3 cancels and 20 doubles.", "يختصر √٣ ويتضاعف ٢٠."]),
          Q(["Find θ if 2 cos(θ + 20°) = tan 45° (θ + 20° acute).", "أوجد θ إذا كان 2 جتا(θ + 20°) = ظا 45° حيث (θ + 20°) حادة."], [["40°", "40°"], ["10°", "10°"], ["70°", "70°"], ["25°", "25°"]],
            ["tan 45° = 1, so cos(θ + 20°) = 1/2 = cos 60°, θ + 20° = 60°, θ = 40°.", "ظا 45° = 1 إذن جتا(θ + 20°) = 1/2 = جتا 60° ومنها θ + 20° = 60° وθ = 40°."], ["Turn the 1/2 back into its special angle, 60°.", "أعد ١/٢ إلى زاويتها الخاصة ٦٠°."]),
          Q(["In △ABC, m∠B = 72° and sin A = cos 2A (2A acute). Find m∠C.", "في △ABC، m∠B = 72° وجا A = جتا 2A حيث 2A حادة. أوجد m∠C."], [["78°", "78°"], ["48°", "48°"], ["18°", "18°"], ["60°", "60°"]],
            ["sin A = cos 2A means A + 2A = 90°, A = 30°, so m∠C = 180° − (72° + 30°) = 78°.", "جا A = جتا 2A تعني A + 2A = 90° إذن A = 30° وm∠C = 180° − (72° + 30°) = 78°."], ["Sine of one equals cosine of the other: they add to 90°.", "جيب زاوية يساوي جيب تمام الأخرى: مجموعهما ٩٠°."]),
          Q(["sin²45° + cos²60° =", "جا²45° + جتا²60° ="], [["3/4", "3/4"], ["1", "1"], ["1/2", "1/2"], ["5/4", "5/4"]],
            ["(√2/2)² + (1/2)² = 2/4 + 1/4 = 3/4.", "(√2/2)² + (1/2)² = 2/4 + 1/4 = 3/4."], ["Different angles, so the answer is not 1.", "الزاويتان مختلفتان فالناتج ليس ١."]),
          Q(["Using a calculator, sin 42° ≈", "باستخدام الآلة الحاسبة جا 42° ≈"], [["0.6691", "0.6691"], ["0.7431", "0.7431"], ["0.9004", "0.9004"], ["0.4200", "0.4200"]],
            ["sin 42° ≈ 0.6691 (cos 42° ≈ 0.7431 and tan 42° ≈ 0.9004).", "جا 42° ≈ 0.6691 (جتا 42° ≈ 0.7431 وظا 42° ≈ 0.9004)."], ["Make sure the calculator is in degree mode.", "تأكد أن الآلة الحاسبة على نظام الدرجات."])
        ]
      },
      {
        id: "mprep3u3l6", icon: "✈️", page: 80,
        title: { en: "Slopes of Parallel and Perpendicular Lines", ar: "العلاقة بين ميلي المستقيمين المتوازيين والمتعامدين" },
        idea: {
          official: {
            en: ["The inclination angle θ of a line is measured anticlockwise from the positive x-axis. The slope is " + eq("m = tan θ") + ", and through two points " + eq("m = (y₂ − y₁) ÷ (x₂ − x₁)") + ".",
              "0° < θ < 90°: positive slope; 90° < θ < 180°: negative slope; horizontal line: m = 0; vertical line: slope undefined.",
              "For a negative slope, " + eq("θ = 180° + tan⁻¹(m)") + ": through (5, 6) and (4, 7), m = −1, so θ = 135°.",
              "Parallel lines have equal slopes: " + eq("m₁ = m₂") + ", and vice versa. A(2, 1), B(4, −1) gives m = −1 = tan 135°.",
              "Perpendicular lines (not parallel to the axes): " + eq("m₁ × m₂ = −1") + ". Through (−1, 6), (5, 2): m₁ = −2/3; through (6, 8), (−2, −4): m₂ = 3/2; product −1, so they are perpendicular."],
            ar: ["زاوية ميل المستقيم θ تقاس من الاتجاه الموجب لمحور السينات عكس عقارب الساعة، والميل " + eq("m = tan θ") + "، والميل بمعلومية نقطتين " + eq("m = (y₂ − y₁) ÷ (x₂ − x₁)") + ".",
              "إذا كانت 0° < θ < 90° فالميل موجب، وإذا كانت 90° < θ < 180° فالميل سالب، والمستقيم الأفقي ميله صفر، والرأسي ميله غير معرّف.",
              "للميل السالب " + eq("θ = 180° + tan⁻¹(m)") + ": المستقيم المار بـ (5, 6) و(4, 7) ميله −1 إذن θ = 135°.",
              "المستقيمان المتوازيان ميلاهما متساويان " + eq("m₁ = m₂") + " والعكس صحيح. A(2, 1) وB(4, −1) يعطيان m = −1 = ظا 135°.",
              "المستقيمان المتعامدان (غير الموازيين للمحورين): " + eq("m₁ × m₂ = −1") + ". المار بـ (−1, 6) و(5, 2) ميله −2/3، والمار بـ (6, 8) و(−2, −4) ميله 3/2، والحاصل −1 إذن متعامدان."]
          },
          story: {
            en: ["On 6 October, Ahmed watches the air show: jets fly in perfectly parallel paths over Cairo.",
              "The leader passes through " + eq("(100√3, 201)") + " and " + eq("(300√3, 401)") + ". Its slope is " + eq("200 ÷ 200√3 = 1/√3") + ".",
              "A second jet flies parallel at angle θ, so " + eq("tan θ = 1/√3") + " and " + eq("θ = 30°") + ".",
              "Then a third jet cuts across at a right angle: its slope must be " + eq("−√3") + ", because " + eq("1/√3 × (−√3) = −1") + ".",
              "Same slope for the parallel jets, slopes that multiply to −1 for the crossing one."],
            ar: ["في السادس من أكتوبر يشاهد أحمد العرض الجوي: الطائرات تطير في مسارات متوازية تمامًا فوق القاهرة.",
              "تمر الطائرة القائدة بالنقطتين " + eq("(100√3, 201)") + " و" + eq("(300√3, 401)") + " وميل مسارها " + eq("200 ÷ 200√3 = 1/√3") + ".",
              "طائرة ثانية تطير موازية لها بزاوية θ، إذن " + eq("tan θ = 1/√3") + " و" + eq("θ = 30°") + ".",
              "ثم تقطع طائرة ثالثة المسار بزاوية قائمة، فيجب أن يكون ميلها " + eq("−√3") + " لأن " + eq("1/√3 × (−√3) = −1") + ".",
              "ميل واحد للطائرات المتوازية، وميلان حاصل ضربهما −١ للطائرة المتعامدة."]
          }
        },
        words: [
          ["Inclination angle", "زاوية الميل", "The angle from the positive x-axis to the line, anticlockwise.", "الزاوية من الاتجاه الموجب لمحور السينات إلى المستقيم عكس عقارب الساعة."],
          ["Slope", "الميل", "m = tan θ = (y₂ − y₁) ÷ (x₂ − x₁).", "m = ظا θ = (y₂ − y₁) ÷ (x₂ − x₁)."],
          ["Parallel lines", "المستقيمان المتوازيان", "m₁ = m₂.", "m₁ = m₂."],
          ["Perpendicular lines", "المستقيمان المتعامدان", "m₁ × m₂ = −1.", "m₁ × m₂ = −1."],
          ["Collinear points", "نقاط على استقامة واحدة", "Points on one line: the slopes between them are equal.", "نقاط تقع على مستقيم واحد: الميول بينها متساوية."]
        ],
        lab: { parts: [{ type: "mprep3_slopes" }, {
          type: "sort",
          prompt: ["Tap a line, then tap the sign of its slope.", "اضغط على المستقيم ثم اضغط على نوع ميله."],
          bins: [["p", "↗️", "Positive", "موجب"], ["n", "↘️", "Negative", "سالب"], ["z", "➡️", "Zero", "صفر"], ["u", "⬆️", "Undefined", "غير معرّف"]],
          items: [[["Inclination 30°", "زاوية ميله 30°"], "p"], [["Through (1, 2) and (3, 6)", "يمر بـ (1, 2) و(3, 6)"], "p"], [["Inclination 150°", "زاوية ميله 150°"], "n"], [["Through (5, 6) and (4, 7)", "يمر بـ (5, 6) و(4, 7)"], "n"], ["y = 3", "z"], ["x = 2", "u"]]
        }] },
        quiz: [
          Q(["The slope of a line whose inclination angle is 45° is:", "ميل المستقيم الذي زاوية ميله 45° هو:"], [["1", "1"], ["0", "0"], ["√3", "√3"], ["Undefined", "غير معرّف"]],
            ["m = tan 45° = 1.", "m = ظا 45° = 1."], ["One step right, one step up.", "خطوة يمينًا وخطوة لأعلى."]),
          Q(["A line passes through (5, 6) and (4, 7). Its inclination angle is:", "مستقيم يمر بالنقطتين (5, 6) و(4, 7). زاوية ميله:"], [["135°", "135°"], ["45°", "45°"], ["−45°", "−45°"], ["225°", "225°"]],
            ["m = (7 − 6) ÷ (4 − 5) = −1, so θ = 180° + tan⁻¹(−1) = 180° − 45° = 135°.", "m = (7 − 6) ÷ (4 − 5) = −1 إذن θ = 180° + tan⁻¹(−1) = 180° − 45° = 135°."], ["The calculator says −45°, but the inclination angle is measured from the positive x-axis anticlockwise.", "الآلة تعطي −٤٥° لكن زاوية الميل تُقاس من الاتجاه الموجب عكس عقارب الساعة."]),
          Q(["The line through A(2k + 1, −5) and B(−3, k) has inclination 45°. Find k.", "المستقيم المار بـ A(2k + 1, −5) وB(−3, k) زاوية ميله 45°. أوجد k."], [["−3", "−3"], ["3", "3"], ["−1", "−1"], ["9", "9"]],
            ["(k + 5) ÷ (−3 − 2k − 1) = 1, so k + 5 = −2k − 4, 3k = −9, k = −3.", "(k + 5) ÷ (−3 − 2k − 1) = 1 إذن k + 5 = −2k − 4 و3k = −9 ومنها k = −3."], ["Slope 1 means the rise equals the run.", "الميل ١ يعني أن الارتفاع يساوي التقدم الأفقي."]),
          Q(["The slope of a line perpendicular to a line of slope 2/3 is:", "ميل المستقيم العمودي على مستقيم ميله 2/3 هو:"], [["−3/2", "−3/2"], ["3/2", "3/2"], ["−2/3", "−2/3"], ["2/3", "2/3"]],
            ["m₁ × m₂ = −1, so m₂ = −1 ÷ (2/3) = −3/2.", "m₁ × m₂ = −1 إذن m₂ = −1 ÷ (2/3) = −3/2."], ["Flip the fraction and change the sign.", "اقلب الكسر وغيّر الإشارة."]),
          Q(["l₁ passes through (−1, 6) and (5, 2); l₂ through (6, 8) and (−2, −4). The lines are:", "l₁ يمر بـ (−1, 6) و(5, 2) وl₂ يمر بـ (6, 8) و(−2, −4). المستقيمان:"], [["Perpendicular", "متعامدان"], ["Parallel", "متوازيان"], ["The same line", "منطبقان"], ["Intersecting but not perpendicular", "متقاطعان غير متعامدين"]],
            ["m₁ = (2 − 6) ÷ (5 + 1) = −2/3, m₂ = (−4 − 8) ÷ (−2 − 6) = 3/2, m₁ × m₂ = −1.", "m₁ = (2 − 6) ÷ (5 + 1) = −2/3 وm₂ = (−4 − 8) ÷ (−2 − 6) = 3/2 وm₁ × m₂ = −1."], ["The slopes are flipped and opposite: a perfect right angle.", "الميلان مقلوبان ومتعاكسان: زاوية قائمة تمامًا."]),
          Q(["A(4, 3), B(2, 7), C(8, −5). The slope of AB is:", "A(4, 3) وB(2, 7) وC(8, −5). ميل AB هو:"], [["−2", "−2"], ["2", "2"], ["−1/2", "−1/2"], ["1/2", "1/2"]],
            ["(7 − 3) ÷ (2 − 4) = 4 ÷ (−2) = −2. AC also has slope (−5 − 3) ÷ (8 − 4) = −2, so A, B, C are collinear.", "(7 − 3) ÷ (2 − 4) = 4 ÷ (−2) = −2، وميل AC أيضًا (−5 − 3) ÷ (8 − 4) = −2، إذن A وB وC على استقامة واحدة."], ["Going left 2, the line climbs 4: down to the right.", "عند التحرك يسارًا ٢ يصعد المستقيم ٤: هابط نحو اليمين."]),
          Q(["The slope of a line parallel to the y-axis is:", "ميل المستقيم الموازي لمحور الصادات:"], [["Undefined", "غير معرّف"], ["0", "0"], ["1", "1"], ["−1", "−1"]],
            ["θ = 90° and tan 90° is undefined (the run x₂ − x₁ = 0).", "θ = 90° وظا 90° غير معرّف (x₂ − x₁ = 0)."], ["A wall: you cannot divide the climb by zero steps.", "جدار: لا يمكن قسمة الصعود على صفر خطوات."]),
          Q(["A jet's path passes through (100√3, 201) and (300√3, 401). A parallel path makes angle θ with the x-axis. θ =", "مسار طائرة يمر بـ (100√3, 201) و(300√3, 401)، ومسار موازٍ له يصنع زاوية θ مع محور السينات. θ ="], [["30°", "30°"], ["60°", "60°"], ["45°", "45°"], ["120°", "120°"]],
            ["m = 200 ÷ 200√3 = 1/√3 = tan 30°. Parallel paths have equal slopes, so θ = 30°.", "m = 200 ÷ 200√3 = 1/√3 = ظا 30°، والمساران المتوازيان ميلاهما متساويان إذن θ = 30°."], ["Ahmed's jets climb gently, one step up for every √3 across.", "طائرات أحمد تصعد بهدوء: خطوة لأعلى لكل √٣ أفقيًا."])
        ]
      },
      {
        id: "mprep3u3l7", icon: "🏺", page: 86,
        title: { en: "Equation of the Straight Line", ar: "معادلة الخط المستقيم" },
        idea: {
          official: {
            en: ["Slope m and y-intercept b: " + eq("y = mx + b") + ". Slope 5 and y-intercept −3 give " + eq("y = 5x − 3") + ". Through the origin: " + eq("y = mx") + ".",
              "Slope m through the point (x₁, y₁): " + eq("y − y₁ = m(x − x₁)") + ".",
              "Through (−4, 5) and (4, 1): " + eq("m = (1 − 5) ÷ (4 + 4) = −1/2") + ", then " + eq("1 = −1/2 × 4 + b") + " gives b = 3: " + eq("y = −½x + 3") + ".",
              "Standard form " + eq("Ax + By = C") + ": slope " + eq("−A/B") + ", y-intercept " + eq("C/B") + ", x-intercept " + eq("C/A") + ". For " + eq("2x + 3y = 6") + ": slope −2/3, cuts the axes at (3, 0) and (0, 2).",
              "To graph " + eq("y = 3/2 x + 1") + ": plot (0, 1), move 2 right and 3 up, plot the second point and join. Also: y = 0 is the x-axis and x = 0 is the y-axis."],
            ar: ["بمعلومية الميل m والمقطع الصادي b: " + eq("y = mx + b") + "، فالميل ٥ والمقطع −٣ يعطيان " + eq("y = 5x − 3") + "، والمستقيم المار بنقطة الأصل " + eq("y = mx") + ".",
              "بمعلومية الميل m ونقطة (x₁, y₁): " + eq("y − y₁ = m(x − x₁)") + ".",
              "المار بـ (−4, 5) و(4, 1): " + eq("m = (1 − 5) ÷ (4 + 4) = −1/2") + "، ثم " + eq("1 = −1/2 × 4 + b") + " تعطي b = 3: " + eq("y = −½x + 3") + ".",
              "الصورة العامة " + eq("Ax + By = C") + ": الميل " + eq("−A/B") + " والمقطع الصادي " + eq("C/B") + " والمقطع السيني " + eq("C/A") + "، فالمستقيم " + eq("2x + 3y = 6") + " ميله −2/3 ويقطع المحورين في (3, 0) و(0, 2).",
              "لرسم " + eq("y = 3/2 x + 1") + ": نعيّن (0, 1) ثم نتحرك ٢ يمينًا و٣ لأعلى ونعيّن النقطة الثانية ونصل. ومعادلة محور السينات y = 0 ومحور الصادات x = 0."]
          },
          story: {
            en: ["Mina's family has a souvenir shop near Luxor Temple. In 2020 sales were 800 thousand pounds.",
              "Every year sales grow by 40 thousand pounds as more tourists visit Karnak and the Valley of the Kings.",
              "Mina lets x = 0 stand for 2020. The start value 800 is the y-intercept and the yearly growth 40 is the slope.",
              "So " + eq("y = 40x + 800") + ". For 2025, x = 5: " + eq("y = 40 × 5 + 800 = 1000") + " thousand pounds.",
              "A straight line on the graph: every step right climbs the same 40."],
            ar: ["لأسرة مينا محل هدايا تذكارية بجوار معبد الأقصر، وكانت المبيعات في ٢٠٢٠ نحو ٨٠٠ ألف جنيه.",
              "كل عام تزيد المبيعات ٤٠ ألف جنيه مع زيادة السياح إلى الكرنك ووادي الملوك.",
              "يجعل مينا x = 0 تمثل عام ٢٠٢٠، فقيمة البداية ٨٠٠ هي المقطع الصادي، والزيادة السنوية ٤٠ هي الميل.",
              "إذن " + eq("y = 40x + 800") + "، وفي ٢٠٢٥ تكون x = 5: " + eq("y = 40 × 5 + 800 = 1000") + " ألف جنيه.",
              "خط مستقيم على الرسم: كل خطوة يمينًا تصعد ٤٠ بالضبط."]
          }
        },
        words: [
          ["Equation of a line", "معادلة الخط المستقيم", "y = mx + b: slope m, y-intercept b.", "y = mx + b: الميل m والمقطع الصادي b."],
          ["y-intercept", "المقطع الصادي", "The y where the line cuts the y-axis, at the point (0, b).", "قيمة y عند تقاطع المستقيم مع محور الصادات في النقطة (0, b)."],
          ["x-intercept", "المقطع السيني", "The x where the line cuts the x-axis.", "قيمة x عند تقاطع المستقيم مع محور السينات."],
          ["Point-slope form", "الصورة بمعلومية الميل ونقطة", "y − y₁ = m(x − x₁).", "y − y₁ = m(x − x₁)."],
          ["Standard form", "الصورة العامة", "Ax + By = C with integers A ≥ 0; slope = −A/B.", "Ax + By = C بمعاملات صحيحة وA ≥ 0، والميل = −A/B."]
        ],
        lab: { parts: [{ type: "mprep3_line" }, {
          type: "sort",
          prompt: ["Tap an equation, then tap its group.", "اضغط على المعادلة ثم اضغط على مجموعتها."],
          bins: [["o", "🎯", "Passes through the origin", "يمر بنقطة الأصل"], ["n", "↗️", "Does not pass through the origin", "لا يمر بنقطة الأصل"]],
          items: [["y = ½x", "o"], ["y = −x", "o"], ["y = 5x", "o"], ["y = 3x + 1", "n"], ["2x + 3y = 6", "n"], ["x − 4y = −16", "n"]]
        }] },
        quiz: [
          Q(["The line with slope 5 and y-intercept −3 is:", "المستقيم الذي ميله ٥ ومقطعه الصادي −٣ هو:"], [["y = 5x − 3", "y = 5x − 3"], ["y = −3x + 5", "y = −3x + 5"], ["y = 5x + 3", "y = 5x + 3"], ["y = 3x − 5", "y = 3x − 5"]],
            ["y = mx + b with m = 5 and b = −3.", "y = mx + b حيث m = 5 وb = −3."], ["The slope rides with x; the intercept stands alone.", "الميل يرافق x والمقطع يقف وحده."]),
          Q(["The line through (−4, 5) and (4, 1) is:", "المستقيم المار بالنقطتين (−4, 5) و(4, 1) هو:"], [["y = −½x + 3", "y = −½x + 3"], ["y = ½x + 3", "y = ½x + 3"], ["y = −2x + 3", "y = −2x + 3"], ["y = −½x + 5", "y = −½x + 5"]],
            ["m = (1 − 5) ÷ (4 + 4) = −1/2; 1 = −2 + b, b = 3.", "m = (1 − 5) ÷ (4 + 4) = −1/2، و1 = −2 + b إذن b = 3."], ["Down 4 over 8 steps: half a step down for every step right.", "هبوط ٤ خلال ٨ خطوات: نصف خطوة لأسفل لكل خطوة يمينًا."]),
          Q(["The line with inclination 135° passing through (0, −4) is:", "المستقيم الذي زاوية ميله 135° ويمر بـ (0, −4) هو:"], [["y = −x − 4", "y = −x − 4"], ["y = x − 4", "y = x − 4"], ["y = −x + 4", "y = −x + 4"], ["y = −4x", "y = −4x"]],
            ["m = tan 135° = −1 and b = −4: y = −x − 4.", "m = ظا 135° = −1 وb = −4: y = −x − 4."], ["135° slopes down; (0, −4) gives the intercept.", "١٣٥° تعني هبوطًا، و(0, −4) تعطي المقطع."]),
          Q(["The slope of the line 2x + 3y = 6 is:", "ميل المستقيم 2x + 3y = 6 هو:"], [["−2/3", "−2/3"], ["2/3", "2/3"], ["−3/2", "−3/2"], ["2", "2"]],
            ["Slope = −(x-coefficient) ÷ (y-coefficient) = −2/3. (y = −2/3 x + 2.)", "الميل = −معامل x ÷ معامل y = −2/3 (y = −2/3 x + 2)."], ["It joins (3, 0) and (0, 2): down 2 for 3 across.", "يصل بين (3, 0) و(0, 2): هبوط ٢ لكل ٣ أفقيًا."]),
          Q(["The line through the origin perpendicular to y = −2x + 3 is:", "المستقيم المار بنقطة الأصل والعمودي على y = −2x + 3 هو:"], [["y = ½x", "y = ½x"], ["y = −2x", "y = −2x"], ["y = 2x", "y = 2x"], ["y = −½x", "y = −½x"]],
            ["Perpendicular slope = −1 ÷ (−2) = 1/2, and through the origin b = 0.", "الميل العمودي = −1 ÷ (−2) = 1/2، ويمر بالأصل إذن b = 0."], ["Flip −2 and change the sign: +1/2.", "اقلب −٢ وغيّر الإشارة: +١/٢."]),
          Q(["A car's distance is d = 80t + 100 (km, hours). Its distance after 3 hours is:", "مسافة سيارة d = 80t + 100 (كم، ساعة). مسافتها بعد ٣ ساعات:"], [["340 km", "340 كم"], ["300 km", "300 كم"], ["240 km", "240 كم"], ["420 km", "420 كم"]],
            ["d = 80 × 3 + 100 = 340 km. (The line through (0, 100) and (5, 500) has slope 80 = speed.)", "d = 80 × 3 + 100 = 340 كم (المستقيم المار بـ (0, 100) و(5, 500) ميله ٨٠ = السرعة)."], ["Start 100 km out, then add 80 km each hour.", "تبدأ على بعد ١٠٠ كم ثم تضيف ٨٠ كم كل ساعة."]),
          Q(["Sales were 800 thousand in 2020 (x = 0) and grow by 40 thousand a year. The equation is:", "المبيعات ٨٠٠ ألف في ٢٠٢٠ (x = 0) وتزيد ٤٠ ألفًا كل عام. المعادلة:"], [["y = 40x + 800", "y = 40x + 800"], ["y = 800x + 40", "y = 800x + 40"], ["y = 40x", "y = 40x"], ["y = 840x", "y = 840x"]],
            ["Slope = growth per year = 40, y-intercept = start value = 800.", "الميل = الزيادة السنوية = 40، والمقطع الصادي = قيمة البداية = 800."], ["Mina's shop: start at 800, climb 40 each year.", "محل مينا: يبدأ عند ٨٠٠ ويصعد ٤٠ كل عام."]),
          Q(["The standard form of the line through (−4, 3) perpendicular to 4x + y + 1 = 0 is:", "الصورة العامة للمستقيم المار بـ (−4, 3) والعمودي على 4x + y + 1 = 0 هي:"], [["x − 4y = −16", "x − 4y = −16"], ["4x + y = −13", "4x + y = −13"], ["x + 4y = 8", "x + 4y = 8"], ["x − 4y = 16", "x − 4y = 16"]],
            ["Given slope −4, so m = 1/4: y − 3 = ¼(x + 4), 4y − 12 = x + 4, x − 4y = −16.", "الميل المعطى −4 إذن m = 1/4: y − 3 = ¼(x + 4) أي 4y − 12 = x + 4 ومنها x − 4y = −16."], ["Check with the point: −4 − 12 = −16 ✓.", "تحقق بالنقطة: −4 − 12 = −16 ✓."])
        ]
      }
    ]
  });

  /* ======================= UNIT 4 - STATISTICS ======================= */
  U.push({
    id: "mprep3u4", num: 4, icon: "📊", color: "purple",
    title: { en: "Statistics", ar: "الإحصاء" },
    lessons: [
      {
        id: "mprep3u4l1", icon: "😴", page: 96,
        title: { en: "Measures of Dispersion", ar: "مقاييس التشتت" },
        idea: {
          official: {
            en: ["Mean, median and mode tell us the centre. Measures of dispersion tell us how spread out the values are around it. Groups 33, 33, 33, 27, 24 and 43, 35, 33, 33, 6 both have mean 30, median 33 and mode 33, yet the second is far more spread out.",
              "Range R = greatest value − smallest value. For 48, 61, 65, 52, 38, 64, 66, 64: " + eq("R = 66 − 38 = 28") + ". It is simple but affected by extreme values.",
              "Interquartile range " + eq("IQR = Q₃ − Q₁") + ", the range of the middle half. For 5, 6, 9, 10, 12, 16, 18, 19, 20, 23, 23: Q₁ = 9, Q₃ = 20, IQR = 11.",
              "Standard deviation " + eq("σ = √(Σ(x − x̄)² ÷ n)") + ": the most accurate and widely used measure. For 13, 15, 17, 18, 12: x̄ = 15, " + eq("Σ(x − x̄)² = 26") + ", " + eq("σ = √(26 ÷ 5) ≈ 2.28") + ".",
              "For a frequency table: " + eq("σ = √(Σ(x − x̄)² f ÷ Σf)") + " with " + eq("x̄ = Σ(f·x) ÷ Σf") + " (x = interval centre for intervals). The smaller σ, the more consistent the data."],
            ar: ["الوسط الحسابي والوسيط والمنوال تصف مركز البيانات، أما مقاييس التشتت فتبين مدى انتشار القيم حوله. المجموعتان 33, 33, 33, 27, 24 و43, 35, 33, 33, 6 لكل منهما وسط ٣٠ ووسيط ٣٣ ومنوال ٣٣، ومع ذلك فالثانية أكثر تشتتًا بكثير.",
              "المدى R = أكبر قيمة − أصغر قيمة. للقيم 48, 61, 65, 52, 38, 64, 66, 64: " + eq("R = 66 − 38 = 28") + "، وهو سهل لكنه يتأثر بالقيم المتطرفة.",
              "المدى الربيعي " + eq("IQR = Q₃ − Q₁") + " وهو مدى النصف الأوسط من البيانات. للقيم 5, 6, 9, 10, 12, 16, 18, 19, 20, 23, 23: Q₁ = 9 وQ₃ = 20 وIQR = 11.",
              "الانحراف المعياري " + eq("σ = √(Σ(x − x̄)² ÷ n)") + " وهو أدق مقاييس التشتت وأكثرها استخدامًا. للقيم 13, 15, 17, 18, 12: x̄ = 15 و" + eq("Σ(x − x̄)² = 26") + " و" + eq("σ = √(26 ÷ 5) ≈ 2.28") + ".",
              "للتوزيع التكراري: " + eq("σ = √(Σ(x − x̄)² f ÷ Σf)") + " حيث " + eq("x̄ = Σ(f·x) ÷ Σf") + " (وx مركز الفئة في التوزيع ذي الفئات)، وكلما صغر σ كانت البيانات أكثر تجانسًا."]
          },
          story: {
            en: ["Ahmed records how many hours he slept each night for two weeks.",
              "Both weeks average 8 hours. Is that the whole story? Not at all.",
              "Week 1 swings between 5 and 11 hours; week 2 stays between 7 and 9. The ranges are 6 and 2.",
              "He works out σ for each week: the second week's σ is much smaller.",
              "So the second week was more consistent, and his teacher says regular sleep means better focus in class."],
            ar: ["يسجل أحمد عدد ساعات نومه كل ليلة لمدة أسبوعين.",
              "متوسط كل أسبوع ٨ ساعات. هل هذه هي القصة كلها؟ أبدًا.",
              "في الأسبوع الأول تتأرجح بين ٥ و١١ ساعة، وفي الثاني تبقى بين ٧ و٩، والمديان ٦ و٢.",
              "يحسب σ لكل أسبوع، فيجد انحراف الأسبوع الثاني أصغر بكثير.",
              "إذن كان نومه في الأسبوع الثاني أكثر انتظامًا، ويقول معلمه إن النوم المنتظم يعني تركيزًا أفضل في الفصل."]
          }
        },
        words: [
          ["Dispersion", "التشتت", "How spread out the values are from each other and from the centre.", "مدى تباعد القيم عن بعضها وعن مركزها."],
          ["Range", "المدى", "Greatest value − smallest value.", "أكبر قيمة − أصغر قيمة."],
          ["Interquartile range", "المدى الربيعي", "Q₃ − Q₁: the range of the middle half of the data.", "Q₃ − Q₁: مدى النصف الأوسط من البيانات."],
          ["Standard deviation σ", "الانحراف المعياري σ", "The positive square root of the mean of the squared deviations from the mean.", "الجذر التربيعي الموجب لمتوسط مربعات انحرافات القيم عن وسطها الحسابي."],
          ["Deviation", "الانحراف", "x − x̄: how far a value is from the mean.", "x − x̄: بُعد القيمة عن الوسط الحسابي."],
          ["Consistent (homogeneous)", "متجانس", "Values close together: small range and small σ.", "قيم متقاربة: مدى صغير وانحراف معياري صغير."]
        ],
        lab: { parts: [{ type: "mprep3_spread" }, {
          type: "sort",
          prompt: ["Tap a measure, then tap its family.", "اضغط على المقياس ثم اضغط على نوعه."],
          bins: [["c", "🎯", "Central tendency", "نزعة مركزية"], ["d", "↔️", "Dispersion", "تشتت"]],
          items: [[["Arithmetic mean", "الوسط الحسابي"], "c"], [["Median", "الوسيط"], "c"], [["Mode", "المنوال"], "c"], [["Range", "المدى"], "d"], [["Interquartile range", "المدى الربيعي"], "d"], [["Standard deviation", "الانحراف المعياري"], "d"]]
        }] },
        quiz: [
          Q(["The range of 48, 61, 65, 52, 38, 64, 66, 64 is:", "مدى القيم 48, 61, 65, 52, 38, 64, 66, 64 هو:"], [["28", "28"], ["66", "66"], ["38", "38"], ["26", "26"]],
            ["R = 66 − 38 = 28.", "R = 66 − 38 = 28."], ["Only the two ends matter: the tallest minus the shortest.", "الطرفان فقط هما المهمان: الأكبر ناقص الأصغر."]),
          Q(["The range of 17, 12, 19, k, 18, 15, 11 is 13. Then k =", "مدى القيم 17, 12, 19, k, 18, 15, 11 يساوي ١٣. إذن k ="], [["24 or 6", "24 أو 6"], ["24 only", "24 فقط"], ["6 only", "6 فقط"], ["13", "13"]],
            ["Without k the range is 19 − 11 = 8. k > 19: k − 11 = 13, k = 24. k < 11: 19 − k = 13, k = 6.", "بدون k يكون المدى 19 − 11 = 8. إذا k > 19: k − 11 = 13 ومنها k = 24، وإذا k < 11: 19 − k = 13 ومنها k = 6."], ["k must become a new end, either at the top or at the bottom.", "يجب أن يصبح k طرفًا جديدًا، إما في الأعلى أو في الأسفل."]),
          Q(["The interquartile range of 23, 20, 19, 12, 6, 9, 16, 23, 10, 18, 5 is:", "المدى الربيعي للقيم 23, 20, 19, 12, 6, 9, 16, 23, 10, 18, 5 هو:"], [["11", "11"], ["18", "18"], ["16", "16"], ["14", "14"]],
            ["Ordered: 5, 6, 9, 10, 12, 16, 18, 19, 20, 23, 23. Q₁ = 9, Q₃ = 20, IQR = 20 − 9 = 11.", "بالترتيب: 5, 6, 9, 10, 12, 16, 18, 19, 20, 23, 23، Q₁ = 9 وQ₃ = 20 وIQR = 20 − 9 = 11."], ["Sort first, then take the quarter-way and three-quarter-way values.", "رتّب أولًا ثم خذ القيمتين عند الربع وثلاثة الأرباع."]),
          Q(["The standard deviation of 13, 15, 17, 18, 12 is about:", "الانحراف المعياري للقيم 13, 15, 17, 18, 12 تقريبًا:"], [["2.28", "2.28"], ["5.2", "5.2"], ["15", "15"], ["1.14", "1.14"]],
            ["x̄ = 75 ÷ 5 = 15; squared deviations 4, 0, 4, 9, 9 sum to 26; σ = √(26 ÷ 5) = √5.2 ≈ 2.28.", "x̄ = 75 ÷ 5 = 15، ومربعات الانحرافات 4, 0, 4, 9, 9 مجموعها 26، σ = √(26 ÷ 5) = √5.2 ≈ 2.28."], ["5.2 is the mean of the squares; do not forget the square root.", "٥٫٢ متوسط المربعات، فلا تنس الجذر التربيعي."]),
          Q(["The standard deviation of 7, 6, 13, 11, 8 is about:", "الانحراف المعياري للقيم 7, 6, 13, 11, 8 تقريبًا:"], [["2.61", "2.61"], ["6.8", "6.8"], ["9", "9"], ["3.4", "3.4"]],
            ["x̄ = 45 ÷ 5 = 9; squared deviations 4, 9, 16, 4, 1 sum to 34; σ = √(34 ÷ 5) = √6.8 ≈ 2.61.", "x̄ = 45 ÷ 5 = 9، ومربعات الانحرافات 4, 9, 16, 4, 1 مجموعها 34، σ = √(34 ÷ 5) = √6.8 ≈ 2.61."], ["Mean, deviations, squares, average, square root: five steps.", "الوسط، فالانحرافات، فالمربعات، فالمتوسط، فالجذر: خمس خطوات."]),
          Q(["A smaller standard deviation means:", "الانحراف المعياري الأصغر يعني:"], [["The values are closer together (more consistent)", "القيم أكثر تقاربًا (أكثر تجانسًا)"], ["The values are more spread out", "القيم أكثر تشتتًا"], ["The mean is larger", "الوسط الحسابي أكبر"], ["There are more values", "عدد القيم أكبر"]],
            ["σ measures spread around the mean: small σ means homogeneous data.", "σ يقيس الانتشار حول الوسط: σ الصغير يعني بيانات متجانسة."], ["Ahmed's regular week had the small σ.", "أسبوع أحمد المنتظم كان انحرافه صغيرًا."]),
          Q(["If all the values in a set are equal, the standard deviation is:", "إذا كانت كل القيم متساوية فإن الانحراف المعياري:"], [["0", "0"], ["1", "1"], ["The mean", "الوسط الحسابي"], ["Undefined", "غير معرّف"]],
            ["Every deviation x − x̄ is 0, so σ = 0: no dispersion at all.", "كل انحراف x − x̄ يساوي صفرًا، إذن σ = 0: لا تشتت على الإطلاق."], ["Nobody stands away from the centre.", "لا أحد يبتعد عن المركز."]),
          Q(["Group 1: 33, 33, 33, 27, 24. Group 2: 43, 35, 33, 33, 6. Which is more consistent?", "المجموعة ١: 33, 33, 33, 27, 24، والمجموعة ٢: 43, 35, 33, 33, 6. أيهما أكثر تجانسًا؟"], [["Group 1: range 9 against 37", "المجموعة ١: مداها ٩ مقابل ٣٧"], ["Group 2: range 37", "المجموعة ٢: مداها ٣٧"], ["Both: they have the same mean 30", "كلتاهما: الوسط نفسه ٣٠"], ["Group 2: it has the larger maximum", "المجموعة ٢: أكبر قيمة فيها أكبر"]],
            ["Same mean, median and mode, but R₁ = 33 − 24 = 9 and R₂ = 43 − 6 = 37: group 1 is more consistent.", "الوسط والوسيط والمنوال واحد، لكن R₁ = 33 − 24 = 9 وR₂ = 43 − 6 = 37: المجموعة الأولى أكثر تجانسًا."], ["Central measures alone could not tell them apart.", "مقاييس النزعة المركزية وحدها لم تفرّق بينهما."])
        ]
      }
    ]
  });
})();
/* ---------- Prep 3 maths simulations (part A): powers, exponential equations, parabola, zeros, rational functions, common domain, fraction operations ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, esc = E.esc, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  var SUP = "⁻⁰¹²³⁴⁵⁶⁷⁸⁹";
  function sup(v) { return String(v).replace(/[-0-9]/g, function (ch) { return SUP.charAt(ch === "-" ? 0 : +ch + 1); }); }
  function fm(x, d) { d = d == null ? 2 : d; var p = Math.pow(10, d), r = Math.round(x * p) / p; if (r === 0) r = 0; return (r < 0 ? "−" : "") + String(Math.abs(r)); }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var q = a % b; a = b; b = q; } return a || 1; }
  function frac(p, q) { if (q === 0) return null; if (q < 0) { p = -p; q = -q; } var g = gcd(p, q); p /= g; q /= g; return (p < 0 ? "−" : "") + Math.abs(p) + (q === 1 ? "" : "/" + q); }
  function fixm(h) { return String(h).replace(/(^|[^\w&#;])-(\d)/g, "$1−$2"); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }
  /* polynomial text from coefficients [c0, c1, c2, c3...] (highest power first in the output) */
  function polyTxt(co) {
    var s = "", deg = co.length - 1;
    for (var i = deg; i >= 0; i--) {
      var a = Math.round(co[i] * 1000) / 1000; if (!a) continue;
      var abs = Math.abs(a), body = i === 0 ? fm(abs) : (abs === 1 ? "" : fm(abs)) + "x" + (i > 1 ? sup(i) : "");
      s += s ? (a < 0 ? " − " : " + ") + body : (a < 0 ? "−" : "") + body;
    }
    return s || "0";
  }
  function mulPoly(p, q) { var r = []; for (var i = 0; i < p.length + q.length - 1; i++) r.push(0); p.forEach(function (a, i) { q.forEach(function (b, j) { r[i + j] += a * b; }); }); return r; }
  function setTxt(list) { var seen = {}, a = []; list.forEach(function (v) { var k = fm(v, 2); if (!seen[k]) { seen[k] = 1; a.push(v); } }); a.sort(function (x, y) { return x - y; }); return a.length ? "{" + a.map(function (v) { return fm(v, 2); }).join(", ") + "}" : "∅"; }

  /* coordinate plane with square units that fills the canvas around the view v */
  function pmap(W, H, v) {
    var s = Math.min((W - 16) / (v.x1 - v.x0), (H - 16) / (v.y1 - v.y0)), cx = (v.x0 + v.x1) / 2, cy = (v.y0 + v.y1) / 2;
    var P = { s: s, X: function (x) { return W / 2 + (x - cx) * s; }, Y: function (y) { return H / 2 - (y - cy) * s; }, ix: function (px) { return cx + (px - W / 2) / s; }, iy: function (py) { return cy - (py - H / 2) / s; } };
    P.xa = P.ix(0); P.xb = P.ix(W); P.ya = P.iy(H); P.yb = P.iy(0);
    return P;
  }
  /* make pointer handlers use a fresh plane map (works even when animation frames are throttled) */
  function hookP(S, setP, vw) { var d0 = S.drag; S.drag = function (h) { ["down", "move", "up", "hover"].forEach(function (k) { var f = h[k]; if (f) h[k] = function (p) { setP(pmap(S.W, S.H, vw())); return f(p); }; }); d0(h); }; }
  function plane(c, W, H, C, v, o) {
    o = o || {};
    var P = pmap(W, H, v), s = P.s;
    var lab = s >= 26 ? 1 : s >= 13 ? 2 : 5, g = o.grid || 1, x, y;
    c.lineWidth = 1; c.strokeStyle = C.line; c.globalAlpha = 0.7; c.beginPath();
    for (x = Math.ceil(P.xa / g) * g; x <= P.xb; x += g) { c.moveTo(P.X(x), 0); c.lineTo(P.X(x), H); }
    for (y = Math.ceil(P.ya / g) * g; y <= P.yb; y += g) { c.moveTo(0, P.Y(y)); c.lineTo(W, P.Y(y)); }
    c.stroke(); c.globalAlpha = 1;
    c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(0, P.Y(0)); c.lineTo(W, P.Y(0)); c.moveTo(P.X(0), 0); c.lineTo(P.X(0), H); c.stroke();
    for (x = Math.ceil(P.xa / lab) * lab; x <= P.xb; x += lab) if (x) K.txt(c, n(x), P.X(x), P.Y(0) + 10, { s: 10, c: C.muted, w: 700 });
    for (y = Math.ceil(P.ya / lab) * lab; y <= P.yb; y += lab) if (y) K.txt(c, n(y), P.X(0) - 9, P.Y(y), { s: 10, c: C.muted, w: 700, a: "right" });
    K.txt(c, "x", W - 8, P.Y(0) - 10, { s: 12, c: C.ink }); K.txt(c, "y", P.X(0) + 10, 10, { s: 12, c: C.ink });
    return P;
  }
  function plot(c, P, W, H, f, col, w, dash) {
    c.strokeStyle = col; c.lineWidth = w || 3; c.setLineDash(dash || []); c.beginPath();
    var on = false, py = null;
    for (var px = 0; px <= W; px += 1.5) {
      var y = f(P.ix(px)), Y = P.Y(y);
      if (!isFinite(y) || Math.abs(Y) > 4 * H + 200) { on = false; py = null; continue; }
      if (on && py !== null && Math.abs(Y - py) > H * 1.2) on = false;
      if (on) c.lineTo(px, Y); else { c.moveTo(px, Y); on = true; }
      py = Y;
    }
    c.stroke(); c.setLineDash([]);
  }
  function handle(c, x, y, col, r) { K.dot(c, x, y, (r || 9) + 4, "rgba(0,0,0,.08)"); K.dot(c, x, y, r || 9, col, "#fff"); }
  function sliderRow(host, html) { var d = E.el("div", "sim-ctl"); d.innerHTML = html; host.appendChild(d); return d; }
  L._mp3 = { pmap: pmap, hookP: hookP, sup: sup, fm: fm, gcd: gcd, frac: frac, clamp: clamp, dist: dist, plane: plane, plot: plot, handle: handle, sliderRow: sliderRow, setTxt: setTxt };

  /* =========================================================
     mprep3_power - drag the corner of an n x m grid of factors: (b^m)^n = b^(mn)
     ========================================================= */
  L.mprep3_power = function (host, cfg, done) {
    host.innerHTML = hint(t("Each row is one power bᵐ. Drag the orange corner to change the number of factors in a row (m) and the number of rows (n). Pick the base with the buttons.", "كل صف قوة واحدة bᵐ. اسحب الركن البرتقالي لتغيير عدد العوامل في الصف (m) وعدد الصفوف (n)، واختر الأساس من الأزرار.")) + '<div class="seg" id="pwb"></div>';
    var S = K.make(host, 0.6, 380), b = 2, m = 2, nn = 2, drag = false, seen = {}, pulse = 0;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build (2³)⁴ and see that it equals 2¹².", "كوّن (2³)⁴ ولاحظ أنها تساوي 2¹²."), t("Swap rows and columns with the same base: (bᵐ)ⁿ = (bⁿ)ᵐ.", "بدّل الصفوف والأعمدة مع الأساس نفسه: (bᵐ)ⁿ = (bⁿ)ᵐ."), t("Make 3⁶ = 729 using at least 2 rows and 2 columns.", "كوّن 3⁶ = 729 باستخدام صفين وعمودين على الأقل.")], done);
    K.seg(host, "#pwb", [["2", "2"], ["3", "3"], ["5", "5"], ["10", "10"]], "2", function (v) { b = +v; upd(); });
    function big(e) { var v = Math.pow(b, e); if (v < 1e15) return n(v); var k = Math.floor(e * Math.log10(b)); return "≈ " + fm(v / Math.pow(10, k), 2) + " × 10" + sup(k); }
    function geo() { var W = S.W, H = S.H, gw = W * (W < 560 ? 0.62 : 0.5), ts = Math.min((gw - 30) / 6, (H - 40) / 5.4); return { gx: 26, gy: 22, ts: ts }; }
    function upd() {
      var e = m * nn, rows = [];
      for (var i = 0; i < Math.min(nn, 3); i++) rows.push(b + sup(m));
      out.innerHTML = fixm("<span>" + eq("(" + b + sup(m) + ")" + sup(nn) + " = " + rows.join(" × ") + (nn > 3 ? " × … (" + nn + " " + t("times", "مرات") + ")" : "")) + "</span><span>" + eq("= " + b + sup(m + "×" + nn).replace("×", "ˣ") + " = " + b + sup(e) + " = " + big(e).replace(/<[^>]*>/g, "")) + "</span><span class=\"sub\">" + t("Multiply the exponents: ", "اضرب الأسين: ") + eq(m + " × " + nn + " = " + e) + "</span>");
      var key = b + "|" + m + "|" + nn;
      if (b === 2 && m === 3 && nn === 4) tick(0);
      if (m !== nn && seen[b + "|" + nn + "|" + m]) { tick(1); E.speak(t("Same value: the exponents just swap places.", "القيمة نفسها: الأسان تبادلا مكانيهما فقط.")); }
      if (b === 3 && e === 6 && m > 1 && nn > 1) tick(2);
      seen[key] = 1; pulse = 1;
    }
    S.drag({
      down: function (p) { var g = geo(), hx = g.gx + m * g.ts, hy = g.gy + nn * g.ts; if (dist(p.x, p.y, hx, hy) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = geo(), M = clamp(Math.round((p.x - g.gx) / g.ts), 1, 6), N = clamp(Math.round((p.y - g.gy) / g.ts), 1, 5); if (M !== m || N !== nn) { m = M; nn = N; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); return dist(p.x, p.y, g.gx + m * g.ts, g.gy + nn * g.ts) < 30; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), i, j; c.clearRect(0, 0, W, H); pulse = Math.max(0, pulse - dt * 2);
      for (i = 0; i < 5; i++) for (j = 0; j < 6; j++) { K.rr(c, g.gx + j * g.ts + 2, g.gy + i * g.ts + 2, g.ts - 4, g.ts - 4, 5); c.strokeStyle = C.line; c.lineWidth = 1; c.setLineDash([3, 3]); c.stroke(); c.setLineDash([]); }
      var cols = ["#2563eb", "#16a34a", "#9333ea", "#dc2626", "#0891b2"];
      for (i = 0; i < nn; i++) {
        K.rr(c, g.gx - 2, g.gy + i * g.ts, m * g.ts + 4, g.ts, 8); c.strokeStyle = cols[i]; c.lineWidth = 2; c.stroke();
        K.txt(c, b + sup(m), g.gx - 14, g.gy + i * g.ts + g.ts / 2, { s: 10, c: cols[i] });
        for (j = 0; j < m; j++) { K.rr(c, g.gx + j * g.ts + 3, g.gy + i * g.ts + 3, g.ts - 6, g.ts - 6, 5); c.fillStyle = cols[i]; c.globalAlpha = 0.18; c.fill(); c.globalAlpha = 1; K.txt(c, String(b), g.gx + j * g.ts + g.ts / 2, g.gy + i * g.ts + g.ts / 2, { s: Math.min(16, g.ts * 0.45), c: C.ink }); }
      }
      K.txt(c, "m = " + n(m), g.gx + m * g.ts / 2, g.gy - 11, { s: 11, c: C.muted });
      K.txt(c, "n = " + n(nn), g.gx + m * g.ts + 22, g.gy + nn * g.ts / 2, { s: 11, c: C.muted, a: "left" });
      handle(c, g.gx + m * g.ts, g.gy + nn * g.ts, "#f97316", 10 + pulse * 3);
      var rx = g.gx + 6 * g.ts + (W - g.gx - 6 * g.ts) / 2 + 6, fs = Math.min(30, (W - g.gx - 6 * g.ts) / 6);
      K.txt(c, "(" + b + sup(m) + ")" + sup(nn), rx, H * 0.26, { s: fs, c: C.ink });
      K.txt(c, "= " + b + sup(m * nn), rx, H * 0.46, { s: fs, c: "#f97316" });
      K.txt(c, n(m * nn) + " " + t("factors of", "عاملًا من") + " " + b, rx, H * 0.62, { s: 12, c: C.muted });
      var bv = big(m * nn); K.txt(c, "= " + bv, rx, H * 0.78, { s: bv.length > 12 ? 12 : 16, c: C.ink });
    });
  };

  /* =========================================================
     mprep3_expeq - balance scale: drag x until b^(x+s) balances the right side
     ========================================================= */
  L.mprep3_expeq = function (host, cfg, done) {
    var EQS = [
      { b: 2, s: 0, k: 10, lt: "2ˣ", rt: "1024", rw: "2¹⁰" },
      { b: 3, s: 1, k: 4, lt: "3ˣ⁺¹", rt: "81", rw: "3⁴" },
      { b: 2, s: -7, k: -5, lt: "2ˣ⁻⁷", rt: "1/32", rw: "2⁻⁵" }
    ];
    host.innerHTML = hint(t("Pick an equation. Drag the x marker on the exponent line (or use the slider) until the two pans balance.", "اختر معادلة، واسحب علامة x على خط الأسس (أو استخدم المنزلق) حتى تتوازن الكفتان.")) + '<div class="seg" id="exq"></div>';
    var S = K.make(host, 0.6, 380), qi = 0, x = 0, tilt = 0, drag = false, grow = 0;
    var ctl = sliderRow(host, L._slider("x", -6, 12, 1, 0, "")), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Solve 2ˣ = 1024: how many hours for one bacterium to become 1024?", "حل 2ˣ = 1024: بعد كم ساعة تصبح البكتيريا ١٠٢٤؟"), t("Solve 3ˣ⁺¹ = 81.", "حل 3ˣ⁺¹ = 81."), t("Solve 2ˣ⁻⁷ = 1/32 (a negative exponent!).", "حل 2ˣ⁻⁷ = 1/32 (أس سالب!).")], done);
    K.seg(host, "#exq", EQS.map(function (q, i) { return [String(i), '<span dir="ltr">' + q.lt + " = " + q.rt + "</span>"]; }), "0", function (v) { qi = +v; x = 0; inp.value = 0; upd(); });
    function upd() {
      var q = EQS[qi], e = x + q.s, ok = e === q.k; slv.textContent = n(x);
      var lv = Math.pow(q.b, e), ls = lv >= 1 ? n(lv) : "1/" + n(Math.round(1 / lv));
      out.innerHTML = fixm("<span>" + eq(q.lt + " = " + q.rt) + " → " + eq(q.lt + " = " + q.rw) + " · " + eq("x = " + x) + "</span>" +
        "<span>" + t("Left pan: ", "الكفة اليسرى: ") + eq(q.b + sup(e) + " = " + ls) + " · " + t("Right pan: ", "الكفة اليمنى: ") + eq(q.rw + " = " + q.rt) + "</span>" +
        (ok ? '<b class="ok-t">✔ ' + t("Balanced! Same base, so the exponents are equal: ", "توازن! الأساس نفسه، إذن الأسان متساويان: ") + eq(e + " = " + q.k) + " → " + eq("x = " + x) + "</b>" : '<span class="sub">' + t("Exponents: ", "الأسان: ") + eq(e + (e < q.k ? " < " : " > ") + q.k) + "</span>"));
      if (ok) { tick(qi); E.speak(t("Balanced. x equals ", "توازن. x تساوي ") + x); }
      grow = 0;
    }
    inp.oninput = function () { x = +inp.value; upd(); };
    function lineGeo() { var W = S.W, H = S.H; return { x0: 30, x1: W - 30, y: H - 26, min: -6, max: 12 }; }
    function lx(g, v) { return g.x0 + (v - g.min) / (g.max - g.min) * (g.x1 - g.x0); }
    S.drag({
      down: function (p) { var g = lineGeo(); if (Math.abs(p.y - g.y) < 30 && Math.abs(p.x - lx(g, x)) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var g = lineGeo(), v = clamp(Math.round(g.min + (p.x - g.x0) / (g.x1 - g.x0) * (g.max - g.min)), g.min, g.max); if (v !== x) { x = v; inp.value = v; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { var g = lineGeo(); return Math.abs(p.y - g.y) < 30 && Math.abs(p.x - lx(g, x)) < 30; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, q = EQS[qi], e = x + q.s, g = lineGeo(), i;
      c.clearRect(0, 0, W, H); grow = Math.min(1, grow + dt * 1.5);
      var target = clamp((e - q.k) * 0.06, -0.32, 0.32); tilt += (target - tilt) * Math.min(1, dt * 6);
      var cx = W / 2, top = H * 0.16, arm = Math.min(W * 0.32, 220);
      c.fillStyle = C.muted; c.fillRect(cx - 4, top, 8, H * 0.5); c.fillRect(cx - 40, top + H * 0.5, 80, 6);
      var lxp = cx - arm * Math.cos(tilt), lyp = top + arm * Math.sin(tilt), rxp = cx + arm * Math.cos(tilt), ryp = top - arm * Math.sin(tilt);
      c.strokeStyle = C.ink; c.lineWidth = 5; c.beginPath(); c.moveTo(lxp, lyp); c.lineTo(rxp, ryp); c.stroke(); K.dot(c, cx, top, 7, "#f97316");
      [[lxp, lyp, q.b + sup(e), "#2563eb"], [rxp, ryp, q.rw, "#16a34a"]].forEach(function (pn) {
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(pn[0], pn[1]); c.lineTo(pn[0] - 34, pn[1] + 46); c.moveTo(pn[0], pn[1]); c.lineTo(pn[0] + 34, pn[1] + 46); c.stroke();
        c.fillStyle = C.card; c.strokeStyle = pn[3]; c.lineWidth = 3; c.beginPath(); c.ellipse(pn[0], pn[1] + 48, 46, 9, 0, 0, Math.PI * 2); c.fill(); c.stroke();
        K.rr(c, pn[0] - 34, pn[1] + 14, 68, 28, 7); c.fillStyle = pn[3]; c.fill(); K.txt(c, pn[2], pn[0], pn[1] + 28, { s: 15, c: "#fff" });
      });
      if (e === q.k) K.txt(c, "⚖️ " + t("Balanced", "متوازن"), cx, top - 14, { s: 13, c: "#16a34a" });
      if (qi === 0) {
        var cnt = Math.min(1024, Math.pow(2, Math.max(0, x))), side = 32, cs = Math.min(3.2, (W * 0.2) / side), bx = W - side * cs - 14, by = 12;
        c.fillStyle = "#16a34a"; var shown = Math.floor(cnt * grow);
        for (i = 0; i < shown; i++) c.fillRect(bx + (i % side) * cs, by + Math.floor(i / side) * cs, cs * 0.8, cs * 0.8);
        K.txt(c, "🦠 " + n(Math.min(cnt, 1024)), bx + side * cs / 2, by + side * cs + 10, { s: 11, c: C.muted });
      }
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, g.y); c.lineTo(g.x1, g.y); c.stroke();
      for (i = g.min; i <= g.max; i++) { var tx = lx(g, i); c.fillStyle = C.muted; c.fillRect(tx - 0.5, g.y - 4, 1, 8); if (i % 2 === 0) K.txt(c, n(i), tx, g.y + 13, { s: 9, c: C.muted }); }
      var kx = lx(g, q.k - q.s); K.txt(c, "▼", kx, g.y - 12, { s: 10, c: "#16a34a" });
      handle(c, lx(g, x), g.y, "#2563eb", 9); K.txt(c, "x", lx(g, x), g.y - 18, { s: 12, c: "#2563eb" });
    });
  };

  /* =========================================================
     mprep3_parabola - sliders a, b, c + drag the vertex; axis, vertex, zeros, y-intercept live
     ========================================================= */
  L.mprep3_parabola = function (host, cfg, done) {
    host.innerHTML = hint(t("Move the sliders for a, b and c, or drag the orange vertex. Watch the axis of symmetry, the zeros and the maximum or minimum value.", "حرّك منزلقات a وb وc أو اسحب الرأس البرتقالي، وراقب محور التماثل والأصفار والقيمة العظمى أو الصغرى."));
    var S = K.make(host, 0.66, 420), a = 1, b = 0, c0 = -4, drag = false;
    var ctl = sliderRow(host, L._slider("a", -3, 3, 0.5, a, "") + L._slider("b", -12, 12, 1, b, "") + L._slider("c", -12, 12, 0.5, c0, ""));
    var ins = ctl.querySelectorAll("input"), slv = ctl.querySelectorAll(".slv");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Draw the book's f(x) = x² − 2x − 3 and find its minimum value.", "ارسم دالة الكتاب f(x) = x² − 2x − 3 وأوجد قيمتها الصغرى."), t("Make a curve that opens downward with maximum value 4.", "كوّن منحنى مفتوحًا لأسفل قيمته العظمى ٤."), t("Make f(x) = 5 − 2(x + 1)²: a = −2 and vertex (−1, 5).", "كوّن f(x) = 5 − 2(x + 1)²: a = −2 والرأس (−1, 5).")], done);
    function V() { var h = -b / (2 * a); return { h: h, k: a * h * h + b * h + c0 }; }
    function f(x) { return a * x * x + b * x + c0; }
    function upd() {
      slv[0].textContent = fm(a); slv[1].textContent = fm(b); slv[2].textContent = fm(c0);
      var v = V(), d = b * b - 4 * a * c0, z = d < 0 ? [] : [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)];
      var hTxt = v.h === 0 ? "x²" : "(x " + (v.h > 0 ? "− " + fm(v.h) : "+ " + fm(-v.h)) + ")²";
      out.innerHTML = fixm("<span>" + eq("f(x) = " + polyTxt([c0, b, a])) + " = " + eq((a === 1 ? "" : a === -1 ? "−" : fm(a)) + hTxt + (v.k ? (v.k > 0 ? " + " : " − ") + fm(Math.abs(v.k)) : "")) + "</span>" +
        "<span>" + t("Vertex ", "الرأس ") + eq("x = −b ÷ 2a = " + fm(v.h) + ", (" + fm(v.h) + ", " + fm(v.k) + ")") + " · " + t("axis ", "محور التماثل ") + eq("x = " + fm(v.h)) + " · " + t("y-intercept ", "المقطع الصادي ") + eq("(0, " + fm(c0) + ")") + "</span>" +
        "<span>" + (a > 0 ? t("a > 0: opens upward, minimum value ", "a > 0: مفتوح لأعلى، القيمة الصغرى ") : t("a < 0: opens downward, maximum value ", "a < 0: مفتوح لأسفل، القيمة العظمى ")) + eq(fm(v.k)) + " · " + t("zeros ", "الأصفار ") + eq(setTxt(z)) + "</span>");
      if (a === 1 && b === -2 && c0 === -3) tick(0);
      if (a < 0 && Math.abs(v.k - 4) < 1e-9) tick(1);
      if (a === -2 && Math.abs(v.h + 1) < 1e-9 && Math.abs(v.k - 5) < 1e-9) tick(2);
    }
    ins[0].oninput = function () { a = +ins[0].value; if (a === 0) { a = 0.5; ins[0].value = 0.5; } upd(); };
    ins[1].oninput = function () { b = +ins[1].value; upd(); };
    ins[2].oninput = function () { c0 = +ins[2].value; upd(); };
    var P = null, VW = function () { return { x0: -7, x1: 7, y0: -10, y1: 10 }; };
    hookP(S, function (q) { P = q; }, VW);
    S.drag({
      down: function (p) { if (!P) return false; var v = V(); if (dist(p.x, p.y, P.X(v.h), P.Y(v.k)) < 26) { drag = true; return true; } return false; },
      move: function (p) {
        if (!drag || !P) return;
        var h = clamp(Math.round(P.ix(p.x)), -6, 6), k = clamp(Math.round(P.iy(p.y)), -10, 10), nb = -2 * a * h, nc = a * h * h + k;
        if (Math.abs(nb) > 12 || Math.abs(nc) > 12) return;
        if (nb !== b || nc !== c0) { b = nb; c0 = nc; ins[1].value = b; ins[2].value = c0; upd(); }
      },
      up: function () { drag = false; },
      hover: function (p) { if (!P) return false; var v = V(); return dist(p.x, p.y, P.X(v.h), P.Y(v.k)) < 26; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H);
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -10, y1: 10 });
      var v = V();
      c.strokeStyle = "#9333ea"; c.setLineDash([6, 5]); c.lineWidth = 2; c.beginPath(); c.moveTo(P.X(v.h), 0); c.lineTo(P.X(v.h), H); c.stroke(); c.setLineDash([]);
      plot(c, P, W, H, f, "#2563eb", 3.5);
      var d = b * b - 4 * a * c0;
      if (d >= 0) [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)].forEach(function (z) { K.dot(c, P.X(z), P.Y(0), 6, "#16a34a", "#fff"); });
      K.dot(c, P.X(0), P.Y(c0), 6, "#0891b2", "#fff");
      handle(c, P.X(v.h), P.Y(v.k), "#f97316", 9);
      K.txt(c, "(" + fm(v.h) + ", " + fm(v.k) + ")", P.X(v.h) + 14, P.Y(v.k) + (a > 0 ? 16 : -16), { s: 12, c: "#f97316", a: "left" });
    });
  };

  /* =========================================================
     mprep3_zeros - drag the factor roots on the x-axis, shift the curve up/down; live zero set
     ========================================================= */
  L.mprep3_zeros = function (host, cfg, done) {
    host.innerHTML = hint(t("f(x) = (x − r₁)(x − r₂)... + k. Drag the purple roots along the x-axis and move k. The green dots are the real zeros: where the curve meets the x-axis.", "f(x) = (x − r₁)(x − r₂)... + k. اسحب الجذور البنفسجية على محور السينات وحرّك k، والنقاط الخضراء هي الأصفار الحقيقية: حيث يقطع المنحنى محور السينات.")) + '<div class="seg" id="zdg"></div>';
    var S = K.make(host, 0.64, 400), deg = 2, R = [-2, 3, 0], k = 0, dragI = -1;
    var ctl = sliderRow(host, L._slider("k", -12, 12, 1, 0, "")), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build the book's f(x) = x³ + 2x² − 15x: zeros {−5, 0, 3}.", "كوّن دالة الكتاب f(x) = x³ + 2x² − 15x: أصفارها {−5, 0, 3}."), t("Build p(x) = x² − 25: zeros {−5, 5}.", "كوّن p(x) = x² − 25: أصفارها {−5, 5}."), t("Make a quadratic whose set of zeros is ∅, like 3x² + 12.", "كوّن دالة تربيعية مجموعة أصفارها ∅ مثل 3x² + 12.")], done);
    K.seg(host, "#zdg", [["1", t("Degree 1", "الدرجة الأولى")], ["2", t("Degree 2", "الدرجة الثانية")], ["3", t("Degree 3", "الدرجة الثالثة")]], "2", function (v) { deg = +v; upd(); });
    function coeffs() { var p = [1]; for (var i = 0; i < deg; i++) p = mulPoly(p, [-R[i], 1]); p[0] += k; return p; }
    function f(x) { var v = 1; for (var i = 0; i < deg; i++) v *= x - R[i]; return v + k; }
    function zeros() {
      if (k === 0) return R.slice(0, deg);
      var z = [], step = 0.01, x0 = -12, f0 = f(x0);
      for (var x = x0 + step; x <= 12; x += step) {
        var f1 = f(x);
        if (Math.abs(f1) < 1e-9) z.push(Math.round(x * 100) / 100);
        else if (f0 * f1 < 0 && Math.abs(f0) > 1e-9) { var lo = x - step, hi = x; for (var j = 0; j < 40; j++) { var md = (lo + hi) / 2; if (f(lo) * f(md) <= 0) hi = md; else lo = md; } z.push((lo + hi) / 2); }
        f0 = f1;
      }
      return z;
    }
    function upd() {
      slv.textContent = n(k);
      var z = zeros(), zs = setTxt(z), co = coeffs(), sorted = R.slice(0, deg).sort(function (p, q) { return p - q; }).join(",");
      var fac = R.slice(0, deg).sort(function (p, q) { return (p === 0 ? 0 : 1) - (q === 0 ? 0 : 1); }).map(function (r) { return r === 0 ? "x" : "(x " + (r > 0 ? "− " + r : "+ " + (-r)) + ")"; }).join("");
      out.innerHTML = fixm("<span>" + eq("f(x) = " + fac + (k ? (k > 0 ? " + " : " − ") + Math.abs(k) : "")) + " = " + eq(polyTxt(co)) + "</span><span>" + t("Set of real zeros: ", "مجموعة الأصفار الحقيقية: ") + eq("z(f) = " + zs) + " · " + n(z.length ? zs.split(",").length : 0) + t(" meeting point(s) with the x-axis", " نقطة تقاطع مع محور السينات") + "</span>" +
        (deg === 3 && k !== 0 ? '<span class="sub">' + t("A cubic always meets the x-axis at least once.", "منحنى الدرجة الثالثة يقطع محور السينات مرة على الأقل.") + "</span>" : ""));
      if (deg === 3 && k === 0 && sorted === "-5,0,3") tick(0);
      if (deg === 2 && k === 0 && sorted === "-5,5") tick(1);
      if (deg === 2 && !z.length) { tick(2); }
    }
    inp.oninput = function () { k = +inp.value; upd(); };
    var P = null, VW = function () { return { x0: -7, x1: 7, y0: -(deg === 3 ? 40 : deg === 2 ? 16 : 8), y1: deg === 3 ? 40 : deg === 2 ? 16 : 8 }; };
    hookP(S, function (q) { P = q; }, VW);
    S.drag({
      down: function (p) { if (!P) return false; for (var i = 0; i < deg; i++) if (dist(p.x, p.y, P.X(R[i]), P.Y(0) + 22) < 22) { dragI = i; return true; } return false; },
      move: function (p) { if (dragI < 0 || !P) return; var r = clamp(Math.round(P.ix(p.x)), -6, 6); if (r !== R[dragI]) { R[dragI] = r; upd(); } },
      up: function () { dragI = -1; },
      hover: function (p) { if (!P) return false; for (var i = 0; i < deg; i++) if (dist(p.x, p.y, P.X(R[i]), P.Y(0) + 22) < 22) return true; return false; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i; c.clearRect(0, 0, W, H);
      var ym = deg === 3 ? 40 : deg === 2 ? 16 : 8;
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -ym, y1: ym }, { grid: deg === 3 ? 5 : deg === 2 ? 2 : 1 });
      plot(c, P, W, H, f, "#2563eb", 3.5);
      zeros().forEach(function (z) { K.dot(c, P.X(z), P.Y(0), 7, "#16a34a", "#fff"); });
      for (i = 0; i < deg; i++) {
        var hx = P.X(R[i]), hy = P.Y(0) + 22;
        c.strokeStyle = "#9333ea"; c.setLineDash([2, 3]); c.lineWidth = 1.5; c.beginPath(); c.moveTo(hx, P.Y(0)); c.lineTo(hx, hy); c.stroke(); c.setLineDash([]);
        c.save(); c.translate(hx, hy); c.rotate(Math.PI / 4); c.fillStyle = "#9333ea"; c.fillRect(-8, -8, 16, 16); c.restore();
        K.txt(c, "r" + "₁₂₃".charAt(i), hx, hy + 18, { s: 11, c: "#9333ea" });
      }
    });
  };

  /* =========================================================
     mprep3_rational - domain explorer: drag the probe; holes, asymptotes, zeros
     ========================================================= */
  L.mprep3_rational = function (host, cfg, done) {
    var FN = [
      { tx: "(x² + 2x − 15) ÷ (x² − 5x + 6)", fa: "(x − 3)(x + 5) ÷ (x − 2)(x − 3)", sm: "(x + 5) ÷ (x − 2)", nu: [3, -5], de: [2, 3] },
      { tx: "(x² − 7x + 12) ÷ (x² − x − 6)", fa: "(x − 3)(x − 4) ÷ (x − 3)(x + 2)", sm: "(x − 4) ÷ (x + 2)", nu: [3, 4], de: [3, -2] },
      { tx: "(x² − 2x) ÷ (x² + x − 6)", fa: "x(x − 2) ÷ (x − 2)(x + 3)", sm: "x ÷ (x + 3)", nu: [0, 2], de: [2, -3] }
    ];
    host.innerHTML = hint(t("Choose a function, then drag the orange probe along the x-axis. Find where f is undefined (a wall or a hole) and where f(x) = 0.", "اختر دالة ثم اسحب المسبار البرتقالي على محور السينات، واكتشف أين تكون f غير معرّفة (جدار أو ثقب) وأين f(x) = 0.")) + '<div class="seg" id="rfn"></div>';
    var S = K.make(host, 0.64, 400), fi = 0, px = 1, drag = false;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Put the probe where the denominator is zero and nothing cancels (a dashed wall).", "ضع المسبار حيث يكون المقام صفرًا ولا يُختصر شيء (جدار متقطع)."), t("Put the probe on a hole: a value removed from the domain even though its factor cancels.", "ضع المسبار على ثقب: قيمة مستبعدة من المجال رغم اختصار عاملها."), t("Put the probe on a zero of the function: f(x) = 0.", "ضع المسبار على صفر للدالة: f(x) = 0.")], done);
    K.seg(host, "#rfn", FN.map(function (q, i) { return [String(i), "f" + "₁₂₃".charAt(i)]; }), "0", function (v) { fi = +v; upd(); });
    function F() { return FN[fi]; }
    function raw(x) { var q = F(), a = 1, d = 1; q.nu.forEach(function (r) { a *= x - r; }); q.de.forEach(function (r) { d *= x - r; }); return a / d; }
    function simp(x) { var q = F(), a = 1, d = 1; q.nu.forEach(function (r) { if (q.de.indexOf(r) < 0) a *= x - r; }); q.de.forEach(function (r) { if (q.nu.indexOf(r) < 0) d *= x - r; }); return a / d; }
    function holes() { return F().de.filter(function (r) { return F().nu.indexOf(r) >= 0; }); }
    function walls() { return F().de.filter(function (r) { return F().nu.indexOf(r) < 0; }); }
    function zs() { return F().nu.filter(function (r) { return F().de.indexOf(r) < 0; }); }
    function upd() {
      var q = F(), x = px, inD = q.de.indexOf(x) < 0, val = inD ? simp(x) : null;
      var stat;
      if (!inD && holes().indexOf(x) >= 0) { stat = '<b class="no-t">' + t("Undefined: a hole. The factor (x − " + x + ") cancels, but " + x + " stays out of the domain.", "غير معرّفة: ثقب. العامل (x − " + x + ") يُختصر، لكن " + x + " يبقى خارج المجال.").replace(/− -/g, "+ ") + "</b>"; tick(1); }
      else if (!inD) { stat = '<b class="no-t">' + t("Undefined: the denominator is zero here (division by zero).", "غير معرّفة: المقام يساوي صفرًا هنا (القسمة على صفر).") + "</b>"; tick(0); }
      else { stat = "<span>" + eq("f(" + fm(x) + ") = " + fm(val, 3)) + "</span>"; if (Math.abs(val) < 1e-9) { stat += '<b class="ok-t">✔ ' + t("A zero of f!", "صفر للدالة f!") + "</b>"; tick(2); } }
      out.innerHTML = fixm("<span>" + eq("f(x) = " + q.tx + " = " + q.fa) + "</span><span>" + eq("D = R − " + setTxt(q.de)) + " · " + t("simplest form ", "أبسط صورة ") + eq(q.sm) + " · " + t("zeros ", "الأصفار ") + eq(setTxt(zs())) + "</span>" + stat);
    }
    var P = null, VW = function () { return { x0: -7, x1: 7, y0: -7, y1: 7 }; };
    hookP(S, function (q) { P = q; }, VW);
    S.drag({
      down: function (p) { if (!P) return false; if (Math.abs(p.x - P.X(px)) < 24 && p.y > P.Y(0) - 10) { drag = true; return true; } return false; },
      move: function (p) { if (!drag || !P) return; var v = clamp(Math.round(P.ix(p.x) * 4) / 4, -7, 7); if (Math.abs(v - Math.round(v)) <= 0.25) v = Math.round(v); if (v !== px) { px = v; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { return P && Math.abs(p.x - P.X(px)) < 24 && p.y > P.Y(0) - 10; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H);
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -7, y1: 7 });
      walls().forEach(function (w) { c.strokeStyle = "#dc2626"; c.setLineDash([7, 5]); c.lineWidth = 2; c.beginPath(); c.moveTo(P.X(w), 0); c.lineTo(P.X(w), H); c.stroke(); c.setLineDash([]); K.txt(c, "x = " + n(w), P.X(w) + 4, 12, { s: 11, c: "#dc2626", a: "left" }); });
      plot(c, P, W, H, simp, "#2563eb", 3.5);
      holes().forEach(function (h) { K.dot(c, P.X(h), P.Y(simp(h)), 7, C.card, "#2563eb"); c.strokeStyle = "#2563eb"; c.lineWidth = 2.5; c.beginPath(); c.arc(P.X(h), P.Y(simp(h)), 7, 0, Math.PI * 2); c.stroke(); });
      zs().forEach(function (z) { K.dot(c, P.X(z), P.Y(0), 6, "#16a34a", "#fff"); });
      var inD = F().de.indexOf(px) < 0, v = inD ? simp(px) : null, hx = P.X(px);
      c.strokeStyle = "#f97316"; c.lineWidth = 1.5; c.setLineDash([3, 3]); c.beginPath(); c.moveTo(hx, P.Y(0)); c.lineTo(hx, inD ? clamp(P.Y(v), 0, H) : 0); c.stroke(); c.setLineDash([]);
      if (inD && Math.abs(P.Y(v)) < H * 2) K.dot(c, hx, P.Y(v), 6, "#f97316", "#fff");
      handle(c, hx, Math.min(H - 14, P.Y(0) + 18), "#f97316", 9);
      K.txt(c, inD ? "f = " + fm(v, 2) : t("undefined", "غير معرّفة"), hx, Math.min(H - 14, P.Y(0) + 18) - 20, { s: 11, c: inD ? "#f97316" : "#dc2626" });
    });
  };

  /* =========================================================
     mprep3_common - tap the common domain; then judge whether two functions are equal
     ========================================================= */
  L.mprep3_common = function (host, cfg, done) {
    var PAIRS = [
      null,
      { f: "(x² + 2x) ÷ (x² − 4)", g: "x ÷ (x − 2)", fd: [-2, 2], gd: [2], eqv: false, s: function (x) { return x / (x - 2); } },
      { f: "(x² − 3x) ÷ (x² − 6x + 9)", g: "4x ÷ (4x − 12)", fd: [3], gd: [3], eqv: true, s: function (x) { return x / (x - 3); } }
    ];
    host.innerHTML = hint(t("Part A: tap the bottom line to mark every value excluded from the common domain. Parts B and C: drag the probe, compare f and g, then give your verdict.", "الجزء أ: اضغط على الخط السفلي لتحدد كل قيمة مستبعدة من المجال المشترك. الجزءان ب وج: اسحب المسبار وقارن f وg ثم احكم.")) + '<div class="seg" id="cdm"></div>';
    var S = K.make(host, 0.6, 380), mode = 0, marks = {}, px = 0, drag = false;
    var vb = E.el("div", "btn-row"); vb.innerHTML = '<button type="button" class="btn sm" data-v="1">f = g</button><button type="button" class="btn sm ghost" data-v="0">f ≠ g</button>'; host.appendChild(vb);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Part A: mark the common domain of f (denominator x² − x − 6) and g (denominator x² − 5x + 6).", "الجزء أ: حدد المجال المشترك للدالة f (مقامها x² − x − 6) والدالة g (مقامها x² − 5x + 6)."), t("Part B: decide correctly whether f = g.", "الجزء ب: احكم صحيحًا هل f = g."), t("Part C: decide correctly whether f = g.", "الجزء ج: احكم صحيحًا هل f = g.")], done);
    K.seg(host, "#cdm", [["0", t("A: common domain", "أ: المجال المشترك")], ["1", t("B: equal?", "ب: متساويتان؟")], ["2", t("C: equal?", "ج: متساويتان؟")]], "0", function (v) { mode = +v; px = 0; upd(); });
    var FZ = [-2, 3], GZ = [2, 3], ANS = [-2, 2, 3];
    vb.querySelectorAll("button").forEach(function (bt) {
      bt.onclick = function () {
        if (!mode) return;
        var q = PAIRS[mode], say = bt.dataset.v === "1";
        if (say === q.eqv) { tick(mode); E.speak(t("Correct!", "صحيح!")); out.insertAdjacentHTML("beforeend", '<b class="ok-t">✔ ' + (q.eqv ? t("Equal: same domain and same simplified rule.", "متساويتان: المجال نفسه والقاعدة نفسها بعد الاختصار.") : t("Not equal: the rules match but the domains differ.", "غير متساويتين: القاعدتان متطابقتان لكن المجالين مختلفان.")) + "</b>"); }
        else { E.toast(t("Look again: compare the two domains, not only the rules.", "انظر مرة أخرى: قارن المجالين وليس القاعدتين فقط.")); }
      };
    });
    function upd() {
      vb.style.display = mode ? "" : "none";
      if (!mode) {
        var mk = Object.keys(marks).filter(function (k) { return marks[k]; }).map(Number).sort(function (a, b) { return a - b; });
        out.innerHTML = fixm("<span>" + eq("f: x² − x − 6 = (x − 3)(x + 2) → Z₁ = {−2, 3}") + "</span><span>" + eq("g: x² − 5x + 6 = (x − 2)(x − 3) → Z₂ = {2, 3}") + "</span><span>" + t("Your common domain: ", "مجالك المشترك: ") + eq("R − " + setTxt(mk)) + "</span>");
        if (mk.join(",") === ANS.join(",")) { tick(0); out.insertAdjacentHTML("beforeend", '<b class="ok-t">✔ ' + eq("R − (Z₁ ∪ Z₂) = R − {−2, 2, 3}") + "</b>"); }
        return;
      }
      var q = PAIRS[mode], fv = q.fd.indexOf(px) >= 0 ? null : q.s(px), gv = q.gd.indexOf(px) >= 0 ? null : q.s(px);
      function sv(v) { return v === null ? t("undefined", "غير معرّفة") : fm(v, 3); }
      out.innerHTML = fixm("<span>" + eq("f(x) = " + q.f) + " · " + eq("D_f = R − " + setTxt(q.fd)) + "</span><span>" + eq("g(x) = " + q.g) + " · " + eq("D_g = R − " + setTxt(q.gd)) + "</span><span>" + t("At x = ", "عند x = ") + eq(fm(px)) + ": f = " + eq(sv(fv)) + ", g = " + eq(sv(gv)) + ((fv === null) !== (gv === null) ? ' <b class="no-t">' + t("Different!", "مختلفتان!") + "</b>" : "") + "</span>");
    }
    function lineY(i) { return S.H * (0.22 + i * 0.28); }
    function lx(v) { return 30 + (v + 5) / 10 * (S.W - 60); }
    var P = null, VW = function () { return { x0: -7, x1: 7, y0: -6, y1: 6 }; };
    hookP(S, function (q) { P = q; }, VW);
    S.drag({
      down: function (p) {
        if (!mode) {
          if (Math.abs(p.y - lineY(2)) < 28) { var v = clamp(Math.round((p.x - 30) / (S.W - 60) * 10 - 5), -5, 5); marks[v] = !marks[v]; upd(); }
          return false;
        }
        if (P && Math.abs(p.x - P.X(px)) < 24) { drag = true; return true; } return false;
      },
      move: function (p) { if (!drag || !P) return; var v = clamp(Math.round(P.ix(p.x) * 2) / 2, -6, 6); if (v !== px) { px = v; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { return mode ? P && Math.abs(p.x - P.X(px)) < 24 : Math.abs(p.y - lineY(2)) < 28; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, i, v; c.clearRect(0, 0, W, H);
      if (!mode) {
        var rows = [[t("D of f", "مجال f"), FZ, "#2563eb"], [t("D of g", "مجال g"), GZ, "#16a34a"], [t("Common domain (tap)", "المجال المشترك (اضغط)"), null, "#f97316"]];
        rows.forEach(function (r, ri) {
          var y = lineY(ri); c.strokeStyle = r[2]; c.lineWidth = 4; c.beginPath(); c.moveTo(24, y); c.lineTo(W - 24, y); c.stroke();
          K.txt(c, r[0], 26, y - 18, { s: 12, c: r[2], a: "left" });
          for (v = -5; v <= 5; v++) { c.fillStyle = C.muted; c.fillRect(lx(v) - 0.5, y - 5, 1, 10); K.txt(c, n(v), lx(v), y + 15, { s: 10, c: C.muted }); }
          var ex = r[1] || Object.keys(marks).filter(function (k) { return marks[k]; }).map(Number);
          ex.forEach(function (z) { K.dot(c, lx(z), y, 8, C.card); c.strokeStyle = "#dc2626"; c.lineWidth = 3; c.beginPath(); c.arc(lx(z), y, 8, 0, Math.PI * 2); c.stroke(); });
        });
        return;
      }
      var q = PAIRS[mode];
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -6, y1: 6 });
      var wall = mode === 1 ? 2 : 3; c.strokeStyle = "#dc2626"; c.setLineDash([7, 5]); c.lineWidth = 2; c.beginPath(); c.moveTo(P.X(wall), 0); c.lineTo(P.X(wall), H); c.stroke(); c.setLineDash([]);
      plot(c, P, W, H, q.s, "#2563eb", 6);
      plot(c, P, W, H, q.s, "#f97316", 2.5, [8, 6]);
      q.fd.forEach(function (h) { if (h !== wall) { var y = P.Y(q.s(h)); K.dot(c, P.X(h), y, 7, C.card); c.strokeStyle = "#2563eb"; c.lineWidth = 3; c.beginPath(); c.arc(P.X(h), y, 7, 0, Math.PI * 2); c.stroke(); } });
      q.gd.forEach(function (h) { if (h !== wall) { var y = P.Y(q.s(h)); c.strokeStyle = "#f97316"; c.lineWidth = 2; c.beginPath(); c.arc(P.X(h), y, 10, 0, Math.PI * 2); c.stroke(); } });
      K.txt(c, "— f", 14, 14, { s: 12, c: "#2563eb", a: "left" }); K.txt(c, "- - g", 14, 30, { s: 12, c: "#f97316", a: "left" });
      var hx = P.X(px); c.strokeStyle = C.muted; c.setLineDash([3, 3]); c.lineWidth = 1.5; c.beginPath(); c.moveTo(hx, 0); c.lineTo(hx, H); c.stroke(); c.setLineDash([]);
      handle(c, hx, H - 16, "#9333ea", 9);
    });
  };

  /* =========================================================
     mprep3_fracops - tap matching factors to cancel; flip the divisor; watch the domain
     ========================================================= */
  L.mprep3_fracops = function (host, cfg, done) {
    function T_(tx, key, neg) { return { tx: tx, key: key, neg: !!neg, gone: false }; }
    var PR = [
      { op: "+", F: [{ nu: [T_("(x − 2)", "x-2"), T_("(x + 2)", "x+2")], de: [T_("(x − 3)", "x-3"), T_("(x + 2)", "x+2")] }, { nu: [T_("(x − 1)", "x-1"), T_("(x − 4)", "x-4")], de: [T_("(x − 1)", "x-1"), T_("(x − 3)", "x-3")] }],
        dom: "R − {−2, 1, 3}", res: "(x − 2)/(x − 3) + (x − 4)/(x − 3) = (2x − 6)/(x − 3) = 2(x − 3)/(x − 3) = 2" },
      { op: "×", F: [{ nu: [T_("(x − 2)", "x-2"), T_("(x + 2)", "x+2")], de: [T_("(x + 3)", "x+3"), T_("(x − 2)", "x-2")] }, { nu: [T_("(x + 3)", "x+3")], de: [T_("(x + 2)", "x+2")] }],
        dom: "R − {−3, −2, 2}", res: "= 1" },
      { op: "÷", F: [{ nu: [T_("(x + 1)", "x+1"), T_("(x + 1)", "x+1")], de: [T_("(1 − x)", "x-1", 1), T_("(1 + x)", "x+1")] }, { nu: [T_("(x + 1)", "x+1"), T_("(x + 4)", "x+4")], de: [T_("(x + 4)", "x+4"), T_("(x − 1)", "x-1")] }],
        dom: "R − {−4, −1, 1}", res: "(x − 1)/(1 − x) = −(x − 1)/(x − 1) = −1" }
    ];
    PR.forEach(function (p) { p.flip = false; p.done = false; });
    host.innerHTML = hint(t("Tap a factor on top, then the SAME factor below to cancel it. In the + problem cancel inside each fraction. In the ÷ problem, tap the ÷ sign first to flip the second fraction.", "اضغط على عامل في البسط ثم على العامل نفسه في المقام لاختصارهما. في مسألة الجمع اختصر داخل كل كسر، وفي مسألة القسمة اضغط على علامة ÷ أولًا لقلب الكسر الثاني.")) + '<div class="seg" id="fop"></div>';
    var S = K.make(host, 0.5, 300), pi = 0, sel = null, boxes = [], opBox = null, flash = 0;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Add: cancel everything in (x² − 4)/(x² − x − 6) + (x² − 5x + 4)/(x² − 4x + 3).", "الجمع: اختصر كل شيء في (x² − 4)/(x² − x − 6) + (x² − 5x + 4)/(x² − 4x + 3)."), t("Multiply: cancel everything in (x² − 4)/(x² + x − 6) × (x + 3)/(x + 2).", "الضرب: اختصر كل شيء في (x² − 4)/(x² + x − 6) × (x + 3)/(x + 2)."), t("Divide: flip, then cancel (x + 1)²/(1 − x²) ÷ (x² + 5x + 4)/(x² + 3x − 4).", "القسمة: اقلب ثم اختصر (x + 1)²/(1 − x²) ÷ (x² + 5x + 4)/(x² + 3x − 4).")], done);
    K.seg(host, "#fop", [["0", "+"], ["1", "×"], ["2", "÷"]], "0", function (v) { pi = +v; sel = null; upd(); });
    function pr() { return PR[pi]; }
    function fr(i) { var p = pr(), F = p.F[i]; return (i === 1 && p.flip) ? { nu: F.de, de: F.nu } : F; }
    function canPair(a, b) {
      if (a === b || a.t.gone || b.t.gone || a.t.key !== b.t.key || a.row === b.row) return false;
      var p = pr();
      if (p.op === "+" && a.f !== b.f) return false;
      if (p.op === "÷" && !p.flip) return false;
      return true;
    }
    function left() {
      var all = []; [0, 1].forEach(function (i) { var F = fr(i); F.nu.forEach(function (tt) { all.push({ t: tt, f: i, row: 0 }); }); F.de.forEach(function (tt) { all.push({ t: tt, f: i, row: 1 }); }); });
      for (var i = 0; i < all.length; i++) for (var j = i + 1; j < all.length; j++) if (canPair(all[i], all[j])) return true;
      return false;
    }
    function upd() {
      var p = pr();
      if (!p.done && (p.op !== "÷" || p.flip) && !left()) { p.done = true; tick(pi); E.speak(t("All cancelled!", "تم الاختصار كله!")); }
      out.innerHTML = fixm("<span>" + t("Domain (found before cancelling): ", "المجال (قبل الاختصار): ") + eq(p.dom) + "</span>" +
        (p.op === "÷" && !p.flip ? '<span class="sub">' + t("Division: multiply by the reciprocal. Tap the ÷ sign.", "القسمة: نضرب في المعكوس الضربي. اضغط على علامة ÷.") + "</span>" : "") +
        (p.done ? '<b class="ok-t">✔ ' + eq(p.res) + "</b>" : '<span class="sub">' + t("Keep cancelling common factors.", "تابع اختصار العوامل المشتركة.") + "</span>"));
    }
    S.drag({
      down: function (p) {
        layout();
        if (opBox && p.x > opBox.x - 22 && p.x < opBox.x + 22 && Math.abs(p.y - opBox.y) < 22 && pr().op === "÷" && !pr().flip) { pr().flip = true; pr().op2 = "×"; sel = null; flash = 1; upd(); return false; }
        for (var i = 0; i < boxes.length; i++) {
          var bx = boxes[i];
          if (p.x > bx.x && p.x < bx.x + bx.w && p.y > bx.y && p.y < bx.y + bx.h && !bx.t.gone) {
            if (sel && canPair(sel, bx)) { sel.t.gone = true; bx.t.gone = true; if (sel.t.neg !== bx.t.neg) E.toast(t("(1 − x) = −(x − 1): a factor −1 is left.", "(1 − x) = −(x − 1): يبقى العامل −1.")); sel = null; upd(); }
            else if (sel && sel !== bx) { E.toast(pr().op === "÷" && !pr().flip ? t("Flip the second fraction first: tap ÷.", "اقلب الكسر الثاني أولًا: اضغط على ÷.") : pr().op === "+" && sel.f !== bx.f ? t("When adding, cancel inside one fraction only.", "في الجمع نختصر داخل الكسر الواحد فقط.") : t("Pick the same factor, one on top and one below.", "اختر العامل نفسه، واحدًا في البسط وواحدًا في المقام.")); sel = bx; }
            else sel = bx === sel ? null : bx;
            return false;
          }
        }
        sel = null; return false;
      }
    });
    upd();
    function layout() {
      var W = S.W, H = S.H; boxes = [];
      var tw = W < 520 ? 52 : 70, th = 30, gap = 6;
      var w0 = Math.max(fr(0).nu.length, fr(0).de.length) * (tw + gap), w1 = Math.max(fr(1).nu.length, fr(1).de.length) * (tw + gap);
      var total = w0 + w1 + 60, x0 = (W - total) / 2, cy = H / 2, bars = [];
      [0, 1].forEach(function (i) {
        var F = fr(i), bxw = i ? w1 : w0, fx = i ? x0 + w0 + 60 : x0;
        bars.push([fx, fx + bxw - gap]);
        [F.nu, F.de].forEach(function (row, ri) {
          var rw = row.length * (tw + gap) - gap, rx = fx + (bxw - gap - rw) / 2, ry = ri ? cy + 10 : cy - 10 - th;
          row.forEach(function (tt, k) { boxes.push({ x: rx + k * (tw + gap), y: ry, w: tw, h: th, t: tt, f: i, row: ri }); });
        });
      });
      opBox = { x: x0 + w0 + 27, y: cy };
      return { bars: bars, cy: cy };
    }
    S.loop(function (dt) {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, p = pr(); c.clearRect(0, 0, W, H); flash = Math.max(0, flash - dt * 1.5);
      var lay = layout(), fs = W < 520 ? 11 : 13, cy = lay.cy;
      lay.bars.forEach(function (b) { c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(b[0], cy); c.lineTo(b[1], cy); c.stroke(); });
      boxes.forEach(function (b) {
        var tt = b.t, ri = b.row;
        K.rr(c, b.x, b.y, b.w, b.h, 8);
        var isSel = sel && sel.t === tt;
        c.fillStyle = tt.gone ? C.bg : isSel ? "#fde68a" : (ri ? "rgba(37,99,235,.14)" : "rgba(22,163,74,.14)"); c.fill();
        c.strokeStyle = isSel ? "#f59e0b" : C.line; c.lineWidth = isSel ? 2.5 : 1; c.stroke();
        K.txt(c, tt.tx, b.x + b.w / 2, b.y + b.h / 2, { s: fs, c: tt.gone ? C.muted : C.ink });
        if (tt.gone) { c.strokeStyle = "#dc2626"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(b.x + 4, b.y + b.h - 4); c.lineTo(b.x + b.w - 4, b.y + 4); c.stroke(); }
      });
      var ox = opBox.x;
      var sym = p.op === "÷" && p.flip ? "×" : p.op;
      K.dot(c, ox, cy, 18 + flash * 6, p.op === "÷" && !p.flip ? "#f97316" : C.card, C.line);
      K.txt(c, sym, ox, cy, { s: 20, c: p.op === "÷" && !p.flip ? "#fff" : C.ink });
      if (p.done) K.txt(c, "✔", W - 20, 20, { s: 18, c: "#16a34a" });
    });
  };
})();
/* ---------- Prep 3 maths simulations (part B): similar polygons, shadows, dilation, trig triangle, special angles, slopes, line equation, dispersion ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit, M = L._mp3;
  var pmap = M.pmap, hookP = M.hookP, sup = M.sup, fm = M.fm, gcd = M.gcd, frac = M.frac, clamp = M.clamp, dist = M.dist, plane = M.plane, handle = M.handle, sliderRow = M.sliderRow;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function fixm(h) { return String(h).replace(/(^|[^\w&#;])-(\d)/g, "$1−$2"); }
  function deg(r) { return r * 180 / Math.PI; }
  function rad(d) { return d * Math.PI / 180; }
  function arrowLine(c, x1, y1, x2, y2, col, w) {
    var a = Math.atan2(y2 - y1, x2 - x1); c.strokeStyle = col; c.fillStyle = col; c.lineWidth = w || 2;
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
    c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - 10 * Math.cos(a - 0.4), y2 - 10 * Math.sin(a - 0.4)); c.lineTo(x2 - 10 * Math.cos(a + 0.4), y2 - 10 * Math.sin(a + 0.4)); c.fill();
  }

  /* =========================================================
     mprep3_similar - scale a copy (stays similar) or stretch it (breaks similarity)
     ========================================================= */
  L.mprep3_similar = function (host, cfg, done) {
    var SH = { quad: [[0, 0], [6, 0], [6, 3], [2, 5]], rect: [[0, 0], [6, 0], [6, 4], [0, 4]] };
    host.innerHTML = hint(t("ABCD is fixed. Drag the round orange handle to scale the copy EFGH evenly, or the square purple handle to stretch it sideways. Watch the side ratios and the angles.", "ABCD ثابت. اسحب المقبض البرتقالي المستدير لتكبير النسخة EFGH أو تصغيرها بانتظام، أو المقبض البنفسجي المربع لمطّها أفقيًا، وراقب نسب الأضلاع والزوايا.")) + '<div class="seg" id="sms"></div>';
    var S = K.make(host, 0.56, 380), shape = "quad", s = 1, sx = 1, drag = null;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make EFGH similar to ABCD with similarity ratio ABCD : EFGH = 3/2.", "اجعل EFGH مشابهًا لـ ABCD بنسبة تشابه ABCD : EFGH = 3/2."), t("Make the ratio 1/2 (EFGH twice as big) and compare the perimeters.", "اجعل النسبة 1/2 (EFGH ضعف الأصل) وقارن المحيطين."), t("Rectangles: make all angles 90° but the rectangles NOT similar.", "المستطيلات: اجعل كل الزوايا 90° لكن المستطيلين غير متشابهين.")], done);
    K.seg(host, "#sms", [["quad", t("Quadrilateral", "شكل رباعي")], ["rect", t("Rectangle", "مستطيل")]], "quad", function (v) { shape = v; s = 1; sx = 1; upd(); });
    function pts(k, kx) { return SH[shape].map(function (p) { return [p[0] * k * kx, p[1] * k]; }); }
    function len(a, b) { return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)); }
    function angs(P) { return P.map(function (p, i) { var a = P[(i + 3) % 4], b = P[(i + 1) % 4], v1 = [a[0] - p[0], a[1] - p[1]], v2 = [b[0] - p[0], b[1] - p[1]]; return deg(Math.acos((v1[0] * v2[0] + v1[1] * v2[1]) / (Math.hypot(v1[0], v1[1]) * Math.hypot(v2[0], v2[1])))); }); }
    function geo() { var W = S.W, H = S.H, u = Math.min((W - 70) / 24.5, (H - 46) / 10.5); return { u: u, ox: 16, cx: 16 + 6 * u + 40, by: H - 22 }; }
    function upd() {
      var A = pts(1, 1), B = pts(s, sx), r = [0, 1, 2, 3].map(function (i) { return len(A[i], A[(i + 1) % 4]) / len(B[i], B[(i + 1) % 4]); });
      var aA = angs(A), aB = angs(B), sameAng = aA.every(function (v, i) { return Math.abs(v - aB[i]) < 0.5; }), prop = Math.max.apply(null, r) - Math.min.apply(null, r) < 1e-6, sim = sameAng && prop;
      var pA = 0, pB = 0; for (var i = 0; i < 4; i++) { pA += len(A[i], A[(i + 1) % 4]); pB += len(B[i], B[(i + 1) % 4]); }
      var j = Math.round(s * 6), kTxt = frac(6, j);
      var names = ["AB/EF", "BC/FG", "CD/GH", "DA/HE"];
      out.innerHTML = fixm("<span>" + names.map(function (nm, i) { return eq(nm + " = " + fm(r[i])); }).join(" · ") + "</span><span>" + t("Angles: ", "الزوايا: ") + aB.map(function (v, i) { return eq("ABCD".charAt(i) + " " + fm(aA[i], 0) + "° | " + "EFGH".charAt(i) + " " + fm(v, 0) + "°"); }).join(" ") + "</span><span>" + t("Perimeter ratio ", "نسبة المحيطين ") + eq(fm(pA, 1) + " ÷ " + fm(pB, 1) + " = " + fm(pA / pB)) + "</span>" +
        (sim ? '<b class="ok-t">✔ ' + t("Similar: ", "متشابهان: ") + eq("ABCD ~ EFGH, k = " + kTxt) + "</b>" : '<b class="no-t">✖ ' + (sameAng ? t("Not similar: the angles are equal but the sides are not proportional.", "غير متشابهين: الزوايا متساوية لكن الأضلاع غير متناسبة.") : t("Not similar: the angles changed.", "غير متشابهين: تغيرت الزوايا.")) + "</b>"));
      if (sim && j === 4) tick(0);
      if (sim && j === 12) tick(1);
      if (shape === "rect" && sameAng && !prop) tick(2);
    }
    function hs(g) { var B = pts(s, sx); return { sc: [g.cx + B[2][0] * g.u, g.by - B[2][1] * g.u], st: [g.cx + B[1][0] * g.u, g.by - (B[1][1] + B[2][1]) / 2 * g.u] }; }
    S.drag({
      down: function (p) { var g = geo(), h = hs(g); if (dist(p.x, p.y, h.sc[0], h.sc[1]) < 24) { drag = "sc"; return true; } if (dist(p.x, p.y, h.st[0], h.st[1]) < 24) { drag = "st"; return true; } return false; },
      move: function (p) {
        var g = geo();
        if (drag === "sc") { var v = clamp(Math.round((p.x - g.cx) / (6 * sx * g.u) * 6) / 6, 2 / 6, 2); if (Math.abs(v - s) > 1e-9) { s = v; upd(); } }
        else if (drag === "st") { var w = clamp(Math.round((p.x - g.cx) / (6 * s * g.u) * 4) / 4, 0.5, 1.5); if (w !== sx) { sx = w; upd(); } }
      },
      up: function () { drag = null; },
      hover: function (p) { var g = geo(), h = hs(g); return dist(p.x, p.y, h.sc[0], h.sc[1]) < 24 || dist(p.x, p.y, h.st[0], h.st[1]) < 24; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(); c.clearRect(0, 0, W, H);
      function poly(P, x0, col, lab) {
        c.beginPath(); P.forEach(function (p, i) { var X = x0 + p[0] * g.u, Y = g.by - p[1] * g.u; if (i) c.lineTo(X, Y); else c.moveTo(X, Y); }); c.closePath();
        c.fillStyle = col; c.globalAlpha = 0.18; c.fill(); c.globalAlpha = 1; c.strokeStyle = col; c.lineWidth = 2.5; c.stroke();
        P.forEach(function (p, i) { var X = x0 + p[0] * g.u, Y = g.by - p[1] * g.u, cxm = P.reduce(function (a, q) { return a + q[0]; }, 0) / 4, cym = P.reduce(function (a, q) { return a + q[1]; }, 0) / 4, dx = p[0] - cxm, dy = p[1] - cym, dl = Math.hypot(dx, dy) || 1; K.txt(c, lab.charAt(i), X + dx / dl * 13, Y - dy / dl * 13, { s: 12, c: col }); });
      }
      poly(pts(1, 1), g.ox, "#2563eb", "ABCD");
      poly(pts(s, sx), g.cx, "#f97316", "EFGH");
      var h = hs(g);
      c.fillStyle = "#9333ea"; c.fillRect(h.st[0] - 8, h.st[1] - 8, 16, 16);
      handle(c, h.sc[0], h.sc[1], "#f97316", 9);
    });
  };

  /* =========================================================
     mprep3_simtri - drag the sun; shadows of a student and a flagpole make similar triangles
     ========================================================= */
  L.mprep3_simtri = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the sun to change the shadows. Then drag the purple marker on the flagpole to the height you calculate from the similar triangles.", "اسحب الشمس لتغيير الظلال، ثم اسحب العلامة البنفسجية على السارية إلى الارتفاع الذي تحسبه من المثلثين المتشابهين."));
    var S = K.make(host, 0.58, 380), s1 = 2, g = 1.2, drag = null, HP = 2.56;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make the student's shadow 1.5 m long.", "اجعل طول ظل الطالبة ١٫٥ م."), t("Set the marker to the flagpole's real height (use height ÷ shadow).", "ضع العلامة عند الارتفاع الحقيقي للسارية (استخدم الطول ÷ الظل)."), t("Find the sun position where every shadow equals its object's height.", "اكتشف موضع الشمس الذي يساوي فيه كل ظل طول صاحبه.")], done);
    function alpha() { return Math.atan(1.6 / s1); }
    function geo() { var W = S.W, H = S.H, pm = Math.min((W - 40) / 10, (H - 50) / 4.2), gy = H - 24, xp = 40 + 6.7 * pm; return { pm: pm, gy: gy, xs: 14 + 2.6 * pm, xp: xp, ty: gy - HP * pm, R: Math.max(40, Math.min(W - xp - 24, (gy - HP * pm - 16) / 0.97)) }; }
    function sunPos(G) { var a = alpha(); return [G.xp + G.R * Math.cos(a), G.ty - G.R * Math.sin(a)]; }
    function upd() {
      var s2 = HP * s1 / 1.6, r = 1.6 / s1;
      out.innerHTML = fixm("<span>" + t("Sun angle ", "زاوية الشمس ") + eq(fm(deg(alpha()), 1) + "°") + " · " + t("student shadow ", "ظل الطالبة ") + eq(fm(s1) + " m") + " · " + t("flagpole shadow ", "ظل السارية ") + eq(fm(s2) + " m") + "</span>" +
        "<span>" + t("AA: same sun angle, both vertical (90°), so the triangles are similar: ", "زاويتان: زاوية الشمس نفسها وكلاهما رأسي (90°)، إذن المثلثان متشابهان: ") + eq("h ÷ " + fm(s2) + " = 1.6 ÷ " + fm(s1) + " = " + fm(r, 3)) + "</span>" +
        "<span>" + t("Your marker: ", "علامتك: ") + eq("h = " + fm(g) + " m") + (Math.abs(g - HP) < 0.005 ? ' <b class="ok-t">✔ ' + t("That is the flagpole's height!", "هذا ارتفاع السارية!") + "</b>" : "") + "</span>");
      if (Math.abs(s1 - 1.5) < 1e-9) tick(0);
      if (Math.abs(g - HP) < 0.005) tick(1);
      if (Math.abs(s1 - 1.6) < 1e-9) { tick(2); }
    }
    S.drag({
      down: function (p) { var G = geo(), sp = sunPos(G); if (dist(p.x, p.y, sp[0], sp[1]) < 30) { drag = "sun"; return true; } var my = G.gy - g * G.pm; if (Math.abs(p.y - my) < 18 && Math.abs(p.x - (G.xp + 18)) < 30) { drag = "mk"; return true; } return false; },
      move: function (p) {
        var G = geo();
        if (drag === "sun") { var a = Math.atan2(G.ty - p.y, p.x - G.xp); a = clamp(a, rad(20), rad(75)); var v = clamp(Math.round(1.6 / Math.tan(a) * 20) / 20, 0.8, 2.5); if (v !== s1) { s1 = v; upd(); } }
        else if (drag === "mk") { var h = clamp(Math.round((G.gy - p.y) / G.pm * 25) / 25, 0.4, 3.2); if (Math.abs(h - g) > 1e-9) { g = h; upd(); } }
      },
      up: function () { drag = null; },
      hover: function (p) { var G = geo(), sp = sunPos(G); return dist(p.x, p.y, sp[0], sp[1]) < 30 || (Math.abs(p.y - (G.gy - g * G.pm)) < 18 && Math.abs(p.x - (G.xp + 18)) < 30); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, G = geo(), s2 = HP * s1 / 1.6, sp = sunPos(G); c.clearRect(0, 0, W, H);
      c.strokeStyle = C.line; c.setLineDash([3, 5]); c.lineWidth = 1; c.beginPath(); c.arc(G.xp, G.ty, G.R, -rad(64), -rad(32)); c.stroke(); c.setLineDash([]);
      c.fillStyle = "#a16207"; c.fillRect(0, G.gy, W, 3);
      [[G.xs, 1.6, s1, "#2563eb"], [G.xp, HP, s2, "#16a34a"]].forEach(function (o) {
        var top = G.gy - o[1] * G.pm, tip = o[0] - o[2] * G.pm;
        c.fillStyle = "rgba(100,116,139,.35)"; c.beginPath(); c.moveTo(o[0], G.gy); c.lineTo(o[0], top); c.lineTo(tip, G.gy); c.closePath(); c.fill();
        c.strokeStyle = "#f59e0b"; c.lineWidth = 2; c.setLineDash([6, 4]); var al = alpha(), ex = o[0] === G.xp ? sp[0] : o[0] + 0.9 * G.pm, tr = (ex - tip) / Math.cos(al); c.beginPath(); c.moveTo(tip, G.gy); c.lineTo(ex, G.gy - tr * Math.sin(al)); c.stroke(); c.setLineDash([]);
        c.fillStyle = "#334155"; c.fillRect(tip, G.gy + 3, o[0] - tip, 4);
        K.txt(c, fm(o[2]) + " m", (o[0] + tip) / 2, G.gy + 14, { s: 11, c: C.ink });
        c.strokeStyle = C.ink; c.lineWidth = 1.5; c.strokeRect(o[0] - 9, G.gy - 9, 9, 9);
      });
      var xs = G.xs, top = G.gy - 1.6 * G.pm;
      K.dot(c, xs, top + 0.12 * G.pm, 0.12 * G.pm, "#2563eb"); c.strokeStyle = "#2563eb"; c.lineWidth = 4; c.beginPath(); c.moveTo(xs, top + 0.24 * G.pm); c.lineTo(xs, G.gy - 0.75 * G.pm); c.lineTo(xs - 0.15 * G.pm, G.gy); c.moveTo(xs, G.gy - 0.75 * G.pm); c.lineTo(xs + 0.15 * G.pm, G.gy); c.stroke();
      K.txt(c, "1.6 m", xs + 8, top + 6, { s: 11, c: "#2563eb", a: "left" });
      c.fillStyle = "#64748b"; c.fillRect(G.xp - 3, G.gy - HP * G.pm, 6, HP * G.pm);
      c.fillStyle = "#dc2626"; c.fillRect(G.xp + 3, G.gy - HP * G.pm, 0.5 * G.pm, 0.3 * G.pm);
      K.txt(c, "h = ?", G.xp - 10, G.gy - HP * G.pm - 10, { s: 12, c: "#16a34a", a: "right" });
      var my = G.gy - g * G.pm; c.strokeStyle = "#9333ea"; c.lineWidth = 2; c.beginPath(); c.moveTo(G.xp - 14, my); c.lineTo(G.xp + 30, my); c.stroke();
      c.save(); c.translate(G.xp + 30, my); c.rotate(Math.PI / 4); c.fillStyle = "#9333ea"; c.fillRect(-7, -7, 14, 14); c.restore();
      K.txt(c, fm(g) + " m", G.xp + 42, my, { s: 11, c: "#9333ea", a: "left" });
      K.dot(c, sp[0], sp[1], 22, "rgba(250,204,21,.35)"); K.dot(c, sp[0], sp[1], 15, "#facc15", "#f59e0b");
      K.txt(c, fm(deg(alpha()), 0) + "°", sp[0], sp[1] + 30, { s: 11, c: "#b45309" });
    });
  };

  /* =========================================================
     mprep3_dilation - draggable centre + factor slider; rays, image, coordinates
     ========================================================= */
  L.mprep3_dilation = function (host, cfg, done) {
    var KS = [[1, 4], [1, 3], [1, 2], [2, 3], [1, 1], [3, 2], [2, 1], [5, 2], [3, 1]];
    var TRI = [[1, 3], [2, -1], [5, 0]];
    host.innerHTML = hint(t("Drag the purple centre of dilation M and move the factor k. The orange triangle is the image of △ABC. Follow the rays from M.", "اسحب مركز التمدد البنفسجي M وحرّك المعامل k، والمثلث البرتقالي صورة △ABC. تتبع الأشعة الخارجة من M."));
    var S = K.make(host, 0.66, 420), cen = [-1, 0], ki = 6, drag = false;
    var ctl = sliderRow(host, L._slider("k", 0, 8, 1, ki, "")), inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Centre O(0, 0) and k = 2: get A′(2, 6), B′(4, −2), C′(10, 0).", "المركز O(0, 0) وk = 2: احصل على A′(2, 6) وB′(4, −2) وC′(10, 0)."), t("Make a reduction (0 < k < 1).", "كوّن تصغيرًا (0 < k < 1)."), t("Put the centre on a vertex of △ABC with k ≠ 1: that vertex maps to itself.", "ضع المركز على أحد رؤوس △ABC وk ≠ 1: تكون صورة هذا الرأس هي نفسه.")], done);
    function kv() { return KS[ki][0] / KS[ki][1]; }
    function img(p) { var k = kv(); return [cen[0] + k * (p[0] - cen[0]), cen[1] + k * (p[1] - cen[1])]; }
    function upd() {
      var k = kv(), kt = frac(KS[ki][0], KS[ki][1]); slv.textContent = kt;
      var I = TRI.map(img), atO = !cen[0] && !cen[1];
      out.innerHTML = fixm("<span>" + t("Centre ", "المركز ") + eq("M(" + cen[0] + ", " + cen[1] + ")") + " · " + eq("k = " + kt) + " · " + (k > 1 ? t("enlargement", "تكبير") : k < 1 ? t("reduction", "تصغير") : t("same size", "الحجم نفسه")) + "</span>" +
        "<span>" + (atO ? eq("(x, y) → (" + kt + "x, " + kt + "y)") : eq("P′ = M + k(P − M)")) + "</span><span>" + ["A", "B", "C"].map(function (nm, i) { return eq(nm + "(" + TRI[i][0] + ", " + TRI[i][1] + ") → " + nm + "′(" + fm(I[i][0]) + ", " + fm(I[i][1]) + ")"); }).join(" ") + "</span>" +
        '<span class="sub">' + eq("A′B′ ÷ AB = " + kt) + " · " + t("each image side is parallel to its original side", "كل ضلع في الصورة يوازي ضلعه الأصلي") + "</span>");
      if (atO && ki === 6) tick(0);
      if (k < 1) tick(1);
      if (k !== 1 && TRI.some(function (p) { return p[0] === cen[0] && p[1] === cen[1]; })) tick(2);
    }
    inp.oninput = function () { ki = +inp.value; upd(); };
    var P = null, VW = function () { return { x0: -7, x1: 11, y0: -5, y1: 7 }; };
    hookP(S, function (q) { P = q; }, VW);
    S.drag({
      down: function (p) { if (P && dist(p.x, p.y, P.X(cen[0]), P.Y(cen[1])) < 24) { drag = true; return true; } return false; },
      move: function (p) { if (!drag || !P) return; var x = clamp(Math.round(P.ix(p.x)), -6, 10), y = clamp(Math.round(P.iy(p.y)), -4, 7); if (x !== cen[0] || y !== cen[1]) { cen = [x, y]; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { return P && dist(p.x, p.y, P.X(cen[0]), P.Y(cen[1])) < 24; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H);
      P = plane(c, W, H, C, { x0: -7, x1: 11, y0: -5, y1: 7 });
      var I = TRI.map(img), cx = P.X(cen[0]), cy = P.Y(cen[1]);
      TRI.forEach(function (p, i) { var far = kv() > 1 ? I[i] : p; c.strokeStyle = "#9333ea"; c.globalAlpha = 0.6; c.setLineDash([4, 4]); c.lineWidth = 1.5; c.beginPath(); c.moveTo(cx, cy); c.lineTo(P.X(cen[0] + (far[0] - cen[0]) * 1.15), P.Y(cen[1] + (far[1] - cen[1]) * 1.15)); c.stroke(); c.setLineDash([]); c.globalAlpha = 1; });
      function tri(T, col, lab) {
        c.beginPath(); T.forEach(function (p, i) { if (i) c.lineTo(P.X(p[0]), P.Y(p[1])); else c.moveTo(P.X(p[0]), P.Y(p[1])); }); c.closePath();
        c.fillStyle = col; c.globalAlpha = 0.2; c.fill(); c.globalAlpha = 1; c.strokeStyle = col; c.lineWidth = 2.5; c.stroke();
        T.forEach(function (p, i) { K.dot(c, P.X(p[0]), P.Y(p[1]), 4, col); K.txt(c, "ABC".charAt(i) + lab, P.X(p[0]) + 10, P.Y(p[1]) - 10, { s: 12, c: col }); });
      }
      tri(TRI, "#2563eb", ""); tri(I, "#f97316", "′");
      handle(c, cx, cy, "#9333ea", 9); K.txt(c, "M", cx - 14, cy + 14, { s: 12, c: "#9333ea" });
    });
  };

  /* =========================================================
     mprep3_trig - drag A (adjacent) and C (opposite); sin, cos, tan bars live
     ========================================================= */
  L.mprep3_trig = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the blue corner A left and right, and the green corner C up and down. θ is the angle at A. Watch sin, cos and tan change.", "اسحب الركن الأزرق A يمينًا ويسارًا، والركن الأخضر C لأعلى ولأسفل. θ هي الزاوية عند A، وراقب تغير جا وجتا وظا."));
    var S = K.make(host, 0.58, 380), adj = 4, opp = 3, drag = null;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build the book's triangle with legs 12 and 5: sin θ = 5/13.", "كوّن مثلث الكتاب الذي ضلعا القائمة فيه ١٢ و٥: جا θ = 5/13."), t("Make tan θ = 1. What is θ?", "اجعل ظا θ = 1. ما قيمة θ؟"), t("Make sin θ = 0.6 = 3/5 with a different triangle from the start.", "اجعل جا θ = 0.6 = 3/5 بمثلث مختلف عن مثلث البداية.")], done);
    function hyp() { return Math.sqrt(adj * adj + opp * opp); }
    function hypTxt() { var h2 = adj * adj + opp * opp, h = Math.round(Math.sqrt(h2)); return h * h === h2 ? String(h) : "√" + h2; }
    function geo() { var W = S.W, H = S.H, u = Math.min((W * 0.52) / 12.6, (H - 46) / 9.6); return { u: u, bx: 20 + 12.4 * u, by: H - 22 }; }
    function upd() {
      var h = hyp(), ht = hypTxt(), th = deg(Math.atan2(opp, adj));
      out.innerHTML = fixm("<span>" + t("Pythagoras: ", "فيثاغورث: ") + eq("AC = √(" + adj + "² + " + opp + "²) = " + ht + (ht.charAt(0) === "√" ? " ≈ " + fm(h) : "")) + " · " + eq("θ ≈ " + fm(th, 1) + "°") + "</span>" +
        "<span>" + eq("sin θ = " + opp + "/" + ht + " ≈ " + fm(opp / h, 4)) + " · " + eq("cos θ = " + adj + "/" + ht + " ≈ " + fm(adj / h, 4)) + " · " + eq("tan θ = " + frac(opp, adj) + " ≈ " + fm(opp / adj, 4)) + "</span>" +
        '<span class="sub">' + eq("sin²θ + cos²θ = " + opp * opp + "/" + (adj * adj + opp * opp) + " + " + adj * adj + "/" + (adj * adj + opp * opp) + " = 1") + "</span>");
      if (adj === 12 && opp === 5) tick(0);
      if (adj === opp) { tick(1); }
      if (Math.abs(opp / h - 0.6) < 1e-9 && !(adj === 4 && opp === 3)) tick(2);
    }
    S.drag({
      down: function (p) { var g = geo(), ax = g.bx - adj * g.u, cy = g.by - opp * g.u; if (dist(p.x, p.y, ax, g.by) < 24) { drag = "A"; return true; } if (dist(p.x, p.y, g.bx, cy) < 24) { drag = "C"; return true; } return false; },
      move: function (p) {
        var g = geo();
        if (drag === "A") { var a = clamp(Math.round((g.bx - p.x) / g.u), 1, 12); if (a !== adj) { adj = a; upd(); } }
        else if (drag === "C") { var o = clamp(Math.round((g.by - p.y) / g.u), 1, 9); if (o !== opp) { opp = o; upd(); } }
      },
      up: function () { drag = null; },
      hover: function (p) { var g = geo(); return dist(p.x, p.y, g.bx - adj * g.u, g.by) < 24 || dist(p.x, p.y, g.bx, g.by - opp * g.u) < 24; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), ax = g.bx - adj * g.u, cy = g.by - opp * g.u, h = hyp(), i; c.clearRect(0, 0, W, H);
      c.strokeStyle = C.line; c.lineWidth = 1; c.globalAlpha = 0.6; c.beginPath();
      for (i = 0; i <= 12; i++) { c.moveTo(g.bx - i * g.u, g.by); c.lineTo(g.bx - i * g.u, g.by - 9 * g.u); }
      for (i = 0; i <= 9; i++) { c.moveTo(g.bx, g.by - i * g.u); c.lineTo(g.bx - 12 * g.u, g.by - i * g.u); }
      c.stroke(); c.globalAlpha = 1;
      c.beginPath(); c.moveTo(ax, g.by); c.lineTo(g.bx, g.by); c.lineTo(g.bx, cy); c.closePath(); c.fillStyle = "rgba(37,99,235,.1)"; c.fill();
      c.lineWidth = 4; c.strokeStyle = "#0891b2"; c.beginPath(); c.moveTo(ax, g.by); c.lineTo(g.bx, g.by); c.stroke();
      c.strokeStyle = "#16a34a"; c.beginPath(); c.moveTo(g.bx, g.by); c.lineTo(g.bx, cy); c.stroke();
      c.strokeStyle = "#dc2626"; c.beginPath(); c.moveTo(ax, g.by); c.lineTo(g.bx, cy); c.stroke();
      c.strokeStyle = C.ink; c.lineWidth = 1.5; c.strokeRect(g.bx - 12, g.by - 12, 12, 12);
      var th = Math.atan2(opp, adj); c.strokeStyle = "#f97316"; c.lineWidth = 2.5; c.beginPath(); c.arc(ax, g.by, 28, -th, 0); c.stroke();
      K.txt(c, "θ", ax + 40 * Math.cos(th / 2), g.by - 40 * Math.sin(th / 2), { s: 14, c: "#f97316" });
      K.txt(c, t("adjacent ", "المجاور ") + n(adj), (ax + g.bx) / 2, g.by + 12, { s: 11, c: "#0891b2" });
      K.txt(c, t("opposite ", "المقابل ") + n(opp), g.bx + 8, (g.by + cy) / 2, { s: 11, c: "#16a34a", a: "left" });
      K.txt(c, t("hypotenuse ", "الوتر ") + hypTxt(), (ax + g.bx) / 2 - 16, (g.by + cy) / 2 - 12, { s: 11, c: "#dc2626", a: "right" });
      handle(c, ax, g.by, "#2563eb", 9); handle(c, g.bx, cy, "#16a34a", 9);
      K.txt(c, "A", ax - 14, g.by - 12, { s: 12, c: C.ink }); K.txt(c, "B", g.bx + 12, g.by + 4, { s: 12, c: C.ink }); K.txt(c, "C", g.bx + 14, cy - 8, { s: 12, c: C.ink });
      var px0 = g.bx + 70, pw = W - px0 - 16;
      if (pw > 60) [["sin θ", opp / h, 1, "#16a34a"], ["cos θ", adj / h, 1, "#0891b2"], ["tan θ", opp / adj, 3, "#f97316"]].forEach(function (r, k) {
        var y = 30 + k * 46; K.txt(c, r[0], px0, y - 10, { s: 12, c: r[3], a: "left" });
        K.rr(c, px0, y, pw, 14, 6); c.fillStyle = C.bg; c.fill();
        K.rr(c, px0, y, Math.max(6, pw * Math.min(1, r[1] / r[2])), 14, 6); c.fillStyle = r[3]; c.fill();
        K.txt(c, fm(r[1], 3), px0 + pw, y - 10, { s: 12, c: C.ink, a: "right" });
      });
    });
  };

  /* =========================================================
     mprep3_special - drag the sun over a 40 m obelisk; special angles give exact shadows
     ========================================================= */
  L.mprep3_special = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the sun. The obelisk is 40 m high. At 30°, 45° and 60° the shadow has an exact value from the special triangles.", "اسحب الشمس. ارتفاع المسلة ٤٠ م، وعند الزوايا ٣٠° و٤٥° و٦٠° يكون للظل قيمة مضبوطة من المثلثات الخاصة."));
    var S = K.make(host, 0.58, 380), A = 50, drag = false;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make the shadow exactly as long as the obelisk (40 m).", "اجعل طول الظل مساويًا لارتفاع المسلة تمامًا (٤٠ م)."), t("Set the sun at 30°: shadow = 40√3 ≈ 69.28 m.", "اجعل الشمس عند ٣٠°: الظل = 40√3 ≈ 69.28 م."), t("Set the sun at 60°: shadow = 40/√3 ≈ 23.09 m.", "اجعل الشمس عند ٦٠°: الظل = 40/√3 ≈ 23.09 م.")], done);
    var EX = { 30: ["1/2", "√3/2", "1/√3", "40√3"], 45: ["1/√2", "1/√2", "1", "40"], 60: ["√3/2", "1/2", "√3", "40/√3"] };
    function geo() { var W = S.W, H = S.H, pm = Math.min((W - 60) / 100, (H - 40) / 60), gy = H - 22, ox = 16 + 88 * pm, ty = gy - 40 * pm; return { pm: pm, gy: gy, ox: ox, ty: ty, R: Math.max(40, Math.min(W - ox - 36, (ty - 18) / 0.97)) }; }
    function sun(G) { var a = rad(A); return [G.ox + G.R * Math.cos(a), G.ty - G.R * Math.sin(a)]; }
    function upd() {
      var sh = 40 / Math.tan(rad(A)), x = EX[A];
      out.innerHTML = fixm("<span>" + eq("α = " + A + "°") + " · " + eq("tan α = 40 ÷ shadow") + " → " + eq("shadow = 40 ÷ tan " + A + "° " + (x && x[3].indexOf("√") >= 0 ? "= " + x[3] + " ≈ " : x ? "= " : "≈ ") + fm(sh) + " m") + "</span>" +
        "<span>" + eq("sin " + A + "° = " + (x ? x[0] : fm(Math.sin(rad(A)), 4))) + " · " + eq("cos " + A + "° = " + (x ? x[1] : fm(Math.cos(rad(A)), 4))) + " · " + eq("tan " + A + "° = " + (x ? x[2] : fm(Math.tan(rad(A)), 4))) + "</span>" +
        (x ? '<b class="ok-t">★ ' + t("Special angle: exact values!", "زاوية خاصة: قيم مضبوطة!") + "</b>" : '<span class="sub">' + t("Not a special angle: these are calculator values.", "ليست زاوية خاصة: هذه قيم الآلة الحاسبة.") + "</span>"));
      if (A === 45) tick(0); if (A === 30) tick(1); if (A === 60) tick(2);
    }
    S.drag({
      down: function (p) { var sp = sun(geo()); if (dist(p.x, p.y, sp[0], sp[1]) < 30) { drag = true; return true; } return false; },
      move: function (p) { if (!drag) return; var G = geo(), a = Math.round(deg(Math.atan2(G.ty - p.y, p.x - G.ox))); a = clamp(a, 25, 75); [30, 45, 60].forEach(function (s) { if (Math.abs(a - s) <= 2) a = s; }); if (a !== A) { A = a; upd(); } },
      up: function () { drag = false; },
      hover: function (p) { var sp = sun(geo()); return dist(p.x, p.y, sp[0], sp[1]) < 30; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, G = geo(), sh = 40 / Math.tan(rad(A)), top = G.gy - 40 * G.pm, tip = G.ox - sh * G.pm, sp = sun(G); c.clearRect(0, 0, W, H);
      c.fillStyle = "#d6b370"; c.fillRect(0, G.gy, W, 4);
      c.fillStyle = "rgba(100,116,139,.35)"; c.beginPath(); c.moveTo(G.ox, G.gy); c.lineTo(G.ox, top); c.lineTo(tip, G.gy); c.closePath(); c.fill();
      c.strokeStyle = "#f59e0b"; c.lineWidth = 2; c.setLineDash([6, 4]); c.beginPath(); c.moveTo(tip, G.gy); c.lineTo(sp[0], sp[1]); c.stroke(); c.setLineDash([]);
      var bw = 4 * G.pm; c.fillStyle = "#c08a3e"; c.beginPath(); c.moveTo(G.ox - bw / 2, G.gy); c.lineTo(G.ox - bw / 3, top + 3 * G.pm); c.lineTo(G.ox, top); c.lineTo(G.ox + bw / 3, top + 3 * G.pm); c.lineTo(G.ox + bw / 2, G.gy); c.closePath(); c.fill();
      c.fillStyle = "#334155"; c.fillRect(tip, G.gy + 4, G.ox - tip, 4);
      K.txt(c, fm(sh, 1) + " m", (tip + G.ox) / 2, G.gy + 15, { s: 12, c: C.ink });
      K.txt(c, "40 m", G.ox + bw / 2 + 6, (G.gy + top) / 2, { s: 12, c: C.ink, a: "left" });
      c.strokeStyle = "#f97316"; c.lineWidth = 2.5; c.beginPath(); c.arc(tip, G.gy, 26, -rad(A), 0); c.stroke(); K.txt(c, A + "°", tip + 38 * Math.cos(rad(A / 2)), G.gy - 38 * Math.sin(rad(A / 2)), { s: 12, c: "#f97316" });
      K.dot(c, sp[0], sp[1], 22, "rgba(250,204,21,.35)"); K.dot(c, sp[0], sp[1], 15, "#facc15", "#f59e0b");
      if (EX[A]) {
        var ix = 16, iy = 16, s = Math.min(46, W * 0.1), labs = A === 45 ? ["1", "1", "√2"] : A === 30 ? ["√3", "1", "2"] : ["1", "√3", "2"], w = A === 45 ? s : A === 30 ? s * 1.73 : s, hgt = A === 45 ? s : A === 30 ? s : s * 1.73;
        c.beginPath(); c.moveTo(ix, iy + hgt); c.lineTo(ix + w, iy + hgt); c.lineTo(ix + w, iy); c.closePath(); c.fillStyle = "rgba(249,115,22,.15)"; c.fill(); c.strokeStyle = "#f97316"; c.lineWidth = 2; c.stroke();
        K.txt(c, labs[0], ix + w / 2, iy + hgt + 10, { s: 11, c: C.ink }); K.txt(c, labs[1], ix + w + 10, iy + hgt / 2, { s: 11, c: C.ink }); K.txt(c, labs[2], ix + w / 2 - 10, iy + hgt / 2 - 6, { s: 11, c: C.ink });
        K.txt(c, A + "°", ix + 16, iy + hgt - 8, { s: 10, c: "#f97316" });
      }
    });
  };

  /* line helpers on integer points */
  function slopeInfo(a, b) {
    var dx = b[0] - a[0], dy = b[1] - a[1];
    if (!dx && !dy) return null;
    var th = dx === 0 ? 90 : (deg(Math.atan2(dy, dx)) + 360) % 180;
    return { dx: dx, dy: dy, m: dx ? dy / dx : null, mt: dx ? frac(dy, dx) : t("undefined", "غير معرّف"), th: th };
  }
  function drawLine(c, P, W, H, a, b, col) {
    var dx = b[0] - a[0], dy = b[1] - a[1]; c.strokeStyle = col; c.lineWidth = 3; c.beginPath();
    if (!dx) { c.moveTo(P.X(a[0]), 0); c.lineTo(P.X(a[0]), H); }
    else { var m = dy / dx, x0 = P.xa - 1, x1 = P.xb + 1; c.moveTo(P.X(x0), P.Y(a[1] + m * (x0 - a[0]))); c.lineTo(P.X(x1), P.Y(a[1] + m * (x1 - a[0]))); }
    c.stroke();
  }
  function pointDrag(S, getP, pts, onMove) {
    var di = -1;
    S.drag({
      down: function (p) { var P = getP(); if (!P) return false; for (var i = 0; i < pts.length; i++) if (dist(p.x, p.y, P.X(pts[i][0]), P.Y(pts[i][1])) < 22) { di = i; return true; } return false; },
      move: function (p) { var P = getP(); if (di < 0 || !P) return; var x = clamp(Math.round(P.ix(p.x)), Math.ceil(P.xa), Math.floor(P.xb)), y = clamp(Math.round(P.iy(p.y)), Math.ceil(P.ya), Math.floor(P.yb)); if (x !== pts[di][0] || y !== pts[di][1]) { var old = pts[di].slice(); pts[di][0] = x; pts[di][1] = y; if (onMove(di) === false) { pts[di][0] = old[0]; pts[di][1] = old[1]; } } },
      up: function () { di = -1; },
      hover: function (p) { var P = getP(); if (!P) return false; for (var i = 0; i < pts.length; i++) if (dist(p.x, p.y, P.X(pts[i][0]), P.Y(pts[i][1])) < 22) return true; return false; }
    });
  }

  /* =========================================================
     mprep3_slopes - two lines with draggable points: parallel / perpendicular check
     ========================================================= */
  L.mprep3_slopes = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the four points. Line l₁ is blue, line l₂ is orange. Compare their slopes and inclination angles.", "اسحب النقاط الأربع: المستقيم l₁ أزرق والمستقيم l₂ برتقالي، وقارن ميليهما وزاويتي ميلهما."));
    var S = K.make(host, 0.62, 400), pts = [[-4, -2], [2, 1], [-3, 3], [3, -1]], P = null;
    var VW = function () { return { x0: -7, x1: 7, y0: -6, y1: 6 }; };
    hookP(S, function (q) { P = q; }, VW);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make l₁ ∥ l₂ (equal slopes, two different lines).", "اجعل l₁ ∥ l₂ (ميلان متساويان ومستقيمان مختلفان)."), t("Make l₁ ⊥ l₂ with neither line parallel to an axis: m₁ × m₂ = −1.", "اجعل l₁ ⊥ l₂ دون أن يوازي أحدهما محورًا: m₁ × m₂ = −1."), t("Make a line whose inclination angle is 135°.", "كوّن مستقيمًا زاوية ميله 135°.")], done);
    function upd() {
      var a = slopeInfo(pts[0], pts[1]), b = slopeInfo(pts[2], pts[3]), rel;
      var same = a.dx * b.dy === a.dy * b.dx, coin = same && (pts[2][0] - pts[0][0]) * a.dy === (pts[2][1] - pts[0][1]) * a.dx;
      var perp = a.dx * b.dx + a.dy * b.dy === 0;
      if (coin) rel = t("The same line (coincident).", "مستقيم واحد (منطبقان).");
      else if (same) rel = '<b class="ok-t">' + t("Parallel: ", "متوازيان: ") + eq("m₁ = m₂") + "</b>";
      else if (perp) rel = '<b class="ok-t">' + t("Perpendicular", "متعامدان") + (a.m !== null && b.m !== null && a.m && b.m ? ": " + eq("m₁ × m₂ = " + a.mt + " × " + b.mt + " = −1") : " " + t("(one horizontal, one vertical)", "(أحدهما أفقي والآخر رأسي)")) + "</b>";
      else rel = t("Intersecting, not perpendicular", "متقاطعان غير متعامدين") + (a.m !== null && b.m !== null ? ": " + eq("m₁ × m₂ = " + frac(a.dy * b.dy, a.dx * b.dx)) : "");
      out.innerHTML = fixm("<span>" + eq("m₁ = (" + pts[1][1] + " − " + pts[0][1] + ") ÷ (" + pts[1][0] + " − " + pts[0][0] + ") = " + a.mt).replace(/− -/g, "+ ") + " · " + eq("θ₁ = " + fm(a.th, 1) + "°") + "</span><span>" + eq("m₂ = (" + pts[3][1] + " − " + pts[2][1] + ") ÷ (" + pts[3][0] + " − " + pts[2][0] + ") = " + b.mt).replace(/− -/g, "+ ") + " · " + eq("θ₂ = " + fm(b.th, 1) + "°") + "</span><span>" + rel + "</span>");
      if (same && !coin) tick(0);
      if (perp && a.dx && a.dy && b.dx && b.dy) tick(1);
      if (Math.abs(a.th - 135) < 1e-9 || Math.abs(b.th - 135) < 1e-9) tick(2);
    }
    pointDrag(S, function () { return P; }, pts, function (i) { var j = i ^ 1; if (pts[i][0] === pts[j][0] && pts[i][1] === pts[j][1]) return false; upd(); });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C; c.clearRect(0, 0, W, H);
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -6, y1: 6 });
      drawLine(c, P, W, H, pts[0], pts[1], "#2563eb"); drawLine(c, P, W, H, pts[2], pts[3], "#f97316");
      [0, 1, 2, 3].forEach(function (i) { handle(c, P.X(pts[i][0]), P.Y(pts[i][1]), i < 2 ? "#2563eb" : "#f97316", 8); K.txt(c, fixm("(" + pts[i][0] + ", " + pts[i][1] + ")"), P.X(pts[i][0]) + 12, P.Y(pts[i][1]) - 12, { s: 10, c: C.muted, a: "left" }); });
      K.txt(c, "l₁", 16, 16, { s: 13, c: "#2563eb", a: "left" }); K.txt(c, "l₂", 16, 34, { s: 13, c: "#f97316", a: "left" });
    });
  };

  /* =========================================================
     mprep3_line - line through two draggable points: live y = mx + c and Ax + By = C
     ========================================================= */
  L.mprep3_line = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag A and B. The slope triangle shows run and rise; the equation updates live in two forms.", "اسحب A وB. مثلث الميل يبين التغير الأفقي والرأسي، والمعادلة تتغير مباشرة بصورتين."));
    var S = K.make(host, 0.62, 400), pts = [[-3, -2], [2, 1]], P = null;
    var VW = function () { return { x0: -7, x1: 7, y0: -6, y1: 6 }; };
    hookP(S, function (q) { P = q; }, VW);
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Draw the line through (−4, 5) and (4, 1): y = −½x + 3.", "ارسم المستقيم المار بـ (−4, 5) و(4, 1): y = −½x + 3."), t("Make y = 3/2 x + 1: start at (0, 1), go 2 right and 3 up.", "كوّن y = 3/2 x + 1: ابدأ من (0, 1) ثم ٢ يمينًا و٣ لأعلى."), t("Make any line through the origin: y = mx.", "كوّن أي مستقيم يمر بنقطة الأصل: y = mx.")], done);
    function eqTxt(dx, dy, a) {
      if (!dx) return "x = " + a[0];
      var m = frac(dy, dx), cn = a[1] * dx - dy * a[0], cs = frac(cn, dx), mt = dy === 0 ? "" : m === "1" ? "x" : m === "−1" ? "−x" : m + (m.indexOf("/") >= 0 ? " x" : "x");
      if (!mt) return "y = " + cs;
      return "y = " + mt + (cn === 0 ? "" : (cn * dx > 0 ? " + " + cs : " − " + cs.replace("−", "")));
    }
    function stdTxt(dx, dy, a) {
      var A = dy, B = -dx, Cc = A * a[0] + B * a[1], g = gcd(gcd(A, B), Cc); if (A < 0 || (A === 0 && B < 0)) g = -g; A /= g; B /= g; Cc /= g;
      var s = (A ? (A === 1 ? "" : A === -1 ? "−" : A) + "x" : "") + (B ? (A ? (B > 0 ? " + " : " − ") : (B < 0 ? "−" : "")) + (Math.abs(B) === 1 ? "" : Math.abs(B)) + "y" : "");
      return s + " = " + (Cc < 0 ? "−" + (-Cc) : Cc);
    }
    function upd() {
      var a = pts[0], b = pts[1], dx = b[0] - a[0], dy = b[1] - a[1], cn = a[1] * dx - dy * a[0];
      out.innerHTML = fixm("<span>" + eq("m = rise ÷ run = " + dy + " ÷ " + dx + (dx ? " = " + frac(dy, dx) : "")) + (dx ? " · " + t("y-intercept ", "المقطع الصادي ") + eq("c = " + frac(cn, dx)) : " · " + t("vertical line: slope undefined", "مستقيم رأسي: الميل غير معرّف")) + "</span>" +
        "<span><b>" + eq(eqTxt(dx, dy, a)) + "</b> · " + t("standard form ", "الصورة العامة ") + eq(stdTxt(dx, dy, a)) + "</span>");
      if (dx && dy * 2 === -dx && cn === 3 * dx) tick(0);
      if (dx && dy * 2 === 3 * dx && cn === dx) tick(1);
      if (dx && cn === 0) tick(2);
    }
    pointDrag(S, function () { return P; }, pts, function (i) { var j = i ^ 1; if (pts[i][0] === pts[j][0] && pts[i][1] === pts[j][1]) return false; upd(); });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, a = pts[0], b = pts[1], dx = b[0] - a[0], dy = b[1] - a[1]; c.clearRect(0, 0, W, H);
      P = plane(c, W, H, C, { x0: -7, x1: 7, y0: -6, y1: 6 });
      drawLine(c, P, W, H, a, b, "#2563eb");
      if (dx && dy) {
        c.lineWidth = 2.5; c.setLineDash([5, 4]);
        c.strokeStyle = "#16a34a"; c.beginPath(); c.moveTo(P.X(a[0]), P.Y(a[1])); c.lineTo(P.X(b[0]), P.Y(a[1])); c.stroke();
        c.strokeStyle = "#dc2626"; c.beginPath(); c.moveTo(P.X(b[0]), P.Y(a[1])); c.lineTo(P.X(b[0]), P.Y(b[1])); c.stroke(); c.setLineDash([]);
        K.txt(c, t("run ", "أفقي ") + n(dx), (P.X(a[0]) + P.X(b[0])) / 2, P.Y(a[1]) + (dy > 0 ? 12 : -12), { s: 11, c: "#16a34a" });
        K.txt(c, t("rise ", "رأسي ") + n(dy), P.X(b[0]) + 8, (P.Y(a[1]) + P.Y(b[1])) / 2, { s: 11, c: "#dc2626", a: "left" });
      }
      if (dx) { var yc = a[1] - dy / dx * a[0]; if (yc > P.ya && yc < P.yb) { K.dot(c, P.X(0), P.Y(yc), 6, "#9333ea", "#fff"); K.txt(c, "(0, " + fm(yc) + ")", P.X(0) - 10, P.Y(yc) - 12, { s: 11, c: "#9333ea", a: "right" }); } }
      [["A", a], ["B", b]].forEach(function (q) { handle(c, P.X(q[1][0]), P.Y(q[1][1]), "#f97316", 8); K.txt(c, fixm(q[0] + "(" + q[1][0] + ", " + q[1][1] + ")"), P.X(q[1][0]) + 12, P.Y(q[1][1]) - 12, { s: 11, c: C.ink, a: "left" }); });
    });
  };

  /* =========================================================
     mprep3_spread - drag 5 data dots: mean, range, IQR and standard deviation live
     ========================================================= */
  L.mprep3_spread = function (host, cfg, done) {
    var PRE = { g1: [33, 33, 33, 27, 24], g2: [43, 35, 33, 33, 6], ex: [13, 15, 17, 18, 12] };
    host.innerHTML = hint(t("Drag the five marks along the line (0 to 50). The orange band is x̄ ± σ. Load the book's data sets with the buttons.", "اسحب الدرجات الخمس على الخط (من ٠ إلى ٥٠)، والشريط البرتقالي هو x̄ ± σ، وحمّل بيانات الكتاب من الأزرار.")) + '<div class="seg" id="sps"></div>';
    var S = K.make(host, 0.5, 320), v = PRE.g2.slice(), di = -1;
    var out = E.el("div", "meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make the range exactly 10.", "اجعل المدى ١٠ تمامًا."), t("Keep the mean exactly 30 but make σ less than 3.", "اجعل الوسط الحسابي ٣٠ تمامًا والانحراف المعياري أقل من ٣."), t("Make the standard deviation 0.", "اجعل الانحراف المعياري صفرًا.")], done);
    K.seg(host, "#sps", [["g2", t("Group 2", "المجموعة ٢")], ["g1", t("Group 1", "المجموعة ١")], ["ex", t("Example 5", "مثال ٥")]], "g2", function (k) { v = PRE[k].slice(); upd(); });
    function stats() {
      var s = v.slice().sort(function (a, b) { return a - b; }), nn = s.length, mean = s.reduce(function (a, b) { return a + b; }, 0) / nn, ss = 0;
      s.forEach(function (x) { ss += (x - mean) * (x - mean); });
      function q(p) { var pos = p * (nn + 1), lo = Math.floor(pos), f = pos - lo; if (lo < 1) return s[0]; if (lo >= nn) return s[nn - 1]; return s[lo - 1] + f * (s[lo] - s[lo - 1]); }
      return { s: s, mean: mean, ss: ss, sd: Math.sqrt(ss / nn), R: s[nn - 1] - s[0], q1: q(0.25), q3: q(0.75) };
    }
    function upd() {
      var st = stats();
      out.innerHTML = fixm("<span>" + t("Values ", "القيم ") + eq(st.s.join(", ")) + " · " + eq("x̄ = " + st.s.reduce(function (a, b) { return a + b; }, 0) + " ÷ 5 = " + fm(st.mean)) + "</span>" +
        "<span>" + eq("R = " + st.s[4] + " − " + st.s[0] + " = " + st.R) + " · " + eq("IQR = Q₃ − Q₁ = " + fm(st.q3) + " − " + fm(st.q1) + " = " + fm(st.q3 - st.q1)) + "</span>" +
        "<span>" + eq("σ = √(Σ(x − x̄)² ÷ n) = √(" + fm(st.ss) + " ÷ 5) ≈ " + fm(st.sd)) + "</span>");
      if (st.R === 10) tick(0);
      if (Math.abs(st.mean - 30) < 1e-9 && st.sd < 3) tick(1);
      if (st.sd < 1e-9) tick(2);
    }
    function geo() { var W = S.W, H = S.H; return { x0: 24, x1: W - 24, y: H * 0.6 }; }
    function X(g, x) { return g.x0 + x / 50 * (g.x1 - g.x0); }
    function stackPos(i) { var k = 0; for (var j = 0; j < i; j++) if (v[j] === v[i]) k++; return k; }
    S.drag({
      down: function (p) { var g = geo(), best = -1, bd = 26; for (var i = 0; i < v.length; i++) { var d = dist(p.x, p.y, X(g, v[i]), g.y - 12 - stackPos(i) * 20); if (d < bd) { bd = d; best = i; } } if (best >= 0) { di = best; return true; } return false; },
      move: function (p) { if (di < 0) return; var g = geo(), x = clamp(Math.round((p.x - g.x0) / (g.x1 - g.x0) * 50), 0, 50); if (x !== v[di]) { v[di] = x; upd(); } },
      up: function () { di = -1; },
      hover: function (p) { var g = geo(); for (var i = 0; i < v.length; i++) if (dist(p.x, p.y, X(g, v[i]), g.y - 12 - stackPos(i) * 20) < 26) return true; return false; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, W = S.W, H = S.H, C = S.C, g = geo(), st = stats(), i; c.clearRect(0, 0, W, H);
      c.fillStyle = "rgba(249,115,22,.18)"; c.fillRect(X(g, Math.max(0, st.mean - st.sd)), 8, X(g, Math.min(50, st.mean + st.sd)) - X(g, Math.max(0, st.mean - st.sd)), g.y - 8);
      K.txt(c, "x̄ ± σ", X(g, st.mean), 16, { s: 11, c: "#c2410c" });
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, g.y); c.lineTo(g.x1, g.y); c.stroke();
      for (i = 0; i <= 50; i += 5) { c.fillStyle = C.muted; c.fillRect(X(g, i) - 0.5, g.y - 4, 1, 8); K.txt(c, n(i), X(g, i), g.y + 13, { s: 10, c: C.muted }); }
      c.fillStyle = "#9333ea"; c.beginPath(); c.moveTo(X(g, st.mean), g.y + 4); c.lineTo(X(g, st.mean) - 7, g.y + 16); c.lineTo(X(g, st.mean) + 7, g.y + 16); c.fill();
      var ry = g.y + 34; c.strokeStyle = "#2563eb"; c.lineWidth = 3; c.beginPath(); c.moveTo(X(g, st.s[0]), ry); c.lineTo(X(g, st.s[4]), ry); c.stroke();
      K.txt(c, "R = " + n(st.R), (X(g, st.s[0]) + X(g, st.s[4])) / 2, ry + 11, { s: 11, c: "#2563eb" });
      var qy = g.y + 58; c.strokeStyle = "#16a34a"; c.beginPath(); c.moveTo(X(g, st.q1), qy); c.lineTo(X(g, st.q3), qy); c.stroke();
      K.txt(c, "IQR = " + fm(st.q3 - st.q1), (X(g, st.q1) + X(g, st.q3)) / 2, qy + 11, { s: 11, c: "#16a34a" });
      for (i = 0; i < v.length; i++) { var y = g.y - 12 - stackPos(i) * 20; c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.moveTo(X(g, v[i]), y); c.lineTo(X(g, v[i]), g.y); c.stroke(); handle(c, X(g, v[i]), y, i === di ? "#f97316" : "#0891b2", 9); K.txt(c, String(v[i]), X(g, v[i]), y, { s: 9, c: "#fff" }); }
    });
  };
})();
/* ---------- Prep 3 maths: objectives, extra quiz items, tappable diagrams, lab part names ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;

  /* ---------- "In this lesson" objectives (from the book's learning outcomes) ---------- */
  var O = {
    mprep3u1l1: [["The power of a power rule (aᵐ)ⁿ = aᵐⁿ", "قاعدة قوة القوة (aᵐ)ⁿ = aᵐⁿ"], ["Power of a product and of a quotient", "قوة حاصل الضرب وقوة خارج القسمة"], ["Simplify expressions with exponents", "تبسيط مقادير بها أسس"], ["Solve real-life problems with powers", "حل مشكلات حياتية باستخدام القوى"]],
    mprep3u1l2: [["What an exponential equation is", "مفهوم المعادلة الأسية"], ["Write both sides with the same base", "كتابة الطرفين بالأساس نفسه"], ["Solve using equality of powers", "الحل باستخدام تساوي القوى"], ["The cases aˣ = 1 and aˣ = bˣ", "الحالتان aˣ = 1 وaˣ = bˣ"]],
    mprep3u2l1: [["Standard and vertex forms", "الصورة القياسية وصورة الرأس"], ["Vertex and axis of symmetry", "رأس المنحنى ومحور التماثل"], ["Draw a quadratic function", "تمثيل الدالة التربيعية بيانيًا"], ["Maximum and minimum values in real life", "القيم العظمى والصغرى في مواقف حياتية"]],
    mprep3u2l2: [["Polynomial functions and their degree", "الدوال كثيرات الحدود ودرجتها"], ["Find real zeros algebraically", "إيجاد الأصفار الحقيقية جبريًا"], ["Read zeros from a graph", "قراءة الأصفار من الرسم البياني"], ["Use a zero to find a coefficient", "استخدام صفر لإيجاد معامل"]],
    mprep3u2l3: [["Rational algebraic fractions and functions", "الكسور والدوال الكسرية الجبرية"], ["The domain: R minus the zeros of the denominator", "المجال: R ما عدا أصفار المقام"], ["Simplify, keeping the domain", "الاختزال مع الاحتفاظ بالمجال"], ["Zeros of a rational function", "أصفار الدالة الكسرية"]],
    mprep3u2l4: [["Common domain = R − (Z₁ ∪ Z₂)", "المجال المشترك = R − (Z₁ ∪ Z₂)"], ["Common domain of three functions", "المجال المشترك لثلاث دوال"], ["The two conditions for equal functions", "شرطا تساوي دالتين"], ["Equal only on the common domain", "التساوي على المجال المشترك فقط"]],
    mprep3u2l5: [["Add and subtract rational fractions", "جمع الكسور الجبرية وطرحها"], ["Multiply rational fractions", "ضرب الكسور الجبرية"], ["The reciprocal and its domain", "المعكوس الضربي ومجاله"], ["Divide rational fractions", "قسمة الكسور الجبرية"]],
    mprep3u3l1: [["Two conditions for similar polygons", "شرطا تشابه مضلعين"], ["The similarity ratio k", "نسبة التشابه k"], ["Similarity of special quadrilaterals", "تشابه الأشكال الرباعية الخاصة"], ["Perimeter ratio = similarity ratio", "نسبة المحيطين = نسبة التشابه"]],
    mprep3u3l2: [["Case AA", "حالة الزاويتين"], ["Case SSS", "حالة الأضلاع الثلاثة"], ["Case SAS", "حالة ضلعين وزاوية محصورة"], ["Right triangles and the altitude; shadows", "المثلث القائم والعمود على الوتر؛ الظلال"]],
    mprep3u3l3: [["What a dilation is", "مفهوم التمدد"], ["Centre and factor; enlargement or reduction", "المركز والمعامل؛ تكبير أو تصغير"], ["Figure and image are similar, sides parallel", "الشكل وصورته متشابهان والأضلاع متوازية"], ["Dilation in the coordinate plane (kx, ky)", "التمدد في المستوى الإحداثي (kx, ky)"]],
    mprep3u3l4: [["sin, cos and tan in a right triangle", "جا وجتا وظا في المثلث القائم"], ["Use Pythagoras to find the third side", "استخدام فيثاغورث لإيجاد الضلع الثالث"], ["Complementary angles: sin A = cos B", "الزاويتان المتتامتان: جا A = جتا B"], ["Find sides from a given ratio", "إيجاد الأضلاع من نسبة معلومة"]],
    mprep3u3l5: [["Exact ratios of 30°, 45°, 60°", "النسب المضبوطة للزوايا 30° و45° و60°"], ["Use the special triangles", "استخدام المثلثات الخاصة"], ["Calculator: ratios and inverse ratios", "الآلة الحاسبة: النسب والدوال العكسية"], ["Solve equations with special angles", "حل معادلات بها زوايا خاصة"]],
    mprep3u3l6: [["Inclination angle and slope m = tan θ", "زاوية الميل والميل m = ظا θ"], ["Slope from two points", "الميل بمعلومية نقطتين"], ["Parallel lines: m₁ = m₂", "المستقيمان المتوازيان: m₁ = m₂"], ["Perpendicular lines: m₁ × m₂ = −1", "المستقيمان المتعامدان: m₁ × m₂ = −1"]],
    mprep3u3l7: [["y = mx + b from slope and intercept", "y = mx + b بمعلومية الميل والمقطع"], ["y − y₁ = m(x − x₁) from a point", "y − y₁ = m(x − x₁) بمعلومية نقطة"], ["Standard form Ax + By = C", "الصورة العامة Ax + By = C"], ["Graph a line; real-life linear relations", "رسم المستقيم؛ علاقات خطية من الحياة"]],
    mprep3u4l1: [["Why we need measures of dispersion", "لماذا نحتاج إلى مقاييس التشتت"], ["Range and interquartile range", "المدى والمدى الربيعي"], ["Standard deviation of a set of values", "الانحراف المعياري لمجموعة قيم"], ["Standard deviation of frequency tables", "الانحراف المعياري للتوزيعات التكرارية"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return x[1]; }) }; });

  /* ---------- extra hands-on quiz items (order / match / tf) ---------- */
  EX.mprep3u1l1 = [
    { k: "order", q: ["Order from the smallest to the largest.", "رتّب من الأصغر إلى الأكبر."], items: [["2⁵", "2⁵"], ["(2²)³", "(2²)³"], ["(2³)³", "(2³)³"], ["(2⁵)²", "(2⁵)²"]],
      off: ["2⁵, then (2²)³ = 2⁶, (2³)³ = 2⁹ and (2⁵)² = 2¹⁰: same base, compare the exponents.", "2⁵ ثم (2²)³ = 2⁶ ثم (2³)³ = 2⁹ ثم (2⁵)² = 2¹⁰: الأساس واحد فنقارن الأسس."], sto: ["Count the 2s in each tower: 5, 6, 9, 10.", "عدّ الأعداد ٢ في كل برج: ٥، ٦، ٩، ١٠."] },
    { k: "tf", a: false, q: ["True or false: (a²)³ = a⁵.", "صواب أم خطأ: (a²)³ = a⁵."],
      off: ["False. Multiply the exponents: (a²)³ = a⁶. Adding is for a² × a³ = a⁵.", "خطأ؛ نضرب الأسين: (a²)³ = a⁶، أما الجمع فيكون في a² × a³ = a⁵."], sto: ["Three boxes of two a's hold six a's.", "ثلاثة صناديق في كل منها اثنان من a تحمل ستة."] }
  ];
  EX.mprep3u1l2 = [
    { k: "order", q: ["Put the steps for solving 9ˣ⁺² = 3ˣ in order.", "رتّب خطوات حل 9ˣ⁺² = 3ˣ."], items: [["Write 9 as 3²: (3²)ˣ⁺² = 3ˣ", "اكتب ٩ على صورة 3²: (3²)ˣ⁺² = 3ˣ"], ["Power of a power: 3²ˣ⁺⁴ = 3ˣ", "قوة القوة: 3²ˣ⁺⁴ = 3ˣ"], ["Equal bases, so 2x + 4 = x", "الأساسان متساويان إذن 2x + 4 = x"], ["x = −4", "x = −4"]],
      off: ["Same base first, then equate the exponents and solve the linear equation.", "نوحّد الأساس أولًا ثم نساوي الأسين ونحل المعادلة الخطية."], sto: ["Dress both sides in the same base, then compare their hats.", "ألبس الطرفين الأساس نفسه ثم قارن قبعتيهما."] },
    { k: "tf", a: true, q: ["True or false: if 5ˣ = 1, then x = 0.", "صواب أم خطأ: إذا كان 5ˣ = 1 فإن x = 0."],
      off: ["True. 1 = 5⁰, so x = 0.", "صواب؛ 1 = 5⁰ إذن x = 0."], sto: ["Any base to the power zero is 1.", "أي أساس مرفوع للأس صفر يساوي ١."] }
  ];
  EX.mprep3u2l1 = [
    { k: "match", q: ["Match each function to the vertex of its curve.", "صِل كل دالة برأس منحناها."], pairs: [[["x² − 4x + 3", "x² − 4x + 3"], ["(2, −1)", "(2, −1)"]], [["−x² + 9", "−x² + 9"], ["(0, 9)", "(0, 9)"]], [["2(x − 3)² + 1", "2(x − 3)² + 1"], ["(3, 1)", "(3, 1)"]], [["5 − 2(x + 1)²", "5 − 2(x + 1)²"], ["(−1, 5)", "(−1, 5)"]]],
      off: ["Standard form: x = −b ÷ 2a; vertex form a(x − h)² + k: vertex (h, k).", "الصورة القياسية: x = −b ÷ 2a، وصورة الرأس a(x − h)² + k: الرأس (h, k)."], sto: ["Each curve turns around at its own vertex.", "كل منحنى يستدير عند رأسه."] },
    { k: "tf", a: true, q: ["True or false: the axis of symmetry of f(x) = x² − 2x − 3 is the line x = 1.", "صواب أم خطأ: محور تماثل منحنى f(x) = x² − 2x − 3 هو المستقيم x = 1."],
      off: ["True. x = −b ÷ 2a = 2 ÷ 2 = 1.", "صواب؛ x = −b ÷ 2a = 2 ÷ 2 = 1."], sto: ["The zeros −1 and 3 sit equally far from 1.", "الصفران −1 و3 على بعدين متساويين من ١."] }
  ];
  EX.mprep3u2l2 = [
    { k: "match", q: ["Match each function to its set of zeros.", "صِل كل دالة بمجموعة أصفارها."], pairs: [[["3x − 6", "3x − 6"], ["{2}", "{2}"]], [["x² − 25", "x² − 25"], ["{−5, 5}", "{−5, 5}"]], [["3x² + 12", "3x² + 12"], ["∅", "∅"]], [["f(x) = 0", "f(x) = 0"], ["R", "R"]]],
      off: ["Solve f(x) = 0 in each case; 3x² + 12 has no real roots and the zero polynomial is 0 everywhere.", "نحل f(x) = 0 في كل حالة؛ 3x² + 12 لا جذور حقيقية لها، والدالة الصفرية تساوي صفرًا في كل مكان."], sto: ["One meeting point, two, none, or the whole axis.", "نقطة تقاطع واحدة، أو اثنتان، أو لا شيء، أو المحور كله."] },
    { k: "tf", a: false, q: ["True or false: a polynomial of degree 2 can have 3 different real zeros.", "صواب أم خطأ: كثيرة الحدود من الدرجة الثانية قد يكون لها ٣ أصفار حقيقية مختلفة."],
      off: ["False. A polynomial of degree n has at most n real zeros, so degree 2 has at most 2.", "خطأ؛ كثيرة الحدود من الدرجة n لها n من الأصفار على الأكثر، فالدرجة الثانية لها صفران على الأكثر."], sto: ["A U-shape can cross a straight line at most twice.", "حرف U يقطع الخط المستقيم مرتين على الأكثر."] }
  ];
  EX.mprep3u2l3 = [
    { k: "order", q: ["Put the steps for simplifying a rational function in order.", "رتّب خطوات اختزال دالة كسرية."], items: [["Factor the numerator and the denominator", "حلل البسط والمقام"], ["Find the zeros of the denominator", "أوجد أصفار المقام"], ["Write the domain R − {zeros}", "اكتب المجال R − {الأصفار}"], ["Cancel the common factors", "اختصر العوامل المشتركة"]],
      off: ["The domain is found before cancelling, so no excluded value is lost.", "نوجد المجال قبل الاختصار حتى لا نفقد أي قيمة مستبعدة."], sto: ["Write down the forbidden values before the factor disappears.", "سجّل القيم الممنوعة قبل أن يختفي العامل."] },
    { k: "tf", a: false, q: ["True or false: f(x) = (x − 3)(x + 5) ÷ (x − 2)(x − 3) is defined at x = 3 because (x − 3) cancels.", "صواب أم خطأ: f(x) = (x − 3)(x + 5) ÷ (x − 2)(x − 3) معرّفة عند x = 3 لأن (x − 3) يُختصر."],
      off: ["False. D = R − {2, 3}: the simplified function keeps the original domain.", "خطأ؛ D = R − {2, 3}، والدالة بعد الاختزال تحتفظ بمجالها الأصلي."], sto: ["The hole stays a hole even after the factor is gone.", "الثقب يبقى ثقبًا حتى بعد اختفاء العامل."] }
  ];
  EX.mprep3u2l4 = [
    { k: "match", q: ["Match the two domains to their common domain.", "صِل المجالين بمجالهما المشترك."], pairs: [[["R − {1, 2} and R − {2, 3}", "R − {1, 2} وR − {2, 3}"], ["R − {1, 2, 3}", "R − {1, 2, 3}"]], [["R − {−2, 3} and R − {2, 3}", "R − {−2, 3} وR − {2, 3}"], ["R − {−2, 2, 3}", "R − {−2, 2, 3}"]], [["R − {−1, 1} and R", "R − {−1, 1} وR"], ["R − {−1, 1}", "R − {−1, 1}"]], [["R − {0} and R − {0}", "R − {0} وR − {0}"], ["R − {0}", "R − {0}"]]],
      off: ["Common domain = R − (Z₁ ∪ Z₂): collect every excluded value once.", "المجال المشترك = R − (Z₁ ∪ Z₂): نجمع كل قيمة مستبعدة مرة واحدة."], sto: ["Anything forbidden for either function is forbidden for both together.", "ما يُمنع على أي دالة يُمنع عليهما معًا."] },
    { k: "tf", a: false, q: ["True or false: two rational functions with the same simplified rule are always equal.", "صواب أم خطأ: الدالتان الكسريتان المتطابقتان في القاعدة بعد الاختصار متساويتان دائمًا."],
      off: ["False. Their domains must also be identical, e.g. (x² + 2x)/(x² − 4) ≠ x/(x − 2).", "خطأ؛ يجب أن يتساوى المجالان أيضًا، مثل (x² + 2x)/(x² − 4) ≠ x/(x − 2)."], sto: ["Twins in face, but one has a hole the other does not.", "توأمان في الشكل، لكن لأحدهما ثقب ليس عند الآخر."] }
  ];
  EX.mprep3u2l5 = [
    { k: "order", q: ["Put the steps for dividing rational fractions in order.", "رتّب خطوات قسمة الكسور الجبرية."], items: [["Factor every numerator and denominator", "حلل كل بسط ومقام"], ["Find the domain (both denominators and the divisor's numerator)", "أوجد المجال (المقامان وبسط المقسوم عليه)"], ["Multiply by the reciprocal of the divisor", "اضرب في المعكوس الضربي للمقسوم عليه"], ["Cancel and simplify", "اختصر وبسّط"]],
      off: ["Division becomes multiplication by the reciprocal, after the domain is recorded.", "تتحول القسمة إلى ضرب في المعكوس الضربي بعد تسجيل المجال."], sto: ["Flip the second fraction, then cancel partners.", "اقلب الكسر الثاني ثم اختصر الشركاء."] },
    { k: "tf", a: false, q: ["True or false: (x − 1) ÷ (1 − x) = 1.", "صواب أم خطأ: (x − 1) ÷ (1 − x) = 1."],
      off: ["False. 1 − x = −(x − 1), so the quotient is −1 (for x ≠ 1).", "خطأ؛ 1 − x = −(x − 1) إذن الناتج −1 (عندما x ≠ 1)."], sto: ["Mirror twins divide to give minus one.", "التوأمان المتعاكسان خارج قسمتهما سالب واحد."] }
  ];
  EX.mprep3u3l1 = [
    { k: "match", q: ["Match each pair of shapes to its similarity condition.", "صِل كل زوج من الأشكال بشرط تشابهه."], pairs: [[["Two rectangles", "مستطيلان"], ["Proportional dimensions", "أبعاد متناسبة"]], [["Two rhombuses", "معينان"], ["One pair of equal angles", "زاويتان متناظرتان متساويتان"]], [["Two squares", "مربعان"], ["Always similar", "متشابهان دائمًا"]], [["Two parallelograms", "متوازيا أضلاع"], ["Equal angle and proportional sides around it", "زاوية متساوية وتناسب الضلعين المحيطين بها"]]],
      off: ["These special conditions come from the two general conditions for similar polygons.", "هذه الشروط الخاصة مستنتجة من الشرطين العامين لتشابه المضلعات."], sto: ["Each family of shapes has its own shortcut.", "لكل عائلة من الأشكال طريق مختصر."] },
    { k: "tf", a: true, q: ["True or false: if two polygons are similar with ratio 2, their perimeters have ratio 2.", "صواب أم خطأ: إذا تشابه مضلعان بنسبة ٢ فإن نسبة محيطيهما ٢."],
      off: ["True. The perimeter ratio equals the similarity ratio.", "صواب؛ نسبة المحيطين تساوي نسبة التشابه."], sto: ["Every side doubles, so the fence around doubles too.", "كل ضلع يتضاعف فيتضاعف السور المحيط أيضًا."] }
  ];
  EX.mprep3u3l2 = [
    { k: "order", q: ["Put the steps of the shadow method in order.", "رتّب خطوات طريقة الظل."], items: [["Measure a stick and its shadow", "قِس عصا وظلها"], ["Measure the tree's shadow at the same time", "قِس ظل الشجرة في الوقت نفسه"], ["Explain why the triangles are similar (AA)", "بيّن لماذا يتشابه المثلثان (زاويتان)"], ["Use height ÷ shadow in both and solve", "استخدم الطول ÷ الظل في الحالتين وحل"]],
      off: ["Same time means the same sun angle; both objects are vertical; so AA gives similar triangles.", "الوقت نفسه يعني زاوية الشمس نفسها، والجسمان رأسيان، فيتشابه المثلثان بحالة الزاويتين."], sto: ["The ancient Egyptians' trick, step by step.", "حيلة المصريين القدماء خطوة بخطوة."] },
    { k: "tf", a: false, q: ["True or false: triangles with sides 3, 4, 5 and 6, 8, 12 are similar.", "صواب أم خطأ: المثلثان اللذان أضلاعهما 3, 4, 5 و6, 8, 12 متشابهان."],
      off: ["False. 3/6 = 4/8 = 1/2 but 5/12 ≠ 1/2: the sides are not proportional.", "خطأ؛ 3/6 = 4/8 = 1/2 لكن 5/12 ≠ 1/2: الأضلاع غير متناسبة."], sto: ["All three pairs must share one ratio.", "يجب أن تشترك الأزواج الثلاثة في نسبة واحدة."] }
  ];
  EX.mprep3u3l3 = [
    { k: "match", q: ["Match each dilation (centre O) to the image of the point.", "صِل كل تمدد (مركزه O) بصورة النقطة."], pairs: [[["k = 2, (1, 3)", "k = 2، (1, 3)"], ["(2, 6)", "(2, 6)"]], [["k = 1/3, (−3, 6)", "k = 1/3، (−3, 6)"], ["(−1, 2)", "(−1, 2)"]], [["k = 3, (2, −1)", "k = 3، (2, −1)"], ["(6, −3)", "(6, −3)"]], [["k = 1, (5, 0)", "k = 1، (5, 0)"], ["(5, 0)", "(5, 0)"]]],
      off: ["With centre O the rule is (x, y) → (kx, ky).", "عندما يكون المركز O تكون القاعدة (x, y) → (kx, ky)."], sto: ["Multiply both coordinates by the same k.", "اضرب الإحداثيين في k نفسه."] },
    { k: "tf", a: false, q: ["True or false: a dilation with k = 1/2 is an enlargement.", "صواب أم خطأ: التمدد الذي معامله k = 1/2 تكبير."],
      off: ["False. 0 < k < 1 gives a reduction.", "خطأ؛ 0 < k < 1 يعطي تصغيرًا."], sto: ["Half size is smaller, not bigger.", "نصف الحجم أصغر وليس أكبر."] }
  ];
  EX.mprep3u3l4 = [
    { k: "match", q: ["Match each name to its meaning.", "صِل كل اسم بمعناه."], pairs: [[["sin θ", "جا θ"], ["opposite ÷ hypotenuse", "المقابل ÷ الوتر"]], [["cos θ", "جتا θ"], ["adjacent ÷ hypotenuse", "المجاور ÷ الوتر"]], [["tan θ", "ظا θ"], ["opposite ÷ adjacent", "المقابل ÷ المجاور"]], [["Hypotenuse", "الوتر"], ["Longest side, facing the right angle", "أطول ضلع ويقابل القائمة"]]],
      off: ["The three ratios compare the sides seen from the angle θ.", "النسب الثلاث تقارن الأضلاع كما تُرى من الزاوية θ."], sto: ["Stand at θ: what is across, what is beside, what is longest?", "قف عند θ: ما المقابل وما المجاور وما الأطول؟"] },
    { k: "tf", a: false, q: ["True or false: sin θ of an acute angle in a right triangle can be greater than 1.", "صواب أم خطأ: قد يكون جيب زاوية حادة في مثلث قائم أكبر من ١."],
      off: ["False. The opposite side is always shorter than the hypotenuse, so 0 < sin θ < 1.", "خطأ؛ الضلع المقابل أقصر دائمًا من الوتر، إذن 0 < جا θ < 1."], sto: ["A leg can never beat the hypotenuse.", "لا يمكن لضلع القائمة أن يسبق الوتر."] }
  ];
  EX.mprep3u3l5 = [
    { k: "order", q: ["Order from the smallest to the largest.", "رتّب من الأصغر إلى الأكبر."], items: [["sin 30°", "جا 30°"], ["sin 45°", "جا 45°"], ["sin 60°", "جا 60°"], ["tan 60°", "ظا 60°"]],
      off: ["1/2 ≈ 0.5, √2/2 ≈ 0.707, √3/2 ≈ 0.866, √3 ≈ 1.732.", "1/2 ≈ 0.5 و√2/2 ≈ 0.707 و√3/2 ≈ 0.866 و√3 ≈ 1.732."], sto: ["The sine grows as the angle opens; the tangent races ahead.", "الجيب يكبر مع اتساع الزاوية، والظل يسبق الجميع."] },
    { k: "tf", a: true, q: ["True or false: tan 45° = 1.", "صواب أم خطأ: ظا 45° = 1."],
      off: ["True. In half a square the two legs are equal, so opposite ÷ adjacent = 1.", "صواب؛ في نصف المربع ضلعا القائمة متساويان، إذن المقابل ÷ المجاور = 1."], sto: ["At 45° the obelisk's shadow equals its height.", "عند ٤٥° يساوي ظل المسلة ارتفاعها."] }
  ];
  EX.mprep3u3l6 = [
    { k: "match", q: ["Match each inclination angle to the slope.", "صِل كل زاوية ميل بالميل."], pairs: [[["45°", "45°"], ["1", "1"]], [["135°", "135°"], ["−1", "−1"]], [["0°", "0°"], ["0", "0"]], [["90°", "90°"], ["Undefined", "غير معرّف"]]],
      off: ["m = tan θ; tan 90° is undefined.", "m = ظا θ، وظا 90° غير معرّف."], sto: ["Up-right, down-right, flat, and a wall.", "صاعد، هابط، أفقي، وجدار."] },
    { k: "tf", a: true, q: ["True or false: lines with slopes 2 and −1/2 are perpendicular.", "صواب أم خطأ: المستقيمان اللذان ميلاهما 2 و−1/2 متعامدان."],
      off: ["True. 2 × (−1/2) = −1.", "صواب؛ 2 × (−1/2) = −1."], sto: ["Flipped and opposite: a perfect corner.", "مقلوب ومعكوس الإشارة: زاوية قائمة تمامًا."] }
  ];
  EX.mprep3u3l7 = [
    { k: "order", q: ["Put the steps for the line through two points in order.", "رتّب خطوات إيجاد معادلة المستقيم المار بنقطتين."], items: [["Find m = (y₂ − y₁) ÷ (x₂ − x₁)", "أوجد m = (y₂ − y₁) ÷ (x₂ − x₁)"], ["Substitute one point in y = mx + b", "عوّض بإحدى النقطتين في y = mx + b"], ["Solve for b", "أوجد b"], ["Write y = mx + b", "اكتب y = mx + b"]],
      off: ["Slope first, then the intercept from one known point.", "الميل أولًا ثم المقطع من نقطة معلومة."], sto: ["Find how steep, then where it crosses the y-axis.", "اعرف شدة الميل ثم أين يقطع محور الصادات."] },
    { k: "tf", a: false, q: ["True or false: the line 2x + 3y = 6 cuts the y-axis at (0, 3).", "صواب أم خطأ: المستقيم 2x + 3y = 6 يقطع محور الصادات في (0, 3)."],
      off: ["False. Put x = 0: 3y = 6, y = 2, so the point is (0, 2); (3, 0) is the x-intercept.", "خطأ؛ نضع x = 0: 3y = 6 إذن y = 2 والنقطة (0, 2)، أما (3, 0) فهي المقطع السيني."], sto: ["On the y-axis x is zero: 6 ÷ 3 = 2.", "على محور الصادات x = 0: ٦ ÷ ٣ = ٢."] }
  ];
  EX.mprep3u4l1 = [
    { k: "order", q: ["Put the steps for the standard deviation in order.", "رتّب خطوات حساب الانحراف المعياري."], items: [["Find the mean x̄", "أوجد الوسط الحسابي x̄"], ["Find each deviation x − x̄", "أوجد كل انحراف x − x̄"], ["Square the deviations and add them", "ربّع الانحرافات واجمعها"], ["Divide by n and take the square root", "اقسم على n وخذ الجذر التربيعي"]],
      off: ["σ = √(Σ(x − x̄)² ÷ n).", "σ = √(Σ(x − x̄)² ÷ n)."], sto: ["Centre, distances, squares, average, root.", "المركز، فالمسافات، فالمربعات، فالمتوسط، فالجذر."] },
    { k: "tf", a: true, q: ["True or false: the range is affected by extreme values.", "صواب أم خطأ: المدى يتأثر بالقيم المتطرفة."],
      off: ["True. It uses only the greatest and the smallest values, so one extreme value changes it a lot.", "صواب؛ يعتمد على أكبر قيمة وأصغر قيمة فقط، فقيمة متطرفة واحدة تغيّره كثيرًا."], sto: ["One mark of 6 stretched group 2's range to 37.", "درجة واحدة قيمتها ٦ مدّت مدى المجموعة الثانية إلى ٣٧."] }
  ];

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size, anchor) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="' + (anchor || "middle") + '" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function col(c) { return 'fill="' + c + '"'; }
  function ln(x1, y1, x2, y2, c, w, dash) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || "var(--ink)") + '" stroke-width="' + (w || 2) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : "") + "/>"; }
  function ci(x, y, r, f, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2.5"' : "") + "/>"; }
  function rc(x, y, w, h, f, st, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r || 6) + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2"' : "") + "/>"; }
  function pa(d, f, st, w, dash) { return '<path d="' + d + '" fill="' + (f || "none") + '"' + (st ? ' stroke="' + st + '" stroke-width="' + (w || 2.5) + '"' : "") + (dash ? ' stroke-dasharray="' + dash + '"' : "") + "/>"; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }
  function axes(ox, oy, x0, x1, y0, y1) { return ln(x0, oy, x1, oy, "var(--muted)", 1.5) + ln(ox, y0, ox, y1, "var(--muted)", 1.5); }
  function curve(f, x0, x1, X, Y) { var d = "", first = true; for (var x = x0; x <= x1 + 1e-9; x += (x1 - x0) / 80) { var y = f(x); if (!isFinite(y)) { first = true; continue; } d += (first ? "M" : "L") + X(x).toFixed(1) + "," + Y(y).toFixed(1) + " "; first = false; } return d; }

  D.mprep3u1l1 = {
    title: ["(2³)⁴ as a grid of factors", "(2³)⁴ شبكة من العوامل"],
    svg: function () {
      var s = "", cols = ["#2563eb", "#16a34a", "#9333ea", "#dc2626"];
      for (var r = 0; r < 4; r++) { s += rc(40, 30 + r * 46, 132, 40, "none", cols[r], 9); for (var c = 0; c < 3; c++) s += rc(46 + c * 42, 35 + r * 46, 36, 30, cols[r] + "33") + tx(64 + c * 42, 56 + r * 46, "2", ink, 15); s += tx(24, 56 + r * 46, "2³", 'style="fill:' + cols[r] + '"', 12); }
      s += tx(106, 22, "m = 3", mut, 12) + tx(196, 120, "n = 4", mut, 12) + tx(300, 90, "(2³)⁴", ink, 30) + tx(300, 135, "= 2¹²", 'style="fill:#f97316"', 30) + tx(300, 172, "= 4096", ink, 18);
      return g(s);
    },
    spots: [[106, 56, ["One row = 2³", "صف واحد = 2³"], ["Each row is the power 2³ = 2 × 2 × 2.", "كل صف هو القوة 2³ = 2 × 2 × 2."]], [106, 22, ["Inner exponent m = 3", "الأس الداخلي m = 3"], ["Three factors of 2 in every row.", "ثلاثة عوامل من ٢ في كل صف."]],
      [196, 120, ["Outer exponent n = 4", "الأس الخارجي n = 4"], ["Four rows: the power 2³ is used 4 times.", "أربعة صفوف: القوة 2³ مكررة ٤ مرات."]], [300, 130, ["Multiply the exponents", "اضرب الأسين"], ["3 × 4 = 12 factors of 2 in total: (2³)⁴ = 2¹².", "٣ × ٤ = ١٢ عاملًا من ٢: (2³)⁴ = 2¹²."]], [300, 172, ["The value", "القيمة"], ["2¹² = 4096.", "2¹² = 4096."]]]
  };
  D.mprep3u1l2 = {
    title: ["Solving 3ˣ⁺¹ = 81 step by step", "حل 3ˣ⁺¹ = 81 خطوة بخطوة"],
    svg: function () {
      var st = [["3ˣ⁺¹ = 81", "#2563eb"], ["3ˣ⁺¹ = 3⁴", "#9333ea"], ["x + 1 = 4", "#f97316"], ["x = 3", "#16a34a"]], s = "";
      st.forEach(function (q, i) { s += rc(20 + i * 95, 90, 85, 50, q[1] + "22", q[1], 10) + tx(62 + i * 95, 121, q[0], ink, 14); if (i < 3) s += tx(110 + i * 95, 121, "→", mut, 16); });
      s += tx(200, 50, "aˣ = aʸ  ⇒  x = y", ink, 18) + tx(200, 190, "✓ 3³⁺¹ = 3⁴ = 81", 'style="fill:#16a34a"', 16);
      return g(s);
    },
    spots: [[62, 115, ["Exponential equation", "معادلة أسية"], ["The unknown x is in the exponent.", "المجهول x في الأس."]], [157, 115, ["Same base", "توحيد الأساس"], ["81 = 3 × 3 × 3 × 3 = 3⁴.", "81 = 3 × 3 × 3 × 3 = 3⁴."]],
      [252, 115, ["Equal exponents", "تساوي الأسين"], ["Equal bases, so the exponents are equal.", "الأساسان متساويان إذن الأسان متساويان."]], [347, 115, ["Solution", "الحل"], ["x = 4 − 1 = 3.", "x = 4 − 1 = 3."]], [200, 186, ["Check", "التحقق"], ["Substitute: 3³⁺¹ = 81 ✓.", "بالتعويض: 3³⁺¹ = 81 ✓."]]]
  };
  D.mprep3u2l1 = {
    title: ["The parabola of f(x) = x² − 2x − 3", "منحنى f(x) = x² − 2x − 3"],
    svg: function () {
      var X = function (x) { return 200 + x * 30; }, Y = function (y) { return 90 - y * 18; };
      return g(axes(200, 90, 40, 360, 10, 235) + ln(X(1), 10, X(1), 235, "#9333ea", 2, "6 5") + pa(curve(function (x) { return x * x - 2 * x - 3; }, -2.2, 4.2, X, Y), "none", "#2563eb", 3.5) +
        ci(X(1), Y(-4), 7, "#f97316", "#fff") + ci(X(-1), Y(0), 6, "#16a34a", "#fff") + ci(X(3), Y(0), 6, "#16a34a", "#fff") + ci(X(0), Y(-3), 6, "#0891b2", "#fff") +
        tx(X(1) + 12, Y(-4) + 4, "(1, −4)", 'style="fill:#f97316"', 12, "start") + tx(X(1) + 6, 22, "x = 1", 'style="fill:#9333ea"', 12, "start") + tx(X(-1), Y(0) - 10, "−1", mut, 12) + tx(X(3), Y(0) - 10, "3", mut, 12));
    },
    spots: [[230, 162, ["Vertex (1, −4)", "الرأس (1, −4)"], ["x = −b ÷ 2a = 1, f(1) = −4. a > 0, so −4 is the minimum.", "x = −b ÷ 2a = 1 وf(1) = −4، وa > 0 إذن −٤ قيمة صغرى."]], [230, 40, ["Axis of symmetry", "محور التماثل"], ["The vertical line x = 1 through the vertex.", "المستقيم الرأسي x = 1 المار بالرأس."]],
      [170, 90, ["Zero x = −1", "الصفر x = −1"], ["The curve meets the x-axis: f(−1) = 0.", "المنحنى يقطع محور السينات: f(−1) = 0."]], [290, 90, ["Zero x = 3", "الصفر x = 3"], ["Same distance from the axis as −1.", "على البعد نفسه من المحور مثل −1."]], [200, 144, ["y-intercept (0, −3)", "المقطع الصادي (0, −3)"], ["f(0) = c = −3.", "f(0) = c = −3."]]]
  };
  D.mprep3u2l2 = {
    title: ["Zeros of f(x) = x³ + 2x² − 15x", "أصفار f(x) = x³ + 2x² − 15x"],
    svg: function () {
      var X = function (x) { return 200 + x * 28; }, Y = function (y) { return 120 - y * 1.6; };
      return g(axes(200, 120, 20, 380, 8, 232) + pa(curve(function (x) { return x * x * x + 2 * x * x - 15 * x; }, -6.1, 4.1, X, Y), "none", "#2563eb", 3.5) +
        ci(X(-5), 120, 7, "#16a34a", "#fff") + ci(X(0), 120, 7, "#16a34a", "#fff") + ci(X(3), 120, 7, "#16a34a", "#fff") +
        tx(X(-5), 140, "−5", ink, 13) + tx(X(0) + 10, 140, "0", ink, 13) + tx(X(3), 140, "3", ink, 13) + tx(300, 30, "x(x + 5)(x − 3)", 'style="fill:#9333ea"', 14));
    },
    spots: [[60, 120, ["Zero −5", "الصفر −5"], ["Factor (x + 5) = 0 gives x = −5.", "العامل (x + 5) = 0 يعطي x = −5."]], [200, 120, ["Zero 0", "الصفر 0"], ["The common factor x gives x = 0.", "العامل المشترك x يعطي x = 0."]],
      [284, 120, ["Zero 3", "الصفر 3"], ["Factor (x − 3) = 0 gives x = 3.", "العامل (x − 3) = 0 يعطي x = 3."]], [300, 30, ["Factorised form", "الصورة المحللة"], ["x³ + 2x² − 15x = x(x² + 2x − 15) = x(x + 5)(x − 3).", "x³ + 2x² − 15x = x(x² + 2x − 15) = x(x + 5)(x − 3)."]], [130, 60, ["Set of zeros", "مجموعة الأصفار"], ["z(f) = {−5, 0, 3}: three meeting points with the x-axis.", "z(f) = {−5, 0, 3}: ثلاث نقاط تقاطع مع محور السينات."]]]
  };
  D.mprep3u2l3 = {
    title: ["f(x) = (x − 3)(x + 5) ÷ (x − 2)(x − 3)", "f(x) = (x − 3)(x + 5) ÷ (x − 2)(x − 3)"],
    svg: function () {
      var X = function (x) { return 200 + x * 22; }, Y = function (y) { return 120 - y * 9; }, f = function (x) { return (x + 5) / (x - 2); };
      return g(axes(200, 120, 20, 380, 8, 232) + ln(X(2), 8, X(2), 232, "#dc2626", 2, "7 5") +
        pa(curve(f, -8, 1.45, X, Y), "none", "#2563eb", 3.5) + pa(curve(f, 2.6, 8, X, Y), "none", "#2563eb", 3.5) +
        ci(X(3), Y(8), 6, "var(--card)", "#2563eb") + ci(X(-5), 120, 6, "#16a34a", "#fff") +
        tx(X(2) + 6, 228, "x = 2", 'style="fill:#dc2626"', 12, "start") + tx(X(3) + 12, Y(8) + 4, "(3, 8)", mut, 12, "start") + tx(X(-5), 140, "−5", ink, 12));
    },
    spots: [[244, 200, ["Denominator zero: x = 2", "صفر المقام: x = 2"], ["Nothing cancels (x − 2): the curve cannot cross this wall.", "العامل (x − 2) لا يُختصر: لا يعبر المنحنى هذا الجدار."]], [266, 48, ["Hole at x = 3", "ثقب عند x = 3"], ["(x − 3) cancels, but 3 is still not in the domain.", "(x − 3) يُختصر لكن ٣ ما زال خارج المجال."]],
      [90, 120, ["Zero x = −5", "الصفر x = −5"], ["Numerator zero that is not a denominator zero.", "صفر للبسط ليس صفرًا للمقام."]], [100, 200, ["Domain", "المجال"], ["D = R − {2, 3}, found before cancelling.", "D = R − {2, 3}، ونوجده قبل الاختصار."]], [330, 150, ["Simplest form", "أبسط صورة"], ["f(x) = (x + 5) ÷ (x − 2) for x ≠ 2, 3.", "f(x) = (x + 5) ÷ (x − 2) حيث x ≠ 2, 3."]]]
  };
  D.mprep3u2l4 = {
    title: ["Common domain on number lines", "المجال المشترك على خطوط الأعداد"],
    svg: function () {
      var X = function (v) { return 200 + v * 32; }, s = "", rows = [["D_f", [-2, 3], "#2563eb"], ["D_g", [2, 3], "#16a34a"], ["D_f ∩ D_g", [-2, 2, 3], "#f97316"]];
      rows.forEach(function (r, i) { var y = 50 + i * 70; s += ln(40, y, 380, y, r[2], 4) + tx(40, y - 14, r[0], 'style="fill:' + r[2] + '"', 13, "start"); for (var v = -4; v <= 5; v++) s += ln(X(v), y - 5, X(v), y + 5, "var(--muted)", 1) + tx(X(v), y + 20, String(v), mut, 10); r[1].forEach(function (z) { s += ci(X(z), y, 8, "var(--card)", "#dc2626"); }); });
      return g(s);
    },
    spots: [[136, 50, ["f excludes −2 and 3", "f تستبعد −2 و3"], ["x² − x − 6 = (x − 3)(x + 2).", "x² − x − 6 = (x − 3)(x + 2)."]], [264, 120, ["g excludes 2 and 3", "g تستبعد 2 و3"], ["x² − 5x + 6 = (x − 2)(x − 3).", "x² − 5x + 6 = (x − 2)(x − 3)."]],
      [296, 190, ["3 removed once", "٣ تُستبعد مرة واحدة"], ["The union {−2, 3} ∪ {2, 3} = {−2, 2, 3}.", "الاتحاد {−2, 3} ∪ {2, 3} = {−2, 2, 3}."]], [100, 176, ["Common domain", "المجال المشترك"], ["R − {−2, 2, 3}: both functions are defined together.", "R − {−2, 2, 3}: الدالتان معرّفتان معًا."]]]
  };
  D.mprep3u2l5 = {
    title: ["Cancelling in a product", "الاختصار في حاصل الضرب"],
    svg: function () {
      function tile(x, y, s, gone) { return rc(x, y, 64, 28, gone ? "var(--bg-2)" : "#16a34a22", "var(--muted)", 7) + tx(x + 32, y + 19, s, gone ? mut : ink, 12) + (gone ? ln(x + 5, y + 24, x + 59, y + 4, "#dc2626", 2.5) : ""); }
      return g(tile(20, 70, "(x − 2)", 1) + tile(90, 70, "(x + 2)", 1) + ln(20, 110, 154, 110, "var(--ink)", 2.5) + tile(20, 118, "(x + 3)", 1) + tile(90, 118, "(x − 2)", 1) +
        tx(180, 116, "×", ink, 22) + tile(205, 70, "(x + 3)", 1) + ln(205, 110, 269, 110, "var(--ink)", 2.5) + tile(205, 118, "(x + 2)", 1) + tx(300, 116, "=", ink, 22) + tx(345, 120, "1", 'style="fill:#16a34a"', 30) +
        tx(200, 200, "D = R − {−3, −2, 2}", 'style="fill:#9333ea"', 14));
    },
    spots: [[52, 84, ["Factorise first", "حلل أولًا"], ["x² − 4 = (x − 2)(x + 2).", "x² − 4 = (x − 2)(x + 2)."]], [122, 132, ["Cancel a pair", "اختصر زوجًا"], ["(x − 2) above and below cancel.", "(x − 2) في البسط والمقام يختصران."]],
      [237, 84, ["Cancel across fractions", "الاختصار بين الكسرين"], ["(x + 3) on top of one fraction cancels (x + 3) below the other.", "(x + 3) في بسط كسر يختصر مع (x + 3) في مقام الآخر."]], [345, 110, ["Result", "الناتج"], ["Everything cancels: the product is 1.", "كل شيء يُختصر: الناتج ١."]], [200, 196, ["Domain", "المجال"], ["Zeros of both denominators: R − {−3, −2, 2}.", "أصفار المقامين: R − {−3, −2, 2}."]]]
  };
  D.mprep3u3l1 = {
    title: ["Two similar quadrilaterals", "شكلان رباعيان متشابهان"],
    svg: function () {
      function q(ox, oy, k, c, lab) { var P = [[0, 0], [6, 0], [6, 3], [2, 5]].map(function (p) { return [ox + p[0] * k, oy - p[1] * k]; }); return pa("M" + P.map(function (p) { return p.join(","); }).join(" L") + " Z", c + "33", c, 2.5) + P.map(function (p, i) { return tx(p[0] + (i === 0 || i === 3 ? -9 : 9), p[1] + (i < 2 ? 14 : -4), lab.charAt(i), 'style="fill:' + c + '"', 12); }).join(""); }
      return g(q(30, 200, 21, "#2563eb", "ABCD") + q(220, 200, 14, "#f97316", "EFGH") + tx(200, 30, "ABCD ~ EFGH", ink, 16) + tx(200, 228, "k = 3/2", 'style="fill:#16a34a"', 14));
    },
    spots: [[200, 26, ["The symbol ~", "الرمز ~"], ["Write the vertices in corresponding order: A↔E, B↔F, C↔G, D↔H.", "تُكتب الرؤوس بالترتيب المتناظر: A↔E وB↔F وC↔G وD↔H."]], [93, 200, ["Corresponding sides", "أضلاع متناظرة"], ["Corresponding sides: AB/EF = 21/14 = 3/2.", "الأضلاع المتناظرة: AB/EF = 21/14 = 3/2."]],
      [156, 137, ["Equal angles", "زوايا متساوية"], ["m∠C = m∠G: the shape does not change, only the size.", "m∠C = m∠G: الشكل لا يتغير، الحجم فقط."]], [200, 224, ["Similarity ratio", "نسبة التشابه"], ["k = 3/2 for ABCD to EFGH; the perimeter ratio is also 3/2.", "k = 3/2 للمضلع ABCD إلى EFGH، ونسبة المحيطين أيضًا 3/2."]]]
  };
  D.mprep3u3l2 = {
    title: ["Shadows make similar triangles", "الظلال تكوّن مثلثات متشابهة"],
    svg: function () {
      return g(ln(10, 200, 390, 200, "#a16207", 3) + pa("M110,200 L110,140 L50,200 Z", "rgba(100,116,139,.3)", "#2563eb", 2.5) + pa("M330,200 L330,104 L240,200 Z", "rgba(100,116,139,.3)", "#16a34a", 2.5) +
        ln(50, 200, 140, 110, "#f59e0b", 2, "6 4") + ln(240, 200, 370, 61, "#f59e0b", 2, "6 4") + rc(103, 193, 7, 7, "none", "var(--ink)", 0) + rc(323, 193, 7, 7, "none", "var(--ink)", 0) +
        tx(122, 172, "1.6", 'style="fill:#2563eb"', 12, "start") + tx(80, 218, "1.5", ink, 12) + tx(342, 152, "h", 'style="fill:#16a34a"', 14, "start") + tx(285, 218, "2.4", ink, 12) + ci(370, 34, 16, "#facc15", "#f59e0b"));
    },
    spots: [[62, 192, ["Same sun angle", "زاوية الشمس نفسها"], ["Rays are parallel, so the angles at the shadow tips are equal.", "الأشعة متوازية فتتساوى الزاويتان عند طرفي الظلين."]], [106, 196, ["Right angles", "زاويتان قائمتان"], ["Both the student and the pole are vertical.", "الطالبة والسارية رأسيتان."]],
      [200, 120, ["AA similarity", "تشابه بزاويتين"], ["Two pairs of equal angles: the triangles are similar.", "زاويتان متساويتان مع زاويتين: المثلثان متشابهان."]], [352, 176, ["Find h", "أوجد h"], ["h ÷ 2.4 = 1.6 ÷ 1.5, so h = 2.56 m.", "h ÷ 2.4 = 1.6 ÷ 1.5 إذن h = 2.56 م."]]]
  };
  D.mprep3u3l3 = {
    title: ["Dilation with centre C and k = 2", "تمدد مركزه C ومعامله 2"],
    svg: function () {
      var C = [40, 200], A = [[120, 150], [150, 190], [110, 185]].map(function (p) { return p; }), I = A.map(function (p) { return [C[0] + 2 * (p[0] - C[0]), C[1] + 2 * (p[1] - C[1])]; }), s = "";
      I.forEach(function (p) { s += ln(C[0], C[1], p[0], p[1], "#9333ea", 1.5, "4 4"); });
      s += pa("M" + A.map(function (p) { return p.join(","); }).join(" L") + " Z", "#2563eb33", "#2563eb", 2.5) + pa("M" + I.map(function (p) { return p.join(","); }).join(" L") + " Z", "#f9731633", "#f97316", 2.5);
      s += ci(C[0], C[1], 7, "#9333ea", "#fff") + tx(C[0] - 4, C[1] + 22, "C", 'style="fill:#9333ea"', 13) + tx(124, 142, "P", 'style="fill:#2563eb"', 12) + tx(206, 92, "P′", 'style="fill:#f97316"', 12) + tx(320, 60, "CP′ = 2 × CP", ink, 14);
      return g(s);
    },
    spots: [[40, 200, ["Centre of dilation", "مركز التمدد"], ["C maps to itself; every ray starts here.", "صورة C هي نفسها، وكل شعاع يبدأ منها."]], [124, 150, ["Original point P", "النقطة الأصلية P"], ["A vertex of the original triangle.", "رأس في المثلث الأصلي."]],
      [200, 100, ["Image P′", "الصورة P′"], ["On ray CP with CP′ = k × CP = 2 × CP.", "على الشعاع CP حيث CP′ = k × CP = 2 × CP."]], [320, 56, ["k > 1: enlargement", "k > 1: تكبير"], ["Each side doubles and stays parallel to its original side.", "يتضاعف كل ضلع ويبقى موازيًا لضلعه الأصلي."]]]
  };
  D.mprep3u3l4 = {
    title: ["Sides seen from the angle θ", "الأضلاع كما تُرى من الزاوية θ"],
    svg: function () {
      return g(pa("M40,200 L328,200 L328,80 Z", "rgba(37,99,235,.08)") + ln(40, 200, 328, 200, "#0891b2", 4) + ln(328, 200, 328, 80, "#16a34a", 4) + ln(40, 200, 328, 80, "#dc2626", 4) + rc(316, 188, 12, 12, "none", "var(--ink)", 0) +
        pa("M84,200 A44,44 0 0,0 80.6,183.1", "none", "#f97316", 3) + tx(96, 192, "θ", 'style="fill:#f97316"', 15) + tx(184, 220, "adjacent 12", 'style="fill:#0891b2"', 13) + tx(340, 145, "opposite 5", 'style="fill:#16a34a"', 13, "start") + tx(170, 128, "hypotenuse 13", 'style="fill:#dc2626"', 13));
    },
    spots: [[184, 210, ["Adjacent side", "الضلع المجاور"], ["Next to θ (not the hypotenuse): cos θ = 12/13.", "يجاور θ وليس الوتر: جتا θ = 12/13."]], [340, 140, ["Opposite side", "الضلع المقابل"], ["Facing θ: sin θ = 5/13.", "يواجه θ: جا θ = 5/13."]],
      [170, 132, ["Hypotenuse", "الوتر"], ["√(12² + 5²) = 13, facing the right angle.", "√(12² + 5²) = 13 ويقابل الزاوية القائمة."]], [90, 190, ["tan θ", "ظا θ"], ["opposite ÷ adjacent = 5/12.", "المقابل ÷ المجاور = 5/12."]], [322, 194, ["Right angle", "الزاوية القائمة"], ["The other acute angle is 90° − θ, so sin θ = cos(90° − θ).", "الزاوية الحادة الأخرى 90° − θ، إذن جا θ = جتا(90° − θ)."]]]
  };
  D.mprep3u3l5 = {
    title: ["The two special triangles", "المثلثان الخاصان"],
    svg: function () {
      return g(pa("M30,200 L203,200 L203,100 Z", "#f9731622", "#f97316", 2.5) + tx(116, 218, "√3", ink, 13) + tx(212, 154, "1", ink, 13, "start") + tx(104, 140, "2", ink, 13) + tx(62, 194, "30°", 'style="fill:#f97316"', 11) + tx(192, 120, "60°", 'style="fill:#f97316"', 11) +
        pa("M250,200 L370,200 L370,80 Z", "#2563eb22", "#2563eb", 2.5) + tx(310, 218, "1", ink, 13) + tx(380, 144, "1", ink, 13, "start") + tx(298, 132, "√2", ink, 13) + tx(280, 194, "45°", 'style="fill:#2563eb"', 11) + tx(200, 40, "sin 30° = 1/2 · tan 45° = 1 · tan 60° = √3", ink, 13));
    },
    spots: [[116, 210, ["Half an equilateral triangle", "نصف مثلث متساوي الأضلاع"], ["Sides 1 : √3 : 2 for angles 30°, 60°, 90°.", "الأضلاع ١ : √٣ : ٢ للزوايا ٣٠° و٦٠° و٩٠°."]], [62, 190, ["30°", "30°"], ["sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3.", "sin 30° = 1/2 وcos 30° = √3/2 وtan 30° = 1/√3."]],
      [192, 124, ["60°", "60°"], ["sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.", "sin 60° = √3/2 وcos 60° = 1/2 وtan 60° = √3."]], [310, 150, ["Half a square", "نصف مربع"], ["Sides 1 : 1 : √2, so sin 45° = cos 45° = 1/√2 and tan 45° = 1.", "الأضلاع ١ : ١ : √٢ إذن sin 45° = cos 45° = 1/√2 وtan 45° = 1."]]]
  };
  D.mprep3u3l6 = {
    title: ["Parallel and perpendicular slopes", "ميول المستقيمات المتوازية والمتعامدة"],
    svg: function () {
      return g(axes(120, 170, 10, 390, 10, 235) + ln(40, 210, 260, 100, "#2563eb", 3) + ln(110, 230, 330, 120, "#2563eb", 3) + ln(160, 20, 260, 220, "#f97316", 3) +
        pa("M150,170 A30,30 0 0,0 146.8,156.6", "none", "#9333ea", 3) + tx(162, 160, "θ", 'style="fill:#9333ea"', 14) + tx(250, 92, "m = 1/2", 'style="fill:#2563eb"', 13) + tx(340, 128, "m = 1/2", 'style="fill:#2563eb"', 13) + tx(300, 215, "m = −2", 'style="fill:#f97316"', 13));
    },
    spots: [[150, 160, ["Inclination angle θ", "زاوية الميل θ"], ["Measured anticlockwise from the positive x-axis; m = tan θ.", "تُقاس عكس عقارب الساعة من الاتجاه الموجب لمحور السينات؛ m = ظا θ."]], [250, 96, ["Parallel lines", "مستقيمان متوازيان"], ["Equal slopes: 1/2 = 1/2.", "ميلان متساويان: 1/2 = 1/2."]],
      [252, 204, ["Perpendicular line", "مستقيم عمودي"], ["1/2 × (−2) = −1, so it is perpendicular to both blue lines.", "1/2 × (−2) = −1، إذن هو عمودي على المستقيمين الأزرقين."]], [60, 60, ["Slope from two points", "الميل بمعلومية نقطتين"], ["m = (y₂ − y₁) ÷ (x₂ − x₁).", "m = (y₂ − y₁) ÷ (x₂ − x₁)."]]]
  };
  D.mprep3u3l7 = {
    title: ["Graphing y = 3/2 x + 1", "رسم y = 3/2 x + 1"],
    svg: function () {
      var X = function (x) { return 160 + x * 30; }, Y = function (y) { return 160 - y * 30; };
      return g(axes(160, 160, 10, 390, 8, 235) + ln(X(-4), Y(-5), X(4), Y(7), "#2563eb", 3) + ln(X(0), Y(1), X(2), Y(1), "#16a34a", 2.5, "5 4") + ln(X(2), Y(1), X(2), Y(4), "#dc2626", 2.5, "5 4") +
        ci(X(0), Y(1), 7, "#9333ea", "#fff") + ci(X(2), Y(4), 6, "#f97316", "#fff") + tx(X(1), Y(1) + 16, "2", 'style="fill:#16a34a"', 12) + tx(X(2) + 10, Y(2.5), "3", 'style="fill:#dc2626"', 12, "start") + tx(320, 40, "y = 3/2 x + 1", ink, 15));
    },
    spots: [[160, 130, ["y-intercept", "المقطع الصادي"], ["Start at (0, 1): b = 1.", "ابدأ من (0, 1): b = 1."]], [190, 146, ["Run 2", "تغير أفقي ٢"], ["Move 2 units right.", "تحرك وحدتين يمينًا."]],
      [228, 85, ["Rise 3", "تغير رأسي ٣"], ["Then 3 units up: slope = rise ÷ run = 3/2.", "ثم ٣ وحدات لأعلى: الميل = الرأسي ÷ الأفقي = 3/2."]], [320, 36, ["The equation", "المعادلة"], ["y = mx + b with m = 3/2 and b = 1; standard form 3x − 2y = −2.", "y = mx + b حيث m = 3/2 وb = 1، والصورة العامة 3x − 2y = −2."]]]
  };
  D.mprep3u4l1 = {
    title: ["Same mean, different spread", "الوسط نفسه والتشتت مختلف"],
    svg: function () {
      var X = function (v) { return 30 + v * 6.8; }, s = "";
      [["Group 1", [33, 33, 33, 27, 24], 70, "#2563eb"], ["Group 2", [43, 35, 33, 33, 6], 170, "#f97316"]].forEach(function (r) {
        s += ln(20, r[2], 380, r[2], "var(--muted)", 1.5) + tx(20, r[2] - 44, r[0], 'style="fill:' + r[3] + '"', 12, "start");
        var seen = {}; r[1].forEach(function (v) { seen[v] = (seen[v] || 0) + 1; s += ci(X(v), r[2] - 10 - (seen[v] - 1) * 14, 6, r[3]); });
        var mn = Math.min.apply(null, r[1]), mx = Math.max.apply(null, r[1]); s += ln(X(mn), r[2] + 14, X(mx), r[2] + 14, r[3], 3) + tx((X(mn) + X(mx)) / 2, r[2] + 28, "R = " + (mx - mn), 'style="fill:' + r[3] + '"', 11);
      });
      s += ln(X(30), 20, X(30), 210, "#9333ea", 2, "5 4") + tx(X(30), 228, "x̄ = 30", 'style="fill:#9333ea"', 12);
      return g(s);
    },
    spots: [[234, 216, ["Same mean", "الوسط نفسه"], ["Both groups have mean 30 (and median and mode 33).", "للمجموعتين الوسط ٣٠ (والوسيط والمنوال ٣٣)."]], [214, 84, ["Range of group 1 = 9", "مدى المجموعة ١ = ٩"], ["33 − 24 = 9: the marks are close together.", "33 − 24 = 9: الدرجات متقاربة."]],
      [200, 184, ["Range of group 2 = 37", "مدى المجموعة ٢ = ٣٧"], ["43 − 6 = 37: much more spread out.", "43 − 6 = 37: أكثر تشتتًا بكثير."]], [71, 160, ["Extreme value 6", "القيمة المتطرفة ٦"], ["One extreme mark stretches the range; σ uses every value.", "درجة متطرفة واحدة تمد المدى، أما σ فيستخدم كل القيم."]]]
  };

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  L.names.mprep3_power = ["Power tower grid", "شبكة برج القوى"];
  L.names.mprep3_expeq = ["Exponent balance", "ميزان الأسس"];
  L.names.mprep3_parabola = ["Parabola explorer", "مستكشف القطع المكافئ"];
  L.names.mprep3_zeros = ["Zeros on the graph", "الأصفار على الرسم"];
  L.names.mprep3_rational = ["Domain explorer", "مستكشف المجال"];
  L.names.mprep3_common = ["Common domain and equality", "المجال المشترك والتساوي"];
  L.names.mprep3_fracops = ["Factor canceller", "مختصر العوامل"];
  L.names.mprep3_similar = ["Similar polygons scaler", "مكبّر المضلعات المتشابهة"];
  L.names.mprep3_simtri = ["Shadow triangles", "مثلثات الظل"];
  L.names.mprep3_dilation = ["Dilation sandbox", "معمل التمدد"];
  L.names.mprep3_trig = ["Trig ratio triangle", "مثلث النسب المثلثية"];
  L.names.mprep3_special = ["Obelisk and special angles", "المسلة والزوايا الخاصة"];
  L.names.mprep3_slopes = ["Two-line slopes", "ميلا مستقيمين"];
  L.names.mprep3_line = ["Line equation builder", "بناء معادلة المستقيم"];
  L.names.mprep3_spread = ["Dispersion dots", "نقاط التشتت"];
})();
