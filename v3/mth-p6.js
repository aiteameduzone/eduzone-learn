/* EduZone Learn v3 - National Maths, Egyptian Primary 6, Term 1 (2026-2027).
   Follows the Ministry Primary 6 Mathematics Student Book (Term 1) contents and printed pages:
     Theme 1  Unit 1 Divisibility, Factors and Multiples (book lessons 1-4)  -> 2 lessons
              Unit 2 Rational Numbers (6)                                    -> 3 lessons
              Unit 3 Algebraic Expressions (7)                               -> 3 lessons
              Unit 4 Equations and Inequalities (3)                          -> 2 lessons
     Theme 2  Unit 5 Dependent and Independent Variables (4)                 -> 2 lessons
              Unit 6 Data Distributions (5)                                  -> 3 lessons
              Unit 7 Measures of Central Tendency and Spread (4)             -> 2 lessons
   Adjacent short book lessons are merged (book lesson names kept in the titles, first merged
   lesson's printed page). 17 lessons, ids mp6u1l1 ... mp6u7l2. Registered as EZ3.MTHG.p6.
   Labs: part 1 of every lesson is a live canvas manipulative (m6_* in this file). */
(function () {
  "use strict";
  var E = window.EZ3;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  var EAST = "٠١٢٣٤٥٦٧٨٩";
  /* Arabic prose: local digits and decimal comma, but leave eq spans (expressions) untouched */
  function A(s) {
    if (typeof s !== "string") return s;
    return s.split(/(<span class="eq"[^>]*>.*?<\/span>)/).map(function (p, i) {
      return i % 2 ? p : p.replace(/−(\d+(?:\.\d+)?)/g, "\u2066−$1\u2069").replace(/(\d)\.(\d)/g, "$1٫$2").replace(/\d/g, function (c) { return EAST[c]; });
    }).join("");
  }
  function P(p) { return [p[0], A(p[1])]; }
  E.mthP6A = A;
  function Q(q, c, off, sto) { return { q: P(q), c: c.map(P), off: P(off), sto: P(sto) }; }
  function W(en, ar, de, da) { return [en, A(ar), de, A(da)]; }
  function Ls(id, page, icon, title, off, sto, words, lab, quiz) {
    return { id: id, page: page, icon: icon, title: { en: title[0], ar: title[1] },
      idea: { official: { en: off[0], ar: off[1].map(A) }, story: { en: sto[0], ar: sto[1].map(A) } },
      words: words, lab: { parts: [{ type: lab }] }, quiz: quiz };
  }
  var e = eq;
  E.MTHG = E.MTHG || {};
  var U = [];

  /* ======================= UNIT 1 - DIVISIBILITY, FACTORS AND MULTIPLES ======================= */
  U.push({ id: "mp6u1", num: 1, icon: "🔢", color: "blue", title: { en: "Divisibility, Factors and Multiples", ar: "قابلية القسمة والعوامل والمضاعفات" }, lessons: [
    Ls("mp6u1l1", 1, "➗", ["Divisibility and Factorizing a Number to Its Prime Factors", "قابلية القسمة وتحليل العدد إلى عوامله الأولية"],
      [["A number is divisible by another when the quotient is a whole number and the remainder is zero: " + e("120 ÷ 6 = 20") + " remainder 0, so 120 is divisible by 6.",
        "Rules: by 2 if the ones digit is even; by 5 if it is 0 or 5; by 10 if it is 0; by 3 if the sum of the digits is divisible by 3; by 4 if the last two digits make a number divisible by 4; by 6 if it is divisible by both 2 and 3.",
        "From the Food Bank volunteers list: for 102 the digit sum is " + e("1 + 0 + 2 = 3") + " and it is even, so 102 is divisible by 2, 3 and 6, but not by 4, 5 or 10.",
        "A prime number has exactly two factors, 1 and itself: 2, 3, 5, 7, 11, ... Prime factorization writes a number as a product of primes only.",
        "Factor tree of 40: " + e("40 = 4 × 10 = 2 × 2 × 2 × 5 = 2³ × 5") + ". Keep splitting until every branch ends in a prime."],
       ["يقبل العدد القسمة على عدد آخر إذا كان خارج القسمة عددًا صحيحًا والباقي صفرًا: " + e("120 ÷ 6 = 20") + " والباقي 0، إذن 120 يقبل القسمة على 6.",
        "القواعد: على 2 إذا كان رقم الآحاد زوجيًا، وعلى 5 إذا كان 0 أو 5، وعلى 10 إذا كان 0، وعلى 3 إذا كان مجموع الأرقام يقبل القسمة على 3، وعلى 4 إذا كان العدد المكوَّن من آخر رقمين يقبل القسمة على 4، وعلى 6 إذا قبل القسمة على 2 و3 معًا.",
        "من قائمة متطوعي بنك الطعام: العدد 102 مجموع أرقامه " + e("1 + 0 + 2 = 3") + " وهو زوجي، إذن يقبل القسمة على 2 و3 و6، ولا يقبل القسمة على 4 أو 5 أو 10.",
        "العدد الأولي له عاملان فقط هما 1 والعدد نفسه: 2، 3، 5، 7، 11، ... والتحليل إلى العوامل الأولية هو كتابة العدد في صورة حاصل ضرب أعداد أولية فقط.",
        "شجرة عوامل العدد 40: " + e("40 = 4 × 10 = 2 × 2 × 2 × 5 = 2³ × 5") + "، ونستمر في التفريع حتى ينتهي كل فرع بعدد أولي."]],
      [["Salma volunteers at the Egyptian Food Bank. Her city has 225 volunteers.",
        "Can they make 5 equal teams? The ones digit is 5, so yes: 225 ÷ 5 = 45 in each team.",
        "Can they make 3 equal teams? 2 + 2 + 5 = 9, and 9 is divisible by 3, so yes: 75 in each team.",
        "Can they make 2 equal teams? 225 is odd, so no.",
        "To plan the boxes she breaks 42 into primes with a tree: " + e("42 = 2 × 21 = 2 × 3 × 7") + ". Primes are the bricks every number is built from."],
       ["تتطوع سلمى في بنك الطعام المصري، وفي مدينتها 225 متطوعًا.",
        "هل يمكن تكوين 5 فرق متساوية؟ رقم الآحاد 5، إذن نعم: في كل فريق 225 ÷ 5 = 45 متطوعًا.",
        "وهل يمكن تكوين 3 فرق متساوية؟ 2 + 2 + 5 = 9، و9 يقبل القسمة على 3، إذن نعم: 75 في كل فريق.",
        "وهل يمكن تكوين فريقين متساويين؟ العدد 225 فردي، إذن لا.",
        "ولتخطط الصناديق حللت العدد 42 بشجرة العوامل: " + e("42 = 2 × 21 = 2 × 3 × 7") + "، فالأعداد الأولية هي الطوب الذي يُبنى منه كل عدد."]],
      [W("Divisible", "قابل للقسمة", "Divides with a remainder of zero.", "يقبل القسمة إذا كان الباقي صفرًا."),
        W("Factor", "عامل", "A number that divides another exactly: 4 is a factor of 12.", "عدد يقسم عددًا آخر قسمة تامة: 4 عامل من عوامل 12."),
        W("Multiple", "مضاعف", "The product of a number and a whole number: 12 is a multiple of 4.", "حاصل ضرب العدد في عدد صحيح: 12 مضاعف للعدد 4."),
        W("Prime number", "عدد أولي", "A number with exactly two factors, 1 and itself.", "عدد له عاملان فقط هما 1 والعدد نفسه."),
        W("Prime factorization", "التحليل إلى العوامل الأولية", "Writing a number as a product of prime numbers.", "كتابة العدد في صورة حاصل ضرب أعداد أولية.")],
      "m6_divtree",
      [Q(["Which number is divisible by 2, 3, 4, 5, 6 and 10?", "أي عدد يقبل القسمة على 2 و3 و4 و5 و6 و10؟"], [[e("120"), e("120")], [e("102"), e("102")], [e("225"), e("225")], [e("100"), e("100")]],
          ["120 ends in 0 (by 2, 5, 10), 1 + 2 + 0 = 3 (by 3 and 6), 20 is divisible by 4.", "العدد 120 آحاده 0 (يقبل القسمة على 2 و5 و10)، و1 + 2 + 0 = 3 (على 3 و6)، و20 يقبل القسمة على 4."], ["Salma can share 120 volunteers into 2, 3, 4, 5, 6 or 10 equal teams.", "تستطيع سلمى توزيع 120 متطوعًا على 2 أو 3 أو 4 أو 5 أو 6 أو 10 فرق متساوية."]),
        Q(["Can 254 students be shared equally among 5 buses?", "هل يمكن توزيع 254 طالبًا بالتساوي على 5 حافلات؟"], [["No, the ones digit is 4", "لا، رقم الآحاد 4"], ["Yes, 50 in each bus", "نعم، 50 في كل حافلة"], ["Yes, 51 in each bus", "نعم، 51 في كل حافلة"], ["No, because 254 is odd", "لا، لأن 254 فردي"]],
          ["Divisible by 5 needs a ones digit of 0 or 5. 254 ÷ 5 = 50 remainder 4.", "القسمة على 5 تحتاج رقم آحاد 0 أو 5، و254 ÷ 5 = 50 والباقي 4."], ["Four students would be left standing at the bus stop.", "سيبقى 4 طلاب واقفين في المحطة."]),
        Q(["Which number is divisible by 3?", "أي عدد يقبل القسمة على 3؟"], [[e("117"), e("117")], [e("116"), e("116")], [e("118"), e("118")], [e("101"), e("101")]],
          ["Add the digits: 1 + 1 + 7 = 9, and 9 is divisible by 3. (117 ÷ 3 = 39)", "اجمع الأرقام: 1 + 1 + 7 = 9، و9 يقبل القسمة على 3. (117 ÷ 3 = 39)"], ["The digit-sum trick works like a quick security check at the gate.", "حيلة مجموع الأرقام مثل فحص سريع عند البوابة."]),
        Q(["What is the prime factorization of 40?", "ما تحليل العدد 40 إلى عوامله الأولية؟"], [[e("2³ × 5"), e("2³ × 5")], [e("4 × 10"), e("4 × 10")], [e("2 × 20"), e("2 × 20")], [e("2² × 5"), e("2² × 5")]],
          ["40 = 4 × 10 = 2 × 2 × 2 × 5 = 2³ × 5. 4, 10 and 20 are not prime; 2² × 5 = 20.", "40 = 4 × 10 = 2 × 2 × 2 × 5 = 2³ × 5، والأعداد 4 و10 و20 ليست أولية، و2² × 5 = 20."], ["Every leaf of the tree must be a prime brick.", "كل ورقة في الشجرة يجب أن تكون طوبة أولية."]),
        Q(["What is the prime factorization of 42?", "ما تحليل العدد 42 إلى عوامله الأولية؟"], [[e("2 × 3 × 7"), e("2 × 3 × 7")], [e("6 × 7"), e("6 × 7")], [e("2 × 21"), e("2 × 21")], [e("2² × 3 × 7"), e("2² × 3 × 7")]],
          ["42 = 2 × 21 = 2 × 3 × 7. 6 and 21 are not prime; 2² × 3 × 7 = 84.", "42 = 2 × 21 = 2 × 3 × 7، و6 و21 ليسا أوليين، و2² × 3 × 7 = 84."], ["Salma splits 42 boxes: 2 rows of 21, and 21 is 3 rows of 7.", "قسمت سلمى 42 صندوقًا: صفين في كل منهما 21، و21 هي 3 صفوف في كل منها 7."]),
        Q(["Can 116 food boxes be shared equally among 4 villages?", "هل يمكن توزيع 116 صندوق طعام بالتساوي على 4 قرى؟"], [["Yes, 29 boxes each", "نعم، 29 صندوقًا لكل قرية"], ["No, the remainder is 2", "لا، الباقي 2"], ["Yes, 39 boxes each", "نعم، 39 صندوقًا لكل قرية"], ["No, because 116 is odd", "لا، لأن 116 فردي"]],
          ["The last two digits 16 are divisible by 4, so 116 is: 116 ÷ 4 = 29.", "آخر رقمين 16 يقبلان القسمة على 4، إذن 116 يقبل القسمة على 4: 116 ÷ 4 = 29."], ["Each village truck carries 29 boxes and none are left.", "تحمل شاحنة كل قرية 29 صندوقًا ولا يتبقى شيء."]),
        Q(["Which number is prime?", "أي عدد أولي؟"], [[e("31"), e("31")], [e("21"), e("21")], [e("51"), e("51")], [e("27"), e("27")]],
          ["31 has only the factors 1 and 31. 21 = 3 × 7, 51 = 3 × 17, 27 = 3 × 9.", "العدد 31 عاملاه 1 و31 فقط، أما 21 = 3 × 7 و51 = 3 × 17 و27 = 3 × 9."], ["31 cannot be arranged in a rectangle of chairs except one long row.", "لا يمكن ترتيب 31 كرسيًا في مستطيل إلا في صف واحد طويل."]),
        Q(["6 people volunteered 720 hours in a year equally. How many hours each?", "تطوع 6 أشخاص 720 ساعة في السنة بالتساوي. كم ساعة لكل منهم؟"], [[e("120"), e("120")], [e("12"), e("12")], [e("72"), e("72")], [e("102"), e("102")]],
          ["720 is even and 7 + 2 + 0 = 9, so it is divisible by 6: 720 ÷ 6 = 120.", "720 زوجي و7 + 2 + 0 = 9، إذن يقبل القسمة على 6: 720 ÷ 6 = 120."], ["Each volunteer gives exactly 120 full hours.", "يعطي كل متطوع 120 ساعة كاملة تمامًا."])]),

    Ls("mp6u1l2", 5, "🧩", ["Writing Expressions Using the G.C.F. and Analyzing Least Common Multiples", "كتابة المقادير باستخدام ع.م.أ وتحليل المضاعف المشترك الأصغر"],
      [["Put prime factors in a Venn diagram: " + e("12 = 2 × 2 × 3") + " and " + e("18 = 2 × 3 × 3") + ". The shared factors 2 and 3 go in the overlap.",
        "GCF = product of the overlap = " + e("2 × 3 = 6") + ". LCM = product of every factor in the diagram = " + e("2 × 2 × 3 × 3 = 36") + ".",
        "Relatively prime numbers share only the factor 1, like 4 and 9: GCF = 1 and " + e("LCM = 4 × 9 = 36") + ".",
        "The GCF turns a sum into a product (distributive property): 12 grain bags + 8 cheese packs = " + e("4(3 + 2)") + ": 4 boxes, each with 3 grain bags and 2 cheese packs.",
        "The LCM gives a common denominator: " + e("3/4 + 5/8 = 6/8 + 5/8 = 11/8 = 1 3/8") + "."],
       ["ضع العوامل الأولية في شكل فن: " + e("12 = 2 × 2 × 3") + " و" + e("18 = 2 × 3 × 3") + "، والعاملان المشتركان 2 و3 يوضعان في الجزء المشترك.",
        "ع.م.أ = حاصل ضرب الجزء المشترك = " + e("2 × 3 = 6") + "، وم.م.أ = حاصل ضرب كل العوامل في الشكل = " + e("2 × 2 × 3 × 3 = 36") + ".",
        "العددان الأوليان فيما بينهما عاملهما المشترك الوحيد هو 1، مثل 4 و9: ع.م.أ = 1 و" + e("LCM = 4 × 9 = 36") + ".",
        "ع.م.أ يحوّل المجموع إلى حاصل ضرب (خاصية التوزيع): 12 كيس حبوب + 8 علب جبن = " + e("4(3 + 2)") + "، أي 4 صناديق في كل منها 3 أكياس حبوب وعلبتا جبن.",
        "م.م.أ يعطي مقامًا مشتركًا: " + e("3/4 + 5/8 = 6/8 + 5/8 = 11/8 = 1 3/8") + "."]],
      [["Omar packs charity baskets at school: 36 packs of cheese and 48 grain bags.",
        "He wants as many identical baskets as possible with nothing left, so he needs the GCF of 36 and 48, which is 12.",
        "Each basket gets 36 ÷ 12 = 3 cheese packs and 48 ÷ 12 = 4 grain bags: " + e("36 + 48 = 12(3 + 4)") + ".",
        "At home, persimmons come 4 pieces to a bag and bananas 8 pieces to a bag. To add 3/4 bag and 5/8 bag he counts in eighths, because 8 is the LCM of 4 and 8.",
        e("3/4 = 6/8") + ", so together he has " + e("11/8 = 1 3/8") + " bags."],
       ["يجهّز عمر سلال الخير في المدرسة: 36 علبة جبن و48 كيس حبوب.",
        "يريد أكبر عدد من السلال المتماثلة دون أن يتبقى شيء، فيحتاج ع.م.أ للعددين 36 و48، وهو 12.",
        "تأخذ كل سلة 36 ÷ 12 = 3 علب جبن و48 ÷ 12 = 4 أكياس حبوب: " + e("36 + 48 = 12(3 + 4)") + ".",
        "في البيت يأتي الكاكي 4 قطع في الكيس والموز 8 قطع في الكيس، ولكي يجمع 3/4 كيس و5/8 كيس يعدّ بالأثمان لأن 8 هو م.م.أ للعددين 4 و8.",
        e("3/4 = 6/8") + "، إذن معه معًا " + e("11/8 = 1 3/8") + " كيس."]],
      [W("Greatest common factor (GCF)", "العامل المشترك الأكبر (ع.م.أ)", "The greatest number that divides two numbers exactly.", "أكبر عدد يقسم العددين قسمة تامة."),
        W("Least common multiple (LCM)", "المضاعف المشترك الأصغر (م.م.أ)", "The smallest non-zero number that is a multiple of both numbers.", "أصغر عدد غير الصفر يكون مضاعفًا للعددين."),
        W("Venn diagram", "شكل فن", "Overlapping circles that show what two sets share.", "دوائر متداخلة توضح ما تشترك فيه مجموعتان."),
        W("Relatively prime", "أوليان فيما بينهما", "Two numbers whose only common factor is 1, like 4 and 9.", "عددان عاملهما المشترك الوحيد 1، مثل 4 و9."),
        W("Distributive property", "خاصية التوزيع", "a(b + c) = ab + ac, for example 4(3 + 2) = 12 + 8.", "a(b + c) = ab + ac، مثل 4(3 + 2) = 12 + 8.")],
      "m6_venn",
      [Q(["What is the GCF of 12 and 18?", "ما ع.م.أ للعددين 12 و18؟"], [[e("6"), e("6")], [e("3"), e("3")], [e("2"), e("2")], [e("36"), e("36")]],
          ["12 = 2 × 2 × 3, 18 = 2 × 3 × 3. Shared: 2 × 3 = 6.", "12 = 2 × 2 × 3 و18 = 2 × 3 × 3، والمشترك 2 × 3 = 6."], ["The overlap of the two circles holds a 2 and a 3.", "الجزء المشترك بين الدائرتين فيه 2 و3."]),
        Q(["What is the LCM of 12 and 18?", "ما م.م.أ للعددين 12 و18؟"], [[e("36"), e("36")], [e("6"), e("6")], [e("216"), e("216")], [e("72"), e("72")]],
          ["Multiply every factor in the Venn diagram once: 2 × 2 × 3 × 3 = 36. (216 = 12 × 18 is a common multiple, not the least.)", "اضرب كل عوامل شكل فن مرة واحدة: 2 × 2 × 3 × 3 = 36. (216 = 12 × 18 مضاعف مشترك لكنه ليس الأصغر.)"], ["Count by 18: 18, 36. 36 is the first stop that 12 also reaches.", "عُدّ بالـ18: 18، 36، و36 أول محطة يصل إليها 12 أيضًا."]),
        Q(["What is the LCM of 6 and 9?", "ما م.م.أ للعددين 6 و9؟"], [[e("18"), e("18")], [e("54"), e("54")], [e("3"), e("3")], [e("36"), e("36")]],
          ["6 = 2 × 3, 9 = 3 × 3. LCM = 2 × 3 × 3 = 18.", "6 = 2 × 3 و9 = 3 × 3، إذن م.م.أ = 2 × 3 × 3 = 18."], ["Multiples of 9: 9, 18. 18 is also a multiple of 6.", "مضاعفات 9: 9، 18، و18 مضاعف للعدد 6 أيضًا."]),
        Q(["A boy has 20 packs of cheese and 40 grain bags. Which expression makes the most equal boxes?", "مع ولد 20 علبة جبن و40 كيس حبوب. أي مقدار يعطي أكبر عدد من الصناديق المتساوية؟"], [[e("20(1 + 2)"), e("20(1 + 2)")], [e("10(2 + 4)"), e("10(2 + 4)")], [e("20(2 + 4)"), e("20(2 + 4)")], [e("10(1 + 2)"), e("10(1 + 2)")]],
          ["GCF(20, 40) = 20, so 20 boxes, each with 1 cheese pack and 2 grain bags: 20(1 + 2) = 60.", "ع.م.أ(20، 40) = 20، إذن 20 صندوقًا في كل منها علبة جبن وكيسا حبوب: 20(1 + 2) = 60."], ["10 boxes work, but his friend found 20 boxes, the most possible.", "10 صناديق تنجح، لكن صديقه وجد 20 صندوقًا وهو أكبر عدد ممكن."]),
        Q(["What is the GCF of the relatively prime numbers 4 and 9?", "ما ع.م.أ للعددين الأوليين فيما بينهما 4 و9؟"], [[e("1"), e("1")], [e("0"), e("0")], [e("36"), e("36")], [e("4"), e("4")]],
          ["The overlap is empty of primes, but 1 always divides both, so GCF = 1.", "الجزء المشترك خالٍ من الأعداد الأولية، لكن 1 يقسم العددين دائمًا، إذن ع.م.أ = 1."], ["Two friends with nothing in common still share the number 1.", "صديقان لا يشتركان في شيء ما زالا يشتركان في العدد 1."]),
        Q(["What is the LCM of 5 and 8?", "ما م.م.أ للعددين 5 و8؟"], [[e("40"), e("40")], [e("13"), e("13")], [e("1"), e("1")], [e("80"), e("80")]],
          ["5 and 8 are relatively prime, so LCM = 5 × 8 = 40.", "5 و8 أوليان فيما بينهما، إذن م.م.أ = 5 × 8 = 40."], ["80 is a common multiple too, but 40 comes first.", "80 مضاعف مشترك أيضًا، لكن 40 يأتي قبله."]),
        Q(["Find " + e("3/4 + 5/8") + ".", "أوجد " + e("3/4 + 5/8") + "."], [[e("1 3/8"), e("1 3/8")], [e("8/12"), e("8/12")], [e("1"), e("1")], [e("15/32"), e("15/32")]],
          ["LCM(4, 8) = 8: 3/4 = 6/8, then 6/8 + 5/8 = 11/8 = 1 3/8.", "م.م.أ(4، 8) = 8: 3/4 = 6/8، ثم 6/8 + 5/8 = 11/8 = 1 3/8."], ["Omar counts banana pieces: 6 + 5 = 11 eighths, one full bag and 3 pieces.", "يعدّ عمر قطع الموز: 6 + 5 = 11 ثُمنًا، أي كيس كامل و3 قطع."]),
        Q(["What is the LCM of 6 and 10?", "ما م.م.أ للعددين 6 و10؟"], [[e("30"), e("30")], [e("60"), e("60")], [e("2"), e("2")], [e("16"), e("16")]],
          ["6 = 2 × 3, 10 = 2 × 5. LCM = 2 × 3 × 5 = 30.", "6 = 2 × 3 و10 = 2 × 5، إذن م.م.أ = 2 × 3 × 5 = 30."], ["Two buses: one every 6 minutes, one every 10. They meet again after 30 minutes.", "حافلتان: واحدة كل 6 دقائق وأخرى كل 10 دقائق، تلتقيان مرة أخرى بعد 30 دقيقة."])])
  ] });

  /* ======================= UNIT 2 - RATIONAL NUMBERS ======================= */
  U.push({ id: "mp6u2", num: 2, icon: "↔️", color: "green", title: { en: "Rational Numbers", ar: "الأعداد النسبية" }, lessons: [
    Ls("mp6u2l1", 15, "📏", ["Using a Number Line to Describe Data and Symbols to Compare Numbers", "استخدام خط الأعداد لوصف البيانات والرموز لمقارنة الأعداد"],
      [["A number line goes both ways from 0: positive numbers to the right (or up), negative numbers to the left (or down).",
        "In Egypt the land goes from 145 m below sea level in the Western Desert (" + e("−145") + ") to 2,875 m above sea level in Sinai (" + e("+2,875") + "). Sea level is 0.",
        "On a number line the number to the right is greater: " + e("−3 > −8") + " because −3 is to the right of −8, and " + e("−7 < 2") + ".",
        "Opposite numbers (additive inverses) are the same distance from 0 on opposite sides: the opposite of 5 is " + e("−5") + ", and the opposite of " + e("−5") + " is 5.",
        "Zero is its own opposite, and the opposite of an opposite is the number itself: " + e("−(−3) = 3") + "."],
       ["خط الأعداد يمتد في الاتجاهين من الصفر: الأعداد الموجبة يمينه (أو أعلاه) والأعداد السالبة يساره (أو أسفله).",
        "في مصر يتراوح ارتفاع الأرض من 145 م تحت مستوى سطح البحر في الصحراء الغربية (" + e("−145") + ") إلى 2875 م فوق مستوى سطح البحر في سيناء (" + e("+2,875") + ")، ومستوى سطح البحر هو 0.",
        "على خط الأعداد يكون العدد الأيمن هو الأكبر: " + e("−3 > −8") + " لأن −3 يقع يمين −8، و" + e("−7 < 2") + ".",
        "العددان المتعاكسان (المعكوس الجمعي) على البعد نفسه من الصفر في جهتين متضادتين: معكوس 5 هو " + e("−5") + "، ومعكوس " + e("−5") + " هو 5.",
        "الصفر معكوس نفسه، ومعكوس المعكوس هو العدد نفسه: " + e("−(−3) = 3") + "."]],
      [["Mohamed and Hoda share 10 packs of biscuits each week: 5 each.",
        "This week Mohamed ate 8 packs, so he borrowed 3 from Hoda. His count is " + e("−3") + ": 3 packs below zero.",
        "At the indoor climbing wall the platform is 0. A climber 3 m below it is at " + e("−3") + "; one 3 m above it is at " + e("+3") + ", the opposite.",
        "Would you rather be at " + e("−12") + " or " + e("−8") + "? At −8: it is closer to the platform, and " + e("−8 > −12") + ".",
        "Right means greater, left means smaller, whatever the signs."],
       ["يتقاسم محمد وهدى 10 علب بسكويت كل أسبوع: 5 لكل منهما.",
        "هذا الأسبوع أكل محمد 8 علب، فاستلف 3 من هدى، ورصيده " + e("−3") + ": أي 3 علب تحت الصفر.",
        "في حائط التسلق المنصة هي 0، والمتسلق الذي على بعد 3 م أسفلها عند " + e("−3") + "، والذي على بعد 3 م أعلاها عند " + e("+3") + " وهو معكوسه.",
        "هل تفضل أن تكون عند " + e("−12") + " أم " + e("−8") + "؟ عند −8 لأنها أقرب إلى المنصة، و" + e("−8 > −12") + ".",
        "اليمين يعني الأكبر واليسار يعني الأصغر مهما كانت الإشارات."]],
      [W("Number line", "خط الأعداد", "A line with numbers placed in order at equal spaces.", "خط تُرتب عليه الأعداد على مسافات متساوية."),
        W("Negative number", "عدد سالب", "A number less than zero, written with a minus sign.", "عدد أصغر من الصفر ويُكتب بإشارة سالب."),
        W("Positive number", "عدد موجب", "A number greater than zero.", "عدد أكبر من الصفر."),
        W("Opposite (additive inverse)", "المعكوس الجمعي", "The number at the same distance from 0 on the other side.", "العدد الذي على البعد نفسه من الصفر في الجهة الأخرى."),
        W("Greater than, less than", "أكبر من، أصغر من", "Symbols > and < used to compare two numbers.", "الرمزان > و< لمقارنة عددين.")],
      "m6_numline",
      [Q(["Which is greater: " + e("−3") + " or " + e("−8") + "?", "أيهما أكبر: " + e("−3") + " أم " + e("−8") + "؟"], [[e("−3"), e("−3")], [e("−8"), e("−8")], ["They are equal", "متساويان"], ["They cannot be compared", "لا يمكن المقارنة"]],
          ["−3 lies to the right of −8 on the number line, so −3 > −8.", "−3 يقع يمين −8 على خط الأعداد، إذن −3 > −8."], ["Being 3 m below the platform is higher than being 8 m below.", "أن تكون 3 م تحت المنصة أعلى من أن تكون 8 م تحتها."]),
        Q(["What is the opposite of " + e("−16") + "?", "ما معكوس " + e("−16") + "؟"], [[e("16"), e("16")], [e("−16"), e("−16")], [e("0"), e("0")], [e("1/16"), e("1/16")]],
          ["Opposites are the same distance from 0 on opposite sides: 16 units each.", "المتعاكسان على البعد نفسه من الصفر في جهتين متضادتين: 16 وحدة لكل منهما."], ["16 steps left, then the mirror point is 16 steps right.", "16 خطوة يسارًا، ونقطة المرآة 16 خطوة يمينًا."]),
        Q(["The Western Desert point is 145 m below sea level. Which number shows it?", "نقطة في الصحراء الغربية على عمق 145 م تحت مستوى سطح البحر. أي عدد يمثلها؟"], [[e("−145"), e("−145")], [e("145"), e("145")], [e("0"), e("0")], [e("1.45"), e("1.45")]],
          ["Below sea level (below 0) is negative: −145.", "تحت مستوى سطح البحر (تحت الصفر) يكون سالبًا: −145."], ["The car drives down past the zero sign at the shore.", "تنزل السيارة أسفل علامة الصفر عند الشاطئ."]),
        Q(["Which statement is true?", "أي عبارة صحيحة؟"], [[e("−7 < 2"), e("−7 < 2")], [e("−7 > 2"), e("−7 > 2")], [e("−6 > −2"), e("−6 > −2")], [e("8 < −8"), e("8 < −8")]],
          ["Every negative number is less than every positive number, so −7 < 2.", "كل عدد سالب أصغر من كل عدد موجب، إذن −7 < 2."], ["Seven floors underground is lower than the second floor.", "الدور السابع تحت الأرض أدنى من الدور الثاني."]),
        Q(["What is " + e("−(−3)") + "?", "ما قيمة " + e("−(−3)") + "؟"], [[e("3"), e("3")], [e("−3"), e("−3")], [e("0"), e("0")], [e("−6"), e("−6")]],
          ["The opposite of −3 is 3, so −(−3) = 3.", "معكوس −3 هو 3، إذن −(−3) = 3."], ["Turn around twice and you face the same way again.", "استدر مرتين فتعود إلى الاتجاه نفسه."]),
        Q(["A climber is at " + e("−3") + ". Another is the same distance from the platform but not in the same place. Where is she?", "متسلق عند " + e("−3") + "، وآخر على البعد نفسه من المنصة لكن ليس في المكان نفسه. أين هو؟"], [[e("+3"), e("+3")], [e("−3"), e("−3")], [e("0"), e("0")], [e("−6"), e("−6")]],
          ["The same distance on the other side of 0 is the opposite: 3.", "البعد نفسه في الجهة الأخرى من الصفر هو المعكوس: 3."], ["One climber 3 m below, the other 3 m above.", "متسلق 3 م أسفل والآخر 3 م أعلى."]),
        Q(["Which list is ordered from least to greatest?", "أي قائمة مرتبة من الأصغر إلى الأكبر؟"], [[e("−8, −3, 0, 5"), e("−8, −3, 0, 5")], [e("0, −3, 5, −8"), e("0, −3, 5, −8")], [e("−3, −8, 0, 5"), e("−3, −8, 0, 5")], [e("5, 0, −3, −8"), e("5, 0, −3, −8")]],
          ["Read the number line from left to right: −8, −3, 0, 5.", "اقرأ خط الأعداد من اليسار إلى اليمين: −8، −3، 0، 5."], ["Climbers from the lowest to the highest position.", "المتسلقون من الأدنى إلى الأعلى."])]),

    Ls("mp6u2l2", 23, "🧮", ["Analyzing Rational Numbers by Using Models, Comparing and Ordering Them", "تحليل الأعداد النسبية باستخدام النماذج ومقارنتها وترتيبها"],
      [["A rational number can be written as " + e("a/b") + " where a and b are integers and b ≠ 0: " + e("4 = 4/1") + ", " + e("0.75 = 3/4") + ", " + e("−1.5 = −3/2") + ".",
        "Counting numbers: 1, 2, 3, ... Natural numbers: 0, 1, 2, 3, ... Integers: ..., " + e("−2, −1") + ", 0, 1, 2, ...",
        "Each set lies inside the next: counting ⊂ natural ⊂ integers ⊂ rational. So 2 is in all four sets; " + e("−11") + " is an integer and rational; 4.9 is rational only.",
        "To order rational numbers, place them on a number line: least on the left, greatest on the right: " + e("−9.1 < −9 < 3.75 < 3.76") + ".",
        "Between any two rational numbers there is always another one: 3.755 lies between 3.75 and 3.76."],
       ["العدد النسبي يمكن كتابته في صورة " + e("a/b") + " حيث a وb عددان صحيحان وb ≠ 0: " + e("4 = 4/1") + " و" + e("0.75 = 3/4") + " و" + e("−1.5 = −3/2") + ".",
        "أعداد العد: 1، 2، 3، ... والأعداد الطبيعية: 0، 1، 2، 3، ... والأعداد الصحيحة: ...، " + e("−2, −1") + "، 0، 1، 2، ...",
        "كل مجموعة داخل التي تليها: أعداد العد ⊂ الطبيعية ⊂ الصحيحة ⊂ النسبية، فالعدد 2 في المجموعات الأربع، و" + e("−11") + " عدد صحيح ونسبي، و4.9 نسبي فقط.",
        "لترتيب الأعداد النسبية نضعها على خط الأعداد: الأصغر يسارًا والأكبر يمينًا: " + e("−9.1 < −9 < 3.75 < 3.76") + ".",
        "بين أي عددين نسبيين يوجد دائمًا عدد نسبي آخر: 3.755 يقع بين 3.75 و3.76."]],
      [["Youssef reads the thermometer on a winter morning in Saint Catherine: " + e("−2.5") + " °C.",
        "At noon it is 4 °C there, and in Aswan it is 24.5 °C.",
        "He writes each one as a fraction: " + e("−2.5 = −5/2") + ", " + e("4 = 4/1") + ", " + e("24.5 = 49/2") + ", so all of them are rational.",
        "He orders them on a number line: " + e("−2.5 < 4 < 24.5") + ".",
        "His little sister asks for a temperature between 3.75 and 3.76. He smiles: 3.755. There is always room for one more."],
       ["يقرأ يوسف الترمومتر في صباح شتوي في سانت كاترين: " + e("−2.5") + " °س.",
        "عند الظهر تصبح 4 °س هناك، وفي أسوان 24.5 °س.",
        "يكتب كلًّا منها في صورة كسر: " + e("−2.5 = −5/2") + " و" + e("4 = 4/1") + " و" + e("24.5 = 49/2") + "، إذن كلها أعداد نسبية.",
        "يرتبها على خط الأعداد: " + e("−2.5 < 4 < 24.5") + ".",
        "تسأله أخته الصغيرة عن درجة بين 3.75 و3.76، فيبتسم: 3.755، فهناك دائمًا مكان لعدد آخر."]],
      [W("Rational number", "عدد نسبي", "A number that can be written as a/b with integers a and b, b not zero.", "عدد يمكن كتابته في صورة a/b حيث a وb عددان صحيحان وb لا يساوي صفرًا."),
        W("Integer", "عدد صحيح", "Whole numbers, their opposites and zero.", "الأعداد الطبيعية ومعكوساتها والصفر."),
        W("Natural number", "عدد طبيعي", "0, 1, 2, 3, ...", "0، 1، 2، 3، ..."),
        W("Counting number", "عدد العد", "1, 2, 3, ...", "1، 2، 3، ..."),
        W("Subset", "مجموعة جزئية", "A set that lies completely inside another set.", "مجموعة تقع كلها داخل مجموعة أخرى.")],
      "m6_sets",
      [Q(["What is the smallest set that contains " + e("−11") + "?", "ما أصغر مجموعة تحتوي على " + e("−11") + "؟"], [["Integers", "الأعداد الصحيحة"], ["Natural numbers", "الأعداد الطبيعية"], ["Counting numbers", "أعداد العد"], ["It is not rational", "ليس عددًا نسبيًا"]],
          ["−11 is a negative whole number, so its best set is the integers (it is also rational).", "−11 عدد صحيح سالب، فأنسب مجموعة له الأعداد الصحيحة (وهو نسبي أيضًا)."], ["Negative numbers never enter the natural numbers' room.", "الأعداد السالبة لا تدخل غرفة الأعداد الطبيعية."]),
        Q(["Write 0.75 as a fraction.", "اكتب 0.75 في صورة كسر."], [[e("3/4"), e("3/4")], [e("7/5"), e("7/5")], [e("75/10"), e("75/10")], [e("1/75"), e("1/75")]],
          ["0.75 = 75/100 = 3/4.", "0.75 = 75/100 = 3/4."], ["Three quarters of a pound is 75 piasters.", "ثلاثة أرباع الجنيه 75 قرشًا."]),
        Q(["Which number is NOT a natural number?", "أي عدد ليس عددًا طبيعيًا؟"], [[e("−3"), e("−3")], [e("0"), e("0")], [e("14"), e("14")], [e("1"), e("1")]],
          ["Natural numbers are 0, 1, 2, 3, ..., so −3 is not natural.", "الأعداد الطبيعية 0، 1، 2، 3، ...، إذن −3 ليس طبيعيًا."], ["You cannot count −3 apples on a table.", "لا يمكنك أن تعدّ −3 تفاحات على المنضدة."]),
        Q(["Which statement is always true?", "أي عبارة صحيحة دائمًا؟"], [["All integers are rational numbers", "كل الأعداد الصحيحة أعداد نسبية"], ["All rational numbers are integers", "كل الأعداد النسبية أعداد صحيحة"], ["All integers are natural numbers", "كل الأعداد الصحيحة أعداد طبيعية"], ["All rational numbers are counting numbers", "كل الأعداد النسبية أعداد عد"]],
          ["Any integer n can be written n/1, so integers are inside the rational numbers. 0.5 is rational but not an integer.", "أي عدد صحيح n يُكتب n/1، فالصحيحة داخل النسبية، و0.5 نسبي لكنه ليس صحيحًا."], ["The integers' circle sits inside the rational circle.", "دائرة الأعداد الصحيحة داخل دائرة الأعداد النسبية."]),
        Q(["Which number lies between 3.75 and 3.76?", "أي عدد يقع بين 3.75 و3.76؟"], [[e("3.755"), e("3.755")], [e("3.705"), e("3.705")], [e("3.8"), e("3.8")], [e("3.65"), e("3.65")]],
          ["3.750 < 3.755 < 3.760.", "3.750 < 3.755 < 3.760."], ["Zoom in: there are thousandths hiding between the hundredths.", "كبّر الصورة: بين الأجزاء من مئة تختبئ أجزاء من ألف."]),
        Q(["Which list is ordered from least to greatest?", "أي قائمة مرتبة من الأصغر إلى الأكبر؟"], [[e("−9.1, −9, 3.75, 3.76"), e("−9.1, −9, 3.75, 3.76")], [e("−9, −9.1, 3.75, 3.76"), e("−9, −9.1, 3.75, 3.76")], [e("3.76, 3.75, −9, −9.1"), e("3.76, 3.75, −9, −9.1")], [e("−9.1, −9, 3.76, 3.75"), e("−9.1, −9, 3.76, 3.75")]],
          ["−9.1 is left of −9 on the number line, and 3.75 < 3.76.", "−9.1 يقع يسار −9 على خط الأعداد، و3.75 < 3.76."], ["The colder −9.1 °C comes before −9 °C.", "درجة −9.1 الأبرد تأتي قبل −9."]),
        Q(["Write " + e("−1.5") + " as a fraction.", "اكتب " + e("−1.5") + " في صورة كسر."], [[e("−3/2"), e("−3/2")], [e("−1/5"), e("−1/5")], [e("−15/100"), e("−15/100")], [e("3/2"), e("3/2")]],
          ["1.5 = 15/10 = 3/2, so −1.5 = −3/2.", "1.5 = 15/10 = 3/2، إذن −1.5 = −3/2."], ["One and a half loaves owed is three halves owed.", "رغيف ونصف دَين يساوي ثلاثة أنصاف دَين."])]),

    Ls("mp6u2l3", 28, "📐", ["Exploring Absolute Value and Comparing Absolute Values", "استكشاف القيمة المطلقة ومقارنة القيم المطلقة"],
      [["The absolute value of a number is its distance from 0 on the number line, so it is always positive or zero: " + e("|−3| = 3") + " and " + e("|3| = 3") + ".",
        "Opposite numbers have equal absolute values: " + e("|−2| = |2| = 2") + ".",
        "The farther a number is from 0, the greater its absolute value: " + e("|−8.2| > |−7.9|") + ".",
        "Comparing numbers and comparing absolute values are different: " + e("−33 < −17") + " but " + e("|−33| > |−17|") + ". Freezer B at −33 °C is colder than freezer A at −17 °C.",
        "Money: borrowing 6.50 LE from Naglaa and 3.25 LE from Rawan can be written " + e("−6.50") + " and " + e("−3.25") + ". Since " + e("|−6.50| > |−3.25|") + ", you owe Naglaa more."],
       ["القيمة المطلقة للعدد هي بعده عن الصفر على خط الأعداد، فهي دائمًا موجبة أو صفر: " + e("|−3| = 3") + " و" + e("|3| = 3") + ".",
        "العددان المتعاكسان لهما القيمة المطلقة نفسها: " + e("|−2| = |2| = 2") + ".",
        "كلما بعد العدد عن الصفر زادت قيمته المطلقة: " + e("|−8.2| > |−7.9|") + ".",
        "مقارنة الأعداد تختلف عن مقارنة القيم المطلقة: " + e("−33 < −17") + " لكن " + e("|−33| > |−17|") + "، فالمجمد B عند −33 °س أبرد من المجمد A عند −17 °س.",
        "النقود: استلاف 6.50 جنيه من نجلاء و3.25 جنيه من روان يُكتب " + e("−6.50") + " و" + e("−3.25") + "، وبما أن " + e("|−6.50| > |−3.25|") + " فأنت مدين لنجلاء بمبلغ أكبر."]],
      [["On a field trip, the guide shows a fish that dives below the water and jumps above it. The water level is 0.",
        "A dive of 4 m is " + e("−4") + " and a jump of 4 m is " + e("+4") + ". Both are 4 m from the surface: " + e("|−4| = |4| = 4") + ".",
        "Then the fish dives 6 m: " + e("−6") + " is the smallest number so far, but " + e("|−6| = 6") + " is the biggest distance.",
        "Saleh and his brothers count their game tokens: Nour owes 3 tokens (" + e("−3") + ") and Tarek has 2 left (" + e("2") + "). Nour is farther from zero.",
        "Absolute value answers 'how far?', not 'which side?'."],
       ["في رحلة مدرسية يعرض المرشد سمكة تغوص تحت الماء وتقفز فوقه، ومستوى الماء هو 0.",
        "الغوص 4 م يُكتب " + e("−4") + " والقفز 4 م يُكتب " + e("+4") + "، وكلاهما على بعد 4 م من السطح: " + e("|−4| = |4| = 4") + ".",
        "ثم تغوص السمكة 6 م: " + e("−6") + " أصغر عدد حتى الآن، لكن " + e("|−6| = 6") + " أكبر مسافة.",
        "يعدّ صالح وإخوته فيشات اللعب: نور مدين بـ3 فيشات (" + e("−3") + ") وطارق تبقى معه 2 (" + e("2") + ")، فنور أبعد عن الصفر.",
        "القيمة المطلقة تجيب عن سؤال: كم يبعد؟ وليس: في أي جهة؟"]],
      [W("Absolute value", "القيمة المطلقة", "The distance of a number from zero; never negative.", "بعد العدد عن الصفر، ولا تكون سالبة أبدًا."),
        W("Distance from zero", "البعد عن الصفر", "How many units a number is away from 0.", "عدد الوحدات بين العدد والصفر."),
        W("Sea level", "مستوى سطح البحر", "The zero used to measure heights and depths.", "الصفر الذي تُقاس منه الارتفاعات والأعماق."),
        W("Debt", "دَين", "Money you owe; it can be shown by a negative number.", "مال عليك أن ترده، ويمكن تمثيله بعدد سالب."),
        W("Opposites", "الأعداد المتعاكسة", "Two numbers with the same absolute value and different signs.", "عددان لهما القيمة المطلقة نفسها وإشارتان مختلفتان.")],
      "m6_absval",
      [Q(["What is " + e("|−9|") + "?", "ما قيمة " + e("|−9|") + "؟"], [[e("9"), e("9")], [e("−9"), e("−9")], [e("0"), e("0")], [e("1/9"), e("1/9")]],
          ["−9 is 9 units from 0, so |−9| = 9.", "−9 على بعد 9 وحدات من الصفر، إذن |−9| = 9."], ["The fish dived 9 m: the distance is 9 m.", "غاصت السمكة 9 م، فالمسافة 9 م."]),
        Q(["Which statement is true?", "أي عبارة صحيحة؟"], [[e("|−8.2| > |−7.9|"), e("|−8.2| > |−7.9|")], [e("|−8.2| < |−7.9|"), e("|−8.2| < |−7.9|")], [e("−8.2 > −7.9"), e("−8.2 > −7.9")], [e("|−1.4| < |1.4|"), e("|−1.4| < |1.4|")]],
          ["8.2 > 7.9, so |−8.2| > |−7.9|. But as numbers, −8.2 < −7.9.", "8.2 > 7.9، إذن |−8.2| > |−7.9|، لكن كعددين −8.2 < −7.9."], ["The deeper diver is farther from the surface.", "الغطاس الأعمق أبعد عن السطح."]),
        Q(["Freezer A is at " + e("−17") + " °C and freezer B is at " + e("−33") + " °C. Which is colder?", "المجمد A عند " + e("−17") + " °س والمجمد B عند " + e("−33") + " °س. أيهما أبرد؟"], [["B, because −33 < −17", "B، لأن −33 < −17"], ["A, because 17 < 33", "A، لأن 17 < 33"], ["B, because |−33| < |−17|", "B، لأن |−33| < |−17|"], ["They are the same", "متساويان"]],
          ["The lower temperature is colder: −33 < −17. (Its absolute value is greater: 33 > 17.)", "الدرجة الأقل هي الأبرد: −33 < −17. (وقيمتها المطلقة أكبر: 33 > 17.)"], ["B is 33 degrees below zero, deeper into the cold.", "المجمد B تحت الصفر بـ33 درجة، أعمق في البرد."]),
        Q(["Lake A is at " + e("−16") + " m and lake B at " + e("−6") + " m. Which is farther below sea level?", "البحيرة A عند " + e("−16") + " م والبحيرة B عند " + e("−6") + " م. أيهما أبعد تحت مستوى سطح البحر؟"], [["Lake A, since |−16| > |−6|", "البحيرة A، لأن |−16| > |−6|"], ["Lake B, since −6 > −16", "البحيرة B، لأن −6 > −16"], ["Lake B, since |−6| > |−16|", "البحيرة B، لأن |−6| > |−16|"], ["They are equally far", "على البعد نفسه"]],
          ["Distance below sea level is the absolute value: 16 m > 6 m.", "البعد تحت مستوى سطح البحر هو القيمة المطلقة: 16 م > 6 م."], ["A diver needs a longer rope for lake A.", "يحتاج الغطاس حبلًا أطول للبحيرة A."]),
        Q(["Which is greater: " + e("−4.88") + " or " + e("−4.8") + "?", "أيهما أكبر: " + e("−4.88") + " أم " + e("−4.8") + "؟"], [[e("−4.8"), e("−4.8")], [e("−4.88"), e("−4.88")], ["They are equal", "متساويان"], ["It cannot be known", "لا يمكن المعرفة"]],
          ["|−4.8| = 4.80 < 4.88, so −4.8 is closer to 0 and to the right: −4.8 > −4.88.", "|−4.8| = 4.80 < 4.88، إذن −4.8 أقرب إلى الصفر وعلى اليمين: −4.8 > −4.88."], ["The one closer to zero on the negative side is the greater.", "في الجهة السالبة يكون الأقرب إلى الصفر هو الأكبر."]),
        Q(["Which numbers have an absolute value of 5?", "أي الأعداد قيمتها المطلقة 5؟"], [[e("5") + " and " + e("−5"), e("5") + " و" + e("−5")], ["Only " + e("5"), e("5") + " فقط"], ["Only " + e("−5"), e("−5") + " فقط"], [e("0") + " and " + e("5"), e("0") + " و" + e("5")]],
          ["Both 5 and −5 are 5 units from 0.", "كل من 5 و−5 على بعد 5 وحدات من الصفر."], ["A jump of 5 m and a dive of 5 m.", "قفزة 5 م وغطسة 5 م."]),
        Q(["Which is a negative number with an absolute value of 16?", "ما العدد السالب الذي قيمته المطلقة 16؟"], [[e("−16"), e("−16")], [e("16"), e("16")], [e("0"), e("0")], [e("−1/16"), e("−1/16")]],
          ["|−16| = 16 and −16 is negative.", "|−16| = 16 و−16 عدد سالب."], ["16 steps to the left of zero.", "16 خطوة يسار الصفر."]),
        Q(["Two ponds are at " + e("−430") + " m and " + e("−214") + " m. Which is closer to sea level?", "بركتان عند " + e("−430") + " م و" + e("−214") + " م. أيهما أقرب إلى مستوى سطح البحر؟"], [[e("−214"), e("−214")], [e("−430"), e("−430")], ["Both", "كلتاهما"], ["Neither", "لا هذه ولا تلك"]],
          ["|−214| = 214 < 430, so −214 is closer to 0.", "|−214| = 214 < 430، إذن −214 أقرب إلى الصفر."], ["The shorter ladder reaches the surface from −214.", "السلم الأقصر يصل إلى السطح من −214."])])
  ] });

  /* ======================= UNIT 3 - ALGEBRAIC EXPRESSIONS ======================= */
  U.push({ id: "mp6u3", num: 3, icon: "🔤", color: "orange", title: { en: "Algebraic Expressions", ar: "المقادير الجبرية" }, lessons: [
    Ls("mp6u3l1", 35, "✏️", ["Creating, Analyzing and Writing Algebraic Expressions", "تكوين المقادير الجبرية وتحليلها وكتابتها"],
      [["A variable is a letter that stands for a number that can change. Astronauts are about 0.05 m taller in space, so a height " + e("h") + " on Earth becomes " + e("h + 0.05") + " in space.",
        "A numeric expression has only numbers, like " + e("3(6) + 2") + "; an algebraic expression has at least one variable, like " + e("3p + 4q") + ".",
        "In " + e("4n + 2n + 2") + " there are 3 terms: 4n and 2n are like terms, 4 and 2 are their coefficients, and 2 is the constant. Combining like terms gives " + e("6n + 2") + ".",
        "Words to symbols: 'four times the sum of a number and seven' is " + e("4(x + 7)") + ", but 'the sum of four times a number and seven' is " + e("4x + 7") + ".",
        "'Less than' switches the order: 'a number less than ten' is " + e("10 − x") + ", and 'twelve less than three groups of y' is " + e("3y − 12") + "."],
       ["المتغير حرف يرمز إلى عدد يمكن أن يتغير، ورواد الفضاء أطول بنحو 0.05 م في الفضاء، فالطول " + e("h") + " على الأرض يصبح " + e("h + 0.05") + " في الفضاء.",
        "المقدار العددي فيه أعداد فقط مثل " + e("3(6) + 2") + "، والمقدار الجبري فيه متغير واحد على الأقل مثل " + e("3p + 4q") + ".",
        "في " + e("4n + 2n + 2") + " ثلاثة حدود: 4n و2n حدان متشابهان، و4 و2 معاملاهما، و2 هو الثابت (الحد المطلق)، وبجمع الحدود المتشابهة نحصل على " + e("6n + 2") + ".",
        "من الكلمات إلى الرموز: «أربعة أمثال مجموع عدد وسبعة» هو " + e("4(x + 7)") + "، أما «مجموع أربعة أمثال عدد وسبعة» فهو " + e("4x + 7") + ".",
        "عبارة «أقل من» تعكس الترتيب: «عدد أقل من عشرة» هو " + e("10 − x") + "، و«اثنا عشر أقل من ثلاث مجموعات من y» هو " + e("3y − 12") + "."]],
      [["At the planetarium, Mariam reads that astronauts sleep 8 hours each day in space.",
        "For " + e("d") + " days the sleep is " + e("8d") + " hours: 8 is the coefficient and d is the variable.",
        "At the arcade she has x tokens worth 10, x tokens worth 20, and 250 tickets worth 1: " + e("10x + 20x + 250") + ".",
        "10x and 20x are like terms, so she simplifies to " + e("30x + 250") + "; 250 is the constant.",
        "With x = 5 she has " + e("30 × 5 + 250 = 400") + " points."],
       ["في القبة السماوية تقرأ مريم أن رواد الفضاء ينامون 8 ساعات كل يوم في الفضاء.",
        "في " + e("d") + " يوم يكون النوم " + e("8d") + " ساعة: 8 هو المعامل وd هو المتغير.",
        "في صالة الألعاب معها x فيشة قيمة كل منها 10، وx فيشة قيمة كل منها 20، و250 تذكرة قيمة كل منها 1: " + e("10x + 20x + 250") + ".",
        "10x و20x حدان متشابهان، فتبسّط المقدار إلى " + e("30x + 250") + "، و250 هو الثابت.",
        "عندما x = 5 يكون معها " + e("30 × 5 + 250 = 400") + " نقطة."]],
      [W("Variable", "المتغير", "A letter that stands for a number that can change.", "حرف يرمز إلى عدد يمكن أن يتغير."),
        W("Algebraic expression", "المقدار الجبري", "Numbers, variables and operations with no equal sign, like 3p + 4q.", "أعداد ومتغيرات وعمليات بلا علامة يساوي، مثل 3p + 4q."),
        W("Like terms", "الحدود المتشابهة", "Terms with the same variable part, like 4n and 2n.", "حدود لها الجزء المتغير نفسه، مثل 4n و2n."),
        W("Coefficient", "المعامل", "The number multiplied by a variable: 3 in 3x.", "العدد المضروب في المتغير: 3 في 3x."),
        W("Constant", "الثابت (الحد المطلق)", "A term with no variable: 2 in 6n + 2.", "حد بلا متغير: 2 في 6n + 2.")],
      "m6_tiles",
      [Q(["In " + e("5 + 3x + x + 2") + ", what are the coefficients?", "في " + e("5 + 3x + x + 2") + " ما المعاملات؟"], [[e("3") + " and " + e("1"), e("3") + " و" + e("1")], ["Only " + e("3"), e("3") + " فقط"], [e("5") + " and " + e("2"), e("5") + " و" + e("2")], [e("3, 1, 5") + " and " + e("2"), e("3, 1, 5") + " و" + e("2")]],
          ["x alone means 1x, so the coefficients are 3 and 1; 5 and 2 are constants. Warda is right.", "x وحدها تعني 1x، إذن المعاملان 3 و1، أما 5 و2 فثابتان. وردة على حق."], ["A single x is one hidden apple: its coefficient is 1.", "x الوحيدة تفاحة واحدة مختبئة، ومعاملها 1."]),
        Q(["How many terms are in " + e("7x + 7x + 1 + 2x") + "?", "كم حدًا في " + e("7x + 7x + 1 + 2x") + "؟"], [[e("4"), e("4")], [e("3"), e("3")], [e("2"), e("2")], [e("1"), e("1")]],
          ["Terms are separated by + or −: 7x, 7x, 1, 2x. That is 4 terms (it simplifies to 16x + 1).", "الحدود تفصلها + أو −: 7x و7x و1 و2x، إذن 4 حدود (ويُبسط إلى 16x + 1)."], ["Count the wagons between the plus signs.", "عُدّ العربات بين علامات الجمع."]),
        Q(["Write: 'twelve less than three groups of y'.", "اكتب: «اثنا عشر أقل من ثلاث مجموعات من y»."], [[e("3y − 12"), e("3y − 12")], [e("12 − 3y"), e("12 − 3y")], [e("y − 3(12)"), e("y − 3(12)")], [e("12(3) − y"), e("12(3) − y")]],
          ["'Less than' switches the order: start with 3y, then take away 12.", "«أقل من» تعكس الترتيب: نبدأ بـ3y ثم نطرح 12."], ["Three bags of y sweets, then you give away 12.", "ثلاثة أكياس في كل منها y حلوى، ثم تعطي 12."]),
        Q(["Write: 'four times the sum of a number and seven'.", "اكتب: «أربعة أمثال مجموع عدد وسبعة»."], [[e("4(x + 7)"), e("4(x + 7)")], [e("4x + 7"), e("4x + 7")], [e("4 + x + 7"), e("4 + x + 7")], [e("7(x + 4)"), e("7(x + 4)")]],
          ["A sum that is multiplied needs parentheses: 4(x + 7).", "المجموع المضروب يحتاج أقواسًا: 4(x + 7)."], ["Four identical bags, each holding x + 7 items.", "أربعة أكياس متماثلة، في كل منها x + 7 أشياء."]),
        Q(["Simplify " + e("4n + 2n + 2") + ".", "بسّط " + e("4n + 2n + 2") + "."], [[e("6n + 2"), e("6n + 2")], [e("8n"), e("8n")], [e("6n + 2n"), e("6n + 2n")], [e("4n + 4"), e("4n + 4")]],
          ["Add the like terms 4n + 2n = 6n; the constant 2 stays: 6n + 2.", "اجمع الحدين المتشابهين 4n + 2n = 6n ويبقى الثابت 2: 6n + 2."], ["4 boxes and 2 boxes make 6 boxes, plus 2 loose pens.", "4 علب وعلبتان تصبح 6 علب، ومعها قلمان منفردان."]),
        Q(["Which is an algebraic expression?", "أي مما يلي مقدار جبري؟"], [[e("3p + 4q"), e("3p + 4q")], [e("3(6) + 2"), e("3(6) + 2")], [e("7(1.4 + 3.2)"), e("7(1.4 + 3.2)")], [e("48 − 1"), e("48 − 1")]],
          ["An algebraic expression contains a variable; the others are numeric.", "المقدار الجبري يحتوي على متغير، والباقي مقادير عددية."], ["Only 3p + 4q has letters waiting for numbers.", "3p + 4q وحده فيه حروف تنتظر أعدادًا."]),
        Q(["Fares's car goes 15 km per liter. His grandma lives " + e("d") + " km away. How many liters for the round trip?", "سيارة فارس تقطع 15 كم لكل لتر، وتسكن جدته على بعد " + e("d") + " كم. كم لترًا يحتاج ذهابًا وعودة؟"], [[e("2d ÷ 15"), e("2d ÷ 15")], [e("d ÷ 15"), e("d ÷ 15")], [e("15 × 2d"), e("15 × 2d")], [e("d + 15"), e("d + 15")]],
          ["The round trip is 2d km; each liter covers 15 km, so liters = 2d ÷ 15.", "الرحلة ذهابًا وعودة 2d كم، وكل لتر يقطع 15 كم، إذن اللترات = 2d ÷ 15."], ["There and back doubles the road, then share it by 15.", "الذهاب والعودة يضاعفان الطريق، ثم نقسمه على 15."]),
        Q(["Mohamed brought 4 boxes with " + e("c") + " cookies in each. How many cookies?", "أحضر محمد 4 علب في كل منها " + e("c") + " بسكويتة. كم بسكويتة؟"], [[e("4c"), e("4c")], [e("c + 4"), e("c + 4")], [e("c ÷ 4"), e("c ÷ 4")], [e("4 + c"), e("4 + c")]],
          ["c + c + c + c = 4c: repeated addition is multiplication.", "c + c + c + c = 4c، فالجمع المتكرر ضرب."], ["Ali wrote c + c + c + c and Kamal wrote 4c: both are right.", "كتب علي c + c + c + c وكتب كمال 4c، وكلاهما صحيح."])]),

    Ls("mp6u3l2", 47, "🪜", ["Ordering of Operations and Exponents, Evaluating Algebraic Expressions", "ترتيب العمليات والأسس وإيجاد القيمة العددية للمقادير الجبرية"],
      [["An exponent tells how many times the base is multiplied by itself: " + e("10³ = 10 × 10 × 10 = 1,000") + " and " + e("2³ = 2 × 2 × 2 = 8") + ".",
        "Order of operations: parentheses first, then exponents, then multiply and divide from left to right, then add and subtract from left to right.",
        e("36 − 19 + 4 ÷ 2 = 36 − 19 + 2 = 17 + 2 = 19") + ".",
        e("8 + 2(6 − 2) ÷ 2³ = 8 + 2(4) ÷ 8 = 8 + 8 ÷ 8 = 8 + 1 = 9") + ".",
        "To evaluate an algebraic expression, substitute the value of the variable, then follow the order: " + e("6 + (8x − 3)") + " for x = 0.5 is " + e("6 + (4 − 3) = 7") + "."],
       ["الأس يبيّن عدد مرات ضرب الأساس في نفسه: " + e("10³ = 10 × 10 × 10 = 1,000") + " و" + e("2³ = 2 × 2 × 2 = 8") + ".",
        "ترتيب العمليات: الأقواس أولًا، ثم الأسس، ثم الضرب والقسمة من اليسار إلى اليمين، ثم الجمع والطرح من اليسار إلى اليمين.",
        e("36 − 19 + 4 ÷ 2 = 36 − 19 + 2 = 17 + 2 = 19") + ".",
        e("8 + 2(6 − 2) ÷ 2³ = 8 + 2(4) ÷ 8 = 8 + 8 ÷ 8 = 8 + 1 = 9") + ".",
        "لإيجاد القيمة العددية لمقدار جبري نعوّض بقيمة المتغير ثم نتبع الترتيب: " + e("6 + (8x − 3)") + " عندما x = 0.5 يساوي " + e("6 + (4 − 3) = 7") + "."]],
      [["Hassan wants T-shirts at 100 LE each, and he has a 40 LE coupon for the whole purchase.",
        "The cost of n shirts is " + e("100n − 40") + ".",
        "For 4 shirts he substitutes n = 4: " + e("100 × 4 − 40 = 400 − 40 = 360") + " LE.",
        "He multiplies before he subtracts, exactly as the order of operations says. Subtracting first would give 100 × (4 − 40), which makes no sense.",
        "For 7 shirts: " + e("100 × 7 − 40 = 660") + " LE. One expression, any number of shirts."],
       ["يريد حسن شراء تيشيرتات سعر الواحد 100 جنيه، ومعه قسيمة خصم 40 جنيهًا على المشتريات كلها.",
        "ثمن n تيشيرت هو " + e("100n − 40") + ".",
        "لأربعة تيشيرتات يعوّض n = 4: " + e("100 × 4 − 40 = 400 − 40 = 360") + " جنيهًا.",
        "يضرب قبل أن يطرح كما يقول ترتيب العمليات، فلو طرح أولًا لحصل على 100 × (4 − 40) وهذا لا معنى له.",
        "لسبعة تيشيرتات: " + e("100 × 7 − 40 = 660") + " جنيهًا، مقدار واحد لأي عدد من التيشيرتات."]],
      [W("Exponent", "الأس", "The small raised number: how many times the base is multiplied.", "العدد الصغير المرفوع: عدد مرات ضرب الأساس في نفسه."),
        W("Base", "الأساس", "The number that is multiplied by itself: 2 in 2³.", "العدد المضروب في نفسه: 2 في 2³."),
        W("Order of operations", "ترتيب العمليات", "Parentheses, exponents, multiply and divide, add and subtract.", "الأقواس ثم الأسس ثم الضرب والقسمة ثم الجمع والطرح."),
        W("Evaluate", "إيجاد القيمة العددية", "Find the value of an expression.", "حساب قيمة المقدار."),
        W("Substitute", "التعويض", "Put a number in place of the variable.", "وضع عدد مكان المتغير.")],
      "m6_ops",
      [Q(["Simplify " + e("36 − 19 + 4 ÷ 2") + ".", "بسّط " + e("36 − 19 + 4 ÷ 2") + "."], [[e("19"), e("19")], [e("10.5"), e("10.5")], [e("15"), e("15")], [e("13"), e("13")]],
          ["Divide first: 4 ÷ 2 = 2. Then left to right: 36 − 19 = 17, 17 + 2 = 19.", "القسمة أولًا: 4 ÷ 2 = 2، ثم من اليسار: 36 − 19 = 17، و17 + 2 = 19."], ["The division jumps the queue; the rest go left to right.", "القسمة تتقدم الطابور، والباقي من اليسار إلى اليمين."]),
        Q(["What is the value of " + e("9²") + "?", "ما قيمة " + e("9²") + "؟"], [[e("81"), e("81")], [e("18"), e("18")], [e("11"), e("11")], [e("92"), e("92")]],
          ["9² = 9 × 9 = 81. The base is 9 and the exponent is 2.", "9² = 9 × 9 = 81، والأساس 9 والأس 2."], ["A square tray with 9 rows of 9 cookies.", "صينية مربعة فيها 9 صفوف في كل منها 9 بسكويتات."]),
        Q(["Simplify " + e("8 + 2(6 − 2) ÷ 2³") + ".", "بسّط " + e("8 + 2(6 − 2) ÷ 2³") + "."], [[e("9"), e("9")], [e("5"), e("5")], [e("1,728"), e("1,728")], [e("12"), e("12")]],
          ["(6 − 2) = 4, 2³ = 8, then 2 × 4 = 8, 8 ÷ 8 = 1, and 8 + 1 = 9.", "(6 − 2) = 4 و2³ = 8، ثم 2 × 4 = 8 و8 ÷ 8 = 1، و8 + 1 = 9."], ["Adding 8 + 2 first gives 5, a classic trap.", "جمع 8 + 2 أولًا يعطي 5، وهذا فخ مشهور."]),
        Q(["Evaluate " + e("6 + (8x − 3)") + " when x = 0.5.", "أوجد قيمة " + e("6 + (8x − 3)") + " عندما x = 0.5."], [[e("7"), e("7")], [e("11"), e("11")], [e("5"), e("5")], [e("3"), e("3")]],
          ["8 × 0.5 = 4, then (4 − 3) = 1, then 6 + 1 = 7.", "8 × 0.5 = 4، ثم (4 − 3) = 1، ثم 6 + 1 = 7."], ["Half of 8 is 4: put it in, and finish the brackets.", "نصف 8 هو 4: عوّض به ثم أكمل القوس."]),
        Q(["Evaluate " + e("9 + (p² − 3) ÷ 2") + " for p = 5.", "أوجد قيمة " + e("9 + (p² − 3) ÷ 2") + " عندما p = 5."], [[e("20"), e("20")], [e("12.5"), e("12.5")], [e("15.5"), e("15.5")], [e("31"), e("31")]],
          ["p² = 25, (25 − 3) = 22, 22 ÷ 2 = 11, 9 + 11 = 20.", "p² = 25، و(25 − 3) = 22، و22 ÷ 2 = 11، و9 + 11 = 20."], ["5² means 5 × 5, not 5 × 2 (that mistake gives 12.5).", "5² تعني 5 × 5 وليس 5 × 2 (هذا الخطأ يعطي 12.5)."]),
        Q(["Evaluate " + e("7 + 6(t² − 3)") + " for t = 4.", "أوجد قيمة " + e("7 + 6(t² − 3)") + " عندما t = 4."], [[e("85"), e("85")], [e("37"), e("37")], [e("169"), e("169")], [e("100"), e("100")]],
          ["t² = 16, (16 − 3) = 13, 6 × 13 = 78, 7 + 78 = 85.", "t² = 16، و(16 − 3) = 13، و6 × 13 = 78، و7 + 78 = 85."], ["Exponent, subtract inside, multiply, then add.", "الأس ثم الطرح داخل القوس ثم الضرب ثم الجمع."]),
        Q(["Which order evaluates " + e("7 + 6(t² − 3)") + "?", "بأي ترتيب نحسب " + e("7 + 6(t² − 3)") + "؟"], [["Exponent, subtract, multiply, add", "الأس، الطرح، الضرب، الجمع"], ["Multiply, exponent, subtract, add", "الضرب، الأس، الطرح، الجمع"], ["Add, multiply, exponent, subtract", "الجمع، الضرب، الأس، الطرح"], ["Exponent, multiply, add, subtract", "الأس، الضرب، الجمع، الطرح"]],
          ["Inside the parentheses: exponent then subtract; outside: multiply then add.", "داخل القوس: الأس ثم الطرح، وخارجه: الضرب ثم الجمع."], ["Climb the stairs from the top step: brackets, powers, ×, +.", "اصعد السلم بالترتيب: الأقواس ثم القوى ثم الضرب ثم الجمع."]),
        Q(["T-shirts cost " + e("100n − 40") + " LE for n shirts. What do 4 shirts cost?", "ثمن n تيشيرت هو " + e("100n − 40") + " جنيهًا. كم ثمن 4 تيشيرتات؟"], [[e("360"), e("360")], [e("440"), e("440")], [e("240"), e("240")], [e("60"), e("60")]],
          ["100 × 4 = 400, 400 − 40 = 360 LE.", "100 × 4 = 400، و400 − 40 = 360 جنيهًا."], ["The coupon comes off once, from the whole bill.", "الخصم يُطرح مرة واحدة من الفاتورة كلها."])]),

    Ls("mp6u3l3", 52, "🟰", ["Applications on Algebraic Expressions and Determining Equivalent Expressions", "تطبيقات على المقادير الجبرية وتحديد المقادير المتكافئة"],
      [["Use the order of operations with exponents and parentheses: " + e("12 − 8 ÷ 4 + (7 + 1 − 2)² × 3 = 12 − 8 ÷ 4 + 36 × 3 = 12 − 2 + 108 = 118") + ".",
        "Equivalent expressions have the same value for every value of the variable: " + e("3(2x + 1)") + " and " + e("6x + 3") + " are equivalent (distributive property).",
        "Test with a balance (Keep It Level): for x = 1, " + e("x + 2x = 3") + " but " + e("2(x + 2) = 6") + ", so they are not equivalent.",
        "Two expressions can be equal for one value but not always: " + e("2(x + 1) = 2x + x") + " only when x = 2, so they are not equivalent.",
        "Properties make equivalent expressions: commutative " + e("a + b = b + a") + ", associative " + e("(a + b) + c = a + (b + c)") + ", distributive, and combining like terms " + e("x + 2x = 3x") + "."],
       ["نستخدم ترتيب العمليات مع الأسس والأقواس: " + e("12 − 8 ÷ 4 + (7 + 1 − 2)² × 3 = 12 − 8 ÷ 4 + 36 × 3 = 12 − 2 + 108 = 118") + ".",
        "المقادير المتكافئة لها القيمة نفسها لكل قيم المتغير: " + e("3(2x + 1)") + " و" + e("6x + 3") + " متكافئان (خاصية التوزيع).",
        "نختبر بالميزان (حافظ على الاتزان): عندما x = 1 يكون " + e("x + 2x = 3") + " لكن " + e("2(x + 2) = 6") + "، إذن ليسا متكافئين.",
        "قد يتساوى مقداران عند قيمة واحدة فقط: " + e("2(x + 1) = 2x + x") + " عندما x = 2 فقط، إذن ليسا متكافئين.",
        "الخواص تعطي مقادير متكافئة: الإبدال " + e("a + b = b + a") + " والدمج " + e("(a + b) + c = a + (b + c)") + " والتوزيع، وجمع الحدود المتشابهة " + e("x + 2x = 3x") + "."]],
      [["Nada and Karim pack dates. Nada makes 3 bags with " + e("2x + 1") + " dates each; Karim says the total is " + e("6x + 3") + ".",
        "They test x = 1: " + e("3(3) = 9") + " and " + e("6 + 3 = 9") + ". Then x = 4: " + e("3(9) = 27") + " and " + e("24 + 3 = 27") + ".",
        "Every test keeps the scale level, and the distributive property proves why: " + e("3(2x + 1) = 6x + 3") + ".",
        "Their friend claims " + e("4x + 6") + " equals " + e("3(x + 2)") + ". At x = 3 it is 18 against 15, and the scale tips.",
        "One unbalanced test is enough to show two expressions are not equivalent."],
       ["تعبّئ ندى وكريم التمر: تملأ ندى 3 أكياس في كل منها " + e("2x + 1") + " تمرة، ويقول كريم إن المجموع " + e("6x + 3") + ".",
        "يختبران x = 1: " + e("3(3) = 9") + " و" + e("6 + 3 = 9") + "، ثم x = 4: " + e("3(9) = 27") + " و" + e("24 + 3 = 27") + ".",
        "كل اختبار يُبقي الميزان متزنًا، وخاصية التوزيع تثبت السبب: " + e("3(2x + 1) = 6x + 3") + ".",
        "يقول صديقهما إن " + e("4x + 6") + " يساوي " + e("3(x + 2)") + "، وعند x = 3 يكون 18 مقابل 15 فيميل الميزان.",
        "اختبار واحد غير متزن يكفي لإثبات أن المقدارين غير متكافئين."]],
      [W("Equivalent expressions", "المقادير المتكافئة", "Expressions with the same value for every value of the variable.", "مقادير لها القيمة نفسها لكل قيم المتغير."),
        W("Distributive property", "خاصية التوزيع", "3(2x + 1) = 6x + 3.", "3(2x + 1) = 6x + 3."),
        W("Commutative property", "خاصية الإبدال", "Changing the order of adding or multiplying does not change the result.", "تغيير ترتيب الجمع أو الضرب لا يغيّر الناتج."),
        W("Associative property", "خاصية الدمج", "Changing the grouping of adding or multiplying does not change the result.", "تغيير طريقة تجميع الجمع أو الضرب لا يغيّر الناتج."),
        W("Balance scale", "الميزان", "A model: equal values keep the scale level.", "نموذج: القيم المتساوية تُبقي الميزان متزنًا.")],
      "m6_equiv",
      [Q(["Which expression is equivalent to " + e("3(2x + 1)") + "?", "أي مقدار يكافئ " + e("3(2x + 1)") + "؟"], [[e("6x + 3"), e("6x + 3")], [e("6x + 1"), e("6x + 1")], [e("5x + 3"), e("5x + 3")], [e("2x + 3"), e("2x + 3")]],
          ["Distribute: 3 × 2x + 3 × 1 = 6x + 3.", "وزّع: 3 × 2x + 3 × 1 = 6x + 3."], ["Three bags, each with 2x dates and 1 extra date.", "ثلاثة أكياس في كل منها 2x تمرة وتمرة زيادة."]),
        Q(["Which expression is equivalent to " + e("x + 2x") + "?", "أي مقدار يكافئ " + e("x + 2x") + "؟"], [[e("3x"), e("3x")], [e("2x²"), e("2x²")], [e("2(x + 2)"), e("2(x + 2)")], [e("3 + x"), e("3 + x")]],
          ["1x + 2x = 3x (like terms).", "1x + 2x = 3x (حدود متشابهة)."], ["One box plus two boxes is three boxes.", "علبة وعلبتان تساوي ثلاث علب."]),
        Q(["For which value of x is " + e("2(x + 1) = 2x + x") + "?", "عند أي قيمة لـx يكون " + e("2(x + 1) = 2x + x") + "؟"], [[e("2"), e("2")], [e("0"), e("0")], [e("1"), e("1")], [e("3"), e("3")]],
          ["x = 2: 2(3) = 6 and 4 + 2 = 6. At 0: 2 vs 0; at 1: 4 vs 3; at 3: 8 vs 9.", "x = 2: 2(3) = 6 و4 + 2 = 6، وعند 0: 2 مقابل 0، وعند 1: 4 مقابل 3، وعند 3: 8 مقابل 9."], ["Equal at one point only, so they are not equivalent.", "يتساويان عند نقطة واحدة فقط، إذن ليسا متكافئين."]),
        Q(["Test " + e("4x + 6") + " and " + e("3(x + 2)") + " at x = 3.", "اختبر " + e("4x + 6") + " و" + e("3(x + 2)") + " عند x = 3."], [["18 and 15: not equivalent", "18 و15: غير متكافئين"], ["Both are 18: equivalent", "كلاهما 18: متكافئان"], ["Both are 15: equivalent", "كلاهما 15: متكافئان"], ["15 and 18: equivalent", "15 و18: متكافئان"]],
          ["4(3) + 6 = 18 and 3(3 + 2) = 15. Different values, so not equivalent.", "4(3) + 6 = 18 و3(3 + 2) = 15، قيمتان مختلفتان إذن غير متكافئين."], ["The scale tips toward 18.", "يميل الميزان نحو 18."]),
        Q(["Simplify " + e("12 − 8 ÷ 4 + (7 + 1 − 2)² × 3") + ".", "بسّط " + e("12 − 8 ÷ 4 + (7 + 1 − 2)² × 3") + "."], [[e("118"), e("118")], [e("109"), e("109")], [e("28"), e("28")], [e("138"), e("138")]],
          ["(6)² = 36, 8 ÷ 4 = 2, 36 × 3 = 108, 12 − 2 + 108 = 118.", "(6)² = 36، و8 ÷ 4 = 2، و36 × 3 = 108، و12 − 2 + 108 = 118."], ["Forgetting the exponent gives 28; doing 12 − 8 first gives 109.", "نسيان الأس يعطي 28، وطرح 12 − 8 أولًا يعطي 109."]),
        Q(["Which property shows " + e("7 + 4 = 4 + 7") + "?", "أي خاصية توضح أن " + e("7 + 4 = 4 + 7") + "؟"], [["Commutative", "الإبدال"], ["Associative", "الدمج"], ["Distributive", "التوزيع"], ["Zero property", "خاصية الصفر"]],
          ["Changing the order of the addends: commutative property.", "تغيير ترتيب المضافين: خاصية الإبدال."], ["Honey then molasses, or molasses then honey: the same plate of feteer.", "عسل ثم عسل أسود، أو العكس: طبق الفطير نفسه."]),
        Q(["Which expression is equivalent to " + e("2(x + 4)") + "?", "أي مقدار يكافئ " + e("2(x + 4)") + "؟"], [[e("2x + 8"), e("2x + 8")], [e("2x + 4"), e("2x + 4")], [e("x + 8"), e("x + 8")], [e("8x"), e("8x")]],
          ["2 × x + 2 × 4 = 2x + 8.", "2 × x + 2 × 4 = 2x + 8."], ["Two bags, each with x apples and 4 oranges.", "كيسان في كل منهما x تفاحة و4 برتقالات."]),
        Q(["Evaluate " + e("3x² + 2") + " for x = 4.", "أوجد قيمة " + e("3x² + 2") + " عندما x = 4."], [[e("50"), e("50")], [e("146"), e("146")], [e("26"), e("26")], [e("38"), e("38")]],
          ["x² = 16, 3 × 16 = 48, 48 + 2 = 50. (Squaring 3x first gives 146.)", "x² = 16، و3 × 16 = 48، و48 + 2 = 50. (تربيع 3x أولًا يعطي 146.)"], ["Only x is squared, not the 3.", "x وحدها هي المربعة وليس 3."])])
  ] });

  /* ======================= UNIT 4 - EQUATIONS AND INEQUALITIES ======================= */
  U.push({ id: "mp6u4", num: 4, icon: "⚖️", color: "purple", title: { en: "Equations and Inequalities", ar: "المعادلات والمتباينات" }, lessons: [
    Ls("mp6u4l1", 59, "⚖️", ["Solving Algebraic Equations", "حل المعادلات الجبرية"],
      [["An equation says that two expressions are equal, like a pan balance that is level: " + e("x + 8 = 17") + ".",
        "To solve, do the same inverse operation to both sides so that the balance stays level.",
        e("x + 8 = 17") + ": subtract 8 from both sides: " + e("x = 17 − 8 = 9") + ". Check: " + e("9 + 8 = 17") + " ✓.",
        e("3x = 9") + ": split both sides into 3 equal groups (divide by 3): " + e("x = 3") + ". In the same way " + e("6x = 18") + " gives " + e("x = 3") + ".",
        "Addition and subtraction undo each other; multiplication and division undo each other. Always check by substituting the solution."],
       ["المعادلة تعني أن مقدارين متساويان، مثل ميزان ذي كفتين متزن: " + e("x + 8 = 17") + ".",
        "للحل نجري العملية العكسية نفسها على الطرفين ليبقى الميزان متزنًا.",
        e("x + 8 = 17") + ": نطرح 8 من الطرفين: " + e("x = 17 − 8 = 9") + "، والتحقق: " + e("9 + 8 = 17") + " ✓.",
        e("3x = 9") + ": نقسم كل طرف إلى 3 مجموعات متساوية (القسمة على 3): " + e("x = 3") + "، وبالمثل " + e("6x = 18") + " تعطي " + e("x = 3") + ".",
        "الجمع والطرح عمليتان عكسيتان، والضرب والقسمة عمليتان عكسيتان، ونتحقق دائمًا بالتعويض بالحل."]],
      [["Grandma in Fayoum weighs dates on an old pan balance.",
        "One bag of unknown mass x and 5 one-kilo weights balance 11 kilos: " + e("x + 5 = 11") + ".",
        "Taking 5 kilos off both pans keeps it level: " + e("x = 6") + " kg.",
        "Next, 3 equal bags balance 12 kilos: " + e("3x = 12") + ", so each bag is " + e("12 ÷ 3 = 4") + " kg.",
        "Whatever you do to one pan, you do to the other."],
       ["تزن الجدة في الفيوم التمر بميزان قديم ذي كفتين.",
        "كيس كتلته مجهولة x مع 5 أثقال كل منها كيلو يتزن مع 11 كيلو: " + e("x + 5 = 11") + ".",
        "رفع 5 كيلوات من الكفتين يُبقي الميزان متزنًا: " + e("x = 6") + " كجم.",
        "بعد ذلك 3 أكياس متساوية تتزن مع 12 كيلو: " + e("3x = 12") + "، إذن كتلة الكيس " + e("12 ÷ 3 = 4") + " كجم.",
        "ما تفعله بكفة تفعله بالأخرى."]],
      [W("Equation", "المعادلة", "A statement that two expressions are equal.", "جملة تعني أن مقدارين متساويان."),
        W("Solution", "الحل", "The value of the variable that makes the equation true.", "قيمة المتغير التي تجعل المعادلة صحيحة."),
        W("Inverse operations", "العمليات العكسية", "Operations that undo each other: + and −, × and ÷.", "عمليات يلغي بعضها بعضًا: + و−، و× و÷."),
        W("Pan balance", "الميزان ذو الكفتين", "A model of an equation: level means equal.", "نموذج للمعادلة: الاتزان يعني التساوي."),
        W("Check", "التحقق", "Substitute the solution to see if both sides are equal.", "التعويض بالحل لمعرفة هل يتساوى الطرفان.")],
      "m6_balance",
      [Q(["Solve " + e("x + 8 = 17") + ".", "حل " + e("x + 8 = 17") + "."], [[e("x = 9"), e("x = 9")], [e("x = 25"), e("x = 25")], [e("x = 8"), e("x = 8")], [e("x = 17"), e("x = 17")]],
          ["Subtract 8 from both sides: x = 17 − 8 = 9. Check 9 + 8 = 17.", "اطرح 8 من الطرفين: x = 17 − 8 = 9، والتحقق 9 + 8 = 17."], ["Take 8 cubes off each pan and the bag balances 9.", "ارفع 8 مكعبات من كل كفة فيتزن الكيس مع 9."]),
        Q(["Solve " + e("3x = 9") + ".", "حل " + e("3x = 9") + "."], [[e("x = 3"), e("x = 3")], [e("x = 27"), e("x = 27")], [e("x = 6"), e("x = 6")], [e("x = 12"), e("x = 12")]],
          ["Divide both sides by 3: x = 9 ÷ 3 = 3.", "اقسم الطرفين على 3: x = 9 ÷ 3 = 3."], ["Three equal bags share 9 cubes: 3 each.", "ثلاثة أكياس متساوية تتقاسم 9 مكعبات: 3 لكل كيس."]),
        Q(["Solve " + e("3 + x = 12") + ".", "حل " + e("3 + x = 12") + "."], [[e("x = 9"), e("x = 9")], [e("x = 15"), e("x = 15")], [e("x = 4"), e("x = 4")], [e("x = 36"), e("x = 36")]],
          ["Subtract 3 from both sides: x = 12 − 3 = 9.", "اطرح 3 من الطرفين: x = 12 − 3 = 9."], ["Remove 3 kilos from each side of grandma's balance.", "ارفع 3 كيلوات من كل كفة في ميزان الجدة."]),
        Q(["Solve " + e("6x = 18") + ".", "حل " + e("6x = 18") + "."], [[e("x = 3"), e("x = 3")], [e("x = 12"), e("x = 12")], [e("x = 108"), e("x = 108")], [e("x = 24"), e("x = 24")]],
          ["Divide both sides by 6: x = 18 ÷ 6 = 3.", "اقسم الطرفين على 6: x = 18 ÷ 6 = 3."], ["Six identical bags weigh 18 kg in total, so each is 3 kg.", "ستة أكياس متماثلة كتلتها 18 كجم، إذن الكيس 3 كجم."]),
        Q(["How do you keep the balance level while solving " + e("x + 5 = 11") + "?", "كيف تُبقي الميزان متزنًا عند حل " + e("x + 5 = 11") + "؟"], [["Subtract 5 from both sides", "اطرح 5 من الطرفين"], ["Add 5 to the left side only", "أضف 5 إلى الطرف الأيسر فقط"], ["Subtract 5 from the left side only", "اطرح 5 من الطرف الأيسر فقط"], ["Divide both sides by 5", "اقسم الطرفين على 5"]],
          ["The same operation on both sides keeps the equation true: x = 6.", "العملية نفسها على الطرفين تُبقي المعادلة صحيحة: x = 6."], ["Change one pan only and the scale tips.", "غيّر كفة واحدة فقط فيميل الميزان."]),
        Q(["Which value solves " + e("4x = 28") + "?", "ما القيمة التي تحقق " + e("4x = 28") + "؟"], [[e("7"), e("7")], [e("24"), e("24")], [e("32"), e("32")], [e("112"), e("112")]],
          ["28 ÷ 4 = 7. Check: 4 × 7 = 28.", "28 ÷ 4 = 7، والتحقق: 4 × 7 = 28."], ["Four friends share 28 dates: 7 each.", "أربعة أصدقاء يتقاسمون 28 تمرة: 7 لكل منهم."]),
        Q(["Solve " + e("y − 4 = 10") + ".", "حل " + e("y − 4 = 10") + "."], [[e("y = 14"), e("y = 14")], [e("y = 6"), e("y = 6")], [e("y = 40"), e("y = 40")], [e("y = 2.5"), e("y = 2.5")]],
          ["Add 4 to both sides: y = 10 + 4 = 14.", "أضف 4 إلى الطرفين: y = 10 + 4 = 14."], ["After giving away 4 sweets you have 10, so you started with 14.", "بعد أن أعطيت 4 حلويات بقي معك 10، إذن بدأت بـ14."]),
        Q(["Solve " + e("x ÷ 3 = 5") + ".", "حل " + e("x ÷ 3 = 5") + "."], [[e("x = 15"), e("x = 15")], [e("x = 2"), e("x = 2")], [e("x = 8"), e("x = 8")], [e("x = 5/3"), e("x = 5/3")]],
          ["Multiply both sides by 3: x = 5 × 3 = 15.", "اضرب الطرفين في 3: x = 5 × 3 = 15."], ["A cake cut into 3 equal parts of 5 pieces each had 15 pieces.", "كعكة قُسمت 3 أجزاء متساوية في كل جزء 5 قطع، إذن فيها 15 قطعة."])]),

    Ls("mp6u4l2", 61, "🚦", ["Exploring Inequalities and Solving Inequalities", "استكشاف المتباينات وحل المتباينات"],
      [["An inequality compares two values with " + e("<, >, ≤") + " or " + e("≥") + ". A speed-limit sign of 50 km/hr means the speed s must satisfy " + e("s ≤ 50") + ".",
        "An inequality has many solutions: every value that makes it true. 38, 40, 49 and 50 are solutions of " + e("s ≤ 50") + "; 52 is not.",
        "On a number line use an open circle for " + e("<") + " or " + e(">") + " (the number is not included) and a closed circle for " + e("≤") + " or " + e("≥") + " (the number is included).",
        e("x > −1") + ": open circle at −1 with the arrow to the right. " + e("x ≤ −6") + ": closed circle at −6 with the arrow to the left.",
        "To test a value, substitute it: is 8.9 a solution of " + e("x < 9") + "? Yes, " + e("8.9 < 9") + ". Is 9.1? No."],
       ["المتباينة تقارن بين قيمتين بالرموز " + e("<, >, ≤") + " أو " + e("≥") + "، ولافتة السرعة القصوى 50 كم/س تعني أن السرعة s تحقق " + e("s ≤ 50") + ".",
        "للمتباينة حلول كثيرة: كل قيمة تجعلها صحيحة، فالأعداد 38 و40 و49 و50 حلول للمتباينة " + e("s ≤ 50") + " أما 52 فليس حلًا.",
        "على خط الأعداد نستخدم دائرة مفرغة مع " + e("<") + " أو " + e(">") + " (العدد غير داخل)، ودائرة مظللة مع " + e("≤") + " أو " + e("≥") + " (العدد داخل).",
        e("x > −1") + ": دائرة مفرغة عند −1 والسهم إلى اليمين، و" + e("x ≤ −6") + ": دائرة مظللة عند −6 والسهم إلى اليسار.",
        "لاختبار قيمة نعوّض بها: هل 8.9 حل للمتباينة " + e("x < 9") + "؟ نعم، " + e("8.9 < 9") + "، وهل 9.1 حل؟ لا."]],
      [["At the amusement park, the roller-coaster sign says riders must be at least 130 cm tall: " + e("h ≥ 130") + ".",
        "Exactly 130 cm is allowed, so the circle at 130 is closed.",
        "Ali is 145 cm, so he can ride; his little brother is 120 cm, so he cannot.",
        "On the way home, the road sign says 60 km/hr maximum: " + e("s ≤ 60") + ".",
        "Their father drives at 55 km/hr: " + e("55 ≤ 60") + " is true, so 55 is a solution."],
       ["في الملاهي تقول لافتة القطار السريع إن طول الراكب يجب أن يكون 130 سم على الأقل: " + e("h ≥ 130") + ".",
        "الطول 130 سم تمامًا مسموح، لذا تكون الدائرة عند 130 مظللة.",
        "طول علي 145 سم فيمكنه الركوب، وطول أخيه الصغير 120 سم فلا يمكنه.",
        "في طريق العودة تقول لافتة الطريق إن السرعة القصوى 60 كم/س: " + e("s ≤ 60") + ".",
        "يقود والدهم بسرعة 55 كم/س: " + e("55 ≤ 60") + " صحيحة، إذن 55 حل."]],
      [W("Inequality", "المتباينة", "A statement that compares with <, >, ≤ or ≥.", "جملة تقارن بالرموز < أو > أو ≤ أو ≥."),
        W("Solution set", "مجموعة الحل", "All the values that make an inequality true.", "كل القيم التي تجعل المتباينة صحيحة."),
        W("Open circle", "دائرة مفرغة", "The endpoint is NOT included (< or >).", "طرف غير داخل في الحل (< أو >)."),
        W("Closed circle", "دائرة مظللة", "The endpoint IS included (≤ or ≥).", "طرف داخل في الحل (≤ أو ≥)."),
        W("Constraint", "قيد", "A limit, such as a speed limit or a weight limit.", "حد مثل السرعة القصوى أو الحمولة القصوى.")],
      "m6_ineq",
      [Q(["How is " + e("x > −1") + " graphed?", "كيف تُمثَّل " + e("x > −1") + "؟"], [["Open circle at −1, arrow to the right", "دائرة مفرغة عند −1 والسهم إلى اليمين"], ["Closed circle at −1, arrow to the right", "دائرة مظللة عند −1 والسهم إلى اليمين"], ["Open circle at −1, arrow to the left", "دائرة مفرغة عند −1 والسهم إلى اليسار"], ["Closed circle at −1, arrow to the left", "دائرة مظللة عند −1 والسهم إلى اليسار"]],
          ["'Greater than' points right; −1 itself is not included, so the circle is open.", "«أكبر من» تتجه يمينًا، و−1 نفسه غير داخل فالدائرة مفرغة."], ["The door at −1 is open but you may not stand in it; walk right.", "الباب عند −1 مفتوح لكن لا تقف فيه، امشِ يمينًا."]),
        Q(["Which value is a solution of " + e("x < 9") + "?", "أي قيمة حل للمتباينة " + e("x < 9") + "؟"], [[e("8.9"), e("8.9")], [e("9"), e("9")], [e("9.1"), e("9.1")], [e("15"), e("15")]],
          ["8.9 < 9 is true; 9 < 9 is false, and 9.1 and 15 are greater than 9.", "8.9 < 9 صحيحة، و9 < 9 خاطئة، و9.1 و15 أكبر من 9."], ["Only 8.9 squeezes under the bar.", "8.9 وحده يمر تحت الحاجز."]),
        Q(["Is " + e("−1") + " a solution of " + e("x > −1") + "?", "هل " + e("−1") + " حل للمتباينة " + e("x > −1") + "؟"], [["No, −1 is not greater than −1", "لا، −1 ليس أكبر من −1"], ["Yes, it is the endpoint", "نعم، إنه الطرف"], ["Yes, because the circle is closed", "نعم، لأن الدائرة مظللة"], ["Only sometimes", "أحيانًا فقط"]],
          ["A number is never greater than itself; that is why the circle is open.", "العدد لا يكون أكبر من نفسه أبدًا، ولهذا تكون الدائرة مفرغة."], ["You cannot be taller than yourself.", "لا يمكنك أن تكون أطول من نفسك."]),
        Q(["A closed circle at " + e("−6") + " with the arrow to the left shows:", "دائرة مظللة عند " + e("−6") + " والسهم إلى اليسار تمثل:"], [[e("x ≤ −6"), e("x ≤ −6")], [e("x < −6"), e("x < −6")], [e("x ≥ −6"), e("x ≥ −6")], [e("x > −6"), e("x > −6")]],
          ["Closed means −6 is included; left means smaller: x ≤ −6.", "مظللة تعني أن −6 داخل، واليسار يعني الأصغر: x ≤ −6."], ["−6 and everything colder.", "−6 وكل ما هو أبرد منها."]),
        Q(["The speed limit is 50 km/hr. Which speed is allowed?", "السرعة القصوى 50 كم/س. أي سرعة مسموح بها؟"], [["49 km/hr", "49 كم/س"], ["52 km/hr", "52 كم/س"], ["60 km/hr", "60 كم/س"], ["75 km/hr", "75 كم/س"]],
          ["s ≤ 50: 49 ≤ 50 is true; the others are greater than 50.", "s ≤ 50: و49 ≤ 50 صحيحة، أما الباقي فأكبر من 50."], ["Only 49 keeps the driver out of trouble.", "49 وحدها تُبعد السائق عن المخالفة."]),
        Q(["Riders must be at least 130 cm tall. Which inequality is this?", "يجب ألا يقل طول الراكب عن 130 سم. ما المتباينة؟"], [[e("h ≥ 130"), e("h ≥ 130")], [e("h > 130"), e("h > 130")], [e("h ≤ 130"), e("h ≤ 130")], [e("h < 130"), e("h < 130")]],
          ["'At least' means 130 or more: h ≥ 130.", "«على الأقل» تعني 130 أو أكثر: h ≥ 130."], ["Exactly 130 cm still rides.", "طول 130 سم تمامًا يركب أيضًا."]),
        Q(["How many solutions does " + e("x < 4") + " have?", "كم حلًا للمتباينة " + e("x < 4") + "؟"], [["Infinitely many", "عدد لا نهائي"], ["One", "حل واحد"], ["Four", "أربعة"], ["Three", "ثلاثة"]],
          ["Every number less than 4 works: 3, 0, −10, 3.99, ...", "كل عدد أصغر من 4 يحققها: 3، 0، −10، 3.99، ..."], ["The arrow keeps going forever to the left.", "السهم يستمر إلى ما لا نهاية جهة اليسار."]),
        Q(["Which value belongs to " + e("x ≥ −2") + "?", "أي قيمة تنتمي إلى " + e("x ≥ −2") + "؟"], [[e("−2"), e("−2")], [e("−3"), e("−3")], [e("−2.5"), e("−2.5")], [e("−10"), e("−10")]],
          ["≥ includes −2 itself; the others are less than −2.", "الرمز ≥ يشمل −2 نفسه، والباقي أصغر من −2."], ["The closed circle welcomes −2.", "الدائرة المظللة ترحب بـ−2."])])
  ] });

  /* ======================= UNIT 5 - DEPENDENT AND INDEPENDENT VARIABLES ======================= */
  U.push({ id: "mp6u5", num: 5, icon: "📈", color: "teal", title: { en: "Dependent and Independent Variables", ar: "المتغيرات التابعة والمستقلة" }, lessons: [
    Ls("mp6u5l1", 69, "🎢", ["The Relationship Between Dependent and Independent Variables and Its Applications", "العلاقة بين المتغيرات التابعة والمستقلة وتطبيقاتها"],
      [["An independent variable is not determined by any other value, so it can take any value. The dependent variable changes depending on the independent variable.",
        "Rock N Roller costs 6 tickets a ride. The tickets t depend on the rides r: " + e("t = 6r") + ". r is independent and t is dependent.",
        "Use the equation: 8 rides need " + e("t = 6 × 8 = 48") + " tickets.",
        "The Viking costs 5 tickets: " + e("t = 5r") + ", so 15 rides need " + e("5 × 15 = 75") + " tickets. The tickets depend on the rides, not the other way round.",
        "Other rides: Ferris Wheel " + e("t = 3r") + ", Swing " + e("t = 4r") + ", Scrambler " + e("t = 8r") + "."],
       ["المتغير المستقل لا تحدده أي قيمة أخرى، فيمكن أن يأخذ أي قيمة، أما المتغير التابع فيتغير تبعًا للمتغير المستقل.",
        "لعبة روك آند رولر تكلف 6 تذاكر للمرة، والتذاكر t تعتمد على عدد المرات r: " + e("t = 6r") + "، فـr مستقل وt تابع.",
        "باستخدام المعادلة: 8 مرات تحتاج " + e("t = 6 × 8 = 48") + " تذكرة.",
        "لعبة الفايكنج تكلف 5 تذاكر: " + e("t = 5r") + "، إذن 15 مرة تحتاج " + e("5 × 15 = 75") + " تذكرة، فالتذاكر تعتمد على المرات وليس العكس.",
        "ألعاب أخرى: العجلة الدوارة " + e("t = 3r") + "، والأرجوحة " + e("t = 4r") + "، والسكرامبلر " + e("t = 8r") + "."]],
      [["Malak spends a day at the amusement park with her cousins.",
        "Each ride on the Ferris Wheel takes 3 tickets.",
        "She decides how many rides (r) and the tickets (t) follow: " + e("t = 3r") + ".",
        "For 12 rides she needs " + e("3 × 12 = 36") + " tickets.",
        "At the food stand popcorn costs 2 tokens, so the tokens she spends depend on the boxes she buys: " + e("T = 2b") + "."],
       ["تقضي ملك يومًا في الملاهي مع أبناء عمها.",
        "كل ركوب للعجلة الدوارة يكلف 3 تذاكر.",
        "هي تقرر عدد المرات (r) والتذاكر (t) تتبعها: " + e("t = 3r") + ".",
        "لاثنتي عشرة مرة تحتاج " + e("3 × 12 = 36") + " تذكرة.",
        "في كشك الطعام علبة الفشار بفيشتين، فعدد الفيشات التي تصرفها يعتمد على عدد العلب: " + e("T = 2b") + "."]],
      [W("Independent variable", "المتغير المستقل", "A variable that can take any value; it is not decided by another.", "متغير يأخذ أي قيمة ولا يحدده متغير آخر."),
        W("Dependent variable", "المتغير التابع", "A variable whose value depends on the independent variable.", "متغير تعتمد قيمته على المتغير المستقل."),
        W("Equation", "المعادلة", "A rule that links the variables, like t = 6r.", "قاعدة تربط المتغيرات، مثل t = 6r."),
        W("Relationship", "العلاقة", "How one quantity changes when another changes.", "كيف تتغير كمية عندما تتغير كمية أخرى."),
        W("Depends on", "يعتمد على", "Changes because of: tickets depend on rides.", "يتغير بسبب: التذاكر تعتمد على عدد المرات.")],
      "m6_rides",
      [Q(["In " + e("t = 6r") + ", which is the dependent variable?", "في " + e("t = 6r") + " ما المتغير التابع؟"], [["t, the number of tickets", "t، عدد التذاكر"], ["r, the number of rides", "r، عدد المرات"], ["6", "العدد 6"], ["There is none", "لا يوجد"]],
          ["The number of tickets changes depending on the rides, so t is dependent.", "عدد التذاكر يتغير تبعًا لعدد المرات، إذن t تابع."], ["You choose the rides; the ticket count follows.", "أنت تختار المرات، وعدد التذاكر يتبعها."]),
        Q(["Rock N Roller costs 6 tickets a ride. How many tickets for 8 rides?", "روك آند رولر بـ6 تذاكر للمرة. كم تذكرة لـ8 مرات؟"], [[e("48"), e("48")], [e("14"), e("14")], [e("54"), e("54")], [e("42"), e("42")]],
          ["t = 6r = 6 × 8 = 48.", "t = 6r = 6 × 8 = 48."], ["Eight rides, six tickets each time.", "ثماني مرات، ست تذاكر كل مرة."]),
        Q(["A girl's ride follows " + e("t = 5r") + ". Which ride is it?", "لعبة فتاة تتبع " + e("t = 5r") + ". ما اللعبة؟"], [["Viking (5 tickets)", "الفايكنج (5 تذاكر)"], ["Ferris Wheel (3 tickets)", "العجلة الدوارة (3 تذاكر)"], ["Swing (4 tickets)", "الأرجوحة (4 تذاكر)"], ["Scrambler (8 tickets)", "السكرامبلر (8 تذاكر)"]],
          ["The coefficient 5 is the tickets for one ride: the Viking.", "المعامل 5 هو تذاكر المرة الواحدة: الفايكنج."], ["Find the price tag that says 5.", "ابحث عن اللافتة التي عليها 5."]),
        Q(["Using " + e("t = 5r") + ", how many tickets for 15 rides?", "باستخدام " + e("t = 5r") + " كم تذكرة لـ15 مرة؟"], [[e("75"), e("75")], [e("20"), e("20")], [e("3"), e("3")], [e("80"), e("80")]],
          ["t = 5 × 15 = 75.", "t = 5 × 15 = 75."], ["Fifteen rides of five tickets each.", "خمس عشرة مرة بخمس تذاكر لكل مرة."]),
        Q(["Ferris Wheel: 3 tickets a ride. How many tickets for 12 rides?", "العجلة الدوارة: 3 تذاكر للمرة. كم تذكرة لـ12 مرة؟"], [[e("36"), e("36")], [e("15"), e("15")], [e("4"), e("4")], [e("39"), e("39")]],
          ["t = 3r = 3 × 12 = 36.", "t = 3r = 3 × 12 = 36."], ["Malak's 12 rides cost 36 tickets.", "مرات ملك الاثنتا عشرة تكلف 36 تذكرة."]),
        Q(["'The number of balloons you buy depends on the money you have.' Which is the independent variable?", "«عدد البالونات التي تشتريها يعتمد على المال الذي معك». ما المتغير المستقل؟"], [["The money you have", "المال الذي معك"], ["The number of balloons", "عدد البالونات"], ["Both", "كلاهما"], ["Neither", "لا هذا ولا ذاك"]],
          ["The balloons depend on the money, so money is independent and balloons are dependent.", "البالونات تعتمد على المال، إذن المال مستقل والبالونات تابعة."], ["More pocket money, more balloons.", "مصروف أكثر يعني بالونات أكثر."]),
        Q(["The Swing costs 4 tickets a ride. Which equation fits?", "الأرجوحة بـ4 تذاكر للمرة. أي معادلة مناسبة؟"], [[e("t = 4r"), e("t = 4r")], [e("r = 4t"), e("r = 4t")], [e("t = r + 4"), e("t = r + 4")], [e("t = 4 ÷ r"), e("t = 4 ÷ r")]],
          ["Tickets = 4 × rides: t = 4r.", "التذاكر = 4 × عدد المرات: t = 4r."], ["Each ride adds 4 more tickets.", "كل مرة تضيف 4 تذاكر."])]),

    Ls("mp6u5l2", 74, "📉", ["Analyzing the Relationship and the Graph Representation for Dependent and Independent Variables", "تحليل العلاقة والتمثيل البياني للمتغيرات التابعة والمستقلة"],
      [["An input-output rule turns each input x into an output y: the rule 'multiply by 3' is " + e("y = 3x") + ". x (input) is independent and y (output) is dependent.",
        "Two operations: 'multiply by 3 and add 4' is " + e("y = 3x + 4") + "; for x = 2, " + e("y = 3 × 2 + 4 = 10") + ".",
        "Make a table, then plot the ordered pairs " + e("(x, y)") + ". The independent variable goes on the horizontal x-axis and the dependent variable on the vertical y-axis.",
        "Ring Toss: 4 rings for 5 tokens, so one ring costs 1.25 tokens and " + e("y = 1.25x") + ": " + e("(4, 5)") + ", " + e("(8, 10)") + ".",
        "You go on 3 fewer rides than your friend: " + e("y = x − 3") + " where x is your friend's rides; " + e("(5, 2)") + " and " + e("(8, 5)") + " are on the graph."],
       ["قاعدة المدخلات والمخرجات تحوّل كل مدخل x إلى مخرج y: القاعدة «اضرب في 3» هي " + e("y = 3x") + "، وx (المدخل) مستقل وy (المخرج) تابع.",
        "عمليتان: «اضرب في 3 ثم أضف 4» هي " + e("y = 3x + 4") + "، وعندما x = 2 يكون " + e("y = 3 × 2 + 4 = 10") + ".",
        "نكوّن جدولًا ثم نمثل الأزواج المرتبة " + e("(x, y)") + "، فالمتغير المستقل على المحور الأفقي (محور السينات) والتابع على المحور الرأسي (محور الصادات).",
        "رمي الحلقات: 4 حلقات بـ5 فيشات، إذن الحلقة بـ1.25 فيشة و" + e("y = 1.25x") + ": " + e("(4, 5)") + " و" + e("(8, 10)") + ".",
        "تركب 3 ألعاب أقل من صديقتك: " + e("y = x − 3") + " حيث x عدد ألعاب صديقتك، والنقطتان " + e("(5, 2)") + " و" + e("(8, 5)") + " على التمثيل."]],
      [["Ziad runs the 'What's the rule?' booth at the school fair.",
        "He says 1 → 7. Laila guesses 'add 6', but Ziad's rule is secret.",
        "Then he says 2 → 10. 'Add 6' would give 8, so Laila tries 'multiply by 3 and add 4': " + e("3 × 2 + 4 = 10") + " ✓.",
        "She plots " + e("(1, 7)") + ", " + e("(2, 10)") + ", " + e("(3, 13)") + " and the points line up in a straight line.",
        "One pair is never enough to find a rule; inputs go across, outputs go up."],
       ["يدير زياد كشك «ما القاعدة؟» في حفل المدرسة.",
        "يقول: 1 ← 7، فتخمن ليلى «أضف 6»، لكن قاعدة زياد سرية.",
        "ثم يقول: 2 ← 10، و«أضف 6» تعطي 8، فتجرب ليلى «اضرب في 3 ثم أضف 4»: " + e("3 × 2 + 4 = 10") + " ✓.",
        "تمثل " + e("(1, 7)") + " و" + e("(2, 10)") + " و" + e("(3, 13)") + " فتصطف النقاط على خط مستقيم.",
        "زوج واحد لا يكفي أبدًا لمعرفة القاعدة، والمدخلات أفقية والمخرجات رأسية."]],
      [W("Input and output", "المدخل والمخرج", "The number you put into a rule and the number it gives back.", "العدد الذي تدخله في القاعدة والعدد الذي تعطيه."),
        W("Rule", "القاعدة", "The operations that change an input into an output.", "العمليات التي تحوّل المدخل إلى مخرج."),
        W("Ordered pair", "الزوج المرتب", "(x, y): the input first, then the output.", "(x, y): المدخل أولًا ثم المخرج."),
        W("Coordinate plane", "المستوى الإحداثي", "A grid made by a horizontal axis and a vertical axis.", "شبكة يكوّنها محور أفقي ومحور رأسي."),
        W("x-axis and y-axis", "محور السينات ومحور الصادات", "Horizontal axis for the independent variable, vertical for the dependent.", "المحور الأفقي للمتغير المستقل والرأسي للمتغير التابع.")],
      "m6_graph",
      [Q(["Write the rule 'multiply by 3 and add 4' with x independent.", "اكتب القاعدة «اضرب في 3 ثم أضف 4» حيث x مستقل."], [[e("y = 3x + 4"), e("y = 3x + 4")], [e("x = 3y + 4"), e("x = 3y + 4")], [e("y = −3 + 4x"), e("y = −3 + 4x")], [e("x = y + 3x + 4"), e("x = y + 3x + 4")]],
          ["The output y equals 3 times the input, plus 4.", "المخرج y يساوي 3 أمثال المدخل ثم نضيف 4."], ["Ziad's secret machine: ×3, then +4.", "آلة زياد السرية: ×3 ثم +4."]),
        Q(["The rule is " + e("y = 2x") + ". What is y when x = 2.3?", "القاعدة " + e("y = 2x") + ". ما قيمة y عندما x = 2.3؟"], [[e("4.6"), e("4.6")], [e("4.3"), e("4.3")], [e("2.5"), e("2.5")], [e("23"), e("23")]],
          ["y = 2 × 2.3 = 4.6.", "y = 2 × 2.3 = 4.6."], ["Double 2.3 m of ribbon is 4.6 m.", "ضعف 2.3 م من الشريط يساوي 4.6 م."]),
        Q(["In " + e("y = 3x") + ", which variable is the input (independent)?", "في " + e("y = 3x") + " أي متغير هو المدخل (المستقل)؟"], [[e("x"), e("x")], [e("y"), e("y")], [e("3"), e("3")], ["Both", "كلاهما"]],
          ["You choose x, and y is calculated from it.", "أنت تختار x، وy يُحسب منه."], ["x goes into the machine, y comes out.", "x يدخل الآلة وy يخرج منها."]),
        Q(["Ring Toss follows " + e("y = 1.25x") + ". What do 8 rings cost?", "رمي الحلقات يتبع " + e("y = 1.25x") + ". كم تكلف 8 حلقات؟"], [["10 tokens", "10 فيشات"], ["9.25 tokens", "9.25 فيشة"], ["6.4 tokens", "6.4 فيشة"], ["40 tokens", "40 فيشة"]],
          ["y = 1.25 × 8 = 10. (Also: 4 rings for 5 tokens, so 8 rings for 10.)", "y = 1.25 × 8 = 10. (أو: 4 حلقات بـ5 فيشات، إذن 8 حلقات بـ10.)"], ["Two packs of 4 rings, 5 tokens each.", "عبوتان في كل منهما 4 حلقات بـ5 فيشات لكل منهما."]),
        Q(["On a graph, where does the independent variable go?", "في التمثيل البياني، أين يوضع المتغير المستقل؟"], [["On the horizontal x-axis", "على المحور الأفقي (محور السينات)"], ["On the vertical y-axis", "على المحور الرأسي (محور الصادات)"], ["On either axis", "على أي محور"], ["It is not plotted", "لا يُمثَّل"]],
          ["Independent → horizontal axis; dependent → vertical axis.", "المستقل ← المحور الأفقي، والتابع ← المحور الرأسي."], ["Inputs walk across, outputs climb up.", "المدخلات تمشي أفقيًا والمخرجات تصعد رأسيًا."]),
        Q(["Which point is on the graph of " + e("y = x − 3") + "?", "أي نقطة تقع على تمثيل " + e("y = x − 3") + "؟"], [[e("(5, 2)"), e("(5, 2)")], [e("(2, 5)"), e("(2, 5)")], [e("(5, 8)"), e("(5, 8)")], [e("(0, 3)"), e("(0, 3)")]],
          ["x = 5 gives y = 5 − 3 = 2.", "x = 5 تعطي y = 5 − 3 = 2."], ["Your friend has been on 5 rides, you on 2.", "صديقتك ركبت 5 ألعاب وأنت 2."]),
        Q(["The rule is 'add 6'. What is the output for 4?", "القاعدة «أضف 6». ما المخرج للعدد 4؟"], [[e("10"), e("10")], [e("24"), e("24")], [e("2"), e("2")], [e("46"), e("46")]],
          ["y = x + 6 = 4 + 6 = 10.", "y = x + 6 = 4 + 6 = 10."], ["Six more than 4 is 10.", "ستة أكثر من 4 تساوي 10."]),
        Q(["A table gives x = 1, 2, 3 and y = 7, 10, 13. Which equation fits?", "جدول فيه x = 1، 2، 3 وy = 7، 10، 13. أي معادلة مناسبة؟"], [[e("y = 3x + 4"), e("y = 3x + 4")], [e("y = x + 6"), e("y = x + 6")], [e("y = 7x"), e("y = 7x")], [e("y = 3x"), e("y = 3x")]],
          ["3(1) + 4 = 7, 3(2) + 4 = 10, 3(3) + 4 = 13. 'Add 6' fails at x = 2.", "3(1) + 4 = 7 و3(2) + 4 = 10 و3(3) + 4 = 13، و«أضف 6» تفشل عند x = 2."], ["Check every pair, not just the first one.", "تحقق من كل زوج وليس الأول فقط."])])
  ] });

  /* ======================= UNIT 6 - DATA DISTRIBUTIONS ======================= */
  U.push({ id: "mp6u6", num: 6, icon: "📊", color: "red", title: { en: "Data Distributions", ar: "توزيعات البيانات" }, lessons: [
    Ls("mp6u6l1", 81, "❓", ["Data and Statistical Questions", "البيانات والأسئلة الإحصائية"],
      [["A statistical question expects many different answers (variability): 'How many people do the students in the class have in their families?'",
        "A question that is not statistical has one answer: 'How many students are in the class?' or 'What is the name of your school?'",
        "Numerical data are numbers that you count or measure: number of pets, test scores, letters in a name.",
        "Categorical data are names or groups: favourite colour, type of movie, eye colour.",
        "Numerical data can be shown in a dot plot or a histogram; categorical data in a bar graph."],
       ["السؤال الإحصائي يتوقع إجابات مختلفة كثيرة (تباين): «كم عدد أفراد أسر طلاب الفصل؟»",
        "السؤال غير الإحصائي له إجابة واحدة: «كم عدد طلاب الفصل؟» أو «ما اسم مدرستك؟»",
        "البيانات العددية أعداد نعدّها أو نقيسها: عدد الحيوانات الأليفة، ودرجات الاختبارات، وعدد حروف الاسم.",
        "البيانات الوصفية (الفئوية) أسماء أو مجموعات: اللون المفضل، ونوع الفيلم، ولون العينين.",
        "البيانات العددية تُمثَّل بالنقاط أو بالمدرج التكراري، والبيانات الوصفية بالأعمدة."]],
      [["Diaa and his classmates dig up a time capsule in the schoolyard.",
        "Inside are graphs of 'number of siblings per student', 'lunches bought per week' and 'favourite TV shows'.",
        "The old class asked every student 'How many siblings do you have?', so the answers varied: a statistical question with numerical data.",
        "'Favourite TV shows' gave names, not numbers: categorical data.",
        "Diaa's class plans its own capsule and writes only statistical questions, like 'How many books do the students in our class read per year?'"],
       ["يكتشف ضياء وزملاؤه كبسولة زمنية مدفونة في فناء المدرسة.",
        "بداخلها تمثيلات لـ«عدد إخوة كل طالب» و«عدد الوجبات المشتراة أسبوعيًا» و«البرامج التلفزيونية المفضلة».",
        "سأل الفصل القديم كل طالب «كم أخًا لديك؟» فاختلفت الإجابات: سؤال إحصائي بيانات عددية.",
        "«البرامج التلفزيونية المفضلة» أعطت أسماء لا أعدادًا: بيانات وصفية.",
        "يخطط فصل ضياء لكبسولته ويكتب أسئلة إحصائية فقط، مثل «كم كتابًا يقرأ طلاب فصلنا في السنة؟»"]],
      [W("Statistical question", "السؤال الإحصائي", "A question that expects many different answers.", "سؤال يتوقع إجابات مختلفة كثيرة."),
        W("Variability", "التباين", "The answers are different from each other.", "اختلاف الإجابات بعضها عن بعض."),
        W("Numerical data", "البيانات العددية", "Data that are numbers you count or measure.", "بيانات في صورة أعداد نعدّها أو نقيسها."),
        W("Categorical data", "البيانات الوصفية", "Data that are names or groups, like colours.", "بيانات في صورة أسماء أو مجموعات مثل الألوان."),
        W("Dot plot", "التمثيل بالنقاط", "Each data value is a dot above a number line.", "كل قيمة نقطة فوق خط الأعداد.")],
      "m6_statq",
      [Q(["Which question is statistical?", "أي سؤال إحصائي؟"], [["How many books do the students in the class read per year?", "كم كتابًا يقرأ طلاب الفصل في السنة؟"], ["How many students are in the class?", "كم عدد طلاب الفصل؟"], ["What is the name of your school?", "ما اسم مدرستك؟"], ["Do you like the colour red?", "هل تحب اللون الأحمر؟"]],
          ["Different students read different numbers of books, so many answers are expected.", "يقرأ الطلاب أعدادًا مختلفة من الكتب، فنتوقع إجابات كثيرة."], ["Diaa would get a whole dot plot, not one number.", "سيحصل ضياء على تمثيل نقاط كامل لا على عدد واحد."]),
        Q(["Which description best defines a statistical question?", "أي وصف يعرّف السؤال الإحصائي أفضل تعريف؟"], [["It produces lots of different possible answers", "ينتج إجابات ممكنة مختلفة كثيرة"], ["It has exactly three possible answers", "له ثلاث إجابات ممكنة بالضبط"], ["It produces a single non-numerical answer", "ينتج إجابة واحدة غير عددية"], ["It can be answered with yes or no", "يُجاب عنه بنعم أو لا"]],
          ["Variability in the answers is what makes a question statistical.", "التباين في الإجابات هو ما يجعل السؤال إحصائيًا."], ["Ask the whole class and expect a crowd of answers.", "اسأل الفصل كله وتوقع زحامًا من الإجابات."]),
        Q(["'What are the favourite colours of students in your class?' gives:", "«ما الألوان المفضلة لطلاب فصلك؟» يعطي:"], [["Categorical data", "بيانات وصفية"], ["Numerical data", "بيانات عددية"], ["No data", "لا بيانات"], ["One number", "عددًا واحدًا"]],
          ["Colours are names, not numbers: categorical.", "الألوان أسماء لا أعداد: بيانات وصفية."], ["Red, blue, green: you can't average colours.", "أحمر، أزرق، أخضر: لا يمكن حساب متوسط الألوان."]),
        Q(["'How many pets do the students in your class have?' gives:", "«كم حيوانًا أليفًا لدى طلاب فصلك؟» يعطي:"], [["Numerical data", "بيانات عددية"], ["Categorical data", "بيانات وصفية"], ["One answer only", "إجابة واحدة فقط"], ["Yes/no answers", "إجابات نعم أو لا"]],
          ["The answers are counts: 0, 1, 2, 3, ... numerical data.", "الإجابات أعداد: 0، 1، 2، 3، ... بيانات عددية."], ["You could draw them as dots on a number line.", "يمكنك رسمها نقاطًا على خط الأعداد."]),
        Q(["Which display suits categorical data best?", "أي تمثيل يناسب البيانات الوصفية أكثر؟"], [["A bar graph", "التمثيل بالأعمدة"], ["A dot plot", "التمثيل بالنقاط"], ["A histogram", "المدرج التكراري"], ["A box plot", "الصندوق ذو العارضتين"]],
          ["Categories have no number line order; a bar graph shows a separate bar for each category.", "الفئات ليس لها ترتيب على خط الأعداد، والأعمدة تعطي عمودًا منفصلًا لكل فئة."], ["One bar for each TV show in the capsule.", "عمود لكل برنامج في الكبسولة."]),
        Q(["Which question is NOT statistical?", "أي سؤال ليس إحصائيًا؟"], [["How many books did you read this past year?", "كم كتابًا قرأت في العام الماضي؟"], ["How many emails do the students in the class write per week?", "كم رسالة إلكترونية يكتب طلاب الفصل أسبوعيًا؟"], ["What are the students' favourite colours?", "ما الألوان المفضلة للطلاب؟"], ["How many people are in each student's family?", "كم عدد أفراد أسرة كل طالب؟"]],
          ["Asked to one person, it has a single answer.", "عندما يُوجَّه لشخص واحد تكون له إجابة واحدة."], ["Only you can answer it, with one number.", "أنت وحدك تجيب عنه بعدد واحد."]),
        Q(["'What are the scores on all of your math tests this term?' gives:", "«ما درجاتك في كل اختبارات الرياضيات هذا الفصل؟» يعطي:"], [["Numerical data", "بيانات عددية"], ["Categorical data", "بيانات وصفية"], ["No variability", "لا تباين"], ["Only names", "أسماء فقط"]],
          ["Test scores are numbers that vary from test to test.", "الدرجات أعداد تختلف من اختبار لآخر."], ["7, 9, 8, 10: a list of numbers.", "7، 9، 8، 10: قائمة أعداد."])]),

    Ls("mp6u6l2", 85, "📶", ["Exploring the Histogram and Representing Data Using Histograms", "استكشاف المدرج التكراري وتمثيل البيانات به"],
      [["A dot plot shows every data value as a dot above a number line; count the dots to find the number of observations.",
        "A histogram groups numerical data into equal intervals with no gaps or overlaps, like 0-29, 30-59, 60-89 songs.",
        "In a histogram the bars touch, each axis is labelled, and the height of a bar is the frequency of its interval.",
        "A bar graph is for categories (favourite cinema); its bars are separated.",
        "Choose an interval size that suits the data. A histogram shows the shape of the data but not the individual values."],
       ["التمثيل بالنقاط يُظهر كل قيمة نقطةً فوق خط الأعداد، ونعدّ النقاط لنعرف عدد المشاهدات.",
        "المدرج التكراري يجمع البيانات العددية في فئات متساوية بلا فجوات أو تداخل، مثل 0-29 و30-59 و60-89 أغنية.",
        "في المدرج التكراري تتلاصق الأعمدة، ويُسمّى كل محور، وارتفاع العمود هو تكرار فئته.",
        "التمثيل بالأعمدة للفئات الوصفية (السينما المفضلة) وأعمدته منفصلة.",
        "نختار طول فئة يناسب البيانات، والمدرج التكراري يُظهر شكل البيانات لكنه لا يُظهر القيم المفردة."]],
      [["Amira's class rolls two number cubes many times and records the sums.",
        "The sums go from 2 to 12. She groups them in intervals 2-3, 4-5, 6-7, 8-9, 10-11, 12-13.",
        "The 6-7 bar grows tallest, because 7 can be made in 6 ways and 6 in 5 ways.",
        "Her bars touch, because each interval starts right where the last one ended.",
        "From the histogram she knows how many sums fell in 6-7, but not how many were exactly 6."],
       ["يرمي فصل أميرة مكعبي أرقام مرات كثيرة ويسجل المجموع.",
        "المجموع من 2 إلى 12، فتجمعه في الفئات 2-3 و4-5 و6-7 و8-9 و10-11 و12-13.",
        "يصبح عمود 6-7 هو الأطول لأن 7 يتكون بـ6 طرق و6 بـ5 طرق.",
        "أعمدتها متلاصقة لأن كل فئة تبدأ حيث انتهت التي قبلها.",
        "من المدرج تعرف كم مجموعًا وقع في 6-7، لكنها لا تعرف كم مرة كان المجموع 6 بالضبط."]],
      [W("Histogram", "المدرج التكراري", "Touching bars that show how many values fall in each interval.", "أعمدة متلاصقة توضح عدد القيم في كل فئة."),
        W("Interval", "الفئة", "A range of values of equal size, like 30-59.", "مدى من القيم بطول ثابت مثل 30-59."),
        W("Frequency", "التكرار", "How many times a value or interval occurs.", "عدد مرات ظهور القيمة أو الفئة."),
        W("Bar graph", "التمثيل بالأعمدة", "Separated bars for categories.", "أعمدة منفصلة للفئات الوصفية."),
        W("Observation", "المشاهدة", "One recorded data value.", "قيمة واحدة مسجلة من البيانات.")],
      "m6_hist",
      [Q(["Which is true for every histogram?", "أي عبارة صحيحة لكل مدرج تكراري؟"], [["The bars touch", "الأعمدة متلاصقة"], ["It shows every individual value", "يُظهر كل قيمة مفردة"], ["Intervals can have different sizes", "الفئات قد تختلف أطوالها"], ["The bars are separated", "الأعمدة منفصلة"]],
          ["Intervals follow each other with no gaps, so the bars touch; intervals are equal in size.", "الفئات متتالية بلا فجوات فتتلاصق الأعمدة، والفئات متساوية الطول."], ["Amira's bars stand shoulder to shoulder.", "أعمدة أميرة تقف كتفًا بكتف."]),
        Q(["Which set of intervals has no gaps or overlaps?", "أي مجموعة فئات بلا فجوات أو تداخل؟"], [["0-29, 30-59, 60-89", "0-29، 30-59، 60-89"], ["0-30, 30-60, 60-90", "0-30، 30-60، 60-90"], ["0-29, 40-59, 60-89", "0-29، 40-59، 60-89"], ["0-10, 10-30, 30-90", "0-10، 10-30، 30-90"]],
          ["Each interval has 30 values and starts right after the last one ends. 30 would belong to two intervals in the second set.", "كل فئة فيها 30 قيمة وتبدأ بعد نهاية السابقة مباشرة، وفي المجموعة الثانية ينتمي 30 إلى فئتين."], ["No song count is lost and none is counted twice.", "لا يضيع أي عدد ولا يُعدّ مرتين."]),
        Q(["A histogram shows songs in intervals of 30. Which question can it answer?", "مدرج تكراري للأغاني بفئات طولها 30. أي سؤال يمكنه الإجابة عنه؟"], [["How many students had from 90 to 179 songs?", "كم طالبًا لديه من 90 إلى 179 أغنية؟"], ["How many students had exactly 120 songs?", "كم طالبًا لديه 120 أغنية بالضبط؟"], ["What was the greatest number of songs?", "ما أكبر عدد من الأغاني؟"], ["What is the exact median?", "ما الوسيط بالضبط؟"]],
          ["90-119, 120-149 and 150-179 are whole intervals: add their bars.", "90-119 و120-149 و150-179 فئات كاملة: اجمع أعمدتها."], ["The histogram knows the groups, not the single values.", "المدرج يعرف المجموعات لا القيم المفردة."]),
        Q(["A dot plot has 3 dots above 0, 4 above 1, 2 above 2 and 1 above 5 movies. How many people were surveyed?", "تمثيل بالنقاط فيه 3 نقاط فوق 0 و4 فوق 1 ونقطتان فوق 2 ونقطة فوق 5 أفلام. كم شخصًا شملهم الاستطلاع؟"], [[e("10"), e("10")], [e("13"), e("13")], [e("4"), e("4")], [e("6"), e("6")]],
          ["Each dot is one person: 3 + 4 + 2 + 1 = 10. (13 is the number of movies.)", "كل نقطة شخص: 3 + 4 + 2 + 1 = 10. (13 هو عدد الأفلام.)"], ["Count the people, not the movies they saw.", "عُدّ الأشخاص لا الأفلام التي شاهدوها."]),
        Q(["In how many ways can two number cubes give a sum of 7?", "بكم طريقة يعطي مكعبا الأرقام مجموعًا 7؟"], [[e("6"), e("6")], [e("7"), e("7")], [e("5"), e("5")], [e("12"), e("12")]],
          ["1+6, 2+5, 3+4, 4+3, 5+2, 6+1: 6 ways, the most of any sum.", "1+6 و2+5 و3+4 و4+3 و5+2 و6+1: 6 طرق، وهي الأكثر بين كل المجاميع."], ["That is why 7 is the tallest part of Amira's histogram.", "ولهذا يكون 7 أطول جزء في مدرج أميرة."]),
        Q(["Arm spans: 120-129 cm: 3, 130-139: 5, 140-149: 7, 150-159: 2. Which interval is most common?", "طول الذراعين: 120-129 سم: 3، و130-139: 5، و140-149: 7، و150-159: 2. ما الفئة الأكثر تكرارًا؟"], [["140-149 cm", "140-149 سم"], ["130-139 cm", "130-139 سم"], ["150-159 cm", "150-159 سم"], ["120-129 cm", "120-129 سم"]],
          ["The tallest bar has frequency 7: 140-149 cm.", "أطول عمود تكراره 7: 140-149 سم."], ["Seven students stretch between 140 and 149 cm.", "سبعة طلاب تمتد أذرعهم بين 140 و149 سم."]),
        Q(["'Favourite cinema' data should be shown in a:", "بيانات «السينما المفضلة» تُمثَّل بـ:"], [["Bar graph", "التمثيل بالأعمدة"], ["Histogram", "المدرج التكراري"], ["Dot plot on a number line", "التمثيل بالنقاط على خط الأعداد"], ["Box plot", "الصندوق ذو العارضتين"]],
          ["Cinema names are categories, so use separated bars.", "أسماء السينمات فئات وصفية، فنستخدم أعمدة منفصلة."], ["You cannot put cinema names on a number line.", "لا يمكن وضع أسماء السينمات على خط الأعداد."])]),

    Ls("mp6u6l3", 90, "📦", ["Exploring Box Plot and Applications on Data Representations", "استكشاف الصندوق ذي العارضتين وتطبيقات على تمثيل البيانات"],
      [["The median is the middle value of ordered data. With an even number of values it is the mean of the two middle values: 1, 2, 3, 3, 5, 7 → " + e("(3 + 3) ÷ 2 = 3") + ".",
        "The five-number summary: minimum, lower quartile Q1, median, upper quartile Q3, maximum.",
        "Book example: 0, 1, 7, 4, 18, 12, 0, 9, 12, 11, 13, 17, 15. Ordered: 0, 0, 1, 4, 7, 9, 11, 12, 12, 13, 15, 17, 18. Min 0, " + e("Q1 = (1 + 4) ÷ 2 = 2.5") + ", median 11, " + e("Q3 = (13 + 15) ÷ 2 = 14") + ", max 18.",
        "The box goes from Q1 to Q3 and holds the middle half of the data; the whiskers reach the minimum and the maximum.",
        "Choose a display: a dot plot to see exact values, a histogram for many values in intervals, a box plot for the median and the spread."],
       ["الوسيط هو القيمة الوسطى للبيانات المرتبة، وإذا كان عدد القيم زوجيًا فهو متوسط القيمتين الوسطيين: 1، 2، 3، 3، 5، 7 ← " + e("(3 + 3) ÷ 2 = 3") + ".",
        "الملخص الخماسي: أصغر قيمة، والربيع الأدنى Q1، والوسيط، والربيع الأعلى Q3، وأكبر قيمة.",
        "مثال الكتاب: 0، 1، 7، 4، 18، 12، 0، 9، 12، 11، 13، 17، 15، وبعد الترتيب: 0، 0، 1، 4، 7، 9، 11، 12، 12، 13، 15، 17، 18، فأصغر قيمة 0 و" + e("Q1 = (1 + 4) ÷ 2 = 2.5") + " والوسيط 11 و" + e("Q3 = (13 + 15) ÷ 2 = 14") + " وأكبر قيمة 18.",
        "الصندوق يمتد من Q1 إلى Q3 ويضم النصف الأوسط من البيانات، والعارضتان تصلان إلى أصغر قيمة وأكبر قيمة.",
        "اختر التمثيل: النقاط لرؤية القيم بالضبط، والمدرج التكراري للقيم الكثيرة في فئات، والصندوق ذو العارضتين للوسيط والتشتت."]],
      [["Ayman records his basketball team's points in the last game: 1, 12, 6, 6, 5, 2, 0, 10, 7, 2.",
        "He orders them: 0, 1, 2, 2, 5, 6, 6, 7, 10, 12.",
        "The two middle values are 5 and 6, so the median is " + e("(5 + 6) ÷ 2 = 5.5") + ", not 3.5 as he first thought.",
        "The lower half 0, 1, 2, 2, 5 has median Q1 = 2; the upper half 6, 6, 7, 10, 12 has median Q3 = 7.",
        "His box plot runs from 0 to 12, with the box from 2 to 7 and a line at 5.5."],
       ["يسجل أيمن نقاط لاعبي فريق السلة في آخر مباراة: 1، 12، 6، 6، 5، 2، 0، 10، 7، 2.",
        "يرتبها: 0، 1، 2، 2، 5، 6، 6، 7، 10، 12.",
        "القيمتان الوسطيان 5 و6، إذن الوسيط " + e("(5 + 6) ÷ 2 = 5.5") + " وليس 3.5 كما ظن أولًا.",
        "النصف الأدنى 0، 1، 2، 2، 5 وسيطه Q1 = 2، والنصف الأعلى 6، 6، 7، 10، 12 وسيطه Q3 = 7.",
        "صندوقه يمتد من 0 إلى 12، والصندوق من 2 إلى 7 وفيه خط عند 5.5."]],
      [W("Median", "الوسيط", "The middle value of ordered data.", "القيمة الوسطى للبيانات المرتبة."),
        W("Box plot", "الصندوق ذو العارضتين", "A display of the five-number summary with a box and two whiskers.", "تمثيل للملخص الخماسي بصندوق وعارضتين."),
        W("Lower quartile (Q1)", "الربيع الأدنى", "The median of the lower half of the data.", "وسيط النصف الأدنى من البيانات."),
        W("Upper quartile (Q3)", "الربيع الأعلى", "The median of the upper half of the data.", "وسيط النصف الأعلى من البيانات."),
        W("Five-number summary", "الملخص الخماسي", "Minimum, Q1, median, Q3 and maximum.", "أصغر قيمة وQ1 والوسيط وQ3 وأكبر قيمة.")],
      "m6_box",
      [Q(["What is the median of 1, 2, 3, 5, 7?", "ما وسيط 1، 2، 3، 5، 7؟"], [[e("3"), e("3")], [e("3.6"), e("3.6")], [e("5"), e("5")], [e("4"), e("4")]],
          ["Five ordered values: the 3rd one, 3, is in the middle. (3.6 is the mean.)", "خمس قيم مرتبة: الثالثة وهي 3 في المنتصف. (3.6 هو المتوسط.)"], ["Two numbers on each side of 3.", "عددان على كل جانب من 3."]),
        Q(["What is the median of 1, 2, 2, 3, 5, 7?", "ما وسيط 1، 2، 2، 3، 5، 7؟"], [[e("2.5"), e("2.5")], [e("2"), e("2")], [e("3"), e("3")], [e("3.33"), e("3.33")]],
          ["Six values: the middle two are 2 and 3, so (2 + 3) ÷ 2 = 2.5.", "ست قيم: القيمتان الوسطيان 2 و3، إذن (2 + 3) ÷ 2 = 2.5."], ["Halfway between the two middle players.", "في منتصف المسافة بين اللاعبين الأوسطين."]),
        Q(["Ayman's points: 1, 12, 6, 6, 5, 2, 0, 10, 7, 2. What is the median?", "نقاط أيمن: 1، 12، 6، 6، 5، 2، 0، 10، 7، 2. ما الوسيط؟"], [[e("5.5"), e("5.5")], [e("3.5"), e("3.5")], [e("6"), e("6")], [e("5.1"), e("5.1")]],
          ["Ordered: 0, 1, 2, 2, 5, 6, 6, 7, 10, 12. Middle: (5 + 6) ÷ 2 = 5.5.", "بعد الترتيب: 0، 1، 2، 2، 5، 6، 6، 7، 10، 12، والوسط (5 + 6) ÷ 2 = 5.5."], ["Ayman forgot to order the data first.", "نسي أيمن أن يرتب البيانات أولًا."]),
        Q(["What does the box in a box plot show?", "ماذا يُظهر الصندوق في الصندوق ذي العارضتين؟"], [["Where the middle half of the data is", "مكان النصف الأوسط من البيانات"], ["Every data value", "كل قيمة من البيانات"], ["Only the lowest quarter", "الربع الأدنى فقط"], ["Only the median", "الوسيط فقط"]],
          ["From Q1 to Q3 lies the middle 50% of the data.", "من Q1 إلى Q3 يقع النصف الأوسط (50٪) من البيانات."], ["Half the team scored between the box ends.", "نصف الفريق سجل بين طرفي الصندوق."]),
        Q(["For 0, 0, 1, 4, 7, 9, 11, 12, 12, 13, 15, 17, 18, what is Q3?", "للبيانات 0، 0، 1، 4، 7، 9، 11، 12، 12، 13، 15، 17، 18، ما قيمة Q3؟"], [[e("14"), e("14")], [e("13"), e("13")], [e("15"), e("15")], [e("12"), e("12")]],
          ["The median is 11; the upper half 12, 12, 13, 15, 17, 18 has middle (13 + 15) ÷ 2 = 14.", "الوسيط 11، والنصف الأعلى 12، 12، 13، 15، 17، 18 وسطه (13 + 15) ÷ 2 = 14."], ["The median of the top half.", "وسيط النصف العلوي."]),
        Q(["Which display best answers 'How many students have exactly 150 songs?'", "أي تمثيل يجيب أفضل عن «كم طالبًا لديه 150 أغنية بالضبط؟»"], [["A dot plot", "التمثيل بالنقاط"], ["A histogram", "المدرج التكراري"], ["A box plot", "الصندوق ذو العارضتين"], ["None of them", "لا شيء منها"]],
          ["Only the dot plot shows every single value.", "التمثيل بالنقاط وحده يُظهر كل قيمة مفردة."], ["Count the dots standing on 150.", "عُدّ النقاط الواقفة فوق 150."]),
        Q(["Math hours: 7, 3, 8, 7, 9, 8, 2, 4, 5, 0, 2, 1, 6, 4. What is the median?", "ساعات الرياضيات: 7، 3، 8، 7، 9، 8، 2، 4، 5، 0، 2، 1، 6، 4. ما الوسيط؟"], [[e("4.5"), e("4.5")], [e("5"), e("5")], [e("4"), e("4")], [e("7"), e("7")]],
          ["Ordered: 0, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9. 14 values, middle two are 4 and 5: 4.5.", "بعد الترتيب: 0، 1، 2، 2، 3، 4، 4، 5، 6، 7، 7، 8، 8، 9، أي 14 قيمة والوسطيان 4 و5: 4.5."], ["Seven students below, seven above.", "سبعة طلاب أسفل وسبعة أعلى."])])
  ] });

  /* ======================= UNIT 7 - MEASURES OF CENTRAL TENDENCY AND SPREAD ======================= */
  U.push({ id: "mp6u7", num: 7, icon: "🎯", color: "blue", title: { en: "Measures of Central Tendency and Spread", ar: "مقاييس النزعة المركزية والتشتت" }, lessons: [
    Ls("mp6u7l1", 99, "⚖️", ["Exploring the Balance of Data Sets and Interpreting Mean", "استكشاف اتزان مجموعات البيانات وتفسير المتوسط الحسابي"],
      [["The mean summarizes a data set with one number: " + e("mean = sum of the values ÷ number of values") + ".",
        "Class sizes 22, 19, 27, 25, 29, 21, 25: the sum is 168 for 7 classes, so " + e("mean = 168 ÷ 7 = 24") + ".",
        "Mean as a balance point: on a dot plot the mean is where the data balance like a seesaw. For 32, 34, 36, 38, 40 cards the balance point is 36.",
        "Mean as a fair share: if 6 students bring 42 pencils in total, each gets " + e("42 ÷ 6 = 7") + " when they are shared equally.",
        "The mean of 39 and 51 is " + e("(39 + 51) ÷ 2 = 45") + ", halfway between them."],
       ["المتوسط الحسابي يلخص مجموعة البيانات بعدد واحد: " + e("mean = sum ÷ count") + "، أي مجموع القيم ÷ عددها.",
        "أعداد الطلاب في الفصول 22، 19، 27، 25، 29، 21، 25: المجموع 168 لسبعة فصول، إذن " + e("mean = 168 ÷ 7 = 24") + ".",
        "المتوسط نقطة اتزان: في التمثيل بالنقاط يكون المتوسط حيث تتزن البيانات كالأرجوحة، ونقطة اتزان 32، 34، 36، 38، 40 بطاقة هي 36.",
        "المتوسط نصيب عادل: إذا أحضر 6 طلاب 42 قلمًا معًا فنصيب كل منهم " + e("42 ÷ 6 = 7") + " عند التوزيع بالتساوي.",
        "متوسط 39 و51 هو " + e("(39 + 51) ÷ 2 = 45") + "، في منتصف المسافة بينهما."]],
      [["Saeed's class groups made 32, 34, 36, 38 and 40 greeting cards for charity.",
        "He moves 4 cards from the 40-group to the 32-group, and 2 cards from the 38-group to the 34-group.",
        "Now every group has 36: that is the fair share, the mean.",
        "Check: " + e("32 + 34 + 36 + 38 + 40 = 180") + " and " + e("180 ÷ 5 = 36") + ".",
        "On a seesaw the five dots balance at 36 too: 4 below and 4 above, 2 below and 2 above."],
       ["صنعت مجموعات فصل سعيد 32 و34 و36 و38 و40 بطاقة تهنئة للجمعية الخيرية.",
        "ينقل 4 بطاقات من مجموعة الـ40 إلى مجموعة الـ32، وبطاقتين من مجموعة الـ38 إلى مجموعة الـ34.",
        "الآن لكل مجموعة 36 بطاقة: هذا هو النصيب العادل، أي المتوسط.",
        "التحقق: " + e("32 + 34 + 36 + 38 + 40 = 180") + " و" + e("180 ÷ 5 = 36") + ".",
        "وعلى الأرجوحة تتزن النقاط الخمس عند 36 أيضًا: 4 أسفلها و4 أعلاها، و2 أسفلها و2 أعلاها."]],
      [W("Mean", "المتوسط الحسابي", "The sum of the values divided by how many values there are.", "مجموع القيم مقسومًا على عددها."),
        W("Balance point", "نقطة الاتزان", "The point on a dot plot where the data balance.", "النقطة التي تتزن عندها البيانات في التمثيل بالنقاط."),
        W("Fair share", "النصيب العادل", "What each gets when a total is shared equally.", "ما يأخذه كل فرد عند توزيع المجموع بالتساوي."),
        W("Measure of center", "مقياس النزعة المركزية", "One number that describes the middle of the data: mean or median.", "عدد واحد يصف وسط البيانات: المتوسط أو الوسيط."),
        W("Data set", "مجموعة البيانات", "A collection of values about one question.", "مجموعة قيم عن سؤال واحد.")],
      "m6_mean",
      [Q(["Find the mean of 22, 19, 27, 25, 29, 21, 25.", "أوجد متوسط 22، 19، 27، 25، 29، 21، 25."], [[e("24"), e("24")], [e("25"), e("25")], [e("168"), e("168")], [e("27"), e("27")]],
          ["Sum = 168, count = 7, mean = 168 ÷ 7 = 24. (25 is the median and the mode.)", "المجموع 168 والعدد 7، إذن المتوسط 168 ÷ 7 = 24. (25 هو الوسيط والمنوال.)"], ["If all 7 classes had equal sizes, each would have 24 students.", "لو تساوت الفصول السبعة لكان في كل منها 24 طالبًا."]),
        Q(["Find the mean of 32, 34, 36, 38, 40.", "أوجد متوسط 32، 34، 36، 38، 40."], [[e("36"), e("36")], [e("180"), e("180")], [e("38"), e("38")], [e("34"), e("34")]],
          ["180 ÷ 5 = 36.", "180 ÷ 5 = 36."], ["Saeed's groups all end up with 36 cards.", "تنتهي مجموعات سعيد كلها بـ36 بطاقة."]),
        Q(["6 students brought 42 pencils in total. What is each one's fair share?", "أحضر 6 طلاب 42 قلمًا معًا. ما النصيب العادل لكل منهم؟"], [[e("7"), e("7")], [e("6"), e("6")], [e("4"), e("4")], [e("42"), e("42")]],
          ["42 ÷ 6 = 7 pencils each.", "42 ÷ 6 = 7 أقلام لكل طالب."], ["Deal the pencils one by one around the table.", "وزّع الأقلام واحدًا واحدًا حول المنضدة."]),
        Q(["What is the mean of 39 and 51?", "ما متوسط 39 و51؟"], [[e("45"), e("45")], [e("90"), e("90")], [e("12"), e("12")], [e("41"), e("41")]],
          ["(39 + 51) ÷ 2 = 90 ÷ 2 = 45.", "(39 + 51) ÷ 2 = 90 ÷ 2 = 45."], ["Meet in the middle: 6 up from 39, 6 down from 51.", "التقيا في المنتصف: 6 فوق 39 و6 تحت 51."]),
        Q(["Jersey numbers 4, 11, 16, 20. What is the mean?", "أرقام القمصان 4، 11، 16، 20. ما المتوسط؟"], [[e("12.75"), e("12.75")], [e("13.5"), e("13.5")], [e("51"), e("51")], [e("12"), e("12")]],
          ["Sum = 51, 51 ÷ 4 = 12.75. (13.5 is the median.)", "المجموع 51، و51 ÷ 4 = 12.75. (13.5 هو الوسيط.)"], ["The balance point of the four shirts is 12 3/4.", "نقطة اتزان القمصان الأربعة 12 3/4."]),
        Q(["On a dot plot, the balance point of the data is the:", "في التمثيل بالنقاط، نقطة اتزان البيانات هي:"], [["Mean", "المتوسط الحسابي"], ["Mode", "المنوال"], ["Greatest value", "أكبر قيمة"], ["Range", "المدى"]],
          ["The distances below and above the mean cancel out.", "المسافات أسفل المتوسط وأعلاه تلغي بعضها."], ["The seesaw rests flat at the mean.", "تستقر الأرجوحة أفقية عند المتوسط."]),
        Q(["A group brought 3, 5, 2, 6, 4 pencils. What is the fair share?", "أحضرت مجموعة 3، 5، 2، 6، 4 أقلام. ما النصيب العادل؟"], [[e("4"), e("4")], [e("5"), e("5")], [e("20"), e("20")], [e("3"), e("3")]],
          ["Sum = 20, 20 ÷ 5 = 4.", "المجموع 20، و20 ÷ 5 = 4."], ["Move pencils from the tall piles to the short ones until all piles are 4.", "انقل أقلامًا من الأكوام الطويلة إلى القصيرة حتى تصبح كلها 4."])]),

    Ls("mp6u7l2", 105, "🎯", ["Exploring Median, Mode, Outliers and the Range", "استكشاف الوسيط والمنوال والقيم المتطرفة والمدى"],
      [["The mode is the value that appears most often; the median is the middle of the ordered data.",
        "Book example: 0, 0, 0, 1, 4, 7, 9, 11, 12, 12, 13, 15, 17, 18: mode = 0, " + e("median = (9 + 11) ÷ 2 = 10") + ", " + e("mean = 119 ÷ 14 = 8.5") + ".",
        "An outlier is a value far from the rest, like a student with 9 siblings when most have 0 to 2. It pulls the mean toward it but hardly moves the median.",
        "When there is an outlier, the median usually describes the data better than the mean.",
        "The range measures spread: " + e("range = maximum − minimum") + ". Spring temperatures with range 14 °C vary more than summer temperatures with range 10 °C."],
       ["المنوال هو القيمة الأكثر تكرارًا، والوسيط هو وسط البيانات المرتبة.",
        "مثال الكتاب: 0، 0، 0، 1، 4، 7، 9، 11، 12، 12، 13، 15، 17، 18: المنوال 0، و" + e("median = (9 + 11) ÷ 2 = 10") + "، و" + e("mean = 119 ÷ 14 = 8.5") + ".",
        "القيمة المتطرفة بعيدة عن باقي القيم، مثل طالب له 9 إخوة ومعظم الطلاب لهم من 0 إلى 2، وهي تجذب المتوسط نحوها ولا تكاد تحرك الوسيط.",
        "عند وجود قيمة متطرفة يصف الوسيط البيانات عادة أفضل من المتوسط.",
        "المدى يقيس التشتت: " + e("range = max − min") + "، أي أكبر قيمة − أصغر قيمة، فدرجات حرارة الربيع بمدى 14 °س تتشتت أكثر من درجات الصيف بمدى 10 °س."]],
      [["Rami asks 10 friends how many siblings they have: 1, 2, 0, 1, 2, 1, 2, 1, 0, 9.",
        "Ordered: 0, 0, 1, 1, 1, 1, 2, 2, 2, 9. The 9 sits far away: an outlier.",
        e("Mean = 19 ÷ 10 = 1.9") + ", pulled up by the 9; the median is 1 and the mode is 1.",
        "Without the 9 the mean becomes " + e("10 ÷ 9 ≈ 1.1") + ", close to the median.",
        "The range is " + e("9 − 0 = 9") + ", although most friends are between 0 and 2."],
       ["يسأل رامي 10 أصدقاء عن عدد إخوتهم: 1، 2، 0، 1، 2، 1، 2، 1، 0، 9.",
        "بعد الترتيب: 0، 0، 1، 1، 1، 1، 2، 2، 2، 9، والعدد 9 بعيد جدًا: قيمة متطرفة.",
        e("Mean = 19 ÷ 10 = 1.9") + "، مرفوع بسبب الـ9، والوسيط 1 والمنوال 1.",
        "بدون الـ9 يصبح المتوسط " + e("10 ÷ 9 ≈ 1.1") + "، قريبًا من الوسيط.",
        "المدى " + e("9 − 0 = 9") + "، مع أن معظم الأصدقاء بين 0 و2."]],
      [W("Mode", "المنوال", "The value that appears most often.", "القيمة الأكثر تكرارًا."),
        W("Median", "الوسيط", "The middle value of the ordered data.", "القيمة الوسطى للبيانات المرتبة."),
        W("Outlier", "القيمة المتطرفة", "A value far away from the rest of the data.", "قيمة بعيدة عن باقي البيانات."),
        W("Range", "المدى", "Maximum minus minimum.", "أكبر قيمة مطروحًا منها أصغر قيمة."),
        W("Spread", "التشتت", "How far apart the data values are.", "مدى تباعد قيم البيانات.")],
      "m6_outlier",
      [Q(["What is the range of 0, 0, 0, 1, 4, 7, 9, 11, 12, 12, 13, 15, 17, 18?", "ما مدى 0، 0، 0، 1، 4، 7، 9، 11، 12، 12، 13، 15، 17، 18؟"], [[e("18"), e("18")], [e("14"), e("14")], [e("0"), e("0")], [e("10"), e("10")]],
          ["Range = 18 − 0 = 18. (14 is the number of values; 10 is the median.)", "المدى = 18 − 0 = 18. (14 عدد القيم، و10 الوسيط.)"], ["From the smallest to the largest: 18 steps.", "من الأصغر إلى الأكبر: 18 خطوة."]),
        Q(["What is the mode of that same data set?", "ما منوال مجموعة البيانات نفسها؟"], [[e("0"), e("0")], [e("12"), e("12")], [e("10"), e("10")], [e("18"), e("18")]],
          ["0 appears 3 times, more than any other value.", "يظهر 0 ثلاث مرات، أكثر من أي قيمة أخرى."], ["The tallest stack of dots is at 0.", "أعلى عمود من النقاط عند 0."]),
        Q(["Most students have 0 to 2 siblings and one has 9. How does the outlier affect the mean?", "معظم الطلاب لهم من 0 إلى 2 إخوة وطالب له 9. كيف تؤثر القيمة المتطرفة في المتوسط؟"], [["It makes the mean much higher", "تجعل المتوسط أعلى بكثير"], ["It makes the mean lower", "تجعل المتوسط أقل"], ["It has no effect", "لا تؤثر"], ["It raises it by a negligible amount", "ترفعه بمقدار لا يُذكر"]],
          ["A large value adds a lot to the sum, so the mean is pulled up.", "القيمة الكبيرة تضيف كثيرًا إلى المجموع فيرتفع المتوسط."], ["Rami's mean jumped from about 1.1 to 1.9.", "قفز متوسط رامي من نحو 1.1 إلى 1.9."]),
        Q(["Which measure of center is better when there is an outlier?", "أي مقياس للنزعة المركزية أفضل عند وجود قيمة متطرفة؟"], [["The median", "الوسيط"], ["The mean", "المتوسط الحسابي"], ["The range", "المدى"], ["None", "لا شيء"]],
          ["The median depends on the middle position, so one far value hardly changes it.", "الوسيط يعتمد على الموقع الأوسط، فلا تكاد تغيره قيمة واحدة بعيدة."], ["Rami's median stayed at 1.", "بقي وسيط رامي 1."]),
        Q(["Spring has range 14 °C and summer has range 10 °C, with the same median. What does this mean?", "مدى الربيع 14 °س ومدى الصيف 10 °س، والوسيط واحد. ماذا يعني ذلك؟"], [["Spring temperatures are more spread out", "درجات حرارة الربيع أكثر تشتتًا"], ["Spring is hotter", "الربيع أحر"], ["Summer temperatures are more spread out", "درجات حرارة الصيف أكثر تشتتًا"], ["They are identical", "متطابقتان"]],
          ["A greater range means the values are farther apart.", "المدى الأكبر يعني أن القيم أكثر تباعدًا."], ["Spring jumps between cool mornings and warm days.", "الربيع يتنقل بين صباح بارد ونهار دافئ."]),
        Q(["54 test scores have a sum of 4,100. What is the mean (to one decimal place)?", "مجموع 54 درجة يساوي 4100. ما المتوسط (لأقرب رقم عشري)؟"], [[e("75.9"), e("75.9")], [e("54"), e("54")], [e("4,046"), e("4,046")], [e("7.6"), e("7.6")]],
          ["4,100 ÷ 54 ≈ 75.9.", "4100 ÷ 54 ≈ 75.9."], ["Asmaa shares 4,100 points among 54 students.", "توزع أسماء 4100 نقطة على 54 طالبًا."]),
        Q(["Nour's quiz scores are 7, 9, 6, 10, 8. What is the range?", "درجات نور في الاختبارات القصيرة 7، 9، 6، 10، 8. ما المدى؟"], [[e("4"), e("4")], [e("10"), e("10")], [e("6"), e("6")], [e("8"), e("8")]],
          ["10 − 6 = 4.", "10 − 6 = 4."], ["Her best and worst scores are 4 marks apart.", "أفضل درجاتها وأقلها بينهما 4 درجات."]),
        Q(["Median of 1, 2, 0, 1, 2, 1, 2, 1, 0, 9?", "ما وسيط 1، 2، 0، 1، 2، 1، 2، 1، 0، 9؟"], [[e("1"), e("1")], [e("1.9"), e("1.9")], [e("2"), e("2")], [e("4.5"), e("4.5")]],
          ["Ordered: 0, 0, 1, 1, 1, 1, 2, 2, 2, 9; middle two are 1 and 1, so the median is 1. (1.9 is the mean.)", "بعد الترتيب: 0، 0، 1، 1، 1، 1، 2، 2، 2، 9، والوسطيان 1 و1، إذن الوسيط 1. (1.9 هو المتوسط.)"], ["The outlier 9 cannot move the middle.", "القيمة المتطرفة 9 لا تحرك الوسط."])])
  ] });

  E.MTHG.p6 = { units: U, book: "Primary 6 Mathematics, Term 1" };
})();
/* ---------- Primary 6 maths: objectives, extra quiz items, tappable diagrams, lab part names ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, A = E.mthP6A || function (s) { return s; };
  var OBJ = E.SCI3_OBJ = E.SCI3_OBJ || {};
  var EX = E.SCI3_EXTRA = E.SCI3_EXTRA || {};
  var D = E.sciDiagrams = E.sciDiagrams || {};
  var L = E.sciLabs;
  function P(p) { return [p[0], A(p[1])]; }

  /* ---------- "In this lesson" objectives (from the book's learning targets) ---------- */
  var O = {
    mp6u1l1: [["Divisibility rules for 2, 3, 4, 5, 6 and 10", "قواعد قابلية القسمة على 2 و3 و4 و5 و6 و10"], ["Divisibility, factors and multiples", "القسمة والعوامل والمضاعفات"], ["Prime numbers", "الأعداد الأولية"], ["Prime factorization with a factor tree", "التحليل إلى العوامل الأولية بشجرة العوامل"]],
    mp6u1l2: [["GCF and LCM from a Venn diagram", "ع.م.أ وم.م.أ من شكل فن"], ["Relatively prime numbers", "الأعداد الأولية فيما بينها"], ["Writing a sum as GCF × (sum)", "كتابة المجموع في صورة ع.م.أ × (مجموع)"], ["Using the LCM as a common denominator", "استخدام م.م.أ مقامًا مشتركًا"]],
    mp6u2l1: [["Negative numbers on a number line", "الأعداد السالبة على خط الأعداد"], ["Plotting real-life data: heights, temperatures", "تمثيل بيانات الحياة: الارتفاعات ودرجات الحرارة"], ["Comparing with < and >", "المقارنة بالرمزين < و>"], ["Opposite numbers (additive inverse)", "الأعداد المتعاكسة (المعكوس الجمعي)"]],
    mp6u2l2: [["What makes a number rational", "متى يكون العدد نسبيًا"], ["Counting, natural, integer and rational sets", "مجموعات أعداد العد والطبيعية والصحيحة والنسبية"], ["Writing rational numbers as a/b", "كتابة الأعداد النسبية في صورة a/b"], ["Ordering rational numbers", "ترتيب الأعداد النسبية"]],
    mp6u2l3: [["Absolute value as distance from 0", "القيمة المطلقة بعدٌ عن الصفر"], ["Opposites have equal absolute values", "المتعاكسان لهما القيمة المطلقة نفسها"], ["Comparing absolute values with <, >, =", "مقارنة القيم المطلقة بالرموز <، >، ="], ["Real-life: money owed, freezers, depths", "من الحياة: الديون والمجمدات والأعماق"]],
    mp6u3l1: [["Variables and algebraic expressions", "المتغيرات والمقادير الجبرية"], ["Terms, like terms, coefficients, constants", "الحدود والحدود المتشابهة والمعاملات والثوابت"], ["Numeric vs algebraic expressions", "المقادير العددية والجبرية"], ["Writing expressions from words", "كتابة المقادير من الكلمات"]],
    mp6u3l2: [["Exponents: base and power", "الأسس: الأساس والقوة"], ["The order of operations", "ترتيب العمليات"], ["Simplifying numeric expressions", "تبسيط المقادير العددية"], ["Evaluating by substitution", "إيجاد القيمة العددية بالتعويض"]],
    mp6u3l3: [["Evaluating with exponents and parentheses", "الحساب مع الأسس والأقواس"], ["Testing expressions with a balance", "اختبار المقادير بالميزان"], ["Equivalent expressions", "المقادير المتكافئة"], ["Commutative, associative and distributive properties", "خواص الإبدال والدمج والتوزيع"]],
    mp6u4l1: [["Equations as a level balance", "المعادلة ميزان متزن"], ["Inverse operations", "العمليات العكسية"], ["Solving one-step equations", "حل المعادلات ذات الخطوة الواحدة"], ["Checking the solution", "التحقق من الحل"]],
    mp6u4l2: [["Inequalities in signs and limits", "المتباينات في اللافتات والقيود"], ["Many solutions of an inequality", "الحلول الكثيرة للمتباينة"], ["Open and closed circles", "الدائرة المفرغة والمظللة"], ["Testing values", "اختبار القيم"]],
    mp6u5l1: [["Independent and dependent variables", "المتغير المستقل والمتغير التابع"], ["Writing an equation like t = 6r", "كتابة معادلة مثل t = 6r"], ["Using the equation to predict", "استخدام المعادلة للتنبؤ"], ["Which quantity depends on which", "أي كمية تعتمد على الأخرى"]],
    mp6u5l2: [["Input-output rules", "قواعد المدخلات والمخرجات"], ["Rules with two operations", "قواعد بعمليتين"], ["Tables, equations and ordered pairs", "الجداول والمعادلات والأزواج المرتبة"], ["Graphing on the coordinate plane", "التمثيل في المستوى الإحداثي"]],
    mp6u6l1: [["Statistical and non-statistical questions", "الأسئلة الإحصائية وغير الإحصائية"], ["Variability in answers", "التباين في الإجابات"], ["Numerical and categorical data", "البيانات العددية والوصفية"], ["Matching data to a display", "اختيار التمثيل المناسب للبيانات"]],
    mp6u6l2: [["Reading dot plots", "قراءة التمثيل بالنقاط"], ["Histograms vs bar graphs", "المدرج التكراري والتمثيل بالأعمدة"], ["Choosing equal intervals", "اختيار فئات متساوية"], ["Building a histogram from data", "بناء مدرج تكراري من البيانات"]],
    mp6u6l3: [["Finding the median", "إيجاد الوسيط"], ["The five-number summary", "الملخص الخماسي"], ["Reading and drawing a box plot", "قراءة الصندوق ذي العارضتين ورسمه"], ["Choosing the best display", "اختيار أفضل تمثيل"]],
    mp6u7l1: [["Summarizing data with one number", "تلخيص البيانات بعدد واحد"], ["Mean as a balance point", "المتوسط نقطة اتزان"], ["Mean as a fair share", "المتوسط نصيب عادل"], ["mean = sum ÷ count", "المتوسط = المجموع ÷ العدد"]],
    mp6u7l2: [["Mode and median", "المنوال والوسيط"], ["Outliers and their effect", "القيم المتطرفة وأثرها"], ["Mean or median?", "المتوسط أم الوسيط؟"], ["The range as a measure of spread", "المدى مقياسًا للتشتت"]]
  };
  Object.keys(O).forEach(function (k) { OBJ[k] = { en: O[k].map(function (x) { return x[0]; }), ar: O[k].map(function (x) { return A(x[1]); }) }; });

  /* ---------- extra quiz items (order / match / tf) ---------- */
  function X(o) {
    o.q = P(o.q); o.off = P(o.off); o.sto = P(o.sto);
    if (o.items) o.items = o.items.map(P);
    if (o.pairs) o.pairs = o.pairs.map(function (p) { return [P(p[0]), P(p[1])]; });
    return o;
  }
  var EXS = {
    mp6u1l1: [
      { k: "match", q: ["Match each number to a divisibility fact.", "صِل كل عدد بحقيقة عن قابليته للقسمة."], pairs: [[["225", "225"], ["Divisible by 5, not by 2", "يقبل القسمة على 5 لا على 2"]], [["102", "102"], ["Divisible by 6, not by 4", "يقبل القسمة على 6 لا على 4"]], [["100", "100"], ["Divisible by 4 and 10, not by 3", "يقبل القسمة على 4 و10 لا على 3"]], [["101", "101"], ["Not divisible by 2, 3, 4, 5, 6 or 10", "لا يقبل القسمة على 2 أو 3 أو 4 أو 5 أو 6 أو 10"]]],
        off: ["Use the ones digit, the digit sum and the last two digits.", "استخدم رقم الآحاد ومجموع الأرقام وآخر رقمين."], sto: ["Salma checks each city's volunteers at the gate.", "تفحص سلمى متطوعي كل مدينة عند البوابة."] },
      { k: "tf", a: true, q: ["True or false: a number divisible by 2 and by 3 is divisible by 6.", "صواب أم خطأ: العدد الذي يقبل القسمة على 2 و3 يقبل القسمة على 6."],
        off: ["True. 6 = 2 × 3, and 2 and 3 are different primes.", "صواب؛ 6 = 2 × 3، و2 و3 عددان أوليان مختلفان."], sto: ["Pass both gates and you may enter the 6 room.", "اعبر البوابتين فتدخل غرفة الـ6."] }],
    mp6u1l2: [
      { k: "order", q: ["Order the steps to find the GCF and LCM of 12 and 18.", "رتّب خطوات إيجاد ع.م.أ وم.م.أ للعددين 12 و18."], items: [["Factorize: 12 = 2 × 2 × 3, 18 = 2 × 3 × 3", "حلّل: 12 = 2 × 2 × 3 و18 = 2 × 3 × 3"], ["Put the shared 2 and 3 in the overlap", "ضع 2 و3 المشتركين في الجزء المشترك"], ["GCF = product of the overlap = 6", "ع.م.أ = حاصل ضرب الجزء المشترك = 6"], ["LCM = product of all factors = 36", "م.م.أ = حاصل ضرب كل العوامل = 36"]],
        off: ["Factorize, sort into the Venn diagram, then multiply.", "حلّل ثم وزّع في شكل فن ثم اضرب."], sto: ["Omar sorts his prime bricks into two overlapping trays.", "يرتب عمر طوبه الأولي في صينيتين متداخلتين."] },
      { k: "tf", a: false, q: ["True or false: the GCF of two relatively prime numbers is 0.", "صواب أم خطأ: ع.م.أ لعددين أوليين فيما بينهما يساوي 0."],
        off: ["False. It is 1, because 1 divides every number.", "خطأ؛ إنه 1 لأن 1 يقسم كل عدد."], sto: ["Nothing in common except the number 1.", "لا شيء مشترك إلا العدد 1."] }],
    mp6u2l1: [
      { k: "order", q: ["Order from least to greatest.", "رتّب من الأصغر إلى الأكبر."], items: [["−145 (Western Desert)", "−145 (الصحراء الغربية)"], ["−12", "−12"], ["0 (sea level)", "0 (مستوى سطح البحر)"], ["2,875 (Sinai)", "2875 (سيناء)"]],
        off: ["Read the number line from left to right.", "اقرأ خط الأعداد من اليسار إلى اليمين."], sto: ["From the lowest valley to the highest mountain.", "من أخفض منخفض إلى أعلى جبل."] },
      { k: "tf", a: true, q: ["True or false: zero is its own opposite.", "صواب أم خطأ: الصفر معكوس نفسه."],
        off: ["True. 0 is 0 units from 0 on both sides.", "صواب؛ الصفر على بعد 0 من الصفر في الجهتين."], sto: ["Standing on the platform, your mirror is you.", "إذا وقفت على المنصة فمرآتك هي أنت."] }],
    mp6u2l2: [
      { k: "match", q: ["Match each number to its smallest set.", "صِل كل عدد بأصغر مجموعة تحتويه."], pairs: [[["12,892", "12892"], ["Counting numbers", "أعداد العد"]], [["0", "0"], ["Natural numbers", "الأعداد الطبيعية"]], [["−455", "−455"], ["Integers", "الأعداد الصحيحة"]], [["4.9", "4.9"], ["Rational numbers", "الأعداد النسبية"]]],
        off: ["Counting starts at 1, natural numbers add 0, integers add negatives, rational numbers add fractions and decimals.", "أعداد العد تبدأ من 1، والطبيعية تضيف 0، والصحيحة تضيف السالبة، والنسبية تضيف الكسور والأعداد العشرية."], sto: ["Each number lives in the smallest room that fits it.", "كل عدد يسكن أصغر غرفة تناسبه."] },
      { k: "tf", a: false, q: ["True or false: all rational numbers are integers.", "صواب أم خطأ: كل الأعداد النسبية أعداد صحيحة."],
        off: ["False. 0.75 = 3/4 is rational but not an integer.", "خطأ؛ 0.75 = 3/4 عدد نسبي وليس صحيحًا."], sto: ["Half a loaf is a rational amount, but not a whole loaf.", "نصف رغيف كمية نسبية لكنه ليس رغيفًا كاملًا."] }],
    mp6u2l3: [
      { k: "order", q: ["Order the depths from closest to sea level to farthest.", "رتّب الأعماق من الأقرب إلى مستوى سطح البحر إلى الأبعد."], items: [["−6 m", "−6 م"], ["−16 m", "−16 م"], ["−214 m", "−214 م"], ["−430 m", "−430 م"]],
        off: ["Compare absolute values: 6 < 16 < 214 < 430.", "قارن القيم المطلقة: 6 < 16 < 214 < 430."], sto: ["The shortest rope first, the longest last.", "الحبل الأقصر أولًا والأطول أخيرًا."] },
      { k: "tf", a: true, q: ["True or false: absolute values are never negative.", "صواب أم خطأ: القيمة المطلقة لا تكون سالبة أبدًا."],
        off: ["True. A distance is positive or zero. Mouataz is correct.", "صواب؛ المسافة موجبة أو صفر، ومعتز على حق."], sto: ["You can't walk −3 metres.", "لا يمكنك أن تمشي −3 أمتار."] }],
    mp6u3l1: [
      { k: "match", q: ["Match each part of 10x + 20x + 250.", "صِل كل جزء من 10x + 20x + 250."], pairs: [[["10x and 20x", "10x و20x"], ["Like terms", "حدود متشابهة"]], [["10 and 20", "10 و20"], ["Coefficients", "معاملات"]], [["250", "250"], ["Constant", "ثابت"]], [["x", "x"], ["Variable: the number of tokens", "متغير: عدد الفيشات"]]],
        off: ["Coefficients multiply the variable; the constant has no variable.", "المعاملات تُضرب في المتغير، والثابت بلا متغير."], sto: ["Mariam's arcade card: tokens worth 10 and 20, plus 250 tickets.", "بطاقة مريم في صالة الألعاب: فيشات بـ10 و20 و250 تذكرة."] },
      { k: "tf", a: false, q: ["True or false: 'a number less than ten' is x − 10.", "صواب أم خطأ: «عدد أقل من عشرة» هو x − 10."],
        off: ["False. It is 10 − x; 'less than' switches the order.", "خطأ؛ إنه 10 − x، فعبارة «أقل من» تعكس الترتيب."], sto: ["Start with 10 and take the number away.", "ابدأ بـ10 واطرح العدد."] }],
    mp6u3l2: [
      { k: "order", q: ["Put the order of operations from first to last.", "رتّب العمليات من الأولى إلى الأخيرة."], items: [["Parentheses", "الأقواس"], ["Exponents", "الأسس"], ["Multiply or divide, left to right", "الضرب أو القسمة من اليسار إلى اليمين"], ["Add or subtract, left to right", "الجمع أو الطرح من اليسار إلى اليمين"]],
        off: ["This is the order the book asks you to use every time.", "هذا هو الترتيب الذي يطلبه الكتاب في كل مرة."], sto: ["Climb the stairs from the top step down.", "انزل السلم درجة درجة من الأعلى."] },
      { k: "tf", a: false, q: ["True or false: 2³ = 6.", "صواب أم خطأ: 2³ = 6."],
        off: ["False. 2³ = 2 × 2 × 2 = 8.", "خطأ؛ 2³ = 2 × 2 × 2 = 8."], sto: ["The exponent counts the 2s you multiply, not a factor of 3.", "الأس يعدّ مرات ضرب 2 وليس عاملًا هو 3."] }],
    mp6u3l3: [
      { k: "match", q: ["Match each expression to an equivalent one.", "صِل كل مقدار بمقدار يكافئه."], pairs: [[["3(2x + 1)", "3(2x + 1)"], ["6x + 3", "6x + 3"]], [["x + 2x", "x + 2x"], ["3x", "3x"]], [["2(x + 4)", "2(x + 4)"], ["2x + 8", "2x + 8"]], [["4 + x", "4 + x"], ["x + 4", "x + 4"]]],
        off: ["Distributive property, like terms and the commutative property.", "خاصية التوزيع والحدود المتشابهة وخاصية الإبدال."], sto: ["Every pair keeps the scale level for any x.", "كل زوج يُبقي الميزان متزنًا لأي x."] },
      { k: "tf", a: false, q: ["True or false: 2(x + 1) and 2x + x are equivalent because they are equal when x = 2.", "صواب أم خطأ: 2(x + 1) و2x + x متكافئان لأنهما متساويان عندما x = 2."],
        off: ["False. At x = 1 they are 4 and 3. Equivalent means equal for every value.", "خطأ؛ عندما x = 1 يكونان 4 و3، والتكافؤ يعني التساوي لكل القيم."], sto: ["One level moment does not make a level scale.", "لحظة اتزان واحدة لا تجعل الميزان متزنًا."] }],
    mp6u4l1: [
      { k: "order", q: ["Order the steps to solve x + 8 = 17 on a balance.", "رتّب خطوات حل x + 8 = 17 بالميزان."], items: [["Model x + 8 on the left and 17 on the right", "مثّل x + 8 في الكفة اليسرى و17 في اليمنى"], ["Remove 8 units from both pans", "ارفع 8 وحدات من الكفتين"], ["Read the answer: x = 9", "اقرأ الحل: x = 9"], ["Check: 9 + 8 = 17", "تحقق: 9 + 8 = 17"]],
        off: ["Model, use the inverse operation on both sides, solve, check.", "مثّل ثم أجرِ العملية العكسية على الطرفين ثم حل ثم تحقق."], sto: ["Grandma's balance stays level at every step.", "يبقى ميزان الجدة متزنًا في كل خطوة."] },
      { k: "tf", a: true, q: ["True or false: to solve 6x = 18 you divide both sides by 6.", "صواب أم خطأ: لحل 6x = 18 نقسم الطرفين على 6."],
        off: ["True. Division undoes multiplication: x = 3.", "صواب؛ القسمة تلغي الضرب: x = 3."], sto: ["Six equal bags share 18 kilos.", "ستة أكياس متساوية تتقاسم 18 كيلو."] }],
    mp6u4l2: [
      { k: "match", q: ["Match each inequality to its graph.", "صِل كل متباينة بتمثيلها."], pairs: [[["x > −1", "x > −1"], ["Open circle at −1, arrow right", "دائرة مفرغة عند −1 والسهم يمينًا"]], [["x ≥ −1", "x ≥ −1"], ["Closed circle at −1, arrow right", "دائرة مظللة عند −1 والسهم يمينًا"]], [["x < −1", "x < −1"], ["Open circle at −1, arrow left", "دائرة مفرغة عند −1 والسهم يسارًا"]], [["x ≤ −1", "x ≤ −1"], ["Closed circle at −1, arrow left", "دائرة مظللة عند −1 والسهم يسارًا"]]],
        off: ["The symbol decides the circle (open or closed) and the direction.", "الرمز يحدد نوع الدائرة (مفرغة أو مظللة) والاتجاه."], sto: ["Doors open or closed, roads left or right.", "أبواب مفتوحة أو مغلقة، وطرق يمينًا أو يسارًا."] },
      { k: "tf", a: false, q: ["True or false: −2 belongs to the solution set of both x > −2 and x < −2.", "صواب أم خطأ: −2 ينتمي إلى مجموعة حل x > −2 وx < −2 كلتيهما."],
        off: ["False. −2 belongs to neither: both circles are open.", "خطأ؛ −2 لا ينتمي إلى أي منهما، فكلتا الدائرتين مفرغة."], sto: ["The two roads start at −2 but neither includes it.", "الطريقان يبدآن من −2 لكن لا يشمله أي منهما."] }],
    mp6u5l1: [
      { k: "match", q: ["Match each ride to its equation.", "صِل كل لعبة بمعادلتها."], pairs: [[["Ferris Wheel", "العجلة الدوارة"], ["t = 3r", "t = 3r"]], [["Swing", "الأرجوحة"], ["t = 4r", "t = 4r"]], [["Viking", "الفايكنج"], ["t = 5r", "t = 5r"]], [["Rock N Roller", "روك آند رولر"], ["t = 6r", "t = 6r"]]],
        off: ["The coefficient is the number of tickets for one ride.", "المعامل هو عدد تذاكر المرة الواحدة."], sto: ["Each price tag becomes a coefficient.", "كل لافتة سعر تصبح معاملًا."] },
      { k: "tf", a: false, q: ["True or false: in t = 5r, the rides r depend on the tickets t.", "صواب أم خطأ: في t = 5r يعتمد عدد المرات r على التذاكر t."],
        off: ["False. You choose the rides; the tickets depend on them.", "خطأ؛ أنت تختار المرات، والتذاكر تعتمد عليها."], sto: ["The ticket machine follows your choice of rides.", "آلة التذاكر تتبع اختيارك لعدد المرات."] }],
    mp6u5l2: [
      { k: "order", q: ["Order the steps to graph y = 3x + 4.", "رتّب خطوات تمثيل y = 3x + 4."], items: [["Choose inputs x = 0, 1, 2", "اختر المدخلات x = 0، 1، 2"], ["Calculate outputs y = 4, 7, 10", "احسب المخرجات y = 4، 7، 10"], ["Write ordered pairs (0, 4), (1, 7), (2, 10)", "اكتب الأزواج المرتبة (0، 4) و(1، 7) و(2، 10)"], ["Plot them: x across, y up", "مثّلها: x أفقيًا وy رأسيًا"]],
        off: ["Table, ordered pairs, then plot.", "جدول ثم أزواج مرتبة ثم تمثيل."], sto: ["Laila's booth points line up neatly.", "نقاط كشك ليلى تصطف بانتظام."] },
      { k: "tf", a: true, q: ["True or false: one input-output pair is not always enough to find the rule.", "صواب أم خطأ: زوج واحد من المدخلات والمخرجات لا يكفي دائمًا لمعرفة القاعدة."],
        off: ["True. 1 → 7 fits both 'add 6' and 'multiply by 3 and add 4'.", "صواب؛ 1 ← 7 تناسب «أضف 6» و«اضرب في 3 ثم أضف 4»."], sto: ["Ziad needed a second clue.", "احتاج زياد إلى دليل ثانٍ."] }],
    mp6u6l1: [
      { k: "match", q: ["Match each question to its data type.", "صِل كل سؤال بنوع بياناته."], pairs: [[["How many letters are in your classmates' first names?", "كم حرفًا في الأسماء الأولى لزملائك؟"], ["Numerical", "عددية"]], [["What colour eyes do students have?", "ما لون عيون الطلاب؟"], ["Categorical", "وصفية"]], [["How many people are in each family?", "كم فردًا في كل أسرة؟"], ["Numerical (counts)", "عددية (أعداد)"]], [["What types of movies do students like?", "ما أنواع الأفلام التي يحبها الطلاب؟"], ["Categorical (types)", "وصفية (أنواع)"]]],
        off: ["Counts and measures are numerical; names and groups are categorical.", "الأعداد والقياسات عددية، والأسماء والمجموعات وصفية."], sto: ["Diaa sorts the capsule cards into two piles.", "يفرز ضياء بطاقات الكبسولة في كومتين."] },
      { k: "tf", a: false, q: ["True or false: 'What is the name of your school?' is a statistical question.", "صواب أم خطأ: «ما اسم مدرستك؟» سؤال إحصائي."],
        off: ["False. Everyone in the class gives the same single answer.", "خطأ؛ كل طلاب الفصل يعطون الإجابة الوحيدة نفسها."], sto: ["No variability, no statistics.", "لا تباين، إذن لا إحصاء."] }],
    mp6u6l2: [
      { k: "match", q: ["Match the display to what it does best.", "صِل التمثيل بما يفعله أفضل."], pairs: [[["Dot plot", "التمثيل بالنقاط"], ["Shows every single value", "يُظهر كل قيمة مفردة"]], [["Histogram", "المدرج التكراري"], ["Groups many values in equal intervals", "يجمع قيمًا كثيرة في فئات متساوية"]], [["Bar graph", "التمثيل بالأعمدة"], ["Compares categories", "يقارن الفئات الوصفية"]], [["Frequency table", "الجدول التكراري"], ["Lists counts for each interval", "يسرد عدد القيم في كل فئة"]]],
        off: ["Each display has its own job.", "لكل تمثيل وظيفته."], sto: ["Amira picks the right tool for each data set.", "تختار أميرة الأداة المناسبة لكل مجموعة بيانات."] },
      { k: "tf", a: false, q: ["True or false: the intervals of a histogram may have different sizes.", "صواب أم خطأ: يمكن أن تختلف أطوال فئات المدرج التكراري."],
        off: ["False. The intervals must be equal, with no gaps and no overlaps.", "خطأ؛ يجب أن تتساوى الفئات بلا فجوات ولا تداخل."], sto: ["Equal shelves make a fair picture.", "الأرفف المتساوية تعطي صورة عادلة."] }],
    mp6u6l3: [
      { k: "order", q: ["Order the five-number summary from least to greatest.", "رتّب الملخص الخماسي من الأصغر إلى الأكبر."], items: [["Minimum", "أصغر قيمة"], ["Lower quartile Q1", "الربيع الأدنى Q1"], ["Median", "الوسيط"], ["Upper quartile Q3", "الربيع الأعلى Q3"], ["Maximum", "أكبر قيمة"]],
        off: ["For the book example: 0, 2.5, 11, 14, 18.", "في مثال الكتاب: 0 و2.5 و11 و14 و18."], sto: ["Five posts along the box plot from left to right.", "خمسة أعمدة على الصندوق من اليسار إلى اليمين."] },
      { k: "tf", a: true, q: ["True or false: the box of a box plot shows where half of the data is.", "صواب أم خطأ: صندوق الصندوق ذي العارضتين يُظهر مكان نصف البيانات."],
        off: ["True. From Q1 to Q3 lies the middle half.", "صواب؛ من Q1 إلى Q3 يقع النصف الأوسط."], sto: ["Half the team is inside the box.", "نصف الفريق داخل الصندوق."] }],
    mp6u7l1: [
      { k: "order", q: ["Order the steps to find the mean of 32, 34, 36, 38, 40.", "رتّب خطوات إيجاد متوسط 32، 34، 36، 38، 40."], items: [["Add the values: 180", "اجمع القيم: 180"], ["Count the values: 5", "عُدّ القيم: 5"], ["Divide: 180 ÷ 5", "اقسم: 180 ÷ 5"], ["Mean = 36", "المتوسط = 36"]],
        off: ["Sum, count, divide.", "اجمع ثم عُدّ ثم اقسم."], sto: ["Saeed's shortcut without counters.", "طريقة سعيد المختصرة بلا عدادات."] },
      { k: "tf", a: true, q: ["True or false: the mean is the fair share when a total is shared equally.", "صواب أم خطأ: المتوسط هو النصيب العادل عند توزيع المجموع بالتساوي."],
        off: ["True. 42 pencils among 6 students is 7 each, the mean.", "صواب؛ 42 قلمًا على 6 طلاب تعطي 7 لكل طالب، وهو المتوسط."], sto: ["Level the towers and read the height.", "سوِّ الأبراج واقرأ الارتفاع."] }],
    mp6u7l2: [
      { k: "match", q: ["Match for the data 0, 0, 1, 1, 1, 1, 2, 2, 2, 9.", "صِل للبيانات 0، 0، 1، 1، 1، 1، 2، 2، 2، 9."], pairs: [[["Mode", "المنوال"], ["1", "1"]], [["Mean", "المتوسط"], ["1.9", "1.9"]], [["Range", "المدى"], ["9", "9"]], [["Outlier", "القيمة المتطرفة"], ["The value 9", "القيمة 9"]]],
        off: ["Mode 1 (4 times), mean 19 ÷ 10 = 1.9, range 9 − 0 = 9.", "المنوال 1 (4 مرات)، والمتوسط 19 ÷ 10 = 1.9، والمدى 9 − 0 = 9."], sto: ["Rami's siblings survey.", "استطلاع رامي عن الإخوة."] },
      { k: "tf", a: false, q: ["True or false: an outlier changes the median much more than the mean.", "صواب أم خطأ: القيمة المتطرفة تغيّر الوسيط أكثر بكثير من المتوسط."],
        off: ["False. It is the other way round: the mean moves, the median hardly does.", "خطأ؛ العكس هو الصحيح: المتوسط يتحرك والوسيط لا يكاد يتحرك."], sto: ["One giant on the seesaw tips the mean.", "عملاق واحد على الأرجوحة يميل بالمتوسط."] }]
  };
  Object.keys(EXS).forEach(function (k) { EX[k] = EXS[k].map(X); });

  /* ---------- tappable diagrams (viewBox 0 0 400 240) ---------- */
  var ink = 'style="fill:var(--ink)"', mut = 'style="fill:var(--muted)"';
  function tx(x, y, s, extra, size) { return '<text x="' + x + '" y="' + y + '" ' + (extra || ink) + ' font-size="' + (size || 13) + '" font-weight="800" text-anchor="middle" font-family="Nunito,Cairo,sans-serif">' + s + "</text>"; }
  function ci(x, y, r, f, st) { return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + f + '"' + (st ? ' stroke="' + st + '" stroke-width="2.5"' : "") + "/>"; }
  function ln(x1, y1, x2, y2, c, w) { return '<path d="M' + x1 + " " + y1 + " L" + x2 + " " + y2 + '" stroke="' + (c || "var(--muted)") + '" stroke-width="' + (w || 2) + '" fill="none"/>'; }
  function rc(x, y, w, h, f, r) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (r == null ? 6 : r) + '" fill="' + f + '"/>'; }
  function g(s) { return '<g direction="ltr">' + s + "</g>"; }
  function arw(id, col) { return '<defs><marker id="' + id + '" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="' + col + '"/></marker></defs>'; }
  function nl(y, x0, x1, a, b, step, lab) { // number line from value a to b
    var s = ln(x0 - 8, y, x1 + 8, y, "var(--ink)", 2), sc = (x1 - x0) / (b - a);
    for (var v = a; v <= b; v += step) { var x = x0 + (v - a) * sc; s += ln(x, y - 5, x, y + 5, "var(--ink)", 1.5); if (lab) s += tx(x, y + 19, v < 0 ? "−" + Math.abs(v) : String(v), mut, 10); }
    return s;
  }
  function X1(a, b, x0, x1) { return function (v) { return x0 + (v - a) * (x1 - x0) / (b - a); }; }
  function S(spots) { return spots.map(function (s) { return [s[0], s[1], P(s[2]), P(s[3])]; }); }

  D.mp6u1l1 = { title: ["Factor tree of 40 and divisibility", "شجرة عوامل 40 وقابلية القسمة"],
    svg: function () {
      var s = ln(110, 40, 70, 95) + ln(110, 40, 150, 95) + ln(70, 105, 45, 160) + ln(70, 105, 95, 160) + ln(150, 105, 130, 160) + ln(150, 105, 175, 160);
      s += ci(110, 32, 18, "#bfdbfe") + tx(110, 37, "40", 'style="fill:#0f172a"', 14) + ci(70, 100, 16, "#bfdbfe") + tx(70, 105, "4", 'style="fill:#0f172a"') + ci(150, 100, 16, "#bfdbfe") + tx(150, 105, "10", 'style="fill:#0f172a"');
      [[45, "2"], [95, "2"], [130, "2"], [175, "5"]].forEach(function (p) { s += ci(p[0], 168, 15, "#fde68a", "#f59e0b") + tx(p[0], 173, p[1], 'style="fill:#0f172a"'); });
      s += tx(110, 215, "40 = 2 × 2 × 2 × 5 = 2³ × 5", ink, 14);
      [["2", "#bbf7d0", 1], ["3", "#fecaca", 0], ["4", "#bbf7d0", 1], ["5", "#bbf7d0", 1], ["6", "#fecaca", 0], ["10", "#bbf7d0", 1]].forEach(function (d, i) {
        var x = 245 + (i % 3) * 50, y = 50 + Math.floor(i / 3) * 60; s += rc(x - 20, y - 20, 40, 40, d[1], 10) + tx(x, y - 2, "÷" + d[0], 'style="fill:#0f172a"', 13) + tx(x, y + 14, d[2] ? "✓" : "✗", 'style="fill:#0f172a"', 12);
      });
      s += tx(295, 190, t("Is 40 divisible by...?", "هل 40 يقبل القسمة على...؟"), mut, 12);
      return g(s);
    },
    spots: S([[110, 32, ["The number", "العدد"], ["Start with 40 and split it into two factors: 4 × 10.", "ابدأ بالعدد 40 وقسّمه إلى عاملين: 4 × 10."]],
      [70, 100, ["Not prime yet", "ليس أوليًا بعد"], ["4 = 2 × 2, so keep splitting.", "4 = 2 × 2، فاستمر في التفريع."]],
      [110, 168, ["Prime leaves", "الأوراق الأولية"], ["Every branch ends in a prime: 2, 2, 2, 5.", "كل فرع ينتهي بعدد أولي: 2، 2، 2، 5."]],
      [110, 214, ["Prime factorization", "التحليل إلى العوامل الأولية"], ["40 = 2³ × 5: the exponent 3 counts the three 2s.", "40 = 2³ × 5: الأس 3 يعدّ العوامل 2 الثلاثة."]],
      [245, 50, ["Divisible by 2", "يقبل القسمة على 2"], ["The ones digit 0 is even.", "رقم الآحاد 0 زوجي."]],
      [295, 50, ["Not divisible by 3", "لا يقبل القسمة على 3"], ["4 + 0 = 4, and 4 is not divisible by 3. So 40 is not divisible by 6 either.", "4 + 0 = 4، و4 لا يقبل القسمة على 3، إذن 40 لا يقبل القسمة على 6 أيضًا."]]]) };

  D.mp6u1l2 = { title: ["Venn diagram of 12 and 18", "شكل فن للعددين 12 و18"],
    svg: function () {
      var s = '<circle cx="155" cy="115" r="85" fill="#60a5fa" fill-opacity=".25" stroke="#2563eb" stroke-width="2"/><circle cx="245" cy="115" r="85" fill="#f472b6" fill-opacity=".25" stroke="#db2777" stroke-width="2"/>';
      s += tx(120, 30, "12", ink, 15) + tx(280, 30, "18", ink, 15);
      s += ci(115, 115, 16, "#fde68a") + tx(115, 120, "2", 'style="fill:#0f172a"') + ci(200, 95, 16, "#fde68a") + tx(200, 100, "2", 'style="fill:#0f172a"') + ci(200, 140, 16, "#fde68a") + tx(200, 145, "3", 'style="fill:#0f172a"') + ci(285, 115, 16, "#fde68a") + tx(285, 120, "3", 'style="fill:#0f172a"');
      s += tx(200, 222, "GCF = 2 × 3 = 6     LCM = 2 × 2 × 3 × 3 = 36", ink, 13);
      return g(s);
    },
    spots: S([[115, 115, ["Only in 12", "في 12 فقط"], ["12 = 2 × 2 × 3: one 2 is not shared with 18.", "12 = 2 × 2 × 3: أحد العاملين 2 غير مشترك مع 18."]],
      [200, 118, ["The overlap", "الجزء المشترك"], ["2 and 3 are factors of both numbers.", "2 و3 عاملان للعددين كليهما."]],
      [285, 115, ["Only in 18", "في 18 فقط"], ["18 = 2 × 3 × 3: one 3 belongs only to 18.", "18 = 2 × 3 × 3: أحد العاملين 3 خاص بالعدد 18."]],
      [110, 214, ["GCF", "ع.م.أ"], ["Multiply the overlap: 2 × 3 = 6. 12 and 18 can be written 6(2 + 3).", "اضرب الجزء المشترك: 2 × 3 = 6، ويمكن كتابة 12 + 18 = 6(2 + 3)."]],
      [300, 214, ["LCM", "م.م.أ"], ["Multiply everything in the diagram once: 36.", "اضرب كل ما في الشكل مرة واحدة: 36."]]]) };

  D.mp6u2l1 = { title: ["Opposites on a number line", "الأعداد المتعاكسة على خط الأعداد"],
    svg: function () {
      var f = X1(-10, 10, 30, 370), s = nl(130, 30, 370, -10, 10, 1, false);
      [-10, -5, 0, 5, 10].forEach(function (v) { s += tx(f(v), 152, v < 0 ? "−" + (-v) : String(v), mut, 11); });
      s += arw("ma", "#16a34a") + arw("mb", "#dc2626");
      s += '<path d="M' + f(0) + ' 112 Q ' + f(2.5) + ' 70 ' + f(5) + ' 118" stroke="#16a34a" stroke-width="2.5" fill="none" marker-end="url(#ma)"/>';
      s += '<path d="M' + f(0) + ' 112 Q ' + f(-2.5) + ' 70 ' + f(-5) + ' 118" stroke="#dc2626" stroke-width="2.5" fill="none" marker-end="url(#mb)"/>';
      s += ci(f(5), 130, 7, "#16a34a") + ci(f(-5), 130, 7, "#dc2626") + ci(f(0), 130, 7, "#64748b");
      s += tx(f(2.5), 64, t("5 units", "5 وحدات"), 'style="fill:#16a34a"', 11) + tx(f(-2.5), 64, t("5 units", "5 وحدات"), 'style="fill:#dc2626"', 11);
      s += ci(f(-8), 190, 6, "#7c3aed") + ci(f(-3), 190, 6, "#7c3aed") + tx(f(-5.5), 215, "−8 < −3", ink, 13);
      s += tx(f(6), 205, t("right = greater", "اليمين = الأكبر"), mut, 12);
      return g(s);
    },
    spots: S([[200, 130, ["Zero", "الصفر"], ["Sea level, the climbing platform: neither positive nor negative. Zero is its own opposite.", "مستوى سطح البحر أو منصة التسلق: ليس موجبًا ولا سالبًا، والصفر معكوس نفسه."]],
      [285, 130, ["Positive 5", "الموجب 5"], ["5 units to the right of 0.", "على بعد 5 وحدات يمين الصفر."]],
      [115, 130, ["Negative 5", "السالب 5"], ["5 units to the left of 0: the opposite of 5.", "على بعد 5 وحدات يسار الصفر: معكوس 5."]],
      [200, 62, ["Same distance", "البعد نفسه"], ["Opposites are the same distance from 0, on opposite sides.", "المتعاكسان على البعد نفسه من الصفر في جهتين متضادتين."]],
      [105, 200, ["Comparing negatives", "مقارنة الأعداد السالبة"], ["−3 is to the right of −8, so −3 > −8.", "−3 يقع يمين −8، إذن −3 > −8."]]]) };

  D.mp6u2l2 = { title: ["Sets of numbers", "مجموعات الأعداد"],
    svg: function () {
      var s = rc(10, 10, 380, 220, "#fde68a", 18) + rc(30, 40, 290, 180, "#bbf7d0", 16) + rc(50, 70, 200, 140, "#bfdbfe", 14) + rc(70, 100, 120, 100, "#fbcfe8", 12);
      s += tx(330, 30, t("Rational", "النسبية"), 'style="fill:#0f172a"', 13) + tx(270, 60, t("Integers", "الصحيحة"), 'style="fill:#0f172a"', 13) + tx(215, 90, t("Natural", "الطبيعية"), 'style="fill:#0f172a"', 12) + tx(130, 120, t("Counting", "العد"), 'style="fill:#0f172a"', 12);
      s += tx(130, 160, "1, 2, 3", 'style="fill:#0f172a"', 13) + tx(220, 160, "0", 'style="fill:#0f172a"', 15) + tx(285, 160, "−11", 'style="fill:#0f172a"', 13) + tx(355, 160, "4.9", 'style="fill:#0f172a"', 13) + tx(355, 195, "3/4", 'style="fill:#0f172a"', 13);
      return g(s);
    },
    spots: S([[130, 175, ["Counting numbers", "أعداد العد"], ["1, 2, 3, ... the numbers we count with.", "1، 2، 3، ... الأعداد التي نعدّ بها."]],
      [220, 175, ["Natural numbers", "الأعداد الطبيعية"], ["Counting numbers plus 0: 0, 1, 2, 3, ...", "أعداد العد مع الصفر: 0، 1، 2، 3، ..."]],
      [285, 178, ["Integers", "الأعداد الصحيحة"], ["Natural numbers and their opposites: ..., −2, −1, 0, 1, 2, ...", "الأعداد الطبيعية ومعكوساتها: ...، −2، −1، 0، 1، 2، ..."]],
      [355, 178, ["Rational numbers", "الأعداد النسبية"], ["Any number a/b with integers a, b and b ≠ 0, like 4.9 = 49/10 and 3/4.", "أي عدد a/b حيث a وb صحيحان وb ≠ 0، مثل 4.9 = 49/10 و3/4."]],
      [60, 25, ["Subsets", "المجموعات الجزئية"], ["Each set lies inside the next, so 2 is counting, natural, integer and rational.", "كل مجموعة داخل التي تليها، فالعدد 2 عدد عد وطبيعي وصحيح ونسبي."]]]) };

  D.mp6u2l3 = { title: ["Absolute value: distance from zero", "القيمة المطلقة: البعد عن الصفر"],
    svg: function () {
      var s = rc(20, 120, 360, 110, "#93c5fd", 0) + ln(20, 120, 380, 120, "#2563eb", 3) + tx(355, 112, t("0 water", "0 الماء"), 'style="fill:#2563eb"', 11);
      s += ln(60, 20, 60, 230, "var(--ink)", 2);
      for (var v = -4; v <= 4; v++) s += ln(54, 120 - v * 24, 66, 120 - v * 24, "var(--ink)", 1.5) + tx(40, 124 - v * 24, v < 0 ? "−" + (-v) : String(v), mut, 10);
      s += '<ellipse cx="150" cy="24" rx="20" ry="10" fill="#f97316"/>' + '<ellipse cx="260" cy="216" rx="20" ry="10" fill="#f97316"/>';
      s += ln(185, 24, 185, 120, "#16a34a", 4) + ln(225, 120, 225, 216, "#dc2626", 4);
      s += tx(198, 74, "4", 'style="fill:#16a34a"', 14) + tx(238, 172, "4", 'style="fill:#dc2626"', 14);
      s += tx(300, 60, "|4| = 4", ink, 14) + tx(310, 180, "|−4| = 4", 'style="fill:#0f172a"', 14);
      return g(s);
    },
    spots: S([[150, 24, ["Jump of 4 m", "قفزة 4 م"], ["Position +4, absolute value 4.", "الموقع +4 والقيمة المطلقة 4."]],
      [260, 216, ["Dive of 4 m", "غطسة 4 م"], ["Position −4, absolute value also 4.", "الموقع −4 والقيمة المطلقة 4 أيضًا."]],
      [355, 112, ["Water level = 0", "مستوى الماء = 0"], ["Distances are measured from zero.", "تُقاس المسافات من الصفر."]],
      [190, 74, ["Distance bar", "شريط المسافة"], ["Absolute value is a length, so it is never negative.", "القيمة المطلقة طول، فلا تكون سالبة أبدًا."]],
      [40, 220, ["Number vs distance", "العدد والمسافة"], ["−4 < 4, but |−4| = |4|: opposites have equal absolute values.", "−4 < 4 لكن |−4| = |4|: المتعاكسان لهما القيمة المطلقة نفسها."]]]) };

  D.mp6u3l1 = { title: ["Parts of an algebraic expression", "أجزاء المقدار الجبري"],
    svg: function () {
      var s = tx(200, 120, "4n  +  2n  +  2", ink, 34);
      s += '<path d="M100 135 Q 100 150 160 150 Q 220 150 220 135" stroke="#f97316" stroke-width="2.5" fill="none"/>' + tx(160, 170, t("like terms", "حدان متشابهان"), 'style="fill:#f97316"', 12);
      s += ln(100, 85, 85, 55, "#2563eb") + tx(80, 45, t("coefficient", "معامل"), 'style="fill:#2563eb"', 12);
      s += ln(118, 85, 150, 55, "#16a34a") + tx(160, 45, t("variable", "متغير"), 'style="fill:#16a34a"', 12);
      s += ln(298, 98, 320, 60, "#7c3aed") + tx(330, 50, t("constant", "ثابت"), 'style="fill:#7c3aed"', 12);
      s += tx(200, 215, "= 6n + 2", ink, 22);
      return g(s);
    },
    spots: S([[94, 118, ["Coefficient 4", "المعامل 4"], ["The number multiplying the variable n.", "العدد المضروب في المتغير n."]],
      [150, 50, ["Variable n", "المتغير n"], ["A letter for a number that can change.", "حرف يرمز إلى عدد يمكن أن يتغير."]],
      [160, 165, ["Like terms", "الحدود المتشابهة"], ["4n and 2n have the same variable, so they can be added.", "4n و2n لهما المتغير نفسه، فيمكن جمعهما."]],
      [298, 118, ["Constant", "الثابت"], ["2 has no variable; its value never changes.", "2 بلا متغير وقيمته لا تتغير."]],
      [200, 210, ["Simplified", "المقدار المبسط"], ["Combine like terms: 4n + 2n = 6n, so 6n + 2 has 2 terms.", "اجمع الحدود المتشابهة: 4n + 2n = 6n، فالمقدار 6n + 2 فيه حدان."]]]) };

  D.mp6u3l2 = { title: ["The order of operations ladder", "سلم ترتيب العمليات"],
    svg: function () {
      var st = [["( )", t("Parentheses", "الأقواس"), "#fecaca"], ["x²", t("Exponents", "الأسس"), "#fde68a"], ["× ÷", t("Multiply / divide, left → right", "ضرب / قسمة، من اليسار"), "#bbf7d0"], ["+ −", t("Add / subtract, left → right", "جمع / طرح، من اليسار"), "#bfdbfe"]];
      var s = "";
      st.forEach(function (r, i) { var x = 20 + i * 30, y = 20 + i * 52; s += rc(x, y, 250, 44, r[2], 10) + tx(x + 30, y + 28, r[0], 'style="fill:#0f172a"', 16) + tx(x + 150, y + 27, r[1], 'style="fill:#0f172a"', 12); });
      s += tx(330, 60, "36 − 19 + 4 ÷ 2", ink, 12) + tx(330, 85, "= 36 − 19 + 2", mut, 12) + tx(330, 110, "= 17 + 2", mut, 12) + tx(330, 135, "= 19", ink, 14);
      return g(s);
    },
    spots: S([[50, 42, ["1. Parentheses", "1. الأقواس"], ["Work inside brackets first: 2(6 − 2) → 2(4).", "احسب ما داخل الأقواس أولًا: 2(6 − 2) ← 2(4)."]],
      [80, 94, ["2. Exponents", "2. الأسس"], ["2³ = 8, 10² = 100.", "2³ = 8 و10² = 100."]],
      [110, 146, ["3. Multiply and divide", "3. الضرب والقسمة"], ["Whichever comes first from the left.", "أيهما يأتي أولًا من اليسار."]],
      [140, 198, ["4. Add and subtract", "4. الجمع والطرح"], ["Last, from left to right.", "في النهاية، من اليسار إلى اليمين."]],
      [330, 98, ["Worked example", "مثال محلول"], ["Divide 4 ÷ 2 first, then 36 − 19 = 17, then 17 + 2 = 19.", "اقسم 4 ÷ 2 أولًا، ثم 36 − 19 = 17، ثم 17 + 2 = 19."]]]) };

  function scale(s, tilt, L1, R1) {
    var cx = 200, cy = 80, a = tilt * Math.PI / 180, dx = 120 * Math.cos(a), dy = 120 * Math.sin(a);
    s += ln(cx, cy, cx, 210, "var(--ink)", 4) + '<path d="M160 215 L240 215 L200 195 Z" fill="var(--muted)"/>';
    s += ln(cx - dx, cy - dy, cx + dx, cy + dy, "var(--ink)", 4);
    [[cx - dx, cy - dy, L1], [cx + dx, cy + dy, R1]].forEach(function (p) { s += ln(p[0], p[1], p[0] - 40, p[1] + 50, "var(--muted)", 1.5) + ln(p[0], p[1], p[0] + 40, p[1] + 50, "var(--muted)", 1.5) + rc(p[0] - 50, p[1] + 50, 100, 8, "var(--muted)", 4) + tx(p[0], p[1] + 42, p[2], ink, 14); });
    return s;
  }
  D.mp6u3l3 = { title: ["Keep it level: equivalent expressions", "حافظ على الاتزان: المقادير المتكافئة"],
    svg: function () { return g(scale("", 0, "3(2x + 1)", "6x + 3") + tx(200, 236, "x = 1: 9 = 9   x = 4: 27 = 27", mut, 12) + tx(200, 22, t("level for every x", "متزن لكل قيم x"), 'style="fill:#16a34a"', 13)); },
    spots: S([[80, 120, ["3(2x + 1)", "3(2x + 1)"], ["Three groups of (2x + 1).", "ثلاث مجموعات من (2x + 1)."]],
      [320, 120, ["6x + 3", "6x + 3"], ["The distributed form: 3 × 2x + 3 × 1.", "الصورة الموزعة: 3 × 2x + 3 × 1."]],
      [200, 70, ["Level beam", "العارضة الأفقية"], ["Equal values keep the beam level.", "القيم المتساوية تُبقي العارضة أفقية."]],
      [200, 232, ["Testing values", "اختبار القيم"], ["Try several values of x. If one test tips the scale, they are not equivalent.", "جرّب قيمًا كثيرة لـx، وإذا مال الميزان في اختبار واحد فهما غير متكافئين."]],
      [200, 22, ["Equivalent", "متكافئان"], ["Equal for every value of x: the distributive property guarantees it.", "متساويان لكل قيم x، وخاصية التوزيع تضمن ذلك."]]]) };

  D.mp6u4l1 = { title: ["Solving x + 8 = 17 on a pan balance", "حل x + 8 = 17 بالميزان ذي الكفتين"],
    svg: function () { return g(scale("", 0, "x + 8", "17") + tx(200, 22, "x + 8 − 8 = 17 − 8  →  x = 9", ink, 14) + tx(200, 236, t("check: 9 + 8 = 17 ✓", "التحقق: 9 + 8 = 17 ✓"), 'style="fill:#16a34a"', 12)); },
    spots: S([[80, 120, ["Left pan: x + 8", "الكفة اليسرى: x + 8"], ["An unknown bag x and 8 unit cubes.", "كيس مجهول x و8 مكعبات وحدة."]],
      [320, 120, ["Right pan: 17", "الكفة اليمنى: 17"], ["17 unit cubes.", "17 مكعب وحدة."]],
      [200, 70, ["Level means equal", "الاتزان يعني التساوي"], ["The equation x + 8 = 17 is true for the hidden value.", "المعادلة x + 8 = 17 صحيحة للقيمة المخفية."]],
      [200, 22, ["Inverse operation", "العملية العكسية"], ["Subtract 8 from both pans so it stays level: x = 9.", "اطرح 8 من الكفتين ليبقى الميزان متزنًا: x = 9."]],
      [200, 232, ["Check", "التحقق"], ["Put 9 back in: 9 + 8 = 17.", "عوّض بالعدد 9: 9 + 8 = 17."]]]) };

  D.mp6u4l2 = { title: ["Graphing inequalities", "تمثيل المتباينات"],
    svg: function () {
      var f = X1(-10, 10, 30, 370), s = arw("ia", "#2563eb") + arw("ib", "#dc2626");
      s += tx(200, 30, "x > −1", 'style="fill:#2563eb"', 15) + nl(70, 30, 370, -10, 10, 1, false);
      [-10, -6, -1, 0, 5, 10].forEach(function (v) { s += tx(f(v), 92, v < 0 ? "−" + (-v) : String(v), mut, 10); });
      s += ln(f(-1) + 8, 70, 375, 70, "#2563eb", 5).replace("/>", ' marker-end="url(#ia)"/>') + ci(f(-1), 70, 7, "var(--card)", "#2563eb");
      s += tx(200, 140, "x ≤ −6", 'style="fill:#dc2626"', 15) + nl(180, 30, 370, -10, 10, 1, false);
      [-10, -6, -1, 0, 5, 10].forEach(function (v) { s += tx(f(v), 202, v < 0 ? "−" + (-v) : String(v), mut, 10); });
      s += ln(f(-6), 180, 25, 180, "#dc2626", 5).replace("/>", ' marker-end="url(#ib)"/>') + ci(f(-6), 180, 7, "#dc2626", "#dc2626");
      return g(s);
    },
    spots: S([[f0(-1), 70, ["Open circle", "دائرة مفرغة"], ["−1 is NOT a solution of x > −1.", "−1 ليس حلًا للمتباينة x > −1."]],
      [330, 55, ["Arrow to the right", "سهم إلى اليمين"], ["All numbers greater than −1: 0, 2.5, 10, ...", "كل الأعداد الأكبر من −1: 0، 2.5، 10، ..."]],
      [f0(-6), 180, ["Closed circle", "دائرة مظللة"], ["−6 IS a solution of x ≤ −6.", "−6 حل للمتباينة x ≤ −6."]],
      [60, 165, ["Arrow to the left", "سهم إلى اليسار"], ["All numbers less than or equal to −6.", "كل الأعداد الأصغر من أو تساوي −6."]],
      [200, 125, ["Many solutions", "حلول كثيرة"], ["An inequality has infinitely many solutions; the graph shows them all.", "للمتباينة عدد لا نهائي من الحلول، والتمثيل يُظهرها كلها."]]]) };
  function f0(v) { return 30 + (v + 10) * 17; }

  D.mp6u5l1 = { title: ["Rides and tickets: t = 6r", "المرات والتذاكر: t = 6r"],
    svg: function () {
      var s = rc(20, 70, 110, 70, "#bfdbfe", 12) + tx(75, 98, t("rides r", "المرات r"), 'style="fill:#0f172a"', 14) + tx(75, 122, t("independent", "مستقل"), 'style="fill:#1e3a8a"', 11);
      s += rc(270, 70, 110, 70, "#fbcfe8", 12) + tx(325, 98, t("tickets t", "التذاكر t"), 'style="fill:#0f172a"', 14) + tx(325, 122, t("dependent", "تابع"), 'style="fill:#831843"', 11);
      s += arw("ra", "var(--ink)") + ln(135, 105, 262, 105, "var(--ink)", 3).replace("/>", ' marker-end="url(#ra)"/>') + tx(200, 95, "× 6", ink, 16);
      var rows = [[1, 6], [2, 12], [5, 30], [8, 48]];
      s += rc(110, 160, 180, 72, "var(--card)", 8) + tx(150, 176, "r", ink, 12) + tx(250, 176, "t", ink, 12);
      rows.forEach(function (r, i) { s += tx(125 + i * 45, 198, String(r[0]), mut, 12) + tx(125 + i * 45, 222, String(r[1]), ink, 12); });
      s += tx(200, 40, "t = 6r", ink, 20);
      return g(s);
    },
    spots: S([[75, 105, ["Independent variable", "المتغير المستقل"], ["You choose how many rides: r can be any value.", "أنت تختار عدد المرات: r يأخذ أي قيمة."]],
      [325, 105, ["Dependent variable", "المتغير التابع"], ["The tickets depend on the rides.", "التذاكر تعتمد على عدد المرات."]],
      [200, 95, ["The rule", "القاعدة"], ["Each ride costs 6 tickets, so multiply by 6.", "كل مرة بـ6 تذاكر، فنضرب في 6."]],
      [260, 210, ["Using the equation", "استخدام المعادلة"], ["8 rides: t = 6 × 8 = 48 tickets.", "8 مرات: t = 6 × 8 = 48 تذكرة."]],
      [200, 40, ["Equation", "المعادلة"], ["t = 6r links the two variables.", "t = 6r تربط المتغيرين."]]]) };

  D.mp6u5l2 = { title: ["Graph of y = 3x + 4", "تمثيل y = 3x + 4"],
    svg: function () {
      var ox = 60, oy = 215, sx = 60, sy = 12, s = ln(ox, oy, 380, oy, "var(--ink)", 2) + ln(ox, oy, ox, 15, "var(--ink)", 2);
      for (var i = 1; i <= 5; i++) s += ln(ox + i * sx, oy - 4, ox + i * sx, oy + 4, "var(--ink)") + tx(ox + i * sx, oy + 18, String(i), mut, 10);
      for (var j = 4; j <= 16; j += 4) s += ln(ox - 4, oy - j * sy, ox + 4, oy - j * sy, "var(--ink)") + tx(ox - 16, oy - j * sy + 4, String(j), mut, 10);
      s += ln(ox, oy - 4 * sy, ox + 4 * sx, oy - 16 * sy, "#f97316", 2);
      [[0, 4], [1, 7], [2, 10], [3, 13], [4, 16]].forEach(function (p) { s += ci(ox + p[0] * sx, oy - p[1] * sy, 6, "#2563eb"); });
      s += tx(370, 205, "x", ink, 14) + tx(48, 22, "y", ink, 14) + tx(300, 60, "y = 3x + 4", 'style="fill:#f97316"', 15);
      return g(s);
    },
    spots: S([[220, 222, ["x-axis (independent)", "محور السينات (المستقل)"], ["Inputs go across.", "المدخلات أفقية."]],
      [40, 100, ["y-axis (dependent)", "محور الصادات (التابع)"], ["Outputs go up.", "المخرجات رأسية."]],
      [120, 131, ["Ordered pair (1, 7)", "الزوج المرتب (1، 7)"], ["Input 1, output 3 × 1 + 4 = 7.", "المدخل 1 والمخرج 3 × 1 + 4 = 7."]],
      [60, 167, ["Start at (0, 4)", "البداية عند (0، 4)"], ["When x = 0, y = 4: the + 4 of the rule.", "عندما x = 0 يكون y = 4، وهو + 4 في القاعدة."]],
      [300, 60, ["Straight line", "خط مستقيم"], ["Each step of 1 across goes 3 up: the × 3.", "كل خطوة أفقية بمقدار 1 تصعد 3، وهو × 3."]]]) };

  D.mp6u6l1 = { title: ["Kinds of questions and data", "أنواع الأسئلة والبيانات"],
    svg: function () {
      var s = rc(15, 15, 180, 100, "#bbf7d0", 12) + rc(205, 15, 180, 100, "#fecaca", 12) + rc(15, 130, 180, 95, "#bfdbfe", 12) + rc(205, 130, 180, 95, "#fde68a", 12);
      s += tx(105, 38, t("Statistical", "إحصائي"), 'style="fill:#0f172a"', 14) + tx(105, 62, t("many answers", "إجابات كثيرة"), 'style="fill:#166534"', 11) + tx(105, 90, "•  •• ••• •", 'style="fill:#166534"', 14);
      s += tx(295, 38, t("Not statistical", "غير إحصائي"), 'style="fill:#0f172a"', 14) + tx(295, 62, t("one answer", "إجابة واحدة"), 'style="fill:#991b1b"', 11) + tx(295, 92, "32", 'style="fill:#991b1b"', 18);
      s += tx(105, 155, t("Numerical", "عددية"), 'style="fill:#0f172a"', 14) + tx(105, 180, "0, 1, 2, 3 ...", 'style="fill:#1e3a8a"', 12) + tx(105, 205, t("dot plot, histogram", "نقاط، مدرج تكراري"), 'style="fill:#1e3a8a"', 11);
      s += tx(295, 155, t("Categorical", "وصفية"), 'style="fill:#0f172a"', 14) + tx(295, 180, t("red, blue, green", "أحمر، أزرق، أخضر"), 'style="fill:#854d0e"', 12) + tx(295, 205, t("bar graph", "أعمدة"), 'style="fill:#854d0e"', 11);
      return g(s);
    },
    spots: S([[105, 65, ["Statistical question", "سؤال إحصائي"], ["'How many siblings do the students have?' Many different answers.", "«كم أخًا لكل طالب؟» إجابات مختلفة كثيرة."]],
      [295, 65, ["Not statistical", "غير إحصائي"], ["'How many students are in the class?' One answer only.", "«كم عدد طلاب الفصل؟» إجابة واحدة فقط."]],
      [105, 180, ["Numerical data", "بيانات عددية"], ["Counts or measurements: pets, scores, heights.", "أعداد أو قياسات: حيوانات أليفة، درجات، أطوال."]],
      [295, 180, ["Categorical data", "بيانات وصفية"], ["Names or groups: colours, TV shows, movie types.", "أسماء أو مجموعات: ألوان، برامج، أنواع أفلام."]],
      [200, 122, ["Variability", "التباين"], ["Statistical questions expect the answers to vary.", "الأسئلة الإحصائية تتوقع اختلاف الإجابات."]]]) };

  D.mp6u6l2 = { title: ["Histogram and bar graph", "المدرج التكراري والتمثيل بالأعمدة"],
    svg: function () {
      var s = ln(20, 200, 190, 200, "var(--ink)") + ln(20, 200, 20, 30, "var(--ink)"), h = [2, 5, 8, 6, 3];
      h.forEach(function (v, i) { s += rc(22 + i * 33, 200 - v * 18, 33, v * 18, "#60a5fa", 0) + '<rect x="' + (22 + i * 33) + '" y="' + (200 - v * 18) + '" width="33" height="' + v * 18 + '" fill="none" stroke="#1e3a8a"/>'; });
      ["0", "30", "60", "90", "120", "150"].forEach(function (l, i) { s += tx(22 + i * 33, 216, l, mut, 9); });
      s += tx(105, 236, t("songs (intervals)", "الأغاني (فئات)"), mut, 11);
      s += ln(215, 200, 385, 200, "var(--ink)") + ln(215, 200, 215, 30, "var(--ink)");
      [[5, "A"], [8, "B"], [3, "C"], [6, "D"]].forEach(function (b, i) { s += rc(228 + i * 40, 200 - b[0] * 18, 26, b[0] * 18, "#f472b6", 3) + tx(241 + i * 40, 216, b[1], mut, 11); });
      s += tx(300, 236, t("favourite cinema", "السينما المفضلة"), mut, 11);
      return g(s);
    },
    spots: S([[105, 120, ["Bars touch", "أعمدة متلاصقة"], ["Numerical intervals follow each other with no gaps.", "الفئات العددية متتالية بلا فجوات."]],
      [60, 216, ["Equal intervals", "فئات متساوية"], ["0-29, 30-59, 60-89, ... each 30 wide.", "0-29، 30-59، 60-89، ... طول كل منها 30."]],
      [94, 50, ["Frequency", "التكرار"], ["The height shows how many values fall in the interval.", "الارتفاع يوضح عدد القيم في الفئة."]],
      [300, 120, ["Bar graph", "التمثيل بالأعمدة"], ["Separated bars for categories like cinemas.", "أعمدة منفصلة لفئات وصفية مثل السينمات."]],
      [20, 30, ["Labelled axes", "محاور مسماة"], ["Every histogram needs a title and labelled axes.", "كل مدرج تكراري يحتاج عنوانًا ومحاور مسماة."]]]) };

  D.mp6u6l3 = { title: ["A box plot and its five numbers", "الصندوق ذو العارضتين وأعداده الخمسة"],
    svg: function () {
      var f = X1(0, 20, 30, 370), s = nl(200, 30, 370, 0, 20, 2, true);
      s += ln(f(0), 110, f(2.5), 110, "var(--ink)", 2.5) + ln(f(14), 110, f(18), 110, "var(--ink)", 2.5);
      s += '<rect x="' + f(2.5) + '" y="80" width="' + (f(14) - f(2.5)) + '" height="60" fill="#fde68a" stroke="#b45309" stroke-width="2.5" rx="4"/>';
      s += ln(f(11), 80, f(11), 140, "#b45309", 3) + ln(f(0), 95, f(0), 125, "var(--ink)", 2.5) + ln(f(18), 95, f(18), 125, "var(--ink)", 2.5);
      [[0, "0"], [2.5, "2.5"], [11, "11"], [14, "14"], [18, "18"]].forEach(function (p) { s += tx(f(p[0]), 66, p[1], ink, 12); });
      return g(s);
    },
    spots: S([[f1(0), 110, ["Minimum = 0", "أصغر قيمة = 0"], ["The left end of the left whisker.", "الطرف الأيسر للعارضة اليسرى."]],
      [f1(2.5), 150, ["Lower quartile Q1 = 2.5", "الربيع الأدنى Q1 = 2.5"], ["Median of the lower half 0, 0, 1, 4, 7, 9.", "وسيط النصف الأدنى 0، 0، 1، 4، 7، 9."]],
      [f1(11), 110, ["Median = 11", "الوسيط = 11"], ["The middle of the 13 ordered values.", "وسط القيم الثلاث عشرة المرتبة."]],
      [f1(14), 150, ["Upper quartile Q3 = 14", "الربيع الأعلى Q3 = 14"], ["Median of the upper half 12, 12, 13, 15, 17, 18.", "وسيط النصف الأعلى 12، 12، 13، 15، 17، 18."]],
      [f1(18), 110, ["Maximum = 18", "أكبر قيمة = 18"], ["The right end of the right whisker.", "الطرف الأيمن للعارضة اليمنى."]],
      [f1(8), 95, ["The box", "الصندوق"], ["From Q1 to Q3: the middle half of the data.", "من Q1 إلى Q3: النصف الأوسط من البيانات."]]]) };
  function f1(v) { return 30 + v * 17; }

  D.mp6u7l1 = { title: ["The mean balances the data", "المتوسط يحقق اتزان البيانات"],
    svg: function () {
      var f = X1(30, 42, 40, 360), s = ln(30, 150, 370, 150, "var(--ink)", 5);
      s += '<path d="M' + f(36) + ' 154 L' + (f(36) - 22) + ' 196 L' + (f(36) + 22) + ' 196 Z" fill="#f97316"/>';
      [32, 34, 36, 38, 40].forEach(function (v) { s += ci(f(v), 136, 10, "#2563eb"); });
      for (var v = 30; v <= 42; v += 2) s += tx(f(v), 216, String(v), mut, 11);
      s += tx(f(36), 236, t("balance point = mean = 36", "نقطة الاتزان = المتوسط = 36"), 'style="fill:#f97316"', 12);
      s += tx(200, 40, "(32 + 34 + 36 + 38 + 40) ÷ 5 = 180 ÷ 5 = 36", ink, 13);
      s += tx(f(33), 100, "−4  −2", 'style="fill:#dc2626"', 12) + tx(f(39), 100, "+2  +4", 'style="fill:#16a34a"', 12);
      return g(s);
    },
    spots: S([[200, 180, ["Balance point", "نقطة الاتزان"], ["The seesaw rests flat at 36, the mean.", "تستقر الأرجوحة أفقية عند 36، وهو المتوسط."]],
      [93, 100, ["Below the mean", "أسفل المتوسط"], ["32 and 34 are 4 and 2 below 36.", "32 و34 أقل من 36 بـ4 و2."]],
      [306, 100, ["Above the mean", "أعلى المتوسط"], ["38 and 40 are 2 and 4 above: the distances cancel.", "38 و40 أعلى بـ2 و4، فتلغي المسافات بعضها."]],
      [200, 40, ["The algorithm", "الطريقة"], ["Add all values and divide by how many there are.", "اجمع كل القيم واقسم على عددها."]],
      [f2(40), 136, ["Fair share", "النصيب العادل"], ["Move 4 cards from 40 to 32 and 2 from 38 to 34: everyone has 36.", "انقل 4 بطاقات من 40 إلى 32 وبطاقتين من 38 إلى 34، فيصبح للجميع 36."]]]) };
  function f2(v) { return 40 + (v - 30) * 320 / 12; }

  D.mp6u7l2 = { title: ["An outlier pulls the mean", "القيمة المتطرفة تجذب المتوسط"],
    svg: function () {
      var f = X1(0, 10, 35, 365), s = nl(180, 35, 365, 0, 10, 1, true), cnt = { 0: 2, 1: 4, 2: 3, 9: 1 };
      Object.keys(cnt).forEach(function (k) { for (var i = 0; i < cnt[k]; i++) s += ci(f(+k), 166 - i * 18, 7, +k === 9 ? "#dc2626" : "#2563eb"); });
      s += ln(f(1), 60, f(1), 175, "#16a34a", 2.5) + tx(f(1), 50, t("median 1", "الوسيط 1"), 'style="fill:#16a34a"', 11);
      s += ln(f(1.9), 80, f(1.9), 175, "#f97316", 2.5) + tx(f(1.9) + 30, 76, t("mean 1.9", "المتوسط 1.9"), 'style="fill:#f97316"', 11);
      s += '<path d="M' + f(0) + ' 222 L' + f(9) + ' 222" stroke="#7c3aed" stroke-width="2.5"/>' + tx(f(4.5), 236, t("range = 9 − 0 = 9", "المدى = 9 − 0 = 9"), 'style="fill:#7c3aed"', 11);
      return g(s);
    },
    spots: S([[f3(9), 166, ["Outlier", "القيمة المتطرفة"], ["9 siblings is far away from the rest.", "9 إخوة بعيدة عن باقي القيم."]],
      [f3(1), 50, ["Median = 1", "الوسيط = 1"], ["The middle of 10 ordered values: (1 + 1) ÷ 2.", "وسط 10 قيم مرتبة: (1 + 1) ÷ 2."]],
      [f3(1.9) + 30, 76, ["Mean = 1.9", "المتوسط = 1.9"], ["19 ÷ 10: pulled up toward the outlier.", "19 ÷ 10: مرفوع نحو القيمة المتطرفة."]],
      [f3(1), 120, ["Mode = 1", "المنوال = 1"], ["The tallest stack of dots.", "أعلى عمود من النقاط."]],
      [f3(4.5), 222, ["Range", "المدى"], ["Maximum − minimum = 9, even though most values are 0 to 2.", "أكبر قيمة − أصغر قيمة = 9، مع أن معظم القيم من 0 إلى 2."]]]) };
  function f3(v) { return 35 + v * 33; }

  /* ---------- lab part names ---------- */
  L.names = L.names || {};
  var N = {
    m6_divtree: ["Divisibility grid and factor tree", "شبكة القسمة وشجرة العوامل"],
    m6_venn: ["Prime factor Venn diagram", "شكل فن للعوامل الأولية"],
    m6_numline: ["Number line explorer", "مستكشف خط الأعداد"],
    m6_sets: ["Number sets sorter", "فرز مجموعات الأعداد"],
    m6_absval: ["Diving fish: absolute value", "السمكة الغواصة: القيمة المطلقة"],
    m6_tiles: ["Algebra tiles expression builder", "بناء المقادير ببطاقات الجبر"],
    m6_ops: ["Order of operations stepper", "خطوات ترتيب العمليات"],
    m6_equiv: ["Keep it level: equivalent expressions", "حافظ على الاتزان: المقادير المتكافئة"],
    m6_balance: ["Pan balance equations", "المعادلات بالميزان ذي الكفتين"],
    m6_ineq: ["Inequality number line", "المتباينات على خط الأعداد"],
    m6_rides: ["Amusement park tickets", "تذاكر الملاهي"],
    m6_graph: ["What's the rule? graph machine", "آلة ما القاعدة؟ والتمثيل البياني"],
    m6_statq: ["Class survey: statistical questions", "استطلاع الفصل: الأسئلة الإحصائية"],
    m6_hist: ["Number cube sums histogram", "مدرج مجموع مكعبي الأرقام"],
    m6_box: ["Box plot builder", "بناء الصندوق ذي العارضتين"],
    m6_mean: ["Seesaw and fair share", "الأرجوحة والنصيب العادل"],
    m6_outlier: ["Outlier dot plot", "التمثيل بالنقاط والقيم المتطرفة"]
  };
  Object.keys(N).forEach(function (k) { L.names[k] = N[k]; });
})();
/* ---------- Primary 6 maths simulations (part A): live canvas manipulatives, original designs ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit;
  var eq = function (s) { return '<span class="eq" dir="ltr">' + s + "</span>"; };
  function hint(s) { return '<p class="lab-prompt">' + s + "</p>"; }
  function dist(a, b, c, d) { var x = a - c, y = b - d; return Math.sqrt(x * x + y * y); }
  function F(v) { v = Math.round(v * 1000) / 1000; return (v < 0 ? "−" : "") + Math.abs(v); }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function LOOP(S, fn) { S.loop(function (dt) { S.ctx.direction = "ltr"; fn(dt, S.ctx, S.W, S.H, S.C); }); }
  function el(cls, html) { var d = E.el("div", cls); if (html) d.innerHTML = html; return d; }
  var SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  function sup(k) { return String(k).split("").map(function (c) { return SUP[c] || c; }).join(""); }
  /* shared: horizontal number line on canvas */
  function axis(c, C, x0, x1, y, a, b, step, labEvery) {
    c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(x0 - 10, y); c.lineTo(x1 + 10, y); c.stroke();
    for (var v = a; v <= b + 1e-9; v += step) {
      var x = x0 + (v - a) * (x1 - x0) / (b - a), big = Math.abs(v / labEvery - Math.round(v / labEvery)) < 1e-6;
      c.lineWidth = big ? 2 : 1; c.beginPath(); c.moveTo(x, y - (big ? 7 : 4)); c.lineTo(x, y + (big ? 7 : 4)); c.stroke();
      if (big) K.txt(c, n(Math.round(v * 100) / 100), x, y + 20, { s: 11, c: C.muted });
    }
  }
  E.m6kit = { F: F, axis: axis, LOOP: LOOP, el: el, hint: hint, dist: dist, clamp: clamp, sup: sup, eq: eq };

  /* =========================================================
     m6_divtree - divisibility hundred grid + factor tree builder
     ========================================================= */
  L.m6_divtree = function (host, cfg, done) {
    host.innerHTML = hint(t("Grid: switch divisors on and tap a number to test it. Tree: tap a box that is not prime, then press a prime that divides it.", "الشبكة: شغّل القواسم واضغط على عدد لتختبره. الشجرة: اضغط على مربع ليس أوليًا ثم اضغط على عدد أولي يقسمه.")) + '<div class="seg" id="dvm"></div>';
    var S = K.make(host, 0.62, 400), mode = "grid", on = {}, picked = 0, num = 40, root = null, sel = null, nodes = [], cellG = null;
    var ctl = el("sim-ctl"); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Grid: switch on ÷2 and ÷3 together. Which numbers stay lit?", "الشبكة: شغّل ÷2 و÷3 معًا. ما الأعداد التي تبقى مضيئة؟"),
      t("Grid: tap a number that is divisible by 2, 3, 4, 5, 6 and 10.", "الشبكة: اضغط على عدد يقبل القسمة على 2 و3 و4 و5 و6 و10."),
      t("Tree: finish the factor tree of 40.", "الشجرة: أكمل شجرة عوامل العدد 40."), t("Tree: finish the factor tree of 42.", "الشجرة: أكمل شجرة عوامل العدد 42.")], done);
    var DIV = [2, 3, 4, 5, 6, 10], PR = [2, 3, 5, 7];
    ctl.innerHTML = '<div class="btn-row dv-g" style="flex-wrap:wrap"></div><div class="dv-t" style="display:none"><div class="seg" id="dvn"></div><div class="btn-row dv-p" style="margin-top:8px;flex-wrap:wrap"></div></div>';
    var gRow = ctl.querySelector(".dv-g"), tRow = ctl.querySelector(".dv-t"), pRow = ctl.querySelector(".dv-p");
    gRow.innerHTML = DIV.map(function (d) { return '<button type="button" class="btn sm" data-d="' + d + '">÷ ' + n(d) + "</button>"; }).join("");
    pRow.innerHTML = PR.map(function (p) { return '<button type="button" class="btn sm" data-p="' + p + '">' + t("split by ", "قسّم على ") + n(p) + "</button>"; }).join("");
    gRow.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () { var d = +b.dataset.d; on[d] = !on[d]; b.classList.toggle("primary", !!on[d]); if (on[2] && on[3]) { tick(0); E.speak(t("Only the multiples of 6 stay lit.", "تبقى مضاعفات العدد 6 فقط مضيئة.")); } info(); };
    });
    function isP(v) { if (v < 2) return false; for (var k = 2; k * k <= v; k++) if (v % k === 0) return false; return true; }
    function newTree() { root = { v: num, k: null }; sel = null; info(); }
    function leaves(nd, a) { a = a || []; if (nd.k) { leaves(nd.k[0], a); leaves(nd.k[1], a); } else a.push(nd); return a; }
    function depth(nd) { return nd.k ? 1 + Math.max(depth(nd.k[0]), depth(nd.k[1])) : 0; }
    function lay(nd, x0, x1, d) { nd.x = (x0 + x1) / 2; nd.d = d; nodes.push(nd); if (nd.k) { var a = leaves(nd.k[0]).length, b = leaves(nd.k[1]).length, m = x0 + (x1 - x0) * a / (a + b); lay(nd.k[0], x0, m, d + 1); lay(nd.k[1], m, x1, d + 1); } }
    function expForm(ls) {
      var cnt = {}; ls.forEach(function (l) { cnt[l.v] = (cnt[l.v] || 0) + 1; });
      return Object.keys(cnt).map(Number).sort(function (a, b) { return a - b; }).map(function (p) { return cnt[p] > 1 ? p + sup(cnt[p]) : String(p); }).join(" × ");
    }
    function curSel() { var ls = leaves(root); if (sel && ls.indexOf(sel) >= 0 && !isP(sel.v)) return sel; sel = ls.filter(function (l) { return !isP(l.v); })[0] || null; return sel; }
    pRow.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        var p = +b.dataset.p, s = curSel();
        if (!s) return;
        if (s.v % p !== 0) { E.toast(t(s.v + " is not divisible by " + p + ".", s.v + " لا يقبل القسمة على " + p + ".")); return; }
        s.k = [{ v: p, k: null }, { v: s.v / p, k: null }]; sel = null; info();
      };
    });
    function info() {
      if (mode === "grid") {
        var ds = DIV.filter(function (d) { return on[d]; });
        var h = "<span>" + (ds.length ? t("Lit: numbers divisible by ", "المضيء: أعداد تقبل القسمة على ") + ds.map(function (d) { return n(d); }).join(t(" and ", " و")) : t("Switch on a divisor.", "شغّل قاسمًا.")) + "</span>";
        if (picked) h += "<span>" + eq(String(picked)) + ": " + DIV.map(function (d) { return "÷" + n(d) + (picked % d === 0 ? " ✓" : " ✗"); }).join("  ") + "</span>";
        out.innerHTML = h;
      } else {
        var ls = leaves(root), all = ls.every(function (l) { return isP(l.v); });
        out.innerHTML = "<span>" + eq(num + " = " + ls.map(function (l) { return l.v; }).join(" × ") + (all ? " = " + expForm(ls) : "")) + "</span>" +
          (all ? '<b class="ok-t">✔ ' + t("Every branch ends in a prime.", "كل فرع ينتهي بعدد أولي.") + "</b>" : '<span class="sub">' + t("Selected box: ", "المربع المختار: ") + n(curSel().v) + "</span>");
        if (all) { if (num === 40) tick(2); if (num === 42) tick(3); }
      }
    }
    K.seg(host, "#dvm", [["grid", t("Divisibility grid", "شبكة القسمة")], ["tree", t("Factor tree", "شجرة العوامل")]], mode, function (v) { mode = v; gRow.style.display = v !== "grid" ? "none" : ""; tRow.style.display = v !== "tree" ? "none" : ""; info(); });
    K.seg(ctl, "#dvn", [40, 42, 30, 72].map(function (v) { return [String(v), n(v)]; }), "40", function (v) { num = +v; newTree(); });
    S.drag({
      down: function (p) {
        if (mode === "grid") {
          cellG = { x: 8, y: 6, w: (S.W - 16) / 12, h: (S.H - 12) / 10 };
          var c = Math.floor((p.x - cellG.x) / cellG.w), r = Math.floor((p.y - cellG.y) / cellG.h);
          if (c < 0 || c > 11 || r < 0 || r > 9) return false;
          picked = r * 12 + c + 1; info();
          if (DIV.every(function (d) { return picked % d === 0; })) tick(1);
          return false;
        }
        if (mode === "tree") { var best = null; nodes.forEach(function (nd) { if (!nd.k && !isP(nd.v) && dist(p.x, p.y, nd.px, nd.py) < 26) best = nd; }); if (best) { sel = best; info(); } }
        return false;
      }
    });
    newTree(); info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      if (mode === "grid") {
        var gw = (W - 16) / 12, gh = (H - 12) / 10; cellG = { x: 8, y: 6, w: gw, h: gh };
        var ds = DIV.filter(function (d) { return on[d]; });
        for (var k = 1; k <= 120; k++) {
          var cx = 8 + ((k - 1) % 12) * gw, cy = 6 + Math.floor((k - 1) / 12) * gh, lit = ds.length && ds.every(function (d) { return k % d === 0; });
          K.rr(c, cx + 1.5, cy + 1.5, gw - 3, gh - 3, 5); c.fillStyle = lit ? "#60a5fa" : C.card; c.fill();
          c.strokeStyle = k === picked ? "#f97316" : C.line; c.lineWidth = k === picked ? 3 : 1; c.stroke();
          K.txt(c, n(k), cx + gw / 2, cy + gh / 2, { s: Math.min(13, gw * 0.36), c: lit ? "#0f172a" : C.ink, w: 700 });
        }
      } else {
        nodes = []; var dmax = Math.max(1, depth(root)), gap = Math.min(64, (H - 60) / dmax);
        lay(root, 10, W - 10, 0); var s = curSel();
        nodes.forEach(function (nd) { nd.px = nd.x; nd.py = 30 + nd.d * gap; });
        c.strokeStyle = C.muted; c.lineWidth = 2;
        nodes.forEach(function (nd) { if (nd.k) nd.k.forEach(function (ch) { c.beginPath(); c.moveTo(nd.px, nd.py + 14); c.lineTo(ch.px, ch.py - 14); c.stroke(); }); });
        nodes.forEach(function (nd) {
          var pr = isP(nd.v), r = 17;
          K.dot(c, nd.px, nd.py, r, pr && !nd.k ? "#fde68a" : "#bfdbfe");
          if (nd === s) { c.strokeStyle = "#f97316"; c.lineWidth = 3; c.beginPath(); c.arc(nd.px, nd.py, r + 3, 0, 7); c.stroke(); }
          K.txt(c, n(nd.v), nd.px, nd.py, { s: 14, c: "#0f172a" });
        });
        K.txt(c, t("yellow = prime", "الأصفر = أولي"), W - 12, H - 12, { s: 11, c: C.muted, a: "right" });
      }
    });
  };

  /* =========================================================
     m6_venn - drag prime factors into a Venn diagram: GCF and LCM
     ========================================================= */
  L.m6_venn = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag each prime factor chip into the diagram. A factor both numbers share goes in the overlap (it takes one matching chip from each number).", "اسحب كل بطاقة عامل أولي إلى شكل فن، والعامل المشترك بين العددين يوضع في الجزء المشترك (يأخذ بطاقة مطابقة من كل عدد).")) + '<div class="seg" id="vnp"></div>';
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.85 : 0.62, 390), PAIRS = [[12, 18], [4, 9], [36, 48], [20, 40]], pi = 0, chips = [], drag = null, G = null;
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Complete the diagram for 12 and 18.", "أكمل الشكل للعددين 12 و18."), t("Complete it for 4 and 9 (relatively prime).", "أكمله للعددين 4 و9 (أوليان فيما بينهما)."), t("Complete it for 36 and 48 and read the baskets expression.", "أكمله للعددين 36 و48 واقرأ مقدار السلال.")], done);
    function pf(v) { var a = [], p = 2; while (v > 1) { while (v % p === 0) { a.push(p); v /= p; } p++; } return a; }
    function init() {
      var A = PAIRS[pi][0], B = PAIRS[pi][1]; chips = [];
      pf(A).forEach(function (p) { chips.push({ p: p, own: "A", reg: "T" }); });
      pf(B).forEach(function (p) { chips.push({ p: p, own: "B", reg: "T" }); });
      layout(true); info();
    }
    function geo() { var W = S.W, H = S.H, r = Math.min(W * 0.21, H * 0.33); return { ax: W / 2 - r * 0.62, bx: W / 2 + r * 0.62, cy: H * 0.4, r: r, ty: H - 24 }; }
    function layout(snap) {
      G = geo();
      var groups = { T: [], A: [], O: [], B: [] };
      chips.forEach(function (ch) { groups[ch.reg].push(ch); });
      var tA = groups.T.filter(function (c) { return c.own === "A"; }), tB = groups.T.filter(function (c) { return c.own === "B"; });
      var sp = Math.min(34, (S.W - 40) / (tA.length + tB.length + 1));
      tA.forEach(function (ch, i) { ch.tx = 20 + i * sp; ch.ty = G.ty; });
      tB.forEach(function (ch, i) { ch.tx = S.W - 20 - i * sp; ch.ty = G.ty; });
      [["A", G.ax - G.r * 0.45], ["O", S.W / 2], ["B", G.bx + G.r * 0.45]].forEach(function (z) {
        var list = groups[z[0]], rows = Math.ceil(list.length / 2);
        list.forEach(function (ch, i) { ch.tx = z[1] + (list.length === 1 ? 0 : (i % 2 ? 17 : -17)); ch.ty = G.cy - (rows - 1) * 17 + Math.floor(i / 2) * 34; });
      });
      if (snap) chips.forEach(function (ch) { ch.x = ch.tx; ch.y = ch.ty; });
    }
    S.onSize = function () { if (chips.length) layout(true); };
    function prod(a) { return a.reduce(function (s, v) { return s * v; }, 1); }
    function info() {
      var A = PAIRS[pi][0], B = PAIRS[pi][1];
      var h = "<span>" + eq(A + " = " + pf(A).join(" × ")) + "</span><span>" + eq(B + " = " + pf(B).join(" × ")) + "</span>";
      var left = chips.filter(function (c) { return c.reg === "T"; }).length;
      if (left) { out.innerHTML = h + '<span class="sub">' + t("Chips left: ", "البطاقات الباقية: ") + n(left) + "</span>"; return; }
      var aOnly = chips.filter(function (c) { return c.reg === "A"; }).map(function (c) { return c.p; }), bOnly = chips.filter(function (c) { return c.reg === "B"; }).map(function (c) { return c.p; });
      var clash = aOnly.filter(function (p) { return bOnly.indexOf(p) >= 0; })[0];
      if (clash) { out.innerHTML = h + '<b class="no-t">✖ ' + t("A common factor " + clash + " is hiding outside the overlap. Drag the two " + clash + "s together into the middle.", "العامل المشترك " + clash + " مختبئ خارج الجزء المشترك، اسحب العاملين " + clash + " معًا إلى المنتصف.") + "</b>"; return; }
      var asc = function (u, v) { return u - v; }, ov = chips.filter(function (c) { return c.reg === "O"; }).map(function (c) { return c.p; }).sort(asc), allp = chips.map(function (c) { return c.p; }).sort(asc), g = prod(ov), l = prod(allp);
      out.innerHTML = h + '<b class="ok-t">✔ GCF = ' + eq(ov.length ? ov.join(" × ") + " = " + g : "1") + "</b><b>LCM = " + eq(allp.join(" × ") + " = " + l) + "</b><span>" + eq(A + " + " + B + " = " + g + "(" + A / g + " + " + B / g + ")") + "</span>";
      E.speak(t("Greatest common factor " + g + ", least common multiple " + l + ".", "العامل المشترك الأكبر " + g + "، والمضاعف المشترك الأصغر " + l + "."));
      if (pi === 0) tick(0); if (pi === 1) tick(1); if (pi === 2) tick(2);
    }
    K.seg(host, "#vnp", PAIRS.map(function (p, i) { return [String(i), n(p[0]) + " & " + n(p[1])]; }), "0", function (v) { pi = +v; init(); });
    S.drag({
      down: function (p) { for (var i = chips.length - 1; i >= 0; i--) if (dist(p.x, p.y, chips[i].x, chips[i].y) < 18 || dist(p.x, p.y, chips[i].tx, chips[i].ty) < 18) { drag = chips[i]; drag.from = drag.reg; drag.x = p.x; drag.y = p.y; return true; } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function (p) {
        if (!drag) return;
        var g = geo(), inA = dist(p.x, p.y, g.ax, g.cy) < g.r, inB = dist(p.x, p.y, g.bx, g.cy) < g.r, z = inA && inB ? "O" : inA ? "A" : inB ? "B" : "T", ch = drag; drag = null;
        var A = PAIRS[pi][0], B = PAIRS[pi][1];
        if (ch.own === "AB") {
          if (z !== "O") { ch.own = "A"; ch.reg = "T"; chips.push({ p: ch.p, own: "B", reg: "T", x: ch.x, y: ch.y }); }
        } else if (z === "T") ch.reg = "T";
        else if (z === "O") {
          var other = ch.own === "A" ? "B" : "A", mate = chips.filter(function (c) { return c.own === other && c.p === ch.p && c.reg !== "O"; })[0];
          if (mate) { chips.splice(chips.indexOf(mate), 1); ch.own = "AB"; ch.reg = "O"; }
          else { E.toast(t((other === "A" ? A : B) + " has no spare factor " + ch.p + " to share.", "العدد " + (other === "A" ? A : B) + " ليس فيه عامل " + ch.p + " متاح للمشاركة.")); }
        } else if (z === ch.own) ch.reg = z;
        else E.toast(t("This factor belongs to " + (ch.own === "A" ? A : B) + ".", "هذا العامل ينتمي إلى " + (ch.own === "A" ? A : B) + "."));
        layout(false); info();
      },
      hover: function (p) { return chips.some(function (c) { return dist(p.x, p.y, c.x, c.y) < 18; }); }
    });
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); var g = geo();
      c.globalAlpha = 0.22; K.dot(c, g.ax, g.cy, g.r, "#3b82f6"); K.dot(c, g.bx, g.cy, g.r, "#ec4899"); c.globalAlpha = 1;
      c.lineWidth = 2; c.strokeStyle = "#2563eb"; c.beginPath(); c.arc(g.ax, g.cy, g.r, 0, 7); c.stroke(); c.strokeStyle = "#db2777"; c.beginPath(); c.arc(g.bx, g.cy, g.r, 0, 7); c.stroke();
      K.txt(c, n(PAIRS[pi][0]), g.ax - g.r * 0.5, g.cy - g.r - 4, { s: 16, c: "#2563eb" }); K.txt(c, n(PAIRS[pi][1]), g.bx + g.r * 0.5, g.cy - g.r - 4, { s: 16, c: "#db2777" });
      c.fillStyle = C.line; c.fillRect(0, g.ty - 20, W, 1);
      chips.forEach(function (ch) {
        if (ch !== drag) { var k = Math.min(1, dt * 12); ch.x += (ch.tx - ch.x) * k; ch.y += (ch.ty - ch.y) * k; }
        K.dot(c, ch.x, ch.y, Math.min(15, Math.max(10, (W - 40) / 20)), ch.own === "A" ? "#93c5fd" : ch.own === "B" ? "#f9a8d4" : "#fde68a", "rgba(0,0,0,.35)");
        K.txt(c, n(ch.p), ch.x, ch.y, { s: 14, c: "#0f172a" });
      });
    });
    init();
  };

  /* =========================================================
     m6_numline - drag points on a number line: compare and opposites
     ========================================================= */
  L.m6_numline = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag points A and B along the number line. The symbol between them updates live. Press the button to show the opposite of A.", "اسحب النقطتين A وB على خط الأعداد، والرمز بينهما يتغير مباشرة، واضغط الزر لتظهر معكوس A."));
    var S = K.make(host, 0.42, 280), P = { A: 2, B: 5 }, drag = null, opp = false;
    var ctl = el("sim-ctl", '<button type="button" class="btn sm" id="nlo">' + t("Show the opposite of A", "أظهر معكوس A") + "</button>"); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Climbers: put A at " + eq("−3") + " and B at its opposite.", "المتسلقان: ضع A عند " + eq("−3") + " وB عند معكوسها."), t("Make A greater than B while both are negative.", "اجعل A أكبر من B وكلتاهما سالبة."), t("Put a point on the number that is its own opposite.", "ضع نقطة على العدد الذي هو معكوس نفسه.")], done);
    ctl.querySelector("#nlo").onclick = function () { opp = !opp; this.classList.toggle("primary", opp); info(); };
    function X(v) { return 30 + (v + 10) * (S.W - 60) / 20; }
    function info() {
      var a = P.A, b = P.B, sym = a < b ? "<" : a > b ? ">" : "=";
      out.innerHTML = "<span>A = " + eq(F(a)) + " · B = " + eq(F(b)) + "</span><b>" + eq(F(a) + " " + sym + " " + F(b)) + "</b>" + (opp ? "<span>" + t("opposite of A = ", "معكوس A = ") + eq(F(-a)) + "</span>" : "");
      if (drag) return;
      if (a === -3 && b === 3) tick(0);
      if (a < 0 && b < 0 && a > b) tick(1);
      if (a === 0 || b === 0) tick(2);
    }
    S.drag({
      down: function (p) { var y = S.H * 0.55; ["A", "B"].forEach(function (k) { if (!drag && Math.abs(p.x - X(P[k])) < 20 && Math.abs(p.y - y) < 44) drag = k; }); return !!drag; },
      move: function (p) { if (drag) { var v = clamp(Math.round((p.x - 30) / (S.W - 60) * 20 - 10), -10, 10); if (v !== P[drag]) { P[drag] = v; info(); } } },
      up: function () { if (drag) { drag = null; info(); } },
      hover: function (p) { return ["A", "B"].some(function (k) { return Math.abs(p.x - X(P[k])) < 20; }); }
    });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); var y = H * 0.55;
      axis(c, C, 30, W - 30, y, -10, 10, 1, W < 480 ? 5 : 1);
      K.txt(c, t("negative ←", "← سالب"), 34, y - 46, { s: 11, c: "#dc2626", a: "left" }); K.txt(c, t("→ positive", "موجب →"), W - 34, y - 46, { s: 11, c: "#16a34a", a: "right" });
      if (opp) { c.globalAlpha = 0.45; K.dot(c, X(-P.A), y, 10, "#2563eb"); c.globalAlpha = 1; K.txt(c, "−A", X(-P.A), y + 38, { s: 11, c: "#2563eb" });
        c.strokeStyle = "#2563eb"; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(X(P.A), y - 14); c.quadraticCurveTo((X(P.A) + X(-P.A)) / 2, y - 60, X(-P.A), y - 14); c.stroke(); c.setLineDash([]); }
      [["A", "#2563eb"], ["B", "#f97316"]].forEach(function (q, i) {
        var x = X(P[q[0]]); K.dot(c, x, y, 11, q[1], "rgba(0,0,0,.4)"); K.txt(c, q[0], x, y, { s: 11, c: "#fff" });
        K.txt(c, n(P[q[0]]), x, y - 24 - i * 16, { s: 13, c: q[1] });
      });
    });
  };

  /* =========================================================
     m6_sets - drag numbers into the smallest set; then order them
     ========================================================= */
  L.m6_sets = function (host, cfg, done) {
    host.innerHTML = hint(t("Sets: drag each number card into the SMALLEST set it belongs to. Order: drag the cards onto the number line slots from least to greatest.", "المجموعات: اسحب كل بطاقة إلى أصغر مجموعة تنتمي إليها. الترتيب: اسحب البطاقات إلى خانات خط الأعداد من الأصغر إلى الأكبر.")) + '<div class="seg" id="stm"></div>';
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.98 : 0.64, 420), mode = "sets", drag = null;
    function nar() { return S.W < 520; }
    function cwid() { return nar() ? Math.min(60, (S.W - 12) / 4 - 6) : Math.min(60, (S.W * 0.34 - 12) / 2 - 4); }
    var CARDS = [["7", "C"], ["12,892", "C"], ["0", "N"], ["−455", "I"], ["−11", "I"], ["4.9", "R"], ["3/4", "R"], ["−0.606", "R"]];
    var ORD = [["3.76", 3.76], ["−9", -9], ["3.75", 3.75], ["−2.5", -2.5], ["−9.1", -9.1]];
    var cs = CARDS.map(function (c, i) { return { s: c[0], k: c[1], i: i, ok: false }; }), os = ORD.map(function (c, i) { return { s: c[0], v: c[1], i: i, slot: -1 }; });
    var NAME = { C: t("counting numbers", "أعداد العد"), N: t("natural numbers", "الأعداد الطبيعية"), I: t("integers", "الأعداد الصحيحة"), R: t("rational numbers", "الأعداد النسبية") }, RANK = { C: 0, N: 1, I: 2, R: 3 };
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Place a negative integer in its set.", "ضع عددًا صحيحًا سالبًا في مجموعته."), t("Place all 8 cards correctly.", "ضع البطاقات الثماني كلها في أماكنها الصحيحة."), t("Order: put the 5 numbers in order from least to greatest.", "الترتيب: رتّب الأعداد الخمسة من الأصغر إلى الأكبر.")], done);
    function rects() {
      var W = S.W, H = S.H, R = nar() ? { x: 6, y: 6, w: W - 12, h: H * 0.64 - 6 } : { x: 6, y: 6, w: W * 0.66 - 6, h: H - 12 }, I = { x: R.x + 10, y: R.y + 28, w: R.w * 0.76, h: R.h - 38 }, N = { x: I.x + 10, y: I.y + 28, w: I.w * 0.72, h: I.h - 38 }, Cn = { x: N.x + 10, y: N.y + 28, w: N.w * 0.66, h: N.h - 38 };
      return { R: R, I: I, N: N, C: Cn };
    }
    function inside(p, r) { return p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h; }
    function region(p) { var r = rects(); return inside(p, r.C) ? "C" : inside(p, r.N) ? "N" : inside(p, r.I) ? "I" : inside(p, r.R) ? "R" : null; }
    function home(cd) { var W = S.W, cw; if (nar()) { cw = (W - 12) / 4; return { x: 6 + (cd.i % 4) * cw + cw / 2, y: S.H * 0.64 + 24 + Math.floor(cd.i / 4) * 38 }; } cw = (W * 0.34 - 12) / 2; return { x: W * 0.66 + 6 + (cd.i % 2) * cw + cw / 2, y: 24 + Math.floor(cd.i / 2) * Math.min(44, (S.H - 30) / 4) }; }
    function slotX(i) { return S.W * 0.1 + i * S.W * 0.2; }
    function ohome(cd) { return { x: slotX(cd.i), y: S.H * 0.25 }; }
    cs.forEach(function (cd) { var h = home(cd); cd.x = h.x; cd.y = h.y; });
    os.forEach(function (cd) { var h = ohome(cd); cd.x = h.x; cd.y = h.y; });
    S.onSize = function () { cs.forEach(function (cd) { if (!cd.ok) { var h = home(cd); cd.x = h.x; cd.y = h.y; } }); os.forEach(function (cd) { var h = cd.slot >= 0 ? { x: slotX(cd.slot), y: S.H * 0.62 } : ohome(cd); cd.x = h.x; cd.y = h.y; }); };
    function info() {
      if (mode === "sets") { var k = cs.filter(function (c) { return c.ok; }).length; out.innerHTML = "<span>" + t("Placed: ", "المكتمل: ") + n(k) + " / " + n(cs.length) + "</span><span class=\"sub\">" + t("Counting ⊂ Natural ⊂ Integers ⊂ Rational", "العد ⊂ الطبيعية ⊂ الصحيحة ⊂ النسبية") + "</span>"; if (k === cs.length) tick(1); }
      else { var m = os.filter(function (c) { return c.slot >= 0; }).length; out.innerHTML = "<span>" + t("In order: ", "المرتب: ") + n(m) + " / " + n(5) + "</span>" + (m === 5 ? "<b class=\"ok-t\">" + eq("−9.1 < −9 < −2.5 < 3.75 < 3.76") + "</b>" : ""); if (m === 5) tick(2); }
    }
    K.seg(host, "#stm", [["sets", t("Sets", "المجموعات")], ["order", t("Order", "الترتيب")]], mode, function (v) { mode = v; info(); });
    var SORTED = ORD.map(function (o) { return o[1]; }).sort(function (a, b) { return a - b; });
    S.drag({
      down: function (p) {
        var list = mode === "sets" ? cs.filter(function (c) { return !c.ok; }) : os.filter(function (c) { return c.slot < 0; });
        for (var i = list.length - 1; i >= 0; i--) if (Math.abs(p.x - list[i].x) < cwid() / 2 + 2 && Math.abs(p.y - list[i].y) < 16) { drag = list[i]; drag.ox = p.x - drag.x; drag.oy = p.y - drag.y; return true; }
        return false;
      },
      move: function (p) { if (drag) { drag.x = p.x - drag.ox; drag.y = p.y - drag.oy; } },
      up: function () {
        if (!drag) return; var cd = drag; drag = null;
        if (mode === "sets") {
          var z = region({ x: cd.x, y: cd.y });
          if (!z) { var h = home(cd); cd.x = h.x; cd.y = h.y; return; }
          if (z === cd.k) { cd.ok = true; E.speak(t("Yes!", "أحسنت!")); if (cd.k === "I") tick(0); }
          else {
            E.toast(RANK[z] < RANK[cd.k] ? t(cd.s + " is not one of the " + NAME[z] + ".", cd.s + " ليس من " + NAME[z] + ".") : t(cd.s + " fits a smaller set. Try a smaller box.", cd.s + " يناسب مجموعة أصغر، جرّب صندوقًا أصغر."));
            var h2 = home(cd); cd.x = h2.x; cd.y = h2.y;
          }
        } else {
          var best = -1; for (var i = 0; i < 5; i++) if (Math.abs(cd.x - slotX(i)) < S.W * 0.09 && Math.abs(cd.y - S.H * 0.62) < 40) best = i;
          if (best >= 0 && SORTED[best] === cd.v && !os.some(function (o) { return o.slot === best; })) { cd.slot = best; cd.x = slotX(best); cd.y = S.H * 0.62; }
          else { if (best >= 0) E.toast(t("Not this slot: smaller numbers go to the left.", "ليست هذه الخانة: الأعداد الأصغر جهة اليسار.")); var h3 = ohome(cd); cd.x = h3.x; cd.y = h3.y; }
        }
        info();
      }
    });
    function card(c, C, cd, col) { var w = cwid(); K.rr(c, cd.x - w / 2, cd.y - 14, w, 28, 8); c.fillStyle = col; c.fill(); c.strokeStyle = "rgba(0,0,0,.25)"; c.lineWidth = 1; c.stroke(); K.txt(c, E.d(cd.s), cd.x, cd.y, { s: w < 52 ? 11 : 13, c: "#0f172a" }); }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      if (mode === "sets") {
        var r = rects();
        [["R", "#fde68a"], ["I", "#bbf7d0"], ["N", "#bfdbfe"], ["C", "#fbcfe8"]].forEach(function (q) { var b = r[q[0]]; K.rr(c, b.x, b.y, b.w, b.h, 12); c.fillStyle = q[1]; c.fill(); K.txt(c, NAME[q[0]], b.x + 8, b.y + 13, { s: 11, c: "#0f172a", a: "left" }); });
        cs.forEach(function (cd) { if (cd !== drag) card(c, C, cd, cd.ok ? "#ffffff" : "#e2e8f0"); });
        if (drag) card(c, C, drag, "#fdba74");
      } else {
        var y = H * 0.62; c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(10, y + 24); c.lineTo(W - 10, y + 24); c.stroke();
        K.txt(c, t("least", "الأصغر"), 14, y + 40, { s: 11, c: C.muted, a: "left" }); K.txt(c, t("greatest", "الأكبر"), W - 14, y + 40, { s: 11, c: C.muted, a: "right" });
        for (var i = 0; i < 5; i++) { K.rr(c, slotX(i) - cwid() / 2 - 3, y - 16, cwid() + 6, 32, 8); c.strokeStyle = C.muted; c.setLineDash([4, 3]); c.stroke(); c.setLineDash([]); }
        os.forEach(function (cd) { if (cd !== drag) card(c, C, cd, cd.slot >= 0 ? "#bbf7d0" : "#e2e8f0"); });
        if (drag) card(c, C, drag, "#fdba74");
      }
    });
  };

  /* =========================================================
     m6_absval - diving fish: position vs distance from the surface
     ========================================================= */
  L.m6_absval = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the two fish up (jump) or down (dive). The water surface is 0. The coloured bar is the distance from 0: the absolute value.", "اسحب السمكتين لأعلى (قفز) أو لأسفل (غوص)، وسطح الماء هو 0، والشريط الملون هو البعد عن الصفر: القيمة المطلقة."));
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.9 : 0.6, 380), P = { A: 2, B: 5 }, drag = null, sw = 0;
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make fish A dive 4 m. What is its absolute value?", "اجعل السمكة A تغوص 4 م. ما قيمتها المطلقة؟"), t("Make the fish opposites (same distance, different sides).", "اجعل السمكتين متعاكستين (البعد نفسه في جهتين مختلفتين)."), t("Freezers: make A < B but |A| > |B|.", "المجمدات: اجعل A < B لكن |A| > |B|.")], done);
    function Y(v) { return 16 + (8 - v) * (S.H - 32) / 16; }
    function info() {
      var a = P.A, b = P.B, s1 = a < b ? "<" : a > b ? ">" : "=", s2 = Math.abs(a) < Math.abs(b) ? "<" : Math.abs(a) > Math.abs(b) ? ">" : "=";
      out.innerHTML = "<span>" + eq("A = " + F(a) + ",  |A| = " + Math.abs(a)) + "</span><span>" + eq("B = " + F(b) + ",  |B| = " + Math.abs(b)) + "</span><b>" + eq("A " + s1 + " B") + "</b><b>" + eq("|A| " + s2 + " |B|") + "</b>";
      if (drag) return;
      if (a === -4) tick(0);
      if (a === -b && a !== 0) tick(1);
      if (a < b && Math.abs(a) > Math.abs(b) && b !== 0) tick(2);
    }
    function FX(k) { return S.W * (k === "A" ? 0.42 : 0.7); }
    S.drag({
      down: function (p) { ["A", "B"].forEach(function (k) { if (!drag && Math.abs(p.x - FX(k)) < 34 && Math.abs(p.y - Y(P[k])) < 22) drag = k; }); return !!drag; },
      move: function (p) { if (drag) { var v = clamp(Math.round(8 - (p.y - 16) / (S.H - 32) * 16), -8, 8); if (v !== P[drag]) { P[drag] = v; info(); } } },
      up: function () { if (drag) { drag = null; info(); } },
      hover: function (p) { return ["A", "B"].some(function (k) { return Math.abs(p.x - FX(k)) < 34 && Math.abs(p.y - Y(P[k])) < 22; }); }
    });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); sw += dt; var y0 = Y(0);
      c.fillStyle = "rgba(56,189,248,.28)"; c.fillRect(0, y0, W, H - y0);
      c.strokeStyle = "#0284c7"; c.lineWidth = 3; c.beginPath(); for (var x = 0; x <= W; x += 8) c.lineTo(x, y0 + Math.sin(x / 18 + sw * 2) * 2); c.stroke();
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(40, 12); c.lineTo(40, H - 12); c.stroke();
      for (var v = -8; v <= 8; v++) { c.lineWidth = v % 2 ? 1 : 2; c.beginPath(); c.moveTo(34, Y(v)); c.lineTo(46, Y(v)); c.stroke(); if (v % 2 === 0) K.txt(c, n(v), 22, Y(v), { s: 11, c: C.muted }); }
      K.txt(c, t("water = 0", "الماء = 0"), W - 8, y0 - 10, { s: 11, c: "#0284c7", a: "right" });
      [["A", "#f97316"], ["B", "#a855f7"]].forEach(function (q) {
        var fx = FX(q[0]), fy = Y(P[q[0]]), v = P[q[0]];
        c.fillStyle = v >= 0 ? "#16a34a" : "#dc2626"; c.fillRect(fx - 46, Math.min(fy, y0), 8, Math.abs(fy - y0));
        if (v) K.txt(c, "|" + n(v) + "| = " + n(Math.abs(v)), fx - 50, (fy + y0) / 2, { s: 12, c: v > 0 ? "#16a34a" : "#dc2626", a: "right" });
        c.beginPath(); c.ellipse(fx, fy, 24, 12, 0, 0, 7); c.fillStyle = q[1]; c.fill();
        c.beginPath(); c.moveTo(fx + 20, fy); c.lineTo(fx + 34, fy - 10); c.lineTo(fx + 34, fy + 10); c.closePath(); c.fill();
        K.dot(c, fx - 12, fy - 3, 3, "#fff"); K.txt(c, q[0], fx + 2, fy + 1, { s: 11, c: "#fff" });
      });
    });
  };

  /* =========================================================
     m6_tiles - algebra tiles expression builder with live value
     ========================================================= */
  L.m6_tiles = function (host, cfg, done) {
    host.innerHTML = hint(t("Add tiles with the buttons, tap a tile on the mat to remove it. Like tiles line up together. Slide x and y to see the value change.", "أضف البطاقات بالأزرار واضغط على بطاقة في اللوحة لحذفها، والبطاقات المتشابهة تصطف معًا، وحرّك x وy لترى القيمة تتغير."));
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.72 : 0.5, 320), cnt = { x: 0, y: 0, c: 0 }, xv = 2, yv = 3, hits = [];
    var ctl = el("sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row" style="flex-wrap:wrap"><button type="button" class="btn sm" data-k="x">+ x</button><button type="button" class="btn sm" data-k="y">+ y</button><button type="button" class="btn sm" data-k="c">+ 1</button><button type="button" class="btn sm ghost" data-k="z">' + t("Clear", "مسح") + "</button></div>" +
      L._slider("x", 0, 10, 1, xv, "") + L._slider("y", 0, 10, 1, yv, "");
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Build " + eq("5x + 3") + ".", "كوّن " + eq("5x + 3") + "."), t("Build " + eq("2x + 3y + 1") + ": two variables and a constant.", "كوّن " + eq("2x + 3y + 1") + ": متغيران وثابت."), t("Set x = 4 and build any expression whose value is 27.", "اجعل x = 4 وكوّن أي مقدار قيمته 27.")], done);
    var ins = ctl.querySelectorAll("input"), slv = ctl.querySelectorAll(".slv");
    ctl.querySelectorAll("button").forEach(function (b) { b.onclick = function () { var k = b.dataset.k; if (k === "z") cnt = { x: 0, y: 0, c: 0 }; else if (cnt[k] < 12) cnt[k]++; info(); }; });
    ins[0].oninput = function () { xv = +ins[0].value; info(); }; ins[1].oninput = function () { yv = +ins[1].value; info(); };
    function expr() { var p = []; if (cnt.x) p.push((cnt.x === 1 ? "" : cnt.x) + "x"); if (cnt.y) p.push((cnt.y === 1 ? "" : cnt.y) + "y"); if (cnt.c) p.push(String(cnt.c)); return p.length ? p.join(" + ") : "0"; }
    function info() {
      slv[0].textContent = n(xv); slv[1].textContent = n(yv);
      var val = cnt.x * xv + cnt.y * yv + cnt.c, terms = (cnt.x ? 1 : 0) + (cnt.y ? 1 : 0) + (cnt.c ? 1 : 0), co = [];
      if (cnt.x) co.push(cnt.x); if (cnt.y) co.push(cnt.y);
      var sub = []; if (cnt.x) sub.push(cnt.x + " × " + xv); if (cnt.y) sub.push(cnt.y + " × " + yv); if (cnt.c) sub.push(String(cnt.c));
      out.innerHTML = "<b>" + eq(expr()) + "</b><span>" + t("terms: ", "الحدود: ") + n(terms) + "</span><span>" + t("coefficients: ", "المعاملات: ") + (co.length ? co.map(function (v) { return n(v); }).join(t(", ", "، ")) : "—") + "</span><span>" + t("constant: ", "الثابت: ") + (cnt.c ? n(cnt.c) : "—") + "</span><span>" + t("value: ", "القيمة: ") + eq((sub.length ? sub.join(" + ") : "0") + " = " + val) + "</span>";
      if (cnt.x === 5 && cnt.y === 0 && cnt.c === 3) tick(0);
      if (cnt.x === 2 && cnt.y === 3 && cnt.c === 1) tick(1);
      if (xv === 4 && val === 27) tick(2);
    }
    function tiles() {
      var W = S.W, H = S.H, rowH = (H - 24) / 3, x0 = 70, out2 = [];
      [["x", "#22c55e"], ["y", "#a855f7"], ["c", "#facc15"]].forEach(function (r, i) {
        var y = 12 + i * rowH, tw = r[0] === "c" ? Math.min(26, rowH * 0.5) : Math.min(24, (W - x0 - 20) / 13), th = r[0] === "c" ? tw : rowH * (r[0] === "x" ? 0.82 : 0.62);
        for (var k = 0; k < cnt[r[0]]; k++) out2.push({ x: x0 + k * (tw + 5), y: y + (rowH - th) / 2, w: tw, h: th, k: r[0], col: r[1] });
      });
      return out2;
    }
    S.drag({ down: function (p) { hits = tiles(); for (var i = 0; i < hits.length; i++) { var h = hits[i]; if (p.x > h.x && p.x < h.x + h.w && p.y > h.y && p.y < h.y + h.h) { cnt[h.k]--; info(); return false; } } return false; } });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); hits = [];
      K.rr(c, 4, 4, W - 8, H - 8, 14); c.fillStyle = C.bg; c.fill();
      tiles().forEach(function (h) {
        K.rr(c, h.x, h.y, h.w, h.h, 4); c.fillStyle = h.col; c.fill(); c.strokeStyle = "rgba(0,0,0,.3)"; c.lineWidth = 1; c.stroke();
        if (h.k !== "c") K.txt(c, h.k, h.x + h.w / 2, h.y + h.h / 2, { s: 12, c: "#fff" });
      });
      var rowH = (H - 24) / 3;
      [["x", t("x tiles", "بطاقات x")], ["y", t("y tiles", "بطاقات y")], ["c", t("units", "الوحدات")]].forEach(function (r, i) {
        var y = 12 + i * rowH;
        K.txt(c, r[1], 12, y + rowH / 2, { s: 11, c: C.muted, a: "left" });
        if (cnt[r[0]]) K.txt(c, "= " + (r[0] === "c" ? n(cnt.c) : n(cnt[r[0]]) + r[0]), W - 14, y + rowH / 2, { s: 14, c: C.ink, a: "right" });
      });
    });
  };

  /* =========================================================
     m6_ops - order of operations stepper: tap the operation that comes next
     ========================================================= */
  L.m6_ops = function (host, cfg, done) {
    host.innerHTML = hint(t("Tap the operation sign that must be done NEXT. The expression collapses one step at a time. For a letter, tap it to substitute its value.", "اضغط على علامة العملية التي يجب إجراؤها الآن، فيُختصر المقدار خطوة خطوة، وإذا ظهر حرف فاضغط عليه لتعوّض بقيمته.")) + '<div class="seg" id="opx"></div>';
    var S = K.make(host, 0.5, 320), EX = [[36, "−", 19, "+", 4, "÷", 2], [8, "+", 2, "×", "(", 6, "−", 2, ")", "÷", 2, "^", 3], [7, "+", 6, "×", "(", "t", "^", 2, "−", 3, ")"]];
    var xi = 0, tk = [], hist = [], items = [], miss = 0, flash = null, fl = 0;
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Simplify " + eq("36 − 19 + 4 ÷ 2") + ".", "بسّط " + eq("36 − 19 + 4 ÷ 2") + "."), t("Simplify " + eq("8 + 2(6 − 2) ÷ 2³") + ".", "بسّط " + eq("8 + 2(6 − 2) ÷ 2³") + "."), t("Evaluate " + eq("7 + 6(t² − 3)") + " for t = 4.", "أوجد قيمة " + eq("7 + 6(t² − 3)") + " عندما t = 4.")], done);
    function str(a) { var s = ""; for (var i = 0; i < a.length; i++) { var v = a[i]; if (v === "^") { s += sup(a[i + 1]); i++; } else s += (s && v !== ")" && a[i - 1] !== "(" ? " " : "") + (typeof v === "number" ? F(v) : v); } return s; }
    function start() { tk = EX[xi].slice(); hist = []; miss = 0; info(); }
    function nextOp(a) {
      var ti = a.indexOf("t"); if (ti >= 0) return ti;
      var l = a.lastIndexOf("("), r = a.length, lo = 0, i;
      if (l >= 0) { r = a.indexOf(")", l); lo = l + 1; }
      for (i = lo; i < r; i++) if (a[i] === "^") return i;
      for (i = lo; i < r; i++) if (a[i] === "×" || a[i] === "÷") return i;
      for (i = lo; i < r; i++) if (a[i] === "+" || a[i] === "−") return i;
      return -1;
    }
    function why(a, k) {
      var op = a[k], inP = a.lastIndexOf("(") >= 0 && k > a.lastIndexOf("(");
      if (op === "t") return t("First substitute the value of t.", "أولًا عوّض بقيمة t.");
      if (inP) return t("Work inside the parentheses first.", "احسب ما داخل الأقواس أولًا.");
      if (op === "^") return t("Exponents come before × ÷ + −.", "الأسس قبل × ÷ + −.");
      if (op === "×" || op === "÷") return t("Multiply or divide before adding or subtracting, from left to right.", "الضرب أو القسمة قبل الجمع أو الطرح، من اليسار إلى اليمين.");
      return t("Add and subtract from left to right.", "الجمع والطرح من اليسار إلى اليمين.");
    }
    function apply(k) {
      hist.push(str(tk));
      if (tk[k] === "t") tk[k] = 4;
      else {
        var a = tk[k - 1], b = tk[k + 1], o = tk[k], r = o === "+" ? a + b : o === "−" ? a - b : o === "×" ? a * b : o === "÷" ? a / b : Math.pow(a, b);
        tk.splice(k - 1, 3, Math.round(r * 1e6) / 1e6);
      }
      for (var i = 0; i + 2 < tk.length; i++) if (tk[i] === "(" && typeof tk[i + 1] === "number" && tk[i + 2] === ")") tk.splice(i, 3, tk[i + 1]);
      if (tk.length === 1) { hist.push(str(tk)); tick(xi); E.speak(t("The answer is " + F(tk[0]), "الناتج " + tk[0])); }
      info();
    }
    function info() {
      out.innerHTML = (tk.length === 1 ? '<b class="ok-t">✔ ' + eq(str(EX[xi]).replace("t", "t") + (xi === 2 ? " (t = 4)" : "") + " = " + F(tk[0])) + "</b>" : "<span>" + t("Next step: tap a sign", "الخطوة التالية: اضغط على علامة") + "</span>") + "<span>" + t("wrong taps: ", "ضغطات خاطئة: ") + n(miss) + "</span>";
    }
    K.seg(host, "#opx", [["0", "①"], ["1", "②"], ["2", "③"]], "0", function (v) { xi = +v; start(); });
    S.drag({
      down: function (p) {
        if (tk.length === 1) return false;
        lay();
        for (var j = 0; j < items.length; j++) {
          var it = items[j];
          if (p.x > it.x - 4 && p.x < it.x + it.w + 4 && p.y > it.y - 30 && p.y < it.y + 30) {
            if (it.hit < 0) { E.toast(t("Tap an operation sign, not a number.", "اضغط على علامة عملية لا على عدد.")); return false; }
            var k = nextOp(tk);
            if (it.hit === k) { flash = null; apply(k); }
            else { miss++; flash = it; fl = 0.6; E.toast("✖ " + why(tk, k)); info(); }
            return false;
          }
        }
        return false;
      }
    });
    start();
    function lay() {
      var c = S.ctx, W = S.W, H = S.H, fs = Math.min(30, W / 15), y = H * 0.62, list = [], i, tot = 0;
      for (i = 0; i < tk.length; i++) {
        var v = tk[i];
        if (v === "^") { list.push({ hit: i, s: String(tk[i + 1]), sup: true }); i++; continue; }
        list.push({ hit: (typeof v === "number" || v === "(" || v === ")") ? -1 : i, s: typeof v === "number" ? F(v) : v, op: typeof v !== "number" && v !== "(" && v !== ")" });
      }
      for (var tries = 0; tries < 4; tries++) {
        tot = 0; list.forEach(function (it) { c.font = "800 " + (it.sup ? fs * 0.6 : fs) + "px Nunito, sans-serif"; it.w = c.measureText(it.s).width + (it.sup ? 4 : it.op ? 22 : 10); tot += it.w; });
        if (tot < W - 20) break; fs *= 0.85;
      }
      var x = (W - tot) / 2;
      list.forEach(function (it) { it.x = x; it.y = y; x += it.w; });
      items = list; return { fs: fs, y: y };
    }
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); fl = Math.max(0, fl - dt);
      var lr = lay(), fs = lr.fs, y = lr.y;
      items.forEach(function (it) {
        if (it.op || (it.sup && it.hit >= 0)) { K.rr(c, it.x + 1, it.y - fs * (it.sup ? 1.1 : 0.7), it.w - 2, fs * (it.sup ? 0.8 : 1.4), 8); c.fillStyle = flash && it.hit === flash.hit && fl > 0 ? "rgba(220,38,38,.25)" : "rgba(249,115,22,.14)"; c.fill(); }
        K.txt(c, it.s, it.x + it.w / 2, it.sup ? it.y - fs * 0.7 : it.y, { s: it.sup ? fs * 0.6 : fs, c: it.op || it.sup ? "#ea580c" : C.ink });
      });
      hist.slice(-3).forEach(function (h, j, arr) { K.txt(c, (j === arr.length - 1 && tk.length === 1 ? "" : "") + h, W / 2, y - fs * 1.6 - (arr.length - 1 - j) * fs * 0.95, { s: fs * 0.62, c: C.muted, w: 700 }); });
      if (xi === 2 && tk.indexOf("t") >= 0) K.txt(c, "t = 4", W - 12, 18, { s: 14, c: "#2563eb", a: "right" });
      var ladder = [t("( ) first", "( ) أولًا"), "x²", "× ÷", "+ −"];
      ladder.forEach(function (s, j) { K.txt(c, (j + 1) + ". " + s, 12, 16 + j * 17, { s: 11, c: C.muted, a: "left" }); });
    });
  };

  /* =========================================================
     m6_equiv - keep it level: test two expressions on a balance
     ========================================================= */
  L.m6_equiv = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a pair of expressions and slide x. The balance shows both values: level means equal for that x.", "اختر زوجًا من المقادير وحرّك x، والميزان يبين القيمتين: الاتزان يعني التساوي عند هذه القيمة.")) + '<div class="seg" id="eqp"></div>';
    var PR = [["3(2x + 1)", "6x + 3", function (x) { return 3 * (2 * x + 1); }, function (x) { return 6 * x + 3; }], ["x + 2x", "2(x + 2)", function (x) { return 3 * x; }, function (x) { return 2 * (x + 2); }], ["2(x + 1)", "2x + x", function (x) { return 2 * (x + 1); }, function (x) { return 3 * x; }], ["4x + 6", "3(x + 2)", function (x) { return 4 * x + 6; }, function (x) { return 3 * (x + 2); }]];
    var S = K.make(host, 0.5, 330), pi = 0, xv = 1, ang = 0, tests = [{}, {}, {}, {}];
    var ctl = el("sim-ctl", L._slider("x", 0, 10, 1, xv, "")); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Test " + eq("3(2x + 1)") + " and " + eq("6x + 3") + " with 3 different values of x.", "اختبر " + eq("3(2x + 1)") + " و" + eq("6x + 3") + " بثلاث قيم مختلفة لـx."), t("Find the only x that levels " + eq("2(x + 1)") + " and " + eq("2x + x") + ".", "أوجد قيمة x الوحيدة التي تجعل " + eq("2(x + 1)") + " و" + eq("2x + x") + " متزنين."), t("Find the only x that levels " + eq("4x + 6") + " and " + eq("3(x + 2)") + ".", "أوجد قيمة x الوحيدة التي تجعل " + eq("4x + 6") + " و" + eq("3(x + 2)") + " متزنين.")], done);
    var inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    inp.oninput = function () { xv = +inp.value; info(); };
    K.seg(host, "#eqp", PR.map(function (p, i) { return [String(i), '<span dir="ltr">' + p[0] + " | " + p[1] + "</span>"]; }), "0", function (v) { pi = +v; info(); });
    function info() {
      slv.textContent = n(xv);
      var p = PR[pi], a = p[2](xv), b = p[3](xv), lv = a === b; tests[pi][xv] = lv;
      var keys = Object.keys(tests[pi]).map(Number).sort(function (u, v) { return u - v; });
      out.innerHTML = "<b>" + eq(p[0] + " = " + a + (lv ? " = " : " ≠ ") + b + " = " + p[1]) + "</b><span>" + (lv ? '<b class="ok-t">' + t("level", "متزن") + "</b>" : '<b class="no-t">' + t("tips", "يميل") + "</b>") + "</span><span class=\"sub\">" + t("tested: ", "اختُبر: ") + keys.map(function (k) { return "x=" + k + (tests[pi][k] ? " ✓" : " ✗"); }).join("  ") + "</span>" +
        (keys.length >= 2 && keys.some(function (k) { return !tests[pi][k]; }) ? "<span>" + t("At least one test tips: NOT equivalent.", "اختبار واحد على الأقل يميل: غير متكافئين.") + "</span>" : keys.length >= 3 ? "<span>" + t("Level every time: equivalent (distributive property).", "متزن في كل مرة: متكافئان (خاصية التوزيع).") + "</span>" : "");
      if (pi === 0 && keys.length >= 3) tick(0);
      if (pi === 2 && xv === 2) tick(1);
      if (pi === 3 && xv === 0) tick(2);
    }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      var p = PR[pi], a = p[2](xv), b = p[3](xv), target = clamp((a - b) * 0.03, -0.32, 0.32); ang += (target - ang) * Math.min(1, dt * 6);
      var cx = W / 2, cy = H * 0.3, hl = Math.min(W * 0.34, 200), dx = Math.cos(ang) * hl, dy = Math.sin(ang) * hl;
      c.fillStyle = C.muted; c.beginPath(); c.moveTo(cx - 30, H - 10); c.lineTo(cx + 30, H - 10); c.lineTo(cx, H - 30); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 5; c.beginPath(); c.moveTo(cx, cy); c.lineTo(cx, H - 26); c.stroke();
      c.beginPath(); c.moveTo(cx - dx, cy + dy); c.lineTo(cx + dx, cy - dy); c.stroke();
      K.dot(c, cx, cy, 6, "#f97316");
      [[cx - dx, cy + dy, p[0], a, "#2563eb"], [cx + dx, cy - dy, p[1], b, "#db2777"]].forEach(function (q) {
        var pw = Math.min(140, W * 0.32), py = q[1] + 70;
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(q[0], q[1]); c.lineTo(q[0] - pw / 2, py); c.moveTo(q[0], q[1]); c.lineTo(q[0] + pw / 2, py); c.stroke();
        K.rr(c, q[0] - pw / 2, py, pw, 8, 4); c.fillStyle = C.muted; c.fill();
        K.rr(c, q[0] - pw / 2 + 8, py - 44, pw - 16, 40, 8); c.fillStyle = q[4]; c.fill();
        K.txt(c, q[2], q[0], py - 31, { s: 13, c: "#fff" }); K.txt(c, "= " + n(q[3]), q[0], py - 14, { s: 13, c: "#fff" });
      });
      K.txt(c, "x = " + n(xv), cx, 16, { s: 14, c: C.ink });
    });
  };

  /* =========================================================
     m6_balance - pan balance equations: remove cubes, split bags
     ========================================================= */
  L.m6_balance = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag a cube off a pan to remove it (or use the buttons). Keep the balance level: whatever you do to one pan, do to the other. Get the bag x alone.", "اسحب مكعبًا خارج الكفة لتزيله (أو استخدم الأزرار)، وحافظ على اتزان الميزان: ما تفعله بكفة افعله بالأخرى، حتى يبقى الكيس x وحده.")) + '<div class="seg" id="blq"></div>';
    var EQS = [{ s: "x + 8 = 17", a: 1, b: 8, c: 17 }, { s: "3x = 9", a: 3, b: 0, c: 9 }, { s: "6x = 18", a: 6, b: 0, c: 18 }, { s: "3 + x = 12", a: 1, b: 3, c: 12 }];
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.85 : 0.58, 380), qi = 0, st = null, ang = 0, cubes = [], drag = null;
    var ctl = el("sim-ctl", '<div class="btn-row" style="flex-wrap:wrap"><button type="button" class="btn sm" id="bl1">' + t("− 1 from both pans", "− 1 من الكفتين") + '</button><button type="button" class="btn sm" id="bl2"></button><button type="button" class="btn sm ghost" id="bl3">' + t("Reset", "إعادة") + "</button></div>"); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, EQS.map(function (q) { return t("Solve " + eq(q.s) + ".", "حل " + eq(q.s) + "."); }), done);
    function reset() { var q = EQS[qi]; st = { a: q.a, l: q.b, r: q.c, xv: (q.c - q.b) / q.a, split: false }; info(); }
    function diff() { return st.a * st.xv + st.l - st.r; }
    function form() { var L1 = (st.a === 1 ? "x" : st.a + "x") + (st.l ? " + " + st.l : ""); return L1 + " = " + st.r; }
    function info() {
      var d = diff(), b2 = ctl.querySelector("#bl2");
      b2.textContent = t("÷ " + st.a + " both sides", "÷ " + st.a + " للطرفين"); b2.disabled = st.a < 2;
      var solved = st.a === 1 && st.l === 0 && d === 0;
      out.innerHTML = "<b>" + eq(form()) + "</b>" + (d !== 0 ? '<b class="no-t">✖ ' + t("The balance tipped! Do the same to the other pan.", "مال الميزان! افعل الشيء نفسه بالكفة الأخرى.") + "</b>" : solved ? '<b class="ok-t">✔ ' + eq("x = " + st.r) + " · " + t("check: ", "التحقق: ") + eq(EQS[qi].s.replace("x", "(" + st.r + ")").replace(/^(\d+)\(/, "$1 × (") + " ✓") + "</b>" : '<span class="ok-t">' + t("Level", "متزن") + "</span>");
      if (solved) { tick(qi); E.speak(t("x equals " + st.r, "x تساوي " + st.r)); }
    }
    ctl.querySelector("#bl1").onclick = function () { if (st.l > 0 && st.r > 0) { st.l--; st.r--; info(); } else E.toast(t("The left pan has no cubes to remove.", "لا توجد مكعبات في الكفة اليسرى لإزالتها.")); };
    ctl.querySelector("#bl2").onclick = function () {
      if (st.a < 2) return;
      if (st.l !== 0) { E.toast(t("Remove the loose cubes from the x side first.", "أزل المكعبات المنفردة من جهة x أولًا.")); return; }
      if (st.r % st.a !== 0) { E.toast(t("The cubes do not split into equal groups.", "المكعبات لا تنقسم إلى مجموعات متساوية.")); return; }
      st.r = st.r / st.a; st.a = 1; info();
    };
    ctl.querySelector("#bl3").onclick = reset;
    K.seg(host, "#blq", EQS.map(function (q, i) { return [String(i), '<span dir="ltr">' + q.s + "</span>"]; }), "0", function (v) { qi = +v; reset(); });
    function geo() { var W = S.W, H = S.H, hl = Math.min(W * 0.32, 210), cx = W / 2, cy = H * 0.24, dx = Math.cos(ang) * hl, dy = Math.sin(ang) * hl, pw = Math.min(170, W * 0.4), hang = Math.max(90, H * 0.48); return { cx: cx, cy: cy, hang: hang, L: { x: cx - dx, y: cy + dy + hang }, R: { x: cx + dx, y: cy - dy + hang }, pw: pw }; }
    function panItems(side, g, live) {
      var P = side === "L" ? g.L : g.R, pw = g.pw, items = [], res = [];
      if (side === "L") for (var i = 0; i < st.a; i++) items.push("x");
      var units = side === "L" ? st.l : st.r; if (live && drag && drag.side === side) units--;
      for (var u = 0; u < units; u++) items.push("u");
      var cs = Math.min(22, (pw - 8) / 7), per = Math.floor((pw - 6) / (cs + 3)), bx = P.x - pw / 2 + 4;
      items.forEach(function (it, k) { var col = k % per, row = Math.floor(k / per); res.push({ k: it, x: bx + col * (cs + 3) + cs / 2, y: P.y - 4 - row * (cs + 3) - cs / 2, cs: cs, s: cs / 2 + 3, side: side }); });
      return res;
    }
    function cubeList() { var g = geo(); return panItems("L", g).concat(panItems("R", g)).filter(function (q) { return q.k === "u"; }); }
    S.drag({
      down: function (p) { cubes = cubeList(); for (var i = cubes.length - 1; i >= 0; i--) { var q = cubes[i]; if (Math.abs(p.x - q.x) < q.s && Math.abs(p.y - q.y) < q.s) { drag = { side: q.side, x: p.x, y: p.y, sx: p.x, sy: p.y, s: q.s }; return true; } } return false; },
      move: function (p) { if (drag) { drag.x = p.x; drag.y = p.y; } },
      up: function () {
        if (!drag) return; var g = geo(), pan = drag.side === "L" ? g.L : g.R;
        if (dist(drag.x, drag.y, drag.sx, drag.sy) > 50 || Math.abs(drag.x - pan.x) > g.pw * 0.6) { if (drag.side === "L") st.l--; else st.r--; info(); }
        drag = null;
      },
      hover: function (p) { return cubeList().some(function (q) { return Math.abs(p.x - q.x) < q.s && Math.abs(p.y - q.y) < q.s; }); }
    });
    reset();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      var target = clamp(-diff() * 0.04, -0.3, 0.3); ang += (target - ang) * Math.min(1, dt * 5);
      var g = geo(); cubes = [];
      c.fillStyle = C.muted; c.beginPath(); c.moveTo(g.cx - 34, H - 6); c.lineTo(g.cx + 34, H - 6); c.lineTo(g.cx, H - 30); c.fill();
      c.strokeStyle = C.ink; c.lineWidth = 6; c.beginPath(); c.moveTo(g.cx, g.cy); c.lineTo(g.cx, H - 26); c.stroke();
      c.beginPath(); c.moveTo(g.L.x, g.L.y - g.hang); c.lineTo(g.R.x, g.R.y - g.hang); c.stroke(); K.dot(c, g.cx, g.cy, 7, "#f97316");
      [["L", g.L], ["R", g.R]].forEach(function (q) {
        var P = q[1], pw = g.pw;
        c.strokeStyle = C.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(P.x, P.y - g.hang); c.lineTo(P.x - pw / 2, P.y); c.moveTo(P.x, P.y - g.hang); c.lineTo(P.x + pw / 2, P.y); c.stroke();
        K.rr(c, P.x - pw / 2, P.y, pw, 8, 4); c.fillStyle = C.ink; c.fill();
        panItems(q[0], g, true).forEach(function (it) {
          var x = it.x, y = it.y, cs = it.cs;
          if (it.k === "x") { K.rr(c, x - cs / 2, y - cs * 0.7, cs, cs * 1.2, 4); c.fillStyle = "#16a34a"; c.fill(); K.txt(c, "x", x, y - cs * 0.1, { s: cs * 0.7, c: "#fff" }); }
          else { K.rr(c, x - cs / 2 + 1, y - cs / 2 + 1, cs - 2, cs - 2, 3); c.fillStyle = "#facc15"; c.fill(); c.strokeStyle = "rgba(0,0,0,.3)"; c.lineWidth = 1; c.stroke(); }
        });
      });
      if (drag) { K.rr(c, drag.x - 9, drag.y - 9, 18, 18, 3); c.fillStyle = "#fb923c"; c.fill(); }
    });
  };
})();
/* ---------- Primary 6 maths simulations (part B): inequalities, variables, data, centre and spread ---------- */
(function () {
  "use strict";
  var E = window.EZ3, t = E.t, n = E.n, L = E.sciLabs, K = E.simKit, M = E.m6kit;
  var eq = M.eq, hint = M.hint, dist = M.dist, F = M.F, clamp = M.clamp, LOOP = M.LOOP, el = M.el, axis = M.axis;

  /* =========================================================
     m6_ineq - drag the endpoint, toggle open/closed, test values
     ========================================================= */
  L.m6_ineq = function (host, cfg, done) {
    host.innerHTML = hint(t("Drag the circle to move the endpoint. Tap the circle to make it open or closed. Choose the direction. Tap any other number on the line to test it.", "اسحب الدائرة لتحريك الطرف، واضغط عليها لتجعلها مفرغة أو مظللة، واختر الاتجاه، واضغط على أي عدد آخر على الخط لتختبره.")) + '<div class="seg" id="iqd"></div>';
    var S = K.make(host, 0.4, 260), a = 2, closed = false, dir = "right", drag = false, moved = false, test = null;
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Show " + eq("x > −1") + ".", "مثّل " + eq("x > −1") + "."), t("Show " + eq("x ≤ −6") + ".", "مثّل " + eq("x ≤ −6") + "."), t("Show " + eq("x < 4") + ".", "مثّل " + eq("x < 4") + "."), t("Test a number that is NOT a solution of your inequality.", "اختبر عددًا ليس حلًا لمتباينتك.")], done);
    function X(v) { return 30 + (v + 10) * (S.W - 60) / 20; }
    function sym() { return dir === "right" ? (closed ? "≥" : ">") : (closed ? "≤" : "<"); }
    function sat(v) { return dir === "right" ? (closed ? v >= a : v > a) : (closed ? v <= a : v < a); }
    function info() {
      var s = sym();
      out.innerHTML = "<b>" + eq("x " + s + " " + F(a)) + "</b><span>" + (closed ? t("closed circle: " + a + " is included", "دائرة مظللة: " + a + " داخل الحل") : t("open circle: " + a + " is not included", "دائرة مفرغة: " + a + " ليس داخل الحل")) + "</span>" +
        (test !== null ? "<span>" + t("Test ", "اختبار ") + eq(F(test)) + ": " + eq(F(test) + " " + s + " " + F(a)) + (sat(test) ? ' <b class="ok-t">✔ ' + t("solution", "حل") + "</b>" : ' <b class="no-t">✖ ' + t("not a solution", "ليس حلًا") + "</b>") + "</span>" : "");
      if (drag) return;
      if (a === -1 && dir === "right" && !closed) tick(0);
      if (a === -6 && dir === "left" && closed) tick(1);
      if (a === 4 && dir === "left" && !closed) tick(2);
    }
    K.seg(host, "#iqd", [["left", t("← less", "← أصغر")], ["right", t("greater →", "أكبر →")]], dir, function (v) { dir = v; test = null; info(); });
    S.drag({
      down: function (p) {
        var y = S.H * 0.5;
        if (Math.abs(p.x - X(a)) < 20 && Math.abs(p.y - y) < 30) { drag = true; moved = false; return true; }
        if (Math.abs(p.y - y) < 40) { var v = clamp(Math.round((p.x - 30) / (S.W - 60) * 20 - 10), -10, 10); test = v; info(); if (!sat(v)) tick(3); }
        return false;
      },
      move: function (p) { if (drag) { var v = clamp(Math.round((p.x - 30) / (S.W - 60) * 20 - 10), -10, 10); if (v !== a) { a = v; moved = true; test = null; info(); } } },
      up: function () { var was = drag; drag = false; if (was && !moved) closed = !closed; if (was) info(); },
      hover: function (p) { return Math.abs(p.x - X(a)) < 20; }
    });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); var y = H * 0.5, xa = X(a);
      axis(c, C, 30, W - 30, y, -10, 10, 1, W < 480 ? 2 : 1);
      var x2 = dir === "right" ? W - 14 : 14;
      c.strokeStyle = "#2563eb"; c.lineWidth = 7; c.beginPath(); c.moveTo(xa, y); c.lineTo(x2, y); c.stroke();
      c.fillStyle = "#2563eb"; c.beginPath(); var s = dir === "right" ? 1 : -1; c.moveTo(x2 + s * 8, y); c.lineTo(x2 - s * 8, y - 10); c.lineTo(x2 - s * 8, y + 10); c.fill();
      K.dot(c, xa, y, 11, closed ? "#2563eb" : C.card); c.strokeStyle = "#2563eb"; c.lineWidth = 3; c.beginPath(); c.arc(xa, y, 11, 0, 7); c.stroke();
      K.txt(c, "x " + sym() + " " + n(a), W / 2, 22, { s: 18, c: "#2563eb" });
      if (test !== null) { var xt = X(test); K.txt(c, sat(test) ? "✔" : "✖", xt, y - 30, { s: 18, c: sat(test) ? "#16a34a" : "#dc2626" }); c.strokeStyle = C.muted; c.lineWidth = 1; c.beginPath(); c.moveTo(xt, y - 20); c.lineTo(xt, y - 8); c.stroke(); }
    });
  };

  /* =========================================================
     m6_rides - amusement park: rides (independent) -> tickets (dependent)
     ========================================================= */
  L.m6_rides = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a ride, then slide the number of rides r. The tickets t follow the rule t = k × r. Watch the ticket pile and the graph.", "اختر لعبة ثم حرّك عدد المرات r، والتذاكر t تتبع القاعدة t = k × r. راقب كومة التذاكر والتمثيل البياني.")) + '<div class="seg" id="rdr"></div>';
    var RIDES = [["Ferris Wheel", "العجلة الدوارة", 3, "🎡"], ["Swing", "الأرجوحة", 4, "🎠"], ["Viking", "الفايكنج", 5, "⛵"], ["Rock N Roller", "روك آند رولر", 6, "🎢"], ["Scrambler", "السكرامبلر", 8, "🌀"]];
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.8 : 0.52, 340), ri = 3, r = 1, shown = 0, pts = {};
    var ctl = el("sim-ctl", L._slider(t("rides r", "عدد المرات r"), 0, 15, 1, r, "")); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Rock N Roller: how many tickets for 8 rides?", "روك آند رولر: كم تذكرة لـ8 مرات؟"), t("Viking (" + eq("t = 5r") + "): ride 15 times.", "الفايكنج (" + eq("t = 5r") + "): اركب 15 مرة."), t("Ferris Wheel: make the tickets exactly 36.", "العجلة الدوارة: اجعل التذاكر 36 بالضبط.")], done);
    var inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    inp.oninput = function () { r = +inp.value; info(); };
    K.seg(host, "#rdr", RIDES.map(function (x, i) { return [String(i), x[3] + " " + t(x[0], x[1])]; }), String(ri), function (v) { ri = +v; pts = {}; info(); });
    function info() {
      var k = RIDES[ri][2], tt = k * r; slv.textContent = n(r); pts[r] = tt;
      out.innerHTML = "<b>" + eq("t = " + k + "r = " + k + " × " + r + " = " + tt) + "</b><span>" + t("r = rides (independent) → t = tickets (dependent)", "r = عدد المرات (مستقل) ← t = التذاكر (تابع)") + "</span>";
      if (ri === 3 && r === 8) tick(0);
      if (ri === 2 && r === 15) tick(1);
      if (ri === 0 && tt === 36) tick(2);
    }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      var k = RIDES[ri][2], tt = k * r; shown += (tt - shown) * Math.min(1, dt * 6);
      var lw = W * 0.52, cols = 15, ts = Math.min((lw - 20) / cols, (H - 70) / 8.2), m = Math.round(shown);
      K.txt(c, RIDES[ri][3] + " × " + n(r), lw / 2, 18, { s: 16, c: C.ink });
      for (var i = 0; i < m; i++) { var x = 10 + (i % cols) * ts, y = 40 + Math.floor(i / cols) * ts * 1.05; K.rr(c, x + 1, y + 1, ts - 2, ts * 0.7, 3); c.fillStyle = i < k ? "#f97316" : "#fdba74"; c.fill(); }
      K.txt(c, n(tt) + " " + t("tickets", "تذكرة"), lw / 2, H - 12, { s: 14, c: "#ea580c" });
      var gx = lw + 30, gy = H - 30, gw = W - gx - 14, gh = H - 50, tmax = 8 * 15;
      c.strokeStyle = C.ink; c.lineWidth = 1.5; c.beginPath(); c.moveTo(gx, 14); c.lineTo(gx, gy); c.lineTo(gx + gw, gy); c.stroke();
      K.txt(c, "t", gx - 10, 16, { s: 12, c: C.muted }); K.txt(c, "r", gx + gw, gy + 14, { s: 12, c: C.muted });
      [0, 5, 10, 15].forEach(function (v) { K.txt(c, n(v), gx + gw * v / 15, gy + 14, { s: 10, c: C.muted }); });
      [0, 40, 80, 120].forEach(function (v) { K.txt(c, n(v), gx - 14, gy - gh * v / tmax, { s: 10, c: C.muted }); });
      c.strokeStyle = "rgba(249,115,22,.5)"; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx + gw, gy - gh * k * 15 / tmax); c.stroke(); c.setLineDash([]);
      Object.keys(pts).forEach(function (rr) { K.dot(c, gx + gw * rr / 15, gy - gh * pts[rr] / tmax, 4, "#2563eb"); });
      K.dot(c, gx + gw * r / 15, gy - gh * tt / tmax, 7, "#f97316", "#fff");
    });
  };

  /* =========================================================
     m6_graph - "What's the rule?" machine + coordinate plane
     ========================================================= */
  L.m6_graph = function (host, cfg, done) {
    host.innerHTML = hint(t("Choose a rule, then drag the orange input point along the x-axis. Let go to plot (x, y). For the mystery rule, test inputs and then pick the rule.", "اختر قاعدة ثم اسحب نقطة المدخل البرتقالية على محور السينات، واتركها لتمثّل (x، y). في القاعدة الغامضة اختبر مدخلات ثم اختر القاعدة.")) + '<div class="seg" id="grr"></div>';
    var RU = [["y = 3x", function (x) { return 3 * x; }], ["y = x + 6", function (x) { return x + 6; }], ["y = 1.25x", function (x) { return 1.25 * x; }], ["y = x − 3", function (x) { return x - 3; }], ["?", function (x) { return 3 * x + 4; }]];
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.95 : 0.62, 400), ri = 2, xv = 2, drag = false, pts = [[], [], [], [], []], solved = false;
    var ctl = el("sim-ctl", '<div class="btn-row gr-m" style="flex-wrap:wrap;display:none"></div>'); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Ring Toss " + eq("y = 1.25x") + ": plot 4 points.", "رمي الحلقات " + eq("y = 1.25x") + ": مثّل 4 نقاط."), t("Rides " + eq("y = x − 3") + ": plot the point for x = 5.", "الألعاب " + eq("y = x − 3") + ": مثّل النقطة عند x = 5."), t("Mystery rule: test inputs, then choose the rule.", "القاعدة الغامضة: اختبر مدخلات ثم اختر القاعدة.")], done);
    var mrow = ctl.querySelector(".gr-m");
    mrow.innerHTML = ["y = x + 6", "y = 3x + 4", "y = 7x"].map(function (s) { return '<button type="button" class="btn sm" data-s="' + s + '"><span dir="ltr">' + s + "</span></button>"; }).join("");
    mrow.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        if (pts[4].length < 2) { E.toast(t("Test at least two inputs first.", "اختبر مدخلين على الأقل أولًا.")); return; }
        if (b.dataset.s === "y = 3x + 4") { solved = true; tick(2); E.speak(t("Yes! Multiply by 3 and add 4.", "صحيح! اضرب في 3 ثم أضف 4.")); info(); }
        else E.toast(t("Check it against every point you plotted.", "تحقق منها مع كل نقطة مثّلتها."));
      };
    });
    K.seg(host, "#grr", RU.map(function (r, i) { return [String(i), '<span dir="ltr">' + r[0] + "</span>"]; }), String(ri), function (v) { ri = +v; mrow.style.display = ri !== 4 ? "none" : ""; info(); });
    function ymax() { return ri === 4 ? 32 : ri === 0 ? 24 : 16; }
    function geo() { return { ox: 40, oy: S.H - 28, w: S.W * 0.62 - 50, h: S.H - 44 }; }
    function plot() {
      var y = RU[ri][1](xv), list = pts[ri];
      if (y < 0) { E.toast(t("y would be negative: you cannot go on a negative number of rides.", "y ستكون سالبة: لا يمكن ركوب عدد سالب من الألعاب.")); return; }
      if (!list.some(function (p) { return p[0] === xv; })) list.push([xv, y]);
      list.sort(function (a, b) { return a[0] - b[0]; });
      if (ri === 2 && list.length >= 4) tick(0);
      if (ri === 3 && xv === 5) tick(1);
      info();
    }
    function info() {
      var y = RU[ri][1](xv), name = ri === 4 && !solved ? "y = ?" : ri === 4 ? "y = 3x + 4" : RU[ri][0];
      out.innerHTML = "<b>" + eq(name) + "</b><span>" + t("input ", "المدخل ") + eq("x = " + xv) + " → " + t("output ", "المخرج ") + eq("y = " + (ri === 4 && !solved ? "?" : F(y))) + "</span><span class=\"sub\">" + pts[ri].map(function (p) { return eq("(" + p[0] + ", " + F(p[1]) + ")"); }).join(" ") + "</span>";
    }
    S.drag({
      down: function (p) { var g = geo(), X = g.ox + xv * g.w / 8; if (Math.abs(p.x - X) < 22 && p.y > g.oy - 30) { drag = true; return true; } if (p.y > g.oy - 16 && p.x > g.ox - 10 && p.x < g.ox + g.w + 10) { xv = clamp(Math.round((p.x - g.ox) / g.w * 8), 0, 8); plot(); } return false; },
      move: function (p) { if (drag) { var g = geo(), v = clamp(Math.round((p.x - g.ox) / g.w * 8), 0, 8); if (v !== xv) { xv = v; info(); } } },
      up: function () { if (drag) { drag = false; plot(); } },
      hover: function (p) { var g = geo(); return Math.abs(p.x - (g.ox + xv * g.w / 8)) < 22 && p.y > g.oy - 30; }
    });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); var g = geo(), ym = ymax(), Y = function (v) { return g.oy - v * g.h / ym; }, X = function (v) { return g.ox + v * g.w / 8; };
      c.strokeStyle = C.line; c.lineWidth = 1;
      for (var i = 0; i <= 8; i++) { c.beginPath(); c.moveTo(X(i), g.oy); c.lineTo(X(i), g.oy - g.h); c.stroke(); K.txt(c, n(i), X(i), g.oy + 14, { s: 10, c: C.muted }); }
      for (var j = 0; j <= ym; j += ym / 4) { c.beginPath(); c.moveTo(g.ox, Y(j)); c.lineTo(g.ox + g.w, Y(j)); c.stroke(); K.txt(c, n(j), g.ox - 16, Y(j), { s: 10, c: C.muted }); }
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(g.ox, g.oy - g.h); c.lineTo(g.ox, g.oy); c.lineTo(g.ox + g.w, g.oy); c.stroke();
      K.txt(c, "x", g.ox + g.w + 10, g.oy, { s: 13, c: C.ink }); K.txt(c, "y", g.ox, g.oy - g.h - 8, { s: 13, c: C.ink });
      pts[ri].forEach(function (p) { K.dot(c, X(p[0]), Y(p[1]), 6, "#2563eb"); });
      var y = RU[ri][1](xv);
      if (y >= 0 && y <= ym) { c.strokeStyle = "#f97316"; c.setLineDash([4, 4]); c.beginPath(); c.moveTo(X(xv), g.oy); c.lineTo(X(xv), Y(y)); c.lineTo(g.ox, Y(y)); c.stroke(); c.setLineDash([]); }
      K.dot(c, X(xv), g.oy, 10, "#f97316", "#fff");
      var mx = W * 0.62 + 6, mw = W - mx - 8, my = H * 0.22;
      K.rr(c, mx, my, mw, H * 0.5, 14); c.fillStyle = "#7c3aed"; c.fill();
      K.txt(c, t("rule", "القاعدة"), mx + mw / 2, my + 20, { s: 12, c: "#e9d5ff" });
      K.txt(c, ri === 4 && !solved ? "?" : ri === 4 ? "×3, +4" : RU[ri][0], mx + mw / 2, my + H * 0.18, { s: Math.min(18, mw / 6), c: "#fff" });
      K.txt(c, n(xv) + " → " + (ri === 4 && !solved ? "?" : n(y)), mx + mw / 2, my + H * 0.36, { s: Math.min(18, mw / 6), c: "#fde68a" });
    });
  };

  /* =========================================================
     m6_statq - ask the class: statistical or not? numerical or categorical?
     ========================================================= */
  L.m6_statq = function (host, cfg, done) {
    host.innerHTML = hint(t("Pick a question and ask the class of 20. Watch the answers fly into a graph. Then classify the question.", "اختر سؤالًا واسأل فصلًا من 20 طالبًا، وراقب الإجابات تطير إلى التمثيل، ثم صنّف السؤال."));
    var QS = [
      { q: ["How many siblings do the students have?", "كم أخًا لكل طالب؟"], st: true, num: true, vals: [0, 1, 1, 2, 1, 3, 0, 2, 1, 2, 4, 1, 0, 2, 1, 3, 2, 1, 1, 2] },
      { q: ["What are the students' favourite colours?", "ما الألوان المفضلة للطلاب؟"], st: true, num: false, cats: [[t("red", "أحمر"), "#ef4444"], [t("blue", "أزرق"), "#3b82f6"], [t("green", "أخضر"), "#22c55e"], [t("yellow", "أصفر"), "#eab308"]], vals: [0, 1, 1, 2, 3, 1, 0, 1, 2, 1, 0, 3, 1, 2, 1, 0, 1, 2, 1, 3] },
      { q: ["How many students are in our class?", "كم عدد طلاب فصلنا؟"], st: false, num: true, vals: [20] },
      { q: ["What is the name of our school?", "ما اسم مدرستنا؟"], st: false, num: false, vals: [0] },
      { q: ["How many pets do the students have?", "كم حيوانًا أليفًا لدى الطلاب؟"], st: true, num: true, vals: [0, 0, 1, 0, 2, 1, 0, 3, 0, 1, 0, 0, 2, 1, 0, 1, 0, 4, 0, 1] },
      { q: ["What types of movies do students like best?", "ما أنواع الأفلام التي يفضلها الطلاب؟"], st: true, num: false, cats: [[t("comedy", "كوميدي"), "#f97316"], [t("cartoon", "كرتون"), "#a855f7"], [t("action", "أكشن"), "#ef4444"], [t("science", "علمي"), "#14b8a6"]], vals: [1, 1, 0, 2, 1, 3, 1, 0, 1, 2, 1, 1, 0, 3, 2, 1, 0, 1, 2, 1] }];
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.85 : 0.56, 360), qi = 0, flyers = [], landed = [], asked = {}, good = {};
    var ctl = el("sim-ctl"); host.appendChild(ctl);
    ctl.innerHTML = '<div class="btn-row" style="flex-wrap:wrap"><button type="button" class="btn sm" id="sqp">◀</button><b class="sq-q" style="flex:1;min-width:180px;text-align:center"></b><button type="button" class="btn sm" id="sqn">▶</button></div>' +
      '<div class="btn-row" style="flex-wrap:wrap;justify-content:center"><button type="button" class="btn sm primary" id="sqa">' + t("Ask the class", "اسأل الفصل") + "</button></div>" +
      '<div class="btn-row sq-c" style="flex-wrap:wrap;justify-content:center;display:none"><button type="button" class="btn sm" data-c="st">' + t("Statistical", "إحصائي") + '</button><button type="button" class="btn sm" data-c="ns">' + t("Not statistical", "غير إحصائي") + '</button><button type="button" class="btn sm" data-c="nu">' + t("Numerical data", "بيانات عددية") + '</button><button type="button" class="btn sm" data-c="ca">' + t("Categorical data", "بيانات وصفية") + "</button></div>";
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Ask a statistical question with numerical answers.", "اسأل سؤالًا إحصائيًا إجاباته عددية."), t("Ask a statistical question with categorical answers.", "اسأل سؤالًا إحصائيًا إجاباته وصفية."), t("Classify 4 questions correctly.", "صنّف 4 أسئلة تصنيفًا صحيحًا.")], done);
    var cRow = ctl.querySelector(".sq-c"), pick = {};
    function show() { ctl.querySelector(".sq-q").textContent = t(QS[qi].q[0], QS[qi].q[1]); flyers = []; landed = []; pick = {}; cRow.style.display = "none"; cRow.querySelectorAll("button").forEach(function (b) { b.classList.remove("primary"); }); out.innerHTML = '<span class="sub">' + n(qi + 1) + " / " + n(QS.length) + "</span>"; }
    ctl.querySelector("#sqp").onclick = function () { qi = (qi + QS.length - 1) % QS.length; show(); };
    ctl.querySelector("#sqn").onclick = function () { qi = (qi + 1) % QS.length; show(); };
    ctl.querySelector("#sqa").onclick = function () {
      var Q = QS[qi]; flyers = []; landed = [];
      for (var i = 0; i < 20; i++) flyers.push({ i: i, v: Q.vals[Q.st ? i : 0], d: i * 0.06, p: 0 });
      asked[qi] = 1; cRow.style.display = "";
      if (Q.st && Q.num) tick(0); if (Q.st && !Q.num) tick(1);
    };
    cRow.querySelectorAll("button").forEach(function (b) {
      b.onclick = function () {
        var Q = QS[qi], c = b.dataset.c;
        var ok = c === "st" ? Q.st : c === "ns" ? !Q.st : c === "nu" ? (Q.st && Q.num) : (Q.st && !Q.num);
        if (!Q.st && (c === "nu" || c === "ca")) { E.toast(t("Only one answer came back, so first decide: is it statistical?", "عادت إجابة واحدة فقط، فقرر أولًا: هل هو إحصائي؟")); return; }
        if (!ok) { E.toast("✖ " + (c === "st" || c === "ns" ? t("Look at the answers: did they vary?", "انظر إلى الإجابات: هل اختلفت؟") : t("Are the answers numbers or names?", "هل الإجابات أعداد أم أسماء؟"))); return; }
        b.classList.add("primary"); pick[c] = 1;
        var full = Q.st ? (pick.st && (pick.nu || pick.ca)) : pick.ns;
        if (full && !good[qi]) { good[qi] = 1; E.speak(t("Correct!", "صحيح!")); }
        var k = Object.keys(good).length;
        out.innerHTML = "<span>" + t("Correctly classified: ", "صُنّف صحيحًا: ") + n(k) + " / " + n(4) + "</span>";
        if (k >= 4) tick(2);
      };
    });
    show();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); var Q = QS[qi], sx = W * 0.3, sw = 18;
      for (var i = 0; i < 20; i++) { var x = 14 + (i % 5) * (sx / 5), y = 20 + Math.floor(i / 5) * 32; K.dot(c, x + 8, y, 8, "#94a3b8"); K.rr(c, x + 1, y + 8, 14, 12, 4); c.fillStyle = "#94a3b8"; c.fill(); }
      var gx = sx + 30, gw = W - gx - 14, gy = H - 34;
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(gx, gy); c.lineTo(gx + gw, gy); c.stroke();
      function slot(v) {
        if (!Q.st) return { x: gx + gw / 2, lab: Q.num ? n(20) : t("our school", "مدرستنا") };
        if (Q.num) { var mx = 5; return { x: gx + (v + 0.5) * gw / mx, lab: n(v) }; }
        return { x: gx + (v + 0.5) * gw / 4, lab: Q.cats[v][0] };
      }
      if (Q.st) { var nb = Q.num ? 5 : 4; for (var b = 0; b < nb; b++) { var sl = slot(b); K.txt(c, sl.lab, sl.x, gy + 16, { s: 11, c: C.muted }); } }
      else K.txt(c, slot(0).lab, gx + gw / 2, gy + 16, { s: 12, c: C.muted });
      var stack = {};
      flyers.forEach(function (f) {
        if (f.d > 0) { f.d -= dt; return; }
        f.p = Math.min(1, f.p + dt * 1.8);
        var s = slot(f.v), h = stack[f.v] = (stack[f.v] || 0) + 1, sx0 = 22 + (f.i % 5) * (sx / 5), sy0 = 20 + Math.floor(f.i / 5) * 32, tx = s.x, ty = gy - 10 - (h - 1) * (Q.st ? 15 : 9);
        var e = 1 - Math.pow(1 - f.p, 3), x = sx0 + (tx - sx0) * e, y = sy0 + (ty - sy0) * e - Math.sin(e * Math.PI) * 40;
        if (Q.num || !Q.st) K.dot(c, x, y, Q.st ? 6 : 4, Q.st ? "#2563eb" : "#dc2626");
        else { K.rr(c, x - 14, y - 6, 28, 12, 2); c.fillStyle = Q.cats[f.v][1]; c.fill(); }
      });
      if (flyers.length && flyers.every(function (f) { return f.p >= 1; })) K.txt(c, Q.st ? t("many different answers", "إجابات مختلفة كثيرة") : t("everyone gives the same answer", "الجميع يعطي الإجابة نفسها"), gx + gw / 2, 16, { s: 13, c: Q.st ? "#16a34a" : "#dc2626" });
    });
  };

  /* =========================================================
     m6_hist - roll two number cubes, build a histogram with chosen intervals
     ========================================================= */
  L.m6_hist = function (host, cfg, done) {
    host.innerHTML = hint(t("Roll two number cubes and record the sum. Change the interval width and watch the histogram regroup. The bars always touch.", "ارمِ مكعبي أرقام وسجّل المجموع، وغيّر طول الفئة وراقب المدرج التكراري يُعاد تجميعه، والأعمدة متلاصقة دائمًا."));
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.8 : 0.55, 360), sums = [], last = [3, 4], w = 1, roll = 0;
    var ctl = el("sim-ctl", '<div class="btn-row" style="flex-wrap:wrap"><button type="button" class="btn sm primary" id="hr1">🎲 ' + t("Roll 1", "ارمِ مرة") + '</button><button type="button" class="btn sm" id="hr10">🎲 × ' + n(10) + '</button><button type="button" class="btn sm" id="hr50">🎲 × ' + n(50) + '</button><button type="button" class="btn sm ghost" id="hrc">' + t("Clear", "مسح") + "</button></div>" + L._slider(t("interval width", "طول الفئة"), 1, 3, 1, w, "")); host.appendChild(ctl);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Roll at least 30 times.", "ارمِ 30 مرة على الأقل."), t("Change the interval width to 2: intervals 2-3, 4-5, ...", "غيّر طول الفئة إلى 2: الفئات 2-3، 4-5، ..."), t("Roll 100 times. Which interval is the tallest?", "ارمِ 100 مرة. أي فئة هي الأطول؟")], done);
    var inp = ctl.querySelector("input"), slv = ctl.querySelector(".slv");
    function d6() { return 1 + Math.floor(Math.random() * 6); }
    function go(k) { for (var i = 0; i < k; i++) { last = [d6(), d6()]; sums.push(last[0] + last[1]); } roll = 0.35; info(); }
    ctl.querySelector("#hr1").onclick = function () { go(1); }; ctl.querySelector("#hr10").onclick = function () { go(10); }; ctl.querySelector("#hr50").onclick = function () { go(50); };
    ctl.querySelector("#hrc").onclick = function () { sums = []; info(); };
    inp.oninput = function () { w = +inp.value; info(); };
    function bins() { var b = []; for (var s = 2; s <= 12; s += w) b.push({ a: s, z: s + w - 1, f: 0 }); sums.forEach(function (v) { b[Math.floor((v - 2) / w)].f++; }); return b; }
    function lab(b) { return w === 1 ? String(b.a) : b.a + "-" + b.z; }
    function info() {
      slv.textContent = n(w); var b = bins(), top = b.reduce(function (m, x) { return x.f > m.f ? x : m; }, b[0]);
      out.innerHTML = "<span>" + t("rolls: ", "الرميات: ") + n(sums.length) + "</span><span>" + t("last sum: ", "آخر مجموع: ") + eq(last[0] + " + " + last[1] + " = " + (last[0] + last[1])) + "</span>" + (sums.length ? "<span>" + t("tallest interval: ", "الفئة الأطول: ") + eq(lab(top)) + "</span>" : "");
      if (sums.length >= 30) tick(0);
      if (w === 2 && sums.length >= 10) tick(1);
      if (sums.length >= 100) tick(2);
    }
    function die(c, x, y, s, v) {
      K.rr(c, x, y, s, s, 8); c.fillStyle = "#fff"; c.fill(); c.strokeStyle = "#334155"; c.lineWidth = 2; c.stroke();
      var P = { 1: [[0.5, 0.5]], 2: [[0.25, 0.25], [0.75, 0.75]], 3: [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]], 4: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]], 5: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]], 6: [[0.25, 0.22], [0.75, 0.22], [0.25, 0.5], [0.75, 0.5], [0.25, 0.78], [0.75, 0.78]] };
      P[v].forEach(function (q) { K.dot(c, x + q[0] * s, y + q[1] * s, s * 0.09, "#0f172a"); });
    }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); roll = Math.max(0, roll - dt);
      var ds = Math.min(46, W * 0.1), wob = roll > 0 ? Math.sin(roll * 60) * 4 : 0;
      die(c, 12, 14 + wob, ds, roll > 0 ? d6() : last[0]); die(c, 20 + ds, 14 - wob, ds, roll > 0 ? d6() : last[1]);
      var b = bins(), gx = 40, gy = H - 30, gw = W - gx - 14, gh = H - 90, fmax = Math.max(4, b.reduce(function (m, x) { return Math.max(m, x.f); }, 0)), bw = gw / b.length;
      c.strokeStyle = C.ink; c.lineWidth = 2; c.beginPath(); c.moveTo(gx, gy - gh - 6); c.lineTo(gx, gy); c.lineTo(gx + gw, gy); c.stroke();
      b.forEach(function (x, i) {
        var h = gh * x.f / fmax; c.fillStyle = "#60a5fa"; c.fillRect(gx + i * bw, gy - h, bw, h); c.strokeStyle = "#1e3a8a"; c.lineWidth = 1; c.strokeRect(gx + i * bw, gy - h, bw, h);
        if (x.f) K.txt(c, n(x.f), gx + (i + 0.5) * bw, gy - h - 9, { s: 11, c: C.ink });
        K.txt(c, E.d(lab(x)), gx + (i + 0.5) * bw, gy + 14, { s: 11, c: C.muted });
      });
      K.txt(c, t("frequency", "التكرار"), gx + 4, gy - gh - 14, { s: 11, c: C.muted, a: "left" });
      K.txt(c, t("sum of the two cubes", "مجموع المكعبين"), W - 14, 24, { s: 12, c: C.muted, a: "right" });
    });
  };

  /* shared: dot plot with draggable dots (box plot, outlier) */
  function dotPlot(S, data, lo, hi, onChange) {
    var drag = -1, o = { y: function () { return S.H * 0.46; }, busy: function () { return drag >= 0; } };
    o.X = function (v) { return 30 + (v - lo) * (S.W - 60) / (hi - lo); };
    o.pos = function () { var cnt = {}, ps = []; data.forEach(function (v, i) { if (i === drag) return; cnt[v] = (cnt[v] || 0) + 1; ps[i] = { x: o.X(v), y: o.y() - 10 - (cnt[v] - 1) * 15 }; }); return ps; };
    S.drag({
      down: function (p) { var ps = o.pos(); for (var i = data.length - 1; i >= 0; i--) if (ps[i] && dist(p.x, p.y, ps[i].x, ps[i].y) < 11) { drag = i; o.px = p.x; o.py = p.y; return true; } return false; },
      move: function (p) { if (drag >= 0) { o.px = p.x; o.py = p.y; var v = clamp(Math.round(lo + (p.x - 30) / (S.W - 60) * (hi - lo)), lo, hi); if (v !== data[drag]) { data[drag] = v; onChange(); } } },
      up: function () { drag = -1; onChange(true); },
      hover: function (p) { var ps = o.pos(); return ps.some(function (q) { return q && dist(p.x, p.y, q.x, q.y) < 11; }); }
    });
    o.draw = function (c, C, col) {
      axis(c, C, 30, S.W - 30, o.y(), lo, hi, 1, S.W < 480 && hi - lo > 10 ? 2 : 1);
      var ps = o.pos(); ps.forEach(function (q, i) { if (q) K.dot(c, q.x, q.y, 6.5, col ? col(data[i]) : "#2563eb"); });
      if (drag >= 0) K.dot(c, o.px, o.py, 8, "#f97316", "#fff");
    };
    return o;
  }
  function stats(d) {
    var s = d.slice().sort(function (a, b) { return a - b; }), N = s.length, med = function (a) { var m = a.length; return m % 2 ? a[(m - 1) / 2] : (a[m / 2 - 1] + a[m / 2]) / 2; };
    var lowH = s.slice(0, Math.floor(N / 2)), upH = s.slice(Math.ceil(N / 2)), sum = s.reduce(function (a, b) { return a + b; }, 0), cnt = {}, mode = s[0];
    s.forEach(function (v) { cnt[v] = (cnt[v] || 0) + 1; if (cnt[v] > cnt[mode]) mode = v; });
    return { s: s, min: s[0], max: s[N - 1], med: med(s), q1: med(lowH), q3: med(upH), mean: sum / N, sum: sum, mode: mode, modeN: cnt[mode] };
  }
  E.m6kit.stats = stats;

  /* =========================================================
     m6_box - drag data dots and watch the five-number summary and box plot
     ========================================================= */
  L.m6_box = function (host, cfg, done) {
    host.innerHTML = hint(t("These are the hours 14 students spent on independent math work. Drag any dot along the line: the median, quartiles and box plot update live.", "هذه ساعات 14 طالبًا في العمل المستقل في الرياضيات. اسحب أي نقطة على الخط، فيتغير الوسيط والربيعان والصندوق مباشرة."));
    var S = K.make(host, 0.56, 360), data = [7, 3, 8, 7, 9, 8, 2, 4, 5, 0, 2, 1, 6, 4];
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make the maximum 12.", "اجعل أكبر قيمة 12."), t("Make the median exactly 6.", "اجعل الوسيط 6 بالضبط."), t("Make the box narrow: Q3 − Q1 at most 3.", "اجعل الصندوق ضيقًا: Q3 − Q1 لا يزيد على 3.")], done);
    var dp = dotPlot(S, data, 0, 15, info);
    function info() {
      var s = stats(data);
      out.innerHTML = "<span>" + t("ordered: ", "مرتبة: ") + eq(s.s.join(", ")) + "</span><span>min " + eq(F(s.min)) + "</span><span>Q1 " + eq(F(s.q1)) + "</span><b>" + t("median ", "الوسيط ") + eq(F(s.med)) + "</b><span>Q3 " + eq(F(s.q3)) + "</span><span>max " + eq(F(s.max)) + "</span>";
      if (dp && dp.busy()) return;
      if (s.max === 12) tick(0);
      if (s.med === 6) tick(1);
      if (s.q3 - s.q1 <= 3) tick(2);
    }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H); dp.draw(c, C);
      var s = stats(data), by = H * 0.74, bh = 36, X = dp.X;
      c.strokeStyle = C.ink; c.lineWidth = 2.5;
      c.beginPath(); c.moveTo(X(s.min), by); c.lineTo(X(s.q1), by); c.moveTo(X(s.q3), by); c.lineTo(X(s.max), by); c.moveTo(X(s.min), by - 12); c.lineTo(X(s.min), by + 12); c.moveTo(X(s.max), by - 12); c.lineTo(X(s.max), by + 12); c.stroke();
      K.rr(c, X(s.q1), by - bh / 2, Math.max(2, X(s.q3) - X(s.q1)), bh, 4); c.fillStyle = "rgba(250,204,21,.55)"; c.fill(); c.strokeStyle = "#b45309"; c.stroke();
      c.strokeStyle = "#b45309"; c.lineWidth = 3.5; c.beginPath(); c.moveTo(X(s.med), by - bh / 2); c.lineTo(X(s.med), by + bh / 2); c.stroke();
      [["min", s.min, -1], ["Q1", s.q1, 1], [t("med", "الوسيط"), s.med, -1], ["Q3", s.q3, 1], ["max", s.max, -1]].forEach(function (q) { K.txt(c, q[0], X(q[1]), by + q[2] * (bh / 2 + 10), { s: 10, c: C.muted }); });
      K.txt(c, t("hours of independent math work", "ساعات العمل المستقل في الرياضيات"), W / 2, 16, { s: 12, c: C.muted });
    });
  };

  /* =========================================================
     m6_mean - seesaw balance point + fair-share towers
     ========================================================= */
  L.m6_mean = function (host, cfg, done) {
    host.innerHTML = hint(t("Seesaw: drag the orange triangle until the beam is level. Fair share: drag the top block of one tower onto another until all towers are equal.", "الأرجوحة: اسحب المثلث البرتقالي حتى تصبح العارضة أفقية. النصيب العادل: اسحب المكعب العلوي من برج إلى آخر حتى تتساوى الأبراج.")) + '<div class="seg" id="mnm"></div><div class="seg" id="mnd" style="margin-top:6px"></div>';
    var SETS = [[32, 34, 36, 38, 40], [22, 19, 27, 25, 29, 21, 25]], si = 0, mode = "saw", f = 34, ang = 0, drag = null, tw = [3, 5, 2, 6, 4], tdrag = null;
    var S = K.make(host, (host.clientWidth || 600) < 520 ? 0.8 : 0.55, 360);
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Balance the greeting cards 32, 34, 36, 38, 40.", "حقق اتزان بطاقات التهنئة 32، 34، 36، 38، 40."), t("Balance the class sizes 22, 19, 27, 25, 29, 21, 25.", "حقق اتزان أعداد الفصول 22، 19، 27، 25، 29، 21، 25."), t("Fair share: level the pencil towers 3, 5, 2, 6, 4.", "النصيب العادل: سوِّ أبراج الأقلام 3، 5، 2، 6، 4.")], done);
    var segD = K.seg(host, "#mnd", [["0", t("cards", "البطاقات")], ["1", t("class sizes", "أعداد الفصول")]], "0", function (v) { si = +v; f = si ? 20 : 34; info(); });
    K.seg(host, "#mnm", [["saw", t("Seesaw", "الأرجوحة")], ["share", t("Fair share", "النصيب العادل")]], mode, function (v) { mode = v; host.querySelector("#mnd").style.display = v !== "saw" ? "none" : ""; info(); });
    function rng() { return si ? [16, 32] : [28, 44]; }
    function X(v) { var r = rng(); return 30 + (v - r[0]) * (S.W - 60) / (r[1] - r[0]); }
    function torque() { return SETS[si].reduce(function (s, v) { return s + (v - f); }, 0); }
    function info() {
      if (mode === "saw") {
        var d = SETS[si], sum = d.reduce(function (a, b) { return a + b; }, 0), tq = torque();
        out.innerHTML = "<span>" + t("balance point: ", "نقطة الارتكاز: ") + eq(F(f)) + "</span><span>" + t("total distance below/above: ", "مجموع المسافات أسفل/أعلى: ") + eq(F(tq)) + "</span>" + (tq === 0 ? '<b class="ok-t">✔ ' + t("Level! mean = ", "متزنة! المتوسط = ") + eq(sum + " ÷ " + d.length + " = " + F(sum / d.length)) + "</b>" : "");
        if (tq === 0) tick(si);
      } else {
        var eqv = tw.every(function (v) { return v === tw[0]; });
        out.innerHTML = "<span>" + t("towers: ", "الأبراج: ") + eq(tw.join(", ")) + "</span><span>" + t("total ", "المجموع ") + eq(String(tw.reduce(function (a, b) { return a + b; }, 0))) + "</span>" + (eqv ? '<b class="ok-t">✔ ' + t("Fair share = mean = ", "النصيب العادل = المتوسط = ") + eq("20 ÷ 5 = 4") + "</b>" : "");
        if (eqv) tick(2);
      }
    }
    function tgeo() { var W = S.W, H = S.H, bw = Math.min(54, (W - 40) / 5 - 12), cs = Math.min(30, (H - 60) / 7); return { bw: bw, cs: cs, x: function (i) { return 20 + i * ((W - 40) / 5) + ((W - 40) / 5 - bw) / 2; }, base: H - 26 }; }
    S.drag({
      down: function (p) {
        if (mode === "saw") { var by = S.H * 0.55; if (Math.abs(p.x - X(f)) < 26 && p.y > by - 10 && p.y < by + 60) { drag = true; return true; } return false; }
        var g = tgeo();
        for (var i = 0; i < 5; i++) { var top = g.base - tw[i] * g.cs; if (tw[i] > 0 && p.x > g.x(i) && p.x < g.x(i) + g.bw && p.y > top - 4 && p.y < top + g.cs + 4) { tdrag = { from: i, x: p.x, y: p.y }; return true; } }
        return false;
      },
      move: function (p) { if (drag) { var r = rng(), v = clamp(Math.round(r[0] + (p.x - 30) / (S.W - 60) * (r[1] - r[0])), r[0], r[1]); if (v !== f) { f = v; info(); } } if (tdrag) { tdrag.x = p.x; tdrag.y = p.y; } },
      up: function () {
        drag = null;
        if (tdrag) { var g = tgeo(); for (var i = 0; i < 5; i++) if (i !== tdrag.from && tdrag.x > g.x(i) - 8 && tdrag.x < g.x(i) + g.bw + 8) { tw[tdrag.from]--; tw[i]++; break; } tdrag = null; info(); }
      },
      hover: function (p) { return mode === "saw" ? Math.abs(p.x - X(f)) < 26 : true; }
    });
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      if (mode === "saw") {
        var target = clamp(torque() * 0.012, -0.28, 0.28), by = H * 0.55; ang += (target - ang) * Math.min(1, dt * 5);
        var fx = X(f); c.save(); c.translate(fx, by); c.rotate(ang);
        c.fillStyle = C.ink; c.fillRect(30 - fx - 10, -4, W - 40, 6);
        var cnt = {}; SETS[si].forEach(function (v) { cnt[v] = (cnt[v] || 0) + 1; K.dot(c, X(v) - fx, -14 - (cnt[v] - 1) * 16, 7.5, "#2563eb"); });
        c.restore();
        c.fillStyle = "#f97316"; c.beginPath(); c.moveTo(fx, by + 3); c.lineTo(fx - 18, by + 40); c.lineTo(fx + 18, by + 40); c.fill();
        var r = rng(); for (var v = r[0]; v <= r[1]; v += 2) K.txt(c, n(v), X(v), H - 16, { s: 10, c: C.muted });
        c.strokeStyle = C.line; c.beginPath(); c.moveTo(20, H - 28); c.lineTo(W - 20, H - 28); c.stroke();
        K.txt(c, Math.abs(torque()) < 1e-9 ? t("level", "متزنة") : torque() > 0 ? t("tips right: move the triangle right", "تميل يمينًا: حرّك المثلث يمينًا") : t("tips left: move the triangle left", "تميل يسارًا: حرّك المثلث يسارًا"), W / 2, 18, { s: 13, c: Math.abs(torque()) < 1e-9 ? "#16a34a" : C.muted });
      } else {
        var g = tgeo();
        c.fillStyle = C.line; c.fillRect(10, g.base, W - 20, 3);
        for (var i = 0; i < 5; i++) {
          var hgt = tw[i] - (tdrag && tdrag.from === i ? 1 : 0);
          for (var k = 0; k < hgt; k++) { K.rr(c, g.x(i), g.base - (k + 1) * g.cs + 1, g.bw, g.cs - 2, 5); c.fillStyle = "#facc15"; c.fill(); c.strokeStyle = "rgba(0,0,0,.25)"; c.lineWidth = 1; c.stroke(); }
          K.txt(c, n(tw[i]), g.x(i) + g.bw / 2, g.base + 14, { s: 12, c: C.ink });
        }
        c.strokeStyle = "#16a34a"; c.setLineDash([5, 4]); c.beginPath(); c.moveTo(10, g.base - 4 * g.cs); c.lineTo(W - 10, g.base - 4 * g.cs); c.stroke(); c.setLineDash([]);
        K.txt(c, t("mean = 4", "المتوسط = 4"), W - 14, g.base - 4 * g.cs - 10, { s: 11, c: "#16a34a", a: "right" });
        if (tdrag) { K.rr(c, tdrag.x - g.bw / 2, tdrag.y - g.cs / 2, g.bw, g.cs - 2, 5); c.fillStyle = "#fb923c"; c.fill(); }
      }
    });
  };

  /* =========================================================
     m6_outlier - drag dots: mean vs median, mode, range
     ========================================================= */
  L.m6_outlier = function (host, cfg, done) {
    host.innerHTML = hint(t("Number of siblings of 10 friends. Drag any dot. Orange line = mean, green line = median. Watch which one an outlier pulls.", "عدد إخوة 10 أصدقاء. اسحب أي نقطة: الخط البرتقالي = المتوسط، والأخضر = الوسيط. لاحظ أيهما تجذبه القيمة المتطرفة."));
    var S = K.make(host, 0.52, 340), data = [1, 2, 0, 1, 2, 1, 2, 1, 0, 2];
    var out = el("meter"); host.appendChild(out);
    var tick = L._goals(host, [t("Make an outlier: drag one dot far from the rest (7 or more).", "كوّن قيمة متطرفة: اسحب نقطة بعيدًا عن الباقي (7 أو أكثر)."), t("Make the range exactly 10.", "اجعل المدى 10 بالضبط."), t("Make the mean greater than 2 while the median stays 1.", "اجعل المتوسط أكبر من 2 مع بقاء الوسيط 1.")], done);
    var dp = dotPlot(S, data, 0, 10, info);
    function info() {
      var s = stats(data), second = s.s[s.s.length - 2];
      out.innerHTML = "<span>" + t("mean ", "المتوسط ") + eq(s.sum + " ÷ 10 = " + F(s.mean)) + "</span><span>" + t("median ", "الوسيط ") + eq(F(s.med)) + "</span><span>" + t("mode ", "المنوال ") + eq(F(s.mode)) + "</span><span>" + t("range ", "المدى ") + eq(s.max + " − " + s.min + " = " + (s.max - s.min)) + "</span>";
      if (dp && dp.busy()) return;
      if (s.max >= 7 && s.max - second >= 4) tick(0);
      if (s.max - s.min === 10) tick(1);
      if (s.mean > 2 && s.med === 1) tick(2);
    }
    info();
    LOOP(S, function (dt, c, W, H, C) {
      c.clearRect(0, 0, W, H);
      var s = stats(data), second = s.s[s.s.length - 2], y = dp.y();
      dp.draw(c, C, function (v) { return v === s.max && s.max - second >= 4 ? "#dc2626" : "#2563eb"; });
      c.lineWidth = 3;
      c.strokeStyle = "#16a34a"; c.beginPath(); c.moveTo(dp.X(s.med), y + 28); c.lineTo(dp.X(s.med), H - 40); c.stroke();
      c.strokeStyle = "#f97316"; c.beginPath(); c.moveTo(dp.X(s.mean), y + 28); c.lineTo(dp.X(s.mean), H - 22); c.stroke();
      K.txt(c, t("median ", "الوسيط ") + n(s.med), dp.X(s.med), H - 32, { s: 11, c: "#16a34a", a: s.mean >= s.med ? "right" : "left" });
      K.txt(c, t("mean ", "المتوسط ") + n(Math.round(s.mean * 100) / 100), dp.X(s.mean), H - 12, { s: 11, c: "#f97316", a: s.mean >= s.med ? "left" : "right" });
      c.strokeStyle = "#7c3aed"; c.lineWidth = 2; c.beginPath(); c.moveTo(dp.X(s.min), 14); c.lineTo(dp.X(s.max), 14); c.stroke();
      K.txt(c, t("range ", "المدى ") + n(s.max - s.min), (dp.X(s.min) + dp.X(s.max)) / 2, 26, { s: 11, c: "#7c3aed" });
    });
  };
})();
