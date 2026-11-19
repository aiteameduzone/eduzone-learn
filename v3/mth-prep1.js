/* EduZone Learn v3 - National Maths, Egyptian Prep 1 (1st preparatory), Term 1 (2026-2027).
   Follows the Ministry Mathematics Student's Book (English edition) contents exactly:
     Unit 1 Numbers and Their Operations (5 lessons), Unit 2 Algebra (2), Unit 3 Statistics (3),
     Unit 4 Geometry & Measurement (6). 16 lessons, ids mprep1u1l1 ... mprep1u4l6, printed book pages.
   Same lesson shape as the Science grades (see sci-prep1.js). Registered as EZ3.MTHG.prep1.
   Labs: part 1 of every lesson is a live canvas manipulative (mprep1_* in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  E.MTHG = E.MTHG || {};
  var U = [];

  /* ======================= UNIT 1 - NUMBERS AND THEIR OPERATIONS ======================= */
  U.push({
    id: "mprep1u1", num: 1, icon: "🔢", color: "blue",
    title: { en: "Numbers and Their Operations", ar: "الأعداد والعمليات عليها" },
    lessons: [
      {
        id: "mprep1u1l1", icon: "⚖️", page: 2,
        title: { en: "Proportion", ar: "التناسب" },
        idea: {
          official: {
            en: ["A proportion is an equality of two ratios or two rates, for example " + eq("2/3 = 4/6") + ".",
              "In the proportion " + eq("a/b = c/d") + ", a and d are the extremes and b and c are the means.",
              "Cross multiplication: if " + eq("a/b = c/d") + " then " + eq("a × d = b × c") + ". Check " + eq("4/12") + " and " + eq("7/21") + ": " + eq("4 × 21 = 84 = 12 × 7") + ", so they form a proportion; " + eq("6/10") + " and " + eq("10/25") + " do not, because " + eq("150 ≠ 100") + ".",
              "To solve a proportion, cross-multiply and divide: " + eq("x/16 = 21/12") + " gives " + eq("12x = 336") + ", so " + eq("x = 28") + ".",
              "A body weighs 90 N on Earth and 15 N on the Moon. Another weighs 60 N on Earth: " + eq("x/60 = 15/90") + ", " + eq("90x = 900") + ", " + eq("x = 10 N") + ".",
              "On a graph, two quantities are proportional when their points lie on a straight line that passes through the origin."],
            ar: ["التناسب هو تساوي نسبتين أو معدلين، مثل " + eq("2/3 = 4/6") + ".",
              "في التناسب " + eq("a/b = c/d") + " يسمى a و d الطرفين، ويسمى b و c الوسطين.",
              "خاصية الضرب التبادلي: إذا كان " + eq("a/b = c/d") + " فإن " + eq("a × d = b × c") + ". النسبتان " + eq("4/12") + " و " + eq("7/21") + ": " + eq("4 × 21 = 84 = 12 × 7") + " إذن تكوّنان تناسبًا، أما " + eq("6/10") + " و " + eq("10/25") + " فلا، لأن " + eq("150 ≠ 100") + ".",
              "لحل التناسب نضرب تبادليًا ثم نقسم: " + eq("x/16 = 21/12") + " يعطي " + eq("12x = 336") + " إذن " + eq("x = 28") + ".",
              "جسم وزنه ٩٠ نيوتن على الأرض و١٥ نيوتن على القمر، وجسم آخر وزنه على الأرض ٦٠ نيوتن: " + eq("x/60 = 15/90") + "، " + eq("90x = 900") + "، " + eq("x = 10 N") + ".",
              "بيانيًا تكون الكميتان متناسبتين إذا وقعت نقاطهما على خط مستقيم يمر بنقطة الأصل."]
          },
          story: {
            en: ["Malak is at the Cairo International Book Fair. A pack of 3 story books costs 96 LE, and her class wants 18 books.",
              "She writes the books and the prices as two equal ratios: " + eq("3/96 = 18/x") + ".",
              "Cross-multiplying: " + eq("3 × x = 96 × 18 = 1,728") + ", so " + eq("x = 576") + " LE.",
              "To check, she notices 18 is 6 times 3, and 6 × 96 is also 576. The ratio stayed the same, so the prices are proportional.",
              "On the way home she plots (3, 96), (6, 192) and (18, 576): the points line up straight towards zero."],
            ar: ["ملك في معرض القاهرة الدولي للكتاب. ثمن ٣ قصص ٩٦ جنيهًا، وفصلها يريد ١٨ قصة.",
              "تكتب عدد الكتب والأسعار نسبتين متساويتين: " + eq("3/96 = 18/x") + ".",
              "بالضرب التبادلي: " + eq("3 × x = 96 × 18 = 1,728") + " إذن " + eq("x = 576") + " جنيهًا.",
              "للتحقق تلاحظ أن ١٨ تساوي ٦ أمثال ٣، وأن ٦ × ٩٦ تساوي ٥٧٦ أيضًا؛ النسبة لم تتغير، إذن الأسعار متناسبة.",
              "في طريق العودة تمثل النقاط (٣، ٩٦) و(٦، ١٩٢) و(١٨، ٥٧٦) فتجدها على خط مستقيم يتجه إلى الصفر."]
          }
        },
        words: [
          ["Ratio", "النسبة", "A way to compare two quantities of the same kind, like a to b or a/b.", "طريقة لمقارنة كميتين من النوع نفسه مثل a إلى b أو a/b."],
          ["Proportion", "التناسب", "An equality of two (or more) ratios or rates.", "تساوي نسبتين (أو أكثر) أو معدلين."],
          ["Extremes", "الطرفان", "In a/b = c/d, the first and last terms a and d.", "في التناسب a/b = c/d هما الحدان الأول والأخير a و d."],
          ["Means", "الوسطان", "In a/b = c/d, the middle terms b and c.", "في التناسب a/b = c/d هما الحدان الأوسطان b و c."],
          ["Cross multiplication", "الضرب التبادلي", "In a proportion, the product of the extremes equals the product of the means.", "في التناسب: حاصل ضرب الطرفين = حاصل ضرب الوسطين."],
          ["Rate", "المعدل", "A ratio between two quantities of different kinds, like km per hour.", "نسبة بين كميتين من نوعين مختلفين مثل الكيلومتر لكل ساعة."]
        ],
        lab: { parts: [{ type: "mprep1_prop" }, {
          type: "sort",
          prompt: ["Tap a pair, then tap whether it is a proportion or not.", "اضغط على الزوج ثم اختر: تناسب أم ليس تناسبًا."],
          bins: [["y", "✅", "Proportion", "تناسب"], ["n", "❌", "Not a proportion", "ليس تناسبًا"]],
          items: [[["4/12 and 7/21", "4/12 و 7/21"], "y"], [["6/10 and 10/25", "6/10 و 10/25"], "n"], [["3 kg for 54 LE, 5 kg for 90 LE", "٣ كجم بـ ٥٤ جنيهًا، ٥ كجم بـ ٩٠ جنيهًا"], "y"],
            [["3 books in 2 months, 9 books in 6 months", "٣ كتب في شهرين، ٩ كتب في ٦ أشهر"], "y"], [["10 goals in 12 tries, 12 goals in 18 tries", "١٠ أهداف من ١٢ محاولة، ١٢ هدفًا من ١٨ محاولة"], "n"],
            [["144 pulses in 2 min, 210 pulses in 3 min", "١٤٤ نبضة في دقيقتين، ٢١٠ نبضات في ٣ دقائق"], "n"], [["Points on a straight line through the origin", "نقاط على خط مستقيم يمر بنقطة الأصل"], "y"], [["Points on a line that misses the origin", "نقاط على خط لا يمر بنقطة الأصل"], "n"]]
        }] },
        quiz: [
          Q(["Solve the proportion x/16 = 21/12.", "حل التناسب x/16 = 21/12."], [["x = 28", "x = 28"], ["x = 24", "x = 24"], ["x = 21", "x = 21"], ["x = 336", "x = 336"]],
            ["Cross-multiply: 12x = 16 × 21 = 336, then divide by 12: x = 28.", "بالضرب التبادلي: 12x = 16 × 21 = 336، وبالقسمة على ١٢: x = 28."], ["336 is the product before sharing it into 12 equal parts; each part is 28.", "٣٣٦ هو حاصل الضرب قبل تقسيمه على ١٢ جزءًا متساويًا، وكل جزء ٢٨."]),
          Q(["Which pair of ratios forms a proportion?", "أي زوج من النسب يكوّن تناسبًا؟"], [["4/12 and 7/21", "4/12 و 7/21"], ["6/10 and 10/25", "6/10 و 10/25"], ["3/5 and 5/3", "3/5 و 5/3"], ["2/7 and 4/12", "2/7 و 4/12"]],
            ["4 × 21 = 84 and 12 × 7 = 84: the cross products are equal. The others give 150 ≠ 100, 9 ≠ 25 and 24 ≠ 28.", "4 × 21 = 84 و 12 × 7 = 84 فحاصلا الضرب التبادلي متساويان، والباقي يعطي 150 ≠ 100 و 9 ≠ 25 و 24 ≠ 28."], ["Both ratios simplify to 1/3, like one slice out of every three.", "النسبتان تُختصران إلى 1/3، مثل قطعة من كل ثلاث قطع."]),
          Q(["Magdy runs 75 m in 25 s. At the same speed, how long does he need for 300 m?", "يجري مجدي ٧٥ مترًا في ٢٥ ثانية. بالسرعة نفسها، كم يحتاج ليجري ٣٠٠ متر؟"], [["100 s", "١٠٠ ثانية"], ["900 s", "٩٠٠ ثانية"], ["125 s", "١٢٥ ثانية"], ["12 s", "١٢ ثانية"]],
            ["75/25 = 300/x, so 75x = 7,500 and x = 100 s.", "75/25 = 300/x إذن 75x = 7,500 و x = 100 ثانية."], ["300 m is 4 laps of 75 m, so 4 × 25 = 100 s.", "٣٠٠ متر = ٤ مرات ٧٥ مترًا، إذن ٤ × ٢٥ = ١٠٠ ثانية."]),
          Q(["Omar bought 8 apples for 60 LE. How many apples of the same type can he buy for 105 LE?", "اشترى عمر ٨ تفاحات بـ ٦٠ جنيهًا. كم تفاحة من النوع نفسه يشتري بـ ١٠٥ جنيهات؟"], [["14", "١٤"], ["12", "١٢"], ["16", "١٦"], ["13", "١٣"]],
            ["8/60 = x/105, so 60x = 840 and x = 14 apples.", "8/60 = x/105 إذن 60x = 840 و x = 14 تفاحة."], ["One apple costs 7.5 LE, and 105 ÷ 7.5 = 14.", "التفاحة بـ ٧٫٥ جنيه، و ١٠٥ ÷ ٧٫٥ = ١٤."]),
          Q(["A car uses 5 litres of petrol for 40 km. How many litres does it need for 128 km at the same rate?", "تستهلك سيارة ٥ لترات بنزين لقطع ٤٠ كم. كم لترًا تحتاج لقطع ١٢٨ كم بالمعدل نفسه؟"], [["16 litres", "١٦ لترًا"], ["25.6 litres", "٢٥٫٦ لترًا"], ["12 litres", "١٢ لترًا"], ["18 litres", "١٨ لترًا"]],
            ["5/40 = x/128, so 40x = 640 and x = 16 litres.", "5/40 = x/128 إذن 40x = 640 و x = 16 لترًا."], ["One litre takes the car 8 km, and 128 ÷ 8 = 16.", "كل لتر يقطع ٨ كم، و ١٢٨ ÷ ٨ = ١٦."]),
          Q(["In the proportion a : b = c : d, which terms are the means?", "في التناسب a : b = c : d ما الوسطان؟"], [["b and c", "b و c"], ["a and d", "a و d"], ["a and b", "a و b"], ["c and d", "c و d"]],
            ["The means are the two middle terms b and c; a and d are the extremes, and a × d = b × c.", "الوسطان هما الحدان الأوسطان b و c، والطرفان a و d، و a × d = b × c."], ["The means sit in the middle of the line, the extremes guard the two ends.", "الوسطان يجلسان في المنتصف، والطرفان يحرسان النهايتين."]),
          Q(["Eman reads 10 pages in 40 minutes. How many hours does a 120-page book take her?", "تقرأ إيمان ١٠ صفحات في ٤٠ دقيقة. كم ساعة تحتاج لقراءة كتاب من ١٢٠ صفحة؟"], [["8 hours", "٨ ساعات"], ["4 hours", "٤ ساعات"], ["12 hours", "١٢ ساعة"], ["480 hours", "٤٨٠ ساعة"]],
            ["10/40 = 120/x, so x = 480 minutes = 480 ÷ 60 = 8 hours.", "10/40 = 120/x إذن x = 480 دقيقة = 480 ÷ 60 = 8 ساعات."], ["120 pages is 12 sessions of 40 minutes: 480 minutes, which is 8 hours.", "١٢٠ صفحة = ١٢ جلسة كل منها ٤٠ دقيقة: ٤٨٠ دقيقة أي ٨ ساعات."]),
          Q(["If 15% of x equals 20% of y, what is x : y?", "إذا كان ١٥٪ من x يساوي ٢٠٪ من y، فما x : y؟"], [["4 : 3", "4 : 3"], ["3 : 4", "3 : 4"], ["5 : 4", "5 : 4"], ["3 : 2", "3 : 2"]],
            ["0.15x = 0.2y, so x/y = 0.2/0.15 = 20/15 = 4/3.", "0.15x = 0.2y إذن x/y = 0.2/0.15 = 20/15 = 4/3."], ["A smaller percentage of x matches a bigger percentage of y, so x must be the bigger number.", "نسبة أصغر من x تساوي نسبة أكبر من y، إذن x هو العدد الأكبر."])
        ]
      },
      {
        id: "mprep1u1l2", icon: "🗺️", page: 7,
        title: { en: "Applications of Ratio and Proportion", ar: "تطبيقات على النسبة والتناسب" },
        idea: {
          official: {
            en: ["Scale drawing = length in drawing ÷ real length, with both lengths in the same unit. Less than 1 is a minimization; more than 1 is a magnification.",
              "A map has scale 1 : 600,000 and two points are 4.5 cm apart: " + eq("real = 600,000 × 4.5 = 2,700,000 cm = 27 km") + ".",
              "Proportional division shares a quantity in a given ratio. 1,200,000 atoms in the ratio 2 : 1: sum of parts " + eq("3") + ", part value " + eq("400,000") + ", so H = 800,000 and O = 400,000.",
              "Discount: a phone costs 12,750 LE with 8% off. " + eq("12,750 × 8/100 = 1,020") + ", new price " + eq("12,750 − 1,020 = 11,730 LE") + ".",
              "Original price: Sandy paid 340 LE after 15% off, so 340 is 85% of the price: " + eq("P = 340 × 100 ÷ 85 = 400 LE") + ".",
              "Tax: 520 LE plus 14% tax: " + eq("520 × 14/100 = 72.8") + ", so Omar pays " + eq("592.8 LE") + "."],
            ar: ["مقياس الرسم = الطول في الرسم ÷ الطول الحقيقي بوحدة واحدة. إذا كان أقل من ١ فهو تصغير، وإذا كان أكبر من ١ فهو تكبير.",
              "خريطة مقياس رسمها 1 : 600,000 والمسافة بين نقطتين عليها ٤٫٥ سم: " + eq("real = 600,000 × 4.5 = 2,700,000 cm = 27 km") + ".",
              "التقسيم التناسبي هو تقسيم كمية حسب نسبة معلومة. ١٢٠٠٠٠٠ ذرة بنسبة 2 : 1: مجموع الأجزاء " + eq("3") + " وقيمة الجزء " + eq("400,000") + " إذن الهيدروجين ٨٠٠٠٠٠ والأكسجين ٤٠٠٠٠٠.",
              "الخصم: هاتف ثمنه ١٢٧٥٠ جنيهًا وعليه خصم ٨٪: " + eq("12,750 × 8/100 = 1,020") + " والثمن بعد الخصم " + eq("12,750 − 1,020 = 11,730") + " جنيهًا.",
              "الثمن الأصلي: دفعت ساندي ٣٤٠ جنيهًا بعد خصم ١٥٪، إذن ٣٤٠ تمثل ٨٥٪ من الثمن: " + eq("P = 340 × 100 ÷ 85 = 400") + " جنيه.",
              "الضريبة: اشتراك ٥٢٠ جنيهًا وعليه ضريبة ١٤٪: " + eq("520 × 14/100 = 72.8") + " فيدفع عمر " + eq("592.8") + " جنيهًا."]
          },
          story: {
            en: ["Hana draws the Iconic Tower of the New Administrative Capital at a scale of 1 : 1,000. Her drawing is 38.5 cm tall.",
              "Real height = 38.5 × 1,000 = 38,500 cm = 385 m: the tallest building in Africa fits on her paper.",
              "Her uncle gives her and her brother 360 LE to share in the ratio 3 : 2. There are 5 parts, each 72 LE: Hana gets 216 LE and her brother 144 LE.",
              "She buys a 420 LE shirt with a 20% discount: 420 × 20/100 = 84 LE off, so she pays 336 LE.",
              "Every step was the same idea: equal ratios keep things fair."],
            ar: ["ترسم هنا البرج الأيقوني في العاصمة الإدارية الجديدة بمقياس رسم 1 : 1,000، فيكون طول رسمها ٣٨٫٥ سم.",
              "الارتفاع الحقيقي = ٣٨٫٥ × ١٠٠٠ = ٣٨٥٠٠ سم = ٣٨٥ مترًا؛ أطول مبنى في أفريقيا على ورقتها.",
              "يعطيها عمها هي وأخاها ٣٦٠ جنيهًا يقتسمانها بنسبة 3 : 2. عدد الأجزاء ٥ وكل جزء ٧٢ جنيهًا: نصيب هنا ٢١٦ جنيهًا ونصيب أخيها ١٤٤ جنيهًا.",
              "تشتري قميصًا ثمنه ٤٢٠ جنيهًا بخصم ٢٠٪: الخصم ٤٢٠ × ٢٠/١٠٠ = ٨٤ جنيهًا فتدفع ٣٣٦ جنيهًا.",
              "كل خطوة كانت الفكرة نفسها: النسب المتساوية تحفظ العدل."]
          }
        },
        words: [
          ["Scale drawing", "مقياس الرسم", "Length in the drawing ÷ real length (same units).", "الطول في الرسم ÷ الطول الحقيقي (بوحدة واحدة)."],
          ["Length in drawing", "الطول في الرسم", "The length measured on the map, plan or model.", "الطول المقيس على الخريطة أو الرسم أو النموذج."],
          ["Real length", "الطول الحقيقي", "The actual length of the object in reality.", "الطول الفعلي للشيء في الواقع."],
          ["Magnification", "التكبير", "A scale greater than 1: the drawing is bigger than the real object.", "مقياس رسم أكبر من ١: الرسم أكبر من الشيء الحقيقي."],
          ["Minimization", "التصغير", "A scale less than 1: the drawing is smaller than reality, like a map.", "مقياس رسم أقل من ١: الرسم أصغر من الحقيقة مثل الخريطة."],
          ["Proportional division", "التقسيم التناسبي", "Dividing money, land or mass into parts according to a given ratio.", "تقسيم مال أو أرض أو كتلة إلى أجزاء حسب نسبة معلومة."],
          ["Discount", "الخصم", "The amount taken off a price: price × d%.", "المبلغ الذي يُطرح من الثمن: الثمن × نسبة الخصم."]
        ],
        lab: { parts: [{ type: "mprep1_scale" }, {
          type: "sort",
          prompt: ["Tap a scale, then tap: magnification or minimization?", "اضغط على المقياس ثم اختر: تكبير أم تصغير؟"],
          bins: [["mag", "🔍", "Magnification", "تكبير"], ["min", "🗺️", "Minimization", "تصغير"]],
          items: [[["1 : 600,000 (a map)", "1 : 600,000 (خريطة)"], "min"], [["30 : 1 (an insect photo)", "30 : 1 (صورة حشرة)"], "mag"], [["1 : 200 (a model of Cairo Tower)", "1 : 200 (نموذج برج القاهرة)"], "min"],
            [["40 : 1 (a 3 mm insect drawn 12 cm long)", "40 : 1 (حشرة ٣ مم رُسمت بطول ١٢ سم)"], "mag"], [["1 : 1,000 (the Iconic Tower drawing)", "1 : 1,000 (رسم البرج الأيقوني)"], "min"], [["A microscope picture of a cell", "صورة خلية بالمجهر"], "mag"]]
        }] },
        quiz: [
          Q(["A length of 6 m is drawn as 2 cm. What is the scale drawing?", "رُسم طول حقيقي ٦ أمتار بطول ٢ سم. ما مقياس الرسم؟"], [["1 : 300", "1 : 300"], ["1 : 3", "1 : 3"], ["1 : 30", "1 : 30"], ["1 : 3,000", "1 : 3,000"]],
            ["Change to the same unit: 6 m = 600 cm. Scale = 2 : 600 = 1 : 300.", "نحوّل إلى وحدة واحدة: ٦ م = ٦٠٠ سم، والمقياس = 2 : 600 = 1 : 300."], ["Every 1 cm on paper stands for 300 cm, which is 3 m, of the real thing.", "كل ١ سم على الورق يمثل ٣٠٠ سم أي ٣ أمتار في الحقيقة."]),
          Q(["The scale is 1 : 1,000 and the length in the drawing is 2.5 cm. What is the real length?", "مقياس الرسم 1 : 1,000 والطول في الرسم ٢٫٥ سم. ما الطول الحقيقي؟"], [["25 m", "٢٥ مترًا"], ["2.5 m", "٢٫٥ متر"], ["250 m", "٢٥٠ مترًا"], ["0.25 m", "٠٫٢٥ متر"]],
            ["Real = 2.5 × 1,000 = 2,500 cm = 25 m.", "الطول الحقيقي = ٢٫٥ × ١٠٠٠ = ٢٥٠٠ سم = ٢٥ مترًا."], ["Each paper centimetre is 10 real metres, so 2.5 cm is 25 m.", "كل سنتيمتر على الورق يساوي ١٠ أمتار، إذن ٢٫٥ سم = ٢٥ مترًا."]),
          Q(["A real length of 90 m is drawn at 1 : 10,000. How long is the drawing?", "طول حقيقي ٩٠ مترًا رُسم بمقياس 1 : 10,000. كم طوله في الرسم؟"], [["0.9 cm", "٠٫٩ سم"], ["9 cm", "٩ سم"], ["90 cm", "٩٠ سم"], ["0.09 cm", "٠٫٠٩ سم"]],
            ["90 m = 9,000 cm, and 9,000 ÷ 10,000 = 0.9 cm.", "٩٠ م = ٩٠٠٠ سم، و ٩٠٠٠ ÷ ١٠٠٠٠ = ٠٫٩ سم."], ["One centimetre would be 100 m, so 90 m is a bit less than 1 cm.", "السنتيمتر الواحد يمثل ١٠٠ متر، إذن ٩٠ مترًا أقل قليلًا من ١ سم."]),
          Q(["Three persons share 7,200 LE in the ratio 3 : 4 : 5. What is the largest share?", "اقتسم ثلاثة أشخاص ٧٢٠٠ جنيه بنسبة 3 : 4 : 5. ما أكبر نصيب؟"], [["3,000 LE", "٣٠٠٠ جنيه"], ["2,400 LE", "٢٤٠٠ جنيه"], ["1,800 LE", "١٨٠٠ جنيه"], ["600 LE", "٦٠٠ جنيه"]],
            ["Sum of parts = 12, part value = 7,200 ÷ 12 = 600, largest share = 5 × 600 = 3,000 LE.", "مجموع الأجزاء ١٢، وقيمة الجزء ٧٢٠٠ ÷ ١٢ = ٦٠٠، وأكبر نصيب = ٥ × ٦٠٠ = ٣٠٠٠ جنيه."], ["Cut the money into 12 equal envelopes of 600; the biggest person takes 5 envelopes.", "قسّم المال إلى ١٢ ظرفًا في كل منها ٦٠٠ جنيه، وصاحب النصيب الأكبر يأخذ ٥ أظرف."]),
          Q(["A price is reduced from 1,500 LE to 1,200 LE. What is the discount rate?", "انخفض ثمن سلعة من ١٥٠٠ جنيه إلى ١٢٠٠ جنيه. ما نسبة الخصم؟"], [["20%", "٢٠٪"], ["30%", "٣٠٪"], ["15%", "١٥٪"], ["25%", "٢٥٪"]],
            ["Discount = 300 LE, and 300 ÷ 1,500 × 100 = 20%.", "الخصم ٣٠٠ جنيه، و ٣٠٠ ÷ ١٥٠٠ × ١٠٠ = ٢٠٪."], ["300 is one fifth of 1,500, and one fifth is 20%.", "٣٠٠ خُمس ١٥٠٠، والخُمس = ٢٠٪."]),
          Q(["After a 16% discount a TV costs 12,600 LE. What was its price before the discount?", "بعد خصم ١٦٪ أصبح ثمن تلفاز ١٢٦٠٠ جنيه. كم كان ثمنه قبل الخصم؟"], [["15,000 LE", "١٥٠٠٠ جنيه"], ["14,616 LE", "١٤٦١٦ جنيهًا"], ["10,584 LE", "١٠٥٨٤ جنيهًا"], ["14,000 LE", "١٤٠٠٠ جنيه"]],
            ["12,600 is 84% of the price: P = 12,600 × 100 ÷ 84 = 15,000 LE.", "١٢٦٠٠ تمثل ٨٤٪ من الثمن: P = 12,600 × 100 ÷ 84 = 15,000 جنيه."], ["Adding 16% of 12,600 is a trap: the 16% was taken from the old, bigger price.", "إضافة ١٦٪ من ١٢٦٠٠ خطأ شائع، لأن الخصم أُخذ من الثمن القديم الأكبر."]),
          Q(["A meal costs 150 LE and 18% is added as profit. What is the sale price?", "تكلفة وجبة ١٥٠ جنيهًا ويضاف إليها ١٨٪ ربحًا. ما سعر البيع؟"], [["177 LE", "١٧٧ جنيهًا"], ["168 LE", "١٦٨ جنيهًا"], ["123 LE", "١٢٣ جنيهًا"], ["27 LE", "٢٧ جنيهًا"]],
            ["Profit = 150 × 18/100 = 27 LE, sale price = 150 + 27 = 177 LE.", "الربح = ١٥٠ × ١٨/١٠٠ = ٢٧ جنيهًا، وسعر البيع = ١٥٠ + ٢٧ = ١٧٧ جنيهًا."], ["Or in one step: 118% of 150 = 1.18 × 150 = 177.", "أو بخطوة واحدة: ١١٨٪ من ١٥٠ = ١٫١٨ × ١٥٠ = ١٧٧."]),
          Q(["The ratio of two numbers is 2 : 5 and the smaller number is 48. What is the larger number?", "النسبة بين عددين 2 : 5 والعدد الأصغر ٤٨. ما العدد الأكبر؟"], [["120", "١٢٠"], ["96", "٩٦"], ["240", "٢٤٠"], ["19.2", "١٩٫٢"]],
            ["2/5 = 48/x, so 2x = 240 and x = 120.", "2/5 = 48/x إذن 2x = 240 و x = 120."], ["2 parts are 48, so one part is 24 and 5 parts are 120.", "الجزءان = ٤٨ إذن الجزء = ٢٤، والأجزاء الخمسة = ١٢٠."])
        ]
      },
      {
        id: "mprep1u1l3", icon: "⭕", page: 14,
        title: { en: "Sets and Their Operations", ar: "المجموعات والعمليات عليها" },
        idea: {
          official: {
            en: ["A set is a collection of well-defined objects called elements, written inside braces { } without repetition; the order does not matter.",
              "Natural numbers less than 4: listing method " + eq("A = {0, 1, 2, 3}") + ", set-builder method " + eq("A = {x : x ∈ N, x < 4}") + ", or a Venn diagram.",
              "Sets can be finite, infinite like " + eq("N = {0, 1, 2, ...}") + ", or empty " + eq("∅ = { }") + ". The symbol " + eq("∈") + " means belongs to and " + eq("∉") + " does not belong to.",
              "B is a subset of A, " + eq("B ⊂ A") + ", when every element of B belongs to A. A set of n elements has " + eq("2ⁿ") + " subsets: {4, 6, 8} has " + eq("2³ = 8") + ".",
              "Union " + eq("A ∪ B") + " = the elements in A or in B. Intersection " + eq("A ∩ B") + " = the common elements. If " + eq("A ∩ B = ∅") + " the sets are disjoint.",
              "Numbers divisible by 2: {4, 6, 8, 12}; by 3: {6, 9, 12}. Intersection {6, 12}; union {4, 6, 8, 9, 12}."],
            ar: ["المجموعة تجمّع من أشياء محددة تمامًا تسمى عناصر، وتُكتب بين قوسين { } دون تكرار، ولا يهم ترتيبها.",
              "مجموعة الأعداد الطبيعية الأقل من ٤: بطريقة السرد " + eq("A = {0, 1, 2, 3}") + "، وبطريقة الصفة المميزة " + eq("A = {x : x ∈ N, x < 4}") + "، أو بشكل فن.",
              "المجموعة قد تكون منتهية أو غير منتهية مثل " + eq("N = {0, 1, 2, ...}") + " أو خالية " + eq("∅ = { }") + ". الرمز " + eq("∈") + " يعني ينتمي، و " + eq("∉") + " يعني لا ينتمي.",
              "تكون B مجموعة جزئية من A، " + eq("B ⊂ A") + "، إذا كان كل عنصر في B ينتمي إلى A. والمجموعة ذات n عنصرًا لها " + eq("2ⁿ") + " مجموعة جزئية: {4, 6, 8} لها " + eq("2³ = 8") + ".",
              "الاتحاد " + eq("A ∪ B") + " = العناصر الموجودة في A أو في B. التقاطع " + eq("A ∩ B") + " = العناصر المشتركة. وإذا كان " + eq("A ∩ B = ∅") + " فالمجموعتان منفصلتان.",
              "الأعداد التي تقبل القسمة على ٢: {4, 6, 8, 12}، وعلى ٣: {6, 9, 12}. التقاطع {6, 12} والاتحاد {4, 6, 8, 9, 12}."]
          },
          story: {
            en: ["Mazen keeps the lists for the school activities. Press club A = {Sameh, Yasser, Mona, Shaimaa}. Theatre club B = {Youssef, Mazen, Sameh, Mona, Sally}.",
              "He draws two overlapping circles. Sameh and Mona go in the middle because they are in both clubs: A ∩ B = {Sameh, Mona}.",
              "Everyone in either club is the union: A ∪ B = {Sameh, Yasser, Mona, Shaimaa, Youssef, Mazen, Sally}. Each name is written once.",
              "The headteacher asks for 'clubs with no members from Grade 9': nobody, so that set is empty, ∅.",
              "Mazen smiles: a Venn diagram is just a tidy school yard with circles."],
            ar: ["مازن مسؤول عن قوائم الأنشطة المدرسية. جماعة الصحافة A = {سامح، ياسر، منى، شيماء}، وجماعة المسرح B = {يوسف، مازن، سامح، منى، سالي}.",
              "يرسم دائرتين متداخلتين، ويضع سامح ومنى في المنطقة المشتركة لأنهما في الجماعتين: A ∩ B = {سامح، منى}.",
              "كل من في أي جماعة يكوّن الاتحاد: A ∪ B = {سامح، ياسر، منى، شيماء، يوسف، مازن، سالي}، وكل اسم يُكتب مرة واحدة.",
              "تسأل المديرة عن أعضاء الجماعات من الصف التاسع: لا أحد، إذن هذه المجموعة خالية ∅.",
              "يبتسم مازن: شكل فن مجرد فناء مدرسة منظم بالدوائر."]
          }
        },
        words: [
          ["Set", "المجموعة", "A collection of well-defined objects (elements) written in { } without repetition.", "تجمّع من أشياء محددة تمامًا (عناصر) يُكتب بين { } دون تكرار."],
          ["Listing method", "طريقة السرد", "Writing every element of the set between braces: {0, 1, 2, 3}.", "كتابة كل عناصر المجموعة بين القوسين: {0, 1, 2, 3}."],
          ["Set-builder method", "طريقة الصفة المميزة", "Describing the elements by a rule: {x : x ∈ N, x < 4}.", "وصف العناصر بقاعدة: {x : x ∈ N, x < 4}."],
          ["Subset", "مجموعة جزئية", "B ⊂ A when every element of B is also in A.", "B ⊂ A إذا كان كل عنصر في B موجودًا في A."],
          ["Union", "الاتحاد", "A ∪ B: all the elements that are in A or in B.", "A ∪ B: كل العناصر الموجودة في A أو في B."],
          ["Intersection", "التقاطع", "A ∩ B: the elements common to A and B.", "A ∩ B: العناصر المشتركة بين A و B."],
          ["Empty set", "المجموعة الخالية", "A set with no elements, written ∅ or { }.", "مجموعة ليس بها أي عنصر، وتُكتب ∅ أو { }."]
        ],
        lab: { parts: [{ type: "mprep1_venn" }, {
          type: "sort",
          prompt: ["Tap a set, then tap its type.", "اضغط على المجموعة ثم اختر نوعها."],
          bins: [["f", "🔢", "Finite", "منتهية"], ["i", "♾️", "Infinite", "غير منتهية"], ["e", "∅", "Empty", "خالية"]],
          items: [[["{2, 3, 5}", "{2, 3, 5}"], "f"], [["N = {0, 1, 2, 3, ...}", "N = {0, 1, 2, 3, ...}"], "i"], [["The integers between 1 and 2", "الأعداد الصحيحة بين ١ و ٢"], "e"], [["{x : x ∈ N, x < 4}", "{x : x ∈ N, x < 4}"], "f"],
            [["The set of negative integers", "مجموعة الأعداد الصحيحة السالبة"], "i"], [["Odd numbers between 3 and 5", "الأعداد الفردية بين ٣ و ٥"], "e"], [["The digits of 4540", "مجموعة أرقام العدد ٤٥٤٠"], "f"]]
        }] },
        quiz: [
          Q(["A = {8, 9, 6} and B = {2, 6, 7}. What is A ∩ B?", "A = {8, 9, 6} و B = {2, 6, 7}. ما A ∩ B؟"], [["{6}", "{6}"], ["{2, 7}", "{2, 7}"], ["{8, 9}", "{8, 9}"], ["{2, 6, 7, 8, 9}", "{2, 6, 7, 8, 9}"]],
            ["The intersection holds only the common elements: 6 is the only number in both sets.", "التقاطع يحتوي العناصر المشتركة فقط، والعدد ٦ وحده موجود في المجموعتين."], ["Only 6 stands in the overlap of the two circles.", "العدد ٦ وحده يقف في المنطقة المشتركة بين الدائرتين."]),
          Q(["A = {8, 9, 6} and B = {2, 6, 7}. What is A ∪ B?", "A = {8, 9, 6} و B = {2, 6, 7}. ما A ∪ B؟"], [["{2, 6, 7, 8, 9}", "{2, 6, 7, 8, 9}"], ["{6}", "{6}"], ["{2, 6, 6, 7, 8, 9}", "{2, 6, 6, 7, 8, 9}"], ["{8, 9}", "{8, 9}"]],
            ["The union holds every element of A or B, each written once: {2, 6, 7, 8, 9}.", "الاتحاد يحتوي كل عناصر A أو B، وكل عنصر يُكتب مرة واحدة: {2, 6, 7, 8, 9}."], ["Call everyone from both lists, but nobody answers twice.", "نادِ كل من في القائمتين، ولا أحد يرد مرتين."]),
          Q(["How many subsets does A = {5, 7} have?", "كم مجموعة جزئية للمجموعة A = {5, 7}؟"], [["4", "٤"], ["2", "٢"], ["3", "٣"], ["8", "٨"]],
            ["2² = 4: ∅, {5}, {7} and {5, 7}.", "2² = 4: ∅ و {5} و {7} و {5, 7}."], ["Each element can be in or out of the bag: 2 × 2 = 4 choices.", "كل عنصر إما داخل الكيس أو خارجه: ٢ × ٢ = ٤ اختيارات."]),
          Q(["If x ∉ {3, 4, 1}, which value can x be?", "إذا كان x ∉ {3, 4, 1} فأي قيمة يمكن أن تكون x؟"], [["2", "٢"], ["1", "١"], ["3", "٣"], ["4", "٤"]],
            ["∉ means does not belong. 1, 3 and 4 are elements, so only 2 is possible.", "∉ تعني لا ينتمي، و ١ و ٣ و ٤ عناصر في المجموعة، إذن ٢ فقط ممكنة."], ["x must stay outside the circle, and only 2 is not inside.", "يجب أن يبقى x خارج الدائرة، و ٢ وحده ليس بداخلها."]),
          Q(["A = {4, 2, 7} and B ⊂ A. Which set can B be?", "A = {4, 2, 7} و B ⊂ A. أي مجموعة يمكن أن تكون B؟"], [["{7, 2}", "{7, 2}"], ["{4, 6}", "{4, 6}"], ["{4, 3, 7}", "{4, 3, 7}"], ["{1, 3, 5}", "{1, 3, 5}"]],
            ["Every element of {7, 2} is in A. The others contain 6, 3 or 1, which are not in A.", "كل عناصر {7, 2} موجودة في A، أما الباقي ففيه ٦ أو ٣ أو ١ وهي ليست في A."], ["A small bag can only hold things taken from the big bag.", "الكيس الصغير لا يحمل إلا أشياء مأخوذة من الكيس الكبير."]),
          Q(["If {3, 6, 7, x} = {6, y, 3, 5}, what is y − x?", "إذا كان {3, 6, 7, x} = {6, y, 3, 5} فما قيمة y − x؟"], [["2", "٢"], ["−2", "−٢"], ["12", "١٢"], ["−12", "−١٢"]],
            ["Equal sets have the same elements, so x = 5 and y = 7. Then y − x = 7 − 5 = 2.", "المجموعتان المتساويتان لهما العناصر نفسها، إذن x = 5 و y = 7، و y − x = 7 − 5 = 2."], ["5 is missing on the left and 7 on the right: x fills one gap and y the other.", "العدد ٥ ناقص في اليسار و ٧ ناقص في اليمين: x يملأ فراغًا و y يملأ الآخر."]),
          Q(["A = {1, 2, 3, 4} and B = {3, 4, 5, 6}. What is A ∩ B?", "A = {1, 2, 3, 4} و B = {3, 4, 5, 6}. ما A ∩ B؟"], [["{3, 4}", "{3, 4}"], ["{1, 2, 3, 4, 5, 6}", "{1, 2, 3, 4, 5, 6}"], ["{1, 2, 5, 6}", "{1, 2, 5, 6}"], ["∅", "∅"]],
            ["3 and 4 are in both sets.", "العددان ٣ و ٤ موجودان في المجموعتين."], ["Two friends who joined both clubs: 3 and 4.", "صديقان اشتركا في الجماعتين: ٣ و ٤."]),
          Q(["Which number cannot be the number of subsets of a set?", "أي عدد لا يمكن أن يكون عدد المجموعات الجزئية لمجموعة؟"], [["36", "٣٦"], ["16", "١٦"], ["64", "٦٤"], ["128", "١٢٨"]],
            ["The number of subsets is always 2ⁿ: 16 = 2⁴, 64 = 2⁶, 128 = 2⁷, but 36 is not a power of 2.", "عدد المجموعات الجزئية دائمًا 2ⁿ: ١٦ = 2⁴ و ٦٤ = 2⁶ و ١٢٨ = 2⁷، أما ٣٦ فليس قوة للعدد ٢."], ["Keep doubling 1, 2, 4, 8, 16, 32, 64: you jump over 36.", "ضاعف ١، ٢، ٤، ٨، ١٦، ٣٢، ٦٤: ستقفز فوق ٣٦."])
        ]
      },
      {
        id: "mprep1u1l4", icon: "➖", page: 19,
        title: { en: "Operations on Integers", ar: "العمليات على الأعداد الصحيحة" },
        idea: {
          official: {
            en: ["The integers are " + eq("Z = {..., −3, −2, −1, 0, 1, 2, 3, ...}") + ". Zero is neither positive nor negative, and Z increases from left to right on the number line.",
              "Same signs: add the absolute values and keep the sign: " + eq("−13 + (−7) = −20") + ". Opposite signs: subtract the absolute values and take the sign of the larger one: " + eq("−13 + 7 = −6") + ".",
              "Subtracting is adding the additive inverse: " + eq("a − b = a + (−b)") + ", so " + eq("−4 − (−6) = −4 + 6 = 2") + ".",
              "Multiplication is repeated addition: " + eq("3 × (−3) = (−3) + (−3) + (−3) = −9") + ". Same signs give a positive product, opposite signs a negative one.",
              "Division follows the same sign rules: " + eq("25 ÷ (−5) = −5") + ", " + eq("(−32) ÷ (−4) = 8") + ". Dividing by zero is undefined.",
              "Properties: closure, commutative, associative, additive identity 0, multiplicative identity 1, additive inverse " + eq("a + (−a) = 0") + ", and the distributive property."],
            ar: ["الأعداد الصحيحة " + eq("Z = {..., −3, −2, −1, 0, 1, 2, 3, ...}") + "، والصفر ليس موجبًا ولا سالبًا، وتتزايد Z من اليسار إلى اليمين على خط الأعداد.",
              "إشارتان متشابهتان: نجمع القيمتين المطلقتين ونضع الإشارة نفسها: " + eq("−13 + (−7) = −20") + ". إشارتان مختلفتان: نطرح القيمتين المطلقتين ونضع إشارة الأكبر قيمة مطلقة: " + eq("−13 + 7 = −6") + ".",
              "الطرح هو جمع المعكوس الجمعي: " + eq("a − b = a + (−b)") + "، إذن " + eq("−4 − (−6) = −4 + 6 = 2") + ".",
              "الضرب جمع متكرر: " + eq("3 × (−3) = (−3) + (−3) + (−3) = −9") + "؛ حاصل ضرب عددين متشابهين في الإشارة موجب، ومختلفين في الإشارة سالب.",
              "القسمة لها قواعد الإشارات نفسها: " + eq("25 ÷ (−5) = −5") + " و " + eq("(−32) ÷ (−4) = 8") + "، والقسمة على الصفر غير معرّفة.",
              "الخواص: الانغلاق والإبدال والدمج، والمحايد الجمعي ٠، والمحايد الضربي ١، والمعكوس الجمعي " + eq("a + (−a) = 0") + "، وخاصية التوزيع."]
          },
          story: {
            en: ["Seif's school trip goes from the top of Mount Catherine, 2,620 m above sea level, to the Qattara Depression, 134 m below sea level.",
              "He writes the heights as integers: +2,620 and −134. The difference is 2,620 − (−134) = 2,620 + 134 = 2,754 m.",
              "At night in Saint Catherine it is 11 °C and then the temperature drops 15 degrees: 11 + (−15) = −4 °C.",
              "On the bus he uses counting cards: two +1 cards and four −1 cards. Two zero pairs cancel and −2 is left, so 2 + (−4) = −2.",
              "Signs are just directions: up and down, warm and cold, right and left."],
            ar: ["رحلة سيف المدرسية تبدأ من قمة جبل كاترين على ارتفاع ٢٦٢٠ مترًا فوق سطح البحر، وتنتهي في منخفض القطارة على عمق ١٣٤ مترًا تحت سطح البحر.",
              "يكتب الارتفاعين عددين صحيحين: +٢٦٢٠ و −١٣٤، والفرق ٢٦٢٠ − (−١٣٤) = ٢٦٢٠ + ١٣٤ = ٢٧٥٤ مترًا.",
              "ليلًا في سانت كاترين كانت الحرارة ١١ °س ثم انخفضت ١٥ درجة: ١١ + (−١٥) = −٤ °س.",
              "في الحافلة يستخدم بطاقات العد: بطاقتان +١ وأربع بطاقات −١؛ يلغي كل زوج صفري نفسه ويتبقى −٢، إذن ٢ + (−٤) = −٢.",
              "الإشارات مجرد اتجاهات: صعود وهبوط، دفء وبرودة، يمين ويسار."]
          }
        },
        words: [
          ["Integers", "الأعداد الصحيحة", "The set Z of positive integers, zero and negative integers.", "المجموعة Z وتشمل الأعداد الصحيحة الموجبة والصفر والسالبة."],
          ["Absolute value", "القيمة المطلقة", "The distance of a number from zero: |−7| = 7.", "بُعد العدد عن الصفر: |−7| = 7."],
          ["Additive inverse", "المعكوس الجمعي", "The opposite number: a + (−a) = 0.", "العدد المقابل: a + (−a) = 0."],
          ["Additive identity", "المحايد الجمعي", "Zero: a + 0 = a.", "الصفر: a + 0 = a."],
          ["Closure", "الانغلاق", "Adding, subtracting or multiplying two integers always gives an integer.", "جمع أو طرح أو ضرب عددين صحيحين يعطي دائمًا عددًا صحيحًا."],
          ["Associative property", "خاصية الدمج", "(a + b) + c = a + (b + c), and the same for multiplication.", "(a + b) + c = a + (b + c)، وكذلك في الضرب."],
          ["Distributive property", "خاصية التوزيع", "a × (b + c) = a × b + a × c.", "a × (b + c) = a × b + a × c."]
        ],
        lab: { parts: [{ type: "mprep1_int" }, {
          type: "sort",
          prompt: ["Tap a calculation, then tap the sign of its result.", "اضغط على العملية ثم اختر إشارة ناتجها."],
          bins: [["p", "➕", "Positive", "موجب"], ["n", "➖", "Negative", "سالب"], ["z", "0️⃣", "Zero", "صفر"]],
          items: [[["−13 + 7", "−13 + 7"], "n"], [["13 + (−7)", "13 + (−7)"], "p"], [["7 + (−7)", "7 + (−7)"], "z"], [["(−2) × (−7)", "(−2) × (−7)"], "p"],
            [["54 ÷ (−9)", "54 ÷ (−9)"], "n"], [["0 × (−5)", "0 × (−5)"], "z"], [["−17 − (−24)", "−17 − (−24)"], "p"], [["18 − 40", "18 − 40"], "n"]]
        }] },
        quiz: [
          Q(["What is −13 + 7?", "ما ناتج −13 + 7؟"], [["−6", "−٦"], ["−20", "−٢٠"], ["6", "٦"], ["20", "٢٠"]],
            ["Opposite signs: 13 − 7 = 6, and −13 has the larger absolute value, so the answer is −6.", "إشارتان مختلفتان: 13 − 7 = 6، و −13 أكبر قيمة مطلقة، إذن الناتج −6."], ["13 steps back, 7 steps forward: you are still 6 steps behind zero.", "١٣ خطوة للخلف و٧ للأمام: ما زلت خلف الصفر بـ ٦ خطوات."]),
          Q(["What is 9 − (−105)?", "ما ناتج 9 − (−105)؟"], [["114", "١١٤"], ["−96", "−٩٦"], ["96", "٩٦"], ["−114", "−١١٤"]],
            ["9 − (−105) = 9 + 105 = 114.", "9 − (−105) = 9 + 105 = 114."], ["Taking away a debt of 105 is like being given 105.", "إلغاء دين قدره ١٠٥ يشبه أن تُعطى ١٠٥."]),
          Q(["What is (−72) ÷ (−9)?", "ما ناتج (−72) ÷ (−9)؟"], [["8", "٨"], ["−8", "−٨"], ["63", "٦٣"], ["−81", "−٨١"]],
            ["Same signs give a positive quotient: 72 ÷ 9 = 8.", "إشارتان متشابهتان تعطيان خارج قسمة موجبًا: 72 ÷ 9 = 8."], ["Two minus signs cancel each other out, like two 'no's making a yes.", "إشارتا السالب تلغي كل منهما الأخرى."]),
          Q(["What is −3 × 7?", "ما ناتج −3 × 7؟"], [["−21", "−٢١"], ["21", "٢١"], ["−10", "−١٠"], ["4", "٤"]],
            ["Opposite signs give a negative product: 3 × 7 = 21, so −21.", "إشارتان مختلفتان تعطيان حاصل ضرب سالبًا: 3 × 7 = 21 إذن −21."], ["Seven groups of −3 add up to −21.", "سبع مجموعات كل منها −٣ مجموعها −٢١."]),
          Q(["Mount Catherine is 2,620 m above sea level and the Qattara Depression is 134 m below it. What is the difference between them?", "ارتفاع جبل كاترين ٢٦٢٠ مترًا فوق سطح البحر، ومنخفض القطارة ١٣٤ مترًا تحته. ما الفرق بينهما؟"], [["2,754 m", "٢٧٥٤ مترًا"], ["2,486 m", "٢٤٨٦ مترًا"], ["2,620 m", "٢٦٢٠ مترًا"], ["−2,754 m", "−٢٧٥٤ مترًا"]],
            ["2,620 − (−134) = 2,620 + 134 = 2,754 m.", "2,620 − (−134) = 2,620 + 134 = 2,754 مترًا."], ["Climb down 134 m to sea level, then 2,620 m more to the peak: 2,754 m in total.", "اصعد ١٣٤ مترًا إلى سطح البحر ثم ٢٦٢٠ مترًا أخرى إلى القمة: المجموع ٢٧٥٤ مترًا."]),
          Q(["In Saint Catherine it was 11 °C and then the temperature dropped by 15 degrees. What is the new temperature?", "كانت درجة الحرارة في سانت كاترين ١١ °س ثم انخفضت ١٥ درجة. ما درجة الحرارة الجديدة؟"], [["−4 °C", "−٤ °س"], ["4 °C", "٤ °س"], ["−26 °C", "−٢٦ °س"], ["26 °C", "٢٦ °س"]],
            ["11 + (−15) = −4 °C.", "11 + (−15) = −4 °س."], ["11 degrees down reaches 0, then 4 more go below zero.", "١١ درجة تنزل إلى الصفر، ثم ٤ درجات أخرى تحت الصفر."]),
          Q(["Which of these is equal to −5?", "أي مما يلي يساوي −٥؟"], [["−25 ÷ 5", "−25 ÷ 5"], ["−25 ÷ (−5)", "−25 ÷ (−5)"], ["0 ÷ (−5)", "0 ÷ (−5)"], ["1 ÷ (−5)", "1 ÷ (−5)"]],
            ["−25 ÷ 5 = −5 (opposite signs). −25 ÷ (−5) = 5, 0 ÷ (−5) = 0 and 1 ÷ (−5) is not an integer.", "−25 ÷ 5 = −5 (إشارتان مختلفتان)، أما −25 ÷ (−5) = 5 و 0 ÷ (−5) = 0 و 1 ÷ (−5) ليس عددًا صحيحًا."], ["Share a debt of 25 among 5 friends: each owes 5.", "وزّع دينًا قدره ٢٥ على ٥ أصدقاء: كل منهم مدين بـ ٥."]),
          Q(["A submarine at a depth of 84 m rises 4 m every minute. Where is it after 20 minutes?", "غواصة على عمق ٨٤ مترًا تصعد ٤ أمتار كل دقيقة. أين تكون بعد ٢٠ دقيقة؟"], [["4 m below the surface", "٤ أمتار تحت سطح الماء"], ["4 m above the surface", "٤ أمتار فوق سطح الماء"], ["80 m below the surface", "٨٠ مترًا تحت سطح الماء"], ["164 m below the surface", "١٦٤ مترًا تحت سطح الماء"]],
            ["−84 + 20 × 4 = −84 + 80 = −4, so 4 m below the surface.", "−84 + 20 × 4 = −84 + 80 = −4، أي ٤ أمتار تحت سطح الماء."], ["It climbed 80 of the 84 metres, so 4 metres are left to the surface.", "صعدت ٨٠ مترًا من ٨٤، فبقي ٤ أمتار حتى السطح."])
        ]
      },
      {
        id: "mprep1u1l5", icon: "½", page: 24,
        title: { en: "Operations on Rational Numbers", ar: "العمليات على الأعداد النسبية" },
        idea: {
          official: {
            en: ["The rational numbers are " + eq("Q = {a/b : a ∈ Z, b ∈ Z, b ≠ 0}") + ". N and Z are subsets of Q.",
              "A rational number has many forms: " + eq("1/2 = 50%") + ", " + eq("2/5 = 0.4") + ", " + eq("7/4 = 1.75") + " (finite decimals), " + eq("2/9 = 0.222... = 0.2̄") + " (recurring decimal).",
              "Adding: " + eq("a/b + c/d = (ad + bc)/bd") + ", for example " + eq("2/3 + 1/4 = 8/12 + 3/12 = 11/12") + ". Subtracting is adding the additive inverse: " + eq("5/2 − 15/4 = 10/4 − 15/4 = −5/4") + ".",
              "Multiplying: " + eq("a/b × c/d = ac/bd") + ". The multiplicative inverse of " + eq("a/b") + " is " + eq("b/a") + ": the inverse of " + eq("−3½ = −7/2") + " is " + eq("−2/7") + ". Zero has no multiplicative inverse.",
              "Dividing is multiplying by the inverse of the divisor: " + eq("3/4 ÷ 3/8 = 3/4 × 8/3 = 2") + ".",
              "Addition and multiplication in Q are closed, commutative and associative, with identities 0 and 1, and multiplication distributes over addition."],
            ar: ["الأعداد النسبية " + eq("Q = {a/b : a ∈ Z, b ∈ Z, b ≠ 0}") + "، و N و Z مجموعتان جزئيتان من Q.",
              "للعدد النسبي صور كثيرة: " + eq("1/2 = 50%") + " و " + eq("2/5 = 0.4") + " و " + eq("7/4 = 1.75") + " (كسور عشرية منتهية)، و " + eq("2/9 = 0.222... = 0.2̄") + " (كسر عشري دوري).",
              "الجمع: " + eq("a/b + c/d = (ad + bc)/bd") + "، مثل " + eq("2/3 + 1/4 = 8/12 + 3/12 = 11/12") + ". والطرح جمع المعكوس الجمعي: " + eq("5/2 − 15/4 = 10/4 − 15/4 = −5/4") + ".",
              "الضرب: " + eq("a/b × c/d = ac/bd") + ". المعكوس الضربي للعدد " + eq("a/b") + " هو " + eq("b/a") + "، فمعكوس " + eq("−3½ = −7/2") + " هو " + eq("−2/7") + "، والصفر ليس له معكوس ضربي.",
              "القسمة ضرب المقسوم في المعكوس الضربي للمقسوم عليه: " + eq("3/4 ÷ 3/8 = 3/4 × 8/3 = 2") + ".",
              "الجمع والضرب في Q مغلقان وإبداليان ودمجيان، والمحايد الجمعي ٠ والضربي ١، والضرب يتوزع على الجمع."]
          },
          story: {
            en: ["Ziad watches his father dive at Ras Mohamed. His father goes down to −12½ m, then rises 4.75 m to look at a coral reef.",
              "Ziad writes both in decimals: −12.5 + 4.75 = −7.75. His father is 7.75 m below the surface.",
              "Back home, his mother cuts a 7½ m roll of fabric into pieces of 30 cm = 0.3 m: 7.5 ÷ 0.3 = 25 pieces.",
              "He checks on the calculator that 2 ÷ 9 shows 0.22222222, a recurring decimal that never ends.",
              "Fractions, decimals and percentages are three outfits for the same number."],
            ar: ["يشاهد زياد والده وهو يغوص في رأس محمد؛ ينزل والده إلى −١٢½ مترًا ثم يصعد ٤٫٧٥ متر ليرى الشعاب المرجانية.",
              "يكتب زياد العددين في صورة عشرية: −١٢٫٥ + ٤٫٧٥ = −٧٫٧٥، فوالده على عمق ٧٫٧٥ متر تحت سطح الماء.",
              "في البيت تقطع والدته لفة قماش طولها ٧½ أمتار إلى قطع طول كل منها ٣٠ سم = ٠٫٣ م: ٧٫٥ ÷ ٠٫٣ = ٢٥ قطعة.",
              "يتأكد بالآلة الحاسبة أن ٢ ÷ ٩ تظهر ٠٫٢٢٢٢٢٢٢٢، كسرًا عشريًا دوريًا لا ينتهي.",
              "الكسر والعدد العشري والنسبة المئوية ثلاث ملابس لعدد واحد."]
          }
        },
        words: [
          ["Rational number", "العدد النسبي", "A number that can be written a/b, where a and b are integers and b ≠ 0.", "عدد يمكن كتابته على الصورة a/b حيث a و b عددان صحيحان و b ≠ 0."],
          ["Multiplicative inverse", "المعكوس الضربي", "The number b/a for a/b: their product is 1.", "العدد b/a للعدد a/b، وحاصل ضربهما ١."],
          ["Recurring decimal", "الكسر العشري الدوري", "A decimal whose digits repeat forever, like 0.222... = 0.2̄.", "كسر عشري تتكرر أرقامه بلا نهاية مثل ٠٫٢٢٢... = 0.2̄."],
          ["Finite decimal", "الكسر العشري المنتهي", "A decimal that ends, like 2/5 = 0.4.", "كسر عشري ينتهي مثل 2/5 = 0.4."],
          ["Numerator / denominator", "البسط / المقام", "In a/b, a is the numerator and b (never 0) is the denominator.", "في a/b يكون a البسط و b المقام (ولا يكون صفرًا)."],
          ["Percentage", "النسبة المئوية", "A fraction out of 100: 1/2 = 50%.", "كسر مقامه ١٠٠: 1/2 = 50%."]
        ],
        lab: { parts: [{ type: "mprep1_rat" }, {
          type: "sort",
          prompt: ["Tap a fraction, then tap the kind of decimal it makes.", "اضغط على الكسر ثم اختر نوع الكسر العشري الناتج."],
          bins: [["f", "🔚", "Finite decimal", "عشري منته"], ["r", "🔁", "Recurring decimal", "عشري دوري"]],
          items: [[["2/5", "2/5"], "f"], [["7/4", "7/4"], "f"], [["2/9", "2/9"], "r"], [["1/3", "1/3"], "r"], [["3/8", "3/8"], "f"], [["5/6", "5/6"], "r"], [["1/2", "1/2"], "f"], [["4/11", "4/11"], "r"]]
        }] },
        quiz: [
          Q(["What is 2/3 + 1/4?", "ما ناتج 2/3 + 1/4؟"], [["11/12", "11/12"], ["3/7", "3/7"], ["3/12", "3/12"], ["2/12", "2/12"]],
            ["2/3 + 1/4 = 8/12 + 3/12 = 11/12.", "2/3 + 1/4 = 8/12 + 3/12 = 11/12."], ["Cut both pizzas into twelfths first: 8 slices plus 3 slices make 11 slices.", "قطّع البيتزا إلى أجزاء من ١٢ أولًا: ٨ قطع + ٣ قطع = ١١ قطعة."]),
          Q(["What is −3.2 + (−1.3)?", "ما ناتج −3.2 + (−1.3)؟"], [["−4.5", "−4.5"], ["−1.9", "−1.9"], ["4.5", "4.5"], ["1.9", "1.9"]],
            ["Same signs: add 3.2 + 1.3 = 4.5 and keep the negative sign.", "إشارتان متشابهتان: 3.2 + 1.3 = 4.5 مع الإشارة السالبة."], ["Two dives down, 3.2 m then 1.3 m: 4.5 m below.", "غطستان للأسفل ٣٫٢ م ثم ١٫٣ م: ٤٫٥ م تحت السطح."]),
          Q(["What is 3/4 ÷ 3/8?", "ما ناتج 3/4 ÷ 3/8؟"], [["2", "٢"], ["9/32", "9/32"], ["1/2", "1/2"], ["3/2", "3/2"]],
            ["Multiply by the inverse: 3/4 × 8/3 = 24/12 = 2.", "نضرب في المعكوس الضربي: 3/4 × 8/3 = 24/12 = 2."], ["How many three-eighths fit in three-quarters? Exactly 2.", "كم مرة يدخل ثلاثة أثمان في ثلاثة أرباع؟ مرتان بالضبط."]),
          Q(["What is the multiplicative inverse of −3½?", "ما المعكوس الضربي للعدد −3½؟"], [["−2/7", "−2/7"], ["2/7", "2/7"], ["7/2", "7/2"], ["3½", "3½"]],
            ["−3½ = −7/2, and its inverse is −2/7 because (−7/2) × (−2/7) = 1.", "−3½ = −7/2 ومعكوسه الضربي −2/7 لأن (−7/2) × (−2/7) = 1."], ["Flip the fraction but keep the sign: the product must be +1.", "اقلب الكسر واحتفظ بالإشارة، فحاصل الضرب يجب أن يكون +١."]),
          Q(["What is 2½ − 3¾?", "ما ناتج 2½ − 3¾؟"], [["−1¼", "−1¼"], ["1¼", "1¼"], ["−1¾", "−1¾"], ["−6¼", "−6¼"]],
            ["5/2 − 15/4 = 10/4 − 15/4 = −5/4 = −1¼.", "5/2 − 15/4 = 10/4 − 15/4 = −5/4 = −1¼."], ["You spend more than you have, so the answer is negative.", "تنفق أكثر مما معك، فيكون الناتج سالبًا."]),
          Q(["How is 2/9 written as a decimal?", "كيف يُكتب 2/9 في صورة عشرية؟"], [["0.222... (recurring)", "٠٫٢٢٢... (دوري)"], ["0.29", "0.29"], ["0.2", "0.2"], ["4.5", "4.5"]],
            ["2 ÷ 9 = 0.2222..., so 2/9 = 0.2̄, a recurring decimal.", "2 ÷ 9 = 0.2222... إذن 2/9 = 0.2̄ كسر عشري دوري."], ["The calculator keeps printing 2s until the screen is full.", "الآلة الحاسبة تظل تكتب الرقم ٢ حتى تمتلئ الشاشة."]),
          Q(["A 7½ m fabric roll is cut into pieces of 30 cm. How many pieces?", "لفة قماش طولها ٧½ أمتار تُقطع إلى قطع طول كل منها ٣٠ سم. كم قطعة؟"], [["25", "٢٥"], ["2.5", "٢٫٥"], ["250", "٢٥٠"], ["22", "٢٢"]],
            ["30 cm = 0.3 m, and 7.5 ÷ 0.3 = 75 ÷ 3 = 25 pieces.", "٣٠ سم = ٠٫٣ م، و ٧٫٥ ÷ ٠٫٣ = ٧٥ ÷ ٣ = ٢٥ قطعة."], ["Three pieces make 90 cm, so 750 cm makes 25 pieces.", "كل ٣٠ سم قطعة، و ٧٥٠ سم ÷ ٣٠ = ٢٥ قطعة."]),
          Q(["A shark at 152.5 m below the surface rises 124.1 m. Where is it now?", "سمكة قرش على عمق ١٥٢٫٥ متر تحت سطح الماء صعدت ١٢٤٫١ متر. أين هي الآن؟"], [["28.4 m below the surface", "٢٨٫٤ متر تحت السطح"], ["28.4 m above the surface", "٢٨٫٤ متر فوق السطح"], ["276.6 m below the surface", "٢٧٦٫٦ متر تحت السطح"], ["38.4 m below the surface", "٣٨٫٤ متر تحت السطح"]],
            ["−152.5 + 124.1 = −28.4, so 28.4 m below the surface.", "−152.5 + 124.1 = −28.4، أي ٢٨٫٤ متر تحت السطح."], ["It climbed less than its depth, so it is still under water.", "صعدت أقل من عمقها، فما زالت تحت الماء."])
        ]
      }
    ]
  });

  /* ======================= UNIT 2 - ALGEBRA ======================= */
  U.push({
    id: "mprep1u2", num: 2, icon: "🧮", color: "green",
    title: { en: "Algebra", ar: "الجبر" },
    lessons: [
      {
        id: "mprep1u2l1", icon: "🔤", page: 32,
        title: { en: "Mathematical Expressions and Formulas", ar: "المقادير والصيغ الرياضية" },
        idea: {
          official: {
            en: ["A numerical expression uses numbers and operations, like " + eq("2 × (5 − 7)") + ". An algebraic expression also has variables, like " + eq("x² + 3x − 1") + ".",
              "An equation joins two expressions with =, like " + eq("2x + 5 = 1") + ". An inequality uses <, >, ≤ or ≥, like " + eq("x ≤ 120") + ". A formula states a rule, like " + eq("A = l × w") + ".",
              "An algebraic term is a number (the coefficient) times variables: in " + eq("−8xy") + " the coefficient is −8. Like terms have the same variables with the same powers: " + eq("−3x²") + " and " + eq("4x²") + ".",
              "To simplify, expand brackets with the distributive property and add like terms: " + eq("2(3x − 4) − 3(x − 2) = 6x − 8 − 3x + 6 = 3x − 2") + ".",
              "To evaluate, substitute: the amount " + eq("(x + 5) + (2x + 3) + (3x − 1) = 6x + 7") + " is " + eq("6 × 20 + 7 = 127") + " LE when x = 20.",
              "Temperature formula: " + eq("C = 5/9 (F − 32)") + ", so " + eq("95 °F") + " is " + eq("5/9 × 63 = 35 °C") + "."],
            ar: ["المقدار العددي يتكون من أعداد وعمليات مثل " + eq("2 × (5 − 7)") + "، والمقدار الجبري يحتوي أيضًا على متغيرات مثل " + eq("x² + 3x − 1") + ".",
              "المعادلة مقداران بينهما علامة = مثل " + eq("2x + 5 = 1") + "، والمتباينة بينهما < أو > أو ≤ أو ≥ مثل " + eq("x ≤ 120") + "، والصيغة الرياضية تعبر عن قاعدة مثل " + eq("A = l × w") + ".",
              "الحد الجبري حاصل ضرب عدد (المعامل) في متغيرات: في " + eq("−8xy") + " المعامل −٨. والحدود المتشابهة لها المتغيرات نفسها بالأسس نفسها مثل " + eq("−3x²") + " و " + eq("4x²") + ".",
              "للتبسيط نفك الأقواس بخاصية التوزيع ونجمع الحدود المتشابهة: " + eq("2(3x − 4) − 3(x − 2) = 6x − 8 − 3x + 6 = 3x − 2") + ".",
              "لإيجاد القيمة العددية نعوّض: المبلغ " + eq("(x + 5) + (2x + 3) + (3x − 1) = 6x + 7") + " يساوي " + eq("6 × 20 + 7 = 127") + " جنيهًا عندما x = 20.",
              "صيغة درجة الحرارة: " + eq("C = 5/9 (F − 32)") + "، إذن " + eq("95 °F") + " تساوي " + eq("5/9 × 63 = 35 °C") + "."]
          },
          story: {
            en: ["Salwa plans a trip to Abu Simbel in Aswan. Her weather app shows 95 °F, but she thinks in Celsius.",
              "She uses the formula C = 5/9 (F − 32): 95 − 32 = 63, and 5/9 × 63 = 35 °C. Very hot, so she picks the winter break.",
              "Her brother Ahmed buys 5 cinema tickets at x LE each and 3 popcorn cups at y LE each, with a 20 LE discount: 5x + 3y − 20.",
              "If a ticket is 60 LE and popcorn 40 LE, the bill is 5 × 60 + 3 × 40 − 20 = 400 LE.",
              "Letters are just empty boxes waiting for numbers."],
            ar: ["تخطط سلوى لرحلة إلى أبو سمبل في أسوان، ويظهر تطبيق الطقس ٩٥ °ف لكنها تفكر بالدرجة السيليزية.",
              "تستخدم الصيغة C = 5/9 (F − 32): ٩٥ − ٣٢ = ٦٣، و ٥/٩ × ٦٣ = ٣٥ °س. حار جدًا، فتختار إجازة منتصف العام.",
              "يشتري أخوها أحمد ٥ تذاكر سينما ثمن الواحدة x جنيه و٣ أكواب فشار ثمن الواحد y جنيه بخصم ٢٠ جنيهًا: 5x + 3y − 20.",
              "إذا كانت التذكرة بـ ٦٠ جنيهًا والفشار بـ ٤٠ جنيهًا تكون الفاتورة ٥ × ٦٠ + ٣ × ٤٠ − ٢٠ = ٤٠٠ جنيه.",
              "الحروف مجرد صناديق فارغة تنتظر الأعداد."]
          }
        },
        words: [
          ["Variable", "المتغير", "A symbol such as x or y that stands for an unknown quantity.", "رمز مثل x أو y يمثل كمية مجهولة."],
          ["Algebraic term", "الحد الجبري", "A non-zero number times one or more variables, like −2xy.", "حاصل ضرب عدد غير صفري في متغير أو أكثر مثل −2xy."],
          ["Coefficient", "المعامل", "The number in an algebraic term: in 5y it is 5.", "العدد في الحد الجبري: في 5y المعامل ٥."],
          ["Like terms", "الحدود المتشابهة", "Terms with the same variables raised to the same powers, like 3xy and −2yx.", "حدود لها المتغيرات نفسها بالأسس نفسها مثل 3xy و −2yx."],
          ["Algebraic expression", "المقدار الجبري", "Variables, or numbers and variables, joined by operations.", "متغيرات أو أعداد ومتغيرات تربطها عمليات حسابية."],
          ["Inequality", "المتباينة", "Two expressions joined by <, >, ≤ or ≥.", "مقداران بينهما إحدى العلامات < أو > أو ≤ أو ≥."],
          ["Formula", "الصيغة الرياضية", "A fact or rule written mathematically, like A = l × w.", "حقيقة أو قاعدة مكتوبة رياضيًا مثل A = l × w."]
        ],
        lab: { parts: [{ type: "mprep1_expr" }, {
          type: "sort",
          prompt: ["Tap each one, then tap its kind.", "اضغط على كل واحدة ثم اختر نوعها."],
          bins: [["x", "🧩", "Expression", "مقدار"], ["e", "🟰", "Equation", "معادلة"], ["i", "↔️", "Inequality", "متباينة"], ["f", "📜", "Formula", "صيغة"]],
          items: [[["5x + 3y − 20", "5x + 3y − 20"], "x"], [["2x + 5 = 1", "2x + 5 = 1"], "e"], [["x ≤ 120", "x ≤ 120"], "i"], [["A = l × w", "A = l × w"], "f"],
            [["x² + 3x − 1", "x² + 3x − 1"], "x"], [["3y − 4 = 2y", "3y − 4 = 2y"], "e"], [["2x − 1 > 3", "2x − 1 > 3"], "i"], [["C = 5/9 (F − 32)", "C = 5/9 (F − 32)"], "f"]]
        }] },
        quiz: [
          Q(["Simplify 2(3x − 4) − 3(x − 2).", "اختصر 2(3x − 4) − 3(x − 2)."], [["3x − 2", "3x − 2"], ["3x − 14", "3x − 14"], ["9x − 2", "9x − 2"], ["3x + 2", "3x + 2"]],
            ["6x − 8 − 3x + 6 = (6x − 3x) + (−8 + 6) = 3x − 2. Note −3 × (−2) = +6.", "6x − 8 − 3x + 6 = (6x − 3x) + (−8 + 6) = 3x − 2، مع ملاحظة أن −3 × (−2) = +6."], ["The minus before the bracket flips every sign inside it.", "السالب قبل القوس يقلب كل الإشارات داخله."]),
          Q(["Use C = 5/9 (F − 32) to change 95 °F to Celsius.", "استخدم C = 5/9 (F − 32) لتحويل ٩٥ °ف إلى سيليزية."], [["35 °C", "٣٥ °س"], ["63 °C", "٦٣ °س"], ["53 °C", "٥٣ °س"], ["203 °C", "٢٠٣ °س"]],
            ["95 − 32 = 63, and 5/9 × 63 = 5 × 7 = 35 °C.", "95 − 32 = 63، و 5/9 × 63 = 5 × 7 = 35 °س."], ["Salwa first subtracts 32, then takes five ninths: a hot 35 °C in Aswan.", "تطرح سلوى ٣٢ أولًا ثم تأخذ خمسة أتساع: ٣٥ °س حرارة أسوان."]),
          Q(["In 4x + 3y − 8xy − 6, what is the coefficient of xy?", "في المقدار 4x + 3y − 8xy − 6 ما معامل xy؟"], [["−8", "−٨"], ["8", "٨"], ["−6", "−٦"], ["1", "١"]],
            ["The term is −8xy, so its coefficient is −8, sign included. −6 is the constant term.", "الحد هو −8xy فمعامله −٨ بإشارته، أما −٦ فهو الحد الثابت."], ["The number glued to xy, together with its sign, is the coefficient.", "العدد الملتصق بـ xy مع إشارته هو المعامل."]),
          Q(["Which pair are like terms?", "أي زوج من الحدود متشابه؟"], [["3xy and −2yx", "3xy و −2yx"], ["2x and 2x²", "2x و 2x²"], ["7x and 7", "7x و 7"], ["3a and 3b", "3a و 3b"]],
            ["xy = yx, so 3xy and −2yx have the same variables with the same powers.", "xy = yx إذن 3xy و −2yx لهما المتغيرات نفسها بالأسس نفسها."], ["Like terms are twins in letters and powers; the numbers may differ.", "الحدود المتشابهة توائم في الحروف والأسس، ويمكن أن تختلف الأعداد."]),
          Q(["Find b² − 2f when b = 3 and f = −1.", "أوجد قيمة b² − 2f عندما b = 3 و f = −1."], [["11", "١١"], ["7", "٧"], ["4", "٤"], ["8", "٨"]],
            ["b² − 2f = 9 − 2 × (−1) = 9 + 2 = 11.", "b² − 2f = 9 − 2 × (−1) = 9 + 2 = 11."], ["Subtracting a negative adds: the −1 turns into +2.", "طرح عدد سالب يعني الجمع: −١ تحولت إلى +٢."]),
          Q(["A shopkeeper buys a toy car for (5x − 10) LE and sells it for (6x + 7) LE. What is his profit when x = 40?", "يشتري تاجر لعبة بـ (5x − 10) جنيه ويبيعها بـ (6x + 7) جنيه. ما ربحه عندما x = 40؟"], [["57 LE", "٥٧ جنيهًا"], ["37 LE", "٣٧ جنيهًا"], ["47 LE", "٤٧ جنيهًا"], ["437 LE", "٤٣٧ جنيهًا"]],
            ["Profit = (6x + 7) − (5x − 10) = x + 17, and at x = 40 it is 57 LE.", "الربح = (6x + 7) − (5x − 10) = x + 17، وعند x = 40 يكون ٥٧ جنيهًا."], ["Buying at 190 and selling at 247 leaves 57 LE profit.", "الشراء بـ ١٩٠ والبيع بـ ٢٤٧ يتركان ربحًا ٥٧ جنيهًا."]),
          Q(["Use F = 1.8C + 32 to change 30 °C to Fahrenheit.", "استخدم F = 1.8C + 32 لتحويل ٣٠ °س إلى فهرنهايت."], [["86 °F", "٨٦ °ف"], ["54 °F", "٥٤ °ف"], ["62 °F", "٦٢ °ف"], ["22 °F", "٢٢ °ف"]],
            ["F = 1.8 × 30 + 32 = 54 + 32 = 86 °F.", "F = 1.8 × 30 + 32 = 54 + 32 = 86 °ف."], ["Multiply first, then add 32: never forget the last step.", "اضرب أولًا ثم أضف ٣٢، ولا تنسَ الخطوة الأخيرة."]),
          Q(["The speed on the Cairo-Alexandria desert road must not exceed 120 km/h. Which inequality shows the speed x?", "يجب ألا تتجاوز السرعة على طريق القاهرة الإسكندرية الصحراوي ١٢٠ كم/س. أي متباينة تعبر عن السرعة x؟"], [["x ≤ 120", "x ≤ 120"], ["x < 120", "x < 120"], ["x ≥ 120", "x ≥ 120"], ["x = 120", "x = 120"]],
            ["Not exceeding 120 means 120 or less: x ≤ 120.", "لا تتجاوز ١٢٠ تعني ١٢٠ أو أقل: x ≤ 120."], ["Driving at exactly 120 is allowed, so the sign includes 'equal to'.", "القيادة بسرعة ١٢٠ بالضبط مسموحة، لذلك تشمل العلامة التساوي."])
        ]
      },
      {
        id: "mprep1u2l2", icon: "🟰", page: 39,
        title: { en: "Linear Equations", ar: "المعادلات الخطية" },
        idea: {
          official: {
            en: ["An equation says two expressions are equal. A linear equation in one variable has one variable raised to the power one, like " + eq("x + 2 = 5") + ".",
              "The substitution set holds the possible values; the solution set holds those that make both sides equal. " + eq("2x + 1 = 7") + " on {2, 3, 4}: only " + eq("2(3) + 1 = 7") + ", so the solution set is {3}.",
              "Properties of equality: we may add, subtract, multiply or divide (by a non-zero number) both sides by the same number and they stay equal.",
              eq("2x + 7 = 3") + " → " + eq("2x = −4") + " → " + eq("x = −2") + ". In Z the solution set is {−2}; in N it is " + eq("∅") + " because −2 ∉ N.",
              eq("2(x − 3) = 8") + " → " + eq("2x − 6 = 8") + " → " + eq("2x = 14") + " → " + eq("x = 7") + ". Check: " + eq("2(7 − 3) = 8") + ".",
              "Four museum tickets plus 500 LE of souvenirs cost 620 LE: " + eq("4x + 500 = 620") + ", " + eq("4x = 120") + ", " + eq("x = 30") + " LE."],
            ar: ["المعادلة تعبر عن تساوي مقدارين. والمعادلة الخطية في متغير واحد متغيرها مرفوع للأس واحد مثل " + eq("x + 2 = 5") + ".",
              "مجموعة التعويض هي القيم الممكنة للمجهول، ومجموعة الحل هي القيم التي تحقق تساوي الطرفين. " + eq("2x + 1 = 7") + " في {2, 3, 4}: فقط " + eq("2(3) + 1 = 7") + "، إذن مجموعة الحل {3}.",
              "خواص التساوي: يمكن أن نضيف إلى الطرفين أو نطرح منهما أو نضربهما أو نقسمهما (على عدد غير الصفر) العدد نفسه فيظلان متساويين.",
              eq("2x + 7 = 3") + " ← " + eq("2x = −4") + " ← " + eq("x = −2") + ". في Z مجموعة الحل {−2}، وفي N تكون " + eq("∅") + " لأن −2 ∉ N.",
              eq("2(x − 3) = 8") + " ← " + eq("2x − 6 = 8") + " ← " + eq("2x = 14") + " ← " + eq("x = 7") + ". للتحقق: " + eq("2(7 − 3) = 8") + ".",
              "أربع تذاكر للمتحف المصري وهدايا بـ ٥٠٠ جنيه تكلفت ٦٢٠ جنيهًا: " + eq("4x + 500 = 620") + "، " + eq("4x = 120") + "، " + eq("x = 30") + " جنيهًا."]
          },
          story: {
            en: ["Hani takes a taxi to school. The meter starts at 10 LE and adds 5.50 LE for every kilometre. He pays 87 LE.",
              "He lets x be the number of kilometres: 10 + 5.5x = 87.",
              "Subtract 10 from both sides: 5.5x = 77. Divide both sides by 5.5: x = 14 km.",
              "He checks: 10 + 5.5 × 14 = 10 + 77 = 87. Both sides are equal.",
              "Like a balance, whatever he does to one side he must do to the other."],
            ar: ["يركب هاني تاكسي إلى المدرسة؛ يبدأ العداد بـ ١٠ جنيهات ويضيف ٥٫٥٠ جنيه لكل كيلومتر، ويدفع ٨٧ جنيهًا.",
              "يفرض أن عدد الكيلومترات x: ‎10 + 5.5x = 87.",
              "يطرح ١٠ من الطرفين: 5.5x = 77، ثم يقسم الطرفين على ٥٫٥: x = 14 كم.",
              "يتحقق: ١٠ + ٥٫٥ × ١٤ = ١٠ + ٧٧ = ٨٧، والطرفان متساويان.",
              "مثل الميزان: ما يفعله في كفة يجب أن يفعله في الأخرى."]
          }
        },
        words: [
          ["Linear equation", "المعادلة الخطية", "An equation whose variable is raised to the power one, like 2x + 1 = 7.", "معادلة متغيرها مرفوع للأس واحد مثل 2x + 1 = 7."],
          ["Substitution set", "مجموعة التعويض", "The set of possible values for the unknown.", "مجموعة القيم الممكنة للمجهول."],
          ["Solution set", "مجموعة الحل", "The values from the substitution set that make both sides equal.", "قيم من مجموعة التعويض تحقق تساوي الطرفين."],
          ["Properties of equality", "خواص التساوي", "Adding, subtracting, multiplying or dividing both sides by the same number keeps them equal.", "إضافة العدد نفسه إلى الطرفين أو طرحه أو الضرب أو القسمة عليه يحافظ على التساوي."],
          ["Equivalent equations", "المعادلات المتكافئة", "Equations with the same solution, like 2x + 7 = 19 and 2x = 12.", "معادلات لها الحل نفسه مثل 2x + 7 = 19 و 2x = 12."],
          ["Verify", "التحقق", "Substitute the answer in the original equation to see both sides are equal.", "التعويض بالحل في المعادلة الأصلية للتأكد من تساوي الطرفين."]
        ],
        lab: { parts: [{ type: "mprep1_balance" }, {
          type: "sort",
          prompt: ["Tap an equation, then tap its kind.", "اضغط على المعادلة ثم اختر نوعها."],
          bins: [["l", "📏", "Linear in one variable", "خطية في متغير واحد"], ["o", "🌀", "Other equation", "معادلة أخرى"]],
          items: [[["x + 2 = 5", "x + 2 = 5"], "l"], [["x + 5 = −2", "x + 5 = −2"], "l"], [["4x² + 1 = 4 (quadratic)", "4x² + 1 = 4 (تربيعية)"], "o"], [["x³ + x = 2 (cubic)", "x³ + x = 2 (تكعيبية)"], "o"],
            [["2(x − 3) = 8", "2(x − 3) = 8"], "l"], [["x + y = 5 (two variables)", "x + y = 5 (متغيران)"], "o"], [["4x + 500 = 620", "4x + 500 = 620"], "l"]]
        }] },
        quiz: [
          Q(["Solve 2(x + 3) = 3(1 − x) in Q.", "أوجد في Q حل المعادلة 2(x + 3) = 3(1 − x)."], [["x = −3/5", "x = −3/5"], ["x = 3/5", "x = 3/5"], ["x = −3", "x = −3"], ["x = 9/5", "x = 9/5"]],
            ["2x + 6 = 3 − 3x, so 5x = −3 and x = −3/5.", "2x + 6 = 3 − 3x إذن 5x = −3 و x = −3/5."], ["Collect all the x's on one pan and the numbers on the other.", "اجمع كل الـ x في كفة والأعداد في الكفة الأخرى."]),
          Q(["A taxi starts at 10 LE and adds 5.50 LE per km. Hani paid 87 LE. How many km did he ride?", "يبدأ عداد التاكسي بـ ١٠ جنيهات ويضيف ٥٫٥٠ جنيه لكل كم. دفع هاني ٨٧ جنيهًا. كم كيلومترًا ركب؟"], [["14 km", "١٤ كم"], ["15.8 km", "١٥٫٨ كم"], ["12 km", "١٢ كم"], ["16 km", "١٦ كم"]],
            ["10 + 5.5x = 87, so 5.5x = 77 and x = 14 km.", "10 + 5.5x = 87 إذن 5.5x = 77 و x = 14 كم."], ["Take away the 10 LE start, then share 77 LE into pieces of 5.50.", "احذف الـ ١٠ جنيهات الأولى ثم قسّم ٧٧ جنيهًا إلى أجزاء كل منها ٥٫٥٠."]),
          Q(["What is the solution set of 2x + 7 = 3 in N?", "ما مجموعة حل المعادلة 2x + 7 = 3 في N؟"], [["∅", "∅"], ["{−2}", "{−2}"], ["{2}", "{2}"], ["{5}", "{5}"]],
            ["2x = −4, so x = −2. But −2 is not a natural number, so the solution set in N is ∅.", "2x = −4 إذن x = −2، لكن −2 ليس عددًا طبيعيًا، فمجموعة الحل في N هي ∅."], ["The answer exists, but it is not allowed in the natural-number club.", "الحل موجود لكنه غير مسموح له بدخول نادي الأعداد الطبيعية."]),
          Q(["The sum of two consecutive numbers is 29. Which equation shows this?", "مجموع عددين متتاليين ٢٩. أي معادلة تعبر عن ذلك؟"], [["x + x + 1 = 29", "x + x + 1 = 29"], ["x + x + 2 = 29", "x + x + 2 = 29"], ["x + x − 1 = 28", "x + x − 1 = 28"], ["x + x + 1 = 30", "x + x + 1 = 30"]],
            ["Consecutive numbers differ by 1: x and x + 1, so x + x + 1 = 29 (and x = 14).", "العددان المتتاليان يختلفان بمقدار ١: x و x + 1، إذن x + x + 1 = 29 (و x = 14)."], ["14 and 15 sit next to each other on the number line and add to 29.", "١٤ و ١٥ متجاوران على خط الأعداد ومجموعهما ٢٩."]),
          Q(["My mother is three times my age and 24 years older than me. How old am I?", "عمر أمي ثلاثة أمثال عمري وتكبرني بـ ٢٤ سنة. كم عمري؟"], [["12 years", "١٢ سنة"], ["8 years", "٨ سنوات"], ["36 years", "٣٦ سنة"], ["6 years", "٦ سنوات"]],
            ["3x = x + 24, so 2x = 24 and x = 12. Mother is 36.", "3x = x + 24 إذن 2x = 24 و x = 12، وعمر الأم ٣٦ سنة."], ["Mother has two extra 'me's, and together they make 24 years.", "عند الأم نسختان إضافيتان من عمري مجموعهما ٢٤ سنة."]),
          Q(["A number plus (twice the number minus 17) equals 112. What is the number?", "عدد مضافًا إليه (ضعف العدد مطروحًا منه ١٧) يساوي ١١٢. ما العدد؟"], [["43", "٤٣"], ["37", "٣٧"], ["95", "٩٥"], ["129", "١٢٩"]],
            ["x + 2x − 17 = 112, so 3x = 129 and x = 43.", "x + 2x − 17 = 112 إذن 3x = 129 و x = 43."], ["Check: 43 + 69 = 112.", "تحقق: ٤٣ + ٦٩ = ١١٢."]),
          Q(["If −7k = 28, what is 3k + 6?", "إذا كان −7k = 28 فما قيمة 3k + 6؟"], [["−6", "−٦"], ["18", "١٨"], ["−4", "−٤"], ["6", "٦"]],
            ["k = 28 ÷ (−7) = −4, so 3k + 6 = −12 + 6 = −6.", "k = 28 ÷ (−7) = −4 إذن 3k + 6 = −12 + 6 = −6."], ["Find the box first, then put it in the new machine.", "أوجد قيمة الصندوق أولًا ثم ضعه في الآلة الجديدة."]),
          Q(["Solve 4(x − 1) = 3(x + 1) in Z.", "أوجد في Z حل المعادلة 4(x − 1) = 3(x + 1)."], [["x = 7", "x = 7"], ["x = 1", "x = 1"], ["x = −7", "x = −7"], ["x = 4", "x = 4"]],
            ["4x − 4 = 3x + 3, so 4x − 3x = 3 + 4 and x = 7.", "4x − 4 = 3x + 3 إذن 4x − 3x = 3 + 4 و x = 7."], ["Check: 4 × 6 = 24 and 3 × 8 = 24.", "تحقق: ٤ × ٦ = ٢٤ و ٣ × ٨ = ٢٤."])
        ]
      }
    ]
  });

  E.MTHG.prep1 = { units: U, book: { en: "Mathematics, Prep 1, Term 1 (2026-2027)", ar: "الرياضيات، الصف الأول الإعدادي، الفصل الدراسي الأول (٢٠٢٦-٢٠٢٧)" } };
})();

/* ---------- Prep 1 maths data, part B: Unit 3 Statistics, Unit 4 Geometry & Measurement ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  var U = E.MTHG.prep1.units;

  /* ======================= UNIT 3 - STATISTICS ======================= */
  U.push({
    id: "mprep1u3", num: 3, icon: "📊", color: "orange",
    title: { en: "Statistics", ar: "الإحصاء" },
    lessons: [
      {
        id: "mprep1u3l1", icon: "🗂️", page: 47,
        title: { en: "Organizing Data", ar: "تنظيم البيانات" },
        idea: {
          official: {
            en: ["Statistics collects, organizes, presents, analyzes and interprets data to make decisions. A statistical question needs data from many people.",
              "Organize first: 25 quiz marks in ascending order give the frequency table 3 → 2, 4 → 2, 5 → 4, 6 → 9, 7 → 5, 8 → 3.",
              "A dot plot and a bar graph show the actual values: at least 7 marks = " + eq("5 + 3 = 8") + " students, and the mode is 6.",
              "For a lot of data use equal intervals. Masses from 41 to 100 kg: range " + eq("100 − 41 = 59 ≈ 60") + ", so 6 intervals of 10: 41−, 51−, 61−, 71−, 81−, 91−. A histogram draws them as touching bars of equal width.",
              "A stem-and-leaf plot splits each number: 26 → stem 2, leaf 6 (key 2|6 = 26). It keeps the actual values in order, so the mode, median and quartiles are easy to read for a box plot.",
              "Beware of misleading graphs: a vertical axis that does not start at zero or has an unequal scale."],
            ar: ["الإحصاء علم يهتم بجمع البيانات وتنظيمها وعرضها وتحليلها وتفسيرها لاتخاذ القرار، والسؤال الإحصائي يحتاج إلى بيانات من أشخاص كثيرين.",
              "نبدأ بالتنظيم: ٢٥ درجة في اختبار مرتبة تصاعديًا تعطي الجدول التكراري: ٣ ← ٢، ٤ ← ٢، ٥ ← ٤، ٦ ← ٩، ٧ ← ٥، ٨ ← ٣.",
              "التمثيل بالنقاط والأعمدة البيانية يعرضان القيم الفعلية: عدد من حصلوا على ٧ درجات على الأقل " + eq("5 + 3 = 8") + " طلاب، والمنوال ٦.",
              "للبيانات الكثيرة نستخدم فئات متساوية الطول. كتل من ٤١ إلى ١٠٠ كجم: المدى " + eq("100 − 41 = 59 ≈ 60") + "، إذن ٦ فئات طول كل منها ١٠: ‎41−، 51−، 61−، 71−، 81−، 91−، ويمثلها المدرج التكراري بأعمدة متلاصقة متساوية العرض.",
              "التمثيل بالساق والورقة يقسم العدد: ٢٦ ← الساق ٢ والورقة ٦ (المفتاح 2|6 = 26)، ويحتفظ بالقيم الفعلية مرتبة فيسهل قراءة المنوال والوسيط والربيعين للتمثيل بالصندوق.",
              "احذر الرسوم المضللة: محور رأسي لا يبدأ من الصفر أو تدريجه غير متساوٍ."]
          },
          story: {
            en: ["Farida helps her maths teacher with the 25 quiz marks: 6, 5, 6, 3, 4, 6, 7, 5, 6, 3, 8, 6, 6, 7, 7, 6, 7, 8, 4, 6, 8, 7, 5, 6, 5.",
              "The list is a mess, so she makes a tally: one stroke for each mark, crossing every fifth stroke.",
              "The 6 column wins with 9 strokes: 6 is the mode, the mark most students got.",
              "The teacher asks how many got 7 or more: Farida adds the 7 and 8 bars, 5 + 3 = 8 students.",
              "Organized data answers questions in seconds."],
            ar: ["تساعد فريدة معلمة الرياضيات في ترتيب ٢٥ درجة: ٦، ٥، ٦، ٣، ٤، ٦، ٧، ٥، ٦، ٣، ٨، ٦، ٦، ٧، ٧، ٦، ٧، ٨، ٤، ٦، ٨، ٧، ٥، ٦، ٥.",
              "القائمة غير منظمة، فتستخدم العلامات: خطًا لكل درجة، وتشطب كل خمس علامات.",
              "عمود الدرجة ٦ يفوز بـ ٩ علامات، إذن ٦ هي المنوال: الدرجة التي حصل عليها أكثر الطلاب.",
              "تسأل المعلمة: كم طالبًا حصل على ٧ فأكثر؟ تجمع فريدة عمودي ٧ و٨: ٥ + ٣ = ٨ طلاب.",
              "البيانات المنظمة تجيب عن الأسئلة في ثوانٍ."]
          }
        },
        words: [
          ["Frequency table", "الجدول التكراري", "A table that shows how many times each value or interval occurs.", "جدول يبين عدد مرات تكرار كل قيمة أو فئة."],
          ["Interval", "الفئة", "A group of values, like 41− meaning from 41 up to less than 51.", "مجموعة من القيم مثل ‎41− وتعني من ٤١ إلى أقل من ٥١."],
          ["Histogram", "المدرج التكراري", "Touching bars of equal width that show the frequencies of intervals.", "أعمدة متلاصقة متساوية العرض تمثل تكرارات الفئات."],
          ["Dot plot", "التمثيل بالنقاط", "A dot above a number line for each data value.", "نقطة فوق خط الأعداد لكل قيمة من البيانات."],
          ["Stem-and-leaf plot", "التمثيل بالساق والورقة", "Each number split into a stem (tens) and a leaf (ones), in order.", "تقسيم كل عدد إلى ساق (العشرات) وورقة (الآحاد) مع الترتيب."],
          ["Range", "المدى", "The greatest value minus the smallest value.", "أكبر قيمة مطروحًا منها أصغر قيمة."],
          ["Box plot", "التمثيل بالصندوق", "A chart of the smallest value, quartiles, median and greatest value.", "تمثيل لأصغر قيمة والربيعين والوسيط وأكبر قيمة."]
        ],
        lab: { parts: [{ type: "mprep1_freq" }, {
          type: "sort",
          prompt: ["Tap a question, then tap its kind.", "اضغط على السؤال ثم اختر نوعه."],
          bins: [["s", "📊", "Statistical question", "سؤال إحصائي"], ["n", "💬", "Non-statistical question", "سؤال غير إحصائي"]],
          items: [[["How many children are in your family?", "كم عدد الأطفال في أسرتك؟"], "n"], [["How many children are in the families of all Prep 1 students in your school?", "كم عدد الأطفال في أسر طلاب الصف الأول الإعدادي في مدرستك؟"], "s"],
            [["What is your height?", "ما طولك؟"], "n"], [["What are the heights of the students in your class?", "ما أطوال طلاب فصلك؟"], "s"], [["How many goals did the team score in each of its 34 matches?", "كم هدفًا سجل الفريق في كل مباراة من مبارياته الـ ٣٤؟"], "s"],
            [["What time does school start today?", "متى يبدأ اليوم الدراسي اليوم؟"], "n"], [["Which transport do the students of your school use?", "ما وسيلة المواصلات التي يستخدمها طلاب مدرستك؟"], "s"]]
        }] },
        quiz: [
          Q(["Marks: 3 → 2 students, 4 → 2, 5 → 4, 6 → 9, 7 → 5, 8 → 3. How many students got at least 7?", "الدرجات: ٣ ← ٢ طالب، ٤ ← ٢، ٥ ← ٤، ٦ ← ٩، ٧ ← ٥، ٨ ← ٣. كم طالبًا حصل على ٧ على الأقل؟"], [["8", "٨"], ["5", "٥"], ["17", "١٧"], ["3", "٣"]],
            ["At least 7 means 7 or 8: 5 + 3 = 8 students.", "على الأقل ٧ تعني ٧ أو ٨: ٥ + ٣ = ٨ طلاب."], ["Farida adds the last two bars of her chart.", "تجمع فريدة آخر عمودين في رسمها."]),
          Q(["For the same marks, what is the mode?", "للدرجات نفسها، ما المنوال؟"], [["6", "٦"], ["9", "٩"], ["8", "٨"], ["5", "٥"]],
            ["The mode is the value with the greatest frequency: 6 appears 9 times. 9 is its frequency, not the mode.", "المنوال هو القيمة الأكثر تكرارًا: ٦ تكررت ٩ مرات، و ٩ هو التكرار وليس المنوال."], ["The tallest bar stands above the mark 6.", "أطول عمود يقف فوق الدرجة ٦."]),
          Q(["Which chart does NOT show the actual data values?", "أي تمثيل لا يعرض القيم الفعلية للبيانات؟"], [["Histogram", "المدرج التكراري"], ["Dot plot", "التمثيل بالنقاط"], ["Stem-and-leaf plot", "التمثيل بالساق والورقة"], ["Bar graph of single values", "الأعمدة البيانية للقيم المفردة"]],
            ["A histogram shows only how many values fall in each interval, not the values themselves.", "المدرج التكراري يبين عدد القيم في كل فئة فقط، ولا يبين القيم نفسها."], ["The histogram tells you 8 players are in 81−, but not their exact masses.", "المدرج يخبرك أن ٨ لاعبين في الفئة ‎81− لكن لا يخبرك بكتلهم بالضبط."]),
          Q(["Masses go from 41 kg to 100 kg. What is the range?", "تتراوح الكتل من ٤١ كجم إلى ١٠٠ كجم. ما المدى؟"], [["59", "٥٩"], ["141", "١٤١"], ["60.5", "٦٠٫٥"], ["41", "٤١"]],
            ["Range = greatest − smallest = 100 − 41 = 59 (about 60 when making intervals).", "المدى = أكبر قيمة − أصغر قيمة = 100 − 41 = 59 (نحو ٦٠ عند تكوين الفئات)."], ["How far the lightest player is from the heaviest: 59 kg.", "المسافة بين أخف لاعب وأثقل لاعب: ٥٩ كجم."]),
          Q(["In a stem-and-leaf plot, what does the key 2|6 mean?", "في التمثيل بالساق والورقة، ماذا يعني المفتاح 2|6؟"], [["26", "٢٦"], ["2.6", "٢٫٦"], ["62", "٦٢"], ["8", "٨"]],
            ["The stem is the tens digit and the leaf is the ones digit: 2|6 = 26.", "الساق رقم العشرات والورقة رقم الآحاد: 2|6 = 26."], ["The stem is the branch (tens), the leaf grows on it (ones).", "الساق هو الفرع (العشرات) والورقة تنمو عليه (الآحاد)."]),
          Q(["What is special about the bars of a histogram?", "ما الذي يميز أعمدة المدرج التكراري؟"], [["Equal width and no gaps between them", "متساوية العرض ومتلاصقة"], ["Different widths with gaps", "مختلفة العرض وبينها فراغات"], ["Equal width with equal gaps", "متساوية العرض وبينها فراغات متساوية"], ["They are drawn as dots", "تُرسم نقاطًا"]],
            ["The intervals have the same length and follow each other, so the columns have equal width and touch.", "الفئات متساوية الطول ومتتالية، لذلك تكون الأعمدة متساوية العرض ومتلاصقة."], ["The bars hold hands: one interval ends where the next begins.", "الأعمدة متشابكة الأيدي: تنتهي الفئة حيث تبدأ التالية."]),
          Q(["When can a bar graph be misleading?", "متى تكون الأعمدة البيانية مضللة؟"], [["When the vertical axis does not start at zero", "عندما لا يبدأ المحور الرأسي من الصفر"], ["When the bars have equal width", "عندما تكون الأعمدة متساوية العرض"], ["When it has a title", "عندما يكون له عنوان"], ["When the scale is equal", "عندما يكون التدريج متساويًا"]],
            ["Cutting the axis (or using an unequal scale) makes small differences look huge.", "قطع المحور (أو استخدام تدريج غير متساوٍ) يجعل الفروق الصغيرة تبدو كبيرة."], ["A post office count of 50 against 52 can look like double if the axis starts at 48.", "عدد ٥٠ مكتب بريد مقابل ٥٢ قد يبدو ضعفه إذا بدأ المحور من ٤٨."]),
          Q(["In the intervals 41−, 51−, 61−, ..., which interval holds a mass of 51 kg?", "في الفئات ‎41−، 51−، 61−، ...، في أي فئة تقع كتلة ٥١ كجم؟"], [["51−", "‎51−"], ["41−", "‎41−"], ["61−", "‎61−"], ["Both 41− and 51−", "‎41− و 51− معًا"]],
            ["41− means from 41 up to less than 51, so 51 starts the next interval, 51−.", "‎41− تعني من ٤١ إلى أقل من ٥١، إذن ٥١ تبدأ الفئة التالية ‎51−."], ["Each value lives in exactly one interval, never two.", "كل قيمة تسكن فئة واحدة فقط، لا فئتين."])
        ]
      },
      {
        id: "mprep1u3l2", icon: "⚖️", page: 55,
        title: { en: "Arithmetic Mean", ar: "الوسط الحسابي" },
        idea: {
          official: {
            en: ["Measures of central tendency: mean, median and mode. Mean = sum of values ÷ their number: " + eq("(7 + 4 + 11 + 8 + 5) ÷ 5 = 7") + ".",
              "The median is the middle value after arranging: 2, 2, 3, 4, 6, 9, 9 → 4. With an even count take the two middle values: 2, 3, 4, 6, 9, 17 → " + eq("(4 + 6) ÷ 2 = 5") + ".",
              "The mode is the most frequent value; a set may have two modes (bimodal) or none.",
              "For a frequency table: " + eq("mean = Σ(f · x) ÷ Σf") + ". Pocket money over 7 days with " + eq("Σ(f · x) = 147") + ": mean " + eq("147 ÷ 7 = 21") + " LE.",
              "Sarah has 94, 88, 81 and wants a mean of 83 in 5 tests: she needs " + eq("83 × 5 = 415") + " in total, " + eq("415 − 263 = 152") + " in the last two, so at least 52 (with 100 in the other).",
              "An extreme value can mislead: prices 180, 150, 160, 150, 20 have mean 132 but median 150, which describes the meals better."],
            ar: ["مقاييس النزعة المركزية: الوسط الحسابي والوسيط والمنوال. الوسط الحسابي = مجموع القيم ÷ عددها: " + eq("(7 + 4 + 11 + 8 + 5) ÷ 5 = 7") + ".",
              "الوسيط هو القيمة التي في المنتصف بعد الترتيب: ٢، ٢، ٣، ٤، ٦، ٩، ٩ ← ٤. وعندما يكون العدد زوجيًا نأخذ القيمتين الوسطيين: ٢، ٣، ٤، ٦، ٩، ١٧ ← " + eq("(4 + 6) ÷ 2 = 5") + ".",
              "المنوال هو القيمة الأكثر تكرارًا، وقد يكون للبيانات منوالان أو لا يكون لها منوال.",
              "للجدول التكراري: " + eq("mean = Σ(f · x) ÷ Σf") + ". مصروف ٧ أيام فيه " + eq("Σ(f · x) = 147") + ": الوسط " + eq("147 ÷ 7 = 21") + " جنيهًا.",
              "درجات سارة ٩٤ و٨٨ و٨١، وتريد متوسطًا ٨٣ في ٥ اختبارات: تحتاج مجموعًا " + eq("83 × 5 = 415") + "، أي " + eq("415 − 263 = 152") + " في الاختبارين الأخيرين، فأقل درجة ٥٢ (مع ١٠٠ في الآخر).",
              "القيمة المتطرفة قد تضلل: الأسعار ١٨٠ و١٥٠ و١٦٠ و١٥٠ و٢٠ وسطها ١٣٢ ووسيطها ١٥٠، والوسيط يعبر عن أسعار الوجبات أفضل."]
          },
          story: {
            en: ["Yassin's family checks their mobile internet: 5 days at 2 GB, 3 days at 4 GB and 2 days at 1 GB.",
              "Σf = 5 + 3 + 2 = 10 days and Σ(f · x) = 10 + 12 + 2 = 24 GB.",
              "Mean = 24 ÷ 10 = 2.4 GB a day: as if every day used the same amount.",
              "Imagine stacks of data cubes: take from the tall stacks, give to the short ones, until all stacks are level at 2.4.",
              "That level height is the arithmetic mean."],
            ar: ["تراجع أسرة ياسين استهلاك الإنترنت: ٥ أيام بـ ٢ جيجابايت، و٣ أيام بـ ٤، ويومان بـ ١.",
              "Σf = ٥ + ٣ + ٢ = ١٠ أيام، و Σ(f · x) = ١٠ + ١٢ + ٢ = ٢٤ جيجابايت.",
              "الوسط = ٢٤ ÷ ١٠ = ٢٫٤ جيجابايت يوميًا، كأن كل يوم استهلك المقدار نفسه.",
              "تخيل أبراجًا من المكعبات: خذ من الأبراج الطويلة وأعطِ القصيرة حتى تتساوى كلها عند ٢٫٤.",
              "هذا الارتفاع المتساوي هو الوسط الحسابي."]
          }
        },
        words: [
          ["Arithmetic mean", "الوسط الحسابي", "Sum of the values ÷ their number; also called the average.", "مجموع القيم ÷ عددها، ويسمى المتوسط."],
          ["Median", "الوسيط", "The middle value after arranging the data in order.", "القيمة التي تقع في المنتصف بعد ترتيب البيانات."],
          ["Mode", "المنوال", "The value that occurs most often.", "القيمة الأكثر تكرارًا."],
          ["Central tendency", "النزعة المركزية", "A single value around which the data tends to cluster.", "قيمة واحدة تتجمع حولها البيانات."],
          ["Frequency", "التكرار", "How many times a value occurs (f).", "عدد مرات ظهور القيمة (f)."],
          ["Extreme value", "القيمة المتطرفة", "A very large or very small value that pulls the mean away.", "قيمة كبيرة جدًا أو صغيرة جدًا تجذب الوسط بعيدًا."]
        ],
        lab: { parts: [{ type: "mprep1_mean" }, {
          type: "sort",
          prompt: ["Tap a clue, then tap the measure it describes.", "اضغط على الدليل ثم اختر المقياس الذي يصفه."],
          bins: [["a", "➗", "Mean", "الوسط"], ["m", "↔️", "Median", "الوسيط"], ["o", "🏆", "Mode", "المنوال"]],
          items: [[["Sum of values ÷ their number", "مجموع القيم ÷ عددها"], "a"], [["The middle value after arranging", "القيمة في المنتصف بعد الترتيب"], "m"], [["The most frequent value", "القيمة الأكثر تكرارًا"], "o"], [["Can be bimodal", "قد يكون اثنين"], "o"],
            [["Pulled a lot by one extreme value", "يتأثر كثيرًا بقيمة متطرفة واحدة"], "a"], [["Σ(f · x) ÷ Σf", "Σ(f · x) ÷ Σf"], "a"], [["For 2, 3, 4, 6, 9, 17 it is (4 + 6) ÷ 2", "للقيم ٢، ٣، ٤، ٦، ٩، ١٧ يساوي (٤ + ٦) ÷ ٢"], "m"]]
        }] },
        quiz: [
          Q(["What is the mean of 7, 4, 11, 8, 5?", "ما الوسط الحسابي للقيم ٧، ٤، ١١، ٨، ٥؟"], [["7", "٧"], ["8", "٨"], ["35", "٣٥"], ["11", "١١"]],
            ["Sum = 35 and there are 5 values: 35 ÷ 5 = 7.", "المجموع ٣٥ وعدد القيم ٥: ٣٥ ÷ ٥ = ٧."], ["Share 35 sweets fairly between 5 friends: 7 each.", "وزّع ٣٥ قطعة حلوى بالتساوي على ٥ أصدقاء: ٧ لكل واحد."]),
          Q(["Sarah got 94, 88 and 81 in three tests out of 100. What is the least mark she can get in one of the other two tests to have a mean of 83 in all five?", "حصلت سارة على ٩٤ و٨٨ و٨١ في ثلاثة اختبارات من ١٠٠. ما أقل درجة يمكن أن تحصل عليها في أحد الاختبارين الباقيين ليكون متوسطها ٨٣ في الخمسة؟"], [["52", "٥٢"], ["76", "٧٦"], ["83", "٨٣"], ["48", "٤٨"]],
            ["Total needed 83 × 5 = 415; she has 263, so 152 more. With 100 in one test, the other is 52.", "المجموع المطلوب ٨٣ × ٥ = ٤١٥، ومعها ٢٦٣، فتحتاج ١٥٢. إذا حصلت على ١٠٠ في اختبار يكون الآخر ٥٢."], ["The best test can give at most 100, the other must carry the rest: 52.", "أفضل اختبار يعطي ١٠٠ على الأكثر، والآخر يحمل الباقي: ٥٢."]),
          Q(["For a frequency table, Σf = 10 and Σ(f · x) = 40. What is the mean?", "في جدول تكراري Σf = 10 و Σ(f · x) = 40. ما الوسط الحسابي؟"], [["4", "٤"], ["30", "٣٠"], ["50", "٥٠"], ["400", "٤٠٠"]],
            ["Mean = Σ(f · x) ÷ Σf = 40 ÷ 10 = 4.", "الوسط = Σ(f · x) ÷ Σf = 40 ÷ 10 = 4."], ["40 points shared by 10 people: 4 each.", "٤٠ نقطة على ١٠ أشخاص: ٤ لكل واحد."]),
          Q(["The mean of a frequency table is 20 and Σ(f · x) = 1,500. What is Σf?", "الوسط الحسابي لجدول تكراري ٢٠ و Σ(f · x) = 1,500. ما Σf؟"], [["75", "٧٥"], ["150", "١٥٠"], ["3,000", "٣٠٠٠"], ["30,000", "٣٠٠٠٠"]],
            ["Σf = Σ(f · x) ÷ mean = 1,500 ÷ 20 = 75.", "Σf = Σ(f · x) ÷ الوسط = 1,500 ÷ 20 = 75."], ["How many people share 1,500 if each gets 20? 75 people.", "كم شخصًا يقتسمون ١٥٠٠ إذا أخذ كل منهم ٢٠؟ ٧٥ شخصًا."]),
          Q(["What is the median of 2, 3, 4, 6, 9, 17?", "ما وسيط القيم ٢، ٣، ٤، ٦، ٩، ١٧؟"], [["5", "٥"], ["4", "٤"], ["6.8", "٦٫٨"], ["10", "١٠"]],
            ["There are 6 values, so the median is the mean of the two middle ones: (4 + 6) ÷ 2 = 5.", "عدد القيم ٦، فالوسيط متوسط القيمتين الوسطيين: (٤ + ٦) ÷ ٢ = ٥."], ["Two values share the middle seat, so we take the point halfway between them.", "قيمتان تتقاسمان مقعد المنتصف، فنأخذ النقطة التي في منتصفهما."]),
          Q(["A menu has meals at 180, 150, 160 and 150 LE and a 20 LE water bottle. What is the median price?", "قائمة بها وجبات بـ ١٨٠ و١٥٠ و١٦٠ و١٥٠ جنيهًا وزجاجة ماء بـ ٢٠ جنيهًا. ما الوسيط؟"], [["150 LE", "١٥٠ جنيهًا"], ["132 LE", "١٣٢ جنيهًا"], ["160 LE", "١٦٠ جنيهًا"], ["20 LE", "٢٠ جنيهًا"]],
            ["Arranged: 20, 150, 150, 160, 180, so the median is 150. The mean, 132, is pulled down by the extreme value 20.", "بالترتيب: ٢٠، ١٥٠، ١٥٠، ١٦٠، ١٨٠، فالوسيط ١٥٠، أما الوسط ١٣٢ فقد سحبته القيمة المتطرفة ٢٠."], ["The water bottle is not a meal, so it should not decide the 'average' meal price.", "زجاجة الماء ليست وجبة، فلا يجب أن تحدد متوسط سعر الوجبة."]),
          Q(["A student's mean in five exams is 94. The first four are 97, 92, 94 and 91. What is the fifth mark?", "متوسط درجات طالب في خمسة امتحانات ٩٤، ودرجاته في الأربعة الأولى ٩٧ و٩٢ و٩٤ و٩١. ما درجته في الخامس؟"], [["96", "٩٦"], ["93", "٩٣"], ["90", "٩٠"], ["98", "٩٨"]],
            ["Total = 94 × 5 = 470; the first four add to 374, so the fifth is 470 − 374 = 96.", "المجموع = ٩٤ × ٥ = ٤٧٠، والأربعة الأولى مجموعها ٣٧٤، إذن الخامس ٤٧٠ − ٣٧٤ = ٩٦."], ["Compare each mark with 94: +3, −2, 0, −3 give −2, so the fifth must be 94 + 2.", "قارن كل درجة بـ ٩٤: +٣ و−٢ و٠ و−٣ مجموعها −٢، إذن الخامس ٩٤ + ٢."]),
          Q(["Sandy's marks are 18, 17, 16, 15 and 18. If the lowest mark is removed, which is true?", "درجات ساندي ١٨ و١٧ و١٦ و١٥ و١٨. إذا حُذفت أقل درجة، فأي العبارات صحيحة؟"], [["The mean increases", "يزداد الوسط"], ["The mean decreases", "يقل الوسط"], ["The median decreases", "يقل الوسيط"], ["The median does not change", "لا يتغير الوسيط"]],
            ["Mean before 84 ÷ 5 = 16.8, after 69 ÷ 4 = 17.25: it increases. The median also rises from 17 to 17.5.", "الوسط قبل ٨٤ ÷ ٥ = ١٦٫٨ وبعد ٦٩ ÷ ٤ = ١٧٫٢٥ فيزداد، والوسيط يرتفع أيضًا من ١٧ إلى ١٧٫٥."], ["Removing the shortest stack makes the level of the others higher.", "إزالة أقصر برج ترفع مستوى الأبراج الباقية."])
        ]
      },
      {
        id: "mprep1u3l3", icon: "🥧", page: 60,
        title: { en: "Pie Charts", ar: "التمثيل بالقطاعات الدائرية" },
        idea: {
          official: {
            en: ["A pie chart is a circle divided into sectors according to the share of each group: it shows parts of a whole.",
              "The percentages of the sectors add up to 100% and their central angles add up to 360°.",
              eq("central angle = (frequency ÷ total) × 360°") + ". Votes: Khaled 8, Anas 12, Hamza 10, total 30: " + eq("8/30 × 360° = 96°") + ", " + eq("12/30 × 360° = 144°") + ", " + eq("10/30 × 360° = 120°") + ".",
              "From percentages: handball 15% → " + eq("54°") + ", basketball 25% → " + eq("90°") + ", football 45% → " + eq("162°") + ", volleyball 15% → " + eq("54°") + ".",
              "Draw a circle with a compass, draw a radius, and use a protractor to draw each central angle from the last radius.",
              "Reading back: Sally had 2,500 calories and dinner was 32%: " + eq("2,500 × 0.32 = 800") + " calories."],
            ar: ["التمثيل بالقطاعات الدائرية دائرة مقسمة إلى قطاعات حسب نصيب كل مجموعة، ويوضح علاقة الجزء بالكل.",
              "مجموع النسب المئوية للقطاعات ١٠٠٪، ومجموع قياسات الزوايا المركزية ٣٦٠°.",
              eq("central angle = (frequency ÷ total) × 360°") + ". الأصوات: خالد ٨ وأنس ١٢ وحمزة ١٠، والمجموع ٣٠: " + eq("8/30 × 360° = 96°") + " و " + eq("12/30 × 360° = 144°") + " و " + eq("10/30 × 360° = 120°") + ".",
              "من النسب المئوية: كرة اليد ١٥٪ ← " + eq("54°") + "، والسلة ٢٥٪ ← " + eq("90°") + "، والقدم ٤٥٪ ← " + eq("162°") + "، والطائرة ١٥٪ ← " + eq("54°") + ".",
              "نرسم دائرة بالفرجار ثم نصف قطر، ونستخدم المنقلة لرسم كل زاوية مركزية بدءًا من آخر نصف قطر.",
              "القراءة العكسية: تناولت سالي ٢٥٠٠ سعر حراري وكان العشاء ٣٢٪: " + eq("2,500 × 0.32 = 800") + " سعر حراري."]
          },
          story: {
            en: ["Bassem draws his whole day as a pie: sleeping 30%, school 25%, homework 10%, entertainment 20%, other 15%.",
              "Sleeping: 30/100 × 360° = 108°. School: 90°. Homework: 36°. Entertainment: 72°. Other: 54°.",
              "He checks: 108 + 90 + 36 + 72 + 54 = 360°. The whole circle is the whole day.",
              "His sister points out that 108° of sleep is 7.2 hours: 30% of 24 hours.",
              "A pie chart makes 'how much of the day' something you can see at a glance."],
            ar: ["يرسم باسم يومه كله في دائرة: النوم ٣٠٪، المدرسة ٢٥٪، الواجبات ١٠٪، الترفيه ٢٠٪، أخرى ١٥٪.",
              "النوم: ٣٠/١٠٠ × ٣٦٠° = ١٠٨°، والمدرسة ٩٠°، والواجبات ٣٦°، والترفيه ٧٢°، وأخرى ٥٤°.",
              "يتحقق: ١٠٨ + ٩٠ + ٣٦ + ٧٢ + ٥٤ = ٣٦٠°؛ الدائرة كلها هي اليوم كله.",
              "تلاحظ أخته أن ١٠٨° من النوم تعني ٧٫٢ ساعة: ٣٠٪ من ٢٤ ساعة.",
              "القطاعات الدائرية تجعل نصيب كل نشاط من اليوم واضحًا بنظرة واحدة."]
          }
        },
        words: [
          ["Pie chart", "التمثيل بالقطاعات الدائرية", "A circle divided into sectors to show parts of a whole.", "دائرة مقسمة إلى قطاعات توضح أجزاء الكل."],
          ["Circular sector", "القطاع الدائري", "The part of a circle between two radii.", "جزء من الدائرة محصور بين نصفي قطرين."],
          ["Central angle", "الزاوية المركزية", "The angle of a sector at the centre: frequency ÷ total × 360°.", "زاوية القطاع عند المركز: التكرار ÷ المجموع × ٣٦٠°."],
          ["Percentage", "النسبة المئوية", "A share out of 100; all the sectors together make 100%.", "نصيب من ١٠٠، ومجموع القطاعات كلها ١٠٠٪."],
          ["Compass", "الفرجار", "A tool for drawing circles.", "أداة لرسم الدوائر."],
          ["Protractor", "المنقلة", "A tool for measuring and drawing angles.", "أداة لقياس الزوايا ورسمها."]
        ],
        lab: { parts: [{ type: "mprep1_pie" }, {
          type: "sort",
          prompt: ["Tap a sector, then tap its share of the circle.", "اضغط على القطاع ثم اختر نصيبه من الدائرة."],
          bins: [["10", "🍰", "10%", "١٠٪"], ["25", "🍕", "25%", "٢٥٪"], ["50", "🌓", "50%", "٥٠٪"]],
          items: [[["A 90° sector", "قطاع زاويته ٩٠°"], "25"], [["A 180° sector", "قطاع زاويته ١٨٠°"], "50"], [["A 36° sector", "قطاع زاويته ٣٦°"], "10"], [["3 votes out of 30", "٣ أصوات من ٣٠"], "10"],
            [["6 hours out of 24", "٦ ساعات من ٢٤"], "25"], [["1,200 out of 2,400", "١٢٠٠ من ٢٤٠٠"], "50"]]
        }] },
        quiz: [
          Q(["Khaled got 8 of 30 votes. What is the central angle of his sector?", "حصل خالد على ٨ أصوات من ٣٠. ما قياس الزاوية المركزية لقطاعه؟"], [["96°", "٩٦°"], ["80°", "٨٠°"], ["8°", "٨°"], ["144°", "١٤٤°"]],
            ["8/30 × 360° = 8 × 12° = 96°.", "8/30 × 360° = 8 × 12° = 96°."], ["30 votes share 360°, so each vote is worth 12°.", "٣٠ صوتًا تتقاسم ٣٦٠°، فكل صوت يساوي ١٢°."]),
          Q(["45% of people chose football. What is the central angle of the football sector?", "اختار ٤٥٪ من الناس كرة القدم. ما قياس الزاوية المركزية لقطاعها؟"], [["162°", "١٦٢°"], ["45°", "٤٥°"], ["135°", "١٣٥°"], ["180°", "١٨٠°"]],
            ["45/100 × 360° = 162°.", "45/100 × 360° = 162°."], ["Each 1% is 3.6°, so 45% is 45 × 3.6° = 162°.", "كل ١٪ يساوي ٣٫٦°، إذن ٤٥٪ = ٤٥ × ٣٫٦° = ١٦٢°."]),
          Q(["Sally had 2,500 calories in a day and dinner was 32% of them. How many calories at dinner?", "تناولت سالي ٢٥٠٠ سعر حراري في يوم، وكان العشاء ٣٢٪ منها. كم سعرًا حراريًا في العشاء؟"], [["800", "٨٠٠"], ["320", "٣٢٠"], ["78", "٧٨"], ["1,700", "١٧٠٠"]],
            ["2,500 × 32/100 = 800 calories.", "2,500 × 32/100 = 800 سعر حراري."], ["10% is 250, 30% is 750, 2% is 50: 800 in all.", "١٠٪ = ٢٥٠، و٣٠٪ = ٧٥٠، و٢٪ = ٥٠: المجموع ٨٠٠."]),
          Q(["A club has 900, 1,200, 2,700 and 2,400 members in four age groups. What is the central angle for the 2,700 group?", "في نادٍ ٩٠٠ و١٢٠٠ و٢٧٠٠ و٢٤٠٠ عضو في أربع فئات عمرية. ما الزاوية المركزية لفئة الـ ٢٧٠٠؟"], [["135°", "١٣٥°"], ["120°", "١٢٠°"], ["270°", "٢٧٠°"], ["37.5°", "٣٧٫٥°"]],
            ["Total = 7,200; 2,700/7,200 × 360° = 135°.", "المجموع ٧٢٠٠؛ 2,700/7,200 × 360° = 135°."], ["Every 20 members get 1°, and 2,700 ÷ 20 = 135.", "كل ٢٠ عضوًا لهم درجة واحدة، و ٢٧٠٠ ÷ ٢٠ = ١٣٥."]),
          Q(["A sector has a central angle of 90°. What percentage does it show?", "قطاع زاويته المركزية ٩٠°. ما النسبة المئوية التي يمثلها؟"], [["25%", "٢٥٪"], ["90%", "٩٠٪"], ["50%", "٥٠٪"], ["9%", "٩٪"]],
            ["90 ÷ 360 = 1/4 = 25%.", "90 ÷ 360 = 1/4 = 25%."], ["A right angle at the centre is a quarter of the pizza.", "الزاوية القائمة عند المركز ربع البيتزا."]),
          Q(["Water covers about 70% of Earth's surface. What central angle shows water?", "يغطي الماء نحو ٧٠٪ من سطح الأرض. ما الزاوية المركزية التي تمثل الماء؟"], [["252°", "٢٥٢°"], ["108°", "١٠٨°"], ["70°", "٧٠°"], ["270°", "٢٧٠°"]],
            ["70/100 × 360° = 252°; land is the other 108°.", "70/100 × 360° = 252°، واليابس ١٠٨° الباقية."], ["The blue planet's pie is mostly blue: 252 of 360 degrees.", "دائرة الكوكب الأزرق معظمها أزرق: ٢٥٢ من ٣٦٠ درجة."]),
          Q(["In a pie chart, a 72° sector stands for 600 people. How many people are in the whole survey?", "في تمثيل بالقطاعات الدائرية يمثل قطاع زاويته ٧٢° عدد ٦٠٠ شخص. كم شخصًا في المسح كله؟"], [["3,000", "٣٠٠٠"], ["4,320", "٤٣٢٠"], ["1,200", "١٢٠٠"], ["720", "٧٢٠"]],
            ["72° is 72/360 = 1/5 of the circle, so the total is 600 × 5 = 3,000.", "‏٧٢° = 72/360 = 1/5 من الدائرة، إذن الكل = ٦٠٠ × ٥ = ٣٠٠٠."], ["Five slices of 72° fill the circle, each with 600 people.", "خمس قطع كل منها ٧٢° تملأ الدائرة، وفي كل منها ٦٠٠ شخص."]),
          Q(["Pens of brands X, Y, Z are sold in the ratio 3 : 5 : 10. What is the central angle for Z?", "تباع أقلام الماركات X و Y و Z بنسبة 3 : 5 : 10. ما الزاوية المركزية للماركة Z؟"], [["200°", "٢٠٠°"], ["100°", "١٠٠°"], ["180°", "١٨٠°"], ["36°", "٣٦°"]],
            ["Sum of parts 18; 10/18 × 360° = 200°.", "مجموع الأجزاء ١٨؛ 10/18 × 360° = 200°."], ["Each part gets 360 ÷ 18 = 20°, and Z has 10 parts.", "كل جزء له ٣٦٠ ÷ ١٨ = ٢٠°، ولـ Z عشرة أجزاء."])
        ]
      }
    ]
  });

  /* ======================= UNIT 4 - GEOMETRY & MEASUREMENT ======================= */
  U.push({
    id: "mprep1u4", num: 4, icon: "📐", color: "purple",
    title: { en: "Geometry & Measurement", ar: "الهندسة والقياس" },
    lessons: [
      {
        id: "mprep1u4l1", icon: "📐", page: 69,
        title: { en: "Types of Angles and Relations between Angles", ar: "أنواع الزوايا والعلاقات بينها" },
        idea: {
          official: {
            en: ["An angle is the union of two rays with the same initial point, called the vertex. Angles are measured in degrees: " + eq("1° = 60′") + " and " + eq("1′ = 60″") + ".",
              "Types: zero (0°), acute (between 0° and 90°), right (90°), obtuse (between 90° and 180°), straight (180°) and reflex (between 180° and 360°). The reflex of 70° is " + eq("360° − 70° = 290°") + ".",
              "Adjacent angles share a vertex and a side. Complementary angles add to 90°; supplementary angles add to 180°. If two adjacent angles are supplementary, their outer sides form a straight line.",
              "Example: on a straight line " + eq("(4x + 8)° + (x + 2)° = 180°") + ", so " + eq("5x = 170°") + " and " + eq("x = 34°") + ".",
              "Two intersecting lines make vertically opposite angles, which are equal. If " + eq("∠CMD = 70°") + " then " + eq("∠AMB = 70°") + " and the other two are " + eq("110°") + ".",
              "Accumulative angles around a point add to 360°: " + eq("x + 100° + 20° + 90° + 35° = 360°") + " gives " + eq("x = 115°") + "."],
            ar: ["الزاوية اتحاد شعاعين لهما نقطة البداية نفسها وتسمى الرأس، وتقاس بالدرجات: " + eq("1° = 60′") + " و " + eq("1′ = 60″") + ".",
              "أنواعها: صفرية (٠°)، حادة (بين ٠° و٩٠°)، قائمة (٩٠°)، منفرجة (بين ٩٠° و١٨٠°)، مستقيمة (١٨٠°)، منعكسة (بين ١٨٠° و٣٦٠°). والزاوية المنعكسة لزاوية ٧٠° قياسها " + eq("360° − 70° = 290°") + ".",
              "الزاويتان المتجاورتان لهما الرأس نفسه وضلع مشترك. المتتامتان مجموعهما ٩٠°، والمتكاملتان مجموعهما ١٨٠°، وإذا تكاملت زاويتان متجاورتان كان ضلعاهما المتطرفان على استقامة واحدة.",
              "مثال: على خط مستقيم " + eq("(4x + 8)° + (x + 2)° = 180°") + " إذن " + eq("5x = 170°") + " و " + eq("x = 34°") + ".",
              "المستقيمان المتقاطعان يكوّنان زوايا متقابلة بالرأس وهي متساوية في القياس: إذا كان " + eq("∠CMD = 70°") + " فإن " + eq("∠AMB = 70°") + " والزاويتان الأخريان " + eq("110°") + ".",
              "مجموع قياسات الزوايا المتجمعة حول نقطة ٣٦٠°: " + eq("x + 100° + 20° + 90° + 35° = 360°") + " يعطي " + eq("x = 115°") + "."]
          },
          story: {
            en: ["Rana stands at a crossroads in New Cairo where two straight roads meet. The angle between Road 90 and the side street is 70°.",
              "Across the junction, the opposite angle is also 70°: vertically opposite angles are equal.",
              "Next to the 70° angle, along a straight road, is 180° − 70° = 110°. So the four corners are 70°, 110°, 70°, 110°.",
              "She adds them all: 70 + 110 + 70 + 110 = 360°, a full turn around the point.",
              "Every crossroads hides these four angle facts."],
            ar: ["تقف رنا عند تقاطع في القاهرة الجديدة يلتقي فيه طريقان مستقيمان، والزاوية بين شارع التسعين والشارع الجانبي ٧٠°.",
              "في الجهة المقابلة من التقاطع تكون الزاوية ٧٠° أيضًا، لأن الزاويتين المتقابلتين بالرأس متساويتان.",
              "بجوار الزاوية ٧٠° على الطريق المستقيم زاوية ١٨٠° − ٧٠° = ١١٠°، فالزوايا الأربع ٧٠° و١١٠° و٧٠° و١١٠°.",
              "تجمعها كلها: ٧٠ + ١١٠ + ٧٠ + ١١٠ = ٣٦٠°، دورة كاملة حول النقطة.",
              "كل تقاطع يخفي هذه الحقائق الأربع عن الزوايا."]
          }
        },
        words: [
          ["Acute angle", "الزاوية الحادة", "An angle more than 0° and less than 90°.", "زاوية قياسها أكبر من ٠° وأقل من ٩٠°."],
          ["Obtuse angle", "الزاوية المنفرجة", "An angle more than 90° and less than 180°.", "زاوية قياسها أكبر من ٩٠° وأقل من ١٨٠°."],
          ["Reflex angle", "الزاوية المنعكسة", "An angle more than 180° and less than 360°.", "زاوية قياسها أكبر من ١٨٠° وأقل من ٣٦٠°."],
          ["Complementary angles", "الزاويتان المتتامتان", "Two angles whose measures add up to 90°.", "زاويتان مجموع قياسيهما ٩٠°."],
          ["Supplementary angles", "الزاويتان المتكاملتان", "Two angles whose measures add up to 180°.", "زاويتان مجموع قياسيهما ١٨٠°."],
          ["Vertically opposite angles", "الزاويتان المتقابلتان بالرأس", "Non-adjacent angles made by two intersecting lines; they are equal.", "زاويتان غير متجاورتين يكوّنهما مستقيمان متقاطعان، وهما متساويتان."],
          ["Angle bisector", "منصف الزاوية", "A ray that divides an angle into two equal angles.", "شعاع يقسم الزاوية إلى زاويتين متساويتين في القياس."]
        ],
        lab: { parts: [{ type: "mprep1_angle" }, {
          type: "sort",
          prompt: ["Tap an angle, then tap its type.", "اضغط على الزاوية ثم اختر نوعها."],
          bins: [["a", "📐", "Acute", "حادة"], ["r", "⊾", "Right", "قائمة"], ["o", "↗️", "Obtuse", "منفرجة"], ["x", "🔄", "Reflex", "منعكسة"]],
          items: [[["35°", "٣٥°"], "a"], [["89°", "٨٩°"], "a"], [["90°", "٩٠°"], "r"], [["125°", "١٢٥°"], "o"], [["179°", "١٧٩°"], "o"], [["290°", "٢٩٠°"], "x"], [["181°", "١٨١°"], "x"]]
        }] },
        quiz: [
          Q(["Angles A and B are complementary and m(∠A) = 40°. What is m(∠B)?", "الزاويتان A و B متتامتان و m(∠A) = 40°. ما m(∠B)؟"], [["50°", "٥٠°"], ["140°", "١٤٠°"], ["40°", "٤٠°"], ["320°", "٣٢٠°"]],
            ["Complementary angles add to 90°: 90° − 40° = 50°.", "مجموع الزاويتين المتتامتين ٩٠°: ٩٠° − ٤٠° = ٥٠°."], ["Together they fill one corner of a page.", "معًا تملآن ركن الصفحة."]),
          Q(["What angle supplements an angle of 34° 60′?", "ما قياس الزاوية التي تكمل زاوية قياسها ٣٤° ٦٠′؟"], [["145°", "١٤٥°"], ["146°", "١٤٦°"], ["55°", "٥٥°"], ["56°", "٥٦°"]],
            ["60′ = 1°, so 34° 60′ = 35°, and 180° − 35° = 145°.", "٦٠′ = ١°، إذن ٣٤° ٦٠′ = ٣٥°، و ١٨٠° − ٣٥° = ١٤٥°."], ["60 minutes make one whole degree, just like 60 minutes make an hour.", "٦٠ دقيقة تكوّن درجة كاملة، كما أن ٦٠ دقيقة تكوّن ساعة."]),
          Q(["(2x − 10)° is a straight angle. What is x?", "الزاوية (2x − 10)° مستقيمة. ما قيمة x؟"], [["95°", "٩٥°"], ["85°", "٨٥°"], ["90°", "٩٠°"], ["110°", "١١٠°"]],
            ["2x − 10° = 180°, so 2x = 190° and x = 95°.", "2x − 10° = 180° إذن 2x = 190° و x = 95°."], ["Check: 2 × 95 − 10 = 180, a flat line.", "تحقق: ٢ × ٩٥ − ١٠ = ١٨٠، خط مستقيم."]),
          Q(["Two vertically opposite angles measure (2x)° and (x + 28)°. What is the measure of one of them?", "زاويتان متقابلتان بالرأس قياساهما (2x)° و (x + 28)°. ما قياس إحداهما؟"], [["56°", "٥٦°"], ["28°", "٢٨°"], ["124°", "١٢٤°"], ["84°", "٨٤°"]],
            ["Vertically opposite angles are equal: 2x = x + 28, so x = 28 and the angle is 56°.", "المتقابلتان بالرأس متساويتان: 2x = x + 28 إذن x = 28 والزاوية ٥٦°."], ["x = 28 is a trap: the question asks for the angle 2x.", "x = 28 فخ؛ السؤال عن الزاوية 2x."]),
          Q(["Two complementary angles are in the ratio 5 : 7. What is the smaller angle?", "زاويتان متتامتان النسبة بينهما 5 : 7. ما قياس الصغرى؟"], [["37.5°", "٣٧٫٥°"], ["52.5°", "٥٢٫٥°"], ["75°", "٧٥°"], ["15°", "١٥°"]],
            ["90° ÷ 12 = 7.5° per part, and 5 × 7.5° = 37.5°.", "٩٠° ÷ ١٢ = ٧٫٥° لكل جزء، و ٥ × ٧٫٥° = ٣٧٫٥°."], ["Proportional division again: share 90° in the ratio 5 : 7.", "تقسيم تناسبي من جديد: قسّم ٩٠° بنسبة 5 : 7."]),
          Q(["What type of angle supplements an acute angle?", "ما نوع الزاوية التي تكمل زاوية حادة؟"], [["Obtuse", "منفرجة"], ["Acute", "حادة"], ["Straight", "مستقيمة"], ["Reflex", "منعكسة"]],
            ["180° minus an angle less than 90° is more than 90° and less than 180°: obtuse.", "١٨٠° مطروحًا منها زاوية أقل من ٩٠° تعطي أكثر من ٩٠° وأقل من ١٨٠°: منفرجة."], ["A small slice of a straight line leaves a big, wide slice.", "قطعة صغيرة من الخط المستقيم تترك قطعة واسعة."]),
          Q(["What is the measure of the reflex angle of an angle of 70°?", "ما قياس الزاوية المنعكسة لزاوية قياسها ٧٠°؟"], [["290°", "٢٩٠°"], ["110°", "١١٠°"], ["20°", "٢٠°"], ["250°", "٢٥٠°"]],
            ["The angle and its reflex make a full turn: 360° − 70° = 290°.", "الزاوية ومنعكستها تكوّنان دورة كاملة: ٣٦٠° − ٧٠° = ٢٩٠°."], ["Go the long way round the circle.", "خذ الطريق الطويل حول الدائرة."]),
          Q(["Angles around a point measure x, 100°, 20°, 90° and 35°. What is x?", "زوايا متجمعة حول نقطة قياساتها x و١٠٠° و٢٠° و٩٠° و٣٥°. ما قيمة x؟"], [["115°", "١١٥°"], ["135°", "١٣٥°"], ["65°", "٦٥°"], ["245°", "٢٤٥°"]],
            ["x + 245° = 360°, so x = 115°.", "x + 245° = 360° إذن x = 115°."], ["A full turn is 360°: the missing piece completes it.", "الدورة الكاملة ٣٦٠°، والجزء الناقص يكملها."])
        ]
      },
      {
        id: "mprep1u4l2", icon: "🛤️", page: 77,
        title: { en: "Parallelism", ar: "التوازي" },
        idea: {
          official: {
            en: ["Two parallel straight lines never intersect (" + eq("p ∥ q") + "). Two perpendicular lines meet at right angles (" + eq("m ⊥ n") + ").",
              "A transversal cuts two or more lines and makes 8 angles: 4 interior angles between the lines and 4 exterior angles outside them.",
              "If the lines are parallel: corresponding angles are equal, alternate angles are equal, and interior angles on the same side of the transversal are supplementary (add to 180°).",
              "Example: " + eq("AB ∥ DC") + ", co-interior angles " + eq("(3x + 15)°") + " and " + eq("75°") + ": " + eq("3x + 90° = 180°") + ", so " + eq("x = 30°") + ".",
              "To prove two lines are parallel, show one of: two corresponding angles equal, two alternate angles equal, or two interior angles on the same side supplementary.",
              "A proof is a chain of steps from the givens to the required, each with a reason (∵ since, ∴ therefore)."],
            ar: ["المستقيمان المتوازيان لا يتقاطعان مهما امتدا (" + eq("p ∥ q") + ")، والمستقيمان المتعامدان يتقاطعان ويكوّنان زوايا قائمة (" + eq("m ⊥ n") + ").",
              "القاطع مستقيم يقطع مستقيمين أو أكثر ويكوّن ٨ زوايا: ٤ زوايا داخلة بين المستقيمين و٤ زوايا خارجة عنهما.",
              "إذا كان المستقيمان متوازيين: الزاويتان المتناظرتان متساويتان، والمتبادلتان متساويتان، والداخلتان وفي جهة واحدة من القاطع متكاملتان (مجموعهما ١٨٠°).",
              "مثال: " + eq("AB ∥ DC") + " والزاويتان الداخلتان في جهة واحدة " + eq("(3x + 15)°") + " و " + eq("75°") + ": " + eq("3x + 90° = 180°") + " إذن " + eq("x = 30°") + ".",
              "لإثبات توازي مستقيمين نبين أن زاويتين متناظرتين متساويتان، أو متبادلتين متساويتان، أو داخلتين في جهة واحدة من القاطع متكاملتان.",
              "البرهان سلسلة خطوات من المعطيات إلى المطلوب، ولكل خطوة سبب (∵ لأن، ∴ إذن)."]
          },
          story: {
            en: ["Omar paints the lines of a car park. The parking lines are parallel, and the long driving lane crosses them like a transversal.",
              "At the first line the lane makes a 65° angle. At every other parking line the matching corner is also 65°: corresponding angles.",
              "The corner next to it on the same side is 180° − 65° = 115°.",
              "When one line is painted a little crooked, the angles stop matching, and Omar knows it is no longer parallel.",
              "Equal corresponding angles are the proof that his lines are perfectly parallel."],
            ar: ["يرسم عمر خطوط موقف سيارات؛ خطوط الانتظار متوازية، وممر القيادة الطويل يقطعها كقاطع.",
              "عند الخط الأول يصنع الممر زاوية ٦٥°، وعند كل خط آخر تكون الزاوية المناظرة ٦٥° أيضًا: زاويتان متناظرتان.",
              "الزاوية المجاورة لها في الجهة نفسها قياسها ١٨٠° − ٦٥° = ١١٥°.",
              "عندما يُرسم أحد الخطوط مائلًا قليلًا تتوقف الزوايا عن التطابق، فيعرف عمر أنه لم يعد موازيًا.",
              "تساوي الزوايا المتناظرة هو البرهان على أن خطوطه متوازية تمامًا."]
          }
        },
        words: [
          ["Parallel lines", "المستقيمان المتوازيان", "Two straight lines in a plane that never intersect: p ∥ q.", "مستقيمان في مستوى لا يتقاطعان: p ∥ q."],
          ["Transversal", "القاطع", "A straight line that intersects two or more straight lines.", "مستقيم يقطع مستقيمين أو أكثر."],
          ["Corresponding angles", "الزاويتان المتناظرتان", "Same side of the transversal, one interior and one exterior; equal when lines are parallel.", "في جهة واحدة من القاطع، إحداهما داخلة والأخرى خارجة، ومتساويتان عند التوازي."],
          ["Alternate angles", "الزاويتان المتبادلتان", "Both interior (or both exterior) on different sides of the transversal; equal when lines are parallel.", "داخلتان (أو خارجتان) في جهتين مختلفتين من القاطع، ومتساويتان عند التوازي."],
          ["Co-interior angles", "الزاويتان الداخلتان في جهة واحدة", "Interior angles on the same side of the transversal; they add to 180° when lines are parallel.", "زاويتان داخلتان في جهة واحدة من القاطع، ومجموعهما ١٨٠° عند التوازي."],
          ["Perpendicular", "متعامدان", "Two lines that meet at right angles: m ⊥ n.", "مستقيمان يتقاطعان ويكوّنان زوايا قائمة: m ⊥ n."],
          ["Proof", "البرهان", "Logical steps with reasons, from the givens to what is required.", "خطوات منطقية لها أسباب من المعطيات إلى المطلوب."]
        ],
        lab: { parts: [{ type: "mprep1_parallel" }, {
          type: "sort",
          prompt: ["Lines are parallel. Tap a pair, then tap: equal or supplementary?", "المستقيمان متوازيان. اضغط على الزوج ثم اختر: متساويتان أم متكاملتان؟"],
          bins: [["e", "🟰", "Equal", "متساويتان"], ["s", "➕", "Add to 180°", "مجموعهما ١٨٠°"]],
          items: [[["Corresponding angles", "زاويتان متناظرتان"], "e"], [["Alternate interior angles", "زاويتان متبادلتان داخليًا"], "e"], [["Alternate exterior angles", "زاويتان متبادلتان خارجيًا"], "e"], [["Vertically opposite angles", "زاويتان متقابلتان بالرأس"], "e"],
            [["Interior angles on the same side", "زاويتان داخلتان في جهة واحدة"], "s"], [["Two adjacent angles on a straight line", "زاويتان متجاورتان على خط مستقيم"], "s"]]
        }] },
        quiz: [
          Q(["Two parallel lines are cut by a transversal. One angle is 120°. What is its corresponding angle?", "مستقيمان متوازيان يقطعهما قاطع، وإحدى الزوايا ١٢٠°. ما قياس الزاوية المناظرة لها؟"], [["120°", "١٢٠°"], ["60°", "٦٠°"], ["240°", "٢٤٠°"], ["90°", "٩٠°"]],
            ["Corresponding angles are equal when the lines are parallel: 120°.", "الزاويتان المتناظرتان متساويتان عند التوازي: ١٢٠°."], ["Slide the top crossing down onto the bottom one: the angles match exactly.", "حرّك التقاطع العلوي إلى السفلي فتنطبق الزوايا تمامًا."]),
          Q(["An interior angle is 75°. What is the interior angle on the same side of the transversal?", "زاوية داخلة قياسها ٧٥°. ما قياس الزاوية الداخلة الأخرى في الجهة نفسها من القاطع؟"], [["105°", "١٠٥°"], ["75°", "٧٥°"], ["15°", "١٥°"], ["285°", "٢٨٥°"]],
            ["Co-interior angles between parallel lines add to 180°: 180° − 75° = 105°.", "الزاويتان الداخلتان في جهة واحدة مجموعهما ١٨٠°: ١٨٠° − ٧٥° = ١٠٥°."], ["They are like the two inside corners of a ladder step.", "مثل الركنين الداخليين لدرجة سلم."]),
          Q(["AB ∥ DC. Co-interior angles measure (3x + 15)° and 75°. What is x?", "AB ∥ DC، والزاويتان الداخلتان في جهة واحدة (3x + 15)° و ٧٥°. ما قيمة x؟"], [["30°", "٣٠°"], ["20°", "٢٠°"], ["35°", "٣٥°"], ["55°", "٥٥°"]],
            ["3x + 15° + 75° = 180°, so 3x = 90° and x = 30°.", "3x + 15° + 75° = 180° إذن 3x = 90° و x = 30°."], ["Check: 3 × 30 + 15 = 105, and 105 + 75 = 180.", "تحقق: ٣ × ٣٠ + ١٥ = ١٠٥، و ١٠٥ + ٧٥ = ١٨٠."]),
          Q(["When a transversal cuts two parallel lines, alternate interior angles are:", "عندما يقطع قاطع مستقيمين متوازيين تكون الزاويتان المتبادلتان داخليًا:"], [["equal", "متساويتين"], ["supplementary", "متكاملتين"], ["complementary", "متتامتين"], ["always right angles", "قائمتين دائمًا"]],
            ["Alternate angles are equal when the lines are parallel.", "الزاويتان المتبادلتان متساويتان عند التوازي."], ["They make a Z shape, and the two corners of a Z are equal.", "تكوّنان شكل حرف Z، وزاويتا الحرف Z متساويتان."]),
          Q(["A transversal makes interior angles of 110° and 70° on the same side. Are the two lines parallel?", "قاطع يصنع زاويتين داخلتين في جهة واحدة قياساهما ١١٠° و٧٠°. هل المستقيمان متوازيان؟"], [["Yes, because 110° + 70° = 180°", "نعم، لأن ١١٠° + ٧٠° = ١٨٠°"], ["No, because 110° ≠ 70°", "لا، لأن ١١٠° ≠ ٧٠°"], ["Yes, because both are acute", "نعم، لأن كلتيهما حادة"], ["We cannot tell", "لا يمكن الحكم"]],
            ["If two co-interior angles are supplementary, the lines are parallel.", "إذا تكاملت زاويتان داخلتان في جهة واحدة كان المستقيمان متوازيين."], ["Co-interior angles do not need to be equal, they need to add to 180°.", "الداخلتان في جهة واحدة لا يُشترط تساويهما، بل أن يكون مجموعهما ١٨٠°."]),
          Q(["Rowing oars make corresponding angles (3x − 29)° and (2x − 6)°. At x = 23°, what are the two angles?", "مجدافان يصنعان زاويتين متناظرتين (3x − 29)° و (2x − 6)°. عند x = 23° ما قياسا الزاويتين؟"], [["40° and 40°, so the oars are parallel", "٤٠° و٤٠°، فالمجدافان متوازيان"], ["40° and 46°, not parallel", "٤٠° و٤٦°، غير متوازيين"], ["69° and 46°, not parallel", "٦٩° و٤٦°، غير متوازيين"], ["98° and 40°", "٩٨° و٤٠°"]],
            ["3 × 23 − 29 = 40° and 2 × 23 − 6 = 40°. Equal corresponding angles mean parallel oars.", "٣ × ٢٣ − ٢٩ = ٤٠° و ٢ × ٢٣ − ٦ = ٤٠°، وتساوي المتناظرتين يعني توازي المجدافين."], ["The Nile rowers keep their oars parallel for the best speed.", "يحافظ مجدفو النيل على توازي مجاديفهم لأفضل سرعة."]),
          Q(["How many angles are formed when a transversal cuts two straight lines?", "كم زاوية تتكون عندما يقطع قاطع مستقيمين؟"], [["8", "٨"], ["4", "٤"], ["6", "٦"], ["2", "٢"]],
            ["4 angles at each intersection point, 2 points: 8 angles (4 interior, 4 exterior).", "٤ زوايا عند كل نقطة تقاطع، ونقطتا تقاطع: ٨ زوايا (٤ داخلة و٤ خارجة)."], ["Two crossroads, four corners each.", "تقاطعان، ولكل منهما أربعة أركان."]),
          Q(["An angle between parallel lines is 65°. What is its co-interior partner?", "زاوية بين مستقيمين متوازيين قياسها ٦٥°. ما قياس الزاوية الداخلة معها في الجهة نفسها؟"], [["115°", "١١٥°"], ["65°", "٦٥°"], ["25°", "٢٥°"], ["295°", "٢٩٥°"]],
            ["Co-interior angles add to 180°: 180° − 65° = 115°.", "الداخلتان في جهة واحدة مجموعهما ١٨٠°: ١٨٠° − ٦٥° = ١١٥°."], ["Omar's car park has only two angle sizes: 65° and 115°.", "موقف عمر فيه قياسان فقط للزوايا: ٦٥° و١١٥°."])
        ]
      },
      {
        id: "mprep1u4l3", icon: "🔺", page: 84,
        title: { en: "Triangle", ar: "المثلث" },
        idea: {
          official: {
            en: ["The sum of the measures of the interior angles of any triangle is 180°. Proof: draw a line through one vertex parallel to the opposite side; the alternate angles complete a straight angle.",
              "Example: " + eq("62° + 49° + x = 180°") + " gives " + eq("x = 69°") + "; " + eq("5a + 3a + a = 180°") + " gives " + eq("a = 20°") + ".",
              "An exterior angle is made by one side and the extension of another. It equals the sum of the two non-adjacent interior angles: " + eq("x = 82° + 22° = 104°") + ".",
              "Triangle inequality: the sum of the lengths of any two sides is greater than the third side. 10, 6, 5: " + eq("6 + 5 = 11 > 10") + " ✓; 8, 4, 4: " + eq("4 + 4 = 8") + " ✗; 12, 3, 6: " + eq("9 < 12") + " ✗.",
              "Any side is greater than the difference of the other two and less than their sum. Sides 5 and 2: " + eq("3 < third side < 7") + ", so the largest integer is 6 cm.",
              "Triangles are acute, right or obtuse by angles; scalene, isosceles or equilateral by sides."],
            ar: ["مجموع قياسات الزوايا الداخلة لأي مثلث ١٨٠°. البرهان: نرسم من أحد الرؤوس مستقيمًا يوازي الضلع المقابل، فتكمل الزوايا المتبادلة زاوية مستقيمة.",
              "مثال: " + eq("62° + 49° + x = 180°") + " يعطي " + eq("x = 69°") + "، و " + eq("5a + 3a + a = 180°") + " يعطي " + eq("a = 20°") + ".",
              "الزاوية الخارجة يكوّنها ضلع وامتداد ضلع آخر، وقياسها يساوي مجموع قياسي الزاويتين الداخلتين غير المجاورتين لها: " + eq("x = 82° + 22° = 104°") + ".",
              "متباينة المثلث: مجموع طولي أي ضلعين أكبر من طول الضلع الثالث. ١٠، ٦، ٥: " + eq("6 + 5 = 11 > 10") + " ✓، و ٨، ٤، ٤: " + eq("4 + 4 = 8") + " ✗، و ١٢، ٣، ٦: " + eq("9 < 12") + " ✗.",
              "طول أي ضلع أكبر من الفرق بين طولي الضلعين الآخرين وأصغر من مجموعهما. ضلعان ٥ و٢: " + eq("3 < third side < 7") + "، فأكبر طول صحيح ٦ سم.",
              "المثلث حاد أو قائم أو منفرج الزاوية حسب زواياه، ومختلف الأضلاع أو متساوي الساقين أو متساوي الأضلاع حسب أضلاعه."]
          },
          story: {
            en: ["Nada wants to build a triangular frame from wooden planks of 30 cm, 20 cm, 15 cm and 5 cm.",
              "She tries 20, 15 and 5: 15 + 5 = 20, so the two short planks lie flat on the long one. No triangle.",
              "She tries 30, 20 and 5: 20 + 5 = 25 < 30. The ends cannot meet.",
              "Then 30, 20 and 15: 20 + 15 = 35 > 30. It closes into a triangle.",
              "She tears off the three corners of a paper triangle and lines them up: they make a straight angle, 180°."],
            ar: ["تريد ندى صنع إطار مثلث من ألواح خشبية أطوالها ٣٠ سم و٢٠ سم و١٥ سم و٥ سم.",
              "تجرب ٢٠ و١٥ و٥: ١٥ + ٥ = ٢٠، فينطبق اللوحان القصيران على الطويل ولا يتكون مثلث.",
              "تجرب ٣٠ و٢٠ و٥: ٢٠ + ٥ = ٢٥ < ٣٠، فلا يلتقي الطرفان.",
              "ثم ٣٠ و٢٠ و١٥: ٢٠ + ١٥ = ٣٥ > ٣٠، فيُغلق المثلث.",
              "تقص الأركان الثلاثة لمثلث ورقي وتضعها متجاورة فتكوّن زاوية مستقيمة: ١٨٠°."]
          }
        },
        words: [
          ["Interior angle", "الزاوية الداخلة", "An angle inside the triangle at one of its vertices.", "زاوية داخل المثلث عند أحد رؤوسه."],
          ["Exterior angle", "الزاوية الخارجة", "The angle between one side and the extension of another side.", "الزاوية بين ضلع وامتداد ضلع آخر."],
          ["Triangle inequality", "متباينة المثلث", "Any two sides together are longer than the third side.", "مجموع طولي أي ضلعين أكبر من طول الضلع الثالث."],
          ["Scalene triangle", "المثلث مختلف الأضلاع", "A triangle with three different side lengths.", "مثلث أطوال أضلاعه الثلاثة مختلفة."],
          ["Isosceles triangle", "المثلث متساوي الساقين", "A triangle with two equal sides.", "مثلث فيه ضلعان متساويان في الطول."],
          ["Equilateral triangle", "المثلث متساوي الأضلاع", "A triangle with three equal sides and three 60° angles.", "مثلث أضلاعه الثلاثة متساوية وزواياه ٦٠° لكل منها."],
          ["Right-angled triangle", "المثلث القائم الزاوية", "A triangle with one right angle.", "مثلث إحدى زواياه قائمة."]
        ],
        lab: { parts: [{ type: "mprep1_tri" }, {
          type: "sort",
          prompt: ["Tap three lengths, then tap: triangle or not?", "اضغط على الأطوال الثلاثة ثم اختر: مثلث أم لا؟"],
          bins: [["y", "🔺", "Makes a triangle", "تكوّن مثلثًا"], ["n", "➖", "No triangle", "لا تكوّن مثلثًا"]],
          items: [[["3, 4, 5", "3, 4, 5"], "y"], [["10, 6, 5", "10, 6, 5"], "y"], [["7, 5, 5", "7, 5, 5"], "y"], [["8, 4, 4", "8, 4, 4"], "n"], [["12, 3, 6", "12, 3, 6"], "n"], [["6, 4, 2", "6, 4, 2"], "n"], [["30, 20, 15", "30, 20, 15"], "y"], [["20, 15, 5", "20, 15, 5"], "n"]]
        }] },
        quiz: [
          Q(["Two angles of a triangle add up to 130°. What is the third angle?", "مجموع قياسي زاويتين في مثلث ١٣٠°. ما قياس الزاوية الثالثة؟"], [["50°", "٥٠°"], ["230°", "٢٣٠°"], ["130°", "١٣٠°"], ["60°", "٦٠°"]],
            ["180° − 130° = 50°.", "١٨٠° − ١٣٠° = ٥٠°."], ["Three torn corners always make a straight line, 180°.", "الأركان الثلاثة المقصوصة تكوّن دائمًا خطًا مستقيمًا: ١٨٠°."]),
          Q(["A triangle's angles are 5a, 3a and a. What is a?", "زوايا مثلث قياساتها 5a و 3a و a. ما قيمة a؟"], [["20°", "٢٠°"], ["36°", "٣٦°"], ["60°", "٦٠°"], ["9°", "٩°"]],
            ["9a = 180°, so a = 20° (angles 100°, 60°, 20°).", "9a = 180° إذن a = 20° (الزوايا ١٠٠° و٦٠° و٢٠°)."], ["Nine equal parts share 180°: 20° each.", "تسعة أجزاء متساوية تتقاسم ١٨٠°: ٢٠° لكل جزء."]),
          Q(["An exterior angle of 125° has non-adjacent interior angles (2x − 2)° and (3x + 7)°. What is x?", "زاوية خارجة قياسها ١٢٥° والزاويتان الداخلتان غير المجاورتين (2x − 2)° و (3x + 7)°. ما قيمة x؟"], [["24°", "٢٤°"], ["11°", "١١°"], ["35°", "٣٥°"], ["25°", "٢٥°"]],
            ["2x − 2° + 3x + 7° = 125°, so 5x + 5° = 125°, 5x = 120° and x = 24°.", "2x − 2° + 3x + 7° = 125° إذن 5x + 5° = 125° و 5x = 120° و x = 24°."], ["The outside corner equals the two far inside corners together.", "الزاوية الخارجة تساوي الزاويتين البعيدتين معًا."]),
          Q(["Which three lengths can form a triangle?", "أي ثلاثة أطوال يمكن أن تكوّن مثلثًا؟"], [["7 cm, 6 cm, 5 cm", "٧ سم، ٦ سم، ٥ سم"], ["8 cm, 4 cm, 4 cm", "٨ سم، ٤ سم، ٤ سم"], ["12 cm, 3 cm, 6 cm", "١٢ سم، ٣ سم، ٦ سم"], ["10 m, 5 m, 2 m", "١٠ م، ٥ م، ٢ م"]],
            ["Check the two shortest: 6 + 5 = 11 > 7 ✓. The others: 4 + 4 = 8 (not greater), 3 + 6 = 9 < 12, 5 + 2 = 7 < 10.", "نختبر أقصر ضلعين: 6 + 5 = 11 > 7 ✓، والباقي: 4 + 4 = 8 (ليس أكبر) و 3 + 6 = 9 < 12 و 5 + 2 = 7 < 10."], ["If the two short sticks together are not longer than the long one, they lie flat.", "إذا لم يكن مجموع العودين القصيرين أطول من الطويل فإنهما ينطبقان عليه."]),
          Q(["Two sides of a triangle are 5 cm and 2 cm. What is the largest integer length of the third side?", "ضلعان في مثلث طولاهما ٥ سم و٢ سم. ما أكبر طول صحيح للضلع الثالث؟"], [["6 cm", "٦ سم"], ["7 cm", "٧ سم"], ["4 cm", "٤ سم"], ["3 cm", "٣ سم"]],
            ["3 < third side < 7, so the integers are 4, 5, 6 and the largest is 6 cm.", "3 < الضلع الثالث < 7، فالأعداد الصحيحة ٤ و٥ و٦، وأكبرها ٦ سم."], ["7 cm would make the two short sides lie flat: it must stay below 7.", "الطول ٧ سم يجعل الضلعين القصيرين ينطبقان، فيجب أن يبقى أقل من ٧."]),
          Q(["In triangle ABC, AB = 5 cm and BC = 7 cm. What is the smallest integer length of AC?", "في المثلث ABC، AB = 5 سم و BC = 7 سم. ما أصغر طول صحيح للضلع AC؟"], [["3 cm", "٣ سم"], ["2 cm", "٢ سم"], ["1 cm", "١ سم"], ["12 cm", "١٢ سم"]],
            ["AC > 7 − 5 = 2, so the smallest integer is 3 cm.", "AC > 7 − 5 = 2، فأصغر عدد صحيح ٣ سم."], ["2 cm would close flat; it must be more than the difference.", "الطول ٢ سم ينطبق، فيجب أن يكون أكبر من الفرق."]),
          Q(["An isosceles triangle has two side lengths 4 cm and 8 cm. What is the third side?", "مثلث متساوي الساقين طولا ضلعين فيه ٤ سم و٨ سم. ما طول الضلع الثالث؟"], [["8 cm", "٨ سم"], ["4 cm", "٤ سم"], ["6 cm", "٦ سم"], ["12 cm", "١٢ سم"]],
            ["4, 4, 8 fails (4 + 4 = 8), but 4, 8, 8 works (4 + 8 > 8). So the third side is 8 cm.", "‏٤، ٤، ٨ لا تصلح (٤ + ٤ = ٨) أما ٤، ٨، ٨ فتصلح (٤ + ٨ > ٨)، إذن الضلع الثالث ٨ سم."], ["Two short legs of 4 cannot reach across 8.", "ساقان قصيرتان طول كل منهما ٤ لا تصلان عبر ٨."]),
          Q(["The interior angles not adjacent to an exterior angle x are 82° and 22°. What is x?", "الزاويتان الداخلتان غير المجاورتين لزاوية خارجة x قياساهما ٨٢° و٢٢°. ما قيمة x؟"], [["104°", "١٠٤°"], ["76°", "٧٦°"], ["60°", "٦٠°"], ["158°", "١٥٨°"]],
            ["Exterior angle = 82° + 22° = 104°.", "الزاوية الخارجة = ٨٢° + ٢٢° = ١٠٤°."], ["76° is the interior angle next to it; the outside one is its supplement.", "‏٧٦° هي الزاوية الداخلة المجاورة، والخارجة تكملها."])
        ]
      },
      {
        id: "mprep1u4l4", icon: "▱", page: 90,
        title: { en: "Quadrilaterals", ar: "الأشكال الرباعية" },
        idea: {
          official: {
            en: ["A diagonal splits any quadrilateral into two triangles, so the sum of its interior angles is " + eq("2 × 180° = 360°") + ".",
              "Example: " + eq("x + (x − 5)° + 115° + 125° = 360°") + ", " + eq("2x = 125°") + ", " + eq("x = 62.5°") + ".",
              "A trapezium has only two parallel sides. A parallelogram has each two opposite sides parallel: opposite sides equal, opposite angles equal, consecutive angles supplementary, and the diagonals bisect each other.",
              "A rectangle is a parallelogram with a right angle: all angles are right and the diagonals are equal.",
              "A rhombus is a parallelogram with two equal adjacent sides: all sides are equal and the diagonals are perpendicular and bisect its angles.",
              "A square is a rectangle and a rhombus at the same time: equal sides, right angles, and equal perpendicular diagonals."],
            ar: ["القطر يقسم أي شكل رباعي إلى مثلثين، لذلك مجموع قياسات زواياه الداخلة " + eq("2 × 180° = 360°") + ".",
              "مثال: " + eq("x + (x − 5)° + 115° + 125° = 360°") + "، " + eq("2x = 125°") + "، " + eq("x = 62.5°") + ".",
              "شبه المنحرف فيه ضلعان فقط متوازيان. ومتوازي الأضلاع فيه كل ضلعين متقابلين متوازيان: كل ضلعين متقابلين متساويان، وكل زاويتين متقابلتين متساويتان، وكل زاويتين متتاليتين متكاملتان، وقطراه ينصف كل منهما الآخر.",
              "المستطيل متوازي أضلاع إحدى زواياه قائمة: زواياه كلها قوائم وقطراه متساويان.",
              "المعين متوازي أضلاع فيه ضلعان متجاوران متساويان: أضلاعه متساوية وقطراه متعامدان وينصفان زواياه.",
              "المربع مستطيل ومعين في الوقت نفسه: أضلاعه متساوية وزواياه قوائم وقطراه متساويان ومتعامدان."]
          },
          story: {
            en: ["Karim visits a building in the New Capital whose front is a parallelogram. One of its angles is 25°.",
              "The opposite angle is also 25°, and each consecutive angle is 180° − 25° = 155°.",
              "He checks: 25 + 155 + 25 + 155 = 360°, the angle sum of any quadrilateral.",
              "On graph paper he pushes one corner of the shape until all angles are right: now it is a rectangle with equal diagonals.",
              "One more push to make the sides equal, and the rectangle becomes a square."],
            ar: ["يزور كريم مبنى في العاصمة الجديدة واجهته على شكل متوازي أضلاع، وإحدى زواياه ٢٥°.",
              "الزاوية المقابلة لها ٢٥° أيضًا، وكل زاوية متتالية معها ١٨٠° − ٢٥° = ١٥٥°.",
              "يتحقق: ٢٥ + ١٥٥ + ٢٥ + ١٥٥ = ٣٦٠°، مجموع زوايا أي شكل رباعي.",
              "على ورقة مربعات يدفع أحد الأركان حتى تصبح كل الزوايا قوائم: أصبح مستطيلًا قطراه متساويان.",
              "ودفعة أخرى لتتساوى الأضلاع فيتحول المستطيل إلى مربع."]
          }
        },
        words: [
          ["Quadrilateral", "الشكل الرباعي", "A closed shape with four sides; its angles add to 360°.", "شكل مغلق له أربعة أضلاع، ومجموع زواياه ٣٦٠°."],
          ["Trapezium", "شبه المنحرف", "A quadrilateral with only two parallel sides.", "شكل رباعي فيه ضلعان فقط متوازيان."],
          ["Parallelogram", "متوازي الأضلاع", "A quadrilateral in which each two opposite sides are parallel.", "شكل رباعي فيه كل ضلعين متقابلين متوازيان."],
          ["Rectangle", "المستطيل", "A parallelogram with one right angle; its diagonals are equal.", "متوازي أضلاع إحدى زواياه قائمة، وقطراه متساويان."],
          ["Rhombus", "المعين", "A parallelogram with two equal adjacent sides; its diagonals are perpendicular.", "متوازي أضلاع فيه ضلعان متجاوران متساويان، وقطراه متعامدان."],
          ["Square", "المربع", "A parallelogram with a right angle and two equal adjacent sides.", "متوازي أضلاع إحدى زواياه قائمة وفيه ضلعان متجاوران متساويان."],
          ["Diagonal", "القطر", "The segment joining two non-consecutive vertices.", "القطعة المستقيمة الواصلة بين رأسين غير متتاليين."]
        ],
        lab: { parts: [{ type: "mprep1_quad" }, {
          type: "sort",
          prompt: ["Tap a clue, then tap the special quadrilateral.", "اضغط على الدليل ثم اختر الشكل الرباعي الخاص."],
          bins: [["r", "▭", "Rectangle", "مستطيل"], ["h", "◇", "Rhombus", "معين"], ["s", "◻️", "Square", "مربع"]],
          items: [[["Diagonals equal but not perpendicular", "قطراه متساويان وغير متعامدين"], "r"], [["All sides equal, no right angle", "أضلاعه متساوية وليس له زاوية قائمة"], "h"], [["Diagonals equal and perpendicular", "قطراه متساويان ومتعامدان"], "s"],
            [["A right angle, adjacent sides not equal", "زاوية قائمة وضلعان متجاوران غير متساويين"], "r"], [["Diagonals perpendicular but not equal", "قطراه متعامدان وغير متساويين"], "h"], [["A right angle and two equal adjacent sides", "زاوية قائمة وضلعان متجاوران متساويان"], "s"]]
        }] },
        quiz: [
          Q(["A quadrilateral has angles 4x, 3x, 5x and 60°. What is x?", "شكل رباعي زواياه 4x و 3x و 5x و ٦٠°. ما قيمة x؟"], [["25°", "٢٥°"], ["30°", "٣٠°"], ["10°", "١٠°"], ["15°", "١٥°"]],
            ["12x + 60° = 360°, so 12x = 300° and x = 25°.", "12x + 60° = 360° إذن 12x = 300° و x = 25°."], ["Take away the known 60°, then share 300° into 12 equal parts.", "احذف الـ ٦٠° المعلومة ثم قسّم ٣٠٠° على ١٢ جزءًا."]),
          Q(["One angle of a parallelogram is 25°. What is the angle next to it?", "إحدى زوايا متوازي أضلاع ٢٥°. ما قياس الزاوية المجاورة لها؟"], [["155°", "١٥٥°"], ["25°", "٢٥°"], ["65°", "٦٥°"], ["335°", "٣٣٥°"]],
            ["Consecutive angles of a parallelogram are supplementary: 180° − 25° = 155°.", "الزاويتان المتتاليتان في متوازي الأضلاع متكاملتان: ١٨٠° − ٢٥° = ١٥٥°."], ["The opposite angle is 25°, the neighbour is 155°.", "الزاوية المقابلة ٢٥° والمجاورة ١٥٥°."]),
          Q(["ABCD is a parallelogram with m(∠B) = (3x + 37)° and m(∠D) = (9x + 1)°. What is m(∠C)?", "ABCD متوازي أضلاع فيه m(∠B) = (3x + 37)° و m(∠D) = (9x + 1)°. ما m(∠C)؟"], [["125°", "١٢٥°"], ["55°", "٥٥°"], ["6°", "٦°"], ["145°", "١٤٥°"]],
            ["Opposite angles are equal: 3x + 37 = 9x + 1, so 6x = 36 and x = 6. ∠B = 55°, and ∠C = 180° − 55° = 125°.", "الزاويتان المتقابلتان متساويتان: 3x + 37 = 9x + 1 إذن 6x = 36 و x = 6، و ∠B = 55° و ∠C = 180° − 55° = 125°."], ["Find x, then use 'neighbours add to 180°'.", "أوجد x ثم استخدم أن الزاويتين المتجاورتين مجموعهما ١٨٠°."]),
          Q(["ABCD is a parallelogram with AC = BD and AC ⊥ BD. What is ABCD?", "ABCD متوازي أضلاع فيه AC = BD و AC ⊥ BD. ما نوعه؟"], [["A square", "مربع"], ["A rhombus", "معين"], ["A rectangle", "مستطيل"], ["A trapezium", "شبه منحرف"]],
            ["Equal diagonals make it a rectangle and perpendicular diagonals make it a rhombus: both together give a square.", "القطران المتساويان يجعلانه مستطيلًا، والمتعامدان يجعلانه معينًا، والاثنان معًا يجعلانه مربعًا."], ["The square is the member of both the rectangle family and the rhombus family.", "المربع عضو في عائلة المستطيل وعائلة المعين معًا."]),
          Q(["Which quadrilaterals always have all their sides equal?", "أي الأشكال الرباعية أضلاعها كلها متساوية دائمًا؟"], [["Square and rhombus", "المربع والمعين"], ["Square and rectangle", "المربع والمستطيل"], ["Trapezium and rhombus", "شبه المنحرف والمعين"], ["Rectangle and rhombus", "المستطيل والمعين"]],
            ["A rhombus has all sides equal, and a square is a special rhombus.", "المعين أضلاعه متساوية، والمربع معين خاص."], ["A rectangle can be long and thin, so its sides are not all equal.", "المستطيل قد يكون طويلًا ورفيعًا، فلا تتساوى كل أضلاعه."]),
          Q(["ABCD is a rectangle whose diagonals meet at M. AM = (4x − 5) cm and MD = 3x cm. What is x?", "ABCD مستطيل قطراه يتقاطعان في M، و AM = (4x − 5) سم و MD = 3x سم. ما قيمة x؟"], [["5", "٥"], ["−5", "−٥"], ["15", "١٥"], ["1", "١"]],
            ["The diagonals of a rectangle are equal and bisect each other, so AM = MD: 4x − 5 = 3x and x = 5.", "قطرا المستطيل متساويان وينصف كل منهما الآخر، إذن AM = MD: 4x − 5 = 3x و x = 5."], ["Four half-diagonals of a rectangle are all the same length.", "أنصاف أقطار المستطيل الأربعة متساوية الطول."]),
          Q(["A quadrilateral has angles x, (x − 5)°, 115° and 125°. What is x?", "شكل رباعي زواياه x و (x − 5)° و ١١٥° و ١٢٥°. ما قيمة x؟"], [["62.5°", "٦٢٫٥°"], ["60°", "٦٠°"], ["65°", "٦٥°"], ["120°", "١٢٠°"]],
            ["2x − 5° + 240° = 360°, so 2x = 125° and x = 62.5°.", "2x − 5° + 240° = 360° إذن 2x = 125° و x = 62.5°."], ["Halves are allowed: angles can be 62.5° and 57.5°.", "الأنصاف مسموحة: الزاويتان ٦٢٫٥° و٥٧٫٥°."]),
          Q(["What do we call a quadrilateral with only two parallel sides?", "ماذا نسمي الشكل الرباعي الذي فيه ضلعان فقط متوازيان؟"], [["Trapezium", "شبه منحرف"], ["Parallelogram", "متوازي أضلاع"], ["Rhombus", "معين"], ["Rectangle", "مستطيل"]],
            ["A trapezium has exactly one pair of parallel sides; a parallelogram has two pairs.", "شبه المنحرف فيه زوج واحد فقط من الأضلاع المتوازية، ومتوازي الأضلاع فيه زوجان."], ["The flowerpot face with a wide top and narrow bottom is a trapezium.", "وجه أصيص الزرع ذو القمة العريضة والقاعدة الضيقة شبه منحرف."])
        ]
      },
      {
        id: "mprep1u4l5", icon: "⬡", page: 98,
        title: { en: "Polygons", ar: "المضلعات" },
        idea: {
          official: {
            en: ["A polygon is a closed plane shape made of three or more line segments (sides) that meet at their endpoints (vertices).",
              "A convex polygon has no reflex interior angle; a concave polygon has at least one. Angles 4x, 5x, 7x, 20x: " + eq("36x = 360°") + ", " + eq("x = 10°") + ", and " + eq("20x = 200°") + " is reflex, so it is concave.",
              "Diagonals from one vertex split an n-sided polygon into " + eq("n − 2") + " triangles, so the angle sum is " + eq("(n − 2) × 180°") + ": pentagon 540°, hexagon 720°, heptagon 900°, decagon 1,440°.",
              "A regular polygon has equal sides and equal angles. Each angle = sum ÷ n: equilateral triangle 60°, square 90°, regular pentagon " + eq("540° ÷ 5 = 108°") + ", regular hexagon 120°.",
              "A regular pentagon and a regular hexagon at a point leave " + eq("360° − (108° + 120°) = 132°") + ".",
              "An axis of symmetry folds a shape onto itself. A regular polygon has as many axes of symmetry as sides."],
            ar: ["المضلع شكل مستوٍ مغلق يتكون من ثلاث قطع مستقيمة أو أكثر (الأضلاع) تتقاطع عند أطرافها (الرؤوس).",
              "المضلع المحدب ليس به زاوية داخلة منعكسة، والمقعر به زاوية منعكسة على الأقل. الزوايا 4x و 5x و 7x و 20x: " + eq("36x = 360°") + "، " + eq("x = 10°") + "، و " + eq("20x = 200°") + " منعكسة، إذن الشكل مقعر.",
              "الأقطار المرسومة من رأس واحد تقسم المضلع ذا n ضلعًا إلى " + eq("n − 2") + " مثلثًا، فمجموع زواياه " + eq("(n − 2) × 180°") + ": الخماسي ٥٤٠° والسداسي ٧٢٠° والسباعي ٩٠٠° والعشاري ١٤٤٠°.",
              "المضلع المنتظم أضلاعه متساوية وزواياه متساوية، وقياس كل زاوية = المجموع ÷ n: المثلث المتساوي الأضلاع ٦٠° والمربع ٩٠° والخماسي المنتظم " + eq("540° ÷ 5 = 108°") + " والسداسي المنتظم ١٢٠°.",
              "خماسي منتظم وسداسي منتظم عند نقطة يتركان زاوية " + eq("360° − (108° + 120°) = 132°") + ".",
              "محور التماثل يقسم الشكل إلى جزأين متطابقين بالطي، وعدد محاور تماثل المضلع المنتظم يساوي عدد أضلاعه."]
          },
          story: {
            en: ["Mariam visits a beekeeper in Fayoum and holds up a honeycomb: it is full of regular hexagons.",
              "From one corner she draws 3 diagonals and gets 4 triangles: 4 × 180° = 720° for all six angles.",
              "Each angle of the regular hexagon is 720° ÷ 6 = 120°.",
              "Three hexagons meet at every point: 3 × 120° = 360°, so they fill space with no gaps. The bees are great geometers.",
              "She folds a paper hexagon and finds 6 axes of symmetry, one for each side."],
            ar: ["تزور مريم نحالًا في الفيوم وترفع قرص شمع مليئًا بالسداسيات المنتظمة.",
              "من أحد الأركان ترسم ٣ أقطار فتحصل على ٤ مثلثات: ٤ × ١٨٠° = ٧٢٠° مجموع الزوايا الست.",
              "قياس كل زاوية في السداسي المنتظم ٧٢٠° ÷ ٦ = ١٢٠°.",
              "تلتقي ثلاثة سداسيات عند كل نقطة: ٣ × ١٢٠° = ٣٦٠°، فتملأ المكان بلا فراغات؛ النحل مهندس بارع.",
              "تطوي سداسيًا ورقيًا فتجد ٦ محاور تماثل، محورًا لكل ضلع."]
          }
        },
        words: [
          ["Polygon", "المضلع", "A closed plane shape made of three or more line segments.", "شكل مستوٍ مغلق يتكون من ثلاث قطع مستقيمة أو أكثر."],
          ["Convex polygon", "المضلع المحدب", "A polygon with no reflex interior angle.", "مضلع ليس به زاوية داخلة منعكسة."],
          ["Concave polygon", "المضلع المقعر", "A polygon with at least one reflex interior angle.", "مضلع به زاوية داخلة منعكسة على الأقل."],
          ["Regular polygon", "المضلع المنتظم", "All its sides are equal and all its angles are equal.", "أضلاعه كلها متساوية وزواياه كلها متساوية."],
          ["Axis of symmetry", "محور التماثل", "A line that divides a shape into two parts that coincide when folded.", "مستقيم يقسم الشكل إلى جزأين ينطبقان بالطي."],
          ["Angle sum", "مجموع قياسات الزوايا", "(n − 2) × 180° for a polygon with n sides.", "‏(n − 2) × 180° للمضلع ذي n ضلعًا."]
        ],
        lab: { parts: [{ type: "mprep1_poly" }, {
          type: "sort",
          prompt: ["Tap a shape or clue, then tap its angle sum.", "اضغط على الشكل أو الدليل ثم اختر مجموع زواياه."],
          bins: [["4", "⬜", "360°", "٣٦٠°"], ["5", "⬠", "540°", "٥٤٠°"], ["6", "⬡", "720°", "٧٢٠°"]],
          items: [[["Quadrilateral", "شكل رباعي"], "4"], [["Rhombus", "معين"], "4"], [["Pentagon", "خماسي"], "5"], [["3 triangles from one vertex", "٣ مثلثات من رأس واحد"], "5"], [["Hexagon", "سداسي"], "6"], [["4 triangles from one vertex", "٤ مثلثات من رأس واحد"], "6"], [["A honeycomb cell", "خلية قرص العسل"], "6"]]
        }] },
        quiz: [
          Q(["What is the sum of the interior angles of a heptagon (7 sides)?", "ما مجموع قياسات الزوايا الداخلة للمضلع السباعي؟"], [["900°", "٩٠٠°"], ["1,260°", "١٢٦٠°"], ["720°", "٧٢٠°"], ["1,080°", "١٠٨٠°"]],
            ["(7 − 2) × 180° = 5 × 180° = 900°.", "(7 − 2) × 180° = 5 × 180° = 900°."], ["Seven sides, five triangles from one corner.", "سبعة أضلاع، وخمسة مثلثات من ركن واحد."]),
          Q(["What is the measure of each interior angle of a regular decagon (10 sides)?", "ما قياس كل زاوية داخلة في المضلع العشاري المنتظم؟"], [["144°", "١٤٤°"], ["108°", "١٠٨°"], ["135°", "١٣٥°"], ["36°", "٣٦°"]],
            ["Sum = 8 × 180° = 1,440°, and 1,440° ÷ 10 = 144°.", "المجموع = ٨ × ١٨٠° = ١٤٤٠°، و ١٤٤٠° ÷ ١٠ = ١٤٤°."], ["More sides make each corner wider, closer to a straight line.", "كلما زادت الأضلاع اتسعت كل زاوية واقتربت من الخط المستقيم."]),
          Q(["How many axes of symmetry does a regular polygon with 9 sides have?", "كم محور تماثل للمضلع المنتظم ذي ٩ أضلاع؟"], [["9", "٩"], ["18", "١٨"], ["7", "٧"], ["3", "٣"]],
            ["A regular polygon has as many axes of symmetry as sides: 9.", "عدد محاور تماثل المضلع المنتظم يساوي عدد أضلاعه: ٩."], ["One fold line for each side.", "خط طي لكل ضلع."]),
          Q(["What is the measure of each interior angle of a regular octagon?", "ما قياس كل زاوية داخلة في المضلع الثماني المنتظم؟"], [["135°", "١٣٥°"], ["120°", "١٢٠°"], ["1,080°", "١٠٨٠°"], ["45°", "٤٥°"]],
            ["Sum = 6 × 180° = 1,080°, and 1,080° ÷ 8 = 135°.", "المجموع = ٦ × ١٨٠° = ١٠٨٠°، و ١٠٨٠° ÷ ٨ = ١٣٥°."], ["A stop sign has eight corners of 135°.", "علامة قف لها ثمانية أركان كل منها ١٣٥°."]),
          Q(["A pentagon has angles (2x − 3)°, (3x − 1)°, (3x − 10)°, (2x + 10)° and (4x − 16)°. What is x?", "مضلع خماسي زواياه (2x − 3)° و (3x − 1)° و (3x − 10)° و (2x + 10)° و (4x − 16)°. ما قيمة x؟"], [["40", "٤٠"], ["20", "٢٠"], ["36", "٣٦"], ["38.6", "٣٨٫٦"]],
            ["The sum is 540°: 14x − 20 = 540, so 14x = 560 and x = 40.", "المجموع ٥٤٠°: 14x − 20 = 540 إذن 14x = 560 و x = 40."], ["Add the x's (14x) and the numbers (−20) separately.", "اجمع الـ x معًا (14x) والأعداد معًا (−٢٠)."]),
          Q(["A regular pentagon and a regular hexagon share a vertex A. What is the remaining angle at A?", "خماسي منتظم وسداسي منتظم يشتركان في الرأس A. ما قياس الزاوية الباقية عند A؟"], [["132°", "١٣٢°"], ["228°", "٢٢٨°"], ["120°", "١٢٠°"], ["108°", "١٠٨°"]],
            ["108° + 120° = 228°, and the angles around a point add to 360°: 360° − 228° = 132°.", "١٠٨° + ١٢٠° = ٢٢٨°، ومجموع الزوايا حول نقطة ٣٦٠°: ٣٦٠° − ٢٢٨° = ١٣٢°."], ["Accumulative angles again: the full turn is 360°.", "الزوايا المتجمعة حول نقطة مرة أخرى: الدورة ٣٦٠°."]),
          Q(["Which angle makes a polygon concave?", "أي زاوية تجعل المضلع مقعرًا؟"], [["A reflex angle", "زاوية منعكسة"], ["A right angle", "زاوية قائمة"], ["An acute angle", "زاوية حادة"], ["A straight angle", "زاوية مستقيمة"]],
            ["A concave polygon contains at least one reflex interior angle (more than 180°).", "المضلع المقعر يحتوي زاوية داخلة منعكسة على الأقل (أكبر من ١٨٠°)."], ["The reflex corner caves in like a dent.", "الركن المنعكس يغوص للداخل مثل الانبعاج."]),
          Q(["A quadrilateral has angles 4x°, 5x°, 7x° and 20x°. What is its largest angle?", "شكل رباعي زواياه 4x° و 5x° و 7x° و 20x°. ما قياس أكبر زواياه؟"], [["200°", "٢٠٠°"], ["20°", "٢٠°"], ["100°", "١٠٠°"], ["360°", "٣٦٠°"]],
            ["36x = 360°, so x = 10° and the largest angle is 20 × 10° = 200°, a reflex angle: the shape is concave.", "36x = 360° إذن x = 10° وأكبر زاوية ٢٠ × ١٠° = ٢٠٠°، وهي منعكسة فالشكل مقعر."], ["x = 10 is only the first step; the question asks for 20x.", "x = 10 خطوة أولى فقط، والسؤال عن 20x."])
        ]
      },
      {
        id: "mprep1u4l6", icon: "📍", page: 104,
        title: { en: "Coordinates", ar: "الإحداثيات" },
        idea: {
          official: {
            en: ["A point is written " + eq("(x, y)") + ": x is read on the x-axis and y on the y-axis. The axes meet at the origin " + eq("O(0, 0)") + ".",
              "The axes split the plane into 4 quadrants: 1st " + eq("(+, +)") + ", 2nd " + eq("(−, +)") + ", 3rd " + eq("(−, −)") + ", 4th " + eq("(+, −)") + ". A point on an axis is in no quadrant: " + eq("(x, 0)") + " is on the x-axis, " + eq("(0, y)") + " on the y-axis.",
              "The projection of " + eq("A(2, 3)") + " on the x-axis is " + eq("(2, 0)") + " and on the y-axis " + eq("(0, 3)") + ".",
              "To project a segment, project its endpoints: " + eq("A(−3, 4), B(2, 2)") + " project on the x-axis to " + eq("A′(−3, 0), B′(2, 0)") + ", length " + eq("|2| + |−3| = 5") + ".",
              "Midpoint: " + eq("M = ((x₁ + x₂)/2, (y₁ + y₂)/2)") + ". For " + eq("A(2, −2), B(−6, 8)") + ": " + eq("M = (−2, 3)") + ".",
              "If " + eq("A(4k + 4, −k + 3)") + " is on the y-axis then " + eq("4k + 4 = 0") + ", " + eq("k = −1") + ", and " + eq("B(−2k, 4k + 1) = (2, −3)") + " is in the 4th quadrant."],
            ar: ["تُكتب النقطة على الصورة " + eq("(x, y)") + ": x على محور السينات و y على محور الصادات، ويتقاطع المحوران في نقطة الأصل " + eq("O(0, 0)") + ".",
              "يقسم المحوران المستوى إلى ٤ أرباع: الأول " + eq("(+, +)") + " والثاني " + eq("(−, +)") + " والثالث " + eq("(−, −)") + " والرابع " + eq("(+, −)") + ". النقطة الواقعة على محور لا تقع في أي ربع: " + eq("(x, 0)") + " على محور السينات و " + eq("(0, y)") + " على محور الصادات.",
              "مسقط النقطة " + eq("A(2, 3)") + " على محور السينات " + eq("(2, 0)") + " وعلى محور الصادات " + eq("(0, 3)") + ".",
              "لإيجاد مسقط قطعة مستقيمة نُسقط طرفيها: " + eq("A(−3, 4), B(2, 2)") + " مسقطاهما على محور السينات " + eq("A′(−3, 0), B′(2, 0)") + " وطول المسقط " + eq("|2| + |−3| = 5") + ".",
              "منتصف القطعة: " + eq("M = ((x₁ + x₂)/2, (y₁ + y₂)/2)") + "، فإذا كانت " + eq("A(2, −2), B(−6, 8)") + " فإن " + eq("M = (−2, 3)") + ".",
              "إذا كانت " + eq("A(4k + 4, −k + 3)") + " على محور الصادات فإن " + eq("4k + 4 = 0") + " و " + eq("k = −1") + "، و " + eq("B(−2k, 4k + 1) = (2, −3)") + " في الربع الرابع."]
          },
          story: {
            en: ["Adham's village is at A(2, −2) on the map grid and his cousin's village is at B(−6, 8). A phone company wants one tower halfway.",
              "He adds the x's and halves: (2 + (−6)) ÷ 2 = −2. He adds the y's and halves: (−2 + 8) ÷ 2 = 3.",
              "The tower goes at M(−2, 3), in the 2nd quadrant, where x is negative and y is positive.",
              "To find how far the villages are from east to west, he drops both points onto the x-axis: from −6 to 2 is 8 units.",
              "Two numbers in brackets can pin any place on a map."],
            ar: ["قرية أدهم عند A(2, −2) على شبكة الخريطة وقرية ابن عمه عند B(−6, 8)، وتريد شركة اتصالات برجًا واحدًا في المنتصف.",
              "يجمع السينات ويقسم على ٢: (٢ + (−٦)) ÷ ٢ = −٢، ويجمع الصادات ويقسم على ٢: (−٢ + ٨) ÷ ٢ = ٣.",
              "يوضع البرج عند M(−2, 3) في الربع الثاني حيث x سالب و y موجب.",
              "ليعرف بُعد القريتين من الشرق إلى الغرب يُسقط النقطتين على محور السينات: من −٦ إلى ٢ تساوي ٨ وحدات.",
              "عددان بين قوسين يحددان أي مكان على الخريطة."]
          }
        },
        words: [
          ["Coordinate plane", "المستوى الإحداثي", "A plane with a horizontal x-axis and a vertical y-axis.", "مستوى فيه محور أفقي للسينات ومحور رأسي للصادات."],
          ["x-axis", "محور السينات", "The horizontal axis; points on it are (x, 0).", "المحور الأفقي، ونقاطه على الصورة (x, 0)."],
          ["y-axis", "محور الصادات", "The vertical axis; points on it are (0, y).", "المحور الرأسي، ونقاطه على الصورة (0, y)."],
          ["Origin", "نقطة الأصل", "The point O(0, 0) where the axes meet.", "النقطة O(0, 0) حيث يتقاطع المحوران."],
          ["Quadrant", "الربع", "One of the four parts of the plane made by the axes.", "أحد الأجزاء الأربعة للمستوى التي يكوّنها المحوران."],
          ["Projection", "المسقط", "The foot of the perpendicular from a point to an axis.", "موقع العمود النازل من النقطة على المحور."],
          ["Midpoint", "منتصف القطعة المستقيمة", "The point on a segment equidistant from both ends.", "النقطة على القطعة المستقيمة التي على البعد نفسه من طرفيها."]
        ],
        lab: { parts: [{ type: "mprep1_coord" }, {
          type: "sort",
          prompt: ["Tap a point, then tap its quadrant.", "اضغط على النقطة ثم اختر الربع الذي تقع فيه."],
          bins: [["1", "1️⃣", "1st quadrant", "الربع الأول"], ["2", "2️⃣", "2nd quadrant", "الربع الثاني"], ["3", "3️⃣", "3rd quadrant", "الربع الثالث"], ["4", "4️⃣", "4th quadrant", "الربع الرابع"]],
          items: [[["(2, 1)", "(2, 1)"], "1"], [["(−2, 2)", "(−2, 2)"], "2"], [["(−1, −3)", "(−1, −3)"], "3"], [["(3, −2)", "(3, −2)"], "4"], [["(5, 7)", "(5, 7)"], "1"], [["(−4, 6)", "(−4, 6)"], "2"], [["(−6, −0.5)", "(−6, −0.5)"], "3"], [["(1, −8)", "(1, −8)"], "4"]]
        }] },
        quiz: [
          Q(["In which quadrant is the point (3, −4)?", "في أي ربع تقع النقطة (3, −4)؟"], [["4th quadrant", "الربع الرابع"], ["1st quadrant", "الربع الأول"], ["2nd quadrant", "الربع الثاني"], ["3rd quadrant", "الربع الثالث"]],
            ["x is positive and y is negative: (+, −) is the 4th quadrant.", "x موجب و y سالب: (+, −) هو الربع الرابع."], ["Walk right 3 and down 4: bottom right.", "امشِ ٣ يمينًا و٤ لأسفل: أسفل اليمين."]),
          Q(["What is the midpoint of A(2, −2) and B(−6, 8)?", "ما منتصف القطعة AB حيث A(2, −2) و B(−6, 8)؟"], [["(−2, 3)", "(−2, 3)"], ["(−4, 6)", "(−4, 6)"], ["(4, −5)", "(4, −5)"], ["(2, 3)", "(2, 3)"]],
            ["M = ((2 + (−6))/2, (−2 + 8)/2) = (−4/2, 6/2) = (−2, 3).", "M = ((2 + (−6))/2, (−2 + 8)/2) = (−4/2, 6/2) = (−2, 3)."], ["(−4, 6) forgot to halve: the midpoint is the average of the ends.", "‏(−4, 6) نسي القسمة على ٢: المنتصف هو متوسط الطرفين."]),
          Q(["What is the projection of (−3, 5) on the x-axis?", "ما مسقط النقطة (−3, 5) على محور السينات؟"], [["(−3, 0)", "(−3, 0)"], ["(0, 5)", "(0, 5)"], ["(3, −5)", "(3, −5)"], ["(−3, 5)", "(−3, 5)"]],
            ["Drop a perpendicular to the x-axis: keep x and make y zero, (−3, 0).", "نُنزل عمودًا على محور السينات: نُبقي x ونجعل y صفرًا، (−3, 0)."], ["It is the point's shadow on the floor when the sun is overhead.", "إنه ظل النقطة على الأرض والشمس فوقها مباشرة."]),
          Q(["The point (3, k − 2) lies on the x-axis. What is k?", "النقطة (3, k − 2) تقع على محور السينات. ما قيمة k؟"], [["2", "٢"], ["−2", "−٢"], ["3", "٣"], ["−3", "−٣"]],
            ["On the x-axis y = 0: k − 2 = 0, so k = 2.", "على محور السينات y = 0: k − 2 = 0 إذن k = 2."], ["Standing on the floor means height zero.", "الوقوف على الأرض يعني أن الارتفاع صفر."]),
          Q(["M(0, −3) is the midpoint of A(x, −10) and B(7, y). What are x and y?", "M(0, −3) منتصف القطعة AB حيث A(x, −10) و B(7, y). ما قيمتا x و y؟"], [["x = −7, y = 4", "x = −7، y = 4"], ["x = 7, y = −4", "x = 7، y = −4"], ["x = −7, y = −16", "x = −7، y = −16"], ["x = 0, y = 7", "x = 0، y = 7"]],
            ["(x + 7)/2 = 0 gives x = −7; (−10 + y)/2 = −3 gives y − 10 = −6 and y = 4.", "(x + 7)/2 = 0 يعطي x = −7، و (−10 + y)/2 = −3 يعطي y − 10 = −6 و y = 4."], ["The midpoint sits exactly between: −7 and 7 balance at 0, −10 and 4 at −3.", "المنتصف في الوسط تمامًا: −٧ و٧ يتوازنان عند ٠، و−١٠ و٤ عند −٣."]),
          Q(["ABCD is a parallelogram with A(−1, 1), B(4, 2) and D(1, 4). What is C?", "ABCD متوازي أضلاع فيه A(−1, 1) و B(4, 2) و D(1, 4). ما إحداثيا C؟"], [["(6, 5)", "(6, 5)"], ["(2.5, 3)", "(2.5, 3)"], ["(4, 7)", "(4, 7)"], ["(5, 6)", "(5, 6)"]],
            ["The diagonals bisect each other: M = midpoint of BD = (2.5, 3). Then C = (2 × 2.5 − (−1), 2 × 3 − 1) = (6, 5).", "القطران ينصف كل منهما الآخر: M منتصف BD = (2.5, 3)، إذن C = (2 × 2.5 − (−1), 2 × 3 − 1) = (6, 5)."], ["(2.5, 3) is the centre, not the vertex: go from A through M the same distance again.", "‏(2.5, 3) هي المركز وليست الرأس: امشِ من A إلى M ثم المسافة نفسها مرة أخرى."]),
          Q(["A(−2, 1) and B(3, 6). What is the length of the projection of AB on the x-axis?", "A(−2, 1) و B(3, 6). ما طول مسقط AB على محور السينات؟"], [["5", "٥"], ["1", "١"], ["7", "٧"], ["10", "١٠"]],
            ["The projection is from (−2, 0) to (3, 0): 3 − (−2) = 5 units.", "المسقط من (−2, 0) إلى (3, 0): ٣ − (−٢) = ٥ وحدات."], ["Only the left-right distance matters for the x-axis shadow.", "لا يهم إلا البعد الأفقي في ظل محور السينات."]),
          Q(["If x < 0 and y > 0, in which quadrant is the point (x, −y)?", "إذا كان x < 0 و y > 0، ففي أي ربع تقع النقطة (x, −y)؟"], [["3rd quadrant", "الربع الثالث"], ["2nd quadrant", "الربع الثاني"], ["1st quadrant", "الربع الأول"], ["4th quadrant", "الربع الرابع"]],
            ["x is negative and −y is negative: (−, −) is the 3rd quadrant.", "x سالب و −y سالب: (−, −) هو الربع الثالث."], ["The minus sign in front of y flips it below the x-axis.", "إشارة السالب أمام y تقلبها إلى أسفل محور السينات."])
        ]
      }
    ]
  });
})();

/* ---------- Prep 1 maths manipulatives (part A): proportion, scale, Venn, integers, rationals, expressions, balance, frequency ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var r = a % b; a = b; b = r; } return a || 1; }
  function btn(cls, label, extra) { return '<button type="button" class="btn sm ' + (extra || "") + " " + cls + '">' + label + "</button>"; }
  function m(s) { return String(s).replace(/-/g, "−"); }
  function mixCol(f) { var a = [248, 250, 252], b = [245, 158, 11]; return "rgb(" + a.map(function (v, i) { return Math.round(v + (b[i] - v) * f); }).join(",") + ")"; }

  /* =========================================================
     mprep1_prop - mango juice mixer with a live ratio graph
     ========================================================= */
  L.mprep1_prop = function (host, cfg, done) {
    host.innerHTML = hint(t("The recipe is 2 cups of mango to 3 cups of milk. Drag the top of each cup, or drag the point on the graph.", "الوصفة كوبان من المانجو لكل ٣ أكواب من اللبن. اسحب أعلى كل كوب، أو اسحب النقطة على الرسم البياني."));
    var S = K.make(host, 0.58, 380), a = 0, b = 0, drag = null, MA = 10, MB = 15;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="meter pr-out"></div>';
    var out = ctl.querySelector(".pr-out");
    var tick = L._goals(host, [t("Use 4 cups of mango and make the mix in proportion with 2 : 3.", "استخدم ٤ أكواب مانجو واجعل الخليط متناسبًا مع ٢ : ٣."),
      t("You have 9 cups of milk: how much mango keeps the proportion?", "معك ٩ أكواب لبن: كم كوب مانجو يحافظ على التناسب؟"),
      t("Make the biggest jug in proportion: 15 cups of milk.", "اصنع أكبر إبريق متناسب: ١٥ كوب لبن."),
      t("Make a 4 : 3 mix and see its point leave the line (not a proportion).", "اصنع خليطًا ٤ : ٣ ولاحظ أن نقطته تخرج عن الخط (ليس تناسبًا).")], done);
    function geo() { var W = S.W, H = S.H, top = H * 0.14, bot = H * 0.86; return { bx: [W * 0.05, W * 0.19], bw: Math.max(30, W * 0.1), top: top, bot: bot, u: (bot - top) / MB, gx: W * 0.52, gy: H * 0.08, gw: W * 0.43, gh: H * 0.76 }; }
    function prop() { return a > 0 && b > 0 && a * 3 === b * 2; }
    function upd() {
      var g = gcd(a, b), sim = (a || b) ? (a / g) + " : " + (b / g) : "0 : 0";
      out.innerHTML = "<span>" + t("Mix ", "الخليط ") + eq(a + " : " + b) + (a && b ? " = " + eq(sim) : "") + "</span>" +
        "<span>" + t("Cross products: ", "حاصلا الضرب التبادلي: ") + eq(a + " × 3 = " + (3 * a)) + " " + t("and", "و") + " " + eq(b + " × 2 = " + (2 * b)) + "</span>" +
        "<span><b>" + (a && b ? (prop() ? "✅ " + t("In proportion with 2 : 3", "متناسب مع ٢ : ٣") : "❌ " + t("Not in proportion with 2 : 3", "غير متناسب مع ٢ : ٣")) : t("Fill both cups", "املأ الكوبين")) + "</b></span>";
      if (a === 4 && b === 6) tick(0);
      if (a === 6 && b === 9) tick(1);
      if (a === 10 && b === 15) tick(2);
      if (a === 4 && b === 3) tick(3);
    }
    function setBar(i, y) { var g = geo(), u = clamp(Math.round((g.bot - y) / g.u), 0, i ? MB : MA); if (i) b = u; else a = u; upd(); }
    function setPt(p) { var g = geo(); a = clamp(Math.round((p.x - g.gx) / g.gw * MA), 0, MA); b = clamp(Math.round((g.gy + g.gh - p.y) / g.gh * MB), 0, MB); upd(); }
    S.drag({
      down: function (p) {
        var g = geo();
        for (var i = 0; i < 2; i++) if (p.x > g.bx[i] - 6 && p.x < g.bx[i] + g.bw + 6 && p.y > g.top - 24 && p.y < g.bot + 10) { drag = { k: "b", i: i }; setBar(i, p.y); return true; }
        if (p.x > g.gx - 12 && p.x < g.gx + g.gw + 12 && p.y > g.gy - 12 && p.y < g.gy + g.gh + 12) { drag = { k: "p" }; setPt(p); return true; }
        return false;
      },
      move: function (p) { if (!drag) return; if (drag.k === "b") setBar(drag.i, p.y); else setPt(p); },
      up: function () { drag = null; },
      hover: function () { return true; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), i;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      [[a, "#f59e0b", t("Mango", "مانجو")], [b, "#e2e8f0", t("Milk", "لبن")]].forEach(function (v, k) {
        var x = g.bx[k];
        K.rr(c, x, g.top, g.bw, g.bot - g.top, 8); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.line; c.lineWidth = 1.5; c.stroke();
        c.fillStyle = v[1]; c.fillRect(x + 3, g.bot - v[0] * g.u, g.bw - 6, v[0] * g.u - 3);
        for (i = 1; i < MB; i++) { c.strokeStyle = "rgba(100,116,139,.25)"; c.beginPath(); c.moveTo(x + 3, g.bot - i * g.u); c.lineTo(x + 10, g.bot - i * g.u); c.stroke(); }
        if (k === 0) { c.fillStyle = "rgba(100,116,139,.18)"; c.fillRect(x + 1, g.top + 1, g.bw - 2, (MB - MA) * g.u); }
        K.txt(c, n(v[0]), x + g.bw / 2, g.bot - v[0] * g.u - 12, { s: 15, c: C.ink });
        K.txt(c, v[2], x + g.bw / 2, g.bot + 14, { s: 12, c: C.muted });
      });
      // the glass of juice
      var gx = W * 0.345, gw = Math.max(26, W * 0.08), tot = a + b;
      c.fillStyle = tot ? mixCol(a / tot) : C.card; c.beginPath(); c.moveTo(gx, H * 0.55); c.lineTo(gx + gw, H * 0.55); c.lineTo(gx + gw * 0.85, H * 0.82); c.lineTo(gx + gw * 0.15, H * 0.82); c.closePath(); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 2; c.stroke();
      K.txt(c, prop() ? "😋" : (tot ? "🤔" : "🥤"), gx + gw / 2, H * 0.47, { s: 22 });
      // graph
      c.strokeStyle = C.line; c.lineWidth = 1;
      for (i = 0; i <= MA; i++) { var X = g.gx + i * g.gw / MA; c.beginPath(); c.moveTo(X, g.gy); c.lineTo(X, g.gy + g.gh); c.stroke(); if (i % 2 === 0) K.txt(c, n(i), X, g.gy + g.gh + 12, { s: 10, c: C.muted }); }
      for (i = 0; i <= MB; i++) { var Y = g.gy + g.gh - i * g.gh / MB; c.beginPath(); c.moveTo(g.gx, Y); c.lineTo(g.gx + g.gw, Y); c.stroke(); if (i % 3 === 0) K.txt(c, n(i), g.gx - 10, Y, { s: 10, c: C.muted }); }
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.gx, g.gy); c.lineTo(g.gx, g.gy + g.gh); c.lineTo(g.gx + g.gw, g.gy + g.gh); c.stroke();
      c.strokeStyle = "#16a34a"; c.lineWidth = 2.5; c.beginPath(); c.moveTo(g.gx, g.gy + g.gh); c.lineTo(g.gx + g.gw, g.gy); c.stroke();
      for (i = 2; i <= MA; i += 2) K.dot(c, g.gx + i * g.gw / MA, g.gy + g.gh - i * 1.5 * g.gh / MB, 4, "rgba(22,163,74,.5)");
      K.txt(c, t("mango →", "مانجو ←"), g.gx + g.gw - 30, g.gy + g.gh - 10, { s: 11, c: C.muted });
      K.txt(c, t("milk ↑", "لبن ↑"), g.gx + 26, g.gy + 8, { s: 11, c: C.muted });
      K.dot(c, g.gx + a * g.gw / MA, g.gy + g.gh - b * g.gh / MB, 8, prop() ? "#16a34a" : "#f97316", C.ink);
      K.txt(c, "(" + n(a) + ", " + n(b) + ")", clamp(g.gx + a * g.gw / MA + 30, g.gx + 30, W - 30), clamp(g.gy + g.gh - b * g.gh / MB - 14, 12, H - 12), { s: 11, c: C.ink });
    });
  };

  /* =========================================================
     mprep1_scale - map scale, proportional division, discount
     ========================================================= */
  L.mprep1_scale = function (host, cfg, done) {
    host.innerHTML = hint(t("Three tools: measure on the map, share money in a ratio, and take a discount off a price.", "ثلاث أدوات: قِس على الخريطة، وقسّم المال بنسبة، واحسب الخصم من الثمن.")) + '<div class="seg sc-mode"></div>';
    var S = K.make(host, 0.55, 360), mode = "map", pin = null, dragPin = false, pa = 1, pb = 1, disc = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row sc-share"><span class="sub">' + t("Ratio", "النسبة") + '</span>' + btn("sa-", "−") + '<b class="sa"></b>' + btn("sa+", "+") + "<b>:</b>" + btn("sb-", "−") + '<b class="sb"></b>' + btn("sb+", "+") + "</div>" +
      '<div class="sc-disc">' + L._slider(t("Discount rate", "نسبة الخصم"), 0, 30, 1, 0, "%") + "</div><div class=\"meter sc-out\"></div>";
    var out = ctl.querySelector(".sc-out"), sh = ctl.querySelector(".sc-share"), dc = ctl.querySelector(".sc-disc"), rng = dc.querySelector("input");
    var tick = L._goals(host, [t("Map 1 : 600,000: put the pin 4.5 cm from Cairo. How far is it really?", "خريطة مقياسها ١ : ٦٠٠٠٠٠: ضع الدبوس على بُعد ٤٫٥ سم من القاهرة. كم المسافة الحقيقية؟"),
      t("Share 3,600 LE between two people in the ratio 3 : 2.", "قسّم ٣٦٠٠ جنيه بين شخصين بنسبة ٣ : ٢."),
      t("A phone costs 12,750 LE. Give an 8% discount and read the new price.", "ثمن هاتف ١٢٧٥٠ جنيهًا. اعطِ خصمًا ٨٪ واقرأ الثمن الجديد.")], done);
    K.seg(host, ".sc-mode", [["map", "🗺️ " + t("Map scale", "مقياس الرسم")], ["share", "🪙 " + t("Share", "التقسيم")], ["disc", "🏷️ " + t("Discount", "الخصم")]], mode, function (v) { mode = v; upd(); });
    function geo() { var W = S.W, H = S.H, x0 = W * 0.05, y0 = H * 0.08, w = W * 0.9, h = H * 0.84; return { x0: x0, y0: y0, w: w, h: h, cx: x0 + w * 0.1, cy: y0 + h * 0.78, pc: w / 11 }; }
    function cm() { var g = geo(); if (!pin) pin = { fx: 0.3, fy: 0.45 }; var px = g.x0 + pin.fx * g.w, py = g.y0 + pin.fy * g.h; return Math.round(dist(px, py, g.cx, g.cy) / g.pc * 2) / 2; }
    function upd() {
      sh.style.display = mode === "share" ? "" : "none"; dc.style.display = mode === "disc" ? "" : "none";
      ctl.querySelector(".sa").textContent = n(pa); ctl.querySelector(".sb").textContent = n(pb); dc.querySelector(".slv").textContent = n(disc) + "%";
      var h = "";
      if (mode === "map") { var d = cm(); h = "<span>" + t("On the map: ", "على الخريطة: ") + eq(d + " cm") + "</span><span>" + eq("real = " + d + " × 600,000 = " + (d * 600000).toLocaleString("en-US") + " cm") + "</span><span><b>" + eq("= " + (d * 6) + " km") + "</b></span>"; if (d === 4.5) tick(0); }
      if (mode === "share") { var pv = 3600 / (pa + pb); h = "<span>" + t("Sum of parts ", "مجموع الأجزاء ") + eq(String(pa + pb)) + "</span><span>" + t("Part value ", "قيمة الجزء ") + eq("3,600 ÷ " + (pa + pb) + " = " + (Math.round(pv * 100) / 100)) + "</span><span>" + eq(pa + " × " + (Math.round(pv * 100) / 100) + " = " + (Math.round(pa * pv * 100) / 100)) + " · " + eq(pb + " × " + (Math.round(pv * 100) / 100) + " = " + (Math.round(pb * pv * 100) / 100)) + "</span>"; if (pa === 3 && pb === 2) tick(1); }
      if (mode === "disc") { var dv = 12750 * disc / 100; h = "<span>" + eq("12,750 × " + disc + "/100 = " + dv.toLocaleString("en-US")) + "</span><span><b>" + t("New price ", "الثمن الجديد ") + eq((12750 - dv).toLocaleString("en-US") + " LE") + "</b></span>"; if (disc === 8) tick(2); }
      out.innerHTML = h;
    }
    [["sa-", -1, 0], ["sa+", 1, 0], ["sb-", -1, 1], ["sb+", 1, 1]].forEach(function (o) { ctl.querySelector("." + o[0].replace("+", "\\+")).onclick = function () { if (o[2]) pb = clamp(pb + o[1], 1, 9); else pa = clamp(pa + o[1], 1, 9); upd(); }; });
    rng.oninput = function () { disc = Number(rng.value); upd(); };
    S.drag({
      down: function (p) { if (mode !== "map") return false; dragPin = true; this.move(p); return true; },
      move: function (p) { if (!dragPin) return; var g = geo(); pin = { fx: clamp((p.x - g.x0) / g.w, 0.02, 0.98), fy: clamp((p.y - g.y0) / g.h, 0.04, 0.96) }; upd(); },
      up: function () { dragPin = false; },
      hover: function () { return mode === "map"; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), i;
      c.clearRect(0, 0, W, H);
      if (mode === "map") {
        K.rr(c, g.x0, g.y0, g.w, g.h, 12); c.fillStyle = "rgba(253,230,138,.35)"; c.fill(); c.strokeStyle = C.line; c.stroke();
        c.strokeStyle = "rgba(59,130,246,.6)"; c.lineWidth = 5; c.beginPath(); c.moveTo(g.x0 + g.w * 0.16, g.y0 + g.h); c.bezierCurveTo(g.x0 + g.w * 0.1, g.y0 + g.h * 0.6, g.x0 + g.w * 0.2, g.y0 + g.h * 0.4, g.x0 + g.w * 0.13, g.y0 + 4); c.stroke();
        var px = g.x0 + pin.fx * g.w, py = g.y0 + pin.fy * g.h, d = dist(px, py, g.cx, g.cy), ux = (px - g.cx) / (d || 1), uy = (py - g.cy) / (d || 1);
        c.strokeStyle = C.ink; c.lineWidth = 2; c.setLineDash([6, 4]); c.beginPath(); c.moveTo(g.cx, g.cy); c.lineTo(px, py); c.stroke(); c.setLineDash([]);
        for (i = 1; i * g.pc <= d; i++) { var tx = g.cx + ux * i * g.pc, ty = g.cy + uy * i * g.pc; c.beginPath(); c.moveTo(tx - uy * 7, ty + ux * 7); c.lineTo(tx + uy * 7, ty - ux * 7); c.stroke(); K.txt(c, n(i), tx - uy * 16, ty + ux * 16, { s: 10, c: C.muted }); }
        K.dot(c, g.cx, g.cy, 7, "#ef4444", C.ink); K.txt(c, t("Cairo", "القاهرة"), g.cx, g.cy + 18, { s: 12, c: C.ink });
        K.txt(c, "📍", px, py - 10, { s: 24 }); K.txt(c, n(cm()) + " " + t("cm", "سم"), px, py - 34, { s: 13, c: C.ink });
        K.rr(c, g.x0 + g.w - 150, g.y0 + 10, 140, 44, 8); c.fillStyle = C.card; c.fill();
        K.txt(c, "1 : 600,000", g.x0 + g.w - 80, g.y0 + 24, { s: 13, c: C.ink }); K.txt(c, t("1 cm = 6 km", "١ سم = ٦ كم"), g.x0 + g.w - 80, g.y0 + 42, { s: 11, c: C.muted });
      } else if (mode === "share") {
        var bx = W * 0.08, bw = W * 0.84, by = H * 0.38, bh = Math.min(70, H * 0.22), tot = pa + pb, pw = bw / tot;
        K.txt(c, t("3,600 LE", "٣٦٠٠ جنيه"), W / 2, by - 30, { s: 18, c: C.ink });
        for (i = 0; i < tot; i++) { K.rr(c, bx + i * pw + 2, by, pw - 4, bh, 8); c.fillStyle = i < pa ? "#3b82f6" : "#f97316"; c.fill(); K.txt(c, n(Math.round(3600 / tot)), bx + i * pw + pw / 2, by + bh / 2, { s: pw > 60 ? 13 : 10, c: "#fff" }); }
        K.txt(c, t("1st: ", "الأول: ") + n(Math.round(pa * 3600 / tot)) + t(" LE", " ج"), bx + pa * pw / 2, by + bh + 24, { s: 14, c: "#3b82f6" });
        K.txt(c, t("2nd: ", "الثاني: ") + n(Math.round(pb * 3600 / tot)) + t(" LE", " ج"), bx + pa * pw + pb * pw / 2, by + bh + 24, { s: 14, c: "#f97316" });
      } else {
        var x1 = W * 0.08, w1 = W * 0.84, y1 = H * 0.3, hh = Math.min(56, H * 0.18), dw = w1 * disc / 100;
        K.txt(c, "📱 " + t("Price 12,750 LE", "الثمن ١٢٧٥٠ جنيهًا"), W / 2, y1 - 26, { s: 16, c: C.ink });
        K.rr(c, x1, y1, w1, hh, 10); c.fillStyle = "#22c55e"; c.fill();
        if (dw > 0) { c.fillStyle = "#ef4444"; c.fillRect(x1 + w1 - dw, y1, dw, hh); K.txt(c, "−" + n(disc) + "%", x1 + w1 - dw / 2, y1 + hh + 18, { s: 13, c: "#ef4444" }); }
        K.txt(c, n(100 - disc) + "%", x1 + (w1 - dw) / 2, y1 + hh / 2, { s: 15, c: "#fff" });
        K.txt(c, t("pay ", "تدفع ") + n(12750 * (100 - disc) / 100) + t(" LE", " جنيهًا"), W / 2, y1 + hh + 52, { s: 18, c: C.ink });
      }
    });
  };

  /* =========================================================
     mprep1_venn - drag numbers into a Venn diagram, union / intersection
     ========================================================= */
  L.mprep1_venn = function (host, cfg, done) {
    host.innerHTML = hint(t("A = numbers divisible by 2, B = numbers divisible by 3. Drag each number to its place, then show the union and the intersection.", "A = الأعداد التي تقبل القسمة على ٢، و B = التي تقبل القسمة على ٣. اسحب كل عدد إلى مكانه، ثم اعرض الاتحاد والتقاطع."));
    var S = K.make(host, 0.62, 400), show = "", drag = null;
    var toks = [4, 6, 8, 9, 12, 5, 7].map(function (v, i) { return { v: v, i: i, reg: null, slot: 0 }; });
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row">' + btn("vu", "A ∪ B") + btn("vi", "A ∩ B") + btn("vd", "A − B") + btn("vr", "↺ " + t("Again", "من جديد"), "ghost") + '</div><div class="meter vn-out"></div>';
    var out = ctl.querySelector(".vn-out");
    var tick = L._goals(host, [t("Put all 7 numbers in the right region.", "ضع الأعداد السبعة في أماكنها الصحيحة."), t("Show " + eq("A ∩ B") + ": the numbers divisible by 2 and by 3.", "اعرض " + eq("A ∩ B") + ": الأعداد التي تقبل القسمة على ٢ وعلى ٣."), t("Show " + eq("A ∪ B") + ": the numbers in A or in B.", "اعرض " + eq("A ∪ B") + ": الأعداد الموجودة في A أو في B.")], done);
    function want(v) { var x = v % 2 === 0, y = v % 3 === 0; return x && y ? "AB" : x ? "A" : y ? "B" : "U"; }
    function geo() { var W = S.W, H = S.H, r = Math.min(W * 0.2, H * 0.32); return { ux: W * 0.04, uy: H * 0.04, uw: W * 0.92, uh: H * 0.74, ax: W * 0.5 - r * 0.62, bx: W * 0.5 + r * 0.62, cy: H * 0.41, r: r, ty: H * 0.89 }; }
    function slotPos(reg, k) {
      var g = geo();
      if (reg === "A") return { x: g.ax - g.r * 0.45, y: g.cy + (k ? 0.32 : -0.32) * g.r };
      if (reg === "B") return { x: g.bx + g.r * 0.45, y: g.cy + k * 0.4 * g.r };
      if (reg === "AB") return { x: (g.ax + g.bx) / 2, y: g.cy + (k ? 0.36 : -0.36) * g.r };
      return { x: k ? g.ux + g.uw - 26 : g.ux + 26, y: g.uy + g.uh - 22 };
    }
    function pos(tk) { if (tk === (drag && drag.tk)) return { x: drag.x, y: drag.y }; if (tk.reg) return slotPos(tk.reg, tk.slot); var W = S.W; return { x: W * 0.14 + tk.i * W * 0.12, y: geo().ty }; }
    function region(x, y) { var g = geo(), a = dist(x, y, g.ax, g.cy) < g.r, b = dist(x, y, g.bx, g.cy) < g.r; if (a && b) return "AB"; if (a) return "A"; if (b) return "B"; return x > g.ux && x < g.ux + g.uw && y > g.uy && y < g.uy + g.uh ? "U" : null; }
    function allIn() { return toks.every(function (k) { return k.reg; }); }
    function list(f) { return "{" + toks.filter(function (k) { return f(want(k.v)); }).map(function (k) { return k.v; }).sort(function (x, y) { return x - y; }).join(", ") + "}"; }
    function upd() {
      var h = "<span>" + eq("A = " + list(function (r) { return r === "A" || r === "AB"; })) + "</span><span>" + eq("B = " + list(function (r) { return r === "B" || r === "AB"; })) + "</span>";
      if (show === "u") h += "<span><b>" + eq("A ∪ B = " + list(function (r) { return r !== "U"; })) + "</b></span>";
      if (show === "i") h += "<span><b>" + eq("A ∩ B = " + list(function (r) { return r === "AB"; })) + "</b></span>";
      if (show === "d") h += "<span><b>" + eq("A − B = " + list(function (r) { return r === "A"; })) + "</b> " + t("(in A but not in B)", "(في A وليست في B)") + "</span>";
      out.innerHTML = allIn() ? h : "<span>" + t("Numbers placed: ", "الأعداد الموضوعة: ") + n(toks.filter(function (k) { return k.reg; }).length) + " / " + n(7) + "</span>";
    }
    function pick(s) { if (!allIn()) { E.toast(t("Place all the numbers first.", "ضع كل الأعداد أولًا.")); return; } show = s; if (s === "i") tick(1); if (s === "u") tick(2); upd(); }
    ctl.querySelector(".vu").onclick = function () { pick("u"); };
    ctl.querySelector(".vi").onclick = function () { pick("i"); };
    ctl.querySelector(".vd").onclick = function () { pick("d"); };
    ctl.querySelector(".vr").onclick = function () { toks.forEach(function (k) { k.reg = null; }); show = ""; upd(); };
    S.drag({
      down: function (p) { for (var i = toks.length - 1; i >= 0; i--) { var q = pos(toks[i]); if (!toks[i].reg && dist(p.x, p.y, q.x, q.y) < 22) { drag = { tk: toks[i], x: p.x, y: p.y }; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var tk = drag.tk, r = region(drag.x, drag.y); drag = null;
        if (!r) return;
        if (r === want(tk.v)) { tk.reg = r; tk.slot = toks.filter(function (k) { return k !== tk && k.reg === r; }).length; E.speak(String(tk.v)); if (allIn()) tick(0); upd(); }
        else { var why = { A: t(" is not divisible by 2", " لا يقبل القسمة على ٢"), B: t(" is not divisible by 3", " لا يقبل القسمة على ٣"), AB: t(" is not divisible by both 2 and 3", " لا يقبل القسمة على ٢ و٣ معًا"), U: t(" belongs to A or B", " ينتمي إلى A أو B") }[r]; E.toast(tk.v + why); }
      },
      hover: function (p) { return toks.some(function (k) { var q = pos(k); return !k.reg && dist(p.x, p.y, q.x, q.y) < 22; }); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo();
      c.clearRect(0, 0, W, H);
      K.rr(c, g.ux, g.uy, g.uw, g.uh, 12); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.line; c.lineWidth = 1.5; c.stroke();
      K.txt(c, "U", g.ux + 14, g.uy + 14, { s: 13, c: C.muted });
      var sh = "rgba(250,204,21,.55)";
      c.save();
      if (show === "u") { c.fillStyle = sh; c.beginPath(); c.arc(g.ax, g.cy, g.r, 0, 7); c.fill(); c.beginPath(); c.arc(g.bx, g.cy, g.r, 0, 7); c.fill(); }
      if (show === "i") { c.beginPath(); c.arc(g.ax, g.cy, g.r, 0, 7); c.clip(); c.fillStyle = sh; c.beginPath(); c.arc(g.bx, g.cy, g.r, 0, 7); c.fill(); }
      if (show === "d") { c.beginPath(); c.arc(g.ax, g.cy, g.r, 0, 7); c.clip(); c.fillStyle = sh; c.beginPath(); c.rect(0, 0, W, H); c.arc(g.bx, g.cy, g.r, 0, 7, true); c.fill("evenodd"); }
      c.restore();
      c.lineWidth = 2.5; c.strokeStyle = "#3b82f6"; c.beginPath(); c.arc(g.ax, g.cy, g.r, 0, 7); c.stroke();
      c.strokeStyle = "#f97316"; c.beginPath(); c.arc(g.bx, g.cy, g.r, 0, 7); c.stroke();
      K.txt(c, "A (÷2)", g.ax - g.r * 0.55, g.cy - g.r - 10, { s: 13, c: "#3b82f6" }); K.txt(c, "B (÷3)", g.bx + g.r * 0.55, g.cy - g.r - 10, { s: 13, c: "#f97316" });
      toks.forEach(function (k) { var q = pos(k); K.dot(c, q.x, q.y, 17, k.reg ? "#22c55e" : "#6366f1", "rgba(0,0,0,.25)"); K.txt(c, n(k.v), q.x, q.y, { s: 14, c: "#fff" }); });
    });
  };

  /* =========================================================
     mprep1_int - counting chips + number line for integer operations
     ========================================================= */
  L.mprep1_int = function (host, cfg, done) {
    host.innerHTML = hint(t("Yellow chips are +1 and red chips are −1. A yellow and a red chip make a zero pair. Choose the operation and move the sliders.", "البطاقة الصفراء +١ والحمراء −١، والصفراء مع الحمراء تكوّنان زوجًا صفريًا. اختر العملية وحرّك المنزلقات.")) + '<div class="seg in-op"></div>';
    var S = K.make(host, 0.6, 380), op = "+", a = 2, b = 3, paired = false, fade = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider("a", -9, 9, 1, a) + L._slider("b", -9, 9, 1, b) + '<div class="btn-row">' + btn("ip", "✨ " + t("Pair up the zero pairs", "كوّن الأزواج الصفرية"), "primary") + '</div><div class="meter in-out"></div>';
    var ins = ctl.querySelectorAll("input"), out = ctl.querySelector(".in-out");
    var tick = L._goals(host, [t("Show " + eq("2 + (−4)") + " and pair up the zero pairs.", "اعرض " + eq("2 + (−4)") + " وكوّن الأزواج الصفرية."), t("Make an additive inverse: " + eq("a + b = 0") + " with " + eq("a ≠ 0") + ".", "كوّن معكوسًا جمعيًا: " + eq("a + b = 0") + " حيث " + eq("a ≠ 0") + "."),
      t("Subtract: show " + eq("3 − 4") + " as " + eq("3 + (−4)") + ".", "اطرح: اعرض " + eq("3 − 4") + " على صورة " + eq("3 + (−4)") + "."), t("Multiply: show " + eq("3 × (−3)") + " as repeated addition.", "اضرب: اعرض " + eq("3 × (−3)") + " جمعًا متكررًا.")], done);
    K.seg(host, ".in-op", [["+", "a + b"], ["−", "a − b"], ["×", "a × b"]], op, function (v) {
      op = v; ins[0].min = op === "×" ? 0 : -9; ins[0].max = op === "×" ? 5 : 9; a = clamp(a, Number(ins[0].min), Number(ins[0].max)); ins[0].value = a; paired = false; upd();
    });
    function bs() { return op === "−" ? -b : b; }
    function res() { return op === "×" ? a * b : a + bs(); }
    function sg(x) { return x < 0 ? "(" + x + ")" : String(x); }
    function upd() {
      var sl = ctl.querySelectorAll(".slv"); sl[0].textContent = n(a); sl[1].textContent = n(b);
      ctl.querySelector(".ip").style.display = op === "×" ? "none" : "";
      var r = res(), h;
      if (op === "+") h = eq(m(a + " + " + sg(b) + " = " + r));
      else if (op === "−") h = eq(m(a + " − " + sg(b) + " = " + a + " + " + sg(-b) + " = " + r));
      else h = eq(m(a + " × " + sg(b) + " = " + (a ? Array(a + 1).join(sg(b) + " + ").slice(0, -3) : "0") + " = " + r));
      out.innerHTML = "<span><b>" + h + "</b></span>" + (op !== "×" && a * bs() < 0 ? "<span>" + t("Zero pairs: ", "الأزواج الصفرية: ") + n(Math.min(Math.abs(a), Math.abs(bs()))) + "</span>" : "");
      if (op === "+" && a === 2 && b === -4 && paired) tick(0);
      if (op === "+" && a !== 0 && a + b === 0) tick(1);
      if (op === "−" && a === 3 && b === 4) tick(2);
      if (op === "×" && a === 3 && b === -3) tick(3);
    }
    ins[0].oninput = function () { a = Number(ins[0].value); paired = false; fade = 0; upd(); };
    ins[1].oninput = function () { b = Number(ins[1].value); paired = false; fade = 0; upd(); };
    ctl.querySelector(".ip").onclick = function () { if (a * bs() >= 0) E.toast(t("Same signs: there are no zero pairs here.", "إشارتان متشابهتان: لا توجد أزواج صفرية هنا.")); paired = true; upd(); };
    upd();
    function chip(c, x, y, pos, alpha) { c.globalAlpha = alpha; K.dot(c, x, y, 11, pos ? "#facc15" : "#ef4444", "rgba(0,0,0,.35)"); K.txt(c, pos ? "+" : "−", x, y + 1, { s: 15, c: pos ? "#713f12" : "#fff" }); c.globalAlpha = 1; }
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, i, j, sp = Math.min(26, (W - 120) / 10), x0 = W * 0.5 - sp * 4.5;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      if (paired) fade = Math.min(1, fade + dt * 1.5);
      if (op !== "×") {
        var B = bs(), pr = a * B < 0 ? Math.min(Math.abs(a), Math.abs(B)) : 0;
        K.txt(c, "a", x0 - 26, H * 0.12, { s: 13, c: C.muted }); K.txt(c, op === "−" ? "−b" : "b", x0 - 26, H * 0.27, { s: 13, c: C.muted });
        for (i = 0; i < Math.abs(a); i++) chip(c, x0 + i * sp, H * 0.12, a > 0, i < pr ? 1 - fade * 0.8 : 1);
        for (i = 0; i < Math.abs(B); i++) chip(c, x0 + i * sp, H * 0.27, B > 0, i < pr ? 1 - fade * 0.8 : 1);
        if (paired && pr) for (i = 0; i < pr; i++) { c.strokeStyle = "rgba(100,116,139," + (0.8 - fade * 0.4) + ")"; c.lineWidth = 2; c.beginPath(); c.moveTo(x0 + i * sp, H * 0.12 + 11); c.lineTo(x0 + i * sp, H * 0.27 - 11); c.stroke(); K.txt(c, "0", x0 + i * sp, H * 0.195, { s: 11, c: C.muted }); }
      } else {
        for (j = 0; j < a; j++) { K.txt(c, t("group ", "مجموعة ") + n(j + 1), x0 - 40, H * 0.06 + j * 24, { s: 10, c: C.muted }); for (i = 0; i < Math.abs(b); i++) chip(c, x0 + i * sp, H * 0.06 + j * 24, b > 0, 1); }
      }
      // number line
      var R = op === "×" ? 25 : 18, ly = H * 0.8, lx = W * 0.05, lw = W * 0.9, u = lw / (2 * R), X = function (v) { return lx + (v + R) * u; };
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(lx, ly); c.lineTo(lx + lw, ly); c.stroke();
      for (i = -R; i <= R; i++) { c.beginPath(); c.moveTo(X(i), ly - (i % 5 ? 4 : 8)); c.lineTo(X(i), ly + (i % 5 ? 4 : 8)); c.stroke(); if (i % 5 === 0) K.txt(c, n(i), X(i), ly + 18, { s: 10, c: C.muted }); }
      function hop(f, to, col, k) {
        var mid = (X(f) + X(to)) / 2, hgt = Math.min(60, Math.abs(X(to) - X(f)) * 0.5 + 10) + k * 4;
        c.strokeStyle = col; c.lineWidth = 2.5; c.beginPath(); c.moveTo(X(f), ly - 4); c.quadraticCurveTo(mid, ly - hgt * 2, X(to), ly - 4); c.stroke();
        var cpx = mid, cpy = ly - hgt * 2, an = Math.atan2(ly - 4 - cpy, X(to) - cpx);
        c.fillStyle = col; c.beginPath(); c.moveTo(X(to), ly - 4); c.lineTo(X(to) - 10 * Math.cos(an - 0.45), ly - 4 - 10 * Math.sin(an - 0.45)); c.lineTo(X(to) - 10 * Math.cos(an + 0.45), ly - 4 - 10 * Math.sin(an + 0.45)); c.closePath(); c.fill();
      }
      if (op === "×") { for (j = 0; j < a; j++) if (b) hop(j * b, (j + 1) * b, j % 2 ? "#f97316" : "#3b82f6", 0); }
      else { if (a) hop(0, a, "#3b82f6", 0); if (bs()) hop(a, a + bs(), "#f97316", 1); }
      K.dot(c, X(res()), ly, 7, "#16a34a", C.ink);
      K.txt(c, "= " + n(res()), X(res()), ly + 34, { s: 15, c: "#16a34a" });
    });
  };

  /* =========================================================
     mprep1_rat - rational numbers on a number line you can zoom
     ========================================================= */
  L.mprep1_rat = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose how many parts each unit is cut into, then drag points A and B. Read each number as a fraction, a decimal and a percentage.", "اختر عدد الأجزاء التي تُقسم إليها كل وحدة، ثم اسحب النقطتين A و B، واقرأ كل عدد كسرًا وعددًا عشريًا ونسبة مئوية."));
    var S = K.make(host, 0.42, 300), den = 4, A = { p: 2, q: 4 }, B = { p: -4, q: 4 }, drag = null, R = 3;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Parts in each unit", "عدد الأجزاء في كل وحدة"), 1, 10, 1, den) + '<div class="meter rt-out"></div>';
    var ins = ctl.querySelector("input"), out = ctl.querySelector(".rt-out");
    var tick = L._goals(host, [t("Place A at " + eq("−3/4") + ".", "ضع A عند " + eq("−3/4") + "."), t("Place A at " + eq("7/4") + " and read its decimal form.", "ضع A عند " + eq("7/4") + " واقرأ صورته العشرية."), t("Place a point at " + eq("2/3") + " and see its recurring decimal.", "ضع نقطة عند " + eq("2/3") + " ولاحظ الكسر العشري الدوري."), t("Make " + eq("A + B = 0") + " with " + eq("A ≠ 0") + " (additive inverses).", "اجعل " + eq("A + B = 0") + " حيث " + eq("A ≠ 0") + " (معكوسان جمعيان).")], done);
    function simp(p, q) { var g = gcd(p, q); return { p: p / g, q: q / g }; }
    function mn(v) { return String(v).replace("-", "−"); }
    function fr(x) { var s = simp(x.p, x.q); if (s.q === 1) return mn(s.p); var f = mn(s.p) + "/" + s.q; if (Math.abs(s.p) < s.q) return f; var w = Math.trunc(s.p / s.q); return f + " = " + mn(w) + " " + (Math.abs(s.p) % s.q) + "/" + s.q; }
    function dec(x) {
      var s = simp(x.p, x.q), neg = s.p < 0, p = Math.abs(s.p), q = s.q, ip = Math.floor(p / q), r = p % q;
      if (!r) return (neg && ip ? "−" : "") + ip;
      var dg = [], seen = {}, rep = -1;
      while (r && dg.length < 14) { if (seen[r] != null) { rep = seen[r]; break; } seen[r] = dg.length; r *= 10; dg.push(Math.floor(r / q)); r %= q; }
      var str = rep < 0 ? dg.join("") : dg.slice(0, rep).join("") + dg.slice(rep).map(function (d) { return d + "̅"; }).join("");
      return (neg ? "−" : "") + ip + "." + str + (rep < 0 ? "" : " …");
    }
    function val(x) { return x.p / x.q; }
    function add(x, y, sgn) { return { p: x.p * y.q + sgn * y.p * x.q, q: x.q * y.q }; }
    function isRec(x) { var q = simp(x.p, x.q).q; while (q % 2 === 0) q /= 2; while (q % 5 === 0) q /= 5; return q !== 1; }
    function line() { var W = S.W, H = S.H; return { x0: W * 0.06, w: W * 0.88, y: H * 0.55 }; }
    function X(v) { var g = line(); return g.x0 + (v + R) / (2 * R) * g.w; }
    function upd() {
      ctl.querySelector(".slv").textContent = n(den);
      var s = add(A, B, 1), d = add(A, B, -1), pc = Math.round(val(A) * 10000) / 100;
      out.innerHTML = "<span><b>A</b> = " + eq(fr(A)) + " = " + eq(dec(A)) + " = " + eq((isRec(A) ? "≈ " : "") + m(pc) + "%") + "</span><span><b>B</b> = " + eq(fr(B)) + " = " + eq(dec(B)) + "</span>" +
        "<span>" + eq("A + B = " + fr(s)) + "</span><span>" + eq("A − B = " + fr(d)) + "</span><span>" + eq("A × B = " + fr({ p: A.p * B.p, q: A.q * B.q })) + "</span>";
      if (A.p * 4 === -3 * A.q) tick(0);
      if (A.p * 4 === 7 * A.q) tick(1);
      if (A.p * 3 === 2 * A.q || B.p * 3 === 2 * B.q) tick(2);
      if (A.p !== 0 && s.p === 0) tick(3);
    }
    ins.oninput = function () { den = Number(ins.value); upd(); };
    function setPt(k, x) { var g = line(), v = (x - g.x0) / g.w * 2 * R - R, p = clamp(Math.round(v * den), -R * den, R * den); var o = { p: p, q: den }; if (k === "A") A = o; else B = o; upd(); }
    S.drag({
      down: function (p) { var g = line(); if (dist(p.x, p.y, X(val(A)), g.y - 26) < 24) drag = "A"; else if (dist(p.x, p.y, X(val(B)), g.y + 26) < 24) drag = "B"; else if (Math.abs(p.y - g.y) < 50) drag = p.y < g.y ? "A" : "B"; else return false; setPt(drag, p.x); return true; },
      move: function (p) { if (drag) setPt(drag, p.x); },
      up: function () { drag = null; },
      hover: function (p) { return Math.abs(p.y - line().y) < 50; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = line(), i;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, g.y); c.lineTo(g.x0 + g.w, g.y); c.stroke();
      for (i = -R * den; i <= R * den; i++) { var whole = i % den === 0, x = X(i / den); c.lineWidth = whole ? 2 : 1; c.beginPath(); c.moveTo(x, g.y - (whole ? 10 : 5)); c.lineTo(x, g.y + (whole ? 10 : 5)); c.stroke(); if (whole) K.txt(c, n(i / den), x, g.y + 40, { s: 13, c: C.ink }); }
      if (den > 1) for (i = 0; i < den; i++) if (i) K.txt(c, i + "/" + den, X(i / den), g.y + 22, { s: 9, c: C.muted });
      [[A, "A", -1, "#3b82f6"], [B, "B", 1, "#f97316"]].forEach(function (o) {
        var x = X(val(o[0])), y = g.y + o[2] * 26;
        c.strokeStyle = o[3]; c.lineWidth = 2; c.beginPath(); c.moveTo(x, g.y); c.lineTo(x, y); c.stroke();
        K.dot(c, x, y, 13, o[3], C.ink); K.txt(c, o[1], x, y, { s: 12, c: "#fff" });
        K.txt(c, fr(o[0]).split(" =")[0], x, y + o[2] * 22, { s: 12, c: o[3] });
      });
      K.dot(c, X(val(A) + val(B)), g.y, 5, "#16a34a");
      K.txt(c, "A + B", X(val(A) + val(B)), g.y - 64, { s: 10, c: "#16a34a" });
    });
  };

  /* =========================================================
     mprep1_expr - thermometer formula + expression machine
     ========================================================= */
  L.mprep1_expr = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the thermometer (or use − / +) to change °F; the formula gives °C. Slide x to evaluate the expressions.", "اسحب الترمومتر (أو استخدم − / +) لتغيير °ف، وتعطيك الصيغة °س. حرّك x لإيجاد القيم العددية للمقادير."));
    var S = K.make(host, 0.55, 360), F = 50, x = 5, drag = false;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><span class="sub">°F</span>' + btn("f-", "−") + btn("f+", "+") + "</div>" + L._slider("x", 0, 30, 1, x) + '<div class="meter ex-out"></div>';
    var ins = ctl.querySelector("input"), out = ctl.querySelector(".ex-out");
    var tick = L._goals(host, [t("Set 95 °F, Salwa's Aswan temperature, and read it in °C.", "اضبط ٩٥ °ف، حرارة أسوان عند سلوى، واقرأها بالسيليزية."), t("Find the boiling point of water (100 °C) in °F.", "أوجد درجة غليان الماء (١٠٠ °س) بالفهرنهايت."),
      t("Set " + eq("x = 1") + ": the triangle's perimeter is " + eq("12x = 12") + ".", "اجعل " + eq("x = 1") + ": محيط المثلث " + eq("12x = 12") + "."), t("Set " + eq("x = 20") + ": the amount " + eq("6x + 7 = 127") + " LE.", "اجعل " + eq("x = 20") + ": المبلغ " + eq("6x + 7 = 127") + " جنيهًا.")], done);
    function Cof(f) { return Math.round((f - 32) * 5 / 9 * 10) / 10; }
    function upd() {
      ctl.querySelector(".slv").textContent = n(x);
      out.innerHTML = "<span>" + eq("C = 5/9 (F − 32) = 5/9 (" + F + " − 32) = " + Cof(F) + " °C") + "</span><span>" + eq("P = 4x + 3x + 5x = 12x = " + 12 * x) + "</span><span>" + eq("6x + 7 = " + (6 * x + 7)) + "</span><span>" + eq("(6x + 7) − (5x − 10) = x + 17 = " + (x + 17)) + "</span>";
      if (F === 95) tick(0); if (F === 212) tick(1); if (x === 1) tick(2); if (x === 20) tick(3);
    }
    ctl.querySelector(".f-").onclick = function () { F = clamp(F - 1, 0, 220); upd(); };
    ctl.querySelector(".f\\+").onclick = function () { F = clamp(F + 1, 0, 220); upd(); };
    ins.oninput = function () { x = Number(ins.value); upd(); };
    function geo() { var W = S.W, H = S.H; return { tx: Math.max(40, W * 0.12), top: H * 0.08, bot: H * 0.8 }; }
    function setF(y) { var g = geo(); F = clamp(Math.round((g.bot - y) / (g.bot - g.top) * 220), 0, 220); upd(); }
    S.drag({ down: function (p) { var g = geo(); if (Math.abs(p.x - g.tx) < 40) { drag = true; setF(p.y); return true; } return false; }, move: function (p) { if (drag) setF(p.y); }, up: function () { drag = false; }, hover: function (p) { return Math.abs(p.x - geo().tx) < 40; } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), i, yF = function (f) { return g.bot - f / 220 * (g.bot - g.top); };
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      K.rr(c, g.tx - 9, g.top - 6, 18, g.bot - g.top + 12, 9); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke();
      c.fillStyle = "#ef4444"; c.fillRect(g.tx - 5, yF(F), 10, g.bot - yF(F) + 6); K.dot(c, g.tx, g.bot + 16, 15, "#ef4444", C.ink);
      for (i = 0; i <= 220; i += 20) { c.strokeStyle = C.muted; c.lineWidth = 1; c.beginPath(); c.moveTo(g.tx - 14, yF(i)); c.lineTo(g.tx - 9, yF(i)); c.stroke(); K.txt(c, n(i), g.tx - 28, yF(i), { s: 10, c: C.muted }); }
      [[32, "0 °C"], [122, "50 °C"], [212, "100 °C"]].forEach(function (m) { c.strokeStyle = "#3b82f6"; c.beginPath(); c.moveTo(g.tx + 9, yF(m[0])); c.lineTo(g.tx + 16, yF(m[0])); c.stroke(); K.txt(c, m[1], g.tx + 20, yF(m[0]), { s: 10, c: "#3b82f6", a: "left" }); });
      K.txt(c, n(F) + " °F", g.tx + 20, yF(F) - 14, { s: 14, c: "#ef4444", a: "left" });
      K.txt(c, "= " + n(Cof(F)) + " °C", g.tx + 20, yF(F) + 4, { s: 13, c: C.ink, a: "left" });
      // triangle 4x, 3x, 5x (a 3-4-5 right triangle)
      var ox = W * 0.42, oy = H * 0.72, s = Math.min(W * 0.11, H * 0.15);
      var P1 = [ox, oy], P2 = [ox + 4 * s, oy], P3 = [ox, oy - 3 * s];
      c.beginPath(); c.moveTo(P1[0], P1[1]); c.lineTo(P2[0], P2[1]); c.lineTo(P3[0], P3[1]); c.closePath(); c.fillStyle = "rgba(34,197,94,.18)"; c.fill(); c.strokeStyle = "#16a34a"; c.lineWidth = 3; c.stroke();
      K.txt(c, "4x = " + n(4 * x), ox + 2 * s, oy + 16, { s: 13, c: C.ink }); K.txt(c, "3x = " + n(3 * x), ox - 8, oy - 1.5 * s, { s: 13, c: C.ink, a: "right" }); K.txt(c, "5x = " + n(5 * x), ox + 2 * s + 30, oy - 1.5 * s - 14, { s: 13, c: C.ink, a: "left" });
      K.rr(c, W * 0.42, H * 0.06, W * 0.54, 54, 10); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.line; c.lineWidth = 1; c.stroke();
      K.txt(c, "x = " + n(x), W * 0.69, H * 0.06 + 17, { s: 15, c: "#7c3aed" });
      K.txt(c, "P = 12x = " + n(12 * x) + "   ·   6x + 7 = " + n(6 * x + 7), W * 0.69, H * 0.06 + 39, { s: 12, c: C.ink });
    });
  };

  /* =========================================================
     mprep1_balance - balance-scale linear equations
     ========================================================= */
  L.mprep1_balance = function (host, cfg, done) {
    host.innerHTML = hint(t("Each blue box is x and each orange block is 1. Tap a block to take it off one pan, or use the buttons to do the same to both sides. Get one x alone and balanced.", "كل صندوق أزرق هو x وكل مكعب برتقالي يساوي ١. اضغط على مكعب لإزالته من كفة واحدة، أو استخدم الأزرار لتفعل الشيء نفسه بالطرفين. اجعل x وحده والميزان متزن."));
    var EQS = [[2, 1, 7, 3], [3, 2, 17, 5], [2, 7, 19, 6]], k = 0, lx, lu, ru, X, ang = 0, items = [], solved = false;
    var S = K.make(host, 0.6, 380);
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row">' + btn("bm", "− 1 " + t("from both sides", "من الطرفين")) + btn("bp", "+ 1 " + t("to both sides", "للطرفين")) + btn("bd", "÷ " + t("both sides", "الطرفين"), "primary") + btn("br", "↺", "ghost") + '</div><div class="meter bl-out"></div>';
    var out = ctl.querySelector(".bl-out");
    var tick = L._goals(host, [t("Take a block off one pan only and watch the scale tip.", "أزل مكعبًا من كفة واحدة فقط ولاحظ ميل الميزان."), t("Solve " + eq("2x + 1 = 7") + ".", "حل " + eq("2x + 1 = 7") + "."), t("Solve " + eq("3x + 2 = 17") + ".", "حل " + eq("3x + 2 = 17") + "."), t("Solve " + eq("2x + 7 = 19") + ".", "حل " + eq("2x + 7 = 19") + ".")], done);
    function load(i) { k = i; lx = EQS[i][0]; lu = EQS[i][1]; ru = EQS[i][2]; X = EQS[i][3]; solved = false; upd(); }
    function bal() { return lx * X + lu === ru; }
    function side() { return (lx === 1 ? "" : lx) + "x" + (lu ? " + " + lu : ""); }
    function upd() {
      out.innerHTML = "<span><b>" + eq(side() + (bal() ? " = " : " ≠ ") + ru) + "</b></span><span>" + (bal() ? "⚖️ " + t("Balanced", "متزن") : "⚠️ " + t("Not balanced: you changed only one side", "غير متزن: غيّرت طرفًا واحدًا فقط")) + "</span>" + (solved ? "<span>✅ " + eq("x = " + X) + "</span>" : "");
      if (!bal()) tick(0);
      if (!solved && lx === 1 && lu === 0 && bal()) { solved = true; tick(k + 1); E.speak(t("x equals " + X, "س تساوي " + X)); upd(); if (k < EQS.length - 1) setTimeout(function () { if (S.cv.isConnected) load(k + 1); }, 1600); }
    }
    ctl.querySelector(".bm").onclick = function () { if (lu > 0 && ru > 0) { lu--; ru--; upd(); } else E.toast(t("One side has no blocks left to remove.", "لم يعد في أحد الطرفين مكعبات لإزالتها.")); };
    ctl.querySelector(".bp").onclick = function () { lu++; ru++; upd(); };
    ctl.querySelector(".bd").onclick = function () {
      if (lx === 1) { E.toast(t("There is only one x already.", "يوجد x واحد بالفعل.")); return; }
      if (lu) { E.toast(t("First remove the blocks next to the x boxes.", "أزل المكعبات المجاورة للصناديق أولًا.")); return; }
      if (!bal()) { E.toast(t("Balance the scale first.", "اجعل الميزان متزنًا أولًا.")); return; }
      ru = ru / lx; lx = 1; upd();
    };
    ctl.querySelector(".br").onclick = function () { load(k); };
    S.drag({
      down: function (p) {
        for (var i = 0; i < items.length; i++) { var it = items[i]; if (p.x > it.x - 2 && p.x < it.x + it.s + 2 && p.y > it.y - 2 && p.y < it.y + it.s + 2) {
          if (it.k === "x") E.toast(t("You cannot take one unknown box off alone. Divide both sides instead.", "لا يمكن إزالة صندوق مجهول وحده، اقسم الطرفين بدلًا من ذلك."));
          else if (it.side === "L") { lu--; upd(); } else { ru--; upd(); }
          return true; } }
        return false;
      },
      hover: function (p) { return items.some(function (it) { return p.x > it.x && p.x < it.x + it.s && p.y > it.y && p.y < it.y + it.s; }); }
    });
    load(0);
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, px = W / 2, py = H * 0.2, bl = Math.min(W * 0.34, 230), hang = H * 0.34, s = Math.min(24, W / 28);
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      var tgt = clamp((lx * X + lu - ru) * -0.035, -0.3, 0.3); ang += (tgt - ang) * Math.min(1, dt * 5);
      c.fillStyle = C.muted; c.beginPath(); c.moveTo(px, py); c.lineTo(px - 26, H * 0.95); c.lineTo(px + 26, H * 0.95); c.closePath(); c.fill();
      var ex = Math.cos(ang) * bl, ey = Math.sin(ang) * bl;
      c.strokeStyle = C.ink; c.lineWidth = 6; c.beginPath(); c.moveTo(px - ex, py - ey); c.lineTo(px + ex, py + ey); c.stroke(); K.dot(c, px, py, 7, C.ink);
      items = [];
      [["L", px - ex, py - ey], ["R", px + ex, py + ey]].forEach(function (sd) {
        var cx = sd[1], cy = sd[2] + hang, pw = bl * 0.8;
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(sd[1], sd[2]); c.lineTo(cx - pw / 2, cy); c.moveTo(sd[1], sd[2]); c.lineTo(cx + pw / 2, cy); c.stroke();
        c.strokeStyle = C.ink; c.lineWidth = 4; c.beginPath(); c.moveTo(cx - pw / 2, cy); c.lineTo(cx + pw / 2, cy); c.stroke();
        var list = [], i; if (sd[0] === "L") { for (i = 0; i < lx; i++) list.push("x"); for (i = 0; i < lu; i++) list.push("u"); } else for (i = 0; i < ru; i++) list.push("u");
        var per = Math.max(1, Math.floor(pw / (s + 4)));
        list.forEach(function (kk, j) {
          var col = j % per, row = Math.floor(j / per), rowN = Math.min(per, list.length - row * per), x0 = cx - rowN * (s + 4) / 2 + col * (s + 4) + 2, y0 = cy - (row + 1) * (s + 4);
          var big = kk === "x" ? s + 2 : s;
          K.rr(c, x0, y0 + (s - big), big - 2, big - 2, 4); c.fillStyle = kk === "x" ? "#3b82f6" : "#f59e0b"; c.fill();
          K.txt(c, kk === "x" ? (solved ? String(X) : "x") : "1", x0 + big / 2 - 1, y0 + s / 2, { s: 12, c: "#fff" });
          items.push({ x: x0, y: y0, s: s, k: kk, side: sd[0] });
        });
      });
    });
  };

  /* =========================================================
     mprep1_freq - tally the 25 quiz marks into a frequency chart
     ========================================================= */
  L.mprep1_freq = function (host, cfg, done) {
    var DATA = [6, 5, 6, 3, 4, 6, 7, 5, 6, 3, 8, 6, 6, 7, 7, 6, 7, 8, 4, 6, 8, 7, 5, 6, 5];
    host.innerHTML = hint(t("Tap the column for each mark shown at the top. When all 25 are in, tap columns to select them.", "اضغط على عمود الدرجة الظاهرة في الأعلى. بعد إدخال الدرجات الـ ٢٥ اضغط على الأعمدة لتحديدها.")) + '<div class="seg fq-view"></div>';
    var S = K.make(host, 0.58, 380), idx = 0, cnt = [0, 0, 0, 0, 0, 0], sel = {}, view = "bar", flash = 0;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="meter fq-out"></div>';
    var out = ctl.querySelector(".fq-out");
    var tick = L._goals(host, [t("Organize all 25 marks in the frequency table.", "نظّم الدرجات الـ ٢٥ في الجدول التكراري."), t("Select only the bar of the mode.", "حدد عمود المنوال فقط."), t("Select the bars that show 'at least 7 marks'.", "حدد الأعمدة التي تمثل '٧ درجات على الأقل'."), t("Switch to the dot plot view.", "انتقل إلى التمثيل بالنقاط.")], done);
    K.seg(host, ".fq-view", [["bar", "📊 " + t("Bar graph", "أعمدة بيانية")], ["dot", "⚫ " + t("Dot plot", "تمثيل بالنقاط")]], view, function (v) { view = v; if (v === "dot") tick(3); });
    function geo() { var W = S.W, H = S.H; return { x0: W * 0.1, w: W * 0.86, base: H * 0.74, top: H * 0.2 }; }
    function upd() {
      var keys = Object.keys(sel).filter(function (k) { return sel[k]; }).map(Number).sort(), tot = keys.reduce(function (s, k) { return s + cnt[k - 3]; }, 0);
      out.innerHTML = "<span>" + t("Frequencies: ", "التكرارات: ") + cnt.map(function (v, i) { return eq((i + 3) + " → " + v); }).join(" ") + "</span>" +
        (idx >= 25 ? "<span>" + t("Selected marks: ", "الدرجات المحددة: ") + (keys.length ? eq(keys.join(", ")) + " · <b>" + n(tot) + t(" students", " طالبًا") + "</b>" : "—") + "</span>" : "<span>" + n(idx) + " / " + n(25) + "</span>");
      if (idx >= 25) { tick(0); if (keys.length === 1 && keys[0] === 6) tick(1); if (keys.length === 2 && keys[0] === 7 && keys[1] === 8) tick(2); }
    }
    S.drag({
      down: function (p) {
        var g = geo(), cw = g.w / 6, i = Math.floor((p.x - g.x0) / cw);
        if (i < 0 || i > 5 || p.y < g.top - 40 || p.y > g.base + 50) return false;
        if (idx < 25) { if (DATA[idx] === i + 3) { cnt[i]++; idx++; E.speak(String(i + 3)); } else { flash = 0.6; E.toast(t("That mark is ", "هذه الدرجة ") + DATA[idx] + "."); } }
        else sel[i + 3] = !sel[i + 3];
        upd(); return true;
      },
      hover: function () { return true; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), cw = g.w / 6, u = (g.base - g.top) / 10, i, j;
      c.clearRect(0, 0, W, H); flash = Math.max(0, flash - dt);
      if (idx < 25) { K.txt(c, t("Next mark: ", "الدرجة التالية: "), W * 0.4, H * 0.08, { s: 14, c: C.muted, a: "right" }); K.txt(c, n(DATA[idx]), W * 0.4 + 24, H * 0.08, { s: 26, c: flash ? "#ef4444" : "#7c3aed" }); }
      else K.txt(c, "✅ " + t("All 25 marks organized", "تم تنظيم الدرجات الـ ٢٥"), W / 2, H * 0.08, { s: 14, c: "#16a34a" });
      c.strokeStyle = C.line; c.lineWidth = 1;
      for (j = 0; j <= 9; j += 3) { c.beginPath(); c.moveTo(g.x0, g.base - j * u); c.lineTo(g.x0 + g.w, g.base - j * u); c.stroke(); K.txt(c, n(j), g.x0 - 12, g.base - j * u, { s: 10, c: C.muted }); }
      for (i = 0; i < 6; i++) {
        var cx = g.x0 + i * cw + cw / 2, on = sel[i + 3];
        if (view === "bar") { K.rr(c, cx - cw * 0.3, g.base - cnt[i] * u, cw * 0.6, cnt[i] * u, 4); c.fillStyle = on ? "#facc15" : "#3b82f6"; if (cnt[i]) c.fill(); }
        else for (j = 0; j < cnt[i]; j++) K.dot(c, cx, g.base - (j + 0.5) * u, Math.min(u * 0.42, 11), on ? "#facc15" : "#3b82f6");
        if (cnt[i]) K.txt(c, n(cnt[i]), cx, g.base - cnt[i] * u - 10, { s: 12, c: C.ink });
        K.txt(c, n(i + 3), cx, g.base + 14, { s: 14, c: C.ink });
        c.strokeStyle = C.ink; c.lineWidth = 1.5;
        for (j = 0; j < cnt[i]; j++) { var grp = Math.floor(j / 5), m = j % 5, tx = cx - 20 + grp * 22 + m * 4, ty = g.base + 30; if (m === 4) { c.beginPath(); c.moveTo(tx - 18, ty + 7); c.lineTo(tx + 2, ty - 7); c.stroke(); } else { c.beginPath(); c.moveTo(tx, ty - 7); c.lineTo(tx, ty + 7); c.stroke(); } }
      }
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.x0, g.base); c.lineTo(g.x0 + g.w, g.base); c.stroke();
    });
  };
})();

/* ---------- Prep 1 maths manipulatives (part B): mean, pie chart, angles, parallel lines, triangle, quadrilaterals, polygons, coordinates ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function btn(cls, label, extra) { return '<button type="button" class="btn sm ' + (extra || "") + " " + cls + '">' + label + "</button>"; }
  var RAD = Math.PI / 180;
  function m(s) { return String(s).replace(/-/g, "−"); }
  function sgp(v) { return v < 0 ? "(" + m(v) + ")" : String(v); }
  function arcFill(c, x, y, r, a1, a2, col) { c.beginPath(); c.moveTo(x, y); c.arc(x, y, r, a1, a2, a2 < a1); c.closePath(); c.fillStyle = col; c.fill(); }

  /* =========================================================
     mprep1_mean - level the bars to see the arithmetic mean
     ========================================================= */
  L.mprep1_mean = function (host, cfg, done) {
    host.innerHTML = hint(t("Sarah's first three test marks are locked (94, 88, 81). Drag tests 4 and 5 (or use − / +). Press 'Level the bars' to see the mean as one fair height.", "درجات سارة في أول ثلاثة اختبارات مثبتة (٩٤، ٨٨، ٨١). اسحب الاختبارين ٤ و٥ (أو استخدم − / +)، واضغط 'سوِّ الأعمدة' لترى الوسط ارتفاعًا واحدًا عادلًا."));
    var S = K.make(host, 0.55, 360), V = [94, 88, 81, 60, 60], lv = 0, level = false, drag = -1;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row"><span class="sub">' + t("Test 4", "الاختبار ٤") + "</span>" + btn("m3-", "−") + btn("m3p", "+") + '<span class="sub">' + t("Test 5", "الاختبار ٥") + "</span>" + btn("m4-", "−") + btn("m4p", "+") + btn("mlv", "⚖️ " + t("Level the bars", "سوِّ الأعمدة"), "primary") + '</div><div class="meter mn-out"></div>';
    var out = ctl.querySelector(".mn-out");
    var tick = L._goals(host, [t("Make the mean of the five tests exactly 83.", "اجعل الوسط الحسابي للاختبارات الخمسة ٨٣ بالضبط."), t("Mean 83 with 100 in one test: what is the least mark in the other?", "الوسط ٨٣ مع ١٠٠ في أحد الاختبارين: ما أقل درجة في الآخر؟"),
      t("Level the bars to see the mean.", "سوِّ الأعمدة لترى الوسط."), t("Make the median equal to the mean.", "اجعل الوسيط يساوي الوسط الحسابي.")], done);
    function sum() { return V.reduce(function (s, v) { return s + v; }, 0); }
    function med() { return V.slice().sort(function (a, b) { return a - b; })[2]; }
    function upd() {
      var s = sum(), m = s / 5;
      out.innerHTML = "<span>" + eq("sum = " + V.join(" + ") + " = " + s) + "</span><span><b>" + eq("mean = " + s + " ÷ 5 = " + (Math.round(m * 100) / 100)) + "</b></span><span>" + t("Median (middle after arranging): ", "الوسيط (الأوسط بعد الترتيب): ") + eq(String(med())) + "</span>";
      if (s === 415) tick(0);
      if (s === 415 && Math.max(V[3], V[4]) === 100) tick(1);
      if (med() * 5 === s) tick(3);
    }
    [["m3-", 3, -1], ["m3p", 3, 1], ["m4-", 4, -1], ["m4p", 4, 1]].forEach(function (o) { ctl.querySelector("." + o[0]).onclick = function () { V[o[1]] = clamp(V[o[1]] + o[2], 0, 100); upd(); }; });
    ctl.querySelector(".mlv").onclick = function () { level = !level; this.classList.toggle("on", level); if (level) tick(2); };
    function geo() { var W = S.W, H = S.H; return { x0: W * 0.08, w: W * 0.86, base: H * 0.86, top: H * 0.1 }; }
    function setV(i, y) { var g = geo(); V[i] = clamp(Math.round((g.base - y) / (g.base - g.top) * 100), 0, 100); upd(); }
    S.drag({
      down: function (p) { var g = geo(), cw = g.w / 5, i = Math.floor((p.x - g.x0) / cw); if (i === 3 || i === 4) { drag = i; level = false; ctl.querySelector(".mlv").classList.remove("on"); setV(i, p.y); return true; } if (i >= 0 && i < 3) E.toast(t("Tests 1 to 3 are already marked.", "الاختبارات من ١ إلى ٣ مصححة بالفعل.")); return false; },
      move: function (p) { if (drag >= 0) setV(drag, p.y); },
      up: function () { drag = -1; },
      hover: function (p) { var g = geo(), i = Math.floor((p.x - g.x0) / (g.w / 5)); return i === 3 || i === 4; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), cw = g.w / 5, u = (g.base - g.top) / 100, m = sum() / 5, i;
      c.clearRect(0, 0, W, H); lv += ((level ? 1 : 0) - lv) * Math.min(1, dt * 4);
      for (i = 0; i <= 100; i += 20) { c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.moveTo(g.x0, g.base - i * u); c.lineTo(g.x0 + g.w, g.base - i * u); c.stroke(); K.txt(c, n(i), g.x0 - 14, g.base - i * u, { s: 10, c: C.muted }); }
      for (i = 0; i < 5; i++) {
        var h = V[i] + (m - V[i]) * lv, x = g.x0 + i * cw + cw * 0.18, bw = cw * 0.64;
        K.rr(c, x, g.base - h * u, bw, h * u, 6); c.fillStyle = i < 3 ? "#94a3b8" : "#3b82f6"; c.fill();
        if (lv < 0.5) { K.txt(c, n(V[i]), x + bw / 2, g.base - h * u - 12, { s: 13, c: C.ink }); }
        K.txt(c, (i < 3 ? "🔒 " : "↕ ") + t("Test ", "اختبار ") + n(i + 1), x + bw / 2, g.base + 14, { s: 11, c: C.muted });
      }
      c.strokeStyle = "#16a34a"; c.lineWidth = 2.5; c.setLineDash([8, 5]); c.beginPath(); c.moveTo(g.x0, g.base - m * u); c.lineTo(g.x0 + g.w, g.base - m * u); c.stroke(); c.setLineDash([]);
      K.txt(c, t("mean ", "الوسط ") + n(Math.round(m * 100) / 100), g.x0 + g.w - 4, g.base - m * u - 12, { s: 12, c: "#16a34a", a: "right" });
    });
  };

  /* =========================================================
     mprep1_pie - drag the sector edges to build a pie chart
     ========================================================= */
  L.mprep1_pie = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the white handles on the circle to resize the sectors. The table shows each central angle and what it stands for.", "اسحب المقابض البيضاء على الدائرة لتغيير القطاعات، ويبين الجدول كل زاوية مركزية وما تمثله.")) + '<div class="seg pi-set"></div>';
    var SETS = {
      votes: { names: [["Khaled", "خالد"], ["Anas", "أنس"], ["Hamza", "حمزة"]], vals: [8, 12, 10], step: 12, b: [120, 240], lab: function (a) { return n(a / 12) + t(" votes", " صوت"); } },
      sports: { names: [["Handball", "كرة اليد"], ["Basketball", "السلة"], ["Football", "القدم"], ["Volleyball", "الطائرة"]], vals: [15, 25, 45, 15], step: 18, b: [90, 180, 270], lab: function (a) { return n(a / 3.6) + "%"; } }
    };
    var COL = ["#3b82f6", "#f97316", "#22c55e", "#a855f7"], set = "votes", drag = -1;
    var S = K.make(host, 0.58, 380);
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="meter pi-out"></div>';
    var out = ctl.querySelector(".pi-out");
    var tick = L._goals(host, [t("Votes (total 30): Khaled 8, Anas 12, Hamza 10. Make the pie match.", "الأصوات (المجموع ٣٠): خالد ٨ وأنس ١٢ وحمزة ١٠. اجعل الدائرة مطابقة."), t("Sports: handball 15%, basketball 25%, football 45%, volleyball 15%. Make the pie match.", "الرياضات: اليد ١٥٪ والسلة ٢٥٪ والقدم ٤٥٪ والطائرة ١٥٪. اجعل الدائرة مطابقة."), t("Make one sector exactly half of the circle (180°).", "اجعل أحد القطاعات نصف الدائرة بالضبط (١٨٠°).")], done);
    K.seg(host, ".pi-set", [["votes", "🗳️ " + t("Class election", "انتخابات الفصل")], ["sports", "⚽ " + t("Favourite sport", "الرياضة المفضلة")]], set, function (v) { set = v; upd(); });
    function angs() { var d = SETS[set], e = [0].concat(d.b, [360]), r = []; for (var i = 0; i < d.vals.length; i++) r.push(e[i + 1] - e[i]); return r; }
    function target(d) { var tot = d.vals.reduce(function (s, v) { return s + v; }, 0); return d.vals.map(function (v) { return v / tot * 360; }); }
    function upd() {
      var d = SETS[set], a = angs(), tg = target(d), ok = a.every(function (v, i) { return Math.abs(v - tg[i]) < 1e-9; });
      out.innerHTML = a.map(function (v, i) { return '<span style="color:' + COL[i] + '"><b>' + t(d.names[i][0], d.names[i][1]) + "</b> " + eq(v + "°") + " = " + d.lab(v) + (Math.abs(v - tg[i]) < 1e-9 ? " ✅" : "") + "</span>"; }).join("") +
        "<span>" + eq(a.join("° + ") + "° = 360°") + "</span>";
      if (ok && set === "votes") tick(0);
      if (ok && set === "sports") tick(1);
      if (a.some(function (v) { return v === 180; })) tick(2);
    }
    function geo() { var W = S.W, H = S.H, R = Math.min(W * 0.27, H * 0.42); return { cx: W * 0.3, cy: H * 0.5, R: R }; }
    function pt(g, a, r) { return { x: g.cx + r * Math.sin(a * RAD), y: g.cy - r * Math.cos(a * RAD) }; }
    S.drag({
      down: function (p) { var g = geo(), d = SETS[set]; for (var i = 0; i < d.b.length; i++) { var q = pt(g, d.b[i], g.R); if (dist(p.x, p.y, q.x, q.y) < 24) { drag = i; return true; } } return false; },
      move: function (p) {
        if (drag < 0) return; var g = geo(), d = SETS[set], a = Math.atan2(p.x - g.cx, -(p.y - g.cy)) / RAD; if (a < 0) a += 360;
        a = Math.round(a / d.step) * d.step; var lo = (drag ? d.b[drag - 1] : 0) + d.step, hi = (drag < d.b.length - 1 ? d.b[drag + 1] : 360) - d.step;
        d.b[drag] = clamp(a, lo, hi); upd();
      },
      up: function () { drag = -1; },
      hover: function (p) { var g = geo(); return SETS[set].b.some(function (b) { var q = pt(g, b, g.R); return dist(p.x, p.y, q.x, q.y) < 24; }); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), d = SETS[set], e = [0].concat(d.b, [360]), i;
      c.clearRect(0, 0, W, H);
      for (i = 0; i < d.vals.length; i++) {
        arcFill(c, g.cx, g.cy, g.R, (e[i] - 90) * RAD, (e[i + 1] - 90) * RAD, COL[i]);
        var mid = (e[i] + e[i + 1]) / 2, q = pt(g, mid, g.R * 0.62);
        K.txt(c, n(e[i + 1] - e[i]) + "°", q.x, q.y, { s: 13, c: "#fff" });
      }
      c.strokeStyle = C.card; c.lineWidth = 2; for (i = 0; i < e.length - 1; i++) { var r0 = pt(g, e[i], g.R); c.beginPath(); c.moveTo(g.cx, g.cy); c.lineTo(r0.x, r0.y); c.stroke(); }
      d.b.forEach(function (b) { var q = pt(g, b, g.R); K.dot(c, q.x, q.y, 10, "#fff", C.ink); });
      var tx = W * 0.62, ty = H * 0.14, tg = target(d);
      K.txt(c, t("Table", "الجدول"), tx, ty, { s: 13, c: C.muted, a: "left" });
      for (i = 0; i < d.vals.length; i++) {
        var y = ty + 30 + i * 30; K.dot(c, tx + 6, y, 6, COL[i]);
        K.txt(c, t(d.names[i][0], d.names[i][1]) + ": " + (set === "votes" ? n(d.vals[i]) : n(d.vals[i]) + "%") + "  →  " + n(tg[i]) + "°", tx + 18, y, { s: 12, c: C.ink, a: "left" });
      }
      K.txt(c, set === "votes" ? t("1 vote = 360° ÷ 30 = 12°", "صوت واحد = ٣٦٠° ÷ ٣٠ = ١٢°") : t("1% = 3.6°", "١٪ = ٣٫٦°"), tx, ty + 40 + d.vals.length * 30, { s: 12, c: C.muted, a: "left" });
    });
  };

  /* =========================================================
     mprep1_angle - angle maker: types, supplementary pairs, vertical angles
     ========================================================= */
  L.mprep1_angle = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag anywhere to turn the orange ray (or use − / +). Switch between the three modes.", "اسحب في أي مكان لتدوير الشعاع البرتقالي (أو استخدم − / +)، وتنقل بين الأوضاع الثلاثة.")) + '<div class="seg an-mode"></div>';
    var S = K.make(host, 0.55, 360), mode = "type", th = { type: 45, pair: 50, vert: 40 }, drag = false;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row">' + btn("a-", "− 1°") + btn("ap", "+ 1°") + '</div><div class="meter an-out"></div>';
    var out = ctl.querySelector(".an-out");
    var tick = L._goals(host, [t("Single angle: make a reflex angle.", "زاوية واحدة: كوّن زاوية منعكسة."), t("Single angle: make a right angle (90°).", "زاوية واحدة: كوّن زاوية قائمة (٩٠°)."), t("Straight line: make the adjacent angles 70° and 110°.", "خط مستقيم: اجعل الزاويتين المتجاورتين ٧٠° و١١٠°."), t("Crossing lines: make " + eq("∠CMD = 70°") + " and read the other three.", "مستقيمان متقاطعان: اجعل " + eq("∠CMD = 70°") + " واقرأ الثلاث الأخرى.")], done);
    K.seg(host, ".an-mode", [["type", "📐 " + t("Single angle", "زاوية واحدة")], ["pair", "➖ " + t("Straight line", "خط مستقيم")], ["vert", "✖️ " + t("Crossing lines", "مستقيمان متقاطعان")]], mode, function (v) { mode = v; upd(); });
    function kind(a) { return a === 0 ? t("zero angle", "زاوية صفرية") : a < 90 ? t("acute", "حادة") : a === 90 ? t("right", "قائمة") : a < 180 ? t("obtuse", "منفرجة") : a === 180 ? t("straight", "مستقيمة") : t("reflex", "منعكسة"); }
    function upd() {
      var a = th[mode], h;
      if (mode === "type") h = "<span><b>" + eq("m(∠AOB) = " + a + "°") + "</b> · " + kind(a) + "</span><span>" + t("Its reflex/other side: ", "الجزء الآخر من الدورة: ") + eq((360 - a) + "°") + "</span>";
      else if (mode === "pair") h = "<span><b>" + eq(a + "° + " + (180 - a) + "° = 180°") + "</b> " + t("(supplementary, adjacent)", "(متكاملتان ومتجاورتان)") + "</span>" + (a < 90 ? "<span>" + t("Complement of ", "متممة ") + eq(a + "°") + t(" is ", " هي ") + eq((90 - a) + "°") + "</span>" : "");
      else h = "<span>" + eq("∠CMD = ∠AMB = " + a + "°") + "</span><span>" + eq("∠AMD = ∠CMB = " + (180 - a) + "°") + "</span><span>" + eq(a + " + " + (180 - a) + " + " + a + " + " + (180 - a) + " = 360°") + "</span>";
      out.innerHTML = h;
      if (mode === "type" && a > 180 && a < 360) tick(0);
      if (mode === "type" && a === 90) tick(1);
      if (mode === "pair" && (a === 70 || a === 110)) tick(2);
      if (mode === "vert" && a === 70) tick(3);
    }
    function lim(v) { return mode === "type" ? ((v % 360) + 360) % 360 : clamp(v, 1, 179); }
    ctl.querySelector(".a-").onclick = function () { th[mode] = lim(th[mode] - 1); upd(); };
    ctl.querySelector(".ap").onclick = function () { th[mode] = lim(th[mode] + 1); upd(); };
    function geo() { var W = S.W, H = S.H; return { cx: W * 0.5, cy: H * (mode === "vert" ? 0.5 : 0.62), r: Math.min(W * 0.36, H * 0.42) }; }
    function setA(p) {
      var g = geo(), a = Math.round(Math.atan2(g.cy - p.y, p.x - g.cx) / RAD);
      if (mode === "type") th.type = (a + 360) % 360;
      else { if (a < 0) a = mode === "vert" ? a + 180 : (a > -90 ? 1 : 179); th[mode] = clamp(a, 1, 179); }
      upd();
    }
    S.drag({ down: function (p) { drag = true; setA(p); return true; }, move: function (p) { if (drag) setA(p); }, up: function () { drag = false; }, hover: function () { return true; } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), a = th[mode], ex = Math.cos(a * RAD), ey = -Math.sin(a * RAD);
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      function ray(x, y, col, w, lab) { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(g.cx, g.cy); c.lineTo(g.cx + x * g.r, g.cy + y * g.r); c.stroke(); if (lab) K.txt(c, lab, g.cx + x * (g.r + 14), g.cy + y * (g.r + 14), { s: 13, c: C.ink }); }
      if (mode === "type") {
        arcFill(c, g.cx, g.cy, 40, 0, -a * RAD, a > 180 ? "rgba(168,85,247,.35)" : "rgba(249,115,22,.3)");
        if (a === 90) { c.strokeStyle = C.ink; c.lineWidth = 1.5; c.strokeRect(g.cx, g.cy - 18, 18, 18); }
        ray(1, 0, C.ink, 3, "A"); ray(ex, ey, "#f97316", 4, "B"); K.dot(c, g.cx, g.cy, 5, C.ink); K.txt(c, "O", g.cx - 12, g.cy + 12, { s: 13, c: C.ink });
        K.txt(c, n(a) + "°", g.cx + 62 * Math.cos(a / 2 * RAD), g.cy - 62 * Math.sin(a / 2 * RAD), { s: 15, c: C.ink });
        K.txt(c, kind(a), W / 2, H - 14, { s: 14, c: "#7c3aed" });
      } else if (mode === "pair") {
        arcFill(c, g.cx, g.cy, 44, 0, -a * RAD, "rgba(249,115,22,.3)"); arcFill(c, g.cx, g.cy, 34, -a * RAD, -Math.PI, "rgba(59,130,246,.3)");
        ray(1, 0, C.ink, 3, "A"); ray(-1, 0, C.ink, 3, "B"); ray(ex, ey, "#f97316", 4, "C"); K.dot(c, g.cx, g.cy, 5, C.ink);
        K.txt(c, n(a) + "°", g.cx + 70 * Math.cos(a / 2 * RAD), g.cy - 70 * Math.sin(a / 2 * RAD), { s: 15, c: "#c2410c" });
        K.txt(c, n(180 - a) + "°", g.cx + 60 * Math.cos((a + 180) / 2 * RAD), g.cy - 60 * Math.sin((a + 180) / 2 * RAD), { s: 15, c: "#1d4ed8" });
      } else {
        arcFill(c, g.cx, g.cy, 40, 0, -a * RAD, "rgba(249,115,22,.3)"); arcFill(c, g.cx, g.cy, 40, Math.PI, Math.PI - a * RAD, "rgba(249,115,22,.3)");
        arcFill(c, g.cx, g.cy, 30, -a * RAD, -Math.PI, "rgba(59,130,246,.3)"); arcFill(c, g.cx, g.cy, 30, Math.PI - a * RAD, 0, "rgba(59,130,246,.3)");
        ray(1, 0, C.ink, 3, "B"); ray(-1, 0, C.ink, 3, "A"); ray(ex, ey, "#f97316", 4, "D"); ray(-ex, -ey, "#f97316", 4, "C"); K.dot(c, g.cx, g.cy, 5, C.ink); K.txt(c, "M", g.cx + 4, g.cy + 16, { s: 12, c: C.ink });
        [[a / 2, a], [(a + 180) / 2, 180 - a], [a / 2 + 180, a], [(a + 180) / 2 + 180, 180 - a]].forEach(function (q) { K.txt(c, n(q[1]) + "°", g.cx + 64 * Math.cos(q[0] * RAD), g.cy - 64 * Math.sin(q[0] * RAD), { s: 14, c: C.ink }); });
      }
    });
  };

  /* =========================================================
     mprep1_parallel - two lines, a transversal and 8 angles
     ========================================================= */
  L.mprep1_parallel = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the white handle to turn the transversal. Tap an angle number to see its partner. Tilt line p with the slider.", "اسحب المقبض الأبيض لتدوير القاطع، واضغط على رقم زاوية لترى الزاوية المرتبطة بها، وأمِل المستقيم p بالمنزلق.")) + '<div class="seg pl-rel"></div>';
    var S = K.make(host, 0.6, 380), th = 70, phi = 0, rel = "corr", selA = 0, drag = false, tilted = false;
    var PAIRS = { corr: { 1: 6, 2: 5, 3: 7, 4: 8 }, alt: { 3: 6, 4: 5, 1: 7, 2: 8 }, co: { 3: 5, 4: 6 } };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row">' + btn("p-", "− 1°") + btn("pp", "+ 1°") + "</div>" + L._slider(t("Tilt of line p", "ميل المستقيم p"), -12, 12, 1, 0, "°") + '<div class="meter pl-out"></div>';
    var rng = ctl.querySelector("input"), out = ctl.querySelector(".pl-out");
    var tick = L._goals(host, [t("Turn the transversal until " + eq("∠1 = 120°") + ".", "دوّر القاطع حتى تصبح " + eq("∠1 = 120°") + "."), t("Tap an angle to show a pair of corresponding angles.", "اضغط على زاوية لتعرض زاويتين متناظرتين."), t("Tilt line p: the corresponding angles are no longer equal.", "أمِل المستقيم p: لم تعد الزاويتان المتناظرتان متساويتين."), t("Make the lines parallel again (tilt 0°).", "أعد المستقيمين متوازيين (الميل ٠°).")], done);
    K.seg(host, ".pl-rel", [["corr", t("Corresponding", "متناظرتان")], ["alt", t("Alternate", "متبادلتان")], ["co", t("Same-side interior", "داخلتان في جهة واحدة")]], rel, function (v) { rel = v; upd(); });
    function ang(i) { var ps = th - phi; return { 1: 180 - th, 2: th, 3: 180 - th, 4: th, 5: ps, 6: 180 - ps, 7: 180 - ps, 8: ps }[i]; }
    function partner(i) { var m = PAIRS[rel]; if (m[i]) return +m[i]; for (var k in m) if (m[k] === i) return +k; return 0; }
    function upd() {
      ctl.querySelector(".slv").textContent = n(phi) + "°";
      var h = "<span>" + [1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return eq("∠" + i + " = " + ang(i) + "°"); }).join(" ") + "</span>";
      if (selA) { var j = partner(selA); if (j) { var sum = rel === "co"; h += "<span><b>" + eq("∠" + selA + (sum ? " + ∠" + j + " = " + (ang(selA) + ang(j)) + "°" : (ang(selA) === ang(j) ? " = ∠" + j : " ≠ ∠" + j))) + "</b> " + (phi ? "⚠️ " + t("not parallel", "غير متوازيين") : "✅ " + t("parallel", "متوازيان")) + "</span>"; if (rel === "corr") tick(1); } else h += "<span>" + t("This angle has no partner of this kind; try another.", "ليس لهذه الزاوية شريك من هذا النوع، جرّب أخرى.") + "</span>"; }
      out.innerHTML = h;
      if (ang(1) === 120) tick(0);
      if (phi !== 0) { tilted = true; tick(2); }
      if (phi === 0 && tilted) tick(3);
    }
    ctl.querySelector(".p-").onclick = function () { th = clamp(th - 1, 20, 160); upd(); };
    ctl.querySelector(".pp").onclick = function () { th = clamp(th + 1, 20, 160); upd(); };
    rng.oninput = function () { phi = Number(rng.value); upd(); };
    function geo() {
      var W = S.W, H = S.H, x1 = W * 0.42, y1 = H * 0.3, x2 = W * 0.5, y2 = H * 0.68;
      var cT = Math.cos(th * RAD), sT = -Math.sin(th * RAD), cP = Math.cos(phi * RAD), sP = -Math.sin(phi * RAD);
      var den = cT * sP - sT * cP, tt = ((x2 - x1) * sP - (y2 - y1) * cP) / den;
      return { W: W, H: H, x1: x1, y1: y1, x2: x2, y2: y2, cT: cT, sT: sT, cP: cP, sP: sP, ix: x1 + tt * cT, iy: y1 + tt * sT, hx: x1 + cT * H * 0.22, hy: y1 + sT * H * 0.22 };
    }
    function labPos(g, i) {
      var base = i <= 4 ? 0 : phi, a = i <= 4 ? th : th - phi, cx = i <= 4 ? g.x1 : g.ix, cy = i <= 4 ? g.y1 : g.iy;
      var dir = { 2: a / 2, 1: (a + 180) / 2, 4: 180 + a / 2, 3: 270 + a / 2, 5: a / 2, 6: (a + 180) / 2, 8: 180 + a / 2, 7: 270 + a / 2 }[i] + base;
      return { x: cx + 30 * Math.cos(dir * RAD), y: cy - 30 * Math.sin(dir * RAD), cx: cx, cy: cy, base: base, a: a };
    }
    S.drag({
      down: function (p) {
        var g = geo();
        if (dist(p.x, p.y, g.hx, g.hy) < 22) { drag = true; return true; }
        for (var i = 1; i <= 8; i++) { var q = labPos(g, i); if (dist(p.x, p.y, q.x, q.y) < 16) { selA = i; upd(); return true; } }
        return false;
      },
      move: function (p) { if (!drag) return; var g = geo(), a = Math.round(Math.atan2(g.y1 - p.y, p.x - g.x1) / RAD); if (a < 0) a += 180; th = clamp(a, 20, 160); upd(); },
      up: function () { drag = false; },
      hover: function (p) { var g = geo(); if (dist(p.x, p.y, g.hx, g.hy) < 22) return true; for (var i = 1; i <= 8; i++) { var q = labPos(g, i); if (dist(p.x, p.y, q.x, q.y) < 16) return true; } return false; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, g = geo(), W = g.W, H = g.H, i, L2 = W;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      var hl = selA ? [selA, partner(selA)] : [];
      hl.forEach(function (i, k) {
        if (!i) return; var q = labPos(g, i), sec = { 2: [0, 1], 1: [1, 2], 4: [2, 3], 3: [3, 0], 5: [0, 1], 6: [1, 2], 8: [2, 3], 7: [3, 0] }[i];
        var edges = [q.base, q.base + q.a, q.base + 180, q.base + 180 + q.a, q.base + 360], s1 = edges[sec[0]], s2 = sec[1] ? edges[sec[1]] : q.base + 360;
        arcFill(c, q.cx, q.cy, 24, -s1 * RAD, -s2 * RAD, k ? "rgba(249,115,22,.45)" : "rgba(59,130,246,.45)");
      });
      c.lineWidth = 3; c.strokeStyle = "#3b82f6";
      c.beginPath(); c.moveTo(0, g.y1); c.lineTo(W, g.y1); c.stroke();
      c.beginPath(); c.moveTo(g.x2 - g.cP * L2, g.y2 - g.sP * L2); c.lineTo(g.x2 + g.cP * L2, g.y2 + g.sP * L2); c.stroke();
      K.txt(c, "m", 14, g.y1 - 12, { s: 14, c: "#3b82f6" }); K.txt(c, "p", 14, g.y2 - 12 + (g.x2 - 14) * Math.tan(phi * RAD), { s: 14, c: "#3b82f6" });
      if (!phi) { K.txt(c, "▶", W * 0.86, g.y1, { s: 12, c: "#3b82f6" }); K.txt(c, "▶", W * 0.86, g.y2 + (g.x2 - W * 0.86) * Math.tan(phi * RAD), { s: 12, c: "#3b82f6" }); }
      c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(g.x1 - g.cT * H * 0.4, g.y1 - g.sT * H * 0.4); c.lineTo(g.x1 + g.cT * H * 1.2, g.y1 + g.sT * H * 1.2); c.moveTo(g.x1 - g.cT * H * 1.2, g.y1 - g.sT * H * 1.2); c.lineTo(g.x1, g.y1); c.stroke();
      K.dot(c, g.hx, g.hy, 10, "#fff", C.ink);
      for (i = 1; i <= 8; i++) { var q = labPos(g, i); K.dot(c, q.x, q.y, 11, selA === i ? "#1d4ed8" : C.card, C.line); K.txt(c, n(i), q.x, q.y, { s: 12, c: selA === i ? "#fff" : C.ink }); }
      K.txt(c, "∠1 = " + n(ang(1)) + "°", W - 12, 16, { s: 13, c: C.ink, a: "right" });
    });
  };

  /* =========================================================
     mprep1_tri - triangle angles, exterior angle and the triangle inequality
     ========================================================= */
  L.mprep1_tri = function (host, cfg, done) {
    host.innerHTML = hint(t("Angles mode: drag the corners of the triangle. Sides mode: choose three stick lengths and see if they close.", "وضع الزوايا: اسحب رؤوس المثلث. وضع الأضلاع: اختر أطوال ثلاثة أعواد وانظر هل تُغلق مثلثًا.")) + '<div class="seg tr-mode"></div>';
    var S = K.make(host, 0.58, 380), mode = "ang", P = [[0.18, 0.78], [0.66, 0.78], [0.38, 0.22]], drag = -1, sd = [5, 5, 5];
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="tr-sides">' + L._slider("a", 1, 12, 1, 5) + L._slider("b", 1, 12, 1, 5) + L._slider("c", 1, 12, 1, 5) + '</div><div class="meter tr-out"></div>';
    var box = ctl.querySelector(".tr-sides"), ins = box.querySelectorAll("input"), out = ctl.querySelector(".tr-out");
    var tick = L._goals(host, [t("Make a right-angled triangle.", "كوّن مثلثًا قائم الزاوية."), t("Make an obtuse-angled triangle.", "كوّن مثلثًا منفرج الزاوية."), t("Make the exterior angle at C equal 125°.", "اجعل الزاوية الخارجة عند C تساوي ١٢٥°."), t("Sides: try 8, 4, 4. Why is there no triangle?", "الأضلاع: جرّب ٨ و٤ و٤. لماذا لا يتكون مثلث؟"), t("Sides: build a triangle from 10, 6, 5.", "الأضلاع: كوّن مثلثًا من ١٠ و٦ و٥.")], done);
    K.seg(host, ".tr-mode", [["ang", "🔺 " + t("Angles", "الزوايا")], ["side", "📏 " + t("Sides", "الأضلاع")]], mode, function (v) { mode = v; upd(); });
    function pts() { return P.map(function (q) { return [q[0] * S.W, q[1] * S.H]; }); }
    function angles() {
      var p = pts(), raw = [0, 1, 2].map(function (i) { var a = p[i], b = p[(i + 1) % 3], c = p[(i + 2) % 3], v1 = [b[0] - a[0], b[1] - a[1]], v2 = [c[0] - a[0], c[1] - a[1]];
        var d = (v1[0] * v2[0] + v1[1] * v2[1]) / (Math.hypot(v1[0], v1[1]) * Math.hypot(v2[0], v2[1]) || 1); return Math.acos(clamp(d, -1, 1)) / RAD; });
      var r = raw.map(Math.floor), left = 180 - r[0] - r[1] - r[2], ord = [0, 1, 2].sort(function (x, y) { return (raw[y] - r[y]) - (raw[x] - r[x]); });
      for (var i = 0; i < left; i++) r[ord[i % 3]]++;
      return r;
    }
    function sortedSides() { return sd.slice().sort(function (x, y) { return x - y; }); }
    function upd() {
      box.style.display = mode === "side" ? "" : "none";
      var sl = box.querySelectorAll(".slv"); sl[0].textContent = n(sd[0]); sl[1].textContent = n(sd[1]); sl[2].textContent = n(sd[2]);
      if (mode === "ang") {
        var a = angles(), big = Math.max.apply(null, a);
        out.innerHTML = "<span><b>" + eq("A + B + C = " + a[0] + "° + " + a[1] + "° + " + a[2] + "° = 180°") + "</b></span><span>" + t("Exterior angle at C: ", "الزاوية الخارجة عند C: ") + eq((180 - a[2]) + "° = A + B = " + a[0] + "° + " + a[1] + "°") + "</span><span>" + (big === 90 ? t("Right-angled triangle", "مثلث قائم الزاوية") : big > 90 ? t("Obtuse-angled triangle", "مثلث منفرج الزاوية") : t("Acute-angled triangle", "مثلث حاد الزوايا")) + "</span>";
        if (big === 90) tick(0); if (big > 90) tick(1); if (180 - a[2] === 125) tick(2);
      } else {
        var s = sortedSides(), sm = s[0] + s[1];
        out.innerHTML = "<span><b>" + eq(s[0] + " + " + s[1] + " = " + sm + (sm > s[2] ? " > " : sm === s[2] ? " = " : " < ") + s[2]) + "</b></span><span>" + (sm > s[2] ? "✅ " + t("The sum of the two shorter sides is greater than the longest: a triangle.", "مجموع الضلعين الأقصر أكبر من الأطول: يتكون مثلث.") : sm === s[2] ? "➖ " + t("Equal: the sticks lie flat on a straight line. No triangle.", "متساويان: تنطبق الأعواد على خط مستقيم، فلا يتكون مثلث.") : "❌ " + t("Too short: the ends cannot meet.", "قصيران جدًا: لا يلتقي الطرفان.")) + "</span>";
        if (s.join() === "4,4,8") tick(3); if (s.join() === "5,6,10") tick(4);
      }
    }
    [0, 1, 2].forEach(function (i) { ins[i].oninput = function () { sd[i] = Number(ins[i].value); upd(); }; });
    S.drag({
      down: function (p) { if (mode !== "ang") return false; var q = pts(); for (var i = 0; i < 3; i++) if (dist(p.x, p.y, q[i][0], q[i][1]) < 22) { drag = i; return true; } return false; },
      move: function (p) { if (drag < 0) return; P[drag] = [clamp(p.x / S.W, 0.06, 0.94), clamp(p.y / S.H, 0.08, 0.92)]; upd(); },
      up: function () { drag = -1; },
      hover: function (p) { if (mode !== "ang") return false; return pts().some(function (q) { return dist(p.x, p.y, q[0], q[1]) < 22; }); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, i;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      if (mode === "ang") {
        var p = pts(), a = angles(), COL = ["#3b82f6", "#f97316", "#22c55e"];
        var bx = p[2][0] - p[1][0], by = p[2][1] - p[1][1], bl = Math.hypot(bx, by) || 1;
        c.strokeStyle = C.muted; c.lineWidth = 2; c.setLineDash([6, 5]); c.beginPath(); c.moveTo(p[2][0], p[2][1]); c.lineTo(p[2][0] + bx / bl * 90, p[2][1] + by / bl * 90); c.stroke(); c.setLineDash([]);
        var aE = Math.atan2(by, bx), aCA = Math.atan2(p[0][1] - p[2][1], p[0][0] - p[2][0]), dA = ((aCA - aE) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
        arcFill(c, p[2][0], p[2][1], 30, aE, aE + dA, "rgba(168,85,247,.35)");
        K.txt(c, n(180 - a[2]) + "°", p[2][0] + 46 * Math.cos(aE + dA / 2), p[2][1] + 46 * Math.sin(aE + dA / 2), { s: 12, c: "#7c3aed" });
        c.beginPath(); c.moveTo(p[0][0], p[0][1]); c.lineTo(p[1][0], p[1][1]); c.lineTo(p[2][0], p[2][1]); c.closePath(); c.fillStyle = "rgba(59,130,246,.1)"; c.fill(); c.strokeStyle = C.ink; c.lineWidth = 3; c.stroke();
        for (i = 0; i < 3; i++) {
          var A0 = p[i], B0 = p[(i + 1) % 3], C0 = p[(i + 2) % 3], a1 = Math.atan2(B0[1] - A0[1], B0[0] - A0[0]), a2 = Math.atan2(C0[1] - A0[1], C0[0] - A0[0]), d = ((a2 - a1) % (2 * Math.PI) + 3 * Math.PI) % (2 * Math.PI) - Math.PI;
          arcFill(c, A0[0], A0[1], 24, a1, a1 + d, COL[i] + "66");
          K.txt(c, n(a[i]) + "°", A0[0] + 42 * Math.cos(a1 + d / 2), A0[1] + 42 * Math.sin(a1 + d / 2), { s: 13, c: COL[i] });
          K.dot(c, A0[0], A0[1], 9, "#fff", C.ink); K.txt(c, "ABC"[i], A0[0] + (A0[0] < W / 2 ? -18 : 18), A0[1] - 16, { s: 14, c: C.ink });
        }
      } else {
        var s = sortedSides(), u = Math.min(W * 0.8 / Math.max(12, s[0] + s[1]), H * 0.06), cL = s[2] * u, x0 = W / 2 - cL / 2, y0 = H * 0.8, A = s[1], B = s[0];
        c.lineWidth = 7; c.lineCap = "round";
        c.strokeStyle = "#22c55e"; c.beginPath(); c.moveTo(x0, y0); c.lineTo(x0 + cL, y0); c.stroke(); K.txt(c, n(s[2]), x0 + cL / 2, y0 + 20, { s: 13, c: C.ink });
        if (A + B > s[2]) {
          var xx = (A * A - B * B + s[2] * s[2]) / (2 * s[2]), yy = Math.sqrt(Math.max(0, A * A - xx * xx)), apx = x0 + xx * u, apy = y0 - yy * u;
          c.strokeStyle = "#3b82f6"; c.beginPath(); c.moveTo(x0, y0); c.lineTo(apx, apy); c.stroke(); c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(x0 + cL, y0); c.lineTo(apx, apy); c.stroke();
          K.txt(c, n(A), (x0 + apx) / 2 - 14, (y0 + apy) / 2, { s: 13, c: "#3b82f6" }); K.txt(c, n(B), (x0 + cL + apx) / 2 + 14, (y0 + apy) / 2, { s: 13, c: "#f97316" });
        } else {
          var lift = A + B === s[2] ? 0 : 0.5;
          c.strokeStyle = "#3b82f6"; c.beginPath(); c.moveTo(x0, y0 - 8); c.lineTo(x0 + A * u * Math.cos(lift), y0 - 8 - A * u * Math.sin(lift)); c.stroke();
          c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(x0 + cL, y0 - 16); c.lineTo(x0 + cL - B * u * Math.cos(lift), y0 - 16 - B * u * Math.sin(lift)); c.stroke();
          K.txt(c, A + B === s[2] ? t("flat: no triangle", "على خط مستقيم: لا مثلث") : t("gap: the ends cannot meet", "فجوة: لا يلتقي الطرفان"), W / 2, H * 0.3, { s: 15, c: "#ef4444" });
        }
        c.lineCap = "butt";
      }
    });
  };

  /* =========================================================
     mprep1_quad - quadrilateral shape morpher on a grid
     ========================================================= */
  L.mprep1_quad = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the four corners (they snap to the grid). The lab names the shape and checks its diagonals.", "اسحب الرؤوس الأربعة (تلتصق بنقاط الشبكة)، ويسمي المعمل الشكل ويفحص قطريه."));
    var S = K.make(host, 0.6, 400), V = [[3, 7], [9, 8], [11, 3], [4, 2]], drag = -1, GW = 15, GH = 9;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="meter qd-out"></div>';
    var out = ctl.querySelector(".qd-out");
    var tick = L._goals(host, [t("Make a trapezium.", "كوّن شبه منحرف."), t("Make a parallelogram that is not a rectangle or a rhombus.", "كوّن متوازي أضلاع ليس مستطيلًا ولا معينًا."), t("Make a rhombus that is not a square.", "كوّن معينًا ليس مربعًا."), t("Make a rectangle that is not a square.", "كوّن مستطيلًا ليس مربعًا."), t("Make a square.", "كوّن مربعًا.")], done);
    function sub(a, b) { return [a[0] - b[0], a[1] - b[1]]; }
    function cr(a, b) { return a[0] * b[1] - a[1] * b[0]; }
    function dt(a, b) { return a[0] * b[0] + a[1] * b[1]; }
    function len2(a) { return dt(a, a); }
    function segX(p1, p2, p3, p4) { var d1 = cr(sub(p4, p3), sub(p1, p3)), d2 = cr(sub(p4, p3), sub(p2, p3)), d3 = cr(sub(p2, p1), sub(p3, p1)), d4 = cr(sub(p2, p1), sub(p4, p1)); return d1 * d2 < 0 && d3 * d4 < 0; }
    function info() {
      var A = V[0], B = V[1], C = V[2], D = V[3], AB = sub(B, A), BC = sub(C, B), CD = sub(D, C), DA = sub(A, D);
      var crossed = segX(A, B, C, D) || segX(B, C, D, A), dup = V.some(function (p, i) { return V.some(function (q, j) { return i < j && p[0] === q[0] && p[1] === q[1]; }); });
      var p1 = cr(AB, CD) === 0, p2 = cr(BC, DA) === 0, name, key;
      if (crossed || dup) { name = t("Not a simple quadrilateral (sides cross)", "ليس شكلًا رباعيًا بسيطًا (الأضلاع متقاطعة)"); key = "x"; }
      else if (p1 && p2) { var rt = dt(AB, BC) === 0, eqs = len2(AB) === len2(BC); key = rt && eqs ? "sq" : rt ? "rect" : eqs ? "rh" : "pg"; name = { sq: t("Square", "مربع"), rect: t("Rectangle", "مستطيل"), rh: t("Rhombus", "معين"), pg: t("Parallelogram", "متوازي أضلاع") }[key]; }
      else if (p1 || p2) { key = "tz"; name = t("Trapezium", "شبه منحرف"); }
      else { key = "q"; name = t("Quadrilateral", "شكل رباعي"); }
      var AC = sub(C, A), BD = sub(D, B);
      return { key: key, name: name, deq: len2(AC) === len2(BD), dperp: dt(AC, BD) === 0, dbis: A[0] + C[0] === B[0] + D[0] && A[1] + C[1] === B[1] + D[1] };
    }
    function angs() {
      var area = 0, i; for (i = 0; i < 4; i++) area += cr(V[i], V[(i + 1) % 4]); var sg = area > 0 ? 1 : -1;
      return V.map(function (p, i) { var a = sub(V[(i + 3) % 4], p), b = sub(V[(i + 1) % 4], p), an = Math.atan2(cr(b, a), dt(b, a)) / RAD * sg; return an < 0 ? an + 360 : an; });
    }
    function upd() {
      var f = info(), a = angs().map(function (x) { return Math.round(x * 10) / 10; });
      out.innerHTML = "<span><b>" + f.name + "</b></span>" + (f.key !== "x" ? "<span>" + eq(a.join("° + ") + "° = 360°") + "</span><span>" + t("Diagonals: ", "القطران: ") + (f.deq ? t("equal", "متساويان") : t("not equal", "غير متساويين")) + " · " + (f.dperp ? t("perpendicular", "متعامدان") : t("not perpendicular", "غير متعامدين")) + " · " + (f.dbis ? t("bisect each other", "ينصف كل منهما الآخر") : t("do not bisect each other", "لا ينصف أحدهما الآخر")) + "</span>" : "");
      var k = { tz: 0, pg: 1, rh: 2, rect: 3, sq: 4 }[f.key]; if (k != null) tick(k);
    }
    function geo() { var u = Math.min(S.W / (GW + 1), S.H / (GH + 1)); return { u: u, ox: (S.W - GW * u) / 2, oy: (S.H - GH * u) / 2 }; }
    function P(v) { var g = geo(); return [g.ox + v[0] * g.u, g.oy + v[1] * g.u]; }
    S.drag({
      down: function (p) { for (var i = 0; i < 4; i++) { var q = P(V[i]); if (dist(p.x, p.y, q[0], q[1]) < 22) { drag = i; return true; } } return false; },
      move: function (p) { if (drag < 0) return; var g = geo(), nx = clamp(Math.round((p.x - g.ox) / g.u), 0, GW), ny = clamp(Math.round((p.y - g.oy) / g.u), 0, GH); if (nx !== V[drag][0] || ny !== V[drag][1]) { V[drag] = [nx, ny]; upd(); } },
      up: function () { drag = -1; },
      hover: function (p) { return V.some(function (v) { var q = P(v); return dist(p.x, p.y, q[0], q[1]) < 22; }); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), i, j, f = info(), a = angs();
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      for (i = 0; i <= GW; i++) for (j = 0; j <= GH; j++) K.dot(c, g.ox + i * g.u, g.oy + j * g.u, 1.6, C.line);
      var q = V.map(P);
      c.strokeStyle = C.muted; c.lineWidth = 1.5; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(q[0][0], q[0][1]); c.lineTo(q[2][0], q[2][1]); c.moveTo(q[1][0], q[1][1]); c.lineTo(q[3][0], q[3][1]); c.stroke(); c.setLineDash([]);
      c.beginPath(); c.moveTo(q[0][0], q[0][1]); for (i = 1; i < 4; i++) c.lineTo(q[i][0], q[i][1]); c.closePath();
      c.fillStyle = f.key === "x" ? "rgba(239,68,68,.15)" : "rgba(124,58,237,.15)"; c.fill(); c.strokeStyle = f.key === "x" ? "#ef4444" : "#7c3aed"; c.lineWidth = 3; c.stroke();
      for (i = 0; i < 4; i++) {
        K.dot(c, q[i][0], q[i][1], 9, "#fff", C.ink);
        var cx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4, cy = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4, dx = q[i][0] - cx, dy = q[i][1] - cy, dl = Math.hypot(dx, dy) || 1;
        K.txt(c, "ABCD"[i], q[i][0] + dx / dl * 20, q[i][1] + dy / dl * 20, { s: 14, c: C.ink });
        if (f.key !== "x") K.txt(c, n(Math.round(a[i])) + "°", q[i][0] - dx / dl * 26, q[i][1] - dy / dl * 26, { s: 11, c: "#7c3aed" });
      }
      K.txt(c, f.name, W / 2, 14, { s: 15, c: C.ink });
    });
  };

  /* =========================================================
     mprep1_poly - polygon angle sums, regular polygons, symmetry
     ========================================================= */
  L.mprep1_poly = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose the number of sides, then show the triangles from one vertex, the axes of symmetry, or push one vertex in.", "اختر عدد الأضلاع، ثم اعرض المثلثات من رأس واحد أو محاور التماثل، أو ادفع أحد الرؤوس للداخل."));
    var S = K.make(host, 0.6, 380), N = 4, tri = false, axes = false, dent = false;
    var NAMES = { 3: ["Triangle", "مثلث"], 4: ["Quadrilateral", "شكل رباعي"], 5: ["Pentagon", "خماسي"], 6: ["Hexagon", "سداسي"], 7: ["Heptagon", "سباعي"], 8: ["Octagon", "ثماني"], 9: ["Nonagon", "تساعي"], 10: ["Decagon", "عشاري"], 11: ["11-gon", "مضلع ذو ١١ ضلعًا"], 12: ["Dodecagon", "مضلع ذو ١٢ ضلعًا"] };
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = L._slider(t("Number of sides n", "عدد الأضلاع n"), 3, 12, 1, N) + '<div class="btn-row">' + btn("pt tg", "🔺 " + t("Triangles", "المثلثات")) + btn("pa tg", "🪞 " + t("Axes of symmetry", "محاور التماثل")) + btn("pd tg", "👉 " + t("Push a vertex in", "ادفع رأسًا للداخل")) + '</div><div class="meter pg-out"></div>';
    var ins = ctl.querySelector("input"), out = ctl.querySelector(".pg-out");
    var tick = L._goals(host, [t("Hexagon: show the triangles from one vertex and find the angle sum.", "السداسي: اعرض المثلثات من رأس واحد وأوجد مجموع الزوايا."), t("Find each angle of a regular octagon.", "أوجد قياس كل زاوية في الثماني المنتظم."), t("Show the axes of symmetry of a regular pentagon.", "اعرض محاور تماثل الخماسي المنتظم."), t("Make a concave polygon.", "كوّن مضلعًا مقعرًا.")], done);
    function upd() {
      ctl.querySelector(".slv").textContent = n(N);
      var sum = (N - 2) * 180, each = Math.round(sum / N * 100) / 100, conc = dent && N >= 4;
      out.innerHTML = "<span><b>" + t(NAMES[N][0], NAMES[N][1]) + "</b> · " + eq("n = " + N) + "</span><span>" + eq("(n − 2) × 180° = " + (N - 2) + " × 180° = " + sum + "°") + "</span>" +
        (dent ? "<span>" + (conc ? "⚠️ " + t("Concave: one interior angle is reflex (more than 180°). Not regular.", "مقعر: إحدى الزوايا الداخلة منعكسة (أكبر من ١٨٠°)، وليس منتظمًا.") : t("A triangle cannot be concave.", "لا يمكن أن يكون المثلث مقعرًا.")) + "</span>" : "<span>" + t("Regular: each angle ", "منتظم: كل زاوية ") + eq(sum + "° ÷ " + N + " = " + each + "°") + " · " + t("axes of symmetry: ", "محاور التماثل: ") + eq(String(N)) + "</span>");
      if (N === 6 && tri) tick(0); if (N === 8 && !dent) tick(1); if (N === 5 && axes && !dent) tick(2); if (conc) tick(3);
    }
    ins.oninput = function () { N = Number(ins.value); upd(); };
    [["pt", function () { tri = !tri; return tri; }], ["pa", function () { axes = !axes; return axes; }], ["pd", function () { dent = !dent; return dent; }]].forEach(function (o) { var b = ctl.querySelector("." + o[0]); b.onclick = function () { b.classList.toggle("on", o[1]()); upd(); }; });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, cx = W * 0.5, cy = H * 0.52, R = Math.min(W * 0.32, H * 0.42), i, a0 = -Math.PI / 2;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      var pts = []; for (i = 0; i < N; i++) { var r = dent && i === 0 && N >= 4 ? R * (Math.cos(2 * Math.PI / N) - 0.35) : R; pts.push([cx + r * Math.cos(a0 + i * 2 * Math.PI / N), cy + r * Math.sin(a0 + i * 2 * Math.PI / N)]); }
      c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (i = 1; i < N; i++) c.lineTo(pts[i][0], pts[i][1]); c.closePath(); c.fillStyle = "rgba(20,184,166,.18)"; c.fill(); c.strokeStyle = "#0d9488"; c.lineWidth = 3; c.stroke();
      if (tri) { var TC = ["rgba(59,130,246,.25)", "rgba(249,115,22,.25)", "rgba(34,197,94,.25)", "rgba(168,85,247,.25)"]; for (i = 1; i < N - 1; i++) { c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); c.lineTo(pts[i][0], pts[i][1]); c.lineTo(pts[i + 1][0], pts[i + 1][1]); c.closePath(); c.fillStyle = TC[i % 4]; c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1; c.stroke(); var gx = (pts[0][0] + pts[i][0] + pts[i + 1][0]) / 3, gy = (pts[0][1] + pts[i][1] + pts[i + 1][1]) / 3; K.txt(c, n(i), gx, gy, { s: 12, c: C.ink }); } }
      if (axes) {
        c.strokeStyle = "#ef4444"; c.lineWidth = 1.5; c.setLineDash([6, 5]);
        var lines = dent && N >= 4 ? [a0] : []; if (!lines.length) for (i = 0; i < N; i++) lines.push(a0 + i * Math.PI / N);
        lines.forEach(function (an) { c.beginPath(); c.moveTo(cx - (R + 20) * Math.cos(an), cy - (R + 20) * Math.sin(an)); c.lineTo(cx + (R + 20) * Math.cos(an), cy + (R + 20) * Math.sin(an)); c.stroke(); });
        c.setLineDash([]);
      }
      pts.forEach(function (p, k) { K.dot(c, p[0], p[1], 5, k === 0 && dent ? "#ef4444" : C.ink); });
      K.txt(c, n((N - 2) * 180) + "°", W - 14, 18, { s: 18, c: "#0d9488", a: "right" });
    });
  };

  /* =========================================================
     mprep1_coord - coordinate plane: quadrants, projections, midpoint
     ========================================================= */
  L.mprep1_coord = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag points A and B (they snap to whole numbers). Turn on projections and the midpoint.", "اسحب النقطتين A و B (تلتصقان بالأعداد الصحيحة)، وشغّل المساقط والمنتصف."));
    var S = K.make(host, 0.72, 440), A = [2, 3], B = [-4, -2], drag = null, proj = false, mid = false, R = 8;
    var ctl = E.el("div", "sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row">' + btn("cp tg", "⊥ " + t("Projections", "المساقط")) + btn("cm tg", "M " + t("Midpoint", "المنتصف")) + '</div><div class="meter co-out"></div>';
    var out = ctl.querySelector(".co-out");
    var tick = L._goals(host, [t("Put A in the 4th quadrant.", "ضع A في الربع الرابع."), t("Projections: " + eq("A(−3, 4)") + ", " + eq("B(2, 2)") + ". The projection of AB on the x-axis is 5.", "المساقط: " + eq("A(−3, 4)") + " و " + eq("B(2, 2)") + "، وطول مسقط AB على محور السينات ٥."), t("Midpoint: make " + eq("M = (−2, 3)") + ".", "المنتصف: اجعل " + eq("M = (−2, 3)") + "."), t("Put B on the y-axis.", "ضع B على محور الصادات.")], done);
    function where(p) { if (!p[0] && !p[1]) return t("the origin", "نقطة الأصل"); if (!p[1]) return t("on the x-axis", "على محور السينات"); if (!p[0]) return t("on the y-axis", "على محور الصادات"); return p[0] > 0 ? (p[1] > 0 ? t("1st quadrant", "الربع الأول") : t("4th quadrant", "الربع الرابع")) : (p[1] > 0 ? t("2nd quadrant", "الربع الثاني") : t("3rd quadrant", "الربع الثالث")); }
    function pr(p) { return "(" + m(p[0]) + ", " + m(p[1]) + ")"; }
    function upd() {
      var M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2], px = Math.abs(A[0] - B[0]), py = Math.abs(A[1] - B[1]);
      out.innerHTML = "<span><b>A</b> " + eq(pr(A)) + " · " + where(A) + "</span><span><b>B</b> " + eq(pr(B)) + " · " + where(B) + "</span>" +
        (mid ? "<span>" + eq("M = ((" + m(A[0]) + " + " + sgp(B[0]) + ")/2, (" + m(A[1]) + " + " + sgp(B[1]) + ")/2) = " + pr(M)) + "</span>" : "") +
        (proj ? "<span>" + t("Projection on x-axis: ", "المسقط على محور السينات: ") + eq("A′" + pr([A[0], 0]) + " B′" + pr([B[0], 0]) + ", length " + px) + "</span><span>" + t("Projection on y-axis: ", "المسقط على محور الصادات: ") + eq("length " + py) + "</span>" : "");
      if (A[0] > 0 && A[1] < 0) tick(0);
      if (proj && A[0] === -3 && A[1] === 4 && B[0] === 2 && B[1] === 2) tick(1);
      if (mid && M[0] === -2 && M[1] === 3) tick(2);
      if (B[0] === 0 && B[1] !== 0) tick(3);
    }
    [["cp", function () { proj = !proj; return proj; }], ["cm", function () { mid = !mid; return mid; }]].forEach(function (o) { var b = ctl.querySelector("." + o[0]); b.onclick = function () { b.classList.toggle("on", o[1]()); upd(); }; });
    function geo() { var u = Math.min(S.W, S.H) / (2 * R + 2); return { u: u, cx: S.W / 2, cy: S.H / 2 }; }
    function P(p) { var g = geo(); return [g.cx + p[0] * g.u, g.cy - p[1] * g.u]; }
    S.drag({
      down: function (p) { var a = P(A), b = P(B); if (dist(p.x, p.y, a[0], a[1]) < 22) drag = A; else if (dist(p.x, p.y, b[0], b[1]) < 22) drag = B; else return false; return true; },
      move: function (p) { if (!drag) return; var g = geo(), x = clamp(Math.round((p.x - g.cx) / g.u), -R, R), y = clamp(Math.round((g.cy - p.y) / g.u), -R, R); if (x !== drag[0] || y !== drag[1]) { drag[0] = x; drag[1] = y; upd(); } },
      up: function () { drag = null; },
      hover: function (p) { var a = P(A), b = P(B); return dist(p.x, p.y, a[0], a[1]) < 22 || dist(p.x, p.y, b[0], b[1]) < 22; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, H = S.H, g = geo(), i;
      c.clearRect(0, 0, W, H); c.direction = "ltr";
      c.fillStyle = "rgba(59,130,246,.05)"; c.fillRect(g.cx, g.cy - R * g.u, R * g.u, R * g.u); c.fillRect(g.cx - R * g.u, g.cy, R * g.u, R * g.u);
      for (i = -R; i <= R; i++) { c.strokeStyle = i ? C.line : C.ink; c.lineWidth = i ? 1 : 2; c.beginPath(); c.moveTo(g.cx + i * g.u, g.cy - R * g.u); c.lineTo(g.cx + i * g.u, g.cy + R * g.u); c.stroke(); c.beginPath(); c.moveTo(g.cx - R * g.u, g.cy + i * g.u); c.lineTo(g.cx + R * g.u, g.cy + i * g.u); c.stroke();
        if (i && i % 2 === 0) { K.txt(c, n(i), g.cx + i * g.u, g.cy + 12, { s: 9, c: C.muted }); K.txt(c, n(i), g.cx - 12, g.cy - i * g.u, { s: 9, c: C.muted }); } }
      K.txt(c, "x", g.cx + R * g.u + 8, g.cy - 10, { s: 13, c: C.ink }); K.txt(c, "y", g.cx + 10, g.cy - R * g.u - 6, { s: 13, c: C.ink });
      [["1", 1, 1], ["2", -1, 1], ["3", -1, -1], ["4", 1, -1]].forEach(function (q) { K.txt(c, q[0], g.cx + q[1] * (R - 0.8) * g.u, g.cy - q[2] * (R - 0.8) * g.u, { s: 16, c: "rgba(100,116,139,.45)" }); });
      var a = P(A), b = P(B);
      c.strokeStyle = "#7c3aed"; c.lineWidth = 3; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke();
      if (proj) {
        c.strokeStyle = "#f97316"; c.lineWidth = 1.5; c.setLineDash([4, 4]);
        [a, b].forEach(function (q) { c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[0], g.cy); c.moveTo(q[0], q[1]); c.lineTo(g.cx, q[1]); c.stroke(); });
        c.setLineDash([]); c.lineWidth = 5; c.beginPath(); c.moveTo(a[0], g.cy); c.lineTo(b[0], g.cy); c.stroke(); c.strokeStyle = "#22c55e"; c.beginPath(); c.moveTo(g.cx, a[1]); c.lineTo(g.cx, b[1]); c.stroke();
        K.dot(c, a[0], g.cy, 4, "#f97316"); K.dot(c, b[0], g.cy, 4, "#f97316");
      }
      if (mid) { var m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; K.dot(c, m[0], m[1], 7, "#16a34a", C.ink); K.txt(c, "M", m[0] + 12, m[1] - 10, { s: 13, c: "#16a34a" }); }
      [[a, A, "A", "#3b82f6"], [b, B, "B", "#ef4444"]].forEach(function (o) { K.dot(c, o[0][0], o[0][1], 10, o[3], C.ink); K.txt(c, o[2] + pr(o[1]), o[0][0] + 14, o[0][1] - 14, { s: 12, c: C.ink, a: "left" }); });
    });
  };
})();

/* ---------- Prep 1 maths: objectives, extra quiz items, tappable diagrams, lab part names ---------- */
(function () {
  "use strict";
  var E = window.EZ3;
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;

  /* ---------- "In this lesson" objectives (from the book's learning outcomes) ---------- */
  var O = {
    mprep1u1l1: [["Know a proportion, its extremes and its means", "تعرف التناسب وطرفيه ووسطيه"], ["Tell proportional from non-proportional relations", "تميز العلاقات المتناسبة من غير المتناسبة"], ["Solve a proportion by cross multiplication", "تحل التناسب بالضرب التبادلي"], ["Spot proportion on a graph through the origin", "تتعرف التناسب بيانيًا بخط يمر بنقطة الأصل"]],
    mprep1u1l2: [["Use scale drawings to find real and drawn lengths", "تستخدم مقياس الرسم لإيجاد الأطوال الحقيقية والمرسومة"], ["Tell magnification from minimization", "تميز التكبير من التصغير"], ["Divide a quantity in a given ratio", "تقسم كمية بنسبة معلومة"], ["Work out discounts, taxes and original prices", "تحسب الخصم والضريبة والثمن الأصلي"]],
    mprep1u1l3: [["Write sets by listing and by set-builder", "تكتب المجموعة بطريقة السرد وبالصفة المميزة"], ["Use the symbols ∈, ∉ and ⊂", "تستخدم الرموز ∈ و ∉ و ⊂"], ["Find the union and intersection of two sets", "توجد اتحاد مجموعتين وتقاطعهما"], ["Represent sets with Venn diagrams", "تمثل المجموعات بأشكال فن"]],
    mprep1u1l4: [["Add and subtract integers", "تجمع الأعداد الصحيحة وتطرحها"], ["Multiply and divide integers using sign rules", "تضرب الأعداد الصحيحة وتقسمها بقواعد الإشارات"], ["Use the properties of operations on Z", "تستخدم خواص العمليات في Z"], ["Solve real-life integer problems", "تحل مسائل حياتية على الأعداد الصحيحة"]],
    mprep1u1l5: [["Write rational numbers in different forms", "تكتب العدد النسبي في صور مختلفة"], ["Add and subtract rational numbers", "تجمع الأعداد النسبية وتطرحها"], ["Multiply and divide rational numbers", "تضرب الأعداد النسبية وتقسمها"], ["Use the multiplicative inverse", "تستخدم المعكوس الضربي"]],
    mprep1u2l1: [["Tell expressions, equations, inequalities and formulas apart", "تميز المقدار والمعادلة والمتباينة والصيغة"], ["Identify terms, coefficients and like terms", "تحدد الحدود والمعاملات والحدود المتشابهة"], ["Simplify algebraic expressions", "تبسط المقادير الجبرية"], ["Evaluate expressions and formulas", "توجد القيمة العددية للمقادير والصيغ"]],
    mprep1u2l2: [["Form a linear equation from a situation", "تكوّن معادلة خطية من موقف"], ["Relate the substitution set and the solution set", "تربط بين مجموعة التعويض ومجموعة الحل"], ["Solve equations using the properties of equality", "تحل المعادلات بخواص التساوي"], ["Solve in N, Z and Q and verify", "تحل في N و Z و Q وتتحقق من الحل"]],
    mprep1u3l1: [["Organize data in a frequency table", "تنظم البيانات في جدول تكراري"], ["Build a frequency table with intervals and a histogram", "تكوّن جدولًا تكراريًا ذا فئات ومدرجًا تكراريًا"], ["Draw a stem-and-leaf plot", "ترسم التمثيل بالساق والورقة"], ["Spot misleading graphs", "تكتشف الرسوم البيانية المضللة"]],
    mprep1u3l2: [["Find the mean, median and mode", "توجد الوسط الحسابي والوسيط والمنوال"], ["Find the mean of a frequency table", "توجد الوسط الحسابي لجدول تكراري"], ["Find a missing value from the mean", "توجد قيمة ناقصة من الوسط"], ["See how extreme values mislead", "تدرك تأثير القيم المتطرفة المضلل"]],
    mprep1u3l3: [["Know the pie chart and the central angle", "تعرف التمثيل بالقطاعات الدائرية والزاوية المركزية"], ["Calculate central angles from data", "تحسب الزوايا المركزية من البيانات"], ["Draw a pie chart", "ترسم التمثيل بالقطاعات الدائرية"], ["Read values back from a pie chart", "تقرأ القيم من التمثيل بالقطاعات"]],
    mprep1u4l1: [["Name and measure the types of angles", "تسمي أنواع الزوايا وتقيسها"], ["Use complementary and supplementary angles", "تستخدم الزوايا المتتامة والمتكاملة"], ["Use vertically opposite angles", "تستخدم الزوايا المتقابلة بالرأس"], ["Use the 360° around a point", "تستخدم مجموع ٣٦٠° حول نقطة"]],
    mprep1u4l2: [["Know parallel lines and transversals", "تعرف المستقيمات المتوازية والقاطع"], ["Name corresponding, alternate and co-interior angles", "تسمي الزوايا المتناظرة والمتبادلة والداخلة في جهة واحدة"], ["Find angles between parallel lines", "توجد الزوايا بين مستقيمين متوازيين"], ["Prove two lines are parallel", "تبرهن على توازي مستقيمين"]],
    mprep1u4l3: [["Use the 180° angle sum of a triangle", "تستخدم مجموع زوايا المثلث ١٨٠°"], ["Use the exterior angle rule", "تستخدم قاعدة الزاوية الخارجة"], ["Apply the triangle inequality", "تطبق متباينة المثلث"], ["Find the range of a third side", "توجد مدى طول الضلع الثالث"]],
    mprep1u4l4: [["Use the 360° angle sum of a quadrilateral", "تستخدم مجموع زوايا الشكل الرباعي ٣٦٠°"], ["Know the special quadrilaterals", "تعرف الأشكال الرباعية الخاصة"], ["Use the properties of the parallelogram family", "تستخدم خواص عائلة متوازي الأضلاع"], ["Decide when a parallelogram is a rectangle, rhombus or square", "تحدد متى يكون متوازي الأضلاع مستطيلًا أو معينًا أو مربعًا"]],
    mprep1u4l5: [["Tell convex from concave polygons", "تميز المضلع المحدب من المقعر"], ["Find the angle sum (n − 2) × 180°", "توجد مجموع الزوايا (n − 2) × 180°"], ["Find each angle of a regular polygon", "توجد قياس زاوية المضلع المنتظم"], ["Find axes of symmetry", "توجد محاور التماثل"]],
    mprep1u4l6: [["Plot points and name quadrants", "تمثل النقاط وتحدد الأرباع"], ["Find projections of points and segments", "توجد مساقط النقاط والقطع المستقيمة"], ["Find the midpoint of a segment", "توجد منتصف القطعة المستقيمة"], ["Solve problems with points on the axes", "تحل مسائل على نقاط تقع على المحاور"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return x[1]; }) }; });

  /* ---------- extra hands-on quiz items (order / match / tf) ---------- */
  EX.mprep1u1l1 = [
    { k: "order", q: ["Put the steps for solving x/16 = 21/12 in order.", "رتّب خطوات حل التناسب x/16 = 21/12."],
      items: [["Write the proportion", "اكتب التناسب"], ["Cross-multiply: 12x = 16 × 21", "اضرب تبادليًا: 12x = 16 × 21"], ["Multiply: 12x = 336", "اضرب: 12x = 336"], ["Divide by 12: x = 28", "اقسم على ١٢: x = 28"]],
      off: ["The book's method: write, cross-multiply, multiply, then divide.", "طريقة الكتاب: اكتب ثم اضرب تبادليًا ثم اضرب ثم اقسم."], sto: ["Like Malak at the book fair: set the ratios equal, then find the missing price.", "مثل ملك في معرض الكتاب: ساوِ النسبتين ثم أوجد السعر الناقص."] },
    { k: "tf", a: false, q: ["True or false: points on a straight line that does not pass through the origin show a proportion.", "صواب أم خطأ: النقاط الواقعة على خط مستقيم لا يمر بنقطة الأصل تمثل تناسبًا."],
      off: ["False. For a proportion the line must pass through the origin.", "خطأ؛ في التناسب يجب أن يمر الخط بنقطة الأصل."], sto: ["Zero books cost zero pounds: a proportional graph starts at zero.", "صفر كتب ثمنها صفر جنيه: رسم التناسب يبدأ من الصفر."] }
  ];
  EX.mprep1u1l2 = [
    { k: "match", q: ["Match each situation to its result.", "صِل كل موقف بنتيجته."],
      pairs: [[["4.5 cm on a 1 : 600,000 map", "٤٫٥ سم على خريطة ١ : ٦٠٠٠٠٠"], ["27 km", "٢٧ كم"]], [["3,600 LE in the ratio 3 : 2 (larger share)", "٣٦٠٠ جنيه بنسبة ٣ : ٢ (النصيب الأكبر)"], ["2,160 LE", "٢١٦٠ جنيهًا"]], [["12,750 LE with 8% discount", "١٢٧٥٠ جنيهًا بخصم ٨٪"], ["11,730 LE", "١١٧٣٠ جنيهًا"]], [["520 LE plus 14% tax", "٥٢٠ جنيهًا + ضريبة ١٤٪"], ["592.8 LE", "٥٩٢٫٨ جنيه"]]],
      off: ["4.5 × 6 km; 3/5 × 3,600; 12,750 × 0.92; 520 × 1.14.", "٤٫٥ × ٦ كم، ٣/٥ × ٣٦٠٠، ١٢٧٥٠ × ٠٫٩٢، ٥٢٠ × ١٫١٤."], sto: ["Four errands, one idea: ratio and proportion.", "أربع مهام وفكرة واحدة: النسبة والتناسب."] },
    { k: "tf", a: true, q: ["True or false: a scale drawing of 1 : 600,000 is a minimization.", "صواب أم خطأ: مقياس الرسم ١ : ٦٠٠٠٠٠ تصغير."],
      off: ["True. The scale is less than 1, so the drawing is smaller than reality.", "صواب؛ المقياس أقل من ١، فالرسم أصغر من الحقيقة."], sto: ["All of Egypt fits on one page of Hana's atlas.", "مصر كلها تتسع لصفحة واحدة في أطلس هنا."] }
  ];
  EX.mprep1u1l3 = [
    { k: "match", q: ["Match each symbol to its meaning.", "صِل كل رمز بمعناه."],
      pairs: [[["∈", "∈"], ["belongs to", "ينتمي إلى"]], [["⊂", "⊂"], ["is a subset of", "مجموعة جزئية من"]], [["∪", "∪"], ["union", "الاتحاد"]], [["∩", "∩"], ["intersection", "التقاطع"]], [["∅", "∅"], ["empty set", "المجموعة الخالية"]]],
      off: ["∈ links an element to a set; ⊂ links a set to a set.", "الرمز ∈ يربط عنصرًا بمجموعة، والرمز ⊂ يربط مجموعة بمجموعة."], sto: ["Mazen's club lists use all five symbols.", "قوائم جماعات مازن تستخدم الرموز الخمسة كلها."] },
    { k: "tf", a: true, q: ["True or false: a set with 3 elements has 8 subsets.", "صواب أم خطأ: المجموعة ذات ٣ عناصر لها ٨ مجموعات جزئية."],
      off: ["True: 2³ = 8, including ∅ and the set itself.", "صواب: ‏2³ = 8 بما فيها ∅ والمجموعة نفسها."], sto: ["{4, 6, 8}: three singles, three pairs, the whole set and the empty set.", "{4, 6, 8}: ثلاث أحادية وثلاث ثنائية والمجموعة كلها والخالية."] }
  ];
  EX.mprep1u1l4 = [
    { k: "order", q: ["Order from the smallest to the greatest.", "رتّب من الأصغر إلى الأكبر."],
      items: [["−13", "−١٣"], ["−5", "−٥"], ["−3", "−٣"], ["0", "٠"], ["2", "٢"]],
      off: ["On the number line integers increase from left to right: −13 < −5 < −3 < 0 < 2.", "على خط الأعداد تتزايد الأعداد من اليسار إلى اليمين: −١٣ < −٥ < −٣ < ٠ < ٢."], sto: ["The deeper below sea level, the smaller the number.", "كلما زاد العمق تحت سطح البحر صغر العدد."] },
    { k: "tf", a: false, q: ["True or false: the product of two negative integers is negative.", "صواب أم خطأ: حاصل ضرب عددين صحيحين سالبين سالب."],
      off: ["False. Same signs give a positive product: (−2) × (−7) = 14.", "خطأ؛ الإشارتان المتشابهتان تعطيان حاصل ضرب موجبًا: (−٢) × (−٧) = ١٤."], sto: ["Two 'minus' signs cancel like two U-turns.", "إشارتا السالب تلغي كل منهما الأخرى مثل دورانين للخلف."] }
  ];
  EX.mprep1u1l5 = [
    { k: "order", q: ["Order from the smallest to the greatest.", "رتّب من الأصغر إلى الأكبر."],
      items: [["−1¼", "−1¼"], ["−3/4", "−3/4"], ["0.4", "0.4"], ["2/3", "2/3"], ["1.75", "1.75"]],
      off: ["−1.25 < −0.75 < 0.4 < 0.666... < 1.75.", "−1.25 < −0.75 < 0.4 < 0.666... < 1.75."], sto: ["Change everything to decimals, then line them up.", "حوّل الكل إلى أعداد عشرية ثم رتبها."] },
    { k: "tf", a: false, q: ["True or false: zero has a multiplicative inverse.", "صواب أم خطأ: للصفر معكوس ضربي."],
      off: ["False. Nothing times 0 gives 1, and division by zero is undefined.", "خطأ؛ لا يوجد عدد إذا ضُرب في ٠ أعطى ١، والقسمة على الصفر غير معرّفة."], sto: ["You cannot flip 0/1 into 1/0.", "لا يمكن قلب ٠/١ إلى ١/٠."] }
  ];
  EX.mprep1u2l1 = [
    { k: "order", q: ["Put the steps to simplify 2(3x − 4) − 3(x − 2) in order.", "رتّب خطوات تبسيط 2(3x − 4) − 3(x − 2)."],
      items: [["Expand: 6x − 8 − 3x + 6", "فك الأقواس: 6x − 8 − 3x + 6"], ["Group like terms: (6x − 3x) + (−8 + 6)", "اجمع المتشابهة: (6x − 3x) + (−8 + 6)"], ["Add the coefficients: 3x − 2", "اجمع المعاملات: 3x − 2"]],
      off: ["Distributive property, then commutative and associative properties, then add like terms.", "خاصية التوزيع ثم الإبدال والدمج ثم جمع الحدود المتشابهة."], sto: ["Open the boxes, sort the toys by type, then count each type.", "افتح الصناديق ورتب الألعاب حسب النوع ثم عُدّ كل نوع."] },
    { k: "tf", a: true, q: ["True or false: 3xy and −2yx are like terms.", "صواب أم خطأ: 3xy و −2yx حدان متشابهان."],
      off: ["True. xy = yx, so the variables and powers are the same.", "صواب؛ xy = yx فالمتغيرات والأسس نفسها."], sto: ["Same letters in a different order are still the same twins.", "الحروف نفسها بترتيب مختلف ما زالت التوائم نفسها."] }
  ];
  EX.mprep1u2l2 = [
    { k: "order", q: ["Put the steps for solving 2(x − 3) = 8 in order.", "رتّب خطوات حل المعادلة 2(x − 3) = 8."],
      items: [["2x − 6 = 8", "2x − 6 = 8"], ["2x = 14", "2x = 14"], ["x = 7", "x = 7"], ["Check: 2(7 − 3) = 8", "تحقق: 2(7 − 3) = 8"]],
      off: ["Distribute, add 6 to both sides, divide both sides by 2, then verify.", "وزّع ثم أضف ٦ للطرفين ثم اقسم الطرفين على ٢ ثم تحقق."], sto: ["Hani always checks his taxi bill at the end.", "هاني يتحقق دائمًا من فاتورة التاكسي في النهاية."] },
    { k: "tf", a: true, q: ["True or false: the solution set of an equation is a subset of the substitution set.", "صواب أم خطأ: مجموعة حل المعادلة مجموعة جزئية من مجموعة التعويض."],
      off: ["True. Solutions are chosen only from the allowed values.", "صواب؛ الحلول تُختار من القيم المسموح بها فقط."], sto: ["The winners always come from the players who entered.", "الفائزون دائمًا من اللاعبين المشاركين."] }
  ];
  EX.mprep1u3l1 = [
    { k: "order", q: ["Put the steps of handling data in order.", "رتّب خطوات التعامل مع البيانات."],
      items: [["Identify the question", "حدد السؤال"], ["Collect data", "اجمع البيانات"], ["Organize and present data", "نظّم البيانات واعرضها"], ["Analyze and interpret data", "حلل البيانات وفسرها"], ["Predict and decide", "تنبأ واتخذ القرار"]],
      off: ["These are the five statistics steps in the book.", "هذه خطوات الإحصاء الخمس في الكتاب."], sto: ["Farida's tally sheet sits in the middle of the journey.", "ورقة علامات فريدة في منتصف الرحلة."] },
    { k: "tf", a: false, q: ["True or false: a histogram shows the actual data values.", "صواب أم خطأ: المدرج التكراري يعرض القيم الفعلية للبيانات."],
      off: ["False. It shows only how many values are in each interval.", "خطأ؛ يعرض فقط عدد القيم في كل فئة."], sto: ["The 81− bar says 8 players, not their exact masses.", "عمود ‎81− يقول ٨ لاعبين ولا يذكر كتلهم بالضبط."] }
  ];
  EX.mprep1u3l2 = [
    { k: "match", q: ["Match each data set to its measure.", "صِل كل مجموعة بيانات بمقياسها."],
      pairs: [[["Mean of 7, 4, 11, 8, 5", "وسط ٧، ٤، ١١، ٨، ٥"], ["7", "٧"]], [["Median of 2, 2, 3, 4, 6, 9, 9", "وسيط ٢، ٢، ٣، ٤، ٦، ٩، ٩"], ["4", "٤"]], [["Median of 2, 3, 4, 6, 9, 17", "وسيط ٢، ٣، ٤، ٦، ٩، ١٧"], ["5", "٥"]], [["Mode of 8, 7, 3, 7, 6, 0, 9, 7", "منوال ٨، ٧، ٣، ٧، ٦، ٠، ٩، ٧"], ["7", "٧"]]],
      off: ["35 ÷ 5 = 7; the middle of 7 values is the 4th; (4 + 6) ÷ 2 = 5; 7 appears 3 times.", "٣٥ ÷ ٥ = ٧، ووسط ٧ قيم هو الرابع، و(٤ + ٦) ÷ ٢ = ٥، و٧ تكررت ٣ مرات."], sto: ["The book's three measures, one example each.", "مقاييس الكتاب الثلاثة، لكل منها مثال."] },
    { k: "tf", a: true, q: ["True or false: one extreme value can make the mean misleading.", "صواب أم خطأ: قيمة متطرفة واحدة قد تجعل الوسط الحسابي مضللًا."],
      off: ["True. Then the median is a better measure, like 150 LE in the menu example.", "صواب؛ وعندئذ يكون الوسيط أفضل مثل ١٥٠ جنيهًا في مثال قائمة الطعام."], sto: ["A 20 LE water bottle pulled the 'average meal' down to 132 LE.", "زجاجة ماء بـ ٢٠ جنيهًا سحبت متوسط الوجبة إلى ١٣٢ جنيهًا."] }
  ];
  EX.mprep1u3l3 = [
    { k: "match", q: ["Match each share to its central angle.", "صِل كل نصيب بزاويته المركزية."],
      pairs: [[["25%", "٢٥٪"], ["90°", "٩٠°"]], [["15%", "١٥٪"], ["54°", "٥٤°"]], [["8 of 30 votes", "٨ من ٣٠ صوتًا"], ["96°", "٩٦°"]], [["30% (sleeping)", "٣٠٪ (النوم)"], ["108°", "١٠٨°"]]],
      off: ["central angle = share × 360°.", "الزاوية المركزية = النصيب × ٣٦٠°."], sto: ["Bassem's day and Khaled's votes on one wheel.", "يوم باسم وأصوات خالد على عجلة واحدة."] },
    { k: "tf", a: true, q: ["True or false: the central angles of a pie chart always add up to 360°.", "صواب أم خطأ: مجموع الزوايا المركزية في التمثيل بالقطاعات الدائرية ٣٦٠° دائمًا."],
      off: ["True, because together the sectors make the whole circle (100%).", "صواب، لأن القطاعات معًا تكوّن الدائرة كاملة (١٠٠٪)."], sto: ["All the slices together are the whole pizza.", "كل الشرائح معًا هي البيتزا كاملة."] }
  ];
  EX.mprep1u4l1 = [
    { k: "order", q: ["Order these angle types from the smallest measure to the largest.", "رتّب أنواع الزوايا من الأصغر قياسًا إلى الأكبر."],
      items: [["Zero angle", "زاوية صفرية"], ["Acute angle", "زاوية حادة"], ["Right angle", "زاوية قائمة"], ["Obtuse angle", "زاوية منفرجة"], ["Straight angle", "زاوية مستقيمة"], ["Reflex angle", "زاوية منعكسة"]],
      off: ["0°, then less than 90°, 90°, between 90° and 180°, 180°, then more than 180°.", "٠° ثم أقل من ٩٠° ثم ٩٠° ثم بين ٩٠° و١٨٠° ثم ١٨٠° ثم أكبر من ١٨٠°."], sto: ["Open a door a little more each time.", "افتح الباب قليلًا أكثر في كل مرة."] },
    { k: "tf", a: true, q: ["True or false: two vertically opposite angles are equal in measure.", "صواب أم خطأ: الزاويتان المتقابلتان بالرأس متساويتان في القياس."],
      off: ["True. Both are supplementary to the same angle.", "صواب؛ كل منهما تكمل الزاوية نفسها."], sto: ["Rana's crossroads: 70° across from 70°.", "تقاطع رنا: ٧٠° تقابل ٧٠°."] }
  ];
  EX.mprep1u4l2 = [
    { k: "match", q: ["Lines are parallel. Match each pair of angles to its relation.", "المستقيمان متوازيان. صِل كل زوج من الزوايا بالعلاقة بينهما."],
      pairs: [[["∠1 and ∠6", "∠1 و ∠6"], ["Corresponding: equal", "متناظرتان: متساويتان"]], [["∠3 and ∠6", "∠3 و ∠6"], ["Alternate: equal", "متبادلتان: متساويتان"]], [["∠3 and ∠5", "∠3 و ∠5"], ["Same-side interior: add to 180°", "داخلتان في جهة واحدة: مجموعهما ١٨٠°"]], [["∠1 and ∠7", "∠1 و ∠7"], ["Alternate exterior: equal", "متبادلتان خارجيًا: متساويتان"]]],
      off: ["These are the pairs named in the book's figure.", "هذه هي الأزواج المسماة في شكل الكتاب."], sto: ["Omar's car park lines show every pair.", "خطوط موقف عمر تُظهر كل الأزواج."] },
    { k: "tf", a: true, q: ["True or false: if two corresponding angles are equal, the two lines are parallel.", "صواب أم خطأ: إذا تساوت زاويتان متناظرتان كان المستقيمان متوازيين."],
      off: ["True. This is one of the three ways to prove parallelism.", "صواب؛ هذه إحدى الطرق الثلاث لإثبات التوازي."], sto: ["Equal oar angles keep the Nile rowers' oars parallel.", "تساوي زوايا المجاديف يحافظ على توازيها."] }
  ];
  EX.mprep1u4l3 = [
    { k: "order", q: ["Order the steps of the proof that a triangle's angles add to 180°.", "رتّب خطوات برهان أن مجموع زوايا المثلث ١٨٠°."],
      items: [["Draw a line through A parallel to BC", "ارسم مستقيمًا يمر بالرأس A ويوازي BC"], ["Three angles at A form a straight angle (180°)", "ثلاث زوايا عند A تكوّن زاوية مستقيمة (١٨٠°)"], ["The outer two equal ∠B and ∠C (alternate angles)", "الزاويتان الطرفيتان تساويان ∠B و ∠C (متبادلتان)"], ["So ∠A + ∠B + ∠C = 180°", "إذن ∠A + ∠B + ∠C = 180°"]],
      off: ["The book proves the rule with parallel lines and alternate angles.", "يبرهن الكتاب القاعدة بالمستقيمات المتوازية والزوايا المتبادلة."], sto: ["Nada's torn paper corners line up the same way.", "أركان ورقة ندى المقصوصة تصطف بالطريقة نفسها."] },
    { k: "tf", a: false, q: ["True or false: sticks of 8 cm, 4 cm and 4 cm make a triangle.", "صواب أم خطأ: أعواد أطوالها ٨ سم و٤ سم و٤ سم تكوّن مثلثًا."],
      off: ["False. 4 + 4 = 8 is not greater than 8, so they lie flat.", "خطأ؛ ٤ + ٤ = ٨ ليس أكبر من ٨، فتنطبق الأعواد على خط مستقيم."], sto: ["The two short sticks just reach along the long one.", "العودان القصيران يمتدان على العود الطويل فقط."] }
  ];
  EX.mprep1u4l4 = [
    { k: "match", q: ["Match each shape to a property only it has in this list.", "صِل كل شكل بخاصية ينفرد بها في هذه القائمة."],
      pairs: [[["Trapezium", "شبه المنحرف"], ["Only two parallel sides", "ضلعان فقط متوازيان"]], [["Rectangle", "المستطيل"], ["Equal diagonals, sides not all equal", "قطران متساويان وأضلاع غير متساوية كلها"]], [["Rhombus", "المعين"], ["Perpendicular diagonals, no right angle", "قطران متعامدان ولا زاوية قائمة"]], [["Square", "المربع"], ["Equal and perpendicular diagonals", "قطران متساويان ومتعامدان"]]],
      off: ["The quadrilateral family tree: parallelogram → rectangle and rhombus → square.", "شجرة عائلة الأشكال الرباعية: متوازي الأضلاع ← المستطيل والمعين ← المربع."], sto: ["Karim pushes corners and the shape changes family.", "يدفع كريم الأركان فيغير الشكل عائلته."] },
    { k: "tf", a: true, q: ["True or false: every square is a rhombus.", "صواب أم خطأ: كل مربع معين."],
      off: ["True. A square is a parallelogram with two equal adjacent sides, plus a right angle.", "صواب؛ المربع متوازي أضلاع فيه ضلعان متجاوران متساويان، وفيه أيضًا زاوية قائمة."], sto: ["A square is a rhombus that stands up straight.", "المربع معين يقف معتدلًا."] }
  ];
  EX.mprep1u4l5 = [
    { k: "match", q: ["Match each regular polygon to its interior angle.", "صِل كل مضلع منتظم بقياس زاويته الداخلة."],
      pairs: [[["Equilateral triangle", "مثلث متساوي الأضلاع"], ["60°", "٦٠°"]], [["Square", "مربع"], ["90°", "٩٠°"]], [["Regular pentagon", "خماسي منتظم"], ["108°", "١٠٨°"]], [["Regular hexagon", "سداسي منتظم"], ["120°", "١٢٠°"]]],
      off: ["Each angle = (n − 2) × 180° ÷ n.", "قياس كل زاوية = (n − 2) × 180° ÷ n."], sto: ["Mariam's honeycomb uses the 120° one.", "قرص عسل مريم يستخدم زاوية ١٢٠°."] },
    { k: "tf", a: true, q: ["True or false: a regular polygon has as many axes of symmetry as sides.", "صواب أم خطأ: عدد محاور تماثل المضلع المنتظم يساوي عدد أضلاعه."],
      off: ["True: an equilateral triangle has 3, a square 4, a regular pentagon 5.", "صواب: للمثلث المتساوي الأضلاع ٣ وللمربع ٤ وللخماسي المنتظم ٥."], sto: ["Mariam folds her paper hexagon 6 different ways.", "تطوي مريم سداسيها الورقي بست طرق مختلفة."] }
  ];
  EX.mprep1u4l6 = [
    { k: "match", q: ["Match each point to where it lies.", "صِل كل نقطة بموقعها."],
      pairs: [[["(3, −4)", "(3, −4)"], ["4th quadrant", "الربع الرابع"]], [["(−2, 3)", "(−2, 3)"], ["2nd quadrant", "الربع الثاني"]], [["(0, 5)", "(0, 5)"], ["y-axis", "محور الصادات"]], [["(−3, 0)", "(−3, 0)"], ["x-axis", "محور السينات"]]],
      off: ["Look at the signs; a zero coordinate puts the point on an axis.", "انظر إلى الإشارات؛ والإحداثي الصفري يضع النقطة على محور."], sto: ["Adham's map has villages, a tower and two roads along the axes.", "خريطة أدهم فيها قرى وبرج وطريقان على المحورين."] },
    { k: "tf", a: false, q: ["True or false: the projection of (−3, 5) on the y-axis is (−3, 0).", "صواب أم خطأ: مسقط النقطة (−3, 5) على محور الصادات هو (−3, 0)."],
      off: ["False. On the y-axis keep y and make x zero: (0, 5). (−3, 0) is the projection on the x-axis.", "خطأ؛ على محور الصادات نُبقي y ونجعل x صفرًا: (0, 5)، أما (−3, 0) فهو المسقط على محور السينات."], sto: ["Slide the point sideways to the y-axis, not down.", "حرّك النقطة أفقيًا إلى محور الصادات، لا إلى أسفل."] }
  ];

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function ln(x1, y1, x2, y2, col, w, dash) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || "var(--ink)") + '" stroke-width="' + (w || 2) + '"' + (dash ? ' stroke-dasharray="' + dash + '"' : "") + "/>"; }
  function ci(x, y, r, f, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2"' : "") + "/>"; }
  function rc(x, y, w, h, f, st) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2"' : "") + "/>"; }
  function pg(pts, f, st) { return '<polygon points="' + pts + '" fill="' + f + '" stroke="' + (st || "var(--ink)") + '" stroke-width="2.5"/>'; }
  function sec(cx, cy, r, a1, a2, f) { var p = function (a) { return [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)]; }, s = p(a1), e = p(a2); return '<path d="M' + cx + "," + cy + " L" + s[0].toFixed(1) + "," + s[1].toFixed(1) + " A" + r + "," + r + " 0 " + (a2 - a1 > 180 ? 1 : 0) + ",1 " + e[0].toFixed(1) + "," + e[1].toFixed(1) + ' Z" fill="' + f + '"/>'; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }

  D.mprep1u1l1 = {
    title: ["Cross multiplication and the graph", "الضرب التبادلي والرسم البياني"],
    svg: function () {
      var s = tx(70, 95, "4", ink, 30) + ln(50, 105, 90, 105) + tx(70, 140, "12", ink, 30) + tx(115, 120, "=", ink, 30) + tx(160, 95, "7", ink, 30) + ln(140, 115 - 10, 180, 105) + tx(160, 140, "21", ink, 30);
      s += '<path d="M82,82 L150,138" stroke="#f97316" stroke-width="2" fill="none"/><path d="M82,138 L150,82" stroke="#3b82f6" stroke-width="2" fill="none"/>';
      s += tx(115, 185, "4 × 21 = 84 = 12 × 7", ink, 14);
      s += ln(230, 200, 380, 200) + ln(230, 200, 230, 40) + ln(230, 200, 370, 50, "#16a34a", 3) + ln(230, 160, 370, 70, "#ef4444", 2, "6 4");
      for (var i = 1; i <= 3; i++) s += ci(230 + i * 40, 200 - i * 40 * 150 / 140, 5, "#16a34a");
      s += tx(300, 222, "time", mut, 11) + tx(214, 120, "distance", mut, 11);
      return g(s);
    },
    spots: [[38, 92, ["Extremes", "الطرفان"], ["4 and 21 are the first and last terms of the proportion.", "٤ و٢١ هما الحدان الأول والأخير في التناسب."]],
      [38, 138, ["Means", "الوسطان"], ["12 and 7 are the middle terms.", "١٢ و٧ هما الحدان الأوسطان."]],
      [115, 206, ["Cross products", "حاصلا الضرب التبادلي"], ["Product of extremes = product of means, so the ratios form a proportion.", "حاصل ضرب الطرفين = حاصل ضرب الوسطين، إذن النسبتان تكوّنان تناسبًا."]],
      [300, 125, ["Line through the origin", "خط يمر بنقطة الأصل"], ["Points on a straight line through the origin: the quantities are proportional.", "نقاط على خط مستقيم يمر بنقطة الأصل: الكميتان متناسبتان."]],
      [330, 100, ["Line missing the origin", "خط لا يمر بنقطة الأصل"], ["A straight line that does not pass through the origin is not a proportion.", "الخط المستقيم الذي لا يمر بنقطة الأصل لا يمثل تناسبًا."]]]
  };
  D.mprep1u1l2 = {
    title: ["A map and its scale", "خريطة ومقياس رسمها"],
    svg: function () {
      var s = rc(20, 20, 360, 150, "rgba(253,230,138,.45)") + '<path d="M90,170 C70,120 100,80 80,20" stroke="#3b82f6" stroke-width="5" fill="none" opacity=".6"/>';
      s += ci(100, 130, 7, "#ef4444") + tx(100, 152, "Cairo", ink, 12) + ci(300, 60, 7, "#ef4444") + tx(300, 48, "City B", ink, 12) + ln(100, 130, 300, 60, "var(--ink)", 2, "6 4") + tx(205, 82, "4.5 cm", ink, 13);
      s += ln(40, 205, 240, 205) + [0, 1, 2, 3, 4].map(function (i) { return ln(40 + i * 50, 199, 40 + i * 50, 211) + tx(40 + i * 50, 228, String(i * 25), mut, 11); }).join("") + tx(268, 209, "km", mut, 11);
      s += rc(282, 186, 104, 40, "var(--card)", "var(--line)") + tx(334, 211, "1 : 600,000", ink, 12);
      return g(s);
    },
    spots: [[232, 104, ["Length in the drawing", "الطول في الرسم"], ["Measured on the map with a ruler: 4.5 cm.", "يقاس على الخريطة بالمسطرة: ٤٫٥ سم."]],
      [372, 178, ["Scale drawing", "مقياس الرسم"], ["1 cm on the map is 600,000 cm = 6 km in reality.", "كل ١ سم على الخريطة يمثل ٦٠٠٠٠٠ سم = ٦ كم في الحقيقة."]],
      [140, 205, ["Scale bar", "مقياس الرسم الخطي"], ["Every 2 cm here stands for 25 km, another way to write a scale.", "كل جزء هنا يمثل ٢٥ كم، وهي طريقة أخرى لكتابة المقياس."]],
      [300, 60, ["Real distance", "المسافة الحقيقية"], ["4.5 × 600,000 = 2,700,000 cm = 27 km.", "٤٫٥ × ٦٠٠٠٠٠ = ٢٧٠٠٠٠٠ سم = ٢٧ كم."]],
      [60, 40, ["Minimization", "تصغير"], ["The scale is less than 1, so the map is smaller than reality.", "المقياس أقل من ١، فالخريطة أصغر من الحقيقة."]]]
  };
  D.mprep1u1l3 = {
    title: ["Venn diagram of A and B", "شكل فن للمجموعتين A و B"],
    svg: function () {
      var s = rc(20, 15, 360, 210, "var(--card)", "var(--line)") + tx(36, 36, "U", mut, 13);
      s += '<circle cx="160" cy="120" r="80" fill="rgba(59,130,246,.15)" stroke="#3b82f6" stroke-width="2.5"/><circle cx="240" cy="120" r="80" fill="rgba(249,115,22,.15)" stroke="#f97316" stroke-width="2.5"/>';
      s += tx(120, 44, "A (÷2)", 'style="fill:#3b82f6"', 13) + tx(282, 44, "B (÷3)", 'style="fill:#f97316"', 13);
      s += tx(125, 105, "4", ink, 18) + tx(125, 145, "8", ink, 18) + tx(200, 105, "6", ink, 18) + tx(200, 145, "12", ink, 18) + tx(275, 125, "9", ink, 18) + tx(50, 205, "5", ink, 18) + tx(350, 205, "7", ink, 18);
      return g(s);
    },
    spots: [[125, 125, ["A only", "A فقط"], ["4 and 8 are divisible by 2 but not by 3.", "٤ و٨ تقبل القسمة على ٢ ولا تقبلها على ٣."]],
      [200, 125, ["A ∩ B", "A ∩ B"], ["The overlap: 6 and 12 are divisible by 2 and by 3.", "المنطقة المشتركة: ٦ و١٢ تقبل القسمة على ٢ وعلى ٣."]],
      [275, 152, ["B only", "B فقط"], ["9 is divisible by 3 but not by 2.", "٩ يقبل القسمة على ٣ ولا يقبلها على ٢."]],
      [200, 60, ["A ∪ B", "A ∪ B"], ["Everything inside either circle: {4, 6, 8, 9, 12}.", "كل ما داخل أي دائرة: {4, 6, 8, 9, 12}."]],
      [74, 200, ["Outside A and B", "خارج A و B"], ["5 and 7 are in the universal set but in neither circle.", "٥ و٧ في المجموعة الشاملة وليسا في أي دائرة."]]]
  };
  D.mprep1u1l4 = {
    title: ["2 + (−4) on the number line", "٢ + (−٤) على خط الأعداد"],
    svg: function () {
      var s = ln(20, 170, 380, 170), i;
      for (i = -7; i <= 4; i++) s += ln(240 + i * 30, 164, 240 + i * 30, 176) + tx(240 + i * 30, 194, String(i).replace("-", "−"), mut, 12);
      s += '<path d="M240,164 Q270,120 300,164" stroke="#3b82f6" stroke-width="3" fill="none"/><path d="M300,164 Q240,80 180,164" stroke="#f97316" stroke-width="3" fill="none"/>' + ci(180, 170, 7, "#16a34a");
      s += ci(60, 50, 12, "#facc15") + tx(60, 55, "+", ink, 15) + ci(90, 50, 12, "#facc15") + tx(90, 55, "+", ink, 15);
      for (i = 0; i < 4; i++) s += ci(60 + i * 30, 85, 12, "#ef4444") + tx(60 + i * 30, 90, "−", 'style="fill:#fff"', 15);
      s += ln(60, 62, 60, 73, "var(--muted)") + ln(90, 62, 90, 73, "var(--muted)");
      return g(s);
    },
    spots: [[240, 170, ["Start at zero", "ابدأ من الصفر"], ["Every number-line sum starts at 0.", "كل عملية جمع على خط الأعداد تبدأ من الصفر."]],
      [270, 135, ["Add +2: move right", "أضف +٢: تحرك يمينًا"], ["A positive integer moves you to the right.", "العدد الموجب يحركك إلى اليمين."]],
      [240, 112, ["Add −4: move left", "أضف −٤: تحرك يسارًا"], ["A negative integer moves you to the left.", "العدد السالب يحركك إلى اليسار."]],
      [180, 170, ["Result −2", "الناتج −٢"], ["2 + (−4) = −2: opposite signs, the larger absolute value is negative.", "٢ + (−٤) = −٢: إشارتان مختلفتان والأكبر قيمة مطلقة سالب."]],
      [75, 68, ["Zero pairs", "الأزواج الصفرية"], ["Each +1 with a −1 makes 0; two −1 chips are left.", "كل +١ مع −١ يكوّنان صفرًا، ويتبقى بطاقتان −١."]]]
  };
  D.mprep1u1l5 = {
    title: ["Rational numbers on the number line", "الأعداد النسبية على خط الأعداد"],
    svg: function () {
      var s = ln(20, 130, 380, 130), i;
      for (i = 0; i <= 8; i++) s += ln(40 + i * 40, i % 4 ? 124 : 118, 40 + i * 40, i % 4 ? 136 : 142);
      s += tx(40, 162, "−1", ink, 14) + tx(200, 162, "0", ink, 14) + tx(360, 162, "1", ink, 14);
      s += ci(80, 130, 8, "#3b82f6") + tx(80, 105, "−3/4", 'style="fill:#3b82f6"', 14) + ci(264, 130, 8, "#f97316") + tx(264, 105, "0.4 = 2/5", 'style="fill:#f97316"', 13) + ci(307, 130, 8, "#22c55e") + tx(318, 78, "2/3 = 0.6̅", 'style="fill:#16a34a"', 13);
      s += tx(200, 210, "Q = {a/b : a, b ∈ Z, b ≠ 0}", ink, 14);
      return g(s);
    },
    spots: [[80, 130, ["A negative fraction", "كسر سالب"], ["−3/4 = −0.75 lies three quarters of the way from 0 to −1.", "−3/4 = −0.75 يقع على بعد ثلاثة أرباع المسافة من ٠ إلى −١."]],
      [264, 130, ["Finite decimal", "كسر عشري منته"], ["2/5 = 0.4 = 40%: the division ends.", "2/5 = 0.4 = 40%: القسمة تنتهي."]],
      [307, 130, ["Recurring decimal", "كسر عشري دوري"], ["2/3 = 0.666...: the 6 repeats forever, written with a bar.", "2/3 = 0.666...: الرقم ٦ يتكرر بلا نهاية ويُكتب بشرطة فوقه."]],
      [200, 228, ["The set Q", "المجموعة Q"], ["Every number written a/b with integers a, b and b ≠ 0.", "كل عدد يُكتب a/b حيث a و b عددان صحيحان و b ≠ 0."]]]
  };
  D.mprep1u2l1 = {
    title: ["Parts of an algebraic expression", "أجزاء المقدار الجبري"],
    svg: function () {
      var s = tx(200, 70, "4x + 3y − 8xy − 6", ink, 30);
      s += rc(40, 100, 70, 26, "rgba(59,130,246,.2)") + tx(75, 118, "term", 'style="fill:#1d4ed8"', 12) + rc(190, 100, 90, 26, "rgba(249,115,22,.2)") + tx(235, 118, "coefficient −8", 'style="fill:#c2410c"', 11) + rc(300, 100, 80, 26, "rgba(34,197,94,.2)") + tx(340, 118, "constant", 'style="fill:#15803d"', 12);
      s += tx(200, 175, "2(3x − 4) − 3(x − 2) = 3x − 2", ink, 16) + tx(200, 210, "C = 5/9 (F − 32)", mut, 15);
      return g(s);
    },
    spots: [[75, 36, ["Algebraic term", "حد جبري"], ["4x: a coefficient times a variable. The expression has four terms.", "4x: معامل في متغير، والمقدار له أربعة حدود."]],
      [235, 36, ["Coefficient", "المعامل"], ["In −8xy the coefficient is −8, sign included.", "في −8xy المعامل −٨ بإشارته."]],
      [345, 36, ["Constant term", "الحد الثابت"], ["−6 has no variable.", "−٦ ليس به متغير."]],
      [40, 170, ["Simplifying", "التبسيط"], ["Expand with the distributive property, then add like terms.", "فك الأقواس بخاصية التوزيع ثم اجمع الحدود المتشابهة."]],
      [110, 205, ["A formula", "صيغة رياضية"], ["A rule written mathematically: Celsius from Fahrenheit.", "قاعدة مكتوبة رياضيًا: الدرجة السيليزية من الفهرنهايت."]]]
  };
  D.mprep1u2l2 = {
    title: ["A balance for 2x + 1 = 7", "ميزان للمعادلة 2x + 1 = 7"],
    svg: function () {
      var s = pg("200,70 180,220 220,220", "var(--muted)", "var(--muted)") + ln(70, 70, 330, 70, "var(--ink)", 6) + ci(200, 70, 6, "var(--ink)");
      s += ln(70, 70, 40, 150, "var(--muted)", 1.5) + ln(70, 70, 120, 150, "var(--muted)", 1.5) + ln(30, 150, 130, 150, "var(--ink)", 4);
      s += ln(330, 70, 280, 150, "var(--muted)", 1.5) + ln(330, 70, 380, 150, "var(--muted)", 1.5) + ln(270, 150, 390, 150, "var(--ink)", 4);
      s += rc(42, 122, 26, 26, "#3b82f6") + tx(55, 140, "x", 'style="fill:#fff"', 14) + rc(72, 122, 26, 26, "#3b82f6") + tx(85, 140, "x", 'style="fill:#fff"', 14) + rc(102, 128, 20, 20, "#f59e0b") + tx(112, 143, "1", 'style="fill:#fff"', 11);
      for (var i = 0; i < 7; i++) s += rc(274 + (i % 4) * 28, i < 4 ? 128 : 106, 20, 20, "#f59e0b") + tx(284 + (i % 4) * 28, i < 4 ? 143 : 121, "1", 'style="fill:#fff"', 11);
      s += tx(200, 30, "2x + 1 = 7  →  2x = 6  →  x = 3", ink, 15);
      return g(s);
    },
    spots: [[80, 135, ["Left side", "الطرف الأيسر"], ["Two unknown boxes and one unit: 2x + 1.", "صندوقان مجهولان ووحدة واحدة: 2x + 1."]],
      [330, 125, ["Right side", "الطرف الأيمن"], ["Seven units: 7.", "سبع وحدات: ٧."]],
      [200, 70, ["Balanced", "متزن"], ["Equal sides keep the beam level, like the = sign.", "تساوي الطرفين يبقي الذراع أفقيًا مثل علامة =."]],
      [200, 50, ["Properties of equality", "خواص التساوي"], ["Take 1 from both sides, then divide both sides by 2: x = 3.", "اطرح ١ من الطرفين ثم اقسم الطرفين على ٢: x = 3."]]]
  };
  D.mprep1u3l1 = {
    title: ["Frequency bar graph of 25 marks", "أعمدة تكرارية لـ ٢٥ درجة"],
    svg: function () {
      var f = [2, 2, 4, 9, 5, 3], s = ln(50, 200, 380, 200) + ln(50, 200, 50, 30), i;
      for (i = 0; i <= 9; i += 3) s += tx(36, 204 - i * 18, String(i), mut, 11) + ln(50, 200 - i * 18, 380, 200 - i * 18, "var(--line)", 1);
      for (i = 0; i < 6; i++) s += rc(68 + i * 52, 200 - f[i] * 18, 34, f[i] * 18, i === 3 ? "#f97316" : (i > 3 ? "#22c55e" : "#3b82f6")) + tx(85 + i * 52, 218, String(i + 3), ink, 13) + tx(85 + i * 52, 194 - f[i] * 18, String(f[i]), ink, 12);
      return g(s);
    },
    spots: [[241, 80, ["The mode", "المنوال"], ["The tallest bar: 6 marks, got by 9 students.", "أطول عمود: الدرجة ٦ وحصل عليها ٩ طلاب."]],
      [318, 150, ["At least 7 marks", "٧ درجات على الأقل"], ["The 7 and 8 bars: 5 + 3 = 8 students.", "عمودا ٧ و٨: ٥ + ٣ = ٨ طلاب."]],
      [50, 200, ["Axis starts at zero", "المحور يبدأ من الصفر"], ["An honest graph starts at 0 with an equal scale.", "الرسم الأمين يبدأ من ٠ بتدريج متساوٍ."]],
      [110, 232, ["Values on the x-axis", "القيم على المحور الأفقي"], ["A bar graph shows each actual mark, from 3 to 8.", "الأعمدة البيانية تعرض كل درجة فعلية من ٣ إلى ٨."]]]
  };
  D.mprep1u3l2 = {
    title: ["Levelling to the mean", "التسوية إلى الوسط"],
    svg: function () {
      var v = [7, 4, 11, 8, 5], s = ln(40, 200, 380, 200), i;
      for (i = 0; i < 5; i++) s += rc(60 + i * 64, 200 - v[i] * 14, 40, v[i] * 14, "#3b82f6") + tx(80 + i * 64, 194 - v[i] * 14, String(v[i]), ink, 13);
      s += ln(40, 200 - 7 * 14, 380, 200 - 7 * 14, "#16a34a", 3, "8 5") + tx(350, 92, "mean 7", 'style="fill:#16a34a"', 13);
      return g(s);
    },
    spots: [[208, 80, ["Above the mean", "فوق الوسط"], ["11 gives 4 to the short bars.", "العمود ١١ يعطي ٤ للأعمدة القصيرة."]],
      [144, 160, ["Below the mean", "تحت الوسط"], ["4 receives 3 to reach the level.", "العمود ٤ يأخذ ٣ ليصل إلى المستوى."]],
      [320, 116, ["The mean", "الوسط الحسابي"], ["(7 + 4 + 11 + 8 + 5) ÷ 5 = 35 ÷ 5 = 7.", "(٧ + ٤ + ١١ + ٨ + ٥) ÷ ٥ = ٣٥ ÷ ٥ = ٧."]],
      [80, 140, ["Median", "الوسيط"], ["Arranged 4, 5, 7, 8, 11: the middle value is also 7.", "بالترتيب ٤، ٥، ٧، ٨، ١١: القيمة الوسطى ٧ أيضًا."]]]
  };
  D.mprep1u3l3 = {
    title: ["Class election pie chart", "التمثيل بالقطاعات لانتخابات الفصل"],
    svg: function () {
      var s = sec(140, 120, 95, 0, 96, "#3b82f6") + sec(140, 120, 95, 96, 240, "#f97316") + sec(140, 120, 95, 240, 360, "#22c55e");
      s += tx(185, 95, "96°", 'style="fill:#fff"', 13) + tx(160, 175, "144°", 'style="fill:#fff"', 13) + tx(95, 100, "120°", 'style="fill:#fff"', 13);
      s += tx(310, 70, "Khaled 8", 'style="fill:#3b82f6"', 14) + tx(310, 100, "Anas 12", 'style="fill:#f97316"', 14) + tx(310, 130, "Hamza 10", 'style="fill:#16a34a"', 14) + tx(310, 175, "8/30 × 360° = 96°", ink, 12);
      return g(s);
    },
    spots: [[199, 66, ["Khaled's sector", "قطاع خالد"], ["8 of 30 votes: 8/30 × 360° = 96°.", "٨ من ٣٠ صوتًا: 8/30 × 360° = 96°."]],
      [157, 198, ["Anas's sector", "قطاع أنس"], ["12/30 × 360° = 144°, the largest sector.", "12/30 × 360° = 144°، أكبر قطاع."]],
      [71, 80, ["Hamza's sector", "قطاع حمزة"], ["The remaining 120° = 10 votes.", "الـ ١٢٠° الباقية = ١٠ أصوات."]],
      [140, 120, ["Central angle", "الزاوية المركزية"], ["Angles at the centre add up to 360°.", "مجموع الزوايا عند المركز ٣٦٠°."]],
      [310, 196, ["The rule", "القاعدة"], ["central angle = frequency ÷ total × 360°.", "الزاوية المركزية = التكرار ÷ المجموع × ٣٦٠°."]]]
  };
  D.mprep1u4l1 = {
    title: ["Two intersecting roads", "طريقان متقاطعان"],
    svg: function () {
      var s = ln(40, 120, 360, 120, "var(--ink)", 3) + ln(122, 220, 278, 20, "#f97316", 3) + ci(200, 120, 5, "var(--ink)");
      s += tx(30, 125, "A", ink, 14) + tx(372, 125, "B", ink, 14) + tx(115, 232, "C", ink, 14) + tx(285, 16, "D", ink, 14) + tx(210, 140, "M", ink, 12);
      s += tx(250, 108, "70°", 'style="fill:#c2410c"', 14) + tx(150, 145, "70°", 'style="fill:#c2410c"', 14) + tx(170, 92, "110°", 'style="fill:#1d4ed8"', 14) + tx(232, 156, "110°", 'style="fill:#1d4ed8"', 14);
      return g(s);
    },
    spots: [[275, 100, ["∠BMD = 70°", "∠BMD = 70°"], ["Given angle between the two roads.", "الزاوية المعلومة بين الطريقين."]],
      [130, 160, ["Vertically opposite", "متقابلة بالرأس"], ["∠AMC is opposite ∠BMD, so it is also 70°.", "‏∠AMC تقابل ∠BMD بالرأس، فقياسها ٧٠° أيضًا."]],
      [135, 95, ["Supplementary adjacent", "متجاورتان متكاملتان"], ["On the straight line AB: 180° − 70° = 110°.", "على الخط المستقيم AB: ١٨٠° − ٧٠° = ١١٠°."]],
      [200, 120, ["Angles at a point", "زوايا حول نقطة"], ["70 + 110 + 70 + 110 = 360°.", "٧٠ + ١١٠ + ٧٠ + ١١٠ = ٣٦٠°."]]]
  };
  D.mprep1u4l2 = {
    title: ["A transversal cutting two parallel lines", "قاطع لمستقيمين متوازيين"],
    svg: function () {
      var s = ln(20, 80, 380, 80, "#3b82f6", 3) + ln(20, 170, 380, 170, "#3b82f6", 3) + ln(150, 230, 260, 10, "#f97316", 3);
      s += tx(30, 70, "m", 'style="fill:#3b82f6"', 14) + tx(30, 160, "p", 'style="fill:#3b82f6"', 14) + tx(360, 75, "▶", 'style="fill:#3b82f6"', 10) + tx(360, 165, "▶", 'style="fill:#3b82f6"', 10);
      var pos = [[205, 66, "1"], [252, 66, "2"], [240, 100, "3"], [195, 100, "4"], [207, 156, "5"], [160, 156, "6"], [196, 190, "7"], [148, 190, "8"]];
      pos.forEach(function (p) { s += ci(p[0], p[1] - 4, 10, "var(--card)", "var(--line)") + tx(p[0], p[1], p[2], ink, 12); });
      return g(s);
    },
    spots: [[120, 60, ["Corresponding: ∠1 and ∠6", "متناظرتان: ∠1 و ∠6"], ["Same position at each crossing; equal when m ∥ p.", "في الموضع نفسه عند كل تقاطع، ومتساويتان عند التوازي."]],
      [292, 110, ["Alternate: ∠3 and ∠6", "متبادلتان: ∠3 و ∠6"], ["Interior, on opposite sides of the transversal: equal.", "داخلتان في جهتين مختلفتين من القاطع: متساويتان."]],
      [246, 132, ["Co-interior: ∠3 and ∠5", "داخلتان في جهة واحدة: ∠3 و ∠5"], ["Interior, same side of the transversal: they add to 180°.", "داخلتان في جهة واحدة من القاطع: مجموعهما ١٨٠°."]],
      [270, 20, ["Transversal", "القاطع"], ["A line cutting the two parallel lines; it makes 8 angles.", "مستقيم يقطع المستقيمين المتوازيين ويكوّن ٨ زوايا."]],
      [360, 120, ["Parallel lines", "مستقيمان متوازيان"], ["The arrows show m ∥ p: they never meet.", "الأسهم تعني m ∥ p: لا يلتقيان أبدًا."]]]
  };
  D.mprep1u4l3 = {
    title: ["Triangle with an exterior angle", "مثلث وزاوية خارجة"],
    svg: function () {
      var s = pg("60,190 260,190 140,50", "rgba(59,130,246,.12)") + ln(260, 190, 370, 190, "var(--muted)", 2, "6 4");
      s += tx(48, 205, "A", ink, 14) + tx(258, 210, "C", ink, 14) + tx(140, 40, "B", ink, 14);
      s += tx(92, 180, "62°", 'style="fill:#1d4ed8"', 13) + tx(140, 80, "49°", 'style="fill:#c2410c"', 13) + tx(232, 180, "69°", 'style="fill:#15803d"', 13) + tx(300, 176, "111°", 'style="fill:#7c3aed"', 13);
      s += tx(300, 60, "62 + 49 + 69 = 180", ink, 12) + tx(300, 85, "111 = 62 + 49", 'style="fill:#7c3aed"', 12);
      return g(s);
    },
    spots: [[140, 140, ["Angle sum", "مجموع الزوايا"], ["62° + 49° + 69° = 180°, true for every triangle.", "٦٢° + ٤٩° + ٦٩° = ١٨٠° لكل مثلث."]],
      [322, 196, ["Exterior angle", "الزاوية الخارجة"], ["Between side BC and the extension of AC.", "بين الضلع BC وامتداد AC."]],
      [300, 104, ["Exterior angle rule", "قاعدة الزاوية الخارجة"], ["It equals the two non-adjacent interior angles: 62° + 49° = 111°.", "تساوي الزاويتين الداخلتين غير المجاورتين: ٦٢° + ٤٩° = ١١١°."]],
      [160, 200, ["Triangle inequality", "متباينة المثلث"], ["AB + BC > AC: any two sides are longer than the third.", "AB + BC > AC: مجموع أي ضلعين أكبر من الثالث."]]]
  };
  D.mprep1u4l4 = {
    title: ["The quadrilateral family tree", "شجرة عائلة الأشكال الرباعية"],
    svg: function () {
      function box(x, y, w, t1, col) { return rc(x, y, w, 30, col) + tx(x + w / 2, y + 20, t1, 'style="fill:#fff"', 12); }
      var s = ln(200, 45, 110, 75) + ln(200, 45, 290, 75) + ln(290, 105, 230, 135) + ln(290, 105, 350, 135) + ln(230, 165, 290, 195) + ln(350, 165, 290, 195);
      s += box(140, 15, 120, "Quadrilateral", "#64748b") + box(50, 75, 120, "Trapezium", "#0d9488") + box(230, 75, 120, "Parallelogram", "#7c3aed") + box(180, 135, 100, "Rectangle", "#3b82f6") + box(300, 135, 90, "Rhombus", "#f97316") + box(245, 195, 90, "Square", "#16a34a");
      return g(s);
    },
    spots: [[258, 15, ["Quadrilateral", "الشكل الرباعي"], ["Four sides; the angles add to 360°.", "أربعة أضلاع ومجموع زواياه ٣٦٠°."]],
      [168, 75, ["Trapezium", "شبه المنحرف"], ["Only two parallel sides.", "ضلعان فقط متوازيان."]],
      [348, 75, ["Parallelogram", "متوازي الأضلاع"], ["Opposite sides parallel and equal; diagonals bisect each other.", "الأضلاع المتقابلة متوازية ومتساوية، والقطران ينصف كل منهما الآخر."]],
      [278, 135, ["Rectangle", "المستطيل"], ["A parallelogram with a right angle: equal diagonals.", "متوازي أضلاع فيه زاوية قائمة: قطران متساويان."]],
      [388, 135, ["Rhombus", "المعين"], ["A parallelogram with equal adjacent sides: perpendicular diagonals.", "متوازي أضلاع فيه ضلعان متجاوران متساويان: قطران متعامدان."]],
      [333, 195, ["Square", "المربع"], ["Both a rectangle and a rhombus.", "مستطيل ومعين معًا."]]]
  };
  D.mprep1u4l5 = {
    title: ["A regular hexagon split from one vertex", "سداسي منتظم مقسم من رأس واحد"],
    svg: function () {
      var P = [], i, s = "";
      for (i = 0; i < 6; i++) P.push([150 + 90 * Math.cos(Math.PI / 6 + i * Math.PI / 3 - Math.PI / 2), 125 + 90 * Math.sin(Math.PI / 6 + i * Math.PI / 3 - Math.PI / 2)]);
      var cols = ["rgba(59,130,246,.3)", "rgba(249,115,22,.3)", "rgba(34,197,94,.3)", "rgba(168,85,247,.3)"];
      for (i = 1; i < 5; i++) s += pg(P[0].join(",") + " " + P[i].join(",") + " " + P[i + 1].join(","), cols[i - 1], "var(--ink)");
      s += ln(150, 25, 150, 225, "#ef4444", 1.5, "5 4");
      s += tx(320, 70, "4 triangles", ink, 14) + tx(320, 100, "4 × 180° = 720°", ink, 13) + tx(320, 130, "720° ÷ 6 = 120°", 'style="fill:#0d9488"', 13) + tx(320, 160, "6 axes", 'style="fill:#ef4444"', 13);
      return g(s);
    },
    spots: [[150, 125, ["Triangles from one vertex", "مثلثات من رأس واحد"], ["n − 2 = 4 triangles for 6 sides.", "عدد المثلثات n − 2 = 4 للأضلاع الستة."]],
      [388, 100, ["Angle sum", "مجموع الزوايا"], ["(6 − 2) × 180° = 720°.", "(٦ − ٢) × ١٨٠° = ٧٢٠°."]],
      [388, 130, ["Each interior angle", "كل زاوية داخلة"], ["Regular: 720° ÷ 6 = 120°, the honeycomb angle.", "منتظم: ٧٢٠° ÷ ٦ = ١٢٠°، زاوية قرص العسل."]],
      [150, 30, ["Axis of symmetry", "محور التماثل"], ["One of the 6 fold lines of a regular hexagon.", "أحد خطوط الطي الستة للسداسي المنتظم."]]]
  };
  D.mprep1u4l6 = {
    title: ["Quadrants, projections and a midpoint", "الأرباع والمساقط والمنتصف"],
    svg: function () {
      var s = "", i, u = 20, cx = 200, cy = 125;
      for (i = -5; i <= 5; i++) s += ln(cx + i * u, cy - 5 * u, cx + i * u, cy + 5 * u, "var(--line)", 1) + ln(cx - 5 * u, cy + i * u, cx + 5 * u, cy + i * u, "var(--line)", 1);
      s += ln(cx - 5 * u, cy, cx + 5 * u, cy, "var(--ink)", 2) + ln(cx, cy - 5 * u, cx, cy + 5 * u, "var(--ink)", 2);
      s += tx(cx + 70, cy - 80, "1st (+,+)", mut, 11) + tx(cx - 70, cy - 80, "2nd (−,+)", mut, 11) + tx(cx - 70, cy + 92, "3rd (−,−)", mut, 11) + tx(cx + 70, cy + 92, "4th (+,−)", mut, 11);
      s += ln(cx + 2 * u, cy - 3 * u, cx + 2 * u, cy, "#f97316", 1.5, "4 3") + ln(cx + 2 * u, cy - 3 * u, cx, cy - 3 * u, "#f97316", 1.5, "4 3");
      s += ci(cx + 2 * u, cy - 3 * u, 6, "#3b82f6") + tx(cx + 2 * u + 26, cy - 3 * u - 6, "A(2, 3)", ink, 12) + ci(cx + 2 * u, cy, 4, "#f97316") + ci(cx, cy - 3 * u, 4, "#f97316");
      s += ci(cx - 4 * u, cy + 1 * u, 6, "#ef4444") + tx(cx - 4 * u - 6, cy + u + 20, "B(−4, −1)", ink, 12) + ln(cx + 2 * u, cy - 3 * u, cx - 4 * u, cy + u, "#7c3aed", 2) + ci(cx - u, cy - u, 5, "#16a34a") + tx(cx - u - 30, cy - u - 6, "M(−1, 1)", 'style="fill:#16a34a"', 11);
      return g(s);
    },
    spots: [[200, 125, ["Origin O(0, 0)", "نقطة الأصل O(0, 0)"], ["Where the x-axis and the y-axis meet.", "حيث يتقاطع محور السينات ومحور الصادات."]],
      [240, 125, ["Projection on the x-axis", "المسقط على محور السينات"], ["A(2, 3) drops to (2, 0).", "النقطة A(2, 3) مسقطها (2, 0)."]],
      [200, 65, ["Projection on the y-axis", "المسقط على محور الصادات"], ["A(2, 3) slides to (0, 3).", "النقطة A(2, 3) مسقطها (0, 3)."]],
      [180, 105, ["Midpoint", "منتصف القطعة"], ["M = ((2 + (−4))/2, (3 + (−1))/2) = (−1, 1).", "M = ((2 + (−4))/2, (3 + (−1))/2) = (−1, 1)."]],
      [332, 45, ["Quadrant signs", "إشارات الأرباع"], ["1st (+, +), 2nd (−, +), 3rd (−, −), 4th (+, −).", "الأول (+, +) والثاني (−, +) والثالث (−, −) والرابع (+, −)."]]]
  };

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  L.names.mprep1_prop = ["Juice mixer: ratio and proportion", "خلاط العصير: النسبة والتناسب"];
  L.names.mprep1_scale = ["Map scale, sharing and discount", "مقياس الرسم والتقسيم والخصم"];
  L.names.mprep1_venn = ["Venn diagram builder", "بناء شكل فن"];
  L.names.mprep1_int = ["Integer chips and number line", "بطاقات الأعداد الصحيحة وخط الأعداد"];
  L.names.mprep1_rat = ["Rational number line", "خط الأعداد النسبية"];
  L.names.mprep1_expr = ["Formula and expression machine", "آلة الصيغ والمقادير"];
  L.names.mprep1_balance = ["Equation balance", "ميزان المعادلات"];
  L.names.mprep1_freq = ["Tally and frequency builder", "بناء العلامات والتكرارات"];
  L.names.mprep1_mean = ["Mean levelling bars", "أعمدة تسوية الوسط"];
  L.names.mprep1_pie = ["Pie chart builder", "بناء القطاعات الدائرية"];
  L.names.mprep1_angle = ["Angle maker", "صانع الزوايا"];
  L.names.mprep1_parallel = ["Parallel lines and a transversal", "المستقيمان المتوازيان والقاطع"];
  L.names.mprep1_tri = ["Triangle lab", "معمل المثلث"];
  L.names.mprep1_quad = ["Quadrilateral shape morpher", "مُشكِّل الأشكال الرباعية"];
  L.names.mprep1_poly = ["Polygon angles and symmetry", "زوايا المضلعات وتماثلها"];
  L.names.mprep1_coord = ["Coordinate plane", "المستوى الإحداثي"];
})();
