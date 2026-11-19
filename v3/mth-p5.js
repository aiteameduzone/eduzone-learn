/* EduZone Learn v3 - National Maths, Egyptian Primary 5, Term 1 (2026-2027).
   Follows the Ministry Primary 5 Mathematics book (Term 1) unit by unit:
     Theme 1: Unit 1 Decimal Place Value and Computation (11 book lessons -> 4), Unit 2 Number Relationships (8 -> 3),
              Unit 3 Multiplication with Whole Numbers (5 -> 3)
     Theme 2: Unit 4 Division with Whole Numbers (5 -> 3), Unit 5 Multiplication and Division with Decimals (13 -> 4),
              Unit 6 Numerical Expressions and Patterns (4 -> 3)
   Adjacent short book lessons are merged; each merged lesson keeps the book lesson names and the first lesson's printed page.
   20 lessons, ids mp5u1l1 ... mp5u6l3. Registered as EZ3.MTHG.p5 (engine: math-nat.js).
   Arabic strings are written with Latin digits and converted to Arabic-Indic digits at load (see the last block).
   Labs: part 1 of every lesson is a live canvas manipulative (EZ3.sciLabs.mp5_*, defined in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function Q(q, c, off, sto) { return { q: q, c: c, off: off, sto: sto }; }
  E.MTHG = E.MTHG || {};
  var U = [];

  /* ======================= UNIT 1 - DECIMAL PLACE VALUE AND COMPUTATION ======================= */
  U.push({
    id: "mp5u1", num: 1, icon: "🔢", color: "blue",
    title: { en: "Decimal Place Value and Computation", ar: "القيمة المكانية للأعداد العشرية والعمليات عليها" },
    lessons: [
      {
        id: "mp5u1l1", icon: "🔢", page: 3,
        title: { en: "Decimals to the thousandths, place value shuffle and composing decimals", ar: "الأعداد العشرية حتى جزء من ألف، وتغيير القيمة المكانية، وتكوين الأعداد العشرية وتحليلها" },
        idea: {
          official: {
            en: ["After the decimal point come the Tenths, then the Hundredths, then the Thousandths. One whole split into 1,000 equal parts gives one thousandth, " + eq("0.001") + ".",
              "The purple heron in Fayoum weighs " + eq("0.875") + " kg: 8 is in the Tenths place, 7 in the Hundredths place and 5 in the Thousandths place. We read it \"eight hundred seventy-five thousandths\".",
              "Each place is 10 times the place on its right. Multiplying by 10 moves every digit one place to the left: " + eq("6.5 × 10 = 65") + ".",
              "Dividing by 10 moves every digit one place to the right: " + eq("345 ÷ 10 = 34.5") + ". The digits stay the same, only their values change.",
              "We can decompose a decimal in many ways. Expanded form: " + eq("34.527 = 30 + 4 + 0.5 + 0.02 + 0.007") + ". Another way: " + eq("34.527 = 34 + 0.527") + ".",
              "Zeros at the end of the decimal part do not change the value: " + eq("16.3 = 16.30") + ", sixteen and three tenths."],
            ar: ["بعد العلامة العشرية تأتي خانة أجزاء من عشرة، ثم أجزاء من مائة، ثم أجزاء من ألف. وإذا قسمنا الواحد الصحيح إلى 1,000 جزء متساوٍ يكون كل جزء " + eq("0.001") + ".",
              "يزن طائر البلشون الأرجواني في الفيوم " + eq("0.875") + " كجم: الرقم 8 في خانة أجزاء من عشرة، و7 في خانة أجزاء من مائة، و5 في خانة أجزاء من ألف، ونقرؤه \"ثمانمائة وخمسة وسبعون جزءًا من ألف\".",
              "كل خانة تساوي 10 أمثال الخانة التي على يمينها؛ لذلك يحرك الضرب في 10 كل رقم خانة واحدة إلى اليسار: " + eq("6.5 × 10 = 65") + ".",
              "والقسمة على 10 تحرك كل رقم خانة واحدة إلى اليمين: " + eq("345 ÷ 10 = 34.5") + "؛ الأرقام نفسها لا تتغير وإنما تتغير قيمها.",
              "يمكن تحليل العدد العشري بطرق كثيرة؛ الصورة الممتدة: " + eq("34.527 = 30 + 4 + 0.5 + 0.02 + 0.007") + "، وطريقة أخرى: " + eq("34.527 = 34 + 0.527") + ".",
              "الأصفار في نهاية الجزء العشري لا تغير قيمة العدد: " + eq("16.3 = 16.30") + "، أي ستة عشر وثلاثة أجزاء من عشرة."]
          },
          story: {
            en: ["Salma visits Qarun Lake in Fayoum with her birdwatching club and weighs three purple herons: 0.65 kg, 1.27 kg and 0.875 kg.",
              "She draws a chart with three small houses after the point: Tenths, Hundredths, Thousandths. Bird Three needs all three houses: 8, 7 and 5.",
              "Her guide says Wadi El Rayan is about 112 km from Cairo. \"What if a road were 10 times longer?\" Salma slides every digit one house left: 1,120 km.",
              "At the petrol station the sign says 6.75 LE. Salma breaks it up: 6 pounds + 0.7 + 0.05, or 6 + 0.75, the same money either way.",
              "Her brother says 16.30 °C is hotter than 16.3 °C. Salma laughs: the extra zero is an empty house, the temperature is the same."],
            ar: ["تزور سلمى بحيرة قارون في الفيوم مع نادي مراقبة الطيور، وتزن ثلاثة طيور بلشون أرجواني: 0.65 كجم و1.27 كجم و0.875 كجم.",
              "ترسم جدولًا فيه ثلاثة بيوت صغيرة بعد العلامة: أجزاء من عشرة، وأجزاء من مائة، وأجزاء من ألف؛ والطائر الثالث يحتاج البيوت الثلاثة: 8 و7 و5.",
              "يقول المرشد إن وادي الريان يبعد عن القاهرة نحو 112 كم. \"ماذا لو كان الطريق أطول 10 مرات؟\" فتحرك سلمى كل رقم بيتًا واحدًا إلى اليسار: 1,120 كم.",
              "في محطة الوقود تقرأ السعر 6.75 جنيه، فتحلله: 6 جنيهات + 0.7 + 0.05، أو 6 + 0.75، والمبلغ واحد في الحالتين.",
              "يقول أخوها إن 16.30 درجة أسخن من 16.3 درجة، فتضحك سلمى: الصفر الزائد بيت فارغ، ودرجة الحرارة واحدة."]
          }
        },
        words: [
          ["Thousandth", "جزء من ألف", "One of 1,000 equal parts of a whole: 0.001.", "جزء واحد من 1,000 جزء متساوٍ من الواحد الصحيح: 0.001."],
          ["Place value", "القيمة المكانية", "The value of a digit depends on its place: in 0.875 the 7 means 7 hundredths.", "قيمة الرقم تتوقف على خانته؛ ففي 0.875 يعني الرقم 7 سبعة أجزاء من مائة."],
          ["Decimal point", "العلامة العشرية", "The dot that separates the whole number from the parts smaller than one.", "العلامة التي تفصل العدد الصحيح عن الأجزاء الأصغر من الواحد."],
          ["Expanded form", "الصورة الممتدة", "Writing a number as the sum of the values of its digits: 12.42 = 10 + 2 + 0.4 + 0.02.", "كتابة العدد في صورة مجموع قيم أرقامه: 12.42 = 10 + 2 + 0.4 + 0.02."],
          ["Decompose", "يحلل", "To break a number into parts that add up to it, like 12.42 = 12 + 0.42.", "تجزئة العدد إلى أجزاء مجموعها يساويه، مثل 12.42 = 12 + 0.42."],
          ["Factor of 10", "عامل 10", "Multiplying by 10 makes each digit 10 times greater and moves it one place left.", "الضرب في 10 يجعل قيمة كل رقم 10 أمثالها وينقله خانة إلى اليسار."]
        ],
        lab: { parts: [{ type: "mp5_pv" }] },
        quiz: [
          Q(["Bird Three weighs 0.875 kg. Which digit is in the Hundredths place?", "الطائر الثالث وزنه 0.875 كجم. ما الرقم الموجود في خانة أجزاء من مائة؟"], [["7", "7"], ["8", "8"], ["5", "5"], ["0", "0"]],
            ["After the point: Tenths = 8, Hundredths = 7, Thousandths = 5.", "بعد العلامة: أجزاء من عشرة = 8، وأجزاء من مائة = 7، وأجزاء من ألف = 5."], ["Salma's second house after the point holds the 7.", "البيت الثاني بعد العلامة عند سلمى فيه الرقم 7."]),
          Q(["How do we read 0.875?", "كيف نقرأ العدد 0.875؟"], [["Eight hundred seventy-five thousandths", "ثمانمائة وخمسة وسبعون جزءًا من ألف"], ["Eight hundred seventy-five hundredths", "ثمانمائة وخمسة وسبعون جزءًا من مائة"], ["Eight and seventy-five thousandths", "ثمانية وخمسة وسبعون جزءًا من ألف"], ["Eighty-seven and five tenths", "سبعة وثمانون وخمسة أجزاء من عشرة"]],
            ["The last digit is in the Thousandths place, so we read the whole decimal part as thousandths.", "آخر رقم في خانة أجزاء من ألف، فنقرأ الجزء العشري كله أجزاءً من ألف."], ["The smallest house used is the Thousandths house, so Salma says \"thousandths\" at the end.", "أصغر بيت مستخدم هو بيت أجزاء من ألف، فتقول سلمى في النهاية \"جزءًا من ألف\"."]),
          Q(["What is 3,615 × 10?", "ما ناتج 3,615 × 10؟"], [["36,150", "36,150"], ["361.5", "361.5"], ["3,625", "3,625"], ["30,615", "30,615"]],
            ["Multiplying by 10 moves every digit one place to the left: 3,615 becomes 36,150.", "الضرب في 10 ينقل كل رقم خانة إلى اليسار: 3,615 تصبح 36,150."], ["Every digit climbs one house to the left, and a zero fills the empty Ones house.", "كل رقم يصعد بيتًا إلى اليسار، ويملأ الصفر بيت الآحاد الفارغ."]),
          Q(["What is 345 ÷ 10?", "ما ناتج 345 ÷ 10؟"], [["34.5", "34.5"], ["3,450", "3,450"], ["3.45", "3.45"], ["335", "335"]],
            ["Dividing by 10 moves every digit one place right: the 5 moves into the Tenths place, so 34.5.", "القسمة على 10 تنقل كل رقم خانة إلى اليمين؛ فينتقل الرقم 5 إلى خانة أجزاء من عشرة: 34.5."], ["The digits slide one house right and the 5 jumps over the point.", "تنزلق الأرقام بيتًا إلى اليمين ويقفز الرقم 5 فوق العلامة."]),
          Q(["Which is the expanded form of 34.527?", "ما الصورة الممتدة للعدد 34.527؟"], [["30 + 4 + 0.5 + 0.02 + 0.007", "30 + 4 + 0.5 + 0.02 + 0.007"], ["30 + 4 + 0.5 + 0.2 + 0.7", "30 + 4 + 0.5 + 0.2 + 0.7"], ["3 + 4 + 5 + 2 + 7", "3 + 4 + 5 + 2 + 7"], ["30 + 4 + 0.05 + 0.002 + 0.0007", "30 + 4 + 0.05 + 0.002 + 0.0007"]],
            ["Write each digit times its place value: 3 tens, 4 ones, 5 tenths, 2 hundredths, 7 thousandths.", "نكتب قيمة كل رقم حسب خانته: 3 عشرات، و4 آحاد، و5 أجزاء من عشرة، و2 من مائة، و7 من ألف."], ["Each digit carries the name of its house: 0.02 lives in Hundredths, 0.007 in Thousandths.", "كل رقم يحمل اسم بيته: 0.02 في بيت أجزاء من مائة، و0.007 في بيت أجزاء من ألف."]),
          Q(["What is the value of the digit 4 in 21.045?", "ما قيمة الرقم 4 في العدد 21.045؟"], [["0.04", "0.04"], ["0.4", "0.4"], ["4", "4"], ["0.004", "0.004"]],
            ["In 21.045 the Tenths digit is 0, the Hundredths digit is 4, so its value is 0.04.", "في 21.045 رقم أجزاء من عشرة هو 0، ورقم أجزاء من مائة هو 4، فقيمته 0.04."], ["The 4 sits in the second house after the point: four hundredths.", "الرقم 4 يجلس في البيت الثاني بعد العلامة: أربعة أجزاء من مائة."]),
          Q(["Tahani reads 16.3 °C as sixteen and three tenths. Which number is equal to 16.3?", "قرأت تهاني 16.3 درجة: ستة عشر وثلاثة أجزاء من عشرة. أي عدد يساوي 16.3؟"], [["16.30", "16.30"], ["16.03", "16.03"], ["1.63", "1.63"], ["163", "163"]],
            ["3 tenths = 30 hundredths, so 16.3 = 16.30. A zero at the end of the decimal part does not change the value.", "3 أجزاء من عشرة = 30 جزءًا من مائة، إذن 16.3 = 16.30، والصفر في نهاية الجزء العشري لا يغير القيمة."], ["The extra zero is just an empty house at the end; the 3 is still in the Tenths house.", "الصفر الزائد بيت فارغ في النهاية فقط، والرقم 3 ما زال في بيت أجزاء من عشرة."])
        ]
      },
      {
        id: "mp5u1l2", icon: "📏", page: 15,
        title: { en: "Comparing decimals and rounding decimals", ar: "مقارنة الأعداد العشرية وتقريبها" },
        idea: {
          official: {
            en: ["To compare decimals, line up the decimal points and compare place by place from the left: Ones, then Tenths, then Hundredths, then Thousandths.",
              "Example: " + eq("45.057 < 45.100") + " because the Tenths digits are 0 and 1. You may write zeros at the end so both numbers have the same number of places: " + eq("38.80 = 38.8") + ".",
              "A number with more decimal digits is not always greater: " + eq("1.49 > 1.401") + ".",
              "To round, find the two neighbours and the midpoint. To round " + eq("3.54") + " to the nearest Tenth: it lies between 3.5 and 3.6, the midpoint is 3.55, and 3.54 is below it, so " + eq("3.54 ≈ 3.5") + ".",
              "Rounding rule: look at the digit to the right of the rounding place. 5 or more, round up; less than 5, keep the digit. " + eq("1.277 ≈ 1.28") + " and " + eq("50.90 ≈ 51") + "."],
            ar: ["لمقارنة الأعداد العشرية نضع العلامات العشرية تحت بعضها، ونقارن خانة بخانة من اليسار: الآحاد ثم أجزاء من عشرة ثم من مائة ثم من ألف.",
              "مثال: " + eq("45.057 < 45.100") + " لأن رقمي خانة أجزاء من عشرة هما 0 و1. ويمكن كتابة أصفار في النهاية ليتساوى عدد الخانات: " + eq("38.80 = 38.8") + ".",
              "العدد الذي له أرقام عشرية أكثر ليس دائمًا الأكبر: " + eq("1.49 > 1.401") + ".",
              "للتقريب نحدد الجارين ونقطة المنتصف؛ فلتقريب " + eq("3.54") + " لأقرب جزء من عشرة: يقع بين 3.5 و3.6، والمنتصف 3.55، و3.54 أقل منه، إذن " + eq("3.54 ≈ 3.5") + ".",
              "قاعدة التقريب: ننظر إلى الرقم على يمين خانة التقريب؛ إن كان 5 أو أكثر نقرب لأعلى، وإن كان أقل من 5 يبقى الرقم كما هو: " + eq("1.277 ≈ 1.28") + " و" + eq("50.90 ≈ 51") + "."]
          },
          story: {
            en: ["On a May day at the Fayoum Basin, Mazen records 29.9 °C in the morning and 30.2 °C at noon. He compares the Ones first: 29 < 30, so noon was hotter.",
              "His sister Nour thinks 1.401 is bigger than 1.49 because it is longer. Mazen lines up the points: 4 tenths and 4 tenths, then 0 hundredths and 9 hundredths. 1.49 wins.",
              "Mazen drives 147.72 km to the Wadi El Rayan waterfalls. On a number line he sees it sits between 147.7 and 147.8, closer to 147.7.",
              "A student rounded the upper lake, 50.90 km², down to 50. Mazen points at the 9 tenths: that is more than half, so the lake is about 51 km².",
              "After 73.255 km they stop for a snack. To the nearest hundredth the trip so far is 73.26 km."],
            ar: ["في يوم من مايو عند منخفض الفيوم يسجل مازن 29.9 درجة صباحًا و30.2 درجة ظهرًا، فيقارن الآحاد أولًا: 29 < 30، إذن الظهر كان أسخن.",
              "تظن أخته نور أن 1.401 أكبر من 1.49 لأنه أطول، فيضع مازن العلامتين تحت بعضهما: 4 أجزاء من عشرة و4، ثم 0 من مائة و9 من مائة؛ إذن 1.49 هو الأكبر.",
              "يقطع مازن بالسيارة 147.72 كم إلى شلالات وادي الريان، ويرى على خط الأعداد أنها بين 147.7 و147.8 وأقرب إلى 147.7.",
              "قرّب طالب مساحة البحيرة العليا 50.90 كم² إلى 50، فيشير مازن إلى الأجزاء التسعة من عشرة: إنها أكثر من النصف، فالمساحة نحو 51 كم².",
              "بعد 73.255 كم يتوقفون لتناول وجبة خفيفة، والمسافة حتى الآن لأقرب جزء من مائة هي 73.26 كم."]
          }
        },
        words: [
          ["Compare", "يقارن", "Decide which number is greater using >, < or =.", "تحديد أي العددين أكبر باستخدام > أو < أو =."],
          ["Greater than (>)", "أكبر من (>)", "45.100 > 45.057: the open side faces the greater number.", "45.100 > 45.057: الفتحة تواجه العدد الأكبر."],
          ["Round", "يقرب", "Replace a number with a nearby simpler number, like 3.54 ≈ 3.5.", "استبدال العدد بعدد قريب أبسط منه، مثل 3.54 ≈ 3.5."],
          ["Midpoint", "نقطة المنتصف", "The number halfway between two neighbours: 3.55 is halfway between 3.5 and 3.6.", "العدد الذي يقع في منتصف المسافة بين جارين: 3.55 في منتصف المسافة بين 3.5 و3.6."],
          ["Nearest Tenth", "لأقرب جزء من عشرة", "Rounding so that only one digit stays after the point: 56.284 ≈ 56.3.", "التقريب بحيث يبقى رقم واحد فقط بعد العلامة: 56.284 ≈ 56.3."],
          ["Approximately (≈)", "يساوي تقريبًا (≈)", "The sign we write between a number and its rounded value.", "العلامة التي نكتبها بين العدد وقيمته المقربة."]
        ],
        lab: { parts: [{ type: "mp5_line" }] },
        quiz: [
          Q(["Compare: 45.057 ___ 45.100", "قارن: 45.057 ___ 45.100"], [["<", "<"], [">", ">"], ["=", "="], ["You cannot compare them", "لا يمكن المقارنة"]],
            ["The Ones are equal (45). Tenths: 0 < 1, so 45.057 < 45.100.", "الآحاد متساوية (45)، وفي أجزاء من عشرة: 0 < 1، إذن 45.057 < 45.100."], ["Mazen lines up the points; at the first different house, 0 tenths loses to 1 tenth.", "يضع مازن العلامتين تحت بعضهما، وعند أول بيت مختلف يخسر 0 أمام 1."]),
          Q(["Compare the temperatures: 38.80° ___ 38.8°", "قارن درجتي الحرارة: 38.80 ___ 38.8"], [["=", "="], [">", ">"], ["<", "<"], ["≈ only", "≈ فقط"]],
            ["8 tenths = 80 hundredths, so 38.80 = 38.8. The zero at the end does not change the value.", "8 أجزاء من عشرة = 80 جزءًا من مائة، إذن 38.80 = 38.8، والصفر في النهاية لا يغير القيمة."], ["The extra zero is an empty house: the thermometer shows the same temperature.", "الصفر الزائد بيت فارغ؛ والترمومتر يبين الدرجة نفسها."]),
          Q(["Which is the largest number: 1.401, 1.341, 1.440, 1.49?", "أي الأعداد أكبر: 1.401 أم 1.341 أم 1.440 أم 1.49؟"], [["1.49", "1.49"], ["1.401", "1.401"], ["1.440", "1.440"], ["1.341", "1.341"]],
            ["All have 1 one. Tenths: 4, 3, 4, 4. Among 1.401, 1.440 and 1.490 the Hundredths are 0, 4 and 9, so 1.49 is the largest.", "كلها فيها واحد صحيح، وأجزاء من عشرة: 4 و3 و4 و4، وبين 1.401 و1.440 و1.490 أرقام أجزاء من مائة 0 و4 و9، إذن 1.49 الأكبر."], ["Write 1.49 as 1.490 so all are the same length; then 490 thousandths beats 440 and 401.", "اكتب 1.49 على صورة 1.490 لتتساوى الأطوال، فتكون 490 جزءًا من ألف أكبر من 440 و401."]),
          Q(["Round 3.54 to the nearest Tenth.", "قرّب 3.54 لأقرب جزء من عشرة."], [["3.5", "3.5"], ["3.6", "3.6"], ["4", "4"], ["3.0", "3.0"]],
            ["3.54 lies between 3.5 and 3.6. The Hundredths digit is 4 (less than 5), so 3.54 ≈ 3.5.", "3.54 يقع بين 3.5 و3.6، ورقم أجزاء من مائة هو 4 وهو أقل من 5، إذن 3.54 ≈ 3.5."], ["The midpoint is 3.55 and 3.54 has not reached it, so it walks back to 3.5.", "المنتصف 3.55 و3.54 لم يصل إليه، فيرجع إلى 3.5."]),
          Q(["Round 1.277 to the nearest Hundredth.", "قرّب 1.277 لأقرب جزء من مائة."], [["1.28", "1.28"], ["1.27", "1.27"], ["1.3", "1.3"], ["1.277", "1.277"]],
            ["Between 1.27 and 1.28. The Thousandths digit is 7 (5 or more), so round up: 1.28.", "يقع بين 1.27 و1.28، ورقم أجزاء من ألف هو 7 (أكبر من 5)، فنقرب لأعلى: 1.28."], ["1.277 has passed the midpoint 1.275, so it jumps up to 1.28.", "تجاوز 1.277 نقطة المنتصف 1.275، فيقفز إلى 1.28."]),
          Q(["The upper lake in Wadi El Rayan has an area of 50.90 km². Round it to the nearest whole number.", "مساحة البحيرة العليا في وادي الريان 50.90 كم². قرّبها لأقرب عدد صحيح."], [["51", "51"], ["50", "50"], ["50.9", "50.9"], ["50.00", "50.00"]],
            ["50.90 is between 50 and 51. The Tenths digit is 9 (5 or more), so round up to 51.", "50.90 بين 50 و51، ورقم أجزاء من عشرة هو 9 (أكبر من 5)، فنقرب لأعلى إلى 51."], ["9 tenths is almost a whole, so the lake is about 51 km², not 50.", "تسعة أجزاء من عشرة تكاد تكون واحدًا صحيحًا، فالمساحة نحو 51 كم² وليست 50."]),
          Q(["Mazen travels 147.72 km. Round the distance to the nearest Tenth.", "يقطع مازن 147.72 كم. قرّب المسافة لأقرب جزء من عشرة."], [["147.7", "147.7"], ["147.8", "147.8"], ["148", "148"], ["147.72", "147.72"]],
            ["Look at the Hundredths digit: 2 is less than 5, so the Tenths digit 7 stays: 147.7.", "ننظر إلى رقم أجزاء من مائة: 2 أقل من 5، فيبقى رقم أجزاء من عشرة 7: 147.7."], ["On the number line 147.72 is just after 147.7 and far from 147.8.", "على خط الأعداد 147.72 بعد 147.7 مباشرة وبعيد عن 147.8."])
        ]
      },
      {
        id: "mp5u1l3", icon: "➕", page: 20,
        title: { en: "Estimating decimal sums and modeling decimal addition", ar: "تقدير ناتج جمع الأعداد العشرية ونمذجة جمعها" },
        idea: {
          official: {
            en: ["To estimate a sum, round each addend to an easy number first. " + eq("2.361 + 3.783") + ": round to Ones, " + eq("2 + 4 = 6") + ".",
              "Other strategies: front-end estimation, benchmark decimals (0, 0.25, 0.5, 0.75, 1), or rounding to Tenths for a closer estimate.",
              "To model " + eq("0.13 + 0.23") + ", shade 13 small squares of a hundredths grid in one colour and 23 more in another colour: 36 squares, so " + eq("0.36") + ".",
              "When the squares fill a whole grid, start a new grid: " + eq("0.97 + 0.42 = 1.39") + ", because 100 hundredths make 1 whole.",
              "With the algorithm, line up the decimal points and add place by place from the right, regrouping 10 hundredths as 1 tenth and 10 tenths as 1 one.",
              "Check: the exact answer should be close to the estimate."],
            ar: ["لتقدير ناتج الجمع نقرب كل عدد أولًا إلى عدد سهل: " + eq("2.361 + 3.783") + "، وبالتقريب لأقرب واحد صحيح: " + eq("2 + 4 = 6") + ".",
              "ومن الاستراتيجيات أيضًا: التقدير بالأرقام الأولى، والأعداد المرجعية (0 و0.25 و0.5 و0.75 و1)، والتقريب لأقرب جزء من عشرة لتقدير أدق.",
              "لنمذجة " + eq("0.13 + 0.23") + " نظلل 13 مربعًا صغيرًا في شبكة المائة بلون، و23 مربعًا آخر بلون مختلف؛ المجموع 36 مربعًا، أي " + eq("0.36") + ".",
              "وإذا امتلأت الشبكة كلها نبدأ شبكة جديدة: " + eq("0.97 + 0.42 = 1.39") + "، لأن 100 جزء من مائة تكوّن واحدًا صحيحًا.",
              "وعند الحل بالخوارزمية نضع العلامات العشرية تحت بعضها ونجمع خانة بخانة من اليمين، مع إعادة التجميع: 10 أجزاء من مائة = جزء من عشرة، و10 أجزاء من عشرة = واحد.",
              "للتحقق: يجب أن يكون الناتج الدقيق قريبًا من التقدير."]
          },
          story: {
            en: ["Samar wants to ride her bike 40 km this week. By Thursday she has ridden 34.99 km, and on Friday she rides 4.01 km.",
              "She estimates: 34.99 is about 35 and 4.01 is about 4, so about 39 km. Not 40 yet!",
              "Her exact sum confirms it: 34.99 + 4.01 = 39.00 km. One more kilometre to go.",
              "Her cousins Taha and his brother have 54.20 LE and 45.75 LE for a 100 LE box of apples. About 54 + 46 = 100, very close, so they add exactly: 99.95 LE, 5 piasters short.",
              "On her grid Samar colours 97 squares yellow and 42 green: the first grid fills up and 39 squares spill into a second grid, 1.39."],
            ar: ["تريد سمر أن تقطع 40 كم بدراجتها هذا الأسبوع، وحتى الخميس قطعت 34.99 كم، ويوم الجمعة قطعت 4.01 كم.",
              "تقدّر: 34.99 نحو 35، و4.01 نحو 4، فالمجموع نحو 39 كم؛ لم تصل إلى 40 بعد!",
              "ويؤكد الجمع الدقيق ذلك: 34.99 + 4.01 = 39.00 كم، وبقي كيلومتر واحد.",
              "ابن عمها طه وأخوه معهما 54.20 جنيه و45.75 جنيه لشراء صندوق تفاح بـ 100 جنيه؛ التقدير 54 + 46 = 100 قريب جدًا، فيجمعان بدقة: 99.95 جنيه، ينقصهما 5 قروش.",
              "على شبكتها تلون سمر 97 مربعًا بالأصفر و42 بالأخضر، فتمتلئ الشبكة الأولى وينتقل 39 مربعًا إلى شبكة ثانية: 1.39."]
          }
        },
        words: [
          ["Estimate", "يقدّر", "Find an answer that is close to the exact one, using easy numbers.", "إيجاد ناتج قريب من الناتج الدقيق باستخدام أعداد سهلة."],
          ["Addend", "العدد المضاف", "Each number being added: in 0.13 + 0.23 both numbers are addends.", "كل عدد من الأعداد التي نجمعها؛ ففي 0.13 + 0.23 كلا العددين عدد مضاف."],
          ["Sum", "ناتج الجمع (المجموع)", "The answer to an addition: 0.13 + 0.23 = 0.36.", "ناتج عملية الجمع: 0.13 + 0.23 = 0.36."],
          ["Benchmark decimal", "عدد عشري مرجعي", "An easy number to estimate with, such as 0, 0.25, 0.5, 0.75 or 1.", "عدد سهل نقدّر به، مثل 0 أو 0.25 أو 0.5 أو 0.75 أو 1."],
          ["Hundredths grid", "شبكة المائة", "A square split into 100 small squares; each small square is 0.01.", "مربع مقسم إلى 100 مربع صغير، وكل مربع صغير يمثل 0.01."],
          ["Regroup", "يعيد التجميع", "Trade 10 of one place for 1 of the next place, like 10 hundredths for 1 tenth.", "استبدال 10 من خانة بواحد من الخانة التالية، مثل 10 أجزاء من مائة بجزء من عشرة."]
        ],
        lab: { parts: [{ type: "mp5_addgrid" }] },
        quiz: [
          Q(["Estimate 2.361 + 3.783 by rounding each number to the nearest whole number.", "قدّر ناتج 2.361 + 3.783 بتقريب كل عدد لأقرب عدد صحيح."], [["6", "6"], ["5", "5"], ["7", "7"], ["6.144", "6.144"]],
            ["2.361 ≈ 2 and 3.783 ≈ 4, so the estimate is 2 + 4 = 6. (The exact sum is 6.144.)", "2.361 ≈ 2 و3.783 ≈ 4، إذن التقدير 2 + 4 = 6 (والناتج الدقيق 6.144)."], ["Samar rounds each bag to whole kilograms first, then adds: 2 + 4.", "تقرب سمر كل كيس إلى كيلوجرامات صحيحة أولًا ثم تجمع: 2 + 4."]),
          Q(["What is 0.13 + 0.23?", "ما ناتج 0.13 + 0.23؟"], [["0.36", "0.36"], ["0.35", "0.35"], ["3.6", "3.6"], ["0.036", "0.036"]],
            ["13 hundredths + 23 hundredths = 36 hundredths = 0.36.", "13 جزءًا من مائة + 23 جزءًا من مائة = 36 جزءًا من مائة = 0.36."], ["13 yellow squares and 23 green squares make 36 coloured squares on one grid.", "13 مربعًا أصفر و23 مربعًا أخضر تكوّن 36 مربعًا ملونًا على شبكة واحدة."]),
          Q(["What is 0.97 + 0.42?", "ما ناتج 0.97 + 0.42؟"], [["1.39", "1.39"], ["0.139", "0.139"], ["1.29", "1.29"], ["13.9", "13.9"]],
            ["97 + 42 = 139 hundredths = 1 whole and 39 hundredths = 1.39.", "97 + 42 = 139 جزءًا من مائة = واحد صحيح و39 جزءًا من مائة = 1.39."], ["The first grid fills with 100 squares and 39 squares spill into the second grid.", "تمتلئ الشبكة الأولى بـ 100 مربع، وينتقل 39 مربعًا إلى الشبكة الثانية."]),
          Q(["What is 0.92 + 0.89?", "ما ناتج 0.92 + 0.89؟"], [["1.81", "1.81"], ["1.71", "1.71"], ["0.181", "0.181"], ["18.1", "18.1"]],
            ["Hundredths: 2 + 9 = 11, write 1 and regroup 1 tenth. Tenths: 9 + 8 + 1 = 18, write 8 and regroup 1 one. Answer 1.81.", "أجزاء من مائة: 2 + 9 = 11، نكتب 1 ونحمل 1 إلى أجزاء من عشرة، ثم 9 + 8 + 1 = 18، نكتب 8 ونحمل 1 إلى الآحاد: 1.81."], ["Both numbers are almost 1, so the sum must be almost 2: 1.81 makes sense.", "كل عدد يقارب 1، فالمجموع يجب أن يقارب 2، و1.81 ناتج منطقي."]),
          Q(["Samar rode 34.99 km and then 4.01 km. Her goal is 40 km. What is true?", "قطعت سمر 34.99 كم ثم 4.01 كم، وهدفها 40 كم. أي العبارات صحيحة؟"], [["She rode 39 km and has not met her goal", "قطعت 39 كم ولم تحقق هدفها"], ["She rode 40 km and met her goal", "قطعت 40 كم وحققت هدفها"], ["She rode 38 km", "قطعت 38 كم"], ["She rode 39.1 km and met her goal", "قطعت 39.1 كم وحققت هدفها"]],
            ["34.99 + 4.01 = 39.00 km, which is less than 40 km.", "34.99 + 4.01 = 39.00 كم، وهو أقل من 40 كم."], ["Estimate 35 + 4 = 39: one kilometre short of the 40 km goal.", "التقدير 35 + 4 = 39: ينقصها كيلومتر واحد عن هدف الـ 40 كم."]),
          Q(["Taha has 54.20 LE and his brother has 45.75 LE. How much do they have together?", "مع طه 54.20 جنيه ومع أخيه 45.75 جنيه. كم معهما معًا؟"], [["99.95 LE", "99.95 جنيه"], ["100 LE", "100 جنيه"], ["99.85 LE", "99.85 جنيه"], ["9.995 LE", "9.995 جنيه"]],
            ["Line up the points: 54.20 + 45.75 = 99.95 LE, not enough for a 100 LE box.", "نضع العلامتين تحت بعضهما: 54.20 + 45.75 = 99.95 جنيه، وهو لا يكفي لصندوق ثمنه 100 جنيه."], ["The estimate 54 + 46 = 100 is too close to decide, so they add exactly and are 5 piasters short.", "التقدير 54 + 46 = 100 قريب جدًا فلا يحسم الأمر، فيجمعان بدقة فينقصهما 5 قروش."]),
          Q(["Khartoum to Juba is 1,941.2 km and Juba to Jinja is 687.9 km. How long is the whole journey?", "المسافة من الخرطوم إلى جوبا 1,941.2 كم، ومن جوبا إلى جينجا 687.9 كم. كم طول الرحلة كلها؟"], [["2,629.1 km", "2,629.1 كم"], ["2,528.1 km", "2,528.1 كم"], ["2,629.9 km", "2,629.9 كم"], ["8,820.2 km", "8,820.2 كم"]],
            ["Tenths: 2 + 9 = 11, write 1, regroup 1. Ones and up: 1,941 + 687 + 1 = 2,629. Answer 2,629.1 km.", "أجزاء من عشرة: 2 + 9 = 11، نكتب 1 ونحمل 1، ثم 1,941 + 687 + 1 = 2,629، فالناتج 2,629.1 كم."], ["Estimate 1,900 + 700 = 2,600, so 2,629.1 km is reasonable.", "التقدير 1,900 + 700 = 2,600، إذن 2,629.1 كم ناتج معقول."])
        ]
      },
      {
        id: "mp5u1l4", icon: "➖", page: 29,
        title: { en: "Modeling decimal subtraction, estimating decimal differences, subtracting to the thousandths and decimal story problems", ar: "نمذجة طرح الأعداد العشرية، وتقدير ناتج الطرح، والطرح حتى جزء من ألف، ومسائل كلامية على الأعداد العشرية" },
        idea: {
          official: {
            en: ["The minuend is the number we subtract from; the subtrahend is the number we take away. In a grid model we shade the minuend and cross out the subtrahend.",
              "Model " + eq("0.39 − 0.13") + ": shade 39 squares, cross out 13, and 26 squares are left, so " + eq("0.39 − 0.13 = 0.26") + ".",
              "When a place has too few, regroup: " + eq("0.2 − 0.05") + " is 20 hundredths − 5 hundredths = 15 hundredths = " + eq("0.15") + ". Writing 0.2 as 0.20 helps.",
              "Estimate first by rounding: " + eq("29.98 − 11.99 ≈ 30 − 12 = 18") + ". Then subtract exactly: 17.99.",
              "With the algorithm, line up the decimal points, write zeros so both numbers have the same number of places, and subtract from the right: " + eq("22.90 − 15.24 = 7.66") + ".",
              "In story problems, decide first: are we finding a total (add) or a difference / what is left (subtract)?"],
            ar: ["المطروح منه هو العدد الذي نطرح منه، والمطروح هو العدد الذي نأخذه. وفي نموذج الشبكة نظلل المطروح منه ونشطب المطروح.",
              "لنمذجة " + eq("0.39 − 0.13") + ": نظلل 39 مربعًا ونشطب 13، فيتبقى 26 مربعًا، إذن " + eq("0.39 − 0.13 = 0.26") + ".",
              "وإذا كانت الخانة لا تكفي نعيد التجميع: " + eq("0.2 − 0.05") + " = 20 جزءًا من مائة − 5 أجزاء من مائة = 15 جزءًا من مائة = " + eq("0.15") + "، وكتابة 0.2 على صورة 0.20 تساعدنا.",
              "نقدّر أولًا بالتقريب: " + eq("29.98 − 11.99 ≈ 30 − 12 = 18") + "، ثم نطرح بدقة: 17.99.",
              "وعند الحل بالخوارزمية نضع العلامات العشرية تحت بعضها، ونكتب أصفارًا ليتساوى عدد الخانات، ونطرح من اليمين: " + eq("22.90 − 15.24 = 7.66") + ".",
              "وفي المسائل الكلامية نقرر أولًا: هل نبحث عن مجموع (نجمع) أم عن فرق أو باقٍ (نطرح)؟"]
          },
          story: {
            en: ["Diaa and Ezz study the Nile Delta. Its deposits are 15.24 m thick at the thinnest part and 22.9 m at the thickest.",
              "Ezz rounds: 23 − 15 = 8 m. Diaa writes 22.90 under 15.24 with the points lined up and gets 7.66 m. Close to 8, so it is reasonable!",
              "At Lake Nasser, Wafaa adds a 113.39 kg Nile perch and a 38.1 kg catfish but forgets to line up the points. Diaa fixes it: 113.39 + 38.10 = 151.49 kg.",
              "On the Tahya Misr Bridge, Salem rides 3.25 km of the 16.7 km bridge before a flat tyre. What is left? 16.70 − 3.25 = 13.45 km.",
              "Maha the botanist measures papyrus: plot D is 5.05 m and plot B is 4.15 m. The difference is 0.90 m, almost a metre."],
            ar: ["يدرس ضياء وعز دلتا النيل؛ سُمك رواسبها 15.24 م في أرق جزء و22.9 م في أسمك جزء.",
              "يقرّب عز: 23 − 15 = 8 م، ويكتب ضياء 22.90 فوق 15.24 والعلامتان تحت بعضهما فيحصل على 7.66 م؛ قريب من 8، إذن الناتج معقول!",
              "عند بحيرة ناصر تجمع وفاء سمكة قشر بياض وزنها 113.39 كجم وسمكة قرموط وزنها 38.1 كجم لكنها لا تضع العلامتين تحت بعضهما، فيصحح ضياء: 113.39 + 38.10 = 151.49 كجم.",
              "على كوبري تحيا مصر يقطع سالم 3.25 كم من طول الكوبري 16.7 كم ثم ينثقب إطار دراجته؛ فكم بقي؟ 16.70 − 3.25 = 13.45 كم.",
              "تقيس عالمة النبات مها نبات البردي: القطعة D طولها 5.05 م والقطعة B طولها 4.15 م، والفرق 0.90 م، أي نحو متر."]
          }
        },
        words: [
          ["Minuend", "المطروح منه", "The number we subtract from: in 0.39 − 0.13 it is 0.39.", "العدد الذي نطرح منه؛ ففي 0.39 − 0.13 هو 0.39."],
          ["Subtrahend", "المطروح", "The number we take away: in 0.39 − 0.13 it is 0.13.", "العدد الذي نأخذه؛ ففي 0.39 − 0.13 هو 0.13."],
          ["Difference", "ناتج الطرح (الفرق)", "The answer to a subtraction: 0.39 − 0.13 = 0.26.", "ناتج عملية الطرح: 0.39 − 0.13 = 0.26."],
          ["Reasonable", "معقول", "An answer is reasonable when it is close to the estimate.", "يكون الناتج معقولًا عندما يكون قريبًا من التقدير."],
          ["Line up the decimal points", "وضع العلامات العشرية تحت بعضها", "Write the numbers so the points and the places are in the same columns.", "كتابة الأعداد بحيث تكون العلامات العشرية والخانات في الأعمدة نفسها."]
        ],
        lab: { parts: [{ type: "mp5_subgrid" }] },
        quiz: [
          Q(["What is 0.39 − 0.13?", "ما ناتج 0.39 − 0.13؟"], [["0.26", "0.26"], ["0.52", "0.52"], ["0.36", "0.36"], ["2.6", "2.6"]],
            ["39 hundredths − 13 hundredths = 26 hundredths = 0.26.", "39 جزءًا من مائة − 13 جزءًا من مائة = 26 جزءًا من مائة = 0.26."], ["Shade 39 squares, cross out 13: 26 squares are still shaded.", "ظلل 39 مربعًا واشطب 13، فيبقى 26 مربعًا مظللًا."]),
          Q(["What is 0.2 − 0.05?", "ما ناتج 0.2 − 0.05؟"], [["0.15", "0.15"], ["0.03", "0.03"], ["0.25", "0.25"], ["0.18", "0.18"]],
            ["Write 0.2 as 0.20: 20 hundredths − 5 hundredths = 15 hundredths = 0.15.", "نكتب 0.2 على صورة 0.20: 20 جزءًا من مائة − 5 أجزاء = 15 جزءًا من مائة = 0.15."], ["Two shaded columns hold 20 squares; cross out 5 and 15 remain.", "العمودان المظللان فيهما 20 مربعًا، نشطب 5 فيبقى 15."]),
          Q(["What is 1.23 − 1.02?", "ما ناتج 1.23 − 1.02؟"], [["0.21", "0.21"], ["2.25", "2.25"], ["0.12", "0.12"], ["1.21", "1.21"]],
            ["Ones: 1 − 1 = 0, Tenths: 2 − 0 = 2, Hundredths: 3 − 2 = 1, so 0.21.", "الآحاد: 1 − 1 = 0، وأجزاء من عشرة: 2 − 0 = 2، وأجزاء من مائة: 3 − 2 = 1، إذن 0.21."], ["Cross out a whole grid and 2 squares from 1 grid and 23 squares: 21 squares stay.", "نشطب شبكة كاملة ومربعين من شبكة كاملة و23 مربعًا، فيبقى 21 مربعًا."]),
          Q(["Wafaa adds 113.39 kg and 38.1 kg. What is the correct total?", "تجمع وفاء 113.39 كجم و38.1 كجم. ما المجموع الصحيح؟"], [["151.49 kg", "151.49 كجم"], ["117.20 kg", "117.20 كجم"], ["151.40 kg", "151.40 كجم"], ["114.20 kg", "114.20 كجم"]],
            ["Line up the points: 113.39 + 38.10 = 151.49 kg.", "نضع العلامتين تحت بعضهما: 113.39 + 38.10 = 151.49 كجم."], ["Wafaa put the 38 under the decimal digits. With the points lined up, the answer is about 113 + 38 = 151.", "وضعت وفاء الـ 38 تحت الأرقام العشرية، وعند ترتيب العلامتين يكون الناتج نحو 113 + 38 = 151."]),
          Q(["Papyrus in plot D is 5.05 m tall and in plot B 4.15 m. What is the difference?", "طول البردي في القطعة D هو 5.05 م وفي القطعة B هو 4.15 م. ما الفرق؟"], [["0.9 m", "0.9 م"], ["1.1 m", "1.1 م"], ["0.10 m", "0.10 م"], ["1.90 m", "1.90 م"]],
            ["5.05 − 4.15: regroup 1 one as 10 tenths, so 4.(10)5 − 4.15 = 0.90 = 0.9 m.", "5.05 − 4.15: نفك واحدًا صحيحًا إلى 10 أجزاء من عشرة، فيكون الناتج 0.90 = 0.9 م."], ["Estimate 5 − 4 = 1, and the exact difference 0.9 m is close.", "التقدير 5 − 4 = 1، والفرق الدقيق 0.9 م قريب منه."]),
          Q(["The delta deposits are 22.9 m at the thickest and 15.24 m at the thinnest. What is the difference?", "سُمك رواسب الدلتا 22.9 م في أسمك جزء و15.24 م في أرق جزء. ما الفرق؟"], [["7.66 m", "7.66 م"], ["7.76 m", "7.76 م"], ["8.66 m", "8.66 م"], ["7.34 m", "7.34 م"]],
            ["Write 22.90 − 15.24 = 7.66 m.", "نكتب 22.90 − 15.24 = 7.66 م."], ["Ezz's estimate of 8 m is close to Diaa's 7.66 m, so the answer is reasonable.", "تقدير عز 8 م قريب من ناتج ضياء 7.66 م، إذن الناتج معقول."]),
          Q(["The Tahya Misr Bridge is 67.3 m wide. Another bridge is 11.7 m narrower. How wide is it?", "عرض كوبري تحيا مصر 67.3 م، وكوبري آخر أقل منه عرضًا بـ 11.7 م. كم عرضه؟"], [["55.6 m", "55.6 م"], ["79 m", "79 م"], ["56.4 m", "56.4 م"], ["54.6 m", "54.6 م"]],
            ["Narrower means subtract: 67.3 − 11.7 = 55.6 m.", "\"أقل عرضًا\" تعني أن نطرح: 67.3 − 11.7 = 55.6 م."], ["Estimate 67 − 12 = 55, so 55.6 m is reasonable.", "التقدير 67 − 12 = 55، إذن 55.6 م ناتج معقول."])
        ]
      }
    ]
  });

  /* ======================= UNIT 2 - NUMBER RELATIONSHIPS ======================= */
  U.push({
    id: "mp5u2", num: 2, icon: "🧩", color: "green",
    title: { en: "Number Relationships", ar: "العلاقات بين الأعداد" },
    lessons: [
      {
        id: "mp5u2l1", icon: "⚖️", page: 44,
        title: { en: "Expressions, equations and variables, variables in equations and telling stories with numbers", ar: "المقادير والمعادلات والمتغيرات، والمتغيرات في المعادلات، وقصص بالأعداد" },
        idea: {
          official: {
            en: ["An expression has numbers and operations but no equals sign, like " + eq("14.78 − 3.4") + ". An equation says two sides are equal, like " + eq("14 × 7 = x") + ".",
              "A variable is a letter or symbol for an unknown number. In " + eq("180 + x = 275") + ", x is the difference between the two gulfs.",
              "Use the relationship between addition and subtraction to find the unknown: " + eq("180 + x = 275") + " means " + eq("x = 275 − 180 = 95") + ".",
              "Example: " + eq("8.23 + p = 10.24") + ", so " + eq("p = 10.24 − 8.23 = 2.01") + ". And " + eq("T − 2.45 = 0.26") + ", so " + eq("T = 0.26 + 2.45 = 2.71") + ".",
              "A part-to-whole bar model helps write the equation: whole = part + part.",
              "We can tell a story for any equation: " + eq("2.8 + 1.5 = C") + " could be 2.8 kg of apples and 1.5 kg of figs, C kg in all."],
            ar: ["المقدار فيه أعداد وعمليات وليس فيه علامة يساوي، مثل " + eq("14.78 − 3.4") + "، أما المعادلة فتقول إن طرفين متساويان، مثل " + eq("14 × 7 = x") + ".",
              "المتغير حرف أو رمز يدل على عدد مجهول؛ ففي " + eq("180 + x = 275") + " يمثل x الفرق بين طولي الخليجين.",
              "نستخدم العلاقة بين الجمع والطرح لإيجاد المجهول: " + eq("180 + x = 275") + " تعني " + eq("x = 275 − 180 = 95") + ".",
              "مثال: " + eq("8.23 + p = 10.24") + "، إذن " + eq("p = 10.24 − 8.23 = 2.01") + "، و" + eq("T − 2.45 = 0.26") + "، إذن " + eq("T = 0.26 + 2.45 = 2.71") + ".",
              "نموذج الشريط (الجزء والكل) يساعدنا على كتابة المعادلة: الكل = جزء + جزء.",
              "ويمكن أن نحكي قصة لأي معادلة؛ فالمعادلة " + eq("2.8 + 1.5 = C") + " قد تعني 2.8 كجم تفاح و1.5 كجم تين، والمجموع C كجم."]
          },
          story: {
            en: ["Mariam looks at a map of Sinai. The Gulf of Suez is about 275 km long and the Gulf of Aqaba about 180 km.",
              "\"How much longer is Suez?\" She writes 180 + x = 275 and puts a mystery box for x on a balance scale next to 180.",
              "The scale tips until the box holds 95 km. So x = 95, the same as 275 − 180.",
              "Her friend Ezz ran 5.24 km on Monday and 6.50 km on Wednesday, 15 km in all. Mariam writes 5.24 + 6.50 + x = 15, so x = 15 − 11.74 = 3.26 km.",
              "Then she invents her own story for x + 2.75 = 12.5: a 12.5 m rope, 2.75 m already used, x = 9.75 m left."],
            ar: ["تنظر مريم إلى خريطة سيناء؛ طول خليج السويس نحو 275 كم، وطول خليج العقبة نحو 180 كم.",
              "\"بكم يزيد خليج السويس؟\" تكتب 180 + x = 275، وتضع صندوقًا غامضًا مكان x على كفة ميزان بجوار 180.",
              "يميل الميزان حتى يحمل الصندوق 95 كم، إذن x = 95، وهو نفسه 275 − 180.",
              "صديقها عز جرى 5.24 كم يوم الاثنين و6.50 كم يوم الأربعاء، و15 كم في الأسبوع كله، فتكتب مريم 5.24 + 6.50 + x = 15، إذن x = 15 − 11.74 = 3.26 كم.",
              "ثم تؤلف قصتها للمعادلة x + 2.75 = 12.5: حبل طوله 12.5 م استُخدم منه 2.75 م، فيتبقى x = 9.75 م."]
          }
        },
        words: [
          ["Expression", "المقدار", "Numbers and operations without an equals sign, like 25.6 − 9.", "أعداد وعمليات بدون علامة يساوي، مثل 25.6 − 9."],
          ["Equation", "المعادلة", "A number sentence that says two sides are equal, like 9 − x = 3.5.", "جملة عددية تقول إن طرفين متساويان، مثل 9 − x = 3.5."],
          ["Variable", "المتغير", "A letter or symbol that stands for an unknown number.", "حرف أو رمز يدل على عدد مجهول."],
          ["Unknown", "المجهول", "The number we are looking for in an equation.", "العدد الذي نبحث عنه في المعادلة."],
          ["Bar model", "نموذج الشريط", "A drawing of the whole and its parts that helps us write an equation.", "رسم للكل وأجزائه يساعدنا على كتابة المعادلة."]
        ],
        lab: { parts: [{ type: "mp5_balance" }, {
          type: "sort",
          prompt: ["Tap a phrase, then tap its group.", "اضغط على العبارة ثم اضغط على مجموعتها."],
          bins: [["eq", "🟰", "Equation", "معادلة"], ["ex", "➕", "Expression", "مقدار"]],
          items: [['<span dir="ltr">4.7 + 3.6 = M</span>', "eq"], ['<span dir="ltr">345.45 − 123.8 = x</span>', "eq"], ['<span dir="ltr">56 − x = 47.5</span>', "eq"], ['<span dir="ltr">6.4 ÷ 3.2 + 8</span>', "ex"], ['<span dir="ltr">37.125 − 13.7</span>', "ex"], ['<span dir="ltr">3.4 + L</span>', "ex"]]
        }] },
        quiz: [
          Q(["Which of these is an equation?", "أي مما يلي معادلة؟"], [["14 × 7 = x", "14 × 7 = x"], ["14.78 − 3.4", "14.78 − 3.4"], ["25.6 − 9", "25.6 − 9"], ["3.4 + L", "3.4 + L"]],
            ["An equation has an equals sign with two equal sides. The others are expressions.", "المعادلة فيها علامة يساوي بين طرفين متساويين، أما الباقي فمقادير."], ["Only one phrase is a full sentence with \"=\": 14 × 7 = x.", "عبارة واحدة فقط جملة كاملة فيها \"=\": 14 × 7 = x."]),
          Q(["Basma writes \"12.5 plus a number equals 15\". Which equation is correct?", "تكتب بسمة \"12.5 زائد عدد يساوي 15\". أي معادلة صحيحة؟"], [["12.5 + x = 15", "12.5 + x = 15"], ["12.5 + 15 = x", "12.5 + 15 = x"], ["15 + x = 12.5", "15 + x = 12.5"], ["x − 15 = 12.5", "x − 15 = 12.5"]],
            ["\"12.5 plus a number\" is 12.5 + x, and \"equals 15\" is = 15.", "\"12.5 زائد عدد\" هي 12.5 + x، و\"يساوي 15\" هي = 15."], ["Read the words in order and swap each part for a symbol.", "اقرأ الكلمات بالترتيب واستبدل كل جزء برمز."]),
          Q(["Solve 180 + x = 275.", "حل المعادلة 180 + x = 275."], [["x = 95", "x = 95"], ["x = 455", "x = 455"], ["x = 85", "x = 85"], ["x = 105", "x = 105"]],
            ["x = 275 − 180 = 95. Check: 180 + 95 = 275.", "x = 275 − 180 = 95، والتحقق: 180 + 95 = 275."], ["The balance needs 95 more on the 180 side to match 275.", "يحتاج الميزان 95 إضافية على جانب الـ 180 ليتساوى مع 275."]),
          Q(["Solve 8.23 + p = 10.24.", "حل المعادلة 8.23 + p = 10.24."], [["p = 2.01", "p = 2.01"], ["p = 18.47", "p = 18.47"], ["p = 2.21", "p = 2.21"], ["p = 1.01", "p = 1.01"]],
            ["p = 10.24 − 8.23 = 2.01. Check: 8.23 + 2.01 = 10.24.", "p = 10.24 − 8.23 = 2.01، والتحقق: 8.23 + 2.01 = 10.24."], ["From 8.23 count up 2 to 10.23, then 0.01 more: 2.01.", "من 8.23 نعد 2 فنصل إلى 10.23، ثم 0.01 أخرى: 2.01."]),
          Q(["Solve T − 2.45 = 0.26.", "حل المعادلة T − 2.45 = 0.26."], [["T = 2.71", "T = 2.71"], ["T = 2.19", "T = 2.19"], ["T = 2.61", "T = 2.61"], ["T = 0.71", "T = 0.71"]],
            ["Addition undoes subtraction: T = 0.26 + 2.45 = 2.71.", "الجمع عكس الطرح: T = 0.26 + 2.45 = 2.71."], ["T lost 2.45 and 0.26 was left, so put the 2.45 back.", "فقد T مقدار 2.45 وتبقى 0.26، فنعيد الـ 2.45."]),
          Q(["Ezz ran 5.24 km and 6.50 km, 15 km in all over three days. How far did he run on the third day?", "جرى عز 5.24 كم و6.50 كم، و15 كم في ثلاثة أيام. كم جرى في اليوم الثالث؟"], [["3.26 km", "3.26 كم"], ["11.74 km", "11.74 كم"], ["3.36 km", "3.36 كم"], ["4.26 km", "4.26 كم"]],
            ["5.24 + 6.50 + x = 15, so x = 15 − 11.74 = 3.26 km.", "5.24 + 6.50 + x = 15، إذن x = 15 − 11.74 = 3.26 كم."], ["The whole bar is 15; the two known parts make 11.74; the missing part is 3.26.", "الشريط كله 15، والجزءان المعلومان 11.74، والجزء الناقص 3.26."]),
          Q(["Ras Muhammad National Park is 480 km², and 345 km² of it is marine. Which equation finds the land area x?", "مساحة محمية رأس محمد 480 كم²، منها 345 كم² بحرية. أي معادلة نجد بها المساحة البرية x؟"], [["345 + x = 480", "345 + x = 480"], ["345 + 480 = x", "345 + 480 = x"], ["x − 480 = 345", "x − 480 = 345"], ["480 + x = 345", "480 + x = 345"]],
            ["Marine part + land part = whole: 345 + x = 480, so x = 135 km².", "الجزء البحري + الجزء البري = الكل: 345 + x = 480، إذن x = 135 كم²."], ["The whole bar is 480 and one part is 345; the other part is the unknown.", "الشريط كله 480 وأحد الجزأين 345، والجزء الآخر هو المجهول."])
        ]
      },
      {
        id: "mp5u2l2", icon: "🌳", page: 51,
        title: { en: "Prime factorization and greatest common factors (G.C.F)", ar: "التحليل إلى العوامل الأولية والعامل المشترك الأكبر (ع.م.أ)" },
        idea: {
          official: {
            en: ["A prime number has exactly two factors: 1 and itself (2, 3, 5, 7, 11, 193...). A composite number has more than two factors. 1 is neither prime nor composite.",
              "A factor tree breaks a number into factor pairs until only primes remain: " + eq("24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3") + ".",
              "However you start the tree, the prime factorization is always the same: " + eq("24 = 2 × 2 × 2 × 3") + ".",
              "To find the greatest common factor (G.C.F) of two numbers, factor both and multiply the primes they share. " + eq("42 = 2 × 3 × 7") + " and " + eq("28 = 2 × 2 × 7") + ", they share 2 and 7, so " + eq("G.C.F = 2 × 7 = 14") + ".",
              "Use the G.C.F to share equally into the largest groups: tickets of 16 LE and 12 LE cost at most " + eq("G.C.F(16, 12) = 4") + " LE each."],
            ar: ["العدد الأولي له عاملان فقط: 1 والعدد نفسه (2 و3 و5 و7 و11 و193...)، والعدد غير الأولي له أكثر من عاملين، والعدد 1 ليس أوليًا وليس غير أولي.",
              "شجرة العوامل تحلل العدد إلى أزواج عوامل حتى لا يبقى إلا أعداد أولية: " + eq("24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3") + ".",
              "مهما بدأنا الشجرة فإن التحليل إلى العوامل الأولية واحد دائمًا: " + eq("24 = 2 × 2 × 2 × 3") + ".",
              "لإيجاد العامل المشترك الأكبر (ع.م.أ) لعددين نحلل كلًّا منهما ونضرب العوامل الأولية المشتركة: " + eq("42 = 2 × 3 × 7") + " و" + eq("28 = 2 × 2 × 7") + "، والمشترك 2 و7، إذن " + eq("ع.م.أ = 2 × 7 = 14") + ".",
              "نستخدم ع.م.أ للتقسيم بالتساوي إلى أكبر مجموعات: إذا كانت التذاكر بـ 16 جنيهًا و12 جنيهًا فأكبر ثمن للتذكرة " + eq("ع.م.أ(16، 12) = 4") + " جنيهات."]
          },
          story: {
            en: ["Akram watches ships in the Suez Canal, 193 km long. Can a ship go an equal whole number of kilometres in each of 12 hours?",
              "He tries a factor tree for 193 and finds only 1 × 193: 193 is prime, so 12 is not a factor of it.",
              "At the Red Sea, Shadi dives to 30 m and Taha to 15 m, stopping at equal intervals to check their gear.",
              "In Sharm El Sheikh, one group pays 16 LE for bus tickets and another pays 12 LE. Akram draws trees: 16 = 2 × 2 × 2 × 2 and 12 = 2 × 2 × 3.",
              "They share two 2s, so the most a ticket can cost is 2 × 2 = 4 LE. The first group bought 4 tickets and the second 3."],
            ar: ["يراقب أكرم السفن في قناة السويس التي طولها 193 كم: هل يمكن أن تقطع السفينة عددًا صحيحًا متساويًا من الكيلومترات في كل ساعة من 12 ساعة؟",
              "يجرب شجرة عوامل للعدد 193 فلا يجد إلا 1 × 193؛ إذن 193 عدد أولي، والعدد 12 ليس من عوامله.",
              "في البحر الأحمر يغوص شادي إلى عمق 30 م وطه إلى 15 م، ويتوقفان على مسافات متساوية لفحص معداتهما.",
              "في شرم الشيخ تدفع مجموعة 16 جنيهًا ثمن تذاكر الحافلة وأخرى 12 جنيهًا، فيرسم أكرم شجرتين: 16 = 2 × 2 × 2 × 2 و12 = 2 × 2 × 3.",
              "المشترك بينهما عاملان 2، إذن أكبر ثمن للتذكرة 2 × 2 = 4 جنيهات؛ اشترت المجموعة الأولى 4 تذاكر والثانية 3."]
          }
        },
        words: [
          ["Prime number", "العدد الأولي", "A number with exactly two factors, 1 and itself, like 7 or 193.", "عدد له عاملان فقط هما 1 والعدد نفسه، مثل 7 أو 193."],
          ["Composite number", "العدد غير الأولي", "A number with more than two factors, like 12.", "عدد له أكثر من عاملين، مثل 12."],
          ["Factor", "العامل", "A number multiplied by another number to make a product: 4 and 6 are factors of 24.", "عدد نضربه في عدد آخر لنحصل على حاصل ضرب: 4 و6 عاملان للعدد 24."],
          ["Factor tree", "شجرة العوامل", "A diagram that splits a number into factors until only primes remain.", "رسم يحلل العدد إلى عوامل حتى لا يبقى إلا أعداد أولية."],
          ["Prime factorization", "التحليل إلى العوامل الأولية", "Writing a number as a product of primes: 24 = 2 × 2 × 2 × 3.", "كتابة العدد في صورة حاصل ضرب أعداد أولية: 24 = 2 × 2 × 2 × 3."],
          ["Greatest common factor (G.C.F)", "العامل المشترك الأكبر (ع.م.أ)", "The largest number that divides two numbers exactly: G.C.F(42, 28) = 14.", "أكبر عدد يقسم العددين دون باقٍ: ع.م.أ(42، 28) = 14."]
        ],
        lab: { parts: [{ type: "mp5_tree" }] },
        quiz: [
          Q(["What is the prime factorization of 24?", "ما التحليل إلى العوامل الأولية للعدد 24؟"], [["2 × 2 × 2 × 3", "2 × 2 × 2 × 3"], ["2 × 12", "2 × 12"], ["4 × 6", "4 × 6"], ["2 × 3 × 4", "2 × 3 × 4"]],
            ["Only primes may stay: 24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3.", "لا يبقى إلا الأعداد الأولية: 24 = 2 × 12 = 2 × 2 × 6 = 2 × 2 × 2 × 3."], ["12, 6 and 4 are composite branches that must keep splitting until every leaf is prime.", "12 و6 و4 فروع غير أولية يجب أن تتفرع حتى تصبح كل الأوراق أولية."]),
          Q(["Which number is prime?", "أي الأعداد التالية أولي؟"], [["193", "193"], ["91", "91"], ["51", "51"], ["87", "87"]],
            ["91 = 7 × 13, 51 = 3 × 17 and 87 = 3 × 29 are composite. 193 has only the factors 1 and 193.", "91 = 7 × 13 و51 = 3 × 17 و87 = 3 × 29 أعداد غير أولية، أما 193 فعاملاه 1 و193 فقط."], ["Akram's factor tree for 193 cannot grow any branches: it is prime.", "شجرة أكرم للعدد 193 لا يمكن أن تتفرع، إذن هو عدد أولي."]),
          Q(["Is 1 prime or composite?", "هل العدد 1 أولي أم غير أولي؟"], [["Neither", "ليس أوليًا ولا غير أولي"], ["Prime", "أولي"], ["Composite", "غير أولي"], ["Both", "الاثنان معًا"]],
            ["A prime needs exactly two factors and a composite more than two. 1 has only one factor.", "العدد الأولي له عاملان بالضبط، وغير الأولي له أكثر من عاملين، والعدد 1 له عامل واحد فقط."], ["1 has only itself as a factor, so it fits neither team.", "العدد 1 ليس له عامل إلا نفسه، فلا ينتمي إلى أي من الفريقين."]),
          Q(["Find n if n = 2 × 2 × 7.", "أوجد n إذا كان n = 2 × 2 × 7."], [["28", "28"], ["11", "11"], ["14", "14"], ["24", "24"]],
            ["2 × 2 = 4 and 4 × 7 = 28.", "2 × 2 = 4 و4 × 7 = 28."], ["Climb the tree back up: the leaves 2, 2 and 7 multiply to the top number 28.", "اصعد الشجرة من أسفل: الأوراق 2 و2 و7 حاصل ضربها العدد الأعلى 28."]),
          Q(["What is the G.C.F of 42 and 28?", "ما ع.م.أ للعددين 42 و28؟"], [["14", "14"], ["7", "7"], ["2", "2"], ["84", "84"]],
            ["42 = 2 × 3 × 7 and 28 = 2 × 2 × 7. Shared primes: 2 and 7, so G.C.F = 14.", "42 = 2 × 3 × 7 و28 = 2 × 2 × 7، والعوامل المشتركة 2 و7، إذن ع.م.أ = 14."], ["Both trees have a 2 and a 7 in their leaves; multiply the shared leaves.", "في الشجرتين ورقة 2 وورقة 7، فنضرب الأوراق المشتركة."]),
          Q(["One group spends 16 LE on tickets and another 12 LE. Each ticket costs the same. At most, how much does a ticket cost?", "تنفق مجموعة 16 جنيهًا على التذاكر وأخرى 12 جنيهًا، وثمن التذكرة واحد. ما أكبر ثمن ممكن للتذكرة؟"], [["4 LE", "4 جنيهات"], ["2 LE", "جنيهان"], ["6 LE", "6 جنيهات"], ["8 LE", "8 جنيهات"]],
            ["The ticket price must divide 16 and 12, and we want the greatest: G.C.F(16, 12) = 4 LE.", "ثمن التذكرة يجب أن يقسم 16 و12، ونريد الأكبر: ع.م.أ(16، 12) = 4 جنيهات."], ["16 = 4 tickets of 4 LE and 12 = 3 tickets of 4 LE. 6 and 8 do not divide both.", "16 = 4 تذاكر بـ 4 جنيهات، و12 = 3 تذاكر بـ 4 جنيهات، و6 و8 لا يقسمان العددين."]),
          Q(["What is the G.C.F of 20 and 28?", "ما ع.م.أ للعددين 20 و28؟"], [["4", "4"], ["2", "2"], ["140", "140"], ["8", "8"]],
            ["20 = 2 × 2 × 5 and 28 = 2 × 2 × 7. They share 2 × 2, so G.C.F = 4.", "20 = 2 × 2 × 5 و28 = 2 × 2 × 7، والمشترك 2 × 2، إذن ع.م.أ = 4."], ["Factors of 20: 1, 2, 4, 5, 10, 20. Of 28: 1, 2, 4, 7, 14, 28. The biggest shared one is 4.", "عوامل 20: 1 و2 و4 و5 و10 و20، وعوامل 28: 1 و2 و4 و7 و14 و28، وأكبر عامل مشترك 4."])
        ]
      },
      {
        id: "mp5u2l3", icon: "🐸", page: 56,
        title: { en: "Identifying multiples, least common multiple (L.C.M) and factors or multiples?", ar: "المضاعفات، والمضاعف المشترك الأصغر (م.م.أ)، وعوامل أم مضاعفات؟" },
        idea: {
          official: {
            en: ["The multiples of a number are what you get when you skip count by it: multiples of 6 are " + eq("6, 12, 18, 24, 30, ...") + ". A number has unlimited multiples but a limited number of factors.",
              "A common multiple of two numbers is a multiple of both. The first twelve multiples of 3 and 4 share " + eq("12, 24, 36") + ".",
              "The least common multiple (L.C.M) is the smallest common multiple. List multiples until one matches: 6, 12, 18... and 9, 18... so " + eq("L.C.M(6, 9) = 18") + ".",
              "Factors or multiples? If we split things into the largest equal groups, use the G.C.F. If we wait until two repeating events happen together, or want equal amounts from packs, use the L.C.M.",
              "Example: 12 and 8 have " + eq("G.C.F = 4") + " and " + eq("L.C.M = 24") + "."],
            ar: ["مضاعفات العدد هي الأعداد التي نحصل عليها عند العد بالقفز به: مضاعفات 6 هي " + eq("6, 12, 18, 24, 30, ...") + "، وللعدد مضاعفات لا نهاية لها لكن عوامله محدودة.",
              "المضاعف المشترك لعددين هو مضاعف لكل منهما؛ فأول اثني عشر مضاعفًا للعددين 3 و4 تشترك في " + eq("12, 24, 36") + ".",
              "المضاعف المشترك الأصغر (م.م.أ) هو أصغر مضاعف مشترك؛ نكتب المضاعفات حتى يتطابق عدد: 6 و12 و18... و9 و18...، إذن " + eq("م.م.أ(6، 9) = 18") + ".",
              "عوامل أم مضاعفات؟ إذا قسمنا أشياء إلى أكبر مجموعات متساوية نستخدم ع.م.أ، وإذا انتظرنا حدوث حدثين متكررين معًا أو أردنا كميات متساوية من عبوات نستخدم م.م.أ.",
              "مثال: للعددين 12 و8 " + eq("ع.م.أ = 4") + " و" + eq("م.م.أ = 24") + "."]
          },
          story: {
            en: ["Hend and her younger sister Jana bike around a small lake. Hend finishes a lap every 6 minutes and Jana every 8 minutes.",
              "Hend passes the start at 6, 12, 18, 24 minutes. Jana passes it at 8, 16, 24 minutes.",
              "At minute 24 they meet at the start for the first time: L.C.M(6, 8) = 24.",
              "Back home, Badr buys kofta in packs of 3 and aish baladi in packs of 12 for his party. The smallest equal amount is 12 of each: L.C.M(3, 12) = 12.",
              "Nour has 6 oranges and 12 pieces of dried fruit for identical snack bags. That is sharing, so he uses factors: G.C.F(6, 12) = 6 bags."],
            ar: ["تقود هند وأختها الصغرى جنى دراجتيهما حول بحيرة صغيرة؛ تكمل هند لفة كل 6 دقائق، وجنى كل 8 دقائق.",
              "تمر هند بنقطة البداية عند الدقائق 6 و12 و18 و24، وتمر جنى عند 8 و16 و24.",
              "عند الدقيقة 24 تلتقيان عند البداية لأول مرة: م.م.أ(6، 8) = 24.",
              "في البيت يشتري بدر الكفتة في عبوات من 3 والعيش البلدي في عبوات من 12 لحفلته، وأصغر كمية متساوية 12 من كل نوع: م.م.أ(3، 12) = 12.",
              "مع نور 6 برتقالات و12 قطعة فاكهة مجففة لعمل أكياس متماثلة؛ هذا تقسيم، فيستخدم العوامل: ع.م.أ(6، 12) = 6 أكياس."]
          }
        },
        words: [
          ["Multiple", "المضاعف", "The product of a number and a whole number: 6, 12, 18 are multiples of 6.", "حاصل ضرب العدد في عدد صحيح: 6 و12 و18 من مضاعفات 6."],
          ["Skip counting", "العد بالقفز", "Counting by the same jump each time, a way to list multiples.", "العد بقفزات متساوية في كل مرة، وهو طريقة لكتابة المضاعفات."],
          ["Common multiple", "المضاعف المشترك", "A number that is a multiple of two or more numbers: 24 for 6 and 8.", "عدد يكون مضاعفًا لعددين أو أكثر: 24 للعددين 6 و8."],
          ["Least common multiple (L.C.M)", "المضاعف المشترك الأصغر (م.م.أ)", "The smallest common multiple: L.C.M(6, 9) = 18.", "أصغر مضاعف مشترك: م.م.أ(6، 9) = 18."],
          ["Product", "حاصل الضرب", "The answer to a multiplication problem.", "ناتج عملية الضرب."]
        ],
        lab: { parts: [{ type: "mp5_hops" }] },
        quiz: [
          Q(["Which list shows the first five multiples of 6?", "أي قائمة تبين أول خمسة مضاعفات للعدد 6؟"], [["6, 12, 18, 24, 30", "6, 12, 18, 24, 30"], ["1, 2, 3, 6", "1, 2, 3, 6"], ["6, 11, 16, 21, 26", "6, 11, 16, 21, 26"], ["12, 18, 24, 30, 36", "12, 18, 24, 30, 36"]],
            ["Multiply 6 by 1, 2, 3, 4, 5: 6, 12, 18, 24, 30. (1, 2, 3, 6 are the factors of 6.)", "نضرب 6 في 1 و2 و3 و4 و5: 6 و12 و18 و24 و30، أما 1 و2 و3 و6 فهي عوامل 6."], ["The frog jumps 6 each time and lands on 6, 12, 18, 24, 30.", "يقفز الضفدع 6 في كل مرة فيهبط على 6 و12 و18 و24 و30."]),
          Q(["What is the L.C.M of 6 and 9?", "ما م.م.أ للعددين 6 و9؟"], [["18", "18"], ["54", "54"], ["3", "3"], ["36", "36"]],
            ["Multiples of 6: 6, 12, 18... Multiples of 9: 9, 18... The first common one is 18.", "مضاعفات 6: 6 و12 و18...، ومضاعفات 9: 9 و18...، وأول مضاعف مشترك 18."], ["The 6-frog and the 9-frog first land on the same stone at 18.", "يهبط ضفدع الـ 6 وضفدع الـ 9 على الحجر نفسه أول مرة عند 18."]),
          Q(["Hend finishes a lap every 6 minutes and Jana every 8 minutes. After how many minutes do they meet at the start again?", "تكمل هند لفة كل 6 دقائق وجنى كل 8 دقائق. بعد كم دقيقة تلتقيان عند البداية مرة أخرى؟"], [["24", "24"], ["48", "48"], ["14", "14"], ["2", "2"]],
            ["We need the L.C.M of 6 and 8: 6, 12, 18, 24 and 8, 16, 24. So 24 minutes.", "نحتاج م.م.أ للعددين 6 و8: 6 و12 و18 و24، و8 و16 و24، إذن 24 دقيقة."], ["Hend's 4th lap and Jana's 3rd lap both end at minute 24.", "تنتهي اللفة الرابعة لهند واللفة الثالثة لجنى معًا عند الدقيقة 24."]),
          Q(["Mohamed hikes every 7 days and lifts weights every 4 days. He did both today. In how many days will he do both again?", "يتنزه محمد سيرًا كل 7 أيام ويرفع الأثقال كل 4 أيام، وفعل الاثنين اليوم. بعد كم يومًا يفعلهما معًا مرة أخرى؟"], [["28", "28"], ["11", "11"], ["14", "14"], ["3", "3"]],
            ["7 and 4 share no factor except 1, so L.C.M = 7 × 4 = 28 days.", "العددان 7 و4 ليس بينهما عامل مشترك إلا 1، إذن م.م.أ = 7 × 4 = 28 يومًا."], ["Count by 7: 7, 14, 21, 28. Only 28 is also in the 4-times table.", "نعد بالسبعات: 7 و14 و21 و28، والعدد 28 وحده من مضاعفات 4."]),
          Q(["Omnia cuts cloth strips 35 cm and 75 cm wide into equal strips as wide as possible. How wide?", "تقص أمنية شريطي قماش عرضهما 35 سم و75 سم إلى شرائط متساوية بأكبر عرض ممكن. كم يكون العرض؟"], [["5 cm (G.C.F)", "5 سم (ع.م.أ)"], ["525 cm (L.C.M)", "525 سم (م.م.أ)"], ["7 cm", "7 سم"], ["15 cm", "15 سم"]],
            ["Cutting into the largest equal parts is a G.C.F problem: 35 = 5 × 7, 75 = 3 × 5 × 5, so G.C.F = 5 cm.", "القص إلى أكبر أجزاء متساوية مسألة ع.م.أ: 35 = 5 × 7 و75 = 3 × 5 × 5، إذن ع.م.أ = 5 سم."], ["The strip width must fit exactly into both 35 and 75; the biggest that does is 5.", "عرض الشريط يجب أن يدخل في 35 وفي 75 تمامًا، وأكبر عرض يحقق ذلك 5."]),
          Q(["Which number is NOT a common multiple of 5 and 7?", "أي عدد ليس مضاعفًا مشتركًا للعددين 5 و7؟"], [["55", "55"], ["35", "35"], ["70", "70"], ["105", "105"]],
            ["Common multiples of 5 and 7 are multiples of 35: 35, 70, 105. 55 = 5 × 11 is not a multiple of 7.", "المضاعفات المشتركة للعددين 5 و7 هي مضاعفات 35: 35 و70 و105، أما 55 = 5 × 11 فليس من مضاعفات 7."], ["The 7-frog never lands on 55: 49, 56, ... it jumps over it.", "ضفدع الـ 7 لا يهبط أبدًا على 55: 49 ثم 56، فيقفز فوقه."]),
          Q(["What are the G.C.F and the L.C.M of 9 and 12?", "ما ع.م.أ وم.م.أ للعددين 9 و12؟"], [["G.C.F 3, L.C.M 36", "ع.م.أ 3، م.م.أ 36"], ["G.C.F 36, L.C.M 3", "ع.م.أ 36، م.م.أ 3"], ["G.C.F 3, L.C.M 108", "ع.م.أ 3، م.م.أ 108"], ["G.C.F 9, L.C.M 12", "ع.م.أ 9، م.م.أ 12"]],
            ["9 = 3 × 3 and 12 = 2 × 2 × 3, so G.C.F = 3. Multiples of 12: 12, 24, 36; 36 is also a multiple of 9, so L.C.M = 36.", "9 = 3 × 3 و12 = 2 × 2 × 3، إذن ع.م.أ = 3، ومضاعفات 12: 12 و24 و36، و36 من مضاعفات 9، إذن م.م.أ = 36."], ["The G.C.F is never bigger than the smaller number; the L.C.M is never smaller than the bigger one.", "ع.م.أ لا يزيد أبدًا على العدد الأصغر، وم.م.أ لا يقل أبدًا عن العدد الأكبر."])
        ]
      }
    ]
  });

  /* ======================= UNIT 3 - MULTIPLICATION WITH WHOLE NUMBERS ======================= */
  U.push({
    id: "mp5u3", num: 3, icon: "✖️", color: "orange",
    title: { en: "Multiplication with Whole Numbers", ar: "الضرب في الأعداد الصحيحة" },
    lessons: [
      {
        id: "mp5u3l1", icon: "🟧", page: 65,
        title: { en: "Using the area model to multiply and the distributive property of multiplication", ar: "استخدام نموذج المساحة في الضرب وخاصية التوزيع" },
        idea: {
          official: {
            en: ["In an area model, the two factors are the sides of a rectangle and the product is its area.",
              "Decompose each factor by place value. For " + eq("46 × 24") + ": split 46 into 40 + 6 and 24 into 20 + 4.",
              "Find the four partial products: " + eq("40 × 20 = 800") + ", " + eq("6 × 20 = 120") + ", " + eq("40 × 4 = 160") + ", " + eq("6 × 4 = 24") + ".",
              "Add them: " + eq("800 + 120 + 160 + 24 = 1,104") + ". The book's example: " + eq("234 × 27 = 6,318") + ".",
              "The Distributive Property lets us multiply each number inside the parentheses by the number outside: " + eq("8 × 9 = 8 × (5 + 4) = 40 + 32 = 72") + ".",
              "Watch the place value of each part: in " + eq("206 × 45") + " the 200 part gives " + eq("200 × 40 = 8,000") + ", so the product is " + eq("9,270") + ", not 11,700."],
            ar: ["في نموذج المساحة يكون العاملان طولي ضلعي مستطيل، ويكون حاصل الضرب مساحته.",
              "نحلل كل عامل حسب القيمة المكانية؛ فلحساب " + eq("46 × 24") + " نحلل 46 إلى 40 + 6، و24 إلى 20 + 4.",
              "نوجد حواصل الضرب الجزئية الأربعة: " + eq("40 × 20 = 800") + " و" + eq("6 × 20 = 120") + " و" + eq("40 × 4 = 160") + " و" + eq("6 × 4 = 24") + ".",
              "ثم نجمعها: " + eq("800 + 120 + 160 + 24 = 1,104") + "، ومثال الكتاب: " + eq("234 × 27 = 6,318") + ".",
              "خاصية التوزيع تسمح بضرب كل عدد داخل القوسين في العدد خارجهما: " + eq("8 × 9 = 8 × (5 + 4) = 40 + 32 = 72") + ".",
              "انتبه للقيمة المكانية لكل جزء: في " + eq("206 × 45") + " يعطي الجزء 200 الناتج " + eq("200 × 40 = 8,000") + "، فيكون حاصل الضرب " + eq("9,270") + " وليس 11,700."]
          },
          story: {
            en: ["Eman is planting a garden 46 m long and 24 m wide and needs its area to buy topsoil.",
              "She lays ropes across the garden: one at 40 m, one at 20 m. Now there are four smaller beds.",
              "The big bed is 40 × 20 = 800 m², the long thin one 40 × 4 = 160 m², the short one 6 × 20 = 120 m², and the little corner 6 × 4 = 24 m².",
              "Together: 800 + 160 + 120 + 24 = 1,104 m² of garden.",
              "Her uncle Omar runs desert trips with 12 buses of 25 seats. Eman splits 12 into 10 + 2: 250 + 50 = 300 passengers a day."],
            ar: ["تزرع إيمان حديقة طولها 46 م وعرضها 24 م، وتحتاج إلى مساحتها لتشتري التربة.",
              "تمد حبلين عبر الحديقة: واحدًا عند 40 م وآخر عند 20 م، فتصبح هناك أربعة أحواض أصغر.",
              "الحوض الكبير 40 × 20 = 800 م²، والطويل الرفيع 40 × 4 = 160 م²، والقصير 6 × 20 = 120 م²، والركن الصغير 6 × 4 = 24 م².",
              "المجموع: 800 + 160 + 120 + 24 = 1,104 م² مساحة الحديقة.",
              "خالها عمر ينظم رحلات صحراوية بـ 12 حافلة في كل منها 25 مقعدًا، فتحلل إيمان 12 إلى 10 + 2: 250 + 50 = 300 راكب يوميًا."]
          }
        },
        words: [
          ["Area model", "نموذج المساحة", "A rectangle split into parts to show a multiplication; its area is the product.", "مستطيل مقسم إلى أجزاء لتمثيل عملية ضرب، ومساحته هي حاصل الضرب."],
          ["Partial product", "حاصل الضرب الجزئي", "The product of one part of each factor, like 40 × 20 = 800.", "حاصل ضرب جزء من كل عامل، مثل 40 × 20 = 800."],
          ["Distributive Property", "خاصية التوزيع", "a × (b + c) = a × b + a × c, like 8 × (5 + 4) = 40 + 32.", "a × (b + c) = a × b + a × c، مثل 8 × (5 + 4) = 40 + 32."],
          ["Decompose", "يحلل", "Break a factor into parts by place value: 46 = 40 + 6.", "تجزئة العامل إلى أجزاء حسب القيمة المكانية: 46 = 40 + 6."],
          ["Power of ten", "قوة العشرة", "10, 100, 1,000, 10,000 ... made by multiplying 10 by itself.", "10 و100 و1,000 و10,000... وتنتج من ضرب 10 في نفسه."]
        ],
        lab: { parts: [{ type: "mp5_area" }] },
        quiz: [
          Q(["What is 46 × 24?", "ما ناتج 46 × 24؟"], [["1,104", "1,104"], ["984", "984"], ["824", "824"], ["1,124", "1,124"]],
            ["800 + 160 + 120 + 24 = 1,104.", "800 + 160 + 120 + 24 = 1,104."], ["Eman's four beds add up to 1,104 m².", "مجموع أحواض إيمان الأربعة 1,104 م²."]),
          Q(["Which expression is equal to 8 × 9?", "أي مقدار يساوي 8 × 9؟"], [["8 × (5 + 4)", "8 × (5 + 4)"], ["8 × 5 + 4", "8 × 5 + 4"], ["(8 + 5) × 4", "(8 + 5) × 4"], ["8 + 5 × 4", "8 + 5 × 4"]],
            ["9 = 5 + 4 and the 8 multiplies both parts: 8 × 5 + 8 × 4 = 40 + 32 = 72.", "9 = 5 + 4، والعدد 8 يضرب الجزأين: 8 × 5 + 8 × 4 = 40 + 32 = 72."], ["Cut the 8-by-9 rectangle into 8-by-5 and 8-by-4 pieces: both pieces keep all 8 rows.", "نقطع المستطيل 8 × 9 إلى قطعتين 8 × 5 و8 × 4، وكل قطعة تحتفظ بالصفوف الثمانية."]),
          Q(["What is 234 × 27?", "ما ناتج 234 × 27؟"], [["6,318", "6,318"], ["6,218", "6,218"], ["4,680", "4,680"], ["1,638", "1,638"]],
            ["234 × 20 = 4,680 and 234 × 7 = 1,638; 4,680 + 1,638 = 6,318.", "234 × 20 = 4,680 و234 × 7 = 1,638، والمجموع 4,680 + 1,638 = 6,318."], ["Estimate 230 × 30 = 6,900; 6,318 is close.", "التقدير 230 × 30 = 6,900، و6,318 قريب منه."]),
          Q(["Badir says 206 × 45 = 11,700. What is the correct product?", "يقول بدير إن 206 × 45 = 11,700. ما حاصل الضرب الصحيح؟"], [["9,270", "9,270"], ["11,700", "11,700"], ["9,170", "9,170"], ["8,270", "8,270"]],
            ["(200 × 40) + (200 × 5) + (6 × 40) + (6 × 5) = 8,000 + 1,000 + 240 + 30 = 9,270.", "(200 × 40) + (200 × 5) + (6 × 40) + (6 × 5) = 8,000 + 1,000 + 240 + 30 = 9,270."], ["Badir wrote 2,400 for 6 × 40 and 300 for 6 × 5: he treated the 6 as 60.", "كتب بدير 2,400 بدلًا من 6 × 40 و300 بدلًا من 6 × 5؛ لقد عامل الرقم 6 كأنه 60."]),
          Q(["Omar has 12 buses and each holds 25 passengers. How many passengers can he take?", "مع عمر 12 حافلة تسع كل منها 25 راكبًا. كم راكبًا يمكنه أن ينقل؟"], [["300", "300"], ["250", "250"], ["37", "37"], ["275", "275"]],
            ["12 × 25 = (10 + 2) × 25 = 250 + 50 = 300.", "12 × 25 = (10 + 2) × 25 = 250 + 50 = 300."], ["10 buses carry 250 people and 2 more buses carry 50.", "10 حافلات تنقل 250 راكبًا وحافلتان أخريان تنقلان 50."]),
          Q(["A fennec fox den can have 15 entrances. How many entrances could 32 dens have?", "قد يكون لجحر ثعلب الفنك 15 مدخلًا. كم مدخلًا قد يكون لـ 32 جحرًا؟"], [["480", "480"], ["450", "450"], ["47", "47"], ["320", "320"]],
            ["32 × 15 = 32 × (10 + 5) = 320 + 160 = 480.", "32 × 15 = 32 × (10 + 5) = 320 + 160 = 480."], ["Ten entrances per den give 320; five more per den give 160.", "عشرة مداخل لكل جحر تعطي 320، وخمسة أخرى لكل جحر تعطي 160."]),
          Q(["Evaluate (40 × 40) + (40 × 8) + (9 × 40) + (9 × 8).", "أوجد قيمة (40 × 40) + (40 × 8) + (9 × 40) + (9 × 8)."], [["2,352", "2,352"], ["2,252", "2,252"], ["1,672", "1,672"], ["3,280", "3,280"]],
            ["1,600 + 320 + 360 + 72 = 2,352, which is 49 × 48.", "1,600 + 320 + 360 + 72 = 2,352، وهو يساوي 49 × 48."], ["These are the four boxes of the area model for 49 × 48.", "هذه هي الصناديق الأربعة في نموذج المساحة للضرب 49 × 48."])
        ]
      },
      {
        id: "mp5u3l2", icon: "🧮", page: 72,
        title: { en: "Multiplying by a 2-digit number using the algorithm and multiplying multi-digit numbers", ar: "الضرب في عدد مكون من رقمين باستخدام الخوارزمية وضرب الأعداد متعددة الأرقام" },
        idea: {
          official: {
            en: ["The standard algorithm is a short way of writing the area model. Work from right to left, starting with the Ones.",
              "For " + eq("45 × 37") + ": first multiply 45 by the 7 ones: " + eq("45 × 7 = 315") + ".",
              "Then multiply 45 by the 3 tens: write a 0 in the Ones place first, because " + eq("45 × 30 = 1,350") + ".",
              "Line up the partial products by place value and add: " + eq("315 + 1,350 = 1,665") + ".",
              "The same steps work for bigger numbers: " + eq("3,567 × 24 = 14,268 + 71,340 = 85,608") + ".",
              "Check with an estimate: " + eq("3,567 × 24 ≈ 4,000 × 20 = 80,000") + ", so 85,608 is reasonable."],
            ar: ["الخوارزمية القياسية طريقة مختصرة لكتابة نموذج المساحة، ونعمل من اليمين إلى اليسار بدءًا من الآحاد.",
              "لحساب " + eq("45 × 37") + " نضرب أولًا 45 في 7 آحاد: " + eq("45 × 7 = 315") + ".",
              "ثم نضرب 45 في 3 عشرات، فنكتب أولًا 0 في خانة الآحاد لأن " + eq("45 × 30 = 1,350") + ".",
              "نرتب حواصل الضرب الجزئية حسب القيمة المكانية ونجمع: " + eq("315 + 1,350 = 1,665") + ".",
              "والخطوات نفسها تصلح للأعداد الأكبر: " + eq("3,567 × 24 = 14,268 + 71,340 = 85,608") + ".",
              "نتحقق بالتقدير: " + eq("3,567 × 24 ≈ 4,000 × 20 = 80,000") + "، إذن 85,608 ناتج معقول."]
          },
          story: {
            en: ["Ashraf checks the orders at a book fair: 357 boxes with 36 books in each.",
              "Row 1: 357 × 6. Six times 7 is 42, write 2, carry 4... the row is 2,142.",
              "Row 2: 357 × 3 tens. He writes the placeholder 0 first, then 1,071 in front of it: 10,710.",
              "2,142 + 10,710 = 12,852 books. Last time he forgot the 0 and got a much smaller answer.",
              "His estimate, 360 × 40 = 14,400, tells him 12,852 is in the right neighbourhood."],
            ar: ["يراجع أشرف الطلبيات في معرض كتاب: 357 صندوقًا في كل منها 36 كتابًا.",
              "الصف الأول: 357 × 6؛ ستة في سبعة = 42، نكتب 2 ونحمل 4... فيكون الصف 2,142.",
              "الصف الثاني: 357 × 3 عشرات؛ يكتب الصفر أولًا ثم 1,071 قبله: 10,710.",
              "2,142 + 10,710 = 12,852 كتابًا، وفي المرة السابقة نسي الصفر فحصل على ناتج أصغر كثيرًا.",
              "وتقديره 360 × 40 = 14,400 يخبره أن 12,852 في المكان الصحيح تقريبًا."]
          }
        },
        words: [
          ["Standard algorithm", "الخوارزمية القياسية", "The step-by-step written method for multiplying in columns.", "طريقة الحل المكتوبة خطوة بخطوة للضرب في أعمدة."],
          ["Regroup (carry)", "الحمل (إعادة التجميع)", "When a product is 10 or more, write the ones digit and carry the tens to the next column.", "إذا كان الناتج 10 أو أكثر نكتب رقم الآحاد ونحمل العشرات إلى العمود التالي."],
          ["Placeholder zero", "صفر حفظ المكان", "The 0 we write in the Ones place before multiplying by the tens digit.", "الصفر الذي نكتبه في خانة الآحاد قبل الضرب في رقم العشرات."],
          ["Partial product", "حاصل الضرب الجزئي", "Each row of the algorithm, like 315 and 1,350 in 45 × 37.", "كل صف في الخوارزمية، مثل 315 و1,350 في 45 × 37."],
          ["Reasonable", "معقول", "Close to the estimate, so the answer makes sense.", "قريب من التقدير، فيكون الناتج منطقيًا."]
        ],
        lab: { parts: [{ type: "mp5_algo" }] },
        quiz: [
          Q(["What is 45 × 37?", "ما ناتج 45 × 37؟"], [["1,665", "1,665"], ["1,575", "1,575"], ["450", "450"], ["1,465", "1,465"]],
            ["45 × 7 = 315 and 45 × 30 = 1,350; 315 + 1,350 = 1,665.", "45 × 7 = 315 و45 × 30 = 1,350، والمجموع 315 + 1,350 = 1,665."], ["Two rows, then add them: 315 and 1,350 make 1,665.", "صفّان ثم نجمعهما: 315 و1,350 يعطيان 1,665."]),
          Q(["What is 76 × 82?", "ما ناتج 76 × 82؟"], [["6,232", "6,232"], ["6,132", "6,132"], ["760", "760"], ["5,232", "5,232"]],
            ["76 × 2 = 152 and 76 × 80 = 6,080; 152 + 6,080 = 6,232.", "76 × 2 = 152 و76 × 80 = 6,080، والمجموع 152 + 6,080 = 6,232."], ["Estimate 80 × 80 = 6,400; 6,232 is close.", "التقدير 80 × 80 = 6,400، و6,232 قريب منه."]),
          Q(["Ashraf evaluated 357 × 36. What is the correct product?", "حسب أشرف 357 × 36. ما حاصل الضرب الصحيح؟"], [["12,852", "12,852"], ["12,663", "12,663"], ["3,213", "3,213"], ["12,752", "12,752"]],
            ["357 × 6 = 2,142 and 357 × 30 = 10,710; 2,142 + 10,710 = 12,852.", "357 × 6 = 2,142 و357 × 30 = 10,710، والمجموع 2,142 + 10,710 = 12,852."], ["The second row must end in the placeholder 0: 10,710, not 10,521.", "يجب أن ينتهي الصف الثاني بصفر حفظ المكان: 10,710 وليس 10,521."]),
          Q(["What is 3,567 × 24?", "ما ناتج 3,567 × 24؟"], [["85,608", "85,608"], ["85,508", "85,508"], ["21,402", "21,402"], ["14,268", "14,268"]],
            ["3,567 × 4 = 14,268 and 3,567 × 20 = 71,340; 14,268 + 71,340 = 85,608.", "3,567 × 4 = 14,268 و3,567 × 20 = 71,340، والمجموع 14,268 + 71,340 = 85,608."], ["Estimate 4,000 × 20 = 80,000, so 85,608 is reasonable; 14,268 is only the first row.", "التقدير 4,000 × 20 = 80,000، إذن 85,608 معقول، أما 14,268 فهو الصف الأول فقط."]),
          Q(["Akram says 34 × 69 = (34 × 70) − 34. What is the product?", "يقول أكرم إن 34 × 69 = (34 × 70) − 34. ما حاصل الضرب؟"], [["2,346", "2,346"], ["2,380", "2,380"], ["2,414", "2,414"], ["2,246", "2,246"]],
            ["34 × 70 = 2,380 and 2,380 − 34 = 2,346. Akram is right: 69 groups is 70 groups minus one group.", "34 × 70 = 2,380 و2,380 − 34 = 2,346، وأكرم على حق: 69 مجموعة = 70 مجموعة ناقص مجموعة."], ["70 boxes of 34 is easy; then take one box of 34 away.", "70 صندوقًا في كل منها 34 حساب سهل، ثم نأخذ صندوقًا واحدًا."]),
          Q(["The Eastern Desert gets less than 25 mm of rain a year. What is the most rain in 25 years?", "تسقط على الصحراء الشرقية أمطار أقل من 25 مم سنويًا. ما أكبر كمية مطر في 25 سنة؟"], [["625 mm", "625 مم"], ["50 mm", "50 مم"], ["525 mm", "525 مم"], ["650 mm", "650 مم"]],
            ["25 × 25 = 25 × 20 + 25 × 5 = 500 + 125 = 625 mm.", "25 × 25 = 25 × 20 + 25 × 5 = 500 + 125 = 625 مم."], ["Four years give 100 mm, so 24 years give 600 mm, and one more year makes 625.", "كل أربع سنوات تعطي 100 مم، فالـ 24 سنة تعطي 600 مم، وسنة أخرى تجعلها 625."]),
          Q(["Which is the best estimate for 8,222 × 53?", "ما أفضل تقدير لناتج 8,222 × 53؟"], [["8,000 × 50 = 400,000", "8,000 × 50 = 400,000"], ["8,000 × 5 = 40,000", "8,000 × 5 = 40,000"], ["8,000 + 50 = 8,050", "8,000 + 50 = 8,050"], ["800 × 50 = 40,000", "800 × 50 = 40,000"]],
            ["Round 8,222 to 8,000 and 53 to 50: 8,000 × 50 = 400,000. (Exact: 435,766.)", "نقرب 8,222 إلى 8,000 و53 إلى 50: 8,000 × 50 = 400,000 (والناتج الدقيق 435,766)."], ["Keep the place values: 53 is about 50, not 5.", "حافظ على القيم المكانية: 53 تقارب 50 وليست 5."])
        ]
      },
      {
        id: "mp5u3l3", icon: "🍢", page: 78,
        title: { en: "Multiplication problems in the real world", ar: "مسائل الضرب في الحياة الواقعية" },
        idea: {
          official: {
            en: ["Read the problem and find what is repeated: the size of one group and the number of groups.",
              "Some problems need more than one step. Plan the steps first, then multiply and add.",
              "Sandstorm: " + eq("120 min × 33 days = 3,960 min") + ", and " + eq("3,960 ÷ 60 = 66") + " hours.",
              "Kebabs: first add the months, " + eq("402 + 753 = 1,155") + " kebabs, then " + eq("1,155 × 83 g = 95,865 g") + " of meat.",
              "Baklava nuts: " + eq("170 × 3 = 510 g") + " per recipe, then " + eq("510 × 18 = 9,180 g") + ".",
              "Always label the answer with its unit (minutes, grams, millilitres) and check it with an estimate."],
            ar: ["نقرأ المسألة ونحدد ما يتكرر: حجم المجموعة الواحدة وعدد المجموعات.",
              "بعض المسائل تحتاج إلى أكثر من خطوة؛ فنخطط للخطوات أولًا ثم نضرب ونجمع.",
              "العاصفة الرملية: " + eq("120 min × 33 = 3,960 min") + "، و" + eq("3,960 ÷ 60 = 66") + " ساعة.",
              "الكباب: نجمع الشهرين أولًا " + eq("402 + 753 = 1,155") + " سيخًا، ثم " + eq("1,155 × 83 g = 95,865 g") + " من اللحم.",
              "مكسرات البقلاوة: " + eq("170 × 3 = 510 g") + " لكل وصفة، ثم " + eq("510 × 18 = 9,180 g") + ".",
              "نكتب دائمًا وحدة الناتج (دقائق، جرامات، مليلترات)، ونتحقق منه بالتقدير."]
          },
          story: {
            en: ["Mona runs a restaurant in Al-Quseir on the Red Sea. She sold 402 kebabs in February and 753 in March, with 83 g of meat in each.",
              "Her son Wael says: first the total kebabs, 1,155; then 1,155 × 83 = 95,865 g of meat. Almost 96 kg!",
              "For baklava Wael needs 170 g each of pistachios, walnuts and hazelnuts: 510 g per recipe. For 18 recipes: 9,180 g.",
              "The syrup needs 250 mL honey, 15 mL orange extract and 30 mL lemon juice: 295 mL per batch, 5,310 mL for 18 batches.",
              "Mona makes 8 litres of lemonade a day with 6 lemons per litre: 48 lemons a day, 17,520 lemons a year."],
            ar: ["تدير منى مطعمًا في القصير على البحر الأحمر؛ باعت 402 سيخ كباب في فبراير و753 في مارس، في كل سيخ 83 جم من اللحم.",
              "يقول ابنها وائل: أولًا عدد الأسياخ كلها 1,155، ثم 1,155 × 83 = 95,865 جم من اللحم، أي نحو 96 كجم!",
              "للبقلاوة يحتاج وائل 170 جم من كل من الفستق وعين الجمل والبندق: 510 جم للوصفة، ولـ 18 وصفة: 9,180 جم.",
              "والشربات تحتاج 250 مل عسلًا و15 مل خلاصة برتقال و30 مل عصير ليمون: 295 مل للدفعة، و5,310 مل لـ 18 دفعة.",
              "وتصنع منى 8 لترات ليمونادة يوميًا بـ 6 ليمونات لكل لتر: 48 ليمونة في اليوم، و17,520 ليمونة في السنة."]
          }
        },
        words: [
          ["Multistep problem", "مسألة متعددة الخطوات", "A problem that needs two or more operations to solve.", "مسألة تحتاج إلى عمليتين أو أكثر لحلها."],
          ["Group size", "حجم المجموعة", "How much is in one group, like 83 g of meat in one kebab.", "ما تحتويه المجموعة الواحدة، مثل 83 جم لحمًا في السيخ الواحد."],
          ["Number of groups", "عدد المجموعات", "How many times the group repeats, like 33 days.", "عدد مرات تكرار المجموعة، مثل 33 يومًا."],
          ["Unit", "الوحدة", "What we are counting or measuring: minutes, grams, millilitres.", "ما نعده أو نقيسه: دقائق، جرامات، مليلترات."],
          ["Convert", "يحوّل", "Change to another unit: 3,960 minutes = 66 hours.", "التغيير إلى وحدة أخرى: 3,960 دقيقة = 66 ساعة."]
        ],
        lab: { parts: [{ type: "mp5_groups" }] },
        quiz: [
          Q(["A sandstorm lasts 120 minutes each day for 33 days. How many minutes in all?", "تستمر عاصفة رملية 120 دقيقة يوميًا لمدة 33 يومًا. كم دقيقة في المجموع؟"], [["3,960", "3,960"], ["153", "153"], ["3,600", "3,600"], ["4,960", "4,960"]],
            ["120 × 33 = 120 × 30 + 120 × 3 = 3,600 + 360 = 3,960 minutes.", "120 × 33 = 120 × 30 + 120 × 3 = 3,600 + 360 = 3,960 دقيقة."], ["30 days give 3,600 minutes and 3 more days give 360.", "30 يومًا تعطي 3,600 دقيقة، و3 أيام أخرى تعطي 360."]),
          Q(["How many hours did that sandstorm last (3,960 minutes)?", "كم ساعة استمرت تلك العاصفة (3,960 دقيقة)؟"], [["66", "66"], ["396", "396"], ["33", "33"], ["60", "60"]],
            ["120 minutes = 2 hours each day, so 2 × 33 = 66 hours (also 3,960 ÷ 60 = 66).", "120 دقيقة = ساعتان يوميًا، إذن 2 × 33 = 66 ساعة (وأيضًا 3,960 ÷ 60 = 66)."], ["Two hours a day for 33 days is 66 hours.", "ساعتان يوميًا لمدة 33 يومًا تساوي 66 ساعة."]),
          Q(["Mona sold 402 kebabs in February and 753 in March, with 83 g of meat each. How much meat did she use?", "باعت منى 402 سيخ كباب في فبراير و753 في مارس، في كل منها 83 جم لحم. كم جرامًا من اللحم استخدمت؟"], [["95,865 g", "95,865 جم"], ["1,155 g", "1,155 جم"], ["62,499 g", "62,499 جم"], ["33,366 g", "33,366 جم"]],
            ["Step 1: 402 + 753 = 1,155 kebabs. Step 2: 1,155 × 83 = 95,865 g.", "الخطوة 1: 402 + 753 = 1,155 سيخًا، والخطوة 2: 1,155 × 83 = 95,865 جم."], ["Count all the kebabs first, then give each one its 83 g.", "عُدّ كل الأسياخ أولًا ثم أعطِ كل سيخ 83 جم."]),
          Q(["Wael needs 170 g each of 3 kinds of nuts per recipe, and he makes 18 recipes. How many grams of nuts?", "يحتاج وائل 170 جم من كل نوع من 3 أنواع مكسرات للوصفة، ويصنع 18 وصفة. كم جرامًا من المكسرات؟"], [["9,180 g", "9,180 جم"], ["3,060 g", "3,060 جم"], ["510 g", "510 جم"], ["8,180 g", "8,180 جم"]],
            ["170 × 3 = 510 g per recipe; 510 × 18 = 9,180 g.", "170 × 3 = 510 جم للوصفة، و510 × 18 = 9,180 جم."], ["3,060 g is only one kind of nut for 18 recipes; there are 3 kinds.", "3,060 جم نوع واحد فقط لـ 18 وصفة، والأنواع ثلاثة."]),
          Q(["The syrup needs 250 mL + 15 mL + 30 mL per batch. How much for 18 batches?", "تحتاج الشربات 250 مل + 15 مل + 30 مل للدفعة. كم مليلترًا لـ 18 دفعة؟"], [["5,310 mL", "5,310 مل"], ["4,500 mL", "4,500 مل"], ["295 mL", "295 مل"], ["5,210 mL", "5,210 مل"]],
            ["250 + 15 + 30 = 295 mL per batch; 295 × 18 = 5,310 mL.", "250 + 15 + 30 = 295 مل للدفعة، و295 × 18 = 5,310 مل."], ["Estimate 300 × 18 = 5,400; 5,310 is just below it.", "التقدير 300 × 18 = 5,400، و5,310 أقل منه بقليل."]),
          Q(["Mona uses 140 g of sesame per recipe and makes it 20 times a week. How many grams a week?", "تستخدم منى 140 جم سمسم في الوصفة وتكررها 20 مرة أسبوعيًا. كم جرامًا في الأسبوع؟"], [["2,800 g", "2,800 جم"], ["280 g", "280 جم"], ["160 g", "160 جم"], ["28,000 g", "28,000 جم"]],
            ["140 × 20 = 140 × 2 × 10 = 280 × 10 = 2,800 g.", "140 × 20 = 140 × 2 × 10 = 280 × 10 = 2,800 جم."], ["Double 140 is 280, then ten times bigger is 2,800.", "ضعف 140 هو 280، ثم عشرة أمثاله 2,800."]),
          Q(["Mona uses 6 lemons per litre and makes 8 litres a day. How many lemons in 365 days?", "تستخدم منى 6 ليمونات لكل لتر وتصنع 8 لترات يوميًا. كم ليمونة في 365 يومًا؟"], [["17,520", "17,520"], ["2,920", "2,920"], ["2,190", "2,190"], ["379", "379"]],
            ["6 × 8 = 48 lemons a day; 48 × 365 = 17,520 lemons.", "6 × 8 = 48 ليمونة يوميًا، و48 × 365 = 17,520 ليمونة."], ["2,920 is only the litres in a year (8 × 365); each litre needs 6 lemons.", "2,920 هو عدد اللترات في السنة فقط (8 × 365)، وكل لتر يحتاج 6 ليمونات."])
        ]
      }
    ]
  });

  /* ======================= UNIT 4 - DIVISION WITH WHOLE NUMBERS ======================= */
  U.push({
    id: "mp5u4", num: 4, icon: "➗", color: "purple",
    title: { en: "Division with Whole Numbers", ar: "القسمة على الأعداد الصحيحة" },
    lessons: [
      {
        id: "mp5u4l1", icon: "🟪", page: 81,
        title: { en: "Dividing using the area model and estimating quotients", ar: "القسمة باستخدام نموذج المساحة وتقدير خارج القسمة" },
        idea: {
          official: {
            en: ["In division, the dividend is the area of a rectangle, the divisor is one side, and the quotient is the missing side.",
              "For " + eq("3,622 ÷ 31") + ": take easy chunks. " + eq("31 × 100 = 3,100") + ", leaving 522. " + eq("31 × 10 = 310") + ", leaving 212. " + eq("31 × 6 = 186") + ", leaving 26.",
              "Add the chunks: " + eq("100 + 10 + 6 = 116") + ", and the 26 left over is the remainder: " + eq("3,622 ÷ 31 = 116 R 26") + ".",
              "Fewer, bigger chunks are faster: " + eq("1,050 ÷ 7") + " = 100 + 50 = 150.",
              "Estimate with compatible numbers that divide easily: " + eq("5,814 ÷ 47 ≈ 6,000 ÷ 50 = 120") + ".",
              "Use the estimate to check that the exact quotient is reasonable."],
            ar: ["في القسمة يكون المقسوم مساحة مستطيل، والمقسوم عليه أحد ضلعيه، وخارج القسمة هو الضلع المجهول.",
              "لحساب " + eq("3,622 ÷ 31") + " نأخذ أجزاء سهلة: " + eq("31 × 100 = 3,100") + " ويتبقى 522، ثم " + eq("31 × 10 = 310") + " ويتبقى 212، ثم " + eq("31 × 6 = 186") + " ويتبقى 26.",
              "نجمع الأجزاء: " + eq("100 + 10 + 6 = 116") + "، والـ 26 المتبقية هي الباقي: " + eq("3,622 ÷ 31 = 116 R 26") + ".",
              "الأجزاء الأقل والأكبر أسرع: " + eq("1,050 ÷ 7") + " = 100 + 50 = 150.",
              "نقدّر بالأعداد المتوافقة التي تقبل القسمة بسهولة: " + eq("5,814 ÷ 47 ≈ 6,000 ÷ 50 = 120") + ".",
              "ونستخدم التقدير للتحقق من أن خارج القسمة الدقيق معقول."]
          },
          story: {
            en: ["Youssef helps at a print shop that must pack 1,625 school notebooks into boxes of 13.",
              "He fills 100 boxes first: 1,300 notebooks. 325 are left.",
              "He fills 20 more boxes: 260 notebooks. 65 are left. Then 5 more boxes: exactly 65.",
              "100 + 20 + 5 = 125 boxes and nothing left over, so 1,625 ÷ 13 = 125.",
              "Before starting he guessed: 1,625 is close to 1,300 + 325, more than 100 boxes. The guess helped him start with 100."],
            ar: ["يساعد يوسف في مطبعة يجب أن تعبئ 1,625 كراسة مدرسية في صناديق، في كل صندوق 13 كراسة.",
              "يملأ 100 صندوق أولًا: 1,300 كراسة، ويتبقى 325.",
              "يملأ 20 صندوقًا أخرى: 260 كراسة، ويتبقى 65، ثم 5 صناديق أخرى: 65 تمامًا.",
              "100 + 20 + 5 = 125 صندوقًا ولا يتبقى شيء، إذن 1,625 ÷ 13 = 125.",
              "قبل أن يبدأ قدّر: 1,625 أكبر من 1,300، فالصناديق أكثر من 100، وساعده التقدير على البدء بـ 100."]
          }
        },
        words: [
          ["Dividend", "المقسوم", "The number being divided: in 3,622 ÷ 31 it is 3,622.", "العدد الذي نقسمه؛ ففي 3,622 ÷ 31 هو 3,622."],
          ["Divisor", "المقسوم عليه", "The number we divide by: in 3,622 ÷ 31 it is 31.", "العدد الذي نقسم عليه؛ ففي 3,622 ÷ 31 هو 31."],
          ["Quotient", "خارج القسمة", "The answer to a division: 116 in 3,622 ÷ 31 = 116 R 26.", "ناتج القسمة: 116 في 3,622 ÷ 31 = 116 والباقي 26."],
          ["Remainder", "الباقي", "What is left over when a number does not divide exactly.", "ما يتبقى عندما لا يقبل العدد القسمة تمامًا."],
          ["Compatible numbers", "الأعداد المتوافقة", "Numbers close to the real ones that divide easily, like 6,000 ÷ 50.", "أعداد قريبة من الأعداد الحقيقية وتقبل القسمة بسهولة، مثل 6,000 ÷ 50."]
        ],
        lab: { parts: [{ type: "mp5_divarea" }] },
        quiz: [
          Q(["What is 1,625 ÷ 13?", "ما ناتج 1,625 ÷ 13؟"], [["125", "125"], ["115", "115"], ["135", "135"], ["12 R 5", "12 والباقي 5"]],
            ["13 × 100 = 1,300; 13 × 20 = 260; 13 × 5 = 65. 1,300 + 260 + 65 = 1,625, so 100 + 20 + 5 = 125.", "13 × 100 = 1,300 و13 × 20 = 260 و13 × 5 = 65، و1,300 + 260 + 65 = 1,625، إذن 100 + 20 + 5 = 125."], ["Youssef fills 100, then 20, then 5 boxes: 125 boxes.", "يملأ يوسف 100 صندوق ثم 20 ثم 5: 125 صندوقًا."]),
          Q(["What is 3,622 ÷ 31?", "ما ناتج 3,622 ÷ 31؟"], [["116 R 26", "116 والباقي 26"], ["116", "116"], ["117 R 5", "117 والباقي 5"], ["106 R 26", "106 والباقي 26"]],
            ["Chunks 100 + 10 + 6 use 3,100 + 310 + 186 = 3,596, leaving 26. So 116 R 26.", "الأجزاء 100 + 10 + 6 تستهلك 3,100 + 310 + 186 = 3,596، ويتبقى 26، إذن 116 والباقي 26."], ["After 116 groups of 31, the 26 left is too small for another group.", "بعد 116 مجموعة من 31 تبقى 26، وهي أقل من أن تكوّن مجموعة أخرى."]),
          Q(["What is 2,207 ÷ 7?", "ما ناتج 2,207 ÷ 7؟"], [["315 R 2", "315 والباقي 2"], ["315", "315"], ["31 R 2", "31 والباقي 2"], ["325 R 2", "325 والباقي 2"]],
            ["7 × 300 = 2,100, 7 × 15 = 105, total 2,205. 2,207 − 2,205 = 2, so 315 R 2.", "7 × 300 = 2,100 و7 × 15 = 105، والمجموع 2,205، و2,207 − 2,205 = 2، إذن 315 والباقي 2."], ["Check: 7 × 315 + 2 = 2,207.", "التحقق: 7 × 315 + 2 = 2,207."]),
          Q(["What is 9,234 ÷ 81?", "ما ناتج 9,234 ÷ 81؟"], [["114", "114"], ["104", "104"], ["124", "124"], ["114 R 9", "114 والباقي 9"]],
            ["81 × 100 = 8,100, leaving 1,134; 81 × 10 = 810, leaving 324; 81 × 4 = 324. So 114.", "81 × 100 = 8,100 ويتبقى 1,134، و81 × 10 = 810 ويتبقى 324، و81 × 4 = 324، إذن 114."], ["Estimate 9,000 ÷ 90 = 100, so a quotient a bit over 100 makes sense.", "التقدير 9,000 ÷ 90 = 100، فخارج قسمة أكبر قليلًا من 100 منطقي."]),
          Q(["Which compatible numbers give a good estimate of 5,814 ÷ 47?", "أي أعداد متوافقة تعطي تقديرًا جيدًا لناتج 5,814 ÷ 47؟"], [["6,000 ÷ 50 = 120", "6,000 ÷ 50 = 120"], ["6,000 ÷ 40 = 150", "6,000 ÷ 40 = 150"], ["5,814 ÷ 1 = 5,814", "5,814 ÷ 1 = 5,814"], ["600 ÷ 50 = 12", "600 ÷ 50 = 12"]],
            ["47 is close to 50 and 5,814 is close to 6,000, which divides easily by 50: 120.", "47 قريب من 50، و5,814 قريب من 6,000 الذي يقبل القسمة على 50 بسهولة: 120."], ["Choose numbers your times tables like: 60 ÷ 5 = 12, so 6,000 ÷ 50 = 120.", "اختر أعدادًا يحبها جدول الضرب: 60 ÷ 5 = 12، إذن 6,000 ÷ 50 = 120."]),
          Q(["What is 5,600 ÷ 70?", "ما ناتج 5,600 ÷ 70؟"], [["80", "80"], ["8", "8"], ["800", "800"], ["70", "70"]],
            ["56 ÷ 7 = 8, and 5,600 ÷ 70 has one extra zero left over: 80.", "56 ÷ 7 = 8، و5,600 ÷ 70 يتبقى فيه صفر زائد: 80."], ["Check: 70 × 80 = 5,600.", "التحقق: 70 × 80 = 5,600."]),
          Q(["A student wrote 2,852 ÷ 24 = 20. What is the correct answer?", "كتب طالب 2,852 ÷ 24 = 20. ما الإجابة الصحيحة؟"], [["118 R 20", "118 والباقي 20"], ["20", "20"], ["108 R 20", "108 والباقي 20"], ["118", "118"]],
            ["24 × 100 = 2,400 leaves 452; 24 × 10 = 240 leaves 212; 24 × 8 = 192 leaves 20. So 118 R 20.", "24 × 100 = 2,400 ويتبقى 452، و24 × 10 = 240 ويتبقى 212، و24 × 8 = 192 ويتبقى 20، إذن 118 والباقي 20."], ["The student kept taking away 24 × 10 but wrote 20 for only the last chunks.", "ظل الطالب يطرح 24 × 10 لكنه كتب 20 للأجزاء الأخيرة فقط."])
        ]
      },
      {
        id: "mp5u4l2", icon: "📐", page: 85,
        title: { en: "Using the division algorithm and the relation between division and multiplication", ar: "استخدام خوارزمية القسمة والعلاقة بين القسمة والضرب" },
        idea: {
          official: {
            en: ["The division algorithm repeats four steps: Divide, Multiply, Subtract, Bring down.",
              "For " + eq("1,376 ÷ 43") + ": 43 does not go into 1 or 13, so look at 137. Estimate " + eq("137 ÷ 43 ≈ 3") + " and write 3 above the 7.",
              "Multiply " + eq("43 × 3 = 129") + ", subtract " + eq("137 − 129 = 8") + ", bring down the 6 to make 86.",
              "Divide again: " + eq("86 ÷ 43 = 2") + ", " + eq("43 × 2 = 86") + ", nothing left. So " + eq("1,376 ÷ 43 = 32") + ".",
              "If a step is too small for the divisor, write 0 in the quotient: " + eq("8,858 ÷ 43 = 206") + ".",
              "Check with multiplication: quotient × divisor + remainder = dividend. " + eq("17 × 11 + 13 = 200") + ", so " + eq("200 ÷ 17 = 11 R 13") + "."],
            ar: ["خوارزمية القسمة تكرر أربع خطوات: نقسم، نضرب، نطرح، ننزل الرقم التالي.",
              "لحساب " + eq("1,376 ÷ 43") + ": العدد 43 لا يدخل في 1 ولا في 13، فننظر إلى 137، ونقدّر " + eq("137 ÷ 43 ≈ 3") + " ونكتب 3 فوق الرقم 7.",
              "نضرب " + eq("43 × 3 = 129") + "، ونطرح " + eq("137 − 129 = 8") + "، وننزل الرقم 6 فيصبح العدد 86.",
              "نقسم مرة أخرى: " + eq("86 ÷ 43 = 2") + "، و" + eq("43 × 2 = 86") + "، ولا يتبقى شيء، إذن " + eq("1,376 ÷ 43 = 32") + ".",
              "إذا كان العدد في خطوة ما أصغر من المقسوم عليه نكتب 0 في خارج القسمة: " + eq("8,858 ÷ 43 = 206") + ".",
              "نتحقق بالضرب: خارج القسمة × المقسوم عليه + الباقي = المقسوم؛ " + eq("17 × 11 + 13 = 200") + "، إذن " + eq("200 ÷ 17 = 11 R 13") + "."]
          },
          story: {
            en: ["Rana owns a coffee shop and receives 350 cookies from a local bakery. She packs 12 cookies in each bag.",
              "35 ÷ 12 is 2, so she writes 2 over the 5: 24 cookies, 11 left over, bring down the 0: 110.",
              "110 ÷ 12 is 9: 108 cookies, 2 left. So 29 full bags and 2 cookies for her to taste.",
              "She checks: 29 × 12 = 348, and 348 + 2 = 350. It matches.",
              "Ziad at the shirt factory has 100 buttons, 16 per shirt. He says 6 shirts and 4 left. Rana checks: 16 × 6 + 4 = 100. Ziad is right!"],
            ar: ["تمتلك رنا مقهى وتستلم 350 قطعة بسكويت من مخبز محلي، وتعبئ 12 قطعة في كل كيس.",
              "35 ÷ 12 = 2، فتكتب 2 فوق الرقم 5: 24 قطعة ويتبقى 11، وتنزل الصفر: 110.",
              "110 ÷ 12 = 9: 108 قطع ويتبقى 2، إذن 29 كيسًا ممتلئًا وقطعتان تتذوقهما.",
              "تتحقق: 29 × 12 = 348، و348 + 2 = 350، والنتيجة متطابقة.",
              "زياد في مصنع القمصان معه 100 زر، لكل قميص 16 زرًا، فيقول: 6 قمصان ويتبقى 4. تتحقق رنا: 16 × 6 + 4 = 100، زياد على حق!"]
          }
        },
        words: [
          ["Division algorithm", "خوارزمية القسمة", "The written steps: divide, multiply, subtract, bring down.", "خطوات الحل المكتوبة: نقسم، نضرب، نطرح، ننزل."],
          ["Bring down", "ينزل الرقم", "Move the next digit of the dividend down next to the difference.", "إنزال الرقم التالي من المقسوم بجوار ناتج الطرح."],
          ["Remainder", "الباقي", "What is left when nothing more can be divided: 350 ÷ 12 = 29 R 2.", "ما يتبقى عندما لا يمكن القسمة أكثر: 350 ÷ 12 = 29 والباقي 2."],
          ["Inverse operations", "عمليتان عكسيتان", "Multiplication and division undo each other, so we check one with the other.", "الضرب والقسمة كل منهما تلغي الأخرى، فنتحقق من إحداهما بالأخرى."],
          ["Check", "يتحقق", "Quotient × divisor + remainder should equal the dividend.", "خارج القسمة × المقسوم عليه + الباقي يجب أن يساوي المقسوم."]
        ],
        lab: { parts: [{ type: "mp5_longdiv" }] },
        quiz: [
          Q(["What is 1,376 ÷ 43?", "ما ناتج 1,376 ÷ 43؟"], [["32", "32"], ["31", "31"], ["302", "302"], ["32 R 6", "32 والباقي 6"]],
            ["137 ÷ 43 = 3 (129), 8 left, bring down 6: 86 ÷ 43 = 2. Quotient 32.", "137 ÷ 43 = 3 (129) ويتبقى 8، ننزل 6: 86 ÷ 43 = 2، فخارج القسمة 32."], ["Check: 43 × 32 = 1,376 exactly.", "التحقق: 43 × 32 = 1,376 تمامًا."]),
          Q(["What is 756 ÷ 22?", "ما ناتج 756 ÷ 22؟"], [["34 R 8", "34 والباقي 8"], ["34", "34"], ["35 R 2", "35 والباقي 2"], ["33 R 30", "33 والباقي 30"]],
            ["75 ÷ 22 = 3 (66), 9 left, bring down 6: 96 ÷ 22 = 4 (88), 8 left. So 34 R 8.", "75 ÷ 22 = 3 (66) ويتبقى 9، ننزل 6: 96 ÷ 22 = 4 (88) ويتبقى 8، إذن 34 والباقي 8."], ["A remainder of 30 is bigger than 22, so another group would still fit.", "الباقي 30 أكبر من 22، فما زالت هناك مجموعة أخرى."]),
          Q(["Ayman says 8,858 ÷ 43 = 26. What is the correct quotient?", "يقول أيمن إن 8,858 ÷ 43 = 26. ما خارج القسمة الصحيح؟"], [["206", "206"], ["26", "26"], ["260", "260"], ["216", "216"]],
            ["88 ÷ 43 = 2 (86), 2 left; bring down 5: 25 < 43, write 0; bring down 8: 258 ÷ 43 = 6. Quotient 206.", "88 ÷ 43 = 2 (86) ويتبقى 2، ننزل 5: 25 أصغر من 43 فنكتب 0، ننزل 8: 258 ÷ 43 = 6، فخارج القسمة 206."], ["Ayman forgot the 0. Check: 43 × 26 = 1,118, far from 8,858; 43 × 206 = 8,858.", "نسي أيمن الصفر؛ والتحقق: 43 × 26 = 1,118 بعيد عن 8,858، أما 43 × 206 = 8,858."]),
          Q(["Rana packs 350 cookies in bags of 12. How many full bags, and how many cookies are left?", "تعبئ رنا 350 قطعة بسكويت في أكياس من 12. كم كيسًا ممتلئًا وكم قطعة تتبقى؟"], [["29 bags, 2 left", "29 كيسًا ويتبقى 2"], ["30 bags, 0 left", "30 كيسًا ولا يتبقى شيء"], ["29 bags, 12 left", "29 كيسًا ويتبقى 12"], ["28 bags, 14 left", "28 كيسًا ويتبقى 14"]],
            ["350 ÷ 12 = 29 R 2, because 12 × 29 = 348 and 350 − 348 = 2.", "350 ÷ 12 = 29 والباقي 2، لأن 12 × 29 = 348 و350 − 348 = 2."], ["30 bags would need 360 cookies, 10 more than she has.", "30 كيسًا تحتاج 360 قطعة، أي 10 أكثر مما لديها."]),
          Q(["Which check shows that 200 ÷ 17 = 11 R 13 is correct?", "أي تحقق يبين أن 200 ÷ 17 = 11 والباقي 13 صحيح؟"], [["17 × 11 + 13 = 200", "17 × 11 + 13 = 200"], ["17 + 11 + 13 = 200", "17 + 11 + 13 = 200"], ["17 × 13 + 11 = 200", "17 × 13 + 11 = 200"], ["200 × 17 = 11", "200 × 17 = 11"]],
            ["Quotient × divisor + remainder = dividend: 17 × 11 = 187, 187 + 13 = 200.", "خارج القسمة × المقسوم عليه + الباقي = المقسوم: 17 × 11 = 187، و187 + 13 = 200."], ["Put the 11 groups of 17 back together and add the leftovers.", "نعيد تجميع الـ 11 مجموعة من 17 ونضيف الباقي."]),
          Q(["What is 8,014 ÷ 46?", "ما ناتج 8,014 ÷ 46؟"], [["174 R 10", "174 والباقي 10"], ["174", "174"], ["17 R 10", "17 والباقي 10"], ["184 R 10", "184 والباقي 10"]],
            ["80 ÷ 46 = 1 (34 left), 341 ÷ 46 = 7 (19 left), 194 ÷ 46 = 4 (10 left). So 174 R 10.", "80 ÷ 46 = 1 ويتبقى 34، و341 ÷ 46 = 7 ويتبقى 19، و194 ÷ 46 = 4 ويتبقى 10، إذن 174 والباقي 10."], ["Check: 46 × 174 = 8,004 and 8,004 + 10 = 8,014.", "التحقق: 46 × 174 = 8,004 و8,004 + 10 = 8,014."]),
          Q(["What is 543 ÷ 65?", "ما ناتج 543 ÷ 65؟"], [["8 R 23", "8 والباقي 23"], ["8", "8"], ["9 R 2", "9 والباقي 2"], ["83", "83"]],
            ["65 × 8 = 520 and 543 − 520 = 23; 65 × 9 = 585 is too big. So 8 R 23.", "65 × 8 = 520 و543 − 520 = 23، أما 65 × 9 = 585 فأكبر من المقسوم، إذن 8 والباقي 23."], ["Estimate 540 ÷ 60 = 9, try 9: too big, so step down to 8.", "التقدير 540 ÷ 60 = 9، نجرب 9 فتكون كبيرة، فننزل إلى 8."])
        ]
      },
      {
        id: "mp5u4l3", icon: "🧵", page: 89,
        title: { en: "Multistep story problems", ar: "مسائل كلامية متعددة الخطوات" },
        idea: {
          official: {
            en: ["Read the whole problem, find what is asked, and plan the steps before calculating. A bar model helps you see each quantity.",
              "Textile factory: cotton 11,650 m; silk is 4,950 m fewer: " + eq("11,650 − 4,950 = 6,700") + "; wool is 3,500 m fewer than silk: " + eq("6,700 − 3,500 = 3,200") + ".",
              "Total fabric: " + eq("11,650 + 6,700 + 3,200 = 21,550") + " m.",
              "Decide what a remainder means: 140 servings in trays of 12 is " + eq("140 ÷ 12 = 11 R 8") + ", so we need 12 trays for all the baklava.",
              "Compare choices: Mighty Steel costs " + eq("3 × 100,000 = 300,000") + " LE for 15 t and Silver Strong " + eq("5 × 70,000 = 350,000") + " LE, a saving of 50,000 LE.",
              "Finally, check the answer with an estimate or the inverse operation."],
            ar: ["نقرأ المسألة كلها ونحدد المطلوب ونخطط للخطوات قبل الحساب، ونموذج الشريط يساعدنا على رؤية كل كمية.",
              "مصنع النسيج: القطن 11,650 م، والحرير أقل منه بـ 4,950 م: " + eq("11,650 − 4,950 = 6,700") + "، والصوف أقل من الحرير بـ 3,500 م: " + eq("6,700 − 3,500 = 3,200") + ".",
              "مجموع الأقمشة: " + eq("11,650 + 6,700 + 3,200 = 21,550") + " م.",
              "نحدد معنى الباقي: 140 حصة في صوانٍ تسع كل منها 12 تعطي " + eq("140 ÷ 12 = 11 R 8") + "، فنحتاج 12 صينية لكل البقلاوة.",
              "نقارن الاختيارات: الصلب القوي يكلف " + eq("3 × 100,000 = 300,000") + " جنيه لـ 15 طنًا، والصلب الفضي " + eq("5 × 70,000 = 350,000") + " جنيه، فيكون التوفير 50,000 جنيه.",
              "وأخيرًا نتحقق من الناتج بالتقدير أو بالعملية العكسية."]
          },
          story: {
            en: ["Malek's family drives 465 km to his grandmother's house. They drive 124 km on Friday and 210 km on Saturday.",
              "Malek draws one long bar for 465 km and two pieces for Friday and Saturday. The empty piece is Sunday.",
              "124 + 210 = 334 km done, and 465 − 334 = 131 km left for Sunday.",
              "At grandma's, she has baked 140 servings of baklava. Each tray holds 12, so 11 trays are full and 8 servings are left: they need a 12th tray.",
              "Zeinab's quilt used 12 packs of 18 squares = 216, and Reem's was 13 by 13 = 169. Reem used 47 fewer squares."],
            ar: ["تسافر أسرة مالك 465 كم بالسيارة إلى بيت جدته؛ قطعوا 124 كم يوم الجمعة و210 كم يوم السبت.",
              "يرسم مالك شريطًا طويلًا يمثل 465 كم، وجزأين للجمعة والسبت، والجزء الفارغ هو الأحد.",
              "124 + 210 = 334 كم قطعوها، و465 − 334 = 131 كم متبقية ليوم الأحد.",
              "عند الجدة خبزت 140 حصة بقلاوة، والصينية تسع 12، فتمتلئ 11 صينية ويتبقى 8 حصص، فيحتاجون صينية ثانية عشرة.",
              "استخدمت زينب في لحافها 12 عبوة في كل منها 18 مربعًا = 216، ولحاف ريم 13 في 13 = 169، فاستخدمت ريم 47 مربعًا أقل."]
          }
        },
        words: [
          ["Multistep", "متعدد الخطوات", "Needs two or more operations, done in a planned order.", "يحتاج إلى عمليتين أو أكثر بترتيب مخطط."],
          ["Bar model", "نموذج الشريط", "Bars that show the quantities and how they are related.", "أشرطة تبين الكميات والعلاقة بينها."],
          ["Fewer than", "أقل من", "A clue to subtract: 4,950 m fewer than 11,650 m.", "دليل على الطرح: أقل من 11,650 م بمقدار 4,950 م."],
          ["Times as much", "أمثال", "A clue to multiply: 3 times as much as 762.", "دليل على الضرب: 3 أمثال 762."],
          ["Interpret the remainder", "تفسير الباقي", "Decide whether to round up, drop or use the leftover in a story.", "تحديد ما إذا كنا نقرب لأعلى أو نهمل الباقي أو نستخدمه في القصة."]
        ],
        lab: { parts: [{ type: "mp5_barmodel" }] },
        quiz: [
          Q(["A factory used 11,650 m of cotton, 4,950 m fewer of silk, and 3,500 m fewer of wool than silk. How many metres in all?", "استخدم مصنع 11,650 م من القطن، ومن الحرير أقل بـ 4,950 م، ومن الصوف أقل من الحرير بـ 3,500 م. كم مترًا في المجموع؟"], [["21,550", "21,550"], ["20,100", "20,100"], ["11,650", "11,650"], ["24,450", "24,450"]],
            ["Silk 11,650 − 4,950 = 6,700; wool 6,700 − 3,500 = 3,200; total 11,650 + 6,700 + 3,200 = 21,550 m.", "الحرير 11,650 − 4,950 = 6,700، والصوف 6,700 − 3,500 = 3,200، والمجموع 11,650 + 6,700 + 3,200 = 21,550 م."], ["Three bars, each shorter than the one above; add all three lengths.", "ثلاثة أشرطة كل منها أقصر من الذي فوقه، ونجمع الأطوال الثلاثة."]),
          Q(["Malek's trip is 465 km. They drove 124 km and 210 km. How far is left?", "رحلة مالك 465 كم، قطعوا منها 124 كم و210 كم. كم كيلومترًا متبقية؟"], [["131 km", "131 كم"], ["334 km", "334 كم"], ["141 km", "141 كم"], ["799 km", "799 كم"]],
            ["124 + 210 = 334; 465 − 334 = 131 km.", "124 + 210 = 334، و465 − 334 = 131 كم."], ["The empty piece of the bar is what is left after the two driven pieces.", "الجزء الفارغ من الشريط هو ما يتبقى بعد الجزأين المقطوعين."]),
          Q(["A baker made 140 servings of baklava. Each tray holds 12 servings. How many trays are needed?", "صنع خباز 140 حصة بقلاوة، والصينية تسع 12 حصة. كم صينية نحتاج؟"], [["12", "12"], ["11", "11"], ["11 R 8", "11 والباقي 8"], ["13", "13"]],
            ["140 ÷ 12 = 11 R 8. The 8 extra servings still need a tray, so 12 trays.", "140 ÷ 12 = 11 والباقي 8، والحصص الثماني الزائدة تحتاج صينية، إذن 12 صينية."], ["11 trays hold 132 servings; 8 servings would be left on the table.", "11 صينية تسع 132 حصة، فتبقى 8 حصص على المائدة."]),
          Q(["Mighty Steel sells 5 t for 100,000 LE and Silver Strong sells 3 t for 70,000 LE. How much is saved on 15 t by buying Mighty Steel?", "يبيع الصلب القوي 5 أطنان بـ 100,000 جنيه، والصلب الفضي 3 أطنان بـ 70,000 جنيه. كم نوفر عند شراء 15 طنًا من الصلب القوي؟"], [["50,000 LE", "50,000 جنيه"], ["30,000 LE", "30,000 جنيه"], ["300,000 LE", "300,000 جنيه"], ["350,000 LE", "350,000 جنيه"]],
            ["Mighty: 15 ÷ 5 = 3 lots × 100,000 = 300,000. Silver: 15 ÷ 3 = 5 lots × 70,000 = 350,000. Saving 50,000 LE.", "القوي: 15 ÷ 5 = 3 دفعات × 100,000 = 300,000، والفضي: 15 ÷ 3 = 5 دفعات × 70,000 = 350,000، والتوفير 50,000 جنيه."], ["Work out each total cost first, then find the difference.", "احسب التكلفة الكلية لكل منهما أولًا ثم أوجد الفرق."]),
          Q(["Computer Depot sold 762 reams. Paper Palace sold 3 times as much and 143 more than Office Supply Central. How many in all?", "باع متجر 762 رزمة ورق، وباع متجر ثانٍ 3 أمثاله وأكثر من متجر ثالث بـ 143 رزمة. كم رزمة باعت المتاجر الثلاثة؟"], [["5,191", "5,191"], ["4,905", "4,905"], ["3,191", "3,191"], ["5,477", "5,477"]],
            ["Palace 762 × 3 = 2,286; Central 2,286 − 143 = 2,143; total 762 + 2,286 + 2,143 = 5,191.", "الثاني 762 × 3 = 2,286، والثالث 2,286 − 143 = 2,143، والمجموع 762 + 2,286 + 2,143 = 5,191."], ["\"143 more than Central\" means Central sold 143 fewer than Palace.", "\"أكثر من الثالث بـ 143\" تعني أن الثالث باع أقل من الثاني بـ 143."]),
          Q(["Zeinab used 12 packs of 18 squares. Reem's quilt was 13 squares by 13 squares. How many fewer squares did Reem use?", "استخدمت زينب 12 عبوة في كل منها 18 مربعًا، ولحاف ريم 13 مربعًا في 13 مربعًا. كم مربعًا أقل استخدمت ريم؟"], [["47", "47"], ["216", "216"], ["169", "169"], ["57", "57"]],
            ["Zeinab 12 × 18 = 216; Reem 13 × 13 = 169; 216 − 169 = 47.", "زينب 12 × 18 = 216، وريم 13 × 13 = 169، و216 − 169 = 47."], ["Two multiplications, then one subtraction.", "عمليتا ضرب ثم عملية طرح."]),
          Q(["Nagi sold 30 boxes of 25 T-shirts at 3 LE each. Football T-shirts earned 1,134 LE. How much did the basketball T-shirts earn?", "باع ناجي 30 صندوقًا في كل منها 25 قميصًا بسعر 3 جنيهات للقميص، وكسب من قمصان كرة القدم 1,134 جنيهًا. كم كسب من قمصان كرة السلة؟"], [["1,116 LE", "1,116 جنيهًا"], ["2,250 LE", "2,250 جنيهًا"], ["750 LE", "750 جنيهًا"], ["1,216 LE", "1,216 جنيهًا"]],
            ["30 × 25 = 750 T-shirts; 750 × 3 = 2,250 LE in all; 2,250 − 1,134 = 1,116 LE.", "30 × 25 = 750 قميصًا، و750 × 3 = 2,250 جنيهًا في المجموع، و2,250 − 1,134 = 1,116 جنيهًا."], ["Find all the money first, then take away the football money.", "أوجد المبلغ كله أولًا ثم اطرح مال قمصان كرة القدم."])
        ]
      }
    ]
  });

  /* ======================= UNIT 5 - MULTIPLICATION AND DIVISION WITH DECIMALS ======================= */
  U.push({
    id: "mp5u5", num: 5, icon: "📏", color: "red",
    title: { en: "Multiplication and Division with Decimals", ar: "ضرب الأعداد العشرية وقسمتها" },
    lessons: [
      {
        id: "mp5u5l1", icon: "✏️", page: 92,
        title: { en: "Multiplying by powers of ten and multiplying decimals by whole numbers", ar: "الضرب في قوى العشرة وضرب الأعداد العشرية في أعداد صحيحة" },
        idea: {
          official: {
            en: ["Multiplying by 10, 100 or 1,000 moves every digit 1, 2 or 3 places to the left: " + eq("15.2 × 10 = 152") + ", " + eq("15.2 × 100 = 1,520") + ".",
              "Multiplying by 0.1, 0.01 or 0.001 moves every digit 1, 2 or 3 places to the right: " + eq("15.2 × 0.1 = 1.52") + ", " + eq("7.4 × 0.01 = 0.074") + ".",
              "The pattern: " + eq("3 × 2 tenths = 6 tenths") + " and " + eq("3 × 2 thousandths = 6 thousandths = 0.006") + ".",
              "To multiply a decimal by a whole number, multiply as if there were no decimal point, then put the point so the product has as many decimal places as the decimal factor: " + eq("0.35 × 5 = 1.75") + ".",
              "Check with an estimate: " + eq("2.5 × 3") + " is a bit less than " + eq("3 × 3 = 9") + ", and the product is " + eq("7.5") + "."],
            ar: ["الضرب في 10 أو 100 أو 1,000 ينقل كل رقم خانة أو خانتين أو ثلاث خانات إلى اليسار: " + eq("15.2 × 10 = 152") + " و" + eq("15.2 × 100 = 1,520") + ".",
              "والضرب في 0.1 أو 0.01 أو 0.001 ينقل كل رقم خانة أو خانتين أو ثلاث خانات إلى اليمين: " + eq("15.2 × 0.1 = 1.52") + " و" + eq("7.4 × 0.01 = 0.074") + ".",
              "النمط: " + eq("3 × 2") + " من أجزاء العشرة = 6 أجزاء من عشرة، و3 × 2 من أجزاء الألف = 6 أجزاء من ألف = " + eq("0.006") + ".",
              "لضرب عدد عشري في عدد صحيح نضرب كأنه لا توجد علامة عشرية، ثم نضع العلامة بحيث يكون في الناتج عدد من الأرقام العشرية مثل العامل العشري: " + eq("0.35 × 5 = 1.75") + ".",
              "نتحقق بالتقدير: " + eq("2.5 × 3") + " أقل قليلًا من " + eq("3 × 3 = 9") + "، والناتج " + eq("7.5") + "."]
          },
          story: {
            en: ["Manal is an accountant and her pencil is 15.2 cm long.",
              "\"If my pencil were 10 times bigger it would be 152 cm, taller than my little brother!\" Every digit slides one place left.",
              "100 pencils lined up end to end make 1,520 cm. A pencil one tenth as long would be only 1.52 cm.",
              "Her friend Hoda has a stride of 0.72 m. After 1,000 paces she has walked 720 m: the digits jumped three places left.",
              "At the bookstore, Amen sells 5 bookmarks at 0.35 LE each: 35 × 5 = 175, two decimal places, so 1.75 LE."],
            ar: ["منال محاسبة، وطول قلمها الرصاص 15.2 سم.",
              "\"لو كان قلمي أكبر 10 مرات لكان طوله 152 سم، أطول من أخي الصغير!\"؛ كل رقم ينزلق خانة إلى اليسار.",
              "100 قلم متراصة تعطي 1,520 سم، وقلم طوله جزء من عشرة من طوله يكون 1.52 سم فقط.",
              "صديقتها هدى طول خطوتها 0.72 م، وبعد 1,000 خطوة تكون قد مشت 720 م؛ قفزت الأرقام ثلاث خانات إلى اليسار.",
              "في المكتبة يبيع آمن 5 فواصل كتب بسعر 0.35 جنيه للواحد: 35 × 5 = 175، ورقمان عشريان، إذن 1.75 جنيه."]
          }
        },
        words: [
          ["Power of ten", "قوة العشرة", "10, 100, 1,000 or 0.1, 0.01, 0.001.", "10 و100 و1,000 أو 0.1 و0.01 و0.001."],
          ["Decimal places", "الأرقام العشرية", "The digits after the decimal point: 0.35 has two decimal places.", "الأرقام بعد العلامة العشرية؛ فللعدد 0.35 رقمان عشريان."],
          ["Shift left", "الانتقال إلى اليسار", "When we multiply by 10, 100 or 1,000 the digits move to greater places.", "عند الضرب في 10 أو 100 أو 1,000 تنتقل الأرقام إلى خانات أكبر."],
          ["Shift right", "الانتقال إلى اليمين", "When we multiply by 0.1, 0.01 or 0.001 the digits move to smaller places.", "عند الضرب في 0.1 أو 0.01 أو 0.001 تنتقل الأرقام إلى خانات أصغر."],
          ["Product", "حاصل الضرب", "The answer to a multiplication, like 1.75 in 0.35 × 5.", "ناتج الضرب، مثل 1.75 في 0.35 × 5."]
        ],
        lab: { parts: [{ type: "mp5_pow10", mode: "mul" }] },
        quiz: [
          Q(["Manal's pencil is 15.2 cm. How long would 100 pencils be, end to end?", "طول قلم منال 15.2 سم. كم يكون طول 100 قلم متراصة؟"], [["1,520 cm", "1,520 سم"], ["152 cm", "152 سم"], ["15,200 cm", "15,200 سم"], ["1.52 cm", "1.52 سم"]],
            ["15.2 × 100: every digit moves 2 places left, so 1,520 cm.", "15.2 × 100: ينتقل كل رقم خانتين إلى اليسار، إذن 1,520 سم."], ["Ten pencils make 152 cm, and ten times that is 1,520 cm.", "عشرة أقلام تعطي 152 سم، وعشرة أمثالها 1,520 سم."]),
          Q(["What is 15.2 × 0.1?", "ما ناتج 15.2 × 0.1؟"], [["1.52", "1.52"], ["152", "152"], ["0.152", "0.152"], ["15.3", "15.3"]],
            ["Multiplying by 0.1 moves every digit one place right: 1.52.", "الضرب في 0.1 ينقل كل رقم خانة إلى اليمين: 1.52."], ["One tenth of the pencil: 1.52 cm, smaller than the original.", "جزء من عشرة من القلم: 1.52 سم، أصغر من الأصلي."]),
          Q(["Hoda's stride is 0.72 m. How far does she walk in 1,000 paces?", "طول خطوة هدى 0.72 م. كم مترًا تمشي في 1,000 خطوة؟"], [["720 m", "720 م"], ["72 m", "72 م"], ["7.2 m", "7.2 م"], ["7,200 m", "7,200 م"]],
            ["0.72 × 1,000: three places left, so 720 m.", "0.72 × 1,000: ثلاث خانات إلى اليسار، إذن 720 م."], ["100 paces are 72 m, so 1,000 paces are 720 m.", "100 خطوة = 72 م، إذن 1,000 خطوة = 720 م."]),
          Q(["What is 7.4 × 0.01?", "ما ناتج 7.4 × 0.01؟"], [["0.074", "0.074"], ["0.74", "0.74"], ["740", "740"], ["0.0074", "0.0074"]],
            ["× 0.01 moves every digit 2 places right: 7.4 becomes 0.074.", "الضرب في 0.01 ينقل كل رقم خانتين إلى اليمين: 7.4 تصبح 0.074."], ["The 7 ones become 7 hundredths and the 4 tenths become 4 thousandths.", "الآحاد السبعة تصبح 7 أجزاء من مائة، والأجزاء الأربعة من عشرة تصبح 4 أجزاء من ألف."]),
          Q(["What is 602.1 × 0.01?", "ما ناتج 602.1 × 0.01؟"], [["6.021", "6.021"], ["60.21", "60.21"], ["60,210", "60,210"], ["0.6021", "0.6021"]],
            ["Two places right: 602.1 → 6.021.", "خانتان إلى اليمين: 602.1 تصبح 6.021."], ["The 6 hundreds shrink to 6 ones.", "المئات الست تصغر إلى 6 آحاد."]),
          Q(["What is 0.35 × 5?", "ما ناتج 0.35 × 5؟"], [["1.75", "1.75"], ["17.5", "17.5"], ["0.175", "0.175"], ["1.55", "1.55"]],
            ["35 × 5 = 175; 0.35 has two decimal places, so the product is 1.75.", "35 × 5 = 175، وللعدد 0.35 رقمان عشريان، إذن الناتج 1.75."], ["5 groups of 35 hundredths are 175 hundredths = 1.75.", "5 مجموعات من 35 جزءًا من مائة = 175 جزءًا من مائة = 1.75."]),
          Q(["What is 2.5 × 3?", "ما ناتج 2.5 × 3؟"], [["7.5", "7.5"], ["75", "75"], ["6.5", "6.5"], ["0.75", "0.75"]],
            ["25 × 3 = 75 and one decimal place: 7.5.", "25 × 3 = 75، ورقم عشري واحد: 7.5."], ["Three 2.5 kg bags: 2 + 2 + 2 = 6 and 0.5 + 0.5 + 0.5 = 1.5, so 7.5 kg.", "ثلاثة أكياس وزن كل منها 2.5 كجم: 2 + 2 + 2 = 6 و0.5 + 0.5 + 0.5 = 1.5، إذن 7.5 كجم."])
        ]
      },
      {
        id: "mp5u5l2", icon: "🟥", page: 97,
        title: { en: "Multiplying tenths by tenths, multiplying decimals using the area model, and through the hundredths and thousandths place", ar: "ضرب أجزاء من عشرة في أجزاء من عشرة، والضرب باستخدام نموذج المساحة، والضرب حتى جزء من مائة وجزء من ألف" },
        idea: {
          official: {
            en: ["Tenths times tenths gives hundredths. On a hundredths grid, " + eq("0.3 × 0.4") + " is a 3-by-4 rectangle of small squares: 12 hundredths, " + eq("0.12") + ".",
              "Pattern: " + eq("8 × 3 = 24") + ", " + eq("0.8 × 3 = 2.4") + ", " + eq("0.8 × 0.3 = 0.24") + ", " + eq("0.08 × 0.3 = 0.024") + ".",
              "With an area model, split each factor into whole and decimal parts: " + eq("1.3 × 6.8 = 6 + 0.8 + 1.8 + 0.24 = 8.84") + ".",
              "With the standard algorithm, multiply as whole numbers, then count the decimal places in both factors: " + eq("42.16 × 3.4") + " has 2 + 1 = 3 places, so " + eq("143.344") + ".",
              "Through the thousandths: " + eq("7.184 × 6.3 = 45.2592") + " (3 + 1 = 4 decimal places).",
              "Check the point with an estimate: " + eq("42 × 3 = 126") + ", close to 143.344."],
            ar: ["أجزاء من عشرة في أجزاء من عشرة تعطي أجزاء من مائة؛ فعلى شبكة المائة يكون " + eq("0.3 × 0.4") + " مستطيلًا من 3 في 4 مربعات صغيرة: 12 جزءًا من مائة، أي " + eq("0.12") + ".",
              "النمط: " + eq("8 × 3 = 24") + " و" + eq("0.8 × 3 = 2.4") + " و" + eq("0.8 × 0.3 = 0.24") + " و" + eq("0.08 × 0.3 = 0.024") + ".",
              "وبنموذج المساحة نحلل كل عامل إلى جزء صحيح وجزء عشري: " + eq("1.3 × 6.8 = 6 + 0.8 + 1.8 + 0.24 = 8.84") + ".",
              "وبالخوارزمية القياسية نضرب كأنهما عددان صحيحان، ثم نعد الأرقام العشرية في العاملين: " + eq("42.16 × 3.4") + " فيه 2 + 1 = 3 أرقام عشرية، إذن " + eq("143.344") + ".",
              "وحتى جزء من ألف: " + eq("7.184 × 6.3 = 45.2592") + " (3 + 1 = 4 أرقام عشرية).",
              "نتحقق من موضع العلامة بالتقدير: " + eq("42 × 3 = 126") + "، وهو قريب من 143.344."]
          },
          story: {
            en: ["Kamal says tenths times tenths stays in the tenths because multiplying makes numbers bigger. Nadia says the hundredths.",
              "Nadia takes a 1 m × 1 m tile and marks 0.5 m along one side and 0.7 m along the other. The marked piece covers 35 of the 100 small squares: 0.35 m².",
              "\"Smaller than both!\" says Kamal. Taking part of a part makes a smaller piece. Nadia is right.",
              "At the building site, Malak counts 12 pallets of 1.36 t: 12 × 136 = 1,632, two decimal places, 16.32 t.",
              "Her estimate, 12 × 1.4 ≈ 17 t, tells her the decimal point is in the right place."],
            ar: ["يقول كمال إن أجزاء من عشرة في أجزاء من عشرة تبقى أجزاء من عشرة لأن الضرب يكبّر الأعداد، وتقول نادية: أجزاء من مائة.",
              "تأخذ نادية بلاطة 1 م × 1 م وتعلّم 0.5 م على ضلع و0.7 م على الضلع الآخر، فيغطي الجزء المعلّم 35 مربعًا من 100 مربع صغير: 0.35 م².",
              "يقول كمال: \"أصغر من العددين!\"؛ فأخذ جزء من جزء يعطي قطعة أصغر، ونادية على حق.",
              "في موقع البناء تعد ملك 12 منصة وزن كل منها 1.36 طن: 12 × 136 = 1,632، ورقمان عشريان، إذن 16.32 طنًا.",
              "وتقديرها 12 × 1.4 ≈ 17 طنًا يخبرها أن العلامة العشرية في مكانها الصحيح."]
          }
        },
        words: [
          ["Tenth × tenth", "جزء من عشرة × جزء من عشرة", "Gives hundredths: 0.1 × 0.1 = 0.01.", "يعطي أجزاء من مائة: 0.1 × 0.1 = 0.01."],
          ["Area model", "نموذج المساحة", "A rectangle whose sides are the factors and whose area is the product.", "مستطيل ضلعاه العاملان ومساحته حاصل الضرب."],
          ["Count decimal places", "عدّ الأرقام العشرية", "The product has as many decimal places as both factors together.", "عدد الأرقام العشرية في الناتج يساوي مجموعها في العاملين."],
          ["Estimate", "التقدير", "A quick rounded answer used to check where the decimal point goes.", "ناتج سريع بالتقريب نتحقق به من موضع العلامة العشرية."],
          ["Partial product", "حاصل الضرب الجزئي", "One part of the area model, like 1 × 6.8 = 6.8.", "جزء واحد من نموذج المساحة، مثل 1 × 6.8 = 6.8."]
        ],
        lab: { parts: [{ type: "mp5_decarea" }] },
        quiz: [
          Q(["What is 0.3 × 0.4?", "ما ناتج 0.3 × 0.4؟"], [["0.12", "0.12"], ["1.2", "1.2"], ["0.7", "0.7"], ["0.012", "0.012"]],
            ["3 × 4 = 12, and tenths × tenths = hundredths: 0.12.", "3 × 4 = 12، وأجزاء من عشرة × أجزاء من عشرة = أجزاء من مائة: 0.12."], ["A 3-by-4 rectangle covers 12 of the 100 small squares.", "مستطيل 3 في 4 يغطي 12 مربعًا من 100 مربع صغير."]),
          Q(["When you multiply 0.5 by 0.7, in which place is the last digit of the product?", "عند ضرب 0.5 في 0.7، في أي خانة يكون آخر رقم في الناتج؟"], [["Hundredths (0.35)", "أجزاء من مائة (0.35)"], ["Tenths (3.5)", "أجزاء من عشرة (3.5)"], ["Ones (35)", "الآحاد (35)"], ["Thousandths (0.035)", "أجزاء من ألف (0.035)"]],
            ["One decimal place + one decimal place = two places: 0.5 × 0.7 = 0.35.", "رقم عشري + رقم عشري = رقمان عشريان: 0.5 × 0.7 = 0.35."], ["Nadia's tile: half of 0.7 m is 0.35 m², hundredths of the tile.", "بلاطة نادية: نصف 0.7 م هو 0.35 م²، أي أجزاء من مائة من البلاطة."]),
          Q(["What is 0.9 × 0.5?", "ما ناتج 0.9 × 0.5؟"], [["0.45", "0.45"], ["4.5", "4.5"], ["1.4", "1.4"], ["0.045", "0.045"]],
            ["9 × 5 = 45 hundredths = 0.45.", "9 × 5 = 45 جزءًا من مائة = 0.45."], ["Half of 0.9 is 0.45.", "نصف 0.9 هو 0.45."]),
          Q(["Use an area model: 1.3 × 6.8 = ?", "استخدم نموذج المساحة: 1.3 × 6.8 = ؟"], [["8.84", "8.84"], ["6.24", "6.24"], ["88.4", "88.4"], ["7.04", "7.04"]],
            ["1 × 6 = 6, 1 × 0.8 = 0.8, 0.3 × 6 = 1.8, 0.3 × 0.8 = 0.24; total 8.84.", "1 × 6 = 6 و1 × 0.8 = 0.8 و0.3 × 6 = 1.8 و0.3 × 0.8 = 0.24، والمجموع 8.84."], ["Estimate 1 × 7 = 7 to 2 × 7 = 14; 8.84 fits.", "التقدير بين 1 × 7 = 7 و2 × 7 = 14، و8.84 مناسب."]),
          Q(["12 pallets each weigh 1.36 t. What is the total weight?", "وزن كل منصة من 12 منصة 1.36 طن. ما الوزن الكلي؟"], [["16.32 t", "16.32 طن"], ["163.2 t", "163.2 طن"], ["1.632 t", "1.632 طن"], ["13.36 t", "13.36 طن"]],
            ["136 × 12 = 1,632, and 1.36 has two decimal places: 16.32 t.", "136 × 12 = 1,632، وللعدد 1.36 رقمان عشريان: 16.32 طن."], ["Estimate 12 × 1.4 ≈ 17 t, so 16.32 t is reasonable.", "التقدير 12 × 1.4 ≈ 17 طنًا، إذن 16.32 طن ناتج معقول."]),
          Q(["What is 42.16 × 3.4?", "ما ناتج 42.16 × 3.4؟"], [["143.344", "143.344"], ["1,433.44", "1,433.44"], ["14.3344", "14.3344"], ["143.44", "143.44"]],
            ["4,216 × 34 = 143,344; decimal places 2 + 1 = 3: 143.344.", "4,216 × 34 = 143,344، والأرقام العشرية 2 + 1 = 3: 143.344."], ["Dalal's estimate 42 × 3 = 126 and Doha's count of 3 places both agree.", "تقدير دلال 42 × 3 = 126، وعدّ ضحى لثلاثة أرقام عشرية، كلاهما يتفقان."]),
          Q(["What is 7.184 × 6.3?", "ما ناتج 7.184 × 6.3؟"], [["45.2592", "45.2592"], ["452.592", "452.592"], ["4.52592", "4.52592"], ["45.592", "45.592"]],
            ["7,184 × 63 = 452,592; decimal places 3 + 1 = 4: 45.2592.", "7,184 × 63 = 452,592، والأرقام العشرية 3 + 1 = 4: 45.2592."], ["Estimate 7 × 6 = 42, so the answer must be in the forties.", "التقدير 7 × 6 = 42، إذن الناتج يجب أن يكون في الأربعينيات."])
        ]
      },
      {
        id: "mp5u5l3", icon: "⚖️", page: 105,
        title: { en: "Decimals and the metric system, measurement and powers of ten, and solving multistep story problems", ar: "الأعداد العشرية والنظام المتري، والقياس وقوى العشرة، وحل مسائل كلامية متعددة الخطوات" },
        idea: {
          official: {
            en: ["Metric units are linked by powers of ten: 1 cm = 10 mm, 1 m = 100 cm = 1,000 mm, 1 km = 1,000 m, 1 kg = 1,000 g, 1 L = 1,000 mL.",
              "From a smaller unit to a bigger unit, multiply by 0.1, 0.01 or 0.001: " + eq("4,230 mL × 0.001 = 4.23 L") + ".",
              "From a bigger unit to a smaller unit, multiply by 10, 100 or 1,000: " + eq("3.648 kg × 1,000 = 3,648 g") + ".",
              "So " + eq("135 cm = 1.35 m = 1,350 mm") + ": the same length written in different units.",
              "In multistep problems, change everything to one unit first: " + eq("2 kg + 600 g + 0.03 kg + 1,750 g = 2 + 0.6 + 0.03 + 1.75 = 4.38 kg") + "."],
            ar: ["ترتبط الوحدات المترية بقوى العشرة: 1 سم = 10 مم، و1 م = 100 سم = 1,000 مم، و1 كم = 1,000 م، و1 كجم = 1,000 جم، و1 لتر = 1,000 مل.",
              "من وحدة أصغر إلى وحدة أكبر نضرب في 0.1 أو 0.01 أو 0.001: " + eq("4,230 mL × 0.001 = 4.23 L") + ".",
              "ومن وحدة أكبر إلى وحدة أصغر نضرب في 10 أو 100 أو 1,000: " + eq("3.648 kg × 1,000 = 3,648 g") + ".",
              "إذن " + eq("135 cm = 1.35 m = 1,350 mm") + ": الطول نفسه مكتوبًا بوحدات مختلفة.",
              "وفي المسائل متعددة الخطوات نحوّل كل الكميات إلى وحدة واحدة أولًا: " + eq("2 kg + 600 g + 0.03 kg + 1,750 g = 2 + 0.6 + 0.03 + 1.75 = 4.38 kg") + "."]
          },
          story: {
            en: ["Yousra the vet weighs a cat: 3.648 kg. Her assistant writes 3,648.0 g. Who is right? Both! 3.648 × 1,000 = 3,648.",
              "Rania the nurse needs 1.35 m of bandage for each of 4 patients: 5.4 m = 540 cm. Each package has 250 cm.",
              "Two packages give 500 cm, not enough; three give 750 cm. She takes 3 packages and 210 cm is left.",
              "Dalia makes 1 L of sugar cane juice. She drinks 320 mL and her father drinks 0.25 L = 250 mL. 1,000 − 320 − 250 = 430 mL are left.",
              "Champion weightlifter Mohamed Ehab lifted 173 kg and 201,000 g. 201,000 × 0.001 = 201 kg, so the second lift is greater."],
            ar: ["تزن الطبيبة البيطرية يسرا قطة: 3.648 كجم، ويكتب مساعدها 3,648.0 جم. من على حق؟ كلاهما! 3.648 × 1,000 = 3,648.",
              "تحتاج الممرضة رانيا 1.35 م من الضمادات لكل مريض من 4 مرضى: 5.4 م = 540 سم، وفي كل عبوة 250 سم.",
              "عبوتان تعطيان 500 سم ولا تكفيان، وثلاث عبوات تعطي 750 سم، فتأخذ 3 عبوات ويتبقى 210 سم.",
              "تصنع داليا 1 لتر عصير قصب، تشرب 320 مل ويشرب والدها 0.25 لتر = 250 مل، فيتبقى 1,000 − 320 − 250 = 430 مل.",
              "رفع البطل محمد إيهاب 173 كجم و201,000 جم، و201,000 × 0.001 = 201 كجم، إذن الرفعة الثانية أكبر."]
          }
        },
        words: [
          ["Metric system", "النظام المتري", "Units of measure linked by powers of ten: mm, cm, m, km; g, kg; mL, L.", "وحدات قياس ترتبط بقوى العشرة: مم، سم، م، كم؛ جم، كجم؛ مل، لتر."],
          ["Millimetre (mm)", "المليمتر (مم)", "1 mm = 0.1 cm = 0.001 m.", "1 مم = 0.1 سم = 0.001 م."],
          ["Kilogram (kg)", "الكيلوجرام (كجم)", "1 kg = 1,000 g, so 1 g = 0.001 kg.", "1 كجم = 1,000 جم، إذن 1 جم = 0.001 كجم."],
          ["Litre (L)", "اللتر", "1 L = 1,000 mL, so 1 mL = 0.001 L.", "1 لتر = 1,000 مل، إذن 1 مل = 0.001 لتر."],
          ["Convert", "يحوّل", "Write the same measurement in another unit: 135 cm = 1.35 m.", "كتابة القياس نفسه بوحدة أخرى: 135 سم = 1.35 م."],
          ["Equivalent measurement", "قياس مكافئ", "A measurement that is equal but uses a different unit.", "قياس مساوٍ لكن بوحدة مختلفة."]
        ],
        lab: { parts: [{ type: "mp5_metric" }] },
        quiz: [
          Q(["10,870 g = ___ kg", "10,870 جم = ___ كجم"], [["10.87", "10.87"], ["108.7", "108.7"], ["1.087", "1.087"], ["1,087", "1,087"]],
            ["g to kg: multiply by 0.001 (three places right): 10,870 × 0.001 = 10.87 kg.", "من جم إلى كجم نضرب في 0.001 (ثلاث خانات إلى اليمين): 10,870 × 0.001 = 10.87 كجم."], ["Every 1,000 g is one kilogram: 10 whole kilograms and 870 g more.", "كل 1,000 جم كيلوجرام واحد: 10 كيلوجرامات و870 جم أخرى."]),
          Q(["3,465 mL = ___ L", "3,465 مل = ___ لتر"], [["3.465", "3.465"], ["34.65", "34.65"], ["0.3465", "0.3465"], ["346.5", "346.5"]],
            ["mL to L: × 0.001, so 3,465 mL = 3.465 L.", "من مل إلى لتر: × 0.001، إذن 3,465 مل = 3.465 لتر."], ["3 full litre bottles and 465 mL more.", "3 زجاجات لتر كاملة و465 مل أخرى."]),
          Q(["0.7 m = ___ cm", "0.7 م = ___ سم"], [["70", "70"], ["7", "7"], ["700", "700"], ["0.07", "0.07"]],
            ["m to cm: × 100, so 0.7 × 100 = 70 cm.", "من م إلى سم: × 100، إذن 0.7 × 100 = 70 سم."], ["A metre is 100 cm; seven tenths of it is 70 cm.", "المتر 100 سم، وسبعة أجزاء من عشرة منه 70 سم."]),
          Q(["Amgad drinks 4,230 mL of water a day. Which multiplication gives the litres?", "يشرب أمجد 4,230 مل من الماء يوميًا. أي عملية ضرب تعطي عدد اللترات؟"], [["4,230 × 0.001", "4,230 × 0.001"], ["4,230 × 1,000", "4,230 × 1,000"], ["4,230 × 100", "4,230 × 100"], ["4,230 × 0.01", "4,230 × 0.01"]],
            ["Litres are bigger than millilitres, so multiply by 0.001: 4.23 L.", "اللتر أكبر من المليلتر، فنضرب في 0.001: 4.23 لتر."], ["A bigger unit needs a smaller number: 4,230 shrinks to 4.23.", "الوحدة الأكبر تحتاج عددًا أصغر: 4,230 تصغر إلى 4.23."]),
          Q(["Marwan's computer parts have masses 2 kg, 600 g, 0.03 kg and 1,750 g. What is the total mass?", "كتل أجزاء حاسوب مروان: 2 كجم و600 جم و0.03 كجم و1,750 جم. ما الكتلة الكلية؟"], [["4.38 kg", "4.38 كجم"], ["2,352.03 kg", "2,352.03 كجم"], ["3.38 kg", "3.38 كجم"], ["5.38 kg", "5.38 كجم"]],
            ["In kg: 2 + 0.6 + 0.03 + 1.75 = 4.38 kg.", "بالكيلوجرام: 2 + 0.6 + 0.03 + 1.75 = 4.38 كجم."], ["Change grams to kilograms before adding, or the units get mixed.", "حوّل الجرامات إلى كيلوجرامات قبل الجمع، وإلا اختلطت الوحدات."]),
          Q(["Dalia made 1 L of juice. She drank 320 mL and her father drank 0.25 L. How much is left?", "صنعت داليا 1 لتر عصير، شربت 320 مل وشرب والدها 0.25 لتر. كم تبقى؟"], [["430 mL", "430 مل"], ["680 mL", "680 مل"], ["0.67 L", "0.67 لتر"], ["570 mL", "570 مل"]],
            ["1 L = 1,000 mL and 0.25 L = 250 mL. 1,000 − 320 − 250 = 430 mL.", "1 لتر = 1,000 مل و0.25 لتر = 250 مل، و1,000 − 320 − 250 = 430 مل."], ["Pour out 320 mL, then a quarter litre: 430 mL stay in the jug.", "اسكب 320 مل ثم ربع لتر، فيبقى 430 مل في الإبريق."]),
          Q(["Rania needs 1.35 m of bandage for each of 4 patients. Each package has 250 cm. How many packages does she need?", "تحتاج رانيا 1.35 م ضمادات لكل مريض من 4 مرضى، وفي كل عبوة 250 سم. كم عبوة تحتاج؟"], [["3", "3"], ["2", "2"], ["4", "4"], ["5.4", "5.4"]],
            ["1.35 × 4 = 5.4 m = 540 cm. 2 packages = 500 cm (too little), 3 packages = 750 cm. So 3 (210 cm left).", "1.35 × 4 = 5.4 م = 540 سم، وعبوتان = 500 سم (لا تكفي)، و3 عبوات = 750 سم، إذن 3 (ويتبقى 210 سم)."], ["She cannot buy part of a package, so she rounds up to 3.", "لا يمكنها شراء جزء من عبوة، فتقرب لأعلى إلى 3."])
        ]
      },
      {
        id: "mp5u5l4", icon: "🍹", page: 112,
        title: { en: "Dividing by powers of ten, patterns in powers of ten, dividing decimals by whole numbers and by decimals", ar: "القسمة على قوى العشرة، والأنماط في قوى العشرة، وقسمة الأعداد العشرية على أعداد صحيحة وعلى أعداد عشرية" },
        idea: {
          official: {
            en: ["Dividing by 10, 100 or 1,000 moves every digit 1, 2 or 3 places to the right: " + eq("2,500 ÷ 100 = 25") + ".",
              "Dividing by 0.1, 0.01 or 0.001 moves every digit to the left: " + eq("5.7 ÷ 0.1 = 57") + ". Dividing by 0.1 is the same as multiplying by 10.",
              "To divide a decimal by a whole number, divide as usual and write the decimal point in the quotient straight above the point in the dividend: " + eq("62.24 ÷ 16 = 3.89") + ".",
              "No remainder: write zeros after the point and keep dividing: " + eq("150 ÷ 40 = 3.75") + ".",
              "To divide by a decimal, multiply both numbers by 10, 100 or 1,000 until the divisor is a whole number: " + eq("26.4 ÷ 2.2 = 264 ÷ 22 = 12") + ".",
              "Careful: " + eq("77.43 ÷ 0.3 = 774.3 ÷ 3 = 258.1") + ", not 2.581."],
            ar: ["القسمة على 10 أو 100 أو 1,000 تنقل كل رقم خانة أو خانتين أو ثلاث خانات إلى اليمين: " + eq("2,500 ÷ 100 = 25") + ".",
              "والقسمة على 0.1 أو 0.01 أو 0.001 تنقل كل رقم إلى اليسار: " + eq("5.7 ÷ 0.1 = 57") + "؛ فالقسمة على 0.1 مثل الضرب في 10.",
              "لقسمة عدد عشري على عدد صحيح نقسم كالمعتاد ونضع العلامة العشرية في خارج القسمة فوق علامة المقسوم تمامًا: " + eq("62.24 ÷ 16 = 3.89") + ".",
              "وللتخلص من الباقي نكتب أصفارًا بعد العلامة ونكمل القسمة: " + eq("150 ÷ 40 = 3.75") + ".",
              "وللقسمة على عدد عشري نضرب العددين في 10 أو 100 أو 1,000 حتى يصبح المقسوم عليه عددًا صحيحًا: " + eq("26.4 ÷ 2.2 = 264 ÷ 22 = 12") + ".",
              "انتبه: " + eq("77.43 ÷ 0.3 = 774.3 ÷ 3 = 258.1") + " وليس 2.581."]
          },
          story: {
            en: ["Emad the electrician has a 150 m wire to cut into 40 equal parts. 150 ÷ 40 = 3 R 30, but he wants no wire left over.",
              "He writes 150.00 and keeps dividing: 300 tenths ÷ 40 = 7 tenths, 200 hundredths ÷ 40 = 5 hundredths. Each part is 3.75 m.",
              "Dalia pours 20 L of karkade (hibiscus) equally into 50 cups: 20 ÷ 50 = 0.4 L, that is 400 mL per cup.",
              "Nour sells juice in 2.2 L jugs. How many jugs fill 26.4 L? He multiplies both by 10: 264 ÷ 22 = 12 jugs.",
              "Water boils at about one tenth of the 1,100 °C a glass-blower needs: 1,100 ÷ 10 = 110, close to 100 °C."],
            ar: ["عند عماد الكهربائي سلك طوله 150 م يريد قطعه إلى 40 قطعة متساوية؛ 150 ÷ 40 = 3 والباقي 30، لكنه لا يريد أن يتبقى سلك.",
              "يكتب 150.00 ويكمل القسمة: 300 جزء من عشرة ÷ 40 = 7 أجزاء من عشرة، و200 جزء من مائة ÷ 40 = 5 أجزاء من مائة، فطول كل قطعة 3.75 م.",
              "تصب داليا 20 لترًا من الكركديه بالتساوي في 50 كوبًا: 20 ÷ 50 = 0.4 لتر، أي 400 مل في كل كوب.",
              "يبيع نور العصير في أباريق سعة كل منها 2.2 لتر؛ فكم إبريقًا تملأ 26.4 لترًا؟ يضرب العددين في 10: 264 ÷ 22 = 12 إبريقًا.",
              "يغلي الماء عند نحو جزء من عشرة من 1,100 درجة التي يحتاجها نافخ الزجاج: 1,100 ÷ 10 = 110، وهي قريبة من 100 درجة."]
          }
        },
        words: [
          ["Divide by a power of ten", "القسمة على قوة للعشرة", "÷ 10, 100, 1,000 moves digits right; ÷ 0.1, 0.01, 0.001 moves them left.", "القسمة على 10 و100 و1,000 تنقل الأرقام إلى اليمين، وعلى 0.1 و0.01 و0.001 تنقلها إلى اليسار."],
          ["Inverse operation", "العملية العكسية", "÷ 100 gives the same answer as × 0.01.", "القسمة على 100 تعطي الناتج نفسه مثل الضرب في 0.01."],
          ["Quotient", "خارج القسمة", "The answer to a division: 3.75 in 150 ÷ 40.", "ناتج القسمة: 3.75 في 150 ÷ 40."],
          ["Whole-number divisor", "مقسوم عليه صحيح", "We make the divisor whole by multiplying both numbers by the same power of ten.", "نجعل المقسوم عليه عددًا صحيحًا بضرب العددين في قوة العشرة نفسها."],
          ["Annex zeros", "إضافة أصفار", "Write zeros after the last decimal digit to keep dividing: 150 = 150.00.", "كتابة أصفار بعد آخر رقم عشري لمتابعة القسمة: 150 = 150.00."]
        ],
        lab: { parts: [{ type: "mp5_pow10", mode: "div" }, { type: "mp5_whole" }] },
        quiz: [
          Q(["What is 2,500 ÷ 100?", "ما ناتج 2,500 ÷ 100؟"], [["25", "25"], ["250", "250"], ["250,000", "250,000"], ["2.5", "2.5"]],
            ["÷ 100 moves every digit 2 places right: 2,500 → 25.", "القسمة على 100 تنقل كل رقم خانتين إلى اليمين: 2,500 تصبح 25."], ["Check: 25 × 100 = 2,500.", "التحقق: 25 × 100 = 2,500."]),
          Q(["What is 5.7 ÷ 0.1?", "ما ناتج 5.7 ÷ 0.1؟"], [["57", "57"], ["0.57", "0.57"], ["5.8", "5.8"], ["570", "570"]],
            ["Dividing by 0.1 is the same as multiplying by 10: 57.", "القسمة على 0.1 مثل الضرب في 10: 57."], ["How many tenths are in 5.7? 57 tenths.", "كم جزءًا من عشرة في 5.7؟ 57 جزءًا من عشرة."]),
          Q(["What is 71 ÷ 1,000?", "ما ناتج 71 ÷ 1,000؟"], [["0.071", "0.071"], ["0.71", "0.71"], ["71,000", "71,000"], ["7.1", "7.1"]],
            ["Three places right: 71 → 0.071.", "ثلاث خانات إلى اليمين: 71 تصبح 0.071."], ["71 m shared into 1,000 parts gives tiny parts of 0.071 m each.", "71 م مقسمة إلى 1,000 جزء تعطي أجزاء صغيرة طول كل منها 0.071 م."]),
          Q(["Emad cuts 150 m of wire into 40 equal parts with no wire left over. How long is each part?", "يقطع عماد سلكًا طوله 150 م إلى 40 قطعة متساوية دون أن يتبقى شيء. كم طول كل قطعة؟"], [["3.75 m", "3.75 م"], ["3 m", "3 م"], ["3.3 m", "3.3 م"], ["37.5 m", "37.5 م"]],
            ["150 ÷ 40 = 3 R 30; continue: 300 tenths ÷ 40 = 7 R 20, 200 hundredths ÷ 40 = 5. So 3.75 m.", "150 ÷ 40 = 3 والباقي 30، ونكمل: 300 جزء من عشرة ÷ 40 = 7 والباقي 20، و200 جزء من مائة ÷ 40 = 5، إذن 3.75 م."], ["Check: 40 × 3.75 = 150.", "التحقق: 40 × 3.75 = 150."]),
          Q(["Dalia pours 20 L of hibiscus equally into 50 cups. How much is in each cup?", "تصب داليا 20 لترًا من الكركديه بالتساوي في 50 كوبًا. كم في كل كوب؟"], [["0.4 L", "0.4 لتر"], ["2.5 L", "2.5 لتر"], ["4 L", "4 لترات"], ["0.04 L", "0.04 لتر"]],
            ["20 ÷ 50 = 200 tenths ÷ 50 = 4 tenths = 0.4 L.", "20 ÷ 50 = 200 جزء من عشرة ÷ 50 = 4 أجزاء من عشرة = 0.4 لتر."], ["Each cup gets less than 1 litre because there are more cups than litres: 400 mL.", "كل كوب يأخذ أقل من لتر لأن عدد الأكواب أكبر من عدد اللترات: 400 مل."]),
          Q(["What is 26.4 ÷ 2.2?", "ما ناتج 26.4 ÷ 2.2؟"], [["12", "12"], ["1.2", "1.2"], ["120", "120"], ["0.12", "0.12"]],
            ["Multiply both by 10: 264 ÷ 22 = 12.", "نضرب العددين في 10: 264 ÷ 22 = 12."], ["Nour needs 12 jugs of 2.2 L: 12 × 2.2 = 26.4.", "يحتاج نور 12 إبريقًا سعة 2.2 لتر: 12 × 2.2 = 26.4."]),
          Q(["A student said 77.43 ÷ 0.3 = 2.581. What is the correct quotient?", "قال طالب إن 77.43 ÷ 0.3 = 2.581. ما خارج القسمة الصحيح؟"], [["258.1", "258.1"], ["2.581", "2.581"], ["25.81", "25.81"], ["2,581", "2,581"]],
            ["Multiply BOTH numbers by 10: 774.3 ÷ 3 = 258.1. The student divided the dividend by 10 instead.", "نضرب العددين كليهما في 10: 774.3 ÷ 3 = 258.1، أما الطالب فقسم المقسوم على 10."], ["Dividing by a number less than 1 gives a bigger answer: 258.1 > 77.43.", "القسمة على عدد أقل من 1 تعطي ناتجًا أكبر: 258.1 > 77.43."])
        ]
      }
    ]
  });

  /* ======================= UNIT 6 - NUMERICAL EXPRESSIONS AND PATTERNS ======================= */
  U.push({
    id: "mp5u6", num: 6, icon: "🧮", color: "teal",
    title: { en: "Numerical Expressions and Patterns", ar: "المقادير العددية والأنماط" },
    lessons: [
      {
        id: "mp5u6l1", icon: "🚌", page: 121,
        title: { en: "Ordering of mathematical operations and numerical expressions with parentheses", ar: "ترتيب العمليات الحسابية والمقادير العددية ذات الأقواس" },
        idea: {
          official: {
            en: ["Order of operations: first multiply or divide from left to right, then add or subtract from left to right.",
              "Example: " + eq("300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07") + ". Step 1: " + eq("11.04 × 0.2 = 2.208") + ". Step 2: " + eq("2.208 ÷ 0.01 = 220.8") + ".",
              "Step 3: " + eq("300.53 − 220.8 = 79.73") + ". Step 4: " + eq("79.73 + 13.07 = 92.8") + ".",
              "Grouping symbols come first: work inside parentheses ( ), then brackets [ ], then outside, always × ÷ before + −.",
              "Parentheses can change the value: " + eq("10 × 4 − 3 = 37") + " but " + eq("10 × (4 − 3) = 10") + "."],
            ar: ["ترتيب العمليات: نضرب أو نقسم أولًا من اليسار إلى اليمين، ثم نجمع أو نطرح من اليسار إلى اليمين.",
              "مثال: " + eq("300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07") + "؛ الخطوة 1: " + eq("11.04 × 0.2 = 2.208") + "، والخطوة 2: " + eq("2.208 ÷ 0.01 = 220.8") + ".",
              "الخطوة 3: " + eq("300.53 − 220.8 = 79.73") + "، والخطوة 4: " + eq("79.73 + 13.07 = 92.8") + ".",
              "رموز التجميع أولًا: نحسب ما داخل الأقواس ( ) ثم الأقواس المربعة [ ] ثم ما بالخارج، ودائمًا الضرب والقسمة قبل الجمع والطرح.",
              "الأقواس قد تغير القيمة: " + eq("10 × 4 − 3 = 37") + "، أما " + eq("10 × (4 − 3) = 10") + "."]
          },
          story: {
            en: ["Ali drives a tour bus in Cairo. His route follows the expression 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07.",
              "\"Multiplication and division are the express stops,\" he says. Stop 1: 11.04 × 0.2 = 2.208. Stop 2: 2.208 ÷ 0.01 = 220.8.",
              "Then the local stops from left to right. Stop 3: 300.53 − 220.8 = 79.73. Stop 4: 79.73 + 13.07 = 92.8.",
              "A passenger who stopped at 300.53 − 11.04 first would end up in a completely different place.",
              "Ali's daughter Malak plays \"Make it smaller\": 10 × 4 − 3 is 37, but with parentheses 10 × (4 − 3) is only 10."],
            ar: ["يقود علي حافلة سياحية في القاهرة، ومساره يتبع المقدار 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07.",
              "يقول: \"الضرب والقسمة محطات سريعة\"؛ المحطة 1: 11.04 × 0.2 = 2.208، والمحطة 2: 2.208 ÷ 0.01 = 220.8.",
              "ثم المحطات العادية من اليسار إلى اليمين؛ المحطة 3: 300.53 − 220.8 = 79.73، والمحطة 4: 79.73 + 13.07 = 92.8.",
              "والراكب الذي يبدأ بـ 300.53 − 11.04 أولًا يصل إلى مكان مختلف تمامًا.",
              "تلعب ملك ابنة علي لعبة \"اجعله أصغر\": 10 × 4 − 3 = 37، لكن بالأقواس 10 × (4 − 3) = 10 فقط."]
          }
        },
        words: [
          ["Order of operations", "ترتيب العمليات", "The agreed order: parentheses, then × and ÷ left to right, then + and − left to right.", "الترتيب المتفق عليه: الأقواس، ثم الضرب والقسمة من اليسار، ثم الجمع والطرح من اليسار."],
          ["Numerical expression", "المقدار العددي", "Numbers joined by operations, like 10 × 4 − 3.", "أعداد تربطها عمليات، مثل 10 × 4 − 3."],
          ["Evaluate", "يوجد القيمة", "Work out the value of an expression.", "حساب قيمة المقدار."],
          ["Parentheses ( )", "الأقواس ( )", "Grouping symbols: what is inside is done first.", "رموز تجميع، وما بداخلها يُحسب أولًا."],
          ["Brackets [ ]", "الأقواس المربعة [ ]", "Grouping symbols around parentheses, done after the parentheses inside them.", "رموز تجميع حول الأقواس، وتُحسب بعد الأقواس التي بداخلها."]
        ],
        lab: { parts: [{ type: "mp5_order" }] },
        quiz: [
          Q(["Evaluate 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07.", "أوجد قيمة 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07."], [["92.8", "92.8"], ["5,802.87", "5,802.87"], ["303.26", "303.26"], ["79.73", "79.73"]],
            ["11.04 × 0.2 = 2.208; ÷ 0.01 = 220.8; 300.53 − 220.8 = 79.73; + 13.07 = 92.8.", "11.04 × 0.2 = 2.208، ÷ 0.01 = 220.8، و300.53 − 220.8 = 79.73، + 13.07 = 92.8."], ["Ali's bus stops at the × and ÷ stops first, then − and + from left to right.", "تتوقف حافلة علي عند محطتي الضرب والقسمة أولًا، ثم الطرح والجمع من اليسار."]),
          Q(["In 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07, which step comes first?", "في المقدار 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07، ما الخطوة الأولى؟"], [["11.04 × 0.2", "11.04 × 0.2"], ["300.53 − 11.04", "300.53 − 11.04"], ["0.2 ÷ 0.01", "0.2 ÷ 0.01"], ["0.01 + 13.07", "0.01 + 13.07"]],
            ["× and ÷ come before + and −, and between × and ÷ we go left to right: 11.04 × 0.2 first.", "الضرب والقسمة قبل الجمع والطرح، وبين الضرب والقسمة نبدأ من اليسار: 11.04 × 0.2 أولًا."], ["The leftmost express stop is the multiplication.", "أول محطة سريعة من اليسار هي الضرب."]),
          Q(["Which value is correct?", "أي قيمة صحيحة؟"], [["10 × (4 − 3) = 10", "10 × (4 − 3) = 10"], ["10 × 4 − 3 = 10", "10 × 4 − 3 = 10"], ["10 × (4 − 3) = 37", "10 × (4 − 3) = 37"], ["10 × 4 − 3 = 70", "10 × 4 − 3 = 70"]],
            ["Without parentheses: 40 − 3 = 37. With them, 4 − 3 = 1 first, then 10 × 1 = 10.", "بدون أقواس: 40 − 3 = 37، ومع الأقواس نحسب 4 − 3 = 1 أولًا ثم 10 × 1 = 10."], ["The parentheses are a fence: do what is inside the fence first.", "الأقواس سور: نحسب ما داخل السور أولًا."]),
          Q(["Evaluate 12 + 24 ÷ (4 + 8).", "أوجد قيمة 12 + 24 ÷ (4 + 8)."], [["14", "14"], ["3", "3"], ["26", "26"], ["17", "17"]],
            ["(4 + 8) = 12 first; then 24 ÷ 12 = 2; then 12 + 2 = 14.", "(4 + 8) = 12 أولًا، ثم 24 ÷ 12 = 2، ثم 12 + 2 = 14."], ["Inside the fence first, then divide, then add.", "داخل السور أولًا، ثم القسمة، ثم الجمع."]),
          Q(["Evaluate 56.5 × 2.3 − 15 + 12.7.", "أوجد قيمة 56.5 × 2.3 − 15 + 12.7."], [["127.65", "127.65"], ["102.25", "102.25"], ["129.95", "129.95"], ["98.9", "98.9"]],
            ["56.5 × 2.3 = 129.95; 129.95 − 15 = 114.95; 114.95 + 12.7 = 127.65.", "56.5 × 2.3 = 129.95، و129.95 − 15 = 114.95، و114.95 + 12.7 = 127.65."], ["After the multiplication, − and + go left to right: subtract 15 first, then add 12.7.", "بعد الضرب يكون الطرح والجمع من اليسار: نطرح 15 أولًا ثم نجمع 12.7."]),
          Q(["Evaluate (1.3 + 3.45) × 8 − 2.02.", "أوجد قيمة (1.3 + 3.45) × 8 − 2.02."], [["35.98", "35.98"], ["26.88", "26.88"], ["38", "38"], ["21.84", "21.84"]],
            ["1.3 + 3.45 = 4.75; 4.75 × 8 = 38; 38 − 2.02 = 35.98.", "1.3 + 3.45 = 4.75، و4.75 × 8 = 38، و38 − 2.02 = 35.98."], ["Without the parentheses the value would be 26.88, so the fence matters.", "بدون الأقواس تكون القيمة 26.88، إذن السور مهم."]),
          Q(["Evaluate 64 ÷ (0.32 + 0.1 × 3.2).", "أوجد قيمة 64 ÷ (0.32 + 0.1 × 3.2)."], [["100", "100"], ["200", "200"], ["1.32", "1.32"], ["640", "640"]],
            ["Inside: 0.1 × 3.2 = 0.32, then 0.32 + 0.32 = 0.64. Then 64 ÷ 0.64 = 100.", "داخل القوس: 0.1 × 3.2 = 0.32، ثم 0.32 + 0.32 = 0.64، ثم 64 ÷ 0.64 = 100."], ["Even inside the parentheses, × comes before +.", "حتى داخل القوسين يأتي الضرب قبل الجمع."])
        ]
      },
      {
        id: "mp5u6l2", icon: "✍️", page: 126,
        title: { en: "Writing expressions to represent scenarios", ar: "كتابة مقادير تعبر عن مواقف حياتية" },
        idea: {
          official: {
            en: ["Read the words in order and turn each action into an operation. Use parentheses when a step must happen first.",
              "\"Subtract 3.1 from 4.62. Then multiply the result by 2\" is " + eq("(4.62 − 3.1) × 2 = 3.04") + ". Note: subtract 3.1 FROM 4.62 means 4.62 − 3.1.",
              "\"Divide 93 by 0.3, add 114.7, then divide the result by 5\" is " + eq("(93 ÷ 0.3 + 114.7) ÷ 5 = 84.94") + ".",
              "Kamel has 1,000 LE and saves 50 LE + 30 LE a week for 4 weeks: " + eq("1,000 + (50 + 30) × 4 = 1,320") + " LE.",
              "Hoda pours 15.75 L into 16 vases and keeps 3.75 L: " + eq("(15.75 − 3.75) ÷ 16 = 0.75") + " L per vase."],
            ar: ["نقرأ الكلمات بالترتيب ونحوّل كل فعل إلى عملية، ونستخدم الأقواس عندما يجب أن تتم خطوة أولًا.",
              "\"اطرح 3.1 من 4.62 ثم اضرب الناتج في 2\" هي " + eq("(4.62 − 3.1) × 2 = 3.04") + "؛ لاحظ أن طرح 3.1 من 4.62 يعني 4.62 − 3.1.",
              "\"اقسم 93 على 0.3 واجمع 114.7 ثم اقسم الناتج على 5\" هي " + eq("(93 ÷ 0.3 + 114.7) ÷ 5 = 84.94") + ".",
              "مع كامل 1,000 جنيه، ويدخر 50 جنيهًا + 30 جنيهًا أسبوعيًا لمدة 4 أسابيع: " + eq("1,000 + (50 + 30) × 4 = 1,320") + " جنيهًا.",
              "تصب هدى 15.75 لترًا في 16 مزهرية ويتبقى معها 3.75 لتر: " + eq("(15.75 − 3.75) ÷ 16 = 0.75") + " لتر في كل مزهرية."]
          },
          story: {
            en: ["Kamel is saving to buy a car. He already has 1,000 LE.",
              "He works two jobs: one saves him 50 LE a week and the other 30 LE. Each week he puts away 50 + 30 = 80 LE.",
              "After 4 weeks: (50 + 30) × 4 = 320 LE, and with his savings, 1,000 + 320 = 1,320 LE.",
              "He writes it as one expression: 1,000 + (50 + 30) × 4. Without the parentheses he would get 1,000 + 50 + 120 = 1,170, which is wrong.",
              "Mounir cycles 38.7 km in 2 hours. In metres per minute: 38.7 × 1,000 ÷ 120 = 322.5 m each minute."],
            ar: ["يدخر كامل ليشتري سيارة، ومعه بالفعل 1,000 جنيه.",
              "يعمل في وظيفتين: الأولى توفر له 50 جنيهًا أسبوعيًا والثانية 30 جنيهًا، فيدخر كل أسبوع 50 + 30 = 80 جنيهًا.",
              "بعد 4 أسابيع: (50 + 30) × 4 = 320 جنيهًا، ومع مدخراته 1,000 + 320 = 1,320 جنيهًا.",
              "يكتبها مقدارًا واحدًا: 1,000 + (50 + 30) × 4، وبدون الأقواس يحصل على 1,000 + 50 + 120 = 1,170 وهذا خطأ.",
              "يقطع منير بدراجته 38.7 كم في ساعتين، وبالأمتار في الدقيقة: 38.7 × 1,000 ÷ 120 = 322.5 م كل دقيقة."]
          }
        },
        words: [
          ["Scenario", "موقف", "A real-life situation described in words.", "موقف من الحياة الواقعية موصوف بالكلمات."],
          ["Write an expression", "يكتب مقدارًا", "Turn the words into numbers, operations and grouping symbols.", "تحويل الكلمات إلى أعداد وعمليات ورموز تجميع."],
          ["The result", "الناتج", "The answer of the step before, often a clue for parentheses.", "ناتج الخطوة السابقة، وكثيرًا ما يكون دليلًا على الأقواس."],
          ["Difference", "الفرق", "\"The difference between 10 and 9.27\" is 10 − 9.27.", "\"الفرق بين 10 و9.27\" هو 10 − 9.27."],
          ["Sum", "المجموع", "\"The sum of 54 and 46\" is 54 + 46.", "\"مجموع 54 و46\" هو 54 + 46."]
        ],
        lab: { parts: [{ type: "mp5_build" }] },
        quiz: [
          Q(["Which expression means \"Subtract 3.1 from 4.62. Then multiply the result by 2\"?", "أي مقدار يعني \"اطرح 3.1 من 4.62 ثم اضرب الناتج في 2\"؟"], [["(4.62 − 3.1) × 2", "(4.62 − 3.1) × 2"], ["4.62 − 3.1 × 2", "4.62 − 3.1 × 2"], ["(3.1 − 4.62) × 2", "(3.1 − 4.62) × 2"], ["4.62 − (3.1 × 2)", "4.62 − (3.1 × 2)"]],
            ["The subtraction must happen first, so it needs parentheses: (4.62 − 3.1) × 2 = 3.04.", "الطرح يجب أن يتم أولًا فيحتاج أقواسًا: (4.62 − 3.1) × 2 = 3.04."], ["\"The result\" tells us the first step is finished before multiplying.", "كلمة \"الناتج\" تخبرنا أن الخطوة الأولى انتهت قبل الضرب."]),
          Q(["Evaluate (4.62 − 3.1) × 2.", "أوجد قيمة (4.62 − 3.1) × 2."], [["3.04", "3.04"], ["-1.58", "-1.58"], ["1.52", "1.52"], ["3.14", "3.14"]],
            ["4.62 − 3.1 = 1.52; 1.52 × 2 = 3.04.", "4.62 − 3.1 = 1.52، و1.52 × 2 = 3.04."], ["Double 1.52 is 3.04.", "ضعف 1.52 هو 3.04."]),
          Q(["Kamel has 1,000 LE and saves 50 LE and 30 LE each week for 4 weeks. How much does he have?", "مع كامل 1,000 جنيه، ويدخر 50 جنيهًا و30 جنيهًا كل أسبوع لمدة 4 أسابيع. كم يصبح معه؟"], [["1,320 LE", "1,320 جنيهًا"], ["1,170 LE", "1,170 جنيهًا"], ["4,320 LE", "4,320 جنيهًا"], ["1,080 LE", "1,080 جنيهًا"]],
            ["1,000 + (50 + 30) × 4 = 1,000 + 320 = 1,320 LE.", "1,000 + (50 + 30) × 4 = 1,000 + 320 = 1,320 جنيهًا."], ["Each week adds 80 LE, and 4 weeks add 320 LE to his 1,000.", "كل أسبوع يضيف 80 جنيهًا، و4 أسابيع تضيف 320 جنيهًا إلى الـ 1,000."]),
          Q(["Hoda has 15.75 L, fills 16 identical vases and has 3.75 L left. How much water is in each vase?", "مع هدى 15.75 لتر، ملأت 16 مزهرية متماثلة وتبقى معها 3.75 لتر. كم لترًا في كل مزهرية؟"], [["0.75 L", "0.75 لتر"], ["0.98 L", "0.98 لتر"], ["12 L", "12 لترًا"], ["1.2 L", "1.2 لتر"]],
            ["(15.75 − 3.75) ÷ 16 = 12 ÷ 16 = 0.75 L.", "(15.75 − 3.75) ÷ 16 = 12 ÷ 16 = 0.75 لتر."], ["First the water she poured, 12 L, then share it among 16 vases.", "أولًا الماء الذي صبته 12 لترًا، ثم نقسمه على 16 مزهرية."]),
          Q(["Mounir cycles 38.7 km in 2 hours at a steady rate. How many metres does he cycle per minute?", "يقطع منير بدراجته 38.7 كم في ساعتين بسرعة ثابتة. كم مترًا يقطع في الدقيقة؟"], [["322.5 m", "322.5 م"], ["19.35 m", "19.35 م"], ["3,225 m", "3,225 م"], ["645 m", "645 م"]],
            ["38.7 km = 38,700 m and 2 h = 120 min: 38.7 × 1,000 ÷ 120 = 322.5 m.", "38.7 كم = 38,700 م، وساعتان = 120 دقيقة: 38.7 × 1,000 ÷ 120 = 322.5 م."], ["Change both units first: metres and minutes, then divide.", "حوّل الوحدتين أولًا: أمتار ودقائق، ثم اقسم."]),
          Q(["\"Find the difference between 10 and 9.27. Multiply by the sum of 54 and 46. Then divide 1,168 by the result.\" What is the value?", "\"أوجد الفرق بين 10 و9.27، واضربه في مجموع 54 و46، ثم اقسم 1,168 على الناتج.\" ما القيمة؟"], [["16", "16"], ["73", "73"], ["1,168", "1,168"], ["0.73", "0.73"]],
            ["(10 − 9.27) × (54 + 46) = 0.73 × 100 = 73; 1,168 ÷ 73 = 16.", "(10 − 9.27) × (54 + 46) = 0.73 × 100 = 73، و1,168 ÷ 73 = 16."], ["73 is only the result of the first two steps; the last step divides 1,168 by it.", "73 هو ناتج الخطوتين الأوليين فقط، والخطوة الأخيرة تقسم 1,168 عليه."]),
          Q(["Which expression means \"Divide 93 by 0.3 and then add 114.7. After, divide the result by 5\"?", "أي مقدار يعني \"اقسم 93 على 0.3 ثم اجمع 114.7، وبعد ذلك اقسم الناتج على 5\"؟"], [["(93 ÷ 0.3 + 114.7) ÷ 5", "(93 ÷ 0.3 + 114.7) ÷ 5"], ["93 ÷ 0.3 + 114.7 ÷ 5", "93 ÷ 0.3 + 114.7 ÷ 5"], ["93 ÷ (0.3 + 114.7) ÷ 5", "93 ÷ (0.3 + 114.7) ÷ 5"], ["(0.3 ÷ 93 + 114.7) ÷ 5", "(0.3 ÷ 93 + 114.7) ÷ 5"]],
            ["The whole sum is divided by 5, so it goes in parentheses. Value: (310 + 114.7) ÷ 5 = 84.94.", "المجموع كله يُقسم على 5 فيوضع بين قوسين، والقيمة: (310 + 114.7) ÷ 5 = 84.94."], ["Without parentheses only 114.7 would be divided by 5.", "بدون الأقواس يُقسم 114.7 وحده على 5."])
        ]
      },
      {
        id: "mp5u6l3", icon: "🔁", page: 128,
        title: { en: "Identifying numerical patterns", ar: "التعرف على الأنماط العددية" },
        idea: {
          official: {
            en: ["A numerical pattern follows a rule that works for every step.",
              eq("5, 10, 20, 40, 80") + ": each term is multiplied by 2. " + eq("85, 73, 61, 49, 37") + ": subtract 12 each time.",
              eq("1.5, 3, 4.5, 6, 7.5") + ": add 1.5 each time, so the next term is 9.",
              "If one step breaks the rule, it is not a pattern: " + eq("3, 6, 9, 15, 21, 28") + " adds 3, 3, 6, 6, 7.",
              "In an input-output table, write the rule with a variable: bicycles n give wheels " + eq("n × 2") + "; inputs 4 and 5 with outputs 28 and 35 follow " + eq("n × 7") + ".",
              "Test the rule on every pair, not just one."],
            ar: ["النمط العددي يتبع قاعدة تصلح لكل خطوة.",
              eq("5, 10, 20, 40, 80") + ": كل حد يُضرب في 2، و" + eq("85, 73, 61, 49, 37") + ": نطرح 12 في كل مرة.",
              eq("1.5, 3, 4.5, 6, 7.5") + ": نجمع 1.5 في كل مرة، فيكون الحد التالي 9.",
              "إذا كسرت خطوة واحدة القاعدة فليس هناك نمط: " + eq("3, 6, 9, 15, 21, 28") + " نجمع فيه 3 ثم 3 ثم 6 ثم 6 ثم 7.",
              "في جدول المدخلات والمخرجات نكتب القاعدة بمتغير: عدد الدراجات n يعطي عدد العجلات " + eq("n × 2") + "، والمدخلان 4 و5 مع المخرجين 28 و35 يتبعان " + eq("n × 7") + ".",
              "نختبر القاعدة على كل زوج وليس على زوج واحد فقط."]
          },
          story: {
            en: ["Yaseen lays floor tiles in a growing pattern. Each stage adds the same number of tiles, so he can predict stage 10 without drawing it.",
              "His friends Yahia and Walid look at a table: input 4 gives 28 and input 5 gives 35.",
              "Yahia says the rule is n × 7: 4 × 7 = 28 and 5 × 7 = 35. Walid says n ÷ 7.",
              "They test Walid's rule: 4 ÷ 7 is not 28. Yahia's rule works for every pair, so Yahia is right.",
              "At the bicycle shop: 1 bicycle, 2 wheels; 2 bicycles, 4 wheels; 7 bicycles, 14 wheels. The rule is n × 2."],
            ar: ["يرص ياسين بلاط الأرضية في نمط متزايد، وكل مرحلة تضيف عدد البلاطات نفسه، فيستطيع أن يتوقع المرحلة العاشرة دون أن يرسمها.",
              "ينظر صديقاه يحيى ووليد إلى جدول: المدخل 4 يعطي 28، والمدخل 5 يعطي 35.",
              "يقول يحيى إن القاعدة n × 7: لأن 4 × 7 = 28 و5 × 7 = 35، ويقول وليد: n ÷ 7.",
              "يختبران قاعدة وليد: 4 ÷ 7 لا تساوي 28، أما قاعدة يحيى فتصلح لكل زوج، إذن يحيى على حق.",
              "في محل الدراجات: دراجة واحدة لها عجلتان، ودراجتان لهما 4 عجلات، و7 دراجات لها 14 عجلة؛ القاعدة n × 2."]
          }
        },
        words: [
          ["Numerical pattern", "النمط العددي", "Numbers that follow a rule, like 5, 10, 20, 40.", "أعداد تتبع قاعدة، مثل 5 و10 و20 و40."],
          ["Rule", "القاعدة", "What we do to each term (or input) to get the next term (or output).", "ما نفعله بكل حد (أو مدخل) لنحصل على الحد التالي (أو المخرج)."],
          ["Term", "الحد", "Each number in a pattern.", "كل عدد في النمط."],
          ["Input and output", "المدخلات والمخرجات", "The number we put in a rule and the number that comes out.", "العدد الذي ندخله في القاعدة والعدد الذي يخرج منها."],
          ["Variable", "المتغير", "A letter such as n that stands for any input in the rule n × 7.", "حرف مثل n يمثل أي مدخل في القاعدة n × 7."]
        ],
        lab: { parts: [{ type: "mp5_rule" }] },
        quiz: [
          Q(["What is the rule for 5, 10, 20, 40, 80?", "ما قاعدة النمط 5 و10 و20 و40 و80؟"], [["Multiply by 2", "الضرب في 2"], ["Add 5", "جمع 5"], ["Add 10", "جمع 10"], ["Multiply by 5", "الضرب في 5"]],
            ["5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40, 40 × 2 = 80.", "5 × 2 = 10 و10 × 2 = 20 و20 × 2 = 40 و40 × 2 = 80."], ["\"Add 5\" works only for the first step; doubling works every time.", "\"جمع 5\" يصلح للخطوة الأولى فقط، أما المضاعفة فتصلح في كل مرة."]),
          Q(["What is the rule for 85, 73, 61, 49, 37?", "ما قاعدة النمط 85 و73 و61 و49 و37؟"], [["Subtract 12", "طرح 12"], ["Subtract 13", "طرح 13"], ["Subtract 10", "طرح 10"], ["Divide by 2", "القسمة على 2"]],
            ["85 − 12 = 73, 73 − 12 = 61, 61 − 12 = 49, 49 − 12 = 37.", "85 − 12 = 73 و73 − 12 = 61 و61 − 12 = 49 و49 − 12 = 37."], ["Each step goes down by the same 12.", "كل خطوة تنقص بالمقدار نفسه 12."]),
          Q(["What is the next term of 1.5, 3, 4.5, 6, 7.5, ...?", "ما الحد التالي في النمط 1.5 و3 و4.5 و6 و7.5 ...؟"], [["9", "9"], ["8", "8"], ["15", "15"], ["8.5", "8.5"]],
            ["The rule is add 1.5: 7.5 + 1.5 = 9.", "القاعدة جمع 1.5: 7.5 + 1.5 = 9."], ["One and a half more each step: 9.", "واحد ونصف زيادة في كل خطوة: 9."]),
          Q(["Which list is NOT a pattern?", "أي قائمة ليست نمطًا؟"], [["3, 6, 9, 15, 21, 28", "3, 6, 9, 15, 21, 28"], ["5, 10, 20, 40, 80", "5, 10, 20, 40, 80"], ["85, 73, 61, 49, 37", "85, 73, 61, 49, 37"], ["1.5, 3, 4.5, 6, 7.5", "1.5, 3, 4.5, 6, 7.5"]],
            ["The jumps are +3, +3, +6, +6, +7: no single rule works for every step.", "القفزات +3 و+3 و+6 و+6 و+7، ولا توجد قاعدة واحدة تصلح لكل خطوة."], ["The others each keep one rule all the way.", "القوائم الأخرى تحافظ كل منها على قاعدة واحدة حتى النهاية."]),
          Q(["Bicycles (input) and wheels (output): which rule fits?", "الدراجات (المدخل) والعجلات (المخرج): أي قاعدة تناسب؟"], [["n × 2", "n × 2"], ["n + 2", "n + 2"], ["n ÷ 2", "n ÷ 2"], ["n × 3", "n × 3"]],
            ["Each bicycle has 2 wheels: 1 → 2, 2 → 4, 3 → 6, so wheels = n × 2.", "لكل دراجة عجلتان: 1 ← 2 و2 ← 4 و3 ← 6، إذن العجلات = n × 2."], ["n + 2 works for 2 → 4 but fails for 3 → 6.", "n + 2 تصلح لـ 2 ← 4 لكنها تفشل مع 3 ← 6."]),
          Q(["Input 4 → output 28 and input 5 → output 35. Yahia says n × 7, Walid says n ÷ 7. Who is right?", "المدخل 4 ← المخرج 28، والمدخل 5 ← المخرج 35. يقول يحيى n × 7 ويقول وليد n ÷ 7. من على حق؟"], [["Yahia: n × 7", "يحيى: n × 7"], ["Walid: n ÷ 7", "وليد: n ÷ 7"], ["Both", "كلاهما"], ["Neither", "لا أحد منهما"]],
            ["The rule works from input to output: 4 × 7 = 28 and 5 × 7 = 35. 4 ÷ 7 is not 28.", "القاعدة تعمل من المدخل إلى المخرج: 4 × 7 = 28 و5 × 7 = 35، أما 4 ÷ 7 فلا تساوي 28."], ["Walid went backwards from output to input.", "سار وليد في الاتجاه العكسي من المخرج إلى المدخل."]),
          Q(["With the rule n × 2, how many wheels do 7 bicycles have?", "بالقاعدة n × 2، كم عجلة لـ 7 دراجات؟"], [["14", "14"], ["9", "9"], ["72", "72"], ["3.5", "3.5"]],
            ["Replace n with 7: 7 × 2 = 14.", "نعوض عن n بالعدد 7: 7 × 2 = 14."], ["Seven bicycles, two wheels each: 14 wheels.", "سبع دراجات لكل منها عجلتان: 14 عجلة."])
        ]
      }
    ]
  });

  E.MTHG.p5 = { units: U, book: { en: "Primary 5 Mathematics, Term 1 (2026-2027)", ar: "الرياضيات، الصف الخامس الابتدائي، الفصل الدراسي الأول (2026-2027)" } };
})();
/* ---------- Primary 5 maths simulations (part A): place value, number line, decimal grids, balance, factor trees, multiples ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  /* shared helpers for every mp5_* lab */
  var H = E.mp5h = {};
  H.hint = function (s) { return '<p class="lab-prompt">' + s + "</p>"; };
  H.loc = function (s) { s = String(s); return E.isAr() ? E.d(s.replace(/,/g, "٬").replace(/\./g, "٫")) : s; };
  H.tx = function (s) { s = String(s); return E.isAr() ? E.d(s.replace(/(\d),(?=\d{3})/g, "$1٬").replace(/(\d)\.(?=\d)/g, "$1٫")) : s; };
  H.grp = function (s) { s = String(s); var neg = s.charAt(0) === "-"; if (neg) s = s.slice(1); var p = s.split("."); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","); return (neg ? "−" : "") + p.join("."); };
  H.fm = function (x, dp) { dp = dp == null ? 4 : dp; var m = Math.pow(10, dp), s = (Math.round(x * m) / m).toFixed(dp); if (s.indexOf(".") >= 0) s = s.replace(/0+$/, "").replace(/\.$/, ""); if (s === "-0") s = "0"; return H.loc(H.grp(s)); };
  H.fx = function (x, dp) { return H.loc(H.grp(x.toFixed(dp))); };
  H.inR = function (p, r) { return r && p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h; };
  H.btn = function (c, r, label, C, on, col) {
    K.rr(c, r.x, r.y, r.w, r.h, Math.min(10, r.h / 3)); c.fillStyle = on ? (col || "#3b82f6") : C.card; c.fill();
    c.strokeStyle = on ? (col || "#3b82f6") : C.line; c.lineWidth = 1.5; c.stroke();
    K.txt(c, label, r.x + r.w / 2, r.y + r.h / 2 + 1, { s: Math.max(10, Math.min(15, r.h * 0.42)), c: on ? "#fff" : C.ink });
  };
  H.ctl = function (host, html) { var d = E.el("div", "sim-ctl"); d.innerHTML = html; host.appendChild(d); return d; };
  H.meter = function (host) { var m = E.el("div", "meter"); host.appendChild(m); return m; };
  H.narrow = function (host) { return (host.clientWidth || 600) < 560; };
  H.mk = function (host, r, mh, nr) { var nw = H.narrow(host); return K.make(host, nw ? nr : r, nw ? Math.max(mh, 470) : mh); };
  H.ltr = function (c) { try { c.direction = "ltr"; } catch (e) {} };
  H.gcd = function (a, b) { return b ? H.gcd(b, a % b) : a; };
  var hint = H.hint, fm = H.fm, fx = H.fx, inR = H.inR;
  var PVC = ["#8b5cf6", "#3b82f6", "#0ea5e9", "#22c55e", "#f59e0b", "#ef4444"];

  /* =========================================================
     mp5_pv - place-value builder with x10 / ÷10 shuffle
     ========================================================= */
  L.mp5_pv = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap or drag up and down inside a column to set its digit. Then press × 10 or ÷ 10 and watch every digit slide.", "اضغط أو اسحب لأعلى ولأسفل داخل العمود لتحديد رقمه، ثم اضغط × 10 أو ÷ 10 وشاهد كل الأرقام تنزلق."));
    var S = H.mk(host, 0.62, 400, 1.0);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm" data-a="m">× 10</button><button type="button" class="btn sm" data-a="d">÷ 10</button><button type="button" class="btn sm ghost" data-a="z">↺ ' + t("Clear", "مسح") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Build the weight of Bird Three: 0.875 kg.", "كوّن وزن الطائر الثالث: 0.875 كجم."),
      t("Build 12.42 and read its expanded form.", "كوّن 12.42 واقرأ صورته الممتدة."),
      t("Build 345, then press ÷ 10 to make 34.5.", "كوّن 345 ثم اضغط ÷ 10 لتحصل على 34.5."),
      t("Build 6.5, then press × 10 to make 65.", "كوّن 6.5 ثم اضغط × 10 لتحصل على 65.")].map(H.tx), done);
    var NM = [[t("Hundreds", "المئات"), "100"], [t("Tens", "العشرات"), "10"], [t("Ones", "الآحاد"), "1"], [t("Tenths", "أجزاء من عشرة"), "0.1"], [t("Hundredths", "أجزاء من مائة"), "0.01"], [t("Thousandths", "أجزاء من ألف"), "0.001"]];
    var d = [0, 0, 0, 0, 0, 0], sh = 0, drag = -1;
    function val() { var v = 0; for (var i = 0; i < 6; i++) v += d[i] * Math.pow(10, 5 - i); return v; }
    function str(v) { return (v / 1000).toFixed(3).replace(/0+$/, "").replace(/\.$/, ""); }
    function upd(op, prev) {
      var v = val(), terms = [];
      for (var i = 0; i < 6; i++) if (d[i]) terms.push(fm(d[i] * Math.pow(10, 2 - i), 3));
      mo.innerHTML = "<span>" + t("Number: ", "العدد: ") + "<b>" + eq(H.loc(H.grp(str(v)))) + "</b></span><span>" + t("Expanded form: ", "الصورة الممتدة: ") + eq(terms.length ? terms.join(" + ") : H.loc("0")) + "</span>" +
        (v ? "<span>" + t("= ", "= ") + eq(fm(v, 0)) + " " + t("thousandths", "جزءًا من ألف") + "</span>" : "");
      if (v === 875) tick(0);
      if (v === 12420) tick(1);
      if (op === "d" && prev === 345000 && v === 34500) tick(2);
      if (op === "m" && prev === 6500 && v === 65000) tick(3);
    }
    ctl.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        var a = b.dataset.a, prev = val();
        if (a === "z") { d = [0, 0, 0, 0, 0, 0]; upd(); return; }
        if (a === "m") { if (d[0]) { E.toast(t("This chart stops at the hundreds.", "هذا الجدول يتوقف عند المئات.")); return; } d = d.slice(1).concat([0]); sh = 1; }
        if (a === "d") { if (d[5]) { E.toast(t("This chart stops at the thousandths.", "هذا الجدول يتوقف عند أجزاء من ألف.")); return; } d = [0].concat(d.slice(0, 5)); sh = -1; }
        upd(a, prev);
      };
    });
    function geo() { var W = S.W, Hh = S.H, gap = 16, cw = (W - 24 - gap) / 6; return { cw: cw, gap: gap, x0: 12, yt: 64, yb: Hh - 46 }; }
    function colX(o, i) { return o.x0 + i * o.cw + (i >= 3 ? o.gap : 0); }
    function setFrom(p) { var o = geo(), ch = (o.yb - o.yt) / 9; d[drag] = Math.max(0, Math.min(9, Math.ceil((o.yb - p.y) / ch))); upd(); }
    S.drag({
      down: function (p) { var o = geo(); for (var i = 0; i < 6; i++) { var x = colX(o, i); if (p.x >= x && p.x <= x + o.cw && p.y > o.yt - 20) { drag = i; setFrom(p); return true; } } return false; },
      move: function (p) { if (drag >= 0) setFrom(p); },
      up: function () { drag = -1; },
      hover: function (p) { return p.y > geo().yt - 20; }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, o = geo(), W = S.W, ch = (o.yb - o.yt) / 9, i, k;
      c.clearRect(0, 0, W, S.H); H.ltr(c);
      sh += (0 - sh) * Math.min(1, dt * 7); if (Math.abs(sh) < 0.01) sh = 0;
      for (i = 0; i < 6; i++) {
        var x = colX(o, i);
        K.rr(c, x + 2, 6, o.cw - 4, 40, 8); c.fillStyle = PVC[i]; c.globalAlpha = 0.18; c.fill(); c.globalAlpha = 1;
        if (o.cw >= 70) { K.txt(c, NM[i][0], x + o.cw / 2, 18, { s: Math.min(12, o.cw / 7.5), c: C.ink }); K.txt(c, H.loc(NM[i][1]), x + o.cw / 2, 36, { s: 11, c: C.muted, w: 700 }); }
        else K.txt(c, H.loc(NM[i][1]), x + o.cw / 2, 26, { s: Math.min(13, o.cw / 3.6), c: C.ink, w: 900 });
        c.strokeStyle = C.line; c.lineWidth = 1; c.strokeRect(x + 2, o.yt - 4, o.cw - 4, o.yb - o.yt + 4);
      }
      var dx = sh * o.cw;
      for (i = 0; i < 6; i++) {
        var xx = colX(o, i) + dx, bw = Math.min(o.cw - 14, 60) * (1 - i * 0.08);
        for (k = 0; k < d[i]; k++) { K.rr(c, xx + o.cw / 2 - bw / 2, o.yb - (k + 1) * ch + 2, bw, ch - 4, 4); c.fillStyle = PVC[i]; c.fill(); }
        K.txt(c, H.loc(String(d[i])), xx + o.cw / 2, o.yb + 24, { s: 26, c: d[i] ? PVC[i] : C.muted, w: 900 });
      }
      K.dot(c, o.x0 + 3 * o.cw + o.gap / 2, o.yb + 30, 4.5, C.ink);
    });
  };

  /* =========================================================
     mp5_line - zooming number line: compare and round decimals
     ========================================================= */
  L.mp5_line = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag point A (orange) and point B (blue). Zoom in to reach hundredths and thousandths, pick a rounding place and watch A round.", "اسحب النقطة A (البرتقالية) والنقطة B (الزرقاء)، وكبّر لتصل إلى أجزاء من مائة ومن ألف، واختر خانة التقريب وشاهد تقريب A.")) + '<div class="seg" id="rnd"></div>';
    var S = K.make(host, 0.5, 330);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm" data-a="in">🔍+ ' + t("Zoom in", "تكبير") + '</button><button type="button" class="btn sm" data-a="out">🔍− ' + t("Zoom out", "تصغير") + '</button><button type="button" class="btn sm ghost" data-a="l">◀</button><button type="button" class="btn sm ghost" data-a="r">▶</button></div>');
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Put A at 3.54 and round it to the nearest Tenth.", "ضع A عند 3.54 وقرّبها لأقرب جزء من عشرة."),
      t("Put A at 1.277 and round it to the nearest Hundredth.", "ضع A عند 1.277 وقرّبها لأقرب جزء من مائة."),
      t("Make B greater than A even though B has fewer decimal digits.", "اجعل B أكبر من A مع أن عدد أرقام B العشرية أقل."),
      t("Round the lake area 50.90 km² to the nearest whole number (put A at 50.9).", "قرّب مساحة البحيرة 50.90 كم² لأقرب عدد صحيح (ضع A عند 50.9).")].map(H.tx), done);
    var SP = [10000, 1000, 100], lv = 0, lo = 0, A = 2300, B = 1700, rnd = "tenth", drag = null;
    var RU = { whole: 1000, tenth: 100, hund: 10 };
    K.seg(host, "#rnd", [["whole", t("Nearest whole", "لأقرب عدد صحيح")], ["tenth", t("Nearest Tenth", "لأقرب جزء من عشرة")], ["hund", t("Nearest Hundredth", "لأقرب جزء من مائة")]], rnd, function (v) { rnd = v; upd(); });
    function digs(v) { return v % 1000 === 0 ? 0 : v % 100 === 0 ? 1 : v % 10 === 0 ? 2 : 3; }
    function s3(v) { return fm(v / 1000, 3); }
    function rounded(v) { var u = RU[rnd], dn = Math.floor(v / u) * u; return v - dn >= u / 2 ? dn + u : dn; }
    function rs(v) { var u = RU[rnd]; return fx(rounded(v) / 1000, u === 1000 ? 0 : u === 100 ? 1 : 2); }
    function upd() {
      var sym = A > B ? ">" : A < B ? "<" : "=";
      mo.innerHTML = "<span>" + eq("A = " + s3(A)) + " " + eq(sym) + " " + eq("B = " + s3(B)) + "</span><span>" + t("Rounded: ", "بالتقريب: ") + eq("A ≈ " + rs(A)) + "</span>" +
        "<span class='sub'>" + t("Decimal digits: A has ", "الأرقام العشرية: لـ A ") + H.loc(digs(A)) + t(", B has ", "، ولـ B ") + H.loc(digs(B)) + "</span>";
      if (rnd === "tenth" && A === 3540) tick(0);
      if (rnd === "hund" && A === 1277) tick(1);
      if (B > A && digs(B) < digs(A)) tick(2);
      if (rnd === "whole" && A === 50900) tick(3);
    }
    function clampLo() { lo = Math.max(0, Math.min(100000 - SP[lv], lo)); }
    ctl.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        var a = b.dataset.a;
        if (a === "in" && lv < 2) { lv++; lo = Math.floor(A / SP[lv]) * SP[lv]; }
        if (a === "out" && lv > 0) { lv--; lo = Math.floor(A / SP[lv]) * SP[lv]; }
        if (a === "l") lo -= SP[lv];
        if (a === "r") lo += SP[lv];
        clampLo(); upd();
      };
    });
    function g() { return { x0: 30, x1: S.W - 30, y: S.H * 0.56 }; }
    function vx(v) { var o = g(); return o.x0 + (v - lo) / SP[lv] * (o.x1 - o.x0); }
    function mx(v) { var o = g(); return Math.max(o.x0 - 14, Math.min(o.x1 + 14, vx(v))); }
    function setV(p) {
      var o = g(), sn = SP[lv] / 100, v = lo + Math.round(((p.x - o.x0) / (o.x1 - o.x0)) * SP[lv] / sn) * sn;
      v = Math.max(lo, Math.min(lo + SP[lv], v));
      if (drag === "A") A = v; else B = v;
      upd();
    }
    S.drag({
      down: function (p) { var o = g(); var da = Math.abs(p.x - mx(A)) + (p.y > o.y + 6 ? 30 : 0), db = Math.abs(p.x - mx(B)) + (p.y < o.y - 6 ? 30 : 0); if (Math.min(da, db) > 34) return false; drag = da <= db ? "A" : "B"; setV(p); return true; },
      move: function (p) { if (drag) setV(p); },
      up: function () { drag = null; },
      hover: function (p) { return Math.abs(p.x - mx(A)) < 30 || Math.abs(p.x - mx(B)) < 30; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = g(), W = S.W, sp = SP[lv], i;
      c.clearRect(0, 0, W, S.H); H.ltr(c);
      var dpM = [0, 1, 2][lv];
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(o.x0 - 10, o.y); c.lineTo(o.x1 + 10, o.y); c.stroke();
      for (i = 0; i <= 100; i++) {
        var x = o.x0 + i / 100 * (o.x1 - o.x0), maj = i % 10 === 0, mid = i % 5 === 0;
        if (!maj && (o.x1 - o.x0) / 100 < 3.5) continue;
        c.strokeStyle = maj ? C.ink : C.muted; c.lineWidth = maj ? 2 : 1; c.beginPath(); c.moveTo(x, o.y - (maj ? 10 : mid ? 6 : 3)); c.lineTo(x, o.y + (maj ? 10 : mid ? 6 : 3)); c.stroke();
        if (maj && ((o.x1 - o.x0) > 420 || i % 20 === 0)) K.txt(c, fx((lo + i / 100 * sp) / 1000, dpM), x, o.y + 24, { s: W < 500 ? 10 : 12, c: C.ink, w: 700 });
      }
      // rounding helper for A
      var u = RU[rnd], dn = Math.floor(A / u) * u, up = dn + u, md = dn + u / 2;
      if (vx(dn) >= o.x0 - 1 && vx(up) <= o.x1 + 1 && (vx(up) - vx(dn)) > 18) {
        c.fillStyle = "rgba(249,115,22,.12)"; c.fillRect(vx(dn), o.y - 44, vx(up) - vx(dn), 34);
        c.setLineDash([4, 4]); c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(vx(md), o.y - 46); c.lineTo(vx(md), o.y); c.stroke(); c.setLineDash([]);
        K.txt(c, t("midpoint ", "المنتصف ") + fm(md / 1000, 4), vx(md), o.y - 54, { s: 10, c: "#f97316" });
        var rv = rounded(A); K.dot(c, vx(rv), o.y, 6, "#f97316");
      }
      function mark(v, col, above, name) {
        var x = mx(v), off = vx(v) < o.x0 - 1 || vx(v) > o.x1 + 1, y = above ? o.y - 12 : o.y + 12, s = above ? -1 : 1;
        c.fillStyle = col; c.beginPath(); c.moveTo(x, y); c.lineTo(x - 9, y + s * 16); c.lineTo(x + 9, y + s * 16); c.closePath(); c.fill();
        K.txt(c, name + " " + (off ? (vx(v) < o.x0 ? "◀ " : "▶ ") : "") + s3(v), Math.max(40, Math.min(W - 40, x)), y + s * 28, { s: 13, c: col });
      }
      mark(A, "#f97316", true, "A"); mark(B, "#3b82f6", false, "B");
      var sym = A > B ? ">" : A < B ? "<" : "=";
      K.txt(c, "A " + sym + " B", W / 2, 20, { s: 18, c: C.ink, w: 900 });
      K.txt(c, [t("zoom: ones", "التكبير: آحاد"), t("zoom: tenths", "التكبير: أجزاء من عشرة"), t("zoom: hundredths", "التكبير: أجزاء من مائة")][lv], W - 12, 20, { s: 11, c: C.muted, a: "right" });
    });
  };

  /* hundredths-grid helper used by the add / subtract labs */
  function grid(c, x, y, s, n, colOf, C, xs) {
    var cs = s / 10, k;
    for (k = 0; k < 100; k++) {
      var col = Math.floor(k / 10), row = k % 10, f = colOf(k);
      c.fillStyle = f || C.card; c.fillRect(x + col * cs + 0.5, y + row * cs + 0.5, cs - 1, cs - 1);
      if (xs && xs(k)) { c.strokeStyle = "#7f1d1d"; c.lineWidth = 1.5; c.beginPath(); c.moveTo(x + col * cs + 2, y + row * cs + 2); c.lineTo(x + col * cs + cs - 2, y + row * cs + cs - 2); c.moveTo(x + col * cs + cs - 2, y + row * cs + 2); c.lineTo(x + col * cs + 2, y + row * cs + cs - 2); c.stroke(); }
    }
    c.strokeStyle = C.ink; c.lineWidth = 1.5; c.strokeRect(x, y, s, s);
    for (k = 1; k < 10; k++) { c.strokeStyle = C.line; c.lineWidth = 0.6; c.beginPath(); c.moveTo(x + k * cs, y); c.lineTo(x + k * cs, y + s); c.stroke(); }
  }
  function cellAt(p, x, y, s) { if (p.x < x) return 0; var cs = s / 10, col = Math.max(0, Math.min(9, Math.floor((p.x - x) / cs))), row = Math.max(0, Math.min(9, Math.floor((p.y - y) / cs))); if (p.x > x + s) return 100; return col * 10 + row + 1; }

  /* =========================================================
     mp5_addgrid - model decimal addition on hundredths grids
     ========================================================= */
  L.mp5_addgrid = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag across grid A (yellow) and grid B (green) to shade each addend. The result grids add them, spilling into a new whole when 100 squares fill up.", "اسحب على الشبكة A (الصفراء) والشبكة B (الخضراء) لتظليل العددين، وتجمعهما شبكتا الناتج، وتنتقل المربعات إلى واحد صحيح جديد عندما تمتلئ 100 مربع."));
    var S = H.mk(host, 0.82, 520, 1.25);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Model 0.13 + 0.23.", "مثّل 0.13 + 0.23."), t("Model 0.97 + 0.42 and see the sum spill into a second whole.", "مثّل 0.97 + 0.42 وشاهد الناتج ينتقل إلى واحد صحيح ثانٍ."), t("Choose two decimals whose sum is exactly 1 whole.", "اختر عددين عشريين مجموعهما واحد صحيح تمامًا.")].map(H.tx), done);
    var a = 0, b = 0, drag = null, YEL = "#facc15", GRN = "#22c55e";
    function geo() { var W = S.W, Hh = S.H, s = Math.min((W - 70) / 2, (Hh - 80) / 2), x1 = (W - 2 * s - 40) / 2; return { s: s, xa: x1, xb: x1 + s + 40, y1: 22, y2: 22 + s + 36 }; }
    function upd() {
      var sum = a + b;
      mo.innerHTML = "<span>" + eq(fx(a / 100, 2) + " + " + fx(b / 100, 2) + " = " + fx(sum / 100, 2)) + "</span><span>" + t("Estimate (round to ones): ", "التقدير (لأقرب واحد صحيح): ") + eq(fm(Math.round(a / 100)) + " + " + fm(Math.round(b / 100)) + " = " + fm(Math.round(a / 100) + Math.round(b / 100))) + "</span>" +
        (sum >= 100 ? "<span class='sub'>" + t("100 hundredths = 1 whole, so the sum has ", "100 جزء من مائة = واحد صحيح، إذن في الناتج ") + H.loc(Math.floor(sum / 100)) + t(" whole and ", " واحد صحيح و") + H.loc(sum % 100) + t(" hundredths.", " جزءًا من مائة.") + "</span>" : "");
      if ((a === 13 && b === 23) || (a === 23 && b === 13)) tick(0);
      if ((a === 97 && b === 42) || (a === 42 && b === 97)) tick(1);
      if (a > 0 && b > 0 && sum === 100) tick(2);
    }
    function set(p) { var o = geo(); if (drag === "a") a = cellAt(p, o.xa, o.y1, o.s); else b = cellAt(p, o.xb, o.y1, o.s); upd(); }
    S.drag({
      down: function (p) { var o = geo(); if (p.y < o.y1 - 10 || p.y > o.y1 + o.s + 10) return false; if (p.x < o.xa + o.s + 20) drag = "a"; else drag = "b"; set(p); return true; },
      move: function (p) { if (drag) set(p); }, up: function () { drag = null; },
      hover: function (p) { var o = geo(); return p.y > o.y1 && p.y < o.y1 + o.s; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = geo(), W = S.W;
      c.clearRect(0, 0, W, S.H); H.ltr(c);
      K.txt(c, "A = " + fx(a / 100, 2), o.xa + o.s / 2, 10, { s: 12, c: C.ink });
      K.txt(c, "B = " + fx(b / 100, 2), o.xb + o.s / 2, 10, { s: 12, c: C.ink });
      grid(c, o.xa, o.y1, o.s, a, function (k) { return k < a ? YEL : null; }, C);
      grid(c, o.xb, o.y1, o.s, b, function (k) { return k < b ? GRN : null; }, C);
      K.txt(c, "+", W / 2, o.y1 + o.s / 2, { s: 26, c: C.ink, w: 900 });
      K.txt(c, "= " + fx((a + b) / 100, 2), W / 2, o.y2 - 14, { s: 15, c: C.ink, w: 900 });
      for (var gI = 0; gI < 2; gI++) {
        var base = gI * 100;
        grid(c, gI ? o.xb : o.xa, o.y2, o.s, 0, function (k) { var q = base + k; return q < a ? YEL : q < a + b ? GRN : null; }, C);
      }
    });
  };

  /* =========================================================
     mp5_subgrid - model decimal subtraction: shade, then cross out
     ========================================================= */
  L.mp5_subgrid = function (host, cfg, done) {
    host.innerHTML = hint(t("Mode 1: drag to shade the minuend. Mode 2: drag to cross out the subtrahend. The squares still shaded are the difference.", "الوضع 1: اسحب لتظليل المطروح منه، والوضع 2: اسحب لشطب المطروح، والمربعات المظللة الباقية هي الفرق.")) + '<div class="seg" id="sgm"></div>';
    var S = K.make(host, 0.55, 360);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Model 0.39 − 0.13.", "مثّل 0.39 − 0.13."), t("Model 0.2 − 0.05.", "مثّل 0.2 − 0.05."), t("Model 1.23 − 1.02 (use both grids).", "مثّل 1.23 − 1.02 (استخدم الشبكتين).")].map(H.tx), done);
    var m = 0, x = 0, mode = "s", drag = false;
    K.seg(host, "#sgm", [["s", "🟦 " + t("Shade the minuend", "ظلل المطروح منه")], ["x", "✖ " + t("Cross out the subtrahend", "اشطب المطروح")]], mode, function (v) { mode = v; });
    function geo() { var W = S.W, Hh = S.H, s = Math.min((W - 60) / 2, Hh - 60), x1 = (W - 2 * s - 30) / 2; return { s: s, x: [x1, x1 + s + 30], y: 32 }; }
    function upd() {
      mo.innerHTML = "<span>" + eq(fx(m / 100, 2) + " − " + fx(x / 100, 2) + " = " + fx((m - x) / 100, 2)) + "</span><span class='sub'>" + t("Shaded ", "مظلل ") + H.loc(m) + t(", crossed out ", "، مشطوب ") + H.loc(x) + t(", left ", "، الباقي ") + H.loc(m - x) + t(" hundredths", " جزءًا من مائة") + "</span>";
      if (m === 39 && x === 13) tick(0);
      if (m === 20 && x === 5) tick(1);
      if (m === 123 && x === 102) tick(2);
    }
    function idx(p) { var o = geo(); if (p.x < o.x[1] - 15) return cellAt(p, o.x[0], o.y, o.s); var k = cellAt(p, o.x[1], o.y, o.s); return k === 0 ? 100 : 100 + k; }
    function set(p) { var k = idx(p); if (mode === "s") { m = k; x = Math.min(x, m); } else x = Math.min(m, k); upd(); }
    S.drag({ down: function (p) { var o = geo(); if (p.y < o.y - 10 || p.y > o.y + o.s + 10) return false; drag = true; set(p); return true; }, move: function (p) { if (drag) set(p); }, up: function () { drag = false; },
      hover: function (p) { var o = geo(); return p.y > o.y && p.y < o.y + o.s; } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = geo();
      c.clearRect(0, 0, S.W, S.H); H.ltr(c);
      for (var gI = 0; gI < 2; gI++) {
        var base = gI * 100;
        K.txt(c, t("Whole ", "الواحد ") + H.loc(gI + 1), o.x[gI] + o.s / 2, 14, { s: 12, c: C.muted });
        grid(c, o.x[gI], o.y, o.s, 0, function (k) { return base + k < m ? (base + k < x ? "rgba(96,165,250,.35)" : "#3b82f6") : null; }, C, function (k) { return base + k < x; });
      }
    });
  };

  /* =========================================================
     mp5_balance - balance scale: find the variable
     ========================================================= */
  L.mp5_balance = function (host, cfg, done) {
    var EQS = [{ k: 823, t: 1024, kt: "8.23", v: "p" }, { k: 18000, t: 27500, kt: "180", v: "x" }, { k: 1174, t: 1500, kt: "5.24 + 6.50", v: "x" }];
    var CV = [10000, 1000, 100, 10, 1], CL = ["100", "10", "1", "0.1", "0.01"], CC = ["#8b5cf6", "#3b82f6", "#22c55e", "#f59e0b", "#ef4444"];
    host.innerHTML = hint(t("Drag weights (or tap them) into the mystery box on the left pan until the scale balances. Tap a weight inside the box to take it out.", "اسحب الأوزان (أو اضغط عليها) إلى الصندوق الغامض على الكفة اليسرى حتى يتزن الميزان، واضغط على وزن داخل الصندوق لتخرجه.")) + '<div class="seg" id="beq"></div>';
    var S = H.mk(host, 0.68, 420, 1.1);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" id="bz">↺ ' + t("Empty the box", "أفرغ الصندوق") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Solve 8.23 + p = 10.24.", "حل 8.23 + p = 10.24."), t("Solve 180 + x = 275 (the two gulfs of Sinai).", "حل 180 + x = 275 (خليجا سيناء)."), t("Ezz ran 5.24 km and 6.50 km. Solve 5.24 + 6.50 + x = 15.", "جرى عز 5.24 كم و6.50 كم. حل 5.24 + 6.50 + x = 15.")].map(H.tx), done);
    var ei = 0, cnt = [0, 0, 0, 0, 0], ang = 0, drag = null, boxR = [];
    function eqTxt(i) { var q = EQS[i]; return H.loc(q.kt + " + " + q.v + " = " + fm(q.t / 100, 2)); }
    K.seg(host, "#beq", EQS.map(function (q, i) { return [String(i), '<span dir="ltr">' + eqTxt(i) + "</span>"]; }), "0", function (v) { ei = +v; cnt = [0, 0, 0, 0, 0]; upd(); });
    ctl.querySelector("#bz").onclick = function () { cnt = [0, 0, 0, 0, 0]; upd(); };
    function xv() { var s = 0; for (var i = 0; i < 5; i++) s += cnt[i] * CV[i]; return s; }
    function upd() {
      var q = EQS[ei], x = xv(), tot = q.k + x;
      var st = tot === q.t ? "<b class='ok-t'>⚖️ " + t("Balanced! ", "متزن! ") + eq(q.v + " = " + fm(x / 100, 2)) + "</b>" : tot > q.t ? "<b class='no-t'>" + t("Left side too heavy: take some out.", "الكفة اليسرى أثقل: أخرج بعض الأوزان.") + "</b>" : "<span class='sub'>" + t("Left side too light: add more.", "الكفة اليسرى أخف: أضف أوزانًا.") + "</span>";
      mo.innerHTML = "<span>" + eq(H.loc(q.kt) + " + " + fm(x / 100, 2) + (tot === q.t ? " = " : tot > q.t ? " > " : " < ") + fm(q.t / 100, 2)) + "</span>" + st +
        (tot === q.t ? "<span class='sub'>" + t("Same as ", "وهو نفسه ") + eq(fm(q.t / 100, 2) + " − " + (q.kt.indexOf("+") >= 0 ? "(" + H.loc(q.kt) + ")" : H.loc(q.kt)) + " = " + fm(x / 100, 2)) + "</span>" : "");
      if (tot === q.t) tick(ei);
    }
    function geo() { var W = S.W, Hh = S.H, cx = W / 2, cy = Hh * 0.2, bl = Math.min(W * 0.36, 250); return { cx: cx, cy: cy, bl: bl, ty: Hh - 34, tr: Math.min(24, W / 18) }; }
    function trayXY(o, i) { return { x: o.cx + (i - 2) * (o.tr * 2.6), y: o.ty }; }
    function add(i) { if (xv() + CV[i] > 99999) return; cnt[i]++; upd(); }
    S.drag({
      down: function (p) {
        var o = geo(), i;
        for (i = 0; i < 5; i++) { var q = trayXY(o, i); if (Math.hypot(p.x - q.x, p.y - q.y) < o.tr + 4) { drag = { i: i, x: p.x, y: p.y, sx: p.x, sy: p.y }; return true; } }
        for (i = 0; i < boxR.length; i++) if (inR(p, boxR[i])) { if (cnt[boxR[i].i] > 0) { cnt[boxR[i].i]--; upd(); } return true; }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () { if (!drag) return; var o = geo(), tap = Math.hypot(drag.x - drag.sx, drag.y - drag.sy) < 6; if (tap || (drag.x < o.cx && drag.y < o.ty - 40)) add(drag.i); drag = null; },
      hover: function (p) { var o = geo(); for (var i = 0; i < 5; i++) { var q = trayXY(o, i); if (Math.hypot(p.x - q.x, p.y - q.y) < o.tr + 4) return true; } return boxR.some(function (r) { return inR(p, r); }); }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, o = geo(), W = S.W, q = EQS[ei], x = xv(), diff = q.k + x - q.t;
      c.clearRect(0, 0, W, S.H); H.ltr(c);
      var target = Math.max(-0.32, Math.min(0.32, diff / Math.max(q.t, 1) * 2.5));
      if (diff !== 0 && Math.abs(target) < 0.04) target = diff > 0 ? 0.04 : -0.04;
      ang += (target - ang) * Math.min(1, dt * 5);
      var lx = o.cx - o.bl * Math.cos(ang), ly = o.cy + o.bl * Math.sin(ang), rx = o.cx + o.bl * Math.cos(ang), ry = o.cy - o.bl * Math.sin(ang);
      c.fillStyle = C.muted; c.beginPath(); c.moveTo(o.cx, o.cy); c.lineTo(o.cx - 26, o.cy + ph + 60); c.lineTo(o.cx + 26, o.cy + ph + 60); c.closePath(); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 5; c.beginPath(); c.moveTo(lx, ly); c.lineTo(rx, ry); c.stroke(); K.dot(c, o.cx, o.cy, 7, diff === 0 ? "#22c55e" : C.ink);
      var pw = Math.min(150, o.bl * 0.9), ph = Math.min(120, S.H * 0.3);
      [[lx, ly], [rx, ry]].forEach(function (e) {
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(e[0], e[1]); c.lineTo(e[0] - pw / 2, e[1] + ph); c.moveTo(e[0], e[1]); c.lineTo(e[0] + pw / 2, e[1] + ph); c.stroke();
        c.strokeStyle = C.ink; c.lineWidth = 3; c.beginPath(); c.moveTo(e[0] - pw / 2 - 6, e[1] + ph); c.lineTo(e[0] + pw / 2 + 6, e[1] + ph); c.stroke();
      });
      // left pan: known block + mystery box
      var by = ly + ph, kw = Math.min(64, pw * 0.42);
      K.rr(c, lx - pw / 2, by - 34, kw, 32, 6); c.fillStyle = "#94a3b8"; c.fill(); K.txt(c, H.loc(q.kt.replace(" + ", "+")), lx - pw / 2 + kw / 2, by - 18, { s: kw < 60 ? 10 : 12, c: "#0f172a" });
      var bxw = pw - kw - 4, bx0 = lx - pw / 2 + kw + 4;
      K.rr(c, bx0, by - 58, bxw, 56, 8); c.fillStyle = "rgba(250,204,21,.25)"; c.fill(); c.strokeStyle = "#ca8a04"; c.lineWidth = 2; c.stroke();
      K.txt(c, q.v + " = " + fm(x / 100, 2), bx0 + bxw / 2, by + 16, { s: 13, c: "#ca8a04" });
      boxR = []; var gx = bx0 + 4, gy = by - 52;
      for (var i = 0; i < 5; i++) if (cnt[i]) {
        var r = { x: gx, y: gy, w: 30, h: 22, i: i };
        if (gx + 30 > bx0 + bxw) { gx = bx0 + 4; gy += 25; r.x = gx; r.y = gy; }
        K.rr(c, r.x, r.y, r.w, r.h, 11); c.fillStyle = CC[i]; c.fill(); K.txt(c, "×" + H.loc(cnt[i]), r.x + 15, r.y + 11, { s: 10, c: "#fff" });
        boxR.push(r); gx += 33;
      }
      // right pan: total
      K.rr(c, rx - 36, ry + ph - 34, 72, 32, 6); c.fillStyle = "#64748b"; c.fill(); K.txt(c, fm(q.t / 100, 2), rx, ry + ph - 18, { s: 13, c: "#fff" });
      // tray
      for (i = 0; i < 5; i++) { var tp = trayXY(o, i); K.dot(c, tp.x, tp.y, o.tr, CC[i], "rgba(0,0,0,.25)"); K.txt(c, H.loc(CL[i]), tp.x, tp.y, { s: Math.min(13, o.tr * 0.6), c: "#fff" }); }
      if (drag) { K.dot(c, drag.x, drag.y, o.tr, CC[drag.i]); K.txt(c, H.loc(CL[drag.i]), drag.x, drag.y, { s: 12, c: "#fff" }); }
    });
  };

  /* =========================================================
     mp5_tree - factor trees and the G.C.F
     ========================================================= */
  L.mp5_tree = function (host, cfg, done) {
    var PAIRS = [[42, 28], [16, 12], [24, 30]];
    host.innerHTML = hint(t("Tap an orange (composite) number to split it into a factor pair. Tap a split number again to try another pair. Green circles are primes.", "اضغط على عدد برتقالي (غير أولي) لتحلله إلى زوج عوامل، واضغط عليه مرة أخرى لتجرب زوجًا آخر، والدوائر الخضراء أعداد أولية.")) + '<div class="seg" id="tps"></div>';
    var S = H.mk(host, 0.85, 470, 1.5);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Finish the factor tree of 42.", "أكمل شجرة عوامل العدد 42."), t("Find the G.C.F of 42 and 28.", "أوجد ع.م.أ للعددين 42 و28."), t("Bus tickets: find the G.C.F of 16 and 12.", "تذاكر الحافلة: أوجد ع.م.أ للعددين 16 و12.")].map(H.tx), done);
    var pi = 0, T = [];
    function isP(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
    function fp(v) { var r = []; for (var f = 2; f * f <= v; f++) if (v % f === 0) r.push([f, v / f]); return r; }
    function node(v) { return { v: v, k: null, pi: -1 }; }
    function reset() { T = [node(PAIRS[pi][0]), node(PAIRS[pi][1])]; upd(); }
    K.seg(host, "#tps", PAIRS.map(function (p, i) { return [String(i), H.loc(p[0] + " & " + p[1])]; }), "0", function (v) { pi = +v; reset(); });
    function leaves(n, a) { a = a || []; if (!n.k) a.push(n.v); else { leaves(n.k[0], a); leaves(n.k[1], a); } return a; }
    function complete(n) { return leaves(n).every(isP); }
    function common(a, b) { var bb = b.slice(), r = []; a.forEach(function (x) { var j = bb.indexOf(x); if (j >= 0) { r.push(x); bb.splice(j, 1); } }); return r; }
    function prodS(a) { return a.length ? a.map(function (x) { return H.loc(x); }).join(" × ") : H.loc(1); }
    function upd() {
      var h = "";
      T.forEach(function (tr) { var lv = leaves(tr).sort(function (a, b) { return a - b; }); h += "<span>" + eq(H.loc(tr.v) + " = " + prodS(lv)) + (complete(tr) ? " ✔" : " · " + t("keep splitting", "واصل التحليل")) + "</span>"; });
      if (complete(T[0]) && complete(T[1])) {
        var cm = common(leaves(T[0]).sort(function (a, b) { return a - b; }), leaves(T[1]).sort(function (a, b) { return a - b; })), g = cm.reduce(function (a, b) { return a * b; }, 1);
        h += "<b class='ok-t'>" + t("Common primes: ", "العوامل الأولية المشتركة: ") + eq(prodS(cm)) + " → " + eq(t("G.C.F", "ع.م.أ") + " = " + H.loc(g)) + "</b>";
        if (pi === 0) tick(1);
        if (pi === 1) tick(2);
      }
      if (pi === 0 && complete(T[0])) tick(0);
      mo.innerHTML = h;
    }
    function hit(n, p) { if (Math.hypot(p.x - n.x, p.y - n.y) < 20) return n; if (n.k) return hit(n.k[0], p) || hit(n.k[1], p); return null; }
    S.drag({
      down: function (p) {
        layAll();
        for (var i = 0; i < 2; i++) {
          var n = hit(T[i], p);
          if (n) {
            if (isP(n.v)) { E.toast(H.loc(n.v) + t(" is prime: it cannot be split.", " عدد أولي ولا يمكن تحليله.")); return true; }
            var ps = fp(n.v); n.pi = (n.pi + 1) % ps.length; n.k = [node(ps[n.pi][0]), node(ps[n.pi][1])]; upd(); return true;
          }
        }
        return false;
      },
      hover: function (p) { layAll(); return !!(hit(T[0], p) || hit(T[1], p)); }
    });
    function lc(n) { return n.k ? lc(n.k[0]) + lc(n.k[1]) : 1; }
    function layAll() { var lh = Math.min(58, (S.H - 190) / 4); lay(T[0], 10, S.W / 2 - 10, 0, 30, lh); lay(T[1], S.W / 2 + 10, S.W - 10, 0, 30, lh); }
    function lay(n, xa, xb, dpt, top, lh) { n.x = (xa + xb) / 2; n.y = top + dpt * lh; if (n.k) { var a = lc(n.k[0]), b = lc(n.k[1]), xm = xa + (xb - xa) * a / (a + b); lay(n.k[0], xa, xm, dpt + 1, top, lh); lay(n.k[1], xm, xb, dpt + 1, top, lh); } }
    function draw(c, n, C) {
      if (n.k) n.k.forEach(function (k) { c.strokeStyle = C.muted; c.lineWidth = 2; c.beginPath(); c.moveTo(n.x, n.y + 14); c.lineTo(k.x, k.y - 14); c.stroke(); draw(c, k, C); });
      if (isP(n.v)) { K.dot(c, n.x, n.y, 17, "#22c55e", "rgba(0,0,0,.2)"); K.txt(c, H.loc(n.v), n.x, n.y, { s: 14, c: "#fff" }); }
      else { K.rr(c, n.x - 19, n.y - 16, 38, 32, 7); c.fillStyle = n.k ? "#fdba74" : "#f97316"; c.fill(); K.txt(c, H.loc(n.v), n.x, n.y, { s: 14, c: "#0f172a" }); }
    }
    reset();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, lh = Math.min(58, (Hh - 190) / 4);
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      layAll();
      c.strokeStyle = C.line; c.setLineDash([4, 6]); c.beginPath(); c.moveTo(W / 2, 10); c.lineTo(W / 2, Hh - 150); c.stroke(); c.setLineDash([]);
      draw(c, T[0], C); draw(c, T[1], C);
      var vy = Hh - 70, rr = Math.min(68, W * 0.15), ox = rr * 0.62;
      c.globalAlpha = 0.18; K.dot(c, W / 2 - ox, vy, rr, "#3b82f6"); K.dot(c, W / 2 + ox, vy, rr, "#f97316"); c.globalAlpha = 1;
      c.strokeStyle = "#3b82f6"; c.lineWidth = 2; c.beginPath(); c.arc(W / 2 - ox, vy, rr, 0, 7); c.stroke(); c.strokeStyle = "#f97316"; c.beginPath(); c.arc(W / 2 + ox, vy, rr, 0, 7); c.stroke();
      K.txt(c, H.loc(T[0].v), W / 2 - ox - rr * 0.55, vy - rr - 8, { s: 12, c: "#3b82f6" }); K.txt(c, H.loc(T[1].v), W / 2 + ox + rr * 0.55, vy - rr - 8, { s: 12, c: "#f97316" });
      if (complete(T[0]) && complete(T[1])) {
        var la = leaves(T[0]).sort(function (a, b) { return a - b; }), lb = leaves(T[1]).sort(function (a, b) { return a - b; }), cm = common(la, lb);
        var oa = la.slice(), ob = lb.slice(); cm.forEach(function (x) { oa.splice(oa.indexOf(x), 1); ob.splice(ob.indexOf(x), 1); });
        K.txt(c, oa.map(String).map(H.loc).join(" ") || "–", W / 2 - ox - rr * 0.5, vy, { s: 13, c: C.ink });
        K.txt(c, ob.map(String).map(H.loc).join(" ") || "–", W / 2 + ox + rr * 0.5, vy, { s: 13, c: C.ink });
        K.txt(c, cm.map(String).map(H.loc).join(" ") || H.loc("1"), W / 2, vy, { s: 14, c: "#16a34a", w: 900 });
      } else K.txt(c, t("finish both trees", "أكمل الشجرتين"), W / 2, vy, { s: 12, c: C.muted });
    });
  };

  /* =========================================================
     mp5_hops - multiples race: two frogs hop to the L.C.M
     ========================================================= */
  L.mp5_hops = function (host, cfg, done) {
    host.innerHTML = hint(t("Set each frog's jump, then tap a frog to hop or press Race. Every landing is a multiple. Where both frogs land first is the L.C.M.", "حدد قفزة كل ضفدع ثم اضغط على الضفدع ليقفز أو اضغط سباق، وكل مكان يهبط فيه مضاعف، وأول مكان يهبط فيه الضفدعان معًا هو م.م.أ."));
    var S = K.make(host, 0.5, 320);
    var ctl = H.ctl(host, '<div class="btn-row"><span class="chip" style="background:#fed7aa;color:#7c2d12">🐸 A</span><button type="button" class="btn sm ghost" data-a="a-">−</button><b id="ha"></b><button type="button" class="btn sm ghost" data-a="a+">+</button>' +
      '<span class="chip" style="background:#bfdbfe;color:#1e3a8a">🐸 B</span><button type="button" class="btn sm ghost" data-a="b-">−</button><b id="hb"></b><button type="button" class="btn sm ghost" data-a="b+">+</button></div>' +
      '<div class="btn-row"><button type="button" class="btn sm" data-a="hop">🦘 ' + t("Hop both", "اقفزا معًا") + '</button><button type="button" class="btn sm primary" data-a="race">🏁 ' + t("Race to meet", "سباق حتى اللقاء") + '</button><button type="button" class="btn sm ghost" data-a="rs">↺</button></div>');
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Find the L.C.M of 6 and 9.", "أوجد م.م.أ للعددين 6 و9."), t("Hend laps every 6 min, Jana every 8 min: when do they meet?", "تكمل هند لفة كل 6 دقائق وجنى كل 8 دقائق: متى تلتقيان؟"),
      t("Find a pair whose L.C.M is the bigger number itself (like kofta packs of 3 and bread packs of 12).", "اعثر على عددين م.م.أ لهما هو العدد الأكبر نفسه (مثل عبوات كفتة من 3 وعيش من 12)."), t("Find a pair whose L.C.M is their product (like 7 and 4).", "اعثر على عددين م.م.أ لهما هو حاصل ضربهما (مثل 7 و4).")].map(H.tx), done);
    var MAXV = 72, a = 6, b = 9, pa = 0, pb = 0, LA = [], LB = [], meet = 0, fa = null, fb = null, race = false, acc = 0;
    function reset() { pa = pb = 0; LA = []; LB = []; meet = 0; fa = fb = null; race = false; ctl.querySelector("#ha").textContent = H.loc(a); ctl.querySelector("#hb").textContent = H.loc(b); upd(); }
    function upd() {
      var g = H.gcd(a, b), l = a * b / g;
      mo.innerHTML = "<span>" + t("Multiples of ", "مضاعفات ") + H.loc(a) + ": " + eq(LA.length ? LA.map(function (v) { return H.loc(v); }).join(", ") : "…") + "</span><span>" + t("Multiples of ", "مضاعفات ") + H.loc(b) + ": " + eq(LB.length ? LB.map(function (v) { return H.loc(v); }).join(", ") : "…") + "</span>" +
        (meet ? "<b class='ok-t'>⭐ " + eq(t("L.C.M", "م.م.أ") + "(" + H.loc(a) + ", " + H.loc(b) + ") = " + H.loc(meet)) + " · " + eq(t("G.C.F", "ع.م.أ") + " = " + H.loc(g)) + "</b>" : (l > MAXV ? "<span class='sub'>" + t("Their L.C.M is beyond this pond (more than 72).", "م.م.أ لهما أبعد من هذه البركة (أكبر من 72).") + "</span>" : ""));
    }
    function hop(w) {
      if (w === "a") { if (pa + a > MAXV || fa) return false; fa = { f: pa, t: pa + a, k: 0 }; pa += a; }
      else { if (pb + b > MAXV || fb) return false; fb = { f: pb, t: pb + b, k: 0 }; pb += b; }
      return true;
    }
    function landed() {
      if (fa && fa.k >= 1) { LA.push(fa.t); fa = null; }
      if (fb && fb.k >= 1) { LB.push(fb.t); fb = null; }
      if (!meet) for (var i = 0; i < LA.length; i++) if (LB.indexOf(LA[i]) >= 0) { meet = LA[i]; E.speak(t("They meet at ", "يلتقيان عند ") + meet);
        var lo = Math.min(a, b), hi = Math.max(a, b);
        if (lo === 6 && hi === 9) tick(0);
        if (lo === 6 && hi === 8) tick(1);
        if (meet === hi && lo !== hi) tick(2);
        if (meet === a * b && lo > 1) tick(3);
        race = false; break; }
      upd();
    }
    ctl.querySelectorAll("button").forEach(function (bt) {
      bt.onclick = function () {
        var x = bt.dataset.a;
        if (x === "a-" && a > 2) { a--; reset(); } if (x === "a+" && a < 12) { a++; reset(); }
        if (x === "b-" && b > 2) { b--; reset(); } if (x === "b+" && b < 12) { b++; reset(); }
        if (x === "hop") { hop("a"); hop("b"); }
        if (x === "race") { if (meet) reset(); race = true; }
        if (x === "rs") reset();
      };
    });
    function g() { return { x0: 24, x1: S.W - 24, y: S.H * 0.55 }; }
    function vx(v) { var o = g(); return o.x0 + v / MAXV * (o.x1 - o.x0); }
    function fpos(f, p, up) { var o = g(); if (!f) return { x: vx(p), y: o.y + (up ? -22 : 22) }; var e = Math.min(1, f.k), v = f.f + (f.t - f.f) * e; return { x: vx(v), y: o.y + (up ? -22 : 22) + (up ? -1 : 1) * Math.sin(e * Math.PI) * 40 }; }
    S.drag({
      down: function (p) { var A1 = fpos(fa, pa, true), B1 = fpos(fb, pb, false); if (Math.hypot(p.x - A1.x, p.y - A1.y) < 26) { hop("a"); return true; } if (Math.hypot(p.x - B1.x, p.y - B1.y) < 26) { hop("b"); return true; } return false; },
      hover: function (p) { var A1 = fpos(fa, pa, true), B1 = fpos(fb, pb, false); return Math.hypot(p.x - A1.x, p.y - A1.y) < 26 || Math.hypot(p.x - B1.x, p.y - B1.y) < 26; }
    });
    function frog(c, x, y, col) { K.dot(c, x, y, 13, col, "rgba(0,0,0,.3)"); K.dot(c, x - 5, y - 9, 4, "#fff"); K.dot(c, x + 5, y - 9, 4, "#fff"); K.dot(c, x - 5, y - 9, 2, "#0f172a"); K.dot(c, x + 5, y - 9, 2, "#0f172a"); }
    reset();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, o = g(), W = S.W, i;
      c.clearRect(0, 0, W, S.H); H.ltr(c);
      if (fa) { fa.k += dt * 2.6; } if (fb) { fb.k += dt * 2.6; }
      if ((fa && fa.k >= 1) || (fb && fb.k >= 1)) landed();
      if (race && !fa && !fb) { acc += dt; if (acc > 0.12) { acc = 0; var ok; if (meet) race = false; else { if (pa < pb) ok = hop("a"); else if (pb < pa) ok = hop("b"); else { ok = hop("a"); ok = hop("b") || ok; } if (!ok) race = false; } } }
      c.strokeStyle = "rgba(59,130,246,.15)"; c.lineWidth = 26; c.beginPath(); c.moveTo(o.x0, o.y); c.lineTo(o.x1, o.y); c.stroke();
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(o.x0, o.y); c.lineTo(o.x1, o.y); c.stroke();
      for (i = 0; i <= MAXV; i++) { var x = vx(i), maj = i % 6 === 0; c.strokeStyle = C.muted; c.lineWidth = 1; c.beginPath(); c.moveTo(x, o.y - (maj ? 7 : 3)); c.lineTo(x, o.y + (maj ? 7 : 3)); c.stroke(); if (maj && (o.x1 - o.x0) > 300 || i % 12 === 0) K.txt(c, H.loc(i), x, o.y + 46, { s: 10, c: C.muted }); }
      LA.forEach(function (v) { K.dot(c, vx(v), o.y - 8, 4, "#f97316"); });
      LB.forEach(function (v) { K.dot(c, vx(v), o.y + 8, 4, "#3b82f6"); });
      if (meet) { K.txt(c, "⭐", vx(meet), o.y, { s: 22 }); K.txt(c, H.loc(meet), vx(meet), o.y - 62, { s: 16, c: "#16a34a", w: 900 }); }
      var A1 = fpos(fa, pa, true), B1 = fpos(fb, pb, false);
      frog(c, A1.x, A1.y, "#fb923c"); frog(c, B1.x, B1.y, "#60a5fa");
      K.txt(c, "A +" + H.loc(a), 40, 16, { s: 12, c: "#f97316", a: "left" }); K.txt(c, "B +" + H.loc(b), 40, S.H - 12, { s: 12, c: "#3b82f6", a: "left" });
    });
  };
})();
/* ---------- Primary 5 maths simulations (part B): area model, algorithm, real-world groups, division models, bar models ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, L = E.sciLabs, K = E.simKit, H = E.mp5h;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var hint = H.hint, fm = H.fm, inR = H.inR;
  function N(x) { return fm(x, 0); }

  /* =========================================================
     mp5_area - area model with draggable dividers (distributive property)
     ========================================================= */
  L.mp5_area = function (host, cfg, done) {
    var P = [{ a: 46, b: 24 }, { a: 8, b: 9 }, { a: 12, b: 25 }];
    host.innerHTML = hint(t("Drag the orange handle (top) and the blue handle (left) to cut the rectangle. Each part shows its partial product; the parts always add up to the whole area.", "اسحب المقبض البرتقالي (أعلى) والمقبض الأزرق (يسار) لتقسيم المستطيل، فيظهر حاصل الضرب الجزئي لكل جزء، ومجموع الأجزاء يساوي دائمًا المساحة كلها.")) + '<div class="seg" id="arp"></div>';
    var S = H.mk(host, 0.72, 460, 1.1);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Eman's garden 46 × 24: split into tens and ones (40 + 6 and 20 + 4).", "حديقة إيمان 46 × 24: قسّم إلى عشرات وآحاد (40 + 6 و20 + 4)."),
      t("Show 8 × 9 as 8 × (5 + 4).", "بيّن أن 8 × 9 = 8 × (5 + 4)."),
      t("Omar's 12 buses × 25 seats: cut both sides and find the total.", "حافلات عمر 12 × 25 مقعدًا: قسّم الضلعين وأوجد المجموع.")].map(H.tx), done);
    var pi = 0, a1 = 0, b1 = 0, drag = null;
    K.seg(host, "#arp", P.map(function (p, i) { return [String(i), '<span dir="ltr">' + H.loc(p.a + " × " + p.b) + "</span>"]; }), "0", function (v) { pi = +v; a1 = b1 = 0; upd(); });
    function geo() { var p = P[pi], s = Math.min((S.W - 110) / p.b, (S.H - 70) / p.a), w = p.b * s, h = p.a * s; return { s: s, w: w, h: h, x0: 70 + (S.W - 110 - w) / 2, y0: 44 }; }
    function parts() { var p = P[pi]; return { r: [a1, p.a - a1].filter(function (x) { return x > 0; }), c: [b1, p.b - b1].filter(function (x) { return x > 0; }) }; }
    function upd() {
      var p = P[pi], q = parts(), prods = [];
      q.r.forEach(function (r) { q.c.forEach(function (c) { prods.push(r * c); }); });
      var sa = q.r.length > 1 ? "(" + N(q.r[0]) + " + " + N(q.r[1]) + ")" : N(p.a), sb = q.c.length > 1 ? "(" + N(q.c[0]) + " + " + N(q.c[1]) + ")" : N(p.b);
      mo.innerHTML = "<span>" + eq(sa + " × " + sb + (prods.length > 1 ? " = " + prods.map(N).join(" + ") : "") + " = " + N(p.a * p.b)) + "</span>" +
        "<span class='sub'>" + t("Every part is (a part of one side) × (a part of the other side).", "كل جزء = (جزء من ضلع) × (جزء من الضلع الآخر).") + "</span>";
      var rs = q.r.slice().sort(function (x, y) { return x - y; }).join(","), cs = q.c.slice().sort(function (x, y) { return x - y; }).join(",");
      if (pi === 0 && rs === "6,40" && cs === "4,20") tick(0);
      if (pi === 1 && q.r.length === 1 && cs === "4,5") tick(1);
      if (pi === 2 && q.r.length === 2 && q.c.length === 2) tick(2);
    }
    function set(p) { var o = geo(), pr = P[pi]; if (drag === "b") b1 = Math.max(0, Math.min(pr.b, Math.round((p.x - o.x0) / o.s))); else a1 = Math.max(0, Math.min(pr.a, Math.round((p.y - o.y0) / o.s))); upd(); }
    S.drag({
      down: function (p) {
        var o = geo(), hbx = o.x0 + b1 * o.s, hay = o.y0 + a1 * o.s;
        if (Math.hypot(p.x - hbx, p.y - (o.y0 - 16)) < 22 || (p.y < o.y0 && p.x > o.x0 - 10 && p.x < o.x0 + o.w + 10) || (Math.abs(p.x - hbx) < 10 && p.y > o.y0 && p.y < o.y0 + o.h && b1 > 0 && b1 < P[pi].b)) drag = "b";
        else if (Math.hypot(p.x - (o.x0 - 16), p.y - hay) < 22 || (p.x < o.x0 && p.y > o.y0 - 10 && p.y < o.y0 + o.h + 10) || (Math.abs(p.y - hay) < 10 && p.x > o.x0 && p.x < o.x0 + o.w && a1 > 0 && a1 < P[pi].a)) drag = "a";
        else return false;
        set(p); return true;
      },
      move: function (p) { if (drag) set(p); }, up: function () { drag = null; },
      hover: function (p) { var o = geo(); return p.y < o.y0 || p.x < o.x0; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = geo(), pr = P[pi], q, i, j, COLS = ["rgba(59,130,246,.35)", "rgba(34,197,94,.35)", "rgba(249,115,22,.35)", "rgba(168,85,247,.35)"];
      c.clearRect(0, 0, S.W, S.H); H.ltr(c);
      var rr = [[0, a1], [a1, pr.a]].filter(function (x) { return x[1] > x[0]; }), cc = [[0, b1], [b1, pr.b]].filter(function (x) { return x[1] > x[0]; }), k = 0;
      for (i = 0; i < rr.length; i++) for (j = 0; j < cc.length; j++) {
        var x = o.x0 + cc[j][0] * o.s, y = o.y0 + rr[i][0] * o.s, w = (cc[j][1] - cc[j][0]) * o.s, h = (rr[i][1] - rr[i][0]) * o.s, r = rr[i][1] - rr[i][0], cl = cc[j][1] - cc[j][0];
        c.fillStyle = COLS[k++ % 4]; c.fillRect(x, y, w, h);
        if (w > 64 && h > 36) { K.txt(c, N(r) + " × " + N(cl), x + w / 2, y + h / 2 - 9, { s: 12, c: C.ink }); K.txt(c, "= " + N(r * cl), x + w / 2, y + h / 2 + 9, { s: 13, c: C.ink, w: 900 }); }
        else if (w > 28 && h > 14) K.txt(c, N(r * cl), x + w / 2, y + h / 2, { s: 11, c: C.ink, w: 900 });
      }
      if (pr.a * pr.b <= 400) { c.strokeStyle = C.line; c.lineWidth = 0.5; for (i = 1; i < pr.b; i++) { c.beginPath(); c.moveTo(o.x0 + i * o.s, o.y0); c.lineTo(o.x0 + i * o.s, o.y0 + o.h); c.stroke(); } for (i = 1; i < pr.a; i++) { c.beginPath(); c.moveTo(o.x0, o.y0 + i * o.s); c.lineTo(o.x0 + o.w, o.y0 + i * o.s); c.stroke(); } }
      c.strokeStyle = C.ink; c.lineWidth = 2; c.strokeRect(o.x0, o.y0, o.w, o.h);
      c.lineWidth = 2.5; c.strokeStyle = "#f97316"; if (b1 > 0 && b1 < pr.b) { c.beginPath(); c.moveTo(o.x0 + b1 * o.s, o.y0); c.lineTo(o.x0 + b1 * o.s, o.y0 + o.h); c.stroke(); }
      c.strokeStyle = "#3b82f6"; if (a1 > 0 && a1 < pr.a) { c.beginPath(); c.moveTo(o.x0, o.y0 + a1 * o.s); c.lineTo(o.x0 + o.w, o.y0 + a1 * o.s); c.stroke(); }
      K.dot(c, o.x0 + b1 * o.s, o.y0 - 16, 10, "#f97316", "rgba(0,0,0,.3)"); K.dot(c, o.x0 - 16, o.y0 + a1 * o.s, 10, "#3b82f6", "rgba(0,0,0,.3)");
      cc.forEach(function (x) { K.txt(c, N(x[1] - x[0]), o.x0 + (x[0] + x[1]) / 2 * o.s, o.y0 - 34, { s: 13, c: "#f97316" }); });
      rr.forEach(function (x) { K.txt(c, N(x[1] - x[0]), o.x0 - 40, o.y0 + (x[0] + x[1]) / 2 * o.s, { s: 13, c: "#3b82f6" }); });
      K.txt(c, t("area = ", "المساحة = ") + N(pr.a * pr.b), o.x0 + o.w / 2, Math.min(S.H - 10, o.y0 + o.h + 16), { s: 13, c: C.ink });
    });
  };

  /* =========================================================
     mp5_algo - the standard multiplication algorithm, digit by digit
     ========================================================= */
  L.mp5_algo = function (host, cfg, done) {
    var P = [[45, 37], [357, 36], [3567, 24]];
    host.innerHTML = hint(t("Work digit by digit from the right. At each step tap the circle with the digit to write. Watch the carries and the placeholder zero.", "اعمل رقمًا رقمًا من اليمين، وفي كل خطوة اضغط على الدائرة التي فيها الرقم الذي تكتبه، وانتبه إلى الحمل وصفر حفظ المكان.")) + '<div class="seg" id="alp"></div>';
    var S = H.mk(host, 0.74, 450, 1.3);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Finish 45 × 37.", "أكمل 45 × 37."), t("Finish Ashraf's 357 × 36 the right way.", "أكمل 357 × 36 لأشرف بالطريقة الصحيحة."), t("Finish 3,567 × 24.", "أكمل 3,567 × 24.")].map(H.tx), done);
    var pi = 0, top, bot, td, b0, b1, row, i, carry, R, opts = [], cor, shake = 0, oR = [];
    K.seg(host, "#alp", P.map(function (p, k) { return [String(k), '<span dir="ltr">' + N(p[0]) + " × " + N(p[1]) + "</span>"]; }), "0", function (v) { pi = +v; init(); });
    function rv(a) { return a.length ? +a.slice().reverse().join("") : 0; }
    function est(x) { var p = Math.pow(10, String(x).length - 1); return Math.round(x / p) * p; }
    function init() { top = P[pi][0]; bot = P[pi][1]; td = String(top).split("").reverse().map(Number); b0 = bot % 10; b1 = Math.floor(bot / 10); row = 0; i = 0; carry = 0; R = [[], []]; mk(); upd(); }
    function mul() { return row === 0 ? b0 : b1; }
    function mk() {
      var cand, alts;
      if (row === 2) { var tot = top * bot; cor = tot; cand = [tot]; alts = [top * b0 + top * b1, tot + 100, tot - 10]; }
      else if (row > 2) { opts = []; return; }
      else {
        var m = mul(), p = td[i] * m + carry, last = i === td.length - 1;
        cor = last ? p : p % 10; cand = [cor];
        alts = last ? [td[i] * m, p + 1, p + 10, Math.max(0, p - 1)] : [(td[i] * m) % 10, (cor + 1) % 10, (cor + 9) % 10, (cor + 5) % 10];
      }
      alts.forEach(function (x) { if (cand.length < 3 && cand.indexOf(x) < 0 && x >= 0) cand.push(x); });
      opts = E.shuffle(cand);
    }
    function pick(v) {
      if (v !== cor) {
        shake = 0.5;
        E.toast(row === 2 ? t("Add the two rows, lined up by place value.", "اجمع الصفين مرتبين حسب القيمة المكانية.") : H.tx(t("Multiply " + td[i] + " × " + mul() + (carry ? " and add the carry " + carry : "") + ".", "اضرب " + td[i] + " × " + mul() + (carry ? " ثم أضف الحمل " + carry : "") + ".")));
        return;
      }
      if (row === 2) { row = 3; tick(pi); E.speak(t("Done!", "أحسنت!")); upd(); return; }
      var m = mul(), p = td[i] * m + carry;
      if (i === td.length - 1) { R[row] = R[row].concat(String(p).split("").reverse().map(Number)); carry = 0; }
      else { R[row].push(p % 10); carry = Math.floor(p / 10); }
      i++;
      if (i >= td.length) {
        if (row === 0) { row = 1; i = 0; carry = 0; R[1] = [0]; E.toast(t("Tens row: first write the placeholder 0.", "صف العشرات: اكتب صفر حفظ المكان أولًا.")); }
        else row = 2;
      }
      mk(); upd();
    }
    function upd() {
      var h = "<span>" + t("Ones row: ", "صف الآحاد: ") + eq(N(top) + " × " + N(b0) + " = " + N(top * b0)) + "</span><span>" + t("Tens row: ", "صف العشرات: ") + eq(N(top) + " × " + N(b1 * 10) + " = " + N(top * b1 * 10)) + "</span>";
      h += "<span class='sub'>" + t("Estimate: ", "التقدير: ") + eq(N(est(top)) + " × " + N(est(bot)) + " = " + N(est(top) * est(bot))) + "</span>";
      if (row === 3) h += "<b class='ok-t'>✔ " + eq(N(top) + " × " + N(bot) + " = " + N(top * bot)) + "</b>";
      mo.innerHTML = h;
    }
    S.drag({ down: function (p) { for (var k = 0; k < oR.length; k++) if (Math.hypot(p.x - oR[k].x, p.y - oR[k].y) < 28) { pick(oR[k].v); return true; } return false; },
      hover: function (p) { return oR.some(function (r) { return Math.hypot(p.x - r.x, p.y - r.y) < 28; }); } });
    init();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, ncol = String(top * bot).length + 1, cw = Math.min(36, (W - 80) / (ncol + 1)), xr = W / 2 + ncol * cw / 2, rh = Math.min(40, (Hh - 110) / 7), y = 22, k;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      function digs(a, yy, col, from, hl) { for (var j = 0; j < a.length; j++) { var x = xr - (j + 0.5) * cw; if (hl === j) { K.rr(c, x - cw / 2 + 2, yy - rh / 2 + 2, cw - 4, rh - 4, 6); c.fillStyle = "rgba(249,115,22,.25)"; c.fill(); } K.txt(c, H.loc(a[j]), x, yy, { s: Math.min(26, rh * 0.7), c: (from != null && j < from) ? C.muted : col }); } }
      if (row < 2 && carry) K.txt(c, H.loc(carry), xr - (i + 0.5) * cw, y, { s: 15, c: "#ef4444", w: 900 });
      y += rh * 0.7;
      digs(td, y, C.ink, null, row < 2 ? i : -1);
      y += rh;
      var bd = String(bot).split("").reverse().map(Number);
      for (k = 0; k < bd.length; k++) { var bx = xr - (k + 0.5) * cw; if (row < 2 && k === row) { K.rr(c, bx - cw / 2 + 2, y - rh / 2 + 2, cw - 4, rh - 4, 6); c.fillStyle = "rgba(59,130,246,.25)"; c.fill(); } K.txt(c, H.loc(bd[k]), bx, y, { s: Math.min(26, rh * 0.7), c: C.ink }); }
      K.txt(c, "×", xr - (ncol + 0.3) * cw, y, { s: 22, c: C.ink });
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(xr - ncol * cw - 10, y + rh / 2); c.lineTo(xr + 4, y + rh / 2); c.stroke();
      y += rh;
      digs(R[0], y, "#2563eb");
      y += rh;
      digs(R[1], y, "#16a34a", row >= 1 ? 1 : null);
      if (R[1].length) K.txt(c, "+", xr - (ncol + 0.3) * cw, y, { s: 22, c: C.ink });
      if (row >= 2) { c.beginPath(); c.moveTo(xr - ncol * cw - 10, y + rh / 2); c.lineTo(xr + 4, y + rh / 2); c.stroke(); }
      y += rh;
      if (row === 3) digs(String(top * bot).split("").reverse().map(Number), y, "#9333ea");
      shake = Math.max(0, shake - dt); oR = [];
      var oy = Hh - 34, sx = Math.sin(shake * 40) * shake * 14;
      K.txt(c, row === 2 ? t("Tap the sum of the two rows:", "اضغط على مجموع الصفين:") : row < 2 ? t("Tap the digit to write:", "اضغط على الرقم الذي تكتبه:") : t("Finished! Pick another problem.", "انتهيت! اختر مسألة أخرى."), W / 2, oy - 38, { s: 12, c: C.muted });
      for (k = 0; k < opts.length; k++) {
        var ox = W / 2 + (k - (opts.length - 1) / 2) * Math.min(110, W / 3.4) + sx, lab = N(opts[k]), rad = Math.max(24, lab.length * 5.5);
        K.dot(c, ox, oy, rad, C.card, C.line); c.lineWidth = 2; c.strokeStyle = "#f97316"; c.beginPath(); c.arc(ox, oy, rad, 0, 7); c.stroke();
        K.txt(c, lab, ox, oy, { s: 16, c: C.ink, w: 900 }); oR.push({ x: ox, y: oy, v: opts[k] });
      }
    });
  };

  /* =========================================================
     mp5_groups - real-world multiplication: drag the number of groups
     ========================================================= */
  L.mp5_groups = function (host, cfg, done) {
    var SC = [{ per: 120, n: 33, u: ["min", "دقيقة"], nm: [t("Sandstorm", "العاصفة"), t("days", "أيام")], q: t("A sandstorm lasts 120 minutes each day. Drag to 33 days.", "تستمر العاصفة 120 دقيقة يوميًا. اسحب إلى 33 يومًا.") },
      { per: 510, n: 18, u: ["g", "جم"], nm: [t("Baklava nuts", "مكسرات البقلاوة"), t("recipes", "وصفات")], q: t("3 nuts × 170 g = 510 g per recipe. Drag to 18 recipes.", "3 أنواع × 170 جم = 510 جم للوصفة. اسحب إلى 18 وصفة.") },
      { per: 295, n: 18, u: ["mL", "مل"], nm: [t("Syrup", "الشربات"), t("batches", "دفعات")], q: t("250 + 15 + 30 = 295 mL per batch. Drag to 18 batches.", "250 + 15 + 30 = 295 مل للدفعة. اسحب إلى 18 دفعة.") },
      { per: 140, n: 20, u: ["g", "جم"], nm: [t("Sesame", "السمسم"), t("recipes", "وصفات")], q: t("140 g of sesame per recipe, 20 recipes a week.", "140 جم سمسم للوصفة، و20 وصفة في الأسبوع.") }];
    host.innerHTML = hint(t("Mona's restaurant: choose a job, then drag the handle to set the number of groups. Watch the boxes and the total grow.", "مطعم منى: اختر مهمة ثم اسحب المقبض لتحديد عدد المجموعات، وشاهد الصناديق والمجموع يكبران.")) + '<div class="seg" id="grs"></div>';
    var S = H.mk(host, 0.66, 420, 1.2);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Sandstorm: find the minutes in 33 days.", "العاصفة: أوجد الدقائق في 33 يومًا."), t("Baklava: grams of nuts for 18 recipes.", "البقلاوة: جرامات المكسرات لـ 18 وصفة."), t("Syrup: millilitres for 18 batches.", "الشربات: المليلترات لـ 18 دفعة.")].map(H.tx), done);
    var si = 0, n = 1, drag = false, MX = 40;
    K.seg(host, "#grs", SC.map(function (s, i) { return [String(i), s.nm[0]]; }), "0", function (v) { si = +v; n = 1; upd(); });
    function U() { return E.isAr() ? SC[si].u[1] : SC[si].u[0]; }
    function upd() {
      var s = SC[si], tn = Math.floor(n / 10) * 10, on = n % 10;
      mo.innerHTML = "<span>" + eq(N(s.per) + " × " + N(n) + " = " + N(s.per * n)) + " " + U() + "</span>" +
        (tn && on ? "<span>" + eq(N(s.per) + " × " + N(tn) + " + " + N(s.per) + " × " + N(on) + " = " + N(s.per * tn) + " + " + N(s.per * on)) + "</span>" : "") +
        (si === 0 ? "<span class='sub'>" + eq(N(s.per * n) + " ÷ 60 = " + fm(s.per * n / 60, 2)) + " " + t("hours", "ساعة") + "</span>" : "");
      mo.innerHTML = "<span class='sub' style='width:100%'>" + H.tx(s.q) + "</span>" + mo.innerHTML;
      if (si < 3 && n === s.n) tick(si);
    }
    function g() { return { x0: 30, x1: S.W - 30, y: 56 }; }
    function set(p) { var o = g(); n = Math.max(0, Math.min(MX, Math.round((p.x - o.x0) / (o.x1 - o.x0) * MX))); upd(); }
    S.drag({ down: function (p) { if (p.y > 90) return false; drag = true; set(p); return true; }, move: function (p) { if (drag) set(p); }, up: function () { drag = false; }, hover: function (p) { return p.y < 90; } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = g(), W = S.W, Hh = S.H, s = SC[si], i;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      c.strokeStyle = C.line; c.lineWidth = 6; c.lineCap = "round"; c.beginPath(); c.moveTo(o.x0, o.y); c.lineTo(o.x1, o.y); c.stroke();
      c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(o.x0, o.y); c.lineTo(o.x0 + n / MX * (o.x1 - o.x0), o.y); c.stroke(); c.lineCap = "butt";
      for (i = 0; i <= MX; i += 5) K.txt(c, H.loc(i), o.x0 + i / MX * (o.x1 - o.x0), o.y + 18, { s: 10, c: C.muted });
      var hx = o.x0 + n / MX * (o.x1 - o.x0); K.dot(c, hx, o.y, 12, "#f97316", "rgba(0,0,0,.3)"); K.txt(c, H.loc(n), hx, o.y - 22, { s: 14, c: "#f97316", w: 900 });
      var bw = (W - 60) / 10, bh = Math.min(30, (Hh - 190) / 4), by = 100;
      for (i = 0; i < n; i++) {
        var r = Math.floor(i / 10), cI = i % 10, x = 30 + cI * bw, y = by + r * (bh + 6), ones = i >= Math.floor(n / 10) * 10;
        K.rr(c, x + 2, y, bw - 4, bh, 6); c.fillStyle = ones ? "#fdba74" : ["#93c5fd", "#86efac", "#c4b5fd", "#fca5a5"][r]; c.fill();
        if (bw > 44) K.txt(c, N(s.per), x + bw / 2, y + bh / 2, { s: 10, c: "#0f172a" });
      }
      var ty = Hh - 40, tw = (W - 60) * n / MX;
      K.rr(c, 30, ty - 12, Math.max(4, tw), 24, 8); c.fillStyle = "#8b5cf6"; c.fill();
      K.txt(c, t("Total: ", "المجموع: ") + N(s.per * n) + " " + U(), Math.min(W - 90, 40 + tw + 70), ty, { s: 13, c: C.ink, w: 900 });
    });
  };

  /* =========================================================
     mp5_divarea - division with an area model (partial quotients)
     ========================================================= */
  L.mp5_divarea = function (host, cfg, done) {
    var P = [{ D: 1625, d: 13, e: [t("1,300 ÷ 13 = 100, so a bit more than 100", "1,300 ÷ 13 = 100، إذن أكبر قليلًا من 100")] }, { D: 3622, d: 31, e: [t("3,600 ÷ 30 = 120", "3,600 ÷ 30 = 120")] }, { D: 1050, d: 7, e: [t("700 ÷ 7 = 100, so more than 100", "700 ÷ 7 = 100، إذن أكبر من 100")] }, { D: 2207, d: 7, e: [t("2,100 ÷ 7 = 300", "2,100 ÷ 7 = 300")] }];
    var CH = [100, 50, 20, 10, 5, 2, 1];
    host.innerHTML = hint(t("The divisor is the height of the rectangle. Tap a chunk to build the length: each chunk uses up divisor × chunk of the area. Stop when what is left is smaller than the divisor.", "المقسوم عليه هو ارتفاع المستطيل، اضغط على جزء لتبني الطول: كل جزء يستهلك (المقسوم عليه × الجزء) من المساحة، وتوقف عندما يصبح الباقي أصغر من المقسوم عليه.")) + '<div class="seg" id="dvp"></div>';
    var S = H.mk(host, 0.6, 380, 0.9);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" id="dvu">↶ ' + t("Undo", "تراجع") + '</button><button type="button" class="btn sm ghost" id="dvr">↺ ' + t("Start again", "ابدأ من جديد") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Pack 1,625 notebooks into boxes of 13: 1,625 ÷ 13.", "عبّئ 1,625 كراسة في صناديق من 13: 1,625 ÷ 13."), t("Solve 3,622 ÷ 31 and find the remainder.", "حل 3,622 ÷ 31 وأوجد الباقي."), t("Solve 1,050 ÷ 7 using only 2 chunks.", "حل 1,050 ÷ 7 باستخدام جزأين فقط.")].map(H.tx), done);
    var pi = 0, parts = [], cR = [], shake = 0;
    K.seg(host, "#dvp", P.map(function (p, i) { return [String(i), '<span dir="ltr">' + N(p.D) + " ÷ " + N(p.d) + "</span>"]; }), "0", function (v) { pi = +v; parts = []; upd(); });
    ctl.querySelector("#dvu").onclick = function () { parts.pop(); upd(); };
    ctl.querySelector("#dvr").onclick = function () { parts = []; upd(); };
    function rem() { var p = P[pi], r = p.D; parts.forEach(function (c) { r -= c * p.d; }); return r; }
    function q() { return parts.reduce(function (a, b) { return a + b; }, 0); }
    function fin() { return rem() < P[pi].d; }
    function upd() {
      var p = P[pi], r = p.D, h = "<span class='sub'>" + t("Estimate: ", "التقدير: ") + eq(H.tx(p.e[0])) + "</span>";
      parts.forEach(function (c) { h += "<span>" + eq(N(r) + " − " + N(p.d) + " × " + N(c) + " = " + N(r - p.d * c)) + "</span>"; r -= p.d * c; });
      if (fin()) h += "<b class='ok-t'>✔ " + eq(parts.map(N).join(" + ") + " = " + N(q())) + " → " + eq(N(p.D) + " ÷ " + N(p.d) + " = " + N(q()) + (rem() ? " R " + N(rem()) : "")) + "</b>";
      mo.innerHTML = h;
      if (fin()) { if (pi === 0) tick(0); if (pi === 1) tick(1); if (pi === 2 && parts.length <= 2) tick(2); }
    }
    function tap(cv) {
      var p = P[pi], r = rem();
      if (fin()) { E.toast(t("Finished: what is left is smaller than the divisor.", "انتهيت: الباقي أصغر من المقسوم عليه.")); return; }
      if (cv * p.d > r) { shake = 0.5; E.toast(H.tx(t("Too big: " + p.d + " × " + cv + " = " + (p.d * cv) + " is more than " + r + ".", "كبير جدًا: " + p.d + " × " + cv + " = " + (p.d * cv) + " أكبر من " + r + "."))); return; }
      parts.push(cv); upd();
    }
    S.drag({ down: function (p) { for (var i = 0; i < cR.length; i++) if (inR(p, cR[i])) { tap(cR[i].v); return true; } return false; }, hover: function (p) { return cR.some(function (r) { return inR(p, r); }); } });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, p = P[pi], qe = p.D / p.d, x0 = 56, wTot = W - x0 - 24, px = wTot / qe, hh = Math.min(120, Hh * 0.36), y0 = 40, x = x0, k;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      K.txt(c, N(p.d), x0 - 22, y0 + hh / 2, { s: 16, c: "#3b82f6", w: 900 });
      var COLS = ["#93c5fd", "#86efac", "#fcd34d", "#c4b5fd", "#fca5a5", "#5eead4", "#fdba74"];
      parts.forEach(function (cv, i) {
        var w = cv * px; c.fillStyle = COLS[i % COLS.length]; c.fillRect(x, y0, w, hh); c.strokeStyle = C.ink; c.lineWidth = 1; c.strokeRect(x, y0, w, hh);
        K.txt(c, N(cv), x + w / 2, y0 - 12, { s: 12, c: C.ink });
        if (w > 54) K.txt(c, N(p.d * cv), x + w / 2, y0 + hh / 2, { s: 12, c: "#0f172a" });
        x += w;
      });
      var r = rem(), rw = r / p.d * px;
      c.setLineDash([5, 4]); c.strokeStyle = C.muted; c.strokeRect(x, y0, Math.max(2, rw), hh); c.setLineDash([]);
      if (rw > 40) K.txt(c, N(r) + t(" left", " باقٍ"), x + rw / 2, y0 + hh / 2, { s: 12, c: C.muted });
      K.txt(c, t("Quotient so far: ", "خارج القسمة حتى الآن: ") + N(q()) + "   " + t("Left: ", "الباقي: ") + N(r), W / 2, y0 + hh + 24, { s: 13, c: C.ink, w: 900 });
      shake = Math.max(0, shake - dt); cR = [];
      var bw = Math.min(70, (W - 40) / CH.length - 6), sx = Math.sin(shake * 40) * shake * 12, by = Hh - 50;
      K.txt(c, t("Tap a chunk of the quotient:", "اضغط على جزء من خارج القسمة:"), W / 2, by - 16, { s: 12, c: C.muted });
      for (k = 0; k < CH.length; k++) {
        var rx = W / 2 + (k - (CH.length - 1) / 2) * (bw + 6) - bw / 2 + sx, rr = { x: rx, y: by, w: bw, h: 38, v: CH[k] }, ok = CH[k] * p.d <= r && !fin();
        H.btn(c, rr, N(CH[k]), C, ok, "#8b5cf6"); cR.push(rr);
      }
    });
  };

  /* =========================================================
     mp5_longdiv - the division algorithm with a digit wheel
     ========================================================= */
  L.mp5_longdiv = function (host, cfg, done) {
    var P = [[1376, 43], [756, 22], [8858, 43], [350, 12]];
    host.innerHTML = hint(t("Divide, multiply, subtract, bring down. Spin the digit wheel (drag it or tap ▲ ▼) to choose each quotient digit, then press Write.", "نقسم، نضرب، نطرح، ننزل. أدر عجلة الأرقام (اسحبها أو اضغط ▲ ▼) لتختار كل رقم في خارج القسمة، ثم اضغط اكتب.")) + '<div class="seg" id="ldp"></div>';
    var S = H.mk(host, 0.72, 440, 1.3);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm primary" id="ldw">✍️ ' + t("Write this digit", "اكتب هذا الرقم") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Solve 1,376 ÷ 43.", "حل 1,376 ÷ 43."), t("Solve 756 ÷ 22 and find the remainder.", "حل 756 ÷ 22 وأوجد الباقي."), t("Solve Ayman's 8,858 ÷ 43 (watch for a zero in the quotient).", "حل مسألة أيمن 8,858 ÷ 43 (انتبه للصفر في خارج القسمة).")].map(H.tx), done);
    var pi = 0, D, d, dg, pos, cur, q, qd, steps, fin, rem, shake = 0, wdrag = null;
    K.seg(host, "#ldp", P.map(function (p, i) { return [String(i), '<span dir="ltr">' + N(p[0]) + " ÷ " + N(p[1]) + "</span>"]; }), "0", function (v) { pi = +v; init(); });
    function init() {
      D = P[pi][0]; d = P[pi][1]; dg = String(D).split("").map(Number); pos = 0; cur = dg[0];
      while (cur < d && pos < dg.length - 1) { pos++; cur = cur * 10 + dg[pos]; }
      q = 1; qd = []; steps = []; fin = false; rem = 0; upd();
    }
    function upd() {
      var h;
      if (fin) {
        var Q = +qd.map(function (x) { return x.q; }).join("");
        h = "<b class='ok-t'>✔ " + eq(N(D) + " ÷ " + N(d) + " = " + N(Q) + (rem ? " R " + N(rem) : "")) + "</b><span>" + t("Check: ", "التحقق: ") + eq(N(Q) + " × " + N(d) + (rem ? " + " + N(rem) : "") + " = " + N(Q * d + rem)) + " ✔</span>";
      } else {
        var pr = q * d, ok = pr <= cur && cur - pr < d;
        h = "<span>" + t("Divide ", "اقسم ") + eq(N(cur) + " ÷ " + N(d)) + "</span><span>" + eq(N(d) + " × " + N(q) + " = " + N(pr)) + " " +
          (pr > cur ? "<b class='no-t'>" + t("too big", "كبير جدًا") + "</b>" : cur - pr >= d ? "<b class='no-t'>" + t("too small: ", "صغير جدًا: ") + eq(N(cur - pr) + " ≥ " + N(d)) + "</b>" : "<b class='ok-t'>" + t("fits! remainder ", "مناسب! الباقي ") + eq(N(cur - pr)) + "</b>") + "</span>";
        if (!ok && cur < d) h += "<span class='sub'>" + t("The number is smaller than the divisor: the digit is 0.", "العدد أصغر من المقسوم عليه: الرقم 0.") + "</span>";
      }
      mo.innerHTML = h;
    }
    ctl.querySelector("#ldw").onclick = function () {
      if (fin) return;
      var pr = q * d;
      if (pr > cur || cur - pr >= d) { shake = 0.5; E.toast(pr > cur ? t("Too big: try a smaller digit.", "كبير جدًا: جرّب رقمًا أصغر.") : t("Too small: a bigger digit still fits.", "صغير جدًا: ما زال رقم أكبر مناسبًا.")); return; }
      steps.push({ pos: pos, cur: cur, prod: pr, rem: cur - pr }); qd.push({ pos: pos, q: q });
      if (pos < dg.length - 1) { pos++; cur = (cur - pr) * 10 + dg[pos]; q = 1; }
      else { fin = true; rem = cur - pr; var gi = [1376, 756, 8858].indexOf(D); if (gi >= 0) tick(gi); E.speak(t("Done!", "أحسنت!")); }
      upd();
    };
    function wheel() { return { x: S.W - 54, y: S.H * 0.45, w: 64, h: 150 }; }
    S.drag({
      down: function (p) { var w = wheel(); if (p.x > w.x - w.w / 2 - 6 && p.x < w.x + w.w / 2 + 6 && p.y > w.y - w.h / 2 - 20 && p.y < w.y + w.h / 2 + 20) { if (p.y < w.y - w.h / 2 + 20) { q = (q + 1) % 10; upd(); return true; } if (p.y > w.y + w.h / 2 - 20) { q = (q + 9) % 10; upd(); return true; } wdrag = { y: p.y, q: q }; return true; } return false; },
      move: function (p) { if (wdrag) { var nq = ((wdrag.q + Math.round((wdrag.y - p.y) / 22)) % 10 + 10) % 10; if (nq !== q) { q = nq; upd(); } } },
      up: function () { wdrag = null; },
      hover: function (p) { var w = wheel(); return Math.abs(p.x - w.x) < w.w / 2 + 6 && Math.abs(p.y - w.y) < w.h / 2 + 20; }
    });
    init();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, rows = 2 + steps.length * 2 + 2, rh = Math.min(32, (Hh - 20) / rows), cw = Math.min(30, (W - 150) / (dg.length + 4)), xL = 30 + String(d).length * cw + 22, fs = Math.min(22, rh * 0.75, cw * 0.95), k;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      function xs(j) { return xL + (j + 0.5) * cw; }
      function num(v, endPos, y, col) { var s = String(v); for (var j = 0; j < s.length; j++) K.txt(c, H.loc(s[j]), xs(endPos - (s.length - 1 - j)), y, { s: fs, c: col }); }
      var yq = 16 + rh * 0.5, yD = yq + rh;
      qd.forEach(function (x) { K.txt(c, H.loc(x.q), xs(x.pos), yq, { s: fs, c: "#9333ea", w: 900 }); });
      if (!fin) K.txt(c, H.loc(q), xs(pos), yq, { s: fs, c: "rgba(147,51,234,.45)", w: 900 });
      K.txt(c, N(d), xL - 16, yD, { s: fs, c: "#3b82f6", a: "right" });
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(xL - 8, yD + rh / 2); c.quadraticCurveTo(xL + 2, yD, xL - 8, yD - rh / 2 - 2); c.lineTo(xs(dg.length - 1) + cw / 2 + 4, yD - rh / 2 - 2); c.stroke();
      for (k = 0; k < dg.length; k++) K.txt(c, H.loc(dg[k]), xs(k), yD, { s: fs, c: (!fin && k <= pos && steps.length === 0) ? "#f97316" : C.ink });
      var y = yD;
      steps.forEach(function (s, i) {
        y += rh; num(s.prod, s.pos, y, "#2563eb"); K.txt(c, "−", xs(s.pos - String(s.prod).length) + 4, y, { s: fs, c: C.muted });
        c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(xs(s.pos - String(s.cur).length + 1) - cw / 2, y + rh / 2); c.lineTo(xs(s.pos) + cw / 2, y + rh / 2); c.stroke();
        y += rh;
        var nx = steps[i + 1], val = nx ? nx.cur : (fin ? s.rem : cur), end = nx ? nx.pos : (fin ? s.pos : pos);
        num(val, end, y, (!fin && !nx) ? "#f97316" : C.ink);
      });
      if (fin) K.txt(c, t("R ", "الباقي ") + N(rem), xs(dg.length - 1) + cw + 34, y, { s: 15, c: "#16a34a", w: 900 });
      var w = wheel(); shake = Math.max(0, shake - dt); var sx = Math.sin(shake * 40) * shake * 10;
      K.rr(c, w.x - w.w / 2 + sx, w.y - w.h / 2, w.w, w.h, 14); c.fillStyle = C.card; c.fill(); c.strokeStyle = "#9333ea"; c.lineWidth = 2; c.stroke();
      K.txt(c, "▲", w.x + sx, w.y - w.h / 2 + 12, { s: 14, c: "#9333ea" }); K.txt(c, "▼", w.x + sx, w.y + w.h / 2 - 12, { s: 14, c: "#9333ea" });
      K.txt(c, H.loc((q + 1) % 10), w.x + sx, w.y - 34, { s: 16, c: C.muted }); K.txt(c, H.loc(q), w.x + sx, w.y, { s: 34, c: "#9333ea", w: 900 }); K.txt(c, H.loc((q + 9) % 10), w.x + sx, w.y + 34, { s: 16, c: C.muted });
      K.txt(c, t("digit", "الرقم"), w.x, w.y + w.h / 2 + 14, { s: 11, c: C.muted });
    });
  };

  /* =========================================================
     mp5_barmodel - multistep story problems with draggable bars
     ========================================================= */
  L.mp5_barmodel = function (host, cfg, done) {
    var SC = [
      { nm: t("Textile factory", "مصنع النسيج"), max: 12000, step: 50, u: ["m", "م"], bars: [{ l: t("Cotton", "القطن"), v: 11650, fix: 1, c: "#93c5fd" }, { l: t("Silk: 4,950 m fewer than cotton", "الحرير: أقل من القطن بـ 4,950 م"), v: 2000, tg: 6700, c: "#f9a8d4" }, { l: t("Wool: 3,500 m fewer than silk", "الصوف: أقل من الحرير بـ 3,500 م"), v: 1000, tg: 3200, c: "#fcd34d" }], total: true },
      { nm: t("Road trip", "رحلة الطريق"), max: 465, scale: 600, step: 1, u: ["km", "كم"], whole: 465, bars: [{ l: t("Friday", "الجمعة"), v: 124, fix: 1, c: "#93c5fd" }, { l: t("Saturday", "السبت"), v: 210, fix: 1, c: "#86efac" }, { l: t("Sunday: what is left?", "الأحد: كم تبقى؟"), v: 50, tg: 131, c: "#fcd34d" }], stack: true },
      { nm: t("Baklava trays", "صواني البقلاوة"), trays: true }
    ];
    host.innerHTML = hint(t("Drag the end of each yellow or pink bar to match the story. Use the − and + buttons for fine steps.", "اسحب طرف كل شريط أصفر أو وردي ليطابق القصة، واستخدم زري − و+ للخطوات الدقيقة.")) + '<div class="seg" id="bms"></div>';
    var S = H.mk(host, 0.62, 400, 0.9);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" data-a="-1">−</button><button type="button" class="btn sm ghost" data-a="1">+</button><span class="sub" id="bmsel"></span></div>');
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Textile factory: set the silk and wool bars and find the total fabric.", "مصنع النسيج: اضبط شريطي الحرير والصوف وأوجد مجموع الأقمشة."), t("Malek's trip: how far on Sunday?", "رحلة مالك: كم كيلومترًا يوم الأحد؟"), t("Baklava: the fewest trays (12 servings each) for 140 servings.", "البقلاوة: أقل عدد من الصواني (12 حصة لكل صينية) لـ 140 حصة.")].map(H.tx), done);
    var si = 0, sel = 1, trays = 5, drag = null;
    K.seg(host, "#bms", SC.map(function (s, i) { return [String(i), s.nm]; }), "0", function (v) { si = +v; sel = SC[si].bars ? SC[si].bars.findIndex(function (b) { return !b.fix; }) : 0; upd(); });
    function U() { var s = SC[si]; return s.u ? (E.isAr() ? s.u[1] : s.u[0]) : ""; }
    ctl.querySelectorAll("button").forEach(function (b) { b.onclick = function () { var s = SC[si], dlt = +b.dataset.a; if (s.trays) trays = Math.max(0, Math.min(15, trays + dlt)); else { var br = s.bars[sel]; if (br && !br.fix) br.v = Math.max(0, Math.min(s.max, br.v + dlt * s.step)); } upd(); }; });
    function upd() {
      var s = SC[si], h = "";
      if (s.trays) {
        var cap = trays * 12;
        h = "<span>" + eq(N(trays) + " × 12 = " + N(cap)) + " " + t("servings fit", "حصة تتسعها الصواني") + "</span>" + (cap >= 140 ? "<span>" + eq("140 ÷ 12 = 11 R 8") + " → " + (trays === 12 ? "<b class='ok-t'>" + t("12 trays: just enough!", "12 صينية: تكفي تمامًا!") + "</b>" : t("enough, but fewer trays would work", "تكفي، لكن عددًا أقل يكفي أيضًا")) + "</span>" : "<b class='no-t'>" + N(140 - cap) + t(" servings have no tray", " حصة بلا صينية") + "</b>");
        if (trays === 12) tick(2);
        ctl.querySelector("#bmsel").textContent = t("trays", "الصواني");
      } else {
        s.bars.forEach(function (b) { h += "<span>" + H.tx(b.l.split(":")[0]) + ": " + eq(N(b.v)) + " " + U() + (b.tg != null ? (b.v === b.tg ? " ✔" : "") : "") + "</span>"; });
        if (s.total) h += "<b>" + t("Total: ", "المجموع: ") + eq(s.bars.map(function (b) { return N(b.v); }).join(" + ") + " = " + N(s.bars.reduce(function (a, b) { return a + b.v; }, 0))) + "</b>";
        if (s.stack) { var sum = s.bars.reduce(function (a, b) { return a + b.v; }, 0); h += "<b>" + eq(s.bars.map(function (b) { return N(b.v); }).join(" + ") + " = " + N(sum)) + " " + (sum === s.whole ? "✔ " + t("the whole trip!", "الرحلة كلها!") : sum > s.whole ? t("more than 465 km", "أكثر من 465 كم") : t("less than 465 km", "أقل من 465 كم")) + "</b>"; }
        if (si === 0 && s.bars[1].v === 6700 && s.bars[2].v === 3200) tick(0);
        if (si === 1 && s.bars[2].v === 131) tick(1);
        var sb = s.bars[sel]; ctl.querySelector("#bmsel").textContent = sb ? H.tx(sb.l.split(":")[0]) : "";
      }
      mo.innerHTML = h;
    }
    function geo() { return { x0: 20, x1: S.W - 30, y0: 40, bh: Math.min(40, (S.H - 110) / 3.4) }; }
    function bx(s, i) { var o = geo(), sc = (o.x1 - o.x0) / (s.scale || s.max), x = o.x0; if (s.stack) for (var k = 0; k < i; k++) x += s.bars[k].v * sc; return { x: x, sc: sc, y: s.stack ? o.y0 + 60 : o.y0 + i * (o.bh + 28) + 14 }; }
    S.drag({
      down: function (p) {
        var s = SC[si], o = geo();
        if (s.trays) { if (p.y > S.H - 70) { drag = { t: 1 }; trays = Math.max(0, Math.min(15, Math.round((p.x - o.x0) / (o.x1 - o.x0) * 15))); upd(); return true; } return false; }
        for (var i = 0; i < s.bars.length; i++) { var b = s.bars[i], q = bx(s, i), ex = q.x + b.v * q.sc; if (!b.fix && Math.abs(p.x - ex) < 22 && p.y > q.y - 8 && p.y < q.y + o.bh + 8) { drag = { i: i }; sel = i; upd(); return true; } }
        return false;
      },
      move: function (p) {
        if (!drag) return; var s = SC[si], o = geo();
        if (drag.t) { trays = Math.max(0, Math.min(15, Math.round((p.x - o.x0) / (o.x1 - o.x0) * 15))); upd(); return; }
        var b = s.bars[drag.i], q = bx(s, drag.i), v = Math.round((p.x - q.x) / q.sc / s.step) * s.step; b.v = Math.max(0, Math.min(s.max, v)); upd();
      },
      up: function () { drag = null; },
      hover: function (p) { var s = SC[si]; if (s.trays) return p.y > S.H - 70; return s.bars.some(function (b, i) { var q = bx(s, i); return !b.fix && Math.abs(p.x - (q.x + b.v * q.sc)) < 22; }); }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = geo(), W = S.W, Hh = S.H, s = SC[si], i;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      if (s.trays) {
        var tw = Math.min(54, (W - 40) / 15 - 4), filled = 140;
        K.txt(c, t("140 servings of baklava, 12 per tray", "140 حصة بقلاوة، 12 حصة في كل صينية"), W / 2, 18, { s: 13, c: C.ink });
        for (i = 0; i < trays; i++) {
          var x = 20 + (i % 15) * (tw + 4), y = 44, inT = Math.max(0, Math.min(12, filled)); filled -= inT;
          K.rr(c, x, y, tw, 70, 6); c.fillStyle = C.card; c.fill(); c.strokeStyle = C.ink; c.lineWidth = 1.5; c.stroke();
          for (var k = 0; k < inT; k++) { var cx = x + 6 + (k % 3) * ((tw - 12) / 2.5), cy = y + 8 + Math.floor(k / 3) * 15; c.fillStyle = "#d97706"; c.fillRect(cx, cy, Math.max(4, (tw - 12) / 3 - 2), 11); }
        }
        if (filled > 0) K.txt(c, "⚠️ " + N(filled) + t(" servings without a tray", " حصة بلا صينية"), W / 2, 140, { s: 14, c: "#dc2626", w: 900 });
        var ty = Hh - 40; c.strokeStyle = C.line; c.lineWidth = 6; c.beginPath(); c.moveTo(o.x0, ty); c.lineTo(o.x1, ty); c.stroke();
        var hx = o.x0 + trays / 15 * (o.x1 - o.x0); K.dot(c, hx, ty, 12, "#8b5cf6", "rgba(0,0,0,.3)"); K.txt(c, N(trays) + t(" trays", " صوانٍ"), hx, ty - 22, { s: 13, c: "#8b5cf6", w: 900 });
        return;
      }
      if (s.stack) {
        var qq = bx(s, 0); K.txt(c, t("Whole trip: 465 km", "الرحلة كلها: 465 كم"), o.x0 + 465 * qq.sc / 2, o.y0 + 34, { s: 12, c: C.ink });
        c.strokeStyle = C.ink; c.lineWidth = 1.5; c.strokeRect(o.x0, o.y0 + 46, 465 * qq.sc, 6);
      }
      for (i = 0; i < s.bars.length; i++) {
        var b = s.bars[i], q = bx(s, i), w = b.v * q.sc;
        if (!s.stack) K.txt(c, H.tx(b.l), o.x0, q.y - 10, { s: 12, c: C.ink, a: "left" });
        K.rr(c, q.x, q.y, Math.max(3, w), o.bh, 6); c.fillStyle = b.c; c.fill(); c.strokeStyle = sel === i && !b.fix ? "#f97316" : C.line; c.lineWidth = sel === i && !b.fix ? 2.5 : 1; c.stroke();
        if (w > 50) K.txt(c, N(b.v), q.x + w / 2, q.y + o.bh / 2, { s: 13, c: "#0f172a", w: 900 });
        if (s.stack && w > 50) K.txt(c, H.tx(b.l.split(":")[0]), q.x + w / 2, q.y + o.bh + 14, { s: 11, c: C.ink });
        if (!b.fix) { K.dot(c, q.x + w, q.y + o.bh / 2, 11, "#f97316", "rgba(0,0,0,.3)"); K.txt(c, "↔", q.x + w, q.y + o.bh / 2, { s: 11, c: "#fff" }); }
      }
    });
  };
})();
/* ---------- Primary 5 maths simulations (part C): powers of ten, decimal area, metric, order of operations, expressions, patterns ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, L = E.sciLabs, K = E.simKit, H = E.mp5h;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var hint = H.hint, fm = H.fm, fx = H.fx, inR = H.inR;
  function N(x) { return fm(x, 0); }

  /* =========================================================
     mp5_pow10 - multiply / divide by powers of ten: digits slide
     ========================================================= */
  L.mp5_pow10 = function (host, cfg, done) {
    var div = cfg.mode === "div";
    var NUMS = div ? [2500000, 5700, 71000, 2160] : [15200, 720, 7400, 25000];
    var OPS = div ? [["÷ 10", -1], ["÷ 100", -2], ["÷ 1,000", -3], ["÷ 0.1", 1], ["÷ 0.01", 2], ["÷ 0.001", 3]] : [["× 10", 1], ["× 100", 2], ["× 1,000", 3], ["× 0.1", -1], ["× 0.01", -2], ["× 0.001", -3]];
    var GO = div ? [[2500000, 1, t("Divide 2,500 by 100.", "اقسم 2,500 على 100.")], [5700, 3, t("Divide 5.7 by 0.1.", "اقسم 5.7 على 0.1.")], [71000, 2, t("Divide 71 by 1,000.", "اقسم 71 على 1,000.")], [2160, 4, t("Divide 2.16 by 0.01.", "اقسم 2.16 على 0.01.")]]
      : [[15200, 0, t("Manal's pencil is 15.2 cm. Make it 10 times longer.", "قلم منال 15.2 سم. اجعله أطول 10 مرات.")], [15200, 3, t("Find one tenth of the pencil: 15.2 × 0.1.", "أوجد جزءًا من عشرة من القلم: 15.2 × 0.1.")], [720, 2, t("Hoda's stride is 0.72 m. Find 1,000 paces.", "خطوة هدى 0.72 م. أوجد طول 1,000 خطوة.")], [7400, 4, t("Find 7.4 × 0.01.", "أوجد 7.4 × 0.01.")]];
    host.innerHTML = hint(t("Choose a number, then drag a card into the slot (or tap it). Watch the digits slide across the place-value chart while the decimal point stays still.", "اختر عددًا ثم اسحب بطاقة إلى الخانة الفارغة (أو اضغط عليها)، وشاهد الأرقام تنزلق في جدول القيمة المكانية بينما تبقى العلامة العشرية ثابتة.")) + '<div class="seg" id="pwn"></div>';
    var S = H.mk(host, 0.62, 400, 1.25), NR = H.narrow(host);
    var mo = H.meter(host);
    var tick = L._goals(host, GO.map(function (g) { return H.tx(g[2]); }), done);
    var ni = 0, res = null, oi = -1, off = 0, drag = null, cR = [];
    var HD = ["10,000", "1,000", "100", "10", "1", "0.1", "0.01", "0.001"];
    function s3(v) { return fm(v / 1000, 3); }
    K.seg(host, "#pwn", NUMS.map(function (v, i) { return [String(i), '<span dir="ltr">' + s3(v) + "</span>"]; }), "0", function (v) { ni = +v; res = null; oi = -1; upd(); });
    function upd() {
      if (res == null) { mo.innerHTML = "<span class='sub'>" + t("Drop a card into the slot.", "أسقط بطاقة في الخانة.") + "</span>"; return; }
      var k = OPS[oi][1], mv = div ? -OPS[oi][1] : OPS[oi][1];
      mo.innerHTML = "<span>" + eq(s3(NUMS[ni]) + " " + H.loc(OPS[oi][0]) + " = " + s3(res)) + "</span><span>" + t("Every digit moved ", "تحرك كل رقم ") + H.loc(Math.abs(k)) + (Math.abs(k) === 1 ? t(" place to the ", " خانة إلى ") : t(" places to the ", " خانات إلى ")) + (k > 0 ? t("left (greater).", "اليسار (أكبر).") : t("right (smaller).", "اليمين (أصغر).")) + "</span>" +
        (div ? "<span class='sub'>" + t("Same as ", "مثل ") + eq(s3(NUMS[ni]) + " × " + H.loc(k > 0 ? ["10", "100", "1,000"][k - 1] : ["0.1", "0.01", "0.001"][-k - 1])) + "</span>" : "");
      void mv;
    }
    function apply(i) {
      var v = NUMS[ni], k = OPS[i][1], r = k >= 0 ? v * Math.pow(10, k) : v / Math.pow(10, -k);
      if (Math.round(r) !== r) { E.toast(t("The digits would go past the thousandths place.", "ستتجاوز الأرقام خانة أجزاء من ألف.")); return; }
      if (r >= 1e8) { E.toast(t("Too big for this chart.", "أكبر من هذا الجدول.")); return; }
      res = r; oi = i; off = k; upd();
      GO.forEach(function (g, gi) { if (g[0] === v && g[1] === i) tick(gi); });
    }
    function geo() { var W = S.W, cw = (W - 30) / 8; return { cw: cw, x0: 15, y1: 70, y2: 130, slot: NR ? { x: W / 2 - 20, y: 170, w: 90, h: 44 } : { x: W / 2 + 20, y: 170, w: 110, h: 44 } }; }
    function colX(o, c) { return o.x0 + (c + 0.5) * o.cw; }
    function digs(v) { var a = []; for (var c = 0; c < 8; c++) a.push(Math.floor(v / Math.pow(10, 7 - c)) % 10); var f = 0; while (f < 4 && a[f] === 0) f++; var l = 7; while (l > 4 && a[l] === 0) l--; return { a: a, f: f, l: l }; }
    S.drag({
      down: function (p) { for (var i = 0; i < cR.length; i++) if (inR(p, cR[i])) { drag = { i: cR[i].i, x: p.x, y: p.y, sx: p.x, sy: p.y }; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () { if (!drag) return; var o = geo(), tap = Math.hypot(drag.x - drag.sx, drag.y - drag.sy) < 6; if (tap || inR({ x: drag.x, y: drag.y }, { x: o.slot.x - 30, y: o.slot.y - 30, w: o.slot.w + 60, h: o.slot.h + 60 })) apply(drag.i); drag = null; },
      hover: function (p) { return cR.some(function (r) { return inR(p, r); }); }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, o = geo(), W = S.W, Hh = S.H, i, k;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      off += (0 - off) * Math.min(1, dt * 5); if (Math.abs(off) < 0.01) off = 0;
      for (i = 0; i < 8; i++) { var x = o.x0 + i * o.cw; c.fillStyle = i === 4 ? "rgba(59,130,246,.12)" : i > 4 ? "rgba(34,197,94,.08)" : "rgba(139,92,246,.06)"; c.fillRect(x + 1, 8, o.cw - 2, o.y2 + 28); K.txt(c, H.loc(HD[i]), x + o.cw / 2, 22, { s: Math.min(11, o.cw / 5), c: C.muted }); }
      var dx = o.x0 + 5 * o.cw;
      function row(v, y, col, sh) {
        var d = digs(v); for (k = d.f; k <= d.l; k++) K.txt(c, H.loc(d.a[k]), colX(o, k + (sh || 0)), y, { s: 28, c: col, w: 900 });
        K.dot(c, dx, y + 12, 4, C.ink);
      }
      row(NUMS[ni], o.y1, C.muted);
      if (res != null) row(res, o.y2, "#ef4444", off);
      if (NR) K.txt(c, H.loc(s3(NUMS[ni])), o.slot.x - 12, o.slot.y + o.slot.h / 2, { s: 16, c: C.ink, w: 900, a: "right" });
      else K.txt(c, H.loc(s3(NUMS[ni])), 50, o.slot.y + o.slot.h / 2, { s: 18, c: C.ink, w: 900, a: "left" });
      K.rr(c, o.slot.x, o.slot.y, o.slot.w, o.slot.h, 10); c.setLineDash(res == null ? [5, 4] : []); c.strokeStyle = "#f97316"; c.lineWidth = 2; c.stroke(); c.setLineDash([]);
      K.txt(c, oi >= 0 ? H.loc(OPS[oi][0]) : "?", o.slot.x + o.slot.w / 2, o.slot.y + o.slot.h / 2, { s: 17, c: "#f97316", w: 900 });
      if (NR) K.txt(c, "= " + (res == null ? "…" : H.loc(s3(res))), W / 2, o.slot.y + o.slot.h + 22, { s: 18, c: "#ef4444", w: 900 });
      else K.txt(c, "= " + (res == null ? "…" : H.loc(s3(res))), o.slot.x + o.slot.w + 16, o.slot.y + o.slot.h / 2, { s: 18, c: "#ef4444", w: 900, a: "left" });
      cR = []; var bw = NR ? Math.min(96, (W - 30) / 3 - 8) : Math.min(96, (W - 30) / 6 - 8), by = Hh - 54;
      for (i = 0; i < OPS.length; i++) { var r = NR ? { x: W / 2 + (i % 3 - 1) * (bw + 8) - bw / 2, y: by - (i < 3 ? 50 : 0), w: bw, h: 40, i: i } : { x: W / 2 + (i - 2.5) * (bw + 8) - bw / 2, y: by, w: bw, h: 40, i: i }; if (!(drag && drag.i === i)) H.btn(c, r, H.loc(OPS[i][0]), C, OPS[i][1] > 0, OPS[i][1] > 0 ? "#8b5cf6" : "#0ea5e9"); cR.push(r); }
      if (drag) H.btn(c, { x: drag.x - bw / 2, y: drag.y - 20, w: bw, h: 40 }, H.loc(OPS[drag.i][0]), C, true, "#f97316");
    });
  };

  /* =========================================================
     mp5_whole - divide by a decimal: make the divisor whole
     ========================================================= */
  L.mp5_whole = function (host, cfg, done) {
    var P = [{ a: 26400, b: 2200 }, { a: 1500, b: 40 }, { a: 77430, b: 300 }];
    host.innerHTML = hint(t("Tap (or drag) the × 10 stamp onto the division. It multiplies BOTH numbers by 10. Keep going until the divisor is a whole number.", "اضغط (أو اسحب) ختم × 10 على عملية القسمة؛ إنه يضرب العددين كليهما في 10. استمر حتى يصبح المقسوم عليه عددًا صحيحًا.")) + '<div class="seg" id="whp"></div>';
    var S = H.mk(host, 0.55, 360, 1.1);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" id="whr">↺ ' + t("Start again", "ابدأ من جديد") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Nour's jugs: 26.4 ÷ 2.2.", "أباريق نور: 26.4 ÷ 2.2."), t("Make the divisor whole: 1.5 ÷ 0.04.", "اجعل المقسوم عليه صحيحًا: 1.5 ÷ 0.04."), t("Fix the student's mistake: 77.43 ÷ 0.3.", "صحح خطأ الطالب: 77.43 ÷ 0.3.")].map(H.tx), done);
    var pi = 0, k = 0, drag = null, pop = 0;
    function v3(x) { return fm(x / 1000, 3); }
    K.seg(host, "#whp", P.map(function (p, i) { return [String(i), '<span dir="ltr">' + v3(p.a) + " ÷ " + v3(p.b) + "</span>"]; }), "0", function (v) { pi = +v; k = 0; upd(); });
    ctl.querySelector("#whr").onclick = function () { k = 0; upd(); };
    function cur() { var p = P[pi], m = Math.pow(10, k); return { A: p.a * m, B: p.b * m }; }
    function whole() { return cur().B % 1000 === 0; }
    function upd() {
      var p = P[pi], c = cur(), h = "<span>" + eq(v3(p.a) + " ÷ " + v3(p.b) + (k ? " = " + v3(c.A) + " ÷ " + v3(c.B) : "")) + "</span>";
      if (k) h += "<span class='sub'>" + t("Both numbers × ", "العددان × ") + eq(N(Math.pow(10, k))) + t(": the quotient does not change.", ": خارج القسمة لا يتغير.") + "</span>";
      if (whole()) h += "<b class='ok-t'>✔ " + t("Whole divisor! ", "المقسوم عليه صحيح! ") + eq(v3(c.A) + " ÷ " + v3(c.B) + " = " + fm(c.A / c.B, 3)) + "</b>";
      mo.innerHTML = h;
      if (whole() && P[pi].b % 1000 !== 0) tick(pi);
    }
    function stamp() { if (whole()) { E.toast(t("The divisor is already whole. Now divide!", "المقسوم عليه صحيح بالفعل. اقسم الآن!")); return; } if (k < 3) { k++; pop = 1; upd(); } }
    function sR() { return { x: S.W / 2 - 46, y: S.H - 62, w: 92, h: 46 }; }
    S.drag({
      down: function (p) { if (inR(p, sR())) { drag = { x: p.x, y: p.y, sx: p.x, sy: p.y }; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () { if (!drag) return; var tap = Math.hypot(drag.x - drag.sx, drag.y - drag.sy) < 6; if (tap || drag.y < S.H * 0.5) stamp(); drag = null; },
      hover: function (p) { return inR(p, sR()); }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, q = cur(), y = 50;
      c.clearRect(0, 0, W, Hh); H.ltr(c); pop = Math.max(0, pop - dt * 2);
      var sc = 1 + pop * 0.15, fs = 30 * sc;
      K.txt(c, v3(q.A), W / 2 - 90, y, { s: fs, c: C.ink, w: 900 }); K.txt(c, "÷", W / 2, y, { s: 28, c: C.ink }); K.txt(c, v3(q.B), W / 2 + 90, y, { s: fs, c: whole() ? "#16a34a" : "#ef4444", w: 900 });
      K.txt(c, whole() ? t("divisor is whole ✔", "المقسوم عليه صحيح ✔") : t("divisor is a decimal", "المقسوم عليه عدد عشري"), W / 2 + 90, y + 30, { s: 11, c: whole() ? "#16a34a" : "#ef4444" });
      if (whole()) {
        var Q = q.A / q.B, bx = 30, bw = W - 60, by = 110;
        K.txt(c, "= " + fm(Q, 3), W / 2, y + 56, { s: 22, c: "#9333ea", w: 900 });
        if (Q <= 60) {
          c.fillStyle = "rgba(59,130,246,.2)"; c.fillRect(bx, by + 30, bw, 26);
          var tw = bw / Q; for (var i = 0; i < Math.floor(Q); i++) { c.fillStyle = i % 2 ? "#a78bfa" : "#c4b5fd"; c.fillRect(bx + i * tw + 0.5, by + 64, tw - 1, 22); }
          if (Q % 1) { c.fillStyle = "#fde68a"; c.fillRect(bx + Math.floor(Q) * tw, by + 64, (Q % 1) * tw, 22); }
          K.txt(c, v3(q.A), bx + bw / 2, by + 43, { s: 12, c: C.ink }); K.txt(c, fm(Q, 3) + " × " + v3(q.B), bx + bw / 2, by + 100, { s: 12, c: C.ink });
        } else K.txt(c, t("That is ", "أي ") + fm(Q, 3) + t(" groups of ", " مجموعة من ") + v3(q.B), W / 2, by + 60, { s: 13, c: C.ink });
      }
      var r = sR(); if (drag) r = { x: drag.x - 46, y: drag.y - 23, w: 92, h: 46 };
      H.btn(c, r, "× 10 ⇢ " + t("both", "الاثنين"), C, true, "#f97316");
    });
  };

  /* =========================================================
     mp5_decarea - tenths × tenths on a grid with draggable sides
     ========================================================= */
  L.mp5_decarea = function (host, cfg, done) {
    host.innerHTML = hint(t("Each big square is 1 whole and each small square is 0.01. Drag the orange handle to set the width and the blue handle to set the height (in tenths). The shaded area is the product.", "كل مربع كبير يمثل واحدًا صحيحًا، وكل مربع صغير يمثل 0.01. اسحب المقبض البرتقالي لتحديد العرض والمقبض الأزرق لتحديد الارتفاع (بأجزاء من عشرة)، والمساحة المظللة هي حاصل الضرب."));
    var S = H.mk(host, 0.7, 460, 0.95);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Show 0.3 × 0.4.", "بيّن 0.3 × 0.4."), t("Show 0.5 × 0.2 and see why 0.10 = 0.1.", "بيّن 0.5 × 0.2 ولاحظ لماذا 0.10 = 0.1."), t("Show 0.7 × 0.8.", "بيّن 0.7 × 0.8."), t("Make a product greater than 1 with two factors that are not whole, like 1.3 × 1.2.", "كوّن حاصل ضرب أكبر من 1 بعاملين غير صحيحين، مثل 1.3 × 1.2.")].map(H.tx), done);
    var A = 1, B = 1, drag = null;
    function geo() { var us = Math.min((S.W - 90) / 2, (S.H - 60) / 2); return { us: us, x0: 60, y0: 30 }; }
    function upd() {
      var p = A * B, parts = [];
      if (A > 10 || B > 10) { var a1 = Math.min(A, 10), a2 = A - a1, b1 = Math.min(B, 10), b2 = B - b1; [[a1, b1], [a2, b1], [a1, b2], [a2, b2]].forEach(function (x) { if (x[0] && x[1]) parts.push(fm(x[0] / 10, 1) + " × " + fm(x[1] / 10, 1)); }); }
      mo.innerHTML = "<span>" + eq(fx(A / 10, 1) + " × " + fx(B / 10, 1) + " = " + fx(p / 100, 2) + (p % 10 === 0 ? " = " + fm(p / 100, 2) : "")) + "</span><span>" + H.loc(A) + " × " + H.loc(B) + " = " + H.loc(p) + t(" small squares = ", " مربعًا صغيرًا = ") + H.loc(p) + t(" hundredths", " جزءًا من مائة") + "</span>" +
        "<span class='sub'>" + t("1 decimal place + 1 decimal place = 2 decimal places", "رقم عشري + رقم عشري = رقمان عشريان") + "</span>" + (parts.length > 1 ? "<span>" + t("Area model: ", "نموذج المساحة: ") + eq(parts.join(" + ")) + "</span>" : "");
      var s = [A, B].sort(function (x, y) { return x - y; }).join(",");
      if (s === "3,4") tick(0); if (s === "2,5") tick(1); if (s === "7,8") tick(2);
      if (A > 10 && B > 10 && A % 10 && B % 10) tick(3);
    }
    S.drag({
      down: function (p) { var o = geo(), ts = o.us / 10, hx = o.x0 + A * ts, hy = o.y0 + B * ts;
        if (Math.hypot(p.x - hx, p.y - (o.y0 + B * ts / 2)) < 22 || (Math.abs(p.x - hx) < 12 && p.y > o.y0 && p.y < hy)) drag = "a";
        else if (Math.hypot(p.x - (o.x0 + A * ts / 2), p.y - hy) < 22 || (Math.abs(p.y - hy) < 12 && p.x > o.x0 && p.x < hx)) drag = "b";
        else if (Math.hypot(p.x - hx, p.y - hy) < 22) drag = "ab";
        else return false; return true; },
      move: function (p) { var o = geo(), ts = o.us / 10; if (drag === "a" || drag === "ab") A = Math.max(1, Math.min(20, Math.round((p.x - o.x0) / ts))); if (drag === "b" || drag === "ab") B = Math.max(1, Math.min(20, Math.round((p.y - o.y0) / ts))); upd(); },
      up: function () { drag = null; },
      hover: function (p) { var o = geo(), ts = o.us / 10; return Math.abs(p.x - (o.x0 + A * ts)) < 14 || Math.abs(p.y - (o.y0 + B * ts)) < 14; }
    });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, o = geo(), ts = o.us / 10, i;
      c.clearRect(0, 0, S.W, S.H); H.ltr(c);
      c.fillStyle = "rgba(239,68,68,.35)"; c.fillRect(o.x0, o.y0, A * ts, B * ts);
      if (A > 10 || B > 10) { c.strokeStyle = "#7f1d1d"; c.lineWidth = 2; c.setLineDash([5, 4]); if (A > 10) { c.beginPath(); c.moveTo(o.x0 + o.us, o.y0); c.lineTo(o.x0 + o.us, o.y0 + B * ts); c.stroke(); } if (B > 10) { c.beginPath(); c.moveTo(o.x0, o.y0 + o.us); c.lineTo(o.x0 + A * ts, o.y0 + o.us); c.stroke(); } c.setLineDash([]); }
      for (i = 0; i <= 20; i++) { c.strokeStyle = i % 10 === 0 ? C.ink : C.line; c.lineWidth = i % 10 === 0 ? 2 : 0.6; c.beginPath(); c.moveTo(o.x0 + i * ts, o.y0); c.lineTo(o.x0 + i * ts, o.y0 + 2 * o.us); c.stroke(); c.beginPath(); c.moveTo(o.x0, o.y0 + i * ts); c.lineTo(o.x0 + 2 * o.us, o.y0 + i * ts); c.stroke(); }
      c.strokeStyle = "#dc2626"; c.lineWidth = 2.5; c.strokeRect(o.x0, o.y0, A * ts, B * ts);
      K.dot(c, o.x0 + A * ts, o.y0 + B * ts / 2, 10, "#f97316", "rgba(0,0,0,.3)"); K.dot(c, o.x0 + A * ts / 2, o.y0 + B * ts, 10, "#3b82f6", "rgba(0,0,0,.3)");
      K.txt(c, fx(A / 10, 1), o.x0 + A * ts / 2, o.y0 - 12, { s: 14, c: "#f97316", w: 900 }); K.txt(c, fx(B / 10, 1), o.x0 - 26, o.y0 + B * ts / 2, { s: 14, c: "#3b82f6", w: 900 });
      K.txt(c, H.loc("1"), o.x0 + o.us, o.y0 + 2 * o.us + 14, { s: 11, c: C.muted }); K.txt(c, H.loc("2"), o.x0 + 2 * o.us, o.y0 + 2 * o.us + 14, { s: 11, c: C.muted });
      var px = Math.min(S.W - 70, o.x0 + 2 * o.us + 10);
      if (S.W - (o.x0 + 2 * o.us) > 90) { K.txt(c, "=", px + 30, o.y0 + o.us - 20, { s: 18, c: C.ink }); K.txt(c, fx(A * B / 100, 2), px + 30, o.y0 + o.us + 6, { s: 20, c: "#dc2626", w: 900 }); }
    });
  };

  /* =========================================================
     mp5_metric - ruler, scale and jug: metric units and powers of ten
     ========================================================= */
  L.mp5_metric = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a tool and drag: the bandage end on the ruler, the scale pointer, or the water level in the jug. Fine-tune with the buttons. Every unit shows at once.", "اختر أداة واسحب: طرف الضمادة على المسطرة، أو مؤشر الميزان، أو مستوى الماء في الإبريق، واضبط بدقة بالأزرار، وتظهر كل الوحدات معًا.")) + '<div class="seg" id="mtm"></div>';
    var S = K.make(host, 0.58, 380);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" data-d="-10">−10</button><button type="button" class="btn sm ghost" data-d="-1">−1</button><button type="button" class="btn sm ghost" data-d="1">+1</button><button type="button" class="btn sm ghost" data-d="10">+10</button><span class="sub" id="mtu"></span></div>');
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Rania needs 1.35 m of bandage: measure it on the ruler.", "تحتاج رانيا 1.35 م من الضمادات: قِسها على المسطرة."), t("Yousra's cat weighs 3.648 kg: show it on the scale.", "وزن قطة يسرا 3.648 كجم: بيّنه على الميزان."), t("Dalia's juice: 1 L − 320 mL − 250 mL. Show what is left in the jug.", "عصير داليا: 1 لتر − 320 مل − 250 مل. بيّن الباقي في الإبريق.")].map(H.tx), done);
    var mode = "len", V = { len: 500, mass: 1000, cap: 1000 }, MX = { len: 2000, mass: 5000, cap: 2000 }, drag = false;
    K.seg(host, "#mtm", [["len", "📏 " + t("Length", "الطول")], ["mass", "⚖️ " + t("Mass", "الكتلة")], ["cap", "🫗 " + t("Capacity", "السعة")]], mode, function (v) { mode = v; upd(); });
    ctl.querySelectorAll("button").forEach(function (b) { b.onclick = function () { V[mode] = Math.max(0, Math.min(MX[mode], V[mode] + +b.dataset.d)); upd(); }; });
    function upd() {
      var v = V[mode], h;
      if (mode === "len") h = eq(N(v) + " mm = " + fm(v / 10, 1) + " cm = " + fm(v / 1000, 3) + " m") + "<span class='sub'>" + eq("mm × 0.1 = cm") + " · " + eq("mm × 0.001 = m") + "</span>";
      else if (mode === "mass") h = eq(N(v) + " g = " + fm(v / 1000, 3) + " kg") + "<span class='sub'>" + eq("g × 0.001 = kg") + " · " + eq("kg × 1,000 = g") + "</span>";
      else h = eq(N(v) + " mL = " + fm(v / 1000, 3) + " L") + "<span class='sub'>" + eq("mL × 0.001 = L") + " · " + eq("L × 1,000 = mL") + "</span>";
      mo.innerHTML = "<span>" + h + "</span>";
      ctl.querySelector("#mtu").textContent = mode === "len" ? "mm" : mode === "mass" ? "g" : "mL";
      if (mode === "len" && v === 1350) tick(0);
      if (mode === "mass" && v === 3648) tick(1);
      if (mode === "cap" && v === 430) tick(2);
    }
    function set(p) {
      var W = S.W, Hh = S.H, v;
      if (mode === "len") v = (p.x - 30) / (W - 60) * 2000;
      else if (mode === "mass") { var cx = W / 2, cy = Hh * 0.72, a = Math.atan2(cy - p.y, p.x - cx); a = Math.max(0, Math.min(Math.PI, a)); v = (1 - a / Math.PI) * 5000; }
      else { var jy0 = 40, jy1 = Hh - 30; v = (jy1 - p.y) / (jy1 - jy0) * 2000; }
      V[mode] = Math.max(0, Math.min(MX[mode], Math.round(v / 10) * 10)); upd();
    }
    S.drag({ down: function (p) { drag = true; set(p); return true; }, move: function (p) { if (drag) set(p); }, up: function () { drag = false; }, hover: function () { return true; } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, v = V[mode], i;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      if (mode === "len") {
        var x0 = 30, x1 = W - 30, ry = Hh * 0.55, px = (x1 - x0) / 2000;
        K.rr(c, x0 - 6, ry, x1 - x0 + 12, 50, 6); c.fillStyle = "#fde68a"; c.fill(); c.strokeStyle = "#a16207"; c.lineWidth = 1.5; c.stroke();
        for (i = 0; i <= 200; i++) { var x = x0 + i * 10 * px, L1 = i % 100 === 0 ? 30 : i % 10 === 0 ? 20 : i % 5 === 0 ? 13 : 7; c.strokeStyle = "#713f12"; c.lineWidth = i % 10 === 0 ? 1.5 : 0.7; c.beginPath(); c.moveTo(x, ry); c.lineTo(x, ry + L1); c.stroke(); if (i % 20 === 0) K.txt(c, H.loc(i), x, ry + 40, { s: 10, c: "#713f12" }); }
        K.txt(c, "cm", x1 + 2, ry + 40, { s: 9, c: "#713f12", a: "left" });
        K.rr(c, x0, ry - 34, Math.max(4, v * px), 24, 4); c.fillStyle = "#f5f5f4"; c.fill(); c.strokeStyle = "#a8a29e"; c.stroke();
        for (i = 0; i < v * px; i += 14) { c.strokeStyle = "rgba(168,162,158,.6)"; c.beginPath(); c.moveTo(x0 + i, ry - 34); c.lineTo(x0 + i + 8, ry - 10); c.stroke(); }
        K.dot(c, x0 + v * px, ry - 22, 11, "#f97316", "rgba(0,0,0,.3)");
        K.txt(c, fm(v / 1000, 3) + " m", Math.min(W - 50, Math.max(50, x0 + v * px)), ry - 52, { s: 15, c: "#f97316", w: 900 });
      } else if (mode === "mass") {
        var cx = W / 2, cy = Hh * 0.72, R = Math.min(W * 0.38, Hh * 0.6);
        c.fillStyle = C.card; c.beginPath(); c.arc(cx, cy, R, Math.PI, 0); c.closePath(); c.fill(); c.strokeStyle = C.ink; c.lineWidth = 2; c.stroke();
        for (i = 0; i <= 50; i++) { var a = Math.PI - i / 50 * Math.PI, l = i % 10 === 0 ? 18 : i % 5 === 0 ? 12 : 6; c.strokeStyle = C.ink; c.lineWidth = i % 10 === 0 ? 2 : 1; c.beginPath(); c.moveTo(cx + Math.cos(a) * R, cy - Math.sin(a) * R); c.lineTo(cx + Math.cos(a) * (R - l), cy - Math.sin(a) * (R - l)); c.stroke(); if (i % 10 === 0) K.txt(c, H.loc(i / 10) + " kg", cx + Math.cos(a) * (R - 34), cy - Math.sin(a) * (R - 34), { s: 11, c: C.muted }); }
        var an = Math.PI - v / 5000 * Math.PI; c.strokeStyle = "#ef4444"; c.lineWidth = 3; c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx + Math.cos(an) * (R - 8), cy - Math.sin(an) * (R - 8)); c.stroke(); K.dot(c, cx, cy, 7, "#ef4444");
        K.txt(c, "🐈", cx, cy - R - 2 > 14 ? cy - R - 6 : 16, { s: 22 });
        K.txt(c, N(v) + " g", cx, cy + 20, { s: 17, c: "#ef4444", w: 900 });
      } else {
        var jx = W / 2 - 60, jw = 120, jy0 = 40, jy1 = Hh - 30, wy = jy1 - v / 2000 * (jy1 - jy0);
        c.fillStyle = "rgba(220,38,38,.55)"; c.fillRect(jx, wy, jw, jy1 - wy);
        c.strokeStyle = C.ink; c.lineWidth = 2.5; c.beginPath(); c.moveTo(jx, jy0 - 10); c.lineTo(jx, jy1); c.lineTo(jx + jw, jy1); c.lineTo(jx + jw, jy0 - 10); c.stroke();
        for (i = 0; i <= 20; i++) { var yy = jy1 - i / 20 * (jy1 - jy0); c.strokeStyle = C.ink; c.lineWidth = i % 5 === 0 ? 1.5 : 0.7; c.beginPath(); c.moveTo(jx + jw, yy); c.lineTo(jx + jw + (i % 5 === 0 ? 16 : 8), yy); c.stroke(); if (i % 5 === 0) K.txt(c, N(i * 100) + " mL", jx + jw + 22, yy, { s: 10, c: C.muted, a: "left" }); }
        K.dot(c, jx - 14, wy, 10, "#3b82f6", "rgba(0,0,0,.3)");
        K.txt(c, N(v) + " mL", jx - 30, wy, { s: 14, c: "#3b82f6", w: 900, a: "right" });
        K.txt(c, t("karkade", "كركديه"), jx + jw / 2, jy1 - 14, { s: 11, c: "#fff" });
      }
    });
  };

  /* =========================================================
     mp5_order - order of operations: tap the next operation
     ========================================================= */
  L.mp5_order = function (host, cfg, done) {
    var EX = [{ n: [300.53, 11.04, 0.2, 0.01, 13.07], o: ["−", "×", "÷", "+"] }, { n: [10, 4, 3], o: ["×", "−"] }, { n: [12, 24, 4, 8], o: ["+", "÷", "+"] }];
    host.innerHTML = hint(t("Tap the operation that comes next: parentheses first, then × and ÷ from left to right, then + and − from left to right. Before you start, tap two numbers to put parentheses around them.", "اضغط على العملية التالية: الأقواس أولًا، ثم الضرب والقسمة من اليسار، ثم الجمع والطرح من اليسار. وقبل أن تبدأ اضغط على عددين لتضع أقواسًا حولهما.")) + '<div class="seg" id="oxs"></div>';
    var S = H.mk(host, 0.42, 300, 0.75);
    var ctl = H.ctl(host, '<div class="btn-row"><button type="button" class="btn sm ghost" id="oxr">↺ ' + t("Start again", "ابدأ من جديد") + "</button></div>");
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Drive Ali's bus: evaluate 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07 in the right order.", "قُد حافلة علي: أوجد قيمة 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07 بالترتيب الصحيح."), t("Make it smaller: use parentheses so 10 × 4 − 3 equals 10.", "اجعله أصغر: استخدم الأقواس ليصبح 10 × 4 − 3 مساويًا 10."), t("Use parentheses so 12 + 24 ÷ 4 + 8 equals 14.", "استخدم الأقواس ليصبح 12 + 24 ÷ 4 + 8 مساويًا 14.")].map(H.tx), done);
    var xi = 0, nums, ops, par, pick, hist, rects = [], shake = 0, flash = -1, ft = 0;
    K.seg(host, "#oxs", EX.map(function (e, i) { return [String(i), '<span dir="ltr">' + H.loc(e.n.map(function (x, j) { return String(x) + (j < e.o.length ? " " + e.o[j] + " " : ""); }).join("")) + "</span>"]; }), "0", function (v) { xi = +v; reset(); });
    ctl.querySelector("#oxr").onclick = function () { reset(); };
    function reset() { nums = EX[xi].n.slice(); ops = EX[xi].o.slice(); par = null; pick = -1; hist = []; upd(); }
    function f(a, o, b) { var r = o === "+" ? a + b : o === "−" ? a - b : o === "×" ? a * b : a / b; return Math.round(r * 1e9) / 1e9; }
    function nextOp() {
      var lo = 0, hi = ops.length - 1, i;
      if (par) { lo = par[0]; hi = par[1] - 1; }
      for (i = lo; i <= hi; i++) if (ops[i] === "×" || ops[i] === "÷") return i;
      return lo;
    }
    function tapOp(i) {
      var nx = nextOp();
      if (i !== nx) {
        shake = 0.5;
        E.toast(par && (i < par[0] || i >= par[1]) ? t("Inside the parentheses first.", "ما داخل الأقواس أولًا.") : (ops[nx] === "×" || ops[nx] === "÷") && ops[i] !== "×" && ops[i] !== "÷" ? t("× and ÷ come before + and −.", "الضرب والقسمة قبل الجمع والطرح.") : t("Go from left to right.", "ابدأ من اليسار إلى اليمين."));
        return;
      }
      var r = f(nums[i], ops[i], nums[i + 1]);
      hist.push(eq(fm(nums[i], 4) + " " + ops[i] + " " + fm(nums[i + 1], 4) + " = " + fm(r, 4)));
      nums.splice(i, 2, r); ops.splice(i, 1);
      if (par) { par[1]--; if (par[1] <= par[0]) par = null; }
      flash = i; ft = 1; upd();
      if (nums.length === 1) {
        var v = nums[0];
        if (xi === 0 && Math.abs(v - 92.8) < 1e-9) tick(0);
        if (xi === 1 && v === 10) tick(1);
        if (xi === 2 && v === 14) tick(2);
        E.speak(t("The value is ", "القيمة ") + fm(v, 4));
      }
    }
    function tapNum(i) {
      if (hist.length) { E.toast(t("Parentheses go in before the first step. Press Start again.", "توضع الأقواس قبل الخطوة الأولى. اضغط ابدأ من جديد.")); return; }
      if (par) { par = null; pick = -1; upd(); return; }
      if (pick < 0) { pick = i; }
      else { var a = Math.min(pick, i), b = Math.max(pick, i); if (a !== b && !(a === 0 && b === nums.length - 1)) par = [a, b]; pick = -1; }
      upd();
    }
    function upd() {
      var h = hist.map(function (x, i) { return "<span>" + t("Step ", "الخطوة ") + H.loc(i + 1) + ": " + x + "</span>"; }).join("");
      if (nums.length === 1) h += "<b class='ok-t'>" + t("Value: ", "القيمة: ") + eq(fm(nums[0], 4)) + "</b>";
      else if (!hist.length) h += "<span class='sub'>" + (par ? t("Parentheses placed. Now tap the operations.", "وُضعت الأقواس. اضغط الآن على العمليات.") : pick >= 0 ? t("Now tap the last number inside the parentheses.", "اضغط الآن على آخر عدد داخل الأقواس.") : t("Tap an operation, or two numbers for parentheses.", "اضغط على عملية، أو على عددين لوضع أقواس.")) + "</span>";
      mo.innerHTML = h;
    }
    S.drag({ down: function (p) { for (var i = 0; i < rects.length; i++) if (inR(p, rects[i])) { if (rects[i].k === "o") tapOp(rects[i].i); else tapNum(rects[i].i); return true; } return false; }, hover: function (p) { return rects.some(function (r) { return inR(p, r); }); } });
    reset();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, i;
      c.clearRect(0, 0, W, Hh); H.ltr(c); shake = Math.max(0, shake - dt); ft = Math.max(0, ft - dt * 2);
      var labs = nums.map(function (x) { return fm(x, 4); }), fs = 20, wN = labs.map(function (s) { return s.length * fs * 0.55 + 22; }), wO = 44, pw = par ? 2 * 16 : 0;
      var tot = wN.reduce(function (a, b) { return a + b; }, 0) + ops.length * (wO + 8) + nums.length * 8 + pw;
      if (tot > W - 20) { var k = (W - 20) / tot; fs *= k; wN = wN.map(function (x) { return x * k; }); wO *= k; tot = W - 20; }
      var x = (W - tot) / 2, y = Hh * 0.42, h = 50, sx = Math.sin(shake * 40) * shake * 10; rects = [];
      for (i = 0; i < nums.length; i++) {
        if (par && par[0] === i) { K.txt(c, "(", x + 6 + sx, y + h / 2, { s: 34, c: "#9333ea", w: 900 }); x += 16; }
        var r = { x: x + sx, y: y, w: wN[i], h: h, k: "n", i: i };
        K.rr(c, r.x, r.y, r.w, r.h, 10); c.fillStyle = pick === i ? "rgba(147,51,234,.25)" : (flash === i && ft > 0 ? "rgba(34,197,94," + (0.5 * ft) + ")" : C.card); c.fill(); c.strokeStyle = C.line; c.lineWidth = 1.5; c.stroke();
        K.txt(c, labs[i], r.x + r.w / 2, y + h / 2, { s: fs, c: C.ink, w: 900 }); rects.push(r); x += wN[i] + 8;
        if (par && par[1] === i) { K.txt(c, ")", x - 2 + sx, y + h / 2, { s: 34, c: "#9333ea", w: 900 }); x += 16; }
        if (i < ops.length) { var ro = { x: x + sx, y: y + 4, w: wO, h: h - 8, k: "o", i: i }; H.btn(c, ro, ops[i], C, true, ops[i] === "×" || ops[i] === "÷" ? "#f97316" : "#3b82f6"); rects.push(ro); x += wO + 8; }
      }
      K.txt(c, nums.length > 1 ? t("× ÷ first (orange), then + − (blue), left to right", "الضرب والقسمة أولًا (برتقالي) ثم الجمع والطرح (أزرق) من اليسار") : t("Done!", "انتهيت!"), W / 2, y + h + 30, { s: 12, c: C.muted });
    });
  };

  /* =========================================================
     mp5_build - write an expression for a story with tiles
     ========================================================= */
  L.mp5_build = function (host, cfg, done) {
    var ST = [{ q: t("Subtract 3.1 from 4.62. Then multiply the result by 2.", "اطرح 3.1 من 4.62، ثم اضرب الناتج في 2."), n: [4.62, 3.1, 2], v: 3.04 },
      { q: t("Kamel has 1,000 LE and saves 50 LE + 30 LE a week for 4 weeks. How much does he have?", "مع كامل 1,000 جنيه ويدخر 50 + 30 جنيهًا أسبوعيًا لمدة 4 أسابيع. كم يصبح معه؟"), n: [1000, 50, 30, 4], v: 1320 },
      { q: t("Hoda pours 15.75 L into 16 vases and keeps 3.75 L. How much in each vase?", "تصب هدى 15.75 لترًا في 16 مزهرية ويتبقى معها 3.75 لتر. كم في كل مزهرية؟"), n: [15.75, 3.75, 16], v: 0.75 }];
    var OP = ["+", "−", "×", "÷", "(", ")"];
    host.innerHTML = hint(t("Read the story and tap tiles to build ONE expression that uses every number. Use parentheses when a step must come first.", "اقرأ القصة واضغط على البطاقات لتكوّن مقدارًا واحدًا يستخدم كل الأعداد، واستخدم الأقواس عندما يجب أن تأتي خطوة أولًا.")) + '<div class="seg" id="bds"></div>';
    var S = H.mk(host, 0.52, 340, 0.9);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Write and evaluate the expression for story 1.", "اكتب مقدار القصة 1 وأوجد قيمته."), t("Kamel's savings.", "مدخرات كامل."), t("Hoda's vases.", "مزهريات هدى.")].map(H.tx), done);
    var si = 0, tok = [], rects = [];
    K.seg(host, "#bds", ST.map(function (s, i) { return [String(i), t("Story ", "القصة ") + H.loc(i + 1)]; }), "0", function (v) { si = +v; tok = []; upd(); });
    function used(i) { return tok.some(function (x) { return x.k === "n" && x.i === i; }); }
    function parse() {
      var p = 0;
      function fac() { var x = tok[p]; if (!x) return null; if (x.k === "n") { p++; return ST[si].n[x.i]; } if (x.v === "(") { p++; var v = ex(); if (v == null || !tok[p] || tok[p].v !== ")") return null; p++; return v; } return null; }
      function term() { var v = fac(); while (v != null && tok[p] && (tok[p].v === "×" || tok[p].v === "÷")) { var o = tok[p++].v, b = fac(); if (b == null) return null; v = o === "×" ? v * b : v / b; } return v; }
      function ex() { var v = term(); while (v != null && tok[p] && (tok[p].v === "+" || tok[p].v === "−")) { var o = tok[p++].v, b = term(); if (b == null) return null; v = o === "+" ? v + b : v - b; } return v; }
      var v = ex(); return (v == null || p !== tok.length) ? null : Math.round(v * 1e9) / 1e9;
    }
    function txt() { return tok.map(function (x) { return x.k === "n" ? fm(ST[si].n[x.i], 4) : x.v; }).join(" "); }
    function upd() {
      var v = parse(), all = ST[si].n.every(function (x, i) { return used(i); });
      mo.innerHTML = "<span class='sub' style='width:100%'>📖 " + H.tx(ST[si].q) + "</span><span>" + (tok.length ? eq(txt()) : t("Tap tiles to start.", "اضغط على البطاقات لتبدأ.")) + "</span>" + (v == null ? (tok.length ? "<span class='sub'>" + t("Not finished yet", "لم يكتمل بعد") + "</span>" : "") : "<span>" + eq("= " + fm(v, 4)) + "</span>") +
        (v != null && all ? (Math.abs(v - ST[si].v) < 1e-9 ? "<b class='ok-t'>✔ " + t("That matches the story!", "هذا يطابق القصة!") + "</b>" : "<b class='no-t'>" + t("Uses every number, but check the order of the steps.", "يستخدم كل الأعداد، لكن راجع ترتيب الخطوات.") + "</b>") : "");
      if (v != null && all && Math.abs(v - ST[si].v) < 1e-9) tick(si);
    }
    function tap(r) {
      if (r.k === "n") { if (used(r.i)) return; tok.push({ k: "n", i: r.i }); }
      else if (r.k === "o") tok.push({ k: "o", v: r.v });
      else if (r.k === "bk") tok.pop();
      else if (r.k === "cl") tok = [];
      upd();
    }
    S.drag({ down: function (p) { for (var i = 0; i < rects.length; i++) if (inR(p, rects[i])) { tap(rects[i]); return true; } return false; }, hover: function (p) { return rects.some(function (r) { return inR(p, r); }); } });
    upd();
    S.loop(function () {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, s = ST[si], i;
      c.clearRect(0, 0, W, Hh); H.ltr(c);
      K.rr(c, 14, 14, W - 28, 52, 10); c.fillStyle = C.card; c.fill(); c.strokeStyle = "#9333ea"; c.lineWidth = 2; c.stroke();
      var tx = txt(), fs = Math.min(22, (W - 50) / Math.max(1, tx.length) * 1.7);
      K.txt(c, tx || "…", W / 2, 40, { s: fs, c: C.ink, w: 900 });
      var v = parse(); if (v != null) K.txt(c, "= " + fm(v, 4), W - 24, 82, { s: 14, c: "#9333ea", w: 900, a: "right" });
      rects = [];
      var nw = Math.min(110, (W - 40) / s.n.length - 10), y1 = Hh * 0.5;
      for (i = 0; i < s.n.length; i++) { var r = { x: W / 2 + (i - (s.n.length - 1) / 2) * (nw + 10) - nw / 2, y: y1, w: nw, h: 44, k: "n", i: i }; H.btn(c, r, fm(s.n[i], 4), C, !used(i), "#0ea5e9"); rects.push(r); }
      var ow = Math.min(54, (W - 40) / 8 - 8), y2 = y1 + 58, all = OP.concat(["⌫", "✖"]);
      for (i = 0; i < all.length; i++) { var ro = { x: W / 2 + (i - (all.length - 1) / 2) * (ow + 8) - ow / 2, y: y2, w: ow, h: 42, k: i < 6 ? "o" : i === 6 ? "bk" : "cl", v: all[i] }; H.btn(c, ro, all[i], C, i < 6, i < 4 ? "#f97316" : "#64748b"); rects.push(ro); }
    });
  };

  /* =========================================================
     mp5_rule - input-output machine: find the rule
     ========================================================= */
  L.mp5_rule = function (host, cfg, done) {
    var TG = [{ nm: t("Bicycle wheels", "عجلات الدراجات"), i: [1, 2, 3, 4, 5], o: [2, 4, 6, 8, 10] }, { nm: t("Yahia or Walid?", "يحيى أم وليد؟"), i: [4, 5, 6, 7], o: [28, 35, 42, 49] }, { nm: "85, 73, 61, 49, 37", i: [85, 73, 61, 49], o: [73, 61, 49, 37] }, { nm: "1.5, 3, 4.5, 6, 7.5", i: [1.5, 3, 4.5, 6], o: [3, 4.5, 6, 7.5] }];
    var OP = ["+", "−", "×", "÷"];
    host.innerHTML = hint(t("Choose an operation and drag the number slider to build the machine's rule. When every output matches the table, you found the rule. (For a pattern, each term goes in and the next term comes out.)", "اختر عملية واسحب منزلق العدد لتبني قاعدة الآلة، وعندما تتطابق كل المخرجات مع الجدول تكون قد وجدت القاعدة. (في النمط يدخل كل حد ويخرج الحد التالي.)")) + '<div class="seg" id="rls"></div>';
    var S = H.mk(host, 0.6, 400, 1.05);
    var mo = H.meter(host);
    var tick = L._goals(host, [t("Find the rule for bicycle wheels.", "أوجد قاعدة عجلات الدراجات."), t("4 → 28, 5 → 35: find the rule.", "4 ← 28 و5 ← 35: أوجد القاعدة."), t("Find the rule of 85, 73, 61, 49, 37.", "أوجد قاعدة النمط 85 و73 و61 و49 و37."), t("Find the rule of 1.5, 3, 4.5, 6, 7.5.", "أوجد قاعدة النمط 1.5 و3 و4.5 و6 و7.5.")].map(H.tx), done);
    var ti = 0, op = 0, kv = 1, drag = false, rects = [], spin = 0;
    K.seg(host, "#rls", TG.map(function (g, i) { return [String(i), '<span dir="ltr">' + H.tx(g.nm) + "</span>"]; }), "0", function (v) { ti = +v; upd(); });
    function f(n) { var r = op === 0 ? n + kv : op === 1 ? n - kv : op === 2 ? n * kv : (kv ? n / kv : NaN); return Math.round(r * 1e6) / 1e6; }
    function ok() { var g = TG[ti]; return g.i.every(function (n, j) { return f(n) === g.o[j]; }); }
    function upd() {
      var g = TG[ti], good = ok();
      mo.innerHTML = "<span>" + t("Rule: ", "القاعدة: ") + eq("n " + OP[op] + " " + fm(kv, 1)) + "</span>" + (good ? "<b class='ok-t'>✔ " + t("Every pair works!", "كل الأزواج تتحقق!") + "</b>" : "<span class='sub'>" + t("Matches: ", "المتطابق: ") + eq(H.loc(g.i.filter(function (n, j) { return f(n) === g.o[j]; }).length) + " / " + H.loc(g.i.length)) + "</span>");
      if (good) tick(ti);
    }
    function sl() { return { x0: 40, x1: S.W - 40, y: S.H - 30 }; }
    function setK(p) { var s = sl(); kv = Math.max(0, Math.min(20, Math.round((p.x - s.x0) / (s.x1 - s.x0) * 40) / 2)); upd(); }
    S.drag({
      down: function (p) { for (var i = 0; i < rects.length; i++) if (inR(p, rects[i])) { op = rects[i].i; upd(); return true; } if (p.y > S.H - 56) { drag = true; setK(p); return true; } return false; },
      move: function (p) { if (drag) setK(p); }, up: function () { drag = false; },
      hover: function (p) { return p.y > S.H - 56 || rects.some(function (r) { return inR(p, r); }); }
    });
    upd();
    S.loop(function (dt) {
      var c = S.ctx, C = S.C, W = S.W, Hh = S.H, g = TG[ti], good = ok(), i;
      c.clearRect(0, 0, W, Hh); H.ltr(c); if (good) spin += dt * 3;
      var mx = W * 0.06, mw = Math.min(200, W * 0.34), my = 30, mh = 110;
      K.rr(c, mx, my, mw, mh, 14); c.fillStyle = good ? "rgba(34,197,94,.25)" : "rgba(147,51,234,.15)"; c.fill(); c.strokeStyle = good ? "#16a34a" : "#9333ea"; c.lineWidth = 2.5; c.stroke();
      for (i = 0; i < 2; i++) { var gx = mx + 30 + i * (mw - 60), gy = my + 26; c.save(); c.translate(gx, gy); c.rotate(spin * (i ? -1 : 1)); for (var k = 0; k < 8; k++) { c.rotate(Math.PI / 4); c.fillStyle = C.muted; c.fillRect(-3, -14, 6, 8); } c.restore(); K.dot(c, gx, gy, 9, C.muted); }
      K.txt(c, "n " + OP[op] + " " + fm(kv, 1), mx + mw / 2, my + mh * 0.68, { s: 22, c: C.ink, w: 900 });
      rects = []; var bw = 40;
      var two = mx + 4 * (bw + 8) > mx + mw + 20;
      for (i = 0; i < 4; i++) { var r = two ? { x: mx + (i % 2) * (bw + 8), y: my + mh + 12 + Math.floor(i / 2) * 44, w: bw, h: 38, i: i } : { x: mx + i * (bw + 8), y: my + mh + 12, w: bw, h: 38, i: i }; H.btn(c, r, OP[i], C, op === i, "#9333ea"); rects.push(r); }
      var tx = mx + mw + 30, cw = Math.min(90, (W - tx - 20) / 3), rh = Math.min(30, (Hh - 110) / (g.i.length + 1));
      K.txt(c, t("in", "المدخل"), tx + cw / 2, 30, { s: 12, c: C.muted }); K.txt(c, t("machine", "الآلة"), tx + cw * 1.5, 30, { s: 12, c: C.muted }); K.txt(c, t("table", "الجدول"), tx + cw * 2.5, 30, { s: 12, c: C.muted });
      for (i = 0; i < g.i.length; i++) {
        var y = 30 + (i + 1) * rh, out = f(g.i[i]), hit = out === g.o[i];
        K.txt(c, fm(g.i[i], 2), tx + cw / 2, y, { s: 15, c: C.ink, w: 800 });
        K.txt(c, isFinite(out) ? fm(out, 2) : "–", tx + cw * 1.5, y, { s: 15, c: hit ? "#16a34a" : "#ef4444", w: 900 });
        K.txt(c, fm(g.o[i], 2) + (hit ? " ✔" : ""), tx + cw * 2.5, y, { s: 15, c: C.ink, w: 800 });
      }
      var s = sl(); c.strokeStyle = C.line; c.lineWidth = 6; c.lineCap = "round"; c.beginPath(); c.moveTo(s.x0, s.y); c.lineTo(s.x1, s.y); c.stroke(); c.lineCap = "butt";
      for (i = 0; i <= 20; i += 2) K.txt(c, H.loc(i), s.x0 + i / 20 * (s.x1 - s.x0), s.y + 16, { s: 9, c: C.muted });
      var hx = s.x0 + kv / 20 * (s.x1 - s.x0); K.dot(c, hx, s.y, 12, "#9333ea", "rgba(0,0,0,.3)"); K.txt(c, fm(kv, 1), hx, s.y - 20, { s: 13, c: "#9333ea", w: 900 });
    });
  };
})();
/* ---------- Primary 5 maths: objectives, extra quiz items, tappable diagrams, lab names, Arabic digits ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t;
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;

  /* ---------- "In this lesson" objectives (from the book's learning targets) ---------- */
  var O = {
    mp5u1l1: [["Read and write decimals to the thousandths", "قراءة الأعداد العشرية حتى جزء من ألف وكتابتها"], ["How a digit's value changes when it moves left or right", "كيف تتغير قيمة الرقم عندما ينتقل يسارًا أو يمينًا"], ["Multiply and divide by 10 with a place-value chart", "الضرب والقسمة على 10 باستخدام جدول القيمة المكانية"], ["Compose and decompose decimals in many ways", "تكوين الأعداد العشرية وتحليلها بطرق متعددة"]],
    mp5u1l2: [["Compare decimals to the thousandths with >, < and =", "مقارنة الأعداد العشرية حتى جزء من ألف باستخدام > و< و="], ["Zeros at the end do not change a decimal", "الأصفار في النهاية لا تغير العدد العشري"], ["Round with the midpoint on a number line", "التقريب باستخدام نقطة المنتصف على خط الأعداد"], ["Round to the nearest whole, Tenth or Hundredth", "التقريب لأقرب عدد صحيح أو جزء من عشرة أو جزء من مائة"]],
    mp5u1l3: [["Estimate decimal sums with benchmark and rounded numbers", "تقدير ناتج جمع الأعداد العشرية بالأعداد المرجعية والتقريب"], ["Model decimal addition on hundredths grids", "نمذجة جمع الأعداد العشرية على شبكات المائة"], ["Regroup 100 hundredths as 1 whole", "إعادة تجميع 100 جزء من مائة في واحد صحيح"], ["Add decimals by lining up the decimal points", "جمع الأعداد العشرية بوضع العلامات العشرية تحت بعضها"]],
    mp5u1l4: [["Model subtraction: shade the minuend, cross out the subtrahend", "نمذجة الطرح: ظلل المطروح منه واشطب المطروح"], ["Estimate differences and check reasonableness", "تقدير ناتج الطرح والتحقق من معقولية الناتج"], ["Subtract to the thousandths with regrouping", "الطرح حتى جزء من ألف مع إعادة التجميع"], ["Solve decimal story problems", "حل مسائل كلامية على الأعداد العشرية"]],
    mp5u2l1: [["The difference between expressions and equations", "الفرق بين المقدار والمعادلة"], ["Use letters for unknowns", "استخدام الحروف للتعبير عن المجهول"], ["Find the unknown with inverse operations", "إيجاد المجهول بالعمليات العكسية"], ["Write stories for equations", "كتابة قصص للمعادلات"]],
    mp5u2l2: [["Prime and composite numbers", "الأعداد الأولية وغير الأولية"], ["Build factor trees to find the prime factorization", "بناء شجرة العوامل لإيجاد التحليل إلى العوامل الأولية"], ["Find common factors and the G.C.F", "إيجاد العوامل المشتركة والعامل المشترك الأكبر"], ["Use the G.C.F in real problems", "استخدام ع.م.أ في مسائل حياتية"]],
    mp5u2l3: [["Multiples by skip counting", "المضاعفات بالعد بالقفز"], ["Common multiples of two numbers", "المضاعفات المشتركة لعددين"], ["Find the L.C.M", "إيجاد المضاعف المشترك الأصغر"], ["Decide: G.C.F or L.C.M?", "التمييز: ع.م.أ أم م.م.أ؟"]],
    mp5u3l1: [["Multiply with an area model", "الضرب باستخدام نموذج المساحة"], ["Decompose factors by place value", "تحليل العوامل حسب القيمة المكانية"], ["Find and add partial products", "إيجاد حواصل الضرب الجزئية وجمعها"], ["The distributive property of multiplication", "خاصية التوزيع في الضرب"]],
    mp5u3l2: [["Multiply by a 2-digit number with the standard algorithm", "الضرب في عدد مكون من رقمين بالخوارزمية القياسية"], ["Carries and the placeholder zero", "الحمل وصفر حفظ المكان"], ["Multiply 4-digit numbers by 2-digit numbers", "ضرب أعداد من 4 أرقام في أعداد من رقمين"], ["Check with estimation", "التحقق بالتقدير"]],
    mp5u3l3: [["Find the group size and the number of groups", "تحديد حجم المجموعة وعدد المجموعات"], ["Plan multistep problems", "التخطيط للمسائل متعددة الخطوات"], ["Multiply and convert units", "الضرب وتحويل الوحدات"], ["Label answers with units", "كتابة الوحدات مع النواتج"]],
    mp5u4l1: [["Divide with an area model", "القسمة باستخدام نموذج المساحة"], ["Partial quotients and the remainder", "خوارج القسمة الجزئية والباقي"], ["Estimate with compatible numbers", "التقدير بالأعداد المتوافقة"], ["Check reasonableness", "التحقق من معقولية الناتج"]],
    mp5u4l2: [["The division algorithm: divide, multiply, subtract, bring down", "خوارزمية القسمة: نقسم، نضرب، نطرح، ننزل"], ["Divide by a 2-digit divisor", "القسمة على عدد من رقمين"], ["Zeros in the quotient", "الأصفار في خارج القسمة"], ["Check division with multiplication", "التحقق من القسمة بالضرب"]],
    mp5u4l3: [["Plan multistep problems with bar models", "التخطيط للمسائل متعددة الخطوات بنموذج الشريط"], ["Use all four operations", "استخدام العمليات الأربع"], ["Interpret remainders", "تفسير الباقي"], ["Compare choices", "المقارنة بين الاختيارات"]],
    mp5u5l1: [["Patterns when multiplying by 10, 100, 1,000", "الأنماط عند الضرب في 10 و100 و1,000"], ["Patterns when multiplying by 0.1, 0.01, 0.001", "الأنماط عند الضرب في 0.1 و0.01 و0.001"], ["Multiply a decimal by a whole number", "ضرب عدد عشري في عدد صحيح"], ["Place the decimal point in the product", "وضع العلامة العشرية في الناتج"]],
    mp5u5l2: [["Tenths × tenths = hundredths", "أجزاء من عشرة × أجزاء من عشرة = أجزاء من مائة"], ["Multiply decimals with an area model", "ضرب الأعداد العشرية بنموذج المساحة"], ["The standard algorithm through the thousandths", "الخوارزمية القياسية حتى جزء من ألف"], ["Count decimal places and estimate", "عد الأرقام العشرية والتقدير"]],
    mp5u5l3: [["Metric units and powers of ten", "الوحدات المترية وقوى العشرة"], ["Convert by multiplying by powers of ten", "التحويل بالضرب في قوى العشرة"], ["Equivalent measurements as decimals", "قياسات مكافئة في صورة أعداد عشرية"], ["Multistep measurement problems", "مسائل قياس متعددة الخطوات"]],
    mp5u5l4: [["Patterns when dividing by powers of ten", "الأنماط عند القسمة على قوى العشرة"], ["Multiplying and dividing by powers of ten are linked", "الربط بين الضرب والقسمة على قوى العشرة"], ["Divide decimals by whole numbers", "قسمة الأعداد العشرية على أعداد صحيحة"], ["Divide by a decimal: make the divisor whole", "القسمة على عدد عشري: اجعل المقسوم عليه صحيحًا"]],
    mp5u6l1: [["The order of operations", "ترتيب العمليات"], ["× and ÷ before + and −, left to right", "الضرب والقسمة قبل الجمع والطرح من اليسار إلى اليمين"], ["Parentheses and brackets come first", "الأقواس العادية والمربعة أولًا"], ["Parentheses can change the value", "الأقواس قد تغير القيمة"]],
    mp5u6l2: [["Turn words into operations", "تحويل الكلمات إلى عمليات"], ["Use parentheses for \"the result\"", "استخدام الأقواس مع كلمة \"الناتج\""], ["Write one expression for a story", "كتابة مقدار واحد لقصة"], ["Evaluate the expression", "إيجاد قيمة المقدار"]],
    mp5u6l3: [["Decide if numbers form a pattern", "تحديد ما إذا كانت الأعداد تكوّن نمطًا"], ["Find and explain the rule", "إيجاد القاعدة وشرحها"], ["Write rules with a variable", "كتابة القاعدة باستخدام متغير"], ["Test a rule on every pair", "اختبار القاعدة على كل زوج"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return x[1]; }) }; });

  /* ---------- extra hands-on quiz items (order / match / tf) ---------- */
  function tf(a, q, off, sto) { return { k: "tf", a: a, q: q, off: off, sto: sto }; }
  EX.mp5u1l1 = [
    { k: "order", q: ["Order the places from the greatest value to the smallest.", "رتّب الخانات من الأكبر قيمة إلى الأصغر."], items: [["Ones", "الآحاد"], ["Tenths", "أجزاء من عشرة"], ["Hundredths", "أجزاء من مائة"], ["Thousandths", "أجزاء من ألف"]],
      off: ["Each place is 10 times the place to its right.", "كل خانة تساوي 10 أمثال الخانة التي على يمينها."], sto: ["Salma's houses get smaller as she walks right of the point.", "تصغر بيوت سلمى كلما سارت يمين العلامة."] },
    tf(true, ["True or false: 6.5 × 10 = 65 because every digit moves one place to the left.", "صواب أم خطأ: 6.5 × 10 = 65 لأن كل رقم ينتقل خانة إلى اليسار."], ["True. The 6 becomes 6 tens and the 5 becomes 5 ones.", "صواب؛ الرقم 6 يصبح 6 عشرات، والرقم 5 يصبح 5 آحاد."], ["Every digit climbs one house up to the left.", "كل رقم يصعد بيتًا واحدًا إلى اليسار."])
  ];
  EX.mp5u1l2 = [
    { k: "order", q: ["Order from smallest to greatest.", "رتّب من الأصغر إلى الأكبر."], items: [["20.001", "20.001"], ["20.01", "20.01"], ["20.09", "20.09"], ["20.1", "20.1"]],
      off: ["Compare the Tenths, then the Hundredths, then the Thousandths: 20.001 < 20.010 < 20.090 < 20.100.", "نقارن أجزاء العشرة ثم المائة ثم الألف: 20.001 < 20.010 < 20.090 < 20.100."], sto: ["Write them all with three decimal places and they line up like a queue.", "اكتبها كلها بثلاثة أرقام عشرية فتصطف كطابور."] },
    tf(false, ["True or false: a decimal with more digits is always greater.", "صواب أم خطأ: العدد العشري الذي أرقامه أكثر يكون دائمًا الأكبر."], ["False. 1.401 has more digits than 1.49 but 1.401 < 1.49.", "خطأ؛ للعدد 1.401 أرقام أكثر من 1.49 لكن 1.401 < 1.49."], ["Nour's long number lost to Mazen's short one.", "خسر عدد نور الطويل أمام عدد مازن القصير."])
  ];
  EX.mp5u1l3 = [
    { k: "match", q: ["Match each sum to its value.", "صِل كل عملية جمع بناتجها."], pairs: [[["0.13 + 0.23", "0.13 + 0.23"], ["0.36", "0.36"]], [["0.97 + 0.42", "0.97 + 0.42"], ["1.39", "1.39"]], [["0.05 + 0.05", "0.05 + 0.05"], ["0.1", "0.1"]], [["0.45 + 0.84", "0.45 + 0.84"], ["1.29", "1.29"]]],
      off: ["Add hundredths to hundredths and regroup 100 hundredths as 1 whole.", "نجمع أجزاء المائة معًا ونعيد تجميع كل 100 جزء من مائة في واحد صحيح."], sto: ["Count the coloured squares on the grids.", "عُدّ المربعات الملونة على الشبكات."] },
    tf(true, ["True or false: 4.981 + 5.019 is about 10.", "صواب أم خطأ: ناتج 4.981 + 5.019 يقارب 10."], ["True. 4.981 ≈ 5 and 5.019 ≈ 5; in fact the sum is exactly 10.", "صواب؛ 4.981 ≈ 5 و5.019 ≈ 5، والمجموع في الحقيقة 10 تمامًا."], ["Both numbers are almost 5, so together they are almost 10.", "كل عدد يقارب 5، فمعًا يقاربان 10."])
  ];
  EX.mp5u1l4 = [
    { k: "order", q: ["Order the steps to subtract 22.9 − 15.24.", "رتّب خطوات طرح 22.9 − 15.24."], items: [["Estimate: 23 − 15 = 8", "قدّر: 23 − 15 = 8"], ["Line up the decimal points", "ضع العلامتين العشريتين تحت بعضهما"], ["Write 22.9 as 22.90", "اكتب 22.9 على صورة 22.90"], ["Subtract from the right, regrouping", "اطرح من اليمين مع إعادة التجميع"], ["Check: 7.66 is close to 8", "تحقق: 7.66 قريب من 8"]],
      off: ["Estimate, line up, fill zeros, subtract, then check.", "نقدّر ثم نرتب ونكمل بالأصفار ونطرح ثم نتحقق."], sto: ["Diaa's checklist for the Nile Delta problem.", "قائمة ضياء لمسألة دلتا النيل."] },
    tf(true, ["True or false: adding zeros to the right of the last decimal digit does not change the value.", "صواب أم خطأ: إضافة أصفار على يمين آخر رقم عشري لا تغير القيمة."], ["True. 0.2 = 0.20 = 0.200: the same part of the grid is shaded.", "صواب؛ 0.2 = 0.20 = 0.200، والجزء المظلل من الشبكة واحد."], ["Two shaded columns are still two shaded columns, whatever we call them.", "العمودان المظللان يبقيان عمودين مظللين مهما سميناهما."])
  ];
  EX.mp5u2l1 = [
    { k: "match", q: ["Match each equation to its solution.", "صِل كل معادلة بحلها."], pairs: [[["180 + x = 275", "180 + x = 275"], ["x = 95", "x = 95"]], [["8.23 + p = 10.24", "8.23 + p = 10.24"], ["p = 2.01", "p = 2.01"]], [["h − 6.82 = 1.23", "h − 6.82 = 1.23"], ["h = 8.05", "h = 8.05"]], [["2.45 + n = 5.24", "2.45 + n = 5.24"], ["n = 2.79", "n = 2.79"]]],
      off: ["Use the inverse operation: subtract to undo addition, add to undo subtraction.", "نستخدم العملية العكسية: نطرح لإلغاء الجمع، ونجمع لإلغاء الطرح."], sto: ["Balance each scale by finding what the box must hold.", "وازن كل ميزان بإيجاد ما يجب أن يحمله الصندوق."] },
    tf(false, ["True or false: 6.4 ÷ 3.2 + 8 is an equation.", "صواب أم خطأ: 6.4 ÷ 3.2 + 8 معادلة."], ["False. It has no equals sign, so it is an expression.", "خطأ؛ ليس فيه علامة يساوي، فهو مقدار."], ["No \"=\" means no balance scale: just a pile of weights.", "بدون \"=\" لا يوجد ميزان، بل كومة أوزان فقط."])
  ];
  EX.mp5u2l2 = [
    { k: "match", q: ["Match each number to its prime factorization.", "صِل كل عدد بتحليله إلى العوامل الأولية."], pairs: [[["24", "24"], ["2 × 2 × 2 × 3", "2 × 2 × 2 × 3"]], [["42", "42"], ["2 × 3 × 7", "2 × 3 × 7"]], [["20", "20"], ["2 × 2 × 5", "2 × 2 × 5"]], [["45", "45"], ["3 × 3 × 5", "3 × 3 × 5"]]],
      off: ["Multiply the primes back together to check: 2 × 2 × 5 = 20.", "نضرب العوامل الأولية للتحقق: 2 × 2 × 5 = 20."], sto: ["Each tree ends in green prime leaves.", "كل شجرة تنتهي بأوراق أولية خضراء."] },
    tf(true, ["True or false: a number has only one prime factorization.", "صواب أم خطأ: للعدد تحليل واحد فقط إلى العوامل الأولية."], ["True. 24 = 2 × 12 or 4 × 6 at the start, but both trees end with 2 × 2 × 2 × 3.", "صواب؛ قد نبدأ 24 = 2 × 12 أو 4 × 6، لكن الشجرتين تنتهيان بـ 2 × 2 × 2 × 3."], ["Different branches, same leaves.", "فروع مختلفة وأوراق واحدة."])
  ];
  EX.mp5u2l3 = [
    { k: "match", q: ["G.C.F or L.C.M? Match each problem to its answer.", "ع.م.أ أم م.م.أ؟ صِل كل مسألة بإجابتها."], pairs: [[["Hend (6 min) and Jana (8 min) meet at the start again", "تلتقي هند (6 دقائق) وجنى (8 دقائق) عند البداية مرة أخرى"], ["L.C.M = 24 minutes", "م.م.أ = 24 دقيقة"]], [["6 oranges, 12 dried fruits in identical bags", "6 برتقالات و12 فاكهة مجففة في أكياس متماثلة"], ["G.C.F = 6 bags", "ع.م.أ = 6 أكياس"]], [["Pencils in boxes of 8, erasers in boxes of 10, same number", "أقلام في علب من 8 وممحاوات في علب من 10، بالعدد نفسه"], ["L.C.M = 40 of each", "م.م.أ = 40 من كل نوع"]], [["Widest equal strips from 35 cm and 75 cm", "أعرض شرائط متساوية من 35 سم و75 سم"], ["G.C.F = 5 cm", "ع.م.أ = 5 سم"]]],
      off: ["Sharing into the largest groups uses the G.C.F; waiting for things to line up uses the L.C.M.", "التقسيم إلى أكبر مجموعات يستخدم ع.م.أ، وانتظار التقاء الأشياء يستخدم م.م.أ."], sto: ["Cutting and sharing: factors. Repeating and meeting: multiples.", "القص والتقسيم: عوامل، والتكرار واللقاء: مضاعفات."] },
    tf(true, ["True or false: a number has unlimited multiples but a limited number of factors.", "صواب أم خطأ: للعدد مضاعفات لا نهاية لها وعوامل محدودة العدد."], ["True. Multiples of 6 go on forever (6, 12, 18...), but 6 has only 4 factors: 1, 2, 3, 6.", "صواب؛ مضاعفات 6 لا تنتهي (6 و12 و18...)، أما عوامل 6 فأربعة فقط: 1 و2 و3 و6."], ["Aya is right: the frog can hop forever, but only a few numbers fit inside 6.", "آية على حق: الضفدع يستطيع القفز إلى الأبد، لكن أعدادًا قليلة فقط تدخل في 6."])
  ];
  EX.mp5u3l1 = [
    { k: "match", q: ["Match each part of 46 × 24 to its partial product.", "صِل كل جزء من 46 × 24 بحاصل ضربه الجزئي."], pairs: [[["40 × 20", "40 × 20"], ["800", "800"]], [["6 × 20", "6 × 20"], ["120", "120"]], [["40 × 4", "40 × 4"], ["160", "160"]], [["6 × 4", "6 × 4"], ["24", "24"]]],
      off: ["The four partial products add up to 1,104.", "مجموع حواصل الضرب الجزئية الأربعة 1,104."], sto: ["Eman's four garden beds.", "أحواض حديقة إيمان الأربعة."] },
    tf(true, ["True or false: 8 × (5 + 4) = 8 × 5 + 8 × 4.", "صواب أم خطأ: 8 × (5 + 4) = 8 × 5 + 8 × 4."], ["True. This is the distributive property: 40 + 32 = 72 = 8 × 9.", "صواب؛ هذه خاصية التوزيع: 40 + 32 = 72 = 8 × 9."], ["Cutting the rectangle does not change its area.", "تقسيم المستطيل لا يغير مساحته."])
  ];
  EX.mp5u3l2 = [
    { k: "order", q: ["Order the steps for 45 × 37.", "رتّب خطوات حل 45 × 37."], items: [["Multiply 45 by 7 ones: 315", "اضرب 45 في 7 آحاد: 315"], ["Write a placeholder 0", "اكتب صفر حفظ المكان"], ["Multiply 45 by 3 tens: 1,350", "اضرب 45 في 3 عشرات: 1,350"], ["Add the rows: 1,665", "اجمع الصفين: 1,665"]],
      off: ["Ones row, placeholder zero, tens row, then add.", "صف الآحاد، ثم صفر حفظ المكان، ثم صف العشرات، ثم الجمع."], sto: ["Ashraf's recipe for every 2-digit multiplication.", "وصفة أشرف لكل ضرب في عدد من رقمين."] },
    tf(false, ["True or false: in 357 × 36 the second row is 357 × 3 = 1,071.", "صواب أم خطأ: في 357 × 36 يكون الصف الثاني 357 × 3 = 1,071."], ["False. The 3 is 3 tens, so the row is 357 × 30 = 10,710.", "خطأ؛ الرقم 3 يعني 3 عشرات، فالصف 357 × 30 = 10,710."], ["Forgetting the placeholder zero makes the answer ten times too small for that row.", "نسيان صفر حفظ المكان يجعل ناتج هذا الصف أصغر عشر مرات."])
  ];
  EX.mp5u3l3 = [
    { k: "order", q: ["Order the steps to find the meat for February and March kebabs.", "رتّب خطوات إيجاد لحم كباب فبراير ومارس."], items: [["Read: 402 and 753 kebabs, 83 g each", "اقرأ: 402 و753 سيخًا، 83 جم لكل سيخ"], ["Add the kebabs: 1,155", "اجمع الأسياخ: 1,155"], ["Multiply: 1,155 × 83 = 95,865", "اضرب: 1,155 × 83 = 95,865"], ["Label: 95,865 g", "اكتب الوحدة: 95,865 جم"]],
      off: ["Read, plan the first step, multiply, label.", "نقرأ، ونخطط للخطوة الأولى، ونضرب، ونكتب الوحدة."], sto: ["Wael's way: count all the kebabs first.", "طريقة وائل: عُدّ كل الأسياخ أولًا."] },
    tf(true, ["True or false: 120 minutes a day for 33 days is 66 hours.", "صواب أم خطأ: 120 دقيقة يوميًا لمدة 33 يومًا تساوي 66 ساعة."], ["True. 120 minutes = 2 hours, and 2 × 33 = 66.", "صواب؛ 120 دقيقة = ساعتان، و2 × 33 = 66."], ["Two hours each day adds up quickly.", "ساعتان كل يوم تتراكم بسرعة."])
  ];
  EX.mp5u4l1 = [
    { k: "order", q: ["Order the chunks for 3,622 ÷ 31.", "رتّب أجزاء حل 3,622 ÷ 31."], items: [["31 × 100 = 3,100, 522 left", "31 × 100 = 3,100 ويتبقى 522"], ["31 × 10 = 310, 212 left", "31 × 10 = 310 ويتبقى 212"], ["31 × 6 = 186, 26 left", "31 × 6 = 186 ويتبقى 26"], ["116 R 26", "116 والباقي 26"]],
      off: ["Take big chunks first, then smaller ones, until less than 31 is left.", "نأخذ الأجزاء الكبيرة أولًا ثم الأصغر حتى يتبقى أقل من 31."], sto: ["Youssef fills boxes 100 at a time, then 10, then 6.", "يملأ يوسف الصناديق 100 مرة ثم 10 ثم 6."] },
    tf(true, ["True or false: 5,814 ÷ 47 is about 120.", "صواب أم خطأ: ناتج 5,814 ÷ 47 يقارب 120."], ["True. Compatible numbers: 6,000 ÷ 50 = 120.", "صواب؛ بالأعداد المتوافقة: 6,000 ÷ 50 = 120."], ["Round to friendly numbers that divide easily.", "قرّب إلى أعداد سهلة تقبل القسمة بسهولة."])
  ];
  EX.mp5u4l2 = [
    { k: "order", q: ["Order the four repeating steps of the division algorithm.", "رتّب الخطوات الأربع المتكررة في خوارزمية القسمة."], items: [["Divide", "نقسم"], ["Multiply", "نضرب"], ["Subtract", "نطرح"], ["Bring down", "ننزل الرقم التالي"]],
      off: ["Divide, multiply, subtract, bring down, and repeat.", "نقسم ونضرب ونطرح وننزل، ثم نكرر."], sto: ["Rana's cookie routine, bag after bag.", "روتين رنا مع البسكويت كيسًا بعد كيس."] },
    tf(true, ["True or false: Ziad's 100 buttons make 6 shirts of 16 buttons with 4 left.", "صواب أم خطأ: أزرار زياد المائة تكفي 6 قمصان بـ 16 زرًا ويتبقى 4."], ["True. 16 × 6 + 4 = 96 + 4 = 100.", "صواب؛ 16 × 6 + 4 = 96 + 4 = 100."], ["Put the shirts' buttons back with the leftovers: 100 again.", "أعد أزرار القمصان مع الباقي فتصبح 100 من جديد."])
  ];
  EX.mp5u4l3 = [
    { k: "order", q: ["Order the steps for Malek's trip (465 km, 124 km, 210 km).", "رتّب خطوات رحلة مالك (465 كم، 124 كم، 210 كم)."], items: [["Draw a bar for 465 km", "ارسم شريطًا يمثل 465 كم"], ["Add the driven parts: 124 + 210 = 334", "اجمع الجزأين المقطوعين: 124 + 210 = 334"], ["Subtract: 465 − 334 = 131", "اطرح: 465 − 334 = 131"], ["Check: 124 + 210 + 131 = 465", "تحقق: 124 + 210 + 131 = 465"]],
      off: ["Model, add the known parts, subtract from the whole, check.", "نمثل، ونجمع الأجزاء المعلومة، ونطرح من الكل، ونتحقق."], sto: ["The empty piece of Malek's bar is Sunday.", "الجزء الفارغ من شريط مالك هو يوم الأحد."] },
    tf(false, ["True or false: 140 servings in trays of 12 need 11 trays.", "صواب أم خطأ: 140 حصة في صوانٍ من 12 تحتاج 11 صينية."], ["False. 140 ÷ 12 = 11 R 8, and the 8 servings need a 12th tray.", "خطأ؛ 140 ÷ 12 = 11 والباقي 8، والحصص الثماني تحتاج صينية ثانية عشرة."], ["Nobody leaves 8 servings of baklava on the table.", "لا أحد يترك 8 حصص بقلاوة على المائدة."])
  ];
  EX.mp5u5l1 = [
    { k: "match", q: ["Match each product to its value.", "صِل كل عملية ضرب بناتجها."], pairs: [[["15.2 × 10", "15.2 × 10"], ["152", "152"]], [["15.2 × 0.1", "15.2 × 0.1"], ["1.52", "1.52"]], [["0.72 × 1,000", "0.72 × 1,000"], ["720", "720"]], [["7.4 × 0.01", "7.4 × 0.01"], ["0.074", "0.074"]]],
      off: ["× 10, 100, 1,000 move digits left; × 0.1, 0.01, 0.001 move them right.", "الضرب في 10 و100 و1,000 ينقل الأرقام يسارًا، وفي 0.1 و0.01 و0.001 ينقلها يمينًا."], sto: ["Manal's pencil grows and shrinks.", "قلم منال يكبر ويصغر."] },
    tf(false, ["True or false: multiplying always makes a number bigger.", "صواب أم خطأ: الضرب يكبّر العدد دائمًا."], ["False. 15.2 × 0.1 = 1.52 is smaller than 15.2.", "خطأ؛ 15.2 × 0.1 = 1.52 أصغر من 15.2."], ["Taking one tenth of a pencil makes a tiny pencil.", "أخذ جزء من عشرة من القلم يعطي قلمًا صغيرًا جدًا."])
  ];
  EX.mp5u5l2 = [
    { k: "match", q: ["Match each product to its value.", "صِل كل عملية ضرب بناتجها."], pairs: [[["0.3 × 0.4", "0.3 × 0.4"], ["0.12", "0.12"]], [["0.8 × 0.3", "0.8 × 0.3"], ["0.24", "0.24"]], [["0.08 × 0.3", "0.08 × 0.3"], ["0.024", "0.024"]], [["8 × 0.3", "8 × 0.3"], ["2.4", "2.4"]]],
      off: ["Multiply the digits, then count the decimal places in both factors.", "نضرب الأرقام ثم نعد الأرقام العشرية في العاملين."], sto: ["The same 24 hides in every answer; only the point moves.", "العدد 24 نفسه مختبئ في كل ناتج، والعلامة فقط هي التي تتحرك."] },
    tf(true, ["True or false: 0.5 × 0.7 is smaller than both factors.", "صواب أم خطأ: ناتج 0.5 × 0.7 أصغر من العاملين."], ["True. 0.35 < 0.5 and 0.35 < 0.7: a part of a part is smaller.", "صواب؛ 0.35 < 0.5 و0.35 < 0.7، فجزء من جزء يكون أصغر."], ["Nadia's piece of tile is smaller than each side.", "قطعة بلاطة نادية أصغر من كل ضلع."])
  ];
  EX.mp5u5l3 = [
    { k: "match", q: ["Match each measurement to an equivalent one.", "صِل كل قياس بقياس مكافئ له."], pairs: [[["135 cm", "135 سم"], ["1.35 m", "1.35 م"]], [["3,648 g", "3,648 جم"], ["3.648 kg", "3.648 كجم"]], [["430 mL", "430 مل"], ["0.43 L", "0.43 لتر"]], [["95 mm", "95 مم"], ["9.5 cm", "9.5 سم"]]],
      off: ["cm to m: × 0.01; g to kg and mL to L: × 0.001; mm to cm: × 0.1.", "من سم إلى م: × 0.01، ومن جم إلى كجم ومن مل إلى لتر: × 0.001، ومن مم إلى سم: × 0.1."], sto: ["Same amount, different label.", "الكمية نفسها بوحدة مختلفة."] },
    tf(true, ["True or false: 201,000 g is more than 173 kg.", "صواب أم خطأ: 201,000 جم أكبر من 173 كجم."], ["True. 201,000 × 0.001 = 201 kg, and 201 > 173.", "صواب؛ 201,000 × 0.001 = 201 كجم، و201 > 173."], ["Mohamed Ehab's Clean and Jerk beats his Snatch.", "رفعة النطر لمحمد إيهاب أكبر من رفعة الخطف."])
  ];
  EX.mp5u5l4 = [
    { k: "match", q: ["Match each division to its value.", "صِل كل عملية قسمة بناتجها."], pairs: [[["2,500 ÷ 100", "2,500 ÷ 100"], ["25", "25"]], [["5.7 ÷ 0.1", "5.7 ÷ 0.1"], ["57", "57"]], [["71 ÷ 1,000", "71 ÷ 1,000"], ["0.071", "0.071"]], [["26.4 ÷ 2.2", "26.4 ÷ 2.2"], ["12", "12"]]],
      off: ["÷ 10, 100, 1,000 move digits right; ÷ 0.1, 0.01 move them left; for a decimal divisor make it whole first.", "القسمة على 10 و100 و1,000 تنقل الأرقام يمينًا، وعلى 0.1 و0.01 تنقلها يسارًا، والمقسوم عليه العشري نجعله صحيحًا أولًا."], sto: ["Watch which way the digits slide.", "لاحظ اتجاه انزلاق الأرقام."] },
    tf(true, ["True or false: 14.6 × 10 and 14.6 ÷ 0.1 give the same answer.", "صواب أم خطأ: 14.6 × 10 و14.6 ÷ 0.1 يعطيان الناتج نفسه."], ["True. Both equal 146: dividing by 0.1 is the same as multiplying by 10.", "صواب؛ كلاهما يساوي 146، فالقسمة على 0.1 مثل الضرب في 10."], ["How many tenths are in 14.6? 146 tenths.", "كم جزءًا من عشرة في 14.6؟ 146 جزءًا من عشرة."])
  ];
  EX.mp5u6l1 = [
    { k: "order", q: ["Order Ali's bus stops for 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07.", "رتّب محطات حافلة علي في 300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07."], items: [["11.04 × 0.2 = 2.208", "11.04 × 0.2 = 2.208"], ["2.208 ÷ 0.01 = 220.8", "2.208 ÷ 0.01 = 220.8"], ["300.53 − 220.8 = 79.73", "300.53 − 220.8 = 79.73"], ["79.73 + 13.07 = 92.8", "79.73 + 13.07 = 92.8"]],
      off: ["× and ÷ from left to right, then − and + from left to right.", "الضرب والقسمة من اليسار، ثم الطرح والجمع من اليسار."], sto: ["Express stops first, then local stops.", "المحطات السريعة أولًا ثم المحطات العادية."] },
    tf(false, ["True or false: 10 × (4 − 3) = 37.", "صواب أم خطأ: 10 × (4 − 3) = 37."], ["False. The parentheses come first: 4 − 3 = 1, then 10 × 1 = 10.", "خطأ؛ الأقواس أولًا: 4 − 3 = 1، ثم 10 × 1 = 10."], ["37 is the value without the fence.", "37 هي القيمة بدون السور."])
  ];
  EX.mp5u6l2 = [
    { k: "match", q: ["Match each phrase to its expression.", "صِل كل عبارة بمقدارها."], pairs: [[["Subtract 3.1 from 4.62, then multiply by 2", "اطرح 3.1 من 4.62 ثم اضرب في 2"], ["(4.62 − 3.1) × 2", "(4.62 − 3.1) × 2"]], [["The difference between 10 and 9.27", "الفرق بين 10 و9.27"], ["10 − 9.27", "10 − 9.27"]], [["The sum of 54 and 46, times 0.73", "مجموع 54 و46 مضروبًا في 0.73"], ["(54 + 46) × 0.73", "(54 + 46) × 0.73"]], [["Share 12 L among 16 vases", "قسّم 12 لترًا على 16 مزهرية"], ["12 ÷ 16", "12 ÷ 16"]]],
      off: ["Read the words in order; \"the result\" or \"the sum of\" usually needs parentheses.", "نقرأ الكلمات بالترتيب، وعبارتا \"الناتج\" و\"مجموع\" تحتاجان غالبًا إلى أقواس."], sto: ["Each phrase becomes a small machine of numbers and signs.", "كل عبارة تصبح آلة صغيرة من الأعداد والرموز."] },
    tf(false, ["True or false: 1,000 + 50 + 30 × 4 shows Kamel's savings after 4 weeks.", "صواب أم خطأ: 1,000 + 50 + 30 × 4 يبين مدخرات كامل بعد 4 أسابيع."], ["False. Both jobs repeat for 4 weeks: 1,000 + (50 + 30) × 4 = 1,320, not 1,170.", "خطأ؛ الوظيفتان تتكرران 4 أسابيع: 1,000 + (50 + 30) × 4 = 1,320 وليس 1,170."], ["Without parentheses only one job gets the 4 weeks.", "بدون أقواس تحصل وظيفة واحدة فقط على الأسابيع الأربعة."])
  ];
  EX.mp5u6l3 = [
    { k: "match", q: ["Match each pattern to its rule.", "صِل كل نمط بقاعدته."], pairs: [[["5, 10, 20, 40", "5, 10, 20, 40"], ["× 2", "× 2"]], [["85, 73, 61, 49", "85, 73, 61, 49"], ["− 12", "− 12"]], [["1.5, 3, 4.5, 6", "1.5, 3, 4.5, 6"], ["+ 1.5", "+ 1.5"]], [["4 → 28, 5 → 35", "4 → 28, 5 → 35"], ["× 7", "× 7"]]],
      off: ["Test each rule on every step before you decide.", "نختبر كل قاعدة على كل خطوة قبل أن نقرر."], sto: ["The machine must work for every number that goes in.", "يجب أن تعمل الآلة مع كل عدد يدخلها."] },
    tf(false, ["True or false: 3, 6, 9, 15, 21, 28 is a pattern with the rule add 3.", "صواب أم خطأ: 3 و6 و9 و15 و21 و28 نمط قاعدته جمع 3."], ["False. The jumps are 3, 3, 6, 6, 7, so no single rule works.", "خطأ؛ القفزات 3 و3 و6 و6 و7، فلا تصلح قاعدة واحدة."], ["The rule breaks after 9.", "تنكسر القاعدة بعد 9."])
  ];

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function dd(s) { return E.mp5h ? E.mp5h.tx(s) : s; }
  function tx(x, y, s, extra, size, anc) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="' + (anc || "middle") + '" font-family="Nunito,Cairo,sans-serif">' + dd(s) + "</text>"; }
  function rc(x, y, w, h, f, st, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r == null ? 4 : r) + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="1.5"' : "") + "/>"; }
  function ln(x1, y1, x2, y2, col, w, dash) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || "var(--ink)") + '" stroke-width="' + (w || 2) + '"' + (dash ? ' stroke-dasharray="4 4"' : "") + "/>"; }
  function ci(x, y, r, f) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"/>'; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }
  function gridSvg(x, y, s, fill) { var o = "", cs = s / 10; for (var k = 0; k < 100; k++) { var cI = Math.floor(k / 10), r = k % 10; o += rc(x + cI * cs + 0.4, y + r * cs + 0.4, cs - 0.8, cs - 0.8, fill(k) || "var(--card)", null, 0); } return o + '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" fill="none" stroke="var(--ink)" stroke-width="1.5"/>'; }
  function arrow(id, col) { return '<defs><marker id="' + id + '" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="' + col + '"/></marker></defs>'; }

  D.mp5u1l1 = {
    title: ["Place-value chart for 0.875", "جدول القيمة المكانية للعدد 0.875"],
    svg: function () {
      var s = "", cols = [["Ones", "الآحاد", "0", "#3b82f6"], ["Tenths", "أجزاء من عشرة", "8", "#22c55e"], ["Hundredths", "أجزاء من مائة", "7", "#f59e0b"], ["Thousandths", "أجزاء من ألف", "5", "#ef4444"]];
      cols.forEach(function (c, i) { var x = 30 + i * 90 + (i ? 20 : 0); s += rc(x, 30, 80, 34, c[3], null, 6) + tx(x + 40, 52, t(c[0], c[1]), 'style="fill:#fff"', 10) + rc(x, 70, 80, 70, "var(--card)", "var(--line)", 6) + tx(x + 40, 118, c[2], 'style="fill:' + c[3] + '"', 40); });
      s += ci(125, 132, 6, "var(--ink)");
      s += arrow("pv1", "#8b5cf6") + '<path d="M330 175 Q220 205 110 175" fill="none" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#pv1)"/>' + tx(220, 222, "× 10", 'style="fill:#8b5cf6"', 14);
      return g(s);
    },
    spots: [[70, 150, ["Ones place", "خانة الآحاد"], ["0.875 has 0 ones: the heron weighs less than 1 kg.", "في 0.875 صفر من الآحاد: البلشون يزن أقل من 1 كجم."]],
      [125, 150, ["Decimal point", "العلامة العشرية"], ["It separates the whole number from the parts smaller than 1. It never moves; the digits do.", "تفصل العدد الصحيح عن الأجزاء الأصغر من الواحد، وهي لا تتحرك أبدًا بل الأرقام هي التي تتحرك."]],
      [180, 150, ["8 tenths = 0.8", "8 أجزاء من عشرة = 0.8"], ["The first place after the point.", "أول خانة بعد العلامة."]],
      [270, 150, ["7 hundredths = 0.07", "7 أجزاء من مائة = 0.07"], ["Ten times smaller than a tenth.", "أصغر من جزء من عشرة بعشر مرات."]],
      [360, 150, ["5 thousandths = 0.005", "5 أجزاء من ألف = 0.005"], ["One whole split into 1,000 parts: 0.001 each.", "الواحد مقسمًا إلى 1,000 جزء: كل جزء 0.001."]],
      [220, 190, ["× 10 moves digits left", "الضرب في 10 ينقل الأرقام يسارًا"], ["0.875 × 10 = 8.75: every digit is now worth 10 times more.", "0.875 × 10 = 8.75: كل رقم أصبحت قيمته 10 أمثالها."]]]
  };
  D.mp5u1l2 = {
    title: ["Rounding 3.54 on a number line", "تقريب 3.54 على خط الأعداد"],
    svg: function () {
      var s = ln(30, 140, 370, 140, "var(--ink)", 2.5), i;
      for (i = 0; i <= 10; i++) { var x = 40 + i * 32; s += ln(x, i % 5 === 0 ? 126 : 132, x, i % 5 === 0 ? 154 : 148, "var(--ink)", i % 5 === 0 ? 2 : 1); }
      s += tx(40, 176, "3.5", ink, 15) + tx(200, 176, "3.55", 'style="fill:#f97316"', 13) + tx(360, 176, "3.6", ink, 15);
      s += ln(200, 80, 200, 140, "#f97316", 2, true) + ci(168, 140, 7, "#3b82f6") + tx(168, 112, "3.54", 'style="fill:#3b82f6"', 14);
      s += arrow("rd1", "#3b82f6") + '<path d="M160 120 Q100 90 46 124" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#rd1)"/>' + tx(100, 80, "≈ 3.5", 'style="fill:#3b82f6"', 14);
      return g(s);
    },
    spots: [[40, 200, ["Lower neighbour 3.5", "الجار الأصغر 3.5"], ["3.54 is between 3.5 and 3.6.", "3.54 يقع بين 3.5 و3.6."]],
      [360, 200, ["Upper neighbour 3.6", "الجار الأكبر 3.6"], ["The next Tenth up.", "جزء العشرة التالي لأعلى."]],
      [200, 60, ["Midpoint 3.55", "نقطة المنتصف 3.55"], ["Halfway between the neighbours. Numbers at or past it round up.", "في منتصف المسافة بين الجارين، والأعداد عندها أو بعدها تُقرب لأعلى."]],
      [168, 95, ["The point 3.54", "النقطة 3.54"], ["It has not reached the midpoint.", "لم تصل إلى نقطة المنتصف."]],
      [100, 62, ["Round down: 3.54 ≈ 3.5", "التقريب لأسفل: 3.54 ≈ 3.5"], ["The Hundredths digit 4 is less than 5, so the Tenths digit stays 5.", "رقم أجزاء المائة 4 أقل من 5، فيبقى رقم أجزاء العشرة 5."]]]
  };
  D.mp5u1l3 = {
    title: ["Modeling 0.13 + 0.23", "نمذجة 0.13 + 0.23"],
    svg: function () {
      var s = gridSvg(40, 30, 180, function (k) { return k < 13 ? "#facc15" : k < 36 ? "#22c55e" : null; });
      s += tx(300, 60, "0.13", 'style="fill:#ca8a04"', 20) + tx(300, 100, "+ 0.23", 'style="fill:#16a34a"', 20) + ln(255, 115, 350, 115) + tx(300, 145, "0.36", ink, 24);
      return g(s);
    },
    spots: [[48, 22, ["One small square = 0.01", "المربع الصغير = 0.01"], ["The grid is 1 whole split into 100 equal squares.", "الشبكة واحد صحيح مقسم إلى 100 مربع متساوٍ."]],
      [49, 225, ["One column = 0.1", "العمود الواحد = 0.1"], ["10 small squares make one tenth.", "10 مربعات صغيرة تكوّن جزءًا من عشرة."]],
      [70, 45, ["Yellow: 0.13", "الأصفر: 0.13"], ["13 squares for the first addend.", "13 مربعًا للعدد الأول."]],
      [95, 100, ["Green: 0.23", "الأخضر: 0.23"], ["23 more squares for the second addend.", "23 مربعًا آخر للعدد الثاني."]],
      [300, 170, ["Sum: 0.36", "المجموع: 0.36"], ["13 + 23 = 36 coloured squares = 36 hundredths.", "13 + 23 = 36 مربعًا ملونًا = 36 جزءًا من مائة."]]]
  };
  D.mp5u1l4 = {
    title: ["Modeling 0.39 − 0.13", "نمذجة 0.39 − 0.13"],
    svg: function () {
      var s = gridSvg(30, 30, 180, function (k) { return k < 13 ? "rgba(96,165,250,.35)" : k < 39 ? "#3b82f6" : null; }), k, cs = 18;
      for (k = 0; k < 13; k++) { var x = 30 + Math.floor(k / 10) * cs, y = 30 + (k % 10) * cs; s += '<path d="M' + (x + 3) + " " + (y + 3) + " L" + (x + 15) + " " + (y + 15) + " M" + (x + 15) + " " + (y + 3) + " L" + (x + 3) + " " + (y + 15) + '" stroke="#7f1d1d" stroke-width="1.6"/>'; }
      s += tx(310, 60, "22.90", ink, 18) + tx(310, 88, "− 15.24", ink, 18) + ln(255, 98, 360, 98) + tx(310, 124, "7.66", 'style="fill:#16a34a"', 20);
      return g(s);
    },
    spots: [[100, 22, ["Minuend: 0.39 shaded", "المطروح منه: 0.39 مظلل"], ["Shade the number we subtract from.", "نظلل العدد الذي نطرح منه."]],
      [40, 140, ["Subtrahend: 0.13 crossed out", "المطروح: 0.13 مشطوب"], ["Cross out the part we take away.", "نشطب الجزء الذي نأخذه."]],
      [130, 225, ["Difference: 0.26", "الفرق: 0.26"], ["The squares still shaded and not crossed out.", "المربعات التي ما زالت مظللة وغير مشطوبة."]],
      [345, 50, ["Fill with zeros", "إكمال الأصفار"], ["22.9 = 22.90, so both numbers have two decimal places.", "22.9 = 22.90، فيصبح لكل عدد رقمان عشريان."]],
      [310, 145, ["Lined-up points", "العلامات تحت بعضها"], ["Line up the decimal points, subtract from the right: 7.66 m, close to the estimate 8.", "نضع العلامات تحت بعضها ونطرح من اليمين: 7.66 م، قريب من التقدير 8."]]]
  };
  D.mp5u2l1 = {
    title: ["A balance for 180 + x = 275", "ميزان المعادلة 180 + x = 275"],
    svg: function () {
      var s = '<path d="M200 70 L180 200 L220 200 z" fill="var(--muted)"/>' + ln(70, 70, 330, 70, "var(--ink)", 5) + ci(200, 70, 7, "#22c55e");
      s += ln(70, 70, 40, 130, "var(--muted)", 1.5) + ln(70, 70, 120, 130, "var(--muted)", 1.5) + ln(330, 70, 300, 130, "var(--muted)", 1.5) + ln(330, 70, 360, 130, "var(--muted)", 1.5);
      s += ln(30, 130, 130, 130, "var(--ink)", 3) + ln(290, 130, 370, 130, "var(--ink)", 3);
      s += rc(34, 100, 44, 28, "#94a3b8") + tx(56, 119, "180", 'style="fill:#0f172a"', 12) + rc(82, 94, 44, 34, "rgba(250,204,21,.4)", "#ca8a04") + tx(104, 117, "x", 'style="fill:#a16207"', 16);
      s += rc(302, 100, 56, 28, "#64748b") + tx(330, 119, "275", 'style="fill:#fff"', 13) + tx(200, 228, "x = 275 − 180 = 95", ink, 15);
      return g(s);
    },
    spots: [[56, 160, ["Known part: 180 km", "الجزء المعلوم: 180 كم"], ["The Gulf of Aqaba.", "خليج العقبة."]],
      [104, 82, ["Variable x", "المتغير x"], ["The unknown difference. A letter stands for the number we look for.", "الفرق المجهول، والحرف يدل على العدد الذي نبحث عنه."]],
      [330, 160, ["Whole: 275 km", "الكل: 275 كم"], ["The Gulf of Suez.", "خليج السويس."]],
      [200, 50, ["Equals sign = balance", "علامة يساوي = اتزان"], ["An equation says both sides weigh the same.", "المعادلة تقول إن الطرفين متساويان في الوزن."]],
      [200, 205, ["Inverse operation", "العملية العكسية"], ["Subtraction undoes addition: x = 275 − 180 = 95.", "الطرح يلغي الجمع: x = 275 − 180 = 95."]]]
  };
  D.mp5u2l2 = {
    title: ["Factor trees for 42 and 28", "شجرتا العوامل للعددين 42 و28"],
    svg: function () {
      function nd(x, y, v, p) { return p ? ci(x, y, 14, "#22c55e") + tx(x, y + 5, v, 'style="fill:#fff"', 13) : rc(x - 17, y - 14, 34, 28, "#f97316", null, 6) + tx(x, y + 5, v, 'style="fill:#0f172a"', 13); }
      var s = ln(100, 34, 65, 84, "var(--muted)") + ln(100, 34, 135, 84, "var(--muted)") + ln(135, 98, 110, 140, "var(--muted)") + ln(135, 98, 160, 140, "var(--muted)");
      s += nd(100, 30, "42") + nd(65, 90, "2", 1) + nd(135, 90, "21") + nd(110, 146, "3", 1) + nd(160, 146, "7", 1);
      s += ln(300, 34, 265, 84, "var(--muted)") + ln(300, 34, 335, 84, "var(--muted)") + ln(335, 98, 310, 140, "var(--muted)") + ln(335, 98, 360, 140, "var(--muted)");
      s += nd(300, 30, "28") + nd(265, 90, "2", 1) + nd(335, 90, "14") + nd(310, 146, "2", 1) + nd(360, 146, "7", 1);
      s += tx(200, 196, "42 = 2 × 3 × 7     28 = 2 × 2 × 7", ink, 13) + tx(200, 224, t("G.C.F = 2 × 7 = 14", "ع.م.أ = 2 × 7 = 14"), 'style="fill:#16a34a"', 15);
      return g(s);
    },
    spots: [[100, 10, ["Composite number", "عدد غير أولي"], ["42 has more than two factors, so it splits.", "للعدد 42 أكثر من عاملين، فيتفرع."]],
      [65, 115, ["Prime leaf", "ورقة أولية"], ["A prime has only 1 and itself as factors. The branch stops.", "العدد الأولي عاملاه 1 ونفسه فقط، فيتوقف الفرع."]],
      [135, 65, ["Keep splitting", "واصل التحليل"], ["21 is composite: 21 = 3 × 7.", "21 عدد غير أولي: 21 = 3 × 7."]],
      [200, 176, ["Prime factorization", "التحليل إلى العوامل الأولية"], ["Multiply all the leaves: 2 × 3 × 7 = 42.", "حاصل ضرب كل الأوراق: 2 × 3 × 7 = 42."]],
      [325, 210, ["G.C.F", "ع.م.أ"], ["The shared primes are 2 and 7, so the G.C.F of 42 and 28 is 14.", "العوامل المشتركة 2 و7، إذن ع.م.أ للعددين 42 و28 هو 14."]]]
  };
  D.mp5u2l3 = {
    title: ["Multiples of 6 and 8 meet at 24", "مضاعفات 6 و8 تلتقي عند 24"],
    svg: function () {
      var s = ln(20, 120, 380, 120, "var(--ink)", 2), i, px = 13.5;
      for (i = 0; i <= 26; i += 2) s += ln(30 + i * px, 114, 30 + i * px, 126, "var(--muted)", 1);
      [6, 12, 18, 24].forEach(function (v) { s += ci(30 + v * px, 104, 6, "#f97316") + tx(30 + v * px, 88, String(v), 'style="fill:#ea580c"', 12); });
      [8, 16, 24].forEach(function (v) { s += ci(30 + v * px, 136, 6, "#3b82f6") + tx(30 + v * px, 160, String(v), 'style="fill:#2563eb"', 12); });
      s += tx(30 + 24 * px, 60, "⭐ L.C.M", ink, 13) + tx(30, 145, "0", mut, 11) + tx(80, 40, t("Hend: every 6 min", "هند: كل 6 دقائق"), 'style="fill:#ea580c"', 12, "start") + tx(80, 200, t("Jana: every 8 min", "جنى: كل 8 دقائق"), 'style="fill:#2563eb"', 12, "start");
      return g(s);
    },
    spots: [[111, 70, ["Multiples of 6", "مضاعفات 6"], ["6, 12, 18, 24, ... skip counting by 6.", "6 و12 و18 و24 ... العد بالقفز بالستات."]],
      [138, 178, ["Multiples of 8", "مضاعفات 8"], ["8, 16, 24, ... skip counting by 8.", "8 و16 و24 ... العد بالقفز بالثمانيات."]],
      [354, 40, ["L.C.M(6, 8) = 24", "م.م.أ(6، 8) = 24"], ["The first number in both lists: Hend and Jana meet after 24 minutes.", "أول عدد في القائمتين: تلتقي هند وجنى بعد 24 دقيقة."]],
      [273, 80, ["18 is not common", "18 ليس مشتركًا"], ["18 is a multiple of 6 but not of 8.", "18 من مضاعفات 6 وليس من مضاعفات 8."]],
      [30, 165, ["Unlimited multiples", "مضاعفات لا نهاية لها"], ["The lists go on forever: 48 and 72 are common multiples too.", "القوائم لا تنتهي: 48 و72 مضاعفات مشتركة أيضًا."]]]
  };
  D.mp5u3l1 = {
    title: ["Area model for 46 × 24", "نموذج المساحة للضرب 46 × 24"],
    svg: function () {
      var s = rc(60, 40, 240, 120, "rgba(59,130,246,.35)", "var(--ink)", 0) + rc(300, 40, 36, 120, "rgba(34,197,94,.35)", "var(--ink)", 0) + rc(60, 160, 240, 24, "rgba(249,115,22,.35)", "var(--ink)", 0) + rc(300, 160, 36, 24, "rgba(168,85,247,.35)", "var(--ink)", 0);
      s += tx(180, 105, "40 × 20 = 800", ink, 15) + tx(318, 105, "120", ink, 11) + tx(180, 177, "160", ink, 11) + tx(318, 177, "24", ink, 10);
      s += tx(180, 30, "40", 'style="fill:#f97316"', 14) + tx(318, 30, "6", 'style="fill:#f97316"', 14) + tx(40, 104, "20", 'style="fill:#3b82f6"', 14) + tx(40, 177, "4", 'style="fill:#3b82f6"', 14);
      s += tx(200, 220, "800 + 120 + 160 + 24 = 1,104", ink, 15);
      return g(s);
    },
    spots: [[180, 70, ["40 × 20 = 800", "40 × 20 = 800"], ["The tens times the tens: the biggest partial product.", "العشرات في العشرات: أكبر حاصل ضرب جزئي."]],
      [318, 130, ["6 × 20 = 120", "6 × 20 = 120"], ["Ones of 46 times tens of 24.", "آحاد 46 في عشرات 24."]],
      [140, 172, ["40 × 4 = 160", "40 × 4 = 160"], ["Tens of 46 times ones of 24.", "عشرات 46 في آحاد 24."]],
      [350, 172, ["6 × 4 = 24", "6 × 4 = 24"], ["The little corner: ones times ones.", "الركن الصغير: الآحاد في الآحاد."]],
      [200, 205, ["Add the parts", "اجمع الأجزاء"], ["The partial products add up to the whole area: 1,104.", "مجموع حواصل الضرب الجزئية يساوي المساحة كلها: 1,104."]]]
  };
  D.mp5u3l2 = {
    title: ["The algorithm for 45 × 37", "خوارزمية الضرب 45 × 37"],
    svg: function () {
      var s = tx(250, 40, "4  5", ink, 22, "end") + tx(250, 72, "×  3  7", ink, 22, "end") + ln(150, 82, 262, 82) + tx(250, 112, "3  1  5", 'style="fill:#2563eb"', 22, "end");
      s += tx(250, 144, "1  3  5  0", 'style="fill:#16a34a"', 22, "end") + ln(150, 154, 262, 154) + tx(250, 186, "1  6  6  5", 'style="fill:#9333ea"', 22, "end") + tx(222, 18, "3", 'style="fill:#ef4444"', 12);
      s += tx(300, 112, "45 × 7", mut, 12, "start") + tx(300, 144, "45 × 30", mut, 12, "start");
      return g(s);
    },
    spots: [[222, 8, ["Carry", "الحمل"], ["7 × 5 = 35: write 5, carry 3 to the tens.", "7 × 5 = 35: نكتب 5 ونحمل 3 إلى العشرات."]],
      [140, 112, ["Ones row: 315", "صف الآحاد: 315"], ["45 × 7 = 315.", "45 × 7 = 315."]],
      [262, 160, ["Placeholder zero", "صفر حفظ المكان"], ["We multiply by 3 tens, so the row ends in 0.", "نضرب في 3 عشرات، فينتهي الصف بصفر."]],
      [140, 144, ["Tens row: 1,350", "صف العشرات: 1,350"], ["45 × 30 = 1,350.", "45 × 30 = 1,350."]],
      [140, 186, ["Product: 1,665", "حاصل الضرب: 1,665"], ["Add the rows lined up by place value.", "نجمع الصفين مرتبين حسب القيمة المكانية."]]]
  };
  D.mp5u3l3 = {
    title: ["Plan Mona's kebab problem", "خطة مسألة كباب منى"],
    svg: function () {
      var s = rc(20, 40, 120, 40, "#93c5fd", null, 8) + tx(80, 65, t("Feb 402", "فبراير 402"), 'style="fill:#0f172a"', 12) + rc(150, 40, 200, 40, "#86efac", null, 8) + tx(250, 65, t("Mar 753", "مارس 753"), 'style="fill:#0f172a"', 12);
      s += ln(20, 96, 350, 96, "var(--ink)", 2) + tx(185, 116, t("Step 1: 402 + 753 = 1,155 kebabs", "الخطوة 1: 402 + 753 = 1,155 سيخًا"), ink, 13);
      s += rc(120, 140, 160, 40, "#fcd34d", null, 8) + tx(200, 165, "1,155 × 83 g", 'style="fill:#0f172a"', 14) + tx(200, 210, t("Step 2: = 95,865 g", "الخطوة 2: = 95,865 جم"), 'style="fill:#9333ea"', 15);
      return g(s);
    },
    spots: [[80, 30, ["February", "فبراير"], ["402 kebabs.", "402 سيخ."]],
      [250, 30, ["March", "مارس"], ["753 kebabs.", "753 سيخًا."]],
      [360, 116, ["Step 1: add", "الخطوة 1: الجمع"], ["Find the number of groups first: 1,155 kebabs.", "نوجد عدد المجموعات أولًا: 1,155 سيخًا."]],
      [300, 160, ["Step 2: multiply", "الخطوة 2: الضرب"], ["Each kebab has 83 g: 1,155 × 83.", "في كل سيخ 83 جم: 1,155 × 83."]],
      [330, 210, ["Label the unit", "اكتب الوحدة"], ["95,865 grams, about 96 kg. Estimate 1,000 × 80 = 80,000 checks it.", "95,865 جرامًا أي نحو 96 كجم، والتقدير 1,000 × 80 = 80,000 يؤكده."]]]
  };
  D.mp5u4l1 = {
    title: ["Area model for 3,622 ÷ 31", "نموذج المساحة للقسمة 3,622 ÷ 31"],
    svg: function () {
      var s = rc(60, 60, 220, 100, "#93c5fd", "var(--ink)", 0) + rc(280, 60, 40, 100, "#86efac", "var(--ink)", 0) + rc(320, 60, 24, 100, "#fcd34d", "var(--ink)", 0) + '<rect x="344" y="60" width="16" height="100" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>';
      s += tx(40, 115, "31", 'style="fill:#3b82f6"', 16) + tx(170, 50, "100", ink, 13) + tx(300, 50, "10", ink, 13) + tx(332, 50, "6", ink, 13);
      s += tx(170, 115, "3,100", 'style="fill:#0f172a"', 14) + tx(300, 115, "310", 'style="fill:#0f172a"', 10) + tx(332, 100, "186", 'style="fill:#0f172a"', 8);
      s += tx(200, 200, "100 + 10 + 6 = 116  R 26", ink, 15);
      return g(s);
    },
    spots: [[40, 140, ["Divisor: 31", "المقسوم عليه: 31"], ["One side of the rectangle.", "أحد ضلعي المستطيل."]],
      [170, 140, ["Chunk 100", "الجزء 100"], ["31 × 100 = 3,100; 3,622 − 3,100 = 522 left.", "31 × 100 = 3,100، و3,622 − 3,100 = 522 باقٍ."]],
      [300, 140, ["Chunk 10", "الجزء 10"], ["31 × 10 = 310; 212 left.", "31 × 10 = 310، و212 باقٍ."]],
      [332, 172, ["Chunk 6", "الجزء 6"], ["31 × 6 = 186; 26 left.", "31 × 6 = 186، و26 باقٍ."]],
      [365, 110, ["Remainder 26", "الباقي 26"], ["Less than 31, so no more chunks fit.", "أقل من 31، فلا يدخل جزء آخر."]],
      [200, 220, ["Quotient 116", "خارج القسمة 116"], ["Add the chunks: 100 + 10 + 6.", "نجمع الأجزاء: 100 + 10 + 6."]]]
  };
  D.mp5u4l2 = {
    title: ["Long division 1,376 ÷ 43", "القسمة المطولة 1,376 ÷ 43"],
    svg: function () {
      var s = tx(258, 34, "3  2", 'style="fill:#9333ea"', 20, "end") + tx(110, 66, "43", 'style="fill:#3b82f6"', 20, "end") + '<path d="M122 76 Q130 60 122 46 L270 46" fill="none" stroke="var(--ink)" stroke-width="2"/>';
      s += tx(268, 66, "1  3  7  6", ink, 20, "end") + tx(238, 96, "1  2  9", 'style="fill:#2563eb"', 20, "end") + ln(160, 104, 246, 104) + tx(268, 128, "8  6", ink, 20, "end") + tx(268, 156, "8  6", 'style="fill:#2563eb"', 20, "end") + ln(220, 164, 276, 164) + tx(268, 190, "0", ink, 20, "end");
      s += tx(200, 226, "32 × 43 = 1,376", 'style="fill:#16a34a"', 14);
      return g(s);
    },
    spots: [[95, 90, ["Divisor 43", "المقسوم عليه 43"], ["We divide by 43.", "نقسم على 43."]],
      [300, 66, ["Dividend 1,376", "المقسوم 1,376"], ["43 does not go into 1 or 13, so start with 137.", "العدد 43 لا يدخل في 1 ولا 13، فنبدأ بـ 137."]],
      [280, 30, ["Quotient 32", "خارج القسمة 32"], ["3 goes above the 7, 2 above the 6.", "الرقم 3 فوق 7، والرقم 2 فوق 6."]],
      [140, 96, ["Multiply and subtract", "نضرب ونطرح"], ["43 × 3 = 129 and 137 − 129 = 8.", "43 × 3 = 129، و137 − 129 = 8."]],
      [290, 128, ["Bring down", "ننزل الرقم"], ["Bring down 6 next to 8: 86 ÷ 43 = 2.", "ننزل 6 بجوار 8: 86 ÷ 43 = 2."]],
      [330, 226, ["Check by multiplying", "التحقق بالضرب"], ["32 × 43 = 1,376 with remainder 0.", "32 × 43 = 1,376 والباقي صفر."]]]
  };
  D.mp5u4l3 = {
    title: ["Bar model: the textile factory", "نموذج الشريط: مصنع النسيج"],
    svg: function () {
      var s = rc(30, 30, 330, 34, "#93c5fd", null, 6) + tx(195, 52, t("Cotton 11,650 m", "القطن 11,650 م"), 'style="fill:#0f172a"', 13);
      s += rc(30, 80, 190, 34, "#f9a8d4", null, 6) + '<rect x="220" y="80" width="140" height="34" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>' + tx(125, 102, t("Silk 6,700", "الحرير 6,700"), 'style="fill:#0f172a"', 12) + tx(290, 102, "− 4,950", mut, 12);
      s += rc(30, 130, 90, 34, "#fcd34d", null, 6) + '<rect x="120" y="130" width="100" height="34" fill="none" stroke="var(--muted)" stroke-dasharray="4 3"/>' + tx(75, 152, "3,200", 'style="fill:#0f172a"', 12) + tx(170, 152, "− 3,500", mut, 12);
      s += tx(200, 205, "11,650 + 6,700 + 3,200 = 21,550 m", ink, 15);
      return g(s);
    },
    spots: [[195, 20, ["Known bar", "الشريط المعلوم"], ["Cotton: 11,650 m.", "القطن: 11,650 م."]],
      [290, 125, ["\"Fewer than\" = subtract", "\"أقل من\" = اطرح"], ["Silk is 4,950 m shorter: 11,650 − 4,950 = 6,700.", "الحرير أقصر بـ 4,950 م: 11,650 − 4,950 = 6,700."]],
      [75, 175, ["Step 2", "الخطوة 2"], ["Wool is 3,500 m fewer than silk: 6,700 − 3,500 = 3,200.", "الصوف أقل من الحرير بـ 3,500 م: 6,700 − 3,500 = 3,200."]],
      [200, 225, ["Final step: add", "الخطوة الأخيرة: الجمع"], ["All fabric together: 21,550 m.", "كل الأقمشة معًا: 21,550 م."]]]
  };
  D.mp5u5l1 = {
    title: ["15.2 × 10 and 15.2 × 0.1", "15.2 × 10 و15.2 × 0.1"],
    svg: function () {
      var s = "", hd = ["100", "10", "1", "0.1", "0.01"], i;
      for (i = 0; i < 5; i++) { var x = 40 + i * 66 + (i > 2 ? 10 : 0); s += rc(x, 20, 60, 24, "var(--card)", "var(--line)", 4) + tx(x + 30, 37, hd[i], mut, 11); }
      s += ci(244, 90, 4, "var(--ink)") + ci(244, 140, 4, "var(--ink)") + ci(244, 190, 4, "var(--ink)");
      s += tx(136, 86, "1", ink, 24) + tx(202, 86, "5", ink, 24) + tx(278, 86, "2", ink, 24) + tx(370, 86, "15.2", mut, 12);
      s += tx(70, 136, "1", 'style="fill:#8b5cf6"', 24) + tx(136, 136, "5", 'style="fill:#8b5cf6"', 24) + tx(202, 136, "2", 'style="fill:#8b5cf6"', 24) + tx(370, 136, "× 10 = 152", 'style="fill:#8b5cf6"', 12);
      s += tx(202, 186, "1", 'style="fill:#0ea5e9"', 24) + tx(278, 186, "5", 'style="fill:#0ea5e9"', 24) + tx(344, 186, "2", 'style="fill:#0ea5e9"', 24) + tx(370, 222, "× 0.1 = 1.52", 'style="fill:#0ea5e9"', 12);
      return g(s);
    },
    spots: [[50, 80, ["Start: 15.2", "البداية: 15.2"], ["Manal's pencil is 15.2 cm.", "قلم منال طوله 15.2 سم."]],
      [30, 136, ["× 10: one place left", "× 10: خانة إلى اليسار"], ["Every digit is worth 10 times more: 152.", "كل رقم قيمته 10 أمثالها: 152."]],
      [150, 200, ["× 0.1: one place right", "× 0.1: خانة إلى اليمين"], ["Every digit is worth 10 times less: 1.52.", "كل رقم قيمته جزء من عشرة: 1.52."]],
      [244, 165, ["The point stays", "العلامة ثابتة"], ["The decimal point never moves; the digits slide past it.", "العلامة العشرية لا تتحرك أبدًا، والأرقام هي التي تنزلق."]],
      [300, 20, ["Powers of ten", "قوى العشرة"], ["× 100 moves 2 places, × 1,000 moves 3 places.", "الضرب في 100 ينقل خانتين، وفي 1,000 ينقل ثلاث خانات."]]]
  };
  D.mp5u5l2 = {
    title: ["0.3 × 0.4 on a hundredths grid", "0.3 × 0.4 على شبكة المائة"],
    svg: function () {
      var s = gridSvg(40, 20, 200, function (k) { var c = Math.floor(k / 10), r = k % 10; return c < 3 && r < 4 ? "#ef4444" : (c < 3 ? "rgba(239,68,68,.15)" : (r < 4 ? "rgba(59,130,246,.15)" : null)); });
      s += tx(70, 14, "0.3", 'style="fill:#f97316"', 13) + tx(26, 64, "0.4", 'style="fill:#3b82f6"', 13) + tx(320, 90, "0.3 × 0.4", ink, 18) + tx(320, 122, "= 0.12", 'style="fill:#dc2626"', 22) + tx(320, 160, "3 × 4 = 12", mut, 13);
      return g(s);
    },
    spots: [[70, 230, ["Width 0.3", "العرض 0.3"], ["3 columns of the whole.", "3 أعمدة من الواحد الصحيح."]],
      [250, 60, ["Height 0.4", "الارتفاع 0.4"], ["4 rows of the whole.", "4 صفوف من الواحد الصحيح."]],
      [70, 60, ["Overlap: 12 squares", "التقاطع: 12 مربعًا"], ["12 hundredths = 0.12.", "12 جزءًا من مائة = 0.12."]],
      [320, 140, ["Tenths × tenths = hundredths", "أجزاء من عشرة × أجزاء من عشرة = أجزاء من مائة"], ["1 + 1 = 2 decimal places in the product.", "1 + 1 = 2 رقمين عشريين في الناتج."]],
      [320, 190, ["Smaller than both", "أصغر من العاملين"], ["0.12 < 0.3 and 0.12 < 0.4: a part of a part.", "0.12 < 0.3 و0.12 < 0.4: جزء من جزء."]]]
  };
  D.mp5u5l3 = {
    title: ["The metric ladder", "سلم الوحدات المترية"],
    svg: function () {
      var s = "", u = [["km", "كم"], ["m", "م"], ["cm", "سم"], ["mm", "مم"]], f = ["× 1,000", "× 100", "× 10"], i;
      for (i = 0; i < 4; i++) { var x = 20 + i * 98; s += rc(x, 30, 70, 40, ["#c4b5fd", "#93c5fd", "#86efac", "#fcd34d"][i], null, 8) + tx(x + 35, 56, t(u[i][0], u[i][1]), 'style="fill:#0f172a"', 16); if (i < 3) s += tx(x + 84, 22, f[i], 'style="fill:#8b5cf6"', 10) + tx(x + 84, 88, f[i].replace("× 1,000", "× 0.001").replace("× 100", "× 0.01").replace("× 10", "× 0.1"), 'style="fill:#0ea5e9"', 10); }
      s += rc(20, 120, 160, 40, "var(--card)", "var(--line)", 8) + tx(100, 146, "1 kg = 1,000 g", ink, 13) + rc(210, 120, 170, 40, "var(--card)", "var(--line)", 8) + tx(295, 146, "1 L = 1,000 mL", ink, 13);
      s += tx(200, 200, "1.35 m = 135 cm = 1,350 mm", 'style="fill:#f97316"', 15);
      return g(s);
    },
    spots: [[90, 12, ["Big to small: multiply by 10, 100, 1,000", "من الكبير إلى الصغير: × 10 أو 100 أو 1,000"], ["1 km = 1,000 m, so km × 1,000 = m.", "1 كم = 1,000 م، إذن كم × 1,000 = م."]],
      [90, 100, ["Small to big: multiply by 0.1, 0.01, 0.001", "من الصغير إلى الكبير: × 0.1 أو 0.01 أو 0.001"], ["4,230 mL × 0.001 = 4.23 L.", "4,230 مل × 0.001 = 4.23 لتر."]],
      [100, 170, ["Mass", "الكتلة"], ["The cat: 3.648 kg = 3,648 g.", "القطة: 3.648 كجم = 3,648 جم."]],
      [295, 170, ["Capacity", "السعة"], ["Dalia's juice: 430 mL = 0.43 L.", "عصير داليا: 430 مل = 0.43 لتر."]],
      [200, 222, ["Equivalent measurements", "قياسات مكافئة"], ["Rania's bandage written three ways.", "ضمادة رانيا مكتوبة بثلاث طرق."]]]
  };
  D.mp5u5l4 = {
    title: ["Make the divisor whole", "اجعل المقسوم عليه صحيحًا"],
    svg: function () {
      var s = tx(110, 60, "26.4", ink, 26) + tx(170, 60, "÷", ink, 24) + tx(230, 60, "2.2", 'style="fill:#ef4444"', 26);
      s += arrow("wh1", "#f97316") + '<path d="M110 74 L110 116" stroke="#f97316" stroke-width="2.5" marker-end="url(#wh1)"/><path d="M230 74 L230 116" stroke="#f97316" stroke-width="2.5" marker-end="url(#wh1)"/>' + tx(170, 100, "× 10", 'style="fill:#f97316"', 14);
      s += tx(110, 150, "264", ink, 26) + tx(170, 150, "÷", ink, 24) + tx(230, 150, "22", 'style="fill:#16a34a"', 26) + tx(310, 150, "= 12", 'style="fill:#9333ea"', 26);
      s += tx(200, 205, "2,500 ÷ 100 = 25     5.7 ÷ 0.1 = 57", mut, 13);
      return g(s);
    },
    spots: [[270, 40, ["Decimal divisor", "مقسوم عليه عشري"], ["2.2 is not a whole number.", "2.2 ليس عددًا صحيحًا."]],
      [170, 120, ["Multiply both by 10", "اضرب العددين في 10"], ["Both numbers change but the quotient stays the same.", "يتغير العددان لكن خارج القسمة يبقى كما هو."]],
      [230, 175, ["Whole divisor", "مقسوم عليه صحيح"], ["Now divide as usual: 264 ÷ 22.", "الآن نقسم كالمعتاد: 264 ÷ 22."]],
      [345, 150, ["Quotient 12", "خارج القسمة 12"], ["12 jugs of 2.2 L make 26.4 L.", "12 إبريقًا سعة 2.2 لتر تعطي 26.4 لترًا."]],
      [200, 225, ["Dividing by powers of ten", "القسمة على قوى العشرة"], ["÷ 100 moves digits 2 places right; ÷ 0.1 moves them 1 place left.", "القسمة على 100 تنقل الأرقام خانتين يمينًا، وعلى 0.1 تنقلها خانة يسارًا."]]]
  };
  D.mp5u6l1 = {
    title: ["Ali's bus route through the expression", "مسار حافلة علي في المقدار"],
    svg: function () {
      var s = tx(200, 50, "300.53 − 11.04 × 0.2 ÷ 0.01 + 13.07", ink, 15), st = [[200, "1", "11.04 × 0.2 = 2.208", "#f97316"], [200, "2", "2.208 ÷ 0.01 = 220.8", "#f97316"], [200, "3", "300.53 − 220.8 = 79.73", "#3b82f6"], [200, "4", "79.73 + 13.07 = 92.8", "#3b82f6"]];
      st.forEach(function (x, i) { var y = 86 + i * 36; s += ci(70, y - 5, 12, x[3]) + tx(70, y, x[1], 'style="fill:#fff"', 12) + tx(100, y, x[2], ink, 14, "start"); });
      return g(s);
    },
    spots: [[200, 30, ["The expression", "المقدار"], ["Four operations: which comes first?", "أربع عمليات: أيها أولًا؟"]],
      [40, 81, ["Stop 1: ×", "المحطة 1: الضرب"], ["× and ÷ first, starting from the left.", "الضرب والقسمة أولًا بدءًا من اليسار."]],
      [40, 117, ["Stop 2: ÷", "المحطة 2: القسمة"], ["Still the express stops, left to right.", "ما زلنا في المحطات السريعة من اليسار."]],
      [40, 153, ["Stop 3: −", "المحطة 3: الطرح"], ["Then + and − from left to right.", "ثم الجمع والطرح من اليسار."]],
      [330, 189, ["Stop 4: + = 92.8", "المحطة 4: الجمع = 92.8"], ["The value of the expression.", "قيمة المقدار."]]]
  };
  D.mp5u6l2 = {
    title: ["From Kamel's story to an expression", "من قصة كامل إلى مقدار"],
    svg: function () {
      var s = rc(20, 30, 100, 40, "#93c5fd", null, 8) + tx(70, 56, "1,000", 'style="fill:#0f172a"', 16) + tx(140, 56, "+", ink, 20) + rc(160, 30, 120, 40, "#86efac", null, 8) + tx(220, 56, "(50 + 30)", 'style="fill:#0f172a"', 15) + tx(300, 56, "×", ink, 20) + rc(320, 30, 60, 40, "#fcd34d", null, 8) + tx(350, 56, "4", 'style="fill:#0f172a"', 18);
      s += tx(70, 100, t("savings", "المدخرات"), mut, 11) + tx(220, 100, t("each week", "كل أسبوع"), mut, 11) + tx(350, 100, t("weeks", "أسابيع"), mut, 11);
      s += tx(200, 150, "= 1,000 + 80 × 4 = 1,000 + 320", ink, 15) + tx(200, 186, "= 1,320 LE", 'style="fill:#16a34a"', 18);
      return g(s);
    },
    spots: [[70, 120, ["He already has 1,000 LE", "معه بالفعل 1,000 جنيه"], ["The starting amount is added once.", "المبلغ الأول يُجمع مرة واحدة."]],
      [220, 120, ["Parentheses", "الأقواس"], ["Both jobs repeat every week, so 50 + 30 goes in parentheses.", "الوظيفتان تتكرران كل أسبوع، فيوضع 50 + 30 بين قوسين."]],
      [350, 120, ["× 4 weeks", "× 4 أسابيع"], ["The weekly savings repeat 4 times.", "المدخرات الأسبوعية تتكرر 4 مرات."]],
      [200, 205, ["Evaluate", "إيجاد القيمة"], ["Parentheses, then ×, then +: 1,320 LE.", "الأقواس ثم الضرب ثم الجمع: 1,320 جنيهًا."]]]
  };
  D.mp5u6l3 = {
    title: ["An input-output machine", "آلة المدخلات والمخرجات"],
    svg: function () {
      var s = rc(140, 40, 120, 70, "rgba(147,51,234,.18)", "#9333ea", 12) + tx(200, 82, "n × 2", ink, 20) + arrow("io1", "var(--ink)") + '<path d="M60 75 L134 75" stroke="var(--ink)" stroke-width="2" marker-end="url(#io1)"/><path d="M266 75 L340 75" stroke="var(--ink)" stroke-width="2" marker-end="url(#io1)"/>';
      s += tx(40, 80, "n", ink, 18) + tx(360, 80, "?", ink, 18);
      [[1, 2], [2, 4], [3, 6], [7, 14]].forEach(function (r, i) { var y = 148 + i * 22; s += tx(150, y, String(r[0]), ink, 14) + tx(250, y, String(r[1]), 'style="fill:#16a34a"', 14); });
      s += tx(150, 128, t("bicycles", "الدراجات"), mut, 11) + tx(250, 128, t("wheels", "العجلات"), mut, 11);
      return g(s);
    },
    spots: [[40, 105, ["Input n", "المدخل n"], ["The number that goes in: the number of bicycles.", "العدد الذي يدخل: عدد الدراجات."]],
      [200, 30, ["The rule", "القاعدة"], ["n × 2: what the machine does to every input.", "n × 2: ما تفعله الآلة بكل مدخل."]],
      [360, 105, ["Output", "المخرج"], ["The number that comes out: the wheels.", "العدد الذي يخرج: العجلات."]],
      [300, 175, ["Test every pair", "اختبر كل زوج"], ["1 → 2, 2 → 4, 3 → 6: the rule works each time.", "1 ← 2 و2 ← 4 و3 ← 6: القاعدة تصلح في كل مرة."]],
      [100, 214, ["Use the rule", "استخدم القاعدة"], ["7 bicycles: 7 × 2 = 14 wheels.", "7 دراجات: 7 × 2 = 14 عجلة."]]]
  };

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  L.names.mp5_pv = ["Place-value builder", "بناء القيمة المكانية"];
  L.names.mp5_line = ["Zooming number line", "خط الأعداد المكبر"];
  L.names.mp5_addgrid = ["Decimal addition grids", "شبكات جمع الأعداد العشرية"];
  L.names.mp5_subgrid = ["Decimal subtraction grids", "شبكات طرح الأعداد العشرية"];
  L.names.mp5_balance = ["Equation balance", "ميزان المعادلات"];
  L.names.mp5_tree = ["Factor tree builder", "بناء شجرة العوامل"];
  L.names.mp5_hops = ["Multiples frog race", "سباق ضفادع المضاعفات"];
  L.names.mp5_area = ["Area model cutter", "تقسيم نموذج المساحة"];
  L.names.mp5_algo = ["Multiplication algorithm stepper", "خطوات خوارزمية الضرب"];
  L.names.mp5_groups = ["Restaurant groups builder", "مجموعات المطعم"];
  L.names.mp5_divarea = ["Division area model", "نموذج المساحة للقسمة"];
  L.names.mp5_longdiv = ["Long division wheel", "عجلة القسمة المطولة"];
  L.names.mp5_barmodel = ["Story bar models", "نماذج الشريط للقصص"];
  L.names.mp5_pow10 = ["Powers of ten slider", "منزلق قوى العشرة"];
  L.names.mp5_whole = ["Make the divisor whole", "اجعل المقسوم عليه صحيحًا"];
  L.names.mp5_decarea = ["Decimal area grid", "شبكة مساحة الأعداد العشرية"];
  L.names.mp5_metric = ["Metric measuring tools", "أدوات القياس المترية"];
  L.names.mp5_order = ["Order of operations bus", "حافلة ترتيب العمليات"];
  L.names.mp5_build = ["Expression builder", "بناء المقادير"];
  L.names.mp5_rule = ["Rule machine", "آلة القاعدة"];

  /* ---------- Arabic-Indic digits in every Arabic string of this grade ---------- */
  var EAST = "٠١٢٣٤٥٦٧٨٩";
  function arz(s) {
    if (typeof s !== "string") return s;
    return s.split(/(<[^>]+>)/).map(function (p) {
      if (p.charAt(0) === "<") return p;
      return p.replace(/(\d),(?=\d{3})/g, "$1٬").replace(/(\d)\.(?=\d)/g, "$1٫").replace(/(\d), (?=\d)/g, "$1، ").replace(/[0-9]/g, function (c) { return EAST[+c]; });
    }).join("");
  }
  function pr(p) { if (Array.isArray(p) && p.length === 2 && typeof p[1] === "string") p[1] = arz(p[1]); }
  function arr(a) { return (a || []).map(arz); }
  var G = E.MTHG && E.MTHG.p5;
  if (G) {
    if (G.book) G.book.ar = arz(G.book.ar);
    G.units.forEach(function (u) {
      u.title.ar = arz(u.title.ar);
      u.lessons.forEach(function (l) {
        l.title.ar = arz(l.title.ar);
        l.idea.official.ar = arr(l.idea.official.ar); l.idea.story.ar = arr(l.idea.story.ar);
        l.words.forEach(function (w) { w[1] = arz(w[1]); w[3] = arz(w[3]); });
        l.quiz.forEach(function (q) { pr(q.q); q.c.forEach(pr); pr(q.off); pr(q.sto); });
        if (OBJ[l.id]) OBJ[l.id].ar = arr(OBJ[l.id].ar);
        (EX[l.id] || []).forEach(function (q) { pr(q.q); pr(q.off); pr(q.sto); (q.items || []).forEach(pr); (q.pairs || []).forEach(function (pp) { pr(pp[0]); pr(pp[1]); }); });
        var dg = D[l.id]; if (dg) { pr(dg.title); dg.spots.forEach(function (s) { pr(s[2]); pr(s[3]); }); }
      });
    });
  }
})();
